# @datafire/amazonaws_greengrass

Client library for AWS Greengrass

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_greengrass
```

```js
let datafire = require('datafire');
let amazonaws_greengrass = require('@datafire/amazonaws_greengrass').actions;
let context = new datafire.Context();

amazonaws_greengrass.ListCoreDefinitions({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Actions
### ListCoreDefinitions



```js
amazonaws_greengrass.ListCoreDefinitions({}, context)
```


### UpdateCoreDefinition



```js
amazonaws_greengrass.UpdateCoreDefinition({
  "CoreDefinitionId": ""
}, context)
```

#### Parameters
* CoreDefinitionId (string) **required**

### ListCoreDefinitionVersions



```js
amazonaws_greengrass.ListCoreDefinitionVersions({
  "CoreDefinitionId": ""
}, context)
```

#### Parameters
* CoreDefinitionId (string) **required**

### GetCoreDefinitionVersion



```js
amazonaws_greengrass.GetCoreDefinitionVersion({
  "CoreDefinitionId": "",
  "CoreDefinitionVersionId": ""
}, context)
```

#### Parameters
* CoreDefinitionId (string) **required**
* CoreDefinitionVersionId (string) **required**

### ListDeviceDefinitions



```js
amazonaws_greengrass.ListDeviceDefinitions({}, context)
```


### UpdateDeviceDefinition



```js
amazonaws_greengrass.UpdateDeviceDefinition({
  "DeviceDefinitionId": ""
}, context)
```

#### Parameters
* DeviceDefinitionId (string) **required**

### ListDeviceDefinitionVersions



```js
amazonaws_greengrass.ListDeviceDefinitionVersions({
  "DeviceDefinitionId": ""
}, context)
```

#### Parameters
* DeviceDefinitionId (string) **required**

### GetDeviceDefinitionVersion



```js
amazonaws_greengrass.GetDeviceDefinitionVersion({
  "DeviceDefinitionId": "",
  "DeviceDefinitionVersionId": ""
}, context)
```

#### Parameters
* DeviceDefinitionId (string) **required**
* DeviceDefinitionVersionId (string) **required**

### ListFunctionDefinitions



```js
amazonaws_greengrass.ListFunctionDefinitions({}, context)
```


### UpdateFunctionDefinition



```js
amazonaws_greengrass.UpdateFunctionDefinition({
  "FunctionDefinitionId": ""
}, context)
```

#### Parameters
* FunctionDefinitionId (string) **required**

### ListFunctionDefinitionVersions



```js
amazonaws_greengrass.ListFunctionDefinitionVersions({
  "FunctionDefinitionId": ""
}, context)
```

#### Parameters
* FunctionDefinitionId (string) **required**

### GetFunctionDefinitionVersion



```js
amazonaws_greengrass.GetFunctionDefinitionVersion({
  "FunctionDefinitionId": "",
  "FunctionDefinitionVersionId": ""
}, context)
```

#### Parameters
* FunctionDefinitionId (string) **required**
* FunctionDefinitionVersionId (string) **required**

### ListLoggerDefinitions



```js
amazonaws_greengrass.ListLoggerDefinitions({}, context)
```


### UpdateLoggerDefinition



```js
amazonaws_greengrass.UpdateLoggerDefinition({
  "LoggerDefinitionId": ""
}, context)
```

#### Parameters
* LoggerDefinitionId (string) **required**

### ListLoggerDefinitionVersions



```js
amazonaws_greengrass.ListLoggerDefinitionVersions({
  "LoggerDefinitionId": ""
}, context)
```

#### Parameters
* LoggerDefinitionId (string) **required**

### GetLoggerDefinitionVersion



```js
amazonaws_greengrass.GetLoggerDefinitionVersion({
  "LoggerDefinitionId": "",
  "LoggerDefinitionVersionId": ""
}, context)
```

#### Parameters
* LoggerDefinitionId (string) **required**
* LoggerDefinitionVersionId (string) **required**

### ListSubscriptionDefinitions



```js
amazonaws_greengrass.ListSubscriptionDefinitions({}, context)
```


### UpdateSubscriptionDefinition



```js
amazonaws_greengrass.UpdateSubscriptionDefinition({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Parameters
* SubscriptionDefinitionId (string) **required**

### ListSubscriptionDefinitionVersions



```js
amazonaws_greengrass.ListSubscriptionDefinitionVersions({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Parameters
* SubscriptionDefinitionId (string) **required**

### GetSubscriptionDefinitionVersion



```js
amazonaws_greengrass.GetSubscriptionDefinitionVersion({
  "SubscriptionDefinitionId": "",
  "SubscriptionDefinitionVersionId": ""
}, context)
```

#### Parameters
* SubscriptionDefinitionId (string) **required**
* SubscriptionDefinitionVersionId (string) **required**

### ListGroups



```js
amazonaws_greengrass.ListGroups({}, context)
```


### UpdateGroup



```js
amazonaws_greengrass.UpdateGroup({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### ListGroupCertificateAuthorities



```js
amazonaws_greengrass.ListGroupCertificateAuthorities({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### UpdateGroupCertificateConfiguration



```js
amazonaws_greengrass.UpdateGroupCertificateConfiguration({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### GetGroupCertificateAuthority



```js
amazonaws_greengrass.GetGroupCertificateAuthority({
  "GroupId": "",
  "CertificateAuthorityId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**
* CertificateAuthorityId (string) **required**

### ListDeployments



```js
amazonaws_greengrass.ListDeployments({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### GetDeploymentStatus



```js
amazonaws_greengrass.GetDeploymentStatus({
  "GroupId": "",
  "DeploymentId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**
* DeploymentId (string) **required**

### GetAssociatedRole



```js
amazonaws_greengrass.GetAssociatedRole({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### ListGroupVersions



```js
amazonaws_greengrass.ListGroupVersions({
  "GroupId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**

### GetGroupVersion



```js
amazonaws_greengrass.GetGroupVersion({
  "GroupId": "",
  "GroupVersionId": ""
}, context)
```

#### Parameters
* GroupId (string) **required**
* GroupVersionId (string) **required**

### GetServiceRoleForAccount



```js
amazonaws_greengrass.GetServiceRoleForAccount({}, context)
```


### UpdateConnectivityInfo



```js
amazonaws_greengrass.UpdateConnectivityInfo({
  "ThingName": ""
}, context)
```

#### Parameters
* ThingName (string) **required**

