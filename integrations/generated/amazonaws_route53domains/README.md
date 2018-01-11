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

amazonaws_route53domains.CheckDomainAvailability({}).then(data => {
  console.log(data);
})
```

## Description

Amazon Route 53 API actions let you register domain names and perform related operations.

## Actions

### CheckDomainAvailability



```js
amazonaws_route53domains.CheckDomainAvailability({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * IdnLangCode [LangCode](#langcode)

#### Output
* output [CheckDomainAvailabilityResponse](#checkdomainavailabilityresponse)

### CheckDomainTransferability



```js
amazonaws_route53domains.CheckDomainTransferability({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * AuthCode [DomainAuthCode](#domainauthcode)
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [CheckDomainTransferabilityResponse](#checkdomaintransferabilityresponse)

### DeleteTagsForDomain



```js
amazonaws_route53domains.DeleteTagsForDomain({
  "DomainName": "",
  "TagsToDelete": []
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * TagsToDelete **required** [TagKeyList](#tagkeylist)

#### Output
* output [DeleteTagsForDomainResponse](#deletetagsfordomainresponse)

### DisableDomainAutoRenew



```js
amazonaws_route53domains.DisableDomainAutoRenew({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [DisableDomainAutoRenewResponse](#disabledomainautorenewresponse)

### DisableDomainTransferLock



```js
amazonaws_route53domains.DisableDomainTransferLock({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [DisableDomainTransferLockResponse](#disabledomaintransferlockresponse)

### EnableDomainAutoRenew



```js
amazonaws_route53domains.EnableDomainAutoRenew({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [EnableDomainAutoRenewResponse](#enabledomainautorenewresponse)

### EnableDomainTransferLock



```js
amazonaws_route53domains.EnableDomainTransferLock({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [EnableDomainTransferLockResponse](#enabledomaintransferlockresponse)

### GetContactReachabilityStatus



```js
amazonaws_route53domains.GetContactReachabilityStatus({}, context)
```

#### Input
* input `object`
  * domainName [DomainName](#domainname)

#### Output
* output [GetContactReachabilityStatusResponse](#getcontactreachabilitystatusresponse)

### GetDomainDetail



```js
amazonaws_route53domains.GetDomainDetail({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [GetDomainDetailResponse](#getdomaindetailresponse)

### GetDomainSuggestions



```js
amazonaws_route53domains.GetDomainSuggestions({
  "DomainName": "",
  "SuggestionCount": 0,
  "OnlyAvailable": true
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * OnlyAvailable **required** [Boolean](#boolean)
  * SuggestionCount **required** [Integer](#integer)

#### Output
* output [GetDomainSuggestionsResponse](#getdomainsuggestionsresponse)

### GetOperationDetail



```js
amazonaws_route53domains.GetOperationDetail({
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * OperationId **required** [OperationId](#operationid)

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
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)

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
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### ListTagsForDomain



```js
amazonaws_route53domains.ListTagsForDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [ListTagsForDomainResponse](#listtagsfordomainresponse)

### RegisterDomain



```js
amazonaws_route53domains.RegisterDomain({
  "DomainName": "",
  "DurationInYears": 0,
  "AdminContact": {},
  "RegistrantContact": {},
  "TechContact": {}
}, context)
```

#### Input
* input `object`
  * AdminContact **required** [ContactDetail](#contactdetail)
  * AutoRenew [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears **required** [DurationInYears](#durationinyears)
  * IdnLangCode [LangCode](#langcode)
  * PrivacyProtectAdminContact [Boolean](#boolean)
  * PrivacyProtectRegistrantContact [Boolean](#boolean)
  * PrivacyProtectTechContact [Boolean](#boolean)
  * RegistrantContact **required** [ContactDetail](#contactdetail)
  * TechContact **required** [ContactDetail](#contactdetail)

#### Output
* output [RegisterDomainResponse](#registerdomainresponse)

### RenewDomain



```js
amazonaws_route53domains.RenewDomain({
  "DomainName": "",
  "CurrentExpiryYear": 0
}, context)
```

#### Input
* input `object`
  * CurrentExpiryYear **required** [CurrentExpiryYear](#currentexpiryyear)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears [DurationInYears](#durationinyears)

#### Output
* output [RenewDomainResponse](#renewdomainresponse)

### ResendContactReachabilityEmail



```js
amazonaws_route53domains.ResendContactReachabilityEmail({}, context)
```

#### Input
* input `object`
  * domainName [DomainName](#domainname)

#### Output
* output [ResendContactReachabilityEmailResponse](#resendcontactreachabilityemailresponse)

### RetrieveDomainAuthCode



```js
amazonaws_route53domains.RetrieveDomainAuthCode({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [RetrieveDomainAuthCodeResponse](#retrievedomainauthcoderesponse)

### TransferDomain



```js
amazonaws_route53domains.TransferDomain({
  "DomainName": "",
  "DurationInYears": 0,
  "AdminContact": {},
  "RegistrantContact": {},
  "TechContact": {}
}, context)
```

#### Input
* input `object`
  * AdminContact **required** [ContactDetail](#contactdetail)
  * AuthCode [DomainAuthCode](#domainauthcode)
  * AutoRenew [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears **required** [DurationInYears](#durationinyears)
  * IdnLangCode [LangCode](#langcode)
  * Nameservers [NameserverList](#nameserverlist)
  * PrivacyProtectAdminContact [Boolean](#boolean)
  * PrivacyProtectRegistrantContact [Boolean](#boolean)
  * PrivacyProtectTechContact [Boolean](#boolean)
  * RegistrantContact **required** [ContactDetail](#contactdetail)
  * TechContact **required** [ContactDetail](#contactdetail)

#### Output
* output [TransferDomainResponse](#transferdomainresponse)

### UpdateDomainContact



```js
amazonaws_route53domains.UpdateDomainContact({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * AdminContact [ContactDetail](#contactdetail)
  * DomainName **required** [DomainName](#domainname)
  * RegistrantContact [ContactDetail](#contactdetail)
  * TechContact [ContactDetail](#contactdetail)

#### Output
* output [UpdateDomainContactResponse](#updatedomaincontactresponse)

### UpdateDomainContactPrivacy



```js
amazonaws_route53domains.UpdateDomainContactPrivacy({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * AdminPrivacy [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * RegistrantPrivacy [Boolean](#boolean)
  * TechPrivacy [Boolean](#boolean)

#### Output
* output [UpdateDomainContactPrivacyResponse](#updatedomaincontactprivacyresponse)

### UpdateDomainNameservers



```js
amazonaws_route53domains.UpdateDomainNameservers({
  "DomainName": "",
  "Nameservers": []
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * FIAuthKey [FIAuthKey](#fiauthkey)
  * Nameservers **required** [NameserverList](#nameserverlist)

#### Output
* output [UpdateDomainNameserversResponse](#updatedomainnameserversresponse)

### UpdateTagsForDomain



```js
amazonaws_route53domains.UpdateTagsForDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * TagsToUpdate [TagList](#taglist)

#### Output
* output [UpdateTagsForDomainResponse](#updatetagsfordomainresponse)

### ViewBilling



```js
amazonaws_route53domains.ViewBilling({}, context)
```

#### Input
* input `object`
  * End [Timestamp](#timestamp)
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)
  * Start [Timestamp](#timestamp)

#### Output
* output [ViewBillingResponse](#viewbillingresponse)



## Definitions

### AddressLine
* AddressLine `string`

### BillingRecord
* BillingRecord `object`: Information for one billing record.
  * BillDate [Timestamp](#timestamp)
  * DomainName [DomainName](#domainname)
  * InvoiceId [InvoiceId](#invoiceid)
  * Operation [OperationType](#operationtype)
  * Price [Price](#price)

### BillingRecords
* BillingRecords `array`
  * items [BillingRecord](#billingrecord)

### Boolean
* Boolean `boolean`

### CheckDomainAvailabilityRequest
* CheckDomainAvailabilityRequest `object`: The CheckDomainAvailability request contains the following elements.
  * DomainName **required** [DomainName](#domainname)
  * IdnLangCode [LangCode](#langcode)

### CheckDomainAvailabilityResponse
* CheckDomainAvailabilityResponse `object`: The CheckDomainAvailability response includes the following elements.
  * Availability **required** [DomainAvailability](#domainavailability)

### CheckDomainTransferabilityRequest
* CheckDomainTransferabilityRequest `object`: The CheckDomainTransferability request contains the following elements.
  * AuthCode [DomainAuthCode](#domainauthcode)
  * DomainName **required** [DomainName](#domainname)

### CheckDomainTransferabilityResponse
* CheckDomainTransferabilityResponse `object`: The CheckDomainTransferability response includes the following elements.
  * Transferability **required** [DomainTransferability](#domaintransferability)

### City
* City `string`

### ContactDetail
* ContactDetail `object`: ContactDetail includes the following elements.
  * AddressLine1 [AddressLine](#addressline)
  * AddressLine2 [AddressLine](#addressline)
  * City [City](#city)
  * ContactType [ContactType](#contacttype)
  * CountryCode [CountryCode](#countrycode)
  * Email [Email](#email)
  * ExtraParams [ExtraParamList](#extraparamlist)
  * Fax [ContactNumber](#contactnumber)
  * FirstName [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * OrganizationName [ContactName](#contactname)
  * PhoneNumber [ContactNumber](#contactnumber)
  * State [State](#state)
  * ZipCode [ZipCode](#zipcode)

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
  * DomainName **required** [DomainName](#domainname)
  * TagsToDelete **required** [TagKeyList](#tagkeylist)

### DeleteTagsForDomainResponse
* DeleteTagsForDomainResponse `object`

### DisableDomainAutoRenewRequest
* DisableDomainAutoRenewRequest `object`
  * DomainName **required** [DomainName](#domainname)

### DisableDomainAutoRenewResponse
* DisableDomainAutoRenewResponse `object`

### DisableDomainTransferLockRequest
* DisableDomainTransferLockRequest `object`: The DisableDomainTransferLock request includes the following element.
  * DomainName **required** [DomainName](#domainname)

### DisableDomainTransferLockResponse
* DisableDomainTransferLockResponse `object`: The DisableDomainTransferLock response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### DomainAuthCode
* DomainAuthCode `string`

### DomainAvailability
* DomainAvailability `string` (values: AVAILABLE, AVAILABLE_RESERVED, AVAILABLE_PREORDER, UNAVAILABLE, UNAVAILABLE_PREMIUM, UNAVAILABLE_RESTRICTED, RESERVED, DONT_KNOW)

### DomainLimitExceeded
* DomainLimitExceeded `object`: The number of domains has exceeded the allowed threshold for the account.
  * message [ErrorMessage](#errormessage)

### DomainName
* DomainName `string`

### DomainStatus
* DomainStatus `string`

### DomainStatusList
* DomainStatusList `array`
  * items [DomainStatus](#domainstatus)

### DomainSuggestion
* DomainSuggestion `object`: Information about one suggested domain name.
  * Availability [String](#string)
  * DomainName [DomainName](#domainname)

### DomainSuggestionsList
* DomainSuggestionsList `array`
  * items [DomainSuggestion](#domainsuggestion)

### DomainSummary
* DomainSummary `object`: Summary information about one domain.
  * AutoRenew [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * Expiry [Timestamp](#timestamp)
  * TransferLock [Boolean](#boolean)

### DomainSummaryList
* DomainSummaryList `array`
  * items [DomainSummary](#domainsummary)

### DomainTransferability
* DomainTransferability `object`
  * Transferable [Transferable](#transferable)

### DuplicateRequest
* DuplicateRequest `object`: The request is already in progress for the domain.
  * message [ErrorMessage](#errormessage)

### DurationInYears
* DurationInYears `integer`

### Email
* Email `string`

### EnableDomainAutoRenewRequest
* EnableDomainAutoRenewRequest `object`
  * DomainName **required** [DomainName](#domainname)

### EnableDomainAutoRenewResponse
* EnableDomainAutoRenewResponse `object`

### EnableDomainTransferLockRequest
* EnableDomainTransferLockRequest `object`: A request to set the transfer lock for the specified domain.
  * DomainName **required** [DomainName](#domainname)

### EnableDomainTransferLockResponse
* EnableDomainTransferLockResponse `object`: The EnableDomainTransferLock response includes the following elements.
  * OperationId **required** [OperationId](#operationid)

### ErrorMessage
* ErrorMessage `string`

### ExtraParam
* ExtraParam `object`: ExtraParam includes the following elements.
  * Name **required** [ExtraParamName](#extraparamname)
  * Value **required** [ExtraParamValue](#extraparamvalue)

### ExtraParamList
* ExtraParamList `array`
  * items [ExtraParam](#extraparam)

### ExtraParamName
* ExtraParamName `string` (values: DUNS_NUMBER, BRAND_NUMBER, BIRTH_DEPARTMENT, BIRTH_DATE_IN_YYYY_MM_DD, BIRTH_COUNTRY, BIRTH_CITY, DOCUMENT_NUMBER, AU_ID_NUMBER, AU_ID_TYPE, CA_LEGAL_TYPE, CA_BUSINESS_ENTITY_TYPE, ES_IDENTIFICATION, ES_IDENTIFICATION_TYPE, ES_LEGAL_FORM, FI_BUSINESS_NUMBER, FI_ID_NUMBER, FI_NATIONALITY, FI_ORGANIZATION_TYPE, IT_PIN, IT_REGISTRANT_ENTITY_TYPE, RU_PASSPORT_DATA, SE_ID_NUMBER, SG_ID_NUMBER, VAT_NUMBER, UK_CONTACT_TYPE, UK_COMPANY_NUMBER)

### ExtraParamValue
* ExtraParamValue `string`

### FIAuthKey
* FIAuthKey `string`

### GetContactReachabilityStatusRequest
* GetContactReachabilityStatusRequest `object`
  * domainName [DomainName](#domainname)

### GetContactReachabilityStatusResponse
* GetContactReachabilityStatusResponse `object`
  * domainName [DomainName](#domainname)
  * status [ReachabilityStatus](#reachabilitystatus)

### GetDomainDetailRequest
* GetDomainDetailRequest `object`: The GetDomainDetail request includes the following element.
  * DomainName **required** [DomainName](#domainname)

### GetDomainDetailResponse
* GetDomainDetailResponse `object`: The GetDomainDetail response includes the following elements.
  * AbuseContactEmail [Email](#email)
  * AbuseContactPhone [ContactNumber](#contactnumber)
  * AdminContact **required** [ContactDetail](#contactdetail)
  * AdminPrivacy [Boolean](#boolean)
  * AutoRenew [Boolean](#boolean)
  * CreationDate [Timestamp](#timestamp)
  * DnsSec [DNSSec](#dnssec)
  * DomainName **required** [DomainName](#domainname)
  * ExpirationDate [Timestamp](#timestamp)
  * Nameservers **required** [NameserverList](#nameserverlist)
  * RegistrantContact **required** [ContactDetail](#contactdetail)
  * RegistrantPrivacy [Boolean](#boolean)
  * RegistrarName [RegistrarName](#registrarname)
  * RegistrarUrl [RegistrarUrl](#registrarurl)
  * RegistryDomainId [RegistryDomainId](#registrydomainid)
  * Reseller [Reseller](#reseller)
  * StatusList [DomainStatusList](#domainstatuslist)
  * TechContact **required** [ContactDetail](#contactdetail)
  * TechPrivacy [Boolean](#boolean)
  * UpdatedDate [Timestamp](#timestamp)
  * WhoIsServer [RegistrarWhoIsServer](#registrarwhoisserver)

### GetDomainSuggestionsRequest
* GetDomainSuggestionsRequest `object`
  * DomainName **required** [DomainName](#domainname)
  * OnlyAvailable **required** [Boolean](#boolean)
  * SuggestionCount **required** [Integer](#integer)

### GetDomainSuggestionsResponse
* GetDomainSuggestionsResponse `object`
  * SuggestionsList [DomainSuggestionsList](#domainsuggestionslist)

### GetOperationDetailRequest
* GetOperationDetailRequest `object`: The <a>GetOperationDetail</a> request includes the following element.
  * OperationId **required** [OperationId](#operationid)

### GetOperationDetailResponse
* GetOperationDetailResponse `object`: The GetOperationDetail response includes the following elements.
  * DomainName [DomainName](#domainname)
  * Message [ErrorMessage](#errormessage)
  * OperationId [OperationId](#operationid)
  * Status [OperationStatus](#operationstatus)
  * SubmittedDate [Timestamp](#timestamp)
  * Type [OperationType](#operationtype)

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
* InvalidInput `object`: The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.
  * message [ErrorMessage](#errormessage)

### InvoiceId
* InvoiceId `string`

### LangCode
* LangCode `string`

### ListDomainsRequest
* ListDomainsRequest `object`: The ListDomains request includes the following elements.
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)

### ListDomainsResponse
* ListDomainsResponse `object`: The ListDomains response includes the following elements.
  * Domains **required** [DomainSummaryList](#domainsummarylist)
  * NextPageMarker [PageMarker](#pagemarker)

### ListOperationsRequest
* ListOperationsRequest `object`: The ListOperations request includes the following elements.
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)

### ListOperationsResponse
* ListOperationsResponse `object`: The ListOperations response includes the following elements.
  * NextPageMarker [PageMarker](#pagemarker)
  * Operations **required** [OperationSummaryList](#operationsummarylist)

### ListTagsForDomainRequest
* ListTagsForDomainRequest `object`: The ListTagsForDomainRequest includes the following elements.
  * DomainName **required** [DomainName](#domainname)

### ListTagsForDomainResponse
* ListTagsForDomainResponse `object`: The ListTagsForDomain response includes the following elements.
  * TagList **required** [TagList](#taglist)

### Nameserver
* Nameserver `object`: Nameserver includes the following elements.
  * GlueIps [GlueIpList](#glueiplist)
  * Name **required** [HostName](#hostname)

### NameserverList
* NameserverList `array`
  * items [Nameserver](#nameserver)

### OperationId
* OperationId `string`

### OperationLimitExceeded
* OperationLimitExceeded `object`: The number of operations or jobs running exceeded the allowed threshold for the account.
  * message [ErrorMessage](#errormessage)

### OperationStatus
* OperationStatus `string` (values: SUBMITTED, IN_PROGRESS, ERROR, SUCCESSFUL, FAILED)

### OperationSummary
* OperationSummary `object`: OperationSummary includes the following elements.
  * OperationId **required** [OperationId](#operationid)
  * Status **required** [OperationStatus](#operationstatus)
  * SubmittedDate **required** [Timestamp](#timestamp)
  * Type **required** [OperationType](#operationtype)

### OperationSummaryList
* OperationSummaryList `array`
  * items [OperationSummary](#operationsummary)

### OperationType
* OperationType `string` (values: REGISTER_DOMAIN, DELETE_DOMAIN, TRANSFER_IN_DOMAIN, UPDATE_DOMAIN_CONTACT, UPDATE_NAMESERVER, CHANGE_PRIVACY_PROTECTION, DOMAIN_LOCK, ENABLE_AUTORENEW, DISABLE_AUTORENEW, ADD_DNSSEC, REMOVE_DNSSEC, EXPIRE_DOMAIN, TRANSFER_OUT_DOMAIN, CHANGE_DOMAIN_OWNER, RENEW_DOMAIN, PUSH_DOMAIN)

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
  * AdminContact **required** [ContactDetail](#contactdetail)
  * AutoRenew [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears **required** [DurationInYears](#durationinyears)
  * IdnLangCode [LangCode](#langcode)
  * PrivacyProtectAdminContact [Boolean](#boolean)
  * PrivacyProtectRegistrantContact [Boolean](#boolean)
  * PrivacyProtectTechContact [Boolean](#boolean)
  * RegistrantContact **required** [ContactDetail](#contactdetail)
  * TechContact **required** [ContactDetail](#contactdetail)

### RegisterDomainResponse
* RegisterDomainResponse `object`: The RegisterDomain response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### RegistrarName
* RegistrarName `string`

### RegistrarUrl
* RegistrarUrl `string`

### RegistrarWhoIsServer
* RegistrarWhoIsServer `string`

### RegistryDomainId
* RegistryDomainId `string`

### RenewDomainRequest
* RenewDomainRequest `object`: A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
  * CurrentExpiryYear **required** [CurrentExpiryYear](#currentexpiryyear)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears [DurationInYears](#durationinyears)

### RenewDomainResponse
* RenewDomainResponse `object`
  * OperationId **required** [OperationId](#operationid)

### Reseller
* Reseller `string`

### ResendContactReachabilityEmailRequest
* ResendContactReachabilityEmailRequest `object`
  * domainName [DomainName](#domainname)

### ResendContactReachabilityEmailResponse
* ResendContactReachabilityEmailResponse `object`
  * domainName [DomainName](#domainname)
  * emailAddress [Email](#email)
  * isAlreadyVerified [Boolean](#boolean)

### RetrieveDomainAuthCodeRequest
* RetrieveDomainAuthCodeRequest `object`: A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
  * DomainName **required** [DomainName](#domainname)

### RetrieveDomainAuthCodeResponse
* RetrieveDomainAuthCodeResponse `object`: The RetrieveDomainAuthCode response includes the following element.
  * AuthCode **required** [DomainAuthCode](#domainauthcode)

### State
* State `string`

### String
* String `string`

### TLDRulesViolation
* TLDRulesViolation `object`: The top-level domain does not support this operation.
  * message [ErrorMessage](#errormessage)

### Tag
* Tag `object`: Each tag includes the following elements.
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

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
  * AdminContact **required** [ContactDetail](#contactdetail)
  * AuthCode [DomainAuthCode](#domainauthcode)
  * AutoRenew [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * DurationInYears **required** [DurationInYears](#durationinyears)
  * IdnLangCode [LangCode](#langcode)
  * Nameservers [NameserverList](#nameserverlist)
  * PrivacyProtectAdminContact [Boolean](#boolean)
  * PrivacyProtectRegistrantContact [Boolean](#boolean)
  * PrivacyProtectTechContact [Boolean](#boolean)
  * RegistrantContact **required** [ContactDetail](#contactdetail)
  * TechContact **required** [ContactDetail](#contactdetail)

### TransferDomainResponse
* TransferDomainResponse `object`: The TranserDomain response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### Transferable
* Transferable `string` (values: TRANSFERABLE, UNTRANSFERABLE, DONT_KNOW): <p>Whether the domain name can be transferred to Amazon Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Amazon Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Amazon Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl>

### UnsupportedTLD
* UnsupportedTLD `object`: Amazon Route 53 does not support this top-level domain (TLD).
  * message [ErrorMessage](#errormessage)

### UpdateDomainContactPrivacyRequest
* UpdateDomainContactPrivacyRequest `object`: The UpdateDomainContactPrivacy request includes the following elements.
  * AdminPrivacy [Boolean](#boolean)
  * DomainName **required** [DomainName](#domainname)
  * RegistrantPrivacy [Boolean](#boolean)
  * TechPrivacy [Boolean](#boolean)

### UpdateDomainContactPrivacyResponse
* UpdateDomainContactPrivacyResponse `object`: The UpdateDomainContactPrivacy response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### UpdateDomainContactRequest
* UpdateDomainContactRequest `object`: The UpdateDomainContact request includes the following elements.
  * AdminContact [ContactDetail](#contactdetail)
  * DomainName **required** [DomainName](#domainname)
  * RegistrantContact [ContactDetail](#contactdetail)
  * TechContact [ContactDetail](#contactdetail)

### UpdateDomainContactResponse
* UpdateDomainContactResponse `object`: The UpdateDomainContact response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### UpdateDomainNameserversRequest
* UpdateDomainNameserversRequest `object`: <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
  * DomainName **required** [DomainName](#domainname)
  * FIAuthKey [FIAuthKey](#fiauthkey)
  * Nameservers **required** [NameserverList](#nameserverlist)

### UpdateDomainNameserversResponse
* UpdateDomainNameserversResponse `object`: The UpdateDomainNameservers response includes the following element.
  * OperationId **required** [OperationId](#operationid)

### UpdateTagsForDomainRequest
* UpdateTagsForDomainRequest `object`: The UpdateTagsForDomainRequest includes the following elements.
  * DomainName **required** [DomainName](#domainname)
  * TagsToUpdate [TagList](#taglist)

### UpdateTagsForDomainResponse
* UpdateTagsForDomainResponse `object`

### ViewBillingRequest
* ViewBillingRequest `object`: The ViewBilling request includes the following elements.
  * End [Timestamp](#timestamp)
  * Marker [PageMarker](#pagemarker)
  * MaxItems [PageMaxItems](#pagemaxitems)
  * Start [Timestamp](#timestamp)

### ViewBillingResponse
* ViewBillingResponse `object`: The ViewBilling response includes the following elements.
  * BillingRecords [BillingRecords](#billingrecords)
  * NextPageMarker [PageMarker](#pagemarker)

### ZipCode
* ZipCode `string`


