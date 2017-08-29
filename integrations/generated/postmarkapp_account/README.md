# @datafire/postmarkapp_account

Client library for Postmark Account-level

## Installation and Usage
```bash
npm install --save datafire @datafire/postmarkapp_account
```

```js
let datafire = require('datafire');
let postmarkapp_account = require('@datafire/postmarkapp_account').create();

postmarkapp_account.listDomains({}).then(data => {
  console.log(data);
})
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

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* count (integer) **required** - Number of records to return per request. Max 500.
* offset (integer) **required** - Number of records to skip

### createDomain
Create a Domain


```js
postmarkapp_account.createDomain({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* body (undefined)

### deleteDomain
Delete a Domain


```js
postmarkapp_account.deleteDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* domainid (integer) **required** - The ID for the Domain that should be deleted by the request.

### getDomain
Get a Domain


```js
postmarkapp_account.getDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* domainid (integer) **required** - The ID for the Domain that should be retrieved.

### editDomain
Update a Domain


```js
postmarkapp_account.editDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* domainid (integer) **required** - The ID for the Domain that should be modified by the request.
* body (undefined)

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

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* domainid (integer) **required** - The ID for the Sender Signature for which a new DKIM Key should be generated.

### requestSPFVerificationForDomain
Request DNS Verification for SPF


```js
postmarkapp_account.requestSPFVerificationForDomain({
  "X-Postmark-Account-Token": "",
  "domainid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* domainid (integer) **required** - The ID for the Domain for which SPF DNS records should be verified.

### listSenderSignatures
List Sender Signatures


```js
postmarkapp_account.listSenderSignatures({
  "X-Postmark-Account-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* count (integer) **required** - Number of records to return per request. Max 500.
* offset (integer) **required** - Number of records to skip

### createSenderSignature
Create a Sender Signature


```js
postmarkapp_account.createSenderSignature({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* body (undefined)

### deleteSenderSignature
Delete a Sender Signature


```js
postmarkapp_account.deleteSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature that should be deleted by the request.

### getSenderSignature
Get a Sender Signature


```js
postmarkapp_account.getSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature that should be retrieved.

### editSenderSignature
Update a Sender Signature


```js
postmarkapp_account.editSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature that should be modified by the request.
* body (undefined)

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

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature for which a new DKIM Key should be generated.

### resendSenderSignatureConfirmationEmail
Resend Signature Confirmation Email


```js
postmarkapp_account.resendSenderSignatureConfirmationEmail({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature that should have its confirmation email resent.

### requestSPFVerificationForSenderSignature
Request DNS Verification for SPF


```js
postmarkapp_account.requestSPFVerificationForSenderSignature({
  "X-Postmark-Account-Token": "",
  "signatureid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* signatureid (integer) **required** - The ID for the Sender Signature for which SPF DNS records should be verified.

### listServers
List servers


```js
postmarkapp_account.listServers({
  "X-Postmark-Account-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* count (integer) **required** - Number of servers to return per request.
* offset (integer) **required** - Number of servers to skip.
* name (string) - Filter by a specific server name

### createServer
Create a Server


```js
postmarkapp_account.createServer({
  "X-Postmark-Account-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* body (undefined)

### deleteServer
Delete a Server


```js
postmarkapp_account.deleteServer({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* serverid (integer) **required** - The ID of the Server that should be deleted.

### getServerInformation
Get a Server


```js
postmarkapp_account.getServerInformation({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* serverid (integer) **required** - The ID of the Server to get.

### editServerInformation
Edit a Server


```js
postmarkapp_account.editServerInformation({
  "X-Postmark-Account-Token": "",
  "serverid": 0
}, context)
```

#### Parameters
* X-Postmark-Account-Token (string) **required** - The token associated with the Account on which this request will operate.
* serverid (integer) **required** - The ID of the Server to update.
* body (undefined)

