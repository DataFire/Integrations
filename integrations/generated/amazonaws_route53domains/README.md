# @datafire/amazonaws_route53domains

Client library for Amazon Route 53 Domains

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_route53domains
```
```js
let amazonaws_route53domains = require('@datafire/amazonaws_route53domains').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Route 53 API actions let you register domain names and perform related operations.

## Actions

### AcceptDomainTransferFromAnotherAwsAccount



```js
amazonaws_route53domains.AcceptDomainTransferFromAnotherAwsAccount({
  "DomainName": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * Password **required**

#### Output
* output [AcceptDomainTransferFromAnotherAwsAccountResponse](#acceptdomaintransferfromanotherawsaccountresponse)

### CancelDomainTransferToAnotherAwsAccount



```js
amazonaws_route53domains.CancelDomainTransferToAnotherAwsAccount({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [CancelDomainTransferToAnotherAwsAccountResponse](#canceldomaintransfertoanotherawsaccountresponse)

### CheckDomainAvailability



```js
amazonaws_route53domains.CheckDomainAvailability({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * IdnLangCode

#### Output
* output [CheckDomainAvailabilityResponse](#checkdomainavailabilityresponse)

### CheckDomainTransferability



```js
amazonaws_route53domains.CheckDomainTransferability({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * AuthCode
  * DomainName **required**

#### Output
* output [CheckDomainTransferabilityResponse](#checkdomaintransferabilityresponse)

### DeleteTagsForDomain



```js
amazonaws_route53domains.DeleteTagsForDomain({
  "DomainName": null,
  "TagsToDelete": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * TagsToDelete **required**
    * items [TagKey](#tagkey)

#### Output
* output [DeleteTagsForDomainResponse](#deletetagsfordomainresponse)

### DisableDomainAutoRenew



```js
amazonaws_route53domains.DisableDomainAutoRenew({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [DisableDomainAutoRenewResponse](#disabledomainautorenewresponse)

### DisableDomainTransferLock



```js
amazonaws_route53domains.DisableDomainTransferLock({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [DisableDomainTransferLockResponse](#disabledomaintransferlockresponse)

### EnableDomainAutoRenew



```js
amazonaws_route53domains.EnableDomainAutoRenew({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [EnableDomainAutoRenewResponse](#enabledomainautorenewresponse)

### EnableDomainTransferLock



```js
amazonaws_route53domains.EnableDomainTransferLock({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [EnableDomainTransferLockResponse](#enabledomaintransferlockresponse)

### GetContactReachabilityStatus



```js
amazonaws_route53domains.GetContactReachabilityStatus({}, context)
```

#### Input
* input `object`
  * domainName

#### Output
* output [GetContactReachabilityStatusResponse](#getcontactreachabilitystatusresponse)

### GetDomainDetail



```js
amazonaws_route53domains.GetDomainDetail({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [GetDomainDetailResponse](#getdomaindetailresponse)

### GetDomainSuggestions



```js
amazonaws_route53domains.GetDomainSuggestions({
  "DomainName": null,
  "SuggestionCount": null,
  "OnlyAvailable": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * OnlyAvailable **required**
  * SuggestionCount **required**

#### Output
* output [GetDomainSuggestionsResponse](#getdomainsuggestionsresponse)

### GetOperationDetail



```js
amazonaws_route53domains.GetOperationDetail({
  "OperationId": null
}, context)
```

#### Input
* input `object`
  * OperationId **required**

#### Output
* output [GetOperationDetailResponse](#getoperationdetailresponse)

### ListDomains



```js
amazonaws_route53domains.ListDomains({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems

#### Output
* output [ListDomainsResponse](#listdomainsresponse)

### ListOperations



```js
amazonaws_route53domains.ListOperations({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * SubmittedSince

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### ListTagsForDomain



```js
amazonaws_route53domains.ListTagsForDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [ListTagsForDomainResponse](#listtagsfordomainresponse)

### RegisterDomain



```js
amazonaws_route53domains.RegisterDomain({
  "DomainName": null,
  "DurationInYears": null,
  "AdminContact": null,
  "RegistrantContact": null,
  "TechContact": null
}, context)
```

#### Input
* input `object`
  * AdminContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * AutoRenew
  * DomainName **required**
  * DurationInYears **required**
  * IdnLangCode
  * PrivacyProtectAdminContact
  * PrivacyProtectRegistrantContact
  * PrivacyProtectTechContact
  * RegistrantContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

#### Output
* output [RegisterDomainResponse](#registerdomainresponse)

### RejectDomainTransferFromAnotherAwsAccount



```js
amazonaws_route53domains.RejectDomainTransferFromAnotherAwsAccount({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [RejectDomainTransferFromAnotherAwsAccountResponse](#rejectdomaintransferfromanotherawsaccountresponse)

### RenewDomain



```js
amazonaws_route53domains.RenewDomain({
  "DomainName": null,
  "CurrentExpiryYear": null
}, context)
```

#### Input
* input `object`
  * CurrentExpiryYear **required**
  * DomainName **required**
  * DurationInYears

#### Output
* output [RenewDomainResponse](#renewdomainresponse)

### ResendContactReachabilityEmail



```js
amazonaws_route53domains.ResendContactReachabilityEmail({}, context)
```

#### Input
* input `object`
  * domainName

#### Output
* output [ResendContactReachabilityEmailResponse](#resendcontactreachabilityemailresponse)

### RetrieveDomainAuthCode



```js
amazonaws_route53domains.RetrieveDomainAuthCode({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [RetrieveDomainAuthCodeResponse](#retrievedomainauthcoderesponse)

### TransferDomain



```js
amazonaws_route53domains.TransferDomain({
  "DomainName": null,
  "DurationInYears": null,
  "AdminContact": null,
  "RegistrantContact": null,
  "TechContact": null
}, context)
```

#### Input
* input `object`
  * AdminContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * AuthCode
  * AutoRenew
  * DomainName **required**
  * DurationInYears **required**
  * IdnLangCode
  * Nameservers
    * items [Nameserver](#nameserver)
  * PrivacyProtectAdminContact
  * PrivacyProtectRegistrantContact
  * PrivacyProtectTechContact
  * RegistrantContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

#### Output
* output [TransferDomainResponse](#transferdomainresponse)

### TransferDomainToAnotherAwsAccount



```js
amazonaws_route53domains.TransferDomainToAnotherAwsAccount({
  "DomainName": null,
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * DomainName **required**

#### Output
* output [TransferDomainToAnotherAwsAccountResponse](#transferdomaintoanotherawsaccountresponse)

### UpdateDomainContact



```js
amazonaws_route53domains.UpdateDomainContact({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * AdminContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * DomainName **required**
  * RegistrantContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

#### Output
* output [UpdateDomainContactResponse](#updatedomaincontactresponse)

### UpdateDomainContactPrivacy



```js
amazonaws_route53domains.UpdateDomainContactPrivacy({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * AdminPrivacy
  * DomainName **required**
  * RegistrantPrivacy
  * TechPrivacy

#### Output
* output [UpdateDomainContactPrivacyResponse](#updatedomaincontactprivacyresponse)

### UpdateDomainNameservers



```js
amazonaws_route53domains.UpdateDomainNameservers({
  "DomainName": null,
  "Nameservers": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * FIAuthKey
  * Nameservers **required**
    * items [Nameserver](#nameserver)

#### Output
* output [UpdateDomainNameserversResponse](#updatedomainnameserversresponse)

### UpdateTagsForDomain



```js
amazonaws_route53domains.UpdateTagsForDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * TagsToUpdate
    * items [Tag](#tag)

#### Output
* output [UpdateTagsForDomainResponse](#updatetagsfordomainresponse)

### ViewBilling



```js
amazonaws_route53domains.ViewBilling({}, context)
```

#### Input
* input `object`
  * End
  * Marker
  * MaxItems
  * Start

#### Output
* output [ViewBillingResponse](#viewbillingresponse)



## Definitions

### AcceptDomainTransferFromAnotherAwsAccountRequest
* AcceptDomainTransferFromAnotherAwsAccountRequest `object`: The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
  * DomainName **required**
  * Password **required**

### AcceptDomainTransferFromAnotherAwsAccountResponse
* AcceptDomainTransferFromAnotherAwsAccountResponse `object`: The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.
  * OperationId

### AccountId
* AccountId `string`

### AddressLine
* AddressLine `string`

### BillingRecord
* BillingRecord `object`: Information for one billing record.
  * BillDate
  * DomainName
  * InvoiceId
  * Operation
  * Price

### BillingRecords
* BillingRecords `array`
  * items [BillingRecord](#billingrecord)

### Boolean
* Boolean `boolean`

### CancelDomainTransferToAnotherAwsAccountRequest
* CancelDomainTransferToAnotherAwsAccountRequest `object`: The CancelDomainTransferToAnotherAwsAccount request includes the following element.
  * DomainName **required**

### CancelDomainTransferToAnotherAwsAccountResponse
* CancelDomainTransferToAnotherAwsAccountResponse `object`: The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element.
  * OperationId

### CheckDomainAvailabilityRequest
* CheckDomainAvailabilityRequest `object`: The CheckDomainAvailability request contains the following elements.
  * DomainName **required**
  * IdnLangCode

### CheckDomainAvailabilityResponse
* CheckDomainAvailabilityResponse `object`: The CheckDomainAvailability response includes the following elements.
  * Availability **required**

### CheckDomainTransferabilityRequest
* CheckDomainTransferabilityRequest `object`: The CheckDomainTransferability request contains the following elements.
  * AuthCode
  * DomainName **required**

### CheckDomainTransferabilityResponse
* CheckDomainTransferabilityResponse `object`: The CheckDomainTransferability response includes the following elements.
  * Transferability **required**
    * Transferable [Transferable](#transferable)

### City
* City `string`

### ContactDetail
* ContactDetail `object`: ContactDetail includes the following elements.
  * AddressLine1
  * AddressLine2
  * City
  * ContactType
  * CountryCode
  * Email
  * ExtraParams
    * items [ExtraParam](#extraparam)
  * Fax
  * FirstName
  * LastName
  * OrganizationName
  * PhoneNumber
  * State
  * ZipCode

### ContactName
* ContactName `string`

### ContactNumber
* ContactNumber `string`

### ContactType
* ContactType `string` (values: PERSON, COMPANY, ASSOCIATION, PUBLIC_BODY, RESELLER)

### CountryCode
* CountryCode `string` (values: AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GH, GI, GL, GM, GN, GQ, GR, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IQ, IR, IS, IT, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PT, PW, PY, QA, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SK, SL, SM, SN, SO, SR, ST, SV, SY, SZ, TC, TD, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

### CurrentExpiryYear
* CurrentExpiryYear `integer`

### DNSSec
* DNSSec `string`

### DeleteTagsForDomainRequest
* DeleteTagsForDomainRequest `object`: The DeleteTagsForDomainRequest includes the following elements.
  * DomainName **required**
  * TagsToDelete **required**
    * items [TagKey](#tagkey)

### DeleteTagsForDomainResponse
* DeleteTagsForDomainResponse `object`

### DisableDomainAutoRenewRequest
* DisableDomainAutoRenewRequest `object`
  * DomainName **required**

### DisableDomainAutoRenewResponse
* DisableDomainAutoRenewResponse `object`

### DisableDomainTransferLockRequest
* DisableDomainTransferLockRequest `object`: The DisableDomainTransferLock request includes the following element.
  * DomainName **required**

### DisableDomainTransferLockResponse
* DisableDomainTransferLockResponse `object`: The DisableDomainTransferLock response includes the following element.
  * OperationId **required**

### DomainAuthCode
* DomainAuthCode `string`

### DomainAvailability
* DomainAvailability `string` (values: AVAILABLE, AVAILABLE_RESERVED, AVAILABLE_PREORDER, UNAVAILABLE, UNAVAILABLE_PREMIUM, UNAVAILABLE_RESTRICTED, RESERVED, DONT_KNOW)

### DomainLimitExceeded


### DomainName
* DomainName `string`

### DomainStatus
* DomainStatus `string`

### DomainStatusList
* DomainStatusList `array`
  * items [DomainStatus](#domainstatus)

### DomainSuggestion
* DomainSuggestion `object`: Information about one suggested domain name.
  * Availability
  * DomainName

### DomainSuggestionsList
* DomainSuggestionsList `array`
  * items [DomainSuggestion](#domainsuggestion)

### DomainSummary
* DomainSummary `object`: Summary information about one domain.
  * AutoRenew
  * DomainName **required**
  * Expiry
  * TransferLock

### DomainSummaryList
* DomainSummaryList `array`
  * items [DomainSummary](#domainsummary)

### DomainTransferability
* DomainTransferability `object`: A complex type that contains information about whether the specified domain can be transferred to Route 53.
  * Transferable [Transferable](#transferable)

### DuplicateRequest


### DurationInYears
* DurationInYears `integer`

### Email
* Email `string`

### EnableDomainAutoRenewRequest
* EnableDomainAutoRenewRequest `object`
  * DomainName **required**

### EnableDomainAutoRenewResponse
* EnableDomainAutoRenewResponse `object`

### EnableDomainTransferLockRequest
* EnableDomainTransferLockRequest `object`: A request to set the transfer lock for the specified domain.
  * DomainName **required**

### EnableDomainTransferLockResponse
* EnableDomainTransferLockResponse `object`: The EnableDomainTransferLock response includes the following elements.
  * OperationId **required**

### ErrorMessage
* ErrorMessage `string`

### ExtraParam
* ExtraParam `object`: ExtraParam includes the following elements.
  * Name **required**
  * Value **required**

### ExtraParamList
* ExtraParamList `array`
  * items [ExtraParam](#extraparam)

### ExtraParamName
* ExtraParamName `string` (values: DUNS_NUMBER, BRAND_NUMBER, BIRTH_DEPARTMENT, BIRTH_DATE_IN_YYYY_MM_DD, BIRTH_COUNTRY, BIRTH_CITY, DOCUMENT_NUMBER, AU_ID_NUMBER, AU_ID_TYPE, CA_LEGAL_TYPE, CA_BUSINESS_ENTITY_TYPE, CA_LEGAL_REPRESENTATIVE, CA_LEGAL_REPRESENTATIVE_CAPACITY, ES_IDENTIFICATION, ES_IDENTIFICATION_TYPE, ES_LEGAL_FORM, FI_BUSINESS_NUMBER, FI_ID_NUMBER, FI_NATIONALITY, FI_ORGANIZATION_TYPE, IT_NATIONALITY, IT_PIN, IT_REGISTRANT_ENTITY_TYPE, RU_PASSPORT_DATA, SE_ID_NUMBER, SG_ID_NUMBER, VAT_NUMBER, UK_CONTACT_TYPE, UK_COMPANY_NUMBER)

### ExtraParamValue
* ExtraParamValue `string`

### FIAuthKey
* FIAuthKey `string`

### GetContactReachabilityStatusRequest
* GetContactReachabilityStatusRequest `object`
  * domainName

### GetContactReachabilityStatusResponse
* GetContactReachabilityStatusResponse `object`
  * domainName
  * status

### GetDomainDetailRequest
* GetDomainDetailRequest `object`: The GetDomainDetail request includes the following element.
  * DomainName **required**

### GetDomainDetailResponse
* GetDomainDetailResponse `object`: The GetDomainDetail response includes the following elements.
  * AbuseContactEmail
  * AbuseContactPhone
  * AdminContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * AdminPrivacy
  * AutoRenew
  * CreationDate
  * DnsSec
  * DomainName **required**
  * ExpirationDate
  * Nameservers **required**
    * items [Nameserver](#nameserver)
  * RegistrantContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * RegistrantPrivacy
  * RegistrarName
  * RegistrarUrl
  * RegistryDomainId
  * Reseller
  * StatusList
    * items [DomainStatus](#domainstatus)
  * TechContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechPrivacy
  * UpdatedDate
  * WhoIsServer

### GetDomainSuggestionsRequest
* GetDomainSuggestionsRequest `object`
  * DomainName **required**
  * OnlyAvailable **required**
  * SuggestionCount **required**

### GetDomainSuggestionsResponse
* GetDomainSuggestionsResponse `object`
  * SuggestionsList
    * items [DomainSuggestion](#domainsuggestion)

### GetOperationDetailRequest
* GetOperationDetailRequest `object`: The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.
  * OperationId **required**

### GetOperationDetailResponse
* GetOperationDetailResponse `object`: The GetOperationDetail response includes the following elements.
  * DomainName
  * Message
  * OperationId
  * Status
  * SubmittedDate
  * Type

### GlueIp
* GlueIp `string`

### GlueIpList
* GlueIpList `array`
  * items [GlueIp](#glueip)

### HostName
* HostName `string`

### Integer
* Integer `integer`

### InvalidInput


### InvoiceId
* InvoiceId `string`

### LangCode
* LangCode `string`

### ListDomainsRequest
* ListDomainsRequest `object`: The ListDomains request includes the following elements.
  * Marker
  * MaxItems

### ListDomainsResponse
* ListDomainsResponse `object`: The ListDomains response includes the following elements.
  * Domains **required**
    * items [DomainSummary](#domainsummary)
  * NextPageMarker

### ListOperationsRequest
* ListOperationsRequest `object`: The ListOperations request includes the following elements.
  * Marker
  * MaxItems
  * SubmittedSince

### ListOperationsResponse
* ListOperationsResponse `object`: The ListOperations response includes the following elements.
  * NextPageMarker
  * Operations **required**
    * items [OperationSummary](#operationsummary)

### ListTagsForDomainRequest
* ListTagsForDomainRequest `object`: The ListTagsForDomainRequest includes the following elements.
  * DomainName **required**

### ListTagsForDomainResponse
* ListTagsForDomainResponse `object`: The ListTagsForDomain response includes the following elements.
  * TagList **required**
    * items [Tag](#tag)

### Nameserver
* Nameserver `object`: Nameserver includes the following elements.
  * GlueIps
    * items [GlueIp](#glueip)
  * Name **required**

### NameserverList
* NameserverList `array`
  * items [Nameserver](#nameserver)

### OperationId
* OperationId `string`

### OperationLimitExceeded


### OperationStatus
* OperationStatus `string` (values: SUBMITTED, IN_PROGRESS, ERROR, SUCCESSFUL, FAILED)

### OperationSummary
* OperationSummary `object`: OperationSummary includes the following elements.
  * OperationId **required**
  * Status **required**
  * SubmittedDate **required**
  * Type **required**

### OperationSummaryList
* OperationSummaryList `array`
  * items [OperationSummary](#operationsummary)

### OperationType
* OperationType `string` (values: REGISTER_DOMAIN, DELETE_DOMAIN, TRANSFER_IN_DOMAIN, UPDATE_DOMAIN_CONTACT, UPDATE_NAMESERVER, CHANGE_PRIVACY_PROTECTION, DOMAIN_LOCK, ENABLE_AUTORENEW, DISABLE_AUTORENEW, ADD_DNSSEC, REMOVE_DNSSEC, EXPIRE_DOMAIN, TRANSFER_OUT_DOMAIN, CHANGE_DOMAIN_OWNER, RENEW_DOMAIN, PUSH_DOMAIN, INTERNAL_TRANSFER_OUT_DOMAIN, INTERNAL_TRANSFER_IN_DOMAIN)

### PageMarker
* PageMarker `string`

### PageMaxItems
* PageMaxItems `integer`

### Price
* Price `number`

### ReachabilityStatus
* ReachabilityStatus `string` (values: PENDING, DONE, EXPIRED)

### RegisterDomainRequest
* RegisterDomainRequest `object`: The RegisterDomain request includes the following elements.
  * AdminContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * AutoRenew
  * DomainName **required**
  * DurationInYears **required**
  * IdnLangCode
  * PrivacyProtectAdminContact
  * PrivacyProtectRegistrantContact
  * PrivacyProtectTechContact
  * RegistrantContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

### RegisterDomainResponse
* RegisterDomainResponse `object`: The RegisterDomain response includes the following element.
  * OperationId **required**

### RegistrarName
* RegistrarName `string`

### RegistrarUrl
* RegistrarUrl `string`

### RegistrarWhoIsServer
* RegistrarWhoIsServer `string`

### RegistryDomainId
* RegistryDomainId `string`

### RejectDomainTransferFromAnotherAwsAccountRequest
* RejectDomainTransferFromAnotherAwsAccountRequest `object`: The RejectDomainTransferFromAnotherAwsAccount request includes the following element.
  * DomainName **required**

### RejectDomainTransferFromAnotherAwsAccountResponse
* RejectDomainTransferFromAnotherAwsAccountResponse `object`: The RejectDomainTransferFromAnotherAwsAccount response includes the following element.
  * OperationId

### RenewDomainRequest
* RenewDomainRequest `object`: A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
  * CurrentExpiryYear **required**
  * DomainName **required**
  * DurationInYears

### RenewDomainResponse
* RenewDomainResponse `object`
  * OperationId **required**

### Reseller
* Reseller `string`

### ResendContactReachabilityEmailRequest
* ResendContactReachabilityEmailRequest `object`
  * domainName

### ResendContactReachabilityEmailResponse
* ResendContactReachabilityEmailResponse `object`
  * domainName
  * emailAddress
  * isAlreadyVerified

### RetrieveDomainAuthCodeRequest
* RetrieveDomainAuthCodeRequest `object`: A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
  * DomainName **required**

### RetrieveDomainAuthCodeResponse
* RetrieveDomainAuthCodeResponse `object`: The RetrieveDomainAuthCode response includes the following element.
  * AuthCode **required**

### State
* State `string`

### String
* String `string`

### TLDRulesViolation


### Tag
* Tag `object`: Each tag includes the following elements.
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

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### TransferDomainRequest
* TransferDomainRequest `object`: The TransferDomain request includes the following elements.
  * AdminContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * AuthCode
  * AutoRenew
  * DomainName **required**
  * DurationInYears **required**
  * IdnLangCode
  * Nameservers
    * items [Nameserver](#nameserver)
  * PrivacyProtectAdminContact
  * PrivacyProtectRegistrantContact
  * PrivacyProtectTechContact
  * RegistrantContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact **required**
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

### TransferDomainResponse
* TransferDomainResponse `object`: The TransferDomain response includes the following element.
  * OperationId **required**

### TransferDomainToAnotherAwsAccountRequest
* TransferDomainToAnotherAwsAccountRequest `object`: The TransferDomainToAnotherAwsAccount request includes the following elements.
  * AccountId **required**
  * DomainName **required**

### TransferDomainToAnotherAwsAccountResponse
* TransferDomainToAnotherAwsAccountResponse `object`: The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.
  * OperationId
  * Password

### Transferable
* Transferable `string` (values: TRANSFERABLE, UNTRANSFERABLE, DONT_KNOW): <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl>

### UnsupportedTLD


### UpdateDomainContactPrivacyRequest
* UpdateDomainContactPrivacyRequest `object`: The UpdateDomainContactPrivacy request includes the following elements.
  * AdminPrivacy
  * DomainName **required**
  * RegistrantPrivacy
  * TechPrivacy

### UpdateDomainContactPrivacyResponse
* UpdateDomainContactPrivacyResponse `object`: The UpdateDomainContactPrivacy response includes the following element.
  * OperationId **required**

### UpdateDomainContactRequest
* UpdateDomainContactRequest `object`: The UpdateDomainContact request includes the following elements.
  * AdminContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * DomainName **required**
  * RegistrantContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode
  * TechContact
    * AddressLine1
    * AddressLine2
    * City
    * ContactType
    * CountryCode
    * Email
    * ExtraParams
      * items [ExtraParam](#extraparam)
    * Fax
    * FirstName
    * LastName
    * OrganizationName
    * PhoneNumber
    * State
    * ZipCode

### UpdateDomainContactResponse
* UpdateDomainContactResponse `object`: The UpdateDomainContact response includes the following element.
  * OperationId **required**

### UpdateDomainNameserversRequest
* UpdateDomainNameserversRequest `object`: <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
  * DomainName **required**
  * FIAuthKey
  * Nameservers **required**
    * items [Nameserver](#nameserver)

### UpdateDomainNameserversResponse
* UpdateDomainNameserversResponse `object`: The UpdateDomainNameservers response includes the following element.
  * OperationId **required**

### UpdateTagsForDomainRequest
* UpdateTagsForDomainRequest `object`: The UpdateTagsForDomainRequest includes the following elements.
  * DomainName **required**
  * TagsToUpdate
    * items [Tag](#tag)

### UpdateTagsForDomainResponse
* UpdateTagsForDomainResponse `object`

### ViewBillingRequest
* ViewBillingRequest `object`: The ViewBilling request includes the following elements.
  * End
  * Marker
  * MaxItems
  * Start

### ViewBillingResponse
* ViewBillingResponse `object`: The ViewBilling response includes the following elements.
  * BillingRecords
    * items [BillingRecord](#billingrecord)
  * NextPageMarker

### ZipCode
* ZipCode `string`


