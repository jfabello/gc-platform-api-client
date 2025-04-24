/**
 * Generate Genesys Cloud Platform API classes utility.
 * @module generate-gc-platform-api-classes
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { Ajv } from "ajv";
import { Command } from "commander";
import Handlebars from "handlebars";
import { ConsoleLogger } from "@jfabello/log-to-console";
import { loadGCPlatformAPISpecFromCloud } from "@jfabello/gc-platform-api-utils";

// Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GC_PLATFORM_API_CLIENT_CLASS_FILE_NAME = "gc-platform-api-client-class.js";
const GC_PLATFORM_API_CLIENT_ERRORS_FILE_NAME = "gc-platform-api-client-errors.js";
const GC_PLATFORM_API_CLIENT_SYMBOLS_FILE_NAME = "gc-platform-api-client-symbols.js";
const GC_PLATFORM_API_CLASSES_NAME_SUFFIX = "API";
const JSON_SCHEMA_TYPES_TO_JSDOC_TYPES = {
	boolean: "boolean",
	number: "number",
	integer: "number",
	string: "string",
	object: "object",
	array: "Array"
};
const GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME = "api-classes.md";

// Regular expressions
const DEFINITION_URI_REGEX = /^#\/definitions\/(\w+)$/;

// JSON schemas
import { gcPlatformAPISpecSchema } from "./publicapi-v2-latest-json-schema.js";

// Create a new ConsoleLogger instance
const logToConsole = new ConsoleLogger(ConsoleLogger.DEBUG); // TODO: Change to INFO for production

async function main() {
	// Initalize the Commander program instance
	const program = initializeCommander();

	try {
		// Process the command-line arguments
		const args = processCmdArguments(program);
		const specFile = args.specFile;
		const clientClassDirectory = args.clientClassDirectory;
		const classesDirectory = args.classesDirectory;
		const docsDirectory = args.docsDirectory;

		// Create the classes and docs directories
		createClassesAndDocsDirectories(classesDirectory, docsDirectory);

		// Load the Genesys Cloud Platform API specification
		const gcPlatformAPISpec = await loadGCPlatformAPISpec(specFile);

		// Get the Genesys Cloud Platform API classes from the specification
		const gcPlatformAPIClasses = getGCPlatformAPIClassesFromSpec(gcPlatformAPISpec);

		// Get the Genesys Cloud Platform API definitions from the specification
		const gcPlatformAPIDefinitions = getGCPlatformAPIDefinitionsFromSpec(gcPlatformAPISpec);

		// Generate the Genesys Cloud Platform API classes files
		generateGCPlatformAPIClassesFiles(gcPlatformAPIClasses, gcPlatformAPIDefinitions, classesDirectory, clientClassDirectory);

		// Add the code to the Genesys Cloud Platform API client class to require and instantiate the API classes
		processGCPlatformAPIClientClass(path.join(clientClassDirectory, GC_PLATFORM_API_CLIENT_CLASS_FILE_NAME), gcPlatformAPIClasses, classesDirectory);

		// Generate the Genesys Cloud Platform API classes markdown file
		generateGCPlatformAPIClassesMarkdownFile(gcPlatformAPIClasses, path.join(docsDirectory, "classes"));

		// Generate the Genesys Cloud Platform API classes markdown files
		generateGCPlatformAPIClassesMarkdownFiles(gcPlatformAPIClasses, path.join(docsDirectory, "classes"));

		// Generate the Genesys Cloud Platform API definitions markdown file
		generateGCPlatformAPIDefinitionsMarkdownFile(gcPlatformAPIDefinitions, path.join(docsDirectory, "definitions"));
	} catch (error) {
		logToConsole.error(error.message);
		if ("debugMessage" in error) logToConsole.debug(error.debugMessage);
		if ("extendedError" in error) logToConsole.debug("Error object: %O", error.extendedError);
		process.exit(1);
	}

	process.exit(0);
}

/**
 * Initializes a new Commander program instance.
 * @returns {object} The Commander program instance.
 */
function initializeCommander() {
	// Create a new Commander program instance
	const program = new Command();

	// Set the application name and description
	program.name("generate-gc-platform-api-classes");
	program.description("Utility that generates the Genesys Cloud Platform API classes and documentation.");

	// Set the application command line options
	program.option("--specfile <spec>", "The Genesys Cloud Platform API specification file.");
	program.requiredOption("--clientclassdir <directory>", "The directory where the Genesys Cloud Platform API client class will be generated.");
	program.requiredOption("--classesdir <directory>", "The directory where the Genesys Cloud Platform API classes will be generated.");
	program.requiredOption("--classesdocsdir <directory>", "The directory where the Genesys Cloud Platform API documentation will be generated.");
	program.showHelpAfterError();

	// Parse the command line arguments
	program.parse(process.argv);

	return program;
}

/**
 * Processes the command-line arguments and validates the provided paths.
 * @param {Command} program The commander program object containing the command-line options.
 * @returns {object} An object containing the absolute paths for the Genesys Cloud Platform API specification file, client class directory, classes directory, and documentation directory.
 * @throws {TypeError} If the program argument is not a Commander program instance.
 * @throws {ReferenceError} If the Genesys Cloud Platform API specification file does not exist, if provided.
 * @throws {Error} If the Genesys Cloud Platform API specification file is not a file or its stats can't be determined.
 * @throws {ReferenceError} If the Genesys Cloud Platform API client class directory does not exist.
 * @throws {Error} If the Genesys Cloud Platform API client class directory is not a directory or its stats can't be determined.
 * @throws {Error} If the Genesys Cloud Platform API classes and documentation directories are the same.
 */
