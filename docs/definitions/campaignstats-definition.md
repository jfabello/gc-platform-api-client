# `CampaignStats` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| contactRate | [`ConnectRate`](connectrate-definition.md) | No | Information regarding the campaign's connect rate |
| idleAgents | `number` | No | Number of available agents not currently being utilized |
| effectiveIdleAgents | `number` | No | Number of effective available agents not currently being utilized |
| adjustedCallsPerAgent | `number` | No | Calls per agent adjusted by pace |
| outstandingCalls | `number` | No | Number of campaign calls currently ongoing |
| scheduledCalls | `number` | No | Number of campaign calls currently scheduled |
| timeZoneRescheduledCalls | `number` | No | Number of campaign calls currently timezone rescheduled |
| filteredOutContactsCount | `number` | No | Number of contacts that don't match filter. This is currently supported only for Campaigns with dynamic filter on. |
| rightPartyContactsCount | `number` | No | Information on the campaign's number of Right Party Contacts |
| validAttempts | `number` | No | Information on the campaign's valid attempts |
| linesUtilization | [`CampaignLinesUtilization`](campaignlinesutilization-definition.md) | No | Information on the campaign's lines utilization |
| businessCategoryMetrics | [`CampaignBusinessCategoryMetrics`](campaignbusinesscategorymetrics-definition.md) | No | Information on the campaign's business category metrics |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.619Z*