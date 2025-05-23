# `TranscriptTopic` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No | The name of the object. |
| topicPhrase | `string` | No | The phrase which detected the topic.  |
| transcriptPhrase | `string` | No | The transcript phrase which detected the topic. |
| confidence | `number` | No | The detection confidence of the topic. |
| startTimeMilliseconds | `number` | No | The start time of the topic phrase. |
| duration | [`TopicDuration`](topicduration-definition.md) | No |  |
| offset | [`TopicOffset`](topicoffset-definition.md) | No | Location of the phrase |
| recordingLocation | `number` | No | Location of the phrase in the recording in milliseconds |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.570Z*