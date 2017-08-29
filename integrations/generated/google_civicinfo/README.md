# @datafire/google_civicinfo

Client library for Google Civic Information

## Installation and Usage
```bash
npm install --save datafire @datafire/google_civicinfo
```

```js
let datafire = require('datafire');
let google_civicinfo = require('@datafire/google_civicinfo').create();

google_civicinfo.representatives.representativeInfoByAddress({}).then(data => {
  console.log(data);
})
```

## Description
Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.

## Actions
### divisions.search
Searches for political divisions by their natural name or OCD ID.


```js
google_civicinfo.divisions.search({}, context)
```

#### Parameters
* query (string) - The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
* body (object) - A search request for political geographies.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### elections.electionQuery
List of available elections to query.


```js
google_civicinfo.elections.electionQuery({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### representatives.representativeInfoByAddress
Looks up political geography and representative information for a single address.


```js
google_civicinfo.representatives.representativeInfoByAddress({}, context)
```

#### Parameters
* address (string) - The address to look up. May only be specified if the field ocdId is not given in the URL.
* includeOffices (boolean) - Whether to return information about offices and officials. If false, only the top-level district information will be returned.
* levels (array) - A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
* roles (array) - A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
* body (object) - A request for political geography and representative information for an address.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### representatives.representativeInfoByDivision
Looks up representative information for a single geographic division.


```js
google_civicinfo.representatives.representativeInfoByDivision({
  "ocdId": ""
}, context)
```

#### Parameters
* ocdId (string) **required** - The Open Civic Data division identifier of the division to look up.
* levels (array) - A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
* recursive (boolean) - If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
* roles (array) - A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
* body (object) - A request to look up representative information for a single division.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### elections.voterInfoQuery
Looks up information relevant to a voter based on the voter's registered address.


```js
google_civicinfo.elections.voterInfoQuery({
  "address": ""
}, context)
```

#### Parameters
* address (string) **required** - The registered address of the voter to look up.
* electionId (string) - The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections
* officialOnly (boolean) - If set to true, only data from official state sources will be returned.
* returnAllAvailableData (boolean) - If set to true, the query will return the success codeand include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
* body (object) - A request for information about a voter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

