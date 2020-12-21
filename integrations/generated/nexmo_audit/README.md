# @datafire/nexmo_audit

Client library for Audit API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_audit
```
```js
let nexmo_audit = require('@datafire/nexmo_audit').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
_Please note that the Audit API is currently in Beta_


## Actions

### getEvents
Get a series of audit events describing changes made to your Vonage API account over time.



```js
nexmo_audit.getEvents({}, context)
```

#### Input
* input `object`
  * event_type `string` (values: USER_STATUS, USER_UPDATE, USER_BILLING_UPDATE, USER_CREATE, USER_LOGIN, USER_LOGOUT, USER_PRODUCT_SEARCH, USER_API_KEYS_UPDATE, ACCOUNT_SECRET_DELETE, ACCOUNT_SECRET_CREATE, ACCOUNT_UPDATE_SPAMMER, ACCOUNT_UPDATE_SETTINGS_API, NUMBER_ASSIGN, NUMBER_UPDATED, NUMBER_RELEASE, NUMBER_LINKED, NUMBER_UNLINKED, APP_CREATE, APP_UPDATE, APP_DELETE, APP_DISABLE, APP_ENABLE, IP_WHITELIST_CREATE, IP_WHITELIST_DELETE, AUTORELOAD_ENABLE, AUTORELOAD_UPDATE, AUTORELOAD_DISABLE): Filter results by this event type.
  * date_from `string`: Start of time range for audit events. DateTime in ISO-8601 format.
  * date_to `string`: End of time range for audit events. DateTime in ISO-8601 format.
  * search_text `string`: Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.
  * page `string`: Page number starting with page 1.
  * size `integer`: Number of elements per page.

#### Output
* output [AuditResp](#auditresp)

### getEventsOptions
Get audit event types.



```js
nexmo_audit.getEventsOptions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AuditEventTypesResp](#auditeventtypesresp)

### getEvent
Get the specified audit event.



```js
nexmo_audit.getEvent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the audit event to retrieve

#### Output
* output [AuditEvent](#auditevent)



## Definitions

### AuditEvent
* AuditEvent `object`
  * _links [EventLink](#eventlink)
  * account_id `string`: The NEXMO_API_KEY of the Vonage API account that the audit event is associated with.
  * context `object`: A valid JSON object with information detailing the context of the audit event.
  * created_at `string`: When the audit event was created.
  * event_type [EventTypes](#eventtypes)
  * event_type_description `string`: A description of the event type
  * id `string`: UUID of the audit event
  * source `string` (values: CD, DEVAPI): The source of the event.
  * source_country `string`: ISO 3166-1 Alpha-2 country code recorded for the event.
  * source_description `string` (values: Customer Dashboard, Developer API): Description of the audit event source.
  * source_ip `string`: The IP address used to make the account change.
  * user_email `string`: Email of the user whose account the audit event is associated with.
  * user_id `integer`: The ID of the user that the audit event is associated with.

### AuditEventType
* AuditEventType `object`
  * description `string`: A description of the event type
  * type [EventTypes](#eventtypes)

### AuditEventTypesResp
* AuditEventTypesResp `object`
  * eventTypes `array`: An array of audit event types.
    * items [AuditEventType](#auditeventtype)

### AuditResp
* AuditResp `object`
  * _embedded `object`: Container containing the `events` array.
    * events `array`
      * items [AuditEvent](#auditevent)
  * _links [PaginationLinks](#paginationlinks)
  * page [PaginationData](#paginationdata)

### CallbackUrl
* CallbackUrl `object`
  * method `string` (values: GET, POST): The HTTP method used to make a callback to your application
  * url `string`: The URL used for a callback to your application

### ContextAppCreate
* ContextAppCreate `object`
  * appId `string`: UUID of the app that was created
  * created `object`
    * accountId `string`: Which account the app is associated with
    * answer_url [CallbackUrl](#callbackurl)
    * appId `string`: UUID of the app that was created
    * event_url [CallbackUrl](#callbackurl)
    * name `string`: The name of the application created
    * type `string`: The type of application created

### ContextNumberLinking
* ContextNumberLinking `object`
  * account `string`: Which account the number is associated with
  * applicationId `string`: UUID of the app the number is being linked/unlinked to
  * country `string`: The country of the number
  * msisdn `string`: The phone number linked/unlinked to your application

### ContextNumberUpdate
* ContextNumberUpdate `object`
  * country `string`: The country of the number
  * http `string`: The URL of the endpoint the number has been forwarded to
  * msisdn `string`: The phone number linked/unlinked to your application
  * voice-type `string` (values: tel, sip, vxml, app): The type of endpoint the number has been forwarded to
  * voice-value `string`: The value of the endpoint the number has been forwarded to

### ErrorBadRequest
* ErrorBadRequest `object`
  * error `string`: A human readable description of the error
  * message `string`: A longer description of the error
  * status `integer`: The HTTP Status code of the error

### ErrorForbidden
* ErrorForbidden `object`
  * error `string`: A human readable description of the error
  * message `string`: A longer description of the error
  * status `integer`: The HTTP Status code of the error

### ErrorNotFound
* ErrorNotFound `object`
  * error `string`: A human readable description of the error XXX
  * message `string`: A longer description of the error YYY
  * status `integer`: The HTTP Status code of the error

### ErrorUnauthorized
* ErrorUnauthorized `object`
  * error `string`: A human readable description of the error
  * message `string`: A longer description of the error
  * status `integer`: The HTTP Status code of the error

### EventLink
* EventLink `object`: A link to this audit event object if you were to retrieve it individually.
  * self `object`
    * href `string`: URI of this document.

### EventTypes
* EventTypes `string` (values: USER_STATUS, USER_UPDATE, USER_BILLING_UPDATE, USER_CREATE, USER_LOGIN, USER_LOGOUT, USER_PRODUCT_SEARCH, USER_API_KEYS_UPDATE, ACCOUNT_SECRET_DELETE, ACCOUNT_SECRET_CREATE, ACCOUNT_UPDATE_SPAMMER, ACCOUNT_UPDATE_SETTINGS_API, NUMBER_ASSIGN, NUMBER_UPDATED, NUMBER_RELEASE, NUMBER_LINKED, NUMBER_UNLINKED, APP_CREATE, APP_UPDATE, APP_DELETE, APP_DISABLE, APP_ENABLE, IP_WHITELIST_CREATE, IP_WHITELIST_DELETE, AUTORELOAD_ENABLE, AUTORELOAD_UPDATE, AUTORELOAD_DISABLE): The type of the audit event.

### NoContent
* NoContent `object`
  * error `string`: A human readable description of the error AAA
  * message `string`: A longer description of the error BBB
  * status `integer`: The HTTP Status code of the error

### PaginationData
* PaginationData `object`: Page containing results.
  * number `integer`: Which page of the pagination sequence you are looking at.
  * size `integer`: The total number of items in this response (page).
  * totalElements `integer`: The total number of items across all pages.
  * totalPages `integer`: The number of pages of data in the response.

### PaginationLinks
* PaginationLinks `object`: Container containing self, next and last page links.
  * last `object`
    * href `string`: URI of the last document in the sequence.
  * next `object`
    * href `string`: URI of the next document.
  * self `object`
    * href `string`: URI of this document.


