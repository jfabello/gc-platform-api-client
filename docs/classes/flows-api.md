# `FlowsAPI` Class

IVR Flows

## Methods

- [`postAnalyticsFlowsActivityQuery`](#postanalyticsflowsactivityquery) - Query for flow activity observations
- [`postAnalyticsFlowsAggregatesQuery`](#postanalyticsflowsaggregatesquery) - Query for flow aggregates
- [`postAnalyticsFlowsObservationsQuery`](#postanalyticsflowsobservationsquery) - Query for flow observations

### `postAnalyticsFlowsActivityQuery`

Query for flow activity observations

#### Endpoint

`POST /api/v2/analytics/flows/activity/query`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageSize` - **(number, optional)** The desired page size
- `query.pageNumber` - **(number, optional)** The desired page number
- `body` - **([FlowActivityQuery](../definitions/flowactivityquery-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FlowActivityResponse](../definitions/flowactivityresponse-definition.md) | successful operation |
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

### `postAnalyticsFlowsAggregatesQuery`

Query for flow aggregates

#### Endpoint

`POST /api/v2/analytics/flows/aggregates/query`

#### Parameters

- `body` - **([FlowAggregationQuery](../definitions/flowaggregationquery-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FlowAggregateQueryResponse](../definitions/flowaggregatequeryresponse-definition.md) | successful operation |
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

### `postAnalyticsFlowsObservationsQuery`

Query for flow observations

#### Endpoint

`POST /api/v2/analytics/flows/observations/query`

#### Parameters

- `body` - **([FlowObservationQuery](../definitions/flowobservationquery-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FlowObservationQueryResponse](../definitions/flowobservationqueryresponse-definition.md) | successful operation |
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

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.365Z*