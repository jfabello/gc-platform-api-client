# `UserExpands` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| routingStatus | [`RoutingStatus`](routingstatus-definition.md) | No | ACD routing status |
| presence | [`UserPresence`](userpresence-definition.md) | No | Active presence |
| integrationPresence | [`UserPresence`](userpresence-definition.md) | No | Active 3rd party presence |
| conversationSummary | [`UserConversationSummary`](userconversationsummary-definition.md) | No | Summary of conversion statistics for conversation types. |
| outOfOffice | [`OutOfOffice`](outofoffice-definition.md) | No | Determine if out of office is enabled |
| geolocation | [`Geolocation`](geolocation-definition.md) | No | Current geolocation position |
| station | [`UserStations`](userstations-definition.md) | No | Effective, default, and last station information |
| authorization | [`UserAuthorization`](userauthorization-definition.md) | No | Roles and permissions assigned to the user |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.694Z*