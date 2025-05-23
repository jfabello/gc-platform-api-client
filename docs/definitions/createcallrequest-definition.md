# `CreateCallRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| phoneNumber | `string` | No | The phone number to dial. |
| callerId | `string` | No | The caller id phone number for this outbound call. |
| callerIdName | `string` | No | The caller id name for this outbound call. |
| callFromQueueId | `string` | No | The queue ID to call on behalf of. |
| callQueueId | `string` | No | The queue ID to call. |
| callUserId | `string` | No | The user ID to call. |
| priority | `number` | No | The priority to assign to this call (if calling a queue). |
| attributes | `object` | No | The list of attributes to associate with the customer participant. |
| languageId | `string` | No | The language skill ID to use for routing this call (if calling a queue). |
| routingSkillsIds | `string[]` | No | The skill ID's to use for routing this call (if calling a queue). |
| conversationIds | `string[]` | No | The list of existing call conversations to merge into a new ad-hoc conference. |
| participants | [`Destination[]`](destination-definition.md) | No | The list of participants to call to create a new ad-hoc conference. |
| uuiData | `string` | No | User to User Information (UUI) data managed by SIP session application. |
| externalContactId | `string` | No | The external contact with which to associate the call. |
| label | `string` | No | An optional label that categorizes the conversation.  Max-utilization settings can be configured at a per-label level |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.575Z*