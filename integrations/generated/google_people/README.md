# @datafire/google_people

Client library for People API

## Installation and Usage
```bash
npm install --save @datafire/google_people
```
```js
let google_people = require('@datafire/google_people').create({
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

Provides access to information about profiles and contacts.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_people.oauthCallback({
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
google_people.oauthRefresh(null, context)
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

### people.contactGroups.list
List all contact groups owned by the authenticated user. Members of the contact groups are not populated.


```js
google_people.people.contactGroups.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of resources to return. Valid values are between 1 and 1000, inclusive. Defaults to 30 if not set or set to 0.
  * pageToken `string`: Optional. The next_page_token value returned from a previous call to [ListContactGroups](/people/api/rest/v1/contactgroups/list). Requests the next page of resources.
  * syncToken `string`: Optional. A sync token, returned by a previous call to `contactgroups.list`. Only resources changed since the sync token was created will be returned.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListContactGroupsResponse](#listcontactgroupsresponse)

### people.contactGroups.create
Create a new contact group owned by the authenticated user.


```js
google_people.people.contactGroups.create({}, context)
```

#### Input
* input `object`
  * body [CreateContactGroupRequest](#createcontactgrouprequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ContactGroup](#contactgroup)

### people.contactGroups.batchGet
Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.


```js
google_people.people.contactGroups.batchGet({}, context)
```

#### Input
* input `object`
  * maxMembers `integer`: Optional. Specifies the maximum number of members to return for each group. Defaults to 0 if not set, which will return zero members.
  * resourceNames `array`: Required. The resource names of the contact groups to get.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchGetContactGroupsResponse](#batchgetcontactgroupsresponse)

### people.otherContacts.list
List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions.


```js
google_people.people.otherContacts.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The number of "Other contacts" to include in the response. Valid values are between 1 and 1000, inclusive. Defaults to 100 if not set or set to 0.
  * pageToken `string`: Optional. A page token, received from a previous `ListOtherContacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOtherContacts` must match the call that provided the page token.
  * readMask `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * emailAddresses * names * phoneNumbers
  * requestSyncToken `boolean`: Optional. Whether the response should include `next_sync_token`, which can be used to get all changes since the last request. For subsequent sync requests use the `sync_token` param instead. Initial sync requests that specify `request_sync_token` have an additional rate limit.
  * syncToken `string`: Optional. A sync token, received from a previous `ListOtherContacts` call. Provide this to retrieve only the resources changed since the last request. Sync requests that specify `sync_token` have an additional rate limit. When syncing, all other parameters provided to `ListOtherContacts` must match the call that provided the sync token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListOtherContactsResponse](#listothercontactsresponse)

### people.people.getBatchGet
Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.


```js
google_people.people.people.getBatchGet({}, context)
```

#### Input
* input `object`
  * personFields `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * requestMask.includeField `string`: Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
  * resourceNames `array`: Required. The resource names of the people to provide information about. It's repeatable. The URL query parameter should be resourceNames=<name1>&resourceNames=<name2>&... - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify `people/{account_id}`. - To get information about a contact, specify the resource name that identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list). You can include up to 50 resource names in one request.
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GetPeopleResponse](#getpeopleresponse)

### people.people.createContact
Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names


```js
google_people.people.people.createContact({}, context)
```

#### Input
* input `object`
  * personFields `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Defaults to all fields if not set. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
  * body [Person](#person)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Person](#person)

### people.people.listDirectoryPeople
Provides a list of domain profiles and domain contacts in the authenticated user's domain directory.


```js
google_people.people.people.listDirectoryPeople({}, context)
```

#### Input
* input `object`
  * mergeSources `array`: Optional. Additional data to merge into the directory sources if they are connected through verified join keys such as email addresses or phone numbers.
  * pageSize `integer`: Optional. The number of people to include in the response. Valid values are between 1 and 1000, inclusive. Defaults to 100 if not set or set to 0.
  * pageToken `string`: Optional. A page token, received from a previous `ListDirectoryPeople` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDirectoryPeople` must match the call that provided the page token.
  * readMask `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * requestSyncToken `boolean`: Optional. Whether the response should include `next_sync_token`, which can be used to get all changes since the last request. For subsequent sync requests use the `sync_token` param instead.
  * sources `array`: Required. Directory sources to return.
  * syncToken `string`: Optional. A sync token, received from a previous `ListDirectoryPeople` call. Provide this to retrieve only the resources changed since the last request. When syncing, all other parameters provided to `ListDirectoryPeople` must match the call that provided the sync token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListDirectoryPeopleResponse](#listdirectorypeopleresponse)

### people.people.searchDirectoryPeople
Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.


```js
google_people.people.people.searchDirectoryPeople({}, context)
```

#### Input
* input `object`
  * mergeSources `array`: Optional. Additional data to merge into the directory sources if they are connected through verified join keys such as email addresses or phone numbers.
  * pageSize `integer`: Optional. The number of people to include in the response. Valid values are between 1 and 500, inclusive. Defaults to 100 if not set or set to 0.
  * pageToken `string`: Optional. A page token, received from a previous `SearchDirectoryPeople` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchDirectoryPeople` must match the call that provided the page token.
  * query `string`: Required. Prefix query that matches fields in the person. Does NOT use the read_mask for determining what fields to match.
  * readMask `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * sources `array`: Required. Directory sources to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchDirectoryPeopleResponse](#searchdirectorypeopleresponse)

### people.contactGroups.delete
Delete an existing contact group owned by the authenticated user by specifying a contact group resource name.


```js
google_people.people.contactGroups.delete({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the contact group to delete.
  * deleteContacts `boolean`: Optional. Set to true to also delete the contacts in the specified group.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### people.people.get
Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.


```js
google_people.people.people.get({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the person to provide information about. - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify `people/{account_id}`. - To get information about a contact, specify the resource name that identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).
  * personFields `string`: Required. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * requestMask.includeField `string`: Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_PROFILE and READ_SOURCE_TYPE_CONTACT if not set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Person](#person)

### people.contactGroups.update
Update the name of an existing contact group owned by the authenticated user.


```js
google_people.people.contactGroups.update({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`.
  * body [UpdateContactGroupRequest](#updatecontactgrouprequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ContactGroup](#contactgroup)

### people.people.connections.list
Provides a list of the authenticated user's contacts. The request returns a 400 error if `personFields` is not specified. The request returns a 410 error if `sync_token` is specified and is expired. Sync tokens expire after 7 days. A request without `sync_token` should be made and all contacts should be synced.


```js
google_people.people.people.connections.list({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name to return connections for. Only `people/me` is valid.
  * pageSize `integer`: Optional. The number of connections to include in the response. Valid values are between 1 and 1000, inclusive. Defaults to 100 if not set or set to 0.
  * pageToken `string`: Optional. A page token, received from a previous `ListConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnections` must match the call that provided the page token.
  * personFields `string`: Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * requestMask.includeField `string`: Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
  * requestSyncToken `boolean`: Optional. Whether the response should include `next_sync_token` on the last page, which can be used to get all changes since the last request. For subsequent sync requests use the `sync_token` param instead. Initial sync requests that specify `request_sync_token` have an additional rate limit.
  * sortOrder `string` (values: LAST_MODIFIED_ASCENDING, LAST_MODIFIED_DESCENDING, FIRST_NAME_ASCENDING, LAST_NAME_ASCENDING): Optional. The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
  * syncToken `string`: Optional. A sync token, received from a previous `ListConnections` call. Provide this to retrieve only the resources changed since the last request. Sync requests that specify `sync_token` have an additional rate limit. When syncing, all other parameters provided to `ListConnections` must match the call that provided the sync token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListConnectionsResponse](#listconnectionsresponse)

### people.contactGroups.members.modify
Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.


```js
google_people.people.contactGroups.members.modify({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the contact group to modify.
  * body [ModifyContactGroupMembersRequest](#modifycontactgroupmembersrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ModifyContactGroupMembersResponse](#modifycontactgroupmembersresponse)

### people.otherContacts.copyOtherContactToMyContactsGroup
Copies an "Other contact" to a new contact in the user's "myContacts" group


```js
google_people.people.otherContacts.copyOtherContactToMyContactsGroup({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the "Other contact" to copy.
  * body [CopyOtherContactToMyContactsGroupRequest](#copyothercontacttomycontactsgrouprequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Person](#person)

### people.people.deleteContact
Delete a contact person. Any non-contact data will not be deleted.


```js
google_people.people.people.deleteContact({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the contact to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### people.people.deleteContactPhoto
Delete a contact's photo.


```js
google_people.people.people.deleteContactPhoto({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. The resource name of the contact whose photo will be deleted.
  * personFields `string`: Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to empty if not set, which will skip the post mutate get. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeleteContactPhotoResponse](#deletecontactphotoresponse)

### people.people.updateContact
Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names


```js
google_people.people.people.updateContact({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: The resource name for the person, assigned by the server. An ASCII string with a max length of 27 characters, in the form of `people/{person_id}`.
  * personFields `string`: Optional. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Defaults to all fields if not set. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
  * updatePersonFields `string`: Required. A field mask to restrict which fields on the person are updated. Multiple fields can be specified by separating them with commas. All updated fields will be replaced. Valid values are: * addresses * biographies * birthdays * calendarUrls * clientData * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * relations * sipAddresses * urls * userDefined
  * body [Person](#person)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Person](#person)

### people.people.updateContactPhoto
Update a contact's photo.


```js
google_people.people.people.updateContactPhoto({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Required. Person resource name
  * body [UpdateContactPhotoRequest](#updatecontactphotorequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UpdateContactPhotoResponse](#updatecontactphotoresponse)



## Definitions

### Address
* Address `object`: A person's physical address. May be a P.O. box or street address. All fields are optional.
  * city `string`: The city of the address.
  * country `string`: The country of the address.
  * countryCode `string`: The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address.
  * extendedAddress `string`: The extended address of the address; for example, the apartment number.
  * formattedType `string`: Output only. The type of the address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * formattedValue `string`: The unstructured value of the address. If this is not set by the user it will be automatically constructed from structured values.
  * metadata [FieldMetadata](#fieldmetadata)
  * poBox `string`: The P.O. box of the address.
  * postalCode `string`: The postal code of the address.
  * region `string`: The region of the address; for example, the state or province.
  * streetAddress `string`: The street address.
  * type `string`: The type of the address. The type can be custom or one of these predefined values: * `home` * `work` * `other`

### AgeRangeType
* AgeRangeType `object`: A person's age range.
  * ageRange `string` (values: AGE_RANGE_UNSPECIFIED, LESS_THAN_EIGHTEEN, EIGHTEEN_TO_TWENTY, TWENTY_ONE_OR_OLDER): The age range.
  * metadata [FieldMetadata](#fieldmetadata)

### BatchGetContactGroupsResponse
* BatchGetContactGroupsResponse `object`: The response to a batch get contact groups request.
  * responses `array`: The list of responses for each requested contact group resource.
    * items [ContactGroupResponse](#contactgroupresponse)

### Biography
* Biography `object`: A person's short biography.
  * contentType `string` (values: CONTENT_TYPE_UNSPECIFIED, TEXT_PLAIN, TEXT_HTML): The content type of the biography.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The short biography.

### Birthday
* Birthday `object`: A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to.
  * date [Date](#date)
  * metadata [FieldMetadata](#fieldmetadata)
  * text `string`: A free-form string representing the user's birthday.

### BraggingRights
* BraggingRights `object`: **DEPRECATED**: No data will be returned A person's bragging rights.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The bragging rights; for example, `climbed mount everest`.

### CalendarUrl
* CalendarUrl `object`: A person's calendar URL.
  * formattedType `string`: Output only. The type of the calendar URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the calendar URL. The type can be custom or one of these predefined values: * `home` * `freeBusy` * `work`
  * url `string`: The calendar URL.

### ClientData
* ClientData `object`: Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
  * key `string`: The client specified key of the client data.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The client specified value of the client data.

### ContactGroup
* ContactGroup `object`: A contact group.
  * etag `string`: The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
  * formattedName `string`: Output only. The name translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale for system groups names. Group names set by the owner are the same as name.
  * groupType `string` (values: GROUP_TYPE_UNSPECIFIED, USER_CONTACT_GROUP, SYSTEM_CONTACT_GROUP): Output only. The contact group type.
  * memberCount `integer`: Output only. The total number of contacts in the group irrespective of max members in specified in the request.
  * memberResourceNames `array`: Output only. The list of contact person resource names that are members of the contact group. The field is not populated for LIST requests and can only be updated through the [ModifyContactGroupMembers](/people/api/rest/v1/contactgroups/members/modify).
    * items `string`
  * metadata [ContactGroupMetadata](#contactgroupmetadata)
  * name `string`: The contact group name set by the group owner or a system provided name for system groups.
  * resourceName `string`: The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`.

### ContactGroupMembership
* ContactGroupMembership `object`: A Google contact group membership.
  * contactGroupId `string`: Output only. The contact group ID for the contact group membership.
  * contactGroupResourceName `string`: The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`. Only contact_group_resource_name can be used for modifying memberships. Any contact group membership can be removed, but only user group or "myContacts" or "starred" system groups memberships can be added. A contact must always have at least one contact group membership.

### ContactGroupMetadata
* ContactGroupMetadata `object`: The metadata about a contact group.
  * deleted `boolean`: Output only. True if the contact group resource has been deleted. Populated only for [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests that include a sync token.
  * updateTime `string`: Output only. The time the group was last updated.

### ContactGroupResponse
* ContactGroupResponse `object`: The response for a specific contact group.
  * contactGroup [ContactGroup](#contactgroup)
  * requestedResourceName `string`: The original requested resource name.
  * status [Status](#status)

### CopyOtherContactToMyContactsGroupRequest
* CopyOtherContactToMyContactsGroupRequest `object`: A request to copy an "Other contact" to my contacts group.
  * copyMask `string`: Required. A field mask to restrict which fields are copied into the new contact. Valid values are: * emailAddresses * names * phoneNumbers
  * readMask `string`: Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to the copy mask with metadata and membership fields if not set. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
    * items `string` (values: READ_SOURCE_TYPE_UNSPECIFIED, READ_SOURCE_TYPE_PROFILE, READ_SOURCE_TYPE_CONTACT, READ_SOURCE_TYPE_DOMAIN_CONTACT)

### CoverPhoto
* CoverPhoto `object`: A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care about.
  * metadata [FieldMetadata](#fieldmetadata)
  * url `string`: The URL of the cover photo.

### CreateContactGroupRequest
* CreateContactGroupRequest `object`: A request to create a new contact group.
  * contactGroup [ContactGroup](#contactgroup)

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DeleteContactPhotoResponse
* DeleteContactPhotoResponse `object`: The response for deleteing a contact's photo.
  * person [Person](#person)

### DomainMembership
* DomainMembership `object`: A G Suite Domain membership.
  * inViewerDomain `boolean`: True if the person is in the viewer's G Suite domain.

### EmailAddress
* EmailAddress `object`: A person's email address.
  * displayName `string`: The display name of the email.
  * formattedType `string`: Output only. The type of the email address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the email address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
  * value `string`: The email address.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Event
* Event `object`: An event related to the person.
  * date [Date](#date)
  * formattedType `string`: Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the event. The type can be custom or one of these predefined values: * `anniversary` * `other`

### ExternalId
* ExternalId `object`: An identifier from an external entity related to the person.
  * formattedType `string`: Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the external ID. The type can be custom or one of these predefined values: * `account` * `customer` * `loginId` * `network` * `organization`
  * value `string`: The value of the external ID.

### FieldMetadata
* FieldMetadata `object`: Metadata about a field.
  * primary `boolean`: True if the field is the primary field; false if the field is a secondary field.
  * source [Source](#source)
  * verified `boolean`: Output only. True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.

### FileAs
* FileAs `object`: The name that should be used to sort the person in a list.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The file-as value

### Gender
* Gender `object`: A person's gender.
  * addressMeAs `string`: The type of pronouns that should be used to address the person. The value can be custom or one of these predefined values: * `male` * `female` * `other`
  * formattedValue `string`: Output only. The value of the gender translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale. Unspecified or custom value are not localized.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The gender for the person. The gender can be custom or one of these predefined values: * `male` * `female` * `unspecified`

### GetPeopleResponse
* GetPeopleResponse `object`: The response to a get request for a list of people by resource name.
  * responses `array`: The response for each requested resource name.
    * items [PersonResponse](#personresponse)

### ImClient
* ImClient `object`: A person's instant messaging client.
  * formattedProtocol `string`: Output only. The protocol of the IM client formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * formattedType `string`: Output only. The type of the IM client translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * protocol `string`: The protocol of the IM client. The protocol can be custom or one of these predefined values: * `aim` * `msn` * `yahoo` * `skype` * `qq` * `googleTalk` * `icq` * `jabber` * `netMeeting`
  * type `string`: The type of the IM client. The type can be custom or one of these predefined values: * `home` * `work` * `other`
  * username `string`: The user name used in the IM client.

### Interest
* Interest `object`: One of the person's interests.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The interest; for example, `stargazing`.

### ListConnectionsResponse
* ListConnectionsResponse `object`: The response to a request for the authenticated user's connections.
  * connections `array`: The list of people that the requestor is connected to.
    * items [Person](#person)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * nextSyncToken `string`: A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token. When the response is paginated, only the last page will contain `nextSyncToken`.
  * totalItems `integer`: The total number of items in the list without pagination.
  * totalPeople `integer`: **DEPRECATED** (Please use totalItems) The total number of people in the list without pagination.

### ListContactGroupsResponse
* ListContactGroupsResponse `object`: The response to a list contact groups request.
  * contactGroups `array`: The list of contact groups. Members of the contact groups are not populated.
    * items [ContactGroup](#contactgroup)
  * nextPageToken `string`: The token that can be used to retrieve the next page of results.
  * nextSyncToken `string`: The token that can be used to retrieve changes since the last request.
  * totalItems `integer`: The total number of items in the list without pagination.

### ListDirectoryPeopleResponse
* ListDirectoryPeopleResponse `object`: The response to a request for the authenticated user's domain directory.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * nextSyncToken `string`: A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token.
  * people `array`: The list of people in the domain directory.
    * items [Person](#person)

### ListOtherContactsResponse
* ListOtherContactsResponse `object`: The response to a request for the authenticated user's "Other contacts".
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * nextSyncToken `string`: A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token.
  * otherContacts `array`: The list of "Other contacts" returned as Person resources. "Other contacts" support a limited subset of fields. See ListOtherContactsRequest.request_mask for more detailed information.
    * items [Person](#person)

### Locale
* Locale `object`: A person's locale preference.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale.

### Location
* Location `object`: A person's location.
  * buildingId `string`: The building identifier.
  * current `boolean`: Whether the location is the current location.
  * deskCode `string`: The individual desk location.
  * floor `string`: The floor name or number.
  * floorSection `string`: The floor section in `floor_name`.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the location. The type can be custom or one of these predefined values: * `desk` * `grewUp`
  * value `string`: The free-form value of the location.

### Membership
* Membership `object`: A person's membership in a group. Only contact group memberships can be modified.
  * contactGroupMembership [ContactGroupMembership](#contactgroupmembership)
  * domainMembership [DomainMembership](#domainmembership)
  * metadata [FieldMetadata](#fieldmetadata)

### MiscKeyword
* MiscKeyword `object`: A person's miscellaneous keyword.
  * formattedType `string`: Output only. The type of the miscellaneous keyword translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string` (values: TYPE_UNSPECIFIED, OUTLOOK_BILLING_INFORMATION, OUTLOOK_DIRECTORY_SERVER, OUTLOOK_KEYWORD, OUTLOOK_MILEAGE, OUTLOOK_PRIORITY, OUTLOOK_SENSITIVITY, OUTLOOK_SUBJECT, OUTLOOK_USER, HOME, WORK, OTHER): The miscellaneous keyword type.
  * value `string`: The value of the miscellaneous keyword.

### ModifyContactGroupMembersRequest
* ModifyContactGroupMembersRequest `object`: A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or "myContacts" or "starred" system groups.
  * resourceNamesToAdd `array`: Optional. The resource names of the contact people to add in the form of `people/{person_id}`. The total number of resource names in `resource_names_to_add` and `resource_names_to_remove` must be less than or equal to 1000.
    * items `string`
  * resourceNamesToRemove `array`: Optional. The resource names of the contact people to remove in the form of `people/{person_id}`. The total number of resource names in `resource_names_to_add` and `resource_names_to_remove` must be less than or equal to 1000.
    * items `string`

### ModifyContactGroupMembersResponse
* ModifyContactGroupMembersResponse `object`: The response to a modify contact group members request.
  * canNotRemoveLastContactGroupResourceNames `array`: The contact people resource names that cannot be removed from their last contact group.
    * items `string`
  * notFoundResourceNames `array`: The contact people resource names that were not found.
    * items `string`

### Name
* Name `object`: A person's name. If the name is a mononym, the family name is empty.
  * displayName `string`: Output only. The display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
  * displayNameLastFirst `string`: Output only. The display name with the last name first formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
  * familyName `string`: The family name.
  * givenName `string`: The given name.
  * honorificPrefix `string`: The honorific prefixes, such as `Mrs.` or `Dr.`
  * honorificSuffix `string`: The honorific suffixes, such as `Jr.`
  * metadata [FieldMetadata](#fieldmetadata)
  * middleName `string`: The middle name(s).
  * phoneticFamilyName `string`: The family name spelled as it sounds.
  * phoneticFullName `string`: The full name spelled as it sounds.
  * phoneticGivenName `string`: The given name spelled as it sounds.
  * phoneticHonorificPrefix `string`: The honorific prefixes spelled as they sound.
  * phoneticHonorificSuffix `string`: The honorific suffixes spelled as they sound.
  * phoneticMiddleName `string`: The middle name(s) spelled as they sound.
  * unstructuredName `string`: The free form name value.

### Nickname
* Nickname `object`: A person's nickname.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string` (values: DEFAULT, MAIDEN_NAME, INITIALS, GPLUS, OTHER_NAME, ALTERNATE_NAME, SHORT_NAME): The type of the nickname.
  * value `string`: The nickname.

### Occupation
* Occupation `object`: A person's occupation.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The occupation; for example, `carpenter`.

### Organization
* Organization `object`: A person's past or current organization. Overlapping date ranges are permitted.
  * current `boolean`: True if the organization is the person's current organization; false if the organization is a past organization.
  * department `string`: The person's department at the organization.
  * domain `string`: The domain name associated with the organization; for example, `google.com`.
  * endDate [Date](#date)
  * formattedType `string`: Output only. The type of the organization translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * jobDescription `string`: The person's job description at the organization.
  * location `string`: The location of the organization office the person works at.
  * metadata [FieldMetadata](#fieldmetadata)
  * name `string`: The name of the organization.
  * phoneticName `string`: The phonetic name of the organization.
  * startDate [Date](#date)
  * symbol `string`: The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
  * title `string`: The person's job title at the organization.
  * type `string`: The type of the organization. The type can be custom or one of these predefined values: * `work` * `school`

### Person
* Person `object`: Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
  * addresses `array`: The person's street addresses.
    * items [Address](#address)
  * ageRange `string` (values: AGE_RANGE_UNSPECIFIED, LESS_THAN_EIGHTEEN, EIGHTEEN_TO_TWENTY, TWENTY_ONE_OR_OLDER): Output only. **DEPRECATED** (Please use `person.ageRanges` instead) The person's age range.
  * ageRanges `array`: Output only. The person's age ranges.
    * items [AgeRangeType](#agerangetype)
  * biographies `array`: The person's biographies. This field is a singleton for contact sources.
    * items [Biography](#biography)
  * birthdays `array`: The person's birthdays. This field is a singleton for contact sources.
    * items [Birthday](#birthday)
  * braggingRights `array`: **DEPRECATED**: No data will be returned The person's bragging rights.
    * items [BraggingRights](#braggingrights)
  * calendarUrls `array`: The person's calendar URLs.
    * items [CalendarUrl](#calendarurl)
  * clientData `array`: The person's client data.
    * items [ClientData](#clientdata)
  * coverPhotos `array`: Output only. The person's cover photos.
    * items [CoverPhoto](#coverphoto)
  * emailAddresses `array`: The person's email addresses.
    * items [EmailAddress](#emailaddress)
  * etag `string`: The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
  * events `array`: The person's events.
    * items [Event](#event)
  * externalIds `array`: The person's external IDs.
    * items [ExternalId](#externalid)
  * fileAses `array`: The person's file-ases.
    * items [FileAs](#fileas)
  * genders `array`: The person's genders. This field is a singleton for contact sources.
    * items [Gender](#gender)
  * imClients `array`: The person's instant messaging clients.
    * items [ImClient](#imclient)
  * interests `array`: The person's interests.
    * items [Interest](#interest)
  * locales `array`: The person's locale preferences.
    * items [Locale](#locale)
  * locations `array`: The person's locations.
    * items [Location](#location)
  * memberships `array`: The person's group memberships.
    * items [Membership](#membership)
  * metadata [PersonMetadata](#personmetadata)
  * miscKeywords `array`: The person's miscellaneous keywords.
    * items [MiscKeyword](#misckeyword)
  * names `array`: The person's names. This field is a singleton for contact sources.
    * items [Name](#name)
  * nicknames `array`: The person's nicknames.
    * items [Nickname](#nickname)
  * occupations `array`: The person's occupations.
    * items [Occupation](#occupation)
  * organizations `array`: The person's past or current organizations.
    * items [Organization](#organization)
  * phoneNumbers `array`: The person's phone numbers.
    * items [PhoneNumber](#phonenumber)
  * photos `array`: Output only. The person's photos.
    * items [Photo](#photo)
  * relations `array`: The person's relations.
    * items [Relation](#relation)
  * relationshipInterests `array`: Output only. **DEPRECATED**: No data will be returned The person's relationship interests.
    * items [RelationshipInterest](#relationshipinterest)
  * relationshipStatuses `array`: Output only. **DEPRECATED**: No data will be returned The person's relationship statuses.
    * items [RelationshipStatus](#relationshipstatus)
  * residences `array`: **DEPRECATED**: (Please use `person.locations` instead) The person's residences.
    * items [Residence](#residence)
  * resourceName `string`: The resource name for the person, assigned by the server. An ASCII string with a max length of 27 characters, in the form of `people/{person_id}`.
  * sipAddresses `array`: The person's SIP addresses.
    * items [SipAddress](#sipaddress)
  * skills `array`: The person's skills.
    * items [Skill](#skill)
  * taglines `array`: Output only. **DEPRECATED**: No data will be returned The person's taglines.
    * items [Tagline](#tagline)
  * urls `array`: The person's associated URLs.
    * items [Url](#url)
  * userDefined `array`: The person's user defined data.
    * items [UserDefined](#userdefined)

### PersonMetadata
* PersonMetadata `object`: The metadata about a person.
  * deleted `boolean`: Output only. True if the person resource has been deleted. Populated only for [`connections.list`](/people/api/rest/v1/people.connections/list) requests that include a sync token.
  * linkedPeopleResourceNames `array`: Output only. Resource names of people linked to this resource.
    * items `string`
  * objectType `string` (values: OBJECT_TYPE_UNSPECIFIED, PERSON, PAGE): Output only. **DEPRECATED** (Please use `person.metadata.sources.profileMetadata.objectType` instead) The type of the person object.
  * previousResourceNames `array`: Output only. Any former resource names this person has had. Populated only for [`connections.list`](/people/api/rest/v1/people.connections/list) requests that include a sync token. The resource name may change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or profile URL.
    * items `string`
  * sources `array`: The sources of data for the person.
    * items [Source](#source)

### PersonResponse
* PersonResponse `object`: The response for a single person
  * httpStatusCode `integer`: **DEPRECATED** (Please use status instead) [HTTP 1.1 status code] (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
  * person [Person](#person)
  * requestedResourceName `string`: The original requested resource name. May be different than the resource name on the returned person. The resource name can change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or a profile URL.
  * status [Status](#status)

### PhoneNumber
* PhoneNumber `object`: A person's phone number.
  * canonicalForm `string`: Output only. The canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf) form of the phone number.
  * formattedType `string`: Output only. The type of the phone number translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the phone number. The type can be custom or one of these predefined values: * `home` * `work` * `mobile` * `homeFax` * `workFax` * `otherFax` * `pager` * `workMobile` * `workPager` * `main` * `googleVoice` * `other`
  * value `string`: The phone number.

### Photo
* Photo `object`: A person's photo. A picture shown next to the person's name to help others recognize the person.
  * metadata [FieldMetadata](#fieldmetadata)
  * url `string`: The URL of the photo. You can change the desired size by appending a query parameter `sz={size}` at the end of the url, where {size} is the size in pixels. Example: https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50

### ProfileMetadata
* ProfileMetadata `object`: The metadata about a profile.
  * objectType `string` (values: OBJECT_TYPE_UNSPECIFIED, PERSON, PAGE): Output only. The profile object type.
  * userTypes `array`: Output only. The user types.
    * items `string` (values: USER_TYPE_UNKNOWN, GOOGLE_USER, GPLUS_USER, GOOGLE_APPS_USER)

### Relation
* Relation `object`: A person's relation to another person.
  * formattedType `string`: Output only. The type of the relation translated and formatted in the viewer's account locale or the locale specified in the Accept-Language HTTP header.
  * metadata [FieldMetadata](#fieldmetadata)
  * person `string`: The name of the other person this relation refers to.
  * type `string`: The person's relation to the other person. The type can be custom or one of these predefined values: * `spouse` * `child` * `mother` * `father` * `parent` * `brother` * `sister` * `friend` * `relative` * `domesticPartner` * `manager` * `assistant` * `referredBy` * `partner`

### RelationshipInterest
* RelationshipInterest `object`: **DEPRECATED**: No data will be returned A person's relationship interest .
  * formattedValue `string`: Output only. The value of the relationship interest translated and formatted in the viewer's account locale or the locale specified in the Accept-Language HTTP header.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The kind of relationship the person is looking for. The value can be custom or one of these predefined values: * `friend` * `date` * `relationship` * `networking`

### RelationshipStatus
* RelationshipStatus `object`: **DEPRECATED**: No data will be returned A person's relationship status.
  * formattedValue `string`: Output only. The value of the relationship status translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The relationship status. The value can be custom or one of these predefined values: * `single` * `inARelationship` * `engaged` * `married` * `itsComplicated` * `openRelationship` * `widowed` * `inDomesticPartnership` * `inCivilUnion`

### Residence
* Residence `object`: **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
  * current `boolean`: True if the residence is the person's current residence; false if the residence is a past residence.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The address of the residence.

### SearchDirectoryPeopleResponse
* SearchDirectoryPeopleResponse `object`: The response to a request for people in the authenticated user's domain directory that match the specified query.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * people `array`: The list of people in the domain directory that match the query.
    * items [Person](#person)
  * totalSize `integer`: The total number of items in the list without pagination.

### SipAddress
* SipAddress `object`: A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
  * formattedType `string`: Output only. The type of the SIP address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the SIP address. The type can be custom or or one of these predefined values: * `home` * `work` * `mobile` * `other`
  * value `string`: The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format.

### Skill
* Skill `object`: A skill that the person has.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The skill; for example, `underwater basket weaving`.

### Source
* Source `object`: The source of a field.
  * etag `string`: **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
  * id `string`: The unique identifier within the source type generated by the server.
  * profileMetadata [ProfileMetadata](#profilemetadata)
  * type `string` (values: SOURCE_TYPE_UNSPECIFIED, ACCOUNT, PROFILE, DOMAIN_PROFILE, CONTACT, OTHER_CONTACT, DOMAIN_CONTACT): The source type.
  * updateTime `string`: Output only. **Only populated in `person.metadata.sources`.** Last update timestamp of this source.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Tagline
* Tagline `object`: **DEPRECATED**: No data will be returned A brief one-line description of the person.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The tagline.

### UpdateContactGroupRequest
* UpdateContactGroupRequest `object`: A request to update an existing user contact group. All updated fields will be replaced.
  * contactGroup [ContactGroup](#contactgroup)

### UpdateContactPhotoRequest
* UpdateContactPhotoRequest `object`: A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
  * personFields `string`: Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to empty if not set, which will skip the post mutate get. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
  * photoBytes `string`: Required. Raw photo bytes
  * sources `array`: Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
    * items `string` (values: READ_SOURCE_TYPE_UNSPECIFIED, READ_SOURCE_TYPE_PROFILE, READ_SOURCE_TYPE_CONTACT, READ_SOURCE_TYPE_DOMAIN_CONTACT)

### UpdateContactPhotoResponse
* UpdateContactPhotoResponse `object`: The response for updating a contact's photo.
  * person [Person](#person)

### Url
* Url `object`: A person's associated URLs.
  * formattedType `string`: Output only. The type of the URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the URL. The type can be custom or one of these predefined values: * `home` * `work` * `blog` * `profile` * `homePage` * `ftp` * `reservations` * `appInstallPage`: website for a Currents application. * `other`
  * value `string`: The URL.

### UserDefined
* UserDefined `object`: Arbitrary user data that is populated by the end users.
  * key `string`: The end user specified key of the user defined data.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The end user specified value of the user defined data.


