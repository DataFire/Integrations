# @datafire/amazonaws_mediaconnect

Client library for AWS MediaConnect

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediaconnect
```
```js
let amazonaws_mediaconnect = require('@datafire/amazonaws_mediaconnect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API for AWS Elemental MediaConnect

## Actions

### ListTagsForResource



```js
amazonaws_mediaconnect.ListTagsForResource({
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
amazonaws_mediaconnect.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_mediaconnect.UntagResource({
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

### ListEntitlements



```js
amazonaws_mediaconnect.ListEntitlements({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListEntitlementsResponse](#listentitlementsresponse)

### ListFlows



```js
amazonaws_mediaconnect.ListFlows({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListFlowsResponse](#listflowsresponse)

### CreateFlow



```js
amazonaws_mediaconnect.CreateFlow({
  "name": ""
}, context)
```

#### Input
* input `object`
  * availabilityZone `string`: The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
  * entitlements `array`: The entitlements that you want to grant on a flow.
    * items [GrantEntitlementRequest](#grantentitlementrequest)
  * name **required** `string`: The name of the flow.
  * outputs `array`: The outputs that you want to add to this flow.
    * items [AddOutputRequest](#addoutputrequest)
  * source `object`: The settings for the source of the flow.
    * Decryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * Description
    * EntitlementArn
    * IngestPort
    * MaxBitrate
    * MaxLatency
    * Name
    * Protocol
    * StreamId
    * VpcInterfaceName
    * WhitelistCidr
  * sourceFailoverConfig `object`: The settings for source failover
    * RecoveryWindow
    * State
  * sources `array`
    * items [SetSourceRequest](#setsourcerequest)
  * vpcInterfaces `array`: The VPC interfaces you want on the flow.
    * items [VpcInterfaceRequest](#vpcinterfacerequest)

#### Output
*Output schema unknown*

### StartFlow



```js
amazonaws_mediaconnect.StartFlow({
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`

#### Output
*Output schema unknown*

### StopFlow



```js
amazonaws_mediaconnect.StopFlow({
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`

#### Output
*Output schema unknown*

### DeleteFlow



```js
amazonaws_mediaconnect.DeleteFlow({
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`

#### Output
*Output schema unknown*

### DescribeFlow



```js
amazonaws_mediaconnect.DescribeFlow({
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`

#### Output
* output [DescribeFlowResponse](#describeflowresponse)

### UpdateFlow



```js
amazonaws_mediaconnect.UpdateFlow({
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * sourceFailoverConfig `object`: The settings for source failover
    * RecoveryWindow
    * State

#### Output
*Output schema unknown*

### GrantFlowEntitlements



```js
amazonaws_mediaconnect.GrantFlowEntitlements({
  "flowArn": "",
  "entitlements": []
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * entitlements **required** `array`: The list of entitlements that you want to grant.
    * items [GrantEntitlementRequest](#grantentitlementrequest)

#### Output
* output [GrantFlowEntitlementsResponse](#grantflowentitlementsresponse)

### RevokeFlowEntitlement



```js
amazonaws_mediaconnect.RevokeFlowEntitlement({
  "entitlementArn": "",
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * entitlementArn **required** `string`
  * flowArn **required** `string`

#### Output
*Output schema unknown*

### UpdateFlowEntitlement



```js
amazonaws_mediaconnect.UpdateFlowEntitlement({
  "entitlementArn": "",
  "flowArn": ""
}, context)
```

#### Input
* input `object`
  * entitlementArn **required** `string`
  * flowArn **required** `string`
  * description `string`: A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
  * encryption `object`: Information about the encryption of the flow.
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * entitlementStatus `string` (values: ENABLED, DISABLED): An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.
  * subscribers `array`: The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
    * items [__string](#__string)

#### Output
*Output schema unknown*

### AddFlowOutputs



```js
amazonaws_mediaconnect.AddFlowOutputs({
  "flowArn": "",
  "outputs": []
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * outputs **required** `array`: A list of outputs that you want to add.
    * items [AddOutputRequest](#addoutputrequest)

#### Output
*Output schema unknown*

### RemoveFlowOutput



```js
amazonaws_mediaconnect.RemoveFlowOutput({
  "flowArn": "",
  "outputArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * outputArn **required** `string`

#### Output
*Output schema unknown*

### UpdateFlowOutput



```js
amazonaws_mediaconnect.UpdateFlowOutput({
  "flowArn": "",
  "outputArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * outputArn **required** `string`
  * cidrAllowList `array`: The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
    * items [__string](#__string)
  * description `string`: A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
  * destination `string`: The IP address where you want to send the output.
  * encryption `object`: Information about the encryption of the flow.
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * maxLatency `integer`: The maximum latency in milliseconds for Zixi-based streams.
  * port `integer`: The port to use when content is distributed to this output.
  * protocol `string` (values: zixi-push, rtp-fec, rtp, zixi-pull, rist): The protocol to use for the output.
  * remoteId `string`: The remote ID for the Zixi-pull stream.
  * smoothingLatency `integer`: The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
  * streamId `string`: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  * vpcInterfaceAttachment `object`: The settings for attaching a VPC interface to an output.
    * VpcInterfaceName

#### Output
*Output schema unknown*

### AddFlowSources



```js
amazonaws_mediaconnect.AddFlowSources({
  "flowArn": "",
  "sources": []
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * sources **required** `array`: A list of sources that you want to add.
    * items [SetSourceRequest](#setsourcerequest)

#### Output
*Output schema unknown*

### RemoveFlowSource



```js
amazonaws_mediaconnect.RemoveFlowSource({
  "flowArn": "",
  "sourceArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * sourceArn **required** `string`

#### Output
*Output schema unknown*

### UpdateFlowSource



```js
amazonaws_mediaconnect.UpdateFlowSource({
  "flowArn": "",
  "sourceArn": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * sourceArn **required** `string`
  * decryption `object`: Information about the encryption of the flow.
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * description `string`: A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
  * entitlementArn `string`: The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
  * ingestPort `integer`: The port that the flow will be listening on for incoming content.
  * maxBitrate `integer`: The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
  * maxLatency `integer`: The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
  * protocol `string` (values: zixi-push, rtp-fec, rtp, zixi-pull, rist): The protocol that is used by the source.
  * streamId `string`: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  * vpcInterfaceName `string`: The name of the VPC Interface to configure this Source with.
  * whitelistCidr `string`: The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

#### Output
*Output schema unknown*

### AddFlowVpcInterfaces



```js
amazonaws_mediaconnect.AddFlowVpcInterfaces({
  "flowArn": "",
  "vpcInterfaces": []
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * vpcInterfaces **required** `array`: A list of VPC interfaces that you want to add.
    * items [VpcInterfaceRequest](#vpcinterfacerequest)

#### Output
*Output schema unknown*

### RemoveFlowVpcInterface



```js
amazonaws_mediaconnect.RemoveFlowVpcInterface({
  "flowArn": "",
  "vpcInterfaceName": ""
}, context)
```

#### Input
* input `object`
  * flowArn **required** `string`
  * vpcInterfaceName **required** `string`

#### Output
* output [RemoveFlowVpcInterfaceResponse](#removeflowvpcinterfaceresponse)

### ListOfferings



```js
amazonaws_mediaconnect.ListOfferings({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListOfferingsResponse](#listofferingsresponse)

### DescribeOffering



```js
amazonaws_mediaconnect.DescribeOffering({
  "offeringArn": ""
}, context)
```

#### Input
* input `object`
  * offeringArn **required** `string`

#### Output
* output [DescribeOfferingResponse](#describeofferingresponse)

### PurchaseOffering



```js
amazonaws_mediaconnect.PurchaseOffering({
  "offeringArn": "",
  "reservationName": "",
  "start": ""
}, context)
```

#### Input
* input `object`
  * offeringArn **required** `string`
  * reservationName **required** `string`: The name that you want to use for the reservation.
  * start **required** `string`: The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.

#### Output
*Output schema unknown*

### ListReservations



```js
amazonaws_mediaconnect.ListReservations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListReservationsResponse](#listreservationsresponse)

### DescribeReservation



```js
amazonaws_mediaconnect.DescribeReservation({
  "reservationArn": ""
}, context)
```

#### Input
* input `object`
  * reservationArn **required** `string`

#### Output
* output [DescribeReservationResponse](#describereservationresponse)



## Definitions

### AddFlowOutputs420Exception


### AddFlowOutputsRequest
* AddFlowOutputsRequest `object`: A request to add outputs to the specified flow.
  * Outputs **required**
    * items [AddOutputRequest](#addoutputrequest)

### AddFlowOutputsResponse
* AddFlowOutputsResponse `object`
  * FlowArn
  * Outputs
    * items [Output](#output)

### AddFlowSourcesRequest
* AddFlowSourcesRequest `object`: A request to add sources to the flow.
  * Sources **required**
    * items [SetSourceRequest](#setsourcerequest)

### AddFlowSourcesResponse
* AddFlowSourcesResponse `object`
  * FlowArn
  * Sources
    * items [Source](#source)

### AddFlowVpcInterfacesRequest
* AddFlowVpcInterfacesRequest `object`: A request to add VPC interfaces to the flow.
  * VpcInterfaces **required**
    * items [VpcInterfaceRequest](#vpcinterfacerequest)

### AddFlowVpcInterfacesResponse
* AddFlowVpcInterfacesResponse `object`
  * FlowArn
  * VpcInterfaces
    * items [VpcInterface](#vpcinterface)

### AddOutputRequest
* AddOutputRequest `object`: The output that you want to add to this flow.
  * CidrAllowList
    * items [__string](#__string)
  * Description
  * Destination
  * Encryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * MaxLatency
  * Name
  * Port
  * Protocol **required**
  * RemoteId
  * SmoothingLatency
  * StreamId
  * VpcInterfaceAttachment
    * VpcInterfaceName

### Algorithm
* Algorithm `string` (values: aes128, aes192, aes256)

### BadRequestException


### CreateFlow420Exception


### CreateFlowRequest
* CreateFlowRequest `object`: Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
  * AvailabilityZone
  * Entitlements
    * items [GrantEntitlementRequest](#grantentitlementrequest)
  * Name **required**
  * Outputs
    * items [AddOutputRequest](#addoutputrequest)
  * Source
    * Decryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * Description
    * EntitlementArn
    * IngestPort
    * MaxBitrate
    * MaxLatency
    * Name
    * Protocol
    * StreamId
    * VpcInterfaceName
    * WhitelistCidr
  * SourceFailoverConfig
    * RecoveryWindow
    * State
  * Sources
    * items [SetSourceRequest](#setsourcerequest)
  * VpcInterfaces
    * items [VpcInterfaceRequest](#vpcinterfacerequest)

### CreateFlowResponse
* CreateFlowResponse `object`
  * Flow
    * AvailabilityZone **required**
    * Description
    * EgressIp
    * Entitlements **required**
      * items [Entitlement](#entitlement)
    * FlowArn **required**
    * Name **required**
    * Outputs **required**
      * items [Output](#output)
    * Source **required**
      * DataTransferSubscriberFeePercent
      * Decryption
        * Algorithm **required**
        * ConstantInitializationVector
        * DeviceId
        * KeyType
        * Region
        * ResourceId
        * RoleArn **required**
        * SecretArn
        * Url
      * Description
      * EntitlementArn
      * IngestIp
      * IngestPort
      * Name **required**
      * SourceArn **required**
      * Transport
        * CidrAllowList
          * items [__string](#__string)
        * MaxBitrate
        * MaxLatency
        * Protocol **required**
        * RemoteId
        * SmoothingLatency
        * StreamId
      * VpcInterfaceName
      * WhitelistCidr
    * SourceFailoverConfig
      * RecoveryWindow
      * State
    * Sources
      * items [Source](#source)
    * Status **required**
    * VpcInterfaces
      * items [VpcInterface](#vpcinterface)

### DeleteFlowRequest
* DeleteFlowRequest `object`

### DeleteFlowResponse
* DeleteFlowResponse `object`
  * FlowArn
  * Status

### DescribeFlowRequest
* DescribeFlowRequest `object`

### DescribeFlowResponse
* DescribeFlowResponse `object`
  * Flow
    * AvailabilityZone **required**
    * Description
    * EgressIp
    * Entitlements **required**
      * items [Entitlement](#entitlement)
    * FlowArn **required**
    * Name **required**
    * Outputs **required**
      * items [Output](#output)
    * Source **required**
      * DataTransferSubscriberFeePercent
      * Decryption
        * Algorithm **required**
        * ConstantInitializationVector
        * DeviceId
        * KeyType
        * Region
        * ResourceId
        * RoleArn **required**
        * SecretArn
        * Url
      * Description
      * EntitlementArn
      * IngestIp
      * IngestPort
      * Name **required**
      * SourceArn **required**
      * Transport
        * CidrAllowList
          * items [__string](#__string)
        * MaxBitrate
        * MaxLatency
        * Protocol **required**
        * RemoteId
        * SmoothingLatency
        * StreamId
      * VpcInterfaceName
      * WhitelistCidr
    * SourceFailoverConfig
      * RecoveryWindow
      * State
    * Sources
      * items [Source](#source)
    * Status **required**
    * VpcInterfaces
      * items [VpcInterface](#vpcinterface)
  * Messages
    * Errors **required**
      * items [__string](#__string)

### DescribeOfferingRequest
* DescribeOfferingRequest `object`

### DescribeOfferingResponse
* DescribeOfferingResponse `object`
  * Offering
    * CurrencyCode **required**
    * Duration **required**
    * DurationUnits **required**
    * OfferingArn **required**
    * OfferingDescription **required**
    * PricePerUnit **required**
    * PriceUnits **required**
    * ResourceSpecification **required**
      * ReservedBitrate
      * ResourceType **required**

### DescribeReservationRequest
* DescribeReservationRequest `object`

### DescribeReservationResponse
* DescribeReservationResponse `object`
  * Reservation
    * CurrencyCode **required**
    * Duration **required**
    * DurationUnits **required**
    * End **required**
    * OfferingArn **required**
    * OfferingDescription **required**
    * PricePerUnit **required**
    * PriceUnits **required**
    * ReservationArn **required**
    * ReservationName **required**
    * ReservationState **required**
    * ResourceSpecification **required**
      * ReservedBitrate
      * ResourceType **required**
    * Start **required**

### DurationUnits
* DurationUnits `string` (values: MONTHS)

### Encryption
* Encryption `object`: Information about the encryption of the flow.
  * Algorithm **required**
  * ConstantInitializationVector
  * DeviceId
  * KeyType
  * Region
  * ResourceId
  * RoleArn **required**
  * SecretArn
  * Url

### Entitlement
* Entitlement `object`: The settings for a flow entitlement.
  * DataTransferSubscriberFeePercent
  * Description
  * Encryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * EntitlementArn **required**
  * EntitlementStatus
  * Name **required**
  * Subscribers **required**
    * items [__string](#__string)

### EntitlementStatus
* EntitlementStatus `string` (values: ENABLED, DISABLED)

### FailoverConfig
* FailoverConfig `object`: The settings for source failover
  * RecoveryWindow
  * State

### Flow
* Flow `object`: The settings for a flow, including its source, outputs, and entitlements.
  * AvailabilityZone **required**
  * Description
  * EgressIp
  * Entitlements **required**
    * items [Entitlement](#entitlement)
  * FlowArn **required**
  * Name **required**
  * Outputs **required**
    * items [Output](#output)
  * Source **required**
    * DataTransferSubscriberFeePercent
    * Decryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * Description
    * EntitlementArn
    * IngestIp
    * IngestPort
    * Name **required**
    * SourceArn **required**
    * Transport
      * CidrAllowList
        * items [__string](#__string)
      * MaxBitrate
      * MaxLatency
      * Protocol **required**
      * RemoteId
      * SmoothingLatency
      * StreamId
    * VpcInterfaceName
    * WhitelistCidr
  * SourceFailoverConfig
    * RecoveryWindow
    * State
  * Sources
    * items [Source](#source)
  * Status **required**
  * VpcInterfaces
    * items [VpcInterface](#vpcinterface)

### ForbiddenException


### GrantEntitlementRequest
* GrantEntitlementRequest `object`: The entitlements that you want to grant on a flow.
  * DataTransferSubscriberFeePercent
  * Description
  * Encryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * EntitlementStatus
  * Name
  * Subscribers **required**
    * items [__string](#__string)

### GrantFlowEntitlements420Exception


### GrantFlowEntitlementsRequest
* GrantFlowEntitlementsRequest `object`: A request to grant entitlements on a flow.
  * Entitlements **required**
    * items [GrantEntitlementRequest](#grantentitlementrequest)

### GrantFlowEntitlementsResponse
* GrantFlowEntitlementsResponse `object`
  * Entitlements
    * items [Entitlement](#entitlement)
  * FlowArn

### InternalServerErrorException


### KeyType
* KeyType `string` (values: speke, static-key)

### ListEntitlementsRequest
* ListEntitlementsRequest `object`

### ListEntitlementsResponse
* ListEntitlementsResponse `object`
  * Entitlements
    * items [ListedEntitlement](#listedentitlement)
  * NextToken

### ListFlowsRequest
* ListFlowsRequest `object`

### ListFlowsResponse
* ListFlowsResponse `object`
  * Flows
    * items [ListedFlow](#listedflow)
  * NextToken

### ListOfferingsRequest
* ListOfferingsRequest `object`

### ListOfferingsResponse
* ListOfferingsResponse `object`
  * NextToken
  * Offerings
    * items [Offering](#offering)

### ListReservationsRequest
* ListReservationsRequest `object`

### ListReservationsResponse
* ListReservationsResponse `object`
  * NextToken
  * Reservations
    * items [Reservation](#reservation)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### ListedEntitlement
* ListedEntitlement `object`: An entitlement that has been granted to you from other AWS accounts.
  * DataTransferSubscriberFeePercent
  * EntitlementArn **required**
  * EntitlementName **required**

### ListedFlow
* ListedFlow `object`: Provides a summary of a flow, including its ARN, Availability Zone, and source type.
  * AvailabilityZone **required**
  * Description **required**
  * FlowArn **required**
  * Name **required**
  * SourceType **required**
  * Status **required**

### MaxResults
* MaxResults `integer`

### Messages
* Messages `object`: Messages that provide the state of the flow.
  * Errors **required**
    * items [__string](#__string)

### NotFoundException


### Offering
* Offering `object`: A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
  * CurrencyCode **required**
  * Duration **required**
  * DurationUnits **required**
  * OfferingArn **required**
  * OfferingDescription **required**
  * PricePerUnit **required**
  * PriceUnits **required**
  * ResourceSpecification **required**
    * ReservedBitrate
    * ResourceType **required**

### Output
* Output `object`: The settings for an output.
  * DataTransferSubscriberFeePercent
  * Description
  * Destination
  * Encryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * EntitlementArn
  * MediaLiveInputArn
  * Name **required**
  * OutputArn **required**
  * Port
  * Transport
    * CidrAllowList
      * items [__string](#__string)
    * MaxBitrate
    * MaxLatency
    * Protocol **required**
    * RemoteId
    * SmoothingLatency
    * StreamId
  * VpcInterfaceAttachment
    * VpcInterfaceName

### PriceUnits
* PriceUnits `string` (values: HOURLY)

### Protocol
* Protocol `string` (values: zixi-push, rtp-fec, rtp, zixi-pull, rist)

### PurchaseOfferingRequest
* PurchaseOfferingRequest `object`: A request to purchase a offering.
  * ReservationName **required**
  * Start **required**

### PurchaseOfferingResponse
* PurchaseOfferingResponse `object`
  * Reservation
    * CurrencyCode **required**
    * Duration **required**
    * DurationUnits **required**
    * End **required**
    * OfferingArn **required**
    * OfferingDescription **required**
    * PricePerUnit **required**
    * PriceUnits **required**
    * ReservationArn **required**
    * ReservationName **required**
    * ReservationState **required**
    * ResourceSpecification **required**
      * ReservedBitrate
      * ResourceType **required**
    * Start **required**

### RemoveFlowOutputRequest
* RemoveFlowOutputRequest `object`

### RemoveFlowOutputResponse
* RemoveFlowOutputResponse `object`
  * FlowArn
  * OutputArn

### RemoveFlowSourceRequest
* RemoveFlowSourceRequest `object`

### RemoveFlowSourceResponse
* RemoveFlowSourceResponse `object`
  * FlowArn
  * SourceArn

### RemoveFlowVpcInterfaceRequest
* RemoveFlowVpcInterfaceRequest `object`

### RemoveFlowVpcInterfaceResponse
* RemoveFlowVpcInterfaceResponse `object`
  * FlowArn
  * NonDeletedNetworkInterfaceIds
    * items [__string](#__string)
  * VpcInterfaceName

### Reservation
* Reservation `object`: A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
  * CurrencyCode **required**
  * Duration **required**
  * DurationUnits **required**
  * End **required**
  * OfferingArn **required**
  * OfferingDescription **required**
  * PricePerUnit **required**
  * PriceUnits **required**
  * ReservationArn **required**
  * ReservationName **required**
  * ReservationState **required**
  * ResourceSpecification **required**
    * ReservedBitrate
    * ResourceType **required**
  * Start **required**

### ReservationState
* ReservationState `string` (values: ACTIVE, EXPIRED, PROCESSING, CANCELED)

### ResourceSpecification
* ResourceSpecification `object`: A definition of what is being billed for, including the type and amount.
  * ReservedBitrate
  * ResourceType **required**

### ResourceType
* ResourceType `string` (values: Mbps_Outbound_Bandwidth)

### RevokeFlowEntitlementRequest
* RevokeFlowEntitlementRequest `object`

### RevokeFlowEntitlementResponse
* RevokeFlowEntitlementResponse `object`
  * EntitlementArn
  * FlowArn

### ServiceUnavailableException


### SetSourceRequest
* SetSourceRequest `object`: The settings for the source of the flow.
  * Decryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * Description
  * EntitlementArn
  * IngestPort
  * MaxBitrate
  * MaxLatency
  * Name
  * Protocol
  * StreamId
  * VpcInterfaceName
  * WhitelistCidr

### Source
* Source `object`: The settings for the source of the flow.
  * DataTransferSubscriberFeePercent
  * Decryption
    * Algorithm **required**
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn **required**
    * SecretArn
    * Url
  * Description
  * EntitlementArn
  * IngestIp
  * IngestPort
  * Name **required**
  * SourceArn **required**
  * Transport
    * CidrAllowList
      * items [__string](#__string)
    * MaxBitrate
    * MaxLatency
    * Protocol **required**
    * RemoteId
    * SmoothingLatency
    * StreamId
  * VpcInterfaceName
  * WhitelistCidr

### SourceType
* SourceType `string` (values: OWNED, ENTITLED)

### StartFlowRequest
* StartFlowRequest `object`

### StartFlowResponse
* StartFlowResponse `object`
  * FlowArn
  * Status

### State
* State `string` (values: ENABLED, DISABLED)

### Status
* Status `string` (values: STANDBY, ACTIVE, UPDATING, DELETING, STARTING, STOPPING, ERROR)

### StopFlowRequest
* StopFlowRequest `object`

### StopFlowResponse
* StopFlowResponse `object`
  * FlowArn
  * Status

### TagResourceRequest
* TagResourceRequest `object`: The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
  * Tags **required**

### TooManyRequestsException


### Transport
* Transport `object`: Attributes related to the transport stream that are used in a source or output.
  * CidrAllowList
    * items [__string](#__string)
  * MaxBitrate
  * MaxLatency
  * Protocol **required**
  * RemoteId
  * SmoothingLatency
  * StreamId

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateEncryption
* UpdateEncryption `object`: Information about the encryption of the flow.
  * Algorithm
  * ConstantInitializationVector
  * DeviceId
  * KeyType
  * Region
  * ResourceId
  * RoleArn
  * SecretArn
  * Url

### UpdateFailoverConfig
* UpdateFailoverConfig `object`: The settings for source failover
  * RecoveryWindow
  * State

### UpdateFlowEntitlementRequest
* UpdateFlowEntitlementRequest `object`: The entitlement fields that you want to update.
  * Description
  * Encryption
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * EntitlementStatus
  * Subscribers
    * items [__string](#__string)

### UpdateFlowEntitlementResponse
* UpdateFlowEntitlementResponse `object`
  * Entitlement
    * DataTransferSubscriberFeePercent
    * Description
    * Encryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * EntitlementArn **required**
    * EntitlementStatus
    * Name **required**
    * Subscribers **required**
      * items [__string](#__string)
  * FlowArn

### UpdateFlowOutputRequest
* UpdateFlowOutputRequest `object`: The fields that you want to update in the output.
  * CidrAllowList
    * items [__string](#__string)
  * Description
  * Destination
  * Encryption
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * MaxLatency
  * Port
  * Protocol
  * RemoteId
  * SmoothingLatency
  * StreamId
  * VpcInterfaceAttachment
    * VpcInterfaceName

### UpdateFlowOutputResponse
* UpdateFlowOutputResponse `object`
  * FlowArn
  * Output
    * DataTransferSubscriberFeePercent
    * Description
    * Destination
    * Encryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * EntitlementArn
    * MediaLiveInputArn
    * Name **required**
    * OutputArn **required**
    * Port
    * Transport
      * CidrAllowList
        * items [__string](#__string)
      * MaxBitrate
      * MaxLatency
      * Protocol **required**
      * RemoteId
      * SmoothingLatency
      * StreamId
    * VpcInterfaceAttachment
      * VpcInterfaceName

### UpdateFlowRequest
* UpdateFlowRequest `object`: A request to update flow.
  * SourceFailoverConfig
    * RecoveryWindow
    * State

### UpdateFlowResponse
* UpdateFlowResponse `object`
  * Flow
    * AvailabilityZone **required**
    * Description
    * EgressIp
    * Entitlements **required**
      * items [Entitlement](#entitlement)
    * FlowArn **required**
    * Name **required**
    * Outputs **required**
      * items [Output](#output)
    * Source **required**
      * DataTransferSubscriberFeePercent
      * Decryption
        * Algorithm **required**
        * ConstantInitializationVector
        * DeviceId
        * KeyType
        * Region
        * ResourceId
        * RoleArn **required**
        * SecretArn
        * Url
      * Description
      * EntitlementArn
      * IngestIp
      * IngestPort
      * Name **required**
      * SourceArn **required**
      * Transport
        * CidrAllowList
          * items [__string](#__string)
        * MaxBitrate
        * MaxLatency
        * Protocol **required**
        * RemoteId
        * SmoothingLatency
        * StreamId
      * VpcInterfaceName
      * WhitelistCidr
    * SourceFailoverConfig
      * RecoveryWindow
      * State
    * Sources
      * items [Source](#source)
    * Status **required**
    * VpcInterfaces
      * items [VpcInterface](#vpcinterface)

### UpdateFlowSourceRequest
* UpdateFlowSourceRequest `object`: A request to update the source of a flow.
  * Decryption
    * Algorithm
    * ConstantInitializationVector
    * DeviceId
    * KeyType
    * Region
    * ResourceId
    * RoleArn
    * SecretArn
    * Url
  * Description
  * EntitlementArn
  * IngestPort
  * MaxBitrate
  * MaxLatency
  * Protocol
  * StreamId
  * VpcInterfaceName
  * WhitelistCidr

### UpdateFlowSourceResponse
* UpdateFlowSourceResponse `object`
  * FlowArn
  * Source
    * DataTransferSubscriberFeePercent
    * Decryption
      * Algorithm **required**
      * ConstantInitializationVector
      * DeviceId
      * KeyType
      * Region
      * ResourceId
      * RoleArn **required**
      * SecretArn
      * Url
    * Description
    * EntitlementArn
    * IngestIp
    * IngestPort
    * Name **required**
    * SourceArn **required**
    * Transport
      * CidrAllowList
        * items [__string](#__string)
      * MaxBitrate
      * MaxLatency
      * Protocol **required**
      * RemoteId
      * SmoothingLatency
      * StreamId
    * VpcInterfaceName
    * WhitelistCidr

### VpcInterface
* VpcInterface `object`: The settings for a VPC Source.
  * Name **required**
  * NetworkInterfaceIds **required**
    * items [__string](#__string)
  * RoleArn **required**
  * SecurityGroupIds **required**
    * items [__string](#__string)
  * SubnetId **required**

### VpcInterfaceAttachment
* VpcInterfaceAttachment `object`: The settings for attaching a VPC interface to an output.
  * VpcInterfaceName

### VpcInterfaceRequest
* VpcInterfaceRequest `object`: Desired VPC Interface for a Flow
  * Name **required**
  * RoleArn **required**
  * SecurityGroupIds **required**
    * items [__string](#__string)
  * SubnetId **required**

### __integer
* __integer `integer`

### __listOfAddOutputRequest
* __listOfAddOutputRequest `array`
  * items [AddOutputRequest](#addoutputrequest)

### __listOfEntitlement
* __listOfEntitlement `array`
  * items [Entitlement](#entitlement)

### __listOfGrantEntitlementRequest
* __listOfGrantEntitlementRequest `array`
  * items [GrantEntitlementRequest](#grantentitlementrequest)

### __listOfListedEntitlement
* __listOfListedEntitlement `array`
  * items [ListedEntitlement](#listedentitlement)

### __listOfListedFlow
* __listOfListedFlow `array`
  * items [ListedFlow](#listedflow)

### __listOfOffering
* __listOfOffering `array`
  * items [Offering](#offering)

### __listOfOutput
* __listOfOutput `array`
  * items [Output](#output)

### __listOfReservation
* __listOfReservation `array`
  * items [Reservation](#reservation)

### __listOfSetSourceRequest
* __listOfSetSourceRequest `array`
  * items [SetSourceRequest](#setsourcerequest)

### __listOfSource
* __listOfSource `array`
  * items [Source](#source)

### __listOfVpcInterface
* __listOfVpcInterface `array`
  * items [VpcInterface](#vpcinterface)

### __listOfVpcInterfaceRequest
* __listOfVpcInterfaceRequest `array`
  * items [VpcInterfaceRequest](#vpcinterfacerequest)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`


