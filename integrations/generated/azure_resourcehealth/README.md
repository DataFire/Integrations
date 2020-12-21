# @datafire/azure_resourcehealth

Client library for Microsoft.ResourceHealth

## Installation and Usage
```bash
npm install --save @datafire/azure_resourcehealth
```
```js
let azure_resourcehealth = require('@datafire/azure_resourcehealth').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Resource Health Client.

## Actions

### EmergingIssues_List
Lists Azure services' emerging issues.


```js
azure_resourcehealth.EmergingIssues_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [emergingIssueListResult](#emergingissuelistresult)

### EmergingIssues_Get
Gets Azure services' emerging issues.


```js
azure_resourcehealth.EmergingIssues_Get({
  "issueName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * issueName **required** `string` (values: default): The name of the emerging issue.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [emergingIssuesGetResult](#emergingissuesgetresult)

### Operations_List
Lists available operations for the resourcehealth resource provider


```js
azure_resourcehealth.Operations_List({
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
azure_resourcehealth.AvailabilityStatuses_ListBySubscriptionId({
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
azure_resourcehealth.AvailabilityStatuses_ListByResourceGroup({
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
Lists all historical availability transitions and impacting events for a single resource. Use the nextLink property in the response to get the next page of availability status


```js
azure_resourcehealth.AvailabilityStatuses_List({
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
azure_resourcehealth.AvailabilityStatuses_GetByResource({
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

### ChildAvailabilityStatuses_List
Lists the historical availability statuses for a single child resource. Use the nextLink property in the response to get the next page of availability status


```js
azure_resourcehealth.ChildAvailabilityStatuses_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatusListResult](#availabilitystatuslistresult)

### ChildAvailabilityStatuses_GetByResource
Gets current availability status for a single resource


```js
azure_resourcehealth.ChildAvailabilityStatuses_GetByResource({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatus](#availabilitystatus)

### ChildResources_List
Lists the all the children and its current health status for a parent resource. Use the nextLink property in the response to get the next page of children current health


```js
azure_resourcehealth.ChildResources_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support not nested parent resource type: /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
  * $expand `string`: Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

#### Output
* output [availabilityStatusListResult](#availabilitystatuslistresult)



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
    * availabilityState `string` (values: Available, Unavailable, Unknown): Availability status of the resource. When it is null, this availabilityStatus object represents an availability impacting event
    * detailedStatus `string`: Details of the availability status.
    * healthEventCategory `string`: In case of an availability impacting event, it describes the category of a PlatformInitiated health impacting event. Examples are Planned, Unplanned etc.
    * healthEventCause `string`: In case of an availability impacting event, it describes where the health impacting event was originated. Examples are PlatformInitiated, UserInitiated etc.
    * healthEventId `string`: It is a unique Id that identifies the event
    * healthEventType `string`: In case of an availability impacting event, it describes when the health impacting event was originated. Examples are Lifecycle, Downtime, Fault Analysis etc.
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
    * summary `string`: Summary description of the availability status.
  * type `string`: Microsoft.ResourceHealth/AvailabilityStatuses.

### availabilityStatusListResult
* availabilityStatusListResult `object`: The List availabilityStatus operation response.
  * nextLink `string`: The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses.
  * value **required** `array`: The list of availabilityStatuses.
    * items [availabilityStatus](#availabilitystatus)

### emergingIssue
* emergingIssue `object`: On-going emerging issue from azure status.
  * refreshTimestamp `string`: Timestamp for when last time refreshed for ongoing emerging issue.
  * statusActiveEvents `array`: The list of emerging issues of active event type.
    * items [statusActiveEvent](#statusactiveevent)
  * statusBanners `array`: The list of emerging issues of banner type.
    * items [statusBanner](#statusbanner)

### emergingIssueImpact
* emergingIssueImpact `object`: Object of the emerging issue impact on services and regions.
  * id `string`: The impacted service id.
  * name `string`: The impacted service name.
  * regions `array`: The list of impacted regions for corresponding emerging issues.
    * items [impactedRegion](#impactedregion)

### emergingIssueListResult
* emergingIssueListResult `object`: The list of emerging issues.
  * nextLink `string`: The link used to get the next page of emerging issues.
  * value `array`: The list of emerging issues.
    * items [emergingIssuesGetResult](#emergingissuesgetresult)

### emergingIssuesGetResult
* emergingIssuesGetResult `object`: The Get EmergingIssues operation response.
  * properties [emergingIssue](#emergingissue)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### impactedRegion
* impactedRegion `object`: Object of impacted region.
  * id `string`: The impacted region id.
  * name `string`: The impacted region name.

### operation
* operation `object`: Operation available in the resourcehealth resource provider.
  * display `object`: Properties of the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation name.
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

### statusActiveEvent
* statusActiveEvent `object`: Active event type of emerging issue.
  * cloud `string`: The cloud type of this active event.
  * description `string`: The details of active event.
  * impacts `array`: The list of emerging issues impacts.
    * items [emergingIssueImpact](#emergingissueimpact)
  * lastModifiedTime `string`: The last time modified on this banner.
  * published `boolean`: The boolean value of this active event if published or not.
  * severity `string` (values: Information, Warning, Error): The severity level of this active event.
  * stage `string` (values: Active, Resolve, Archived): The stage of this active event.
  * startTime `string`: The impact start time on this active event.
  * title `string`: The active event title.
  * trackingId `string`: The tracking id of this active event.

### statusBanner
* statusBanner `object`: Banner type of emerging issue.
  * cloud `string`: The cloud type of this banner.
  * lastModifiedTime `string`: The last time modified on this banner.
  * message `string`: The details of banner.
  * title `string`: The banner title.


