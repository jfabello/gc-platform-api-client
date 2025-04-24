# `CallbackMediaParticipant` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The unique participant ID. |
| name | `string` | No | The display friendly name of the participant. |
| address | `string` | No | The participant address. |
| startTime | `string` | No | The time when this participant first joined the conversation. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| connectedTime | `string` | No | The time when this participant went connected for this media (eg: video connected time). Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endTime | `string` | No | The time when this participant went disconnected for this media (eg: video disconnected time). Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| startHoldTime | `string` | No | The time when this participant's hold started. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| purpose | `string` | No | The participant's purpose.  Values can be: 'agent', 'user', 'customer', 'external', 'acd', 'ivr |
| state | `string` | No | The participant's state.  Values can be: 'alerting', 'connected', 'disconnected', 'dialing', 'contacting |
| direction | `string` | No | The participant's direction.  Values can be: 'inbound' or 'outbound' |
| disconnectType | `string` | No | The reason the participant was disconnected from the conversation. |
| held | `boolean` | No | Value is true when the participant is on hold. |
| wrapupRequired | `boolean` | No | Value is true when the participant requires wrap-up. |
| wrapupPrompt | `string` | No | The wrap-up prompt indicating the type of wrap-up to be performed. |
| mediaRoles | `string[]` | No | List of roles this participant's media has had on the conversation, ie monitor, coach, etc |
| user | [`DomainEntityRef`](domainentityref-definition.md) | No | The PureCloud user for this participant. |
| queue | [`DomainEntityRef`](domainentityref-definition.md) | No | The PureCloud queue for this participant. |
| team | [`DomainEntityRef`](domainentityref-definition.md) | No | The PureCloud team for this participant. |
| attributes | `object` | No | A list of ad-hoc attributes for the participant. |
| errorInfo | [`ErrorInfo`](errorinfo-definition.md) | No | If the conversation ends in error, contains additional error details. |
| script | [`DomainEntityRef`](domainentityref-definition.md) | No | The Engage script that should be used by this participant. |
| wrapupTimeoutMs | `number` | No | The amount of time the participant has to complete wrap-up. |
| wrapupSkipped | `boolean` | No | Value is true when the participant has skipped wrap-up. |
| alertingTimeoutMs | `number` | No | Specifies how long the agent has to answer an interaction before being marked as not responding. |
| provider | `string` | No | The source provider for the communication. |
| externalContact | [`DomainEntityRef`](domainentityref-definition.md) | No | If this participant represents an external contact, then this will be the reference for the external contact. |
| externalContactInitialDivisionId | `string` | No | If this participant represents an external contact, then this will be the initial division for the external contact. This value will not be updated if the external contact is reassigned. |
| externalOrganization | [`DomainEntityRef`](domainentityref-definition.md) | No | If this participant represents an external org, then this will be the reference for the external org. |
| wrapup | [`Wrapup`](wrapup-definition.md) | No | Wrapup for this participant, if it has been applied. |
| peer | `string` | No | The peer communication corresponding to a matching leg for this communication. |
| flaggedReason | `string` | No | The reason specifying why participant flagged the conversation. |
| journeyContext | [`JourneyContext`](journeycontext-definition.md) | No | Journey System data/context that is applicable to this communication.  When used for historical purposes, the context should be immutable.  When null, there is no applicable Journey System context. |
| conversationRoutingData | [`ConversationRoutingData`](conversationroutingdata-definition.md) | No | Information on how a communication should be routed to an agent. |
| startAcwTime | `string` | No | The timestamp when this participant started after-call work. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endAcwTime | `string` | No | The timestamp when this participant ended after-call work. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| parkTime | `string` | No | The time when this participant's communication was last parked.  Does not reset on resume. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| resumeTime | `string` | No | The time when this participant's communications will resume. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| outboundPreview | [`DialerPreview`](dialerpreview-definition.md) | No | The outbound preview associated with this callback. |
| voicemail | [`Voicemail`](voicemail-definition.md) | No | The voicemail associated with this callback. |
| callbackNumbers | `string[]` | No | The list of phone number to use for this callback. |
| callbackUserName | `string` | No | The name of the callback target. |
| externalCampaign | `boolean` | No | True if the call for the callback uses external dialing. |
| skipEnabled | `boolean` | No | If true, the callback can be skipped. |
| timeoutSeconds | `number` | No | Duration in seconds before the callback will be auto-dialed. |
| automatedCallbackConfigId | `string` | No | The id of the config for automatically placing the callback (and handling the disposition). If absent, the callback will not be placed automatically but routed to an agent as per normal. |
| callbackScheduledTime | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.578Z*