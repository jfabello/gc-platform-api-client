# `DialerAction` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | `string` | Yes | The type of this DialerAction. |
| actionTypeName | `string` | Yes | Additional type specification for this DialerAction. |
| updateOption | `string` | No | Specifies how a contact attribute should be updated. Required for MODIFY_CONTACT_ATTRIBUTE. |
| properties | `object` | No | A map of key-value pairs pertinent to the DialerAction. Different types of DialerActions require different properties. MODIFY_CONTACT_ATTRIBUTE with an updateOption of SET takes a contact column as the key and accepts any value. SCHEDULE_CALLBACK takes a key 'callbackOffset' that specifies how far in the future the callback should be scheduled, in minutes. SET_CALLER_ID takes two keys: 'callerAddress', which should be the caller id phone number, and 'callerName'. For either key, you can also specify a column on the contact to get the value from. To do this, specify 'contact.Column', where 'Column' is the name of the contact column from which to get the value. SET_SKILLS takes a key 'skills' with an array of skill ids wrapped into a string (Example: {'skills': '['skillIdHere']'} ). |
| dataAction | [`DomainEntityRef`](domainentityref-definition.md) | No | The Data Action to use for this action. Required for a dataActionBehavior. |
| contactColumnToDataActionFieldMappings | [`ContactColumnToDataActionFieldMapping[]`](contactcolumntodataactionfieldmapping-definition.md) | No | A list of mappings defining which contact data fields will be passed to which data action input fields for this condition. Valid for a dataActionBehavior. |
| contactIdField | `string` | No | The input field from the data action that the contactId will be passed to for this condition. Valid for a dataActionBehavior. |
| callAnalysisResultField | `string` | No | The input field from the data action that the callAnalysisResult will be passed to for this condition. Valid for a wrapup dataActionBehavior. |
| agentWrapupField | `string` | No | The input field from the data action that the agentWrapup will be passed to for this condition. Valid for a wrapup dataActionBehavior. |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:25.672Z*