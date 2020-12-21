# @datafire/azure_containerregistry

Client library for Azure Container Registry

## Installation and Usage
```bash
npm install --save @datafire/azure_containerregistry
```
```js
let azure_containerregistry = require('@datafire/azure_containerregistry').create({
  username: "",
  password: "",
  registry_oauth2: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Metadata API definition for the Azure Container Registry runtime

## Actions

### Repository_GetList
List repositories


```js
azure_containerregistry.Repository_GetList({}, context)
```

#### Input
* input `object`
  * last `string`: Query parameter for the last item in previous query. Result set will include values lexically after last.
  * n `integer`: query parameter for max number of items

#### Output
* output [Repositories](#repositories)

### Repository_Delete
Delete the repository identified by `name`


```js
azure_containerregistry.Repository_Delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)

#### Output
* output [DeletedRepository](#deletedrepository)

### Repository_GetAttributes
Get repository attributes


```js
azure_containerregistry.Repository_GetAttributes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)

#### Output
* output [RepositoryAttributes](#repositoryattributes)

### Repository_UpdateAttributes
Update the attribute identified by `name` where `reference` is the name of the repository.


```js
azure_containerregistry.Repository_UpdateAttributes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * value [ChangeableAttributes](#changeableattributes)

#### Output
*Output schema unknown*

### Manifests_GetList
List manifests of a repository


```js
azure_containerregistry.Manifests_GetList({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * last `string`: Query parameter for the last item in previous query. Result set will include values lexically after last.
  * n `integer`: query parameter for max number of items
  * orderby `string`: orderby query parameter

#### Output
* output [AcrManifests](#acrmanifests)

### Manifests_GetAttributes
Get manifest attributes


```js
azure_containerregistry.Manifests_GetAttributes({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: A tag or a digest, pointing to a specific image

#### Output
* output [ManifestAttributes](#manifestattributes)

### Manifests_UpdateAttributes
Update attributes of a manifest


```js
azure_containerregistry.Manifests_UpdateAttributes({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: A tag or a digest, pointing to a specific image
  * value [ChangeableAttributes](#changeableattributes)

#### Output
*Output schema unknown*

### Tag_GetList
List tags of a repository


```js
azure_containerregistry.Tag_GetList({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * last `string`: Query parameter for the last item in previous query. Result set will include values lexically after last.
  * n `integer`: query parameter for max number of items
  * orderby `string`: orderby query parameter
  * digest `string`: filter by digest

#### Output
* output [TagList](#taglist)

### Tag_Delete
Delete tag


```js
azure_containerregistry.Tag_Delete({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: Tag name

#### Output
*Output schema unknown*

### Tag_GetAttributes
Get tag attributes by tag


```js
azure_containerregistry.Tag_GetAttributes({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: Tag name

#### Output
* output [TagAttributes](#tagattributes)

### Tag_UpdateAttributes
Update tag attributes


```js
azure_containerregistry.Tag_UpdateAttributes({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: Tag name
  * value [ChangeableAttributes](#changeableattributes)

#### Output
*Output schema unknown*

### RefreshTokens_GetFromExchange
Exchange AAD tokens for an ACR refresh Token


```js
azure_containerregistry.RefreshTokens_GetFromExchange({
  "grant_type": "",
  "service": ""
}, context)
```

#### Input
* input `object`
  * grant_type **required** `string` (values: access_token_refresh_token, access_token, refresh_token): Can take a value of access_token_refresh_token, or access_token, or refresh_token
  * service **required** `string`: Indicates the name of your Azure container registry.
  * tenant `string`: AAD tenant associated to the AAD credentials.
  * refresh_token `string`: AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token
  * access_token `string`: AAD access token, mandatory when grant_type is access_token_refresh_token or access_token.

#### Output
* output [RefreshToken](#refreshtoken)

### AccessTokens_GetFromLogin
Exchange Username, Password and Scope an ACR Access Token


```js
azure_containerregistry.AccessTokens_GetFromLogin({
  "service": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * service **required** `string`: Indicates the name of your Azure container registry.
  * scope **required** `string`: Expected to be a valid scope, and can be specified more than once for multiple scope requests. You can obtain this from the Www-Authenticate response header from the challenge.

#### Output
* output [AccessToken](#accesstoken)

### AccessTokens_Get
Exchange ACR Refresh token for an ACR Access Token


```js
azure_containerregistry.AccessTokens_Get({
  "grant_type": "",
  "service": "",
  "scope": "",
  "refresh_token": ""
}, context)
```

#### Input
* input `object`
  * grant_type **required** `string` (values: refresh_token): Grant type is expected to be refresh_token
  * service **required** `string`: Indicates the name of your Azure container registry.
  * scope **required** `string`: Which is expected to be a valid scope, and can be specified more than once for multiple scope requests. You obtained this from the Www-Authenticate response header from the challenge.
  * refresh_token **required** `string`: Must be a valid ACR refresh token

#### Output
* output [AccessToken](#accesstoken)

### V2Support_Check
Tells whether this Docker Registry instance supports Docker Registry HTTP API v2


```js
azure_containerregistry.V2Support_Check(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Blob_Mount
Mount a blob identified by the `mount` parameter from another repository.


```js
azure_containerregistry.Blob_Mount({
  "name": "",
  "from": "",
  "mount": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * from **required** `string`: Name of the source repository.
  * mount **required** `string`: Digest of blob to mount from the source repository.

#### Output
*Output schema unknown*

### Blob_Delete
Removes an already uploaded blob.


```js
azure_containerregistry.Blob_Delete({
  "name": "",
  "digest": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * digest **required** `string`: Digest of a BLOB

#### Output
* output `file`: blob binary data

### Blob_Get
Retrieve the blob from the registry identified by digest.


```js
azure_containerregistry.Blob_Get({
  "name": "",
  "digest": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * digest **required** `string`: Digest of a BLOB

#### Output
* output `file`: blob binary data

### Blob_Check
Same as GET, except only the headers are returned.


```js
azure_containerregistry.Blob_Check({
  "name": "",
  "digest": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * digest **required** `string`: Digest of a BLOB

#### Output
*Output schema unknown*

### Manifests_Delete
Delete the manifest identified by `name` and `reference`. Note that a manifest can _only_ be deleted by `digest`.


```js
azure_containerregistry.Manifests_Delete({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: A tag or a digest, pointing to a specific image

#### Output
*Output schema unknown*

### Manifests_Get
Get the manifest identified by `name` and `reference` where `reference` can be a tag or digest.


```js
azure_containerregistry.Manifests_Get({
  "name": "",
  "reference": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: A tag or a digest, pointing to a specific image
  * accept `string`: Accept header string delimited by comma. For example, application/vnd.docker.distribution.manifest.v2+json

#### Output
* output [ManifestWrapper](#manifestwrapper)

### Manifests_Create
Put the manifest identified by `name` and `reference` where `reference` can be a tag or digest.


```js
azure_containerregistry.Manifests_Create({
  "name": "",
  "reference": "",
  "payload": null
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the image (including the namespace)
  * reference **required** `string`: A tag or a digest, pointing to a specific image
  * payload **required** [Manifest](#manifest)

#### Output
*Output schema unknown*

### Blob_CancelUpload
Cancel outstanding upload processes, releasing associated resources. If this is not called, the unfinished uploads will eventually timeout.


```js
azure_containerregistry.Blob_CancelUpload({
  "nextBlobUuidLink": ""
}, context)
```

#### Input
* input `object`
  * nextBlobUuidLink **required** `string`: Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

#### Output
*Output schema unknown*

### Blob_GetStatus
Retrieve status of upload identified by uuid. The primary purpose of this endpoint is to resolve the current status of a resumable upload.


```js
azure_containerregistry.Blob_GetStatus({
  "nextBlobUuidLink": ""
}, context)
```

#### Input
* input `object`
  * nextBlobUuidLink **required** `string`: Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

#### Output
*Output schema unknown*

### Blob_Upload
Upload a stream of data without completing the upload.


```js
azure_containerregistry.Blob_Upload({
  "value": {},
  "nextBlobUuidLink": ""
}, context)
```

#### Input
* input `object`
  * value **required** `object`
  * nextBlobUuidLink **required** `string`: Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

#### Output
*Output schema unknown*

### Blob_EndUpload
Complete the upload, providing all the data in the body, if necessary. A request without a body will just complete the upload with previously uploaded content.


```js
azure_containerregistry.Blob_EndUpload({
  "digest": "",
  "nextBlobUuidLink": ""
}, context)
```

#### Input
* input `object`
  * digest **required** `string`: Digest of a BLOB
  * value `object`
  * nextBlobUuidLink **required** `string`: Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

#### Output
*Output schema unknown*



## Definitions

### AccessToken
* AccessToken `object`
  * access_token `string`: The access token for performing authenticated requests

### AcrErrorInfo
* AcrErrorInfo `object`: Error information
  * code `string`: Error code
  * detail `object`: Error details
  * message `string`: Error message

### AcrErrors
* AcrErrors `object`: Acr error response describing why the operation failed
  * errors `array`: Array of detailed error
    * items [AcrErrorInfo](#acrerrorinfo)

### AcrManifests
* AcrManifests `object`: Manifest attributes
  * imageName `string`: Image name
  * manifests `array`: List of manifests
    * items [ManifestAttributesBase](#manifestattributesbase)
  * registry `string`: Registry name

### Annotations
* Annotations `object`: Additional information provided through arbitrary metadata.
  * org.opencontainers.image.authors `string`: Contact details of the people or organization responsible for the image.
  * org.opencontainers.image.created `string`: Date and time on which the image was built (string, date-time as defined by https://tools.ietf.org/html/rfc3339#section-5.6)
  * org.opencontainers.image.description `string`: Human-readable description of the software packaged in the image
  * org.opencontainers.image.documentation `string`: URL to get documentation on the image.
  * org.opencontainers.image.licenses `string`: License(s) under which contained software is distributed as an SPDX License Expression.
  * org.opencontainers.image.ref.name `string`: Name of the reference for a target.
  * org.opencontainers.image.revision `string`: Source control revision identifier for the packaged software.
  * org.opencontainers.image.source `string`: URL to get source code for building the image.
  * org.opencontainers.image.title `string`: Human-readable title of the image
  * org.opencontainers.image.url `string`: URL to find more information on the image.
  * org.opencontainers.image.vendor `string`: Name of the distributing entity, organization or individual.
  * org.opencontainers.image.version `string`: Version of the packaged software. The version MAY match a label or tag in the source code repository, may also be Semantic versioning-compatible

### ChangeableAttributes
* ChangeableAttributes `object`
  * deleteEnabled `boolean`: Delete enabled
  * listEnabled `boolean`: List enabled
  * readEnabled `boolean`: Read enabled
  * writeEnabled `boolean`: Write enabled

### DeletedRepository
* DeletedRepository `object`: Deleted repository
  * manifestsDeleted `array`: SHA of the deleted image
    * items `string`
  * tagsDeleted `array`: Tag of the deleted image
    * items `string`

### Descriptor
* Descriptor `object`: Docker V2 image layer descriptor including config and layers
  * annotations [Annotations](#annotations)
  * digest `string`: Layer digest
  * mediaType `string`: Layer media type
  * size `integer`: Layer size
  * urls `array`: Specifies a list of URIs from which this object may be downloaded.
    * items `string`: Must conform to RFC 3986. Entries should use the http and https schemes, as defined in RFC 7230.

### FsLayer
* FsLayer `object`: Image layer information
  * blobSum `string`: SHA of an image layer

### History
* History `object`: A list of unstructured historical data for v1 compatibility
  * v1Compatibility `string`: The raw v1 compatibility information

### ImageSignature
* ImageSignature `object`: Signature of a signed manifest
  * header [JWK](#jwk)
  * protected `string`: The signed protected header
  * signature `string`: A signature for the image manifest, signed by a libtrust private key

### JWK
* JWK `object`: A JSON web signature
  * alg `string`: The algorithm used to sign or encrypt the JWT
  * jwk [JWKHeader](#jwkheader)

### JWKHeader
* JWKHeader `object`: JSON web key parameter
  * crv `string`: crv value
  * kid `string`: kid value
  * kty `string`: kty value
  * x `string`: x value
  * y `string`: y value

### Manifest
* Manifest `object`: Returns the requested manifest file
  * schemaVersion `integer`: Schema version

### ManifestAttributes
* ManifestAttributes `object`: Manifest attributes details
  * imageName `string`: Image name
  * manifest [ManifestAttributesBase](#manifestattributesbase)
  * registry `string`: Registry name

### ManifestAttributesBase
* ManifestAttributesBase `object`: Manifest details
  * architecture `string`: CPU architecture
  * changeableAttributes [ChangeableAttributes](#changeableattributes)
  * configMediaType `string`: Config blob media type
  * createdTime `string`: Created time
  * digest `string`: Manifest
  * imageSize `integer`: Image size
  * lastUpdateTime `string`: Last update time
  * mediaType `string`: Media type
  * os `string`: Operating system
  * tags `array`: List of tags
    * items `string`: Tag name

### ManifestAttributes_manifest
* ManifestAttributes_manifest `object`: List of manifest attributes
  * quarantineTag `string`: Quarantine tag name
  * references `array`: List of manifest attributes details
    * items [ManifestAttributes_manifest_references](#manifestattributes_manifest_references)

### ManifestAttributes_manifest_references
* ManifestAttributes_manifest_references `object`: Manifest attributes details
  * architecture `string`: CPU architecture
  * digest `string`: Manifest digest
  * os `string`: Operating system

### ManifestChangeableAttributes
* ManifestChangeableAttributes `object`: Changeable attributes
  * deleteEnabled `boolean`: Delete enabled
  * listEnabled `boolean`: List enabled
  * quarantineDetails `string`: Quarantine details
  * quarantineState `string`: Quarantine state
  * readEnabled `boolean`: Read enabled
  * writeEnabled `boolean`: Write enabled

### ManifestList
* ManifestList `object`: Returns the requested Docker multi-arch-manifest file
  * manifests `array`: List of V2 image layer information
    * items [ManifestListAttributes](#manifestlistattributes)
  * mediaType `string`: Media type for this Manifest
  * schemaVersion `integer`: Schema version

### ManifestListAttributes
* ManifestListAttributes `object`
  * digest `string`: The digest of the content, as defined by the Registry V2 HTTP API Specification
  * mediaType `string`: The MIME type of the referenced object. This will generally be application/vnd.docker.image.manifest.v2+json, but it could also be application/vnd.docker.image.manifest.v1+json
  * platform [Platform](#platform)
  * size `integer`: The size in bytes of the object

### ManifestWrapper
* ManifestWrapper `object`: Returns the requested manifest file
  * annotations [Annotations](#annotations)
  * architecture `string`: (V1) CPU architecture
  * config [Descriptor](#descriptor)
  * fsLayers `array`: (V1) List of layer information
    * items [FsLayer](#fslayer)
  * history `array`: (V1) Image history
    * items [History](#history)
  * layers `array`: (V2, OCI) List of V2 image layer information
    * items [Descriptor](#descriptor)
  * manifests `array`: (ManifestList, OCIIndex) List of V2 image layer information
    * items [ManifestListAttributes](#manifestlistattributes)
  * mediaType `string`: Media type for this Manifest
  * name `string`: (V1) Image name
  * signatures `array`: (V1) Image signature
    * items [ImageSignature](#imagesignature)
  * tag `string`: (V1) Image tag
  * schemaVersion `integer`: Schema version

### OCIIndex
* OCIIndex `object`: Returns the requested OCI index file
  * annotations [Annotations](#annotations)
  * manifests `array`: List of OCI image layer information
    * items [ManifestListAttributes](#manifestlistattributes)
  * schemaVersion `integer`: Schema version

### OCIManifest
* OCIManifest `object`: Returns the requested OCI Manifest file
  * annotations [Annotations](#annotations)
  * config [Descriptor](#descriptor)
  * layers `array`: List of V2 image layer information
    * items [Descriptor](#descriptor)
  * schemaVersion `integer`: Schema version

### Platform
* Platform `object`: The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH
  * architecture `string`: Specifies the CPU architecture, for example amd64 or ppc64le.
  * features `array`: The optional features field specifies an array of strings, each listing a required CPU feature (for example sse4 or aes
    * items `string`
  * os `string`: The os field specifies the operating system, for example linux or windows.
  * os.features `array`: The optional os.features field specifies an array of strings, each listing a required OS feature (for example on Windows win32k
    * items `string`
  * os.version `string`: The optional os.version field specifies the operating system version, for example 10.0.10586.
  * variant `string`: The optional variant field specifies a variant of the CPU, for example armv6l to specify a particular CPU variant of the ARM CPU.

### RefreshToken
* RefreshToken `object`
  * refresh_token `string`: The refresh token to be used for generating access tokens

### Repositories
* Repositories `object`: List of repositories
  * repositories `array`: Repository names
    * items `string`

### RepositoryAttributes
* RepositoryAttributes `object`: Repository attributes
  * changeableAttributes [ChangeableAttributes](#changeableattributes)
  * createdTime `string`: Image created time
  * imageName `string`: Image name
  * lastUpdateTime `string`: Image last update time
  * manifestCount `integer`: Number of the manifests
  * registry `string`: Registry name
  * tagCount `integer`: Number of the tags

### RepositoryTags
* RepositoryTags `object`: Result of the request to list tags of the image
  * name `string`: Name of the image
  * tags `array`: List of tags
    * items `string`: Tag name

### TagAttributes
* TagAttributes `object`: Tag attributes
  * imageName `string`: Image name
  * registry `string`: Registry name
  * tag [TagAttributesBase](#tagattributesbase)

### TagAttributesBase
* TagAttributesBase `object`: Tag attribute details
  * changeableAttributes [ChangeableAttributes](#changeableattributes)
  * createdTime `string`: Tag created time
  * digest `string`: Tag digest
  * lastUpdateTime `string`: Tag last update time
  * name `string`: Tag name
  * signed `boolean`: Is signed

### TagAttributes_tag
* TagAttributes_tag `object`: Tag
  * signatureRecord `string`: SignatureRecord value

### TagList
* TagList `object`: List of tag details
  * imageName `string`: Image name
  * registry `string`: Registry name
  * tags `array`: List of tag attribute details
    * items [TagAttributesBase](#tagattributesbase)

### V1Manifest
* V1Manifest `object`: Returns the requested V1 manifest file
  * architecture `string`: CPU architecture
  * fsLayers `array`: List of layer information
    * items [FsLayer](#fslayer)
  * history `array`: Image history
    * items [History](#history)
  * name `string`: Image name
  * signatures `array`: Image signature
    * items [ImageSignature](#imagesignature)
  * tag `string`: Image tag
  * schemaVersion `integer`: Schema version

### V2Manifest
* V2Manifest `object`: Returns the requested Docker V2 Manifest file
  * config [Descriptor](#descriptor)
  * layers `array`: List of V2 image layer information
    * items [Descriptor](#descriptor)
  * mediaType `string`: Media type for this Manifest
  * schemaVersion `integer`: Schema version


