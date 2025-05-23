# `EvaluationForm` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The evaluation form name |
| modifiedDate | `string` | No | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| published | `boolean` | No |  |
| contextId | `string` | No |  |
| questionGroups | [`EvaluationQuestionGroup[]`](evaluationquestiongroup-definition.md) | Yes | A list of question groups |
| publishedVersions | [`DomainEntityListingEvaluationForm`](domainentitylistingevaluationform-definition.md) | No | A list of the published versions of this form. Not populated by default, its availability depends on the endpoint. Use the 'expand=publishHistory' query parameter to retrieve this data where applicable (refer to the endpoint description to see if it is applicable). |
| evaluationSettings | [`EvaluationSettings`](evaluationsettings-definition.md) | No | Settings for evaluations associated with this form |
| aiScoring | [`AiScoringSettings`](aiscoringsettings-definition.md) | No | AI scoring settings for the evaluation form. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.532Z*