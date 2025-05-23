# `VoicemailMailboxInfo` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| usageSizeBytes | `number` | No | The total number of bytes for all voicemail message audio recordings |
| totalCount | `number` | No | The total number of voicemail messages |
| unreadCount | `number` | No | The total number of voicemail messages marked as unread |
| deletedCount | `number` | No | The total number of voicemail messages marked as deleted |
| createdDate | `string` | No | The date of the oldest voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedDate | `string` | No | The date of the most recent voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| newestUnreadDate | `string` | No | The date of the most recent unread voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| oldestUnreadDate | `string` | No | The date of the most oldest unread voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| newestReadDate | `string` | No | The date of the most recent read voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| oldestReadDate | `string` | No | The date of the most oldest read voicemail message. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.900Z*