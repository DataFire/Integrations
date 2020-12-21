# @datafire/signl4

Client library for SIGNL4

## Installation and Usage
```bash
npm install --save @datafire/signl4
```
```js
let signl4 = require('@datafire/signl4').create();

.then(data => {
  console.log(data);
});
```

## Description

With our API, you can easily access many SIGNL4 functions via HTTP requests. It is based on REST and fulfills a similar purpose for which SDKs were used very often in the past.<br />
Example usage scenarios are the integration in third party systems for triggering alarms to your team or on-call duty based on shift planning systems.<br/></br>
The API is always used in the context of your SIGNL4 team, i. e. you must log in with your SIGNL4 account and give your API client the authorization to access your team programmatically on your behalf (constent grant).<br />
At the moment there are several certified API clients, e.g. [Microsoft Flow](https://emea.flow.microsoft.com/en-us/connectors/shared_signl4/signl4-derdack/) or [Amazon Alexa](https://www.amazon.com/Derdack-GmbH-SIGNL4/dp/B077BQ79T3). Registration of your personal API client is currently possible on request.<br />
Don't hesitate to [contact us](https://www.signl4.com/feedback-we-love-hear-from-you/) and you'll get your client_id and client_secret required for accessing the SIGNL4 API after user login and consent grant.<br />
Authentication is based on OpenID Connect and the [Authorization Code Flow](http://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth).<br /><br />
The base URL of the API is [https://connect.signl4.com/api/](https://connect.signl4.com/api/).<br />
Copyright © Derdack GmbH<br/>

## Actions

### AcceptSubscriptionAdoption
Accept an existing subscription adoption.


```js
signl4.AcceptSubscriptionAdoption({
  "acceptCode": ""
}, context)
```

#### Input
* input `object`
  * acceptCode **required** `string`

#### Output
* output [SubscriptionInfo](#subscriptioninfo)

### RaiseAlert
Triggers a new alert for your team. All team members on duty will receive alert notifications.


```js
signl4.RaiseAlert({}, context)
```

#### Input
* input `object`
  * alertInfo [RaiseAlertInfo](#raisealertinfo)

#### Output
* output [AlertInfo](#alertinfo)

### AcknowledgeAll
This method confirms all unhandled alerts your team currently has.


```js
signl4.AcknowledgeAll({}, context)
```

#### Input
* input `object`
  * filterInfo [ChangeAlertStatusFilterInfo](#changealertstatusfilterinfo)

#### Output
*Output schema unknown*

### AcknowledgeMultiple
This method confirms all alerts provided.


```js
signl4.AcknowledgeMultiple({}, context)
```

#### Input
* input `object`
  * acknowledgeInfo [ChangeAlertStatusMultipleInfo](#changealertstatusmultipleinfo)

#### Output
*Output schema unknown*

### CloseAll
This method closes all acknowledged alerts your team currently has.


```js
signl4.CloseAll({}, context)
```

#### Input
* input `object`
  * filterInfo [ChangeAlertStatusFilterInfo](#changealertstatusfilterinfo)

#### Output
*Output schema unknown*

### CloseMultiple
This method closes all alerts provided.


```js
signl4.CloseMultiple({}, context)
```

#### Input
* input `object`
  * statusChangeInfo [ChangeAlertStatusMultipleInfo](#changealertstatusmultipleinfo)

#### Output
*Output schema unknown*

### GetAlertsPaged
Gets alerts paged


```js
signl4.GetAlertsPaged({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.
  * filter [AlertFilterPublic](#alertfilterpublic)

#### Output
* output [PagedResultsPublic[OverviewAlert]](#pagedresultspublic[overviewalert])

### GetAlertReport
Returns information about the occurred alert volume in different time periods as well as information about the
response behaviour (amount of confirmed and unhandled alerts) of your team members.


```js
signl4.GetAlertReport(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AlertReport](#alertreport)

### GetAlert
Gets an alert by id.


```js
signl4.GetAlert({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the requested Alert.

#### Output
* output [AlertInfo](#alertinfo)

### AnnotateAlert
Annotates an alert by given Annotation Info.


```js
signl4.AnnotateAlert({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the alert to annotate.
  * annotationInfo [AlertAnnotationInfo](#alertannotationinfo)

#### Output
* output [AlertAnnotationInfo](#alertannotationinfo)

### GetAlertAnnotations
Get annotations of an alert by id.


```js
signl4.GetAlertAnnotations({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the requested Alert.

#### Output
* output `array`
  * items [AlertAnnotationInfo](#alertannotationinfo)

### GetAlertAttachmentsInfo
Get attachments of an alert by id.


```js
signl4.GetAlertAttachmentsInfo({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the requested Alert.

#### Output
* output `array`
  * items [AlertAttachmentInfo](#alertattachmentinfo)

### GetAttachment
Gets a specified attachment of a specified alert.


```js
signl4.GetAttachment({
  "alertId": "",
  "attachmentId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the alert that contains the wanted attachment.
  * attachmentId **required** `string`: Id of the attachment, that you want to retrieve.
  * width `integer`: Optional parameter defining the wanted width of the picture that is retrieved.
  * height `integer`: Optional parameter defining the wanted height of the picture that is retrieved.
  * scale `boolean`: Optional parameter defining whether it's wanted to scale the retrieved image. Default is set to

#### Output
* output [FileContentResult](#filecontentresult)

### GetAlertNotifications
Get notifications of all users by alert id.


```js
signl4.GetAlertNotifications({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the requested Alert.

#### Output
* output `array`
  * items [AlertNotificationInfo](#alertnotificationinfo)

### GetOverviewAlert
Get overview alert by id.


```js
signl4.GetOverviewAlert({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Id of the requested Alert.

#### Output
* output [OverviewAlert](#overviewalert)

### GetAvailableCountries
Gets supported countries.


```js
signl4.GetAvailableCountries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### GetPreferredCurrency
Gets supported countries.


```js
signl4.GetPreferredCurrency({}, context)
```

#### Input
* input `object`
  * countryCode `string`

#### Output
* output `string`

### CreateBranch
Creates a branch with the user's subscription.


```js
signl4.CreateBranch(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BranchInfo](#branchinfo)

### AcceptManagerInvite
Accepts a pending manager invite


```js
signl4.AcceptManagerInvite({
  "inviteAcceptCode": ""
}, context)
```

#### Input
* input `object`
  * inviteAcceptCode **required** `string`

#### Output
* output [BranchManagerInformation](#branchmanagerinformation)

### GetBranch
Returns information of the branch with the specified Id.


```js
signl4.GetBranch({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: Id of the branch thats needed to be retrieved.

#### Output
* output [BranchInfo](#branchinfo)

### DeleteSubscriptionAdoption
Deletes an existing subscription adoption in the user's branch.


```js
signl4.DeleteSubscriptionAdoption({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * adoptionInfo [SubscriptionAdoptionInfo](#subscriptionadoptioninfo)

#### Output
*Output schema unknown*

### AdoptSubscriptionForBranch
Adopts an existing subscription in the user's branch.


```js
signl4.AdoptSubscriptionForBranch({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * adoptionInfo [SubscriptionAdoptionInfo](#subscriptionadoptioninfo)

#### Output
* output [SubscriptionInfo](#subscriptioninfo)

### GetBranchFeatures
Returns the features of a specified branch.


```js
signl4.GetBranchFeatures({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: Id of the branch from which the features need to be retrieved.

#### Output
* output `array`
  * items [SubscriptionFeature](#subscriptionfeature)

### GetBranchManagers
Gets the managers of a branch


```js
signl4.GetBranchManagers({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: ID of the branch to get the managers for

#### Output
* output `array`
  * items [BranchManagerInformation](#branchmanagerinformation)

### InviteBranchManager
Gets the managers of a branch


```js
signl4.InviteBranchManager({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * inviteInfos [BranchManagerInviteInfos](#branchmanagerinviteinfos)

#### Output
* output [BranchManagerInformation](#branchmanagerinformation)

### DeleteBranchManager
Deletes a specific manager of the branch


```js
signl4.DeleteBranchManager({
  "branchId": "",
  "managerId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * managerId **required** `string`

#### Output
*Output schema unknown*

### GetBranchSubscriptions
Returns subscription information of the branch with the specified Id.


```js
signl4.GetBranchSubscriptions({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: ID of the branch the subscriptions will be retrieved for.

#### Output
* output `array`
  * items [SubscriptionInfo](#subscriptioninfo)

### CreateBranchSubscription
Creates a new subscription in the user's branch.


```js
signl4.CreateBranchSubscription({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * creationInfo [SubscriptionCreationInfo](#subscriptioncreationinfo)

#### Output
* output [SubscriptionInfo](#subscriptioninfo)

### RemoveSubscriptionFromBranch
Removes a subscription from the user's branch.


```js
signl4.RemoveSubscriptionFromBranch({
  "branchId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * subscriptionId **required** `string`

#### Output
*Output schema unknown*

### GetBranchUserLicenses
Gets user license information of a branch


```js
signl4.GetBranchUserLicenses({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: ID of the branch to get user license information for

#### Output
* output `array`
  * items [UserLicenseInfo](#userlicenseinfo)

### UpdateBranchUserLicenses
Updates user license information of a branch


```js
signl4.UpdateBranchUserLicenses({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`: ID of the branch to update user license information for
  * licenseUpdate [UserLicenseUpdate](#userlicenseupdate)

#### Output
* output [UserLicenseInfo](#userlicenseinfo)

### ValidateAdoptionRequirements
Check if there are enough user licenses to adopt an existing subscription in the user's branch.


```js
signl4.ValidateAdoptionRequirements({
  "branchId": ""
}, context)
```

#### Input
* input `object`
  * branchId **required** `string`
  * adoptionInfo [SubscriptionAdoptionInfo](#subscriptionadoptioninfo)

#### Output
* output [AdoptionValidationResult](#adoptionvalidationresult)

### SetPersonalCategorySettings



```js
signl4.SetPersonalCategorySettings({}, context)
```

#### Input
* input `object`
  * categoryUpdates [CategoryUpdates](#categoryupdates)

#### Output
* output `array`
  * items [PersonalCategorySettings](#personalcategorysettings)

### GetCategories
Returns information about all categories that belong to the team.


```js
signl4.GetCategories({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Id of the team the categories belong to

#### Output
* output `array`
  * items [CategoryInfo](#categoryinfo)

### GetEventsPaged
Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.


```js
signl4.GetEventsPaged({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.
  * eventFilter [EventFilter](#eventfilter)

#### Output
* output [PagedResultsPublic[OverviewEvent]](#pagedresultspublic[overviewevent])

### GetOverviewEvent
Get overview event by id.


```js
signl4.GetOverviewEvent({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: Id of event to get.

#### Output
* output [OverviewEvent](#overviewevent)

### GetEventParameters
Get parameters of an event by id.


```js
signl4.GetEventParameters({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: Event Id of the requested Alert.

#### Output
* output `array`
  * items [EventParameterInfo](#eventparameterinfo)

### ConfirmDeliveries
Confirm delivery of messages by message id, channel id and subscription Id.


```js
signl4.ConfirmDeliveries({}, context)
```

#### Input
* input `object`
  * confirmation [MessageDeliveryConfirmation](#messagedeliveryconfirmation)

#### Output
*Output schema unknown*

### GetPlans
Returns information about all available plans.


```js
signl4.GetPlans({}, context)
```

#### Input
* input `object`
  * language `string`: Language of the plan infos. For example "en" or "de"

#### Output
* output [PlanInfo](#planinfo)

### GetPlan
Returns information of the plan with the specified Id.


```js
signl4.GetPlan({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan thats needed to be retrieved.
  * language `string`: Language of the plan infos. For example "en" or "de"

#### Output
* output [PlanInfo](#planinfo)

### GetPlanChannelPrices
Returns the plan's channel price information.


```js
signl4.GetPlanChannelPrices({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan thats needed to be retrieved.

#### Output
* output [ChannelPriceInfo](#channelpriceinfo)

### GetPlanUserPrices
Returns the plan's user price information.


```js
signl4.GetPlanUserPrices({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan thats needed to be retrieved.
  * annual `boolean`: Gets annual user prices if set to TRUE, otherwise the prices are monthly.

#### Output
* output `array`
  * items [PriceInfo](#priceinfo)

### GetPrepaidPackages
Returns information about all avialable prepaid packages.


```js
signl4.GetPrepaidPackages({}, context)
```

#### Input
* input `object`
  * language `string`: Language of the package infos. For example "en" or "de"

#### Output
* output [PrepaidPackageInfo](#prepaidpackageinfo)

### GetPrepaidBalance
Get your subscription's current prepaid balance.


```js
signl4.GetPrepaidBalance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PrepaidBalanceInfo](#prepaidbalanceinfo)

### GetPrepaidSettings
Get your subscription's current prepaid settings.


```js
signl4.GetPrepaidSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### UpdatePrepaidSettings
Update your subscription's current prepaid settings.


```js
signl4.UpdatePrepaidSettings({}, context)
```

#### Input
* input `object`
  * settings [PrepaidSettingsInfo](#prepaidsettingsinfo)

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### GetPrepaidTransactions
Get your subscription's prepaid transactions.


```js
signl4.GetPrepaidTransactions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### CreatePrepaidTransaction
Creates a prepaid transaction for your subscription.


```js
signl4.CreatePrepaidTransaction({}, context)
```

#### Input
* input `object`
  * creationInfo [PrepaidTransactionCreationInfo](#prepaidtransactioncreationinfo)

#### Output
* output [PrepaidTransactionInfo](#prepaidtransactioninfo)

### GetPrepaidTransaction
Get your subscription's prepaid transaction.


```js
signl4.GetPrepaidTransaction({
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * transactionId **required** `string`: ID of the transaction to get

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### GetScriptInstances
Returns all script instances in the subscription.


```js
signl4.GetScriptInstances(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ScriptInstanceDetails](#scriptinstancedetails)

### CreateScriptInstance
Creates a new script instance of the script specified in the request body.


```js
signl4.CreateScriptInstance({}, context)
```

#### Input
* input `object`
  * instanceInfo [ScriptInstanceDetails](#scriptinstancedetails)

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### DeleteScriptInstance
Gets the script instance specified by the passed instance id.


```js
signl4.DeleteScriptInstance({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`: Instance Id of script instance to be returned.

#### Output
*Output schema unknown*

### GetScriptInstance
Gets the script instance specified by the passed instance id.


```js
signl4.GetScriptInstance({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`: Instance Id of script instance to be returned.

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### UpdateScriptInstance
Updates the specified script instance.


```js
signl4.UpdateScriptInstance({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceInfo [ScriptInstanceDetails](#scriptinstancedetails)
  * instanceId **required** `string`: InstanceId of the script to be updated.

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### UpdateScriptInstanceCustomData
Updates the specified script instance.


```js
signl4.UpdateScriptInstanceCustomData({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceData [ScriptInstanceCustomUserData](#scriptinstancecustomuserdata)
  * instanceId **required** `string`: InstanceId of the script to be updated.

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### DisableInstance



```js
signl4.DisableInstance({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### EnableInstance



```js
signl4.EnableInstance({
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### GetInventoryScripts
Returns all script instances in the subscription.


```js
signl4.GetInventoryScripts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [InventoryScriptInfo](#inventoryscriptinfo)

### GetParsedInventoryScripts



```js
signl4.GetParsedInventoryScripts({}, context)
```

#### Input
* input `object`
  * language `string`

#### Output
* output `array`
  * items [InventoryScriptInfo](#inventoryscriptinfo)

### GetParsedInventoryScript
Gets the script specified by the passed script id.


```js
signl4.GetParsedInventoryScript({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: script Id of script to be returned.
  * language `string`

#### Output
* output [ScriptInstanceDetails](#scriptinstancedetails)

### GetSubscriptions
Get infos of all available/managed subscriptions.


```js
signl4.GetSubscriptions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [SubscriptionInfo](#subscriptioninfo)

### DeleteSubscription
Delete a specific subscription.


```js
signl4.DeleteSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to be deleted.

#### Output
*Output schema unknown*

### GetSubscription
Get infos of a specific subscription.


```js
signl4.GetSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription thats to be retrieved.

#### Output
* output [SubscriptionInfo](#subscriptioninfo)

### GetChannelPrices
Returns the subscription's channel price information.


```js
signl4.GetChannelPrices({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription that needs to be retrieved.

#### Output
* output [ChannelPriceInfo](#channelpriceinfo)

### GetSubscriptionFeatures
Returns the features of a specified subscription.


```js
signl4.GetSubscriptionFeatures({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription from which the features need to be retrieved.

#### Output
* output `array`
  * items [SubscriptionFeature](#subscriptionfeature)

### GetPrepaidBalanceForSubscription
Get a subscription's current prepaid balance.


```js
signl4.GetPrepaidBalanceForSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
* output [PrepaidBalanceInfo](#prepaidbalanceinfo)

### GetPrepaidSettingsForSubscription
Get a subscription's current prepaid settings.


```js
signl4.GetPrepaidSettingsForSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### UpdatePrepaidSettingsForSubscription
Update a subscription's current prepaid settings.


```js
signl4.UpdatePrepaidSettingsForSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription
  * settings [PrepaidSettingsInfo](#prepaidsettingsinfo)

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### subscriptions.subscriptionId.prepaidTransactions.get
Get a subscription's prepaid transactions.


```js
signl4.subscriptions.subscriptionId.prepaidTransactions.get({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to get transactions for

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### subscriptions.subscriptionId.prepaidTransactions.post
Creates a prepaid transaction for a subscription.


```js
signl4.subscriptions.subscriptionId.prepaidTransactions.post({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to create transaction for
  * creationInfo [PrepaidTransactionCreationInfo](#prepaidtransactioncreationinfo)

#### Output
* output [PrepaidTransactionInfo](#prepaidtransactioninfo)

### GetPrepaidTransactionForSubscription
Get a subscription's prepaid transaction.


```js
signl4.GetPrepaidTransactionForSubscription({
  "subscriptionId": "",
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to get transactions for
  * transactionId **required** `string`: ID of the transaction to get

#### Output
* output [PrepaidSettingsInfo](#prepaidsettingsinfo)

### UpdateSubscriptionProfile
Updates a subscriptions profile.


```js
signl4.UpdateSubscriptionProfile({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to be updated
  * profile [SubscriptionProfile](#subscriptionprofile)

#### Output
* output [SubscriptionInfo](#subscriptioninfo)

### GetSubscriptionTeams
Get infos for all teams of the subscription.


```js
signl4.GetSubscriptionTeams({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
* output `array`
  * items [TeamInfo](#teaminfo)

### GetSubscriptionUserLicenses
Gets a subscription's user licences.


```js
signl4.GetSubscriptionUserLicenses({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription

#### Output
* output [UserLicenseInfo](#userlicenseinfo)

### UpdateSubscriptionUserLicenses
Updates a subscription's user licences.


```js
signl4.UpdateSubscriptionUserLicenses({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: ID of the subscription to be updated
  * licenseUpdate [UserLicenseUpdate](#userlicenseupdate)

#### Output
* output [UserLicenseInfo](#userlicenseinfo)

### GetTeams
Get infos of all teams.


```js
signl4.GetTeams(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TeamInfo](#teaminfo)

### GetTeam
Gets infos of a specific team.


```js
signl4.GetTeam({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team that should be retrieved.

#### Output
* output [TeamInfo](#teaminfo)

### GetAlertSettings
Gets alert settings of a specific team.


```js
signl4.GetAlertSettings({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team the settings should be retrieved for.

#### Output
* output [AlertSettings](#alertsettings)

### SetAlertSettings
Sets alert settings of a specific team.


```js
signl4.SetAlertSettings({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team the settings should be set for.
  * settings [AlertSettings](#alertsettings)

#### Output
* output [AlertSettings](#alertsettings)

### GetTeamDutySummary
Get duty assistent info for a team


```js
signl4.GetTeamDutySummary({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team the duty belongs to.
  * lastTwoDuties `boolean`

#### Output
* output [TeamDutySummaryInfo](#teamdutysummaryinfo)

### GetDutySchedules
Returns information about all duties that belong to the team.


```js
signl4.GetDutySchedules({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Id of the team the schedules user belongs to
  * UserId `string`
  * MinDate `string`
  * Limit `integer`

#### Output
* output `array`
  * items [ScheduleInfo](#scheduleinfo)

### SetDutySchedule
Create/Update given duty schedule.


```js
signl4.SetDutySchedule({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Id of the team the duty is to be assigned to.
  * schedule [ScheduleInfo](#scheduleinfo)

#### Output
* output [ScheduleInfo](#scheduleinfo)

### DeleteDutySchedule
Delete a specific duty.


```js
signl4.DeleteDutySchedule({
  "teamId": "",
  "dutyId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team the duty belongs to.
  * dutyId **required** `string`: ID of the duty to be deleted.

#### Output
*Output schema unknown*

### GetDutySchedule
Returns information of the duty schedule with the specified Id.


```js
signl4.GetDutySchedule({
  "teamId": "",
  "scheduleId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Id of the team the duty belongs to
  * scheduleId **required** `string`: Id of the duty schedule thats needed to be retrieved.

#### Output
* output [ScheduleInfo](#scheduleinfo)

### teams.teamId.setupProgress.get
Gets setup progress of a specific team.


```js
signl4.teams.teamId.setupProgress.get({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: ID of the team the progress should be retrieved for.

#### Output
* output [TeamSetupProgress](#teamsetupprogress)

### GetUsers
Returns a list of user objects with details such as their email address and duty information. Only users who
are part of your team will be returned.


```js
signl4.GetUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [UserInfo](#userinfo)

### GetUser
Returns a user object with details such as his email address and duty information.


```js
signl4.GetUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user to get. Use 'Me' to get information about the currently logged in user. Can

#### Output
* output [UserInfo](#userinfo)

### GetBranchInfosByUser
Returns information of the branch that is managed by user with the specified Id.


```js
signl4.GetBranchInfosByUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Id of branch manager.

#### Output
* output [UserBranchInfo](#userbranchinfo)

### CheckPermissions
Checks if a user has the provided permission.


```js
signl4.CheckPermissions({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: ID of the user to check permissions for.
  * teamId `string`
  * permissions [ItemsWrapper[String]](#itemswrapper[string])

#### Output
* output [UserImage](#userimage)

### GetUserDutyInfo
Returns a object with duty information.


```js
signl4.GetUserDutyInfo({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user to get. Use 'Me' to get information about the currently logged in user. Can

#### Output
* output [UserInfo](#userinfo)

### GetUserImage



```js
signl4.GetUserImage({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`
  * height `integer`
  * width `integer`

#### Output
* output [UserImage](#userimage)

### PunchInUser
The specified user will be punched in to duty.


```js
signl4.PunchInUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user to punch in. Use 'Me' to get information about the currently logged in

#### Output
* output [UserDutyInfo](#userdutyinfo)

### PunchInUserAsManager
The specified user will be punched in to duty as a manager.


```js
signl4.PunchInUserAsManager({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user to punch in. Use 'Me' to get information about the currently logged in

#### Output
* output [UserDutyInfo](#userdutyinfo)

### PunchOutUser
The specified user will be punched out from duty.


```js
signl4.PunchOutUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user to punch out. Use 'Me' to get information about the currently logged in

#### Output
* output [UserDutyInfo](#userdutyinfo)

### users.userId.setupProgress.get
Gets setup progress of a specific user.


```js
signl4.users.userId.setupProgress.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: ID of the user the progress should be retrieved for.

#### Output
* output [UserSetupProgress](#usersetupprogress)

### Get
Returns a collection of defined outbound webhooks in the system.


```js
signl4.Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [WebhookInfo](#webhookinfo)

### Create
Creates a new outbound webhook that will be notified when certain events occur.


```js
signl4.Create({}, context)
```

#### Input
* input `object`
  * webhookBaseInfo [WebhookBaseInfo](#webhookbaseinfo)

#### Output
* output `string`

### Delete
Deletes the specified webhook so that it will no longer be notified.


```js
signl4.Delete({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: Id of the outbound webhook that will be deleted.

#### Output
*Output schema unknown*

### GetWebhookById
Returns information of the webhook specified by the passed id.


```js
signl4.GetWebhookById({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: Id of the outbound webhook to be retrieved.

#### Output
* output `string`

### Update
Updates the specified webhook.


```js
signl4.Update({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: Id of the outbound webhook to be updated.
  * webhookUpdateInfo [WebhookBaseInfo](#webhookbaseinfo)

#### Output
* output [WebhookInfo](#webhookinfo)



## Definitions

### AdoptionValidationResult
* AdoptionValidationResult `object`
  * availableLicenses `integer`
  * isValid `boolean`
  * planCode `string`
  * requiredLicenses `integer`

### AlertAnnotationInfo
* AlertAnnotationInfo `object`
  * text `string`
  * timestamp `string`
  * type `integer`
  * userId `string`

### AlertAttachment
* AlertAttachment `object`
  * content `string`
  * contentType `string`
  * encoding `integer` (values: 0, 1)
  * id `string`
  * name `string`

### AlertAttachmentInfo
* AlertAttachmentInfo `object`
  * contentType `string`
  * id `string`
  * name `string`

### AlertCounts
* AlertCounts `object`
  * acknowledged **required** `integer`
  * closed `integer`
  * end `string`
  * lastModified `string`
  * start `string`
  * unhandled **required** `integer`

### AlertDeliveryStatusInfo
* AlertDeliveryStatusInfo `object`
  * alertDeliveryStatusCode `integer` (values: 0, 1, 2, 4, 6, 8, 22, 24, 26, 30, 31)
  * userDeliveryStatusInfos `array`
    * items [UserDeliveryStatusInfo](#userdeliverystatusinfo)

### AlertFilterPublic
* AlertFilterPublic `object`
  * afterid `string`
  * alertStatuscodes `integer` (values: 0, 1, 2, 4, 8, 16, 32)
  * alertids `array`
    * items `string`
  * categoryids `array`
    * items `string`
  * continuationtoken [PagedResultsPublicContinuationToken](#pagedresultspubliccontinuationtoken)
  * maxcreated `string`
  * mincreated `string`
  * modsince `string`
  * showpersonalhiddencategories `boolean`
  * textToSearch `string`

### AlertHistoryInfo
* AlertHistoryInfo `object`
  * acknowledged `string`
  * acknowledgedgements `array`
    * items `string`
  * closed `string`
  * closedBy `string`
  * created `string`

### AlertHistoryInfoDetailed
* AlertHistoryInfoDetailed `object`
  * acknowledged `string`
  * alertHistoryEntries `array`
    * items [AlertHistoryInfoEntry](#alerthistoryinfoentry)
  * created `string`

### AlertHistoryInfoEntry
* AlertHistoryInfoEntry `object`
  * timestamp `string`
  * type `integer` (values: 2, 3)
  * userId `string`

### AlertInfo
* AlertInfo `object`
  * annotations `array`
    * items [AlertAnnotationInfo](#alertannotationinfo)
  * attachments `array`
    * items [AlertAttachment](#alertattachment)
  * category `string`
  * categoryId `string`
  * eventSourceId `string`
  * eventSourceType `integer` (values: 0, 1, 2)
  * externalId `string`
  * flags `integer`
  * history [AlertHistoryInfo](#alerthistoryinfo)
  * id `string`
  * lastModified `string`
  * parameters `array`
    * items [EventParameterInfo](#eventparameterinfo)
  * severity `integer` (values: 0, 1, 2)
  * status `integer` (values: 0, 1, 2, 4, 8, 16, 32)
  * subscriptionId `string`
  * teamId `string`
  * text `string`
  * title `string`

### AlertNotificationInfo
* AlertNotificationInfo `object`
  * address `string`
  * deviceName `string`
  * lastUpdate `string`
  * messageStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  * notificationChannelType `integer` (values: 0, 1, 2, 4, 8, 16)
  * userId `string`
  * userStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### AlertReport
* AlertReport `object`
  * last24Hours **required** [AlertCounts](#alertcounts)
  * subscriptionId **required** `string`
  * teamCurrentDuty [AlertCounts](#alertcounts)
  * teamId **required** `string`
  * teamLastDuty [AlertCounts](#alertcounts)
  * userId `string`
  * userLastDutyChange [AlertCounts](#alertcounts)

### AlertSettings
* AlertSettings `object`
  * filterAction `integer` (values: 0, 1, 2)
  * filterMode `integer` (values: 0, 1)
  * optOut `integer` (values: 0, 1, 2)
  * persNotMode `integer` (values: 0, 1)
  * responseMode `integer` (values: 2, 4)
  * responseTime `integer`

### BranchInfo
* BranchInfo `object`
  * billingInterval `integer` (values: 0, 1, 4)
  * country `string`
  * created `string`
  * currency `string`
  * externalAccountId `string`
  * externalSubscriptionId `string`
  * id `string`
  * managerIds `array`
    * items `string`
  * options `integer`
  * ownerId `string`
  * subscriptionIds `array`
    * items `string`

### BranchManagerInformation
* BranchManagerInformation `object`
  * displayName `string`
  * isPending `boolean`
  * mailAddress `string`
  * managerId `string`
  * subscriptionId `string`

### BranchManagerInviteInfos
* BranchManagerInviteInfos `object`
  * displayName **required** `string`
  * mailAddress **required** `string`

### CategoryInfo
* CategoryInfo `object`
  * color `string`
  * id `string`
  * imageName `string`
  * isDefault `boolean`
  * keywords `array`
    * items `string`
  * name `string`

### CategoryUpdates
* CategoryUpdates `object`
  * settings `array`
    * items [PersonalCategorySettings](#personalcategorysettings)
  * teamId `string`
  * userId `string`

### ChangeAlertStatusFilterInfo
* ChangeAlertStatusFilterInfo `object`
  * categoryIds `array`
    * items `string`
  * maxDate `string`
  * minDate `string`

### ChangeAlertStatusMultipleInfo
* ChangeAlertStatusMultipleInfo `object`
  * alertIds **required** `array`
    * items `string`
  * descr `string`
  * uid **required** `string`

### ChannelPriceInfo
* ChannelPriceInfo `object`
  * sms `integer`
  * voicePerMinute `integer`

### DutySummaryInfo
* DutySummaryInfo `object`
  * dutyEnd `string`
  * dutyId `string`
  * dutyStart `string`

### EntityTagHeaderValue
* EntityTagHeaderValue `object`
  * isWeak `boolean`
  * tag [StringSegment](#stringsegment)

### ErrorResponseContent
* ErrorResponseContent `object`
  * code **required** `integer`
  * details `string`
  * errors `array`
    * items [ErrorResponseContentBase](#errorresponsecontentbase)
  * message **required** `string`
  * requestId `string`

### ErrorResponseContentBase
* ErrorResponseContentBase `object`
  * details `string`
  * message **required** `string`

### EventFilter
* EventFilter `object`
  * continuationToken [PagedResultsPublicContinuationToken](#pagedresultspubliccontinuationtoken)
  * eventStatusCode `integer` (values: 0, 1, 2, 3, 1000)
  * maxCreationDate `string`
  * minCreationDate `string`
  * modifiedSince `string`
  * textToSearch `string`

### EventParameterInfo
* EventParameterInfo `object`
  * name `string`
  * type `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 100)
  * value `string`

### FileContentResult
* FileContentResult `object`
  * contentType `string`
  * enableRangeProcessing `boolean`
  * entityTag [EntityTagHeaderValue](#entitytagheadervalue)
  * fileContents `string`
  * fileDownloadName `string`
  * lastModified `string`

### InventoryScriptInfo
* InventoryScriptInfo `object`
  * config `object`
  * data [ScriptDescriptionData](#scriptdescriptiondata)
  * eventPattern `object`
  * localizationDetails `array`
    * items [ScriptLocalizationDetail](#scriptlocalizationdetail)
  * scriptId `string`
  * scriptName `string`
  * visibility `string`

### ItemsWrapper[String]
* ItemsWrapper[String] `object`
  * items `array`
    * items `string`

### MessageDelivery
* MessageDelivery `object`
  * channelId `string`
  * messageId `string`

### MessageDeliveryConfirmation
* MessageDeliveryConfirmation `object`
  * deliveries `array`
    * items [MessageDelivery](#messagedelivery)
  * subscriptionId `string`

### OverviewAlert
* OverviewAlert `object`
  * alertDeliveryStatus [AlertDeliveryStatusInfo](#alertdeliverystatusinfo)
  * categoryId `string`
  * detailedHistory [AlertHistoryInfoDetailed](#alerthistoryinfodetailed)
  * externalId `string`
  * flags `integer`
  * id `string`
  * lastModified `string`
  * requiredAcknowledgements `integer`
  * status `integer` (values: 0, 1, 2, 4, 8, 16, 32)
  * subscriptionId `string`
  * teamId `string`
  * text `string`
  * title `string`

### OverviewEvent
* OverviewEvent `object`
  * alertId `string`
  * categoryId `string`
  * creationTime `string`
  * eventSourceType `integer` (values: 0, 1, 2, 3, 4, 5)
  * eventStatus `integer` (values: 0, 1, 2, 3, 1000)
  * id `string`
  * lastModified `string`
  * severity `integer` (values: 0, 1, 2)
  * text `string`
  * title `string`

### PagedResultsPublicContinuationToken
* PagedResultsPublicContinuationToken `object`
  * nextPartitionKey `string`
  * nextRowKey `string`
  * nextTableName `string`

### PagedResultsPublic[OverviewAlert]
* PagedResultsPublic[OverviewAlert] `object`
  * continuationToken [PagedResultsPublicContinuationToken](#pagedresultspubliccontinuationtoken)
  * hasMore `boolean`
  * results `array`
    * items [OverviewAlert](#overviewalert)

### PagedResultsPublic[OverviewEvent]
* PagedResultsPublic[OverviewEvent] `object`
  * continuationToken [PagedResultsPublicContinuationToken](#pagedresultspubliccontinuationtoken)
  * hasMore `boolean`
  * results `array`
    * items [OverviewEvent](#overviewevent)

### PersonalCategorySettings
* PersonalCategorySettings `object`
  * categoryId `string`
  * hidden `boolean`
  * mute `boolean`
  * ringtone `string`

### PlanFeature
* PlanFeature `object`
  * name `string`
  * value `string`

### PlanInfo
* PlanInfo `object`
  * description `string`
  * display `string`
  * featureDescription `string`
  * features `array`
    * items [PlanFeature](#planfeature)
  * id `string`
  * name `string`
  * upgradeDescription `string`
  * userAddonKey `string`

### PrepaidBalanceInfo
* PrepaidBalanceInfo `object`
  * balance `integer`
  * latestTopUp `string`
  * pendingTransactions `boolean`

### PrepaidPackageInfo
* PrepaidPackageInfo `object`
  * code `string`
  * description `string`
  * name `string`
  * prices `array`
    * items [PriceInfo](#priceinfo)

### PrepaidSettingsInfo
* PrepaidSettingsInfo `object`
  * topUpAmount `integer`
  * topUpEnabled `boolean`
  * topUpLimit `integer`

### PrepaidTransactionCreationInfo
* PrepaidTransactionCreationInfo `object`
  * packageCode `string`

### PrepaidTransactionInfo
* PrepaidTransactionInfo `object`
  * amount `integer`
  * autoTopUpId `string`
  * created `string`
  * createdBy `string`
  * currency `string`
  * modified `string`
  * packageCode `string`
  * status `string`
  * statusCode `integer`
  * subscriptionId `string`
  * transactionId `string`

### PriceInfo
* PriceInfo `object`
  * currency `string`
  * price `integer`

### RaiseAlertInfo
* RaiseAlertInfo `object`
  * attachments `array`
    * items [AlertAttachment](#alertattachment)
  * category `string`
  * externalId `string`
  * flags `integer`
  * parameters `array`
    * items [EventParameterInfo](#eventparameterinfo)
  * severity `integer` (values: 0, 1, 2)
  * text **required** `string`
  * title **required** `string`

### ScheduleInfo
* ScheduleInfo `object`
  * end `string`
  * id `string`
  * options `integer`
  * start `string`
  * userId `string`

### ScriptDescriptionData
* ScriptDescriptionData `object`
  * description `string`
  * name `string`
  * scriptType `string`
  * shortDescription `string`

### ScriptInstanceCustomUserData
* ScriptInstanceCustomUserData `object`
  * customScriptDescription `string`
  * customScriptName `string`
  * instanceId `string`
  * scriptName `string`

### ScriptInstanceDetails
* ScriptInstanceDetails `object`
  * config `object`
  * customScriptDescription `string`
  * customScriptName `string`
  * enabled `boolean`
  * eventPattern `object`
  * instanceId `string`
  * lastModified `string`
  * runtimeInformation [ScriptInstanceInfoRuntimeInformationModel](#scriptinstanceinforuntimeinformationmodel)
  * scriptId `string`
  * scriptName `string`
  * subscriptionId `string`

### ScriptInstanceInfoRuntimeInformationModel
* ScriptInstanceInfoRuntimeInformationModel `object`
  * runtimeStatus `integer` (values: 0, 1, 2, 3, -1)
  * runtimeStatusMessage `string`

### ScriptLocalizationDetail
* ScriptLocalizationDetail `object`
  * config `object`
  * data [ScriptDescriptionData](#scriptdescriptiondata)
  * language `string`

### StringSegment
* StringSegment `object`
  * buffer `string`
  * hasValue `boolean`
  * length `integer`
  * offset `integer`
  * value `string`

### SubscriptionAdoptionInfo
* SubscriptionAdoptionInfo `object`
  * ownerEmail **required** `string`

### SubscriptionCreationInfo
* SubscriptionCreationInfo `object`
  * language `string`
  * name **required** `string`
  * ownerEmail **required** `string`
  * timezone `string`

### SubscriptionEndpointInfo
* SubscriptionEndpointInfo `object`
  * address `string`
  * lastEvent `string`
  * type `integer` (values: 0, 1, 2, 3)

### SubscriptionFeature
* SubscriptionFeature `object`
  * name `string`
  * type `integer`
  * value `string`

### SubscriptionInfo
* SubscriptionInfo `object`
  * branchId `string`
  * country `string`
  * currency `string`
  * endpoints `array`
    * items [SubscriptionEndpointInfo](#subscriptionendpointinfo)
  * externalAccountId `string`
  * id `string`
  * name `string`
  * nextBilling `string`
  * ownerId `string`
  * planCode `string`
  * planState `integer`
  * referralEnabled `boolean`
  * status `integer`
  * teamIds `array`
    * items `string`

### SubscriptionProfile
* SubscriptionProfile `object`
  * name `string`

### TeamDutySummaryInfo
* TeamDutySummaryInfo `object`
  * dutyAssistEnabled `boolean`
  * dutySummaries `array`
    * items [DutySummaryInfo](#dutysummaryinfo)

### TeamInfo
* TeamInfo `object`
  * id `string`
  * memberIds `array`
    * items `string`
  * name `string`
  * subscriptionId `string`
  * timezone `string`

### TeamSetupProgress
* TeamSetupProgress `object`
  * completedSteps `array`
    * items `string`
  * teamId `string`
  * timestamp `string`

### UserBranchInfo
* UserBranchInfo `object`
  * branchId `string`
  * isBranchManager `boolean`
  * isBranchMember `boolean`

### UserDeliveryStatusInfo
* UserDeliveryStatusInfo `object`
  * statusCode `integer` (values: 0, 1, 2, 4, 6, 8, 24, 26, 30, 31, 32)
  * userId `string`

### UserDutyInfo
* UserDutyInfo `object`
  * lastChange `string`
  * onDuty `boolean`
  * onManagerDuty `boolean`
  * overdue `boolean`

### UserImage
* UserImage `object`
  * content `string`
  * contentDispostion `string`
  * contentEncoding `string`
  * contentType `string`
  * lastModified `string`
  * name `string`

### UserInfo
* UserInfo `object`
  * colorIndex `integer`
  * dutyInfos [UserDutyInfo](#userdutyinfo)
  * id `string`
  * isDeactivated `boolean`
  * isInvite `boolean`
  * mail `string`
  * name `string`
  * subscriptionId `string`

### UserLicenseInfo
* UserLicenseInfo `object`
  * currentUsers `integer`
  * isFree `boolean`
  * isTrial `boolean`
  * licensedUsers `integer`
  * planCode `string`

### UserLicenseUpdate
* UserLicenseUpdate `object`
  * currency `string`
  * interval **required** `integer` (values: 0, 1, 4)
  * licensedUsers **required** `integer`
  * planId **required** `string`

### UserSetupProgress
* UserSetupProgress `object`
  * completedSteps `array`
    * items `string`
  * timestamp `string`
  * userId `string`

### WebhookBaseInfo
* WebhookBaseInfo `object`: Basic external webhook model for update/creation.
  * extUrl **required** `string`: Url to the external webhook. It will receive all outgoing events.

### WebhookInfo
* WebhookInfo `object`: Basic information about an external webhook.
  * extUrl **required** `string`: Url to the external webhook. It will receive all outgoing events.
  * id `string`: Id of the webhook in SIGNL4.
  * subId `string`: Id of the subscription that is owning the webhook.


