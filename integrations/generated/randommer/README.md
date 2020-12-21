# @datafire/randommer

Client library for Randommer API

## Installation and Usage
```bash
npm install --save @datafire/randommer
```
```js
let randommer = require('@datafire/randommer').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.Card.get
Get Card


```js
randommer.api.Card.get({}, context)
```

#### Input
* input `object`
  * type `string`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Card.Types.get
Get available card types


```js
randommer.api.Card.Types.get({}, context)
```

#### Input
* input `object`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Misc.Cultures.get



```js
randommer.api.Misc.Cultures.get({}, context)
```

#### Input
* input `object`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Misc.Random_Address.get



```js
randommer.api.Misc.Random_Address.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`
  * culture `string`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Name.get
Get name


```js
randommer.api.Name.get({
  "nameType": "",
  "quantity": 0
}, context)
```

#### Input
* input `object`
  * nameType **required** `string` (values: firstname, surname, fullname)
  * quantity **required** `integer`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Name.Suggestions.get
Get business name suggestions


```js
randommer.api.Name.Suggestions.get({
  "startingWords": ""
}, context)
```

#### Input
* input `object`
  * startingWords **required** `string`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Phone.Countries.get
Get available countries


```js
randommer.api.Phone.Countries.get({}, context)
```

#### Input
* input `object`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Phone.Generate.get
Get bulk telephone numbers for a country


```js
randommer.api.Phone.Generate.get({
  "CountryCode": "",
  "Quantity": 0
}, context)
```

#### Input
* input `object`
  * CountryCode **required** `string`
  * Quantity **required** `integer`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Phone.Validate.get
Validate a phone number


```js
randommer.api.Phone.Validate.get({
  "telephone": ""
}, context)
```

#### Input
* input `object`
  * telephone **required** `string`
  * CountryCode `string`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.SocialNumber.get
Generate a social security number


```js
randommer.api.SocialNumber.get({}, context)
```

#### Input
* input `object`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.SocialNumber.post
Validate VAT/identity numbers


```js
randommer.api.SocialNumber.post({
  "idType": "",
  "body": {
    "country": "",
    "number": ""
  }
}, context)
```

#### Input
* input `object`
  * idType **required** `string` (values: VAT, SSN)
  * X-Api-Key `string`: Enter your key
  * body **required** [NumberValidation](#numbervalidation)

#### Output
*Output schema unknown*

### api.Text.Humanize.post
Humanize text


```js
randommer.api.Text.Humanize.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Api-Key `string`: Enter your key
  * body **required** [TextDto](#textdto)

#### Output
*Output schema unknown*

### api.Text.LoremIpsum.get
Generate lorem ipsum


```js
randommer.api.Text.LoremIpsum.get({
  "loremType": "",
  "type": "",
  "number": 0
}, context)
```

#### Input
* input `object`
  * loremType **required** `string` (values: normal, business)
  * type **required** `string` (values: paragraphs, words)
  * number **required** `integer`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Text.Password.get
Generate password


```js
randommer.api.Text.Password.get({
  "length": 0,
  "hasDigits": true,
  "hasUppercase": true,
  "hasSpecial": true
}, context)
```

#### Input
* input `object`
  * length **required** `integer`
  * hasDigits **required** `boolean`
  * hasUppercase **required** `boolean`
  * hasSpecial **required** `boolean`
  * X-Api-Key `string`: Enter your key

#### Output
*Output schema unknown*

### api.Text.Transform.post
Transform text


```js
randommer.api.Text.Transform.post({
  "textActionType": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * textActionType **required** `string` (values: Transform, Replace)
  * caseType `string` (values: LowerCase, UpperCase, SentenceCase, TitleCase)
  * find `string`
  * replace `string`
  * X-Api-Key `string`: Enter your key
  * body **required** [TextDto](#textdto)

#### Output
*Output schema unknown*



## Definitions

### CaseType
* CaseType `string` (values: LowerCase, UpperCase, SentenceCase, TitleCase)

### IdType
* IdType `string` (values: VAT, SSN)

### LoremType
* LoremType `string` (values: normal, business)

### NameType
* NameType `string` (values: firstname, surname, fullname)

### NumberValidation
* NumberValidation `object`
  * country **required** `string`
  * number **required** `string`

### TextActionType
* TextActionType `string` (values: Transform, Replace)

### TextDto
* TextDto `object`
  * text `string`

### TextType
* TextType `string` (values: paragraphs, words)


