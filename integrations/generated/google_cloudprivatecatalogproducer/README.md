# @datafire/google_cloudprivatecatalogproducer

Client library for Cloud Private Catalog Producer

## Installation and Usage
```bash
npm install --save @datafire/google_cloudprivatecatalogproducer
```
```js
let google_cloudprivatecatalogproducer = require('@datafire/google_cloudprivatecatalogproducer').create({
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

Enables cloud users to manage and share enterprise catalogs intheir organizations.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudprivatecatalogproducer.oauthCallback({
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
google_cloudprivatecatalogproducer.oauthRefresh(null, context)
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

### cloudprivatecatalogproducer.catalogs.list
Lists Catalog resources that the producer has access to, within the
scope of the parent resource.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of catalogs to return.
  * pageToken `string`: A pagination token returned from a previous call to ListCatalogs
  * parent `string`: The resource name of the parent resource.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse](#googlecloudprivatecatalogproducerv1beta1listcatalogsresponse)

### cloudprivatecatalogproducer.catalogs.create
Creates a new Catalog resource.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.create({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudPrivatecatalogproducerV1beta1Catalog](#googlecloudprivatecatalogproducerv1beta1catalog)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### cloudprivatecatalogproducer.operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.operations.list({}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name `string`: The name of the operation's parent resource.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleLongrunningListOperationsResponse](#googlelongrunninglistoperationsresponse)

### cloudprivatecatalogproducer.catalogs.products.versions.delete
Hard deletes a Version.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.versions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the version.
  * force `boolean`: Forces deletion of the `Catalog` and its `Association` resources.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### cloudprivatecatalogproducer.catalogs.products.versions.get
Returns the requested Version resource.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.versions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the version.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1Version](#googlecloudprivatecatalogproducerv1beta1version)

### cloudprivatecatalogproducer.catalogs.products.versions.patch
Updates a specific Version resource.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.versions.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the version, in the format
  * updateMask `string`: Field mask that controls which fields of the version should be updated.
  * body [GoogleCloudPrivatecatalogproducerV1beta1Version](#googlecloudprivatecatalogproducerv1beta1version)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1Version](#googlecloudprivatecatalogproducerv1beta1version)

### cloudprivatecatalogproducer.operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [GoogleLongrunningCancelOperationRequest](#googlelongrunningcanceloperationrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### cloudprivatecatalogproducer.catalogs.products.copy
Copies a Product under another Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.copy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the current product that is copied from.
  * body [GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest](#googlecloudprivatecatalogproducerv1beta1copyproductrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### cloudprivatecatalogproducer.catalogs.undelete
Undeletes a deleted Catalog and all resources under it.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.undelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the catalog.
  * body [GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest](#googlecloudprivatecatalogproducerv1beta1undeletecatalogrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1Catalog](#googlecloudprivatecatalogproducerv1beta1catalog)

### cloudprivatecatalogproducer.catalogs.associations.list
Lists all Association resources under a catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.associations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The resource name of the `Catalog` whose `Associations` are
  * pageSize `integer`: The maximum number of catalog associations to return.
  * pageToken `string`: A pagination token returned from the previous call to
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse](#googlecloudprivatecatalogproducerv1beta1listassociationsresponse)

### cloudprivatecatalogproducer.catalogs.associations.create
Creates an Association instance under a given Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.associations.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The `Catalog` resource's name.
  * body [GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest](#googlecloudprivatecatalogproducerv1beta1createassociationrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1Association](#googlecloudprivatecatalogproducerv1beta1association)

### cloudprivatecatalogproducer.catalogs.products.list
Lists Product resources that the producer has access to, within the
scope of the parent catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The resource name of the parent resource.
  * filter `string`: A filter expression used to restrict the returned results based
  * pageSize `integer`: The maximum number of products to return.
  * pageToken `string`: A pagination token returned from a previous call to ListProducts
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse](#googlecloudprivatecatalogproducerv1beta1listproductsresponse)

### cloudprivatecatalogproducer.catalogs.products.create
Creates a Product instance under a given Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The catalog name of the new product's parent.
  * body [GoogleCloudPrivatecatalogproducerV1beta1Product](#googlecloudprivatecatalogproducerv1beta1product)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1Product](#googlecloudprivatecatalogproducerv1beta1product)

### cloudprivatecatalogproducer.catalogs.products.versions.list
Lists Version resources that the producer has access to, within the
scope of the parent Product.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.versions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The resource name of the parent resource.
  * pageSize `integer`: The maximum number of versions to return.
  * pageToken `string`: A pagination token returned from a previous call to ListVersions
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse](#googlecloudprivatecatalogproducerv1beta1listversionsresponse)

### cloudprivatecatalogproducer.catalogs.products.versions.create
Creates a Version instance under a given Product.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.versions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The product name of the new version's parent.
  * body [GoogleCloudPrivatecatalogproducerV1beta1Version](#googlecloudprivatecatalogproducerv1beta1version)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### cloudprivatecatalogproducer.catalogs.products.icons.upload
Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.products.icons.upload({
  "product": ""
}, context)
```

