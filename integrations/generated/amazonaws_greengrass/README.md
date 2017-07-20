# @datafire/amazonaws_greengrass

Client library for AWS Greengrass

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_greengrass
```

```js
let datafire = require('datafire');
let amazonaws_greengrass = require('@datafire/amazonaws_greengrass').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_greengrass: account,
  }
})

amazonaws_greengrass.ListCoreDefinitions({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Actions
### ListCoreDefinitions
Retrieves a list of core definitions.


```js
amazonaws_greengrass.ListCoreDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateCoreDefinition
Updates a core definition.


```js
amazonaws_greengrass.UpdateCoreDefinition({
  "body": {},
  "CoreDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* CoreDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListCoreDefinitionVersions
Lists versions of a core definition.


```js
amazonaws_greengrass.ListCoreDefinitionVersions({
  "body": {},
  "CoreDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* CoreDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCoreDefinitionVersion
Retrieves information about a core definition version.


```js
amazonaws_greengrass.GetCoreDefinitionVersion({
  "body": {},
  "CoreDefinitionId": "",
  "CoreDefinitionVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* CoreDefinitionId (string) **required**
* CoreDefinitionVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDeviceDefinitions
Retrieves a list of device definitions.


```js
amazonaws_greengrass.ListDeviceDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDeviceDefinition
Updates a device definition.


```js
amazonaws_greengrass.UpdateDeviceDefinition({
  "body": {},
  "DeviceDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DeviceDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDeviceDefinitionVersions
Lists the versions of a device definition.


```js
amazonaws_greengrass.ListDeviceDefinitionVersions({
  "body": {},
  "DeviceDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DeviceDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDeviceDefinitionVersion
Retrieves information about a device definition version.


```js
amazonaws_greengrass.GetDeviceDefinitionVersion({
  "body": {},
  "DeviceDefinitionId": "",
  "DeviceDefinitionVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DeviceDefinitionId (string) **required**
* DeviceDefinitionVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListFunctionDefinitions
Retrieves a list of Lambda function definitions.


```js
amazonaws_greengrass.ListFunctionDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateFunctionDefinition
Updates a Lambda function definition.


```js
amazonaws_greengrass.UpdateFunctionDefinition({
  "body": {},
  "FunctionDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* FunctionDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListFunctionDefinitionVersions
Lists the versions of a Lambda function definition.


```js
amazonaws_greengrass.ListFunctionDefinitionVersions({
  "body": {},
  "FunctionDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* FunctionDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetFunctionDefinitionVersion
Retrieves information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.


```js
amazonaws_greengrass.GetFunctionDefinitionVersion({
  "body": {},
  "FunctionDefinitionId": "",
  "FunctionDefinitionVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* FunctionDefinitionId (string) **required**
* FunctionDefinitionVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListLoggerDefinitions
Retrieves a list of logger definitions.


```js
amazonaws_greengrass.ListLoggerDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateLoggerDefinition
Updates a logger definition.


```js
amazonaws_greengrass.UpdateLoggerDefinition({
  "body": {},
  "LoggerDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* LoggerDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListLoggerDefinitionVersions
Lists the versions of a logger definition.


```js
amazonaws_greengrass.ListLoggerDefinitionVersions({
  "body": {},
  "LoggerDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* LoggerDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetLoggerDefinitionVersion
Retrieves information about a logger definition version.


```js
amazonaws_greengrass.GetLoggerDefinitionVersion({
  "body": {},
  "LoggerDefinitionId": "",
  "LoggerDefinitionVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* LoggerDefinitionId (string) **required**
* LoggerDefinitionVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListSubscriptionDefinitions
Retrieves a list of subscription definitions.


```js
amazonaws_greengrass.ListSubscriptionDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateSubscriptionDefinition
Updates a subscription definition.


```js
amazonaws_greengrass.UpdateSubscriptionDefinition({
  "body": {},
  "SubscriptionDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* SubscriptionDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListSubscriptionDefinitionVersions
Lists the versions of a subscription definition.


```js
amazonaws_greengrass.ListSubscriptionDefinitionVersions({
  "body": {},
  "SubscriptionDefinitionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* SubscriptionDefinitionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSubscriptionDefinitionVersion
Retrieves information about a subscription definition version.


```js
amazonaws_greengrass.GetSubscriptionDefinitionVersion({
  "body": {},
  "SubscriptionDefinitionId": "",
  "SubscriptionDefinitionVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* SubscriptionDefinitionId (string) **required**
* SubscriptionDefinitionVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListGroups
Retrieves a list of groups.


```js
amazonaws_greengrass.ListGroups({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGroup
Updates a group.


```js
amazonaws_greengrass.UpdateGroup({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListGroupCertificateAuthorities
Retrieves the current CAs for a group.


```js
amazonaws_greengrass.ListGroupCertificateAuthorities({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGroupCertificateConfiguration
Updates the Cert expiry time for a group.


```js
amazonaws_greengrass.UpdateGroupCertificateConfiguration({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetGroupCertificateAuthority
Retreives the CA associated with a group. Returns the public key of the CA.


```js
amazonaws_greengrass.GetGroupCertificateAuthority({
  "body": {},
  "GroupId": "",
  "CertificateAuthorityId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* CertificateAuthorityId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDeployments
Returns a history of deployments for the group.


```js
amazonaws_greengrass.ListDeployments({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDeploymentStatus
Returns the status of a deployment.


```js
amazonaws_greengrass.GetDeploymentStatus({
  "body": {},
  "GroupId": "",
  "DeploymentId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* DeploymentId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetAssociatedRole
Retrieves the role associated with a particular group.


```js
amazonaws_greengrass.GetAssociatedRole({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListGroupVersions
List the versions of a group.


```js
amazonaws_greengrass.ListGroupVersions({
  "body": {},
  "GroupId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetGroupVersion
Retrieves information about a group version.


```js
amazonaws_greengrass.GetGroupVersion({
  "body": {},
  "GroupId": "",
  "GroupVersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* GroupId (string) **required**
* GroupVersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetServiceRoleForAccount
Retrieves the service role that is attached to the account.


```js
amazonaws_greengrass.GetServiceRoleForAccount({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateConnectivityInfo
Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.


```js
amazonaws_greengrass.UpdateConnectivityInfo({
  "body": {},
  "ThingName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - connectivity info request
* ThingName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

