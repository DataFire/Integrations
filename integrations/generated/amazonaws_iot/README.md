# @datafire/amazonaws_iot

Client library for AWS IoT

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_iot
```

```js
let datafire = require('datafire');
let amazonaws_iot = require('@datafire/amazonaws_iot').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_iot: account,
  }
})

amazonaws_iot.AcceptCertificateTransfer({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each thing (Thing Registry), configure logging, and create and manage policies and credentials to authenticate things.</p> <p>For more information about how AWS IoT works, see the <a href="http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p>

## Actions
### AcceptCertificateTransfer
<p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p>


```js
amazonaws_iot.AcceptCertificateTransfer({
  "body": {},
  "certificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the AcceptCertificateTransfer operation.
* certificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RegisterCACertificate
Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field and public key. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.


```js
amazonaws_iot.RegisterCACertificate({
  "body": {
    "caCertificate": "",
    "verificationCertificate": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the RegisterCACertificate operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateCACertificate
Updates a registered CA certificate.


```js
amazonaws_iot.UpdateCACertificate({
  "body": {},
  "caCertificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the UpdateCACertificate operation.
* caCertificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListCACertificates
<p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>


```js
amazonaws_iot.ListCACertificates({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Input for the ListCACertificates operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CancelCertificateTransfer
<p>Cancels a pending transfer for the specified certificate.</p> <p><b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p>


```js
amazonaws_iot.CancelCertificateTransfer({
  "body": {},
  "certificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the CancelCertificateTransfer operation.
* certificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RegisterCertificate
Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.


```js
amazonaws_iot.RegisterCertificate({
  "body": {
    "certificatePem": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the RegisterCertificate operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListCertificates
<p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>


```js
amazonaws_iot.ListCertificates({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListCertificates operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListCertificatesByCA
List the device certificates signed by the specified CA certificate.


```js
amazonaws_iot.ListCertificatesByCA({
  "body": {},
  "caCertificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the ListCertificatesByCA operation.
* caCertificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListOutgoingCertificates
Lists certificates that are being transfered but not yet accepted.


```js
amazonaws_iot.ListOutgoingCertificates({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the ListOutgoingCertificates operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateCertificate
<p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>


```js
amazonaws_iot.UpdateCertificate({
  "body": {},
  "certificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the UpdateCertificate operation.
* certificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeEndpoint
Returns a unique endpoint specific to the AWS account making the call.


```js
amazonaws_iot.DescribeEndpoint({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the DescribeEndpoint operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateKeysAndCertificate
<p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.</p> <p><b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>


```js
amazonaws_iot.CreateKeysAndCertificate({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the CreateKeysAndCertificate operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetLoggingOptions
Sets the logging options.


```js
amazonaws_iot.SetLoggingOptions({
  "body": {
    "loggingOptionsPayload": {
      "roleArn": ""
    }
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the SetLoggingOptions operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPolicies
Lists your policies.


```js
amazonaws_iot.ListPolicies({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListPolicies operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetPolicy
Gets information about the specified policy with the policy document of the default version.


```js
amazonaws_iot.GetPolicy({
  "body": {},
  "policyName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the GetPolicy operation.
* policyName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPolicyVersions
Lists the versions of the specified policy and identifies the default version.


```js
amazonaws_iot.ListPolicyVersions({
  "body": {},
  "policyName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListPolicyVersions operation.
* policyName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetDefaultPolicyVersion
Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.


```js
amazonaws_iot.SetDefaultPolicyVersion({
  "body": {},
  "policyName": "",
  "policyVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the SetDefaultPolicyVersion operation.
* policyName (string) **required**
* policyVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPolicyPrincipals
Lists the principals associated with the specified policy.


```js
amazonaws_iot.ListPolicyPrincipals({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListPolicyPrincipals operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPrincipalPolicies
Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.


```js
amazonaws_iot.ListPrincipalPolicies({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListPrincipalPolicies operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DetachPrincipalPolicy
Removes the specified policy from the specified certificate.


```js
amazonaws_iot.DetachPrincipalPolicy({
  "body": {},
  "policyName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the DetachPrincipalPolicy operation.
* policyName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPrincipalThings
Lists the things associated with the specified principal.


```js
amazonaws_iot.ListPrincipalThings({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListPrincipalThings operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRegistrationCode
Gets a registration code used to register a CA certificate with AWS IoT.


```js
amazonaws_iot.GetRegistrationCode({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input to the GetRegistrationCode operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RejectCertificateTransfer
<p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p>


```js
amazonaws_iot.RejectCertificateTransfer({
  "body": {},
  "certificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the RejectCertificateTransfer operation.
* certificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTopicRules
Lists the rules for the specific topic.


```js
amazonaws_iot.ListTopicRules({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListTopicRules operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ReplaceTopicRule
Replaces the specified rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.


```js
amazonaws_iot.ReplaceTopicRule({
  "body": {
    "topicRulePayload": {
      "sql": "",
      "actions": []
    }
  },
  "ruleName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ReplaceTopicRule operation.
* ruleName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisableTopicRule
Disables the specified rule.


```js
amazonaws_iot.DisableTopicRule({
  "body": {},
  "ruleName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the DisableTopicRuleRequest operation.
* ruleName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### EnableTopicRule
Enables the specified rule.


```js
amazonaws_iot.EnableTopicRule({
  "body": {},
  "ruleName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the EnableTopicRuleRequest operation.
* ruleName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListThingTypes
Lists the existing thing types.


```js
amazonaws_iot.ListThingTypes({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListThingTypes operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeThingType
Gets information about the specified thing type.


```js
amazonaws_iot.DescribeThingType({
  "body": {},
  "thingTypeName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the DescribeThingType operation.
* thingTypeName (string) **required**
* thingTypeName_query (string)
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeprecateThingType
Deprecates a thing type. You can not associate new things with deprecated thing type.


```js
amazonaws_iot.DeprecateThingType({
  "body": {},
  "thingTypeName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the DeprecateThingType operation.
* thingTypeName (string) **required**
* thingTypeName_query (string)
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListThings
Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. 


```js
amazonaws_iot.ListThings({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListThings operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateThing
Updates the data for a thing.


```js
amazonaws_iot.UpdateThing({
  "body": {},
  "thingName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the UpdateThing operation.
* thingName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListThingPrincipals
Lists the principals associated with the specified thing.


```js
amazonaws_iot.ListThingPrincipals({
  "body": {},
  "thingName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the ListThingPrincipal operation.
* thingName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TransferCertificate
<p>Transfers the specified certificate to the specified AWS account.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.</p>


```js
amazonaws_iot.TransferCertificate({
  "body": {},
  "certificateId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the TransferCertificate operation.
* certificateId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

