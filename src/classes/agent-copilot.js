/**
 * Manage agent copilot configuration.
 * @module gc-platform-api-agent-copilot
 * @license MIT
 */

// This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.232Z

// TODO: Implement JSON schema verification for input and output objects
// TODO: Implement HTTP response typedefs

// Set strict mode
"use strict";

// Errors
import { errors } from "../gc-platform-api-client-errors.js";

// Symbols
import { symbols } from "../gc-platform-api-client-symbols.js";

/** @typedef {import("../gc-platform-api-client-class.js").GCPlatformAPIClient} GCPlatformAPIClient */
/** @typedef {import("@jfabello/http-client").HTTPResponse} HTTPResponse */

/**
 * @typedef {object} AnswerGenerationConfig
 * @property {boolean} enabled - Answer generation is enabled.
 */
 
/**
 * @typedef {object} Copilot
 * @property {boolean} [enabled] - Copilot is enabled.
 * @property {boolean} liveOnQueue - Copilot is live on selected queue.
 * @property {string} defaultLanguage - Copilot default language, e.g. [en-US, es-US, es-ES]. Once set, it can not be modified.
 * @property {KnowledgeAnswerConfig} [knowledgeAnswerConfig] - Knowledge answer configuration.
 * @property {SummaryGenerationConfig} [summaryGenerationConfig] - Copilot generated summary configuration.
 * @property {WrapupCodePredictionConfig} [wrapupCodePredictionConfig] - Copilot generated wrapup code prediction configuration.
 * @property {AnswerGenerationConfig} [answerGenerationConfig] - Answer generation configuration.
 * @property {string} [nluEngineType] - Language understanding engine type.
 * @property {NluConfig} [nluConfig] - NLU configuration.
 * @property {RuleEngineConfig} [ruleEngineConfig] - Rule engine configuration.
 * @property {string} [selfUri] - The URI for this object
 */
 
/**
 * @typedef {object} CopilotAction
 * @property {string} actionType - Type of action.
 * @property {object} [attributes] - Action specific attributes, if any. Maximum 100 of string key-value pair allowed.
 */
 
/**
 * @typedef {object} CopilotCondition
 * @property {string} conditionType - Type of condition.
 * @property {string[]} conditionValues - Condition values.
 */
 
/**
 * @typedef {object} CopilotFallbackAction
 * @property {string} actionType - Type of action.
 * @property {object} [attributes] - Action specific attributes, if any. Maximum 100 of string key-value pair allowed.
 */
 
/**
 * @typedef {object} CopilotNluDomain
 * @property {string} id - Id of the NLU domain.
 * @property {boolean} useLatestVersion - Use the latest version of the NLU domain. If false, version is required.
 * @property {CopilotNluDomainVersion} [version] - NLU domain version.
 * @property {string} [selfUri] - The URI for this object
 */
 
/**
 * @typedef {object} CopilotNluDomainVersion
 * @property {string} id - Id of the NLU v3 domain version.
 * @property {string} [selfUri] - The URI for this object
 */
 
/**
 * @typedef {object} CopilotRule
 * @property {CopilotCondition[]} conditions - List of conditions to execute actions, must have at least 1 element and maximum 100 elements. Operator in case of multiple conditions: 'OR'.
 * @property {CopilotAction[]} actions - List of actions to execute, must have at least 1 element and maximum 100 elements.
 */
 
/**
 * @typedef {object} Fallback
 * @property {boolean} [enabled] - Fallback actions are enabled.
 * @property {CopilotFallbackAction[]} [actions] - Fallback actions.
 */
 
/**
 * @typedef {object} KnowledgeAnswerConfig
 * @property {boolean} enabled - Knowledge answer is enabled.
 */
 
/**
 * @typedef {object} NluConfig
 * @property {CopilotNluDomain} domain - NLU domain.
 * @property {number} intentConfidenceThreshold - Minimum confidence value of accepting NLU intents, must be greater than 0 and less than 1.
 */
 
/**
 * @typedef {object} RuleConfig
 * @property {string} [id] - Rule ID.
 * @property {boolean} enabled - Rule enabled.
 * @property {CopilotRule} rule - Rule configuration.
 */
 
/**
 * @typedef {object} RuleEngineConfig
 * @property {RuleConfig[]} rules - List of rules to evaluate by the engine.
 * @property {Fallback} [fallback] - Fallback configuration.
 */
 
