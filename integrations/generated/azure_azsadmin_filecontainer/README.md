# @datafire/azure_azsadmin_filecontainer

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_filecontainer
```
```js
let azure_azsadmin_filecontainer = require('@datafire/azure_azsadmin_filecontainer').create({
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

Deployment Admin Client.

## Actions

### FileContainers_List
Returns an array of file containers.


```js
azure_azsadmin_filecontainer.FileContainers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [FileContainersList](#filecontainerslist)

### FileContainers_Delete
Delete an existing file container.


```js
azure_azsadmin_filecontainer.FileContainers_Delete({
  "subscriptionId": "",
  "fileContainerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * fileContainerId **required** `string`: The file container identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### FileContainers_Get
Retrieves the specific file container details.


```js
azure_azsadmin_filecontainer.FileContainers_Get({
  "subscriptionId": "",
  "fileContainerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * fileContainerId **required** `string`: The file container identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [FileContainer](#filecontainer)

### FileContainers_Create
Creates a new file container.


```js
azure_azsadmin_filecontainer.FileContainers_Create({
  "subscriptionId": "",
  "fileContainerParameters": {},
  "api-version": "",
  "fileContainerId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * fileContainerParameters **required** [FileContainerParameters](#filecontainerparameters)
  * api-version **required** `string`: Client API Version.
  * fileContainerId **required** `string`: The file container identifier.

#### Output
* output [FileContainer](#filecontainer)



## Definitions

### ErrorInfo
* ErrorInfo `object`: Extended Error Information.
  * code `string`: The error code.
  * details `array`: The detailed error messages.
    * items [ErrorInfo](#errorinfo)
  * message `string`: The error message.

### FileContainer
* FileContainer `object`: File container entity.
  * properties [FileContainerAdminProperties](#filecontaineradminproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### FileContainerAdminProperties
* FileContainerAdminProperties `object`: File Container Properties.
  * error [ErrorInfo](#errorinfo)
  * fileContainerId [FileContainerId](#filecontainerid)
  * postCopyAction [PostCopyAction](#postcopyaction)
  * provisioningState `string`: Provisioning state of the resource.
  * sourceUri [SourceUri](#sourceuri)
  * uri `string`: The file or container Uri. This is read-only property; a user cannot set it.

### FileContainerId
* FileContainerId `string`: File container resource identifier containing product manifest.

### FileContainerParameters
* FileContainerParameters `object`: Parameters for creating a new file container.
  * postCopyAction [PostCopyAction](#postcopyaction)
  * sourceUri [SourceUri](#sourceuri)

### FileContainersList
* FileContainersList `object`: List of file containers.
  * nextLink `string`: Continuation token.
  * value `array`: List of file containers.
    * items [FileContainer](#filecontainer)

### PostCopyAction
* PostCopyAction `string` (values: None, Unzip): Specifies the file post copy action.

### SourceUri
* SourceUri `string`: Specifies The remote file location.


