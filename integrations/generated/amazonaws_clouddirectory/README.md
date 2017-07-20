# @datafire/amazonaws_clouddirectory

Client library for Amazon CloudDirectory

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_clouddirectory
```

```js
let datafire = require('datafire');
let amazonaws_clouddirectory = require('@datafire/amazonaws_clouddirectory').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_clouddirectory: account,
  }
})

amazonaws_clouddirectory.BatchRead({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>

## Actions
### BatchRead
Performs all the read operations in a batch. 


```js
amazonaws_clouddirectory.BatchRead({
  "body": {
    "Operations": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### BatchWrite
Performs all the write operations in a batch. Either all the operations succeed or none. Batch writes supports only object-related operations.


```js
amazonaws_clouddirectory.BatchWrite({
  "body": {
    "Operations": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteDirectory
Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.


```js
amazonaws_clouddirectory.DeleteDirectory({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateDirectory
Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.


```js
amazonaws_clouddirectory.CreateDirectory({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisableDirectory
Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.


```js
amazonaws_clouddirectory.DisableDirectory({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### EnableDirectory
Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.


```js
amazonaws_clouddirectory.EnableDirectory({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDirectory
Retrieves metadata about a directory.


```js
amazonaws_clouddirectory.GetDirectory({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDirectories
Lists directories created within an account.


```js
amazonaws_clouddirectory.ListDirectories({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateFacet
<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>


```js
amazonaws_clouddirectory.UpdateFacet({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListFacetAttributes
Retrieves attributes attached to the facet.


```js
amazonaws_clouddirectory.ListFacetAttributes({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateFacet
Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.


```js
amazonaws_clouddirectory.CreateFacet({
  "body": {
    "Name": "",
    "ObjectType": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteFacet
Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s associated with the facet will be deleted. Only development schema facets are allowed deletion.


```js
amazonaws_clouddirectory.DeleteFacet({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListFacetNames
Retrieves the names of facets that exist in a schema.


```js
amazonaws_clouddirectory.ListFacetNames({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateIndex
Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.


```js
amazonaws_clouddirectory.CreateIndex({
  "body": {
    "OrderedIndexedAttributeList": [],
    "IsUnique": true
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AttachToIndex
Attaches the specified object to the specified index.


```js
amazonaws_clouddirectory.AttachToIndex({
  "body": {
    "IndexReference": {},
    "TargetReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DetachFromIndex
Detaches the specified object from the specified index.


```js
amazonaws_clouddirectory.DetachFromIndex({
  "body": {
    "IndexReference": {},
    "TargetReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListIndex
Lists objects attached to the specified index.


```js
amazonaws_clouddirectory.ListIndex({
  "body": {
    "IndexReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateObject
Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 


```js
amazonaws_clouddirectory.CreateObject({
  "body": {
    "SchemaFacets": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AttachObject
<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>


```js
amazonaws_clouddirectory.AttachObject({
  "body": {
    "ParentReference": {},
    "ChildReference": {},
    "LinkName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListObjectAttributes
Lists all attributes associated with an object. 


```js
amazonaws_clouddirectory.ListObjectAttributes({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListObjectChildren
Returns a paginated list of child objects associated with a given object.


```js
amazonaws_clouddirectory.ListObjectChildren({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteObject
Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.


```js
amazonaws_clouddirectory.DeleteObject({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DetachObject
Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.


```js
amazonaws_clouddirectory.DetachObject({
  "body": {
    "ParentReference": {},
    "LinkName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddFacetToObject
Adds a new <a>Facet</a> to an object.


```js
amazonaws_clouddirectory.AddFacetToObject({
  "body": {
    "SchemaFacet": {},
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RemoveFacetFromObject
Removes the specified facet from the specified object.


```js
amazonaws_clouddirectory.RemoveFacetFromObject({
  "body": {
    "SchemaFacet": {},
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListAttachedIndices
Lists indices attached to an object.


```js
amazonaws_clouddirectory.ListAttachedIndices({
  "body": {
    "TargetReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetObjectInformation
Retrieves metadata about an object.


```js
amazonaws_clouddirectory.GetObjectInformation({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListObjectParents
Lists parent objects associated with a given object in pagination fashion.


```js
amazonaws_clouddirectory.ListObjectParents({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListObjectParentPaths
<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to directory root are ignored from the target object.</p>


```js
amazonaws_clouddirectory.ListObjectParentPaths({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListObjectPolicies
Returns policies attached to an object in pagination fashion.


```js
amazonaws_clouddirectory.ListObjectPolicies({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateObjectAttributes
Updates a given object's attributes.


```js
amazonaws_clouddirectory.UpdateObjectAttributes({
  "body": {
    "ObjectReference": {},
    "AttributeUpdates": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AttachPolicy
Attaches a policy object to a regular object. An object can have a limited number of attached policies.


```js
amazonaws_clouddirectory.AttachPolicy({
  "body": {
    "PolicyReference": {},
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPolicyAttachments
Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.


```js
amazonaws_clouddirectory.ListPolicyAttachments({
  "body": {
    "PolicyReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DetachPolicy
Detaches a policy from an object.


```js
amazonaws_clouddirectory.DetachPolicy({
  "body": {
    "PolicyReference": {},
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### LookupPolicy
Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored.


```js
amazonaws_clouddirectory.LookupPolicy({
  "body": {
    "ObjectReference": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteSchema
Deletes a given schema. Schemas in a development and published state can only be deleted. 


```js
amazonaws_clouddirectory.DeleteSchema({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListAppliedSchemaArns
Lists schemas applied to a directory.


```js
amazonaws_clouddirectory.ListAppliedSchemaArns({
  "body": {
    "DirectoryArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ApplySchema
Copies input published schema into <a>Directory</a> with same name and version as that of published schema .


```js
amazonaws_clouddirectory.ApplySchema({
  "body": {
    "PublishedSchemaArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateSchema
<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>


```js
amazonaws_clouddirectory.CreateSchema({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDevelopmentSchemaArns
Retrieves the ARNs of schemas in the development state.


```js
amazonaws_clouddirectory.ListDevelopmentSchemaArns({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PutSchemaFromJson
Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.


```js
amazonaws_clouddirectory.PutSchemaFromJson({
  "body": {
    "Document": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PublishSchema
Publishes a development schema with a version. If description and attributes are specified, PublishSchema overrides the development schema description and attributes. If not, the development schema description and attributes are used.


```js
amazonaws_clouddirectory.PublishSchema({
  "body": {
    "Version": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPublishedSchemaArns
Retrieves published schema ARNs.


```js
amazonaws_clouddirectory.ListPublishedSchemaArns({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateSchema
Updates the schema name with a new name. Only development schema names can be updated.


```js
amazonaws_clouddirectory.UpdateSchema({
  "body": {
    "Name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTagsForResource
Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.


```js
amazonaws_clouddirectory.ListTagsForResource({
  "body": {
    "ResourceArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TagResource
API for adding tags to a resource.


```js
amazonaws_clouddirectory.TagResource({
  "body": {
    "ResourceArn": "",
    "Tags": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UntagResource
API for removing tags from a resource.


```js
amazonaws_clouddirectory.UntagResource({
  "body": {
    "ResourceArn": "",
    "TagKeys": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

