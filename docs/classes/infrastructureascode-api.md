# `InfrastructureasCodeAPI` Class

Accelerated infrastructure configuration via reusable modules

## Methods

- [`getInfrastructureascodeAccelerator`](#getinfrastructureascodeaccelerator) - Get information about an accelerator
- [`getInfrastructureascodeAccelerators`](#getinfrastructureascodeaccelerators) - Get a list of available accelerators
- [`getInfrastructureascodeJob`](#getinfrastructureascodejob) - Get job status and results
- [`getInfrastructureascodeJobs`](#getinfrastructureascodejobs) - Get job history
- [`postInfrastructureascodeJobs`](#postinfrastructureascodejobs) - Create a Job

### `getInfrastructureascodeAccelerator`

Get information about an accelerator

#### Description

Get the complete metadata specification for an accelerator, including requirements and parameters.

#### Endpoint

`GET /api/v2/infrastructureascode/accelerators/{acceleratorId}`

#### Parameters

- `acceleratorId` - **(string, required)** Accelerator ID
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.preferredLanguage` - **(string, optional)** Preferred Language

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [AcceleratorSpecification](../definitions/acceleratorspecification-definition.md) | successful operation |
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

### `getInfrastructureascodeAccelerators`

Get a list of available accelerators

#### Description

Search for accelerators that can be run.

#### Endpoint

`GET /api/v2/infrastructureascode/accelerators`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageSize` - **(number, optional)** The total page size requested
- `query.pageNumber` - **(number, optional)** The page number requested
- `query.sortBy` - **(string, optional)** variable name requested to sort by
- `query.sortOrder` - **(string, optional)** Sort order
- `query.name` - **(string, optional)** Filter by name
- `query.description` - **(string, optional)** Filter by description
- `query.origin` - **(string, optional)** Filter by origin
- `query.type` - **(string, optional)** Filter by type
- `query.classification` - **(string, optional)** Filter by classification
- `query.tags` - **(string, optional)** Filter by tags

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [AcceleratorList](../definitions/acceleratorlist-definition.md) | successful operation |
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

### `getInfrastructureascodeJob`

Get job status and results

#### Description

Get the execution status of a submitted job, optionally including results and error details.

#### Endpoint

`GET /api/v2/infrastructureascode/jobs/{jobId}`

#### Parameters

- `jobId` - **(string, required)** Job ID
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.details` - **(boolean, optional)** Include details of execution, including job results or error information

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InfrastructureascodeJob](../definitions/infrastructureascodejob-definition.md) | successful operation |
| `202` | [InfrastructureascodeJob](../definitions/infrastructureascodejob-definition.md) | Job in progress. |
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

### `getInfrastructureascodeJobs`

Get job history

#### Description

Get a history of submitted jobs, optionally including error messages.

#### Endpoint

`GET /api/v2/infrastructureascode/jobs`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.maxResults` - **(number, optional)** Number of jobs to show
- `query.includeErrors` - **(boolean, optional)** Include error messages
- `query.sortBy` - **(string, optional)** Sort by
- `query.sortOrder` - **(string, optional)** Sort order
- `query.acceleratorId` - **(string, optional)** Find only jobs associated with this accelerator
- `query.submittedBy` - **(string, optional)** Find only jobs submitted by this user
- `query.status` - **(string, optional)** Find only jobs in this state

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InfrastructureascodeJob](../definitions/infrastructureascodejob-definition.md) | successful operation |
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

### `postInfrastructureascodeJobs`

Create a Job

#### Description

Create and submit a job for remote execution or see job planning results.

#### Endpoint

`POST /api/v2/infrastructureascode/jobs`

#### Parameters

- `body` - **([AcceleratorInput](../definitions/acceleratorinput-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InfrastructureascodeJob](../definitions/infrastructureascodejob-definition.md) | successful operation |
| `202` | [InfrastructureascodeJob](../definitions/infrastructureascodejob-definition.md) | Job submitted for execution. |
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

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.438Z*