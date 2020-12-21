# @datafire/azure_web_domains

Client library for Domains API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_domains
```
```js
let azure_web_domains = require('@datafire/azure_web_domains').create({
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



## Actions

### Domains_CheckAvailability
Check if a domain is available for registration.


```js
azure_web_domains.Domains_CheckAvailability({
  "identifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** `object`: Identifies an object.
    * name `string`: Name of the object.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainAvailablilityCheckResult](#domainavailablilitycheckresult)

### Domains_List
Get all domains in a subscription.


```js
azure_web_domains.Domains_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainCollection](#domaincollection)

### Domains_GetControlCenterSsoRequest
Generate a single sign-on request for the domain management portal.


```js
azure_web_domains.Domains_GetControlCenterSsoRequest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainControlCenterSsoRequest](#domaincontrolcenterssorequest)

### Domains_ListRecommendations
Get domain name recommendations based on keywords.


```js
azure_web_domains.Domains_ListRecommendations({
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [DomainRecommendationSearchParameters](#domainrecommendationsearchparameters)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [NameIdentifierCollection](#nameidentifiercollection)

### Domains_ListByResourceGroup
Get all domains in a resource group.


```js
azure_web_domains.Domains_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainCollection](#domaincollection)

### Domains_Delete
Delete a domain.


```js
azure_web_domains.Domains_Delete({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of the domain.
  * forceHardDeleteDomain `boolean`: Specify <code>true</code> to delete the domain immediately. The default is <code>false</code> which deletes the domain after 24 hours.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Domains_Get
Get a domain.


```js
azure_web_domains.Domains_Get({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of the domain.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_Update
Creates or updates a domain.


```js
azure_web_domains.Domains_Update({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of the domain.
  * domain **required** [DomainPatchResource](#domainpatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_CreateOrUpdate
Creates or updates a domain.


```js
azure_web_domains.Domains_CreateOrUpdate({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of the domain.
  * domain **required** [Domain](#domain)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_ListOwnershipIdentifiers
Lists domain ownership identifiers.


```js
azure_web_domains.Domains_ListOwnershipIdentifiers({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of domain.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainOwnershipIdentifierCollection](#domainownershipidentifiercollection)

### Domains_DeleteOwnershipIdentifier
Delete ownership identifier for domain


```js
azure_web_domains.Domains_DeleteOwnershipIdentifier({
  "resourceGroupName": "",
  "domainName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of domain.
  * name **required** `string`: Name of identifier.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Domains_GetOwnershipIdentifier
Get ownership identifier for domain


```js
azure_web_domains.Domains_GetOwnershipIdentifier({
  "resourceGroupName": "",
  "domainName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of domain.
  * name **required** `string`: Name of identifier.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainOwnershipIdentifier](#domainownershipidentifier)

### Domains_UpdateOwnershipIdentifier
Creates an ownership identifier for a domain or updates identifier details for an existing identifer


```js
azure_web_domains.Domains_UpdateOwnershipIdentifier({
  "resourceGroupName": "",
  "domainName": "",
  "name": "",
  "domainOwnershipIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of domain.
  * name **required** `string`: Name of identifier.
  * domainOwnershipIdentifier **required** [DomainOwnershipIdentifier](#domainownershipidentifier)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainOwnershipIdentifier](#domainownershipidentifier)

### Domains_CreateOrUpdateOwnershipIdentifier
Creates an ownership identifier for a domain or updates identifier details for an existing identifer


```js
azure_web_domains.Domains_CreateOrUpdateOwnershipIdentifier({
  "resourceGroupName": "",
  "domainName": "",
  "name": "",
  "domainOwnershipIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of domain.
  * name **required** `string`: Name of identifier.
  * domainOwnershipIdentifier **required** [DomainOwnershipIdentifier](#domainownershipidentifier)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DomainOwnershipIdentifier](#domainownershipidentifier)

### Domains_Renew
Renew a domain.


```js
azure_web_domains.Domains_Renew({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * domainName **required** `string`: Name of the domain.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*



## Definitions

### Address
* Address `object`: Address information for domain registration.
  * address1 **required** `string`: First line of an Address.
  * address2 `string`: The second line of the Address. Optional.
  * city **required** `string`: The city for the address.
  * country **required** `string`: The country for the address.
  * postalCode **required** `string`: The postal code for the address.
  * state **required** `string`: The state or province for the address.

### Contact
* Contact `object`: Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
  * addressMailing [Address](#address)
  * email **required** `string`: Email address.
  * fax `string`: Fax number.
  * jobTitle `string`: Job title.
  * nameFirst **required** `string`: First name.
  * nameLast **required** `string`: Last name.
  * nameMiddle `string`: Middle name.
  * organization `string`: Organization contact belongs to.
  * phone **required** `string`: Phone number.

### Domain
* Domain `object`: Information about a domain.
  * properties `object`: Domain resource specific properties
    * authCode `string`
    * autoRenew `boolean`: <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
    * consent **required** [DomainPurchaseConsent](#domainpurchaseconsent)
    * contactAdmin **required** [Contact](#contact)
    * contactBilling **required** [Contact](#contact)
    * contactRegistrant **required** [Contact](#contact)
    * contactTech **required** [Contact](#contact)
    * createdTime `string`: Domain creation timestamp.
    * dnsType `string` (values: AzureDns, DefaultDomainRegistrarDns): Current DNS type
    * dnsZoneId `string`: Azure DNS Zone to use
    * domainNotRenewableReasons `array`: Reasons why domain is not renewable.
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * expirationTime `string`: Domain expiration timestamp.
    * lastRenewedTime `string`: Timestamp when the domain was renewed last time.
    * managedHostNames `array`: All hostnames derived from the domain and assigned to Azure resources.
      * items [HostName](#hostname)
    * nameServers `array`: Name servers.
      * items `string`
    * privacy `boolean`: <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Domain provisioning state.
    * readyForDnsRecordManagement `boolean`: <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and 
    * registrationStatus `string` (values: Active, Awaiting, Cancelled, Confiscated, Disabled, Excluded, Expired, Failed, Held, Locked, Parked, Pending, Reserved, Reverted, Suspended, Transferred, Unknown, Unlocked, Unparked, Updated, JsonConverterFailed): Domain registration status.
    * targetDnsType `string` (values: AzureDns, DefaultDomainRegistrarDns): Target DNS type (would be used for migration)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### DomainAvailablilityCheckResult
* DomainAvailablilityCheckResult `object`: Domain availability check result.
  * available `boolean`: <code>true</code> if domain can be purchased using CreateDomain API; otherwise, <code>false</code>.
  * domainType `string` (values: Regular, SoftDeleted): Valid values are Regular domain: Azure will charge the full price of domain registration, SoftDeleted: Purchasing this domain will simply restore it and this operation will not cost anything.
  * name `string`: Name of the domain.

### DomainCollection
* DomainCollection `object`: Collection of domains.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [Domain](#domain)

### DomainControlCenterSsoRequest
* DomainControlCenterSsoRequest `object`: Single sign-on request information for domain management.
  * postParameterKey `string`: Post parameter key.
  * postParameterValue `string`: Post parameter value. Client should use 'application/x-www-form-urlencoded' encoding for this value.
  * url `string`: URL where the single sign-on request is to be made.

### DomainOwnershipIdentifier
* DomainOwnershipIdentifier `object`: Domain ownership Identifier.
  * properties `object`: DomainOwnershipIdentifier resource specific properties
    * ownershipId `string`: Ownership Id.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DomainOwnershipIdentifierCollection
* DomainOwnershipIdentifierCollection `object`: Collection of domain ownership identifiers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [DomainOwnershipIdentifier](#domainownershipidentifier)

### DomainPatchResource
* DomainPatchResource `object`: ARM resource for a domain.
  * properties `object`: DomainPatchResource resource specific properties
    * authCode `string`
    * autoRenew `boolean`: <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
    * consent **required** [DomainPurchaseConsent](#domainpurchaseconsent)
    * contactAdmin **required** [Contact](#contact)
    * contactBilling **required** [Contact](#contact)
    * contactRegistrant **required** [Contact](#contact)
    * contactTech **required** [Contact](#contact)
    * createdTime `string`: Domain creation timestamp.
    * dnsType `string` (values: AzureDns, DefaultDomainRegistrarDns): Current DNS type
    * dnsZoneId `string`: Azure DNS Zone to use
    * domainNotRenewableReasons `array`: Reasons why domain is not renewable.
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * expirationTime `string`: Domain expiration timestamp.
    * lastRenewedTime `string`: Timestamp when the domain was renewed last time.
    * managedHostNames `array`: All hostnames derived from the domain and assigned to Azure resources.
      * items [HostName](#hostname)
    * nameServers `array`: Name servers.
      * items `string`
    * privacy `boolean`: <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Domain provisioning state.
    * readyForDnsRecordManagement `boolean`: <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and 
    * registrationStatus `string` (values: Active, Awaiting, Cancelled, Confiscated, Disabled, Excluded, Expired, Failed, Held, Locked, Parked, Pending, Reserved, Reverted, Suspended, Transferred, Unknown, Unlocked, Unparked, Updated, JsonConverterFailed): Domain registration status.
    * targetDnsType `string` (values: AzureDns, DefaultDomainRegistrarDns): Target DNS type (would be used for migration)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DomainPurchaseConsent
* DomainPurchaseConsent `object`: Domain purchase consent object, representing acceptance of applicable legal agreements.
  * agreedAt `string`: Timestamp when the agreements were accepted.
  * agreedBy `string`: Client IP address.
  * agreementKeys `array`: List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.
    * items `string`

### DomainRecommendationSearchParameters
* DomainRecommendationSearchParameters `object`: Domain recommendation search parameters.
  * keywords `string`: Keywords to be used for generating domain recommendations.
  * maxDomainRecommendations `integer`: Maximum number of recommendations.

### HostName
* HostName `object`: Details of a hostname derived from a domain.
  * azureResourceName `string`: Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
  * azureResourceType `string` (values: Website, TrafficManager): Type of the Azure resource the hostname is assigned to.
  * customHostNameDnsRecordType `string` (values: CName, A): Type of the DNS record.
  * hostNameType `string` (values: Verified, Managed): Type of the hostname.
  * name `string`: Name of the hostname.
  * siteNames `array`: List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.
    * items `string`

### NameIdentifierCollection
* NameIdentifierCollection `object`: Collection of domain name identifiers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Identifies an object.
      * name `string`: Name of the object.


