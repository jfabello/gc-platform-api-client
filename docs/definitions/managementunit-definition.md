# `ManagementUnit` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| businessUnit | [`BusinessUnitReference`](businessunitreference-definition.md) | No | The business unit to which this management unit belongs |
| startDayOfWeek | `string` | No | Start day of week for scheduling and forecasting purposes. Moving to Business Unit |
| timeZone | `string` | No | The time zone for the management unit in standard Olson format.  Moving to Business Unit |
| settings | [`ManagementUnitSettingsResponse`](managementunitsettingsresponse-definition.md) | No | The configuration settings for this management unit |
| metadata | [`WfmVersionedEntityMetadata`](wfmversionedentitymetadata-definition.md) | No | Version info metadata for this management unit. Deprecated, use settings.metadata |
| division | [`DivisionReference`](divisionreference-definition.md) | No | The division to which this entity belongs. |
| version | `number` | No | The version of the underlying entity.  Deprecated, use field from settings.metadata instead |
| dateModified | `string` | No | The date and time at which this entity was last modified.  Deprecated, use field from settings.metadata instead. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| modifiedBy | [`UserReference`](userreference-definition.md) | No | The user who last modified this entity.  Deprecated, use field from settings.metadata instead |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.013Z*