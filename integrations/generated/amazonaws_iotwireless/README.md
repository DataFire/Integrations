# @datafire/amazonaws_iotwireless

Client library for AWS IoT Wireless

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotwireless
```
```js
let amazonaws_iotwireless = require('@datafire/amazonaws_iotwireless').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS IoT Wireless API documentation

## Actions

### ListDestinations



```js
amazonaws_iotwireless.ListDestinations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDestinationsResponse](#listdestinationsresponse)

### CreateDestination



```js
amazonaws_iotwireless.CreateDestination({
  "Name": "",
  "ExpressionType": "",
  "Expression": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * Description `string`: The description of the new resource.
  * Expression **required** `string`: The rule name or topic rule to send messages to.
  * ExpressionType **required** `string` (values: RuleName): The type of value in <code>Expression</code>.
  * Name **required** `string`: The name of the new resource.
  * RoleArn **required** `string`: The ARN of the IAM Role that authorizes the destination.
  * Tags `array`: The tags to attach to the new destination. Tags are metadata that can be used to manage a resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### DeleteDestination



```js
amazonaws_iotwireless.DeleteDestination({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
*Output schema unknown*

### GetDestination



```js
amazonaws_iotwireless.GetDestination({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [GetDestinationResponse](#getdestinationresponse)

### UpdateDestination



```js
amazonaws_iotwireless.UpdateDestination({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * Description `string`: A new description of the resource.
  * Expression `string`: The new rule name or topic rule to send messages to.
  * ExpressionType `string` (values: RuleName): The type of value in <code>Expression</code>.
  * RoleArn `string`: The ARN of the IAM Role that authorizes the destination.

#### Output
*Output schema unknown*

### ListDeviceProfiles



```js
amazonaws_iotwireless.ListDeviceProfiles({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDeviceProfilesResponse](#listdeviceprofilesresponse)

### CreateDeviceProfile



```js
amazonaws_iotwireless.CreateDeviceProfile({}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * LoRaWAN `object`: LoRaWANDeviceProfile object.
    * ClassBTimeout
    * ClassCTimeout
    * FactoryPresetFreqsList
      * items [PresetFreq](#presetfreq)
    * MacVersion
    * MaxDutyCycle
    * MaxEirp
    * PingSlotDr
    * PingSlotFreq
    * PingSlotPeriod
    * RegParamsRevision
    * RfRegion
    * RxDataRate2
    * RxDelay1
    * RxDrOffset1
    * RxFreq2
    * Supports32BitFCnt
    * SupportsClassB
    * SupportsClassC
    * SupportsJoin
  * Name `string`: The name of the new resource.
  * Tags `array`: The tags to attach to the new device profile Tags are metadata that can be used to manage a resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### DeleteDeviceProfile



```js
amazonaws_iotwireless.DeleteDeviceProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetDeviceProfile



```js
amazonaws_iotwireless.GetDeviceProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetDeviceProfileResponse](#getdeviceprofileresponse)

### ListPartnerAccounts



```js
amazonaws_iotwireless.ListPartnerAccounts({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListPartnerAccountsResponse](#listpartneraccountsresponse)

### AssociateAwsAccountWithPartnerAccount



```js
amazonaws_iotwireless.AssociateAwsAccountWithPartnerAccount({
  "Sidewalk": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * Sidewalk **required** `object`: Information about a Sidewalk account.
    * AmazonId
    * AppServerPrivateKey

#### Output
* output [AssociateAwsAccountWithPartnerAccountResponse](#associateawsaccountwithpartneraccountresponse)

### DisassociateAwsAccountFromPartnerAccount



```js
amazonaws_iotwireless.DisassociateAwsAccountFromPartnerAccount({
  "PartnerAccountId": "",
  "partnerType": ""
}, context)
```

#### Input
* input `object`
  * PartnerAccountId **required** `string`
  * partnerType **required** `string`

#### Output
*Output schema unknown*

### GetPartnerAccount



```js
amazonaws_iotwireless.GetPartnerAccount({
  "PartnerAccountId": "",
  "partnerType": ""
}, context)
```

#### Input
* input `object`
  * PartnerAccountId **required** `string`
  * partnerType **required** `string`

#### Output
* output [GetPartnerAccountResponse](#getpartneraccountresponse)

### UpdatePartnerAccount



```js
amazonaws_iotwireless.UpdatePartnerAccount({
  "PartnerAccountId": "",
  "partnerType": "",
  "Sidewalk": {}
}, context)
```

#### Input
* input `object`
  * PartnerAccountId **required** `string`
  * partnerType **required** `string`
  * Sidewalk **required** `object`: Sidewalk update.
    * AppServerPrivateKey

#### Output
*Output schema unknown*

### GetServiceEndpoint



```js
amazonaws_iotwireless.GetServiceEndpoint({}, context)
```

#### Input
* input `object`
  * serviceType `string`

#### Output
* output [GetServiceEndpointResponse](#getserviceendpointresponse)

### ListServiceProfiles



```js
amazonaws_iotwireless.ListServiceProfiles({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListServiceProfilesResponse](#listserviceprofilesresponse)

### CreateServiceProfile



```js
amazonaws_iotwireless.CreateServiceProfile({}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * LoRaWAN `object`: LoRaWANServiceProfile object.
    * AddGwMetadata
  * Name `string`: The name of the new resource.
  * Tags `array`: The tags to attach to the new service profile. Tags are metadata that can be used to manage a resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### DeleteServiceProfile



```js
amazonaws_iotwireless.DeleteServiceProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetServiceProfile



```js
amazonaws_iotwireless.GetServiceProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetServiceProfileResponse](#getserviceprofileresponse)

### ListTagsForResource



```js
amazonaws_iotwireless.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_iotwireless.TagResource({
  "resourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `array`: Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_iotwireless.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### ListWirelessDevices



```js
amazonaws_iotwireless.ListWirelessDevices({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * destinationName `string`
  * deviceProfileId `string`
  * serviceProfileId `string`
  * wirelessDeviceType `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListWirelessDevicesResponse](#listwirelessdevicesresponse)

### CreateWirelessDevice



```js
amazonaws_iotwireless.CreateWirelessDevice({
  "Type": "",
  "DestinationName": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * Description `string`: The description of the new resource.
  * DestinationName **required** `string`: The name of the destination to assign to the new wireless device.
  * LoRaWAN `object`: LoRa object for create functions.
    * AbpV1_0_x
      * DevAddr
      * SessionKeys
        * AppSKey
        * NwkSKey
    * AbpV1_1
      * DevAddr
      * SessionKeys
        * AppSKey
        * FNwkSIntKey
        * NwkSEncKey
        * SNwkSIntKey
    * DevEui
    * DeviceProfileId
    * OtaaV1_0_x
      * AppEui
      * AppKey
    * OtaaV1_1
      * AppKey
      * JoinEui
      * NwkKey
    * ServiceProfileId
  * Name `string`: The name of the new resource.
  * Type **required** `string` (values: Sidewalk, LoRaWAN): The wireless device type.

#### Output
*Output schema unknown*

### GetWirelessDevice



```js
amazonaws_iotwireless.GetWirelessDevice({
  "Identifier": "",
  "identifierType": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** `string`
  * identifierType **required** `string`

#### Output
* output [GetWirelessDeviceResponse](#getwirelessdeviceresponse)

### DeleteWirelessDevice



```js
amazonaws_iotwireless.DeleteWirelessDevice({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### UpdateWirelessDevice



```js
amazonaws_iotwireless.UpdateWirelessDevice({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Description `string`: A new description of the resource.
  * DestinationName `string`: The name of the new destination for the device.
  * LoRaWAN `object`: LoRa object for update functions.
    * DeviceProfileId
    * ServiceProfileId
  * Name `string`: The new name of the resource.

#### Output
*Output schema unknown*

### SendDataToWirelessDevice



```js
amazonaws_iotwireless.SendDataToWirelessDevice({
  "Id": "",
  "TransmitMode": 0,
  "PayloadData": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * PayloadData **required** `string`: The message payload to send.
  * TransmitMode **required** `integer`: The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode), <code>1</code> for AM (acknowledge mode), or <code>2</code> for (TM) transparent mode.
  * WirelessMetadata `object`: WirelessMetadata object.
    * LoRaWAN
      * FPort
    * Sidewalk
      * Seq

#### Output
*Output schema unknown*

### GetWirelessDeviceStatistics



```js
amazonaws_iotwireless.GetWirelessDeviceStatistics({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessDeviceStatisticsResponse](#getwirelessdevicestatisticsresponse)

### TestWirelessDevice



```js
amazonaws_iotwireless.TestWirelessDevice({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [TestWirelessDeviceResponse](#testwirelessdeviceresponse)

### DisassociateWirelessDeviceFromThing



```js
amazonaws_iotwireless.DisassociateWirelessDeviceFromThing({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### AssociateWirelessDeviceWithThing



```js
amazonaws_iotwireless.AssociateWirelessDeviceWithThing({
  "Id": "",
  "ThingArn": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * ThingArn **required** `string`: The ARN of the thing to associate with the wireless device.

#### Output
*Output schema unknown*

### ListWirelessGatewayTaskDefinitions



```js
amazonaws_iotwireless.ListWirelessGatewayTaskDefinitions({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * taskDefinitionType `string`

#### Output
* output [ListWirelessGatewayTaskDefinitionsResponse](#listwirelessgatewaytaskdefinitionsresponse)

### CreateWirelessGatewayTaskDefinition



```js
amazonaws_iotwireless.CreateWirelessGatewayTaskDefinition({
  "AutoCreateTasks": true
}, context)
```

#### Input
* input `object`
  * AutoCreateTasks **required** `boolean`: Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * Name `string`: The name of the new resource.
  * Update `object`: UpdateWirelessGatewayTaskCreate object.
    * LoRaWAN
      * CurrentVersion
        * Model
        * PackageVersion
        * Station
      * SigKeyCrc
      * UpdateSignature
      * UpdateVersion
        * Model
        * PackageVersion
        * Station
    * UpdateDataRole
    * UpdateDataSource

#### Output
*Output schema unknown*

### DeleteWirelessGatewayTaskDefinition



```js
amazonaws_iotwireless.DeleteWirelessGatewayTaskDefinition({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetWirelessGatewayTaskDefinition



```js
amazonaws_iotwireless.GetWirelessGatewayTaskDefinition({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessGatewayTaskDefinitionResponse](#getwirelessgatewaytaskdefinitionresponse)

### ListWirelessGateways



```js
amazonaws_iotwireless.ListWirelessGateways({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListWirelessGatewaysResponse](#listwirelessgatewaysresponse)

### CreateWirelessGateway



```js
amazonaws_iotwireless.CreateWirelessGateway({
  "LoRaWAN": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * Description `string`: The description of the new resource.
  * LoRaWAN **required** `object`: LoRaWANGateway object.
    * GatewayEui
    * RfRegion
  * Name `string`: The name of the new resource.
  * Tags `array`: The tags to attach to the new wireless gateway. Tags are metadata that can be used to manage a resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### GetWirelessGateway



```js
amazonaws_iotwireless.GetWirelessGateway({
  "Identifier": "",
  "identifierType": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** `string`
  * identifierType **required** `string`

#### Output
* output [GetWirelessGatewayResponse](#getwirelessgatewayresponse)

### DeleteWirelessGateway



```js
amazonaws_iotwireless.DeleteWirelessGateway({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### UpdateWirelessGateway



```js
amazonaws_iotwireless.UpdateWirelessGateway({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Description `string`: A new description of the resource.
  * Name `string`: The new name of the resource.

#### Output
*Output schema unknown*

### DisassociateWirelessGatewayFromCertificate



```js
amazonaws_iotwireless.DisassociateWirelessGatewayFromCertificate({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetWirelessGatewayCertificate



```js
amazonaws_iotwireless.GetWirelessGatewayCertificate({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessGatewayCertificateResponse](#getwirelessgatewaycertificateresponse)

### AssociateWirelessGatewayWithCertificate



```js
amazonaws_iotwireless.AssociateWirelessGatewayWithCertificate({
  "Id": "",
  "IotCertificateId": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * IotCertificateId **required** `string`: The ID of the certificate to associate with the wireless gateway.

#### Output
* output [AssociateWirelessGatewayWithCertificateResponse](#associatewirelessgatewaywithcertificateresponse)

### GetWirelessGatewayFirmwareInformation



```js
amazonaws_iotwireless.GetWirelessGatewayFirmwareInformation({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessGatewayFirmwareInformationResponse](#getwirelessgatewayfirmwareinformationresponse)

### GetWirelessGatewayStatistics



```js
amazonaws_iotwireless.GetWirelessGatewayStatistics({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessGatewayStatisticsResponse](#getwirelessgatewaystatisticsresponse)

### DeleteWirelessGatewayTask



```js
amazonaws_iotwireless.DeleteWirelessGatewayTask({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetWirelessGatewayTask



```js
amazonaws_iotwireless.GetWirelessGatewayTask({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetWirelessGatewayTaskResponse](#getwirelessgatewaytaskresponse)

### CreateWirelessGatewayTask



```js
amazonaws_iotwireless.CreateWirelessGatewayTask({
  "Id": "",
  "WirelessGatewayTaskDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * WirelessGatewayTaskDefinitionId **required** `string`: The ID of the WirelessGatewayTaskDefinition.

#### Output
*Output schema unknown*

### DisassociateWirelessGatewayFromThing



```js
amazonaws_iotwireless.DisassociateWirelessGatewayFromThing({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### AssociateWirelessGatewayWithThing



```js
amazonaws_iotwireless.AssociateWirelessGatewayWithThing({
  "Id": "",
  "ThingArn": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * ThingArn **required** `string`: The ARN of the thing to associate with the wireless gateway.

#### Output
*Output schema unknown*



## Definitions

### AbpV1_0_x
* AbpV1_0_x `object`: ABP device object for LoRaWAN specification v1.0.x
  * DevAddr
  * SessionKeys
    * AppSKey
    * NwkSKey

### AbpV1_1
* AbpV1_1 `object`: ABP device object for LoRaWAN specification v1.1
  * DevAddr
  * SessionKeys
    * AppSKey
    * FNwkSIntKey
    * NwkSEncKey
    * SNwkSIntKey

### AccessDeniedException


### AccountLinked
* AccountLinked `boolean`

### AddGwMetadata
* AddGwMetadata `boolean`

### AmazonId
* AmazonId `string`

### AmazonResourceName
* AmazonResourceName `string`

### AppEui
* AppEui `string`

### AppKey
* AppKey `string`

### AppSKey
* AppSKey `string`

### AppServerPrivateKey
* AppServerPrivateKey `string`

### AssociateAwsAccountWithPartnerAccountRequest
* AssociateAwsAccountWithPartnerAccountRequest `object`
  * ClientRequestToken
  * Sidewalk **required**
    * AmazonId
    * AppServerPrivateKey

### AssociateAwsAccountWithPartnerAccountResponse
* AssociateAwsAccountWithPartnerAccountResponse `object`
  * Sidewalk
    * AmazonId
    * AppServerPrivateKey

### AssociateWirelessDeviceWithThingRequest
* AssociateWirelessDeviceWithThingRequest `object`
  * ThingArn **required**

### AssociateWirelessDeviceWithThingResponse
* AssociateWirelessDeviceWithThingResponse `object`

### AssociateWirelessGatewayWithCertificateRequest
* AssociateWirelessGatewayWithCertificateRequest `object`
  * IotCertificateId **required**

### AssociateWirelessGatewayWithCertificateResponse
* AssociateWirelessGatewayWithCertificateResponse `object`
  * IotCertificateId

### AssociateWirelessGatewayWithThingRequest
* AssociateWirelessGatewayWithThingRequest `object`
  * ThingArn **required**

### AssociateWirelessGatewayWithThingResponse
* AssociateWirelessGatewayWithThingResponse `object`

### AutoCreateTasks
* AutoCreateTasks `boolean`

### CertificatePEM
* CertificatePEM `string`

### ChannelMask
* ChannelMask `string`

### ClassBTimeout
* ClassBTimeout `integer`

### ClassCTimeout
* ClassCTimeout `integer`

### ClientRequestToken
* ClientRequestToken `string`

### ConflictException


### Crc
* Crc `integer`

### CreateDestinationRequest
* CreateDestinationRequest `object`
  * ClientRequestToken
  * Description
  * Expression **required**
  * ExpressionType **required**
  * Name **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreateDestinationResponse
* CreateDestinationResponse `object`
  * Arn
  * Name

### CreateDeviceProfileRequest
* CreateDeviceProfileRequest `object`
  * ClientRequestToken
  * LoRaWAN
    * ClassBTimeout
    * ClassCTimeout
    * FactoryPresetFreqsList
      * items [PresetFreq](#presetfreq)
    * MacVersion
    * MaxDutyCycle
    * MaxEirp
    * PingSlotDr
    * PingSlotFreq
    * PingSlotPeriod
    * RegParamsRevision
    * RfRegion
    * RxDataRate2
    * RxDelay1
    * RxDrOffset1
    * RxFreq2
    * Supports32BitFCnt
    * SupportsClassB
    * SupportsClassC
    * SupportsJoin
  * Name
  * Tags
    * items [Tag](#tag)

### CreateDeviceProfileResponse
* CreateDeviceProfileResponse `object`
  * Arn
  * Id

### CreateServiceProfileRequest
* CreateServiceProfileRequest `object`
  * ClientRequestToken
  * LoRaWAN
    * AddGwMetadata
  * Name
  * Tags
    * items [Tag](#tag)

### CreateServiceProfileResponse
* CreateServiceProfileResponse `object`
  * Arn
  * Id

### CreateWirelessDeviceRequest
* CreateWirelessDeviceRequest `object`
  * ClientRequestToken
  * Description
  * DestinationName **required**
  * LoRaWAN
    * AbpV1_0_x
      * DevAddr
      * SessionKeys
        * AppSKey
        * NwkSKey
    * AbpV1_1
      * DevAddr
      * SessionKeys
        * AppSKey
        * FNwkSIntKey
        * NwkSEncKey
        * SNwkSIntKey
    * DevEui
    * DeviceProfileId
    * OtaaV1_0_x
      * AppEui
      * AppKey
    * OtaaV1_1
      * AppKey
      * JoinEui
      * NwkKey
    * ServiceProfileId
  * Name
  * Type **required**

### CreateWirelessDeviceResponse
* CreateWirelessDeviceResponse `object`
  * Arn
  * Id

### CreateWirelessGatewayRequest
* CreateWirelessGatewayRequest `object`
  * ClientRequestToken
  * Description
  * LoRaWAN **required**
    * GatewayEui
    * RfRegion
  * Name
  * Tags
    * items [Tag](#tag)

### CreateWirelessGatewayResponse
* CreateWirelessGatewayResponse `object`
  * Arn
  * Id

### CreateWirelessGatewayTaskDefinitionRequest
* CreateWirelessGatewayTaskDefinitionRequest `object`
  * AutoCreateTasks **required**
  * ClientRequestToken
  * Name
  * Update
    * LoRaWAN
      * CurrentVersion
        * Model
        * PackageVersion
        * Station
      * SigKeyCrc
      * UpdateSignature
      * UpdateVersion
        * Model
        * PackageVersion
        * Station
    * UpdateDataRole
    * UpdateDataSource

### CreateWirelessGatewayTaskDefinitionResponse
* CreateWirelessGatewayTaskDefinitionResponse `object`
  * Id

### CreateWirelessGatewayTaskRequest
* CreateWirelessGatewayTaskRequest `object`
  * WirelessGatewayTaskDefinitionId **required**

### CreateWirelessGatewayTaskResponse
* CreateWirelessGatewayTaskResponse `object`
  * Status
  * WirelessGatewayTaskDefinitionId

### DeleteDestinationRequest
* DeleteDestinationRequest `object`

### DeleteDestinationResponse
* DeleteDestinationResponse `object`

### DeleteDeviceProfileRequest
* DeleteDeviceProfileRequest `object`

### DeleteDeviceProfileResponse
* DeleteDeviceProfileResponse `object`

### DeleteServiceProfileRequest
* DeleteServiceProfileRequest `object`

### DeleteServiceProfileResponse
* DeleteServiceProfileResponse `object`

### DeleteWirelessDeviceRequest
* DeleteWirelessDeviceRequest `object`

### DeleteWirelessDeviceResponse
* DeleteWirelessDeviceResponse `object`

### DeleteWirelessGatewayRequest
* DeleteWirelessGatewayRequest `object`

### DeleteWirelessGatewayResponse
* DeleteWirelessGatewayResponse `object`

### DeleteWirelessGatewayTaskDefinitionRequest
* DeleteWirelessGatewayTaskDefinitionRequest `object`

### DeleteWirelessGatewayTaskDefinitionResponse
* DeleteWirelessGatewayTaskDefinitionResponse `object`

### DeleteWirelessGatewayTaskRequest
* DeleteWirelessGatewayTaskRequest `object`

### DeleteWirelessGatewayTaskResponse
* DeleteWirelessGatewayTaskResponse `object`

### Description
* Description `string`

### DestinationArn
* DestinationArn `string`

### DestinationList
* DestinationList `array`
  * items [Destinations](#destinations)

### DestinationName
* DestinationName `string`

### Destinations
* Destinations `object`: Describes a destination.
  * Arn
  * Description
  * Expression
  * ExpressionType
  * Name
  * RoleArn

### DevAddr
* DevAddr `string`

### DevEui
* DevEui `string`

### DevStatusReqFreq
* DevStatusReqFreq `integer`

### DeviceProfile
* DeviceProfile `object`: Describes a device profile.
  * Arn
  * Id
  * Name

### DeviceProfileArn
* DeviceProfileArn `string`

### DeviceProfileId
* DeviceProfileId `string`

### DeviceProfileList
* DeviceProfileList `array`
  * items [DeviceProfile](#deviceprofile)

### DeviceProfileName
* DeviceProfileName `string`

### DisassociateAwsAccountFromPartnerAccountRequest
* DisassociateAwsAccountFromPartnerAccountRequest `object`

### DisassociateAwsAccountFromPartnerAccountResponse
* DisassociateAwsAccountFromPartnerAccountResponse `object`

### DisassociateWirelessDeviceFromThingRequest
* DisassociateWirelessDeviceFromThingRequest `object`

### DisassociateWirelessDeviceFromThingResponse
* DisassociateWirelessDeviceFromThingResponse `object`

### DisassociateWirelessGatewayFromCertificateRequest
* DisassociateWirelessGatewayFromCertificateRequest `object`

### DisassociateWirelessGatewayFromCertificateResponse
* DisassociateWirelessGatewayFromCertificateResponse `object`

### DisassociateWirelessGatewayFromThingRequest
* DisassociateWirelessGatewayFromThingRequest `object`

### DisassociateWirelessGatewayFromThingResponse
* DisassociateWirelessGatewayFromThingResponse `object`

### DlBucketSize
* DlBucketSize `integer`

### DlRate
* DlRate `integer`

### DlRatePolicy
* DlRatePolicy `string`

### Double
* Double `number`

### DrMax
* DrMax `integer`

### DrMin
* DrMin `integer`

### EndPoint
* EndPoint `string`

### Expression
* Expression `string`

### ExpressionType
* ExpressionType `string` (values: RuleName)

### FNwkSIntKey
* FNwkSIntKey `string`

### FPort
* FPort `integer`

### FactoryPresetFreqsList
* FactoryPresetFreqsList `array`
  * items [PresetFreq](#presetfreq)

### GatewayEui
* GatewayEui `string`

### GetDestinationRequest
* GetDestinationRequest `object`

### GetDestinationResponse
* GetDestinationResponse `object`
  * Arn
  * Description
  * Expression
  * ExpressionType
  * Name
  * RoleArn

### GetDeviceProfileRequest
* GetDeviceProfileRequest `object`

### GetDeviceProfileResponse
* GetDeviceProfileResponse `object`
  * Arn
  * Id
  * LoRaWAN
    * ClassBTimeout
    * ClassCTimeout
    * FactoryPresetFreqsList
      * items [PresetFreq](#presetfreq)
    * MacVersion
    * MaxDutyCycle
    * MaxEirp
    * PingSlotDr
    * PingSlotFreq
    * PingSlotPeriod
    * RegParamsRevision
    * RfRegion
    * RxDataRate2
    * RxDelay1
    * RxDrOffset1
    * RxFreq2
    * Supports32BitFCnt
    * SupportsClassB
    * SupportsClassC
    * SupportsJoin
  * Name

### GetPartnerAccountRequest
* GetPartnerAccountRequest `object`

### GetPartnerAccountResponse
* GetPartnerAccountResponse `object`
  * AccountLinked
  * Sidewalk
    * AmazonId
    * AppServerPrivateKey

### GetServiceEndpointRequest
* GetServiceEndpointRequest `object`

### GetServiceEndpointResponse
* GetServiceEndpointResponse `object`
  * ServerTrust
  * ServiceEndpoint
  * ServiceType

### GetServiceProfileRequest
* GetServiceProfileRequest `object`

### GetServiceProfileResponse
* GetServiceProfileResponse `object`
  * Arn
  * Id
  * LoRaWAN
    * AddGwMetadata
    * ChannelMask
    * DevStatusReqFreq
    * DlBucketSize
    * DlRate
    * DlRatePolicy
    * DrMax
    * DrMin
    * HrAllowed
    * MinGwDiversity
    * NwkGeoLoc
    * PrAllowed
    * RaAllowed
    * ReportDevStatusBattery
    * ReportDevStatusMargin
    * TargetPer
    * UlBucketSize
    * UlRate
    * UlRatePolicy
  * Name

### GetWirelessDeviceRequest
* GetWirelessDeviceRequest `object`

### GetWirelessDeviceResponse
* GetWirelessDeviceResponse `object`
  * Arn
  * Description
  * DestinationName
  * Id
  * LoRaWAN
    * AbpV1_0_x
      * DevAddr
      * SessionKeys
        * AppSKey
        * NwkSKey
    * AbpV1_1
      * DevAddr
      * SessionKeys
        * AppSKey
        * FNwkSIntKey
        * NwkSEncKey
        * SNwkSIntKey
    * DevEui
    * DeviceProfileId
    * OtaaV1_0_x
      * AppEui
      * AppKey
    * OtaaV1_1
      * AppKey
      * JoinEui
      * NwkKey
    * ServiceProfileId
  * Name
  * ThingArn
  * ThingName
  * Type

### GetWirelessDeviceStatisticsRequest
* GetWirelessDeviceStatisticsRequest `object`

### GetWirelessDeviceStatisticsResponse
* GetWirelessDeviceStatisticsResponse `object`
  * LastUplinkReceivedAt
  * LoRaWAN
    * DataRate
    * DevEui
    * FPort
    * Frequency
    * Gateways
      * items [LoRaWANGatewayMetadata](#lorawangatewaymetadata)
    * Timestamp
  * WirelessDeviceId

### GetWirelessGatewayCertificateRequest
* GetWirelessGatewayCertificateRequest `object`

### GetWirelessGatewayCertificateResponse
* GetWirelessGatewayCertificateResponse `object`
  * IotCertificateId

### GetWirelessGatewayFirmwareInformationRequest
* GetWirelessGatewayFirmwareInformationRequest `object`

### GetWirelessGatewayFirmwareInformationResponse
* GetWirelessGatewayFirmwareInformationResponse `object`
  * LoRaWAN
    * CurrentVersion
      * Model
      * PackageVersion
      * Station

### GetWirelessGatewayRequest
* GetWirelessGatewayRequest `object`

### GetWirelessGatewayResponse
* GetWirelessGatewayResponse `object`
  * Arn
  * Description
  * Id
  * LoRaWAN
    * GatewayEui
    * RfRegion
  * Name
  * ThingArn
  * ThingName

### GetWirelessGatewayStatisticsRequest
* GetWirelessGatewayStatisticsRequest `object`

### GetWirelessGatewayStatisticsResponse
* GetWirelessGatewayStatisticsResponse `object`
  * LastUplinkReceivedAt
  * WirelessGatewayId

### GetWirelessGatewayTaskDefinitionRequest
* GetWirelessGatewayTaskDefinitionRequest `object`

### GetWirelessGatewayTaskDefinitionResponse
* GetWirelessGatewayTaskDefinitionResponse `object`
  * AutoCreateTasks
  * Name
  * Update
    * LoRaWAN
      * CurrentVersion
        * Model
        * PackageVersion
        * Station
      * SigKeyCrc
      * UpdateSignature
      * UpdateVersion
        * Model
        * PackageVersion
        * Station
    * UpdateDataRole
    * UpdateDataSource

### GetWirelessGatewayTaskRequest
* GetWirelessGatewayTaskRequest `object`

### GetWirelessGatewayTaskResponse
* GetWirelessGatewayTaskResponse `object`
  * LastUplinkReceivedAt
  * Status
  * TaskCreatedAt
  * WirelessGatewayId
  * WirelessGatewayTaskDefinitionId

### HrAllowed
* HrAllowed `boolean`

### ISODateTimeString
* ISODateTimeString `string`

### Identifier
* Identifier `string`

### Integer
* Integer `integer`

### InternalServerException


### IotCertificateId
* IotCertificateId `string`

### JoinEui
* JoinEui `string`

### ListDestinationsRequest
* ListDestinationsRequest `object`

### ListDestinationsResponse
* ListDestinationsResponse `object`
  * DestinationList
    * items [Destinations](#destinations)
  * NextToken

### ListDeviceProfilesRequest
* ListDeviceProfilesRequest `object`

### ListDeviceProfilesResponse
* ListDeviceProfilesResponse `object`
  * DeviceProfileList
    * items [DeviceProfile](#deviceprofile)
  * NextToken

### ListPartnerAccountsRequest
* ListPartnerAccountsRequest `object`

### ListPartnerAccountsResponse
* ListPartnerAccountsResponse `object`
  * NextToken
  * Sidewalk
    * items [SidewalkAccountInfoWithFingerprint](#sidewalkaccountinfowithfingerprint)

### ListServiceProfilesRequest
* ListServiceProfilesRequest `object`

### ListServiceProfilesResponse
* ListServiceProfilesResponse `object`
  * NextToken
  * ServiceProfileList
    * items [ServiceProfile](#serviceprofile)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListWirelessDevicesRequest
* ListWirelessDevicesRequest `object`

### ListWirelessDevicesResponse
* ListWirelessDevicesResponse `object`
  * NextToken
  * WirelessDeviceList
    * items [WirelessDeviceStatistics](#wirelessdevicestatistics)

### ListWirelessGatewayTaskDefinitionsRequest
* ListWirelessGatewayTaskDefinitionsRequest `object`

### ListWirelessGatewayTaskDefinitionsResponse
* ListWirelessGatewayTaskDefinitionsResponse `object`
  * NextToken
  * TaskDefinitions
    * items [UpdateWirelessGatewayTaskEntry](#updatewirelessgatewaytaskentry)

### ListWirelessGatewaysRequest
* ListWirelessGatewaysRequest `object`

### ListWirelessGatewaysResponse
* ListWirelessGatewaysResponse `object`
  * NextToken
  * WirelessGatewayList
    * items [WirelessGatewayStatistics](#wirelessgatewaystatistics)

### LoRaWANDevice
* LoRaWANDevice `object`: LoRa object for create functions.
  * AbpV1_0_x
    * DevAddr
    * SessionKeys
      * AppSKey
      * NwkSKey
  * AbpV1_1
    * DevAddr
    * SessionKeys
      * AppSKey
      * FNwkSIntKey
      * NwkSEncKey
      * SNwkSIntKey
  * DevEui
  * DeviceProfileId
  * OtaaV1_0_x
    * AppEui
    * AppKey
  * OtaaV1_1
    * AppKey
    * JoinEui
    * NwkKey
  * ServiceProfileId

### LoRaWANDeviceMetadata
* LoRaWANDeviceMetadata `object`: LoRaWAN device metatdata.
  * DataRate
  * DevEui
  * FPort
  * Frequency
  * Gateways
    * items [LoRaWANGatewayMetadata](#lorawangatewaymetadata)
  * Timestamp

### LoRaWANDeviceProfile
* LoRaWANDeviceProfile `object`: LoRaWANDeviceProfile object.
  * ClassBTimeout
  * ClassCTimeout
  * FactoryPresetFreqsList
    * items [PresetFreq](#presetfreq)
  * MacVersion
  * MaxDutyCycle
  * MaxEirp
  * PingSlotDr
  * PingSlotFreq
  * PingSlotPeriod
  * RegParamsRevision
  * RfRegion
  * RxDataRate2
  * RxDelay1
  * RxDrOffset1
  * RxFreq2
  * Supports32BitFCnt
  * SupportsClassB
  * SupportsClassC
  * SupportsJoin

### LoRaWANGateway
* LoRaWANGateway `object`: LoRaWANGateway object.
  * GatewayEui
  * RfRegion

### LoRaWANGatewayCurrentVersion
* LoRaWANGatewayCurrentVersion `object`: LoRaWANGatewayCurrentVersion object.
  * CurrentVersion
    * Model
    * PackageVersion
    * Station

### LoRaWANGatewayMetadata
* LoRaWANGatewayMetadata `object`: LoRaWAN gateway metatdata.
  * GatewayEui
  * Rssi
  * Snr

### LoRaWANGatewayMetadataList
* LoRaWANGatewayMetadataList `array`
  * items [LoRaWANGatewayMetadata](#lorawangatewaymetadata)

### LoRaWANGatewayVersion
* LoRaWANGatewayVersion `object`: LoRaWANGatewayVersion object.
  * Model
  * PackageVersion
  * Station

### LoRaWANGetServiceProfileInfo
* LoRaWANGetServiceProfileInfo `object`: LoRaWANGetServiceProfileInfo object.
  * AddGwMetadata
  * ChannelMask
  * DevStatusReqFreq
  * DlBucketSize
  * DlRate
  * DlRatePolicy
  * DrMax
  * DrMin
  * HrAllowed
  * MinGwDiversity
  * NwkGeoLoc
  * PrAllowed
  * RaAllowed
  * ReportDevStatusBattery
  * ReportDevStatusMargin
  * TargetPer
  * UlBucketSize
  * UlRate
  * UlRatePolicy

### LoRaWANListDevice
* LoRaWANListDevice `object`: LoRaWAN object for list functions.
  * DevEui

### LoRaWANSendDataToDevice
* LoRaWANSendDataToDevice `object`: LoRaWAN router info.
  * FPort

### LoRaWANServiceProfile
* LoRaWANServiceProfile `object`: LoRaWANServiceProfile object.
  * AddGwMetadata

### LoRaWANUpdateDevice
* LoRaWANUpdateDevice `object`: LoRa object for update functions.
  * DeviceProfileId
  * ServiceProfileId

### LoRaWANUpdateGatewayTaskCreate
* LoRaWANUpdateGatewayTaskCreate `object`: LoRaWANUpdateGatewayTaskCreate object.
  * CurrentVersion
    * Model
    * PackageVersion
    * Station
  * SigKeyCrc
  * UpdateSignature
  * UpdateVersion
    * Model
    * PackageVersion
    * Station

### LoRaWANUpdateGatewayTaskEntry
* LoRaWANUpdateGatewayTaskEntry `object`: LoRaWANUpdateGatewayTaskEntry object.
  * CurrentVersion
    * Model
    * PackageVersion
    * Station
  * UpdateVersion
    * Model
    * PackageVersion
    * Station

### MacVersion
* MacVersion `string`

### MaxDutyCycle
* MaxDutyCycle `integer`

### MaxEirp
* MaxEirp `integer`

### MaxResults
* MaxResults `integer`

### MessageId
* MessageId `string`

### MinGwDiversity
* MinGwDiversity `integer`

### Model
* Model `string`

### NextToken
* NextToken `string`

### NwkGeoLoc
* NwkGeoLoc `boolean`

### NwkKey
* NwkKey `string`

### NwkSEncKey
* NwkSEncKey `string`

### NwkSKey
* NwkSKey `string`

### OtaaV1_0_x
* OtaaV1_0_x `object`: OTAA device object for v1.0.x
  * AppEui
  * AppKey

### OtaaV1_1
* OtaaV1_1 `object`: OTAA device object for v1.1
  * AppKey
  * JoinEui
  * NwkKey

### PackageVersion
* PackageVersion `string`

### PartnerAccountId
* PartnerAccountId `string`

### PartnerType
* PartnerType `string` (values: Sidewalk)

### PayloadData
* PayloadData `string`

### PingSlotDr
* PingSlotDr `integer`

### PingSlotFreq
* PingSlotFreq `integer`

### PingSlotPeriod
* PingSlotPeriod `integer`

### PrAllowed
* PrAllowed `boolean`

### PresetFreq
* PresetFreq `integer`

### RaAllowed
* RaAllowed `boolean`

### RegParamsRevision
* RegParamsRevision `string`

### ReportDevStatusBattery
* ReportDevStatusBattery `boolean`

### ReportDevStatusMargin
* ReportDevStatusMargin `boolean`

### ResourceNotFoundException


### Result
* Result `string`

### RfRegion
* RfRegion `string`

### RoleArn
* RoleArn `string`

### RxDataRate2
* RxDataRate2 `integer`

### RxDelay1
* RxDelay1 `integer`

### RxDrOffset1
* RxDrOffset1 `integer`

### RxFreq2
* RxFreq2 `integer`

### SNwkSIntKey
* SNwkSIntKey `string`

### SendDataToWirelessDeviceRequest
* SendDataToWirelessDeviceRequest `object`
  * PayloadData **required**
  * TransmitMode **required**
  * WirelessMetadata
    * LoRaWAN
      * FPort
    * Sidewalk
      * Seq

### SendDataToWirelessDeviceResponse
* SendDataToWirelessDeviceResponse `object`
  * MessageId

### Seq
* Seq `integer`

### ServiceProfile
* ServiceProfile `object`: Information about a service profile.
  * Arn
  * Id
  * Name

### ServiceProfileArn
* ServiceProfileArn `string`

### ServiceProfileId
* ServiceProfileId `string`

### ServiceProfileList
* ServiceProfileList `array`
  * items [ServiceProfile](#serviceprofile)

### ServiceProfileName
* ServiceProfileName `string`

### SessionKeysAbpV1_0_x
* SessionKeysAbpV1_0_x `object`: Session keys for ABP v1.1
  * AppSKey
  * NwkSKey

### SessionKeysAbpV1_1
* SessionKeysAbpV1_1 `object`: Session keys for ABP v1.1
  * AppSKey
  * FNwkSIntKey
  * NwkSEncKey
  * SNwkSIntKey

### SidewalkAccountInfo
* SidewalkAccountInfo `object`: Information about a Sidewalk account.
  * AmazonId
  * AppServerPrivateKey

### SidewalkAccountInfoWithFingerprint
* SidewalkAccountInfoWithFingerprint `object`: Information about a Sidewalk account.
  * AmazonId
  * AppServerPrivateKey

### SidewalkAccountList
* SidewalkAccountList `array`
  * items [SidewalkAccountInfoWithFingerprint](#sidewalkaccountinfowithfingerprint)

### SidewalkListDevice
* SidewalkListDevice `object`: Sidewalk object used by list functions.
  * AmazonId

### SidewalkSendDataToDevice
* SidewalkSendDataToDevice `object`: Information about a Sidewalk router.
  * Seq

### SidewalkUpdateAccount
* SidewalkUpdateAccount `object`: Sidewalk update.
  * AppServerPrivateKey

### Station
* Station `string`

### Supports32BitFCnt
* Supports32BitFCnt `boolean`

### SupportsClassB
* SupportsClassB `boolean`

### SupportsClassC
* SupportsClassC `boolean`

### SupportsJoin
* SupportsJoin `boolean`

### Tag
* Tag `object`: A simple label consisting of a customer-defined key-value pair
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetPer
* TargetPer `integer`

### TestWirelessDeviceRequest
* TestWirelessDeviceRequest `object`

### TestWirelessDeviceResponse
* TestWirelessDeviceResponse `object`
  * Result

### ThingArn
* ThingArn `string`

### ThingName
* ThingName `string`

### ThrottlingException


### TooManyTagsException


### TransmitMode
* TransmitMode `integer`

### UlBucketSize
* UlBucketSize `integer`

### UlRate
* UlRate `integer`

### UlRatePolicy
* UlRatePolicy `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDataSource
* UpdateDataSource `string`

### UpdateDestinationRequest
* UpdateDestinationRequest `object`
  * Description
  * Expression
  * ExpressionType
  * RoleArn

### UpdateDestinationResponse
* UpdateDestinationResponse `object`

### UpdatePartnerAccountRequest
* UpdatePartnerAccountRequest `object`
  * Sidewalk **required**
    * AppServerPrivateKey

### UpdatePartnerAccountResponse
* UpdatePartnerAccountResponse `object`

### UpdateSignature
* UpdateSignature `string`

### UpdateWirelessDeviceRequest
* UpdateWirelessDeviceRequest `object`
  * Description
  * DestinationName
  * LoRaWAN
    * DeviceProfileId
    * ServiceProfileId
  * Name

### UpdateWirelessDeviceResponse
* UpdateWirelessDeviceResponse `object`

### UpdateWirelessGatewayRequest
* UpdateWirelessGatewayRequest `object`
  * Description
  * Name

### UpdateWirelessGatewayResponse
* UpdateWirelessGatewayResponse `object`

### UpdateWirelessGatewayTaskCreate
* UpdateWirelessGatewayTaskCreate `object`: UpdateWirelessGatewayTaskCreate object.
  * LoRaWAN
    * CurrentVersion
      * Model
      * PackageVersion
      * Station
    * SigKeyCrc
    * UpdateSignature
    * UpdateVersion
      * Model
      * PackageVersion
      * Station
  * UpdateDataRole
  * UpdateDataSource

### UpdateWirelessGatewayTaskEntry
* UpdateWirelessGatewayTaskEntry `object`: UpdateWirelessGatewayTaskEntry object.
  * Id
  * LoRaWAN
    * CurrentVersion
      * Model
      * PackageVersion
      * Station
    * UpdateVersion
      * Model
      * PackageVersion
      * Station

### ValidationException


### WirelessDeviceArn
* WirelessDeviceArn `string`

### WirelessDeviceId
* WirelessDeviceId `string`

### WirelessDeviceIdType
* WirelessDeviceIdType `string` (values: WirelessDeviceId, DevEui, ThingName)

### WirelessDeviceName
* WirelessDeviceName `string`

### WirelessDeviceStatistics
* WirelessDeviceStatistics `object`: Information about a wireless device's operation.
  * Arn
  * DestinationName
  * Id
  * LastUplinkReceivedAt
  * LoRaWAN
    * DevEui
  * Name
  * Sidewalk
    * AmazonId
  * Type

### WirelessDeviceStatisticsList
* WirelessDeviceStatisticsList `array`
  * items [WirelessDeviceStatistics](#wirelessdevicestatistics)

### WirelessDeviceType
* WirelessDeviceType `string` (values: Sidewalk, LoRaWAN)

### WirelessGatewayArn
* WirelessGatewayArn `string`

### WirelessGatewayId
* WirelessGatewayId `string`

### WirelessGatewayIdType
* WirelessGatewayIdType `string` (values: GatewayEui, WirelessGatewayId, ThingName)

### WirelessGatewayName
* WirelessGatewayName `string`

### WirelessGatewayServiceType
* WirelessGatewayServiceType `string` (values: CUPS, LNS)

### WirelessGatewayStatistics
* WirelessGatewayStatistics `object`: Information about a wireless gateway's operation.
  * Arn
  * Description
  * Id
  * LastUplinkReceivedAt
  * LoRaWAN
    * GatewayEui
    * RfRegion
  * Name

### WirelessGatewayStatisticsList
* WirelessGatewayStatisticsList `array`
  * items [WirelessGatewayStatistics](#wirelessgatewaystatistics)

### WirelessGatewayTaskDefinitionId
* WirelessGatewayTaskDefinitionId `string`

### WirelessGatewayTaskDefinitionList
* WirelessGatewayTaskDefinitionList `array`
  * items [UpdateWirelessGatewayTaskEntry](#updatewirelessgatewaytaskentry)

### WirelessGatewayTaskDefinitionType
* WirelessGatewayTaskDefinitionType `string` (values: UPDATE)

### WirelessGatewayTaskName
* WirelessGatewayTaskName `string`

### WirelessGatewayTaskStatus
* WirelessGatewayTaskStatus `string` (values: PENDING, IN_PROGRESS, FIRST_RETRY, SECOND_RETRY, COMPLETED, FAILED)

### WirelessMetadata
* WirelessMetadata `object`: WirelessMetadata object.
  * LoRaWAN
    * FPort
  * Sidewalk
    * Seq


