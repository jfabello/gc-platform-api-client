# `JourneyViewElementFilterNumberPredicate` Definition

A numeric filter on an element within a journey view

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| dimension | `string` | Yes | the element's attribute being filtered on |
| operator | `string` | No | Optional operator, default is Matches. Valid values: Matches |
| noValue | `boolean` | No | set this to true if no specific value to be considered |
| range | [`JourneyViewElementFilterRange`](journeyviewelementfilterrange-definition.md) | Yes | the range of comparators to filter on |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.742Z*