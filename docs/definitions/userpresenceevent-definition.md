# `UserPresenceEvent` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| eventId | `string` | Yes | A unique (V4 UUID) eventId for this event |
| eventDateTime | `string` | Yes | A Date Time representing the time this event occurred. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| userId | `string` | Yes | The User ID of the user associated with this UserPresence |
| sourceId | `string` | Yes | The id (V4 UUID) of the presence source being updated |
| presenceDefinitionId | `string` | No | The id (UUID) of the presence definition that the user presence is associated with |
| message | `string` | No | The message associated with the presence |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.455Z*