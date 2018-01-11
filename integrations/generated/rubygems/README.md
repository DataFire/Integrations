# @datafire/rubygems

Client library for Ruby Gems

## Installation and Usage
```bash
npm install --save @datafire/rubygems
```
```js
let rubygems = require('@datafire/rubygems').create();

rubygems.gems.name.format.get({}).then(data => {
  console.log(data);
})
```

## Description

Interact with RubyGems.org to query and create gems, mange owners and more.

## Actions

### gems.name.format.get
Returns some basic information about the given gem.


```js
rubygems.gems.name.format.get({
  "name": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### search.format.get
Submit a search to Gemcutter for active gems, just like a search query on the site.


```js
rubygems.search.format.get({
  "format": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.
  * query **required** `string`: Query to search for.

#### Output
*Output schema unknown*

### gems.format.get
List all gems that you own.


```js
rubygems.gems.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### gems.post
Submit a gem to RubyGems.org. Must post a built RubyGem in the request body.


```js
rubygems.gems.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### gems.yank.delete
Remove a gem from RubyGems.org’s index.


```js
rubygems.gems.yank.delete({
  "gem_name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * gem_name **required** `string`: Gem name.
  * version **required** `string`: Gem version.
  * platform `string`: Gem platform.

#### Output
*Output schema unknown*

### gems.unyank.put
Update a previously yanked gem back into RubyGems.org’s index.


```js
rubygems.gems.unyank.put({
  "gem_name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * gem_name **required** `string`: Gem name.
  * version **required** `string`: Gem version.
  * platform `string`: Gem platform.

#### Output
*Output schema unknown*

### gems.latest.format.get
Pulls the 50 newest first-version gems added to RubyGems.org.


```js
rubygems.gems.latest.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### gems.just_updated.format.get
Pulls the 50 most recently updated gems.


```js
rubygems.gems.just_updated.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### versions.name.format.get
Returns an array of gem version details.


```js
rubygems.versions.name.format.get({
  "name": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### downloads.format.get
Returns an object containing the total number of downloads on RubyGems.


```js
rubygems.downloads.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### downloads.top.format.get
Returns an object containing the top 50 downloaded gem versions for today.


```js
rubygems.downloads.top.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### downloads.all.format.get
Returns an object containing the top 50 downloaded gem versions of all time.


```js
rubygems.downloads.all.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### downloads.name_version.format.get
Returns an object containing the total number of downloads for a paritcular gem as well as the total number of downloads for the specified version.


```js
rubygems.downloads.name_version.format.get({
  "name": "",
  "version": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * version **required** `string`: Gem version.
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### versions.name_version.downloads.format.get
Returns an object containing the number of downloads by day for a particular gem version for 90 days of data.


```js
rubygems.versions.name_version.downloads.format.get({
  "name": "",
  "version": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * version **required** `string`: Gem version.
  * format **required** `string` (values: json, yaml): Response format.

#### Output
*Output schema unknown*

### versions.name_version.downloads.search.format.get
Returns an object containing the number of downloads by day for a particular gem version between a date range, specified by the parameters from and to. Dates values should be specified in the format YYYY-MM-DD.


```js
rubygems.versions.name_version.downloads.search.format.get({
  "name": "",
  "version": "",
  "format": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * version **required** `string`: Gem version.
  * format **required** `string` (values: json, yaml): Response format.
  * from **required** `string`: Start date from where to search for. (YYYY-MM-DD)
  * to **required** `string`: End date to where to search for. (YYYY-MM-DD)

#### Output
*Output schema unknown*

### gems.name.owners.format.get
View all owners of a gem. These users can all push to this gem.


```js
rubygems.gems.name.owners.format.get({
  "name": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### gems.name.owners.post
Add an owner to a RubyGem you own, giving that user permission to manage it.


```js
rubygems.gems.name.owners.post({
  "name": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * email **required** `string`: Gem owner email.

#### Output
*Output schema unknown*

### gems.name.owners.delete
Remove a user’s permission to manage a RubyGem you own.


```js
rubygems.gems.name.owners.delete({
  "name": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Gem name.
  * email **required** `string`: Gem owner email.

#### Output
*Output schema unknown*

### web_hooks.format.get
List the webhooks registered under your account.


```js
rubygems.web_hooks.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### web_hooks.post
Create a webhook.


```js
rubygems.web_hooks.post({
  "gem_name": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * gem_name **required** `string`: Gem name. Could specify * to apply the hook globally to all gems.
  * url **required** `string`: WebHook URL.

#### Output
*Output schema unknown*

### web_hooks.remove.delete
Remove a webhook.


```js
rubygems.web_hooks.remove.delete({
  "gem_name": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * gem_name **required** `string`: Gem name. Could specify * to apply the hook globally to all gems.
  * url **required** `string`: WebHook URL.

#### Output
*Output schema unknown*

### web_hooks.fire.post
Test fire a webhook. This can be used to test out an endpoint at any time, for example when you’re developing your application.


```js
rubygems.web_hooks.fire.post({
  "gem_name": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * gem_name **required** `string`: Gem name. Could specify * to apply the hook globally to all gems.
  * url **required** `string`: WebHook URL.

#### Output
*Output schema unknown*

### api_key.format.get
Retrieve your API key using HTTP basic auth.


```js
rubygems.api_key.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml, yaml): Response format.

#### Output
*Output schema unknown*

### dependencies.get
Returns a marshalled array of hashes for all versions of given gems. Each hash contains a gem version with its dependencies making this useful for resolving dependencies.


```js
rubygems.dependencies.get({
  "gems": ""
}, context)
```

#### Input
* input `object`
  * gems **required** `string`: Comma delimited Gem names.

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
