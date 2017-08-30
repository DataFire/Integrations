# @datafire/amazonaws_route53domains

Client library for Amazon Route 53 Domains

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_route53domains
```

```js
let datafire = require('datafire');
let amazonaws_route53domains = require('@datafire/amazonaws_route53domains').create();

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

#### Parameters
* DomainName (string) **required**
* IdnLangCode (string)

### DeleteTagsForDomain



```js
amazonaws_route53domains.DeleteTagsForDomain({
  "DomainName": "",
  "TagsToDelete": []
}, context)
```

#### Parameters
* DomainName (string) **required**
* TagsToDelete (array) **required**

### DisableDomainAutoRenew



```js
amazonaws_route53domains.DisableDomainAutoRenew({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### DisableDomainTransferLock



```js
amazonaws_route53domains.DisableDomainTransferLock({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### EnableDomainAutoRenew



```js
amazonaws_route53domains.EnableDomainAutoRenew({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### EnableDomainTransferLock



```js
amazonaws_route53domains.EnableDomainTransferLock({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### GetContactReachabilityStatus



```js
amazonaws_route53domains.GetContactReachabilityStatus({}, context)
```

#### Parameters
* domainName (string)

### GetDomainDetail



```js
amazonaws_route53domains.GetDomainDetail({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### GetDomainSuggestions



```js
amazonaws_route53domains.GetDomainSuggestions({
  "DomainName": "",
  "SuggestionCount": 0,
  "OnlyAvailable": true
}, context)
```

#### Parameters
* DomainName (string) **required**
* OnlyAvailable (boolean) **required**
* SuggestionCount (integer) **required**

### GetOperationDetail



```js
amazonaws_route53domains.GetOperationDetail({
  "OperationId": ""
}, context)
```

#### Parameters
* OperationId (string) **required**

### ListDomains



```js
amazonaws_route53domains.ListDomains({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)

### ListOperations



```js
amazonaws_route53domains.ListOperations({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)

### ListTagsForDomain



```js
amazonaws_route53domains.ListTagsForDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

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

#### Parameters
* AdminContact (object) **required** - ContactDetail includes the following elements.
* AutoRenew (boolean)
* DomainName (string) **required**
* DurationInYears (integer) **required**
* IdnLangCode (string)
* PrivacyProtectAdminContact (boolean)
* PrivacyProtectRegistrantContact (boolean)
* PrivacyProtectTechContact (boolean)
* RegistrantContact (object) **required** - ContactDetail includes the following elements.
* TechContact (object) **required** - ContactDetail includes the following elements.

### RenewDomain



```js
amazonaws_route53domains.RenewDomain({
  "DomainName": "",
  "CurrentExpiryYear": 0
}, context)
```

#### Parameters
* CurrentExpiryYear (integer) **required**
* DomainName (string) **required**
* DurationInYears (integer)

### ResendContactReachabilityEmail



```js
amazonaws_route53domains.ResendContactReachabilityEmail({}, context)
```

#### Parameters
* domainName (string)

### RetrieveDomainAuthCode



```js
amazonaws_route53domains.RetrieveDomainAuthCode({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

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

#### Parameters
* AdminContact (object) **required** - ContactDetail includes the following elements.
* AuthCode (string)
* AutoRenew (boolean)
* DomainName (string) **required**
* DurationInYears (integer) **required**
* IdnLangCode (string)
* Nameservers (array)
* PrivacyProtectAdminContact (boolean)
* PrivacyProtectRegistrantContact (boolean)
* PrivacyProtectTechContact (boolean)
* RegistrantContact (object) **required** - ContactDetail includes the following elements.
* TechContact (object) **required** - ContactDetail includes the following elements.

### UpdateDomainContact



```js
amazonaws_route53domains.UpdateDomainContact({
  "DomainName": ""
}, context)
```

#### Parameters
* AdminContact (object) - ContactDetail includes the following elements.
* DomainName (string) **required**
* RegistrantContact (object) - ContactDetail includes the following elements.
* TechContact (object) - ContactDetail includes the following elements.

### UpdateDomainContactPrivacy



```js
amazonaws_route53domains.UpdateDomainContactPrivacy({
  "DomainName": ""
}, context)
```

#### Parameters
* AdminPrivacy (boolean)
* DomainName (string) **required**
* RegistrantPrivacy (boolean)
* TechPrivacy (boolean)

### UpdateDomainNameservers



```js
amazonaws_route53domains.UpdateDomainNameservers({
  "DomainName": "",
  "Nameservers": []
}, context)
```

#### Parameters
* DomainName (string) **required**
* FIAuthKey (string)
* Nameservers (array) **required**

### UpdateTagsForDomain



```js
amazonaws_route53domains.UpdateTagsForDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**
* TagsToUpdate (array)

### ViewBilling



```js
amazonaws_route53domains.ViewBilling({}, context)
```

#### Parameters
* End (string)
* Marker (string)
* MaxItems (integer)
* Start (string)

