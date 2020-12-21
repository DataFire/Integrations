# @datafire/imap

Client library for imap

## Installation and Usage
```bash
npm install --save @datafire/imap
```
```js
let imap = require('@datafire/imap').create({
  user: "",
  password: "",
  host: "",
  port: "",
  tls: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Interact with e-mail servers via the Internet Message Access Protocol

## Actions

### buildMessage



```js
imap.buildMessage({}, context)
```

#### Input
* input `object`
  * to `string`
  * from `string`
  * subject `string`
  * body `string`

#### Output
* output `string`: RFC 2822 compatible message

### getBoxes



```js
imap.getBoxes({}, context)
```

#### Input
* input `object`
  * nsPrefix `string`

#### Output
* output `array`
  * items `object`
    * id `string`
    * attribs `array`
      * items `string`
    * delimiter `string`
    * children `array`
      * items [Box](#box)

### addBox



```js
imap.addBox({
  "box": ""
}, context)
```

#### Input
* input `object`
  * box **required** `string`

#### Output
* output `string`

### deleteBox



```js
imap.deleteBox({
  "box": ""
}, context)
```

#### Input
* input `object`
  * box **required** `string`

#### Output
* output `string`

### renameBox



```js
imap.renameBox({
  "oldName": "",
  "newName": ""
}, context)
```

#### Input
* input `object`
  * oldName **required** `string`
  * newName **required** `string`

#### Output
* output `string`

### boxStatus



```js
imap.boxStatus({}, context)
```

#### Input
* input `object`
  * box `string`

#### Output
* output `object`
  * id `string`
  * attribs `array`
    * items `string`
  * delimiter `string`
  * children `array`
    * items [Box](#box)

### subscribe



```js
imap.subscribe({}, context)
```

#### Input
* input `object`
  * box `string`

#### Output
* output `string`

### unsubscribe



```js
imap.unsubscribe({}, context)
```

#### Input
* input `object`
  * box `string`

#### Output
* output `string`

### getSubscribedBoxes



```js
imap.getSubscribedBoxes({}, context)
```

#### Input
* input `object`
  * nsPrefix `string`

#### Output
* output `string`

### append



```js
imap.append({
  "message": ""
}, context)
```

#### Input
* input `object`
  * box `string`
  * message **required** `string`: An RFC-822 compatible MIME message
  * flags `array`
    * items `string`
  * date `string`

#### Output
* output `string`

### fetch



```js
imap.fetch({
  "messages": []
}, context)
```

#### Input
* input `object`
  * box `string`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs

#### Output
* output `array`
  * items `object`
    * body `string`
    * attributes `object`
      * date `string`
      * flags `array`
        * items `string`
      * uid `integer`

### search



```js
imap.search({
  "query": {}
}, context)
```

#### Input
* input `object`
  * box `string`
  * query **required** `object`
    * bcc `string`
    * cc `string`
    * from `string`
    * to `string`
    * subject `string`
    * body `string`
    * text `string`
    * keyword `string`
    * header `object`
      * name `string`
      * value `string`
    * before `string`
    * on `string`
    * since `string`
    * sentBefore `string`
    * sentOn `string`
    * sentSince `string`
    * flags `array`: A list of flags to search for
      * items `string` (values: ALL, ANSWERED, DELETED, DRAFT, FLAGGED, NEW, SEEN, RECENT, OLD, UNANSWERED, UNDELETED, UNDRAFT, UNFLAGGED, UNSEEN)

#### Output
* output `array`
  * items `object`
    * body `string`
    * attributes `object`
      * date `string`
      * flags `array`
        * items `string`
      * uid `integer`

### copy



```js
imap.copy({
  "messages": [],
  "destinationBox": ""
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * destinationBox **required** `string`

#### Output
* output `string`

### move



```js
imap.move({
  "messages": [],
  "destinationBox": ""
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * destinationBox **required** `string`

#### Output
* output `string`

### addFlags



```js
imap.addFlags({
  "messages": [],
  "flags": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * flags **required** `array`
    * items `string`

#### Output
* output `string`

### setFlags



```js
imap.setFlags({
  "messages": [],
  "flags": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * flags **required** `array`
    * items `string`

#### Output
* output `string`

### deleteFlags



```js
imap.deleteFlags({
  "messages": [],
  "flags": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * flags **required** `array`
    * items `string`

#### Output
* output `string`

### addKeywords



```js
imap.addKeywords({
  "messages": [],
  "keywords": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * keywords **required** `array`
    * items `string`

#### Output
* output `string`

### setKeywords



```js
imap.setKeywords({
  "messages": [],
  "keywords": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * keywords **required** `array`
    * items `string`

#### Output
* output `string`

### deleteKeywords



```js
imap.deleteKeywords({
  "messages": [],
  "keywords": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
    * items `string`
  * isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs
  * box `string`
  * keywords **required** `array`
    * items `string`

#### Output
* output `string`



## Definitions

### Box
* Box `object`
  * id `string`
  * attribs `array`
    * items `string`
  * delimiter `string`
  * children `array`
    * items [Box](#box)

### MessageSource
* messages `array`, `string`: A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges
  * items `string`

### IsSequence
* isSequence `boolean`: If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs

### Message
* Message `object`
  * body `string`
  * attributes `object`
    * date `string`
    * flags `array`
      * items `string`
    * uid `integer`

### BoxInput
* box `string`

### SearchCriteria
* query `object`
  * bcc `string`
  * cc `string`
  * from `string`
  * to `string`
  * subject `string`
  * body `string`
  * text `string`
  * keyword `string`
  * header `object`
    * name `string`
    * value `string`
  * before `string`
  * on `string`
  * since `string`
  * sentBefore `string`
  * sentOn `string`
  * sentSince `string`
  * flags `array`: A list of flags to search for
    * items `string` (values: ALL, ANSWERED, DELETED, DRAFT, FLAGGED, NEW, SEEN, RECENT, OLD, UNANSWERED, UNDELETED, UNDRAFT, UNFLAGGED, UNSEEN)


