# `FixedAvailability` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| availabilityRange | [`AvailabilityRange`](availabilityrange-definition.md) | No | The range of time of day the activity can be scheduled |
| dateRange | [`RequiredLocalDateRange`](requiredlocaldaterange-definition.md) | No | The range of date for which the activity plan could be scheduled |
| daysOfWeek | `string[]` | No | The days of week available for scheduling. Empty list or null means daysOfWeek is not considered |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.036Z*