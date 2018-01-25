# @datafire/google_people

Client library for Google People

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

google_people.people.createContact({}).then(data => {
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

### contactGroups.list
List all contact groups owned by the authenticated user. Members of the
contact groups are not populated.


```js
google_people.contactGroups.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of resources to return.
  * pageToken `string`: The next_page_token value returned from a previous call to
  * syncToken `string`: A sync token, returned by a previous call to `contactgroups.list`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListContactGroupsResponse](#listcontactgroupsresponse)

### contactGroups.create
Create a new contact group owned by the authenticated user.


```js
google_people.contactGroups.create({}, context)
```

#### Input
* input `object`
  * body [CreateContactGroupRequest](#createcontactgrouprequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ContactGroup](#contactgroup)

### contactGroups.batchGet
Get a list of contact groups owned by the authenticated user by specifying
a list of contact group resource names.


```js
google_people.contactGroups.batchGet({}, context)
```

#### Input
* input `object`
  * maxMembers `integer`: Specifies the maximum number of members to return for each group.
  * resourceNames `array`: The resource names of the contact groups to get.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchGetContactGroupsResponse](#batchgetcontactgroupsresponse)

### people.getBatchGet
Provides information about a list of specific people by specifying a list
of requested resource names. Use `people/me` to indicate the authenticated
user.
<br>
The request throws a 400 error if 'personFields' is not specified.


```js
google_people.people.getBatchGet({}, context)
```

#### Input
* input `object`
  * personFields `string`: **Required.** A field mask to restrict which fields on each person are
  * requestMask.includeField `string`: **Required.** Comma-separated list of person fields to be included in the
  * resourceNames `array`: The resource names of the people to provide information about.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [GetPeopleResponse](#getpeopleresponse)

### people.createContact
Create a new contact and return the person resource for that contact.


```js
google_people.people.createContact({}, context)
```

#### Input
* input `object`
  * body [Person](#person)
  * parent `string`: The resource name of the owning person resource.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Person](#person)

### contactGroups.delete
Delete an existing contact group owned by the authenticated user by
specifying a contact group resource name.


```js
google_people.contactGroups.delete({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * deleteContacts `boolean`: Set to true to also delete the contacts in the specified group.
  * resourceName **required** `string`: The resource name of the contact group to delete.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Empty](#empty)

### contactGroups.get
Get a specific contact group owned by the authenticated user by specifying
a contact group resource name.


```js
google_people.contactGroups.get({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * maxMembers `integer`: Specifies the maximum number of members to return.
  * requestMask.includeField `string`: **Required.** Comma-separated list of person fields to be included in the
  * resourceName **required** `string`: The resource name of the contact group to get.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ContactGroup](#contactgroup)

### contactGroups.update
Update the name of an existing contact group owned by the authenticated
user.


```js
google_people.contactGroups.update({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateContactGroupRequest](#updatecontactgrouprequest)
  * resourceName **required** `string`: The resource name for the contact group, assigned by the server. An ASCII
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ContactGroup](#contactgroup)

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

#### Input
* input `object`
  * pageSize `integer`: The number of connections to include in the response. Valid values are
  * pageToken `string`: The token of the page to be returned.
  * personFields `string`: **Required.** A field mask to restrict which fields on each person are
  * requestMask.includeField `string`: **Required.** Comma-separated list of person fields to be included in the
  * requestSyncToken `boolean`: Whether the response should include a sync token, which can be used to get
  * resourceName **required** `string`: The resource name to return connections for. Only `people/me` is valid.
  * sortOrder `string` (values: LAST_MODIFIED_ASCENDING, FIRST_NAME_ASCENDING, LAST_NAME_ASCENDING): The order in which the connections should be sorted. Defaults to
  * syncToken `string`: A sync token, returned by a previous call to `people.connections.list`.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListConnectionsResponse](#listconnectionsresponse)

### contactGroups.members.modify
Modify the members of a contact group owned by the authenticated user.


```js
google_people.contactGroups.members.modify({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * body [ModifyContactGroupMembersRequest](#modifycontactgroupmembersrequest)
  * resourceName **required** `string`: The resource name of the contact group to modify.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ModifyContactGroupMembersResponse](#modifycontactgroupmembersresponse)

### people.deleteContact
Delete a contact person. Any non-contact data will not be deleted.


```js
google_people.people.deleteContact({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: The resource name of the contact to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * body [Person](#person)
  * resourceName **required** `string`: The resource name for the person, assigned by the server. An ASCII string
  * updatePersonFields `string`: **Required.** A field mask to restrict which fields on the person are
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Person](#person)



## Definitions

### Address
* Address `object`: A person's physical address. May be a P.O. box or street address. All fields
  * city `string`: The city of the address.
  * country `string`: The country of the address.
  * countryCode `string`: The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
  * extendedAddress `string`: The extended address of the address; for example, the apartment number.
  * formattedType `string`: The read-only type of the address translated and formatted in the viewer's
  * formattedValue `string`: The unstructured value of the address. If this is not set by the user it
  * metadata [FieldMetadata](#fieldmetadata)
  * poBox `string`: The P.O. box of the address.
  * postalCode `string`: The postal code of the address.
  * region `string`: The region of the address; for example, the state or province.
  * streetAddress `string`: The street address.
  * type `string`: The type of the address. The type can be custom or predefined.

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
* Birthday `object`: A person's birthday. At least one of the `date` and `text` fields are
  * date [Date](#date)
  * metadata [FieldMetadata](#fieldmetadata)
  * text `string`: A free-form string representing the user's birthday.

### BraggingRights
* BraggingRights `object`: A person's bragging rights.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The bragging rights; for example, `climbed mount everest`.

### ContactGroup
* ContactGroup `object`: A contact group.
  * etag `string`: The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
  * formattedName `string`: The read-only name translated and formatted in the viewer's account locale
  * groupType `string` (values: GROUP_TYPE_UNSPECIFIED, USER_CONTACT_GROUP, SYSTEM_CONTACT_GROUP): The read-only contact group type.
  * memberCount `integer`: The total number of contacts in the group irrespective of max members in
  * memberResourceNames `array`: The list of contact person resource names that are members of the contact
    * items `string`
  * metadata [ContactGroupMetadata](#contactgroupmetadata)
  * name `string`: The contact group name set by the group owner or a system provided name
  * resourceName `string`: The resource name for the contact group, assigned by the server. An ASCII

### ContactGroupMembership
* ContactGroupMembership `object`: A Google contact group membership.
  * contactGroupId `string`: The contact group ID for the contact group membership. The contact group

### ContactGroupMetadata
* ContactGroupMetadata `object`: The read-only metadata about a contact group.
  * deleted `boolean`: True if the contact group resource has been deleted. Populated only for
  * updateTime `string`: The time the group was last updated.

### ContactGroupResponse
* ContactGroupResponse `object`: The response for a specific contact group.
  * contactGroup [ContactGroup](#contactgroup)
  * requestedResourceName `string`: The original requested resource name.
  * status [Status](#status)

### CoverPhoto
* CoverPhoto `object`: A person's read-only cover photo. A large image shown on the person's
  * default `boolean`: True if the cover photo is the default cover photo;
  * metadata [FieldMetadata](#fieldmetadata)
  * url `string`: The URL of the cover photo.

### CreateContactGroupRequest
* CreateContactGroupRequest `object`: A request to create a new contact group.
  * contactGroup [ContactGroup](#contactgroup)

### Date
* Date `object`: Represents a whole calendar date, for example a date of birth. The time
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### DomainMembership
* DomainMembership `object`: A Google Apps Domain membership.
  * inViewerDomain `boolean`: True if the person is in the viewer's Google Apps domain.

### EmailAddress
* EmailAddress `object`: A person's email address.
  * displayName `string`: The display name of the email.
  * formattedType `string`: The read-only type of the email address translated and formatted in the
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the email address. The type can be custom or predefined.
  * value `string`: The email address.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Event
* Event `object`: An event related to the person.
  * date [Date](#date)
  * formattedType `string`: The read-only type of the event translated and formatted in the
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the event. The type can be custom or predefined.

### FieldMetadata
* FieldMetadata `object`: Metadata about a field.
  * primary `boolean`: True if the field is the primary field; false if the field is a secondary
  * source [Source](#source)
  * verified `boolean`: True if the field is verified; false if the field is unverified. A

### Gender
* Gender `object`: A person's gender.
  * formattedValue `string`: The read-only value of the gender translated and formatted in the viewer's
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The gender for the person. The gender can be custom or predefined.

### GetPeopleResponse
* GetPeopleResponse `object`
  * responses `array`: The response for each requested resource name.
    * items [PersonResponse](#personresponse)

### ImClient
* ImClient `object`: A person's instant messaging client.
  * formattedProtocol `string`: The read-only protocol of the IM client formatted in the viewer's account
  * formattedType `string`: The read-only type of the IM client translated and formatted in the
  * metadata [FieldMetadata](#fieldmetadata)
  * protocol `string`: The protocol of the IM client. The protocol can be custom or predefined.
  * type `string`: The type of the IM client. The type can be custom or predefined.
  * username `string`: The user name used in the IM client.

### Interest
* Interest `object`: One of the person's interests.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The interest; for example, `stargazing`.

### ListConnectionsResponse
* ListConnectionsResponse `object`
  * connections `array`: The list of people that the requestor is connected to.
    * items [Person](#person)
  * nextPageToken `string`: The token that can be used to retrieve the next page of results.
  * nextSyncToken `string`: The token that can be used to retrieve changes since the last request.
  * totalItems `integer`: The total number of items in the list without pagination.
  * totalPeople `integer`: **DEPRECATED** (Please use totalItems)

### ListContactGroupsResponse
* ListContactGroupsResponse `object`: The response to a list contact groups request.
  * contactGroups `array`: The list of contact groups. Members of the contact groups are not
    * items [ContactGroup](#contactgroup)
  * nextPageToken `string`: The token that can be used to retrieve the next page of results.
  * nextSyncToken `string`: The token that can be used to retrieve changes since the last request.
  * totalItems `integer`: The total number of items in the list without pagination.

### Locale
* Locale `object`: A person's locale preference.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)

### Membership
* Membership `object`: A person's read-only membership in a group.
  * contactGroupMembership [ContactGroupMembership](#contactgroupmembership)
  * domainMembership [DomainMembership](#domainmembership)
  * metadata [FieldMetadata](#fieldmetadata)

### ModifyContactGroupMembersRequest
* ModifyContactGroupMembersRequest `object`: A request to modify an existing contact group's members.
  * resourceNamesToAdd `array`: The resource names of the contact people to add in the form of in the form
    * items `string`
  * resourceNamesToRemove `array`: The resource names of the contact people to remove in the form of in the
    * items `string`

### ModifyContactGroupMembersResponse
* ModifyContactGroupMembersResponse `object`: The response to a modify contact group members request.
  * notFoundResourceNames `array`: The contact people resource names that were not found.
    * items `string`

### Name
* Name `object`: A person's name. If the name is a mononym, the family name is empty.
  * displayName `string`: The read-only display name formatted according to the locale specified by
  * displayNameLastFirst `string`: The read-only display name with the last name first formatted according to
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

### Nickname
* Nickname `object`: A person's nickname.
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string` (values: DEFAULT, MAIDEN_NAME, INITIALS, GPLUS, OTHER_NAME): The type of the nickname.
  * value `string`: The nickname.

### Occupation
* Occupation `object`: A person's occupation.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The occupation; for example, `carpenter`.

### Organization
* Organization `object`: A person's past or current organization. Overlapping date ranges are
  * current `boolean`: True if the organization is the person's current organization;
  * department `string`: The person's department at the organization.
  * domain `string`: The domain name associated with the organization; for example, `google.com`.
  * endDate [Date](#date)
  * formattedType `string`: The read-only type of the organization translated and formatted in the
  * jobDescription `string`: The person's job description at the organization.
  * location `string`: The location of the organization office the person works at.
  * metadata [FieldMetadata](#fieldmetadata)
  * name `string`: The name of the organization.
  * phoneticName `string`: The phonetic name of the organization.
  * startDate [Date](#date)
  * symbol `string`: The symbol associated with the organization; for example, a stock ticker
  * title `string`: The person's job title at the organization.
  * type `string`: The type of the organization. The type can be custom or predefined.

### Person
* Person `object`: Information about a person merged from various data sources such as the
  * addresses `array`: The person's street addresses.
    * items [Address](#address)
  * ageRange `string` (values: AGE_RANGE_UNSPECIFIED, LESS_THAN_EIGHTEEN, EIGHTEEN_TO_TWENTY, TWENTY_ONE_OR_OLDER): **DEPRECATED** (Please use `person.ageRanges` instead)**
  * ageRanges `array`: The person's read-only age ranges.
    * items [AgeRangeType](#agerangetype)
  * biographies `array`: The person's biographies.
    * items [Biography](#biography)
  * birthdays `array`: The person's birthdays.
    * items [Birthday](#birthday)
  * braggingRights `array`: The person's bragging rights.
    * items [BraggingRights](#braggingrights)
  * coverPhotos `array`: The person's read-only cover photos.
    * items [CoverPhoto](#coverphoto)
  * emailAddresses `array`: The person's email addresses.
    * items [EmailAddress](#emailaddress)
  * etag `string`: The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
  * events `array`: The person's events.
    * items [Event](#event)
  * genders `array`: The person's genders.
    * items [Gender](#gender)
  * imClients `array`: The person's instant messaging clients.
    * items [ImClient](#imclient)
  * interests `array`: The person's interests.
    * items [Interest](#interest)
  * locales `array`: The person's locale preferences.
    * items [Locale](#locale)
  * memberships `array`: The person's read-only group memberships.
    * items [Membership](#membership)
  * metadata [PersonMetadata](#personmetadata)
  * names `array`: The person's names.
    * items [Name](#name)
  * nicknames `array`: The person's nicknames.
    * items [Nickname](#nickname)
  * occupations `array`: The person's occupations.
    * items [Occupation](#occupation)
  * organizations `array`: The person's past or current organizations.
    * items [Organization](#organization)
  * phoneNumbers `array`: The person's phone numbers.
    * items [PhoneNumber](#phonenumber)
  * photos `array`: The person's read-only photos.
    * items [Photo](#photo)
  * relations `array`: The person's relations.
    * items [Relation](#relation)
  * relationshipInterests `array`: The person's read-only relationship interests.
    * items [RelationshipInterest](#relationshipinterest)
  * relationshipStatuses `array`: The person's read-only relationship statuses.
    * items [RelationshipStatus](#relationshipstatus)
  * residences `array`: The person's residences.
    * items [Residence](#residence)
  * resourceName `string`: The resource name for the person, assigned by the server. An ASCII string
  * skills `array`: The person's skills.
    * items [Skill](#skill)
  * taglines `array`: The person's read-only taglines.
    * items [Tagline](#tagline)
  * urls `array`: The person's associated URLs.
    * items [Url](#url)
  * userDefined `array`: The person's user defined data.
    * items [UserDefined](#userdefined)

### PersonMetadata
* PersonMetadata `object`: The read-only metadata about a person.
  * deleted `boolean`: True if the person resource has been deleted. Populated only for
  * linkedPeopleResourceNames `array`: Resource names of people linked to this resource.
    * items `string`
  * objectType `string` (values: OBJECT_TYPE_UNSPECIFIED, PERSON, PAGE): **DEPRECATED** (Please use
  * previousResourceNames `array`: Any former resource names this person has had. Populated only for
    * items `string`
  * sources `array`: The sources of data for the person.
    * items [Source](#source)

### PersonResponse
* PersonResponse `object`: The response for a single person
  * httpStatusCode `integer`: **DEPRECATED** (Please use status instead)
  * person [Person](#person)
  * requestedResourceName `string`: The original requested resource name. May be different than the resource
  * status [Status](#status)

### PhoneNumber
* PhoneNumber `object`: A person's phone number.
  * canonicalForm `string`: The read-only canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
  * formattedType `string`: The read-only type of the phone number translated and formatted in the
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the phone number. The type can be custom or predefined.
  * value `string`: The phone number.

### Photo
* Photo `object`: A person's read-only photo. A picture shown next to the person's name to
  * default `boolean`: True if the photo is a default photo;
  * metadata [FieldMetadata](#fieldmetadata)
  * url `string`: The URL of the photo. You can change the desired size by appending a query

### ProfileMetadata
* ProfileMetadata `object`: The read-only metadata about a profile.
  * objectType `string` (values: OBJECT_TYPE_UNSPECIFIED, PERSON, PAGE): The profile object type.
  * userTypes `array`: The user types.
    * items `string` (values: USER_TYPE_UNKNOWN, GOOGLE_USER, GPLUS_USER, GOOGLE_APPS_USER)

### Relation
* Relation `object`: A person's relation to another person.
  * formattedType `string`: The type of the relation translated and formatted in the viewer's account
  * metadata [FieldMetadata](#fieldmetadata)
  * person `string`: The name of the other person this relation refers to.
  * type `string`: The person's relation to the other person. The type can be custom or predefined.

### RelationshipInterest
* RelationshipInterest `object`: A person's read-only relationship interest .
  * formattedValue `string`: The value of the relationship interest translated and formatted in the
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The kind of relationship the person is looking for. The value can be custom

### RelationshipStatus
* RelationshipStatus `object`: A person's read-only relationship status.
  * formattedValue `string`: The read-only value of the relationship status translated and formatted in
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The relationship status. The value can be custom or predefined.

### Residence
* Residence `object`: A person's past or current residence.
  * current `boolean`: True if the residence is the person's current residence;
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The address of the residence.

### Skill
* Skill `object`: A skill that the person has.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The skill; for example, `underwater basket weaving`.

### Source
* Source `object`: The source of a field.
  * etag `string`: **Only populated in `person.metadata.sources`.**
  * id `string`: The unique identifier within the source type generated by the server.
  * profileMetadata [ProfileMetadata](#profilemetadata)
  * type `string` (values: SOURCE_TYPE_UNSPECIFIED, ACCOUNT, PROFILE, DOMAIN_PROFILE, CONTACT): The source type.
  * updateTime `string`: **Only populated in `person.metadata.sources`.**

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### Tagline
* Tagline `object`: A read-only brief one-line description of the person.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The tagline.

### UpdateContactGroupRequest
* UpdateContactGroupRequest `object`: A request to update an existing contact group. Only the name can be updated.
  * contactGroup [ContactGroup](#contactgroup)

### Url
* Url `object`: A person's associated URLs.
  * formattedType `string`: The read-only type of the URL translated and formatted in the viewer's
  * metadata [FieldMetadata](#fieldmetadata)
  * type `string`: The type of the URL. The type can be custom or predefined.
  * value `string`: The URL.

### UserDefined
* UserDefined `object`: Arbitrary user data that is populated by the end users.
  * key `string`: The end user specified key of the user defined data.
  * metadata [FieldMetadata](#fieldmetadata)
  * value `string`: The end user specified value of the user defined data.


