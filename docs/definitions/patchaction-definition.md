# `PatchAction` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| mediaType | `string` | Yes | Media type of action. |
| actionTemplate | [`ActionMapActionTemplate`](actionmapactiontemplate-definition.md) | No | Action template associated with the action map. |
| actionTargetId | `string` | No | Action target ID. |
| isPacingEnabled | `boolean` | No | Whether this action should be throttled. |
| props | [`PatchActionProperties`](patchactionproperties-definition.md) | No | Additional properties. |
| architectFlowFields | [`ArchitectFlowFields`](architectflowfields-definition.md) | No | Architect Flow Id and input contract. |
| webMessagingOfferFields | [`PatchWebMessagingOfferFields`](patchwebmessagingofferfields-definition.md) | No | Admin-configurable fields of a web messaging offer action. |
| openActionFields | [`OpenActionFields`](openactionfields-definition.md) | No | Admin-configurable fields of an open action. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.728Z*