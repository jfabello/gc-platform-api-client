# `Predictor` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| queues | [`AddressableEntityRef[]`](addressableentityref-definition.md) | Yes | The queue IDs associated with the predictor. |
| kpi | `string` | Yes | The KPI that the predictor attempts to maximize/minimize. |
| routingTimeoutSeconds | `number` | No | Number of seconds allocated to predictive routing before attempting a different routing method. This is a value between 12 and 900 seconds. |
| schedule | [`PredictorSchedule`](predictorschedule-definition.md) | No | The predictor schedule that determines when the predictor is used for routing interactions. |
| state | `string` | No | The predictor state. |
| dateCreated | `string` | No | DateTime indicating when the predictor was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | DateTime indicating when the predictor was last updated. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| workloadBalancingConfig | [`PredictorWorkloadBalancing`](predictorworkloadbalancing-definition.md) | No | The predictor balancing configuration to enable workload balancing. |
| errorCode | `string` | No | Predictor error code - optional details on why the predictor went into error state. |
| models | [`PredictorModelBrief[]`](predictormodelbrief-definition.md) | No | Predictor's models |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.845Z*