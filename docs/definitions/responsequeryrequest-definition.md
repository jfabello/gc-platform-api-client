# `ResponseQueryRequest` Definition

Used to query for responses

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| queryPhrase | `string` | No | Query phrase to search response text and name. If not set will match all. |
| pageSize | `number` | No | The maximum number of hits to return. Default: 25, Maximum: 500. |
| pageNumber | `number` | No | Page Number |
| filters | [`ResponseFilter[]`](responsefilter-definition.md) | No | Filter the query results. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.832Z*