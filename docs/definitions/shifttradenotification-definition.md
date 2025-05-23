# `ShiftTradeNotification` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| weekDate | `string` | No | The start week date of the initiating shift of the shift trade in yyyy-MM-dd format |
| tradeId | `string` | No | The ID of the shift trade |
| oneSided | `boolean` | No | Whether this is a one sided shift trade |
| newState | `string` | No | The new state of the shift trade, null if there was no change |
| initiatingUser | [`UserReference`](userreference-definition.md) | No | The user who initiated the shift trade |
| initiatingShiftDate | `string` | No | The start date and time of the initiating shift. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| receivingUser | [`UserReference`](userreference-definition.md) | No | The user on the receiving side of this shift trade (null if not matched) |
| receivingShiftDate | `string` | No | The start date and time of the receiving shift (null if not matched or if one-sided. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.048Z*