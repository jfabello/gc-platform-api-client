# `KnowledgeDocumentSuggestionRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| query | `string` | Yes | Query to get autocomplete suggestions for the matching knowledge documents. |
| pageSize | `number` | No | Page size of the returned results. |
| includeDraftDocuments | `boolean` | No | Indicates whether the suggestion results would also include draft documents. |
| interval | [`DocumentQueryInterval`](documentqueryinterval-definition.md) | No | Retrieves the documents created/modified/published in specified date and time range. |
| filter | [`DocumentQuery`](documentquery-definition.md) | No | Filter for the document suggestions. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.769Z*