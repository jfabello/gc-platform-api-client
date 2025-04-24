/**
 * High-performance Genesys Cloud Platform API client for Node.js API call bi-directional queue class.
 * @module gc-platform-api-call-queue-class
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { EventEmitter } from "node:events";

// Errors
import { errors } from "./gc-platform-api-client-errors.js";

// Symbols
import { symbols } from "./gc-platform-api-client-symbols.js";

/** @typedef {import("./gc-platform-api-call-class.js").GCPlatformAPICall} GCPlatformAPICall */

/**
 * High-performance Genesys Cloud Platform API client for Node.js API call bi-directional queue class.
 * @class GCPlatformAPICallQueue
 */
class GCPlatformAPICallQueue {
	// Private instance properties
	/** @type {GCPlatformAPICall} */ #front = null;
	/** @type {GCPlatformAPICall} */ back = null;
	/** @type {string} */ #name = null;
	/** @type {number} */ #length = 0;
	/** @type {EventEmitter} */ #internalEventEmitter = null;

	/**
	 * Read-only property that returns the length of the queue
	 * @readonly
	 * @type {number}
	 */
	get length() {
		return this.#length;
	}

	/**
	 * Read-only property that exposes the on(...) method of the internal event emitter
	 * @readonly
	 * @type {Function}
	 */
	get on() {
		return this.#internalEventEmitter.on.bind(this.#internalEventEmitter);
	}

	/**
	 * @constructor
	 * @param {string} queueName - The name of the queue.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the queue name is not a non-empty string.
	 */
	constructor(queueName) {
		if (typeof queueName !== "string" || queueName.length === 0) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call queue name argument must be a non-empty string.");
		}

