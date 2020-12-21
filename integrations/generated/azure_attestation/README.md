# @datafire/azure_attestation

Client library for AttestationClient

## Installation and Usage
```bash
npm install --save @datafire/azure_attestation
```
```js
let azure_attestation = require('@datafire/azure_attestation').create({
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

Describes the interface for the per-tenant enclave service.

## Actions

### MetadataConfiguration_Get
Retrieves metadata about the attestation signing keys in use by the  attestation service


```js
azure_attestation.MetadataConfiguration_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Certs_Get
Retrieves attestation signing keys in use by the attestation service


```js
azure_attestation.Certs_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Policy_Get
Retrieves the current policy for a given kind of TEE.


```js
azure_attestation.Policy_Get({
  "api-version": "",
  "tee": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-09-01-preview): Client API version.
  * tee **required** `string` (values: SgxEnclave, OpenEnclave, CyResComponent, AzureGuest): Specifies the trusted execution environment to be used to validate the evidence

#### Output
* output [AttestationPolicy](#attestationpolicy)

### Policy_Reset
Resets the attestation policy for the specified tenant and reverts to the default policy.


```js
azure_attestation.Policy_Reset({
  "api-version": "",
  "tee": "",
  "PolicyJws": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-09-01-preview): Client API version.
  * tee **required** `string` (values: SgxEnclave, OpenEnclave, CyResComponent, AzureGuest): Specifies the trusted execution environment to be used to validate the evidence
  * PolicyJws **required** `string`

#### Output
* output `string`

### Policy_Set
Sets the policy for a given kind of TEE.


```js
azure_attestation.Policy_Set({
  "api-version": "",
  "tee": "",
  "newAttestationPolicy": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-09-01-preview): Client API version.
  * tee **required** `string` (values: SgxEnclave, OpenEnclave, CyResComponent, AzureGuest): Specifies the trusted execution environment to be used to validate the evidence
  * newAttestationPolicy **required** `string`

#### Output
*Output schema unknown*

### Policy_PrepareToSet
Accepts a new policy document and returns a JWT which expresses  used in preparation to set attestation policy.


```js
azure_attestation.Policy_PrepareToSet({
  "api-version": "",
  "tee": "",
  "PolicyJws": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-09-01-preview): Client API version.
  * tee **required** `string` (values: SgxEnclave, OpenEnclave, CyResComponent, AzureGuest): Specifies the trusted execution environment to be used to validate the evidence
  * PolicyJws **required** `string`

#### Output
* output `string`



## Definitions

### AttestationPolicy
* AttestationPolicy `object`
  * policy `string`: String-encoded attestation policy document.

### CloudError
* CloudError `object`: An error response from Attestation.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from Attestation.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * message `string`: A message describing the error, intended to be suitable for displaying in a user interface.


