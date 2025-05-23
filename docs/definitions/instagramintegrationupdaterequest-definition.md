# `InstagramIntegrationUpdateRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No | The name of the Instagram Integration |
| supportedContent | [`SupportedContentReference`](supportedcontentreference-definition.md) | No | Defines the SupportedContent profile configured for an integration |
| messagingSetting | [`MessagingSettingRequestReference`](messagingsettingrequestreference-definition.md) | No | Defines the message settings to be applied for this integration |
| pageAccessToken | `string` | No | The long-lived Page Access Token of Instagram page. 
See https://developers.facebook.com/docs/facebook-login/access-tokens. 
Either pageAccessToken or userAccessToken should be provided. |
| userAccessToken | `string` | No | The short-lived User Access Token of the Instagram user logged into the Facebook app. 
See https://developers.facebook.com/docs/facebook-login/access-tokens. 
Either pageAccessToken or userAccessToken should be provided. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.593Z*