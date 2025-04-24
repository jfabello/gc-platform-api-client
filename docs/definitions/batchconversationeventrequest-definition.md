# `BatchConversationEventRequest` Definition

A maximum of 100 events are allowed per request

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| endTransferEvents | [`EndTransferEvent[]`](endtransferevent-definition.md) | No | Voice - EndTransfer events for this batch |
| phoneTransferEvents | [`PhoneTransferEvent[]`](phonetransferevent-definition.md) | No | Voice - PhoneTransfer events for this batch |
| progressTransferEvents | [`ProgressTransferEvent[]`](progresstransferevent-definition.md) | No | Voice - ProgressTransfer events for this batch |
| routingTransferEvents | [`RoutingTransferEvent[]`](routingtransferevent-definition.md) | No | Voice - RoutingTransfer events for this batch |
| userTransferEvents | [`UserTransferEvent[]`](usertransferevent-definition.md) | No | Voice - UserTransfer events for this batch |
| communicationAnsweredEvents | [`CommunicationAnsweredEvent[]`](communicationansweredevent-definition.md) | No | Voice - CommunicationAnswered events for this batch |
| communicationDispositionAppliedEvents | [`CommunicationDispositionAppliedEvent[]`](communicationdispositionappliedevent-definition.md) | No | Voice - CommunicationDispositionApplied events for this batch |
| holdUpdatedEvents | [`HoldUpdatedEvent[]`](holdupdatedevent-definition.md) | No | Voice - HoldUpdated events for this batch |
| externalEstablishedEvents | [`ExternalEstablishedEvent[]`](externalestablishedevent-definition.md) | No | Voice - ExternalEstablished events for this batch |
| ivrEstablishedEvents | [`IvrEstablishedEvent[]`](ivrestablishedevent-definition.md) | No | Voice - IvrEstablished events for this batch |
| phoneEstablishedEvents | [`PhoneEstablishedEvent[]`](phoneestablishedevent-definition.md) | No | Voice - PhoneEstablished events for this batch |
| routingEstablishedEvents | [`RoutingEstablishedEvent[]`](routingestablishedevent-definition.md) | No | Voice - RoutingEstablished events for this batch |
| userEstablishedEvents | [`UserEstablishedEvent[]`](userestablishedevent-definition.md) | No | Voice - UserEstablished events for this batch |
| audioUpdatedEvents | [`AudioUpdatedEvent[]`](audioupdatedevent-definition.md) | No | Voice - AudioUpdated events for this batch |
| communicationEndedEvents | [`CommunicationEndedEvent[]`](communicationendedevent-definition.md) | No | Voice - CommunicationEnded events for this batch |
| consultTransferEvents | [`ConsultTransferEvent[]`](consulttransferevent-definition.md) | No | Voice - ConsultTransfer events for this batch |
| progressConsultTransferEvents | [`ProgressConsultTransferEvent[]`](progressconsulttransferevent-definition.md) | No | Voice - ProgressConsultTransfer events for this batch |
| endConsultTransferEvents | [`EndConsultTransferEvent[]`](endconsulttransferevent-definition.md) | No | Voice - EndConsultTransfer events for this batch |
| emailBeginTransmittingEvents | [`EmailBeginTransmittingEvent[]`](emailbegintransmittingevent-definition.md) | No | Email - EmailBeginTransmittingEvent events for this batch |
| emailCommunicationEndedEvents | [`EmailCommunicationEndedEvent[]`](emailcommunicationendedevent-definition.md) | No | Email - EmailCommunicationEndedEvent events for this batch |
| emailExternalEstablishedEvents | [`EmailExternalEstablishedEvent[]`](emailexternalestablishedevent-definition.md) | No | Email - EmailExternalEstablishedEvent events for this batch |
| emailFlowEstablishedEvents | [`EmailFlowEstablishedEvent[]`](emailflowestablishedevent-definition.md) | No | Email - EmailFlowEstablishedEvent events for this batch |
| emailRoutingEstablishedEvents | [`EmailRoutingEstablishedEvent[]`](emailroutingestablishedevent-definition.md) | No | Email - EmailRoutingEstablishedEvent events for this batch |
| emailUserEstablishedEvents | [`EmailUserEstablishedEvent[]`](emailuserestablishedevent-definition.md) | No | Email - EmailUserEstablishedEvent events for this batch |
| emailCommunicationAnsweredEvents | [`EmailCommunicationAnsweredEvent[]`](emailcommunicationansweredevent-definition.md) | No | Email - EmailCommunicationAnsweredEvent events for this batch |
| emailCommunicationDispositionAppliedEvents | [`EmailCommunicationDispositionAppliedEvent[]`](emailcommunicationdispositionappliedevent-definition.md) | No | Email - EmailCommunicationDispositionAppliedEvent events for this batch |
| emailCommunicationSentMessageEvents | [`EmailCommunicationSentMessageEvent[]`](emailcommunicationsentmessageevent-definition.md) | No | Email - EmailCommunicationSentMessageEvent events for this batch |
| emailHoldUpdatedEvents | [`EmailHoldUpdatedEvent[]`](emailholdupdatedevent-definition.md) | No | Email - EmailHoldUpdatedEvent events for this batch |
| emailEndTransferEvents | [`EmailEndTransferEvent[]`](emailendtransferevent-definition.md) | No | Email - EmailEndTransferEvent events for this batch |
| emailProgressTransferEvents | [`EmailProgressTransferEvent[]`](emailprogresstransferevent-definition.md) | No | Email - EmailProgressTransferEvent events for this batch |
| emailRoutingTransferEvents | [`EmailRoutingTransferEvent[]`](emailroutingtransferevent-definition.md) | No | Email - EmailRoutingTransferEvent events for this batch |
| emailUserTransferEvents | [`EmailUserTransferEvent[]`](emailusertransferevent-definition.md) | No | Email - EmailUserTransferEvent events for this batch |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.448Z*