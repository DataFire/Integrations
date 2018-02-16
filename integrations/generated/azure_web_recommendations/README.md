# @datafire/azure_web_recommendations

Client library for Recommendations API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_recommendations
```
```js
let azure_web_recommendations = require('@datafire/azure_web_recommendations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_recommendations.Recommendations_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Recommendations_List
List all recommendations for a subscription.


```js
azure_web_recommendations.Recommendations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * featured `boolean`: Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations.
  * $filter `string`: Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[PT1H|PT1M|P1D]
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Recommendations_ResetAllFilters
Reset all recommendation opt-out settings for a subscription.


```js
azure_web_recommendations.Recommendations_ResetAllFilters({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Recommendations_ListHistoryForWebApp
Get past recommendations for an app, optionally specified by the time range.


```js
azure_web_recommendations.Recommendations_ListHistoryForWebApp({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Name of the app.
  * $filter `string`: Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification' and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[PT1H|PT1M|P1D]
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Recommendations_ListRecommendedRulesForWebApp
Get all recommendations for an app.


```js
azure_web_recommendations.Recommendations_ListRecommendedRulesForWebApp({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Name of the app.
  * featured `boolean`: Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations.
  * $filter `string`: Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification'
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Recommendations_DisableAllForWebApp
Disable all recommendations for an app.


```js
azure_web_recommendations.Recommendations_DisableAllForWebApp({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Recommendations_ResetAllFiltersForWebApp
Reset all recommendation opt-out settings for an app.


```js
azure_web_recommendations.Recommendations_ResetAllFiltersForWebApp({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Recommendations_GetRuleDetailsByWebApp
Get a recommendation rule for an app.


```js
azure_web_recommendations.Recommendations_GetRuleDetailsByWebApp({
  "resourceGroupName": "",
  "siteName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Name of the app.
  * name **required** `string`: Name of the recommendation.
  * updateSeen `boolean`: Specify <code>true</code> to update the last-seen timestamp of the recommendation object.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RecommendationRule](#recommendationrule)



## Definitions

### Recommendation
* Recommendation `object`: Represents a recommendation result generated by the recommendation engine.
  * actionName `string`: Name of action recommended by this object.
  * bladeName `string`: Deep link to a blade on the portal.
  * channels `string` (values: Notification, Api, Email, Webhook, All): List of channels that this recommendation can apply.
  * creationTime `string`: Timestamp when this instance was created.
  * displayName `string`: UI friendly name of the rule (may not be unique).
  * endTime `string`: The end time in UTC of a range that the recommendation refers to.
  * extensionName `string`: Extension name of the portal if exists.
  * forwardLink `string`: Forward link to an external document associated with the rule.
  * isDynamic `boolean`: True if this is associated with a dynamically added rule
  * level `string` (values: Critical, Warning, Information, NonUrgentSuggestion): Level indicating how critical this recommendation can impact.
  * message `string`: Recommendation text.
  * nextNotificationTime `string`: When to notify this recommendation next in UTC. Null means that this will never be notified anymore.
  * notificationExpirationTime `string`: Date and time in UTC when this notification expires.
  * notifiedTime `string`: Last timestamp in UTC this instance was actually notified. Null means that this recommendation hasn't been notified yet.
  * recommendationId `string`: A GUID value that each recommendation object is associated with.
  * resourceId `string`: Full ARM resource ID string that this recommendation object is associated with.
  * resourceScope `string` (values: ServerFarm, Subscription, WebSite): Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site.
  * ruleName `string`: Unique name of the rule.
  * score `number`: A metric value measured by the rule.
  * startTime `string`: The beginning time in UTC of a range that the recommendation refers to.
  * tags `array`: The list of category tags that this recommendation belongs to.
    * items `string`

### RecommendationRule
* RecommendationRule `object`: Represents a recommendation rule that the recommendation engine can perform.
  * actionName `string`: Name of action that is recommended by this rule in string.
  * bladeName `string`: Deep link to a blade on the portal. Applicable to dynamic rule only.
  * channels `string` (values: Notification, Api, Email, Webhook, All): List of available channels that this rule applies.
  * description `string`: Localized detailed description of the rule.
  * displayName `string`: UI friendly name of the rule.
  * extensionName `string`: Extension name of the portal if exists. Applicable to dynamic rule only.
  * forwardLink `string`: Forward link to an external document associated with the rule. Applicable to dynamic rule only.
  * isDynamic `boolean`: True if this is associated with a dynamically added rule
  * level `string` (values: Critical, Warning, Information, NonUrgentSuggestion): Level of impact indicating how critical this rule is.
  * message `string`: Localized name of the rule (Good for UI).
  * name `string`: Unique name of the rule.
  * recommendationId `string`: Recommendation ID of an associated recommendation object tied to the rule, if exists.
  * tags `array`: An array of category tags that the rule contains.
    * items `string`


