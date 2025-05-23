# `RuleSet` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | Yes | The name of the RuleSet. |
| dateCreated | `string` | No | Creation time of the entity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| dateModified | `string` | No | Last modified time of the entity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| version | `number` | No | Required for updates, must match the version number of the most recent update |
| contactList | [`DomainEntityRef`](domainentityref-definition.md) | No | A ContactList to provide user-interface suggestions for contact columns on relevant conditions and actions. |
| queue | [`DomainEntityRef`](domainentityref-definition.md) | No | A Queue to provide user-interface suggestions for wrap-up codes on relevant conditions and actions. |
| rules | [`DialerRule[]`](dialerrule-definition.md) | Yes | The list of rules. |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.673Z*