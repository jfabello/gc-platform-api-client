# `ApiUsageSimpleSearch` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| interval | `string` | Yes | Behaves like one clause in a SQL WHERE. Specifies the date and time range of data being queried. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss |
| metrics | `string[]` | No | Behaves like a SQL SELECT clause. Enables retrieving only named metrics. If omitted, all metrics that are available will be returned (like SELECT *). |
| oauthClientNames | `string[]` | No | Behaves like a SQL WHERE with multiple IN operators. Specifies a list of OAuth client names to be queried. |
| httpMethods | `string[]` | No | Behaves like a SQL WHERE with multiple IN operators. Specifies a list of HTTP methods to be queried. |
| templateUris | `string[]` | No | Behaves like a SQL WHERE with multiple IN operators. Specifies a list of Template Uris to be queried. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.896Z*