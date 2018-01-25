# @datafire/amazonaws_health

Client library for AWS Health APIs and Notifications

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_health
```
```js
let amazonaws_health = require('@datafire/amazonaws_health').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_health.DescribeAffectedEntities({
  "filter": {
    "eventArns": []
  }
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Health</fullname> <p>The AWS Health API provides programmatic access to the AWS Health information that is presented in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS resources:</p> <ul> <li> <p> <a>DescribeEvents</a>: Summary information about events.</p> </li> <li> <p> <a>DescribeEventDetails</a>: Detailed information about one or more events.</p> </li> <li> <p> <a>DescribeAffectedEntities</a>: Information about AWS resources that are affected by one or more events.</p> </li> </ul> <p>In addition, these operations provide information about event types and summary counts of events or affected entities:</p> <ul> <li> <p> <a>DescribeEventTypes</a>: Information about the kinds of events that AWS Health tracks.</p> </li> <li> <p> <a>DescribeEventAggregates</a>: A count of the number of events that meet specified criteria.</p> </li> <li> <p> <a>DescribeEntityAggregates</a>: A count of the number of affected entities that meet specified criteria.</p> </li> </ul> <p>The Health API requires a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>. Calling the Health API from an account that does not have a Business or Enterprise support plan causes a <code>SubscriptionRequiredException</code>. </p> <p>For authentication of requests, AWS Health uses the <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>See the <a href="http://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html">AWS Health User Guide</a> for information about how to use the API.</p> <p> <b>Service Endpoint</b> </p> <p>The HTTP endpoint for the AWS Health API is:</p> <ul> <li> <p>https://health.us-east-1.amazonaws.com </p> </li> </ul>

## Actions

### DescribeAffectedEntities



```js
amazonaws_health.DescribeAffectedEntities({
  "filter": {
    "eventArns": []
  }
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter **required** [EntityFilter](#entityfilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

#### Output
* output [DescribeAffectedEntitiesResponse](#describeaffectedentitiesresponse)

### DescribeEntityAggregates



```js
amazonaws_health.DescribeEntityAggregates({}, context)
```

#### Input
* input `object`
  * eventArns [EventArnsList](#eventarnslist)

#### Output
* output [DescribeEntityAggregatesResponse](#describeentityaggregatesresponse)

### DescribeEventAggregates



```js
amazonaws_health.DescribeEventAggregates({
  "aggregateField": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * aggregateField **required** [eventAggregateField](#eventaggregatefield)
  * filter [EventFilter](#eventfilter)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

#### Output
* output [DescribeEventAggregatesResponse](#describeeventaggregatesresponse)

### DescribeEventDetails



```js
amazonaws_health.DescribeEventDetails({
  "eventArns": []
}, context)
```

#### Input
* input `object`
  * eventArns **required** [eventArnList](#eventarnlist)
  * locale [locale](#locale)

#### Output
* output [DescribeEventDetailsResponse](#describeeventdetailsresponse)

### DescribeEventTypes



```js
amazonaws_health.DescribeEventTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter [EventTypeFilter](#eventtypefilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

#### Output
* output [DescribeEventTypesResponse](#describeeventtypesresponse)

### DescribeEvents



```js
amazonaws_health.DescribeEvents({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter [EventFilter](#eventfilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)



## Definitions

### AffectedEntity
* AffectedEntity `object`: Information about an entity that is affected by a Health event.
  * awsAccountId [accountId](#accountid)
  * entityArn [entityArn](#entityarn)
  * entityValue [entityValue](#entityvalue)
  * eventArn [eventArn](#eventarn)
  * lastUpdatedTime [timestamp](#timestamp)
  * statusCode [entityStatusCode](#entitystatuscode)
  * tags [tagSet](#tagset)

### DateTimeRange
* DateTimeRange `object`: A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.
  * from [timestamp](#timestamp)
  * to [timestamp](#timestamp)

### DescribeAffectedEntitiesRequest
* DescribeAffectedEntitiesRequest `object`
  * filter **required** [EntityFilter](#entityfilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

### DescribeAffectedEntitiesResponse
* DescribeAffectedEntitiesResponse `object`
  * entities [EntityList](#entitylist)
  * nextToken [nextToken](#nexttoken)

### DescribeEntityAggregatesRequest
* DescribeEntityAggregatesRequest `object`
  * eventArns [EventArnsList](#eventarnslist)

### DescribeEntityAggregatesResponse
* DescribeEntityAggregatesResponse `object`
  * entityAggregates [EntityAggregateList](#entityaggregatelist)

### DescribeEventAggregatesRequest
* DescribeEventAggregatesRequest `object`
  * aggregateField **required** [eventAggregateField](#eventaggregatefield)
  * filter [EventFilter](#eventfilter)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

### DescribeEventAggregatesResponse
* DescribeEventAggregatesResponse `object`
  * eventAggregates [EventAggregateList](#eventaggregatelist)
  * nextToken [nextToken](#nexttoken)

### DescribeEventDetailsFailedSet
* DescribeEventDetailsFailedSet `array`
  * items [EventDetailsErrorItem](#eventdetailserroritem)

### DescribeEventDetailsRequest
* DescribeEventDetailsRequest `object`
  * eventArns **required** [eventArnList](#eventarnlist)
  * locale [locale](#locale)

### DescribeEventDetailsResponse
* DescribeEventDetailsResponse `object`
  * failedSet [DescribeEventDetailsFailedSet](#describeeventdetailsfailedset)
  * successfulSet [DescribeEventDetailsSuccessfulSet](#describeeventdetailssuccessfulset)

### DescribeEventDetailsSuccessfulSet
* DescribeEventDetailsSuccessfulSet `array`
  * items [EventDetails](#eventdetails)

### DescribeEventTypesRequest
* DescribeEventTypesRequest `object`
  * filter [EventTypeFilter](#eventtypefilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

### DescribeEventTypesResponse
* DescribeEventTypesResponse `object`
  * eventTypes [EventTypeList](#eventtypelist)
  * nextToken [nextToken](#nexttoken)

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * filter [EventFilter](#eventfilter)
  * locale [locale](#locale)
  * maxResults [maxResults](#maxresults)
  * nextToken [nextToken](#nexttoken)

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * events [EventList](#eventlist)
  * nextToken [nextToken](#nexttoken)

### EntityAggregate
* EntityAggregate `object`: The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation.
  * count [count](#count)
  * eventArn [eventArn](#eventarn)

### EntityAggregateList
* EntityAggregateList `array`
  * items [EntityAggregate](#entityaggregate)

### EntityFilter
* EntityFilter `object`: The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.
  * entityArns [entityArnList](#entityarnlist)
  * entityValues [entityValueList](#entityvaluelist)
  * eventArns **required** [eventArnList](#eventarnlist)
  * lastUpdatedTimes [dateTimeRangeList](#datetimerangelist)
  * statusCodes [entityStatusCodeList](#entitystatuscodelist)
  * tags [tagFilter](#tagfilter)

### EntityList
* EntityList `array`
  * items [AffectedEntity](#affectedentity)

### Event
* Event `object`: Summary information about an event, returned by the <a>DescribeEvents</a> operation. The <a>DescribeEventDetails</a> operation also returns this information, as well as the <a>EventDescription</a> and additional event metadata.
  * arn [eventArn](#eventarn)
  * availabilityZone [availabilityZone](#availabilityzone)
  * endTime [timestamp](#timestamp)
  * eventTypeCategory [eventTypeCategory](#eventtypecategory)
  * eventTypeCode [eventTypeCode](#eventtypecode)
  * lastUpdatedTime [timestamp](#timestamp)
  * region [region](#region)
  * service [service](#service)
  * startTime [timestamp](#timestamp)
  * statusCode [eventStatusCode](#eventstatuscode)

### EventAggregate
* EventAggregate `object`: The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation.
  * aggregateValue [aggregateValue](#aggregatevalue)
  * count [count](#count)

### EventAggregateList
* EventAggregateList `array`
  * items [EventAggregate](#eventaggregate)

### EventArnsList
* EventArnsList `array`
  * items [eventArn](#eventarn)

### EventDescription
* EventDescription `object`: The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation.
  * latestDescription [eventDescription](#eventdescription)

### EventDetails
* EventDetails `object`: Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation.
  * event [Event](#event)
  * eventDescription [EventDescription](#eventdescription)
  * eventMetadata [eventMetadata](#eventmetadata)

### EventDetailsErrorItem
* EventDetailsErrorItem `object`: Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event.
  * errorMessage [string](#string)
  * errorName [string](#string)
  * eventArn [eventArn](#eventarn)

### EventFilter
* EventFilter `object`: The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations.
  * availabilityZones [availabilityZones](#availabilityzones)
  * endTimes [dateTimeRangeList](#datetimerangelist)
  * entityArns [entityArnList](#entityarnlist)
  * entityValues [entityValueList](#entityvaluelist)
  * eventArns [eventArnList](#eventarnlist)
  * eventStatusCodes [eventStatusCodeList](#eventstatuscodelist)
  * eventTypeCategories [eventTypeCategoryList](#eventtypecategorylist)
  * eventTypeCodes [eventTypeList](#eventtypelist)
  * lastUpdatedTimes [dateTimeRangeList](#datetimerangelist)
  * regions [regionList](#regionlist)
  * services [serviceList](#servicelist)
  * startTimes [dateTimeRangeList](#datetimerangelist)
  * tags [tagFilter](#tagfilter)

### EventList
* EventList `array`
  * items [Event](#event)

### EventType
* EventType `object`: Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).
  * category [eventTypeCategory](#eventtypecategory)
  * code [eventTypeCode](#eventtypecode)
  * service [service](#service)

### EventTypeCategoryList
* EventTypeCategoryList `array`
  * items [eventTypeCategory](#eventtypecategory)

### EventTypeCodeList
* EventTypeCodeList `array`
  * items [eventTypeCode](#eventtypecode)

### EventTypeFilter
* EventTypeFilter `object`: The values to use to filter results from the <a>DescribeEventTypes</a> operation.
  * eventTypeCategories [EventTypeCategoryList](#eventtypecategorylist)
  * eventTypeCodes [EventTypeCodeList](#eventtypecodelist)
  * services [serviceList](#servicelist)

### EventTypeList
* EventTypeList `array`
  * items [EventType](#eventtype)

### InvalidPaginationToken
* InvalidPaginationToken `object`: The specified pagination token (<code>nextToken</code>) is not valid.
  * message [string](#string)

### UnsupportedLocale
* UnsupportedLocale `object`: The specified locale is not supported.
  * message [string](#string)

### accountId
* accountId `string`

### aggregateValue
* aggregateValue `string`

### availabilityZone
* availabilityZone `string`

### availabilityZones
* availabilityZones `array`
  * items [availabilityZone](#availabilityzone)

### count
* count `integer`

### dateTimeRangeList
* dateTimeRangeList `array`
  * items [DateTimeRange](#datetimerange)

### entityArn
* entityArn `string`

### entityArnList
* entityArnList `array`
  * items [entityArn](#entityarn)

### entityStatusCode
* entityStatusCode `string` (values: IMPAIRED, UNIMPAIRED, UNKNOWN)

### entityStatusCodeList
* entityStatusCodeList `array`
  * items [entityStatusCode](#entitystatuscode)

### entityValue
* entityValue `string`

### entityValueList
* entityValueList `array`
  * items [entityValue](#entityvalue)

### eventAggregateField
* eventAggregateField `string` (values: eventTypeCategory)

### eventArn
* eventArn `string`

### eventArnList
* eventArnList `array`
  * items [eventArn](#eventarn)

### eventDescription
* eventDescription `string`

### eventMetadata
* eventMetadata `array`
  * items `object`
    * key [metadataKey](#metadatakey)
    * value [metadataValue](#metadatavalue)

### eventStatusCode
* eventStatusCode `string` (values: open, closed, upcoming)

### eventStatusCodeList
* eventStatusCodeList `array`
  * items [eventStatusCode](#eventstatuscode)

### eventType
* eventType `string`

### eventTypeCategory
* eventTypeCategory `string` (values: issue, accountNotification, scheduledChange)

### eventTypeCategoryList
* eventTypeCategoryList `array`
  * items [eventTypeCategory](#eventtypecategory)

### eventTypeCode
* eventTypeCode `string`

### eventTypeList
* eventTypeList `array`
  * items [eventType](#eventtype)

### locale
* locale `string`

### maxResults
* maxResults `integer`

### metadataKey
* metadataKey `string`

### metadataValue
* metadataValue `string`

### nextToken
* nextToken `string`

### region
* region `string`

### regionList
* regionList `array`
  * items [region](#region)

### service
* service `string`

### serviceList
* serviceList `array`
  * items [service](#service)

### string
* string `string`

### tagFilter
* tagFilter `array`
  * items [tagSet](#tagset)

### tagKey
* tagKey `string`

### tagSet
* tagSet `array`
  * items `object`
    * key [tagKey](#tagkey)
    * value [tagValue](#tagvalue)

### tagValue
* tagValue `string`

### timestamp
* timestamp `string`


