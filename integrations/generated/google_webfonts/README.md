# @datafire/google_webfonts

Client library for Google Fonts Developer

## Installation and Usage
```bash
npm install --save datafire @datafire/google_webfonts
```

```js
let datafire = require('datafire');
let google_webfonts = require('@datafire/google_webfonts').actions;
let context = new datafire.Context();

google_webfonts.webfonts.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).

## Actions
### webfonts.list
Retrieves the list of fonts currently served by the Google Fonts Developer API


```js
google_webfonts.webfonts.list({}, context)
```

#### Parameters
* sort (string) - Enables sorting of the list
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

