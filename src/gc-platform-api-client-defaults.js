/**
 * High-performance Genesys Cloud Platform API client for Node.js defaults.
 * @module gc-platform-api-client-defaults
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

const defaults = {};

defaults.SOCKET_TIMEOUT = 60 * 1000; // 60 seconds
defaults.TIME_BETWEEN_REQUESTS = 200; // 200 miliseconds => 5 requests per second.
defaults.RATE_LIMIT_WAIT_TIME_IN_MS = 60 * 1000; // 60 seconds
defaults.EXPONENTIAL_BACKOFF_TIME_IN_SECONDS = 5; // 5 seconds
defaults.MAX_RETRIES = 5;

Object.freeze(defaults);

export {defaults};
