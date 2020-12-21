# @datafire/nexmo_account

Client library for Account API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_account
```
```js
let nexmo_account = require('@datafire/nexmo_account').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Enables users to manage their Vonage API Account by programmable means. More information is available here: <https://developer.nexmo.com/account/overview>.

## Actions

### getAccountBalance
Retrieve the current balance of your Vonage API account


```js
nexmo_account.getAccountBalance({
  "api_key": "",
  "api_secret": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)

#### Output
* output [accountBalance](#accountbalance)

### changeAccountSettings
Update the default webhook URLs associated with your account:
  * Callback URL for incoming SMS messages
  * Callback URL for delivery receipts

Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.


```js
nexmo_account.changeAccountSettings({
  "api_key": "",
  "api_secret": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
  * drCallBackUrl `string`: The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.
  * moCallBackUrl `string`: The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.

#### Output
* output [accountSettings](#accountsettings)

### topUpAccountBalance
You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled.
Your account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.


```js
nexmo_account.topUpAccountBalance({
  "api_key": "",
  "api_secret": "",
  "trx": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
  * trx **required** `string`: The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.

#### Output
* output [success](#success)

### retrieveAPISecrets
Retrieve API Secrets


```js
nexmo_account.retrieveAPISecrets({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: The API key to manage secrets for

#### Output
* output `object`
  * _embedded `object`: The single `secrets` key returns an array of API secrets
    * secrets `array`: Array of API secrets
      * items [secretInfo](#secretinfo)
  * _links [secretMgmtLinks](#secretmgmtlinks)

### createAPISecret
Create API Secret


```js
nexmo_account.createAPISecret({
  "api_key": "",
  "body": {
    "secret": ""
  }
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: The API key to manage secrets for
  * body **required** [createSecretRequest](#createsecretrequest)

#### Output
* output [secretInfo](#secretinfo)

### revokeAPISecret
Revoke an API Secret


```js
nexmo_account.revokeAPISecret({
  "api_key": "",
  "secret_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: The API key to manage secrets for
  * secret_id **required** `string`: ID of the API Secret

#### Output
*Output schema unknown*

### retrieveAPISecret
Retrieve one API Secret


```js
nexmo_account.retrieveAPISecret({
  "api_key": "",
  "secret_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: The API key to manage secrets for
  * secret_id **required** `string`: ID of the API Secret

#### Output
* output [secretInfo](#secretinfo)



## Definitions

### ErrorAPIKeyNotFound
* ErrorAPIKeyNotFound `object`: This API key was not recognised
  * detail **required** `string`: More detail regarding this error, including the API key supplied
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Description of the error
  * type **required** `string`: URL for further information

### ErrorAuthenticationFailed
* ErrorAuthenticationFailed `object`: Authentication Failed

### ErrorAuthenticationFailedAccountBalance
* ErrorAuthenticationFailedAccountBalance `object`: Authentication Failed

### ErrorAutoReloadNotEnabled
* ErrorAutoReloadNotEnabled `object`: Auto-Reload not enabled

### ErrorSecretIDNotFound
* ErrorSecretIDNotFound `object`: This secret ID was not recognised
  * detail **required** `string`: More detail regarding this error, including the secret ID supplied
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Description of the error
  * type **required** `string`: URL for further information

### accountBalance
* accountBalance `object`
  * autoReload `boolean` (values: true, false): Whether the account has auto-reloading enabled
  * value `number`: The balance of the account, in EUR

### accountSettings
* accountSettings `object`
  * dr-callback-url `string`: The current or updated delivery receipt webhook URI
  * max-calls-per-second `integer`: The maximum number of API calls per second.
  * max-inbound-request `integer`: The maximum number of inbound messages per second.
  * max-outbound-request `integer`: The maximum number of outbound messages per second.
  * mo-callback-url `string`: The current or updated inbound message webhook URI

### accountSettingsRequest
* accountSettingsRequest `object`
  * drCallBackUrl `string`: The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.
  * moCallBackUrl `string`: The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.

### createSecretRequest
* createSecretRequest `object`
  * secret **required** `string`: The new secret must follow these rules:

### secretInfo
* secretInfo `object`
  * _links [secretMgmtLinks](#secretmgmtlinks)
  * created_at `string`: Creation date/time for this secret
  * id `string`: Secret ID

### secretMgmtLinks
* secretMgmtLinks `object`: Links related to this resource
  * self `object`: This resource
    * href `string`: The URI for this resource

### success
* success `object`

### topupRequest
* topupRequest `object`
  * trx **required** `string`: The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.


