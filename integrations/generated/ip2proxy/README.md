# @datafire/ip2proxy

Client library for IP2Proxy Proxy Detection

## Installation and Usage
```bash
npm install --save @datafire/ip2proxy
```
```js
let ip2proxy = require('@datafire/ip2proxy').create();

.then(data => {
  console.log(data);
});
```

## Description

IP2Proxy allows instant detection of anonymous proxy, VPN, TOR exit nodes, search engine robots (SES) and residential (RES, available in PX10) by IP address. It also returns the threat type of the proxy (PX9 or higher). Visit https://www.ip2location.com/web-service/ip2proxy for further information.

## Actions

### .get
Check if an IP address is proxy


```js
ip2proxy..get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * package `string`: If not present, the web service will assume the PX1 package query.
  * ip **required** `string`: IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.
  * format `string` (values: json, xml): If not present, json format will be returned as the search result.
  * key **required** `string`: API key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
