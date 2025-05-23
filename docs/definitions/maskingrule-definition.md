# `MaskingRule` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | Masking rule name. |
| description | `string` | No | Description about masking rule. |
| substituteCharacter | `string` | Yes | Replacement character for masked text character. |
| definition | `string` | Yes | Definition of masking rule (a valid regex or builtin AI based mask name). |
| enabled | `boolean` | Yes | True/False |
| type | `string` | Yes | Masking rule type |
| integrations | `string[]` | No | Associated integration channels |
| dateCreated | `string` | No | Date when the rule was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Date when the rule was modified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.602Z*