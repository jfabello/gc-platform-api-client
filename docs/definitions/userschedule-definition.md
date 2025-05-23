# `UserSchedule` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| shifts | [`UserScheduleShift[]`](userscheduleshift-definition.md) | No | The shifts that belong to this schedule |
| fullDayTimeOffMarkers | [`UserScheduleFullDayTimeOffMarker[]`](userschedulefulldaytimeoffmarker-definition.md) | No | Markers to indicate a full day time off request, relative to the management unit time zone |
| delete | `boolean` | No | If marked true for updating an existing user schedule, it will be deleted |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | Yes | Version metadata for this schedule |
| workPlanId | `string` | No | ID of the work plan associated with the user during schedule creation |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.047Z*