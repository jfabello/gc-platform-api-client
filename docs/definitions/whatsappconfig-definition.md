# `WhatsAppConfig` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| whatsAppColumns | `string[]` | Yes | The contact list columns specifying the WhatsApp address(es) of the contact. |
| whatsAppIntegration | [`AddressableEntityRef`](addressableentityref-definition.md) | Yes | The WhatsApp integration used to send message to the contact. |
| contentTemplate | [`DomainEntityRef`](domainentityref-definition.md) | Yes | The content template used to formulate the WhatsApp message to send to the contact. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.688Z*