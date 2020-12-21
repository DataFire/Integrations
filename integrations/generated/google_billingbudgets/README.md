# @datafire/google_billingbudgets

Client library for Cloud Billing Budget API

## Installation and Usage
```bash
npm install --save @datafire/google_billingbudgets
```
```js
let google_billingbudgets = require('@datafire/google_billingbudgets').create({
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

The Cloud Billing Budget API stores Cloud Billing budgets, which define a budget plan and the rules to execute as spend is tracked against that plan.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_billingbudgets.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_billingbudgets.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### billingbudgets.billingAccounts.budgets.delete
Deletes a budget. Returns successfully if already deleted.


```js
google_billingbudgets.billingbudgets.billingAccounts.budgets.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### billingbudgets.billingAccounts.budgets.get
Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.


```js
google_billingbudgets.billingbudgets.billingAccounts.budgets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)

### billingbudgets.billingAccounts.budgets.patch
Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.


```js
google_billingbudgets.billingbudgets.billingAccounts.budgets.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
  * updateMask `string`: Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
  * body [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)

### billingbudgets.billingAccounts.budgets.list
Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.


```js
google_billingbudgets.billingbudgets.billingAccounts.budgets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.
  * pageSize `integer`: Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
  * pageToken `string`: Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudBillingBudgetsV1ListBudgetsResponse](#googlecloudbillingbudgetsv1listbudgetsresponse)

### billingbudgets.billingAccounts.budgets.create
Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.


```js
google_billingbudgets.billingbudgets.billingAccounts.budgets.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.
  * body [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)



## Definitions

### GoogleCloudBillingBudgetsV1Budget
* GoogleCloudBillingBudgetsV1Budget `object`: A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). Currently all plans are monthly budgets so the usage period(s) tracked are implied (calendar months of usage back-to-back).
  * amount [GoogleCloudBillingBudgetsV1BudgetAmount](#googlecloudbillingbudgetsv1budgetamount)
  * budgetFilter [GoogleCloudBillingBudgetsV1Filter](#googlecloudbillingbudgetsv1filter)
  * displayName `string`: User data for display name in UI. The name must be less than or equal to 60 characters.
  * etag `string`: Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
  * name `string`: Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
  * notificationsRule [GoogleCloudBillingBudgetsV1NotificationsRule](#googlecloudbillingbudgetsv1notificationsrule)
  * thresholdRules `array`: Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget.
    * items [GoogleCloudBillingBudgetsV1ThresholdRule](#googlecloudbillingbudgetsv1thresholdrule)

### GoogleCloudBillingBudgetsV1BudgetAmount
* GoogleCloudBillingBudgetsV1BudgetAmount `object`: The budgeted amount for each usage period.
  * lastPeriodAmount [GoogleCloudBillingBudgetsV1LastPeriodAmount](#googlecloudbillingbudgetsv1lastperiodamount)
  * specifiedAmount [GoogleTypeMoney](#googletypemoney)

### GoogleCloudBillingBudgetsV1Filter
* GoogleCloudBillingBudgetsV1Filter `object`: A filter for a budget, limiting the scope of the cost to calculate.
  * creditTypes `array`: Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. If Filter.credit_types_treatment is **not** INCLUDE_SPECIFIED_CREDITS, this field must be empty. See [a list of acceptable credit type values](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#credits-type).
    * items `string`
  * creditTypesTreatment `string` (values: CREDIT_TYPES_TREATMENT_UNSPECIFIED, INCLUDE_ALL_CREDITS, EXCLUDE_ALL_CREDITS, INCLUDE_SPECIFIED_CREDITS): Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
  * labels `object`: Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage.
  * projects `array`: Optional. A set of projects of the form `projects/{project}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will include all usage for the billing account, regardless of which project the usage occurred on. Only zero or one project can be specified currently.
    * items `string`
  * services `array`: Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
    * items `string`
  * subaccounts `array`: Optional. A set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If the field is omitted, the report will include usage from the parent account and all subaccounts, if they exist.
    * items `string`

### GoogleCloudBillingBudgetsV1LastPeriodAmount
* GoogleCloudBillingBudgetsV1LastPeriodAmount `object`: Describes a budget amount targeted to last period's spend. At this time, the amount is automatically 100% of last period's spend; that is, there are no other options yet. Future configuration will be described here (for example, configuring a percentage of last period's spend).

### GoogleCloudBillingBudgetsV1ListBudgetsResponse
* GoogleCloudBillingBudgetsV1ListBudgetsResponse `object`: Response for ListBudgets
  * budgets `array`: List of the budgets owned by the requested billing account.
    * items [GoogleCloudBillingBudgetsV1Budget](#googlecloudbillingbudgetsv1budget)
  * nextPageToken `string`: If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`.

### GoogleCloudBillingBudgetsV1NotificationsRule
* GoogleCloudBillingBudgetsV1NotificationsRule `object`: NotificationsRule defines notifications that are sent based on budget spend and thresholds.
  * disableDefaultIamRecipients `boolean`: Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.
  * monitoringNotificationChannels `array`: Optional. Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST resource name of a monitoring notification channel with the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels are allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details.
    * items `string`
  * pubsubTopic `string`: Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets#manage-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details on Pub/Sub roles and permissions.
  * schemaVersion `string`: Optional. The schema version of the notification sent to `pubsub_topic`. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format

### GoogleCloudBillingBudgetsV1ThresholdRule
* GoogleCloudBillingBudgetsV1ThresholdRule `object`: ThresholdRule contains a definition of a threshold which triggers an alert (a notification of a threshold being crossed) to be sent when spend goes above the specified amount. Alerts are automatically e-mailed to users with the Billing Account Administrator role or the Billing Account User role. The thresholds here have no effect on notifications sent to anything configured under `Budget.all_updates_rule`.
  * spendBasis `string` (values: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND): Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set.
  * thresholdPercent `number`: Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleTypeMoney
* GoogleTypeMoney `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The three-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
  * units `string`: The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.


