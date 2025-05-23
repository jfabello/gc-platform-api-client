# `ObservationValue` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| observationDate | `string` | Yes | The time at which the observation occurred. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| conversationId | `string` | No | Unique identifier for the conversation |
| sessionId | `string` | No | The unique identifier of this session |
| requestedRoutingSkillIds | `string[]` | No | Unique identifier for a skill requested for an interaction |
| requestedLanguageId | `string` | No | Unique identifier for the language requested for an interaction |
| routingPriority | `number` | No | Routing priority for the current interaction |
| participantName | `string` | No | A human readable name identifying the participant |
| userId | `string` | No | Unique identifier for the user |
| direction | `string` | No | The direction of the communication |
| convertedFrom | `string` | No | Session media type that was converted from in case of a media type conversion |
| convertedTo | `string` | No | Session media type that was converted to in case of a media type conversion |
| addressFrom | `string` | No | The address that initiated an action |
| addressTo | `string` | No | The address receiving an action |
| ani | `string` | No | Automatic Number Identification (caller's number) |
| dnis | `string` | No | Dialed number identification service (number dialed by the calling party) |
| teamId | `string` | No | The team id the user is a member of |
| requestedRoutings | `string[]` | No | All routing types for requested/attempted routing methods |
| usedRouting | `string` | No | Complete routing method |
| scoredAgents | [`AnalyticsScoredAgent[]`](analyticsscoredagent-definition.md) | No |  |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.478Z*