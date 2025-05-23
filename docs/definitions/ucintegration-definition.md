# `UCIntegration` Definition

UC Integration UI configuration data

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| ucIntegrationKey | `string` | Yes | ucIntegrationKey |
| integrationPresenceSource | `string` | Yes | integrationPresenceType |
| pbxPermission | `string` | Yes | pbxPermission |
| icon | [`UCIcon`](ucicon-definition.md) | Yes | icon |
| badgeIcons | `object` | Yes | badgeIcon |
| i10n | `object` | Yes | i10n |
| polledPresence | `boolean` | Yes | polledPresence |
| userPermissions | `string[]` | Yes | userPermissions |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.896Z*