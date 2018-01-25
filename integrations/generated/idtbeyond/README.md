# @datafire/idtbeyond

Client library for Active Documentation for /v1

## Installation and Usage
```bash
npm install --save @datafire/idtbeyond
```
```js
let idtbeyond = require('@datafire/idtbeyond').create();

idtbeyond.iatu.balance.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * date_from **required** `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
  * date_to **required** `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * date_from **required** `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
  * date_to **required** `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * country_code **required** `string`: 2-digit code of the country in ISO 3166 format. 'BR'
  * mobile_number **required** `string`: The mobile number you would like to validate. '5521983115555'

#### Output
*Output schema unknown*

### iatu.products.promotions.get
Returns a JSON of the current promotions.


```js
idtbeyond.iatu.products.promotions.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use

#### Output
*Output schema unknown*

### iatu.products.reports.all.get
Returns a JSON list of products, ranges, and their commissions percentages.


```js
idtbeyond.iatu.products.reports.all.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use

#### Output
*Output schema unknown*

### iatu.products.reports.all.csv.get
Returns a CSV of products, ranges, and their commissions percentages.


```js
idtbeyond.iatu.products.reports.all.csv.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * country_code **required** `string`: 2-digit code of the country in ISO 3166 format. 'GT'
  * carrier_code **required** `string`: Name of the mobile carrier. 'Claro'
  * amount **required** `integer`: This is the amount, in cents, of the product you are purchasing. '500' = $5.00
  * currency_code **required** `string`: The currency code (ISO 4217) on the product you are querying. 'USD'

#### Output
*Output schema unknown*

### iatu.topups.post
Submits an IATU transaction request.


```js
idtbeyond.iatu.topups.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * body **required** [Topups](#topups)

#### Output
*Output schema unknown*

### iatu.topups.reports.post
Search topups transactions, by date, with client_transaction_id or to_service_number. Use 'client_transaction_id' to search by transaction number, or 'to_service_number' to get transaction status.


```js
idtbeyond.iatu.topups.reports.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * body **required** [TopupsReports](#topupsreports)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * date_from **required** `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
  * date_to **required** `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * date_from **required** `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
  * date_to **required** `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * date_from **required** `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'
  * date_to **required** `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'

#### Output
*Output schema unknown*

### iatu.topups.reverse.post
Occasionally, a carrier will not be able to successfully complete a topup request. In this case, we will attempt to automatically reverse the transaction for you, and return the money into your account. In the case when this is not possible, you may need to request a reverse on the transaction that has a status of 'transaction_status' 'notredeemed'.


```js
idtbeyond.iatu.topups.reverse.post({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use
  * body **required** [TopupsReversal](#topupsreversal)

#### Output
*Output schema unknown*

### status.get
Returns a JSON of the API status.


```js
idtbeyond.status.get({
  "x-idt-beyond-app-id": "",
  "x-idt-beyond-app-key": ""
}, context)
```

#### Input
* input `object`
  * x-idt-beyond-app-id **required** `string`: Application ID you would like to use
  * x-idt-beyond-app-key **required** `string`: Application KEY you would like to use

#### Output
*Output schema unknown*



## Definitions

### Topups
* Topups `object`
  * amount `integer`: The amount, in cents, of the product you are purchasing. '500' = $5.00
  * carrier_code `string`: Name of the mobile carrier. 'Claro'
  * client_transaction_id `string`: UNIQUE 15 char ID you use to track topups. 'trans0123456789'
  * country_code `string`: 2-digit code of the country in ISO 3166 format. 'GT'
  * mobile_number `string`: Mobile number to topup. VALIDATE prior to submission. '50231234567'
  * plan `string`: The Application plan being used. Case-sensitive. 'Sandbox' or 'Production'
  * product_code `string`: Optional code to distinguish one particular product from another. '76560'
  * terminal_id `string`: ID for the Terminal used to perform the topup. 'Kiosk 5'

### TopupsReports
* TopupsReports `object`
  * client_transaction_id `string`: The UNIQUE 15 char ID used to track topups. 'trans0123456789'
  * date_from `string`: The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). Not used in query by to_service_number. '2016-01-28'
  * date_to `string`: The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). Not used in query by to_service_number. '2016-01-28'
  * to_service_number `string`: Enter the to_service_number returned in the response to track the current transaction status. '0123456789'
  * type_of_report `string`: The type of query you would like to search by.

### TopupsReversal
* TopupsReversal `object`
  * client_transaction_id `string`: UNIQUE 15 char ID you use to track topups. 'trans0123456789'
  * to_service_number `string`: UNIQUE IDT transaction number found in the response of a successful topup request. '0123456789'


