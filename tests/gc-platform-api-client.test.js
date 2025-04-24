/**
 * High-performance Genesys Cloud Platform API client for Node.js tests.
 * @module gc-platform-api-client-tests
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import process from "node:process";
import { beforeAll, describe, test, expect } from "@jest/globals";
import { GCPlatformAPIClient } from "../src/gc-platform-api-client-class.js";

// Constants
const DUMMY_CLIENT_ID = "f6eb9da0-4590-4bb7-82a0-f85afbfa1070";
const DUMMY_CLIENT_SECRET = "pHe8l6Ro4raxeph13etrujufri9ecl5lwr0hlCrO-jQ";
const DUMMY_REGION = "us-east-1";

// Variables
let realClientId = null;
let realClientSecret = null;
let realRegion = null;

beforeAll(() => {
	// Check that the required environment variables are set
	if ("GENESYS_CLOUD_CLIENT_ID" in process.env === false) {
		throw new Error('The "GENESYS_CLOUD_CLIENT_ID" environment variable is not set.');
	}
	if ("GENESYS_CLOUD_CLIENT_SECRET" in process.env === false) {
		throw new Error("The GENESYS_CLOUD_CLIENT_SECRET environment variable is not set.");
	}
	if ("GENESYS_CLOUD_REGION" in process.env === false) {
		throw new Error("The GENESYS_CLOUD_REGION environment variable is not set.");
	}

	realClientId = process.env["GENESYS_CLOUD_CLIENT_ID"];
	realClientSecret = process.env["GENESYS_CLOUD_CLIENT_SECRET"];
	realRegion = process.env["GENESYS_CLOUD_REGION"];
});

describe("Genesys Cloud Platform API client for Node.js tests", () => {
	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID error when no arguments are passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID error when a client ID argument that is not a string is passed", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(1234);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(false);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient({ gcClientId: DUMMY_CLIENT_ID });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_ID_INVALID_UUID error when a client ID that is not an UUID is passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient("myClientId");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_INVALID_UUID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID error when a client secret argument is not passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID error when a client secret argument that is not a string is passed", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, 1234);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, false);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, { gcClientSecret: DUMMY_CLIENT_SECRET });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SECRET_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID error when a region argument is not passed", () => {
		expect.assertions(1);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID error when a region argument that is not a string is passed", () => {
		expect.assertions(3);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, 1234);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, false);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, { gcRegion: DUMMY_REGION });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_REGION_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_REGION_INVALID error when an invalid region is passed", () => {
		expect.assertions(1);
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, "not-a-region");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_REGION_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID when a socket timeout argument that is not an integer is passed", () => {
		expect.assertions(4);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: "1234" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: { timeout: 1234 } });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: 1234.56 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS error when a socket timeout argument that is not a positive integer is passed", () => {
		expect.assertions(2);
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: 0 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { socketTimeout: -1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_SOCKET_TIMEOUT_OUT_OF_BOUNDS);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID when a time between requests argument that is not an integer is passed", () => {
		expect.assertions(4);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: "1234" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: { timeout: 1234 } });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: 1234.56 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS error when a time between requests argument that is not a positive integer is passed", () => {
		expect.assertions(2);
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: 0 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { timeBetweenRequests: -1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_TIME_BETWEEN_REQUESTS_OUT_OF_BOUNDS);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID when a max retries argument that is not an integer is passed", () => {
		expect.assertions(4);
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: "1234" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID);
		}
		try {
			// @ts-expect-error
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: { timeout: 1234 } });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: 1234.56 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_TYPE_INVALID);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS error when a max retries argument that is not a positive integer is passed", () => {
		expect.assertions(2);
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: 0 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS);
		}
		try {
			new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION, { maxRetries: -1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_MAX_RETRIES_OUT_OF_BOUNDS);
		}
	});

	test("An attempt to create a Genesys Cloud Platform API client instance must return a new instance with its state set to CREATED state when valid arguments are passed", () => {
		expect.assertions(2);
		const gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		expect(gcPlatformAPIClient).toBeInstanceOf(GCPlatformAPIClient);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CREATED);
	});

	test("A call to the connect(...) method of a Genesys Cloud Platform API client instance must return a Promise object and set the instance state to INITIALIZING when the instance is in the CREATED state", async () => {
		expect.assertions(3);
		const gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CREATED);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		expect(gcPlatformAPIClientConnectPromise).toBeInstanceOf(Promise);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.INITIALIZING);
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch {
			// Do nothing
		}
	});

	test("A second call to the connect(...) method of a Genesys Cloud Platform API client instance must return the same Promise object that was returned in the first call", async () => {
		expect.assertions(1);
		const gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		expect(gcPlatformAPIClient.connect()).toBe(gcPlatformAPIClientConnectPromise);
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch {
			// Do nothing
		}
	});

	test("A call to the connect(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_INIT_UNAVAILABLE error when the client is not in a state that allows its initialization", async () => {
		expect.assertions(8);
		let gcPlatformAPIClient = null;
		let gcPlatformAPIClientConnectPromise = null;
		let gcPlatformAPIClientClosePromise = null;

		// From the IDLE, CLOSING and CLOSED states
		gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		await gcPlatformAPIClientConnectPromise;
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.IDLE);
		try {
			gcPlatformAPIClient.connect();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INIT_UNAVAILABLE);
		}
		gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSING);
		try {
			gcPlatformAPIClient.connect();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INIT_UNAVAILABLE);
		}
		await gcPlatformAPIClientClosePromise;

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSED);
		try {
			gcPlatformAPIClient.connect();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INIT_UNAVAILABLE);
		}

		// From the FAILED state
		gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch {
			expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.FAILED);
		}
		try {
			gcPlatformAPIClient.connect();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_INIT_UNAVAILABLE);
		}
	});

	test("A call to the connect(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_ID_NOT_FOUND error and set the instance state to FAILED when the Genesys Cloud client ID is not an ID for the region", async () => {
		expect.assertions(2);
		const gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_ID_NOT_FOUND);
			expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.FAILED);
		}
	});

	test("A call to the connect(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_AUTHENTICATION_FAILURE error and set the instance state to FAILED when the Genesys Cloud client secret is incorrect for a valid client ID for the region", async () => {
		expect.assertions(2);
		const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, DUMMY_CLIENT_SECRET, realRegion);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_AUTHENTICATION_FAILURE);
			expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.FAILED);
		}
	});

	test("A call to the connect(...) method of a Genesys Cloud Platform API client instance must return true and set the instance state to IDLE when the Genesys Cloud client ID and secret are valid for the region", async () => {
		expect.assertions(2);
		const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();

		expect(await gcPlatformAPIClientConnectPromise).toBe(true);

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.IDLE);
		const gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();

		await gcPlatformAPIClientClosePromise;
	});

	test("A call to the close(...) method of a Genesys Cloud Platform API client instance must return a Promise object and set the instance state to CLOSING when the instance is in the IDLE state", async () => {
		expect.assertions(3);
		const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();

		await gcPlatformAPIClientConnectPromise;

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.IDLE);
		const gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();
		expect(gcPlatformAPIClientClosePromise).toBeInstanceOf(Promise);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSING);

		await gcPlatformAPIClientClosePromise;
	});

	test("A second call to the close(...) method of a Genesys Cloud Platform API client instance must return the same Promise object that was returned in the first call", async () => {
		expect.assertions(1);
		const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();

		await gcPlatformAPIClientConnectPromise;

		const gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();
		expect(gcPlatformAPIClient.close()).toBe(gcPlatformAPIClientClosePromise);

		await gcPlatformAPIClientClosePromise;
	});

	test("A call to the close(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE error when the client is not in a state that allows its closing", async () => {
		expect.assertions(4);
		let gcPlatformAPIClient = null;
		let gcPlatformAPIClientConnectPromise = null;

		// From the CREATED and FAILED states
		gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CREATED);
		try {
			gcPlatformAPIClient.close();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE);
		}
		gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch {
			expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.FAILED);
		}
		try {
			gcPlatformAPIClient.close();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_CLOSE_UNAVAILABLE);
		}
	});

	test("A call to the close(...) method of a Genesys Cloud Platform API client instance must return true and set the instance state to CLOSED when the instance is in the IDLE state", async () => {
		expect.assertions(3);
		const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		const gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();

		await gcPlatformAPIClientConnectPromise;

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.IDLE);
		const gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();

		expect(await gcPlatformAPIClientClosePromise).toBe(true);

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSED);
	});

	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID error when no arguments are passed", () => {
		expect.assertions(1);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall();
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID);
		}
	});

	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID error when an endpoint path argument that is not a string is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall(1234);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall(false);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall({ endpointPath: "/api/v2/users/me" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID error when an endpoint path argument that is not a valid API endpoint path is passed", () => {
		expect.assertions(4);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("not-a-valid-api-endpoint-path");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2//users/me/");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2//users/me");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2/users?user=1234");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID error when an endpoint method argument is not passed", () => {
		expect.assertions(1);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID error when an endpoint method argument that is not a string is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", 1234);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", false);
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			// @ts-expect-error
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", { endpointMethod: "GET" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID error when an endpoint method argument that is not a valid HTTP method is passed", () => {
		expect.assertions(2);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "get");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GOT");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_METHOD_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID error when an endpoint path parameters argument that is not an object is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { pathParameters: 1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { pathParameters: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { pathParameters: "not-an-object" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETERS_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID error when an endpoint headers argument that is not an object is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { headers: 1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { headers: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { headers: "not-an-object" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_HEADERS_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID error when an endpoint query string parameters argument that is not an object is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { queryParameters: 1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { queryParameters: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { queryParameters: "not-an-object" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_QUERY_PARAMETERS_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID error when an endpoint body argument that is not an object is passed", () => {
		expect.assertions(3);
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { body: 1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { body: false });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID);
		}
		try {
			const gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET", { body: "not-an-object" });
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID);
		}
	});
	test("A call to the queueAPICall(...) method of a Genesys Cloud Platform API client instance must throw an ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE error when the client is not in a state that allows calling the API", async () => {
		expect.assertions(11);
		let gcPlatformAPIClient = null;
		let gcPlatformAPIClientConnectPromise = null;
		let gcPlatformAPIClientClosePromise = null;
		// From the CREATED state
		gcPlatformAPIClient = new GCPlatformAPIClient(DUMMY_CLIENT_ID, DUMMY_CLIENT_SECRET, DUMMY_REGION);
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CREATED);
		try {
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE);
		}
		// From the INITIALIZING state
		gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.INITIALIZING);
		try {
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE);
		}
		// From the FAILED state
		try {
			await gcPlatformAPIClientConnectPromise;
		} catch {
			expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.FAILED);
		}
		try {
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE);
		}
		// From the CLOSING state
		gcPlatformAPIClient = new GCPlatformAPIClient(realClientId, realClientSecret, realRegion);
		gcPlatformAPIClientConnectPromise = gcPlatformAPIClient.connect();
		await gcPlatformAPIClientConnectPromise;

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.IDLE);
		gcPlatformAPIClientClosePromise = gcPlatformAPIClient.close();
		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSING);
		try {
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE);
		}
		await gcPlatformAPIClientClosePromise;

		expect(gcPlatformAPIClient.state).toBe(GCPlatformAPIClient.CLOSED);
		try {
			gcPlatformAPIClient.queueAPICall("/api/v2/users/me", "GET");
		} catch (error) {
			expect(error).toBeInstanceOf(GCPlatformAPIClient.errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALLING_UNAVAILABLE);
		}
	});
});
