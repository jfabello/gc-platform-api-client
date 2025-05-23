# `Suggestion` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| type | `string` | No | The type of the documents for which the suggestion is. |
| faq | [`Faq`](faq-definition.md) | No | The Faq from the knowledgebase that was provided as the suggestion. |
| article | [`Article`](article-definition.md) | No | The article from the knowledgebase that was provided as the suggestion. |
| dateCreated | `string` | No | Date when the suggestion was created. For example: yyyy-MM-ddTHH:mm:ss.SSZ. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| answerRecordId | `string` | No | The ID of the knowledge search that provided the suggestion. |
| triggerType | `string` | No | The trigger type of the suggestion. |
| context | [`SuggestionContext`](suggestioncontext-definition.md) | No | The conversation context in which the suggestion was raised. |
| state | `string` | No | The state of the suggestion. |
| knowledgeSearch | [`SuggestionKnowledgeSearch`](suggestionknowledgesearch-definition.md) | No | The suggested knowledge search result that was provided as the suggestion. |
| knowledgeArticle | [`SuggestionKnowledgeArticle`](suggestionknowledgearticle-definition.md) | No | The suggested knowledge article that was provided as the suggestion. |
| cannedResponse | [`SuggestionCannedResponse`](suggestioncannedresponse-definition.md) | No | The suggested canned response that was provided as the suggestion. |
| script | [`SuggestionScript`](suggestionscript-definition.md) | No | The suggested script that was provided as the suggestion. |
| selfUri | `string` | No | The URI for this object |
| conversation | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The conversation that the suggestions correspond to. |
| assistant | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The assistant that was used to provide the suggestions. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.599Z*