/**
 * Channels, subscriptions, topics, mobile push registration
 * @module gc-platform-api-notifications
 * @documentation https://developer.genesys.cloud/notificationsalerts/notifications/notifications-apis
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.297Z

// TODO: Implement JSON schema verification for input and output objects
// TODO: Implement HTTP response typedefs

// Set strict mode
"use strict";

// Errors
import { errors } from "../gc-platform-api-client-errors.js";

// Symbols
import { symbols } from "../gc-platform-api-client-symbols.js";

/** @typedef {import("../gc-platform-api-client-class.js").GCPlatformAPIClient} GCPlatformAPIClient */
/** @typedef {import("@jfabello/http-client").HTTPResponse} HTTPResponse */

/**
 * @typedef {object} ChannelTopic
 * @property {string} [id]
 * @property {string} [state]
 * @property {string} [rejectionReason]
 * @property {string} [selfUri] - The URI for this object
 */
 

/**
 * Notifications - Channels, subscriptions, topics, mobile push registration
 * @class Notifications
 */
class NotificationsAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the Notifications class
	 * @constructor
	 * @param {GCPlatformAPIClient} gcPlatformAPIClient - The Genesys Cloud Platform API client instance.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID} If the Genesys Cloud Platform API client instance argument is not an object.
	 */
	constructor(gcPlatformAPIClient) {
		// Check the Genesys Cloud Platform API client instance argument
		if (typeof gcPlatformAPIClient !== "object" || symbols.GCPlatformAPIClient in gcPlatformAPIClient === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID();
		}

		// Initialize the instance properties
		this.#gcPlatformAPIClient = gcPlatformAPIClient;
	}

	/**
	 * Get available notification topics.
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string[]} [query.expand] -  Which fields, if any, to expand
	 * @param {boolean} [query.includePreview] -  Whether or not to include Preview topics
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/availabletopics" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getNotificationsAvailabletopics(query) {
		const endpointPath = "/api/v2/notifications/availabletopics";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("expand" in query && this.#checkJSONSchemaType(query["expand"], "array") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "expand", "array");
			}
			if ("includePreview" in query && this.#checkJSONSchemaType(query["includePreview"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "includePreview", "boolean");
			}
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * The list of existing channels
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} [query.includechannels] -  Show user's channels for this specific token or across all tokens for this user and app.  Channel Ids for other access tokens will not be shown, but will be presented to show their existence.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getNotificationsChannels(query) {
		const endpointPath = "/api/v2/notifications/channels";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("includechannels" in query && this.#checkJSONSchemaType(query["includechannels"], "string") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "includechannels", "string");
			}
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Create a new channel
	 * @async
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels" endpoint.
	 */
	postNotificationsChannels() {
		const endpointPath = "/api/v2/notifications/channels";
		const endpointMethod = "POST";

		const apiCallOptions = {};

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Verify a channel still exists and is valid
	 * @async
	 * @param {string} channelId - Channel ID
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels/{channelId}" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	headNotificationsChannel(channelId) {
		const endpointPath = "/api/v2/notifications/channels/{channelId}";
		const endpointMethod = "HEAD";

		// Check the path parameters
		if (this.#checkJSONSchemaType(channelId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "channelId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.channelId = channelId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * The list of all subscriptions for this channel
	 * @async
	 * @param {string} channelId - Channel ID
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels/{channelId}/subscriptions" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	getNotificationsChannelSubscriptions(channelId) {
		const endpointPath = "/api/v2/notifications/channels/{channelId}/subscriptions";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(channelId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "channelId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.channelId = channelId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Add a list of subscriptions to the existing list of subscriptions
	 * @async
	 * @param {string} channelId - Channel ID
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {boolean} [query.ignoreErrors] -  Optionally prevent throwing of errors for failed permissions checks.
	 * @param {ChannelTopic[]} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels/{channelId}/subscriptions" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	postNotificationsChannelSubscriptions(channelId, query, body) {
		const endpointPath = "/api/v2/notifications/channels/{channelId}/subscriptions";
		const endpointMethod = "POST";

		// Check the path parameters
		if (this.#checkJSONSchemaType(channelId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "channelId", "string");
		}

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("ignoreErrors" in query && this.#checkJSONSchemaType(query["ignoreErrors"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "ignoreErrors", "boolean");
			}
		}

		// Check the body argument
		if (this.#checkJSONSchemaType(body, "array") === false || body === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "array", true);
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.channelId = channelId;
		apiCallOptions.queryParameters = query;
		apiCallOptions.body = body;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Replace the current list of subscriptions with a new list.
	 * @async
	 * @param {string} channelId - Channel ID
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {boolean} [query.ignoreErrors] -  Optionally prevent throwing of errors for failed permissions checks.
	 * @param {ChannelTopic[]} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels/{channelId}/subscriptions" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	putNotificationsChannelSubscriptions(channelId, query, body) {
		const endpointPath = "/api/v2/notifications/channels/{channelId}/subscriptions";
		const endpointMethod = "PUT";

		// Check the path parameters
		if (this.#checkJSONSchemaType(channelId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "channelId", "string");
		}

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("ignoreErrors" in query && this.#checkJSONSchemaType(query["ignoreErrors"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "ignoreErrors", "boolean");
			}
		}

		// Check the body argument
		if (this.#checkJSONSchemaType(body, "array") === false || body === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "array", true);
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.channelId = channelId;
		apiCallOptions.queryParameters = query;
		apiCallOptions.body = body;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Remove all subscriptions
	 * @async
	 * @param {string} channelId - Channel ID
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/notifications/channels/{channelId}/subscriptions" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	deleteNotificationsChannelSubscriptions(channelId) {
		const endpointPath = "/api/v2/notifications/channels/{channelId}/subscriptions";
		const endpointMethod = "DELETE";

		// Check the path parameters
		if (this.#checkJSONSchemaType(channelId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "channelId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.channelId = channelId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * @description Checks that a value is of the proper JSON schema type
	 * @param {*} value - The value to check
	 * @param {string} jsonSchemaType - The JSON schema type to check against
	 * @returns {boolean} Returns true if the value is of the proper JSON schema type, false otherwise
	 */
	#checkJSONSchemaType(value, jsonSchemaType) {
		const PASSTHROUGH_JSON_SCHEMA_TYPES = ["boolean", "number", "string", "object"];

		// Check if the type is a passthrough type
		if (PASSTHROUGH_JSON_SCHEMA_TYPES.includes(jsonSchemaType)) {
			return typeof value === jsonSchemaType;
		}

		// Check if the type is an integer
		if (jsonSchemaType === "integer") {
			return Number.isInteger(value);
		}

		// Check if the type is an array
		if (jsonSchemaType === "array") {
			return Array.isArray(value);
		}

		// Check if the type is null
		if (jsonSchemaType === "null") {
			return value === null;
		}

		// Otherwise, return false
		return false;
	}
}

export { NotificationsAPI };