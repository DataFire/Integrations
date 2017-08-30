# @datafire/storecove

Client library for Storecove

## Installation and Usage
```bash
npm install --save datafire @datafire/storecove
```

```js
let datafire = require('datafire');
let storecove = require('@datafire/storecove').create({
  Bearer: "",
});

storecove.create_invoice_submission({}).then(data => {
  console.log(data);
})
```

## Description
Storecove API

## Actions
### create_invoice_submission
Submit an invoice for delivery.
include::examples/invoice_submissions/create_invoice_submission/tabs.adoc[]


```js
storecove.create_invoice_submission({
  "invoice_submission": {
    "mode": "",
    "supplierId": 0,
    "invoiceRecipient": {},
    "invoice": {
      "invoiceNumber": "",
      "issueDate": "",
      "accountingCustomerParty": {
        "party": {
          "companyName": "",
          "address": {
            "country": ""
          }
        }
      },
      "invoiceLines": [],
      "amountIncludingVat": 0
    }
  }
}, context)
```

#### Parameters
* invoice_submission (object) **required** - The invoice you want Storecove to process, with some meta-data.

### preflight_invoice_recipient
Check whether Storecove can deliver an invoice for a list of ids.
include::examples/invoice_submissions/preflight_invoice_recipient/tabs.adoc[]


```js
storecove.preflight_invoice_recipient({
  "invoice_recipient_preflight": {
    "supplierId": 0,
    "invoiceRecipient": {}
  }
}, context)
```

#### Parameters
* invoice_recipient_preflight (object) **required** - Identifies the invoice recipient to preflight

### shop_account_requests_index
Retrieve all active ShopAccountRequests for one of your entities.
include::examples/shop_account_requests/shop_account_requests_index/tabs.adoc[]


```js
storecove.shop_account_requests_index({
  "external_user_id": ""
}, context)
```

#### Parameters
* external_user_id (string) **required** - Filter by the external_user_id

### create_shop_account_request
Create a new ShopAccountRequest
include::examples/shop_account_requests/create_shop_account_request/tabs.adoc[]


```js
storecove.create_shop_account_request({
  "shop_account_request": null
}, context)
```

#### Parameters
* shop_account_request (undefined) **required**

### delete_shop_account_request
Delete a specific ShopAccountRequest
include::examples/shop_account_requests/delete_shop_account_request/tabs.adoc[]


```js
storecove.delete_shop_account_request({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - shop_account_request id

### get_shop_account_request
Show a specific ShopAccountRequest
include::examples/shop_account_requests/get_shop_account_request/tabs.adoc[]


```js
storecove.get_shop_account_request({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - shop_account_request id

### update_shop_account_request
Update a specific ShopAccountRequest
include::examples/shop_account_requests/update_shop_account_request/tabs.adoc[]


```js
storecove.update_shop_account_request({
  "id": 0,
  "shop_account_request": null
}, context)
```

#### Parameters
* id (integer) **required** - shop_account_request id
* shop_account_request (undefined) **required**

### shop_accounts_index
Retrieve all active ShopAccounts for one of your entities.
include::examples/shop_accounts/shop_accounts_index/tabs.adoc[]


```js
storecove.shop_accounts_index({
  "external_user_id": ""
}, context)
```

#### Parameters
* external_user_id (string) **required** - Filter by the external_user_id

### create_shop_account
Create a new ShopAccount.
include::examples/shop_accounts/create_shop_account/tabs.adoc[]


```js
storecove.create_shop_account({
  "shop_account": null
}, context)
```

#### Parameters
* shop_account (undefined) **required**

### shop_accounts_auth_failures
Get ShopAccounts with authorization failures.
include::examples/shop_accounts/shop_accounts_auth_failures/tabs.adoc[]


```js
storecove.shop_accounts_auth_failures(null, context)
```

#### Parameters
*This action has no parameters*

### delete_shop_account
Delete a specific ShopAccount.
include::examples/shop_accounts/delete_shop_account/tabs.adoc[]


```js
storecove.delete_shop_account({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - shop_account id

### get_shop_account
Get a specific ShopAccount.
include::examples/shop_accounts/get_shop_account/tabs.adoc[]


```js
storecove.get_shop_account({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - shop_account id

### update_shop_account
Update a specific ShopAccount.
include::examples/shop_accounts/update_shop_account/tabs.adoc[]


```js
storecove.update_shop_account({
  "id": 0,
  "shop_account": null
}, context)
```

#### Parameters
* id (integer) **required** - shop_account id
* shop_account (undefined) **required**

### shops_index
Get all available shops.
include::examples/shops/shops_index/tabs.adoc[]


```js
storecove.shops_index(null, context)
```

#### Parameters
*This action has no parameters*

