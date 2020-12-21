# @datafire/apidapp

Client library for ApiDapp

## Installation and Usage
```bash
npm install --save @datafire/apidapp
```
```js
let apidapp = require('@datafire/apidapp').create({
  Key2: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### .options



```js
apidapp..options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### account.options



```js
apidapp.account.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### account.post
Create new account


```js
apidapp.account.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### account.id.get
Get account balance


```js
apidapp.account.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### account.id.options



```js
apidapp.account.id.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.get
Access detailed block information


```js
apidapp.block.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### block.options



```js
apidapp.block.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### block.id.get
Get information about particular block


```js
apidapp.block.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.id.options



```js
apidapp.block.id.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.id.transaction.get
Get transaction count within block


```js
apidapp.block.id.transaction.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.id.transaction.options



```js
apidapp.block.id.transaction.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.id.transaction.index.get
Get information about particular transaction within block


```js
apidapp.block.id.transaction.index.get({
  "index": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * index **required** `string`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### block.id.transaction.index.options



```js
apidapp.block.id.transaction.index.options({
  "id": "",
  "index": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * index **required** `string`

#### Output
* output [Empty](#empty)

### blockchain.get
Get a list of supported blockchains


```js
apidapp.blockchain.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### blockchain.options



```js
apidapp.blockchain.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### blockchain.id.get
Get information about blockchain woth given id


```js
apidapp.blockchain.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### blockchain.id.options



```js
apidapp.blockchain.id.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### contract.options



```js
apidapp.contract.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### contract.post
Create a new smart contract


```js
apidapp.contract.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### contract.id.get
Get contract balance


```js
apidapp.contract.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### contract.id.options



```js
apidapp.contract.id.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### contract.id.post
Call the contract


```js
apidapp.contract.id.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### echo.options



```js
apidapp.echo.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### erc20.get
Get token information such as name, total amount in circulation, etc


```js
apidapp.erc20.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### erc20.options



```js
apidapp.erc20.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### erc20.post



```js
apidapp.erc20.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### erc20.address.get
Get information amout token balance in the account


```js
apidapp.erc20.address.get({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`

#### Output
* output [Empty](#empty)

### erc20.address.options



```js
apidapp.erc20.address.options({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`

#### Output
* output [Empty](#empty)

### erc20.address.post
Transfer tokens to another account


```js
apidapp.erc20.address.post({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`

#### Output
* output [Empty](#empty)

### key.get



```js
apidapp.key.get({}, context)
```

#### Input
* input `object`
  * token `string`

#### Output
* output [Empty](#empty)

### key.options



```js
apidapp.key.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### key.post



```js
apidapp.key.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### key.key.delete



```js
apidapp.key.key.delete({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
* output [Empty](#empty)

### key.key.options



```js
apidapp.key.key.options({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
* output [Empty](#empty)

### transaction.options



```js
apidapp.transaction.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### transaction.post
Create a new transaction. Transfer Ether between accounts


```js
apidapp.transaction.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### transaction.hash.get
Get information about transaction by the transaction hash value


```js
apidapp.transaction.hash.get({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`

#### Output
* output [Empty](#empty)

### transaction.hash.options



```js
apidapp.transaction.hash.options({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`

#### Output
* output [Empty](#empty)

### transaction.hash.receipt.get
Get receipt detail information


```js
apidapp.transaction.hash.receipt.get({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`

#### Output
* output [Empty](#empty)

### transaction.hash.receipt.options



```js
apidapp.transaction.hash.receipt.options({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`

#### Output
* output [Empty](#empty)

### version.get
Get API version info


```js
apidapp.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### version.options



```js
apidapp.version.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.get
Get current account balance


```js
apidapp.wallet.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.options



```js
apidapp.wallet.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.post
Create personal wallet


```js
apidapp.wallet.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.account.get



```js
apidapp.wallet.account.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.account.options



```js
apidapp.wallet.account.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.account.post



```js
apidapp.wallet.account.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Empty](#empty)

### wallet.account.id.get
Get account balance


```js
apidapp.wallet.account.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### wallet.account.id.options



```js
apidapp.wallet.account.id.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### wallet.account.id.contract.post



```js
apidapp.wallet.account.id.contract.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### wallet.account.id.erc20.post



```js
apidapp.wallet.account.id.erc20.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### wallet.account.id.pay.options



```js
apidapp.wallet.account.id.pay.options({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)

### wallet.account.id.pay.post
Send payment from the account held within the wallet


```js
apidapp.wallet.account.id.pay.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Empty](#empty)



## Definitions

### Empty
* Empty Schema `object`


