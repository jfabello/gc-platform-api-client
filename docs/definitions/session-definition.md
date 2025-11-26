# `Session` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | The ID of the session. |
| externalContact | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The external contact associated with this session. |
| customerId | `string` | No | Primary identifier of the customer in the source where the events for the session originate from. |
| customerIdType | `string` | No | Type of source customer identifier (e.g. cookie, email, phone). |
| type | `string` | Yes | Session types indicate the type or category of sessions (e.g. web, app). |
| externalId | `string` | No | Unique identifier in the external system where the events for the session originate from. |
| externalUrl | `string` | No | A URL that identifies an external system-of-record resource that may have more detailed information on the session. |
| shortId | `string` | No | Shortened numeric identifier of 4-6 digits. |
| outcomeAchievements | [`OutcomeAchievement[]`](outcomeachievement-definition.md) | No | List of the outcome achievements by the customer in this session. |
| segmentAssignments | [`SessionSegmentAssignment[]`](sessionsegmentassignment-definition.md) | No | List of the segment assignments to the customer in this session. |
| attributes | `object` | No | Attributes projected from the session's event stream. |
| attributeLists | `object` | No | List-type attributes projected from the session's event stream. |
| browser | [`Browser`](browser-definition.md) | No | Customer's browser. |
| device | [`Device`](device-definition.md) | No | Customer's device. |
| geolocation | [`JourneyGeolocation`](journeygeolocation-definition.md) | No | Customer's geolocation. |
| ipAddress | `string` | No | Customer's IP address. |
| ipOrganization | `string` | No | Customer's IP-based organization or ISP name. |
| lastPage | [`JourneyPage`](journeypage-definition.md) | No | The webpage where the customer's last web interaction occurred. |
| mktCampaign | [`JourneyCampaign`](journeycampaign-definition.md) | No | Marketing / traffic source information. |
| referrer | [`Referrer`](referrer-definition.md) | No | Identifies the page URL that originally generated the request for the current page being viewed. |
| app | [`JourneyApp`](journeyapp-definition.md) | No | Application that the customer is interacting with (for app sessions). |
| sdkLibrary | [`SdkLibrary`](sdklibrary-definition.md) | No | SDK library used to generate the events for the session (for app and web sessions). |
| networkConnectivity | [`NetworkConnectivity`](networkconnectivity-definition.md) | No | Information relating to the device's network connectivity (for app sessions). |
| searchTerms | `string[]` | No | Search terms associated with the session. |
| userAgentString | `string` | No | String identifying the user agent. |
| durationInSeconds | `number` | No | Indicates how long the session has been active (valid for an individual device). |
| eventCount | `number` | Yes | The count of all events performed during the session. |
| pageviewCount | `number` | No | The count of all pageviews performed during the session. |
| screenviewCount | `number` | No | The count of all screenviews performed during the session. |
| lastEvent | [`SessionLastEvent`](sessionlastevent-definition.md) | Yes | Information about the most recent event in this session. |
| conversation | [`AddressableEntityRef`](addressableentityref-definition.md) | No | The conversation for this session. |
| lastConnectedQueue | [`ConnectedQueue`](connectedqueue-definition.md) | No | The last queue connected to this session. |
| lastConnectedUser | [`ConnectedUser`](connecteduser-definition.md) | No | The last user connected to this session. |
| lastUserDisposition | [`ConversationUserDisposition`](conversationuserdisposition-definition.md) | No | The last user disposition connected to this session. |
| conversationChannels | [`ConversationChannel[]`](conversationchannel-definition.md) | No | Represents the channels used for this conversation. |
| originatingDirection | `string` | No | The original direction of the conversation. |
| conversationSubject | `string` | No | The subject for the conversation, for example an email subject. |
| lastUserDisconnectType | `string` | No | Disconnect reason for the last user connected to the conversation. |
| lastAcdOutcome | `string` | No | Last ACD outcome for the conversation. |
| authenticated | `boolean` | Yes | Indicates whether or not the session is authenticated. |
| divisionIds | `string[]` | No | List of division IDs associated with the session. |
| lastScreen | `string` | No | The app screen name where the customer's last app interaction occurred. |
| selfUri | `string` | No | The URI for this object |
| createdDate | `string` | Yes | Timestamp indicating when the session was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| endedDate | `string` | No | Timestamp indicating when the session was ended. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| awayDate | `string` | No | Timestamp indicating when the visitor should be considered as away. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| idleDate | `string` | No | Timestamp indicating when the visitor should be considered as idle. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-11-26T23:43:17.788Z*