# @datafire/google_discovery

Client library for APIs Discovery Service

## Installation and Usage
```bash
npm install --save @datafire/google_discovery
```
```js
let google_discovery = require('@datafire/google_discovery').create();

.then(data => {
  console.log(data);
});
```

## Description

Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.

## Actions

### apis.list
Retrieve the list of APIs supported at this endpoint.


```js
google_discovery.apis.list({}, context)
```

#### Input
* input `object`
  * name `string`: Only include APIs with the given name.
  * preferred `boolean`: Return only the preferred version of an API.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DirectoryList](#directorylist)

### apis.getRest
Retrieve the description of a particular version of an api.


```js
google_discovery.apis.getRest({
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * api **required** `string`: The name of the API.
  * version **required** `string`: The version of the API.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RestDescription](#restdescription)



## Definitions

### DirectoryList
* DirectoryList `object`
  * discoveryVersion `string`: Indicate the version of the Discovery API used to generate this doc.
  * items `array`: The individual directory entries. One entry per api/version pair.
    * items `object`
      * description `string`: The description of this API.
      * discoveryLink `string`: A link to the discovery document.
      * discoveryRestUrl `string`: The URL for the discovery REST document.
      * documentationLink `string`: A link to human readable documentation for the API.
      * icons `object`: Links to 16x16 and 32x32 icons representing the API.
        * x16 `string`: The URL of the 16x16 icon.
        * x32 `string`: The URL of the 32x32 icon.
      * id `string`: The id of this API.
      * kind `string`: The kind for this response.
      * labels `array`: Labels for the status of this API, such as labs or deprecated.
        * items `string`
      * name `string`: The name of the API.
      * preferred `boolean`: True if this version is the preferred version to use.
      * title `string`: The title of this API.
      * version `string`: The version of the API.
  * kind `string`: The kind for this response.

### JsonSchema
* JsonSchema `object`
  * $ref `string`: A reference to another schema. The value of this property is the "id" of another schema.
  * additionalProperties [JsonSchema](#jsonschema)
  * annotations `object`: Additional information about this property.
    * required `array`: A list of methods for which this property is required on requests.
      * items `string`
  * default `string`: The default value of this property (if one exists).
  * description `string`: A description of this object.
  * enum `array`: Values this parameter may take (if it is an enum).
    * items `string`
  * enumDescriptions `array`: The descriptions for the enums. Each position maps to the corresponding value in the "enum" array.
    * items `string`
  * format `string`: An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23
  * id `string`: Unique identifier for this schema.
  * items [JsonSchema](#jsonschema)
  * location `string`: Whether this parameter goes in the query or the path for REST requests.
  * maximum `string`: The maximum value of this parameter.
  * minimum `string`: The minimum value of this parameter.
  * pattern `string`: The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html
  * properties `object`: If this is a schema for an object, list the schema for each property of this object.
  * readOnly `boolean`: The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service.
  * repeated `boolean`: Whether this parameter may appear multiple times.
  * required `boolean`: Whether the parameter is required.
  * type `string`: The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
  * variant `object`: In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
    * discriminant `string`: The name of the type discriminant property.
    * map `array`: The map of discriminant value to schema to use for parsing..
      * items `object`
        * $ref `string`
        * type_value `string`

### RestDescription
* RestDescription `object`
  * auth `object`: Authentication information.
    * oauth2 `object`: OAuth 2.0 authentication information.
      * scopes `object`: Available OAuth 2.0 scopes.
  * basePath `string`: [DEPRECATED] The base path for REST requests.
  * baseUrl `string`: [DEPRECATED] The base URL for REST requests.
  * batchPath `string`: The path for REST batch requests.
  * canonicalName `string`: Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names.
  * description `string`: The description of this API.
  * discoveryVersion `string`: Indicate the version of the Discovery API used to generate this doc.
  * documentationLink `string`: A link to human readable documentation for the API.
  * etag `string`: The ETag for this response.
  * exponentialBackoffDefault `boolean`: Enable exponential backoff for suitable methods in the generated clients.
  * features `array`: A list of supported features for this API.
    * items `string`
  * icons `object`: Links to 16x16 and 32x32 icons representing the API.
    * x16 `string`: The URL of the 16x16 icon.
    * x32 `string`: The URL of the 32x32 icon.
  * id `string`: The ID of this API.
  * kind `string`: The kind for this response.
  * labels `array`: Labels for the status of this API, such as labs or deprecated.
    * items `string`
  * methods `object`: API-level methods for this API.
  * name `string`: The name of this API.
  * ownerDomain `string`: The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name.
  * ownerName `string`: The name of the owner of this API. See ownerDomain.
  * packagePath `string`: The package of the owner of this API. See ownerDomain.
  * parameters `object`: Common parameters that apply across all apis.
  * protocol `string`: The protocol described by this document.
  * resources `object`: The resources in this API.
  * revision `string`: The version of this API.
  * rootUrl `string`: The root URL under which all API services live.
  * schemas `object`: The schemas for this API.
  * servicePath `string`: The base path for all REST requests.
  * title `string`: The title of this API.
  * version `string`: The version of this API.
  * version_module `boolean`

### RestMethod
* RestMethod `object`
  * description `string`: Description of this method.
  * etagRequired `boolean`: Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header.
  * httpMethod `string`: HTTP method used by this method.
  * id `string`: A unique ID for this method. This property can be used to match methods between different versions of Discovery.
  * mediaUpload `object`: Media upload parameters.
    * accept `array`: MIME Media Ranges for acceptable media uploads to this method.
      * items `string`
    * maxSize `string`: Maximum size of a media upload, such as "1MB", "2GB" or "3TB".
    * protocols `object`: Supported upload protocols.
      * resumable `object`: Supports the Resumable Media Upload protocol.
        * multipart `boolean`: True if this endpoint supports uploading multipart media.
        * path `string`: The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level.
      * simple `object`: Supports uploading as a single HTTP request.
        * multipart `boolean`: True if this endpoint supports upload multipart media.
        * path `string`: The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level.
  * parameterOrder `array`: Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first.
    * items `string`
  * parameters `object`: Details for all parameters in this method.
  * path `string`: The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level.
  * request `object`: The schema for the request.
    * $ref `string`: Schema ID for the request schema.
    * parameterName `string`: parameter name.
  * response `object`: The schema for the response.
    * $ref `string`: Schema ID for the response schema.
  * scopes `array`: OAuth 2.0 scopes applicable to this method.
    * items `string`
  * supportsMediaDownload `boolean`: Whether this method supports media downloads.
  * supportsMediaUpload `boolean`: Whether this method supports media uploads.
  * supportsSubscription `boolean`: Whether this method supports subscriptions.
  * useMediaDownloadService `boolean`: Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download.

### RestResource
* RestResource `object`
  * methods `object`: Methods on this resource.
  * resources `object`: Sub-resources on this resource.


