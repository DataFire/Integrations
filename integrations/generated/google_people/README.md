# @datafire/google_people

Client library for Google People

## Installation and Usage
```bash
npm install --save datafire @datafire/google_people
```

```js
let datafire = require('datafire');
let google_people = require('@datafire/google_people').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_people.people.createContact({}).then(data => {
  console.log(data);
})
```

## Description
Provides access to information about profiles and contacts.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_people.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_people.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### contactGroups.list
List all contact groups owned by the authenticated user. Members of the
contact groups are not populated.


```js
google_people.contactGroups.list({}, context)
```

#### Parameters
* pageSize (integer) - The maximum number of resources to return.
* pageToken (string) - The next_page_token value returned from a previous call to
* syncToken (string) - A sync token, returned by a previous call to `contactgroups.list`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### contactGroups.create
Create a new contact group owned by the authenticated user.


```js
google_people.contactGroups.create({}, context)
```

#### Parameters
* body (object) - A request to create a new contact group.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### contactGroups.batchGet
Get a list of contact groups owned by the authenticated user by specifying
a list of contact group resource names.


```js
google_people.contactGroups.batchGet({}, context)
```

#### Parameters
* maxMembers (integer) - Specifies the maximum number of members to return for each group.
* resourceNames (array) - The resource names of the contact groups to get.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### people.getBatchGet
Provides information about a list of specific people by specifying a list
of requested resource names. Use `people/me` to indicate the authenticated
user.
<br>
The request throws a 400 error if 'personFields' is not specified.


```js
google_people.people.getBatchGet({}, context)
```

#### Parameters
* personFields (string) - **Required.** A field mask to restrict which fields on each person are
* requestMask.includeField (string) - **Required.** Comma-separated list of person fields to be included in the
* resourceNames (array) - The resource names of the people to provide information about.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### people.createContact
Create a new contact and return the person resource for that contact.


```js
google_people.people.createContact({}, context)
```

#### Parameters
* body (object) - Information about a person merged from various data sources such as the
* parent (string) - The resource name of the owning person resource.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### contactGroups.delete
Delete an existing contact group owned by the authenticated user by
specifying a contact group resource name.


```js
google_people.contactGroups.delete({
  "resourceName": ""
}, context)
```

#### Parameters
* deleteContacts (boolean) - Set to true to also delete the contacts in the specified group.
* resourceName (string) **required** - The resource name of the contact group to delete.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### contactGroups.get
Get a specific contact group owned by the authenticated user by specifying
a contact group resource name.


```js
google_people.contactGroups.get({
  "resourceName": ""
}, context)
```

#### Parameters
* maxMembers (integer) - Specifies the maximum number of members to return.
* requestMask.includeField (string) - **Required.** Comma-separated list of person fields to be included in the
* resourceName (string) **required** - The resource name of the contact group to get.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### contactGroups.update
Update the name of an existing contact group owned by the authenticated
user.


```js
google_people.contactGroups.update({
  "resourceName": ""
}, context)
```

#### Parameters
* body (object) - A request to update an existing contact group. Only the name can be updated.
* resourceName (string) **required** - The resource name for the contact group, assigned by the server. An ASCII
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### people.connections.list
Provides a list of the authenticated user's contacts merged with any
connected profiles.
<br>
The request throws a 400 error if 'personFields' is not specified.


```js
google_people.people.connections.list({
  "resourceName": ""
}, context)
```

#### Parameters
* pageSize (integer) - The number of connections to include in the response. Valid values are
* pageToken (string) - The token of the page to be returned.
* personFields (string) - **Required.** A field mask to restrict which fields on each person are
* requestMask.includeField (string) - **Required.** Comma-separated list of person fields to be included in the
* requestSyncToken (boolean) - Whether the response should include a sync token, which can be used to get
* resourceName (string) **required** - The resource name to return connections for. Only `people/me` is valid.
* sortOrder (string) - The order in which the connections should be sorted. Defaults to
* syncToken (string) - A sync token, returned by a previous call to `people.connections.list`.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### contactGroups.members.modify
Modify the members of a contact group owned by the authenticated user.


```js
google_people.contactGroups.members.modify({
  "resourceName": ""
}, context)
```

#### Parameters
* body (object) - A request to modify an existing contact group's members.
* resourceName (string) **required** - The resource name of the contact group to modify.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### people.deleteContact
Delete a contact person. Any non-contact data will not be deleted.


```js
google_people.people.deleteContact({
  "resourceName": ""
}, context)
```

#### Parameters
* resourceName (string) **required** - The resource name of the contact to delete.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### people.updateContact
Update contact data for an existing contact person. Any non-contact data
will not be modified.

The request throws a 400 error if `updatePersonFields` is not specified.
<br>
The request throws a 400 error if `person.metadata.sources` is not
specified for the contact to be updated.
<br>
The request throws a 412 error if `person.metadata.sources.etag` is
different than the contact's etag, which indicates the contact has changed
since its data was read. Clients should get the latest person and re-apply
their updates to the latest person.


```js
google_people.people.updateContact({
  "resourceName": ""
}, context)
```

#### Parameters
* body (object) - Information about a person merged from various data sources such as the
* resourceName (string) **required** - The resource name for the person, assigned by the server. An ASCII string
* updatePersonFields (string) - **Required.** A field mask to restrict which fields on the person are
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

