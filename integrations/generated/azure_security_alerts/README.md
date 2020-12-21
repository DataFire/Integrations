# @datafire/azure_security_alerts

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_alerts
```
```js
let azure_security_alerts = require('@datafire/azure_security_alerts').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Alerts_List
List all the alerts that are associated with the subscription


```js
azure_security_alerts.Alerts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * $filter `string`: OData filter. Optional.
  * $select `string`: OData select. Optional.
  * $expand `string`: OData expand. Optional.

#### Output
* output [AlertList](#alertlist)

### Alerts_ListSubscriptionLevelAlertsByRegion
List all the alerts that are associated with the subscription that are stored in a specific location


```js
azure_security_alerts.Alerts_ListSubscriptionLevelAlertsByRegion({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * $filter `string`: OData filter. Optional.
  * $select `string`: OData select. Optional.
  * $expand `string`: OData expand. Optional.

#### Output
* output [AlertList](#alertlist)

### Alerts_GetSubscriptionLevelAlert
Get an alert that is associated with a subscription


```js
azure_security_alerts.Alerts_GetSubscriptionLevelAlert({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object

#### Output
* output [Alert](#alert)

### Alerts_UpdateSubscriptionLevelAlertStateToDismiss
Update the alert's state


```js
azure_security_alerts.Alerts_UpdateSubscriptionLevelAlertStateToDismiss({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object

#### Output
*Output schema unknown*

### Alerts_UpdateSubscriptionLevelAlertStateToReactivate
Update the alert's state


```js
azure_security_alerts.Alerts_UpdateSubscriptionLevelAlertStateToReactivate({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object

#### Output
*Output schema unknown*

### Alerts_ListByResourceGroup
List all the alerts that are associated with the resource group


```js
azure_security_alerts.Alerts_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * $filter `string`: OData filter. Optional.
  * $select `string`: OData select. Optional.
  * $expand `string`: OData expand. Optional.

#### Output
* output [AlertList](#alertlist)

### Alerts_ListResourceGroupLevelAlertsByRegion
List all the alerts that are associated with the resource group that are stored in a specific location


```js
azure_security_alerts.Alerts_ListResourceGroupLevelAlertsByRegion({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * $filter `string`: OData filter. Optional.
  * $select `string`: OData select. Optional.
  * $expand `string`: OData expand. Optional.

#### Output
* output [AlertList](#alertlist)

### Alerts_GetResourceGroupLevelAlerts
Get an alert that is associated a resource group or a resource in a resource group


```js
azure_security_alerts.Alerts_GetResourceGroupLevelAlerts({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
* output [Alert](#alert)

### Alerts_UpdateResourceGroupLevelAlertStateToDismiss
Update the alert's state


```js
azure_security_alerts.Alerts_UpdateResourceGroupLevelAlertStateToDismiss({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
*Output schema unknown*

### Alerts_UpdateResourceGroupLevelAlertStateToReactivate
Update the alert's state


```js
azure_security_alerts.Alerts_UpdateResourceGroupLevelAlertStateToReactivate({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "alertName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * alertName **required** `string`: Name of the alert object
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
*Output schema unknown*



## Definitions

### Alert
* Alert `object`: Security alert
  * properties [AlertProperties](#alertproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AlertConfidenceReason
* AlertConfidenceReason `object`: Factors that increase our confidence that the alert is a true positive
  * reason `string`: description of the confidence reason
  * type `string`: Type of confidence factor

### AlertEntity
* AlertEntity `object`: Changing set of properties depending on the entity type.
  * type `string`: Type of entity

### AlertExtendedProperties
* AlertExtendedProperties `object`: Changing set of properties depending on the alert type.

### AlertList
* AlertList `object`: List of security alerts
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [Alert](#alert)

### AlertProperties
* AlertProperties `object`: describes security alert properties.
  * actionTaken `string`: The action that was taken as a response to the alert (Active, Blocked etc.)
  * alertDisplayName `string`: Display name of the alert type
  * alertName `string`: Name of the alert type
  * associatedResource `string`: Azure resource ID of the associated resource
  * canBeInvestigated `boolean`: Whether this alert can be investigated with Azure Security Center
  * compromisedEntity `string`: The entity that the incident happened on
  * confidenceReasons `array`: reasons the alert got the confidenceScore value
    * items [AlertConfidenceReason](#alertconfidencereason)
  * confidenceScore `number`: level of confidence we have on the alert
  * correlationKey `string`: Alerts with the same CorrelationKey will be grouped together in Ibiza.
  * description `string`: Description of the incident and what it means
  * detectedTimeUtc `string`: The time the incident was detected by the vendor
  * entities `array`: objects that are related to this alerts
    * items [AlertEntity](#alertentity)
  * extendedProperties [AlertExtendedProperties](#alertextendedproperties)
  * instanceId `string`: Instance ID of the alert.
  * isIncident `boolean`: Whether this alert is for incident type or not (otherwise - single alert)
  * remediationSteps `string`: Recommended steps to reradiate the incident
  * reportedSeverity `string` (values: Informational, Low, Medium, High): Estimated severity of this alert
  * reportedTimeUtc `string`: The time the incident was reported to Microsoft.Security in UTC
  * state `string`: State of the alert (Active, Dismissed etc.)
  * subscriptionId `string`: Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to
  * systemSource `string`: The type of the alerted resource (Azure, Non-Azure)
  * vendorName `string`: Name of the vendor that discovered the incident
  * workspaceArmId `string`: Azure resource ID of the workspace that the alert was reported to.


