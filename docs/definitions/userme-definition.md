# `UserMe` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| division | [`Division`](division-definition.md) | No | The division to which this entity belongs. |
| chat | [`Chat`](chat-definition.md) | No |  |
| department | `string` | No |  |
| email | `string` | No |  |
| primaryContactInfo | [`Contact[]`](contact-definition.md) | No | Auto populated from addresses. |
| addresses | [`Contact[]`](contact-definition.md) | No | Email addresses and phone numbers for this user |
| state | `string` | No | The current state for this user. |
| title | `string` | No |  |
| username | `string` | No |  |
| manager | [`User`](user-definition.md) | No |  |
| images | [`Image[]`](image-definition.md) | No |  |
| version | `number` | Yes | Required when updating a user, this value should be the current version of the user.  The current version can be obtained with a GET on the user before doing a PATCH. |
| certifications | `string[]` | No |  |
| biography | [`Biography`](biography-definition.md) | No |  |
| employerInfo | [`EmployerInfo`](employerinfo-definition.md) | No |  |
| preferredName | `string` | No | Preferred full name of the agent |
| routingStatus | [`RoutingStatus`](routingstatus-definition.md) | No | ACD routing status |
| presence | [`UserPresence`](userpresence-definition.md) | No | Active presence |
| integrationPresence | [`UserPresence`](userpresence-definition.md) | No | Integration presence |
| conversationSummary | [`UserConversationSummary`](userconversationsummary-definition.md) | No | Summary of conversion statistics for conversation types. |
| outOfOffice | [`OutOfOffice`](outofoffice-definition.md) | No | Determine if out of office is enabled |
| geolocation | [`Geolocation`](geolocation-definition.md) | No | Current geolocation position |
| station | [`UserStations`](userstations-definition.md) | No | Effective, default, and last station information |
| authorization | [`UserAuthorization`](userauthorization-definition.md) | No | Roles and permissions assigned to the user |
| profileSkills | `string[]` | No | Profile skills possessed by the user |
| locations | [`Location[]`](location-definition.md) | No | The user placement at each site location. |
| groups | [`Group[]`](group-definition.md) | No | The groups the user is a member of |
| team | [`Team`](team-definition.md) | No | The team the user is a member of |
| workPlanBidRanks | [`WorkPlanBidRanks`](workplanbidranks-definition.md) | No | The WFM work plan bid rank settings for the user |
| skills | [`UserRoutingSkill[]`](userroutingskill-definition.md) | No | Routing (ACD) skills possessed by the user |
| languages | [`UserRoutingLanguage[]`](userroutinglanguage-definition.md) | No | Routing (ACD) languages possessed by the user |
| autoAnswerSettings | [`AutoAnswerSettings`](autoanswersettings-definition.md) | No | Auto answer settings for this user |
| acdAutoAnswer | `boolean` | No | acd auto answer |
| languagePreference | `string` | No | preferred language by the user |
| lastTokenIssued | [`OAuthLastTokenIssued`](oauthlasttokenissued-definition.md) | No |  |
| dateLastLogin | `string` | No | The last time the user logged in using username and password. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateWelcomeSent | `string` | No | The date & time the user was sent their welcome email. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| date | [`ServerDate`](serverdate-definition.md) | No | The PureCloud system date time. |
| geolocationSettings | [`GeolocationSettings`](geolocationsettings-definition.md) | No | Geolocation settings for user's organization. |
| organization | [`Organization`](organization-definition.md) | No | Organization details for this user. |
| presenceDefinitions | [`OrganizationPresence[]`](organizationpresence-definition.md) | No | The first 100 non-divisioned presence definitions for user's organization. |
| divisionedPresenceDefinitions | [`OrganizationPresenceDefinition[]`](organizationpresencedefinition-definition.md) | No | The presence definitions that the user has access to |
| locationDefinitions | [`LocationDefinition[]`](locationdefinition-definition.md) | No | The first 100 site locations for user's organization |
| orgAuthorization | [`DomainOrganizationRole[]`](domainorganizationrole-definition.md) | No | The first 100 organization roles, with applicable permission policies, for user's organization. |
| favorites | [`User[]`](user-definition.md) | No | The first 50 favorited users. |
| superiors | [`User[]`](user-definition.md) | No | The first 50 superiors of this user. |
| directReports | [`User[]`](user-definition.md) | No | The first 50 direct reports to this user. |
| adjacents | [`Adjacents`](adjacents-definition.md) | No | The first 50 superiors, direct reports, and siblings of this user. Mutually exclusive with superiors and direct reports expands. |
| routingSkills | [`RoutingSkill[]`](routingskill-definition.md) | No | The first 50 routing skills for user's organizations |
| fieldConfigs | [`FieldConfigs`](fieldconfigs-definition.md) | No | The field config for all entities types of user's organization |
| token | [`TokenInfo`](tokeninfo-definition.md) | No | Information about the current token |
| trustors | [`Trustor[]`](trustor-definition.md) | No | Organizations having this user as a trustee |
| orgProducts | [`DomainOrganizationProduct[]`](domainorganizationproduct-definition.md) | No | Products enabled in this organization |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.897Z*