# `AddWorkPlanRotationAgentRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| userId | `string` | Yes | The ID of an agent in this work plan rotation |
| dateRange | [`DateRangeWithOptionalEnd`](daterangewithoptionalend-definition.md) | Yes | The date range to which this agent is effective in the work plan rotation |
| position | `number` | Yes | Start position of the work plan in the pattern for this agent in the work plan rotation. Position value starts from 0 |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.034Z*