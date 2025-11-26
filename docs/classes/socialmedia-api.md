# `SocialMediaAPI` Class

Resources and analytics related to social media listening and response

## Methods

- [`deleteSocialmediaEscalationrule`](#deletesocialmediaescalationrule) - Delete an escalation rule.
- [`deleteSocialmediaTopic`](#deletesocialmediatopic) - Delete a social topic.
- [`deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`](#deletesocialmediatopicdataingestionrulesfacebookfacebookingestionruleid) - Delete a Facebook data ingestion rule.
- [`deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`](#deletesocialmediatopicdataingestionrulesinstagraminstagramingestionruleid) - Delete a Instagram data ingestion rule.
- [`deleteSocialmediaTopicDataingestionrulesOpenOpenId`](#deletesocialmediatopicdataingestionrulesopenopenid) - Delete a open data ingestion rule.
- [`deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`](#deletesocialmediatopicdataingestionrulestwittertwitteringestionruleid) - Delete a X (formally Twitter) data ingestion rule.
- [`getSocialmediaAnalyticsAggregatesJob`](#getsocialmediaanalyticsaggregatesjob) - Get status for async query for social media aggregates
- [`getSocialmediaAnalyticsAggregatesJobResults`](#getsocialmediaanalyticsaggregatesjobresults) - Fetch a page of results for an async social media query
- [`getSocialmediaAnalyticsMessagesJob`](#getsocialmediaanalyticsmessagesjob) - Get status for async query for social media messages job
- [`getSocialmediaAnalyticsMessagesJobResults`](#getsocialmediaanalyticsmessagesjobresults) - Fetch a page of results for an async social media messages query
- [`getSocialmediaEscalationrule`](#getsocialmediaescalationrule) - Get a single escalation rule.
- [`getSocialmediaEscalationrules`](#getsocialmediaescalationrules) - Retrieve all escalation rules for a division.
- [`getSocialmediaTopic`](#getsocialmediatopic) - Get a single social topic.
- [`getSocialmediaTopicDataingestionrules`](#getsocialmediatopicdataingestionrules) - Retrieve all social topic data ingestion rules with pagination.
- [`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`](#getsocialmediatopicdataingestionrulesfacebookfacebookingestionruleid) - Get a single Facebook data ingestion rule.
- [`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion`](#getsocialmediatopicdataingestionrulesfacebookfacebookingestionruleidversion) - Get a single Facebook data ingestion rule version.
- [`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions`](#getsocialmediatopicdataingestionrulesfacebookfacebookingestionruleidversions) - Get the Facebook data ingestion rule versions.
- [`getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`](#getsocialmediatopicdataingestionrulesinstagraminstagramingestionruleid) - Get a single Instagram data ingestion rule.
- [`getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion`](#getsocialmediatopicdataingestionrulesinstagraminstagramingestionruleidversion) - Get a single Instagram data ingestion rule version.
- [`getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions`](#getsocialmediatopicdataingestionrulesinstagraminstagramingestionruleidversions) - Get the Instagram data ingestion rule versions.
- [`getSocialmediaTopicDataingestionrulesOpenOpenId`](#getsocialmediatopicdataingestionrulesopenopenid) - Get a single open data ingestion rule.
- [`getSocialmediaTopicDataingestionrulesOpenOpenIdVersion`](#getsocialmediatopicdataingestionrulesopenopenidversion) - Get a single Open data ingestion rule version.
- [`getSocialmediaTopicDataingestionrulesOpenOpenIdVersions`](#getsocialmediatopicdataingestionrulesopenopenidversions) - Get the Open data ingestion rule versions.
- [`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`](#getsocialmediatopicdataingestionrulestwittertwitteringestionruleid) - Get a single X (formally Twitter) data ingestion rule.
- [`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion`](#getsocialmediatopicdataingestionrulestwittertwitteringestionruleidversion) - Get a single X (formally Twitter) data ingestion rule version.
- [`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions`](#getsocialmediatopicdataingestionrulestwittertwitteringestionruleidversions) - Get the Open data ingestion rule versions.
- [`getSocialmediaTopics`](#getsocialmediatopics) - Retrieve all social topics.
- [`patchSocialmediaTopic`](#patchsocialmediatopic) - Update a social topic.
- [`patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`](#patchsocialmediatopicdataingestionrulesfacebookfacebookingestionruleid) - Update the status of a Facebook data ingestion rule.
- [`patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`](#patchsocialmediatopicdataingestionrulesinstagraminstagramingestionruleid) - Update the status of a Instagram data ingestion rule.
- [`patchSocialmediaTopicDataingestionrulesOpenOpenId`](#patchsocialmediatopicdataingestionrulesopenopenid) - Update the status of a open data ingestion rule.
- [`patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`](#patchsocialmediatopicdataingestionrulestwittertwitteringestionruleid) - Update the status of a X (formally Twitter) data ingestion rule.
- [`postSocialmediaAnalyticsAggregatesJobs`](#postsocialmediaanalyticsaggregatesjobs) - Query for social media aggregates asynchronously
- [`postSocialmediaAnalyticsMessagesJobs`](#postsocialmediaanalyticsmessagesjobs) - Query for social media messages asynchronously
- [`postSocialmediaEscalationrules`](#postsocialmediaescalationrules) - Create an escalation rule.
- [`postSocialmediaEscalationsMessages`](#postsocialmediaescalationsmessages) - Escalate message to a conversation manually
- [`postSocialmediaTopicDataingestionrulesFacebook`](#postsocialmediatopicdataingestionrulesfacebook) - Create an Facebook data ingestion rule.
- [`postSocialmediaTopicDataingestionrulesInstagram`](#postsocialmediatopicdataingestionrulesinstagram) - Create an Instagram data ingestion rule.
- [`postSocialmediaTopicDataingestionrulesOpen`](#postsocialmediatopicdataingestionrulesopen) - Create an open data ingestion rule.
- [`postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk`](#postsocialmediatopicdataingestionrulesopenruleidmessagesbulk) - Ingest a list of Open Social Messages
- [`postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk`](#postsocialmediatopicdataingestionrulesopenruleidreactionsbulk) - Ingest a list of Open Social Reactions
- [`postSocialmediaTopicDataingestionrulesTwitter`](#postsocialmediatopicdataingestionrulestwitter) - Create an twitter data ingestion rule.
- [`postSocialmediaTopics`](#postsocialmediatopics) - Create a social topic.
- [`postSocialmediaTwitterHistoricalTweets`](#postsocialmediatwitterhistoricaltweets) - Retrieves historical tweet count for search terms, optional countries list and the current limit and usage for the organization.
- [`putSocialmediaEscalationrule`](#putsocialmediaescalationrule) - Update the escalation rule.
- [`putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`](#putsocialmediatopicdataingestionrulesfacebookfacebookingestionruleid) - Update the Facebook data ingestion rule.
- [`putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`](#putsocialmediatopicdataingestionrulesinstagraminstagramingestionruleid) - Update the Instagram data ingestion rule.
- [`putSocialmediaTopicDataingestionrulesOpenOpenId`](#putsocialmediatopicdataingestionrulesopenopenid) - Update the open data ingestion rule.
- [`putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`](#putsocialmediatopicdataingestionrulestwittertwitteringestionruleid) - Update the X (formally Twitter) data ingestion rule.

### `deleteSocialmediaEscalationrule`

Delete an escalation rule.

#### Endpoint

`DELETE /api/v2/socialmedia/escalationrules/{escalationRuleId}`

#### Parameters

- `escalationRuleId` - **(string, required)** escalationRuleId

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Facebook data ingestion rule deleted. |
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

### `deleteSocialmediaTopic`

Delete a social topic.

#### Endpoint

`DELETE /api/v2/socialmedia/topics/{topicId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.hardDelete` - **(boolean, optional)** Determines whether a Social topic should be soft-deleted or hard-deleted (permanently removed). Set to false (soft-delete) by default.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Social topic deleted. |
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

### `deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`

Delete a Facebook data ingestion rule.

#### Endpoint

`DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.hardDelete` - **(boolean, optional)** Determines whether a Facebook data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Facebook data ingestion rule deleted. |
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

### `deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`

Delete a Instagram data ingestion rule.

#### Endpoint

`DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.hardDelete` - **(boolean, optional)** Determines whether a Instagram data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Instagram data ingestion rule deleted. |
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

### `deleteSocialmediaTopicDataingestionrulesOpenOpenId`

Delete a open data ingestion rule.

#### Endpoint

`DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.hardDelete` - **(boolean, optional)** Determines whether a open data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | Open data ingestion rule deleted. |
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

### `deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`

Delete a X (formally Twitter) data ingestion rule.

#### Endpoint

`DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.hardDelete` - **(boolean, optional)** Determines whether a X (formally Twitter) data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `204` |  | X (formally Twitter) data ingestion rule deleted. |
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

### `getSocialmediaAnalyticsAggregatesJob`

Get status for async query for social media aggregates

#### Endpoint

`GET /api/v2/socialmedia/analytics/aggregates/jobs/{jobId}`

#### Parameters

- `jobId` - **(string, required)** jobId

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [AsyncQueryStatus](../definitions/asyncquerystatus-definition.md) | successful operation |
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

### `getSocialmediaAnalyticsAggregatesJobResults`

Fetch a page of results for an async social media query

#### Endpoint

`GET /api/v2/socialmedia/analytics/aggregates/jobs/{jobId}/results`

#### Parameters

- `jobId` - **(string, required)** jobId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.cursor` - **(string, optional)** Cursor token to retrieve next page

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialMediaAsyncAggregateQueryResponse](../definitions/socialmediaasyncaggregatequeryresponse-definition.md) | successful operation |
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

### `getSocialmediaAnalyticsMessagesJob`

Get status for async query for social media messages job

#### Endpoint

`GET /api/v2/socialmedia/analytics/messages/jobs/{jobId}`

#### Parameters

- `jobId` - **(string, required)** jobId

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [AsyncQueryStatus](../definitions/asyncquerystatus-definition.md) | successful operation |
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

### `getSocialmediaAnalyticsMessagesJobResults`

Fetch a page of results for an async social media messages query

#### Endpoint

`GET /api/v2/socialmedia/analytics/messages/jobs/{jobId}/results`

#### Parameters

- `jobId` - **(string, required)** jobId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.cursor` - **(string, optional)** Cursor token to retrieve next page

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialMediaAsyncDetailQueryResponse](../definitions/socialmediaasyncdetailqueryresponse-definition.md) | successful operation |
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

### `getSocialmediaEscalationrule`

Get a single escalation rule.

#### Endpoint

`GET /api/v2/socialmedia/escalationrules/{escalationRuleId}`

#### Parameters

- `escalationRuleId` - **(string, required)** escalationRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.expand` - **(string, optional)** which fields, if any, to expand

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [EscalationRuleResponse](../definitions/escalationruleresponse-definition.md) | Successful operation. |
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

### `getSocialmediaEscalationrules`

Retrieve all escalation rules for a division.

#### Endpoint

`GET /api/v2/socialmedia/escalationrules`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.divisionId` - **(string, required)** One division ID

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialEscalationResponseEntityListing](../definitions/socialescalationresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopic`

Get a single social topic.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialTopicResponse](../definitions/socialtopicresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrules`

Retrieve all social topic data ingestion rules with pagination.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules`

#### Parameters

- `topicId` - **(string, required)** topicId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [DataIngestionRuleResponseEntityListing](../definitions/dataingestionruleresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`

Get a single Facebook data ingestion rule.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FacebookDataIngestionRuleResponse](../definitions/facebookdataingestionruleresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion`

Get a single Facebook data ingestion rule version.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions/{dataIngestionRuleVersion}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `dataIngestionRuleVersion` - **(string, required)** version
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted item in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FacebookDataIngestionRuleVersionResponse](../definitions/facebookdataingestionruleversionresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions`

Get the Facebook data ingestion rule versions.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [FacebookDataIngestionRuleVersionResponseEntityListing](../definitions/facebookdataingestionruleversionresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`

Get a single Instagram data ingestion rule.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InstagramDataIngestionRuleResponse](../definitions/instagramdataingestionruleresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion`

Get a single Instagram data ingestion rule version.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}/versions/{dataIngestionRuleVersion}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `dataIngestionRuleVersion` - **(string, required)** version
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted item in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InstagramDataIngestionRuleVersionResponse](../definitions/instagramdataingestionruleversionresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions`

Get the Instagram data ingestion rule versions.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}/versions`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [InstagramDataIngestionRuleVersionResponseEntityListing](../definitions/instagramdataingestionruleversionresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesOpenOpenId`

Get a single open data ingestion rule.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [OpenDataIngestionRuleResponse](../definitions/opendataingestionruleresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesOpenOpenIdVersion`

Get a single Open data ingestion rule version.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions/{dataIngestionRuleVersion}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `dataIngestionRuleVersion` - **(string, required)** version
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted item in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [OpenDataIngestionRuleVersionResponse](../definitions/opendataingestionruleversionresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesOpenOpenIdVersions`

Get the Open data ingestion rule versions.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [OpenDataIngestionRuleVersionResponseEntityListing](../definitions/opendataingestionruleversionresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`

Get a single X (formally Twitter) data ingestion rule.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TwitterDataIngestionRuleResponse](../definitions/twitterdataingestionruleresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion`

Get a single X (formally Twitter) data ingestion rule version.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions/{dataIngestionRuleVersion}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `dataIngestionRuleVersion` - **(string, required)** version
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted item in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TwitterDataIngestionRuleVersionResponse](../definitions/twitterdataingestionruleversionresponse-definition.md) | Successful operation. |
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

### `getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions`

Get the Open data ingestion rule versions.

#### Endpoint

`GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TwitterDataIngestionRuleVersionResponseEntityListing](../definitions/twitterdataingestionruleversionresponseentitylisting-definition.md) | Successful operation. |
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

### `getSocialmediaTopics`

Retrieve all social topics.

#### Endpoint

`GET /api/v2/socialmedia/topics`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.pageNumber` - **(number, optional)** Page number
- `query.pageSize` - **(number, optional)** Page size
- `query.divisionIds` - **(string[], optional)** One or more division IDs. If nothing is provided, the social topics associated withthe list of divisions that the user has access to will be returned.
- `query.includeDeleted` - **(boolean, optional)** Determines whether to include soft-deleted items in the result.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialTopicResponseEntityListing](../definitions/socialtopicresponseentitylisting-definition.md) | Successful operation. |
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

### `patchSocialmediaTopic`

Update a social topic.

#### Endpoint

`PATCH /api/v2/socialmedia/topics/{topicId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `body` - **([SocialTopicPatchRequest](../definitions/socialtopicpatchrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialTopicResponse](../definitions/socialtopicresponse-definition.md) | Successful operation. |
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

### `patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`

Update the status of a Facebook data ingestion rule.

#### Endpoint

`PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `body` - **([DataIngestionRuleStatusPatchRequest](../definitions/dataingestionrulestatuspatchrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [FacebookDataIngestionRuleResponse](../definitions/facebookdataingestionruleresponse-definition.md) | Request accepted - status will be updated momentarily. |
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

### `patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`

Update the status of a Instagram data ingestion rule.

#### Endpoint

`PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `body` - **([DataIngestionRuleStatusPatchRequest](../definitions/dataingestionrulestatuspatchrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [InstagramDataIngestionRuleResponse](../definitions/instagramdataingestionruleresponse-definition.md) | Request accepted - status will be updated momentarily. |
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

### `patchSocialmediaTopicDataingestionrulesOpenOpenId`

Update the status of a open data ingestion rule.

#### Endpoint

`PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `body` - **([DataIngestionRuleStatusPatchRequest](../definitions/dataingestionrulestatuspatchrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [OpenDataIngestionRuleResponse](../definitions/opendataingestionruleresponse-definition.md) | Request accepted - status will be updated momentarily. |
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

### `patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`

Update the status of a X (formally Twitter) data ingestion rule.

#### Endpoint

`PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `body` - **([DataIngestionRuleStatusPatchRequest](../definitions/dataingestionrulestatuspatchrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [TwitterDataIngestionRuleResponse](../definitions/twitterdataingestionruleresponse-definition.md) | Request accepted - status will be updated momentarily. |
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

### `postSocialmediaAnalyticsAggregatesJobs`

Query for social media aggregates asynchronously

#### Endpoint

`POST /api/v2/socialmedia/analytics/aggregates/jobs`

#### Parameters

- `body` - **([SocialMediaAsyncAggregationQuery](../definitions/socialmediaasyncaggregationquery-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [AsyncQueryResponse](../definitions/asyncqueryresponse-definition.md) | Accepted - Running query asynchronously |
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

### `postSocialmediaAnalyticsMessagesJobs`

Query for social media messages asynchronously

#### Endpoint

`POST /api/v2/socialmedia/analytics/messages/jobs`

#### Parameters

- `body` - **([SocialMediaAsyncDetailQuery](../definitions/socialmediaasyncdetailquery-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [AsyncQueryResponse](../definitions/asyncqueryresponse-definition.md) | Accepted - Running query asynchronously |
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

### `postSocialmediaEscalationrules`

Create an escalation rule.

#### Endpoint

`POST /api/v2/socialmedia/escalationrules`

#### Parameters

- `body` - **([EscalationRuleRequest](../definitions/escalationrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [EscalationRuleResponse](../definitions/escalationruleresponse-definition.md) | Escalation rule created. |
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

### `postSocialmediaEscalationsMessages`

Escalate message to a conversation manually

#### Endpoint

`POST /api/v2/socialmedia/escalations/messages`

#### Parameters

- `query` - **(object)** The query string parameters for the request. An empty object or `null` is allowed if all query string parameters are optional.
- `query.divisionId` - **(string, required)** One division ID
- `body` - **([ManualEscalationRequest](../definitions/manualescalationrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [ManualEscalationResponse](../definitions/manualescalationresponse-definition.md) | Message successfully escalated |
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

### `postSocialmediaTopicDataingestionrulesFacebook`

Create an Facebook data ingestion rule.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook`

#### Parameters

- `topicId` - **(string, required)** topicId
- `body` - **([FacebookDataIngestionRuleRequest](../definitions/facebookdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [FacebookDataIngestionRuleResponse](../definitions/facebookdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be created momentarily. |
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

### `postSocialmediaTopicDataingestionrulesInstagram`

Create an Instagram data ingestion rule.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram`

#### Parameters

- `topicId` - **(string, required)** topicId
- `body` - **([InstagramDataIngestionRuleRequest](../definitions/instagramdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [InstagramDataIngestionRuleResponse](../definitions/instagramdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be created momentarily. |
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

### `postSocialmediaTopicDataingestionrulesOpen`

Create an open data ingestion rule.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open`

#### Parameters

- `topicId` - **(string, required)** topicId
- `body` - **([OpenDataIngestionRuleRequest](../definitions/opendataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [OpenDataIngestionRuleResponse](../definitions/opendataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be created momentarily. |
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

### `postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk`

Ingest a list of Open Social Messages

#### Description

Ingest a list of open social messages to an ingestion rule on a topic. This endpoint will ingest and enrich these messages.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/messages/bulk`

#### Parameters

- `topicId` - **(string, required)** Topic ID
- `ruleId` - **(string, required)** Data Ingestion Rule ID
- `body` - **([OpenSocialMediaNormalizedMessage[]](../definitions/opensocialmedianormalizedmessage-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [OpenSocialNormalizedMessageEntityListing](../definitions/opensocialnormalizedmessageentitylisting-definition.md) | Accepted |
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

### `postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk`

Ingest a list of Open Social Reactions

#### Description

Ingest a list of open social reactions to an ingestion rule on a topic. This endpoint will ingest these reactions.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/reactions/bulk`

#### Parameters

- `topicId` - **(string, required)** Topic ID
- `ruleId` - **(string, required)** Data Ingestion Rule ID
- `body` - **([OpenSocialMediaReactionsRequest](../definitions/opensocialmediareactionsrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [OpenSocialReactionsNormalizedEventEntityListing](../definitions/opensocialreactionsnormalizedevententitylisting-definition.md) | Accepted |
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

### `postSocialmediaTopicDataingestionrulesTwitter`

Create an twitter data ingestion rule.

#### Endpoint

`POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter`

#### Parameters

- `topicId` - **(string, required)** topicId
- `body` - **([TwitterDataIngestionRuleRequest](../definitions/twitterdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [TwitterDataIngestionRuleResponse](../definitions/twitterdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be created momentarily. |
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

### `postSocialmediaTopics`

Create a social topic.

#### Endpoint

`POST /api/v2/socialmedia/topics`

#### Parameters

- `body` - **([SocialTopicRequest](../definitions/socialtopicrequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [SocialTopicResponse](../definitions/socialtopicresponse-definition.md) | Social topic created. |
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

### `postSocialmediaTwitterHistoricalTweets`

Retrieves historical tweet count for search terms, optional countries list and the current limit and usage for the organization.

#### Endpoint

`POST /api/v2/socialmedia/twitter/historical/tweets`

#### Parameters

- `body` - **([TwitterDataHistoricalTweetRequest](../definitions/twitterdatahistoricaltweetrequest-definition.md), required)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `200` | [TwitterDataHistoricalTweetResponse](../definitions/twitterdatahistoricaltweetresponse-definition.md) | Historical Tweet Count Retrieved. |
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

### `putSocialmediaEscalationrule`

Update the escalation rule.

#### Endpoint

`PUT /api/v2/socialmedia/escalationrules/{escalationRuleId}`

#### Parameters

- `escalationRuleId` - **(string, required)** escalationRuleId
- `body` - **([EscalationRuleRequest](../definitions/escalationrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [EscalationRuleResponse](../definitions/escalationruleresponse-definition.md) | Request accepted - the data ingestion rule will be updated momentarily. |
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

### `putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId`

Update the Facebook data ingestion rule.

#### Endpoint

`PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `facebookIngestionRuleId` - **(string, required)** facebookIngestionRuleId
- `body` - **([FacebookDataIngestionRuleRequest](../definitions/facebookdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [FacebookDataIngestionRuleResponse](../definitions/facebookdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be updated momentarily. |
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

### `putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId`

Update the Instagram data ingestion rule.

#### Endpoint

`PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `instagramIngestionRuleId` - **(string, required)** instagramIngestionRuleId
- `body` - **([InstagramDataIngestionRuleRequest](../definitions/instagramdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [InstagramDataIngestionRuleResponse](../definitions/instagramdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be updated momentarily. |
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

### `putSocialmediaTopicDataingestionrulesOpenOpenId`

Update the open data ingestion rule.

#### Endpoint

`PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `openId` - **(string, required)** openId
- `body` - **([OpenDataIngestionRuleRequest](../definitions/opendataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [OpenDataIngestionRuleResponse](../definitions/opendataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be updated momentarily. |
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

### `putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId`

Update the X (formally Twitter) data ingestion rule.

#### Endpoint

`PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}`

#### Parameters

- `topicId` - **(string, required)** topicId
- `twitterIngestionRuleId` - **(string, required)** twitterIngestionRuleId
- `body` - **([TwitterDataIngestionRuleRequest](../definitions/twitterdataingestionrulerequest-definition.md), optional)** - The body of the request. An empty object or `null` is allowed if the body is optional.

#### Returns

A promise that settles to an [`HTTPResponse`](https://github.com/jfabello/http-client) object with the response of the call to the API endpoint. The promise fulfills if the HTTP status code is between 200 and 299. The promise rejects for any other HTTP status code.

| HTTP Status Code | Returned type | Description |
|---|---|---|
| `202` | [TwitterDataIngestionRuleResponse](../definitions/twitterdataingestionruleresponse-definition.md) | Request accepted - the data ingestion rule will be updated momentarily. |
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

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-11-26T23:43:17.682Z*