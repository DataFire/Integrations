# @datafire/healthcare_gov

Client library for Healthcare

## Installation and Usage
```bash
npm install --save @datafire/healthcare_gov
```
```js
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

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [articlesList](#articleslist)

### api.blogmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.blogmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [blogList](#bloglist)

### api.glossarymediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.glossarymediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [glossaryList](#glossarylist)

### api.questionsmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.questionsmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [questionsList](#questionslist)

### api.statesmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.statesmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [statesList](#stateslist)

### api.topicsmediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.api.topicsmediaTypeExtension.get({
  "mediaTypeExtension": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.

#### Output
* output [topicsList](#topicslist)

### blog.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.blog.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [blogPage](#blogpage)

### es.blog.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.blog.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [blogPage](#blogpage)

### es.glossary.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.glossary.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [glossaryPage](#glossarypage)

### es.question.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.question.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [questionPage](#questionpage)

### es.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [page](#page)

### es.stateNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.es.stateNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "stateName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * stateName **required** `string`

#### Output
* output [statePage](#statepage)

### glossary.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.glossary.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [glossaryPage](#glossarypage)

### question.pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.question.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [questionPage](#questionpage)

### pageNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.pageNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "pageName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * pageName **required** `string`

#### Output
* output [page](#page)

### stateNamemediaTypeExtension.get
Returns pages content.


```js
healthcare_gov.stateNamemediaTypeExtension.get({
  "mediaTypeExtension": "",
  "stateName": ""
}, context)
```

#### Input
* input `object`
  * mediaTypeExtension **required** `string` (values: .json): Omiting the param causes html to be returned.
  * stateName **required** `string`

#### Output
* output [statePage](#statepage)



## Definitions

### articlesList
* articlesList `object`
  * articles `array`
    * items `object`
      * bite `string`
      * categories `array`
        * items `array`
          * items `string`
      * content `string`
      * date `string`
      * excerpt `string`
      * featured `boolean`
      * id `string`
      * lang `string`
      * layout `string`
      * meta-description `string`
      * meta-title `string`
      * path `string`
      * published `boolean`
      * related `array`
        * items `array`
          * items `string`
      * seo-keywords `string`
      * sort `number`
      * tags `array`
        * items `array`

      * title `string`
      * title-short `string`
      * topics `array`
        * items `array`
          * items `string`
      * url `string`

### blogList
* blogList `object`
  * blog `array`
    * items `array`
      * items `object`
        * categories `array`
          * items `array`
            * items `string`
        * content `string`
        * date `string`
        * lang `string`
        * layout `string`
        * meta-description `string`
        * meta-title `string`
        * published `boolean`
        * seo-keywords `string`
        * sort `number`
        * tags `array`
          * items `array`

        * title `string`
        * topics `array`
          * items `array`
            * items `string`
        * url `string`

### blogPage
* blogPage `object`
  * categories `array`
    * items `array`
      * items `string`
  * content `string`
  * date `string`
  * excerpt `string`
  * id `string`
  * lang `string`
  * layout `string`
  * meta-description `string`
  * meta-title `string`
  * path `string`
  * published `boolean`
  * seo-keywords `string`
  * sort `number`
  * tags `array`
    * items `array`

  * title `string`
  * topics `array`
    * items `array`
      * items `string`
  * url `string`

### glossaryList
* glossaryList `object`
  * glossary `array`
    * items `object`
      * categories `array`
        * items `string`
      * content `string`
      * date `string`
      * excerpt `string`
      * id `string`
      * lang `string`
      * layout `string`
      * path `string`
      * published `boolean`
      * sort `number`
      * tags `array`
        * items `string`
      * title `string`
      * url `string`

### glossaryPage
* glossaryPage `object`
  * categories `array`
    * items `string`
  * content `string`
  * date `string`
  * excerpt `string`
  * id `string`
  * lang `string`
  * layout `string`
  * path `string`
  * published `boolean`
  * sort `number`
  * tags `array`
    * items `string`
  * title `string`
  * url `string`

### page
* page `object`
  * categories `array`
    * items `array`

  * content `string`
  * date `string`
  * excerpt `string`
  * experience `string`
  * id `string`
  * lang `string`
  * layout `string`
  * path `string`
  * published `boolean`
  * sort `number`
  * tags `array`
    * items `array`

  * title `string`
  * url `string`

### questionPage
* questionPage `object`
  * categories `array`
    * items `string`
  * content `string`
  * date `string`
  * excerpt `string`
  * id `string`
  * lang `string`
  * path `string`
  * published `boolean`
  * sort `number`
  * tags `array`
    * items `string`
  * title `string`
  * url `string`

### questionsList
* questionsList `object`
  * questions `array`
    * items `object`
      * categories `array`
        * items `string`
      * content `string`
      * date `string`
      * excerpt `string`
      * id `string`
      * lang `string`
      * path `string`
      * published `boolean`
      * sort `number`
      * tags `array`
        * items `string`
      * title `string`
      * url `string`

### statePage
* statePage `object`
  * categories `array`
    * items `array`

  * content `string`
  * date `string`
  * excerpt `string`
  * id `string`
  * lang `string`
  * path `string`
  * sort `number`
  * stateurl `string`
  * tags `array`
    * items `array`
      * items `string`
  * title `string`
  * url `string`

### statesList
* statesList `object`
  * states `array`
    * items `array`
      * items `object`
        * categories `array`
          * items `array`

        * content `string`
        * date `string`
        * excerpt `string`
        * id `string`
        * lang `string`
        * path `string`
        * sort `number`
        * stateurl `string`
        * tags `array`
          * items `array`
            * items `string`
        * title `string`
        * url `string`

### topicsList
* topicsList `object`
  * topics `array`
    * items `object`
      * articleorder `array`
        * items `array`
          * items `string`
      * categories `array`
        * items `array`

      * content `string`
      * date `string`
      * excerpt `string`
      * id `string`
      * lang `string`
      * layout `string`
      * meta-description `string`
      * meta-title `string`
      * order `number`
      * path `string`
      * published `boolean`
      * sort `number`
      * tags `array`
        * items `array`
          * items `string`
      * title `string`
      * url `string`


