# @datafire/ebay_sell_feed

Client library for Feed API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_feed
```
```js
let ebay_sell_feed = require('@datafire/ebay_sell_feed').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The <strong>Feed API</strong> lets sellers upload input files, download reports and files including their status, filter reports using URI parameters, and retrieve customer service metrics task details.</p>

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_feed.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_sell_feed.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getCustomerServiceMetricTasks
Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. Note: You can pass in either the look_back_days or date_range, but not both.


```js
ebay_sell_feed.getCustomerServiceMetricTasks({}, context)
```

#### Input
* input `object`
  * date_range `string`: The task creation date range. The results are filtered to include only tasks with a creation date that is equal to the dates specified or is within the specified range. Do not use with the look_back_days parameter. Format: UTC For example, tasks within a range: yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ Tasks created on March 8, 2020 2020-03-08T00:00.00.000Z..2020-03-09T00:00:00.000Z Maximum: 90 days
  * feed_type `string`: The feed type associated with the task. The only presently supported value is CUSTOMER_SERVICE_METRICS_REPORT.
  * limit `string`: The number of customer service metric tasks to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves tasks 11 thru 20 from the result set. If this parameter is omitted, the default value is used. Note:This feature employs a zero-based list, where the first item in the list has an offset of 0. Default: 10 Maximum: 500
  * look_back_days `string`: The number of previous days in which to search for tasks. Do not use with the date_range parameter. If both date_range and look_back_days are omitted, this parameter's default value is used. Default value: 7 Range: 1-90 (inclusive)
  * offset `string`: The number of customer service metric tasks to skip in the result set before returning the first task in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0

