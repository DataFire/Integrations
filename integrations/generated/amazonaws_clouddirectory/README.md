# @datafire/amazonaws_clouddirectory

Client library for Amazon CloudDirectory

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_clouddirectory
```
```js
let amazonaws_clouddirectory = require('@datafire/amazonaws_clouddirectory').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>

## Actions

### BatchRead



```js
amazonaws_clouddirectory.BatchRead({
  "x-amz-data-partition": "",
  "Operations": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * Operations **required** `array`: A list of operations that are part of the batch.
    * items [BatchReadOperation](#batchreadoperation)

#### Output
* output [BatchReadResponse](#batchreadresponse)

### BatchWrite



```js
amazonaws_clouddirectory.BatchWrite({
  "x-amz-data-partition": "",
  "Operations": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Operations **required** `array`: A list of operations that are part of the batch.
    * items [BatchWriteOperation](#batchwriteoperation)

#### Output
* output [BatchWriteResponse](#batchwriteresponse)

### DeleteDirectory



```js
amazonaws_clouddirectory.DeleteDirectory({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [DeleteDirectoryResponse](#deletedirectoryresponse)

### CreateDirectory



```js
amazonaws_clouddirectory.CreateDirectory({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The name of the <a>Directory</a>. Should be unique per account, per region.

#### Output
* output [CreateDirectoryResponse](#createdirectoryresponse)

### DisableDirectory



```js
amazonaws_clouddirectory.DisableDirectory({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [DisableDirectoryResponse](#disabledirectoryresponse)

### EnableDirectory



```js
amazonaws_clouddirectory.EnableDirectory({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [EnableDirectoryResponse](#enabledirectoryresponse)

### GetDirectory



```js
amazonaws_clouddirectory.GetDirectory({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [GetDirectoryResponse](#getdirectoryresponse)

### ListDirectories



```js
amazonaws_clouddirectory.ListDirectories({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * state `string` (values: ENABLED, DISABLED, DELETED): The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.

#### Output
* output [ListDirectoriesResponse](#listdirectoriesresponse)

### GetFacet



```js
amazonaws_clouddirectory.GetFacet({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The name of the facet to retrieve.

#### Output
* output [GetFacetResponse](#getfacetresponse)

### UpdateFacet



```js
amazonaws_clouddirectory.UpdateFacet({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * AttributeUpdates `array`: List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. 
    * items [FacetAttributeUpdate](#facetattributeupdate)
  * Name **required** `string`: The name of the facet.
  * ObjectType `string` (values: NODE, LEAF_NODE, POLICY, INDEX): The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.

#### Output
* output [UpdateFacetResponse](#updatefacetresponse)

### ListFacetAttributes



```js
amazonaws_clouddirectory.ListFacetAttributes({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * Name **required** `string`: The name of the facet whose attributes will be retrieved.
  * NextToken `string`: The pagination token.

#### Output
* output [ListFacetAttributesResponse](#listfacetattributesresponse)

### CreateFacet



```js
amazonaws_clouddirectory.CreateFacet({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Attributes `array`: The attributes that are associated with the <a>Facet</a>.
    * items [FacetAttribute](#facetattribute)
  * FacetStyle `string` (values: STATIC, DYNAMIC): There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.
  * Name **required** `string`: The name of the <a>Facet</a>, which is unique for a given schema.
  * ObjectType `string` (values: NODE, LEAF_NODE, POLICY, INDEX): <p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul>

#### Output
* output [CreateFacetResponse](#createfacetresponse)

### DeleteFacet



```js
amazonaws_clouddirectory.DeleteFacet({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The name of the facet to delete.

#### Output
* output [DeleteFacetResponse](#deletefacetresponse)

### ListFacetNames



```js
amazonaws_clouddirectory.ListFacetNames({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.

#### Output
* output [ListFacetNamesResponse](#listfacetnamesresponse)

### CreateIndex



```js
amazonaws_clouddirectory.CreateIndex({
  "x-amz-data-partition": "",
  "OrderedIndexedAttributeList": [],
  "IsUnique": true
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * IsUnique **required** `boolean`: Indicates whether the attribute that is being indexed has unique values or not.
  * LinkName `string`: The name of the link between the parent object and the index object.
  * OrderedIndexedAttributeList **required** `array`: Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
    * items [AttributeKey](#attributekey)
  * ParentReference `object`: The reference that identifies an object.
    * Selector

#### Output
* output [CreateIndexResponse](#createindexresponse)

### AttachToIndex



```js
amazonaws_clouddirectory.AttachToIndex({
  "x-amz-data-partition": "",
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * IndexReference **required** `object`: The reference that identifies an object.
    * Selector
  * TargetReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [AttachToIndexResponse](#attachtoindexresponse)

### DetachFromIndex



```js
amazonaws_clouddirectory.DetachFromIndex({
  "x-amz-data-partition": "",
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * IndexReference **required** `object`: The reference that identifies an object.
    * Selector
  * TargetReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [DetachFromIndexResponse](#detachfromindexresponse)

### ListIndex



```js
amazonaws_clouddirectory.ListIndex({
  "x-amz-data-partition": "",
  "IndexReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * IndexReference **required** `object`: The reference that identifies an object.
    * Selector
  * MaxResults `integer`: The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
  * NextToken `string`: The pagination token.
  * RangesOnIndexedValues `array`: Specifies the ranges of indexed values that you want to query.
    * items [ObjectAttributeRange](#objectattributerange)

#### Output
* output [ListIndexResponse](#listindexresponse)

### CreateObject



```js
amazonaws_clouddirectory.CreateObject({
  "x-amz-data-partition": "",
  "SchemaFacets": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * LinkName `string`: The name of link that is used to attach this object to a parent.
  * ObjectAttributeList `array`: The attribute map whose attribute ARN contains the key and attribute value as the map value.
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ParentReference `object`: The reference that identifies an object.
    * Selector
  * SchemaFacets **required** `array`: A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.
    * items [SchemaFacet](#schemafacet)

#### Output
* output [CreateObjectResponse](#createobjectresponse)

### AttachObject



```js
amazonaws_clouddirectory.AttachObject({
  "x-amz-data-partition": "",
  "ParentReference": {},
  "ChildReference": {},
  "LinkName": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ChildReference **required** `object`: The reference that identifies an object.
    * Selector
  * LinkName **required** `string`: The link name with which the child object is attached to the parent.
  * ParentReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [AttachObjectResponse](#attachobjectresponse)

### ListObjectAttributes



```js
amazonaws_clouddirectory.ListObjectAttributes({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * FacetFilter `object`: A facet.
    * FacetName
    * SchemaArn
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListObjectAttributesResponse](#listobjectattributesresponse)

### GetObjectAttributes



```js
amazonaws_clouddirectory.GetObjectAttributes({
  "x-amz-data-partition": "",
  "ObjectReference": {},
  "SchemaFacet": {},
  "AttributeNames": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * AttributeNames **required** `array`: List of attribute names whose values will be retrieved.
    * items [AttributeName](#attributename)
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * SchemaFacet **required** `object`: A facet.
    * FacetName
    * SchemaArn

#### Output
* output [GetObjectAttributesResponse](#getobjectattributesresponse)

### ListObjectChildren



```js
amazonaws_clouddirectory.ListObjectChildren({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListObjectChildrenResponse](#listobjectchildrenresponse)

### DeleteObject



```js
amazonaws_clouddirectory.DeleteObject({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [DeleteObjectResponse](#deleteobjectresponse)

### DetachObject



```js
amazonaws_clouddirectory.DetachObject({
  "x-amz-data-partition": "",
  "ParentReference": {},
  "LinkName": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * LinkName **required** `string`: The link name associated with the object that needs to be detached.
  * ParentReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [DetachObjectResponse](#detachobjectresponse)

### AddFacetToObject



```js
amazonaws_clouddirectory.AddFacetToObject({
  "x-amz-data-partition": "",
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ObjectAttributeList `array`: Attributes on the facet that you are adding to the object.
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * SchemaFacet **required** `object`: A facet.
    * FacetName
    * SchemaArn

#### Output
* output [AddFacetToObjectResponse](#addfacettoobjectresponse)

### RemoveFacetFromObject



```js
amazonaws_clouddirectory.RemoveFacetFromObject({
  "x-amz-data-partition": "",
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * SchemaFacet **required** `object`: A facet.
    * FacetName
    * SchemaArn

#### Output
* output [RemoveFacetFromObjectResponse](#removefacetfromobjectresponse)

### ListAttachedIndices



```js
amazonaws_clouddirectory.ListAttachedIndices({
  "x-amz-data-partition": "",
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * TargetReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListAttachedIndicesResponse](#listattachedindicesresponse)

### GetObjectInformation



```js
amazonaws_clouddirectory.GetObjectInformation({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [GetObjectInformationResponse](#getobjectinformationresponse)

### ListObjectParents



```js
amazonaws_clouddirectory.ListObjectParents({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * IncludeAllLinksToEachParent `boolean`: When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListObjectParentsResponse](#listobjectparentsresponse)

### ListObjectParentPaths



```js
amazonaws_clouddirectory.ListObjectParentPaths({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListObjectParentPathsResponse](#listobjectparentpathsresponse)

### ListObjectPolicies



```js
amazonaws_clouddirectory.ListObjectPolicies({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListObjectPoliciesResponse](#listobjectpoliciesresponse)

### UpdateObjectAttributes



```js
amazonaws_clouddirectory.UpdateObjectAttributes({
  "x-amz-data-partition": "",
  "ObjectReference": {},
  "AttributeUpdates": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * AttributeUpdates **required** `array`: The attributes update structure.
    * items [ObjectAttributeUpdate](#objectattributeupdate)
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [UpdateObjectAttributesResponse](#updateobjectattributesresponse)

### AttachPolicy



```js
amazonaws_clouddirectory.AttachPolicy({
  "x-amz-data-partition": "",
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * PolicyReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [AttachPolicyResponse](#attachpolicyresponse)

### ListPolicyAttachments



```js
amazonaws_clouddirectory.ListPolicyAttachments({
  "x-amz-data-partition": "",
  "PolicyReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * x-amz-consistency-level `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The pagination token.
  * PolicyReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListPolicyAttachmentsResponse](#listpolicyattachmentsresponse)

### DetachPolicy



```js
amazonaws_clouddirectory.DetachPolicy({
  "x-amz-data-partition": "",
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * PolicyReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [DetachPolicyResponse](#detachpolicyresponse)

### LookupPolicy



```js
amazonaws_clouddirectory.LookupPolicy({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of items to be retrieved in a single call. This is an approximate number.
  * NextToken `string`: The token to request the next page of results.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [LookupPolicyResponse](#lookuppolicyresponse)

### DeleteSchema



```js
amazonaws_clouddirectory.DeleteSchema({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [DeleteSchemaResponse](#deleteschemaresponse)

### ListAppliedSchemaArns



```js
amazonaws_clouddirectory.ListAppliedSchemaArns({
  "DirectoryArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DirectoryArn **required** `string`: The ARN of the directory you are listing.
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * SchemaArn `string`: The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.

#### Output
* output [ListAppliedSchemaArnsResponse](#listappliedschemaarnsresponse)

### ApplySchema



```js
amazonaws_clouddirectory.ApplySchema({
  "x-amz-data-partition": "",
  "PublishedSchemaArn": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * PublishedSchemaArn **required** `string`: Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.

#### Output
* output [ApplySchemaResponse](#applyschemaresponse)

### CreateSchema



```js
amazonaws_clouddirectory.CreateSchema({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`: The name that is associated with the schema. This is unique to each account and in each region.

#### Output
* output [CreateSchemaResponse](#createschemaresponse)

### ListDevelopmentSchemaArns



```js
amazonaws_clouddirectory.ListDevelopmentSchemaArns({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.

#### Output
* output [ListDevelopmentSchemaArnsResponse](#listdevelopmentschemaarnsresponse)

### GetAppliedSchemaVersion



```js
amazonaws_clouddirectory.GetAppliedSchemaVersion({
  "SchemaArn": ""
}, context)
```

#### Input
* input `object`
  * SchemaArn **required** `string`: The ARN of the applied schema.

#### Output
* output [GetAppliedSchemaVersionResponse](#getappliedschemaversionresponse)

### GetSchemaAsJson



```js
amazonaws_clouddirectory.GetSchemaAsJson({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`

#### Output
* output [GetSchemaAsJsonResponse](#getschemaasjsonresponse)

### PutSchemaFromJson



```js
amazonaws_clouddirectory.PutSchemaFromJson({
  "x-amz-data-partition": "",
  "Document": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Document **required** `string`: The replacement JSON schema.

#### Output
* output [PutSchemaFromJsonResponse](#putschemafromjsonresponse)

### ListManagedSchemaArns



```js
amazonaws_clouddirectory.ListManagedSchemaArns({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * SchemaArn `string`: The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.

#### Output
* output [ListManagedSchemaArnsResponse](#listmanagedschemaarnsresponse)

### PublishSchema



```js
amazonaws_clouddirectory.PublishSchema({
  "x-amz-data-partition": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MinorVersion `string`: The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
  * Name `string`: The new name under which the schema will be published. If this is not provided, the development schema is considered.
  * Version **required** `string`: The major version under which the schema will be published. Schemas have both a major and minor version associated with them.

#### Output
* output [PublishSchemaResponse](#publishschemaresponse)

### ListPublishedSchemaArns



```js
amazonaws_clouddirectory.ListPublishedSchemaArns({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * SchemaArn `string`: The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.

#### Output
* output [ListPublishedSchemaArnsResponse](#listpublishedschemaarnsresponse)

### UpdateSchema



```js
amazonaws_clouddirectory.UpdateSchema({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The name of the schema.

#### Output
* output [UpdateSchemaResponse](#updateschemaresponse)

### UpgradeAppliedSchema



```js
amazonaws_clouddirectory.UpgradeAppliedSchema({
  "PublishedSchemaArn": "",
  "DirectoryArn": ""
}, context)
```

#### Input
* input `object`
  * DirectoryArn **required** `string`: The ARN for the directory to which the upgraded schema will be applied.
  * DryRun `boolean`: Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.
  * PublishedSchemaArn **required** `string`: The revision of the published schema to upgrade the directory to.

#### Output
* output [UpgradeAppliedSchemaResponse](#upgradeappliedschemaresponse)

### UpgradePublishedSchema



```js
amazonaws_clouddirectory.UpgradePublishedSchema({
  "DevelopmentSchemaArn": "",
  "PublishedSchemaArn": "",
  "MinorVersion": ""
}, context)
```

#### Input
* input `object`
  * DevelopmentSchemaArn **required** `string`: The ARN of the development schema with the changes used for the upgrade.
  * DryRun `boolean`: Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.
  * MinorVersion **required** `string`: Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
  * PublishedSchemaArn **required** `string`: The ARN of the published schema to be upgraded.

#### Output
* output [UpgradePublishedSchemaResponse](#upgradepublishedschemaresponse)

### ListTagsForResource



```js
amazonaws_clouddirectory.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
  * NextToken `string`: The pagination token. This is for future use. Currently pagination is not supported for tagging.
  * ResourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_clouddirectory.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
  * Tags **required** `array`: A list of tag key-value pairs.
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_clouddirectory.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
  * TagKeys **required** `array`: Keys of the tag that need to be removed from the resource.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### AttachTypedLink



```js
amazonaws_clouddirectory.AttachTypedLink({
  "x-amz-data-partition": "",
  "SourceObjectReference": {},
  "TargetObjectReference": {},
  "TypedLinkFacet": {},
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Attributes **required** `array`: A set of attributes that are associated with the typed link.
    * items [AttributeNameAndValue](#attributenameandvalue)
  * SourceObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * TargetObjectReference **required** `object`: The reference that identifies an object.
    * Selector
  * TypedLinkFacet **required** `object`: Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    * SchemaArn
    * TypedLinkName

#### Output
* output [AttachTypedLinkResponse](#attachtypedlinkresponse)

### GetLinkAttributes



```js
amazonaws_clouddirectory.GetLinkAttributes({
  "x-amz-data-partition": "",
  "TypedLinkSpecifier": {},
  "AttributeNames": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * AttributeNames **required** `array`: A list of attribute names whose values will be retrieved.
    * items [AttributeName](#attributename)
  * ConsistencyLevel `string` (values: SERIALIZABLE, EVENTUAL): The consistency level at which to retrieve the attributes on a typed link.
  * TypedLinkSpecifier **required** `object`: Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    * IdentityAttributeValues
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference
      * Selector
    * TargetObjectReference
      * Selector
    * TypedLinkFacet
      * SchemaArn **required**
      * TypedLinkName **required**

#### Output
* output [GetLinkAttributesResponse](#getlinkattributesresponse)

### UpdateLinkAttributes



```js
amazonaws_clouddirectory.UpdateLinkAttributes({
  "x-amz-data-partition": "",
  "TypedLinkSpecifier": {},
  "AttributeUpdates": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * AttributeUpdates **required** `array`: The attributes update structure.
    * items [LinkAttributeUpdate](#linkattributeupdate)
  * TypedLinkSpecifier **required** `object`: Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    * IdentityAttributeValues
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference
      * Selector
    * TargetObjectReference
      * Selector
    * TypedLinkFacet
      * SchemaArn **required**
      * TypedLinkName **required**

#### Output
* output [UpdateLinkAttributesResponse](#updatelinkattributesresponse)

### DetachTypedLink



```js
amazonaws_clouddirectory.DetachTypedLink({
  "x-amz-data-partition": "",
  "TypedLinkSpecifier": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * TypedLinkSpecifier **required** `object`: Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    * IdentityAttributeValues
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference
      * Selector
    * TargetObjectReference
      * Selector
    * TypedLinkFacet
      * SchemaArn **required**
      * TypedLinkName **required**

#### Output
*Output schema unknown*

### UpdateTypedLinkFacet



```js
amazonaws_clouddirectory.UpdateTypedLinkFacet({
  "x-amz-data-partition": "",
  "Name": "",
  "AttributeUpdates": [],
  "IdentityAttributeOrder": []
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * AttributeUpdates **required** `array`: Attributes update structure.
    * items [TypedLinkFacetAttributeUpdate](#typedlinkfacetattributeupdate)
  * IdentityAttributeOrder **required** `array`: The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
    * items [AttributeName](#attributename)
  * Name **required** `string`: The unique name of the typed link facet.

#### Output
* output [UpdateTypedLinkFacetResponse](#updatetypedlinkfacetresponse)

### ListTypedLinkFacetAttributes



```js
amazonaws_clouddirectory.ListTypedLinkFacetAttributes({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * Name **required** `string`: The unique name of the typed link facet.
  * NextToken `string`: The pagination token.

#### Output
* output [ListTypedLinkFacetAttributesResponse](#listtypedlinkfacetattributesresponse)

### CreateTypedLinkFacet



```js
amazonaws_clouddirectory.CreateTypedLinkFacet({
  "x-amz-data-partition": "",
  "Facet": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Facet **required** `object`: Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
    * Attributes
      * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)
    * IdentityAttributeOrder
      * items [AttributeName](#attributename)
    * Name

#### Output
* output [CreateTypedLinkFacetResponse](#createtypedlinkfacetresponse)

### DeleteTypedLinkFacet



```js
amazonaws_clouddirectory.DeleteTypedLinkFacet({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The unique name of the typed link facet.

#### Output
* output [DeleteTypedLinkFacetResponse](#deletetypedlinkfacetresponse)

### GetTypedLinkFacetInformation



```js
amazonaws_clouddirectory.GetTypedLinkFacetInformation({
  "x-amz-data-partition": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * Name **required** `string`: The unique name of the typed link facet.

#### Output
* output [GetTypedLinkFacetInformationResponse](#gettypedlinkfacetinformationresponse)

### ListTypedLinkFacetNames



```js
amazonaws_clouddirectory.ListTypedLinkFacetNames({
  "x-amz-data-partition": ""
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.

#### Output
* output [ListTypedLinkFacetNamesResponse](#listtypedlinkfacetnamesresponse)

### ListIncomingTypedLinks



```js
amazonaws_clouddirectory.ListIncomingTypedLinks({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ConsistencyLevel `string` (values: SERIALIZABLE, EVENTUAL): The consistency level to execute the request at.
  * FilterAttributeRanges `array`: Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink `object`: Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    * SchemaArn
    * TypedLinkName
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListIncomingTypedLinksResponse](#listincomingtypedlinksresponse)

### ListOutgoingTypedLinks



```js
amazonaws_clouddirectory.ListOutgoingTypedLinks({
  "x-amz-data-partition": "",
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * x-amz-data-partition **required** `string`
  * ConsistencyLevel `string` (values: SERIALIZABLE, EVENTUAL): The consistency level to execute the request at.
  * FilterAttributeRanges `array`: Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink `object`: Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    * SchemaArn
    * TypedLinkName
  * MaxResults `integer`: The maximum number of results to retrieve.
  * NextToken `string`: The pagination token.
  * ObjectReference **required** `object`: The reference that identifies an object.
    * Selector

#### Output
* output [ListOutgoingTypedLinksResponse](#listoutgoingtypedlinksresponse)



## Definitions

### AccessDeniedException


### AddFacetToObjectRequest
* AddFacetToObjectRequest `object`
  * ObjectAttributeList
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### AddFacetToObjectResponse
* AddFacetToObjectResponse `object`

### ApplySchemaRequest
* ApplySchemaRequest `object`
  * PublishedSchemaArn **required**

### ApplySchemaResponse
* ApplySchemaResponse `object`
  * AppliedSchemaArn
  * DirectoryArn

### Arn
* Arn `string`

### Arns
* Arns `array`
  * items [Arn](#arn)

### AttachObjectRequest
* AttachObjectRequest `object`
  * ChildReference **required**
    * Selector
  * LinkName **required**
  * ParentReference **required**
    * Selector

### AttachObjectResponse
* AttachObjectResponse `object`
  * AttachedObjectIdentifier

### AttachPolicyRequest
* AttachPolicyRequest `object`
  * ObjectReference **required**
    * Selector
  * PolicyReference **required**
    * Selector

### AttachPolicyResponse
* AttachPolicyResponse `object`

### AttachToIndexRequest
* AttachToIndexRequest `object`
  * IndexReference **required**
    * Selector
  * TargetReference **required**
    * Selector

### AttachToIndexResponse
* AttachToIndexResponse `object`
  * AttachedObjectIdentifier

### AttachTypedLinkRequest
* AttachTypedLinkRequest `object`
  * Attributes **required**
    * items [AttributeNameAndValue](#attributenameandvalue)
  * SourceObjectReference **required**
    * Selector
  * TargetObjectReference **required**
    * Selector
  * TypedLinkFacet **required**
    * SchemaArn **required**
    * TypedLinkName **required**

### AttachTypedLinkResponse
* AttachTypedLinkResponse `object`
  * TypedLinkSpecifier
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### AttributeKey
* AttributeKey `object`: A unique identifier for an attribute.
  * FacetName **required**
  * Name **required**
  * SchemaArn **required**

### AttributeKeyAndValue
* AttributeKeyAndValue `object`: The combination of an attribute key and an attribute value.
  * Key **required**
    * FacetName **required**
    * Name **required**
    * SchemaArn **required**
  * Value **required**
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue

### AttributeKeyAndValueList
* AttributeKeyAndValueList `array`
  * items [AttributeKeyAndValue](#attributekeyandvalue)

### AttributeKeyList
* AttributeKeyList `array`
  * items [AttributeKey](#attributekey)

### AttributeName
* AttributeName `string`

### AttributeNameAndValue
* AttributeNameAndValue `object`: Identifies the attribute name and value for a typed link.
  * AttributeName **required**
  * Value **required**
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue

### AttributeNameAndValueList
* AttributeNameAndValueList `array`
  * items [AttributeNameAndValue](#attributenameandvalue)

### AttributeNameList
* AttributeNameList `array`
  * items [AttributeName](#attributename)

### BatchAddFacetToObject
* BatchAddFacetToObject `object`: Represents the output of a batch add facet to object operation.
  * ObjectAttributeList **required**
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### BatchAddFacetToObjectResponse
* BatchAddFacetToObjectResponse `object`: The result of a batch add facet to object operation.

### BatchAttachObject
* BatchAttachObject `object`: Represents the output of an <a>AttachObject</a> operation.
  * ChildReference **required**
    * Selector
  * LinkName **required**
  * ParentReference **required**
    * Selector

### BatchAttachObjectResponse
* BatchAttachObjectResponse `object`: Represents the output batch <a>AttachObject</a> response operation.
  * attachedObjectIdentifier

### BatchAttachPolicy
* BatchAttachPolicy `object`: Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
  * ObjectReference **required**
    * Selector
  * PolicyReference **required**
    * Selector

### BatchAttachPolicyResponse
* BatchAttachPolicyResponse `object`: Represents the output of an <a>AttachPolicy</a> response operation.

### BatchAttachToIndex
* BatchAttachToIndex `object`: Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required**
    * Selector
  * TargetReference **required**
    * Selector

### BatchAttachToIndexResponse
* BatchAttachToIndexResponse `object`: Represents the output of a <a>AttachToIndex</a> response operation.
  * AttachedObjectIdentifier

### BatchAttachTypedLink
* BatchAttachTypedLink `object`: Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
  * Attributes **required**
    * items [AttributeNameAndValue](#attributenameandvalue)
  * SourceObjectReference **required**
    * Selector
  * TargetObjectReference **required**
    * Selector
  * TypedLinkFacet **required**
    * SchemaArn **required**
    * TypedLinkName **required**

### BatchAttachTypedLinkResponse
* BatchAttachTypedLinkResponse `object`: Represents the output of a <a>AttachTypedLink</a> response operation.
  * TypedLinkSpecifier
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### BatchCreateIndex
* BatchCreateIndex `object`: Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
  * BatchReferenceName
  * IsUnique **required**
  * LinkName
  * OrderedIndexedAttributeList **required**
    * items [AttributeKey](#attributekey)
  * ParentReference
    * Selector

### BatchCreateIndexResponse
* BatchCreateIndexResponse `object`: Represents the output of a <a>CreateIndex</a> response operation.
  * ObjectIdentifier

### BatchCreateObject
* BatchCreateObject `object`: Represents the output of a <a>CreateObject</a> operation.
  * BatchReferenceName
  * LinkName
  * ObjectAttributeList **required**
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ParentReference
    * Selector
  * SchemaFacet **required**
    * items [SchemaFacet](#schemafacet)

### BatchCreateObjectResponse
* BatchCreateObjectResponse `object`: Represents the output of a <a>CreateObject</a> response operation.
  * ObjectIdentifier

### BatchDeleteObject
* BatchDeleteObject `object`: Represents the output of a <a>DeleteObject</a> operation.
  * ObjectReference **required**
    * Selector

### BatchDeleteObjectResponse
* BatchDeleteObjectResponse `object`: Represents the output of a <a>DeleteObject</a> response operation.

### BatchDetachFromIndex
* BatchDetachFromIndex `object`: Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required**
    * Selector
  * TargetReference **required**
    * Selector

### BatchDetachFromIndexResponse
* BatchDetachFromIndexResponse `object`: Represents the output of a <a>DetachFromIndex</a> response operation.
  * DetachedObjectIdentifier

### BatchDetachObject
* BatchDetachObject `object`: Represents the output of a <a>DetachObject</a> operation.
  * BatchReferenceName
  * LinkName **required**
  * ParentReference **required**
    * Selector

### BatchDetachObjectResponse
* BatchDetachObjectResponse `object`: Represents the output of a <a>DetachObject</a> response operation.
  * detachedObjectIdentifier

### BatchDetachPolicy
* BatchDetachPolicy `object`: Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
  * ObjectReference **required**
    * Selector
  * PolicyReference **required**
    * Selector

### BatchDetachPolicyResponse
* BatchDetachPolicyResponse `object`: Represents the output of a <a>DetachPolicy</a> response operation.

### BatchDetachTypedLink
* BatchDetachTypedLink `object`: Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### BatchDetachTypedLinkResponse
* BatchDetachTypedLinkResponse `object`: Represents the output of a <a>DetachTypedLink</a> response operation.

### BatchGetLinkAttributes
* BatchGetLinkAttributes `object`: Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
  * AttributeNames **required**
    * items [AttributeName](#attributename)
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### BatchGetLinkAttributesResponse
* BatchGetLinkAttributesResponse `object`: Represents the output of a <a>GetLinkAttributes</a> response operation.
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)

### BatchGetObjectAttributes
* BatchGetObjectAttributes `object`: Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
  * AttributeNames **required**
    * items [AttributeName](#attributename)
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### BatchGetObjectAttributesResponse
* BatchGetObjectAttributesResponse `object`: Represents the output of a <a>GetObjectAttributes</a> response operation.
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)

### BatchGetObjectInformation
* BatchGetObjectInformation `object`: Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
  * ObjectReference **required**
    * Selector

### BatchGetObjectInformationResponse
* BatchGetObjectInformationResponse `object`: Represents the output of a <a>GetObjectInformation</a> response operation.
  * ObjectIdentifier
  * SchemaFacets
    * items [SchemaFacet](#schemafacet)

### BatchListAttachedIndices
* BatchListAttachedIndices `object`: Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults
  * NextToken
  * TargetReference **required**
    * Selector

### BatchListAttachedIndicesResponse
* BatchListAttachedIndicesResponse `object`: Represents the output of a <a>ListAttachedIndices</a> response operation.
  * IndexAttachments
    * items [IndexAttachment](#indexattachment)
  * NextToken

### BatchListIncomingTypedLinks
* BatchListIncomingTypedLinks `object`: Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
  * FilterAttributeRanges
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink
    * SchemaArn **required**
    * TypedLinkName **required**
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListIncomingTypedLinksResponse
* BatchListIncomingTypedLinksResponse `object`: Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
  * LinkSpecifiers
    * items [TypedLinkSpecifier](#typedlinkspecifier)
  * NextToken

### BatchListIndex
* BatchListIndex `object`: Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required**
    * Selector
  * MaxResults
  * NextToken
  * RangesOnIndexedValues
    * items [ObjectAttributeRange](#objectattributerange)

### BatchListIndexResponse
* BatchListIndexResponse `object`: Represents the output of a <a>ListIndex</a> response operation.
  * IndexAttachments
    * items [IndexAttachment](#indexattachment)
  * NextToken

### BatchListObjectAttributes
* BatchListObjectAttributes `object`: Represents the output of a <a>ListObjectAttributes</a> operation.
  * FacetFilter
    * FacetName
    * SchemaArn
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListObjectAttributesResponse
* BatchListObjectAttributesResponse `object`: Represents the output of a <a>ListObjectAttributes</a> response operation.
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * NextToken

### BatchListObjectChildren
* BatchListObjectChildren `object`: Represents the output of a <a>ListObjectChildren</a> operation.
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListObjectChildrenResponse
* BatchListObjectChildrenResponse `object`: Represents the output of a <a>ListObjectChildren</a> response operation.
  * Children
  * NextToken

### BatchListObjectParentPaths
* BatchListObjectParentPaths `object`: Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListObjectParentPathsResponse
* BatchListObjectParentPathsResponse `object`: Represents the output of a <a>ListObjectParentPaths</a> response operation.
  * NextToken
  * PathToObjectIdentifiersList
    * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)

### BatchListObjectParents
* BatchListObjectParents `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListObjectParentsResponse
* BatchListObjectParentsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * ParentLinks [ObjectIdentifierAndLinkNameList](#objectidentifierandlinknamelist)

### BatchListObjectPolicies
* BatchListObjectPolicies `object`: Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListObjectPoliciesResponse
* BatchListObjectPoliciesResponse `object`: Represents the output of a <a>ListObjectPolicies</a> response operation.
  * AttachedPolicyIds
    * items [ObjectIdentifier](#objectidentifier)
  * NextToken

### BatchListOutgoingTypedLinks
* BatchListOutgoingTypedLinks `object`: Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
  * FilterAttributeRanges
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink
    * SchemaArn **required**
    * TypedLinkName **required**
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchListOutgoingTypedLinksResponse
* BatchListOutgoingTypedLinksResponse `object`: Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
  * NextToken
  * TypedLinkSpecifiers
    * items [TypedLinkSpecifier](#typedlinkspecifier)

### BatchListPolicyAttachments
* BatchListPolicyAttachments `object`: Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults
  * NextToken
  * PolicyReference **required**
    * Selector

### BatchListPolicyAttachmentsResponse
* BatchListPolicyAttachmentsResponse `object`: Represents the output of a <a>ListPolicyAttachments</a> response operation.
  * NextToken
  * ObjectIdentifiers
    * items [ObjectIdentifier](#objectidentifier)

### BatchLookupPolicy
* BatchLookupPolicy `object`: Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### BatchLookupPolicyResponse
* BatchLookupPolicyResponse `object`: Represents the output of a <a>LookupPolicy</a> response operation.
  * NextToken
  * PolicyToPathList
    * items [PolicyToPath](#policytopath)

### BatchReadException
* BatchReadException `object`: The batch read exception structure, which contains the exception type and message.
  * Message
  * Type

### BatchReadExceptionType
* BatchReadExceptionType `string` (values: ValidationException, InvalidArnException, ResourceNotFoundException, InvalidNextTokenException, AccessDeniedException, NotNodeException, FacetValidationException, CannotListParentOfRootException, NotIndexException, NotPolicyException, DirectoryNotEnabledException, LimitExceededException, InternalServiceException)

### BatchReadOperation
* BatchReadOperation `object`: Represents the output of a <code>BatchRead</code> operation.
  * GetLinkAttributes
    * AttributeNames **required**
      * items [AttributeName](#attributename)
    * TypedLinkSpecifier **required**
      * IdentityAttributeValues **required**
        * items [AttributeNameAndValue](#attributenameandvalue)
      * SourceObjectReference **required**
        * Selector
      * TargetObjectReference **required**
        * Selector
      * TypedLinkFacet **required**
        * SchemaArn **required**
        * TypedLinkName **required**
  * GetObjectAttributes
    * AttributeNames **required**
      * items [AttributeName](#attributename)
    * ObjectReference **required**
      * Selector
    * SchemaFacet **required**
      * FacetName
      * SchemaArn
  * GetObjectInformation
    * ObjectReference **required**
      * Selector
  * ListAttachedIndices
    * MaxResults
    * NextToken
    * TargetReference **required**
      * Selector
  * ListIncomingTypedLinks
    * FilterAttributeRanges
      * items [TypedLinkAttributeRange](#typedlinkattributerange)
    * FilterTypedLink
      * SchemaArn **required**
      * TypedLinkName **required**
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListIndex
    * IndexReference **required**
      * Selector
    * MaxResults
    * NextToken
    * RangesOnIndexedValues
      * items [ObjectAttributeRange](#objectattributerange)
  * ListObjectAttributes
    * FacetFilter
      * FacetName
      * SchemaArn
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListObjectChildren
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListObjectParentPaths
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListObjectParents [BatchListObjectParents](#batchlistobjectparents)
  * ListObjectPolicies
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListOutgoingTypedLinks
    * FilterAttributeRanges
      * items [TypedLinkAttributeRange](#typedlinkattributerange)
    * FilterTypedLink
      * SchemaArn **required**
      * TypedLinkName **required**
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector
  * ListPolicyAttachments
    * MaxResults
    * NextToken
    * PolicyReference **required**
      * Selector
  * LookupPolicy
    * MaxResults
    * NextToken
    * ObjectReference **required**
      * Selector

### BatchReadOperationList
* BatchReadOperationList `array`
  * items [BatchReadOperation](#batchreadoperation)

### BatchReadOperationResponse
* BatchReadOperationResponse `object`: Represents the output of a <code>BatchRead</code> response operation.
  * ExceptionResponse
    * Message
    * Type
  * SuccessfulResponse
    * GetLinkAttributes
      * Attributes
        * items [AttributeKeyAndValue](#attributekeyandvalue)
    * GetObjectAttributes
      * Attributes
        * items [AttributeKeyAndValue](#attributekeyandvalue)
    * GetObjectInformation
      * ObjectIdentifier
      * SchemaFacets
        * items [SchemaFacet](#schemafacet)
    * ListAttachedIndices
      * IndexAttachments
        * items [IndexAttachment](#indexattachment)
      * NextToken
    * ListIncomingTypedLinks
      * LinkSpecifiers
        * items [TypedLinkSpecifier](#typedlinkspecifier)
      * NextToken
    * ListIndex
      * IndexAttachments
        * items [IndexAttachment](#indexattachment)
      * NextToken
    * ListObjectAttributes
      * Attributes
        * items [AttributeKeyAndValue](#attributekeyandvalue)
      * NextToken
    * ListObjectChildren
      * Children
      * NextToken
    * ListObjectParentPaths
      * NextToken
      * PathToObjectIdentifiersList
        * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)
    * ListObjectParents [BatchListObjectParentsResponse](#batchlistobjectparentsresponse)
    * ListObjectPolicies
      * AttachedPolicyIds
        * items [ObjectIdentifier](#objectidentifier)
      * NextToken
    * ListOutgoingTypedLinks
      * NextToken
      * TypedLinkSpecifiers
        * items [TypedLinkSpecifier](#typedlinkspecifier)
    * ListPolicyAttachments
      * NextToken
      * ObjectIdentifiers
        * items [ObjectIdentifier](#objectidentifier)
    * LookupPolicy
      * NextToken
      * PolicyToPathList
        * items [PolicyToPath](#policytopath)

### BatchReadOperationResponseList
* BatchReadOperationResponseList `array`
  * items [BatchReadOperationResponse](#batchreadoperationresponse)

### BatchReadRequest
* BatchReadRequest `object`
  * Operations **required**
    * items [BatchReadOperation](#batchreadoperation)

### BatchReadResponse
* BatchReadResponse `object`
  * Responses
    * items [BatchReadOperationResponse](#batchreadoperationresponse)

### BatchReadSuccessfulResponse
* BatchReadSuccessfulResponse `object`: Represents the output of a <code>BatchRead</code> success response operation.
  * GetLinkAttributes
    * Attributes
      * items [AttributeKeyAndValue](#attributekeyandvalue)
  * GetObjectAttributes
    * Attributes
      * items [AttributeKeyAndValue](#attributekeyandvalue)
  * GetObjectInformation
    * ObjectIdentifier
    * SchemaFacets
      * items [SchemaFacet](#schemafacet)
  * ListAttachedIndices
    * IndexAttachments
      * items [IndexAttachment](#indexattachment)
    * NextToken
  * ListIncomingTypedLinks
    * LinkSpecifiers
      * items [TypedLinkSpecifier](#typedlinkspecifier)
    * NextToken
  * ListIndex
    * IndexAttachments
      * items [IndexAttachment](#indexattachment)
    * NextToken
  * ListObjectAttributes
    * Attributes
      * items [AttributeKeyAndValue](#attributekeyandvalue)
    * NextToken
  * ListObjectChildren
    * Children
    * NextToken
  * ListObjectParentPaths
    * NextToken
    * PathToObjectIdentifiersList
      * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)
  * ListObjectParents [BatchListObjectParentsResponse](#batchlistobjectparentsresponse)
  * ListObjectPolicies
    * AttachedPolicyIds
      * items [ObjectIdentifier](#objectidentifier)
    * NextToken
  * ListOutgoingTypedLinks
    * NextToken
    * TypedLinkSpecifiers
      * items [TypedLinkSpecifier](#typedlinkspecifier)
  * ListPolicyAttachments
    * NextToken
    * ObjectIdentifiers
      * items [ObjectIdentifier](#objectidentifier)
  * LookupPolicy
    * NextToken
    * PolicyToPathList
      * items [PolicyToPath](#policytopath)

### BatchReferenceName
* BatchReferenceName `string`

### BatchRemoveFacetFromObject
* BatchRemoveFacetFromObject `object`: A batch operation to remove a facet from an object.
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### BatchRemoveFacetFromObjectResponse
* BatchRemoveFacetFromObjectResponse `object`: An empty result that represents success.

### BatchUpdateLinkAttributes
* BatchUpdateLinkAttributes `object`: Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
  * AttributeUpdates **required**
    * items [LinkAttributeUpdate](#linkattributeupdate)
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### BatchUpdateLinkAttributesResponse
* BatchUpdateLinkAttributesResponse `object`: Represents the output of a <a>UpdateLinkAttributes</a> response operation.

### BatchUpdateObjectAttributes
* BatchUpdateObjectAttributes `object`: Represents the output of a <code>BatchUpdate</code> operation. 
  * AttributeUpdates **required**
    * items [ObjectAttributeUpdate](#objectattributeupdate)
  * ObjectReference **required**
    * Selector

### BatchUpdateObjectAttributesResponse
* BatchUpdateObjectAttributesResponse `object`: Represents the output of a <code>BatchUpdate</code> response operation.
  * ObjectIdentifier

### BatchWriteException


### BatchWriteOperation
* BatchWriteOperation `object`: Represents the output of a <code>BatchWrite</code> operation. 
  * AddFacetToObject
    * ObjectAttributeList **required**
      * items [AttributeKeyAndValue](#attributekeyandvalue)
    * ObjectReference **required**
      * Selector
    * SchemaFacet **required**
      * FacetName
      * SchemaArn
  * AttachObject
    * ChildReference **required**
      * Selector
    * LinkName **required**
    * ParentReference **required**
      * Selector
  * AttachPolicy
    * ObjectReference **required**
      * Selector
    * PolicyReference **required**
      * Selector
  * AttachToIndex
    * IndexReference **required**
      * Selector
    * TargetReference **required**
      * Selector
  * AttachTypedLink
    * Attributes **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**
  * CreateIndex
    * BatchReferenceName
    * IsUnique **required**
    * LinkName
    * OrderedIndexedAttributeList **required**
      * items [AttributeKey](#attributekey)
    * ParentReference
      * Selector
  * CreateObject
    * BatchReferenceName
    * LinkName
    * ObjectAttributeList **required**
      * items [AttributeKeyAndValue](#attributekeyandvalue)
    * ParentReference
      * Selector
    * SchemaFacet **required**
      * items [SchemaFacet](#schemafacet)
  * DeleteObject
    * ObjectReference **required**
      * Selector
  * DetachFromIndex
    * IndexReference **required**
      * Selector
    * TargetReference **required**
      * Selector
  * DetachObject
    * BatchReferenceName
    * LinkName **required**
    * ParentReference **required**
      * Selector
  * DetachPolicy
    * ObjectReference **required**
      * Selector
    * PolicyReference **required**
      * Selector
  * DetachTypedLink
    * TypedLinkSpecifier **required**
      * IdentityAttributeValues **required**
        * items [AttributeNameAndValue](#attributenameandvalue)
      * SourceObjectReference **required**
        * Selector
      * TargetObjectReference **required**
        * Selector
      * TypedLinkFacet **required**
        * SchemaArn **required**
        * TypedLinkName **required**
  * RemoveFacetFromObject
    * ObjectReference **required**
      * Selector
    * SchemaFacet **required**
      * FacetName
      * SchemaArn
  * UpdateLinkAttributes
    * AttributeUpdates **required**
      * items [LinkAttributeUpdate](#linkattributeupdate)
    * TypedLinkSpecifier **required**
      * IdentityAttributeValues **required**
        * items [AttributeNameAndValue](#attributenameandvalue)
      * SourceObjectReference **required**
        * Selector
      * TargetObjectReference **required**
        * Selector
      * TypedLinkFacet **required**
        * SchemaArn **required**
        * TypedLinkName **required**
  * UpdateObjectAttributes
    * AttributeUpdates **required**
      * items [ObjectAttributeUpdate](#objectattributeupdate)
    * ObjectReference **required**
      * Selector

### BatchWriteOperationList
* BatchWriteOperationList `array`
  * items [BatchWriteOperation](#batchwriteoperation)

### BatchWriteOperationResponse
* BatchWriteOperationResponse `object`: Represents the output of a <code>BatchWrite</code> response operation.
  * AddFacetToObject
  * AttachObject
    * attachedObjectIdentifier
  * AttachPolicy
  * AttachToIndex
    * AttachedObjectIdentifier
  * AttachTypedLink
    * TypedLinkSpecifier
      * IdentityAttributeValues **required**
        * items [AttributeNameAndValue](#attributenameandvalue)
      * SourceObjectReference **required**
        * Selector
      * TargetObjectReference **required**
        * Selector
      * TypedLinkFacet **required**
        * SchemaArn **required**
        * TypedLinkName **required**
  * CreateIndex
    * ObjectIdentifier
  * CreateObject
    * ObjectIdentifier
  * DeleteObject
  * DetachFromIndex
    * DetachedObjectIdentifier
  * DetachObject
    * detachedObjectIdentifier
  * DetachPolicy
  * DetachTypedLink
  * RemoveFacetFromObject
  * UpdateLinkAttributes
  * UpdateObjectAttributes
    * ObjectIdentifier

### BatchWriteOperationResponseList
* BatchWriteOperationResponseList `array`
  * items [BatchWriteOperationResponse](#batchwriteoperationresponse)

### BatchWriteRequest
* BatchWriteRequest `object`
  * Operations **required**
    * items [BatchWriteOperation](#batchwriteoperation)

### BatchWriteResponse
* BatchWriteResponse `object`
  * Responses
    * items [BatchWriteOperationResponse](#batchwriteoperationresponse)

### BinaryAttributeValue
* BinaryAttributeValue `string`

### Bool
* Bool `boolean`

### BooleanAttributeValue
* BooleanAttributeValue `boolean`

### CannotListParentOfRootException


### ConsistencyLevel
* ConsistencyLevel `string` (values: SERIALIZABLE, EVENTUAL)

### CreateDirectoryRequest
* CreateDirectoryRequest `object`
  * Name **required**

### CreateDirectoryResponse
* CreateDirectoryResponse `object`
  * AppliedSchemaArn **required**
  * DirectoryArn **required**
  * Name **required**
  * ObjectIdentifier **required**

### CreateFacetRequest
* CreateFacetRequest `object`
  * Attributes
    * items [FacetAttribute](#facetattribute)
  * FacetStyle
  * Name **required**
  * ObjectType

### CreateFacetResponse
* CreateFacetResponse `object`

### CreateIndexRequest
* CreateIndexRequest `object`
  * IsUnique **required**
  * LinkName
  * OrderedIndexedAttributeList **required**
    * items [AttributeKey](#attributekey)
  * ParentReference
    * Selector

### CreateIndexResponse
* CreateIndexResponse `object`
  * ObjectIdentifier

### CreateObjectRequest
* CreateObjectRequest `object`
  * LinkName
  * ObjectAttributeList
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ParentReference
    * Selector
  * SchemaFacets **required**
    * items [SchemaFacet](#schemafacet)

### CreateObjectResponse
* CreateObjectResponse `object`
  * ObjectIdentifier

### CreateSchemaRequest
* CreateSchemaRequest `object`
  * Name **required**

### CreateSchemaResponse
* CreateSchemaResponse `object`
  * SchemaArn

### CreateTypedLinkFacetRequest
* CreateTypedLinkFacetRequest `object`
  * Facet **required**
    * Attributes **required**
      * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)
    * IdentityAttributeOrder **required**
      * items [AttributeName](#attributename)
    * Name **required**

### CreateTypedLinkFacetResponse
* CreateTypedLinkFacetResponse `object`

### Date
* Date `string`

### DatetimeAttributeValue
* DatetimeAttributeValue `string`

### DeleteDirectoryRequest
* DeleteDirectoryRequest `object`

### DeleteDirectoryResponse
* DeleteDirectoryResponse `object`
  * DirectoryArn **required**

### DeleteFacetRequest
* DeleteFacetRequest `object`
  * Name **required**

### DeleteFacetResponse
* DeleteFacetResponse `object`

### DeleteObjectRequest
* DeleteObjectRequest `object`
  * ObjectReference **required**
    * Selector

### DeleteObjectResponse
* DeleteObjectResponse `object`

### DeleteSchemaRequest
* DeleteSchemaRequest `object`

### DeleteSchemaResponse
* DeleteSchemaResponse `object`
  * SchemaArn

### DeleteTypedLinkFacetRequest
* DeleteTypedLinkFacetRequest `object`
  * Name **required**

### DeleteTypedLinkFacetResponse
* DeleteTypedLinkFacetResponse `object`

### DetachFromIndexRequest
* DetachFromIndexRequest `object`
  * IndexReference **required**
    * Selector
  * TargetReference **required**
    * Selector

### DetachFromIndexResponse
* DetachFromIndexResponse `object`
  * DetachedObjectIdentifier

### DetachObjectRequest
* DetachObjectRequest `object`
  * LinkName **required**
  * ParentReference **required**
    * Selector

### DetachObjectResponse
* DetachObjectResponse `object`
  * DetachedObjectIdentifier

### DetachPolicyRequest
* DetachPolicyRequest `object`
  * ObjectReference **required**
    * Selector
  * PolicyReference **required**
    * Selector

### DetachPolicyResponse
* DetachPolicyResponse `object`

### DetachTypedLinkRequest
* DetachTypedLinkRequest `object`
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### Directory
* Directory `object`: Directory structure that includes the directory name and directory ARN.
  * CreationDateTime
  * DirectoryArn
  * Name
  * State

### DirectoryAlreadyExistsException


### DirectoryArn
* DirectoryArn `string`

### DirectoryDeletedException


### DirectoryList
* DirectoryList `array`
  * items [Directory](#directory)

### DirectoryName
* DirectoryName `string`

### DirectoryNotDisabledException


### DirectoryNotEnabledException


### DirectoryState
* DirectoryState `string` (values: ENABLED, DISABLED, DELETED)

### DisableDirectoryRequest
* DisableDirectoryRequest `object`

### DisableDirectoryResponse
* DisableDirectoryResponse `object`
  * DirectoryArn **required**

### EnableDirectoryRequest
* EnableDirectoryRequest `object`

### EnableDirectoryResponse
* EnableDirectoryResponse `object`
  * DirectoryArn **required**

### ExceptionMessage
* ExceptionMessage `string`

### Facet
* Facet `object`: A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.
  * FacetStyle
  * Name
  * ObjectType

### FacetAlreadyExistsException


### FacetAttribute
* FacetAttribute `object`: An attribute that is associated with the <a>Facet</a>.
  * AttributeDefinition
    * DefaultValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
    * IsImmutable
    * Rules
    * Type **required**
  * AttributeReference
    * TargetAttributeName **required**
    * TargetFacetName **required**
  * Name **required**
  * RequiredBehavior

### FacetAttributeDefinition
* FacetAttributeDefinition `object`: A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
  * DefaultValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue
  * IsImmutable
  * Rules
  * Type **required**

### FacetAttributeList
* FacetAttributeList `array`
  * items [FacetAttribute](#facetattribute)

### FacetAttributeReference
* FacetAttributeReference `object`: The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
  * TargetAttributeName **required**
  * TargetFacetName **required**

### FacetAttributeType
* FacetAttributeType `string` (values: STRING, BINARY, BOOLEAN, NUMBER, DATETIME, VARIANT)

### FacetAttributeUpdate
* FacetAttributeUpdate `object`: A structure that contains information used to update an attribute.
  * Action
  * Attribute
    * AttributeDefinition
      * DefaultValue
        * BinaryValue
        * BooleanValue
        * DatetimeValue
        * NumberValue
        * StringValue
      * IsImmutable
      * Rules
      * Type **required**
    * AttributeReference
      * TargetAttributeName **required**
      * TargetFacetName **required**
    * Name **required**
    * RequiredBehavior

### FacetAttributeUpdateList
* FacetAttributeUpdateList `array`
  * items [FacetAttributeUpdate](#facetattributeupdate)

### FacetInUseException


### FacetName
* FacetName `string`

### FacetNameList
* FacetNameList `array`
  * items [FacetName](#facetname)

### FacetNotFoundException


### FacetStyle
* FacetStyle `string` (values: STATIC, DYNAMIC)

### FacetValidationException


### GetAppliedSchemaVersionRequest
* GetAppliedSchemaVersionRequest `object`
  * SchemaArn **required**

### GetAppliedSchemaVersionResponse
* GetAppliedSchemaVersionResponse `object`
  * AppliedSchemaArn

### GetDirectoryRequest
* GetDirectoryRequest `object`

### GetDirectoryResponse
* GetDirectoryResponse `object`
  * Directory **required**
    * CreationDateTime
    * DirectoryArn
    * Name
    * State

### GetFacetRequest
* GetFacetRequest `object`
  * Name **required**

### GetFacetResponse
* GetFacetResponse `object`
  * Facet
    * FacetStyle
    * Name
    * ObjectType

### GetLinkAttributesRequest
* GetLinkAttributesRequest `object`
  * AttributeNames **required**
    * items [AttributeName](#attributename)
  * ConsistencyLevel
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### GetLinkAttributesResponse
* GetLinkAttributesResponse `object`
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)

### GetObjectAttributesRequest
* GetObjectAttributesRequest `object`
  * AttributeNames **required**
    * items [AttributeName](#attributename)
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### GetObjectAttributesResponse
* GetObjectAttributesResponse `object`
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)

### GetObjectInformationRequest
* GetObjectInformationRequest `object`
  * ObjectReference **required**
    * Selector

### GetObjectInformationResponse
* GetObjectInformationResponse `object`
  * ObjectIdentifier
  * SchemaFacets
    * items [SchemaFacet](#schemafacet)

### GetSchemaAsJsonRequest
* GetSchemaAsJsonRequest `object`

### GetSchemaAsJsonResponse
* GetSchemaAsJsonResponse `object`
  * Document
  * Name

### GetTypedLinkFacetInformationRequest
* GetTypedLinkFacetInformationRequest `object`
  * Name **required**

### GetTypedLinkFacetInformationResponse
* GetTypedLinkFacetInformationResponse `object`
  * IdentityAttributeOrder
    * items [AttributeName](#attributename)

### IncompatibleSchemaException


### IndexAttachment
* IndexAttachment `object`: Represents an index and an attached object.
  * IndexedAttributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * ObjectIdentifier

### IndexAttachmentList
* IndexAttachmentList `array`
  * items [IndexAttachment](#indexattachment)

### IndexedAttributeMissingException


### InternalServiceException


### InvalidArnException


### InvalidAttachmentException


### InvalidFacetUpdateException


### InvalidNextTokenException


### InvalidRuleException


### InvalidSchemaDocException


### InvalidTaggingRequestException


### LimitExceededException


### LinkAttributeAction
* LinkAttributeAction `object`: The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
  * AttributeActionType
  * AttributeUpdateValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue

### LinkAttributeUpdate
* LinkAttributeUpdate `object`: Structure that contains attribute update information.
  * AttributeAction
    * AttributeActionType
    * AttributeUpdateValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
  * AttributeKey
    * FacetName **required**
    * Name **required**
    * SchemaArn **required**

### LinkAttributeUpdateList
* LinkAttributeUpdateList `array`
  * items [LinkAttributeUpdate](#linkattributeupdate)

### LinkName
* LinkName `string`

### LinkNameAlreadyInUseException


### LinkNameToObjectIdentifierMap
* LinkNameToObjectIdentifierMap `object`

### ListAppliedSchemaArnsRequest
* ListAppliedSchemaArnsRequest `object`
  * DirectoryArn **required**
  * MaxResults
  * NextToken
  * SchemaArn

### ListAppliedSchemaArnsResponse
* ListAppliedSchemaArnsResponse `object`
  * NextToken
  * SchemaArns
    * items [Arn](#arn)

### ListAttachedIndicesRequest
* ListAttachedIndicesRequest `object`
  * MaxResults
  * NextToken
  * TargetReference **required**
    * Selector

### ListAttachedIndicesResponse
* ListAttachedIndicesResponse `object`
  * IndexAttachments
    * items [IndexAttachment](#indexattachment)
  * NextToken

### ListDevelopmentSchemaArnsRequest
* ListDevelopmentSchemaArnsRequest `object`
  * MaxResults
  * NextToken

### ListDevelopmentSchemaArnsResponse
* ListDevelopmentSchemaArnsResponse `object`
  * NextToken
  * SchemaArns
    * items [Arn](#arn)

### ListDirectoriesRequest
* ListDirectoriesRequest `object`
  * MaxResults
  * NextToken
  * state

### ListDirectoriesResponse
* ListDirectoriesResponse `object`
  * Directories **required**
    * items [Directory](#directory)
  * NextToken

### ListFacetAttributesRequest
* ListFacetAttributesRequest `object`
  * MaxResults
  * Name **required**
  * NextToken

### ListFacetAttributesResponse
* ListFacetAttributesResponse `object`
  * Attributes
    * items [FacetAttribute](#facetattribute)
  * NextToken

### ListFacetNamesRequest
* ListFacetNamesRequest `object`
  * MaxResults
  * NextToken

### ListFacetNamesResponse
* ListFacetNamesResponse `object`
  * FacetNames
    * items [FacetName](#facetname)
  * NextToken

### ListIncomingTypedLinksRequest
* ListIncomingTypedLinksRequest `object`
  * ConsistencyLevel
  * FilterAttributeRanges
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink
    * SchemaArn **required**
    * TypedLinkName **required**
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListIncomingTypedLinksResponse
* ListIncomingTypedLinksResponse `object`
  * LinkSpecifiers
    * items [TypedLinkSpecifier](#typedlinkspecifier)
  * NextToken

### ListIndexRequest
* ListIndexRequest `object`
  * IndexReference **required**
    * Selector
  * MaxResults
  * NextToken
  * RangesOnIndexedValues
    * items [ObjectAttributeRange](#objectattributerange)

### ListIndexResponse
* ListIndexResponse `object`
  * IndexAttachments
    * items [IndexAttachment](#indexattachment)
  * NextToken

### ListManagedSchemaArnsRequest
* ListManagedSchemaArnsRequest `object`
  * MaxResults
  * NextToken
  * SchemaArn

### ListManagedSchemaArnsResponse
* ListManagedSchemaArnsResponse `object`
  * NextToken
  * SchemaArns
    * items [Arn](#arn)

### ListObjectAttributesRequest
* ListObjectAttributesRequest `object`
  * FacetFilter
    * FacetName
    * SchemaArn
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListObjectAttributesResponse
* ListObjectAttributesResponse `object`
  * Attributes
    * items [AttributeKeyAndValue](#attributekeyandvalue)
  * NextToken

### ListObjectChildrenRequest
* ListObjectChildrenRequest `object`
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListObjectChildrenResponse
* ListObjectChildrenResponse `object`
  * Children
  * NextToken

### ListObjectParentPathsRequest
* ListObjectParentPathsRequest `object`
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListObjectParentPathsResponse
* ListObjectParentPathsResponse `object`
  * NextToken
  * PathToObjectIdentifiersList
    * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)

### ListObjectParentsRequest
* ListObjectParentsRequest `object`
  * IncludeAllLinksToEachParent
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListObjectParentsResponse
* ListObjectParentsResponse `object`
  * NextToken
  * ParentLinks
    * items [ObjectIdentifierAndLinkNameTuple](#objectidentifierandlinknametuple)
  * Parents

### ListObjectPoliciesRequest
* ListObjectPoliciesRequest `object`
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListObjectPoliciesResponse
* ListObjectPoliciesResponse `object`
  * AttachedPolicyIds
    * items [ObjectIdentifier](#objectidentifier)
  * NextToken

### ListOutgoingTypedLinksRequest
* ListOutgoingTypedLinksRequest `object`
  * ConsistencyLevel
  * FilterAttributeRanges
    * items [TypedLinkAttributeRange](#typedlinkattributerange)
  * FilterTypedLink
    * SchemaArn **required**
    * TypedLinkName **required**
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### ListOutgoingTypedLinksResponse
* ListOutgoingTypedLinksResponse `object`
  * NextToken
  * TypedLinkSpecifiers
    * items [TypedLinkSpecifier](#typedlinkspecifier)

### ListPolicyAttachmentsRequest
* ListPolicyAttachmentsRequest `object`
  * MaxResults
  * NextToken
  * PolicyReference **required**
    * Selector

### ListPolicyAttachmentsResponse
* ListPolicyAttachmentsResponse `object`
  * NextToken
  * ObjectIdentifiers
    * items [ObjectIdentifier](#objectidentifier)

### ListPublishedSchemaArnsRequest
* ListPublishedSchemaArnsRequest `object`
  * MaxResults
  * NextToken
  * SchemaArn

### ListPublishedSchemaArnsResponse
* ListPublishedSchemaArnsResponse `object`
  * NextToken
  * SchemaArns
    * items [Arn](#arn)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListTypedLinkFacetAttributesRequest
* ListTypedLinkFacetAttributesRequest `object`
  * MaxResults
  * Name **required**
  * NextToken

### ListTypedLinkFacetAttributesResponse
* ListTypedLinkFacetAttributesResponse `object`
  * Attributes
    * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)
  * NextToken

### ListTypedLinkFacetNamesRequest
* ListTypedLinkFacetNamesRequest `object`
  * MaxResults
  * NextToken

### ListTypedLinkFacetNamesResponse
* ListTypedLinkFacetNamesResponse `object`
  * FacetNames
    * items [TypedLinkName](#typedlinkname)
  * NextToken

### LookupPolicyRequest
* LookupPolicyRequest `object`
  * MaxResults
  * NextToken
  * ObjectReference **required**
    * Selector

### LookupPolicyResponse
* LookupPolicyResponse `object`
  * NextToken
  * PolicyToPathList
    * items [PolicyToPath](#policytopath)

### NextToken
* NextToken `string`

### NotIndexException


### NotNodeException


### NotPolicyException


### NumberAttributeValue
* NumberAttributeValue `string`

### NumberResults
* NumberResults `integer`

### ObjectAlreadyDetachedException


### ObjectAttributeAction
* ObjectAttributeAction `object`: The action to take on the object attribute.
  * ObjectAttributeActionType
  * ObjectAttributeUpdateValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue

### ObjectAttributeRange
* ObjectAttributeRange `object`: A range of attributes.
  * AttributeKey
    * FacetName **required**
    * Name **required**
    * SchemaArn **required**
  * Range
    * EndMode **required**
    * EndValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
    * StartMode **required**
    * StartValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue

### ObjectAttributeRangeList
* ObjectAttributeRangeList `array`
  * items [ObjectAttributeRange](#objectattributerange)

### ObjectAttributeUpdate
* ObjectAttributeUpdate `object`: Structure that contains attribute update information.
  * ObjectAttributeAction
    * ObjectAttributeActionType
    * ObjectAttributeUpdateValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
  * ObjectAttributeKey
    * FacetName **required**
    * Name **required**
    * SchemaArn **required**

### ObjectAttributeUpdateList
* ObjectAttributeUpdateList `array`
  * items [ObjectAttributeUpdate](#objectattributeupdate)

### ObjectIdentifier
* ObjectIdentifier `string`

### ObjectIdentifierAndLinkNameList
* ObjectIdentifierAndLinkNameList `array`
  * items [ObjectIdentifierAndLinkNameTuple](#objectidentifierandlinknametuple)

### ObjectIdentifierAndLinkNameTuple
* ObjectIdentifierAndLinkNameTuple `object`: A pair of ObjectIdentifier and LinkName.
  * LinkName
  * ObjectIdentifier

### ObjectIdentifierList
* ObjectIdentifierList `array`
  * items [ObjectIdentifier](#objectidentifier)

### ObjectIdentifierToLinkNameMap
* ObjectIdentifierToLinkNameMap `object`

### ObjectNotDetachedException


### ObjectReference
* ObjectReference `object`: The reference that identifies an object.
  * Selector

### ObjectType
* ObjectType `string` (values: NODE, LEAF_NODE, POLICY, INDEX)

### PathString
* PathString `string`

### PathToObjectIdentifiers
* PathToObjectIdentifiers `object`: Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
  * ObjectIdentifiers
    * items [ObjectIdentifier](#objectidentifier)
  * Path

### PathToObjectIdentifiersList
* PathToObjectIdentifiersList `array`
  * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)

### PolicyAttachment
* PolicyAttachment `object`: Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
  * ObjectIdentifier
  * PolicyId
  * PolicyType

### PolicyAttachmentList
* PolicyAttachmentList `array`
  * items [PolicyAttachment](#policyattachment)

### PolicyToPath
* PolicyToPath `object`: Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
  * Path
  * Policies
    * items [PolicyAttachment](#policyattachment)

### PolicyToPathList
* PolicyToPathList `array`
  * items [PolicyToPath](#policytopath)

### PolicyType
* PolicyType `string`

### PublishSchemaRequest
* PublishSchemaRequest `object`
  * MinorVersion
  * Name
  * Version **required**

### PublishSchemaResponse
* PublishSchemaResponse `object`
  * PublishedSchemaArn

### PutSchemaFromJsonRequest
* PutSchemaFromJsonRequest `object`
  * Document **required**

### PutSchemaFromJsonResponse
* PutSchemaFromJsonResponse `object`
  * Arn

### RangeMode
* RangeMode `string` (values: FIRST, LAST, LAST_BEFORE_MISSING_VALUES, INCLUSIVE, EXCLUSIVE)

### RemoveFacetFromObjectRequest
* RemoveFacetFromObjectRequest `object`
  * ObjectReference **required**
    * Selector
  * SchemaFacet **required**
    * FacetName
    * SchemaArn

### RemoveFacetFromObjectResponse
* RemoveFacetFromObjectResponse `object`

### RequiredAttributeBehavior
* RequiredAttributeBehavior `string` (values: REQUIRED_ALWAYS, NOT_REQUIRED)

### ResourceNotFoundException


### RetryableConflictException


### Rule
* Rule `object`: Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
  * Parameters
  * Type

### RuleKey
* RuleKey `string`

### RuleMap
* RuleMap `object`

### RuleParameterKey
* RuleParameterKey `string`

### RuleParameterMap
* RuleParameterMap `object`

### RuleParameterValue
* RuleParameterValue `string`

### RuleType
* RuleType `string` (values: BINARY_LENGTH, NUMBER_COMPARISON, STRING_FROM_SET, STRING_LENGTH)

### SchemaAlreadyExistsException


### SchemaAlreadyPublishedException


### SchemaFacet
* SchemaFacet `object`: A facet.
  * FacetName
  * SchemaArn

### SchemaFacetList
* SchemaFacetList `array`
  * items [SchemaFacet](#schemafacet)

### SchemaJsonDocument
* SchemaJsonDocument `string`

### SchemaName
* SchemaName `string`

### SelectorObjectReference
* SelectorObjectReference `string`

### StillContainsLinksException


### StringAttributeValue
* StringAttributeValue `string`

### Tag
* Tag `object`: The tag structure that contains a tag key and value.
  * Key
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagsNumberResults
* TagsNumberResults `integer`

### TypedAttributeValue
* TypedAttributeValue `object`: Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
  * BinaryValue
  * BooleanValue
  * DatetimeValue
  * NumberValue
  * StringValue

### TypedAttributeValueRange
* TypedAttributeValueRange `object`: A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
  * EndMode **required**
  * EndValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue
  * StartMode **required**
  * StartValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue

### TypedLinkAttributeDefinition
* TypedLinkAttributeDefinition `object`: A typed link attribute definition.
  * DefaultValue
    * BinaryValue
    * BooleanValue
    * DatetimeValue
    * NumberValue
    * StringValue
  * IsImmutable
  * Name **required**
  * RequiredBehavior **required**
  * Rules
  * Type **required**

### TypedLinkAttributeDefinitionList
* TypedLinkAttributeDefinitionList `array`
  * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)

### TypedLinkAttributeRange
* TypedLinkAttributeRange `object`: Identifies the range of attributes that are used by a specified filter.
  * AttributeName
  * Range **required**
    * EndMode **required**
    * EndValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
    * StartMode **required**
    * StartValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue

### TypedLinkAttributeRangeList
* TypedLinkAttributeRangeList `array`
  * items [TypedLinkAttributeRange](#typedlinkattributerange)

### TypedLinkFacet
* TypedLinkFacet `object`: Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
  * Attributes **required**
    * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)
  * IdentityAttributeOrder **required**
    * items [AttributeName](#attributename)
  * Name **required**

### TypedLinkFacetAttributeUpdate
* TypedLinkFacetAttributeUpdate `object`: A typed link facet attribute update.
  * Action **required**
  * Attribute **required**
    * DefaultValue
      * BinaryValue
      * BooleanValue
      * DatetimeValue
      * NumberValue
      * StringValue
    * IsImmutable
    * Name **required**
    * RequiredBehavior **required**
    * Rules
    * Type **required**

### TypedLinkFacetAttributeUpdateList
* TypedLinkFacetAttributeUpdateList `array`
  * items [TypedLinkFacetAttributeUpdate](#typedlinkfacetattributeupdate)

### TypedLinkName
* TypedLinkName `string`

### TypedLinkNameList
* TypedLinkNameList `array`
  * items [TypedLinkName](#typedlinkname)

### TypedLinkSchemaAndFacetName
* TypedLinkSchemaAndFacetName `object`: Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
  * SchemaArn **required**
  * TypedLinkName **required**

### TypedLinkSpecifier
* TypedLinkSpecifier `object`: Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
  * IdentityAttributeValues **required**
    * items [AttributeNameAndValue](#attributenameandvalue)
  * SourceObjectReference **required**
    * Selector
  * TargetObjectReference **required**
    * Selector
  * TypedLinkFacet **required**
    * SchemaArn **required**
    * TypedLinkName **required**

### TypedLinkSpecifierList
* TypedLinkSpecifierList `array`
  * items [TypedLinkSpecifier](#typedlinkspecifier)

### UnsupportedIndexTypeException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateActionType
* UpdateActionType `string` (values: CREATE_OR_UPDATE, DELETE)

### UpdateFacetRequest
* UpdateFacetRequest `object`
  * AttributeUpdates
    * items [FacetAttributeUpdate](#facetattributeupdate)
  * Name **required**
  * ObjectType

### UpdateFacetResponse
* UpdateFacetResponse `object`

### UpdateLinkAttributesRequest
* UpdateLinkAttributesRequest `object`
  * AttributeUpdates **required**
    * items [LinkAttributeUpdate](#linkattributeupdate)
  * TypedLinkSpecifier **required**
    * IdentityAttributeValues **required**
      * items [AttributeNameAndValue](#attributenameandvalue)
    * SourceObjectReference **required**
      * Selector
    * TargetObjectReference **required**
      * Selector
    * TypedLinkFacet **required**
      * SchemaArn **required**
      * TypedLinkName **required**

### UpdateLinkAttributesResponse
* UpdateLinkAttributesResponse `object`

### UpdateObjectAttributesRequest
* UpdateObjectAttributesRequest `object`
  * AttributeUpdates **required**
    * items [ObjectAttributeUpdate](#objectattributeupdate)
  * ObjectReference **required**
    * Selector

### UpdateObjectAttributesResponse
* UpdateObjectAttributesResponse `object`
  * ObjectIdentifier

### UpdateSchemaRequest
* UpdateSchemaRequest `object`
  * Name **required**

### UpdateSchemaResponse
* UpdateSchemaResponse `object`
  * SchemaArn

### UpdateTypedLinkFacetRequest
* UpdateTypedLinkFacetRequest `object`
  * AttributeUpdates **required**
    * items [TypedLinkFacetAttributeUpdate](#typedlinkfacetattributeupdate)
  * IdentityAttributeOrder **required**
    * items [AttributeName](#attributename)
  * Name **required**

### UpdateTypedLinkFacetResponse
* UpdateTypedLinkFacetResponse `object`

### UpgradeAppliedSchemaRequest
* UpgradeAppliedSchemaRequest `object`
  * DirectoryArn **required**
  * DryRun
  * PublishedSchemaArn **required**

### UpgradeAppliedSchemaResponse
* UpgradeAppliedSchemaResponse `object`
  * DirectoryArn
  * UpgradedSchemaArn

### UpgradePublishedSchemaRequest
* UpgradePublishedSchemaRequest `object`
  * DevelopmentSchemaArn **required**
  * DryRun
  * MinorVersion **required**
  * PublishedSchemaArn **required**

### UpgradePublishedSchemaResponse
* UpgradePublishedSchemaResponse `object`
  * UpgradedSchemaArn

### ValidationException


### Version
* Version `string`


