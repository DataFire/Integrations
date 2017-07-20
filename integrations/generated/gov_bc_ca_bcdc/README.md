# @datafire/gov_bc_ca_bcdc

Client library for BC Data Catalogue

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_bcdc
```

```js
let datafire = require('datafire');
let gov_bc_ca_bcdc = require('@datafire/gov_bc_ca_bcdc').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  internalApiKey: "",
}
let context = new datafire.Context({
  accounts: {
    gov_bc_ca_bcdc: account,
  }
})


gov_bc_ca_bcdc.action.tag_list.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This API provides live access to the BC Data Catalogue. Further documentation on the API is available from http://docs.ckan.org/en/latest/ Confirm the version of the API available from the catalogue by requesting https://catalogue.data.gov.bc.ca/api/3/action/status_show 

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
gov_bc_ca_bcdc.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
gov_bc_ca_bcdc.oauthRefresh(null, context)
```


### action.organization_activity_list.get
Return an organization's activity stream


```js
gov_bc_ca_bcdc.action.organization_activity_list.get({}, context)
```


### action.organization_activity_list_html.get
Return an organization's activity stream as HTML


```js
gov_bc_ca_bcdc.action.organization_activity_list_html.get({}, context)
```


### action.organization_autocomplete.get
Return a list of organization names that contain a string


```js
gov_bc_ca_bcdc.action.organization_autocomplete.get({}, context)
```


### action.organization_follower_count.get
Return the number of followers of an organization


```js
gov_bc_ca_bcdc.action.organization_follower_count.get({}, context)
```


### action.organization_follower_list.get
Return a list of users that are following a given organization


```js
gov_bc_ca_bcdc.action.organization_follower_list.get({}, context)
```


### action.organization_list.get
Returns the names of all indexed organizations


```js
gov_bc_ca_bcdc.action.organization_list.get({}, context)
```


### action.organization_list_for_user.get
Return the organizations that the user has a given permission for


```js
gov_bc_ca_bcdc.action.organization_list_for_user.get({}, context)
```


### action.organization_revision_list.get
Return an organization's revisions


```js
gov_bc_ca_bcdc.action.organization_revision_list.get({}, context)
```


### action.organization_show.get
Return the details of an organization


```js
gov_bc_ca_bcdc.action.organization_show.get({}, context)
```


### action.package_activity_list.get
Returns a package's activity stream


```js
gov_bc_ca_bcdc.action.package_activity_list.get({}, context)
```


### action.package_activity_list_html.get
The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.


```js
gov_bc_ca_bcdc.action.package_activity_list_html.get({}, context)
```


### action.package_autocomplete.get
Return a list of datasets that match a string


```js
gov_bc_ca_bcdc.action.package_autocomplete.get({}, context)
```


### action.package_list.get
Returns the names of all indexed packages (datasets)


```js
gov_bc_ca_bcdc.action.package_list.get({}, context)
```


### action.package_relationships_list.get
Return a dataset's relationships


```js
gov_bc_ca_bcdc.action.package_relationships_list.get({}, context)
```


### action.package_revision_list.get
Return a dataset's revision as a list of dictionaries


```js
gov_bc_ca_bcdc.action.package_revision_list.get({}, context)
```


### action.package_search.get
Searches for packages (datasets) matching the specified query terms


```js
gov_bc_ca_bcdc.action.package_search.get({}, context)
```


### action.package_show.get
Returns metadata about the package (dataset) corresponding to the specified unique name


```js
gov_bc_ca_bcdc.action.package_show.get({}, context)
```


### action.related_list.get
Returns a dataset's related items.


```js
gov_bc_ca_bcdc.action.related_list.get({}, context)
```


### action.resource_search.get
Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.


```js
gov_bc_ca_bcdc.action.resource_search.get({}, context)
```


### action.resource_show.get
Return the metadata of a resource


```js
gov_bc_ca_bcdc.action.resource_show.get({}, context)
```


### action.status_show.get
Returns the site status


```js
gov_bc_ca_bcdc.action.status_show.get(null, context)
```


### action.tag_list.get
Returns the names of all indexed tags


```js
gov_bc_ca_bcdc.action.tag_list.get({}, context)
```


