# @datafire/amazonaws_iot

Client library for AWS IoT

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_iot
```

```js
let datafire = require('datafire');
let amazonaws_iot = require('@datafire/amazonaws_iot').create();

amazonaws_iot.AcceptCertificateTransfer({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each thing (Thing Registry), configure logging, and create and manage policies and credentials to authenticate things.</p> <p>For more information about how AWS IoT works, see the <a href="http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p>

## Actions
### AcceptCertificateTransfer



```js
amazonaws_iot.AcceptCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Parameters
* certificateId (string) **required**

### RegisterCACertificate



```js
amazonaws_iot.RegisterCACertificate({
  "caCertificate": "",
  "verificationCertificate": ""
}, context)
```

#### Parameters
* caCertificate (string) **required**
* verificationCertificate (string) **required**

### UpdateCACertificate



```js
amazonaws_iot.UpdateCACertificate({
  "caCertificateId": ""
}, context)
```

#### Parameters
* caCertificateId (string) **required**

### ListCACertificates



```js
amazonaws_iot.ListCACertificates({}, context)
```

#### Parameters
*This action has no parameters*

### CancelCertificateTransfer



```js
amazonaws_iot.CancelCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Parameters
* certificateId (string) **required**

### RegisterCertificate



```js
amazonaws_iot.RegisterCertificate({
  "certificatePem": ""
}, context)
```

#### Parameters
* caCertificatePem (string)
* certificatePem (string) **required**
* status (string)

### ListCertificates



```js
amazonaws_iot.ListCertificates({}, context)
```

#### Parameters
*This action has no parameters*

### ListCertificatesByCA



```js
amazonaws_iot.ListCertificatesByCA({
  "caCertificateId": ""
}, context)
```

#### Parameters
* caCertificateId (string) **required**

### ListOutgoingCertificates



```js
amazonaws_iot.ListOutgoingCertificates({}, context)
```

#### Parameters
*This action has no parameters*

### UpdateCertificate



```js
amazonaws_iot.UpdateCertificate({
  "certificateId": ""
}, context)
```

#### Parameters
* certificateId (string) **required**

### DescribeEndpoint



```js
amazonaws_iot.DescribeEndpoint({}, context)
```

#### Parameters
*This action has no parameters*

### CreateKeysAndCertificate



```js
amazonaws_iot.CreateKeysAndCertificate({}, context)
```

#### Parameters
*This action has no parameters*

### SetLoggingOptions



```js
amazonaws_iot.SetLoggingOptions({
  "loggingOptionsPayload": {
    "roleArn": ""
  }
}, context)
```

#### Parameters
* loggingOptionsPayload (object) **required** - Describes the logging options payload.

### ListPolicies



```js
amazonaws_iot.ListPolicies({}, context)
```

#### Parameters
*This action has no parameters*

### GetPolicy



```js
amazonaws_iot.GetPolicy({
  "policyName": ""
}, context)
```

#### Parameters
* policyName (string) **required**

### ListPolicyVersions



```js
amazonaws_iot.ListPolicyVersions({
  "policyName": ""
}, context)
```

#### Parameters
* policyName (string) **required**

### SetDefaultPolicyVersion



```js
amazonaws_iot.SetDefaultPolicyVersion({
  "policyName": "",
  "policyVersionId": ""
}, context)
```

#### Parameters
* policyName (string) **required**
* policyVersionId (string) **required**

### ListPolicyPrincipals



```js
amazonaws_iot.ListPolicyPrincipals({}, context)
```

#### Parameters
*This action has no parameters*

### ListPrincipalPolicies



```js
amazonaws_iot.ListPrincipalPolicies({}, context)
```

#### Parameters
*This action has no parameters*

### DetachPrincipalPolicy



```js
amazonaws_iot.DetachPrincipalPolicy({
  "policyName": ""
}, context)
```

#### Parameters
* policyName (string) **required**

### ListPrincipalThings



```js
amazonaws_iot.ListPrincipalThings({}, context)
```

#### Parameters
*This action has no parameters*

### GetRegistrationCode



```js
amazonaws_iot.GetRegistrationCode({}, context)
```

#### Parameters
*This action has no parameters*

### RejectCertificateTransfer



```js
amazonaws_iot.RejectCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Parameters
* certificateId (string) **required**
* rejectReason (string)

### ListTopicRules



```js
amazonaws_iot.ListTopicRules({}, context)
```

#### Parameters
*This action has no parameters*

### ReplaceTopicRule



```js
amazonaws_iot.ReplaceTopicRule({
  "ruleName": "",
  "topicRulePayload": {
    "sql": "",
    "actions": []
  }
}, context)
```

#### Parameters
* ruleName (string) **required**
* topicRulePayload (object) **required** - Describes a rule.

### DisableTopicRule



```js
amazonaws_iot.DisableTopicRule({
  "ruleName": ""
}, context)
```

#### Parameters
* ruleName (string) **required**

### EnableTopicRule



```js
amazonaws_iot.EnableTopicRule({
  "ruleName": ""
}, context)
```

#### Parameters
* ruleName (string) **required**

### ListThingTypes



```js
amazonaws_iot.ListThingTypes({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeThingType



```js
amazonaws_iot.DescribeThingType({
  "thingTypeName": ""
}, context)
```

#### Parameters
* thingTypeName (string) **required**

### DeprecateThingType



```js
amazonaws_iot.DeprecateThingType({
  "thingTypeName": ""
}, context)
```

#### Parameters
* thingTypeName (string) **required**
* undoDeprecate (boolean)

### ListThings



```js
amazonaws_iot.ListThings({}, context)
```

#### Parameters
*This action has no parameters*

### UpdateThing



```js
amazonaws_iot.UpdateThing({
  "thingName": ""
}, context)
```

#### Parameters
* thingName (string) **required**
* attributePayload (object) - The attribute payload.
* expectedVersion (integer)
* removeThingType (boolean)
* thingTypeName (string)

### ListThingPrincipals



```js
amazonaws_iot.ListThingPrincipals({
  "thingName": ""
}, context)
```

#### Parameters
* thingName (string) **required**

### TransferCertificate



```js
amazonaws_iot.TransferCertificate({
  "certificateId": ""
}, context)
```

#### Parameters
* certificateId (string) **required**
* transferMessage (string)

