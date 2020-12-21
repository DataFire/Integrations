# @datafire/amazonaws_healthlake

Client library for Amazon HealthLake

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_healthlake
```
```js
let amazonaws_healthlake = require('@datafire/amazonaws_healthlake').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their data in a consistent fashion in the cloud.

## Actions

### CreateFHIRDatastore



```js
amazonaws_healthlake.CreateFHIRDatastore({
  "DatastoreTypeVersion": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DatastoreName
  * DatastoreTypeVersion **required**
  * PreloadDataConfig
    * PreloadDataType **required**

#### Output
* output [CreateFHIRDatastoreResponse](#createfhirdatastoreresponse)

### DeleteFHIRDatastore



```js
amazonaws_healthlake.DeleteFHIRDatastore({}, context)
```

#### Input
* input `object`
  * DatastoreId

#### Output
* output [DeleteFHIRDatastoreResponse](#deletefhirdatastoreresponse)

### DescribeFHIRDatastore



```js
amazonaws_healthlake.DescribeFHIRDatastore({}, context)
```

#### Input
* input `object`
  * DatastoreId

#### Output
* output [DescribeFHIRDatastoreResponse](#describefhirdatastoreresponse)

### DescribeFHIRImportJob



```js
amazonaws_healthlake.DescribeFHIRImportJob({
  "DatastoreId": null,
  "JobId": null
}, context)
```

#### Input
* input `object`
  * DatastoreId **required**
  * JobId **required**

#### Output
* output [DescribeFHIRImportJobResponse](#describefhirimportjobresponse)

### ListFHIRDatastores



```js
amazonaws_healthlake.ListFHIRDatastores({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * DatastoreName
    * DatastoreStatus
  * MaxResults
  * NextToken

#### Output
* output [ListFHIRDatastoresResponse](#listfhirdatastoresresponse)

### StartFHIRImportJob



```js
amazonaws_healthlake.StartFHIRImportJob({
  "InputDataConfig": null,
  "DatastoreId": null,
  "DataAccessRoleArn": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * DataAccessRoleArn **required**
  * DatastoreId **required**
  * InputDataConfig **required**
    * S3Uri
  * JobName

#### Output
* output [StartFHIRImportJobResponse](#startfhirimportjobresponse)



## Definitions

### AccessDeniedException


### BoundedLengthString
* BoundedLengthString `string`

### ClientTokenString
* ClientTokenString `string`

### ConflictException


### CreateFHIRDatastoreRequest
* CreateFHIRDatastoreRequest `object`
  * ClientToken
  * DatastoreName
  * DatastoreTypeVersion **required**
  * PreloadDataConfig
    * PreloadDataType **required**

### CreateFHIRDatastoreResponse
* CreateFHIRDatastoreResponse `object`
  * DatastoreArn **required**
  * DatastoreEndpoint **required**
  * DatastoreId **required**
  * DatastoreStatus **required**

### DatastoreArn
* DatastoreArn `string`

### DatastoreFilter
* DatastoreFilter `object`: The filters applied to datastore query.
  * CreatedAfter
  * CreatedBefore
  * DatastoreName
  * DatastoreStatus

### DatastoreId
* DatastoreId `string`

### DatastoreName
* DatastoreName `string`

### DatastoreProperties
* DatastoreProperties `object`: Displays the properties of the datastore, including the ID, Arn, name, and the status of the datastore.
  * CreatedAt
  * DatastoreArn **required**
  * DatastoreEndpoint **required**
  * DatastoreId **required**
  * DatastoreName
  * DatastoreStatus **required**
  * DatastoreTypeVersion **required**
  * PreloadDataConfig
    * PreloadDataType **required**

### DatastorePropertiesList
* DatastorePropertiesList `array`
  * items [DatastoreProperties](#datastoreproperties)

### DatastoreStatus
* DatastoreStatus `string` (values: CREATING, ACTIVE, DELETING, DELETED)

### DeleteFHIRDatastoreRequest
* DeleteFHIRDatastoreRequest `object`
  * DatastoreId

### DeleteFHIRDatastoreResponse
* DeleteFHIRDatastoreResponse `object`
  * DatastoreArn **required**
  * DatastoreEndpoint **required**
  * DatastoreId **required**
  * DatastoreStatus **required**

### DescribeFHIRDatastoreRequest
* DescribeFHIRDatastoreRequest `object`
  * DatastoreId

### DescribeFHIRDatastoreResponse
* DescribeFHIRDatastoreResponse `object`
  * DatastoreProperties **required**
    * CreatedAt
    * DatastoreArn **required**
    * DatastoreEndpoint **required**
    * DatastoreId **required**
    * DatastoreName
    * DatastoreStatus **required**
    * DatastoreTypeVersion **required**
    * PreloadDataConfig
      * PreloadDataType **required**

### DescribeFHIRImportJobRequest
* DescribeFHIRImportJobRequest `object`
  * DatastoreId **required**
  * JobId **required**

### DescribeFHIRImportJobResponse
* DescribeFHIRImportJobResponse `object`
  * ImportJobProperties **required**
    * DataAccessRoleArn
    * DatastoreId **required**
    * EndTime
    * InputDataConfig **required**
      * S3Uri
    * JobId **required**
    * JobName
    * JobStatus **required**
    * Message
    * SubmitTime **required**

### FHIRVersion
* FHIRVersion `string` (values: R4)

### IamRoleArn
* IamRoleArn `string`

### ImportJobProperties
* ImportJobProperties `object`: Displays the properties of the import job, including the ID, Arn, Name, and the status of the datastore.
  * DataAccessRoleArn
  * DatastoreId **required**
  * EndTime
  * InputDataConfig **required**
    * S3Uri
  * JobId **required**
  * JobName
  * JobStatus **required**
  * Message
  * SubmitTime **required**

### InputDataConfig
* InputDataConfig `object`:  The input properties for an import job.
  * S3Uri

### InternalServerException


### JobId
* JobId `string`

### JobName
* JobName `string`

### JobStatus
* JobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, FAILED)

### ListFHIRDatastoresRequest
* ListFHIRDatastoresRequest `object`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * DatastoreName
    * DatastoreStatus
  * MaxResults
  * NextToken

### ListFHIRDatastoresResponse
* ListFHIRDatastoresResponse `object`
  * DatastorePropertiesList **required**
    * items [DatastoreProperties](#datastoreproperties)
  * NextToken

### MaxResultsInteger
* MaxResultsInteger `integer`

### Message
* Message `string`

### NextToken
* NextToken `string`

### PreloadDataConfig
* PreloadDataConfig `object`:  The input properties for the preloaded datastore. Only data preloaded from Synthea is supported.
  * PreloadDataType **required**

### PreloadDataType
* PreloadDataType `string` (values: SYNTHEA)

### ResourceNotFoundException


### S3Uri
* S3Uri `string`

### StartFHIRImportJobRequest
* StartFHIRImportJobRequest `object`
  * ClientToken **required**
  * DataAccessRoleArn **required**
  * DatastoreId **required**
  * InputDataConfig **required**
    * S3Uri
  * JobName

### StartFHIRImportJobResponse
* StartFHIRImportJobResponse `object`
  * DatastoreId
  * JobId **required**
  * JobStatus **required**

### String
* String `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### ValidationException



