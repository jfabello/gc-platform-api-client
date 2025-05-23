# `ScimV2SchemaDefinition` Definition

Defines a SCIM schema.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The ID of the SCIM resource. Set by the service provider. "caseExact" is set to "true". "mutability" is set to "readOnly". "returned" is set to "always". |
| name | `string` | No | The name of the schema. |
| description | `string` | No | The description of the schema. |
| attributes | [`ScimV2SchemaAttribute[]`](scimv2schemaattribute-definition.md) | No | The list of service provider attributes. |
| meta | [`ScimMetadata`](scimmetadata-definition.md) | No | The metadata of the SCIM resource. Only "location" and "resourceType" are set for "Schema" resources. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.850Z*