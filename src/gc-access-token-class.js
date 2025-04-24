/**
 * High-performance Genesys Cloud Platform API client for Node.js access token class.
 * @module gc-access-token-class
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Constants
import { constants } from "./gc-platform-api-client-constants.js";

// Errors
import { errors } from "./gc-platform-api-client-errors.js";

// Symbols
import { symbols } from "./gc-platform-api-client-symbols.js";

/**
 * High-performance Genesys Cloud Platform API client for Node.js access token class.
 * @class GCAccessToken
 * @property {string} token - The Genesys Cloud OAuth access token.
 * @property {string} type - The access token type.
 * @property {number} expires - The number of minutes until the access token expires.
 */
class GCAccessToken {
	/**
	 * @constructor
	 * @param {string} token - The Genesys Cloud OAuth access token.
	 * @param {string} type - The access token type.
	 * @param {number} expires - The number of minutes until the access token expires.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR} - If the token, type, or expires arguments are invalid.
	 */
	constructor(token, type, expires) {
		// Check the token argument
		if (typeof token !== "string" || token === "") {
			const errorMessage = 'The Genesys Cloud OAuth access token "token" argument must be a non-empty string.';
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(errorMessage, new TypeError(errorMessage));
		}

		// Check the type argument
		if (typeof type !== "string" || type === "") {
			const errorMessage = 'The Genesys Cloud OAuth access token "type" argument must be a non-empty string.';
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(errorMessage, new TypeError(errorMessage));
		}

		if (constants.GC_OAUTH_ACCESS_TOKEN_TYPES.includes(type) === false) {
			const errorMessage = 'The Genesys Cloud OAuth access token "type" argument must be "bearer".';
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(errorMessage, new TypeError(errorMessage));
		}

		// Check the expires argument
		if (typeof expires !== "number" || Number.isInteger(expires) === false || expires < 1) {
			const errorMessage = 'The Genesys Cloud OAuth access token "expires" argument must be a non-negative integer.';
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR(errorMessage, new TypeError(errorMessage));
		}

		this.token = token;
		this.type = type;
		this.expires = expires;
	}
}

Object.defineProperty(GCAccessToken.prototype, symbols.GCAccessToken, {
	configurable: false,
	enumerable: false,
	writable: false,
	value: symbols.GCAccessToken
});

export { GCAccessToken };
