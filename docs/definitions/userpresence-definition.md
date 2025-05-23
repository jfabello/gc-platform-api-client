# `UserPresence` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| source | `string` | No | Deprecated - The sourceID field should be used as a replacement. |
| sourceId | `string` | No | Represents the ID of a registered source |
| primary | `boolean` | No | A boolean used to tell whether or not to set this presence source as the primary on a PATCH |
| presenceDefinition | [`PresenceDefinition`](presencedefinition-definition.md) | No |  |
| message | `string` | No |  |
| modifiedDate | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.519Z*