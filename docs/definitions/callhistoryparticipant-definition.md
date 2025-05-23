# `CallHistoryParticipant` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The unique participant ID. |
| name | `string` | No | The display friendly name of the participant. |
| address | `string` | No | The participant address. |
| startTime | `string` | No | The time when this participant first joined the conversation. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endTime | `string` | No | The time when this participant went disconnected for this media (eg: video disconnected time). Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| purpose | `string` | No | The participant's purpose.  Values can be: 'agent', 'user', 'customer', 'external', 'acd', 'ivr |
| direction | `string` | No | The participant's direction.  Values can be: 'inbound' or 'outbound' |
| ani | `string` | No | The call ANI. |
| dnis | `string` | No | The call DNIS. |
| user | [`User`](user-definition.md) | No | The PureCloud user for this participant. |
| queue | [`Queue`](queue-definition.md) | No | The PureCloud queue for this participant. |
| group | [`Group`](group-definition.md) | No | The group involved in the group ring call. |
| disconnectType | `string` | No | The reason the participant was disconnected from the conversation. |
| externalContact | [`ExternalContact`](externalcontact-definition.md) | No | The PureCloud external contact |
| externalOrganization | [`ExternalOrganization`](externalorganization-definition.md) | No | The PureCloud external organization |
| didInteract | `boolean` | No | Indicates whether the contact ever connected |
| sipResponseCodes | `number[]` | No | Indicates SIP Response codes associated with the participant |
| flaggedReason | `string` | No | The reason specifying why participant flagged the conversation. |
| outboundCampaign | [`Campaign`](campaign-definition.md) | No | The outbound campaign associated with the participant |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.576Z*