#### Output
* output [CustomerServiceMetricTaskCollection](#customerservicemetrictaskcollection)

### createCustomerServiceMetricTask
Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the feedType and filterCriteria including both evaluationMarketplaceId and customerServiceMetricType for the report. The method returns the location response header containing the call URI to use with getCustomerServiceMetricTask to retrieve status and details on the task. Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the getCustomerServiceMetric method document in the Analytics API for more information about these two types of reports. Note: Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling getCustomerServiceMetric (part of the Analytics API). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a customerServiceMetricType and evaluationMarketplaceId that are without evaluation.


```js
ebay_sell_feed.createCustomerServiceMetricTask({
  "accept-language": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * accept-language **required** `string`: Use this header to specify the natural language in which the authenticated user desires the response.
  * body **required** [CreateServiceMetricsTaskRequest](#createservicemetricstaskrequest)

#### Output
*Output schema unknown*

### getCustomerServiceMetricTask
Use this method to retrieve customer service metric task details for the specified task. The input is task_id.


```js
ebay_sell_feed.getCustomerServiceMetricTask({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: Use this path parameter to specify the task ID value for the customer service metric task to retrieve.

#### Output
* output [ServiceMetricsTask](#servicemetricstask)

### getOrderTasks
This method returns the details and status for an array of order tasks based on a specified feed_type or scheduled_id. Specifying both feed_type and scheduled_id results in an error. Since schedules are based on feed types, you can specify a schedule (scheduled_id) that returns the needed feed_type. If specifying the feed_type, limit which order tasks are returned by specifying filters such as the creation date range or period of time using look_back_days. If specifying a scheduled_id, the schedule template (that the scheduled_id is based on) determines which order tasks are returned (see scheduled_id for additional information). Each scheduled_id applies to one feed_type.


```js
ebay_sell_feed.getOrderTasks({}, context)
```

#### Input
* input `object`
  * date_range `string`: The order tasks creation date range. This range is used to filter the results. The filtered results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only orders less than 90 days old can be retrieved. Do not use with the look_back_days parameter. Format: UTC For example: Tasks within a range yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ Tasks created on September 8, 2019 2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z
  * feed_type `string`: The feed type associated with the task. The only presently supported value is LMS_ORDER_REPORT. Do not use with the scheduled_id parameter. Since schedules are based on feed types, you can specify a schedule (scheduled_id) that returns the needed feed_type.
  * limit `string`: The maximum number of order tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the offset parameter to control the pagination of the output. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. For example, if offset is set to 10 and limit is set to 10, the call retrieves order tasks 11 thru 20 from the result set. If this parameter is omitted, the default value is used. Default: 10 Maximum: 500
  * look_back_days `string`: The number of previous days in which to search for tasks. Do not use with the date_range parameter. If both date_range and look_back_days are omitted, this parameter's default value is used. Default: 7 Range: 1-90 (inclusive)
  * offset `string`: The number of order tasks to skip in the result set before returning the first order in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. Default: 0
  * schedule_id `string`: The schedule ID associated with the order task. A schedule periodically generates a report for the feed type specified by the schedule template (see scheduleTemplateId in createSchedule). Do not use with the feed_id parameter.

#### Output
* output [OrderTaskCollection](#ordertaskcollection)

### createOrderTask
This method creates an order download task with filter criteria for the order report. When using this method, specify the feedType, schemaVersion, and filterCriteria for the report. The method returns the location response header containing the getOrderTask call URI to retrieve the order task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the order task. To retrieve the status of the task, use the getOrderTask method to retrieve a single task ID or the getOrderTasks method to retrieve multiple order task IDs. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified. The following list contains this method's authorization scope and its corresponding feed type: https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_REPORT For details about how this method is used, see General feed types in the Selling Integration Guide. Note: At this time, the createOrderTask method only supports order creation date filters and not modified order date filters. Do not include the modifiedDateRange filter in your request payload.


```js
ebay_sell_feed.createOrderTask({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID `string`: The ID of the eBay marketplace where the item is hosted. Note: This value is case sensitive. For example: X-EBAY-C-MARKETPLACE-ID = EBAY_US This identifies the eBay marketplace that applies to this task. See MarketplaceIdEnum.
  * body **required** [CreateOrderTaskRequest](#createordertaskrequest)

#### Output
*Output schema unknown*

### getOrderTask
This method retrieves the task details and status of the specified task. The input is task_id. For details about how this method is used, see Working with Order Feeds in the Selling Integration Guide.


```js
ebay_sell_feed.getOrderTask({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task. This ID is generated when the task was created by the createOrderTask method.

#### Output
* output [OrderTask](#ordertask)

### getSchedules
This method retrieves an array containing the details and status of all schedules based on the specified feed_type. Use this method to find a schedule if you do not know the schedule_id.


```js
ebay_sell_feed.getSchedules({
  "feed_type": ""
}, context)
```

#### Input
* input `object`
  * feed_type **required** `string`: The feedType associated with the schedule.
  * limit `string`: The maximum number of schedules that can be returned on each page of the paginated response. Use this parameter in conjunction with the offset parameter to control the pagination of the output. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. For example, if offset is set to 10 and limit is set to 10, the call retrieves schedules 11 thru 20 from the result set. If this parameter is omitted, the default value is used. Default: 10 Maximum: 500
  * offset `string`: The number of schedules to skip in the result set before returning the first schedule in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. Default: 0

#### Output
* output [UserScheduleCollection](#userschedulecollection)

### createSchedule
This method creates a schedule, which is a subscription to the specified schedule template. A schedule periodically generates a report for the feedType specified by the template. Specify the same feedType as the feedType of the associated schedule template. When creating the schedule, if available from the template, you can specify a preferred trigger hour, day of the week, or day of the month. These and other fields are conditionally available as specified by the template. Note: Make sure to include all fields required by the schedule template (scheduleTemplateId). Call the getScheduleTemplate method (or the getScheduleTemplates method), to find out which fields are required or optional. If a field is optional and a default value is provided by the template, the default value will be used if omitted from the payload.A successful call returns the location response header containing the getSchedule call URI to retrieve the schedule you just created. The URL includes the eBay-assigned schedule ID, which you can use to reference the schedule task. To retrieve the details of the create schedule task, use the getSchedule method for a single schedule ID or the getSchedules method to retrieve all schedule details for the specified feed_type. The number of schedules for each feedType is limited. Error code 160031 is returned when you have reached this maximum. Note: Except for schedules with a HALF-HOUR frequency, all schedules will ideally run at the start of each hour ('00' minutes). Actual start time may vary time may vary due to load and other factors.


```js
ebay_sell_feed.createSchedule({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateUserScheduleRequest](#createuserschedulerequest)

#### Output
* output `object`

### deleteSchedule
This method deletes an existing schedule. Specify the schedule to delete using the schedule_id path parameter.


```js
ebay_sell_feed.deleteSchedule({
  "schedule_id": ""
}, context)
```

#### Input
* input `object`
  * schedule_id **required** `string`: The schedule_id of the schedule to delete. This ID was generated when the task was created. If you do not know the schedule_id, use the getSchedules method to return all schedules based on a specified feed_type and find the schedule_id of the schedule to delete.

#### Output
*Output schema unknown*

### getSchedule
This method retrieves schedule details and status of the specified schedule. Specify the schedule to retrieve using the schedule_id. Use the getSchedules method to find a schedule if you do not know the schedule_id.


```js
ebay_sell_feed.getSchedule({
  "schedule_id": ""
}, context)
```

#### Input
* input `object`
  * schedule_id **required** `string`: The ID of the schedule for which to retrieve the details. This ID is generated when the schedule was created by the createSchedule method.

#### Output
* output [UserScheduleResponse](#userscheduleresponse)

### updateSchedule
This method updates an existing schedule. Specify the schedule to update using the schedule_id path parameter. If the schedule template has changed after the schedule was created or updated, the input will be validated using the changed template. Note: Make sure to include all fields required by the schedule template (scheduleTemplateId). Call the getScheduleTemplate method (or the getScheduleTemplates method), to find out which fields are required or optional. If you do not know the scheduleTemplateId, call the getSchedule method to find out.


```js
ebay_sell_feed.updateSchedule({
  "schedule_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * schedule_id **required** `string`: The ID of the schedule to update. This ID is generated when the schedule was created by the createSchedule method.
  * body **required** [UpdateUserScheduleRequest](#updateuserschedulerequest)

#### Output
*Output schema unknown*

### getLatestResultFile
This method downloads the latest result file generated by the schedule. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). Specify the schedule_id path parameter to download its last generated file.


```js
ebay_sell_feed.getLatestResultFile({
  "schedule_id": ""
}, context)
```

#### Input
* input `object`
  * schedule_id **required** `string`: The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the createSchedule method.

#### Output
* output [StreamingOutput](#streamingoutput)

### getScheduleTemplates
This method retrieves an array containing the details and status of all schedule templates based on the specified feed_type. Use this method to find a schedule template if you do not know the schedule_template_id.


```js
ebay_sell_feed.getScheduleTemplates({
  "feed_type": ""
}, context)
```

#### Input
* input `object`
  * feed_type **required** `string`: The feed type of the schedule templates to retrieve.
  * limit `string`: The maximum number of schedule templates that can be returned on each page of the paginated response. Use this parameter in conjunction with the offset parameter to control the pagination of the output. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. For example, if offset is set to 10 and limit is set to 10, the call retrieves schedule templates 11 thru 20 from the result set. If this parameter is omitted, the default value is used. Default: 10 Maximum: 500
  * offset `string`: The number of schedule templates to skip in the result set before returning the first template in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. Default: 0

#### Output
* output [ScheduleTemplateCollection](#scheduletemplatecollection)

### getScheduleTemplate
This method retrieves the details of the specified template. Specify the template to retrieve using the schedule_template_id path parameter. Use the getScheduleTemplates method to find a schedule template if you do not know the schedule_template_id.


```js
ebay_sell_feed.getScheduleTemplate({
  "schedule_template_id": ""
}, context)
```

#### Input
* input `object`
  * schedule_template_id **required** `string`: The ID of the template to retrieve. If you do not know the schedule_template_id, refer to the documentation or use the getScheduleTemplates method to find the available schedule templates.

#### Output
* output [ScheduleTemplateResponse](#scheduletemplateresponse)

### getTasks
This method returns the details and status for an array of tasks based on a specified feed_type or scheduledId. Specifying both feed_type and scheduledId results in an error. Since schedules are based on feed types, you can specify a schedule (scheduled_id) that returns the needed feed_type. If specifying the feed_type, limit which tasks are returned by specifying filters, such as the creation date range or period of time using look_back_days. Also, by specifying the feed_type, both on-demand and scheduled reports are returned. If specifying a scheduledId, the schedule template (that the schedule ID is based on) determines which tasks are returned (see schedule_id for additional information). Each scheduledId applies to one feed_type.


```js
ebay_sell_feed.getTasks({}, context)
```

#### Input
* input `object`
  * date_range `string`: The tasks creation date range. This range is used to filter the results. The results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only tasks that are less than 90 days can be retrieved. Format: UTC For example: Tasks within a range yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ Tasks created on September 8, 2019 2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z Maximum: 90 days
  * feed_type `string`: The feed type associated with the tasks to be returned. The only presently supported value is LMS_ORDER_REPORT. Do not use with the scheduled_id parameter. Since schedules are based on feed types, you can specify a schedule (scheduled_id) that returns the needed feed_type.
  * limit `string`: The maximum number of tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the offset parameter to control the pagination of the output. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. For example, if offset is set to 10 and limit is set to 10, the call retrieves tasks 11 thru 20 from the result set. If this parameter is omitted, the default value is used. Default: 10 Maximum: 500
  * look_back_days `string`: The number of previous days in which to search for tasks. Do not use with the date_range parameter. If both date_range and look_back_days are omitted, this parameter's default value is used. Default: 7 Range: 1-90 (inclusive)
  * offset `string`: The number of tasks to skip in the result set before returning the first task in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. Default: 0
  * schedule_id `string`: The schedule ID associated with the task. A schedule periodically generates a report for the feed type specified by the schedule template (see scheduleTemplateId in createSchedule). Do not use with the feed_type parameter.

#### Output
* output [TaskCollection](#taskcollection)

### createTask
This method creates an upload task or a download task without filter criteria. When using this method, specify the feedType and the feed file schemaVersion. The feed type specified sets the task as a download or an upload task. For details about the upload and download flows, see Working with Order Feeds in the Selling Integration Guide. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified. The following list contains this method's authorization scopes and their corresponding feed types: https://api.ebay.com/oauth/api_scope/sell.inventory: None* https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_ACK (specify for upload tasks), LMS_ORDER_REPORT (specify for download tasks) https://api.ebay.com/oauth/api_scope/sell.marketing: None* https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly: None* * Reserved for future release


```js
ebay_sell_feed.createTask({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID `string`: The ID of the eBay marketplace where the item is hosted. Note: This value is case sensitive. For example: X-EBAY-C-MARKETPLACE-ID = EBAY_US This identifies the eBay marketplace that applies to this task. See MarketplaceIdEnum.
  * body **required** [CreateTaskRequest](#createtaskrequest)

#### Output
*Output schema unknown*

### getTask
This method retrieves the details and status of the specified task. The input is task_id . For details of how this method is used, see Working with Order Feeds in the Selling Integration Guide.


```js
ebay_sell_feed.getTask({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task. This ID was generated when the task was created.

#### Output
* output [Task](#task)

### getInputFile
This method downloads the file previously uploaded using uploadFile. Specify the task_id from the uploadFile call. Note: This method only applies to the LMS_ORDER_ACK feed type.


```js
ebay_sell_feed.getInputFile({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The task ID associated with the file to be downloaded.

#### Output
* output [StreamingOutput](#streamingoutput)

### getResultFile
This method retrieves the generated file that is associated with the specified task ID. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). For details about how this method is used, see see Working with Order Feeds in the Selling Integration Guide. Note: The status of the task to retrieve must be in the COMPLETED or COMPLETED_WITH_ERROR state before this method can retrieve the file. You can use the getTask or getTasks method to retrieve the status of the task.


```js
ebay_sell_feed.getResultFile({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task associated with the file you want to download. This ID was generated when the task was created.

#### Output
* output [StreamingOutput](#streamingoutput)

### uploadFile
This method associates the specified file with the specified task ID and uploads the input file. After the file has been uploaded the processing of the file begins. Reports often take time to generate and it's common for this method to return an HTTP status of 202, which indicates the report is being generated. Use the getTask with the task ID or getTasks to determine the status of a report. The status flow is QUEUED &gt; IN_PROCESS &gt; COMPLETED or COMPLETED_WITH_ERROR. When the status is COMPLETED or COMPLETED_WITH_ERROR, this indicates the file has been processed and the order report can be downloaded. If there are errors, they will be indicated in the report file. Note: This method only applies to LMS_ORDER_ACK.For details of how this method is used in the upload flow, see Working with Order Feeds in the Selling Integration Guide.


```js
ebay_sell_feed.uploadFile({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The task_id associated with the file that will be uploaded. This ID was generated when the specified task was created.
  * creationDate `string`: The file creation date. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 8, 2019 2019-09-08T00:00:00.000Z
  * fileName `string`: The name of the file including its extension (for example, xml or csv) to be uploaded.
  * modificationDate `string`: The file modified date. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 9, 2019 2019-09-09T00:00:00.000Z
  * name `string`: A content identifier. The only presently supported name is file.
  * parameters `object`: The parameters you want associated with the file.
  * readDate `string`: The date you read the file. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 10, 2019 2019-09-10T00:00:00.000Z
  * size `integer`: The size of the file.
  * type `string`: The file type. The only presently supported type is form-data.

#### Output
* output `object`



## Definitions

### CreateOrderTaskRequest
* CreateOrderTaskRequest `object`: The type that defines the fields for the createOrderTask request.
  * feedType `string`: The feed type associated with the task. The only presently supported value is LMS_ORDER_REPORT.
  * filterCriteria [OrderFilterCriteria](#orderfiltercriteria)
  * schemaVersion `string`: The schema version of the LMS OrderReport. For the LMS_ORDER_REPORT feed type, see the OrderReport reference page to see the present schema version. The schemaVersion value is the version number shown at the top of the OrderReport page. Restriction: This value must be 1113 or higher. The OrderReport schema version is updated about every two weeks. All version numbers are odd numbers (even numbers are skipped). For example, the next release version after '1113' is '1115'.

### CreateServiceMetricsTaskRequest
* CreateServiceMetricsTaskRequest `object`: The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
  * feedType `string`: The feedType specified for the task. The report lists the transaction details that contribute to the service metrics evaluation. Supported types include: CUSTOMER_SERVICE_METRICS_REPORT
  * filterCriteria [CustomerServiceMetricsFilterCriteria](#customerservicemetricsfiltercriteria)
  * schemaVersion `string`: The version number of the file format. Valid value: 1.0

### CreateTaskRequest
* CreateTaskRequest `object`: The type that defines the fields for the createTask method.
  * feedType `string`: The feed type associated with the task. The only presently supported value is LMS_ORDER_ACK.
  * schemaVersion `string`: The schemaVersion version number of the file format. Acceptable value: 1.0

### CreateUserScheduleRequest
* CreateUserScheduleRequest `object`: The type that defines the fields for the createSchedule method.
  * feedType `string`: The name of the feed type for the created schedule. Match the feed_type from the schedule template associated with this schedule.
  * preferredTriggerDayOfMonth `integer`: The preferred day of the month to trigger the schedule. This field can be used with preferredTriggerHour for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Minimum: 1 Maximum: 31
  * preferredTriggerDayOfWeek `string`: The preferred day of the week to trigger the schedule. This field can be used with preferredTriggerHour for weekly schedules. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a>
  * preferredTriggerHour `string`: The preferred two-digit hour of the day to trigger the schedule. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC hhZ For example, the following represents 11:00 am UTC: 11Z
  * scheduleEndDate `string`: The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE. Use this field, if available, to end the schedule in the future. This value must be later than scheduleStartDate (if supplied). This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC yyyy-MM-ddTHHZ For example, the following represents UTC October 10, 2021 at 10:00 AM: 2021-10-10T10Z
  * scheduleName `string`: The schedule name assigned by the user for the created schedule.
  * scheduleStartDate `string`: The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplateId becomes inactive. Use this field, if available, to start the schedule in the future but before the scheduleEndDate (if supplied). This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC yyyy-MM-ddTHHZ For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM: 2020-01-01T12Z
  * scheduleTemplateId `string`: The ID of the template associated with the schedule ID. You can get this ID from the documentation or by calling the getScheduleTemplates method. This method requires a schedule template ID that is ACTIVE.
  * schemaVersion `string`: The schema version of the schedule feedType. This field is required if the feedType has a schema version. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value.

### CustomerServiceMetricTaskCollection
* CustomerServiceMetricTaskCollection `object`
  * href `string`: The URI of the current page of results.
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. Note: Even though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted. Note: If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total tasks) and the limit value was 50 (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate getCustomerServiceMetricTasks calls to view all tasks matching the input criteria.
  * next `string`: The relative path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set.
  * offset `integer`: The number of results skipped in the result set before returning the first result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the previous page of results. This parameter is returned if a previous page of results from the result set exists.
  * tasks `array`: An array of the customer service tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks.
    * items [ServiceMetricsTask](#servicemetricstask)
  * total `integer`: The total number of tasks that match the criteria.

### CustomerServiceMetricsFilterCriteria
* CustomerServiceMetricsFilterCriteria `object`: A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
  * customerServiceMetricType `string`: An enumeration value that specifies the customer service metric that eBay tracks to measure seller performance. See CustomerServiceMetricTypeEnum for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:CustomerServiceMetricTypeEnum'>eBay API documentation</a>
  * evaluationMarketplaceId `string`: An enumeration value that specifies the eBay marketplace where the evaluation occurs. See MarketplaceIdEnum for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/bas:MarketplaceIdEnum'>eBay API documentation</a>
  * listingCategories `array`: A list of listing category IDs on which the service metric is measured. A seller can use one or more L1 (top-level) eBay categories to get metrics specific to those L1 categories. The Category IDs for each L1 category are required. Category ID values for L1 categories can be retrieved using the Taxonomy API. Note: Pass this attribute to narrow down your filter results for the ITEM_NOT_AS_DESCRIBED customerServiceMetricType. Supported categories include: primary(L1) category Id
    * items `string`
  * shippingRegions `array`: A list of shipping region enumeration values on which the service metric is measured. This comma delimited array allows the seller to customize the report to focus on domestic or international shipping. Note: Pass this attribute to narrow down your filter results for the ITEM_NOT_RECEIVED customerServiceMetricType. Supported categories include: primary(L1) category IdSee ShippingRegionTypeEnum for values
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ShippingRegionTypeEnum'>eBay API documentation</a>

### DateRange
* DateRange `object`: The type the defines the fields for a date range.
  * from `string`: The beginning date in the range. If the parent type is included, both the from and/or the to fields become conditionally required. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Tasks within a range yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ Tasks created on September 8, 2019 2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z
  * to `string`: The end date for the date range, which is inclusive. If the parent type is included, both the from and/or the to fields become conditionally required. For example: Tasks within a range yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ Tasks created on September 8, 2019 2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### FormDataContentDisposition
* FormDataContentDisposition `object`: The metadata for the file.
  * parameters `object`: The parameters you want associated with the file.
  * creationDate `string`: The file creation date. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 8, 2019 2019-09-08T00:00:00.000Z
  * fileName `string`: The name of the file including its extension (for example, xml or csv) to be uploaded.
  * modificationDate `string`: The file modified date. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 9, 2019 2019-09-09T00:00:00.000Z
  * name `string`: A content identifier. The only presently supported name is file.
  * readDate `string`: The date you read the file. Format: UTC yyyy-MM-ddThh:mm:ss.SSSZ For example: Created on September 10, 2019 2019-09-10T00:00:00.000Z
  * size `integer`: The size of the file.
  * type `string`: The file type. The only presently supported type is form-data.

### OrderFilterCriteria
* OrderFilterCriteria `object`: The type that defines the fields for the order filters.
  * creationDateRange [DateRange](#daterange)
  * modifiedDateRange [DateRange](#daterange)
  * orderStatus `string`: The order status of the orders returned. If the filter is omitted from createOrderTask call, orders that are in both ACTIVE and COMPLETED states are returned. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:OrderStatusEnum'>eBay API documentation</a>

### OrderTask
* OrderTask `object`: The type that defines the fields for the getOrderTask response.
  * completionDate `string`: The timestamp when the task went into the COMPLETED or COMPLETED_WITH_ERROR state. This state means that eBay has compiled the report for the seller based on the seller&rsquo;s filter criteria, and the seller can run a getResultFile call to download the report.
  * creationDate `string`: The date the task was created.
  * detailHref `string`: The path to the call URI used to retrieve the task.
  * feedType `string`: The feed type associated with the task.
  * filterCriteria [OrderFilterCriteria](#orderfiltercriteria)
  * schemaVersion `string`: The schema version number associated with the create task.
  * status `string`: The enumeration value that indicates the state of the task that was submitted in the request. See FeedStatusEnum for information. The values COMPLETED and COMPLETED_WITH_ERROR indicate the Order Report file is ready to download. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
  * taskId `string`: The ID of the task that was submitted in the request.
  * uploadSummary [UploadSummary](#uploadsummary)

### OrderTaskCollection
* OrderTaskCollection `object`: The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * href `string`: The path to the call URI that produced the current page of results.
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of order tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. Note: Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted. Note: If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total tasks) and the limit value was 50 (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate getOrderTasks calls to view all tasks matching the input criteria.
  * next `string`: The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set.
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set.
  * tasks `array`: An array of the order tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks.
    * items [OrderTask](#ordertask)
  * total `integer`: The total number of order tasks that match the input criteria.

### ScheduleTemplateCollection
* ScheduleTemplateCollection `object`: The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * href `string`: The path to the call URI that produced the current page of results.
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of schedule templates to return per page, from the result set. A result set is the complete set of schedule templates returned by the method. Note: Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted. Note: If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total tasks) and the limit value was 50 (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate getScheduleTemplates calls to view all tasks matching the input criteria.
  * next `string`: The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set.
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set.
  * scheduleTemplates `array`: An array of the schedule templates on this page. An empty array is returned if the filter criteria excludes all tasks.
    * items [ScheduleTemplateResponse](#scheduletemplateresponse)
  * total `integer`: The total number of schedule templates that match the input criteria.

### ScheduleTemplateResponse
* ScheduleTemplateResponse `object`: The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * feedType `string`: The feed type of the schedule template. Note: When calling createSchedule and updateSchedule methods you must match the feed type specified by the schedule template (this feedType).
  * frequency `string`: This field specifies how often the schedule is generated. If set to HALF_HOUR or ONE_HOUR, you cannot set a preferredTriggerHour using createSchedule or updateSchedule. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FrequencyEnum'>eBay API documentation</a>
  * name `string`: The template name provided by the template.
  * scheduleTemplateId `string`: The ID of the template. Use this ID to create a schedule based on the properties of this schedule template.
  * status `string`: The present status of the template. You cannot create or modify a schedule using a template with an INACTIVE status. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a>
  * supportedConfigurations `array`: An array of the configuration supported by this template.
    * items [SupportedConfiguration](#supportedconfiguration)

### ServiceMetricsTask
* ServiceMetricsTask `object`
  * completionDate `string`: The timestamp when the customer service metrics task went into the COMPLETED or COMPLETED_WITH_ERROR state. This field is only returned if the status is one of the two completed values. This state means that eBay has compiled the report for the seller based on the seller&rsquo;s filter criteria, and the seller can run a getResultFile call to download the report.
  * creationDate `string`: The date the customer service metrics task was created.
  * detailHref `string`: The relative getCustomerServiceMetricTask call URI path to retrieve the corresponding task.
  * feedType `string`: The feed type associated with the task.
  * filterCriteria [CustomerServiceMetricsFilterCriteria](#customerservicemetricsfiltercriteria)
  * schemaVersion `string`: The schema version number of the file format. If omitted, the default value is used. Default value: 1.0
  * status `string`: An enumeration value that indicates the state of the task. See FeedStatusEnum for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
  * taskId `string`: The unique eBay-assigned ID of the task.

### StreamingOutput
* StreamingOutput `object`: File stream

### SupportedConfiguration
* SupportedConfiguration `object`: An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
  * defaultValue `string`: The default value for the property. If a value is omitted from the schedule and a default value is supplied, the default value is used.
  * property `string`: Properties supported by the template. Properties can include the following: scheduleStartDate: The timestamp that the report generation (subscription) begins. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplate becomes inactive. Format: UTC yyyy-MM-ddTHHZ scheduleEndDate: The timestamp that the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE. Format: UTC yyyy-MM-ddTHHZ schemaVersion: The schema version of the schedule templates feedType. This field is required if the feedType has a schema version. preferredTriggerDayOfMonth: The preferred day of the month to trigger the schedule. preferredTriggerDayOfWeek: The preferred day of the week to trigger the schedule. preferredTriggerHour: The preferred two-digit hour of the day to trigger the schedule. Format: UTC hhZ
  * usage `string`: Whether the specified property is REQUIRED or OPTIONAL. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ConfigurationsUsageEnum'>eBay API documentation</a>

### Task
* Task `object`: The type that defines the fields for the task details.
  * completionDate `string`: The timestamp when the task went into the COMPLETED or COMPLETED_WITH_ERROR state. This state means that eBay has compiled the report for the seller based on the seller&rsquo;s filter criteria, and the seller can run a getResultFile call to download the report.
  * creationDate `string`: The date the task was created.
  * detailHref `string`: The path to the call URI used to retrieve the task. This field points to the GetOrderTask URI if the task is for LMS_ORDER_REPORT or will be null if this task is for LMS_ORDER_ACK.
  * feedType `string`: The feed type associated with the task.
  * schemaVersion `string`: The schema version number associated with the task.
  * status `string`: The enumeration value that indicates the state of the task that was submitted in the request. See FeedStatusEnum for information. The values COMPLETED and COMPLETED_WITH_ERROR indicate the Order Report file is ready to download. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
  * taskId `string`: The ID of the task that was submitted in the request.
  * uploadSummary [UploadSummary](#uploadsummary)

### TaskCollection
* TaskCollection `object`: The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * href `string`: The path to the call URI that produced the current page of results.
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. Note: Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted. Note: If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total tasks) and the limit value was 50 (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate getTasks calls to view all tasks matching the input criteria.
  * next `string`: The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set.
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set.
  * tasks `array`: An array of the tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks.
    * items [Task](#task)
  * total `integer`: The total number of tasks that match the input criteria.

### UpdateUserScheduleRequest
* UpdateUserScheduleRequest `object`: The type that defines the fields for a schedule update to a schedule generated with the Feed API.
  * preferredTriggerDayOfMonth `integer`: The preferred day of the month to trigger the schedule. This field can be used with preferredTriggerHour for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Minimum: 1 Maximum: 31
  * preferredTriggerDayOfWeek `string`: The preferred day of the week to trigger the schedule. This field can be used with preferredTriggerHour for weekly schedules. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a>
  * preferredTriggerHour `string`: The preferred two-digit hour of the day to trigger the schedule. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC hhZ For example, the following represents 11:00 am UTC: 11Z Minimum: 00Z Maximum: 23Z
  * scheduleEndDate `string`: The timestamp on which the schedule (report generation) ends. After this date, the schedule status becomes INACTIVE. Use this field, if available, to end the schedule in the future. This value must be later than scheduleStartDate (if supplied). This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC yyyy-MM-ddTHHZ For example, the following represents UTC October 10, 2021 at 10:00 AM: 2021-10-10T10Z
  * scheduleName `string`: The schedule name assigned by the user for the created schedule.
  * scheduleStartDate `string`: The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplateId becomes inactive. Use this field, if available, to start the schedule in the future but before the scheduleEndDate (if supplied). This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value. Format: UTC yyyy-MM-ddTHHZ For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM: 2020-01-01T12Z
  * schemaVersion `string`: The schema version of the feedType for the schedule. This field is required if the feedType has a schema version. This field is available as specified by the template (scheduleTemplateId). The template can specify this field as optional or required, and optionally provides a default value.

### UploadSummary
* UploadSummary `object`: This container provides summary information on an upload feed. It is available for upload feed types (suppressed for download feed types).
  * failureCount `integer`: The number of records that failed to process during the upload feed.
  * successCount `integer`: The number of records that were successfully processed during the upload feed.

### UserScheduleCollection
* UserScheduleCollection `object`: The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * href `string`: The path to the call URI that produced the current page of results.
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of schedules to return per page, from the result set. A result set is the complete set of schedules returned by the method. Note: Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted. Note: If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total tasks) and the limit value was 50 (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate getSchedules calls to view all tasks matching the input criteria.
  * next `string`: The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set.
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set.
  * schedules `array`: An array of the schedules on this page. An empty array is returned if the filter criteria excludes all tasks.
    * items [UserScheduleResponse](#userscheduleresponse)
  * total `integer`: The total number of schedules that match the input criteria.

### UserScheduleResponse
* UserScheduleResponse `object`: The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
  * creationDate `string`: The creation date of the schedule in hours based on the 24-hour Coordinated Universal Time (UTC) clock.
  * feedType `string`: The feedType associated with the schedule.
  * lastModifiedDate `string`: The date the schedule was last modified.
  * preferredTriggerDayOfMonth `integer`: The preferred day of the month to trigger the schedule. This field can be used with preferredTriggerHour for monthly schedules. The last day of the month is used for numbers larger than the number of days in the month.
  * preferredTriggerDayOfWeek `string`: The preferred day of the week to trigger the schedule. This field can be used with preferredTriggerHour for weekly schedules. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a>
  * preferredTriggerHour `string`: The preferred two-digit hour of the day to trigger the schedule. Format: UTC hhZ For example, the following represents 11:00 am UTC: 11Z
  * scheduleEndDate `string`: The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE.
  * scheduleId `string`: The ID of the schedule. This ID is generated when the schedule was created by the createSchedule method.
  * scheduleName `string`: The schedule name assigned by the user for the created schedule. Users assign this name for their reference.
  * scheduleStartDate `string`: The timestamp that indicates the start of the report generation.
  * scheduleTemplateId `string`: The ID of the template used to create this schedule.
  * schemaVersion `string`: The schema version of the feedType for the schedule.
  * status `string`: The enumeration value that indicates the state of the schedule. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a>
  * statusReason `string`: The reason the schedule is inactive. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusReasonEnum'>eBay API documentation</a>


