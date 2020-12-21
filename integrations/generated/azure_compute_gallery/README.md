# @datafire/azure_compute_gallery

Client library for SharedImageGalleryServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute_gallery
```
```js
let azure_compute_gallery = require('@datafire/azure_compute_gallery').create({
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

Shared Image Gallery Service Client.

## Actions

### Galleries_List
List galleries under a subscription.


```js
azure_compute_gallery.Galleries_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryList](#gallerylist)

### Galleries_ListByResourceGroup
List galleries under a resource group.


```js
azure_compute_gallery.Galleries_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryList](#gallerylist)

### Galleries_Delete
Delete a Shared Image Gallery.


```js
azure_compute_gallery.Galleries_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery to be deleted.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Galleries_Get
Retrieves information about a Shared Image Gallery.


```js
azure_compute_gallery.Galleries_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Gallery](#gallery)

### Galleries_Update
Update a Shared Image Gallery.


```js
azure_compute_gallery.Galleries_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": "",
  "gallery": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * gallery **required** [GalleryUpdate](#galleryupdate)

#### Output
* output [Gallery](#gallery)

### Galleries_CreateOrUpdate
Create or update a Shared Image Gallery.


```js
azure_compute_gallery.Galleries_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": "",
  "gallery": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * gallery **required** [Gallery](#gallery)

#### Output
* output [Gallery](#gallery)

### GalleryApplications_ListByGallery
List gallery Application Definitions in a gallery.


```js
azure_compute_gallery.GalleryApplications_ListByGallery({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery from which Application Definitions are to be listed.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryApplicationList](#galleryapplicationlist)

### GalleryApplications_Delete
Delete a gallery Application.


```js
azure_compute_gallery.GalleryApplications_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition is to be deleted.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition to be deleted.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GalleryApplications_Get
Retrieves information about a gallery Application Definition.


```js
azure_compute_gallery.GalleryApplications_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery from which the Application Definitions are to be retrieved.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition to be retrieved.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryApplication](#galleryapplication)

### GalleryApplications_Update
Update a gallery Application Definition.


```js
azure_compute_gallery.GalleryApplications_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "api-version": "",
  "galleryApplication": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition is to be updated.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * galleryApplication **required** [GalleryApplicationUpdate](#galleryapplicationupdate)

#### Output
* output [GalleryApplication](#galleryapplication)

### GalleryApplications_CreateOrUpdate
Create or update a gallery Application Definition.


```js
azure_compute_gallery.GalleryApplications_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "api-version": "",
  "galleryApplication": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition is to be created.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * galleryApplication **required** [GalleryApplication](#galleryapplication)

#### Output
* output [GalleryApplication](#galleryapplication)

### GalleryApplicationVersions_ListByGalleryApplication
List gallery Application Versions in a gallery Application Definition.


```js
azure_compute_gallery.GalleryApplicationVersions_ListByGalleryApplication({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition resides.
  * galleryApplicationName **required** `string`: The name of the Shared Application Gallery Application Definition from which the Application Versions are to be listed.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryApplicationVersionList](#galleryapplicationversionlist)

### GalleryApplicationVersions_Delete
Delete a gallery Application Version.


```js
azure_compute_gallery.GalleryApplicationVersions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "galleryApplicationVersionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition resides.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition in which the Application Version resides.
  * galleryApplicationVersionName **required** `string`: The name of the gallery Application Version to be deleted.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GalleryApplicationVersions_Get
Retrieves information about a gallery Application Version.


```js
azure_compute_gallery.GalleryApplicationVersions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "galleryApplicationVersionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition resides.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition in which the Application Version resides.
  * galleryApplicationVersionName **required** `string`: The name of the gallery Application Version to be retrieved.
  * $expand `string` (values: ReplicationStatus): The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryApplicationVersion](#galleryapplicationversion)

### GalleryApplicationVersions_Update
Update a gallery Application Version.


```js
azure_compute_gallery.GalleryApplicationVersions_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "galleryApplicationVersionName": "",
  "api-version": "",
  "galleryApplicationVersion": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition resides.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition in which the Application Version is to be updated.
  * galleryApplicationVersionName **required** `string`: The name of the gallery Application Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
  * api-version **required** `string`: Client Api Version.
  * galleryApplicationVersion **required** [GalleryApplicationVersionUpdate](#galleryapplicationversionupdate)

#### Output
* output [GalleryApplicationVersion](#galleryapplicationversion)

### GalleryApplicationVersions_CreateOrUpdate
Create or update a gallery Application Version.


```js
azure_compute_gallery.GalleryApplicationVersions_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryApplicationName": "",
  "galleryApplicationVersionName": "",
  "api-version": "",
  "galleryApplicationVersion": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Application Gallery in which the Application Definition resides.
  * galleryApplicationName **required** `string`: The name of the gallery Application Definition in which the Application Version is to be created.
  * galleryApplicationVersionName **required** `string`: The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
  * api-version **required** `string`: Client Api Version.
  * galleryApplicationVersion **required** [GalleryApplicationVersion](#galleryapplicationversion)

#### Output
* output [GalleryApplicationVersion](#galleryapplicationversion)

### GalleryImages_ListByGallery
List gallery Image Definitions in a gallery.


```js
azure_compute_gallery.GalleryImages_ListByGallery({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery from which Image Definitions are to be listed.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryImageList](#galleryimagelist)

### GalleryImages_Delete
Delete a gallery image.


```js
azure_compute_gallery.GalleryImages_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition is to be deleted.
  * galleryImageName **required** `string`: The name of the gallery Image Definition to be deleted.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GalleryImages_Get
Retrieves information about a gallery Image Definition.


```js
azure_compute_gallery.GalleryImages_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
  * galleryImageName **required** `string`: The name of the gallery Image Definition to be retrieved.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryImage](#galleryimage)

### GalleryImages_Update
Update a gallery Image Definition.


```js
azure_compute_gallery.GalleryImages_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "api-version": "",
  "galleryImage": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition is to be updated.
  * galleryImageName **required** `string`: The name of the gallery Image Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * galleryImage **required** [GalleryImageUpdate](#galleryimageupdate)

#### Output
* output [GalleryImage](#galleryimage)

### GalleryImages_CreateOrUpdate
Create or update a gallery Image Definition.


```js
azure_compute_gallery.GalleryImages_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "api-version": "",
  "galleryImage": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition is to be created.
  * galleryImageName **required** `string`: The name of the gallery Image Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * galleryImage **required** [GalleryImage](#galleryimage)

#### Output
* output [GalleryImage](#galleryimage)

### GalleryImageVersions_ListByGalleryImage
List gallery Image Versions in a gallery Image Definition.


```js
azure_compute_gallery.GalleryImageVersions_ListByGalleryImage({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition resides.
  * galleryImageName **required** `string`: The name of the Shared Image Gallery Image Definition from which the Image Versions are to be listed.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryImageVersionList](#galleryimageversionlist)

### GalleryImageVersions_Delete
Delete a gallery Image Version.


```js
azure_compute_gallery.GalleryImageVersions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "galleryImageVersionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition resides.
  * galleryImageName **required** `string`: The name of the gallery Image Definition in which the Image Version resides.
  * galleryImageVersionName **required** `string`: The name of the gallery Image Version to be deleted.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GalleryImageVersions_Get
Retrieves information about a gallery Image Version.


```js
azure_compute_gallery.GalleryImageVersions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "galleryImageVersionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition resides.
  * galleryImageName **required** `string`: The name of the gallery Image Definition in which the Image Version resides.
  * galleryImageVersionName **required** `string`: The name of the gallery Image Version to be retrieved.
  * $expand `string` (values: ReplicationStatus): The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GalleryImageVersion](#galleryimageversion)

### GalleryImageVersions_Update
Update a gallery Image Version.


```js
azure_compute_gallery.GalleryImageVersions_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "galleryImageVersionName": "",
  "api-version": "",
  "galleryImageVersion": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition resides.
  * galleryImageName **required** `string`: The name of the gallery Image Definition in which the Image Version is to be updated.
  * galleryImageVersionName **required** `string`: The name of the gallery Image Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
  * api-version **required** `string`: Client Api Version.
  * galleryImageVersion **required** [GalleryImageVersionUpdate](#galleryimageversionupdate)

#### Output
* output [GalleryImageVersion](#galleryimageversion)

### GalleryImageVersions_CreateOrUpdate
Create or update a gallery Image Version.


```js
azure_compute_gallery.GalleryImageVersions_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "galleryName": "",
  "galleryImageName": "",
  "galleryImageVersionName": "",
  "api-version": "",
  "galleryImageVersion": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * galleryName **required** `string`: The name of the Shared Image Gallery in which the Image Definition resides.
  * galleryImageName **required** `string`: The name of the gallery Image Definition in which the Image Version is to be created.
  * galleryImageVersionName **required** `string`: The name of the gallery Image Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
  * api-version **required** `string`: Client Api Version.
  * galleryImageVersion **required** [GalleryImageVersion](#galleryimageversion)

#### Output
* output [GalleryImageVersion](#galleryimageversion)



## Definitions

### ApiError
* ApiError `object`: Api error.
  * code `string`: The error code.
  * details `array`: The Api error details
    * items [ApiErrorBase](#apierrorbase)
  * innererror [InnerError](#innererror)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ApiErrorBase
* ApiErrorBase `object`: Api error base.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### CloudError
* CloudError `object`: An error response from the Compute service.
  * error [ApiError](#apierror)

### Disallowed
* Disallowed `object`: Describes the disallowed disk types.
  * diskTypes `array`: A list of disk types.
    * items `string`

### Gallery
* Gallery `object`: Specifies information about the Shared Image Gallery that you want to create or update.
  * properties [GalleryProperties](#galleryproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryApplication
* GalleryApplication `object`: Specifies information about the gallery Application Definition that you want to create or update.
  * properties [GalleryApplicationProperties](#galleryapplicationproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryApplicationList
* GalleryApplicationList `object`: The List Gallery Applications operation response.
  * nextLink `string`: The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions.
  * value **required** `array`: A list of Gallery Applications.
    * items [GalleryApplication](#galleryapplication)

### GalleryApplicationProperties
* GalleryApplicationProperties `object`: Describes the properties of a gallery Application Definition.
  * description `string`: The description of this gallery Application Definition resource. This property is updatable.
  * endOfLifeDate `string`: The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
  * eula `string`: The Eula agreement for the gallery Application Definition.
  * privacyStatementUri `string`: The privacy statement uri.
  * releaseNoteUri `string`: The release note uri.
  * supportedOSType **required** `string` (values: Windows, Linux): This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**

### GalleryApplicationUpdate
* GalleryApplicationUpdate `object`: Specifies information about the gallery Application Definition that you want to update.
  * properties [GalleryApplicationProperties](#galleryapplicationproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryApplicationVersion
* GalleryApplicationVersion `object`: Specifies information about the gallery Application Version that you want to create or update.
  * properties [GalleryApplicationVersionProperties](#galleryapplicationversionproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryApplicationVersionList
* GalleryApplicationVersionList `object`: The List Gallery Application version operation response.
  * nextLink `string`: The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions.
  * value **required** `array`: A list of gallery Application Versions.
    * items [GalleryApplicationVersion](#galleryapplicationversion)

### GalleryApplicationVersionProperties
* GalleryApplicationVersionProperties `object`: Describes the properties of a gallery Image Version.
  * provisioningState `string` (values: Creating, Updating, Failed, Succeeded, Deleting, Migrating): The provisioning state, which only appears in the response.
  * publishingProfile **required** [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile)
  * replicationStatus [ReplicationStatus](#replicationstatus)

### GalleryApplicationVersionPublishingProfile
* GalleryApplicationVersionPublishingProfile `object`: The publishing profile of a gallery Image Version.
  * contentType `string`: Optional. May be used to help process this file. The type of file contained in the source, e.g. zip, json, etc.
  * enableHealthCheck `boolean`: Optional. Whether or not this application reports health.
  * source **required** [UserArtifactSource](#userartifactsource)
  * endOfLifeDate `string`: The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
  * excludeFromLatest `boolean`: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
  * publishedDate `string`: The timestamp for when the gallery Image Version is published.
  * replicaCount `integer`: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
  * storageAccountType `string` (values: Standard_LRS, Standard_ZRS): Specifies the storage account type to be used to store the image. This property is not updatable.
  * targetRegions `array`: The target regions where the Image Version is going to be replicated to. This property is updatable.
    * items [TargetRegion](#targetregion)

### GalleryApplicationVersionUpdate
* GalleryApplicationVersionUpdate `object`: Specifies information about the gallery Application Version that you want to update.
  * properties [GalleryApplicationVersionProperties](#galleryapplicationversionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryArtifactPublishingProfileBase
* GalleryArtifactPublishingProfileBase `object`: Describes the basic gallery artifact publishing profile.
  * endOfLifeDate `string`: The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
  * excludeFromLatest `boolean`: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
  * publishedDate `string`: The timestamp for when the gallery Image Version is published.
  * replicaCount `integer`: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
  * storageAccountType `string` (values: Standard_LRS, Standard_ZRS): Specifies the storage account type to be used to store the image. This property is not updatable.
  * targetRegions `array`: The target regions where the Image Version is going to be replicated to. This property is updatable.
    * items [TargetRegion](#targetregion)

### GalleryArtifactSource
* GalleryArtifactSource `object`: The source image from which the Image Version is going to be created.
  * managedImage **required** [ManagedArtifact](#managedartifact)

### GalleryArtifactVersionSource
* GalleryArtifactVersionSource `object`: The gallery artifact version source.
  * id **required** `string`: The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, or user image.

### GalleryDataDiskImage
* GalleryDataDiskImage `object`: This is the data disk image.
  * lun **required** `integer`: This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
  * sizeInGB `integer`: This property indicates the size of the VHD to be created.
  * source [GalleryArtifactVersionSource](#galleryartifactversionsource)

### GalleryDiskImage
* GalleryDiskImage `object`: This is the disk image base class.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
  * sizeInGB `integer`: This property indicates the size of the VHD to be created.
  * source [GalleryArtifactVersionSource](#galleryartifactversionsource)

### GalleryIdentifier
* GalleryIdentifier `object`: Describes the gallery unique name.
  * uniqueName `string`: The unique name of the Shared Image Gallery. This name is generated automatically by Azure.

### GalleryImage
* GalleryImage `object`: Specifies information about the gallery Image Definition that you want to create or update.
  * properties [GalleryImageProperties](#galleryimageproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryImageIdentifier
* GalleryImageIdentifier `object`: This is the gallery Image Definition identifier.
  * offer **required** `string`: The name of the gallery Image Definition offer.
  * publisher **required** `string`: The name of the gallery Image Definition publisher.
  * sku **required** `string`: The name of the gallery Image Definition SKU.

### GalleryImageList
* GalleryImageList `object`: The List Gallery Images operation response.
  * nextLink `string`: The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery Image Definitions.
  * value **required** `array`: A list of Shared Image Gallery images.
    * items [GalleryImage](#galleryimage)

### GalleryImageProperties
* GalleryImageProperties `object`: Describes the properties of a gallery Image Definition.
  * description `string`: The description of this gallery Image Definition resource. This property is updatable.
  * disallowed [Disallowed](#disallowed)
  * endOfLifeDate `string`: The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable.
  * eula `string`: The Eula agreement for the gallery Image Definition.
  * hyperVGeneration `string` (values: V1, V2): The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
  * identifier **required** [GalleryImageIdentifier](#galleryimageidentifier)
  * osState **required** `string` (values: Generalized, Specialized): This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
  * osType **required** `string` (values: Windows, Linux): This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
  * privacyStatementUri `string`: The privacy statement uri.
  * provisioningState `string` (values: Creating, Updating, Failed, Succeeded, Deleting, Migrating): The provisioning state, which only appears in the response.
  * purchasePlan [ImagePurchasePlan](#imagepurchaseplan)
  * recommended [RecommendedMachineConfiguration](#recommendedmachineconfiguration)
  * releaseNoteUri `string`: The release note uri.

### GalleryImageUpdate
* GalleryImageUpdate `object`: Specifies information about the gallery Image Definition that you want to update.
  * properties [GalleryImageProperties](#galleryimageproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryImageVersion
* GalleryImageVersion `object`: Specifies information about the gallery Image Version that you want to create or update.
  * properties [GalleryImageVersionProperties](#galleryimageversionproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryImageVersionList
* GalleryImageVersionList `object`: The List Gallery Image version operation response.
  * nextLink `string`: The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions.
  * value **required** `array`: A list of gallery Image Versions.
    * items [GalleryImageVersion](#galleryimageversion)

### GalleryImageVersionProperties
* GalleryImageVersionProperties `object`: Describes the properties of a gallery Image Version.
  * provisioningState `string` (values: Creating, Updating, Failed, Succeeded, Deleting, Migrating): The provisioning state, which only appears in the response.
  * publishingProfile [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile)
  * replicationStatus [ReplicationStatus](#replicationstatus)
  * storageProfile **required** [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile)

### GalleryImageVersionPublishingProfile
* GalleryImageVersionPublishingProfile: The publishing profile of a gallery Image Version.
  * endOfLifeDate `string`: The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
  * excludeFromLatest `boolean`: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
  * publishedDate `string`: The timestamp for when the gallery Image Version is published.
  * replicaCount `integer`: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
  * storageAccountType `string` (values: Standard_LRS, Standard_ZRS): Specifies the storage account type to be used to store the image. This property is not updatable.
  * targetRegions `array`: The target regions where the Image Version is going to be replicated to. This property is updatable.
    * items [TargetRegion](#targetregion)

### GalleryImageVersionStorageProfile
* GalleryImageVersionStorageProfile `object`: This is the storage profile of a Gallery Image Version.
  * dataDiskImages `array`: A list of data disk images.
    * items [GalleryDataDiskImage](#gallerydatadiskimage)
  * osDiskImage [GalleryOSDiskImage](#galleryosdiskimage)
  * source [GalleryArtifactVersionSource](#galleryartifactversionsource)

### GalleryImageVersionUpdate
* GalleryImageVersionUpdate `object`: Specifies information about the gallery Image Version that you want to update.
  * properties [GalleryImageVersionProperties](#galleryimageversionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GalleryList
* GalleryList `object`: The List Galleries operation response.
  * nextLink `string`: The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries.
  * value **required** `array`: A list of galleries.
    * items [Gallery](#gallery)

### GalleryOSDiskImage
* GalleryOSDiskImage: This is the OS disk image.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
  * sizeInGB `integer`: This property indicates the size of the VHD to be created.
  * source [GalleryArtifactVersionSource](#galleryartifactversionsource)

### GalleryProperties
* GalleryProperties `object`: Describes the properties of a Shared Image Gallery.
  * description `string`: The description of this Shared Image Gallery resource. This property is updatable.
  * identifier [GalleryIdentifier](#galleryidentifier)
  * provisioningState `string` (values: Creating, Updating, Failed, Succeeded, Deleting, Migrating): The provisioning state, which only appears in the response.

### GalleryUpdate
* GalleryUpdate `object`: Specifies information about the Shared Image Gallery that you want to update.
  * properties [GalleryProperties](#galleryproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ImagePurchasePlan
* ImagePurchasePlan `object`: Describes the gallery Image Definition purchase plan. This is used by marketplace images.
  * name `string`: The plan ID.
  * product `string`: The product ID.
  * publisher `string`: The publisher ID.

### InnerError
* InnerError `object`: Inner error details.
  * errordetail `string`: The internal error message or exception dump.
  * exceptiontype `string`: The exception type.

### ManagedArtifact
* ManagedArtifact `object`: The managed artifact.
  * id **required** `string`: The managed artifact id.

### RecommendedMachineConfiguration
* RecommendedMachineConfiguration `object`: The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
  * memory [ResourceRange](#resourcerange)
  * vCPUs [ResourceRange](#resourcerange)

### RegionalReplicationStatus
* RegionalReplicationStatus `object`: This is the regional replication status.
  * details `string`: The details of the replication status.
  * progress `integer`: It indicates progress of the replication job.
  * region `string`: The region to which the gallery Image Version is being replicated to.
  * state `string` (values: Unknown, Replicating, Completed, Failed): This is the regional replication state.

### ReplicationStatus
* ReplicationStatus `object`: This is the replication status of the gallery Image Version.
  * aggregatedState `string` (values: Unknown, InProgress, Completed, Failed): This is the aggregated replication status based on all the regional replication status flags.
  * summary `array`: This is a summary of replication status for each region.
    * items [RegionalReplicationStatus](#regionalreplicationstatus)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceRange
* ResourceRange `object`: Describes the resource range.
  * max `integer`: The maximum number of the resource.
  * min `integer`: The minimum number of the resource.

### TargetRegion
* TargetRegion `object`: Describes the target region information.
  * name **required** `string`: The name of the region.
  * regionalReplicaCount `integer`: The number of replicas of the Image Version to be created per region. This property is updatable.
  * storageAccountType `string` (values: Standard_LRS, Standard_ZRS): Specifies the storage account type to be used to store the image. This property is not updatable.

### UpdateResource
* UpdateResource `object`: The Update Resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### UserArtifactSource
* UserArtifactSource `object`: The source image from which the Image Version is going to be created.
  * fileName **required** `string`: Required. The fileName of the artifact.
  * mediaLink **required** `string`: Required. The mediaLink of the artifact, must be a readable storage blob.


