# `CreateBusinessUnitSettingsRequest` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| startDayOfWeek | `string` | Yes | The start day of week for this business unit |
| timeZone | `string` | Yes | The time zone for this business unit, using the Olsen tz database format |
| shortTermForecasting | [`BuShortTermForecastingSettings`](bushorttermforecastingsettings-definition.md) | No | Short term forecasting settings |
| scheduling | [`BuSchedulingSettingsRequest`](buschedulingsettingsrequest-definition.md) | No | Scheduling settings |
| notifications | [`BuNotificationSettingsRequest`](bunotificationsettingsrequest-definition.md) | No | Notification settings |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.016Z*