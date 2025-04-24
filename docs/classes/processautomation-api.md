# `ProcessAutomationAPI` Class

Work items, flows, triggers

## Methods

- [`deleteProcessautomationTrigger`](#deleteprocessautomationtrigger) - Delete a Trigger
- [`getProcessautomationTrigger`](#getprocessautomationtrigger) - Retrieve a single Trigger matching id
- [`getProcessautomationTriggers`](#getprocessautomationtriggers) - Retrieves all triggers, optionally filtered by query parameters.
- [`getProcessautomationTriggersTopics`](#getprocessautomationtriggerstopics) - Get topics available for organization
- [`postProcessautomationTriggers`](#postprocessautomationtriggers) - Create a Trigger
- [`postProcessautomationTriggersTopicTest`](#postprocessautomationtriggerstopictest) - Test the matching of all organization Triggers on given topic using provided event body
- [`postProcessautomationTriggerTest`](#postprocessautomationtriggertest) - Test the matching of a Trigger based on provided event body
- [`putProcessautomationTrigger`](#putprocessautomationtrigger) - Update a Trigger

### `deleteProcessautomationTrigger`

Delete a Trigger

#### Endpoint

`DELETE /api/v2/processautomation/triggers/{triggerId}`

#### Parameters

- `triggerId` - **(string, required)** triggerId

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Delete was successful |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `getProcessautomationTrigger`

Retrieve a single Trigger matching id

#### Endpoint

`GET /api/v2/processautomation/triggers/{triggerId}`

#### Parameters

- `triggerId` - **(string, required)** triggerId

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [Trigger](../definitions/trigger-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `getProcessautomationTriggers`

Retrieves all triggers, optionally filtered by query parameters.

#### Endpoint

`GET /api/v2/processautomation/triggers`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.before` - **(string, optional)** The cursor that points to the start of the set of entities that has been returned.
- `query.after` - **(string, optional)** The cursor that points to the end of the set of entities that has been returned.
- `query.pageSize` - **(string, optional)** Number of entities to return. Maximum of 200.
- `query.topicName` - **(string, optional)** Topic name(s). Separated by commas
- `query.enabled` - **(boolean, optional)** Boolean indicating desired enabled state of triggers
- `query.hasDelayBy` - **(boolean, optional)** Boolean to filter based on delayBySeconds being set in triggers. Default returns all, true returns only those with delayBySeconds set, false returns those without delayBySeconds set.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TriggerEntityListing](../definitions/triggerentitylisting-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `getProcessautomationTriggersTopics`

Get topics available for organization

#### Endpoint

`GET /api/v2/processautomation/triggers/topics`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.before` - **(string, optional)** The cursor that points to the start of the set of entities that has been returned.
- `query.after` - **(string, optional)** The cursor that points to the end of the set of entities that has been returned.
- `query.pageSize` - **(string, optional)** Number of entities to return. Maximum of 200.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TopicCursorEntityListing](../definitions/topiccursorentitylisting-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `postProcessautomationTriggers`

Create a Trigger

#### Endpoint

`POST /api/v2/processautomation/triggers`

#### Parameters

- `body` - **([CreateTriggerRequest](../definitions/createtriggerrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [Trigger](../definitions/trigger-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `postProcessautomationTriggersTopicTest`

Test the matching of all organization Triggers on given topic using provided event body

#### Endpoint

`POST /api/v2/processautomation/triggers/topics/{topicName}/test`

#### Parameters

- `topicName` - **(string, required)** topicName
- `body` - **(string, optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TestModeEventResults](../definitions/testmodeeventresults-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `postProcessautomationTriggerTest`

Test the matching of a Trigger based on provided event body

#### Endpoint

`POST /api/v2/processautomation/triggers/{triggerId}/test`

#### Parameters

- `triggerId` - **(string, required)** triggerId
- `body` - **(string, optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TestModeResults](../definitions/testmoderesults-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `putProcessautomationTrigger`

Update a Trigger

#### Endpoint

`PUT /api/v2/processautomation/triggers/{triggerId}`

#### Parameters

- `triggerId` - **(string, required)** triggerId
- `body` - **([UpdateTriggerRequest](../definitions/updatetriggerrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [Trigger](../definitions/trigger-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ErrorBody](../definitions/errorbody-definition.md) | The request conflicts with the current state of the target resource. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |


---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.427Z*