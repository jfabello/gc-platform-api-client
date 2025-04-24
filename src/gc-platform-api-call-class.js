/**
 * High-performance Genesys Cloud Platform API client for Node.js API call class.
 * @module gc-platform-api-call-class
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import crypto from "node:crypto";

// Constants
import { constants } from "./gc-platform-api-client-constants.js";

// Errors
import { errors } from "./gc-platform-api-client-errors.js";

// Regexes
import { regexes } from "./gc-platform-api-client-regexes.js";

// Symbols
import { symbols } from "./gc-platform-api-client-symbols.js";

/** @typedef {import("./gc-platform-api-call-queue-class.js").GCPlatformAPICallQueue} GCPlatformAPICallQueue */
/** @typedef {import("@jfabello/http-client").HTTPResponse} HTTPResponse */

/**
 * High-performance Genesys Cloud Platform API client for Node.js API call class.
 * @class GCPlatformAPICall
 */
class GCPlatformAPICall {
	// Private instance properties
	/** @type {GCPlatformAPICall} */ #previous = null;
	/** @type {GCPlatformAPICall} */ #next = null;
	/** @type {GCPlatformAPICallQueue} */ #queue = null;
	/** @type {string} */ #id = null;
	/** @type {Date} */ #creationDate = null;
	/** @type {string} */ #endpointPath = null;
	/** @type {string} */ #endpointMethod = null;
	/** @type {object} */ #headers = null;
	/** @type {object} */ #pathParameters = null;
	/** @type {object} */ #queryParameters = null;
	/** @type {object} */ #body = null;
	/** @type {Promise} */ #executionPromise = null;
	/** @type {Function} */ #executionPromiseResolve = null;
	/** @type {Function} */ #executionPromiseReject = null;
	/** @type {number} */ #requestAttempts = 0;

	/**
	 * The previous linked API call
	 * @type {GCPlatformAPICall}
	 */
	get previous() {
		return this.#previous;
	}

	/**
	 * The next linked API call
	 * @type {GCPlatformAPICall}
	 */
	get next() {
		return this.#next;
	}

	/**
	 * The Genesys Cloud Platform API call queue associated with this API call
	 * @type {GCPlatformAPICallQueue}
	 */
	get queue() {
		return this.#queue;
	}

