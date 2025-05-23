# `MessagingEndTransferEvent` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| eventId | `string` | Yes | A unique (V4 UUID) eventId for this event |
| eventDateTime | `string` | Yes | A Date Time representing the time this event occurred. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| conversationId | `string` | Yes | A unique Id (V4 UUID) identifying this conversation |
| commandId | `string` | Yes | The id (V4 UUID) used to identify the transfer already started by the external platform. |
| finalState | `string` | Yes | Indicates whether the transfer completed successfully, was cancelled, or failed for some reason. |
| objectCommunicationId | `string` | Yes | The id (V4 UUID) of the communication that was being transferred. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.452Z*