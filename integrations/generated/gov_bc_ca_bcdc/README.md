# @datafire/gov_bc_ca_bcdc

Client library for BC Data Catalogue API

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_bcdc
```
```js
let gov_bc_ca_bcdc = require('@datafire/gov_bc_ca_bcdc').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  internalApiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This API provides live access to the BC Data Catalogue. Further documentation on the API is available from http://docs.ckan.org/en/latest/ Confirm the version of the API available from the catalogue by requesting https://catalogue.data.gov.bc.ca/api/3/action/status_show. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
gov_bc_ca_bcdc.oauthCallback({
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
gov_bc_ca_bcdc.oauthRefresh(null, context)
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

### action.organization_activity_list.get
Return an organization's activity stream


```js
gov_bc_ca_bcdc.action.organization_activity_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the organization

#### Output
*Output schema unknown*

### action.organization_activity_list_html.get
Return an organization's activity stream as HTML


```js
gov_bc_ca_bcdc.action.organization_activity_list_html.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the organization

#### Output
*Output schema unknown*

### action.organization_autocomplete.get
Return a list of organization names that contain a string


```js
gov_bc_ca_bcdc.action.organization_autocomplete.get({}, context)
```

#### Input
* input `object`
  * q `string`: The string to search for
  * limit `integer`: The maximum number of organizations to return (optional)

#### Output
*Output schema unknown*

### action.organization_follower_count.get
Return the number of followers of an organization


```js
gov_bc_ca_bcdc.action.organization_follower_count.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the organization

#### Output
*Output schema unknown*

### action.organization_follower_list.get
Return a list of users that are following a given organization


```js
gov_bc_ca_bcdc.action.organization_follower_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the organization

#### Output
*Output schema unknown*

### action.organization_list.get
Returns the names of all indexed organizations


```js
gov_bc_ca_bcdc.action.organization_list.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: The offset (index) of the first organizations to return
  * limit `integer`: The number of organizations to be returned per page

#### Output
*Output schema unknown*

### action.organization_list_for_user.get
Return the organizations that the user has a given permission for


```js
gov_bc_ca_bcdc.action.organization_list_for_user.get({}, context)
```

#### Input
* input `object`
  * permission `string`: The permission the user has against the returned organization

#### Output
*Output schema unknown*

### action.organization_revision_list.get
Return an organization's revisions


```js
gov_bc_ca_bcdc.action.organization_revision_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The name or id of the organization

#### Output
*Output schema unknown*

### action.organization_show.get
Return the details of an organization


```js
gov_bc_ca_bcdc.action.organization_show.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the organization
  * include_datasets `boolean`: include a list of the organization's datasets

#### Output
*Output schema unknown*

### action.package_activity_list.get
Returns a package's activity stream


```js
gov_bc_ca_bcdc.action.package_activity_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the package
  * offset `integer`: Where to start getting activity items from
  * limit `integer`: The maximum number of activities to return

#### Output
*Output schema unknown*

### action.package_activity_list_html.get
The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.


```js
gov_bc_ca_bcdc.action.package_activity_list_html.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the package
  * offset `integer`: Where to start getting activity items from
  * limit `integer`: The maximum number of activities to return

#### Output
*Output schema unknown*

### action.package_autocomplete.get
Return a list of datasets that match a string


```js
gov_bc_ca_bcdc.action.package_autocomplete.get({}, context)
```

#### Input
* input `object`
  * q `string`: The string to query
  * limit `integer`: The maximum number of resource formats to return

#### Output
*Output schema unknown*

### action.package_list.get
Returns the names of all indexed packages (datasets)


```js
gov_bc_ca_bcdc.action.package_list.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: The offset (index) of the first package to return
  * limit `integer`: The number of packages to be returned per page

#### Output
*Output schema unknown*

### action.package_relationships_list.get
Return a dataset's relationships


```js
gov_bc_ca_bcdc.action.package_relationships_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the first package
  * id2 `string`: The id or name of the second package
  * rel `string`: relationship as string

#### Output
*Output schema unknown*

### action.package_revision_list.get
Return a dataset's revision as a list of dictionaries


```js
gov_bc_ca_bcdc.action.package_revision_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id or name of the dataset

#### Output
*Output schema unknown*

### action.package_search.get
Searches for packages (datasets) matching the specified query terms


```js
gov_bc_ca_bcdc.action.package_search.get({}, context)
```

#### Input
* input `object`
  * q `string`: A query string

#### Output
*Output schema unknown*

### action.package_show.get
Returns metadata about the package (dataset) corresponding to the specified unique name


```js
gov_bc_ca_bcdc.action.package_show.get({}, context)
```

#### Input
* input `object`
  * id `string`: The package name

#### Output
*Output schema unknown*

### action.related_list.get
Returns a dataset's related items.


```js
gov_bc_ca_bcdc.action.related_list.get({}, context)
```

#### Input
* input `object`
  * id `string`: id or name of the dataset (optional)
  * dataset `string`: Dataset dictionary of the dataset (optional)
  * type_filter `string`: The type of related item to show (optional)
  * sort `string`: The order to sort the related items in
  * featured `string`: whether or not to restrict the results to only featured items

#### Output
*Output schema unknown*

### action.resource_search.get
Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.


```js
gov_bc_ca_bcdc.action.resource_search.get({}, context)
```

#### Input
* input `object`
  * query `string`: The search criteria string or list of strings of the form ``{field}:{term1}``
  * fields `string`: Depreciated
  * order_by `string`: A field on the resource model that orders the results
  * offset `integer`: Apply an offset to the query
  * limit `integer`: Apply a limit to the query

#### Output
*Output schema unknown*

### action.resource_show.get
Return the metadata of a resource


```js
gov_bc_ca_bcdc.action.resource_show.get({}, context)
```

#### Input
* input `object`
  * id `string`: The id of the resource
  * include_tracking `boolean`: Add tracking information to dataset

#### Output
*Output schema unknown*

### action.status_show.get
Returns the site status


```js
gov_bc_ca_bcdc.action.status_show.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### action.tag_list.get
Returns the names of all indexed tags


```js
gov_bc_ca_bcdc.action.tag_list.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: The offset (index) of the first tag to return
  * limit `integer`: The number of tags to be returned per page

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
