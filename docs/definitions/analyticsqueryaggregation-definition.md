# `AnalyticsQueryAggregation` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | `string` | No | Optional type, can usually be inferred |
| dimension | `string` | No | For use with termFrequency aggregations |
| metric | `string` | No | For use with numericRange aggregations |
| size | `number` | No | For use with termFrequency aggregations |
| ranges | [`AggregationRange[]`](aggregationrange-definition.md) | No | For use with numericRange aggregations |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.471Z*