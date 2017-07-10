# @datafire/amazonaws_pinpoint


## Operation: GetCampaigns
Returns information about your campaigns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetCampaignsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetCampaignsResponse"
}
```
## Operation: UpdateCampaign
Use to update a campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateCampaignRequest"
    },
    "application-id": {
      "type": "string"
    },
    "campaign-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "campaign-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateCampaignResponse"
}
```
## Operation: GetCampaignActivities
Returns information about the activity performed by a campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetCampaignActivitiesRequest"
    },
    "application-id": {
      "type": "string"
    },
    "campaign-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "campaign-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetCampaignActivitiesResponse"
}
```
## Operation: GetCampaignVersions
Returns information about your campaign versions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetCampaignVersionsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "campaign-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "campaign-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetCampaignVersionsResponse"
}
```
## Operation: GetCampaignVersion
Returns information about a specific version of a campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetCampaignVersionRequest"
    },
    "application-id": {
      "type": "string"
    },
    "campaign-id": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "campaign-id",
    "version",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetCampaignVersionResponse"
}
```
## Operation: UpdateApnsChannel
Use to update the APNs channel for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateApnsChannelRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateApnsChannelResponse"
}
```
## Operation: UpdateGcmChannel
Use to update the GCM channel for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateGcmChannelRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateGcmChannelResponse"
}
```
## Operation: UpdateEndpointsBatch
Use to update a batch of endpoints.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateEndpointsBatchRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateEndpointsBatchResponse"
}
```
## Operation: UpdateEndpoint
Use to update an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateEndpointRequest"
    },
    "application-id": {
      "type": "string"
    },
    "endpoint-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "endpoint-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateEndpointResponse"
}
```
## Operation: PutEventStream
Use to create or update the event stream for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutEventStreamRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PutEventStreamResponse"
}
```
## Operation: GetImportJobs
Returns information about your import jobs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetImportJobsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetImportJobsResponse"
}
```
## Operation: GetImportJob
Returns information about an import job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetImportJobRequest"
    },
    "application-id": {
      "type": "string"
    },
    "job-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "job-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetImportJobResponse"
}
```
## Operation: GetSegments
Used to get information about your segments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetSegmentsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetSegmentsResponse"
}
```
## Operation: UpdateSegment
Use to update a segment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateSegmentRequest"
    },
    "application-id": {
      "type": "string"
    },
    "segment-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "segment-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateSegmentResponse"
}
```
## Operation: GetSegmentImportJobs
Returns a list of import jobs for a specific segment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetSegmentImportJobsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "segment-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "segment-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetSegmentImportJobsResponse"
}
```
## Operation: GetSegmentVersions
Returns information about your segment versions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetSegmentVersionsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "segment-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "segment-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetSegmentVersionsResponse"
}
```
## Operation: GetSegmentVersion
Returns information about a segment version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetSegmentVersionRequest"
    },
    "application-id": {
      "type": "string"
    },
    "segment-id": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "segment-id",
    "version",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetSegmentVersionResponse"
}
```
## Operation: UpdateApplicationSettings
Used to update the settings for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateApplicationSettingsRequest"
    },
    "application-id": {
      "type": "string"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "application-id",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateApplicationSettingsResponse"
}
```
