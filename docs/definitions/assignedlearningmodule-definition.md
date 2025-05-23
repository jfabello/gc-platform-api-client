# `AssignedLearningModule` Definition

Learning module response

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The name of learning module |
| excludedFromCatalog | `boolean` | No | If true, learning module is excluded when retrieving modules for manual assignment |
| createdBy | [`UserReference`](userreference-definition.md) | No | The user who created learning module |
| dateCreated | `string` | No | The date/time learning module was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedBy | [`UserReference`](userreference-definition.md) | No | The user who modified learning module |
| dateModified | `string` | No | The date/time learning module was modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| version | `number` | No | The version of published learning module |
| externalId | `string` | No | The external ID of the learning module |
| source | `string` | No | The source of the learning module |
| rule | [`LearningModuleRule`](learningmodulerule-definition.md) | No | The rule for learning module; read-only, and only populated when requested via expand param. |
| enforceContentOrder | `boolean` | No | If true, learning module content should be viewed one by one in order |
| reviewAssessmentResults | [`ReviewAssessmentResults`](reviewassessmentresults-definition.md) | No | Allows to view Assessment results in detail |
| currentAssignments | [`LearningAssignment[]`](learningassignment-definition.md) | No | The current assignments for the requested users |
| selfUri | `string` | No | The URI for this object |
| isArchived | `boolean` | No | If true, learning module is archived |
| isPublished | `boolean` | No | If true, learning module is published |
| description | `string` | No | The description of learning module |
| completionTimeInDays | `number` | Yes | The completion time of learning module in days |
| type | `string` | No | The type for the learning module |
| informSteps | [`LearningModuleInformStep[]`](learningmoduleinformstep-definition.md) | No | The list of inform steps in a learning module |
| assessmentForm | [`AssessmentForm`](assessmentform-definition.md) | No | The assessment form for learning module |
| summaryData | [`LearningModuleSummary`](learningmodulesummary-definition.md) | No | The learning module summary data |
| reassignSummaryData | [`LearningModuleReassignSummary`](learningmodulereassignsummary-definition.md) | No | The learning module reassign summary data |
| coverArt | [`LearningModuleCoverArtResponse`](learningmodulecoverartresponse-definition.md) | No | The cover art for the learning module |
| lengthInMinutes | `number` | No | The recommended time in minutes to complete the module |
| archivalMode | `string` | No | The mode of archival for learning module |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.092Z*