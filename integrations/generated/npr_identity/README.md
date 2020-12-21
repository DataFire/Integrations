# @datafire/npr_identity

Client library for NPR Identity Service

## Installation and Usage
```bash
npm install --save @datafire/npr_identity
```
```js
let npr_identity = require('@datafire/npr_identity').create({
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

The entry point to user-specific information

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
npr_identity.oauthCallback({
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
npr_identity.oauthRefresh(null, context)
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

### postFollowing
After a successful call, this returns a User document with an updated list of affiliations.


```js
npr_identity.postFollowing({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * body **required** [Affiliation](#affiliation)

#### Output
* output [UserDocument](#userdocument)

### updateStations
Right now, only the primary station can be changed. Previously selected stations will not be deleted, but the new station will be moved to first in the array.


```js
npr_identity.updateStations({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * body `array`
    * items `integer`

#### Output
* output [UserDocument](#userdocument)

### getUser
After a successful login, the client should send a `GET` call approximately once an hour to refresh the user data.


```js
npr_identity.getUser({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.

#### Output
* output [UserDocument](#userdocument)

### inheritFromTempUser
This can and should only be used by clients who have access to the `temporary_user` grant type.
    Third-party developers do not have access to this grant type by default, and will not need this endpoint.


```js
npr_identity.inheritFromTempUser({
  "Authorization": "",
  "temp_user": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * temp_user **required** `integer`: The temporary user's ID before the user registered or logged in

#### Output
* output [UserDocument](#userdocument)



## Definitions

### AbstractCDocLink
* AbstractCDocLink
  * href **required** `string`: The link to be followed
  * content-type **required** `string`: The MIME type of the response of this link

### AbstractLink
* AbstractLink `object`
  * href **required** `string`: The link to be followed

### Affiliation
* Affiliation `object`: A program (aggregation) that a given user has shown an affiliation with
  * daysSinceLastListen `integer`: The number of days since a user last listened to a story from this aggregation. Absent if user never listened to the aggregation.
  * following **required** `boolean`: Whether or not the user is following the aggregation. When changing affiliation status, the client is expected to toggle this value and then send the entire object back.
  * href **required** `string`: A link to more details about the program from the NPR Story API
  * id **required** `string`: A unique identifier for the aggregation (program)
  * notif_following `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they follow.
    * items `string`
  * notif_rated `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they have highly rated.
    * items `string`
  * rating `number`: The user's average rating for this affiliation on a scale of 0-1. Absent if user never listened to the aggregation.
  * title `string`: The title for the aggregation (program)

### Algolia
* Algolia `object`: Parameters for querying the Algolia Search SDK for content
  * apiKey **required** `string`: A search API key for this user

### Cohort
* Cohort `object`: An experimental grouping for User Experience A/B Testing
  * id **required** `string`: A short ID for this cohort; ignored on a PUT
  * name **required** `string`: A text string identifying the cohort, useful for metrics; ignored on a PUT
  * public `string`: For internal use only; represents the current configuration file being used by the Listening Service
  * test `string`: For internal use only; represents the test configuration file being used by the Listening Service

### CollectionDocument
* CollectionDocument `object`: Base Collection.Doc+JSON output
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used

### Error
* Error `object`: A serialized version of any error encountered when processing this request
  * code **required** `integer`: The error code
  * debug `string`: Additional debug information if debug mode is turned on
  * text `string`: The error description

### ErrorDocument
* ErrorDocument: A Collection.doc+JSON representation of an error result from an API call
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes `object`: Ignore; will be empty for errors
  * errors `array`: A list of encountered errors, ignored on POST, PUT
    * items [Error](#error)
  * items `array`: Ignore; will be empty for errors
    * items `object`
  * links `object`: Ignore; will be empty for errors

### Organization
* Organization `object`: A station that a user has an affiliation with
  * call **required** `string`: Station call letters
  * city **required** `string`: A short description of the station's main market city
  * displayName **required** `string`: A short displayable text field for the end user, strictly text; ignored on PUT
  * donationUrl `string`: Station donation page URL
  * id **required** `string`: Some unique identifier for the organization for the user
  * logo `string`: Station logo image url
  * notif_org `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about their localized station.
    * items `string`
  * serviceId `string`: Some unique identifier for the user's organization's primary service, or null if the org has no services
  * smallLogo `string`: Station logo image url

### UserData
* UserData `object`: Object; see description of a user object below
  * affiliations `array`: Program(s) that the user has positively interacted with
    * items [Affiliation](#affiliation)
  * algolia **required** `array`: Use this information to search Algolia for stories
    * items [Algolia](#algolia)
  * cohort **required** [Cohort](#cohort)
  * email `string`: The user's email address
  * firstName `string`: The user's first name
  * id **required** `string`: Some unique identifier for the user
  * lastName `string`: The user's last name
  * organizations **required** `array`: User's chosen NPR Member Station(s)
    * items [Organization](#organization)
  * totalListeningTime `string`: Internal use only. User's total listening time across all platforms.

### UserDocument
* UserDocument
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [UserData](#userdata)
  * items `array`: Not used, ignored on a PUT
    * items `object`
  * links `object`: A list of links, not used by the Identity Service; ignored on a PUT


