# `PostActionInput` Definition

Definition of an Action to be created or updated.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| category | `string` | Yes | Category of action, Can be up to 256 characters long |
| name | `string` | Yes | Name of action, Can be up to 256 characters long |
| integrationId | `string` | Yes | The ID of the integration this action is associated to |
| config | [`ActionConfig`](actionconfig-definition.md) | Yes | Configuration to support request and response processing |
| contract | [`ActionContractInput`](actioncontractinput-definition.md) | Yes | Action contract |
| secure | `boolean` | No | Indication of whether or not the action is designed to accept sensitive data |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.718Z*