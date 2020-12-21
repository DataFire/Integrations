# @datafire/nexmo_external_accounts

Client library for External Accounts API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_external_accounts
```
```js
let nexmo_external_accounts = require('@datafire/nexmo_external_accounts').create({
  username: "",
  password: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The External Accounts API is used to manage accounts for Viber Service Messages, Facebook Messenger and Whatsapp for use in the [Messages](https://developer.nexmo.com/messages/overview) and [Dispatch](https://developer.nexmo.com/dispatch/overview) APIs.

## Actions

### GetAllAccounts
Retrieve all accounts you own


```js
nexmo_external_accounts.GetAllAccounts({}, context)
```

#### Input
* input `object`
  * provider `string` (values: messenger, viber_service_msg, whatsapp): Filter by provider
  * page_number `integer`: Page number of the results
  * page_size `integer`: Page size of the results

#### Output
* output `object`
  * _embedded `array`
    * items [GetAllAccountResponse](#getallaccountresponse)
  * _links `object`
    * first `object`
      * href `string`
    * last `object`
      * href `string`
    * next `object`
      * href `string`
    * prev `object`
      * href `string`
    * self `object`
      * href `string`
  * page_number `integer`
  * page_size `integer`

### CreateMessengerAccount
Create a Messenger account


```js
nexmo_external_accounts.CreateMessengerAccount({
  "body": {
    "external_id": "",
    "access_token": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * access_token **required** `string`: This is the Facebook Page token. You can obtain the token using one of the following methods <ul> <li>Use our tool to link a page to your Vonage API account [https://messenger.nexmo.com](https://messenger.nexmo.com)</li> <li>Following the official [token reference](https://developers.facebook.com/docs/pages/access-tokens/)</li> </ul>
    * applications `array`: Contains a list of application IDs which are linked to the account. <ul> <li>There is just one application allowed per an account.</li> <li>The application type must be type "messages".</li> </ul> For more information see [Application API spec](https://developer.nexmo.com/api/application.v2)
      * items `string`
    * external_id **required** `string`: This is the unique identifier within the provider's domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click "Settings", click "Messenger platform " scroll down to "Messenger link" to find your Page ID.
    * name `string`: Custom account name

#### Output
* output [MessengerAccountResponse](#messengeraccountresponse)

### DeleteMessengerAccount
Delete a Messenger account


```js
nexmo_external_accounts.DeleteMessengerAccount({
  "external_id": ""
}, context)
```

#### Input
* input `object`
  * external_id **required** `string`: External id of the account you want to delete. In this case it is the Facebook Page ID.

#### Output
*Output schema unknown*

### GetMessengerAccount
Retrieve a Messenger account


```js
nexmo_external_accounts.GetMessengerAccount({
  "external_id": ""
}, context)
```

#### Input
* input `object`
  * external_id **required** `string`: External id of the account you want to retrieve. In this case it is the Facebook Page ID.

#### Output
* output [MessengerAccountResponse](#messengeraccountresponse)

### UpdateMessengerAccount
Update a Messenger account


```js
nexmo_external_accounts.UpdateMessengerAccount({
  "external_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * external_id **required** `string`: External id of the account you want to update. In this case it is the Facebook Page ID.
  * body **required** `object`
    * access_token `string`
    * applications `array`
      * items `string`
    * name `string`: The new account name

#### Output
* output `object`
  * access_token **required** `string`: The provider access token
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account. In this case it is the Facebook Page ID.
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `messenger`).

### GetVSMAccount
Retrieve a Viber Service Message account


```js
nexmo_external_accounts.GetVSMAccount({
  "external_id": ""
}, context)
```

#### Input
* input `object`
  * external_id **required** `string`: External id of the account you want to retrieve. In this case it will be your Viber Service Message ID.

#### Output
* output [VSMAccountResponse](#vsmaccountresponse)

### GetWAAccount
Retrieve a Whatsapp account


```js
nexmo_external_accounts.GetWAAccount({
  "external_id": ""
}, context)
```

#### Input
* input `object`
  * external_id **required** `string`: External id of the account you want to retrieve. In this case it will be the WhatsApp number.

#### Output
* output [WAAccountResponse](#waaccountresponse)

### LinkApplication
Link application to an account


```js
nexmo_external_accounts.LinkApplication({
  "provider": "",
  "external_id": "",
  "body": {
    "application": ""
  }
}, context)
```

#### Input
* input `object`
  * provider **required** `string` (values: messenger, viber_service_msg, whatsapp): Provider of the account you want to assign an application to
  * external_id **required** `string`: External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.
  * body **required** `object`
    * application **required** `string`: There is just one application allowed per an account. The application type must be type "messages". For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2)

#### Output
* output [AccountResponse](#accountresponse)

### UnliWithoutApplicationnkApplication
Unlink application from an account


```js
nexmo_external_accounts.UnliWithoutApplicationnkApplication({
  "provider": "",
  "external_id": "",
  "application_id": ""
}, context)
```

#### Input
* input `object`
  * provider **required** `string` (values: messenger, viber_service_msg, whatsapp): Provider of the account you want to unlink an application from
  * external_id **required** `string`: External id of the account you want to unlink an application from
  * application_id **required** `string`: Id of the application you want to unlink

#### Output
*Output schema unknown*



## Definitions

### 401Response
* 401Response `object`
  * detail `string`
  * title `string`

### 403Response
* 403Response `object`
  * title `string`

### AccountResponse
* AccountResponse `object`
  * access_token `string`: The provider access token (only for `messenger`)
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string` (values: messenger, viber_service_msg, whatsapp): The provider (will be one of `messenger, viber_service_msg, whatsapp`).

### GetAllAccountResponse
* GetAllAccountResponse
  * access_token **required** `string`: The provider access token
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `messenger`).
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `viber_service_msg`).
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `whatsapp`).

### MessengerAccountResponse
* MessengerAccountResponse `object`
  * access_token **required** `string`: The provider access token
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `messenger`).

### VSMAccountResponse
* VSMAccountResponse `object`
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `viber_service_msg`).

### WAAccountResponse
* WAAccountResponse `object`
  * api_key **required** `string`: The external api key for this account
  * applications `array`: The array of associated application ids
    * items `string`
  * external_id **required** `string`: The external identifier for this account
  * name `string`: The account name
  * provider **required** `string`: The provider (will be `whatsapp`).


