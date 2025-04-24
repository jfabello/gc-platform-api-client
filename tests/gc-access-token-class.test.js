/**
 * High-performance Genesys Cloud Platform API client for Node.js access token class tests.
 * @module gc-access-token-class-tests
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { describe, test, expect } from "@jest/globals";
import { GCAccessToken } from "../src/gc-access-token-class.js";
import { GCPlatformAPIClient } from "../src/gc-platform-api-client-class.js";

describe("High-performance Genesys Cloud Platform API client for Node.js access token class tests", () => {
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when no arguments are passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCAccessToken();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the token argument is not a string", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCAccessToken(123);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken(true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken({ token: "1234567890" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the token argument is an empty string", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCAccessToken("");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the type argument is not a string", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", 123);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", { type: "bearer" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the type argument is an empty string", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", "");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the type argument is not a valid Genesys Cloud OAuth access token type", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", "oauth");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the expires argument is not a number", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", "bearer", "123");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", "bearer", true);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			// @ts-expect-error
			new GCAccessToken("1234567890", "bearer", { expires: 123 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must throw an ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR error when the expires argument is not a non-negative integer", () => {
		expect.assertions(3);
		try {
			new GCAccessToken("1234567890", "bearer", 0);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			new GCAccessToken("1234567890", "bearer", -1);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
		try {
			new GCAccessToken("1234567890", "bearer", 1.5);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INTERNAL_ERROR);
		}
	});
	test("An attempt to create a Genesys Cloud Platform API OAuth access token object must not throw an error when the arguments are valid", () => {
		expect.assertions(3);
		const gcAccessToken = new GCAccessToken("1234567890", "bearer", 3600);
		expect(gcAccessToken.token).toBe("1234567890");
		expect(gcAccessToken.type).toBe("bearer");
		expect(gcAccessToken.expires).toBe(3600);
	});
});
