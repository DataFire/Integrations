# @datafire/amazonaws_route53domains

Client library for Amazon Route 53 Domains

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_route53domains
```

```js
let datafire = require('datafire');
let amazonaws_route53domains = require('@datafire/amazonaws_route53domains').actions;
let context = new datafire.Context();

amazonaws_route53domains.CheckDomainAvailability({}, context).then(data => {
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

#### Parameters

### DeleteTagsForDomain



```js
amazonaws_route53domains.DeleteTagsForDomain({}, context)
```

#### Parameters

### DisableDomainAutoRenew



```js
amazonaws_route53domains.DisableDomainAutoRenew({}, context)
```

#### Parameters

### DisableDomainTransferLock



```js
amazonaws_route53domains.DisableDomainTransferLock({}, context)
```

#### Parameters

### EnableDomainAutoRenew



```js
amazonaws_route53domains.EnableDomainAutoRenew({}, context)
```

#### Parameters

### EnableDomainTransferLock



```js
amazonaws_route53domains.EnableDomainTransferLock({}, context)
```

#### Parameters

### GetContactReachabilityStatus



```js
amazonaws_route53domains.GetContactReachabilityStatus({}, context)
```

#### Parameters

### GetDomainDetail



```js
amazonaws_route53domains.GetDomainDetail({}, context)
```

#### Parameters

### GetDomainSuggestions



```js
amazonaws_route53domains.GetDomainSuggestions({}, context)
```

#### Parameters

### GetOperationDetail



```js
amazonaws_route53domains.GetOperationDetail({}, context)
```

#### Parameters

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

#### Parameters

### RegisterDomain



```js
amazonaws_route53domains.RegisterDomain({}, context)
```

#### Parameters

### RenewDomain



```js
amazonaws_route53domains.RenewDomain({}, context)
```

#### Parameters

### ResendContactReachabilityEmail



```js
amazonaws_route53domains.ResendContactReachabilityEmail({}, context)
```

#### Parameters

### RetrieveDomainAuthCode



```js
amazonaws_route53domains.RetrieveDomainAuthCode({}, context)
```

#### Parameters

### TransferDomain



```js
amazonaws_route53domains.TransferDomain({}, context)
```

#### Parameters

### UpdateDomainContact



```js
amazonaws_route53domains.UpdateDomainContact({}, context)
```

#### Parameters

### UpdateDomainContactPrivacy



```js
amazonaws_route53domains.UpdateDomainContactPrivacy({}, context)
```

#### Parameters

### UpdateDomainNameservers



```js
amazonaws_route53domains.UpdateDomainNameservers({}, context)
```

#### Parameters

### UpdateTagsForDomain



```js
amazonaws_route53domains.UpdateTagsForDomain({}, context)
```

#### Parameters

### ViewBilling



```js
amazonaws_route53domains.ViewBilling({}, context)
```

#### Parameters

