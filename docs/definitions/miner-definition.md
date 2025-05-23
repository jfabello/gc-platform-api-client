# `Miner` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | Chat Corpus Name. |
| language | `string` | No | Language Localization code. |
| minerType | `string` | No | Type of the miner, intent or topic. |
| dateCreated | `string` | No | Date when the miner was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| status | `string` | No | Status of the miner. |
| conversationsDateRangeStart | `string` | No | Date from which the conversations need to be taken for mining. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |
| conversationsDateRangeEnd | `string` | No | Date till which the conversations need to be taken for mining. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |
| dateCompleted | `string` | No | Date when the mining process was completed. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| message | `string` | No | Mining message if present. |
| errorInfo | [`MinerErrorInfo`](minererrorinfo-definition.md) | No | Error Information |
| warningInfo | [`MinerErrorInfo`](minererrorinfo-definition.md) | No | Warning Information |
| conversationDataUploaded | `boolean` | No | Flag to indicate whether data file to be mined was uploaded. |
| mediaType | `string` | No | Media type for filtering conversations. |
| participantType | `string` | No | Type of the participant, either agent, customer or both. |
| queueIds | `string[]` | No | List of queue IDs for filtering conversations. |
| dateTriggered | `string` | No | Date when the miner started execution. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Date when the miner was last modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| latestDraftVersion | [`Draft`](draft-definition.md) | No | Latest draft details of the miner. |
| conversationsFetchedCount | `number` | No | Number of conversations/transcripts fetched. |
| conversationsValidCount | `number` | No | Number of conversations/recordings/transcripts that were found valid for mining purposes. |
| getminedItemCount | `number` | No | Number of intents or topics based on the miner type. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.773Z*