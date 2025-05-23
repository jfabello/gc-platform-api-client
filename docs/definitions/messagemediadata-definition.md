# `MessageMediaData` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| url | `string` | No | The location of the media, useful for retrieving it |
| mediaType | `string` | No | The detected internet media type of the the media object.  If null then the media type should be dictated by the url. |
| contentLengthBytes | `number` | No | The optional content length of the the media object, in bytes. |
| uploadUrl | `string` | No | The URL returned to upload an attachment |
| status | `string` | No | The status of the media, indicates if the media is in the process of uploading. If the upload fails, the media becomes invalid |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.588Z*