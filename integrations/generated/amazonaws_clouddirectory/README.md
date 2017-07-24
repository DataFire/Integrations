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


### BatchWrite



```js
amazonaws_clouddirectory.BatchWrite({}, context)
```


### DeleteDirectory



```js
amazonaws_clouddirectory.DeleteDirectory({}, context)
```


### CreateDirectory



```js
amazonaws_clouddirectory.CreateDirectory({}, context)
```


### DisableDirectory



```js
amazonaws_clouddirectory.DisableDirectory({}, context)
```


### EnableDirectory



```js
amazonaws_clouddirectory.EnableDirectory({}, context)
```


### GetDirectory



```js
amazonaws_clouddirectory.GetDirectory({}, context)
```


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


### DeleteFacet



```js
amazonaws_clouddirectory.DeleteFacet({}, context)
```


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


### AttachToIndex



```js
amazonaws_clouddirectory.AttachToIndex({}, context)
```


### DetachFromIndex



```js
amazonaws_clouddirectory.DetachFromIndex({}, context)
```


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


### AttachObject



```js
amazonaws_clouddirectory.AttachObject({}, context)
```


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


### DetachObject



```js
amazonaws_clouddirectory.DetachObject({}, context)
```


### AddFacetToObject



```js
amazonaws_clouddirectory.AddFacetToObject({}, context)
```


### RemoveFacetFromObject



```js
amazonaws_clouddirectory.RemoveFacetFromObject({}, context)
```


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


### AttachPolicy



```js
amazonaws_clouddirectory.AttachPolicy({}, context)
```


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


### CreateSchema



```js
amazonaws_clouddirectory.CreateSchema({}, context)
```


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


### PublishSchema



```js
amazonaws_clouddirectory.PublishSchema({}, context)
```


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


### UntagResource



```js
amazonaws_clouddirectory.UntagResource({}, context)
```


