# @datafire/google_qpxexpress

Client library for QPX Express

## Installation and Usage
```bash
npm install --save datafire @datafire/google_qpxexpress
```

```js
let datafire = require('datafire');
let google_qpxexpress = require('@datafire/google_qpxexpress').create();

google_qpxexpress.trips.search({}).then(data => {
  console.log(data);
})
```

## Description
Finds the least expensive flights between an origin and a destination.

## Actions
### trips.search
Returns a list of flights.


```js
google_qpxexpress.trips.search({}, context)
```

#### Parameters
* body (object) - A QPX Express search request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

