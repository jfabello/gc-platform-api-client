# `WorkPlanBidGroup` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | Yes | The name of the work plan bid group |
| managementUnit | [`ManagementUnitReference`](managementunitreference-definition.md) | Yes | The management unit this bid group belongs to |
| agents | [`UserReference[]`](userreference-definition.md) | Yes | The list of agents who participate in this bid group |
| workPlans | [`BidGroupWorkPlanResponse[]`](bidgroupworkplanresponse-definition.md) | Yes | The list of work plans used in this bid group |
| planningGroups | [`PlanningGroupReference[]`](planninggroupreference-definition.md) | Yes | The list of planning groups selected in this bid group |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.064Z*