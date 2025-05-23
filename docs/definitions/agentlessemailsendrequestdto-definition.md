# `AgentlessEmailSendRequestDto` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| senderType | `string` | Yes | The direction of the message. |
| conversationId | `string` | No | The identifier of the conversation. This must be an email interaction. |
| fromAddress | [`EmailAddress`](emailaddress-definition.md) | Yes | The sender of the message. |
| toAddresses | [`EmailAddress[]`](emailaddress-definition.md) | Yes | The recipient of the message. We currently support one recipient only. |
| replyToAddress | [`EmailAddress`](emailaddress-definition.md) | No | The address to use for reply. |
| subject | `string` | No | The subject of the message. |
| textBody | `string` | No | The Content of the message, in plain text. |
| htmlBody | `string` | No | The Content of the message, in HTML. Links, images and styles are allowed |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.583Z*