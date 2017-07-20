# @datafire/orghunter

Client library for OrgHunter

## Installation and Usage
```bash
npm install --save datafire @datafire/orghunter
```

```js
let datafire = require('datafire');
let orghunter = require('@datafire/orghunter').actions;

let account = {
  user_key: "",
}
let context = new datafire.Context({
  accounts: {
    orghunter: account,
  }
})


orghunter.v1.charitysearch.post({}, context).then(data => {
  console.log(data);
})
```

## Description
Get the latest IRS data and most up to date charity information for your website or application

## Actions
### v1.categories.post
<p>This operation provides a list of categories.</p>


```js
orghunter.v1.categories.post(null, context)
```


### v1.charitybasic.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitybasic.post({}, context)
```


### v1.charityfinancial.post
<p>This operation detail data.</p>


```js
orghunter.v1.charityfinancial.post({}, context)
```


### v1.charitygeolocation.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitygeolocation.post({}, context)
```


### v1.charitypremium.post
<p>This operation detail data.</p>


```js
orghunter.v1.charitypremium.post({}, context)
```


### v1.charitysearch.post
<p>This operation provides summary data.</p>


```js
orghunter.v1.charitysearch.post({}, context)
```


