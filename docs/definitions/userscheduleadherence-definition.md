# `UserScheduleAdherence` Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | `string` | No | The globally unique identifier for the object. |
| name | `string` | No |  |
| user | [`UserReference`](userreference-definition.md) | No | The user for whom this status applies |
| businessUnit | [`BusinessUnitReference`](businessunitreference-definition.md) | No | The business unit to which this user belongs |
| managementUnit | [`ManagementUnitReference`](managementunitreference-definition.md) | No | The management unit to which this user belongs |
| team | [`TeamReference`](teamreference-definition.md) | No | The team to which this user belongs |
| scheduledActivityCategory | `string` | No | Activity for which the user is scheduled |
| scheduledActivityCode | [`ActivityCodeSummary`](activitycodesummary-definition.md) | No | Activity code for which the user is currently scheduled |
| systemPresence | `string` | No | Actual underlying system presence value |
| organizationSecondaryPresenceId | `string` | No | Organization Secondary Presence Id. |
| routingStatus | `string` | No | Actual underlying routing status, used to determine whether a user is actually in adherence when OnQueue |
| actualActivityCategory | `string` | No | Activity in which the user is actually engaged |
| isOutOfOffice | `boolean` | No | Whether the user is marked OutOfOffice |
| adherenceState | `string` | No | The user's current adherence state |
| impact | `string` | No | The impact of the user's current adherenceState |
| adherenceExplanation | [`RealTimeAdherenceExplanation`](realtimeadherenceexplanation-definition.md) | No | Currently applicable explanation for the adherence state |
| timeOfAdherenceChange | `string` | No | Time when the user entered the current adherenceState in ISO-8601 format |
| presenceUpdateTime | `string` | No | Time when presence was last updated. Used to calculate time in current status. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| activeQueues | [`QueueReference[]`](queuereference-definition.md) | No | The list of queues to which this user is joined |
| activeQueuesModifiedTime | `string` | No | Time when the list of active queues for this user was last updated. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |
| removedFromManagementUnit | `boolean` | No | For notification purposes. Used to indicate that a user was removed from the management unit |
| nextActivityReminders | [`UserNextActivityReminder[]`](usernextactivityreminder-definition.md) | No | A list of upcoming activities for which the user is scheduled |
| suppressOnTimeReminder | `boolean` | No | Indicates whether the on-time adherence notification should be suppressed for the user |
| selfUri | `string` | No | The URI for this object |

---

*This file was automatically generated by the Generate Genesys Cloud Platform API classes utility on 2025-04-24T15:04:26.041Z*