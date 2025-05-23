# `Celebration` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| recipient | [`UserReference`](userreference-definition.md) | No | The Recipient of the celebration |
| createdBy | [`UserReference`](userreference-definition.md) | No | The creator of the celebration |
| dateCreated | `string` | No | The date the celebration was created on. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| type | `string` | No | The Celebration Type |
| title | `string` | No | The Celebration title |
| note | `string` | No | The Celebration note |
| sourceEntity | [`SourceEntity`](sourceentity-definition.md) | No | The celebration's source entity |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.081Z*