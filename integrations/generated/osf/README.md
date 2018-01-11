# @datafire/osf

Client library for OSF APIv2 Documentation

## Installation and Usage
```bash
npm install --save @datafire/osf
```
```js
let osf = require('@datafire/osf').create();

osf.base_read({}).then(data => {
  console.log(data);
})
```

## Description

Welcome to the documentation for the Open Science Framework API. With this API you can access users, projects, components, registrations, preprints, logs, and files on the Open Science Framework.

## Actions

### base_read
Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).

#### Returns
A JSON object with `meta` and `links` keys.

The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.

The `links` key contains links to the following entity collections: [addons](), [collections](), [institutions](#Institutions_institutions_list), [licenses](#Licenses_license_list), [metaschemas](), [nodes](#Nodes_nodes_list), [registrations](), [users](#Users_users_list)


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
* `external_ids_added`: An external identifier is added to a Node (e.g. DOI, ARK)
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
* `node_authorized`: An addon is authorized for a project
* `node_deauthorized`: An addon is deauthorized for a project
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
* `retraction_initiated`: A Withdrawal of a Registration is proposed
* `retraction_approved`: A Withdrawal of a Registration is approved
* `retraction_cancelled`: A Withdrawal of a Registration is cancelled
* `registration_initiated`: A Registration of a Node is proposed
* `registration_approved`: A proposed Registration is approved
* `registration_cancelled`: A proposed Registration is cancelled


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

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

### attribute_validation
Endpoints that allow creation or modification of entities generally limit updates to certain attributes of the entity.

If you attempt to set an attribute that does not permit updates (such as a `date_created` timestamp), the API will silently ignore that attribute.

This will not affect the response from the API: if the request would have succeeded without the updated attribute, it will still report as successful. Likewise, if the request would have failed without the attribute update, the API will still report a failure.

Typoed or non-existent attributes will behave the same as non-updatable attributes and will be silently ignored. If a request is not working the way you expect, make sure to double check your spelling.


```js
osf.attribute_validation(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### authentication
#### Token Auth
To use a Personal Access Token, make an `Authorization` header with the contents `Bearer <token>` as shown in the example below, replacing `<token>` with your token.

    curl -X "GET" "https://api.osf.io/v2/users/me/" \
    -H "Authorization: Bearer <token>"

To make a Personal Access Token, visit your OSF settings page (either on the [OSF](https://osf.io/settings/tokens/) or our [testing server](https://test.osf.io/settings/tokens/)) to create one. You can limit the scope of the token, but remember that it has access to all of the information that you do within the limits of the scope, so be careful with your tokens.
#### OAuth
The OSF allows third-party web applications to connect to the OSF on behalf of other users via the OAuth 2.0 web application flow.
You can add a developer application from the OSF settings page (either on the [OSF](https://osf.io/settings/tokens/) or our [testing server](https://test.osf.io/settings/tokens/)).

We will be adding narrative documentation for handling OAuth flows, but for now, if you're familiar with OAuth, you can check out the [CAS overlay documentation](https://github.com/CenterForOpenScience/cas-overlay#web-server-authorization) for options.
We've also created a [test application](https://github.com/abought/osf_oauth2_demo) for verifying that our OAuth workflow works correctly. If you set up an OAuth application on https://test.osf.io/, you should be able to add the client secret and client id to the settings file and it should work properly. If it does not, please let us know.


```js
osf.authentication(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### citations_styles_list

A paginated list of all standard citation styles available for rendering citations.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

### create_update_requests
#### Formatting POST/PUT/PATCH Request Bodies
The OSF API follows the JSON-API spec for [create and update requests](http://jsonapi.org/format/1.0/#crud). This means all request bodies must be wrapped with some metadata.

Each request body must be an object with a `data` key containing at least a `type` member. The value of the `type` member must agree with the `type` of the entities represented by the endpoint. If not, a **409 Conflict** will be returned.

The request should also contain an `attributes` member with an object containing the key-value pairs to be created/updated.

**PUT/PATCH** requests must also have an `id` key that matches the ID part of the endpoint you are making a request to. If the `id` key does not match the ID part of the URL path, a **409 Conflict** error will be returned.

#### Creating a Node via POST Example

    POST /v2/nodes/
    {
      "data": {
        "type": "nodes",
        "attributes": {
          "title" : "A Phylogenetic Tree of Famous Internet Cats",
          "category" : "project",
          "description" : "How closely related are Grumpy Cat and C.H. Cheezburger? Is memefulness inheritable?"
        }
      }
    }


#### Updating a User via PUT Example

    PUT /v2/users/me/
    {
      "data": {
        "id": "3rqxc",
        "type": "users",
        "attributes": {
          "full_name" : "Henrietta Swan Leavitt",
          "given_name" : "Henrietta",
          "middle_names" : "Swan",
          "family_name" : "Leavitt"
        }
      }
    }

**Note:** If you PUT/PATCH to the `/users/me/` endpoint, you must still provide your full user id in the `id` field of the request.  We do not support using the `me` alias in request bodies at this time.

#### PUT vs. PATCH
For most endpoints that support updates via **PUT** requests, we also allow **PATCH** updates.

**PUT** requests require all mandatory attributes to be set, even if their value is unchanged. **PATCH** requests may omit mandatory attributes, whose value will be unchanged.


```js
osf.create_update_requests(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### embedding
All related resources that appear in the `relationships` attribute are embeddable, meaning it is possible to fetch a node and its contributors in a single request by adding a query parameter like:

&nbsp;&nbsp;&nbsp;&nbsp;`/nodes/?embed=contributors`

The embedded results will have the following structure:

&nbsp;&nbsp;&nbsp;&nbsp;`{relationship_name}: {full_embedded_response}`

Where `full_embedded_response` means the full API response resulting from a **GET** request to the `href` link of the corresponding related resource.

This means if there are no errors in processing the embedded request the response will have the format:

&nbsp;&nbsp;&nbsp;&nbsp;`data: {response}`

And if there are errors processing the embedded request the response will have the format:

&nbsp;&nbsp;&nbsp;&nbsp;`errors: {errors}`

Multiple embeds can be achieved with multiple query parameters separated by "&".

&nbsp;&nbsp;&nbsp;&nbsp;`/nodes/?embed=contributors&embed=comments`

Some endpoints are automatically embedded, such as the [node contributors](#Nodes_nodes_contributors_list) endpoint, which automatically embeds user information.


```js
osf.embedding(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### entities
An entity is a single resource that has been retrieved from the API, usually from an endpoint with the entity's ID as the final path part. A successful response from an entity request will be a JSON object with a top level `data` key pointing to a sub-object with the following members:
#### ID
The identifier for the entity.  This **MUST** be included with all PUT and PATCH requests.
#### Type
The type identifier of this entity.  This **MUST** be included with all create and update requests.
#### Attributes
The properties of the entity.  Names, descriptions, etc.
#### Relationships
Relationships are URLs to other entities or entity collections that have a relationship to the entity.

For example, the node entity provides a `contributors` relationship that points to the endpoint to retrieve all contributors to that node. It is recommended to use these links rather than to filter general entity collection endpoints by IDs. They'll be faster, easier, and less error-prone.

Generally a relationship will have the following structure:


    {relationship_name}: {
      "links": {
        "related": {
          "href": {url_to_related_entity_or_entity_collection},
          "meta": {}
        }
      }
    }


If there are no related entities, `href` will be null.
#### Embeds
Please see the [embedding](#Introduction_embedding) documentation.
#### Links
Links are urls to alternative representations of the entity or actions that may be performed on the entity.

Most entities will provide a `self` link that is the canonical endpoint for the entity where update and delete requests should be sent. Most entities will also provide an `html` link that directs to the entity's page on the Open Science Framework.


```js
osf.entities(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### entity_collections
Entity collection endpoints return a list of entities and an additional data structure with pagination links, such as `next`, `prev`, `first`, and `last`.

The OSF API limits all entity collection responses to a maximum of 10 entities.

The response object has two keys:
#### Data
The `data` key is an array of entities that match the query.

Each entity in the array is the same representation that is returned from that entity's `self` link, meaning that refetching the entity is unnecessary.
#### Links
The `links` key contains pagination information, including links to the previous, next, first, and last pages of results.

The `meta` key contains the total number of entities available, as well as the current number of results displayed per page.

If there are only enough results to fill one page, the `first`, `last`, `prev`, and `next` values will be null.


```js
osf.entity_collections(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### enum_fields
Some entities in the OSF API have fields that only take a restricted set of values. Those fields are listed here for reference.

Fuller descriptions are available on the relevant entity pages.
#### OSF Node Categories

    value                 description
    ==========================================
    project               Project
    hypothesis            Hypothesis
    methods and measures  Methods and Measures
    procedure             Procedure
    instrumentation       Instrumentation
    data                  Data
    analysis              Analysis
    communication         Communication
    other                 Other


#### OSF Node Permissions

    value        description
    =============================
    read         Read-only access
    write        Write access
    admin        Admin access


#### OSF Storage Providers

    value        description
    ==========================
    box          Box.com
    dataverse    Dataverse
    dropbox      Dropbox
    figshare     figshare
    github       GitHub
    googledrive  Google Drive
    osfstorage   OSF Storage
    s3           Amazon S3


```js
osf.enum_fields(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### error_codes
The OSF API uses conventional HTTP response codes to indicate the success or failure of an API request.

In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, invalid authentication credentials were provided, etc.), and codes in the `5xx` range indicate an error with our API servers (these are rare, and if they occur consistently, should be [reported](mailto:support@osf.io)).

`200` **OK**

The request was successful and everything worked as expected.

`201` **Created**

The request was successful and a new resource was created. The newly created resource can be referenced by the ID returned in the response.

`204` **No Content**

The request was sucessful but does not need to return an entity-body.

`400` **Bad Request**

The request was unacceptable, often due to a missing required parameter or malformed data.

`401` **Unauthorized**

The request requires user authentication, which was not provided.

`403` **Forbidden**

The request was understood but not fulfilled, most likely due to invalid permissions.

`404` **Not Found**

The requested resource does not exist.

`405` **Method Not Allowed**

The method specified in the request is not allowed for the resource.

`409` **Conflict**

The request could not be completed due to a conflict with the current state of the resource or within the request data.

`410` **Gone**

The requested resource is no longer available, most likely because it was deleted.

`429` **Too Many Requests**

The user has sent too many requests in a given amount of time.

Wait at least the amount of time specified in the `Retry-After` header of the response before sending another request.

[Authenticated](#Introduction_authentication) requests have a rate limit of 10,000/day.

Unauthenticated requests have a rate limit of 100/hour.

`5xx` **Server Errors**

The API server encountered an unexpected error.


```js
osf.error_codes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### errors
When a request fails for any reason, the OSF API will return an appropriate [HTTP response code](#Introduction_error_codes) and include a descriptive error in the body of the response.

The response body will be a JSON object with a key, `errors`, pointing to an array of error objects.

In general, these error objects will consist of a `detail` key with a detailed error message and a `source` object that may contain a field `pointer` that is a [JSON Pointer](https://tools.ietf.org/html/rfc6901) to the error-causing attribute.

The `error` objects may include additional information in accordance with the [JSON-API error spec](http://jsonapi.org/format/1.0/#error-objects).

#### Example
An error response from an incorrect create node request:

    {
      "errors": [
        {
          "source": {
            "pointer": "/data/attributes/category"
          },
          "detail": "This field is required."
        },
        {
          "source": {
            "pointer": "/data/type"
          },
          "detail": "This field may not be null."
        },
        {
          "source": {
            "pointer": "/data/attributes/title"
          },
          "detail": "This field is required."
        }
      ]
    }


```js
osf.errors(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### files_detail
Retrieves the details of a file (or folder)
####Returns
Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
###Waterbutler API actions

Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).

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

#### Delete (file, folders)

To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.


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
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * html `string`: A link to the html version page.
      * self `string`: A link to the detail page for a file version.
    * type `string`: The type identifier of the file versions entity (`file_versions`).

### files_version_detail
Retrieves the details of a file version
####Returns

Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * html `string`: A link to the html version page.
      * self `string`: A link to the detail page for a file version.
    * type `string`: The type identifier of the file versions entity (`file_versions`).

### filtering
Entity collections can be filtered by adding a query parameter in the form:

&nbsp;&nbsp;&nbsp;&nbsp;`filter[<fieldname>]=<matching information>`

String queries are filtered using substring matching. For example, if you were trying to find [Lise Meitner](http://en.wikipedia.org/wiki/Lise_Meitner):

&nbsp;&nbsp;&nbsp;&nbsp;`/users/?filter[full_name]=meitn`

You can filter on multiple fields, or the same field in different ways, by &-ing the query parameters together.

&nbsp;&nbsp;&nbsp;&nbsp;`/users/?filter[full_name]=lise&filter[family_name]=mei`

Boolean fields should be queried with `true` or `false`.

&nbsp;&nbsp;&nbsp;&nbsp;`/nodes/?filter[registered]=true`

You can request multiple resources by filtering on id and placing comma-separated values in your query parameter.

&nbsp;&nbsp;&nbsp;&nbsp;`/nodes/?filter[id]=aegu6,me23a`

You can filter with case-sensitivity or case-insensitivity by using `contains` and `icontains`, respectively.

&nbsp;&nbsp;&nbsp;&nbsp;`/nodes/?filter[tags][icontains]=help`


```js
osf.filtering(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### general
The OSF API generally conforms to the [JSON-API v1.0 spec](http://jsonapi.org/format/1.0/). Where exceptions exist, they will be noted. Each endpoint will have its own documentation, but there are some general principles.

Note: Assume undocumented routes/features/fields are unstable.

#### Canonical URLs
All canonical URLs have trailing slashes.  A request to an endpoint without a trailing slash will result in a **301 Redirect** to the canonical URL.  There are some exceptions when working with the Files API, so if a URL in a response does not have a slash, do not append one.
#### Plurals
Endpoints are always pluralized.  `/users/`, not `/user/`, `/nodes/`, not `/node/`.

The only exception are the node and preprint citation endpoints, which are `/citation/`, not `/citations/`.
#### Common Actions
Every endpoint in the OSF API responds to `GET`, `HEAD`, and `OPTION` requests.

You must have adequate permissions to interact with any endpoint. Unauthorized use will result in **401 Unauthorized** or **403 Forbidden** responses.

Use `HEAD` to probe an endpoint and make sure your headers are well-formed.

A `GET` request will return a representation of the entity or entity collection referenced by the endpoint.

An `OPTIONS` request will return a JSON object that describes the endpoint, including the name, a description, the acceptable request formats, the allowed response formats, and any actions available via the endpoint.


```js
osf.general(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### institutions_list

A paginated list of all verified institutions.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.

Institutions may be filtered by their `id`, `name`, and `auth_url`


```js
osf.institutions_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the institution entity.
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * logo_path `string`: Static path to the institution specific logo.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### institutions_detail
Retrieves the details of an institution
####Returns
Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * logo_path `string`: Static path to the institution specific logo.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.

Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`


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
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
      * institutions `string`: A link to the list of institutions the user is affiliated with.
      * nodes `string`: A link to the list of nodes the user is a contributor to.
    * type **required** `string`: The type identifier of the user entity (`users`).

### introduction
Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).

The OSF serves as a repository and archive for study designs, materials, data, manuscripts, or anything else associated with your research during the research process. Every project and file on the OSF has a permanent unique identifier, and every registration (a permanent, time-stamped version of your projects and files) can be assigned a DOI/ARK. You can use the OSF to measure your impact by monitoring the traffic to projects and files you make public. With the OSF you have full control of what parts of your research are public and what remains private.


```js
osf.introduction(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### licenses_read
Retrieves the details of a license.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).

Licenses may be filtered by their `id`, and `name`.


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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * identifiers `string`: Dictionary containing the DOI and ARK ID for a preprint associated with the log.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

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

### metaschemas_read
Retrieves the details of a given metaschema.

Metaschemas describe the supplemental questions that accompany a registration.

#### Returns
Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

Registrations cannot be accessed through this endpoint (use the [registrations](#Registrations_registrations_list) endpoints instead).
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

&nbsp;&nbsp;&nbsp;&nbsp`title`

&nbsp;&nbsp;&nbsp;&nbsp`category`

Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
    * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
    * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
    * tags `array`: A list of strings that describe this node, as entered by project contributors.
      * items `string`
    * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
    * title **required** `string`: The title of the node.
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
    * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
    * license `string`: A link to the license that has been applied to this node.
    * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
    * logs `string`: A link to the list of log actions pertaining to this node.
    * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
    * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
    * preprints `string`: A link to the list of preprints that this node relates to.
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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

&nbsp;&nbsp;&nbsp;&nbsp`title`

&nbsp;&nbsp;&nbsp;&nbsp`category`

Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

#### Output
*Output schema unknown*

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
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is the 'Open Science Framework'. For preprints, the publisher is the same as the preprint provider.
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
####Permissions
Comments on public nodes are given read-only access to everyone.

If the node comment-level is `private`, only contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments on private nodes are only visible to contributors and administrators on the parent node.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93

Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.


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
####Required
A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.
In addition, the `content` attribute describing the relationship between the node and the comment is required.
####Returns
Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * registration_supplement **required** `string`: The ID of an active registration schema that this registration will conform to.
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
Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view create registrations.
#### Required
Required fields for creating a draft registration include:

&nbsp;&nbsp;&nbsp;&nbsp`registration_supplement`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.nodes_draft_registrations_create({
  "node_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {
      "datetime_initiated": "",
      "datetime_updated": "",
      "registration_supplement": ""
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
      * registration_supplement **required** `string`: The ID of an active registration schema that this registration will conform to.
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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * registration_supplement **required** `string`: The ID of an active registration schema that this registration will conform to.
  * id **required** `string`: The unique identifier of the draft registration entity.
  * links **required** `object`: URLs to alternative representations of the draft registration entity.
    * html **required** `string`: A link to the draft registration's page on the OSF.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the draft registration entity.
    * branched_from **required** `string`: A link to the node that this draft registration was created from.
    * initiator **required** `string`: A link to the user who initiated the draft registration.
    * registration_schema **required** `string`: A link to the detailed registration schema that this draft conforms to.
  * type **required** `string`: The type identifier of the draft registration entity (`draft_registrations`).

### nodes_draft_registrations_partial_update
Updates a draft registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Draft registrations contain the supplemental registration questions that accompany a registration. Answer the questions in the draft registration supplement by sending update requests until you are ready to submit the draft.

The registration supplement of a draft registration cannot be updated after the draft has been created.

When updating a draft registration, `registration_metadata` is required. It must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the [registration schema](TODO: link me pls).

If a question is multiple-choice, the question response must exactly match one of the possible choices.
#### Permissions
Only project administrators may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.nodes_draft_registrations_partial_update({
  "node_id": "",
  "draft_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {
      "datetime_initiated": "",
      "datetime_updated": "",
      "registration_supplement": ""
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
  * draft_id **required** `string`: The unique identifier of the draft registration.
  * body **required** `object`
    * attributes **required** `object`: The properties of the draft registration entity.
      * datetime_initiated **required** `string`: The time at which the draft registration was first initiated, as an iso8601 formatted timestamp.
      * datetime_updated **required** `string`: The time at which the draft registration was last updated, as an iso8601 formatted timestamp.
      * registration_metadata `string`: A dictionary of question IDs and responses from the registration schema.
      * registration_supplement **required** `string`: The ID of an active registration schema that this registration will conform to.
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

### nodes_providers_list
List of all storage providers that are configured for this node

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

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
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

####Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file

Node files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.

###Waterbutler API actions

Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).

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

#### Delete (file, folders)

To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.


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
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

#### Output
*Output schema unknown*

### nodes_identifiers_list
List all identifiers associated with a given node.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=ark

Identifiers may be filtered by their `category` e.g `ark` or `doi`.


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
      * category `string` (values: ark, doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### nodes_institutions_list
List of all institutions affiliated with this node.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * logo_path `string`: Static path to the institution specific logo.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### nodes_linked_nodes_list
List of all nodes linked to the given node.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering
You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.

Nodes may be filtered by their `action`, and `date`.


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
        * identifiers `string`: Dictionary containing the DOI and ARK ID for a preprint associated with the log.
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
A paginated list of preprints related to a given node. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

**Note: This API endpoint is under active development, and is subject to change in the future.**
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### nodes_registrations_list
List of all registrations of the given node.
####Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.


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
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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

### nodes_view_only_links_list
List of view only links on a node.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

####Permissions

View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.

####Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.


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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
####Permissions

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
####Returns
Paginated list of the node's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

Note that if an anonymous view_only key is being used, the user relationship will not be exposed.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
#### Filtering
Wiki pages can be filtered based on their `name` and `date_modified` fields.
+ `filter[name]=<Str>` -- filter wiki pages by name
+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.


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
      * comments **required** `string`: A relationship to the comments related to this wiki.
      * node **required** `string`: A relationship to the associated node.
      * user **required** `string`: A relationship to the user associated with this wiki.
    * type **required** `string`: The type identifier of the wiki (`wikis`).

### pagination
All entity collection endpoints respond to the `page` query parameter as described in the [JSON-API spec](http://jsonapi.org/format/#fetching-pagination).

However, links to the first, last, previous, and next pages of results are provided in the `links` key of the response, and you are encouraged to use those rather than adding query parameters by hand.

If there are only enough results to fill one page, the `first`, `last`, `prev`, and `next` links will be null.
#### Versioning
As of version `2.3`, pagination links conform to the JSON API specification. Meta information was pulled out of the `links` object and placed in a top-level `meta` object.

The `meta` key contains the total number of entities available, as well as the current number of results displayed per page.


```js
osf.pagination(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### preprint_provider_list

A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.

Preprint Providers may be filtered by their `id`, `name`,  and `description`


```js
osf.preprint_provider_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * attributes `object`: The properties of the preprint provider entity.
    * advisory_board `string`: The HTML representation of the preprint provider's advisory board.
    * banner_path `string`: A static path to the preprint provider's banner image. This field is deprecated as of verson 2.4.
    * description `string`: The description of the preprint provider.
    * domain `string`: The preprint provider's domain, if the provider is using a domain to for their preprint service.
    * domain_redirect_enabled `boolean`: Whether or not redirects are enabled for the provider's domain.
    * email_contact `string`: The preprint provider's contact email address. This field is deprecated as of verson 2.4.
    * email_support `string`: The preprint providers's support email address.
    * example `string`: The GUID for an example preprint from this preprint provider.
    * logo_path `string`: A static path to the preprint provider's logo image. This field is deprecated as of verson 2.4.
    * name `string`: The name of the preprint provider.
    * social_facebook `string`: The preprint provider's Facebook account ID. This field is deprecated as of verson 2.4.
    * social_instagram `string`: The preprint provider's Instagram account ID. This field is deprecated as of verson 2.4.
    * subjects_acceptable `string`: A nested array structure defining allowed subjects for this preprint provider, in the BePress taxonomy.
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
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

#### Acceptable Subjects Structure
Each preprint provider specifies acceptable subjects.
`subjects_acceptable` is an array found in `attributes`.
Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.


    "subjects_acceptable": [
        [
            [
                # Parent Subject:
                # Architecture
                "584240d954be81056ceca9e5",

                # Child Subject:
                # Architectural Engineering
                "584240da54be81056cecac87"
            ],
            # Include all Architectural Engineering's children:
            true
        ],
        [
            [
                # Parent Subject:
                # Engineering
                "584240da54be81056cecaca9",

                # Child Subject:
                # Aerospace Engineering
                "584240db54be81056cecacd6",

                # Grandchild Subject:
                # Aerodynamics and Fluid Mechanics
                "584240da54be81056cecaa74"
            ],
            # All nestings 3 deep must be false
            false
        ]
    ]

The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.


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
    * banner_path `string`: A static path to the preprint provider's banner image. This field is deprecated as of verson 2.4.
    * description `string`: The description of the preprint provider.
    * domain `string`: The preprint provider's domain, if the provider is using a domain to for their preprint service.
    * domain_redirect_enabled `boolean`: Whether or not redirects are enabled for the provider's domain.
    * email_contact `string`: The preprint provider's contact email address. This field is deprecated as of verson 2.4.
    * email_support `string`: The preprint providers's support email address.
    * example `string`: The GUID for an example preprint from this preprint provider.
    * logo_path `string`: A static path to the preprint provider's logo image. This field is deprecated as of verson 2.4.
    * name `string`: The name of the preprint provider.
    * social_facebook `string`: The preprint provider's Facebook account ID. This field is deprecated as of verson 2.4.
    * social_instagram `string`: The preprint provider's Instagram account ID. This field is deprecated as of verson 2.4.
    * subjects_acceptable `string`: A nested array structure defining allowed subjects for this preprint provider, in the BePress taxonomy.
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
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary with keys that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.


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
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprint_provider_taxonomies_list

A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

### preprints_list

A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.


```js
osf.preprints_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes `object`: The properties of the preprint entity.
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprints_create
Creates a new preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.


```js
osf.preprints_create({
  "data": {
    "type": "",
    "relationships": {
      "node": "",
      "primary_file": "",
      "provider": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * data **required** `object`
    * attributes `object`: The properties of the preprint entity.
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

#### Output
*Output schema unknown*

### preprints_read
Retrieves the details of a preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
    * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
    * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
    * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
    * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
    * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
      * items `string`
  * id `string`: The identifier of the preprint entity.
  * links `object`: URLs to alternative representations of the preprint entity.
    * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
    * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
    * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
    * self `string`: A link to the detail page for the preprint.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
    * citation `string`: A relationship to the citation of the preprint.
    * identifiers `string`: A relationship to the identifiers associated with the preprint.
    * license `string`: A relationship to the license that has been applied to the preprint.
    * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
    * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
    * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
  * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### preprints_partial_update
Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
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
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is the 'Open Science Framework'. For preprints, the publisher is the same as the preprint provider.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.


```js
osf.registrations_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * attributes **required** `object`: The properties of the registration entity.
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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
A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals
Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
    * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
    * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
    * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
      * items `string`
    * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
    * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
    * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
    * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
    * description `string`: The description of the registered node.
    * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
    * fork `boolean`: Whether or not this registration represents a fork of another node.
    * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
    * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
    * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
    * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
    * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
    * public `boolean`: Whether or not the registration is publicly visible.
    * registered_meta `string`: A dictionary with supplemental registration questions and responses.
    * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
    * registration_supplement `string`: The title of the registration schema this registration conforms to.
    * tags `array`: A list of strings that describe the registered node.
      * items `string`
    * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
    * title `string`: The title of the registered node.
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
    * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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
Updates a registration's privacy from **private** to **public**.

Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration

Registrations can only be turned from private to public, not vice versa.
#### Permissions
Only project administrators may update a registration.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.registrations_partial_update({
  "registration_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {},
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
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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

### registrations_children_list

A paginated list of children of a registration.

The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.

The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.


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
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.


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
    * publisher `string`: The publisher of the entity being cited. For nodes and registrations, the publisher is the 'Open Science Framework'. For preprints, the publisher is the same as the preprint provider.
    * title `string`: The title of the entity being cited.
  * id `string`: The identifier of the entity being cited.
  * links `object`: URLs to alternative representations of the citation entity.
    * self `string`: A link to the entity that is being cited.
  * type `string`: The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).

### registrations_comments_list

A paginated list of the registration's comments.

The returned comments are sorted by their creation date, with the most recent comments appearing first.
####Permissions
Comments of public registrations are given read-only access to everyone.

If the comment-level is `private`, only registration contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments of private registrations are only visible to contributors and administrators on the registration.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf

Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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


####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

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
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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

####Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

####Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file

Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.


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
      * info `string`: A link to the page to view a file's information or a folder's contents.
      * move `string`: The Waterbutler API route for file moves.
      * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * info `string`: A link to the page to view a file's information or a folder's contents.
    * move `string`: The Waterbutler API route for file moves.
    * new_folder `string`: The Waterbutler API route for creating a new subfolder (does not exist for files).
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


```js
osf.registrations_forks_create({
  "registration_id": "",
  "body": {
    "id": "",
    "type": "",
    "attributes": {},
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
      * category `string` (values: analysis, communication, data, hypothesis, instrumentation, methods and measures, procedure, project, software, other): The category of the registered node.
      * collection `boolean`: Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
      * current_user_can_comment `boolean`: Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
      * current_user_permissions `array`: A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
        * items `string`
      * date_created `string`: The time at which the registered node was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the registered node was last modified, as an iso8601 formatted timestamp.
      * date_registered `string`: The time at which this registration was created, as an iso8601 formatted timestamp.
      * date_withdrawn `string`: The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
      * description `string`: The description of the registered node.
      * embargo_end_date `string`: The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
      * fork `boolean`: Whether or not this registration represents a fork of another node.
      * node_license `string`: A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
      * pending_embargo_approval `boolean`: Whether or not the embargo associated with this registration is pending approval from project administrators.
      * pending_registration_approval `boolean`: Whether or not the registration is pending approval from project administrators.
      * pending_withdrawal `boolean`: Whether or not the registration is pending approval for withdrawal from project administrators.
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the registration is publicly visible.
      * registered_meta `string`: A dictionary with supplemental registration questions and responses.
      * registration `boolean`: Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
      * registration_supplement `string`: The title of the registration schema this registration conforms to.
      * tags `array`: A list of strings that describe the registered node.
        * items `string`
      * template_from `string`: The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
      * title `string`: The title of the registered node.
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
      * identifiers `string`: A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
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
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark

Identifiers may be filtered by their `category` e.g `ark` or `doi`.


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
      * category `string` (values: ark, doi): The category of the identifier
      * value `string`: The identifier value itself
    * id `string`: The identifier of the identifier entity.
    * links `object`: URLs to alternative representations of the identifier entity.
      * self `string`: A link to the detail page for the identifier.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the identifier entity.
      * referent `string`: A relationship to the node the identifier refers to.
    * type `string`: The type identifier of the identifier entity (`identifiers`).

### registrations_institutions_list
A paginated list of institutions affiliated with the registration.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * logo_path `string`: Static path to the institution specific logo.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
      * self `string`: A link to the detail page for the institution.
    * relationships `object`: URLs to other entities or entity collections that have a relationship to the institution entity.
      * nodes `string`: A relationship to the nodes affiliated with the institution.
      * registrations `string`: A relationship to the registrations affiliated with the institution.
      * users `string`: A relationship to the users affiliated with the institution.
    * type `string`: The type identifier of the institution entity (`institutions`).

### registrations_linked_nodes_list
List of all nodes linked to the registration.
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### registrations_logs_list
A paginated list of the registration's logs.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
####Filtering
You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.

Logs may be filtered by their `action`, and `date`.


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
        * identifiers `string`: Dictionary containing the DOI and ARK ID for a preprint associated with the log.
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
####Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

####Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

####Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.


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
####Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
####Permissions

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
####Returns
A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.
#### Filtering
Wiki pages can be filtered based on their `name` and `date_modified` fields.
+ `filter[name]=<Str>` -- filter wiki pages by name
+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.


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
      * comments **required** `string`: A relationship to the comments related to this wiki.
      * node **required** `string`: A relationship to the associated node.
      * user **required** `string`: A relationship to the user associated with this wiki.
    * type **required** `string`: The type identifier of the wiki (`wikis`).

### sparse_fieldsets
All endpoints respond to the `fields` query parameter as described in the [JSON-API spec](http://jsonapi.org/format/#fetching-sparse-fieldsets).


From the specification:

<blockquote>
  <p>A client MAY request that an endpoint return only specific fields in the response on a per-type basis by including a fields[TYPE] parameter.</p>
  <p>The value of the fields parameter MUST be a comma-separated (U+002C COMMA, “,”) list that refers to the name(s) of the fields to be returned.</p>
  <p>If a client requests a restricted set of fields for a given resource type, an endpoint MUST NOT include additional fields in resource objects of that type in its response.</p>
</blockquote>

#### Basic Usage

When making a request to an endpoint that returns a serialized object of some `type`, you can specify `fields[<type>]=<comma,separated,list,of,fields>` to receive a subset of the object's fields in the response.


For example, the request below will serialize only the `title` attribute and `children` relationship for each node in the response.


https://api.osf.io/v2/nodes/?fields[nodes]=title,children


Sparse fieldsets can be used to restrict both attribute and relationship fields.
Note that top-level objects (such as `type`, `id`, `attributes`, `relationships`, and `links`) will always be serialized and cannot be excluded.

#### Advanced Usage

Sparse fieldsets can be used to restrict any entity returned in the response.


For example, the request below will serialize only the `full_name` attribute for each user (auto-embedded by the `embed=contributors` query parameter), and the `title` attribute for each node.


https://api.osf.io/v2/nodes/?fields[nodes]=title,contributors&embed=contributors&fields[users]=full_name


Any field specified in another query parameters used by the serializer (e.g. `embed`) must also be included in the sparse fieldset.
For example, fields that are being embedded on the sparse type (e.g. `nodes`) must also be included in `fields[<type>]` when using embeds, or the embed will be invalid.


A request to embed contributors and restrict nodes to only return the `title` attribute should have the form:


https://api.osf.io/v2/nodes/?embed=contributors&fields[nodes]=title,contributors


**NOT**


https://api.osf.io/v2/nodes/?embed=contributors&fields[nodes]=title



```js
osf.sparse_fieldsets(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### taxonomies_list

A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
Note: this API endpoint is under active development, and is subject to change in the future.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.

Taxonomies may be filtered by their `id`, `parents`, and `text`.


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

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

### testing

#### Testing Server
The test-* subdomains of the osf are intended to match, at any given time, the current production environment of the Open Science Framework.

We have staging servers that will have newer features, including newer API features, that aren't ready for production. However, because those servers are subject to the whims of QA and whichever group needs to do specific testing, they aren't particular stable for API developers.

The test servers linked below are primarily for developing your API application on a stable system.

https://test.osf.io/

https://test-api.osf.io/v2/
#### Ephemerality Notice
Expect the server to be down from time to time while we update software, and don't expect that anything you create on here to exist long-term.

While this is more stable than a staging server, we won't necessarily run data migrations if anything major happens to our database schema, so we may clear out the data on the test servers periodically.


```js
osf.testing(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users_list

A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.

The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.
#### Versioning
As of version `2.3`, merged users will not be returned from this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.


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
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
      * institutions `string`: A link to the list of institutions the user is affiliated with.
      * nodes `string`: A link to the list of nodes the user is a contributor to.
    * type **required** `string`: The type identifier of the user entity (`users`).

### users_read
Retrieves the details of a given users.

The returned information includes the user's bibliographic information and the date the user was registered.

Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.

If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * suffix `string`: The suffix of the user, used for bibliographic citations.
    * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
  * id **required** `string`: The unique identifier of the user entity.
  * links **required** `object`: URLs to alternative representations of the user entity.
    * html `string`: A link to the user's profile page on the OSF.
    * profile_image `string`: A link to the user's profile image.
  * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
    * institutions `string`: A link to the list of institutions the user is affiliated with.
    * nodes `string`: A link to the list of nodes the user is a contributor to.
  * type **required** `string`: The type identifier of the user entity (`users`).

### users_partial_update
Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.

**Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * suffix `string`: The suffix of the user, used for bibliographic citations.
      * timezone `string`: The user's timezone, e.g. 'Etc/UTC'.
    * id **required** `string`: The unique identifier of the user entity.
    * links **required** `object`: URLs to alternative representations of the user entity.
      * html `string`: A link to the user's profile page on the OSF.
      * profile_image `string`: A link to the user's profile image.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the user entity.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

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

####Returns
Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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

####Returns
Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

### users_institutions_list
A paginated list of institutions that the user is affiliated with.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).


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
      * auth_url `string`: Url used to authenticate institution specific login.
      * description `string`: Description of the institution.
      * logo_path `string`: Static path to the institution specific logo.
      * name `string`: Full name of the institution.
    * id `string`: The identifier of the institution entity.
    * links `object`: URLs to alternative representations of the institutions entity.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.


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
      * date_created `string`: The time at which the preprint was created, as an iso8601 formatted timestamp.
      * date_modified `string`: The time at which the preprint was last modified, as an iso8601 formatted timestamp.
      * date_published `string`: The time at which the preprint was published, as an iso8601 formatted timestamp.
      * doi `string`: The DOI of the associated journal article, as entered by the user, if the preprint is published.
      * is_preprint_orphan `boolean`: Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
      * license_record `string`: The metadata (copyright year and holder) associated with a license, required for certain licenses.
      * subjects `array`: A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
        * items `string`
    * id `string`: The identifier of the preprint entity.
    * links `object`: URLs to alternative representations of the preprint entity.
      * doi `string`: The URL representation of the DOI entered by the user for the preprint manuscript.
      * html `string`: A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
      * preprint_doi `string`: The URL representation of the OSF assigned DOI for the preprint.
      * self `string`: A link to the detail page for the preprint.
    * relationships **required** `object`: URLs to other entities or entity collections that have a relationship to the preprint entity.
      * citation `string`: A relationship to the citation of the preprint.
      * identifiers `string`: A relationship to the identifiers associated with the preprint.
      * license `string`: A relationship to the license that has been applied to the preprint.
      * node **required** `string`: A relationship to the node that was created for the preprint, or from which the preprint was created.
      * primary_file **required** `string`: A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
      * provider **required** `string`: A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
    * type **required** `string`: The type identifier of the preprint entity (`preprints`).

### users_registrations_list
A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.

If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.

User nodes are not available at this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.


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

### versioning
Versioning can be specified in three different ways:

#### URL Path Versioning
+ `/v2/` or `/v3/`
+ A version specified via the URL path is a **required** part of the URL.
+ Only a major version can be specified via the URL path, i.e. `/v2.0.6/` is invalid, additionally, paths such as `/v2.0/` are invalid.
+ If the default version of the API is within the major version specified in the URL path, the default version will be applied (i.e. if the default version is `2.3` and the URL path is `/v2/`, then version returned will be `2.3`).
+ If the default version of the API is not within the major version specified in the URL path, the URL path version will be applied (i.e. if the default version is `3.0` and the URL path is `/v2/`, then the version returned will be `2.0`)

#### Query Parameter Versioning
+ `/v2/nodes/?version=2.1.6`
+ Pinning to a specific version via a query parameter is **optional**.
+ A specific version (major, minor, or patch) for a single request can be specified via the `version` query parameter, as long as it is an allowed version.
+ If the version specified in the query parameter does not fall within the same major version specified in the URL path, i.e `/v2/nodes/?version=3.1.4` a 409 Conflict response will be returned.

#### Header Versioning
+ `Accept-Header=application/vnd.api+json;version=3.0.1`
+ Pinning to a specific version via request header is **optional**.
+ A specific version (major, minor, or patch) for a single request can be specified via the `Accept Header` of the request, as long as it is an allowed version.
+ If the version specified in the header does not fall within the same major version specified in the URL path a 409 Conflict response will be returned.
+ If both a header version and query parameter version are specified, the versions must match exactly or a 409 Conflict response will be returned (i.e. one does not take precedence over the other).

#### CHANGELOG
`v2.1`
+ Pagination links conform to JSON API specification, i.e. `meta` information was pulled out of the `links` object and placed in a top-level `meta` object.
+ Deprecate the `node_links` field in the **Node** and **Registration** serializers in favor of `linked_nodes` and `linked_registrations`.

`v2.2`
+ Modify institution nodes list so that affiliated components are also returned from `/v2/institutions/<id>/nodes/`.
+ Ensure all existing date fields are standardized on UTC.

`v2.3`
+ Handle merged users more correctly on `/v2/users/`.

`v2.4`
+ Deprecate the `parents` field in the **Taxonomies** serializer.
+ Deprecate the following fields in the **Preprint Provider** serializer:
    + `social_facebook`, `social_instagram`, and `social_twitter`
    + `banner_path`, `logo_path`, and `header_text`
    + `email_contact`


```js
osf.versioning(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### view_only_links_read
Retrieves details about a specific view only link.
####Permissions
Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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

The `links` key contains a dictionary of links that can be used for [pagination](#Introduction_pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
      * preprint `boolean`: Whether or not a preprint has been created from this node, or if this node was created for a preprint.
      * public `boolean`: Whether or not the node is publicly visible. This field is only editable by project administrators.
      * registration `boolean`: Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
      * tags `array`: A list of strings that describe this node, as entered by project contributors.
        * items `string`
      * template_from `string`: The unique ID of the node from which this node was templated, if this node was created from a template.
      * title **required** `string`: The title of the node.
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
      * identifiers `string`: A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
      * license `string`: A link to the license that has been applied to this node.
      * linked_nodes `string`: A link to the list of nodes that are linked to the current node.
      * logs `string`: A link to the list of log actions pertaining to this node.
      * node_links `string`: A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
      * parent `string`: A link to the node that is the direct parent of the current node, if the current node is a child node.
      * preprints `string`: A link to the list of preprints that this node relates to.
      * registrations `string`: A link to the list of registrations that have been created from this node.
      * root `string`: A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
      * template_node `string`: A link to the node that the current node was templated from, if the current node was created from a template.
      * view_only_links `string`: A link to the list of view only links that have been created for this node.
      * wikis `string`: A link to the list of wiki pages for this node.
    * type **required** `string`: The type identifier of the node entity (`nodes`).

### wiki_read
Retrieves the details about a specific wiki.
A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
####Returns
Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.


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
    * comments **required** `string`: A relationship to the comments related to this wiki.
    * node **required** `string`: A relationship to the associated node.
    * user **required** `string`: A relationship to the user associated with this wiki.
  * type **required** `string`: The type identifier of the wiki (`wikis`).

### wiki_content
Retrieves the plaintext content of a wiki in markdown format.
####Returns
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



## Definitions

** No definitions **
