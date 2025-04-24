/**
 * High-performance Genesys Cloud Platform API client for Node.js symbols.
 * @module gc-platform-api-client-symbols
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

const symbols = {};

symbols.GCAccessToken = Symbol("GCAccessToken");
symbols.GCPlatformAPICall = Symbol("GCPlatformAPICall");
symbols.GCPlatformAPICallQueue = Symbol("GCPlatformAPICallQueue");
symbols.GCPlatformAPIClient = Symbol("GCPlatformAPIClient");

Object.freeze(symbols);

export { symbols };
