# @datafire/departureboard

Client library for departureboard.io API

## Installation and Usage
```bash
npm install --save @datafire/departureboard
```
```js
let departureboard = require('@datafire/departureboard').create();

.then(data => {
  console.log(data);
});
```

## Description

The departureboard.io is a high performance API written in Golang. Its goal is to provide to main functions:<br><br> (1): A JSON API interface to the legacy National Rail SOAP API: Giving developers the ability to pull live information on departures, arrivals, and services from National Rail, without having to use the legacy SOAP API provided by National Rail. Information is still pulled directly from National Rail in the background, providing the same level of real-time data without the additional complexity of having to interact with SOAP. <br><br>(2): A JSON API interface for additional National Rail information: Giving developers the ability to pull a range of information about the Rail Network, via a JSON API interface. This is not an offering that National Rail currently provide, and is custom developed. Data is sourced from periodically updated XML documents, parsed, and provided for consumption via the departureboard.io API.<br><br>This API is completely free to use for non-commercial purposes. You can explore the various sections of the documentation using the links below.<br><br> For more information please see <a href="https://api.departureboard.io">https://api.departureboard.io</a>

## Actions

### getArrivalsAndDeparturesByCRS
getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.


```js
departureboard.getArrivalsAndDeparturesByCRS({
  "CRS": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * CRS **required** `string`: The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
  * numServices `integer`: The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.
  * timeOffset `integer`: The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
  * timeWindow `integer`: The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
  * serviceDetails `boolean`: Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
  * filterStation `string`: The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.
  * filterType `string`: Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.

#### Output
*Output schema unknown*

### getArrivalsByCRS
getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.


```js
departureboard.getArrivalsByCRS({
  "CRS": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * CRS **required** `string`: The CRS (Computer Reservation System) for the Station you wish to get arrival information for, e.g. KGX for London Kings Cross.
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
  * numServices `integer`: The number of arriving train services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running to this station within the time window specified.
  * timeOffset `integer`: The time window in minutes to offset the arrival information by. For example, a value of 20 will not show services arriving within the next 20 minutes.
  * timeWindow `integer`: The time window to show train services for in minutes. For example, a value of 60 will show services arriving to the station in the next 60 minutes.
  * serviceDetails `boolean`: Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
  * filterStation `string`: The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services arriving to Paddington that stopped at Reading.

#### Output
*Output schema unknown*

### getDeparturesByCRS
getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.


```js
departureboard.getDeparturesByCRS({
  "CRS": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * CRS **required** `string`: The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
  * numServices `integer`: The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.
  * timeOffset `integer`: The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.
  * timeWindow `integer`: The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.
  * serviceDetails `boolean`: Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
  * filterStation `string`: The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.

#### Output
*Output schema unknown*

### getFastestDeparturesByCRS
getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.


```js
departureboard.getFastestDeparturesByCRS({
  "CRS": "",
  "apiKey": "",
  "filterList": ""
}, context)
```

#### Input
* input `object`
  * CRS **required** `string`: The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
  * filterList **required** `string`: The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.
  * timeOffset `integer`: The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.
  * timeWindow `integer`: The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.
  * serviceDetails `boolean`: Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.

#### Output
*Output schema unknown*

### getNextDeparturesByCRS
getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.


```js
departureboard.getNextDeparturesByCRS({
  "CRS": "",
  "apiKey": "",
  "filterList": ""
}, context)
```

#### Input
* input `object`
  * CRS **required** `string`: The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
  * filterList **required** `string`: The CRS (Computer Reservation System) codes to show departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.
  * timeOffset `integer`: The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
  * timeWindow `integer`: The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
  * serviceDetails `boolean`: Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.

#### Output
*Output schema unknown*

### getServiceDetailsByID
getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.


```js
departureboard.getServiceDetailsByID({
  "serviceID": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * serviceID **required** `string`: The Service ID for the Train Service you wish to look up in the URL Safe format. For example "qsec4O8LW7k8ITcOt_ir4Q--".
  * apiKey **required** `string`: The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
