# @datafire/google_datacatalog

Client library for Google Cloud Data Catalog API

## Installation and Usage
```bash
npm install --save @datafire/google_datacatalog
```
```js
let google_datacatalog = require('@datafire/google_datacatalog').create({
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

A fully managed and highly scalable data discovery and metadata management service. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_datacatalog.oauthCallback({
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
google_datacatalog.oauthRefresh(null, context)
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

### datacatalog.catalog.search
Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequentally call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.


```js
google_datacatalog.datacatalog.catalog.search({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudDatacatalogV1beta1SearchCatalogRequest](#googleclouddatacatalogv1beta1searchcatalogrequest)
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
* output [GoogleCloudDatacatalogV1beta1SearchCatalogResponse](#googleclouddatacatalogv1beta1searchcatalogresponse)

### datacatalog.entries.lookup
Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.


```js
google_datacatalog.datacatalog.entries.lookup({}, context)
```

#### Input
* input `object`
  * linkedResource `string`: The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId
  * sqlResource `string`: The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s shoud satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
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
* output [GoogleCloudDatacatalogV1beta1Entry](#googleclouddatacatalogv1beta1entry)

### datacatalog.projects.locations.taxonomies.policyTags.delete
Deletes a policy tag. Also deletes all of its descendant policy tags.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.
  * force `boolean`: Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.
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

### datacatalog.projects.locations.taxonomies.policyTags.get
Gets a policy tag.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the requested policy tag.
  * readMask `string`: The fields to return. If not set or empty, all fields are returned.
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
* output [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)

### datacatalog.projects.locations.taxonomies.policyTags.patch
Updates a policy tag.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
  * updateMask `string`: The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
  * body [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)
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
* output [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)

### datacatalog.projects.locations.tagTemplates.fields.enumValues.rename
Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.


```js
google_datacatalog.datacatalog.projects.locations.tagTemplates.fields.enumValues.rename({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name}
  * body [GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest](#googleclouddatacatalogv1beta1renametagtemplatefieldenumvaluerequest)
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
* output [GoogleCloudDatacatalogV1beta1TagTemplateField](#googleclouddatacatalogv1beta1tagtemplatefield)

### datacatalog.projects.locations.entryGroups.entries.list
Lists entries.


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.entries.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
  * pageSize `integer`: The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
  * pageToken `string`: Token that specifies which page is requested. If empty, the first page is returned.
  * readMask `string`: The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.
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
* output [GoogleCloudDatacatalogV1beta1ListEntriesResponse](#googleclouddatacatalogv1beta1listentriesresponse)

### datacatalog.projects.locations.entryGroups.entries.create
Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.entries.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
  * entryId `string`: Required. The id of the entry to create.
  * body [GoogleCloudDatacatalogV1beta1Entry](#googleclouddatacatalogv1beta1entry)
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
* output [GoogleCloudDatacatalogV1beta1Entry](#googleclouddatacatalogv1beta1entry)

### datacatalog.projects.locations.entryGroups.list
Lists entry groups.


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}
  * pageSize `integer`: Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
  * pageToken `string`: Optional. Token that specifies which page is requested. If empty, the first page is returned.
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
* output [GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse](#googleclouddatacatalogv1beta1listentrygroupsresponse)

### datacatalog.projects.locations.entryGroups.create
A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
  * entryGroupId `string`: Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.
  * body [GoogleCloudDatacatalogV1beta1EntryGroup](#googleclouddatacatalogv1beta1entrygroup)
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
* output [GoogleCloudDatacatalogV1beta1EntryGroup](#googleclouddatacatalogv1beta1entrygroup)

### datacatalog.projects.locations.tagTemplates.fields.create
Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).


```js
google_datacatalog.datacatalog.projects.locations.tagTemplates.fields.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}
  * tagTemplateFieldId `string`: Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
  * body [GoogleCloudDatacatalogV1beta1TagTemplateField](#googleclouddatacatalogv1beta1tagtemplatefield)
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
* output [GoogleCloudDatacatalogV1beta1TagTemplateField](#googleclouddatacatalogv1beta1tagtemplatefield)

### datacatalog.projects.locations.taxonomies.policyTags.list
Lists all policy tags in a taxonomy.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the taxonomy to list the policy tags of.
  * pageSize `integer`: The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.
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
* output [GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse](#googleclouddatacatalogv1beta1listpolicytagsresponse)

### datacatalog.projects.locations.taxonomies.policyTags.create
Creates a policy tag in the specified taxonomy.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the taxonomy that the policy tag will belong to.
  * body [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)
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
* output [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)

### datacatalog.projects.locations.tagTemplates.create
Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).


```js
google_datacatalog.datacatalog.projects.locations.tagTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1
  * tagTemplateId `string`: Required. The id of the tag template to create.
  * body [GoogleCloudDatacatalogV1beta1TagTemplate](#googleclouddatacatalogv1beta1tagtemplate)
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
* output [GoogleCloudDatacatalogV1beta1TagTemplate](#googleclouddatacatalogv1beta1tagtemplate)

### datacatalog.projects.locations.entryGroups.tags.list
Lists the tags on an Entry.


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.tags.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
  * pageSize `integer`: The maximum number of tags to return. Default is 10. Max limit is 1000.
  * pageToken `string`: Token that specifies which page is requested. If empty, the first page is returned.
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
* output [GoogleCloudDatacatalogV1beta1ListTagsResponse](#googleclouddatacatalogv1beta1listtagsresponse)

### datacatalog.projects.locations.entryGroups.tags.create
Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.


```js
google_datacatalog.datacatalog.projects.locations.entryGroups.tags.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.
  * body [GoogleCloudDatacatalogV1beta1Tag](#googleclouddatacatalogv1beta1tag)
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
* output [GoogleCloudDatacatalogV1beta1Tag](#googleclouddatacatalogv1beta1tag)

### datacatalog.projects.locations.taxonomies.list
Lists all taxonomies in a project in a particular location that the caller has permission to view.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the project to list the taxonomies of.
  * pageSize `integer`: The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.
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
* output [GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse](#googleclouddatacatalogv1beta1listtaxonomiesresponse)

### datacatalog.projects.locations.taxonomies.create
Creates a taxonomy in the specified project.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the project that the taxonomy will belong to.
  * body [GoogleCloudDatacatalogV1beta1Taxonomy](#googleclouddatacatalogv1beta1taxonomy)
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
* output [GoogleCloudDatacatalogV1beta1Taxonomy](#googleclouddatacatalogv1beta1taxonomy)

### datacatalog.projects.locations.taxonomies.export
Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.export({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the project that taxonomies to be exported will share.
  * serializedTaxonomies `boolean`: Export taxonomies as serialized taxonomies.
  * taxonomies `array`: Required. Resource names of the taxonomies to be exported.
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
* output [GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse](#googleclouddatacatalogv1beta1exporttaxonomiesresponse)

### datacatalog.projects.locations.taxonomies.import
Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.import({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of project that the imported taxonomies will belong to.
  * body [GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest](#googleclouddatacatalogv1beta1importtaxonomiesrequest)
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
* output [GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse](#googleclouddatacatalogv1beta1importtaxonomiesresponse)

### datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy
Gets the IAM policy for a taxonomy or a policy tag.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
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
* output [Policy](#policy)

### datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy
Sets the IAM policy for a taxonomy or a policy tag.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
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
* output [Policy](#policy)

### datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions
Returns the permissions that a caller has on the specified taxonomy or policy tag.


```js
google_datacatalog.datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec
* GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec `object`: Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
  * dataset `string`: Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.
  * shardCount `string`: Output only. Total number of shards.
  * tablePrefix `string`: Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`.

### GoogleCloudDatacatalogV1beta1BigQueryTableSpec
* GoogleCloudDatacatalogV1beta1BigQueryTableSpec `object`: Describes a BigQuery table.
  * tableSourceType `string` (values: TABLE_SOURCE_TYPE_UNSPECIFIED, BIGQUERY_VIEW, BIGQUERY_TABLE, BIGQUERY_MATERIALIZED_VIEW): Output only. The table source type.
  * tableSpec [GoogleCloudDatacatalogV1beta1TableSpec](#googleclouddatacatalogv1beta1tablespec)
  * viewSpec [GoogleCloudDatacatalogV1beta1ViewSpec](#googleclouddatacatalogv1beta1viewspec)

### GoogleCloudDatacatalogV1beta1ColumnSchema
* GoogleCloudDatacatalogV1beta1ColumnSchema `object`: Representation of a column within a schema. Columns could be nested inside other columns.
  * column `string`: Required. Name of the column.
  * description `string`: Optional. Description of the column. Default value is an empty string.
  * mode `string`: Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`.
  * subcolumns `array`: Optional. Schema of sub-columns. A column can have zero or more sub-columns.
    * items [GoogleCloudDatacatalogV1beta1ColumnSchema](#googleclouddatacatalogv1beta1columnschema)
  * type `string`: Required. Type of the column.

### GoogleCloudDatacatalogV1beta1Entry
* GoogleCloudDatacatalogV1beta1Entry `object`: Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
  * bigqueryDateShardedSpec [GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec](#googleclouddatacatalogv1beta1bigquerydateshardedspec)
  * bigqueryTableSpec [GoogleCloudDatacatalogV1beta1BigQueryTableSpec](#googleclouddatacatalogv1beta1bigquerytablespec)
  * description `string`: Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.
  * displayName `string`: Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.
  * gcsFilesetSpec [GoogleCloudDatacatalogV1beta1GcsFilesetSpec](#googleclouddatacatalogv1beta1gcsfilesetspec)
  * integratedSystem `string` (values: INTEGRATED_SYSTEM_UNSPECIFIED, BIGQUERY, CLOUD_PUBSUB, DPMS): Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.
  * linkedResource `string`: The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.
  * name `string`: The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
  * schema [GoogleCloudDatacatalogV1beta1Schema](#googleclouddatacatalogv1beta1schema)
  * sourceSystemTimestamps [GoogleCloudDatacatalogV1beta1SystemTimestamps](#googleclouddatacatalogv1beta1systemtimestamps)
  * type `string` (values: ENTRY_TYPE_UNSPECIFIED, TABLE, MODEL, DATA_STREAM, FILESET): The type of the entry. Only used for Entries with types in the EntryType enum.
  * userSpecifiedSystem `string`: This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
  * userSpecifiedType `string`: Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.

### GoogleCloudDatacatalogV1beta1EntryGroup
* GoogleCloudDatacatalogV1beta1EntryGroup `object`: EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
  * dataCatalogTimestamps [GoogleCloudDatacatalogV1beta1SystemTimestamps](#googleclouddatacatalogv1beta1systemtimestamps)
  * description `string`: Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.
  * displayName `string`: A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
  * name `string`: The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.

### GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
* GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse `object`: Response message for ExportTaxonomies.
  * taxonomies `array`: List of taxonomies and policy tags in a tree structure.
    * items [GoogleCloudDatacatalogV1beta1SerializedTaxonomy](#googleclouddatacatalogv1beta1serializedtaxonomy)

### GoogleCloudDatacatalogV1beta1FieldType
* GoogleCloudDatacatalogV1beta1FieldType `object`
  * enumType [GoogleCloudDatacatalogV1beta1FieldTypeEnumType](#googleclouddatacatalogv1beta1fieldtypeenumtype)
  * primitiveType `string` (values: PRIMITIVE_TYPE_UNSPECIFIED, DOUBLE, STRING, BOOL, TIMESTAMP): Represents primitive types - string, bool etc.

### GoogleCloudDatacatalogV1beta1FieldTypeEnumType
* GoogleCloudDatacatalogV1beta1FieldTypeEnumType `object`
  * allowedValues `array`
    * items [GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue](#googleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue)

### GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue
* GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue `object`
  * displayName `string`: Required. The display name of the enum value. Must not be an empty string.

### GoogleCloudDatacatalogV1beta1GcsFileSpec
* GoogleCloudDatacatalogV1beta1GcsFileSpec `object`: Specifications of a single file in Cloud Storage.
  * filePath `string`: Required. The full file path. Example: `gs://bucket_name/a/b.txt`.
  * gcsTimestamps [GoogleCloudDatacatalogV1beta1SystemTimestamps](#googleclouddatacatalogv1beta1systemtimestamps)
  * sizeBytes `string`: Output only. The size of the file, in bytes.

### GoogleCloudDatacatalogV1beta1GcsFilesetSpec
* GoogleCloudDatacatalogV1beta1GcsFilesetSpec `object`: Describes a Cloud Storage fileset entry.
  * filePatterns `array`: Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported. Examples of valid file_patterns: * `gs://bucket_name/dir/*`: matches all files within `bucket_name/dir` directory. * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` spanning all subdirectories. * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to provide more powerful matches, for example: * `gs://bucket_name/[a-m]??.j*g`
    * items `string`
  * sampleGcsFileSpecs `array`: Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.
    * items [GoogleCloudDatacatalogV1beta1GcsFileSpec](#googleclouddatacatalogv1beta1gcsfilespec)

### GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest
* GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest `object`: Request message for ImportTaxonomies.
  * inlineSource [GoogleCloudDatacatalogV1beta1InlineSource](#googleclouddatacatalogv1beta1inlinesource)

### GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
* GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse `object`: Response message for ImportTaxonomies.
  * taxonomies `array`: Taxonomies that were imported.
    * items [GoogleCloudDatacatalogV1beta1Taxonomy](#googleclouddatacatalogv1beta1taxonomy)

### GoogleCloudDatacatalogV1beta1InlineSource
* GoogleCloudDatacatalogV1beta1InlineSource `object`: Inline source used for taxonomies import.
  * taxonomies `array`: Required. Taxonomies to be imported.
    * items [GoogleCloudDatacatalogV1beta1SerializedTaxonomy](#googleclouddatacatalogv1beta1serializedtaxonomy)

### GoogleCloudDatacatalogV1beta1ListEntriesResponse
* GoogleCloudDatacatalogV1beta1ListEntriesResponse `object`: Response message for ListEntries.
  * entries `array`: Entry details.
    * items [GoogleCloudDatacatalogV1beta1Entry](#googleclouddatacatalogv1beta1entry)
  * nextPageToken `string`: Token to retrieve the next page of results. It is set to empty if no items remain in results.

### GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
* GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse `object`: Response message for ListEntryGroups.
  * entryGroups `array`: EntryGroup details.
    * items [GoogleCloudDatacatalogV1beta1EntryGroup](#googleclouddatacatalogv1beta1entrygroup)
  * nextPageToken `string`: Token to retrieve the next page of results. It is set to empty if no items remain in results.

### GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
* GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse `object`: Response message for ListPolicyTags.
  * nextPageToken `string`: Token used to retrieve the next page of results, or empty if there are no more results in the list.
  * policyTags `array`: The policy tags that are in the requested taxonomy.
    * items [GoogleCloudDatacatalogV1beta1PolicyTag](#googleclouddatacatalogv1beta1policytag)

### GoogleCloudDatacatalogV1beta1ListTagsResponse
* GoogleCloudDatacatalogV1beta1ListTagsResponse `object`: Response message for ListTags.
  * tags `array`: Tag details.
    * items [GoogleCloudDatacatalogV1beta1Tag](#googleclouddatacatalogv1beta1tag)
  * nextPageToken `string`: Token to retrieve the next page of results. It is set to empty if no items remain in results.

### GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
* GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse `object`: Response message for ListTaxonomies.
  * nextPageToken `string`: Token used to retrieve the next page of results, or empty if there are no more results in the list.
  * taxonomies `array`: Taxonomies that the project contains.
    * items [GoogleCloudDatacatalogV1beta1Taxonomy](#googleclouddatacatalogv1beta1taxonomy)

### GoogleCloudDatacatalogV1beta1PolicyTag
* GoogleCloudDatacatalogV1beta1PolicyTag `object`: Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
  * childPolicyTags `array`: Output only. Resource names of child policy tags of this policy tag.
    * items `string`
  * description `string`: Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.
  * displayName `string`: Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
  * name `string`: Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
  * parentPolicyTag `string`: Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string.

### GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest
* GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest `object`: Request message for RenameTagTemplateFieldEnumValue.
  * newEnumValueDisplayName `string`: Required. The new display name of the enum value. For example, `my_new_enum_value`.

### GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest
* GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest `object`: Request message for RenameTagTemplateField.
  * newTagTemplateFieldId `string`: Required. The new ID of this tag template field. For example, `my_new_field`.

### GoogleCloudDatacatalogV1beta1Schema
* GoogleCloudDatacatalogV1beta1Schema `object`: Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
  * columns `array`: Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified.
    * items [GoogleCloudDatacatalogV1beta1ColumnSchema](#googleclouddatacatalogv1beta1columnschema)

### GoogleCloudDatacatalogV1beta1SearchCatalogRequest
* GoogleCloudDatacatalogV1beta1SearchCatalogRequest `object`: Request message for SearchCatalog.
  * orderBy `string`: Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc|desc]`, defaults to descending if not specified If not specified, defaults to `relevance` descending.
  * pageSize `integer`: Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.
  * pageToken `string`: Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.
  * query `string`: Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
  * scope [GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope](#googleclouddatacatalogv1beta1searchcatalogrequestscope)

### GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope
* GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope `object`: The criteria that select the subspace used for query matching.
  * includeGcpPublicDatasets `boolean`: If `true`, include Google Cloud Platform (GCP) public datasets in the search results. Info on GCP public datasets is available at https://cloud.google.com/public-datasets/. By default, GCP public datasets are excluded.
  * includeOrgIds `array`: The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization.
    * items `string`
  * includeProjectIds `array`: The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects.
    * items `string`
  * restrictedLocations `array`: Optional. The list of locations to search within. 1. If empty, search will be performed in all locations; 2. If any of the locations are NOT in the valid locations list, error will be returned; 3. Otherwise, search only the given locations for matching results. Typical usage is to leave this field empty. When a location is unreachable as returned in the `SearchCatalogResponse.unreachable` field, users can repeat the search request with this parameter set to get additional information on the error. Valid locations: * asia-east1 * asia-east2 * asia-northeast1 * asia-northeast2 * asia-northeast3 * asia-south1 * asia-southeast1 * australia-southeast1 * eu * europe-north1 * europe-west1 * europe-west2 * europe-west3 * europe-west4 * europe-west6 * global * northamerica-northeast1 * southamerica-east1 * us * us-central1 * us-east1 * us-east4 * us-west1 * us-west2
    * items `string`

### GoogleCloudDatacatalogV1beta1SearchCatalogResponse
* GoogleCloudDatacatalogV1beta1SearchCatalogResponse `object`: Response message for SearchCatalog.
  * nextPageToken `string`: The token that can be used to retrieve the next page of results.
  * results `array`: Search results.
    * items [GoogleCloudDatacatalogV1beta1SearchCatalogResult](#googleclouddatacatalogv1beta1searchcatalogresult)
  * unreachable `array`: Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for `SearchDataCatalogRequest.scope.restricted_locations`.
    * items `string`

### GoogleCloudDatacatalogV1beta1SearchCatalogResult
* GoogleCloudDatacatalogV1beta1SearchCatalogResult `object`: A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
  * linkedResource `string`: The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId`
  * relativeResourceName `string`: The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}`
  * searchResultSubtype `string`: Sub-type of the search result. This is a dot-delimited description of the resource's full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.
  * searchResultType `string` (values: SEARCH_RESULT_TYPE_UNSPECIFIED, ENTRY, TAG_TEMPLATE, ENTRY_GROUP): Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.

### GoogleCloudDatacatalogV1beta1SerializedPolicyTag
* GoogleCloudDatacatalogV1beta1SerializedPolicyTag `object`: Message representing one policy tag when exported as a nested proto.
  * childPolicyTags `array`: Children of the policy tag if any.
    * items [GoogleCloudDatacatalogV1beta1SerializedPolicyTag](#googleclouddatacatalogv1beta1serializedpolicytag)
  * description `string`: Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
  * displayName `string`: Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8.
  * policyTag `string`: Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies.

### GoogleCloudDatacatalogV1beta1SerializedTaxonomy
* GoogleCloudDatacatalogV1beta1SerializedTaxonomy `object`: Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
  * activatedPolicyTypes `array`: A list of policy types that are activated for a taxonomy.
    * items `string` (values: POLICY_TYPE_UNSPECIFIED, FINE_GRAINED_ACCESS_CONTROL)
  * description `string`: Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
  * displayName `string`: Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8.
  * policyTags `array`: Top level policy tags associated with the taxonomy if any.
    * items [GoogleCloudDatacatalogV1beta1SerializedPolicyTag](#googleclouddatacatalogv1beta1serializedpolicytag)

### GoogleCloudDatacatalogV1beta1SystemTimestamps
* GoogleCloudDatacatalogV1beta1SystemTimestamps `object`: Timestamps about this resource according to a particular system.
  * createTime `string`: The creation time of the resource within the given system.
  * expireTime `string`: Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources.
  * updateTime `string`: The last-modified time of the resource within the given system.

### GoogleCloudDatacatalogV1beta1TableSpec
* GoogleCloudDatacatalogV1beta1TableSpec `object`: Normal BigQuery table spec.
  * groupedEntry `string`: Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty.

### GoogleCloudDatacatalogV1beta1Tag
* GoogleCloudDatacatalogV1beta1Tag `object`: Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
  * column `string`: Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`
  * fields `object`: Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
  * name `string`: The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
  * template `string`: Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.
  * templateDisplayName `string`: Output only. The display name of the tag template.

### GoogleCloudDatacatalogV1beta1TagField
* GoogleCloudDatacatalogV1beta1TagField `object`: Contains the value and supporting information for a field within a Tag.
  * boolValue `boolean`: Holds the value for a tag field with boolean type.
  * displayName `string`: Output only. The display name of this field.
  * doubleValue `number`: Holds the value for a tag field with double type.
  * enumValue [GoogleCloudDatacatalogV1beta1TagFieldEnumValue](#googleclouddatacatalogv1beta1tagfieldenumvalue)
  * order `integer`: Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
  * stringValue `string`: Holds the value for a tag field with string type.
  * timestampValue `string`: Holds the value for a tag field with timestamp type.

### GoogleCloudDatacatalogV1beta1TagFieldEnumValue
* GoogleCloudDatacatalogV1beta1TagFieldEnumValue `object`: Holds an enum value.
  * displayName `string`: The display name of the enum value.

### GoogleCloudDatacatalogV1beta1TagTemplate
* GoogleCloudDatacatalogV1beta1TagTemplate `object`: A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
  * displayName `string`: The display name for this template. Defaults to an empty string.
  * fields `object`: Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore.
  * name `string`: The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name.

### GoogleCloudDatacatalogV1beta1TagTemplateField
* GoogleCloudDatacatalogV1beta1TagTemplateField `object`: The template for an individual field within a tag template.
  * description `string`: The description for this field. Defaults to an empty string.
  * displayName `string`: The display name for this field. Defaults to an empty string.
  * isRequired `boolean`: Whether this is a required field. Defaults to false.
  * name `string`: Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name.
  * order `integer`: The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
  * type [GoogleCloudDatacatalogV1beta1FieldType](#googleclouddatacatalogv1beta1fieldtype)

### GoogleCloudDatacatalogV1beta1Taxonomy
* GoogleCloudDatacatalogV1beta1Taxonomy `object`: A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
  * activatedPolicyTypes `array`: Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
    * items `string` (values: POLICY_TYPE_UNSPECIFIED, FINE_GRAINED_ACCESS_CONTROL)
  * description `string`: Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.
  * displayName `string`: Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
  * name `string`: Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
  * policyTagCount `integer`: Output only. Number of policy tags contained in this taxonomy.
  * taxonomyTimestamps [GoogleCloudDatacatalogV1beta1SystemTimestamps](#googleclouddatacatalogv1beta1systemtimestamps)

### GoogleCloudDatacatalogV1beta1ViewSpec
* GoogleCloudDatacatalogV1beta1ViewSpec `object`: Table view specification.
  * viewQuery `string`: Output only. The query that defines the table view.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`


