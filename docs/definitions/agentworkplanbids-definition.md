# `AgentWorkPlanBids` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| businessUnit | [`BusinessUnitReference`](businessunitreference-definition.md) | No | The business unit to which the bids belong |
| agentWorkPlanBids | [`AgentWorkPlanBid[]`](agentworkplanbid-definition.md) | Yes | Work plan bid summaries associated with this agent |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.045Z*