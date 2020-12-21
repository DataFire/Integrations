# @datafire/beanstream

Client library for Beanstream Payments

## Installation and Usage
```bash
npm install --save @datafire/beanstream
```
```js
let beanstream = require('@datafire/beanstream').create();

.then(data => {
  console.log(data);
});
```

## Description

https://www.beanstream.com/api/v1

## Actions

### payments.post
Make a payment using credit card, cash, cheque, profile, or token. Each payment type has its own json definition passed in the body. For all payments you have the standard Billing, Shipping, Comments, etc. fields that are optional. Only the amount is required along with the payment data for card, cash, cheque, profile, and token. You must change the payment_method for each payment type. Credit Card - "card", Payment Profile - "payment_profile", Legato Token - "token", Cash - "cash", Cheque - "cheque", Interac - "interac"


```js
beanstream.payments.post({}, context)
```

#### Input
* input `object`
  * payment_request [PaymentRequest](#paymentrequest)

#### Output
* output [PaymentResponse](#paymentresponse)

### payments.transId.get
Get a previous payment (transaction).


```js
beanstream.payments.transId.get({
  "transId": 0
}, context)
```

#### Input
* input `object`
  * transId **required** `number`: The transaction id.

#### Output
* output [Transaction](#transaction)

### payments.transId.completions.post
Complete a pre-authorized payment. The amount of the transaction to complete must be less than or equal to the original pre-auth amount. Complete must be set to true.


```js
beanstream.payments.transId.completions.post({
  "transId": 0
}, context)
```

#### Input
* input `object`
  * transId **required** `number`: The transaction id.
  * payment_request [PaymentRequest](#paymentrequest)

#### Output
* output [PaymentResponse](#paymentresponse)

### payments.transId.returns.post
Return payment.


```js
beanstream.payments.transId.returns.post({
  "transId": 0,
  "return": null
}, context)
```

#### Input
* input `object`
  * transId **required** `number`: The transaction id.
  * return **required** [Return](#return)

#### Output
* output [PaymentResponse](#paymentresponse)

### payments.transId.void.post
Void a transaction. You can void payments, returns, pre-auths, and completions. It will cancel that transaction.


```js
beanstream.payments.transId.void.post({
  "transId": 0,
  "void": null
}, context)
```

#### Input
* input `object`
  * transId **required** `number`: The transaction id to void.
  * void **required** [Void](#void)

#### Output
* output [PaymentResponse](#paymentresponse)

### profiles.post
Create a new Payment Profile using either a card or a Legato token. You must supply one of them.


```js
beanstream.profiles.post({
  "createProfileBody": null
}, context)
```

#### Input
* input `object`
  * createProfileBody **required** [CreateProfileBody](#createprofilebody)

#### Output
* output [ProfileResponse](#profileresponse)

### profiles.profileId.delete
Delete a Payment Profile using the profile ID, also known as the Customer Code.


```js
beanstream.profiles.profileId.delete({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)

#### Output
* output [ProfileResponse](#profileresponse)

### profiles.profileId.get
Get a Payment Profile using the profile ID, also known as the Customer Code.


```js
beanstream.profiles.profileId.get({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)

#### Output
* output [PaymentProfile](#paymentprofile)

### profiles.profileId.put
Create a new Payment Profile using either a card or a Legato token. You must supply one of them.


```js
beanstream.profiles.profileId.put({
  "profileId": "",
  "updateProfileBody": null
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)
  * updateProfileBody **required** [UpdateProfileBody](#updateprofilebody)

#### Output
* output [ProfileResponse](#profileresponse)

### profiles.profileId.cards.get
Get all of the cards on the profile.


```js
beanstream.profiles.profileId.cards.get({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)

#### Output
* output [ProfileGetCards](#profilegetcards)

### profiles.profileId.cards.post
Add a card to the profile. Note that there is a default limit of 1 card per profile. You can change this in your Profiles settings in the back office.


```js
beanstream.profiles.profileId.cards.post({
  "profileId": "",
  "card": null
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)
  * card **required** [ProfileCard](#profilecard)

#### Output
* output [ProfileResponse](#profileresponse)

### profiles.profileId.cards.cardId.delete
Delete a card on the profile.


```js
beanstream.profiles.profileId.cards.cardId.delete({
  "profileId": "",
  "cardId": 0
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)
  * cardId **required** `number`: The card id.

#### Output
* output [ProfileResponse](#profileresponse)

### profiles.profileId.cards.cardId.put
Update the details of a card on the profile.


```js
beanstream.profiles.profileId.cards.cardId.put({
  "profileId": "",
  "cardId": 0,
  "card": null
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The profile id. (aka CustomerCode)
  * cardId **required** `number`: The card id.
  * card **required** [ProfileCard](#profilecard)

#### Output
* output [ProfileResponse](#profileresponse)

### reports.post
Query for transactions using a date range and optional search criteria. This method allows you to page your search results if you are expecting a lot of results to be returned. The page start value begins at 1. If no records are found the API will return a 404 error message. For details on the parameters and allowed values for Criteria please visit the documentation http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/


```js
beanstream.reports.post({}, context)
```

#### Input
* input `object`
  * search_query [SearchQuery](#searchquery)

#### Output
* output [SearchResult](#searchresult)

### scripts.tokenization.tokens.post
NOTE that the full URL for this API call is https://www.beanstream.com/scripts/tokenization/tokens. Turn a credit card into a token using this service. This helps lessen your PCI scope by not passing the credit card information to your server. Instead you turn the card number into a token in the client app, then send the token to the server. When you send the token to Beanstream to make a payment, Beanstream then looks up the card number from that token and makes the payment. Tokens can also be used to create payment profiles.


```js
beanstream.scripts.tokenization.tokens.post({}, context)
```

#### Input
* input `object`
  * token_request [TokenRequest](#tokenrequest)

#### Output
* output [TokenResponse](#tokenresponse)



## Definitions

### Address
* Address `object`
  * address_line1 `string`: alphanumeric (64)
  * address_line2 `string`: alphanumeric (64)
  * city `string`: alphanumeric (32)
  * country `string`: characters (2)
  * email_address `string`: alphanumeric (32)
  * name `string`: alphanumeric (64)
  * phone_number `string`: alphanumeric (32)
  * postal_code `string`: alphanumeric (16)
  * province `string`: characters (2)

### Adjustment
* Adjustment `object`
  * amount `number`
  * approval `number`
  * created `string`: The date it was created '2015-04-22T10:03:19.323-07:00'
  * id `number`
  * message `string`
  * type `string`
  * url `string`

### BeanstreamException
* BeanstreamException `object`
  * category `integer`
  * code `integer`
  * details `array`
    * items [Detail](#detail)
  * message `string`
  * reference `string`

### Card
* Card `object`
  * complete `boolean`: set to false for Pre-Authorize, and true to complete a payment
  * cvd `string`: Security code on the back of the credit card. This can be set to mandatory in the back office. digits(3 or 4)
  * expiry_month **required** `string`: eg. 02 for February. digits(2)
  * expiry_year **required** `string`: eg. 15 for 2015. digits(2)
  * name **required** `string`: Card holder name. alphanumeric(64)
  * number **required** `string`: Credit card number (PAN). digits(20)

### CardGetTransactionResponse
* CardGetTransactionResponse `object`
  * address_match `integer`: digits (1)
  * avs_result `string`: characters (1)
  * card_type `string`: characters (2)
  * cvd_match `integer`: digits (2)
  * expiry_month `string`: characters (2)
  * expiry_year `string`: characters (2)
  * last_four `string`: digits (4)

### CardPurchaseResponse
* CardPurchaseResponse `object`
  * address_match `integer`: digits (1)
  * card_type `string`: characters (2)
  * cvd_match `integer`: digits (2)
  * last_four `string`: digits (4)
  * postal_result `integer`: digits (1)

### CreateProfileBody
* CreateProfileBody `object`
  * billing [Address](#address)
  * card [ProfileFromCard](#profilefromcard)
  * comment `string`: alphanumeric(256)
  * custom [Custom](#custom)
  * language `string`: characters(2)
  * token [ProfileFromToken](#profilefromtoken)

### Criteria
* Criteria `object`
  * field `number`: Refer to the table on this page for the searchable fields http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/
  * operator `string`: URL encoded comparators such as less than, greater than, equals... Refer to the table on this page for the full list of comparators http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/
  * value `string`: The value you want to match against.

### Custom
* Custom `object`
  * ref1 `string`: alphanumeric (256)
  * ref2 `string`: alphanumeric (256)
  * ref3 `string`: alphanumeric (256)
  * ref4 `string`: alphanumeric (256)
  * ref5 `string`: alphanumeric (256)

### Detail
* Detail `object`
  * field `string`
  * message `string`

### GetProfileDefaultCard
* GetProfileDefaultCard `object`
  * card_type `string`: MC, VI etc. characters(2)
  * expiry_month `string`: digits(2)
  * expiry_year `string`: digits(2)
  * name `string`: cardholder name alphanumeric(64)
  * number `string`: masked credit card number alphanumeric(20)

### Link
* Link `object`
  * href `string`: alphanumeric (256). Url to perform the void, return, completion etc.
  * method `string`: characters (16). Http method. post, put, get etc.
  * ref `string`: characters (16). Eg. "void" or "return"

### PaymentProfile
* PaymentProfile `object`
  * account_ref `string`
  * billing [Address](#address)
  * card [GetProfileDefaultCard](#getprofiledefaultcard)
  * code `integer`: digits(2)
  * custom [Custom](#custom)
  * customer_code `string`: alphanumeric(32)
  * language `string`: characters(2)
  * last_transaction `string`: date and time alphanumeric(24)
  * message `string`: alphanumeric(64)
  * modified_date `string`: date and time it was last modified alphanumeric(24)
  * profile_group `string`
  * status `string`: characters(1)
  * velocity_group `string`

### PaymentRequest
* PaymentRequest `object`
  * amount **required** `number`: A decimal value in dollars, or relevant currency. digits(9)
  * billing [Address](#address)
  * card [Card](#card)
  * comments `string`: alphanumeric (256)
  * custom [Custom](#custom)
  * customer_ip `string`: alphanumeric (30)
  * language `string`: characters (3)
  * order_number `string`: A unique order number. alphanumeric(30)
  * payment_method **required** `string`: One of (card, token, payment_profile, cash, cheque). characters(20)
  * payment_profile [ProfilePurchase](#profilepurchase)
  * shipping [Address](#address)
  * term_url `string`: alphanumeric (256)
  * token [TokenPurchase](#tokenpurchase)

### PaymentResponse
* PaymentResponse `object`
  * approved `integer`: Approved = 1, declined = 0
  * auth_code `string`: alphanumeric (32)
  * card [CardPurchaseResponse](#cardpurchaseresponse)
  * created `string`: alphanumeric (32)
  * id `string`: digits (9)
  * links `array`
    * items [Link](#link)
  * message `string`: alphanumeric (256)
  * message_id `string`: digits (3)
  * order_number `string`: alphanumeric (32)
  * payment_method `string`: characters (16)
  * type `string`: characters (16)

### ProfileCard
* ProfileCard `object`
  * expiry_month `string`: digits(2)
  * expiry_year `string`: digits(2)
  * name `string`: cardholder name. alphanumeric(64)
  * number `string`: Credit card number. digits(20)

### ProfileCards
* ProfileCards `object`
  * card_id `string`: 1-indexed card ID. Total number of cards allowed is configured in your merchant account.
  * card_type `string`: MC, VI etc. characters(2)
  * expiry_month `string`: digits(2)
  * expiry_year `string`: digits(2)
  * function `string`: Will say DEF for the default card
  * number `string`: digits(20)

### ProfileFromCard
* ProfileFromCard `object`
  * cvd `string`: Security code on the back of the credit card. This can be set to mandatory in the back office. digits(3)
  * expiry_month **required** `string`: eg. 02 for February. digits(2)
  * expiry_year **required** `string`: digits(2)
  * name **required** `string`: Card holder name. alphanumeric(64)
  * number **required** `string`: Credit card number (PAN)  digits(20)

### ProfileFromToken
* ProfileFromToken `object`
  * code **required** `string`: The token received from the client-side tokenization service. alphanumeric(64)
  * name **required** `string`: alphanumeric(64)

### ProfileGetCards
* ProfileGetCards `object`
  * card `array`
    * items [ProfileCards](#profilecards)
  * code `number`: digits(2)
  * customer_code `string`: characters(32)
  * message `string`: alphanumeric(64)

### ProfilePurchase
* ProfilePurchase `object`
  * card_id **required** `integer`: Which credit card to use. Starts at 1 for the first card. You must configure how many cards can be stored by visiting the profile options in the back office. digits(1)
  * complete `boolean`: Set to FALSE for pre-auth. digit(1) or boolean
  * customer_code **required** `string`: The payment profile ID. alphanumeric(32)

### ProfileResponse
* ProfileResponse `object`
  * code `number`
  * customer_code `string`: the ID of the payment profile. You need to keep track of this value.
  * message `string`

### ProfileToken
* ProfileToken `object`
  * code `string`: single use token associated with this account. alphanumeric(36)
  * name `string`: Name of cardholder. alphanumeric(64)

### Return
* Return `object`
  * amount **required** `number`: The amount of the transaction to return. Must be less than or equal to the original purchase amount.
  * order_number `string`: alphanumeric (30)

### SearchQuery
* SearchQuery `object`
  * criteria `array`: Optional search criteria. All criteria are ANDed together.
    * items [Criteria](#criteria)
  * end_date **required** `string`: The end date (inclusive) '2015-04-22T10:03:19' in the timezone of your merchant account.
  * end_row **required** `number`: Used to page the results. 1-based. This should always be 1 larger than start_row.
  * name **required** `string`: Only accepts 2 values. Can be either 'Search' for all fields or 'TransHistoryMinimal' for a subset of the fields returned in the results.
  * start_date **required** `string`: The start date (inclusive) '2015-04-22T10:03:19' in the timezone of your merchant account.
  * start_row **required** `number`: Used to page the results. 1-based

### SearchRecord
* SearchRecord `object`
  * b_address1 `string`
  * b_address2 `string`
  * b_city `string`
  * b_country `string`
  * b_email `string`
  * b_name `string`
  * b_phone `string`
  * b_postal `string`
  * b_province `string`
  * customer_code `string`: The PaymentProfile ID used in this transaction, if appropriate.
  * message_id `number`
  * message_text `string`
  * product_id `string`
  * product_name `string`
  * ref1 `string`
  * ref2 `string`
  * ref3 `string`
  * ref4 `string`
  * ref5 `string`
  * row_id `number`
  * s_address1 `string`
  * s_address2 `string`
  * s_city `string`
  * s_country `string`
  * s_email `string`
  * s_name `string`
  * s_phone `string`
  * s_postal `string`
  * s_province `string`
  * trn_amount `number`
  * trn_approval_code `string`
  * trn_avs_result `string`: Address Verification Service
  * trn_batch_no `number`
  * trn_card_expiry `string`
  * trn_card_owner `string`
  * trn_card_type `string`: MC VI etc
  * trn_completions `number`
  * trn_cvd_result `number`
  * trn_date_time `string`: 2015-04-22T10:03:19.323-07:00
  * trn_id `number`
  * trn_ip `string`
  * trn_masked_card `string`: The credit card with the middle digits redacted with X's
  * trn_order_number `string`
  * trn_payment_method `string`
  * trn_reference `number`
  * trn_response `number`
  * trn_returns `number`
  * trn_type `string`
  * trn_voided `number`

### SearchResult
* SearchResult `object`
  * records `array`
    * items [SearchRecord](#searchrecord)

### TokenPurchase
* TokenPurchase `object`
  * code **required** `string`: the payment token you retrieved from the Legato service. alphanumeric(36)
  * complete `boolean`: Set to FALSE for pre-auth
  * name **required** `string`: Card holder name. alphanumeric(64)

### TokenRequest
* TokenRequest `object`
  * cvd **required** `string`: a 3 to 4 digit representation of CVD/CDD. This is the number usually found on the back of the credit card.
  * expiry_month **required** `string`: a 2 digit representation of the expiry month. For example March is 03.
  * expiry_year **required** `string`: a 2 digit representation of the expiry year. For example 2016 is 16.
  * number **required** `string`: The credit card number

### TokenResponse
* TokenResponse `object`
  * code `string`: Response code for the message. It can be ignored.
  * message `string`: Response message with any hints as to what might have gone wrong, if something went wrong.
  * token **required** `string`: The token representing the credit card number that you will send to Beanstream for purchases. You will always receive a token, even if the request data is wrong or the card is invalid.
  * version `integer`: Message version number. Can be ignored.

### Transaction
* Transaction `object`
  * adjusted_by `array`
    * items [Adjustment](#adjustment)
  * amount `number`
  * approved `boolean`
  * auth_code `string`
  * batch_number `string`
  * billing [Address](#address)
  * card [CardGetTransactionResponse](#cardgettransactionresponse)
  * comments `string`
  * created `string`: The date it was created '2015-04-22T10:03:19.323-07:00'
  * custom [Custom](#custom)
  * id `number`
  * links `array`
    * items [Link](#link)
  * message `string`
  * message_id `number`
  * order_number `string`
  * payment_method `string`
  * shipping [Address](#address)
  * total_completions `number`
  * total_refunds `number`
  * type `string`

### UpdateProfileBody
* UpdateProfileBody `object`
  * billing [Address](#address)
  * card [ProfileToken](#profiletoken)
  * comment `string`: alphanumeric(256)
  * custom [Custom](#custom)
  * language `string`: characters(2)

### Void
* Void `object`
  * amount **required** `number`: The amount of the transaction to void. Must be equal to the original purchase amount. You can void purchases as well as pre-auths and returns. The amount you are voiding has to match the amount of that transaction.


