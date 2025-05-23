# `DataTable` Definition

Contains a metadata representation for a JSON schema stored in DataTables along with an optional field for the schema itself

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| division | [`WritableDivision`](writabledivision-definition.md) | No | The division to which this entity belongs. |
| description | `string` | No | The description from the JSON schema (equates to the Description field on the JSON schema.) |
| schema | [`JsonSchemaDocument`](jsonschemadocument-definition.md) | No | the schema as stored in the system. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.602Z*