		this.#name = queueName;
		this.#internalEventEmitter = new EventEmitter();
	}

	/**
	 * Pushes an API call to the front of the queue.
	 * @param {GCPlatformAPICall} gcPlatformAPICall - The API call to add to the queue.
	 * @returns {GCPlatformAPICallQueue} - The instance of the queue.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the API call argument is not an object, not an instance of GCPlatformAPICall, or already belongs to a queue.
	 */

	pushFront(gcPlatformAPICall) {
		if (typeof gcPlatformAPICall !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an object.");
		}

		if (symbols.GCPlatformAPICall in gcPlatformAPICall === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an instance of GCPlatformAPICall.");
		}

		if (gcPlatformAPICall.queue !== null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call is already in a queue.");
		}

		gcPlatformAPICall.previous = null;
		gcPlatformAPICall.next = this.#front;
		gcPlatformAPICall.queue = this;

		if (this.#front !== null) {
			this.#front.previous = gcPlatformAPICall;
		} else {
			this.back = gcPlatformAPICall;
		}

		this.#front = gcPlatformAPICall;

		this.#length++;

		this.#internalEventEmitter.emit("node-add", {
			eventDate: new Date(),
			apiCallID: gcPlatformAPICall.id,
			apiCallCreationDate: new Date(gcPlatformAPICall.creationDate),
			endpointPath: gcPlatformAPICall.endpointPath,
			endpointMethod: gcPlatformAPICall.endpointMethod,
			queueName: this.#name,
			queueLength: this.#length,
			addMethod: "pushFront"
		});

		return this;
	}

	/**
	 * Pushes an API call to the back of the queue.
	 * @param {GCPlatformAPICall} gcPlatformAPICall - The API call to add to the queue.
	 * @returns {GCPlatformAPICallQueue} - The instance of the queue.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the API call argument is not an object, not an instance of GCPlatformAPICall, or already belongs to a queue.
	 */

	pushBack(gcPlatformAPICall) {
		if (typeof gcPlatformAPICall !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an object.");
		}

		if (symbols.GCPlatformAPICall in gcPlatformAPICall === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an instance of GCPlatformAPICall.");
		}

		if (gcPlatformAPICall.queue !== null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call is already in a queue.");
		}

		gcPlatformAPICall.previous = this.back;
		gcPlatformAPICall.next = null;
		gcPlatformAPICall.queue = this;

		if (this.back !== null) {
			this.back.next = gcPlatformAPICall;
		} else {
			this.#front = gcPlatformAPICall;
		}

		this.back = gcPlatformAPICall;

		this.#length++;

		this.#internalEventEmitter.emit("node-add", {
			eventDate: new Date(),
			apiCallID: gcPlatformAPICall.id,
			apiCallCreationDate: new Date(gcPlatformAPICall.creationDate),
			endpointPath: gcPlatformAPICall.endpointPath,
			endpointMethod: gcPlatformAPICall.endpointMethod,
			queueName: this.#name,
			queueLength: this.#length,
			addMethod: "pushBack"
		});

		return this;
	}

	/**
	 * Pops the API call at the front of the queue.
	 * @returns {GCPlatformAPICall} - The API call at the front of the queue or null if the queue is empty.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the queue length is zero but it has API calls associated to it.
	 */
	popFront() {
		if (this.#front === null) {
			return null;
		}

		if (this.#length === 0) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call queue is already empty but the front is not null.");
		}

		const gcPlatformAPICall = this.#front;

		if (gcPlatformAPICall.next !== null) {
			this.#front = gcPlatformAPICall.next;
			this.#front.previous = null;
		} else {
			this.#front = null;
			this.back = null;
		}

		gcPlatformAPICall.previous = null;
		gcPlatformAPICall.next = null;
		gcPlatformAPICall.queue = null;

		this.#length--;

		this.#internalEventEmitter.emit("node-remove", {
			eventDate: new Date(),
			apiCallID: gcPlatformAPICall.id,
			apiCallCreationDate: new Date(gcPlatformAPICall.creationDate),
			endpointPath: gcPlatformAPICall.endpointPath,
			endpointMethod: gcPlatformAPICall.endpointMethod,
			queueName: this.#name,
			queueLength: this.#length,
			removeMethod: "popFront"
		});

		return gcPlatformAPICall;
	}

	/**
	 * Pops the API call at the back of the queue.
	 * @returns {GCPlatformAPICall} - The API call at the back of the queue or null if the queue is empty.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the queue length is zero but it has API calls associated to it.
	 */
	popBack() {
		if (this.back === null) {
			return null;
		}

		if (this.#length === 0) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call queue is already empty but the back is not null.");
		}

		const gcPlatformAPICall = this.back;

		if (gcPlatformAPICall.previous !== null) {
			this.back = gcPlatformAPICall.previous;
			this.back.next = null;
		} else {
			this.#front = null;
			this.back = null;
		}

		gcPlatformAPICall.previous = null;
		gcPlatformAPICall.next = null;
		gcPlatformAPICall.queue = null;

		this.#length--;

		this.#internalEventEmitter.emit("node-remove", {
			eventDate: new Date(),
			apiCallID: gcPlatformAPICall.id,
			apiCallCreationDate: new Date(gcPlatformAPICall.creationDate),
			endpointPath: gcPlatformAPICall.endpointPath,
			endpointMethod: gcPlatformAPICall.endpointMethod,
			queueName: this.#name,
			queueLength: this.#length,
			removeMethod: "popBack"
		});

		return gcPlatformAPICall;
	}

	/**
	 * Removes an API call from the queue.
	 * @param {GCPlatformAPICall} gcPlatformAPICall - The API call to remove from the queue.
	 * @returns {GCPlatformAPICallQueue} - The instance of the queue.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the API call argument is not an object, not an instance of GCPlatformAPICall, or does not belong to the queue.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the queue length is zero but it has API calls associated to it.
	 */

	remove(gcPlatformAPICall) {
		if (typeof gcPlatformAPICall !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an object.");
		}

		if (symbols.GCPlatformAPICall in gcPlatformAPICall === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call argument must be an instance of GCPlatformAPICall.");
		}

		if (gcPlatformAPICall.queue !== this) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call is not in this queue.");
		}

		if (this.#length === 0) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("There are API calls associated with the Genesys Cloud Platform API call queue but its length is zero.");
		}

		if (gcPlatformAPICall.previous !== null) {
			gcPlatformAPICall.previous.next = gcPlatformAPICall.next;
		} else {
			this.#front = gcPlatformAPICall.next;
		}

		if (gcPlatformAPICall.next !== null) {
			gcPlatformAPICall.next.previous = gcPlatformAPICall.previous;
		} else {
			this.back = gcPlatformAPICall.previous;
		}

		gcPlatformAPICall.previous = null;
		gcPlatformAPICall.next = null;
		gcPlatformAPICall.queue = null;

		this.#length--;

		this.#internalEventEmitter.emit("node-remove", {
			eventDate: new Date(),
			apiCallID: gcPlatformAPICall.id,
			apiCallCreationDate: new Date(gcPlatformAPICall.creationDate),
			endpointPath: gcPlatformAPICall.endpointPath,
			endpointMethod: gcPlatformAPICall.endpointMethod,
			queueName: this.#name,
			queueLength: this.#length,
			removeMethod: "remove"
		});

		return this;
	}

	/**
	 * Removes all the API calls from the queue and returns an array with the removed API calls.
	 * @returns {Array<GCPlatformAPICall>} - An array with the removed API calls.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the number of API calls removed from the queue does not match the length of the queue.
	 */
	removeAll() {
		const removedAPICalls = [];

		let currentAPICall = this.#front;
		let queueLength = this.#length;
		let apiCallsCounter = 0;

		while (currentAPICall !== null) {
			const nextAPICall = currentAPICall.next;
			currentAPICall.previous = null;
			currentAPICall.next = null;
			currentAPICall.queue = null;
			apiCallsCounter++;

			this.#internalEventEmitter.emit("node-remove", {
				eventDate: new Date(),
				apiCallID: currentAPICall.id,
				apiCallCreationDate: new Date(currentAPICall.creationDate),
				endpointPath: currentAPICall.endpointPath,
				endpointMethod: currentAPICall.endpointMethod,
				queueName: this.#name,
				queueLength: this.#length,
				removeMethod: "removeAll"
			});

			removedAPICalls.push(currentAPICall);
			currentAPICall = nextAPICall;
		}

		this.#front = null;
		this.back = null;
		this.#length = 0;

		if (apiCallsCounter !== queueLength) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The number of API calls removed from the Genesys Cloud Platform API calls queue does not match the length of the queue.");
		}

		return removedAPICalls;
	}

	/**
	 * Returns an array with the execution promises of all the API calls in the queue.
	 * @returns {Array<Promise>} - An array of execution promises.
	 */
	peekAllPromises() {
		const apiCallPromises = [];

		let currentAPICall = this.#front;

		while (currentAPICall !== null) {
			apiCallPromises.push(currentAPICall.executionPromise);
			currentAPICall = currentAPICall.next;
		}

		return apiCallPromises;
	}
}

Object.defineProperty(GCPlatformAPICallQueue.prototype, symbols.GCPlatformAPICallQueue, {
	configurable: false,
	enumerable: false,
	writable: false,
	value: symbols.GCPlatformAPICallQueue
});

export { GCPlatformAPICallQueue };
