/**
 * High-performance Genesys Cloud Platform API client for Node.js API call class tests.
 * @module gc-platform-api-call-class-tests
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { describe, test, expect } from "@jest/globals";
import { GCPlatformAPICall } from "../src/gc-platform-api-call-class.js";
import { GCPlatformAPIClient } from "../src/gc-platform-api-client-class.js";

describe("High-performance Genesys Cloud Platform API client for Node.js API call class tests", () => {
	test("An attempt to create a Genesys Cloud Platform API call object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when no arguments are passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPICall();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the endpoint path argument is not a string", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPICall(123);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICall(true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICall({ endpointPath: "/api/v2/endpoint" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the endpoint path argument is not a valid Genesys Cloud Platform API endpoint path", () => {
		expect.assertions(2);
		try {
			// @ts-expect-error
			new GCPlatformAPICall("/tokens/me");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICall("/api/v1/tokens/me");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the method argument is not a string", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPICall("/api/v2/tokens/me", 123);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICall("/api/v2/tokens/me", true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPICall("/api/v2/tokens/me", { method: "GET" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the method argument is not a valid HTTP method", () => {
		expect.assertions(1);
		try {
			new GCPlatformAPICall("/api/v2/tokens/me", "GOT");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API call object must not throw an error when a valid endpoint PATH and method are passed", () => {
		expect.assertions(1);
		try {
			const apiCall = new GCPlatformAPICall("/api/v2/tokens/me", "GET");
			expect(apiCall).toBeInstanceOf(GCPlatformAPICall);
		} catch {
			// No error should be thrown
		}
	});
});
