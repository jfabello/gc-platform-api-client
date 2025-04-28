/**
 * High-performance Genesys Cloud Platform API client for Node.js errors.
 * @module gc-platform-api-client-errors
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

/** @typedef {import("@jfabello/http-client").HTTPResponse} HTTPResponse */

/**
 * Thrown when the Genesys Cloud OAuth client ID type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud OAuth client ID type is not valid. It must be a string.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud OAuth client ID is not a valid UUID.
 * @class ERROR_GC_PLATFORM_API_CLIENT_ID_INVALID_UUID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_ID_INVALID_UUID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud OAuth client ID is not a valid UUID.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud OAuth client secret type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud OAuth client secret type is not valid. It must be a string.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud region type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud region type is not valid. It must be a string.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud region is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_REGION_INVALID
 * @extends RangeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_REGION_INVALID extends RangeError {
	/**
	 * @constructor
	 * @param {string} gcRegion - The invalid Genesys Cloud region.
	 */
	constructor(gcRegion) {
		super(`The Genesys Cloud region "${gcRegion}" is not valid.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the HTTP client socket timeout type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The HTTP client socket timeout type is not valid. It must be an integer.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the HTTP client socket timeout is out of bounds.
 * @class ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS
 * @extends RangeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS extends RangeError {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The HTTP client socket timeout is out of bounds. It must be a positive integer.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the time between API requests type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The time between API requests type is not valid. It must be an integer.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the time between API requests is out of bounds.
 * @class ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS
 * @extends RangeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS extends RangeError {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The time between API requests is out of bounds. It must be a positive integer.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the maximum API request retries type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The maximum API request retries type is not valid. It must be an integer.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the maximum API request retries value is out of bounds.
 * @class ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS
 * @extends RangeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS extends RangeError {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The maximum API request retries value is out of bounds. It must be a positive integer.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API client is not in a state that allows it to connect to Genesys Cloud.
 * @class ERROR_GC_PLATFORM_API_CLIENT_CONNECT_UNAVAILABLE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_CONNECT_UNAVAILABLE extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The Genesys Cloud Platform API client is not in a state that allows it to connect to Genesys Cloud.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API request returns an HTTP status code that is an error.
 * @class ERROR_GC_PLATFORM_API_CLIENT_HTTP_STATUS_CODE_ERROR
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_HTTP_STATUS_CODE_ERROR extends Error {
	/**
	 * @constructor
	 * @param {HTTPResponse} httpResponse - The HTTP response object.
	 */
	constructor(httpResponse) {
		super("The Genesys Cloud Platform API request returned an HTTP status code that is an error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
		this.httpResponse = httpResponse;
	}
}

/**
 * Thrown when the Genesys Cloud response is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_GC_BAD_RESPONSE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_GC_BAD_RESPONSE extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The Genesys Cloud Platform API response is not valid.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud OAuth client ID was not found in the platform.
 * @class ERROR_GC_PLATFORM_API_CLIENT_ID_NOT_FOUND
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_ID_NOT_FOUND extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud OAuth client ID was not found in the platform.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when Genesys Cloud OAuth authentication fails.
 * @class ERROR_GC_PLATFORM_API_CLIENT_AUTHENTICATION_FAILURE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_AUTHENTICATION_FAILURE extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super("OAuth authentication failure. Check the Genesys Cloud OAuth client secret.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API request returns an unexpected error.
 * @class ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_RESPONSE_ERROR
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_RESPONSE_ERROR extends Error {
	/**
	 * @constructor
	 * @param {Error} responseError - The unexpected response error.
	 */
	constructor(responseError) {
		super("The Genesys Cloud Platform API request returned an unexpected error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
		this.responseError = responseError;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API request returns an unexpected HTTP status code.
 * @class ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_STATUS_CODE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_STATUS_CODE extends Error {
	/**
	 * @constructor
	 * @param {number} statusCode - The unexpected HTTP status code.
	 */
	constructor(statusCode) {
		super("The Genesys Cloud Platform API request returned an unexpected HTTP status code.");
		this.name = Object.getPrototypeOf(this).constructor.name;
		this.statusCode = statusCode;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API client is not in a state that allows its closing.
 * @class ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud Platform API client is not in a state that allows its closing.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when an internal Genesys Cloud Platform API client error has occurred.
 * @class ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR extends Error {
	/**
	 * @constructor
	 * @param {string} [extendedMessage] - The extended error message.
	 * @param {Error} [extendedError] - The extended error object.
	 */
	constructor(extendedMessage, extendedError) {
		super("An internal Genesys Cloud Platform API client error has occurred.");
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof extendedMessage === "string") this.extendedMessage = extendedMessage;
		if (typeof extendedError === "object" && extendedError instanceof Error) this.extendedError = extendedError;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API client instance type is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud Platform API client instance type is not valid.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the path parameters object type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 */
	constructor(endpointPath, endpointMethod) {
		super(`The path parameters object type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be an object.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when a path parameter type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} pathParameterName - The path parameter name.
	 * @param {string} pathParameterExpectedType - The expected type of the path parameter.
	 */
	constructor(endpointPath, endpointMethod, pathParameterName, pathParameterExpectedType) {
		super(`The path parameter "${pathParameterName}" type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "${pathParameterExpectedType}".`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the headers object type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {boolean} headersRequired - Whether at least one header required.
	 */
	constructor(endpointPath, endpointMethod, headersRequired) {
		if (headersRequired === true) {
			super(`The headers object type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "object" and not be null.`);
		} else {
			super(`The headers object type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "object" or be null.`);
		}
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when a required header for the Genesys Cloud Platform API endpoint call is missing.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_MISSING
 * @extends ReferenceError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_MISSING extends ReferenceError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} headerName - The missing header name.
	 */
	constructor(endpointPath, endpointMethod, headerName) {
		super(`The header "${headerName}" for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is missing.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when a header type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} headerName - The header name.
	 * @param {string} headerExpectedType - The expected type of the header.
	 */
	constructor(endpointPath, endpointMethod, headerName, headerExpectedType) {
		super(`The header "${headerName}" type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "${headerExpectedType}".`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the query string parameters object type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {boolean} queryRequired - Whether at least one query string parameter is required.
	 */
	constructor(endpointPath, endpointMethod, queryRequired) {
		if (queryRequired === true) {
			super(`The query string parameters object type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "object" and not be null.`);
		} else {
			super(`The query string parameters object type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "object" or be null.`);
		}
	}
}

/**
 * Thrown when a required query string parameter for the Genesys Cloud Platform API endpoint call is missing.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING
 * @extends ReferenceError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING extends ReferenceError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} queryParameterName - The missing query string parameter name.
	 */
	constructor(endpointPath, endpointMethod, queryParameterName) {
		super(`The query string parameter "${queryParameterName}" for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is missing.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when a query string parameter type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} queryParameterName - The query string parameter name.
	 * @param {string} queryParameterExpectedType - The expected type of the query string parameter.
	 */
	constructor(endpointPath, endpointMethod, queryParameterName, queryParameterExpectedType) {
		super(`The query string parameter "${queryParameterName}" type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "${queryParameterExpectedType}".`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the request body type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The endpoint URL.
	 * @param {string} endpointMethod - The endpoint method.
	 * @param {string} bodyExpectedType - The expected type of the request body.
	 * @param {boolean} bodyRequired - Whether the request body is required.
	 */
	constructor(endpointPath, endpointMethod, bodyExpectedType, bodyRequired) {
		if (bodyRequired === true) {
			super(`The request body type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "${bodyExpectedType}" and not be null.`);
		} else {
			super(`The request body type for the Genesys Cloud Platform API endpoint "${endpointMethod} ${endpointPath}" call is not valid. It must be "${bodyExpectedType}" or be null.`);
		}
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the path type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The path type for the Genesys Cloud Platform API endpoint call is not valid. It must be a string.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the path for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID extends TypeError {
	/**
	 * @constructor
	 * @param {string} endpointPath - The invalid endpoint path.
	 */
	constructor(endpointPath) {
		super(`The path "${endpointPath}" for the Genesys Cloud Platform API endpoint call is not valid.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the method type for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The method type for the Genesys Cloud Platform API endpoint call is not valid. It must be a string.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the method for the Genesys Cloud Platform API endpoint call is not valid.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID
 * @extends RangeError
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID extends RangeError {
	/**
	 * @constructor
	 * @param {string} endpointMethod - The invalid endpoint method.
	 */
	constructor(endpointMethod) {
		super(`The method "${endpointMethod}" for the Genesys Cloud Platform API endpoint call is not valid.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API client is not in a state that allows calling the API.
 * @class ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud Platform API client is not in a state that allows calling the API.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the Genesys Cloud Platform API endpoint call was rejected because the client is in the closing state.
 * @class ERROR_GC_PLATFORM_API_CLIENT_CLOSING
 * @extends Error
 */
class ERROR_GC_PLATFORM_API_CLIENT_CLOSING extends Error {
	/**
	 * @constructor
	 */
	constructor() {
		super("The Genesys Cloud Platform API endpoint call was rejected because the client is in the closing state.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

const errors = {
	ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_ID_INVALID_UUID,
	ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_REGION_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS,
	ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS,
	ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS,
	ERROR_GC_PLATFORM_API_CLIENT_CONNECT_UNAVAILABLE,
	ERROR_GC_PLATFORM_API_CLIENT_HTTP_STATUS_CODE_ERROR,
	ERROR_GC_PLATFORM_API_CLIENT_GC_BAD_RESPONSE,
	ERROR_GC_PLATFORM_API_CLIENT_ID_NOT_FOUND,
	ERROR_GC_PLATFORM_API_CLIENT_AUTHENTICATION_FAILURE,
	ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_RESPONSE_ERROR,
	ERROR_GC_PLATFORM_API_CLIENT_UNEXPECTED_STATUS_CODE,
	ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE,
	ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR,
	ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_MISSING,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADER_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_MISSING,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETER_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID,
	ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE,
	ERROR_GC_PLATFORM_API_CLIENT_CLOSING
};

Object.freeze(errors);

export { errors };
