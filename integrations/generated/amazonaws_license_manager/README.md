# @datafire/amazonaws_license_manager

Client library for AWS License Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_license_manager
```
```js
let amazonaws_license_manager = require('@datafire/amazonaws_license_manager').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname> AWS License Manager </fullname> <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple AWS accounts and on-premises servers.</p>

## Actions

### AcceptGrant



```js
amazonaws_license_manager.AcceptGrant({
  "GrantArn": null
}, context)
```

#### Input
* input `object`
  * GrantArn **required**

#### Output
* output [AcceptGrantResponse](#acceptgrantresponse)

### CheckInLicense



```js
amazonaws_license_manager.CheckInLicense({
  "LicenseConsumptionToken": null
}, context)
```

#### Input
* input `object`
  * Beneficiary
  * LicenseConsumptionToken **required**

#### Output
* output [CheckInLicenseResponse](#checkinlicenseresponse)

### CheckoutBorrowLicense



```js
amazonaws_license_manager.CheckoutBorrowLicense({
  "LicenseArn": null,
  "Entitlements": null,
  "DigitalSignatureMethod": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * CheckoutMetadata
    * items [Metadata](#metadata)
  * ClientToken **required**
  * DigitalSignatureMethod **required**
  * Entitlements **required**
    * items [EntitlementData](#entitlementdata)
  * LicenseArn **required**
  * NodeId

#### Output
* output [CheckoutBorrowLicenseResponse](#checkoutborrowlicenseresponse)

### CheckoutLicense



```js
amazonaws_license_manager.CheckoutLicense({
  "ProductSKU": null,
  "CheckoutType": null,
  "KeyFingerprint": null,
  "Entitlements": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * Beneficiary
  * CheckoutType **required**
  * ClientToken **required**
  * Entitlements **required**
    * items [EntitlementData](#entitlementdata)
  * KeyFingerprint **required**
  * NodeId
  * ProductSKU **required**

#### Output
* output [CheckoutLicenseResponse](#checkoutlicenseresponse)

### CreateGrant



```js
amazonaws_license_manager.CreateGrant({
  "ClientToken": null,
  "GrantName": null,
  "LicenseArn": null,
  "Principals": null,
  "HomeRegion": null,
  "AllowedOperations": null
}, context)
```

#### Input
* input `object`
  * AllowedOperations **required**
    * items [AllowedOperation](#allowedoperation)
  * ClientToken **required**
  * GrantName **required**
  * HomeRegion **required**
  * LicenseArn **required**
  * Principals **required**
    * items [Arn](#arn)

#### Output
* output [CreateGrantResponse](#creategrantresponse)

### CreateGrantVersion



```js
amazonaws_license_manager.CreateGrantVersion({
  "ClientToken": null,
  "GrantArn": null
}, context)
```

#### Input
* input `object`
  * AllowedOperations
    * items [AllowedOperation](#allowedoperation)
  * ClientToken **required**
  * GrantArn **required**
  * GrantName
  * SourceVersion
  * Status

#### Output
* output [CreateGrantVersionResponse](#creategrantversionresponse)

### CreateLicense



```js
amazonaws_license_manager.CreateLicense({
  "LicenseName": null,
  "ProductName": null,
  "ProductSKU": null,
  "Issuer": null,
  "HomeRegion": null,
  "Validity": null,
  "Entitlements": null,
  "Beneficiary": null,
  "ConsumptionConfiguration": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * Beneficiary **required**
  * ClientToken **required**
  * ConsumptionConfiguration **required**
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * Entitlements **required**
    * items [Entitlement](#entitlement)
  * HomeRegion **required**
  * Issuer **required**
    * Name **required**
    * SignKey
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName **required**
  * ProductName **required**
  * ProductSKU **required**
  * Validity **required**
    * Begin **required**
    * End

#### Output
* output [CreateLicenseResponse](#createlicenseresponse)

### CreateLicenseConfiguration



```js
amazonaws_license_manager.CreateLicenseConfiguration({
  "Name": null,
  "LicenseCountingType": null
}, context)
```

#### Input
* input `object`
  * Description
  * DisassociateWhenNotFound
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseCountingType **required**
  * LicenseRules
    * items [String](#string)
  * Name **required**
  * ProductInformationList
    * items [ProductInformation](#productinformation)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateLicenseConfigurationResponse](#createlicenseconfigurationresponse)

### CreateLicenseVersion



```js
amazonaws_license_manager.CreateLicenseVersion({
  "LicenseArn": null,
  "LicenseName": null,
  "ProductName": null,
  "Issuer": null,
  "HomeRegion": null,
  "Validity": null,
  "Entitlements": null,
  "ConsumptionConfiguration": null,
  "Status": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * ConsumptionConfiguration **required**
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * Entitlements **required**
    * items [Entitlement](#entitlement)
  * HomeRegion **required**
  * Issuer **required**
    * Name **required**
    * SignKey
  * LicenseArn **required**
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName **required**
  * ProductName **required**
  * SourceVersion
  * Status **required**
  * Validity **required**
    * Begin **required**
    * End

#### Output
* output [CreateLicenseVersionResponse](#createlicenseversionresponse)

### CreateToken



```js
amazonaws_license_manager.CreateToken({
  "LicenseArn": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * ExpirationInDays
  * LicenseArn **required**
  * RoleArns
    * items [Arn](#arn)
  * TokenProperties
    * items [String](#string)

#### Output
* output [CreateTokenResponse](#createtokenresponse)

### DeleteGrant



```js
amazonaws_license_manager.DeleteGrant({
  "GrantArn": null,
  "Version": null
}, context)
```

#### Input
* input `object`
  * GrantArn **required**
  * Version **required**

#### Output
* output [DeleteGrantResponse](#deletegrantresponse)

### DeleteLicense



```js
amazonaws_license_manager.DeleteLicense({
  "LicenseArn": null,
  "SourceVersion": null
}, context)
```

#### Input
* input `object`
  * LicenseArn **required**
  * SourceVersion **required**

#### Output
* output [DeleteLicenseResponse](#deletelicenseresponse)

### DeleteLicenseConfiguration



```js
amazonaws_license_manager.DeleteLicenseConfiguration({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * LicenseConfigurationArn **required**

#### Output
* output [DeleteLicenseConfigurationResponse](#deletelicenseconfigurationresponse)

### DeleteToken



```js
amazonaws_license_manager.DeleteToken({
  "TokenId": null
}, context)
```

#### Input
* input `object`
  * TokenId **required**

#### Output
* output [DeleteTokenResponse](#deletetokenresponse)

### ExtendLicenseConsumption



```js
amazonaws_license_manager.ExtendLicenseConsumption({
  "LicenseConsumptionToken": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * LicenseConsumptionToken **required**

#### Output
* output [ExtendLicenseConsumptionResponse](#extendlicenseconsumptionresponse)

### GetAccessToken



```js
amazonaws_license_manager.GetAccessToken({
  "Token": null
}, context)
```

#### Input
* input `object`
  * Token **required**
  * TokenProperties
    * items [String](#string)

#### Output
* output [GetAccessTokenResponse](#getaccesstokenresponse)

### GetGrant



```js
amazonaws_license_manager.GetGrant({
  "GrantArn": null
}, context)
```

#### Input
* input `object`
  * GrantArn **required**
  * Version

#### Output
* output [GetGrantResponse](#getgrantresponse)

### GetLicense



```js
amazonaws_license_manager.GetLicense({
  "LicenseArn": null
}, context)
```

#### Input
* input `object`
  * LicenseArn **required**
  * Version

#### Output
* output [GetLicenseResponse](#getlicenseresponse)

### GetLicenseConfiguration



```js
amazonaws_license_manager.GetLicenseConfiguration({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * LicenseConfigurationArn **required**

#### Output
* output [GetLicenseConfigurationResponse](#getlicenseconfigurationresponse)

### GetLicenseUsage



```js
amazonaws_license_manager.GetLicenseUsage({
  "LicenseArn": null
}, context)
```

#### Input
* input `object`
  * LicenseArn **required**

#### Output
* output [GetLicenseUsageResponse](#getlicenseusageresponse)

### GetServiceSettings



```js
amazonaws_license_manager.GetServiceSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [GetServiceSettingsResponse](#getservicesettingsresponse)

### ListAssociationsForLicenseConfiguration



```js
amazonaws_license_manager.ListAssociationsForLicenseConfiguration({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListAssociationsForLicenseConfigurationResponse](#listassociationsforlicenseconfigurationresponse)

### ListDistributedGrants



```js
amazonaws_license_manager.ListDistributedGrants({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * GrantArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

#### Output
* output [ListDistributedGrantsResponse](#listdistributedgrantsresponse)

### ListFailuresForLicenseConfigurationOperations



```js
amazonaws_license_manager.ListFailuresForLicenseConfigurationOperations({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListFailuresForLicenseConfigurationOperationsResponse](#listfailuresforlicenseconfigurationoperationsresponse)

### ListLicenseConfigurations



```js
amazonaws_license_manager.ListLicenseConfigurations({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * LicenseConfigurationArns
    * items [String](#string)
  * MaxResults
  * NextToken

#### Output
* output [ListLicenseConfigurationsResponse](#listlicenseconfigurationsresponse)

### ListLicenseSpecificationsForResource



```js
amazonaws_license_manager.ListLicenseSpecificationsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListLicenseSpecificationsForResourceResponse](#listlicensespecificationsforresourceresponse)

### ListLicenseVersions



```js
amazonaws_license_manager.ListLicenseVersions({
  "LicenseArn": null
}, context)
```

#### Input
* input `object`
  * LicenseArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListLicenseVersionsResponse](#listlicenseversionsresponse)

### ListLicenses



```js
amazonaws_license_manager.ListLicenses({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * LicenseArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

#### Output
* output [ListLicensesResponse](#listlicensesresponse)

### ListReceivedGrants



```js
amazonaws_license_manager.ListReceivedGrants({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * GrantArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

#### Output
* output [ListReceivedGrantsResponse](#listreceivedgrantsresponse)

### ListReceivedLicenses



```js
amazonaws_license_manager.ListReceivedLicenses({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * LicenseArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

#### Output
* output [ListReceivedLicensesResponse](#listreceivedlicensesresponse)

### ListResourceInventory



```js
amazonaws_license_manager.ListResourceInventory({}, context)
```

#### Input
* input `object`
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListResourceInventoryResponse](#listresourceinventoryresponse)

### ListTagsForResource



```js
amazonaws_license_manager.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTokens



```js
amazonaws_license_manager.ListTokens({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * TokenIds
    * items [String](#string)

#### Output
* output [ListTokensResponse](#listtokensresponse)

### ListUsageForLicenseConfiguration



```js
amazonaws_license_manager.ListUsageForLicenseConfiguration({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListUsageForLicenseConfigurationResponse](#listusageforlicenseconfigurationresponse)

### RejectGrant



```js
amazonaws_license_manager.RejectGrant({
  "GrantArn": null
}, context)
```

#### Input
* input `object`
  * GrantArn **required**

#### Output
* output [RejectGrantResponse](#rejectgrantresponse)

### TagResource



```js
amazonaws_license_manager.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_license_manager.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateLicenseConfiguration



```js
amazonaws_license_manager.UpdateLicenseConfiguration({
  "LicenseConfigurationArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * DisassociateWhenNotFound
  * LicenseConfigurationArn **required**
  * LicenseConfigurationStatus
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseRules
    * items [String](#string)
  * Name
  * ProductInformationList
    * items [ProductInformation](#productinformation)

#### Output
* output [UpdateLicenseConfigurationResponse](#updatelicenseconfigurationresponse)

### UpdateLicenseSpecificationsForResource



```js
amazonaws_license_manager.UpdateLicenseSpecificationsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * AddLicenseSpecifications
    * items [LicenseSpecification](#licensespecification)
  * RemoveLicenseSpecifications
    * items [LicenseSpecification](#licensespecification)
  * ResourceArn **required**

#### Output
* output [UpdateLicenseSpecificationsForResourceResponse](#updatelicensespecificationsforresourceresponse)

### UpdateServiceSettings



```js
amazonaws_license_manager.UpdateServiceSettings({}, context)
```

#### Input
* input `object`
  * EnableCrossAccountsDiscovery
  * OrganizationConfiguration
    * EnableIntegration **required**
  * S3BucketArn
  * SnsTopicArn

#### Output
* output [UpdateServiceSettingsResponse](#updateservicesettingsresponse)



## Definitions

### AcceptGrantRequest
* AcceptGrantRequest `object`
  * GrantArn **required**

### AcceptGrantResponse
* AcceptGrantResponse `object`
  * GrantArn
  * Status
  * Version

### AccessDeniedException


### AllowedOperation
* AllowedOperation `string` (values: CreateGrant, CheckoutLicense, CheckoutBorrowLicense, CheckInLicense, ExtendConsumptionLicense, ListPurchasedLicenses, CreateToken)

### AllowedOperationList
* AllowedOperationList `array`
  * items [AllowedOperation](#allowedoperation)

### Arn
* Arn `string`

### ArnList
* ArnList `array`
  * items [Arn](#arn)

### AuthorizationException


### AutomatedDiscoveryInformation
* AutomatedDiscoveryInformation `object`: Describes automated discovery.
  * LastRunTime

### Boolean
* Boolean `boolean`

### BorrowConfiguration
* BorrowConfiguration `object`: Details about a borrow configuration.
  * AllowEarlyCheckIn **required**
  * MaxTimeToLiveInMinutes **required**

### BoxBoolean
* BoxBoolean `boolean`

### BoxInteger
* BoxInteger `integer`

### BoxLong
* BoxLong `integer`

### CheckInLicenseRequest
* CheckInLicenseRequest `object`
  * Beneficiary
  * LicenseConsumptionToken **required**

### CheckInLicenseResponse
* CheckInLicenseResponse `object`

### CheckoutBorrowLicenseRequest
* CheckoutBorrowLicenseRequest `object`
  * CheckoutMetadata
    * items [Metadata](#metadata)
  * ClientToken **required**
  * DigitalSignatureMethod **required**
  * Entitlements **required**
    * items [EntitlementData](#entitlementdata)
  * LicenseArn **required**
  * NodeId

### CheckoutBorrowLicenseResponse
* CheckoutBorrowLicenseResponse `object`
  * CheckoutMetadata
    * items [Metadata](#metadata)
  * EntitlementsAllowed
    * items [EntitlementData](#entitlementdata)
  * Expiration
  * IssuedAt
  * LicenseArn
  * LicenseConsumptionToken
  * NodeId
  * SignedToken

### CheckoutLicenseRequest
* CheckoutLicenseRequest `object`
  * Beneficiary
  * CheckoutType **required**
  * ClientToken **required**
  * Entitlements **required**
    * items [EntitlementData](#entitlementdata)
  * KeyFingerprint **required**
  * NodeId
  * ProductSKU **required**

### CheckoutLicenseResponse
* CheckoutLicenseResponse `object`
  * CheckoutType
  * EntitlementsAllowed
    * items [EntitlementData](#entitlementdata)
  * Expiration
  * IssuedAt
  * LicenseConsumptionToken
  * NodeId
  * SignedToken

### CheckoutType
* CheckoutType `string` (values: PROVISIONAL)

### ClientToken
* ClientToken `string`

### ConflictException


### ConsumedLicenseSummary
* ConsumedLicenseSummary `object`: Details about license consumption.
  * ConsumedLicenses
  * ResourceType

### ConsumedLicenseSummaryList
* ConsumedLicenseSummaryList `array`
  * items [ConsumedLicenseSummary](#consumedlicensesummary)

### ConsumptionConfiguration
* ConsumptionConfiguration `object`: Details about a consumption configuration.
  * BorrowConfiguration
    * AllowEarlyCheckIn **required**
    * MaxTimeToLiveInMinutes **required**
  * ProvisionalConfiguration
    * MaxTimeToLiveInMinutes **required**
  * RenewType

### CreateGrantRequest
* CreateGrantRequest `object`
  * AllowedOperations **required**
    * items [AllowedOperation](#allowedoperation)
  * ClientToken **required**
  * GrantName **required**
  * HomeRegion **required**
  * LicenseArn **required**
  * Principals **required**
    * items [Arn](#arn)

### CreateGrantResponse
* CreateGrantResponse `object`
  * GrantArn
  * Status
  * Version

### CreateGrantVersionRequest
* CreateGrantVersionRequest `object`
  * AllowedOperations
    * items [AllowedOperation](#allowedoperation)
  * ClientToken **required**
  * GrantArn **required**
  * GrantName
  * SourceVersion
  * Status

### CreateGrantVersionResponse
* CreateGrantVersionResponse `object`
  * GrantArn
  * Status
  * Version

### CreateLicenseConfigurationRequest
* CreateLicenseConfigurationRequest `object`
  * Description
  * DisassociateWhenNotFound
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseCountingType **required**
  * LicenseRules
    * items [String](#string)
  * Name **required**
  * ProductInformationList
    * items [ProductInformation](#productinformation)
  * Tags
    * items [Tag](#tag)

### CreateLicenseConfigurationResponse
* CreateLicenseConfigurationResponse `object`
  * LicenseConfigurationArn

### CreateLicenseRequest
* CreateLicenseRequest `object`
  * Beneficiary **required**
  * ClientToken **required**
  * ConsumptionConfiguration **required**
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * Entitlements **required**
    * items [Entitlement](#entitlement)
  * HomeRegion **required**
  * Issuer **required**
    * Name **required**
    * SignKey
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName **required**
  * ProductName **required**
  * ProductSKU **required**
  * Validity **required**
    * Begin **required**
    * End

### CreateLicenseResponse
* CreateLicenseResponse `object`
  * LicenseArn
  * Status
  * Version

### CreateLicenseVersionRequest
* CreateLicenseVersionRequest `object`
  * ClientToken **required**
  * ConsumptionConfiguration **required**
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * Entitlements **required**
    * items [Entitlement](#entitlement)
  * HomeRegion **required**
  * Issuer **required**
    * Name **required**
    * SignKey
  * LicenseArn **required**
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName **required**
  * ProductName **required**
  * SourceVersion
  * Status **required**
  * Validity **required**
    * Begin **required**
    * End

### CreateLicenseVersionResponse
* CreateLicenseVersionResponse `object`
  * LicenseArn
  * Status
  * Version

### CreateTokenRequest
* CreateTokenRequest `object`
  * ClientToken **required**
  * ExpirationInDays
  * LicenseArn **required**
  * RoleArns
    * items [Arn](#arn)
  * TokenProperties
    * items [String](#string)

### CreateTokenResponse
* CreateTokenResponse `object`
  * Token
  * TokenId
  * TokenType

### DateTime
* DateTime `string`

### DatetimeRange
* DatetimeRange `object`: Describes a time range, in ISO8601-UTC format.
  * Begin **required**
  * End

### DeleteGrantRequest
* DeleteGrantRequest `object`
  * GrantArn **required**
  * Version **required**

### DeleteGrantResponse
* DeleteGrantResponse `object`
  * GrantArn
  * Status
  * Version

### DeleteLicenseConfigurationRequest
* DeleteLicenseConfigurationRequest `object`
  * LicenseConfigurationArn **required**

### DeleteLicenseConfigurationResponse
* DeleteLicenseConfigurationResponse `object`

### DeleteLicenseRequest
* DeleteLicenseRequest `object`
  * LicenseArn **required**
  * SourceVersion **required**

### DeleteLicenseResponse
* DeleteLicenseResponse `object`
  * DeletionDate
  * Status

### DeleteTokenRequest
* DeleteTokenRequest `object`
  * TokenId **required**

### DeleteTokenResponse
* DeleteTokenResponse `object`

### DigitalSignatureMethod
* DigitalSignatureMethod `string` (values: JWT_PS384)

### Entitlement
* Entitlement `object`: Describes a resource entitled for use with a license.
  * AllowCheckIn
  * MaxCount
  * Name **required**
  * Overage
  * Unit **required**
  * Value

### EntitlementData
* EntitlementData `object`: Data associated with an entitlement resource.
  * Name **required**
  * Unit **required**
  * Value

### EntitlementDataList
* EntitlementDataList `array`
  * items [EntitlementData](#entitlementdata)

### EntitlementDataUnit
* EntitlementDataUnit `string` (values: Count, None, Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second)

### EntitlementList
* EntitlementList `array`
  * items [Entitlement](#entitlement)

### EntitlementNotAllowedException


### EntitlementUnit
* EntitlementUnit `string` (values: Count, None, Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second)

### EntitlementUsage
* EntitlementUsage `object`: Usage associated with an entitlement resource.
  * ConsumedValue **required**
  * MaxCount
  * Name **required**
  * Unit **required**

### EntitlementUsageList
* EntitlementUsageList `array`
  * items [EntitlementUsage](#entitlementusage)

### ExtendLicenseConsumptionRequest
* ExtendLicenseConsumptionRequest `object`
  * DryRun
  * LicenseConsumptionToken **required**

### ExtendLicenseConsumptionResponse
* ExtendLicenseConsumptionResponse `object`
  * Expiration
  * LicenseConsumptionToken

### FailedDependencyException


### Filter
* Filter `object`: A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
  * Name
  * Values
    * items [FilterValue](#filtervalue)

### FilterLimitExceededException


### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterName
* FilterName `string`

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### Filters
* Filters `array`
  * items [Filter](#filter)

### GetAccessTokenRequest
* GetAccessTokenRequest `object`
  * Token **required**
  * TokenProperties
    * items [String](#string)

### GetAccessTokenResponse
* GetAccessTokenResponse `object`
  * AccessToken

### GetGrantRequest
* GetGrantRequest `object`
  * GrantArn **required**
  * Version

### GetGrantResponse
* GetGrantResponse `object`
  * Grant
    * GrantArn **required**
    * GrantName **required**
    * GrantStatus **required**
    * GrantedOperations **required**
      * items [AllowedOperation](#allowedoperation)
    * GranteePrincipalArn **required**
    * HomeRegion **required**
    * LicenseArn **required**
    * ParentArn **required**
    * StatusReason
    * Version **required**

### GetLicenseConfigurationRequest
* GetLicenseConfigurationRequest `object`
  * LicenseConfigurationArn **required**

### GetLicenseConfigurationResponse
* GetLicenseConfigurationResponse `object`
  * AutomatedDiscoveryInformation
    * LastRunTime
  * ConsumedLicenseSummaryList
    * items [ConsumedLicenseSummary](#consumedlicensesummary)
  * ConsumedLicenses
  * Description
  * DisassociateWhenNotFound
  * LicenseConfigurationArn
  * LicenseConfigurationId
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseCountingType
  * LicenseRules
    * items [String](#string)
  * ManagedResourceSummaryList
    * items [ManagedResourceSummary](#managedresourcesummary)
  * Name
  * OwnerAccountId
  * ProductInformationList
    * items [ProductInformation](#productinformation)
  * Status
  * Tags
    * items [Tag](#tag)

### GetLicenseRequest
* GetLicenseRequest `object`
  * LicenseArn **required**
  * Version

### GetLicenseResponse
* GetLicenseResponse `object`
  * License
    * Beneficiary
    * ConsumptionConfiguration
      * BorrowConfiguration
        * AllowEarlyCheckIn **required**
        * MaxTimeToLiveInMinutes **required**
      * ProvisionalConfiguration
        * MaxTimeToLiveInMinutes **required**
      * RenewType
    * CreateTime
    * Entitlements
      * items [Entitlement](#entitlement)
    * HomeRegion
    * Issuer
      * KeyFingerprint
      * Name
      * SignKey
    * LicenseArn
    * LicenseMetadata
      * items [Metadata](#metadata)
    * LicenseName
    * ProductName
    * ProductSKU
    * Status
    * Validity
      * Begin **required**
      * End
    * Version

### GetLicenseUsageRequest
* GetLicenseUsageRequest `object`
  * LicenseArn **required**

### GetLicenseUsageResponse
* GetLicenseUsageResponse `object`
  * LicenseUsage
    * EntitlementUsages
      * items [EntitlementUsage](#entitlementusage)

### GetServiceSettingsRequest
* GetServiceSettingsRequest `object`

### GetServiceSettingsResponse
* GetServiceSettingsResponse `object`
  * EnableCrossAccountsDiscovery
  * LicenseManagerResourceShareArn
  * OrganizationConfiguration
    * EnableIntegration **required**
  * S3BucketArn
  * SnsTopicArn

### Grant
* Grant `object`: Describes a grant.
  * GrantArn **required**
  * GrantName **required**
  * GrantStatus **required**
  * GrantedOperations **required**
    * items [AllowedOperation](#allowedoperation)
  * GranteePrincipalArn **required**
  * HomeRegion **required**
  * LicenseArn **required**
  * ParentArn **required**
  * StatusReason
  * Version **required**

### GrantList
* GrantList `array`
  * items [Grant](#grant)

### GrantStatus
* GrantStatus `string` (values: PENDING_WORKFLOW, PENDING_ACCEPT, REJECTED, ACTIVE, FAILED_WORKFLOW, DELETED, PENDING_DELETE, DISABLED)

### GrantedLicense
* GrantedLicense `object`: Describes a license that is granted to a grantee.
  * Beneficiary
  * ConsumptionConfiguration
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * CreateTime
  * Entitlements
    * items [Entitlement](#entitlement)
  * HomeRegion
  * Issuer
    * KeyFingerprint
    * Name
    * SignKey
  * LicenseArn
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName
  * ProductName
  * ProductSKU
  * ReceivedMetadata
    * AllowedOperations
      * items [AllowedOperation](#allowedoperation)
    * ReceivedStatus
  * Status
  * Validity
    * Begin **required**
    * End
  * Version

### GrantedLicenseList
* GrantedLicenseList `array`
  * items [GrantedLicense](#grantedlicense)

### ISO8601DateTime
* ISO8601DateTime `string`

### IdempotencyToken
* IdempotencyToken `string`

### Integer
* Integer `integer`

### InvalidParameterValueException


### InvalidResourceStateException


### InventoryFilter
* InventoryFilter `object`: An inventory filter.
  * Condition **required**
  * Name **required**
  * Value

### InventoryFilterCondition
* InventoryFilterCondition `string` (values: EQUALS, NOT_EQUALS, BEGINS_WITH, CONTAINS)

### InventoryFilterList
* InventoryFilterList `array`
  * items [InventoryFilter](#inventoryfilter)

### Issuer
* Issuer `object`: Details about the issuer of a license.
  * Name **required**
  * SignKey

### IssuerDetails
* IssuerDetails `object`: Details associated with the issuer of a license.
  * KeyFingerprint
  * Name
  * SignKey

### License
* License `object`: Software license that is managed in AWS License Manager.
  * Beneficiary
  * ConsumptionConfiguration
    * BorrowConfiguration
      * AllowEarlyCheckIn **required**
      * MaxTimeToLiveInMinutes **required**
    * ProvisionalConfiguration
      * MaxTimeToLiveInMinutes **required**
    * RenewType
  * CreateTime
  * Entitlements
    * items [Entitlement](#entitlement)
  * HomeRegion
  * Issuer
    * KeyFingerprint
    * Name
    * SignKey
  * LicenseArn
  * LicenseMetadata
    * items [Metadata](#metadata)
  * LicenseName
  * ProductName
  * ProductSKU
  * Status
  * Validity
    * Begin **required**
    * End
  * Version

### LicenseConfiguration
* LicenseConfiguration `object`: A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.
  * AutomatedDiscoveryInformation
    * LastRunTime
  * ConsumedLicenseSummaryList
    * items [ConsumedLicenseSummary](#consumedlicensesummary)
  * ConsumedLicenses
  * Description
  * DisassociateWhenNotFound
  * LicenseConfigurationArn
  * LicenseConfigurationId
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseCountingType
  * LicenseRules
    * items [String](#string)
  * ManagedResourceSummaryList
    * items [ManagedResourceSummary](#managedresourcesummary)
  * Name
  * OwnerAccountId
  * ProductInformationList
    * items [ProductInformation](#productinformation)
  * Status

### LicenseConfigurationAssociation
* LicenseConfigurationAssociation `object`: Describes an association with a license configuration.
  * AmiAssociationScope
  * AssociationTime
  * ResourceArn
  * ResourceOwnerId
  * ResourceType

### LicenseConfigurationAssociations
* LicenseConfigurationAssociations `array`
  * items [LicenseConfigurationAssociation](#licenseconfigurationassociation)

### LicenseConfigurationStatus
* LicenseConfigurationStatus `string` (values: AVAILABLE, DISABLED)

### LicenseConfigurationUsage
* LicenseConfigurationUsage `object`: Details about the usage of a resource associated with a license configuration.
  * AssociationTime
  * ConsumedLicenses
  * ResourceArn
  * ResourceOwnerId
  * ResourceStatus
  * ResourceType

### LicenseConfigurationUsageList
* LicenseConfigurationUsageList `array`
  * items [LicenseConfigurationUsage](#licenseconfigurationusage)

### LicenseConfigurations
* LicenseConfigurations `array`
  * items [LicenseConfiguration](#licenseconfiguration)

### LicenseCountingType
* LicenseCountingType `string` (values: vCPU, Instance, Core, Socket)

### LicenseDeletionStatus
* LicenseDeletionStatus `string` (values: PENDING_DELETE, DELETED)

### LicenseList
* LicenseList `array`
  * items [License](#license)

### LicenseOperationFailure
* LicenseOperationFailure `object`: Describes the failure of a license operation.
  * ErrorMessage
  * FailureTime
  * MetadataList
    * items [Metadata](#metadata)
  * OperationName
  * OperationRequestedBy
  * ResourceArn
  * ResourceOwnerId
  * ResourceType

### LicenseOperationFailureList
* LicenseOperationFailureList `array`
  * items [LicenseOperationFailure](#licenseoperationfailure)

### LicenseSpecification
* LicenseSpecification `object`: Details for associating a license configuration with a resource.
  * AmiAssociationScope
  * LicenseConfigurationArn **required**

### LicenseSpecifications
* LicenseSpecifications `array`
  * items [LicenseSpecification](#licensespecification)

### LicenseStatus
* LicenseStatus `string` (values: AVAILABLE, PENDING_AVAILABLE, DEACTIVATED, SUSPENDED, EXPIRED, PENDING_DELETE, DELETED)

### LicenseUsage
* LicenseUsage `object`: Describes the entitlement usage associated with a license.
  * EntitlementUsages
    * items [EntitlementUsage](#entitlementusage)

### LicenseUsageException


### ListAssociationsForLicenseConfigurationRequest
* ListAssociationsForLicenseConfigurationRequest `object`
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

### ListAssociationsForLicenseConfigurationResponse
* ListAssociationsForLicenseConfigurationResponse `object`
  * LicenseConfigurationAssociations
    * items [LicenseConfigurationAssociation](#licenseconfigurationassociation)
  * NextToken

### ListDistributedGrantsRequest
* ListDistributedGrantsRequest `object`
  * Filters
    * items [Filter](#filter)
  * GrantArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

### ListDistributedGrantsResponse
* ListDistributedGrantsResponse `object`
  * Grants
    * items [Grant](#grant)
  * NextToken

### ListFailuresForLicenseConfigurationOperationsRequest
* ListFailuresForLicenseConfigurationOperationsRequest `object`
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

### ListFailuresForLicenseConfigurationOperationsResponse
* ListFailuresForLicenseConfigurationOperationsResponse `object`
  * LicenseOperationFailureList
    * items [LicenseOperationFailure](#licenseoperationfailure)
  * NextToken

### ListLicenseConfigurationsRequest
* ListLicenseConfigurationsRequest `object`
  * Filters
    * items [Filter](#filter)
  * LicenseConfigurationArns
    * items [String](#string)
  * MaxResults
  * NextToken

### ListLicenseConfigurationsResponse
* ListLicenseConfigurationsResponse `object`
  * LicenseConfigurations
    * items [LicenseConfiguration](#licenseconfiguration)
  * NextToken

### ListLicenseSpecificationsForResourceRequest
* ListLicenseSpecificationsForResourceRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListLicenseSpecificationsForResourceResponse
* ListLicenseSpecificationsForResourceResponse `object`
  * LicenseSpecifications
    * items [LicenseSpecification](#licensespecification)
  * NextToken

### ListLicenseVersionsRequest
* ListLicenseVersionsRequest `object`
  * LicenseArn **required**
  * MaxResults
  * NextToken

### ListLicenseVersionsResponse
* ListLicenseVersionsResponse `object`
  * Licenses
    * items [License](#license)
  * NextToken

### ListLicensesRequest
* ListLicensesRequest `object`
  * Filters
    * items [Filter](#filter)
  * LicenseArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

### ListLicensesResponse
* ListLicensesResponse `object`
  * Licenses
    * items [License](#license)
  * NextToken

### ListReceivedGrantsRequest
* ListReceivedGrantsRequest `object`
  * Filters
    * items [Filter](#filter)
  * GrantArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

### ListReceivedGrantsResponse
* ListReceivedGrantsResponse `object`
  * Grants
    * items [Grant](#grant)
  * NextToken

### ListReceivedLicensesRequest
* ListReceivedLicensesRequest `object`
  * Filters
    * items [Filter](#filter)
  * LicenseArns
    * items [Arn](#arn)
  * MaxResults
  * NextToken

### ListReceivedLicensesResponse
* ListReceivedLicensesResponse `object`
  * Licenses
    * items [GrantedLicense](#grantedlicense)
  * NextToken

### ListResourceInventoryRequest
* ListResourceInventoryRequest `object`
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * MaxResults
  * NextToken

### ListResourceInventoryResponse
* ListResourceInventoryResponse `object`
  * NextToken
  * ResourceInventoryList
    * items [ResourceInventory](#resourceinventory)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListTokensRequest
* ListTokensRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * TokenIds
    * items [String](#string)

### ListTokensResponse
* ListTokensResponse `object`
  * NextToken
  * Tokens
    * items [TokenData](#tokendata)

### ListUsageForLicenseConfigurationRequest
* ListUsageForLicenseConfigurationRequest `object`
  * Filters
    * items [Filter](#filter)
  * LicenseConfigurationArn **required**
  * MaxResults
  * NextToken

### ListUsageForLicenseConfigurationResponse
* ListUsageForLicenseConfigurationResponse `object`
  * LicenseConfigurationUsageList
    * items [LicenseConfigurationUsage](#licenseconfigurationusage)
  * NextToken

### Long
* Long `integer`

### ManagedResourceSummary
* ManagedResourceSummary `object`: Summary information about a managed resource.
  * AssociationCount
  * ResourceType

### ManagedResourceSummaryList
* ManagedResourceSummaryList `array`
  * items [ManagedResourceSummary](#managedresourcesummary)

### MaxSize100
* MaxSize100 `integer`

### MaxSize3StringList
* MaxSize3StringList `array`
  * items [String](#string)

### Metadata
* Metadata `object`: Describes key/value pairs.
  * Name
  * Value

### MetadataList
* MetadataList `array`
  * items [Metadata](#metadata)

### NoEntitlementsAllowedException


### OrganizationConfiguration
* OrganizationConfiguration `object`: Configuration information for AWS Organizations.
  * EnableIntegration **required**

### PrincipalArnList
* PrincipalArnList `array`
  * items [Arn](#arn)

### ProductInformation
* ProductInformation `object`: Describes product information for a license configuration.
  * ProductInformationFilterList **required**
    * items [ProductInformationFilter](#productinformationfilter)
  * ResourceType **required**

### ProductInformationFilter
* ProductInformationFilter `object`: Describes product information filters.
  * ProductInformationFilterComparator **required**
  * ProductInformationFilterName **required**
  * ProductInformationFilterValue **required**
    * items [String](#string)

### ProductInformationFilterList
* ProductInformationFilterList `array`
  * items [ProductInformationFilter](#productinformationfilter)

### ProductInformationList
* ProductInformationList `array`
  * items [ProductInformation](#productinformation)

### ProvisionalConfiguration
* ProvisionalConfiguration `object`: Details about a provisional configuration.
  * MaxTimeToLiveInMinutes **required**

### RateLimitExceededException


### ReceivedMetadata
* ReceivedMetadata `object`: Metadata associated with received licenses and grants.
  * AllowedOperations
    * items [AllowedOperation](#allowedoperation)
  * ReceivedStatus

### ReceivedStatus
* ReceivedStatus `string` (values: PENDING_WORKFLOW, PENDING_ACCEPT, REJECTED, ACTIVE, FAILED_WORKFLOW, DELETED, DISABLED)

### RedirectException


### RejectGrantRequest
* RejectGrantRequest `object`
  * GrantArn **required**

### RejectGrantResponse
* RejectGrantResponse `object`
  * GrantArn
  * Status
  * Version

### RenewType
* RenewType `string` (values: None, Weekly, Monthly)

### ResourceInventory
* ResourceInventory `object`: Details about a resource.
  * Platform
  * PlatformVersion
  * ResourceArn
  * ResourceId
  * ResourceOwningAccountId
  * ResourceType

### ResourceInventoryList
* ResourceInventoryList `array`
  * items [ResourceInventory](#resourceinventory)

### ResourceLimitExceededException


### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: EC2_INSTANCE, EC2_HOST, EC2_AMI, RDS, SYSTEMS_MANAGER_MANAGED_INSTANCE)

### ServerInternalException


### SignedToken
* SignedToken `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Tag
* Tag `object`: Details about a tag for a license configuration.
  * Key
  * Value

### TagKeyList
* TagKeyList `array`
  * items [String](#string)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TokenData
* TokenData `object`: Describes a token.
  * ExpirationTime
  * LicenseArn
  * RoleArns
    * items [Arn](#arn)
  * Status
  * TokenId
  * TokenProperties
    * items [String](#string)
  * TokenType

### TokenList
* TokenList `array`
  * items [TokenData](#tokendata)

### TokenString
* TokenString `string`

### TokenType
* TokenType `string` (values: REFRESH_TOKEN)

### UnsupportedDigitalSignatureMethodException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [String](#string)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateLicenseConfigurationRequest
* UpdateLicenseConfigurationRequest `object`
  * Description
  * DisassociateWhenNotFound
  * LicenseConfigurationArn **required**
  * LicenseConfigurationStatus
  * LicenseCount
  * LicenseCountHardLimit
  * LicenseRules
    * items [String](#string)
  * Name
  * ProductInformationList
    * items [ProductInformation](#productinformation)

### UpdateLicenseConfigurationResponse
* UpdateLicenseConfigurationResponse `object`

### UpdateLicenseSpecificationsForResourceRequest
* UpdateLicenseSpecificationsForResourceRequest `object`
  * AddLicenseSpecifications
    * items [LicenseSpecification](#licensespecification)
  * RemoveLicenseSpecifications
    * items [LicenseSpecification](#licensespecification)
  * ResourceArn **required**

### UpdateLicenseSpecificationsForResourceResponse
* UpdateLicenseSpecificationsForResourceResponse `object`

### UpdateServiceSettingsRequest
* UpdateServiceSettingsRequest `object`
  * EnableCrossAccountsDiscovery
  * OrganizationConfiguration
    * EnableIntegration **required**
  * S3BucketArn
  * SnsTopicArn

### UpdateServiceSettingsResponse
* UpdateServiceSettingsResponse `object`

### ValidationException



