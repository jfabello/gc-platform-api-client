# `SurveyForm` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The survey form name |
| modifiedDate | `string` | No | Last modified date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| published | `boolean` | No | Is this form published |
| disabled | `boolean` | No | Is this form disabled |
| contextId | `string` | Yes | Unique Id for all versions of this form |
| language | `string` | Yes | Language for survey viewer localization. Currently localized languages: da, de, en-US, es, fi, fr, it, ja, ko, nl, no, pl, pt-BR, sv, th, tr, zh-CH, zh-TW |
| header | `string` | No | Markdown text for the top of the form. |
| footer | `string` | No | Markdown text for the bottom of the form. |
| questionGroups | [`SurveyQuestionGroup[]`](surveyquestiongroup-definition.md) | No | A list of question groups |
| publishedVersions | [`DomainEntityListingSurveyForm`](domainentitylistingsurveyform-definition.md) | No | List of published version of this form |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.793Z*