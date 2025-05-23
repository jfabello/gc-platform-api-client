# `MessagingSettingPatchRequest` Definition

Messaging setting for messaging platform integrations

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No | The messaging Setting profile name |
| content | [`ContentSetting`](contentsetting-definition.md) | No | Settings relating to message contents |
| event | [`EventSetting`](eventsetting-definition.md) | No | Settings relating to events which may occur |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.595Z*