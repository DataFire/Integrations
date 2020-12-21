# @datafire/nexmo_subaccounts

Client library for Subaccounts API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_subaccounts
```
```js
let nexmo_subaccounts = require('@datafire/nexmo_subaccounts').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Subaccounts API enables you to create subaccounts under your primary account. Subaccounts facilitate differential product configuration, reporting, and billing. The Subaccounts API is released initially with restricted availability. You can read more about the API in the [Subaccounts documentation](/account/subaccounts/overview).

## Actions

### retrieveBalanceTransfers
Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.



```js
nexmo_subaccounts.retrieveBalanceTransfers({
  "api_key": "",
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account.
  * start_date **required** `string`: Start of the retrieval period.
  * end_date `string`: End of the retrieval period. If absent then all transfers until now is returned.
  * subaccount `string`: Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts

#### Output
* output [ListBalanceTransfersResponse](#listbalancetransfersresponse)

### transferBalance
Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.



```js
nexmo_subaccounts.transferBalance({
  "api_key": "",
  "body": {
    "from": "",
    "to": "",
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account
  * body **required** [TransferBalanceOrCreditRequest](#transferbalanceorcreditrequest)

#### Output
* output [TransferBalanceResponse](#transferbalanceresponse)

### retrieveCreditTransfers
Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.



```js
nexmo_subaccounts.retrieveCreditTransfers({
  "api_key": "",
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account.
  * start_date **required** `string`: Start of the retrieval period.
  * end_date `string`: End of the retrieval period. If absent then all transfers until now is returned.
  * subaccount `string`: Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts

#### Output
* output [ListCreditTransfersResponse](#listcredittransfersresponse)

### transferCredit
Transfer credit limit between a primary account and one of its subaccounts.



```js
nexmo_subaccounts.transferCredit({
  "api_key": "",
  "body": {
    "from": "",
    "to": "",
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account
  * body **required** [TransferBalanceOrCreditRequest](#transferbalanceorcreditrequest)

#### Output
* output [TransferCreditResponse](#transfercreditresponse)

### retrieveSubaccountsList
Get the information of all the subaccounts owned by the primary account.



```js
nexmo_subaccounts.retrieveSubaccountsList({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account

#### Output
* output [SubaccountsAllResponse](#subaccountsallresponse)

### createSubAccount
Create a subaccount for a given primary account.



```js
nexmo_subaccounts.createSubAccount({
  "api_key": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account
  * body **required** [NewSubaccountRequest](#newsubaccountrequest)

#### Output
* output [SubaccountCreateResponse](#subaccountcreateresponse)

### retrieveSubaccount
Get the information of a subaccount specified with its API key.



```js
nexmo_subaccounts.retrieveSubaccount({
  "api_key": "",
  "subaccount_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account
  * subaccount_key **required** `string`: ID of the subaccount

#### Output
* output [SubaccountResponse](#subaccountresponse)

### modifySubaccount
Change one or more properties of a subaccount.



```js
nexmo_subaccounts.modifySubaccount({
  "api_key": "",
  "subaccount_key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: ID of the primary account
  * subaccount_key **required** `string`: ID of the subaccount
  * body **required** [ModifySubaccountRequest](#modifysubaccountrequest)

#### Output
* output [SubaccountResponse](#subaccountresponse)



## Definitions

### ListBalanceTransfersResponse
* ListBalanceTransfersResponse `object`
  * _embedded `object`
    * balance_transfers `array`
      * items [TransferBalanceResponse](#transferbalanceresponse)

### ListCreditTransfersResponse
* ListCreditTransfersResponse `object`
  * _embedded `object`
    * credit-transfers `array`
      * items [TransferCreditResponse](#transfercreditresponse)

### ModifySubaccountRequest
* ModifySubaccountRequest `object`
  * name `string`
  * suspended `boolean`
  * use_primary_account_balance `boolean`

### NewSubaccountRequest
* NewSubaccountRequest `object`
  * name **required** `string`
  * secret `string`
  * use_primary_account_balance `boolean`

### SubaccountCreateResponse
* SubaccountCreateResponse
  * secret `string`: API secret of the subaccount.
  * api_key `string`: Unique subaccount ID.
  * balance `number`: Balance of the subAccount. Value is null if balance is shared with primary account.
  * created_at `string`: Subaccount creation date and time.
  * credit_limit `number`: Credit limit of the subAccount. Value is null if balance is shared with primary account.
  * name `string`: Name of the subaccount.
  * primary_account_api_key `string`: Unique primary account ID.
  * suspended `boolean`: Subaccount suspension status.
  * use_primary_account_balance `boolean`: Flag showing if balance is shared with primary account.

### SubaccountResponse
* SubaccountResponse `object`
  * api_key `string`: Unique subaccount ID.
  * balance `number`: Balance of the subAccount. Value is null if balance is shared with primary account.
  * created_at `string`: Subaccount creation date and time.
  * credit_limit `number`: Credit limit of the subAccount. Value is null if balance is shared with primary account.
  * name `string`: Name of the subaccount.
  * primary_account_api_key `string`: Unique primary account ID.
  * suspended `boolean`: Subaccount suspension status.
  * use_primary_account_balance `boolean`: Flag showing if balance is shared with primary account.

### SubaccountsAllResponse
* SubaccountsAllResponse `object`
  * _embedded `object`
    * primary_account [SubaccountResponse](#subaccountresponse)
    * subaccounts `array`
      * items [SubaccountResponse](#subaccountresponse)

### TransferBalanceOrCreditRequest
* TransferBalanceOrCreditRequest `object`
  * amount **required** `number`
  * from **required** `string`
  * reference `string`
  * to **required** `string`

### TransferBalanceResponse
* TransferBalanceResponse `object`
  * amount `number`: Balance transfer amount
  * balance_transfer_id `string`: Unique balance transfer ID
  * created_at `string`: The date and time when the balance transfer was executed
  * from `string`: Account the balance is transferred from
  * reference `string`: Reference for the balance transfer
  * to `string`: Account the balance is transferred to

### TransferCreditResponse
* TransferCreditResponse `object`
  * amount `number`: Credit transfer amount
  * created_at `string`: The date and time when the credit transfer was executed
  * credit_transfer_id `string`: Unique credit transfer ID
  * from `string`: Account the credit is transferred from
  * reference `string`: Reference for the credit transfer
  * to `string`: Account the credit is transferred to


