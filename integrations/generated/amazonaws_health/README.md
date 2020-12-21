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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Health</fullname> <p>The AWS Health API provides programmatic access to the AWS Health information that appears in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can use the API operations to get information about AWS Health events that affect your AWS services and resources.</p> <note> <p>You must have a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the AWS Health API. If you call the AWS Health API from an AWS account that doesn't have a Business or Enterprise support plan, you receive a <code>SubscriptionRequiredException</code> error.</p> </note> <p>AWS Health has a single endpoint: health.us-east-1.amazonaws.com (HTTPS). Use this endpoint to call the AWS Health API operations.</p> <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>If your AWS account is part of AWS Organizations, you can use the AWS Health organizational view feature. This feature provides a centralized view of AWS Health events across all accounts in your organization. You can aggregate AWS Health events in real time to identify accounts in your organization that are affected by an operational event or get notified of security vulnerabilities. Use the organizational view API operations to enable this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating AWS Health events</a> in the <i>AWS Health User Guide</i>.</p> <note> <p>When you use the AWS Health API operations to return AWS Health events, see the following recommendations:</p> <ul> <li> <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return AWS Health events that are public or account-specific.</p> </li> <li> <p>Use pagination to view all events from the response. For example, if you call the <code>DescribeEventsForOrganization</code> operation to get all events in your organization, you might receive several page results. Specify the <code>nextToken</code> in the next request to return more results.</p> </li> </ul> </note>

## Actions

### DescribeAffectedAccountsForOrganization



