# `SurveyQuestion` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No |  |
| text | `string` | No |  |
| helpText | `string` | No |  |
| type | `string` | No |  |
| naEnabled | `boolean` | No |  |
| visibilityCondition | [`VisibilityCondition`](visibilitycondition-definition.md) | No |  |
| answerOptions | [`AnswerOption[]`](answeroption-definition.md) | No | Options from which to choose an answer for this question. Only used by Multiple Choice type questions. |
| maxResponseCharacters | `number` | No | How many characters are allowed in the text response to this question. Used by NPS and Free Text question types. |
| explanationPrompt | `string` | No | Prompt for details explaining the chosen NPS score. Used by NPS questions. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.793Z*