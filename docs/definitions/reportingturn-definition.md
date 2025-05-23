# `ReportingTurn` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| userInput | `string` | No | The chosen user input associated with this reporting turn. |
| botPrompts | `string[]` | No | The bot prompts associated with this reporting turn. |
| sessionId | `string` | No | The bot session ID that this reporting turn is grouped under. |
| askAction | [`ReportingTurnAction`](reportingturnaction-definition.md) | No | The bot flow 'ask' action associated with this reporting turn (e.g. AskForIntent). |
| intent | [`ReportingTurnIntent`](reportingturnintent-definition.md) | No | The intent and associated slots detected during this reporting turn. |
| knowledge | [`ReportingTurnKnowledge`](reportingturnknowledge-definition.md) | No | The knowledge data captured during this reporting turn. |
| knowledgeBaseEvents | [`ReportingTurnKnowledgeEvents`](reportingturnknowledgeevents-definition.md) | No | The knowledge data captured during this reporting turn. |
| dateCreated | `string` | No | Timestamp indicating when the original turn was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateCompleted | `string` | No | Timestamp indicating when the original turn was completed. Note: The 'interval' query param uses this timestamp to filter the output. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| askActionResult | `string` | No | Result of the bot flow 'ask' action. |
| sessionEndDetails | [`SessionEndDetails`](sessionenddetails-definition.md) | No | The details related to end of bot flow session. |
| conversation | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The conversation details, across potentially multiple Bot Flow sessions. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.494Z*