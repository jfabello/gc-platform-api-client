# `MessagingRoutingEstablishedEvent` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| eventId | `string` | Yes | A unique (V4 UUID) eventId for this event |
| eventDateTime | `string` | Yes | A Date Time representing the time this event occurred. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| conversationId | `string` | Yes | A unique Id (V4 UUID) identifying this conversation |
| communicationId | `string` | Yes | A unique Id (V4 UUID) identifying this communication. |
| queueId | `string` | Yes | The id of the queue that is routing this conversation. |
| skillIds | `string[]` | No | The unique identifiers for the skills that should be used to determine the destination for the conversation. |
| languageId | `string` | No | The unique identifier for the language that should be used to determine the destination for the conversation. |
| label | `string` | No | An optional label that categorizes the conversation. Max-utilization settings can be configured at a per-label level. |
| initialConfiguration | [`MessagingInitialConfiguration`](messaginginitialconfiguration-definition.md) | Yes | Metadata about this communication. |
| sourceConfiguration | [`SourceConfiguration`](sourceconfiguration-definition.md) | Yes | Metadata about the source of this communication's interaction. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.453Z*