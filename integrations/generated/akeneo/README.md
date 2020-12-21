# @datafire/akeneo

Client library for Akeneo PIM API

## Installation and Usage
```bash
npm install --save @datafire/akeneo
```
```js
let akeneo = require('@datafire/akeneo').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### post_token
This endpoint allows you to get an authentication token. No need to be authenticated to use this endpoint.


```js
akeneo.post_token({
  "Content-type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Content-type **required** `string`: Equal to 'application/json' or 'application/x-www-form-urlencoded', no other value allowed
  * Authorization **required** `string`: Equal to 'Basic xx', where 'xx' is the base 64 encoding of the client id and secret. Find out how to generate them in the <a href="/documentation/authentication.html#client-idsecret-generation">Client ID/secret generation</a> section.
  * body `object`
    * grant_type **required** `string`: Always equal to "password"
    * password **required** `string`: Your PIM password
    * username **required** `string`: Your PIM username

#### Output
* output `object`
  * access_token `string`: Authentication token that should be given in every authenticated request to the API
  * expires_in `integer`: Validity of the token given in seconds, 3600s = 1h by default
  * refresh_token `string`: Use this token when your access token has expired. See <a href="/documentation/authentication.html#refresh-an-expired-token">Refresh an expired token</a> section for more details.
  * scope `string`: Unused, always equal to "null"
  * token_type `string`: Token type, always equal to "bearer"

### get_endpoints
This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.


```js
akeneo.get_endpoints(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * authentication `object`: Endpoint to get the authentication token
  * host `string`: Host name
  * routes `object`: All the availables endpoints

### get_asset_categories
This endpoint allows you to get a list of PAM asset categories. PAM asset categories are paginated and sorted by `root/left`.


```js
akeneo.get_asset_categories({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: PAM asset category code
        * labels `object`: PAM asset category labels for each locale
          * localeCode `string`: PAM asset category label for the locale `localeCode`
        * parent `string`: PAM ssset category code of the parent's asset category

### patch_asset_categories
This endpoint allows you to update several PAM asset categories at once.


```js
akeneo.patch_asset_categories({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: PAM asset category code
    * labels `object`: PAM asset category labels for each locale
      * localeCode `string`: PAM asset category label for the locale `localeCode`
    * parent `string`: PAM ssset category code of the parent's asset category

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_asset_categories
This endpoint allows you to create a new PAM asset category.


```js
akeneo.post_asset_categories({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: PAM asset category code
    * labels `object`: PAM asset category labels for each locale
      * localeCode `string`: PAM asset category label for the locale `localeCode`
    * parent `string`: PAM ssset category code of the parent's asset category

#### Output
*Output schema unknown*

### get_asset_categories__code_
This endpoint allows you to get the information about a given PAM asset category.


```js
akeneo.get_asset_categories__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: PAM asset category code
  * labels `object`: PAM asset category labels for each locale
    * localeCode `string`: PAM asset category label for the locale `localeCode`
  * parent `string`: PAM ssset category code of the parent's asset category

### patch_asset_categories__code_
This endpoint allows you to update a given PAM asset category. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no category exists for the given code, it creates it.


```js
akeneo.patch_asset_categories__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: PAM asset category code
    * labels `object`: PAM asset category labels for each locale
      * localeCode `string`: PAM asset category label for the locale `localeCode`
    * parent `string`: PAM ssset category code of the parent's asset category

#### Output
*Output schema unknown*

### get_asset_families
This endpoint allows you to get a list of asset families. Asset families are paginated.


```js
akeneo.get_asset_families({}, context)
```

#### Input
* input `object`
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * _embedded `object`
    * _items `array`
      * items `object`
        * _links `object`
          * self `object`
        * attribute_as_main_media `string`: Attribute code that is used as the main media of the asset family.
        * code **required** `string`: Asset family code
        * labels `object`: Asset family labels for each locale
          * localeCode `string`: Asset family label for the locale `localeCode`
        * naming_convention `object`: The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>.
          * abort_asset_creation_on_error `boolean`: Whether the asset should be created if the naming convention failed to apply. More details <a href='/concepts/asset-manager.html#abort-asset-creation-on-error'>here</a>.
          * pattern `string`: The regular expression that should be applied on the source. More details <a href='/concepts/asset-manager.html#pattern'>here</a>.
          * source `object`: The string on which the naming convention should be applied. More details <a href='/concepts/asset-manager.html#source'>here</a>.
        * product_link_rules `array`: The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-product-link-rule'>here</a>.
          * items `object`
        * transformations `array`: The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-transformations'>here</a>.
          * items `object`

### get_assets
This endpoint allows you to get a list of assets of a given asset family. Assets are paginated. This endpoint is case sensitive on the asset family code.


```js
akeneo.get_assets({
  "asset_family_code": ""
}, context)
```

#### Input
* input `object`
  * search `string`: Filter assets, for more details see the <a href="/documentation/filter.html#filter-assets">Asset filters</a> section
  * channel `string`: Filter asset values to return scopable asset attributes for the given channel as well as the non localizable/non scopable asset attributes, for more details see the <a href="/documentation/filter.html#asset-values-by-channel">Filter asset values by channel</a> section
  * locales `string`: Filter asset values to return localizable attributes for the given locales as well as the non localizable/non scopable asset attributes, for more details see the <a href="/documentation/filter.html#asset-values-by-locale">Filter asset values by locale</a> section
  * asset_family_code **required** `string`: Code of the asset family
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * _embedded `object`
    * _items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Code of the asset
        * values `object`: Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
          * attributeCode `array`

### patch_assets
This endpoint allows you to update and/or create several assets of one given asset family at once. Learn more about the <a href="/documentation/update.html#patch-asset-attribute-values">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.


```js
akeneo.patch_assets({
  "asset_family_code": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * body **required** `array`
    * items `object`
      * code **required** `string`: Code of the asset
      * values `object`: Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
        * attributeCode `array`
          * items `object`

#### Output
* output `array`
  * items `object`
    * code `string`: Resource code
    * message `string`: Message explaining the error
    * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### delete_assets__code_
This endpoint allows you to delete a given asset. This endpoint is case sensitive on the asset family code.


```js
akeneo.delete_assets__code_({
  "asset_family_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_assets__code_
This endpoint allows you to get the information about a given asset for a given asset family. This endpoint is case sensitive on the asset family code.


```js
akeneo.get_assets__code_({
  "asset_family_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Code of the asset
  * values `object`: Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
    * attributeCode `array`
      * items `object`
        * channel `string`: Channel code of the asset attribute value
        * data `object`: Asset attribute value
        * locale `string`: Locale code of the asset attribute value

### patch_asset__code_
This endpoint allows you to update a given asset of a given asset family. Learn more about the <a href="/documentation/update.html#patch-asset-attribute-values">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.


```js
akeneo.patch_asset__code_({
  "asset_family_code": "",
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Code of the asset
    * values `object`: Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
      * attributeCode `array`
        * items `object`
          * channel `string`: Channel code of the asset attribute value
          * data `object`: Asset attribute value
          * locale `string`: Locale code of the asset attribute value

#### Output
*Output schema unknown*

### get_asset_families__code__attributes
This endpoint allows you to get the list of attributes of a given asset family.


```js
akeneo.get_asset_families__code__attributes({
  "asset_family_code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family

#### Output
* output `array`
  * items `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `media_file`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_read_only `boolean`: Whether the attribute should be in read only mode only in the UI, but you can still update it with the API
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `media_file`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * media_type **required** `string` (values: image, pdf, youtube, vimeo, other): For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * prefix `string`: Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media
    * suffix `string`: Suffix of the `media_link` attribute type. The common url suffix for the media
    * type **required** `string` (values: text, media_link, number, media_file, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### get_asset_family_attributes__attribute_code__options
This endpoint allows you to get a list of attribute options for a given asset family.


```js
akeneo.get_asset_family_attributes__attribute_code__options({
  "asset_family_code": "",
  "attribute_code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * attribute_code **required** `string`: Code of the attribute

#### Output
* output `array`
  * items `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

### get_asset_attributes__attribute_code__options__code_
This endpoint allows you to get the information about a given asset attribute option.


```js
akeneo.get_asset_attributes__attribute_code__options__code_({
  "asset_family_code": "",
  "attribute_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Attribute's option code
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`

### patch_asset_attributes__attribute_code__options__code_
This endpoint allows you to update a given option for a given attribute and a given asset family. Learn more about the <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given asset family, it creates it.


```js
akeneo.patch_asset_attributes__attribute_code__options__code_({
  "asset_family_code": "",
  "attribute_code": "",
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

#### Output
*Output schema unknown*

### get_asset_family_attributes__code_
This endpoint allows you to get the information about a given attribute for a given asset family.


```js
akeneo.get_asset_family_attributes__code_({
  "asset_family_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * allowed_extensions `array`: Extensions allowed when the attribute type is `media_file`
    * items `string`
  * code **required** `string`: Attribute code
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
  * is_read_only `boolean`: Whether the attribute should be in read only mode only in the UI, but you can still update it with the API
  * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
  * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
  * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
  * max_file_size `string`: Max file size in MB when the attribute type is `media_file`
  * max_value `string`: Maximum value allowed when the attribute type is `number`
  * media_type **required** `string` (values: image, pdf, youtube, vimeo, other): For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
  * min_value `string`: Minimum value allowed when the attribute type is `number`
  * prefix `string`: Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media
  * suffix `string`: Suffix of the `media_link` attribute type. The common url suffix for the media
  * type **required** `string` (values: text, media_link, number, media_file, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
  * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
  * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
  * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### patch_asset_family_attributes__code_
This endpoint allows you to update a given attribute for a given asset family. Note that if the attribute does not already exist for the given asset family, it creates it.


```js
akeneo.patch_asset_family_attributes__code_({
  "asset_family_code": "",
  "code": "",
  "body": {
    "code": "",
    "type": "",
    "media_type": ""
  }
}, context)
```

#### Input
* input `object`
  * asset_family_code **required** `string`: Code of the asset family
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `media_file`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_read_only `boolean`: Whether the attribute should be in read only mode only in the UI, but you can still update it with the API
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `media_file`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * media_type **required** `string` (values: image, pdf, youtube, vimeo, other): For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * prefix `string`: Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media
    * suffix `string`: Suffix of the `media_link` attribute type. The common url suffix for the media
    * type **required** `string` (values: text, media_link, number, media_file, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

#### Output
*Output schema unknown*

### get_asset_family__code_
This endpoint allows you to get the information about a given asset family.


```js
akeneo.get_asset_family__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * attribute_as_main_media `string`: Attribute code that is used as the main media of the asset family.
  * code **required** `string`: Asset family code
  * labels `object`: Asset family labels for each locale
    * localeCode `string`: Asset family label for the locale `localeCode`
  * naming_convention `object`: The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>.
    * abort_asset_creation_on_error `boolean`: Whether the asset should be created if the naming convention failed to apply. More details <a href='/concepts/asset-manager.html#abort-asset-creation-on-error'>here</a>.
    * pattern `string`: The regular expression that should be applied on the source. More details <a href='/concepts/asset-manager.html#pattern'>here</a>.
    * source `object`: The string on which the naming convention should be applied. More details <a href='/concepts/asset-manager.html#source'>here</a>.
  * product_link_rules `array`: The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-product-link-rule'>here</a>.
    * items `object`
      * assign_assets_to `array`: The product value in which your assets will be assigned. More details <a href='/concepts/asset-manager.html#product-value-assignment'>here</a>.
        * items `object`
          * attribute **required** `string`
          * channel `string`
          * locale `string`
          * mode **required** `string`
      * product_selections `array`: The product selection to which the assets of the asset family to be automatically linked. More details <a href='/concepts/asset-manager.html#product-selection'>here</a>.
        * items `object`
          * channel `string`
          * field **required** `string`
          * locale `string`
          * operator **required** `string`
          * value **required** `string`
  * transformations `array`: The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-transformations'>here</a>.
    * items `object`
      * filename_prefix `string`: The prefix that will be prepended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
      * filename_suffix `string`: The suffix that will be appended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
      * label **required** `string`: The name of the transformation
      * operations **required** `object`: The transformations that should be applied to your source file to generate the target file. More details <a href='/concepts/asset-manager.html#transformation-operations'>here</a>.
        * parameters `object`
          * colorspace `string`
          * height `integer`
          * quality `integer`
          * ratio `integer`
          * resolution-unit `string`
          * resolution-x `integer`
          * resolution-y `integer`
          * width `integer`
        * type `string`
      * source **required** `object`: The attribute value in which is stored the media file you want to use as the source file for your transformation. More details <a href='/concepts/asset-manager.html#source-file'>here</a>.
        * attribute **required** `string`
        * channel **required** `string`
        * locale **required** `string`
      * target **required** `object`: The attribute value in which the PIM will generate the new transformed file, aka the target file. More details <a href='/concepts/asset-manager.html#target-file'>here</a>.
        * attribute **required** `string`
        * channel **required** `string`
        * locale **required** `string`

### patch_asset_family__code_
This endpoint allows you to update a given asset family. Note that if the asset family does not already exist, it creates it.


```js
akeneo.patch_asset_family__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * attribute_as_main_media `string`: Attribute code that is used as the main media of the asset family.
    * code **required** `string`: Asset family code
    * labels `object`: Asset family labels for each locale
      * localeCode `string`: Asset family label for the locale `localeCode`
    * naming_convention `object`: The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>.
      * abort_asset_creation_on_error `boolean`: Whether the asset should be created if the naming convention failed to apply. More details <a href='/concepts/asset-manager.html#abort-asset-creation-on-error'>here</a>.
      * pattern `string`: The regular expression that should be applied on the source. More details <a href='/concepts/asset-manager.html#pattern'>here</a>.
      * source `object`: The string on which the naming convention should be applied. More details <a href='/concepts/asset-manager.html#source'>here</a>.
    * product_link_rules `array`: The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-product-link-rule'>here</a>.
      * items `object`
        * assign_assets_to `array`: The product value in which your assets will be assigned. More details <a href='/concepts/asset-manager.html#product-value-assignment'>here</a>.
          * items `object`
        * product_selections `array`: The product selection to which the assets of the asset family to be automatically linked. More details <a href='/concepts/asset-manager.html#product-selection'>here</a>.
          * items `object`
    * transformations `array`: The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-transformations'>here</a>.
      * items `object`
        * filename_prefix `string`: The prefix that will be prepended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
        * filename_suffix `string`: The suffix that will be appended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
        * label **required** `string`: The name of the transformation
        * operations **required** `object`: The transformations that should be applied to your source file to generate the target file. More details <a href='/concepts/asset-manager.html#transformation-operations'>here</a>.
          * parameters `object`
          * type `string`
        * source **required** `object`: The attribute value in which is stored the media file you want to use as the source file for your transformation. More details <a href='/concepts/asset-manager.html#source-file'>here</a>.
          * attribute **required** `string`
          * channel **required** `string`
          * locale **required** `string`
        * target **required** `object`: The attribute value in which the PIM will generate the new transformed file, aka the target file. More details <a href='/concepts/asset-manager.html#target-file'>here</a>.
          * attribute **required** `string`
          * channel **required** `string`
          * locale **required** `string`

#### Output
*Output schema unknown*

### post_asset_media_files
This endpoint allows you to create a new media file and associate it to a media file attribute value of an asset.


```js
akeneo.post_asset_media_files({
  "Content-type": ""
}, context)
```

#### Input
* input `object`
  * Content-type **required** `string`: Equal to 'multipart/form-data', no other value allowed
  * body `object`
    * file **required** `string`: The binary of the media file

#### Output
*Output schema unknown*

### get_asset_media_files__code
This endpoint allows you to download a given media file that is associated with an asset.


```js
akeneo.get_asset_media_files__code({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_asset_tags
This endpoint allows you to get a list of PAM asset tags. PAM asset tags are paginated.


```js
akeneo.get_asset_tags({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: PAM asset tag code

### get_asset_tags__code_
This endpoint allows you to get the information about a given PAM asset tag.


```js
akeneo.get_asset_tags__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: PAM asset tag code

### patch_asset_tags__code_
This endpoint allows you to update a given PAM asset tag. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no tag exists for the given code, it creates it.


```js
akeneo.patch_asset_tags__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: PAM asset tag code

#### Output
*Output schema unknown*

### get_pam_assets
This endpoint allows you to get a list of PAM assets. PAM assets are paginated.


```js
akeneo.get_pam_assets({}, context)
```

#### Input
* input `object`
  * pagination_type `string` (values: page, search_after): Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * categories `array`: Codes of the PAM asset categories in which the asset is classified
          * items `string`
        * code **required** `string`: PAM asset code
        * description `string`: Description of the PAM asset
        * end_of_use `string`: Date on which the PAM asset expire
        * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
        * reference_files `array`: Reference files of the PAM asset
          * items `object`
        * tags `array`: Tags of the PAM asset
          * items `string`
        * variation_files `array`: Variations of the PAM asset
          * items `object`

### patch_pam_assets
This endpoint allows you to update several PAM assets at once.


```js
akeneo.patch_pam_assets({}, context)
```

#### Input
* input `object`
  * body `object`
    * categories `array`: Codes of the PAM asset categories in which the asset is classified
      * items `string`
    * code **required** `string`: PAM asset code
    * description `string`: Description of the PAM asset
    * end_of_use `string`: Date on which the PAM asset expire
    * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
    * reference_files `array`: Reference files of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the reference file
          * download `object`
          * self `object`
        * code `string`: Code of the reference file
        * locale `string`: Locale code of the reference file
    * tags `array`: Tags of the PAM asset
      * items `string`
    * variation_files `array`: Variations of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the variation file
          * download `object`
          * self `object`
        * code `string`: Code of the variation
        * locale `string`: Locale code of the variation
        * scope `string`: Channel code of the variation

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_pam_assets
This endpoint allows you to create a new PAM asset.


```js
akeneo.post_pam_assets({}, context)
```

#### Input
* input `object`
  * body `object`
    * categories `array`: Codes of the PAM asset categories in which the asset is classified
      * items `string`
    * code **required** `string`: PAM asset code
    * description `string`: Description of the PAM asset
    * end_of_use `string`: Date on which the PAM asset expire
    * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
    * reference_files `array`: Reference files of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the reference file
          * download `object`
          * self `object`
        * code `string`: Code of the reference file
        * locale `string`: Locale code of the reference file
    * tags `array`: Tags of the PAM asset
      * items `string`
    * variation_files `array`: Variations of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the variation file
          * download `object`
          * self `object`
        * code `string`: Code of the variation
        * locale `string`: Locale code of the variation
        * scope `string`: Channel code of the variation

#### Output
*Output schema unknown*

### get_reference_files__locale_code_
This endpoint allows you to get the information about a reference file of a given PAM asset.


```js
akeneo.get_reference_files__locale_code_({
  "asset_code": "",
  "locale_code": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

#### Output
* output `object`
  * _link `object`: Links to get and download the reference file
    * download `object`
      * href `string`: URI to download the reference file
  * code `string`: Code of the PAM asset reference file
  * locale `string`: Locale of the PAM asset reference file, equal to `null` if the asset is not localizable

### post_reference_files__locale_code_
This endpoint allows you to upload a new reference file for a given PAM asset and locale. It will also automatically generate all the variation files corresponding to this reference file.


```js
akeneo.post_reference_files__locale_code_({
  "asset_code": "",
  "locale_code": "",
  "Content-type": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
  * Content-type **required** `string`: Equal to 'multipart/form-data', no other value allowed
  * body `object`
    * file **required** `string`: The binaries of the file

#### Output
* output `object`
  * errors `array`
    * items `object`
      * channel `string`: Channel for which the variation file generation failed
      * locale `string`: Locale for which the variation file generation failed
      * message `string`: Message explaining why the variation file generation failed
  * message `string`: Message explaining the warning

### get_reference_files__channel_code__locale_code__download
This endpoint allows you to download a given reference file.


```js
akeneo.get_reference_files__channel_code__locale_code__download({
  "asset_code": "",
  "locale_code": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

#### Output
*Output schema unknown*

### get_variation_files__channel_code__locale_code
This endpoint allows you to get the information about a variation file of a given PAM asset.


```js
akeneo.get_variation_files__channel_code__locale_code({
  "asset_code": "",
  "channel_code": "",
  "locale_code": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * channel_code **required** `string`: Code of the channel
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

#### Output
* output `object`
  * _link `object`: Links to get and download the reference file
    * download `object`
      * href `string`: URI to download the variation file
  * code `string`: Code of the PAM asset variation file
  * locale `string`: Locale of the PAM asset variation file, equal to `null` if the asset is not localizable
  * scope `string`: Channel of the PAM asset variation file

### post_variation_files__channel_code__locale_code_
This endpoint allows you to upload a new variation file for a given PAM asset, channel and locale.


```js
akeneo.post_variation_files__channel_code__locale_code_({
  "asset_code": "",
  "channel_code": "",
  "locale_code": "",
  "Content-type": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * channel_code **required** `string`: Code of the channel
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
  * Content-type **required** `string`: Equal to 'multipart/form-data', no other value allowed
  * body `object`
    * file **required** `string`: The binaries of the file

#### Output
*Output schema unknown*

### get_variation_files__channel_code__locale_code__download
This endpoint allows you to download a given variation file.


```js
akeneo.get_variation_files__channel_code__locale_code__download({
  "asset_code": "",
  "channel_code": "",
  "locale_code": ""
}, context)
```

#### Input
* input `object`
  * asset_code **required** `string`: Code of the asset
  * channel_code **required** `string`: Code of the channel
  * locale_code **required** `string`: Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

#### Output
*Output schema unknown*

### get_pam_assets__code_
This endpoint allows you to get the information about a given PAM asset.


```js
akeneo.get_pam_assets__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * categories `array`: Codes of the PAM asset categories in which the asset is classified
    * items `string`
  * code **required** `string`: PAM asset code
  * description `string`: Description of the PAM asset
  * end_of_use `string`: Date on which the PAM asset expire
  * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
  * reference_files `array`: Reference files of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the reference file
        * download `object`
          * href `string`: URI to download the reference file
        * self `object`
          * href `string`: URI of the reference file entity
      * code `string`: Code of the reference file
      * locale `string`: Locale code of the reference file
  * tags `array`: Tags of the PAM asset
    * items `string`
  * variation_files `array`: Variations of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the variation file
        * download `object`
          * href `string`: URI to download the variation file
        * self `object`
          * href `string`: URI of the variation entity
      * code `string`: Code of the variation
      * locale `string`: Locale code of the variation
      * scope `string`: Channel code of the variation

### patch_pam_assets__code_
This endpoint allows you to update a given PAM asset. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no asset exists for the given code, it creates it.


```js
akeneo.patch_pam_assets__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * categories `array`: Codes of the PAM asset categories in which the asset is classified
      * items `string`
    * code **required** `string`: PAM asset code
    * description `string`: Description of the PAM asset
    * end_of_use `string`: Date on which the PAM asset expire
    * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
    * reference_files `array`: Reference files of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the reference file
          * download `object`
          * self `object`
        * code `string`: Code of the reference file
        * locale `string`: Locale code of the reference file
    * tags `array`: Tags of the PAM asset
      * items `string`
    * variation_files `array`: Variations of the PAM asset
      * items `object`
        * _link `object`: Links to get and download the variation file
          * download `object`
          * self `object`
        * code `string`: Code of the variation
        * locale `string`: Locale code of the variation
        * scope `string`: Channel code of the variation

#### Output
*Output schema unknown*

### association_types_get_list
This endpoint allows you to get a list of association types. Association types are paginated and sorted by code.


```js
akeneo.association_types_get_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Association type code
        * is_quantified `boolean`: When true, the association is a quantified association
        * is_two_way `boolean`: When true, the association is a two-way association
        * labels `object`: Association type labels for each locale
          * localeCode `string`: Association type label for the locale `localeCode`

### several_association_types_patch
This endpoint allows you to update and/or create several association types at once.


```js
akeneo.several_association_types_patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: Association type code
    * is_quantified `boolean`: When true, the association is a quantified association
    * is_two_way `boolean`: When true, the association is a two-way association
    * labels `object`: Association type labels for each locale
      * localeCode `string`: Association type label for the locale `localeCode`

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### association_types_post
This endpoint allows you to create a new association type.


```js
akeneo.association_types_post({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: Association type code
    * is_quantified `boolean`: When true, the association is a quantified association
    * is_two_way `boolean`: When true, the association is a two-way association
    * labels `object`: Association type labels for each locale
      * localeCode `string`: Association type label for the locale `localeCode`

#### Output
*Output schema unknown*

### association_types_get
This endpoint allows you to get the information about a given association type.


```js
akeneo.association_types_get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Association type code
  * is_quantified `boolean`: When true, the association is a quantified association
  * is_two_way `boolean`: When true, the association is a two-way association
  * labels `object`: Association type labels for each locale
    * localeCode `string`: Association type label for the locale `localeCode`

### association_types_patch
This endpoint allows you to update a given association type. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no association type exists for the given code, it creates it.


```js
akeneo.association_types_patch({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Association type code
    * is_quantified `boolean`: When true, the association is a quantified association
    * is_two_way `boolean`: When true, the association is a two-way association
    * labels `object`: Association type labels for each locale
      * localeCode `string`: Association type label for the locale `localeCode`

#### Output
*Output schema unknown*

### attribute_groups_get_list
This endpoint allows you to get a list of attribute groups. Attribute groups are paginated and sorted by code.


```js
akeneo.attribute_groups_get_list({}, context)
```

#### Input
* input `object`
  * search `string`: Filter attribute groups, for more details see the <a href="/documentation/filter.html#filter-attribute-groups">Filters</a> section.
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * attributes `array`: Attribute codes that compose the attribute group
          * items `string`
        * code **required** `string`: Attribute group code
        * labels `object`: Attribute group labels for each locale
          * localeCode `string`: Attribute group label for the locale `localeCode`
        * sort_order `integer`: Attribute group order among other attribute groups

### several_attribute_groups_patch
This endpoint allows you to update and/or create several attribute groups at once.


```js
akeneo.several_attribute_groups_patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * attributes `array`: Attribute codes that compose the attribute group
      * items `string`
    * code **required** `string`: Attribute group code
    * labels `object`: Attribute group labels for each locale
      * localeCode `string`: Attribute group label for the locale `localeCode`
    * sort_order `integer`: Attribute group order among other attribute groups

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### attribute_groups_post
This endpoint allows you to create a new attribute group.


```js
akeneo.attribute_groups_post({}, context)
```

#### Input
* input `object`
  * body `object`
    * attributes `array`: Attribute codes that compose the attribute group
      * items `string`
    * code **required** `string`: Attribute group code
    * labels `object`: Attribute group labels for each locale
      * localeCode `string`: Attribute group label for the locale `localeCode`
    * sort_order `integer`: Attribute group order among other attribute groups

#### Output
*Output schema unknown*

### attribute_groups_get
This endpoint allows you to get the information about a given attribute group.


```js
akeneo.attribute_groups_get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * attributes `array`: Attribute codes that compose the attribute group
    * items `string`
  * code **required** `string`: Attribute group code
  * labels `object`: Attribute group labels for each locale
    * localeCode `string`: Attribute group label for the locale `localeCode`
  * sort_order `integer`: Attribute group order among other attribute groups

### attribute_groups_patch
This endpoint allows you to update a given attribute group. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no attribute group exists for the given code, it creates it.


```js
akeneo.attribute_groups_patch({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * attributes `array`: Attribute codes that compose the attribute group
      * items `string`
    * code **required** `string`: Attribute group code
    * labels `object`: Attribute group labels for each locale
      * localeCode `string`: Attribute group label for the locale `localeCode`
    * sort_order `integer`: Attribute group order among other attribute groups

#### Output
*Output schema unknown*

### get_attributes
This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.


```js
akeneo.get_attributes({}, context)
```

#### Input
* input `object`
  * search `string`: Filter attributes, for more details see the <a href="/documentation/filter.html#filter-attributes">Filters</a> section.
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
          * items `string`
        * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
          * items `string`
        * code **required** `string`: Attribute code
        * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
        * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
        * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
        * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
        * group **required** `string`: Attribute group
        * group_labels `object`: Group labels for each locale
          * localeCode `string`: Group label for the locale `localeCode`
        * labels `object`: Attribute labels for each locale
          * localeCode `string`: Attribute label for the locale `localeCode`
        * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
        * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
        * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
        * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
        * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
        * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
        * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
        * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
        * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
        * sort_order `integer`: Order of the attribute in its group
        * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
        * unique `boolean`: Whether two values for the attribute cannot be the same
        * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
        * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
        * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
        * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

### patch_attributes
This endpoint allows you to update and/or create several attributes at once.


```js
akeneo.patch_attributes({}, context)
```

#### Input
* input `object`
  * body `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
      * items `string`
    * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
      * items `string`
    * code **required** `string`: Attribute code
    * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
    * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
    * group **required** `string`: Attribute group
    * group_labels `object`: Group labels for each locale
      * localeCode `string`: Group label for the locale `localeCode`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
    * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
    * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
    * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
    * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
    * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * sort_order `integer`: Order of the attribute in its group
    * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
    * unique `boolean`: Whether two values for the attribute cannot be the same
    * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
    * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_attributes
This endpoint allows you to create a new attribute.


```js
akeneo.post_attributes({}, context)
```

#### Input
* input `object`
  * body `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
      * items `string`
    * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
      * items `string`
    * code **required** `string`: Attribute code
    * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
    * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
    * group **required** `string`: Attribute group
    * group_labels `object`: Group labels for each locale
      * localeCode `string`: Group label for the locale `localeCode`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
    * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
    * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
    * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
    * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
    * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * sort_order `integer`: Order of the attribute in its group
    * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
    * unique `boolean`: Whether two values for the attribute cannot be the same
    * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
    * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

#### Output
*Output schema unknown*

### get_attributes__attribute_code__options
This endpoint allows you to get a list of attribute options. Attribute options are paginated and sorted by code.


```js
akeneo.get_attributes__attribute_code__options({
  "attribute_code": ""
}, context)
```

#### Input
* input `object`
  * attribute_code **required** `string`: Code of the attribute
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * attribute `string`: Code of attribute related to the attribute option
        * code **required** `string`: Code of option
        * labels `object`: Attribute option labels for each locale
          * localeCode `string`: Attribute option label for the locale `localeCode`
        * sort_order `integer`: Order of attribute option

### patch_attributes__attribute_code__options
This endpoint allows you to update several attribute options at once.


```js
akeneo.patch_attributes__attribute_code__options({
  "attribute_code": ""
}, context)
```

#### Input
* input `object`
  * attribute_code **required** `string`: Code of the attribute
  * body `object`
    * attribute `string`: Code of attribute related to the attribute option
    * code **required** `string`: Code of option
    * labels `object`: Attribute option labels for each locale
      * localeCode `string`: Attribute option label for the locale `localeCode`
    * sort_order `integer`: Order of attribute option

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_attributes__attribute_code__options
This endpoint allows you to create a new attribute option.


```js
akeneo.post_attributes__attribute_code__options({
  "attribute_code": ""
}, context)
```

#### Input
* input `object`
  * attribute_code **required** `string`: Code of the attribute
  * body `object`
    * attribute `string`: Code of attribute related to the attribute option
    * code **required** `string`: Code of option
    * labels `object`: Attribute option labels for each locale
      * localeCode `string`: Attribute option label for the locale `localeCode`
    * sort_order `integer`: Order of attribute option

#### Output
*Output schema unknown*

### get_attributes__attribute_code__options__code_
This endpoint allows you to get the information about a given attribute option.


```js
akeneo.get_attributes__attribute_code__options__code_({
  "attribute_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * attribute `string`: Code of attribute related to the attribute option
  * code **required** `string`: Code of option
  * labels `object`: Attribute option labels for each locale
    * localeCode `string`: Attribute option label for the locale `localeCode`
  * sort_order `integer`: Order of attribute option

### patch_attributes__attribute_code__options__code_
This endpoint allows you to update a given attribute option. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no attribute option exists for the given code, it creates it.


```js
akeneo.patch_attributes__attribute_code__options__code_({
  "attribute_code": "",
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * attribute `string`: Code of attribute related to the attribute option
    * code **required** `string`: Code of option
    * labels `object`: Attribute option labels for each locale
      * localeCode `string`: Attribute option label for the locale `localeCode`
    * sort_order `integer`: Order of attribute option

#### Output
*Output schema unknown*

### get_attributes__code_
This endpoint allows you to get the information about a given attribute.


```js
akeneo.get_attributes__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * items `string`
  * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
    * items `string`
  * code **required** `string`: Attribute code
  * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
  * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
  * group **required** `string`: Attribute group
  * group_labels `object`: Group labels for each locale
    * localeCode `string`: Group label for the locale `localeCode`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
  * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
  * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
  * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
  * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
  * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
  * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * sort_order `integer`: Order of the attribute in its group
  * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
  * unique `boolean`: Whether two values for the attribute cannot be the same
  * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
  * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

### patch_attributes__code_
This endpoint allows you to update a given attribute. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no attribute exists for the given code, it creates it.


```js
akeneo.patch_attributes__code_({
  "code": "",
  "body": {
    "code": "",
    "type": "",
    "group": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
      * items `string`
    * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
      * items `string`
    * code **required** `string`: Attribute code
    * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
    * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
    * group **required** `string`: Attribute group
    * group_labels `object`: Group labels for each locale
      * localeCode `string`: Group label for the locale `localeCode`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
    * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
    * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
    * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
    * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
    * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
    * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * sort_order `integer`: Order of the attribute in its group
    * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
    * unique `boolean`: Whether two values for the attribute cannot be the same
    * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
    * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
    * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

#### Output
*Output schema unknown*

### get_categories
This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.


```js
akeneo.get_categories({}, context)
```

#### Input
* input `object`
  * search `string`: Filter categories, for more details see the <a href="/documentation/filter.html#filter-categories">Filters</a> section.
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Category code
        * labels `object`: Category labels for each locale
          * localeCode `string`: Category label for the locale `localeCode`
        * parent `string`: Category code of the parent's category

### patch_categories
This endpoint allows you to update several categories at once.


```js
akeneo.patch_categories({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: Category code
    * labels `object`: Category labels for each locale
      * localeCode `string`: Category label for the locale `localeCode`
    * parent `string`: Category code of the parent's category

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_categories
This endpoint allows you to create a new category.


```js
akeneo.post_categories({}, context)
```

#### Input
* input `object`
  * body `object`
    * code **required** `string`: Category code
    * labels `object`: Category labels for each locale
      * localeCode `string`: Category label for the locale `localeCode`
    * parent `string`: Category code of the parent's category

#### Output
*Output schema unknown*

### get_categories__code_
This endpoint allows you to get the information about a given category.


```js
akeneo.get_categories__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Category code
  * labels `object`: Category labels for each locale
    * localeCode `string`: Category label for the locale `localeCode`
  * parent `string`: Category code of the parent's category

### patch_categories__code_
This endpoint allows you to update a given category. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no category exists for the given code, it creates it.


```js
akeneo.patch_categories__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Category code
    * labels `object`: Category labels for each locale
      * localeCode `string`: Category label for the locale `localeCode`
    * parent `string`: Category code of the parent's category

#### Output
*Output schema unknown*

### get_channels
This endpoint allows you to get a list of channels. Channels are paginated and sorted by code.


```js
akeneo.get_channels({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * category_tree **required** `string`: Code of the category tree linked to the channel
        * code **required** `string`: Channel code
        * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
          * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
        * currencies **required** `array`: Codes of activated currencies for the channel
          * items `string`
        * labels `object`: Channel labels for each locale
          * localeCode `string`: Channel label for the locale `localeCode`
        * locales **required** `array`: Codes of activated locales for the channel
          * items `string`

### several_channels_patch
This endpoint allows you to update and/or create several channels at once.


```js
akeneo.several_channels_patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * category_tree **required** `string`: Code of the category tree linked to the channel
    * code **required** `string`: Channel code
    * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
      * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
    * currencies **required** `array`: Codes of activated currencies for the channel
      * items `string`
    * labels `object`: Channel labels for each locale
      * localeCode `string`: Channel label for the locale `localeCode`
    * locales **required** `array`: Codes of activated locales for the channel
      * items `string`

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### channels_post
This endpoint allows you to create a new channel.


```js
akeneo.channels_post({}, context)
```

#### Input
* input `object`
  * body `object`
    * category_tree **required** `string`: Code of the category tree linked to the channel
    * code **required** `string`: Channel code
    * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
      * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
    * currencies **required** `array`: Codes of activated currencies for the channel
      * items `string`
    * labels `object`: Channel labels for each locale
      * localeCode `string`: Channel label for the locale `localeCode`
    * locales **required** `array`: Codes of activated locales for the channel
      * items `string`

#### Output
*Output schema unknown*

### get_channels__code_
This endpoint allows you to get the information about a given channel.


```js
akeneo.get_channels__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * category_tree **required** `string`: Code of the category tree linked to the channel
  * code **required** `string`: Channel code
  * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
    * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
  * currencies **required** `array`: Codes of activated currencies for the channel
    * items `string`
  * labels `object`: Channel labels for each locale
    * localeCode `string`: Channel label for the locale `localeCode`
  * locales **required** `array`: Codes of activated locales for the channel
    * items `string`

### channels_patch
This endpoint allows you to update a given channel. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no channel exists for the given code, it creates it.


```js
akeneo.channels_patch({
  "code": "",
  "body": {
    "code": "",
    "category_tree": "",
    "locales": [],
    "currencies": []
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * category_tree **required** `string`: Code of the category tree linked to the channel
    * code **required** `string`: Channel code
    * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
      * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
    * currencies **required** `array`: Codes of activated currencies for the channel
      * items `string`
    * labels `object`: Channel labels for each locale
      * localeCode `string`: Channel label for the locale `localeCode`
    * locales **required** `array`: Codes of activated locales for the channel
      * items `string`

#### Output
*Output schema unknown*

### currencies_get_list
This endpoint allows you to get a list of currencies. Currencies are paginated and sorted by code.


```js
akeneo.currencies_get_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Currency code
        * enabled `boolean`: Whether the currency is enabled

### currencies_get
This endpoint allows you to get the information about a given currency.


```js
akeneo.currencies_get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Currency code
  * enabled `boolean`: Whether the currency is enabled

### get_families
This endpoint allows you to get a list of families. Families are paginated and sorted by code.


```js
akeneo.get_families({}, context)
```

#### Input
* input `object`
  * search `string`: Filter families, for more details see the <a href="/documentation/filter.html#filter-families">Filters</a> section.
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
        * attribute_as_label **required** `string`: Attribute code used as label
        * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
          * channelCode `array`
        * attributes `array`: Attributes codes that compose the family
          * items `string`
        * code **required** `string`: Family code
        * labels `object`: Family labels for each locale
          * localeCode `string`: Family label for the locale `localeCode`

### patch_families
This endpoint allows you to update and/or create several families at once.


```js
akeneo.patch_families({}, context)
```

#### Input
* input `object`
  * body `object`
    * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
    * attribute_as_label **required** `string`: Attribute code used as label
    * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
      * channelCode `array`
        * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
    * attributes `array`: Attributes codes that compose the family
      * items `string`
    * code **required** `string`: Family code
    * labels `object`: Family labels for each locale
      * localeCode `string`: Family label for the locale `localeCode`

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_families
This endpoint allows you to create a new family.


```js
akeneo.post_families({}, context)
```

#### Input
* input `object`
  * body `object`
    * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
    * attribute_as_label **required** `string`: Attribute code used as label
    * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
      * channelCode `array`
        * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
    * attributes `array`: Attributes codes that compose the family
      * items `string`
    * code **required** `string`: Family code
    * labels `object`: Family labels for each locale
      * localeCode `string`: Family label for the locale `localeCode`

#### Output
*Output schema unknown*

### get_families__code_
This endpoint allows you to get the information about a given family.


```js
akeneo.get_families__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
  * attribute_as_label **required** `string`: Attribute code used as label
  * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
    * channelCode `array`
      * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
  * attributes `array`: Attributes codes that compose the family
    * items `string`
  * code **required** `string`: Family code
  * labels `object`: Family labels for each locale
    * localeCode `string`: Family label for the locale `localeCode`

### patch_families__code_
This endpoint allows you to update a given family. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no family exists for the given code, it creates it.


```js
akeneo.patch_families__code_({
  "code": "",
  "body": {
    "code": "",
    "attribute_as_label": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
    * attribute_as_label **required** `string`: Attribute code used as label
    * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
      * channelCode `array`
        * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
    * attributes `array`: Attributes codes that compose the family
      * items `string`
    * code **required** `string`: Family code
    * labels `object`: Family labels for each locale
      * localeCode `string`: Family label for the locale `localeCode`

#### Output
*Output schema unknown*

### get_families__family_code__variants
This endpoint allows you to get a list of family variants. Family variants are paginated and sorted by code.


```js
akeneo.get_families__family_code__variants({
  "family_code": ""
}, context)
```

#### Input
* input `object`
  * family_code **required** `string`: Code of the family
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Family variant code
        * labels `object`: Family variant labels for each locale
          * localeCode `string`: Family variant label for the locale `localeCode`
        * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
          * items `object`: Enrichment level

### patch_families__family_code__variants
This endpoint allows you to update and/or create several family variants at once, for a given family.


```js
akeneo.patch_families__family_code__variants({
  "family_code": ""
}, context)
```

#### Input
* input `object`
  * family_code **required** `string`: Code of the family
  * body `object`
    * code **required** `string`: Family variant code
    * labels `object`: Family variant labels for each locale
      * localeCode `string`: Family variant label for the locale `localeCode`
    * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
      * items `object`: Enrichment level
        * attributes `array`: Codes of attributes bind to this enrichment level
          * items `string`
        * axes **required** `array`: Codes of attributes used as variant axes
          * items `string`
        * level **required** `integer`: Enrichment level

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_families__family_code__variants
This endpoint allows you to create a family variant.


```js
akeneo.post_families__family_code__variants({
  "family_code": ""
}, context)
```

#### Input
* input `object`
  * family_code **required** `string`: Code of the family
  * body `object`
    * code **required** `string`: Family variant code
    * labels `object`: Family variant labels for each locale
      * localeCode `string`: Family variant label for the locale `localeCode`
    * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
      * items `object`: Enrichment level
        * attributes `array`: Codes of attributes bind to this enrichment level
          * items `string`
        * axes **required** `array`: Codes of attributes used as variant axes
          * items `string`
        * level **required** `integer`: Enrichment level

#### Output
*Output schema unknown*

### get_families__family_code__variants__code__
This endpoint allows you to get the information about a given family variant.


```js
akeneo.get_families__family_code__variants__code__({
  "family_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * family_code **required** `string`: Code of the family
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Family variant code
  * labels `object`: Family variant labels for each locale
    * localeCode `string`: Family variant label for the locale `localeCode`
  * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
    * items `object`: Enrichment level
      * attributes `array`: Codes of attributes bind to this enrichment level
        * items `string`
      * axes **required** `array`: Codes of attributes used as variant axes
        * items `string`
      * level **required** `integer`: Enrichment level

### patch_families__family_code__variants__code__
This endpoint allows you to update a given family variant. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no family variant exists for the given code, it creates it.


```js
akeneo.patch_families__family_code__variants__code__({
  "family_code": "",
  "code": "",
  "body": {
    "code": "",
    "variant_attribute_sets": []
  }
}, context)
```

#### Input
* input `object`
  * family_code **required** `string`: Code of the family
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Family variant code
    * labels `object`: Family variant labels for each locale
      * localeCode `string`: Family variant label for the locale `localeCode`
    * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
      * items `object`: Enrichment level
        * attributes `array`: Codes of attributes bind to this enrichment level
          * items `string`
        * axes **required** `array`: Codes of attributes used as variant axes
          * items `string`
        * level **required** `integer`: Enrichment level

#### Output
*Output schema unknown*

### get_locales
This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.


```js
akeneo.get_locales({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Locale code
        * enabled `boolean`: Whether the locale is enabled

### get_locales__code_
This endpoint allows you to get the information about a given locale.


```js
akeneo.get_locales__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Locale code
  * enabled `boolean`: Whether the locale is enabled

### measure_families_get_list
This endpoint allows you to get a list of measure families. Measure families are paginated and sorted by code.


```js
akeneo.measure_families_get_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Measure family code
        * standard `string`: Measure family standard
        * units `array`: Family units
          * items `object`

### measure_families_get
This endpoint allows you to get the information about a given measure family.


```js
akeneo.measure_families_get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Measure family code
  * standard `string`: Measure family standard
  * units `array`: Family units
    * items `object`
      * code `string`: Measure code
      * convert `object`: Mathematic operation to convert the unit into the standard unit
      * symbol `string`: Measure symbol

### measurement_families_get_list
This endpoint allows you to get a list of measurement families.


```js
akeneo.measurement_families_get_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * code **required** `string`: Measurement family code
  * labels `object`: Measurement family labels for each locale
    * localeCode `string`: Measurement family label for the locale `localeCode`
  * standard_unit_code **required** `string`: Unit code used as the standard unit for this measurement family
  * units **required** `object`: Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
    * unitCode `object`
      * code `string`: Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
      * convert_from_standard `array`: Calculation to convert the unit into the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * items `object`
          * operator `string` (values: mul, div, add, sub): Operator for a conversion operation to convert the unit in the standard unit
          * value `string`: Value for a conversion operation to convert the unit in the standard unit
      * labels `object`: Unit labels for each locale. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * localeCode `string`: Unit label for the locale `localeCode`
      * symbol `string`: Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.

### patch_measurement_families
This endpoint allows you to update and/or create several measurement families at once.


```js
akeneo.patch_measurement_families({}, context)
```

#### Input
* input `object`
  * body `array`
    * items `object`
      * code **required** `string`: Measurement family code
      * labels `object`: Measurement family labels for each locale
        * localeCode `string`: Measurement family label for the locale `localeCode`
      * standard_unit_code **required** `string`: Unit code used as the standard unit for this measurement family
      * units **required** `object`: Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * unitCode `object`
          * code `string`: Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
          * convert_from_standard `array`: Calculation to convert the unit into the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
          * labels `object`: Unit labels for each locale. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
          * symbol `string`: Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.

#### Output
* output `array`
  * items `object`
    * code `string`: Resource code
    * errors `array`: List of errors
      * items `object`
        * message `string`
        * property `string`
    * message `string`: Message explaining the error
    * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### get_media_files
This endpoint allows you to get a list of media files that are used as attribute values in products or product models.


```js
akeneo.get_media_files({}, context)
```

#### Input
* input `object`
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * download `object`
          * self `object`
        * code `string`: Media file code
        * extension `string`: Extension of the media file
        * mime_type `string`: Mime type of the media file
        * original_filename `string`: Original filename of the media file
        * size `integer`: Size of the media file

### post_media_files
This endpoint allows you to create a new media file and associate it to an attribute value of a given product or product model.


```js
akeneo.post_media_files({
  "Content-type": ""
}, context)
```

#### Input
* input `object`
  * Content-type **required** `string`: Equal to 'multipart/form-data', no other value allowed
  * body `object`
    * file **required** `string`: The binaries of the file
    * product `string`: The product to which the media file will be associated. It is a JSON string that follows this format '{"identifier":"product_identifier", "attribute":"attribute_code", "scope":"channel_code","locale":"locale_code"}'. You have to either use this field or the `product_model` field, but not both at the same time.
    * product_model `string`: The product model to which the media file will be associated. It is a JSON string that follows this format '{"code":"product_model_code", "attribute":"attribute_code", "scope":"channel_code","locale":"locale_code"}'. You have to either use this field or the `product` field, but not both at the same time.

#### Output
*Output schema unknown*

### get_media_files__code_
This endpoint allows you to get the information about a given media file that is used as an attribute value of a product or a product model.


```js
akeneo.get_media_files__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output
  * _links `object`
    * download `object`
      * href `string`: URI to download the binaries of the media file
  * code `string`: Media file code
  * extension `string`: Extension of the media file
  * mime_type `string`: Mime type of the media file
  * original_filename `string`: Original filename of the media file
  * size `integer`: Size of the media file

### get_media_files__code__download
This endpoint allows you to download a given media file that is used as an attribute value of a product or a product model.


```js
akeneo.get_media_files__code__download({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_product_models
This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.


```js
akeneo.get_product_models({}, context)
```

#### Input
* input `object`
  * search `string`: Filter product models, for more details see the <a href="/documentation/filter.html">Filters</a> section
  * scope `string`: Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * locales `string`: Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * attributes `string`: Filter product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * pagination_type `string` (values: page, search_after): Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
          * associationTypeCode `object`
        * categories `array`: Codes of the categories in which the product model is categorized
          * items `string`
        * code **required** `string`: Product model code
        * created `string`: Date of creation
        * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
        * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
        * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
          * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
        * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
        * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
          * quantifiedAssociationTypeCode `object`
        * updated `string`: Date of the last update
        * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
          * attributeCode `array`

### patch_product_models
This endpoint allows you to update and/or create several product models at once. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product models exists for the given code, it creates it. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product models you try to update. It may result in the creation of drafts if you only have edit rights through the product model's categories.


```js
akeneo.patch_product_models({}, context)
```

#### Input
* input `object`
  * body `object`
    * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product model is categorized
      * items `string`
    * code **required** `string`: Product model code
    * created `string`: Date of creation
    * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
    * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
    * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
    * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_product_models
This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.


```js
akeneo.post_product_models({}, context)
```

#### Input
* input `object`
  * body `object`
    * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product model is categorized
      * items `string`
    * code **required** `string`: Product model code
    * created `string`: Date of creation
    * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
    * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
    * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
    * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
*Output schema unknown*

### get_product_models__code_
This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.


```js
akeneo.get_product_models__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product model is categorized
    * items `string`
  * code **required** `string`: Product model code
  * created `string`: Date of creation
  * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
  * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
  * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
  * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### patch_product_models__code_
This endpoint allows you to update a given product model. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product model exists for the given code, it creates it. In the Enterprise Edition PIM since the 2.3, permissions based on your user groups are applied to the product model you try to update. It may result in the creation of a draft if you only have edit rights through the product model's categories.


```js
akeneo.patch_product_models__code_({
  "code": "",
  "body": {
    "code": "",
    "family_variant": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product model is categorized
      * items `string`
    * code **required** `string`: Product model code
    * created `string`: Date of creation
    * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
    * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
    * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
    * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
*Output schema unknown*

### get_product_model_draft__code_
This endpoint allows you to get the information about a given product model draft.


```js
akeneo.get_product_model_draft__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product model is categorized
    * items `string`
  * code **required** `string`: Product model code
  * created `string`: Date of creation
  * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
  * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
  * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
  * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### post_product_model_proposal
This endpoint allows you to submit a product model draft for approval.


```js
akeneo.post_product_model_proposal({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_products
This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.


```js
akeneo.get_products({}, context)
```

#### Input
* input `object`
  * search `string`: Filter products, for more details see the <a href="/documentation/filter.html">Filters</a> section
  * scope `string`: Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * locales `string`: Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * attributes `string`: Filter product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * pagination_type `string` (values: page, search_after): Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
  * with_attribute_options `boolean`: Return labels of attribute options in the response. (Only available in the PIM Serenity version.)

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
          * associationTypeCode `object`
        * categories `array`: Codes of the categories in which the product is classified
          * items `string`
        * created `string`: Date of creation
        * enabled `boolean`: Whether the product is enable
        * family `string`: Family code from which the product inherits its attributes and attributes requirements
        * groups `array`: Codes of the groups to which the product belong
          * items `string`
        * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
        * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
          * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
        * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
        * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
          * quantifiedAssociationTypeCode `object`
        * updated `string`: Date of the last update
        * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
          * attributeCode `array`

### patch_products
This endpoint allows you to update and/or create several products at once. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the products you try to update. It may result in the creation of drafts if you only have edit rights through the product's categories.


```js
akeneo.patch_products({}, context)
```

#### Input
* input `object`
  * body `object`
    * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product is classified
      * items `string`
    * created `string`: Date of creation
    * enabled `boolean`: Whether the product is enable
    * family `string`: Family code from which the product inherits its attributes and attributes requirements
    * groups `array`: Codes of the groups to which the product belong
      * items `string`
    * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
    * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
    * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
* output `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### post_products
This endpoint allows you to create a new product. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to create.


```js
akeneo.post_products({}, context)
```

#### Input
* input `object`
  * body `object`
    * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product is classified
      * items `string`
    * created `string`: Date of creation
    * enabled `boolean`: Whether the product is enable
    * family `string`: Family code from which the product inherits its attributes and attributes requirements
    * groups `array`: Codes of the groups to which the product belong
      * items `string`
    * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
    * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
    * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
*Output schema unknown*

### delete_products__code_
This endpoint allows you to delete a given product. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the product you try to delete.


```js
akeneo.delete_products__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_products__code_
This endpoint allows you to get the information about a given product. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you request.


```js
akeneo.get_products__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * with_attribute_options `boolean`: Return labels of attribute options in the response. (Only available in the PIM Serenity version.)

#### Output
* output `object`
  * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the product is enable
  * family `string`: Family code from which the product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the product belong
    * items `string`
  * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
  * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * attribute `string`
          * code `string`
          * labels `object`
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### patch_products__code_
This endpoint allows you to update a given product. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to update. It may result in the creation of a draft if you only have edit rights through the product's categories.


```js
akeneo.patch_products__code_({
  "code": "",
  "body": {
    "identifier": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
      * associationTypeCode `object`
        * groups `array`: Array of groups codes with which the product is in relation
          * items `string`
        * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
          * items `string`
        * products `array`: Array of product identifiers with which the product is in relation
          * items `string`
    * categories `array`: Codes of the categories in which the product is classified
      * items `string`
    * created `string`: Date of creation
    * enabled `boolean`: Whether the product is enable
    * family `string`: Family code from which the product inherits its attributes and attributes requirements
    * groups `array`: Codes of the groups to which the product belong
      * items `string`
    * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
    * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
      * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
    * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
    * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
      * quantifiedAssociationTypeCode `object`
        * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
          * items `object`
        * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
          * items `object`
    * updated `string`: Date of the last update
    * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
      * attributeCode `array`
        * items `object`
          * data `object`: Product value
          * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * locale `string`: Locale code of the product value
          * scope `string`: Channel code of the product value

#### Output
*Output schema unknown*

### get_draft__code_
This endpoint allows you to get the information about a given draft.


```js
akeneo.get_draft__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the product is enable
  * family `string`: Family code from which the product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the product belong
    * items `string`
  * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
  * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * attribute `string`
          * code `string`
          * labels `object`
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### post_proposal
This endpoint allows you to submit a draft for approval.


```js
akeneo.post_proposal({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_published_products
This endpoint allows you to get a list of published products. Published products are paginated and they can be filtered.


```js
akeneo.get_published_products({}, context)
```

#### Input
* input `object`
  * search `string`: Filter published products, for more details see the <a href="/documentation/filter.html">Filters</a> section
  * scope `string`: Filter published product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on published product values</a> section
  * locales `string`: Filter published product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on published product values</a> section
  * attributes `string`: Filter published product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
  * pagination_type `string` (values: page, search_after): Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
  * page `integer`: Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
  * limit `integer`: Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
  * with_count `boolean`: Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * associations `object`: Several associations related to groups and/or other published products, grouped by association types
          * associationTypeCode `object`
        * categories `array`: Codes of the categories in which the published product is classified
          * items `string`
        * created `string`: Date of creation
        * enabled `boolean`: Whether the published product is enable
        * family `string`: Family code from which the published product inherits its attributes and attributes requirements
        * groups `array`: Codes of the groups to which the published product belong
          * items `string`
        * identifier **required** `string`: Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
        * updated `string`: Date of the last update
        * values `object`: Published product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
          * attributeCode `array`

### get_published_products__code_
This endpoint allows you to get the information about a given published product.


```js
akeneo.get_published_products__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * associations `object`: Several associations related to groups and/or other published products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the published product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of published product identifiers with which the published product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the published product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the published product is enable
  * family `string`: Family code from which the published product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the published product belong
    * items `string`
  * identifier **required** `string`: Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * updated `string`: Date of the last update
  * values `object`: Published product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### get_reference_entities
This endpoint allows you to get a list of reference entities. Reference entities are paginated.


```js
akeneo.get_reference_entities({}, context)
```

#### Input
* input `object`
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * image_download `object`
          * self `object`
        * code **required** `string`: Reference entity code
        * image `string`: Code of the reference entity image
        * labels `object`: Reference entity labels for each locale
          * localeCode `string`: Reference entity label for the locale `localeCode`

### post_reference_entity_media_files
This endpoint allows you to create a new media file and associate it to the image of a reference entity, or to the main image or to an attribute value of a record.


```js
akeneo.post_reference_entity_media_files({
  "Content-type": ""
}, context)
```

#### Input
* input `object`
  * Content-type **required** `string`: Equal to 'multipart/form-data', no other value allowed
  * body `object`
    * file **required** `string`: The binary of the media file

#### Output
*Output schema unknown*

### get_reference_entity_media_files__code
This endpoint allows you to download a given media file that is associated with a reference entity or a record.


```js
akeneo.get_reference_entity_media_files__code({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
*Output schema unknown*

### get_reference_entities__code_
This endpoint allows you to get the information about a given reference entity.


```js
akeneo.get_reference_entities__code_({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * _links `object`
    * image_download `object`
      * href `string`: URI to download the binaries of the reference entity image file
  * code **required** `string`: Reference entity code
  * image `string`: Code of the reference entity image
  * labels `object`: Reference entity labels for each locale
    * localeCode `string`: Reference entity label for the locale `localeCode`

### patch_reference_entity__code_
This endpoint allows you to update a given reference entity. Note that if the reference entity does not already exist, it creates it.


```js
akeneo.patch_reference_entity__code_({
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Reference entity code
    * image `string`: Code of the reference entity image
    * labels `object`: Reference entity labels for each locale
      * localeCode `string`: Reference entity label for the locale `localeCode`

#### Output
*Output schema unknown*

### get_reference_entities__code__attributes
This endpoint allows you to get the list of attributes of a given reference entity.


```js
akeneo.get_reference_entities__code__attributes({
  "reference_entity_code": ""
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity

#### Output
* output `array`
  * items `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `image`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `image`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * reference_entity_code `string`: Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
    * type **required** `string` (values: text, image, number, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### get_reference_entity_attributes__attribute_code__options
This endpoint allows you to get a list of attribute options for a given reference entity.


```js
akeneo.get_reference_entity_attributes__attribute_code__options({
  "reference_entity_code": "",
  "attribute_code": ""
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * attribute_code **required** `string`: Code of the attribute

#### Output
* output `array`
  * items `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

### get_reference_entity_attributes__attribute_code__options__code_
This endpoint allows you to get the information about a given attribute option.


```js
akeneo.get_reference_entity_attributes__attribute_code__options__code_({
  "reference_entity_code": "",
  "attribute_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Attribute's option code
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`

### patch_reference_entity_attributes__attribute_code__options__code_
This endpoint allows you to update a given option for a given attribute and a given reference entity. Learn more about <a href="/documentation/update.html#patch-reference-entity-record-values">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given reference entity, it creates it.


```js
akeneo.patch_reference_entity_attributes__attribute_code__options__code_({
  "reference_entity_code": "",
  "attribute_code": "",
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * attribute_code **required** `string`: Code of the attribute
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

#### Output
*Output schema unknown*

### get_reference_entity_attributes__code_
This endpoint allows you to get the information about a given attribute for a given reference entity.


```js
akeneo.get_reference_entity_attributes__code_({
  "reference_entity_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * allowed_extensions `array`: Extensions allowed when the attribute type is `image`
    * items `string`
  * code **required** `string`: Attribute code
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
  * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
  * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
  * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
  * max_file_size `string`: Max file size in MB when the attribute type is `image`
  * max_value `string`: Maximum value allowed when the attribute type is `number`
  * min_value `string`: Minimum value allowed when the attribute type is `number`
  * reference_entity_code `string`: Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
  * type **required** `string` (values: text, image, number, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
  * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
  * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
  * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### patch_reference_entity_attributes__code_
This endpoint allows you to update a given attribute for a given renference entity. Note that if the attribute does not already exist for the given reference entity, it creates it.


```js
akeneo.patch_reference_entity_attributes__code_({
  "reference_entity_code": "",
  "code": "",
  "body": {
    "code": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `image`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `image`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * reference_entity_code `string`: Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
    * type **required** `string` (values: text, image, number, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

#### Output
*Output schema unknown*

### get_reference_entity_records
This endpoint allows you to get a list of records of a given reference entity. Records are paginated and can be filtered.


```js
akeneo.get_reference_entity_records({
  "reference_entity_code": ""
}, context)
```

#### Input
* input `object`
  * search `string`: Filter records of the reference entity, for more details see the <a href="/documentation/filter.html#filter-reference-entity-records">Filters</a> section
  * channel `string`: Filter attribute values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-attribute-values-by-channel">Filter attribute values by channel</a> section
  * locales `string`: Filter attribute values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href=/documentation/filter.html#filter-attribute-values-by-locale">Filter attribute values by locale</a> section
  * reference_entity_code **required** `string`: Code of the reference entity
  * search_after `string`: Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section

#### Output
* output `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * _embedded `object`
    * items `array`
      * items `object`
        * _links `object`
          * self `object`
        * code **required** `string`: Code of the record
        * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
          * attributeCode `array`

### patch_reference_entity_records
This endpoint allows you to update and/or create several records of one given reference entity at once. Learn more about <a href="/documentation/update.html#patch-reference-entity-record-values">Update behavior</a>. Note that if the record does not already exist for the given reference entity, it creates it.


```js
akeneo.patch_reference_entity_records({
  "reference_entity_code": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * body **required** `array`
    * items `object`
      * code **required** `string`: Code of the record
      * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
        * attributeCode `array`
          * items `object`

#### Output
* output `array`
  * items `object`
    * code `string`: Resource code
    * message `string`: Message explaining the error
    * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### get_reference_entity_records__code_
This endpoint allows you to get the information about a given record for a given reference entity.


```js
akeneo.get_reference_entity_records__code_({
  "reference_entity_code": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * code **required** `string`: Code of the resource

#### Output
* output `object`
  * code **required** `string`: Code of the record
  * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
    * attributeCode `array`
      * items `object`
        * channel `string`: Channel code of the reference entity record value
        * data `object`: Reference entity record value
        * locale `string`: Locale code of the reference entity record value

### patch_reference_entity_records__code_
This endpoint allows you to update a given record of a given renference entity. Learn more about <a href="/documentation/update.html#patch-reference-entity-record-values">Update behavior</a>. Note that if the record does not already exist for the given reference entity, it creates it.


```js
akeneo.patch_reference_entity_records__code_({
  "reference_entity_code": "",
  "code": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * reference_entity_code **required** `string`: Code of the reference entity
  * code **required** `string`: Code of the resource
  * body **required** `object`
    * code **required** `string`: Code of the record
    * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
      * attributeCode `array`
        * items `object`
          * channel `string`: Channel code of the reference entity record value
          * data `object`: Reference entity record value
          * locale `string`: Locale code of the reference entity record value

#### Output
*Output schema unknown*



## Definitions

### AssetAttributeList
* AssetAttributeList `array`
  * items `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `media_file`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_read_only `boolean`: Whether the attribute should be in read only mode only in the UI, but you can still update it with the API
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `media_file`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * media_type **required** `string` (values: image, pdf, youtube, vimeo, other): For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * prefix `string`: Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media
    * suffix `string`: Suffix of the `media_link` attribute type. The common url suffix for the media
    * type **required** `string` (values: text, media_link, number, media_file, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### AssetAttributeOptionList
* AssetAttributeOptionList `array`
  * items `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

### AssetFamilyItemList
* AssetFamilyItemList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource

### AssetFamilyList
* AssetFamilyList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * attribute_as_main_media `string`: Attribute code that is used as the main media of the asset family.
  * code **required** `string`: Asset family code
  * labels `object`: Asset family labels for each locale
    * localeCode `string`: Asset family label for the locale `localeCode`
  * naming_convention `object`: The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>.
    * abort_asset_creation_on_error `boolean`: Whether the asset should be created if the naming convention failed to apply. More details <a href='/concepts/asset-manager.html#abort-asset-creation-on-error'>here</a>.
    * pattern `string`: The regular expression that should be applied on the source. More details <a href='/concepts/asset-manager.html#pattern'>here</a>.
    * source `object`: The string on which the naming convention should be applied. More details <a href='/concepts/asset-manager.html#source'>here</a>.
  * product_link_rules `array`: The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-product-link-rule'>here</a>.
    * items `object`
      * assign_assets_to `array`: The product value in which your assets will be assigned. More details <a href='/concepts/asset-manager.html#product-value-assignment'>here</a>.
        * items `object`
          * attribute **required** `string`
          * channel `string`
          * locale `string`
          * mode **required** `string`
      * product_selections `array`: The product selection to which the assets of the asset family to be automatically linked. More details <a href='/concepts/asset-manager.html#product-selection'>here</a>.
        * items `object`
          * channel `string`
          * field **required** `string`
          * locale `string`
          * operator **required** `string`
          * value **required** `string`
  * transformations `array`: The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-transformations'>here</a>.
    * items `object`
      * filename_prefix `string`: The prefix that will be prepended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
      * filename_suffix `string`: The suffix that will be appended to the source filename to generate the target filename. More details <a href='/concepts/asset-manager.html#target-filename'>here</a>.
      * label **required** `string`: The name of the transformation
      * operations **required** `object`: The transformations that should be applied to your source file to generate the target file. More details <a href='/concepts/asset-manager.html#transformation-operations'>here</a>.
        * parameters `object`
          * colorspace `string`
          * height `integer`
          * quality `integer`
          * ratio `integer`
          * resolution-unit `string`
          * resolution-x `integer`
          * resolution-y `integer`
          * width `integer`
        * type `string`
      * source **required** `object`: The attribute value in which is stored the media file you want to use as the source file for your transformation. More details <a href='/concepts/asset-manager.html#source-file'>here</a>.
        * attribute **required** `string`
        * channel **required** `string`
        * locale **required** `string`
      * target **required** `object`: The attribute value in which the PIM will generate the new transformed file, aka the target file. More details <a href='/concepts/asset-manager.html#target-file'>here</a>.
        * attribute **required** `string`
        * channel **required** `string`
        * locale **required** `string`

### AssetItemList
* AssetItemList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource

### AssetList
* AssetList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Code of the asset
  * values `object`: Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
    * attributeCode `array`
      * items `object`
        * channel `string`: Channel code of the asset attribute value
        * data `object`: Asset attribute value
        * locale `string`: Locale code of the asset attribute value

### AssociationType
* AssociationType `object`
  * code **required** `string`: Association type code
  * is_quantified `boolean`: When true, the association is a quantified association
  * is_two_way `boolean`: When true, the association is a two-way association
  * labels `object`: Association type labels for each locale
    * localeCode `string`: Association type label for the locale `localeCode`

### AssociationTypeList
* AssociationTypeList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Association type code
  * is_quantified `boolean`: When true, the association is a quantified association
  * is_two_way `boolean`: When true, the association is a two-way association
  * labels `object`: Association type labels for each locale
    * localeCode `string`: Association type label for the locale `localeCode`

### Attribute
* Attribute `object`
  * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * items `string`
  * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
    * items `string`
  * code **required** `string`: Attribute code
  * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
  * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
  * group **required** `string`: Attribute group
  * group_labels `object`: Group labels for each locale
    * localeCode `string`: Group label for the locale `localeCode`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
  * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
  * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
  * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
  * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
  * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
  * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * sort_order `integer`: Order of the attribute in its group
  * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
  * unique `boolean`: Whether two values for the attribute cannot be the same
  * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
  * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

### AttributeGroup
* AttributeGroup `object`
  * attributes `array`: Attribute codes that compose the attribute group
    * items `string`
  * code **required** `string`: Attribute group code
  * labels `object`: Attribute group labels for each locale
    * localeCode `string`: Attribute group label for the locale `localeCode`
  * sort_order `integer`: Attribute group order among other attribute groups

### AttributeGroupList
* AttributeGroupList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * attributes `array`: Attribute codes that compose the attribute group
    * items `string`
  * code **required** `string`: Attribute group code
  * labels `object`: Attribute group labels for each locale
    * localeCode `string`: Attribute group label for the locale `localeCode`
  * sort_order `integer`: Attribute group order among other attribute groups

### AttributeList
* AttributeList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * allowed_extensions `array`: Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
    * items `string`
  * available_locales `array`: To make the attribute locale specfic, specify here for which locales it is specific
    * items `string`
  * code **required** `string`: Attribute code
  * date_max `string`: Maximum date allowed when the attribute type is `pim_catalog_date`
  * date_min `string`: Minimum date allowed when the attribute type is `pim_catalog_date`
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * default_metric_unit `string`: Default metric unit when the attribute type is `pim_catalog_metric`
  * group **required** `string`: Attribute group
  * group_labels `object`: Group labels for each locale
    * localeCode `string`: Group label for the locale `localeCode`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * localizable `boolean`: Whether the attribute is localizable, i.e. can have one value by locale
  * max_characters `integer`: Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
  * max_file_size `string`: Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
  * metric_family `string`: Metric family when the attribute type is `pim_catalog_metric`
  * negative_allowed `boolean`: Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
  * number_max `string`: Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * number_min `string`: Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
  * reference_data_name `string`: Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
  * scopable `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * sort_order `integer`: Order of the attribute in its group
  * type **required** `string` (values: pim_catalog_identifier, pim_catalog_metric, pim_catalog_number, pim_catalog_reference_data_multi_select, pim_catalog_reference_data_simple_select, pim_catalog_simpleselect, pim_catalog_multiselect, pim_catalog_date, pim_catalog_textarea, pim_catalog_text, pim_catalog_file, pim_catalog_image, pim_catalog_price_collection, pim_catalog_boolean, akeneo_reference_entity, akeneo_reference_entity_collection, pim_catalog_asset_collection): Attribute type
  * unique `boolean`: Whether two values for the attribute cannot be the same
  * useable_as_grid_filter `boolean`: Whether the attribute can be used as a filter for the product grid in the PIM user interface
  * validation_regexp `string`: Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * validation_rule `string`: Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
  * wysiwyg_enabled `boolean`: Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`

### AttributeOption
* AttributeOption `object`
  * attribute `string`: Code of attribute related to the attribute option
  * code **required** `string`: Code of option
  * labels `object`: Attribute option labels for each locale
    * localeCode `string`: Attribute option label for the locale `localeCode`
  * sort_order `integer`: Order of attribute option

### AttributeOptionList
* AttributeOptionList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * attribute `string`: Code of attribute related to the attribute option
  * code **required** `string`: Code of option
  * labels `object`: Attribute option labels for each locale
    * localeCode `string`: Attribute option label for the locale `localeCode`
  * sort_order `integer`: Order of attribute option

### Category
* Category `object`
  * code **required** `string`: Category code
  * labels `object`: Category labels for each locale
    * localeCode `string`: Category label for the locale `localeCode`
  * parent `string`: Category code of the parent's category

### CategoryList
* CategoryList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Category code
  * labels `object`: Category labels for each locale
    * localeCode `string`: Category label for the locale `localeCode`
  * parent `string`: Category code of the parent's category

### Channel
* Channel `object`
  * category_tree **required** `string`: Code of the category tree linked to the channel
  * code **required** `string`: Channel code
  * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
    * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
  * currencies **required** `array`: Codes of activated currencies for the channel
    * items `string`
  * labels `object`: Channel labels for each locale
    * localeCode `string`: Channel label for the locale `localeCode`
  * locales **required** `array`: Codes of activated locales for the channel
    * items `string`

### ChannelList
* ChannelList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * category_tree **required** `string`: Code of the category tree linked to the channel
  * code **required** `string`: Channel code
  * conversion_units `object`: Units to which the given metric attributes should be converted when exporting products
    * attributeCode `string`: Conversion unit code used to convert the values of the attribute `attributeCode` when exporting via the channel
  * currencies **required** `array`: Codes of activated currencies for the channel
    * items `string`
  * labels `object`: Channel labels for each locale
    * localeCode `string`: Channel label for the locale `localeCode`
  * locales **required** `array`: Codes of activated locales for the channel
    * items `string`

### Currency
* Currency `object`
  * code **required** `string`: Currency code
  * enabled `boolean`: Whether the currency is enabled

### CurrencyList
* CurrencyList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Currency code
  * enabled `boolean`: Whether the currency is enabled

### DeprecatedAsset
* DeprecatedAsset `object`
  * categories `array`: Codes of the PAM asset categories in which the asset is classified
    * items `string`
  * code **required** `string`: PAM asset code
  * description `string`: Description of the PAM asset
  * end_of_use `string`: Date on which the PAM asset expire
  * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
  * reference_files `array`: Reference files of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the reference file
        * download `object`
          * href `string`: URI to download the reference file
        * self `object`
          * href `string`: URI of the reference file entity
      * code `string`: Code of the reference file
      * locale `string`: Locale code of the reference file
  * tags `array`: Tags of the PAM asset
    * items `string`
  * variation_files `array`: Variations of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the variation file
        * download `object`
          * href `string`: URI to download the variation file
        * self `object`
          * href `string`: URI of the variation entity
      * code `string`: Code of the variation
      * locale `string`: Locale code of the variation
      * scope `string`: Channel code of the variation

### DeprecatedAssetCategory
* DeprecatedAssetCategory `object`
  * code **required** `string`: PAM asset category code
  * labels `object`: PAM asset category labels for each locale
    * localeCode `string`: PAM asset category label for the locale `localeCode`
  * parent `string`: PAM ssset category code of the parent's asset category

### DeprecatedAssetCategoryList
* DeprecatedAssetCategoryList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: PAM asset category code
  * labels `object`: PAM asset category labels for each locale
    * localeCode `string`: PAM asset category label for the locale `localeCode`
  * parent `string`: PAM ssset category code of the parent's asset category

### DeprecatedAssetList
* DeprecatedAssetList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * categories `array`: Codes of the PAM asset categories in which the asset is classified
    * items `string`
  * code **required** `string`: PAM asset code
  * description `string`: Description of the PAM asset
  * end_of_use `string`: Date on which the PAM asset expire
  * localizable `boolean`: Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
  * reference_files `array`: Reference files of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the reference file
        * download `object`
          * href `string`: URI to download the reference file
        * self `object`
          * href `string`: URI of the reference file entity
      * code `string`: Code of the reference file
      * locale `string`: Locale code of the reference file
  * tags `array`: Tags of the PAM asset
    * items `string`
  * variation_files `array`: Variations of the PAM asset
    * items `object`
      * _link `object`: Links to get and download the variation file
        * download `object`
          * href `string`: URI to download the variation file
        * self `object`
          * href `string`: URI of the variation entity
      * code `string`: Code of the variation
      * locale `string`: Locale code of the variation
      * scope `string`: Channel code of the variation

### DeprecatedAssetReferenceFile
* DeprecatedAssetReferenceFile `object`
  * _link `object`: Links to get and download the reference file
    * download `object`
      * href `string`: URI to download the reference file
  * code `string`: Code of the PAM asset reference file
  * locale `string`: Locale of the PAM asset reference file, equal to `null` if the asset is not localizable

### DeprecatedAssetReferenceFileUploadWarning
* DeprecatedAssetReferenceFileUploadWarning `object`
  * errors `array`
    * items `object`
      * channel `string`: Channel for which the variation file generation failed
      * locale `string`: Locale for which the variation file generation failed
      * message `string`: Message explaining why the variation file generation failed
  * message `string`: Message explaining the warning

### DeprecatedAssetTag
* DeprecatedAssetTag `object`
  * code **required** `string`: PAM asset tag code

### DeprecatedAssetTagList
* DeprecatedAssetTagList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: PAM asset tag code

### DeprecatedAssetVariationFile
* DeprecatedAssetVariationFile `object`
  * _link `object`: Links to get and download the reference file
    * download `object`
      * href `string`: URI to download the variation file
  * code `string`: Code of the PAM asset variation file
  * locale `string`: Locale of the PAM asset variation file, equal to `null` if the asset is not localizable
  * scope `string`: Channel of the PAM asset variation file

### Error
* Error `object`
  * code `integer`: HTTP status code
  * message `string`: Message explaining the error

### ErrorByLine
* ErrorByLine `object`
  * code `string`: Resource code, only filled when the resource is not a product
  * identifier `string`: Resource identifier, only filled when the resource is a product
  * line `integer`: Line number
  * message `string`: Message explaining the error
  * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### ErrorByObject
* ErrorByObject `array`
  * items `object`
    * code `string`: Resource code
    * message `string`: Message explaining the error
    * status_code `integer`: HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code

### Family
* Family `object`
  * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
  * attribute_as_label **required** `string`: Attribute code used as label
  * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
    * channelCode `array`
      * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
  * attributes `array`: Attributes codes that compose the family
    * items `string`
  * code **required** `string`: Family code
  * labels `object`: Family labels for each locale
    * localeCode `string`: Family label for the locale `localeCode`

### FamilyList
* FamilyList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * attribute_as_image `string`: Attribute code used as the main picture in the user interface (only since v2.0)
  * attribute_as_label **required** `string`: Attribute code used as label
  * attribute_requirements `object`: Attributes codes of the family that are required for the completeness calculation for each channel
    * channelCode `array`
      * items `string`: Attributes codes of the family that are required for the completeness calculation for the channel `channelCode`
  * attributes `array`: Attributes codes that compose the family
    * items `string`
  * code **required** `string`: Family code
  * labels `object`: Family labels for each locale
    * localeCode `string`: Family label for the locale `localeCode`

### FamilyVariant
* FamilyVariant `object`
  * code **required** `string`: Family variant code
  * labels `object`: Family variant labels for each locale
    * localeCode `string`: Family variant label for the locale `localeCode`
  * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
    * items `object`: Enrichment level
      * attributes `array`: Codes of attributes bind to this enrichment level
        * items `string`
      * axes **required** `array`: Codes of attributes used as variant axes
        * items `string`
      * level **required** `integer`: Enrichment level

### FamilyVariantList
* FamilyVariantList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Family variant code
  * labels `object`: Family variant labels for each locale
    * localeCode `string`: Family variant label for the locale `localeCode`
  * variant_attribute_sets **required** `array`: Attributes distribution according to the enrichment level
    * items `object`: Enrichment level
      * attributes `array`: Codes of attributes bind to this enrichment level
        * items `string`
      * axes **required** `array`: Codes of attributes used as variant axes
        * items `string`
      * level **required** `integer`: Enrichment level

### ItemList
* ItemList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource

### Locale
* Locale `object`
  * code **required** `string`: Locale code
  * enabled `boolean`: Whether the locale is enabled

### LocaleList
* LocaleList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Locale code
  * enabled `boolean`: Whether the locale is enabled

### MeasureFamily
* MeasureFamily `object`
  * code **required** `string`: Measure family code
  * standard `string`: Measure family standard
  * units `array`: Family units
    * items `object`
      * code `string`: Measure code
      * convert `object`: Mathematic operation to convert the unit into the standard unit
      * symbol `string`: Measure symbol

### MeasureFamilyList
* MeasureFamilyList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Measure family code
  * standard `string`: Measure family standard
  * units `array`: Family units
    * items `object`
      * code `string`: Measure code
      * convert `object`: Mathematic operation to convert the unit into the standard unit
      * symbol `string`: Measure symbol

### MeasurementFamily
* MeasurementFamily `object`
  * code **required** `string`: Measurement family code
  * labels `object`: Measurement family labels for each locale
    * localeCode `string`: Measurement family label for the locale `localeCode`
  * standard_unit_code **required** `string`: Unit code used as the standard unit for this measurement family
  * units **required** `object`: Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
    * unitCode `object`
      * code `string`: Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
      * convert_from_standard `array`: Calculation to convert the unit into the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * items `object`
          * operator `string` (values: mul, div, add, sub): Operator for a conversion operation to convert the unit in the standard unit
          * value `string`: Value for a conversion operation to convert the unit in the standard unit
      * labels `object`: Unit labels for each locale. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * localeCode `string`: Unit label for the locale `localeCode`
      * symbol `string`: Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.

### MeasurementFamilyList
* MeasurementFamilyList `object`
  * code **required** `string`: Measurement family code
  * labels `object`: Measurement family labels for each locale
    * localeCode `string`: Measurement family label for the locale `localeCode`
  * standard_unit_code **required** `string`: Unit code used as the standard unit for this measurement family
  * units **required** `object`: Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
    * unitCode `object`
      * code `string`: Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
      * convert_from_standard `array`: Calculation to convert the unit into the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * items `object`
          * operator `string` (values: mul, div, add, sub): Operator for a conversion operation to convert the unit in the standard unit
          * value `string`: Value for a conversion operation to convert the unit in the standard unit
      * labels `object`: Unit labels for each locale. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
        * localeCode `string`: Unit label for the locale `localeCode`
      * symbol `string`: Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.

### MediaFile
* MediaFile
  * _links `object`
    * download `object`
      * href `string`: URI to download the binaries of the media file
  * code `string`: Media file code
  * extension `string`: Extension of the media file
  * mime_type `string`: Mime type of the media file
  * original_filename `string`: Original filename of the media file
  * size `integer`: Size of the media file

### MediaFileItemList
* MediaFileItemList `object`
  * _links `object`
    * download `object`
      * href `string`: URI to download the binaries of the media file
    * self `object`
      * href `string`: URI to get the metadata of the media file

### MediaFileList
* MediaFileList `object`
  * _links `object`
    * download `object`
      * href `string`: URI to download the binaries of the media file
    * self `object`
      * href `string`: URI to get the metadata of the media file
  * code `string`: Media file code
  * extension `string`: Extension of the media file
  * mime_type `string`: Mime type of the media file
  * original_filename `string`: Original filename of the media file
  * size `integer`: Size of the media file

### Pagination
* Pagination `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * previous `object`
      * href `string`: URI of the previous page of resources
    * self `object`
      * href `string`: URI of the current page of resources
  * current_page `integer`: Current page number

### Product
* Product `object`
  * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the product is enable
  * family `string`: Family code from which the product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the product belong
    * items `string`
  * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
  * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * attribute `string`
          * code `string`
          * labels `object`
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### ProductList
* ProductList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * associations `object`: Several associations related to groups, product models and/or other products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the product is enable
  * family `string`: Family code from which the product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the product belong
    * items `string`
  * identifier **required** `string`: Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * metadata `object`: More information around the product (only available since the v2.0 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product regarding the user permissions (only available since the v2.0 in the Enterprise Edition)
  * parent `string`: Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * linked_data `object`: Object containing labels of attribute options (only available in Serenity and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
          * attribute `string`
          * code `string`
          * labels `object`
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### ProductModel
* ProductModel `object`
  * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product model is categorized
    * items `string`
  * code **required** `string`: Product model code
  * created `string`: Date of creation
  * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
  * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
  * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
  * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### ProductModelList
* ProductModelList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * associations `object`: Several associations related to groups, product and/or other product models, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of product identifiers with which the product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the product model is categorized
    * items `string`
  * code **required** `string`: Product model code
  * created `string`: Date of creation
  * family `string`: Family code  from which the product inherits its attributes and attributes requirements (since the 3.2)
  * family_variant **required** `string`: Family variant code from which the product model inherits its attributes and variant attributes
  * metadata `object`: More information around the product model (only available since the v2.3 in the Enterprise Edition)
    * workflow_status `string` (values: read_only, draft_in_progress, proposal_waiting_for_approval, working_copy): Status of the product model regarding the user permissions (only available since the v2.3 in the Enterprise Edition)
  * parent `string`: Code of the parent product model. This parent can be modified since the 2.3.
  * quantified_associations `object`: Several quantified associations related to products and/or product models, grouped by quantified association types (only available in Serenity)
    * quantifiedAssociationTypeCode `object`
      * product_models `array`: Array of objects containing product model codes and quantities with which the product model is in relation
        * items `object`
          * code `string`
          * quantity `integer`
      * products `array`: Array of objects containing product identifiers and quantities with which the product model is in relation
        * items `object`
          * identifier `string`
          * quantity `integer`
  * updated `string`: Date of the last update
  * values `object`: Product model attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### PublishedProduct
* PublishedProduct `object`
  * associations `object`: Several associations related to groups and/or other published products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the published product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of published product identifiers with which the published product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the published product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the published product is enable
  * family `string`: Family code from which the published product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the published product belong
    * items `string`
  * identifier **required** `string`: Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * updated `string`: Date of the last update
  * values `object`: Published product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### PublishedProductList
* PublishedProductList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * associations `object`: Several associations related to groups and/or other published products, grouped by association types
    * associationTypeCode `object`
      * groups `array`: Array of groups codes with which the published product is in relation
        * items `string`
      * product_models `array`: Array of product model codes with which the product is in relation (only available since the v2.1)
        * items `string`
      * products `array`: Array of published product identifiers with which the published product is in relation
        * items `string`
  * categories `array`: Codes of the categories in which the published product is classified
    * items `string`
  * created `string`: Date of creation
  * enabled `boolean`: Whether the published product is enable
  * family `string`: Family code from which the published product inherits its attributes and attributes requirements
  * groups `array`: Codes of the groups to which the published product belong
    * items `string`
  * identifier **required** `string`: Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
  * updated `string`: Date of the last update
  * values `object`: Published product attributes values, see <a href='/concepts/products.html#focus-on-the-products-values'>Product values</a> section for more details
    * attributeCode `array`
      * items `object`
        * data `object`: Product value
        * locale `string`: Locale code of the product value
        * scope `string`: Channel code of the product value

### ReferenceEntity
* ReferenceEntity `object`
  * _links `object`
    * image_download `object`
      * href `string`: URI to download the binaries of the reference entity image file
  * code **required** `string`: Reference entity code
  * image `string`: Code of the reference entity image
  * labels `object`: Reference entity labels for each locale
    * localeCode `string`: Reference entity label for the locale `localeCode`

### ReferenceEntityAttribute
* ReferenceEntityAttribute `object`
  * allowed_extensions `array`: Extensions allowed when the attribute type is `image`
    * items `string`
  * code **required** `string`: Attribute code
  * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
  * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
  * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
  * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`
  * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
  * max_file_size `string`: Max file size in MB when the attribute type is `image`
  * max_value `string`: Maximum value allowed when the attribute type is `number`
  * min_value `string`: Minimum value allowed when the attribute type is `number`
  * reference_entity_code `string`: Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
  * type **required** `string` (values: text, image, number, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
  * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
  * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
  * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
  * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### ReferenceEntityAttributeList
* ReferenceEntityAttributeList `array`
  * items `object`
    * allowed_extensions `array`: Extensions allowed when the attribute type is `image`
      * items `string`
    * code **required** `string`: Attribute code
    * decimals_allowed `boolean`: Whether decimals are allowed when the attribute type is `number`
    * is_required_for_completeness `boolean`: Whether the attribute should be part of the record's completeness calculation
    * is_rich_text_editor `boolean`: Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
    * is_textarea `boolean`: Whether the UI should display a text area instead of a simple field when the attribute type is `text`
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`
    * max_characters `integer`: Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
    * max_file_size `string`: Max file size in MB when the attribute type is `image`
    * max_value `string`: Maximum value allowed when the attribute type is `number`
    * min_value `string`: Minimum value allowed when the attribute type is `number`
    * reference_entity_code `string`: Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
    * type **required** `string` (values: text, image, number, single_option, multiple_options, reference_entity_single_link, reference_entity_multiple_links): Attribute type
    * validation_regexp `string`: Regexp expression used to validate the attribute value when the attribute type is `text`
    * validation_rule `string` (values: email, url, regexp, none): Validation rule type used to validate the attribute value when the attribute type is `text`
    * value_per_channel `boolean`: Whether the attribute is scopable, i.e. can have one value by channel
    * value_per_locale `boolean`: Whether the attribute is localizable, i.e. can have one value by locale

### ReferenceEntityAttributeOption
* ReferenceEntityAttributeOption `object`
  * code **required** `string`: Attribute's option code
  * labels `object`: Attribute labels for each locale
    * localeCode `string`: Attribute label for the locale `localeCode`

### ReferenceEntityAttributeOptionList
* ReferenceEntityAttributeOptionList `array`
  * items `object`
    * code **required** `string`: Attribute's option code
    * labels `object`: Attribute labels for each locale
      * localeCode `string`: Attribute label for the locale `localeCode`

### ReferenceEntityItemList
* ReferenceEntityItemList `object`
  * _links `object`
    * image_download `object`
      * href `string`: URI to download the binaries of the reference entity image file
    * self `object`
      * href `string`: URI of the resource

### ReferenceEntityList
* ReferenceEntityList `object`
  * _links `object`
    * image_download `object`
      * href `string`: URI to download the binaries of the reference entity image file
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Reference entity code
  * image `string`: Code of the reference entity image
  * labels `object`: Reference entity labels for each locale
    * localeCode `string`: Reference entity label for the locale `localeCode`

### ReferenceEntityRecord
* ReferenceEntityRecord `object`
  * code **required** `string`: Code of the record
  * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
    * attributeCode `array`
      * items `object`
        * channel `string`: Channel code of the reference entity record value
        * data `object`: Reference entity record value
        * locale `string`: Locale code of the reference entity record value

### ReferenceEntityRecordItemList
* ReferenceEntityRecordItemList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource

### ReferenceEntityRecordList
* ReferenceEntityRecordList `object`
  * _links `object`
    * self `object`
      * href `string`: URI of the resource
  * code **required** `string`: Code of the record
  * values `object`: Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
    * attributeCode `array`
      * items `object`
        * channel `string`: Channel code of the reference entity record value
        * data `object`: Reference entity record value
        * locale `string`: Locale code of the reference entity record value

### SearchAfterPagination
* SearchAfterPagination `object`
  * _links `object`
    * first `object`
      * href `string`: URI of the first page of resources
    * next `object`
      * href `string`: URI of the next page of resources
    * self `object`
      * href `string`: URI of the current page of resources


