# @datafire/azure_arm_resourcehealth

Client library for Microsoft.ResourceHealth

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_resourcehealth
```
```js
let azure_arm_resourcehealth = require('@datafire/azure_arm_resourcehealth').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_resourcehealth.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description

The Resource Health Client.

## Actions

### Operations_List
Lists available operations for the resourcehealth resource provider


```js
azure_arm_resourcehealth.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [operationListResult](#operationlistresult)

### AvailabilityStatuses_ListBySubscriptionId
Lists the current availability status for all the resources in the subscription. Use the nextLink property in the response to get the next page of availability statuses.


```js
azure_arm_resourcehealth.AvailabilityStatuses_ListBySubscriptionId({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatusListResult](#availabilitystatuslistresult)

### AvailabilityStatuses_ListByResourceGroup
Lists the current availability status for all the resources in the resource group. Use the nextLink property in the response to get the next page of availability statuses.


```js
azure_arm_resourcehealth.AvailabilityStatuses_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatusListResult](#availabilitystatuslistresult)

### AvailabilityStatuses_List
Lists the historical availability statuses for a single resource. Use the nextLink property in the response to get the next page of availability status


```js
azure_arm_resourcehealth.AvailabilityStatuses_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatusListResult](#availabilitystatuslistresult)

### AvailabilityStatuses_GetByResource
Gets current availability status for a single resource


```js
azure_arm_resourcehealth.AvailabilityStatuses_GetByResource({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatus](#availabilitystatus)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error details.
  * code `string`: The error code.
  * details `string`: The error details.
  * message `string`: The error message.

### availabilityStatus
* availabilityStatus `object`: availabilityStatus of a resource.
  * id `string`: Azure Resource Manager Identity for the availabilityStatuses resource.
  * location `string`: Azure Resource Manager geo location of the resource.
  * name `string`: current.
  * properties `object`: Properties of availability state.
    * availabilityState `string` (values: Available, Unavailable, Unknown): Availability status of the resource.
    * detailedStatus `string`: Details of the availability status.
    * occuredTime `string`: Timestamp for when last change in health status occurred.
    * reasonChronicity `string` (values: Transient, Persistent): Chronicity of the availability transition.
    * reasonType `string`: When the resource's availabilityState is Unavailable, it describes where the health impacting event was originated. Examples are planned, unplanned, user initiated or an outage etc.
    * recentlyResolvedState `object`: An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned
      * resolvedTime `string`: Timestamp when the availabilityState changes to Available.
      * unavailabilitySummary `string`: Brief description of cause of the resource becoming unavailable.
      * unavailableOccurredTime `string`: Timestamp for when the availabilityState changed to Unavailable
    * recommendedActions `array`: Lists actions the user can take based on the current availabilityState of the resource.
      * items [recommendedAction](#recommendedaction)
    * reportedTime `string`: Timestamp for when the health was last checked. 
    * resolutionETA `string`: When the resource's availabilityState is Unavailable and the reasonType is not User Initiated, it provides the date and time for when the issue is expected to be resolved.
    * rootCauseAttributionTime `string`: When the resource's availabilityState is Unavailable, it provides the Timestamp for when the health impacting event was received.
    * serviceImpactingEvents `array`: Lists the service impacting events that may be affecting the health of the resource.
      * items [serviceImpactingEvent](#serviceimpactingevent)
    * summary `string`: Summary description of the availability state.
  * type `string`: Microsoft.ResourceHealth/AvailabilityStatuses.

### availabilityStatusListResult
* availabilityStatusListResult `object`: The List availabilityStatus operation response.
  * nextLink `string`: The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses.
  * value **required** `array`: The list of availabilityStatuses.
    * items [availabilityStatus](#availabilitystatus)

### operation
* operation `object`: Operation available in the resourcehealth resource provider.
  * display `object`: Properties of the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation.
    * provider `string`: Provider name.
    * resource `string`: Resource name.
  * name `string`: Name of the operation.

### operationListResult
* operationListResult `object`: Lists the operations response.
  * value **required** `array`: List of operations available in the resourcehealth resource provider.
    * items [operation](#operation)

### recommendedAction
* recommendedAction `object`: Lists actions the user can take based on the current availabilityState of the resource.
  * action `string`: Recommended action.
  * actionUrl `string`: Link to the action
  * actionUrlText `string`: Substring of action, it describes which text should host the action url.

### serviceImpactingEvent
* serviceImpactingEvent `object`: Lists the service impacting events that may be affecting the health of the resource.
  * correlationId `string`: Correlation id for the event
  * eventStartTime `string`: Timestamp for when the event started.
  * eventStatusLastModifiedTime `string`: Timestamp for when event was submitted/detected.
  * incidentProperties `object`: Properties of the service impacting event.
    * incidentType `string`: Type of Event.
    * region `string`: Region impacted by the event.
    * service `string`: Service impacted by the event.
    * title `string`: Title of the incident.
  * status `object`: Status of the service impacting event.
    * value `string`: Current status of the event


