# `TimeOffLimitValueRange` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| timeOffLimit | [`TimeOffLimitReference`](timeofflimitreference-definition.md) | No | The ID of the time off limit |
| startDate | `string` | Yes | Start date of the requested date range, in ISO-8601 format. The end date is determined by the size of interval lists |
| granularity | `string` | Yes | Granularity choice for time off limit |
| limitMinutesPerInterval | `number[]` | No | A list of time off limit values in minutes per granularity interval |
| allocatedMinutesPerInterval | `number[]` | No | A list of allocated time off minutes per granularity interval |
| waitlistedMinutesPerInterval | `number[]` | No | A list of waitlisted time off minutes per granularity interval |
| waitlistedRequestsPerInterval | `number[]` | No | The current number of waitlisted time off requests for every interval per granularity |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | No | Version metadata for the time off limit |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.023Z*