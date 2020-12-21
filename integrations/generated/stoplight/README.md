# @datafire/stoplight

Client library for Stoplight

## Installation and Usage
```bash
npm install --save @datafire/stoplight
```
```js
let stoplight = require('@datafire/stoplight').create({
  Authorization: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### versions.publish.anon.post
Anonymously publish to API Docs.

This endpoint will take a JSON spec or a URL to a swagger or raml spec.

```
{
  "specData": {...}
}
```

or

```
{
  "url": "http://petstore.swagger.io/v2/swagger.json"
}
```

The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.

The response will contain a url to the published documentation.

```
{
  "url": "https://swagger-petstore.api-docs.io/v1.0.0"
}
```


The limitations of anonymous publishing
* Cannot update/remove the documentation
* Cannot choose the subdomain
* Cannot choose the version
* Cannot add theming


```js
stoplight.versions.publish.anon.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * specData `object`, `string`
    * url `string`

#### Output
* output `object`
  * url **required** `string`

### versions.versionId.export.format.get
Export a version to your choice of API specification.

### Allowed Formats:

- oas.json
- oas.yaml
- raml08.yaml
- raml10.yaml
- stoplight.json
- stoplight.yaml

The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.

### Example URL:

`https://api.stoplight.io/v1/versions/123/export/oas.json`


```js
stoplight.versions.versionId.export.format.get({
  "versionId": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: This is the unique identifier for the version.
  * format **required** `string` (values: oas.json, oas.yaml, raml08.yaml, raml10.yaml, stoplight.json, stoplight.yaml): The specification / format that you want to export.

#### Output
* output `object`, `string`: The specification. Returned as a string when YAML, object when JSON.

### versions.versionId.import.put
Import the given specification into an existing version. 

**Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.**

This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.

By default, a "merge" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).

You can include an optional `options` property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.

Take this request + request body for example:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
  "url": "http://petstore.swagger.io/v2/swagger.json",
  "options": {
    "removeExtraEndpoints": true,
    "removeExtraSchemas": true
  }
}
```

This request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.

Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
  "specData": {
    "swagger": "2.0",
    "info": {}
    ... rest of spec
  }
}
```


```js
stoplight.versions.versionId.import.put({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * options `object`
      * removeExtraEndpoints `boolean`: Default: false.
      * removeExtraSchemas `boolean`: Default: false.
      * removeExtraTextSections `boolean`: Default: false.
      * removeExtraTraits `boolean`: Default: false.
    * specData `object`, `string`
    * url `string`
  * versionId **required** `string`: This is the unique identifier for the version.

#### Output
* output `object`
  * data **required** `object`
    * endpointCount **required** `number`
    * format **required** `string` (values: RAML08, RAML10, SWAGGER, STOPLIGHTX)
    * projectId **required** `string`
    * schemaCount **required** `number`
    * testCount **required** `number`
    * textSectionCount **required** `number`
    * traitCount **required** `number`
    * versionId **required** `string`
    * workspaceId **required** `string`

### versions.versionId.publish.post
Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.

This will only work with APIs that have previously been published at least once.

This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:

1. Swagger is generated from your codebase, and pushed up to Github.
2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github.
3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.


```js
stoplight.versions.versionId.publish.post({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: This is the unique identifier for the version.

#### Output
* output `object`
  * customDomain `string`
  * url **required** `string`

### versions.versionId.unpublish.put
Unpublish the documentation associated with the given API version.


```js
stoplight.versions.versionId.unpublish.put({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: This is the unique identifier for the version.

#### Output
* output `object`
  * data `object`



## Definitions

### shared-user
* Shared User `object`
  *  `string`
  * username `string`

### standarderror



