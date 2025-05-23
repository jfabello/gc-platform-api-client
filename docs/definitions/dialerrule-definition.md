# `DialerRule` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The identifier of the rule. |
| name | `string` | Yes | The name of the rule. |
| order | `number` | No | The ranked order of the rule. Rules are processed from lowest number to highest. |
| category | `string` | Yes | The category of the rule. |
| conditions | [`Condition[]`](condition-definition.md) | Yes | A list of Conditions. All of the Conditions must evaluate to true to trigger the actions. |
| actions | [`DialerAction[]`](dialeraction-definition.md) | No | The list of actions to be taken if the conditions are true. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.672Z*