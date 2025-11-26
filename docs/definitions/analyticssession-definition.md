# `AnalyticsSession` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| activeSkillIds | `string[]` | No | ID(s) of Skill(s) that are active on the conversation |
| acwSkipped | `boolean` | No | Marker for an agent that skipped after call work |
| addressFrom | `string` | No | The address that initiated an action |
| addressOther | `string` | No | The email address for the participant on the other side of the email conversation |
| addressSelf | `string` | No | The email address for the participant on this side of the email conversation |
| addressTo | `string` | No | The address receiving an action |
| agentAssistantId | `string` | No | Unique identifier of the active virtual agent assistant |
| agentBullseyeRing | `number` | No | Bullseye ring of the targeted agent |
| agentOwned | `boolean` | No | Flag indicating an agent-owned callback |
| ani | `string` | No | Automatic Number Identification (caller's number) |
| assignerId | `string` | No | ID of the user that manually assigned a conversation |
| authenticated | `boolean` | No | Flag that indicates that the identity of the customer has been asserted as verified by the provider. |
| bargedParticipantId | `string` | No | The participantId being barged in on (if someone (e.g. an agent) is being barged in on, this would correspond to one of the other participantIds present in the conversation) |
| bcc | `string[]` | No | Blind carbon copy email address(es) |
| callbackNumbers | `string[]` | No | Callback phone number(s) |
| callbackScheduledTime | `string` | No | Scheduled callback date/time. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| callbackUserName | `string` | No | The name of the user requesting a call back |
| cc | `string[]` | No | Carbon copy email address(es) |
| cleared | `boolean` | No | Flag that indicates that the conversation has been cleared by the customer |
| coachedParticipantId | `string` | No | The participantId being coached (if someone (e.g. an agent) is being coached, this would correspond to one of the other participantIds present in the conversation) |
| cobrowseRole | `string` | No | Describes side of the cobrowse (sharer or viewer) |
| cobrowseRoomId | `string` | No | A unique identifier for a Genesys Cloud cobrowse room |
| deliveryPushed | `boolean` | No | Flag that indicates that the push delivery mechanism was used |
| deliveryStatus | `string` | No | The email or SMS delivery status |
| deliveryStatusChangeDate | `string` | No | Date and time of the most recent delivery status change. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| destinationAddresses | `string[]` | No | Destination address(es) of transfers or consults |
| detectedSpeechEnd | `string` | No | Absolute time when the speech ended. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| detectedSpeechStart | `string` | No | Absolute time when the speech started. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| direction | `string` | No | The direction of the communication |
| dispositionAnalyzer | `string` | No | (Dialer) Analyzer (for example speech.person) |
| dispositionName | `string` | No | (Dialer) Result of the analysis (for example disposition.classification.callable.machine) |
| dnis | `string` | No | Dialed number identification service (number dialed by the calling party) |
| edgeId | `string` | No | Unique identifier of the edge device |
| eligibleAgentCounts | `number[]` | No | Number of eligible agents for each predictive routing attempt |
| engagementSource | `string` | No | Open Messaging engagement source type |
| extendedDeliveryStatus | `string` | No | Extended delivery status |
| flowInType | `string` | No | Type of flow in that occurred when entering ACD. |
| flowOutType | `string` | No | Type of flow out that occurred when emitting tFlowOut. |
| journeyActionId | `string` | No | Identifier of the journey action. |
| journeyActionMapId | `string` | No | Identifier of the journey action map that triggered the action. |
| journeyActionMapVersion | `number` | No | Version of the journey action map that triggered the action. |
| journeyCustomerId | `string` | No | Primary identifier of the journey customer in the source where the activities originate from. |
| journeyCustomerIdType | `string` | No | Type of primary identifier of the journey customer (e.g. cookie). |
| journeyCustomerSessionId | `string` | No | Unique identifier of the journey session. |
| journeyCustomerSessionIdType | `string` | No | Type or category of journey sessions (e.g. web, ticket, delivery, atm). |
| mediaBridgeId | `string` | No | Media bridge ID for the conference session consistent across all participants |
| mediaCount | `number` | No | Count of any media (images, files, etc) included in this session |
| mediaType | `string` | No | The session media type |
| messageType | `string` | No | Message type for messaging services. E.g.: sms, facebook, twitter, line |
| monitoredParticipantId | `string` | No | The participantId being monitored (if someone (e.g. an agent) is being monitored, this would correspond to one of the other participantIds present in the conversation) |
| outboundCampaignId | `string` | No | (Dialer) Unique identifier of the outbound campaign |
| outboundContactId | `string` | No | (Dialer) Unique identifier of the contact |
| outboundContactListId | `string` | No | (Dialer) Unique identifier of the contact list that this contact belongs to |
| peerId | `string` | No | This identifies pairs of related sessions on a conversation. E.g. an external session’s peerId will be the session that the call originally connected to, e.g. if an IVR was dialed, the IVR session, which will also have the external session’s ID as its peer. After that point, any transfers of that session to other internal components (acd, agent, etc.) will all spawn new sessions whose peerIds point back to that original external session. |
| protocolCallId | `string` | No | The original voice protocol call ID, e.g. a SIP call ID |
| provider | `string` | No | The source provider for the communication. |
| recording | `boolean` | No | Flag determining if an audio recording was started or not |
| remote | `string` | No | Name, phone number, or email address of the remote party. |
| remoteNameDisplayable | `string` | No | Unique identifier for the remote party |
| removedSkillIds | `string[]` | No | ID(s) of Skill(s) that have been removed by bullseye routing |
| requestedRoutings | `string[]` | No | Routing type(s) for requested/attempted routing methods. |
| roomId | `string` | No | Unique identifier for the room |
| routingRing | `number` | No | Routing ring for bullseye or preferred agent routing |
| routingRule | `string` | No | Routing rule for preferred, conditional and predictive routing type |
| routingRuleType | `string` | No | Routing rule type |
| screenShareAddressSelf | `string` | No | Direct screen share address |
| screenShareRoomId | `string` | No | A unique identifier for a Genesys Cloud screen share room |
| scriptId | `string` | No | A unique identifier for a script |
| selectedAgentId | `string` | No | Selected agent ID |
| selectedAgentRank | `number` | No | Selected agent GPR rank |
| sessionDnis | `string` | No | Dialed number for the current session; this can be different from dnis, e.g. if the call was transferred |
| sessionId | `string` | No | The unique identifier of this session |
| sharingScreen | `boolean` | No | Flag determining if screen share is started or not (true/false) |
| skipEnabled | `boolean` | No | (Dialer) Whether the agent can skip the dialer contact |
| timeoutSeconds | `number` | No | The number of seconds before Genesys Cloud begins the call for a call back (0 disables automatic calling) |
| usedRouting | `string` | No | Complete routing method |
| videoAddressSelf | `string` | No | Direct Video address |
| videoRoomId | `string` | No | A unique identifier for a Genesys Cloud video room |
| waitingInteractionCounts | `number[]` | No | Number of waiting interactions for each predictive routing attempt |
| agentGroups | [`AnalyticsAgentGroup[]`](analyticsagentgroup-definition.md) | No | Conditional group routing agent groups |
| proposedAgents | [`AnalyticsProposedAgent[]`](analyticsproposedagent-definition.md) | No | Proposed agents |
| mediaEndpointStats | [`AnalyticsMediaEndpointStat[]`](analyticsmediaendpointstat-definition.md) | No | MediaEndpointStats associated with this session |
| flow | [`AnalyticsFlow`](analyticsflow-definition.md) | No | IVR flow execution associated with this session |
| metrics | [`AnalyticsSessionMetric[]`](analyticssessionmetric-definition.md) | No | List of metrics for this session |
| segments | [`AnalyticsConversationSegment[]`](analyticsconversationsegment-definition.md) | No | List of segments for this session |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-11-26T23:43:17.719Z*