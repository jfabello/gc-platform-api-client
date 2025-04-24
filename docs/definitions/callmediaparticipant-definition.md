# `CallMediaParticipant` Definition

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
| muted | `boolean` | No | Value is true when the call is muted. |
| confined | `boolean` | No | Value is true when the call is confined. |
| recording | `boolean` | No | Value is true when the call is being recorded. |
| recordingState | `string` | No | The state of the call recording. |
| group | [`DomainEntityRef`](domainentityref-definition.md) | No | The group involved in the group ring call. |
| ani | `string` | No | The call ANI. |
| dnis | `string` | No | The call DNIS. |
| documentId | `string` | No | The ID of the Content Management document if the call is a fax. |
| faxStatus | [`FaxStatus`](faxstatus-definition.md) | No | Extra fax information if the call is a fax. |
| monitoredParticipantId | `string` | No | The ID of the participant being monitored when performing a call monitor. |
| coachedParticipantId | `string` | No | The ID of the participant being coached when performing a call coach. |
| bargedParticipantId | `string` | No | If this participant barged in a participant's call, then this will be the id of the targeted participant. |
| consultParticipantId | `string` | No | The ID of the consult transfer target participant when performing a consult transfer. |
| uuiData | `string` | No | User-to-User information which maps to a SIP header field defined in RFC7433. UUI data is used in the Public Switched Telephone Network (PSTN) for use cases described in RFC6567. |
| bargedTime | `string` | No | The timestamp when this participant was connected to the barge conference in the provider clock. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| securePause | `boolean` | No | True when the recording of this call is in secure pause status. |
| disposition | [`Disposition`](disposition-definition.md) | No | Call resolution data for Dialer bulk make calls commands. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.574Z*