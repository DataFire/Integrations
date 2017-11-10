# @datafire/healthcare_gov

Client library for Healthcare

## Installation and Usage
```bash
npm install --save datafire @datafire/healthcare_gov
```

```js
let datafire = require('datafire');
let healthcare_gov = require('@datafire/healthcare_gov').create();

healthcare_gov.api.articlesmediaTypeExtension.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### api.articlesmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.articlesmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### api.blogmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.blogmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### api.glossarymediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.glossarymediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### api.questionsmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.questionsmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### api.statesmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.statesmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### api.topicsmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.topicsmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.

### blog.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.blog.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### es.blog.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.blog.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### es.glossary.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.glossary.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### es.question.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.question.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### es.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### es.stateNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.stateNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "stateName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* stateName (string) **required**

### glossary.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.glossary.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### question.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.question.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* pageName (string) **required**

### stateNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.stateNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "stateName": ""
}, context)
```

#### Parameters
* mediaTypeExtension (string) **required** - Omiting the param causes html to be returned.
* stateName (string) **required**

