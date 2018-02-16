# @datafire/salesloft

Client library for SalesLoft Platform

## Installation and Usage
```bash
npm install --save @datafire/salesloft
```
```js
let salesloft = require('@datafire/salesloft').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

salesloft.v2.team_templates.json.get({}).then(data => {
  console.log(data);
});
```

## Description

SalesLoft helps transform sales teams into modern sales organizations  - converting more target accounts into customer accounts


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
salesloft.oauthCallback({
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
salesloft.oauthRefresh(null, context)
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

### v2.accounts.json.get
Fetches multiple account records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.accounts.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of accounts to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * domain `string`: Domain of the accounts to fetch. Domains are unique and lowercase
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, last_contacted_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Account](#account)

### v2.accounts.json.post
Creates an account.

"domain" must be unique on the current team.



```js
salesloft.v2.accounts.json.post({
  "name": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Account Full Name
  * domain **required** `string`: Website domain, not a fully qualified URI
  * conversational_name `string`: Conversational name of the Account
  * description `string`: Description
  * phone `string`: Phone number without formatting
  * website `string`: Website
  * linkedin_url `string`: Full LinkedIn url
  * twitter_handle `string`: Twitter handle, with @
  * street `string`: Street name and number
  * city `string`: City
  * state `string`: State
  * postal_code `string`: Postal code
  * country `string`: Country
  * locale `string`: Time locale
  * industry `string`: Industry
  * company_type `string`: Type of the Account's company
  * founded `string`: Date or year of founding
  * revenue_range `string`: Estimated revenue range
  * size `string`: Estimated number of people in employment
  * do_not_contact `boolean`: Whether this company can not be contacted. Values are either true or false. Setting this to true will remove all associated people from all active communications
  * custom_fields `array`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * tags `array`: All tags applied to this Account
  * owner_id `integer`: ID of the User that owns this Account
  * company_stage_id `integer`: ID of the CompanyStage assigned to this Account

#### Output
* output [Account](#account)

### v2.accounts.id.json.delete
Deletes an account. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.

Deleting an account will remove all connected people from that account.



```js
salesloft.v2.accounts.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Account ID

#### Output
*Output schema unknown*

### v2.accounts.id.json.get
Fetches an account, by ID only.



```js
salesloft.v2.accounts.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Account ID

#### Output
* output [Account](#account)

### v2.accounts.id.json.put
Updates an account.

"domain" must be unique on the current team.



```js
salesloft.v2.accounts.id.json.put({
  "name": "",
  "domain": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Account Full Name
  * domain **required** `string`: Website domain, not a fully qualified URI
  * conversational_name `string`: Conversational name of the Account
  * description `string`: Description
  * phone `string`: Phone number without formatting
  * website `string`: Website
  * linkedin_url `string`: Full LinkedIn url
  * twitter_handle `string`: Twitter handle, with @
  * street `string`: Street name and number
  * city `string`: City
  * state `string`: State
  * postal_code `string`: Postal code
  * country `string`: Country
  * locale `string`: Time locale
  * industry `string`: Industry
  * company_type `string`: Type of the Account's company
  * founded `string`: Date or year of founding
  * revenue_range `string`: Estimated revenue range
  * size `string`: Estimated number of people in employment
  * do_not_contact `boolean`: Whether this company can not be contacted. Values are either true or false. Setting this to true will remove all associated people from all active communications
  * custom_fields `array`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * tags `array`: All tags applied to this Account
  * owner_id `integer`: ID of the User that owns this Account
  * company_stage_id `integer`: ID of the CompanyStage assigned to this Account
  * id **required** `string`: Account ID

#### Output
* output [Account](#account)

### v2.action_details.call_instructions.json.get
Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.action_details.call_instructions.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of call instructions to fetch.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [CallInstruction](#callinstruction)

### v2.action_details.call_instructions.id.json.get
Fetches a call instruction, by ID only.



```js
salesloft.v2.action_details.call_instructions.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Call instructions ID

#### Output
* output [CallInstruction](#callinstruction)

### v2.actions.json.get
Fetches multiple action records. The records can be filtered, paged, and sorted according to
the respective parameters. Only actions that are currently "in_progess" will be returned by
this endpoint.



```js
salesloft.v2.actions.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of actions to fetch.
  * step_id `integer`: Fetch actions by step ID
  * type `string`: Filter actions by type
  * due_on `array`: Equality filters that are applied to the due_on field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Action](#action)

### v2.actions.id.json.get
Fetches an action, by ID only.
This endpoint will only return actions that are in_progress or pending_activity.
Once an action is complete, the request for that action will return a 404 status code.



```js
salesloft.v2.actions.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Action ID

#### Output
* output [Action](#action)

### v2.activities.calls.json.get
Fetches multiple call records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.activities.calls.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of calls to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Call](#call)

### v2.activities.calls.id.json.get
Fetches a call, by ID only.



```js
salesloft.v2.activities.calls.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Call ID

#### Output
* output [Call](#call)

### v2.activities.emails.json.get
Fetches multiple email records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.activities.emails.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of emails to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * bounced `boolean`: Filters emails by whether they have bounced or not
  * sort_by `string`: Key to sort on, must be one of: updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Email](#email)

### v2.activities.emails.id.json.get
Fetches an email, by ID only.



```js
salesloft.v2.activities.emails.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Email ID

#### Output
* output [Email](#email)

### v2.cadence_memberships.json.get
Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to
the respective parameters. A cadence membership is the association between a person and their current and
historical time on a cadence. Cadence membership records are mutable and change over time. If a person is
added to a cadence and re-added to the same cadence in the future, there is a single membership record.



```js
salesloft.v2.cadence_memberships.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of cadence memberships to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * person_id `integer`: ID of the person to find cadence memberships for
  * cadence_id `integer`: ID of the cadence to find cadence memberships for
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [CadenceMembership](#cadencemembership)

### v2.cadence_memberships.json.post
Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will
default to the authenticated user, but can be set to any visible user on the authenticated team.

A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, or the cadence is owned by
the teammate.



```js
salesloft.v2.cadence_memberships.json.post({
  "person_id": 0,
  "cadence_id": 0
}, context)
```

#### Input
* input `object`
  * person_id **required** `integer`: ID of the person to create a cadence membership for
  * cadence_id **required** `integer`: ID of the cadence to create a cadence membership for
  * user_id `integer`: ID of the user to create a cadence membership for. The associated cadence must be owned by the user, or it must be a team cadence

#### Output
* output [CadenceMembership](#cadencemembership)

### v2.cadence_memberships.id.json.delete
Delete a cadence membership


```js
salesloft.v2.cadence_memberships.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CadenceMembership ID

#### Output
*Output schema unknown*

### v2.cadence_memberships.id.json.get
Fetches a cadence membership, by ID only.



```js
salesloft.v2.cadence_memberships.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CadenceMembership ID

#### Output
* output [CadenceMembership](#cadencemembership)

### v2.cadences.json.get
Fetches multiple cadence records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.cadences.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of cadences to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * team_cadence `boolean`: Filters cadences by whether they are a team cadence or not
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Cadence](#cadence)

### v2.cadences.id.json.get
Fetches a cadence, by ID only.



```js
salesloft.v2.cadences.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Cadence ID

#### Output
* output [Cadence](#cadence)

### v2.call_data_records.json.get
Fetches multiple call data records. The records can be filtered, paged, and sorted according to
the respective parameters.

Call data records are records of all inbound and outbound calls through SalesLoft. A call data record may
be associated with a call, but does not have to be.



```js
salesloft.v2.call_data_records.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of call data records to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * has_call `boolean`: Return only call data records which have or do not have a call logged for them
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [CallDataRecord](#calldatarecord)

### v2.call_data_records.id.json.get
Fetches a call data record, by ID only.



```js
salesloft.v2.call_data_records.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CallDataRecord ID

#### Output
* output [CallDataRecord](#calldatarecord)

### v2.crm_activities.json.get
Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.crm_activities.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of crm activities to fetch.
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [CrmActivity](#crmactivity)

### v2.crm_activities.id.json.get
Fetches a crm activity, by ID only.



```js
salesloft.v2.crm_activities.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Crm activity ID

#### Output
* output [CrmActivity](#crmactivity)

### v2.custom_fields.json.get
Fetches multiple custom field records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.custom_fields.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of custom fields to fetch.
  * field_type `string`: Type of field to fetch. Value must be one of: person, company, opportunity
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, name. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [CustomField](#customfield)

### v2.custom_fields.json.post
Creates a custom field.



```js
salesloft.v2.custom_fields.json.post({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the custom field
  * field_type `string`: The field type of the custom field. Value must be one of: person, company, opportunity

#### Output
* output [CustomField](#customfield)

### v2.custom_fields.id.json.delete
Deletes a custom field.



```js
salesloft.v2.custom_fields.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Custom Field ID

#### Output
*Output schema unknown*

### v2.custom_fields.id.json.get
Fetches a custom field, by ID only.



```js
salesloft.v2.custom_fields.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Custom Field ID

#### Output
* output [CustomField](#customfield)

### v2.custom_fields.id.json.put
Update a custom field.



```js
salesloft.v2.custom_fields.id.json.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Custom Field ID
  * name `string`: The name of the custom field
  * field_type `string`: The field type of the custom field. Value must be one of: person, company, opportunity

#### Output
* output [CustomField](#customfield)

### v2.email_templates.json.get
Fetches multiple email template records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.email_templates.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of email templates to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * linked_to_team_template `boolean`: Filters email templates by whether they are linked to a team template or not
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, last_used_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [EmailTemplate](#emailtemplate)

### v2.email_templates.id.json.get
Fetches an email template, by ID only.



```js
salesloft.v2.email_templates.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: EmailTemplate ID

#### Output
* output [EmailTemplate](#emailtemplate)

### v2.imports.json.get
Fetches multiple imports.



```js
salesloft.v2.imports.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of imports to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * user_ids `array`: ID of users to fetch imports for. Using this filter will return an empty array for non-admin users who request other user's imports
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to created_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Import](#import)

### v2.imports.json.post
Creates an import.



```js
salesloft.v2.imports.json.post({}, context)
```

#### Input
* input `object`
  * user_id `integer`: ID of the User that owns this Import
  * name `string`: Name, recommended to be easily identifiable to a user

#### Output
* output [Import](#import)

### v2.imports.id.json.delete
Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.



```js
salesloft.v2.imports.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Import ID
  * undo `string`: Whether to delete people on this Import. Possible values are: [not present], all, single.

#### Output
*Output schema unknown*

### v2.imports.id.json.get
Fetches an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.



```js
salesloft.v2.imports.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Import ID

#### Output
* output [Import](#import)

### v2.imports.id.json.put
Updates an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.



```js
salesloft.v2.imports.id.json.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Import ID
  * user_id `integer`: ID of the User that owns this Import
  * name `string`: Name, recommended to be easily identifiable to a user

#### Output
* output [Import](#import)

### v2.me.json.get
Authenticated user information. This endpoint does not accept any parameters as it is
represents your authenticated user. The "Users" resource provides user information
for other users on the team.



```js
salesloft.v2.me.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### v2.notes.json.get
Fetches multiple note records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.notes.json.get({}, context)
```

#### Input
* input `object`
  * associated_with_type `string`: Case insensitive type of item with which the note is associated.  Value must be one of: person, account
  * associated_with_id `integer`: ID of the item with which the note is associated.  The associated_with_type must also be present if this parameter is used
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * ids `array`: IDs of notes to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Note](#note)

### v2.notes.json.post
Creates a note.



```js
salesloft.v2.notes.json.post({
  "content": "",
  "associated_with_type": "",
  "associated_with_id": 0
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The content of the note
  * associated_with_type **required** `string`: Case insensitive type of item with which the note is associated.  Value must be one of: person, account
  * associated_with_id **required** `integer`: ID of the item with which the note is associated
  * skip_crm_sync `boolean`: Boolean indicating if the CRM sync should be skipped.  No syncing will occur if true
  * call_id `integer`: ID of the call with which the note is associated. The call cannot already have a note

#### Output
* output [Note](#note)

### v2.notes.id.json.get
Fetches a note, by ID only.



```js
salesloft.v2.notes.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Note ID

#### Output
* output [Note](#note)

### v2.notes.id.json.put
Updates a note. Any changes to the note or associated records will not reflect in Salesforce.com.



```js
salesloft.v2.notes.id.json.put({
  "id": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Note ID
  * content **required** `string`: The content of the note
  * call_id `integer`: ID of the call with which the note is associated. The call cannot already have a note. If the note is associated to a call already, it will become associated to the requested call

#### Output
* output [Person](#person)

### v2.people.json.get
Fetches multiple person records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.people.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of people to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * email_addresses `array`: Filters people by email address
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, last_contacted_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Person](#person)

### v2.people.json.post
Creates a person. Either email_address or phone/last_name must be provided as a unique lookup
on the team.



```js
salesloft.v2.people.json.post({}, context)
```

#### Input
* input `object`
  * email_address `string`: Email address
  * secondary_email_address `string`: Alternate email address
  * personal_email_address `string`: Personal email address
  * first_name `string`: First name
  * last_name `string`: Last name
  * phone `string`: Phone without formatting
  * phone_extension `string`: Phone extension without formatting
  * mobile_phone `string`: Mobile phone without formatting
  * home_phone `string`: Home phone without formatting
  * linkedin_url `string`: Linkedin URL
  * title `string`: Job title
  * city `string`: City
  * state `string`: State
  * country `string`: Country
  * work_city `string`: Work location - city
  * work_state `string`: Work location - state
  * work_country `string`: Work location - country
  * person_company_name `string`: Company name. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_website `string`: Company website. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_industry `string`: Company industry. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * do_not_contact `boolean`: Whether this person can not be contacted. Values are either true or false. Setting this to true will remove the person from all active communications
  * locale `string`: Time locale of the person
  * personal_website `string`: The website of this person
  * twitter_handle `string`: The twitter handle of this person
  * tags `array`: All tags applied to this person
  * custom_fields `array`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * account_id `integer`: ID of the Account to link this person to
  * owner_id `integer`: ID of the User that owns this person
  * import_id `integer`: ID of the Import this person is a part of. A person can be part of multiple imports, but this ID will always be the most recent Import
  * person_stage_id `integer`: ID of the PersonStage of this person
  * autotag_date `boolean`: Whether the date should be added to this person as a tag. Default is false. The tag will be Y-m-d format.

#### Output
* output [Person](#person)

### v2.people.id.json.delete
Deletes a person. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.



```js
salesloft.v2.people.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Person id

#### Output
*Output schema unknown*

### v2.people.id.json.get
Fetches a person, by ID only.



```js
salesloft.v2.people.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Person ID

#### Output
* output [Person](#person)

### v2.people.id.json.put
Updates a person.



```js
salesloft.v2.people.id.json.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * email_address `string`: Email address
  * secondary_email_address `string`: Alternate email address
  * personal_email_address `string`: Personal email address
  * first_name `string`: First name
  * last_name `string`: Last name
  * phone `string`: Phone without formatting
  * phone_extension `string`: Phone extension without formatting
  * mobile_phone `string`: Mobile phone without formatting
  * home_phone `string`: Home phone without formatting
  * linkedin_url `string`: Linkedin URL
  * title `string`: Job title
  * city `string`: City
  * state `string`: State
  * country `string`: Country
  * work_city `string`: Work location - city
  * work_state `string`: Work location - state
  * work_country `string`: Work location - country
  * person_company_name `string`: Company name. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_website `string`: Company website. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_industry `string`: Company industry. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * do_not_contact `boolean`: Whether this person can not be contacted. Values are either true or false. Setting this to true will remove the person from all active communications
  * locale `string`: Time locale of the person
  * personal_website `string`: The website of this person
  * twitter_handle `string`: The twitter handle of this person
  * tags `array`: All tags applied to this person
  * custom_fields `array`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * account_id `integer`: ID of the Account to link this person to
  * owner_id `integer`: ID of the User that owns this person
  * import_id `integer`: ID of the Import this person is a part of. A person can be part of multiple imports, but this ID will always be the most recent Import
  * person_stage_id `integer`: ID of the PersonStage of this person
  * id **required** `string`: Person id

#### Output
* output [Person](#person)

### v2.person_stages.json.get
Fetches multiple person stage records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.person_stages.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of person stages to fetch.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [PersonStage](#personstage)

### v2.person_stages.json.post
Creates a person stage.



```js
salesloft.v2.person_stages.json.post({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the new stage

#### Output
* output [PersonStage](#personstage)

### v2.person_stages.id.json.delete
Deletes a person stage. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.



```js
salesloft.v2.person_stages.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Stage ID

#### Output
*Output schema unknown*

### v2.person_stages.id.json.get
Fetches a person stage, by ID only.



```js
salesloft.v2.person_stages.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Stage ID

#### Output
* output [PersonStage](#personstage)

### v2.person_stages.id.json.put
Updates a person stage.



```js
salesloft.v2.person_stages.id.json.put({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Stage ID
  * name **required** `string`: The name of the stage.

#### Output
* output [PersonStage](#personstage)

### v2.phone_numbers.caller_ids.json.get
Each entry is a possible caller ID match for the number. Multiple
entries may be returned if the phone number is present on more than one
person in the system.  Phone number should be in E.164 format.



```js
salesloft.v2.phone_numbers.caller_ids.json.get({
  "phone_number": ""
}, context)
```

#### Input
* input `object`
  * phone_number **required** `string`: E.164 Phone Number

#### Output
* output `array`
  * items [CallerId](#callerid)

### v2.phone_numbers.recording_settings.id.json.get
Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.
Phone number should be in E.164 format.



```js
salesloft.v2.phone_numbers.recording_settings.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: E.164 Phone Number

#### Output
* output [RecordingSetting](#recordingsetting)

### v2.steps.json.get
Fetches multiple step records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.steps.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of steps to fetch.
  * cadence_id `integer`: Filter by cadence ID
  * type `string`: Filter by step type
  * has_due_actions `boolean`: Filter by whether a step has due actions
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Step](#step)

### v2.steps.id.json.get
Fetches a step, by ID only.



```js
salesloft.v2.steps.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Step ID

#### Output
* output [Step](#step)

### v2.successes.json.get
Fetches multiple success records. The records can be filtered, paged, and sorted according to
the respective parameters.



```js
salesloft.v2.successes.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of successes to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, succeeded_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [Success](#success)

### v2.team.json.get
Fetches the team of the authenticated user.



```js
salesloft.v2.team.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Team](#team)

### v2.team_templates.json.get
Fetches multiple team template records. The records can be filtered, paged, and sorted according to
the respective parameters.

Team templates are templates that are available team-wide. Admins may use
team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,
and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.



```js
salesloft.v2.team_templates.json.get({}, context)
```

#### Input
* input `object`
  * ids `array`: IDs of team templates to fetch. If a record can't be found, that record won't be returned and your request will be successful
  * updated_at `array`: Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
  * sort_by `string`: Key to sort on, must be one of: created_at, updated_at, last_used_at. Defaults to updated_at
  * sort_direction `string`: Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
  * per_page `integer`: How many records to show per page in the range [1, 100]. Defaults to 25
  * page `integer`: The current page to fetch results from. Defaults to 1
  * include_paging_counts `boolean`: Whether to include total_pages and total_count in the metadata. Defaults to false

#### Output
* output `array`
  * items [TeamTemplate](#teamtemplate)

### v2.team_templates.id.json.get
Fetches a team template, by ID only.



```js
salesloft.v2.team_templates.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Team Template ID

#### Output
* output [TeamTemplate](#teamtemplate)

### v2.users.json.get
Non Admin: Lists only your user, or all on team depending on group visibility policy
Team Admin: Lists users associated with your team



```js
salesloft.v2.users.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [User](#user)

### v2.users.id.json.get
Fetches a user, by ID only.



```js
salesloft.v2.users.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: User ID

#### Output
* output [User](#user)



## Definitions

### Account
* Account `object`
  * archived_at `string`: Datetime of when the Account was archived, if archived
  * city `string`: City
  * company_stage [EmbeddedResource](#embeddedresource)
  * company_type `string`: Type of the Account's company
  * conversational_name `string`: Conversational name of the Account
  * country `string`: Country
  * counts [AccountCounts](#accountcounts)
  * created_at `string`: Datetime of when the Account was created
  * creator [EmbeddedResource](#embeddedresource)
  * crm_id `string`: CRM ID, currently Salesforce.com only
  * crm_object_type `string`: CRM object type, currently Salesforce.com only
  * crm_url `string`: CRM url, currently Salesforce.com only
  * custom_fields `object`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * description `string`: Description
  * do_not_contact `boolean`: Whether this company has opted out of communications. Do not contact someone at this company when this is set to true
  * domain `string`: Website domain, not a fully qualified URI
  * founded `string`: Date or year of founding
  * id `integer`: ID of Account
  * industry `string`: Industry
  * last_contacted_at `string`: Datetime this Account was last contacted
  * last_contacted_by [EmbeddedResource](#embeddedresource)
  * last_contacted_person [EmbeddedResource](#embeddedresource)
  * last_contacted_type `string`: The type of the last touch to this Account. Can be call, email, other
  * linkedin_url `string`: Full LinkedIn url
  * locale `string`: Time locale
  * name `string`: Account Full Name
  * owner [EmbeddedResource](#embeddedresource)
  * owner_crm_id `string`: Mapped owner field from the CRM, currently Salesforce.com only
  * phone `string`: Phone number without formatting
  * postal_code `string`: Postal code
  * revenue_range `string`: Estimated revenue range
  * size `string`: Estimated number of people in employment
  * state `string`: State
  * street `string`: Street name and number
  * tags `array`: All tags applied to this Account
    * items `string`
  * twitter_handle `string`: Twitter handle, with @
  * updated_at `string`: Datetime of when the Account was last updated
  * website `string`: Website

### AccountCounts
* AccountCounts `object`
  * people `integer`: Number of people in SalesLoft associated with this Account

### Action
* Action `object`
  * action_details [EmbeddedResource](#embeddedresource)
  * created_at `string`: Datetime of when the Action was created
  * due `boolean`: Whether this step is due
  * due_on `string`: When action is due
  * id `integer`: ID of Action
  * person [EmbeddedResource](#embeddedresource)
  * status `string`: The current state of the person on the cadence. Possible values are:
  * type `string`: The type of this action. Valid types are: email, phone, other. New types may be added in the future.
  * updated_at `string`: Datetime of when the Action was last updated
  * user [EmbeddedResource](#embeddedresource)

### Cadence
* Cadence `object`
  * added_stage [EmbeddedResource](#embeddedresource)
  * archived_at `string`: Datetime of when the cadence was archived, if archived
  * bounced_stage [EmbeddedResource](#embeddedresource)
  * counts [CadenceCounts](#cadencecounts)
  * created_at `string`: Datetime of when the cadence was created
  * creator [EmbeddedResource](#embeddedresource)
  * finished_stage [EmbeddedResource](#embeddedresource)
  * id `integer`: ID of cadence
  * name `string`: Cadence name
  * opt_out_link_included `boolean`: Whether this cadence is configured to include an opt-out link by default
  * owner [EmbeddedResource](#embeddedresource)
  * remove_bounces_enabled `boolean`: Whether this cadence is configured to automatically remove people who have bounced
  * remove_replies_enabled `boolean`: Whether this cadence is configured to automatically remove people who have replied
  * replied_stage [EmbeddedResource](#embeddedresource)
  * shared `boolean`: Whether this cadence is visible to team members (shared)
  * tags `array`: All tags applied to this cadence
    * items `string`
  * team_cadence `boolean`: Whether this cadence is a team cadence.  A team cadence is created by an admin and can be run by all users
  * updated_at `string`: Datetime of when the cadence was last updated

### CadenceCounts
* CadenceCounts `object`
  * cadence_people `integer`: The number of people that have ever been added to the cadence
  * target_daily_people `integer`: The user defined target for number of people to add to the cadence each day

### CadenceMembership
* CadenceMembership `object`
  * added_at `string`: Datetime of when the person was last added to this cadence
  * cadence [EmbeddedResource](#embeddedresource)
  * counts [CadenceMembershipCounts](#cadencemembershipcounts)
  * created_at `string`: Datetime of when the person was first added to this cadence
  * current_state `string`: The current state of the person on the cadence. Possible values are:
  * id `integer`: Cadence membership ID
  * latest_action [EmbeddedResource](#embeddedresource)
  * person [EmbeddedResource](#embeddedresource)
  * person_deleted `boolean`: Whether the associated person has since been deleted
  * updated_at `string`: Datetime of when the record was last updated
  * user [EmbeddedResource](#embeddedresource)

### CadenceMembershipCounts
* CadenceMembershipCounts `object`
  * bounces `integer`: The number of times emails sent from the cadence to the person bounced
  * calls `integer`: The number of times a call was logged from the cadence to the person
  * clicks `integer`: The number of times emails sent from the cadence to the person were clicked
  * replies `integer`: The number of times emails sent from the cadence to the person were replied to
  * sent_emails `integer`: The number of times emails were sent from the cadence to the person
  * views `integer`: The number of times emails sent from the cadence to the person were opened

### Call
* Call `object`
  * action [EmbeddedResource](#embeddedresource)
  * called_person [EmbeddedResource](#embeddedresource)
  * created_at `string`: Datetime of when the call was created
  * crm_activity [EmbeddedResource](#embeddedresource)
  * disposition `string`: Result of the call
  * duration `integer`: Length of the call in seconds
  * id `integer`: ID of Call
  * note [EmbeddedResource](#embeddedresource)
  * recordings `array`: The recordings for this this call and their status
    * items [EmbeddedRecordingResource](#embeddedrecordingresource)
  * sentiment `string`: Outcome of the conversation
  * to `string`: Phone number that received the call
  * updated_at `string`: Datetime of when the call was last updated
  * user [EmbeddedResource](#embeddedresource)

### CallDataRecord
* CallDataRecord `object`
  * call [EmbeddedResource](#embeddedresource)
  * created_at `string`: Datetime of when the call was created
  * direction `string`: Direction of the call. Can be one of: inbound, outbound
  * duration `integer`: Length of the call in seconds
  * from `string`: Phone number that placed the call
  * id `integer`: ID of CallDataRecord
  * recording [EmbeddedRecordingResource](#embeddedrecordingresource)
  * to `string`: Phone number that received the call
  * updated_at `string`: Datetime of when the call was last updated
  * user [EmbeddedResource](#embeddedresource)

### CallInstruction
* CallInstruction `object`
  * created_at `string`: Datetime of when the call instructions were created
  * id `integer`: ID of call instructions
  * instructions `string`: The instructions
  * updated_at `string`: Datetime of when the call instructions were last updated

### CallerId
* CallerId `object`
  * account_name `string`: The account of the person calling
  * display_name `string`: The name of the person calling
  * person [EmbeddedResource](#embeddedresource)
  * title `string`: The title of the person calling

### CrmActivity
* CrmActivity `object`
  * activity_type `string`: The type of activity that is being recorded, if available. The values can change over time, but could be one of: email, phone, email reminder, inmail
  * created_at `string`: Datetime of when the crm activity was created
  * crm_id `string`: The ID of the activity in Salesforce, if written to Salesforce
  * custom_crm_fields `object`: Additional fields that are logged to Salesforce, if mapped by the team at the time of writing to Salesforce
  * description `string`: The description field of the activity in Salesforce
  * error `string`: Information about why this crm activity failed to sync, if it did fail to sync. Failed activities will be automatically retried and may become successful in the future
  * id `integer`: CrmActivity ID
  * person [EmbeddedResource](#embeddedresource)
  * subject `string`: The subject field of the activity in Salesforce
  * updated_at `string`: Datetime of when the crm activity was last updated
  * user [EmbeddedResource](#embeddedresource)

### CustomField
* CustomField `object`
  * created_at `string`: Datetime of when the Custom Field was created
  * field_type `string`: Type of the Custom Field. Value must be one of: person, company, opportunity.
  * id `integer`: ID of Custom Field
  * name `string`: Name of the Custom Field
  * updated_at `string`: Datetime of when the Custom Field was last updated

### Email
* Email `object`
  * action [EmbeddedResource](#embeddedresource)
  * bounced `boolean`: Whether this email bounced
  * click_tracking `boolean`: Whether this email had click tracking enabled
  * counts [EmailCounts](#emailcounts)
  * created_at `string`: Datetime of when the email was created
  * crm_activity [EmbeddedResource](#embeddedresource)
  * headers `object`: Selected headers that are included if this email used them. Available keys are: cc, bcc
  * id `integer`: ID of Email
  * mailing [EmbeddedResource](#embeddedresource)
  * recipient [EmbeddedResource](#embeddedresource)
  * recipient_email_address `string`: Email address of the recipient
  * send_after `string`: When this email will be sent, or null if already sent
  * sent_at `string`: When this email was sent, or null if it was not sent
  * status `string`: Status of this email through the sending process. Possible values are: sent, sent_from_gmail, sent_from_external, pending, pending_reply_check, scheduled, sending, delivering, failed, cancelled, pending_through_gmail, pending_through_external
  * updated_at `string`: Datetime of when the email was last updated
  * user [EmbeddedResource](#embeddedresource)
  * view_tracking `boolean`: Whether this email had view tracking enabled

### EmailCounts
* EmailCounts `object`
  * attachments `integer`: The number of attachments on the email
  * clicks `integer`: The number of times links in the email were clicked
  * replies `integer`: The number of replies the email received
  * unique_devices `integer`: The number of unique devices that opened the email
  * unique_locations `integer`: The number of unique locations that opened the email
  * views `integer`: The number of times the email was opened

### EmailTemplate
* EmailTemplate `object`
  * archived_at `string`: Datetime of when the email template was archived, if archived
  * body `string`: Sanitized body of the email template without email signature
  * cadence_template `boolean`: Whether this email template is only used on a cadence step. These templates are not visible in the SalesLoft application template list. If false, this email template is visible in the SalesLoft application, and may be used when composing an email or creating a cadence step.
  * click_tracking_enabled `boolean`: Whether click tracking is enabled for this email template
  * counts [EmailTemplateCounts](#emailtemplatecounts)
  * created_at `string`: Datetime of when the email template was created
  * id `integer`: ID of email template
  * last_used_at `string`: Datetime of when the email template was last used
  * open_tracking_enabled `boolean`: Whether open tracking is enabled for this email template
  * shared `boolean`: Whether this email template is visible to team members (shared)
  * subject `string`: Subject of the email template
  * team_template [EmbeddedResource](#embeddedresource)
  * template_owner [EmbeddedResource](#embeddedresource)
  * title `string`: Title of the email template
  * updated_at `string`: Datetime of when the email template was last updated

### EmailTemplateCounts
* EmailTemplateCounts `object`
  * bounces `integer`: The number of bounces the email template received
  * clicks `integer`: The number of times links in the email template were clicked
  * replies `integer`: The number of replies the email template received
  * sent_emails `integer`: The number of times the email template was sent out
  * views `integer`: The number of times the email template was opened

### EmbeddedRecordingResource
* EmbeddedRecordingResource `object`
  * status `string`: The processing status of the recording. A completed status means that the recording is fully available
  * url `string`: The url of the recording

### EmbeddedResource
* EmbeddedResource `object`
  * _href `string`: Resource URL, pointed at your API version, present if this resource is available in the API
  * id `integer`: ID of the resource

### Import
* Import `object`
  * created_at `string`: Datetime of when the import was created
  * current_people_count `integer`: Count of People that have not been deleted
  * id `integer`: Import ID
  * imported_people_count `integer`: Count of People that have ever been on this Import
  * name `string`: Name of Import
  * updated_at `string`: Datetime of when the import was last updated, ignoring relationship changes

### Note
* Note `object`
  * associated_with [EmbeddedResource](#embeddedresource)
  * call [EmbeddedResource](#embeddedresource)
  * content `string`: The content of the note
  * created_at `string`: Datetime of when the note was created
  * id `integer`: Note ID
  * updated_at `string`: Datetime of when the note was last updated
  * user [EmbeddedResource](#embeddedresource)

### Person
* Person `object`
  * account [EmbeddedResource](#embeddedresource)
  * bouncing `boolean`: Whether this person's current email address has bounced
  * city `string`: City
  * country `string`: Country
  * counts [PersonCounts](#personcounts)
  * created_at `string`: Datetime of when the person was created
  * crm_id `string`: CRM ID, currently Salesforce.com only
  * crm_object_type `string`: CRM object type, currently Salesforce.com only
  * crm_url `string`: CRM url, currently Salesforce.com only
  * custom_fields `object`: Custom fields are defined by the user's team. Only fields with values are presented in the API.
  * display_name `string`: Either the full name or the email address. Use this when showing a person's name
  * do_not_contact `boolean`: Whether or not this person has opted out of communications. Do not contact someone when this is set to true
  * email_address `string`: Email address
  * first_name `string`: First name
  * home_phone `string`: Home phone without formatting
  * id `integer`: Person ID
  * import [EmbeddedResource](#embeddedresource)
  * last_contacted_at `string`: Last datetime this person was contacted
  * last_contacted_by [EmbeddedResource](#embeddedresource)
  * last_contacted_type `string`: The type of the last touch to this person. Can be call, email, other
  * last_name `string`: Last name
  * last_replied_at `string`: Last datetime this person replied to an email
  * linkedin_url `string`: Linkedin URL
  * locale `string`: Time locale of the person
  * mobile_phone `string`: Mobile phone without formatting
  * owner [EmbeddedResource](#embeddedresource)
  * owner_crm_id `string`: Mapped owner field from the CRM, currently Salesforce.com only
  * person_company_industry `string`: Company industry. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_name `string`: Company name. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_company_website `string`: Company website. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
  * person_stage [EmbeddedResource](#embeddedresource)
  * personal_email_address `string`: Personal email address
  * personal_website `string`: The website of this person
  * phone `string`: Phone without formatting
  * phone_extension `string`: Phone extension without formatting
  * secondary_email_address `string`: Alternate email address
  * state `string`: State
  * tags `array`: All tags applied to this person
    * items `string`
  * title `string`: Job title
  * twitter_handle `string`: The twitter handle of this person
  * updated_at `string`: Datetime of when the person was last updated
  * work_city `string`: Work location - city
  * work_country `string`: Work location - country
  * work_state `string`: Work location - state

### PersonCounts
* PersonCounts `object`
  * calls `integer`: The number of calls logged to this person
  * emails_bounced `integer`: The number of unique emails sent to this person that bounced
  * emails_clicked `integer`: The number of unique emails clicked by this person
  * emails_replied_to `integer`: The number of unique emails replied to by this person
  * emails_sent `integer`: The number of emails sent to this person
  * emails_viewed `integer`: The number of unique emails viewed by this person

### PersonStage
* PersonStage `object`
  * created_at `string`: Datetime of when the Person Stage was created
  * id `integer`: ID of Person Stage
  * name `string`: Name of Person Stage
  * updated_at `string`: Datetime of when the Person Stage was last updated

### RecordingSetting
* RecordingSetting `object`
  * recording_default `boolean`: Whether this phone number should record by default

### Step
* Step `object`
  * cadence [EmbeddedResource](#embeddedresource)
  * created_at `string`: Datetime of when the Step was created
  * day `integer`: Day this step is associated with up
  * details [EmbeddedResource](#embeddedresource)
  * disabled `boolean`: Whether this step is currently active
  * display_name `string`: Display name of the step
  * id `integer`: ID of Step
  * step_number `integer`: The number of the step for this day
  * type `string`: The type of the action scheduled by this step. Valid types are: email, phone, other. New types may be added in the future.
  * updated_at `string`: Datetime of when the Step was last updated

### Success
* Success `object`
  * counts [SuccessCounts](#successcounts)
  * created_at `string`: Datetime of when the success was created
  * id `integer`: ID of success
  * latest_action [EmbeddedResource](#embeddedresource)
  * latest_call [EmbeddedResource](#embeddedresource)
  * latest_email [EmbeddedResource](#embeddedresource)
  * person [EmbeddedResource](#embeddedresource)
  * succeeded_at `string`: Datetime of when the success was recorded
  * success_window_started_at `string`: Datetime of when this person was first worked, leading up to the success
  * updated_at `string`: Datetime of when the success was last updated
  * user [EmbeddedResource](#embeddedresource)

### SuccessCounts
* SuccessCounts `object`
  * total_calls `integer`: The total number of calls made in this success window
  * total_emails `integer`: The total number of emails made in this success window
  * total_other_touches `integer`: The total number of other touches made in this success window

### Team
* Team `object`
  * allow_automated_email_steps `boolean`: Whether team members are allowed to have automated email steps
  * call_recording_disabled `boolean`: Whether all call recording is disabled
  * click_tracking_default `boolean`: The team default for click tracking when composing emails
  * created_at `string`: Datetime of when the team was created
  * custom_tracking_domain `string`: The domain click and open tracking will be proxied through
  * dispositions_required `boolean`: Whether team members are required to mark disposition at the end of calls
  * email_daily_limit `integer`: Daily email limit for each member on the team
  * group_privacy_setting `string`: Visibility setting for resources across the team. Possible values are: group_public, all_public.
  * id `integer`: Team ID
  * license_limit `integer`: Count of seats that this team has licensed
  * local_dial_enabled `boolean`: Whether this team has local dial enabled
  * name `string`: Team name
  * plan `string`: Plan type of the team, Possible values are: group, professional, enterprise
  * record_by_default `boolean`: Whether calls will record by default
  * sentiments_required `boolean`: Whether team members are required to log sentiments
  * team_visibility_default `string`: The default visibility of resources on the team, in the UI only. The API does not utilize this default.
  * updated_at `string`: Datetime of when the team was last updated

### TeamTemplate
* TeamTemplate `object`
  * archived_at `string`: Datetime of when the team template was archived, if archived
  * body `string`: Body of the team template
  * click_tracking_enabled `boolean`: Whether click tracking is enabled for this team template
  * counts [TeamTemplateCounts](#teamtemplatecounts)
  * created_at `string`: Datetime of when the team template was created
  * id `string`: ID of team template
  * last_modified_at `string`: Datetime of when the team template was last modified
  * last_modified_user [EmbeddedResource](#embeddedresource)
  * last_used_at `string`: Datetime of when the team template was last used
  * open_tracking_enabled `boolean`: Whether open tracking is enabled for this team template
  * subject `string`: Subject of the team template
  * title `string`: Title of the team template
  * updated_at `string`: Datetime of when the team template was last updated

### TeamTemplateCounts
* TeamTemplateCounts `object`
  * bounces `integer`: The number of bounces the team template received
  * clicks `integer`: The number of times links in the team template were clicked
  * replies `integer`: The number of replies the team template received
  * sent_emails `integer`: The number of times the team template was sent out
  * views `integer`: The number of times the team template was opened

### User
* User `object`
  * active `boolean`: Whether an user is currently active in SalesLoft
  * bcc_email_address `string`: Address that will be BBC'd on all emails from this user
  * click_to_call_enabled `boolean`: Whether this user has click to call enabled
  * created_at `string`: Datetime of when the user was created
  * crm_connected `boolean`: Whether the user has a crm connected
  * email `string`: Email address provided to accounts.salesloft.com
  * email_client_configured `boolean`: Whether this user has a email client configured
  * email_client_email_address `string`: Email address associated with the email client of the user
  * email_signature `string`: Email signature
  * email_signature_click_tracking_disabled `boolean`: Whether this user has click tracking disabled in email signature
  * email_signature_type `string`: Email signature type
  * first_name `string`: First name of user
  * from_address `string`: The from address of this user
  * full_email_address `string`: RFC 5322 compliant email address
  * group [EmbeddedResource](#embeddedresource)
  * id `integer`: User ID
  * last_name `string`: Last name of user
  * local_dial_enabled `boolean`: Whether this user has Local Dial enabled
  * name `string`: Display name of user
  * phone_client [EmbeddedResource](#embeddedresource)
  * phone_number_assignment [EmbeddedResource](#embeddedresource)
  * sending_email_address `string`: The email address that email of the user will be sent from, resolved in the following resolution order: from_user, email_client_email_address, email
  * slack_username `string`: Slack username
  * team [EmbeddedResource](#embeddedresource)
  * team_admin `boolean`: Team Admin
  * time_zone `string`: User Time Zone
  * twitter_handle `string`: Twitter handle
  * updated_at `string`: Datetime of when the user was last updated


