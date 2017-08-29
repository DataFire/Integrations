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
amazonaws_route53domains.CheckDomainAvailability({}, context)
```


### DeleteTagsForDomain



```js
amazonaws_route53domains.DeleteTagsForDomain({}, context)
```


### DisableDomainAutoRenew



```js
amazonaws_route53domains.DisableDomainAutoRenew({}, context)
```


### DisableDomainTransferLock



```js
amazonaws_route53domains.DisableDomainTransferLock({}, context)
```


### EnableDomainAutoRenew



```js
amazonaws_route53domains.EnableDomainAutoRenew({}, context)
```


### EnableDomainTransferLock



```js
amazonaws_route53domains.EnableDomainTransferLock({}, context)
```


### GetContactReachabilityStatus



```js
amazonaws_route53domains.GetContactReachabilityStatus({}, context)
```


### GetDomainDetail



```js
amazonaws_route53domains.GetDomainDetail({}, context)
```


### GetDomainSuggestions



```js
amazonaws_route53domains.GetDomainSuggestions({}, context)
```


### GetOperationDetail



```js
amazonaws_route53domains.GetOperationDetail({}, context)
```


### ListDomains



```js
amazonaws_route53domains.ListDomains({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListOperations



```js
amazonaws_route53domains.ListOperations({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListTagsForDomain



```js
amazonaws_route53domains.ListTagsForDomain({}, context)
```


### RegisterDomain



```js
amazonaws_route53domains.RegisterDomain({}, context)
```


### RenewDomain



```js
amazonaws_route53domains.RenewDomain({}, context)
```


### ResendContactReachabilityEmail



```js
amazonaws_route53domains.ResendContactReachabilityEmail({}, context)
```


### RetrieveDomainAuthCode



```js
amazonaws_route53domains.RetrieveDomainAuthCode({}, context)
```


### TransferDomain



```js
amazonaws_route53domains.TransferDomain({}, context)
```


### UpdateDomainContact



```js
amazonaws_route53domains.UpdateDomainContact({}, context)
```


### UpdateDomainContactPrivacy



```js
amazonaws_route53domains.UpdateDomainContactPrivacy({}, context)
```


### UpdateDomainNameservers



```js
amazonaws_route53domains.UpdateDomainNameservers({}, context)
```


### UpdateTagsForDomain



```js
amazonaws_route53domains.UpdateTagsForDomain({}, context)
```


### ViewBilling



```js
amazonaws_route53domains.ViewBilling({}, context)
```


