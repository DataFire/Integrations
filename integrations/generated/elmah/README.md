# @datafire/elmah

Client library for elmah.io API

## Installation and Usage
```bash
npm install --save @datafire/elmah
```
```js
let elmah = require('@datafire/elmah').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This is the public REST API for elmah.io. All of the integrations communicates with elmah.io through this API.<br/><br/>For additional help getting started with the API, visit the following help articles:<br/><ul><li>[Using the REST API](https://docs.elmah.io/using-the-rest-api/)</li><li>[Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)</li><li>[Where is my log ID?](https://docs.elmah.io/where-is-my-log-id/)</li><li>[How to configure API key permissions](https://docs.elmah.io/how-to-configure-api-key-permissions/)</li></ul>

## Actions

### Deployments_GetAll
Fetch a list of deployments.


```js
elmah.Deployments_GetAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Deployment](#deployment)

### Deployments_Create
Create a new deployment.


```js
elmah.Deployments_Create({}, context)
```

#### Input
* input `object`
  * body [CreateDeployment](#createdeployment)

#### Output
* output [CreateDeploymentResult](#createdeploymentresult)

### Deployments_Delete
This endpoint doesn't clear the version number of messages already annotated with this deployment version.


```js
elmah.Deployments_Delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the deployment to delete.

#### Output
*Output schema unknown*

### Deployments_Get
Fetch a deployment by its ID.


```js
elmah.Deployments_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the deployment to fetch.

#### Output
* output [Deployment](#deployment)

### Heartbeats_Create
Create a new heartbeat.


```js
elmah.Heartbeats_Create({
  "id": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the heartbeat check.
  * logId **required** `string`: The ID of the log containing the heartbeat check.
  * body [CreateHeartbeat](#createheartbeat)

#### Output
*Output schema unknown*

### Logs_GetAll
Fetch a list of logs.


```js
elmah.Logs_GetAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Log](#log)

### Logs_Create
Create a new log.


```js
elmah.Logs_Create({}, context)
```

#### Input
* input `object`
  * body [CreateLog](#createlog)

#### Output
* output [CreateLogResult](#createlogresult)

### Logs_Get
Fetch a log by its ID.


```js
elmah.Logs_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the log to fetch.

#### Output
* output [Log](#log)

### Messages_DeleteAll
Deletes a list of messages by logid and query.


```js
elmah.Messages_DeleteAll({
  "logId": ""
}, context)
```

#### Input
* input `object`
  * logId **required** `string`: The ID of the log containing the message.
  * body [Search](#search)

#### Output
*Output schema unknown*

### Messages_GetAll
Fetch messages from a log.


```js
elmah.Messages_GetAll({
  "logId": ""
}, context)
```

#### Input
* input `object`
  * logId **required** `string`: The ID of the log containing the messages.
  * pageIndex `integer`: The page number of the result.
  * pageSize `integer`: The number of messages to load (max 100) or 15 if not set.
  * query `string`: A full-text or Lucene query to limit the messages by.
  * from `string`: A start date and time to search from (not included).
  * to `string`: An end date and time to search to (not included).
  * includeHeaders `boolean`: Include headers like server variables and cookies in the result (slower).

#### Output
* output [MessagesResult](#messagesresult)

### Messages_Create
Create a new message.


```js
elmah.Messages_Create({
  "logId": ""
}, context)
```

#### Input
* input `object`
  * logId **required** `string`: The ID of the log which should contain the new message.
  * body [CreateMessage](#createmessage)

#### Output
*Output schema unknown*

### Messages_CreateBulk
Create one or more new messages.


```js
elmah.Messages_CreateBulk({
  "logId": ""
}, context)
```

#### Input
* input `object`
  * logId **required** `string`: The ID of the log which should contain the new messages.
  * body `array`: The messages to create.
    * items [CreateMessage](#createmessage)

#### Output
* output `array`
  * items [CreateBulkMessageResult](#createbulkmessageresult)

### Messages_Delete
Delete a message by its ID.


```js
elmah.Messages_Delete({
  "id": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to delete.
  * logId **required** `string`: The ID of the log containing the message.

#### Output
*Output schema unknown*

### Messages_Get
Fetch a message by its ID.


```js
elmah.Messages_Get({
  "id": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to fetch.
  * logId **required** `string`: The ID of the log containing the message.

#### Output
* output [Message](#message)

### Messages_Fix
Fix a message by its ID.


```js
elmah.Messages_Fix({
  "id": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to fix.
  * logId **required** `string`: The ID of the log containing the message.
  * markAllAsFixed `boolean`: If set to true, all instances of the log message are set to fixed.

#### Output
*Output schema unknown*

### Messages_Hide
Hide a message by its ID.


```js
elmah.Messages_Hide({
  "id": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to hide.
  * logId **required** `string`: The ID of the log containing the message.

#### Output
*Output schema unknown*

### UptimeChecks_GetAll
Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.


```js
elmah.UptimeChecks_GetAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [UptimeCheck](#uptimecheck)



## Definitions

### CreateBulkMessageResult
* CreateBulkMessageResult `object`
  * location `string`: The location of the created message if StatusCode equals Created.
  * statusCode `integer`: Status code of the individual messages as if it were being created through the non-bulk endpoint.

### CreateDeployment
* CreateDeployment `object`
  * created `string`: When was this deployment created in UTC. Defaults to current time if not specified.
  * description `string`: Optional description of this deployment. Can be markdown or clear text.
  * logId `string`: As default, deployments are attached all logs of the organization. If you want a deployment to
  * userEmail `string`: The email of the person responsible for creating this deployment. This can be the email taken from
  * userName `string`: The name of the person responsible for creating this deployment. This can be the name taken from
  * version **required** `string`: The version number of this deployment. The value of version can be a SemVer compliant string or any other

### CreateDeploymentResult
* CreateDeploymentResult `object`
  * location `string`: The location of the created deployment.

### CreateHeartbeat
* CreateHeartbeat `object`
  * application `string`: Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.
  * reason `string`: If result is "Degraded" or "Unhealthy" you can use this property to specify why.
  * result `string`: The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"
  * version `string`: Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get

### CreateLog
* CreateLog `object`
  * name **required** `string`: Name of the new log.

### CreateLogResult
* CreateLogResult `object`
  * location `string`: The location of the created log.

### CreateMessage
* CreateMessage `object`
  * application `string`: Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log
  * cookies `array`: A key/value pair of cookies. This property only makes sense for logging messages related to web requests.
    * items [Item](#item)
  * data `array`: A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
    * items [Item](#item)
  * dateTime `string`: The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.
  * detail `string`: A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.
  * form `array`: A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.
    * items [Item](#item)
  * hostname `string`: The hostname of the server logging the message.
  * method `string`: If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.
  * queryString `array`: A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.
    * items [Item](#item)
  * serverVariables `array`: A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.
    * items [Item](#item)
  * severity `string`: An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal
  * source `string`: The source of the code logging the message. This could be the assembly name.
  * statusCode `integer`: If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
  * title `string`: The textual title or headline of the message to log.
  * titleTemplate `string`: The title template of the message to log. This property can be used from logging frameworks that supports
  * type `string`: The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.
  * url `string`: If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.
  * user `string`: An identification of the user triggering this message. You can put the users email address or your user key into this property.
  * version `string`: Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other

### CreateMessageResult
* CreateMessageResult `object`
  * location `string`: The location of the created message.

### Deployment
* Deployment `object`
  * created `string`: When was this deployment created.
  * createdBy `string`: The elmah.io id of the user creating this deployment. Since deployments are created on a subscription,
  * description `string`: Sescription of this deployment in markdown or clear text.
  * id `string`: The ID of this deployment.
  * logId `string`: If the deployment is attached a single log, this property is set to the ID of that log.
  * userEmail `string`: The email of the person responsible for creating this deployment.
  * userName `string`: The name of the person responsible for creating this deployment.
  * version `string`: The version number of this deployment. The value of version can be a SemVer compliant string or any other

### Item
* Item `object`: Represents a key value pair.
  * key `string`: The key of the item.
  * value `string`: The value of the item.

### Log
* Log `object`
  * color `string`: Color of the log. The color will always be one of the following (green being the default):
  * environmentName `string`: Environment name this log is in or "Other" if not in an environment.
  * id `string`: ID of the log.
  * name `string`: Name of the log.

### Message
* Message `object`
  * application `string`: Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log
  * cookies `array`: A key/value pair of cookies. This property only makes sense for logging messages related to web requests.
    * items [Item](#item)
  * data `array`: A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
    * items [Item](#item)
  * dateTime `string`: The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.
  * detail `string`: A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.
  * form `array`: A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.
    * items [Item](#item)
  * hostname `string`: The hostname of the server logging the message.
  * id `string`: The ID of this message.
  * method `string`: If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.
  * queryString `array`: A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.
    * items [Item](#item)
  * serverVariables `array`: A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.
    * items [Item](#item)
  * severity `string`: An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal
  * source `string`: The source of the code logging the message. This could be the assembly name.
  * statusCode `integer`: If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
  * title `string`: The textual title or headline of the message to log.
  * titleTemplate `string`: The title template of the message to log. This property can be used from logging frameworks that supports
  * type `string`: The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.
  * url `string`: If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.
  * user `string`: An identification of the user triggering this message. You can put the users email address or your user key into this property.
  * version `string`: Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other

### MessageOverview
* MessageOverview `object`
  * application `string`: Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log
  * cookies `array`: A key/value pair of cookies. This property only makes sense for logging messages related to web requests.
    * items [Item](#item)
  * data `array`: A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
    * items [Item](#item)
  * dateTime `string`: The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.
  * detail `string`: A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.
  * form `array`: A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.
    * items [Item](#item)
  * hostname `string`: The hostname of the server logging the message.
  * id `string`: The ID of this message.
  * method `string`: If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.
  * queryString `array`: A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.
    * items [Item](#item)
  * serverVariables `array`: A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.
    * items [Item](#item)
  * severity `string`: An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal
  * source `string`: The source of the code logging the message. This could be the assembly name.
  * statusCode `integer`: If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
  * title `string`: The textual title or headline of the message to log.
  * titleTemplate `string`: The title template of the message to log. This property can be used from logging frameworks that supports
  * type `string`: The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.
  * url `string`: If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.
  * user `string`: An identification of the user triggering this message. You can put the users email address or your user key into this property.
  * version `string`: Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other

### MessagesResult
* MessagesResult `object`
  * messages `array`: Log messages.
    * items [MessageOverview](#messageoverview)
  * total `integer`: The total number of log messages found.

### Search
* Search `object`
  * from `string`: Search from this date.
  * query `string`: Lucene query.
  * to `string`: Search to this date.

### UptimeCheck
* UptimeCheck `object`
  * id `string`: ID of the uptime check.
  * name `string`: Name of the uptime check.
  * status `string`: Current status of the uptime check.
  * url `string`: Url of the uptime check.


