# `Recognition` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| recipient | [`UserReference`](userreference-definition.md) | No | The recipient of the recognition |
| createdBy | [`UserReference`](userreference-definition.md) | No | The creator of the recognition |
| dateCreated | `string` | No | The creation date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| type | `string` | No | The type of recognition |
| title | `string` | No | The recognition title |
| note | `string` | No | The recognition note |
| contextType | `string` | No | The context type (optional) |
| contextId | `string` | No | The context id (optional) |
| dateDisplayed | `string` | No | The displayed date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateAcknowledged | `string` | No | The acknowledged date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.094Z*