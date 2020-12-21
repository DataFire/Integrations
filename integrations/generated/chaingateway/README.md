# @datafire/chaingateway

Client library for Chaingateway.io

## Installation and Usage
```bash
npm install --save @datafire/chaingateway
```
```js
let chaingateway = require('@datafire/chaingateway').create();

.then(data => {
  console.log(data);
});
```

## Description

# Chaingateway.io

REST API to build the bridge between Ethereum and the real world

Please check out our [website](https://chaingateway.io?utm_source=postman) for detailed information about this API.

To use our API, you need an API Key (Described as Authorization header in the examples below).
To get one, please create an account on our [website](https://chaingateway.io/register?utm_source=postman).

For our internal documentation, please check out our [Docs Site](https://chaingateway.io/docs?utm_source=postman).

If you need help with integrating our API in your application, you can reach us via [email](mailto:support@chaingateway.io) or join our official [Telegram](https://t.me/chaingateway) group.

## Actions

### clearAddress
Sends all available ethereum funds of an address to a specified receiver address.


```js
chaingateway.clearAddress({
  "Authorization": "",
  "body": {
    "ethereumaddress": "",
    "newaddress": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [clearAddressRequest](#clearaddressrequest)

#### Output
* output [clearAddress](#clearaddress)

### deleteAddress
Deletes an existing ethereum address. Be careful when using this function.


```js
chaingateway.deleteAddress({
  "Authorization": "",
  "body": {
    "ethereumaddress": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [deleteAddressRequest](#deleteaddressrequest)

#### Output
* output [deleteAddress](#deleteaddress)

### exportAddress
Returns all ethereum addresses created with an account.


```js
chaingateway.exportAddress({
  "Authorization": "",
  "body": {
    "ethaddress": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [exportAddressRequest](#exportaddressrequest)

#### Output
* output [exportAddress](#exportaddress)

### getBlock
Returns information of an ethereum block with or without transactions


```js
chaingateway.getBlock({
  "Authorization": "",
  "body": {
    "block": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getBlockRequest](#getblockrequest)

#### Output
* output [getBlock](#getblock)

### getEthereumBalance
Returns the ethereum balance of a given address.


```js
chaingateway.getEthereumBalance({
  "Authorization": "",
  "body": {
    "ethereumaddress": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getEthereumBalanceRequest](#getethereumbalancerequest)

#### Output
* output [getEthereumBalance](#getethereumbalance)

### getExchangeRate
Returns the current Ethereum price in Euro or US Dollar.


```js
chaingateway.getExchangeRate({
  "Authorization": "",
  "body": {
    "currency": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getExchangeRateRequest](#getexchangeraterequest)

#### Output
* output [getExchangeRate](#getexchangerate)

### getGasPrice
Returns the current gas price in GWEI.


```js
chaingateway.getGasPrice({
  "Content-Type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Authorization **required** `string`: API Key

#### Output
* output [getGasPrice](#getgasprice)

### getLastBlockNumber
Returns the block number of the last mined ethereum block.


```js
chaingateway.getLastBlockNumber({
  "Content-Type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Authorization **required** `string`: API Key

#### Output
* output [getLastBlockNumber](#getlastblocknumber)

### getToken
Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.


```js
chaingateway.getToken({
  "Authorization": "",
  "body": {
    "contractaddress": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getTokenRequest](#gettokenrequest)

#### Output
* output [getToken](#gettoken)

### getTokenBalance
Returns the token balance of a given address.


```js
chaingateway.getTokenBalance({
  "Authorization": "",
  "body": {
    "contractaddress": "",
    "ethereumaddress": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getTokenBalanceRequest](#gettokenbalancerequest)

#### Output
* output [getTokenBalance](#gettokenbalance)

### getTransactions
Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.


```js
chaingateway.getTransactions({
  "Authorization": "",
  "body": {
    "txid": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [getTransactionsRequest](#gettransactionsrequest)

#### Output
* output [getTransactions](#gettransactions)

### importAddress
Returns all ethereum addresses created with an account.


```js
chaingateway.importAddress({
  "Authorization": "",
  "body": {
    "filename": "",
    "content": {
      "version": 0,
      "id": "",
      "address": "",
      "crypto": {
        "ciphertext": "",
        "cipherparams": {
          "iv": ""
        },
        "cipher": "",
        "kdf": "",
        "kdfparams": {
          "dklen": 0,
          "salt": "",
          "n": 0,
          "r": 0,
          "p": 0
        },
        "mac": ""
      }
    },
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [importAddressRequest](#importaddressrequest)

#### Output
* output [importAddress](#importaddress)

### listAddresses
Returns all ethereum addresses created with an account.


```js
chaingateway.listAddresses({
  "Content-Type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Authorization **required** `string`: API Key

#### Output
* output [listAddresses](#listaddresses)

### listFailedIPNs
Returns all subscriptions/IPNs created with an account.


```js
chaingateway.listFailedIPNs({
  "Content-Type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Authorization **required** `string`: API Key

#### Output
* output [listFailedIPNs](#listfailedipns)

### listSubscribedAddresses
Returns all subscriptions/IPNs created with an account.


```js
chaingateway.listSubscribedAddresses({
  "Content-Type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Authorization **required** `string`: API Key

#### Output
* output [listSubscribedAddresses](#listsubscribedaddresses)

### newAddress
Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.


```js
chaingateway.newAddress({
  "Authorization": "",
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [newAddressRequest](#newaddressrequest)

#### Output
* output [newAddress](#newaddress)

### resendFailedIPN
Returns all subscriptions/IPNs created with an account.


```js
chaingateway.resendFailedIPN({
  "Authorization": "",
  "body": {
    "id": 0
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [resendFailedIPNRequest](#resendfailedipnrequest)

#### Output
* output [resendFailedIPN](#resendfailedipn)

### sendEthereum
Sends ethereum from an address controlled by the account to a specified receiver address.


```js
chaingateway.sendEthereum({
  "Authorization": "",
  "body": {
    "from": "",
    "to": "",
    "password": "",
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [sendEthereumRequest](#sendethereumrequest)

#### Output
* output [sendEthereum](#sendethereum)

### sendToken
Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.


```js
chaingateway.sendToken({
  "Authorization": "",
  "body": {
    "contractaddress": "",
    "from": "",
    "to": "",
    "password": "",
    "amount": 0,
    "identifier": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [sendTokenRequest](#sendtokenrequest)

#### Output
* output [sendToken](#sendtoken)

### subscribeAddress
Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.



```js
chaingateway.subscribeAddress({
  "Authorization": "",
  "body": {
    "ethereumaddress": "",
    "contractaddress": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [subscribeAddressRequest](#subscribeaddressrequest)

#### Output
* output [subscribeAddress](#subscribeaddress)

### unsubscribeAddress
Deletes an existing subscription/IPN for the given address (and contractaddress).


```js
chaingateway.unsubscribeAddress({
  "Authorization": "",
  "body": {
    "ethereumaddress": "",
    "contractaddress": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: API Key
  * body **required** [unsubscribeAddressRequest](#unsubscribeaddressrequest)

#### Output
* output [unsubscribeAddress](#unsubscribeaddress)



## Definitions

### Address
* Address `object`
  * ethereumaddress **required** `string`

### Cipherparams
* Cipherparams `object`
  * iv **required** `string`

### Content
* Content `object`
  * address **required** `string`
  * crypto **required** [Crypto](#crypto)
  * id **required** `string`
  * version **required** `integer`

### Crypto
* Crypto `object`
  * cipher **required** `string`
  * cipherparams **required** [Cipherparams](#cipherparams)
  * ciphertext **required** `string`
  * kdf **required** `string`
  * kdfparams **required** [Kdfparams](#kdfparams)
  * mac **required** `string`

### FailedIpn
* FailedIpn `object`
  * action **required** `string`
  * amount **required** `string`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * id **required** `string`
  * timestamp **required** `string`
  * url **required** `string`

### Ipn
* Ipn `object`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * url **required** `string`

### Kdfparams
* Kdfparams `object`
  * dklen **required** `integer`
  * n **required** `integer`
  * p **required** `integer`
  * r **required** `integer`
  * salt **required** `string`

### Transaction
* Transaction `object`
  * amount **required** `string`
  * block_number **required** `string`
  * contract_address **required** `string`
  * from **required** `string`
  * gas **required** `string`
  * gas_price **required** `string`
  * to **required** `string`
  * token_decimals **required** `string`
  * token_name **required** `string`
  * token_supply **required** `string`
  * token_symbol **required** `string`
  * txid **required** `string`
  * type **required** `string`

### clearAddress
* clearAddress `object`
  * amount **required** `number`
  * ethereumaddress **required** `string`
  * gas **required** `number`
  * newaddress **required** `string`
  * ok **required** `boolean`
  * total **required** `string`
  * txid **required** `string`

### clearAddressRequest
* clearAddressRequest `object`
  * ethereumaddress **required** `string`
  * newaddress **required** `string`
  * password **required** `string`

### deleteAddress
* deleteAddress `object`
  * deleted **required** `boolean`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`

### deleteAddressRequest
* deleteAddressRequest `object`
  * ethereumaddress **required** `string`
  * password **required** `string`

### exportAddress
* exportAddress `object`
  * content **required** `string`
  * filename **required** `string`
  * ok **required** `boolean`

### exportAddressRequest
* exportAddressRequest `object`
  * ethaddress **required** `string`
  * password **required** `string`

### getBlock
* getBlock `object`
  * block_number **required** `string`
  * difficulty **required** `string`
  * gas_limit **required** `string`
  * gas_used **required** `string`
  * hash **required** `string`
  * miner **required** `string`
  * ok **required** `boolean`
  * parent_hash **required** `string`
  * size_in_bytes **required** `string`
  * time_stamp **required** `string`
  * transactions_count **required** `string`

### getBlockRequest
* getBlockRequest `object`
  * block **required** `string`

### getEthereumBalance
* getEthereumBalance `object`
  * balance **required** `number`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`

### getEthereumBalanceRequest
* getEthereumBalanceRequest `object`
  * ethereumaddress **required** `string`

### getExchangeRate
* getExchangeRate `object`
  * currency **required** `string`
  * ok **required** `boolean`
  * rate **required** `number`

### getExchangeRateRequest
* getExchangeRateRequest `object`
  * currency **required** `string`

### getGasPrice
* getGasPrice `object`
  * gasprice **required** `integer`
  * ok **required** `boolean`

### getLastBlockNumber
* getLastBlockNumber `object`
  * blocknumber **required** `integer`
  * ok **required** `boolean`

### getToken
* getToken `object`
  * contractaddress **required** `string`
  * decimals **required** `integer`
  * name **required** `string`
  * ok **required** `boolean`
  * supply **required** `integer`
  * symbol **required** `string`

### getTokenBalance
* getTokenBalance `object`
  * balance **required** `integer`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`

### getTokenBalanceRequest
* getTokenBalanceRequest `object`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`

### getTokenRequest
* getTokenRequest `object`
  * contractaddress **required** `string`

### getTransactions
* getTransactions `object`
  * ok **required** `boolean`
  * transactions **required** `array`
    * items [Transaction](#transaction)

### getTransactionsRequest
* getTransactionsRequest `object`
  * txid **required** `string`

### importAddress
* importAddress `object`
  * ethaddress **required** `string`
  * filename **required** `string`
  * ok **required** `boolean`

### importAddressRequest
* importAddressRequest `object`
  * content **required** [Content](#content)
  * filename **required** `string`
  * password **required** `string`

### listAddresses
* listAddresses `object`
  * addresses **required** `array`
    * items [Address](#address)
  * ok **required** `boolean`

### listFailedIPNs
* listFailedIPNs `object`
  * failed_ipns **required** `array`
    * items [FailedIpn](#failedipn)
  * ok **required** `boolean`

### listSubscribedAddresses
* listSubscribedAddresses `object`
  * ipns **required** `array`
    * items [Ipn](#ipn)
  * ok **required** `boolean`

### newAddress
* newAddress `object`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`
  * password **required** `string`

### newAddressRequest
* newAddressRequest `object`
  * password **required** `string`

### resendFailedIPN
* resendFailedIPN `object`
  * id **required** `integer`
  * ok **required** `boolean`

### resendFailedIPNRequest
* resendFailedIPNRequest `object`
  * id **required** `integer`

### sendEthereum
* sendEthereum `object`
  * amount **required** `string`
  * from **required** `string`
  * ok **required** `boolean`
  * to **required** `string`
  * txid **required** `string`

### sendEthereumRequest
* sendEthereumRequest `object`
  * amount **required** `number`
  * from **required** `string`
  * password **required** `string`
  * to **required** `string`

### sendToken
* sendToken `object`
  * amount **required** `integer`
  * contractaddress **required** `string`
  * from **required** `string`
  * identifier **required** `string`
  * ok **required** `boolean`
  * to **required** `string`
  * txid **required** `string`

### sendTokenRequest
* sendTokenRequest `object`
  * amount **required** `integer`
  * contractaddress **required** `string`
  * from **required** `string`
  * identifier **required** `string`
  * password **required** `string`
  * to **required** `string`

### subscribeAddress
* subscribeAddress `object`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`
  * url **required** `string`

### subscribeAddressRequest
* subscribeAddressRequest `object`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * url **required** `string`

### unsubscribeAddress
* unsubscribeAddress `object`
  * contractaddress **required** `string`
  * deleted **required** `boolean`
  * ethereumaddress **required** `string`
  * ok **required** `boolean`
  * url **required** `string`

### unsubscribeAddressRequest
* unsubscribeAddressRequest `object`
  * contractaddress **required** `string`
  * ethereumaddress **required** `string`
  * url **required** `string`


