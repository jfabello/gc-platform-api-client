# `ReportingExportJobResponse` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| runId | `string` | Yes | The unique run id of the export schedule execute |
| status | `string` | Yes | The current status of the export request |
| timeZone | `string` | Yes | The requested timezone of the exported data. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London |
| exportFormat | `string` | Yes | The requested format of the exported data |
| interval | `string` | Yes | The time period used to limit the the exported data. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss |
| downloadUrl | `string` | No | The url to download the request if it's status is completed |
| viewType | `string` | Yes | The type of view export job to be created |
| exportErrorMessagesType | `string` | No | The error message in case the export request failed |
| period | `string` | Yes | The Period of the request in which to break down the intervals. Periods are represented as an ISO-8601 string. For example: P1D or P1DT12H |
| filter | [`ViewFilter`](viewfilter-definition.md) | Yes | Filters to apply to create the view |
| read | `boolean` | Yes | Indicates if the request has been marked as read |
| createdDateTime | `string` | Yes | The created date/time of the request. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedDateTime | `string` | Yes | The last modified date/time of the request. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| locale | `string` | Yes | The locale use for localization of the exported data, i.e. en-us, es-mx   |
| percentageComplete | `number` | Yes | The percentage of the job that has completed processing |
| hasFormatDurations | `boolean` | No | Indicates if durations are formatted in hh:mm:ss format instead of ms |
| hasSplitFilters | `boolean` | No | Indicates if filters will be split in aggregate detail exports |
| excludeEmptyRows | `boolean` | No | Excludes empty rows from the exports |
| hasSplitByMedia | `boolean` | No | Indicates if media type will be split in aggregate detail exports |
| hasSummaryRow | `boolean` | No | Indicates if summary row needs to be present in exports |
| csvDelimiter | `string` | No | The user supplied csv delimiter string value either of type 'comma' or 'semicolon' permitted for the export request |
| selectedColumns | [`SelectedColumns[]`](selectedcolumns-definition.md) | No | The list of ordered selected columns from the export view by the user |
| hasCustomParticipantAttributes | `boolean` | No | Indicates if custom participant attributes will be exported |
| recipientEmails | `string[]` | No | The list of email recipients for the exports |
| emailStatuses | `object` | No | The status of individual email addresses as a map |
| emailErrorDescription | `string` | No | The optional error message in case the export fail to email |
| includeDurationFormatInHeader | `boolean` | No | Indicates whether to include selected duration format to the column headers |
| durationFormat | `string` | No | Indicates the duration format for the exports |
| exportAllowedToRerun | `boolean` | No | Indicates whether the export run is allowed to rerun |
| enabled | `boolean` | No |  |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.500Z*