# @datafire/azure_peering

Client library for PeeringManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_peering
```
```js
let azure_peering = require('@datafire/azure_peering').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

APIs to manage Peering resources through the Azure Resource Manager.

## Actions

### Operations_List
Lists all of the available API operations for peering resources.


```js
azure_peering.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### CheckServiceProviderAvailability
Checks if the peering service provider is present within 1000 distance of customer's location


```js
azure_peering.CheckServiceProviderAvailability({
  "checkServiceProviderAvailabilityInput": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkServiceProviderAvailabilityInput **required** [CheckServiceProviderAvailabilityInput](#checkserviceprovideravailabilityinput)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output `string` (values: Available, UnAvailable)

### LegacyPeerings_List
Lists all of the legacy peerings under the given subscription matching the specified kind and location.


```js
azure_peering.LegacyPeerings_List({
  "peeringLocation": "",
  "kind": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * peeringLocation **required** `string`: The location of the peering.
  * kind **required** `string` (values: Direct, Exchange): The kind of the peering.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringListResult](#peeringlistresult)

### PeerAsns_ListBySubscription
Lists all of the peer ASNs under the given subscription.


```js
azure_peering.PeerAsns_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeerAsnListResult](#peerasnlistresult)

### PeerAsns_Delete
Deletes an existing peer ASN with the specified name under the given subscription.


```js
azure_peering.PeerAsns_Delete({
  "peerAsnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * peerAsnName **required** `string`: The peer ASN name.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
*Output schema unknown*

### PeerAsns_Get
Gets the peer ASN with the specified name under the given subscription.


```js
azure_peering.PeerAsns_Get({
  "peerAsnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * peerAsnName **required** `string`: The peer ASN name.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeerAsn](#peerasn)

### PeerAsns_CreateOrUpdate
Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.


```js
azure_peering.PeerAsns_CreateOrUpdate({
  "peerAsnName": "",
  "peerAsn": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * peerAsnName **required** `string`: The peer ASN name.
  * peerAsn **required** [PeerAsn](#peerasn)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeerAsn](#peerasn)

### PeeringLocations_List
Lists all of the available peering locations for the specified kind of peering.


```js
azure_peering.PeeringLocations_List({
  "kind": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string` (values: Direct, Exchange): The kind of the peering.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringLocationListResult](#peeringlocationlistresult)

### PeeringServiceLocations_List
Lists all of the available peering service locations for the specified kind of peering.


```js
azure_peering.PeeringServiceLocations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServiceLocationListResult](#peeringservicelocationlistresult)

### PeeringServiceProviders_List
Lists all of the available peering service locations for the specified kind of peering.


```js
azure_peering.PeeringServiceProviders_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServiceProviderListResult](#peeringserviceproviderlistresult)

### PeeringServices_ListBySubscription
Lists all of the peerings under the given subscription.


```js
azure_peering.PeeringServices_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServiceListResult](#peeringservicelistresult)

### Peerings_ListBySubscription
Lists all of the peerings under the given subscription.


```js
azure_peering.Peerings_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringListResult](#peeringlistresult)

### PeeringServices_ListByResourceGroup
Lists all of the peering services under the given subscription and resource group.


```js
azure_peering.PeeringServices_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServiceListResult](#peeringservicelistresult)

### PeeringServices_Delete
Deletes an existing peering service with the specified name under the given subscription and resource group.


```js
azure_peering.PeeringServices_Delete({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringServiceName **required** `string`: The name of the peering service.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
*Output schema unknown*

### PeeringServices_Get
Gets an existing peering service with the specified name under the given subscription and resource group.


```js
azure_peering.PeeringServices_Get({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringServiceName **required** `string`: The name of the peering.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringService](#peeringservice)

### PeeringServices_Update
Updates tags for a peering service with the specified name under the given subscription and resource group.


```js
azure_peering.PeeringServices_Update({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "tags": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringServiceName **required** `string`: The name of the peering service.
  * tags **required** [ResourceTags](#resourcetags)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringService](#peeringservice)

### PeeringServices_CreateOrUpdate
Creates a new peering service or updates an existing peering with the specified name under the given subscription and resource group.


```js
azure_peering.PeeringServices_CreateOrUpdate({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "peeringService": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringServiceName **required** `string`: The name of the peering service.
  * peeringService **required** [PeeringService](#peeringservice)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringService](#peeringservice)

### Prefixes_ListByPeeringService
Lists the peerings prefix in the resource group.


```js
azure_peering.Prefixes_ListByPeeringService({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * peeringServiceName **required** `string`: The peering service name.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServicePrefixListResult](#peeringserviceprefixlistresult)

### PeeringServicePrefixes_Delete
removes the peering prefix.


```js
azure_peering.PeeringServicePrefixes_Delete({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "prefixName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * peeringServiceName **required** `string`: The peering service name.
  * prefixName **required** `string`: The prefix name
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
*Output schema unknown*

### PeeringServicePrefixes_Get
Gets the peering service prefix.


```js
azure_peering.PeeringServicePrefixes_Get({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "prefixName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * peeringServiceName **required** `string`: The peering service name.
  * prefixName **required** `string`: The prefix name.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServicePrefix](#peeringserviceprefix)

### PeeringServicePrefixes_CreateOrUpdate
Creates or updates the peering prefix.


```js
azure_peering.PeeringServicePrefixes_CreateOrUpdate({
  "resourceGroupName": "",
  "peeringServiceName": "",
  "prefixName": "",
  "peeringServicePrefix": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * peeringServiceName **required** `string`: The peering service name.
  * prefixName **required** `string`: The prefix name
  * peeringServicePrefix **required** [PeeringServicePrefix](#peeringserviceprefix)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringServicePrefix](#peeringserviceprefix)

### Peerings_ListByResourceGroup
Lists all of the peerings under the given subscription and resource group.


```js
azure_peering.Peerings_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [PeeringListResult](#peeringlistresult)

### Peerings_Delete
Deletes an existing peering with the specified name under the given subscription and resource group.


```js
azure_peering.Peerings_Delete({
  "resourceGroupName": "",
  "peeringName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringName **required** `string`: The name of the peering.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
*Output schema unknown*

### Peerings_Get
Gets an existing peering with the specified name under the given subscription and resource group.


```js
azure_peering.Peerings_Get({
  "resourceGroupName": "",
  "peeringName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringName **required** `string`: The name of the peering.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [Peering](#peering)

### Peerings_Update
Updates tags for a peering with the specified name under the given subscription and resource group.


```js
azure_peering.Peerings_Update({
  "resourceGroupName": "",
  "peeringName": "",
  "tags": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringName **required** `string`: The name of the peering.
  * tags **required** [ResourceTags](#resourcetags)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [Peering](#peering)

### Peerings_CreateOrUpdate
Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.


```js
azure_peering.Peerings_CreateOrUpdate({
  "resourceGroupName": "",
  "peeringName": "",
  "peering": {
    "sku": {},
    "kind": "",
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * peeringName **required** `string`: The name of the peering.
  * peering **required** [Peering](#peering)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The client API version.

#### Output
* output [Peering](#peering)



## Definitions

### BgpSession
* BgpSession `object`: The properties that define a BGP session.
  * maxPrefixesAdvertisedV4 `integer`: The maximum number of prefixes advertised over the IPv4 session.
  * maxPrefixesAdvertisedV6 `integer`: The maximum number of prefixes advertised over the IPv6 session.
  * md5AuthenticationKey `string`: The MD5 authentication key of the session.
  * microsoftSessionIPv4Address `string`: The IPv4 session address on Microsoft's end.
  * microsoftSessionIPv6Address `string`: The IPv6 session address on Microsoft's end.
  * peerSessionIPv4Address `string`: The IPv4 session address on peer's end.
  * peerSessionIPv6Address `string`: The IPv6 session address on peer's end.
  * sessionPrefixV4 `string`: The IPv4 prefix that contains both ends' IPv4 addresses.
  * sessionPrefixV6 `string`: The IPv6 prefix that contains both ends' IPv6 addresses.
  * sessionStateV4 `string` (values: None, Idle, Connect, Active, OpenSent, OpenConfirm, OpenReceived, Established, PendingAdd, PendingUpdate, PendingRemove): The state of the IPv4 session.
  * sessionStateV6 `string` (values: None, Idle, Connect, Active, OpenSent, OpenConfirm, OpenReceived, Established, PendingAdd, PendingUpdate, PendingRemove): The state of the IPv6 session.

### CheckServiceProviderAvailabilityInput
* CheckServiceProviderAvailabilityInput `object`: Class for CheckServiceProviderAvailabilityInput
  * peeringServiceLocation `string`: Gets or sets the PeeringServiceLocation
  * peeringServiceProvider `string`: Gets or sets the PeeringServiceProvider

### ContactInfo
* ContactInfo `object`: The contact information of the peer.
  * emails `array`: The list of email addresses.
    * items `string`
  * phone `array`: The list of contact numbers.
    * items `string`

### DirectConnection
* DirectConnection `object`: The properties that define a direct connection.
  * bandwidthInMbps `integer`: The bandwidth of the connection.
  * bgpSession [BgpSession](#bgpsession)
  * connectionIdentifier `string`: The unique identifier (GUID) for the connection.
  * connectionState `string` (values: None, PendingApproval, Approved, ProvisioningStarted, ProvisioningFailed, ProvisioningCompleted, Validating, Active): The state of the connection.
  * peeringDBFacilityId `integer`: The PeeringDB.com ID of the facility at which the connection has to be set up.
  * provisionedBandwidthInMbps `integer`: The bandwidth that is actually provisioned.

### DirectPeeringFacility
* DirectPeeringFacility `object`: The properties that define a direct peering facility.
  * address `string`: The address of the direct peering facility.
  * peeringDBFacilityId `integer`: The PeeringDB.com ID of the facility.
  * peeringDBFacilityLink `string`: The PeeringDB.com URL of the facility.

### ErrorResponse
* ErrorResponse `object`: The error response that indicates why an operation has failed.
  * code `string`: The error code.
  * message `string`: The error message.

### ExchangeConnection
* ExchangeConnection `object`: The properties that define an exchange connection.
  * bgpSession [BgpSession](#bgpsession)
  * connectionIdentifier `string`: The unique identifier (GUID) for the connection.
  * connectionState `string` (values: None, PendingApproval, Approved, ProvisioningStarted, ProvisioningFailed, ProvisioningCompleted, Validating, Active): The state of the connection.
  * peeringDBFacilityId `integer`: The PeeringDB.com ID of the facility at which the connection has to be set up.

### ExchangePeeringFacility
* ExchangePeeringFacility `object`: The properties that define an exchange peering facility.
  * bandwidthInMbps `integer`: The bandwidth of the connection between Microsoft and the exchange peering facility.
  * exchangeName `string`: The name of the exchange peering facility.
  * facilityIPv4Prefix `string`: The IPv4 prefixes associated with the exchange peering facility.
  * facilityIPv6Prefix `string`: The IPv6 prefixes associated with the exchange peering facility.
  * microsoftIPv4Address `string`: The IPv4 address of Microsoft at the exchange peering facility.
  * microsoftIPv6Address `string`: The IPv6 address of Microsoft at the exchange peering facility.
  * peeringDBFacilityId `integer`: The PeeringDB.com ID of the facility.
  * peeringDBFacilityLink `string`: The PeeringDB.com URL of the facility.

### Operation
* Operation `object`: The peering API operation.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * isDataAction `boolean`: The flag that indicates whether the operation applies to data plane.
  * name `string`: The name of the operation.

### OperationDisplayInfo
* OperationDisplayInfo `object`: The information related to the operation.
  * description `string`: The description of the operation.
  * operation `string`: The name of the operation.
  * provider `string`: The name of the resource provider.
  * resource `string`: The type of the resource.

### OperationListResult
* OperationListResult `object`: The paginated list of peering API operations.
  * nextLink `string`: The link to fetch the next page of peering API operations.
  * value `array`: The list of peering API operations.
    * items [Operation](#operation)

### PeerAsn
* PeerAsn `object`: The essential information related to the peer's ASN.
  * properties [PeerAsnProperties](#peerasnproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeerAsnListResult
* PeerAsnListResult `object`: The paginated list of peer ASNs.
  * nextLink `string`: The link to fetch the next page of peer ASNs.
  * value `array`: The list of peer ASNs.
    * items [PeerAsn](#peerasn)

### PeerAsnProperties
* PeerAsnProperties `object`: The properties that define a peer's ASN.
  * peerAsn `integer`: The Autonomous System Number (ASN) of the peer.
  * peerContactInfo [ContactInfo](#contactinfo)
  * peerName `string`: The name of the peer.
  * validationState `string` (values: None, Pending, Approved, Failed): The validation state of the ASN associated with the peer.

### Peering
* Peering `object`: Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
  * kind **required** `string` (values: Direct, Exchange): The kind of the peering.
  * location **required** `string`: The location of the resource.
  * properties [PeeringProperties](#peeringproperties)
  * sku **required** [PeeringSku](#peeringsku)
  * tags `object`: The resource tags.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringBandwidthOffer
* PeeringBandwidthOffer `object`: The properties that define a peering bandwidth offer.
  * offerName `string`: The name of the bandwidth offer.
  * valueInMbps `integer`: The value of the bandwidth offer in Mbps.

### PeeringListResult
* PeeringListResult `object`: The paginated list of peerings.
  * nextLink `string`: The link to fetch the next page of peerings.
  * value `array`: The list of peerings.
    * items [Peering](#peering)

### PeeringLocation
* PeeringLocation `object`: Peering location is where connectivity could be established to the Microsoft Cloud Edge.
  * kind `string` (values: Direct, Exchange): The kind of peering that the peering location supports.
  * properties [PeeringLocationProperties](#peeringlocationproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringLocationListResult
* PeeringLocationListResult `object`: The paginated list of peering locations.
  * nextLink `string`: The link to fetch the next page of peering locations.
  * value `array`: The list of peering locations.
    * items [PeeringLocation](#peeringlocation)

### PeeringLocationProperties
* PeeringLocationProperties `object`: The properties that define a peering location.
  * azureRegion `string`: The Azure region associated with the peering location.
  * country `string`: The country in which the peering location exists.
  * direct [PeeringLocationPropertiesDirect](#peeringlocationpropertiesdirect)
  * exchange [PeeringLocationPropertiesExchange](#peeringlocationpropertiesexchange)
  * peeringLocation `string`: The name of the peering location.

### PeeringLocationPropertiesDirect
* PeeringLocationPropertiesDirect `object`: The properties that define a direct peering location.
  * bandwidthOffers `array`: The list of bandwidth offers available at the peering location.
    * items [PeeringBandwidthOffer](#peeringbandwidthoffer)
  * peeringFacilities `array`: The list of direct peering facilities at the peering location.
    * items [DirectPeeringFacility](#directpeeringfacility)

### PeeringLocationPropertiesExchange
* PeeringLocationPropertiesExchange `object`: The properties that define an exchange peering location.
  * peeringFacilities `array`: The list of exchange peering facilities at the peering location.
    * items [ExchangePeeringFacility](#exchangepeeringfacility)

### PeeringProperties
* PeeringProperties `object`: The properties that define connectivity to the Microsoft Cloud Edge.
  * direct [PeeringPropertiesDirect](#peeringpropertiesdirect)
  * exchange [PeeringPropertiesExchange](#peeringpropertiesexchange)
  * peeringLocation `string`: The location of the peering.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The provisioning state of the resource.

### PeeringPropertiesDirect
* PeeringPropertiesDirect `object`: The properties that define a direct peering.
  * connections `array`: The set of connections that constitute a direct peering.
    * items [DirectConnection](#directconnection)
  * peerAsn [SubResource](#subresource)
  * useForPeeringService `boolean`: The flag that indicates whether or not the peering is used for peering service.

### PeeringPropertiesExchange
* PeeringPropertiesExchange `object`: The properties that define an exchange peering.
  * connections `array`: The set of connections that constitute an exchange peering.
    * items [ExchangeConnection](#exchangeconnection)
  * peerAsn [SubResource](#subresource)

### PeeringService
* PeeringService `object`: Peering Service
  * location **required** `string`: The location of the resource.
  * properties [PeeringServiceProperties](#peeringserviceproperties)
  * tags `object`: The resource tags.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringServiceListResult
* PeeringServiceListResult `object`: The paginated list of peering services.
  * nextLink `string`: The link to fetch the next page of peering services.
  * value `array`: The list of peering services.
    * items [PeeringService](#peeringservice)

### PeeringServiceLocation
* PeeringServiceLocation `object`: PeeringService location
  * properties [PeeringServiceLocationProperties](#peeringservicelocationproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringServiceLocationListResult
* PeeringServiceLocationListResult `object`: The paginated list of peering service locations.
  * nextLink `string`: The link to fetch the next page of peering service locations.
  * value `array`: The list of peering service locations.
    * items [PeeringServiceLocation](#peeringservicelocation)

### PeeringServiceLocationProperties
* PeeringServiceLocationProperties `object`: The properties that define connectivity to the Peering Service Location.
  * azureRegion `string`: Azure region for the location
  * country `string`: Country of the customer
  * state `string`: State of the customer

### PeeringServicePrefix
* PeeringServicePrefix `object`: The peering service prefix class.
  * properties [PeeringServicePrefixProperties](#peeringserviceprefixproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringServicePrefixListResult
* PeeringServicePrefixListResult `object`: The paginated list of [T].
  * nextLink `string`: The link to fetch the next page of [T].
  * value `array`: The list of [T].
    * items [PeeringServicePrefix](#peeringserviceprefix)

### PeeringServicePrefixProperties
* PeeringServicePrefixProperties `object`: The peering service prefix properties class.
  * learnedType `string` (values: None, ViaPartner, ViaSession): The prefix learned type
  * prefix `string`: Valid route prefix
  * prefixValidationState `string` (values: None, Invalid, Verified, Failed, Pending, Unknown): The prefix validation state
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The provisioning state of the resource.

### PeeringServiceProperties
* PeeringServiceProperties `object`: The properties that define connectivity to the Peering Service.
  * peeringServiceLocation `string`: The PeeringServiceLocation of the Customer.
  * peeringServiceProvider `string`: The MAPS Provider Name.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The provisioning state of the resource.

### PeeringServiceProvider
* PeeringServiceProvider `object`: PeeringService provider
  * properties [PeeringServiceProviderProperties](#peeringserviceproviderproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PeeringServiceProviderListResult
* PeeringServiceProviderListResult `object`: The paginated list of peering service providers.
  * nextLink `string`: The link to fetch the next page of peering service providers.
  * value `array`: The list of peering service providers.
    * items [PeeringServiceProvider](#peeringserviceprovider)

### PeeringServiceProviderProperties
* PeeringServiceProviderProperties `object`: The properties that define connectivity to the Peering Service Provider.
  * serviceProviderName `string`: The name of the service provider.

### PeeringSku
* PeeringSku `object`: The SKU that defines the tier and kind of the peering.
  * family `string` (values: Direct, Exchange): The family of the peering SKU.
  * name `string` (values: Basic_Exchange_Free, Basic_Direct_Free, Premium_Direct_Free, Premium_Exchange_Metered): The name of the peering SKU.
  * size `string` (values: Free, Metered, Unlimited): The size of the peering SKU.
  * tier `string` (values: Basic, Premium): The tier of the peering SKU.

### Resource
* Resource `object`: The ARM resource class.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResourceTags
* ResourceTags `object`: The resource tags.
  * tags `object`: Gets or sets the tags, a dictionary of descriptors arm object

### SubResource
* SubResource `object`: The sub resource.
  * id `string`: The identifier of the referenced resource.


