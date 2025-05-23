# `KnowledgeParseJobResponse` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | Id of the parse job |
| downloadURL | `string` | No | The URL of the location at which the caller can download the original html file. |
| hints | `string[]` | No | Hinted titles for the parser. |
| status | `string` | No | Status of the parse job |
| parseResults | [`KnowledgeParseRecord[]`](knowledgeparserecord-definition.md) | No | Results of the parse |
| importResult | [`KnowledgeParseImportResult`](knowledgeparseimportresult-definition.md) | No | Result of the import phase |
| createdBy | [`UserReference`](userreference-definition.md) | No | The user who created the operation |
| dateCreated | `string` | No | Created date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Last modified date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.768Z*