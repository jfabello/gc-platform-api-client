# `FacebookIntegration` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | A unique Integration Id. |
| name | `string` | Yes | The name of the Facebook Integration |
| supportedContent | [`SupportedContentReference`](supportedcontentreference-definition.md) | No | Defines the SupportedContent profile configured for an integration |
| messagingSetting | [`MessagingSettingReference`](messagingsettingreference-definition.md) | No |  |
| appId | `string` | Yes | The App Id from Facebook messenger |
| pageId | `string` | No | The Page Id from Facebook messenger |
| pageName | `string` | No | The name of the Facebook page |
| pageProfileImageUrl | `string` | No | The url of the profile image of the Facebook page |
| status | `string` | No | The status of the Facebook Integration |
| recipient | [`DomainEntityRef`](domainentityref-definition.md) | No | The recipient reference associated to the Facebook Integration. This recipient is used to associate a flow to an integration |
| dateCreated | `string` | No | Date this Integration was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Date this Integration was modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| createdBy | [`DomainEntityRef`](domainentityref-definition.md) | No | User reference that created this Integration |
| modifiedBy | [`DomainEntityRef`](domainentityref-definition.md) | No | User reference that last modified this Integration |
| version | `number` | Yes | Version number required for updates. |
| createStatus | `string` | No | Status of asynchronous create operation |
| createError | [`ErrorBody`](errorbody-definition.md) | No | Error information returned, if createStatus is set to Error |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.593Z*