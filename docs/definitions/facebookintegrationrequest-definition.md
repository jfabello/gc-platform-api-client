# `FacebookIntegrationRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The name of the Facebook Integration |
| supportedContent | [`SupportedContentReference`](supportedcontentreference-definition.md) | No | Defines the SupportedContent profile configured for an integration |
| messagingSetting | [`MessagingSettingRequestReference`](messagingsettingrequestreference-definition.md) | No | Defines the message settings to be applied for this integration |
| pageAccessToken | `string` | No | The long-lived Page Access Token of Facebook page. 
See https://developers.facebook.com/docs/facebook-login/access-tokens. 
When a pageAccessToken is provided, pageId and userAccessToken are not required. |
| userAccessToken | `string` | No | The short-lived User Access Token of the Facebook user logged into the Facebook app. 
See https://developers.facebook.com/docs/facebook-login/access-tokens. 
When userAccessToken is provided, pageId is mandatory. 
When userAccessToken/pageId combination is provided, pageAccessToken is not required. |
| pageId | `string` | No | The page Id of Facebook page. The pageId is required when userAccessToken is provided. |
| appId | `string` | No | The app Id of Facebook app. The appId is required when a customer wants to use their own approved Facebook app. |
| appSecret | `string` | No | The app Secret of Facebook app. The appSecret is required when appId is provided. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.593Z*