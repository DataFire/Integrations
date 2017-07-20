# @datafire/google_slides

Client library for Google Slides

## Installation and Usage
```bash
npm install --save datafire @datafire/google_slides
```

```js
let datafire = require('datafire');
let google_slides = require('@datafire/google_slides').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_slides: account,
  }
})


google_slides.presentations.create({}, context).then(data => {
  console.log(data);
})
```

## Description
An API for creating and editing Google Slides presentations.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_slides.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_slides.oauthRefresh(null, context)
```


### presentations.create
Creates a new presentation using the title given in the request. Other
fields in the request are ignored.
Returns the created presentation.


```js
google_slides.presentations.create({}, context)
```


### presentations.get
Gets the latest version of the specified presentation.


```js
google_slides.presentations.get({
  "presentationId": ""
}, context)
```

#### Parameters
* presentationId (string) **required** - The ID of the presentation to retrieve.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### presentations.pages.get
Gets the latest version of the specified page in the presentation.


```js
google_slides.presentations.pages.get({
  "presentationId": "",
  "pageObjectId": ""
}, context)
```

#### Parameters
* presentationId (string) **required** - The ID of the presentation to retrieve.
* pageObjectId (string) **required** - The object ID of the page to retrieve.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### presentations.pages.getThumbnail
Generates a thumbnail of the latest version of the specified page in the
presentation and returns a URL to the thumbnail image.


```js
google_slides.presentations.pages.getThumbnail({
  "pageObjectId": "",
  "presentationId": ""
}, context)
```

#### Parameters
* pageObjectId (string) **required** - The object ID of the page whose thumbnail to retrieve.
* presentationId (string) **required** - The ID of the presentation to retrieve.
* thumbnailProperties.mimeType (string) - The optional mime type of the thumbnail image.
* thumbnailProperties.thumbnailSize (string) - The optional thumbnail image size.
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

### presentations.batchUpdate
Applies one or more updates to the presentation.

Each request is validated before
being applied. If any request is not valid, then the entire request will
fail and nothing will be applied.

Some requests have replies to
give you some information about how they are applied. Other requests do
not need to return information; these each return an empty reply.
The order of replies matches that of the requests.

For example, suppose you call batchUpdate with four updates, and only the
third one returns information. The response would have two empty replies:
the reply to the third request, and another empty reply, in that order.

Because other users may be editing the presentation, the presentation
might not exactly reflect your changes: your changes may
be altered with respect to collaborator changes. If there are no
collaborators, the presentation should reflect your changes. In any case,
the updates in your request are guaranteed to be applied together
atomically.


```js
google_slides.presentations.batchUpdate({
  "presentationId": ""
}, context)
```

#### Parameters
* presentationId (string) **required** - The presentation to apply the updates to.
* body (object) - Request message for PresentationsService.BatchUpdatePresentation.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

