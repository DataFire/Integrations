# @datafire/amazonaws_qldb

Client library for Amazon QLDB

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_qldb
```
```js
let amazonaws_qldb = require('@datafire/amazonaws_qldb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The control plane for Amazon QLDB

## Actions

### ListJournalS3Exports



```js
amazonaws_qldb.ListJournalS3Exports({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJournalS3ExportsResponse](#listjournals3exportsresponse)

### ListLedgers



```js
amazonaws_qldb.ListLedgers({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListLedgersResponse](#listledgersresponse)

### CreateLedger



```js
amazonaws_qldb.CreateLedger({
  "Name": "",
  "PermissionsMode": ""
}, context)
```

#### Input
* input `object`
  * DeletionProtection `boolean`: <p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB console disables deletion protection for you when you use it to delete a ledger.</p>
  * Name **required** `string`: <p>The name of the ledger that you want to create. The name must be unique among all of your ledgers in the current AWS Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
  * PermissionsMode **required** `string` (values: ALLOW_ALL): The permissions mode to assign to the ledger that you want to create.
  * Tags `object`: The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.

#### Output
* output [CreateLedgerResponse](#createledgerresponse)

### DeleteLedger



```js
amazonaws_qldb.DeleteLedger({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### DescribeLedger



```js
amazonaws_qldb.DescribeLedger({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeLedgerResponse](#describeledgerresponse)

### UpdateLedger



```js
amazonaws_qldb.UpdateLedger({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * DeletionProtection `boolean`: <p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB console disables deletion protection for you when you use it to delete a ledger.</p>

#### Output
* output [UpdateLedgerResponse](#updateledgerresponse)

### GetBlock



```js
amazonaws_qldb.GetBlock({
  "name": "",
  "BlockAddress": {}
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * BlockAddress **required** `object`: A structure that can contain a value in multiple encoding formats.
    * IonText
  * DigestTipAddress `object`: A structure that can contain a value in multiple encoding formats.
    * IonText

#### Output
* output [GetBlockResponse](#getblockresponse)

### GetDigest



```js
amazonaws_qldb.GetDigest({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [GetDigestResponse](#getdigestresponse)

### ListJournalKinesisStreamsForLedger



```js
amazonaws_qldb.ListJournalKinesisStreamsForLedger({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJournalKinesisStreamsForLedgerResponse](#listjournalkinesisstreamsforledgerresponse)

### StreamJournalToKinesis



```js
amazonaws_qldb.StreamJournalToKinesis({
  "name": "",
  "RoleArn": "",
  "InclusiveStartTime": "",
  "KinesisConfiguration": {},
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * ExclusiveEndTime `string`: <p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p>
  * InclusiveStartTime **required** `string`: <p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>
  * KinesisConfiguration **required** `object`: The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream.
    * AggregationEnabled
    * StreamArn
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.
  * StreamName **required** `string`: <p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
  * Tags `object`: The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.

#### Output
* output [StreamJournalToKinesisResponse](#streamjournaltokinesisresponse)

### CancelJournalKinesisStream



```js
amazonaws_qldb.CancelJournalKinesisStream({
  "name": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * streamId **required** `string`

#### Output
* output [CancelJournalKinesisStreamResponse](#canceljournalkinesisstreamresponse)

### DescribeJournalKinesisStream



```js
amazonaws_qldb.DescribeJournalKinesisStream({
  "name": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * streamId **required** `string`

#### Output
* output [DescribeJournalKinesisStreamResponse](#describejournalkinesisstreamresponse)

### ListJournalS3ExportsForLedger



```js
amazonaws_qldb.ListJournalS3ExportsForLedger({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJournalS3ExportsForLedgerResponse](#listjournals3exportsforledgerresponse)

### ExportJournalToS3



```js
amazonaws_qldb.ExportJournalToS3({
  "name": "",
  "InclusiveStartTime": "",
  "ExclusiveEndTime": "",
  "S3ExportConfiguration": {},
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * ExclusiveEndTime **required** `string`: <p>The exclusive end date and time for the range of journal contents that you want to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>
  * InclusiveStartTime **required** `string`: <p>The inclusive start date and time for the range of journal contents that you want to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>
  * RoleArn **required** `string`: <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS KMS) for server-side encryption of your exported data.</p> </li> </ul>
  * S3ExportConfiguration **required** `object`: The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.
    * Bucket
    * EncryptionConfiguration
      * KmsKeyArn
      * ObjectEncryptionType **required**
    * Prefix

#### Output
* output [ExportJournalToS3Response](#exportjournaltos3response)

### DescribeJournalS3Export



```js
amazonaws_qldb.DescribeJournalS3Export({
  "name": "",
  "exportId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * exportId **required** `string`

#### Output
* output [DescribeJournalS3ExportResponse](#describejournals3exportresponse)

### GetRevision



```js
amazonaws_qldb.GetRevision({
  "name": "",
  "BlockAddress": {},
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * BlockAddress **required** `object`: A structure that can contain a value in multiple encoding formats.
    * IonText
  * DigestTipAddress `object`: A structure that can contain a value in multiple encoding formats.
    * IonText
  * DocumentId **required** `string`: The unique ID of the document to be verified.

#### Output
* output [GetRevisionResponse](#getrevisionresponse)

### ListTagsForResource



```js
amazonaws_qldb.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_qldb.TagResource({
  "resourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `object`: The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_qldb.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Arn
* Arn `string`

### Boolean
* Boolean `boolean`

### CancelJournalKinesisStreamRequest
* CancelJournalKinesisStreamRequest `object`

### CancelJournalKinesisStreamResponse
* CancelJournalKinesisStreamResponse `object`
  * StreamId

### CreateLedgerRequest
* CreateLedgerRequest `object`
  * DeletionProtection
  * Name **required**
  * PermissionsMode **required**
  * Tags

### CreateLedgerResponse
* CreateLedgerResponse `object`
  * Arn
  * CreationDateTime
  * DeletionProtection
  * Name
  * State

### DeleteLedgerRequest
* DeleteLedgerRequest `object`

### DeletionProtection
* DeletionProtection `boolean`

### DescribeJournalKinesisStreamRequest
* DescribeJournalKinesisStreamRequest `object`

### DescribeJournalKinesisStreamResponse
* DescribeJournalKinesisStreamResponse `object`
  * Stream
    * Arn
    * CreationTime
    * ErrorCause
    * ExclusiveEndTime
    * InclusiveStartTime
    * KinesisConfiguration **required**
      * AggregationEnabled
      * StreamArn **required**
    * LedgerName **required**
    * RoleArn **required**
    * Status **required**
    * StreamId **required**
    * StreamName **required**

### DescribeJournalS3ExportRequest
* DescribeJournalS3ExportRequest `object`

### DescribeJournalS3ExportResponse
* DescribeJournalS3ExportResponse `object`
  * ExportDescription **required**
    * ExclusiveEndTime **required**
    * ExportCreationTime **required**
    * ExportId **required**
    * InclusiveStartTime **required**
    * LedgerName **required**
    * RoleArn **required**
    * S3ExportConfiguration **required** [S3ExportConfiguration](#s3exportconfiguration)
    * Status **required**

### DescribeLedgerRequest
* DescribeLedgerRequest `object`

### DescribeLedgerResponse
* DescribeLedgerResponse `object`
  * Arn
  * CreationDateTime
  * DeletionProtection
  * Name
  * State

### Digest
* Digest `string`

### ErrorCause
* ErrorCause `string` (values: KINESIS_STREAM_NOT_FOUND, IAM_PERMISSION_REVOKED)

### ExportJournalToS3Request
* ExportJournalToS3Request `object`
  * ExclusiveEndTime **required**
  * InclusiveStartTime **required**
  * RoleArn **required**
  * S3ExportConfiguration **required**
    * Bucket **required**
    * EncryptionConfiguration **required**
      * KmsKeyArn
      * ObjectEncryptionType **required**
    * Prefix **required**

### ExportJournalToS3Response
* ExportJournalToS3Response `object`
  * ExportId **required**

### ExportStatus
* ExportStatus `string` (values: IN_PROGRESS, COMPLETED, CANCELLED)

### GetBlockRequest
* GetBlockRequest `object`
  * BlockAddress **required**
    * IonText
  * DigestTipAddress
    * IonText

### GetBlockResponse
* GetBlockResponse `object`
  * Block **required**
    * IonText
  * Proof
    * IonText

### GetDigestRequest
* GetDigestRequest `object`

### GetDigestResponse
* GetDigestResponse `object`
  * Digest **required**
  * DigestTipAddress **required**
    * IonText

### GetRevisionRequest
* GetRevisionRequest `object`
  * BlockAddress **required**
    * IonText
  * DigestTipAddress
    * IonText
  * DocumentId **required**

### GetRevisionResponse
* GetRevisionResponse `object`
  * Proof
    * IonText
  * Revision **required**
    * IonText

### InvalidParameterException


### IonText
* IonText `string`

### JournalKinesisStreamDescription
* JournalKinesisStreamDescription `object`: The information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of your original stream creation request.
  * Arn
  * CreationTime
  * ErrorCause
  * ExclusiveEndTime
  * InclusiveStartTime
  * KinesisConfiguration **required**
    * AggregationEnabled
    * StreamArn **required**
  * LedgerName **required**
  * RoleArn **required**
  * Status **required**
  * StreamId **required**
  * StreamName **required**

### JournalKinesisStreamDescriptionList
* JournalKinesisStreamDescriptionList `array`
  * items [JournalKinesisStreamDescription](#journalkinesisstreamdescription)

### JournalS3ExportDescription
* JournalS3ExportDescription `object`: The information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters.
  * ExclusiveEndTime **required**
  * ExportCreationTime **required**
  * ExportId **required**
  * InclusiveStartTime **required**
  * LedgerName **required**
  * RoleArn **required**
  * S3ExportConfiguration **required** [S3ExportConfiguration](#s3exportconfiguration)
  * Status **required**

### JournalS3ExportList
* JournalS3ExportList `array`
  * items [JournalS3ExportDescription](#journals3exportdescription)

### KinesisConfiguration
* KinesisConfiguration `object`: The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream.
  * AggregationEnabled
  * StreamArn **required**

### LedgerList
* LedgerList `array`
  * items [LedgerSummary](#ledgersummary)

### LedgerName
* LedgerName `string`

### LedgerState
* LedgerState `string` (values: CREATING, ACTIVE, DELETING, DELETED)

### LedgerSummary
* LedgerSummary `object`: Information about a ledger, including its name, state, and when it was created.
  * CreationDateTime
  * Name
  * State

### LimitExceededException


### ListJournalKinesisStreamsForLedgerRequest
* ListJournalKinesisStreamsForLedgerRequest `object`

### ListJournalKinesisStreamsForLedgerResponse
* ListJournalKinesisStreamsForLedgerResponse `object`
  * NextToken
  * Streams
    * items [JournalKinesisStreamDescription](#journalkinesisstreamdescription)

### ListJournalS3ExportsForLedgerRequest
* ListJournalS3ExportsForLedgerRequest `object`

### ListJournalS3ExportsForLedgerResponse
* ListJournalS3ExportsForLedgerResponse `object`
  * JournalS3Exports
    * items [JournalS3ExportDescription](#journals3exportdescription)
  * NextToken

### ListJournalS3ExportsRequest
* ListJournalS3ExportsRequest `object`

### ListJournalS3ExportsResponse
* ListJournalS3ExportsResponse `object`
  * JournalS3Exports
    * items [JournalS3ExportDescription](#journals3exportdescription)
  * NextToken

### ListLedgersRequest
* ListLedgersRequest `object`

### ListLedgersResponse
* ListLedgersResponse `object`
  * Ledgers
    * items [LedgerSummary](#ledgersummary)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### PermissionsMode
* PermissionsMode `string` (values: ALLOW_ALL)

### ResourceAlreadyExistsException


### ResourceInUseException


### ResourceNotFoundException


### ResourcePreconditionNotMetException


### S3Bucket
* S3Bucket `string`

### S3EncryptionConfiguration
* S3EncryptionConfiguration `object`: The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket.
  * KmsKeyArn
  * ObjectEncryptionType **required**

### S3ExportConfiguration
* S3ExportConfiguration `object`: The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.
  * Bucket **required**
  * EncryptionConfiguration **required**
    * KmsKeyArn
    * ObjectEncryptionType **required**
  * Prefix **required**

### S3ObjectEncryptionType
* S3ObjectEncryptionType `string` (values: SSE_KMS, SSE_S3, NO_ENCRYPTION)

### S3Prefix
* S3Prefix `string`

### StreamJournalToKinesisRequest
* StreamJournalToKinesisRequest `object`
  * ExclusiveEndTime
  * InclusiveStartTime **required**
  * KinesisConfiguration **required**
    * AggregationEnabled
    * StreamArn **required**
  * RoleArn **required**
  * StreamName **required**
  * Tags

### StreamJournalToKinesisResponse
* StreamJournalToKinesisResponse `object`
  * StreamId

### StreamName
* StreamName `string`

### StreamStatus
* StreamStatus `string` (values: ACTIVE, COMPLETED, CANCELED, FAILED, IMPAIRED)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### Timestamp
* Timestamp `string`

### UniqueId
* UniqueId `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateLedgerRequest
* UpdateLedgerRequest `object`
  * DeletionProtection

### UpdateLedgerResponse
* UpdateLedgerResponse `object`
  * Arn
  * CreationDateTime
  * DeletionProtection
  * Name
  * State

### ValueHolder
* ValueHolder `object`: A structure that can contain a value in multiple encoding formats.
  * IonText


