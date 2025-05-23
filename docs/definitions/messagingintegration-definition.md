# `MessagingIntegration` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | A unique Integration Id |
| name | `string` | Yes | The name of the Integration |
| supportedContent | [`SupportedContentReference`](supportedcontentreference-definition.md) | No | Defines the SupportedContent profile configured for an integration |
| messagingSetting | [`MessagingSettingReference`](messagingsettingreference-definition.md) | No |  |
| status | `string` | No | The status of the Integration |
| messengerType | `string` | Yes | The type of Messaging Integration |
| recipient | [`DomainEntityRef`](domainentityref-definition.md) | No | The recipient associated to the Integration. This recipient is used to associate a flow to an integration |
| dateCreated | `string` | No | Date this Integration was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Date this Integration was modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| createdBy | [`DomainEntityRef`](domainentityref-definition.md) | No | User reference that created this Integration |
| modifiedBy | [`DomainEntityRef`](domainentityref-definition.md) | No | User reference that last modified this Integration |
| version | `number` | Yes | Version number required for updates. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.591Z*