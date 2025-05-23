# `CreateOutboundMessagingConversationRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| queueId | `string` | Yes | The ID of the queue to be associated with the message. This will determine the fromAddress of the message, unless useUserFromAddress is true and the queue is configured to use the agent's Direct Routing address as the fromAddress. |
| toAddress | `string` | Yes | The messaging address of the recipient of the message. For an SMS messenger type, the phone number address must be in E.164 format. E.g. +13175555555 or +34234234234.  For open messenger type, any string within the outbound.open.messaging.to.address.characters.max limit can be used. For whatsapp messenger type, use a Whatsapp ID of a phone number. E.g for a E.164 formatted phone number `+13175555555`, a Whatsapp ID would be 13175555555 |
| toAddressMessengerType | `string` | Yes | The messaging address messenger type. |
| useExistingConversation | `boolean` | No | An override to use an existing conversation. 
If set to true, an existing conversation will be used if there is one within the conversation window. 
If set to false, create request fails if there is a conversation within the conversation window. |
| externalContactId | `string` | No | The external contact with which the message will be associated. |
| useUserFromAddress | `boolean` | No | An override to attempt to use the user's configured direct routing address as the fromAddress. 
If set to true, users configured address with 'directrouting' integration will be used as fromAddress. 
If set to false or not set, the queueId will be used for determining fromAddress. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.588Z*