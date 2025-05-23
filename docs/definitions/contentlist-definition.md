# `ContentList` Definition

List content object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | A unique ID assigned to this rich message content. |
| listType | `string` | No | The type of list this instance represents. |
| title | `string` | No | Text to show in the title. |
| description | `string` | No | Text to show in the description. |
| submitLabel | `string` | No | Label for Submit button. |
| actions | [`ContentActions`](contentactions-definition.md) | No | The list actions (Deprecated). |
| components | [`ListItemComponent[]`](listitemcomponent-definition.md) | No | An array of component objects. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.783Z*