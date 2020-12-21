# @datafire/mastercard_personalizedloyaltyoffers

Client library for Personalized Offers

## Installation and Usage
```bash
npm install --save @datafire/mastercard_personalizedloyaltyoffers
```
```js
let mastercard_personalizedloyaltyoffers = require('@datafire/mastercard_personalizedloyaltyoffers').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides content for financial instutions participating in Mastercard Personalized Offers to use in online and mobile banking applications for cardholders.

## Actions

### activatestatementcreditoffer.post
This resource is used to make a statement credit offer available for redemption.



```js
mastercard_personalizedloyaltyoffers.activatestatementcreditoffer.post({
  "FId": "",
  "UserToken": "",
  "OfferId": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * OfferId **required** `string`: System-wide identifier for the campaign, not intended for end-user display.

#### Output
* output [ActivateOfferResponse](#activateofferresponse)

### matchedoffers.get
This resource returns offers that are available to the user and conform to the search criteria (if specified).



```js
mastercard_personalizedloyaltyoffers.matchedoffers.get({
  "FId": "",
  "UserToken": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * Lang `string`: When utilized with a multi-lingual implementation, may be the tongue and country of the user in ISO 639-1, underscore, ISO 3166-1 alpha-2 format.
  * MerchantName `string`: Fuzzy term to search retailers with offers for the user. In general, searching of Matched Offers is not advised as users generally have a modest selection of highly relevant promotions.
  * Category `string`: Offer Categories.
  * OfferType `string`: The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase.
  * PageNumber `integer`: Segment of offers to return.
  * ItemsPerPage `integer`: Segment size of offer to be returned. Default is 25.

#### Output
* output [MatchedOffersResponse](#matchedoffersresponse)

### offerdetails.get
This resource returns extended information for the requested offer, typically used to display a detail view.



```js
mastercard_personalizedloyaltyoffers.offerdetails.get({
  "FId": "",
  "UserToken": "",
  "OfferId": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * OfferId **required** `string`: System-wide identifier for the campaign, not intended for end-user display.

#### Output
* output [OfferDetailsResponse](#offerdetailsresponse)

### redeemedoffers.get
This resource returns offers that have been fulfilled by the user.



```js
mastercard_personalizedloyaltyoffers.redeemedoffers.get({
  "FId": "",
  "UserToken": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * Lang `string`: When utilized with a multi-lingual implementation, may be the tongue and country of the user in ISO 639-1, underscore, ISO 3166-1 alpha-2 format.
  * PageNumber `integer`: Segment of offers to return.
  * ItemsPerPage `integer`: Segment size of offer to be returned. Default is 25.

#### Output
* output [RedeemedOffersResponse](#redeemedoffersresponse)

### statementcreditactivationdetail.get
This resource returns extended information about the specified activated postpaid credit offer.



```js
mastercard_personalizedloyaltyoffers.statementcreditactivationdetail.get({
  "FId": "",
  "UserToken": "",
  "ActivationId": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * ActivationId **required** `string`: Distinct identifier for the offer being available for redemption by the user as returned by Activate Statement Credit Offer or Redeemed Offers, not intended for end-user display.

#### Output
* output [StatementCreditActivationResponse](#statementcreditactivationresponse)

### userfeedback.post
This resource allows a user to provide a thumbs-up or a thumbs-down rating of the specified offer. Offer matches that are disliked will be supressed from the results of future calls to Matched Offers.



```js
mastercard_personalizedloyaltyoffers.userfeedback.post({
  "FId": "",
  "UserToken": "",
  "OfferId": "",
  "Feedback": 0
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.
  * OfferId **required** `string`: System-wide identifier for the campaign, not intended for end-user display.
  * Feedback **required** `integer`: User response to the offer. 0- Dislike offer. 1- Like offer.

#### Output
* output [UserFeedbackResponse](#userfeedbackresponse)

### usersavings.get
This resource returns the accumulated and potential savings for a Personalized Offers user.



```js
mastercard_personalizedloyaltyoffers.usersavings.get({
  "FId": "",
  "UserToken": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * UserToken **required** `string`: Session identifier as returned by the UserToken resource.

#### Output
* output [UserSavingsResponse](#usersavingsresponse)

### usertoken.get
This resource creates the user session. It must be called prior to any other API calls for the specified user. The Token value does not expire.



```js
mastercard_personalizedloyaltyoffers.usertoken.get({
  "FId": "",
  "AuthInfo": ""
}, context)
```

#### Input
* input `object`
  * FId **required** `string`: Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
  * AuthInfo **required** `string`: Authorization Information. AES 128-bit encrypted concatenation of "User ID as specified in enrollment:FI ID as provided by Mastercard:current Unix time". Key exchange and establishment of maintenance procedures occur during implementation.

#### Output
* output [UserTokenResponse](#usertokenresponse)



## Definitions

### ActivateOfferResponse
* ActivateOfferResponse `object`
  * Response [ActivateResponse](#activateresponse)

### ActivateResponse
* ActivateResponse `object`
  * ScActivation [ScActivation](#scactivation)
  * Status [Status](#status)

### ActivationResponse
* ActivationResponse `object`
  * ScActivation [ScActivation](#scactivation)
  * Status [Status](#status)

### DetailPostpaidCreditOffer
* DetailPostpaidCreditOffer `object`
  * CashBack `string`: Value of POSTPAIDCREDIT deal redemption.
  * CurrencyCode `string`: ISO 4217 code in which the redeeming transaction must be made to qualify for the offer.
  * MaxCashback `string`: The most cash back which a user can earn for the offer.
  * MinTransactionAmountToRedeem `string`: The smallest purchase amount that will qualify for redemption.
  * StatementCreditType `string`: Calculation kind of the redemption value. SPEND_CASH/VISIT_CASH- fixed value. SPEND_PERCENTAGE/VISIT_PERCENTAGE- share value.
  * VisitThreshold `string`: The number of purchases required to qualify for redemption.

### Error
* Error `object`
  * ReasonCode `string`: This will identify the reason for the error.
  * Source `string`: This is the unique identifier that attempts to define the field in error when available.  If a specific field can't be identified System will be returned.

### ErrorResponse
* ErrorResponse `object`
  * Errors [Errors](#errors)

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)

### FeedbackResponse
* FeedbackResponse `object`
  * Status [Status](#status)
  * UserFeedback [UserFeedback](#userfeedback)

### Items
* Items `object`
  * MatchedOffer [MatchedOffer](#matchedoffer)

### MatchedOffer
* MatchedOffer `object`
  * ActiveSc `string`: ACTIVATED_STATEMENT_CREDIT- ready for redemption by the user. AVAILABLE- requires call to Activate Statement Credit Offer to make ready for redemption.
  * CurrencyCode `string`: ISO 4217 code in which the redeeming transaction must be made to qualify for the offer.
  * Discount `string`: The markdown represented by the offer, in absolute value or percentage.
  * DiscountType `string`: The kind of markdown represented by the offer. ABSOLUTE- fixed amount. PERCENTAGE- share of purchase.
  * EventEndDate `string`: Last day that redemption can be made.
  * EventStartDate `string`: First day that redemption can be made by any user, may not apply to the specified user.
  * Headline `string`: Brief details about the deal.
  * Language `string`: Tongue of offer display text.
  * Merchant [Merchant](#merchant)
  * MerchantImageURL `string`: Square picture of the retailer logo.
  * OfferId `string`: System-wide identifier for the campaign, not intended for end-user display.
  * OfferSource `string`: Platform that made the offer available, not intended for end-user display.
  * OfferType `string`: The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase.
  * Price `string`: Reserved for future use.
  * RedemptionMode `string`: Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER.
  * ShortDescription `string`: Summary of the deal, typically displayed beneath the headline in a list view.

### MatchedOffersResponse
* MatchedOffersResponse `object`
  * Response [MatchedResponse](#matchedresponse)

### MatchedResponse
* MatchedResponse `object`
  * CurrentPage `integer`: Count of current offer return segment.
  * Items [Items](#items)
  * ItemsPerPage `integer`: Count of offers in the returned segment.
  * NumberOfPages `integer`: Count of offer return segments.
  * Status [Status](#status)
  * TotalCount `integer`: Count of all offers available for criteria.

### Merchant
* Merchant `object`
  * Category `string`: The type of retailer to which the offer applies.
  * MerchantDistance `string`: Reserved for future use.
  * Name `string`: Display name for the retailer to which the offer applies.
  * StoreLocatorUrl `string`: Web page where retailer outlets can be found.
  * WebsiteUrl `string`: The internet address of the retailer.

### OfferDetails
* OfferDetails `object`
  * CurrencyCode `string`: ISO 4217 code in which the redeeming transaction must be made to qualify for the offer.
  * DetailPostpaidCreditOffer [DetailPostpaidCreditOffer](#detailpostpaidcreditoffer)
  * EventEndDate `string`: Last day that redemption can be made.
  * EventStartDate `string`: First day that redemption can be made by any user, may not apply to the specified user.
  * Headline `string`: Brief details about the deal.
  * Language `string`: Tongue of offer display text.
  * LongDescription `string`: Explanation of the deal, typically displayed beneath the headline in a detail view. Often the same as the ShortDescription.
  * Merchant [Merchant](#merchant)
  * OfferDisplay [OfferDisplay](#offerdisplay)
  * OfferId `string`: System-wide identifier for the campaign, not intended for end-user display.
  * OfferMedia [OfferMedia](#offermedia)
  * OfferSource `string`: Platform that made the offer available, not intended for end-user display.
  * OfferType `string`: The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase.
  * RedemptionMode `string`: Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER.
  * RedemptionType `string`: Where a purchase may be made to qualify for the offer- INSTORE, ONLINE, or ONLINE-INSTORE (either).
  * ShortDescription `string`: Summary of the deal, typically displayed beneath the headline in a list view.

### OfferDetailsResponse
* OfferDetailsResponse `object`
  * Response [OfferResponse](#offerresponse)

### OfferDisplay
* OfferDisplay `object`
  * DetailedTerms `string`: Conditions required for successful redemption of the offer.

### OfferImages
* OfferImages `object`
  * AltText `string`: Description of a picture or graphic that may be displayed along with the offer information.
  * Description `string`: Verbal details of the image, may be used for accessiblity.
  * ImageUrl `string`: A picture or graphic that may be displayed along with the offer information.

### OfferMedia
* OfferMedia `object`
  * OfferImages `array`
    * items [OfferImages](#offerimages)

### OfferResponse
* OfferResponse `object`
  * OfferDetails [OfferDetails](#offerdetails)
  * Status [Status](#status)

### PrepaidOfferSavings
* PrepaidOfferSavings `object`
  * AmountSaved `string`: Deprecated.
  * NumAvailable `string`: Deprecated.
  * NumPurchased `string`: Deprecated.
  * PotentialSavings `string`: Deprecated.

### RedeemedOffersResponse
* RedeemedOffersResponse `object`
  * Response [ReedemedResponse](#reedemedresponse)

### RedemedItems
* RedemedItems `object`
  * RedemedOffer [RedemedOffer](#redemedoffer)

### RedemedOffer
* RedemedOffer `object`
  * ActivationDate `string`: Day on which the offer became ready for redemption.
  * ActivationId `string`: Distinct identifier for the offer being available for redemption by the user, not intended for end-user display.
  * CurrencyCode `string`: ISO 4217 code in which the redeeming transaction must be made to qualify for the offer.
  * DetailPostpaidCreditOffer [DetailPostpaidCreditOffer](#detailpostpaidcreditoffer)
  * EventEndDate `string`: Last day that redemption can be made.
  * EventStartDate `string`: First day that redemption can be made.
  * Headline `string`: Brief details about the deal.
  * Language `string`: Tongue of offer display text.
  * LinkoutUrl `string`: Deprecated, disregard.
  * LongDescription `string`: Explanation of the deal, typically displayed beneath the headline in a detail view. Often the same as the ShortDescription.
  * MaxUserRedemptions `integer`: The number of times that the cardholder may take advantage of this offer.
  * Merchant [RedemedOfferMerchant](#redemedoffermerchant)
  * OfferDisplay [OfferDisplay](#offerdisplay)
  * OfferId `string`: System-wide identifier for the campaign, not intended for end-user display.
  * OfferMedia [OfferMedia](#offermedia)
  * OfferSource `string`: Platform that made the offer available, not intended for end-user display.
  * OfferType `string`: The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase.
  * OfferUrl `string`: Deprecated, disregard.
  * RedemptionMode `string`: Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER.
  * RedemptionType `string`: Where a purchase may be made to qualify for the offer- INSTORE, ONLINE, or ONLINE-INSTORE (either).
  * ShortDescription `string`: Summary of the deal, typically displayed beneath the headline in a list view.
  * Transactions [Transaction](#transaction)

### RedemedOfferMerchant
* RedemedOfferMerchant `object`
  * Category `string`: The type of retailer to which the offer applies, not intended for end-user display.
  * MerchantDistance `number`: Reserved for future use.
  * Name `string`: Display name for the retailer to which the offer applies.
  * StoreLocatorUrl `string`: Web page where retailer outlets can be found.
  * WebsiteUrl `string`: The internet address of the retailer.

### ReedemedResponse
* ReedemedResponse `object`
  * CurrentPage `integer`: Count of current offer return segment.
  * Items [RedemedItems](#redemeditems)
  * ItemsPerPage `integer`: Count of offers in the returned segment.
  * NumberOfPages `integer`: Count of offer return segments.
  * Status [Status](#status)
  * TotalCount `integer`: Count of all offers available for criteria.

### SavingsResponse
* SavingsResponse `object`
  * Status [Status](#status)
  * UserSavings [UserSavings](#usersavings)

### ScActivation
* ScActivation `object`
  * ActivationDate `string`: Day on which the offer became ready for redemption.
  * ActivationId `string`: Distinct identifier for the offer being available for redemption by the user, not intended for end-user display.
  * CashBack `string`: Value earned upon fulfillment of offer conditions, not applicable to points activations.
  * DaysRemaining `string`: Number of days until the offer expires.
  * Headline `string`: Brief details about the deal.
  * Merchant `string`: Display name for the retailer to which the offer applies.
  * MerchantLogo `string`: Square retailer brand image.
  * OfferId `string`: System-wide identifier for the campaign, not intended for end-user display.
  * PointsEarned `string`: Value earned upon fulfillment of offer conditions, not applicable to cash activations.
  * RedemptionEndDate `string`: Last day on which a purchase will qualify for the offer.
  * RedemptionMode `string`: Type of credit made upon redemption of the offer- CASH or POINTS.
  * RemainingSpend `string`: Purchase amount still required to redeem the offer.
  * ShortDescription `string`: Summary of the deal, typically displayed beneath the headline in a list view.
  * Status `string`: Disposition of offer- ACTIVATED, REDEEMED, CREDIT_DECLINED.
  * TotalSpend `string`: Count of purchases user made to redeem the offer.

### StatementCreditActivationResponse
* StatementCreditActivationResponse `object`
  * Response [ActivationResponse](#activationresponse)

### StatementCreditOffersSavings
* StatementCreditOffersSavings `object`
  * EarnedCashback `string`: Value of postpaid credit deal redemptions.
  * NumAvailable `string`: Count of postpaid credit deals that are ready for activation or redemption.
  * NumRedeemed `string`: Count of postpaid credit deals redeemed.
  * PotentialSavings `string`: Minimum value of unredeemed postpaid credit deals.

### Status
* Status `object`
  * Code `string`: Status Code
  * Message `string`: Success or Failure

### TokenResponse
* TokenResponse `object`
  * Status [Status](#status)
  * UserToken [UserToken](#usertoken)

### Transaction
* Transaction `object`
  * CashBackEarned `string`: Value earned upon fulfillment of offer conditions, not applicable to points activations.
  * PointsEarned `string`: Value earned upon fulfillment of offer conditions, not applicable to cash activations.
  * RedemptionDate `string`: The day on which a purchase fulfilled the offer.
  * TransactionAmount `string`: Value of the purchase that fulfilled the offer, decimal is implied.

### UserFeedback
* UserFeedback `object`
  * Feedback `string`: Response provided by the user.
  * OfferId `string`: System-wide identifier for the campaign, not intended for end-user display.

### UserFeedbackResponse
* UserFeedbackResponse `object`
  * Response [FeedbackResponse](#feedbackresponse)

### UserSavings
* UserSavings `object`
  * PrepaidOfferSavings [PrepaidOfferSavings](#prepaidoffersavings)
  * StatementCreditOffersSavings [StatementCreditOffersSavings](#statementcreditofferssavings)
  * TotalAmountSaved `string`: Combined value of purchased and redeemed deals.
  * TotalOffersUsed `string`: Combined count of purchased and redeemed deals.

### UserSavingsResponse
* UserSavingsResponse `object`
  * Response [SavingsResponse](#savingsresponse)

### UserToken
* UserToken `object`
  * Token `string`: Session identifier that is passed for subsequent API calls.

### UserTokenResponse
* UserTokenResponse `object`
  * Response [TokenResponse](#tokenresponse)


