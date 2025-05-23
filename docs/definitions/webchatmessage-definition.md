# `WebChatMessage` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| conversation | [`WebChatConversation`](webchatconversation-definition.md) | Yes | The identifier of the conversation |
| sender | [`WebChatMemberInfo`](webchatmemberinfo-definition.md) | Yes | The member who sent the message |
| body | `string` | Yes | The message body. |
| bodyType | `string` | Yes | The purpose of the message within the conversation, such as a standard text entry versus a greeting. |
| timestamp | `string` | Yes | The timestamp of the message, in ISO-8601 format |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.579Z*