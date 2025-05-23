# `Leaderboard` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| division | [`Division`](division-definition.md) | No | The targeted division for this leaderboard |
| metric | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The metric id if the leaderboard is about a specific metric |
| dateStartWorkday | `string` | No | Start workday used as the date range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |
| dateEndWorkday | `string` | No | End workday used as the date range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |
| leaders | [`LeaderboardItem[]`](leaderboarditem-definition.md) | No | The list of leaders generated. |
| userRank | [`LeaderboardItem`](leaderboarditem-definition.md) | No | The requesting user's rank |
| performanceProfile | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The targeted performance profile for the average points |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.699Z*