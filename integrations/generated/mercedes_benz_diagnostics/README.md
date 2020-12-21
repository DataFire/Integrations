# @datafire/mercedes_benz_diagnostics

Client library for Remote Diagnostic Support

## Installation and Usage
```bash
npm install --save @datafire/mercedes_benz_diagnostics
```
```js
let mercedes_benz_diagnostics = require('@datafire/mercedes_benz_diagnostics').create();

.then(data => {
  console.log(data);
});
```

## Description

The Remote Diagnostic Support API will provide the possibility for 3rd party applications (e.g. ADAC, ATU, etc.) to access vehicle diagnostics data remotely on behalf of the Daimler customer. To use the endpoints you need a valid vin/fin (vehicleId).

## Actions

### getDtcDataListByEcuUsingPOST
This API creates a readout of DTCs for one vehicle. If the result is available immediately, the result is returned. If the result isn't available, a location to the DTC readout is returned. This location shall be polled until the result is available. INFO: GET Requests are not yet supported!


```js
mercedes_benz_diagnostics.getDtcDataListByEcuUsingPOST({
  "vehicleId": ""
}, context)
```

#### Input
* input `object`
  * vehicleId **required** `string`: The vehicle identifier of the vehicle to read from.
  * ecuId `string`: Return DTCs from this ECU id only. Default: Return DTCs from all ECUs.
  * dtcStatus `string`: Returns DTCs with this statuses only. Default: Return DTCs with all statuses.

