# `KnowledgeDocumentVersionVariation` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the variation. |
| dateCreated | `string` | No | The creation date-time for the document variation. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | The last modification date-time for the document variation. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| contexts | [`DocumentVariationContext[]`](documentvariationcontext-definition.md) | Yes | The context values associated with the variation. |
| priority | `number` | No | The priority of the variation. |
| name | `string` | No | The name of the variation. |
| body | [`DocumentBodyResponse`](documentbodyresponse-definition.md) | No | The content for the variation. |
| selfUri | `string` | No | The URI for this object |
| documentVersion | [`AddressableEntityRef`](addressableentityref-definition.md) | No | Reference to the document version to which the variation is associated with. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.763Z*