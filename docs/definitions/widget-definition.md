# `Widget` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| row | `number` | No | The row number for the specific dashboard widget configuration. |
| column | `number` | No | The column number for the specific dashboard widget configuration. |
| title | `string` | No | The title for the dashboard widget configuration. |
| type | `string` | Yes | The type of dashboard widget configuration. |
| metrics | `string[]` | No | The list of metrics for the dashboard widget configuration. |
| displayText | `string` | No | The display text for the dashboard widget configuration. |
| displayTextColor | `string` | No | The color of the display text for the dashboard widget configuration in RGB hexadecimal format (for example "#FF0000" represents red). |
| webContentUrl | `string` | No | The external web URL for the dashboard widget configuration. |
| splitFilters | `boolean` | No | Indicates each filter to be displayed individually. |
| splitByMediaType | `boolean` | No | Indicates that data for each media type should be shown individually. |
| showLongest | `boolean` | No | Indicates the display be the longest time. |
| displayAsTable | `boolean` | No | Indicates the widget to be displayed as table. |
| showDuration | `boolean` | No | Indicates the display to include duration. |
| sortOrder | `string` | No | The sort order of the table. |
| sortKey | `string` | No | The sort key of the table. |
| entityLimit | `number` | No | Indicates the limit of displayed entities. |
| displayAggregates | `boolean` | No | Indicates whether to display aggregate across all entity and media type combination. |
| isFullWidth | `boolean` | No | Indicates whether a widget should take the full width of a dashboard or be shown only in a single slot. |
| showPercentageChange | `boolean` | No | Indicates whether a widget should show the percentage diff between two values. |
| showProfilePicture | `boolean` | No | Indicates whether a widget should show the profile picture of an agent. |
| filter | [`ViewFilter`](viewfilter-definition.md) | No | The filters to be applied for dashboard widget configuration |
| periods | `string[]` | No | The list of periods for the dashboard widget configuration |
| mediaTypes | `string[]` | No | The list of media types for the dashboard widget configuration |
| warnings | [`Warning[]`](warning-definition.md) | No | List of warnings for dashboard widget configuration |
| showTimeInStatus | `boolean` | No | Indicates the show time in status of a widget configuration. |
| showOfflineAgents | `boolean` | No | Indicates to show offline agent widget. |
| selectedStatuses | `string[]` | No | Indicates the selected statuses used to filter the agent widget in the dashboard. |
| selectedSegmentTypes | `string[]` | No | Indicates the selected segment types used to filter the agent activity in the dashboard. |
| agentInteractionSortOrder | `string` | No | The sort order of the interactions in the agent status widget. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.499Z*