/**
 * High-performance Genesys Cloud Platform API client for Node.js regexes.
 * @module gc-platform-api-client-regexes
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

const regexes = {};

regexes.UUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
regexes.gcPlatformAPIPath = /^\/api\/v2(?:\/(:?[A-Za-z0-9]+|{[A-Za-z0-9]+}))+$/;

Object.freeze(regexes);

export { regexes };
