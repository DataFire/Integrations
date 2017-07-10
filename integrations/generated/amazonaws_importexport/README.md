# @datafire/amazonaws_importexport
<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

## Operation: CancelJob
This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CancelJobInput"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CancelJobOutput"
}
```
## Operation: CreateJob
This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateJobInput"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateJobOutput"
}
```
## Operation: GetShippingLabel
This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetShippingLabelInput"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetShippingLabelOutput"
}
```
## Operation: GetStatus
This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetStatusInput"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetStatusOutput"
}
```
## Operation: ListJobs
This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListJobsInput"
    },
    "MaxJobs": {
      "type": "string",
      "description": "Pagination limit"
    },
    "Marker": {
      "type": "string",
      "description": "Pagination token"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListJobsOutput"
}
```
## Operation: UpdateJob
You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateJobInput"
    },
    "AWSAccessKeyId": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "SignatureMethod": {
      "type": "string"
    },
    "SignatureVersion": {
      "type": "string"
    },
    "Timestamp": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "AWSAccessKeyId",
    "Action",
    "SignatureMethod",
    "SignatureVersion",
    "Timestamp",
    "Version",
    "Signature"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateJobOutput"
}
```
