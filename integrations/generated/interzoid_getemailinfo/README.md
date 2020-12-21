# @datafire/interzoid_getemailinfo

Client library for Interzoid Get Email Information API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getemailinfo
```
```js
let interzoid_getemailinfo = require('@datafire/interzoid_getemailinfo').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides validation information for email addresses to aid in deliverability. Syntax, existence of mail servers, and other tests are run to ensure delivery. Additional demographics are provided for the email address as well, including identifying generic, vulgar, education, government, or other entity type email addresses.

## Actions

### getemailinfo
Get email validation information and other demographics for an email address.


```js
interzoid_getemailinfo.getemailinfo({
  "license": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * email **required** `string`: Email address to retrieve validation information

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Email `string`
  * Geolocation `string`
  * Info `string`
  * IsEducational `string`
  * IsGeneric `string`
  * IsGovernment `string`
  * IsOrganizational `string`
  * IsVulgar `string`
  * Response `string`



## Definitions

*This integration has no definitions*
