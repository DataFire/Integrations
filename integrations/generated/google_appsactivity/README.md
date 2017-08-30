# @datafire/google_appsactivity

Client library for G Suite Activity

## Installation and Usage
```bash
npm install --save datafire @datafire/google_appsactivity
```

```js
let datafire = require('datafire');
let google_appsactivity = require('@datafire/google_appsactivity').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_appsactivity.activities.list({}).then(data => {
  console.log(data);
})
```

## Description
Provides a historical view of activity.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_appsactivity.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_appsactivity.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### activities.list
Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.


```js
google_appsactivity.activities.list({}, context)
```

#### Parameters
* drive.ancestorId (string) - Identifies the Drive folder containing the items for which to return activities.
* drive.fileId (string) - Identifies the Drive item to return activities for.
* groupingStrategy (string) - Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
* pageSize (integer) - The maximum number of events to return on a page. The response includes a continuation token if there are more events.
* pageToken (string) - A token to retrieve a specific page of results.
* source (string) - The Google service from which to return activities. Possible values of source are: 
* userId (string) - Indicates the user to return activity for. Use the special value me to indicate the currently authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

