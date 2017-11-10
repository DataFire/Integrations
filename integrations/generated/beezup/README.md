# @datafire/beezup

Client library for BeezUP

## Installation and Usage
```bash
npm install --save datafire @datafire/beezup
```

```js
let datafire = require('datafire');
let beezup = require('@datafire/beezup').create({
  api_key: "",
});

beezup.GetMarketplaceAccountsSynchronization({}).then(data => {
  console.log(data);
})
```

## Description
# The REST API of BeezUP system
## Overview
The REST APIs provide programmatic access to read and write BeezUP data. 
Basically, with this API you will be able to do everything like you were with your browser on https://go.beezup.com !

The main features are:
- Register and manage your account
- Create and manage and share your stores with your friends/co-workers.
- Import your product catalog and schedule the auto importation
- Search the channels your want to use
- Configure your channels for your catalogs to export your product information:
    - cost and general settings
    - category and columns mappings
    - your will be able to create and manage your custom column
    - put in place exlusion filters based on simple conditions on your product data
    - override product values
    - get product vision for a channel catalog scope
- Analyze and optimize your performance of your catalogs on all yours channels with different type of reportings by day, channel, category and by product.
- Automatize your optimisation by using rules!
- And of course... Manage your orders harvested from all your marketplaces:
    - Synchronize your orders in an uniformized way
    - Get the available actions and update the order status
- ...and more!

