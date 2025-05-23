# `ContentDatePicker` Definition

DatePicker content object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| title | `string` | No | Text to show in the title. |
| subtitle | `string` | No | Text to show in the description. |
| imageUrl | `string` | No | URL of an image |
| dateMinimum | `string` | No | The minimum Date Enabled in the datepicker calendar. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateMaximum | `string` | No | The maximum Date Enabled in the datepicker calendar. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| availableTimes | [`ContentDatePickerAvailableTime[]`](contentdatepickeravailabletime-definition.md) | Yes | An array of available times objects. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.782Z*