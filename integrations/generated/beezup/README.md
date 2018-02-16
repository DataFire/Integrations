# @datafire/beezup

Client library for BeezUP

## Installation and Usage
```bash
npm install --save @datafire/beezup
```
```js
let beezup = require('@datafire/beezup').create({
  api_key: ""
});

beezup.GetMarketplaceAccountsSynchronization({}).then(data => {
  console.log(data);
});
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
You can contact us on [gitter, #BeezUP/API](https://gitter.im/BeezUP/API)


## Actions

### GetChannelsIndex
Use this operation to get the correct link to the channels and to the list of values


```js
beezup.GetChannelsIndex({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [publicChannelIndex](#publicchannelindex)

### GetChannels
The channel list for one country


```js
beezup.GetChannels({
  "countryIsoCode": "",
  "Accept-Encoding": []
}, context)
```

#### Input
* input `object`
  * countryIsoCode **required** `string`: The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \
  * Accept-Encoding **required** `array`: Allows the client to indicate whether it accepts a compressed encoding to reduce traffic size.
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [channelInfoList](#channelinfolist)

### GetPublicLovIndex
Get all list names


```js
beezup.GetPublicLovIndex({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [publicLovIndex](#publiclovindex)

### GetPublicListOfValues
Get the list of values related to this list name


```js
beezup.GetPublicListOfValues({
  "listName": ""
}, context)
```

#### Input
* input `object`
  * listName **required** `string`: The list of value name your want to get
  * Accept-Language `array`: Indicates that the client accepts the following languages.
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [publicListOfValuesResponse](#publiclistofvaluesresponse)

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

#### Input
* input `object`
  * request **required** [loginRequest](#loginrequest)

#### Output
* output [apiCredentials](#apicredentials)

### LostPassword
Lost password - Your password will be regenerated and sent to your email


```js
beezup.LostPassword({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** [BeezUP.Common.Email](#beezup.common.email)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * request **required** [registerRequest](#registerrequest)

#### Output
*Output schema unknown*

### AnalyticsIndex
Get the Analytics API operation index


```js
beezup.AnalyticsIndex(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [analyticsIndex](#analyticsindex)

### GetTrackingStatus
Clicks and orders are eventually consistent. \
This operation gets the current global state of projections.



```js
beezup.GetTrackingStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [trackingStatus](#trackingstatus)

### AnalyticsStoreIndex
Get the Analytics API operation index for one store


```js
beezup.AnalyticsStoreIndex({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [analyticsStoreIndex](#analyticsstoreindex)

### OptimiseAll
/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.



```js
beezup.OptimiseAll({
  "storeId": "",
  "actionName": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * actionName **required** `string` (values: reenable, disable)
  * request **required** [optimiseAllRequest](#optimiseallrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * catalogCategoryId **required** `string`: The category identifier concerned by this optimisation
  * actionName **required** `string` (values: reenable, disable)
  * request `array`
    * items `string`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * channelId **required** `string`: The channel identifier concerned by this optimisation
  * actionName **required** `string` (values: reenable, disable)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * productId **required** `string`: The product identifier concerned by this optimisation
  * actionName **required** `string` (values: reenable, disable)
  * request `array`
    * items `string`

#### Output
*Output schema unknown*

### CopyOptimisation
Copy product optimisations between 2 channels


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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [copyOptimisationRequest](#copyoptimisationrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * actionName **required** `string` (values: reenable, disable)
  * request **required** [optimiseRequest](#optimiserequest)

#### Output
*Output schema unknown*

### GetStoreReportByCategory
Get the report by category


```js
beezup.GetStoreReportByCategory({
  "storeId": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [reportByCategoryRequest](#reportbycategoryrequest)

#### Output
* output [reportByCategoryResponse](#reportbycategoryresponse)

### GetStoreReportByChannel
Get the report by channel


```js
beezup.GetStoreReportByChannel({
  "storeId": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [reportByChannelRequest](#reportbychannelrequest)

#### Output
* output [reportByChannelResponse](#reportbychannelresponse)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [reportByDayRequest](#reportbydayrequest)

#### Output
* output [reportByDayResponse](#reportbydayresponse)

### GetStoreReportByProduct
Get the report by product


```js
beezup.GetStoreReportByProduct({
  "storeId": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [reportByProductRequest](#reportbyproductrequest)

#### Output
* output [reportByProductResponse](#reportbyproductresponse)

### GetReportFilters
Get report filter list for the given store


```js
beezup.GetReportFilters({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [reportFilterList](#reportfilterlist)

### DeleteReportFilter
Delete the report filter


```js
beezup.DeleteReportFilter({
  "storeId": "",
  "reportFilterId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * reportFilterId **required** `string`: Your report filter identifier

#### Output
*Output schema unknown*

### GetReportFilter
Get the report filter description


```js
beezup.GetReportFilter({
  "storeId": "",
  "reportFilterId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * reportFilterId **required** `string`: Your report filter identifier

#### Output
* output [reportFilter](#reportfilter)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * reportFilterId **required** `string`: Your report filter identifier
  * reportFilter **required** [saveReportFilterRequest](#savereportfilterrequest)

#### Output
*Output schema unknown*

### GetRules
Gets the list of rules for a given store


```js
beezup.GetRules({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [ruleList](#rulelist)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [createRuleRequest](#createrulerequest)

#### Output
*Output schema unknown*

### GetRulesExecutions
Get the rules execution history


```js
beezup.GetRulesExecutions({
  "storeId": "",
  "pageNumber": 0,
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * pageNumber **required** `integer`: The page to retrieve
  * pageSize **required** `integer`: The count of rule history to retrieve

#### Output
* output [ruleExecutionReportings](#ruleexecutionreportings)

### RunRules
Run all rules for this store


```js
beezup.RunRules({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

### DeleteRule
Delete Rule


```js
beezup.DeleteRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### GetRule
Gets the rule


```js
beezup.GetRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
* output [rule](#rule)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier
  * request **required** [updateRuleRequest](#updaterulerequest)

#### Output
*Output schema unknown*

### DisableRule
Disable rule


```js
beezup.DisableRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### EnableRule
Enable rule


```js
beezup.EnableRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### MoveDownRule
Move the rule down


```js
beezup.MoveDownRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### MoveUpRule
Move the rule up


```js
beezup.MoveUpRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### RunRule
Run rule


```js
beezup.RunRule({
  "storeId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * ruleId **required** `string`: Your rule identifier

#### Output
*Output schema unknown*

### GetStoreTrackedClicks
Get the latest tracked clicks


```js
beezup.GetStoreTrackedClicks({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * count `integer`: The amount of clicks to retrieve

#### Output
* output [trackedClicks](#trackedclicks)

### GetStoreTrackedExternalOrders
Get the latest tracked external orders


```js
beezup.GetStoreTrackedExternalOrders({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * count `integer`: The amount of external orders to retrieve

#### Output
* output [trackedExternalOrders](#trackedexternalorders)

### GetStoreTrackedOrders
Get the latest tracked orders


```js
beezup.GetStoreTrackedOrders({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * count `integer`: The amount of orders to retrieve

#### Output
* output [trackedOrders](#trackedorders)

### GetStoreTrackingStatus
Clicks and orders are eventually consistent. \
This operation gets the current state of projections for a store.



```js
beezup.GetStoreTrackingStatus({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [storeTrackingStatus](#storetrackingstatus)

### CatalogIndex
The operation will give you all the operations you will be able to do and all the LOV used in this API.


```js
beezup.CatalogIndex(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [catalogIndex](#catalogindex)

### Catalog_GetBeezUPColumns
Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.


```js
beezup.Catalog_GetBeezUPColumns(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [beezUPColumnConfiguration](#beezupcolumnconfiguration)

### CatalogStoreIndex
The operation will give you all the operations you will be able to do on this store for this API.


```js
beezup.CatalogStoreIndex({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [catalogStoreIndex](#catalogstoreindex)

### Auto_DeleteAutoImport
Delete Auto Import


```js
beezup.Auto_DeleteAutoImport({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

### Auto_GetAutoImportConfiguration
Get the auto import configuration


```js
beezup.Auto_GetAutoImportConfiguration({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [autoImportConfiguration](#autoimportconfiguration)

### Importation_ActivateAutoImport
Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.


```js
beezup.Importation_ActivateAutoImport({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

### Auto_PauseAutoImport
Pause Auto Import


```js
beezup.Auto_PauseAutoImport({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

### Auto_ResumeAutoImport
Resume Auto Import


```js
beezup.Auto_ResumeAutoImport({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [configureAutoImportIntervalRequest](#configureautoimportintervalrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [scheduleAutoImportRequest](#scheduleautoimportrequest)

#### Output
*Output schema unknown*

### Auto_StartAutoImport
Start Auto Import Manually


```js
beezup.Auto_StartAutoImport({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [links.Importation_GetImportationMonitoringLink](#links.importation_getimportationmonitoringlink)

### Catalog_GetCatalogColumns
Get catalog column list


```js
beezup.Catalog_GetCatalogColumns({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [catalogColumnList](#catalogcolumnlist)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The catalog column identifier
  * request **required** [changeUserColumnNameRequest](#changeusercolumnnamerequest)

#### Output
*Output schema unknown*

### Catalog_GetCategories
Get category list


```js
beezup.Catalog_GetCategories({
  "storeId": "",
  "Accept-Encoding": []
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * Accept-Encoding **required** `array`: Indicates that the client accepts that the response will be compressed to reduce traffic size.

#### Output
* output [categoryList](#categorylist)

### Catalog_GetCustomColumns
Get custom column list


```js
beezup.Catalog_GetCustomColumns({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [customColumnList](#customcolumnlist)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [computeExpressionRequest](#computeexpressionrequest)

#### Output
* output `string`

### Catalog_DeleteCustomColumn
Delete custom column


```js
beezup.Catalog_DeleteCustomColumn({
  "storeId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The custom column identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The custom column identifier
  * request **required** [createCustomColumnRequest](#createcustomcolumnrequest)

#### Output
*Output schema unknown*

### Catalog_GetCustomColumnExpression
Get the encrypted custom column expression


```js
beezup.Catalog_GetCustomColumnExpression({
  "storeId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The custom column identifier

#### Output
* output `string`

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The custom column identifier
  * request **required** [changeCustomColumnExpressionRequest](#changecustomcolumnexpressionrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * columnId **required** `string`: The custom column identifier
  * request **required** [changeUserColumnNameRequest](#changeusercolumnnamerequest)

#### Output
*Output schema unknown*

### Importation_GetReportings
Get the latest catalog importation reporting


```js
beezup.Importation_GetReportings({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [importationsResponse](#importationsresponse)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [startManualImportRequest](#startmanualimportrequest)

#### Output
* output [links.Importation_GetImportationMonitoringLink](#links.importation_getimportationmonitoringlink)

### Importation_GetImportationMonitoring
Get the importation status


```js
beezup.Importation_GetImportationMonitoring({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
* output [importationMonitoring](#importationmonitoring)

### Importation_Cancel
Cancel importation


```js
beezup.Importation_Cancel({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
*Output schema unknown*

### Importation_GetDetectedCatalogColumns
Get detected catalog columns during this importation.


```js
beezup.Importation_GetDetectedCatalogColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
* output [detectedCatalogColumnList](#detectedcatalogcolumnlist)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier
  * request **required** [configureCatalogColumnCatalogRequest](#configurecatalogcolumncatalogrequest)

#### Output
*Output schema unknown*

### Importation_IgnoreColumn
Ignore Column


```js
beezup.Importation_IgnoreColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The catalog column identifier
  * request **required** [mapBeezUPColumnRequest](#mapbeezupcolumnrequest)

#### Output
*Output schema unknown*

### Importation_ReattendColumn
Reattend Column


```js
beezup.Importation_ReattendColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier

#### Output
*Output schema unknown*

### Importation_UnmapCatalogColumn
Unmap catalog column


```js
beezup.Importation_UnmapCatalogColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The catalog column identifier

#### Output
*Output schema unknown*

### Importation_Commit
Commit Importation


```js
beezup.Importation_Commit({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
*Output schema unknown*

### Importation_CommitColumns
Commit columns


```js
beezup.Importation_CommitColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
*Output schema unknown*

### Importation_ConfigureRemainingCatalogColumns
This operation should be used after you have mapped the required BeezUP Columns


```js
beezup.Importation_ConfigureRemainingCatalogColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
*Output schema unknown*

### Importation_GetCustomColumns
Get custom columns currently place in this importation


```js
beezup.Importation_GetCustomColumns({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
* output [importationCustomColumnList](#importationcustomcolumnlist)

### Importation_DeleteCustomColumn
Delete Custom Column


```js
beezup.Importation_DeleteCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier
  * request **required** [changeCustomColumnRequest](#changecustomcolumnrequest)

#### Output
*Output schema unknown*

### Importation_GetCustomColumnExpression
Get the encrypted custom column expression in this importation


```js
beezup.Importation_GetCustomColumnExpression({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier

#### Output
* output `string`

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier
  * request **required** [mapBeezUPColumnRequest](#mapbeezupcolumnrequest)

#### Output
*Output schema unknown*

### Importation_UnmapCustomColumn
Unmap custom column


```js
beezup.Importation_UnmapCustomColumn({
  "storeId": "",
  "executionId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * columnId **required** `string`: The custom column identifier

#### Output
*Output schema unknown*

### Importation_GetProductSample
Get the product sample related to this importation with all columns (catalog and custom)


```js
beezup.Importation_GetProductSample({
  "storeId": "",
  "executionId": "",
  "productSampleIndex": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * productSampleIndex **required** `integer`: Index of the product sample. Starting from 0 to 99.

#### Output
* output [productSample](#productsample)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation
  * productSampleIndex **required** `integer`: Index of the product sample. Starting from 0 to 99.
  * columnId **required** `string`: The custom column identifier

#### Output
* output `string`

### Importation_TechnicalProgression
Get technical progression


```js
beezup.Importation_TechnicalProgression({
  "storeId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * executionId **required** `string`: The execution identifier of you catalog importation

#### Output
* output [importationTechnicalProgression](#importationtechnicalprogression)

### Importation_GetManualUpdateLastInputConfig
Get the last input configuration


```js
beezup.Importation_GetManualUpdateLastInputConfig({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [lastManualImportInputConfiguration](#lastmanualimportinputconfiguration)

### Catalog_GetProductBySku
Get product by Sku


```js
beezup.Catalog_GetProductBySku({
  "storeId": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * sku **required** `string`: The product sku you want to get

#### Output
* output [product](#product)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [getProductsRequest](#getproductsrequest)

#### Output
* output [productList](#productlist)

### Catalog_GetRandomProducts
We will return 10 products randomly selected with all product values


```js
beezup.Catalog_GetRandomProducts({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output [randomProductList](#randomproductlist)

### Catalog_GetProductByProductId
Get product by ProductId


```js
beezup.Catalog_GetProductByProductId({
  "storeId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * productId **required** `string`: The product identifier you want to get

#### Output
* output [product](#product)

### GetChannelCatalogs
List all your current channel catalogs


```js
beezup.GetChannelCatalogs({}, context)
```

#### Input
* input `object`
  * storeId `string`: The store identifier

#### Output
* output [channelCatalogList](#channelcataloglist)

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

#### Input
* input `object`
  * request **required** [addChannelCatalogRequest](#addchannelcatalogrequest)

#### Output
* output [links.GetChannelCatalogLink](#links.getchannelcataloglink)

### GetChannelCatalogExclusionFilterOperators
Get channel catalog exclusion filter operators


```js
beezup.GetChannelCatalogExclusionFilterOperators(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [exclusionFilterOperator](#exclusionfilteroperator)

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

#### Input
* input `object`
  * request **required** [channelCatalogProductByChannelCatalogRequest](#channelcatalogproductbychannelcatalogrequest)

#### Output
* output [channelCatalogProductByChannelCatalogResponse](#channelcatalogproductbychannelcatalogresponse)

### DeleteChannelCatalog
Delete the channel catalog


```js
beezup.DeleteChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### GetChannelCatalog
Get the channel catalog information


```js
beezup.GetChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
* output [channelCatalog](#channelcatalog)

### GetChannelCatalogCategories
Get channel catalog categories


```js
beezup.GetChannelCatalogCategories({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
* output [channelCatalogCategoryConfigurationList](#channelcatalogcategoryconfigurationlist)

### ConfigureChannelCatalogCategory
Configure channel catalog category


```js
beezup.ConfigureChannelCatalogCategory({
  "channelCatalogId": "",
  "request": {
    "overrideSubCategoryMappings": true,
    "channelCatalogCategories": []
  }
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [configureCategoryRequest](#configurecategoryrequest)

#### Output
*Output schema unknown*

### DisableChannelCatalogCategoryMapping
Disable a channel catalog category mapping


```js
beezup.DisableChannelCatalogCategoryMapping({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### ReenableChannelCatalogCategoryMapping
Reenable a channel catalog category mapping


```js
beezup.ReenableChannelCatalogCategoryMapping({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### ConfigureChannelCatalogColumnMappings
Configure channel catalog column mappings


```js
beezup.ConfigureChannelCatalogColumnMappings({
  "channelCatalogId": "",
  "request": []
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [channelCatalogColumnMappingList](#channelcatalogcolumnmappinglist)

#### Output
*Output schema unknown*

### DisableChannelCatalog
Disable a channel catalog


```js
beezup.DisableChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### EnableChannelCatalog
Enable a channel catalog


```js
beezup.EnableChannelCatalog({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### GetChannelCatalogExclusionFilters
Get channel catalog exclusion filters


```js
beezup.GetChannelCatalogExclusionFilters({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
* output [exclusionFiltersResponse](#exclusionfiltersresponse)

### ConfigureChannelCatalogExclusionFilters
Configure channel catalog exclusion filters


```js
beezup.ConfigureChannelCatalogExclusionFilters({
  "channelCatalogId": "",
  "request": []
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [exclusionFilters](#exclusionfilters)

#### Output
*Output schema unknown*

### GetChannelCatalogExportationCacheInfo
Get the exportation cache information


```js
beezup.GetChannelCatalogExportationCacheInfo({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
* output [channelCatalogExportCacheInfoResponse](#channelcatalogexportcacheinforesponse)

### ClearChannelCatalogExportationCache
Clear the exportation cache


```js
beezup.ClearChannelCatalogExportationCache({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
*Output schema unknown*

### GetChannelCatalogExportationHistory
Get the exportation history


```js
beezup.GetChannelCatalogExportationHistory({
  "channelCatalogId": "",
  "pageNumber": 0,
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * pageNumber **required** `integer`: The page number you want to get
  * pageSize **required** `integer`: The entry count you want to get

#### Output
* output [channelCatalogExportationHistory](#channelcatalogexportationhistory)

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [getChannelCatalogProductInfoListRequest](#getchannelcatalogproductinfolistrequest)

#### Output
* output [channelCatalogProductInfoList](#channelcatalogproductinfolist)

### GetChannelCatalogProductsCounters
Get channel catalog products' counters


```js
beezup.GetChannelCatalogProductsCounters({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier

#### Output
* output [channelCatalogProductsCounters](#channelcatalogproductscounters)

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * format **required** `string` (values: xlsx, csv): The file type of the exportation
  * request **required** [getChannelCatalogProductInfoListRequest](#getchannelcatalogproductinfolistrequest)

#### Output
* output [BeezUP.Common.Link3](#beezup.common.link3)

### GetChannelCatalogProductInfo
Get channel catalog product information


```js
beezup.GetChannelCatalogProductInfo({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier

#### Output
* output [channelCatalogProductInfo](#channelcatalogproductinfo)

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier

#### Output
*Output schema unknown*

### OverrideChannelCatalogProductValues
Override channel catalog product values


```js
beezup.OverrideChannelCatalogProductValues({
  "channelCatalogId": "",
  "productId": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier
  * request **required** [productOverrides](#productoverrides)

#### Output
*Output schema unknown*

### GetChannelCatalogProductValueOverrideCopy
Get channel catalog product value override compatibilities status


```js
beezup.GetChannelCatalogProductValueOverrideCopy({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier

#### Output
*Output schema unknown*

### ConfigureChannelCatalogProductValueOverrideCopy
Copy channel catalog product value override


```js
beezup.ConfigureChannelCatalogProductValueOverrideCopy({
  "channelCatalogId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier

#### Output
*Output schema unknown*

### DeleteChannelCatalogProductValueOverride
Delete a specific channel catalog product value override


```js
beezup.DeleteChannelCatalogProductValueOverride({
  "channelCatalogId": "",
  "productId": "",
  "channelColumnId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier
  * channelColumnId **required** `string`: The channel column identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * productId **required** `string`: The product identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [costSettings](#costsettings)

#### Output
*Output schema unknown*

### ConfigureChannelCatalogGeneralSettings
Configure channel catalog general settings


```js
beezup.ConfigureChannelCatalogGeneralSettings({
  "channelCatalogId": "",
  "request": {
    "acceptToPublishInfo": true,
    "doNotExportOutOfStockProducts": true,
    "activeBeezUPTracking": true
  }
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: The channel catalog identifier
  * request **required** [generalSettings](#generalsettings)

#### Output
*Output schema unknown*

### GetAvailableChannels
List all available channel for this store


```js
beezup.GetAvailableChannels({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: The store identifier

#### Output
* output `array`
  * items [channelHeader](#channelheader)

### GetChannelInfo
Get channel information


```js
beezup.GetChannelInfo({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The channel identifier

#### Output
* output [channelInfo](#channelinfo)

### GetChannelCategories
Get channel categories


```js
beezup.GetChannelCategories({
  "channelId": "",
  "Accept-Encoding": []
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The channel identifier
  * Accept-Encoding **required** `array`: Indicates that the client accepts that the response will be compressed to reduce traffic size.

#### Output
* output [channelRootCategory](#channelrootcategory)

### GetChannelColumns
Get channel columns


```js
beezup.GetChannelColumns({
  "channelId": "",
  "Accept-Encoding": []
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The channel identifier
  * Accept-Encoding **required** `array`: Indicates that the client accepts that the response will be compressed to reduce traffic size.
  * request `array`
    * items [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)

#### Output
* output `array`
  * items [channelColumn](#channelcolumn)

### GetCustomerIndex
The index of all operations and LOV


```js
beezup.GetCustomerIndex({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [customerIndex](#customerindex)

### GetUserAccountInfo
Get user account information


```js
beezup.GetUserAccountInfo({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [accountInfo](#accountinfo)

### ActivateUserAccount
Activate the user account


```js
beezup.ActivateUserAccount({
  "emailActivationId": ""
}, context)
```

#### Input
* input `object`
  * emailActivationId **required** `string`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * request **required** [changePasswordRequest](#changepasswordrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * request **required** [companyInfo](#companyinfo)

#### Output
*Output schema unknown*

### GetCreditCardInfo
Get credit card information


```js
beezup.GetCreditCardInfo({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [creditCardInfoResponse](#creditcardinforesponse)

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

#### Input
* input `object`
  * request **required** [creditCardInfo](#creditcardinfo)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * request **required** [personalInfo](#personalinfo)

#### Output
*Output schema unknown*

### GetProfilePictureInfo
Get profile picture information


```js
beezup.GetProfilePictureInfo({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [profilePictureInfoResponse](#profilepictureinforesponse)

### SaveProfilePictureInfo
Change user picture information


```js
beezup.SaveProfilePictureInfo({
  "request": {
    "profilePictureSelected": ""
  }
}, context)
```

#### Input
* input `object`
  * request **required** [profilePictureInfo](#profilepictureinfo)

#### Output
*Output schema unknown*

### ResendEmailActivation
Resend email activation


```js
beezup.ResendEmailActivation(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### GetBillingPeriods
Get billing periods conditions


```js
beezup.GetBillingPeriods({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [billingPeriodList](#billingperiodlist)

### GetContracts
Get contract list


```js
beezup.GetContracts({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [contracts](#contracts)

### CreateContract
Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers



```js
beezup.CreateContract({
  "request": null
}, context)
```

#### Input
* input `object`
  * request **required** [createContract](#createcontract)

#### Output
* output [createContractResponse](#createcontractresponse)

### TerminateCurrentContract
By default your contract are automatically renew. By calling this operation you can disable the auto renewal.


```js
beezup.TerminateCurrentContract({
  "request": {
    "contractTerminationReasonType": 0
  }
}, context)
```

#### Input
* input `object`
  * request **required** [terminateContract](#terminatecontract)

#### Output
*Output schema unknown*

### ReactivateCurrentContract
By calling this operation you can re-enable the auto renewal.


```js
beezup.ReactivateCurrentContract(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### DeleteNextContract
Delete your next contract


```js
beezup.DeleteNextContract(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### GetFriendInfo
Get friend information


```js
beezup.GetFriendInfo({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Your friend user id
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [userFriendInfo](#userfriendinfo)

### GetInvoices
Get all your invoices


```js
beezup.GetInvoices({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [invoiceList](#invoicelist)

### GetStandardOffers
Get all standard offers


```js
beezup.GetStandardOffers({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [standardOffers](#standardoffers)

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

#### Input
* input `object`
  * request **required** [offerRequest](#offerrequest)

#### Output
* output [offer](#offer)

### Logout
Log out the current user from go2


```js
beezup.Logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### GetStores
Get store list


```js
beezup.GetStores({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [storeList](#storelist)

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

#### Input
* input `object`
  * request **required** [createStoreRequest](#createstorerequest)

#### Output
* output [links.getStoreLink](#links.getstorelink)

### DeleteStore
Delete a store


```js
beezup.DeleteStore({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
*Output schema unknown*

### GetStore
Get store's information


```js
beezup.GetStore({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [store](#store)

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

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [updateStoreRequest](#updatestorerequest)

#### Output
*Output schema unknown*

### GetStoreAlerts
Get store's alerts


```js
beezup.GetStoreAlerts({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [storeAlerts](#storealerts)

### SaveStoreAlerts
You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)


```js
beezup.SaveStoreAlerts({
  "storeId": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * request **required** [saveStoreAlertsRequest](#savestorealertsrequest)

#### Output
*Output schema unknown*

### GetRights
Get store's rights


```js
beezup.GetRights({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier

#### Output
* output `array`
  * items [functionalityRightInfo](#functionalityrightinfo)

### GetStoreShares
Get shares related to this store


```js
beezup.GetStoreShares({
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [storeShares](#storeshares)

### ShareStore
Share a store to another user


```js
beezup.ShareStore({
  "storeId": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * email **required** [friendEmail](#friendemail)

#### Output
*Output schema unknown*

### DeleteStoreShare
Delete a share of a store to another user


```js
beezup.DeleteStoreShare({
  "storeId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `string`: Your store identifier
  * userId **required** `string`: The friend user id

#### Output
*Output schema unknown*

### GetUserLovIndex
Get all list names


```js
beezup.GetUserLovIndex(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [userLovIndex](#userlovindex)

### GetUserListOfValues
Get the list of values related to this list name


```js
beezup.GetUserListOfValues({
  "listName": ""
}, context)
```

#### Input
* input `object`
  * listName **required** `string`: The list of value name your want to get
  * Accept-Language `array`: Indicates that the client accepts the following languages.
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [userListOfValuesResponse](#userlistofvaluesresponse)

### GetMarketplaceChannelCatalogs
Get your marketplace channel catalog list


```js
beezup.GetMarketplaceChannelCatalogs({}, context)
```

#### Input
* input `object`
  * storeId `string`: The StoreId to filter by

#### Output
* output [marketplaceChannelCatalogList](#marketplacechannelcataloglist)

### GetPublications
Fetch the publication history for an account, sorted by descending start date


```js
beezup.GetPublications({
  "marketplaceTechnicalCode": "",
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: Marketplace Technical Code to query (required)
  * accountId **required** `integer`: Account Id to query (required)
  * channelCatalogId `string`: Channel Catalog Id by which to filter (optional)
  * count `integer`: Amount of entries to fetch (optional, default set to 10)
  * publicationTypes `array`: Publication types by which to filter (optional)

#### Output
* output [accountPublications](#accountpublications)

### GetChannelCatalogMarketplaceProperties
Get the marketplace properties for a channel catalog


```js
beezup.GetChannelCatalogMarketplaceProperties({
  "channelCatalogId": "",
  "redirectionPageUrl": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`
  * redirectionPageUrl **required** `string`
  * Accept-Language `array`: Indicates that the client accepts the following languages.

#### Output
* output [channelCatalogMarketplaceProperties](#channelcatalogmarketplaceproperties)

### GetChannelCatalogMarketplaceSettings
Get the marketplace settings for a channel catalog


```js
beezup.GetChannelCatalogMarketplaceSettings({
  "channelCatalogId": ""
}, context)
```

#### Input
* input `object`
  * channelCatalogId **required** `string`: Channel Catalog Id to query (required)

#### Output
* output [channelCatalogMarketplaceSettings](#channelcatalogmarketplacesettings)

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

#### Input
* input `object`
  * channelCatalogId **required** `string`: Channel Catalog Id to query
  * model **required** [setChannelCatalogMarketplaceSettingsRequest](#setchannelcatalogmarketplacesettingsrequest)

#### Output
*Output schema unknown*

### GetOrderIndex
Get all actions you can do on the order API


```js
beezup.GetOrderIndex({}, context)
```

#### Input
* input `object`
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [orderIndex](#orderindex)

### GetAutomaticTransitions
Get list of configured automatic Order status transitions


```js
beezup.GetAutomaticTransitions({}, context)
```

#### Input
* input `object`
  * storeId `string`: The StoreId to filter by
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [automaticTransitionInfoList](#automatictransitioninfolist)

### ConfigureAutomaticTransitions
Configure new or existing automatic Order status transition


```js
beezup.ConfigureAutomaticTransitions({
  "request": {
    "automaticTransitions": []
  }
}, context)
```

#### Input
* input `object`
  * request **required** [configureAutomaticTransitionRequest](#configureautomatictransitionrequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * changeOrderType **required** `string`: The Order change type
  * userName **required** `string`: Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
  * testMode `boolean`: If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
  * request **required** [changeOrderListRequest](#changeorderlistrequest)

#### Output
* output [batchOrderOperationResponse](#batchorderoperationresponse)

### ClearMerchantOrderInfoList
The purpose of this operation is to reduce the amount of request to the API.


```js
beezup.ClearMerchantOrderInfoList({
  "request": {
    "orders": []
  }
}, context)
```

#### Input
* input `object`
  * request **required** [clearMerchantOrderInfoListRequest](#clearmerchantorderinfolistrequest)

#### Output
* output [batchOrderOperationResponse](#batchorderoperationresponse)

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

#### Input
* input `object`
  * request **required** [setMerchantOrderInfoListRequest](#setmerchantorderinfolistrequest)

#### Output
* output [batchOrderOperationResponse](#batchorderoperationresponse)

### GetOrderExportations
Get a paginated list of Order report exportations


```js
beezup.GetOrderExportations({
  "pageNumber": 0,
  "pageSize": 0,
  "storeId": ""
}, context)
```

#### Input
* input `object`
  * pageNumber **required** `integer`: The page number you want to get
  * pageSize **required** `integer`: The entry count you want to get
  * storeId **required** `string`: The store identifier to regroup the order exportations
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [orderExportations](#orderexportations)

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

#### Input
* input `object`
  * request **required** [exportOrderListRequest](#exportorderlistrequest)

#### Output
*Output schema unknown*

### HarvestAll
Send harvest request to all your marketplaces


```js
beezup.HarvestAll({}, context)
```

#### Input
* input `object`
  * storeId `string`: The StoreId to filter by

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * Accept-Encoding **required** `array`: Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
  * request **required** [orderListRequest](#orderlistrequest)

#### Output
* output [orderListFull](#orderlistfull)

### GetOrderListLight
Get a paginated list of all Orders without details


```js
beezup.GetOrderListLight({
  "request": null
}, context)
```

#### Input
* input `object`
  * request **required** [orderListRequest](#orderlistrequest)

#### Output
* output [orderListLight](#orderlistlight)

### GetMarketplaceAccountsSynchronization
Get current synchronization status between your marketplaces and BeezUP accounts


```js
beezup.GetMarketplaceAccountsSynchronization({}, context)
```

#### Input
* input `object`
  * storeId `string`: The StoreId to filter by
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [accountSynchronizationList](#accountsynchronizationlist)

### GetOrder
Get full Order and Order Item(s) properties


```js
beezup.GetOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [order](#order)

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

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
*Output schema unknown*

### ClearMerchantOrderInfo
Clear an Order's merchant information


```js
beezup.ClearMerchantOrderInfo({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier

#### Output
*Output schema unknown*

### HarvestOrder
Send harvest request for a single Order


```js
beezup.HarvestOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier

#### Output
*Output schema unknown*

### GetOrderHistory
Get an Order's harvest and change history


```js
beezup.GetOrderHistory({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier
  * If-None-Match `string`: ETag value to identify the last known version of requested resource.\

#### Output
* output [orderHistory](#orderhistory)

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

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier
  * request **required** [setMerchantOrderInfoRequest](#setmerchantorderinforequest)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * marketplaceTechnicalCode **required** `string`: The marketplace technical code
  * accountId **required** `integer`: The account identifier
  * beezUPOrderId **required** `string`: The BeezUP Order identifier
  * changeOrderType **required** `string`: The Order change type
  * userName **required** `string`: Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
  * testMode `boolean`: If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
  * request [changeOrderRequest](#changeorderrequest)
  * If-Match **required** `string`: ETag value to identify the last known version of requested resource.\

#### Output
*Output schema unknown*



## Definitions

### BeezUP.Common.AdditionalProductFilters
* BeezUP.Common.AdditionalProductFilters `object`: Describe a filter on a product's column.

### BeezUP.Common.AdditionalProductFiltersValue
* BeezUP.Common.AdditionalProductFiltersValue `object`
  * operatorName [BeezUP.Common.ProductColumnFilterOperatorName](#beezup.common.productcolumnfilteroperatorname)
  * values `array`: Must be null if the operator is "IsNull" or "IsNotNull".
    * items `string`

### BeezUP.Common.ApiSettingsStatus
* BeezUP.Common.ApiSettingsStatus `string` (values: warning, success, failed)

### BeezUP.Common.BeezUPColumnName
* BeezUP.Common.BeezUPColumnName `string`: The BeezUP column name

### BeezUP.Common.CatalogCategoryFilter
* BeezUP.Common.CatalogCategoryFilter `object`
  * categoryPath `array`: Indicates on which catalog category path you want to make the filter
    * items `string`

### BeezUP.Common.CatalogCategoryId
* BeezUP.Common.CatalogCategoryId `string`: The catalog category identifier

### BeezUP.Common.CatalogCategoryPath
* BeezUP.Common.CatalogCategoryPath `array`: The catalog category path
  * items `string`

### BeezUP.Common.CatalogColumnId
* BeezUP.Common.CatalogColumnId `string`: The catalog column identifier (catalog or custom column)

### BeezUP.Common.CatalogColumnUserName
* BeezUP.Common.CatalogColumnUserName `string`: The catalog column named by the user (catalog or custom column)

### BeezUP.Common.ChannelBasicInfo
* BeezUP.Common.ChannelBasicInfo `object`: The basic info related to a channel
  * channelId **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * channelImageUrl **required** [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * channelName **required** [BeezUP.Common.ChannelName](#beezup.common.channelname)

### BeezUP.Common.ChannelCatalogId
* BeezUP.Common.ChannelCatalogId `string`: The channel catalog identifier

### BeezUP.Common.ChannelCategoryFilter
* BeezUP.Common.ChannelCategoryFilter `object`
  * categoryPath `array`: Indicates on which channel category path you want to make the filter
    * items `string`

### BeezUP.Common.ChannelCategoryId
* BeezUP.Common.ChannelCategoryId `string`

### BeezUP.Common.ChannelCategoryPath
* BeezUP.Common.ChannelCategoryPath `array`: The channel category path
  * items `string`

### BeezUP.Common.ChannelColumnId
* BeezUP.Common.ChannelColumnId `string`: The channel column identifier

### BeezUP.Common.ChannelColumnName
* BeezUP.Common.ChannelColumnName `string`: The channel column name

### BeezUP.Common.ChannelId
* BeezUP.Common.ChannelId `string`: The channel identifier

### BeezUP.Common.ChannelName
* BeezUP.Common.ChannelName `string`: The channel name

### BeezUP.Common.ColumnDataType
* BeezUP.Common.ColumnDataType `string` (values: String, Url, Text, Decimal, DateTime, Int, SpecialInt, InStock, Unknown, ImageUrl): Data type of the column, will be used for parsing and for consolidation proces

### BeezUP.Common.ColumnImportance
* BeezUP.Common.ColumnImportance `string` (values: Required, Recommended, Optional): Importance of the column

### BeezUP.Common.CountryIsoCodeAlpha3
* BeezUP.Common.CountryIsoCodeAlpha3 `string`: The country iso code alpha 3 <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">(ISO 3166-1_alpha-3)</a>

### BeezUP.Common.CurrencyCode
* BeezUP.Common.CurrencyCode `string`: The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>

### BeezUP.Common.DocUrl
* BeezUP.Common.DocUrl `string`: The documentation related to this operation.

### BeezUP.Common.Email
* BeezUP.Common.Email `string`: The email

### BeezUP.Common.ErrorResponseMessage
* BeezUP.Common.ErrorResponseMessage `object`
  * errors **required** `array`
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)

### BeezUP.Common.ErrorSummary
* BeezUP.Common.ErrorSummary `object`
  * errorArguments `object`
  * errorCode `string`
  * errorGuid `string`
  * errorMessage `string`
  * exceptionDetail [BeezUP.Common.ExceptionDetail](#beezup.common.exceptiondetail)
  * objectName `string`
  * propertyName `string`
  * propertyValue `string`
  * source `string`
  * technicalErrorMessage `string`
  * utcDate `string`

### BeezUP.Common.ExceptionDetail
* BeezUP.Common.ExceptionDetail `object`
  * helpLink `string`
  * message `string`
  * stackTrace `string`
  * type `string`

### BeezUP.Common.Href
* BeezUP.Common.Href `string`: Indicate the relative uri for this link

### BeezUP.Common.HttpMethod
* BeezUP.Common.HttpMethod `string` (values: GET, POST, PATCH, DELETE, PUT, HEAD): Indicate the http method to use on this link

### BeezUP.Common.HttpUrl
* BeezUP.Common.HttpUrl `string`: The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>

### BeezUP.Common.InfoSummaries
* BeezUP.Common.InfoSummaries `object`
  * errors `array`
    * items [BeezUP.Common.ErrorSummary](#beezup.common.errorsummary)
  * informations `array`
    * items [BeezUP.Common.InfoSummary](#beezup.common.infosummary)
  * successes `array`
    * items [BeezUP.Common.SuccessSummary](#beezup.common.successsummary)
  * warnings `array`
    * items [BeezUP.Common.WarningSummary](#beezup.common.warningsummary)

### BeezUP.Common.InfoSummary
* BeezUP.Common.InfoSummary `object`
  * informationArguments `object`
  * informationCode `string`
  * informationMessage `string`
  * objectName `string`
  * propertyName `string`
  * propertyValue `string`

### BeezUP.Common.LOVLink2
* BeezUP.Common.LOVLink2 `object`: Describe the way you have to follow to get access to the LOV
  * href `string`: Indicate the relative uri pattern to the list of value
  * listName **required** `string`: The name of the list of value
  * rel `string`: Indicate the relation name related to the link

### BeezUP.Common.LOVLink3
* BeezUP.Common.LOVLink3 `object`: Describe the way you have to follow to get access to the LOV
  * href **required** `string`: Indicate the uri to the list of value
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)

### BeezUP.Common.Link2
* BeezUP.Common.Link2 `object`
  * href [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `array`
    * items [BeezUP.Common.LinkParameter2](#beezup.common.linkparameter2)
  * rel **required** `string`: Indicate the relation name related to the link

### BeezUP.Common.Link3
* BeezUP.Common.Link3 `object`
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### BeezUP.Common.LinkParameter2
* BeezUP.Common.LinkParameter2 `object`
  * in [BeezUP.Common.ParameterIn](#beezup.common.parameterin)
  * lovLink [BeezUP.Common.LOVLink2](#beezup.common.lovlink2)
  * lovRequired `boolean`: If true, you MUST use indicate a value from the list of values otherwise it's a freetext
  * name **required** `string`: The name of the parameter
  * required `boolean`
  * type [BeezUP.Common.ParameterType](#beezup.common.parametertype)
  * value `string`: The value of the parameter

### BeezUP.Common.LinkParameter3
* BeezUP.Common.LinkParameter3 `object`
  * description `string`: description of the parameter
  * in **required** [BeezUP.Common.ParameterIn](#beezup.common.parameterin)
  * label `string`: The label corresponding to the link parameter. This label is automatically translated based on the Accept-Language http header.
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: If true, you MUST indicate a value from the list of values otherwise it's a freetext
  * properties `object`: If the parameter is an object with flexible properties (additionProperties/dictionary), we will describe the properties of the object.
  * required `boolean`
  * schema `string`: schema of the parameter
  * type [BeezUP.Common.ParameterType](#beezup.common.parametertype)
  * value `object`: The value of the parameter. It can be an integer a string or an object.

### BeezUP.Common.LinkParameterProperty3
* BeezUP.Common.LinkParameterProperty3 `object`
  * description `string`: description of the parameter
  * label `string`: The label corresponding to the link parameter property. This label is automatically translated based on the Accept-Language http header.
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: If true, you MUST use indicate a value from the list of values otherwise it's a freetext
  * required `boolean`
  * schema `string`: schema of the parameter
  * type **required** [BeezUP.Common.ParameterType](#beezup.common.parametertype)
  * value `object`: The value of the parameter. It can be an integer a string or an object.

### BeezUP.Common.ListOfValueItem
* BeezUP.Common.ListOfValueItem `object`: This object is used by LOV apis
  * codeIdentifier **required** `string`
  * intIdentifier **required** `integer`
  * position `integer`
  * translationText `string`

### BeezUP.Common.MarketplaceAccountId
* BeezUP.Common.MarketplaceAccountId `integer`: The marketplace account identifier in BeezUP. This account identifier is based on your api settings.

### BeezUP.Common.MarketplaceBusinessCode
* BeezUP.Common.MarketplaceBusinessCode `string`: In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.

### BeezUP.Common.MarketplaceTechnicalCode
* BeezUP.Common.MarketplaceTechnicalCode `string`: The technical code of the marketplace.

### BeezUP.Common.OperationId
* BeezUP.Common.OperationId `string`: The operationId to call.

### BeezUP.Common.PageNumber
* BeezUP.Common.PageNumber `integer`: Indicates the page number

### BeezUP.Common.PageSize
* BeezUP.Common.PageSize `integer`: Indicate the item count per page

### BeezUP.Common.PaginationRequestParameters
* BeezUP.Common.PaginationRequestParameters `object`
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)

### BeezUP.Common.PaginationResult
* BeezUP.Common.PaginationResult `object`
  * entryCount **required** `integer`: The entry count currently returned
  * links **required** [BeezUP.Common.PaginationResultLinks](#beezup.common.paginationresultlinks)
  * pageCount **required** `integer`: The page count
  * totalEntryCount **required** `integer`: The total entry count

### BeezUP.Common.PaginationResultLinks
* BeezUP.Common.PaginationResultLinks `object`: The navigation links 'first', 'last', 'next', 'previous'
  * first **required** [BeezUP.Common.Link3](#beezup.common.link3)
  * last **required** [BeezUP.Common.Link3](#beezup.common.link3)
  * next [BeezUP.Common.Link3](#beezup.common.link3)
  * previous [BeezUP.Common.Link3](#beezup.common.link3)

### BeezUP.Common.ParameterIn
* BeezUP.Common.ParameterIn `string` (values: path, header, query, body): * path: if the parameter must be pass in the path uri

### BeezUP.Common.ParameterType
* BeezUP.Common.ParameterType `string` (values: string, integer, number, boolean, object, array, date, date-time): The value type of the parameter

### BeezUP.Common.ProductBasicInfo
* BeezUP.Common.ProductBasicInfo `object`: The basic information related to a product
  * productExists **required** `boolean`: Indicates if the product still exists in your catalog
  * productId **required** `string`: The product identifier
  * productImageUrl `string`: The product image Url
  * productSku **required** `string`: The product SKU
  * productTitle **required** `string`: The product tile

### BeezUP.Common.ProductColumnFilterOperatorName
* BeezUP.Common.ProductColumnFilterOperatorName `string`: Indicate the operator you want to make on the columnId

### BeezUP.Common.ProductFilters
* BeezUP.Common.ProductFilters `object`
  * additionalProductFilters [BeezUP.Common.AdditionalProductFilters](#beezup.common.additionalproductfilters)
  * sku `string`: The product sku filter
  * title `string`: The product title filter

### BeezUP.Common.ProductId
* BeezUP.Common.ProductId `string`: The product identifier

### BeezUP.Common.StoreId
* BeezUP.Common.StoreId `string`: The store identifier

### BeezUP.Common.SuccessSummary
* BeezUP.Common.SuccessSummary `object`
  * objectName `string`
  * propertyName `string`
  * propertyValue `string`
  * successArguments `object`
  * successCode `string`
  * successMessage `string`

### BeezUP.Common.UserErrorMessage
* BeezUP.Common.UserErrorMessage `object`
  * arguments `array`: a dictionary string/object
    * items `object`
      * name **required** `string`: The key of the parameter
      * value **required** `object`: The value of the parameter. Depending to the type.
  * code **required** `string`: the error code. The error code can be a pattern containing the argument's name
  * cultureName `string`: If the error is translated, the culture name will be indicated
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * message **required** `string`: The error message

### BeezUP.Common.UserId
* BeezUP.Common.UserId `string`: The user identifier

### BeezUP.Common.WarningSummary
* BeezUP.Common.WarningSummary `object`
  * technicalErrorMessage `string`
  * warningArguments `object`
  * warningCode `string`
  * warningMessage `string`

### accountId
* accountId `integer`: The marketplace account identifier in BeezUP. This account identifier is based on your api settings.

### accountInfo
* accountInfo `object`
  * companyInfo [companyInfo](#companyinfo)
  * email **required** [BeezUP.Common.Email](#beezup.common.email)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * links **required** [accountInfoLinks](#accountinfolinks)
  * personalInfo [personalInfo](#personalinfo)
  * profilePictureUrl [profilePictureUrl](#profilepictureurl)
  * status **required** [accountStatus](#accountstatus)
  * userId **required** [BeezUP.Common.UserId](#beezup.common.userid)

### accountInfoLinks
* accountInfoLinks `object`: The different actions you can make on this account
  * activateUserAccount [links.activateUserAccountLink](#links.activateuseraccountlink)
  * changePassword **required** [links.changePasswordLink](#links.changepasswordlink)
  * getCreditCardInfo **required** [links.getCreditCardInfoLink](#links.getcreditcardinfolink)
  * getProfilePictureInfo **required** [links.getProfilePictureInfoLink](#links.getprofilepictureinfolink)
  * saveCompanyInfo **required** [links.saveCompanyInfoLink](#links.savecompanyinfolink)
  * saveCreditCardInfo **required** [links.saveCreditCardInfoLink](#links.savecreditcardinfolink)
  * savePersonalInfo **required** [links.savePersonalInfoLink](#links.savepersonalinfolink)
  * saveProfilePictureInfo **required** [links.saveProfilePictureInfoLink](#links.saveprofilepictureinfolink)
  * self **required** [links.getUserAccountInfoLink](#links.getuseraccountinfolink)

### accountPublications
* accountPublications `object`: The publication history for an account
  * links **required** [accountPublicationsLinks](#accountpublicationslinks)
  * publications **required** `array`: The recent publications for the requested account
    * items [publicationReporting](#publicationreporting)

### accountPublicationsLinks
* accountPublicationsLinks `object`
  * self **required** [links.GetPublicationsLink](#links.getpublicationslink)

### accountStatus
* accountStatus `string` (values: Active, SystemBlocked, UserBlocked, NotActivated): The account status

### accountSynchronization
* accountSynchronization `object`
  * accountId **required** [accountId](#accountid)
  * completedHarvestSynchroUtcDate `string`
  * marketplaceBusinessCode **required** [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)

### accountSynchronizationList
* accountSynchronizationList `object`
  * accountSynchronizations `array`
    * items [accountSynchronization](#accountsynchronization)

### accountingEmails
* accountingEmails `array`: Your company accounting emails
  * items [BeezUP.Common.Email](#beezup.common.email)

### addChannelCatalogRequest
* addChannelCatalogRequest `object`
  * channelId **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * storeId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)

### additionalProductColumnFilters
* additionalProductColumnFilters `object`: Describes a filter on a product's column.

### address
* address `string`: Your address

### alertEnabled
* alertEnabled `boolean`: Is the alert enable ?

### alertId
* alertId `integer`: Alert identifier

### alertName
* alertName `string`: The alert name

### alertPropertyId
* alertPropertyId `integer`: The property identifier of the alert

### alertPropertyValue
* alertPropertyValue `string`: The property value

### analyticsIndex
* analyticsIndex `object`: The Analytics API operation index.
  * links **required** [analyticsIndexLinks](#analyticsindexlinks)
  * lovLinks [analyticsIndexLovLinks](#analyticsindexlovlinks)
  * stores **required** `array`
    * items [analyticsStoreIndex](#analyticsstoreindex)

### analyticsIndexLinks
* analyticsIndexLinks `object`
  * self **required** [links.AnalyticsIndexLink](#links.analyticsindexlink)
  * trackingStatus [links.GetTrackingStatusLink](#links.gettrackingstatuslink)

### analyticsIndexLovLinks
* analyticsIndexLovLinks `object`
  * numericProductColumnFilterOperatorNameLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorFilterOperatorNameLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorFormulaOperatorNameLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorFormulaParameterTypeLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorTypeForReportsByCategoryLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorTypeForReportsByChannelLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorTypeForReportsByProductLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * performanceIndicatorTypeLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * productColumnFilterOperatorNameLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * storeOptimisationRuleExecutionStatusLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * stringProductColumnFilterOperatorNameLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### analyticsStoreIndex
* analyticsStoreIndex `object`
  * links **required** [analyticsStoreIndexLinks](#analyticsstoreindexlinks)

### analyticsStoreIndexLinks
* analyticsStoreIndexLinks `object`
  * optimise [links.OptimiseLink](#links.optimiselink)
  * optimiseAll [links.OptimiseAllLink](#links.optimisealllink)
  * optimiseByCategory [links.OptimiseByCategoryLink](#links.optimisebycategorylink)
  * optimiseByChannel [links.OptimiseByChannelLink](#links.optimisebychannellink)
  * optimiseByProduct [links.OptimiseByProductLink](#links.optimisebyproductlink)
  * reportByCategory [links.GetStoreReportByCategoryLink](#links.getstorereportbycategorylink)
  * reportByChannel [links.GetStoreReportByChannelLink](#links.getstorereportbychannellink)
  * reportByDay [links.GetStoreReportByDayLink](#links.getstorereportbydaylink)
  * reportByProduct [links.GetStoreReportByProductLink](#links.getstorereportbyproductlink)
  * reportFilters **required** [links.GetReportFiltersLink](#links.getreportfilterslink)
  * rules [links.GetRulesLink](#links.getruleslink)
  * self **required** [links.AnalyticsIndexLink](#links.analyticsindexlink)
  * trackedClicks **required** [links.GetStoreTrackedClicksLink](#links.getstoretrackedclickslink)
  * trackedExternalOrders [links.GetStoreTrackedExternalOrdersLink](#links.getstoretrackedexternalorderslink)
  * trackedOrders **required** [links.GetStoreTrackedOrdersLink](#links.getstoretrackedorderslink)
  * trackingStatus **required** [links.GetStoreTrackingStatusLink](#links.getstoretrackingstatuslink)

### apiCredential
* apiCredential `object`: Your api credential
  * primaryToken `string`: The primary token to be used in the next call in the user scope API
  * productName `string`: The product name related to this credential
  * secondaryToken `string`: The secondary token. Could be usefull if you want to share your access with someone else.

### apiCredentials
* apiCredentials `object`
  * credentials `array`: Your API credential list
    * items [apiCredential](#apicredential)

### autoImportConfiguration
* autoImportConfiguration `object`
  * duplicateProductConfiguration **required** [duplicateProductValueConfiguration](#duplicateproductvalueconfiguration)
  * input **required** [inputConfiguration](#inputconfiguration)
  * inputConfiguredByUserId **required** [BeezUP.Common.UserId](#beezup.common.userid)
  * pauseStatusChangedByUserId [BeezUP.Common.UserId](#beezup.common.userid)
  * pauseStatusChangedUtcDate `string`: Indicate when the pause status has changed in UTC date.
  * paused **required** `boolean`: Indicate if the auto import is in pause or not.
  * scheduledByUserId [BeezUP.Common.UserId](#beezup.common.userid)
  * schedulingLocalTimeZoneName `string`: Indicate the time zone name of the scheduling. If the scheduling type is "Schedule"
  * schedulingType **required** [schedulingType](#schedulingtype)
  * schedulingValue **required** `array`: Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time.
    * items `string`

### autoImportConfigurationLinks
* autoImportConfigurationLinks `object`
  * activate [links.Importation_ActivateAutoImportLink](#links.importation_activateautoimportlink)
  * pause [links.Auto_PauseAutoImportLink](#links.auto_pauseautoimportlink)
  * resume [links.Auto_ResumeAutoImportLink](#links.auto_resumeautoimportlink)
  * schedule [links.Auto_ScheduleAutoImportLink](#links.auto_scheduleautoimportlink)
  * scheduleInterval [links.Auto_ConfigureAutoImportIntervalLink](#links.auto_configureautoimportintervallink)
  * self **required** [links.Auto_GetAutoImportConfigurationLink](#links.auto_getautoimportconfigurationlink)
  * start [links.Auto_StartAutoImportLink](#links.auto_startautoimportlink)

### automaticTransition
* automaticTransition `object`
  * accountId **required** [accountId](#accountid)
  * enabled **required** `boolean`
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * orderStatusTransitionId **required** `integer`

### automaticTransitionInfo
* automaticTransitionInfo
  * accountId **required** [accountId](#accountid)
  * enabled **required** `boolean`
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * orderStatusTransitionId **required** `integer`
  * beezUPOrderStatus **required** [beezUPOrderStatus](#beezuporderstatus)
  * businessOperationType **required** [businessOperationType](#businessoperationtype)
  * links [automaticTransitionInfoLinks](#automatictransitioninfolinks)
  * marketplaceBusinessCode **required** [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)

### automaticTransitionInfoLinks
* automaticTransitionInfoLinks `object`
  * configure **required** [links.ConfigureAutomaticTransitionsLink](#links.configureautomatictransitionslink)

### automaticTransitionInfoList
* automaticTransitionInfoList `object`
  * automaticTransitionInfos `array`
    * items [automaticTransitionInfo](#automatictransitioninfo)
  * links **required** [automaticTransitionInfoListLinks](#automatictransitioninfolistlinks)

### automaticTransitionInfoListLinks
* automaticTransitionInfoListLinks `object`
  * configure **required** [links.ConfigureAutomaticTransitionsLink](#links.configureautomatictransitionslink)
  * self **required** [links.GetAutomaticTransitionsLink](#links.getautomatictransitionslink)

### batchOrderOperationResponse
* batchOrderOperationResponse `object`: The response given by the batch operation
  * operations **required** `array`
    * items [orderOperationResponse](#orderoperationresponse)

### beezUPColumnConfiguration
* beezUPColumnConfiguration `object`: Describe a BeezUP column
  * beezUPColumnName **required** [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)
  * canBeTruncated [canBeTruncated](#canbetruncated)
  * columnDataType [BeezUP.Common.ColumnDataType](#beezup.common.columndatatype)
  * columnImportance **required** [BeezUP.Common.ColumnImportance](#beezup.common.columnimportance)
  * description `string`: Describe the BeezUP column
  * displayGroupName **required** [displayGroupName](#displaygroupname)
  * unique `boolean`: /!\ ONLY AVAILABLE ON CATALOG COLUMN NOT ON CUSTOM COLUMNS!!

### beezUPOrderId
* beezUPOrderId `string`: The BeezUP Order identifier

### beezUPOrderStatus
* beezUPOrderStatus `string`: BeezUP order status. Unified for all marketplaces.

### beezUPTimeZoneId
* beezUPTimeZoneId `integer`: The time zone identifier based on the list of values /v2/user/lov/BeezUPTimeZone

### billingPeriod
* billingPeriod `object`
  * billingPeriodInMonth **required** `integer`: The billing period in month
  * discountPercentage **required** `number`: The discount percentage related to this billing period

### billingPeriodInMonth
* billingPeriodInMonth `integer`: Can be null. The billing period in month based on /billingPeriods

### billingPeriodList
* billingPeriodList `object`
  * billingPeriods **required** `array`: The billing period list
    * items [billingPeriod](#billingperiod)
  * links **required** [billingPeriodListLinks](#billingperiodlistlinks)

### billingPeriodListLinks
* billingPeriodListLinks `object`
  * self [links.getBillingPeriodsLink](#links.getbillingperiodslink)

### bonusInfo
* bonusInfo `object`
  * amount **required** `number`
  * bonusType **required** [bonusType](#bonustype)

### bonusType
* bonusType `string` (values: OnlinePaymentMethodBonus, PreviousInvoiceProrataBonus, PreviousContractBonus)

### businessOperationType
* businessOperationType `string`

### canBeTruncated
* canBeTruncated `boolean`: If the size of the value is greater than the limit we can truncate the value instead of failing...

### cardNumber
* cardNumber `string`: Card number

### cardVerificationCode
* cardVerificationCode `string`: Card Verification Code

### catalogColumn
* catalogColumn `object`: The catalog column configuration
  * catalogColumnName **required** [catalogColumnName](#catalogcolumnname)
  * configuration **required** [columnConfiguration](#columnconfiguration)
  * duplicateProductValueConfiguration [duplicateProductValueConfiguration](#duplicateproductvalueconfiguration)
  * id **required** [columnId](#columnid)
  * ignored `boolean`: IF true, the product values of this column will be not taken in account during the importation process
  * links **required** [catalogColumnLinks](#catalogcolumnlinks)
  * userColumName **required** [userColumName](#usercolumname)

### catalogColumnLinks
* catalogColumnLinks `object`
  * rename [links.Catalog_ChangeCatalogColumnUserNameLink](#links.catalog_changecatalogcolumnusernamelink)

### catalogColumnList
* catalogColumnList `object`
  * catalogColumns **required** `array`
    * items [catalogColumn](#catalogcolumn)

### catalogColumnName
* catalogColumnName `string`: The catalog column name

### catalogIndex
* catalogIndex `object`
  * links **required** [catalogIndexLinks](#catalogindexlinks)
  * lovLinks **required** [catalogIndexLOVLinks](#catalogindexlovlinks)
  * storeLinks [catalogStoreIndexList](#catalogstoreindexlist)

### catalogIndexLOVLinks
* catalogIndexLOVLinks `object`
  * beezUPColumnDataTypeLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * beezUPColumnDisplayGroupLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * beezUPColumnImportanceLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * beezUPColumnLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * compareOptionLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * duplicateProductValueStrategyLov **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### catalogIndexLinks
* catalogIndexLinks `object`
  * beezUPColumns **required** [links.Catalog_GetBeezUPColumnsLink](#links.catalog_getbeezupcolumnslink)
  * self **required** [links.CatalogIndexLink](#links.catalogindexlink)

### catalogStoreIndex
* catalogStoreIndex `object`
  * links **required** [catalogStoreIndexLinks](#catalogstoreindexlinks)
  * status **required** [catalogStoreStatus](#catalogstorestatus)

### catalogStoreIndexLinks
* catalogStoreIndexLinks `object`
  * autoImportInfo [links.Auto_GetAutoImportConfigurationLink](#links.auto_getautoimportconfigurationlink)
  * catalogColumns [links.Catalog_GetCatalogColumnsLink](#links.catalog_getcatalogcolumnslink)
  * categories [links.Catalog_GetCategoriesLink](#links.catalog_getcategorieslink)
  * computeExpression [links.Catalog_ComputeExpressionLink](#links.catalog_computeexpressionlink)
  * customColumns [links.Catalog_GetCustomColumnsLink](#links.catalog_getcustomcolumnslink)
  * importations [links.Importation_GetReportingsLink](#links.importation_getreportingslink)
  * inputConfiguration [links.Importation_GetManualUpdateLastInputConfigLink](#links.importation_getmanualupdatelastinputconfiglink)
  * products [links.Catalog_GetProductsLink](#links.catalog_getproductslink)
  * randomProducts [links.Catalog_GetRandomProductsLink](#links.catalog_getrandomproductslink)
  * self **required** [links.CatalogStoreIndexLink](#links.catalogstoreindexlink)
  * startImportation [links.Importation_StartManualUpdateLink](#links.importation_startmanualupdatelink)

### catalogStoreIndexList
* catalogStoreIndexList `object`
  * links `object`: The key is the store identifier.

### catalogStoreStatus
* catalogStoreStatus `string` (values: OK, Failed, Outdated): Indicates the status of the catalog store.

### category
* category `object`: The catalog category
  * categoryPath **required** [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)
  * selfProductCount **required** `integer`: The product count related to this category
  * totalProductCount **required** `integer`: The total product count related to this category and his sub categories

### categoryList
* categoryList `object`: The object which contains the category list
  * categories **required** `array`: The category list
    * items [category](#category)

### categoryMappingState
* categoryMappingState `object`: The category mapping state of the channel catalog
  * categorizedWithoutCostProductCount `integer`: Indicates the categorized product count without cost defined on the category
  * status [categoryMappingStatus](#categorymappingstatus)
  * uncategorizedProductCount `integer`: Indicates the uncategorized product count

### categoryMappingStatus
* categoryMappingStatus `string` (values: warning, success, failed)

### changeCustomColumnExpressionRequest
* changeCustomColumnExpressionRequest `object`: The request message to change the custom column expression
  * encryptedBlocklyExpression **required** [encryptedBlocklyExpression](#encryptedblocklyexpression)
  * encryptedExpression **required** [encryptedExpression](#encryptedexpression)

### changeCustomColumnRequest
* changeCustomColumnRequest `object`: The message request to change a custom column expression an user name
  * encryptedBlocklyExpression **required** [encryptedBlocklyExpression](#encryptedblocklyexpression)
  * encryptedExpression **required** [encryptedExpression](#encryptedexpression)
  * userColumName **required** [userColumName](#usercolumname)

### changeOrderListRequest
* changeOrderListRequest `object`: Contains all change order operations you want to make
  * changeOrders **required** `array`: The change order operations
    * items [changeOrderListRequestItem](#changeorderlistrequestitem)

### changeOrderListRequestItem
* changeOrderListRequestItem `object`: Contains the order identifier and the change order request
  * changeOrderRequest [changeOrderRequest](#changeorderrequest)
  * order **required** [orderIdentifierWithETag](#orderidentifierwithetag)

### changeOrderReporting
* changeOrderReporting `object`: The reporting related to a change order operation
  * changeOrderType [businessOperationType](#businessoperationtype)
  * creationUtcDate `string`: The creation UTC date of the execution
  * details `object`
  * errorMessage `string`: The error message during the execution
  * executionUUID [executionUUID](#executionuuid)
  * ipAddress `string`: The IP address who request this operation
  * lastUpdateUtcDate `string`: The last update UTC date of the execution
  * processingStatus `string`: The processing status of the execution
  * sourceType [sourceType](#sourcetype)
  * sourceUserId [BeezUP.Common.UserId](#beezup.common.userid)
  * sourceUserName `string`
  * testMode `boolean`: This operation was a test

### changeOrderRequest
* changeOrderRequest `object`: All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted

### changePasswordRequest
* changePasswordRequest `object`
  * newPassword **required** `string`: Your new password. Which must respect the same constraints as the user registeration
  * oldPassword **required** `string`: Your current password

### changeUserColumnNameRequest
* changeUserColumnNameRequest `object`: The message request for the change user column name
  * userColumName **required** [userColumName](#usercolumname)

### channelCatalog
* channelCatalog
  * channelId **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * channelImageUrl **required** [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * channelName **required** [BeezUP.Common.ChannelName](#beezup.common.channelname)
  * categoryMappingSettings [channelCatalogCategoryMappingSettings](#channelcatalogcategorymappingsettings)
  * channelCatalogId **required** [BeezUP.Common.ChannelCatalogId](#beezup.common.channelcatalogid)
  * channelCategorySettings **required** [channelCategorySettings](#channelcategorysettings)
  * channelCostSettings **required** [channelCostSettings](#channelcostsettings)
  * columnMappings [channelCatalogColumnMappingListWithName](#channelcatalogcolumnmappinglistwithname)
  * costSettings [costSettings](#costsettings)
  * enabled **required** `boolean`: Indicates if the channel catalog is enable
  * exclusionFilters [exclusionFilters](#exclusionfilters)
  * exportUrl [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * generalSettings **required** [generalSettings](#generalsettings)
  * isMarketplace **required** `boolean`: Indicates if this channel catalog is related to a marketplace
  * links **required** [channelCatalogLinks](#channelcataloglinks)
  * productCount **required** `integer`: The product count exported considering category mapping. Not all filters have been applied.
  * state **required** [channelCatalogState](#channelcatalogstate)
  * storeId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)
  * types **required** `array`: The channel type list related to the channel
    * items `string`

### channelCatalogCategoryConfiguration
* channelCatalogCategoryConfiguration `object`: Represent a mapping between a catalog category path and a channel category path.
  * autoMapNewSubCategories **required** `boolean`: Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.
  * catalogCategoryPath **required** [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)
  * channelCategoryPath [BeezUP.Common.ChannelCategoryPath](#beezup.common.channelcategorypath)
  * costValue [channelCatalogCategoryCostValue](#channelcatalogcategorycostvalue)

### channelCatalogCategoryConfigurationInfo
* channelCatalogCategoryConfigurationInfo `object`: For all catalog categories the current mapping applied
  * catalogCategoryPath **required** [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)
  * channelCategoryPath [BeezUP.Common.ChannelCategoryPath](#beezup.common.channelcategorypath)
  * costValue [channelCatalogCategoryCostValue](#channelcatalogcategorycostvalue)
  * links **required** [channelCatalogCategoryMappingInfoLinks](#channelcatalogcategorymappinginfolinks)

### channelCatalogCategoryConfigurationList
* channelCatalogCategoryConfigurationList `object`
  * channelCatalogCategoryConfigurations **required** `array`
    * items [channelCatalogCategoryConfigurationInfo](#channelcatalogcategoryconfigurationinfo)
  * costStatus **required** [costStatus](#coststatus)
  * links **required** [channelCatalogCategoryMappingsLinks](#channelcatalogcategorymappingslinks)
  * mappingStatus **required** [mappingStatus](#mappingstatus)

### channelCatalogCategoryCostValue
* channelCatalogCategoryCostValue `number`: In case of CPC_ByCategory or CPA_ByCategory cost type, you have to indicate the cost value.

### channelCatalogCategoryMappingInfoLinks
* channelCatalogCategoryMappingInfoLinks `object`
  * configureCategories [links.ConfigureChannelCatalogCategoryLink](#links.configurechannelcatalogcategorylink)

### channelCatalogCategoryMappingSettings
* channelCatalogCategoryMappingSettings `object`
  * categoryMappingDisabledByMerchant `boolean`: Optional parameter. Indicates that you have decided to do not map your categories with the channel's categories.

### channelCatalogCategoryMappingsLinks
* channelCatalogCategoryMappingsLinks `object`: The action you can do on the category mappings
  * disable [links.DisableChannelCatalogCategoryMappingLink](#links.disablechannelcatalogcategorymappinglink)
  * reenable [links.ReenableChannelCatalogCategoryMappingLink](#links.reenablechannelcatalogcategorymappinglink)
  * self **required** [links.GetChannelCatalogCategoriesLink](#links.getchannelcatalogcategorieslink)

### channelCatalogColumnMapping
* channelCatalogColumnMapping `object`: Represent a mapping between a channel column (considering channel category mapping) and a catalog column
  * catalogColumnId [BeezUP.Common.CatalogColumnId](#beezup.common.catalogcolumnid)
  * channelCategoryPath [BeezUP.Common.ChannelCategoryPath](#beezup.common.channelcategorypath)
  * channelColumnId **required** [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)

### channelCatalogColumnMappingList
* channelCatalogColumnMappingList `array`: The column mapping list between a channel and a catalog
  * items [channelCatalogColumnMapping](#channelcatalogcolumnmapping)

### channelCatalogColumnMappingListWithName
* channelCatalogColumnMappingListWithName `array`: The column mapping list between a channel and a catalog
  * items [channelCatalogColumnMappingWithName](#channelcatalogcolumnmappingwithname)

### channelCatalogColumnMappingWithName
* channelCatalogColumnMappingWithName
  * catalogColumnId [BeezUP.Common.CatalogColumnId](#beezup.common.catalogcolumnid)
  * channelCategoryPath [BeezUP.Common.ChannelCategoryPath](#beezup.common.channelcategorypath)
  * channelColumnId **required** [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)
  * catalogBeezUPColumnName [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)
  * catalogColumnName [BeezUP.Common.CatalogColumnUserName](#beezup.common.catalogcolumnusername)
  * channelBeezUPColumnName [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)
  * channelColumnName **required** [BeezUP.Common.ChannelColumnName](#beezup.common.channelcolumnname)

### channelCatalogExportCacheInfo
* channelCatalogExportCacheInfo `object`
  * cacheStatus **required** `string`: The cache status
  * expirationUtcDate `string`: The expiration UTC date of the cache
  * feedUrl `string`: The feed url
  * lastContentChangeUtcDate `string`: The last content change UTC date
  * lastUpdateUtcDate `string`: The last update UTC date of the cache

### channelCatalogExportCacheInfoResponse
* channelCatalogExportCacheInfoResponse `object`
  * cacheInfo **required** [channelCatalogExportCacheInfo](#channelcatalogexportcacheinfo)
  * links **required** [channelCatalogExportCacheInfoResponseLinks](#channelcatalogexportcacheinforesponselinks)

### channelCatalogExportCacheInfoResponseLinks
* channelCatalogExportCacheInfoResponseLinks `object`
  * clear [links.ClearChannelCatalogExportationCacheLink](#links.clearchannelcatalogexportationcachelink)
  * self **required** [links.GetChannelCatalogExportationCacheInfoLink](#links.getchannelcatalogexportationcacheinfolink)

### channelCatalogExportationHistory
* channelCatalogExportationHistory `object`
  * exportations **required** `array`
    * items [channelCatalogExportationReporting](#channelcatalogexportationreporting)
  * links **required** [channelCatalogExportationHistoryLinks](#channelcatalogexportationhistorylinks)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### channelCatalogExportationHistoryLinks
* channelCatalogExportationHistoryLinks `object`
  * self [links.GetChannelCatalogExportationHistoryLink](#links.getchannelcatalogexportationhistorylink)

### channelCatalogExportationReporting
* channelCatalogExportationReporting `object`
  * cacheStatus `string`: The cache status during the exportation
  * clientIpAddress **required** `string`: The IP address of the client who requests this exportation
  * clientUserAgent **required** `string`: The http header User-Agent sent by the client who requests this operation
  * exportationDuration `string`: The exportation duration. \
  * exportationUtcDate **required** `string`: The exportation UTC date
  * exportedProductCount `integer`: The exportated product count during this exportation

### channelCatalogLinks
* channelCatalogLinks `object`: Indicates the actions you can do on a channel catalog
  * categoryMappings [links.GetChannelCatalogCategoriesLink](#links.getchannelcatalogcategorieslink)
  * channelInfo [externalLinks.GetChannelInfoLink](#externallinks.getchannelinfolink)
  * configureColumnMappings [links.ConfigureChannelCatalogColumnMappingsLink](#links.configurechannelcatalogcolumnmappingslink)
  * configureCostSettings [links.ConfigureChannelCatalogCostSettingsLink](#links.configurechannelcatalogcostsettingslink)
  * configureGeneralSettings [links.ConfigureChannelCatalogGeneralSettingsLink](#links.configurechannelcataloggeneralsettingslink)
  * delete [links.DeleteChannelCatalogLink](#links.deletechannelcataloglink)
  * disable [links.DisableChannelCatalogLink](#links.disablechannelcataloglink)
  * disableCategoryMappings [links.DisableChannelCatalogCategoryMappingLink](#links.disablechannelcatalogcategorymappinglink)
  * enable [links.EnableChannelCatalogLink](#links.enablechannelcataloglink)
  * exclusionFilters [links.GetChannelCatalogExclusionFiltersLink](#links.getchannelcatalogexclusionfilterslink)
  * exportationCacheInfo [links.GetChannelCatalogExportationCacheInfoLink](#links.getchannelcatalogexportationcacheinfolink)
  * marketplaceSettings [externalLinks.GetChannelCatalogMarketplaceSettingsLink](#externallinks.getchannelcatalogmarketplacesettingslink)
  * products [links.GetChannelCatalogProductInfoListLink](#links.getchannelcatalogproductinfolistlink)
  * reenableCategoryMappings [links.ReenableChannelCatalogCategoryMappingLink](#links.reenablechannelcatalogcategorymappinglink)
  * self **required** [links.GetChannelCatalogLink](#links.getchannelcataloglink)

### channelCatalogList
* channelCatalogList `object`: This is the index of the channel catalog API
  * channelCatalogs `object`: The channel catalog list. The key is the channel catalog identifier
  * links [channelCatalogListLinks](#channelcataloglistlinks)
  * lovLinks [channelCatalogListLovLinks](#channelcataloglistlovlinks)

### channelCatalogListLinks
* channelCatalogListLinks `object`: Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
  * add [links.AddChannelCatalogLink](#links.addchannelcataloglink)
  * beezUPColumns [externalLinks.Catalog_GetBeezUPColumnsLink](#externallinks.catalog_getbeezupcolumnslink)
  * exclusionFilterOperators [links.GetChannelCatalogExclusionFilterOperatorsLink](#links.getchannelcatalogexclusionfilteroperatorslink)
  * self [links.GetChannelCatalogsLink](#links.getchannelcatalogslink)

### channelCatalogListLovLinks
* channelCatalogListLovLinks `object`
  * channelCatalogExclusionFilterOperatorLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * channelCatalogExportCacheStatusLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### channelCatalogMarketplaceBooleanProperty
* channelCatalogMarketplaceBooleanProperty
  * description `string`: Indicate the description of the property
  * discriminatorType **required** [channelCatalogMarketplacePropertyDiscriminatorType](#channelcatalogmarketplacepropertydiscriminatortype)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: Indicates if the property value must be in the list of value.
  * maxItems `integer`: Indicates the maximum item count of the property value
  * maxLength `integer`: Indicates the maximum size of the property value
  * minItems `integer`: Indicates the minimum item count of the property value.
  * minLength `integer`: Indicates the minimum size of the property value
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * offerIdRequired `integer`: Indicates the offer identifier required to configure this property.
  * pattern `string`: Channel catalog marketplace setting value format validation regular expression
  * position **required** `integer`: Indicate the position of the property in the display group
  * readOnly **required** `boolean`: Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
  * required **required** `boolean`: Indicate if the property is required or not
  * type **required** [type](#type)
  * visible **required** `boolean`: Indicates if this property should be displayed in the configuration page.
  * default `boolean`: Indicate the default values of the property

### channelCatalogMarketplaceBooleanSetting
* channelCatalogMarketplaceBooleanSetting
  * discriminatorType **required** [channelCatalogMarketplaceSettingDiscriminatorType](#channelcatalogmarketplacesettingdiscriminatortype)
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * value `boolean`: Channel catalog marketplace property values

### channelCatalogMarketplaceIntegerProperty
* channelCatalogMarketplaceIntegerProperty
  * description `string`: Indicate the description of the property
  * discriminatorType **required** [channelCatalogMarketplacePropertyDiscriminatorType](#channelcatalogmarketplacepropertydiscriminatortype)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: Indicates if the property value must be in the list of value.
  * maxItems `integer`: Indicates the maximum item count of the property value
  * maxLength `integer`: Indicates the maximum size of the property value
  * minItems `integer`: Indicates the minimum item count of the property value.
  * minLength `integer`: Indicates the minimum size of the property value
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * offerIdRequired `integer`: Indicates the offer identifier required to configure this property.
  * pattern `string`: Channel catalog marketplace setting value format validation regular expression
  * position **required** `integer`: Indicate the position of the property in the display group
  * readOnly **required** `boolean`: Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
  * required **required** `boolean`: Indicate if the property is required or not
  * type **required** [type](#type)
  * visible **required** `boolean`: Indicates if this property should be displayed in the configuration page.
  * default `array`: Indicate the default values of the property
    * items `integer`

### channelCatalogMarketplaceIntegerSetting
* channelCatalogMarketplaceIntegerSetting
  * discriminatorType **required** [channelCatalogMarketplaceSettingDiscriminatorType](#channelcatalogmarketplacesettingdiscriminatortype)
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * values `array`: Channel catalog marketplace property values
    * items `integer`

### channelCatalogMarketplaceNumberProperty
* channelCatalogMarketplaceNumberProperty
  * description `string`: Indicate the description of the property
  * discriminatorType **required** [channelCatalogMarketplacePropertyDiscriminatorType](#channelcatalogmarketplacepropertydiscriminatortype)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: Indicates if the property value must be in the list of value.
  * maxItems `integer`: Indicates the maximum item count of the property value
  * maxLength `integer`: Indicates the maximum size of the property value
  * minItems `integer`: Indicates the minimum item count of the property value.
  * minLength `integer`: Indicates the minimum size of the property value
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * offerIdRequired `integer`: Indicates the offer identifier required to configure this property.
  * pattern `string`: Channel catalog marketplace setting value format validation regular expression
  * position **required** `integer`: Indicate the position of the property in the display group
  * readOnly **required** `boolean`: Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
  * required **required** `boolean`: Indicate if the property is required or not
  * type **required** [type](#type)
  * visible **required** `boolean`: Indicates if this property should be displayed in the configuration page.
  * default `array`: Indicate the default values of the property
    * items `number`

### channelCatalogMarketplaceNumberSetting
* channelCatalogMarketplaceNumberSetting
  * discriminatorType **required** [channelCatalogMarketplaceSettingDiscriminatorType](#channelcatalogmarketplacesettingdiscriminatortype)
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * values `array`: Channel catalog marketplace property values
    * items `number`

### channelCatalogMarketplaceProperties
* channelCatalogMarketplaceProperties `object`
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * links **required** [channelCatalogMarketplacePropertiesLinks](#channelcatalogmarketplacepropertieslinks)
  * propertyGroups **required** `array`: The groups settings with constraints
    * items [channelCatalogMarketplacePropertyGroup](#channelcatalogmarketplacepropertygroup)

### channelCatalogMarketplacePropertiesLinks
* channelCatalogMarketplacePropertiesLinks `object`
  * externalConfigurationPage [externalLinks.GetExternalConfigurationPageLink](#externallinks.getexternalconfigurationpagelink)
  * self **required** [links.GetChannelCatalogMarketplacePropertiesLink](#links.getchannelcatalogmarketplacepropertieslink)
  * settings [links.GetChannelCatalogMarketplaceSettingsLink](#links.getchannelcatalogmarketplacesettingslink)

### channelCatalogMarketplaceProperty
* channelCatalogMarketplaceProperty `object`: Model for fetching a channel catalog marketplace property
  * description `string`: Indicate the description of the property
  * discriminatorType **required** [channelCatalogMarketplacePropertyDiscriminatorType](#channelcatalogmarketplacepropertydiscriminatortype)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: Indicates if the property value must be in the list of value.
  * maxItems `integer`: Indicates the maximum item count of the property value
  * maxLength `integer`: Indicates the maximum size of the property value
  * minItems `integer`: Indicates the minimum item count of the property value.
  * minLength `integer`: Indicates the minimum size of the property value
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * offerIdRequired `integer`: Indicates the offer identifier required to configure this property.
  * pattern `string`: Channel catalog marketplace setting value format validation regular expression
  * position **required** `integer`: Indicate the position of the property in the display group
  * readOnly **required** `boolean`: Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
  * required **required** `boolean`: Indicate if the property is required or not
  * type **required** [type](#type)
  * visible **required** `boolean`: Indicates if this property should be displayed in the configuration page.

### channelCatalogMarketplacePropertyDiscriminatorType
* channelCatalogMarketplacePropertyDiscriminatorType `string` (values: channelCatalogMarketplaceStringProperty, channelCatalogMarketplaceIntegerProperty, channelCatalogMarketplaceBooleanProperty, channelCatalogMarketplaceNumberProperty)

### channelCatalogMarketplacePropertyGroup
* channelCatalogMarketplacePropertyGroup `object`
  * name **required** `string`: Indicate the code identifier of the group
  * position **required** `integer`: Indicate the position of the group
  * properties **required** `array`
    * items [channelCatalogMarketplaceProperty](#channelcatalogmarketplaceproperty)

### channelCatalogMarketplacePropertyName
* channelCatalogMarketplacePropertyName `string`: Channel catalog marketplace property name

### channelCatalogMarketplaceSetting
* channelCatalogMarketplaceSetting `object`: Model for fetching a channel catalog marketplace setting
  * discriminatorType **required** [channelCatalogMarketplaceSettingDiscriminatorType](#channelcatalogmarketplacesettingdiscriminatortype)
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)

### channelCatalogMarketplaceSettingArray
* channelCatalogMarketplaceSettingArray `array`
  * items [channelCatalogMarketplaceSetting](#channelcatalogmarketplacesetting)

### channelCatalogMarketplaceSettingDiscriminatorType
* channelCatalogMarketplaceSettingDiscriminatorType `string` (values: channelCatalogMarketplaceStringSetting, channelCatalogMarketplaceIntegerSetting, channelCatalogMarketplaceBooleanSetting, channelCatalogMarketplaceNumberSetting)

### channelCatalogMarketplaceSettings
* channelCatalogMarketplaceSettings `object`: The channel catalog marketplace settings
  * links **required** [channelCatalogMarketplaceSettingsLinks](#channelcatalogmarketplacesettingslinks)
  * settings **required** `array`
    * items [channelCatalogMarketplaceSetting](#channelcatalogmarketplacesetting)

### channelCatalogMarketplaceSettingsLinks
* channelCatalogMarketplaceSettingsLinks `object`
  * save **required** [links.SetChannelCatalogMarketplaceSettingsLink](#links.setchannelcatalogmarketplacesettingslink)
  * self **required** [links.GetChannelCatalogMarketplaceSettingsLink](#links.getchannelcatalogmarketplacesettingslink)

### channelCatalogMarketplaceStringProperty
* channelCatalogMarketplaceStringProperty
  * description `string`: Indicate the description of the property
  * discriminatorType **required** [channelCatalogMarketplacePropertyDiscriminatorType](#channelcatalogmarketplacepropertydiscriminatortype)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * lovLink [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * lovRequired `boolean`: Indicates if the property value must be in the list of value.
  * maxItems `integer`: Indicates the maximum item count of the property value
  * maxLength `integer`: Indicates the maximum size of the property value
  * minItems `integer`: Indicates the minimum item count of the property value.
  * minLength `integer`: Indicates the minimum size of the property value
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * offerIdRequired `integer`: Indicates the offer identifier required to configure this property.
  * pattern `string`: Channel catalog marketplace setting value format validation regular expression
  * position **required** `integer`: Indicate the position of the property in the display group
  * readOnly **required** `boolean`: Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
  * required **required** `boolean`: Indicate if the property is required or not
  * type **required** [type](#type)
  * visible **required** `boolean`: Indicates if this property should be displayed in the configuration page.
  * default `array`: Indicate the default values of the property
    * items `string`

### channelCatalogMarketplaceStringSetting
* channelCatalogMarketplaceStringSetting
  * discriminatorType **required** [channelCatalogMarketplaceSettingDiscriminatorType](#channelcatalogmarketplacesettingdiscriminatortype)
  * name **required** [channelCatalogMarketplacePropertyName](#channelcatalogmarketplacepropertyname)
  * values `array`: Channel catalog marketplace property values
    * items `string`

### channelCatalogProductByChannelCatalogRequest
* channelCatalogProductByChannelCatalogRequest `object`
  * channelCatalogIds **required** `array`: The list of channel catalog identifier
    * items [BeezUP.Common.ChannelCatalogId](#beezup.common.channelcatalogid)
  * productId **required** [BeezUP.Common.ProductId](#beezup.common.productid)
  * storeId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)

### channelCatalogProductByChannelCatalogResponse
* channelCatalogProductByChannelCatalogResponse `object`
  * channelCatalogs `object`: The channel catalog product by channel catalog. The key is the channel catalog identifier

### channelCatalogProductInfo
* channelCatalogProductInfo
  * productExists **required** `boolean`: Indicates if the product still exists in your catalog
  * productId **required** `string`: The product identifier
  * productImageUrl `string`: The product image Url
  * productSku **required** `string`: The product SKU
  * productTitle **required** `string`: The product tile
  * disabled **required** `boolean`: Indicates if the product has been disabled or not
  * excluded **required** `boolean`: Indicates if the product has been excluded by a exclusion filter
  * excludedBy `array`
    * items [exclusionFilterName](#exclusionfiltername)
  * links **required** [channelCatalogProductInfoLinks](#channelcatalogproductinfolinks)
  * overrides **required** [productOverridesWithCatalogValues](#productoverrideswithcatalogvalues)
  * uncategorized **required** `boolean`: Indicates if the product's category has been NOT mapped to a channel category

### channelCatalogProductInfoLinks
* channelCatalogProductInfoLinks `object`: Indicates the differents actions you can do on a channel product
  * disable [links.DisableChannelCatalogProductLink](#links.disablechannelcatalogproductlink)
  * override **required** [links.OverrideChannelCatalogProductValuesLink](#links.overridechannelcatalogproductvalueslink)
  * reenable [links.ReenableChannelCatalogProductLink](#links.reenablechannelcatalogproductlink)
  * self **required** [links.GetChannelCatalogProductInfoLink](#links.getchannelcatalogproductinfolink)

### channelCatalogProductInfoList
* channelCatalogProductInfoList `object`: The channel catalog product info list
  * links **required** [channelCatalogProductInfoListLinks](#channelcatalogproductinfolistlinks)
  * paginationResult **required** [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)
  * productInfos **required** `array`
    * items [channelCatalogProductInfo](#channelcatalogproductinfo)

### channelCatalogProductInfoListLinks
* channelCatalogProductInfoListLinks `object`
  * export [links.ExportChannelCatalogProductInfoListLink](#links.exportchannelcatalogproductinfolistlink)
  * self **required** [links.GetChannelCatalogProductInfoListLink](#links.getchannelcatalogproductinfolistlink)

### channelCatalogProductsCounters
* channelCatalogProductsCounters `object`: The channel catalog products counters. For each counter you will have a count.
  * disabledProductCountExcludingUncategorizedAndExcluded `integer`: Disabled product count EXCLUDING uncategorized products AND excluded products on existing products.
  * disabledProductCountIncludingUncategorizedAndExcluded `integer`: Disabled product count INCLUDING uncategorized products AND excluded products on existing products.
  * excludedProductCountExcludingUncategorized `integer`: Excluded product count EXCLUDING uncategorized products on existing products.
  * excludedProductCountIncludingUncategorized `integer`: Excluded product count INCLUDING uncategorized products on existing products.
  * existingProductCount `integer`: Imported product count currently in your catalog.
  * uncategorizedProductCount `integer`: Product count WITHOUT category mapped on existing products.

### channelCatalogState
* channelCatalogState `object`: Channel Catalog State
  * apiSettingsStatus [BeezUP.Common.ApiSettingsStatus](#beezup.common.apisettingsstatus)
  * categoryMappingState **required** [categoryMappingState](#categorymappingstate)
  * columnMappingStatus **required** [columnMappingStatus](#columnmappingstatus)
  * exportedProductCount **required** `integer`

### channelCategory
* channelCategory `object`: The channel category
  * channelCategoryChannelCode [channelCategoryChannelCode](#channelcategorychannelcode)
  * channelCategoryColumnOverrides [channelCategoryColumnOverrides](#channelcategorycolumnoverrides)
  * channelCategoryDefaultCost [channelCategoryDefaultCost](#channelcategorydefaultcost)
  * channelCategoryId **required** [BeezUP.Common.ChannelCategoryId](#beezup.common.channelcategoryid)
  * channelCategoryLevel **required** [channelCategoryLevel](#channelcategorylevel)
  * channelCategoryPath **required** [BeezUP.Common.ChannelCategoryPath](#beezup.common.channelcategorypath)

### channelCategoryChannelCode
* channelCategoryChannelCode `string`: The channel category channel code identifier

### channelCategoryColumnOverride
* channelCategoryColumnOverride `object`
  * channelColumnDescription [channelColumnDescription](#channelcolumndescription)
  * channelColumnId **required** [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)
  * channelColumnName **required** [BeezUP.Common.ChannelColumnName](#beezup.common.channelcolumnname)
  * configuration **required** [channelColumnConfiguration](#channelcolumnconfiguration)
  * restrictedValues [channelColumnRestrictedValues](#channelcolumnrestrictedvalues)
  * showInMapping **required** [channelColumnShowInMapping](#channelcolumnshowinmapping)

### channelCategoryColumnOverrides
* channelCategoryColumnOverrides `object`: The channel category column overrides

### channelCategoryDefaultCost
* channelCategoryDefaultCost `number`: The default cost on this channel category

### channelCategoryLevel
* channelCategoryLevel `integer`: The channel category level starting from 1

### channelCategorySettings
* channelCategorySettings `object`
  * mappingLeafRequired `boolean`: Indicates if the category mapping is required on category path leaf or not
  * mappingRequired `boolean`: Indicates if the category mapping is required, otherwise you can map the categories but it will not block the publication of your catalog

### channelColumn
* channelColumn `object`: The channel column
  * channelColumnDescription [channelColumnDescription](#channelcolumndescription)
  * channelColumnId **required** [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)
  * channelColumnName **required** [BeezUP.Common.ChannelColumnName](#beezup.common.channelcolumnname)
  * configuration **required** [channelColumnConfiguration](#channelcolumnconfiguration)
  * position **required** `integer`: The position of the column starting from 1
  * restrictedValues [channelColumnRestrictedValues](#channelcolumnrestrictedvalues)
  * showInMapping **required** [channelColumnShowInMapping](#channelcolumnshowinmapping)

### channelColumnConfiguration
* channelColumnConfiguration `object`: The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
  * beezUPColumnName [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)
  * columnDataType **required** [BeezUP.Common.ColumnDataType](#beezup.common.columndatatype)
  * columnImportance **required** [BeezUP.Common.ColumnImportance](#beezup.common.columnimportance)

### channelColumnDescription
* channelColumnDescription `string`: The channel column description

### channelColumnRestrictedValues
* channelColumnRestrictedValues `object`: The restricted values. The key will be the restricted value identifier (format:guid) and the value will be the restriced value

### channelColumnShowInMapping
* channelColumnShowInMapping `boolean`: Indicates if this column must shown in the mapping page or not

### channelCostSettings
* channelCostSettings `object`: Indicate the default configuration of the cost on this channel.
  * costType **required** [costType](#costtype)
  * globalCostValue `number`: In case of global cost type, you have to indicate the cost value.

### channelFirstLevelCategory
* channelFirstLevelCategory `object`: The first level category with his sub categories
  * channelCategoryChannelCode [channelCategoryChannelCode](#channelcategorychannelcode)
  * channelCategoryColumnOverrides [channelCategoryColumnOverrides](#channelcategorycolumnoverrides)
  * channelCategoryDefaultCost [channelCategoryDefaultCost](#channelcategorydefaultcost)
  * channelCategoryId **required** [BeezUP.Common.ChannelCategoryId](#beezup.common.channelcategoryid)
  * channelCategoryLevel **required** [channelCategoryLevel](#channelcategorylevel)
  * channelCategoryName **required** `string`: The channel category name
  * subCategories `array`
    * items [channelCategory](#channelcategory)

### channelHeader
* channelHeader `object`: The available channel
  * channelId **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * channelLogoUrl **required** [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * channelName **required** [BeezUP.Common.ChannelName](#beezup.common.channelname)
  * links **required** [channelHeaderLinks](#channelheaderlinks)
  * types **required** `array`: The type list related to a channel
    * items `string`

### channelHeaderLinks
* channelHeaderLinks `object`: The links related to an available channel
  * self [links.GetChannelInfoLink](#links.getchannelinfolink)

### channelInfo
* channelInfo `object`
  * homeUrl **required** `string`: The channel home url
  * logoUrl **required** `string`: The channel logo url
  * name **required** `string`: The channel name
  * sectors `array`: The sector list related to a channel
    * items `string`
  * types **required** `array`: The type list related to a channel
    * items `string`

### channelInfoList
* channelInfoList `object`
  * channels `array`
    * items [channelInfo](#channelinfo)
  * links `object`
    * self [links.GetChannelsLink](#links.getchannelslink)

### channelRootCategory
* channelRootCategory `object`: Get channel first level category list
  * firstLevelCategories **required** `array`
    * items [channelFirstLevelCategory](#channelfirstlevelcategory)

### city
* city `string`: Your address city

### clearMerchantOrderInfoListRequest
* clearMerchantOrderInfoListRequest `object`
  * orders **required** `array`
    * items [orderIdentifier](#orderidentifier)

### clickIncludedAndAdditionalClickPrice
* clickIncludedAndAdditionalClickPrice `object`
  * additionalClickPrice `number`: The additional click price
  * clickIncluded `integer`: The click included

### clickIncludedAndVariablePrice
* clickIncludedAndVariablePrice `object`
  * clickIncluded `integer`: Click included
  * variablePrice `number`: The pricing applied for this range

### columnConfiguration
* columnConfiguration `object`: Indicates the configuration applied on the column (catalog or custom) during the importation process.
  * beezUPColumnName [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)
  * canBeTruncated [canBeTruncated](#canbetruncated)
  * columnCultureName [columnCultureName](#columnculturename)
  * columnDataType **required** [BeezUP.Common.ColumnDataType](#beezup.common.columndatatype)
  * columnFormat [columnFormat](#columnformat)
  * columnImportance **required** [BeezUP.Common.ColumnImportance](#beezup.common.columnimportance)
  * displayGroupName [displayGroupName](#displaygroupname)

### columnCultureName
* columnCultureName `string`: If non null, culture used to parse the value to the storage type of this column\r\n will be used for parsing and for consolidation proces

### columnFormat
* columnFormat `string`: If non null, format used to parse the value to the storage type of this column\r\n will be used for parsing and for consolidation proces

### columnId
* columnId `string`: The catalog column identifier

### columnMappingStatus
* columnMappingStatus `string` (values: warning, success, failed)

### company
* company `string`: Your company name

### companyInfo
* companyInfo `object`
  * accountingEmails [accountingEmails](#accountingemails)
  * address **required** [address](#address)
  * city **required** [city](#city)
  * company **required** [company](#company)
  * countryIsoCodeAlpha3 **required** [BeezUP.Common.CountryIsoCodeAlpha3](#beezup.common.countryisocodealpha3)
  * postalCode **required** [postalCode](#postalcode)
  * vatNumber [vatNumber](#vatnumber)

### compareOptions
* compareOptions `string` (values: None, IgnoreCase, IgnoreNonSpace, IgnoreSymbols, OrdinalIgnoreCase, StringSort, Ordinal): Indicate how the product sku are compared for the duplication check.

### compressionFormatStrategy
* compressionFormatStrategy `string` (values: None, Zip, TarGz, Gzip, Bzip2, Rar): Indicate the compression type

### computeExpressionRequest
* computeExpressionRequest `object`: The request message to compute an expression based on the provided product values
  * encryptedExpression **required** [encryptedExpression](#encryptedexpression)
  * productValues **required** [productValues](#productvalues)

### configureAutoImportIntervalRequest
* configureAutoImportIntervalRequest `object`: The message request to configure the auto import interval
  * interval **required** `string`: Indicate the interval in time span. (i.e. "04:00:00" for every 4 hours)

### configureAutomaticTransitionRequest
* configureAutomaticTransitionRequest `object`
  * automaticTransitions **required** `array`
    * items [automaticTransition](#automatictransition)

### configureCatalogColumnCatalogRequest
* configureCatalogColumnCatalogRequest `object`: The request to configure a catalog column
  * catalogColumn **required** [catalogColumn](#catalogcolumn)

### configureCategoryRequest
* configureCategoryRequest `object`: The request message to make a mapping between catalog category path and a channel category path
  * channelCatalogCategories **required** `array`
    * items [channelCatalogCategoryConfiguration](#channelcatalogcategoryconfiguration)
  * overrideSubCategoryMappings **required** `boolean`: Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path

### contractBillingPeriodInfo
* contractBillingPeriodInfo `object`: Describe the billing period information related to the offer.
  * amountBillingPeriodDiscount `number`: The amount discounted related to the billing period
  * billingPeriodInMonth [billingPeriodInMonth](#billingperiodinmonth)
  * billingPeriodPercentDiscount `number`: The discount percent related to the billing period

### contractBonusInfo
* contractBonusInfo `object`: Describe the bonus information related to your current contract.
  * bonuses **required** `array`
    * items [bonusInfo](#bonusinfo)

### contractClickInfo
* contractClickInfo `object`: Describe the click information related to the offer.
  * additionalClickPrice `number`: The addition click price in the offer
  * clickIncluded `integer`: The click included in the offer
  * initialOfferClickIncluded `integer`: The click included in your current contract

### contractCommitmentInfo
* contractCommitmentInfo `object`: Describe the commitment information related to the offer.
  * commercialCreatorUserId `string`: The commercial that is responsible of the creation of your account
  * commercialUserId `string`: Your current commercial user id
  * commitmentCalculatedFinishDate `string`: The commitment end date related to the offer
  * commitmentPeriodInMonth `integer`: The commitment period in month related to the offer
  * contractType `integer`: Internal usage: Old offer type. Your contract type
  * couponOfferCode [couponOfferCode](#couponoffercode)
  * currentContractId `string`: Your current contract id
  * currentContractTerminationDate `string`: The current contract termination date
  * currentCustomerPaymentMethod [paymentMethod](#paymentmethod)
  * fixedAndVariableClickInfo [fixedAndVariableClickModelInfo](#fixedandvariableclickmodelinfo)
  * isCustomerWantsToTerminateHisContract `boolean`: If true, this means you want to leave us and that's sad... :'-(
  * isModelMustBeTransmittedInNewContract `boolean`: Internal usage: Old offer type. Is the current contract model needs to be converted into a new contract type
  * minBillingPeriodInMonths `integer`: The minimum billing period in month authorized for this offer.
  * model `string`: Interal usage: Old offer type. The model description
  * newContractStartDate `string`: The start date related to the offer
  * offerId [offerId](#offerid)
  * offerName `string`: The offer Name
  * paymentDelayInDays `integer`: The payment delay in days related to the offer
  * paymentMethodAuthorized [paymentMethod](#paymentmethod)
  * requestedPaymentMethod [paymentMethod](#paymentmethod)
  * trialPeriodFinishDate `string`: The trial period end date related to the offer
  * trialPeriodInMonth `integer`: The trial period in month related to the offer
  * variableModelInfo [variableModelInfo](#variablemodelinfo)

### contractDiscountInfo
* contractDiscountInfo `object`: Describe the discount information related to the offer.
  * amountCodePromoDiscount `number`: The discount amount
  * amountCodePromoDiscountPerMonth `number`: The amount discounted per month
  * couponDiscountCode `string`: The discount code
  * couponDiscountId `integer`: Internal use: The discount id
  * customerHasActualDiscount `boolean`: Do you have currently a discount on your contract ?
  * discountDurationInMonth `integer`: Duration of the discount in month
  * isCouponDiscountLinkedToCouponOffer `boolean`: Is this discount is related to a coupon offer
  * percentDiscount `number`: Percentage of the discount
  * promotionalCodeValidity [promotionalCodeValidity](#promotionalcodevalidity)

### contractId
* contractId `string`: Your contract identifier

### contractInfo
* contractInfo `object`: Describe the conditions of a contract
  * additionalClickPrice `number`: Additional click price
  * billingPeriodInMonth `integer`: The billing period in month
  * billingPeriodPercentDiscount `number`: The percent discount related to the billing period
  * clickIncluded `integer`: The click included
  * commitmentCalculatedFinishUtcDate `string`: The calculated end date of commitment
  * commitmentPeriodInMonth `integer`: The commitment period in month
  * contractId [contractId](#contractid)
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * discountDurationInMonth `integer`: The discount duration in month
  * discountEndUtcDate `string`: The end of your discount
  * fixedAndVariableClickInfo [fixedAndVariableClickModelInfo](#fixedandvariableclickmodelinfo)
  * fixedPrice `number`: The fixed price of your contract
  * ipUserCreation `string`: The IP of the user who creates the contract
  * ipUserModification `string`: The IP of the user who modified the contract
  * isCommitmentRenewalAutomatically `boolean`: Is commitment is automatically renewed
  * isModifiableContract `boolean`: Is the contract is modifiable ?
  * offerId [offerId](#offerid)
  * offerName `string`: The offer name based on /offers
  * percentDiscount `number`: The percent of the discount
  * startUtcDate `string`: The start date of your contract
  * storeCount [storeCount](#storecount)
  * trialPeriodInMonth `integer`: The trial period in month
  * variableModelInfo [variableModelInfo](#variablemodelinfo)

### contractMoneyInfo
* contractMoneyInfo `object`: Describe the pricing information related to the offer.
  * amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount `number`: The amount excluding taxes and excluding code promo discount including billing period discount.
  * amountExcludingTaxesAndExcludingDiscounts `number`: The amount excluding taxes and excluding discounts.
  * amountExcludingTaxesIncludingDiscounts `number`: The amount excluding taxes including discounts.
  * amountExcludingTaxesIncludingDiscountsPerMonth `number`: The amount excluding taxes including discounts per month.
  * amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount `number`: The amount including taxes excluding discount including billing period discount.
  * amountIncludingTaxesIncludingDiscounts `number`: The amount including taxes including discounts.
  * amountTaxesExcludingDiscountIncludingBillingPeriodDiscount `number`: The taxes excluding discount including billing period discount.
  * amountTaxesIncludingDiscounts `number`: Taxes including discounts.
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * initialOfferFixedPrice `number`: The initial offer fixed price.
  * vatPercent `number`: The VAT percent.

### contractStoreInfo
* contractStoreInfo `object`: Describe the store information related to the offer.
  * additionalStorePrice `number`: The additional store price.
  * maxStoreCount `integer`: The maximum store count related to the offer.
  * minStoreCount `integer`: The minimum store count related to the offer.
  * ownedStoreCount `integer`: The owned store count.
  * storeCount [storeCount](#storecount)
  * storeIncluded `integer`: The store count included in the offer.

### contractTerminationReason
* contractTerminationReason `string`: The termination reason, if your current contract is scheduled to be terminated.

### contractTerminationReasonType
* contractTerminationReasonType `integer`: The contract termination reason type identifier, if your current contract is scheduled to be terminated. The value is based on the list of values /user/lov/ContractTerminationReason

### contracts
* contracts `object`
  * current [currentContractInfo](#currentcontractinfo)
  * links **required** [contractsLinks](#contractslinks)
  * next [nextContractInfo](#nextcontractinfo)

### contractsLinks
* contractsLinks `object`
  * create [links.createContractLink](#links.createcontractlink)
  * self [links.getContractsLink](#links.getcontractslink)

### copyOptimisationRequest
* copyOptimisationRequest `object`: Copy the optimisation between 2 channels
  * channelIdSource **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * channelIdTarget **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * keepExistingOptimisation **required** `boolean`: If true the existing optimisation will be kept

### costSettings
* costSettings `object`: If this property is not indicated please force the user to configure the cost settings.
  * costType **required** [costType](#costtype)
  * globalCostValue `number`: In case of global cost type, you have to indicate the cost value.

### costStatus
* costStatus `string` (values: required, optional, notConfigurable)

### costType
* costType `string` (values: CPC_Global, CPA_Global, CPC_ByCategory, CPA_ByCategory, Fixed_Global): CPC means cost per click.

### couponDiscountCode
* couponDiscountCode `string`: The coupon discount code

### couponOfferCode
* couponOfferCode `string`: Your special coupon offer identifier

### createContract
* createContract
  * billingPeriodInMonth **required** [billingPeriodInMonth](#billingperiodinmonth)
  * couponDiscountCode [couponDiscountCode](#coupondiscountcode)
  * couponOfferCode [couponOfferCode](#couponoffercode)
  * offerId **required** [offerId](#offerid)
  * storeCount **required** [storeCount](#storecount)

### createContractResponse
* createContractResponse `object`
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * links [createContractResponseLinks](#createcontractresponselinks)

### createContractResponseLinks
* createContractResponseLinks `object`
  * contracts [links.getContractsLink](#links.getcontractslink)
  * self [links.createContractLink](#links.createcontractlink)

### createCustomColumnRequest
* createCustomColumnRequest `object`: The request message to create a custom column
  * displayGroupName **required** [displayGroupName](#displaygroupname)
  * encryptedBlocklyExpression **required** [encryptedBlocklyExpression](#encryptedblocklyexpression)
  * encryptedExpression **required** [encryptedExpression](#encryptedexpression)
  * userColumnName **required** [userColumName](#usercolumname)

### createRuleRequest
* createRuleRequest `object`
  * endUtcDate `string`: The end validity utc date of the rule
  * optimisationActionName **required** [optimisationActionName](#optimisationactionname)
  * reportFilterId **required** `string`: The report filter to use for the rule
  * ruleName **required** `string`: The name of the rule
  * startUtcDate `string`: The start validity utc date of the rule

### createStoreRequest
* createStoreRequest `object`: The request to create a store. The store identifier is optional, if null it will be automatically computed.
  * countryIsoCodeAlpha3 **required** [storeCountryIsoCodeAlpha3](#storecountryisocodealpha3)
  * id [BeezUP.Common.StoreId](#beezup.common.storeid)
  * name **required** [storeName](#storename)
  * sectors **required** [storeSectors](#storesectors)
  * url **required** [storeUrl](#storeurl)

### credential
* credential `object`: Provides the credentials
  * password `string`: The password
  * userName **required** `string`: The user name

### creditCardInfo
* creditCardInfo `object`
  * cardNumber **required** [cardNumber](#cardnumber)
  * cardVerificationCode **required** [cardVerificationCode](#cardverificationcode)
  * expirationMonth **required** [expirationMonth](#expirationmonth)
  * expirationYear **required** [expirationYear](#expirationyear)

### creditCardInfoResponse
* creditCardInfoResponse `object`
  * creditCardInfo [creditCardInfoWithCardType](#creditcardinfowithcardtype)
  * currentPaymentMethod **required** [paymentMethod](#paymentmethod)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * links **required** [creditCardInfoResponseLinks](#creditcardinforesponselinks)

### creditCardInfoResponseLinks
* creditCardInfoResponseLinks `object`: The different actions you can make on this offer
  * saveCreditCardInfo **required** [links.saveCreditCardInfoLink](#links.savecreditcardinfolink)
  * self **required** [links.getCreditCardInfoLink](#links.getcreditcardinfolink)

### creditCardInfoWithCardType
* creditCardInfoWithCardType `object`
  * cardNumber **required** [cardNumber](#cardnumber)
  * cardType **required** `string`: Your credit card type. Example: VISA, MasterCard, etc...
  * expirationMonth **required** [expirationMonth](#expirationmonth)
  * expirationYear **required** [expirationYear](#expirationyear)

### currentContractInfo
* currentContractInfo
  * additionalClickPrice `number`: Additional click price
  * billingPeriodInMonth `integer`: The billing period in month
  * billingPeriodPercentDiscount `number`: The percent discount related to the billing period
  * clickIncluded `integer`: The click included
  * commitmentCalculatedFinishUtcDate `string`: The calculated end date of commitment
  * commitmentPeriodInMonth `integer`: The commitment period in month
  * contractId [contractId](#contractid)
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * discountDurationInMonth `integer`: The discount duration in month
  * discountEndUtcDate `string`: The end of your discount
  * fixedAndVariableClickInfo [fixedAndVariableClickModelInfo](#fixedandvariableclickmodelinfo)
  * fixedPrice `number`: The fixed price of your contract
  * ipUserCreation `string`: The IP of the user who creates the contract
  * ipUserModification `string`: The IP of the user who modified the contract
  * isCommitmentRenewalAutomatically `boolean`: Is commitment is automatically renewed
  * isModifiableContract `boolean`: Is the contract is modifiable ?
  * offerId [offerId](#offerid)
  * offerName `string`: The offer name based on /offers
  * percentDiscount `number`: The percent of the discount
  * startUtcDate `string`: The start date of your contract
  * storeCount [storeCount](#storecount)
  * trialPeriodInMonth `integer`: The trial period in month
  * variableModelInfo [variableModelInfo](#variablemodelinfo)
  * links **required** [currentContractInfoLinks](#currentcontractinfolinks)

### currentContractInfoLinks
* currentContractInfoLinks `object`
  * disable [links.terminateCurrentContractLink](#links.terminatecurrentcontractlink)
  * reenable [links.reactivateCurrentContractLink](#links.reactivatecurrentcontractlink)

### customColumn
* customColumn `object`: The custom column configuration
  * configuration **required** [columnConfiguration](#columnconfiguration)
  * id **required** [columnId](#columnid)
  * links **required** [customColumnLinks](#customcolumnlinks)
  * userColumName **required** [userColumName](#usercolumname)

### customColumnLinks
* customColumnLinks `object`
  * delete **required** [links.Catalog_DeleteCustomColumnLink](#links.catalog_deletecustomcolumnlink)
  * expression **required** [links.Catalog_GetCustomColumnExpressionLink](#links.catalog_getcustomcolumnexpressionlink)
  * rename **required** [links.Catalog_ChangeCustomColumnUserNameLink](#links.catalog_changecustomcolumnusernamelink)
  * save **required** [links.Catalog_SaveCustomColumnLink](#links.catalog_savecustomcolumnlink)
  * saveExpression **required** [links.Catalog_ChangeCustomColumnExpressionLink](#links.catalog_changecustomcolumnexpressionlink)

### customColumnList
* customColumnList `object`
  * customColumns **required** `array`
    * items [customColumn](#customcolumn)
  * links **required** [customColumnListLinks](#customcolumnlistlinks)

### customColumnListLinks
* customColumnListLinks `object`
  * add [links.Catalog_SaveCustomColumnLink](#links.catalog_savecustomcolumnlink)
  * self **required** [links.Catalog_GetCustomColumnsLink](#links.catalog_getcustomcolumnslink)

### customerIndex
* customerIndex `object`: The index of the customer API
  * links **required** [customerIndexLinks](#customerindexlinks)
  * lovLinks **required** [customerIndexLovLinks](#customerindexlovlinks)

### customerIndexLinks
* customerIndexLinks `object`: Gives you want you can do on this API
  * accountInfo **required** [links.getUserAccountInfoLink](#links.getuseraccountinfolink)
  * billingPeriods **required** [links.getBillingPeriodsLink](#links.getbillingperiodslink)
  * contracts [links.getContractsLink](#links.getcontractslink)
  * friendInfo **required** [links.getFriendInfoLink](#links.getfriendinfolink)
  * getOffer [links.getOfferLink](#links.getofferlink)
  * invoices [links.getInvoicesLink](#links.getinvoiceslink)
  * logout [links.logoutLink](#links.logoutlink)
  * self **required** [links.GetCustomerIndexLink](#links.getcustomerindexlink)
  * standardOffers **required** [links.getStandardOffersLink](#links.getstandardofferslink)
  * stores [links.getStoresLink](#links.getstoreslink)

### customerIndexLovLinks
* customerIndexLovLinks `object`
  * activeOfferLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * beezUPTimeZoneLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * contractTerminationReasonLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * countryLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * customerStatusLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * invoicePaymentStatusLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * offerLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * storeCountryLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * storeSectorLov [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### dateSearchType
* dateSearchType `string` (values: Purchase, Modification, MarketPlaceModification): Indicates on which date you want to make the filter

### detectedCatalogColumn
* detectedCatalogColumn
  * catalogColumnName **required** [catalogColumnName](#catalogcolumnname)
  * configuration **required** [columnConfiguration](#columnconfiguration)
  * duplicateProductValueConfiguration [duplicateProductValueConfiguration](#duplicateproductvalueconfiguration)
  * id **required** [columnId](#columnid)
  * ignored `boolean`: IF true, the product values of this column will be not taken in account during the importation process
  * links **required** [catalogColumnLinks](#catalogcolumnlinks)
  * userColumName **required** [userColumName](#usercolumname)
  * links **required** [detectedCatalogColumnLinks](#detectedcatalogcolumnlinks)

### detectedCatalogColumnLinks
* detectedCatalogColumnLinks `object`
  * configure [links.Importation_ConfigureCatalogColumnLink](#links.importation_configurecatalogcolumnlink)
  * ignore [links.Importation_IgnoreColumnLink](#links.importation_ignorecolumnlink)
  * map [links.Importation_MapCatalogColumnLink](#links.importation_mapcatalogcolumnlink)
  * reattend [links.Importation_ReattendColumnLink](#links.importation_reattendcolumnlink)
  * unmap [links.Importation_UnmapCatalogColumnLink](#links.importation_unmapcatalogcolumnlink)

### detectedCatalogColumnList
* detectedCatalogColumnList `object`: The list of detected catalog column
  * detectedCatalogColumns `array`: Contains all deteted catalog columns
    * items [detectedCatalogColumn](#detectedcatalogcolumn)
  * links **required** [detectedCatalogColumnListLinks](#detectedcatalogcolumnlistlinks)

### detectedCatalogColumnListLinks
* detectedCatalogColumnListLinks `object`
  * self **required** [links.Importation_GetDetectedCatalogColumnsLink](#links.importation_getdetectedcatalogcolumnslink)

### displayGroupName
* displayGroupName `string`: Indicate the display group name where the column must be putted

### downloadCatalogStrategy
* downloadCatalogStrategy `string` (values: SimpleUri, FtpLatest, Sftp, SftpLatest, Ftps, FtpsLatest, Local): Indicate the download strategy (simple uri, ftps, ftplatest file, etc...)

### duplicateProductValueConfiguration
* duplicateProductValueConfiguration `object`: Describe how you want to manage the duplication of the product value
  * compareOptions **required** [compareOptions](#compareoptions)
  * strategy **required** [duplicateProductValueStrategy](#duplicateproductvaluestrategy)

### duplicateProductValueStrategy
* duplicateProductValueStrategy `string` (values: None, SkipAllDuplicateProducts, KeepFirstDuplicateProductOnly, FailImportationIfAnyDuplicateProduct): Indicate the duplicate product sku strategy.

### encryptedBlocklyExpression
* encryptedBlocklyExpression `string`: The encrypted XML Blockly representation of the expression

### encryptedExpression
* encryptedExpression `string`: The encrypted excel expression of the column

### errorResponseMessagePaymentRequired
* errorResponseMessagePaymentRequired
  * errors **required** `array`
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)
  * links **required** [errorResponseMessagePaymentRequiredLinks](#errorresponsemessagepaymentrequiredlinks)

### errorResponseMessagePaymentRequiredLinks
* errorResponseMessagePaymentRequiredLinks `object`
  * offer **required** [links.getOfferLink](#links.getofferlink)

### etag
* etag `string`: ETag value to identify the order.\

### exclusionFilter
* exclusionFilter `object`: The exclusion filter
  * channelColumnId **required** [BeezUP.Common.ChannelColumnId](#beezup.common.channelcolumnid)
  * enabled **required** `boolean`: indicates if the filter is currently enable.
  * groupId **required** `string`: Indicate the filter's group. All filters in the same group means an "AND" operation in the filter group
  * name **required** [exclusionFilterName](#exclusionfiltername)
  * operatorName **required** [exclusionFilterOperatorName](#exclusionfilteroperatorname)
  * position **required** `integer`: The position of the exclusion filter
  * positionInGroup **required** `integer`: Indicate the filter group position. This information is used for the UI purpose and must be unique in the filter group.
  * value `string`: The value indicate by the user when the filter operation requires it.

### exclusionFilterName
* exclusionFilterName `string`: The exclusion filter name

### exclusionFilterOperator
* exclusionFilterOperator `object`: The exclusion filter operator
  * expectedChannelColumnDataType [exclusionFilterOperatorDataType](#exclusionfilteroperatordatatype)
  * expectedValueDataType [exclusionFilterOperatorDataType](#exclusionfilteroperatordatatype)
  * name [exclusionFilterOperatorName](#exclusionfilteroperatorname)
  * valueRequired `boolean`: This operator requires a value

### exclusionFilterOperatorDataType
* exclusionFilterOperatorDataType `string` (values: string, number): Data type of the operator

### exclusionFilterOperatorName
* exclusionFilterOperatorName `string`: The exclusion filter operator name

### exclusionFilters
* exclusionFilters `array`: The exclusion filter list
  * items [exclusionFilter](#exclusionfilter)

### exclusionFiltersResponse
* exclusionFiltersResponse `object`
  * exclusionFilters [exclusionFilters](#exclusionfilters)
  * links **required** [exclusionFiltersResponseLinks](#exclusionfiltersresponselinks)

### exclusionFiltersResponseLinks
* exclusionFiltersResponseLinks `object`
  * configure [links.ConfigureChannelCatalogExclusionFiltersLink](#links.configurechannelcatalogexclusionfilterslink)
  * self **required** [links.GetChannelCatalogExclusionFiltersLink](#links.getchannelcatalogexclusionfilterslink)

### executionId
* executionId `string`: The execution identifier of the catalog importation

### executionUUID
* executionUUID `string`: The execution identifier

### expirationMonth
* expirationMonth `integer`: Expiration Month

### expirationYear
* expirationYear `integer`: Expiration Year

### exportOrderListFormat
* exportOrderListFormat `string` (values: csv): The type of the file to export

### exportOrderListRequest
* exportOrderListRequest `object`: The message request to export order list. The store identifier is requested to regroup the exportations.
  * format [exportOrderListFormat](#exportorderlistformat)
  * orderListRequestWithoutPagination **required** [orderListRequestWithoutPagination](#orderlistrequestwithoutpagination)
  * storeId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)

### externalLinks.Catalog_GetBeezUPColumnsLink
* externalLinks.Catalog_GetBeezUPColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### externalLinks.GetChannelCatalogMarketplaceSettingsLink
* externalLinks.GetChannelCatalogMarketplaceSettingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### externalLinks.GetChannelInfoLink
* externalLinks.GetChannelInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### externalLinks.GetExternalConfigurationPageLink
* externalLinks.GetExternalConfigurationPageLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### feedType
* feedType `string` (values: Products, Inventory, Pricing, Images, Relationships, Unpublish, Offers): The Feed Type

### fileFormatStrategy
* fileFormatStrategy `string` (values: Unknown, Csv, Xml, Json): CSV or XML

### firstName
* firstName `string`: Your first name

### fixedAndVariableClickModelInfo
* fixedAndVariableClickModelInfo `object`: Internal usage: Old offer type. Describe the fix and variable model information
  * clickIncludedAndAdditionalClickPrices **required** `array`
    * items [clickIncludedAndAdditionalClickPrice](#clickincludedandadditionalclickprice)

### friendCountryIsoCodeAlpha3
* friendCountryIsoCodeAlpha3 `string`: Your friend's user country iso code alpha 3

### friendEmail
* friendEmail `string`: Your friend's user email

### friendProfilePictureUrl
* friendProfilePictureUrl `string`: Your friend's user profile picture url

### functionality
* functionality `object`
  * code **required** `string`: The functionality code
  * order **required** `integer`: UI purpose: Indicate the position of the functionality

### functionalityRightInfo
* functionalityRightInfo `object`: Describe the rights for a functionality
  * functionalityCode **required** `string`: The functionality code
  * maxValueInterger `integer`: The max value for this functionality code considering your rights
  * unlimited `boolean`: If you can use this functionality unlimitedly

### generalSettings
* generalSettings `object`: Represents the general settings of your channel catalog
  * acceptToPublishInfo **required** `boolean`: If true then you authorize disclosure of my statistics generated from clicks and sales
  * activeBeezUPTracking **required** `boolean`: Activate BeezUP tracking for my statistics (checked by default)
  * doNotExportOutOfStockProducts **required** `boolean`: Do not export "out of stock" products. Note: this option is not taken into account by the counter.

### getChannelCatalogProductInfoListRequest
* getChannelCatalogProductInfoListRequest `object`
  * catalogCategoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelCategoryFilter [BeezUP.Common.ChannelCategoryFilter](#beezup.common.channelcategoryfilter)
  * criteria **required** [productSetVisibilityCriteria](#productsetvisibilitycriteria)
  * overridden `boolean`: Search overridden products. If null the filter will not be taken in account.
  * pageNumber **required** `integer`
  * pageSize **required** `integer`
  * productFilters [BeezUP.Common.ProductFilters](#beezup.common.productfilters)

### getProductsRequest
* getProductsRequest `object`: The request message to get products based on these filters
  * categoryPath [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)
  * columnIdList **required** `array`
    * items [BeezUP.Common.CatalogColumnId](#beezup.common.catalogcolumnid)
  * exists `boolean`: Search for existing products or not. If null you will received both.
  * orderbyCatalogColumnId [BeezUP.Common.CatalogColumnId](#beezup.common.catalogcolumnid)
  * pageNumber **required** [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize **required** [BeezUP.Common.PageSize](#beezup.common.pagesize)
  * productIdList `array`: Filter with a list of product identifier
    * items [BeezUP.Common.ProductId](#beezup.common.productid)
  * sku `string`: Search for products containing this SKU (merchant product dentifier).
  * title `string`: Search for products containing this title
  * withoutSubCategories `boolean`: Do not retrieve sub categories. By default, this value is set to false

### globalPerformanceIndicatorByChannel
* globalPerformanceIndicatorByChannel `object`
  * channel **required** [BeezUP.Common.ChannelBasicInfo](#beezup.common.channelbasicinfo)
  * globalPerformanceIndicator **required** `number`: Indicates the global performance indicator for this channel

### gravatarProfilePictureUrl
* gravatarProfilePictureUrl `string`: Indicate the url of your picture profil based on gravatar

### harvestOrderReporting
* harvestOrderReporting `object`: The reporting related to a harvest order operation
  * beezUPForcedStatus `string`: The marketplace order status forced by BeezUP during the order change oepration. This could happend when there is no status on the marketplace side.
  * beezUPStatus [beezUPOrderStatus](#beezuporderstatus)
  * creationUtcDate `string`: The creation UTC date of the execution
  * errorMessage `string`: The warning message during the execution
  * executionUUID [executionUUID](#executionuuid)
  * lastUpdateUtcDate `string`: The last update UTC date of the execution
  * marketplaceStatus `string`: The order marketplace status
  * processingStatus `string`: The processing status of the execution
  * warningMessage `string`: The warning message during the execution

### importAlreadyInProgressResponse
* importAlreadyInProgressResponse `object`
  * errors **required** `array`: The error message list
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)
  * links **required** [importAlreadyInProgressResponseLinks](#importalreadyinprogressresponselinks)

### importAlreadyInProgressResponseLinks
* importAlreadyInProgressResponseLinks `object`: The action links
  * cancelCurrentImportation **required** [links.Importation_CancelLink](#links.importation_cancellink)
  * currentImportation **required** [links.Importation_GetImportationMonitoringLink](#links.importation_getimportationmonitoringlink)

### importationCustomColumn
* importationCustomColumn `object`: The custom column configuration
  * configuration **required** [columnConfiguration](#columnconfiguration)
  * id **required** [columnId](#columnid)
  * links **required** [importationCustomColumnLinks](#importationcustomcolumnlinks)
  * userColumName **required** [userColumName](#usercolumname)

### importationCustomColumnLinks
* importationCustomColumnLinks `object`
  * delete **required** [links.Catalog_DeleteCustomColumnLink](#links.catalog_deletecustomcolumnlink)
  * expression **required** [links.Catalog_GetCustomColumnExpressionLink](#links.catalog_getcustomcolumnexpressionlink)
  * map [links.Importation_MapCustomColumnLink](#links.importation_mapcustomcolumnlink)
  * productSampleValue [links.Importation_GetProductSampleCustomColumnValueLink](#links.importation_getproductsamplecustomcolumnvaluelink)
  * save **required** [links.Importation_SaveCustomColumnLink](#links.importation_savecustomcolumnlink)
  * unmap [links.Importation_UnmapCustomColumnLink](#links.importation_unmapcustomcolumnlink)

### importationCustomColumnList
* importationCustomColumnList `object`
  * customColumns **required** `array`
    * items [importationCustomColumn](#importationcustomcolumn)
  * links **required** [customColumnListLinks](#customcolumnlistlinks)

### importationCustomColumnListLinks
* importationCustomColumnListLinks `object`
  * add [links.Importation_SaveCustomColumnLink](#links.importation_savecustomcolumnlink)
  * self **required** [links.Importation_GetCustomColumnsLink](#links.importation_getcustomcolumnslink)

### importationMonitoring
* importationMonitoring `object`: Describe the reporting of the catalog importation
  * beginUtcDate **required** `string`: The start date of the importation
  * errors `array`: In case of error a description will be indicated
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)
  * executionId **required** [executionId](#executionid)
  * lastUpdateUtcDate **required** `string`: The last update of the reporting
  * links [importationMonitoringLinks](#importationmonitoringlinks)
  * steps **required** `object`: Contains all steps of the importation process with a boolean. If true the step has been passed, false the step is not complete
  * success **required** `boolean`: Indicates if the importation was successfully completed or not
  * userId [BeezUP.Common.UserId](#beezup.common.userid)

### importationMonitoringLinks
* importationMonitoringLinks `object`: Applicable operations considering the state of the importation
  * activateAutoImport [links.Importation_ActivateAutoImportLink](#links.importation_activateautoimportlink)
  * cancel [links.Importation_CancelLink](#links.importation_cancellink)
  * catalogColumns [links.Importation_GetDetectedCatalogColumnsLink](#links.importation_getdetectedcatalogcolumnslink)
  * commit [links.Importation_CommitLink](#links.importation_commitlink)
  * commitColumns [links.Importation_CommitColumnsLink](#links.importation_commitcolumnslink)
  * configureRemainingCatalogColumns [links.Importation_ConfigureRemainingCatalogColumnsLink](#links.importation_configureremainingcatalogcolumnslink)
  * customColumns [links.Importation_GetCustomColumnsLink](#links.importation_getcustomcolumnslink)
  * productSamples [links.Importation_GetProductSampleLink](#links.importation_getproductsamplelink)
  * self **required** [links.Importation_GetImportationMonitoringLink](#links.importation_getimportationmonitoringlink)
  * technicalProgression **required** [links.Importation_TechnicalProgressionLink](#links.importation_technicalprogressionlink)

### importationReporting
* importationReporting `object`: The catalog importation reporting
  * autoImported `boolean`: Indicate if this importation is an auto import or not.
  * beginUtcDate **required** `string`: Indicate the begin UTC date of this importation.
  * endUtcDate `string`: Indicate the end UTC date of this importation.
  * errors `array`: Indicate the error message list related to this importation.
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)
  * inputConfigurationUrl `string`: Indicate the input url of this importation.
  * lastUpdateUtcDate **required** `string`: Indicate the last update UTC date of the reporting.
  * stepName `string`: The last step name of the importation process
  * steps **required** `object`: Indicate the steps that have been passed during the importation process
  * success `boolean`: Indicate if the importation succeed or not.
  * totalProductCount `integer`: Indicate the total product count detected in the catalog during the importation.
  * totalProductErrorCount `integer`: Indicate the total product count in error detected in the catalog during the importation.
  * totalProductSuccessCount `integer`: Indicate the total product count in success in the catalog during the importation.
  * userId [BeezUP.Common.UserId](#beezup.common.userid)

### importationTechnicalProgression
* importationTechnicalProgression `object`
  * stepsProgression `object`: Indicate for each step of the importation the uris to look at

### importationsResponse
* importationsResponse `object`
  * importations `array`
    * items [importationReporting](#importationreporting)
  * links [importationsResponseLinks](#importationsresponselinks)

### importationsResponseLinks
* importationsResponseLinks `object`
  * self [links.Importation_GetReportingsLink](#links.importation_getreportingslink)
  * start [links.Importation_StartManualUpdateLink](#links.importation_startmanualupdatelink)

### initialsProfilePictureUrl
* initialsProfilePictureUrl `string`: Indicate the url of your picture profil based on your initials

### inputConfiguration
* inputConfiguration `object`: Describe the input configuration
  * files **required** `array`: The list of files to get and read
    * items [inputFileConfiguration](#inputfileconfiguration)
  * transformFileUrl `string`: Can be null. Use to transform multiple files with an XSLT file.

### inputFileConfiguration
* inputFileConfiguration `object`: Describe how to get and read a file
  * fetch **required** [inputFileFetchConfiguration](#inputfilefetchconfiguration)
  * fileNumber **required** `integer`: The file number starting by 1
  * read **required** [inputFileReadConfiguration](#inputfilereadconfiguration)

### inputFileFetchConfiguration
* inputFileFetchConfiguration `object`: Describe the way to download the file
  * compressedRelativePath `string`: Indicate the relative path in the compressed file
  * compressionFormatStrategy [compressionFormatStrategy](#compressionformatstrategy)
  * credential [credential](#credential)
  * downloadCatalogStrategy **required** [downloadCatalogStrategy](#downloadcatalogstrategy)
  * downloadTimeout `integer`: Indicate the download time out in second
  * uri **required** `string`: Indicate the Uri of the file. (http, https, ftp, ftps, sftp are allowed)

### inputFileReadConfiguration
* inputFileReadConfiguration `object`: Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
  * csvFileReadProperties [inputFileReadCsvConfiguration](#inputfilereadcsvconfiguration)
  * cultureName `string`: The culture name of the file.  (i.e. fr-FR). If null then Invariant culture will be used.
  * encodingTypeName `string`: The encoding type. UTF-8 by default.
  * format **required** [fileFormatStrategy](#fileformatstrategy)
  * xmlFileReadProperties [inputFileReadXmlConfiguration](#inputfilereadxmlconfiguration)

### inputFileReadCsvConfiguration
* inputFileReadCsvConfiguration `object`: The CSV file description
  * csvSeparator **required** `string`: Indicate the separator of the values in the CSV file. Generally ";"
  * csvTextQualifier `string`: Indicate the text qualifier of the CSV file. Generally the value is "
  * hasHeaderRecord **required** `boolean`: Indicate if the csv file contains the column name at the first row
  * ignoreHeaderRecord **required** `boolean`: Indicate if the importation should not use the csv column name from the file

### inputFileReadXmlConfiguration
* inputFileReadXmlConfiguration `object`: The XML file description
  * flattenXmlChildElements **required** `boolean`: Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.
  * useXmlAttributes **required** `boolean`: Indicate if the importation should take in account the attribute in the xml nodes.

### invoice
* invoice `object`
  * amount **required** `number`: The amount of your invoice
  * amountToBePaid **required** `number`: The remaining amount to be paid for this invoice
  * contractId **required** [contractId](#contractid)
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * dueDate **required** `string`
  * invoiceDate **required** `string`: The invoice date
  * invoiceNumber **required** [invoiceNumber](#invoicenumber)
  * invoiceUrl `string`: The url of the invoice document
  * paymentStatus **required** [invoicePaymentStatus](#invoicepaymentstatus)

### invoiceList
* invoiceList `object`
  * invoices **required** `array`
    * items [invoice](#invoice)
  * links **required** [invoiceListLinks](#invoicelistlinks)

### invoiceListLinks
* invoiceListLinks `object`
  * self **required** [links.getInvoicesLink](#links.getinvoiceslink)

### invoiceNumber
* invoiceNumber `string`: Your invoice number

### invoicePaymentStatus
* invoicePaymentStatus `string` (values: Paid, NotPaid, PartiallyPaid, Loss): The payment status

### lastManualImportInputConfiguration
* lastManualImportInputConfiguration `object`: Last manual import input configuration
  * input **required** [inputConfiguration](#inputconfiguration)

### lastName
* lastName `string`: Your last name

### linkClickToOrderType
* linkClickToOrderType `string` (values: OnPurchaseDate, OnClickDate)

### links.AddChannelCatalogLink
* links.AddChannelCatalogLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.AnalyticsIndexLink
* links.AnalyticsIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_ConfigureAutoImportIntervalLink
* links.Auto_ConfigureAutoImportIntervalLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_GetAutoImportConfigurationLink
* links.Auto_GetAutoImportConfigurationLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_PauseAutoImportLink
* links.Auto_PauseAutoImportLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_ResumeAutoImportLink
* links.Auto_ResumeAutoImportLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_ScheduleAutoImportLink
* links.Auto_ScheduleAutoImportLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Auto_StartAutoImportLink
* links.Auto_StartAutoImportLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.CatalogIndexLink
* links.CatalogIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.CatalogStoreIndexLink
* links.CatalogStoreIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_ChangeCatalogColumnUserNameLink
* links.Catalog_ChangeCatalogColumnUserNameLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_ChangeCustomColumnExpressionLink
* links.Catalog_ChangeCustomColumnExpressionLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_ChangeCustomColumnUserNameLink
* links.Catalog_ChangeCustomColumnUserNameLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_ComputeExpressionLink
* links.Catalog_ComputeExpressionLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_DeleteCustomColumnLink
* links.Catalog_DeleteCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetBeezUPColumnsLink
* links.Catalog_GetBeezUPColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetCatalogColumnsLink
* links.Catalog_GetCatalogColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetCategoriesLink
* links.Catalog_GetCategoriesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetCustomColumnExpressionLink
* links.Catalog_GetCustomColumnExpressionLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetCustomColumnsLink
* links.Catalog_GetCustomColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetProductsLink
* links.Catalog_GetProductsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_GetRandomProductsLink
* links.Catalog_GetRandomProductsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Catalog_SaveCustomColumnLink
* links.Catalog_SaveCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ChangeOrderLink
* links.ChangeOrderLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not
  * rel `string`: Indicate the relation name related to the link

### links.ClearChannelCatalogExportationCacheLink
* links.ClearChannelCatalogExportationCacheLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ClearMerchantOrderInfoLink
* links.ClearMerchantOrderInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ClearMerchantOrderInfoListLink
* links.ClearMerchantOrderInfoListLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureAutomaticTransitionsLink
* links.ConfigureAutomaticTransitionsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogCategoryLink
* links.ConfigureChannelCatalogCategoryLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogColumnMappingsLink
* links.ConfigureChannelCatalogColumnMappingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogCostSettingsLink
* links.ConfigureChannelCatalogCostSettingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogExclusionFiltersCopyLink
* links.ConfigureChannelCatalogExclusionFiltersCopyLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogExclusionFiltersLink
* links.ConfigureChannelCatalogExclusionFiltersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogGeneralSettingsLink
* links.ConfigureChannelCatalogGeneralSettingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ConfigureChannelCatalogProductValueOverrideCopyLink
* links.ConfigureChannelCatalogProductValueOverrideCopyLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.CreateRuleLink
* links.CreateRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DeleteChannelCatalogLink
* links.DeleteChannelCatalogLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DeleteReportFilterLink
* links.DeleteReportFilterLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DeleteRuleLink
* links.DeleteRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DisableChannelCatalogCategoryMappingLink
* links.DisableChannelCatalogCategoryMappingLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DisableChannelCatalogLink
* links.DisableChannelCatalogLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DisableChannelCatalogProductLink
* links.DisableChannelCatalogProductLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.DisableRuleLink
* links.DisableRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.EnableChannelCatalogLink
* links.EnableChannelCatalogLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.EnableRuleLink
* links.EnableRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ExportChannelCatalogProductInfoListLink
* links.ExportChannelCatalogProductInfoListLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ExportOrdersLink
* links.ExportOrdersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetAutomaticTransitionsLink
* links.GetAutomaticTransitionsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogCategoriesLink
* links.GetChannelCatalogCategoriesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogExclusionFilterOperatorsLink
* links.GetChannelCatalogExclusionFilterOperatorsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogExclusionFiltersCopyLink
* links.GetChannelCatalogExclusionFiltersCopyLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogExclusionFiltersLink
* links.GetChannelCatalogExclusionFiltersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogExportationCacheInfoLink
* links.GetChannelCatalogExportationCacheInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogExportationHistoryLink
* links.GetChannelCatalogExportationHistoryLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogLink
* links.GetChannelCatalogLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogMarketplacePropertiesLink
* links.GetChannelCatalogMarketplacePropertiesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogMarketplaceSettingsLink
* links.GetChannelCatalogMarketplaceSettingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogProductInfoLink
* links.GetChannelCatalogProductInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogProductInfoListLink
* links.GetChannelCatalogProductInfoListLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogProductValueOverrideCopyLink
* links.GetChannelCatalogProductValueOverrideCopyLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelCatalogsLink
* links.GetChannelCatalogsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelInfoLink
* links.GetChannelInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelsIndexLink
* links.GetChannelsIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetChannelsLink
* links.GetChannelsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetCustomerIndexLink
* links.GetCustomerIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetMarketplaceAccountsSynchronizationLink
* links.GetMarketplaceAccountsSynchronizationLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetMarketplaceChannelCatalogsLink
* links.GetMarketplaceChannelCatalogsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderExportationsLink
* links.GetOrderExportationsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderHistoryLink
* links.GetOrderHistoryLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderIndexLink
* links.GetOrderIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderLink
* links.GetOrderLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderListFullLink
* links.GetOrderListFullLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetOrderListLightLink
* links.GetOrderListLightLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetPublicListOfValuesLink
* links.GetPublicListOfValuesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetPublicLovIndexLink
* links.GetPublicLovIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetPublicationsLink
* links.GetPublicationsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetReportFilterLink
* links.GetReportFilterLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetReportFiltersLink
* links.GetReportFiltersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetRuleLink
* links.GetRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetRulesExecutionsLink
* links.GetRulesExecutionsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetRulesLink
* links.GetRulesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreReportByCategoryLink
* links.GetStoreReportByCategoryLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreReportByChannelLink
* links.GetStoreReportByChannelLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreReportByDayLink
* links.GetStoreReportByDayLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreReportByProductLink
* links.GetStoreReportByProductLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreTrackedClicksLink
* links.GetStoreTrackedClicksLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreTrackedExternalOrdersLink
* links.GetStoreTrackedExternalOrdersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreTrackedOrdersLink
* links.GetStoreTrackedOrdersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetStoreTrackingStatusLink
* links.GetStoreTrackingStatusLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetTrackingStatusLink
* links.GetTrackingStatusLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetUserListOfValuesLink
* links.GetUserListOfValuesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.GetUserLovIndexLink
* links.GetUserLovIndexLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.HarvestAllLink
* links.HarvestAllLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.HarvestOrderLink
* links.HarvestOrderLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_ActivateAutoImportLink
* links.Importation_ActivateAutoImportLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_CancelLink
* links.Importation_CancelLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_CommitColumnsLink
* links.Importation_CommitColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_CommitLink
* links.Importation_CommitLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_ConfigureCatalogColumnLink
* links.Importation_ConfigureCatalogColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_ConfigureRemainingCatalogColumnsLink
* links.Importation_ConfigureRemainingCatalogColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_DeleteCustomColumnLink
* links.Importation_DeleteCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetCustomColumnExpressionLink
* links.Importation_GetCustomColumnExpressionLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetCustomColumnsLink
* links.Importation_GetCustomColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetDetectedCatalogColumnsLink
* links.Importation_GetDetectedCatalogColumnsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetImportationMonitoringLink
* links.Importation_GetImportationMonitoringLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetManualUpdateLastInputConfigLink
* links.Importation_GetManualUpdateLastInputConfigLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetProductSampleCustomColumnValueLink
* links.Importation_GetProductSampleCustomColumnValueLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetProductSampleLink
* links.Importation_GetProductSampleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_GetReportingsLink
* links.Importation_GetReportingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_IgnoreColumnLink
* links.Importation_IgnoreColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_MapCatalogColumnLink
* links.Importation_MapCatalogColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_MapCustomColumnLink
* links.Importation_MapCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_ReattendColumnLink
* links.Importation_ReattendColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_SaveCustomColumnLink
* links.Importation_SaveCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_StartManualUpdateLink
* links.Importation_StartManualUpdateLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_TechnicalProgressionLink
* links.Importation_TechnicalProgressionLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_UnmapCatalogColumnLink
* links.Importation_UnmapCatalogColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.Importation_UnmapCustomColumnLink
* links.Importation_UnmapCustomColumnLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.MoveDownRuleLink
* links.MoveDownRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.MoveUpRuleLink
* links.MoveUpRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OptimiseAllLink
* links.OptimiseAllLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OptimiseByCategoryLink
* links.OptimiseByCategoryLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OptimiseByChannelLink
* links.OptimiseByChannelLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OptimiseByProductLink
* links.OptimiseByProductLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OptimiseLink
* links.OptimiseLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.OverrideChannelCatalogProductValuesLink
* links.OverrideChannelCatalogProductValuesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ReenableChannelCatalogCategoryMappingLink
* links.ReenableChannelCatalogCategoryMappingLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.ReenableChannelCatalogProductLink
* links.ReenableChannelCatalogProductLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.RunRuleLink
* links.RunRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.RunRulesLink
* links.RunRulesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.SaveReportFilterLink
* links.SaveReportFilterLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.SetChannelCatalogMarketplaceSettingsLink
* links.SetChannelCatalogMarketplaceSettingsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.SetMerchantOrderInfoLink
* links.SetMerchantOrderInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.SetMerchantOrderInfoListLink
* links.SetMerchantOrderInfoListLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.UpdateRuleLink
* links.UpdateRuleLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.activateUserAccountLink
* links.activateUserAccountLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.changePasswordLink
* links.changePasswordLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.createContractLink
* links.createContractLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.createStoreLink
* links.createStoreLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.deleteNextContractLink
* links.deleteNextContractLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.deleteStoreLink
* links.deleteStoreLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.deleteStoreShareLink
* links.deleteStoreShareLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getBillingPeriodsLink
* links.getBillingPeriodsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getContractsLink
* links.getContractsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getCreditCardInfoLink
* links.getCreditCardInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getFriendInfoLink
* links.getFriendInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getInvoicesLink
* links.getInvoicesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getOfferLink
* links.getOfferLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getProfilePictureInfoLink
* links.getProfilePictureInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getStandardOffersLink
* links.getStandardOffersLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getStoreLink
* links.getStoreLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getStoreSharesLink
* links.getStoreSharesLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getStoresLink
* links.getStoresLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.getUserAccountInfoLink
* links.getUserAccountInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.logoutLink
* links.logoutLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.reactivateCurrentContractLink
* links.reactivateCurrentContractLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.saveCompanyInfoLink
* links.saveCompanyInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.saveCreditCardInfoLink
* links.saveCreditCardInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.savePersonalInfoLink
* links.savePersonalInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.saveProfilePictureInfoLink
* links.saveProfilePictureInfoLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.saveStoreAlertsLink
* links.saveStoreAlertsLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.shareStoreLink
* links.shareStoreLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.terminateCurrentContractLink
* links.terminateCurrentContractLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### links.updateStoreLink
* links.updateStoreLink
  * allOptionalParamsProvided `boolean`: indicates whether all optionals params have been provided
  * allRequiredParamsProvided `boolean`: indicates whether all required params have been provided
  * description `string`: The description of the link
  * docUrl [BeezUP.Common.DocUrl](#beezup.common.docurl)
  * href **required** [BeezUP.Common.Href](#beezup.common.href)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * label `string`: The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
  * method [BeezUP.Common.HttpMethod](#beezup.common.httpmethod)
  * operationId [BeezUP.Common.OperationId](#beezup.common.operationid)
  * parameters `object`
  * urlTemplated `boolean`: indicates whether the href is templated or not

### loginRequest
* loginRequest `object`
  * login **required** [BeezUP.Common.Email](#beezup.common.email)
  * password **required** `string`: Your password

### mapBeezUPColumnRequest
* mapBeezUPColumnRequest `object`
  * beezUPColumnName **required** [BeezUP.Common.BeezUPColumnName](#beezup.common.beezupcolumnname)

### mappingStatus
* mappingStatus `string` (values: required, optional, notConfigurable)

### marginType
* marginType `string` (values: Tracker, Global)

### marketplaceChannelCatalog
* marketplaceChannelCatalog `object`: This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
  * apiSettingsStatus **required** [BeezUP.Common.ApiSettingsStatus](#beezup.common.apisettingsstatus)
  * beezUPChannelCatalogId **required** [BeezUP.Common.ChannelCatalogId](#beezup.common.channelcatalogid)
  * beezUPChannelId **required** [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * beezUPStoreId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)
  * beezUPStoreName **required** `string`: The store name
  * enabled **required** `boolean`: The enabled status of the Channel Catalog
  * links **required** [marketplaceChannelCatalogLinks](#marketplacechannelcataloglinks)
  * lovLinks **required** [marketplaceChannelCatalogLovLinks](#marketplacechannelcataloglovlinks)
  * marketplaceAccountId [BeezUP.Common.MarketplaceAccountId](#beezup.common.marketplaceaccountid)
  * marketplaceBusinessCode **required** [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceIsoCountryCodeAlpha2 **required** `string`: The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)
  * marketplaceMarketPlaceId **required** `string`: The marketplace identifier in the marketplace
  * marketplaceMerchantIdentifiers `object`: The marketplace merchant identifier list
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)

### marketplaceChannelCatalogLinks
* marketplaceChannelCatalogLinks `object`: Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
  * properties **required** [links.GetChannelCatalogMarketplacePropertiesLink](#links.getchannelcatalogmarketplacepropertieslink)
  * publications [links.GetPublicationsLink](#links.getpublicationslink)
  * settings **required** [links.GetChannelCatalogMarketplaceSettingsLink](#links.getchannelcatalogmarketplacesettingslink)

### marketplaceChannelCatalogList
* marketplaceChannelCatalogList `object`: The marketplace channel catalog list
  * links **required** [marketplaceChannelCatalogListLinks](#marketplacechannelcataloglistlinks)
  * marketplaceChannelCatalogs **required** `array`: The list of marketplace channel catalog
    * items [marketplaceChannelCatalog](#marketplacechannelcatalog)

### marketplaceChannelCatalogListLinks
* marketplaceChannelCatalogListLinks `object`
  * self **required** [links.GetMarketplaceChannelCatalogsLink](#links.getmarketplacechannelcatalogslink)

### marketplaceChannelCatalogLovLinks
* marketplaceChannelCatalogLovLinks `object`: Indicates the List Of Values related to the marketplace
  * cancelationReasonCodeLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * carrierCodeLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * marketplaceStorePropertyGroupLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * marketplaceStorePropertyLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * refundReasonCodeLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * shippingMethodLOV [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### marketplaceOrderId
* marketplaceOrderId `string`: The order marketplace identifier

### marketplaceOrderStatus
* marketplaceOrderStatus `string`: The marketplace order state

### nextContractInfo
* nextContractInfo
  * additionalClickPrice `number`: Additional click price
  * billingPeriodInMonth `integer`: The billing period in month
  * billingPeriodPercentDiscount `number`: The percent discount related to the billing period
  * clickIncluded `integer`: The click included
  * commitmentCalculatedFinishUtcDate `string`: The calculated end date of commitment
  * commitmentPeriodInMonth `integer`: The commitment period in month
  * contractId [contractId](#contractid)
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * discountDurationInMonth `integer`: The discount duration in month
  * discountEndUtcDate `string`: The end of your discount
  * fixedAndVariableClickInfo [fixedAndVariableClickModelInfo](#fixedandvariableclickmodelinfo)
  * fixedPrice `number`: The fixed price of your contract
  * ipUserCreation `string`: The IP of the user who creates the contract
  * ipUserModification `string`: The IP of the user who modified the contract
  * isCommitmentRenewalAutomatically `boolean`: Is commitment is automatically renewed
  * isModifiableContract `boolean`: Is the contract is modifiable ?
  * offerId [offerId](#offerid)
  * offerName `string`: The offer name based on /offers
  * percentDiscount `number`: The percent of the discount
  * startUtcDate `string`: The start date of your contract
  * storeCount [storeCount](#storecount)
  * trialPeriodInMonth `integer`: The trial period in month
  * variableModelInfo [variableModelInfo](#variablemodelinfo)
  * links **required** [nextContractInfoLinks](#nextcontractinfolinks)

### nextContractInfoLinks
* nextContractInfoLinks `object`
  * delete [links.deleteNextContractLink](#links.deletenextcontractlink)

### offer
* offer `object`
  * content [offerContent](#offercontent)
  * info [BeezUP.Common.InfoSummaries](#beezup.common.infosummaries)
  * links [offerLinks](#offerlinks)

### offerContent
* offerContent `object`
  * contractBillingPeriodInfo **required** [contractBillingPeriodInfo](#contractbillingperiodinfo)
  * contractBonusInfo **required** [contractBonusInfo](#contractbonusinfo)
  * contractClickInfo **required** [contractClickInfo](#contractclickinfo)
  * contractCommitmentInfo **required** [contractCommitmentInfo](#contractcommitmentinfo)
  * contractDiscountInfo **required** [contractDiscountInfo](#contractdiscountinfo)
  * contractMoneyInfo **required** [contractMoneyInfo](#contractmoneyinfo)
  * contractStoreInfo **required** [contractStoreInfo](#contractstoreinfo)
  * contractTerminationReason [contractTerminationReason](#contractterminationreason)
  * contractTerminationReasonType [contractTerminationReasonType](#contractterminationreasontype)
  * notifyVatExemption **required** `boolean`: Internal usage: Indicates if we have to notify you about VAT exemption.
  * previousFixPeriodInvoiceProrataInfo **required** [previousFixPeriodInvoiceProrataInfo](#previousfixperiodinvoiceproratainfo)

### offerFunctionality
* offerFunctionality `object`
  * functionalityCode **required** `string`: The functionality code
  * maxValueInteger `integer`: The max value in integer for this feature in this offer
  * text `string`: A description text of this feature
  * unlimited **required** `boolean`: Is this feature is unlimited for this offer?

### offerId
* offerId `integer`: The offer id based on /offers. Not a free offer of course.

### offerLinks
* offerLinks `object`: The different actions you can make on this offer
  * createContract [links.createContractLink](#links.createcontractlink)

### offerRequest
* offerRequest `object`
  * billingPeriodInMonth **required** [billingPeriodInMonth](#billingperiodinmonth)
  * couponDiscountCode [couponDiscountCode](#coupondiscountcode)
  * couponOfferCode [couponOfferCode](#couponoffercode)
  * offerId **required** [offerId](#offerid)
  * storeCount **required** [storeCount](#storecount)

### optimisationActionName
* optimisationActionName `string` (values: reenable, disable): The optimisation action

### optimiseAllRequest
* optimiseAllRequest
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)
  * productColumnFilters [productColumnFilters](#productcolumnfilters)
  * productColumnsToDisplay [productColumnsToDisplay](#productcolumnstodisplay)
  * productState [productStateFilter](#productstatefilter)
  * reportType **required** [reportType](#reporttype)

### optimiseRequest
* optimiseRequest
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)
  * productColumnFilters [productColumnFilters](#productcolumnfilters)
  * productColumnsToDisplay [productColumnsToDisplay](#productcolumnstodisplay)
  * productState [productStateFilter](#productstatefilter)
  * reportType **required** [reportType](#reporttype)
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)

### order
* order
  * accountId **required** [accountId](#accountid)
  * beezUPOrderId **required** [beezUPOrderId](#beezuporderid)
  * beezUPOrderUrl [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * etag **required** [etag](#etag)
  * links **required** [orderHeaderLinks](#orderheaderlinks)
  * marketplaceBusinessCode **required** [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * order_Buyer_Name [order_Buyer_Name](#order_buyer_name)
  * order_CurrencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * order_LastModificationUtcDate **required** `string`: The last modification UTC date done by BeezUP of this order
  * order_MarketplaceLastModificationUtcDate **required** `string`: The last modification UTC date done by the marketplace on this order
  * order_MarketplaceOrderId **required** [marketplaceOrderId](#marketplaceorderid)
  * order_MerchantECommerceSoftwareName [order_MerchantECommerceSoftwareName](#order_merchantecommercesoftwarename)
  * order_MerchantECommerceSoftwareVersion [order_MerchantECommerceSoftwareVersion](#order_merchantecommercesoftwareversion)
  * order_MerchantOrderId [order_MerchantOrderId](#order_merchantorderid)
  * order_PurchaseUtcDate **required** `string`: The purchase date of this order
  * order_Status_BeezUPOrderStatus **required** [beezUPOrderStatus](#beezuporderstatus)
  * order_Status_MarketplaceOrderStatus [marketplaceOrderStatus](#marketplaceorderstatus)
  * order_TotalPrice `number`: The total price of this order (corresponding to the amount paid by the customer)
  * processing **required** [processing](#processing)
  * links **required** [orderLinks](#orderlinks)
  * orderItems **required** `array`
    * items [orderItem](#orderitem)
  * order_Buyer_AddressCity `string`: The Buyer address city of this order
  * order_Buyer_AddressCountryIsoCodeAlpha2 `string`: The Buyer address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
  * order_Buyer_AddressCountryName `string`: The Buyer address country name
  * order_Buyer_AddressLine1 `string`: The Buyer address line 1 of this order
  * order_Buyer_AddressLine2 `string`: The Buyer address line 2 of this order
  * order_Buyer_AddressLine3 `string`: The Buyer address line 3 of this order
  * order_Buyer_AddressPostalCode `string`: The Buyer address postal code of this order
  * order_Buyer_AddressStateOrRegion `string`: The Buyer address state or region of this order
  * order_Buyer_Civility `string`: The buyer civility for this order
  * order_Buyer_CompanyName `string`: The buyer company name for this order
  * order_Buyer_Email `string`: The email of the buyer for this order
  * order_Buyer_Identifier `string`: The buyer identifier for this order
  * order_Buyer_MobilePhone `string`: The mobile phone number of the buyer for this order
  * order_Buyer_Phone `string`: The phone number of the buyer for this order
  * order_Comment `string`: The comment associated to this order
  * order_MarketPlaceChannel `string`: Useful to identify the origin of the order. For example in Amazon.
  * order_OrderItemsSourceUri `string`: Technical information: The url to the source of this order items. We received this information from the marketplace.
  * order_OrderSourceUri `string`: Technical information: The url to the source of this order. We received this information from the marketplace.
  * order_PayingUtcDate `string`: The UTC date of the payment of this order
  * order_PaymentMethod `string`: The payment method of this order
  * order_Shipping_AddressCity `string`: The shipping address city of this order
  * order_Shipping_AddressCountryIsoCodeAlpha2 `string`: The shipping address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
  * order_Shipping_AddressCountryName `string`: The shipping address country name
  * order_Shipping_AddressLine1 `string`: The shipping address line 1 of this order
  * order_Shipping_AddressLine2 `string`: The shipping address line 2 of this order
  * order_Shipping_AddressLine3 `string`: The shipping address line 3 of this order
  * order_Shipping_AddressName `string`: The name of the person in the shipping address for this order
  * order_Shipping_AddressPostalCode `string`: The shipping address postal code of this order
  * order_Shipping_AddressStateOrRegion `string`: The shipping address state or region of this order
  * order_Shipping_Civility `string`: The civility of the person in the shipping address for this order
  * order_Shipping_CompanyName `string`: The company name of the shipping address for this order
  * order_Shipping_EarliestShipUtcDate `string`: The UTC date of the earliest ship for this order
  * order_Shipping_Email `string`: The email of the person in the shipping address for this order
  * order_Shipping_LatestShipUtcDate `string`: The UTC date of the latest ship for this order
  * order_Shipping_Method `string`: The shipping method of this order
  * order_Shipping_MobilePhone `string`: The mobile phone number of the person in the shipping address for this order
  * order_Shipping_Phone `string`: The phone number of the person in the shipping address for this order
  * order_Shipping_Price `number`: The shipping price of this order
  * order_Shipping_ShippingTax `number`: The shipping tax for this order
  * order_TotalCommission `number`: The total commission of this order
  * order_TotalTax `number`: The total tax of this order
  * transitionLinks **required** [orderTransitionLinks](#ordertransitionlinks)

### orderByDirection
* orderByDirection `string` (values: Ascending, Descending): Indicate which direction to order results by

### orderExportationReporting
* orderExportationReporting `object`: Represent the reporting of the Order report exportations
  * abortionUtcDate `string`
  * beginUtcDate `string`
  * blobNameUri `string`
  * endUtcDate `string`
  * enqueuedUtcDate **required** `string`
  * errorMessage `string`
  * executionUUID **required** `string`
  * expirationUtcDate `string`
  * failureUtcDate `string`
  * ipAddress **required** `string`
  * jsonCriteria `string`: Raw representation of the JSON
  * lastUpdateUtcDate `string`
  * orderCount `integer`
  * processingStatus **required** [orderExportationReportingProcessingStatus](#orderexportationreportingprocessingstatus)
  * remainingOrderCount `integer`
  * resumedUtcDate `string`
  * sourceType **required** [sourceType](#sourcetype)
  * sourceUserId [BeezUP.Common.UserId](#beezup.common.userid)
  * sourceUserName **required** `string`
  * suspendedUtcDate `string`
  * timeoutDuration `string`
  * warningMessage `string`

### orderExportationReportingProcessingStatus
* orderExportationReportingProcessingStatus `string` (values: None, InProgress, Done, Failed, AlreadyInProgress, Aborted, Suspended)

### orderExportations
* orderExportations `object`: The list of Order report exportations.\
  * exportations **required** `array`
    * items [orderExportationReporting](#orderexportationreporting)
  * links **required** [orderExportationsLinks](#orderexportationslinks)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### orderExportationsLinks
* orderExportationsLinks `object`
  * self **required** [links.GetOrderExportationsLink](#links.getorderexportationslink)

### orderHeader
* orderHeader `object`: Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
  * accountId **required** [accountId](#accountid)
  * beezUPOrderId **required** [beezUPOrderId](#beezuporderid)
  * beezUPOrderUrl [BeezUP.Common.HttpUrl](#beezup.common.httpurl)
  * etag **required** [etag](#etag)
  * links **required** [orderHeaderLinks](#orderheaderlinks)
  * marketplaceBusinessCode **required** [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * order_Buyer_Name [order_Buyer_Name](#order_buyer_name)
  * order_CurrencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * order_LastModificationUtcDate **required** `string`: The last modification UTC date done by BeezUP of this order
  * order_MarketplaceLastModificationUtcDate **required** `string`: The last modification UTC date done by the marketplace on this order
  * order_MarketplaceOrderId **required** [marketplaceOrderId](#marketplaceorderid)
  * order_MerchantECommerceSoftwareName [order_MerchantECommerceSoftwareName](#order_merchantecommercesoftwarename)
  * order_MerchantECommerceSoftwareVersion [order_MerchantECommerceSoftwareVersion](#order_merchantecommercesoftwareversion)
  * order_MerchantOrderId [order_MerchantOrderId](#order_merchantorderid)
  * order_PurchaseUtcDate **required** `string`: The purchase date of this order
  * order_Status_BeezUPOrderStatus **required** [beezUPOrderStatus](#beezuporderstatus)
  * order_Status_MarketplaceOrderStatus [marketplaceOrderStatus](#marketplaceorderstatus)
  * order_TotalPrice `number`: The total price of this order (corresponding to the amount paid by the customer)
  * processing **required** [processing](#processing)

### orderHeaderLinks
* orderHeaderLinks `object`
  * self **required** [links.GetOrderLink](#links.getorderlink)

### orderHistory
* orderHistory `object`: Describe the history related to an order
  * changeOrderReportings `array`: The list of change order operation
    * items [changeOrderReporting](#changeorderreporting)
  * harvestOrderReportings `array`
    * items [harvestOrderReporting](#harvestorderreporting)
  * lastModificationUtcDate `string`

### orderIdentifier
* orderIdentifier `object`
  * accountId **required** [accountId](#accountid)
  * beezUPOrderId **required** [beezUPOrderId](#beezuporderid)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)

### orderIdentifierWithETag
* orderIdentifierWithETag
  * accountId **required** [accountId](#accountid)
  * beezUPOrderId **required** [beezUPOrderId](#beezuporderid)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * etag **required** [etag](#etag)

### orderIndex
* orderIndex `object`
  * links **required** [orderIndexLinks](#orderindexlinks)
  * lovLinks **required** [orderIndexLovLinks](#orderindexlovlinks)

### orderIndexLinks
* orderIndexLinks `object`: Gives you all entry point operations you can do on this API
  * autoTransitions **required** [links.GetAutomaticTransitionsLink](#links.getautomatictransitionslink)
  * clearMerchantInfos **required** [links.ClearMerchantOrderInfoListLink](#links.clearmerchantorderinfolistlink)
  * export **required** [links.ExportOrdersLink](#links.exportorderslink)
  * exportations [links.GetOrderExportationsLink](#links.getorderexportationslink)
  * harvest **required** [links.HarvestAllLink](#links.harvestalllink)
  * lightOrders **required** [links.GetOrderListLightLink](#links.getorderlistlightlink)
  * orders **required** [links.GetOrderListFullLink](#links.getorderlistfulllink)
  * self **required** [links.GetOrderIndexLink](#links.getorderindexlink)
  * setMerchantInfos **required** [links.SetMerchantOrderInfoListLink](#links.setmerchantorderinfolistlink)
  * status **required** [links.GetMarketplaceAccountsSynchronizationLink](#links.getmarketplaceaccountssynchronizationlink)

### orderIndexLovLinks
* orderIndexLovLinks `object`: Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
  * orderChangeBusinessOperationType **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * orderProperty **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * orderPropertyPosted **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)
  * orderState **required** [BeezUP.Common.LOVLink3](#beezup.common.lovlink3)

### orderItem
* orderItem `object`: Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
  * beezUPOrderItemId **required** `string`: The BeezUP identifier of the order Item
  * orderItem_BeezUPStoreId `string`: The store id in the beezup system related to the order item. This property will help you to match the order to the inventory system.
  * orderItem_ImageUrl `string`: The URL of the image of the order item
  * orderItem_ItemPrice `number`: The price of the order item
  * orderItem_ItemTax `number`: The tax of the order item
  * orderItem_MarketPlaceProductId `string`: The marketplace product identifier of the order item
  * orderItem_MerchantImportedProductId `string`: The product id indicated in the catalog importation in BeezUP system for this order item. This property will help you to match the order to the inventory system.
  * orderItem_MerchantImportedProductIdColumnName `string`: The column name for the product id indicated in the catalog importation in BeezUP system related to this order item. This property will help you to match the order to the inventory system.
  * orderItem_MerchantImportedProductUrl `string`: The product url indicated in the catalog importation in BeezUP system related to this order item
  * orderItem_MerchantProductId `string`: The merchant product id of the order item
  * orderItem_MerchantProductIdColumnName `string`: The column name indicate in the mapping for the product id related to the order item
  * orderItem_OrderItemType **required** `string`: The order item type of the order item
  * orderItem_Quantity `number`: The quantity of the order item
  * orderItem_Shipping_Price `number`: The shipping price of the order item
  * orderItem_Title `string`: The title of the order item
  * orderItem_TotalPrice `number`: The total price of the order item

### orderLinks
* orderLinks
  * self **required** [links.GetOrderLink](#links.getorderlink)
  * clearMerchantInfo **required** [links.ClearMerchantOrderInfoLink](#links.clearmerchantorderinfolink)
  * harvest **required** [links.HarvestOrderLink](#links.harvestorderlink)
  * history **required** [links.GetOrderHistoryLink](#links.getorderhistorylink)
  * setMerchantInfo **required** [links.SetMerchantOrderInfoLink](#links.setmerchantorderinfolink)

### orderListFull
* orderListFull `object`: The order list with all information we have from the orders and its items.\
  * links **required** [orderListFullLinks](#orderlistfulllinks)
  * orders **required** `array`
    * items [order](#order)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### orderListFullLinks
* orderListFullLinks
  * clearMerchantInfos **required** [links.ClearMerchantOrderInfoListLink](#links.clearmerchantorderinfolistlink)
  * export **required** [links.ExportOrdersLink](#links.exportorderslink)
  * harvest **required** [links.HarvestAllLink](#links.harvestalllink)
  * setMerchantInfos **required** [links.SetMerchantOrderInfoListLink](#links.setmerchantorderinfolistlink)
  * status **required** [links.GetMarketplaceAccountsSynchronizationLink](#links.getmarketplaceaccountssynchronizationlink)
  * self **required** [links.GetOrderListFullLink](#links.getorderlistfulllink)

### orderListLight
* orderListLight `object`: The order list with minimum information we have from the orders.\
  * links **required** [orderListLightLinks](#orderlistlightlinks)
  * orders **required** `array`
    * items [orderHeader](#orderheader)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### orderListLightLinks
* orderListLightLinks
  * clearMerchantInfos **required** [links.ClearMerchantOrderInfoListLink](#links.clearmerchantorderinfolistlink)
  * export **required** [links.ExportOrdersLink](#links.exportorderslink)
  * harvest **required** [links.HarvestAllLink](#links.harvestalllink)
  * setMerchantInfos **required** [links.SetMerchantOrderInfoListLink](#links.setmerchantorderinfolistlink)
  * status **required** [links.GetMarketplaceAccountsSynchronizationLink](#links.getmarketplaceaccountssynchronizationlink)
  * self **required** [links.GetOrderListLightLink](#links.getorderlistlightlink)

### orderListLinks
* orderListLinks `object`: The list of actions you can do from the order list response
  * clearMerchantInfos **required** [links.ClearMerchantOrderInfoListLink](#links.clearmerchantorderinfolistlink)
  * export **required** [links.ExportOrdersLink](#links.exportorderslink)
  * harvest **required** [links.HarvestAllLink](#links.harvestalllink)
  * setMerchantInfos **required** [links.SetMerchantOrderInfoListLink](#links.setmerchantorderinfolistlink)
  * status **required** [links.GetMarketplaceAccountsSynchronizationLink](#links.getmarketplaceaccountssynchronizationlink)

### orderListRequest
* orderListRequest
  * accountIds `array`: Account Id list
    * items [accountId](#accountid)
  * beezUPOrderStatuses `array`
    * items [beezUPOrderStatus](#beezuporderstatus)
  * beginPeriodUtcDate **required** `string`: The begin period you want to make the search. \
  * dateSearchType **required** [dateSearchType](#datesearchtype)
  * endPeriodUtcDate **required** `string`: The end period of you search. \
  * marketplaceBusinessCodes `array`
    * items [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceOrderIds `array`
    * items [marketplaceOrderId](#marketplaceorderid)
  * marketplaceTechnicalCodes `array`
    * items [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * order_Buyer_Name [order_Buyer_Name](#order_buyer_name)
  * order_MerchantOrderIds `array`: Merchant order id list
    * items [order_MerchantOrderId](#order_merchantorderid)
  * storeIds `array`: Store Id list
    * items [BeezUP.Common.StoreId](#beezup.common.storeid)
  * pageNumber **required** [pageNumber](#pagenumber)
  * pageSize **required** [pageSize](#pagesize)

### orderListRequestWithoutPagination
* orderListRequestWithoutPagination `object`
  * accountIds `array`: Account Id list
    * items [accountId](#accountid)
  * beezUPOrderStatuses `array`
    * items [beezUPOrderStatus](#beezuporderstatus)
  * beginPeriodUtcDate **required** `string`: The begin period you want to make the search. \
  * dateSearchType **required** [dateSearchType](#datesearchtype)
  * endPeriodUtcDate **required** `string`: The end period of you search. \
  * marketplaceBusinessCodes `array`
    * items [BeezUP.Common.MarketplaceBusinessCode](#beezup.common.marketplacebusinesscode)
  * marketplaceOrderIds `array`
    * items [marketplaceOrderId](#marketplaceorderid)
  * marketplaceTechnicalCodes `array`
    * items [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * order_Buyer_Name [order_Buyer_Name](#order_buyer_name)
  * order_MerchantOrderIds `array`: Merchant order id list
    * items [order_MerchantOrderId](#order_merchantorderid)
  * storeIds `array`: Store Id list
    * items [BeezUP.Common.StoreId](#beezup.common.storeid)

### orderOperationResponse
* orderOperationResponse `object`: The response given by the batch operation for an order
  * errors `array`: The error list
    * items [BeezUP.Common.UserErrorMessage](#beezup.common.usererrormessage)
  * order **required** [orderIdentifier](#orderidentifier)
  * status **required** `integer`: Indicates the http status corresponding to the individual operation
  * success **required** `boolean`: Indicates if the operation succeed or not

### orderTransitionLinks
* orderTransitionLinks `array`: Contains the authorized change actions for an order
  * items [links.ChangeOrderLink](#links.changeorderlink)

### order_Buyer_Name
* order_Buyer_Name `string`: Buyer full name

### order_MerchantECommerceSoftwareName
* order_MerchantECommerceSoftwareName `string`: The e-commerce software name of the merchant

### order_MerchantECommerceSoftwareVersion
* order_MerchantECommerceSoftwareVersion `string`: The e-commece software version of the merchant

### order_MerchantOrderId
* order_MerchantOrderId `string`: The order merchant identifier

### orderedReportFilterCommonParameters
* orderedReportFilterCommonParameters: Contains common filter parameters with Order By functionnality
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)

### pageNumber
* pageNumber `integer`: Indicates the page number

### pageSize
* pageSize `integer`: Indicate the order count per page

### paginationRequestParameters
* paginationRequestParameters `object`
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)

### paymentMethod
* paymentMethod `string` (values: Transfer, Debit, Paypal, Check, CreditNote, Loss, OnlinePayment): Payment method

### performanceIndicatorFilter
* performanceIndicatorFilter `object`
  * operatorName **required** [performanceIndicatorFilterOperatorName](#performanceindicatorfilteroperatorname)
  * performanceIndicator **required** [performanceIndicatorType](#performanceindicatortype)
  * value **required** `number`: Indicates the filter value to apply on this indicator

### performanceIndicatorFilterOperatorName
* performanceIndicatorFilterOperatorName `string` (values: Equals, GreaterTo, LowerTo): Indicates the operator you want to apply on this indicator

### performanceIndicatorFormula
* performanceIndicatorFormula `object`: The KPI formula
  * firstParameter [performanceIndicatorFormulaParameterType](#performanceindicatorformulaparametertype)
  * operatorName [performanceIndicatorFormulaOperatorName](#performanceindicatorformulaoperatorname)
  * secondParameter [performanceIndicatorFormulaParameterType](#performanceindicatorformulaparametertype)
  * thirdParameter `integer`: Indicate the value of the third parameter of your formula

### performanceIndicatorFormulaOperatorName
* performanceIndicatorFormulaOperatorName `string` (values: Multiply, Divide)

### performanceIndicatorFormulaParameterType
* performanceIndicatorFormulaParameterType `string` (values: Cost, TotalSales, Margin, TotalSalesMinusCost, MarginMinusCost, OrderCount, ClickCount, SoldProductCount, One): Indicate on which indicator or value you want to make your formula

### performanceIndicatorType
* performanceIndicatorType `string` (values: ClickCount, Cost, OrderCount, ProductCount, SoldProductCount, DisabledProductCount, EnabledProductCount, TotalSales, Margin, ROI, PerformanceIndicator): Indicate on which indicator or value you want to make your formula

### personalInfo
* personalInfo `object`
  * beezUPTimeZoneId **required** [beezUPTimeZoneId](#beezuptimezoneid)
  * firstName **required** [firstName](#firstname)
  * lastName **required** [lastName](#lastname)
  * phoneNumber **required** [phoneNumber](#phonenumber)
  * whatIDo [whatIDo](#whatido)

### phoneNumber
* phoneNumber `string`: Your phone number

### postalCode
* postalCode `string`: Your address postal code

### previousFixPeriodInvoiceProrataInfo
* previousFixPeriodInvoiceProrataInfo `object`: Describe the prorata info based on your previous invoice
  * amountAfterTax `number`: The amout after tax of the previous invoice
  * amountToBePaid `number`: The amount to be payed of the previous invoice
  * computedProrataToBeDeducted `number`: The prorata amount
  * contractId `string`: The contract id related to the previous invoice
  * fixedPeriodEndDate `string`: The fixed end period of the previous invoice
  * fixedPeriodStartDate `string`: The fixed start period of the previous invoice
  * invoiceNumber `string`: The previous invoice number

### processing
* processing `boolean`: If true, there is currently a harvest or an order change in progress. Otherwise false.

### product
* product `object`: Represent a catalog product
  * categoryId **required** [BeezUP.Common.CatalogCategoryId](#beezup.common.catalogcategoryid)
  * exists **required** `boolean`: Indicates if the product exists in the current catalog
  * productId **required** [BeezUP.Common.ProductId](#beezup.common.productid)
  * values **required** [productValues](#productvalues)

### productColumnFilter
* productColumnFilter `object`
  * operatorName **required** [productColumnFilterOperatorName](#productcolumnfilteroperatorname)
  * values `array`: Must be null if the operator is "IsNull" or "IsNotNull".
    * items `string`

### productColumnFilterOperatorName
* productColumnFilterOperatorName `string` (values: Equals, Contains, InList, IsNull, IsNotNull, NumericEquals, NumericGreaterTo, NumericLowerTo): Indicate the operator you want to apply on the columnId

### productColumnFilters
* productColumnFilters `object`
  * additionalProductColumnFilters [additionalProductColumnFilters](#additionalproductcolumnfilters)
  * sku `string`: The product sku filter
  * title `string`: The product title filter

### productColumnsToDisplay
* productColumnsToDisplay `array`
  * items [BeezUP.Common.CatalogColumnId](#beezup.common.catalogcolumnid)

### productList
* productList `object`
  * paginationResult **required** [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)
  * products **required** `array`
    * items [product](#product)

### productOverrideWithCatalogValue
* productOverrideWithCatalogValue `object`
  * catalogValue `string`: The catalog product value
  * override **required** `string`: The overridden product value

### productOverrides
* productOverrides `object`: The key is the channel column identifier

### productOverridesCopyResponse
* productOverridesCopyResponse `object`: Product overrides compatibilites list

### productOverridesWithCatalogValues
* productOverridesWithCatalogValues `object`: The key is the channel column identifier

### productSample
* productSample `object`: Describe a product sample
  * productValues [productValues](#productvalues)

### productSetVisibilityCriteria
* productSetVisibilityCriteria `object`
  * disabled `boolean`: Search disabled products. If null the filter will not be taken in account.
  * excluded `boolean`: Search excluded products by at least an exclusion filter. If null the filter will not be taken in account.
  * exist `boolean`: If false, search for products absent from the current catalog. If true, search for products currently in the catalog. If null the filter will not be taken in account.
  * logic **required** [productSetVisibilityCriteriaLogicType](#productsetvisibilitycriterialogictype)
  * uncategorized `boolean`: Search product WITHOUT category mapped with the channel. If null the filter will not be taken in account.

### productSetVisibilityCriteriaLogicType
* productSetVisibilityCriteriaLogicType `string` (values: funnel, cumulative): Indicate how you want to combine the filters:

### productStateFilter
* productStateFilter `string` (values: All, Enabled, Disabled): You can filter on the product state.

### productValues
* productValues `object`: The key is the column identifier

### profilePictureInfo
* profilePictureInfo `object`
  * profilePictureSelected **required** [profilePictureSelected](#profilepictureselected)
  * profilePictureUrl [profilePictureUrl](#profilepictureurl)

### profilePictureInfoResponse
* profilePictureInfoResponse `object`
  * links **required** [profilePictureInfoResponseLinks](#profilepictureinforesponselinks)
  * profilePictureInfo **required** [profilePictureInfoWithDefault](#profilepictureinfowithdefault)

### profilePictureInfoResponseLinks
* profilePictureInfoResponseLinks `object`
  * save **required** [links.saveProfilePictureInfoLink](#links.saveprofilepictureinfolink)
  * self **required** [links.getProfilePictureInfoLink](#links.getprofilepictureinfolink)

### profilePictureInfoWithDefault
* profilePictureInfoWithDefault
  * profilePictureSelected **required** [profilePictureSelected](#profilepictureselected)
  * profilePictureUrl [profilePictureUrl](#profilepictureurl)
  * gravatarProfilePictureUrl **required** [gravatarProfilePictureUrl](#gravatarprofilepictureurl)
  * initialsProfilePictureUrl **required** [initialsProfilePictureUrl](#initialsprofilepictureurl)

### profilePictureSelected
* profilePictureSelected `string` (values: gravatar, initials, uploaded): Your profile picture choice about usage of gravatar picture, initials picture or uploaded picture.

### profilePictureUrl
* profilePictureUrl `string`: Indicate the url of your picture profil

### promotionalCodeValidity
* promotionalCodeValidity `string` (values: None, Valid, Invalid, ExpiredOrInactive): Indicate the validaty of the discount

### publicChannelIndex
* publicChannelIndex `object`
  * channels `object`: The key is the country iso code
  * links `object`
    * channelCountryLov [links.GetPublicListOfValuesLink](#links.getpubliclistofvalueslink)
    * channelTypeLov [links.GetPublicListOfValuesLink](#links.getpubliclistofvalueslink)
    * sectorLov [links.GetPublicListOfValuesLink](#links.getpubliclistofvalueslink)
    * self [links.GetChannelsIndexLink](#links.getchannelsindexlink)

### publicListOfValuesResponse
* publicListOfValuesResponse `object`
  * items `array`
    * items [BeezUP.Common.ListOfValueItem](#beezup.common.listofvalueitem)
  * links [publicListOfValuesResponseLinks](#publiclistofvaluesresponselinks)

### publicListOfValuesResponseLinks
* publicListOfValuesResponseLinks `object`
  * self [links.GetPublicListOfValuesLink](#links.getpubliclistofvalueslink)

### publicLovIndex
* publicLovIndex `object`
  * links [publicLovIndexLinks](#publiclovindexlinks)

### publicLovIndexLinks
* publicLovIndexLinks `object`
  * lists [publicLovLinks](#publiclovlinks)
  * self [links.GetPublicLovIndexLink](#links.getpubliclovindexlink)

### publicLovLinks
* publicLovLinks `object`: List of lov link. The key is the list name.

### publicationFeedReporting
* publicationFeedReporting `object`: Publication feed reporting
  * completed `boolean`: Indicates if the publication is completed or not
  * endUtcDate `string`: The feed publication end time (UTC timezone)
  * errorMessage `string`: The error message
  * exportedProducts `integer`: The product count downloaded from BeezUP Export
  * failedItems `integer`: The item count (products or offers) the marketplace flagged as failed
  * feedType **required** [feedType](#feedtype)
  * htmlReportGenerationErrorMessage `string`: The error message if the Html Report generation failed
  * htmlReportUrl `string`: The Url for the Html Report generated
  * processingStatus **required** `string`: The processing status
  * publishedItems `integer`: The item count (products or offers) the marketplace flagged as successful
  * publishedItemsWithWarning `integer`: The item count (products or offers) the marketplace flagged as successful with warnings
  * startUtcDate **required** `string`: The feed publication start time (UTC timezone)
  * transmittedItems `integer`: The item count (products or offers) sent to the marketplace

### publicationReporting
* publicationReporting `object`: Model for a publication reporting, can have multiple feeds
  * feeds **required** `array`: The feeds that were published
    * items [publicationFeedReporting](#publicationfeedreporting)
  * publicationType **required** [publicationType](#publicationtype)

### publicationType
* publicationType `string` (values: PublishProducts, PublishOffers, Unpublish): The Publication Type

### randomProductList
* randomProductList `object`
  * products **required** `array`
    * items [product](#product)

### registerRequest
* registerRequest `object`
  * commercialOwnerUserId `string`: The user id of your commercial in BeezUP.
  * cultureName `string`: Can be null. Default: en-GB. The culture name you want to use. FYI. \
  * email **required** `string`: Your email. We refuse disposable email.
  * password **required** `string`: The password you want to use for your new account. \

### reportAdvancedFilters
* reportAdvancedFilters `object`
  * globalMarginPercent `integer`: If the margin type is 'Global', indicate the percentage of sale price.
  * linkClickToOrderMaxDay `integer`: If the linkOrderType is OnClickDate, indicate the max day to search the click from the order
  * linkClickToOrderType **required** [linkClickToOrderType](#linkclicktoordertype)
  * marginType **required** [marginType](#margintype)
  * onlyDirectSales **required** `boolean`: If true, you will get only direct sales. Otherwise the indirect sales will be included.
  * onlyPaymentValidatedOrders **required** `boolean`: If true, you will get the only the orders with payment validated. Otherwise, you will get all orders validated or not.
  * performanceIndicatorFormula **required** [performanceIndicatorFormula](#performanceindicatorformula)

### reportByCategory
* reportByCategory `object`
  * allProductCount **required** `integer`: The product count for this category. This includes all the products that have been imported and can still have associated clicks and orders.
  * catalogCategoryId **required** [BeezUP.Common.CatalogCategoryId](#beezup.common.catalogcategoryid)
  * catalogCategoryPath [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)
  * catalogProductCount **required** `integer`: The catalog product count for this category. This includes all products that are still present in your imported catalog.
  * clickCount **required** `integer`: The click count for this category
  * cost **required** `number`: The cost for this category
  * enabledProductCount **required** `integer`: The enabled product count for this category. This includes all products that are still present in your imported catalog and have not been disabled via the optimisation feature.
  * links **required** [reportByCategoryLinks](#reportbycategorylinks)
  * margin `number`: The margin for this category
  * orderCount **required** `integer`: The order count for this category
  * performanceIndicator **required** `number`: The performance indicator based on the performance indicator formula indicated in the request for this category
  * roi `number`: The Return On Investment for this category
  * soldProductCount **required** `integer`: The product sold count count for this category
  * totalSales **required** `number`: The total sales for this category

### reportByCategoryLinks
* reportByCategoryLinks `object`
  * disableProducts [links.OptimiseByCategoryLink](#links.optimisebycategorylink)
  * enableProducts [links.OptimiseByCategoryLink](#links.optimisebycategorylink)

### reportByCategoryRequest
* reportByCategoryRequest
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)

### reportByCategoryResponse
* reportByCategoryResponse `object`
  * categories `array`
    * items [reportByCategory](#reportbycategory)
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * links [reportByCategoryResponseLinks](#reportbycategoryresponselinks)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### reportByCategoryResponseLinks
* reportByCategoryResponseLinks
  * disableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * disableProducts [links.OptimiseLink](#links.optimiselink)
  * enableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * enableProducts [links.OptimiseLink](#links.optimiselink)

### reportByChannel
* reportByChannel `object`
  * catalogProductCount **required** `integer`: The catalog product count for this channel
  * channel **required** [BeezUP.Common.ChannelBasicInfo](#beezup.common.channelbasicinfo)
  * clickCount **required** `integer`: The click count for this channel
  * cost **required** `number`: The cost for this channel
  * enabledProductCount **required** `integer`: The enabled product count for this channel
  * links **required** [reportByChannelLinks](#reportbychannellinks)
  * margin `number`: The margin for this channel
  * orderCount **required** `integer`: The order count for this channel
  * performanceIndicator **required** `number`: The performance indicator based on the performance indicator formula indicated in the request for this channel
  * roi `number`: The Return On Investment for this channel
  * soldProductCount **required** `integer`: The product sold count count for this channel
  * totalSales **required** `number`: The total sales for this channel

### reportByChannelLinks
* reportByChannelLinks `object`
  * disableProducts [links.OptimiseByChannelLink](#links.optimisebychannellink)
  * enableProducts [links.OptimiseByChannelLink](#links.optimisebychannellink)

### reportByChannelRequest
* reportByChannelRequest
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)

### reportByChannelResponse
* reportByChannelResponse `object`
  * channels **required** `array`
    * items [reportByChannel](#reportbychannel)
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * links **required** [reportByChannelResponseLinks](#reportbychannelresponselinks)
  * paginationResult **required** [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### reportByChannelResponseLinks
* reportByChannelResponseLinks
  * disableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * disableProducts [links.OptimiseLink](#links.optimiselink)
  * enableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * enableProducts [links.OptimiseLink](#links.optimiselink)

### reportByCommonResponseLinks
* reportByCommonResponseLinks `object`
  * disableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * disableProducts [links.OptimiseLink](#links.optimiselink)
  * enableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * enableProducts [links.OptimiseLink](#links.optimiselink)

### reportByDay
* reportByDay `object`
  * allChannels **required** [reportByDayAllChannels](#reportbydayallchannels)
  * byChannels **required** `array`
    * items [reportByDayByChannel](#reportbydaybychannel)
  * day **required** `string`

### reportByDayAllChannels
* reportByDayAllChannels `object`
  * clickCount **required** `integer`: The click count for this day and all channels
  * cost **required** `number`: The cost for this day and all channels
  * margin **required** `number`: The margin for this day and all channels
  * orderCount **required** `integer`: The order count for this day and all channels
  * performanceIndicator **required** `number`: The performance indicator based on the performance indicator formula indicated in the request for this day and all channels
  * roi **required** `number`: The Return On Investment for this day and all channels
  * soldProductCount **required** `integer`: The product sold count count for this day and all channels
  * totalSales **required** `number`: The total sales for this day and all channels

### reportByDayByChannel
* reportByDayByChannel `object`
  * channel **required** [BeezUP.Common.ChannelBasicInfo](#beezup.common.channelbasicinfo)
  * clickCount **required** `integer`: The click count for this day and this channel
  * cost **required** `number`: The cost for this day and this channel
  * margin **required** `number`: The margin for this day and this channel
  * orderCount **required** `integer`: The order count for this day and this channel
  * performanceIndicator **required** `number`: The performance indicator based on the performance indicator formula indicated in the request for this day and this channel
  * roi **required** `number`: The Return On Investment for this day and this channel
  * soldProductCount **required** `integer`: The product sold count count for this day and this channel
  * totalSales **required** `number`: The total sales for this day and this channel

### reportByDayRequest
* reportByDayRequest `object`
  * advancedFilters [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate **required** `string`: The begin date of the period for the report
  * catalogCategoryId [BeezUP.Common.CatalogCategoryId](#beezup.common.catalogcategoryid)
  * channelIds `array`: Indicate the channel identifier list
    * items [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate **required** `string`: The end date of the period for the report
  * productId [BeezUP.Common.ProductId](#beezup.common.productid)

### reportByDayResponse
* reportByDayResponse `object`
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * days **required** `array`
    * items [reportByDay](#reportbyday)
  * globalPerformanceIndicators **required** `array`
    * items [globalPerformanceIndicatorByChannel](#globalperformanceindicatorbychannel)

### reportByProduct
* reportByProduct `object`
  * channelCount **required** `integer`: The channel count where this product can be enabled
  * clickCount **required** `integer`: The click count for this product
  * cost **required** `number`: The cost for this product
  * enabledOnChannelCount **required** `integer`: The count of channel where this product is enabled
  * links **required** [reportByProductLinks](#reportbyproductlinks)
  * margin `number`: The margin for this product
  * orderCount **required** `integer`: The order count for this product
  * performanceIndicator **required** `number`: The performance indicator based on the performance indicator formula indicated in the request for this product
  * product **required** [BeezUP.Common.ProductBasicInfo](#beezup.common.productbasicinfo)
  * roi `number`: The Return On Investment for this product
  * soldProductCount **required** `integer`: The product sold count count for this product
  * totalSales **required** `number`: The total sales for this product

### reportByProductAllChannelsLinks
* reportByProductAllChannelsLinks `object`
  * disableProductForAllChannels **required** [links.OptimiseByProductLink](#links.optimisebyproductlink)
  * enableProductForAllChannels **required** [links.OptimiseByProductLink](#links.optimisebyproductlink)

### reportByProductLinks
* reportByProductLinks `object`: Depending if the report concerned multiple channels or one channel.
  * allChannelsLinks [reportByProductAllChannelsLinks](#reportbyproductallchannelslinks)
  * oneChannelLinks [reportByProductOneChannelLinks](#reportbyproductonechannellinks)

### reportByProductOneChannelLinks
* reportByProductOneChannelLinks `object`: If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
  * disableProductForOneChannel **required** [links.OptimiseByProductLink](#links.optimisebyproductlink)
  * enableProductForOneChannel **required** [links.OptimiseByProductLink](#links.optimisebyproductlink)
  * productInfo **required** [links.GetChannelCatalogProductInfoLink](#links.getchannelcatalogproductinfolink)

### reportByProductRequest
* reportByProductRequest
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * orderBy [performanceIndicatorType](#performanceindicatortype)
  * orderByDirection [orderByDirection](#orderbydirection)
  * pageNumber [BeezUP.Common.PageNumber](#beezup.common.pagenumber)
  * pageSize [BeezUP.Common.PageSize](#beezup.common.pagesize)
  * productColumnFilters [productColumnFilters](#productcolumnfilters)
  * productColumnsToDisplay [productColumnsToDisplay](#productcolumnstodisplay)
  * productState **required** [productStateFilter](#productstatefilter)

### reportByProductResponse
* reportByProductResponse `object`
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * links **required** [reportByProductResponseLinks](#reportbyproductresponselinks)
  * paginationResult **required** [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)
  * products **required** `array`
    * items [reportByProduct](#reportbyproduct)

### reportByProductResponseLinks
* reportByProductResponseLinks
  * disableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * disableProducts [links.OptimiseLink](#links.optimiselink)
  * enableAllProducts [links.OptimiseAllLink](#links.optimisealllink)
  * enableProducts [links.OptimiseLink](#links.optimiselink)

### reportFilter
* reportFilter `object`
  * links [reportFilterLinks](#reportfilterlinks)
  * parameters **required** [reportFilterParameters](#reportfilterparameters)
  * reportFilterId **required** `string`: Report filter identifier
  * reportFilterName **required** `string`: Report filter name

### reportFilterCommonParameters
* reportFilterCommonParameters `object`: Contains common filter parameters
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)

### reportFilterHeader
* reportFilterHeader `object`
  * links **required** [reportFilterHeaderLinks](#reportfilterheaderlinks)
  * reportFilterId **required** `string`: Report filter identifier
  * reportFilterName **required** `string`: Report filter name
  * reportType **required** [reportType](#reporttype)

### reportFilterHeaderLinks
* reportFilterHeaderLinks `object`
  * self **required** [links.GetReportFilterLink](#links.getreportfilterlink)

### reportFilterLinks
* reportFilterLinks `object`: Indicates the actions you can do on this report filter
  * delete [links.DeleteReportFilterLink](#links.deletereportfilterlink)
  * save [links.SaveReportFilterLink](#links.savereportfilterlink)
  * self [links.GetReportFilterLink](#links.getreportfilterlink)

### reportFilterList
* reportFilterList `object`
  * links **required** [reportFiltersLinks](#reportfilterslinks)
  * reportFilters **required** `array`
    * items [reportFilterHeader](#reportfilterheader)

### reportFilterParameters
* reportFilterParameters
  * advancedFilters **required** [reportAdvancedFilters](#reportadvancedfilters)
  * beginPeriodUtcDate `string`: The begin date period you want to get the report. It's required only in case of custom period type !
  * categoryFilter [BeezUP.Common.CatalogCategoryFilter](#beezup.common.catalogcategoryfilter)
  * channelId [BeezUP.Common.ChannelId](#beezup.common.channelid)
  * endPeriodUtcDate `string`: The end date period you want to get the report. It's required only in case of custom period type !
  * performanceIndicatorFilters `array`
    * items [performanceIndicatorFilter](#performanceindicatorfilter)
  * periodType **required** [reportFilterPeriodType](#reportfilterperiodtype)
  * productColumnFilters [productColumnFilters](#productcolumnfilters)
  * productColumnsToDisplay [productColumnsToDisplay](#productcolumnstodisplay)
  * productState [productStateFilter](#productstatefilter)
  * reportType **required** [reportType](#reporttype)

### reportFilterPeriodType
* reportFilterPeriodType `string` (values: Custom, Yesterday, Last7Days, LastWeek, ThisMonth, Last30Days, LastMonth, Last60Days, Last90Days, Last3Months): Indicates the period type we want use for the report filter

### reportFiltersLinks
* reportFiltersLinks `object`
  * save **required** [links.SaveReportFilterLink](#links.savereportfilterlink)
  * self **required** [links.GetReportFiltersLink](#links.getreportfilterslink)

### reportType
* reportType `string` (values: ByChannel, ByCategory, ByProduct, ByDay): The report type

### rule
* rule `object`
  * actionName **required** [optimisationActionName](#optimisationactionname)
  * enabled **required** `boolean`: Is the rule enabled
  * lastExecutionStatus [ruleLastExecutionStatus](#rulelastexecutionstatus)
  * lastExecutionUtcDate `string`: The utc date of the last execution
  * links **required** [ruleLinks](#rulelinks)
  * position **required** `integer`: Rule execution position
  * reportFilterId **required** `string`: Report filter identifier linked to the rule
  * ruleId **required** `string`: The identifier of the rule
  * ruleName **required** `string`: The name of the rule
  * validityEndUtcDate `string`: Rule validity end utc date
  * validityStartUtcDate `string`: Rule validity start utc date

### ruleExecutionReporting
* ruleExecutionReporting `object`
  * activeAffectedProductCount `integer`: The count of affected active products
  * affectedChannelCount `integer`: The count of affected Channels across all products
  * affectedProductCount `integer`: The count of affected products, active or not
  * completedUtcDate `string`: The completed utc date of the execution of the rule
  * errorType [ruleExecutionReportingErrorType](#ruleexecutionreportingerrortype)
  * executionSource **required** [ruleExecutionReportingExecutionSource](#ruleexecutionreportingexecutionsource)
  * links [ruleExecutionReportingLinks](#ruleexecutionreportinglinks)
  * optimisationActionName [optimisationActionName](#optimisationactionname)
  * reportUrl `string`: The url for the excel report for this execution
  * ruleId **required** `string`: The rule identifier
  * ruleName **required** `string`: The name of the rule
  * startedUtcDate `string`: The start utc date of the execution of the rule
  * status **required** [ruleExecutionReportingStatus](#ruleexecutionreportingstatus)
  * userId `string`: The userId that executed the rule if any

### ruleExecutionReportingErrorType
* ruleExecutionReportingErrorType `string` (values: ChannelNotPresent, StoreIsInSystemBlockState): The error type for this execution if any

### ruleExecutionReportingExecutionSource
* ruleExecutionReportingExecutionSource `string` (values: Scheduler, User): The requestor type for the execution of the rule

### ruleExecutionReportingLinks
* ruleExecutionReportingLinks `object`: Links to retrieve/action on this rule execution
  * rule [links.GetRuleLink](#links.getrulelink)

### ruleExecutionReportingStatus
* ruleExecutionReportingStatus `string` (values: InProgress, Succeeded, AlreadyInProgress, Aborted, Failed, Unknown): The status of the execution of the rule

### ruleExecutionReportings
* ruleExecutionReportings `object`
  * executions `array`: The rules executions history
    * items [ruleExecutionReporting](#ruleexecutionreporting)
  * paginationResult [BeezUP.Common.PaginationResult](#beezup.common.paginationresult)

### ruleLastExecutionStatus
* ruleLastExecutionStatus `string` (values: InProgress, Succeeded, Failed, Unknown): The status of the last execution

### ruleLinks
* ruleLinks `object`: Links to retrieve/action on other entities
  * delete [links.DeleteRuleLink](#links.deleterulelink)
  * disable [links.DisableRuleLink](#links.disablerulelink)
  * enable [links.EnableRuleLink](#links.enablerulelink)
  * movedown [links.MoveDownRuleLink](#links.movedownrulelink)
  * moveup [links.MoveUpRuleLink](#links.moveuprulelink)
  * reportFilter [links.GetReportFilterLink](#links.getreportfilterlink)
  * run [links.RunRuleLink](#links.runrulelink)
  * self **required** [links.GetRuleLink](#links.getrulelink)
  * update [links.UpdateRuleLink](#links.updaterulelink)

### ruleList
* ruleList `object`
  * links **required** [ruleListLinks](#rulelistlinks)
  * rules **required** `array`: Rule list
    * items [rule](#rule)

### ruleListLinks
* ruleListLinks `object`: Links to know if the user can create a rule or run all rules
  * create **required** [links.CreateRuleLink](#links.createrulelink)
  * history **required** [links.GetRulesExecutionsLink](#links.getrulesexecutionslink)
  * run **required** [links.RunRulesLink](#links.runruleslink)
  * self **required** [links.GetRulesLink](#links.getruleslink)

### saveReportFilterRequest
* saveReportFilterRequest `object`
  * parameters **required** [reportFilterParameters](#reportfilterparameters)
  * reportFilterName **required** `string`: Report filter name

### saveStoreAlertRequest
* saveStoreAlertRequest `object`
  * enabled **required** [alertEnabled](#alertenabled)
  * properties `array`: Properties to configure the alert
    * items [storeAlertProperty](#storealertproperty)

### saveStoreAlertsRequest
* saveStoreAlertsRequest `object`: The key is the alert identifier (alertId)

### scheduleAutoImportRequest
* scheduleAutoImportRequest `object`: The message request to schedule the auto import
  * localTimeZoneName `string`: If null the local time zone name will be "Romance Standard Time"
  * schedules **required** `array`: Indicate the time span you want to import your catalog. (i.e. "21:00:00" to import your catalog at 9PM)
    * items `string`

### schedulingType
* schedulingType `string` (values: Schedule, Interval): Indicate the scheduling type. Schedule or Interval. We recommand you to use interval for a better reporting.

### setChannelCatalogMarketplaceSettingsRequest
* setChannelCatalogMarketplaceSettingsRequest `object`: The channel catalog marketplace settings to save
  * settings **required** [channelCatalogMarketplaceSettingArray](#channelcatalogmarketplacesettingarray)

### setMerchantOrderInfoListRequest
* setMerchantOrderInfoListRequest `object`
  * order_MerchantECommerceSoftwareName **required** [order_MerchantECommerceSoftwareName](#order_merchantecommercesoftwarename)
  * order_MerchantECommerceSoftwareVersion **required** [order_MerchantECommerceSoftwareVersion](#order_merchantecommercesoftwareversion)
  * orders **required** `array`
    * items [setMerchantOrderInfoListRequestItem](#setmerchantorderinfolistrequestitem)

### setMerchantOrderInfoListRequestItem
* setMerchantOrderInfoListRequestItem
  * accountId **required** [accountId](#accountid)
  * beezUPOrderId **required** [beezUPOrderId](#beezuporderid)
  * marketplaceTechnicalCode **required** [BeezUP.Common.MarketplaceTechnicalCode](#beezup.common.marketplacetechnicalcode)
  * order_MerchantOrderId **required** [order_MerchantOrderId](#order_merchantorderid)

### setMerchantOrderInfoRequest
* setMerchantOrderInfoRequest `object`
  * order_MerchantECommerceSoftwareName **required** [order_MerchantECommerceSoftwareName](#order_merchantecommercesoftwarename)
  * order_MerchantECommerceSoftwareVersion **required** [order_MerchantECommerceSoftwareVersion](#order_merchantecommercesoftwareversion)
  * order_MerchantOrderId **required** [order_MerchantOrderId](#order_merchantorderid)

### sourceType
* sourceType `string` (values: Api, Go): Indicates the origin of the operation

### standardOffer
* standardOffer `object`
  * additionalClickPrice `number`: The additional click price
  * currencyCode [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * fixedPrice `number`: The fixed price of the offer
  * functionalities `array`
    * items [offerFunctionality](#offerfunctionality)
  * includedClick `integer`: The included click
  * isMostPopular `boolean`: UI purpose. Is the offer is the most popular
  * isOldOffer `boolean`: Is an old offer
  * links **required** [standardOfferLinks](#standardofferlinks)
  * name **required** `string`: The offer name
  * offerId **required** `integer`: The offer Id
  * position `integer`: UI purpose. The position of the offer

### standardOfferLinks
* standardOfferLinks `object`
  * getOffer [links.getOfferLink](#links.getofferlink)

### standardOffers
* standardOffers `object`
  * functionalities **required** `array`: All functionalities...
    * items [functionality](#functionality)
  * links **required** [standardOffersLinks](#standardofferslinks)
  * offers **required** `array`: All standard offers
    * items [standardOffer](#standardoffer)

### standardOffersLinks
* standardOffersLinks `object`
  * self **required** [links.getStandardOffersLink](#links.getstandardofferslink)

### startManualImportRequest
* startManualImportRequest `object`: The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
  * duplicateProductSkuConfiguration [duplicateProductValueConfiguration](#duplicateproductvalueconfiguration)
  * input **required** [inputConfiguration](#inputconfiguration)

### store
* store `object`
  * countryIsoCodeAlpha3 **required** [storeCountryIsoCodeAlpha3](#storecountryisocodealpha3)
  * creationUtcDate **required** `string`: The creation date of the store
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * links **required** [storeLinks](#storelinks)
  * name **required** [storeName](#storename)
  * ownerUserId **required** `string`: The user id of the owner of the store
  * sectors **required** [storeSectors](#storesectors)
  * shareCount **required** `integer`: The share count related to this store
  * status **required** [storeStatus](#storestatus)
  * storeId **required** [BeezUP.Common.StoreId](#beezup.common.storeid)
  * url **required** [storeUrl](#storeurl)
  * userRole **required** [storeUserRole](#storeuserrole)

### storeAlert
* storeAlert `object`
  * alertId **required** [alertId](#alertid)
  * alertName **required** [alertName](#alertname)
  * enabled **required** [alertEnabled](#alertenabled)
  * links **required** [storeAlertLinks](#storealertlinks)
  * properties `array`: The current configuration properties of the alert
    * items [storeAlertPropertyInfo](#storealertpropertyinfo)

### storeAlertLinks
* storeAlertLinks `object`: The different actions you can make on this alert
  * save [links.saveStoreAlertsLink](#links.savestorealertslink)

### storeAlertProperty
* storeAlertProperty `object`
  * propertyId **required** [alertPropertyId](#alertpropertyid)
  * propertyValue **required** [alertPropertyValue](#alertpropertyvalue)

### storeAlertPropertyInfo
* storeAlertPropertyInfo
  * propertyId **required** [alertPropertyId](#alertpropertyid)
  * propertyValue **required** [alertPropertyValue](#alertpropertyvalue)
  * propertyName **required** `string`: The property name of the alert
  * propertyValidationExpression `string`: The regular expression related to the alert property

### storeAlerts
* storeAlerts `object`
  * alerts `array`
    * items [storeAlert](#storealert)

### storeCount
* storeCount `integer`: The store count you want to have in your contract.

### storeCountryIsoCodeAlpha3
* storeCountryIsoCodeAlpha3 `string`: The country iso code alpha 3 based on the list of values /user/lov/StoreCountry

### storeLinks
* storeLinks `object`: The action links for this store
  * deleteStore [links.deleteStoreLink](#links.deletestorelink)
  * self [links.getStoreLink](#links.getstorelink)
  * share [links.shareStoreLink](#links.sharestorelink)
  * shares [links.getStoreSharesLink](#links.getstoreshareslink)
  * updateStore [links.updateStoreLink](#links.updatestorelink)

### storeList
* storeList `object`
  * links **required** [storeListLinks](#storelistlinks)
  * stores **required** `array`
    * items [store](#store)

### storeListLinks
* storeListLinks `object`: The action links you can do globally on stores
  * createStore [links.createStoreLink](#links.createstorelink)
  * self [links.getStoresLink](#links.getstoreslink)

### storeName
* storeName `string`: The store name. Must be unique.

### storeSector
* storeSector `string`: The store's sector based on the list of values /user/lov/ParamSector

### storeSectors
* storeSectors `array`: The store's sectors based on the list of values /user/lov/ParamSector
  * items [storeSector](#storesector)

### storeShare
* storeShare `object`
  * links **required** [storeShareLinks](#storesharelinks)
  * userId **required** [BeezUP.Common.UserId](#beezup.common.userid)
  * userRole **required** [storeUserRole](#storeuserrole)

### storeShareLinks
* storeShareLinks `object`: The different actions you can make on this store share
  * deleteShare [links.deleteStoreShareLink](#links.deletestoresharelink)

### storeShares
* storeShares `object`
  * links **required** [storeSharesLinks](#storeshareslinks)
  * shares **required** `array`
    * items [storeShare](#storeshare)

### storeSharesLinks
* storeSharesLinks `object`
  * self [links.getStoreSharesLink](#links.getstoreshareslink)
  * share [links.shareStoreLink](#links.sharestorelink)

### storeStatus
* storeStatus `string` (values: Active, SystemBlocked, UserBlocked): The store status

### storeTrackingStatus
* storeTrackingStatus `object`
  * clickSynchronizationUtcDate `string`: The utc date of the latest synchronized click
  * marketplaceOrderSynchonizationUtcDate `string`: The utc date of the latest synchronized marketplace order
  * orderSynchonizationUtcDate `string`: The utc date of the latest synchronized order

### storeUrl
* storeUrl `string`: The url of your store

### storeUserRole
* storeUserRole `string` (values: Owner, User): Indicates the role can have a user on a store.

### terminateContract
* terminateContract `object`: The contract termination info
  * contractTerminationReason [contractTerminationReason](#contractterminationreason)
  * contractTerminationReasonType **required** [contractTerminationReasonType](#contractterminationreasontype)

### trackedClick
* trackedClick `object`
  * channel **required** [BeezUP.Common.ChannelBasicInfo](#beezup.common.channelbasicinfo)
  * ipAddress **required** `string`: The user IP address for the click
  * product **required** [BeezUP.Common.ProductBasicInfo](#beezup.common.productbasicinfo)
  * utcDate **required** `string`: The utc date of the click

### trackedClicks
* trackedClicks `object`
  * clicks **required** `array`
    * items [trackedClick](#trackedclick)

### trackedExternalOrder
* trackedExternalOrder `object`
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * merchantOrderId **required** `string`: The merchant order identifier
  * paymentValidated **required** `boolean`: Indicate if the payment of this external order has been validated or not
  * products `array`: Can be null. The product list included in the external order
    * items [trackedExternalOrderProduct](#trackedexternalorderproduct)
  * totalAmount **required** `number`: The total amount of the external order
  * utcDate **required** `string`: The utc date of the external order
  * visitorId `string`: Can be null. The visitor identifier of the external order

### trackedExternalOrderProduct
* trackedExternalOrderProduct `object`
  * margin `string`: The product's margin for the external order. This property is voluntarily a string because the value could be an invalid one
  * productActive `boolean`: We tried to get the catalog product if it's still active based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
  * productId `string`: We tried to get the catalog product identifier based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
  * productImageUrl `string`: We tried to get the catalog product image Url based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
  * productSku **required** `string`: The product sku received for the external order
  * productTitle `string`: We tried to get the catalog product title based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
  * quantity `string`: The quantity of this product for the external order. This property is voluntarily a string because the value could be an invalid one
  * unitPrice `string`: The product's unit price for the external order. This property is voluntarily a string because the value could be an invalid one.

### trackedExternalOrders
* trackedExternalOrders `object`
  * externalOrders **required** `array`
    * items [trackedExternalOrder](#trackedexternalorder)

### trackedOrder
* trackedOrder `object`
  * channel **required** [BeezUP.Common.ChannelBasicInfo](#beezup.common.channelbasicinfo)
  * currencyCode **required** [BeezUP.Common.CurrencyCode](#beezup.common.currencycode)
  * merchantOrderId **required** `string`: The merchant order identifier
  * paymentValidated **required** `boolean`: Indicate if the payment of this order has been validated or not
  * products **required** `array`: The product list of this order
    * items [trackedOrderProduct](#trackedorderproduct)
  * totalAmount **required** `number`: The total amount of the order
  * utcDate **required** `string`: The utc date of the order

### trackedOrderProduct
* trackedOrderProduct
  * productExists **required** `boolean`: Indicates if the product still exists in your catalog
  * productId **required** `string`: The product identifier
  * productImageUrl `string`: The product image Url
  * productSku **required** `string`: The product SKU
  * productTitle **required** `string`: The product tile
  * margin **required** `number`: The product's margin for the order
  * quantity **required** `number`: The quantity of this product for the order
  * unitPrice **required** `number`: The product's unit price for the order

### trackedOrders
* trackedOrders `object`
  * orders **required** `array`
    * items [trackedOrder](#trackedorder)

### trackingStatus
* trackingStatus `object`
  * clickSynchronizationUtcDate **required** `string`: The utc date of the latest synchronized click
  * marketplaceOrderSynchonizationUtcDate **required** `string`: The utc date of the latest synchronized marketplace order
  * orderSynchonizationUtcDate **required** `string`: The utc date of the latest synchronized order

### type
* type `string` (values: string, integer, boolean, number): The Data Type

### unmapCategoryRequest
* unmapCategoryRequest `object`: The request message to unmap a catalog category path to a channel category path
  * catalogCategoryPath **required** [BeezUP.Common.CatalogCategoryPath](#beezup.common.catalogcategorypath)

### updateRuleRequest
* updateRuleRequest `object`: This update will replace the following values.
  * endUtcDate `string`: Not required. The end validity utc date of the rule
  * ruleName **required** `string`: The name of the rule
  * startUtcDate `string`: Not required. The start validity utc date of the rule.

### updateStoreRequest
* updateStoreRequest `object`
  * name **required** [storeName](#storename)
  * sectors **required** [storeSectors](#storesectors)
  * url **required** [storeUrl](#storeurl)

### upgradeOfferRequired
* upgradeOfferRequired `object`: The message contains the offer identifier required to execute this operation
  * offerId **required** `integer`: The offer identifier required

### userColumName
* userColumName `string`: Column named by the user

### userFriendInfo
* userFriendInfo `object`
  * company **required** `string`: Your friend's user company name
  * countryIsoCodeAlpha3 **required** [friendCountryIsoCodeAlpha3](#friendcountryisocodealpha3)
  * email **required** [friendEmail](#friendemail)
  * firstName **required** `string`: Your friend's user first name
  * lastName **required** `string`: Your friend's user last name
  * profilePictureUrl [friendProfilePictureUrl](#friendprofilepictureurl)
  * userId **required** `string`: Your friend's user id
  * whatIDo `string`: Your friend's user occupation in his company

### userListOfValuesResponse
* userListOfValuesResponse `object`
  * items `array`
    * items [BeezUP.Common.ListOfValueItem](#beezup.common.listofvalueitem)
  * links [userListOfValuesResponseLinks](#userlistofvaluesresponselinks)

### userListOfValuesResponseLinks
* userListOfValuesResponseLinks `object`
  * self [links.GetUserListOfValuesLink](#links.getuserlistofvalueslink)

### userLovIndex
* userLovIndex `object`
  * links [userLovIndexLinks](#userlovindexlinks)

### userLovIndexLinks
* userLovIndexLinks `object`
  * lists [userLovLinks](#userlovlinks)
  * self [links.GetUserLovIndexLink](#links.getuserlovindexlink)

### userLovLinks
* userLovLinks `object`: List of lov link. The key is the list name.

### variableModelInfo
* variableModelInfo `object`: Internal usage: Old offer type. Describe the fix and variable model information
  * clickIncludedAndVariablePrices **required** `array`: Click included with variable pricing information
    * items [clickIncludedAndVariablePrice](#clickincludedandvariableprice)
  * overflowClickCount **required** `integer`: The overflow click count
  * overflowClickPrice **required** `number`: The overflow click price

### vatNumber
* vatNumber `string`: Your company VATNumber. Used for french company. This number is checked with official web service before being saved.

### whatIDo
* whatIDo `string`: Your role in your company


