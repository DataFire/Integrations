# @datafire/amazonaws_health

Client library for AWS Health APIs and Notifications

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_health
```

```js
let datafire = require('datafire');
let amazonaws_health = require('@datafire/amazonaws_health').create();

amazonaws_health.DescribeAffectedEntities({}).then(data => {
  console.log(data);
})
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

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) **required** - The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.
* locale (string)
* maxResults (integer)
* nextToken (string)

### DescribeEntityAggregates



```js
amazonaws_health.DescribeEntityAggregates({}, context)
```

#### Parameters
* eventArns (array)

### DescribeEventAggregates



```js
amazonaws_health.DescribeEventAggregates({
  "aggregateField": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* aggregateField (string) **required**
* filter (object) - The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations.
* maxResults (integer)
* nextToken (string)

### DescribeEventDetails



```js
amazonaws_health.DescribeEventDetails({
  "eventArns": []
}, context)
```

#### Parameters
* eventArns (array) **required**
* locale (string)

### DescribeEventTypes



```js
amazonaws_health.DescribeEventTypes({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) - The values to use to filter results from the <a>DescribeEventTypes</a> operation.
* locale (string)
* maxResults (integer)
* nextToken (string)

### DescribeEvents



```js
amazonaws_health.DescribeEvents({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) - The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations.
* locale (string)
* maxResults (integer)
* nextToken (string)

