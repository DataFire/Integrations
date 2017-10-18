# @datafire/twinehealth

Client library for Twine

## Installation and Usage
```bash
npm install --save datafire @datafire/twinehealth
```

```js
let datafire = require('datafire');
let twinehealth = require('@datafire/twinehealth').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

twinehealth.fetchPatients({}).then(data => {
  console.log(data);
})
```

## Description
# Overview
The Twine Health API is RESTful API. The requests and responses are formated according to the [JSON API](http://jsonapi.org/format/1.0/) specification.

In addition to this documentation, we also provide an [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) "yaml" file describing the API: [Twine API Specification](swagger.yaml).

# Authentication
Authentication for the Twine API is based on the [OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749). Twine currently supports grant types of **client_credentials** and **refresh_token**.

See [POST /oauth/token](#operation/createToken) for details on the request and response formats.
<!-- ReDoc-Inject: <security-definitions> -->


## Actions
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

#### Parameters
* body (object) **required**

### fetchAction
Get a health action from a patient's plan.


```js
twinehealth.fetchAction({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Action identifier

### updateAction
Updte a health action from a patient's plan.


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

#### Parameters
* id (string) **required** - Action identifier
* body (object) **required**

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

#### Parameters
* body (object) **required**

### fetchBundle
Get a bundle from a patient's plan.


```js
twinehealth.fetchBundle({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Bundle identifier

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

#### Parameters
* id (string) **required** - Bundle identifier
* body (object) **required**

### fetchCoach
Get a coach record by id.


```js
twinehealth.fetchCoach({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Coach identifier

### fetchEmailHistories
Get a list of email histories


```js
twinehealth.fetchEmailHistories({}, context)
```

#### Parameters
* filter[receiver] (string) - Twine user id of email recipient. Required if filter[sender] is not defined.
* filter[sender] (string) - Twine user id of email sender. Required if filter[receiver] is not defined.
* filter[emailType] (string) - Type of email
* sort (string) - valid sorts:

### fetchEmailHistory
Get an email history by id


```js
twinehealth.fetchEmailHistory({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - EmailHistory identifier

### fetchGroups
Get a list of groups matching the specified filters.


```js
twinehealth.fetchGroups({
  "filter[organization]": ""
}, context)
```

#### Parameters
* filter[organization] (string) **required** - Organization identifier
* filter[name] (string) - Group name

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

#### Parameters
* body (object) **required**

### fetchGroup
Get a group record by id.


```js
twinehealth.fetchGroup({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Group identifier

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

#### Parameters
* include (string) - List of related resources to include in the response
* body (object) **required**

### fetchTokenGroups
Get the list of groups a token can be used to access.


```js
twinehealth.fetchTokenGroups({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Token identifier

### fetchTokenOrganization
Get the organization a token can be used to access.


```js
twinehealth.fetchTokenOrganization({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Token identifier

### fetchOrganization
Get an organization record by id.


```js
twinehealth.fetchOrganization({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Organization identifier

### fetchPatients
Get a list of patients.


```js
twinehealth.fetchPatients({}, context)
```

#### Parameters
* filter[groups] (string) - Comma-separated list of Twine group ids (either a group or organization filter is required)
* filter[organization] (string) - Twine organization id (either a group or organization filter is required)
* filter[identifier][system] (string) - Identifier system (example: "MyEHR") - requires a "filter[identifier][value]" parameter
* filter[identifier][value] (string) - Identifier value (example: "12345") - requires a "filter[identifier][system]" parameter
* filter[archived] (boolean) - If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived.
* page[number] (integer) - Page number
* page[size] (integer) - Page size

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

#### Parameters
* body (object) **required**

### fetchPatient
Gets a patient record by id.


```js
twinehealth.fetchPatient({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Patient identifier

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

#### Parameters
* id (string) **required** - Patient identifier
* body (object) **required**

### fetchPatientCoaches
Get the list of coaches for a patient.


```js
twinehealth.fetchPatientCoaches({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Patient identifier

### fetchPatientGroups
Get the list of groups for a patient.


```js
twinehealth.fetchPatientGroups({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Patient identifier

### fetchPatientHealthMetrics
Get a list of patient health metrics.


```js
twinehealth.fetchPatientHealthMetrics({
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[patient] (string) **required** - Filter the patient health metrics for a specified patient
* page[number] (integer) - Page number
* page[size] (integer) - Page size

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
         "value": "121",
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

#### Parameters
* body (object) **required**

### fetchPatientHealthMetric
Get the plan summary for a patient.


```js
twinehealth.fetchPatientHealthMetric({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Patient health metric identifier

### fetchPatientPlanSummaries
Get a list of patient plan summaries


```js
twinehealth.fetchPatientPlanSummaries({
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[patient] (string) **required** - Patient id to fetch plan summary for
* include (string) - List of related resources to include in the response

### fetchPatientPlanSummary
Get the plan summary for a patient.


```js
twinehealth.fetchPatientPlanSummary({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Plan summary identifier
* include (string) - List of related resources to include in the response

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

#### Parameters
* id (string) **required** - Plan summary identifier
* body (object) **required**

### fetchRewards
Get a list of rewards matching the specified filters.


```js
twinehealth.fetchRewards({
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[patient] (string) **required** - Patient identifier
* filter[reward_program_activation] (string) - Reward program activation identifier
* filter[thread] (string) - Thread identifier

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

#### Parameters
* body (object) **required**

### fetchReward
Get a reward record by id.


```js
twinehealth.fetchReward({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward identifier

### fetchRewardEarnings
Get a list of reward earnings matching the specified filters.


```js
twinehealth.fetchRewardEarnings({
  "filter[groups]": "",
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[groups] (string) **required** - Group identifiers
* filter[patient] (string) **required** - Patient identifier
* filter[ready_for_fulfillment] (boolean) - If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null.

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

#### Parameters
* body (object) **required**

### fetchRewardEarning
Get a reward earning record by id.


```js
twinehealth.fetchRewardEarning({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward earning identifier

### fetchRewardEarningFulfillments
Get a list of reward earning fulfillments matching the specified filters.


```js
twinehealth.fetchRewardEarningFulfillments({
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[patient] (string) **required** - Patient identifier

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

#### Parameters
* body (object) **required**

### fetchRewardEarningFulfillment
Get a reward earning fulfillment record by id.


```js
twinehealth.fetchRewardEarningFulfillment({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward earning fulfillment identifier

### fetchRewardPrograms
Get a list of reward programs matching the specified filters.


```js
twinehealth.fetchRewardPrograms({
  "filter[groups]": ""
}, context)
```

#### Parameters
* filter[groups] (string) **required** - Comma-separated list of group identifiers

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

#### Parameters
* body (object) **required**

### fetchRewardProgram
Get a reward program record by id.


```js
twinehealth.fetchRewardProgram({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward program identifier

### fetchRewardProgramGroup
Get the group related to a reward program.


```js
twinehealth.fetchRewardProgramGroup({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward program identifier

### fetchRewardProgramActivations
Get a list of reward program activations matching the specified filters.


```js
twinehealth.fetchRewardProgramActivations({
  "filter[patient]": ""
}, context)
```

#### Parameters
* filter[patient] (string) **required** - Patient identifier

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

#### Parameters
* body (object) **required**

### fetchRewardProgramActivation
Get a reward program activationrecord by id.


```js
twinehealth.fetchRewardProgramActivation({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Reward program activation identifier

