# `Address` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | `string` | No | This will be nameRaw if present, or a locality lookup of the address field otherwise. |
| nameRaw | `string` | No | The name as close to the bits on the wire as possible. |
| addressNormalized | `string` | No | The normalized address. This field is acquired from the Address Normalization Table.  The addressRaw could have gone through some transformations, such as only using the numeric portion, before being run through the Address Normalization Table. |
| addressRaw | `string` | No | The address as close to the bits on the wire as possible. |
| addressDisplayable | `string` | No | The displayable address. This field is acquired from the Address Normalization Table.  The addressRaw could have gone through some transformations, such as only using the numeric portion, before being run through the Address Normalization Table. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.561Z*