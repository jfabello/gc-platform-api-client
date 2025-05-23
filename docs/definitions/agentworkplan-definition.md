# `AgentWorkPlan` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| constrainWeeklyPaidTime | `boolean` | Yes | Whether the weekly paid time constraint is enabled for this work plan |
| flexibleWeeklyPaidTime | `boolean` | Yes | Whether the weekly paid time constraint is flexible for this work plan |
| weeklyExactPaidMinutes | `number` | Yes | Exact weekly paid time in minutes for this work plan. Used if flexibleWeeklyPaidTime == false |
| weeklyMinimumPaidMinutes | `number` | Yes | Minimum weekly paid time in minutes for this work plan. Used if flexibleWeeklyPaidTime == true |
| weeklyMaximumPaidMinutes | `number` | Yes | Maximum weekly paid time in minutes for this work plan. Used if flexibleWeeklyPaidTime == true |
| optionalDays | [`SetWrapperDayOfWeek`](setwrapperdayofweek-definition.md) | No | Optional days to schedule for this work plan |
| shifts | [`AgentWorkPlanShift[]`](agentworkplanshift-definition.md) | Yes | Shifts in this work plan |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.046Z*