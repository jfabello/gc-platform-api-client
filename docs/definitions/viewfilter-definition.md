# `ViewFilter` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| mediaTypes | `string[]` | No | The media types are used to filter the view |
| queueIds | `string[]` | No | The queue ids are used to filter the view |
| skillIds | `string[]` | No | The skill ids are used to filter the view |
| assignedSkillIds | `string[]` | No | The assigned user skill ids are used to filter the view |
| skillGroups | `string[]` | No | The skill groups used to filter the view |
| languageIds | `string[]` | No | The language ids are used to filter the view |
| assignedLanguageIds | `string[]` | No | The assigned user language ids are used to filter the view |
| languageGroups | `string[]` | No | The language groups used to filter the view |
| directions | `string[]` | No | The directions are used to filter the view |
| originatingDirections | `string[]` | No | The list of orginating directions used to filter the view |
| wrapUpCodes | `string[]` | No | The wrap up codes are used to filter the view |
| dnisList | `string[]` | No | The dnis list is used to filter the view |
| sessionDnisList | `string[]` | No | The list of session dnis used to filter the view |
| filterQueuesByUserIds | `string[]` | No | The user ids are used to fetch associated queues for the view |
| filterUsersByQueueIds | `string[]` | No | The queue ids are used to fetch associated users for the view |
| userIds | `string[]` | No | The user ids are used to filter the view |
| managementUnitIds | `string[]` | No | The management unit ids are used to filter the view |
| addressTos | `string[]` | No | The address To values are used to filter the view |
| addressFroms | `string[]` | No | The address from values are used to filter the view |
| outboundCampaignIds | `string[]` | No | The outbound campaign ids are used to filter the view |
| outboundContactListIds | `string[]` | No | The outbound contact list ids are used to filter the view |
| contactIds | `string[]` | No | The contact ids are used to filter the view |
| externalContactIds | `string[]` | No | The external contact ids are used to filter the view |
| externalOrgIds | `string[]` | No | The external org ids are used to filter the view |
| aniList | `string[]` | No | The ani list ids are used to filter the view |
| durationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The durations in milliseconds used to filter the view |
| acdDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The acd durations in milliseconds used to filter the view |
| talkDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The talk durations in milliseconds used to filter the view |
| acwDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The acw durations in milliseconds used to filter the view |
| handleDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The handle durations in milliseconds used to filter the view |
| holdDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The hold durations in milliseconds used to filter the view |
| abandonDurationsMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The abandon durations in milliseconds used to filter the view |
| evaluationScore | [`NumericRange`](numericrange-definition.md) | No | The evaluationScore is used to filter the view |
| evaluationCriticalScore | [`NumericRange`](numericrange-definition.md) | No | The evaluationCriticalScore is used to filter the view |
| evaluationFormIds | `string[]` | No | The evaluation form ids are used to filter the view |
| evaluatedAgentIds | `string[]` | No | The evaluated agent ids are used to filter the view |
| evaluatorIds | `string[]` | No | The evaluator ids are used to filter the view |
| transferred | `boolean` | No | Indicates filtering for transfers |
| abandoned | `boolean` | No | Indicates filtering for abandons |
| answered | `boolean` | No | Indicates filtering for answered interactions |
| messageTypes | `string[]` | No | The message media types used to filter the view |
| divisionIds | `string[]` | No | The divison Ids used to filter the view |
| surveyFormIds | `string[]` | No | The survey form ids used to filter the view |
| surveyTotalScore | [`NumericRange`](numericrange-definition.md) | No | The survey total score used to filter the view |
| surveyNpsScore | [`NumericRange`](numericrange-definition.md) | No | The survey NPS score used to filter the view |
| mos | [`NumericRange`](numericrange-definition.md) | No | The desired range for mos values |
| surveyQuestionGroupScore | [`NumericRange`](numericrange-definition.md) | No | The survey question group score used to filter the view |
| surveyPromoterScore | [`NumericRange`](numericrange-definition.md) | No | The survey promoter score used to filter the view |
| surveyFormContextIds | `string[]` | No | The list of survey form context ids used to filter the view |
| conversationIds | `string[]` | No | The list of conversation ids used to filter the view |
| sipCallIds | `string[]` | No | The list of SIP call ids used to filter the view |
| isEnded | `boolean` | No | Indicates filtering for ended |
| isSurveyed | `boolean` | No | Indicates filtering for survey |
| surveyScores | [`NumericRange[]`](numericrange-definition.md) | No | The list of survey score ranges used to filter the view |
| promoterScores | [`NumericRange[]`](numericrange-definition.md) | No | The list of promoter score ranges used to filter the view |
| isCampaign | `boolean` | No | Indicates filtering for campaign |
| surveyStatuses | `string[]` | No | The list of survey statuses used to filter the view |
| conversationProperties | [`ConversationProperties`](conversationproperties-definition.md) | No | A grouping of conversation level filters |
| isBlindTransferred | `boolean` | No | Indicates filtering for blind transferred |
| isConsulted | `boolean` | No | Indicates filtering for consulted |
| isConsultTransferred | `boolean` | No | Indicates filtering for consult transferred |
| remoteParticipants | `string[]` | No | The list of remote participants used to filter the view |
| flowIds | `string[]` | No | The list of flow Ids |
| flowOutcomeIds | `string[]` | No | A list of outcome ids of the flow |
| flowOutcomeValues | `string[]` | No | A list of outcome values of the flow |
| flowDestinationTypes | `string[]` | No | The list of destination types of the flow |
| flowDisconnectReasons | `string[]` | No | The list of reasons for the flow to disconnect |
| flowTypes | `string[]` | No | A list of types of the flow |
| flowEntryTypes | `string[]` | No | A list of types of the flow entry |
| flowEntryReasons | `string[]` | No | A list of reasons of flow entry |
| flowVersions | `string[]` | No | A list of versions of a flow |
| groupIds | `string[]` | No | A list of directory group ids |
| hasJourneyCustomerId | `boolean` | No | Indicates filtering for journey customer id |
| hasJourneyActionMapId | `boolean` | No | Indicates filtering for Journey action map id |
| hasJourneyVisitId | `boolean` | No | Indicates filtering for Journey visit id |
| hasMedia | `boolean` | No | Indicates filtering for presence of MMS media |
| roleIds | `string[]` | No | The role Ids used to filter the view |
| reportsTos | `string[]` | No | The report to user IDs used to filter the view |
| locationIds | `string[]` | No | The location Ids used to filter the view |
| flowOutTypes | `string[]` | No | A list of flow out types |
| providerList | `string[]` | No | A list of providers |
| callbackNumberList | `string[]` | No | A list of callback numbers or substrings of numbers (ex: ["317", "13172222222"]) |
| callbackInterval | `string` | No | An interval of time to filter for scheduled callbacks. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss |
| usedRoutingTypes | `string[]` | No | A list of routing types used |
| requestedRoutingTypes | `string[]` | No | A list of routing types requested |
| hasAgentAssistId | `boolean` | No | Indicates filtering for agent assist id |
| transcripts | [`Transcripts[]`](transcripts-definition.md) | No | A list of transcript contents requested |
| transcriptLanguages | `string[]` | No | A list of transcript languages requested |
| participantPurposes | `string[]` | No | A list of participant purpose requested |
| showFirstQueue | `boolean` | No | Indicates filtering for first queue data |
| teamIds | `string[]` | No | The team ids used to filter the view data |
| filterUsersByTeamIds | `string[]` | No | The team ids are used to fetch associated users for the view |
| journeyActionMapIds | `string[]` | No | The journey action map ids are used to fetch action maps for the associated view |
| journeyOutcomeIds | `string[]` | No | The journey outcome ids are used to fetch outcomes for the associated view |
| journeySegmentIds | `string[]` | No | The journey segment ids are used to fetch segments for the associated view |
| journeyActionMapTypes | `string[]` | No | The journey action map types are used to filter action map data for the associated view |
| developmentRoleList | `string[]` | No | The list of development roles used to filter agent development view |
| developmentTypeList | `string[]` | No | The list of development types used to filter agent development view |
| developmentStatusList | `string[]` | No | The list of development status used to filter agent development view |
| developmentModuleIds | `string[]` | No | The list of development moduleIds used to filter agent development view |
| developmentActivityOverdue | `boolean` | No | Indicates filtering for development activities |
| customerSentimentScore | [`NumericRange`](numericrange-definition.md) | No | The customer sentiment score used to filter the view |
| customerSentimentTrend | [`NumericRange`](numericrange-definition.md) | No | The customer sentiment trend used to filter the view |
| flowTransferTargets | `string[]` | No | The list of transfer targets used to filter flow data |
| developmentName | `string` | No | Filter for development name |
| topicIds | `string[]` | No | Represents the topics detected in the transcript |
| externalTags | `string[]` | No | The list of external Tags used to filter conversation data |
| isNotResponding | `boolean` | No | Indicates filtering for not responding users |
| isAuthenticated | `boolean` | No | Indicates filtering for the authenticated chat |
| botIds | `string[]` | No | The list of bot IDs used to filter bot views |
| botVersions | `string[]` | No | The list of bot versions used to filter bot views |
| botMessageTypes | `string[]` | No | The list of bot message types used to filter bot views |
| botProviderList | `string[]` | No | The list of bot providers used to filter bot views |
| botProductList | `string[]` | No | The list of bot products used to filter bot views |
| botRecognitionFailureReasonList | `string[]` | No | The list of bot recognition failure reasons used to filter bot views |
| botIntentList | `string[]` | No | The list of bot intents used to filter bot views |
| botFinalIntentList | `string[]` | No | The list of bot final intents used to filter bot views |
| botSlotList | `string[]` | No | The list of bot slots used to filter bot views |
| botResultList | `string[]` | No | The list of bot results used to filter bot views |
| blockedReasons | `string[]` | No | The list of blocked reason used to filter action map constraints views |
| isRecorded | `boolean` | No | Indicates filtering for recorded |
| hasEvaluation | `boolean` | No | Indicates filtering for evaluation |
| hasScoredEvaluation | `boolean` | No | Indicates filtering for scored evaluation |
| emailDeliveryStatusList | `string[]` | No | The list of email delivery statuses used to filter views |
| isAgentOwnedCallback | `boolean` | No | Indicates filtering for agent owned callback interactions |
| agentCallbackOwnerIds | `string[]` | No | The list of callback owners used to filter interactions |
| transcriptTopics | [`TranscriptTopics[]`](transcripttopics-definition.md) | No | The list of transcript topics requested in filter |
| journeyFrequencyCapReasons | `string[]` | No | The list of frequency cap reasons to filter offer constraints |
| journeyBlockingActionMapIds | `string[]` | No | The list of blocking action maps to filter offer constraints |
| journeyActionTargetIds | `string[]` | No | The list of action targets to filter offer constraints |
| journeyBlockingScheduleGroupIds | `string[]` | No | The list of blocking schedule groups to filter offer constraints |
| journeyBlockingEmergencyScheduleGroupIds | `string[]` | No | The list of emergency schedule groups to filter offer constraints |
| journeyUrlEqualConditions | `string[]` | No | The list of url equal conditions to filter offer constraints |
| journeyUrlNotEqualConditions | `string[]` | No | The list of url not equal conditions to filter offer constraints |
| journeyUrlStartsWithConditions | `string[]` | No | The list of url starts with conditions to filter offer constraints |
| journeyUrlEndsWithConditions | `string[]` | No | The list of url ends with conditions to filter offer constraints |
| journeyUrlContainsAnyConditions | `string[]` | No | The list of url contains any conditions to filter offer constraints |
| journeyUrlNotContainsAnyConditions | `string[]` | No | The list of url not contains any conditions to filter offer constraints |
| journeyUrlContainsAllConditions | `string[]` | No | The list of url contains all conditions to filter offer constraints |
| journeyUrlNotContainsAllConditions | `string[]` | No | The list of url not contains all conditions to filter offer constraints |
| flowMilestoneIds | `string[]` | No | The list of flow milestones to filter exports |
| isAssessmentPassed | `boolean` | No | Filter to indicate if Agent passed assessment or not |
| conversationInitiators | `string[]` | No | The list to filter based on Brands (Bot/User/Agent) or End User who initiated the first message in the conversation |
| hasCustomerParticipated | `boolean` | No | Indicates if the customer has participated in an initiated conversation |
| isAcdInteraction | `boolean` | No | Filter to indicate if interaction was ACD or non-ACD |
| hasFax | `boolean` | No | Filters to indicate if interaction has FAX |
| dataActionIds | `string[]` | No | The list of Data Action IDs  |
| actionCategoryName | `string` | No | Deprecated - Please use integrationIds instead |
| integrationIds | `string[]` | No | The list of integration IDs for Data Action |
| responseStatuses | `string[]` | No | The list of Response codes for Data Action |
| availableDashboard | `string` | No | Filter to indicate the availability of the dashboard is public or private. |
| favouriteDashboard | `boolean` | No | Filter to indicate whether the dashboard is favorite or unfavorite. |
| myDashboard | `boolean` | No | Filter to indicate the dashboard owned by the user. |
| stationErrors | `string[]` | No | The list of agent errors that are related to station |
| canonicalContactIds | `string[]` | No | The canonical contact ids are used to filter the view |
| alertRuleIds | `string[]` | No | The list of Alert Rule IDs |
| evaluationFormContextIds | `string[]` | No | The list of Evaluation Form Context IDs |
| evaluationStatuses | `string[]` | No | The evaluation statuses that are used to filter the view |
| workbinIds | `string[]` | No | The list of Workbin IDs |
| worktypeIds | `string[]` | No | The list of Worktype IDs |
| workitemIds | `string[]` | No | The list of Workitem IDs |
| workitemAssigneeIds | `string[]` | No | The list of Workitem Assignee IDs |
| workitemStatuses | `string[]` | No | The list of Workitem Statuses IDs |
| isAnalyzedForSensitiveData | `boolean` | No | Deprecated - Use hasPciData or hasPiiData instead. |
| hasSensitiveData | `boolean` | No | Deprecated. Use hasPciData or hasPiiData instead. |
| hasPciData | `boolean` | No | Filter to indicate the transcript contains Pci data. |
| hasPiiData | `boolean` | No | Filter to indicate the transcript contains Pii data. |
| subPath | `string` | No | Filter for Sub Path |
| userState | `string` | No | The user supplied state value in the view |
| isClearedByCustomer | `boolean` | No | Filter to indicate if the customer cleared the conversation. |
| evaluationAssigneeIds | `string[]` | No | The evaluation assignee ids that are used to filter the view. |
| evaluationAssigned | `boolean` | No | Filter to indicate that the user has no assigned evaluation. |
| assistantIds | `string[]` | No | The assistant ids that are used to filter the view. |
| knowledgeBaseIds | `string[]` | No | The knowledge base ids that are used to filter the view. |
| isParked | `boolean` | No | Filter to indicate if the interactions are parked. |
| agentEmpathyScore | [`NumericRange`](numericrange-definition.md) | No | The agentEmpathyScore is used to filter the view |
| surveyTypes | `string[]` | No | The surveyTypes is used to filter the view |
| surveyResponseStatuses | `string[]` | No | The list of Survey Response Status |
| botFlowTypes | `string[]` | No | The botFlowTypes is used to filter the view |
| agentTalkDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The agent talk durations in milliseconds used to filter the view |
| customerTalkDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The customer talk durations in milliseconds used to filter the view |
| overtalkDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The overtalk durations in milliseconds used to filter the view |
| silenceDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The silence durations in milliseconds used to filter the view |
| acdDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The acd durations in milliseconds used to filter the view |
| ivrDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The ivr durations in milliseconds used to filter the view |
| otherDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The other (hold/music) durations in milliseconds used to filter the view |
| agentTalkPercentage | [`NumericRange`](numericrange-definition.md) | No | The agent talk percentage used to filter the view |
| customerTalkPercentage | [`NumericRange`](numericrange-definition.md) | No | The customer talk percentage used to filter the view |
| overtalkPercentage | [`NumericRange`](numericrange-definition.md) | No | The overtalk percentage used to filter the view |
| silencePercentage | [`NumericRange`](numericrange-definition.md) | No | The silence percentage used to filter the view |
| acdPercentage | [`NumericRange`](numericrange-definition.md) | No | The acd percentage used to filter the view |
| ivrPercentage | [`NumericRange`](numericrange-definition.md) | No | The ivr percentage used to filter the view |
| otherPercentage | [`NumericRange`](numericrange-definition.md) | No | The other (hold/music percentage used to filter the view |
| overtalkInstances | [`NumericRange`](numericrange-definition.md) | No | The overtalk instance range used to filter the view |
| isScreenRecorded | `boolean` | No | Filter to indicate if the screen is recorded |
| screenMonitorUserIds | `string[]` | No | The list of Screen Monitor User Ids |
| dashboardState | `string` | No | The state of dashboard being filtered |
| dashboardType | `string` | No | The type of dashboard being filtered |
| dashboardAccessFilter | `string` | No | The type of dashboard access being filtered |
| transcriptDurationMilliseconds | [`NumericRange[]`](numericrange-definition.md) | No | The transcript durations in milliseconds used to filter the view |
| workitemsStatuses | [`WorkitemStatusFilter[]`](workitemstatusfilter-definition.md) | No | The list of workitem status with worktype |
| socialCountries | `string[]` | No | List of countries for social filtering |
| socialLanguages | `string[]` | No | List of languages for social filtering |
| socialChannels | `string[]` | No | List of channels for social filtering |
| socialSentimentCategory | `string[]` | No | The sentiment of the social post |
| socialTopicIds | `string[]` | No | The list of topicIds for social filtering |
| socialIngestionRuleIds | `string[]` | No | The list of ingestion ruleIds for social filtering |
| socialConversationCreated | `boolean` | No | Filter to indicate if the post has created a conversation |
| socialContentType | `string[]` | No | The list of content Type for social filtering |
| socialKeywords | [`SocialKeyword[]`](socialkeyword-definition.md) | No | The list of keywords for social filtering |
| socialPostEscalated | `boolean` | No | Filter to indicate if the post is escalated |
| socialClassifications | `string[]` | No | Indicates if a social message was public or private |
| filterUsersByManagerIds | `string[]` | No | The manager ids used to fetch associated users for the view |
| slideshowIds | `string[]` | No | List of Dashboard slideshowIds to be filtered |
| conferenced | `boolean` | No | Filter to indicate if the conversation has conference |
| video | `boolean` | No | Filter to indicate if the conversation has video |
| linkedInteraction | `boolean` | No | Filter to indicate if the conversation has linked interaction |
| recommendationSources | `string[]` | No | List of recommendation sources for filtering recommendation details pane |
| evaluationRole | `string` | No | Sets the role when viewing agent evaluations |
| comparisonQueueIds | `string[]` | No | The queue ids are used to for comparison to the primary queue filter in reporting |
| viewMetrics | `string[]` | No | A list of metrics selected for the view |
| timelineCategories | `string[]` | No | A list of timeline categories |
| acw | `boolean` | No | Filter to indicate for acw state |
| segmentTypes | `string[]` | No | A list of filtered segment types |
| programIds | `string[]` | No | A list of program ids for filtering |
| categoryIds | `string[]` | No | A list of category ids for filtering |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.498Z*