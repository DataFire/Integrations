# @datafire/presalytics_story

Client library for Story

## Installation and Usage
```bash
npm install --save @datafire/presalytics_story
```
```js
let presalytics_story = require('@datafire/presalytics_story').create({
  jwt: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API

## Actions

### story_get
Returns a list of stories for this user identifie via the access token presentated to the api


```js
presalytics_story.story_get({}, context)
```

#### Input
* input `object`
  * include_relationships `boolean`: Indicate whether the returned object should include child relationships
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.

#### Output
* output `array`
  * items [story](#story)

### story_post
Upload new story to presalytics api


```js
presalytics_story.story_post({
  "body": null
}, context)
```

#### Input
* input `object`
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
  * body **required** [outline](#outline)

#### Output
* output [story](#story)

### cache_post
An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.


```js
presalytics_story.cache_post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [cache_post_request](#cache_post_request)

#### Output
*Output schema unknown*

### cache_nonce_get
An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)


```js
presalytics_story.cache_nonce_get({
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * nonce **required** `string`: A one-time use token for retieving items in the users cache

#### Output
* output `string`: html document with a link to the login page

### collaborators_post
Allows for bulk updates on collaborator metadata.  Restricted to internal admins


```js
presalytics_story.collaborators_post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [collaborator_bulk_update_request](#collaborator_bulk_update_request)

#### Output
* output `array`
  * items [permission_type](#permission_type)

### get_environment
pass rendering metadata to the client-side scripts


```js
presalytics_story.get_environment(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### story_post_file
Upload new story to presalytics api via an Open Office Xml file


```js
presalytics_story.story_post_file({
  "body": null
}, context)
```

#### Input
* input `object`
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.

#### Output
* output [story](#story)

### story_post_file_json
Upload new story to presalytics api via an Open Office Xml file


```js
presalytics_story.story_post_file_json({}, context)
```

#### Input
* input `object`
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
  * body [file_upload](#file_upload)

#### Output
* output [story](#story)

### spec_no_tags
json-formatted version of this spec with the tags removed to help with codegen processes


```js
presalytics_story.spec_no_tags(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### story_outline_schema
Json Schema for validating Story Outline objects


```js
presalytics_story.story_outline_schema({
  "schema_version": ""
}, context)
```

#### Input
* input `object`
  * schema_version **required** `string`: The semanitic version of a schema (e.g. '0.3.1')

#### Output
*Output schema unknown*

### story_permission_types_get
Returns a list of possible user permission types


```js
presalytics_story.story_permission_types_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [permission_type](#permission_type)

### session_id_delete
Remove a session and dependant data.


```js
presalytics_story.session_id_delete({
  "session_id": ""
}, context)
```

#### Input
* input `object`
  * session_id **required** `string`: The primary key for a view session

#### Output
*Output schema unknown*

### session_id_get
Get session metadata


```js
presalytics_story.session_id_get({
  "session_id": ""
}, context)
```

#### Input
* input `object`
  * session_id **required** `string`: The primary key for a view session
  * include_relationships `boolean`: Indicate whether the returned object should include child relationships

#### Output
* output [session](#session)

### sessions_id_views_get
Get data for all views in a session


```js
presalytics_story.sessions_id_views_get({
  "session_id": ""
}, context)
```

#### Input
* input `object`
  * session_id **required** `string`: The primary key for a view session

#### Output
* output `array`
  * items [view](#view)

### sessions_id_views_post
Create a page view object for a viewing session


```js
presalytics_story.sessions_id_views_post({
  "session_id": "",
  "body": {
    "pageNumber": 0,
    "startTime": "",
    "endTime": ""
  }
}, context)
```

#### Input
* input `object`
  * session_id **required** `string`: The primary key for a view session
  * body **required** `object`: A page view required a page number from the story outline to be created
    * activeMSecs `integer`
    * additional `string`
    * endTime **required** `string`
    * pageNumber **required** `integer`
    * startTime **required** `string`

#### Output
* output [view](#view)

### views_id_delete
Remove a view and dependant data.


```js
presalytics_story.views_id_delete({
  "view_id": ""
}, context)
```

#### Input
* input `object`
  * view_id **required** `string`: The primary key for a page view within a session

#### Output
*Output schema unknown*

### views_id_get
Get view meta data


```js
presalytics_story.views_id_get({
  "view_id": ""
}, context)
```

#### Input
* input `object`
  * view_id **required** `string`: The primary key for a page view within a session

#### Output
* output [view](#view)

### story_id_delete
Remove a story and dependant data.


```js
presalytics_story.story_id_delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
*Output schema unknown*

### story_id_get
Returns story metadata, inlcuding json object with story outline


```js
presalytics_story.story_id_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * include_relationships `boolean`: Indicate whether the returned object should include child relationships
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
  * full `boolean`: Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)
  * refresh_cache `boolean`: Force the api reload the `Story full` object

#### Output
* output [story](#story)

### story_id_put
Update story metadata, including story outline


```js
presalytics_story.story_id_put({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
  * body **required** [story](#story)

#### Output
* output [story](#story)

### story_id_analytics
returns an html document containing session and event metrics for the story


```js
presalytics_story.story_id_analytics({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `string`: html document with reveal.js presenation of story

### story_id_collaborators_get
Gets a list users that can read or edit this story


```js
presalytics_story.story_id_collaborators_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `array`
  * items [story_collaborator](#story_collaborator)

### story_id_collaborators_post
Add a colloborator to this story


```js
presalytics_story.story_id_collaborators_post({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** [add_new_collaborator_request](#add_new_collaborator_request)

#### Output
* output [story_collaborator](#story_collaborator)

### story_id_collaborators_userid_permissiontype_get
Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden


```js
presalytics_story.story_id_collaborators_userid_permissiontype_get({
  "id": "",
  "story_collaborator_userid": "",
  "permissiontype": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * story_collaborator_userid **required** `string`: The presalytics userid (NOT the Id of the story_collaborator object)
  * permissiontype **required** `string`: the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)

#### Output
*Output schema unknown*

### story_id_collaborators_inactive_post
Edit story permissions for inactive users.  Requires admin rights.


```js
presalytics_story.story_id_collaborators_inactive_post({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** [modify_inactive_collaborator](#modify_inactive_collaborator)

#### Output
* output [story_collaborator](#story_collaborator)

### story_id_collaborators_userid_delete
Remove a collaborator from this story


```js
presalytics_story.story_id_collaborators_userid_delete({
  "id": "",
  "story_collaborator_userid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * story_collaborator_userid **required** `string`: The presalytics userid (NOT the Id of the story_collaborator object)

#### Output
*Output schema unknown*

### story_id_collaborators_userid_get
Data to help you understand the access rights of a particular collaborator on this story


```js
presalytics_story.story_id_collaborators_userid_get({
  "id": "",
  "story_collaborator_userid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * story_collaborator_userid **required** `string`: The presalytics userid (NOT the Id of the story_collaborator object)

#### Output
* output [story_collaborator](#story_collaborator)

### story_id_collaborators_userid_put
Modify a user's access right to this story (e.g., grant edit permissions)


```js
presalytics_story.story_id_collaborators_userid_put({
  "id": "",
  "story_collaborator_userid": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * story_collaborator_userid **required** `string`: The presalytics userid (NOT the Id of the story_collaborator object)
  * body **required** [story_collaborator](#story_collaborator)

#### Output
* output [story_collaborator](#story_collaborator)

### story_id_events_get
Get a list of Events available to users of this story


```js
presalytics_story.story_id_events_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `array`
  * items [event](#event)

### story_id_events_post
Add a message to the Story's conversation


```js
presalytics_story.story_id_events_post({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** [manage_event](#manage_event)

#### Output
* output `object`

### story_id_file_post
Upload a file to an existing story


```js
presalytics_story.story_id_file_post({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * replace_existing `boolean`: Indicates whether a put or post method would replace the existing contents
  * obsolete_id `string`: A primary key pointing to an obsolete item in the story. Item type is context-dependent
  * include_outline `boolean`: Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.

#### Output
* output [story](#story)

### story_id_file_ooxmlautomationid_delete
Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)


```js
presalytics_story.story_id_file_ooxmlautomationid_delete({
  "id": "",
  "ooxml_automation_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * ooxml_automation_id **required** `string`: the id of the ooxml_automation object

#### Output
*Output schema unknown*

### story_id_file_ooxmlautomationid_get
Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)


```js
presalytics_story.story_id_file_ooxmlautomationid_get({
  "id": "",
  "ooxml_automation_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * ooxml_automation_id **required** `string`: the id of the ooxml_automation object

#### Output
* output `string`

### story_id_messages_get
Get a list of messages that have been send in this story


```js
presalytics_story.story_id_messages_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `array`
  * items [message](#message)

### story_id_messages_post
Add a message to the Story's conversation


```js
presalytics_story.story_id_messages_post({
  "id": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** `string`

#### Output
*Output schema unknown*

### story_id_outline_get
Returns Story's outline


```js
presalytics_story.story_id_outline_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `string`

### story_id_outline_post
Update a story outline.


```js
presalytics_story.story_id_outline_post({
  "id": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** `string`

#### Output
*Output schema unknown*

### story_id_public
returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True


```js
presalytics_story.story_id_public({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `string`: html document with reveal.js presenation of story

### story_id_reveal
returns an html document containing a reveal.js epresentation of the story


```js
presalytics_story.story_id_reveal({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output `string`: html document with reveal.js presenation of story

### story_id_sessions_get
Get a list of sessions asscoaited with this story


```js
presalytics_story.story_id_sessions_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * include_relationships `boolean`: Indicate whether the returned object should include child relationships

#### Output
* output `array`
  * items [session](#session)

### story_id_session_post
Create a new session


```js
presalytics_story.story_id_session_post({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object
  * body **required** [create_session_request](#create_session_request)

#### Output
* output [session](#session)

### story_id_status_get
Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)


```js
presalytics_story.story_id_status_get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id from the story object

#### Output
* output [status](#status)



## Definitions

### add_new_collaborator_request
* Collaborator permission data `object`: required subset of collaborator data to get a permission
  * collaborator_type `string`
  * user_email `string`
  * user_id `string`

### base_model
* BaseModel `object`: Base model for all types
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`

### cache_post_request
* Cache Post Request body `object`
  * current_user_id `string`
  * nonce `string`
  * subdocument `string`

### collaborator_bulk_update_request
* Collaborator data to change `object`: allows for bulk updating of user_ids and active status based on a lead id or user_id
  * active `boolean`
  * lead_id `integer`
  * user_id `string`

### create_session_request
* session-create `object`: Request body for creating a session
  * host `string`
  * collaboratorUserId `string`

### event
* Event: An Story Event object
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * attributes `string`
  * chat_prompt `string`
  * conversation_id `string`
  * dom_selectors `string`
  * is_chat_hidden `boolean`
  * is_notify_enabled `boolean`
  * name `string`

### file_upload
* File Upload `object`: A Base64 encoded file object
  * content_length `integer`
  * file `string`
  * file_name `string`
  * mimetype `string`

### manage_event
* Event Actions `object`
  * action `string` (values: create, fire, change, delete)
  * action_params `object`
  * name `string`

### message
* Message `object`: A conversation message
  * body `string`
  * id `string`
  * remote `boolean`
  * timestamp `string`
  * userId `string`
  * userName `string`

### modify_inactive_collaborator
* Collaborator permission data `object`: Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence.
  * action `string`
  * lead_id `integer`
  * user_id `string`

### ooxml_document
* Ooxml Document: A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * delete_target_on_story_delete `boolean`
  * ooxml_automation_id `string`
  * story_id `string`

### outline
* Story Outline `object`: story_outline (json object)
  * outline `string`

### permission_type
* Permission Type: A permission type that can be applied to story collaborator
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * can_add_collaborators `boolean`
  * can_delete `boolean`
  * can_edit `boolean`
  * can_view `boolean`
  * name `string`

### problem_detail
* Problem Detail `object`: Error reponse model
  * detail `string`
  * status `integer`
  * title `string`
  * type `string`

### session
* Session: A user session with an open story
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * host `string`
  * collaborator [story_collaborator](#story_collaborator)
  * collaborator_id `string`
  * outline_revision `integer`
  * views `array`
    * items [view](#view)

### status
* Status `object`: Status response when returning 202s
  * status `string`

### story
* Story: Model for story objects
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * collaborators `array`
    * items [story_collaborator](#story_collaborator)
  * is_public `boolean`
  * ooxml_documents `array`
    * items [ooxml_document](#ooxml_document)
  * outline `string`
  * outline_history `array`
    * items [story_outline_history](#story_outline_history)
  * revision `integer`
  * title `string`

### story_collaborator
* Story Collaborator: Description of a user that can collaborate on a story
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * active `boolean`
  * email `string`
  * lead_id `integer`
  * name `string`
  * permission_type [permission_type](#permission_type)
  * permission_type_id `string`
  * story_id `string`
  * user_id `string`

### story_outline_history
* Story Outline History: A revision repository for story outlines
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * collaborator_user_id `string`
  * outline `string`
  * revision_number `integer`
  * story_id `string`

### view
* View: A Page view within a session-create
  * created_at `string`
  * created_by `string`
  * id `string`
  * updated_at `string`
  * updated_by `string`
  * active_msecs `integer`
  * additional `string`
  * end_time `string`
  * page_number `integer`
  * session_id `string`
  * start_time `string`
  * total_msecs `integer`


