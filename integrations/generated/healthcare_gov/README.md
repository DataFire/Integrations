# @datafire/healthcare_gov

Client library for Healthcare

## Installation and Usage
```bash
npm install --save datafire @datafire/healthcare_gov
```

```js
let datafire = require('datafire');
let healthcare_gov = require('@datafire/healthcare_gov').actions;
let context = new datafire.Context();

healthcare_gov.api.articles.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### api.articles.json.get
Returns pages content.


```js
healthcare_gov.api.articles.json.get(null, context)
```


### api.blog.json.get
Returns pages content.


```js
healthcare_gov.api.blog.json.get(null, context)
```


### api.glossary.json.get
Returns pages content.


```js
healthcare_gov.api.glossary.json.get(null, context)
```


### api.questions.json.get
Returns pages content.


```js
healthcare_gov.api.questions.json.get(null, context)
```


### api.states.json.get
Returns pages content.


```js
healthcare_gov.api.states.json.get(null, context)
```


### api.topics.json.get
Returns pages content.


```js
healthcare_gov.api.topics.json.get(null, context)
```


### blog.pageName.json.get
Returns pages content.


```js
healthcare_gov.blog.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### es.blog.pageName.json.get
Returns pages content.


```js
healthcare_gov.es.blog.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### es.glossary.pageName.json.get
Returns pages content.


```js
healthcare_gov.es.glossary.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### es.question.pageName.json.get
Returns pages content.


```js
healthcare_gov.es.question.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### es.pageName.json.get
Returns pages content.


```js
healthcare_gov.es.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### es.stateName.json.get
Returns pages content.


```js
healthcare_gov.es.stateName.json.get({
  "stateName": ""
}, context)
```

#### Parameters
* stateName (string) **required**

### glossary.pageName.json.get
Returns pages content.


```js
healthcare_gov.glossary.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### question.pageName.json.get
Returns pages content.


```js
healthcare_gov.question.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### pageName.json.get
Returns pages content.


```js
healthcare_gov.pageName.json.get({
  "pageName": ""
}, context)
```

#### Parameters
* pageName (string) **required**

### stateName.json.get
Returns pages content.


```js
healthcare_gov.stateName.json.get({
  "stateName": ""
}, context)
```

#### Parameters
* stateName (string) **required**

