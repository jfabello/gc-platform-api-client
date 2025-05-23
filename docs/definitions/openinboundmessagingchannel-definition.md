# `OpenInboundMessagingChannel` Definition

Open Channel-specific information that describes the message and the message channel/provider.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| from | [`OpenMessagingFromRecipient`](openmessagingfromrecipient-definition.md) | Yes | Information about the recipient the message is received from. |
| time | `string` | Yes | Original time of the event. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.589Z*