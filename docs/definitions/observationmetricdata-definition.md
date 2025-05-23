# `ObservationMetricData` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| metric | `string` | No |  |
| qualifier | `string` | No |  |
| stats | [`StatisticalSummary`](statisticalsummary-definition.md) | No |  |
| truncated | `boolean` | No | Flag for a truncated list of observations. If truncated, the first half of the list of observations will contain the oldest observations and the second half the newest observations. |
| observations | [`ObservationValue[]`](observationvalue-definition.md) | No | List of observations sorted by timestamp in ascending order. This list may be truncated. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.478Z*