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

#### Input
* input `object`
  * Operations **required** [BatchReadOperationList](#batchreadoperationlist)

#### Output
* output [BatchReadResponse](#batchreadresponse)

### BatchWrite



```js
amazonaws_clouddirectory.BatchWrite({
  "Operations": []
}, context)
```

#### Input
* input `object`
  * Operations **required** [BatchWriteOperationList](#batchwriteoperationlist)

#### Output
* output [BatchWriteResponse](#batchwriteresponse)

### DeleteDirectory



```js
amazonaws_clouddirectory.DeleteDirectory({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteDirectoryResponse](#deletedirectoryresponse)

### CreateDirectory



```js
amazonaws_clouddirectory.CreateDirectory({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [DirectoryName](#directoryname)

#### Output
* output [CreateDirectoryResponse](#createdirectoryresponse)

### DisableDirectory



```js
amazonaws_clouddirectory.DisableDirectory({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableDirectoryResponse](#disabledirectoryresponse)

### EnableDirectory



```js
amazonaws_clouddirectory.EnableDirectory({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableDirectoryResponse](#enabledirectoryresponse)

### GetDirectory



```js
amazonaws_clouddirectory.GetDirectory({}, context)
```

#### Input
* input `object`

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
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * state [DirectoryState](#directorystate)

#### Output
* output [ListDirectoriesResponse](#listdirectoriesresponse)

### UpdateFacet



```js
amazonaws_clouddirectory.UpdateFacet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AttributeUpdates [FacetAttributeUpdateList](#facetattributeupdatelist)
  * Name **required** [FacetName](#facetname)
  * ObjectType [ObjectType](#objecttype)

#### Output
* output [UpdateFacetResponse](#updatefacetresponse)

### ListFacetAttributes



```js
amazonaws_clouddirectory.ListFacetAttributes({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * Name **required** [FacetName](#facetname)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListFacetAttributesResponse](#listfacetattributesresponse)

### CreateFacet



```js
amazonaws_clouddirectory.CreateFacet({
  "Name": "",
  "ObjectType": ""
}, context)
```

#### Input
* input `object`
  * Attributes [FacetAttributeList](#facetattributelist)
  * Name **required** [FacetName](#facetname)
  * ObjectType **required** [ObjectType](#objecttype)

#### Output
* output [CreateFacetResponse](#createfacetresponse)

### DeleteFacet



```js
amazonaws_clouddirectory.DeleteFacet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [FacetName](#facetname)

#### Output
* output [DeleteFacetResponse](#deletefacetresponse)

### ListFacetNames



```js
amazonaws_clouddirectory.ListFacetNames({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListFacetNamesResponse](#listfacetnamesresponse)

### CreateIndex



```js
amazonaws_clouddirectory.CreateIndex({
  "OrderedIndexedAttributeList": [],
  "IsUnique": true
}, context)
```

#### Input
* input `object`
  * IsUnique **required** [Bool](#bool)
  * LinkName [LinkName](#linkname)
  * OrderedIndexedAttributeList **required** [AttributeKeyList](#attributekeylist)
  * ParentReference [ObjectReference](#objectreference)

#### Output
* output [CreateIndexResponse](#createindexresponse)

### AttachToIndex



```js
amazonaws_clouddirectory.AttachToIndex({
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

#### Output
* output [AttachToIndexResponse](#attachtoindexresponse)

### DetachFromIndex



```js
amazonaws_clouddirectory.DetachFromIndex({
  "IndexReference": {},
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

#### Output
* output [DetachFromIndexResponse](#detachfromindexresponse)

### ListIndex



```js
amazonaws_clouddirectory.ListIndex({
  "IndexReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * IndexReference **required** [ObjectReference](#objectreference)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * RangesOnIndexedValues [ObjectAttributeRangeList](#objectattributerangelist)

#### Output
* output [ListIndexResponse](#listindexresponse)

### CreateObject



```js
amazonaws_clouddirectory.CreateObject({
  "SchemaFacets": []
}, context)
```

#### Input
* input `object`
  * LinkName [LinkName](#linkname)
  * ObjectAttributeList [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ParentReference [ObjectReference](#objectreference)
  * SchemaFacets **required** [SchemaFacetList](#schemafacetlist)

#### Output
* output [CreateObjectResponse](#createobjectresponse)

### AttachObject



```js
amazonaws_clouddirectory.AttachObject({
  "ParentReference": {},
  "ChildReference": {},
  "LinkName": ""
}, context)
```

#### Input
* input `object`
  * ChildReference **required** [ObjectReference](#objectreference)
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

#### Output
* output [AttachObjectResponse](#attachobjectresponse)

### ListObjectAttributes



```js
amazonaws_clouddirectory.ListObjectAttributes({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FacetFilter [SchemaFacet](#schemafacet)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListObjectAttributesResponse](#listobjectattributesresponse)

### ListObjectChildren



```js
amazonaws_clouddirectory.ListObjectChildren({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListObjectChildrenResponse](#listobjectchildrenresponse)

### DeleteObject



```js
amazonaws_clouddirectory.DeleteObject({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [DeleteObjectResponse](#deleteobjectresponse)

### DetachObject



```js
amazonaws_clouddirectory.DetachObject({
  "ParentReference": {},
  "LinkName": ""
}, context)
```

#### Input
* input `object`
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

#### Output
* output [DetachObjectResponse](#detachobjectresponse)

### AddFacetToObject



```js
amazonaws_clouddirectory.AddFacetToObject({
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectAttributeList [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

#### Output
* output [AddFacetToObjectResponse](#addfacettoobjectresponse)

### RemoveFacetFromObject



```js
amazonaws_clouddirectory.RemoveFacetFromObject({
  "SchemaFacet": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

#### Output
* output [RemoveFacetFromObjectResponse](#removefacetfromobjectresponse)

### ListAttachedIndices



```js
amazonaws_clouddirectory.ListAttachedIndices({
  "TargetReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * TargetReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListAttachedIndicesResponse](#listattachedindicesresponse)

### GetObjectInformation



```js
amazonaws_clouddirectory.GetObjectInformation({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [GetObjectInformationResponse](#getobjectinformationresponse)

### ListObjectParents



```js
amazonaws_clouddirectory.ListObjectParents({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListObjectParentsResponse](#listobjectparentsresponse)

### ListObjectParentPaths



```js
amazonaws_clouddirectory.ListObjectParentPaths({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListObjectParentPathsResponse](#listobjectparentpathsresponse)

### ListObjectPolicies



```js
amazonaws_clouddirectory.ListObjectPolicies({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListObjectPoliciesResponse](#listobjectpoliciesresponse)

### UpdateObjectAttributes



```js
amazonaws_clouddirectory.UpdateObjectAttributes({
  "ObjectReference": {},
  "AttributeUpdates": []
}, context)
```

#### Input
* input `object`
  * AttributeUpdates **required** [ObjectAttributeUpdateList](#objectattributeupdatelist)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [UpdateObjectAttributesResponse](#updateobjectattributesresponse)

### AttachPolicy



```js
amazonaws_clouddirectory.AttachPolicy({
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

#### Output
* output [AttachPolicyResponse](#attachpolicyresponse)

### ListPolicyAttachments



```js
amazonaws_clouddirectory.ListPolicyAttachments({
  "PolicyReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * PolicyReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListPolicyAttachmentsResponse](#listpolicyattachmentsresponse)

### DetachPolicy



```js
amazonaws_clouddirectory.DetachPolicy({
  "PolicyReference": {},
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

#### Output
* output [DetachPolicyResponse](#detachpolicyresponse)

### LookupPolicy



```js
amazonaws_clouddirectory.LookupPolicy({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [LookupPolicyResponse](#lookuppolicyresponse)

### DeleteSchema



```js
amazonaws_clouddirectory.DeleteSchema({}, context)
```

#### Input
* input `object`

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
  * DirectoryArn **required** [Arn](#arn)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListAppliedSchemaArnsResponse](#listappliedschemaarnsresponse)

### ApplySchema



```js
amazonaws_clouddirectory.ApplySchema({
  "PublishedSchemaArn": ""
}, context)
```

#### Input
* input `object`
  * PublishedSchemaArn **required** [Arn](#arn)

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
  * Name **required** [SchemaName](#schemaname)

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
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListDevelopmentSchemaArnsResponse](#listdevelopmentschemaarnsresponse)

### PutSchemaFromJson



```js
amazonaws_clouddirectory.PutSchemaFromJson({
  "Document": ""
}, context)
```

#### Input
* input `object`
  * Document **required** [SchemaJsonDocument](#schemajsondocument)

#### Output
* output [PutSchemaFromJsonResponse](#putschemafromjsonresponse)

### PublishSchema



```js
amazonaws_clouddirectory.PublishSchema({
  "Version": ""
}, context)
```

#### Input
* input `object`
  * Name [SchemaName](#schemaname)
  * Version **required** [Version](#version)

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
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListPublishedSchemaArnsResponse](#listpublishedschemaarnsresponse)

### UpdateSchema



```js
amazonaws_clouddirectory.UpdateSchema({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [SchemaName](#schemaname)

#### Output
* output [UpdateSchemaResponse](#updateschemaresponse)

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
  * MaxResults [TagsNumberResults](#tagsnumberresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [Arn](#arn)

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
  * ResourceArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

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
  * ResourceArn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### AttachTypedLink



```js
amazonaws_clouddirectory.AttachTypedLink({
  "SourceObjectReference": {},
  "TargetObjectReference": {},
  "TypedLinkFacet": {
    "SchemaArn": "",
    "TypedLinkName": ""
  },
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [AttributeNameAndValueList](#attributenameandvaluelist)
  * SourceObjectReference **required** [ObjectReference](#objectreference)
  * TargetObjectReference **required** [ObjectReference](#objectreference)
  * TypedLinkFacet **required** [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)

#### Output
* output [AttachTypedLinkResponse](#attachtypedlinkresponse)

### DetachTypedLink



```js
amazonaws_clouddirectory.DetachTypedLink({
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": "",
      "TypedLinkName": ""
    },
    "SourceObjectReference": {},
    "TargetObjectReference": {},
    "IdentityAttributeValues": []
  }
}, context)
```

#### Input
* input `object`
  * TypedLinkSpecifier **required** [TypedLinkSpecifier](#typedlinkspecifier)

#### Output
*Output schema unknown*

### UpdateTypedLinkFacet



```js
amazonaws_clouddirectory.UpdateTypedLinkFacet({
  "Name": "",
  "AttributeUpdates": [],
  "IdentityAttributeOrder": []
}, context)
```

#### Input
* input `object`
  * AttributeUpdates **required** [TypedLinkFacetAttributeUpdateList](#typedlinkfacetattributeupdatelist)
  * IdentityAttributeOrder **required** [AttributeNameList](#attributenamelist)
  * Name **required** [TypedLinkName](#typedlinkname)

#### Output
* output [UpdateTypedLinkFacetResponse](#updatetypedlinkfacetresponse)

### ListTypedLinkFacetAttributes



```js
amazonaws_clouddirectory.ListTypedLinkFacetAttributes({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * Name **required** [TypedLinkName](#typedlinkname)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListTypedLinkFacetAttributesResponse](#listtypedlinkfacetattributesresponse)

### CreateTypedLinkFacet



```js
amazonaws_clouddirectory.CreateTypedLinkFacet({
  "Facet": {
    "Name": "",
    "Attributes": [],
    "IdentityAttributeOrder": []
  }
}, context)
```

#### Input
* input `object`
  * Facet **required** [TypedLinkFacet](#typedlinkfacet)

#### Output
* output [CreateTypedLinkFacetResponse](#createtypedlinkfacetresponse)

### DeleteTypedLinkFacet



```js
amazonaws_clouddirectory.DeleteTypedLinkFacet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [TypedLinkName](#typedlinkname)

#### Output
* output [DeleteTypedLinkFacetResponse](#deletetypedlinkfacetresponse)

### GetTypedLinkFacetInformation



```js
amazonaws_clouddirectory.GetTypedLinkFacetInformation({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [TypedLinkName](#typedlinkname)

#### Output
* output [GetTypedLinkFacetInformationResponse](#gettypedlinkfacetinformationresponse)

### ListTypedLinkFacetNames



```js
amazonaws_clouddirectory.ListTypedLinkFacetNames({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListTypedLinkFacetNamesResponse](#listtypedlinkfacetnamesresponse)

### ListIncomingTypedLinks



```js
amazonaws_clouddirectory.ListIncomingTypedLinks({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ConsistencyLevel [ConsistencyLevel](#consistencylevel)
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListIncomingTypedLinksResponse](#listincomingtypedlinksresponse)

### ListOutgoingTypedLinks



```js
amazonaws_clouddirectory.ListOutgoingTypedLinks({
  "ObjectReference": {}
}, context)
```

#### Input
* input `object`
  * ConsistencyLevel [ConsistencyLevel](#consistencylevel)
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

#### Output
* output [ListOutgoingTypedLinksResponse](#listoutgoingtypedlinksresponse)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: Access denied. Check your permissions.
  * Message [ExceptionMessage](#exceptionmessage)

### AddFacetToObjectRequest
* AddFacetToObjectRequest `object`
  * ObjectAttributeList [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

### AddFacetToObjectResponse
* AddFacetToObjectResponse `object`

### ApplySchemaRequest
* ApplySchemaRequest `object`
  * PublishedSchemaArn **required** [Arn](#arn)

### ApplySchemaResponse
* ApplySchemaResponse `object`
  * AppliedSchemaArn [Arn](#arn)
  * DirectoryArn [Arn](#arn)

### Arn
* Arn `string`

### Arns
* Arns `array`
  * items [Arn](#arn)

### AttachObjectRequest
* AttachObjectRequest `object`
  * ChildReference **required** [ObjectReference](#objectreference)
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

### AttachObjectResponse
* AttachObjectResponse `object`
  * AttachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### AttachPolicyRequest
* AttachPolicyRequest `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

### AttachPolicyResponse
* AttachPolicyResponse `object`

### AttachToIndexRequest
* AttachToIndexRequest `object`
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

### AttachToIndexResponse
* AttachToIndexResponse `object`
  * AttachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### AttachTypedLinkRequest
* AttachTypedLinkRequest `object`
  * Attributes **required** [AttributeNameAndValueList](#attributenameandvaluelist)
  * SourceObjectReference **required** [ObjectReference](#objectreference)
  * TargetObjectReference **required** [ObjectReference](#objectreference)
  * TypedLinkFacet **required** [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)

### AttachTypedLinkResponse
* AttachTypedLinkResponse `object`
  * TypedLinkSpecifier [TypedLinkSpecifier](#typedlinkspecifier)

### AttributeKey
* AttributeKey `object`: A unique identifier for an attribute.
  * FacetName **required** [FacetName](#facetname)
  * Name **required** [AttributeName](#attributename)
  * SchemaArn **required** [Arn](#arn)

### AttributeKeyAndValue
* AttributeKeyAndValue `object`: The combination of an attribute key and an attribute value.
  * Key **required** [AttributeKey](#attributekey)
  * Value **required** [TypedAttributeValue](#typedattributevalue)

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
  * AttributeName **required** [AttributeName](#attributename)
  * Value **required** [TypedAttributeValue](#typedattributevalue)

### AttributeNameAndValueList
* AttributeNameAndValueList `array`
  * items [AttributeNameAndValue](#attributenameandvalue)

### AttributeNameList
* AttributeNameList `array`
  * items [AttributeName](#attributename)

### BatchAddFacetToObject
* BatchAddFacetToObject `object`: Represents the output of a batch add facet to object operation.
  * ObjectAttributeList **required** [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

### BatchAddFacetToObjectResponse
* BatchAddFacetToObjectResponse `object`: The result of a batch add facet to object operation.

### BatchAttachObject
* BatchAttachObject `object`: Represents the output of an <a>AttachObject</a> operation.
  * ChildReference **required** [ObjectReference](#objectreference)
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

### BatchAttachObjectResponse
* BatchAttachObjectResponse `object`: Represents the output batch <a>AttachObject</a> response operation.
  * attachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchAttachPolicy
* BatchAttachPolicy `object`: Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

### BatchAttachPolicyResponse
* BatchAttachPolicyResponse `object`: Represents the output of an <a>AttachPolicy</a> response operation.

### BatchAttachToIndex
* BatchAttachToIndex `object`: Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

### BatchAttachToIndexResponse
* BatchAttachToIndexResponse `object`: Represents the output of a <a>AttachToIndex</a> response operation.
  * AttachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchAttachTypedLink
* BatchAttachTypedLink `object`: Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
  * Attributes **required** [AttributeNameAndValueList](#attributenameandvaluelist)
  * SourceObjectReference **required** [ObjectReference](#objectreference)
  * TargetObjectReference **required** [ObjectReference](#objectreference)
  * TypedLinkFacet **required** [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)

### BatchAttachTypedLinkResponse
* BatchAttachTypedLinkResponse `object`: Represents the output of a <a>AttachTypedLink</a> response operation.
  * TypedLinkSpecifier [TypedLinkSpecifier](#typedlinkspecifier)

### BatchCreateIndex
* BatchCreateIndex `object`: Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
  * BatchReferenceName [BatchReferenceName](#batchreferencename)
  * IsUnique **required** [Bool](#bool)
  * LinkName [LinkName](#linkname)
  * OrderedIndexedAttributeList **required** [AttributeKeyList](#attributekeylist)
  * ParentReference [ObjectReference](#objectreference)

### BatchCreateIndexResponse
* BatchCreateIndexResponse `object`: Represents the output of a <a>CreateIndex</a> response operation.
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchCreateObject
* BatchCreateObject `object`: Represents the output of a <a>CreateObject</a> operation.
  * BatchReferenceName **required** [BatchReferenceName](#batchreferencename)
  * LinkName **required** [LinkName](#linkname)
  * ObjectAttributeList **required** [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ParentReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacetList](#schemafacetlist)

### BatchCreateObjectResponse
* BatchCreateObjectResponse `object`: Represents the output of a <a>CreateObject</a> response operation.
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchDeleteObject
* BatchDeleteObject `object`: Represents the output of a <a>DeleteObject</a> operation.
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchDeleteObjectResponse
* BatchDeleteObjectResponse `object`: Represents the output of a <a>DeleteObject</a> response operation.

### BatchDetachFromIndex
* BatchDetachFromIndex `object`: Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

### BatchDetachFromIndexResponse
* BatchDetachFromIndexResponse `object`: Represents the output of a <a>DetachFromIndex</a> response operation.
  * DetachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchDetachObject
* BatchDetachObject `object`: Represents the output of a <a>DetachObject</a> operation.
  * BatchReferenceName **required** [BatchReferenceName](#batchreferencename)
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

### BatchDetachObjectResponse
* BatchDetachObjectResponse `object`: Represents the output of a <a>DetachObject</a> response operation.
  * detachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchDetachPolicy
* BatchDetachPolicy `object`: Detaches the specified policy from the specified directory inside a <a>BatchRead</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchReadRequest$Operations</a>.
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

### BatchDetachPolicyResponse
* BatchDetachPolicyResponse `object`: Represents the output of a <a>DetachPolicy</a> response operation.

### BatchDetachTypedLink
* BatchDetachTypedLink `object`: Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
  * TypedLinkSpecifier **required** [TypedLinkSpecifier](#typedlinkspecifier)

### BatchDetachTypedLinkResponse
* BatchDetachTypedLinkResponse `object`: Represents the output of a <a>DetachTypedLink</a> response operation.

### BatchGetObjectInformation
* BatchGetObjectInformation `object`: Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchGetObjectInformationResponse
* BatchGetObjectInformationResponse `object`: Represents the output of a <a>GetObjectInformation</a> response operation.
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)
  * SchemaFacets [SchemaFacetList](#schemafacetlist)

### BatchListAttachedIndices
* BatchListAttachedIndices `object`: Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * TargetReference **required** [ObjectReference](#objectreference)

### BatchListAttachedIndicesResponse
* BatchListAttachedIndicesResponse `object`: Represents the output of a <a>ListAttachedIndices</a> response operation.
  * IndexAttachments [IndexAttachmentList](#indexattachmentlist)
  * NextToken [NextToken](#nexttoken)

### BatchListIncomingTypedLinks
* BatchListIncomingTypedLinks `object`: Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListIncomingTypedLinksResponse
* BatchListIncomingTypedLinksResponse `object`: Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
  * LinkSpecifiers [TypedLinkSpecifierList](#typedlinkspecifierlist)
  * NextToken [NextToken](#nexttoken)

### BatchListIndex
* BatchListIndex `object`: Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
  * IndexReference **required** [ObjectReference](#objectreference)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * RangesOnIndexedValues [ObjectAttributeRangeList](#objectattributerangelist)

### BatchListIndexResponse
* BatchListIndexResponse `object`: Represents the output of a <a>ListIndex</a> response operation.
  * IndexAttachments [IndexAttachmentList](#indexattachmentlist)
  * NextToken [NextToken](#nexttoken)

### BatchListObjectAttributes
* BatchListObjectAttributes `object`: Represents the output of a <a>ListObjectAttributes</a> operation.
  * FacetFilter [SchemaFacet](#schemafacet)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListObjectAttributesResponse
* BatchListObjectAttributesResponse `object`: Represents the output of a <a>ListObjectAttributes</a> response operation.
  * Attributes [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * NextToken [NextToken](#nexttoken)

### BatchListObjectChildren
* BatchListObjectChildren `object`: Represents the output of a <a>ListObjectChildren</a> operation.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListObjectChildrenResponse
* BatchListObjectChildrenResponse `object`: Represents the output of a <a>ListObjectChildren</a> response operation.
  * Children [LinkNameToObjectIdentifierMap](#linknametoobjectidentifiermap)
  * NextToken [NextToken](#nexttoken)

### BatchListObjectParentPaths
* BatchListObjectParentPaths `object`: Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListObjectParentPathsResponse
* BatchListObjectParentPathsResponse `object`: Represents the output of a <a>ListObjectParentPaths</a> response operation.
  * NextToken [NextToken](#nexttoken)
  * PathToObjectIdentifiersList [PathToObjectIdentifiersList](#pathtoobjectidentifierslist)

### BatchListObjectPolicies
* BatchListObjectPolicies `object`: Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListObjectPoliciesResponse
* BatchListObjectPoliciesResponse `object`: Represents the output of a <a>ListObjectPolicies</a> response operation.
  * AttachedPolicyIds [ObjectIdentifierList](#objectidentifierlist)
  * NextToken [NextToken](#nexttoken)

### BatchListOutgoingTypedLinks
* BatchListOutgoingTypedLinks `object`: Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchListOutgoingTypedLinksResponse
* BatchListOutgoingTypedLinksResponse `object`: Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
  * NextToken [NextToken](#nexttoken)
  * TypedLinkSpecifiers [TypedLinkSpecifierList](#typedlinkspecifierlist)

### BatchListPolicyAttachments
* BatchListPolicyAttachments `object`: Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * PolicyReference **required** [ObjectReference](#objectreference)

### BatchListPolicyAttachmentsResponse
* BatchListPolicyAttachmentsResponse `object`: Represents the output of a <a>ListPolicyAttachments</a> response operation.
  * NextToken [NextToken](#nexttoken)
  * ObjectIdentifiers [ObjectIdentifierList](#objectidentifierlist)

### BatchLookupPolicy
* BatchLookupPolicy `object`: Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchLookupPolicyResponse
* BatchLookupPolicyResponse `object`: Represents the output of a <a>LookupPolicy</a> response operation.
  * NextToken [NextToken](#nexttoken)
  * PolicyToPathList [PolicyToPathList](#policytopathlist)

### BatchOperationIndex
* BatchOperationIndex `integer`

### BatchReadException
* BatchReadException `object`: The batch read exception structure, which contains the exception type and message.
  * Message [ExceptionMessage](#exceptionmessage)
  * Type [BatchReadExceptionType](#batchreadexceptiontype)

### BatchReadExceptionType
* BatchReadExceptionType `string` (values: ValidationException, InvalidArnException, ResourceNotFoundException, InvalidNextTokenException, AccessDeniedException, NotNodeException, FacetValidationException, CannotListParentOfRootException, NotIndexException, NotPolicyException, DirectoryNotEnabledException, LimitExceededException, InternalServiceException)

### BatchReadOperation
* BatchReadOperation `object`: Represents the output of a <code>BatchRead</code> operation.
  * GetObjectInformation [BatchGetObjectInformation](#batchgetobjectinformation)
  * ListAttachedIndices [BatchListAttachedIndices](#batchlistattachedindices)
  * ListIncomingTypedLinks [BatchListIncomingTypedLinks](#batchlistincomingtypedlinks)
  * ListIndex [BatchListIndex](#batchlistindex)
  * ListObjectAttributes [BatchListObjectAttributes](#batchlistobjectattributes)
  * ListObjectChildren [BatchListObjectChildren](#batchlistobjectchildren)
  * ListObjectParentPaths [BatchListObjectParentPaths](#batchlistobjectparentpaths)
  * ListObjectPolicies [BatchListObjectPolicies](#batchlistobjectpolicies)
  * ListOutgoingTypedLinks [BatchListOutgoingTypedLinks](#batchlistoutgoingtypedlinks)
  * ListPolicyAttachments [BatchListPolicyAttachments](#batchlistpolicyattachments)
  * LookupPolicy [BatchLookupPolicy](#batchlookuppolicy)

### BatchReadOperationList
* BatchReadOperationList `array`
  * items [BatchReadOperation](#batchreadoperation)

### BatchReadOperationResponse
* BatchReadOperationResponse `object`: Represents the output of a <code>BatchRead</code> response operation.
  * ExceptionResponse [BatchReadException](#batchreadexception)
  * SuccessfulResponse [BatchReadSuccessfulResponse](#batchreadsuccessfulresponse)

### BatchReadOperationResponseList
* BatchReadOperationResponseList `array`
  * items [BatchReadOperationResponse](#batchreadoperationresponse)

### BatchReadRequest
* BatchReadRequest `object`
  * Operations **required** [BatchReadOperationList](#batchreadoperationlist)

### BatchReadResponse
* BatchReadResponse `object`
  * Responses [BatchReadOperationResponseList](#batchreadoperationresponselist)

### BatchReadSuccessfulResponse
* BatchReadSuccessfulResponse `object`: Represents the output of a <code>BatchRead</code> success response operation.
  * GetObjectInformation [BatchGetObjectInformationResponse](#batchgetobjectinformationresponse)
  * ListAttachedIndices [BatchListAttachedIndicesResponse](#batchlistattachedindicesresponse)
  * ListIncomingTypedLinks [BatchListIncomingTypedLinksResponse](#batchlistincomingtypedlinksresponse)
  * ListIndex [BatchListIndexResponse](#batchlistindexresponse)
  * ListObjectAttributes [BatchListObjectAttributesResponse](#batchlistobjectattributesresponse)
  * ListObjectChildren [BatchListObjectChildrenResponse](#batchlistobjectchildrenresponse)
  * ListObjectParentPaths [BatchListObjectParentPathsResponse](#batchlistobjectparentpathsresponse)
  * ListObjectPolicies [BatchListObjectPoliciesResponse](#batchlistobjectpoliciesresponse)
  * ListOutgoingTypedLinks [BatchListOutgoingTypedLinksResponse](#batchlistoutgoingtypedlinksresponse)
  * ListPolicyAttachments [BatchListPolicyAttachmentsResponse](#batchlistpolicyattachmentsresponse)
  * LookupPolicy [BatchLookupPolicyResponse](#batchlookuppolicyresponse)

### BatchReferenceName
* BatchReferenceName `string`

### BatchRemoveFacetFromObject
* BatchRemoveFacetFromObject `object`: A batch operation to remove a facet from an object.
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

### BatchRemoveFacetFromObjectResponse
* BatchRemoveFacetFromObjectResponse `object`: An empty result that represents success.

### BatchUpdateObjectAttributes
* BatchUpdateObjectAttributes `object`: Represents the output of a <code>BatchUpdate</code> operation. 
  * AttributeUpdates **required** [ObjectAttributeUpdateList](#objectattributeupdatelist)
  * ObjectReference **required** [ObjectReference](#objectreference)

### BatchUpdateObjectAttributesResponse
* BatchUpdateObjectAttributesResponse `object`: Represents the output of a <code>BatchUpdate</code> response operation.
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### BatchWriteException
* BatchWriteException `object`: A <code>BatchWrite</code> exception has occurred.
  * Index [BatchOperationIndex](#batchoperationindex)
  * Message [ExceptionMessage](#exceptionmessage)
  * Type [BatchWriteExceptionType](#batchwriteexceptiontype)

### BatchWriteExceptionType
* BatchWriteExceptionType `string` (values: InternalServiceException, ValidationException, InvalidArnException, LinkNameAlreadyInUseException, StillContainsLinksException, FacetValidationException, ObjectNotDetachedException, ResourceNotFoundException, AccessDeniedException, InvalidAttachmentException, NotIndexException, IndexedAttributeMissingException, ObjectAlreadyDetachedException, NotPolicyException, DirectoryNotEnabledException, LimitExceededException, UnsupportedIndexTypeException)

### BatchWriteOperation
* BatchWriteOperation `object`: Represents the output of a <code>BatchWrite</code> operation. 
  * AddFacetToObject [BatchAddFacetToObject](#batchaddfacettoobject)
  * AttachObject [BatchAttachObject](#batchattachobject)
  * AttachPolicy [BatchAttachPolicy](#batchattachpolicy)
  * AttachToIndex [BatchAttachToIndex](#batchattachtoindex)
  * AttachTypedLink [BatchAttachTypedLink](#batchattachtypedlink)
  * CreateIndex [BatchCreateIndex](#batchcreateindex)
  * CreateObject [BatchCreateObject](#batchcreateobject)
  * DeleteObject [BatchDeleteObject](#batchdeleteobject)
  * DetachFromIndex [BatchDetachFromIndex](#batchdetachfromindex)
  * DetachObject [BatchDetachObject](#batchdetachobject)
  * DetachPolicy [BatchDetachPolicy](#batchdetachpolicy)
  * DetachTypedLink [BatchDetachTypedLink](#batchdetachtypedlink)
  * RemoveFacetFromObject [BatchRemoveFacetFromObject](#batchremovefacetfromobject)
  * UpdateObjectAttributes [BatchUpdateObjectAttributes](#batchupdateobjectattributes)

### BatchWriteOperationList
* BatchWriteOperationList `array`
  * items [BatchWriteOperation](#batchwriteoperation)

### BatchWriteOperationResponse
* BatchWriteOperationResponse `object`: Represents the output of a <code>BatchWrite</code> response operation.
  * AddFacetToObject [BatchAddFacetToObjectResponse](#batchaddfacettoobjectresponse)
  * AttachObject [BatchAttachObjectResponse](#batchattachobjectresponse)
  * AttachPolicy [BatchAttachPolicyResponse](#batchattachpolicyresponse)
  * AttachToIndex [BatchAttachToIndexResponse](#batchattachtoindexresponse)
  * AttachTypedLink [BatchAttachTypedLinkResponse](#batchattachtypedlinkresponse)
  * CreateIndex [BatchCreateIndexResponse](#batchcreateindexresponse)
  * CreateObject [BatchCreateObjectResponse](#batchcreateobjectresponse)
  * DeleteObject [BatchDeleteObjectResponse](#batchdeleteobjectresponse)
  * DetachFromIndex [BatchDetachFromIndexResponse](#batchdetachfromindexresponse)
  * DetachObject [BatchDetachObjectResponse](#batchdetachobjectresponse)
  * DetachPolicy [BatchDetachPolicyResponse](#batchdetachpolicyresponse)
  * DetachTypedLink [BatchDetachTypedLinkResponse](#batchdetachtypedlinkresponse)
  * RemoveFacetFromObject [BatchRemoveFacetFromObjectResponse](#batchremovefacetfromobjectresponse)
  * UpdateObjectAttributes [BatchUpdateObjectAttributesResponse](#batchupdateobjectattributesresponse)

### BatchWriteOperationResponseList
* BatchWriteOperationResponseList `array`
  * items [BatchWriteOperationResponse](#batchwriteoperationresponse)

### BatchWriteRequest
* BatchWriteRequest `object`
  * Operations **required** [BatchWriteOperationList](#batchwriteoperationlist)

### BatchWriteResponse
* BatchWriteResponse `object`
  * Responses [BatchWriteOperationResponseList](#batchwriteoperationresponselist)

### BinaryAttributeValue
* BinaryAttributeValue `string`

### Bool
* Bool `boolean`

### BooleanAttributeValue
* BooleanAttributeValue `boolean`

### CannotListParentOfRootException
* CannotListParentOfRootException `object`: Cannot list the parents of a <a>Directory</a> root.
  * Message [ExceptionMessage](#exceptionmessage)

### ConsistencyLevel
* ConsistencyLevel `string` (values: SERIALIZABLE, EVENTUAL)

### CreateDirectoryRequest
* CreateDirectoryRequest `object`
  * Name **required** [DirectoryName](#directoryname)

### CreateDirectoryResponse
* CreateDirectoryResponse `object`
  * AppliedSchemaArn **required** [Arn](#arn)
  * DirectoryArn **required** [DirectoryArn](#directoryarn)
  * Name **required** [DirectoryName](#directoryname)
  * ObjectIdentifier **required** [ObjectIdentifier](#objectidentifier)

### CreateFacetRequest
* CreateFacetRequest `object`
  * Attributes [FacetAttributeList](#facetattributelist)
  * Name **required** [FacetName](#facetname)
  * ObjectType **required** [ObjectType](#objecttype)

### CreateFacetResponse
* CreateFacetResponse `object`

### CreateIndexRequest
* CreateIndexRequest `object`
  * IsUnique **required** [Bool](#bool)
  * LinkName [LinkName](#linkname)
  * OrderedIndexedAttributeList **required** [AttributeKeyList](#attributekeylist)
  * ParentReference [ObjectReference](#objectreference)

### CreateIndexResponse
* CreateIndexResponse `object`
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### CreateObjectRequest
* CreateObjectRequest `object`
  * LinkName [LinkName](#linkname)
  * ObjectAttributeList [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ParentReference [ObjectReference](#objectreference)
  * SchemaFacets **required** [SchemaFacetList](#schemafacetlist)

### CreateObjectResponse
* CreateObjectResponse `object`
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### CreateSchemaRequest
* CreateSchemaRequest `object`
  * Name **required** [SchemaName](#schemaname)

### CreateSchemaResponse
* CreateSchemaResponse `object`
  * SchemaArn [Arn](#arn)

### CreateTypedLinkFacetRequest
* CreateTypedLinkFacetRequest `object`
  * Facet **required** [TypedLinkFacet](#typedlinkfacet)

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
  * DirectoryArn **required** [Arn](#arn)

### DeleteFacetRequest
* DeleteFacetRequest `object`
  * Name **required** [FacetName](#facetname)

### DeleteFacetResponse
* DeleteFacetResponse `object`

### DeleteObjectRequest
* DeleteObjectRequest `object`
  * ObjectReference **required** [ObjectReference](#objectreference)

### DeleteObjectResponse
* DeleteObjectResponse `object`

### DeleteSchemaRequest
* DeleteSchemaRequest `object`

### DeleteSchemaResponse
* DeleteSchemaResponse `object`
  * SchemaArn [Arn](#arn)

### DeleteTypedLinkFacetRequest
* DeleteTypedLinkFacetRequest `object`
  * Name **required** [TypedLinkName](#typedlinkname)

### DeleteTypedLinkFacetResponse
* DeleteTypedLinkFacetResponse `object`

### DetachFromIndexRequest
* DetachFromIndexRequest `object`
  * IndexReference **required** [ObjectReference](#objectreference)
  * TargetReference **required** [ObjectReference](#objectreference)

### DetachFromIndexResponse
* DetachFromIndexResponse `object`
  * DetachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### DetachObjectRequest
* DetachObjectRequest `object`
  * LinkName **required** [LinkName](#linkname)
  * ParentReference **required** [ObjectReference](#objectreference)

### DetachObjectResponse
* DetachObjectResponse `object`
  * DetachedObjectIdentifier [ObjectIdentifier](#objectidentifier)

### DetachPolicyRequest
* DetachPolicyRequest `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * PolicyReference **required** [ObjectReference](#objectreference)

### DetachPolicyResponse
* DetachPolicyResponse `object`

### DetachTypedLinkRequest
* DetachTypedLinkRequest `object`
  * TypedLinkSpecifier **required** [TypedLinkSpecifier](#typedlinkspecifier)

### Directory
* Directory `object`: Directory structure that includes the directory name and directory ARN.
  * CreationDateTime [Date](#date)
  * DirectoryArn [DirectoryArn](#directoryarn)
  * Name [DirectoryName](#directoryname)
  * State [DirectoryState](#directorystate)

### DirectoryAlreadyExistsException
* DirectoryAlreadyExistsException `object`: Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
  * Message [ExceptionMessage](#exceptionmessage)

### DirectoryArn
* DirectoryArn `string`

### DirectoryDeletedException
* DirectoryDeletedException `object`: A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
  * Message [ExceptionMessage](#exceptionmessage)

### DirectoryList
* DirectoryList `array`
  * items [Directory](#directory)

### DirectoryName
* DirectoryName `string`

### DirectoryNotDisabledException
* DirectoryNotDisabledException `object`: An operation can only operate on a disabled directory.
  * Message [ExceptionMessage](#exceptionmessage)

### DirectoryNotEnabledException
* DirectoryNotEnabledException `object`: An operation can only operate on a directory that is not enabled.
  * Message [ExceptionMessage](#exceptionmessage)

### DirectoryState
* DirectoryState `string` (values: ENABLED, DISABLED, DELETED)

### DisableDirectoryRequest
* DisableDirectoryRequest `object`

### DisableDirectoryResponse
* DisableDirectoryResponse `object`
  * DirectoryArn **required** [Arn](#arn)

### EnableDirectoryRequest
* EnableDirectoryRequest `object`

### EnableDirectoryResponse
* EnableDirectoryResponse `object`
  * DirectoryArn **required** [Arn](#arn)

### ExceptionMessage
* ExceptionMessage `string`

### Facet
* Facet `object`: A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <a>Rule</a>s, and <code>ObjectTypes</code>.
  * Name [FacetName](#facetname)
  * ObjectType [ObjectType](#objecttype)

### FacetAlreadyExistsException
* FacetAlreadyExistsException `object`: A facet with the same name already exists.
  * Message [ExceptionMessage](#exceptionmessage)

### FacetAttribute
* FacetAttribute `object`: An attribute that is associated with the <a>Facet</a>.
  * AttributeDefinition [FacetAttributeDefinition](#facetattributedefinition)
  * AttributeReference [FacetAttributeReference](#facetattributereference)
  * Name **required** [AttributeName](#attributename)
  * RequiredBehavior [RequiredAttributeBehavior](#requiredattributebehavior)

### FacetAttributeDefinition
* FacetAttributeDefinition `object`: A facet attribute definition. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences">Attribute References</a> for more information.
  * DefaultValue [TypedAttributeValue](#typedattributevalue)
  * IsImmutable [Bool](#bool)
  * Rules [RuleMap](#rulemap)
  * Type **required** [FacetAttributeType](#facetattributetype)

### FacetAttributeList
* FacetAttributeList `array`
  * items [FacetAttribute](#facetattribute)

### FacetAttributeReference
* FacetAttributeReference `object`: The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
  * TargetAttributeName **required** [AttributeName](#attributename)
  * TargetFacetName **required** [FacetName](#facetname)

### FacetAttributeType
* FacetAttributeType `string` (values: STRING, BINARY, BOOLEAN, NUMBER, DATETIME)

### FacetAttributeUpdate
* FacetAttributeUpdate `object`: A structure that contains information used to update an attribute.
  * Action [UpdateActionType](#updateactiontype)
  * Attribute [FacetAttribute](#facetattribute)

### FacetAttributeUpdateList
* FacetAttributeUpdateList `array`
  * items [FacetAttributeUpdate](#facetattributeupdate)

### FacetInUseException
* FacetInUseException `object`: Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
  * Message [ExceptionMessage](#exceptionmessage)

### FacetName
* FacetName `string`

### FacetNameList
* FacetNameList `array`
  * items [FacetName](#facetname)

### FacetNotFoundException
* FacetNotFoundException `object`: The specified <a>Facet</a> could not be found.
  * Message [ExceptionMessage](#exceptionmessage)

### FacetValidationException
* FacetValidationException `object`: The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.
  * Message [ExceptionMessage](#exceptionmessage)

### GetDirectoryRequest
* GetDirectoryRequest `object`

### GetDirectoryResponse
* GetDirectoryResponse `object`
  * Directory **required** [Directory](#directory)

### GetFacetRequest
* GetFacetRequest `object`
  * Name **required** [FacetName](#facetname)

### GetFacetResponse
* GetFacetResponse `object`
  * Facet [Facet](#facet)

### GetObjectInformationRequest
* GetObjectInformationRequest `object`
  * ObjectReference **required** [ObjectReference](#objectreference)

### GetObjectInformationResponse
* GetObjectInformationResponse `object`
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)
  * SchemaFacets [SchemaFacetList](#schemafacetlist)

### GetSchemaAsJsonRequest
* GetSchemaAsJsonRequest `object`

### GetSchemaAsJsonResponse
* GetSchemaAsJsonResponse `object`
  * Document [SchemaJsonDocument](#schemajsondocument)
  * Name [SchemaName](#schemaname)

### GetTypedLinkFacetInformationRequest
* GetTypedLinkFacetInformationRequest `object`
  * Name **required** [TypedLinkName](#typedlinkname)

### GetTypedLinkFacetInformationResponse
* GetTypedLinkFacetInformationResponse `object`
  * IdentityAttributeOrder [AttributeNameList](#attributenamelist)

### IndexAttachment
* IndexAttachment `object`: Represents an index and an attached object.
  * IndexedAttributes [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### IndexAttachmentList
* IndexAttachmentList `array`
  * items [IndexAttachment](#indexattachment)

### IndexedAttributeMissingException
* IndexedAttributeMissingException `object`: An object has been attempted to be attached to an object that does not have the appropriate attribute value.
  * Message [ExceptionMessage](#exceptionmessage)

### InternalServiceException
* InternalServiceException `object`: Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidArnException
* InvalidArnException `object`: Indicates that the provided ARN value is not valid.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidAttachmentException
* InvalidAttachmentException `object`: Indicates that an attempt to attach an object with the same link name or to apply a schema with the same name has occurred. Rename the link or the schema and then try again.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidFacetUpdateException
* InvalidFacetUpdateException `object`: An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: Indicates that the <code>NextToken</code> value is not valid.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidRuleException
* InvalidRuleException `object`: Occurs when any of the rule parameter keys or values are invalid.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidSchemaDocException
* InvalidSchemaDocException `object`: Indicates that the provided <code>SchemaDoc</code> value is not valid.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidTaggingRequestException
* InvalidTaggingRequestException `object`: Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.
  * Message [ExceptionMessage](#exceptionmessage)

### LimitExceededException
* LimitExceededException `object`: Indicates that limits are exceeded. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/limits.html">Limits</a> for more information.
  * Message [ExceptionMessage](#exceptionmessage)

### LinkName
* LinkName `string`

### LinkNameAlreadyInUseException
* LinkNameAlreadyInUseException `object`: Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
  * Message [ExceptionMessage](#exceptionmessage)

### LinkNameToObjectIdentifierMap
* LinkNameToObjectIdentifierMap `array`
  * items `object`
    * key [LinkName](#linkname)
    * value [ObjectIdentifier](#objectidentifier)

### ListAppliedSchemaArnsRequest
* ListAppliedSchemaArnsRequest `object`
  * DirectoryArn **required** [Arn](#arn)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

### ListAppliedSchemaArnsResponse
* ListAppliedSchemaArnsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * SchemaArns [Arns](#arns)

### ListAttachedIndicesRequest
* ListAttachedIndicesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * TargetReference **required** [ObjectReference](#objectreference)

### ListAttachedIndicesResponse
* ListAttachedIndicesResponse `object`
  * IndexAttachments [IndexAttachmentList](#indexattachmentlist)
  * NextToken [NextToken](#nexttoken)

### ListDevelopmentSchemaArnsRequest
* ListDevelopmentSchemaArnsRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

### ListDevelopmentSchemaArnsResponse
* ListDevelopmentSchemaArnsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * SchemaArns [Arns](#arns)

### ListDirectoriesRequest
* ListDirectoriesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * state [DirectoryState](#directorystate)

### ListDirectoriesResponse
* ListDirectoriesResponse `object`
  * Directories **required** [DirectoryList](#directorylist)
  * NextToken [NextToken](#nexttoken)

### ListFacetAttributesRequest
* ListFacetAttributesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * Name **required** [FacetName](#facetname)
  * NextToken [NextToken](#nexttoken)

### ListFacetAttributesResponse
* ListFacetAttributesResponse `object`
  * Attributes [FacetAttributeList](#facetattributelist)
  * NextToken [NextToken](#nexttoken)

### ListFacetNamesRequest
* ListFacetNamesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

### ListFacetNamesResponse
* ListFacetNamesResponse `object`
  * FacetNames [FacetNameList](#facetnamelist)
  * NextToken [NextToken](#nexttoken)

### ListIncomingTypedLinksRequest
* ListIncomingTypedLinksRequest `object`
  * ConsistencyLevel [ConsistencyLevel](#consistencylevel)
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListIncomingTypedLinksResponse
* ListIncomingTypedLinksResponse `object`
  * LinkSpecifiers [TypedLinkSpecifierList](#typedlinkspecifierlist)
  * NextToken [NextToken](#nexttoken)

### ListIndexRequest
* ListIndexRequest `object`
  * IndexReference **required** [ObjectReference](#objectreference)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * RangesOnIndexedValues [ObjectAttributeRangeList](#objectattributerangelist)

### ListIndexResponse
* ListIndexResponse `object`
  * IndexAttachments [IndexAttachmentList](#indexattachmentlist)
  * NextToken [NextToken](#nexttoken)

### ListObjectAttributesRequest
* ListObjectAttributesRequest `object`
  * FacetFilter [SchemaFacet](#schemafacet)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListObjectAttributesResponse
* ListObjectAttributesResponse `object`
  * Attributes [AttributeKeyAndValueList](#attributekeyandvaluelist)
  * NextToken [NextToken](#nexttoken)

### ListObjectChildrenRequest
* ListObjectChildrenRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListObjectChildrenResponse
* ListObjectChildrenResponse `object`
  * Children [LinkNameToObjectIdentifierMap](#linknametoobjectidentifiermap)
  * NextToken [NextToken](#nexttoken)

### ListObjectParentPathsRequest
* ListObjectParentPathsRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListObjectParentPathsResponse
* ListObjectParentPathsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * PathToObjectIdentifiersList [PathToObjectIdentifiersList](#pathtoobjectidentifierslist)

### ListObjectParentsRequest
* ListObjectParentsRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListObjectParentsResponse
* ListObjectParentsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Parents [ObjectIdentifierToLinkNameMap](#objectidentifiertolinknamemap)

### ListObjectPoliciesRequest
* ListObjectPoliciesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListObjectPoliciesResponse
* ListObjectPoliciesResponse `object`
  * AttachedPolicyIds [ObjectIdentifierList](#objectidentifierlist)
  * NextToken [NextToken](#nexttoken)

### ListOutgoingTypedLinksRequest
* ListOutgoingTypedLinksRequest `object`
  * ConsistencyLevel [ConsistencyLevel](#consistencylevel)
  * FilterAttributeRanges [TypedLinkAttributeRangeList](#typedlinkattributerangelist)
  * FilterTypedLink [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### ListOutgoingTypedLinksResponse
* ListOutgoingTypedLinksResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TypedLinkSpecifiers [TypedLinkSpecifierList](#typedlinkspecifierlist)

### ListPolicyAttachmentsRequest
* ListPolicyAttachmentsRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * PolicyReference **required** [ObjectReference](#objectreference)

### ListPolicyAttachmentsResponse
* ListPolicyAttachmentsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * ObjectIdentifiers [ObjectIdentifierList](#objectidentifierlist)

### ListPublishedSchemaArnsRequest
* ListPublishedSchemaArnsRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

### ListPublishedSchemaArnsResponse
* ListPublishedSchemaArnsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * SchemaArns [Arns](#arns)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * MaxResults [TagsNumberResults](#tagsnumberresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [Arn](#arn)

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [TagList](#taglist)

### ListTypedLinkFacetAttributesRequest
* ListTypedLinkFacetAttributesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * Name **required** [TypedLinkName](#typedlinkname)
  * NextToken [NextToken](#nexttoken)

### ListTypedLinkFacetAttributesResponse
* ListTypedLinkFacetAttributesResponse `object`
  * Attributes [TypedLinkAttributeDefinitionList](#typedlinkattributedefinitionlist)
  * NextToken [NextToken](#nexttoken)

### ListTypedLinkFacetNamesRequest
* ListTypedLinkFacetNamesRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)

### ListTypedLinkFacetNamesResponse
* ListTypedLinkFacetNamesResponse `object`
  * FacetNames [TypedLinkNameList](#typedlinknamelist)
  * NextToken [NextToken](#nexttoken)

### LookupPolicyRequest
* LookupPolicyRequest `object`
  * MaxResults [NumberResults](#numberresults)
  * NextToken [NextToken](#nexttoken)
  * ObjectReference **required** [ObjectReference](#objectreference)

### LookupPolicyResponse
* LookupPolicyResponse `object`
  * NextToken [NextToken](#nexttoken)
  * PolicyToPathList [PolicyToPathList](#policytopathlist)

### NextToken
* NextToken `string`

### NotIndexException
* NotIndexException `object`: Indicates that the requested operation can only operate on index objects.
  * Message [ExceptionMessage](#exceptionmessage)

### NotNodeException
* NotNodeException `object`: Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
  * Message [ExceptionMessage](#exceptionmessage)

### NotPolicyException
* NotPolicyException `object`: Indicates that the requested operation can only operate on policy objects.
  * Message [ExceptionMessage](#exceptionmessage)

### NumberAttributeValue
* NumberAttributeValue `string`

### NumberResults
* NumberResults `integer`

### ObjectAlreadyDetachedException
* ObjectAlreadyDetachedException `object`: Indicates that the object is not attached to the index.
  * Message [ExceptionMessage](#exceptionmessage)

### ObjectAttributeAction
* ObjectAttributeAction `object`: The action to take on the object attribute.
  * ObjectAttributeActionType [UpdateActionType](#updateactiontype)
  * ObjectAttributeUpdateValue [TypedAttributeValue](#typedattributevalue)

### ObjectAttributeRange
* ObjectAttributeRange `object`: A range of attributes.
  * AttributeKey [AttributeKey](#attributekey)
  * Range [TypedAttributeValueRange](#typedattributevaluerange)

### ObjectAttributeRangeList
* ObjectAttributeRangeList `array`
  * items [ObjectAttributeRange](#objectattributerange)

### ObjectAttributeUpdate
* ObjectAttributeUpdate `object`: Structure that contains attribute update information.
  * ObjectAttributeAction [ObjectAttributeAction](#objectattributeaction)
  * ObjectAttributeKey [AttributeKey](#attributekey)

### ObjectAttributeUpdateList
* ObjectAttributeUpdateList `array`
  * items [ObjectAttributeUpdate](#objectattributeupdate)

### ObjectIdentifier
* ObjectIdentifier `string`

### ObjectIdentifierList
* ObjectIdentifierList `array`
  * items [ObjectIdentifier](#objectidentifier)

### ObjectIdentifierToLinkNameMap
* ObjectIdentifierToLinkNameMap `array`
  * items `object`
    * key [ObjectIdentifier](#objectidentifier)
    * value [LinkName](#linkname)

### ObjectNotDetachedException
* ObjectNotDetachedException `object`: Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
  * Message [ExceptionMessage](#exceptionmessage)

### ObjectReference
* ObjectReference `object`: The reference that identifies an object.
  * Selector [SelectorObjectReference](#selectorobjectreference)

### ObjectType
* ObjectType `string` (values: NODE, LEAF_NODE, POLICY, INDEX)

### PathString
* PathString `string`

### PathToObjectIdentifiers
* PathToObjectIdentifiers `object`: Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
  * ObjectIdentifiers [ObjectIdentifierList](#objectidentifierlist)
  * Path [PathString](#pathstring)

### PathToObjectIdentifiersList
* PathToObjectIdentifiersList `array`
  * items [PathToObjectIdentifiers](#pathtoobjectidentifiers)

### PolicyAttachment
* PolicyAttachment `object`: Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)
  * PolicyId [ObjectIdentifier](#objectidentifier)
  * PolicyType [PolicyType](#policytype)

### PolicyAttachmentList
* PolicyAttachmentList `array`
  * items [PolicyAttachment](#policyattachment)

### PolicyToPath
* PolicyToPath `object`: Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
  * Path [PathString](#pathstring)
  * Policies [PolicyAttachmentList](#policyattachmentlist)

### PolicyToPathList
* PolicyToPathList `array`
  * items [PolicyToPath](#policytopath)

### PolicyType
* PolicyType `string`

### PublishSchemaRequest
* PublishSchemaRequest `object`
  * Name [SchemaName](#schemaname)
  * Version **required** [Version](#version)

### PublishSchemaResponse
* PublishSchemaResponse `object`
  * PublishedSchemaArn [Arn](#arn)

### PutSchemaFromJsonRequest
* PutSchemaFromJsonRequest `object`
  * Document **required** [SchemaJsonDocument](#schemajsondocument)

### PutSchemaFromJsonResponse
* PutSchemaFromJsonResponse `object`
  * Arn [Arn](#arn)

### RangeMode
* RangeMode `string` (values: FIRST, LAST, LAST_BEFORE_MISSING_VALUES, INCLUSIVE, EXCLUSIVE)

### RemoveFacetFromObjectRequest
* RemoveFacetFromObjectRequest `object`
  * ObjectReference **required** [ObjectReference](#objectreference)
  * SchemaFacet **required** [SchemaFacet](#schemafacet)

### RemoveFacetFromObjectResponse
* RemoveFacetFromObjectResponse `object`

### RequiredAttributeBehavior
* RequiredAttributeBehavior `string` (values: REQUIRED_ALWAYS, NOT_REQUIRED)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource could not be found.
  * Message [ExceptionMessage](#exceptionmessage)

### RetryableConflictException
* RetryableConflictException `object`: Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
  * Message [ExceptionMessage](#exceptionmessage)

### Rule
* Rule `object`: Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
  * Parameters [RuleParameterMap](#ruleparametermap)
  * Type [RuleType](#ruletype)

### RuleKey
* RuleKey `string`

### RuleMap
* RuleMap `array`
  * items `object`
    * key [RuleKey](#rulekey)
    * value [Rule](#rule)

### RuleParameterKey
* RuleParameterKey `string`

### RuleParameterMap
* RuleParameterMap `array`
  * items `object`
    * key [RuleParameterKey](#ruleparameterkey)
    * value [RuleParameterValue](#ruleparametervalue)

### RuleParameterValue
* RuleParameterValue `string`

### RuleType
* RuleType `string` (values: BINARY_LENGTH, NUMBER_COMPARISON, STRING_FROM_SET, STRING_LENGTH)

### SchemaAlreadyExistsException
* SchemaAlreadyExistsException `object`: Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.
  * Message [ExceptionMessage](#exceptionmessage)

### SchemaAlreadyPublishedException
* SchemaAlreadyPublishedException `object`: Indicates that a schema is already published.
  * Message [ExceptionMessage](#exceptionmessage)

### SchemaFacet
* SchemaFacet `object`: A facet.
  * FacetName [FacetName](#facetname)
  * SchemaArn [Arn](#arn)

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
* StillContainsLinksException `object`: The object could not be deleted because links still exist. Remove the links and then try the operation again.
  * Message [ExceptionMessage](#exceptionmessage)

### StringAttributeValue
* StringAttributeValue `string`

### Tag
* Tag `object`: The tag structure that contains a tag key and value.
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

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
  * ResourceArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagsNumberResults
* TagsNumberResults `integer`

### TypedAttributeValue
* TypedAttributeValue `object`: Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
  * BinaryValue [BinaryAttributeValue](#binaryattributevalue)
  * BooleanValue [BooleanAttributeValue](#booleanattributevalue)
  * DatetimeValue [DatetimeAttributeValue](#datetimeattributevalue)
  * NumberValue [NumberAttributeValue](#numberattributevalue)
  * StringValue [StringAttributeValue](#stringattributevalue)

### TypedAttributeValueRange
* TypedAttributeValueRange `object`: A range of attribute values.
  * EndMode **required** [RangeMode](#rangemode)
  * EndValue [TypedAttributeValue](#typedattributevalue)
  * StartMode **required** [RangeMode](#rangemode)
  * StartValue [TypedAttributeValue](#typedattributevalue)

### TypedLinkAttributeDefinition
* TypedLinkAttributeDefinition `object`: A typed link attribute definition.
  * DefaultValue [TypedAttributeValue](#typedattributevalue)
  * IsImmutable [Bool](#bool)
  * Name **required** [AttributeName](#attributename)
  * RequiredBehavior **required** [RequiredAttributeBehavior](#requiredattributebehavior)
  * Rules [RuleMap](#rulemap)
  * Type **required** [FacetAttributeType](#facetattributetype)

### TypedLinkAttributeDefinitionList
* TypedLinkAttributeDefinitionList `array`
  * items [TypedLinkAttributeDefinition](#typedlinkattributedefinition)

### TypedLinkAttributeRange
* TypedLinkAttributeRange `object`: Identifies the range of attributes that are used by a specified filter.
  * AttributeName [AttributeName](#attributename)
  * Range **required** [TypedAttributeValueRange](#typedattributevaluerange)

### TypedLinkAttributeRangeList
* TypedLinkAttributeRangeList `array`
  * items [TypedLinkAttributeRange](#typedlinkattributerange)

### TypedLinkFacet
* TypedLinkFacet `object`: Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
  * Attributes **required** [TypedLinkAttributeDefinitionList](#typedlinkattributedefinitionlist)
  * IdentityAttributeOrder **required** [AttributeNameList](#attributenamelist)
  * Name **required** [TypedLinkName](#typedlinkname)

### TypedLinkFacetAttributeUpdate
* TypedLinkFacetAttributeUpdate `object`: A typed link facet attribute update.
  * Action **required** [UpdateActionType](#updateactiontype)
  * Attribute **required** [TypedLinkAttributeDefinition](#typedlinkattributedefinition)

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
  * SchemaArn **required** [Arn](#arn)
  * TypedLinkName **required** [TypedLinkName](#typedlinkname)

### TypedLinkSpecifier
* TypedLinkSpecifier `object`: Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
  * IdentityAttributeValues **required** [AttributeNameAndValueList](#attributenameandvaluelist)
  * SourceObjectReference **required** [ObjectReference](#objectreference)
  * TargetObjectReference **required** [ObjectReference](#objectreference)
  * TypedLinkFacet **required** [TypedLinkSchemaAndFacetName](#typedlinkschemaandfacetname)

### TypedLinkSpecifierList
* TypedLinkSpecifierList `array`
  * items [TypedLinkSpecifier](#typedlinkspecifier)

### UnsupportedIndexTypeException
* UnsupportedIndexTypeException `object`: Indicates that the requested index type is not supported.
  * Message [ExceptionMessage](#exceptionmessage)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateActionType
* UpdateActionType `string` (values: CREATE_OR_UPDATE, DELETE)

### UpdateFacetRequest
* UpdateFacetRequest `object`
  * AttributeUpdates [FacetAttributeUpdateList](#facetattributeupdatelist)
  * Name **required** [FacetName](#facetname)
  * ObjectType [ObjectType](#objecttype)

### UpdateFacetResponse
* UpdateFacetResponse `object`

### UpdateObjectAttributesRequest
* UpdateObjectAttributesRequest `object`
  * AttributeUpdates **required** [ObjectAttributeUpdateList](#objectattributeupdatelist)
  * ObjectReference **required** [ObjectReference](#objectreference)

### UpdateObjectAttributesResponse
* UpdateObjectAttributesResponse `object`
  * ObjectIdentifier [ObjectIdentifier](#objectidentifier)

### UpdateSchemaRequest
* UpdateSchemaRequest `object`
  * Name **required** [SchemaName](#schemaname)

### UpdateSchemaResponse
* UpdateSchemaResponse `object`
  * SchemaArn [Arn](#arn)

### UpdateTypedLinkFacetRequest
* UpdateTypedLinkFacetRequest `object`
  * AttributeUpdates **required** [TypedLinkFacetAttributeUpdateList](#typedlinkfacetattributeupdatelist)
  * IdentityAttributeOrder **required** [AttributeNameList](#attributenamelist)
  * Name **required** [TypedLinkName](#typedlinkname)

### UpdateTypedLinkFacetResponse
* UpdateTypedLinkFacetResponse `object`

### ValidationException
* ValidationException `object`: Indicates that your request is malformed in some manner. See the exception message.
  * Message [ExceptionMessage](#exceptionmessage)

### Version
* Version `string`


