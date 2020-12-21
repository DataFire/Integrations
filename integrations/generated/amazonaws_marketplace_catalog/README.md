# @datafire/amazonaws_marketplace_catalog

Client library for AWS Marketplace Catalog Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_marketplace_catalog
```
```js
let amazonaws_marketplace_catalog = require('@datafire/amazonaws_marketplace_catalog').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace. </p> <p>You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace.</p>

## Actions

### CancelChangeSet



```js
amazonaws_marketplace_catalog.CancelChangeSet({
  "catalog": "",
  "changeSetId": ""
}, context)
```

#### Input
* input `object`
  * catalog **required** `string`
  * changeSetId **required** `string`

#### Output
* output [CancelChangeSetResponse](#cancelchangesetresponse)

### DescribeChangeSet



```js
amazonaws_marketplace_catalog.DescribeChangeSet({
  "catalog": "",
  "changeSetId": ""
}, context)
```

#### Input
* input `object`
  * catalog **required** `string`
  * changeSetId **required** `string`

#### Output
* output [DescribeChangeSetResponse](#describechangesetresponse)

### DescribeEntity



```js
amazonaws_marketplace_catalog.DescribeEntity({
  "catalog": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * catalog **required** `string`
  * entityId **required** `string`

#### Output
* output [DescribeEntityResponse](#describeentityresponse)

### ListChangeSets



```js
amazonaws_marketplace_catalog.ListChangeSets({
  "Catalog": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Catalog **required** `string`: The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
  * FilterList `array`: An array of filter objects.
    * items [Filter](#filter)
  * MaxResults `integer`: The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
  * NextToken `string`: The token value retrieved from a previous call to access the next page of results.
  * Sort `object`: An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
    * SortBy
    * SortOrder

#### Output
* output [ListChangeSetsResponse](#listchangesetsresponse)

### ListEntities



```js
amazonaws_marketplace_catalog.ListEntities({
  "Catalog": "",
  "EntityType": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Catalog **required** `string`: The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
  * EntityType **required** `string`: The type of entities to retrieve.
  * FilterList `array`: An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.
    * items [Filter](#filter)
  * MaxResults `integer`: Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
  * NextToken `string`: The value of the next token, if it exists. Null if there are no more results.
  * Sort `object`: An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
    * SortBy
    * SortOrder

#### Output
* output [ListEntitiesResponse](#listentitiesresponse)

### StartChangeSet



```js
amazonaws_marketplace_catalog.StartChangeSet({
  "Catalog": "",
  "ChangeSet": []
}, context)
```

#### Input
* input `object`
  * Catalog **required** `string`: The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
  * ChangeSet **required** `array`: Array of <code>change</code> object.
    * items [Change](#change)
  * ChangeSetName `string`: Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets. 
  * ClientRequestToken `string`: A unique token to identify the request to ensure idempotency.

#### Output
* output [StartChangeSetResponse](#startchangesetresponse)



## Definitions

### ARN
* ARN `string`

### AccessDeniedException


### CancelChangeSetRequest
* CancelChangeSetRequest `object`

### CancelChangeSetResponse
* CancelChangeSetResponse `object`
  * ChangeSetArn
  * ChangeSetId

### Catalog
* Catalog `string`

### Change
* Change `object`: An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
  * ChangeType **required**
  * Details **required**
  * Entity **required**
    * Identifier
    * Type **required**

### ChangeSetDescription
* ChangeSetDescription `array`
  * items [ChangeSummary](#changesummary)

### ChangeSetName
* ChangeSetName `string`

### ChangeSetSummaryList
* ChangeSetSummaryList `array`
  * items [ChangeSetSummaryListItem](#changesetsummarylistitem)

### ChangeSetSummaryListItem
* ChangeSetSummaryListItem `object`: A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
  * ChangeSetArn
  * ChangeSetId
  * ChangeSetName
  * EndTime
  * EntityIdList
    * items [ResourceId](#resourceid)
  * FailureCode
  * StartTime
  * Status

### ChangeStatus
* ChangeStatus `string` (values: PREPARING, APPLYING, SUCCEEDED, CANCELLED, FAILED)

### ChangeSummary
* ChangeSummary `object`: This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
  * ChangeType
  * Details
  * Entity
    * Identifier
    * Type **required**
  * ErrorDetailList
    * items [ErrorDetail](#errordetail)

### ChangeType
* ChangeType `string`

### ClientRequestToken
* ClientRequestToken `string`

### DateTimeISO8601
* DateTimeISO8601 `string`

### DescribeChangeSetRequest
* DescribeChangeSetRequest `object`

### DescribeChangeSetResponse
* DescribeChangeSetResponse `object`
  * ChangeSet
    * items [ChangeSummary](#changesummary)
  * ChangeSetArn
  * ChangeSetId
  * ChangeSetName
  * EndTime
  * FailureCode
  * FailureDescription
  * StartTime
  * Status

### DescribeEntityRequest
* DescribeEntityRequest `object`

### DescribeEntityResponse
* DescribeEntityResponse `object`
  * Details
  * EntityArn
  * EntityIdentifier
  * EntityType
  * LastModifiedDate

### Entity
* Entity `object`: A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
  * Identifier
  * Type **required**

### EntitySummary
* EntitySummary `object`: This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
  * EntityArn
  * EntityId
  * EntityType
  * LastModifiedDate
  * Name
  * Visibility

### EntitySummaryList
* EntitySummaryList `array`
  * items [EntitySummary](#entitysummary)

### EntityType
* EntityType `string`

### ErrorDetail
* ErrorDetail `object`: Details about the error.
  * ErrorCode
  * ErrorMessage

### ErrorDetailList
* ErrorDetailList `array`
  * items [ErrorDetail](#errordetail)

### FailureCode
* FailureCode `string` (values: CLIENT_ERROR, SERVER_FAULT)

### Filter
* Filter `object`: A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions.
  * Name
  * ValueList
    * items [StringValue](#stringvalue)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterName
* FilterName `string`

### Identifier
* Identifier `string`

### InternalServiceException


### Json
* Json `string`

### ListChangeSetsRequest
* ListChangeSetsRequest `object`
  * Catalog **required**
  * FilterList
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * Sort
    * SortBy
    * SortOrder

### ListChangeSetsResponse
* ListChangeSetsResponse `object`
  * ChangeSetSummaryList
    * items [ChangeSetSummaryListItem](#changesetsummarylistitem)
  * NextToken

### ListEntitiesRequest
* ListEntitiesRequest `object`
  * Catalog **required**
  * EntityType **required**
  * FilterList
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * Sort
    * SortBy
    * SortOrder

### ListEntitiesResponse
* ListEntitiesResponse `object`
  * EntitySummaryList
    * items [EntitySummary](#entitysummary)
  * NextToken

### MaxResultInteger
* MaxResultInteger `integer`

### NextToken
* NextToken `string`

### RequestedChangeList
* RequestedChangeList `array`
  * items [Change](#change)

### ResourceId
* ResourceId `string`

### ResourceIdList
* ResourceIdList `array`
  * items [ResourceId](#resourceid)

### ResourceInUseException


### ResourceNotFoundException


### ResourceNotSupportedException


### ServiceQuotaExceededException


### Sort
* Sort `object`: An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
  * SortBy
  * SortOrder

### SortBy
* SortBy `string`

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### StartChangeSetRequest
* StartChangeSetRequest `object`
  * Catalog **required**
  * ChangeSet **required**
    * items [Change](#change)
  * ChangeSetName
  * ClientRequestToken

### StartChangeSetResponse
* StartChangeSetResponse `object`
  * ChangeSetArn
  * ChangeSetId

### StringValue
* StringValue `string`

### ThrottlingException


### ValidationException


### ValueList
* ValueList `array`
  * items [StringValue](#stringvalue)


