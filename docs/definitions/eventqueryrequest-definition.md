# `EventQueryRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| interval | `string` | Yes | Date and time range to query. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss |
| eventDefinitionIds | `string[]` | No | Filter events by a list of event definition ids |
| searchTerm | `string` | No | Only return events that contain the search term |
| sortOrder | `string` | No | Order of results. Default order is DESC. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.800Z*