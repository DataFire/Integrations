# @datafire/google_kgsearch

Client library for Knowledge Graph Search

## Installation and Usage
```bash
npm install --save datafire @datafire/google_kgsearch
```

```js
let datafire = require('datafire');
let google_kgsearch = require('@datafire/google_kgsearch').create();

google_kgsearch.entities.search({}).then(data => {
  console.log(data);
})
```

## Description
Searches the Google Knowledge Graph for entities.

## Actions
### entities.search
Searches Knowledge Graph for entities that match the constraints.
A list of matched entities will be returned in response, which will be in
JSON-LD format and compatible with http://schema.org


```js
google_kgsearch.entities.search({}, context)
```

#### Parameters
* limit (integer) - Limits the number of entities to be returned.
* prefix (boolean) - Enables prefix match against names and aliases of entities
* query (string) - The literal query string for search.
* types (array) - Restricts returned entities with these types, e.g. Person
* indent (boolean) - Enables indenting of json results.
* languages (array) - The list of language codes (defined in ISO 693) to run the query with,
* ids (array) - The list of entity id to be used for search instead of query string.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

