# `WebMessagingButtonResponse` Definition

Button response object representing the click of a structured message button, such as a quick reply.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | An ID assigned to the button response (Deprecated). |
| type | `string` | No | Describes the button that resulted in the Button Response. |
| text | `string` | Yes | The response text from the button click. |
| payload | `string` | Yes | The response payload associated with the clicked button. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.002Z*