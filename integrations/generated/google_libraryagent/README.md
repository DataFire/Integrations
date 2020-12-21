# @datafire/google_libraryagent

Client library for Library Agent API

## Installation and Usage
```bash
npm install --save @datafire/google_libraryagent
```
```js
let google_libraryagent = require('@datafire/google_libraryagent').create({
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

A simple Google Example Library API.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_libraryagent.oauthCallback({
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
google_libraryagent.oauthRefresh(null, context)
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

### libraryagent.shelves.list
Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.


```js
google_libraryagent.libraryagent.shelves.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method.
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
* output [GoogleExampleLibraryagentV1ListShelvesResponse](#googleexamplelibraryagentv1listshelvesresponse)

### libraryagent.shelves.books.get
Gets a book. Returns NOT_FOUND if the book does not exist.


```js
google_libraryagent.libraryagent.shelves.books.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the book to retrieve.
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
* output [GoogleExampleLibraryagentV1Book](#googleexamplelibraryagentv1book)

### libraryagent.shelves.books.borrow
Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.


```js
google_libraryagent.libraryagent.shelves.books.borrow({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the book to borrow.
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
* output [GoogleExampleLibraryagentV1Book](#googleexamplelibraryagentv1book)

### libraryagent.shelves.books.return
Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.


```js
google_libraryagent.libraryagent.shelves.books.return({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the book to return.
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
* output [GoogleExampleLibraryagentV1Book](#googleexamplelibraryagentv1book)

### libraryagent.shelves.books.list
Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.


```js
google_libraryagent.libraryagent.shelves.books.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the shelf whose books we'd like to list.
  * pageSize `integer`: Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method.
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
* output [GoogleExampleLibraryagentV1ListBooksResponse](#googleexamplelibraryagentv1listbooksresponse)



## Definitions

### GoogleExampleLibraryagentV1Book
* GoogleExampleLibraryagentV1Book `object`: A single book in the library.
  * author `string`: The name of the book author.
  * name `string`: The resource name of the book. Book names have the form `shelves/{shelf_id}/books/{book_id}`. The name is ignored when creating a book.
  * read `boolean`: Value indicating whether the book has been read.
  * title `string`: The title of the book.

### GoogleExampleLibraryagentV1ListBooksResponse
* GoogleExampleLibraryagentV1ListBooksResponse `object`: Response message for LibraryAgent.ListBooks.
  * books `array`: The list of books.
    * items [GoogleExampleLibraryagentV1Book](#googleexamplelibraryagentv1book)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results.

### GoogleExampleLibraryagentV1ListShelvesResponse
* GoogleExampleLibraryagentV1ListShelvesResponse `object`: Response message for LibraryAgent.ListShelves.
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to `ListShelves` method to retrieve the next page of results.
  * shelves `array`: The list of shelves.
    * items [GoogleExampleLibraryagentV1Shelf](#googleexamplelibraryagentv1shelf)

### GoogleExampleLibraryagentV1Shelf
* GoogleExampleLibraryagentV1Shelf `object`: A Shelf contains a collection of books with a theme.
  * name `string`: Output only. The resource name of the shelf. Shelf names have the form `shelves/{shelf_id}`. The name is ignored when creating a shelf.
  * theme `string`: The theme of the shelf


