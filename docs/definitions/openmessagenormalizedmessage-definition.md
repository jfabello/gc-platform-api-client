# `OpenMessageNormalizedMessage` Definition

Open Messaging rich media message structure

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | Unique ID of the message generated by Messaging Platform. |
| channel | [`OpenMessagingChannel`](openmessagingchannel-definition.md) | Yes | Channel-specific information that describes the message and the message channel/provider. |
| type | `string` | Yes | Message type. |
| text | `string` | No | Message text. |
| content | [`OpenMessageContent[]`](openmessagecontent-definition.md) | No | List of content elements. |
| metadata | `object` | No | Additional metadata about this message. |
| conversationId | `string` | No | The conversationId context for the message |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.590Z*