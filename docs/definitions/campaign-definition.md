# `Campaign` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The name of the Campaign. |
| dateCreated | `string` | No | Creation time of the entity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Last modified time of the entity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| version | `number` | No | Required for updates, must match the version number of the most recent update |
| contactList | [`DomainEntityRef`](domainentityref-definition.md) | Yes | The ContactList for this Campaign to dial. |
| queue | [`DomainEntityRef`](domainentityref-definition.md) | No | The Queue for this Campaign to route calls to. Required for all dialing modes except agentless. |
| dialingMode | `string` | Yes | The strategy this Campaign will use for dialing. |
| script | [`DomainEntityRef`](domainentityref-definition.md) | No | The Script to be displayed to agents that are handling outbound calls. Required for all dialing modes except agentless. |
| edgeGroup | [`DomainEntityRef`](domainentityref-definition.md) | No | The EdgeGroup that will place the calls. Required for all dialing modes except preview. |
| site | [`DomainEntityRef`](domainentityref-definition.md) | No | The identifier of the site to be used for dialing; can be set in place of an edge group. |
| campaignStatus | `string` | No | The current status of the Campaign. A Campaign may be turned 'on' or 'off'. Required for updates. |
| phoneColumns | [`PhoneColumn[]`](phonecolumn-definition.md) | Yes | The ContactPhoneNumberColumns on the ContactList that this Campaign should dial. |
| abandonRate | `number` | No | The targeted compliance abandon rate percentage. Required for power and predictive campaigns. |
| dncLists | [`DomainEntityRef[]`](domainentityref-definition.md) | No | DncLists for this Campaign to check before placing a call. |
| callableTimeSet | [`DomainEntityRef`](domainentityref-definition.md) | No | The callable time set for this campaign to check before placing a call. |
| callAnalysisResponseSet | [`DomainEntityRef`](domainentityref-definition.md) | No | The call analysis response set to handle call analysis results from the edge. Required for all dialing modes except preview. |
| errors | [`RestErrorDetail[]`](resterrordetail-definition.md) | No | A list of current error conditions associated with the campaign. |
| callerName | `string` | Yes | The caller id name to be displayed on the outbound call. |
| callerAddress | `string` | Yes | The caller id phone number to be displayed on the outbound call. |
| outboundLineCount | `number` | No | The number of outbound lines to be concurrently dialed. Only applicable to non-preview campaigns; only required for agentless. |
| ruleSets | [`DomainEntityRef[]`](domainentityref-definition.md) | No | Rule sets to be applied while this campaign is dialing. |
| skipPreviewDisabled | `boolean` | No | Whether or not agents can skip previews without placing a call. Only applicable for preview campaigns. |
| previewTimeOutSeconds | `number` | No | The number of seconds before a call will be automatically placed on a preview. A value of 0 indicates no automatic placement of calls. Only applicable to preview campaigns. |
| alwaysRunning | `boolean` | No | Indicates (when true) that the campaign will remain on after contacts are depleted, allowing additional contacts to be appended/added to the contact list and processed by the still-running campaign. The campaign can still be turned off manually. |
| contactSort | [`ContactSort`](contactsort-definition.md) | No | The order in which to sort contacts for dialing, based on a column. |
| contactSorts | [`ContactSort[]`](contactsort-definition.md) | No | The order in which to sort contacts for dialing, based on up to four columns. |
| noAnswerTimeout | `number` | No | How long to wait before dispositioning a call as 'no-answer'. Default 30 seconds. Only applicable to non-preview campaigns. |
| callAnalysisLanguage | `string` | No | The language the edge will use to analyze the call. |
| priority | `number` | No | The priority of this campaign relative to other campaigns that are running on the same queue. 5 is the highest priority, 1 the lowest. |
| contactListFilters | [`DomainEntityRef[]`](domainentityref-definition.md) | No | Filter to apply to the contact list before dialing. Currently a campaign can only have one filter applied. |
| division | [`DomainEntityRef`](domainentityref-definition.md) | No | The division this campaign belongs to. |
| agentOwnedColumn | `string` | No | Name of the contact list column containing the id of the agent who owns the record. Only applicable to preview campaigns. |
| dynamicContactQueueingSettings | [`DynamicContactQueueingSettings`](dynamiccontactqueueingsettings-definition.md) | No | Settings for dynamic queueing of contacts. |
| skillColumns | `string[]` | No | The skill columns on the ContactList that this Campaign should take into account when dialing |
| maxCallsPerAgent | `number` | No | The maximum number of calls that can be placed per agent on this campaign |
| maxCallsPerAgentDecimal | `number` | No | The maximum number of calls that can be placed per agent on this campaign with decimal precision |
| callbackAutoAnswer | `boolean` | No | The option manages the auto-answer callback calls |
| dynamicLineBalancingSettings | [`DynamicLineBalancingSettings`](dynamiclinebalancingsettings-definition.md) | No | Dynamic line balancing settings |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.576Z*