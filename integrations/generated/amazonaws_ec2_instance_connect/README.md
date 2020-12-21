# @datafire/amazonaws_ec2_instance_connect

Client library for AWS EC2 Instance Connect

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ec2_instance_connect
```
```js
let amazonaws_ec2_instance_connect = require('@datafire/amazonaws_ec2_instance_connect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS EC2 Connect Service is a service that enables system administrators to publish temporary SSH keys to their EC2 instances in order to establish connections to their instances without leaving a permanent authentication option.

## Actions

### SendSSHPublicKey



```js
amazonaws_ec2_instance_connect.SendSSHPublicKey({
  "InstanceId": null,
  "InstanceOSUser": null,
  "SSHPublicKey": null,
  "AvailabilityZone": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required**
  * InstanceId **required**
  * InstanceOSUser **required**
  * SSHPublicKey **required**

#### Output
* output [SendSSHPublicKeyResponse](#sendsshpublickeyresponse)



## Definitions

### AuthException


### AvailabilityZone
* AvailabilityZone `string`

### EC2InstanceNotFoundException


### InstanceId
* InstanceId `string`

### InstanceOSUser
* InstanceOSUser `string`

### InvalidArgsException


### RequestId
* RequestId `string`

### SSHPublicKey
* SSHPublicKey `string`

### SendSSHPublicKeyRequest
* SendSSHPublicKeyRequest `object`
  * AvailabilityZone **required**
  * InstanceId **required**
  * InstanceOSUser **required**
  * SSHPublicKey **required**

### SendSSHPublicKeyResponse
* SendSSHPublicKeyResponse `object`
  * RequestId
  * Success

### ServiceException


### Success
* Success `boolean`

### ThrottlingException



