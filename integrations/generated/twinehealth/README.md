# @datafire/twinehealth

Client library for Fitbit Plus API

## Installation and Usage
```bash
npm install --save @datafire/twinehealth
```
```js
let twinehealth = require('@datafire/twinehealth').create({
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

# Overview
The Fitbit Plus API is a RESTful API. The requests and responses are formated according to the
[JSON API](http://jsonapi.org/format/1.0/) specification.

In addition to this documentation, we also provide an
[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) "yaml" file describing the API:
[Fitbit Plus API Specification](swagger.yaml).

# Authentication
Authentication for the Fitbit Plus API is based on the
[OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749). Fitbit Plus currently supports grant
types of **client_credentials** and **refresh_token**.

See [POST /oauth/token](#operation/createToken) for details on the request and response formats.
<!-- ReDoc-Inject: <security-definitions> -->

## Building Integrations
We will provide customers with unique client credentials for each application/integration they build, allowing us
to enforce appropriate access controls and monitor API usage.
The client credentials will be scoped to the organization, and allow full access to all patients and related data
within that organization.

These credentials are appropriate for creating an integration that does one of the following:
 - background reporting/analysis
 - synchronizing data with another system (such as an EMR)

The API credentials and oauth flows we currently support are **not** well suited for creating a user-facing
application that allows a user (patient, coach, or admin) to login and have access to data which is appropriate to
that specific user. It is possible to build such an application, but it is not possible to use Fitbit Plus as a
federated identity provider. You would need to have a separate means of verifying a user's identity. We do not
currently support the required password-based oauth flow to make this possible.

# Paging
The Fitbit Plus API supports two different pagination strategies for GET collection endpoints.

#### Skip-based paging

Skip-based paging uses the query parameters `page[size]` and `page[number]` to specify the max number of resources returned and the page number. We default to skip-based paging if there are no page parameters. The response will include a `links` object containing links to the first, last, prev, and next pages of data.

If the contents of the collection change while you are iterating through the collection, you will see duplicate or missing documents. For example, if you are iterating through the `calender_event` resource via `GET /pub/calendar_event?sort=start_at&page[size]=50&page[number]=1`, and a new `calendar_event` is created that has a `start_at` value before the first `calendar_event`, when you fetch the next page at `GET /pub/calendar_event?sort=start_at&page[size]=50&page[number]=2`, the first entry in the second response will be a duplicate of the last entry in the first response.

#### Cursor-based paging
Cursor-based paging uses the query parameters `page[limit]` and `page[after]` to specify the max number of entries returned and identify where to begin the next page. Add `page[limit]` to the parameters to use cursor-based paging. The response will include a `links` object containing a link to the next page of data, if the next page exists.

Cursor-based paging is not subject to duplication if new resources are added to the collection. For example, if you are iterating through the `calender_event` resource via `GET /pub/calendar_event?sort=start_at&page[limit]=50`, and a new `calendar_event` is created that has a `start_at` value before the first `calendar_event`, you will not see a duplicate entry when you fetch the next page at `GET /pub/calendar_event?sort=start_at&page[limit]=50&page[after]=<cursor>`.

We encourage the use of cursor-based paging for performance reasons.

In either form of paging, you can determine whether any resources were missed by comparing the number of fetched resources against `meta.count`. Set `page[size]` or `page[limit]` to 0 to get only the count.

It is not valid to mix the two strategies.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
twinehealth.oauthCallback({
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
twinehealth.oauthRefresh(null, context)
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

### createAction
Create a plan action


```js
twinehealth.createAction({
  "body": {
    "data": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateActionRequest](#createactionrequest)

#### Output
* output [CreateActionResponse](#createactionresponse)

### fetchAction
Get a health action from a patient's plan.


```js
twinehealth.fetchAction({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Action identifier

#### Output
* output [FetchActionResponse](#fetchactionresponse)

### updateAction
Update a health action from a patient's plan.


```js
twinehealth.updateAction({
  "id": "",
  "body": {
    "data": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Action identifier
  * body **required** [UpdateActionRequest](#updateactionrequest)

#### Output
* output [UpdateActionResponse](#updateactionresponse)

### createBundle
Create a bundle in a patient's plan


```js
twinehealth.createBundle({
  "body": {
    "data": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateBundleRequest](#createbundlerequest)

#### Output
* output [CreateBundleResponse](#createbundleresponse)

### fetchBundle
Get a bundle from a patient's plan.


```js
twinehealth.fetchBundle({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Bundle identifier

#### Output
* output [FetchBundleResponse](#fetchbundleresponse)

### updateBundle
Updte a bundle from a patient's plan.


```js
twinehealth.updateBundle({
  "id": "",
  "body": {
    "data": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Bundle identifier
  * body **required** [UpdateBundleRequest](#updatebundlerequest)

#### Output
* output [UpdateBundleResponse](#updatebundleresponse)

### fetchCalendarEvents
Get a list of calendar events


```js
twinehealth.fetchCalendarEvents({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient id to fetch calendar event. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
  * filter[attendees] `string`: Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
  * filter[type] `string` (values: plan-check-in, reminder, telephone-call, office-visit, video-call): Calendar event type
  * filter[completed] `boolean`: If not specified, return all calendar events. If set to `true` return only events marked as completed, if set to `false`, return only events not marked as completed yet.
  * filter[start_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events starting in November 2017 (America/New_York): `filter[start_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[end_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events ending in November 2017 (America/New_York): `filter[end_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[completed_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events completed in November 2017 (America/New_York): `filter[completed_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[created_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[updated_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[cursor] `string`: Page cursor
  * include `string` (values: owner): List of related resources to include in the response

#### Output
* output [FetchCalendarEventsResponse](#fetchcalendareventsresponse)

### createCalendarEvent
Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.


```js
twinehealth.createCalendarEvent({
  "body": {
    "data": {
      "type": "",
      "attributes": null,
      "relationships": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCalendarEventRequest](#createcalendareventrequest)

#### Output
* output [CreateCalendarEventResponse](#createcalendareventresponse)

### deleteCalendarEvent
Delete a calendar event by id


```js
twinehealth.deleteCalendarEvent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Calendar event identifier

#### Output
*Output schema unknown*

### fetchCalendarEvent
Get a calendar event by id


```js
twinehealth.fetchCalendarEvent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Calendar event identifier

#### Output
* output [FetchCalendarEventResponse](#fetchcalendareventresponse)

### updateCalendarEvent
Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.


```js
twinehealth.updateCalendarEvent({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Calendar event identifier
  * body **required** [UpdateCalendarEventRequest](#updatecalendareventrequest)

#### Output
* output [UpdateCalendarEventResponse](#updatecalendareventresponse)

### createCalendarEventResponse
Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.


```js
twinehealth.createCalendarEventResponse({
  "body": {
    "data": {
      "type": "",
      "attributes": null,
      "relationships": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCalendarEventResponseRequest](#createcalendareventresponserequest)

#### Output
* output [CreateCalendarEventResponseRequest](#createcalendareventresponserequest)

### fetchCoaches
Get a list of coaches matching the specified filters.


```js
twinehealth.fetchCoaches({}, context)
```

#### Input
* input `object`
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.

#### Output
* output [FetchCoachesResponse](#fetchcoachesresponse)

### fetchCoach
Get a coach record by id.


```js
twinehealth.fetchCoach({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Coach identifier

#### Output
* output [FetchCoachResponse](#fetchcoachresponse)

### fetchEmailHistories
Get a list of email histories


```js
twinehealth.fetchEmailHistories({}, context)
```

#### Input
* input `object`
  * filter[receiver] `string`: Fitbit Plus user id of email recipient. Required if filter[sender] is not defined.
  * filter[sender] `string`: Fitbit Plus user id of email sender. Required if filter[receiver] is not defined.
  * filter[emailType] `string`: Type of email
  * sort `string` (values: send_time, -send_time): valid sorts:

#### Output
* output [FetchEmailHistoriesResponse](#fetchemailhistoriesresponse)

### fetchEmailHistory
Get an email history by id


```js
twinehealth.fetchEmailHistory({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Email history identifier

#### Output
* output [FetchEmailHistoryResponse](#fetchemailhistoryresponse)

### fetchGroups
Get a list of groups matching the specified filters.


```js
twinehealth.fetchGroups({
  "filter[organization]": ""
}, context)
```

#### Input
* input `object`
  * filter[organization] **required** `string`: Organization identifier
  * filter[name] `string`: Group name

#### Output
* output [FetchGroupsResponse](#fetchgroupsresponse)

### createGroup
Create a group record.


```js
twinehealth.createGroup({
  "body": {
    "data": {
      "id": "",
      "type": "",
      "attributes": {
        "name": ""
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateGroupRequest](#creategrouprequest)

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### fetchGroup
Get a group record by id.


```js
twinehealth.fetchGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Group identifier

#### Output
* output [FetchGroupResponse](#fetchgroupresponse)

### fetchHealthProfiles
Get a list of health profiles


```js
twinehealth.fetchHealthProfiles({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient id to fetch health profile. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[cursor] `string`: Page cursor
  * include `string` (values: patient, questions): List of related resources to include in the response

#### Output
* output [FetchHealthProfilesResponse](#fetchhealthprofilesresponse)

### fetchHealthProfile
Get a health profile by id


```js
twinehealth.fetchHealthProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Health profile identifier
  * include `string` (values: patient, questions): List of related resources to include in the response

#### Output
* output [FetchHealthProfileResponse](#fetchhealthprofileresponse)

### fetchHealthProfileAnswers
Get a list of health profile answers


```js
twinehealth.fetchHealthProfileAnswers({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient id to fetch healt profile answers. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[cursor] `string`: Page cursor
  * include `string` (values: patient): List of related resources to include in the response

#### Output
* output [FetchHealthProfileAnswersResponse](#fetchhealthprofileanswersresponse)

### fetchHealthProfileAnswer
Get a health profile answer by id


```js
twinehealth.fetchHealthProfileAnswer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Health profile answer identifier
  * include `string` (values: patient): List of related resources to include in the response

#### Output
* output [FetchHealthProfileAnswerResponse](#fetchhealthprofileanswerresponse)

### fetchHealthProfileQuestions
Get a list of health profile questions


```js
twinehealth.fetchHealthProfileQuestions({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient id to fetch healt profile questions. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
  * include `string` (values: question_definition, answer): List of related resources to include in the response

#### Output
* output [FetchHealthProfileQuestionsResponse](#fetchhealthprofilequestionsresponse)

### fetchHealthProfileQuestion
Get a health profile by id


```js
twinehealth.fetchHealthProfileQuestion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Health profile question identifier
  * include `string` (values: question_definition, answer): List of related resources to include in the response

#### Output
* output [FetchHealthProfileQuestionResponse](#fetchhealthprofilequestionresponse)

### fetchHealthQuestionDefinitions
Get a list of all health question definitions


```js
twinehealth.fetchHealthQuestionDefinitions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [FetchHealthQuestionDefinitionsResponse](#fetchhealthquestiondefinitionsresponse)

### fetchHealthQuestionDefinition
Get a health question definition by id


```js
twinehealth.fetchHealthQuestionDefinition({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Health question definition identifier

#### Output
* output [FetchHealthQuestionDefinitionResponse](#fetchhealthquestiondefinitionresponse)

### createToken
Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.

Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
using `application/json` the body should have a body in the following format instead of nesting under
`data.attributes`:
```
{
  "grant_type": "client_credentials",
  "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
  "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
}
```



```js
twinehealth.createToken({
  "body": {
    "data": {
      "attributes": {
        "client_id": "",
        "grant_type": ""
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * include `string` (values: groups, organization): List of related resources to include in the response
  * body **required** [CreateTokenRequest](#createtokenrequest)

#### Output
* output [CreateTokenResponse](#createtokenresponse)

### fetchTokenGroups
Get the list of groups a token can be used to access.


```js
twinehealth.fetchTokenGroups({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Token identifier

#### Output
* output [FetchGroupsResponse](#fetchgroupsresponse)

### fetchTokenOrganization
Get the organization a token can be used to access.


```js
twinehealth.fetchTokenOrganization({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Token identifier

#### Output
* output [FetchOrganizationResponse](#fetchorganizationresponse)

### fetchOrganization
Get an organization record by id.


```js
twinehealth.fetchOrganization({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Organization identifier

#### Output
* output [FetchOrganizationResponse](#fetchorganizationresponse)

### fetchPatients
Get a list of patients.


```js
twinehealth.fetchPatients({}, context)
```

#### Input
* input `object`
  * filter[groups] `string`: Comma-separated list of group ids. Note that either `filter[group]` or `filter[organization]` must be specified.
  * filter[organization] `string`: Fitbit Plus organization id. Note that either `filter[group]` or `filter[organization]` must be specified.
  * filter[identifier][system] `string`: Identifier system (example: "MyEHR") - requires a "filter[identifier][value]" parameter
  * filter[identifier][value] `string`: Identifier value (example: "12345") - requires a "filter[identifier][system]" parameter
  * filter[archived] `boolean`: If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived.
  * filter[created_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[updated_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[cursor] `string`: Page cursor

#### Output
* output [FetchPatientsResponse](#fetchpatientsresponse)

### createPatient
Create a patient record.

Example for creating a patient with a group specified using `meta.query` instead of `id`:

```JSON
{
  "data": {
    "type": "patient",
    "attributes": {
      "first_name": "Andrew",
      "last_name": "Smith"
    },
    "relationships": {
      "groups": {
        "data": [
          {
            "type": "group",
            "meta": {
              "query": {
                "organization": "58c88de7c93eb96357a87033",
                "name": "Patients Lead"
              }
            }
          }
        ]
      }
    }
  }
}
```



```js
twinehealth.createPatient({
  "body": {
    "data": {
      "type": "",
      "attributes": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreatePatientRequest](#createpatientrequest)

#### Output
* output [CreatePatientResponse](#createpatientresponse)

### upsertPatient
Create a new patient or update an existing patient


```js
twinehealth.upsertPatient({
  "body": {
    "meta": {
      "query": {
        "identifier": {},
        "groups": []
      }
    },
    "data": {
      "type": "",
      "attributes": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UpsertPatientRequest](#upsertpatientrequest)

#### Output
* output [CreatePatientResponse](#createpatientresponse)

### fetchPatient
Gets a patient record by id.


```js
twinehealth.fetchPatient({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient identifier

#### Output
* output [FetchPatientResponse](#fetchpatientresponse)

### updatePatient
Update a patient record.


```js
twinehealth.updatePatient({
  "id": "",
  "body": {
    "data": {
      "type": "",
      "attributes": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient identifier
  * body **required** [UpdatePatientRequest](#updatepatientrequest)

#### Output
* output [UpdatePatientResponse](#updatepatientresponse)

### fetchPatientCoaches
Get the list of coaches for a patient.


```js
twinehealth.fetchPatientCoaches({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient identifier

#### Output
* output [FetchCoachesResponse](#fetchcoachesresponse)

### fetchPatientGroups
Get the list of groups for a patient.


```js
twinehealth.fetchPatientGroups({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient identifier

#### Output
* output [FetchGroupsResponse](#fetchgroupsresponse)

### fetchPatientHealthMetrics
Get a list of patient health metrics.


```js
twinehealth.fetchPatientHealthMetrics({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Filter the patient health metrics for a specified patient. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[cursor] `string`: Page cursor

#### Output
* output [FetchPatientHealthMetricResponse](#fetchpatienthealthmetricresponse)

### createPatientHealthMetric
Create one or more patient health metrics.

Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:

```JSON
  {
    "data": {
      "type": "patient_health_metric",
       "attributes": {
         "code": {
           "system": "LOINC",
           "value": "13457-7"
         },
         "type": "ldl_cholesterol",
         "occurred_at": "2017-03-14T11:00:57.000Z",
         "value": 121,
         "unit": "mg/dl"
      },
      "relationships": {
        "patient": {
          "data": {
            "type": "patient",
            "meta": {
              "query": {
                "identifier": {
                  "system": "medical-record-number",
                  "value": "121212"
                },
                "organization": "58c4554710123c5c40dbab81"
              }
            }
          }
        }
      }
    }
  }
```



```js
twinehealth.createPatientHealthMetric({
  "body": {
    "data": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreatePatientHealthMetricRequest](#createpatienthealthmetricrequest)

#### Output
* output [CreatePatientHealthMetricResponse](#createpatienthealthmetricresponse)

### fetchPatientHealthMetric
Get the plan summary for a patient.


```js
twinehealth.fetchPatientHealthMetric({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient health metric identifier

#### Output
* output [FetchPatientHealthMetricResponse](#fetchpatienthealthmetricresponse)

### fetchPatientPlanSummaries
Get a list of patient plan summaries


```js
twinehealth.fetchPatientPlanSummaries({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient id to fetch plan summary for. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * include `string` (values: actions, bundles, patient, current_results): List of related resources to include in the response

#### Output
* output [FetchPatientPlanSummariesResponse](#fetchpatientplansummariesresponse)

### fetchPatientPlanSummary
Get the plan summary for a patient.


```js
twinehealth.fetchPatientPlanSummary({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Plan summary identifier
  * include `string` (values: actions, bundles, patient, current_results): List of related resources to include in the response

#### Output
* output [FetchPatientPlanSummaryResponse](#fetchpatientplansummaryresponse)

### updatePatientPlanSummary
Update a plan summary record for a patient.


```js
twinehealth.updatePatientPlanSummary({
  "id": "",
  "body": {
    "data": {
      "id": "",
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Plan summary identifier
  * body **required** [UpdatePatientPlanSummaryRequest](#updatepatientplansummaryrequest)

#### Output
* output [UpdatePatientPlanSummaryResponse](#updatepatientplansummaryresponse)

### fetchPatientHealthResults
Get a list of patient health results.


```js
twinehealth.fetchPatientHealthResults({
  "filter[patient]": ""
}, context)
```

#### Input
* input `object`
  * filter[patient] **required** `string`: Filter the patient health results for a specified patient
  * filter[actions] `string`: A comma-separated list of action identifiers
  * filter[start_at] `string`: Filter results that occurred after the passed ISO date and time string
  * filter[end_at] `string`: Filter results that occurred before the passed ISO date and time string
  * filter[threads] `string`: A comma-separated list of thread identifiers
  * filter[created_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * filter[updated_at] `string`: The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
  * page[number] `integer`: Page number
  * page[size] `integer`: Page size
  * page[limit] `integer`: Page limit
  * page[after] `string`: Page cursor

#### Output
* output [FetchPatientHealthResultResponse](#fetchpatienthealthresultresponse)

### fetchPatientHealthResult
Get patient health result by id.


```js
twinehealth.fetchPatientHealthResult({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Patient health result identifier

#### Output
* output [FetchPatientHealthResultResponse](#fetchpatienthealthresultresponse)

### fetchRewards
Get a list of rewards matching the specified filters.


```js
twinehealth.fetchRewards({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[reward_program_activation] `string`: Reward program activation identifier
  * filter[thread] `string`: Thread identifier
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.

#### Output
* output [FetchRewardsResponse](#fetchrewardsresponse)

### createReward
Create a reward for a patient.


```js
twinehealth.createReward({
  "body": {
    "data": {
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRewardRequest](#createrewardrequest)

#### Output
* output [CreateRewardResponse](#createrewardresponse)

### fetchReward
Get a reward record by id.


```js
twinehealth.fetchReward({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward identifier

#### Output
* output [FetchRewardResponse](#fetchrewardresponse)

### fetchRewardEarnings
Get a list of reward earnings matching the specified filters.


```js
twinehealth.fetchRewardEarnings({
  "filter[groups]": "",
  "filter[patient]": ""
}, context)
```

#### Input
* input `object`
  * filter[groups] **required** `string`: Group identifiers
  * filter[patient] **required** `string`: Patient identifier
  * filter[ready_for_fulfillment] `boolean`: If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null.

#### Output
* output [FetchRewardEarningsResponse](#fetchrewardearningsresponse)

### createRewardEarning
Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.


```js
twinehealth.createRewardEarning({
  "body": {
    "data": {
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRewardEarningRequest](#createrewardearningrequest)

#### Output
* output [CreateRewardEarningResponse](#createrewardearningresponse)

### fetchRewardEarning
Get a reward earning record by id.


```js
twinehealth.fetchRewardEarning({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward earning identifier

#### Output
* output [FetchRewardEarningResponse](#fetchrewardearningresponse)

### fetchRewardEarningFulfillments
Get a list of reward earning fulfillments matching the specified filters.


```js
twinehealth.fetchRewardEarningFulfillments({
  "filter[patient]": ""
}, context)
```

#### Input
* input `object`
  * filter[patient] **required** `string`: Patient identifier

#### Output
* output [FetchRewardEarningFulfillmentsResponse](#fetchrewardearningfulfillmentsresponse)

### createRewardEarningFulfillment
Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.


```js
twinehealth.createRewardEarningFulfillment({
  "body": {
    "data": {
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRewardEarningFulfillmentRequest](#createrewardearningfulfillmentrequest)

#### Output
* output [CreateRewardEarningFulfillmentResponse](#createrewardearningfulfillmentresponse)

### fetchRewardEarningFulfillment
Get a reward earning fulfillment record by id.


```js
twinehealth.fetchRewardEarningFulfillment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward earning fulfillment identifier

#### Output
* output [FetchRewardEarningFulfillmentResponse](#fetchrewardearningfulfillmentresponse)

### fetchRewardPrograms
Get a list of reward programs matching the specified filters.


```js
twinehealth.fetchRewardPrograms({}, context)
```

#### Input
* input `object`
  * filter[groups] `string`: Comma-separated list of group identifiers. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.

#### Output
* output [FetchRewardProgramsResponse](#fetchrewardprogramsresponse)

### createRewardProgram
Create a reward program for a group.


```js
twinehealth.createRewardProgram({
  "body": {
    "data": {
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRewardProgramRequest](#createrewardprogramrequest)

#### Output
* output [CreateRewardProgramResponse](#createrewardprogramresponse)

### fetchRewardProgram
Get a reward program record by id.


```js
twinehealth.fetchRewardProgram({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward program identifier

#### Output
* output [FetchRewardProgramResponse](#fetchrewardprogramresponse)

### fetchRewardProgramGroup
Get the group related to a reward program.


```js
twinehealth.fetchRewardProgramGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward program identifier

#### Output
* output [FetchGroupsResponse](#fetchgroupsresponse)

### fetchRewardProgramActivations
Get a list of reward program activations matching the specified filters.


```js
twinehealth.fetchRewardProgramActivations({}, context)
```

#### Input
* input `object`
  * filter[patient] `string`: Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[groups] `string`: Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
  * filter[organization] `string`: Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.

#### Output
* output [FetchRewardProgramActivationsResponse](#fetchrewardprogramactivationsresponse)

### createRewardProgramActivation
Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.


```js
twinehealth.createRewardProgramActivation({
  "body": {
    "data": {
      "type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRewardProgramActivationRequest](#createrewardprogramactivationrequest)

#### Output
* output [CreateRewardProgramActivationResponse](#createrewardprogramactivationresponse)

### fetchRewardProgramActivation
Get a reward program activationrecord by id.


```js
twinehealth.fetchRewardProgramActivation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Reward program activation identifier

#### Output
* output [FetchRewardProgramActivationResponse](#fetchrewardprogramactivationresponse)



## Definitions

### ActionMetric
* ActionMetric `object`
  * goal `object`
  * metric_type `string`
  * unit `string`
  * validations `object`
    * maximum `object`
      * unit `string`
      * value `number`
    * minimum `object`
      * unit `string`
      * value `number`

### ActionResource
* ActionResource `object`
  * attributes `object`
    * _thread `string`
    * adherence `object`
      * complete `integer`
      * due `integer`
      * streak `object`
        * count `integer`
        * updated_at `string`
    * details `object`
    * effective_from **required** `string`
    * effective_to `string`
    * frequency_goal `object`
      * weeks `object`
        * days `array`
          * items `integer` (values: 0, 1, 2, 3, 4, 5, 6): Days of week that the action is scheduled for. Zero-indexed, ex 0 represents Sunday, etc.
    * identifiers `array`
      * items [Identifier](#identifier)
    * intake `object`
    * metric_required `boolean`
    * metrics `array`
      * items [ActionMetric](#actionmetric)
    * static_title `string`
    * title **required** `string`
    * tracking `boolean`
    * type **required** `string` (values: other_lifestyle)
    * windows `array`
      * items [ActionWindow](#actionwindow)
  * id **required** `string`
  * relationships `object`
    * plan `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
  * type **required** `string`

### ActionWindow
* ActionWindow `object`
  * _id `string`
  * title `string`
  * type **required** `string`

### Address
* Address `object`
  * city `string`
  * country `string`
  * district `string`
  * lines `array`
    * items `string`
  * postal_code `string`
  * state `string`
  * text `string`
  * type `string`
  * use `string`

### ArchiveHistory
* ArchiveHistory `object`
  * archived `boolean`
  * modified_at `string`
  * notes `string`
  * reason `string`

### BundleResource
* BundleResource `object`
  * attributes `object`
    * _thread `string`
    * effective_from **required** `string`
    * effective_to `string`
    * title **required** `string`
    * type **required** `string`
  * id **required** `string`
  * relationships `object`
    * actions `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
    * plan `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
  * type **required** `string`

### CalendarEventResource
* CalendarEventResource `object`
  * attributes `object`
    * all_day `boolean`: True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day.
    * attendees `array`: List of attendees for the calendar event
      * items `object`
        * response_status `string` (values: needsAction, declined, tentative, accepted): Status of responses from attendees
        * user `string`
    * completed_at `string`: The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type.
    * completed_by `object`: The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type.
    * description `string`
    * end_at `string`: The date and time when the calendar event ends. Not valid for `plan-check-in` event type.
    * location `string`
    * start_at `string`: The date and time when the calendar event starts
    * time_zone `string`: The time zone in which the dates for the calendar event are specified
    * title `string`: The title of the calendar event. Must not be empty or null
    * type `string` (values: plan-check-in, reminder, telephone-call, office-visit, video-call): The type of calendar event. Immutable after event creation.
  * id `string`
  * links `object`
    * self `string`
  * relationships `object`
    * owner `object`: The owner is the patient for whom the calendar event is created specificially for
      * data **required** `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
  * type `string` (values: calendar_event)

### CalendarEventResponseResource
* CalendarEventResponseResource `object`
  * attributes `object`
    * attendee `object`: The attendee in the attendees list of the calendar event.
    * response_status `string` (values: accepted, declined, tentative): The response status for the attendee.
  * id `string`
  * links `object`
    * self `string`
  * relationships `object`
    * calendar_event `object`: The calendar_event is the calendar event for which the calendar event response is created specificially for
      * data **required** `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
    * user `object`: The user is the coach or patient for whom the calendar event response is created specificially for
      * data **required** `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
  * type `string` (values: calendar_event_response)

### CoachResource
* CoachResource `object`
  * attributes **required** `object`
    * first_name `string`
    * last_name `string`
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * type **required** `string` (values: coach)

### CollectionResponseLinks
* CollectionResponseLinks `object`
  * last `string`
  * next `string`
  * prev `string`
  * self `string`

### CreateActionRequest
* CreateActionRequest `object`
  * data **required** [ActionResource](#actionresource)

### CreateActionResponse
* CreateActionResponse `object`
  * data **required** [ActionResource](#actionresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateBundleRequest
* CreateBundleRequest `object`
  * data **required** [BundleResource](#bundleresource)

### CreateBundleResponse
* CreateBundleResponse `object`
  * data **required** [BundleResource](#bundleresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateCalendarEventRequest
* CreateCalendarEventRequest `object`
  * data **required** `object`
    * attributes **required**
      * all_day `boolean`: True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day.
      * attendees `array`: List of attendees for the calendar event
        * items `object`
          * response_status `string` (values: needsAction, declined, tentative, accepted): Status of responses from attendees
          * user `string`
      * completed_at `string`: The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type.
      * completed_by `object`: The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type.
      * description `string`
      * end_at `string`: The date and time when the calendar event ends. Not valid for `plan-check-in` event type.
      * location `string`
      * start_at `string`: The date and time when the calendar event starts
      * time_zone `string`: The time zone in which the dates for the calendar event are specified
      * title `string`: The title of the calendar event. Must not be empty or null
      * type `string` (values: plan-check-in, reminder, telephone-call, office-visit, video-call): The type of calendar event. Immutable after event creation.
    * relationships **required** `object`
      * owner `object`
        * data **required** [CalendarEventResource/properties/relationships/properties/owner/properties/data](#calendareventresource/properties/relationships/properties/owner/properties/data)
    * type **required** [CalendarEventResource/properties/type](#calendareventresource/properties/type)

### CreateCalendarEventResponse
* CreateCalendarEventResponse `object`
  * data [CalendarEventResource](#calendareventresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateCalendarEventResponseRequest
* CreateCalendarEventResponseRequest `object`
  * data **required** `object`
    * attributes **required**
      * attendee `object`: The attendee in the attendees list of the calendar event.
      * response_status `string` (values: accepted, declined, tentative): The response status for the attendee.
    * relationships **required** `object`
      * calendar_event `object`
        * data **required** [CalendarEventResponseResource/properties/relationships/properties/calendar_event/properties/data](#calendareventresponseresource/properties/relationships/properties/calendar_event/properties/data)
      * user `object`
        * data **required** [CalendarEventResponseResource/properties/relationships/properties/user/properties/data](#calendareventresponseresource/properties/relationships/properties/user/properties/data)
    * type **required** [CalendarEventResponseResource/properties/type](#calendareventresponseresource/properties/type)

### CreateGroupRequest
* CreateGroupRequest `object`
  * data **required** [GroupResource](#groupresource)

### CreateGroupResponse
* CreateGroupResponse `object`
  * data **required** [GroupResource](#groupresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateOrUpdateErrorResponse
* CreateOrUpdateErrorResponse `object`
  * errors [Error](#error)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateOrUpdateMetaResponse
* CreateOrUpdateMetaResponse `object`
  * ignored `array`
    * items `string`
  * req_id `string`

### CreatePatientHealthMetricRequest
* CreatePatientHealthMetricRequest `object`
  * data **required** [PatientHealthMetricCreateResource](#patienthealthmetriccreateresource)
  * meta `object`
    * ignore_duplicates `boolean`: If `true`, the patient health metric will be ignored if there is an existing patient health metric for

### CreatePatientHealthMetricResponse
* CreatePatientHealthMetricResponse `object`
  * data **required** [PatientHealthMetricResource](#patienthealthmetricresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreatePatientRequest
* CreatePatientRequest `object`
  * data **required** [PatientCreateResource](#patientcreateresource)
  * meta `object`
    * ignore_duplicates `boolean`: If `true`, patients with any conflicting identifiers (same `system` and `value`) will be ignored.

### CreatePatientResponse
* CreatePatientResponse `object`
  * data **required** [PatientResource](#patientresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateRewardEarningFulfillmentRequest
* CreateRewardEarningFulfillmentRequest `object`
  * data **required** [RewardEarningFulfillmentResource](#rewardearningfulfillmentresource)

### CreateRewardEarningFulfillmentResponse
* CreateRewardEarningFulfillmentResponse `object`
  * data **required** [RewardEarningFulfillmentResource](#rewardearningfulfillmentresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateRewardEarningRequest
* CreateRewardEarningRequest `object`
  * data **required** [RewardEarningResource](#rewardearningresource)

### CreateRewardEarningResponse
* CreateRewardEarningResponse `object`
  * data **required** [RewardEarningResource](#rewardearningresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateRewardProgramActivationRequest
* CreateRewardProgramActivationRequest `object`
  * data **required** [RewardProgramActivationResource](#rewardprogramactivationresource)

### CreateRewardProgramActivationResponse
* CreateRewardProgramActivationResponse `object`
  * data **required** [RewardProgramActivationResource](#rewardprogramactivationresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateRewardProgramRequest
* CreateRewardProgramRequest `object`
  * data **required** [RewardProgramResource](#rewardprogramresource)

### CreateRewardProgramResponse
* CreateRewardProgramResponse `object`
  * data **required** [RewardProgramResource](#rewardprogramresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateRewardRequest
* CreateRewardRequest `object`
  * data **required** [RewardResource](#rewardresource)

### CreateRewardResponse
* CreateRewardResponse `object`
  * data **required** [RewardResource](#rewardresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### CreateTokenRequest
* CreateTokenRequest `object`
  * data **required** `object`
    * attributes **required** `object`
      * client_id **required** `string`: Contact Fitbit Plus API Support to get a client id and secret.
      * client_secret `string`: Contact Fitbit Plus API Support to get a client id and secret. Secret is required if grant_type is "client_credentials"
      * grant_type **required** `string` (values: refresh_token, client_credentials)
      * refresh_token `string`: Required if grant_type is "refresh_token"
    * type `string` (values: token)

### CreateTokenResponse
* CreateTokenResponse `object`
  * data **required** [TokenResource](#tokenresource)
  * included `array`
    * items [GroupResource](#groupresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### EmailHistoryResource
* EmailHistoryResource `object`
  * attributes `object`
    * email_address `string`: Address email was sent to.
    * email_type `string`: Type of email.
    * send_time `string`: Time email was sent.
    * status_times `object`: Status of email. Multiple statuses may be defined. The current status is the one with the most recent date.
      * bounce `string`: Time email was bounced.
      * click `string`: Time email was clicked.
      * deferred `string`: Time email was deferred.
      * delivered `string`: Time email was delivered.
      * dropped `string`: Time email was dropped.
      * open `string`: Time email was opened.
      * processed `string`: Time email was processed.
      * spamreport `string`: Time email was reported as spam.
      * unsubscribe `string`: Time email was unsubscribed from.
    * twine_email_id `string`: Unique identifier for this email.
  * id `string`
  * relationships `object`
    * receiver `object`
      * data `object`
        * id `string`
        * type `string`
    * sender `object`
      * data `object`
        * id `string`
        * type `string`
  * type **required** `string`

### Error
* Error `object`
  * code `string` (values: Forbidden, InvalidParameter, InvalidBodyParameter, ResourceNotFound, Unauthorized, InvalidCredentials, InvalidGrantType)
  * detail `string`
  * source `object`
    * parameter `string`
    * pointer `string`
  * status `string`
  * title `string`

### FetchActionResponse
* FetchActionResponse `object`
  * data **required** [ActionResource](#actionresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchBundleResponse
* FetchBundleResponse `object`
  * data **required** [BundleResource](#bundleresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchCalendarEventResponse
* FetchCalendarEventResponse `object`
  * data [CalendarEventResource](#calendareventresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchCalendarEventsResponse
* FetchCalendarEventsResponse `object`
  * data `array`
    * items [CalendarEventResource](#calendareventresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchCoachResponse
* FetchCoachResponse `object`
  * data **required** [CoachResource](#coachresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchCoachesResponse
* FetchCoachesResponse `object`
  * data **required** `array`
    * items [CoachResource](#coachresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchEmailHistoriesResponse
* FetchEmailHistoriesResponse `object`
  * data **required** `array`
    * items [EmailHistoryResource](#emailhistoryresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchEmailHistoryResponse
* FetchEmailHistoryResponse `object`
  * data **required** [EmailHistoryResource](#emailhistoryresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchErrorResponse
* FetchErrorResponse `object`
  * errors [Error](#error)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchGroupResponse
* FetchGroupResponse `object`
  * data **required** [GroupResource](#groupresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchGroupsResponse
* FetchGroupsResponse `object`
  * data **required** `array`
    * items [GroupResource](#groupresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfileAnswerResponse
* FetchHealthProfileAnswerResponse `object`
  * data **required** [HealthProfileAnswerResource](#healthprofileanswerresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfileAnswersResponse
* FetchHealthProfileAnswersResponse `object`
  * data **required** `array`
    * items [HealthProfileAnswerResource](#healthprofileanswerresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfileQuestionResponse
* FetchHealthProfileQuestionResponse `object`
  * data **required** [HealthProfileQuestionResource](#healthprofilequestionresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfileQuestionsResponse
* FetchHealthProfileQuestionsResponse `object`
  * data **required** `array`
    * items [HealthProfileQuestionResource](#healthprofilequestionresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfileResponse
* FetchHealthProfileResponse `object`
  * data **required** [HealthProfileResource](#healthprofileresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthProfilesResponse
* FetchHealthProfilesResponse `object`
  * data **required** `array`
    * items [HealthProfileResource](#healthprofileresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthQuestionDefinitionResponse
* FetchHealthQuestionDefinitionResponse `object`
  * data **required** [HealthQuestionDefinitionResource](#healthquestiondefinitionresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchHealthQuestionDefinitionsResponse
* FetchHealthQuestionDefinitionsResponse `object`
  * data **required** `array`
    * items [HealthQuestionDefinitionResource](#healthquestiondefinitionresource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchMetaResponse
* FetchMetaResponse `object`
  * count `integer`
  * req_id `string`

### FetchOrganizationResponse
* FetchOrganizationResponse `object`
  * data **required** [OrganizationResource](#organizationresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientHealthMetricResponse
* FetchPatientHealthMetricResponse `object`
  * data **required** `array`
    * items [PatientHealthMetricResource](#patienthealthmetricresource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientHealthResultResponse
* FetchPatientHealthResultResponse `object`
  * data **required** `array`
    * items [PatientHealthResultResource](#patienthealthresultresource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientPlanSummariesResponse
* FetchPatientPlanSummariesResponse `object`
  * data **required** `array`
    * items [PatientPlanSummaryResource](#patientplansummaryresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientPlanSummaryResponse
* FetchPatientPlanSummaryResponse `object`
  * data **required** [PatientPlanSummaryResource](#patientplansummaryresource)
  * included `array`: Related resources which are included in the response based on the `include` param.
    * items [Resource](#resource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientResponse
* FetchPatientResponse `object`
  * data **required** [PatientResource](#patientresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchPatientsResponse
* FetchPatientsResponse `object`
  * data **required** `array`
    * items [PatientResource](#patientresource)
  * links [CollectionResponseLinks](#collectionresponselinks)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardEarningFulfillmentResponse
* FetchRewardEarningFulfillmentResponse `object`
  * data **required** [RewardEarningFulfillmentResource](#rewardearningfulfillmentresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardEarningFulfillmentsResponse
* FetchRewardEarningFulfillmentsResponse `object`
  * data **required** `array`
    * items [RewardEarningFulfillmentResource](#rewardearningfulfillmentresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardEarningResponse
* FetchRewardEarningResponse `object`
  * data **required** [RewardEarningResource](#rewardearningresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardEarningsResponse
* FetchRewardEarningsResponse `object`
  * data **required** `array`
    * items [RewardEarningResource](#rewardearningresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardProgramActivationResponse
* FetchRewardProgramActivationResponse `object`
  * data **required** [RewardProgramActivationResource](#rewardprogramactivationresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardProgramActivationsResponse
* FetchRewardProgramActivationsResponse `object`
  * data **required** `array`
    * items [RewardProgramActivationResource](#rewardprogramactivationresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardProgramResponse
* FetchRewardProgramResponse `object`
  * data **required** [RewardProgramResource](#rewardprogramresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardProgramsResponse
* FetchRewardProgramsResponse `object`
  * data **required** `array`
    * items [RewardProgramResource](#rewardprogramresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardResponse
* FetchRewardResponse `object`
  * data **required** [RewardResource](#rewardresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### FetchRewardsResponse
* FetchRewardsResponse `object`
  * data **required** `array`
    * items [RewardResource](#rewardresource)
  * meta [FetchMetaResponse](#fetchmetaresponse)

### GroupResource
* GroupResource `object`
  * attributes **required** `object`
    * bio `string`: A description of the group
    * name **required** `string`: The name of the group
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * type **required** `string` (values: group)

### HealthProfileAnswerResource
* HealthProfileAnswerResource `object`
  * attributes `object`
    * history `array`: List of details of previous answers for a health profile question
      * items `object`: The details of a previous answer for a health profile question
        * _created_by `string`: The id of the patient or coach who answered the health profile question
        * answered_at `string`: The date when the health profile question is answered
        * value `string`: The value of the answer entered for the health profile question
    * latest `object`: The details of the latest answer for a health profile question
      * _created_by `string`: The id of the patient or coach who answered the health profile question
      * answered_at `string`: The date when the health profile question is answered
      * value `string`: The value of the answer entered for the health profile question
    * question_id `string`
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
  * type **required** `string`

### HealthProfileQuestionResource
* HealthProfileQuestionResource `object`
  * attributes `object`: A health profile question does not have any attribute since it only relates an answer to the corresponding question definition.
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * relationships `object`
    * answer `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
    * profile `object`
      * links `object`
        * related `string`
    * question_definition `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
        * links `object`
          * related `string`
  * type **required** `string`

### HealthProfileResource
* HealthProfileResource `object`
  * attributes `object`
    * stats `array`: List of category, answered and total counts for questions in the health profile
      * items `object`: The category, answered and total counts for questions in the health profile
        * answered `number`
        * category `string` (values: lifestyle_behaviors, mental_wellbeing, preventative_care, overall)
        * total `number`
  * id `string`
  * links `object`
    * self **required** `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
    * questions `object`
      * data `array`
        * items `object`
          * id `string`
          * type `string`
      * links `object`
        * related `string`
  * type **required** `string`

### HealthQuestionDefinitionResource
* HealthQuestionDefinitionResource `object`
  * attributes `object`
    * category `string` (values: lifestyle_behaviors, mental_wellbeing, preventative_care): The category for the health profile definition
    * format `object`: The list of formats for the health profile definition
      * data `array`
        * items `object`: The label, value and icon for the answer choices for the question
          * icon `string`
          * label `string`
          * value `string`
      * type `string`
    * requirements `array`: The lsit of age and gender requirements for the question to be included
      * items `object`: The age and gender requirement for the question to be included
        * property `string`
        * shouldBeEqual `boolean`: Specifies if the value in property should be equal to the one in value
        * shouldBeGreaterThan `number`: Specifies if the value in property should be greater than the one in value
        * shouldBeLessThan `number`: Specifies if the value in property should be less than the one in value
        * value `string`: The value to be compared with the one in property, based on shouldBeEqual, shouldBeGreaterThan, or shouldBeLessThan
    * text `string`: The question text which corresponds to the answer choices
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * relationships `object`
  * type **required** `string`

### Identifier
* Identifier `object`
  * label `string`
  * system **required** `string`
  * value **required** `string`

### OrganizationResource
* OrganizationResource `object`
  * attributes **required** `object`
    * name **required** `string`
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * type **required** `string` (values: organization)

### PatientCreateResource
* PatientCreateResource `object`
  * attributes **required** `object`
    * addresses `array`
      * items [Address](#address)
    * archive_history `array`
      * items [ArchiveHistory](#archivehistory)
    * archived `boolean`
    * birth_date `string`
    * email_address `string`
    * enrolled_at `string`
    * first_access_at `string`
    * first_name `string`
    * gender `string` (values: male, female, other)
    * identifiers `array`
      * items [PatientIdentifier](#patientidentifier)
    * invited_at `string`
    * last_access_at `string`
    * last_name `string`
    * note `string`: Coach's note about the patient. Not visible to the patient.
    * phone_numbers `array`
      * items [PhoneNumber](#phonenumber)
    * statement `object`: A patient's motivation statement.
      * updated_at `string`
      * updated_by `string`
      * value `string`
    * updated_at `string`
  * id `string`
  * links `object`
    * self `string`
    * twine_web_app `string`: A link to the patient record in the Fitbit Plus web application.
  * relationships `object`
    * coaches `object`
      * data **required** `array`
        * items `object`
          * id **required** `string`
          * meta `object`
          * type **required** `string` (values: coach)
      * links `object`
        * related `string`
    * groups **required** `object`
      * data **required** `array`
        * items `object`
          * id `string`
          * type **required** `string` (values: group)
  * type **required** `string` (values: patient)
  * relationships `object`
    * coaches `object`
      * data **required** `array`
        * items `object`
          * id **required** `string`
          * meta `object`
          * type **required** `string` (values: coach)
      * links `object`
        * related `string`
    * groups **required** `object`
      * data **required** `array`
        * items `object`
          * id `string`: Required if the `meta.query` is not defined.
          * meta `object`: Allows the specification of a query for a group rather than providing a group id directly
          * type **required** `string` (values: group)

### PatientHealthMetricCreateResource
* PatientHealthMetricCreateResource `object`
  * attributes `object`
    * code `object`
      * system **required** `string`
      * value **required** `string`
    * diastolic `number`
    * occurred_at `string`
    * systolic `number`
    * type `string` (values: blood_pressure_systolic, blood_pressure_diastolic, hemoglobin_a1c, hdl_cholesterol, ldl_cholesterol, total_cholesterol, triglycerides, blood_urea_nitrogen, creatinine, hemoglobin, hematocrit, total_serum_iron, thyroid_stimulating_hormone, free_thyroxine, free_triiodothyronine, total_triiodothyronine, cd4_cell_count, hiv_viral_load, inr, free_testosterone, total_testosterone, c_reactive_protein, prostate_specific_antigen, cotinine, c_peptide, blood_pressure, blood_glucose, weight, heart_rate, body_fat_percentage, body_mass_index, body_temperature, forced_expiratory_volume1, forced_vital_capacity, lean_body_mass, nausea_level, oxygen_saturation, pain_level, peak_expiratory_flow_rate, peripheral_perfusion_index, respiratory_rate, inhaler_usage)
    * unit `string`
  * id **required** `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`: Required if the `meta.query` is not defined.
        * meta `object`: Allows the specification of a query for a patient rather than providing a patient id directly
          * query **required** `object`: The query must return one and only one patient.
        * type `string`
      * links `object`
  * type **required** `string`

### PatientHealthMetricResource
* PatientHealthMetricResource `object`
  * attributes `object`
    * code `object`
      * system **required** `string`
      * value **required** `string`
    * diastolic `number`
    * occurred_at `string`
    * systolic `number`
    * type `string` (values: blood_pressure_systolic, blood_pressure_diastolic, hemoglobin_a1c, hdl_cholesterol, ldl_cholesterol, total_cholesterol, triglycerides, blood_urea_nitrogen, creatinine, hemoglobin, hematocrit, total_serum_iron, thyroid_stimulating_hormone, free_thyroxine, free_triiodothyronine, total_triiodothyronine, cd4_cell_count, hiv_viral_load, inr, free_testosterone, total_testosterone, c_reactive_protein, prostate_specific_antigen, cotinine, c_peptide, blood_pressure, blood_glucose, weight, heart_rate, body_fat_percentage, body_mass_index, body_temperature, forced_expiratory_volume1, forced_vital_capacity, lean_body_mass, nausea_level, oxygen_saturation, pain_level, peak_expiratory_flow_rate, peripheral_perfusion_index, respiratory_rate, inhaler_usage)
    * unit `string`
  * id **required** `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`: Required if the `meta.query` is not defined.
        * meta `object`: Allows the specification of a query for a patient rather than providing a patient id directly
          * query **required** `object`: The query must return one and only one patient.
        * type `string`
      * links `object`
  * type **required** `string`

### PatientHealthResultResource
* PatientHealthResultResource `object`
  * attributes `object`
    * _thread `string`: Links together results. This should be the same as the thread of _action, if it is defined
    * aggregation `string`
    * annotations `array`
      * items `object`
        * text `string`
        * title `string`
    * channel `string`
    * data `object`
    * external_id `string`
    * metric_type `string` (values: blood_pressure_systolic, blood_pressure_diastolic, hemoglobin_a1c, hdl_cholesterol, ldl_cholesterol, total_cholesterol, triglycerides, blood_urea_nitrogen, creatinine, hemoglobin, hematocrit, total_serum_iron, thyroid_stimulating_hormone, free_thyroxine, free_triiodothyronine, total_triiodothyronine, cd4_cell_count, hiv_viral_load, inr, free_testosterone, total_testosterone, c_reactive_protein, prostate_specific_antigen, cotinine, c_peptide, blood_pressure, blood_glucose, weight, heart_rate, body_fat_percentage, body_mass_index, body_temperature, forced_expiratory_volume1, forced_vital_capacity, lean_body_mass, nausea_level, oxygen_saturation, pain_level, peak_expiratory_flow_rate, peripheral_perfusion_index, respiratory_rate, inhaler_usage)
    * occurred_at `string`
    * occurred_at_time_zone `string`
    * skipped `boolean`
    * source `object`
      * name `string`
      * source_id `string`
    * type `string`: Type of result. Usually the same as metric_type except for lifestyle actions
    * window `string`
  * id **required** `string`
  * relationships `object`
    * action `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
    * metric `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
    * patient `object`
      * data `object`
        * id `string`: Required if the `meta.query` is not defined.
        * meta `object`: Allows the specification of a query for a patient rather than providing a patient id directly
          * query **required** `object`: The query must return one and only one patient.
        * type `string`
      * links `object`
  * type **required** `string`

### PatientIdentifier
* PatientIdentifier `object`
  * label `string`
  * system **required** `string`
  * unique `boolean`: If `true`, the combination of system and value must be global unique among all patients and coaches in Fitbit Plus.
  * value **required** `string`

### PatientPlanSummaryResource
* PatientPlanSummaryResource `object`
  * attributes `object`
    * adherence `object`
    * critical `object`
    * effective_from `string`
    * time_zone `string`
    * window_notification_times `object`
      * afternoon `integer`
      * evening `integer`
      * morning `integer`
      * night `integer`
    * window_order `array`
      * items `object`
        * _actions `array`
          * items `string`
        * type `string`
  * id **required** `string`
  * links `object`
    * self **required** `string`
  * relationships `object`
    * actions **required** `object`
      * data `array`
        * items `object`
          * id **required** `string`
          * type **required** `string`
      * links `object`
        * related `string`
    * bundles **required** `object`
      * data `array`
        * items `object`
          * id **required** `string`
          * type **required** `string`
      * links `object`
        * related `string`
    * current_results `object`
      * data `array`
        * items `object`
          * id **required** `string`
          * type **required** `string`
      * links `object`
        * related `string`
    * patient **required** `object`
      * data `object`
        * id `string`
        * type `string`
      * links `object`
        * related `string`
  * type **required** `string` (values: patient_plan_summary)

### PatientResource
* PatientResource `object`
  * attributes **required** `object`
    * addresses `array`
      * items [Address](#address)
    * archive_history `array`
      * items [ArchiveHistory](#archivehistory)
    * archived `boolean`
    * birth_date `string`
    * email_address `string`
    * enrolled_at `string`
    * first_access_at `string`
    * first_name `string`
    * gender `string` (values: male, female, other)
    * identifiers `array`
      * items [PatientIdentifier](#patientidentifier)
    * invited_at `string`
    * last_access_at `string`
    * last_name `string`
    * note `string`: Coach's note about the patient. Not visible to the patient.
    * phone_numbers `array`
      * items [PhoneNumber](#phonenumber)
    * statement `object`: A patient's motivation statement.
      * updated_at `string`
      * updated_by `string`
      * value `string`
    * updated_at `string`
  * id `string`
  * links `object`
    * self `string`
    * twine_web_app `string`: A link to the patient record in the Fitbit Plus web application.
  * relationships `object`
    * coaches `object`
      * data **required** `array`
        * items `object`
          * id **required** `string`
          * meta `object`
          * type **required** `string` (values: coach)
      * links `object`
        * related `string`
    * groups **required** `object`
      * data **required** `array`
        * items `object`
          * id `string`
          * type **required** `string` (values: group)
  * type **required** `string` (values: patient)

### PhoneNumber
* PhoneNumber `object`
  * primary **required** `boolean`
  * type **required** `string` (values: home, work, mobile, home-fax, work-fax, other)
  * value **required** `string`

### Resource
* Resource `object`
  * attributes `object`
  * id `string`
  * type `string`

### RewardEarningFulfillmentResource
* RewardEarningFulfillmentResource `object`
  * attributes `object`
    * fulfilled_at **required** `string`: Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned)
    * fulfilled_unit `string`: Unit of the earned reward that has been fulfilled. (Read-only property)
    * fulfilled_value **required** `number`: Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0)
  * id `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`
        * type `string`
    * reward_earning **required** `object`
      * data `object`
        * id `string`
        * type `string`
  * type **required** `string`

### RewardEarningResource
* RewardEarningResource `object`
  * attributes `object`
    * earned_at **required** `string`: Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired)
    * earned_unit `string`: Unit of the reward that has been earned. (Read-only property)
    * earned_value **required** `number`: Value of the reward that has been earned. (Must not exceed the allocated value for the reward)
    * fulfilled_at `string`: Date at which the reward earning was fulfilled. (Read-only property)
    * fulfilled_value `number`: Value of the earned reward that has been fulfilled. (Read-only property)
    * ready_for_fulfillment `boolean`: If true, the reward earning is ready to be fulfilled, either because the reward program activation was fulfill_as_earned or because the reward program activation has been deactivated. (Read-only property)
  * id `string`
  * relationships `object`
    * group `object`
      * data `object`
        * id `string`
        * type `string`
    * patient `object`
      * data `object`
        * id `string`
        * type `string`
    * reward **required** `object`
      * data `object`
        * id `string`
        * type `string`
    * reward_program_activation `object`
      * data `object`
        * id `string`
        * type `string`
  * type **required** `string`

### RewardProgramActivationResource
* RewardProgramActivationResource `object`
  * attributes `object`
    * activated_at **required** `string`: Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program)
    * active `boolean`: If true, the reward program is currently active.
    * allocated_count `number`: Number of rewards allocated. (Read-only property)
    * budget_unit `string`: Unit of the reward program budget. (Read-only property)
    * deactivated_at `string`: Date at which the reward program was deactivated. (Must be after the activated_at date)
    * earned_count `number`: Number of reward earnings. (Read-only property)
    * expires_at `string`: Date at which the reward program activation expires. (Read-only property set by adding the days_active from the reward program to the activated_at date)
    * fulfill_as_earned `boolean`: If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. (Read-only property denormalized from the reward program)
    * total_allocated_value `number`: Total value of reward allocated. (Read-only property)
    * total_earned_value `number`: Total value of reward earnings. (Read-only property)
  * id `string`
  * relationships `object`
    * patient **required** `object`
      * data `object`
        * id `string`
        * type `string`
    * reward_program **required** `object`
      * data `object`
        * id `string`
        * type `string`
  * type **required** `string`

### RewardProgramResource
* RewardProgramResource `object`
  * attributes `object`
    * budget_unit `string` (values: dollar, point, credit): Unit of the budget for the reard program.
    * budget_value **required** `number`: Value of the budget for the reward program. (Must be greater than 0)
    * description `string`: Description of the reward program - designed to be a comprehensive text description
    * duration_active `number`: Number of days that a program can be active after it has been activated for a patient. (Must be greater than 0)
    * end_at **required** `string`: Date at which the reward program ends. (Must be after the start_at)
    * frozen `boolean`: If true, the reward program cannot be activated for a patient and new rewards cannot be created for the program.
    * fulfill_as_earned `boolean`: If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated.
    * name **required** `string`: Name of the reward program
    * start_at **required** `string`: Date at which the reward program starts.
    * tagline `string`: Tagline of the reward program - designed to be one line
  * id `string`
  * relationships `object`
    * group **required** `object`
      * data **required** `object`
        * id **required** `string`
        * type **required** `string`
  * type **required** `string`

### RewardResource
* RewardResource `object`
  * attributes `object`
    * _thread `string`: Unique string identifying the health action with which the reward is associated.
    * allocated_at **required** `string`: Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires)
    * allocated_unit `string`: Unit of the reward program. (Read-only property)
    * allocated_value **required** `number`: Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation)
    * description **required** `string`: Description of the reward.
    * earned_at `string`: Date at which the reward was earned. (Read-only property)
    * earned_value `number`: Value of the reward that has been earned. (Read-only property)
    * fulfilled_at `string`: Date at which the reward earning was fulfilled. (Read-only property)
    * fulfilled_value `number`: Value of the earned reward that has been fulfilled. (Read-only property)
    * target_at `string`: Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date)
  * id `string`
  * relationships `object`
    * patient `object`
      * data `object`
        * id `string`
        * type `string`
    * reward_program_activation **required** `object`
      * data `object`
        * id `string`
        * type `string`
  * type **required** `string`

### TokenResource
* TokenResource `object`
  * attributes `object`
    * access_token **required** `string`
    * expires_in **required** `integer`
    * refresh_token **required** `string`
    * token_type **required** `string` (values: bearer)
  * id **required** `string`
  * relationships `object`
    * groups `object`
      * data **required** `array`
        * items `object`
          * id **required** `string`
          * type **required** `string` (values: group)
      * links **required** `object`
        * related **required** `string`
    * organization `object`
      * data **required** `object`
        * id **required** `string`
        * type **required** `string` (values: organization)
      * links **required** `object`
        * related **required** `string`
  * type **required** `string` (values: token)

### UpdateActionRequest
* UpdateActionRequest `object`
  * data **required** [ActionResource](#actionresource)

### UpdateActionResponse
* UpdateActionResponse `object`
  * data **required** [ActionResource](#actionresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### UpdateBundleRequest
* UpdateBundleRequest `object`
  * data **required** [BundleResource](#bundleresource)

### UpdateBundleResponse
* UpdateBundleResponse `object`
  * data **required** [BundleResource](#bundleresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### UpdateCalendarEventRequest
* UpdateCalendarEventRequest `object`
  * data `object`
    * attributes
      * all_day `boolean`: True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day.
      * attendees `array`: List of attendees for the calendar event
        * items `object`
          * response_status `string` (values: needsAction, declined, tentative, accepted): Status of responses from attendees
          * user `string`
      * completed_at `string`: The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type.
      * completed_by `object`: The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type.
      * description `string`
      * end_at `string`: The date and time when the calendar event ends. Not valid for `plan-check-in` event type.
      * location `string`
      * start_at `string`: The date and time when the calendar event starts
      * time_zone `string`: The time zone in which the dates for the calendar event are specified
      * title `string`: The title of the calendar event. Must not be empty or null
      * type `string` (values: plan-check-in, reminder, telephone-call, office-visit, video-call): The type of calendar event. Immutable after event creation.
    * id **required** [CalendarEventResource/properties/id](#calendareventresource/properties/id)
    * relationships `object`
      * owner `object`
        * data [CalendarEventResource/properties/relationships/properties/owner/properties/data](#calendareventresource/properties/relationships/properties/owner/properties/data)
    * type **required** [CalendarEventResource/properties/type](#calendareventresource/properties/type)

### UpdateCalendarEventResponse
* UpdateCalendarEventResponse `object`
  * data [CalendarEventResource](#calendareventresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### UpdatePatientPlanSummaryRequest
* UpdatePatientPlanSummaryRequest `object`
  * data **required** [PatientPlanSummaryResource](#patientplansummaryresource)

### UpdatePatientPlanSummaryResponse
* UpdatePatientPlanSummaryResponse `object`
  * data **required** [PatientPlanSummaryResource](#patientplansummaryresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### UpdatePatientRequest
* UpdatePatientRequest `object`
  * data **required** [PatientResource](#patientresource)

### UpdatePatientResponse
* UpdatePatientResponse `object`
  * data **required** [PatientResource](#patientresource)
  * meta [CreateOrUpdateMetaResponse](#createorupdatemetaresponse)

### UpsertPatientRequest
* UpsertPatientRequest `object`
  * data **required** [PatientResource](#patientresource)
  * meta **required** `object`
    * query **required** `object`
      * groups **required** `array`: Group to create/update patient in.
        * items `string`: ID of group
      * identifier **required** `object`: Identifier to match patient
        * system `string`: Name of system
        * value `string`: Value in system


