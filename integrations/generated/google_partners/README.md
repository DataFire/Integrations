# @datafire/google_partners

Client library for Google Partners

## Installation and Usage
```bash
npm install --save datafire @datafire/google_partners
```

```js
let datafire = require('datafire');
let google_partners = require('@datafire/google_partners').actions;
let context = new datafire.Context();

google_partners.users.updateProfile({}, context).then(data => {
  console.log(data);
})
```

## Description
Searches certified companies and creates contact leads with them, and also audits the usage of clients.

## Actions
### analytics.list
Lists analytics data for a user's associated company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.analytics.list({}, context)
```


### clientMessages.log
Logs a generic message from the client, such as
`Failed to render component`, `Profile page is running slow`,
`More than 500 users have accessed this result.`, etc.


```js
google_partners.clientMessages.log({}, context)
```


### companies.list
Lists companies.


```js
google_partners.companies.list({}, context)
```


### updateCompanies
Update company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.updateCompanies({}, context)
```


### companies.get
Gets a company.


```js
google_partners.companies.get({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - The ID of the company to retrieve.
* requestMetadata.trafficSource.trafficSourceId (string) - Identifier to indicate where the traffic comes from.
* requestMetadata.userOverrides.ipAddress (string) - IP address to use instead of the user's geo-located IP address.
* requestMetadata.experimentIds (array) - Experiment IDs the current request belongs to.
* currencyCode (string) - If the company's budget is in a different currency code than this one, then
* orderBy (string) - How to order addresses within the returned company. Currently, only
* requestMetadata.trafficSource.trafficSubId (string) - Second level identifier to indicate where the traffic comes from.
* requestMetadata.userOverrides.userId (string) - Logged-in user ID to impersonate instead of the user's ID.
* requestMetadata.partnersSessionId (string) - Google Partners session ID.
* view (string) - The view of `Company` resource to be returned. This must not be
* requestMetadata.locale (string) - Locale to use for the current request.
* address (string) - The address to use for sorting the company's addresses by proximity.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### companies.leads.create
Creates an advertiser lead for the given company ID.


```js
google_partners.companies.leads.create({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - The ID of the company to contact.
* body (object) - Request message for CreateLead.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### exams.getToken
Gets an Exam Token for a Partner's user to take an exam in the Exams System


```js
google_partners.exams.getToken({
  "examType": ""
}, context)
```

#### Parameters
* examType (string) **required** - The exam type we are requesting a token for.
* requestMetadata.trafficSource.trafficSubId (string) - Second level identifier to indicate where the traffic comes from.
* requestMetadata.userOverrides.userId (string) - Logged-in user ID to impersonate instead of the user's ID.
* requestMetadata.partnersSessionId (string) - Google Partners session ID.
* requestMetadata.trafficSource.trafficSourceId (string) - Identifier to indicate where the traffic comes from.
* requestMetadata.locale (string) - Locale to use for the current request.
* requestMetadata.userOverrides.ipAddress (string) - IP address to use instead of the user's geo-located IP address.
* requestMetadata.experimentIds (array) - Experiment IDs the current request belongs to.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### leads.list
Lists advertiser leads for a user's associated company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.leads.list({}, context)
```


### updateLeads
Updates the specified lead.


```js
google_partners.updateLeads({}, context)
```


### offers.list
Lists the Offers available for the current user


```js
google_partners.offers.list({}, context)
```


### offers.history.list
Lists the Historical Offers for the current user (or user's entire company)


```js
google_partners.offers.history.list({}, context)
```


### getPartnersstatus
Gets Partners Status of the logged in user's agency.
Should only be called if the logged in user is the admin of the agency.


```js
google_partners.getPartnersstatus({}, context)
```


### userEvents.log
Logs a user event.


```js
google_partners.userEvents.log({}, context)
```


### userStates.list
Lists states for current user.


```js
google_partners.userStates.list({}, context)
```


### users.updateProfile
Updates a user's profile. A user can only update their own profile and
should only be called within the context of a logged in user.


```js
google_partners.users.updateProfile({}, context)
```


### users.get
Gets a user.


```js
google_partners.users.get({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Identifier of the user. Can be set to <code>me</code> to mean the currently
* requestMetadata.userOverrides.userId (string) - Logged-in user ID to impersonate instead of the user's ID.
* requestMetadata.partnersSessionId (string) - Google Partners session ID.
* userView (string) - Specifies what parts of the user information to return.
* requestMetadata.trafficSource.trafficSourceId (string) - Identifier to indicate where the traffic comes from.
* requestMetadata.locale (string) - Locale to use for the current request.
* requestMetadata.userOverrides.ipAddress (string) - IP address to use instead of the user's geo-located IP address.
* requestMetadata.experimentIds (array) - Experiment IDs the current request belongs to.
* requestMetadata.trafficSource.trafficSubId (string) - Second level identifier to indicate where the traffic comes from.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### users.deleteCompanyRelation
Deletes a user's company relation. Unaffiliaites the user from a company.


```js
google_partners.users.deleteCompanyRelation({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user. Can be set to <code>me</code> to mean
* requestMetadata.trafficSource.trafficSubId (string) - Second level identifier to indicate where the traffic comes from.
* requestMetadata.userOverrides.userId (string) - Logged-in user ID to impersonate instead of the user's ID.
* requestMetadata.partnersSessionId (string) - Google Partners session ID.
* requestMetadata.trafficSource.trafficSourceId (string) - Identifier to indicate where the traffic comes from.
* requestMetadata.locale (string) - Locale to use for the current request.
* requestMetadata.userOverrides.ipAddress (string) - IP address to use instead of the user's geo-located IP address.
* requestMetadata.experimentIds (array) - Experiment IDs the current request belongs to.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### users.createCompanyRelation
Creates a user's company relation. Affiliates the user to a company.


```js
google_partners.users.createCompanyRelation({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user. Can be set to <code>me</code> to mean
* requestMetadata.userOverrides.userId (string) - Logged-in user ID to impersonate instead of the user's ID.
* requestMetadata.partnersSessionId (string) - Google Partners session ID.
* requestMetadata.trafficSource.trafficSourceId (string) - Identifier to indicate where the traffic comes from.
* requestMetadata.locale (string) - Locale to use for the current request.
* requestMetadata.userOverrides.ipAddress (string) - IP address to use instead of the user's geo-located IP address.
* requestMetadata.experimentIds (array) - Experiment IDs the current request belongs to.
* requestMetadata.trafficSource.trafficSubId (string) - Second level identifier to indicate where the traffic comes from.
* body (object) - A CompanyRelation resource representing information about a user's
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

