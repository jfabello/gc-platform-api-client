# `WfmAgent` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| user | [`UserReference`](userreference-definition.md) | No | The user associated with this data |
| workPlan | [`WorkPlanReference`](workplanreference-definition.md) | No | The work plan associated with this agent, if applicable |
| workPlanRotation | [`WorkPlanRotationReference`](workplanrotationreference-definition.md) | No | The work plan rotation associated with this agent, if applicable |
| acceptDirectShiftTrades | `boolean` | No | Whether the agent accepts direct shift trade requests |
| workPlanOverrides | [`WorkPlanOverride[]`](workplanoverride-definition.md) | No | The work plan overrides associated with this agent. Populate with expand=workPlanOverrides |
| queues | [`QueueReference[]`](queuereference-definition.md) | No | List of queues to which this agent is capable of handling |
| languages | [`LanguageReference[]`](languagereference-definition.md) | No | The list of languages this agent is capable of handling |
| skills | [`RoutingSkillReference[]`](routingskillreference-definition.md) | No | The list of skills this agent is capable of handling |
| schedulable | `boolean` | No | Whether the agent can be included in schedule generation |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | No | Metadata for this agent |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.018Z*