/**
 * Working with General Data Protection Regulation (GDPR) requests
 * @module gc-platform-api-general-data-protection-regulation
 * @documentation https://developer.genesys.cloud/gdprprivacy/
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.273Z

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
 * @typedef {object} DialerContactId
 * @property {string} [id]
 * @property {string} [contactListId]
 */
 
/**
 * @typedef {object} DomainEntityRef
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [selfUri]
 */
 
/**
 * @typedef {object} GDPRJourneyCustomer
 * @property {string} [type] - The type of the customerId within the Journey System (e.g. cookie). Required if `id` is defined.
 * @property {string} [id] - An ID of a customer within the Journey System at a point-in-time. Required if `type` is defined.
 */
 
/**
 * @typedef {object} GDPRRequest
 * @property {string} [id] - The globally unique identifier for the object.
 * @property {string} [name]
 * @property {DomainEntityRef} createdBy - The user that created this request
 * @property {ReplacementTerm[]} [replacementTerms] - The replacement terms for the provided search terms, in the case of a GDPR_UPDATE request
 * @property {string} requestType - The type of GDPR request
 * @property {string} createdDate - When the request was submitted. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
 * @property {string} status - The status of the request
 * @property {GDPRSubject} subject - The subject of the GDPR request
 * @property {string} [resultsUrl] - The location where the results of the request can be retrieved
 * @property {string} [selfUri] - The URI for this object
 */
 
/**
 * @typedef {object} GDPRSubject
 * @property {string} [name]
 * @property {string} [userId]
 * @property {string} [externalContactId]
 * @property {DialerContactId} [dialerContactId]
 * @property {GDPRJourneyCustomer} [journeyCustomer]
 * @property {SocialHandle} [socialHandle]
 * @property {string} [externalId]
 * @property {string[]} [addresses]
 * @property {string[]} [phoneNumbers]
 * @property {string[]} [emailAddresses]
 */
 
/**
 * @typedef {object} ReplacementTerm
 * @property {string} [type] - Social Handle Type
 * @property {string} [existingValue]
 * @property {string} [updatedValue]
 */
 
/**
 * @typedef {object} SocialHandle
 * @property {string} [type] - Social Handle Type
 * @property {string} [value]
 */
 

/**
 * GeneralDataProtectionRegulation - Working with General Data Protection Regulation (GDPR) requests
 * @class GeneralDataProtectionRegulation
 */
class GeneralDataProtectionRegulationAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the GeneralDataProtectionRegulation class
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
	 * Get an existing GDPR request
	 * @async
	 * @param {string} requestId - Request id
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/gdpr/requests/{requestId}" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	getGdprRequest(requestId) {
		const endpointPath = "/api/v2/gdpr/requests/{requestId}";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(requestId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "requestId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.requestId = requestId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Get all GDPR requests
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {number} [query.pageSize] -  Page size
	 * @param {number} [query.pageNumber] -  Page number
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/gdpr/requests" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getGdprRequests(query) {
		const endpointPath = "/api/v2/gdpr/requests";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("pageSize" in query && this.#checkJSONSchemaType(query["pageSize"], "integer") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "pageSize", "integer");
			}
			if ("pageNumber" in query && this.#checkJSONSchemaType(query["pageNumber"], "integer") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "pageNumber", "integer");
			}
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Submit a new GDPR request
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {boolean} [query.deleteConfirmed] -  Confirm delete
	 * @param {GDPRRequest} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/gdpr/requests" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	postGdprRequests(query, body) {
		const endpointPath = "/api/v2/gdpr/requests";
		const endpointMethod = "POST";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("deleteConfirmed" in query && this.#checkJSONSchemaType(query["deleteConfirmed"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "deleteConfirmed", "boolean");
			}
		}

		// Check the body argument
		if (this.#checkJSONSchemaType(body, "object") === false || body === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "object", true);
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;
		apiCallOptions.body = body;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Get GDPR subjects
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} query.searchType -  Search Type
	 * @param {string} query.searchValue -  Search Value
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/gdpr/subjects" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING} If a required query string parameter is missing.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getGdprSubjects(query) {
		const endpointPath = "/api/v2/gdpr/subjects";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object" || query === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, true);
		}

		if ("searchType" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "searchType");
		}

		if (this.#checkJSONSchemaType(query["searchType"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "searchType", "string");
		}

		if ("searchValue" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "searchValue");
		}

		if (this.#checkJSONSchemaType(query["searchValue"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "searchValue", "string");
		}

		const apiCallOptions = {};
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

export { GeneralDataProtectionRegulationAPI };