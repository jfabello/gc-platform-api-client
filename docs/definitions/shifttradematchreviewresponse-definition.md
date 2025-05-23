# `ShiftTradeMatchReviewResponse` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| initiatingUser | [`ShiftTradeMatchReviewUserResponse`](shifttradematchreviewuserresponse-definition.md) | No | Details for the initiatingUser side of the shift trade |
| receivingUser | [`ShiftTradeMatchReviewUserResponse`](shifttradematchreviewuserresponse-definition.md) | No | Details for the receivingUser side of the shift trade |
| violations | [`ShiftTradeMatchViolation[]`](shifttradematchviolation-definition.md) | No | Constraint violations introduced after being matched that would normally disallow a trade, but which can still be overridden by the shift trade administrator |
| adminReviewViolations | [`ShiftTradeMatchViolation[]`](shifttradematchviolation-definition.md) | No | Constraint violations associated with this shift trade which require shift trade administrator review |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.027Z*