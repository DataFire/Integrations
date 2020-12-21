# @datafire/ebay_sell_compliance

Client library for Compliance API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_compliance
```
```js
let ebay_sell_compliance = require('@datafire/ebay_sell_compliance').create({
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

Service for providing information to sellers about their listings being non-compliant, or at risk for becoming non-compliant, against eBay listing policies.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_compliance.oauthCallback({
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
ebay_sell_compliance.oauthRefresh(null, context)
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

### getListingViolations
This call returns specific listing violations for the supported listing compliance types. Only one compliance type can be passed in per call, and the response will include all the listing violations for this compliance type, and listing violations are grouped together by eBay listing ID. See ComplianceTypeEnum for more information on the supported listing compliance types. This method also has pagination control. Note: A maximum of 2000 listing violations will be returned in a result set. If the seller has more than 2000 listing violations, some/all of those listing violations must be corrected before additional listing violations will be retrieved. The user should pay attention to the total value in the response. If this value is '2000', it is possible that the seller has more than 2000 listing violations, but this field maxes out at 2000. Note: In a future release of this API, the seller will be able to pass in a specific eBay listing ID as a query parameter to see if this specific listing has any violations. Note: Only mocked non-compliant listing data will be returned for this call in the Sandbox environment, and not specific to the seller. However, the user can still use this mock data to experiment with the compliance type filters and pagination control.


```js
ebay_sell_compliance.getListingViolations({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: This header is required and is used to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites.
  * compliance_type `string`: A seller uses this query parameter to retrieve listing violations of a specific compliance type. Only one compliance type value should be passed in here. See ComplianceTypeEnum for more information on the compliance types that can be passed in here. If the listing_id query parameter is used, the compliance_type query parameter {if passed in) will be ignored. This is because all of a listing's policy violations {each compliance type) will be returned if a listing_id is provided. Either the listing_id or a compliance_type query parameter must be used, and if the seller only wants to view listing violations of a specific compliance type, both of these parameters can be used. Note: The listing_id query parameter is not yet available for use, so the seller does not have the ability to retrieve listing violations for one or more specific listings. Until the listing_id query parameter becomes available, the compliance_type query parameter is required with each getListingViolations call.
  * offset `string`: The integer value input into this field controls the first listing violation in the result set that will be displayed at the top of the response. The offset and limit query parameters are used to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the resulting set of violations. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. If the listing_id parameter is included in the request, this parameter will be ignored. Default: 0 {zero)
  * listing_id `string`: Note: This query parameter is not yet supported for the Compliance API. Please note that until this query parameter becomes available, the compliance_type query parameter is required with each getListingViolations call. This query parameter is used if the user wants to view all listing violations for one or more eBay listings. The string value passed into this field is the unique identifier of the listing, sometimes referred to as the Item ID. Either the listing_id or a compliance_type query parameter must be used, and if the seller only wants to view listing violations of a specific compliance type, both of these parameters can be used. Up to 50 listing IDs can be specified with this query parameter, and each unique listing ID is separated with a comma.
  * limit `string`: This query parameter is used if the user wants to set a limit on the number of listing violations that are returned on one page of the result set. This parameter is used in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the collection of listing violations that match the value set in the compliance_type parameter. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. If the listing_id parameter is included in the request, this parameter will be ignored. Default: 100 Maximum: 200
  * filter `string`: This filter allows a user to retrieve only listings that are currently out of compliance, or only listings that are at risk of becoming out of compliance. Although other filters may be added in the future, complianceState is the only supported filter type at this time. The two compliance 'states' are OUT_OF_COMPLIANCE and AT_RISK. Below is an example of how to set up this compliance state filter. Notice that the filter type and filter value are separated with a colon (:) character, and the filter value is wrapped with curly brackets. filter=complianceState:{OUT_OF_COMPLIANCE}

#### Output
* output [PagedComplianceViolationCollection](#pagedcomplianceviolationcollection)

### getListingViolationsSummary
This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.


```js
ebay_sell_compliance.getListingViolationsSummary({}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID `string`: Use this header to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites.
  * compliance_type `string`: A user passes in one or more compliance type values through this query parameter. See ComplianceTypeEnum for more information on the supported compliance types that can be passed in here. If more than one compliance type value is used, delimit these values with a comma. If no compliance type values are passed in, the listing count for all compliance types will be returned. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

#### Output
* output [ComplianceSummary](#compliancesummary)

### suppressViolation
This call suppresses a listing violation for a specific listing. Only listing violations in the AT_RISK state (returned in the violations.complianceState field of the getListingViolations call) can be suppressed. Note: At this time, the suppressViolation call only supports the suppressing of ASPECTS_ADOPTION listing violations in the AT_RISK state. In the future, it is possible that this method can be used to suppress other listing violation types. A successful call returns a http status code of 204 Success. There is no response payload. If the call is not successful, an error code will be returned stating the issue.


```js
ebay_sell_compliance.suppressViolation({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SuppressViolationRequest](#suppressviolationrequest)

#### Output
*Output schema unknown*



## Definitions

### AspectRecommendations
* AspectRecommendations `object`: This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).
  * localizedAspectName `string`: The name of the item aspect for which eBay has a recommendation. In many cases, the same item aspect(s) that are returned under the violationData array for ASPECTS_ADOPTION listing violations are also returned here Note: This name is always localized for the specified marketplace.
  * suggestedValues `array`: One or more valid values for the corresponding item aspect (in localizedAspectName) are returned here. These suggested values for the item aspect depend on the listing category and on the information specified in the listing. Sellers should confirm accuracy of the values before applying them to the listing. Please use getItemAspectsForCategory in the Taxonomy API or GetCategorySpecifics in the Trading API to get a comprehensive list of required and recommended aspects for a given category and a list of supported aspect values for each.
    * items `string`

### ComplianceDetail
* ComplianceDetail `object`: This type is used by each listing violation that is returned under the violations container.
  * complianceState `string`: The enumeration value returned in this field indicates if the listing violation is considered to be OUT_OF_COMPLIANCE with an eBay listing policy, or the listing is considered to be AT_RISK of becoming non-compliant against an eBay listing policy. Generally, OUT_OF_COMPLIANCE policy violations can prevent the seller from revising a listing until the underlying violation(s) can be remedied. When the compliance state is AT_RISK, the seller is not blocked from revising the listing, but the seller should correct the violation to prevent the listing from being blocked for revisions in the future. Note: This field is returned for most violations, but not all. In the case that this field is not returned, it can be assumed that the state of the listing violation is OUT_OF_COMPLIANCE. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceStateEnum'>eBay API documentation</a>
  * correctiveRecommendations [CorrectiveRecommendations](#correctiverecommendations)
  * message `string`: This field provides a textual summary of the listing violation. A message field is returned for each listing violation. This message will vary widely based on the compliance type and corresponding reason code.
  * reasonCode `string`: This value states the nature of the listing violation. A reasonCode value is returned for each listing violation, and each compliance type can have several reason codes and related messages. The reasonCode values vary by compliance type. The reason codes for each compliance type are summarized below. Aspects adoption The reason codes for ASPECTS_ADOPTION compliance indicate that for the given violation, aspects listed in the violationData container are either missing from the listing or they have invalid values. The reason codes specify whether the violation is for required aspects, recommended (preferred) aspects, or soon to be required aspects. MISSING_OR_INVALID_REQUIRED_ASPECTS MISSING_OR_INVALID_PREFERRED_ASPECTS MISSING_OR_INVALID_SOON_TO_BE_REQUIRED_ASPECTS HTTPS The reason codes for HTTPS compliance identify where in the listing the violation occurs. For HTTPS policy violations, the seller will just need to remove the HTTP link (or update to HTTPS) from the listing details or product details: NON_SECURE_HTTP_LINK_IN_LISTING NON_SECURE_HTTP_LINK_IN_PRODUCT Non-eBay links The reason codes for OUTSIDE_EBAY_BUYING_AND_SELLING compliance identify the specific type of data (e.g., telephone number) that violated the policy. For each of these violations, the seller will just need to revise the listing, removing this information: UNAPPROVED_DOMAIN_WEBLINK_IN_LISTING PHONE_NUMBER_IN_LISTING EMAIL_ADDRESS_IN_LISTING Product adoption Product Adoption is not enforced at this time. Product adoption conformance Product Adoption is not enforced at this time. Returns policy The only RETURNS_POLICY reason code is UNSUPPORTED_RETURNS_PERIOD. The seller will have to revise their listing (or return business policy) with a supported return period for the site and category. The GetCategoryFeatures call of the Trading API can be used to verify the supported return periods for a particular category. For most eBay categories, the minimum return period that can be stated in a Returns Policy is 14 days for domestic and international sales, but some categories require a minimum 30-day return period.
  * variation [VariationDetails](#variationdetails)
  * violationData `array`: This container provides more information about the listing violation, if applicable. The type of information that appears here will vary based on the compliance type and type of violation. For example, for ASPECTS_ADOPTION violations, this container lists the missing aspect(s) or aspect(s) with invalid values.
    * items [NameValueList](#namevaluelist)

### ComplianceSummary
* ComplianceSummary `object`: This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
  * violationSummaries `array`: This container is an array of one or more policy violation counts. A policy violation count is returned for each unique eBay marketplace and compliance type violation. As long as there is at least one non-compliant listing for the specified compliance type(s), this container will be returned. If no non-compliant listings are found for the specified compliance type(s), an HTTP status code of 204 No Content is returned, and there is no response body.
    * items [ComplianceSummaryInfo](#compliancesummaryinfo)

### ComplianceSummaryInfo
* ComplianceSummaryInfo `object`: This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
  * complianceType `string`: This enumeration value indicates the type of compliance. See ComplianceTypeEnum for more information on each compliance type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>
  * listingCount `integer`: This integer value indicates the number of eBay listings that are currently violating the compliance type indicated in the complianceType field, for the eBay marketplace indicated in the marketplaceId field.
  * marketplaceId `string`: This enumeration value indicates the eBay marketplace where the listing violations exist. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/bas:MarketplaceIdEnum'>eBay API documentation</a>

### ComplianceViolation
* ComplianceViolation `object`: This type is used by each listing violation that is returned under the listingViolations container.
  * complianceType `string`: This enumeration value indicates the compliance type of listing violation. See ComplianceTypeEnum for more information on each compliance type. This will always be returned for each listing violation that is found. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>
  * listingId `string`: The unique identifier of the eBay listing that currently has the corresponding listing violation{s). This field will always be returned for each listing that has one or more violations.
  * offerId `string`: Note: This field is for future use, and will not be returned, even for listings created through the Inventory API. The unique identifier of the offer. This field is only applicable and returned for listings that were created through the Inventory API. To convert an Inventory Item object into an eBay listing, an Offer object must be created and published.
  * sku `string`: The seller-defined SKU value of the product in the listing with the violation{s). This field is only returned if defined in the listing. SKU values are optional in listings except when creating listings using the Inventory API model.
  * violations `array`: This container consists of an array of one or more listing violations applicable to the eBay listing specified in the listingId field. This array is returned for each eBay listing that has one or more violations. For each returned violation, the fields that are returned and the details that are given will depend on the listing violation.
    * items [ComplianceDetail](#compliancedetail)

### CorrectiveRecommendations
* CorrectiveRecommendations `object`: This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
  * aspectRecommendations `array`: This container is returned for ASPECTS_ADOPTION violations if eBay has found one or more item aspect name-value pairs that may be appropriate for the seller's product. In many cases, the missing or invalid item aspect(s) shown under the corresponding violationData array, will also show up under this array with suggested value(s).
    * items [AspectRecommendations](#aspectrecommendations)
  * productRecommendation [ProductRecommendation](#productrecommendation)

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### NameValueList
* NameValueList `object`: This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
  * name `string`: This is the name of the variation aspect, or the name of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.
  * value `string`: This is the value of the variation aspect (in name field), or the value of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.

### PagedComplianceViolationCollection
* PagedComplianceViolationCollection `object`: This type is the base response type of the getListingViolations method.
  * href `string`: The URI of the getListingViolations call request that produced the current page of the result set.
  * limit `integer`: The maximum number of listing violations returned per page of the result set. The limit and offset query parameters are used to control the pagination of the output. Note: If this is the last or only page in the result set, it may contain fewer listing violations than the limit value. To determine the number of pages in the result set, divide this value into the value of total and round up to the next integer. Default: 50 Max: 200
  * listingViolations `array`: An array of listing violations that match the criteria in the call request, including pagination control {if set). As long as there is at least one listing violation that matches the input criteria, this container will be returned. If no listing violations are found for the seller, an HTTP status code of 204 No Content is returned, and there is no response body.
    * items [ComplianceViolation](#complianceviolation)
  * next `string`: The getListingViolations call URI to use to view the next page of the result set. For example, the following URI returns listing violations 21 thru 30 from the collection of policy violations: path/listing_violation?limit=10&amp;offset=20 This field is only returned if an additional page of listing violations exists.
  * offset `integer`: This integer value shows the offset of the current page of results. The offset value controls the first listing violation in the result set that will be displayed at the top of the response. The offset and limit query parameters are used to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the resulting collection of violations. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. Default: 0 {zero)
  * prev `string`: The getListingViolations call URI to use to view the previous page of the result set. For example, the following URI returns listing violations 1 thru 10 from the collection of policy violations: path/listing_violation?limit=10&amp;offset=0 This field is only returned if an previous page of listing violations exists.
  * total `integer`: The total number of listing violations in the result set. If this value is higher than the limit value, there are multiple pages in the result set to view.

### ProductRecommendation
* ProductRecommendation `object`: This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
  * epid `string`: This field will return the eBay Product ID {ePID) of an eBay Catalog product that eBay recommends that the seller use to make their listing compliant. Note: Product Adoption is not enforced at this time. Product Adoption violations are no longer returned.

### SuppressViolationRequest
* SuppressViolationRequest `object`: This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
  * complianceType `string`: The compliance type of the listing violation to suppress is specified in this field. The compliance type for each listing violation is found in the complianceType field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so ASPECTS_ADOPTION is currently the only supported value for this field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>
  * listingId `string`: The unique identifier of the listing with the violation(s) is specified in this field. The unique identifier of the listing with the listing violation(s) is found in the listingId field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so the listing specified in this field should be a listing with an ASPECTS_ADOPTION violation in the 'at-risk' state.

### VariationDetails
* VariationDetails `object`: This type is used to identify the product variation that has the listing violation.
  * sku `string`: The seller-defined SKU value of the variation within the multiple-variation listing with the violation{s). This field is only returned if a seller-defined SKU value is defined for the variation. SKU values are optional in listing except when creating listings using the Inventory API.
  * variationAspects `array`: An array of one or more variation aspects that define a variation within a multiple-variation listing. The aspect{s) returned here define the individual variation, because these aspects will differ for each variation. Common varying aspects include color and size.
    * items [NameValueList](#namevaluelist)


