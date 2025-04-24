/**
 * High-performance Genesys Cloud Platform API client for Node.js constants.
 * @module gc-platform-api-client-constants
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

const constants = {};

constants.GC_OAUTH_ACCESS_TOKEN_TYPES = ["bearer"];
constants.HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
constants.RETRYABLE_STATUS_CODES = [
  408, // Request Timeout
  500, // Internal Server Error
  502, // Bad Gateway
  503, // Service Unavailable
  504, // Gateway Timeout
];

Object.freeze(constants);

export {constants};
