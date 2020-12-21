# @datafire/postmarkapp_account

Client library for Postmark Account-level API

## Installation and Usage
```bash
npm install --save @datafire/postmarkapp_account
```
```js
let postmarkapp_account = require('@datafire/postmarkapp_account').create();

.then(data => {
  console.log(data);
});
```

## Description

Postmark makes sending and receiving email
incredibly easy. The Account-level API allows users to
configure all Servers, Domains, and Sender Signatures associated
with an Account.


## Actions

### listDomains
List Domains


```js
postmarkapp_account.listDomains({
  "X-Postmark-Account-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * count **required** `integer`: Number of records to return per request. Max 500.
  * offset **required** `integer`: Number of records to skip

#### Output
* output [DomainListingResults](#domainlistingresults)

### createDomain
Create a Domain


```js
postmarkapp_account.createDomain({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * body [DomainCreationModel](#domaincreationmodel)

#### Output
* output [DomainExtendedInformation](#domainextendedinformation)

### deleteDomain
Delete a Domain


```js
postmarkapp_account.deleteDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain that should be deleted by the request.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### getDomain
Get a Domain


```js
postmarkapp_account.getDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain that should be retrieved.

#### Output
* output [DomainExtendedInformation](#domainextendedinformation)

### editDomain
Update a Domain


```js
postmarkapp_account.editDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain that should be modified by the request.
  * body [DomainEditingModel](#domaineditingmodel)

#### Output
* output [DomainExtendedInformation](#domainextendedinformation)

### rotateDKIMKeyForDomain
Creates a new DKIM key to replace your current key. Until the DNS entries are confirmed,
the new values will be in the `DKIMPendingHost` and `DKIMPendingTextValue` fields.
After the new DKIM value is verified in DNS, the pending values will migrate to
`DKIMTextValue` and `DKIMPendingTextValue` and Postmark will begin to sign emails
with the new DKIM key.



```js
postmarkapp_account.rotateDKIMKeyForDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Sender Signature for which a new DKIM Key should be generated.

#### Output
* output [DKIMRotationResponse](#dkimrotationresponse)

### requestDkimVerificationForDomain
Request DNS Verification for DKIM


```js
postmarkapp_account.requestDkimVerificationForDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain for which DKIM DNS records should be verified.

#### Output
* output [DomainExtendedInformation](#domainextendedinformation)

### requestReturnPathVerificationForDomain
Request DNS Verification for Return-Path


```js
postmarkapp_account.requestReturnPathVerificationForDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain for which Return-Path DNS records should be verified.

#### Output
* output [DomainExtendedInformation](#domainextendedinformation)

### requestSPFVerificationForDomain
Request DNS Verification for SPF


```js
postmarkapp_account.requestSPFVerificationForDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * domainid **required** `integer`: The ID for the Domain for which SPF DNS records should be verified.

#### Output
* output [DomainSPFResult](#domainspfresult)

### listSenderSignatures
List Sender Signatures


```js
postmarkapp_account.listSenderSignatures({
  "X-Postmark-Account-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * count **required** `integer`: Number of records to return per request. Max 500.
  * offset **required** `integer`: Number of records to skip

#### Output
* output [SenderListingResults](#senderlistingresults)

### createSenderSignature
Create a Sender Signature


```js
postmarkapp_account.createSenderSignature({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * body [SenderSignatureCreationModel](#sendersignaturecreationmodel)

#### Output
* output [SenderSignatureExtendedInformation](#sendersignatureextendedinformation)

### deleteSenderSignature
Delete a Sender Signature


```js
postmarkapp_account.deleteSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature that should be deleted by the request.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### getSenderSignature
Get a Sender Signature


```js
postmarkapp_account.getSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature that should be retrieved.

#### Output
* output [SenderSignatureExtendedInformation](#sendersignatureextendedinformation)

### editSenderSignature
Update a Sender Signature


```js
postmarkapp_account.editSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature that should be modified by the request.
  * body [SenderSignatureEditingModel](#sendersignatureeditingmodel)

#### Output
* output [SenderSignatureExtendedInformation](#sendersignatureextendedinformation)

### requestNewDKIMKeyForSenderSignature
Requests a new DKIM key to be created. Until the DNS entries are confirmed,
the new values will be in the `DKIMPendingHost` and `DKIMPendingTextValue` fields.
After the new DKIM value is verified in DNS, the pending values will migrate to
`DKIMTextValue` and `DKIMPendingTextValue` and Postmark will begin to sign emails
with the new DKIM key.



```js
postmarkapp_account.requestNewDKIMKeyForSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature for which a new DKIM Key should be generated.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### resendSenderSignatureConfirmationEmail
Resend Signature Confirmation Email


```js
postmarkapp_account.resendSenderSignatureConfirmationEmail({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature that should have its confirmation email resent.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### requestSPFVerificationForSenderSignature
Request DNS Verification for SPF


```js
postmarkapp_account.requestSPFVerificationForSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * signatureid **required** `integer`: The ID for the Sender Signature for which SPF DNS records should be verified.

#### Output
* output [SenderSignatureExtendedInformation](#sendersignatureextendedinformation)

### listServers
List servers


```js
postmarkapp_account.listServers({
  "X-Postmark-Account-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * count **required** `integer`: Number of servers to return per request.
  * offset **required** `integer`: Number of servers to skip.
  * name `string`: Filter by a specific server name

#### Output
* output [ServerListingResponse](#serverlistingresponse)

### createServer
Create a Server


```js
postmarkapp_account.createServer({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * body [CreateServerPayload](#createserverpayload)

#### Output
* output [ExtendedServerInfo](#extendedserverinfo)

### deleteServer
Delete a Server


```js
postmarkapp_account.deleteServer({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * serverid **required** `integer`: The ID of the Server that should be deleted.

#### Output
*Output schema unknown*

### getServerInformation
Get a Server


```js
postmarkapp_account.getServerInformation({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * serverid **required** `integer`: The ID of the Server to get.

#### Output
* output [ExtendedServerInfo](#extendedserverinfo)

### editServerInformation
Edit a Server


```js
postmarkapp_account.editServerInformation({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * serverid **required** `integer`: The ID of the Server to update.
  * body [EditServerPayload](#editserverpayload)

#### Output
* output [ExtendedServerInfo](#extendedserverinfo)

### pushTemplates
Push templates from one server to another


```js
postmarkapp_account.pushTemplates({
  "X-Postmark-Account-Token": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * X-Postmark-Account-Token **required** `string`: The token associated with the Account on which this request will operate.
  * body **required** [TemplatesPushModel](#templatespushmodel)

#### Output
* output [TemplatesPushResponse](#templatespushresponse)



## Definitions

### CreateServerPayload
* CreateServerPayload `object`
  * BounceHookUrl `string`
  * ClickHookUrl `string`
  * Color `string`
  * DeliveryHookUrl `string`
  * InboundDomain `string`
  * InboundHookUrl `string`
  * InboundSpamThreshold `integer`
  * Name `string`
  * OpenHookUrl `string`
  * PostFirstOpenOnly `boolean`
  * RawEmailEnabled `boolean`
  * SmtpApiActivated `boolean`
  * TrackLinks `string` (values: None, HtmlAndTextTracking, HtmlOnlyTracking, TextOnlyTracking)
  * TrackOpens `boolean`

### DKIMRotationResponse
* DKIMRotationResponse `object`
  * DKIMHost `string`
  * DKIMPendingHost `string`
  * DKIMPendingTextValue `string`
  * DKIMRevokedHost `string`
  * DKIMRevokedTextValue `string`
  * DKIMTestValue `string`
  * DKIMUpdateStatus `string`
  * DKIMVerified `boolean`
  * ID `integer`
  * Name `string`
  * SafeToRemoveRevokedKeyFromDNS `boolean`
  * WeakDKIM `boolean`

### DomainCreationModel
* DomainCreationModel `object`
  * Name `string`
  * ReturnPathDomain `string`

### DomainEditingModel
* DomainEditingModel `object`
  * ReturnPathDomain `string`

### DomainExtendedInformation
* DomainExtendedInformation `object`
  * DKIMHost `string`
  * DKIMPendingHost `string`
  * DKIMPendingTextValue `string`
  * DKIMRevokedHost `string`
  * DKIMRevokedTextValue `string`
  * DKIMTestValue `string`
  * DKIMUpdateStatus `string`
  * DKIMVerified `boolean`
  * ID `integer`
  * Name `string`
  * ReturnPathDomain `string`
  * ReturnPathDomainCNAMEValue `string`
  * ReturnPathDomainVerified `boolean`
  * SPFHost `string`
  * SPFTextValue `string`
  * SPFVerified `boolean`
  * SafeToRemoveRevokedKeyFromDNS `boolean`
  * WeakDKIM `boolean`

### DomainInformation
* DomainInformation `object`
  * DKIMVerified `boolean`
  * ID `integer`
  * Name `string`
  * ReturnPathDomainVerified `boolean`
  * SPFVerified `boolean`
  * WeakDKIM `boolean`

### DomainListingResults
* DomainListingResults `object`
  * Domains `array`
    * items [DomainInformation](#domaininformation)
  * TotalCount `integer`

### DomainSPFResult
* DomainSPFResult `object`
  * SPFHost `string`
  * SPFTextValue `string`
  * SPFVerified `boolean`

### EditServerPayload
* EditServerPayload `object`
  * BounceHookUrl `string`
  * ClickHookUrl `string`
  * Color `string`
  * DeliveryHookUrl `string`
  * InboundDomain `string`
  * InboundHookUrl `string`
  * InboundSpamThreshold `integer`
  * Name `string`
  * OpenHookUrl `string`
  * PostFirstOpenOnly `boolean`
  * RawEmailEnabled `boolean`
  * SmtpApiActivated `boolean`
  * TrackLinks `string` (values: None, HtmlAndTextTracking, HtmlOnlyTracking, TextOnlyTracking)
  * TrackOpens `boolean`

### ExtendedServerInfo
* ExtendedServerInfo `object`
  * ApiTokens `array`
    * items `string`
  * BounceHookUrl `string`
  * ClickHookUrl `string`
  * Color `string`
  * DeliveryHookUrl `string`
  * ID `integer`
  * InboundAddress `string`
  * InboundDomain `string`
  * InboundHash `string`
  * InboundHookUrl `string`
  * InboundSpamThreshold `integer`
  * Name `string`
  * OpenHookUrl `string`
  * PostFirstOpenOnly `boolean`
  * RawEmailEnabled `boolean`
  * ServerLink `string`
  * SmtpApiActivated `boolean`
  * TrackLinks `string` (values: None, HtmlAndTextTracking, HtmlOnlyTracking, TextOnlyTracking)
  * TrackOpens `boolean`

### SenderListingResults
* SenderListingResults `object`
  * SenderSignatures `array`
    * items [SenderSignatureInformation](#sendersignatureinformation)
  * TotalCount `integer`

### SenderSignatureCreationModel
* SenderSignatureCreationModel `object`
  * FromEmail `string`
  * Name `string`
  * ReplyToEmail `string`
  * ReturnPathDomain `string`

### SenderSignatureEditingModel
* SenderSignatureEditingModel `object`
  * Name `string`
  * ReplyToEmail `string`
  * ReturnPathDomain `string`

### SenderSignatureExtendedInformation
* SenderSignatureExtendedInformation `object`
  * Confirmed `boolean`
  * DKIMHost `string`
  * DKIMPendingHost `string`
  * DKIMPendingTextValue `string`
  * DKIMRevokedHost `string`
  * DKIMRevokedTextValue `string`
  * DKIMTestValue `string`
  * DKIMUpdateStatus `string`
  * DKIMVerified `boolean`
  * Domain `string`
  * EmailAddress `string`
  * ID `integer`
  * Name `string`
  * ReplyToEmailAddress `string`
  * ReturnPathDomain `string`
  * ReturnPathDomainCNAMEValue `string`
  * ReturnPathDomainVerified `boolean`
  * SPFHost `string`
  * SPFTextValue `string`
  * SPFVerified `boolean`
  * SafeToRemoveRevokedKeyFromDNS `boolean`
  * WeakDKIM `boolean`

### SenderSignatureInformation
* SenderSignatureInformation `object`
  * Confirmed `boolean`
  * Domain `string`
  * EmailAddress `string`
  * ID `integer`
  * Name `string`
  * ReplyToEmailAddress `string`

### ServerListingResponse
* ServerListingResponse `object`: The results of listing servers.
  * Servers `array`
    * items [ExtendedServerInfo](#extendedserverinfo)
  * TotalCount `integer`

### StandardPostmarkResponse
* StandardPostmarkResponse `object`: A Postmark API error.
  * ErrorCode `integer`
  * Message `string`

### TemplatesPushModel
* TemplatesPushModel `object`
  * DestinationServerId `integer`
  * PerformChanges `boolean`
  * SourceServerId `integer`

### TemplatesPushResponse
* TemplatesPushResponse `object`
  * Templates `array`
    * items `object`
      * Action `string`
      * Alias `string`
      * Name `string`
      * TemplateId `integer`
  * TotalCount `integer`


