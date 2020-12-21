# @datafire/amazonaws_dataexchange

Client library for AWS Data Exchange

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_dataexchange
```
```js
let amazonaws_dataexchange = require('@datafire/amazonaws_dataexchange').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p><p>As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIS to download or copy your entitled data sets to Amazon S3 for use across a variety of AWS analytics and machine learning services.</p><p>As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the AWS Data Exchange User Guide.</p><p>A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set.  A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets.</p>

## Actions

### ListTagsForResource



```js
amazonaws_dataexchange.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_dataexchange.TagResource({
  "resource-arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags **required** `object`: A label that consists of a customer-defined key and an optional value.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_dataexchange.UntagResource({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### ListDataSets



```js
amazonaws_dataexchange.ListDataSets({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * origin `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDataSetsResponse](#listdatasetsresponse)

### CreateDataSet



```js
amazonaws_dataexchange.CreateDataSet({
  "AssetType": "",
  "Description": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AssetType **required** `string` (values: S3_SNAPSHOT): The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
  * Description **required** `string`: A description of a resource.
  * Name **required** `string`: The name of the model.
  * Tags `object`: A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.

#### Output
*Output schema unknown*

### DeleteDataSet



```js
amazonaws_dataexchange.DeleteDataSet({
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`

#### Output
*Output schema unknown*

### GetDataSet



```js
amazonaws_dataexchange.GetDataSet({
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`

#### Output
* output [GetDataSetResponse](#getdatasetresponse)

### UpdateDataSet



```js
amazonaws_dataexchange.UpdateDataSet({
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * Description `string`: A description of a resource.
  * Name `string`: The name of the model.

#### Output
* output [UpdateDataSetResponse](#updatedatasetresponse)

### ListDataSetRevisions



```js
amazonaws_dataexchange.ListDataSetRevisions({
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDataSetRevisionsResponse](#listdatasetrevisionsresponse)

### CreateRevision



```js
amazonaws_dataexchange.CreateRevision({
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * Comment `string`: An optional comment about the revision.
  * Tags `object`: A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.

#### Output
*Output schema unknown*

### DeleteRevision



```js
amazonaws_dataexchange.DeleteRevision({
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * RevisionId **required** `string`

#### Output
*Output schema unknown*

### GetRevision



```js
amazonaws_dataexchange.GetRevision({
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * RevisionId **required** `string`

#### Output
* output [GetRevisionResponse](#getrevisionresponse)

### UpdateRevision



```js
amazonaws_dataexchange.UpdateRevision({
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * RevisionId **required** `string`
  * Comment `string`: An optional comment about the revision.
  * Finalized `boolean`: Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.

#### Output
* output [UpdateRevisionResponse](#updaterevisionresponse)

### ListRevisionAssets



```js
amazonaws_dataexchange.ListRevisionAssets({
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * RevisionId **required** `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRevisionAssetsResponse](#listrevisionassetsresponse)

### DeleteAsset



```js
amazonaws_dataexchange.DeleteAsset({
  "AssetId": "",
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * AssetId **required** `string`
  * DataSetId **required** `string`
  * RevisionId **required** `string`

#### Output
*Output schema unknown*

### GetAsset



```js
amazonaws_dataexchange.GetAsset({
  "AssetId": "",
  "DataSetId": "",
  "RevisionId": ""
}, context)
```

#### Input
* input `object`
  * AssetId **required** `string`
  * DataSetId **required** `string`
  * RevisionId **required** `string`

#### Output
* output [GetAssetResponse](#getassetresponse)

### UpdateAsset



```js
amazonaws_dataexchange.UpdateAsset({
  "AssetId": "",
  "DataSetId": "",
  "RevisionId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AssetId **required** `string`
  * DataSetId **required** `string`
  * RevisionId **required** `string`
  * Name **required** `string`: The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.

#### Output
* output [UpdateAssetResponse](#updateassetresponse)

### ListJobs



```js
amazonaws_dataexchange.ListJobs({}, context)
```

#### Input
* input `object`
  * dataSetId `string`
  * maxResults `integer`
  * nextToken `string`
  * revisionId `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobsResponse](#listjobsresponse)

### CreateJob



```js
amazonaws_dataexchange.CreateJob({
  "Details": {},
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Details **required** `object`: The details for the request.
    * ExportAssetToSignedUrl
      * AssetId **required**
      * DataSetId **required**
      * RevisionId **required**
    * ExportAssetsToS3
      * AssetDestinations **required**
        * items [AssetDestinationEntry](#assetdestinationentry)
      * DataSetId **required**
      * Encryption
        * KmsKeyArn
        * Type **required**
      * RevisionId **required**
    * ImportAssetFromSignedUrl
      * AssetName **required**
      * DataSetId **required**
      * Md5Hash **required**
      * RevisionId **required**
    * ImportAssetsFromS3
      * AssetSources **required**
        * items [AssetSourceEntry](#assetsourceentry)
      * DataSetId **required**
      * RevisionId **required**
  * Type **required** `string` (values: IMPORT_ASSETS_FROM_S3, IMPORT_ASSET_FROM_SIGNED_URL, EXPORT_ASSETS_TO_S3, EXPORT_ASSET_TO_SIGNED_URL): The type of job to be created.

#### Output
*Output schema unknown*

### CancelJob



```js
amazonaws_dataexchange.CancelJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`

#### Output
*Output schema unknown*

### GetJob



```js
amazonaws_dataexchange.GetJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`

#### Output
* output [GetJobResponse](#getjobresponse)

### StartJob



```js
amazonaws_dataexchange.StartJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedException


### Arn
* Arn `string`: An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.

### AssetDestinationEntry
* AssetDestinationEntry `object`: The destination for the asset.
  * AssetId **required**
  * Bucket **required**
  * Key

### AssetDetails
* AssetDetails `object`
  * S3SnapshotAsset [S3SnapshotAsset](#s3snapshotasset)

### AssetEntry
* AssetEntry `object`: An asset in AWS Data Exchange is a piece of data that can be stored as an S3 object. The asset can be a structured data file, an image file, or some other data file. When you create an import job for your files, you create an asset in AWS Data Exchange for each of those files.
  * Arn **required**
  * AssetDetails **required**
    * S3SnapshotAsset [S3SnapshotAsset](#s3snapshotasset)
  * AssetType **required**
  * CreatedAt **required**
  * DataSetId **required**
  * Id **required**
  * Name **required**
  * RevisionId **required**
  * SourceId
  * UpdatedAt **required**

### AssetName
* AssetName `string`: The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.

### AssetSourceEntry
* AssetSourceEntry `object`: The source of the assets.
  * Bucket **required**
  * Key **required**

### AssetType
* AssetType `string` (values: S3_SNAPSHOT): The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.

### CancelJobRequest
* CancelJobRequest `object`

### Code
* Code `string` (values: ACCESS_DENIED_EXCEPTION, INTERNAL_SERVER_EXCEPTION, MALWARE_DETECTED, RESOURCE_NOT_FOUND_EXCEPTION, SERVICE_QUOTA_EXCEEDED_EXCEPTION, VALIDATION_EXCEPTION, MALWARE_SCAN_ENCRYPTED_FILE)

### ConflictException


### CreateDataSetRequest
* CreateDataSetRequest `object`: The request body for CreateDataSet.
  * AssetType **required**
  * Description **required**
  * Name **required**
  * Tags

### CreateDataSetResponse
* CreateDataSetResponse `object`
  * Arn
  * AssetType
  * CreatedAt
  * Description
  * Id
  * Name
  * Origin
  * OriginDetails
    * ProductId **required** [__string](#__string)
  * SourceId
  * Tags
  * UpdatedAt

### CreateJobRequest
* CreateJobRequest `object`: The request body for CreateJob.
  * Details **required**
    * ExportAssetToSignedUrl
      * AssetId **required**
      * DataSetId **required**
      * RevisionId **required**
    * ExportAssetsToS3
      * AssetDestinations **required**
        * items [AssetDestinationEntry](#assetdestinationentry)
      * DataSetId **required**
      * Encryption
        * KmsKeyArn
        * Type **required**
      * RevisionId **required**
    * ImportAssetFromSignedUrl
      * AssetName **required**
      * DataSetId **required**
      * Md5Hash **required**
      * RevisionId **required**
    * ImportAssetsFromS3
      * AssetSources **required**
        * items [AssetSourceEntry](#assetsourceentry)
      * DataSetId **required**
      * RevisionId **required**
  * Type **required**

### CreateJobResponse
* CreateJobResponse `object`
  * Arn
  * CreatedAt
  * Details
    * ExportAssetToSignedUrl
      * AssetId **required**
      * DataSetId **required**
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ExportAssetsToS3
      * AssetDestinations **required**
        * items [AssetDestinationEntry](#assetdestinationentry)
      * DataSetId **required**
      * Encryption
        * KmsKeyArn
        * Type **required**
      * RevisionId **required**
    * ImportAssetFromSignedUrl
      * AssetName **required**
      * DataSetId **required**
      * Md5Hash
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ImportAssetsFromS3
      * AssetSources **required**
        * items [AssetSourceEntry](#assetsourceentry)
      * DataSetId **required**
      * RevisionId **required**
  * Errors
    * items [JobError](#joberror)
  * Id
  * State
  * Type
  * UpdatedAt

### CreateRevisionRequest
* CreateRevisionRequest `object`: The request body for CreateRevision.
  * Comment
  * Tags

### CreateRevisionResponse
* CreateRevisionResponse `object`
  * Arn
  * Comment
  * CreatedAt
  * DataSetId
  * Finalized
  * Id
  * SourceId
  * Tags
  * UpdatedAt

### DataSetEntry
* DataSetEntry `object`: A data set is an AWS resource with one or more revisions.
  * Arn **required**
  * AssetType **required**
  * CreatedAt **required**
  * Description **required**
  * Id **required**
  * Name **required**
  * Origin **required**
  * OriginDetails
    * ProductId **required** [__string](#__string)
  * SourceId
  * UpdatedAt **required**

### DeleteAssetRequest
* DeleteAssetRequest `object`

### DeleteDataSetRequest
* DeleteDataSetRequest `object`

### DeleteRevisionRequest
* DeleteRevisionRequest `object`

### Description
* Description `string`: A description of a resource.

### Details
* Details `object`
  * ImportAssetFromSignedUrlJobErrorDetails [ImportAssetFromSignedUrlJobErrorDetails](#importassetfromsignedurljoberrordetails)
  * ImportAssetsFromS3JobErrorDetails [ListOfAssetSourceEntry](#listofassetsourceentry)

### ExportAssetToSignedUrlRequestDetails
* ExportAssetToSignedUrlRequestDetails `object`: Details of the operation to be performed by the job.
  * AssetId **required**
  * DataSetId **required**
  * RevisionId **required**

### ExportAssetToSignedUrlResponseDetails
* ExportAssetToSignedUrlResponseDetails `object`: The details of the export to signed URL response.
  * AssetId **required**
  * DataSetId **required**
  * RevisionId **required**
  * SignedUrl
  * SignedUrlExpiresAt

### ExportAssetsToS3RequestDetails
* ExportAssetsToS3RequestDetails `object`: Details of the operation to be performed by the job.
  * AssetDestinations **required**
    * items [AssetDestinationEntry](#assetdestinationentry)
  * DataSetId **required**
  * Encryption
    * KmsKeyArn
    * Type **required**
  * RevisionId **required**

### ExportAssetsToS3ResponseDetails
* ExportAssetsToS3ResponseDetails `object`: Details about the export to Amazon S3 response.
  * AssetDestinations **required**
    * items [AssetDestinationEntry](#assetdestinationentry)
  * DataSetId **required**
  * Encryption
    * KmsKeyArn
    * Type **required**
  * RevisionId **required**

### ExportServerSideEncryption
* ExportServerSideEncryption `object`: Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.
  * KmsKeyArn
  * Type **required**

### GetAssetRequest
* GetAssetRequest `object`

### GetAssetResponse
* GetAssetResponse `object`
  * Arn
  * AssetDetails
    * S3SnapshotAsset [S3SnapshotAsset](#s3snapshotasset)
  * AssetType
  * CreatedAt
  * DataSetId
  * Id
  * Name
  * RevisionId
  * SourceId
  * UpdatedAt

### GetDataSetRequest
* GetDataSetRequest `object`

### GetDataSetResponse
* GetDataSetResponse `object`
  * Arn
  * AssetType
  * CreatedAt
  * Description
  * Id
  * Name
  * Origin
  * OriginDetails
    * ProductId **required** [__string](#__string)
  * SourceId
  * Tags
  * UpdatedAt

### GetJobRequest
* GetJobRequest `object`

### GetJobResponse
* GetJobResponse `object`
  * Arn
  * CreatedAt
  * Details
    * ExportAssetToSignedUrl
      * AssetId **required**
      * DataSetId **required**
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ExportAssetsToS3
      * AssetDestinations **required**
        * items [AssetDestinationEntry](#assetdestinationentry)
      * DataSetId **required**
      * Encryption
        * KmsKeyArn
        * Type **required**
      * RevisionId **required**
    * ImportAssetFromSignedUrl
      * AssetName **required**
      * DataSetId **required**
      * Md5Hash
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ImportAssetsFromS3
      * AssetSources **required**
        * items [AssetSourceEntry](#assetsourceentry)
      * DataSetId **required**
      * RevisionId **required**
  * Errors
    * items [JobError](#joberror)
  * Id
  * State
  * Type
  * UpdatedAt

### GetRevisionRequest
* GetRevisionRequest `object`

### GetRevisionResponse
* GetRevisionResponse `object`
  * Arn
  * Comment
  * CreatedAt
  * DataSetId
  * Finalized
  * Id
  * SourceId
  * Tags
  * UpdatedAt

### Id
* Id `string`: A unique identifier.

### ImportAssetFromSignedUrlJobErrorDetails
* ImportAssetFromSignedUrlJobErrorDetails `object`
  * AssetName **required** [AssetName](#assetname)

### ImportAssetFromSignedUrlRequestDetails
* ImportAssetFromSignedUrlRequestDetails `object`: Details of the operation to be performed by the job.
  * AssetName **required**
  * DataSetId **required**
  * Md5Hash **required**
  * RevisionId **required**

### ImportAssetFromSignedUrlResponseDetails
* ImportAssetFromSignedUrlResponseDetails `object`: The details in the response for an import request, including the signed URL and other information.
  * AssetName **required**
  * DataSetId **required**
  * Md5Hash
  * RevisionId **required**
  * SignedUrl
  * SignedUrlExpiresAt

### ImportAssetsFromS3RequestDetails
* ImportAssetsFromS3RequestDetails `object`: Details of the operation to be performed by the job.
  * AssetSources **required**
    * items [AssetSourceEntry](#assetsourceentry)
  * DataSetId **required**
  * RevisionId **required**

### ImportAssetsFromS3ResponseDetails
* ImportAssetsFromS3ResponseDetails `object`: Details from an import from Amazon S3 response.
  * AssetSources **required**
    * items [AssetSourceEntry](#assetsourceentry)
  * DataSetId **required**
  * RevisionId **required**

### InternalServerException


### JobEntry
* JobEntry `object`: AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.
  * Arn **required**
  * CreatedAt **required**
  * Details **required**
    * ExportAssetToSignedUrl
      * AssetId **required**
      * DataSetId **required**
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ExportAssetsToS3
      * AssetDestinations **required**
        * items [AssetDestinationEntry](#assetdestinationentry)
      * DataSetId **required**
      * Encryption
        * KmsKeyArn
        * Type **required**
      * RevisionId **required**
    * ImportAssetFromSignedUrl
      * AssetName **required**
      * DataSetId **required**
      * Md5Hash
      * RevisionId **required**
      * SignedUrl
      * SignedUrlExpiresAt
    * ImportAssetsFromS3
      * AssetSources **required**
        * items [AssetSourceEntry](#assetsourceentry)
      * DataSetId **required**
      * RevisionId **required**
  * Errors
    * items [JobError](#joberror)
  * Id **required**
  * State **required**
  * Type **required**
  * UpdatedAt **required**

### JobError
* JobError `object`: An error that occurred with the job request.
  * Code **required**
  * Details [Details](#details)
  * LimitName
  * LimitValue
  * Message **required**
  * ResourceId
  * ResourceType

### JobErrorLimitName
* JobErrorLimitName `string` (values: Assets per revision, Asset size in GB): The name of the limit that was reached.

### JobErrorResourceTypes
* JobErrorResourceTypes `string` (values: REVISION, ASSET): The types of resource which the job error can apply to.

### ListDataSetRevisionsRequest
* ListDataSetRevisionsRequest `object`

### ListDataSetRevisionsResponse
* ListDataSetRevisionsResponse `object`
  * NextToken
  * Revisions
    * items [RevisionEntry](#revisionentry)

### ListDataSetsRequest
* ListDataSetsRequest `object`

### ListDataSetsResponse
* ListDataSetsResponse `object`
  * DataSets
    * items [DataSetEntry](#datasetentry)
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * Jobs
    * items [JobEntry](#jobentry)
  * NextToken

### ListOfAssetDestinationEntry
* ListOfAssetDestinationEntry `array`: The destination where the assets will be exported.
  * items [AssetDestinationEntry](#assetdestinationentry)

### ListOfAssetEntry
* ListOfAssetEntry `array`
  * items [AssetEntry](#assetentry)

### ListOfAssetSourceEntry
* ListOfAssetSourceEntry `array`: The list of sources for the assets.
  * items [AssetSourceEntry](#assetsourceentry)

### ListOfDataSetEntry
* ListOfDataSetEntry `array`
  * items [DataSetEntry](#datasetentry)

### ListOfJobEntry
* ListOfJobEntry `array`
  * items [JobEntry](#jobentry)

### ListOfJobError
* ListOfJobError `array`
  * items [JobError](#joberror)

### ListOfRevisionEntry
* ListOfRevisionEntry `array`
  * items [RevisionEntry](#revisionentry)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### ListRevisionAssetsRequest
* ListRevisionAssetsRequest `object`

### ListRevisionAssetsResponse
* ListRevisionAssetsResponse `object`
  * Assets
    * items [AssetEntry](#assetentry)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### MapOf__string
* MapOf__string `object`

### MaxResults
* MaxResults `integer`

### Name
* Name `string`: The name of the model.

### NextToken
* NextToken `string`: The token value retrieved from a previous call to access the next page of results.

### Origin
* Origin `string` (values: OWNED, ENTITLED): A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set.

### OriginDetails
* OriginDetails `object`
  * ProductId **required** [__string](#__string)

### RequestDetails
* RequestDetails `object`: The details for the request.
  * ExportAssetToSignedUrl
    * AssetId **required**
    * DataSetId **required**
    * RevisionId **required**
  * ExportAssetsToS3
    * AssetDestinations **required**
      * items [AssetDestinationEntry](#assetdestinationentry)
    * DataSetId **required**
    * Encryption
      * KmsKeyArn
      * Type **required**
    * RevisionId **required**
  * ImportAssetFromSignedUrl
    * AssetName **required**
    * DataSetId **required**
    * Md5Hash **required**
    * RevisionId **required**
  * ImportAssetsFromS3
    * AssetSources **required**
      * items [AssetSourceEntry](#assetsourceentry)
    * DataSetId **required**
    * RevisionId **required**

### ResourceNotFoundException


### ResponseDetails
* ResponseDetails `object`: Details for the response.
  * ExportAssetToSignedUrl
    * AssetId **required**
    * DataSetId **required**
    * RevisionId **required**
    * SignedUrl
    * SignedUrlExpiresAt
  * ExportAssetsToS3
    * AssetDestinations **required**
      * items [AssetDestinationEntry](#assetdestinationentry)
    * DataSetId **required**
    * Encryption
      * KmsKeyArn
      * Type **required**
    * RevisionId **required**
  * ImportAssetFromSignedUrl
    * AssetName **required**
    * DataSetId **required**
    * Md5Hash
    * RevisionId **required**
    * SignedUrl
    * SignedUrlExpiresAt
  * ImportAssetsFromS3
    * AssetSources **required**
      * items [AssetSourceEntry](#assetsourceentry)
    * DataSetId **required**
    * RevisionId **required**

### RevisionEntry
* RevisionEntry `object`: A revision is a container for one or more assets.
  * Arn **required**
  * Comment
  * CreatedAt **required**
  * DataSetId **required**
  * Finalized
  * Id **required**
  * SourceId
  * UpdatedAt **required**

### S3SnapshotAsset
* S3SnapshotAsset `object`: The S3 object that is the asset.
  * Size **required**

### ServerSideEncryptionTypes
* ServerSideEncryptionTypes `string` (values: aws:kms, AES256): The types of encryption supported in export jobs to Amazon S3.

### ServiceLimitExceededException


### StartJobRequest
* StartJobRequest `object`

### StartJobResponse
* StartJobResponse `object`

### State
* State `string` (values: WAITING, IN_PROGRESS, ERROR, COMPLETED, CANCELLED, TIMED_OUT)

### TagResourceRequest
* TagResourceRequest `object`: The request body for TagResource.
  * Tags **required**

### ThrottlingException


### Timestamp
* Timestamp `string`: Dates and times in AWS Data Exchange are recorded in ISO 8601 format.

### Type
* Type `string` (values: IMPORT_ASSETS_FROM_S3, IMPORT_ASSET_FROM_SIGNED_URL, EXPORT_ASSETS_TO_S3, EXPORT_ASSET_TO_SIGNED_URL)

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateAssetRequest
* UpdateAssetRequest `object`: The request body for UpdateAsset.
  * Name **required**

### UpdateAssetResponse
* UpdateAssetResponse `object`
  * Arn
  * AssetDetails
    * S3SnapshotAsset [S3SnapshotAsset](#s3snapshotasset)
  * AssetType
  * CreatedAt
  * DataSetId
  * Id
  * Name
  * RevisionId
  * SourceId
  * UpdatedAt

### UpdateDataSetRequest
* UpdateDataSetRequest `object`: The request body for UpdateDataSet.
  * Description
  * Name

### UpdateDataSetResponse
* UpdateDataSetResponse `object`
  * Arn
  * AssetType
  * CreatedAt
  * Description
  * Id
  * Name
  * Origin
  * OriginDetails
    * ProductId **required** [__string](#__string)
  * SourceId
  * UpdatedAt

### UpdateRevisionRequest
* UpdateRevisionRequest `object`: The request body for UpdateRevision.
  * Comment
  * Finalized

### UpdateRevisionResponse
* UpdateRevisionResponse `object`
  * Arn
  * Comment
  * CreatedAt
  * DataSetId
  * Finalized
  * Id
  * SourceId
  * UpdatedAt

### ValidationException


### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __doubleMin0
* __doubleMin0 `number`

### __string
* __string `string`

### __stringMin0Max16384
* __stringMin0Max16384 `string`

### __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093
* __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093 `string`


