# `ConversationContentNotificationTemplate` Definition

Template notification object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The identifier of the message template in 'your-namespace@your-template-id/name' format. For External vendor (e.g WhatsApp), 'your-namespace@your-template-name'. For GenesysCloud canned response message template use 'cannedresponse' as your-namespace and use response ID as your-template-id (e.g. response ID=1234 then 'cannedresponse@1234') |
| language | `string` | No | Template language. |
| header | [`ConversationNotificationTemplateHeader`](conversationnotificationtemplateheader-definition.md) | No | The template header. |
| body | [`ConversationNotificationTemplateBody`](conversationnotificationtemplatebody-definition.md) | Yes | The template body. |
| buttons | [`ConversationNotificationTemplateButton[]`](conversationnotificationtemplatebutton-definition.md) | No | Template buttons |
| footer | [`ConversationNotificationTemplateFooter`](conversationnotificationtemplatefooter-definition.md) | No | The template footer. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.584Z*