#### Input
* input `object`
  * product **required** `string`: The resource name of the product.
  * body [GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest](#googlecloudprivatecatalogproducerv1beta1uploadiconrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### cloudprivatecatalogproducer.catalogs.getIamPolicy
Gets IAM policy for the specified Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleIamV1Policy](#googleiamv1policy)

### cloudprivatecatalogproducer.catalogs.setIamPolicy
Sets the IAM policy for the specified Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * body [GoogleIamV1SetIamPolicyRequest](#googleiamv1setiampolicyrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleIamV1Policy](#googleiamv1policy)

### cloudprivatecatalogproducer.catalogs.testIamPermissions
Tests the IAM permissions for the specified Catalog.


```js
google_cloudprivatecatalogproducer.cloudprivatecatalogproducer.catalogs.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * body [GoogleIamV1TestIamPermissionsRequest](#googleiamv1testiampermissionsrequest)
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP

#### Output
* output [GoogleIamV1TestIamPermissionsResponse](#googleiamv1testiampermissionsresponse)



## Definitions

### GoogleCloudPrivatecatalogproducerV1beta1Association
* GoogleCloudPrivatecatalogproducerV1beta1Association `object`: An association tuple that pairs a `Catalog` to a resource
  * createTime `string`: The creation time of the association.
  * name `string`: Output only. The resource name of the catalog association, in the format
  * resource `string`: Required. The user-supplied fully qualified name of the `Resource`

### GoogleCloudPrivatecatalogproducerV1beta1Catalog
* GoogleCloudPrivatecatalogproducerV1beta1Catalog `object`: The producer representation of a catalog which is a curated collection of
  * createTime `string`: Output only. The time when the catalog was created.
  * description `string`: Required. The user-supplied description of the catalog. Maximum of 512
  * displayName `string`: Required. The user-supplied descriptive name of the catalog as it appears
  * name `string`: Output only. The resource name of the catalog, in the format
  * parent `string`: Required. The parent resource name of the catalog, which can't be changed
  * updateTime `string`: Output only. The time when the catalog was last updated.

### GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest
* GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest `object`
  * destinationProductName `string`: The resource name of the destination product that is copied to.

### GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest
* GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest `object`
  * association [GoogleCloudPrivatecatalogproducerV1beta1Association](#googlecloudprivatecatalogproducerv1beta1association)

### GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse
* GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse `object`
  * associations `array`: The returned `Association` resources from the list call.
    * items [GoogleCloudPrivatecatalogproducerV1beta1Association](#googlecloudprivatecatalogproducerv1beta1association)
  * nextPageToken `string`: A pagination token returned from a previous call to

### GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse
* GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse `object`
  * catalogs `array`: The `Catalogs` returned from the list call.
    * items [GoogleCloudPrivatecatalogproducerV1beta1Catalog](#googlecloudprivatecatalogproducerv1beta1catalog)
  * nextPageToken `string`: A pagination token returned from a previous call to ListCatalogs

### GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse
* GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse `object`
  * nextPageToken `string`: A pagination token returned from a previous call to ListProducts
  * products `array`: The `Product` returned from the list call.
    * items [GoogleCloudPrivatecatalogproducerV1beta1Product](#googlecloudprivatecatalogproducerv1beta1product)

### GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse
* GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse `object`
  * nextPageToken `string`: A pagination token returned from a previous call to ListProducts
  * versions `array`: The `VersiVersionon` returned from the list call.
    * items [GoogleCloudPrivatecatalogproducerV1beta1Version](#googlecloudprivatecatalogproducerv1beta1version)

### GoogleCloudPrivatecatalogproducerV1beta1Product
* GoogleCloudPrivatecatalogproducerV1beta1Product `object`: The producer representation of a product which is a child resource of
  * assetType `string`: Required. The type of the product asset, which cannot be changed after the
  * createTime `string`: Output only. The time when the product was created.
  * displayMetadata `object`: The user-supplied display metadata to describe the product.
  * iconUri `string`: Output only. The public accessible URI of the icon uploaded by
  * name `string`: Required. The resource name of the product in the format
  * updateTime `string`: Output only. The time when the product was last updated.

### GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest
* GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest `object`

### GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest
* GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest `object`
  * icon `string`: The raw icon bytes user-supplied to be uploaded to the product. The format

### GoogleCloudPrivatecatalogproducerV1beta1Version
* GoogleCloudPrivatecatalogproducerV1beta1Version `object`: The producer representation of a version, which is a child resource under a
  * asset `object`: Output only. The asset which has been validated and is ready to be
  * createTime `string`: Output only. The time when the version was created.
  * description `string`: The user-supplied description of the version. Maximum of 256 characters.
  * name `string`: Required. The resource name of the version, in the format
  * originalAsset `object`: The user-supplied asset payload. The maximum size of the payload is 2MB.
  * updateTime `string`: Output only. The time when the version was last updated.

### GoogleIamV1AuditConfig
* GoogleIamV1AuditConfig `object`: Specifies the audit configuration for a service.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [GoogleIamV1AuditLogConfig](#googleiamv1auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging.

### GoogleIamV1AuditLogConfig
* GoogleIamV1AuditLogConfig `object`: Provides the configuration for logging a type of permissions.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### GoogleIamV1Binding
* GoogleIamV1Binding `object`: Associates `members` with a `role`.
  * condition [GoogleTypeExpr](#googletypeexpr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### GoogleIamV1Policy
* GoogleIamV1Policy `object`: An Identity and Access Management (IAM) policy, which specifies access
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [GoogleIamV1AuditConfig](#googleiamv1auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a
    * items [GoogleIamV1Binding](#googleiamv1binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Specifies the format of the policy.

### GoogleIamV1SetIamPolicyRequest
* GoogleIamV1SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [GoogleIamV1Policy](#googleiamv1policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### GoogleIamV1TestIamPermissionsRequest
* GoogleIamV1TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### GoogleIamV1TestIamPermissionsResponse
* GoogleIamV1TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### GoogleLongrunningCancelOperationRequest
* GoogleLongrunningCancelOperationRequest `object`: The request message for Operations.CancelOperation.

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### GoogleTypeExpr
* GoogleTypeExpr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which
  * expression `string`: Textual representation of an expression in
  * location `string`: An optional string indicating the location of the expression for error
  * title `string`: An optional title for the expression, i.e. a short string describing


