# @datafire/osf

Client library for OSF APIv2 Documentation

## Installation and Usage
```bash
npm install --save @datafire/osf
```
```js
let osf = require('@datafire/osf').create();

.then(data => {
  console.log(data);
});
```

## Description

## https://api.osf.io/v2/

## Actions

### base_read
Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).

#### Returns

A JSON object with `meta` and `links` keys.

The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.

The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [metaschemas](#tag/Metaschemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)


```js
osf.base_read(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### logs_actions
A log can have one of many actions. The complete list of loggable actions (in the format {identifier}: {description}) is as follows:

* `project_created`: A Node is created

* `project_registered`: A Node is registered

* `project_deleted`: A Node is deleted
---

* `created_from`: A Node is created using an existing Node as a template

* `pointer_created`: A Pointer is created

* `pointer_forked`: A Pointer is forked

* `pointer_removed`: A Pointer is removed

* `node_removed`: A component is deleted

* `node_forked`: A Node is forked
---

* `made_public`: A Node is made public

* `made_private`: A Node is made private

* `tag_added`: A tag is added to a Node

* `tag_removed`: A tag is removed from a Node

* `edit_title`: A Node's title is changed

* `edit_description`: A Node's description is changed

* `updated_fields`: One or more of a Node's fields are changed

* `external_ids_added`: An external identifier is added to a Node (e.g. the DOI)
---

* `view_only_link_added`: A view-only link was added to a Node

* `view_only_link_removed`:  A view-only link was removed from a Node

---

* `contributor_added`: A Contributor is added to a Node

* `contributor_removed`: A Contributor is removed from a Node

* `contributors_reordered`: A Contributor's position in a Node's bibliography is changed

* `permissions_updated`: A Contributor`s permissions on a Node are changed

* `made_contributor_visible`: A Contributor is made bibliographically visible on a Node

* `made_contributor_invisible`: A Contributor is made bibliographically invisible on a Node

---

* `wiki_updated`: A Node's wiki is updated

* `wiki_deleted`: A Node's wiki is deleted

* `wiki_renamed`: A Node's wiki is renamed

* `made_wiki_public`: A Node's wiki is made public

* `made_wiki_private`: A Node's wiki is made private

---

* `addon_added`: An add-on is linked to a Node

* `addon_removed`: An add-on is unlinked from a Node

* `addon_file_moved`: A File in a Node's linked add-on is moved

* `addon_file_copied`: A File in a Node's linked add-on is copied

* `addon_file_renamed`: A File in a Node's linked add-on is renamed
---

* `node_authorized`: An addon is authorized for a project

* `node_deauthorized`: An addon is deauthorized for a project
---

* `folder_created`: A Folder is created in a Node's linked add-on

* `file_added`: A File is added to a Node's linked add-on

* `file_updated`: A File is updated on a Node's linked add-on

* `file_removed`: A File is removed from a Node's linked add-on

* `file_restored`: A File is restored in a Node's linked add-on

---

* `comment_added`: A Comment is added to some item

* `comment_removed`: A Comment is removed from some item

* `comment_updated`: A Comment is updated on some item

---

* `embargo_initiated`: An embargoed Registration is proposed on a Node

* `embargo_approved`: A proposed Embargo of a Node is approved

* `embargo_cancelled`: A proposed Embargo of a Node is cancelled

* `embargo_completed`: A proposed Embargo of a Node is completed
---

* `retraction_initiated`: A Withdrawal of a Registration is proposed

* `retraction_approved`: A Withdrawal of a Registration is approved

* `retraction_cancelled`: A Withdrawal of a Registration is cancelled
---

* `registration_initiated`: A Registration of a Node is proposed

* `registration_approved`: A proposed Registration is approved

* `registration_cancelled`: A proposed Registration is cancelled
---

* `preprint_initiated`: A preprint is made from the node (deprecated log, preprints are no longer made from nodes)

* `preprint_license_updated`: A license is added or updated to the preprint (deprecated log, preprint actions are no longer logged on the node)

* `preprint_file_updated`: The primary file of a preprint is updated (deprecated log, this action is now logged on the preprint)


```js
osf.logs_actions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### addons_list
A paginated list of addons configurable with the OSF

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.


```js
osf.addons_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the addon entity.
      * categories `array`: List of categories this addon belongs to.
        * items `string` (values: documentation, storage, bibliography, other, security, citations)
      * description `string`: The description of the service provider.
      * name `string`: The name of the third-party service provider.
      * url `string`: The URL to the third-party service provider.
    * id `string`: The identifier of the addon entity.
    * type `string`: The type identifier of the addon entity (`addons`).

### citations_styles_list
A paginated list of all standard citation styles available for rendering citations.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.citations_styles_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the citation style entity.
      * date_parsed **required** `string`: The time at which the citation style was first parsed, as an iso8601 formatted timestamp.
      * short_title `string`: The short name for the citation style.
      * summary `string`: The summary of the citation style.
      * title **required** `string`: The official name of the citation style.
    * id **required** `string`: The identifier of the citation style, e.g. APA.
    * links `object`: URLs to alternative representations of the citation style entity.
    * type **required** `string`: The type identifier of the citation style entity (`citation-styles`).

### citations_styles_read
Retrieves the details of a citation style.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.citations_styles_read({
  "style_id": ""
}, context)
```

#### Input
* input `object`
  * style_id **required** `string`: The unique identifier of the citation style.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the citation style entity.
    * date_parsed **required** `string`: The time at which the citation style was first parsed, as an iso8601 formatted timestamp.
    * short_title `string`: The short name for the citation style.
    * summary `string`: The summary of the citation style.
    * title **required** `string`: The official name of the citation style.
  * id **required** `string`: The identifier of the citation style, e.g. APA.
  * links `object`: URLs to alternative representations of the citation style entity.
  * type **required** `string`: The type identifier of the citation style entity (`citation-styles`).

### comments_delete
Deletes a comment. This action can be undone by setting deleted to False in a comment update request.

#### Returns

If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.comments_delete({
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The unique identifier of the comment you wish to delete.

#### Output
*Output schema unknown*

### comments_read
Retrieves the details of a comment

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.comments_read({
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The unique identifier of the comment you wish to retrieve.

#### Output
* output `object`
  * attributes `object`: The properties of the comment entity.
    * can_edit `boolean`: Whether or not the current user has permission to edit this comment
    * content `string`: The content of the comment.
    * date_created `string`: The time at which the comment was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the comment was last modified, as an iso8601 formatted timestamp.
    * deleted `boolean`: Whether or not the comment is deleted.
    * has_children `boolean`: Whether or not the comment has replies.
    * has_report `boolean`: Whether or not the comment the current user reported this as spam.
    * is_abuse `boolean`: Whether or not the comment is flagged or confirmed spam.
    * is_ham `boolean`: Whether or not an admin checked the legitimacy of this comment.
    * modified `boolean`: Whether or not the comment has been edited.
    * page `string`: The page type the comment is on, e.g. `node`, `registration`, `wiki`, `files`.
  * id **required** `string`: The identifier of the comment entity.
  * links `object`: URLs to alternative representations of the comment entity.
    * self `string`: A link to the detail page for the comment.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the comment entity.
    * node `string`: A relationship to the node the comment is on.
    * replies `string`: A relationship to the replies to the comment.
    * reports `string`: A relationship to the reports connected to the comment.
    * target `string`: A relationship to the target of the comment.
    * user `string`: A relationship to the user who created the comment.
  * type `string`: The type identifier of the comment entity (`comments`).

### comments_put
Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.comments_put({
  "comment_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The unique identifier of the comment you wish to update.
  * body **required** `object`

#### Output
*Output schema unknown*

### files_detail
Retrieves the details of a file (or folder)

#### Returns

Returns a JSON object with a `data` key containing the metadata for the requested file or folder. If a metadata request is issued against a folder, the request will return the metadata for every object in the folder. If the ?info= query parameter is present for a request against a folder, the response will contain the metadata for the folder itself instead of the metadata for the objects in the folder.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Waterbutler API actions

Files can be modified via the Waterbutler URLs found in the `links` key of the response (new_folder, move, upload, download, and delete). Further information about how to interact with files can be found in the [Waterbutler API documentation](https://waterbutler.readthedocs.io/en/latest/api.html#v1-api).


#### Download (files)

To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.

#### Create Subfolder (folders)

You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.

#### Upload New File (folders)


  To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.


#### Update Existing File (file)

To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.

#### Rename (files, folders)

To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.

#### Move & Copy (files, folders)

Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.


```js
osf.files_detail({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier of the file you wish to retrieve.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file entity.
      * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
      * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
      * current_version `integer`: Version number of the file.
      * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
      * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
      * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
      * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
      * kind `string`: The kind of files object it is (`file` or `folder`).
      * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
      * materialized_path `string`: Unix-style path to the file relative to the provider root.
      * name `string`: Name of the file
      * path `string`: The unique identifier for this file entity for this project and storage provider.
      * provider `string`: The id of the file provider (e.g., `osfstorage`)
      * size `integer`: Size of the file in bytes.
      * tags `array`: A list of strings that describe this file, as entered by project contributors.
        * items `string`
    * id `string`: The identifier of the file entity.
    * links `object`: Links to alternative representations of the file entity.
      * delete `string`: The Waterbutler API route for file deletions.
      * download `string`: The Waterbutler API route for file downloads.
      * html `string`: A link to the file on the OSF.
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
      * render `string`: A Waterbutler API route for rendering the file.
      * self `string`: A link to the detail page for the file.
      * upload `string`: The Waterbutler API route for file uploads.
    * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
      * checkout `string`: A link to the user who checked out the file.
      * comments `string`: A link to the comments on the file.
      * node `string`: A link to the node the file is on.
      * versions `string`: A link to the versions of the file.
    * type `string`: The type identifier of the file entity (`files`).

### files_patch
Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.files_patch({
  "file_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier of the file you wish to update.
  * body **required** `object`

#### Output
*Output schema unknown*

### files_versions
A paginated list of all file versions.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.files_versions({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier of the file from which you want to retrieve versions.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file versions entity.
      * content_type `object`: MIME content-type for the file (null if unavailable).
      * date_created `string`: The date of the file version creation, as an iso8601 formatted timestamp.
      * size `integer`: Size of the file in bytes.
    * id `string`: The identifier of the file version.
    * links `object`: Links to alternative representations of the file version entity.
      * download `string`: The Waterbutler API route for downloading the version.
      * html `string`: A link to the html version page.
      * render `string`: A Waterbutler API route for rendering the version.
      * self `string`: A link to the detail page for a file version.
    * type `string`: The type identifier of the file versions entity (`file_versions`).

### files_version_detail
Retrieves the details of a file version

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.files_version_detail({
  "file_id": "",
  "version_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier of the file from which you want to retrieve versions.
  * version_id **required** `string`: The file version number you want to retrieve.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file versions entity.
      * content_type `object`: MIME content-type for the file (null if unavailable).
      * date_created `string`: The date of the file version creation, as an iso8601 formatted timestamp.
      * size `integer`: Size of the file in bytes.
    * id `string`: The identifier of the file version.
    * links `object`: Links to alternative representations of the file version entity.
      * download `string`: The Waterbutler API route for downloading the version.
      * html `string`: A link to the html version page.
      * render `string`: A Waterbutler API route for rendering the version.
      * self `string`: A link to the detail page for a file version.
    * type `string`: The type identifier of the file versions entity (`file_versions`).

### groups_list
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

A paginated list of groups.  Only groups the logged-in user belongs to will be returned. The returned groups are sorted by their `date_modified`, with the most recently updated groups appearing first.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 groups. Each resource in the array is a separate group object and contains the full representation of the group, meaning additional requests to a group's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include groups that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/groups/5c0571f4b146c900085f39a3/?filter[name]=lab.

Groups may be filtered by their `name`.
You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.groups_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name **required** `string`: The name of the group.
    * id `string`: The unique identifier of the group entity.
    * links `object`: URLs to alternative representations of the group entity.
      * html `string`: A link to the group's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this group.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the group entity.
      * members `string`: A link to the list of the members of this group.
    * type **required** `string`: The type identifier of the group entity (`groups`).

### groups
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Creates a new group.
On the OSF, a group is a collection of users; examples are a lab group or a class. Users can add other users to groups, and then allow that group to access a project or several projects.
#### Required
Required fields for creating a group include:

&nbsp;&nbsp;&nbsp;&nbsp;`name`

Note: The creator is automatically made a manager of the group.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created group, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.groups({
  "body": {
    "type": "",
    "attributes": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * attributes **required** `object`: The properties of the group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name **required** `string`: The name of the group.
    * id `string`: The unique identifier of the group entity.
    * links `object`: URLs to alternative representations of the group entity.
      * html `string`: A link to the group's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this group.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the group entity.
      * members `string`: A link to the list of the members of this group.
    * type **required** `string`: The type identifier of the group entity (`groups`).

#### Output
*Output schema unknown*

### groups_delete
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Permanently deletes a group. This action cannot be undone.

#### Permissions

Only group managers may delete a group. Attempting to delete a group for which you are not a manager will result in a **403 Forbidden** response.

#### Returns

If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.groups_delete({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.

#### Output
*Output schema unknown*

### groups_read
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Retrieves the details of a given group
#### Permissions
Any user can retrieve a group.
Authentication is not required to view the details of a specific group.
#### Returns
Returns a JSON object with a data key that has a representation of the serialized group.


```js
osf.groups_read({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the group entity.
    * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
    * name **required** `string`: The name of the group.
  * id `string`: The unique identifier of the group entity.
  * links `object`: URLs to alternative representations of the group entity.
    * html `string`: A link to the group's page on the OSF.
    * self `string`: A link to the canonical API endpoint of this group.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the group entity.
    * members `string`: A link to the list of the members of this group.
  * type **required** `string`: The type identifier of the group entity (`groups`).

### group_partial_update
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Updates a group by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Groups can be updated with either a **PUT** or **PATCH** request. The `name` field is mandatory in a **PUT** request, and optional in a **PATCH**.

#### Permissions
Only managers of a group may update the group. Attempting to update a group for which you do not have manager access will result in a **403 Forbidden** response.

#### Returns

Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.group_partial_update({
  "group_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.
  * body **required** `object`

#### Output
*Output schema unknown*

### group_members_list
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

A paginated list of the group members.
Groups are collections of users. A user can either be a group member or a group manager. Group managers can update group membership. All group members can be added as a unit to a project or several projects.
#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 members. Each resource in the array contains the full representation of the member, meaning additional requests to a member's detail view are not necessary. The user's role in the group and full_name are top-level attributes. Additionally, if a member hasn't yet claimed their OSF account, they will have an unregistered_member attribute.  To see more details about the user in the group, follow the `users` relationship.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering
You can optionally request that the response only include members that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/groups/5c0571f4b146c900085f39a3/members/?filter[role]=manager.

Contributors may be filtered by their `role` and `full_name` attributes.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.group_members_list({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the contributor entity.
      * email `string`: The unregistered user email. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * full_name `string`: The full name of the user, used for display on the OSF. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * role `string` (values: manager, member): The permission level of the group member. The default value is 'member'.
      * unregistered_member `string`: The assigned name of the group member if the member has not yet claimed their account.
    * id `string`: The identifier of the group member entity. Member identifiers have the form {group_id}-{user_id}.
    * links `object`: URLs to alternative representations of the group member entity.
      * self `string`: A link to the the canonical API endpoint for the group member.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the group member entity.
      * user **required** `string`: A relationship to the user object
    * type **required** `string`: The type identifier of the group member entity (`group-members`).

### group_members_create
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Adds a member to a group, effectively creating a relationship between the group and a user.
Groups are collections of users. A user can either be a group member or a group manager. Group managers can update group membership. All group members can be added as a unit to a project or several projects.
#### Permissions
Only a group manager can add a member to the group.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.  You can specify the member's role with the `role` attribute. Default role is `member`.  To add an unregistered member to a group, specify a `full_name` and `email` combination under `attributes`.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new group member, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.group_members_create({
  "group_id": "",
  "body": {
    "type": "",
    "relationships": {
      "user": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.
  * body **required** `object`
    * attributes `object`: The properties of the contributor entity.
      * email `string`: The unregistered user email. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * full_name `string`: The full name of the user, used for display on the OSF. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * role `string` (values: manager, member): The permission level of the group member. The default value is 'member'.
      * unregistered_member `string`: The assigned name of the group member if the member has not yet claimed their account.
    * id `string`: The identifier of the group member entity. Member identifiers have the form {group_id}-{user_id}.
    * links `object`: URLs to alternative representations of the group member entity.
      * self `string`: A link to the the canonical API endpoint for the group member.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the group member entity.
      * user **required** `string`: A relationship to the user object
    * type **required** `string`: The type identifier of the group member entity (`group-members`).

#### Output
*Output schema unknown*

### group_members_delete
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Removes a member from a group. This request only removes the relationship between the group and the user, it does not delete the user itself.

A group must always have at least one manager, and attempting to remove the only manager from a group will result in a **400 Bad Request** response.
#### Permissions
A user can remove themselves as a member. Otherwise, only project managers can remove members.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.group_members_delete({
  "group_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.
  * user_id **required** `string`: The unique identifier of the user.

#### Output
*Output schema unknown*

### group_members_read
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Retrieves the details of a given group member.

Groups are collections of users that can be added to a project or several projects.  Group members either have a `manager` or `member` role.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.group_members_read({
  "group_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `object`
  * attributes `object`: The properties of the contributor entity.
    * email `string`: The unregistered user email. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
    * full_name `string`: The full name of the user, used for display on the OSF. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
    * role `string` (values: manager, member): The permission level of the group member. The default value is 'member'.
    * unregistered_member `string`: The assigned name of the group member if the member has not yet claimed their account.
  * id `string`: The identifier of the group member entity. Member identifiers have the form {group_id}-{user_id}.
  * links `object`: URLs to alternative representations of the group member entity.
    * self `string`: A link to the the canonical API endpoint for the group member.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the group member entity.
    * user **required** `string`: A relationship to the user object
  * type **required** `string`: The type identifier of the group member entity (`group-members`).

### group_members_partial_update
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Updates a group member by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Group members can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
#### Permissions
Only group managers can update group membership.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

If the given user is not already in the member list, a 404 Not Found error will be returned. A group must always have at least one manager, and any attempt to downgrade the permissions of a sole manager will result in a 400 Bad Request error.


```js
osf.group_members_partial_update({
  "group_id": "",
  "user_id": "",
  "body": {
    "type": "",
    "relationships": {
      "user": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The unique identifier of the group.
  * user_id **required** `string`: The unique identifier of the user.
  * body **required** `object`
    * attributes `object`: The properties of the contributor entity.
      * email `string`: The unregistered user email. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * full_name `string`: The full name of the user, used for display on the OSF. Writeable when adding an unregistered member to your group, instead of an existing OSF user.
      * role `string` (values: manager, member): The permission level of the group member. The default value is 'member'.
      * unregistered_member `string`: The assigned name of the group member if the member has not yet claimed their account.
    * id `string`: The identifier of the group member entity. Member identifiers have the form {group_id}-{user_id}.
    * links `object`: URLs to alternative representations of the group member entity.
      * self `string`: A link to the the canonical API endpoint for the group member.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the group member entity.
      * user **required** `string`: A relationship to the user object
    * type **required** `string`: The type identifier of the group member entity (`group-members`).

#### Output
*Output schema unknown*

### institutions_list
A paginated list of all verified institutions.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.

Institutions may be filtered by their `id`, `name`, and `auth_url`

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.institutions_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * assets `object`: Assets belonging to a specific institution
        * logo `string`: Static path to the institution specific normal logo
        * logo_rounded `string`: Static path to the institution specific rounded logo
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * html `string`: A link to the detail page for the institution on the OSF.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### institutions_detail
Retrieves the details of an institution

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.institutions_detail({
  "institution_id": ""
}, context)
```

#### Input
* input `object`
  * institution_id **required** `string`: The unique identifier of the institution you wish to retrieve.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * assets `object`: Assets belonging to a specific institution
        * logo `string`: Static path to the institution specific normal logo
        * logo_rounded `string`: Static path to the institution specific rounded logo
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * html `string`: A link to the detail page for the institution on the OSF.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### institutions_node_list
A paginated list of all nodes affiliated with an institution.

#### Versioning

As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.

Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.institutions_node_list({
  "institution_id": ""
}, context)
```

#### Input
* input `object`
  * institution_id **required** `string`: The unique identifier of the institution you wish to retrieve.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### institutions_registration_list
A paginated list of all registrations affiliated with an institution.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.

Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`


```js
osf.institutions_registration_list({
  "institution_id": ""
}, context)
```

#### Input
* input `object`
  * institution_id **required** `string`: The unique identifier of the institution you wish to retrieve.

#### Output
*Output schema unknown*

### institutions_users_list
A paginated list of all users affiliated with an institution.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.institutions_users_list({
  "institution_id": ""
}, context)
```

#### Input
* input `object`
  * institution_id **required** `string`: The unique identifier of the institution you wish to retrieve.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the user entity.
      * active **required** `boolean`: Whether or not the user is an active user.
      * date_registered **required** `string`: The time at which the user registered their account, as an iso8601 formatted timestamp.
      * family_name `string`: The family name of the user, used for bibliographic citations.
      * full_name **required** `string`: The full name of the user, used for display on the OSF.
      * given_name `string`: The given name of the user, used for bibliographic citations.
      * locale `string`: The user's locale, e.g. 'en_US'.
      * middle_names `string`: The middle names of the user, used for bibliographic citations.
      * social `object`: The social fields associated with a user.
        * academiaProfileID `string`: The academiaProfileID for the given user.
        * baiduScholar `string`: The baiduScholar for the given user.
        * github `array`: The github usernames for the given user.
          * items `string`
        * impactStory `string`: The impactStory for the given user.
        * linkedIn `array`: The linkedIn profiles for the given user.
          * items `string`
        * orcid `string`: The orcid for the given user.
        * profileWebsites `array`: The profileWebsites for the given user.
          * items `string`
        * researchGate `string`: The researchGate for the given user.
        * researcherId `string`: The researcherId for the given user.
        * scholar `string`: The google scholar for the given user.
        * ssrn `string`: The ssrn for the given user.
        * twitter `array`: The twitter handles for the given user.
          * items `string`
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
      * default_region `string`: The storage region where the user's files will be stored by default.
      * groups `string`: A link to the list of groups that a user belongs to.
      * institutions `string`: A link to the list of institutions the user is affiliated with.
      * nodes `string`: A link to the list of nodes the user is a contributor to.
    * type **required** `string`: The type identifier of the user entity (`users`).

### licenses_read
Retrieves the details of a license.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.licenses_read({
  "license_id": ""
}, context)
```

#### Input
* input `object`
  * license_id **required** `string`: The unique identifier of the license.

#### Output
* output `object`
  * attributes `object`: The properties of the license.
    * name `string`: Name of the license.
    * required_fields `array`: Fields required for this license (provided to help front-end validators). Maps to properties on the NodeLicense model.
      * items `string`: Individual fields required by this license.
    * text `string`: Full text of the license.
  * id `string`: The identifier of the license.
  * links `object`: URLs to alternative representations of the license.
    * self `string`: A link to the detail page for the license.
  * type `string`: The type identifier of the license (`license`).

### license_list
A paginated list of licenses. The returned licenses are sorted by their name.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).

Licenses may be filtered by their `id`, and `name`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.license_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the license.
      * name `string`: Name of the license.
      * required_fields `array`: Fields required for this license (provided to help front-end validators). Maps to properties on the NodeLicense model.
        * items `string`: Individual fields required by this license.
      * text `string`: Full text of the license.
    * id `string`: The identifier of the license.
    * links `object`: URLs to alternative representations of the license.
      * self `string`: A link to the detail page for the license.
    * type `string`: The type identifier of the license (`license`).

### logs_read
Retrieves the details of a log.

A log is permanent immutable record of a node's history. A log is created when a user performs one of many actions. See the [actions](#Logs_logs_actions) section for more details.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.logs_read({
  "log_id": ""
}, context)
```

#### Input
* input `object`
  * log_id **required** `string`: The unique identifier of the log you wish to retrieve.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the log.
    * action **required** `string`: The type of action performed on the OSF. See actions section for full list of possible actions.
    * date **required** `string`: The date and time at which the log was created, as an iso8601 formatted timestamp.
    * params `object`: The type of action performed on the OSF. See description for full list of possible actions.
      * addon `string`: The addon associated with the connected node.
      * anonymous_link `boolean`: The view only link added to the node was anonymous.
      * bucket `string`: The Amazon s3 bucket connected to the connected node.
      * citation_name `string`: Name of citation associated with the connected node.
      * contributors `string`: List of contributors on the connected node involved in the action represented by this node log.
      * data_set `string`: The dataset associated with the connected node.
      * destination `string`: A dictionary with information about the destination for the move of the item on the node associated with this log. Details include the path, url, addon, node_url and node_title.
      * figshare_title `string`: Title of the fighshare project associated with this node log
      * file `string`: Dictionary with information about the file involved with the log.
      * filename `string`: Filename for the file associated with the log.
      * folder `string`: Folder associated with the log.
      * folder_name `string`: Name of the folder associated with the log.
      * forward_url `string`: URL that the connected node forwards to.
      * github_repo `string`: The github repository involved with the action represented by this node log.
      * github_user `string`: The github user involved with the action represented by this node log.
      * identifiers `string`: Dictionary containing the DOI for a preprint associated with the log.
      * institution `string`: Dictionary containing the ID and Name of the institution associated with the log.
      * kind `string`: Kind of the object associated with the log.
      * license `string`: License for the associated node.
      * old_page `string`: Old name of wiki page for a wiki rename log action.
      * page `string`: Current name of wiki page for rename log action.
      * page_id `string`: Primary key of the wiki page associated with the log.
      * params_node `string`: Node that is refered to in the params of the log.
      * params_project `string`: Project that is refered to in the params of the log.
      * path `string`: Path for a file associated with the log.
      * pointer `string`: A dictionary with information about the node that is linked to the associated node.
      * preprint `string`: Preprint related to the associated node.
      * preprint_provider `string`: Preprint provider for the associated node.
      * previous_institution `string`: If a primary institution for the associated node is changed, this will show the previous institution.
      * source `string`: A dictionary with information about the source of a move related event for a log. Details include the path, url, addon, node_url and node_title.
      * study `string`: Dataverse study linked to the associated node.
      * tag `string`: Tag associated with the associated node.
      * tags `string`: Tags associated with the associated node.
      * target `string`: A dictionary containing details about the target of the log. Details include the path, url, addon, node_url and node_title.
      * template_node `string`: A dictionary containing information about the node that was used as a template for the associated node.
      * title_new `string`: The new title for the associated node.
      * title_original `string`: The original title for the associated node
      * updated_fields `string`: A dictionary containing all of the fields updated on the associated node.
      * urls `string`: Links to access information about the file associated with this log.
      * version `string`: Version of the wiki page associated with this log.
      * wiki `string`: A dictionary with information about the wiki page associated with the log.
  * id **required** `string`: The identifier of the log.
  * links **required** `object`: URLs to alternative representations of the log entity.
    * self **required** `string`: A link to the detail page for the log.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the log.
    * linked_node `string`: A relationship to the node linked to this log.
    * node **required** `string`: A relationship to the node associated with this log.
    * original_node `string`: A relationship to the original node that was associated with this log, in case this log was copied from a node to a fork or registration.
    * template_node `string`: A relationship to the node used as a template for this log.
    * user `string`: A relationship to the user who performed the log action.
  * type **required** `string`: The type identifier of the log (`logs`)

### metaschemas_list
A paginated list of all active metaschemas.
Metaschemas describe the supplemental questions that accompany a registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.


```js
osf.metaschemas_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the metaschema entity.
      * name `string`: The name of the metaschema
      * schema `object`: The details of the metaschema which contains the supplemental questions to accompany a registration
      * schema_version `integer`: The latest version of the schema
    * id **required** `string`: The unique identifier of the metaschema entity.
    * links **required** `object`: URLs to alternative representations of the metaschema entity.
      * self `string`: A link to the detail page for a metaschema.
    * type **required** `string`: The type identifier of the metaschema entity (`metaschemas`).

### registration_metaschemas_list
A paginated list of all active registration metaschemas.

Registration metaschemas describe the supplemental questions that accompany a registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registration metaschemas. Each resource in the array is a separate registration metaschema object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include schemas that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/schemas/registrations/?filter[active]=true.

Schemas may be filtered by their `active` attribute only.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registration_metaschemas_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the metaschema entity.
      * name `string`: The name of the metaschema
      * schema `object`: The details of the metaschema which contains the supplemental questions to accompany a registration
      * schema_version `integer`: The latest version of the schema
    * id **required** `string`: The unique identifier of the metaschema entity.
    * links **required** `object`: URLs to alternative representations of the metaschema entity.
      * self `string`: A link to the detail page for a metaschema.
    * type **required** `string`: The type identifier of the metaschema entity (`metaschemas`).

### registration_metaschemas_read
Retrieves the details of a given registration metaschema.

Registration metaschemas describe the supplemental questions that accompany a registration.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested registration metaschema, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registration_metaschemas_read({
  "metaschema_id": ""
}, context)
```

#### Input
* input `object`
  * metaschema_id **required** `string`: The unique identifier of the registration metaschema.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the metaschema entity.
    * name `string`: The name of the metaschema
    * schema `object`: The details of the metaschema which contains the supplemental questions to accompany a registration
    * schema_version `integer`: The latest version of the schema
  * id **required** `string`: The unique identifier of the metaschema entity.
  * links **required** `object`: URLs to alternative representations of the metaschema entity.
    * self `string`: A link to the detail page for a metaschema.
  * type **required** `string`: The type identifier of the metaschema entity (`metaschemas`).

### metaschemas_read
Retrieves the details of a given metaschema.

Metaschemas describe the supplemental questions that accompany a registration.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.metaschemas_read({
  "metaschema_id": ""
}, context)
```

#### Input
* input `object`
  * metaschema_id **required** `string`: The unique identifier of the metaschema.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the metaschema entity.
    * name `string`: The name of the metaschema
    * schema `object`: The details of the metaschema which contains the supplemental questions to accompany a registration
    * schema_version `integer`: The latest version of the schema
  * id **required** `string`: The unique identifier of the metaschema entity.
  * links **required** `object`: URLs to alternative representations of the metaschema entity.
    * self `string`: A link to the detail page for a metaschema.
  * type **required** `string`: The type identifier of the metaschema entity (`metaschemas`).

### nodes_list
A paginated list of nodes, representing projects and components, on the OSF.

The returned nodes are those which are public or which the user has access to view.

The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.

Registrations cannot be accessed through this endpoint (use the [registrations](#tag/Registrations) endpoints instead).

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_create
Creates a new node.

On the OSF, nodes are considered **projects** or **components**. The difference between a project and a component is that a project is a top-level node, and a component is a child of a project.

Additionally, nodes have a `category` field that includes **project** as an option. The categorization determines what icon is displayed with the node on the OSF, and helps with search organization. Projects (top-level nodes) may have a category other than project, and components (children) may have a category of **project**.
#### Required
Required fields for creating a node include:

&nbsp;&nbsp;&nbsp;&nbsp;`title`

&nbsp;&nbsp;&nbsp;&nbsp;`category`

Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_create({
  "body": {
    "type": "",
    "attributes": {
      "title": "",
      "category": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

#### Output
*Output schema unknown*

### nodes_delete
Permanently deletes a node. This action cannot be undone.

#### Permissions

Only project administrators may delete a node. Attempting to delete a node for which you are not an administrator will result in a **403 Forbidden** response.

#### Returns

If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_delete({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
*Output schema unknown*

### nodes_read
Retrieves the details of a given node (project or component).

#### Permissions

Only project contributors may retrieve the details of a private node. Attempting to retreive a private node for which you are not a contributor will result in a **403 Forbidden** response.

Authentication is not required to view the details of a public node, as public nodes give read-only access to everyone.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_read({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the node entity.
    * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
    * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
    * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
    * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
      * items `string`
    * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
    * description `string`: The description of the node.
    * fork `boolean`: Whether or not this node represents a fork of another node.
    * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
    * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
    * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
    * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
    * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
    * tags `array`: A list of strings that describe this node, as entered by project contributors.
      * items `string`
    * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
    * title **required** `string`: The title of the node.
    * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
  * id `string`: The unique identifier of the node entity.
  * links `object`: URLs to alternative representations of the node entity.
    * html `string`: A link to the node's page on the OSF.
    * self `string`: A link to the canonical API endpoint of this node.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
    * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
    * children `string`: A link to the list of this node's children (components).
    * citation `string`: A link to the citation details of this node.
    * comments `string`: A link to the list of comments on this node.
    * contributors `string`: A link to the list of contributors on this node.
    * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
    * files `string`: A link to the list of storage providers that have been enabled on this node.
    * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
    * forks `string`: A link to the list of nodes that are forks of this node.
    * groups `string`: A link to the list of groups that have permissions to the node.
    * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
    * license `string`: A link to the license that has been applied to this node.
    * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
    * logs `string`: A link to the list of log actions pertaining to this node.
    * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
    * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
    * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
    * registrations `string`: A link to the list of registrations that have been created from this node.
    * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
    * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
    * view_only_links `string`: A link to the list of view only links that have been created for this node.
    * wikis `string`: A link to the list of wiki pages for this node.
  * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_partial_update
Updates a node by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Nodes can be updated with either a **PUT** or **PATCH** request. The `title` and `category` fields are mandatory in a **PUT** request, and optional in a **PATCH**.

#### Permissions

Only write contributors may update a node. Attempting to update a node for which you do not have write access will result in a **403 Forbidden** response.

#### Returns

Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_partial_update({
  "node_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`

#### Output
*Output schema unknown*

### nodes_addons_list
A paginated list of addons connected to the given node or project.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of at most 10 addon objects. Each resource in the array is a separate addon object and contains the full representation of the addon, meaning additional requests to a addon's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.nodes_addons_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the addon entity.
      * categories `array`: List of categories this addon belongs to.
        * items `string` (values: documentation, storage, bibliography, other, security, citations)
      * description `string`: The description of the service provider.
      * name `string`: The name of the third-party service provider.
      * url `string`: The URL to the third-party service provider.
    * id `string`: The identifier of the addon entity.
    * type `string`: The type identifier of the addon entity (`addons`).

### nodes_addon_read
Retrieve details of an individual addon connected to this node.

#### Permissions

NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.

Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.

#### Returns

Returns a JSON object with a `data` key containing the details of the requested addon, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_addon_read({
  "node_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the addon.

#### Output
* output `object`
  * attributes `object`: The properties of the node addon entity.
    * configured `boolean`: Whether or not this node has been configured with an addon folder.
    * enabled `boolean`: Whether or not this node has a NodeSettings object associated with it.
    * external_account_id `string`: The ID of the associated node addon account, if any.
    * folder_id `string`: The ID of the linked folder from the addon provider.
    * folder_path `string`: The folder path of the linked folder from the addon provider. Google Drive specific
    * label `string`: A label specific to the addon provider.
    * node_has_auth `boolean`: Whether or not this node is fully authorized to use this node addon.
    * url `string`: An external link specific to the addon provider.
  * id **required** `string`: The unique identifier of the draft registration entity.
  * links `object`: URLs to alternative representations of the node addon entity.
    * self **required** `string`: A link to the the canonical API endpoint for this node addon.
  * type **required** `string`: The type identifier of the node addon entity (`node_addons`).

### nodes_node_addon_update
Updates a node addon by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Node addon can be updated with either a **PUT** or **PATCH** request. The `external_account_id`, `enabled`, and `folder_id` fields are mandatory in a **PUT**, and optional in **PATCH**. Non-string values will be accepted and stringified, however we make no promises about the stringification output.

To delete or deauthorize a node addon, issue a **PUT** with all fields set to `null` or `False`, or a **PATCH** with enabled set `False`.

#### Permissions

NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.

Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.

#### Returns

Returns a JSON object with a `data` key containing the new representation of the updated node addon, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_node_addon_update({
  "node_id": "",
  "provider": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the addon.
  * body **required** `object`

#### Output
*Output schema unknown*

### nodes_addons_folders_list
A paginated list of folders retrieved from the associated third-party (provider) service.

#### Permissions

Folders are visible only to the user that authorized the addon.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of addon folder objects. Each resource in the array is a separate addon folder object and contains the full representation of the addon folder, meaning additional requests to a addon folder's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.nodes_addons_folders_list({
  "node_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the provider

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the addon entity.
      * categories `array`: List of categories this addon belongs to.
        * items `string` (values: documentation, storage, bibliography, other, security, citations)
      * description `string`: The description of the service provider.
      * name `string`: The name of the third-party service provider.
      * url `string`: The URL to the third-party service provider.
    * id `string`: The identifier of the addon entity.
    * type `string`: The type identifier of the addon entity (`addons`).

### nodes_children_list
A paginated list of the next level child nodes for the given node. The returned nodes are sorted by their `date_modified`, with the most recently updated child nodes appearing first.

The list will include child nodes that are public, as well as child nodes that are private, if the authenticated user has permission to view them.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child nodes. If the given node has zero child nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the child node, meaning additional requests to the child node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_children_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_children_create
Creates a new child node.

Note: Creating a child node via this endpoint will function the same as creating a node via the node list endpoint, but the child node will have the given node set as its parent.

#### Permissions

Only write contributors may create children nodes.

#### Required

Required fields for creating a node include:

&nbsp;&nbsp;&nbsp;&nbsp;`title`

&nbsp;&nbsp;&nbsp;&nbsp;`category`

Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.

#### Returns

Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_children_create({
  "node_id": "",
  "body": {
    "type": "",
    "attributes": {
      "title": "",
      "category": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

#### Output
* output `object`
  * attributes **required** `object`: The properties of the node entity.
    * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
    * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
    * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
    * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
      * items `string`
    * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
    * description `string`: The description of the node.
    * fork `boolean`: Whether or not this node represents a fork of another node.
    * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
    * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
    * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
    * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
    * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
    * tags `array`: A list of strings that describe this node, as entered by project contributors.
      * items `string`
    * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
    * title **required** `string`: The title of the node.
    * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
  * id `string`: The unique identifier of the node entity.
  * links `object`: URLs to alternative representations of the node entity.
    * html `string`: A link to the node's page on the OSF.
    * self `string`: A link to the canonical API endpoint of this node.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
    * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
    * children `string`: A link to the list of this node's children (components).
    * citation `string`: A link to the citation details of this node.
    * comments `string`: A link to the list of comments on this node.
    * contributors `string`: A link to the list of contributors on this node.
    * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
    * files `string`: A link to the list of storage providers that have been enabled on this node.
    * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
    * forks `string`: A link to the list of nodes that are forks of this node.
    * groups `string`: A link to the list of groups that have permissions to the node.
    * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
    * license `string`: A link to the license that has been applied to this node.
    * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
    * logs `string`: A link to the list of log actions pertaining to this node.
    * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
    * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
    * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
    * registrations `string`: A link to the list of registrations that have been created from this node.
    * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
    * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
    * view_only_links `string`: A link to the list of view only links that have been created for this node.
    * wikis `string`: A link to the list of wiki pages for this node.
  * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_citation_list
The citation details for a node, in CSL format.

#### Returns

Returns a JSON object with a `data` key that contains the representation of the details necessary for the node citation.


```js
osf.nodes_citation_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `object`
  * attributes `object`: The properties of the citation entity.
    * author `string`: The list of bibliographic authors, represented as dictionaries of their given and family names, for the entitiy being cited.
    * doi `string`: The DOI for the entity being cited, if one exists.
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is 'OSF'. For preprints, the publisher is the same as the preprint provider.
    * title `string`: The title of the entity being cited.
  * id `string`: The identifier of the entity being cited.
  * links `object`: URLs to alternative representations of the citation entity.
    * self `string`: A link to the entity that is being cited.
  * type `string`: The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).

### nodes_citation_read
The citation for a node in a specific style.

#### Returns

Returns a JSON object with a `data` key that contains the representation of the node citation, in the requested style.


```js
osf.nodes_citation_read({
  "style_id": "",
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * style_id **required** `string`: The unique identifier of the citation style.
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `object`
  * attributes `object`: The properties of the citation style entity.
    * citation `string`: The complete entity citation in the requested style.
  * id `string`: The identifier of the citation style, e.g. APA.
  * type `string`: The type identifier of the citation style entity (`styled-citations`).

### nodes_comments_list
A paginated list of comments related to a given node.

The returned comments are sorted by their creation date, with the most recent comments appearing first.

#### Permissions

Comments on public nodes are given read-only access to everyone.

If the node comment-level is `private`, only contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments on private nodes are only visible to contributors and administrators on the parent node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93

Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_comments_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the comment entity.
      * can_edit `boolean`: Whether or not the current user has permission to edit this comment
      * content `string`: The content of the comment.
      * date_created `string`: The time at which the comment was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the comment was last modified, as an iso8601 formatted timestamp.
      * deleted `boolean`: Whether or not the comment is deleted.
      * has_children `boolean`: Whether or not the comment has replies.
      * has_report `boolean`: Whether or not the comment the current user reported this as spam.
      * is_abuse `boolean`: Whether or not the comment is flagged or confirmed spam.
      * is_ham `boolean`: Whether or not an admin checked the legitimacy of this comment.
      * modified `boolean`: Whether or not the comment has been edited.
      * page `string`: The page type the comment is on, e.g. `node`, `registration`, `wiki`, `files`.
    * id **required** `string`: The identifier of the comment entity.
    * links `object`: URLs to alternative representations of the comment entity.
      * self `string`: A link to the detail page for the comment.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the comment entity.
      * node `string`: A relationship to the node the comment is on.
      * replies `string`: A relationship to the replies to the comment.
      * reports `string`: A relationship to the reports connected to the comment.
      * target `string`: A relationship to the target of the comment.
      * user `string`: A relationship to the user who created the comment.
    * type `string`: The type identifier of the comment entity (`comments`).

### nodes_comment_create
Create a comment on a given node overview page or a reply to a comment on that node.

To create a comment on the node overview page, the target `type` would be "nodes" and the target `id` would be the node `id`.

To reply to a comment on this node, the target `type` would be "comments" and the target `id` would be the `id` of the comment to reply to.

#### Required

A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.

In addition, the `content` attribute describing the relationship between the node and the comment is required.

#### Returns

Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_comment_create({
  "node_id": "",
  "body": {
    "id": ""
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node you want to comment on.
  * body **required** `object`
    * attributes `object`: The properties of the comment entity.
      * can_edit `boolean`: Whether or not the current user has permission to edit this comment
      * content `string`: The content of the comment.
      * date_created `string`: The time at which the comment was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the comment was last modified, as an iso8601 formatted timestamp.
      * deleted `boolean`: Whether or not the comment is deleted.
      * has_children `boolean`: Whether or not the comment has replies.
      * has_report `boolean`: Whether or not the comment the current user reported this as spam.
      * is_abuse `boolean`: Whether or not the comment is flagged or confirmed spam.
      * is_ham `boolean`: Whether or not an admin checked the legitimacy of this comment.
      * modified `boolean`: Whether or not the comment has been edited.
      * page `string`: The page type the comment is on, e.g. `node`, `registration`, `wiki`, `files`.
    * id **required** `string`: The identifier of the comment entity.
    * links `object`: URLs to alternative representations of the comment entity.
      * self `string`: A link to the detail page for the comment.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the comment entity.
      * node `string`: A relationship to the node the comment is on.
      * replies `string`: A relationship to the replies to the comment.
      * reports `string`: A relationship to the reports connected to the comment.
      * target `string`: A relationship to the target of the comment.
      * user `string`: A relationship to the user who created the comment.
    * type `string`: The type identifier of the comment entity (`comments`).

#### Output
*Output schema unknown*

### nodes_contributors_list
A paginated list of the node's contributors, sorted by their index.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_contributors_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

### nodes_contributors_create
Adds a contributor to a node, effectively creating a relationship between the node and a user.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a node.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the node and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_contributors_create({
  "node_id": "",
  "body": {
    "type": "",
    "relationships": {
      "node": "",
      "user": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

#### Output
*Output schema unknown*

### nodes_contributors_delete
Removes a contributor from a node. This request only removes the relationship between the node and the user, it does not delete the user itself.

A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.
#### Permissions
A user can remove themselves as a node contributor. Otherwise, only project administrators can remove contributors.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_contributors_delete({
  "node_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * user_id **required** `string`: The unique identifier of the user.

#### Output
*Output schema unknown*

### nodes_contributors_read
Retrieves the details of a given contributor.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_contributors_read({
  "node_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

### nodes_contributors_partial_update
Updates a contributor by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Contributors can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
#### Permissions
Only project administrators can update the contributors on a node.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

If the given user is not already in the contributor list, a 404 Not Found error will be returned. A node must always have at least one admin, and any attempt to downgrade the permissions of a sole admin will result in a 400 Bad Request error.


```js
osf.nodes_contributors_partial_update({
  "node_id": "",
  "user_id": "",
  "body": {
    "type": "",
    "relationships": {
      "node": "",
      "user": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * user_id **required** `string`: The unique identifier of the user.
  * body **required** `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

#### Output
*Output schema unknown*

### nodes_draft_registrations_list
A paginated list of all of the draft registrations of a given node.

Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.

Your original project remains editable but will now have the draft registration linked to it.

#### Permissions

Only project administrators may view draft registrations.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 draft registrations. Each resource in the array is a separate draft registration object and contains the full representation of the draft registration, meaning additional requests to a draft registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.nodes_draft_registrations_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the draft registration entity.
      * datetime_initiated **required** `string`: The time at which the draft registration was first initiated, as an iso8601 formatted timestamp.
      * datetime_updated **required** `string`: The time at which the draft registration was last updated, as an iso8601 formatted timestamp.
      * registration_metadata `string`: A dictionary of question IDs and responses from the registration schema.
    * id **required** `string`: The unique identifier of the draft registration entity.
    * links **required** `object`: URLs to alternative representations of the draft registration entity.
      * html **required** `string`: A link to the draft registration's page on the OSF.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the draft registration entity.
      * branched_from **required** `string`: A link to the node that this draft registration was created from.
      * initiator **required** `string`: A link to the user who initiated the draft registration.
      * registration_schema **required** `string`: A link to the detailed registration schema that this draft conforms to.
    * type **required** `string`: The type identifier of the draft registration entity (`draft_registrations`).

### nodes_draft_registrations_create
Initiate a draft registration of the current node.
Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn. It is the first step in creating a registration.

Refer to step 2: [How to complete the supplemental registration questions of a draft registration](#operation/nodes_draft_registrations_partial_update)

Refer to step 3: [How to create a registration from a completed draft registration](#operation/nodes_registrations_create)

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may create draft registrations.
#### Required
Required fields for creating a draft registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`registration_schema`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_draft_registrations_create({
  "node_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {
      "datetime_initiated": "",
      "datetime_updated": ""
    },
    "relationships": {
      "branched_from": "",
      "initiator": "",
      "registration_schema": ""
    },
    "links": {
      "html": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`
    * attributes **required** `object`: The properties of the draft registration entity.
      * datetime_initiated **required** `string`: The time at which the draft registration was first initiated, as an iso8601 formatted timestamp.
      * datetime_updated **required** `string`: The time at which the draft registration was last updated, as an iso8601 formatted timestamp.
      * registration_metadata `string`: A dictionary of question IDs and responses from the registration schema.
    * id **required** `string`: The unique identifier of the draft registration entity.
    * links **required** `object`: URLs to alternative representations of the draft registration entity.
      * html **required** `string`: A link to the draft registration's page on the OSF.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the draft registration entity.
      * branched_from **required** `string`: A link to the node that this draft registration was created from.
      * initiator **required** `string`: A link to the user who initiated the draft registration.
      * registration_schema **required** `string`: A link to the detailed registration schema that this draft conforms to.
    * type **required** `string`: The type identifier of the draft registration entity (`draft_registrations`).

#### Output
*Output schema unknown*

### nodes_draft_registrations_delete
Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
#### Permissions
Only project administrators may delete draft registrations.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.


```js
osf.nodes_draft_registrations_delete({
  "node_id": "",
  "draft_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * draft_id **required** `string`: The unique identifier of the draft registration.

#### Output
*Output schema unknown*

### nodes_draft_registrations_read
Retrieve the details of a given draft registration.

Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.

Your original project remains editable but will now have the draft registration linked to it.

#### Permissions

Only project administrators may view draft registrations.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_draft_registrations_read({
  "node_id": "",
  "draft_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * draft_id **required** `string`: The unique identifier of the draft registration.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the draft registration entity.
    * datetime_initiated **required** `string`: The time at which the draft registration was first initiated, as an iso8601 formatted timestamp.
    * datetime_updated **required** `string`: The time at which the draft registration was last updated, as an iso8601 formatted timestamp.
    * registration_metadata `string`: A dictionary of question IDs and responses from the registration schema.
  * id **required** `string`: The unique identifier of the draft registration entity.
  * links **required** `object`: URLs to alternative representations of the draft registration entity.
    * html **required** `string`: A link to the draft registration's page on the OSF.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the draft registration entity.
    * branched_from **required** `string`: A link to the node that this draft registration was created from.
    * initiator **required** `string`: A link to the user who initiated the draft registration.
    * registration_schema **required** `string`: A link to the detailed registration schema that this draft conforms to.
  * type **required** `string`: The type identifier of the draft registration entity (`draft_registrations`).

### nodes_draft_registrations_partial_update
Update a draft registration by answering the supplemental registration questions. This is the second step in creating a registration. The answers will go under registration_metadata. Registration_metadata must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the registration metaschema.

[To view all active registration schemas](#operation/registration_metaschemas_list)

[To retrieve the format of a certain registration schema](#operation/registration_metaschemas_read)

If a question is multiple-choice, the question response must exactly match one of the possible choices.

Refer to step 1: [How to create a draft registration](#operation/nodes_draft_registrations_create)

Refer to step 3: [How to create a registration from a completed draft registration](#operation/nodes_registrations_create)

#### Permissions
Only project administrators may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_draft_registrations_partial_update({
  "node_id": "",
  "draft_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {}
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * draft_id **required** `string`: The unique identifier of the draft registration.
  * body **required** `object`
    * attributes **required** `object`: The properties of the draft registration entity.
      * registration_metadata `string`: A dictionary of question IDs and responses from the registration schema.
    * id **required** `string`: The unique identifier of the draft registration entity.
    * type **required** `string`: The type identifier of the draft registration entity (`draft_registrations`).

#### Output
*Output schema unknown*

### nodes_providers_list
List of all storage providers that are configured for this node

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.


```js
osf.nodes_providers_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file entity.
      * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
      * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
      * current_version `integer`: Version number of the file.
      * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
      * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
      * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
      * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
      * kind `string`: The kind of files object it is (`file` or `folder`).
      * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
      * materialized_path `string`: Unix-style path to the file relative to the provider root.
      * name `string`: Name of the file
      * path `string`: The unique identifier for this file entity for this project and storage provider.
      * provider `string`: The id of the file provider (e.g., `osfstorage`)
      * size `integer`: Size of the file in bytes.
      * tags `array`: A list of strings that describe this file, as entered by project contributors.
        * items `string`
    * id `string`: The identifier of the file entity.
    * links `object`: Links to alternative representations of the file entity.
      * delete `string`: The Waterbutler API route for file deletions.
      * download `string`: The Waterbutler API route for file downloads.
      * html `string`: A link to the file on the OSF.
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
      * render `string`: A Waterbutler API route for rendering the file.
      * self `string`: A link to the detail page for the file.
      * upload `string`: The Waterbutler API route for file uploads.
    * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
      * checkout `string`: A link to the user who checked out the file.
      * comments `string`: A link to the comments on the file.
      * node `string`: A link to the node the file is on.
      * versions `string`: A link to the versions of the file.
    * type `string`: The type identifier of the file entity (`files`).

### nodes_providers_read
Retrieves the details of a storage provider enabled on this node.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_providers_read({
  "node_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the storage provider.

#### Output
* output `object`
  * attributes `object`: The properties of the file entity.
    * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
    * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
    * current_version `integer`: Version number of the file.
    * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
    * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
    * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
    * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
    * kind `string`: The kind of files object it is (`file` or `folder`).
    * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
    * materialized_path `string`: Unix-style path to the file relative to the provider root.
    * name `string`: Name of the file
    * path `string`: The unique identifier for this file entity for this project and storage provider.
    * provider `string`: The id of the file provider (e.g., `osfstorage`)
    * size `integer`: Size of the file in bytes.
    * tags `array`: A list of strings that describe this file, as entered by project contributors.
      * items `string`
  * id `string`: The identifier of the file entity.
  * links `object`: Links to alternative representations of the file entity.
    * delete `string`: The Waterbutler API route for file deletions.
    * download `string`: The Waterbutler API route for file downloads.
    * html `string`: A link to the file on the OSF.
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
    * render `string`: A Waterbutler API route for rendering the file.
    * self `string`: A link to the detail page for the file.
    * upload `string`: The Waterbutler API route for file uploads.
  * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
    * checkout `string`: A link to the user who checked out the file.
    * comments `string`: A link to the comments on the file.
    * node `string`: A link to the node the file is on.
    * versions `string`: A link to the versions of the file.
  * type `string`: The type identifier of the file entity (`files`).

### nodes_files_list
List of all the files/folders that are attached to your project for a given storage provider.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file

Node files may be filtered by `id`, `name`, `kind`, `path`, `provider`, `size`, and `last_touched`.

You can learn more about advanced filtering features [here](#tag/Filtering).

### Waterbutler API actions

Files can be modified via the Waterbutler URLs found in the `links` key of the response (new_folder, move, upload, download, and delete). Further information about how to interact with files can be found in the [Waterbutler API documentation](https://waterbutler.readthedocs.io/en/latest/api.html#v1-api).


```js
osf.nodes_files_list({
  "node_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the storage provider.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file entity.
      * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
      * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
      * current_version `integer`: Version number of the file.
      * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
      * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
      * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
      * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
      * kind `string`: The kind of files object it is (`file` or `folder`).
      * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
      * materialized_path `string`: Unix-style path to the file relative to the provider root.
      * name `string`: Name of the file
      * path `string`: The unique identifier for this file entity for this project and storage provider.
      * provider `string`: The id of the file provider (e.g., `osfstorage`)
      * size `integer`: Size of the file in bytes.
      * tags `array`: A list of strings that describe this file, as entered by project contributors.
        * items `string`
    * id `string`: The identifier of the file entity.
    * links `object`: Links to alternative representations of the file entity.
      * delete `string`: The Waterbutler API route for file deletions.
      * download `string`: The Waterbutler API route for file downloads.
      * html `string`: A link to the file on the OSF.
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
      * render `string`: A Waterbutler API route for rendering the file.
      * self `string`: A link to the detail page for the file.
      * upload `string`: The Waterbutler API route for file uploads.
    * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
      * checkout `string`: A link to the user who checked out the file.
      * comments `string`: A link to the comments on the file.
      * node `string`: A link to the node the file is on.
      * versions `string`: A link to the versions of the file.
    * type `string`: The type identifier of the file entity (`files`).

### nodes_files_read
Retrieves the details of a file attached to given node (project or component) for the given storage provider.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_files_read({
  "node_id": "",
  "provider": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * provider **required** `string`: The unique identifier of the storage provider.
  * path **required** `string`: The unique identifier of the file path.

#### Output
* output `object`
  * attributes `object`: The properties of the file entity.
    * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
    * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
    * current_version `integer`: Version number of the file.
    * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
    * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
    * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
    * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
    * kind `string`: The kind of files object it is (`file` or `folder`).
    * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
    * materialized_path `string`: Unix-style path to the file relative to the provider root.
    * name `string`: Name of the file
    * path `string`: The unique identifier for this file entity for this project and storage provider.
    * provider `string`: The id of the file provider (e.g., `osfstorage`)
    * size `integer`: Size of the file in bytes.
    * tags `array`: A list of strings that describe this file, as entered by project contributors.
      * items `string`
  * id `string`: The identifier of the file entity.
  * links `object`: Links to alternative representations of the file entity.
    * delete `string`: The Waterbutler API route for file deletions.
    * download `string`: The Waterbutler API route for file downloads.
    * html `string`: A link to the file on the OSF.
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
    * render `string`: A Waterbutler API route for rendering the file.
    * self `string`: A link to the detail page for the file.
    * upload `string`: The Waterbutler API route for file uploads.
  * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
    * checkout `string`: A link to the user who checked out the file.
    * comments `string`: A link to the comments on the file.
    * node `string`: A link to the node the file is on.
    * versions `string`: A link to the versions of the file.
  * type `string`: The type identifier of the file entity (`files`).

### nodes_forks_list

A paginated list of the current node's forks. The returned fork nodes are sorted by their `forked_date`, with the most recently forked nodes appearing first.

Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 forked nodes. If the current node has zero forked nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the forked node, meaning additional requests to the forked node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.


```js
osf.nodes_forks_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_forks_create
Creates a fork of the given node.

Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.

You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.

When creating a fork, your fork will only contain public components of the current node and components for which you are a contributor. Private components that you do not have access to will not be forked.

#### Required

There are no required attributes when creating a fork, as all of the forked node's attributes will be copied from the current node.

The `title` field is optional, with the default title being "Fork of " prepended to the current node's title.

#### Returns

Returns a JSON object with a `data` key containing the complete srepresentation of the forked node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_forks_create({
  "node_id": "",
  "body": {
    "type": "",
    "attributes": {
      "title": "",
      "category": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

#### Output
*Output schema unknown*

### node_groups_list
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

A paginated list of the groups that have permissions to the node, sorted by their date_modified.

Groups are collections of users that can be added to a node.  All members of the group will be granted the same permission to the node.
#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 groups. Each resource in the array contains the full representation of the group, meaning additional requests to a group's detail view are not necessary.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include groups that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/groups/?filter[admin]=true.

Node Groups may be filtered by their `name` and `permission` attributes.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.node_groups_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the node group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name `string`: The name of the group that has permission to the node.
      * permission `string` (values: read, write, admin): The permission level of the node group. The default value is 'write'.
    * id `string`: The identifier of the node_group entity. Node group identifiers have the form {node_id}-{group_id}.
    * links `object`: URLs to alternative representations of the node group entity.
      * self `string`: A link to the the canonical API endpoint for the node group.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * group **required** `string`: A relationship to the group that has permission to the node.
    * type **required** `string`: The type identifier of the node group entity (`node_groups`).

### node_groups_create_create
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Adds a group to a node, effectively creating a relationship between the node and a group.

Groups are collections of users that can be added to a node.  All members of the group will be granted the same permission to the node.
#### Permissions
Only group managers that also have admin permissions to a node, can add a group to a node.
#### Required
A relationship object with a `data` key, containing the `groups` type and valid group ID is required.

All attributes describing the relationship between the group and the node are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new node group, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.node_groups_create_create({
  "node_id": "",
  "body": {
    "type": "",
    "relationships": {
      "group": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`
    * attributes `object`: The properties of the node group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name `string`: The name of the group that has permission to the node.
      * permission `string` (values: read, write, admin): The permission level of the node group. The default value is 'write'.
    * id `string`: The identifier of the node_group entity. Node group identifiers have the form {node_id}-{group_id}.
    * links `object`: URLs to alternative representations of the node group entity.
      * self `string`: A link to the the canonical API endpoint for the node group.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * group **required** `string`: A relationship to the group that has permission to the node.
    * type **required** `string`: The type identifier of the node group entity (`node_groups`).

#### Output
*Output schema unknown*

### nodes_groups_delete
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Removes a group from a node. This request only removes the relationship between the node and the group, it does not delete the group itself.

A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.
#### Permissions
A manager of the group or a project administrator can remove the group from the node.

#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_groups_delete({
  "node_id": "",
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * group_id **required** `string`: The unique identifier of the group.

#### Output
*Output schema unknown*

### nodes_groups_read
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Retrieves the details of a given node group.

Groups are collections of users that can be added to a node.  All members of the group will be granted the same permission to the node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_groups_read({
  "node_id": "",
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * group_id **required** `string`: The unique identifier of the group.

#### Output
* output `object`
  * attributes `object`: The properties of the node group entity.
    * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
    * name `string`: The name of the group that has permission to the node.
    * permission `string` (values: read, write, admin): The permission level of the node group. The default value is 'write'.
  * id `string`: The identifier of the node_group entity. Node group identifiers have the form {node_id}-{group_id}.
  * links `object`: URLs to alternative representations of the node group entity.
    * self `string`: A link to the the canonical API endpoint for the node group.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
    * group **required** `string`: A relationship to the group that has permission to the node.
  * type **required** `string`: The type identifier of the node group entity (`node_groups`).

### nodes_groups_partial_update
*NOTE* This feature is experimental and subject to change at any time. It may only be available on certain environments.

Updates the permission the group has to the node.
Node groups can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
#### Permissions
Only project administrators can update the permissions a group has to the node.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

If the given group is not already in the group list, a 404 Not Found error will be returned.


```js
osf.nodes_groups_partial_update({
  "node_id": "",
  "group_id": "",
  "body": {
    "type": "",
    "relationships": {
      "group": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * group_id **required** `string`: The unique identifier of the group.
  * body **required** `object`
    * attributes `object`: The properties of the node group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name `string`: The name of the group that has permission to the node.
      * permission `string` (values: read, write, admin): The permission level of the node group. The default value is 'write'.
    * id `string`: The identifier of the node_group entity. Node group identifiers have the form {node_id}-{group_id}.
    * links `object`: URLs to alternative representations of the node group entity.
      * self `string`: A link to the the canonical API endpoint for the node group.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * group **required** `string`: A relationship to the group that has permission to the node.
    * type **required** `string`: The type identifier of the node group entity (`node_groups`).

#### Output
*Output schema unknown*

### nodes_identifiers_list
List all identifiers associated with a given node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=doi

Identifiers may be filtered by their `category` e.g `doi`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_identifiers_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the identifier entity.
      * category `string` (values: doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### nodes_identifiers_create
Create an identifier for a given node - can only mint DOI's at this time.  Send a POST request with a `category` attribute with a value of 'doi'.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains the created identifier object.


```js
osf.nodes_identifiers_create({
  "node_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the identifier entity.
      * category `string` (values: doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### nodes_institutions_list
List of all institutions affiliated with this node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.nodes_institutions_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * assets `object`: Assets belonging to a specific institution
        * logo `string`: Static path to the institution specific normal logo
        * logo_rounded `string`: Static path to the institution specific rounded logo
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * html `string`: A link to the detail page for the institution on the OSF.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### nodes_linked_nodes_list
List of all nodes linked to the given node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_linked_nodes_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### nodes_logs_list
A paginated list of all logs associated with a given node.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

This list includes the logs of the specified node as well as the logs of that node's children to which the current user has read-only access.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.

Nodes may be filtered by their `action`, and `date`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_logs_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the log.
      * action **required** `string`: The type of action performed on the OSF. See actions section for full list of possible actions.
      * date **required** `string`: The date and time at which the log was created, as an iso8601 formatted timestamp.
      * params `object`: The type of action performed on the OSF. See description for full list of possible actions.
        * addon `string`: The addon associated with the connected node.
        * anonymous_link `boolean`: The view only link added to the node was anonymous.
        * bucket `string`: The Amazon s3 bucket connected to the connected node.
        * citation_name `string`: Name of citation associated with the connected node.
        * contributors `string`: List of contributors on the connected node involved in the action represented by this node log.
        * data_set `string`: The dataset associated with the connected node.
        * destination `string`: A dictionary with information about the destination for the move of the item on the node associated with this log. Details include the path, url, addon, node_url and node_title.
        * figshare_title `string`: Title of the fighshare project associated with this node log
        * file `string`: Dictionary with information about the file involved with the log.
        * filename `string`: Filename for the file associated with the log.
        * folder `string`: Folder associated with the log.
        * folder_name `string`: Name of the folder associated with the log.
        * forward_url `string`: URL that the connected node forwards to.
        * github_repo `string`: The github repository involved with the action represented by this node log.
        * github_user `string`: The github user involved with the action represented by this node log.
        * identifiers `string`: Dictionary containing the DOI for a preprint associated with the log.
        * institution `string`: Dictionary containing the ID and Name of the institution associated with the log.
        * kind `string`: Kind of the object associated with the log.
        * license `string`: License for the associated node.
        * old_page `string`: Old name of wiki page for a wiki rename log action.
        * page `string`: Current name of wiki page for rename log action.
        * page_id `string`: Primary key of the wiki page associated with the log.
        * params_node `string`: Node that is refered to in the params of the log.
        * params_project `string`: Project that is refered to in the params of the log.
        * path `string`: Path for a file associated with the log.
        * pointer `string`: A dictionary with information about the node that is linked to the associated node.
        * preprint `string`: Preprint related to the associated node.
        * preprint_provider `string`: Preprint provider for the associated node.
        * previous_institution `string`: If a primary institution for the associated node is changed, this will show the previous institution.
        * source `string`: A dictionary with information about the source of a move related event for a log. Details include the path, url, addon, node_url and node_title.
        * study `string`: Dataverse study linked to the associated node.
        * tag `string`: Tag associated with the associated node.
        * tags `string`: Tags associated with the associated node.
        * target `string`: A dictionary containing details about the target of the log. Details include the path, url, addon, node_url and node_title.
        * template_node `string`: A dictionary containing information about the node that was used as a template for the associated node.
        * title_new `string`: The new title for the associated node.
        * title_original `string`: The original title for the associated node
        * updated_fields `string`: A dictionary containing all of the fields updated on the associated node.
        * urls `string`: Links to access information about the file associated with this log.
        * version `string`: Version of the wiki page associated with this log.
        * wiki `string`: A dictionary with information about the wiki page associated with the log.
    * id **required** `string`: The identifier of the log.
    * links **required** `object`: URLs to alternative representations of the log entity.
      * self **required** `string`: A link to the detail page for the log.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the log.
      * linked_node `string`: A relationship to the node linked to this log.
      * node **required** `string`: A relationship to the node associated with this log.
      * original_node `string`: A relationship to the original node that was associated with this log, in case this log was copied from a node to a fork or registration.
      * template_node `string`: A relationship to the node used as a template for this log.
      * user `string`: A relationship to the user who performed the log action.
    * type **required** `string`: The type identifier of the log (`logs`)

### nodes_preprints_list
A paginated list of preprints for which the given node contains supplemental materials. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

**Note: This API endpoint is under active development, and is subject to change in the future.**

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.nodes_preprints_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the preprint entity.
      * current_user_permissions `array`: The logged-in user's permissions to the preprint
        * items `string`
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The date when the preprint was withdrawn
      * description `string`: The description of the preprint
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * is_published `boolean`: Whether or not a preprint is published
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * original_publication_date `string`: User-entered, the date when the preprint was originally published
      * preprint_doi_created `string`: The date when the doi was minted for the preprint
      * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
      * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
      * tags `array`: A list of the preprint's tags.
        * items `string`
      * title **required** `string`: The title of the preprint
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * contributors `string`: A relationship to the preprint authors
      * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node `string`: A relationship to the project containing supplemental materials for the preprints.
      * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### nodes_registrations_list
List of all registrations of the given node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_registrations_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the registration entity.
      * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
        * items `string`
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * custom_citation `string`: User-entered custom registration citation
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
      * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
      * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
      * withdrawn `boolean`: Whether or not this registration has been withdrawn.
    * id **required** `string`: The unique identifier of the registration.
    * links **required** `object`: URLs to alternative representations of the registrations entity.
      * html `string`: A link to the registration's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this registration.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
      * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
      * children `string`: A link to the list of the registered node's children (components).
      * citation `string`: A link to the citation details of this registration.
      * comments `string`: A link to the list of comments on this registration.
      * contributors `string`: A link to the list of contributors on this registration.
      * files `string`: A link to the list of storage providers that have been enabled on this registration.
      * forks `string`: A link to the list of nodes that are forks of this registration.
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
      * license `string`: A relationship to the license that has been applied to the registration.
      * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
      * logs `string`: A link to the list of log actions pertaining to this registration.
      * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
      * registered_by `string`: A link to the user that initiated this registration.
      * registered_from `string`: A link to the node that this registration was registered from.
      * registration_schema `string`: A link to the metaschema that this registration conforms to.
      * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
      * view_only_links `string`: A link to the list of view only links that have been created for this registration.
      * wikis `string`: A link to the list of wiki pages for this registration.
    * type **required** `string`: The type identifier of the registration entity (`registrations`).

### nodes_registrations_create
Finalize the registration process of the current draft registration. A registration is created from a completed draft registration (containing the supplemental registration questions). It also needs information about whether the registration will become public immediately or be embargoed, and conditionally, the datetime at which the registration will become public.

Refer to step 1: [How to create a draft registration](#operation/nodes_draft_registrations_create)

Refer to step 2: [How to complete the supplemental registration questions of a draft registration](#operation/nodes_draft_registrations_partial_update)

A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn. Your original project remains editable but will now have the registration linked to it.
#### Permissions
Only project administrators may create registrations.
#### Required
Required fields for creating a registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`draft_registration`

&nbsp;&nbsp;&nbsp;&nbsp;`registration_choice`

&nbsp;&nbsp;&nbsp;&nbsp;`lift_embargo` (Only required when `registration_choice` is "embargo")
#### Optional
&nbsp;&nbsp;&nbsp;&nbsp;`children` (If left unspecified all children will be registered)

#### Returns
Returns a JSON object with a `data` key containing the representation of the created registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_registrations_create({
  "node_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * body **required** `object`

#### Output
*Output schema unknown*

### node_settings_detail
Retrieves the details of settings related to the node.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested node settings, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Permissions

Settings for a node are readable by users that are contributors on the node. Most fields are writeable only by users that are administrators on the node. The fields for determining redirect links are writable by a contributor who has read/write permissions on the node.


```js
osf.node_settings_detail({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `object`
  * attributes `object`: The properties of the node settings entity.
    * access_requests_enabled `string`: A boolean value indicating if access requests are allowed for the connected node.
    * anyone_can_comment `string`: A boolean value indicating if public comments are enabled on the connected node.
    * anyone_can_edit_wiki `string`: A boolean value indicating if public editing is enabled on the connected wiki.
    * redirect_link_enabled `string`: A boolean value indicating that there is a redirect link activated for when a user visits the associated node.
    * redirect_link_label `string`: The label for the redirect URL that has been configured for the associated node.
    * redirect_link_url `string`: The redirect URL that has been configured for the associated node.
    * wiki_enabled `string`: A boolean value indicating that there is a wiki connected to the associated node.
  * id `string`: The identifier of the node that the current settings are for.
  * links `object`: URLs to alternative representations of the node settings entity.
    * self `string`: A link to the node settings entity.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the node settings entity.
    * view_only_links `string`: A link to the list of view only links that have been created for the connected node.
  * type `string`: The type identifier for node settings. Should be node-settings.

### node_settings_partial_update
Updates the details of settings related to the node.

#### Returns

Returns a JSON object with a `data` key containing the updated representation of the requested node settings, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Permissions

Most fields on the node settings entity are writeable only by users that are administrators on the node. The fields for determining redirect links are writable by a contributor who has read/write permissions on the node.


```js
osf.node_settings_partial_update({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `object`
  * attributes `object`: The properties of the node settings entity.
    * access_requests_enabled `string`: A boolean value indicating if access requests are allowed for the connected node.
    * anyone_can_comment `string`: A boolean value indicating if public comments are enabled on the connected node.
    * anyone_can_edit_wiki `string`: A boolean value indicating if public editing is enabled on the connected wiki.
    * redirect_link_enabled `string`: A boolean value indicating that there is a redirect link activated for when a user visits the associated node.
    * redirect_link_label `string`: The label for the redirect URL that has been configured for the associated node.
    * redirect_link_url `string`: The redirect URL that has been configured for the associated node.
    * wiki_enabled `string`: A boolean value indicating that there is a wiki connected to the associated node.
  * id `string`: The identifier of the node that the current settings are for.
  * links `object`: URLs to alternative representations of the node settings entity.
    * self `string`: A link to the node settings entity.
  * relationships `object`: URLs to other entities or entity collections that have a relationship to the node settings entity.
    * view_only_links `string`: A link to the list of view only links that have been created for the connected node.
  * type `string`: The type identifier for node settings. Should be node-settings.

### nodes_view_only_links_list
List of view only links on a node.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Permissions

View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.

#### Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_view_only_links_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the view only link entity.
      * anonymous `boolean`: Whether or not the view only link has anonymized contributors
      * date_created `string`: The time at which the view only link was created, as an iso8601 formatted timestamp.
      * key `string`: The view only key
      * name `string`: The name of the view only link
    * id **required** `string`: The unique identifier of the view only link.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the view only link entity.
      * creator **required** `string`: A relationship to the user who created this view only link.
      * nodes **required** `string`: A relationship to the nodes which this view only link gives read-only access to.
    * type **required** `string`: The type identifier of the view only link ('view-only-links').

### nodes_view_only_links_read
Retrieves the details of a view only link on a node.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Permissions

View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.


```js
osf.nodes_view_only_links_read({
  "node_id": "",
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.
  * link_id **required** `string`: The unique identifier of the view only link.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the view only link entity.
    * anonymous `boolean`: Whether or not the view only link has anonymized contributors
    * date_created `string`: The time at which the view only link was created, as an iso8601 formatted timestamp.
    * key `string`: The view only key
    * name `string`: The name of the view only link
  * id **required** `string`: The unique identifier of the view only link.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the view only link entity.
    * creator **required** `string`: A relationship to the user who created this view only link.
    * nodes **required** `string`: A relationship to the nodes which this view only link gives read-only access to.
  * type **required** `string`: The type identifier of the view only link ('view-only-links').

### nodes_wikis_list
List of wiki pages on a node.
#### Returns

Paginated list of the node's current wiki pages, ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

Note that if an anonymous view_only key is being used, the user relationship will not be exposed.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

Wiki pages can be filtered based on their `name` and `date_modified` fields.

+ `filter[name]=<Str>` -- filter wiki pages by name

+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.nodes_wikis_list({
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `string`: The unique identifier of the node.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the wiki.
      * content_type **required** `string`: Content type of the wiki (`text/markdown`).
      * current_user_can_comment **required** `string`: Whether the current user is allowed to post comments on this wiki.
      * date_modified **required** `string`: The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
      * extra **required** `string`: A dictionary containing additional metadata about this wiki, including version information.
      * kind **required** `string`: The type of object.
      * materialized_path **required** `string`: Materialized path to the wiki object.
      * name **required** `string`: The name/title of the wiki page.
      * path **required** `string`: Path to the wiki object.
      * size **required** `string`: Size of the wiki.
    * id `string`: The identifier of the wiki.
    * links `object`: URLs to alternative representations of the wiki.
      * download `string`: The URL to download the content of the wiki.
      * info `string`: A link to the detail page for the wiki.
      * self `string`: A link to the detail page for the wiki.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki.
      * comments `string`: A relationship to the comments related to this wiki.
      * node `string`: A relationship to the associated node.
      * user `string`: A relationship to the user associated with this wiki.
      * versions `string`: A relationship to the versions related to this wiki.
    * type **required** `string`: The type identifier of the wiki (`wikis`).

### nodes_wikis_list_create
Creates a new wiki page on the given node.
`name` is the only required field when creating a new wiki page. The `content` of the wiki page may optionally be included.

This POST request creates a wiki page, and then creates a first version for the wiki - adding your content to the first version. For subsequent updates to this wiki page, POST to the versions relationship.  This will create new versions of this wiki. For more information, see [Update a wiki](#operation/wiki_versions_create).

Returns a JSON object with a `data` key containing the representation of the created wiki, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.nodes_wikis_list_create({
  "body": {
    "type": "",
    "relationships": {}
  },
  "node_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * attributes `object`: The properties of the wiki.
      * content_type **required** `string`: Content type of the wiki (`text/markdown`).
      * current_user_can_comment **required** `string`: Whether the current user is allowed to post comments on this wiki.
      * date_modified **required** `string`: The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
      * extra **required** `string`: A dictionary containing additional metadata about this wiki, including version information.
      * kind **required** `string`: The type of object.
      * materialized_path **required** `string`: Materialized path to the wiki object.
      * name **required** `string`: The name/title of the wiki page.
      * path **required** `string`: Path to the wiki object.
      * size **required** `string`: Size of the wiki.
    * id `string`: The identifier of the wiki.
    * links `object`: URLs to alternative representations of the wiki.
      * download `string`: The URL to download the content of the wiki.
      * info `string`: A link to the detail page for the wiki.
      * self `string`: A link to the detail page for the wiki.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki.
      * comments `string`: A relationship to the comments related to this wiki.
      * node `string`: A relationship to the associated node.
      * user `string`: A relationship to the user associated with this wiki.
      * versions `string`: A relationship to the versions related to this wiki.
    * type **required** `string`: The type identifier of the wiki (`wikis`).
  * node_id **required** `string`: The unique identifier of the node.

#### Output
*Output schema unknown*

### preprints_list
A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.preprints_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the preprint entity.
      * current_user_permissions `array`: The logged-in user's permissions to the preprint
        * items `string`
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The date when the preprint was withdrawn
      * description `string`: The description of the preprint
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * is_published `boolean`: Whether or not a preprint is published
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * original_publication_date `string`: User-entered, the date when the preprint was originally published
      * preprint_doi_created `string`: The date when the doi was minted for the preprint
      * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
      * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
      * tags `array`: A list of the preprint's tags.
        * items `string`
      * title **required** `string`: The title of the preprint
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * contributors `string`: A relationship to the preprint authors
      * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node `string`: A relationship to the project containing supplemental materials for the preprints.
      * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprints_create
Creates a new preprint.  Initial request to start the preprint requires a title and a provider.

After you've created the preprint, you will need to upload a file to the preprint or copy a file from an existing OSF project, which will be a waterbutler request.

To upload a new file to the preprint -

    1. Make a request to the preprint files' relationship to get the preprint's upload link.
    2. Issue a PUT request to the preprint's upload link

    curl -X "PUT" "https://files.us.osf.io/v1/resources/<preprint_id>/providers/osfstorage/?kind=file&name=my_preprint_file.txt" \
        --
        -H "Authorization: Bearer your-token-goes-here" \
        -H "Content-Type: text/plain" \
        -d "Contents of my preprint file go here"

To copy an existing file from a project to your preprint -

    1. Make a request to the node file's list endpoint GET http://api.osf.io/v2/nodes/node_id/files/osfstorage/
    2. Locate the "move" relationship link for the file you wish to copy from the node to the preprint
    3. Issue a POST request to the file's move link, where the resource is the preprint id, the action is copy, and the provider is osfstorage.

    curl -X "POST" "https://files.us.osf.io/v1/resources/<node_id>/providers/osfstorage/<file_id>" \
        --
        -H "Authorization: Bearer your-token-goes-here " \
        -H "Content-Type: application/json" \
        -d '{"action": "copy", "path": "/", "resource": "<preprint_id>", "provider": "osfstorage", "conflict": "replace"}'


#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.


```js
osf.preprints_create({
  "data": {
    "type": "",
    "relationships": {
      "provider": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * data **required** `object`
    * attributes `object`: The properties of the preprint entity.
      * current_user_permissions `array`: The logged-in user's permissions to the preprint
        * items `string`
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The date when the preprint was withdrawn
      * description `string`: The description of the preprint
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * is_published `boolean`: Whether or not a preprint is published
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * original_publication_date `string`: User-entered, the date when the preprint was originally published
      * preprint_doi_created `string`: The date when the doi was minted for the preprint
      * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
      * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
      * tags `array`: A list of the preprint's tags.
        * items `string`
      * title **required** `string`: The title of the preprint
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * contributors `string`: A relationship to the preprint authors
      * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node `string`: A relationship to the project containing supplemental materials for the preprints.
      * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

#### Output
*Output schema unknown*

### preprints_read
Retrieves the details of a preprint.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.preprints_read({
  "preprint_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_id **required** `string`: The unique identifier of the preprint.

#### Output
* output `object`
  * attributes `object`: The properties of the preprint entity.
    * current_user_permissions `array`: The logged-in user's permissions to the preprint
      * items `string`
    * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
    * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
    * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
    * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
    * date_withdrawn `string`: The date when the preprint was withdrawn
    * description `string`: The description of the preprint
    * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
    * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
    * is_published `boolean`: Whether or not a preprint is published
    * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
    * original_publication_date `string`: User-entered, the date when the preprint was originally published
    * preprint_doi_created `string`: The date when the doi was minted for the preprint
    * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
    * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
    * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
      * items `string`
    * tags `array`: A list of the preprint's tags.
      * items `string`
    * title **required** `string`: The title of the preprint
  * id `string`: The identifier of the preprint entity.
  * links `object`: URLs to alternative representations of the preprint entity.
    * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
    * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
    * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
    * self `string`: A link to the detail page for the preprint.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
    * citation `string`: A relationship to the citation of the preprint.
    * contributors `string`: A relationship to the preprint authors
    * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
    * identifiers `string`: A relationship to the identifiers associated with the preprint.
    * license `string`: A relationship to the license that has been applied to the preprint.
    * node `string`: A relationship to the project containing supplemental materials for the preprints.
    * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
  * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprints_partial_update
Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

The file that you either uploaded to the preprint or copied from an OSF project to the preprint will need to be set as the primary file before the preprint can be published.

To remove a supplemental project from a preprint will be a separate PATCH request to the node self relationship link.

PATCH /v2/preprints/<preprint_id>/relationships/node/

{data: null}

#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.


```js
osf.preprints_partial_update({
  "preprint_id": "",
  "data": {}
}, context)
```

#### Input
* input `object`
  * preprint_id **required** `string`: The unique identifier of the preprint.
  * data **required** `object`

#### Output
*Output schema unknown*

### preprints_citation_list
The citation details for a preprint, in CSL format.

#### Returns

Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.


```js
osf.preprints_citation_list({
  "preprint_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_id **required** `string`: The unique identifier of the preprint whose citation you wish to retrieve.

#### Output
* output `object`
  * attributes `object`: The properties of the citation entity.
    * author `string`: The list of bibliographic authors, represented as dictionaries of their given and family names, for the entitiy being cited.
    * doi `string`: The DOI for the entity being cited, if one exists.
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is 'OSF'. For preprints, the publisher is the same as the preprint provider.
    * title `string`: The title of the entity being cited.
  * id `string`: The identifier of the entity being cited.
  * links `object`: URLs to alternative representations of the citation entity.
    * self `string`: A link to the entity that is being cited.
  * type `string`: The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).

### preprints_citation_read
The citation for a preprint in a specific style.

#### Returns

Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.


```js
osf.preprints_citation_read({
  "style_id": "",
  "preprint_id": ""
}, context)
```

#### Input
* input `object`
  * style_id **required** `string`: The unique identifier of the citation style.
  * preprint_id **required** `string`: The unique identifier of the preprint.

#### Output
* output `object`
  * attributes `object`: The properties of the citation style entity.
    * citation `string`: The complete entity citation in the requested style.
  * id `string`: The identifier of the citation style, e.g. APA.
  * type `string`: The type identifier of the citation style entity (`styled-citations`).

### preprint_provider_list
A paginated list of all preprint providers.

The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.

_< v2.8 use `preprint_providers` instead of `providers/preprints`_

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers.

Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/providers/preprints/?filter[id]=osf.

Preprint Providers may be filtered by their `id`, `name`,  and `description`

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.preprint_provider_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * attributes `object`: The properties of the preprint provider entity.
    * advisory_board `string`: The HTML representation of the preprint provider's advisory board.
    * description `string`: The description of the preprint provider.
    * domain `string`: The preprint provider's domain, if the provider is using a domain to for their preprint service.
    * domain_redirect_enabled `boolean`: Whether or not redirects are enabled for the provider's domain.
    * email_support `string`: The preprint providers's support email address.
    * example `string`: The GUID for an example preprint from this preprint provider.
    * name `string`: The name of the preprint provider.
  * id `string`: The identifier of the preprint provider entity.
  * links `object`: Links to alternative representations of the preprint entity.
    * external_url `string`: A link to the external website for the preprint provider.
    * preprints `string`: A link to the preprint list page for the preprint provider.
    * self `string`: A link to the detail page for the preprint provider.
  * relationships `object`: Links to other entities or entity collections that have a relationship to the preprint provider.
    * licenses_acceptable `string`: A link to licenses the preprint provider allows.
    * preprints `string`: A link to the preprint list page for the preprint provider.
    * taxonomies `string`: A link to the taxonomies the preprint provider allows.
  * type `string`: The type identifier of the preprint provider entity (`preprint_providers`).

### preprint_provider_detail
Retrieves the details of a preprint provider.

_< v2.8 use `preprint_providers` instead of `providers/preprints`_

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.preprint_provider_detail({
  "preprint_provider_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_provider_id **required** `string`: The unique identifier of the preprint provider.

#### Output
* output `object`
  * attributes `object`: The properties of the preprint provider entity.
    * advisory_board `string`: The HTML representation of the preprint provider's advisory board.
    * description `string`: The description of the preprint provider.
    * domain `string`: The preprint provider's domain, if the provider is using a domain to for their preprint service.
    * domain_redirect_enabled `boolean`: Whether or not redirects are enabled for the provider's domain.
    * email_support `string`: The preprint providers's support email address.
    * example `string`: The GUID for an example preprint from this preprint provider.
    * name `string`: The name of the preprint provider.
  * id `string`: The identifier of the preprint provider entity.
  * links `object`: Links to alternative representations of the preprint entity.
    * external_url `string`: A link to the external website for the preprint provider.
    * preprints `string`: A link to the preprint list page for the preprint provider.
    * self `string`: A link to the detail page for the preprint provider.
  * relationships `object`: Links to other entities or entity collections that have a relationship to the preprint provider.
    * licenses_acceptable `string`: A link to licenses the preprint provider allows.
    * preprints `string`: A link to the preprint list page for the preprint provider.
    * taxonomies `string`: A link to the taxonomies the preprint provider allows.
  * type `string`: The type identifier of the preprint provider entity (`preprint_providers`).

### preprint_provider_licenses_list
A paginated list of the licenses allowed bya preprint provider.

_< v2.8 use `preprint_providers` instead of `providers/preprints`_

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.preprint_provider_licenses_list({
  "preprint_provider_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_provider_id **required** `string`: The unique identifier of the preprint provider.

#### Output
* output `object`
  * attributes `object`: The properties of the license.
    * name `string`: Name of the license.
    * required_fields `array`: Fields required for this license (provided to help front-end validators). Maps to properties on the NodeLicense model.
      * items `string`: Individual fields required by this license.
    * text `string`: Full text of the license.
  * id `string`: The identifier of the license.
  * links `object`: URLs to alternative representations of the license.
    * self `string`: A link to the detail page for the license.
  * type `string`: The type identifier of the license (`license`).

### preprint_providers_preprints_list
A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

_< v2.8 use `preprint_providers` instead of `providers/preprints`_

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/providers/preprints/osf/preprints/?filter[is_published]=true.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.preprint_providers_preprints_list({
  "preprint_provider_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_provider_id **required** `string`: The unique identifier of the preprint provider.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the preprint entity.
      * current_user_permissions `array`: The logged-in user's permissions to the preprint
        * items `string`
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The date when the preprint was withdrawn
      * description `string`: The description of the preprint
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * is_published `boolean`: Whether or not a preprint is published
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * original_publication_date `string`: User-entered, the date when the preprint was originally published
      * preprint_doi_created `string`: The date when the doi was minted for the preprint
      * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
      * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
      * tags `array`: A list of the preprint's tags.
        * items `string`
      * title **required** `string`: The title of the preprint
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * contributors `string`: A relationship to the preprint authors
      * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node `string`: A relationship to the project containing supplemental materials for the preprints.
      * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprint_provider_taxonomies_list
A paginated list of the taxonomies for a preprint provider.

The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.


 _< v2.8 use `preprint_providers` instead of `providers/preprints`_


#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.preprint_provider_taxonomies_list({
  "preprint_provider_id": ""
}, context)
```

#### Input
* input `object`
  * preprint_provider_id **required** `string`: The unique identifier of the preprint provider.

#### Output
* output `object`
  * attributes `object`: The properties of the taxonomy entity.
    * child_count `integer`: The number of children this taxonomy contains.
    * parents `array`: An array of JSON objects containing keys for `text` (name) and `id` (unique identifier) of this taxonomy's parents
      * items `string`
    * text `string`: The text name of the taxonomy
  * id `string`: The identifier of the taxonomy entity.
  * links `object`: URLs to alternative representations of the taxonomy entity.
    * parents `array`: An array of links to to this taxonomy's parents. This field is deprecated as of verson 2.4.
      * items `string`
    * self `string`: A link to the detail page for the taxonomy.
  * type `string`: The type identifier of the taxonomy entity (`taxonomies`).

### registrations_list
A paginated list of registrations on the OSF to which the user has access.

The returned registrations are those which are public or which the user has access to view.

Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).

#### Registrations

A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals

Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the registration entity.
      * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
        * items `string`
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * custom_citation `string`: User-entered custom registration citation
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
      * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
      * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
      * withdrawn `boolean`: Whether or not this registration has been withdrawn.
    * id **required** `string`: The unique identifier of the registration.
    * links **required** `object`: URLs to alternative representations of the registrations entity.
      * html `string`: A link to the registration's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this registration.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
      * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
      * children `string`: A link to the list of the registered node's children (components).
      * citation `string`: A link to the citation details of this registration.
      * comments `string`: A link to the list of comments on this registration.
      * contributors `string`: A link to the list of contributors on this registration.
      * files `string`: A link to the list of storage providers that have been enabled on this registration.
      * forks `string`: A link to the list of nodes that are forks of this registration.
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
      * license `string`: A relationship to the license that has been applied to the registration.
      * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
      * logs `string`: A link to the list of log actions pertaining to this registration.
      * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
      * registered_by `string`: A link to the user that initiated this registration.
      * registered_from `string`: A link to the node that this registration was registered from.
      * registration_schema `string`: A link to the metaschema that this registration conforms to.
      * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
      * view_only_links `string`: A link to the list of view only links that have been created for this registration.
      * wikis `string`: A link to the list of wiki pages for this registration.
    * type **required** `string`: The type identifier of the registration entity (`registrations`).

### registrations_read
Retrieve the details of a given registration.

#### Permissions

Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.

Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.

#### Registrations

A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted.

The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals

Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registrations_read({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the registration entity.
    * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
    * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
    * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
      * items `string`
    * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
    * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
    * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
      * items `string`
    * custom_citation `string`: User-entered custom registration citation
    * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
    * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
    * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
    * description `string`: The description of the registered node.
    * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
    * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
    * fork `boolean`: Whether or not this registration represents a fork of another node.
    * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
    * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
    * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
    * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
    * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
    * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
    * public `boolean`: Whether or not the registration is publicly visible.
    * registered_meta `string`: A dictionary with supplemental registration questions and responses.
    * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
    * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
    * registration_supplement `string`: The title of the registration schema this registration conforms to.
    * tags `array`: A list of strings that describe the registered node.
      * items `string`
    * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
    * title `string`: The title of the registered node.
    * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
    * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
    * withdrawn `boolean`: Whether or not this registration has been withdrawn.
  * id **required** `string`: The unique identifier of the registration.
  * links **required** `object`: URLs to alternative representations of the registrations entity.
    * html `string`: A link to the registration's page on the OSF.
    * self `string`: A link to the canonical API endpoint of this registration.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
    * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
    * children `string`: A link to the list of the registered node's children (components).
    * citation `string`: A link to the citation details of this registration.
    * comments `string`: A link to the list of comments on this registration.
    * contributors `string`: A link to the list of contributors on this registration.
    * files `string`: A link to the list of storage providers that have been enabled on this registration.
    * forks `string`: A link to the list of nodes that are forks of this registration.
    * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
    * license `string`: A relationship to the license that has been applied to the registration.
    * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
    * logs `string`: A link to the list of log actions pertaining to this registration.
    * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
    * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
    * registered_by `string`: A link to the user that initiated this registration.
    * registered_from `string`: A link to the node that this registration was registered from.
    * registration_schema `string`: A link to the metaschema that this registration conforms to.
    * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
    * view_only_links `string`: A link to the list of view only links that have been created for this registration.
    * wikis `string`: A link to the list of wiki pages for this registration.
  * type **required** `string`: The type identifier of the registration entity (`registrations`).

### registrations_partial_update
Registrations can be updated with either a **PUT** or **PATCH** request. There are a handful of fields that can be edited by registration administrators, and a few fields by users with write permissions.
Note - one of the fields you can edit is `public`. Registrations can only be turned from private to public, not vice versa.

You may request a registration to be withdrawn by providing a truthy value for `pending_withdrawal` in the data payload, along with an optional `withdrawal_justification`.
#### Permissions
Only project administrators may update most fields on a registration, but write contributors can edit certain fields like tags.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registrations_partial_update({
  "registration_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * body **required** `object`

#### Output
* output `object`
  * attributes **required** `object`: The properties of the registration entity.
    * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
    * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
    * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
      * items `string`
    * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
    * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
    * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
      * items `string`
    * custom_citation `string`: User-entered custom registration citation
    * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
    * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
    * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
    * description `string`: The description of the registered node.
    * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
    * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
    * fork `boolean`: Whether or not this registration represents a fork of another node.
    * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
    * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
    * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
    * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
    * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
    * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
    * public `boolean`: Whether or not the registration is publicly visible.
    * registered_meta `string`: A dictionary with supplemental registration questions and responses.
    * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
    * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
    * registration_supplement `string`: The title of the registration schema this registration conforms to.
    * tags `array`: A list of strings that describe the registered node.
      * items `string`
    * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
    * title `string`: The title of the registered node.
    * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
    * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
    * withdrawn `boolean`: Whether or not this registration has been withdrawn.
  * id **required** `string`: The unique identifier of the registration.
  * links **required** `object`: URLs to alternative representations of the registrations entity.
    * html `string`: A link to the registration's page on the OSF.
    * self `string`: A link to the canonical API endpoint of this registration.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
    * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
    * children `string`: A link to the list of the registered node's children (components).
    * citation `string`: A link to the citation details of this registration.
    * comments `string`: A link to the list of comments on this registration.
    * contributors `string`: A link to the list of contributors on this registration.
    * files `string`: A link to the list of storage providers that have been enabled on this registration.
    * forks `string`: A link to the list of nodes that are forks of this registration.
    * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
    * license `string`: A relationship to the license that has been applied to the registration.
    * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
    * logs `string`: A link to the list of log actions pertaining to this registration.
    * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
    * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
    * registered_by `string`: A link to the user that initiated this registration.
    * registered_from `string`: A link to the node that this registration was registered from.
    * registration_schema `string`: A link to the metaschema that this registration conforms to.
    * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
    * view_only_links `string`: A link to the list of view only links that have been created for this registration.
    * wikis `string`: A link to the list of wiki pages for this registration.
  * type **required** `string`: The type identifier of the registration entity (`registrations`).

### registrations_children_list
A paginated list of children of a registration.

The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.

The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_children_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the registration entity.
      * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
        * items `string`
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * custom_citation `string`: User-entered custom registration citation
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
      * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
      * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
      * withdrawn `boolean`: Whether or not this registration has been withdrawn.
    * id **required** `string`: The unique identifier of the registration.
    * links **required** `object`: URLs to alternative representations of the registrations entity.
      * html `string`: A link to the registration's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this registration.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
      * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
      * children `string`: A link to the list of the registered node's children (components).
      * citation `string`: A link to the citation details of this registration.
      * comments `string`: A link to the list of comments on this registration.
      * contributors `string`: A link to the list of contributors on this registration.
      * files `string`: A link to the list of storage providers that have been enabled on this registration.
      * forks `string`: A link to the list of nodes that are forks of this registration.
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
      * license `string`: A relationship to the license that has been applied to the registration.
      * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
      * logs `string`: A link to the list of log actions pertaining to this registration.
      * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
      * registered_by `string`: A link to the user that initiated this registration.
      * registered_from `string`: A link to the node that this registration was registered from.
      * registration_schema `string`: A link to the metaschema that this registration conforms to.
      * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
      * view_only_links `string`: A link to the list of view only links that have been created for this registration.
      * wikis `string`: A link to the list of wiki pages for this registration.
    * type **required** `string`: The type identifier of the registration entity (`registrations`).

### registrations_citations_list
A paginated list of the registration's alternative citation styles

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_citations_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the citation style entity.
      * date_parsed **required** `string`: The time at which the citation style was first parsed, as an iso8601 formatted timestamp.
      * short_title `string`: The short name for the citation style.
      * summary `string`: The summary of the citation style.
      * title **required** `string`: The official name of the citation style.
    * id **required** `string`: The identifier of the citation style, e.g. APA.
    * links `object`: URLs to alternative representations of the citation style entity.
    * type **required** `string`: The type identifier of the citation style entity (`citation-styles`).

### registrations_citation_read
Retrieves the citation style details for a registration, in CSL format.

#### Returns

Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.


```js
osf.registrations_citation_read({
  "registration_id": "",
  "citation_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * citation_id **required** `string`: The unique identifier of the citation.

#### Output
* output `object`
  * attributes `object`: The properties of the citation entity.
    * author `string`: The list of bibliographic authors, represented as dictionaries of their given and family names, for the entitiy being cited.
    * doi `string`: The DOI for the entity being cited, if one exists.
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is 'OSF'. For preprints, the publisher is the same as the preprint provider.
    * title `string`: The title of the entity being cited.
  * id `string`: The identifier of the entity being cited.
  * links `object`: URLs to alternative representations of the citation entity.
    * self `string`: A link to the entity that is being cited.
  * type `string`: The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).

### registrations_comments_list
A paginated list of the registration's comments.

The returned comments are sorted by their creation date, with the most recent comments appearing first.

#### Permissions

Comments of public registrations are given read-only access to everyone.

If the comment-level is `private`, only registration contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments of private registrations are only visible to contributors and administrators on the registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf

Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_comments_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the comment entity.
      * can_edit `boolean`: Whether or not the current user has permission to edit this comment
      * content `string`: The content of the comment.
      * date_created `string`: The time at which the comment was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the comment was last modified, as an iso8601 formatted timestamp.
      * deleted `boolean`: Whether or not the comment is deleted.
      * has_children `boolean`: Whether or not the comment has replies.
      * has_report `boolean`: Whether or not the comment the current user reported this as spam.
      * is_abuse `boolean`: Whether or not the comment is flagged or confirmed spam.
      * is_ham `boolean`: Whether or not an admin checked the legitimacy of this comment.
      * modified `boolean`: Whether or not the comment has been edited.
      * page `string`: The page type the comment is on, e.g. `node`, `registration`, `wiki`, `files`.
    * id **required** `string`: The identifier of the comment entity.
    * links `object`: URLs to alternative representations of the comment entity.
      * self `string`: A link to the detail page for the comment.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the comment entity.
      * node `string`: A relationship to the node the comment is on.
      * replies `string`: A relationship to the replies to the comment.
      * reports `string`: A relationship to the reports connected to the comment.
      * target `string`: A relationship to the target of the comment.
      * user `string`: A relationship to the user who created the comment.
    * type `string`: The type identifier of the comment entity (`comments`).

### registrations_contributors_list
A paginated list of all contributors on this registration.

The returned contributors are sorted by their index.

Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_contributors_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

### registrations_contributors_read
Retrieves the details of a contributor on this registration.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registrations_contributors_read({
  "registration_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the contributor entity.
      * bibliographic `boolean`: Whether or not the contributor will be included in citations for the node. The default value is true.
      * index `integer`: The position of this contributor in the list of project contributors and in project citations.
      * permission `string` (values: read, write, admin): The permission level of the contributor. The default value is 'write'.
      * unregistered_contributor `string`: The assigned name of the contributor if the contributor has not yet claimed their account.
    * id `string`: The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
    * links `object`: URLs to alternative representations of the contributor entity.
      * self `string`: A link to the the canonical API endpoint for the contributor.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the contributor entity.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * user **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * type **required** `string`: The type identifier of the contributor entity (`contributors`).

### registrations_providers_list
A paginated list of storage providers enabled on the registration

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.


```js
osf.registrations_providers_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file entity.
      * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
      * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
      * current_version `integer`: Version number of the file.
      * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
      * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
      * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
      * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
      * kind `string`: The kind of files object it is (`file` or `folder`).
      * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
      * materialized_path `string`: Unix-style path to the file relative to the provider root.
      * name `string`: Name of the file
      * path `string`: The unique identifier for this file entity for this project and storage provider.
      * provider `string`: The id of the file provider (e.g., `osfstorage`)
      * size `integer`: Size of the file in bytes.
      * tags `array`: A list of strings that describe this file, as entered by project contributors.
        * items `string`
    * id `string`: The identifier of the file entity.
    * links `object`: Links to alternative representations of the file entity.
      * delete `string`: The Waterbutler API route for file deletions.
      * download `string`: The Waterbutler API route for file downloads.
      * html `string`: A link to the file on the OSF.
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
      * render `string`: A Waterbutler API route for rendering the file.
      * self `string`: A link to the detail page for the file.
      * upload `string`: The Waterbutler API route for file uploads.
    * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
      * checkout `string`: A link to the user who checked out the file.
      * comments `string`: A link to the comments on the file.
      * node `string`: A link to the node the file is on.
      * versions `string`: A link to the versions of the file.
    * type `string`: The type identifier of the file entity (`files`).

### registrations_files_list
List of all the registration's files/folders for a given storage provider.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file

Files may be filtered by `id`, `name`, `kind`, `path`, `provider`, `size`, and `last_touched`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_files_list({
  "registration_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * provider **required** `string`: The unique identifier of the storage provider.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the file entity.
      * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
      * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
      * current_version `integer`: Version number of the file.
      * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
      * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
      * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
      * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
      * kind `string`: The kind of files object it is (`file` or `folder`).
      * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
      * materialized_path `string`: Unix-style path to the file relative to the provider root.
      * name `string`: Name of the file
      * path `string`: The unique identifier for this file entity for this project and storage provider.
      * provider `string`: The id of the file provider (e.g., `osfstorage`)
      * size `integer`: Size of the file in bytes.
      * tags `array`: A list of strings that describe this file, as entered by project contributors.
        * items `string`
    * id `string`: The identifier of the file entity.
    * links `object`: Links to alternative representations of the file entity.
      * delete `string`: The Waterbutler API route for file deletions.
      * download `string`: The Waterbutler API route for file downloads.
      * html `string`: A link to the file on the OSF.
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
      * render `string`: A Waterbutler API route for rendering the file.
      * self `string`: A link to the detail page for the file.
      * upload `string`: The Waterbutler API route for file uploads.
    * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
      * checkout `string`: A link to the user who checked out the file.
      * comments `string`: A link to the comments on the file.
      * node `string`: A link to the node the file is on.
      * versions `string`: A link to the versions of the file.
    * type `string`: The type identifier of the file entity (`files`).

### registrations_files_read
Retrieves the details of a registration file for the given storage provider.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registrations_files_read({
  "registration_id": "",
  "provider": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * provider **required** `string`: The unique identifier of the storage provider.
  * path **required** `string`: The unique identifier of the file path.

#### Output
* output `object`
  * attributes `object`: The properties of the file entity.
    * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
    * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
    * current_version `integer`: Version number of the file.
    * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
    * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
    * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
    * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
    * kind `string`: The kind of files object it is (`file` or `folder`).
    * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
    * materialized_path `string`: Unix-style path to the file relative to the provider root.
    * name `string`: Name of the file
    * path `string`: The unique identifier for this file entity for this project and storage provider.
    * provider `string`: The id of the file provider (e.g., `osfstorage`)
    * size `integer`: Size of the file in bytes.
    * tags `array`: A list of strings that describe this file, as entered by project contributors.
      * items `string`
  * id `string`: The identifier of the file entity.
  * links `object`: Links to alternative representations of the file entity.
    * delete `string`: The Waterbutler API route for file deletions.
    * download `string`: The Waterbutler API route for file downloads.
    * html `string`: A link to the file on the OSF.
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
    * render `string`: A Waterbutler API route for rendering the file.
    * self `string`: A link to the detail page for the file.
    * upload `string`: The Waterbutler API route for file uploads.
  * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
    * checkout `string`: A link to the user who checked out the file.
    * comments `string`: A link to the comments on the file.
    * node `string`: A link to the node the file is on.
    * versions `string`: A link to the versions of the file.
  * type `string`: The type identifier of the file entity (`files`).

### registrations_forks_list
A paginated list of the registration’s forks

The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.

Forking a registration creates a copy of an existing registration and all of its contents.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.registrations_forks_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the registration entity.
      * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
        * items `string`
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * custom_citation `string`: User-entered custom registration citation
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
      * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
      * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
      * withdrawn `boolean`: Whether or not this registration has been withdrawn.
    * id **required** `string`: The unique identifier of the registration.
    * links **required** `object`: URLs to alternative representations of the registrations entity.
      * html `string`: A link to the registration's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this registration.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
      * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
      * children `string`: A link to the list of the registered node's children (components).
      * citation `string`: A link to the citation details of this registration.
      * comments `string`: A link to the list of comments on this registration.
      * contributors `string`: A link to the list of contributors on this registration.
      * files `string`: A link to the list of storage providers that have been enabled on this registration.
      * forks `string`: A link to the list of nodes that are forks of this registration.
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
      * license `string`: A relationship to the license that has been applied to the registration.
      * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
      * logs `string`: A link to the list of log actions pertaining to this registration.
      * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
      * registered_by `string`: A link to the user that initiated this registration.
      * registered_from `string`: A link to the node that this registration was registered from.
      * registration_schema `string`: A link to the metaschema that this registration conforms to.
      * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
      * view_only_links `string`: A link to the list of view only links that have been created for this registration.
      * wikis `string`: A link to the list of wiki pages for this registration.
    * type **required** `string`: The type identifier of the registration entity (`registrations`).

### registrations_forks_create
Creates a fork of the given registration.

Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.

You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.

When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
#### Required
There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.

The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
#### Returns
Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.registrations_forks_create({
  "registration_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {
      "draft_registration": "",
      "registration_choice": ""
    },
    "relationships": {},
    "links": {}
  }
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * body **required** `object`
    * attributes **required** `object`: The properties of the registration entity.
      * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
        * items `string`
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * custom_citation `string`: User-entered custom registration citation
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
      * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
      * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
      * withdrawn `boolean`: Whether or not this registration has been withdrawn.
    * id **required** `string`: The unique identifier of the registration.
    * links **required** `object`: URLs to alternative representations of the registrations entity.
      * html `string`: A link to the registration's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this registration.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
      * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
      * children `string`: A link to the list of the registered node's children (components).
      * citation `string`: A link to the citation details of this registration.
      * comments `string`: A link to the list of comments on this registration.
      * contributors `string`: A link to the list of contributors on this registration.
      * files `string`: A link to the list of storage providers that have been enabled on this registration.
      * forks `string`: A link to the list of nodes that are forks of this registration.
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
      * license `string`: A relationship to the license that has been applied to the registration.
      * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
      * logs `string`: A link to the list of log actions pertaining to this registration.
      * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
      * registered_by `string`: A link to the user that initiated this registration.
      * registered_from `string`: A link to the node that this registration was registered from.
      * registration_schema `string`: A link to the metaschema that this registration conforms to.
      * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
      * view_only_links `string`: A link to the list of view only links that have been created for this registration.
      * wikis `string`: A link to the list of wiki pages for this registration.
    * type **required** `string`: The type identifier of the registration entity (`registrations`).

#### Output
*Output schema unknown*

### registrations_identifiers_list
A paginated list of the registration's identifiers.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=doi

Identifiers may be filtered by their `category` e.g `doi`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_identifiers_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the identifier entity.
      * category `string` (values: doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### registrations_identifiers_create
Create an identifier for a given registration - can only mint DOI's at this time.  Send a POST request with a `category` attribute with a value of 'doi'.
#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains the created identifier object.


```js
osf.registrations_identifiers_create({
  "registration_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * body **required** `object`

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the identifier entity.
      * category `string` (values: doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### registrations_institutions_list
A paginated list of institutions affiliated with the registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.registrations_institutions_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * assets `object`: Assets belonging to a specific institution
        * logo `string`: Static path to the institution specific normal logo
        * logo_rounded `string`: Static path to the institution specific rounded logo
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * html `string`: A link to the detail page for the institution on the OSF.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### registrations_linked_nodes_list
List of all nodes linked to the registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_linked_nodes_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### registrations_logs_list
A paginated list of the registration's logs.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.

Logs may be filtered by their `action`, and `date`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_logs_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the log.
      * action **required** `string`: The type of action performed on the OSF. See actions section for full list of possible actions.
      * date **required** `string`: The date and time at which the log was created, as an iso8601 formatted timestamp.
      * params `object`: The type of action performed on the OSF. See description for full list of possible actions.
        * addon `string`: The addon associated with the connected node.
        * anonymous_link `boolean`: The view only link added to the node was anonymous.
        * bucket `string`: The Amazon s3 bucket connected to the connected node.
        * citation_name `string`: Name of citation associated with the connected node.
        * contributors `string`: List of contributors on the connected node involved in the action represented by this node log.
        * data_set `string`: The dataset associated with the connected node.
        * destination `string`: A dictionary with information about the destination for the move of the item on the node associated with this log. Details include the path, url, addon, node_url and node_title.
        * figshare_title `string`: Title of the fighshare project associated with this node log
        * file `string`: Dictionary with information about the file involved with the log.
        * filename `string`: Filename for the file associated with the log.
        * folder `string`: Folder associated with the log.
        * folder_name `string`: Name of the folder associated with the log.
        * forward_url `string`: URL that the connected node forwards to.
        * github_repo `string`: The github repository involved with the action represented by this node log.
        * github_user `string`: The github user involved with the action represented by this node log.
        * identifiers `string`: Dictionary containing the DOI for a preprint associated with the log.
        * institution `string`: Dictionary containing the ID and Name of the institution associated with the log.
        * kind `string`: Kind of the object associated with the log.
        * license `string`: License for the associated node.
        * old_page `string`: Old name of wiki page for a wiki rename log action.
        * page `string`: Current name of wiki page for rename log action.
        * page_id `string`: Primary key of the wiki page associated with the log.
        * params_node `string`: Node that is refered to in the params of the log.
        * params_project `string`: Project that is refered to in the params of the log.
        * path `string`: Path for a file associated with the log.
        * pointer `string`: A dictionary with information about the node that is linked to the associated node.
        * preprint `string`: Preprint related to the associated node.
        * preprint_provider `string`: Preprint provider for the associated node.
        * previous_institution `string`: If a primary institution for the associated node is changed, this will show the previous institution.
        * source `string`: A dictionary with information about the source of a move related event for a log. Details include the path, url, addon, node_url and node_title.
        * study `string`: Dataverse study linked to the associated node.
        * tag `string`: Tag associated with the associated node.
        * tags `string`: Tags associated with the associated node.
        * target `string`: A dictionary containing details about the target of the log. Details include the path, url, addon, node_url and node_title.
        * template_node `string`: A dictionary containing information about the node that was used as a template for the associated node.
        * title_new `string`: The new title for the associated node.
        * title_original `string`: The original title for the associated node
        * updated_fields `string`: A dictionary containing all of the fields updated on the associated node.
        * urls `string`: Links to access information about the file associated with this log.
        * version `string`: Version of the wiki page associated with this log.
        * wiki `string`: A dictionary with information about the wiki page associated with the log.
    * id **required** `string`: The identifier of the log.
    * links **required** `object`: URLs to alternative representations of the log entity.
      * self **required** `string`: A link to the detail page for the log.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the log.
      * linked_node `string`: A relationship to the node linked to this log.
      * node **required** `string`: A relationship to the node associated with this log.
      * original_node `string`: A relationship to the original node that was associated with this log, in case this log was copied from a node to a fork or registration.
      * template_node `string`: A relationship to the node used as a template for this log.
      * user `string`: A relationship to the user who performed the log action.
    * type **required** `string`: The type identifier of the log (`logs`)

### registrations_view_only_links_list
A paginated list of view only links created for this registration.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

#### Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_view_only_links_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the view only link entity.
      * anonymous `boolean`: Whether or not the view only link has anonymized contributors
      * date_created `string`: The time at which the view only link was created, as an iso8601 formatted timestamp.
      * key `string`: The view only key
      * name `string`: The name of the view only link
    * id **required** `string`: The unique identifier of the view only link.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the view only link entity.
      * creator **required** `string`: A relationship to the user who created this view only link.
      * nodes **required** `string`: A relationship to the nodes which this view only link gives read-only access to.
    * type **required** `string`: The type identifier of the view only link ('view-only-links').

### registrations_view_only_links_read
Retrieves the details of a view only link created from this registration.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.


```js
osf.registrations_view_only_links_read({
  "registration_id": "",
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.
  * link_id **required** `string`: The unique identifier of the view only link.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the view only link entity.
    * anonymous `boolean`: Whether or not the view only link has anonymized contributors
    * date_created `string`: The time at which the view only link was created, as an iso8601 formatted timestamp.
    * key `string`: The view only key
    * name `string`: The name of the view only link
  * id **required** `string`: The unique identifier of the view only link.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the view only link entity.
    * creator **required** `string`: A relationship to the user who created this view only link.
    * nodes **required** `string`: A relationship to the nodes which this view only link gives read-only access to.
  * type **required** `string`: The type identifier of the view only link ('view-only-links').

### registrations_wikis_list
A paginated list of the registration's wiki pages

#### Returns

A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering

Wiki pages can be filtered based on their `name` and `date_modified` fields.

+ `filter[name]=<Str>` -- filter wiki pages by name

+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.registrations_wikis_list({
  "registration_id": ""
}, context)
```

#### Input
* input `object`
  * registration_id **required** `string`: The unique identifier of the registration.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the wiki.
      * content_type **required** `string`: Content type of the wiki (`text/markdown`).
      * current_user_can_comment **required** `string`: Whether the current user is allowed to post comments on this wiki.
      * date_modified **required** `string`: The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
      * extra **required** `string`: A dictionary containing additional metadata about this wiki, including version information.
      * kind **required** `string`: The type of object.
      * materialized_path **required** `string`: Materialized path to the wiki object.
      * name **required** `string`: The name/title of the wiki page.
      * path **required** `string`: Path to the wiki object.
      * size **required** `string`: Size of the wiki.
    * id `string`: The identifier of the wiki.
    * links `object`: URLs to alternative representations of the wiki.
      * download `string`: The URL to download the content of the wiki.
      * info `string`: A link to the detail page for the wiki.
      * self `string`: A link to the detail page for the wiki.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki.
      * comments `string`: A relationship to the comments related to this wiki.
      * node `string`: A relationship to the associated node.
      * user `string`: A relationship to the user associated with this wiki.
      * versions `string`: A relationship to the versions related to this wiki.
    * type **required** `string`: The type identifier of the wiki (`wikis`).

### search.get
OSF search returns JSON serialized objects (including projects, components, registrations, users, files,
 and institutions) that have been found by the given Elasticsearch query. Each object is serialized with the
 appropriate serializer for its type (files are serialized as files, users are serialized as users, etc.) and
 returned collectively.

#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restract their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`: The search results; each item in this list will be serialized according to its type.
    * items `object`
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`: Extra information about the request.
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.
  * search_fields `object`: URLs and total counts for different filtered searches.
    * components `object`: The components returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`
    * files `object`: The files returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`
    * institutions `object`: The institutions returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`
    * projects `object`: The project returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`
    * registrations `object`: The registrations returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`
    * users `object`: The users returned by the search.
      * related `object`
        * href `string`
        * meta `object`
          * total `integer`

### search.components.get
This endpoint returns components that have been found by the given Elasticsearch query. All components returned are serialized as components.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restrict their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.components.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes **required** `object`: The properties of the node entity.
        * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
        * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
        * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
        * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
          * items `string`
        * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
        * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
        * description `string`: The description of the node.
        * fork `boolean`: Whether or not this node represents a fork of another node.
        * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
        * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
        * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
        * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
        * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
        * tags `array`: A list of strings that describe this node, as entered by project contributors.
          * items `string`
        * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
        * title **required** `string`: The title of the node.
        * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
      * id `string`: The unique identifier of the node entity.
      * links `object`: URLs to alternative representations of the node entity.
        * html `string`: A link to the node's page on the OSF.
        * self `string`: A link to the canonical API endpoint of this node.
      * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
        * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
        * children `string`: A link to the list of this node's children (components).
        * citation `string`: A link to the citation details of this node.
        * comments `string`: A link to the list of comments on this node.
        * contributors `string`: A link to the list of contributors on this node.
        * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
        * files `string`: A link to the list of storage providers that have been enabled on this node.
        * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
        * forks `string`: A link to the list of nodes that are forks of this node.
        * groups `string`: A link to the list of groups that have permissions to the node.
        * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
        * license `string`: A link to the license that has been applied to this node.
        * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
        * logs `string`: A link to the list of log actions pertaining to this node.
        * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
        * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
        * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
        * registrations `string`: A link to the list of registrations that have been created from this node.
        * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
        * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
        * view_only_links `string`: A link to the list of view only links that have been created for this node.
        * wikis `string`: A link to the list of wiki pages for this node.
      * type **required** `string`: The type identifier of the node entity (`nodes`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### search.files.get
This endpoint returns files that have been found by the given Elasticsearch query. All files returned are serialized as files.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restract their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.files.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes `object`: The properties of the file entity.
        * checkout `string`: SOON TO BE DEPRECATED, see relationships checkout.
        * current_user_can_comment `boolean`: Whether or not the current user is allowed to post comments.
        * current_version `integer`: Version number of the file.
        * date_created `string`: The time at which the file was created, as an iso8601 formatted timestamp.
        * date_modified `string`: The time at which the file was last modified, as an iso8601 formatted timestamp.
        * delete_allowed `boolean`: Whether or not deletion of the file is allowed.
        * extra `object`: Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
        * guid `string`: Global unique identifier (GUID) for this file (if one has been assigned).
        * kind `string`: The kind of files object it is (`file` or `folder`).
        * last_touched `string`: The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
        * materialized_path `string`: Unix-style path to the file relative to the provider root.
        * name `string`: Name of the file
        * path `string`: The unique identifier for this file entity for this project and storage provider.
        * provider `string`: The id of the file provider (e.g., `osfstorage`)
        * size `integer`: Size of the file in bytes.
        * tags `array`: A list of strings that describe this file, as entered by project contributors.
          * items `string`
      * id `string`: The identifier of the file entity.
      * links `object`: Links to alternative representations of the file entity.
        * delete `string`: The Waterbutler API route for file deletions.
        * download `string`: The Waterbutler API route for file downloads.
        * html `string`: A link to the file on the OSF.
        * info `string`: A link to the page to view a file's information or a folder's contents.
        * move `string`: The Waterbutler API route for file moves.
        * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
        * render `string`: A Waterbutler API route for rendering the file.
        * self `string`: A link to the detail page for the file.
        * upload `string`: The Waterbutler API route for file uploads.
      * relationships `object`: Links to other entities or entity collections that have a relationship to the file entity.
        * checkout `string`: A link to the user who checked out the file.
        * comments `string`: A link to the comments on the file.
        * node `string`: A link to the node the file is on.
        * versions `string`: A link to the versions of the file.
      * type `string`: The type identifier of the file entity (`files`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### search.institutions.get
This endpoint returns institutions which are utilitizing OSF and that have been found by the given Elasticsearch query. All institutions returned are serialized as institutions.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restrict their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.institutions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes `object`: The properties of the institution entity.
        * assets `object`: Assets belonging to a specific institution
          * logo `string`: Static path to the institution specific normal logo
          * logo_rounded `string`: Static path to the institution specific rounded logo
        * auth_url `string`: Url used to authenticate institution specific login.
        * description `string`: Description of the institution.
        * name `string`: Full name of the institution.
      * id `string`: The identifier of the institution entity.
      * links `object`: URLs to alternative representations of the institutions entity.
        * html `string`: A link to the detail page for the institution on the OSF.
        * self `string`: A link to the detail page for the institution.
      * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
        * nodes `string`: A relationship to the nodes affiliated with the institution.
        * registrations `string`: A relationship to the registrations affiliated with the institution.
        * users `string`: A relationship to the users affiliated with the institution.
      * type `string`: The type identifier of the institution entity (`institutions`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### search.projects.get
This endpoint returns projects that have been found by the given Elasticsearch query. All projects returned are serialized as projects.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restrict their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.projects.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes **required** `object`: The properties of the node entity.
        * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
        * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
        * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
        * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
          * items `string`
        * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
        * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
        * description `string`: The description of the node.
        * fork `boolean`: Whether or not this node represents a fork of another node.
        * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
        * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
        * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
        * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
        * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
        * tags `array`: A list of strings that describe this node, as entered by project contributors.
          * items `string`
        * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
        * title **required** `string`: The title of the node.
        * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
      * id `string`: The unique identifier of the node entity.
      * links `object`: URLs to alternative representations of the node entity.
        * html `string`: A link to the node's page on the OSF.
        * self `string`: A link to the canonical API endpoint of this node.
      * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
        * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
        * children `string`: A link to the list of this node's children (components).
        * citation `string`: A link to the citation details of this node.
        * comments `string`: A link to the list of comments on this node.
        * contributors `string`: A link to the list of contributors on this node.
        * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
        * files `string`: A link to the list of storage providers that have been enabled on this node.
        * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
        * forks `string`: A link to the list of nodes that are forks of this node.
        * groups `string`: A link to the list of groups that have permissions to the node.
        * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
        * license `string`: A link to the license that has been applied to this node.
        * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
        * logs `string`: A link to the list of log actions pertaining to this node.
        * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
        * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
        * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
        * registrations `string`: A link to the list of registrations that have been created from this node.
        * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
        * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
        * view_only_links `string`: A link to the list of view only links that have been created for this node.
        * wikis `string`: A link to the list of wiki pages for this node.
      * type **required** `string`: The type identifier of the node entity (`nodes`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### search.registrations.get
This endpoint returns registrations that have been found by the given Elasticsearch query. All registrations returned are serialized as registrations.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restrict their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.registrations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes **required** `object`: The properties of the registration entity.
        * article_doi `string`: The DOI of the associated journal article, as entered by the user, if the resource is published.
        * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
        * children `array`: A list of guids for children of nodes to be registered. All children must have parents being registered.
          * items `string`
        * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
        * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
        * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
          * items `string`
        * custom_citation `string`: User-entered custom registration citation
        * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
        * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
        * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
        * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
        * description `string`: The description of the registered node.
        * draft_registration **required** `string`: Required on POST. The ID of the draft registration from which the registration will be created.
        * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
        * fork `boolean`: Whether or not this registration represents a fork of another node.
        * lift_embargo `string`: A future datetime when the registration will become public. This field should be set when "registration_choice" is set to "embargo" in the range from 2 days to 4 years.
        * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
        * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
        * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
        * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
        * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
        * public `boolean`: Whether or not the registration is publicly visible.
        * registered_meta `string`: A dictionary with supplemental registration questions and responses.
        * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
        * registration_choice **required** `string`: Required on POST. Describes when the registration will become public, either "immediate" or "embargo". If this field is "embargo", you will need to supply a datetime in the "lift_embargo" field.
        * registration_supplement `string`: The title of the registration schema this registration conforms to.
        * tags `array`: A list of strings that describe the registered node.
          * items `string`
        * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
        * title `string`: The title of the registered node.
        * wiki_enabled `boolean`: Whether or not the registration has its wiki enabled.
        * withdrawal_justification `string`: The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
        * withdrawn `boolean`: Whether or not this registration has been withdrawn.
      * id **required** `string`: The unique identifier of the registration.
      * links **required** `object`: URLs to alternative representations of the registrations entity.
        * html `string`: A link to the registration's page on the OSF.
        * self `string`: A link to the canonical API endpoint of this registration.
      * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the registration entity.
        * affiliated_institutions `string`: A link to the list of institutions this registration is affiliated with.
        * children `string`: A link to the list of the registered node's children (components).
        * citation `string`: A link to the citation details of this registration.
        * comments `string`: A link to the list of comments on this registration.
        * contributors `string`: A link to the list of contributors on this registration.
        * files `string`: A link to the list of storage providers that have been enabled on this registration.
        * forks `string`: A link to the list of nodes that are forks of this registration.
        * identifiers `string`: A link to the list of identifiers for this registration (i.e. DOI identifiers).
        * license `string`: A relationship to the license that has been applied to the registration.
        * linked_nodes `string`: A link to the list of nodes that are linked to this registration.
        * logs `string`: A link to the list of log actions pertaining to this registration.
        * node_links `string`: A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
        * parent `string`: A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
        * registered_by `string`: A link to the user that initiated this registration.
        * registered_from `string`: A link to the node that this registration was registered from.
        * registration_schema `string`: A link to the metaschema that this registration conforms to.
        * root `string`: A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
        * view_only_links `string`: A link to the list of view only links that have been created for this registration.
        * wikis `string`: A link to the list of wiki pages for this registration.
      * type **required** `string`: The type identifier of the registration entity (`registrations`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### search.users.get
This endpoint returns users that have been found by the given Elasticsearch query. All users returned are serialized as users.
#### Permissions
All accessible public materials are returned.
#### Filtering
The following query params allows the user to restrict their search.

  - `?q=<Str>` -- Query to search projects, components, registrations, users, and files for.
  - `?page=<Int>` -- page number of results to view, default 1


```js
osf.search.users.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items `object`
      * attributes **required** `object`: The properties of the user entity.
        * active **required** `boolean`: Whether or not the user is an active user.
        * date_registered **required** `string`: The time at which the user registered their account, as an iso8601 formatted timestamp.
        * family_name `string`: The family name of the user, used for bibliographic citations.
        * full_name **required** `string`: The full name of the user, used for display on the OSF.
        * given_name `string`: The given name of the user, used for bibliographic citations.
        * locale `string`: The user's locale, e.g. 'en_US'.
        * middle_names `string`: The middle names of the user, used for bibliographic citations.
        * social `object`: The social fields associated with a user.
          * academiaProfileID `string`: The academiaProfileID for the given user.
          * baiduScholar `string`: The baiduScholar for the given user.
          * github `array`: The github usernames for the given user.
          * impactStory `string`: The impactStory for the given user.
          * linkedIn `array`: The linkedIn profiles for the given user.
          * orcid `string`: The orcid for the given user.
          * profileWebsites `array`: The profileWebsites for the given user.
          * researchGate `string`: The researchGate for the given user.
          * researcherId `string`: The researcherId for the given user.
          * scholar `string`: The google scholar for the given user.
          * ssrn `string`: The ssrn for the given user.
          * twitter `array`: The twitter handles for the given user.
        * suffix `string`: The suffix of the user, used for bibliographic citations.
        * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
      * id **required** `string`: The unique identifier of the user entity.
      * links **required** `object`: URLs to alternative representations of the user entity.
        * html `string`: A link to the user's profile page on the OSF.
        * profile_image `string`: A link to the user's profile image.
      * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
        * default_region `string`: The storage region where the user's files will be stored by default.
        * groups `string`: A link to the list of groups that a user belongs to.
        * institutions `string`: A link to the list of institutions the user is affiliated with.
        * nodes `string`: A link to the list of nodes the user is a contributor to.
      * type **required** `string`: The type identifier of the user entity (`users`).
  * links `object`: URLs to alternative representations of the search results.
    * first **required** `string`: A link to the first page of search results.
    * last **required** `string`: A link to the last page of search results.
    * next **required** `string`: A link to the next page of search results.
    * prev **required** `string`: A link to the previous page of search results.
    * self **required** `string`: A link to the detail page for the log.
  * meta `object`
    * per_page `integer`: The number of results returned on a single page.
    * total `integer`: The total number of items returned by the search.
    * version `integer`: The API version of OSF being used.

### taxonomies_list
A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).

Note: this API endpoint is under active development, and is subject to change in the future.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.

Taxonomies may be filtered by their `id`, `parents`, and `text`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.taxonomies_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the taxonomy entity.
      * child_count `integer`: The number of children this taxonomy contains.
      * parents `array`: An array of JSON objects containing keys for `text` (name) and `id` (unique identifier) of this taxonomy's parents
        * items `string`
      * text `string`: The text name of the taxonomy
    * id `string`: The identifier of the taxonomy entity.
    * links `object`: URLs to alternative representations of the taxonomy entity.
      * parents `array`: An array of links to to this taxonomy's parents. This field is deprecated as of verson 2.4.
        * items `string`
      * self `string`: A link to the detail page for the taxonomy.
    * type `string`: The type identifier of the taxonomy entity (`taxonomies`).

### taxonomies_read
Retrieves the details of a taxonomy.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.taxonomies_read({
  "taxonomy_id": ""
}, context)
```

#### Input
* input `object`
  * taxonomy_id **required** `string`: The unique identifier of the taxonomy.

#### Output
* output `object`
  * attributes `object`: The properties of the taxonomy entity.
    * child_count `integer`: The number of children this taxonomy contains.
    * parents `array`: An array of JSON objects containing keys for `text` (name) and `id` (unique identifier) of this taxonomy's parents
      * items `string`
    * text `string`: The text name of the taxonomy
  * id `string`: The identifier of the taxonomy entity.
  * links `object`: URLs to alternative representations of the taxonomy entity.
    * parents `array`: An array of links to to this taxonomy's parents. This field is deprecated as of verson 2.4.
      * items `string`
    * self `string`: A link to the detail page for the taxonomy.
  * type `string`: The type identifier of the taxonomy entity (`taxonomies`).

### users_list
A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.

The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.

#### Versioning

As of version `2.3`, merged users will not be returned from this endpoint.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.users_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the user entity.
      * active **required** `boolean`: Whether or not the user is an active user.
      * date_registered **required** `string`: The time at which the user registered their account, as an iso8601 formatted timestamp.
      * family_name `string`: The family name of the user, used for bibliographic citations.
      * full_name **required** `string`: The full name of the user, used for display on the OSF.
      * given_name `string`: The given name of the user, used for bibliographic citations.
      * locale `string`: The user's locale, e.g. 'en_US'.
      * middle_names `string`: The middle names of the user, used for bibliographic citations.
      * social `object`: The social fields associated with a user.
        * academiaProfileID `string`: The academiaProfileID for the given user.
        * baiduScholar `string`: The baiduScholar for the given user.
        * github `array`: The github usernames for the given user.
          * items `string`
        * impactStory `string`: The impactStory for the given user.
        * linkedIn `array`: The linkedIn profiles for the given user.
          * items `string`
        * orcid `string`: The orcid for the given user.
        * profileWebsites `array`: The profileWebsites for the given user.
          * items `string`
        * researchGate `string`: The researchGate for the given user.
        * researcherId `string`: The researcherId for the given user.
        * scholar `string`: The google scholar for the given user.
        * ssrn `string`: The ssrn for the given user.
        * twitter `array`: The twitter handles for the given user.
          * items `string`
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
      * default_region `string`: The storage region where the user's files will be stored by default.
      * groups `string`: A link to the list of groups that a user belongs to.
      * institutions `string`: A link to the list of institutions the user is affiliated with.
      * nodes `string`: A link to the list of nodes the user is a contributor to.
    * type **required** `string`: The type identifier of the user entity (`users`).

### users_read
Retrieves the details for a given user.

The returned information includes the user's bibliographic information and the date the user was registered.

Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.

If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.users_read({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the user entity.
    * active **required** `boolean`: Whether or not the user is an active user.
    * date_registered **required** `string`: The time at which the user registered their account, as an iso8601 formatted timestamp.
    * family_name `string`: The family name of the user, used for bibliographic citations.
    * full_name **required** `string`: The full name of the user, used for display on the OSF.
    * given_name `string`: The given name of the user, used for bibliographic citations.
    * locale `string`: The user's locale, e.g. 'en_US'.
    * middle_names `string`: The middle names of the user, used for bibliographic citations.
    * social `object`: The social fields associated with a user.
      * academiaProfileID `string`: The academiaProfileID for the given user.
      * baiduScholar `string`: The baiduScholar for the given user.
      * github `array`: The github usernames for the given user.
        * items `string`
      * impactStory `string`: The impactStory for the given user.
      * linkedIn `array`: The linkedIn profiles for the given user.
        * items `string`
      * orcid `string`: The orcid for the given user.
      * profileWebsites `array`: The profileWebsites for the given user.
        * items `string`
      * researchGate `string`: The researchGate for the given user.
      * researcherId `string`: The researcherId for the given user.
      * scholar `string`: The google scholar for the given user.
      * ssrn `string`: The ssrn for the given user.
      * twitter `array`: The twitter handles for the given user.
        * items `string`
    * suffix `string`: The suffix of the user, used for bibliographic citations.
    * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
  * id **required** `string`: The unique identifier of the user entity.
  * links **required** `object`: URLs to alternative representations of the user entity.
    * html `string`: A link to the user's profile page on the OSF.
    * profile_image `string`: A link to the user's profile image.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
    * default_region `string`: The storage region where the user's files will be stored by default.
    * groups `string`: A link to the list of groups that a user belongs to.
    * institutions `string`: A link to the list of institutions the user is affiliated with.
    * nodes `string`: A link to the list of nodes the user is a contributor to.
  * type **required** `string`: The type identifier of the user entity (`users`).

### users_partial_update
Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.

**Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.users_partial_update({
  "user_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {
      "active": true,
      "date_registered": "",
      "full_name": ""
    },
    "relationships": {},
    "links": {}
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * body **required** `object`
    * attributes **required** `object`: The properties of the user entity.
      * active **required** `boolean`: Whether or not the user is an active user.
      * date_registered **required** `string`: The time at which the user registered their account, as an iso8601 formatted timestamp.
      * family_name `string`: The family name of the user, used for bibliographic citations.
      * full_name **required** `string`: The full name of the user, used for display on the OSF.
      * given_name `string`: The given name of the user, used for bibliographic citations.
      * locale `string`: The user's locale, e.g. 'en_US'.
      * middle_names `string`: The middle names of the user, used for bibliographic citations.
      * social `object`: The social fields associated with a user.
        * academiaProfileID `string`: The academiaProfileID for the given user.
        * baiduScholar `string`: The baiduScholar for the given user.
        * github `array`: The github usernames for the given user.
          * items `string`
        * impactStory `string`: The impactStory for the given user.
        * linkedIn `array`: The linkedIn profiles for the given user.
          * items `string`
        * orcid `string`: The orcid for the given user.
        * profileWebsites `array`: The profileWebsites for the given user.
          * items `string`
        * researchGate `string`: The researchGate for the given user.
        * researcherId `string`: The researcherId for the given user.
        * scholar `string`: The google scholar for the given user.
        * ssrn `string`: The ssrn for the given user.
        * twitter `array`: The twitter handles for the given user.
          * items `string`
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
      * default_region `string`: The storage region where the user's files will be stored by default.
      * groups `string`: A link to the list of groups that a user belongs to.
      * institutions `string`: A link to the list of institutions the user is affiliated with.
      * nodes `string`: A link to the list of nodes the user is a contributor to.
    * type **required** `string`: The type identifier of the user entity (`users`).

#### Output
*Output schema unknown*

### users_addons_list
A paginated list of authorized user addons

#### Permissions

User addons are visible only to the user that authorized the addon.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.


```js
osf.users_addons_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the user addon entity.
      * user_has_auth **required** `boolean`: Whether or not the user has access to this user addon.
    * id **required** `string`: The unique identifier of the user addon entity.
    * links **required** `object`: URLs to alternative representations of the user addon entity.
      * accounts `object`: A dictionary with addon_account id as key, an array of connected nodes and link to user account as value
      * self `string`: The canonical API endpoint to this user addon.
    * type **required** `string`: The type identifier of the user addon entity (`user_addons`).

### users_addons_read
Retrieves the details of an authorized user addon

#### Permissions

User addons are visible only to the user that authorized the addon.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.


```js
osf.users_addons_read({
  "user_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * provider **required** `string`: The unique identifier of the addon provider.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the user addon entity.
    * user_has_auth **required** `boolean`: Whether or not the user has access to this user addon.
  * id **required** `string`: The unique identifier of the user addon entity.
  * links **required** `object`: URLs to alternative representations of the user addon entity.
    * accounts `object`: A dictionary with addon_account id as key, an array of connected nodes and link to user account as value
    * self `string`: The canonical API endpoint to this user addon.
  * type **required** `string`: The type identifier of the user addon entity (`user_addons`).

### Users_addon_accounts_list
A paginated list of addon accounts authorized by this user.

#### Permissions

Addon accounts are visible only to the user that authorized the account.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.Users_addon_accounts_list({
  "user_id": "",
  "provider": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * provider **required** `string`: The unique identifier of the addon provider.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the addon account entity.
      * display_name **required** `string`: The user's display name on the third-party service
      * profile_url `string`: The link to user's profile on third-party service
      * provider **required** `string`: The short name of the third-party service
    * id **required** `string`: The unique identifier of the addon account entity.
    * links **required** `object`: URLs to alternative representations of the addon account entity.
      * self `string`: The canonical api endpoint of this addon account
    * type **required** `string`: The type identifier of the addon account entity (`external_accounts`).

### Users_addon_accounts_read
Retrieves the details of an addon account

#### Permissions

Addon accounts are visible only to the user that authorized the account.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.Users_addon_accounts_read({
  "user_id": "",
  "provider": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * provider **required** `string`: The unique identifier of the addon provider.
  * account_id **required** `string`: The unique identifier of the addon account.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the addon account entity.
    * display_name **required** `string`: The user's display name on the third-party service
    * profile_url `string`: The link to user's profile on third-party service
    * provider **required** `string`: The short name of the third-party service
  * id **required** `string`: The unique identifier of the addon account entity.
  * links **required** `object`: URLs to alternative representations of the addon account entity.
    * self `string`: The canonical api endpoint of this addon account
  * type **required** `string`: The type identifier of the addon account entity (`external_accounts`).

### users_groups_list
A paginated list of groups that a user belongs to. The returned groups are sorted by their `date_modified`, with the most recently updated groups appearing first.
If the user ID in the path is the same as the logged-in user, all groups will be returned. Otherwise, only the groups that the logged-in user and the requested user both belong to will be returned.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 groups. Each resource in the array is a separate group object and contains the full representation of the group, meaning additional requests to a group's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include groups that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/groups/?filter[name]=lab.

Groups may be filtered by their `name`.
You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.users_groups_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the group entity.
      * date_created `string`: The time at which the group was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the group was last modified, as an iso8601 formatted timestamp.
      * name **required** `string`: The name of the group.
    * id `string`: The unique identifier of the group entity.
    * links `object`: URLs to alternative representations of the group entity.
      * html `string`: A link to the group's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this group.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the group entity.
      * members `string`: A link to the list of the members of this group.
    * type **required** `string`: The type identifier of the group entity (`groups`).

### external_identities_delete
Deletes  the specified external identity.
#### Permissions
External identities may only be deleted by the user they belong to.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an errors key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.external_identities_delete({
  "user_id": "",
  "identities_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * identities_id **required** `string`: The unique identifier of a user's external identity.

#### Output
*Output schema unknown*

### external_identities_detail
Retrieves the specified external identity, e.g. ORCID.
#### Permissions
External identities may only be viewed by the user they belong to.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested external identities, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.external_identities_detail({
  "user_id": "",
  "identities_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * identities_id **required** `string`: The unique identifier of a user's external identity.

#### Output
* output `object`
  * attributes `object`: The properties of the  external identity entity.
    * external_id `string`: The identifier for the user associated with that external identity.
    * status `string`: The status of the external identity e.g LINK or VERIFIED.
  * id `string`: The identifier of the external identity provider e.g. ORCID.
  * links `object`: URLs to alternative representations of the external identity.
  * type `string`: The type identifier of the external identity entity (`external-identities`).

### users_institutions_list
A paginated list of institutions that the user is affiliated with.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).


```js
osf.users_institutions_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * assets `object`: Assets belonging to a specific institution
        * logo `string`: Static path to the institution specific normal logo
        * logo_rounded `string`: Static path to the institution specific rounded logo
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * html `string`: A link to the detail page for the institution on the OSF.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### users_nodes_list
A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.

If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.

User registrations are not available at this endpoint.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.users_nodes_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### users_preprints_list
A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.users_preprints_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the preprint entity.
      * current_user_permissions `array`: The logged-in user's permissions to the preprint
        * items `string`
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_last_transitioned `string`: The time at which the preprint's reviews state was last changed. For example, the time at which a preprint's reviews state was moved from "pending" to "accepted".
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The date when the preprint was withdrawn
      * description `string`: The description of the preprint
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * is_published `boolean`: Whether or not a preprint is published
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * original_publication_date `string`: User-entered, the date when the preprint was originally published
      * preprint_doi_created `string`: The date when the doi was minted for the preprint
      * public `boolean`: Whether a preprint has been marked as public.  This is not a user-facing setting.  Legacy preprints or spammy preprints may be marked as private
      * reviews_state `string`: The preprint's review status, e.g. pending, accepted, rejected, etc.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
      * tags `array`: A list of the preprint's tags.
        * items `string`
      * title **required** `string`: The title of the preprint
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * contributors `string`: A relationship to the preprint authors
      * files `string`: A relationship to the storage providers to the preprint - in this case, preprints are restricted to having just the OsfStorage provider.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node `string`: A relationship to the project containing supplemental materials for the preprints.
      * primary_file `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### users_registrations_list
A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.

If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.

User nodes are not available at this endpoint.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

You can learn more about advanced filtering features [here](#tag/Filtering).


```js
osf.users_registrations_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
*Output schema unknown*

### users_settings_read
Retrieves a user's settings.

#### Permissions

A user's settings are only visible to that user.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.users_settings_read({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
*Output schema unknown*

### user_settings_partial_update
Updates a user's settings by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
User settings can be updated with either a **PUT** or **PATCH** request.

#### Permissions
Attempting to update any user settings but your own will result in a **403 Forbidden** response.

#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.user_settings_partial_update({
  "user_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {}
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.
  * body **required** `object`
    * attributes **required** `object`: The properties of the user settings
      * subscribe_osf_general_email `boolean`: Whether you are subscribed to general OSF notifications.
      * subscribe_osf_help_email `boolean`: Whether you are subscribed to tips on how to make the most of the OSF.
      * two_factor_enabled `boolean`: Whether or not two-factor authentication has been enabled.
      * two_factor_verification `integer`: Write only, enter 6 six-digit verification code.  two_factor_enabled must be set to true.
    * id **required** `string`: The unique identifier of the logged in user
    * type **required** `string`: The type identifier of the draft registration entity (`user-settings`).

#### Output
*Output schema unknown*

### external_identities_list
Retrieves a list of a user's external identities.
#### Permissions
External identities may only be viewed by the user they belong to.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested external identities, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.external_identities_list({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The unique identifier of the user.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the  external identity entity.
      * external_id `string`: The identifier for the user associated with that external identity.
      * status `string`: The status of the external identity e.g LINK or VERIFIED.
    * id `string`: The identifier of the external identity provider e.g. ORCID.
    * links `object`: URLs to alternative representations of the external identity.
    * type `string`: The type identifier of the external identity entity (`external-identities`).

### view_only_links_read
Retrieves details about a specific view only link.

#### Permissions

Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.

#### Returns

Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.view_only_links_read({
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * link_id **required** `string`: The unique identifier of the view only link.

#### Output
* output `object`
  * attributes **required** `object`: The properties of the view only link entity.
    * anonymous `boolean`: Whether or not the view only link has anonymized contributors
    * date_created `string`: The time at which the view only link was created, as an iso8601 formatted timestamp.
    * key `string`: The view only key
    * name `string`: The name of the view only link
  * id **required** `string`: The unique identifier of the view only link.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the view only link entity.
    * creator **required** `string`: A relationship to the user who created this view only link.
    * nodes **required** `string`: A relationship to the nodes which this view only link gives read-only access to.
  * type **required** `string`: The type identifier of the view only link ('view-only-links').

### view_only_links_node_list
The list of nodes which this view only link gives read-only access to.

#### Permissions

Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.view_only_links_node_list({
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * link_id **required** `string`: The unique identifier of the view only link.

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the node entity.
      * category **required** `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the node, as selected by project contributors.
      * collection `boolean`: Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the node was last modified, as an iso8601 formatted timestamp.
      * description `string`: The description of the node.
      * fork `boolean`: Whether or not this node represents a fork of another node.
      * forked_date `string`: If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
      * preprint `boolean`: Whether or not the node contains supplemental material for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
      * wiki_enabled `boolean`: Whether or not the node has its wiki enabled.
    * id `string`: The unique identifier of the node entity.
    * links `object`: URLs to alternative representations of the node entity.
      * html `string`: A link to the node's page on the OSF.
      * self `string`: A link to the canonical API endpoint of this node.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the node entity.
      * affiliated_institutions `string`: A link to the list of institutions this node is affiliated with.
      * children `string`: A link to the list of this node's children (components).
      * citation `string`: A link to the citation details of this node.
      * comments `string`: A link to the list of comments on this node.
      * contributors `string`: A link to the list of contributors on this node.
      * draft_registrations `string`: A link to the list of registrations that have been initiated from this node and are still in a draft state.
      * files `string`: A link to the list of storage providers that have been enabled on this node.
      * forked_from `string`: A link to the node which this node was forked from, if this node is a fork.
      * forks `string`: A link to the list of nodes that are forks of this node.
      * groups `string`: A link to the list of groups that have permissions to the node.
      * identifiers `string`: A link to the list of identifiers for this node (i.e. DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field has been deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints for which this node contains supplemental materials.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### wiki_delete

Permanently deletes a wiki page. This action cannot be undone.

Note: the "Home" wiki page cannot be deleted.

Only contributors with write permissions may delete a wiki page. Attempting to delete a wiki for which you do not have write permission will result in a **403 Forbidden** response.

If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.wiki_delete({
  "wiki_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.

#### Output
*Output schema unknown*

### wiki_read
Retrieves the details of a given wiki page.

The wiki is a collection of markdown text pages that can be used to further describe or document a project.

Returns a JSON object with a `data` key containing the representation of the requested wiki page, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.wiki_read({
  "wiki_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.

#### Output
* output `object`
  * attributes `object`: The properties of the wiki.
    * content_type **required** `string`: Content type of the wiki (`text/markdown`).
    * current_user_can_comment **required** `string`: Whether the current user is allowed to post comments on this wiki.
    * date_modified **required** `string`: The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
    * extra **required** `string`: A dictionary containing additional metadata about this wiki, including version information.
    * kind **required** `string`: The type of object.
    * materialized_path **required** `string`: Materialized path to the wiki object.
    * name **required** `string`: The name/title of the wiki page.
    * path **required** `string`: Path to the wiki object.
    * size **required** `string`: Size of the wiki.
  * id `string`: The identifier of the wiki.
  * links `object`: URLs to alternative representations of the wiki.
    * download `string`: The URL to download the content of the wiki.
    * info `string`: A link to the detail page for the wiki.
    * self `string`: A link to the detail page for the wiki.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki.
    * comments `string`: A relationship to the comments related to this wiki.
    * node `string`: A relationship to the associated node.
    * user `string`: A relationship to the user associated with this wiki.
    * versions `string`: A relationship to the versions related to this wiki.
  * type **required** `string`: The type identifier of the wiki (`wikis`).

### wiki_partial_update
Renames the given wiki page.

Note: the "Home" wiki page may not be renamed.

Only write contributors may rename wiki pages. Attempting to rename a wiki page for which you do not have write access will result in a **403 Forbidden** response.

Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.wiki_partial_update({
  "wiki_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.
  * body **required** `object`

#### Output
*Output schema unknown*

### wiki_content
Retrieves the plaintext content of a wiki in markdown format.

Returns `text/markdown` of the wiki content itself.

If the request is unsuccessful, plaintext with the error message will be displayed.


```js
osf.wiki_content({
  "wiki_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.

#### Output
*Output schema unknown*

### wiki_versions_list
Lists all versions of a wiki.

The wiki is a collection of markdown text pages that can be used to describe the project or dataset contained in the attached node.  Every time the content of a wiki page is updated, a new version is created.

Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.wiki_versions_list({
  "wiki_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the wiki version.
      * content_type **required** `string`: Content type of the wiki version (`text/markdown`).
      * date_created **required** `string`: The date and time at which the wiki version was saved, as an iso8601 formatted timestamp.
      * size **required** `string`: Size of the wiki version.
    * id `string`: The wiki version.
    * links `object`: URLs to alternative representations of the wiki version.
      * download `string`: The URL to download the content of the wiki version.
      * self `string`: A link to the detail page for the wiki version.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki version.
      * user **required** `string`: A relationship to the user associated with this wiki version.
      * wiki_page **required** `string`: A relationship to the associated wiki.
    * type **required** `string`: The type identifier of the wiki version (`wiki-versions`).

### wiki_versions_create
Updates the content of the given wiki page by creating a new wiki version.

`content` is the only required field when updating a wiki page.

For information on creating a wiki for a node, see [Create a wiki](#operation/nodes_wikis_list_create).

Returns a JSON object with a `data` key containing the representation of the created wiki version, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.


```js
osf.wiki_versions_create({
  "body": {
    "type": "",
    "relationships": {
      "wiki_page": "",
      "user": ""
    }
  },
  "wiki_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * attributes `object`: The properties of the wiki version.
      * content_type **required** `string`: Content type of the wiki version (`text/markdown`).
      * date_created **required** `string`: The date and time at which the wiki version was saved, as an iso8601 formatted timestamp.
      * size **required** `string`: Size of the wiki version.
    * id `string`: The wiki version.
    * links `object`: URLs to alternative representations of the wiki version.
      * download `string`: The URL to download the content of the wiki version.
      * self `string`: A link to the detail page for the wiki version.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki version.
      * user **required** `string`: A relationship to the user associated with this wiki version.
      * wiki_page **required** `string`: A relationship to the associated wiki.
    * type **required** `string`: The type identifier of the wiki version (`wiki-versions`).
  * wiki_id **required** `string`: The unique identifier of the wiki.

#### Output
*Output schema unknown*

### wiki_version_detail
A wiki is a collection of markdown text pages that can be used to describe the project or dataset contained in the attached node.  Every time the content of a wiki is updated, a new version is created.

Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.wiki_version_detail({
  "wiki_id": "",
  "version_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.
  * version_id **required** `string`: The unique identifier of the wiki version

#### Output
* output `object`
  * attributes `object`: The properties of the wiki version.
    * content_type **required** `string`: Content type of the wiki version (`text/markdown`).
    * date_created **required** `string`: The date and time at which the wiki version was saved, as an iso8601 formatted timestamp.
    * size **required** `string`: Size of the wiki version.
  * id `string`: The wiki version.
  * links `object`: URLs to alternative representations of the wiki version.
    * download `string`: The URL to download the content of the wiki version.
    * self `string`: A link to the detail page for the wiki version.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the wiki version.
    * user **required** `string`: A relationship to the user associated with this wiki version.
    * wiki_page **required** `string`: A relationship to the associated wiki.
  * type **required** `string`: The type identifier of the wiki version (`wiki-versions`).

### wiki_version_content
Retrieves the plaintext content of a specific wiki version in markdown format.

Returns `text/markdown` of the wiki content itself.

If the request is unsuccessful, plaintext with the error message will be displayed.


```js
osf.wiki_version_content({
  "wiki_id": "",
  "version_id": ""
}, context)
```

#### Input
* input `object`
  * wiki_id **required** `string`: The unique identifier of the wiki.
  * version_id **required** `string`: The unique identifier of the wiki version.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
