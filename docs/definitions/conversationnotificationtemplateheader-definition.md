# `ConversationNotificationTemplateHeader` Definition

Template header object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | `string` | Yes | Template header type. |
| text | `string` | No | Header text. For WhatsApp, ignored. |
| media | [`ConversationContentAttachment`](conversationcontentattachment-definition.md) | No | Media template header image. |
| parameters | [`ConversationNotificationTemplateParameter[]`](conversationnotificationtemplateparameter-definition.md) | No | Template parameters for placeholders in template. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.587Z*