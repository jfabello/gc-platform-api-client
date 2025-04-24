# `Participant` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | A globally unique identifier for this conversation. |
| startTime | `string` | No | The timestamp when this participant joined the conversation in the provider clock. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endTime | `string` | No | The timestamp when this participant disconnected from the conversation in the provider clock. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| connectedTime | `string` | No | The timestamp when this participant was connected to the conversation in the provider clock. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| name | `string` | No | A human readable name identifying the participant. |
| userUri | `string` | No | If this participant represents a user, then this will be an URI that can be used to fetch the user. |
| userId | `string` | No | If this participant represents a user, then this will be the globally unique identifier for the user. |
| externalContactId | `string` | No | If this participant represents an external contact, then this will be the globally unique identifier for the external contact. |
| externalContactInitialDivisionId | `string` | No | If this participant represents an external contact, then this will be the initial division for the external contact. This value will not be updated if the external contact is reassigned. |
| externalOrganizationId | `string` | No | If this participant represents an external org, then this will be the globally unique identifier for the external org. |
| queueId | `string` | No | If present, the queue id that the communication channel came in on. |
| groupId | `string` | No | If present, group of users the participant represents. |
| teamId | `string` | No | The team id that this participant is a member of when added to the conversation. |
| queueName | `string` | No | If present, the queue name that the communication channel came in on. |
| purpose | `string` | No | A well known string that specifies the purpose of this participant. |
| participantType | `string` | No | A well known string that specifies the type of this participant. |
| consultParticipantId | `string` | No | If this participant is part of a consult transfer, then this will be the participant id of the participant being transferred. |
| address | `string` | No | The address for the this participant. For a phone call this will be the ANI. |
| ani | `string` | No | The address for the this participant. For a phone call this will be the ANI. |
| aniName | `string` | No | The ani-based name for this participant. |
| dnis | `string` | No | The address for the this participant. For a phone call this will be the ANI. |
| locale | `string` | No | An ISO 639 language code specifying the locale for this participant |
| wrapupRequired | `boolean` | No | True iff this participant is required to enter wrapup for this conversation. |
| wrapupPrompt | `string` | No | This field controls how the UI prompts the agent for a wrapup. |
| wrapupTimeoutMs | `number` | No | Specifies how long a timed ACW session will last. |
| wrapupSkipped | `boolean` | No | The UI sets this field when the agent chooses to skip entering a wrapup for this participant. |
| wrapup | [`Wrapup`](wrapup-definition.md) | No | Call wrap up or disposition data. |
| mediaRoles | `string[]` | No | List of roles this participant's media has had on the conversation, ie monitor, coach, etc. |
| conversationRoutingData | [`ConversationRoutingData`](conversationroutingdata-definition.md) | No | Information on how a communication should be routed to an agent. |
| alertingTimeoutMs | `number` | No | Specifies how long the agent has to answer an interaction before being marked as not responding. |
| monitoredParticipantId | `string` | No | If this participant is a monitor, then this will be the id of the participant that is being monitored. |
| coachedParticipantId | `string` | No | If this participant is a coach, then this will be the id of the participant that is being coached. |
| attributes | `object` | No | Additional participant attributes |
| calls | [`Call[]`](call-definition.md) | No |  |
| callbacks | [`Callback[]`](callback-definition.md) | No |  |
| chats | [`ConversationChat[]`](conversationchat-definition.md) | No |  |
| cobrowsesessions | [`Cobrowsesession[]`](cobrowsesession-definition.md) | No |  |
| emails | [`Email[]`](email-definition.md) | No |  |
| messages | [`Message[]`](message-definition.md) | No |  |
| screenshares | [`Screenshare[]`](screenshare-definition.md) | No |  |
| socialExpressions | [`SocialExpression[]`](socialexpression-definition.md) | No |  |
| videos | [`Video[]`](video-definition.md) | No |  |
| evaluations | [`Evaluation[]`](evaluation-definition.md) | No |  |
| screenRecordingState | `string` | No | The current screen recording state for this participant. |
| flaggedReason | `string` | No | The reason specifying why participant flagged the conversation. |
| startAcwTime | `string` | No | The timestamp when this participant started after-call work. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endAcwTime | `string` | No | The timestamp when this participant ended after-call work. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| internalMessages | [`InternalMessage[]`](internalmessage-definition.md) | No |  |
| bargedParticipantId | `string` | No | If this participant barged in a participant's call, then this will be the id of the targeted participant. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.568Z*