# @datafire/orghunter

Client library for OrgHunter

## Installation and Usage
```bash
npm install --save @datafire/orghunter
```
```js
let orghunter = require('@datafire/orghunter').create({
  user_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Get the latest IRS data and most up to date charity information for your website or application

## Actions

### v1.categories.post
<p>This operation provides a list of categories.</p>


```js
orghunter.v1.categories.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### v1.charitybasic.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitybasic.post({}, context)
```

#### Input
* input `object`
  * ein `string`: ein (Employer Identification Number)

#### Output
*Output schema unknown*

### v1.charityfinancial.post
<p>This operation detail data.</p>


```js
orghunter.v1.charityfinancial.post({}, context)
```

#### Input
* input `object`
  * ein `string`: ein (Employer Identification Number)

#### Output
*Output schema unknown*

### v1.charitygeolocation.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitygeolocation.post({}, context)
```

#### Input
* input `object`
  * ein `string`: ein (Employer Identification Number)

#### Output
*Output schema unknown*

### v1.charitypremium.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitypremium.post({}, context)
```

#### Input
* input `object`
  * ein `string`: ein (Employer Identification Number)

#### Output
*Output schema unknown*

### v1.charitysearch.post
<p>This operation provides summary data.</p>


```js
orghunter.v1.charitysearch.post({}, context)
```

#### Input
* input `object`
  * ein `string`: Employer Identification Number (EIN)
  * searchTerm `string`: Charity Name or Keyword. Example: humane society or cancer
  * city `string`: City Name. Example: Miami
  * state `string`: State Name - Two letter state abbreviation
  * zipCode `string`: Zipcode Value - 5 digit zipcode value
  * category `string`: Category Value Selected from Categories API
  * eligible `string`: eligible=1 will return only organizations that are tax deductible and in good standing with the IRS
  * start `string`: Record Set Start Position
  * rows `string`: Records Per Page. Default Value = 20

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
