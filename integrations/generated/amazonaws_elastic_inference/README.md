# @datafire/amazonaws_elastic_inference

Client library for Amazon Elastic  Inference

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elastic_inference
```
```js
let amazonaws_elastic_inference = require('@datafire/amazonaws_elastic_inference').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 Elastic Inference public APIs. 

## Actions

### DescribeAcceleratorOfferings



```js
amazonaws_elastic_inference.DescribeAcceleratorOfferings({
  "locationType": ""
}, context)
```

#### Input
* input `object`
  * acceleratorTypes `array`:  The list of accelerator types to describe. 
    * items [AcceleratorTypeName](#acceleratortypename)
  * locationType **required** `string` (values: region, availability-zone, availability-zone-id):  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id. 

#### Output
* output [DescribeAcceleratorOfferingsResponse](#describeacceleratorofferingsresponse)

### DescribeAcceleratorTypes



```js
amazonaws_elastic_inference.DescribeAcceleratorTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAcceleratorTypesResponse](#describeacceleratortypesresponse)

### DescribeAccelerators



```js
amazonaws_elastic_inference.DescribeAccelerators({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * acceleratorIds `array`:  The IDs of the accelerators to describe. 
    * items [AcceleratorId](#acceleratorid)
  * filters `array`:  One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for. 
    * items [Filter](#filter)
  * maxResults `integer`:  The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI. 
  * nextToken `string`:  A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [DescribeAcceleratorsResponse](#describeacceleratorsresponse)

### ListTagsForResource



```js
amazonaws_elastic_inference.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### TagResource



```js
amazonaws_elastic_inference.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`:  The tags to add to the Elastic Inference Accelerator. 

#### Output
* output [TagResourceResult](#tagresourceresult)

### UntagResource



```js
amazonaws_elastic_inference.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResult](#untagresourceresult)



## Definitions

### AcceleratorHealthStatus
* AcceleratorHealthStatus `string`

### AcceleratorId
* AcceleratorId `string`

### AcceleratorIdList
* AcceleratorIdList `array`
  * items [AcceleratorId](#acceleratorid)

### AcceleratorType
* AcceleratorType `object`:  The details of an Elastic Inference Accelerator type. 
  * acceleratorTypeName
  * memoryInfo
    * sizeInMiB
  * throughputInfo
    * items [KeyValuePair](#keyvaluepair)

### AcceleratorTypeList
* AcceleratorTypeList `array`
  * items [AcceleratorType](#acceleratortype)

### AcceleratorTypeName
* AcceleratorTypeName `string`

### AcceleratorTypeNameList
* AcceleratorTypeNameList `array`
  * items [AcceleratorTypeName](#acceleratortypename)

### AcceleratorTypeOffering
* AcceleratorTypeOffering `object`:  The offering for an Elastic Inference Accelerator type. 
  * acceleratorType
  * location
  * locationType

### AcceleratorTypeOfferingList
* AcceleratorTypeOfferingList `array`
  * items [AcceleratorTypeOffering](#acceleratortypeoffering)

### AvailabilityZone
* AvailabilityZone `string`

### BadRequestException


### DescribeAcceleratorOfferingsRequest
* DescribeAcceleratorOfferingsRequest `object`
  * acceleratorTypes
    * items [AcceleratorTypeName](#acceleratortypename)
  * locationType **required**

### DescribeAcceleratorOfferingsResponse
* DescribeAcceleratorOfferingsResponse `object`
  * acceleratorTypeOfferings
    * items [AcceleratorTypeOffering](#acceleratortypeoffering)

### DescribeAcceleratorTypesRequest
* DescribeAcceleratorTypesRequest `object`

### DescribeAcceleratorTypesResponse
* DescribeAcceleratorTypesResponse `object`
  * acceleratorTypes
    * items [AcceleratorType](#acceleratortype)

### DescribeAcceleratorsRequest
* DescribeAcceleratorsRequest `object`
  * acceleratorIds
    * items [AcceleratorId](#acceleratorid)
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### DescribeAcceleratorsResponse
* DescribeAcceleratorsResponse `object`
  * acceleratorSet
    * items [ElasticInferenceAccelerator](#elasticinferenceaccelerator)
  * nextToken

### ElasticInferenceAccelerator
* ElasticInferenceAccelerator `object`:  The details of an Elastic Inference Accelerator. 
  * acceleratorHealth
    * status
  * acceleratorId
  * acceleratorType
  * attachedResource
  * availabilityZone

### ElasticInferenceAcceleratorHealth
* ElasticInferenceAcceleratorHealth `object`:  The health details of an Elastic Inference Accelerator. 
  * status

### ElasticInferenceAcceleratorSet
* ElasticInferenceAcceleratorSet `array`
  * items [ElasticInferenceAccelerator](#elasticinferenceaccelerator)

### Filter
* Filter `object`:  A filter expression for the Elastic Inference Accelerator list. 
  * name
  * values
    * items [String](#string)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterName
* FilterName `string`

### Integer
* Integer `integer`

### InternalServerException


### Key
* Key `string`

### KeyValuePair
* KeyValuePair `object`:  A throughput entry for an Elastic Inference Accelerator type. 
  * key
  * value

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * tags

### Location
* Location `string`

### LocationType
* LocationType `string` (values: region, availability-zone, availability-zone-id)

### MaxResults
* MaxResults `integer`

### MemoryInfo
* MemoryInfo `object`:  The memory information of an Elastic Inference Accelerator type. 
  * sizeInMiB

### NextToken
* NextToken `string`

### ResourceARN
* ResourceARN `string`

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResult
* TagResourceResult `object`

### TagValue
* TagValue `string`

### ThroughputInfoList
* ThroughputInfoList `array`
  * items [KeyValuePair](#keyvaluepair)

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResult
* UntagResourceResult `object`

### Value
* Value `integer`

### ValueStringList
* ValueStringList `array`
  * items [String](#string)


