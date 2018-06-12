# @datafire/azure_applicationinsights_favorites_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_favorites_api
```
```js
let azure_applicationinsights_favorites_api = require('@datafire/azure_applicationinsights_favorites_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_favorites_api.Favorites_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for favorites.

## Actions

### Favorites_List
Gets a list of favorites defined within an Application Insights component.


```js
azure_applicationinsights_favorites_api.Favorites_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * favoriteType `string` (values: shared, user): The type of favorite. Value can be either shared or user.
  * sourceType `string` (values: retention, notebook, sessions, events, userflows, funnel, impact, segmentation): Source type of favorite to return. When left out, the source type defaults to 'other' (not present in this enum).
  * canFetchContent `boolean`: Flag indicating whether or not to return the full content for each applicable favorite. If false, only return summary content for favorites.
  * tags `array`: Tags that must be present on each favorite returned.

#### Output
* output `array`
  * items [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)

### Favorite_Delete
Remove a favorite that is associated to an Application Insights component.


```js
azure_applicationinsights_favorites_api.Favorite_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "favoriteId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * favoriteId **required** `string`: The Id of a specific favorite defined in the Application Insights component

#### Output
*Output schema unknown*

### Favorite_Get
Get a single favorite by its FavoriteId, defined within an Application Insights component.


```js
azure_applicationinsights_favorites_api.Favorite_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "favoriteId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * favoriteId **required** `string`: The Id of a specific favorite defined in the Application Insights component

#### Output
* output [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)

### Favorite_Update
Updates a favorite that has already been added to an Application Insights component.


```js
azure_applicationinsights_favorites_api.Favorite_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "favoriteId": "",
  "favoriteProperties": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * favoriteId **required** `string`: The Id of a specific favorite defined in the Application Insights component
  * favoriteProperties **required** [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)

#### Output
* output [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)

### Favorite_Add
Adds a new favorites to an Application Insights component.


```js
azure_applicationinsights_favorites_api.Favorite_Add({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "favoriteId": "",
  "favoriteProperties": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * favoriteId **required** `string`: The Id of a specific favorite defined in the Application Insights component
  * favoriteProperties **required** [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)

#### Output
* output [ApplicationInsightsComponentFavorite](#applicationinsightscomponentfavorite)



## Definitions

### ApplicationInsightsComponentFavorite
* ApplicationInsightsComponentFavorite `object`: Properties that define a favorite that is associated to an Application Insights component.
  * Category `string`: Favorite category, as defined by the user at creation time.
  * Config `string`: Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
  * FavoriteId `string`: Internally assigned unique id of the favorite definition.
  * FavoriteType `string` (values: shared, user): Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * IsGeneratedFromTemplate `boolean`: Flag denoting wether or not this favorite was generated from a template.
  * Name `string`: The user-defined name of the favorite.
  * SourceType `string`: The source of the favorite definition.
  * Tags `array`: A list of 0 or more tags that are associated with this favorite definition
    * items `string`
  * TimeModified `string`: Date and time in UTC of the last modification that was made to this favorite definition.
  * UserId `string`: Unique user id of the specific user that owns this favorite.
  * Version `string`: This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.