/**
 * @typedef {object} SummaryGenerationConfig
 * @property {boolean} enabled - Copilot generated summary is enabled.
 */
 
/**
 * @typedef {object} WrapupCodePredictionConfig
 * @property {boolean} enabled - Copilot generated wrapup code prediction is enabled.
 */
 

/**
 * AgentCopilot - Manage agent copilot configuration.
 * @class AgentCopilot
 */
class AgentCopilotAPI {
	// Private instance properties
	#gcPlatformAPIClient = null;

	/**
	 * Constructor for the AgentCopilot class
	 * @constructor
	 * @param {GCPlatformAPIClient} gcPlatformAPIClient - The Genesys Cloud Platform API client instance.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID} If the Genesys Cloud Platform API client instance argument is not an object.
	 */
	constructor(gcPlatformAPIClient) {
		// Check the Genesys Cloud Platform API client instance argument
		if (typeof gcPlatformAPIClient !== "object" || symbols.GCPlatformAPIClient in gcPlatformAPIClient === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_INSTANCE_TYPE_INVALID();
		}

		// Initialize the instance properties
		this.#gcPlatformAPIClient = gcPlatformAPIClient;
	}

	/**
	 * Get copilot configuration of an assistant.
	 * @async
	 * @param {string} assistantId - Assistant ID
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/assistants/{assistantId}/copilot" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 */
	getAssistantCopilot(assistantId) {
		const endpointPath = "/api/v2/assistants/{assistantId}/copilot";
		const endpointMethod = "GET";

		// Check the path parameters
		if (this.#checkJSONSchemaType(assistantId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "assistantId", "string");
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.assistantId = assistantId;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * Update agent copilot configuration
	 * @async
	 * @param {string} assistantId - Assistant ID
	 * @param {Copilot} body - The body of the request. An empty object or null is allowed if the body is optional.
	 * @returns {Promise<HTTPResponse>} A promise that settles to the HTTP response of the call to the "/api/v2/assistants/{assistantId}/copilot" endpoint.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID} If a path parameter argument is not of the proper type.
	 * @throws {ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID} If the request body argument is not of the proper type.
	 */
	putAssistantCopilot(assistantId, body) {
		const endpointPath = "/api/v2/assistants/{assistantId}/copilot";
		const endpointMethod = "PUT";

		// Check the path parameters
		if (this.#checkJSONSchemaType(assistantId, "string") === false) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_PATH_PARAMETER_TYPE_INVALID(endpointPath, endpointMethod, "assistantId", "string");
		}

		// Check the body argument
		if (this.#checkJSONSchemaType(body, "object") === false || body === null) {
			throw new errors.ERROR_GC_PLATFORM_API_CLIENT_API_CALL_REQUEST_BODY_TYPE_INVALID(endpointPath, endpointMethod, "object", true);
		}

		const apiCallOptions = {};
		apiCallOptions.pathParameters = {};
		apiCallOptions.pathParameters.assistantId = assistantId;
		apiCallOptions.body = body;

		return this.#gcPlatformAPIClient.queueAPICall(endpointPath, endpointMethod, apiCallOptions);
	}

	/**
	 * @description Checks that a value is of the proper JSON schema type
	 * @param {*} value - The value to check
	 * @param {string} jsonSchemaType - The JSON schema type to check against
	 * @returns {boolean} Returns true if the value is of the proper JSON schema type, false otherwise
	 */
	#checkJSONSchemaType(value, jsonSchemaType) {
		const PASSTHROUGH_JSON_SCHEMA_TYPES = ["boolean", "number", "string", "object"];

		// Check if the type is a passthrough type
		if (PASSTHROUGH_JSON_SCHEMA_TYPES.includes(jsonSchemaType)) {
			return typeof value === jsonSchemaType;
		}

		// Check if the type is an integer
		if (jsonSchemaType === "integer") {
			return Number.isInteger(value);
		}

		// Check if the type is an array
		if (jsonSchemaType === "array") {
			return Array.isArray(value);
		}

		// Check if the type is null
		if (jsonSchemaType === "null") {
			return value === null;
		}

		// Otherwise, return false
		return false;
	}
}

export { AgentCopilotAPI };