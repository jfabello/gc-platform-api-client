/**
 * Download file
 * @module gc-platform-api-downloads
 * @documentation https://developer.genesys.cloud/devapps/api-explorer
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.272Z

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
 * Downloads - Download file
 * @class Downloads
 */
class DownloadsAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the Downloads class
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
	 * Issues a redirect to a signed secure download URL for specified download
	 * @async
	 * @param {string} downloadId - Download ID
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} [query.contentDisposition] -  
	 * @param {boolean} [query.issueRedirect] -  
	 * @param {boolean} [query.redirectToAuth] -  
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/downloads/{downloadId}" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getDownload(downloadId, query) {
		const endpointPath = "/api/v2/downloads/{downloadId}";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(downloadId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "downloadId", "string");
		}

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("contentDisposition" in query && this.#checkJSONSchemaType(query["contentDisposition"], "string") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "contentDisposition", "string");
			}
			if ("issueRedirect" in query && this.#checkJSONSchemaType(query["issueRedirect"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "issueRedirect", "boolean");
			}
			if ("redirectToAuth" in query && this.#checkJSONSchemaType(query["redirectToAuth"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "redirectToAuth", "boolean");
			}
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.downloadId = downloadId;
		apiCallOptions.queryParameters = query;

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

export { DownloadsAPI };