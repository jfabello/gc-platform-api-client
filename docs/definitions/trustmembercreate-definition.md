# `TrustMemberCreate` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | Yes | Trustee User or Group Id |
| roleIds | `string[]` | No | The list of roles to be granted to this user or group. Roles will be granted in all divisions. |
| roleDivisions | [`RoleDivisionGrants`](roledivisiongrants-definition.md) | No | The list of trustor organization roles granting this user or group access paired with the divisions for those roles. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.803Z*