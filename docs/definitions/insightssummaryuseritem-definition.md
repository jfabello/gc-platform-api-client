# `InsightsSummaryUserItem` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| user | [`UserReference`](userreference-definition.md) | No | Queried user |
| metricData | [`InsightsSummaryMetricItem[]`](insightssummarymetricitem-definition.md) | No | The list of insights data for each metric of the user |
| overallData | [`InsightsSummaryOverallItem`](insightssummaryoverallitem-definition.md) | No | Overall insights data of the user |
| ranking | `number` | No | Ranking of the user |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.707Z*