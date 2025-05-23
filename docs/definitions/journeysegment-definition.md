# `JourneySegment` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | The ID of the segment. |
| isActive | `boolean` | Yes | Whether or not the segment is active. |
| displayName | `string` | Yes | The display name of the segment. |
| version | `number` | Yes | The version of the segment. |
| description | `string` | No | A description of the segment. |
| color | `string` | Yes | The hexadecimal color value of the segment. |
| scope | `string` | Yes | The target entity that a segment applies to. |
| shouldDisplayToAgent | `boolean` | Yes | Whether or not the segment should be displayed to agent/supervisor users. |
| context | [`Context`](context-definition.md) | Yes | The context of the segment. |
| journey | [`Journey`](journey-definition.md) | Yes | The pattern of rules defining the segment. |
| externalSegment | [`ExternalSegment`](externalsegment-definition.md) | No | Details of an entity corresponding to this segment in an external system. |
| assignmentExpirationDays | `number` | No | Time, in days, from when the segment is assigned until it is automatically unassigned. |
| selfUri | `string` | No | The URI for this object |
| createdDate | `string` | Yes | Timestamp indicating when the segment was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedDate | `string` | Yes | Timestamp indicating when the segment was last updated. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.740Z*