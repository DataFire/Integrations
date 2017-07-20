# @datafire/idtbeyond

Client library for Active Documentation for /v1

## Installation and Usage
```bash
npm install --save datafire @datafire/idtbeyond
```

```js
let datafire = require('datafire');
let idtbeyond = require('@datafire/idtbeyond').actions;
let context = new datafire.Context();

idtbeyond.iatu.balance.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Our active docs provide the ability to test out your account and to see the responses to your queries. The services are RESTful, and are accessed using standard HTTP methods over a secure HTTPS channel. Requests and responses are currently sent in JSON format, and have a base URL of /v1.

## Actions
### iatu.balance.get
Returns a JSON of the account balance.


```js
idtbeyond.iatu.balance.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use

### iatu.charges.reports.all.get
Returns charges by date range.


```js
idtbeyond.iatu.charges.reports.all.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* date_from (string) **required** - The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
* date_to (string) **required** - The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

### iatu.charges.reports.all.csv.get
Returns charges by date range in CSV.


```js
idtbeyond.iatu.charges.reports.all.csv.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* date_from (string) **required** - The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
* date_to (string) **required** - The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

### iatu.number_validator.get
Checks to verify if the phone number is valid for the country supplied.


```js
idtbeyond.iatu.number_validator.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "country_code": "",
  "mobile_number": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* country_code (string) **required** - 2-digit code of the country in ISO 3166 format. 'BR'
* mobile_number (string) **required** - The mobile number you would like to validate. '5521983115555'

### iatu.products.promotions.get
Returns a JSON of the current promotions.


```js
idtbeyond.iatu.products.promotions.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use

### iatu.products.reports.all.get
Returns a JSON list of products, ranges, and their commissions percentages.


```js
idtbeyond.iatu.products.reports.all.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use

### iatu.products.reports.all.csv.get
Returns a CSV of products, ranges, and their commissions percentages.


```js
idtbeyond.iatu.products.reports.all.csv.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use

### iatu.products.reports.local_value.get
Returns a CSV of products, ranges, and their commissions percentages.


```js
idtbeyond.iatu.products.reports.local_value.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "country_code": "",
  "carrier_code": "",
  "amount": 0,
  "currency_code": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* country_code (string) **required** - 2-digit code of the country in ISO 3166 format. 'GT'
* carrier_code (string) **required** - Name of the mobile carrier. 'Claro'
* amount (integer) **required** - This is the amount, in cents, of the product you are purchasing. '500' = $5.00
* currency_code (string) **required** - The currency code (ISO 4217) on the product you are querying. 'USD'

### iatu.topups.post
Submits an IATU transaction request.


```js
idtbeyond.iatu.topups.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* body (undefined) **required**

### iatu.topups.reports.post
Search topups transactions, by date, with client_transaction_id or to_service_number. Use 'client_transaction_id' to search by transaction number, or 'to_service_number' to get transaction status.


```js
idtbeyond.iatu.topups.reports.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* body (undefined) **required**

### iatu.topups.reports.all.get
Returns topups by date range.


```js
idtbeyond.iatu.topups.reports.all.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* date_from (string) **required** - The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
* date_to (string) **required** - The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

### iatu.topups.reports.all.csv.get
Returns topups by date range in CSV.


```js
idtbeyond.iatu.topups.reports.all.csv.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* date_from (string) **required** - The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
* date_to (string) **required** - The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

### iatu.topups.reports.totals.get
Returns topups totals by date range.


```js
idtbeyond.iatu.topups.reports.totals.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* date_from (string) **required** - The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
* date_to (string) **required** - The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

### iatu.topups.reverse.post
Occasionally, a carrier will not be able to successfully complete a topup request. In this case, we will attempt to automatically reverse the transaction for you, and return the money into your account. In the case when this is not possible, you may need to request a reverse on the transaction that has a status of 'transaction_status' 'notredeemed'.


```js
idtbeyond.iatu.topups.reverse.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use
* body (undefined) **required**

### status.get
Returns a JSON of the API status.


```js
idtbeyond.status.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Parameters
* x-idt-beyond-app-id (string) **required** - Application ID you would like to use
* x-idt-beyond-app-key (string) **required** - Application KEY you would like to use

