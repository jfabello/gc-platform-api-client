# `BillingUsage` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | Yes | Identifies the billable usage. |
| totalUsage | `string` | Yes | The total amount of usage, expressed as a decimal number in string format. |
| resources | [`BillingUsageResource[]`](billingusageresource-definition.md) | Yes | The resources for which usage was observed (e.g. license users, devices). |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.521Z*