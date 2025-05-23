# `UpdateActivityCodeRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | No | The name of the activity code |
| category | `string` | No | The activity code's category. Attempting to change the category of a default activity code will return an error |
| lengthInMinutes | `number` | No | The default length of the activity in minutes |
| countsAsPaidTime | `boolean` | No | Whether an agent is paid while performing this activity |
| countsAsWorkTime | `boolean` | No | Indicates whether or not the activity should be counted as work time |
| agentTimeOffSelectable | `boolean` | No | Whether an agent can select this activity code when creating or editing a time off request |
| countsTowardShrinkage | `boolean` | No | Whether or not this activity code counts toward shrinkage calculations |
| plannedShrinkage | `boolean` | No | Whether this activity code is considered planned or unplanned shrinkage |
| interruptible | `boolean` | No | Whether this activity code is considered interruptible |
| secondaryPresences | [`ListWrapperSecondaryPresence`](listwrappersecondarypresence-definition.md) | No | The secondary presences of this activity code |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | Yes | Version metadata for the associated business unit's list of activity codes |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.005Z*