function processCmdArguments(program) {
	// Check if the program argument is a Commander program instance
	if (typeof program !== "object" || program instanceof Command === false) {
		throw new TypeError("The program argument is not a Commander program instance.");
	}

	// Gather the command-line arguments
	let specFile = "specfile" in program.opts() ? program.opts().specfile : null;
	let clientClassDirectory = program.opts().clientclassdir;
	let classesDirectory = program.opts().classesdir;
	let docsDirectory = program.opts().classesdocsdir;

	if (specFile !== null) {
		// Convert the Genesys Cloud Platform API specification file path to an absolute path, if needed
		if (path.isAbsolute(specFile) === false) {
			specFile = path.join(process.cwd(), specFile);
		}

		// Check if the Genesys Cloud Platform API specification file exists
		if (fs.existsSync(specFile) === false) {
			throw new GeneratorError("The Genesys Cloud Platform API specification file does not exist.", `Specification file path: ${specFile}`);
		}

		// Check if the Genesys Cloud Platform API specification file is a file
		let specFileStats = null;

		try {
			specFileStats = fs.statSync(specFile);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API specification file stats.", `Specification file path: ${specFile}`, fsError);
		}

		if (specFileStats.isFile() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API specification file is not a file.", `Specification file path: ${specFile}`);
		}
	}

	// Convert the Genesys Cloud Platform API client class directory to an absolute path, if needed
	if (path.isAbsolute(clientClassDirectory) === false) {
		clientClassDirectory = path.join(process.cwd(), clientClassDirectory);
	}

	// Check if the Genesys Cloud Platform API client class directory exists
	if (fs.existsSync(clientClassDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class directory does not exist.", `Client class directory: ${clientClassDirectory}`);
	}

	// Check if the Genesys Cloud Platform API client class directory is a directory
	let clientClassDirectoryStats = null;

	try {
		clientClassDirectoryStats = fs.statSync(clientClassDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API client class directory stats.", `Client class directory: ${clientClassDirectory}`, fsError);
	}

	if (clientClassDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class directory is not a directory.", `Client class directory: ${clientClassDirectory}`);
	}

	// Convert the Genesys Cloud Platform API classes directory to an absolute path, if needed
	if (path.isAbsolute(classesDirectory) === false) {
		classesDirectory = path.join(process.cwd(), classesDirectory);
	}

	// Convert the Genesys Cloud Platform API documentation directory to an absolute path, if needed
	if (path.isAbsolute(docsDirectory) === false) {
		docsDirectory = path.join(process.cwd(), docsDirectory);
	}

	// Check if the Genesys Cloud Platform API classes directory is the same as the documentation directory
	if (classesDirectory === docsDirectory) {
		throw new GeneratorError("The Genesys Cloud classes and documentation directories must be different.", `Classes directory: ${classesDirectory}.` + os.EOL + `Documentation directory: ${docsDirectory}.`);
	}

	return {
		specFile: specFile,
		clientClassDirectory: clientClassDirectory,
		classesDirectory: classesDirectory,
		docsDirectory: docsDirectory
	};
}

/**
 * Creates the classes and docs directories if they do not exist.
 * @param {string} classesDirectory The absolute path to the Genesys Cloud Platform API classes directory.
 * @param {string} docsDirectory The absolute path to the Genesys Cloud Platform API documentation directory.
 * @returns {boolean} Returns true if the directories are created or if they already exist.
 * @throws {TypeError} If the Genesys Cloud Platform API classes directory or documentation directory arguments are not strings or are empty.
 * @throws {Error} - If the Genesys Cloud Platform API directories are not absolute paths, cannot be created, or if they are not directories.
 */
function createClassesAndDocsDirectories(classesDirectory, docsDirectory) {
	// Check the Genesys Cloud Platform API classes directory argument
	if (typeof classesDirectory !== "string" || classesDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API classes directory argument is not a string or is empty.");
	}

	// Check the Genesys Cloud Platform API documentation directory argument
	if (typeof docsDirectory !== "string" || docsDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API documentation directory argument is not a string or is empty.");
	}

	// Check if the Genesys Cloud Platform API classes directory is an absolute path
	if (path.isAbsolute(classesDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory is not an absolute path.", `Classes directory: ${classesDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API documentation directory is an absolute path
	if (path.isAbsolute(docsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API documentation directory is not an absolute path.", `Documentation directory: ${docsDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API classes directory already exists and is a directory, create it otherwise
	if (fs.existsSync(classesDirectory) === true) {
		let classesDirectoryStats = null;

		try {
			classesDirectoryStats = fs.statSync(classesDirectory);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes directory stats.", `Classes directory: ${classesDirectory}.`, fsError);
		}

		if (classesDirectoryStats.isDirectory() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API classes directory is not a directory.", `Classes directory: ${classesDirectory}.`);
		}
		if (fs.readdirSync(classesDirectory).length > 0) {
			logToConsole.warning("The Genesys Cloud Platform API classes directory is not empty.");
		}
	} else {
		logToConsole.info(`Creating the Genesys Cloud Platform API classes directory: ${classesDirectory}`);
		try {
			fs.mkdirSync(classesDirectory, { recursive: true });
		} catch (fsError) {
			throw new GeneratorError("Failed to create the Genesys Cloud Platform API classes directory.", `Classes directory: ${classesDirectory}.`, fsError);
		}
		logToConsole.info("Successfully created the Genesys Cloud Platform API classes directory.");
	}

	// Check if the Genesys Cloud Platform API documentation directory already exists and is a directory, create it otherwise
	if (fs.existsSync(docsDirectory) === true) {
		let docsDirectoryStats = null;

		try {
			docsDirectoryStats = fs.statSync(docsDirectory);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API documentation directory stats.", `Documentation directory: ${docsDirectory}.`, fsError);
		}

		if (docsDirectoryStats.isDirectory() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API documentation directory is not a directory.", `Documentation directory: ${docsDirectory}.`);
		}

		if (fs.readdirSync(docsDirectory).length > 0) {
			logToConsole.warning("The Genesys Cloud Platform API documentation directory is not empty.");
		}
	} else {
		logToConsole.info(`Creating the Genesys Cloud Platform API documentation directory: ${docsDirectory}`);
		try {
			fs.mkdirSync(docsDirectory, { recursive: true });
		} catch (fsError) {
			throw new GeneratorError("Failed to create the Genesys Cloud Platform API documentation directory.", `Documentation directory: ${docsDirectory}.`, fsError);
		}
		logToConsole.info("Successfully created the Genesys Cloud Platform API documentation directory.");
	}

	// Check if the Genesys Cloud Platform API classes documentation directory already exists and is a directory, create it otherwise
	const classesDocsDirectory = path.join(docsDirectory, "classes");

	if (fs.existsSync(classesDocsDirectory) === true) {
		let classesDocsDirectoryStats = null;

		try {
			classesDocsDirectoryStats = fs.statSync(classesDocsDirectory);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes documentation directory stats.", `Classes documentation directory: ${classesDocsDirectory}.`, fsError);
		}

		if (classesDocsDirectoryStats.isDirectory() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory is not a directory.", `Classes documentation directory: ${classesDocsDirectory}.`);
		}

		if (fs.readdirSync(classesDocsDirectory).length > 0) {
			logToConsole.warning("The Genesys Cloud Platform API classes documentation directory is not empty.");
		}
	} else {
		logToConsole.info(`Creating the Genesys Cloud Platform API classes documentation directory: ${classesDocsDirectory}`);
		try {
			fs.mkdirSync(classesDocsDirectory, { recursive: true });
		} catch (fsError) {
			throw new GeneratorError("Failed to create the Genesys Cloud Platform API classes documentation directory.", `Classes documentation directory: ${classesDocsDirectory}.`, fsError);
		}
		logToConsole.info("Successfully created the Genesys Cloud Platform API classes documentation directory.");
	}

	// Check if the Genesys Cloud Platform API definitions documentation directory already exists and is a directory, create it otherwise
	const definitionsDocsDirectory = path.join(docsDirectory, "definitions");
	if (fs.existsSync(definitionsDocsDirectory) === true) {
		let definitionsDocsDirectoryStats = null;

		try {
			definitionsDocsDirectoryStats = fs.statSync(definitionsDocsDirectory);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API definitions documentation directory stats.", `Definitions documentation directory: ${definitionsDocsDirectory}.`, fsError);
		}

		if (definitionsDocsDirectoryStats.isDirectory() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API definitions documentation directory is not a directory.", `Definitions documentation directory: ${definitionsDocsDirectory}.`);
		}

		if (fs.readdirSync(definitionsDocsDirectory).length > 0) {
			logToConsole.warning("The Genesys Cloud Platform API definitions documentation directory is not empty.");
		}
	} else {
		logToConsole.info(`Creating the Genesys Cloud Platform API definitions documentation directory: ${definitionsDocsDirectory}`);
		try {
			fs.mkdirSync(definitionsDocsDirectory, { recursive: true });
		} catch (fsError) {
			throw new GeneratorError("Failed to create the Genesys Cloud Platform API definitions documentation directory.", `Definitions documentation directory: ${definitionsDocsDirectory}.`, fsError);
		}
		logToConsole.info("Successfully created the Genesys Cloud Platform API definitions documentation directory.");
	}

	return true;
}

/**
 * Loads the Genesys Cloud Platform API specification from a file if the file path is provided, or downloads the specification from the cloud if the file path is not provided.
 * @async
 * @param {string} [specFile] The file path to the Genesys Cloud Platform API specification. If not provided, the specification will be downloaded from the cloud.
 * @returns {Promise<object>} A promise that resolves to the Genesys Cloud Platform API specification object.
 * @throws {TypeError} If the provided file path is not a string.
 * @throws {Error} If the provided file path is not an absolute path, it does not exist, it is not a file, or there is an error reading or parsing the file.
 * @throws {Error} If there is an error downloading the specification from the cloud.
 */
async function loadGCPlatformAPISpec(specFile) {
	let gcPlatformAPISpec = null;

	// Check if the Genesys Cloud Platform API specification file path is provided
	if (specFile !== undefined && specFile !== null) {
		// Check the Genesys Cloud Platform API specification file path argument
		if (typeof specFile !== "string") {
			throw new TypeError("The Genesys Cloud Platform API specification file path is not a string.");
		}

		// Check if the Genesys Cloud Platform API specification file path is an absolute path
		if (path.isAbsolute(specFile) === false) {
			throw new GeneratorError("The Genesys Cloud Platform API specification file path is not an absolute path.", `Specification file path: ${specFile}.`);
		}

		// Check if the Genesys Cloud Platform API specification file exists
		if (fs.existsSync(specFile) === false) {
			throw new GeneratorError("The Genesys Cloud Platform API specification file does not exist.", `Specification file path: ${specFile}.`);
		}

		// Checks if the Geneys Cloud Platform API specification file is a file
		let specFileStats = null;

		try {
			specFileStats = fs.statSync(specFile);
		} catch (fsError) {
			throw new GeneratorError("Failed to get the Genesys Cloud Platform API specification file stats.", `Specification file path: ${specFile}.`, fsError);
		}

		if (specFileStats.isFile() === false) {
			throw new GeneratorError("The Genesys Cloud Platform API specification file is not a file.", `Specification file path: ${specFile}.`);
		}

		// Load the Genesys Cloud Platform API specification from the file
		logToConsole.info("Loading the Genesys Cloud Platform API specification from the file...");

		try {
			gcPlatformAPISpec = fs.readFileSync(specFile, "utf8");
		} catch (fsError) {
			throw new GeneratorError("Failed to load the Genesys Cloud Platform API specification from the file.", `Specification file path: ${specFile}.`, fsError);
		}

		// Parse the Genesys Cloud Platform API specification
		try {
			gcPlatformAPISpec = JSON.parse(gcPlatformAPISpec);
		} catch (parseError) {
			throw new GeneratorError("Failed to parse the Genesys Cloud Platform API specification.", `Specification file path: ${specFile}.`, parseError);
		}

		logToConsole.info("Successfully loaded the Genesys Cloud Platform API specification from the file.");
	} else {
		// Download the Genesys Cloud Platform API specification from the cloud if it is not provided
		logToConsole.info("Loading the Genesys Cloud Platform API specification from the cloud...");
		try {
			gcPlatformAPISpec = await loadGCPlatformAPISpecFromCloud("us-east-1");
		} catch (cloudError) {
			throw new GeneratorError("Failed to load the Genesys Cloud Platform API specification from the cloud.", null, cloudError);
		}
		logToConsole.info("Successfully loaded the Genesys Cloud Platform API specification from the cloud.");
	}

	return gcPlatformAPISpec;
}

/**
 * Gets the Genesys Cloud Platform API classes from the specification object.
 * @param {object} gcPlatformAPISpec The Genesys Cloud Platform API specification object.
 * @returns {object} The processed Genesys Cloud Platform API classes object.
 * @throws {TypeError} If the Genesys Cloud Platform API specification is not an object.
 * @throws {Error} If the Genesys Cloud Platform API specification object is not valid.
 * @throws {Error} If an error occurred while compiling the Genesys Cloud Platform API specification JSON schema.
 * @throws {Error} If the tag of a path with method is not found in the "tags" property of the Genesys Cloud Platform API specification.
 */
function getGCPlatformAPIClassesFromSpec(gcPlatformAPISpec) {
	// Check if the Genesys Cloud Platform API specification is an object
	if (typeof gcPlatformAPISpec !== "object") {
		throw new GeneratorError("The Genesys Cloud Platform API specification is not an object.");
	}

	// Create a new Ajv instance
	const ajv = new Ajv();

	// Validate the Genesys Cloud Platform API specification
	let ajvValidator = null;

	try {
		ajvValidator = ajv.compile(gcPlatformAPISpecSchema);
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API specification JSON schema.", null, compileError);
	}

	ajvValidator(gcPlatformAPISpec);

	if ("errors" in ajvValidator === true && ajvValidator.errors !== null) {
		throw new GeneratorError("The Genesys Cloud Platform API specification is not valid.", JSON.stringify(ajvValidator.errors, null, "\t"));
	}

	// Process the Genesys Cloud Platform API specification
	logToConsole.info("Getting the Genesys Cloud Platform API classes from the specification...");

	const gcPlatformAPIClasses = {};

	// Iterate over the paths (API endpoints) of the Genesys Cloud Platform API specification
	for (const currentPathName in gcPlatformAPISpec.paths) {
		// Iterate over the methods of the current path (API endpoint)
		for (const currentMethodName in gcPlatformAPISpec.paths[currentPathName]) {
			const currentPathWithMethod = gcPlatformAPISpec.paths[currentPathName][currentMethodName];

			const currentPathWithMethodClasses = [];

			// Traverse the tags of the current path with method
			for (const currentTagName of currentPathWithMethod.tags) {
				// Add the current tag name as one of the classes that this path with method belongs to
				const currentClassName = currentTagName.replace(/\s+/g, "").replace("&", "");
				currentPathWithMethodClasses.push(currentClassName);

				// Continue if the current class name is already in the Genesys Cloud Platform API classes
				if (currentClassName in gcPlatformAPIClasses === true) {
					continue;
				}

				// Initialize the current class name in the Genesys Cloud Platform API classes
				gcPlatformAPIClasses[currentClassName] = { methods: [], definitions: [] };

				// Find the current tag in the Genesys Cloud Platform API specification tags
				const gcPlatformAPITag = gcPlatformAPISpec.tags.find((tag) => tag.name === currentTagName);

				if (gcPlatformAPITag === undefined) {
					throw new GeneratorError(`The tag "${currentTagName}" of the path "${currentPathName}" with method "${currentMethodName.toUpperCase()}" was not found in the "tags" property.`);
				}

				// Add properties to the current class
				gcPlatformAPIClasses[currentClassName].name = currentTagName;
				if ("description" in gcPlatformAPITag === true && typeof gcPlatformAPITag.description === "string" && gcPlatformAPITag.description !== "") gcPlatformAPIClasses[currentClassName].description = gcPlatformAPITag.description;
				if ("externalDocs" in gcPlatformAPITag === true && "url" in gcPlatformAPITag.externalDocs === true && typeof gcPlatformAPITag.externalDocs.url === "string") gcPlatformAPIClasses[currentClassName].documentationURL = gcPlatformAPITag.externalDocs.url;
			}

			const currentClassMethod = {};

			// Add the basic properties to the current class method
			currentClassMethod.name = currentPathWithMethod.operationId;
			currentClassMethod.httpMethod = currentMethodName.toUpperCase();
			currentClassMethod.path = currentPathName;
			currentClassMethod.summary = currentPathWithMethod.summary;

			// Process the parameters of the current path with method
			const currentClassMethodParameters = processPathWithMethodParameters(currentPathWithMethod.parameters);
			const currentClassMethodDefinitions = currentClassMethodParameters.definitions;
			delete currentClassMethodParameters.definitions;
			currentClassMethod.parameters = currentClassMethodParameters;

			// Add the optional properties to the current class method
			if ("description" in currentPathWithMethod === true && currentPathWithMethod.description !== "") currentClassMethod.description = currentPathWithMethod.description;
			if ("deprecated" in currentPathWithMethod === true) currentClassMethod.deprecated = currentPathWithMethod.deprecated;

			// Load the responses of the current path with method
			if ("responses" in currentPathWithMethod === true) {
				currentClassMethod.responses = [];

				for (const currentResponseStatusCode in currentPathWithMethod.responses) {
					const currentResponse = currentPathWithMethod.responses[currentResponseStatusCode];

					const currentResponseData = {};
					currentResponseData.statusCode = currentResponseStatusCode;

					currentClassMethod.responses.push(currentResponseData);

					if ("description" in currentResponse === true && currentResponse.description !== "") currentResponseData.description = currentResponse.description;

					// Add the JSDoc type to the response
					if ("schema" in currentResponse === true) {
						if ("$ref" in currentResponse.schema === true) {
							const refDefinitionName = currentResponse.schema.$ref.match(DEFINITION_URI_REGEX)[1];
							currentResponseData.jsDocType = refDefinitionName;
							currentResponseData.jsonSchemaType = "object";
							currentResponseData.definition = refDefinitionName;
							continue;
						}

						if (currentResponse.schema.type !== "array") {
							currentResponseData.jsDocType = JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentResponse.schema.type];
							currentResponseData.jsonSchemaType = currentResponse.schema.type;
							continue;
						}

						if ("items" in currentResponse.schema === true) {
							if ("$ref" in currentResponse.schema.items === true) {
								const refDefinitionName = currentResponse.schema.items.$ref.match(DEFINITION_URI_REGEX)[1];
								currentResponseData.jsDocType = `${refDefinitionName}[]`;
								currentResponseData.definition = refDefinitionName;
							} else {
								currentResponseData.jsDocType = `${JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentResponse.schema.items.type]}[]`;
							}
							currentResponseData.jsonSchemaType = "array";
							continue;
						} else {
							currentResponseData.jsDocType = "Array";
							currentResponseData.jsonSchemaType = "array";
							continue;
						}
					}
				}
			}

			// Add the current class method and definitions to the classes it belongs to
			for (const currentClass of currentPathWithMethodClasses) {
				gcPlatformAPIClasses[currentClass].methods.push(currentClassMethod);
				for (const definition of currentClassMethodDefinitions) {
					if (gcPlatformAPIClasses[currentClass].definitions.includes(definition) === false) gcPlatformAPIClasses[currentClass].definitions.push(definition);
				}
			}
		}
	}

	logToConsole.info("Successfully got the Genesys Cloud Platform API classes from the specification.");

	return gcPlatformAPIClasses;
}

/**
 * Processes an array of Genesys Cloud Platform API path with method parameters.
 * @param {object[]} parameters The array of parameters to process.
 * @returns {object} An object containing categorized parameters and the definitions used by those parameters.
 * @throws {TypeError} If the parameters argument is not an array.
 * @warning This function assumes that the Genesys Cloud Platform API path with method parameters have been previously validated.
 */
function processPathWithMethodParameters(parameters) {
	// Check if the parameters argument is an array
	if (Array.isArray(parameters) === false) {
		throw new TypeError("The parameters argument is not an array.");
	}

	const pathWithMethodParameters = {
		path: [],
		headers: [],
		query: [],
		body: null,
		definitions: []
	};

	// Process the parameters of the current path with method
	for (const currentParameter of parameters) {
		const processedParameter = {};

		// Add the basic properties to the processed parameter
		processedParameter.name = currentParameter.name;
		processedParameter.required = currentParameter.required;

		// Check that the body parameter has not been set already
		if (currentParameter.in === "body" && pathWithMethodParameters.body !== null) {
			throw new GeneratorError(`The body parameter has already been set.`);
		}

		// Add the processed parameter to the correct parameter list
		switch (currentParameter.in) {
			case "path":
				pathWithMethodParameters.path.push(processedParameter);
				break;
			case "header":
				pathWithMethodParameters.headers.push(processedParameter);
				break;
			case "query":
				pathWithMethodParameters.query.push(processedParameter);
				break;
			case "body":
				pathWithMethodParameters.body = processedParameter;
				break;
			default:
				throw new GeneratorError(`The value "${currentParameter.in}" is not a valid value for the property "in" of the parameter "${currentParameter.name}".`);
		}

		// Add the optional properties to the processed parameter
		if ("description" in currentParameter === true && currentParameter.description !== "") processedParameter.description = currentParameter.description;

		// Add the JSDoc type to the processed parameter
		if ("schema" in currentParameter === true) {
			if ("$ref" in currentParameter.schema === true) {
				const refDefinitionName = currentParameter.schema.$ref.match(DEFINITION_URI_REGEX)[1];
				if (pathWithMethodParameters.definitions.includes(refDefinitionName) === false) pathWithMethodParameters.definitions.push(refDefinitionName);
				processedParameter.jsDocType = refDefinitionName;
				processedParameter.jsonSchemaType = "object";
				processedParameter.definition = refDefinitionName;
				continue;
			}

			if (currentParameter.schema.type !== "array") {
				processedParameter.jsDocType = JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentParameter.schema.type];
				processedParameter.jsonSchemaType = currentParameter.schema.type;
				continue;
			}

			if ("items" in currentParameter.schema === true) {
				if ("$ref" in currentParameter.schema.items === true) {
					const refDefinitionName = currentParameter.schema.items.$ref.match(DEFINITION_URI_REGEX)[1];
					if (pathWithMethodParameters.definitions.includes(refDefinitionName) === false) pathWithMethodParameters.definitions.push(refDefinitionName);
					processedParameter.jsDocType = `${refDefinitionName}[]`;
					processedParameter.definition = refDefinitionName;
				} else {
					processedParameter.jsDocType = `${JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentParameter.schema.items.type]}[]`;
				}
				processedParameter.jsonSchemaType = "array";
				continue;
			} else {
				processedParameter.jsDocType = "Array";
				processedParameter.jsonSchemaType = "array";
				continue;
			}
		}

		if (currentParameter.type !== "array") {
			processedParameter.jsDocType = JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentParameter.type];
			processedParameter.jsonSchemaType = currentParameter.type;
			continue;
		}

		if ("items" in currentParameter === true) {
			processedParameter.jsDocType = `${JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentParameter.items.type]}[]`;
			processedParameter.jsonSchemaType = "array";
			continue;
		} else {
			processedParameter.jsDocType = "Array";
			processedParameter.jsonSchemaType = "array";
			continue;
		}
	}

	// Cleanup the processed parameters
	if (pathWithMethodParameters.path.length === 0) delete pathWithMethodParameters.path;
	if (pathWithMethodParameters.body === null) delete pathWithMethodParameters.body;
	if (pathWithMethodParameters.query.length === 0) delete pathWithMethodParameters.query;
	if (pathWithMethodParameters.headers.length === 0) delete pathWithMethodParameters.headers;

	return pathWithMethodParameters;
}

/**
 * Gets the Genesys Cloud Platform API definitions from the specification object.
 * @param {object} gcPlatformAPISpec The Genesys Cloud Platform API specification object.
 * @returns {object} The Genesys Cloud Platform API definitions object.
 * @throws {TypeError} If the Genesys Cloud Platform API specification is not an object.
 * @throws {Error} If the Genesys Cloud Platform API specification object is not valid.
 * @throws {Error} If an error occurred while compiling the Genesys Cloud Platform API specification JSON schema.
 */
function getGCPlatformAPIDefinitionsFromSpec(gcPlatformAPISpec) {
	// Check if the Genesys Cloud Platform API specification is an object
	if (typeof gcPlatformAPISpec !== "object") {
		throw new GeneratorError("The Genesys Cloud Platform API specification is not an object.");
	}

	// Create a new Ajv instance
	const ajv = new Ajv();

	// Validate the Genesys Cloud Platform API specification
	let ajvValidator = null;

	try {
		ajvValidator = ajv.compile(gcPlatformAPISpecSchema);
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API specification JSON schema.", null, compileError);
	}

	ajvValidator(gcPlatformAPISpec);

	if ("errors" in ajvValidator === true && ajvValidator.errors !== null) {
		throw new GeneratorError("The Genesys Cloud Platform API specification is not valid.", JSON.stringify(ajvValidator.errors, null, 2));
	}

	// Process the Genesys Cloud Platform API specification
	logToConsole.info("Getting the Genesys Cloud Platform API definitions from the specification...");

	const gcPlatformAPIDefinitions = {};

	for (const currentAPIDefinitionName in gcPlatformAPISpec.definitions) {
		const currentAPIDefinition = gcPlatformAPISpec.definitions[currentAPIDefinitionName];

		gcPlatformAPIDefinitions[currentAPIDefinitionName] = { properties: {}, childDefinitions: [] };
		if ("description" in currentAPIDefinition) gcPlatformAPIDefinitions[currentAPIDefinitionName].description = currentAPIDefinition.description;

		for (const currentAPIDefinitionPropertyName in currentAPIDefinition.properties) {
			const currentAPIDefinitionProperty = currentAPIDefinition.properties[currentAPIDefinitionPropertyName];

			gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName] = {};
			if ("description" in currentAPIDefinitionProperty) gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].description = currentAPIDefinitionProperty.description;
			if ("required" in currentAPIDefinition && currentAPIDefinition.required.includes(currentAPIDefinitionPropertyName) === true) gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].required = true;

			if ("$ref" in currentAPIDefinitionProperty) {
				const refDefinitionName = currentAPIDefinitionProperty.$ref.match(DEFINITION_URI_REGEX)[1];
				if (refDefinitionName !== currentAPIDefinitionName && gcPlatformAPIDefinitions[currentAPIDefinitionName].childDefinitions.includes(refDefinitionName) === false) gcPlatformAPIDefinitions[currentAPIDefinitionName].childDefinitions.push(refDefinitionName);
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsDocType = refDefinitionName;
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsonSchemaType = "object";
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].definition = refDefinitionName;
				continue;
			}

			if (currentAPIDefinitionProperty.type !== "array") {
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsDocType = JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentAPIDefinitionProperty.type];
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsonSchemaType = currentAPIDefinitionProperty.type;
				continue;
			}

			if ("items" in currentAPIDefinitionProperty) {
				if ("$ref" in currentAPIDefinitionProperty.items) {
					const refDefinitionName = currentAPIDefinitionProperty.items.$ref.match(DEFINITION_URI_REGEX)[1];
					if (refDefinitionName !== currentAPIDefinitionName && gcPlatformAPIDefinitions[currentAPIDefinitionName].childDefinitions.includes(refDefinitionName) === false) gcPlatformAPIDefinitions[currentAPIDefinitionName].childDefinitions.push(refDefinitionName);
					gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsDocType = `${refDefinitionName}[]`;
					gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].definition = refDefinitionName;
				} else {
					gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsDocType = `${JSON_SCHEMA_TYPES_TO_JSDOC_TYPES[currentAPIDefinitionProperty.items.type]}[]`;
				}
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsonSchemaType = "array";
				continue;
			} else {
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsDocType = "Array";
				gcPlatformAPIDefinitions[currentAPIDefinitionName].properties[currentAPIDefinitionPropertyName].jsonSchemaType = "array";
				continue;
			}
		}
	}

	logToConsole.info("Successfully got the Genesys Cloud Platform API definitions from the specification.");

	return gcPlatformAPIDefinitions;
}

