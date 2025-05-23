# `CategoryResponse` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The name of the category. |
| description | `string` | No |  |
| externalId | `string` | No |  |
| dateCreated | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| parentCategory | [`CategoryReference`](categoryreference-definition.md) | No | The reference to category to which this category belongs to. |
| documentCount | `number` | No | Number of documents assigned to this category. |
| knowledgeBase | [`KnowledgeBaseReference`](knowledgebasereference-definition.md) | No | The reference to knowledge base to which the category belongs to. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.746Z*