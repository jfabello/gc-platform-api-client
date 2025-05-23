# `OrganizationPresence` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| languageLabels | `object` | Yes | The label used for the system presence in each specified language |
| systemPresence | `string` | No |  |
| deactivated | `boolean` | No |  |
| primary | `boolean` | No |  |
| createdBy | [`User`](user-definition.md) | No |  |
| createdDate | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedBy | [`User`](user-definition.md) | No |  |
| modifiedDate | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.807Z*