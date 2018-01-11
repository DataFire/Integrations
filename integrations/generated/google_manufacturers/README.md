# @datafire/google_manufacturers

Client library for Manufacturer Center

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

google_manufacturers.accounts.products.list({}).then(data => {
  console.log(data);
})
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

### accounts.products.list
Lists all the products in a Manufacturer Center account.


```js
google_manufacturers.accounts.products.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`.
  * pageToken `string`: The token returned by the previous request.
  * pageSize `integer`: Maximum number of product statuses to return in the response, used for
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListProductsResponse](#listproductsresponse)

### accounts.products.delete
Deletes the product from a Manufacturer Center account.


```js
google_manufacturers.accounts.products.delete({
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`.
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Empty](#empty)

### accounts.products.get
Gets the product from a Manufacturer Center account, including product
issues.

A recently updated product takes around 15 minutes to process. Changes are
only visible after it has been processed. While some issues may be
available once the product has been processed, other issues may take days
to appear.


```js
google_manufacturers.accounts.products.get({
  "parent": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`.
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Product](#product)

### accounts.products.update
Inserts or updates the product in a Manufacturer Center account.

The checks at upload time are minimal. All required attributes need to be
present for a product to be valid. Issues may show up later
after the API has accepted an update for a product and it is possible to
overwrite an existing valid product with an invalid product. To detect
this, you should retrieve the product and check it for issues once the
updated version is available.

Inserted or updated products first need to be processed before they can be
retrieved. Until then, new products will be unavailable, and retrieval
of updated products will return the original state of the product.


```js
google_manufacturers.accounts.products.update({
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Product](#product)
  * name **required** `string`: Name in the format `{target_country}:{content_language}:{product_id}`.
  * parent **required** `string`: Parent ID in the format `accounts/{account_id}`.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Product](#product)



## Definitions

### Attributes
* Attributes `object`: Attributes of the product. For more information, see
  * additionalImageLink `array`: The additional images of the product. For more information, see
    * items [Image](#image)
  * ageGroup `string`: The target age group of the product. For more information, see
  * brand `string`: The brand name of the product. For more information, see
  * capacity [Capacity](#capacity)
  * color `string`: The color of the product. For more information, see
  * count [Count](#count)
  * description `string`: The description of the product. For more information, see
  * disclosureDate `string`: The disclosure date of the product. For more information, see
  * featureDescription `array`: The rich format description of the product. For more information, see
    * items [FeatureDescription](#featuredescription)
  * flavor `string`: The flavor of the product. For more information, see
  * format `string`: The format of the product. For more information, see
  * gender `string`: The target gender of the product. For more information, see
  * gtin `array`: The Global Trade Item Number (GTIN) of the product. For more information,
    * items `string`
  * imageLink [Image](#image)
  * itemGroupId `string`: The item group id of the product. For more information, see
  * material `string`: The material of the product. For more information, see
  * mpn `string`: The Manufacturer Part Number (MPN) of the product. For more information,
  * pattern `string`: The pattern of the product. For more information, see
  * productDetail `array`: The details of the product. For more information, see
    * items [ProductDetail](#productdetail)
  * productLine `string`: The name of the group of products related to the product. For more
  * productName `string`: The canonical name of the product. For more information, see
  * productPageUrl `string`: The URL of the detail page of the product. For more information, see
  * productType `array`: The type or category of the product. For more information, see
    * items `string`
  * releaseDate `string`: The release date of the product. For more information, see
  * scent `string`: The scent of the product. For more information, see
  * size `string`: The size of the product. For more information, see
  * sizeSystem `string`: The size system of the product. For more information, see
  * sizeType `string`: The size type of the product. For more information, see
  * suggestedRetailPrice [Price](#price)
  * targetClientId `string`: The target client id. Should only be used in the accounts of the data
  * theme `string`: The theme of the product. For more information, see
  * title `string`: The title of the product. For more information, see
  * videoLink `array`: The videos of the product. For more information, see
    * items `string`

### Capacity
* Capacity `object`: The capacity of a product. For more information, see
  * unit `string`: The unit of the capacity, i.e., MB, GB, or TB.
  * value `string`: The numeric value of the capacity.

### Count
* Count `object`: The number of products in a single package. For more information, see
  * unit `string`: The unit in which these products are counted.
  * value `string`: The numeric value of the number of products in a package.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FeatureDescription
* FeatureDescription `object`: A feature description of the product. For more information, see
  * headline `string`: A short description of the feature.
  * image [Image](#image)
  * text `string`: A detailed description of the feature.

### Image
* Image `object`: An image.
  * imageUrl `string`: The URL of the image. For crawled images, this is the provided URL. For
  * status `string` (values: STATUS_UNSPECIFIED, PENDING_PROCESSING, PENDING_CRAWL, OK, ROBOTED, XROBOTED, CRAWL_ERROR, PROCESSING_ERROR, DECODING_ERROR, TOO_BIG, CRAWL_SKIPPED, HOSTLOADED, HTTP_404): The status of the image.
  * type `string` (values: TYPE_UNSPECIFIED, CRAWLED, UPLOADED): The type of the image, i.e., crawled or uploaded.

### Issue
* Issue `object`: Product issue.
  * attribute `string`: If present, the attribute that triggered the issue. For more information
  * description `string`: Description of the issue.
  * severity `string` (values: SEVERITY_UNSPECIFIED, ERROR, WARNING, INFO): The severity of the issue.
  * timestamp `string`: The timestamp when this issue appeared.
  * type `string`: The server-generated type of the issue, for example,

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
  * contentLanguage `string`: The content language of the product as a two-letter ISO 639-1 language code
  * finalAttributes [Attributes](#attributes)
  * issues `array`: A server-generated list of issues associated with the product.
    * items [Issue](#issue)
  * manuallyDeletedAttributes `array`: Names of the attributes of the product deleted manually via the
    * items `string`
  * manuallyProvidedAttributes [Attributes](#attributes)
  * name `string`: Name in the format `{target_country}:{content_language}:{product_id}`.
  * parent `string`: Parent ID in the format `accounts/{account_id}`.
  * productId `string`: The ID of the product. For more information, see
  * targetCountry `string`: The target country of the product as a CLDR territory code (for example,
  * uploadedAttributes [Attributes](#attributes)

### ProductDetail
* ProductDetail `object`: A product detail of the product. For more information, see
  * attributeName `string`: The name of the attribute.
  * attributeValue `string`: The value of the attribute.
  * sectionName `string`: A short section name that can be reused between multiple product details.


