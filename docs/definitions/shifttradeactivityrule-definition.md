# `ShiftTradeActivityRule` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| activityCategory | `string` | Yes | The activity category to which to apply this rule |
| action | `string` | Yes | The action this rule invokes |
| activityCodeIdReplacement | `string` | No | The activity code ID with which to replace activities belonging to the original category if applicable (required if action == Replace, must be a default activity code ID) |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.015Z*