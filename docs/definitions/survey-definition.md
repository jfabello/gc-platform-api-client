# `Survey` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| conversation | [`ConversationReference`](conversationreference-definition.md) | No |  |
| surveyForm | [`SurveyForm`](surveyform-definition.md) | No | Survey form used for this survey. |
| agent | [`DomainEntityRef`](domainentityref-definition.md) | No |  |
| status | `string` | No |  |
| queue | [`QueueReference`](queuereference-definition.md) | No |  |
| answers | [`SurveyScoringSet`](surveyscoringset-definition.md) | No |  |
| completedDate | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| surveyErrorDetails | [`SurveyErrorDetails`](surveyerrordetails-definition.md) | No | Additional information about what happened when the survey is in Error status. |
| agentTeam | [`Team`](team-definition.md) | No | The team that the agent belongs to |
| surveyType | `string` | No | Type of the survey |
| missingRequiredAnswer | `boolean` | No | True if any of the required questions for the survey form have not been answered. Null if survey is not finished. |
| flow | [`AddressableEntityRef`](addressableentityref-definition.md) | No | An Architect flow that executed in order to collect the answers for this survey. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.818Z*