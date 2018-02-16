# @datafire/figshare

Client library for Figshare

## Installation and Usage
```bash
npm install --save @datafire/figshare
```
```js
let figshare = require('@datafire/figshare').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

figshare.projects_search({}).then(data => {
  console.log(data);
});
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
figshare.oauthRefresh(null, context)
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

### private_account
Account information for token/personal token


```js
figshare.private_account(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### private_articles_list
Get Own Articles


```js
figshare.private_articles_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit

#### Output
* output `array`
  * items [Article](#article)

### private_article_create
Create a new Article by sending article information


```js
figshare.private_article_create({
  "Article": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * Article **required** [ArticleCreate](#articlecreate)

#### Output
* output [Location](#location)

### private_articles_search
Returns a list of private articles filtered by the search parameters


```js
figshare.private_articles_search({
  "search": {}
}, context)
```

#### Input
* input `object`
  * search **required** [PrivateArticleSearch](#privatearticlesearch)

#### Output
* output `array`
  * items [Article](#article)

### private_article_delete
Delete an article


```js
figshare.private_article_delete({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_details
View a private article


```js
figshare.private_article_details({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [ArticleCompletePrivate](#articlecompleteprivate)

### private_article_update
Updating an article by passing body parameters


```js
figshare.private_article_update({
  "Article": {},
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * Article **required** [ArticleUpdate](#articleupdate)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_authors_list
List article authors


```js
figshare.private_article_authors_list({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output `array`
  * items [Author](#author)

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

#### Input
* input `object`
  * Authors **required** [AuthorsCreator](#authorscreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * Authors **required** [AuthorsCreator](#authorscreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_author_delete
De-associate author from article


```js
figshare.private_article_author_delete({
  "article_id": 0,
  "author_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * author_id **required** `integer`: Article Author unique identifier

#### Output
*Output schema unknown*

### private_article_categories_list
List article categories


```js
figshare.private_article_categories_list({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output `array`
  * items [Category](#category)

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

#### Input
* input `object`
  * categories **required** [CategoriesCreator](#categoriescreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * categories **required** [CategoriesCreator](#categoriescreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_category_delete
De-associate category from article


```js
figshare.private_article_category_delete({
  "article_id": 0,
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * category_id **required** `integer`: Category unique identifier

#### Output
*Output schema unknown*

### private_article_confidentiality_delete
Delete confidentiality settings


```js
figshare.private_article_confidentiality_delete({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_confidentiality_details
View confidentiality settings


```js
figshare.private_article_confidentiality_details({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [ArticleConfidentiality](#articleconfidentiality)

### private_article_confidentiality_update
Update confidentiality settings


```js
figshare.private_article_confidentiality_update({
  "reason": {},
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * reason **required** [ConfidentialityCreator](#confidentialitycreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_embargo_delete
Will lift the embargo for the specified article


```js
figshare.private_article_embargo_delete({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_embargo_details
View a private article embargo details


```js
figshare.private_article_embargo_details({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [ArticleEmbargo](#articleembargo)

### private_article_embargo_update
Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.


```js
figshare.private_article_embargo_update({
  "Embargo": {},
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * Embargo **required** [ArticleEmbargoUpdater](#articleembargoupdater)
  * article_id **required** `integer`: Article unique identifier

#### Output
*Output schema unknown*

### private_article_files_list
List private files


```js
figshare.private_article_files_list({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output `array`
  * items [PrivateFile](#privatefile)

### private_article_upload_initiate
Initiate new file upload within the article. Either use link to provide only an existing file that will not be uploaded on figshare or use the other 3 parameters(md5, name, size)


```js
figshare.private_article_upload_initiate({
  "File": {},
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * File **required** [FileCreator](#filecreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [Location](#location)

### private_article_file_delete
Complete file upload


```js
figshare.private_article_file_delete({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * file_id **required** `integer`: File unique identifier

#### Output
*Output schema unknown*

### private_article_file
View details of file for specified article


```js
figshare.private_article_file({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * file_id **required** `integer`: File unique identifier

#### Output
* output [PrivateFile](#privatefile)

### private_article_upload_complete
Complete file upload


```js
figshare.private_article_upload_complete({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * file_id **required** `integer`: File unique identifier

#### Output
*Output schema unknown*

### private_article_private_link
List private links


```js
figshare.private_article_private_link({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output `array`
  * items [PrivateLink](#privatelink)

### private_article_private_link_create
Create new private link for this article


```js
figshare.private_article_private_link_create({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * private_link [PrivateLinkCreator](#privatelinkcreator)
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [Location](#location)

### private_article_private_link_delete
Disable/delete private link for this article


```js
figshare.private_article_private_link_delete({
  "article_id": 0,
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier
  * link_id **required** `string`: Private link token

#### Output
*Output schema unknown*

### private_article_private_link_update
Update existing private link for this article


```js
figshare.private_article_private_link_update({
  "article_id": 0,
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * private_link [PrivateLinkCreator](#privatelinkcreator)
  * article_id **required** `integer`: Article unique identifier
  * link_id **required** `string`: Private link token

#### Output
*Output schema unknown*

### private_article_publish
- If the whole article is under embargo, it will not be published immediatly, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.


```js
figshare.private_article_publish({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [Location](#location)

### private_article_reserve_doi
Reserve DOI for article


```js
figshare.private_article_reserve_doi({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article unique identifier

#### Output
* output [ArticleDOI](#articledoi)

### private_authors_search
Search for authors


```js
figshare.private_authors_search({}, context)
```

#### Input
* input `object`
  * search [PrivateAuthorsSearch](#privateauthorssearch)

#### Output
* output `array`
  * items [Author](#author)

### private_author_details
View author details


```js
figshare.private_author_details({
  "author_id": 0
}, context)
```

#### Input
* input `object`
  * author_id **required** `integer`: Author unique identifier

#### Output
* output [AuthorComplete](#authorcomplete)

### private_categories_list
List institution categories (including parent Categories)


```js
figshare.private_categories_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Category](#category)

### private_collections_list
List private collections


```js
figshare.private_collections_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)

#### Output
* output `array`
  * items [Collection](#collection)

### private_collection_create
Create a new Collection by sending collection information


```js
figshare.private_collection_create({
  "Collection": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * Collection **required** [CollectionCreate](#collectioncreate)

#### Output
* output [CollectionComplete](#collectioncomplete)

### private_collections_search
Returns a list of private Collections


```js
figshare.private_collections_search({
  "search": {}
}, context)
```

#### Input
* input `object`
  * search **required** [PrivateCollectionSearch](#privatecollectionsearch)

#### Output
* output `array`
  * items [Collection](#collection)

### private_collection_delete
Delete n collection


```js
figshare.private_collection_delete({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
*Output schema unknown*

### private_collection_details
View a collection


```js
figshare.private_collection_details({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
* output [CollectionComplete](#collectioncomplete)

### private_collection_update
Update collection details


```js
figshare.private_collection_update({
  "Collection": {},
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * Collection **required** [CollectionUpdate](#collectionupdate)
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
*Output schema unknown*

### private_collection_articles_list
List collection articles


```js
figshare.private_collection_articles_list({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output `array`
  * items [Article](#article)

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

#### Input
* input `object`
  * articles **required** [ArticlesCreator](#articlescreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output [Location](#location)

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

#### Input
* input `object`
  * articles **required** [ArticlesCreator](#articlescreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
*Output schema unknown*

### private_collection_article_delete
De-associate article from collection


```js
figshare.private_collection_article_delete({
  "collection_id": 0,
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier
  * article_id **required** `integer`: Collection article unique identifier

#### Output
*Output schema unknown*

### private_collection_authors_list
List collection authors


```js
figshare.private_collection_authors_list({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output `array`
  * items [Author](#author)

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

#### Input
* input `object`
  * Authors **required** [AuthorsCreator](#authorscreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output [Location](#location)

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

#### Input
* input `object`
  * Authors **required** [AuthorsCreator](#authorscreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
*Output schema unknown*

### private_collection_author_delete
Delete collection author


```js
figshare.private_collection_author_delete({
  "collection_id": 0,
  "author_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier
  * author_id **required** `integer`: Collection Author unique identifier

#### Output
*Output schema unknown*

### private_collection_categories_list
List collection categories


```js
figshare.private_collection_categories_list({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output `array`
  * items [Category](#category)

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

#### Input
* input `object`
  * categories **required** [CategoriesCreator](#categoriescreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output [Location](#location)

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

#### Input
* input `object`
  * categories **required** [CategoriesCreator](#categoriescreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
*Output schema unknown*

### private_collection_category_delete
De-associate category from collection


```js
figshare.private_collection_category_delete({
  "collection_id": 0,
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier
  * category_id **required** `integer`: Collection category unique identifier

#### Output
*Output schema unknown*

### private_collection_private_links_list
List article private links


```js
figshare.private_collection_private_links_list({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output `array`
  * items [PrivateLink](#privatelink)

### private_collection_private_link_create
Create new private link


```js
figshare.private_collection_private_link_create({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * private_link [CollectionPrivateLinkCreator](#collectionprivatelinkcreator)
  * collection_id **required** `integer`: Collection unique identifier

#### Output
* output [Location](#location)

### private_collection_private_link_delete
Disable/delete private link for this collection


```js
figshare.private_collection_private_link_delete({
  "collection_id": 0,
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection unique identifier
  * link_id **required** `string`: Private link token

#### Output
*Output schema unknown*

### private_collection_private_link_update
Update existing private link for this collection


```js
figshare.private_collection_private_link_update({
  "collection_id": 0,
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * private_link [CollectionPrivateLinkCreator](#collectionprivatelinkcreator)
  * collection_id **required** `integer`: Collection unique identifier
  * link_id **required** `string`: Private link token

#### Output
*Output schema unknown*

### private_collection_publish
When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.


```js
figshare.private_collection_publish({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
* output [Location](#location)

### private_collection_reserve_doi
Reserve DOI for collection


```js
figshare.private_collection_reserve_doi({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
* output [ArticleDOI](#articledoi)

### private_institution_details
Account institution details


```js
figshare.private_institution_details(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Institution](#institution)

### private_institution_accounts_list
Returns the accounts for which the account has administrative privileges (assigned and inherited).


```js
figshare.private_institution_accounts_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * is_active `integer`: Filter by active status
  * institution_user_id `string`: Filter by institution_user_id
  * email `string`: Filter by email

#### Output
* output `array`
  * items [ShortAccount](#shortaccount)

### private_institution_accounts_create
Create a new Account by sending account information


```js
figshare.private_institution_accounts_create({
  "Account": {
    "email": "",
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * Account **required** [AccountCreate](#accountcreate)

#### Output
*Output schema unknown*

### private_institution_accounts_search
Returns the accounts for which the account has administrative privileges (assigned and inherited).


```js
figshare.private_institution_accounts_search({
  "search": {}
}, context)
```

#### Input
* input `object`
  * search **required** [InstitutionAccountsSearch](#institutionaccountssearch)

#### Output
* output `array`
  * items [ShortAccount](#shortaccount)

### private_institution_accounts_update
Update Institution Account


```js
figshare.private_institution_accounts_update({
  "account_id": 0,
  "Account": {}
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: Account identifier the user is associated to
  * Account **required** [AccountUpdate](#accountupdate)

#### Output
*Output schema unknown*

### private_institution_articles
Get Articles from own institution. User must be administrator of the institution


```js
figshare.private_institution_articles({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * status `integer`: only return collections with this status
  * resource_doi `string`: only return collections with this resource_doi
  * item_type `integer`: Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint

#### Output
* output `array`
  * items [Article](#article)

### private_institution_groups_list
Returns the groups for which the account has administrative privileges (assigned and inherited).


```js
figshare.private_institution_groups_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Group](#group)

### private_institution_roles_list
Returns the roles available for groups and the institution group.


```js
figshare.private_institution_roles_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Role](#role)

### private_institution_account_group_roles
List Institution Account Group Roles


```js
figshare.private_institution_account_group_roles({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: Account identifier the user is associated to

#### Output
* output [AccountGroupRoles](#accountgrouproles)

### private_institution_account_group_roles_create
Add Institution Account Group Roles


```js
figshare.private_institution_account_group_roles_create({
  "Account": {},
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * Account **required** [AccountGroupRolesCreate](#accountgrouprolescreate)
  * account_id **required** `integer`: Account identifier the user is associated to

#### Output
*Output schema unknown*

### private_institution_account_group_role_delete
Delete Institution Account Group Role


```js
figshare.private_institution_account_group_role_delete({
  "account_id": 0,
  "group_id": 0,
  "role_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: Account identifier for which to remove the role
  * group_id **required** `integer`: Group identifier for which to remove the role
  * role_id **required** `integer`: Role identifier

#### Output
*Output schema unknown*

### private_account_institution_user
Retrieve institution user information using the account_id


```js
figshare.private_account_institution_user({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: Account identifier the user is associated to

#### Output
* output [User](#user)

### private_licenses_list
This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.


```js
figshare.private_licenses_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [License](#license)

### private_projects_list
List private projects


```js
figshare.private_projects_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)
  * storage `string` (values: group, individual): only return collections from this institution
  * roles `string`: Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".

#### Output
* output `array`
  * items [ProjectPrivate](#projectprivate)

### private_project_create
Create a new project


```js
figshare.private_project_create({
  "Project": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * Project **required** [ProjectCreate](#projectcreate)

#### Output
* output [Location](#location)

### private_projects_search
Search inside the private projects


```js
figshare.private_projects_search({}, context)
```

#### Input
* input `object`
  * search [CommonSearch](#commonsearch)

#### Output
* output `array`
  * items [ProjectPrivate](#projectprivate)

### private_project_delete
A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.



```js
figshare.private_project_delete({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier

#### Output
*Output schema unknown*

### private_project_details
View a private project


```js
figshare.private_project_details({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier

#### Output
* output [ProjectCompletePrivate](#projectcompleteprivate)

### private_project_update
Updating an project by passing body parameters


```js
figshare.private_project_update({
  "Project": {},
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * Project **required** [ProjectUpdate](#projectupdate)
  * project_id **required** `integer`: Project unique identifier

#### Output
*Output schema unknown*

### private_project_articles_list
List project articles


```js
figshare.private_project_articles_list({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Proejct unique identifier

#### Output
* output `array`
  * items [Article](#article)

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

#### Input
* input `object`
  * Article **required** [ArticleCreate](#articlecreate)
  * project_id **required** `integer`: Proejct unique identifier

#### Output
* output [Location](#location)

### private_project_article_delete
Delete project article


```js
figshare.private_project_article_delete({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * article_id **required** `integer`: Project Article unique identifier

#### Output
*Output schema unknown*

### private_project_article_details
Project article details


```js
figshare.private_project_article_details({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * article_id **required** `integer`: Project Article unique identifier

#### Output
* output [ProjectArticle](#projectarticle)

### private_project_article_files
List article files


```js
figshare.private_project_article_files({
  "project_id": 0,
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * article_id **required** `integer`: Project Article unique identifier

#### Output
* output `array`
  * items [PrivateFile](#privatefile)

### private_project_article_file
Project article file details


```js
figshare.private_project_article_file({
  "project_id": 0,
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * article_id **required** `integer`: Project Article unique identifier
  * file_id **required** `integer`: File unique identifier

#### Output
* output [PrivateFile](#privatefile)

### private_project_collaborators_list
List Project collaborators and invited users


```js
figshare.private_project_collaborators_list({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier

#### Output
* output `array`
  * items [ProjectCollaborator](#projectcollaborator)

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

#### Input
* input `object`
  * Collaborator **required** [ProjectCollaboratorInvite](#projectcollaboratorinvite)
  * project_id **required** `integer`: Project unique identifier

#### Output
* output [ResponseMessage](#responsemessage)

### private_project_collaborator__Delete
Remove project collaborator


```js
figshare.private_project_collaborator__Delete({
  "project_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * user_id **required** `integer`: User unique identifier

#### Output
*Output schema unknown*

### private_project_leave
Please note: project's owner cannot leave the project.


```js
figshare.private_project_leave({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier

#### Output
*Output schema unknown*

### private_project_notes_list
List project notes


```js
figshare.private_project_notes_list({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * project_id **required** `integer`: Project unique identifier

#### Output
* output `array`
  * items [ProjectNote](#projectnote)

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

#### Input
* input `object`
  * Note **required** [ProjectNoteCreate](#projectnotecreate)
  * project_id **required** `integer`: Project unique identifier

#### Output
* output [Location](#location)

### private_project_note_delete
Delete project note


```js
figshare.private_project_note_delete({
  "project_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * note_id **required** `integer`: Note unique identifier

#### Output
*Output schema unknown*

### private_project_note
Project note details


```js
figshare.private_project_note({
  "project_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier
  * note_id **required** `integer`: Note unique identifier

#### Output
* output [ProjectNotePrivate](#projectnoteprivate)

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

#### Input
* input `object`
  * Note **required** [ProjectNoteCreate](#projectnotecreate)
  * project_id **required** `integer`: Project unique identifier
  * note_id **required** `integer`: Note unique identifier

#### Output
*Output schema unknown*

### private_project_publish
Publish a project. Possible after all items inside it are public


```js
figshare.private_project_publish({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project unique identifier

#### Output
* output [ResponseMessage](#responsemessage)

### articles_list
Returns a list of public articles


```js
figshare.articles_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)
  * institution `integer`: only return collections from this institution
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * group `integer`: only return collections from this group
  * resource_doi `string`: only return collections with this resource_doi
  * item_type `integer`: Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint
  * doi `string`: only return collections with this doi

#### Output
* output `array`
  * items [Article](#article)

### articles_search
Returns a list of public articles, filtered by the search parameters


```js
figshare.articles_search({}, context)
```

#### Input
* input `object`
  * search [ArticleSearch](#articlesearch)

#### Output
* output `array`
  * items [Article](#article)

### article_details
View an article


```js
figshare.article_details({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier

#### Output
* output [ArticleComplete](#articlecomplete)

### article_files
Files list for article


```js
figshare.article_files({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier

#### Output
* output `array`
  * items [PublicFile](#publicfile)

### article_file_details
File by id


```js
figshare.article_file_details({
  "article_id": 0,
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier
  * file_id **required** `integer`: File Unique identifier

#### Output
* output [PublicFile](#publicfile)

### article_versions
List public article versions


```js
figshare.article_versions({
  "article_id": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier

#### Output
* output `array`
  * items [Version](#version)

### article_version_details
Article with specified version


```js
figshare.article_version_details({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier
  * v_number **required** `integer`: Article Version Number

#### Output
* output [ArticleComplete](#articlecomplete)

### article_version_confidentiality
Confidentiality for article version


```js
figshare.article_version_confidentiality({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier
  * v_number **required** `integer`: Version Number

#### Output
* output [ArticleConfidentiality](#articleconfidentiality)

### article_version_embargo
Embargo for article version


```js
figshare.article_version_embargo({
  "article_id": 0,
  "v_number": 0
}, context)
```

#### Input
* input `object`
  * article_id **required** `integer`: Article Unique identifier
  * v_number **required** `integer`: Version Number

#### Output
* output [ArticleEmbargo](#articleembargo)

### categories_list
Returns a list of public categories


```js
figshare.categories_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Category](#category)

### collections_list
Returns a list of public collections


```js
figshare.collections_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)
  * institution `integer`: only return collections from this institution
  * published_since `string`: Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
  * modified_since `string`: Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
  * group `integer`: only return collections from this group
  * resource_doi `string`: only return collections with this resource_doi
  * doi `string`: only return collections with this doi

#### Output
* output `array`
  * items [Collection](#collection)

### collections_search
Returns a list of public collections


```js
figshare.collections_search({}, context)
```

#### Input
* input `object`
  * search [CollectionSearch](#collectionsearch)

#### Output
* output `array`
  * items [Collection](#collection)

### collection_details
View a collection


```js
figshare.collection_details({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
* output [CollectionComplete](#collectioncomplete)

### collection_articles
Returns a list of public collection articles


```js
figshare.collection_articles({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit

#### Output
* output `array`
  * items [Article](#article)

### collection_versions
Returns a list of public collection Versions


```js
figshare.collection_versions({
  "collection_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier

#### Output
* output `array`
  * items [Version](#version)

### collection_version_details
View details for a certain version of a collection


```js
figshare.collection_version_details({
  "collection_id": 0,
  "version_id": 0
}, context)
```

#### Input
* input `object`
  * collection_id **required** `integer`: Collection Unique identifier
  * version_id **required** `integer`: Version Number

#### Output
* output [CollectionComplete](#collectioncomplete)

### file_download
Starts the download of a file


```js
figshare.file_download({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`

#### Output
*Output schema unknown*

### institution_hrfeed_upload
More info in the <a href="#hr_feed">HR Feed section</a>


```js
figshare.institution_hrfeed_upload({}, context)
```

#### Input
* input `object`
  * hrfeed `string`: You can find an example in the Hr Feed section

#### Output
* output [ResponseMessage](#responsemessage)

### institution_articles
Returns a list of articles belonging to the institution


```js
figshare.institution_articles({
  "institution_string_id": "",
  "resource_id": "",
  "filename": ""
}, context)
```

#### Input
* input `object`
  * institution_string_id **required** `string`
  * resource_id **required** `string`
  * filename **required** `string`

#### Output
* output `array`
  * items [Article](#article)

### licenses_list
Returns a list of public licenses


```js
figshare.licenses_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [License](#license)

### projects_list
Returns a list of public projects


```js
figshare.projects_list({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc)
  * institution `integer`: only return collections from this institution
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * group `integer`: only return collections from this group

#### Output
* output `array`
  * items [Project](#project)

### projects_search
Returns a list of public articles


```js
figshare.projects_search({}, context)
```

#### Input
* input `object`
  * search [CommonSearch](#commonsearch)

#### Output
* output `array`
  * items [Project](#project)

### project_details
View a project


```js
figshare.project_details({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project Unique identifier

#### Output
* output [ProjectComplete](#projectcomplete)

### project_articles
List articles in project


```js
figshare.project_articles({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`: Project Unique identifier

#### Output
* output `array`
  * items [Article](#article)



## Definitions

### Account
* Account `object`
  * active `integer`: Account activity status
  * created_date `string`: Date when account was created
  * email `string`: User email
  * first_name `string`: First Name
  * group_id `integer`: Account group id
  * id `integer`: Account id
  * institution_id `integer`: Account institution
  * institution_user_id `string`: Account institution user id
  * last_name `string`: Last Name
  * maximum_file_size `integer`: Maximum upload size for account
  * modified_date `string`: Date of last account modification
  * pending_quota_request `boolean`: True if a quota request is pending
  * quota `integer`: Account quota
  * used_quota `integer`: Account total used quota
  * used_quota_private `integer`: Account used private quota
  * used_quota_public `integer`: Account public used quota

### AccountCreate
* AccountCreate `object`
  * email **required** `string`: Email of account
  * first_name **required** `string`: First Name
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * institution_user_id `string`: Institution user id
  * is_active `boolean`: Is account active
  * last_name **required** `string`: Last Name
  * quota `integer`: Account quota
  * symplectic_user_id `string`: Symplectic user id

### AccountGroupRoles
* AccountGroupRoles `object`

### AccountGroupRolesCreate
* AccountGroupRolesCreate `object`

### AccountUpdate
* AccountUpdate `object`
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * is_active `boolean`: Is account active

### Article
* Article `object`
  * defined_type `integer`: Type of article identificator
  * doi `string`: DOI
  * group_id `number`: Group ID
  * id `integer`: Unique identifier for article
  * published_date `string`: Publishing date
  * thumb `string`: Thumbnail image
  * title `string`: Title of article
  * url `string`: Api endpoint for article
  * url_private_api `string`: Private Api endpoint for article
  * url_private_html `string`: Private site endpoint for article
  * url_public_api `string`: Public Api endpoint for article
  * url_public_html `string`: Public site endpoint for article

### ArticleComplete
* ArticleComplete `object`
  * authors `array`: List of article authors
    * items [Author](#author)
  * custom_fields `array`: List of custom fields values
    * items [CustomArticleField](#customarticlefield)
  * figshare_url `string`: Article public url
  * files `array`: List of article files
    * items [PublicFile](#publicfile)
  * resource_doi `string`: Article DOI
  * resource_title `string`: Article resource title
  * categories `array`: List of categories selected for the article
    * items [Category](#category)
  * citation `string`: Article citation
  * confidential_reason `string`: Confidentiality reason
  * created_date `string`: Date when article was created
  * description `string`: Article description
  * embargo_date `string`: Date when embargo lifts
  * embargo_reason `string`: Reason for embargo
  * embargo_type `string`: Article embargo
  * funding `string`: Article funding
  * has_linked_file `boolean`: True if any files are linked to the article
  * is_active `boolean`: True if article is active
  * is_confidential `boolean`: Article Confidentiality
  * is_embargoed `boolean`: True if article is embargoed
  * is_metadata_record `boolean`: True if article has no files
  * is_public `boolean`: True if article is published
  * license [License](#license)
  * metadata_reason `string`: Article metadata reason
  * modified_date `string`: Date when article was last modified
  * references `array`: List of references
    * items `string`
  * size `integer`: Article size
  * status `string`: Article status
  * tags `array`: List of article tags
    * items `string`
  * version `integer`: Article version
  * defined_type `integer`: Type of article identificator
  * doi `string`: DOI
  * group_id `number`: Group ID
  * id `integer`: Unique identifier for article
  * published_date `string`: Publishing date
  * thumb `string`: Thumbnail image
  * title `string`: Title of article
  * url `string`: Api endpoint for article
  * url_private_api `string`: Private Api endpoint for article
  * url_private_html `string`: Private site endpoint for article
  * url_public_api `string`: Public Api endpoint for article
  * url_public_html `string`: Public site endpoint for article

### ArticleCompletePrivate
* ArticleCompletePrivate `object`
  * group_resource_id `string`: Group resource id
  * authors `array`: List of article authors
    * items [Author](#author)
  * custom_fields `array`: List of custom fields values
    * items [CustomArticleField](#customarticlefield)
  * figshare_url `string`: Article public url
  * files `array`: List of article files
    * items [PublicFile](#publicfile)
  * resource_doi `string`: Article DOI
  * resource_title `string`: Article resource title
  * categories `array`: List of categories selected for the article
    * items [Category](#category)
  * citation `string`: Article citation
  * confidential_reason `string`: Confidentiality reason
  * created_date `string`: Date when article was created
  * description `string`: Article description
  * embargo_date `string`: Date when embargo lifts
  * embargo_reason `string`: Reason for embargo
  * embargo_type `string`: Article embargo
  * funding `string`: Article funding
  * has_linked_file `boolean`: True if any files are linked to the article
  * is_active `boolean`: True if article is active
  * is_confidential `boolean`: Article Confidentiality
  * is_embargoed `boolean`: True if article is embargoed
  * is_metadata_record `boolean`: True if article has no files
  * is_public `boolean`: True if article is published
  * license [License](#license)
  * metadata_reason `string`: Article metadata reason
  * modified_date `string`: Date when article was last modified
  * references `array`: List of references
    * items `string`
  * size `integer`: Article size
  * status `string`: Article status
  * tags `array`: List of article tags
    * items `string`
  * version `integer`: Article version
  * defined_type `integer`: Type of article identificator
  * doi `string`: DOI
  * group_id `number`: Group ID
  * id `integer`: Unique identifier for article
  * published_date `string`: Publishing date
  * thumb `string`: Thumbnail image
  * title `string`: Title of article
  * url `string`: Api endpoint for article
  * url_private_api `string`: Private Api endpoint for article
  * url_private_html `string`: Private site endpoint for article
  * url_public_api `string`: Public Api endpoint for article
  * url_public_html `string`: Public site endpoint for article

### ArticleConfidentiality
* ArticleConfidentiality `object`
  * is_confidential `boolean`: True if article is confidential
  * reason `string`: Reason for confidentiality

### ArticleCreate
* ArticleCreate `object`
  * authors `array`: List of authors to be assosciated with the article. The list can contain author ids or author names. No more than 10 authors. For adding more authors use the specific authors endpoint.
    * items `object`
  * categories `array`: List of category ids to be associated with the article(e.g [1, 23, 33, 66])
    * items `integer`
  * custom_fields `object`: List of key, values pairs to be associated with the article
  * defined_type `string` (values: figure, media, dataset, fileset, poster, paper, presentation, thesis, code, metadata, preprint): Article type
  * description `string`: The article description. In a publisher case, usually this is the remote article description
  * doi `string`: Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
  * funding `string`: Grant number or funding authority
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * keywords `array`: List of tags to be associated with the article. Tags can be used instead
    * items `string`
  * license `integer`: License id for this article.
  * references `array`: List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])
    * items `string`
  * resource_doi `string`: Not applicable to regular users. In a publisher case, this is the publisher article DOI. For linkback this needs to be used in combination with resource_title.
  * resource_title `string`: Not applicable to regular users. In a publisher case, this is the publisher article title. For linkback this needs to be used in combination with resource_doi.
  * tags `array`: List of tags to be associated with the article. Keywords can be used instead
    * items `string`
  * title **required** `string`: Title of article

### ArticleDOI
* ArticleDOI `object`
  * doi `string`: Reserved DOI

### ArticleEmbargo
* ArticleEmbargo `object`
  * embargo_date `string`: Date when embargo lifts
  * embargo_reason `string`: Reason for embargo
  * embargo_type `string`: Embargo type
  * is_embargoed `boolean`: True if embargoed

### ArticleEmbargoUpdater
* ArticleEmbargoUpdater `object`
  * embargo_date `string`: Date when the embargo expires and the article gets published
  * embargo_reason `string`: Reason for setting embargo
  * embargo_type `string` (values: article, file): Embargo can be enabled at the article or the file level. Possible values: article, file
  * is_embargoed `boolean`: Confidentiality status

### ArticleSearch
* ArticleSearch `object`
  * doi `string`: only return collections with this doi
  * item_type `integer`: Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint
  * resource_doi `string`: only return collections with this resource_doi
  * group `integer`: only return collections from this group
  * institution `integer`: only return collections from this institution
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * search_for `string`: Search term

### ArticleUpdate
* ArticleUpdate `object`
  * authors `array`: List of authors to be assosciated with the article. The list can contain author ids or author names. No more than 10 authors. For adding more authors use the specific authors endpoint.
    * items `object`
  * categories `array`: List of category ids to be associated with the article(e.g [1, 23, 33, 66])
    * items `integer`
  * custom_fields `object`: List of key, values pairs to be associated with the article
  * defined_type `string` (values: figure, media, dataset, fileset, poster, paper, presentation, thesis, code, metadata, preprint): Article type
  * description `string`: The article description. In a publisher case, usually this is the remote article description
  * doi `string`: Not appliable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
  * funding `string`: Grant number or funding authority
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * keywords `array`: List of tags to be associated with the article. Tags can be used instead
    * items `string`
  * license `integer`: License id for this article.
  * references `array`: List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])
    * items `string`
  * resource_doi `string`: Not applicable to regular users. In a publisher case, this is the publisher article DOI.
  * resource_title `string`: Not applicable to regular users. In a publisher case, this is the publisher article title.
  * tags `array`: List of tags to be associated with the article. Keywords can be used instead
    * items `string`
  * title `string`: Title of article

### ArticlesCreator
* ArticlesCreator `object`
  * articles **required** `array`: List of article ids
    * items `integer`: Id of article

### Author
* Author `object`
  * full_name `string`: Author full name
  * id `integer`: Author id
  * is_active `boolean`: True if author has published items
  * orcid_id `string`: Author Orcid
  * url_name `string`: Author url name

### AuthorComplete
* AuthorComplete `object`
  * first_name `string`: First Name
  * group_id `integer`: Group id
  * institution_id `integer`: Institution id
  * is_public `integer`: if 1 then the author has published items
  * job_title `string`: Job title
  * last_name `string`: Last Name
  * full_name `string`: Author full name
  * id `integer`: Author id
  * is_active `boolean`: True if author has published items
  * orcid_id `string`: Author Orcid
  * url_name `string`: Author url name

### AuthorsCreator
* AuthorsCreator `object`
  * authors **required** `array`: List of authors to be assosciated with the article. The list can contain author ids or author names [{"id": 12121}, {"id": 34345}, {"name": "John Doe"}]. No more than 10 authors. For adding more authors use the specific authors endpoint.
    * items `object`

### CategoriesCreator
* CategoriesCreator `object`
  * categories **required** `array`: List of category ids
    * items `integer`: Id of category

### Category
* Category `object`
  * id `integer`: Category id
  * parent_id `integer`: Parent category
  * title `string`: Category title

### Collaborator
* Collaborator `object`
  * name `string`: Collaborator name
  * role_name `string`: Collaborator role
  * user_id `integer`: Collaborator id

### Collection
* Collection `object`
  * doi `string`: Collection DOI
  * id `integer`: Collection id
  * published_date `string`: Date when collection was published 
  * title `string`: Collection title
  * url `string`: Api endpoint

### CollectionComplete
* CollectionComplete `object`
  * articles_count `integer`: Number of articles in collection
  * authors `array`: List of collection authors
    * items [Author](#author)
  * categories `array`: List of collection categories
    * items [Category](#category)
  * citation `string`: Collection citation
  * created_date `string`: Date when collection was created
  * custom_fields `array`: Collection custom fields
    * items [CustomArticleField](#customarticlefield)
  * description `string`: Collection description
  * group_id `integer`: Collection group
  * group_resource_id `string`: Collection group resource id
  * institution_id `integer`: Collection institution
  * modified_date `string`: Date when collection was last modified
  * public `boolean`: True if collection is published
  * references `array`: List of collection references
    * items `string`
  * resource_doi `string`: Collection resource doi
  * resource_id `string`: Collection resource id
  * resource_link `string`: Collection resource link
  * resource_title `string`: Collection resource title
  * resource_version `integer`: Collection resource version
  * tags `array`: List of collection tags
    * items `string`
  * version `integer`: Collection version
  * doi `string`: Collection DOI
  * id `integer`: Collection id
  * published_date `string`: Date when collection was published 
  * title `string`: Collection title
  * url `string`: Api endpoint

### CollectionCreate
* CollectionCreate `object`
  * articles `array`: List of articles to be associated with the collection
    * items `integer`
  * authors `array`: List of authors to be assosciated with the article. The list can contain author ids or author names. No more than 10 authors. For adding more authors use the specific authors endpoint.
    * items `object`
  * categories `array`: List of category ids to be associated with the article(e.g [1, 23, 33, 66])
    * items `integer`
  * custom_fields `object`: List of key, values pairs to be associated with the article
  * description `string`: The article description. In a publisher case, usually this is the remote article description
  * doi `string`: Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * keywords `array`: List of tags to be associated with the article. Tags can be used instead
    * items `string`
  * references `array`: List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])
    * items `string`
  * resource_doi `string`: Not applicable to regular users. In a publisher case, this is the publisher article DOI. For linkback this needs to be used in combination with resource_title.
  * resource_id `string`: Not applicable to regular users. In a publisher case, this is the publisher article id
  * resource_link `string`: Not applicable to regular users. In a publisher case, this is the publisher article link
  * resource_title `string`: Not applicable to regular users. In a publisher case, this is the publisher article title. For linkback this needs to be used in combination with resource_doi.
  * resource_version `integer`: Not applicable to regular users. In a publisher case, this is the publisher article version
  * tags `array`: List of tags to be associated with the article. Keywords can be used instead
    * items `string`
  * title **required** `string`: Title of article

### CollectionPrivateLinkCreator
* CollectionPrivateLinkCreator `object`
  * expires_date `string`: Date when this private link should expire - optional. By default private links expire in 365 days.
  * read_only `boolean`: Optional, default true. Set to false to give private link users editing rights for this collection.

### CollectionSearch
* CollectionSearch `object`
  * doi `string`: only return collections with this doi
  * resource_doi `string`: only return collections with this resource_doi
  * group `integer`: only return collections from this group
  * institution `integer`: only return collections from this institution
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * search_for `string`: Search term

### CollectionUpdate
* CollectionUpdate `object`
  * articles `array`: List of articles to be associated with the collection
    * items `integer`
  * authors `array`: List of authors to be assosciated with the article. The list can contain author ids or author names. No more than 10 authors. For adding more authors use the specific authors endpoint.
    * items `object`
  * categories `array`: List of category ids to be associated with the article(e.g [1, 23, 33, 66])
    * items `integer`
  * custom_fields `object`: List of key, values pairs to be associated with the article
  * description `string`: The article description. In a publisher case, usually this is the remote article description
  * doi `string`: Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
  * group_id `integer`: Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
  * keywords `array`: List of tags to be associated with the article. Tags can be used instead
    * items `string`
  * references `array`: List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])
    * items `string`
  * resource_doi `string`: Not applicable to regular users. In a publisher case, this is the publisher article DOI.
  * resource_id `string`: Not applicable to regular users. In a publisher case, this is the publisher article id
  * resource_link `string`: Not applicable to regular users. In a publisher case, this is the publisher article link
  * resource_title `string`: Not applicable to regular users. In a publisher case, this is the publisher article title.
  * resource_version `integer`: Not applicable to regular users. In a publisher case, this is the publisher article version
  * tags `array`: List of tags to be associated with the article. Keywords can be used instead
    * items `string`
  * title `string`: Title of article

### CommonSearch
* CommonSearch `object`
  * group `integer`: only return collections from this group
  * institution `integer`: only return collections from this institution
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * search_for `string`: Search term

### ConfidentialityCreator
* ConfidentialityCreator `object`
  * reason `string`: Reason for confidentiality

### CustomArticleField
* CustomArticleField `object`
  * is_mandatory `boolean`: True if field completion is mandatory
  * name `string`: Custom  metadata name
  * value `string`: Custom metadata value

### ErrorMessage
* ErrorMessage `object`
  * code `integer`: A machine friendly error code, used by the dev team to identify the error.
  * message `string`: A human friendly message explaining the error.

### FileCreator
* FileCreator `object`
  * link `string`: Url for an existing file that will not be uploaded on figshare
  * md5 `string`: MD5 sum pre computed on the client side
  * name `string`: File name including the extension
  * size `integer`: File size in bytes

### Group
* Group `object`
  * id `integer`: Group id
  * name `string`: Group name
  * parent_id `integer`: Parent group if any
  * resource_id `string`: Group resource id

### Institution
* Institution `object`
  * domain `string`: Institution domain
  * id `integer`: Institution id
  * name `string`: Institution name

### InstitutionAccountsSearch
* InstitutionAccountsSearch `object`
  * email `string`: filter by email
  * institution_user_id `string`: filter by institution_user_id
  * is_active `integer`: Filter by active status
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * search_for `string`: Search term

### License
* License `object`
  * name `string`: License name
  * url `string`: License url
  * value `integer`: License value

### Location
* Location `object`
  * location `string`: Url for item

### PrivateArticleSearch
* PrivateArticleSearch `object`
  * resource_id `string`: only return collections with this resource_id
  * doi `string`: only return collections with this doi
  * item_type `integer`: Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint
  * resource_doi `string`: only return collections with this resource_doi
  * group `integer`: only return collections from this group
  * institution `integer`: only return collections from this institution
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * search_for `string`: Search term

### PrivateAuthorsSearch
* PrivateAuthorsSearch `object`
  * group_id `integer`: Return only authors in this group or subgroups of the group
  * institution_id `integer`: Return only authors associated to this institution
  * is_active `boolean`: Return only active authors if True
  * is_public `boolean`: Return only authors that have published items if True
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * orcid `string`: Orcid of author
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * search_for `string`: Search term

### PrivateCollectionSearch
* PrivateCollectionSearch `object`
  * resource_id `string`: only return collections with this resource_id
  * doi `string`: only return collections with this doi
  * resource_doi `string`: only return collections with this resource_doi
  * group `integer`: only return collections from this group
  * institution `integer`: only return collections from this institution
  * limit `integer`: Number of results included on a page. Used for pagination with query
  * modified_since `string`: Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * offset `integer`: Where to start the listing(the offset of the first result). Used for pagination with limit
  * order `string` (values: published_date, modified_date, views, shares, downloads, cites): The field by which to order. Default varies by endpoint/resource.
  * order_direction `string` (values: asc, desc): Direction of ordering
  * page `integer`: Page number. Used for pagination with page_size
  * page_size `integer`: The number of results included on a page. Used for pagination with page
  * published_since `string`: Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
  * search_for `string`: Search term

### PrivateFile
* PrivateFile `object`
  * preview_state `string`: File preview state
  * status `string`: Status for file upload
  * upload_token `string`: Token for file upload
  * upload_url `string`: Upload url for file
  * viewer_type `string`: File viewer type
  * computed_md5 `string`: File computed md5
  * download_url `string`: Url for file download
  * id `integer`: File id
  * is_link_only `boolean`: True if file is hosted somewhere else
  * name `string`: File name
  * size `integer`: File size
  * supplied_md5 `string`: File supplied md5

### PrivateLink
* PrivateLink `object`
  * expires_date `string`: Date when link will expire
  * id `string`: Private link id
  * is_active `boolean`: True if private link is active

### PrivateLinkCreator
* PrivateLinkCreator `object`
  * expires_date `string`: Date when this private link should expire - optional. By default private links expire in 365 days.

### Project
* Project `object`
  * id `integer`: Project id
  * published_date `string`: Date when project was published
  * title `string`: Project title
  * url `string`: Api endpoint

### ProjectArticle
* ProjectArticle `object`
  * categories `array`: List of categories selected for the article
    * items [Category](#category)
  * citation `string`: Article citation
  * confidential_reason `string`: Confidentiality reason
  * created_date `string`: Date when article was created
  * description `string`: Article description
  * embargo_date `string`: Date when embargo lifts
  * embargo_reason `string`: Reason for embargo
  * embargo_type `string`: Article embargo
  * funding `string`: Article funding
  * has_linked_file `boolean`: True if any files are linked to the article
  * is_active `boolean`: True if article is active
  * is_confidential `boolean`: Article Confidentiality
  * is_embargoed `boolean`: True if article is embargoed
  * is_metadata_record `boolean`: True if article has no files
  * is_public `boolean`: True if article is published
  * license [License](#license)
  * metadata_reason `string`: Article metadata reason
  * modified_date `string`: Date when article was last modified
  * references `array`: List of references
    * items `string`
  * size `integer`: Article size
  * status `string`: Article status
  * tags `array`: List of article tags
    * items `string`
  * version `integer`: Article version
  * defined_type `integer`: Type of article identificator
  * doi `string`: DOI
  * group_id `number`: Group ID
  * id `integer`: Unique identifier for article
  * published_date `string`: Publishing date
  * thumb `string`: Thumbnail image
  * title `string`: Title of article
  * url `string`: Api endpoint for article
  * url_private_api `string`: Private Api endpoint for article
  * url_private_html `string`: Private site endpoint for article
  * url_public_api `string`: Public Api endpoint for article
  * url_public_html `string`: Public site endpoint for article

### ProjectCollaborator
* ProjectCollaborator `object`
  * name `string`: Collaborator name
  * role_name `string`: Collaborator role
  * status `string`: Status of collaborator invitation
  * user_id `integer`: Collaborator id

### ProjectCollaboratorInvite
* ProjectCollaboratorInvite `object`
  * comment `string`: Text sent when inviting the user to the project
  * email `string`: Collaborator email
  * role_name **required** `string` (values: viewer, collaborator): Role of the the collaborator inside the project
  * user_id `integer`: User id of the collaborator

### ProjectComplete
* ProjectComplete `object`
  * collaborators `array`: List of project collaborators
    * items [Collaborator](#collaborator)
  * description `string`: Project description
  * figshare_url `string`: Project public url
  * funding `string`: Project funding
  * id `integer`: Project id
  * published_date `string`: Date when project was published
  * title `string`: Project title
  * url `string`: Api endpoint

### ProjectCompletePrivate
* ProjectCompletePrivate `object`
  * collaborators `array`: List of project collaborators
    * items [Collaborator](#collaborator)
  * created_date `string`: Date when project was created
  * description `string`: Project description
  * figshare_url `string`: Project public url
  * funding `string`: Project funding
  * group_id `integer`: Group of project if any
  * modified_date `string`: Date when project was last modified
  * quota `integer`: Project quota
  * used_quota `integer`: Project used quota
  * used_quota_private `integer`: Project private quota used
  * used_quota_public `integer`: Project public quota used
  * role `string` (values: Owner, Collaborator, Viewer): Role inside this project
  * storage `string` (values: individual, group): Project storage type
  * id `integer`: Project id
  * published_date `string`: Date when project was published
  * title `string`: Project title
  * url `string`: Api endpoint

### ProjectCreate
* ProjectCreate `object`
  * description `string`: Project description
  * funding `string`: Grant number or organization(s) that funded this project. Up to 2000 characters permitted.
  * group_id `integer`: Only if project type is group.
  * title **required** `string`: The title for this project - mandatory. 3 - 500 characters.

### ProjectNote
* ProjectNote `object`
  * abstract `string`: Note Abstract - short/truncated content
  * created_date `string`: Date when note was created
  * id `integer`: Project note id
  * modified_date `string`: Date when note was last modified
  * user_id `integer`: User who wrote the note
  * user_name `string`: Username of the one who wrote the note

### ProjectNoteCreate
* ProjectNoteCreate `object`
  * text **required** `string`: Text of the note

### ProjectNotePrivate
* ProjectNotePrivate `object`
  * text `string`: Full text of note
  * abstract `string`: Note Abstract - short/truncated content
  * created_date `string`: Date when note was created
  * id `integer`: Project note id
  * modified_date `string`: Date when note was last modified
  * user_id `integer`: User who wrote the note
  * user_name `string`: Username of the one who wrote the note

### ProjectPrivate
* ProjectPrivate `object`
  * role `string` (values: Owner, Collaborator, Viewer): Role inside this project
  * storage `string` (values: individual, group): Project storage type
  * id `integer`: Project id
  * published_date `string`: Date when project was published
  * title `string`: Project title
  * url `string`: Api endpoint

### ProjectUpdate
* ProjectUpdate `object`
  * description `string`: Project description
  * funding `string`: Grant number or organization(s) that funded this project. Up to 2000 characters permitted.
  * title `string`: The title for this project - mandatory. 3 - 500 characters.

### PublicFile
* PublicFile `object`
  * computed_md5 `string`: File computed md5
  * download_url `string`: Url for file download
  * id `integer`: File id
  * is_link_only `boolean`: True if file is hosted somewhere else
  * name `string`: File name
  * size `integer`: File size
  * supplied_md5 `string`: File supplied md5

### ResponseMessage
* ResponseMessage `object`
  * message `string`: Response message text

### Role
* Role `object`
  * category `string`: Role category
  * description `string`: Role description
  * id `integer`: Role id
  * name `string`: Role name

### ShortAccount
* ShortAccount `object`
  * active `integer`: Account activity status
  * email `string`: User email
  * first_name `string`: First Name
  * id `integer`: Account id
  * institution_id `integer`: Account institution
  * institution_user_id `string`: Account institution user id
  * last_name `string`: Last Name

### UploadFilePart
* UploadFilePart `object`
  * endOffset `integer`: Indexes on byte range. zero-based and inclusive
  * locked `boolean`: When a part is being uploaded it is being locked, by setting the locked flag to true. No changes/uploads can happen on this part from other requests.
  * partNo `integer`: File part id
  * startOffset `integer`: Indexes on byte range. zero-based and inclusive
  * status `string` (values: PENDING, COMPLETE): part status

### UploadInfo
* UploadInfo `object`
  * md5 `string`: md5 provided on upload initialization
  * name `string`: name of file on upload server
  * parts `array`: Uploads parts
    * items [UploadFilePart](#uploadfilepart)
  * size `integer`: size of file in bytes
  * status `string` (values: PENDING, COMPLETED, ABORTED): Upload status
  * token `string`: token received after initializing a file upload

### User
* User `object`
  * first_name `string`: First Name
  * id `integer`: User id
  * is_active `boolean`: Account activity status
  * is_public `boolean`: Account public status
  * job_title `string`: User Job title
  * last_name `string`: Last Name
  * name `string`: Full Name
  * orcid_id `string`: Orcid associated to this User
  * url_name `string`: Name that appears in website url

### Version
* Version `object`
  * id `integer`: Version number
  * url `string`: Api endpoint for the item version


