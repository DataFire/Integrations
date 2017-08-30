# @datafire/amazonaws_clouddirectory

Client library for Amazon CloudDirectory

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_clouddirectory
```

```js
let datafire = require('datafire');
let amazonaws_clouddirectory = require('@datafire/amazonaws_clouddirectory').create();

amazonaws_clouddirectory.BatchRead({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>

## Actions
### BatchRead



```js
amazonaws_clouddirectory.BatchRead({
  "Operations": []
}, context)
```

#### Parameters
* Operations (array) **required**

### BatchWrite



```js
amazonaws_clouddirectory.BatchWrite({
  "Operations": []
}, context)
```

#### Parameters
* Operations (array) **required**

### DeleteDirectory



```js
amazonaws_clouddirectory.DeleteDirectory({}, context)
```

#### Parameters
*This action has no parameters*

### CreateDirectory



```js
amazonaws_clouddirectory.CreateDirectory({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DisableDirectory



```js
amazonaws_clouddirectory.DisableDirectory({}, context)
```

#### Parameters
*This action has no parameters*

### EnableDirectory



```js
amazonaws_clouddirectory.EnableDirectory({}, context)
```

#### Parameters
*This action has no parameters*

### GetDirectory



```js
amazonaws_clouddirectory.GetDirectory({}, context)
```

#### Parameters
*This action has no parameters*

### ListDirectories



```js
amazonaws_clouddirectory.ListDirectories({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* state (string)

### UpdateFacet



```js
amazonaws_clouddirectory.UpdateFacet({
  "Name": ""
}, context)
```

#### Parameters
* AttributeUpdates (array)
* Name (string) **required**
* ObjectType (string)

### ListFacetAttributes



```js
amazonaws_clouddirectory.ListFacetAttributes({
  "Name": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* Name (string) **required**
* NextToken (string)

### CreateFacet



```js
amazonaws_clouddirectory.CreateFacet({
  "Name": "",
  "ObjectType": ""
}, context)
```

#### Parameters
* Attributes (array)
* Name (string) **required**
* ObjectType (string) **required**

### DeleteFacet



```js
amazonaws_clouddirectory.DeleteFacet({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### ListFacetNames



```js
amazonaws_clouddirectory.ListFacetNames({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### CreateIndex



```js
amazonaws_clouddirectory.CreateIndex({
  "OrderedIndexedAttributeList": [],
  "IsUnique": true
}, context)
```

#### Parameters
* IsUnique (boolean) **required**
* LinkName (string)
* OrderedIndexedAttributeList (array) **required**
* ParentReference (object) - Reference that identifies an object.

### AttachToIndex



```js
amazonaws_clouddirectory.AttachToIndex({
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Parameters
* IndexReference (object) **required** - Reference that identifies an object.
* TargetReference (object) **required** - Reference that identifies an object.

### DetachFromIndex



```js
amazonaws_clouddirectory.DetachFromIndex({
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Parameters
* IndexReference (object) **required** - Reference that identifies an object.
* TargetReference (object) **required** - Reference that identifies an object.

### ListIndex



```js
amazonaws_clouddirectory.ListIndex({
  "IndexReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* IndexReference (object) **required** - Reference that identifies an object.
* MaxResults (integer)
* NextToken (string)
* RangesOnIndexedValues (array)

### CreateObject



```js
amazonaws_clouddirectory.CreateObject({
  "SchemaFacets": []
}, context)
```

#### Parameters
* LinkName (string)
* ObjectAttributeList (array)
* ParentReference (object) - Reference that identifies an object.
* SchemaFacets (array) **required**

### AttachObject



```js
amazonaws_clouddirectory.AttachObject({
  "ParentReference": {},
  "ChildReference": {},
  "LinkName": ""
}, context)
```

#### Parameters
* ChildReference (object) **required** - Reference that identifies an object.
* LinkName (string) **required**
* ParentReference (object) **required** - Reference that identifies an object.

### ListObjectAttributes



```js
amazonaws_clouddirectory.ListObjectAttributes({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* FacetFilter (object) - A facet.
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### ListObjectChildren



```js
amazonaws_clouddirectory.ListObjectChildren({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### DeleteObject



```js
amazonaws_clouddirectory.DeleteObject({
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectReference (object) **required** - Reference that identifies an object.

### DetachObject



```js
amazonaws_clouddirectory.DetachObject({
  "ParentReference": {},
  "LinkName": ""
}, context)
```

#### Parameters
* LinkName (string) **required**
* ParentReference (object) **required** - Reference that identifies an object.

### AddFacetToObject



```js
amazonaws_clouddirectory.AddFacetToObject({
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectAttributeList (array)
* ObjectReference (object) **required** - Reference that identifies an object.
* SchemaFacet (object) **required** - A facet.

### RemoveFacetFromObject



```js
amazonaws_clouddirectory.RemoveFacetFromObject({
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectReference (object) **required** - Reference that identifies an object.
* SchemaFacet (object) **required** - A facet.

### ListAttachedIndices



```js
amazonaws_clouddirectory.ListAttachedIndices({
  "TargetReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* TargetReference (object) **required** - Reference that identifies an object.

### GetObjectInformation



```js
amazonaws_clouddirectory.GetObjectInformation({
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectReference (object) **required** - Reference that identifies an object.

### ListObjectParents



```js
amazonaws_clouddirectory.ListObjectParents({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### ListObjectParentPaths



```js
amazonaws_clouddirectory.ListObjectParentPaths({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### ListObjectPolicies



```js
amazonaws_clouddirectory.ListObjectPolicies({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### UpdateObjectAttributes



```js
amazonaws_clouddirectory.UpdateObjectAttributes({
  "ObjectReference": {},
  "AttributeUpdates": []
}, context)
```

#### Parameters
* AttributeUpdates (array) **required**
* ObjectReference (object) **required** - Reference that identifies an object.

### AttachPolicy



```js
amazonaws_clouddirectory.AttachPolicy({
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectReference (object) **required** - Reference that identifies an object.
* PolicyReference (object) **required** - Reference that identifies an object.

### ListPolicyAttachments



```js
amazonaws_clouddirectory.ListPolicyAttachments({
  "PolicyReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* PolicyReference (object) **required** - Reference that identifies an object.

### DetachPolicy



```js
amazonaws_clouddirectory.DetachPolicy({
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Parameters
* ObjectReference (object) **required** - Reference that identifies an object.
* PolicyReference (object) **required** - Reference that identifies an object.

### LookupPolicy



```js
amazonaws_clouddirectory.LookupPolicy({
  "ObjectReference": {}
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ObjectReference (object) **required** - Reference that identifies an object.

### DeleteSchema



```js
amazonaws_clouddirectory.DeleteSchema({}, context)
```

#### Parameters
*This action has no parameters*

### ListAppliedSchemaArns



```js
amazonaws_clouddirectory.ListAppliedSchemaArns({
  "DirectoryArn": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DirectoryArn (string) **required**
* MaxResults (integer)
* NextToken (string)

### ApplySchema



```js
amazonaws_clouddirectory.ApplySchema({
  "PublishedSchemaArn": ""
}, context)
```

#### Parameters
* PublishedSchemaArn (string) **required**

### CreateSchema



```js
amazonaws_clouddirectory.CreateSchema({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### ListDevelopmentSchemaArns



```js
amazonaws_clouddirectory.ListDevelopmentSchemaArns({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### PutSchemaFromJson



```js
amazonaws_clouddirectory.PutSchemaFromJson({
  "Document": ""
}, context)
```

#### Parameters
* Document (string) **required**

### PublishSchema



```js
amazonaws_clouddirectory.PublishSchema({
  "Version": ""
}, context)
```

#### Parameters
* Name (string)
* Version (string) **required**

### ListPublishedSchemaArns



```js
amazonaws_clouddirectory.ListPublishedSchemaArns({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### UpdateSchema



```js
amazonaws_clouddirectory.UpdateSchema({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### ListTagsForResource



```js
amazonaws_clouddirectory.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ResourceArn (string) **required**

### TagResource



```js
amazonaws_clouddirectory.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* Tags (array) **required**

### UntagResource



```js
amazonaws_clouddirectory.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* TagKeys (array) **required**

