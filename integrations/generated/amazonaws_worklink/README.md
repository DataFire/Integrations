# @datafire/amazonaws_worklink

Client library for Amazon WorkLink

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_worklink
```
```js
let amazonaws_worklink = require('@datafire/amazonaws_worklink').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.

## Actions

### UpdateFleetMetadata



```js
amazonaws_worklink.UpdateFleetMetadata({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * DisplayName `string`: The fleet name to display. The existing DisplayName is unset if null is passed.
  * FleetArn **required** `string`: The ARN of the fleet.
  * OptimizeForEndUserLocation `boolean`: The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.

#### Output
* output [UpdateFleetMetadataResponse](#updatefleetmetadataresponse)

### AssociateDomain



```js
amazonaws_worklink.AssociateDomain({
  "FleetArn": "",
  "DomainName": "",
  "AcmCertificateArn": ""
}, context)
```

#### Input
* input `object`
  * AcmCertificateArn **required** `string`: The ARN of an issued ACM certificate that is valid for the domain being associated.
  * DisplayName `string`: The name to display.
  * DomainName **required** `string`: The fully qualified domain name (FQDN).
  * FleetArn **required** `string`: The Amazon Resource Name (ARN) of the fleet.

#### Output
* output [AssociateDomainResponse](#associatedomainresponse)

### AssociateWebsiteAuthorizationProvider



```js
amazonaws_worklink.AssociateWebsiteAuthorizationProvider({
  "FleetArn": "",
  "AuthorizationProviderType": ""
}, context)
```

#### Input
* input `object`
  * AuthorizationProviderType **required** `string` (values: SAML): The authorization provider type.
  * DomainName `string`: The domain name of the authorization provider. This applies only to SAML-based authorization providers.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [AssociateWebsiteAuthorizationProviderResponse](#associatewebsiteauthorizationproviderresponse)

### AssociateWebsiteCertificateAuthority



```js
amazonaws_worklink.AssociateWebsiteCertificateAuthority({
  "FleetArn": "",
  "Certificate": ""
}, context)
```

#### Input
* input `object`
  * Certificate **required** `string`: The root certificate of the CA.
  * DisplayName `string`: The certificate name to display.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [AssociateWebsiteCertificateAuthorityResponse](#associatewebsitecertificateauthorityresponse)

### CreateFleet



```js
amazonaws_worklink.CreateFleet({
  "FleetName": ""
}, context)
```

#### Input
* input `object`
  * DisplayName `string`: The fleet name to display.
  * FleetName **required** `string`: A unique name for the fleet.
  * OptimizeForEndUserLocation `boolean`: The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
  * Tags `object`:  The tags to add to the resource. A tag is a key-value pair.

#### Output
* output [CreateFleetResponse](#createfleetresponse)

### DeleteFleet



```js
amazonaws_worklink.DeleteFleet({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DeleteFleetResponse](#deletefleetresponse)

### DescribeAuditStreamConfiguration



```js
amazonaws_worklink.DescribeAuditStreamConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeAuditStreamConfigurationResponse](#describeauditstreamconfigurationresponse)

### DescribeCompanyNetworkConfiguration



```js
amazonaws_worklink.DescribeCompanyNetworkConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeCompanyNetworkConfigurationResponse](#describecompanynetworkconfigurationresponse)

### DescribeDevice



```js
amazonaws_worklink.DescribeDevice({
  "FleetArn": "",
  "DeviceId": ""
}, context)
```

#### Input
* input `object`
  * DeviceId **required** `string`: A unique identifier for a registered user's device.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeDeviceResponse](#describedeviceresponse)

### DescribeDevicePolicyConfiguration



```js
amazonaws_worklink.DescribeDevicePolicyConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeDevicePolicyConfigurationResponse](#describedevicepolicyconfigurationresponse)

### DescribeDomain



```js
amazonaws_worklink.DescribeDomain({
  "FleetArn": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of the domain.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeDomainResponse](#describedomainresponse)

### DescribeFleetMetadata



```js
amazonaws_worklink.DescribeFleetMetadata({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The Amazon Resource Name (ARN) of the fleet.

#### Output
* output [DescribeFleetMetadataResponse](#describefleetmetadataresponse)

### DescribeIdentityProviderConfiguration



```js
amazonaws_worklink.DescribeIdentityProviderConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DescribeIdentityProviderConfigurationResponse](#describeidentityproviderconfigurationresponse)

### DescribeWebsiteCertificateAuthority



```js
amazonaws_worklink.DescribeWebsiteCertificateAuthority({
  "FleetArn": "",
  "WebsiteCaId": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.
  * WebsiteCaId **required** `string`: A unique identifier for the certificate authority.

#### Output
* output [DescribeWebsiteCertificateAuthorityResponse](#describewebsitecertificateauthorityresponse)

### DisassociateDomain



```js
amazonaws_worklink.DisassociateDomain({
  "FleetArn": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of the domain.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DisassociateDomainResponse](#disassociatedomainresponse)

### DisassociateWebsiteAuthorizationProvider



```js
amazonaws_worklink.DisassociateWebsiteAuthorizationProvider({
  "FleetArn": "",
  "AuthorizationProviderId": ""
}, context)
```

#### Input
* input `object`
  * AuthorizationProviderId **required** `string`: A unique identifier for the authorization provider.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [DisassociateWebsiteAuthorizationProviderResponse](#disassociatewebsiteauthorizationproviderresponse)

### DisassociateWebsiteCertificateAuthority



```js
amazonaws_worklink.DisassociateWebsiteCertificateAuthority({
  "FleetArn": "",
  "WebsiteCaId": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.
  * WebsiteCaId **required** `string`: A unique identifier for the CA.

#### Output
* output [DisassociateWebsiteCertificateAuthorityResponse](#disassociatewebsitecertificateauthorityresponse)

### ListDevices



```js
amazonaws_worklink.ListDevices({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FleetArn **required** `string`: The ARN of the fleet.
  * MaxResults `integer`: The maximum number of results to be included in the next page.
  * NextToken `string`: The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### ListDomains



```js
amazonaws_worklink.ListDomains({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FleetArn **required** `string`: The ARN of the fleet.
  * MaxResults `integer`: The maximum number of results to be included in the next page.
  * NextToken `string`: The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListDomainsResponse](#listdomainsresponse)

### ListFleets



```js
amazonaws_worklink.ListFleets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to be included in the next page.
  * NextToken `string`: The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListFleetsResponse](#listfleetsresponse)

### ListWebsiteAuthorizationProviders



```js
amazonaws_worklink.ListWebsiteAuthorizationProviders({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FleetArn **required** `string`: The ARN of the fleet.
  * MaxResults `integer`: The maximum number of results to be included in the next page.
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListWebsiteAuthorizationProvidersResponse](#listwebsiteauthorizationprovidersresponse)

### ListWebsiteCertificateAuthorities



```js
amazonaws_worklink.ListWebsiteCertificateAuthorities({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FleetArn **required** `string`: The ARN of the fleet.
  * MaxResults `integer`: The maximum number of results to be included in the next page.
  * NextToken `string`: The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListWebsiteCertificateAuthoritiesResponse](#listwebsitecertificateauthoritiesresponse)

### RestoreDomainAccess



```js
amazonaws_worklink.RestoreDomainAccess({
  "FleetArn": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of the domain.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [RestoreDomainAccessResponse](#restoredomainaccessresponse)

### RevokeDomainAccess



```js
amazonaws_worklink.RevokeDomainAccess({
  "FleetArn": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of the domain.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [RevokeDomainAccessResponse](#revokedomainaccessresponse)

### SignOutUser



```js
amazonaws_worklink.SignOutUser({
  "FleetArn": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.
  * Username **required** `string`: The name of the user.

#### Output
* output [SignOutUserResponse](#signoutuserresponse)

### ListTagsForResource



```js
amazonaws_worklink.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_worklink.TagResource({
  "ResourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `object`: The tags to add to the resource. A tag is a key-value pair.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_worklink.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAuditStreamConfiguration



```js
amazonaws_worklink.UpdateAuditStreamConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * AuditStreamArn `string`: The ARN of the Amazon Kinesis data stream that receives the audit events.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [UpdateAuditStreamConfigurationResponse](#updateauditstreamconfigurationresponse)

### UpdateCompanyNetworkConfiguration



```js
amazonaws_worklink.UpdateCompanyNetworkConfiguration({
  "FleetArn": "",
  "VpcId": "",
  "SubnetIds": [],
  "SecurityGroupIds": []
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.
  * SecurityGroupIds **required** `array`: The security groups associated with access to the provided subnets.
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds **required** `array`: The subnets used for X-ENI connections from Amazon WorkLink rendering containers.
    * items [SubnetId](#subnetid)
  * VpcId **required** `string`: The VPC with connectivity to associated websites.

#### Output
* output [UpdateCompanyNetworkConfigurationResponse](#updatecompanynetworkconfigurationresponse)

### UpdateDevicePolicyConfiguration



```js
amazonaws_worklink.UpdateDevicePolicyConfiguration({
  "FleetArn": ""
}, context)
```

#### Input
* input `object`
  * DeviceCaCertificate `string`: The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [UpdateDevicePolicyConfigurationResponse](#updatedevicepolicyconfigurationresponse)

### UpdateDomainMetadata



```js
amazonaws_worklink.UpdateDomainMetadata({
  "FleetArn": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DisplayName `string`: The name to display.
  * DomainName **required** `string`: The name of the domain.
  * FleetArn **required** `string`: The ARN of the fleet.

#### Output
* output [UpdateDomainMetadataResponse](#updatedomainmetadataresponse)

### UpdateIdentityProviderConfiguration



```js
amazonaws_worklink.UpdateIdentityProviderConfiguration({
  "FleetArn": "",
  "IdentityProviderType": ""
}, context)
```

#### Input
* input `object`
  * FleetArn **required** `string`: The ARN of the fleet.
  * IdentityProviderSamlMetadata `string`: The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
  * IdentityProviderType **required** `string` (values: SAML): The type of identity provider.

#### Output
* output [UpdateIdentityProviderConfigurationResponse](#updateidentityproviderconfigurationresponse)



## Definitions

### AcmCertificateArn
* AcmCertificateArn `string`

### AssociateDomainRequest
* AssociateDomainRequest `object`
  * AcmCertificateArn **required**
  * DisplayName
  * DomainName **required**
  * FleetArn **required**

### AssociateDomainResponse
* AssociateDomainResponse `object`

### AssociateWebsiteAuthorizationProviderRequest
* AssociateWebsiteAuthorizationProviderRequest `object`
  * AuthorizationProviderType **required**
  * DomainName
  * FleetArn **required**

### AssociateWebsiteAuthorizationProviderResponse
* AssociateWebsiteAuthorizationProviderResponse `object`
  * AuthorizationProviderId

### AssociateWebsiteCertificateAuthorityRequest
* AssociateWebsiteCertificateAuthorityRequest `object`
  * Certificate **required**
  * DisplayName
  * FleetArn **required**

### AssociateWebsiteCertificateAuthorityResponse
* AssociateWebsiteCertificateAuthorityResponse `object`
  * WebsiteCaId

### AuditStreamArn
* AuditStreamArn `string`

### AuthorizationProviderType
* AuthorizationProviderType `string` (values: SAML)

### Boolean
* Boolean `boolean`

### Certificate
* Certificate `string`

### CertificateChain
* CertificateChain `string`

### CompanyCode
* CompanyCode `string`

### CreateFleetRequest
* CreateFleetRequest `object`
  * DisplayName
  * FleetName **required**
  * OptimizeForEndUserLocation
  * Tags

### CreateFleetResponse
* CreateFleetResponse `object`
  * FleetArn

### DateTime
* DateTime `string`

### DeleteFleetRequest
* DeleteFleetRequest `object`
  * FleetArn **required**

### DeleteFleetResponse
* DeleteFleetResponse `object`

### DescribeAuditStreamConfigurationRequest
* DescribeAuditStreamConfigurationRequest `object`
  * FleetArn **required**

### DescribeAuditStreamConfigurationResponse
* DescribeAuditStreamConfigurationResponse `object`
  * AuditStreamArn

### DescribeCompanyNetworkConfigurationRequest
* DescribeCompanyNetworkConfigurationRequest `object`
  * FleetArn **required**

### DescribeCompanyNetworkConfigurationResponse
* DescribeCompanyNetworkConfigurationResponse `object`
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcId

### DescribeDevicePolicyConfigurationRequest
* DescribeDevicePolicyConfigurationRequest `object`
  * FleetArn **required**

### DescribeDevicePolicyConfigurationResponse
* DescribeDevicePolicyConfigurationResponse `object`
  * DeviceCaCertificate

### DescribeDeviceRequest
* DescribeDeviceRequest `object`
  * DeviceId **required**
  * FleetArn **required**

### DescribeDeviceResponse
* DescribeDeviceResponse `object`
  * FirstAccessedTime
  * LastAccessedTime
  * Manufacturer
  * Model
  * OperatingSystem
  * OperatingSystemVersion
  * PatchLevel
  * Status
  * Username

### DescribeDomainRequest
* DescribeDomainRequest `object`
  * DomainName **required**
  * FleetArn **required**

### DescribeDomainResponse
* DescribeDomainResponse `object`
  * AcmCertificateArn
  * CreatedTime
  * DisplayName
  * DomainName
  * DomainStatus

### DescribeFleetMetadataRequest
* DescribeFleetMetadataRequest `object`
  * FleetArn **required**

### DescribeFleetMetadataResponse
* DescribeFleetMetadataResponse `object`
  * CompanyCode
  * CreatedTime
  * DisplayName
  * FleetName
  * FleetStatus
  * LastUpdatedTime
  * OptimizeForEndUserLocation
  * Tags

### DescribeIdentityProviderConfigurationRequest
* DescribeIdentityProviderConfigurationRequest `object`
  * FleetArn **required**

### DescribeIdentityProviderConfigurationResponse
* DescribeIdentityProviderConfigurationResponse `object`
  * IdentityProviderSamlMetadata
  * IdentityProviderType
  * ServiceProviderSamlMetadata

### DescribeWebsiteCertificateAuthorityRequest
* DescribeWebsiteCertificateAuthorityRequest `object`
  * FleetArn **required**
  * WebsiteCaId **required**

### DescribeWebsiteCertificateAuthorityResponse
* DescribeWebsiteCertificateAuthorityResponse `object`
  * Certificate
  * CreatedTime
  * DisplayName

### DeviceManufacturer
* DeviceManufacturer `string`

### DeviceModel
* DeviceModel `string`

### DeviceOperatingSystemName
* DeviceOperatingSystemName `string`

### DeviceOperatingSystemVersion
* DeviceOperatingSystemVersion `string`

### DevicePatchLevel
* DevicePatchLevel `string`

### DeviceStatus
* DeviceStatus `string` (values: ACTIVE, SIGNED_OUT)

### DeviceSummary
* DeviceSummary `object`: The summary of devices.
  * DeviceId
  * DeviceStatus

### DeviceSummaryList
* DeviceSummaryList `array`
  * items [DeviceSummary](#devicesummary)

### DisassociateDomainRequest
* DisassociateDomainRequest `object`
  * DomainName **required**
  * FleetArn **required**

### DisassociateDomainResponse
* DisassociateDomainResponse `object`

### DisassociateWebsiteAuthorizationProviderRequest
* DisassociateWebsiteAuthorizationProviderRequest `object`
  * AuthorizationProviderId **required**
  * FleetArn **required**

### DisassociateWebsiteAuthorizationProviderResponse
* DisassociateWebsiteAuthorizationProviderResponse `object`

### DisassociateWebsiteCertificateAuthorityRequest
* DisassociateWebsiteCertificateAuthorityRequest `object`
  * FleetArn **required**
  * WebsiteCaId **required**

### DisassociateWebsiteCertificateAuthorityResponse
* DisassociateWebsiteCertificateAuthorityResponse `object`

### DisplayName
* DisplayName `string`

### DomainName
* DomainName `string`

### DomainStatus
* DomainStatus `string` (values: PENDING_VALIDATION, ASSOCIATING, ACTIVE, INACTIVE, DISASSOCIATING, DISASSOCIATED, FAILED_TO_ASSOCIATE, FAILED_TO_DISASSOCIATE)

### DomainSummary
* DomainSummary `object`: The summary of the domain.
  * CreatedTime **required**
  * DisplayName
  * DomainName **required**
  * DomainStatus **required**

### DomainSummaryList
* DomainSummaryList `array`
  * items [DomainSummary](#domainsummary)

### FleetArn
* FleetArn `string`

### FleetName
* FleetName `string`

### FleetStatus
* FleetStatus `string` (values: CREATING, ACTIVE, DELETING, DELETED, FAILED_TO_CREATE, FAILED_TO_DELETE)

### FleetSummary
* FleetSummary `object`: The summary of the fleet.
  * CompanyCode
  * CreatedTime
  * DisplayName
  * FleetArn
  * FleetName
  * FleetStatus
  * LastUpdatedTime
  * Tags

### FleetSummaryList
* FleetSummaryList `array`
  * items [FleetSummary](#fleetsummary)

### Id
* Id `string`

### IdentityProviderType
* IdentityProviderType `string` (values: SAML)

### InternalServerErrorException


### InvalidRequestException


### ListDevicesRequest
* ListDevicesRequest `object`
  * FleetArn **required**
  * MaxResults
  * NextToken

### ListDevicesResponse
* ListDevicesResponse `object`
  * Devices
    * items [DeviceSummary](#devicesummary)
  * NextToken

### ListDomainsRequest
* ListDomainsRequest `object`
  * FleetArn **required**
  * MaxResults
  * NextToken

### ListDomainsResponse
* ListDomainsResponse `object`
  * Domains
    * items [DomainSummary](#domainsummary)
  * NextToken

### ListFleetsRequest
* ListFleetsRequest `object`
  * MaxResults
  * NextToken

### ListFleetsResponse
* ListFleetsResponse `object`
  * FleetSummaryList
    * items [FleetSummary](#fleetsummary)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### ListWebsiteAuthorizationProvidersRequest
* ListWebsiteAuthorizationProvidersRequest `object`
  * FleetArn **required**
  * MaxResults
  * NextToken

### ListWebsiteAuthorizationProvidersResponse
* ListWebsiteAuthorizationProvidersResponse `object`
  * NextToken
  * WebsiteAuthorizationProviders
    * items [WebsiteAuthorizationProviderSummary](#websiteauthorizationprovidersummary)

### ListWebsiteCertificateAuthoritiesRequest
* ListWebsiteCertificateAuthoritiesRequest `object`
  * FleetArn **required**
  * MaxResults
  * NextToken

### ListWebsiteCertificateAuthoritiesResponse
* ListWebsiteCertificateAuthoritiesResponse `object`
  * NextToken
  * WebsiteCertificateAuthorities
    * items [WebsiteCaSummary](#websitecasummary)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### ResourceAlreadyExistsException


### ResourceNotFoundException


### RestoreDomainAccessRequest
* RestoreDomainAccessRequest `object`
  * DomainName **required**
  * FleetArn **required**

### RestoreDomainAccessResponse
* RestoreDomainAccessResponse `object`

### RevokeDomainAccessRequest
* RevokeDomainAccessRequest `object`
  * DomainName **required**
  * FleetArn **required**

### RevokeDomainAccessResponse
* RevokeDomainAccessResponse `object`

### SamlMetadata
* SamlMetadata `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SignOutUserRequest
* SignOutUserRequest `object`
  * FleetArn **required**
  * Username **required**

### SignOutUserResponse
* SignOutUserResponse `object`

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TooManyRequestsException


### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAuditStreamConfigurationRequest
* UpdateAuditStreamConfigurationRequest `object`
  * AuditStreamArn
  * FleetArn **required**

### UpdateAuditStreamConfigurationResponse
* UpdateAuditStreamConfigurationResponse `object`

### UpdateCompanyNetworkConfigurationRequest
* UpdateCompanyNetworkConfigurationRequest `object`
  * FleetArn **required**
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * VpcId **required**

### UpdateCompanyNetworkConfigurationResponse
* UpdateCompanyNetworkConfigurationResponse `object`

### UpdateDevicePolicyConfigurationRequest
* UpdateDevicePolicyConfigurationRequest `object`
  * DeviceCaCertificate
  * FleetArn **required**

### UpdateDevicePolicyConfigurationResponse
* UpdateDevicePolicyConfigurationResponse `object`

### UpdateDomainMetadataRequest
* UpdateDomainMetadataRequest `object`
  * DisplayName
  * DomainName **required**
  * FleetArn **required**

### UpdateDomainMetadataResponse
* UpdateDomainMetadataResponse `object`

### UpdateFleetMetadataRequest
* UpdateFleetMetadataRequest `object`
  * DisplayName
  * FleetArn **required**
  * OptimizeForEndUserLocation

### UpdateFleetMetadataResponse
* UpdateFleetMetadataResponse `object`

### UpdateIdentityProviderConfigurationRequest
* UpdateIdentityProviderConfigurationRequest `object`
  * FleetArn **required**
  * IdentityProviderSamlMetadata
  * IdentityProviderType **required**

### UpdateIdentityProviderConfigurationResponse
* UpdateIdentityProviderConfigurationResponse `object`

### Username
* Username `string`

### VpcId
* VpcId `string`

### WebsiteAuthorizationProviderSummary
* WebsiteAuthorizationProviderSummary `object`: The summary of the website authorization provider.
  * AuthorizationProviderId
  * AuthorizationProviderType **required**
  * CreatedTime
  * DomainName

### WebsiteAuthorizationProvidersSummaryList
* WebsiteAuthorizationProvidersSummaryList `array`
  * items [WebsiteAuthorizationProviderSummary](#websiteauthorizationprovidersummary)

### WebsiteCaSummary
* WebsiteCaSummary `object`: The summary of the certificate authority (CA).
  * CreatedTime
  * DisplayName
  * WebsiteCaId

### WebsiteCaSummaryList
* WebsiteCaSummaryList `array`
  * items [WebsiteCaSummary](#websitecasummary)


