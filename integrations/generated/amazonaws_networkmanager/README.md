# @datafire/amazonaws_networkmanager

Client library for AWS Network Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_networkmanager
```
```js
let amazonaws_networkmanager = require('@datafire/amazonaws_networkmanager').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your AWS and on-premises networks that are built around transit gateways.</p> <p>The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the <code>us-west-2</code> Region in all requests made to Network Manager.</p>

## Actions

### DescribeGlobalNetworks



```js
amazonaws_networkmanager.DescribeGlobalNetworks({}, context)
```

#### Input
* input `object`
  * globalNetworkIds `array`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [DescribeGlobalNetworksResponse](#describeglobalnetworksresponse)

### CreateGlobalNetwork



```js
amazonaws_networkmanager.CreateGlobalNetwork({}, context)
```

#### Input
* input `object`
  * Description `string`: <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Tags `array`: The tags to apply to the resource during creation.
    * items [Tag](#tag)

#### Output
* output [CreateGlobalNetworkResponse](#createglobalnetworkresponse)

### DeleteGlobalNetwork



```js
amazonaws_networkmanager.DeleteGlobalNetwork({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`

#### Output
* output [DeleteGlobalNetworkResponse](#deleteglobalnetworkresponse)

### UpdateGlobalNetwork



```js
amazonaws_networkmanager.UpdateGlobalNetwork({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * Description `string`: <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p>

#### Output
* output [UpdateGlobalNetworkResponse](#updateglobalnetworkresponse)

### GetConnections



```js
amazonaws_networkmanager.GetConnections({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * connectionIds `array`
  * deviceId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetConnectionsResponse](#getconnectionsresponse)

### CreateConnection



```js
amazonaws_networkmanager.CreateConnection({
  "globalNetworkId": "",
  "DeviceId": "",
  "ConnectedDeviceId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * ConnectedDeviceId **required** `string`: The ID of the second device in the connection.
  * ConnectedLinkId `string`: The ID of the link for the second device.
  * Description `string`: <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * DeviceId **required** `string`: The ID of the first device in the connection.
  * LinkId `string`: The ID of the link for the first device.
  * Tags `array`: The tags to apply to the resource during creation.
    * items [Tag](#tag)

#### Output
* output [CreateConnectionResponse](#createconnectionresponse)

### DeleteConnection



```js
amazonaws_networkmanager.DeleteConnection({
  "globalNetworkId": "",
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * connectionId **required** `string`

#### Output
* output [DeleteConnectionResponse](#deleteconnectionresponse)

### UpdateConnection



```js
amazonaws_networkmanager.UpdateConnection({
  "globalNetworkId": "",
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * connectionId **required** `string`
  * ConnectedLinkId `string`: The ID of the link for the second device in the connection.
  * Description `string`: <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * LinkId `string`: The ID of the link for the first device in the connection.

#### Output
* output [UpdateConnectionResponse](#updateconnectionresponse)

### GetCustomerGatewayAssociations



```js
amazonaws_networkmanager.GetCustomerGatewayAssociations({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * customerGatewayArns `array`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetCustomerGatewayAssociationsResponse](#getcustomergatewayassociationsresponse)

### AssociateCustomerGateway



```js
amazonaws_networkmanager.AssociateCustomerGateway({
  "globalNetworkId": "",
  "CustomerGatewayArn": "",
  "DeviceId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * CustomerGatewayArn **required** `string`: The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
  * DeviceId **required** `string`: The ID of the device.
  * LinkId `string`: The ID of the link.

#### Output
* output [AssociateCustomerGatewayResponse](#associatecustomergatewayresponse)

### DisassociateCustomerGateway



```js
amazonaws_networkmanager.DisassociateCustomerGateway({
  "globalNetworkId": "",
  "customerGatewayArn": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * customerGatewayArn **required** `string`

#### Output
* output [DisassociateCustomerGatewayResponse](#disassociatecustomergatewayresponse)

### GetDevices



```js
amazonaws_networkmanager.GetDevices({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * deviceIds `array`
  * siteId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetDevicesResponse](#getdevicesresponse)

### CreateDevice



```js
amazonaws_networkmanager.CreateDevice({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * AWSLocation `object`: Specifies a location in AWS.
    * SubnetArn
    * Zone
  * Description `string`: <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Location `object`: Describes a location.
    * Address
    * Latitude
    * Longitude
  * Model `string`: <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * SerialNumber `string`: <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * SiteId `string`: The ID of the site.
  * Tags `array`: The tags to apply to the resource during creation.
    * items [Tag](#tag)
  * Type `string`: The type of the device.
  * Vendor `string`: <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>

#### Output
* output [CreateDeviceResponse](#createdeviceresponse)

### DeleteDevice



```js
amazonaws_networkmanager.DeleteDevice({
  "globalNetworkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * deviceId **required** `string`

#### Output
* output [DeleteDeviceResponse](#deletedeviceresponse)

### UpdateDevice



```js
amazonaws_networkmanager.UpdateDevice({
  "globalNetworkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * deviceId **required** `string`
  * AWSLocation `object`: Specifies a location in AWS.
    * SubnetArn
    * Zone
  * Description `string`: <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Location `object`: Describes a location.
    * Address
    * Latitude
    * Longitude
  * Model `string`: <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * SerialNumber `string`: <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * SiteId `string`: The ID of the site.
  * Type `string`: The type of the device.
  * Vendor `string`: <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p>

#### Output
* output [UpdateDeviceResponse](#updatedeviceresponse)

### GetLinkAssociations



```js
amazonaws_networkmanager.GetLinkAssociations({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * deviceId `string`
  * linkId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetLinkAssociationsResponse](#getlinkassociationsresponse)

### AssociateLink



```js
amazonaws_networkmanager.AssociateLink({
  "globalNetworkId": "",
  "DeviceId": "",
  "LinkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * DeviceId **required** `string`: The ID of the device.
  * LinkId **required** `string`: The ID of the link.

#### Output
* output [AssociateLinkResponse](#associatelinkresponse)

### DisassociateLink



```js
amazonaws_networkmanager.DisassociateLink({
  "globalNetworkId": "",
  "deviceId": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * deviceId **required** `string`
  * linkId **required** `string`

#### Output
* output [DisassociateLinkResponse](#disassociatelinkresponse)

### GetLinks



```js
amazonaws_networkmanager.GetLinks({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * linkIds `array`
  * siteId `string`
  * type `string`
  * provider `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetLinksResponse](#getlinksresponse)

### CreateLink



```js
amazonaws_networkmanager.CreateLink({
  "globalNetworkId": "",
  "Bandwidth": {},
  "SiteId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * Bandwidth **required** `object`: Describes bandwidth information.
    * DownloadSpeed
    * UploadSpeed
  * Description `string`: <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Provider `string`: <p>The provider of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * SiteId **required** `string`: The ID of the site.
  * Tags `array`: The tags to apply to the resource during creation.
    * items [Tag](#tag)
  * Type `string`: <p>The type of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p>

#### Output
* output [CreateLinkResponse](#createlinkresponse)

### DeleteLink



```js
amazonaws_networkmanager.DeleteLink({
  "globalNetworkId": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * linkId **required** `string`

#### Output
* output [DeleteLinkResponse](#deletelinkresponse)

### UpdateLink



```js
amazonaws_networkmanager.UpdateLink({
  "globalNetworkId": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * linkId **required** `string`
  * Bandwidth `object`: Describes bandwidth information.
    * DownloadSpeed
    * UploadSpeed
  * Description `string`: <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Provider `string`: <p>The provider of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p>
  * Type `string`: <p>The type of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p>

#### Output
* output [UpdateLinkResponse](#updatelinkresponse)

### GetSites



```js
amazonaws_networkmanager.GetSites({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * siteIds `array`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetSitesResponse](#getsitesresponse)

### CreateSite



```js
amazonaws_networkmanager.CreateSite({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * Description `string`: <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Location `object`: Describes a location.
    * Address
    * Latitude
    * Longitude
  * Tags `array`: The tags to apply to the resource during creation.
    * items [Tag](#tag)

#### Output
* output [CreateSiteResponse](#createsiteresponse)

### DeleteSite



```js
amazonaws_networkmanager.DeleteSite({
  "globalNetworkId": "",
  "siteId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * siteId **required** `string`

#### Output
* output [DeleteSiteResponse](#deletesiteresponse)

### UpdateSite



```js
amazonaws_networkmanager.UpdateSite({
  "globalNetworkId": "",
  "siteId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * siteId **required** `string`
  * Description `string`: <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
  * Location `object`: Describes a location.
    * Address
    * Latitude
    * Longitude

#### Output
* output [UpdateSiteResponse](#updatesiteresponse)

### GetTransitGatewayConnectPeerAssociations



```js
amazonaws_networkmanager.GetTransitGatewayConnectPeerAssociations({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * transitGatewayConnectPeerArns `array`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetTransitGatewayConnectPeerAssociationsResponse](#gettransitgatewayconnectpeerassociationsresponse)

### AssociateTransitGatewayConnectPeer



```js
amazonaws_networkmanager.AssociateTransitGatewayConnectPeer({
  "globalNetworkId": "",
  "TransitGatewayConnectPeerArn": "",
  "DeviceId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * DeviceId **required** `string`: The ID of the device.
  * LinkId `string`: The ID of the link.
  * TransitGatewayConnectPeerArn **required** `string`: The Amazon Resource Name (ARN) of the Connect peer.

#### Output
* output [AssociateTransitGatewayConnectPeerResponse](#associatetransitgatewayconnectpeerresponse)

### DisassociateTransitGatewayConnectPeer



```js
amazonaws_networkmanager.DisassociateTransitGatewayConnectPeer({
  "globalNetworkId": "",
  "transitGatewayConnectPeerArn": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * transitGatewayConnectPeerArn **required** `string`

#### Output
* output [DisassociateTransitGatewayConnectPeerResponse](#disassociatetransitgatewayconnectpeerresponse)

### GetTransitGatewayRegistrations



```js
amazonaws_networkmanager.GetTransitGatewayRegistrations({
  "globalNetworkId": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * transitGatewayArns `array`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetTransitGatewayRegistrationsResponse](#gettransitgatewayregistrationsresponse)

### RegisterTransitGateway



```js
amazonaws_networkmanager.RegisterTransitGateway({
  "globalNetworkId": "",
  "TransitGatewayArn": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * TransitGatewayArn **required** `string`: The Amazon Resource Name (ARN) of the transit gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.

#### Output
* output [RegisterTransitGatewayResponse](#registertransitgatewayresponse)

### DeregisterTransitGateway



```js
amazonaws_networkmanager.DeregisterTransitGateway({
  "globalNetworkId": "",
  "transitGatewayArn": ""
}, context)
```

#### Input
* input `object`
  * globalNetworkId **required** `string`
  * transitGatewayArn **required** `string`

#### Output
* output [DeregisterTransitGatewayResponse](#deregistertransitgatewayresponse)

### ListTagsForResource



```js
amazonaws_networkmanager.ListTagsForResource({
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
amazonaws_networkmanager.TagResource({
  "resourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `array`: The tags to apply to the specified resource.
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_networkmanager.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AWSLocation
* AWSLocation `object`: Specifies a location in AWS.
  * SubnetArn
  * Zone

### AccessDeniedException


### AssociateCustomerGatewayRequest
* AssociateCustomerGatewayRequest `object`
  * CustomerGatewayArn **required**
  * DeviceId **required**
  * LinkId

### AssociateCustomerGatewayResponse
* AssociateCustomerGatewayResponse `object`
  * CustomerGatewayAssociation
    * CustomerGatewayArn
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State

### AssociateLinkRequest
* AssociateLinkRequest `object`
  * DeviceId **required**
  * LinkId **required**

### AssociateLinkResponse
* AssociateLinkResponse `object`
  * LinkAssociation
    * DeviceId
    * GlobalNetworkId
    * LinkAssociationState
    * LinkId

### AssociateTransitGatewayConnectPeerRequest
* AssociateTransitGatewayConnectPeerRequest `object`
  * DeviceId **required**
  * LinkId
  * TransitGatewayConnectPeerArn **required**

### AssociateTransitGatewayConnectPeerResponse
* AssociateTransitGatewayConnectPeerResponse `object`
  * TransitGatewayConnectPeerAssociation
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State
    * TransitGatewayConnectPeerArn

### Bandwidth
* Bandwidth `object`: Describes bandwidth information.
  * DownloadSpeed
  * UploadSpeed

### ConflictException


### Connection
* Connection `object`: Describes a connection.
  * ConnectedDeviceId
  * ConnectedLinkId
  * ConnectionArn
  * ConnectionId
  * CreatedAt
  * Description
  * DeviceId
  * GlobalNetworkId
  * LinkId
  * State
  * Tags
    * items [Tag](#tag)

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### ConnectionState
* ConnectionState `string` (values: PENDING, AVAILABLE, DELETING, UPDATING)

### CreateConnectionRequest
* CreateConnectionRequest `object`
  * ConnectedDeviceId **required**
  * ConnectedLinkId
  * Description
  * DeviceId **required**
  * LinkId
  * Tags
    * items [Tag](#tag)

### CreateConnectionResponse
* CreateConnectionResponse `object`
  * Connection
    * ConnectedDeviceId
    * ConnectedLinkId
    * ConnectionArn
    * ConnectionId
    * CreatedAt
    * Description
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State
    * Tags
      * items [Tag](#tag)

### CreateDeviceRequest
* CreateDeviceRequest `object`
  * AWSLocation
    * SubnetArn
    * Zone
  * Description
  * Location
    * Address
    * Latitude
    * Longitude
  * Model
  * SerialNumber
  * SiteId
  * Tags
    * items [Tag](#tag)
  * Type
  * Vendor

### CreateDeviceResponse
* CreateDeviceResponse `object`
  * Device
    * AWSLocation
      * SubnetArn
      * Zone
    * CreatedAt
    * Description
    * DeviceArn
    * DeviceId
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * Model
    * SerialNumber
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type
    * Vendor

### CreateGlobalNetworkRequest
* CreateGlobalNetworkRequest `object`
  * Description
  * Tags
    * items [Tag](#tag)

### CreateGlobalNetworkResponse
* CreateGlobalNetworkResponse `object`
  * GlobalNetwork
    * CreatedAt
    * Description
    * GlobalNetworkArn
    * GlobalNetworkId
    * State
    * Tags
      * items [Tag](#tag)

### CreateLinkRequest
* CreateLinkRequest `object`
  * Bandwidth **required**
    * DownloadSpeed
    * UploadSpeed
  * Description
  * Provider
  * SiteId **required**
  * Tags
    * items [Tag](#tag)
  * Type

### CreateLinkResponse
* CreateLinkResponse `object`
  * Link
    * Bandwidth
      * DownloadSpeed
      * UploadSpeed
    * CreatedAt
    * Description
    * GlobalNetworkId
    * LinkArn
    * LinkId
    * Provider
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type

### CreateSiteRequest
* CreateSiteRequest `object`
  * Description
  * Location
    * Address
    * Latitude
    * Longitude
  * Tags
    * items [Tag](#tag)

### CreateSiteResponse
* CreateSiteResponse `object`
  * Site
    * CreatedAt
    * Description
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * SiteArn
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)

### CustomerGatewayAssociation
* CustomerGatewayAssociation `object`: Describes the association between a customer gateway, a device, and a link.
  * CustomerGatewayArn
  * DeviceId
  * GlobalNetworkId
  * LinkId
  * State

### CustomerGatewayAssociationList
* CustomerGatewayAssociationList `array`
  * items [CustomerGatewayAssociation](#customergatewayassociation)

### CustomerGatewayAssociationState
* CustomerGatewayAssociationState `string` (values: PENDING, AVAILABLE, DELETING, DELETED)

### DateTime
* DateTime `string`

### DeleteConnectionRequest
* DeleteConnectionRequest `object`

### DeleteConnectionResponse
* DeleteConnectionResponse `object`
  * Connection
    * ConnectedDeviceId
    * ConnectedLinkId
    * ConnectionArn
    * ConnectionId
    * CreatedAt
    * Description
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State
    * Tags
      * items [Tag](#tag)

### DeleteDeviceRequest
* DeleteDeviceRequest `object`

### DeleteDeviceResponse
* DeleteDeviceResponse `object`
  * Device
    * AWSLocation
      * SubnetArn
      * Zone
    * CreatedAt
    * Description
    * DeviceArn
    * DeviceId
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * Model
    * SerialNumber
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type
    * Vendor

### DeleteGlobalNetworkRequest
* DeleteGlobalNetworkRequest `object`

### DeleteGlobalNetworkResponse
* DeleteGlobalNetworkResponse `object`
  * GlobalNetwork
    * CreatedAt
    * Description
    * GlobalNetworkArn
    * GlobalNetworkId
    * State
    * Tags
      * items [Tag](#tag)

### DeleteLinkRequest
* DeleteLinkRequest `object`

### DeleteLinkResponse
* DeleteLinkResponse `object`
  * Link
    * Bandwidth
      * DownloadSpeed
      * UploadSpeed
    * CreatedAt
    * Description
    * GlobalNetworkId
    * LinkArn
    * LinkId
    * Provider
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type

### DeleteSiteRequest
* DeleteSiteRequest `object`

### DeleteSiteResponse
* DeleteSiteResponse `object`
  * Site
    * CreatedAt
    * Description
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * SiteArn
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)

### DeregisterTransitGatewayRequest
* DeregisterTransitGatewayRequest `object`

### DeregisterTransitGatewayResponse
* DeregisterTransitGatewayResponse `object`
  * TransitGatewayRegistration
    * GlobalNetworkId
    * State
      * Code
      * Message
    * TransitGatewayArn

### DescribeGlobalNetworksRequest
* DescribeGlobalNetworksRequest `object`

### DescribeGlobalNetworksResponse
* DescribeGlobalNetworksResponse `object`
  * GlobalNetworks
    * items [GlobalNetwork](#globalnetwork)
  * NextToken

### Device
* Device `object`: Describes a device.
  * AWSLocation
    * SubnetArn
    * Zone
  * CreatedAt
  * Description
  * DeviceArn
  * DeviceId
  * GlobalNetworkId
  * Location
    * Address
    * Latitude
    * Longitude
  * Model
  * SerialNumber
  * SiteId
  * State
  * Tags
    * items [Tag](#tag)
  * Type
  * Vendor

### DeviceList
* DeviceList `array`
  * items [Device](#device)

### DeviceState
* DeviceState `string` (values: PENDING, AVAILABLE, DELETING, UPDATING)

### DisassociateCustomerGatewayRequest
* DisassociateCustomerGatewayRequest `object`

### DisassociateCustomerGatewayResponse
* DisassociateCustomerGatewayResponse `object`
  * CustomerGatewayAssociation
    * CustomerGatewayArn
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State

### DisassociateLinkRequest
* DisassociateLinkRequest `object`

### DisassociateLinkResponse
* DisassociateLinkResponse `object`
  * LinkAssociation
    * DeviceId
    * GlobalNetworkId
    * LinkAssociationState
    * LinkId

### DisassociateTransitGatewayConnectPeerRequest
* DisassociateTransitGatewayConnectPeerRequest `object`

### DisassociateTransitGatewayConnectPeerResponse
* DisassociateTransitGatewayConnectPeerResponse `object`
  * TransitGatewayConnectPeerAssociation
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State
    * TransitGatewayConnectPeerArn

### GetConnectionsRequest
* GetConnectionsRequest `object`

### GetConnectionsResponse
* GetConnectionsResponse `object`
  * Connections
    * items [Connection](#connection)
  * NextToken

### GetCustomerGatewayAssociationsRequest
* GetCustomerGatewayAssociationsRequest `object`

### GetCustomerGatewayAssociationsResponse
* GetCustomerGatewayAssociationsResponse `object`
  * CustomerGatewayAssociations
    * items [CustomerGatewayAssociation](#customergatewayassociation)
  * NextToken

### GetDevicesRequest
* GetDevicesRequest `object`

### GetDevicesResponse
* GetDevicesResponse `object`
  * Devices
    * items [Device](#device)
  * NextToken

### GetLinkAssociationsRequest
* GetLinkAssociationsRequest `object`

### GetLinkAssociationsResponse
* GetLinkAssociationsResponse `object`
  * LinkAssociations
    * items [LinkAssociation](#linkassociation)
  * NextToken

### GetLinksRequest
* GetLinksRequest `object`

### GetLinksResponse
* GetLinksResponse `object`
  * Links
    * items [Link](#link)
  * NextToken

### GetSitesRequest
* GetSitesRequest `object`

### GetSitesResponse
* GetSitesResponse `object`
  * NextToken
  * Sites
    * items [Site](#site)

### GetTransitGatewayConnectPeerAssociationsRequest
* GetTransitGatewayConnectPeerAssociationsRequest `object`

### GetTransitGatewayConnectPeerAssociationsResponse
* GetTransitGatewayConnectPeerAssociationsResponse `object`
  * NextToken
  * TransitGatewayConnectPeerAssociations
    * items [TransitGatewayConnectPeerAssociation](#transitgatewayconnectpeerassociation)

### GetTransitGatewayRegistrationsRequest
* GetTransitGatewayRegistrationsRequest `object`

### GetTransitGatewayRegistrationsResponse
* GetTransitGatewayRegistrationsResponse `object`
  * NextToken
  * TransitGatewayRegistrations
    * items [TransitGatewayRegistration](#transitgatewayregistration)

### GlobalNetwork
* GlobalNetwork `object`: Describes a global network.
  * CreatedAt
  * Description
  * GlobalNetworkArn
  * GlobalNetworkId
  * State
  * Tags
    * items [Tag](#tag)

### GlobalNetworkList
* GlobalNetworkList `array`
  * items [GlobalNetwork](#globalnetwork)

### GlobalNetworkState
* GlobalNetworkState `string` (values: PENDING, AVAILABLE, DELETING, UPDATING)

### Integer
* Integer `integer`

### InternalServerException


### Link
* Link `object`: Describes a link.
  * Bandwidth
    * DownloadSpeed
    * UploadSpeed
  * CreatedAt
  * Description
  * GlobalNetworkId
  * LinkArn
  * LinkId
  * Provider
  * SiteId
  * State
  * Tags
    * items [Tag](#tag)
  * Type

### LinkAssociation
* LinkAssociation `object`: Describes the association between a device and a link.
  * DeviceId
  * GlobalNetworkId
  * LinkAssociationState
  * LinkId

### LinkAssociationList
* LinkAssociationList `array`
  * items [LinkAssociation](#linkassociation)

### LinkAssociationState
* LinkAssociationState `string` (values: PENDING, AVAILABLE, DELETING, DELETED)

### LinkList
* LinkList `array`
  * items [Link](#link)

### LinkState
* LinkState `string` (values: PENDING, AVAILABLE, DELETING, UPDATING)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * TagList
    * items [Tag](#tag)

### Location
* Location `object`: Describes a location.
  * Address
  * Latitude
  * Longitude

### MaxResults
* MaxResults `integer`

### RegisterTransitGatewayRequest
* RegisterTransitGatewayRequest `object`
  * TransitGatewayArn **required**

### RegisterTransitGatewayResponse
* RegisterTransitGatewayResponse `object`
  * TransitGatewayRegistration
    * GlobalNetworkId
    * State
      * Code
      * Message
    * TransitGatewayArn

### ResourceARN
* ResourceARN `string`

### ResourceNotFoundException


### ServiceQuotaExceededException


### Site
* Site `object`: Describes a site.
  * CreatedAt
  * Description
  * GlobalNetworkId
  * Location
    * Address
    * Latitude
    * Longitude
  * SiteArn
  * SiteId
  * State
  * Tags
    * items [Tag](#tag)

### SiteList
* SiteList `array`
  * items [Site](#site)

### SiteState
* SiteState `string` (values: PENDING, AVAILABLE, DELETING, UPDATING)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Tag
* Tag `object`: Describes a tag.
  * Key
  * Value

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

### ThrottlingException


### TransitGatewayConnectPeerAssociation
* TransitGatewayConnectPeerAssociation `object`: Describes a transit gateway Connect peer association.
  * DeviceId
  * GlobalNetworkId
  * LinkId
  * State
  * TransitGatewayConnectPeerArn

### TransitGatewayConnectPeerAssociationList
* TransitGatewayConnectPeerAssociationList `array`
  * items [TransitGatewayConnectPeerAssociation](#transitgatewayconnectpeerassociation)

### TransitGatewayConnectPeerAssociationState
* TransitGatewayConnectPeerAssociationState `string` (values: PENDING, AVAILABLE, DELETING, DELETED)

### TransitGatewayRegistration
* TransitGatewayRegistration `object`: Describes the registration of a transit gateway to a global network.
  * GlobalNetworkId
  * State
    * Code
    * Message
  * TransitGatewayArn

### TransitGatewayRegistrationList
* TransitGatewayRegistrationList `array`
  * items [TransitGatewayRegistration](#transitgatewayregistration)

### TransitGatewayRegistrationState
* TransitGatewayRegistrationState `string` (values: PENDING, AVAILABLE, DELETING, DELETED, FAILED)

### TransitGatewayRegistrationStateReason
* TransitGatewayRegistrationStateReason `object`: Describes the status of a transit gateway registration.
  * Code
  * Message

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateConnectionRequest
* UpdateConnectionRequest `object`
  * ConnectedLinkId
  * Description
  * LinkId

### UpdateConnectionResponse
* UpdateConnectionResponse `object`
  * Connection
    * ConnectedDeviceId
    * ConnectedLinkId
    * ConnectionArn
    * ConnectionId
    * CreatedAt
    * Description
    * DeviceId
    * GlobalNetworkId
    * LinkId
    * State
    * Tags
      * items [Tag](#tag)

### UpdateDeviceRequest
* UpdateDeviceRequest `object`
  * AWSLocation
    * SubnetArn
    * Zone
  * Description
  * Location [Location](#location)
  * Model
  * SerialNumber
  * SiteId
  * Type
  * Vendor

### UpdateDeviceResponse
* UpdateDeviceResponse `object`
  * Device
    * AWSLocation
      * SubnetArn
      * Zone
    * CreatedAt
    * Description
    * DeviceArn
    * DeviceId
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * Model
    * SerialNumber
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type
    * Vendor

### UpdateGlobalNetworkRequest
* UpdateGlobalNetworkRequest `object`
  * Description

### UpdateGlobalNetworkResponse
* UpdateGlobalNetworkResponse `object`
  * GlobalNetwork
    * CreatedAt
    * Description
    * GlobalNetworkArn
    * GlobalNetworkId
    * State
    * Tags
      * items [Tag](#tag)

### UpdateLinkRequest
* UpdateLinkRequest `object`
  * Bandwidth
    * DownloadSpeed
    * UploadSpeed
  * Description
  * Provider
  * Type

### UpdateLinkResponse
* UpdateLinkResponse `object`
  * Link
    * Bandwidth
      * DownloadSpeed
      * UploadSpeed
    * CreatedAt
    * Description
    * GlobalNetworkId
    * LinkArn
    * LinkId
    * Provider
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)
    * Type

### UpdateSiteRequest
* UpdateSiteRequest `object`
  * Description
  * Location
    * Address
    * Latitude
    * Longitude

### UpdateSiteResponse
* UpdateSiteResponse `object`
  * Site
    * CreatedAt
    * Description
    * GlobalNetworkId
    * Location
      * Address
      * Latitude
      * Longitude
    * SiteArn
    * SiteId
    * State
    * Tags
      * items [Tag](#tag)

### ValidationException



