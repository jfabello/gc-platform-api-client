# `UpdateServiceGoalTemplate` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | No | The name of the service goal template. |
| serviceLevel | [`BuServiceLevel`](buservicelevel-definition.md) | No | Service level targets for this service goal template |
| averageSpeedOfAnswer | [`BuAverageSpeedOfAnswer`](buaveragespeedofanswer-definition.md) | No | Average speed of answer targets for this service goal template |
| abandonRate | [`BuAbandonRate`](buabandonrate-definition.md) | No | Abandon rate targets for this service goal template |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | Yes | Version metadata for the service goal template |
| impactOverride | [`ServiceGoalTemplateImpactOverride`](servicegoaltemplateimpactoverride-definition.md) | No | Settings controlling max percent increase and decrease of service goals for this service goal template |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.022Z*