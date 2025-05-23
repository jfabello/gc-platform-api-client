# `RecordingSettings` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| maxSimultaneousStreams | `number` | No | Maximum number of simultaneous screen recording streams |
| maxConfigurableScreenRecordingStreams | `number` | No | Upper limit that maxSimultaneousStreams can be configured |
| regionalRecordingStorageEnabled | `boolean` | No | Store call recordings in the region where they are intended to be recorded, otherwise in the organization's home region |
| recordingPlaybackUrlTtl | `number` | No | The duration in minutes for which the generated URL for recording playback remains valid.The default duration is set to 60 minutes, with a minimum allowable duration of 2 minutes and a maximum of 60 minutes. |
| recordingBatchDownloadUrlTtl | `number` | No | The duration in minutes for which the generated URL for recording batch download remains valid.The default duration is set to 60 minutes, with a minimum allowable duration of 2 minutes and a maximum of 60 minutes. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.825Z*