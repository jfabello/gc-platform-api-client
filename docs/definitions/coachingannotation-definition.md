# `CoachingAnnotation` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| createdBy | [`UserReference`](userreference-definition.md) | No | The user who created the annotation. |
| dateCreated | `string` | No | The date/time the annotation was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedBy | [`UserReference`](userreference-definition.md) | No | The last user to modify the annotation. |
| dateModified | `string` | No | The date/time the annotation was last modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| text | `string` | Yes | The text of the annotation. |
| isDeleted | `boolean` | No | Flag indicating whether the annotation is deleted. |
| accessType | `string` | No | Determines the permissions required to view this item. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.075Z*