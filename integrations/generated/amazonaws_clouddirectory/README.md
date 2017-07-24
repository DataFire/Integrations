# @datafire/amazonaws_clouddirectory

Client library for Amazon CloudDirectory

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_clouddirectory
```

```js
let datafire = require('datafire');
let amazonaws_clouddirectory = require('@datafire/amazonaws_clouddirectory').actions;
let context = new datafire.Context();

amazonaws_clouddirectory.BatchRead({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>

## Actions
### BatchRead



```js
amazonaws_clouddirectory.BatchRead({}, context)
```

#### Parameters

### BatchWrite



```js
amazonaws_clouddirectory.BatchWrite({}, context)
```

#### Parameters

### DeleteDirectory



```js
amazonaws_clouddirectory.DeleteDirectory({}, context)
```

#### Parameters

### CreateDirectory



```js
amazonaws_clouddirectory.CreateDirectory({}, context)
```

#### Parameters

### DisableDirectory



```js
amazonaws_clouddirectory.DisableDirectory({}, context)
```

#### Parameters

### EnableDirectory



```js
amazonaws_clouddirectory.EnableDirectory({}, context)
```

#### Parameters

### GetDirectory



```js
amazonaws_clouddirectory.GetDirectory({}, context)
```

#### Parameters

### ListDirectories



```js
amazonaws_clouddirectory.ListDirectories({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### UpdateFacet



```js
amazonaws_clouddirectory.UpdateFacet({}, context)
```

#### Parameters

### ListFacetAttributes



```js
amazonaws_clouddirectory.ListFacetAttributes({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### CreateFacet



```js
amazonaws_clouddirectory.CreateFacet({}, context)
```

#### Parameters

### DeleteFacet



```js
amazonaws_clouddirectory.DeleteFacet({}, context)
```

#### Parameters

### ListFacetNames



```js
amazonaws_clouddirectory.ListFacetNames({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### CreateIndex



```js
amazonaws_clouddirectory.CreateIndex({}, context)
```

#### Parameters

### AttachToIndex



```js
amazonaws_clouddirectory.AttachToIndex({}, context)
```

#### Parameters

### DetachFromIndex



```js
amazonaws_clouddirectory.DetachFromIndex({}, context)
```

#### Parameters

### ListIndex



```js
amazonaws_clouddirectory.ListIndex({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### CreateObject



```js
amazonaws_clouddirectory.CreateObject({}, context)
```

#### Parameters

### AttachObject



```js
amazonaws_clouddirectory.AttachObject({}, context)
```

#### Parameters

### ListObjectAttributes



```js
amazonaws_clouddirectory.ListObjectAttributes({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListObjectChildren



```js
amazonaws_clouddirectory.ListObjectChildren({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DeleteObject



```js
amazonaws_clouddirectory.DeleteObject({}, context)
```

#### Parameters

### DetachObject



```js
amazonaws_clouddirectory.DetachObject({}, context)
```

#### Parameters

### AddFacetToObject



```js
amazonaws_clouddirectory.AddFacetToObject({}, context)
```

#### Parameters

### RemoveFacetFromObject



```js
amazonaws_clouddirectory.RemoveFacetFromObject({}, context)
```

#### Parameters

### ListAttachedIndices



```js
amazonaws_clouddirectory.ListAttachedIndices({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### GetObjectInformation



```js
amazonaws_clouddirectory.GetObjectInformation({}, context)
```

#### Parameters

### ListObjectParents



```js
amazonaws_clouddirectory.ListObjectParents({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListObjectParentPaths



```js
amazonaws_clouddirectory.ListObjectParentPaths({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListObjectPolicies



```js
amazonaws_clouddirectory.ListObjectPolicies({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### UpdateObjectAttributes



```js
amazonaws_clouddirectory.UpdateObjectAttributes({}, context)
```

#### Parameters

### AttachPolicy



```js
amazonaws_clouddirectory.AttachPolicy({}, context)
```

#### Parameters

### ListPolicyAttachments



```js
amazonaws_clouddirectory.ListPolicyAttachments({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DetachPolicy



```js
amazonaws_clouddirectory.DetachPolicy({}, context)
```

#### Parameters

### LookupPolicy



```js
amazonaws_clouddirectory.LookupPolicy({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DeleteSchema



```js
amazonaws_clouddirectory.DeleteSchema({}, context)
```

#### Parameters

### ListAppliedSchemaArns



```js
amazonaws_clouddirectory.ListAppliedSchemaArns({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ApplySchema



```js
amazonaws_clouddirectory.ApplySchema({}, context)
```

#### Parameters

### CreateSchema



```js
amazonaws_clouddirectory.CreateSchema({}, context)
```

#### Parameters

### ListDevelopmentSchemaArns



```js
amazonaws_clouddirectory.ListDevelopmentSchemaArns({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### PutSchemaFromJson



```js
amazonaws_clouddirectory.PutSchemaFromJson({}, context)
```

#### Parameters

### PublishSchema



```js
amazonaws_clouddirectory.PublishSchema({}, context)
```

#### Parameters

### ListPublishedSchemaArns



```js
amazonaws_clouddirectory.ListPublishedSchemaArns({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### UpdateSchema



```js
amazonaws_clouddirectory.UpdateSchema({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_clouddirectory.ListTagsForResource({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### TagResource



```js
amazonaws_clouddirectory.TagResource({}, context)
```

#### Parameters

### UntagResource



```js
amazonaws_clouddirectory.UntagResource({}, context)
```

#### Parameters