	/**
	 * The previous linked API call
	 * @type {GCPlatformAPICall}
	 */
	set previous(previous) {
		if (previous !== null && (typeof previous !== "object" || previous instanceof GCPlatformAPICall === false)) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The previous linked API call argument must be an instance of the GCPlatformAPICall class or null.");
		}
		this.#previous = previous;
	}

	/**
	 * The next linked API call
	 * @type {GCPlatformAPICall}
	 */
	set next(next) {
		if (next !== null && (typeof next !== "object" || next instanceof GCPlatformAPICall === false)) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The next linked API call argument must be an instance of the GCPlatformAPICall class or null.");
		}
		this.#next = next;
	}

	/**
	 * The Genesys Cloud Platform API call queue associated with this API call
	 * @type {GCPlatformAPICallQueue}
	 */
	set queue(queue) {
		if (queue !== null && (typeof queue !== "object" || symbols.GCPlatformAPICallQueue in queue === false)) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR("The Genesys Cloud Platform API call queue argument must be an instance of the GCPlatformAPICallQueue class or null.");
		}
		this.#queue = queue;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call ID
	 * @readonly
	 * @type {string}
	 */
	get id() {
		return this.#id;
	}

	/**
	 * Read-only property that returns the API call creation date
	 * @readonly
	 * @type {Date}
	 */
	get creationDate() {
		// Return a new Date instance to protect the internal date object
		return new Date(this.#creationDate);
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call endpoint path
	 * @readonly
	 * @type {string}
	 */
	get endpointPath() {
		return this.#endpointPath;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call endpoint method
	 * @readonly
	 * @type {string}
	 */
	get endpointMethod() {
		return this.#endpointMethod;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call headers
	 * @readonly
	 * @type {object}
	 */
	get headers() {
		return this.#headers;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call path parameters
	 * @readonly
	 * @type {object}
	 */
	get pathParameters() {
		return this.#pathParameters;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call query string parameters
	 * @readonly
	 * @type {object}
	 */
	get queryParameters() {
		return this.#queryParameters;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call body
	 * @readonly
	 * @type {object}
	 */
	get body() {
		return this.#body;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call execution promise
	 * @readonly
	 * @type {Promise<HTTPResponse>}
	 */
	get executionPromise() {
		return this.#executionPromise;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call execution promise resolve function
	 * @readonly
	 * @type {Function}
	 */
	get executionPromiseResolve() {
		return this.#executionPromiseResolve;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call execution promise reject function
	 * @readonly
	 * @type {Function}
	 */
	get executionPromiseReject() {
		return this.#executionPromiseReject;
	}

	/**
	 * Read-only property that returns the Genesys Cloud Platform API call request attempts. This counter does not include attempts that returned a rate limit exceeded (429) status code or attempts that failed due to an expired OAuth access token
	 * @readonly
	 * @type {number}
	 */
	get requestAttempts() {
		return this.#requestAttempts;
	}

	/**
	 * @constructor
	 * @param {string} endpointPath - The Genesys Cloud Platform API endpoint path.
	 * @param {string} endpointMethod - The Genesys Cloud Platform API endpoint method.
	 * @param {object} [options] - The Genesys Cloud Platform API call options object.
	 * @param {object} [options.pathParameters=null] - The Genesys Cloud Platform API endpoint call path parameters.
	 * @param {object} [options.headers=null] - The Genesys Cloud Platform API endpoint call headers.
	 * @param {object} [options.queryParameters=null] - The Genesys Cloud Platform API endpoint call query string parameters.
	 * @param {object} [options.body=null] - The Genesys Cloud Platform API endpoint call body.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call path argument is not a string or is not a valid Genesys Cloud Platform API endpoint path.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call method argument is not a string or is not a valid HTTP method.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call path parameters argument is not an object.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call headers argument is not an object.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call query string parameters argument is not an object.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} If the API endpoint call body argument is not an object.
	 */
	constructor(endpointPath, endpointMethod, { pathParameters = null, headers = null, queryParameters = null, body = null } = {}) {
		// Check the Genesys Cloud Platform API endpoint call path
		if (typeof endpointPath !== "string") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID();
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		if (regexes.gcPlatformAPIPath.test(endpointPath) === false) {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID(endpointPath);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		// Check the Genesys Cloud Platform API endpoint call method
		if (typeof endpointMethod !== "string") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID();
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		if (constants.HTTP_METHODS.includes(endpointMethod) === false) {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID(endpointMethod);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		// Check the Genesys Cloud Platform API endpoint call path parameters object
		if (typeof pathParameters !== "object") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		// Check the Genesys Cloud Platform API endpoint call headers object
		if (typeof headers !== "object") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID(endpointPath, endpointMethod, false);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		// Check the Genesys Cloud Platform API endpoint call query string parameters object
		if (typeof queryParameters !== "object") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		// Check the Genesys Cloud Platform API endpoint call body object
		if (typeof body !== "object") {
			const error = new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "object", false);
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(error.message, error);
		}

		this.#id = crypto.randomUUID();
		this.#creationDate = new Date();
		this.#endpointPath = endpointPath;
		this.#endpointMethod = endpointMethod;
		this.#pathParameters = pathParameters;
		this.#headers = headers;
		this.#queryParameters = queryParameters;
		this.#body = body;

		this.#executionPromise = new Promise((resolve, reject) => {
			this.#executionPromiseResolve = resolve;
			this.#executionPromiseReject = reject;
		});
	}

	/**
	 * Increments the request attempts counter by one.
	 * @returns {GCPlatformAPICall} This instance of the Genesys Cloud API call class.
	 */
	incrementRequestAttempts() {
		this.#requestAttempts++;
		return this;
	}
}

Object.defineProperty(GCPlatformAPICall.prototype, symbols.GCPlatformAPICall, {
	configurable: false,
	enumerable: false,
	writable: false,
	value: symbols.GCPlatformAPICall
});

export { GCPlatformAPICall };