/**
 * Generates the Genesys Cloud Platform API classes files.
 * @param {object} gcPlatformAPIClasses The Genesys Cloud Platform API classes object.
 * @param {object} gcPlatformAPIDefinitions The Genesys Cloud Platform API definitions object.
 * @param {string} classesDirectory The absolute path to the Genesys Cloud Platform API classes directory.
 * @warning This function assumes that the Genesys Cloud Platform API classes object is valid.
 */
function generateGCPlatformAPIClassesFiles(gcPlatformAPIClasses, gcPlatformAPIDefinitions, classesDirectory, clientClassDirectory) {
	const gcPlatformAPIClassHandlebarsTemplateFilePath = path.join(__dirname, "gc-platform-api-class.js.hbs");

	// Check if the Genesys Cloud Platform API classes object argument is an object
	if (typeof gcPlatformAPIClasses !== "object") {
		throw new TypeError("The Genesys Cloud Platform API classes object argument is not an object.");
	}

	// Check if the classes directory argument is a string
	if (typeof classesDirectory !== "string" || classesDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API classes directory argument is not a string or is empty.");
	}

	// Check if the classes directory argument is an absolute path
	if (path.isAbsolute(classesDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory is not an absolute path.", `Classes directory: ${classesDirectory}.`);
	}

	// Check if the classes directory argument exists and is a directory
	if (fs.existsSync(classesDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory does not exist.", `Classes directory: ${classesDirectory}.`);
	}

	let classesDirectoryStats = null;

	try {
		classesDirectoryStats = fs.statSync(classesDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes directory stats.", `Classes directory: ${classesDirectory}.`, fsError);
	}

	if (classesDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory is not a directory.", `Classes directory: ${classesDirectory}.`);
	}

	// Check if the client class directory argument is a string
	if (typeof clientClassDirectory !== "string" || clientClassDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API client class directory argument is not a string or is empty.");
	}

	// Check if the client class directory argument is an absolute path
	if (path.isAbsolute(clientClassDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class directory is not an absolute path.", `Client class directory: ${clientClassDirectory}.`);
	}

	// Check if the client class directory argument exists and is a directory
	if (fs.existsSync(clientClassDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class directory does not exist.", `Client class directory: ${clientClassDirectory}.`);
	}

	let clientClassDirectoryStats = null;

	try {
		clientClassDirectoryStats = fs.statSync(clientClassDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API client class directory stats.", `Client class directory: ${clientClassDirectory}.`, fsError);
	}

	if (clientClassDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class directory is not a directory.", `Client class directory: ${clientClassDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API class Handlebars template file exists
	if (fs.existsSync(gcPlatformAPIClassHandlebarsTemplateFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API class Handlebars template file does not exist.", `Handlebars template file path: ${gcPlatformAPIClassHandlebarsTemplateFilePath}.`);
	}

	let gcPlatformAPIClassHandlebarsTemplate = null;

	// Load the Genesys Cloud Platform API class Handlebars template file
	try {
		gcPlatformAPIClassHandlebarsTemplate = fs.readFileSync(gcPlatformAPIClassHandlebarsTemplateFilePath, "utf8");
	} catch (fsError) {
		throw new GeneratorError("Failed to load the Genesys Cloud Platform API class Handlebars template file.", `Handlebars template file: ${gcPlatformAPIClassHandlebarsTemplate}.`, fsError);
	}

	// Compile the Genesys Cloud Platform API class Handlebars template, noEscape is set to true to avoid escaping HTML entities
	try {
		gcPlatformAPIClassHandlebarsTemplate = Handlebars.compile(gcPlatformAPIClassHandlebarsTemplate, { noEscape: true });
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API class Handlebars template.", `Handlebars template file: ${gcPlatformAPIClassHandlebarsTemplate}.`, compileError);
	}

	// Add a Handlebars helper to add curly braces to a string
	Handlebars.registerHelper("enclose_in_curly_braces", function (string) {
		return `{${string}}`;
	});

	// Add a Handlebars helper to generate a parameter string
	Handlebars.registerHelper("generate_parameters_string", function (parameters) {
		const parameterArray = [];

		if ("path" in parameters === true) {
			for (const currentParameter of parameters.path) {
				parameterArray.push(currentParameter.name);
			}
		}
		if ("headers" in parameters === true) parameterArray.push("headers");
		if ("query" in parameters === true) parameterArray.push("query");
		if ("body" in parameters === true) parameterArray.push("body");

		return parameterArray.join(", ");
	});

	// Add a Handlebars helper to find if all headers are required
	Handlebars.registerHelper("no_headers_required", function (parameters) {
		if ("headers" in parameters === false) return true;

		for (const currentParameter of parameters.headers) {
			if (currentParameter.required === true) return false;
		}

		return true;
	});

	// Add a Handlebars helper to find if all query string parameters are required
	Handlebars.registerHelper("no_query_parameters_required", function (parameters) {
		if ("query" in parameters === false) return true;

		for (const currentParameter of parameters.query) {
			if (currentParameter.required === true) return false;
		}

		return true;
	});

	// Add a Handlebars helper to escape block comment characters
	Handlebars.registerHelper("escape_block_comment_terminator", function (string) {
		return string.replace("*/", "* /");
	});

	// Iterate over the Genesys Cloud Platform API classes
	for (const currentAPIClassName in gcPlatformAPIClasses) {
		const currentAPIClassFileName = `${convertPascalCaseToKebabCase(currentAPIClassName)}.js`;

		const currentAPIClass = gcPlatformAPIClasses[currentAPIClassName];
		const currentAPIClassData = {};

		// Find all the definitions used by the current class, including all descendants
		const currentAPIClassDefinitionsWithDescendants = Array.from(currentAPIClass.definitions);

		for (let arrayPointer = 0; arrayPointer < currentAPIClassDefinitionsWithDescendants.length; arrayPointer++) {
			const currentParentAPIDefinitionName = currentAPIClassDefinitionsWithDescendants[arrayPointer];
			if (currentParentAPIDefinitionName in gcPlatformAPIDefinitions === false) {
				throw new GeneratorError(`The definition "${currentParentAPIDefinitionName}" was not found in the Genesys Cloud Platform API specification.`);
			}
			const currentParentAPIDefinition = gcPlatformAPIDefinitions[currentParentAPIDefinitionName];
			for (const currentChildAPIDefinitionName of currentParentAPIDefinition.childDefinitions) {
				if (currentAPIClassDefinitionsWithDescendants.includes(currentChildAPIDefinitionName) === false) {
					currentAPIClassDefinitionsWithDescendants.push(currentChildAPIDefinitionName);
				}
			}
		}

		// Sort the definitions used by the current class with their descendants
		currentAPIClassDefinitionsWithDescendants.sort((a, b) => a.localeCompare(b));

		currentAPIClassData.moduleName = `gc-platform-api-${convertPascalCaseToKebabCase(currentAPIClassName)}`;
		if ("description" in currentAPIClass === true) currentAPIClassData.description = currentAPIClass.description;
		if ("documentationURL" in currentAPIClass === true) currentAPIClassData.documentationURL = currentAPIClass.documentationURL;
		currentAPIClassData.generationTimestamp = new Date().toISOString();
		currentAPIClassData.gcPlatformAPIClientClassPath = path.join(path.relative(classesDirectory, clientClassDirectory), GC_PLATFORM_API_CLIENT_CLASS_FILE_NAME);
		currentAPIClassData.gcPlatformAPIClientErrorsPath = path.join(path.relative(classesDirectory, clientClassDirectory), GC_PLATFORM_API_CLIENT_ERRORS_FILE_NAME);
		currentAPIClassData.gcPlatformAPIClientSymbolsPath = path.join(path.relative(classesDirectory, clientClassDirectory), GC_PLATFORM_API_CLIENT_SYMBOLS_FILE_NAME);
		currentAPIClassData.className = currentAPIClassName;
		currentAPIClassData.methods = currentAPIClass.methods;
		currentAPIClassData.definitions = {};

		for (const currentAPIDefinitionName of currentAPIClassDefinitionsWithDescendants) {
			const currentAPIDefinition = gcPlatformAPIDefinitions[currentAPIDefinitionName];
			currentAPIClassData.definitions[currentAPIDefinitionName] = currentAPIDefinition;
		}

		const generatedGCPlatformAPIClassContents = gcPlatformAPIClassHandlebarsTemplate(currentAPIClassData);

		// Write the current class file to the classes directory
		const currentClassFilePath = path.join(classesDirectory, currentAPIClassFileName);
		logToConsole.info(`Writing the Genesys Cloud Platform API class file ${currentAPIClassFileName}`);
		try {
			fs.writeFileSync(currentClassFilePath, generatedGCPlatformAPIClassContents);
		} catch (fsError) {
			throw new GeneratorError(`Failed to write the Genesys Cloud Platform API class file ${currentAPIClassFileName}`, `Class file path: ${currentClassFilePath}`, fsError);
		}
		logToConsole.info(`Successfully wrote the Genesys Cloud Platform API class file ${currentAPIClassFileName}`);
	}
}

/**
 * Adds the code to the Genesys Cloud Platform API client class to require and instantiate the API classes.
 * @param {string} clientClassFilePath The absolute path to the Genesys Cloud Platform API client class file.
 * @param {object} gcPlatformAPIClasses The Genesys Cloud Platform API classes object.
 * @param {string} classesDirectory The absolute path to the Genesys Cloud Platform API classes directory.
 * @warning This function assumes that the Genesys Cloud Platform API classes object is valid.
 */
function processGCPlatformAPIClientClass(clientClassFilePath, gcPlatformAPIClasses, classesDirectory) {
	// Check the Genesys Cloud Platform API client class file path argument
	if (typeof clientClassFilePath !== "string" || clientClassFilePath === "") {
		throw new TypeError("The Genesys Cloud Platform API client class file path argument is not a string or is empty.");
	}

	// Check if the Genesys Cloud Platform API client class file path is an absolute path
	if (path.isAbsolute(clientClassFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class file path is not an absolute path.", `Client class file path: ${clientClassFilePath}.`);
	}

	// Check if the Genesys Cloud Platform API client class file exists
	if (fs.existsSync(clientClassFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class file does not exist.", `Client class file path: ${clientClassFilePath}.`);
	}

	// Check if the Genesys Cloud Platform API client class file is a file
	let clientClassFileStats = null;

	try {
		clientClassFileStats = fs.statSync(clientClassFilePath);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API client class file stats.", `Client class file path: ${clientClassFilePath}.`, fsError);
	}

	if (clientClassFileStats.isFile() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API client class file is not a file.", `Client class file path: ${clientClassFilePath}.`);
	}

	// Check if the Genesys Cloud Platform API classes object argument is an object
	if (typeof gcPlatformAPIClasses !== "object") {
		throw new TypeError("The Genesys Cloud Platform API classes object argument is not an object.");
	}

	// Check if the classes directory argument is a string
	if (typeof classesDirectory !== "string" || classesDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API classes directory argument is not a string or is empty.");
	}

	// Check if the classes directory argument is an absolute path
	if (path.isAbsolute(classesDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory is not an absolute path.", `Classes directory: ${classesDirectory}.`);
	}

	// Check if the classes directory argument exists and is a directory
	if (fs.existsSync(classesDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory does not exist.", `Classes directory: ${classesDirectory}.`);
	}

	let classesDirectoryStats = null;

	try {
		classesDirectoryStats = fs.statSync(classesDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes directory stats.", `Classes directory: ${classesDirectory}.`, fsError);
	}

	if (classesDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes directory is not a directory.", `Classes directory: ${classesDirectory}.`);
	}

	// Load the Genesys Cloud Platform API client class file
	let clientClassFileContents = null;

	try {
		clientClassFileContents = fs.readFileSync(clientClassFilePath, "utf8");
	} catch (fsError) {
		throw new GeneratorError("Failed to load the Genesys Cloud Platform API client class file.", `Client class file path: ${clientClassFilePath}.`, fsError);
	}

	// Compile the Genesys Cloud Platform API client class file as a Handlebars template, noEscape is set to true to avoid escaping HTML entities
	let clientClassHandlebarsTemplate = null;

	try {
		clientClassHandlebarsTemplate = Handlebars.compile(clientClassFileContents, { noEscape: true });
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API client class file as a Handlebars template.", `Client class file path: ${clientClassFilePath}.`, compileError);
	}

	// Generate the Genesys Cloud Platform API classes data for the Handlebars template
	const gcPlatformAPIClassesData = [];

	for (const currentClassName in gcPlatformAPIClasses) {
		const currentClassFileName = `${convertPascalCaseToKebabCase(currentClassName)}.js`;
		gcPlatformAPIClassesData.push({ className: currentClassName, classFileName: currentClassFileName });
	}

	// Sort the Generate the Genesys Cloud Platform API classes data
	gcPlatformAPIClassesData.sort((a, b) => a.className.localeCompare(b.className));

	// Add a Handlebars helper to generate the API classes require statements
	Handlebars.registerHelper("generate_api_classes_require_statements", function () {
		const gcPlatformAPIClassesRequireBlockLines = [];

		gcPlatformAPIClassesRequireBlockLines.push("{{#generate_api_classes_require_statements}}");
		gcPlatformAPIClassesRequireBlockLines.push(`// The following section was automatically generated by the Generate Genesys Cloud Platform API classes utility on ${new Date().toISOString()}`);

		for (const currentClass of gcPlatformAPIClassesData) {
			const clientClassDirectory = path.dirname(clientClassFilePath);
			const currentClassFilePathFromClientClassDirectory = path.join(path.relative(clientClassDirectory, classesDirectory), currentClass.classFileName);
			gcPlatformAPIClassesRequireBlockLines.push(`import { ${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX} } from "./${currentClassFilePathFromClientClassDirectory}";`);
		}

		gcPlatformAPIClassesRequireBlockLines.push("// {{/generate_api_classes_require_statements}}");

		return gcPlatformAPIClassesRequireBlockLines.join(os.EOL);
	});

	// Add a Handlebars helper to generate the API classes private properties
	Handlebars.registerHelper("generate_api_classes_private_instance_properties", function () {
		const gcPlatformAPIClassesPrivatePropertiesLines = [];

		gcPlatformAPIClassesPrivatePropertiesLines.push("{{#generate_api_classes_private_instance_properties}}");
		gcPlatformAPIClassesPrivatePropertiesLines.push(`\t// The following section was automatically generated by the Generate Genesys Cloud Platform API classes utility on ${new Date().toISOString()}`);

		for (const currentClass of gcPlatformAPIClassesData) {
			gcPlatformAPIClassesPrivatePropertiesLines.push(`\t#${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX} = new ${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX}(this);`);
		}

		gcPlatformAPIClassesPrivatePropertiesLines.push("\t// {{/generate_api_classes_private_instance_properties}}");

		return gcPlatformAPIClassesPrivatePropertiesLines.join(os.EOL);
	});

	// Add a Handlebars helper to generate the API classes getters
	Handlebars.registerHelper("generate_api_classes_getters", function () {
		const gcPlatformAPIClassesGettersLines = [];

		gcPlatformAPIClassesGettersLines.push("{{#generate_api_classes_getters}}");
		gcPlatformAPIClassesGettersLines.push(`\t// The following section was automatically generated by the Generate Genesys Cloud Platform API classes utility on ${new Date().toISOString()}`);
		gcPlatformAPIClassesGettersLines.push("");

		for (const currentClass of gcPlatformAPIClassesData) {
			gcPlatformAPIClassesGettersLines.push(`\t/**`);
			gcPlatformAPIClassesGettersLines.push(`\t * Read-only property that returns the ${currentClass.className} API class.`);
			gcPlatformAPIClassesGettersLines.push(`\t * @readonly`);
			gcPlatformAPIClassesGettersLines.push(`\t * @type {${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX}}`);
			gcPlatformAPIClassesGettersLines.push(`\t */`);
			gcPlatformAPIClassesGettersLines.push(`\tget ${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX}() {`);
			gcPlatformAPIClassesGettersLines.push(`\t\treturn this.#${currentClass.className}${GC_PLATFORM_API_CLASSES_NAME_SUFFIX};`);
			gcPlatformAPIClassesGettersLines.push(`\t}`);
			gcPlatformAPIClassesGettersLines.push(``);
		}

		gcPlatformAPIClassesGettersLines.push("\t// {{/generate_api_classes_getters}}");

		return gcPlatformAPIClassesGettersLines.join(os.EOL);
	});

	// Generate the Genesys Cloud Platform API client class file contents
	clientClassFileContents = clientClassHandlebarsTemplate();

	// Write the Genesys Cloud Platform API client class file
	logToConsole.info(`Writing the Genesys Cloud Platform API client class file ${path.basename(clientClassFilePath)}`);
	try {
		fs.writeFileSync(clientClassFilePath, clientClassFileContents);
	} catch (fsError) {
		throw new GeneratorError(`Failed to write the Genesys Cloud Platform API client class file ${path.basename(clientClassFilePath)}`, `Client class file path: ${clientClassFilePath}`, fsError);
	}
	logToConsole.info(`Successfully wrote the Genesys Cloud Platform API client class file ${path.basename(clientClassFilePath)}`);
}

/**
 * Generates the Genesys Cloud Platform API classes markdown file
 * @param {object} gcPlatformAPIClasses The Genesys Cloud Platform API classes object.
 * @param {string} classesDocsDirectory The absolute path to the Genesys Cloud Platform API classes documentation directory.
 * @warning This function assumes that the Genesys Cloud Platform API classes object is valid.
 */
function generateGCPlatformAPIClassesMarkdownFile(gcPlatformAPIClasses, classesDocsDirectory) {
	const gcPlatformAPIClassesHandlebarsTemplateFilePath = path.join(__dirname, "gc-platform-api-classes.md.hbs");

	// Check if the Genesys Cloud Platform API classes object argument is an object
	if (typeof gcPlatformAPIClasses !== "object") {
		throw new TypeError("The Genesys Cloud Platform API classes object argument is not an object.");
	}

	// Check if the classes documentation directory argument is a string
	if (typeof classesDocsDirectory !== "string" || classesDocsDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API classes documentation directory argument is not a string or is empty.");
	}

	// Check if the classes documentation directory argument is an absolute path
	if (path.isAbsolute(classesDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory is not an absolute path.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	// Check if the classes documentation directory argument exists and is a directory
	if (fs.existsSync(classesDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory does not exist.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	let classesDocsDirectoryStats = null;

	try {
		classesDocsDirectoryStats = fs.statSync(classesDocsDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes documentation directory stats.", `Classes documentation directory: ${classesDocsDirectory}.`, fsError);
	}

	if (classesDocsDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory is not a directory.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API classes markdown Handlebars template file exists
	if (fs.existsSync(gcPlatformAPIClassesHandlebarsTemplateFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes markdown Handlebars template file does not exist.", `Handlebars template file path: ${gcPlatformAPIClassesHandlebarsTemplateFilePath}.`);
	}

	let gcPlatformAPIClassesHandlebarsTemplate = null;

	// Load the Genesys Cloud Platform API classes markdown Handlebars template file
	try {
		gcPlatformAPIClassesHandlebarsTemplate = fs.readFileSync(gcPlatformAPIClassesHandlebarsTemplateFilePath, "utf8");
	} catch (fsError) {
		throw new GeneratorError("Failed to load the Genesys Cloud Platform API classes markdown Handlebars template file.", `Handlebars template file: ${gcPlatformAPIClassesHandlebarsTemplate}.`, fsError);
	}

	// Compile the Genesys Cloud Platform API classes markdown Handlebars template, noEscape is set to true to avoid escaping HTML entities
	try {
		gcPlatformAPIClassesHandlebarsTemplate = Handlebars.compile(gcPlatformAPIClassesHandlebarsTemplate, { noEscape: true });
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API classes markdown Handlebars template.", `Handlebars template file: ${gcPlatformAPIClassesHandlebarsTemplate}.`, compileError);
	}

	// Prepare the data for the Handlebars template

	const gcPlatformAPIClassesData = {};
	gcPlatformAPIClassesData.classes = [];

	for (const currentAPIClassName in gcPlatformAPIClasses) {
		const currentAPIClass = gcPlatformAPIClasses[currentAPIClassName];

		const currentAPIClassData = {};

		currentAPIClassData.className = currentAPIClassName;
		if ("description" in currentAPIClass === true) currentAPIClassData.description = currentAPIClass.description;
		if ("documentationURL" in currentAPIClass === true) currentAPIClassData.documentationURL = currentAPIClass.documentationURL;
		currentAPIClassData.classMarkdownFileName = `${currentAPIClassName.toLowerCase()}-api.md`;

		gcPlatformAPIClassesData.classes.push(currentAPIClassData);
	}

	gcPlatformAPIClassesData.classes.sort((a, b) => a.className.localeCompare(b.className));
	gcPlatformAPIClassesData.generationTimestamp = new Date().toISOString();

	const gcPlatformAPIClassesMarkdownFileContents = gcPlatformAPIClassesHandlebarsTemplate(gcPlatformAPIClassesData);

	// Write the Genesys Cloud Platform API classes markdown file
	const gcPlatformAPIClassesMarkdownFilePath = path.join(classesDocsDirectory, GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME);
	logToConsole.info(`Writing the Genesys Cloud Platform API classes markdown file ${GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME}`);
	try {
		fs.writeFileSync(path.join(classesDocsDirectory, GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME), gcPlatformAPIClassesMarkdownFileContents);
	} catch (fsError) {
		throw new GeneratorError(`Failed to write the Genesys Cloud Platform API classes markdown file ${GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME}`, `File path: ${gcPlatformAPIClassesMarkdownFilePath}`, fsError);
	}
	logToConsole.info(`Successfully wrote the Genesys Cloud Platform API classes markdown file ${GC_PLATFORM_API_CLASSES_MARKDOWN_FILE_NAME}`);
}

/**
 * Generates the Genesys Cloud Platform API classes markdown files
 * @param {object} gcPlatformAPIClasses The Genesys Cloud Platform API classes object.
 * @param {string} classesDocsDirectory The absolute path to the Genesys Cloud Platform API classes documentation directory.
 * @warning This function assumes that the Genesys Cloud Platform API classes object is valid.
 */
function generateGCPlatformAPIClassesMarkdownFiles(gcPlatformAPIClasses, classesDocsDirectory) {
	const gcPlatformAPIClassHandlebarsTemplateFilePath = path.join(__dirname, "gc-platform-api-class.md.hbs");

	// Check if the Genesys Cloud Platform API classes object argument is an object
	if (typeof gcPlatformAPIClasses !== "object") {
		throw new TypeError("The Genesys Cloud Platform API classes object argument is not an object.");
	}

	// Check if the classes documentation directory argument is a string
	if (typeof classesDocsDirectory !== "string" || classesDocsDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API classes documentation directory argument is not a string or is empty.");
	}

	// Check if the classes documentation directory argument is an absolute path
	if (path.isAbsolute(classesDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory is not an absolute path.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	// Check if the classes documentation directory argument exists and is a directory
	if (fs.existsSync(classesDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory does not exist.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	let classesDocsDirectoryStats = null;

	try {
		classesDocsDirectoryStats = fs.statSync(classesDocsDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API classes documentation directory stats.", `Classes documentation directory: ${classesDocsDirectory}.`, fsError);
	}

	if (classesDocsDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API classes documentation directory is not a directory.", `Classes documentation directory: ${classesDocsDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API class markdown Handlebars template file exists
	if (fs.existsSync(gcPlatformAPIClassHandlebarsTemplateFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API class markdown Handlebars template file does not exist.", `Handlebars template file path: ${gcPlatformAPIClassHandlebarsTemplateFilePath}.`);
	}

	let gcPlatformAPIClassHandlebarsTemplate = null;

	// Load the Genesys Cloud Platform API class markdown Handlebars template file
	try {
		gcPlatformAPIClassHandlebarsTemplate = fs.readFileSync(gcPlatformAPIClassHandlebarsTemplateFilePath, "utf8");
	} catch (fsError) {
		throw new GeneratorError("Failed to load the Genesys Cloud Platform API class markdown Handlebars template file.", `Handlebars template file: ${gcPlatformAPIClassHandlebarsTemplate}.`, fsError);
	}

	// Compile the Genesys Cloud Platform API class markdown Handlebars template, noEscape is set to true to avoid escaping HTML entities
	try {
		gcPlatformAPIClassHandlebarsTemplate = Handlebars.compile(gcPlatformAPIClassHandlebarsTemplate, { noEscape: true });
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API class markdown Handlebars template.", `Handlebars template file: ${gcPlatformAPIClassHandlebarsTemplate}.`, compileError);
	}

	// Add a Handlebars helper to convert a string to lowercase
	Handlebars.registerHelper("to_lowercase", function (string) {
		return string.toLowerCase();
	});

	// Add a Handlebars helper to find if an object is empty
	Handlebars.registerHelper("is_empty", function (object) {
		if (typeof object !== "object") return false;
		if (Object.keys(object).length === 0) return true;
		else return false;
	});

	// Iterate over the Genesys Cloud Platform API classes
	for (const currentAPIClassName in gcPlatformAPIClasses) {
		const currentAPIClass = gcPlatformAPIClasses[currentAPIClassName];

		const currentAPIClassData = {};

		currentAPIClassData.className = currentAPIClassName;
		if ("description" in currentAPIClass === true) currentAPIClassData.description = currentAPIClass.description;
		if ("documentationURL" in currentAPIClass === true) currentAPIClassData.documentationURL = currentAPIClass.documentationURL;
		currentAPIClassData.methods = [...currentAPIClass.methods];
		currentAPIClassData.generationTimestamp = new Date().toISOString();

		// Sort the current Genesys Cloud API class methods
		currentAPIClassData.methods.sort((a, b) => a.name.localeCompare(b.name));

		const gcPlatformAPIClassesMarkdownFileContents = gcPlatformAPIClassHandlebarsTemplate(currentAPIClassData);

		const gcPlatformAPIClassMarkdownFileName = `${currentAPIClassName.toLowerCase()}-api.md`;

		// Write the Genesys Cloud Platform API class markdown file
		const gcPlatformAPIClassMarkdownFilePath = path.join(classesDocsDirectory, gcPlatformAPIClassMarkdownFileName);
		logToConsole.info(`Writing the Genesys Cloud Platform API class markdown file ${gcPlatformAPIClassMarkdownFileName}`);
		try {
			fs.writeFileSync(gcPlatformAPIClassMarkdownFilePath, gcPlatformAPIClassesMarkdownFileContents);
		} catch (fsError) {
			throw new GeneratorError(`Failed to write the Genesys Cloud Platform API class markdown file ${gcPlatformAPIClassMarkdownFileName}`, `File path: ${gcPlatformAPIClassMarkdownFilePath}`, fsError);
		}
		logToConsole.info(`Successfully wrote the Genesys Cloud Platform API class markdown file ${gcPlatformAPIClassMarkdownFileName}`);
	}
}

/**
 * Generates the Genesys Cloud Platform API definitions markdown file
 * @param {object} gcPlatformAPIdefinitions The Genesys Cloud Platform API definitions object.
 * @param {string} definitionsDocsDirectory The absolute path to the Genesys Cloud Platform API definitions documentation directory.
 * @warning This function assumes that the Genesys Cloud Platform API definitions object is valid.
 */
function generateGCPlatformAPIDefinitionsMarkdownFile(gcPlatformAPIdefinitions, definitionsDocsDirectory) {
	const gcPlatformAPIDefinitionHandlebarsTemplateFilePath = path.join(__dirname, "gc-platform-api-definition.md.hbs");

	// Check if the Genesys Cloud Platform API definitions object argument is an object
	if (typeof gcPlatformAPIdefinitions !== "object") {
		throw new TypeError("The Genesys Cloud Platform API definitions object argument is not an object.");
	}

	// Check if the definitions documentation directory argument is a string
	if (typeof definitionsDocsDirectory !== "string" || definitionsDocsDirectory === "") {
		throw new TypeError("The Genesys Cloud Platform API definitions documentation directory argument is not a string or is empty.");
	}

	// Check if the definitions documentation directory argument is an absolute path
	if (path.isAbsolute(definitionsDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API definitions documentation directory is not an absolute path.", `Definitions documentation directory: ${definitionsDocsDirectory}.`);
	}

	// Check if the definitions documentation directory argument exists and is a directory
	if (fs.existsSync(definitionsDocsDirectory) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API definitions documentation directory does not exist.", `Definitions documentation directory: ${definitionsDocsDirectory}.`);
	}

	let definitionDocsDirectoryStats = null;

	try {
		definitionDocsDirectoryStats = fs.statSync(definitionsDocsDirectory);
	} catch (fsError) {
		throw new GeneratorError("Failed to get the Genesys Cloud Platform API definitions documentation directory stats.", `Definitions documentation directory: ${definitionsDocsDirectory}.`, fsError);
	}

	if (definitionDocsDirectoryStats.isDirectory() === false) {
		throw new GeneratorError("The Genesys Cloud Platform API definitions documentation directory is not a directory.", `Definitions documentation directory: ${definitionsDocsDirectory}.`);
	}

	// Check if the Genesys Cloud Platform API definition markdown Handlebars template file exists
	if (fs.existsSync(gcPlatformAPIDefinitionHandlebarsTemplateFilePath) === false) {
		throw new GeneratorError("The Genesys Cloud Platform API definition markdown Handlebars template file does not exist.", `Handlebars template file path: ${gcPlatformAPIDefinitionHandlebarsTemplateFilePath}.`);
	}

	let gcPlatformAPIDefinitionHandlebarsTemplate = null;

	// Load the Genesys Cloud Platform API definition markdown Handlebars template file
	try {
		gcPlatformAPIDefinitionHandlebarsTemplate = fs.readFileSync(gcPlatformAPIDefinitionHandlebarsTemplateFilePath, "utf8");
	} catch (fsError) {
		throw new GeneratorError("Failed to load the Genesys Cloud Platform API definition markdown Handlebars template file.", `Handlebars template file: ${gcPlatformAPIDefinitionHandlebarsTemplate}.`, fsError);
	}

	// Compile the Genesys Cloud Platform API definition markdown Handlebars template, noEscape is set to true to avoid escaping HTML entities
	try {
		gcPlatformAPIDefinitionHandlebarsTemplate = Handlebars.compile(gcPlatformAPIDefinitionHandlebarsTemplate, { noEscape: true });
	} catch (compileError) {
		throw new GeneratorError("Failed to compile the Genesys Cloud Platform API definition markdown Handlebars template.", `Handlebars template file: ${gcPlatformAPIDefinitionHandlebarsTemplate}.`, compileError);
	}

	// Add a Handlebars helper to convert a string to lowercase
	Handlebars.registerHelper("to_lowercase", function (string) {
		return string.toLowerCase();
	});

	// Iterate over the Genesys Cloud Platform API classes
	for (const currentAPIDefinitionName in gcPlatformAPIdefinitions) {
		const currentAPIDefinition = gcPlatformAPIdefinitions[currentAPIDefinitionName];
		const currentAPIDefinitionData = {};

		currentAPIDefinitionData.name = currentAPIDefinitionName;
		Object.assign(currentAPIDefinitionData, currentAPIDefinition);
		currentAPIDefinitionData.generationTimestamp = new Date().toISOString();
	
		const gcPlatformAPIDefinitionsMarkdownFileContents = gcPlatformAPIDefinitionHandlebarsTemplate(currentAPIDefinitionData);
	
		// Write the Genesys Cloud Platform API definitions markdown file
		const gcPlatformAPIDefinitionsMarkdownFileName = `${currentAPIDefinitionName.toLowerCase()}-definition.md`;
		const gcPlatformAPIDefinitionsMarkdownFilePath = path.join(definitionsDocsDirectory, gcPlatformAPIDefinitionsMarkdownFileName);
		logToConsole.info(`Writing the Genesys Cloud Platform API definition markdown file ${gcPlatformAPIDefinitionsMarkdownFileName}`);
		try {
			fs.writeFileSync(path.join(definitionsDocsDirectory, gcPlatformAPIDefinitionsMarkdownFileName), gcPlatformAPIDefinitionsMarkdownFileContents);
		} catch (fsError) {
			throw new GeneratorError(`Failed to write the Genesys Cloud Platform API definition markdown file ${gcPlatformAPIDefinitionsMarkdownFileName}`, `File path: ${gcPlatformAPIDefinitionsMarkdownFilePath}`, fsError);
		}
		logToConsole.info(`Successfully wrote the Genesys Cloud Platform API definition markdown file ${gcPlatformAPIDefinitionsMarkdownFileName}`);
	}
}

/**
 * Converts a Pascal case string to kebab case string.
 * @param {string} pascalCaseString - The Pascal case string to convert.
 * @returns {string} The converted kebab case string.
 */
function convertPascalCaseToKebabCase(pascalCaseString) {
	return pascalCaseString.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Custom error class
 * @class
 */
class GeneratorError extends Error {
	/**
	 * @constructor
	 * @param {string} message - The error message.
	 * @param {string} [debugMessage] - The debug error message.
	 * @param {Error} [extendedError] - The extended error object.
	 */
	constructor(message, debugMessage, extendedError) {
		super(message);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof debugMessage === "string") this.debugMessage = debugMessage;
		if (typeof extendedError === "object" && extendedError instanceof Error) this.extendedError = extendedError;
	}
}

main();
