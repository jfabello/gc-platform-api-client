# `KnowledgeDocumentsAnswerFilter` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| query | `string` | No | The search query. |
| language | `string` | No | The language of the documents. |
| appType | `string` | No | The appType |
| queryType | `string` | No | The query type |
| searchId | `string` | No | The search id. |
| insertHighlightIntoVariationContent | `boolean` | No | If specified - insert highlight data into the variation content. |
| answerMode | `string[]` | No | Allows extracted answers from an article (AnswerHighlight) and/or AI-generated answers (AnswerGeneration). Default mode: AnswerHighlight |
| variationIds | `string[]` | Yes | The variation Ids to answer. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.760Z*