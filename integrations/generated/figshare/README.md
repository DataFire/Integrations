# @datafire/figshare

Client library for Figshare

## Installation and Usage
```bash
npm install --save datafire @datafire/figshare
```

```js
let datafire = require('datafire');
let figshare = require('@datafire/figshare').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    figshare: account,
  }
})

figshare.projects_search({}, context).then(data => {
  console.log(data);
})
```

## Description
Figshare apiv2. Using Swagger 2.0

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
figshare.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
figshare.oauthRefresh(null, context)
```


### private_account
Account information for token/personal token


```js
figshare.private_account(null, context)
```


### private_articles_list
Get Own Articles


```js
figshare.private_articles_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit

### private_article_create
Create a new Article by sending article information


```js
figshare.private_article_create({
  "Article": {
    "title": ""
  }
}, context)
```

#### Parameters
* Article (object) **required**

### private_articles_search
Returns a list of private articles filtered by the search parameters


```js
figshare.private_articles_search({
  "search": {}
}, context)
```

#### Parameters
* search (object) **required**

### private_article_delete
Delete an article


```js
figshare.private_article_delete({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_details
View a private article


```js
figshare.private_article_details({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_update
Updating an article by passing body parameters


```js
figshare.private_article_update({
  "Article": {},
  "article_id": 0
}, context)
```

#### Parameters
* Article (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_authors_list
List article authors


```js
figshare.private_article_authors_list({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_authors_add
Associate new authors with the article. This will add new authors to the list of already associated authors


```js
figshare.private_article_authors_add({
  "Authors": {
    "authors": []
  },
  "article_id": 0
}, context)
```

#### Parameters
* Authors (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_authors_replace
Associate new authors with the article. This will remove all already associated authors and add these new ones


```js
figshare.private_article_authors_replace({
  "Authors": {
    "authors": []
  },
  "article_id": 0
}, context)
```

#### Parameters
* Authors (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_author_delete
De-associate author from article


```js
figshare.private_article_author_delete({
  "article_id": 0,
  "author_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* author_id (integer) **required** - Article Author unique identifier

### private_article_categories_list
List article categories


```js
figshare.private_article_categories_list({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_categories_add
Associate new categories with the article. This will add new categories to the list of already associated categories


```js
figshare.private_article_categories_add({
  "categories": {
    "categories": []
  },
  "article_id": 0
}, context)
```

#### Parameters
* categories (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_categories_replace
Associate new categories with the article. This will remove all already associated categories and add these new ones


```js
figshare.private_article_categories_replace({
  "categories": {
    "categories": []
  },
  "article_id": 0
}, context)
```

#### Parameters
* categories (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_category_delete
De-associate category from article


```js
figshare.private_article_category_delete({
  "article_id": 0,
  "category_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* category_id (integer) **required** - Category unique identifier

### private_article_confidentiality_delete
Delete confidentiality settings


```js
figshare.private_article_confidentiality_delete({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_confidentiality_details
View confidentiality settings


```js
figshare.private_article_confidentiality_details({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_confidentiality_update
Update confidentiality settings


```js
figshare.private_article_confidentiality_update({
  "reason": {},
  "article_id": 0
}, context)
```

#### Parameters
* reason (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_embargo_delete
Will lift the embargo for the specified article


```js
figshare.private_article_embargo_delete({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_embargo_details
View a private article embargo details


```js
figshare.private_article_embargo_details({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_embargo_update
Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.


```js
figshare.private_article_embargo_update({
  "Embargo": {},
  "article_id": 0
}, context)
```

#### Parameters
* Embargo (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_files_list
List private files


```js
figshare.private_article_files_list({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_upload_initiate
Initiate new file upload within the article. Either use link to provide only an existing file that will not be uploaded on figshare or use the other 3 parameters(md5, name, size)


```js
figshare.private_article_upload_initiate({
  "File": {},
  "article_id": 0
}, context)
```

#### Parameters
* File (object) **required**
* article_id (integer) **required** - Article unique identifier

### private_article_file_delete
Complete file upload


```js
figshare.private_article_file_delete({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* file_id (integer) **required** - File unique identifier

### private_article_file
View details of file for specified article


```js
figshare.private_article_file({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* file_id (integer) **required** - File unique identifier

### private_article_upload_complete
Complete file upload


```js
figshare.private_article_upload_complete({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* file_id (integer) **required** - File unique identifier

### private_article_private_link
List private links


```js
figshare.private_article_private_link({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_private_link_create
Create new private link for this article


```js
figshare.private_article_private_link_create({
  "article_id": 0
}, context)
```

#### Parameters
* private_link (object)
* article_id (integer) **required** - Article unique identifier

### private_article_private_link_delete
Disable/delete private link for this article


```js
figshare.private_article_private_link_delete({
  "article_id": 0,
  "link_id": ""
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier
* link_id (string) **required** - Private link token

### private_article_private_link_update
Update existing private link for this article


```js
figshare.private_article_private_link_update({
  "article_id": 0,
  "link_id": ""
}, context)
```

#### Parameters
* private_link (object)
* article_id (integer) **required** - Article unique identifier
* link_id (string) **required** - Private link token

### private_article_publish
- If the whole article is under embargo, it will not be published immediatly, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.


```js
figshare.private_article_publish({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_article_reserve_doi
Reserve DOI for article


```js
figshare.private_article_reserve_doi({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article unique identifier

### private_authors_search
Search for authors


```js
figshare.private_authors_search({}, context)
```

#### Parameters
* search (object)

### private_author_details
View author details


```js
figshare.private_author_details({
  "author_id": 0
}, context)
```

#### Parameters
* author_id (integer) **required** - Author unique identifier

### private_categories_list
List institution categories (including parent Categories)


```js
figshare.private_categories_list(null, context)
```


### private_collections_list
List private collections


```js
figshare.private_collections_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)

### private_collection_create
Create a new Collection by sending collection information


```js
figshare.private_collection_create({
  "Collection": {
    "title": ""
  }
}, context)
```

#### Parameters
* Collection (object) **required**

### private_collections_search
Returns a list of private Collections


```js
figshare.private_collections_search({
  "search": {}
}, context)
```

#### Parameters
* search (object) **required**

### private_collection_delete
Delete n collection


```js
figshare.private_collection_delete({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### private_collection_details
View a collection


```js
figshare.private_collection_details({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### private_collection_update
Update collection details


```js
figshare.private_collection_update({
  "Collection": {},
  "collection_id": 0
}, context)
```

#### Parameters
* Collection (object) **required**
* collection_id (integer) **required** - Collection Unique identifier

### private_collection_articles_list
List collection articles


```js
figshare.private_collection_articles_list({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier

### private_collection_articles_add
Associate new articles with the collection. This will add new articles to the list of already associated articles


```js
figshare.private_collection_articles_add({
  "articles": {
    "articles": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* articles (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_articles_replace
Associate new articles with the collection. This will remove all already associated articles and add these new ones


```js
figshare.private_collection_articles_replace({
  "articles": {
    "articles": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* articles (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_article_delete
De-associate article from collection


```js
figshare.private_collection_article_delete({
  "collection_id": 0,
  "article_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier
* article_id (integer) **required** - Collection article unique identifier

### private_collection_authors_list
List collection authors


```js
figshare.private_collection_authors_list({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier

### private_collection_authors_add
Associate new authors with the collection. This will add new authors to the list of already associated authors


```js
figshare.private_collection_authors_add({
  "Authors": {
    "authors": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* Authors (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_authors_replace
Associate new authors with the collection. This will remove all already associated authors and add these new ones


```js
figshare.private_collection_authors_replace({
  "Authors": {
    "authors": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* Authors (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_author_delete
Delete collection author


```js
figshare.private_collection_author_delete({
  "collection_id": 0,
  "author_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier
* author_id (integer) **required** - Collection Author unique identifier

### private_collection_categories_list
List collection categories


```js
figshare.private_collection_categories_list({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier

### private_collection_categories_add
Associate new categories with the collection. This will add new categories to the list of already associated categories


```js
figshare.private_collection_categories_add({
  "categories": {
    "categories": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* categories (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_categories_replace
Associate new categories with the collection. This will remove all already associated categories and add these new ones


```js
figshare.private_collection_categories_replace({
  "categories": {
    "categories": []
  },
  "collection_id": 0
}, context)
```

#### Parameters
* categories (object) **required**
* collection_id (integer) **required** - Collection unique identifier

### private_collection_category_delete
De-associate category from collection


```js
figshare.private_collection_category_delete({
  "collection_id": 0,
  "category_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier
* category_id (integer) **required** - Collection category unique identifier

### private_collection_private_links_list
List article private links


```js
figshare.private_collection_private_links_list({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier

### private_collection_private_link_create
Create new private link


```js
figshare.private_collection_private_link_create({
  "collection_id": 0
}, context)
```

#### Parameters
* private_link (object)
* collection_id (integer) **required** - Collection unique identifier

### private_collection_private_link_delete
Disable/delete private link for this collection


```js
figshare.private_collection_private_link_delete({
  "collection_id": 0,
  "link_id": ""
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection unique identifier
* link_id (string) **required** - Private link token

### private_collection_private_link_update
Update existing private link for this collection


```js
figshare.private_collection_private_link_update({
  "collection_id": 0,
  "link_id": ""
}, context)
```

#### Parameters
* private_link (object)
* collection_id (integer) **required** - Collection unique identifier
* link_id (string) **required** - Private link token

### private_collection_publish
When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.


```js
figshare.private_collection_publish({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### private_collection_reserve_doi
Reserve DOI for collection


```js
figshare.private_collection_reserve_doi({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### private_institution_details
Account institution details


```js
figshare.private_institution_details(null, context)
```


### private_institution_articles
Get Articles from own institution. User must be administrator of the institution


```js
figshare.private_institution_articles({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)
* published_since (string) - Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
* modified_since (string) - Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
* status (integer) - only return collections with this status
* resource_doi (string) - only return collections with this resource_doi
* item_type (integer) - Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint

### private_institution_groups_list
Returns the groups for which the account has administrative privileges (assigned and inherited).


```js
figshare.private_institution_groups_list(null, context)
```


### private_licenses_list
This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.


```js
figshare.private_licenses_list(null, context)
```


### private_projects_list
List private projects


```js
figshare.private_projects_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)
* storage (string) - only return collections from this institution
* roles (string) - Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".

### private_project_create
Create a new project


```js
figshare.private_project_create({
  "Project": {
    "title": ""
  }
}, context)
```

#### Parameters
* Project (object) **required**

### private_projects_search
Search inside the private projects


```js
figshare.private_projects_search({}, context)
```

#### Parameters
* search (object)

### private_project_delete
A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.



```js
figshare.private_project_delete({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier

### private_project_details
View a private project


```js
figshare.private_project_details({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier

### private_project_update
Updating an project by passing body parameters


```js
figshare.private_project_update({
  "Project": {},
  "project_id": 0
}, context)
```

#### Parameters
* Project (object) **required**
* project_id (integer) **required** - Project unique identifier

### private_project_articles_list
List project articles


```js
figshare.private_project_articles_list({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Proejct unique identifier

### private_project_articles_create
Create a new Article and associate it with this project


```js
figshare.private_project_articles_create({
  "Article": {
    "title": ""
  },
  "project_id": 0
}, context)
```

#### Parameters
* Article (object) **required**
* project_id (integer) **required** - Proejct unique identifier

### private_project_article_delete
Delete project article


```js
figshare.private_project_article_delete({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* article_id (integer) **required** - Project Article unique identifier

### private_project_article_details
Project article details


```js
figshare.private_project_article_details({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* article_id (integer) **required** - Project Article unique identifier

### private_project_article_files
List article files


```js
figshare.private_project_article_files({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* article_id (integer) **required** - Project Article unique identifier

### private_project_article_file
Project article file details


```js
figshare.private_project_article_file({
  "project_id": 0,
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* article_id (integer) **required** - Project Article unique identifier
* file_id (integer) **required** - File unique identifier

### private_project_collaborators_list
List Project collaborators and invited users


```js
figshare.private_project_collaborators_list({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier

### private_project_collaborators_invite
Invite users to collaborate on project or view the project


```js
figshare.private_project_collaborators_invite({
  "Collaborator": {
    "role_name": ""
  },
  "project_id": 0
}, context)
```

#### Parameters
* Collaborator (object) **required**
* project_id (integer) **required** - Project unique identifier

### private_project_collaborator__Delete
Remove project collaborator


```js
figshare.private_project_collaborator__Delete({
  "project_id": 0,
  "user_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* user_id (integer) **required** - User unique identifier

### private_project_leave
Please note: project's owner cannot leave the project.


```js
figshare.private_project_leave({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier

### private_project_notes_list
List project notes


```js
figshare.private_project_notes_list({
  "project_id": 0
}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* project_id (integer) **required** - Project unique identifier

### private_project_notes_create
Create a new project note


```js
figshare.private_project_notes_create({
  "Note": {
    "text": ""
  },
  "project_id": 0
}, context)
```

#### Parameters
* Note (object) **required**
* project_id (integer) **required** - Project unique identifier

### private_project_note_delete
Delete project note


```js
figshare.private_project_note_delete({
  "project_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* note_id (integer) **required** - Note unique identifier

### private_project_note
Project note details


```js
figshare.private_project_note({
  "project_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier
* note_id (integer) **required** - Note unique identifier

### private_project_note_update
Update project note


```js
figshare.private_project_note_update({
  "Note": {
    "text": ""
  },
  "project_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* Note (object) **required**
* project_id (integer) **required** - Project unique identifier
* note_id (integer) **required** - Note unique identifier

### private_project_publish
Publish a project. Possible after all items inside it are public


```js
figshare.private_project_publish({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project unique identifier

### articles_list
Returns a list of public articles


```js
figshare.articles_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)
* institution (integer) - only return collections from this institution
* published_since (string) - Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
* modified_since (string) - Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
* group (integer) - only return collections from this group
* resource_doi (string) - only return collections with this resource_doi
* item_type (integer) - Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint

### articles_search
Returns a list of public articles, filtered by the search parameters


```js
figshare.articles_search({}, context)
```

#### Parameters
* search (object)

### article_details
View an article


```js
figshare.article_details({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier

### article_files
Files list for article


```js
figshare.article_files({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier

### article_file_details
File by id


```js
figshare.article_file_details({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier
* file_id (integer) **required** - File Unique identifier

### article_versions
List public article versions


```js
figshare.article_versions({
  "article_id": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier

### article_version_details
Article with specified version


```js
figshare.article_version_details({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier
* v_number (integer) **required** - Article Version Number

### article_version_confidentiality
Confidentiality for article version


```js
figshare.article_version_confidentiality({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier
* v_number (integer) **required** - Version Number

### article_version_embargo
Embargo for article version


```js
figshare.article_version_embargo({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Parameters
* article_id (integer) **required** - Article Unique identifier
* v_number (integer) **required** - Version Number

### categories_list
Returns a list of public categories


```js
figshare.categories_list(null, context)
```


### collections_list
Returns a list of public collections


```js
figshare.collections_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)
* institution (integer) - only return collections from this institution
* published_since (string) - Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
* modified_since (string) - Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
* group (integer) - only return collections from this group
* resource_doi (string) - only return collections with this resource_doi

### collections_search
Returns a list of public collections


```js
figshare.collections_search({}, context)
```

#### Parameters
* search (object)

### collection_details
View a collection


```js
figshare.collection_details({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### collection_articles
Returns a list of public collection articles


```js
figshare.collection_articles({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit

### collection_versions
Returns a list of public collection Versions


```js
figshare.collection_versions({
  "collection_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier

### collection_version_details
View details for a certain version of a collection


```js
figshare.collection_version_details({
  "collection_id": 0,
  "version_id": 0
}, context)
```

#### Parameters
* collection_id (integer) **required** - Collection Unique identifier
* version_id (integer) **required** - Version Number

### file_download
Starts the download of a file


```js
figshare.file_download({
  "file_id": 0
}, context)
```

#### Parameters
* file_id (integer) **required**

### institution_hrfeed_upload
More info in the <a href="#hr_feed">HR Feed section</a>


```js
figshare.institution_hrfeed_upload({}, context)
```

#### Parameters
* hrfeed (string) - You can find an example in the Hr Feed section

### institution_articles
Returns a list of articles belonging to the institution


```js
figshare.institution_articles({
  "institution_string_id": "",
  "resource_id": "",
  "filename": ""
}, context)
```

#### Parameters
* institution_string_id (string) **required**
* resource_id (string) **required**
* filename (string) **required**

### licenses_list
Returns a list of public licenses


```js
figshare.licenses_list(null, context)
```


### projects_list
Returns a list of public projects


```js
figshare.projects_list({}, context)
```

#### Parameters
* page (integer) - Page number. Used for pagination with page_size
* page_size (integer) - The number of results included on a page. Used for pagination with page
* limit (integer) - Number of results included on a page. Used for pagination with query
* offset (integer) - Where to start the listing(the offset of the first result). Used for pagination with limit
* order (string) - The field by which to order. Default varies by endpoint/resource.
* order_direction (string)
* institution (integer) - only return collections from this institution
* published_since (string) - Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
* group (integer) - only return collections from this group

### projects_search
Returns a list of public articles


```js
figshare.projects_search({}, context)
```

#### Parameters
* search (object)

### project_details
View a project


```js
figshare.project_details({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project Unique identifier

### project_articles
List articles in project


```js
figshare.project_articles({
  "project_id": 0
}, context)
```

#### Parameters
* project_id (integer) **required** - Project Unique identifier

