/**
 * Telephony providers and configuration
 * @module gc-platform-api-telephony
 * @documentation https://developer.genesys.cloud/telephony/telephony-apis
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.310Z

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
 * @typedef {object} SIPSearchPublicRequest
 * @property {string} [id] - The globally unique identifier for the object.
 * @property {string} [name]
 * @property {string} [callId] - unique identification of the placed call
 * @property {string} [toUser] - SIP user to who the call was placed
 * @property {string} [fromUser] - SIP user who placed the call
 * @property {string} [conversationId] - Unique identification of the conversation
 * @property {string} [participantId] - Unique identification of the participant
 * @property {string} dateStart - Start date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
 * @property {string} dateEnd - End date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
 * @property {string} [selfUri] - The URI for this object
 */
 

/**
 * Telephony - Telephony providers and configuration
 * @class Telephony
 */
class TelephonyAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the Telephony class
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
	 * Retrieve the list of AWS regions media can stream through.
	 * @async
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/mediaregions" endpoint.
	 */
	getTelephonyMediaregions() {
		const endpointPath = "/api/v2/telephony/mediaregions";
		const endpointMethod = "GET";

		const apiCallOptions = {};

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Get SIP headers.
	 * @async
	 * @param {string} conversationId - Conversation id
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string[]} [query.keys] -  comma-separated list of header identifiers to query. e.g. ruri,to,from
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/sipmessages/conversations/{conversationId}/headers" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getTelephonySipmessagesConversationHeaders(conversationId, query) {
		const endpointPath = "/api/v2/telephony/sipmessages/conversations/{conversationId}/headers";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(conversationId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "conversationId", "string");
		}

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("keys" in query && this.#checkJSONSchemaType(query["keys"], "array") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "keys", "array");
			}
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.conversationId = conversationId;
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Get a SIP message.
	 * @async
	 * @param {string} conversationId - Conversation id
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/sipmessages/conversations/{conversationId}" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	getTelephonySipmessagesConversation(conversationId) {
		const endpointPath = "/api/v2/telephony/sipmessages/conversations/{conversationId}";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(conversationId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "conversationId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.conversationId = conversationId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Fetch SIP metadata
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} [query.callId] -  unique identification of the placed call
	 * @param {string} [query.toUser] -  User to who the call was placed
	 * @param {string} [query.fromUser] -  user who placed the call
	 * @param {string} [query.conversationId] -  Unique identification of the conversation
	 * @param {string} query.dateStart -  Start date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {string} query.dateEnd -  End date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/siptraces" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING} If a required query string parameter is missing.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getTelephonySiptraces(query) {
		const endpointPath = "/api/v2/telephony/siptraces";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object" || query === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, true);
		}

		if ("callId" in query && this.#checkJSONSchemaType(query["callId"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "callId", "string");
		}

		if ("toUser" in query && this.#checkJSONSchemaType(query["toUser"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "toUser", "string");
		}

		if ("fromUser" in query && this.#checkJSONSchemaType(query["fromUser"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "fromUser", "string");
		}

		if ("conversationId" in query && this.#checkJSONSchemaType(query["conversationId"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "conversationId", "string");
		}

		if ("dateStart" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "dateStart");
		}

		if (this.#checkJSONSchemaType(query["dateStart"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "dateStart", "string");
		}

		if ("dateEnd" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "dateEnd");
		}

		if (this.#checkJSONSchemaType(query["dateEnd"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "dateEnd", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Request a download of a pcap file to S3
	 * @async
	 * @param {SIPSearchPublicRequest} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/siptraces/download" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	postTelephonySiptracesDownload(body) {
		const endpointPath = "/api/v2/telephony/siptraces/download";
		const endpointMethod = "POST";

		// Check the body argument
		if (this.#checkJSONSchemaType(body, "object") === false || body === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "object", true);
		}

		const apiCallOptions = {};
		apiCallOptions.body = body;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Get signed S3 URL for a pcap download
	 * @async
	 * @param {string} downloadId - unique id for the downloaded file in S3
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/telephony/siptraces/download/{downloadId}" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	getTelephonySiptracesDownloadDownloadId(downloadId) {
		const endpointPath = "/api/v2/telephony/siptraces/download/{downloadId}";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(downloadId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "downloadId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.downloadId = downloadId;

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

export { TelephonyAPI };