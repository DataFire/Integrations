# @datafire/google_recommender

Client library for Recommender API

## Installation and Usage
```bash
npm install --save @datafire/google_recommender
```
```js
let google_recommender = require('@datafire/google_recommender').create({
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
google_recommender.oauthCallback({
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
google_recommender.oauthRefresh(null, context)
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

### recommender.projects.locations.recommenders.recommendations.get
Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.


```js
google_recommender.recommender.projects.locations.recommenders.recommendations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the recommendation.
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
* output [GoogleCloudRecommenderV1Recommendation](#googlecloudrecommenderv1recommendation)

### recommender.projects.locations.insightTypes.insights.markAccepted
Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.


```js
google_recommender.recommender.projects.locations.insightTypes.insights.markAccepted({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the insight.
  * body [GoogleCloudRecommenderV1MarkInsightAcceptedRequest](#googlecloudrecommenderv1markinsightacceptedrequest)
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
* output [GoogleCloudRecommenderV1Insight](#googlecloudrecommenderv1insight)

### recommender.projects.locations.recommenders.recommendations.markClaimed
Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.


```js
google_recommender.recommender.projects.locations.recommenders.recommendations.markClaimed({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the recommendation.
  * body [GoogleCloudRecommenderV1MarkRecommendationClaimedRequest](#googlecloudrecommenderv1markrecommendationclaimedrequest)
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
* output [GoogleCloudRecommenderV1Recommendation](#googlecloudrecommenderv1recommendation)

### recommender.projects.locations.recommenders.recommendations.markFailed
Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.


```js
google_recommender.recommender.projects.locations.recommenders.recommendations.markFailed({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the recommendation.
  * body [GoogleCloudRecommenderV1MarkRecommendationFailedRequest](#googlecloudrecommenderv1markrecommendationfailedrequest)
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
* output [GoogleCloudRecommenderV1Recommendation](#googlecloudrecommenderv1recommendation)

### recommender.projects.locations.recommenders.recommendations.markSucceeded
Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.


```js
google_recommender.recommender.projects.locations.recommenders.recommendations.markSucceeded({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the recommendation.
  * body [GoogleCloudRecommenderV1MarkRecommendationSucceededRequest](#googlecloudrecommenderv1markrecommendationsucceededrequest)
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
* output [GoogleCloudRecommenderV1Recommendation](#googlecloudrecommenderv1recommendation)

### recommender.projects.locations.insightTypes.insights.list
Lists insights for a Cloud project. Requires the recommender.*.list IAM permission for the specified insight type.


```js
google_recommender.recommender.projects.locations.insightTypes.insights.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The container resource on which to execute the request. Acceptable formats: 1. "projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]", LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.)
  * filter `string`: Optional. Filter expression to restrict the insights returned. Supported filter fields: state Eg: `state:"DISMISSED" or state:"ACTIVE"
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
  * pageToken `string`: Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
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
* output [GoogleCloudRecommenderV1ListInsightsResponse](#googlecloudrecommenderv1listinsightsresponse)

### recommender.projects.locations.recommenders.recommendations.list
Lists recommendations for a Cloud project. Requires the recommender.*.list IAM permission for the specified recommender.


```js
google_recommender.recommender.projects.locations.recommenders.recommendations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The container resource on which to execute the request. Acceptable formats: 1. "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]", LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
  * filter `string`: Filter expression to restrict the recommendations returned. Supported filter fields: state_info.state Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
  * pageToken `string`: Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
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
* output [GoogleCloudRecommenderV1ListRecommendationsResponse](#googlecloudrecommenderv1listrecommendationsresponse)



## Definitions

### GoogleCloudRecommenderV1CostProjection
* GoogleCloudRecommenderV1CostProjection `object`: Contains metadata about how much money a recommendation can save or incur.
  * cost [GoogleTypeMoney](#googletypemoney)
  * duration `string`: Duration for which this cost applies.

### GoogleCloudRecommenderV1Impact
* GoogleCloudRecommenderV1Impact `object`: Contains the impact a recommendation can have for a given category.
  * category `string` (values: CATEGORY_UNSPECIFIED, COST, SECURITY, PERFORMANCE, MANAGEABILITY): Category that is being targeted.
  * costProjection [GoogleCloudRecommenderV1CostProjection](#googlecloudrecommenderv1costprojection)

### GoogleCloudRecommenderV1Insight
* GoogleCloudRecommenderV1Insight `object`: An insight along with the information used to derive the insight. The insight may have associated recomendations as well.
  * associatedRecommendations `array`: Recommendations derived from this insight.
    * items [GoogleCloudRecommenderV1InsightRecommendationReference](#googlecloudrecommenderv1insightrecommendationreference)
  * category `string` (values: CATEGORY_UNSPECIFIED, COST, SECURITY, PERFORMANCE, MANAGEABILITY): Category being targeted by the insight.
  * content `object`: A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"
  * description `string`: Free-form human readable summary in English. The maximum length is 500 characters.
  * etag `string`: Fingerprint of the Insight. Provides optimistic locking when updating states.
  * insightSubtype `string`: Insight subtype. Insight content schema will be stable for a given subtype.
  * lastRefreshTime `string`: Timestamp of the latest data used to generate the insight.
  * name `string`: Name of the insight.
  * observationPeriod `string`: Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).
  * stateInfo [GoogleCloudRecommenderV1InsightStateInfo](#googlecloudrecommenderv1insightstateinfo)
  * targetResources `array`: Fully qualified resource names that this insight is targeting.
    * items `string`

### GoogleCloudRecommenderV1InsightRecommendationReference
* GoogleCloudRecommenderV1InsightRecommendationReference `object`: Reference to an associated recommendation.
  * recommendation `string`: Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]

### GoogleCloudRecommenderV1InsightStateInfo
* GoogleCloudRecommenderV1InsightStateInfo `object`: Information related to insight state.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, ACCEPTED, DISMISSED): Insight state.
  * stateMetadata `object`: A map of metadata for the state, provided by user or automations systems.

### GoogleCloudRecommenderV1ListInsightsResponse
* GoogleCloudRecommenderV1ListInsightsResponse `object`: Response to the `ListInsights` method.
  * insights `array`: The set of insights for the `parent` resource.
    * items [GoogleCloudRecommenderV1Insight](#googlecloudrecommenderv1insight)
  * nextPageToken `string`: A token that can be used to request the next page of results. This field is empty if there are no additional results.

### GoogleCloudRecommenderV1ListRecommendationsResponse
* GoogleCloudRecommenderV1ListRecommendationsResponse `object`: Response to the `ListRecommendations` method.
  * nextPageToken `string`: A token that can be used to request the next page of results. This field is empty if there are no additional results.
  * recommendations `array`: The set of recommendations for the `parent` resource.
    * items [GoogleCloudRecommenderV1Recommendation](#googlecloudrecommenderv1recommendation)

### GoogleCloudRecommenderV1MarkInsightAcceptedRequest
* GoogleCloudRecommenderV1MarkInsightAcceptedRequest `object`: Request for the `MarkInsightAccepted` method.
  * etag `string`: Required. Fingerprint of the Insight. Provides optimistic locking.
  * stateMetadata `object`: Optional. State properties user wish to include with this state. Full replace of the current state_metadata.

### GoogleCloudRecommenderV1MarkRecommendationClaimedRequest
* GoogleCloudRecommenderV1MarkRecommendationClaimedRequest `object`: Request for the `MarkRecommendationClaimed` Method.
  * etag `string`: Required. Fingerprint of the Recommendation. Provides optimistic locking.
  * stateMetadata `object`: State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex /^a-z0-9{0,62}$/. Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.

### GoogleCloudRecommenderV1MarkRecommendationFailedRequest
* GoogleCloudRecommenderV1MarkRecommendationFailedRequest `object`: Request for the `MarkRecommendationFailed` Method.
  * etag `string`: Required. Fingerprint of the Recommendation. Provides optimistic locking.
  * stateMetadata `object`: State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex /^a-z0-9{0,62}$/. Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.

### GoogleCloudRecommenderV1MarkRecommendationSucceededRequest
* GoogleCloudRecommenderV1MarkRecommendationSucceededRequest `object`: Request for the `MarkRecommendationSucceeded` Method.
  * etag `string`: Required. Fingerprint of the Recommendation. Provides optimistic locking.
  * stateMetadata `object`: State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex /^a-z0-9{0,62}$/. Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.

### GoogleCloudRecommenderV1Operation
* GoogleCloudRecommenderV1Operation `object`: Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
  * action `string`: Type of this operation. Contains one of 'and', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated.
  * path `string`: Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.
  * pathFilters `object`: Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: { "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 } * Example: { "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null } * Example: { "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] } When both path_filters and path_value_matchers are set, an implicit AND must be performed.
  * pathValueMatchers `object`: Similar to path_filters, this contains set of filters to apply if `path` field referes to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.
  * resource `string`: Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.
  * resourceType `string`: Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance
  * sourcePath `string`: Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types.
  * sourceResource `string`: Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`.
  * valueMatcher [GoogleCloudRecommenderV1ValueMatcher](#googlecloudrecommenderv1valuematcher)

### GoogleCloudRecommenderV1OperationGroup
* GoogleCloudRecommenderV1OperationGroup `object`: Group of operations that need to be performed atomically.
  * operations `array`: List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.
    * items [GoogleCloudRecommenderV1Operation](#googlecloudrecommenderv1operation)

### GoogleCloudRecommenderV1Recommendation
* GoogleCloudRecommenderV1Recommendation `object`: A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
  * additionalImpact `array`: Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.
    * items [GoogleCloudRecommenderV1Impact](#googlecloudrecommenderv1impact)
  * associatedInsights `array`: Insights that led to this recommendation.
    * items [GoogleCloudRecommenderV1RecommendationInsightReference](#googlecloudrecommenderv1recommendationinsightreference)
  * content [GoogleCloudRecommenderV1RecommendationContent](#googlecloudrecommenderv1recommendationcontent)
  * description `string`: Free-form human readable summary in English. The maximum length is 500 characters.
  * etag `string`: Fingerprint of the Recommendation. Provides optimistic locking when updating states.
  * lastRefreshTime `string`: Last time this recommendation was refreshed by the system that created it in the first place.
  * name `string`: Name of recommendation.
  * primaryImpact [GoogleCloudRecommenderV1Impact](#googlecloudrecommenderv1impact)
  * recommenderSubtype `string`: Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"
  * stateInfo [GoogleCloudRecommenderV1RecommendationStateInfo](#googlecloudrecommenderv1recommendationstateinfo)

### GoogleCloudRecommenderV1RecommendationContent
* GoogleCloudRecommenderV1RecommendationContent `object`: Contains what resources are changing and how they are changing.
  * operationGroups `array`: Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.
    * items [GoogleCloudRecommenderV1OperationGroup](#googlecloudrecommenderv1operationgroup)

### GoogleCloudRecommenderV1RecommendationInsightReference
* GoogleCloudRecommenderV1RecommendationInsightReference `object`: Reference to an associated insight.
  * insight `string`: Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID]

### GoogleCloudRecommenderV1RecommendationStateInfo
* GoogleCloudRecommenderV1RecommendationStateInfo `object`: Information for state. Contains state and metadata.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, CLAIMED, SUCCEEDED, FAILED, DISMISSED): The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.
  * stateMetadata `object`: A map of metadata for the state, provided by user or automations systems.

### GoogleCloudRecommenderV1ValueMatcher
* GoogleCloudRecommenderV1ValueMatcher `object`: Contains various matching options for values for a GCP resource field.
  * matchesPattern `string`: To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch

### GoogleTypeMoney
* GoogleTypeMoney `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The three-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
  * units `string`: The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.


