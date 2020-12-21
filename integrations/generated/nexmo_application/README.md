# @datafire/nexmo_application

Client library for Nexmo Application API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_application
```
```js
let nexmo_application = require('@datafire/nexmo_application').create();

.then(data => {
  console.log(data);
});
```

## Description

<div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
  <h4>Applications V1 is deprecated</h4>
  This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
</div> </div>
A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.

## Actions

### retrieveApplications
You use a `GET` request to retrieve details of all applications associated with your account.


```js
nexmo_application.retrieveApplications({
  "api_key": "",
  "api_secret": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
  * api_secret **required** `string`: You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
  * page_size `integer`: Set the number of items returned on each call to this endpoint. The default is 10 records.
  * page_index `integer`: Set the offset from the first page. The default value is `0`.

#### Output
* output [applications](#applications)

### createApplication
You use a `POST` request to create a new application.


```js
nexmo_application.createApplication({}, context)
```

#### Input
* input `object`
  * body `object`
    * answer_method `string`: The HTTP method used to make the request to `answer_url`. The default value is `GET`.
    * answer_url `string`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only.
    * api_key **required** [apiKey](#apikey)
    * api_secret **required** [apiSecret](#apisecret)
    * event_method `string`: The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only.
    * event_url `string`: Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications.
    * inbound_method `string`: The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only.
    * inbound_url `string`: Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only.
    * name **required** `string`: The name of your application.
    * status_method `string`: The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only.
    * status_url `string`: Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only.
    * type **required** `string` (values: voice, messages): The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.

#### Output
* output [applicationCreated](#applicationcreated)

### deleteApplication
You use a `DELETE` request to delete a single application.


```js
nexmo_application.deleteApplication({
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: The ID allocated to your application by Nexmo.

#### Output
*Output schema unknown*

### retrieveApplication
You use a `GET` request to retrieve details about a single application.


```js
nexmo_application.retrieveApplication({
  "api_key": "",
  "api_secret": "",
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
  * api_secret **required** `string`: You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
  * app_id **required** `string`: The ID allocated to your application by Nexmo.

#### Output
* output [application](#application)

### updateApplication
You use a `PUT` request to update an existing application.


```js
nexmo_application.updateApplication({
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: The ID allocated to your application by Nexmo.
  * body `object`
    * answer_method `string`: The HTTP method used to make the request to `answer_url`. The default value is `GET`.
    * answer_url `string`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`.
    * api_key **required** [apiKey](#apikey)
    * api_secret **required** [apiSecret](#apisecret)
    * event_method `string`: The HTTP method used to send event information to `event_url`. The default value is POST.
    * event_url `string`: Nexmo sends event information asynchronously to this URL when status changes.
    * name **required** `string`: The name of your application.
    * type **required** `string` (values: voice, messages): The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.

#### Output
* output [application](#application)



## Definitions

### apiKey
* apiKey `string`: You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)

### apiSecret
* apiSecret `string`: You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)

### application
* application `object`
  * _links [links](#links)
  * id [applicationBase/properties/id](#applicationbase/properties/id)
  * keys [keys](#keys)
  * messages **required** [messages](#messages)
  * name **required** [applicationBase/properties/name](#applicationbase/properties/name)
  * voice **required** [voice](#voice)

### applicationBase
* applicationBase `object`
  * id `string`: The ID allocated to your application by Nexmo.
  * name `string`: The name of your application

### applicationCreated
* applicationCreated
  * _links [links](#links)
  * id [applicationBase/properties/id](#applicationbase/properties/id)
  * keys [keys](#keys)
  * messages **required** [messages](#messages)
  * name **required** [applicationBase/properties/name](#applicationbase/properties/name)
  * voice **required** [voice](#voice)
  * keys [keysWithPrivateKey](#keyswithprivatekey)

### applications
* applications `object`
  * _embedded **required** [applicationsBase/properties/_embedded](#applicationsbase/properties/_embedded)
  * _links **required** [links](#links)
  * count **required** [applicationsBase/properties/count](#applicationsbase/properties/count)
  * page_index **required** [applicationsBase/properties/page_index](#applicationsbase/properties/page_index)
  * page_size **required** [applicationsBase/properties/page_size](#applicationsbase/properties/page_size)

### applicationsBase
* applicationsBase `object`
  * _embedded `object`
    * applications `array`: The collection of your applications. Each object contains information about an an individual application. The public_key is not included in the application information.
      * items [application](#application)
  * count `integer`: The number of items associated with your account.
  * page_index `integer`: The offset from the first page.
  * page_size `integer`: The number of items returned on each call to this endpoint. The default is 10 records.

### keys
* keys `object`: The Nexmo product that you access with this application.
  * public_key `string`: The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).

### keysWithPrivateKey
* keysWithPrivateKey
  * public_key `string`: The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
  * private_key `string`: The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API.

### links
* links `object`: A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
  * href `string`: The link URL.

### messages
* messages `object`: The Nexmo product that you access with this application.
  * webhooks `array`
    * items `object`
      * endpoint **required** `string`: `inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.
      * endpoint_type **required** `string` (values: inbound_url, status_url)
      * http_method **required** `string` (values: GET, POST): The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.

### voice
* voice `object`: The Nexmo product that you access with this application.
  * webhooks `array`
    * items `object`
      * endpoint **required** `string`: `answer_url`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. `event_url`: Nexmo sends event information asynchronously to this URL when status changes.
      * endpoint_type **required** `string` (values: answer_url, event_url)
      * http_method **required** `string` (values: GET, POST): The HTTP method used to send event information to the `event_url` or `answer_url`.


