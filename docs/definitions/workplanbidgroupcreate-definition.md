# `WorkPlanBidGroupCreate` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | Yes | The name of the work plan bid group |
| managementUnitId | `string` | Yes | The management unit ID this bid group belongs to |
| agentIds | `string[]` | Yes | Agent IDs who participate in this bid group |
| workPlans | [`BidGroupWorkPlanRequest[]`](bidgroupworkplanrequest-definition.md) | Yes | The list of work plans used in this bid group |
| planningGroupIds | `string[]` | Yes | The planning group IDs selected in this bid group |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.065Z*