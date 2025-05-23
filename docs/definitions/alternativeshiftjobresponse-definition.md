# `AlternativeShiftJobResponse` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| status | `string` | Yes | The status of the alternative shift job |
| type | `string` | Yes | The type of job |
| downloadUrl | `string` | No | The URL where completed results are available, only set if status == 'Complete' |
| error | [`ErrorBody`](errorbody-definition.md) | No | Any error information, only set if the status == 'Error' |
| viewOffersResults | [`AlternativeShiftOffersViewResponseTemplate`](alternativeshiftoffersviewresponsetemplate-definition.md) | No | Schema template for deserializing data returned from the downloadUrl. Use if type == 'ListOffers' or 'SearchOffers' |
| viewTradesResults | [`AlternativeShiftTradesViewResponseTemplate`](alternativeshifttradesviewresponsetemplate-definition.md) | No | Schema template for deserializing data returned from the downloadUrl. Use if type == 'ListUserTrades' or 'SearchTrades' |
| bulkUpdateTradesResults | [`AlternativeShiftBulkUpdateTradesResponseTemplate`](alternativeshiftbulkupdatetradesresponsetemplate-definition.md) | No | Schema template for deserializing data returned from the downloadUrl. Use if type == 'BulkUpdateTrades' |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.044Z*