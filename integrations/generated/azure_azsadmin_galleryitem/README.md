# @datafire/azure_azsadmin_galleryitem

Client library for GalleryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_galleryitem
```
```js
let azure_azsadmin_galleryitem = require('@datafire/azure_azsadmin_galleryitem').create({
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

The Admin Gallery Management Client.

## Actions

### GalleryItems_List
Lists gallery items.


```js
azure_azsadmin_galleryitem.GalleryItems_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [GalleryItemList](#galleryitemlist)

### GalleryItems_Create
Uploads a provider gallery item to the storage.


```js
azure_azsadmin_galleryitem.GalleryItems_Create({
  "subscriptionId": "",
  "api-version": "",
  "galleryItemUriPayload": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * galleryItemUriPayload **required** [GalleryItemUriPayload](#galleryitemuripayload)

#### Output
* output [GalleryItem](#galleryitem)

### GalleryItems_Delete
Delete a specific gallery item.


```js
azure_azsadmin_galleryitem.GalleryItems_Delete({
  "subscriptionId": "",
  "galleryItemName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * galleryItemName **required** `string`: Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### GalleryItems_Get
Get a specific gallery item.


```js
azure_azsadmin_galleryitem.GalleryItems_Get({
  "subscriptionId": "",
  "galleryItemName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * galleryItemName **required** `string`: Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character.
  * api-version **required** `string`: Client API Version.

#### Output
* output [GalleryItem](#galleryitem)



## Definitions

### Artifact
* Artifact `object`: Represents gallery item artifacts.
  * name `string`: Name of the artifact.
  * type `string` (values: template, fragment, custom, metadata): Artifact type.
  * uri `string`: URI to the artifact.

### DefinitionTemplates
* DefinitionTemplates `object`: Holds UI definition file Uri and deployment template file URIs.
  * defaultDeploymentTemplateId `string`: Default deployment template ID.
  * deploymentFragmentFileUris `object`: List of key-value pairs containing the deployment fragment file IDs defined in the package manifest.
  * deploymentTemplateFileUris `object`: List of key-value containing the deployment template file IDs defined in the package manifest.
  * uiDefinitionFileUri `string`: UI definition file URI.

### Filter
* Filter `object`: Represents a filter item.
  * type `string`: Filter type.
  * value `string`: Filter value.

### GalleryItem
* GalleryItem `object`: Properties of a gallery item.
  * properties [GalleryItemProperties](#galleryitemproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of the resource.

### GalleryItemList
* GalleryItemList `object`: List of gallery items.
  * value `array`: List of gallery items.
    * items [GalleryItem](#galleryitem)

### GalleryItemProperties
* GalleryItemProperties `object`: Properties of a gallery item.
  * additionalProperties `object`: List of additional properties provided for the item.
  * artifacts `array`: List of artifacts for the gallery item.
    * items [Artifact](#artifact)
  * categoryIds `array`: List of category IDs the gallery item belongs to.
    * items `string`
  * changedTime `string`: Last update time of gallery item.
  * createdTime `string`: The date and time that the gallery item was created.
  * definitionTemplates [DefinitionTemplates](#definitiontemplates)
  * description `string`: The description of the gallery item.
  * filters `array`: List of filters for the gallery item.
    * items [Filter](#filter)
  * iconFileUris `object`: URIs to icon files.
    * hero `string`: URI to the hero icon.
    * large `string`: URI to the large icon.
    * medium `string`: URI to the medium icon.
    * small `string`: URI to the small icon.
    * wide `string`: URI to the wide icon.
  * identity `string`: Identity of the gallery item.
  * images `array`: List of images.
    * items [ImageGroup](#imagegroup)
  * itemDisplayName `string`: Displayed name in the portal.
  * itemName `string`: The display name for the gallery item, for the locale of the request.
  * itemType `string` (values: GalleryItem, ItemGroup): Describes the type of the gallery item, either GalleryItem or ItemGroup.
  * links `array`: Links provided for the item.
    * items [LinkProperties](#linkproperties)
  * longSummary `string`: Long summary of the gallery item.
  * marketingMaterial [MarketingMaterial](#marketingmaterial)
  * metadata [OpenProperty](#openproperty)
  * products `array`: List of products.
    * items [Product](#product)
  * properties `object`: List of properties provided for the gallery item.
  * publisher `string`: The publisher of the gallery item.
  * publisherDisplayName `string`: Display name of the publisher.
  * resourceGroupName `string`: Resource group name the gallery item belongs too.
  * screenshotUris `array`: List of screenshot image URIs provided for the item.
    * items `string`
  * summary `string`: Short summary of the gallery item.
  * uiDefinitionUri `string`: The URL of the view definition object that defines the UI information that is used when an instance of the gallery item resource definition is created.
  * version `string`: The version identifier of the gallery item, in Major.Minor.Build format.

### GalleryItemUriPayload
* GalleryItemUriPayload `object`: Location of gallery item payload.
  * galleryItemUri `string`: URI for your gallery package that has already been uploaded online.

### Image
* Image `object`: Represents an image item.
  * id `string`: ID of the image.
  * type `string`: Type of image.
  * uri `string`: URI to the image.

### ImageGroup
* ImageGroup `object`: Group of images.
  * context `string`: Image group identifier.
  * items `array`: List of images.
    * items [Image](#image)

### LinkProperties
* LinkProperties `object`: Represents a link item read from the gallery item package.
  * displayName `string`: Display name of the link.
  * id `string`: ID of the link.
  * uri `string`: URI of the link.

### MarketingMaterial
* MarketingMaterial `object`: Marketing material for a gallery item.
  * learnUri `string`: URI to educational material.
  * path `string`: Path to the marketing site.

### OfferDetails
* OfferDetails `object`: Represents a offer details item read from the gallery item package.
  * offerId `string`: Offer identifier.
  * plans `array`: List of plans available for the offer.
    * items [Plan](#plan)
  * publisherId `string`: Publisher identifier.

### OpenProperty
* OpenProperty `object`: Open type used to define dynamic properties.
  * properties `object`: Dictionary of dynamic properties.

### Plan
* Plan `object`: Represents a plan item read from the gallery item package.
  * description `string`: Description of the plan.
  * displayName `string`: Display name of the plan.
  * planId `string`: Plan identifier.
  * summary `string`: Summary of the plan.

### Product
* Product `object`: Represents a product item read from the gallery item package.
  * displayName `string`: Display name of the product.
  * legalTerms `string`: Legal terms of the product.
  * legalTermsUri `string`: URI to the legal terms of the product.
  * offerDetails [OfferDetails](#offerdetails)
  * pricingDetailsUri `string`: URI to the pricing details of the product.
  * privacyPolicy `string`: Privacy policy of the product.
  * privacyPolicyUri `string`: URI to the privacy policy of the product.
  * publisherDisplayName `string`: Publisher display name of the product.


