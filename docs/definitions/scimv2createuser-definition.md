# `ScimV2CreateUser` Definition

Defines the creation of a SCIM user.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| schemas | `string[]` | No | The list of supported schemas. |
| active | `boolean` | No | Indicates whether the user's administrative status is active. |
| userName | `string` | Yes | The user's Genesys Cloud email address. Must be unique. |
| displayName | `string` | Yes | The display name of the user. |
| password | `string` | No | The new password for the Genesys Cloud user. Does not return an existing password. When creating a user, if a password is not supplied, then a password will be randomly generated that is 40 characters in length and contains five characters from each of the password policy groups. |
| title | `string` | No | The user's title. |
| phoneNumbers | [`ScimPhoneNumber[]`](scimphonenumber-definition.md) | No | The list of the user's phone numbers. |
| emails | [`ScimEmail[]`](scimemail-definition.md) | No | The list of the user's email addresses. |
| externalId | `string` | No | The external ID of the user. Set by the provisioning client. "caseExact" is set to "true". "mutability" is set to "readWrite". |
| groups | [`ScimV2GroupReference[]`](scimv2groupreference-definition.md) | No | The list of groups that the user is a member of. This list is immutable per SCIM RFC and may only be updated using the GROUPS resource endpoint. |
| roles | [`ScimUserRole[]`](scimuserrole-definition.md) | No | The list of roles assigned to the user. |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User | [`ScimV2EnterpriseUser`](scimv2enterpriseuser-definition.md) | No | The URI of the schema for the enterprise user. |
| urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User | [`ScimUserExtensions`](scimuserextensions-definition.md) | No | The URI of the schema for the Genesys Cloud user. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.853Z*