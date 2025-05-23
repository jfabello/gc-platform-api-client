# `RecordingEmailMessage` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| htmlBody | `string` | No |  |
| textBody | `string` | No |  |
| id | `string` | No |  |
| to | [`EmailAddress[]`](emailaddress-definition.md) | No |  |
| cc | [`EmailAddress[]`](emailaddress-definition.md) | No |  |
| bcc | [`EmailAddress[]`](emailaddress-definition.md) | No |  |
| from | [`EmailAddress`](emailaddress-definition.md) | No |  |
| subject | `string` | No |  |
| attachments | [`EmailAttachment[]`](emailattachment-definition.md) | No |  |
| time | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.821Z*