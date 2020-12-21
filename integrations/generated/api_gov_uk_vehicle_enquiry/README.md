# @datafire/api_gov_uk_vehicle_enquiry

Client library for Vehicle Enquiry API

## Installation and Usage
```bash
npm install --save @datafire/api_gov_uk_vehicle_enquiry
```
```js
let api_gov_uk_vehicle_enquiry = require('@datafire/api_gov_uk_vehicle_enquiry').create();

.then(data => {
  console.log(data);
});
```

## Description

Interface specification for the DVLA Vehicle Enquiry API

## Actions

### getVehicleDetailsByRegistrationNumber
Returns vehicle details based on registration number


```js
api_gov_uk_vehicle_enquiry.getVehicleDetailsByRegistrationNumber({
  "x-api-key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * x-api-key **required** `string`: Client Specific API Key
  * X-Correlation-Id `string`: Consumer Correlation ID
  * body **required** [VehicleRequest](#vehiclerequest)

#### Output
* output [Vehicle](#vehicle)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error Response
  * errors `array`
    * items [Errors](#errors)

### Errors
* Errors `object`
  * code `string`: DVLA reference code
  * detail `string`: A meaningful description of the error which has occurred
  * status `string`
  * title **required** `string`: Error title

### Vehicle
* Vehicle `object`
  * artEndDate `string`: Additional Rate of Tax End Date, format: YYYY-MM-DD
  * co2Emissions `integer`: Carbon Dioxide emissions in grams per kilometre
  * colour `string`: Vehicle colour
  * dateOfLastV5CIssued `string`: Date of last V5C issued
  * engineCapacity `integer`: Engine capacity in cubic centimetres
  * euroStatus `string`: Euro Status (Dealer / Customer Provided (new vehicles))
  * fuelType `string`: Fuel type (Method of Propulsion)
  * make `string`: Vehicle make
  * markedForExport `boolean`: True only if vehicle has been export marked
  * monthOfFirstDvlaRegistration `string`: Month of First DVLA Registration
  * monthOfFirstRegistration `string`: Month of First Registration
  * motExpiryDate `string`: Mot Expiry Date
  * motStatus `string` (values: No details held by DVLA, No results returned, Not valid, Valid): MOT Status of the vehicle
  * realDrivingEmissions `string`: Real Driving Emissions value
  * registrationNumber **required** `string`: Registration number of the vehicle
  * revenueWeight `integer`: Revenue weight in kilograms
  * taxDueDate `string`: Date of tax liablity, Used in calculating licence information presented to user
  * taxStatus `string` (values: Not Taxed for on Road Use, SORN, Taxed, Untaxed): Tax status of the vehicle
  * typeApproval `string`: Vehicle Type Approval Category
  * wheelplan `string`: Vehicle wheel plan
  * yearOfManufacture `integer`: Year of Manufacture

### VehicleRequest
* VehicleRequest `object`
  * registrationNumber `string`


