/**
 * Search suggest user, group, locations
 * @module gc-platform-api-suggest
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.306Z

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
 * @typedef {object} SearchAggregation
 * @property {string} [field] - The field used for aggregation
 * @property {string} [name] - The name of the aggregation. The response aggregation uses this name.
 * @property {string} [type] - The type of aggregation to perform
 * @property {string} [value] - A value to use for aggregation
 * @property {number} [size] - The number aggregations results to return out of the entire result set
 * @property {string[]} [order] - The order in which aggregation results are sorted
 */
 
/**
 * @typedef {object} SearchCriteria
 * @property {string} [endValue] - The end value of the range. This field is used for range search types.
 * @property {string[]} [values] - A list of values for the search to match against
 * @property {string} [startValue] - The start value of the range. This field is used for range search types.
 * @property {string} [value] - A value for the search to match against
 * @property {string} [operator] - How to apply this search criteria against other criteria
 * @property {SearchCriteria[]} [group] - Groups multiple conditions
 * @property {string} [dateFormat] - Set date format for criteria values when using date range search type.  Supports Java date format syntax, example yyyy-MM-dd'T'HH:mm:ss.SSSX.
 * @property {string} [type]
 * @property {string[]} [fields] - Field names to search against
 */
 
/**
 * @typedef {object} SearchRequest
 * @property {string} [sortOrder] - The sort order for results
 * @property {string} [sortBy] - The field in the resource that you want to sort the results by
 * @property {number} [pageSize] - The number of results per page
 * @property {number} [pageNumber] - The page of resources you want to retrieve
 * @property {SearchSort[]} [sort] - Multi-value sort order, list of multiple sort values
 * @property {string[]} [returnFields] - A List of strings.  Possible values are any field in the resource you are searching on.  The other option is to use ALL_FIELDS, when this is provided all fields in the resource will be returned in the search results.
 * @property {string[]} [expand] - Provides more details about a specified resource
 * @property {string[]} types - Resource domain type to search
 * @property {SearchCriteria[]} [query] - The search criteria
 * @property {SearchAggregation[]} [aggregations] - Aggregation criteria
 */
 
/**
 * @typedef {object} SearchSort
 * @property {string} [sortOrder] - The sort order for results
 * @property {string} [sortBy] - The field in the resource that you want to sort the results by
 */
 
/**
 * @typedef {object} SuggestSearchCriteria
 * @property {string} [endValue] - The end value of the range. This field is used for range search types.
 * @property {string[]} [values] - A list of values for the search to match against
 * @property {string} [startValue] - The start value of the range. This field is used for range search types.
 * @property {string} [value] - A value for the search to match against
 * @property {string} [operator] - How to apply this search criteria against other criteria
 * @property {SuggestSearchCriteria[]} [group] - Groups multiple conditions
 * @property {string} [dateFormat] - Set date format for criteria values when using date range search type.  Supports Java date format syntax, example yyyy-MM-dd'T'HH:mm:ss.SSSX.
 * @property {string[]} [fields] - Field names to search against
 */
 
/**
 * @typedef {object} SuggestSearchRequest
 * @property {string[]} [expand] - Provides more details about a specified resource
 * @property {string[]} types - Resource domain type to search
 * @property {SuggestSearchCriteria[]} query - Suggest query
 */
 

/**
 * Suggest - Search suggest user, group, locations
 * @class Suggest
 */
class SuggestAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the Suggest class
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
	 * Search using the q64 value returned from a previous search.
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} query.q64 -  q64
	 * @param {string[]} [query.expand] -  Which fields, if any, to expand
	 * @param {boolean} [query.profile] -  profile
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/search" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING} If a required query string parameter is missing.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getSearch(query) {
		const endpointPath = "/api/v2/search";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object" || query === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, true);
		}

		if ("q64" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "q64");
		}

		if (this.#checkJSONSchemaType(query["q64"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "q64", "string");
		}

		if ("expand" in query && this.#checkJSONSchemaType(query["expand"], "array") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "expand", "array");
		}

		if ("profile" in query && this.#checkJSONSchemaType(query["profile"], "boolean") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "profile", "boolean");
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Search resources.
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {boolean} [query.profile] -  profile
	 * @param {SearchRequest} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/search" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	postSearch(query, body) {
		const endpointPath = "/api/v2/search";
		const endpointMethod = "POST";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("profile" in query && this.#checkJSONSchemaType(query["profile"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "profile", "boolean");
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
	 * Suggest resources using the q64 value returned from a previous suggest query.
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {string} query.q64 -  q64
	 * @param {string[]} [query.expand] -  Which fields, if any, to expand
	 * @param {boolean} [query.profile] -  profile
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/search/suggest" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING} If a required query string parameter is missing.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 */
	getSearchSuggest(query) {
		const endpointPath = "/api/v2/search/suggest";
		const endpointMethod = "GET";

		// Check the query string parameters
		if (typeof query !== "object" || query === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, true);
		}

		if ("q64" in query === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING(endpointPath, endpointMethod, "q64");
		}

		if (this.#checkJSONSchemaType(query["q64"], "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "q64", "string");
		}

		if ("expand" in query && this.#checkJSONSchemaType(query["expand"], "array") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "expand", "array");
		}

		if ("profile" in query && this.#checkJSONSchemaType(query["profile"], "boolean") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "profile", "boolean");
		}

		const apiCallOptions = {};
		apiCallOptions.queryParameters = query;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Suggest resources.
	 * @async
	 * @param {object} query - The query string parameters for the request. An empty object or null is allowed if all query string parameters are optional.
	 * @param {boolean} [query.profile] -  profile
	 * @param {SuggestSearchRequest} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/search/suggest" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID} If the query string parameters argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID} If a query string parameter is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	postSearchSuggest(query, body) {
		const endpointPath = "/api/v2/search/suggest";
		const endpointMethod = "POST";

		// Check the query string parameters
		if (typeof query !== "object") {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID(endpointPath, endpointMethod, false);
		}

		if (query !== null) {
			if ("profile" in query && this.#checkJSONSchemaType(query["profile"], "boolean") === false) {
				throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "profile", "boolean");
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

export { SuggestAPI };