#### Output
* output [DtcDataContainer](#dtcdatacontainer)

### getDtcSnapshotReadoutsUsingPOST
This API creates a readout of a DTC snapshot from one vehicle. If the result is available immediately, the result is returned. If the result isn't available, a location to the DTC snapshot readout is returned. This location shall be polled until the result is available. INFO: GET Requests are not yet supported!


```js
mercedes_benz_diagnostics.getDtcSnapshotReadoutsUsingPOST({
  "vehicleId": "",
  "ecuId": "",
  "dtcId": ""
}, context)
```

#### Input
* input `object`
  * vehicleId **required** `string`: The vehicle identifier of the vehicle to read from
  * ecuId **required** `string`: The id of the ECU to read from
  * dtcId **required** `string`: The id of the DTC associated with the snapshot

#### Output
* output [DtcSnapshotDataContainer](#dtcsnapshotdatacontainer)

### getEcuDataListByVehicleIdUsingPOST
This API creates a readout of ECUs for one vehicle. If the result is available immediately, the result is returned. If the result isn't available, a location to the ECU readout is returned. This location shall be polled until the result is available. INFO: GET Requests are not yet supported!


```js
mercedes_benz_diagnostics.getEcuDataListByVehicleIdUsingPOST({
  "vehicleId": ""
}, context)
```

#### Input
* input `object`
  * vehicleId **required** `string`: The vehicle identifier of the vehicle to read from
  * ecuId `string`: Return this ECU id only. Default: Return all ECUs.

#### Output
* output [EcuDataContainer](#ecudatacontainer)

### getResourceReadoutsUsingPOST
This API creates a readout of available resources to the accessing party for one vehicle. If the result is available immediately, the result is returned. If the result isn't available, a location to the resource readout is returned. This location shall be polled until the result is available. INFO: GET Requests are not yet supported!


```js
mercedes_benz_diagnostics.getResourceReadoutsUsingPOST({
  "vehicleId": ""
}, context)
```

#### Input
* input `object`
  * vehicleId **required** `string`: vehicleId of the resources to be viewed

#### Output
* output [ResourceDataContainer](#resourcedatacontainer)



## Definitions

### CommonType
* CommonType `object`
  * asyncEstimatedComplete `string`: Not Implemented. Estimated completion time of the readout
  * asyncProgress `integer`: Not Implemented. Progress of the readout in percent.
  * asyncStatus **required** `string` (values: Pending, InProgress, Complete, Fail): Reflects the status of the readouts
  * asyncWait `integer`: Not Implemented. Recommended waiting time in milliseconds until next request for status.
  * exveErrorId `string`: The id of the error in case something failed
  * exveErrorMsg `string`: The error message in case something failed
  * exveErrorRef `string`: A unique reference to the error. Can be used in communication with the offering party to help in resolving problems.
  * exveNote `string`: A message regarding the result of the request. Can be filled both when the request was completed and failed.
  * id **required** `string`: Id unique for this readout.
  * messageTimestamp **required** `string`: Timestamp when this message was created.
  * receivedTimestamp `string`: Timestamp when the data in the message was received by the ExVe backend from the vehicle.
  * vehicleId **required** `string`: The vehicle identifier of the extended vehicle, e.g VIN

### DtcDataContainer
* DtcDataContainer `object`
  * dtcReadout [DtcDataType](#dtcdatatype)

### DtcDataItem
* DtcDataItem `object`
  * dtcId **required** `string`: Identifier of the DTC.
  * dtcTimestamp `string`: Date and time when the DTC occurred
  * ecuId **required** `string`: Identifier of the ECU where the DTC occurred
  * occurrenceCounter `integer`: Counter of how many times this DTC has occurred
  * status **required** `string` (values: ACTIVE, PENDING, PREVIOUSLY_ACTIVE): Reflects the status of the DTC

### DtcDataType
* DtcDataType
  * asyncEstimatedComplete `string`: Not Implemented. Estimated completion time of the readout
  * asyncProgress `integer`: Not Implemented. Progress of the readout in percent.
  * asyncStatus **required** `string` (values: Pending, InProgress, Complete, Fail): Reflects the status of the readouts
  * asyncWait `integer`: Not Implemented. Recommended waiting time in milliseconds until next request for status.
  * exveErrorId `string`: The id of the error in case something failed
  * exveErrorMsg `string`: The error message in case something failed
  * exveErrorRef `string`: A unique reference to the error. Can be used in communication with the offering party to help in resolving problems.
  * exveNote `string`: A message regarding the result of the request. Can be filled both when the request was completed and failed.
  * id **required** `string`: Id unique for this readout.
  * messageTimestamp **required** `string`: Timestamp when this message was created.
  * receivedTimestamp `string`: Timestamp when the data in the message was received by the ExVe backend from the vehicle.
  * vehicleId **required** `string`: The vehicle identifier of the extended vehicle, e.g VIN
  * dtcs `array`: List of DTCs
    * items [DtcDataItem](#dtcdataitem)

### DtcSnapshotDataContainer
* DtcSnapshotDataContainer `object`
  * dtcSnapshotReadout [DtcSnapshotDataType](#dtcsnapshotdatatype)

### DtcSnapshotDataItem
* DtcSnapshotDataItem `object`
  * id **required** `string`: Name of snapshot parameter
  * value **required** `string`: Value of snapshot parameter

### DtcSnapshotDataType
* DtcSnapshotDataType
  * asyncEstimatedComplete `string`: Not Implemented. Estimated completion time of the readout
  * asyncProgress `integer`: Not Implemented. Progress of the readout in percent.
  * asyncStatus **required** `string` (values: Pending, InProgress, Complete, Fail): Reflects the status of the readouts
  * asyncWait `integer`: Not Implemented. Recommended waiting time in milliseconds until next request for status.
  * exveErrorId `string`: The id of the error in case something failed
  * exveErrorMsg `string`: The error message in case something failed
  * exveErrorRef `string`: A unique reference to the error. Can be used in communication with the offering party to help in resolving problems.
  * exveNote `string`: A message regarding the result of the request. Can be filled both when the request was completed and failed.
  * id **required** `string`: Id unique for this readout.
  * messageTimestamp **required** `string`: Timestamp when this message was created.
  * receivedTimestamp `string`: Timestamp when the data in the message was received by the ExVe backend from the vehicle.
  * vehicleId **required** `string`: The vehicle identifier of the extended vehicle, e.g VIN
  * dtcId **required** `string`: Identifier of the DTC
  * dtcSnapshotParameters `array`: List of dtcSnapshotParameters.
    * items [DtcSnapshotDataItem](#dtcsnapshotdataitem)
  * ecuId **required** `string`: Identifier of the ECU

### EcuDataContainer
* EcuDataContainer `object`
  * ecuReadout [EcuDataType](#ecudatatype)

### EcuDataItem
* EcuDataItem `object`
  * ecuId **required** `string`: Identifier of the ECU
  * hardwareIds **required** `array`: Identifier(s) of the hardware unit(s) in this ECU
    * items `string`
  * softwareIds **required** `array`: Identifier(s) of the software unit(s) in this ECU
    * items `string`

### EcuDataType
* EcuDataType
  * asyncEstimatedComplete `string`: Not Implemented. Estimated completion time of the readout
  * asyncProgress `integer`: Not Implemented. Progress of the readout in percent.
  * asyncStatus **required** `string` (values: Pending, InProgress, Complete, Fail): Reflects the status of the readouts
  * asyncWait `integer`: Not Implemented. Recommended waiting time in milliseconds until next request for status.
  * exveErrorId `string`: The id of the error in case something failed
  * exveErrorMsg `string`: The error message in case something failed
  * exveErrorRef `string`: A unique reference to the error. Can be used in communication with the offering party to help in resolving problems.
  * exveNote `string`: A message regarding the result of the request. Can be filled both when the request was completed and failed.
  * id **required** `string`: Id unique for this readout.
  * messageTimestamp **required** `string`: Timestamp when this message was created.
  * receivedTimestamp `string`: Timestamp when the data in the message was received by the ExVe backend from the vehicle.
  * vehicleId **required** `string`: The vehicle identifier of the extended vehicle, e.g VIN
  * ecus `array`: List of ECUs
    * items [EcuDataItem](#ecudataitem)

### ErrorResponse
* ErrorResponse `object`
  * errorCode `string`: Error Code
  * errorMessage `string`: Error Message

### ResourceDataContainer
* ResourceDataContainer `object`
  * resourceReadout [ResourceDataType](#resourcedatatype)

### ResourceDataItem
* ResourceDataItem `object`
  * api **required** `string`: URI to API exposing resource
  * name **required** `string`: Name of resource
  * version **required** `string`: Version of resource in API

### ResourceDataType
* ResourceDataType
  * asyncEstimatedComplete `string`: Not Implemented. Estimated completion time of the readout
  * asyncProgress `integer`: Not Implemented. Progress of the readout in percent.
  * asyncStatus **required** `string` (values: Pending, InProgress, Complete, Fail): Reflects the status of the readouts
  * asyncWait `integer`: Not Implemented. Recommended waiting time in milliseconds until next request for status.
  * exveErrorId `string`: The id of the error in case something failed
  * exveErrorMsg `string`: The error message in case something failed
  * exveErrorRef `string`: A unique reference to the error. Can be used in communication with the offering party to help in resolving problems.
  * exveNote `string`: A message regarding the result of the request. Can be filled both when the request was completed and failed.
  * id **required** `string`: Id unique for this readout.
  * messageTimestamp **required** `string`: Timestamp when this message was created.
  * receivedTimestamp `string`: Timestamp when the data in the message was received by the ExVe backend from the vehicle.
  * vehicleId **required** `string`: The vehicle identifier of the extended vehicle, e.g VIN
  * resources `array`: List of resources.
    * items [ResourceDataItem](#resourcedataitem)


