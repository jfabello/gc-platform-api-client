# `DIDNumber` Definition

Represents an unassigned or assigned DID in a DID Pool.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| number | `string` | No | The number of the DID formatted as E164. |
| assigned | `boolean` | No | True if this DID is assigned to an entity.  False otherwise. |
| didPool | [`AddressableEntityRef`](addressableentityref-definition.md) | No | A Uri reference to the DID Pool this DID is a part of. |
| owner | [`DomainEntityRef`](domainentityref-definition.md) | No | A Uri reference to the owner of this DID.  The owner's type can be found in ownerType.  If the DID is unassigned, this will be NULL. |
| ownerType | `string` | No | The type of the entity that owns this DID.  If the DID is unassigned, this will be NULL. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.879Z*