```js
amazonaws_health.DescribeAffectedAccountsForOrganization({
  "eventArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * eventArn **required**
  * maxResults
  * nextToken

#### Output
* output [DescribeAffectedAccountsForOrganizationResponse](#describeaffectedaccountsfororganizationresponse)

### DescribeAffectedEntities



```js
amazonaws_health.DescribeAffectedEntities({
  "filter": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter **required**
    * tags
      * items [tagSet](#tagset)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns **required**
      * items [eventArn](#eventarn)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * statusCodes
      * items [entityStatusCode](#entitystatuscode)
  * locale
  * maxResults
  * nextToken

#### Output
* output [DescribeAffectedEntitiesResponse](#describeaffectedentitiesresponse)

### DescribeAffectedEntitiesForOrganization



```js
amazonaws_health.DescribeAffectedEntitiesForOrganization({
  "organizationEntityFilters": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * locale
  * maxResults
  * nextToken
  * organizationEntityFilters **required**
    * items [EventAccountFilter](#eventaccountfilter)

#### Output
* output [DescribeAffectedEntitiesForOrganizationResponse](#describeaffectedentitiesfororganizationresponse)

### DescribeEntityAggregates



```js
amazonaws_health.DescribeEntityAggregates({}, context)
```

#### Input
* input `object`
  * eventArns
    * items [eventArn](#eventarn)

#### Output
* output [DescribeEntityAggregatesResponse](#describeentityaggregatesresponse)

### DescribeEventAggregates



```js
amazonaws_health.DescribeEventAggregates({
  "aggregateField": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * aggregateField **required**
  * filter
    * tags
      * items [tagSet](#tagset)
    * availabilityZones
      * items [availabilityZone](#availabilityzone)
    * endTimes
      * items [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns
      * items [eventArn](#eventarn)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTimes
      * items [DateTimeRange](#datetimerange)
  * maxResults
  * nextToken

#### Output
* output [DescribeEventAggregatesResponse](#describeeventaggregatesresponse)

### DescribeEventDetails



```js
amazonaws_health.DescribeEventDetails({
  "eventArns": null
}, context)
```

#### Input
* input `object`
  * eventArns **required**
    * items [eventArn](#eventarn)
  * locale

#### Output
* output [DescribeEventDetailsResponse](#describeeventdetailsresponse)

### DescribeEventDetailsForOrganization



```js
amazonaws_health.DescribeEventDetailsForOrganization({
  "organizationEventDetailFilters": null
}, context)
```

#### Input
* input `object`
  * locale
  * organizationEventDetailFilters **required**
    * items [EventAccountFilter](#eventaccountfilter)

#### Output
* output [DescribeEventDetailsForOrganizationResponse](#describeeventdetailsfororganizationresponse)

### DescribeEventTypes



```js
amazonaws_health.DescribeEventTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventTypeCode](#eventtypecode)
    * services
      * items [service](#service)
  * locale
  * maxResults
  * nextToken

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
  * filter
    * tags
      * items [tagSet](#tagset)
    * availabilityZones
      * items [availabilityZone](#availabilityzone)
    * endTimes
      * items [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns
      * items [eventArn](#eventarn)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTimes
      * items [DateTimeRange](#datetimerange)
  * locale
  * maxResults
  * nextToken

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeEventsForOrganization



```js
amazonaws_health.DescribeEventsForOrganization({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * awsAccountIds
      * items [accountId](#accountid)
    * endTime [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTime [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTime [DateTimeRange](#datetimerange)
  * locale
  * maxResults
  * nextToken

#### Output
* output [DescribeEventsForOrganizationResponse](#describeeventsfororganizationresponse)

### DescribeHealthServiceStatusForOrganization



```js
amazonaws_health.DescribeHealthServiceStatusForOrganization({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeHealthServiceStatusForOrganizationResponse](#describehealthservicestatusfororganizationresponse)

### DisableHealthServiceAccessForOrganization



```js
amazonaws_health.DisableHealthServiceAccessForOrganization({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### EnableHealthServiceAccessForOrganization



```js
amazonaws_health.EnableHealthServiceAccessForOrganization({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*



## Definitions

### AffectedEntity
* AffectedEntity `object`: Information about an entity that is affected by a Health event.
  * tags
  * awsAccountId
  * entityArn
  * entityUrl
  * entityValue
  * eventArn
  * lastUpdatedTime
  * statusCode

### ConcurrentModificationException


### DateTimeRange
* DateTimeRange `object`: A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.
  * from
  * to

### DescribeAffectedAccountsForOrganizationRequest
* DescribeAffectedAccountsForOrganizationRequest `object`
  * eventArn **required**
  * maxResults
  * nextToken

### DescribeAffectedAccountsForOrganizationResponse
* DescribeAffectedAccountsForOrganizationResponse `object`
  * affectedAccounts
    * items [accountId](#accountid)
  * eventScopeCode
  * nextToken

### DescribeAffectedEntitiesForOrganizationFailedSet
* DescribeAffectedEntitiesForOrganizationFailedSet `array`
  * items [OrganizationAffectedEntitiesErrorItem](#organizationaffectedentitieserroritem)

### DescribeAffectedEntitiesForOrganizationRequest
* DescribeAffectedEntitiesForOrganizationRequest `object`
  * locale
  * maxResults
  * nextToken
  * organizationEntityFilters **required**
    * items [EventAccountFilter](#eventaccountfilter)

### DescribeAffectedEntitiesForOrganizationResponse
* DescribeAffectedEntitiesForOrganizationResponse `object`
  * entities
    * items [AffectedEntity](#affectedentity)
  * failedSet
    * items [OrganizationAffectedEntitiesErrorItem](#organizationaffectedentitieserroritem)
  * nextToken

### DescribeAffectedEntitiesRequest
* DescribeAffectedEntitiesRequest `object`
  * filter **required**
    * tags
      * items [tagSet](#tagset)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns **required**
      * items [eventArn](#eventarn)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * statusCodes
      * items [entityStatusCode](#entitystatuscode)
  * locale
  * maxResults
  * nextToken

### DescribeAffectedEntitiesResponse
* DescribeAffectedEntitiesResponse `object`
  * entities
    * items [AffectedEntity](#affectedentity)
  * nextToken

### DescribeEntityAggregatesRequest
* DescribeEntityAggregatesRequest `object`
  * eventArns
    * items [eventArn](#eventarn)

### DescribeEntityAggregatesResponse
* DescribeEntityAggregatesResponse `object`
  * entityAggregates
    * items [EntityAggregate](#entityaggregate)

### DescribeEventAggregatesRequest
* DescribeEventAggregatesRequest `object`
  * aggregateField **required**
  * filter
    * tags
      * items [tagSet](#tagset)
    * availabilityZones
      * items [availabilityZone](#availabilityzone)
    * endTimes
      * items [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns
      * items [eventArn](#eventarn)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTimes
      * items [DateTimeRange](#datetimerange)
  * maxResults
  * nextToken

### DescribeEventAggregatesResponse
* DescribeEventAggregatesResponse `object`
  * eventAggregates
    * items [EventAggregate](#eventaggregate)
  * nextToken

### DescribeEventDetailsFailedSet
* DescribeEventDetailsFailedSet `array`
  * items [EventDetailsErrorItem](#eventdetailserroritem)

### DescribeEventDetailsForOrganizationFailedSet
* DescribeEventDetailsForOrganizationFailedSet `array`
  * items [OrganizationEventDetailsErrorItem](#organizationeventdetailserroritem)

### DescribeEventDetailsForOrganizationRequest
* DescribeEventDetailsForOrganizationRequest `object`
  * locale
  * organizationEventDetailFilters **required**
    * items [EventAccountFilter](#eventaccountfilter)

### DescribeEventDetailsForOrganizationResponse
* DescribeEventDetailsForOrganizationResponse `object`
  * failedSet
    * items [OrganizationEventDetailsErrorItem](#organizationeventdetailserroritem)
  * successfulSet
    * items [OrganizationEventDetails](#organizationeventdetails)

### DescribeEventDetailsForOrganizationSuccessfulSet
* DescribeEventDetailsForOrganizationSuccessfulSet `array`
  * items [OrganizationEventDetails](#organizationeventdetails)

### DescribeEventDetailsRequest
* DescribeEventDetailsRequest `object`
  * eventArns **required**
    * items [eventArn](#eventarn)
  * locale

### DescribeEventDetailsResponse
* DescribeEventDetailsResponse `object`
  * failedSet
    * items [EventDetailsErrorItem](#eventdetailserroritem)
  * successfulSet
    * items [EventDetails](#eventdetails)

### DescribeEventDetailsSuccessfulSet
* DescribeEventDetailsSuccessfulSet `array`
  * items [EventDetails](#eventdetails)

### DescribeEventTypesRequest
* DescribeEventTypesRequest `object`
  * filter
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventTypeCode](#eventtypecode)
    * services
      * items [service](#service)
  * locale
  * maxResults
  * nextToken

### DescribeEventTypesResponse
* DescribeEventTypesResponse `object`
  * eventTypes
    * items [EventType](#eventtype)
  * nextToken

### DescribeEventsForOrganizationRequest
* DescribeEventsForOrganizationRequest `object`
  * filter
    * awsAccountIds
      * items [accountId](#accountid)
    * endTime [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTime [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTime [DateTimeRange](#datetimerange)
  * locale
  * maxResults
  * nextToken

### DescribeEventsForOrganizationResponse
* DescribeEventsForOrganizationResponse `object`
  * events
    * items [OrganizationEvent](#organizationevent)
  * nextToken

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * filter
    * tags
      * items [tagSet](#tagset)
    * availabilityZones
      * items [availabilityZone](#availabilityzone)
    * endTimes
      * items [DateTimeRange](#datetimerange)
    * entityArns
      * items [entityArn](#entityarn)
    * entityValues
      * items [entityValue](#entityvalue)
    * eventArns
      * items [eventArn](#eventarn)
    * eventStatusCodes
      * items [eventStatusCode](#eventstatuscode)
    * eventTypeCategories
      * items [eventTypeCategory](#eventtypecategory)
    * eventTypeCodes
      * items [eventType](#eventtype)
    * lastUpdatedTimes
      * items [DateTimeRange](#datetimerange)
    * regions
      * items [region](#region)
    * services
      * items [service](#service)
    * startTimes
      * items [DateTimeRange](#datetimerange)
  * locale
  * maxResults
  * nextToken

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * events
    * items [Event](#event)
  * nextToken

### DescribeHealthServiceStatusForOrganizationResponse
* DescribeHealthServiceStatusForOrganizationResponse `object`
  * healthServiceAccessStatusForOrganization

### EntityAggregate
* EntityAggregate `object`: The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation.
  * count
  * eventArn

### EntityAggregateList
* EntityAggregateList `array`
  * items [EntityAggregate](#entityaggregate)

### EntityFilter
* EntityFilter `object`: The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> operation.
  * tags
    * items [tagSet](#tagset)
  * entityArns
    * items [entityArn](#entityarn)
  * entityValues
    * items [entityValue](#entityvalue)
  * eventArns **required**
    * items [eventArn](#eventarn)
  * lastUpdatedTimes
    * items [DateTimeRange](#datetimerange)
  * statusCodes
    * items [entityStatusCode](#entitystatuscode)

### EntityList
* EntityList `array`
  * items [AffectedEntity](#affectedentity)

### Event
* Event `object`: <p>Summary information about an AWS Health event.</p> <p>AWS Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an AWS account. For example, if there is an issue with an AWS Region, AWS Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your AWS account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, AWS Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>
  * arn
  * availabilityZone
  * endTime
  * eventScopeCode
  * eventTypeCategory
  * eventTypeCode
  * lastUpdatedTime
  * region
  * service
  * startTime
  * statusCode

### EventAccountFilter
* EventAccountFilter `object`: The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations.
  * awsAccountId
  * eventArn **required**

### EventAggregate
* EventAggregate `object`: The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation.
  * aggregateValue
  * count

### EventAggregateList
* EventAggregateList `array`
  * items [EventAggregate](#eventaggregate)

### EventArnsList
* EventArnsList `array`
  * items [eventArn](#eventarn)

### EventDescription
* EventDescription `object`: The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.
  * latestDescription

### EventDetails
* EventDetails `object`: Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.
  * event
    * arn
    * availabilityZone
    * endTime
    * eventScopeCode
    * eventTypeCategory
    * eventTypeCode
    * lastUpdatedTime
    * region
    * service
    * startTime
    * statusCode
  * eventDescription
    * latestDescription
  * eventMetadata

### EventDetailsErrorItem
* EventDetailsErrorItem `object`: Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation cannot find a specified event.
  * errorMessage
  * errorName
  * eventArn

### EventFilter
* EventFilter `object`: The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations.
  * tags
    * items [tagSet](#tagset)
  * availabilityZones
    * items [availabilityZone](#availabilityzone)
  * endTimes
    * items [DateTimeRange](#datetimerange)
  * entityArns
    * items [entityArn](#entityarn)
  * entityValues
    * items [entityValue](#entityvalue)
  * eventArns
    * items [eventArn](#eventarn)
  * eventStatusCodes
    * items [eventStatusCode](#eventstatuscode)
  * eventTypeCategories
    * items [eventTypeCategory](#eventtypecategory)
  * eventTypeCodes
    * items [eventType](#eventtype)
  * lastUpdatedTimes
    * items [DateTimeRange](#datetimerange)
  * regions
    * items [region](#region)
  * services
    * items [service](#service)
  * startTimes
    * items [DateTimeRange](#datetimerange)

### EventList
* EventList `array`
  * items [Event](#event)

### EventType
* EventType `object`: Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).
  * category
  * code
  * service

### EventTypeCategoryList
* EventTypeCategoryList `array`
  * items [eventTypeCategory](#eventtypecategory)

### EventTypeCodeList
* EventTypeCodeList `array`
  * items [eventTypeCode](#eventtypecode)

### EventTypeFilter
* EventTypeFilter `object`: The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> operation.
  * eventTypeCategories
    * items [eventTypeCategory](#eventtypecategory)
  * eventTypeCodes
    * items [eventTypeCode](#eventtypecode)
  * services
    * items [service](#service)

### EventTypeList
* EventTypeList `array`
  * items [EventType](#eventtype)

### InvalidPaginationToken


### OrganizationAffectedEntitiesErrorItem
* OrganizationAffectedEntitiesErrorItem `object`: Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation cannot find or process a specific entity.
  * awsAccountId
  * errorMessage
  * errorName
  * eventArn

### OrganizationEntityFiltersList
* OrganizationEntityFiltersList `array`
  * items [EventAccountFilter](#eventaccountfilter)

### OrganizationEvent
* OrganizationEvent `object`: Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.
  * arn
  * endTime
  * eventScopeCode
  * eventTypeCategory
  * eventTypeCode
  * lastUpdatedTime
  * region
  * service
  * startTime
  * statusCode

### OrganizationEventDetailFiltersList
* OrganizationEventDetailFiltersList `array`
  * items [EventAccountFilter](#eventaccountfilter)

### OrganizationEventDetails
* OrganizationEventDetails `object`: Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation.
  * awsAccountId
  * event [Event](#event)
  * eventDescription [EventDescription](#eventdescription)
  * eventMetadata

### OrganizationEventDetailsErrorItem
* OrganizationEventDetailsErrorItem `object`: Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation cannot find a specified event.
  * awsAccountId
  * errorMessage
  * errorName
  * eventArn

### OrganizationEventFilter
* OrganizationEventFilter `object`: The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.
  * awsAccountIds
    * items [accountId](#accountid)
  * endTime [DateTimeRange](#datetimerange)
  * entityArns
    * items [entityArn](#entityarn)
  * entityValues
    * items [entityValue](#entityvalue)
  * eventStatusCodes
    * items [eventStatusCode](#eventstatuscode)
  * eventTypeCategories
    * items [eventTypeCategory](#eventtypecategory)
  * eventTypeCodes
    * items [eventType](#eventtype)
  * lastUpdatedTime [DateTimeRange](#datetimerange)
  * regions
    * items [region](#region)
  * services
    * items [service](#service)
  * startTime [DateTimeRange](#datetimerange)

### OrganizationEventList
* OrganizationEventList `array`
  * items [OrganizationEvent](#organizationevent)

### UnsupportedLocale


### accountId
* accountId `string`

### affectedAccountsList
* affectedAccountsList `array`
  * items [accountId](#accountid)

### aggregateValue
* aggregateValue `string`

### availabilityZone
* availabilityZone `string`

### availabilityZones
* availabilityZones `array`
  * items [availabilityZone](#availabilityzone)

### awsAccountIdsList
* awsAccountIdsList `array`
  * items [accountId](#accountid)

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

### entityUrl
* entityUrl `string`

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
* eventMetadata `object`

### eventScopeCode
* eventScopeCode `string` (values: PUBLIC, ACCOUNT_SPECIFIC, NONE)

### eventStatusCode
* eventStatusCode `string` (values: open, closed, upcoming)

### eventStatusCodeList
* eventStatusCodeList `array`
  * items [eventStatusCode](#eventstatuscode)

### eventType
* eventType `string`

### eventTypeCategory
* eventTypeCategory `string` (values: issue, accountNotification, scheduledChange, investigation)

### eventTypeCategoryList
* eventTypeCategoryList `array`
  * items [eventTypeCategory](#eventtypecategory)

### eventTypeCode
* eventTypeCode `string`

### eventTypeList
* eventTypeList `array`
  * items [eventType](#eventtype)

### healthServiceAccessStatusForOrganization
* healthServiceAccessStatusForOrganization `string`

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
* tagSet `object`

### tagValue
* tagValue `string`

### timestamp
* timestamp `string`


