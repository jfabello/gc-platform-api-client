# `JourneyCustomer` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | An ID of a customer within the Journey System at a point-in-time.  Note that a customer entity can have multiple customerIds based on the stitching process.  Depending on the context within the PureCloud conversation, this may or may not be mutable. |
| idType | `string` | Yes | The type of the customerId within the Journey System (e.g. cookie). |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.567Z*