## Authentication credentials
The public API with the base path **/v2/public** have been put in place to give you an entry point to our system for the user registration, login and lost password. The public API does not require any credentials.
We give you the some public list of values and public channels for our public commercial web site [www.beezup.com](http://www.beezup.com).

The user API with the base path **/v2/user** requires a token which is available on this page:
https://go.beezup.com/Account/MyAccount

## Things to keep in mind
### API Rate Limits
- The BeezUP REST API is limited to 100 calls/minute.

### Media type
The default media type for requests and responses is application/json. Where noted, some operations support other content types. If no additional content type is mentioned for a specific operation, then the media type is application/json.

### Required content type
The required and default encoding for the request and responses is UTF8.

### Required date time format
All our date time are formatted in ISO 8601 format: 2014-06-24T16:25:00Z.

### Base URL
The Base URL of the BeezUP API Order Management REST API conforms to the following template.

https://api.beezup.com

All URLs returned by the BeezUP API are relative to this base URL, and all requests to the REST API must use this base URL template.

You can test our API on https://api-docs.beezup.com/swagger-ui\
You can contact us on [gitter, #BeezUP/API](https://gitter.im/beezUP/API)


## Actions
### GetChannelsIndex
Use this operation to get the correct link to the channels and to the list of values


```js
beezup.GetChannelsIndex({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetChannels
The channel list for one country


```js
beezup.GetChannels({
  "countryIsoCode": "",
  "Accept-Encoding": []
}, context)
```

#### Parameters
* countryIsoCode (string) **required** - The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \
* Accept-Encoding (array) **required** - Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size.
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetPublicLovIndex
Get all list names


```js
beezup.GetPublicLovIndex({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetPublicListOfValues
Get the list of values related to this list name


```js
beezup.GetPublicListOfValues({
  "listName": ""
}, context)
```

#### Parameters
* listName (string) **required** - The list of value name your want to get
* Accept-Language (array) - Indicates that the client accepts the following languages.
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### Login
User Login - The login will give your tokens


```js
beezup.Login({
  "request": {
    "login": "",
    "password": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### LostPassword
Lost password - Your password will be regenerated and sent to your email


```js
beezup.LostPassword({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email

### Register
User Registration - Create a new user on BeezUP


```js
beezup.Register({
  "request": {
    "email": "",
    "password": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### AnalyticsIndex
Get the Analytics API operation index


```js
beezup.AnalyticsIndex(null, context)
```

#### Parameters
*This action has no parameters*

### GetTrackingStatus
Your clicks and orders are eventually consistent. \
This operation indicates you at which date the projections are.



```js
beezup.GetTrackingStatus(null, context)
```

#### Parameters
*This action has no parameters*

### AnalyticsStoreIndex
Get the Analytics API operation index for one store


```js
beezup.AnalyticsStoreIndex({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### OptimiseByCategory
/!\ WARNING /!\ \
This operation will reenable or disable products's category for every channel indicated in the body.



```js
beezup.OptimiseByCategory({
  "storeId": "",
  "catalogCategoryId": "",
  "actionName": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* catalogCategoryId (string) **required** - The category identifier concerned by this optimisation
* actionName (string) **required**
* request (array)

### OptimiseByChannel
/!\ WARNING /!\ \
Apply the operation on every product on this channel.



```js
beezup.OptimiseByChannel({
  "storeId": "",
  "channelId": "",
  "actionName": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* channelId (string) **required** - The channel identifier concerned by this optimisation
* actionName (string) **required**

### OptimiseByProduct
/!\ WARNING /!\ \
This operation will reenable or disable this product for every channel indicated in the body.



```js
beezup.OptimiseByProduct({
  "storeId": "",
  "productId": "",
  "actionName": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* productId (string) **required** - The product identifier concerned by this optimisation
* actionName (string) **required**
* request (array)

### CopyOptimisation
Copy products optimisation between 2 channels


```js
beezup.CopyOptimisation({
  "storeId": "",
  "request": {
    "channelIdSource": "",
    "channelIdTarget": "",
    "keepExistingOptimisation": true
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - Copy the optimisation between 2 channels

### Optimise
/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.



```js
beezup.Optimise({
  "storeId": "",
  "actionName": "",
  "request": null
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* actionName (string) **required**
* request (undefined) **required**

### GetStoreReportByCategory
Get the report by category


```js
beezup.GetStoreReportByCategory({
  "storeId": "",
  "request": null
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (undefined) **required**

### GetStoreReportByChannel
Get the report by channel


```js
beezup.GetStoreReportByChannel({
  "storeId": "",
  "request": null
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (undefined) **required**

### GetStoreReportByDay
Get the report by day


```js
beezup.GetStoreReportByDay({
  "storeId": "",
  "request": {
    "beginPeriodUtcDate": "",
    "endPeriodUtcDate": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required**

### GetStoreReportByProduct
Get the report by product


```js
beezup.GetStoreReportByProduct({
  "storeId": "",
  "request": null
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (undefined) **required**

### GetReportFilters
Get report filter list for the given store


```js
beezup.GetReportFilters({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### DeleteReportFilter
Delete the report filter


```js
beezup.DeleteReportFilter({
  "storeId": "",
  "reportFilterId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* reportFilterId (string) **required** - Your report filter identifier

### GetReportFilter
Get the report filter description


```js
beezup.GetReportFilter({
  "storeId": "",
  "reportFilterId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* reportFilterId (string) **required** - Your report filter identifier

### SaveReportFilter
Save the report filter


```js
beezup.SaveReportFilter({
  "storeId": "",
  "reportFilterId": "",
  "reportFilter": {
    "reportFilterName": "",
    "parameters": null
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* reportFilterId (string) **required** - Your report filter identifier
* reportFilter (object) **required**

### GetRules
Gets the list of rules for a given store


```js
beezup.GetRules({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### CreateRule
Rule creation


```js
beezup.CreateRule({
  "storeId": "",
  "request": {
    "optimisationActionName": "",
    "ruleName": "",
    "reportFilterId": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required**

### GetRulesExecutions
Get the rules execution history


```js
beezup.GetRulesExecutions({
  "storeId": "",
  "pageNumber": 0,
  "pageSize": 0
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* pageNumber (integer) **required** - The page to retrieve
* pageSize (integer) **required** - The count of rule history to retrieve

### RunRules
Run all rules for this store


```js
beezup.RunRules({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### DeleteRule
Delete Rule


```js
beezup.DeleteRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### GetRule
Gets the rule


```js
beezup.GetRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### UpdateRule
Update Rule


```js
beezup.UpdateRule({
  "storeId": "",
  "ruleId": "",
  "request": {
    "ruleName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier
* request (object) **required** - This update will replace the following values.

### DisableRule
Disable rule


```js
beezup.DisableRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### EnableRule
Enable rule


```js
beezup.EnableRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### MoveDownRule
Move the rule down


```js
beezup.MoveDownRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### MoveUpRule
Move the rule up


```js
beezup.MoveUpRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### RunRule
Run rule


```js
beezup.RunRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* ruleId (string) **required** - Your rule identifier

### GetStoreTrackedClicks
Get the latest clicks tracked


```js
beezup.GetStoreTrackedClicks({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* count (integer) - The click's count you want to get

### GetStoreTrackedExternalOrders
Get the latest external orders tracked


```js
beezup.GetStoreTrackedExternalOrders({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* count (integer) - The external order's count you want to get

### GetStoreTrackedOrders
Get the latest orders tracked


```js
beezup.GetStoreTrackedOrders({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* count (integer) - The order's count you want to get

### GetStoreTrackingStatus
Your clicks and orders are eventually consistent. \
This operation indicates you at which date the projections are for this store.



```js
beezup.GetStoreTrackingStatus({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### CatalogIndex
The operation will give you all the operations you will be able to do and all the LOV used in this API.


```js
beezup.CatalogIndex(null, context)
```

#### Parameters
*This action has no parameters*

### Catalog_GetBeezUPColumns
Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.


```js
beezup.Catalog_GetBeezUPColumns(null, context)
```

#### Parameters
*This action has no parameters*

### CatalogStoreIndex
The operation will give you all the operations you will be able to do on this store for this API.


```js
beezup.CatalogStoreIndex({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Auto_DeleteAutoImport
Delete Auto Import


```js
beezup.Auto_DeleteAutoImport({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Auto_GetAutoImportConfiguration
Get the auto import configuration


```js
beezup.Auto_GetAutoImportConfiguration({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Importation_ActivateAutoImport
Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.


```js
beezup.Importation_ActivateAutoImport({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Auto_PauseAutoImport
Pause Auto Import


```js
beezup.Auto_PauseAutoImport({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Auto_ResumeAutoImport
Resume Auto Import


```js
beezup.Auto_ResumeAutoImport({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Auto_ConfigureAutoImportInterval
Configure Auto Import Interval


```js
beezup.Auto_ConfigureAutoImportInterval({
  "storeId": "",
  "request": {
    "interval": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The message request to configure the auto import interval

### Auto_ScheduleAutoImport
Configure Auto Import Schedules


```js
beezup.Auto_ScheduleAutoImport({
  "storeId": "",
  "request": {
    "schedules": []
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The message request to schedule the auto import

### Auto_StartAutoImport
Start Auto Import Manually


```js
beezup.Auto_StartAutoImport({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Catalog_GetCatalogColumns
Get catalog column list


```js
beezup.Catalog_GetCatalogColumns({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Catalog_ChangeCatalogColumnUserName
Change Catalog Column User Name


```js
beezup.Catalog_ChangeCatalogColumnUserName({
  "storeId": "",
  "columnId": "",
  "request": {
    "userColumName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The catalog column identifier
* request (object) **required** - The message request for the change user column name

### Catalog_GetCategories
Get category list


```js
beezup.Catalog_GetCategories({
  "storeId": "",
  "Accept-Encoding": []
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* Accept-Encoding (array) **required** - Indicates that the client accepts that the response will be compressed to reduce traffic size.

### Catalog_GetCustomColumns
Get custom column list


```js
beezup.Catalog_GetCustomColumns({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Catalog_ComputeExpression
Compute the expression for this catalog.


```js
beezup.Catalog_ComputeExpression({
  "storeId": "",
  "request": {
    "productValues": {},
    "encryptedExpression": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The request message to compute an expression based on the provided product values

### Catalog_DeleteCustomColumn
Delete custom column


```js
beezup.Catalog_DeleteCustomColumn({
  "storeId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The custom column identifier

### Catalog_SaveCustomColumn
Create or replace a custom column


```js
beezup.Catalog_SaveCustomColumn({
  "storeId": "",
  "columnId": "",
  "request": {
    "userColumnName": "",
    "encryptedExpression": "",
    "encryptedBlocklyExpression": "",
    "displayGroupName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The custom column identifier
* request (object) **required** - The request message to create a custom column

### Catalog_GetCustomColumnExpression
Get the encrypted custom column expression


```js
beezup.Catalog_GetCustomColumnExpression({
  "storeId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The custom column identifier

### Catalog_ChangeCustomColumnExpression
Change custom column expression


```js
beezup.Catalog_ChangeCustomColumnExpression({
  "storeId": "",
  "columnId": "",
  "request": {
    "encryptedExpression": "",
    "encryptedBlocklyExpression": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The custom column identifier
* request (object) **required** - The request message to change the custom column expression

### Catalog_ChangeCustomColumnUserName
Change Custom Column User Name


```js
beezup.Catalog_ChangeCustomColumnUserName({
  "storeId": "",
  "columnId": "",
  "request": {
    "userColumName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* columnId (string) **required** - The custom column identifier
* request (object) **required** - The message request for the change user column name

### Importation_GetReportings
Get the latest catalog importation reporting


```js
beezup.Importation_GetReportings({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Importation_StartManualUpdate
Start Manual Import


```js
beezup.Importation_StartManualUpdate({
  "storeId": "",
  "request": {
    "input": {
      "files": []
    }
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The message request start a manual importation process.  Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.

### Importation_GetImportationMonitoring
Get the importation status


```js
beezup.Importation_GetImportationMonitoring({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_Cancel
Cancel importation


```js
beezup.Importation_Cancel({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_GetDetectedCatalogColumns
Get detected catalog columns during this importation.


```js
beezup.Importation_GetDetectedCatalogColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_ConfigureCatalogColumn
Configure catalog column


```js
beezup.Importation_ConfigureCatalogColumn({
  "storeId": "",
  "executionId": "",
  "columnId": "",
  "request": {
    "catalogColumn": {
      "id": "",
      "catalogColumnName": "",
      "userColumName": "",
      "configuration": {
        "columnImportance": "",
        "columnDataType": ""
      },
      "links": {}
    }
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier
* request (object) **required** - The request to configure a catalog column

### Importation_IgnoreColumn
Ignore Column


```js
beezup.Importation_IgnoreColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier

### Importation_MapCatalogColumn
Map catalog column to a BeezUP column


```js
beezup.Importation_MapCatalogColumn({
  "storeId": "",
  "executionId": "",
  "columnId": "",
  "request": {
    "beezUPColumnName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The catalog column identifier
* request (object) **required**

### Importation_ReattendColumn
Reattend Column


```js
beezup.Importation_ReattendColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier

### Importation_UnmapCatalogColumn
Unmap catalog column


```js
beezup.Importation_UnmapCatalogColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The catalog column identifier

### Importation_Commit
Commit Importation


```js
beezup.Importation_Commit({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_CommitColumns
Commit columns


```js
beezup.Importation_CommitColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_ConfigureRemainingCatalogColumns
This operation should be used after you have mapped the required BeezUP Columns


```js
beezup.Importation_ConfigureRemainingCatalogColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_GetCustomColumns
Get custom columns currently place in this importation


```js
beezup.Importation_GetCustomColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_DeleteCustomColumn
Delete Custom Column


```js
beezup.Importation_DeleteCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier

### Importation_SaveCustomColumn
Create or replace a custom column


```js
beezup.Importation_SaveCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": "",
  "request": {
    "encryptedExpression": "",
    "encryptedBlocklyExpression": "",
    "userColumName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier
* request (object) **required** - The message request to change a custom column expression an user name

### Importation_GetCustomColumnExpression
Get the encrypted custom column expression in this importation


```js
beezup.Importation_GetCustomColumnExpression({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier

### Importation_MapCustomColumn
Map custom column to a BeezUP column


```js
beezup.Importation_MapCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": "",
  "request": {
    "beezUPColumnName": ""
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier
* request (object) **required**

### Importation_UnmapCustomColumn
Unmap custom column


```js
beezup.Importation_UnmapCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* columnId (string) **required** - The custom column identifier

### Importation_GetProductSample
Get the product sample related to this importation with all columns (catalog and custom)


```js
beezup.Importation_GetProductSample({
  "storeId": "",
  "executionId": "",
  "productSampleIndex": 0
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* productSampleIndex (integer) **required** - Index of the product sample. Starting from 0 to 99.

### Importation_GetProductSampleCustomColumnValue
/!\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values


```js
beezup.Importation_GetProductSampleCustomColumnValue({
  "storeId": "",
  "executionId": "",
  "productSampleIndex": 0,
  "columnId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation
* productSampleIndex (integer) **required** - Index of the product sample. Starting from 0 to 99.
* columnId (string) **required** - The custom column identifier

### Importation_TechnicalProgression
Get technical progression


```js
beezup.Importation_TechnicalProgression({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* executionId (string) **required** - The execution identifier of you catalog importation

### Importation_GetManualUpdateLastInputConfig
Get the last input configuration


```js
beezup.Importation_GetManualUpdateLastInputConfig({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Catalog_GetProductBySku
Get product by Sku


```js
beezup.Catalog_GetProductBySku({
  "storeId": "",
  "sku": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* sku (string) **required** - The product sku you want to get

### Catalog_GetProducts
Get product list


```js
beezup.Catalog_GetProducts({
  "storeId": "",
  "request": {
    "pageNumber": 0,
    "pageSize": 0,
    "columnIdList": []
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The request message to get products based on these filters

### Catalog_GetRandomProducts
We will return 10 products randomly selected with all product values


```js
beezup.Catalog_GetRandomProducts({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### Catalog_GetProductByProductId
Get product by ProductId


```js
beezup.Catalog_GetProductByProductId({
  "storeId": "",
  "productId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* productId (string) **required** - The product identifier you want to get

### GetChannelCatalogs
List all your current channel catalogs


```js
beezup.GetChannelCatalogs({}, context)
```

#### Parameters
* storeId (string) - The store identifier

### AddChannelCatalog
Add a new channel catalog


```js
beezup.AddChannelCatalog({
  "request": {
    "channelId": "",
    "storeId": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### GetChannelCatalogExclusionFilterOperators
Get channel catalog exclusion filter operators


```js
beezup.GetChannelCatalogExclusionFilterOperators(null, context)
```

#### Parameters
*This action has no parameters*

### GetChannelCatalogProductByChannelCatalog
Get channel catalog products related to these channel catalogs


```js
beezup.GetChannelCatalogProductByChannelCatalog({
  "request": {
    "storeId": "",
    "productId": "",
    "channelCatalogIds": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### DeleteChannelCatalog
Delete the channel catalog


```js
beezup.DeleteChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### GetChannelCatalog
Get the channel catalog information


```js
beezup.GetChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### GetChannelCatalogCategories
Get channel catalog categories


```js
beezup.GetChannelCatalogCategories({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### DisableChannelCatalogCategoryMapping
Disable a channel catalog category mapping


```js
beezup.DisableChannelCatalogCategoryMapping({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### MapChannelCatalogCategory
Map channel catalog category


```js
beezup.MapChannelCatalogCategory({
  "channelCatalogId": "",
  "request": {
    "overrideSubCategoryMappings": true,
    "autoMapNewSubCategories": true,
    "channelCatalogCategoryMapping": {
      "catalogCategoryPath": [],
      "channelCategoryPath": []
    }
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (object) **required** - The request message to make a mapping between catalog category path and a channel category path

### ReenableChannelCatalogCategoryMapping
Reenable a channel catalog category mapping


```js
beezup.ReenableChannelCatalogCategoryMapping({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### UnmapChannelCatalogCategory
Unmap channel catalog category


```js
beezup.UnmapChannelCatalogCategory({
  "channelCatalogId": "",
  "request": {
    "catalogCategoryPath": []
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (object) **required** - The request message to unmap a catalog category path to a channel category path

### ConfigureChannelCatalogColumnMappings
Configure channel catalog column mappings


```js
beezup.ConfigureChannelCatalogColumnMappings({
  "channelCatalogId": "",
  "request": []
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (array) **required** - The column mapping list between a channel and a catalog

### DisableChannelCatalog
Disable a channel catalog


```js
beezup.DisableChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### EnableChannelCatalog
Enable a channel catalog


```js
beezup.EnableChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### GetChannelCatalogExclusionFilters
Get channel catalog exclusion filters


```js
beezup.GetChannelCatalogExclusionFilters({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### ConfigureChannelCatalogExclusionFilters
Configure channel catalog exclusion filters


```js
beezup.ConfigureChannelCatalogExclusionFilters({
  "channelCatalogId": "",
  "request": []
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (array) **required** - The exclusion filter list

### GetChannelCatalogExportationCacheInfo
Get the exportation cache information


```js
beezup.GetChannelCatalogExportationCacheInfo({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### ClearChannelCatalogExportationCache
Clear the exportation cache


```js
beezup.ClearChannelCatalogExportationCache({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### GetChannelCatalogExportationHistory
Get the exportation history


```js
beezup.GetChannelCatalogExportationHistory({
  "channelCatalogId": "",
  "pageNumber": 0,
  "pageSize": 0
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* pageNumber (integer) **required** - The page number you want to get
* pageSize (integer) **required** - The entry count you want to get

### GetChannelCatalogProductInfoList
Get channel catalog product information list


```js
beezup.GetChannelCatalogProductInfoList({
  "channelCatalogId": "",
  "request": {
    "pageNumber": 0,
    "pageSize": 0,
    "criteria": {
      "logic": ""
    }
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (object) **required**

### GetChannelCatalogProductsCounters
Get channel catalog products' counters


```js
beezup.GetChannelCatalogProductsCounters({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier

### ExportChannelCatalogProductInfoList
Export channel catalog product information list


```js
beezup.ExportChannelCatalogProductInfoList({
  "channelCatalogId": "",
  "format": "",
  "request": {
    "pageNumber": 0,
    "pageSize": 0,
    "criteria": {
      "logic": ""
    }
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* format (string) **required** - The file type of the exportation
* request (object) **required**

### GetChannelCatalogProductInfo
Get channel catalog product information


```js
beezup.GetChannelCatalogProductInfo({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* productId (string) **required** - The product identifier

### DisableChannelCatalogProduct
By default a all your catalog products are exposed to the channel.
You can disable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api



```js
beezup.DisableChannelCatalogProduct({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* productId (string) **required** - The product identifier

### OverrideChannelCatalogProductValues
Override channel catalog product values


```js
beezup.OverrideChannelCatalogProductValues({
  "channelCatalogId": "",
  "productId": "",
  "request": {}
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* productId (string) **required** - The product identifier
* request (object) **required** - The key is the channel column identifier

### DeleteChannelCatalogProductValueOverride
Delete a specific channel catalog product value override


```js
beezup.DeleteChannelCatalogProductValueOverride({
  "channelCatalogId": "",
  "productId": "",
  "channelColumnId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* productId (string) **required** - The product identifier
* channelColumnId (string) **required** - The channel column identifier

### ReenableChannelCatalogProduct
By default a all your catalog products are exposed to the channel.
You can reenable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api



```js
beezup.ReenableChannelCatalogProduct({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* productId (string) **required** - The product identifier

### ConfigureChannelCatalogCostSettings
Configure channel catalog cost settings


```js
beezup.ConfigureChannelCatalogCostSettings({
  "channelCatalogId": "",
  "request": {
    "costType": ""
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (object) **required** - If this property is not indicated please force the user to configure the cost settings.

### ConfigureChannelCatalogGeneralSettings
Configure channel catalog general settings


```js
beezup.ConfigureChannelCatalogGeneralSettings({
  "channelCatalogId": "",
  "request": {
    "acceptToPublishInfo": true,
    "useBid": true,
    "doNotExportOutOfStockProducts": true,
    "activeBeezUPTracking": true
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - The channel catalog identifier
* request (object) **required** - Represents the general settings of your channel catalog

### GetAvailableChannels
List all available channel for this store


```js
beezup.GetAvailableChannels({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - The store identifier

### GetChannelInfo
Get channel information


```js
beezup.GetChannelInfo({
  "channelId": ""
}, context)
```

#### Parameters
* channelId (string) **required** - The channel identifier

### GetChannelCategories
Get channel categories


```js
beezup.GetChannelCategories({
  "channelId": "",
  "Accept-Encoding": []
}, context)
```

#### Parameters
* channelId (string) **required** - The channel identifier
* Accept-Encoding (array) **required** - Indicates that the client accepts that the response will be compressed to reduce traffic size.

### GetChannelColumns
Get channel columns


```js
beezup.GetChannelColumns({
  "channelId": "",
  "Accept-Encoding": []
}, context)
```

#### Parameters
* channelId (string) **required** - The channel identifier
* Accept-Encoding (array) **required** - Indicates that the client accepts that the response will be compressed to reduce traffic size.
* request (array)

### GetCustomerIndex
The index of all operations and LOV


```js
beezup.GetCustomerIndex({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetUserAccountInfo
Get user account information


```js
beezup.GetUserAccountInfo({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### ActivateUserAccount
Activate the user account


```js
beezup.ActivateUserAccount({
  "emailActivationId": ""
}, context)
```

#### Parameters
* emailActivationId (string) **required**

### ChangePassword
Change user password


```js
beezup.ChangePassword({
  "request": {
    "oldPassword": "",
    "newPassword": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### SaveCompanyInfo
Change company information


```js
beezup.SaveCompanyInfo({
  "request": {
    "company": "",
    "address": "",
    "postalCode": "",
    "city": "",
    "countryIsoCodeAlpha3": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### GetCreditCardInfo
Get credit card information


```js
beezup.GetCreditCardInfo({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### SaveCreditCardInfo
Save user credit card info


```js
beezup.SaveCreditCardInfo({
  "request": {
    "cardNumber": "",
    "cardVerificationCode": "",
    "expirationMonth": 0,
    "expirationYear": 0
  }
}, context)
```

#### Parameters
* request (object) **required**

### SavePersonalInfo
Save user personal information


```js
beezup.SavePersonalInfo({
  "request": {
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "beezUPTimeZoneId": 0
  }
}, context)
```

#### Parameters
* request (object) **required**

### GetProfilePictureInfo
Get profile picture information


```js
beezup.GetProfilePictureInfo({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### SaveProfilePictureInfo
Change user picture information


```js
beezup.SaveProfilePictureInfo({
  "request": {
    "profilePictureSelected": ""
  }
}, context)
```

#### Parameters
* request (object) **required**

### ResendEmailActivation
Resend email activation


```js
beezup.ResendEmailActivation(null, context)
```

#### Parameters
*This action has no parameters*

### GetBillingPeriods
Get billing periods conditions


```js
beezup.GetBillingPeriods({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetContracts
Get contract list


```js
beezup.GetContracts({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### CreateContract
Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers



```js
beezup.CreateContract({
  "request": null
}, context)
```

#### Parameters
* request (undefined) **required**

### TerminateCurrentContract
By default your contract are automatically renew. By calling this operation you can disable the auto renewal.


```js
beezup.TerminateCurrentContract({
  "request": {
    "contractTerminationReasonType": 0
  }
}, context)
```

#### Parameters
* request (object) **required** - The contract termination info

### ReactivateCurrentContract
By calling this operation you can re-enable the auto renewal.


```js
beezup.ReactivateCurrentContract(null, context)
```

#### Parameters
*This action has no parameters*

### DeleteNextContract
Delete your next contract


```js
beezup.DeleteNextContract(null, context)
```

#### Parameters
*This action has no parameters*

### GetFriendInfo
Get friend information


```js
beezup.GetFriendInfo({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Your friend user id
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetInvoices
Get all your invoices


```js
beezup.GetInvoices({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetStandardOffers
Get all standard offers


```js
beezup.GetStandardOffers({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetOffer
Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts



```js
beezup.GetOffer({
  "request": {
    "offerId": 0,
    "storeCount": 0,
    "billingPeriodInMonth": 0
  }
}, context)
```

#### Parameters
* request (object) **required**

### Logout
Log out the current user from go2


```js
beezup.Logout(null, context)
```

#### Parameters
*This action has no parameters*

### GetStores
Get store list


```js
beezup.GetStores({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### CreateStore
Create a new store


```js
beezup.CreateStore({
  "request": {
    "name": "",
    "url": "",
    "countryIsoCodeAlpha3": "",
    "sectors": []
  }
}, context)
```

#### Parameters
* request (object) **required** - The request to create a store. The store identifier is optional, if null it will be automatically computed.

### DeleteStore
Delete a store


```js
beezup.DeleteStore({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### GetStore
Get store's information


```js
beezup.GetStore({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### UpdateStore
Update some store's information. FYI, you cannot change the country.



```js
beezup.UpdateStore({
  "storeId": "",
  "request": {
    "name": "",
    "url": "",
    "sectors": []
  }
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required**

### GetStoreAlerts
Get store's alerts


```js
beezup.GetStoreAlerts({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### SaveStoreAlerts
You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)


```js
beezup.SaveStoreAlerts({
  "storeId": "",
  "request": {}
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* request (object) **required** - The key is the alert identifier (alertId)

### GetRights
Get store's rights


```js
beezup.GetRights({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier

### GetStoreShares
Get shares related to this store


```js
beezup.GetStoreShares({
  "storeId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### ShareStore
Share a store to another user


```js
beezup.ShareStore({
  "storeId": "",
  "email": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* email (string) **required** - Your friend's user email

### DeleteStoreShare
Delete a share of a store to another user


```js
beezup.DeleteStoreShare({
  "storeId": "",
  "userId": ""
}, context)
```

#### Parameters
* storeId (string) **required** - Your store identifier
* userId (string) **required** - The friend user id

### GetUserLovIndex
Get all list names


```js
beezup.GetUserLovIndex(null, context)
```

#### Parameters
*This action has no parameters*

### GetUserListOfValues
Get the list of values related to this list name


```js
beezup.GetUserListOfValues({
  "listName": ""
}, context)
```

#### Parameters
* listName (string) **required** - The list of value name your want to get
* Accept-Language (array) - Indicates that the client accepts the following languages.
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetMarketplaceAccountStores
Get  you marketplace channel catalog list


```js
beezup.GetMarketplaceAccountStores(null, context)
```

#### Parameters
*This action has no parameters*

### GetPublications
Fetch the publication history for an account, sorted by descending start date


```js
beezup.GetPublications({
  "marketplaceTechnicalCode": "",
  "accountId": 0
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - Marketplace Technical Code to query (required)
* accountId (integer) **required** - Account Id to query (required)
* channelCatalogId (string) - Channel Catalog Id by which to filter (optional)
* count (integer) - Amount of entries to fetch (optional, default set to 10)
* publicationTypes (array) - Publication types by which to filter (optional)

### GetChannelCatalogMarketplaceProperties
Get the marketplace properties for a channel catalog


```js
beezup.GetChannelCatalogMarketplaceProperties({
  "channelCatalogId": "",
  "redirectionPageUrl": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required**
* redirectionPageUrl (string) **required**

### GetChannelCatalogMarketplaceSettings
Get the marketplace settings for a channel catalog


```js
beezup.GetChannelCatalogMarketplaceSettings({
  "channelCatalogId": ""
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - Channel Catalog Id to query (required)

### SetChannelCatalogMarketplaceSettings
Allow you to configure your marketplace settings.
Partial update accepted.



```js
beezup.SetChannelCatalogMarketplaceSettings({
  "channelCatalogId": "",
  "model": {
    "settings": []
  }
}, context)
```

#### Parameters
* channelCatalogId (string) **required** - Channel Catalog Id to query
* model (object) **required** - The channel catalog marketplace settings to save

### GetOrderIndex
Get all actions you can do on the order API


```js
beezup.GetOrderIndex({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetAutomaticTransitions
Get list of configured automatic Order status transitions


```js
beezup.GetAutomaticTransitions({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### ConfigureAutomaticTransitions
Configure new or existing automatic Order status transition


```js
beezup.ConfigureAutomaticTransitions({
  "request": {
    "automaticTransitions": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### ChangeOrderList
The purpose of this operation is to reduce the amount of request to the API.


```js
beezup.ChangeOrderList({
  "changeOrderType": "",
  "userName": "",
  "request": {
    "changeOrders": []
  }
}, context)
```

#### Parameters
* changeOrderType (string) **required** - The Order change type
* userName (string) **required** - Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
* testMode (boolean) - If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
* request (object) **required** - Contains all change order operations you want to make

### ClearMerchantOrderInfoList
The purpose of this operation is to reduce the amount of request to the API.


```js
beezup.ClearMerchantOrderInfoList({
  "request": {
    "orders": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### SetMerchantOrderInfoList
The purpose of this operation is to reduce the amount of request to the API.


```js
beezup.SetMerchantOrderInfoList({
  "request": {
    "order_MerchantECommerceSoftwareName": "",
    "order_MerchantECommerceSoftwareVersion": "",
    "orders": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### GetOrderExportations
Get a paginated list of Order report exportations


```js
beezup.GetOrderExportations({
  "pageNumber": 0,
  "pageSize": 0,
  "storeId": ""
}, context)
```

#### Parameters
* pageNumber (integer) **required** - The page number you want to get
* pageSize (integer) **required** - The entry count you want to get
* storeId (string) **required** - The store identifier to regroup the order exportations
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### ExportOrders
A new file will be generated containing a summary of all the Orders matching the requested filter settings.


```js
beezup.ExportOrders({
  "request": {
    "storeId": "",
    "orderListRequestWithoutPagination": {
      "dateSearchType": "",
      "beginPeriodUtcDate": "",
      "endPeriodUtcDate": ""
    }
  }
}, context)
```

#### Parameters
* request (object) **required** - The message request to export order list. The store identifier is requested to regroup the exportations.

### HarvestAll
Send harvest request to all your marketplaces


```js
beezup.HarvestAll(null, context)
```

#### Parameters
*This action has no parameters*

### GetOrderListFull
The purpose of this operation is to reduce the amount of request to the API.\
\
Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.



```js
beezup.GetOrderListFull({
  "Accept-Encoding": [],
  "request": null
}, context)
```

#### Parameters
* Accept-Encoding (array) **required** - Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
* request (undefined) **required**

### GetOrderListLight
Get a paginated list of all Orders without details


```js
beezup.GetOrderListLight({
  "request": null
}, context)
```

#### Parameters
* request (undefined) **required**

### GetMarketplaceAccountsSynchronization
Get current synchronization status between your marketplaces and BeezUP accounts


```js
beezup.GetMarketplaceAccountsSynchronization({}, context)
```

#### Parameters
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### GetOrder
Get full Order and Order Item(s) properties


```js
beezup.GetOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### HeadOrder
The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful 



```js
beezup.HeadOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### ClearMerchantOrderInfo
Clear an Order's merchant information


```js
beezup.ClearMerchantOrderInfo({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier

### HarvestOrder
Send harvest request for a single Order


```js
beezup.HarvestOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier

### GetOrderHistory
Get an Order's harvest and change history


```js
beezup.GetOrderHistory({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier
* If-None-Match (string) - ETag value to identify the last known version of requested resource.\

### SetMerchantOrderInfo
Set an Order's merchant information


```js
beezup.SetMerchantOrderInfo({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": "",
  "request": {
    "order_MerchantOrderId": "",
    "order_MerchantECommerceSoftwareName": "",
    "order_MerchantECommerceSoftwareVersion": ""
  }
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier
* request (object) **required**

### ChangeOrder
Change your marketplace Order Information (accept, ship, etc.)


```js
beezup.ChangeOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": "",
  "changeOrderType": "",
  "userName": "",
  "If-Match": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The BeezUP Order identifier
* changeOrderType (string) **required** - The Order change type
* userName (string) **required** - Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
* testMode (boolean) - If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
* request (object) - All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted
* If-Match (string) **required** - ETag value to identify the last known version of requested resource.\

