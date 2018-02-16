# @datafire/azure_automation_account

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_account
```
```js
let azure_automation_account = require('@datafire/azure_automation_account').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_account.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Lists all of the available Automation REST API operations.


```js
azure_automation_account.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list of Automation operations
  * value `array`: List of Automation operations supported by the Automation resource provider.
    * items `object`: Automation REST API operation
      * display `object`: Provider, Resource and Operation values
        * operation `string`: Operation type: Read, write, delete, etc.
        * provider `string`: Service provider: Microsoft.Automation
        * resource `string`: Resource on which the operation is performed: Runbooks, Jobs etc.
      * name `string`: Operation name: {provider}/{resource}/{operation}

### AutomationAccount_List
Retrieve a list of accounts within a given subscription.


```js
azure_automation_account.AutomationAccount_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list account operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets list of accounts.
    * items `object`: Definition of the automation account type.
      * etag `string`: Gets or sets the etag of the resource.
      * properties `object`: Definition of the account property.
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * lastModifiedBy `string`: Gets or sets the last modified by.
        * lastModifiedTime `string`: Gets the last modified time.
        * sku `object`: The account SKU.
          * capacity `integer`: Gets or sets the SKU capacity.
          * family `string`: Gets or sets the SKU family.
          * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
        * state `string` (values: Ok, Unavailable, Suspended): Gets status of account.
      * id `string`: Resource Id
      * location **required** `string`: Resource location
      * name `string`: Resource name
      * tags `object`: Resource tags
      * type `string`: Resource type

### AutomationAccount_ListByResourceGroup
Retrieve a list of accounts within a given resource group.


```js
azure_automation_account.AutomationAccount_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list account operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets list of accounts.
    * items `object`: Definition of the automation account type.
      * etag `string`: Gets or sets the etag of the resource.
      * properties `object`: Definition of the account property.
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * lastModifiedBy `string`: Gets or sets the last modified by.
        * lastModifiedTime `string`: Gets the last modified time.
        * sku `object`: The account SKU.
          * capacity `integer`: Gets or sets the SKU capacity.
          * family `string`: Gets or sets the SKU family.
          * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
        * state `string` (values: Ok, Unavailable, Suspended): Gets status of account.
      * id `string`: Resource Id
      * location **required** `string`: Resource location
      * name `string`: Resource name
      * tags `object`: Resource tags
      * type `string`: Resource type

### AutomationAccount_Delete
Delete an automation account.


```js
azure_automation_account.AutomationAccount_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: Automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### AutomationAccount_Get
Get information about an Automation Account.


```js
azure_automation_account.AutomationAccount_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the automation account type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the account property.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets the last modified time.
    * sku `object`: The account SKU.
      * capacity `integer`: Gets or sets the SKU capacity.
      * family `string`: Gets or sets the SKU family.
      * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
    * state `string` (values: Ok, Unavailable, Suspended): Gets status of account.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### AutomationAccount_Update
Update an automation account.


```js
azure_automation_account.AutomationAccount_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: Automation account name.
  * parameters **required** `object`: The parameters supplied to the update automation account operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets the name of the resource.
    * properties **required** `object`: The parameters supplied to the update account properties.
      * sku `object`: The account SKU.
        * capacity `integer`: Gets or sets the SKU capacity.
        * family `string`: Gets or sets the SKU family.
        * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
    * tags `object`: Gets or sets the tags attached to the resource.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the automation account type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the account property.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets the last modified time.
    * sku `object`: The account SKU.
      * capacity `integer`: Gets or sets the SKU capacity.
      * family `string`: Gets or sets the SKU family.
      * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
    * state `string` (values: Ok, Unavailable, Suspended): Gets status of account.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### AutomationAccount_CreateOrUpdate
Create or update automation account.


```js
azure_automation_account.AutomationAccount_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: Parameters supplied to the create or update automation account.
  * parameters **required** `object`: The parameters supplied to the create or update automation account operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets name of the resource.
    * properties `object`: The parameters supplied to the create or update account properties.
      * sku `object`: The account SKU.
        * capacity `integer`: Gets or sets the SKU capacity.
        * family `string`: Gets or sets the SKU family.
        * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
    * tags `object`: Gets or sets the tags attached to the resource.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the automation account type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the account property.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets the last modified time.
    * sku `object`: The account SKU.
      * capacity `integer`: Gets or sets the SKU capacity.
      * family `string`: Gets or sets the SKU family.
      * name **required** `string` (values: Free, Basic): Gets or sets the SKU name of the account.
    * state `string` (values: Ok, Unavailable, Suspended): Gets status of account.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Statistics_ListByAutomationAccount
Retrieve the statistics for the account.


```js
azure_automation_account.Statistics_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list statistics operation.
  * value `array`: Gets or sets a list of statistics.
    * items `object`: Definition of the statistic.
      * counterProperty `string`: Gets the property value of the statistic.
      * counterValue `integer`: Gets the value of the statistic.
      * endTime `string`: Gets the endTime of the statistic.
      * id `string`: Gets the id.
      * startTime `string`: Gets the startTime of the statistic.

### Usages_ListByAutomationAccount
Retrieve the usage for the account id.


```js
azure_automation_account.Usages_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the get usage operation.
  * value `array`: Gets or sets usage.
    * items `object`: Definition of Usage.
      * currentValue `number`: Gets or sets the current usage value.
      * id `string`: Gets or sets the id of the resource.
      * limit `integer`: Gets or sets max limit. -1 for unlimited
      * name `object`: Definition of usage counter name.
        * localizedValue `string`: Gets or sets the localized usage counter name.
        * value `string`: Gets or sets the usage counter name.
      * throttleStatus `string`: Gets or sets the throttle status.
      * unit `string`: Gets or sets the usage unit name.



## Definitions

*This integration has no definitions*
