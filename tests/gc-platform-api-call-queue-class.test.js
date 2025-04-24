/**
 * High-performance Genesys Cloud Platform API client for Node.js API call bi-directional queue class tests.
 * @module gc-platform-api-call-queue-class-tests
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { describe, test, expect } from "@jest/globals";
import { GCPlatformAPICallQueue } from "../src/gc-platform-api-call-queue-class.js";
import { GCPlatformAPIClient } from "../src/gc-platform-api-client-class.js";

describe("High-performance Genesys Cloud Platform API client for Node.js API call class tests", () => {
	test("An attempt to create a Genesys Cloud Platform API call bi-directional queue object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when no arguments are passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPICallQueue();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call bi-directional queue object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the queue argument is not a string", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPICallQueue(123);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICallQueue(true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICallQueue({ queue: "1234567890" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call bi-directional queue object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the queue argument is an empty string", () => {
		expect.assertions(1);
		try {
			new GCPlatformAPICallQueue("");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call bi-directional queue object must not throw an error when valid arguments are passed", () => {
		expect.assertions(1);
		try {
			const queue = new GCPlatformAPICallQueue("Test Queue");
			expect(queue).toBeInstanceOf(GCPlatformAPICallQueue);
		} catch (error) {
			expect(error).toBeUndefined();
		}
	});
});