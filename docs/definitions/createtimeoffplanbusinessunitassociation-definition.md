# `CreateTimeOffPlanBusinessUnitAssociation` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| managementUnitIds | `string[]` | No | The IDs of management units to which this time-off plan applies. This must not be set if staffingGroupIds is populated |
| staffingGroupIds | `string[]` | No | The IDs of staffing groups to which this time-off plan applies. This must not be set if managementUnitIds is populated |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.063Z*