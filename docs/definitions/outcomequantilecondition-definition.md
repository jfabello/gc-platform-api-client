# `OutcomeQuantileCondition` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| outcomeId | `string` | Yes | The outcome ID. |
| maxQuantileThreshold | `number` | Yes | This Outcome Quantile Condition is met when sessionMaxQuantile of the OutcomeScore is above this value, (unless fallbackQuantile is set). Range 0.00-1.00 |
| fallbackQuantileThreshold | `number` | No | (Optional) If set, this Condition is met when maxQuantileThreshold is met, AND the current quantile of the OutcomeScore is below this fallbackQuantileThreshold. Range 0.00-1.00 |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.727Z*