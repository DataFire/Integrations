# @datafire/whapi_sessions

Client library for Sessions

## Installation and Usage
```bash
npm install --save @datafire/whapi_sessions
```
```js
let whapi_sessions = require('@datafire/whapi_sessions').create({
  apiKey: ""
});

whapi_sessions.logIn({}).then(data => {
  console.log(data);
})
```

## Description

The William Hill Sessions API uses a central authentication service (CAS*) on all resources that require access to a customer’s account or betting functionality. To authenticate, you’ll need to supply a sportsbook username and password, in return you will be given an authentication ticket, which you can use on the majority of requests found within our services. <br /><br /><br /> The Sessions API should be used whenever you want to login a customer and:<br /><br /> <ul> <li>continue to use the William Hill API for that customer’s transactions</li> <li>use other CAS-enabled William Hill services outside the suite of APIs</li> </ul> <br /> CAS is an enterprise Single Sign-On solution for web services (see https://wiki.jasig.org/display/CAS/Home). It is used by many William Hill services. <br /> Note: all requests must be executed over HTTPS and include an API key and secret.<br /><br /><br /> <b>Authentication Ticket Expiration Times</b><br /><br /> When a customer is logged in using the Sessions API, they are given an Authentication Ticket; using this ticket on subsequent API requests gives you access to account activities (such as placing a bet, deposits, etc). However, this ticket is only valid for a given period of time depending on how it is used. If the ticket is used and then has a period of inactivity longer than 7,200 seconds (2 hours), then the ticket will expire and further requests using the ticket will be denied - in effect, a customer has been logged out and will need to authenticate again. <br /><br /><br /> Normally, any ticket issued only has a maximum life expectancy of 28,000 seconds (8 hours) after which it can no longer be used, even if it has been used regularly. The customer again will be effectively logged out and will need to authenticate again. If you wish to avoid this, you need to set the query parameter extended to Y, which will enable your application to generate a ticket valid for 60 days without expiring due to inactivity. <br />

## Actions

### logIn
Logs in a customer by obtaining an authentication ticket. It can then be used directly with the other William Hill APIs to access a customer’s sportsbook account, place a bet, etc. 


```js
whapi_sessions.logIn({
  "apiSecret": "",
  "login": {
    "password": "",
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)
  * login **required** [loginRequest](#loginrequest)

#### Output
* output [session](#session)

### logOut
Logs out a customer.


```js
whapi_sessions.logOut({
  "apiSecret": "",
  "tgt": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * tgt **required** `string`: Ticket Granting Ticket obtained from a previous request

#### Output
* output [logoutresponse](#logoutresponse)

### validateSession
Checks the validity of a session ticket.


```js
whapi_sessions.validateSession({
  "apiSecret": "",
  "tgt": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * tgt **required** `string`: Ticket Granting Ticket obtained from a previous request

#### Output
* output [ticketvalidityresponse](#ticketvalidityresponse)

### getServiceTicket
Obtains a one-time Service Ticket that can be used to access other CAS enabled William Hill services that are not available through the standard suite of APIs. You first need to have logged in a customer to obtain an Authentication Ticket.


```js
whapi_sessions.getServiceTicket({
  "apiSecret": "",
  "tgt": "",
  "target": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * tgt **required** `string`: Ticket Granting Ticket obtained from a previous request
  * target **required** `string`: The target URL of the CAS enabled service that you want to use with the service ticket.
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)

#### Output
* output [serviceTicket](#serviceticket)



## Definitions

### error
* error `object`
  * code `string`: A unique William Hill identifier for the error
  * field `string`: To help pinpoint the exact parameter where a request has failed
  * message `string`: A unique William Hill text string to enable you to identify the error

### loginRequest
* loginRequest `object`
  * extended `boolean`: Whether extended login or normal login is required. If the parameter is set to Y your application will generate an authentication ticket valid for a period of 60 days, without expiring due to inactivity. If the parameter is left blank or set to N this means your application will support the normal expiry times for tickets: The ticket expires after 2 hours of inactivity. The ticket is valid for a maximum of 8 hours after it has been issued.
  * password **required** `string`: Customer Password
  * username **required** `string`: Customer Username

### logoutresponse
* logoutresponse `object`
  * success `boolean`

### serviceTicket
* serviceTicket `object`
  * location `string`: This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE.
  * ticket **required** `string`: The TGT ticket

### session
* session `object`
  * expiryDateTime **required** `string`: The UTC time when the ticket expires.
  * extended `boolean`: The value you have selected previous to executing the request. If the value is Y, this enables your application to generate a ticket valid for 60 days without expiring due to inactivity.
  * location `string`: This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE.
  * temporaryPassword `boolean`: Indicates that the account has a temporary password set and hence the user must be prompted to change their password.
  * temporaryPasswordUrl `string`: Url for user to change password. A TGT must be added to the URL
  * ticket **required** `string`: The TGT ticket

### sessionsErrors
* sessionsErrors `object`
  * errors `array`
    * items [error](#error)

### ticketvalidityresponse
* ticketvalidityresponse `object`
  * success `boolean`


