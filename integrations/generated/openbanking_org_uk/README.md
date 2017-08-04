# @datafire/openbanking_org_uk

Client library for Open Data

## Installation and Usage
```bash
npm install --save datafire @datafire/openbanking_org_uk
```

```js
let datafire = require('datafire');
let openbanking_org_uk = require('@datafire/openbanking_org_uk').actions;
let context = new datafire.Context();

openbanking_org_uk.unsecured_sme_loans.head({}, context).then(data => {
  console.log(data);
})
```

## Description
Latest Swagger specification for OpenData

## Actions
### atms.get
Gets a list of all `ATM` objects.


```js
openbanking_org_uk.atms.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### atms.head
Gets header information on the current set of `ATM` data


```js
openbanking_org_uk.atms.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### branches.get
Gets a list of all `Branch` objects.


```js
openbanking_org_uk.branches.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### branches.head
Gets header information on the current set of `Branch` data


```js
openbanking_org_uk.branches.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### business_current_accounts.get
Gets a list of all `Branch Current Account` objects.


```js
openbanking_org_uk.business_current_accounts.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### business_current_accounts.head
Gets header information on the current set of `Business Current Account` data


```js
openbanking_org_uk.business_current_accounts.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### commercial_credit_cards.get
Gets a list of all `Commerical Credit Card` objects.


```js
openbanking_org_uk.commercial_credit_cards.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### commercial_credit_cards.head
Gets header information on the current set of `Commerical Credit Card` data


```js
openbanking_org_uk.commercial_credit_cards.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### personal_current_accounts.get
Gets a list of all `Personal Current Account` objects.


```js
openbanking_org_uk.personal_current_accounts.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### personal_current_accounts.head
Gets header information on the current set of `Personal Current Account` data


```js
openbanking_org_uk.personal_current_accounts.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### unsecured_sme_loans.get
Gets a list of all `Unsercured SME Lending` objects.


```js
openbanking_org_uk.unsecured_sme_loans.get({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

### unsecured_sme_loans.head
Gets header information on the current set of `Unsercured SME Lending` data


```js
openbanking_org_uk.unsecured_sme_loans.head({}, context)
```

#### Parameters
* If-Modified-Since (string) - Used for conditional request, to retrieve data only if modified since a given date
* If-None-Match (string) - Used for conditional request, to retrieve data only if the given Etag value does not match

