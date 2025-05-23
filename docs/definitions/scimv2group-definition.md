# `ScimV2Group` Definition

Defines a SCIM group.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The ID of the SCIM resource. Set by the service provider. "caseExact" is set to "true". "mutability" is set to "readOnly". "returned" is set to "always". |
| schemas | `string[]` | No | The list of supported schemas. |
| displayName | `string` | Yes | The display name of the group. |
| externalId | `string` | No | The external ID of the group. Set by the provisioning client. "caseExact" is set to "true". "mutability" is set to "readWrite". |
| members | [`ScimV2MemberReference[]`](scimv2memberreference-definition.md) | No | The list of members in the group. |
| meta | [`ScimMetadata`](scimmetadata-definition.md) | No | The metadata of the SCIM resource. Metadata is defined as immutable per SCIM RFC. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.850Z*