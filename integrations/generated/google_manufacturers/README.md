# @datafire/google_manufacturers

Client library for Manufacturer Center API

## Installation and Usage
```bash
npm install --save @datafire/google_manufacturers
```
```js
let google_manufacturers = require('@datafire/google_manufacturers').create({
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

Public API for managing Manufacturer Center related data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_manufacturers.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_manufacturers.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### manufacturers.accounts.products.list
Lists all the products in a Manufacturer Center account.


```js
google_manufacturers.manufacturers.accounts.products.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
  * include `array`: The information to be included in the response. Only sections listed here will be returned.
  * pageSize `integer`: Maximum number of product statuses to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListProductsResponse](#listproductsresponse)

### manufacturers.accounts.products.delete
Deletes the product from a Manufacturer Center account.


```js
google_manufacturers.manufacturers.accounts.products.delete({
  "parent": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### manufacturers.accounts.products.get
Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.


```js
google_manufacturers.manufacturers.accounts.products.get({
  "parent": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
  * include `array`: The information to be included in the response. Only sections listed here will be returned.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Product](#product)

### manufacturers.accounts.products.update
Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.


```js
google_manufacturers.manufacturers.accounts.products.update({
  "parent": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
  * body [Attributes](#attributes)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)



## Definitions

### Attributes
* Attributes `object`: Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
  * additionalImageLink `array`: The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.
    * items [Image](#image)
  * ageGroup `string`: The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.
  * brand `string`: The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.
  * capacity [Capacity](#capacity)
  * color `string`: The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.
  * count [Count](#count)
  * description `string`: The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.
  * disclosureDate `string`: The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.
  * excludedDestination `array`: A list of excluded destinations.
    * items `string`
  * featureDescription `array`: The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
    * items [FeatureDescription](#featuredescription)
  * flavor `string`: The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.
  * format `string`: The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.
  * gender `string`: The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.
  * gtin `array`: The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.
    * items `string`
  * imageLink [Image](#image)
  * includedDestination `array`: A list of included destinations.
    * items `string`
  * itemGroupId `string`: The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.
  * material `string`: The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.
  * mpn `string`: The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.
  * pattern `string`: The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.
  * productDetail `array`: The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
    * items [ProductDetail](#productdetail)
  * productLine `string`: The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.
  * productName `string`: The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.
  * productPageUrl `string`: The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.
  * productType `array`: The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.
    * items `string`
  * releaseDate `string`: The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.
  * richProductContent `array`: Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865
    * items `string`
  * scent `string`: The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent.
  * size `string`: The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.
  * sizeSystem `string`: The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.
  * sizeType `string`: The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.
  * suggestedRetailPrice [Price](#price)
  * targetClientId `string`: The target client id. Should only be used in the accounts of the data partners.
  * theme `string`: The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.
  * title `string`: The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.
  * videoLink `array`: The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.
    * items `string`

### Capacity
* Capacity `object`: The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
  * unit `string`: The unit of the capacity, i.e., MB, GB, or TB.
  * value `string`: The numeric value of the capacity.

### Count
* Count `object`: The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
  * unit `string`: The unit in which these products are counted.
  * value `string`: The numeric value of the number of products in a package.

### DestinationStatus
* DestinationStatus `object`: The destination status.
  * destination `string`: The name of the destination.
  * status `string` (values: UNKNOWN, ACTIVE, PENDING, DISAPPROVED): The status of the destination.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FeatureDescription
* FeatureDescription `object`: A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
  * headline `string`: A short description of the feature.
  * image [Image](#image)
  * text `string`: A detailed description of the feature.

### Image
* Image `object`: An image.
  * imageUrl `string`: The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully.
  * status `string` (values: STATUS_UNSPECIFIED, PENDING_PROCESSING, PENDING_CRAWL, OK, ROBOTED, XROBOTED, CRAWL_ERROR, PROCESSING_ERROR, DECODING_ERROR, TOO_BIG, CRAWL_SKIPPED, HOSTLOADED, HTTP_404): The status of the image. @OutputOnly
  * type `string` (values: TYPE_UNSPECIFIED, CRAWLED, UPLOADED): The type of the image, i.e., crawled or uploaded. @OutputOnly

### Issue
* Issue `object`: Product issue.
  * attribute `string`: If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116.
  * description `string`: Longer description of the issue focused on how to resolve it.
  * destination `string`: The destination this issue applies to.
  * resolution `string` (values: RESOLUTION_UNSPECIFIED, USER_ACTION, PENDING_PROCESSING): What needs to happen to resolve the issue.
  * severity `string` (values: SEVERITY_UNSPECIFIED, ERROR, WARNING, INFO): The severity of the issue.
  * timestamp `string`: The timestamp when this issue appeared.
  * title `string`: Short title describing the nature of the issue.
  * type `string`: The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.

### ListProductsResponse
* ListProductsResponse `object`
  * nextPageToken `string`: The token for the retrieval of the next page of product statuses.
  * products `array`: List of the products.
    * items [Product](#product)

### Price
* Price `object`: A price.
  * amount `string`: The numeric value of the price.
  * currency `string`: The currency in which the price is denoted.

### Product
* Product `object`: Product data.
  * attributes [Attributes](#attributes)
  * contentLanguage `string`: The content language of the product as a two-letter ISO 639-1 language code (for example, en).
  * destinationStatuses `array`: The status of the destinations.
    * items [DestinationStatus](#destinationstatus)
  * issues `array`: A server-generated list of issues associated with the product.
    * items [Issue](#issue)
  * name `string`: Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
  * parent `string`: Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
  * productId `string`: The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
  * targetCountry `string`: The target country of the product as a CLDR territory code (for example, US).

### ProductDetail
* ProductDetail `object`: A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
  * attributeName `string`: The name of the attribute.
  * attributeValue `string`: The value of the attribute.
  * sectionName `string`: A short section name that can be reused between multiple product details.


