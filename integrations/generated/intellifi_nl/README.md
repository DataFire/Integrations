# @datafire/intellifi_nl

Client library for Brain Web API

## Installation and Usage
```bash
npm install --save @datafire/intellifi_nl
```
```js
let intellifi_nl = require('@datafire/intellifi_nl').create({
  CookieSid: "",
  HeaderApiKey: "",
  QueryApiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This document describes the [Intellifi Brain](https://intellifi.zendesk.com/hc/en-us/categories/360000685454)
Web API specification using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).

The Brain Web API is a RESTful API that allows you to interact with the
[Intellifi devices](https://intellifi.zendesk.com/hc/en-us/categories/360000685434) and
services in a powerful and simple way. Our end-to-end solution allows you to
localize your items/assets based on technologies such as RFID and Bluetooth.

# Try it out!

The API can be tried out and tested using the ['api-doc/tryitout' endpoint on this site](./tryitout/).
This UI allows anyone to visualize and interact with the API’s resources without having any of the implementation logic in place.
It’s automatically generated from this Specification, with the visual documentation making it easy for back end implementation and client side consumption.

# Authentication

Applications are required to provide some form of authentication to the API
for every secured endpoint. The Brain offers two forms of authentication.

- API key (Via an HTTP request header or URL parameter)
- Session cookie

<!-- ReDoc-Inject: <security-definitions> -->

# See also

- About Intellifi and what we do: [intellifi.nl](https://intellifi.nl)
- Technical and background information: [intellifi.zendesk.com](https://intellifi.zendesk.com)


## Actions

### getAuthinfo
Authentication information


```js
intellifi_nl.getAuthinfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * api_key_id `string`: Reference to the static API key (/api/keys) used to authenticate this request (when auth_method=static_api_key)
  * auth_method `string` (values: user_session, internal, static_api_key): What kind of authentication was used
  * authenticated `boolean`: Whether or not you are authenticated
  * permissions `object`
    * mutate `boolean`: Whether or not this session can mutate resources
  * url [Url](#url)
  * user_id `string`: Reference to the user account (/api/users) used to authenticate this request (when auth_method=user_session)

### getBlobs
Get all binary large objects (blob)


```js
intellifi_nl.getBlobs({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * hash `string`: Filter based on the hash of the blob.
  * blob_key `string`: Filter based on the unique blob_key
  * content_type `string`: Filter based on the content type of the blob.
  * filename `string`: Filter based on the filename of the blob.
  * time_last_accessed `string`: Filter based on the last time the blob was accessed

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Blob](#blob)

### addBlob
Create binary large object (blob) metadata


```js
intellifi_nl.addBlob({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Blob](#blob)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteBlob
Delete binary large object (blob)


```js
intellifi_nl.deleteBlob({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getBlobMetadataById
Get binary large object (blob)


```js
intellifi_nl.getBlobMetadataById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Blob](#blob)

### getBlobById
Download a binary large object (blob)


```js
intellifi_nl.getBlobById({
  "id": "",
  "filename": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * filename **required** `string`: Filename of the blob.

#### Output
* output `string`

### uploadBlobById
Create binary large object (blob)


```js
intellifi_nl.uploadBlobById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
*Output schema unknown*

### getEvents
Get all events


```js
intellifi_nl.getEvents({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * topic.resource_type `string` (values: blobs, items, keys, kvpairs, locations, presences, services, spots, subscriptions, users): Filter on the topic resource type
  * topic.action `string` (values: created, updated, deleted, disappeared, connection-rssi-changed): Filter on the topic action
  * topic.resource `string`: Filter on the topic resource id
  * time_event `string`: Filter on the time the event was generated on the device.
  * time_expire `string`: Filter on the time the event will expire.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Event](#event)

### getEventById
Get event


```js
intellifi_nl.getEventById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Event](#event)

### getItems
Get all items


```js
intellifi_nl.getItems({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * after_code `string`: Limits directly on `code_hex`, sets the start of the range, use `before_code` to set the end, excludes the given `code` value.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before_code `string`: Limits directly on `code_hex`, sets the end of the range, use `after_code` to set the start, excludes the given `code` value.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * from_code `string`: Limits on `code_hex`, sets the start of the range, use `until_code` to set the end, includes the given `code` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * until_code `string`: Limits on `code_hex`, sets the end of the range, use `from_code` to set the start, includes the given `code` value.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * code_hex `string`: Filter based on the hexadecimal string representation of the item. Supports wildcards: `*`.
  * custom `string`: Filter based on the custom value. Supports wildcards: `*`
  * is_present `boolean`: Only show items which are present of not.
  * label `string`: Filter based on the label value. Supports wildcards: `*`
  * location `string`: Filter based on the location
  * metadata `string`: Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`
  * move_count `integer`: Filter based on move count
  * protocol `string` (values: altbeacon, uniwear, nfc, generic, eddystone, epcgen2, ibeacon, nanoble): Filter based on the detected protocol of an item.
  * sets `string`: Filter based on the set the resource is in.
  * technology `string` (values: bluetooth, optical, rfid): Filter based on the detected technology of an item.
  * text `string`: Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.
  * time_last_present `string`: Filter based on the time last present
  * time_moved `string`: Filter based on time last moved
  * type `string` (values: barcode, bluetitan, gbtag, relay, smarttag, tag): Filter based on the type of an item.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Item](#item)

### addItem
Create item


```js
intellifi_nl.addItem({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [Item](#item)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteItem
Delete item


```js
intellifi_nl.deleteItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getItemById
Get item


```js
intellifi_nl.getItemById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Item](#item)

### updateItem
Update existing item


```js
intellifi_nl.updateItem({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [ItemUpdate](#itemupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getKeys
Can only be used by an **administrative** user.


```js
intellifi_nl.getKeys({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * secret `string`: Filter on the secret token.
  * label `string`: Filter on the label.
  * is_read_only `boolean`: Filter on read only status.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Key](#key)

### addKey
Can only be used by an **administrative** user.


```js
intellifi_nl.addKey({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Key](#key)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteKey
Can only be used by an **administrative** user.


```js
intellifi_nl.deleteKey({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getKeyById
Can only be used by an **administrative** user.


```js
intellifi_nl.getKeyById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Key](#key)

### updateKey
Can only be used by an **administrative** user.


```js
intellifi_nl.updateKey({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [Key](#key)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getKvPairs
Get all key-value pairs


```js
intellifi_nl.getKvPairs({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * kv_key `string`: Filter on the key-value pair key value.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [KeyValuePair](#keyvaluepair)

### addKvPairs
Create key-value pair


```js
intellifi_nl.addKvPairs({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [KeyValuePair](#keyvaluepair)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteKvPair
Delete key-value pair


```js
intellifi_nl.deleteKvPair({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getKvPairsById
Get key-value pair


```js
intellifi_nl.getKvPairsById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [KeyValuePair](#keyvaluepair)

### updateKvPair
Update existing Key-value pair


```js
intellifi_nl.updateKvPair({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [KeyValuePairUpdate](#keyvaluepairupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getLocationRules
Get all location rules


```js
intellifi_nl.getLocationRules({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * label `string`: Filter based on the label value. Supports wildcards: `*`
  * type `string` (values: allow, disallow, disappeared, debounce): Filter based on the type of location rule.
  * enabled `boolean`: Filter based on the `enabled` property.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [LocationRule](#locationrule)

### addLocationRule
Create location rule


```js
intellifi_nl.addLocationRule({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [LocationRuleUpdate](#locationruleupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteLocationRule
Delete location rule


```js
intellifi_nl.deleteLocationRule({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getLocationRuleById
Get location rule


```js
intellifi_nl.getLocationRuleById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [LocationRule](#locationrule)

### updateLocationRule
Update existing location rule


```js
intellifi_nl.updateLocationRule({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [LocationRuleUpdate](#locationruleupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getLocations
Get all locations


```js
intellifi_nl.getLocations({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * custom `string`: Filter based on the custom value. Supports wildcards: `*`
  * label `string`: Filter based on the label value. Supports wildcards: `*`
  * metadata `string`: Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`
  * text `string`: Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Location](#location)

### addLocation
Create location


```js
intellifi_nl.addLocation({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Location](#location)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteLocation
Delete location


```js
intellifi_nl.deleteLocation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getLocationById
Get location


```js
intellifi_nl.getLocationById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Location](#location)

### updateLocation
Update existing location


```js
intellifi_nl.updateLocation({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [Location](#location)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getPresences
Get all presences


```js
intellifi_nl.getPresences({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * item `string`: Filter based on the item
  * location `string`: Filter based on the location
  * proximity `string` (values: far, near, immediate): Filter based on the proximity.
  * technology `string` (values: bluetooth, optical, rfid): Filter based on the detected technology of an item.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Presence](#presence)

### getPresenceById
Get presence


```js
intellifi_nl.getPresenceById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Presence](#presence)

### getServices
Get all services


```js
intellifi_nl.getServices({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * name `string`: Filter based on the name of the resource. Supports wildcards: `*`

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Service](#service)

### getServiceById
Get service


```js
intellifi_nl.getServiceById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Service](#service)

### updateService
Update existing service


```js
intellifi_nl.updateService({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [Service](#service)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getItemLists
Get all item lists


```js
intellifi_nl.getItemLists({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * custom `string`: Filter based on the custom value. Supports wildcards: `*`
  * label `string`: Filter based on the label value. Supports wildcards: `*`
  * metadata `string`: Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`
  * text `string`: Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.
  * total `integer`: Filter based on the total amount of items in the list
  * sha1 `string`: The sha1 checksum of the list. This will change when the list is mutated.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [ItemList](#itemlist)

### addItemList
Create item list


```js
intellifi_nl.addItemList({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ItemList](#itemlist)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteItemSet
Delete item list


```js
intellifi_nl.deleteItemSet({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getItemListById
Get item list


```js
intellifi_nl.getItemListById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ItemList](#itemlist)

### updateItemList
Update existing item list


```js
intellifi_nl.updateItemList({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [ItemList](#itemlist)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getItemListIdsById
Get item ids for this list


```js
intellifi_nl.getItemListIdsById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ListOfItemIds](#listofitemids)

### addItemIdsList
Add items to an existing list


```js
intellifi_nl.addItemIdsList({
  "id": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [ListOfItemIds](#listofitemids)

#### Output
* output [ResponseListResource](#responselistresource)

### deleteItemIdFromItemList
Delete item from list


```js
intellifi_nl.deleteItemIdFromItemList({
  "id": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * itemId **required** `string`: Item ID.

#### Output
* output [ResponseListResource](#responselistresource)

### getSpotLists
Get all spot lists


```js
intellifi_nl.getSpotLists({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * custom `string`: Filter based on the custom value. Supports wildcards: `*`
  * label `string`: Filter based on the label value. Supports wildcards: `*`
  * metadata `string`: Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`
  * text `string`: Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.
  * total `integer`: Filter based on the total amount of spots in the list

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [SpotList](#spotlist)

### addSpotList
Create spot list


```js
intellifi_nl.addSpotList({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ItemList](#itemlist)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteSpotList
Delete spot list


```js
intellifi_nl.deleteSpotList({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getSpotListById
Info for a specific spot list


```js
intellifi_nl.getSpotListById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [SpotList](#spotlist)

### updateSpotList
Update existing spot list


```js
intellifi_nl.updateSpotList({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [SpotList](#spotlist)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getSpotListIdsById
Get spot ids for this list


```js
intellifi_nl.getSpotListIdsById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ListOfItemIds](#listofitemids)

### addItemIdsSpotList
Add spots to an existing list


```js
intellifi_nl.addItemIdsSpotList({
  "id": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [ListOfItemIds](#listofitemids)

#### Output
* output [ResponseListResource](#responselistresource)

### deleteItemIdFromSpotList
Delete spot from list


```js
intellifi_nl.deleteItemIdFromSpotList({
  "id": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * itemId **required** `string`: Item ID.

#### Output
* output [ResponseListResource](#responselistresource)

### getSpots
Get all spots


```js
intellifi_nl.getSpots({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * is_online `boolean`: Filter based on the online status.
  * request_counter `integer`: Filter based on the amount of request made
  * serial_number `integer`: Filter based on the serial number.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [SpotGet](#spotget)

### getSpotSetById
Get spotset


```js
intellifi_nl.getSpotSetById({
  "setId": ""
}, context)
```

#### Input
* input `object`
  * setId **required** `string`: Unique spot set identifier

#### Output
* output [SpotSet](#spotset)

### getSpotById
Get spot


```js
intellifi_nl.getSpotById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [SpotGet](#spotget)

### updateSpot
Update existing spot


```js
intellifi_nl.updateSpot({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [SpotUpdate](#spotupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getSpotSetsById
Get spotset


```js
intellifi_nl.getSpotSetsById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [SpotSet](#spotset)

### addSpotSet
Create spotset


```js
intellifi_nl.addSpotSet({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [SpotSetCreate](#spotsetcreate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### updateSpotSet
Update existing spotset


```js
intellifi_nl.updateSpotSet({
  "id": "",
  "setId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * setId **required** `string`: Unique spot set identifier
  * body **required** [SpotSetUpdate](#spotsetupdate)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getSubscriptions
Get all subscriptions


```js
intellifi_nl.getSubscriptions({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * custom `string`: Filter based on the custom value. Supports wildcards: `*`
  * topic_filter `string`: Filter on the topic filter. Make sure to use [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in the query parameter.
  * description `string`: Filter based on the description.
  * database_hold_time_h `integer`: Filter based on the number of hours events are retained in the database.
  * populate_events `boolean`: Filter based on subscriptions that populate the events
  * verify_target_certificate `boolean`: Filter on the verification of the target certificate.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Subscription](#subscription)

### addSubscription
Create subscription


```js
intellifi_nl.addSubscription({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Subscription](#subscription)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteSubscription
Delete subscription


```js
intellifi_nl.deleteSubscription({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getSubscriptionById
Get subscription


```js
intellifi_nl.getSubscriptionById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [Subscription](#subscription)

### updateSubscription
Update existing subscription


```js
intellifi_nl.updateSubscription({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [Subscription](#subscription)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getEventsForSubscriptionById
Get subscription events


```js
intellifi_nl.getEventsForSubscriptionById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id_query `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * topic.resource_type `string` (values: blobs, items, keys, kvpairs, locations, presences, services, spots, subscriptions, users): Filter on the topic resource type
  * topic.action `string` (values: created, updated, deleted, disappeared, connection-rssi-changed): Filter on the topic action
  * topic.resource `string`: Filter on the topic resource id
  * time_event `string`: Filter on the time the event was generated on the device.
  * time_expire `string`: Filter on the time the event will expire.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [Event](#event)

### getUsers
Can only be used by an **administrative** user.


```js
intellifi_nl.getUsers({}, context)
```

#### Input
* input `object`
  * after `string`: Limits on `time_created`, exclusive.
  * after_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * before `string`: Limits on `time_created`, exclusive.
  * before_id `string`: Limits directly on `id` excludes the given `id` value, please note that `id` is chronological.
  * from `string`: Limits on `time_created`, inclusive.
  * from_id `string`: Limits on `id`, includes the given `id` value.
  * id_only `boolean`: Removes `url` fields from output and shows `_id` instead of `_url` in references.
  * limit `integer`: Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
  * populate `string`: Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
  * results_only `boolean`: Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
  * sort `string`: Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
  * until `string`: Limits on `time_created`, inclusive.
  * until_id `string`: Limits on `id`, includes the given `id` value.
  * timeout_s `number`: Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
  * id `string`: unique identifier
  * time_created `string`: Filter on the time the resource was created.
  * time_updated `string`: Filter on the time the resource was last updated
  * email `string`: Filter on the email address.
  * first_name `string`: Filter on the first name.
  * last_name `string`: Filter on the last name.
  * is_admin `boolean`: Filter on the administrator status.
  * is_locked `boolean`: Filter on the locked status.

#### Output
* output
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)
  * results `array`
    * items [User](#user)

### addUser
Can only be used by an **administrative** user.


```js
intellifi_nl.addUser({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [User](#user)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### deleteUser
Can only be used by an **administrative** user.


```js
intellifi_nl.deleteUser({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)

### getUserById
Can only be used by an **administrative** user.


```js
intellifi_nl.getUserById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier

#### Output
* output [User](#user)

### updateUser
Can only be used by an **administrative** user.


```js
intellifi_nl.updateUser({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier
  * body **required** [User](#user)

#### Output
* output [ResponseDefaultResource](#responsedefaultresource)



## Definitions

### Blob
* Blob `object`
  * blob_key `string`: Unique key to the blob
  * content_type `string`: Media type of the resource. Automatically detected when not given in a POST.
  * download_url [Url](#url)
  * filename `string`: Filename of the blob
  * hash `string`: Hash of the blob
  * id [IdReadOnly](#idreadonly)
  * time_created [TimeCreated](#timecreated)
  * time_last_accessed [TimeLastAccessed](#timelastaccessed)
  * time_updated [TimeUpdated](#timeupdated)
  * upload_url [Url](#url)
  * url [Url](#url)

### BootCount
* BootCount `integer`: Is increased with 1 when the service starts. Is never cleared (unless the database is adjusted).

### CodeHex
* CodeHex `string`: String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.

### Config
* Config `object`: JSON object with possible settings. Refer to individual service documentation for a good overview.

### ConfigRequest
* ConfigRequest `object`: Object containing the new configuration. This will be applied automatically when the values are valid.

### Custom


### Event
* Event `object`
  * id [IdReadOnly](#idreadonly)
  * time_created [TimeCreated](#timecreated)
  * time_event [TimeEvent](#timeevent)
  * time_expire [TimeExpire](#timeexpire)
  * topic `object`
    * action [EventTopicAction](#eventtopicaction)
    * arguments [EventTopicArgument](#eventtopicargument)
    * resource_id [IdReadOnly](#idreadonly)
    * resource_type [EventTopicResourceType](#eventtopicresourcetype)
    * resource_url [Url](#url)
  * url [Url](#url)

### EventTopicAction
* EventTopicAction `string` (values: created, updated, deleted, disappeared, connection-rssi-changed): Indicates the kind of event that was executed. In most cases it's a verb. I.e. 'connected', 'created' etc...

### EventTopicArgument


### EventTopicResourceType
* EventTopicResourceType `string` (values: blobs, items, keys, kvpairs, locations, presences, services, spots, subscriptions, users): The The available event topic resources types on the API. Is written in its plural form.

### GeoCoords
* GeoCoords `object`: Last known geolocation estimate of this object. Not guaranteed to be included in response.
  * lat `number`: Latitude angle in degrees
  * lng `number`: Longitude angle in degrees
  * time_updated [TimeUpdated](#timeupdated)

### GeoCoordsReadOnly
* GeoCoordsReadOnly `object`: Last known geolocation estimate of this object. Not guaranteed to be included in response.
  * lat `number`: Latitude angle in degrees
  * lng `number`: Longitude angle in degrees
  * time_updated [TimeUpdated](#timeupdated)

### Id
* Id `string`: Unique identifier for resource.

### IdReadOnly
* IdReadOnly `string`: Unique identifier for resource.

### IsOnline
* IsOnline `boolean`: Whether or not this resource is actively connected to the Brain.

### Item
* Item
  * config_request [ConfigRequest](#configrequest)
  * custom [Custom](#custom)
  * label [Label](#label)
  * location_request [LocationRequest](#locationrequest)
  * metadata [Metadata](#metadata)
  * code_hex [CodeHex](#codehex)
  * geo_coords [GeoCoordsReadOnly](#geocoordsreadonly)
  * id [IdReadOnly](#idreadonly)
  * is_present `boolean`: Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
  * move_count [MoveCount](#movecount)
  * protocol [ItemProtocol](#itemprotocol)
  * sets [ListOfSetIds](#listofsetids)
  * technology [Technology](#technology)
  * time_created [TimeCreated](#timecreated)
  * time_last_present `string`: Last time the item was present.
  * time_moved [TimeMoved](#timemoved)
  * time_updated [TimeUpdated](#timeupdated)
  * type [ItemType](#itemtype)
  * url [Url](#url)

### ItemList
* ItemList `object`
  * custom [Custom](#custom)
  * id [IdReadOnly](#idreadonly)
  * label [Label](#label)
  * list [Url](#url)
  * metadata [Metadata](#metadata)
  * sha1 `string`: The sha1 checksum of the list. This will change when the list is mutated.
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * total `integer`: Total amount of items in this set

### ItemProtocol
* ItemProtocol `string` (values: altbeacon, uniwear, nfc, generic, eddystone, epcgen2, ibeacon, nanoble): Type of protocol that was used to decode this item.

### ItemType
* ItemType `string` (values: barcode, bluetitan, gbtag, relay, smarttag, tag): Type of item.

### ItemUpdate
* ItemUpdate `object`
  * config_request [ConfigRequest](#configrequest)
  * custom [Custom](#custom)
  * label [Label](#label)
  * location_request [LocationRequest](#locationrequest)
  * metadata [Metadata](#metadata)

### Key
* Key `object`
  * id [IdReadOnly](#idreadonly)
  * is_read_only `boolean`: Whether or not this key can only read and not write.
  * label `string`: Custom label for this API key.
  * secret `string`: The secret token for authentication.
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### KeyValuePair
* KeyValuePair
  * id [IdReadOnly](#idreadonly)
  * kv_key `string`: Unique identifier for the value.
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### KeyValuePairUpdate
* KeyValuePairUpdate `object`

### Label
* Label `string`: A name or a label for this resource. This is used in the user interface, may be empty.

### ListOfItemIds
* ListOfItemIds `array`: List of item ids
  * items [IdReadOnly](#idreadonly)

### ListOfSetIds
* ListOfSetIds `array`: List of set ids
  * items [IdReadOnly](#idreadonly)

### Location
* Location `object`
  * custom [Custom](#custom)
  * id [IdReadOnly](#idreadonly)
  * label [Label](#label)
  * metadata [Metadata](#metadata)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### LocationRequest
* LocationRequest `string`: Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.

### LocationRule
* LocationRule `object`
  * parameters [LocationRuleParameters](#locationruleparameters)
  * enabled [RuleEnabled](#ruleenabled)
  * id [IdReadOnly](#idreadonly)
  * label [Label](#label)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * type [LocationRuleType](#locationruletype)
  * url [Url](#url)

### LocationRuleParameters
* LocationRuleParameters `object`: Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.

### LocationRuleType
* LocationRuleType `string` (values: allow, disallow, disappeared, debounce): The type of location rule to be applied.

### LocationRuleUpdate
* LocationRuleUpdate `object`
  * parameters [LocationRuleParameters](#locationruleparameters)
  * conditions `object`: Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
    * from_location [Id](#id)
    * to_location [Id](#id)
  * enabled [RuleEnabled](#ruleenabled)
  * label [Label](#label)
  * type [LocationRuleType](#locationruletype)

### Metadata
* Metadata `object`: Object of searchable metadata for this resource. Can be freely used to store metadata properties.

### MoveCount
* MoveCount `integer`: How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.

### Name
* Name `string`: Human readable name for the resource.

### Presence
* Presence `object`
  * id [IdReadOnly](#idreadonly)
  * item [Item](#item)
  * item_id [IdReadOnly](#idreadonly)
  * item_url [Url](#url)
  * location [Location](#location)
  * location_id [IdReadOnly](#idreadonly)
  * location_url [Url](#url)
  * proximity [Proximity](#proximity)
  * technology [Technology](#technology)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### Proximity
* Proximity `string` (values: far, near, immediate): Strongest proximity of all 'child' presences. This is a rough estimate on the distance from the item to the receiver.

### RequestCounter
* RequestCounter `integer`: The total number of HTTP requests that this resource has done.

### ResponseDefaultResource
* ResponseDefaultResource `object`
  * resource `object`
    * id [IdReadOnly](#idreadonly)
    * url [Url](#url)
  * status `integer`: Status code

### ResponseEnvelope
* ResponseEnvelope `object`
  * count `integer`: The maximum number of items in the response (as set in the query or by default).
  * count_current `integer`: The maximum number of items available to return.
  * is_limited `boolean`: Becomes false when the number of results is smaller than limit.
  * next_url `string`: URL to the next page of items. ( null if none)
  * query_duration_ms `integer`: Amount of time, in milliseconds, the request needed to complete.
  * url [Url](#url)

### ResponseListResource
* ResponseListResource `object`
  * status `integer`: Status code
  * total `integer`: Total items in the list

### RestartRequest
* RestartRequest `boolean`: Set this to `true` to send a reset request for the specific resource.

### RuleEnabled
* RuleEnabled `boolean`: Whether this rule should be in effect (`true`) or on hold (`false`).

### Senses
* Senses `object`: Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.

### SensesRequest
* SensesRequest `object`: Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.

### SerialNumber
* SerialNumber `integer`: This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.

### Service
* Service `object`
  * boot_count [BootCount](#bootcount)
  * config [Config](#config)
  * config_request [ConfigRequest](#configrequest)
  * id [IdReadOnly](#idreadonly)
  * name [Name](#name)
  * restart_request [RestartRequest](#restartrequest)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)
  * version [Version](#version)

### SpotBase
* SpotBase `object`
  * antenna_report_locations `array`: You may configure this field to an object which couples individual antenna ports to locations.
    * items `object`
      * antenna_number `integer`: Antenna number
      * report_location [Location](#location)
      * report_location_id [IdReadOnly](#idreadonly)
      * report_location_url [Url](#url)
  * config [Config](#config)
  * config_request [ConfigRequest](#configrequest)
  * geo_coords [GeoCoords](#geocoords)
  * id [IdReadOnly](#idreadonly)
  * is_online [IsOnline](#isonline)
  * request_counter [RequestCounter](#requestcounter)
  * senses [Senses](#senses)
  * senses_request [SensesRequest](#sensesrequest)
  * serial_number [SerialNumber](#serialnumber)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### SpotGet
* SpotGet
  * antenna_report_locations `array`: You may configure this field to an object which couples individual antenna ports to locations.
    * items `object`
      * antenna_number `integer`: Antenna number
      * report_location [Location](#location)
      * report_location_id [IdReadOnly](#idreadonly)
      * report_location_url [Url](#url)
  * config [Config](#config)
  * config_request [ConfigRequest](#configrequest)
  * geo_coords [GeoCoords](#geocoords)
  * id [IdReadOnly](#idreadonly)
  * is_online [IsOnline](#isonline)
  * request_counter [RequestCounter](#requestcounter)
  * senses [Senses](#senses)
  * senses_request [SensesRequest](#sensesrequest)
  * serial_number [SerialNumber](#serialnumber)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)

### SpotList
* SpotList `object`
  * custom [Custom](#custom)
  * id [IdReadOnly](#idreadonly)
  * label [Label](#label)
  * list [Url](#url)
  * metadata [Metadata](#metadata)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * total `integer`: Total amount of spots in this set

### SpotSet
* SpotSet
  * created_by `string`: Who was responsible for the creation of this spot list
  * id [IdReadOnly](#idreadonly)
  * setid `integer`: Spot set unique identifier. Must be unique within a single device
  * spot_id [IdReadOnly](#idreadonly)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)

### SpotSetBase
* SpotSetBase `object`
  * created_by `string`: Who was responsible for the creation of this spot list
  * id [IdReadOnly](#idreadonly)
  * setid `integer`: Spot set unique identifier. Must be unique within a single device
  * spot_id [IdReadOnly](#idreadonly)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)

### SpotSetCreate
* SpotSetCreate
  * created_by `string`: Who was responsible for the creation of this spot list
  * id [IdReadOnly](#idreadonly)
  * setid `integer`: Spot set unique identifier. Must be unique within a single device
  * spot_id [IdReadOnly](#idreadonly)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)

### SpotSetTypeAny
* SpotSetTypeAny `object`
  * type `string` (values: any): Spot set type `any`; Matches all type of items / wildcard set

### SpotSetTypeAreacode
* SpotSetTypeAreacode `object`
  * area_code `integer`: Area Code
  * type `string` (values: areacode): Spot set type `areacode`; Item with the same Area Code as specified by this set

### SpotSetTypeCodelength
* SpotSetTypeCodelength `object`
  * length_bits `integer`: The length of the item code in bits
  * type `string` (values: codelength): Spot set type `codelength`; All item codes that have the exact same bit length as specified by this value

### SpotSetTypeCodemask
* SpotSetTypeCodemask `object`
  * code `string`: Item code
  * mask `string`: Mask which part of the code should match.
  * type `string` (values: codemask): Spot set type `codemask`; All item codes that match code and mask ((item code & mask) == (code & mask)) as specified by this set

### SpotSetTypeCoderange
* SpotSetTypeCoderange `object`
  * end `string`: End of the code range
  * start `string`: Start of the code range
  * type `string` (values: coderange): Spot set type `coderange`; All item codes within specified range match this set

### SpotSetTypeExtended
* SpotSetTypeExtended `object`
  * key `string`: Extended data property key
  * operator `string` (values: gt, gte, eq, in, ne, lt, lte, starts, ends): Operator
  * type `string` (values: extended): Spot set type `extended`; Items that have the extended property (key) and match requirement for value (operator) as specified by this set

### SpotSetTypeList
* SpotSetTypeList `object`
  * itemlist_id [Id](#id)
  * limit `integer`: Number, list limit, default `1000` if not specified.
  * mutation `string`: Last mutation that was synchronized to the device. This is used for internal synchronization between the device and the Brain.
  * restrictions `object`: Restrict changes spot and brain.
    * allow_server_edit `boolean`: Server can change this set.
    * allow_spot_edit `boolean`: Spots can change set, differences from the brain server will be merged with the device
  * sha1 `string`: The sha1 checksum of the list. This will change when the list is mutated.
  * total `integer`: Total amount of items in this set
  * type `string` (values: list): Spot set type `list`; List of items. Matches this set if Item is part of this list.

### SpotSetTypeProtocol
* SpotSetTypeProtocol `object`
  * item_protocol [ItemProtocol](#itemprotocol)
  * type `string` (values: protocol): Spot set type `protocol`; Items with the same Protocol as specified by this set.

### SpotSetTypeTechnology
* SpotSetTypeTechnology `object`
  * item_technology [Technology](#technology)
  * type `string` (values: technology): Spot set type `technology`;

### SpotSetTypeType
* SpotSetTypeType `object`
  * item_type [ItemType](#itemtype)
  * type `string` (values: type): Spot set type `type`; Items with the same type as specified by this set.

### SpotSetUpdate
* SpotSetUpdate `object`
  * delete `boolean`: Mark this spot set for deletion. This will be synchronized to the device, so deletion may take some time.

### SpotUpdate
* SpotUpdate
  * antenna_report_locations `array`: You may configure this field to an object which couples individual antenna ports to locations.
    * items `object`
      * antenna_number `integer`: Antenna number
      * report_location [Location](#location)
      * report_location_id [IdReadOnly](#idreadonly)
      * report_location_url [Url](#url)
  * config [Config](#config)
  * config_request [ConfigRequest](#configrequest)
  * geo_coords [GeoCoords](#geocoords)
  * id [IdReadOnly](#idreadonly)
  * is_online [IsOnline](#isonline)
  * request_counter [RequestCounter](#requestcounter)
  * senses [Senses](#senses)
  * senses_request [SensesRequest](#sensesrequest)
  * serial_number [SerialNumber](#serialnumber)
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * url [Url](#url)
  * report_location [Id](#id)

### Subscription
* Subscription `object`
  * custom [Custom](#custom)
  * database_hold_time_h `integer`: The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.
  * description `string`: Additional field to add some notes about this subscription.
  * events_url [Url](#url)
  * id [IdReadOnly](#idreadonly)
  * populate_events `boolean`: If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.
  * target_delivery_last_failure `object`: If `target_url` is set or has been set before, and delivery to the target URL failed at least once, this contains debugging information about the nature of the most recent failure.
  * target_delivery_status `object`: If `target_url` is set, `target_delivery_status.ok` will be `true` or `false` depending on whether events are being succesfully delivered. `target_delivery_status.since` indicates when t his status last changed.
  * target_retry `boolean`: Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.
  * target_url `string`: Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeUpdated](#timeupdated)
  * topic_filter `string`: MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information
  * url [Url](#url)
  * verify_target_certificate `boolean`: Whether or not the `target_url` endpoint TLS certificate is verified to be valid.

### Technology
* Technology `string` (values: bluetooth, optical, rfid): Type of technology that was used to detect this item.

### TimeCreated
* TimeCreated `string`: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.

### TimeEvent
* TimeEvent `string`: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this event was generated on the device. This is the device's own timestamp. Could be different due to buffering and clock differences.

### TimeExpire
* TimeExpire `string`: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource is going to be deleted.

### TimeLastAccessed
* TimeLastAccessed `string`: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.

### TimeMoved
* TimeMoved `string`: Last time this item moved. This is the last time that the location for this item was changed.

### TimeUpdated
* TimeUpdated `string`: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.

### Url
* Url `string`: Url to the individual resource.

### User
* User `object`
  * email `string`: Email address
  * first_name `string`: First name
  * id [IdReadOnly](#idreadonly)
  * is_admin `boolean`: Whether or not this is an administrator.
  * is_locked `boolean`: Whether or not this user is locked and can't change the password.
  * last_name `string`: Last name
  * password `string`: Password of the user
  * time_created [TimeCreated](#timecreated)
  * time_updated [TimeCreated](#timecreated)
  * url [Url](#url)

### Version
* Version `string`: Current running version of the resource.


