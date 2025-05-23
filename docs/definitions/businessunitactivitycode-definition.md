# `BusinessUnitActivityCode` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| active | `boolean` | No | Whether this activity code is active or has been deleted |
| defaultCode | `boolean` | No | Whether this is a default activity code |
| category | `string` | No | The category of the activity code |
| lengthInMinutes | `number` | No | The default length of the activity in minutes |
| countsAsPaidTime | `boolean` | No | Whether an agent is paid while performing this activity |
| countsAsWorkTime | `boolean` | No | Indicates whether or not the activity should be counted as contiguous work time for calculating daily constraints |
| agentTimeOffSelectable | `boolean` | No | Whether an agent can select this activity code when creating or editing a time off request. Null if the activity's category is not time off. |
| countsTowardShrinkage | `boolean` | No | Whether or not this activity code counts toward shrinkage calculations |
| plannedShrinkage | `boolean` | No | Whether this activity code is considered planned or unplanned shrinkage |
| interruptible | `boolean` | No | Whether this activity code is considered interruptible |
| secondaryPresences | [`SecondaryPresence[]`](secondarypresence-definition.md) | No | The secondary presences of this activity code |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | No | Version metadata of this activity code |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.005Z*