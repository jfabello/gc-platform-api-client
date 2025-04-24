# `SCIMAPI` Class

System for Cross-domain Identity Management

## Methods

- [`deleteScimUser`](#deletescimuser) - Delete a user
- [`deleteScimV2User`](#deletescimv2user) - Delete a user
- [`getScimGroup`](#getscimgroup) - Get a group
- [`getScimGroups`](#getscimgroups) - Get a list of groups
- [`getScimResourcetype`](#getscimresourcetype) - Get a resource type
- [`getScimResourcetypes`](#getscimresourcetypes) - Get a list of resource types
- [`getScimSchema`](#getscimschema) - Get a SCIM schema
- [`getScimSchemas`](#getscimschemas) - Get a list of SCIM schemas
- [`getScimServiceproviderconfig`](#getscimserviceproviderconfig) - Get a service provider's configuration
- [`getScimUser`](#getscimuser) - Get a user
- [`getScimUsers`](#getscimusers) - Get a list of users
- [`getScimV2Group`](#getscimv2group) - Get a group
- [`getScimV2Groups`](#getscimv2groups) - Get a list of groups
- [`getScimV2Resourcetype`](#getscimv2resourcetype) - Get a resource type
- [`getScimV2Resourcetypes`](#getscimv2resourcetypes) - Get a list of resource types
- [`getScimV2Schema`](#getscimv2schema) - Get a SCIM schema
- [`getScimV2Schemas`](#getscimv2schemas) - Get a list of SCIM schemas
- [`getScimV2Serviceproviderconfig`](#getscimv2serviceproviderconfig) - Get a service provider's configuration
- [`getScimV2User`](#getscimv2user) - Get a user
- [`getScimV2Users`](#getscimv2users) - Get a list of users
- [`patchScimGroup`](#patchscimgroup) - Modify a group
- [`patchScimUser`](#patchscimuser) - Modify a user
- [`patchScimV2Group`](#patchscimv2group) - Modify a group
- [`patchScimV2User`](#patchscimv2user) - Modify a user
- [`postScimUsers`](#postscimusers) - Create a user
- [`postScimV2Users`](#postscimv2users) - Create a user
- [`putScimGroup`](#putscimgroup) - Replace a group
- [`putScimUser`](#putscimuser) - Replace a user
- [`putScimV2Group`](#putscimv2group) - Replace a group
- [`putScimV2User`](#putscimv2user) - Replace a user

### `deleteScimUser`

Delete a user

#### Endpoint

`DELETE /api/v2/scim/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [Empty](../definitions/empty-definition.md) | successful operation |
| `204` |  | User Deleted with no content returned. |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `deleteScimV2User`

Delete a user

#### Endpoint

`DELETE /api/v2/scim/v2/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/v2/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [Empty](../definitions/empty-definition.md) | successful operation |
| `204` |  | User Deleted with no content returned. |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `getScimGroup`

Get a group

#### Endpoint

`GET /api/v2/scim/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns "id", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `304` |  | If-Non-Match header matches current version. No content returned. |
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

### `getScimGroups`

Get a list of groups

#### Endpoint

`GET /api/v2/scim/groups`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.startIndex` - **(number, optional)** The 1-based index of the first query result.
- `query.count` - **(number, optional)** The requested number of items per page. A value of 0 returns "totalResults". A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the "excludedAttributes" or "attributes" query parameters to exclude or only include secondary lookup values such as "externalId",  "roles", "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages", or "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills".
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns "id", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.
- `query.filter` - **(string, optional)** Filters results. If nothing is specified, returns all groups. Examples of valid values: "id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3", "displayname eq Sales".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimGroupListResponse](../definitions/scimgrouplistresponse-definition.md) | successful operation |
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

### `getScimResourcetype`

Get a resource type

#### Endpoint

`GET /api/v2/scim/resourcetypes/{resourceType}`

#### Parameters

- `resourceType` - **(string, required)** The type of resource. Returned with GET /api/v2/scim/resourcetypes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimConfigResourceType](../definitions/scimconfigresourcetype-definition.md) | successful operation |
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

### `getScimResourcetypes`

Get a list of resource types

#### Endpoint

`GET /api/v2/scim/resourcetypes`

#### Parameters

This method does not have any parameters.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimConfigResourceTypesListResponse](../definitions/scimconfigresourcetypeslistresponse-definition.md) | successful operation |
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

### `getScimSchema`

Get a SCIM schema

#### Endpoint

`GET /api/v2/scim/schemas/{schemaId}`

#### Parameters

- `schemaId` - **(string, required)** The ID of a schema. Returned with GET /api/v2/scim/schemas.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2SchemaDefinition](../definitions/scimv2schemadefinition-definition.md) | successful operation |
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

### `getScimSchemas`

Get a list of SCIM schemas

#### Endpoint

`GET /api/v2/scim/schemas`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.filter` - **(string, optional)** Filtered results are invalid and return 403 Unauthorized.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2SchemaListResponse](../definitions/scimv2schemalistresponse-definition.md) | successful operation |
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

### `getScimServiceproviderconfig`

Get a service provider's configuration

#### Endpoint

`GET /api/v2/scim/serviceproviderconfig`

#### Parameters

- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimServiceProviderConfig](../definitions/scimserviceproviderconfig-definition.md) | successful operation |
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

### `getScimUser`

Get a user

#### Endpoint

`GET /api/v2/scim/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "userName", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns the "id", "userName", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `304` |  | If-Non-Match header matches current version. No content returned. |
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

### `getScimUsers`

Get a list of users

#### Description

To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".

#### Endpoint

`GET /api/v2/scim/users`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.startIndex` - **(number, optional)** The 1-based index of the first query result.
- `query.count` - **(number, optional)** The requested number of items per page. A value of 0 returns "totalResults". A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the "excludedAttributes" or "attributes" query parameters to exclude or only include secondary lookup values such as "externalId",  "roles", "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages", or "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills".
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "userName", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns the "id", "userName", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.
- `query.filter` - **(string, optional)** Filters results. If nothing is specified, returns all active users. Examples of valid values: "id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9", "userName eq search@sample.org", "manager eq 16e10e2f-1136-43fe-bb84-eac073168a49", "email eq search@sample.org", "division eq divisionName", "externalId eq 167844", "active eq false", "employeeNumber eq 9876543210".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimUserListResponse](../definitions/scimuserlistresponse-definition.md) | successful operation |
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

### `getScimV2Group`

Get a group

#### Endpoint

`GET /api/v2/scim/v2/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/v2/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns "id", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `304` |  | If-Non-Match header matches current version. No content returned. |
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

### `getScimV2Groups`

Get a list of groups

#### Endpoint

`GET /api/v2/scim/v2/groups`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.startIndex` - **(number, optional)** The 1-based index of the first query result.
- `query.count` - **(number, optional)** The requested number of items per page. A value of 0 returns "totalResults". A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the "excludedAttributes" or "attributes" query parameters to exclude or only include secondary lookup values such as "externalId",  "roles", "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages", or "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills".
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns "id", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.
- `query.filter` - **(string, required)** Filters results. If nothing is specified, returns all groups. Examples of valid values: "id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3", "displayname eq Sales".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimGroupListResponse](../definitions/scimgrouplistresponse-definition.md) | successful operation |
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

### `getScimV2Resourcetype`

Get a resource type

#### Endpoint

`GET /api/v2/scim/v2/resourcetypes/{resourceType}`

#### Parameters

- `resourceType` - **(string, required)** The type of resource. Returned with GET /api/v2/scim/v2/resourcetypes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimConfigResourceType](../definitions/scimconfigresourcetype-definition.md) | successful operation |
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

### `getScimV2Resourcetypes`

Get a list of resource types

#### Endpoint

`GET /api/v2/scim/v2/resourcetypes`

#### Parameters

This method does not have any parameters.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimConfigResourceTypesListResponse](../definitions/scimconfigresourcetypeslistresponse-definition.md) | successful operation |
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

### `getScimV2Schema`

Get a SCIM schema

#### Endpoint

`GET /api/v2/scim/v2/schemas/{schemaId}`

#### Parameters

- `schemaId` - **(string, required)** The ID of a schema. Returned with GET /api/v2/scim/v2/schemas.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2SchemaDefinition](../definitions/scimv2schemadefinition-definition.md) | successful operation |
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

### `getScimV2Schemas`

Get a list of SCIM schemas

#### Endpoint

`GET /api/v2/scim/v2/schemas`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.filter` - **(string, optional)** Filtered results are invalid and return 403 Unauthorized.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2SchemaListResponse](../definitions/scimv2schemalistresponse-definition.md) | successful operation |
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

### `getScimV2Serviceproviderconfig`

Get a service provider's configuration

#### Endpoint

`GET /api/v2/scim/v2/serviceproviderconfig`

#### Parameters

- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimServiceProviderConfig](../definitions/scimserviceproviderconfig-definition.md) | successful operation |
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

### `getScimV2User`

Get a user

#### Endpoint

`GET /api/v2/scim/v2/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/v2/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-None-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "userName", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns the "id", "userName", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `304` |  | If-Non-Match header matches current version. No content returned. |
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

### `getScimV2Users`

Get a list of users

#### Description

To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".

#### Endpoint

`GET /api/v2/scim/v2/users`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.startIndex` - **(number, optional)** The 1-based index of the first query result.
- `query.count` - **(number, optional)** The requested number of items per page. A value of 0 returns "totalResults". A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the "excludedAttributes" or "attributes" query parameters to exclude or only include secondary lookup values such as "externalId",  "roles", "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages", or "urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills".
- `query.attributes` - **(string[], optional)** Indicates which attributes to include. Returns these attributes and the "id", "userName", "active", and "meta" attributes. Use "attributes" to avoid expensive secondary calls for the default attributes.
- `query.excludedAttributes` - **(string[], optional)** Indicates which attributes to exclude. Returns the default attributes minus "excludedAttributes". Always returns the "id", "userName", "active", and "meta" attributes. Use "excludedAttributes" to avoid expensive secondary calls for the default attributes.
- `query.filter` - **(string, optional)** Filters results. If nothing is specified, returns all active users. Examples of valid values: "id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9", "userName eq search@sample.org", "manager eq 16e10e2f-1136-43fe-bb84-eac073168a49", "email eq search@sample.org", "division eq divisionName", "externalId eq 167844", "active eq false", "employeeNumber eq 9876543210".

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimUserListResponse](../definitions/scimuserlistresponse-definition.md) | successful operation |
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

### `patchScimGroup`

Modify a group

#### Endpoint

`PATCH /api/v2/scim/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2PatchRequest](../definitions/scimv2patchrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `patchScimUser`

Modify a user

#### Endpoint

`PATCH /api/v2/scim/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2PatchRequest](../definitions/scimv2patchrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `patchScimV2Group`

Modify a group

#### Endpoint

`PATCH /api/v2/scim/v2/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/v2/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2PatchRequest](../definitions/scimv2patchrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `patchScimV2User`

Modify a user

#### Endpoint

`PATCH /api/v2/scim/v2/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/v2/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2PatchRequest](../definitions/scimv2patchrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `postScimUsers`

Create a user

#### Endpoint

`POST /api/v2/scim/users`

#### Parameters

- `body` - **([ScimV2CreateUser](../definitions/scimv2createuser-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `201` | [ScimV2User](../definitions/scimv2user-definition.md) | User Created. |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | User name already in use by non-deleted user. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `postScimV2Users`

Create a user

#### Endpoint

`POST /api/v2/scim/v2/users`

#### Parameters

- `body` - **([ScimV2CreateUser](../definitions/scimv2createuser-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `201` | [ScimV2User](../definitions/scimv2user-definition.md) | User Created. |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | User name already in use by non-deleted user. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `putScimGroup`

Replace a group

#### Endpoint

`PUT /api/v2/scim/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2Group](../definitions/scimv2group-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `putScimUser`

Replace a user

#### Endpoint

`PUT /api/v2/scim/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2User](../definitions/scimv2user-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `putScimV2Group`

Replace a group

#### Endpoint

`PUT /api/v2/scim/v2/groups/{groupId}`

#### Parameters

- `groupId` - **(string, required)** The ID of a group. Returned with GET /api/v2/scim/v2/groups.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2Group](../definitions/scimv2group-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2Group](../definitions/scimv2group-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |

### `putScimV2User`

Replace a user

#### Endpoint

`PUT /api/v2/scim/v2/users/{userId}`

#### Parameters

- `userId` - **(string, required)** The ID of a user. Returned with GET /api/v2/scim/v2/users.
- `headers` - **(object)** The headers to include in the request. An empty object or `null` is allowed if all headers are optional.
- `headers.If-Match` - **(string, optional)** The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: "42". If the ETag is different from the version on the server, returns 400 with a "scimType" of "invalidVers".
- `body` - **([ScimV2User](../definitions/scimv2user-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ScimV2User](../definitions/scimv2user-definition.md) | successful operation |
| `400` | [ErrorBody](../definitions/errorbody-definition.md) | The request could not be understood by the server due to malformed syntax. |
| `401` | [ErrorBody](../definitions/errorbody-definition.md) | No authentication bearer token specified in authorization header. |
| `403` | [ErrorBody](../definitions/errorbody-definition.md) | You are not authorized to perform the requested action. |
| `404` | [ErrorBody](../definitions/errorbody-definition.md) | The requested resource was not found. |
| `408` | [ErrorBody](../definitions/errorbody-definition.md) | The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads. |
| `409` | [ScimError](../definitions/scimerror-definition.md) | Version does not match current version. |
| `413` | [ErrorBody](../definitions/errorbody-definition.md) | The request is over the size limit. Maximum bytes: %s |
| `415` | [ErrorBody](../definitions/errorbody-definition.md) | Unsupported Media Type - Unsupported or incorrect media type, such as an incorrect Content-Type value in the header. |
| `429` | [ErrorBody](../definitions/errorbody-definition.md) | Rate limit exceeded the maximum. Retry the request in [%s] seconds |
| `500` | [ErrorBody](../definitions/errorbody-definition.md) | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| `503` | [ErrorBody](../definitions/errorbody-definition.md) | Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). |
| `504` | [ErrorBody](../definitions/errorbody-definition.md) | The request timed out. |


---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.428Z*