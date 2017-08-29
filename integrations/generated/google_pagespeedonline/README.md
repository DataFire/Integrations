# @datafire/google_pagespeedonline

Client library for PageSpeed Insights

## Installation and Usage
```bash
npm install --save datafire @datafire/google_pagespeedonline
```

```js
let datafire = require('datafire');
let google_pagespeedonline = require('@datafire/google_pagespeedonline').create();

google_pagespeedonline.pagespeedapi.runpagespeed({}).then(data => {
  console.log(data);
})
```

## Description
Analyzes the performance of a web page and provides tailored suggestions to make that page faster.

## Actions
### pagespeedapi.runpagespeed
Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.


```js
google_pagespeedonline.pagespeedapi.runpagespeed({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL to fetch and analyze
* filter_third_party_resources (boolean) - Indicates if third party resources should be filtered out before PageSpeed analysis.
* locale (string) - The locale used to localize formatted results
* rule (array) - A PageSpeed rule to run; if none are given, all rules are run
* screenshot (boolean) - Indicates if binary data containing a screenshot should be included
* strategy (string) - The analysis strategy to use
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

