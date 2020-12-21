# @datafire/google_alertcenter

Client library for G Suite Alert Center API

## Installation and Usage
```bash
npm install --save @datafire/google_alertcenter
```
```js
let google_alertcenter = require('@datafire/google_alertcenter').create({
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

Manages alerts on issues affecting your domain.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_alertcenter.oauthCallback({
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
google_alertcenter.oauthRefresh(null, context)
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

### alertcenter.alerts.list
Lists the alerts.


```js
google_alertcenter.alertcenter.alerts.list({}, context)
```

#### Input
* input `object`
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with. Inferred from the caller identity if not provided.
  * filter `string`: Optional. A query string for filtering alert results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
  * orderBy `string`: Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
  * pageSize `integer`: Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
  * pageToken `string`: Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListAlertsResponse](#listalertsresponse)

### alertcenter.alerts.delete
Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.


```js
google_alertcenter.alertcenter.alerts.delete({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The identifier of the alert to delete.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### alertcenter.alerts.get
Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.


```js
google_alertcenter.alertcenter.alerts.get({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The identifier of the alert to retrieve.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Alert](#alert)

### alertcenter.alerts.feedback.list
Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.


```js
google_alertcenter.alertcenter.alerts.feedback.list({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert feedback are associated with. Inferred from the caller identity if not provided.
  * filter `string`: Optional. A query string for filtering alert feedback results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListAlertFeedbackResponse](#listalertfeedbackresponse)

### alertcenter.alerts.feedback.create
Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.


```js
google_alertcenter.alertcenter.alerts.feedback.create({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The identifier of the alert this feedback belongs to.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
  * body [AlertFeedback](#alertfeedback)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AlertFeedback](#alertfeedback)

### alertcenter.alerts.getMetadata
Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.


```js
google_alertcenter.alertcenter.alerts.getMetadata({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The identifier of the alert this metadata belongs to.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert metadata is associated with. Inferred from the caller identity if not provided.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AlertMetadata](#alertmetadata)

### alertcenter.alerts.undelete
Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.


```js
google_alertcenter.alertcenter.alerts.undelete({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Required. The identifier of the alert to undelete.
  * body [UndeleteAlertRequest](#undeletealertrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Alert](#alert)

### alertcenter.alerts.batchDelete
Performs batch delete operation on alerts.


```js
google_alertcenter.alertcenter.alerts.batchDelete({}, context)
```

#### Input
* input `object`
  * body [BatchDeleteAlertsRequest](#batchdeletealertsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchDeleteAlertsResponse](#batchdeletealertsresponse)

### alertcenter.alerts.batchUndelete
Performs batch undelete operation on alerts.


```js
google_alertcenter.alertcenter.alerts.batchUndelete({}, context)
```

#### Input
* input `object`
  * body [BatchUndeleteAlertsRequest](#batchundeletealertsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchUndeleteAlertsResponse](#batchundeletealertsresponse)

### alertcenter.getSettings
Returns customer-level settings.


```js
google_alertcenter.alertcenter.getSettings({}, context)
```

#### Input
* input `object`
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Settings](#settings)

### alertcenter.updateSettings
Updates the customer-level settings.


```js
google_alertcenter.alertcenter.updateSettings({}, context)
```

#### Input
* input `object`
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
  * body [Settings](#settings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Settings](#settings)



## Definitions

### AccountWarning
* AccountWarning `object`: Alerts for user account warning events.
  * email `string`: Required. The email of the user that this event belongs to.
  * loginDetails [LoginDetails](#logindetails)

### ActivityRule
* ActivityRule `object`: Alerts from G Suite Security Center rules service configured by admin.
  * actionNames `array`: List of action names associated with the rule threshold.
    * items `string`
  * createTime `string`: Rule create timestamp.
  * description `string`: Description of the rule.
  * displayName `string`: Alert display name.
  * name `string`: Rule name.
  * query `string`: Query that is used to get the data from the associated source.
  * supersededAlerts `array`: List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.
    * items `string`
  * supersedingAlert `string`: Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.
  * threshold `string`: Alert threshold is for example “COUNT > 5”.
  * triggerSource `string`: The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS
  * updateTime `string`: The timestamp of the last update to the rule.
  * windowSize `string`: Rule window size. Possible values are 1 hour or 24 hours.

### Alert
* Alert `object`: An alert affecting a customer.
  * alertId `string`: Output only. The unique identifier for the alert.
  * createTime `string`: Output only. The time this alert was created.
  * customerId `string`: Output only. The unique identifier of the Google account of the customer.
  * data `object`: Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.
  * deleted `boolean`: Output only. `True` if this alert is marked for deletion.
  * endTime `string`: Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.
  * etag `string`: Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.
  * metadata [AlertMetadata](#alertmetadata)
  * securityInvestigationToolLink `string`: Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.
  * source `string`: Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Domain wide takeout * State sponsored attack * Google identity
  * startTime `string`: Required. The time the event that caused this alert was started or detected.
  * type `string`: Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [G Suite Alert types](/admin-sdk/alertcenter/reference/alert-types).
  * updateTime `string`: Output only. The time this alert was last updated.

### AlertFeedback
* AlertFeedback `object`: A customer feedback about an alert.
  * alertId `string`: Output only. The alert identifier.
  * createTime `string`: Output only. The time this feedback was created.
  * customerId `string`: Output only. The unique identifier of the Google account of the customer.
  * email `string`: Output only. The email of the user that provided the feedback.
  * feedbackId `string`: Output only. The unique identifier for the feedback.
  * type `string` (values: ALERT_FEEDBACK_TYPE_UNSPECIFIED, NOT_USEFUL, SOMEWHAT_USEFUL, VERY_USEFUL): Required. The type of the feedback.

### AlertMetadata
* AlertMetadata `object`: An alert metadata.
  * alertId `string`: Output only. The alert identifier.
  * assignee `string`: The email address of the user assigned to the alert.
  * customerId `string`: Output only. The unique identifier of the Google account of the customer.
  * etag `string`: Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metatdata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.
  * severity `string`: The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW
  * status `string`: The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED
  * updateTime `string`: Output only. The time this metadata was last updated.

### AppMakerSqlSetupNotification
* AppMakerSqlSetupNotification `object`: Alerts from App Maker to notify admins to set up default SQL instance.
  * requestInfo `array`: List of applications with requests for default SQL set up.
    * items [RequestInfo](#requestinfo)

### Attachment
* Attachment `object`: Attachment with application-specific information about an alert.
  * csv [Csv](#csv)

### BadWhitelist
* BadWhitelist `object`: Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.
  * domainId [DomainId](#domainid)
  * maliciousEntity [MaliciousEntity](#maliciousentity)
  * messages `array`: The list of messages contained by this alert.
    * items [GmailMessageInfo](#gmailmessageinfo)
  * sourceIp `string`: The source IP address of the malicious email, for example, `127.0.0.1`.

### BatchDeleteAlertsRequest
* BatchDeleteAlertsRequest `object`: A request to perform batch delete on alerts.
  * alertId `array`: Required. list of alert IDs.
    * items `string`
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with.

### BatchDeleteAlertsResponse
* BatchDeleteAlertsResponse `object`: Response to batch delete operation on alerts.
  * failedAlertStatus `object`: The status details for each failed alert_id.
  * successAlertIds `array`: The successful list of alert IDs.
    * items `string`

### BatchUndeleteAlertsRequest
* BatchUndeleteAlertsRequest `object`: A request to perform batch undelete on alerts.
  * alertId `array`: Required. list of alert IDs.
    * items `string`
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with.

### BatchUndeleteAlertsResponse
* BatchUndeleteAlertsResponse `object`: Response to batch undelete operation on alerts.
  * failedAlertStatus `object`: The status details for each failed alert_id.
  * successAlertIds `array`: The successful list of alert IDs.
    * items `string`

### CloudPubsubTopic
* CloudPubsubTopic `object`: A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
  * payloadFormat `string` (values: PAYLOAD_FORMAT_UNSPECIFIED, JSON): Optional. The format of the payload that would be sent. If not specified the format will be JSON.
  * topicName `string`: The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).

### Csv
* Csv `object`: A representation of a CSV file attachment, as a list of column headers and a list of data rows.
  * dataRows `array`: The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
    * items [CsvRow](#csvrow)
  * headers `array`: The list of headers for data columns in a CSV file.
    * items `string`

### CsvRow
* CsvRow `object`: A representation of a single data row in a CSV file.
  * entries `array`: The data entries in a CSV file row, as a string array rather than a single comma-separated string.
    * items `string`

### DeviceCompromised
* DeviceCompromised `object`: A mobile device compromised alert. Derived from audit logs.
  * email `string`: The email of the user this alert was created for.
  * events `array`: Required. The list of security events.
    * items [DeviceCompromisedSecurityDetail](#devicecompromisedsecuritydetail)

### DeviceCompromisedSecurityDetail
* DeviceCompromisedSecurityDetail `object`: Detailed information of a single MDM device compromised event.
  * deviceCompromisedState `string`: The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`".
  * deviceId `string`: Required. The device ID.
  * deviceModel `string`: The model of the device.
  * deviceType `string`: The type of the device.
  * iosVendorId `string`: Required for iOS, empty for others.
  * resourceId `string`: The device resource ID.
  * serialNumber `string`: The serial number of the device.

### DlpRuleViolation
* DlpRuleViolation `object`: Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.
  * ruleViolationInfo [RuleViolationInfo](#ruleviolationinfo)

### DomainId
* DomainId `object`: Domain ID of Gmail phishing alerts.
  * customerPrimaryDomain `string`: The primary domain for the customer.

### DomainWideTakeoutInitiated
* DomainWideTakeoutInitiated `object`: A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.
  * email `string`: The email of the admin who initiated the takeout.
  * takeoutRequestId `string`: The takeout request ID.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GmailMessageInfo
* GmailMessageInfo `object`: Details of a message in phishing spike alert.
  * attachmentsSha256Hash `array`: The `SHA256` hash of email's attachment and all MIME parts.
    * items `string`
  * date `string`: The date the malicious email was sent.
  * md5HashMessageBody `string`: The hash of the message body text.
  * md5HashSubject `string`: The MD5 Hash of email's subject (only available for reported emails).
  * messageBodySnippet `string`: The snippet of the message body text (only available for reported emails).
  * messageId `string`: The message ID.
  * recipient `string`: The recipient of this email.
  * subjectText `string`: The email subject text (only available for reported emails).

### GoogleOperations
* GoogleOperations `object`: An incident reported by Google Operations for a G Suite application.
  * affectedUserEmails `array`: The list of emails which correspond to the users directly affected by the incident.
    * items `string`
  * attachmentData [Attachment](#attachment)
  * description `string`: A detailed, freeform incident description.
  * title `string`: A one-line incident description.

### ListAlertFeedbackResponse
* ListAlertFeedbackResponse `object`: Response message for an alert feedback listing request.
  * feedback `array`: The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.
    * items [AlertFeedback](#alertfeedback)

### ListAlertsResponse
* ListAlertsResponse `object`: Response message for an alert listing request.
  * alerts `array`: The list of alerts.
    * items [Alert](#alert)
  * nextPageToken `string`: The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.

### LoginDetails
* LoginDetails `object`: The details of the login action.
  * ipAddress `string`: Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.
  * loginTime `string`: Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.

### MailPhishing
* MailPhishing `object`: Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing
  * domainId [DomainId](#domainid)
  * isInternal `boolean`: If `true`, the email originated from within the organization.
  * maliciousEntity [MaliciousEntity](#maliciousentity)
  * messages `array`: The list of messages contained by this alert.
    * items [GmailMessageInfo](#gmailmessageinfo)
  * systemActionType `string` (values: SYSTEM_ACTION_TYPE_UNSPECIFIED, NO_OPERATION, REMOVED_FROM_INBOX): System actions on the messages.

### MaliciousEntity
* MaliciousEntity `object`: Entity whose actions triggered a Gmail phishing alert.
  * displayName `string`: The header from display name.
  * entity [User](#user)
  * fromHeader `string`: The sender email address.

### MatchInfo
* MatchInfo `object`: Proto that contains match information from the condition part of the rule.
  * predefinedDetector [PredefinedDetectorInfo](#predefineddetectorinfo)
  * userDefinedDetector [UserDefinedDetectorInfo](#userdefineddetectorinfo)

### Notification
* Notification `object`: Settings for callback notifications. For more details see [G Suite Alert Notification](/admin-sdk/alertcenter/guides/notifications).
  * cloudPubsubTopic [CloudPubsubTopic](#cloudpubsubtopic)

### PhishingSpike
* PhishingSpike `object`: Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.
  * domainId [DomainId](#domainid)
  * isInternal `boolean`: If `true`, the email originated from within the organization.
  * maliciousEntity [MaliciousEntity](#maliciousentity)
  * messages `array`: The list of messages contained by this alert.
    * items [GmailMessageInfo](#gmailmessageinfo)

### PredefinedDetectorInfo
* PredefinedDetectorInfo `object`: Detector provided by Google.
  * detectorName `string`: Name that uniquely identifies the detector.

### RequestInfo
* RequestInfo `object`: Requests for one application that needs default SQL setup.
  * appDeveloperEmail `array`: List of app developers who triggered notifications for above application.
    * items `string`
  * appKey `string`: Required. The application that requires the SQL setup.
  * numberOfRequests `string`: Required. Number of requests sent for this application to set up default SQL instance.

### ResourceInfo
* ResourceInfo `object`: Proto that contains resource information.
  * documentId `string`: Drive file ID.
  * resourceTitle `string`: Title of the resource, for example email subject, or document title.

### RuleInfo
* RuleInfo `object`: Proto that contains rule information.
  * displayName `string`: User provided name of the rule.
  * resourceName `string`: Resource name that uniquely identifies the rule.

### RuleViolationInfo
* RuleViolationInfo `object`: Common alert information about violated rules that are configured by G Suite administrators.
  * dataSource `string` (values: DATA_SOURCE_UNSPECIFIED, DRIVE): Source of the data.
  * matchInfo `array`: List of matches that were found in the resource content.
    * items [MatchInfo](#matchinfo)
  * recipients `array`: Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to.
    * items `string`
  * resourceInfo [ResourceInfo](#resourceinfo)
  * ruleInfo [RuleInfo](#ruleinfo)
  * suppressedActionTypes `array`: Actions suppressed due to other actions with higher priority.
    * items `string` (values: ACTION_TYPE_UNSPECIFIED, DRIVE_BLOCK_EXTERNAL_SHARING, DRIVE_WARN_ON_EXTERNAL_SHARING, ALERT, RULE_ACTIVATE, RULE_DEACTIVATE)
  * trigger `string` (values: TRIGGER_UNSPECIFIED, DRIVE_SHARE): Trigger of the rule.
  * triggeredActionTypes `array`: Actions applied as a consequence of the rule being triggered.
    * items `string` (values: ACTION_TYPE_UNSPECIFIED, DRIVE_BLOCK_EXTERNAL_SHARING, DRIVE_WARN_ON_EXTERNAL_SHARING, ALERT, RULE_ACTIVATE, RULE_DEACTIVATE)
  * triggeringUserEmail `string`: Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.

### Settings
* Settings `object`: Customer-level settings.
  * notifications `array`: The list of notifications.
    * items [Notification](#notification)

### StateSponsoredAttack
* StateSponsoredAttack `object`: A state-sponsored attack alert. Derived from audit logs.
  * email `string`: The email of the user this incident was created for.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### SuspiciousActivity
* SuspiciousActivity `object`: A mobile suspicious activity alert. Derived from audit logs.
  * email `string`: The email of the user this alert was created for.
  * events `array`: Required. The list of security events.
    * items [SuspiciousActivitySecurityDetail](#suspiciousactivitysecuritydetail)

### SuspiciousActivitySecurityDetail
* SuspiciousActivitySecurityDetail `object`: Detailed information of a single MDM suspicious activity event.
  * deviceId `string`: Required. The device ID.
  * deviceModel `string`: The model of the device.
  * deviceProperty `string`: The device property which was changed.
  * deviceType `string`: The type of the device.
  * iosVendorId `string`: Required for iOS, empty for others.
  * newValue `string`: The new value of the device property after the change.
  * oldValue `string`: The old value of the device property before the change.
  * resourceId `string`: The device resource ID.
  * serialNumber `string`: The serial number of the device.

### UndeleteAlertRequest
* UndeleteAlertRequest `object`: A request to undelete a specific alert that was marked for deletion.
  * customerId `string`: Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.

### User
* User `object`: A user.
  * displayName `string`: Display name of the user.
  * emailAddress `string`: Email address of the user.

### UserDefinedDetectorInfo
* UserDefinedDetectorInfo `object`: Detector defined by administrators.
  * displayName `string`: Display name of the detector.
  * resourceName `string`: Resource name that uniquely identifies the detector.


