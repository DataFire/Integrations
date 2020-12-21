# @datafire/ip2location_geolocation

Client library for IP2Location IP Geolocation

## Installation and Usage
```bash
npm install --save @datafire/ip2location_geolocation
```
```js
let ip2location_geolocation = require('@datafire/ip2location_geolocation').create();

.then(data => {
  console.log(data);
});
```

## Description

IP2Location web service providing a service to do a reverse lookup of an IP address to an ISO3166 country code, region or state, city, latitude and longitude, ZIP/Postal code, time zone, Internet Service Provider (ISP) or company name, domain name, net speed, area code, weather station code, weather station name, mobile country code (MCC), mobile network code (MNC) and carrier brand, elevation, and usage type. There are also 7 categories of additional add-on response fields supported such as metro, olson time zone, translations and more. Refer to https://www.ip2location.com/web-service/ip2location for further information.

## Actions

### .get
Get geolocation information via IP address


```js
ip2location_geolocation..get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * package `string`: Web service package of different granularity of return information.
  * addon `string` (values: continent, country, region, city, geotargeting, country_groupings, time_zone_info): Extra information in addition to the above selected package.
  * ip **required** `string`: IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.
  * format `string` (values: json, xml): Format of the response message.
  * lang `string` (values: ar, cs, da, de, en, es, et, fi, fr, ga, it, ja, ko, ms, nl, pt, ru, sv, tr, vi, zh-cn, zh-tw): Translation information. The translation only applicable for continent, country, region and city name for the addon package.
  * key **required** `string`: API Key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
