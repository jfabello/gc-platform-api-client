# `CreatePerformanceProfile` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | A name for this performance profile |
| division | [`WritableDivision`](writabledivision-definition.md) | Yes | The associated division for this Performance Profile |
| description | `string` | Yes | A description about this performance profile |
| metricOrders | `string[]` | No | Order of the associated metrics. The list should contain valid ids for metrics |
| dateCreated | `string` | No | Creation date for this performance profile. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| reportingIntervals | [`ReportingInterval[]`](reportinginterval-definition.md) | Yes | The reporting interval periods for this performance profile |
| active | `boolean` | Yes | The flag for active profiles |
| memberCount | `number` | No | The number of members in this performance profile |
| maxLeaderboardRankSize | `number` | Yes | The maximum rank size for the leaderboard. This counts the number of ranks can be retrieved in a leaderboard queries |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.701Z*