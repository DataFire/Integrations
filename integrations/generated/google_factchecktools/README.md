# @datafire/google_factchecktools

Client library for Fact Check Tools API

## Installation and Usage
```bash
npm install --save @datafire/google_factchecktools
```
```js
let google_factchecktools = require('@datafire/google_factchecktools').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_factchecktools.oauthCallback({
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
google_factchecktools.oauthRefresh(null, context)
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

### factchecktools.claims.search
Search through fact-checked claims.


```js
google_factchecktools.factchecktools.claims.search({}, context)
```

#### Input
* input `object`
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
  * maxAgeDays `integer`: The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
  * offset `integer`: An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
  * pageSize `integer`: The pagination size. We will return up to that many results. Defaults to 10 if not set.
  * pageToken `string`: The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
  * query `string`: Textual query string. Required unless `review_publisher_site_filter` is specified.
  * reviewPublisherSiteFilter `string`: The review publisher site to filter results by, e.g. nytimes.com.
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
* output [GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse](#googlefactcheckingfactchecktoolsv1alpha1factcheckedclaimsearchresponse)

### factchecktools.pages.list
List the `ClaimReview` markup pages for a specific URL or for an organization.


```js
google_factchecktools.factchecktools.pages.list({}, context)
```

#### Input
* input `object`
  * offset `integer`: An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
  * organization `string`: The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.
  * pageSize `integer`: The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.
  * pageToken `string`: The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
  * url `string`: The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.
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
* output [GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse](#googlefactcheckingfactchecktoolsv1alpha1listclaimreviewmarkuppagesresponse)

### factchecktools.pages.create
Create `ClaimReview` markup on a page.


```js
google_factchecktools.factchecktools.pages.create({}, context)
```

#### Input
* input `object`
  * body [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)
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
* output [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)

### factchecktools.pages.delete
Delete all `ClaimReview` markup on a page.


```js
google_factchecktools.factchecktools.pages.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the resource to delete, in the form of `pages/{page_id}`.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### factchecktools.pages.get
Get all `ClaimReview` markup on a page.


```js
google_factchecktools.factchecktools.pages.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the resource to get, in the form of `pages/{page_id}`.
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
* output [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)

### factchecktools.pages.update
Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.


```js
google_factchecktools.factchecktools.pages.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
  * body [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)
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
* output [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)



## Definitions

### GoogleFactcheckingFactchecktoolsV1alpha1Claim
* GoogleFactcheckingFactchecktoolsV1alpha1Claim `object`: Information about the claim.
  * claimDate `string`: The date that the claim was made.
  * claimReview `array`: One or more reviews of this claim (namely, a fact-checking article).
    * items [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview](#googlefactcheckingfactchecktoolsv1alpha1claimreview)
  * claimant `string`: A person or organization stating the claim. For instance, "John Doe".
  * text `string`: The claim text. For instance, "Crime has doubled in the last 2 years."

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor `object`: Information about the claim author.
  * imageUrl `string`: Corresponds to `ClaimReview.itemReviewed.author.image`.
  * jobTitle `string`: Corresponds to `ClaimReview.itemReviewed.author.jobTitle`.
  * name `string`: A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`.
  * sameAs `string`: Corresponds to `ClaimReview.itemReviewed.author.sameAs`.

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating `object`: Information about the claim rating.
  * bestRating `integer`: For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.
  * imageUrl `string`: Corresponds to `ClaimReview.reviewRating.image`.
  * ratingExplanation `string`: Corresponds to `ClaimReview.reviewRating.ratingExplanation`.
  * ratingValue `integer`: A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.
  * textualRating `string`: The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`.
  * worstRating `integer`: For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview `object`: Information about a claim review.
  * languageCode `string`: The language this review was written in. For instance, "en" or "de".
  * publisher [GoogleFactcheckingFactchecktoolsV1alpha1Publisher](#googlefactcheckingfactchecktoolsv1alpha1publisher)
  * reviewDate `string`: The date the claim was reviewed.
  * textualRating `string`: Textual rating. For instance, "Mostly false".
  * title `string`: The title of this claim review, if it can be determined.
  * url `string`: The URL of this claim review.

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor `object`: Information about the claim review author.
  * imageUrl `string`: Corresponds to `ClaimReview.author.image`.
  * name `string`: Name of the organization that is publishing the fact check. Corresponds to `ClaimReview.author.name`.

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup `object`: Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
  * claimAppearances `array`: A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`. Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.
    * items `string`
  * claimAuthor [GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor](#googlefactcheckingfactchecktoolsv1alpha1claimauthor)
  * claimDate `string`: The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`.
  * claimFirstAppearance `string`: A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.
  * claimLocation `string`: The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`.
  * claimReviewed `string`: A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`.
  * rating [GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating](#googlefactcheckingfactchecktoolsv1alpha1claimrating)
  * url `string`: This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url`

### GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
* GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage `object`: Holds one or more instances of `ClaimReview` markup for a webpage.
  * claimReviewAuthor [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor](#googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor)
  * claimReviewMarkups `array`: A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.
    * items [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup)
  * name `string`: The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
  * pageUrl `string`: The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`
  * publishDate `string`: The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`
  * versionId `string`: The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.

### GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
* GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse `object`: Response from searching fact-checked claims.
  * claims `array`: The list of claims and all of their associated information.
    * items [GoogleFactcheckingFactchecktoolsV1alpha1Claim](#googlefactcheckingfactchecktoolsv1alpha1claim)
  * nextPageToken `string`: The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.

### GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
* GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse `object`: Response from listing `ClaimReview` markup.
  * claimReviewMarkupPages `array`: The result list of pages of `ClaimReview` markup.
    * items [GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)
  * nextPageToken `string`: The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.

### GoogleFactcheckingFactchecktoolsV1alpha1Publisher
* GoogleFactcheckingFactchecktoolsV1alpha1Publisher `object`: Information about the publisher.
  * name `string`: The name of this publisher. For instance, "Awesome Fact Checks".
  * site `string`: Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.


