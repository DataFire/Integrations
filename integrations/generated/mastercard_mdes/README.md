# @datafire/mastercard_mdes

Client library for MDES Customer Service

## Installation and Usage
```bash
npm install --save @datafire/mastercard_mdes
```
```js
let mastercard_mdes = require('@datafire/mastercard_mdes').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides our Issuer partners with resources to help resolve consumer queries about payment accounts enabled through our digitization platform.

## Actions

### accountholdermessaging.post
Allows issuers to display customized messages per token within the Apple Pay wallet, below the digitized image of the card.



```js
mastercard_mdes.accountholdermessaging.post({}, context)
```

#### Input
* input `object`
  * AccountholderMessagingRequestSchema [AccountHolderMessagingRequest](#accountholdermessagingrequest)

#### Output
* output [AccountHolderMessagingResponseSchema](#accountholdermessagingresponseschema)

### search.post
Provides the ability to search for tokens based on Account PAN, Alternate Account Identifier, Token Unique Reference, Token, Payment App Instance Id or Comment Id. Returns all of the tokens associated with an account according to the scope of the indicated search request criteria. The response includes key state and informational data for each token, including the Token Unique Reference which is needed for subsequent token lifecycle management activities.<br><br>_Notes:_ The Search API request MUST include only one of the available search methods Account PAN, Token Unique Reference, Token, Payment App Instance Id, Comment Id, or Alternate Account Identifier. They cannot be used together in a single request.<br> Moreover, this function only retrieves results if the search criteria matches a current value from the token vault. In other words, if the search criteria is a PAN that has been replaced, the system will not retrieve any data. 



```js
mastercard_mdes.search.post({}, context)
```

#### Input
* input `object`
  * SearchRequestSchema [SearchRequestSchema](#searchrequestschema)

#### Output
* output [SearchResponseSchema](#searchresponseschema)

### systemstatus.get
Returns the overall system status of the Mastercard Digital Enablement Service.


```js
mastercard_mdes.systemstatus.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemStatusResponseSchema](#systemstatusresponseschema)

### token.activate.post
Used to activate a token for a digitization that has been approved and provisioned, but requires additional cardholder authentication prior to activation. If the provisioning was not completed successfully, activation cannot be accomplished using Customer Service API. It is expected that a cardholder will complete the authentication process using an issuer's call center or using an issuer-supplied mobile application, and only then should the issuer use this API to activate the token.



```js
mastercard_mdes.token.activate.post({}, context)
```

#### Input
* input `object`
  * TokenActivateRequestSchema [TokenActivateRequestSchema](#tokenactivaterequestschema)

#### Output
* output [TokenActivateResponseSchema](#tokenactivateresponseschema)

### token.activationmethods.post
Used to retrieve the available Activation Methods for a token that is awaiting activation. Activation Methods are the means by which a cardholder may complete cardholder authentication with the issuer beyond the scope of MDES. It is possible that there are no Activation Methods for a token when an issuer did not provide any cardholder-specific information with the Tokenization Authorization Request (TAR) pre-digitization network message response.



```js
mastercard_mdes.token.activationmethods.post({}, context)
```

#### Input
* input `object`
  * TokenActivationMethodsRequestSchema [TokenActivationMethodsRequestSchema](#tokenactivationmethodsrequestschema)

#### Output
* output [TokenActivationMethodsResponseSchema](#tokenactivationmethodsresponseschema)

### token.comments.post
Used to retrieve all comments associated with a token. Typically the response includes comments created earlier by Issuer Customer Service representatives detailing additional information about a particular inquiry or event. There may also be comments with warnings of potential fraud. These comments are created automatically by the MDES system when a Token requestor indicates a high risk of fraud during digitization.



```js
mastercard_mdes.token.comments.post({}, context)
```

#### Input
* input `object`
  * TokenCommentsRequestSchema [TokenCommentsRequestSchema](#tokencommentsrequestschema)

#### Output
* output [TokenCommentsResponseSchema](#tokencommentsresponseschema)

### token.delete.post
Used to delete a token so that it may not initiate any new transactions. All authorizations for a deleted token will be declined. A deleted token may not be returned to an active state.



```js
mastercard_mdes.token.delete.post({}, context)
```

#### Input
* input `object`
  * TokenDeleteRequestSchema [TokenDeleteRequestSchema](#tokendeleterequestschema)

#### Output
* output [TokenDeleteResponseSchema](#tokendeleteresponseschema)

### token.resendactivationcode.post
Used to trigger the process of generating and sending a new Activation Code (for a specific token) to the cardholder via the requested Activation Method. When successful, a new Activation Code Expiration Date Time period will begin, and a new Activation Code will be sent to the issuer using the Activation Code Notification (ACN) pre-digitization network message. It can only be used to do this for Activation Methods that involve the external distribution of an Activation Code to the cardholder. For example, via email or SMS. It cannot be used to send a new activation code via the "Mobile Application" activation method, for instance. A new Activation Code can be sent even if the previous code has not expired. A new Activation Code can also be sent even after the previous code has expired; however, it can only be done up to 30 days after the token was created  (the number of days is subject to change at the discretion of Mastercard).



```js
mastercard_mdes.token.resendactivationcode.post({}, context)
```

#### Input
* input `object`
  * TokenResendActivationCodeRequestSchema [TokenResendActivationCodeRequestSchema](#tokenresendactivationcoderequestschema)

#### Output
* output [TokenResendActivationCodeResponseSchema](#tokenresendactivationcoderesponseschema)

### token.resetmobilepin.post
Used to request that the Mobile PIN for a Mastercard Cloud-Based Payment token in a single issuer wallet is reset. The request is passed to the Credential Management System for processing. When the Mobile PIN is a token-level PIN (as opposed to a wallet-level PIN), the cardholder must choose a new PIN within 10 minutes of a Reset Mobile PIN action. Otherwise, the reset will need to be re-requested.



```js
mastercard_mdes.token.resetmobilepin.post({}, context)
```

#### Input
* input `object`
  * TokenResetMobilePinRequestSchema [TokenResetMobilePinRequestSchema](#tokenresetmobilepinrequestschema)

#### Output
* output [TokenResetMobilePinResponseSchema](#tokenresetmobilepinresponseschema)

### token.statushistory.post
Used to retrieve the historical statuses and lifecycle events for a token, such as when it was initially activated, subsequently suspended or resumed, and finally deleted.



```js
mastercard_mdes.token.statushistory.post({}, context)
```

#### Input
* input `object`
  * TokenStatusHistoryRequestSchema [TokenStatusHistoryRequestSchema](#tokenstatushistoryrequestschema)

#### Output
* output [TokenStatusHistoryResponseSchema](#tokenstatushistoryresponseschema)

### token.suspend.post
Used to suspend an active token so that it may not initiate any new transactions. All authorizations for a SUSPENDED token will be declined. Tokens may be suspended by multiple parties (suspenders) concurrently. The token status is updated from ACTIVE to SUSPENDED when the first suspender triggers a suspend action. Additional suspenders can add their suspend action to the list of suspenders. Suspenders can unsuspend only their own suspend action. All suspenders need to perform an unsuspend action to move a token from SUSPENDED to ACTIVE. The token status will only change when the last suspender has unsuspended the token. <br>For CoF tokens, the only two supported suspenders are issuer and token requestor. <br>For Apple Pay tokens, there are some differences in behavior versus the general principles. An issuer may add themselves as a suspender to a token already suspended by a cardholder, as above. However, a cardholder cannot suspend a token already suspended by the issuer. As a special case for Apple Pay, an issuer may unsuspend (override) a token already suspended by a cardholder. However, a cardholder cannot unsuspend a token already suspended by the issuer.



```js
mastercard_mdes.token.suspend.post({}, context)
```

#### Input
* input `object`
  * TokenSuspendRequestSchema [TokenSuspendRequestSchema](#tokensuspendrequestschema)

#### Output
* output [TokenSuspendResponseSchema](#tokensuspendresponseschema)

### token.unsuspend.post
Used to unsuspend or resume a suspended token and return it to the active state where it may initiate new transactions. Tokens may be suspended by multiple parties (suspenders) concurrently. The token status is updated from ACTIVE to SUSPENDED when the first suspender triggers a suspend action. Additional suspenders can add their suspend action to the list of suspenders. Suspenders can unsuspend only their own suspend action. All suspenders need to perform an unsuspend action to move a token from SUSPENDED to ACTIVE. The token status will only change when the last suspender has unsuspended the token. <br>For CoF tokens, the only two supported suspenders are issuer and token requestor.<br>For Apple Pay tokens, there are some differences in behavior versus the general principles. An issuer may add themselves as a suspender to a token already suspended by a cardholder, as above. However, a cardholder cannot suspend a token already suspended by the issuer. As a special case for Apple Pay, an issuer may unsuspend (override) a token already suspended by a cardholder. However, a cardholder cannot unsuspend a token already suspended by the issuer.



```js
mastercard_mdes.token.unsuspend.post({}, context)
```

#### Input
* input `object`
  * TokenUnsuspendRequestSchema [TokenUnsuspendRequestSchema](#tokenunsuspendrequestschema)

#### Output
* output [TokenUnsuspendResponseSchema](#tokenunsuspendresponseschema)

### token.update.post
Used to update Account PAN Mapping Information or Issuer Product Configuration ID associated to a provisioned token. To update a specific token, the API should be requested using the Token Unique Reference. To update all tokens mapped to a specific Account PAN, the API should be requested using the Account PAN. In either case, updates will only be applied to tokens in ACTIVE or SUSPENDED state, not those in IN PROGRESS or DELETED state. When updating Account PAN Mapping Information, the Account PAN, Expiration Date and Sequence Number, may be updated individually or in any combination. Only information provided will be updated. The account mapping will only update an Account PAN for a new Account PAN when they are both in the same Account Range.



```js
mastercard_mdes.token.update.post({}, context)
```

#### Input
* input `object`
  * TokenUpdateRequestSchema [TokenUpdateRequestSchema](#tokenupdaterequestschema)

#### Output
* output [TokenUpdateResponseSchema](#tokenupdateresponseschema)

### transactions.post
Used to retrieve transactions performed by a token. It only returns transactions performed within the last 30 days, to help identify a particular token, or to identify a particular recent transaction. It is not intended to provide the full transaction history of a token or Account PAN.<br><br>_Notes:_ The Transaction History API response is not supported for static Card on File (CoF) tokens.<br>If a set of tokens has been re-mapped to a new FPAN, all digital transactions will be made available before or after the FPAN has been updated. MDES does not return the value of the FPAN which was mapped to the particular token at the time of the transaction. However, MDES will return the history of all transactions performed on that particular token in the last 30 days, based on old and/or new FPAN.



```js
mastercard_mdes.transactions.post({}, context)
```

#### Input
* input `object`
  * TransactionsRequestSchema [TransactionsRequestSchema](#transactionsrequestschema)

#### Output
* output [TransactionsResponseSchema](#transactionsresponseschema)

### updatetokenassurance.post
Used after an issuer has performed additional cardholder authentication to indicate an increased level of token assurance. It will only be applied to tokens that actually have a Token Assurance Level, and those that are in ACTIVE or SUSPENDED state.



```js
mastercard_mdes.updatetokenassurance.post({}, context)
```

#### Input
* input `object`
  * UpdateTokenAssuranceRequestSchema [UpdateTokenAssuranceRequestSchema](#updatetokenassurancerequestschema)

#### Output
* output [UpdateTokenAssuranceResponseSchema](#updatetokenassuranceresponseschema)



## Definitions

### Account
* Account `object`
  * AccountPanSuffix `string`: Last 4 digits of Account PAN mapped (or to be mapped) to Token(s).
  * AlternateAccountIdentifierSuffix `string`: Alternate Account Identifier is a cardholder friendly reference to a bank account. It is typically used to identify associated tokens when the cardholder is unaware of their Account PAN. The Alternate Account Identifier Suffix exposes just the last few characters of the full identifier in order to protect the full identifier from possible fraud.
  * ExpirationDate `string`: Expiration date of Account PAN mapped (or to be mapped) to Token(s). 'MMYY' Format.
  * Tokens [Tokens](#tokens)

### AccountHolderMessagingRequest
* AccountHolderMessagingRequest `object`
  * AccountHolderMessagingRequest [AccountHolderMessagingRequestSchema](#accountholdermessagingrequestschema)

### AccountHolderMessagingRequestSchema
* AccountHolderMessagingRequestSchema `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * IssuerApplicationMessageDisplay **required** `string`: This is the indicator if the message can be viewed in the Issuer Application using the MessageIdentifier. <br>Please refer to the Apple Card Notification Specification for Notification Deep Linking. Mandatory field.  Valid values are;<br>TRUE ? The message can be viewed in the issuer application<br>FALSE ? The message cannot be viewed in the issuer application.
  * MessageExpiration **required** `string`: Date and time after which the message is no longer valid.  Maximum value of 30 days in the future. Mandatory field.  __ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD__
  * MessageIdentifier **required** `string`: This is the message identifier. This could be used for linking into the issuer application. Mandatory field.
  * MessageLanguageCode **required** `string`: The language of the message.  Only messages with the requested language code will be presented to the account holder. Mandatory field.  <br>__ISO 639-1 format__
  * MessageText **required** `string`: This is the message which will be displayed to the cardholder. Mandatory field.
  * TokenUniqueReference **required** `string`: When present, the search will return one specific matching token. Cannot be used together with any of the following search request parameters; AccountPan, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier. Mandatory field.

### AccountHolderMessagingResponse
* AccountHolderMessagingResponse `object`
  * Token [TokenResponse](#tokenresponse)

### AccountHolderMessagingResponseSchema
* AccountHolderMessagingResponseSchema `object`
  * AccountHolderMessagingResponse [AccountHolderMessagingResponse](#accountholdermessagingresponse)

### Accounts
* Accounts `object`
  * Account `array`: When searching by Account PAN or by Payment App Instance Id, the search response may contain more than one token. Each individual token can be updated during its lifetime and associated to a different Account PAN, or given a new Expiration Date. Different tokens within a single search response may therefore have different Account PANs and/or Expiration Dates. Account objects are used to group tokens that have exactly the same Account PAN and Account PAN Expiration Date.
    * items [Account](#account)

### ActivationMethod
* ActivationMethod `object`
  * ActivationMethodId `string`: Unique identifier of the activation method.
  * ActivationMethodType `string`: Type of activation method. Valid values:<br />    "SMS" ? Activation code sent in text message to masked mobile phone number<br />    "EMA" ? Activation code sent in email to masked email address<br />    "ACC" ? Cardholder to call automated call center phone number<br />    "CLC" ? Cardholder to call Call Center phone number<br />    "WEB" ? Website<br />    "BAP" ? Mobile application<br />    "OBC" ? Activation code spoken via call to cardholder on masked voice call phone number.
  * ActivationMethodValue `string`: Activation method details value.
  * ResendIndicator `string`: Whether the activation method can be used to re-send an activation code. Valid values are TRUE and FALSE.

### ActivationMethods
* ActivationMethods `object`
  * ActivationMethod `array`
    * items [ActivationMethod](#activationmethod)

### AuditInfo
* AuditInfo `object`
  * Organization **required** `string`: Name of the Issuer or Processor to which the Customer Service Representative who triggered the API request belongs.
  * Phone `string`: Phone Number of the Customer Service Representative who triggered the API request.
  * UserId **required** `string`: User ID (as assigned by the Issuer/Processor) of the Customer Service Representative who triggered the API request.
  * UserName **required** `string`: User Name of the Customer Service Representative who triggered the API request.

### Comment
* Comment `object`
  * AuditInfo [AuditInfo](#auditinfo)
  * CommentDateTime `string`: Date and time that the comment was updated. Format - YYYY-MM-DDThh:mm:ssTZD .
  * CommentId `string`: Identifier for the comment.
  * CommentText `string`: Comment text.

### Comments
* Comments `object`
  * Comment `array`
    * items [Comment](#comment)

### Device
* Device `object`
  * DeviceId `string`: Serial number of the device provisioned with the token. May be masked. Conditional field, not present for CoF tokens, and only present when provided by a Wallet Provider. May be masked (by the Wallet Provider).<br />Example (unmasked) "C2ZBY14310005664". Example (masked) "xxxxY1431xxxxxxx".
  * DeviceName `string`: Nickname of the device provisioned with the token. Conditional field, not present for CoF tokens, and only present when the Payment App Provider has implemented the 'Get Device Info' MDES API.
  * DeviceType `string`: Type of the device provisioned with the token. Valid values:<br />    "03" - Watch<br />    "09" - Mobile Phone or Smartphone with a fixed (non-removable) secure element not controlled by the mobile network operator<br />    "13" - Tablet or e-reader with a fixed (non-removable) secure element not controlled by the mobile network operator<br />    "14" - Mobile phone or Smartphone with a payment application running in a host processor<br />    "15" - Tablet or E-Book with a payment application running in a host processor<br />    "16" ? Mobile Phone or Smartphone with a payment application running in the TEE of a host processor<br />    "17" ? Tablet or E-Book with a payment application running in the TEE of a host processor<br />    "18" ? Watch with a payment application running in the TEE of a host processor<br />    "19" ? Watch with a payment application running in a host processor.<br />    "21" ? Phone.<br />    "22" ? Tablet. <br />    "23" ? Watch.<br />    "24" ? Sticker.<br />    "25" ? Personal Computer.<br />    "26" ? Device Peripheral.<br />    "27" ? Tag.<br />    "28" ? Jewelry.<br />    "29" ?  Fashion Accessory.<br />    "30" ?  Garment.<br />    "31" ?  Domestic Appliance.<br />    "32" ?  Vehicle.<br />    "33" ?  Media or Gaming Device.<br />    "99" ?  Undefined.<br />Conditional field, not present for CoF tokens, and only present when supplied by the Payment App Provider.
  * SecureElementId `string`: Identifier of the secure element provisioned with the token. Conditional field, not present for CoF tokens, and only present when the token is provisioned to a secure element.

### Error
* Error `object`
  * Description `string`: A textual description of the error that is appropriate for logging and may communicate additional details related to the reason code.
  * ErrorCode `string`: An identifier that represents additional detail for the reason of the error.
  * ReasonCode `string`: Indicator that identifies the reason for the error.
  * Recoverable `string`: An indicator stating whether it is reasonable to retry a failed request.
  * Source `string`: Unique identifier that attempts to define the field in error when available.  If a specific field can't be identified, "System" will be returned.

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)

### ErrorsResponse
* ErrorsResponse `object`
  * Errors [Errors](#errors)

### SearchRequest
* SearchRequest `object`
  * AccountPan `string`: When present, the search will return tokens for the Account matching this Primary Account Number (PAN), for any Wallet Provider or device. Cannot be used together with any of the following search request.  parameters:TokenUniqueReference, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier.
  * AlternateAccountIdentifier `string`: When present, the search will return tokens matching this Alternate Account Identifier, for any Wallet Provider or device. Space characters are not allowed. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, PaymentAppInstanceId, or CommentId.
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentId `string`: When present, the search will return one specific token linked to the comment. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, PaymentAppInstanceId, or AlternateAccountIdentifier.
  * ExcludeDeletedIndicator `string` (values: true, false): Indicates whether deleted tokens should be excluded from the search results. When omitted, deleted tokens are included in the results. "true" indicates deleted tokens are excluded from the search results. "false" means deleted tokens are included in the search results.
  * PaymentAppInstanceId `string`: When present, the search will return tokens already present or to be provisioned to the specified Payment App instance.<br><br>_Note:_ This may contain the identifier of the Secure Element or a mobile device for some programs. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, CommentId, or AlternateAccountIdentifier.
  * Token `string`: When present, the search will return one specific token. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier.
  * TokenUniqueReference `string`: When present, the search will return one specific matching token. Cannot be used together with any of the following search request parameters; AccountPan, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier.

### SearchRequestSchema
* SearchRequestSchema `object`
  * SearchRequest [SearchRequest](#searchrequest)

### SearchResponse
* SearchResponse `object`
  * Accounts [Accounts](#accounts)

### SearchResponseSchema
* SearchResponseSchema `object`
  * SearchResponse [SearchResponse](#searchresponse)

### SimpleTokenCommentResponse
* SimpleTokenCommentResponse `object`
  * CommentId `string`: Identifier of the comment added. Only present when comment text was provided in the request.
  * TokenUniqueReference **required** `string`: Unique reference to the Token.

### SimpleTokenResponse
* SimpleTokenResponse `object`
  * Token [SimpleTokenCommentResponse](#simpletokencommentresponse)

### Status
* Status `object`
  * AuditInfo [AuditInfo](#auditinfo)
  * CommentId `string`: Identifier of the comment added.  Conditional field, only present when comment text was provided in the request.
  * Initiator `string`: Party that initiated the status update. Valid values:<br />    "I" - Issuer.<br />    "W" - Token Requestor (including Wallet Provider).<br />    "C" - Cardholder.<br />    "P" - Mobile PIN Validation service.<br />    "M" - Mobile PIN Change Validation service.
  * ReasonCode `string`: Reason for the status update.  Valid values:<br />    "A" ? Cardholder successfully authenticated using a mobile App prior to activation.<br />    "C" ? Cardholder successfully authenticated with a customer service agent prior to activation. (For 'Token Activate').<br />    "C" ? Account closed. (For 'Token Delete').<br />    "F" ? Cardholder reported token device found or not stolen.<br />    "L" ? Cardholder reported/confirmed token device lost.<br />    "S" ? Cardholder reported/confirmed token device stolen.<br />    "T" ? Issuer or cardholder reported fraudulent/then confirmed no fraudulent token transactions.<br />    "Z" ? Other.
  * StatusCode `string`: The status of the Token. Valid values:<br />    "U" - Unmapped. The token has not yet been linked to the Account PAN. The process of tokenization is ?In Progress?.<br />    "A" - Active. The token is linked to the Account PAN and may initiate new transactions to be authorized.<br />    "S" - Suspended. The token is linked to the Account PAN but may not perform transactions at the request of one or more suspenders.<br />    "D" - Deleted. The token is logically deleted but is still linked to the Account PAN for the purposes of post-authorization transaction processing.
  * StatusDateTime `string`: Date and time the status was updated. String, ISO 8691 format - YYYY-MM-DDThh:mm:ssTZD .
  * StatusDescription `string`: Description of the current status.

### Statuses
* Statuses `object`
  * Status `array`
    * items [Status](#status)

### Suspenders
* Suspenders `object`
  * Suspender `array`: Suspender(s) of the token when the token current status is SUSPENDED. Conditional field, only present when token mapping is suspended. Valid values:<br />    "I" - The issuer has requested token suspension.<br />    "W" - Token Requestor (including Wallet Provider) has requested token suspension.<br />    "C" - The cardholder has requested token suspension.<br />    "P" - The Mobile PIN Validation service has requested token suspension. Occurs when the cardholder has entered their Mobile PIN incorrectly too many times whilst performing a transaction.<br />    "M" - The Mobile PIN Change Validation service has requested token suspension. Occurs when the cardholder has entered their Mobile PIN incorrectly too many times whilst changing their mobile pin.
    * items `string`

### SystemStatusResponse
* SystemStatusResponse `object`
  * CommentText `string`: Comment regarding the status of the system.
  * LastStatusDateTime `string`: Date and time the status of the system was last updated. Format - YYYY-MM-DDThh:mm:ssTZD .

### SystemStatusResponseSchema
* SystemStatusResponseSchema `object`
  * SystemStatusResponse [SystemStatusResponse](#systemstatusresponse)

### Token
* Token `object`
  * AccountPanSequenceNumber `string`: The Account PAN Sequence Number associated with a specific token, as provided to MDES previously by the issuer. It may be used to distinguish between multiple cardholders for a single Account PAN, to represent an issuance number of a specific card, or to distinguish between different card products, such as debit or credit, that share the same Account PAN. Conditional field, present when successfully assigned. Supported values - 00 to 99.
  * ActivationCodeExpirationDateTime `string`: Date and time when an Activation Code will expire. Conditional field, not present for CoF tokens, and only present when an Activation Code has been generated and activation has not yet occurred. The date and time may be in the future or past. string in ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD .
  * CorrelationId `string`: Value linking pre-digitization messages generated during provisioning. Conditional field, not present for CoF tokens.
  * CurrentStatusCode `string`: Current status of the Token. Valid values:<br> "U" - Unmapped. The token has not yet been linked to the Account PAN. The process of tokenization is ?In Progress.'<br> "A" - Active. The token is linked to the Account PAN and may initiate new transactions to be authorized.<br> "S" - Suspended. The token is linked to the Account PAN but may not perform transactions at the request of one or more suspenders.<br> "D" - Deleted. The token is logically deleted but is still linked to the Account PAN for the purposes of post-authorization transaction processing.
  * CurrentStatusDateTime `string`: Date and time the status was updated.  string, ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD .
  * CurrentStatusDescription `string`: Description of the current status.
  * Device [Device](#device)
  * DigitizationRequestDateTime `string`: Date and time of the initial request for digitization of the Account PAN for this token. Conditional field, not present for CoF tokens. string, in ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD .
  * ExpirationDate `string`: Expiration date of token. Conditional field, present once the token has been designated for the digitization. Four digit string. Format "mmyy".
  * FinalTokenizationDecision `string`: Final decision related to the digitization of the Account PAN for this token. Valid values:<br />    "D" - Digitization was declined<br />    "A" - Digitization was approved<br />    "R" - Digitization was approved but required authentication prior to activation.<br />Conditional field, not present for CoF tokens.<br><br>_Note:_this information is currently subject to archival processes and will be present for only 1 year following digitization.
  * LastCommentId `string`: Identifier of the last comment associated with the token.
  * PaymentAppInstanceId `string`: Identifier of the Payment App instance within a device that will be provisioned with a token.<br><br>_Note:_ This may contain the identifier of the Secure Element or a mobile device for some programs. Optional, not present for CoF tokens, and only present when supplied by the Payment App Provider.
  * PrimaryAccountNumberUniqueReference `string`: Unique reference to the Account PAN originally digitized. Conditional field, present when successfully assigned.
  * ProvisioningStatusCode `string`: Current provisioning status of the token. Valid values:<br />    "P" - Token being prepared<br />    "T" - Awaiting cardholder acceptance of Terms and Conditions<br />    "D" - Token being delivered to Wallet Provider or Device<br />    "A" - Awaiting Activation<br />    "S" - Provisioning successful<br />    "F" - Provisioning failed.<br /><br><br>_Note:_ The order of the statuses above does not indicate any order of status transitions. Conditional field, not present for CoF tokens.
  * ProvisioningStatusDescription `string`: Description of the provisioning status. Conditional field, not present for CoF tokens.
  * StorageTechnology `string`: The architecture or technology used for token storage. Valid values:<br />    "D" - Device memory<br />    "P" - Device memory protected by Trusted Platform Module (TPM)<br />    "H" - Server<br />    "E" - Trusted Execution Environment (TEE)<br />    "S" - Secure Element (SE)<br />    "V" - Virtual Execution Environment (VEE).
  * Suspenders [Suspenders](#suspenders)
  * TokenActivatedDateTime `string`: Date and time that the token was activated. Conditional field, present only once the Token has been activated. string in ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD .
  * TokenAssuranceLevel `string`: Indicates the level of Identification and Verification performed to validate the Cardholder and the Cardholder's account at the time the Token was issued (or at any subsquent time post-issuance).  Only present when a token has a Token Assurance Level assigned.  Supported values are 0 (Not Authenticated) and non-zero (Authenticated).
  * TokenDeletedFromConsumerApp `string`: Indicates whether or not a token has been deleted from the consumer app by the token requestor.<br><br>_Note:_ This is a "soft delete" that does not affect the actual Token Status. The token may still be active in the system. Supported values - true, false.
  * TokenRequestorConsumerFacingEntityName `string`: The Token Service Provider name to be displayed to the consumer (consumer-facing name).
  * TokenRequestorId `string`: Per EMV Co, the entity uniquely recognized by Mastercard as the Token Service Provider.
  * TokenRequestorName `string`: The legal name of the token requestor. There can be more than one Token Requestor Id per Token Requester Name (legal name). So it is important to use both parameters to uniquely identify a token requestor.
  * TokenSuffix `string`: Last 4 digits of token in a 4 character string. Conditional field, present once the token has been designated for the digitization.
  * TokenType `string`: Type of token. Valid values:<br />    "S" - Embedded Secure Element Token<br />    "C" - Mastercard Cloud-Based Payments token.<br />   F = Static token (deprecated)
  * TokenUniqueReference `string`: Unique reference to the token. Conditional field, present when successfully assigned.
  * WalletId `string`: Identifier of the Wallet Provider who requested the digitization or tokenization. Conditional field, not present for CoF tokens, and only present when supplied by the Payment App Provider.

### TokenActivateRequest
* TokenActivateRequest `object`
  * AccountPan `string`: The Account PAN of the token to be activated. Conditional field, must be present when PaymentAppInstanceId is present, must not be present when TokenUniqueReference is present.
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to activating this token.
  * PaymentAppInstanceId `string`: Identifier of the Payment App instance within a device that will be provisioned with a token. <br><br>_Note:_ This may contain the identifier of the Secure Element or a mobile device for some programs. Conditional field, must be present when AccountPan is present. Must not be present when TokenUniqueReference is present.
  * ReasonCode **required** `string`: Reason for the activation. Valid values:<br />    "A" = Cardholder successfully authenticated prior to activation.<br />    "C" = Cardholder successfully authenticated with a customer service agent prior to activation.
  * TokenUniqueReference `string`: TokenUniqueReference for the token to be activated. Conditional field, present when AccountPan and PaymentAppInstanceId are not present.

### TokenActivateRequestSchema
* TokenActivateRequestSchema `object`
  * TokenActivateRequest [TokenActivateRequest](#tokenactivaterequest)

### TokenActivateResponseSchema
* TokenActivateResponseSchema `object`
  * TokenActivateResponse [SimpleTokenResponse](#simpletokenresponse)

### TokenActivationMethodsRequest
* TokenActivationMethodsRequest `object`
  * AuditInfo [AuditInfo](#auditinfo)
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenActivationMethodsRequestSchema
* TokenActivationMethodsRequestSchema `object`
  * TokenActivationMethodsRequest [TokenActivationMethodsRequest](#tokenactivationmethodsrequest)

### TokenActivationMethodsResponse
* TokenActivationMethodsResponse `object`
  * ActivationMethods [ActivationMethods](#activationmethods)

### TokenActivationMethodsResponseSchema
* TokenActivationMethodsResponseSchema `object`
  * TokenActivationMethodsResponse [TokenActivationMethodsResponse](#tokenactivationmethodsresponse)

### TokenCommentsRequest
* TokenCommentsRequest `object`
  * AuditInfo [AuditInfo](#auditinfo)
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenCommentsRequestSchema
* TokenCommentsRequestSchema `object`
  * TokenCommentsRequest [TokenCommentsRequest](#tokencommentsrequest)

### TokenCommentsResponse
* TokenCommentsResponse `object`
  * Comments [Comments](#comments)

### TokenCommentsResponseSchema
* TokenCommentsResponseSchema `object`
  * TokenCommentsResponse [TokenCommentsResponse](#tokencommentsresponse)

### TokenDeleteRequest
* TokenDeleteRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to deletion.
  * ReasonCode **required** `string`: The reason for the action. Valid values:<br />    "L" - Cardholder confirmed token device lost<br />    "S" - Cardholder confirmed token device stolen<br />    "F" - Issuer or cardholder confirmed fraudulent token transactions (Deprecated)<br />    "T" - Issuer or cardholder confirmed fraudulent token transactions<br />    "C" - Account closed<br />    "Z" - Other
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenDeleteRequestSchema
* TokenDeleteRequestSchema `object`
  * TokenDeleteRequest [TokenDeleteRequest](#tokendeleterequest)

### TokenDeleteResponseSchema
* TokenDeleteResponseSchema `object`
  * TokenDeleteResponse [SimpleTokenResponse](#simpletokenresponse)

### TokenResendActivationCodeRequest
* TokenResendActivationCodeRequest `object`
  * ActivationMethodId **required** `string`: Identifier of the activation method.
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * TokenUniqueReference **required** `string`: TokenUniqueReference of the token. When present, the TUR field will be a 48 characters string.

### TokenResendActivationCodeRequestSchema
* TokenResendActivationCodeRequestSchema `object`
  * TokenResendActivationCodeRequest [TokenResendActivationCodeRequest](#tokenresendactivationcoderequest)

### TokenResendActivationCodeResponse
* TokenResendActivationCodeResponse `object`
  * Token [TokenResendActivationCodeResponseToken](#tokenresendactivationcoderesponsetoken)

### TokenResendActivationCodeResponseSchema
* TokenResendActivationCodeResponseSchema `object`
  * TokenResendActivationCodeResponse [TokenResendActivationCodeResponse](#tokenresendactivationcoderesponse)

### TokenResendActivationCodeResponseToken
* TokenResendActivationCodeResponseToken `object`
  * TokenUniqueReference `string`: Unique reference to the Token.

### TokenResetMobilePinRequest
* TokenResetMobilePinRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to the token mobile PIN reset.
  * ReasonCode **required** `string`: The reason for the action. Valid values:<br />    "N" - Cardholder requested new Mobile PIN<br />    "R" ? Mobile PIN try counter violation
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenResetMobilePinRequestSchema
* TokenResetMobilePinRequestSchema `object`
  * TokenResetMobilePinRequest [TokenResetMobilePinRequest](#tokenresetmobilepinrequest)

### TokenResetMobilePinResponseSchema
* TokenResetMobilePinResponseSchema `object`
  * TokenResetMobilePinResponse [SimpleTokenResponse](#simpletokenresponse)

### TokenResponse
* TokenResponse `object`
  * TokenUniqueReference **required** `string`: Unique reference to the Token.

### TokenStatusHistoryRequest
* TokenStatusHistoryRequest `object`
  * AuditInfo [AuditInfo](#auditinfo)
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenStatusHistoryRequestSchema
* TokenStatusHistoryRequestSchema `object`
  * TokenStatusHistoryRequest [TokenStatusHistoryRequest](#tokenstatushistoryrequest)

### TokenStatusHistoryResponse
* TokenStatusHistoryResponse `object`
  * Statuses [Statuses](#statuses)

### TokenStatusHistoryResponseSchema
* TokenStatusHistoryResponseSchema `object`
  * TokenStatusHistoryResponse [TokenStatusHistoryResponse](#tokenstatushistoryresponse)

### TokenSuspendRequest
* TokenSuspendRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to suspension.
  * ReasonCode **required** `string`: The reason for the action. Valid values:<br />    "L" - Cardholder reported token device lost.<br />    "S" - Cardholder reported token device stolen.<br />    "T" - Issue or cardholder reported fraudulent token transactions.<br />    "Z" - Other.
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenSuspendRequestSchema
* TokenSuspendRequestSchema `object`
  * TokenSuspendRequest [TokenSuspendRequest](#tokensuspendrequest)

### TokenSuspendResponseSchema
* TokenSuspendResponseSchema `object`
  * TokenSuspendResponse [SimpleTokenResponse](#simpletokenresponse)

### TokenUnsuspendRequest
* TokenUnsuspendRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to unsuspension.
  * ReasonCode **required** `string`: The reason for the action. Valid values:<br />    "F" - Cardholder reported token device found or not stolen<br />    "T" - Issuer or cardholder confirmed no fraudulent token transactions<br />    "Z" - Other.
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TokenUnsuspendRequestSchema
* TokenUnsuspendRequestSchema `object`
  * TokenUnsuspendRequest [TokenUnsuspendRequest](#tokenunsuspendrequest)

### TokenUnsuspendResponseSchema
* TokenUnsuspendResponseSchema `object`
  * TokenUnsuspendResponse [SimpleTokenResponse](#simpletokenresponse)

### TokenUpdateRequest
* TokenUpdateRequest `object`
  * AccountPanSequenceNumber `string`: New PAN sequence number to be applied to the updated token(s). Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or Expiration Date.
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to the updated token(s).
  * CurrentAccountPan `string`: Current Account PAN of the token(s) to be updated. Conditional field, used for updating all tokens mapped to a single Account PAN and must not be present when TokenUniqueReference is present.
  * ExpirationDate `string`: New expiration date to be applied to the updated token(s). Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or PAN Sequence Number.
  * IssuerProductConfigurationId `string`: New product configuration ID to be applied to the updated token(s). Conditional field, must not be present if any of the following are present; NewAccountPan, ExpirationDate, AccountPanSequenceNumber.
  * NewAccountPan `string`: New Account PAN to be applied to the updated token(s) if there is in fact a new Account PAN. Optional if updating Expiration Date or PAN Sequence Number.
  * TokenUniqueReference `string`: Unique reference of the token to be updated. Conditional field, used for updating a single token and not used when CurrentAccountPan is present.
  * UpdateWalletProviderIndicator `string`: Indicates whether the updated token information should be provided to the Wallet Provider. Valid values:<br />    "0" - Pass the updated information to the Wallet Provider<br />    "1" - Do not pass the updated information to the Wallet Provider.<br />Optional parameter. The default is 1 if not present.

### TokenUpdateRequestSchema
* TokenUpdateRequestSchema `object`
  * TokenUpdateRequest [TokenUpdateRequest](#tokenupdaterequest)

### TokenUpdateResponse
* TokenUpdateResponse `object`
  * Tokens [TokenUpdateTokens](#tokenupdatetokens)

### TokenUpdateResponseSchema
* TokenUpdateResponseSchema `object`
  * TokenUpdateResponse [TokenUpdateResponse](#tokenupdateresponse)

### TokenUpdateTokens
* TokenUpdateTokens `object`
  * Token `array`
    * items [SimpleTokenCommentResponse](#simpletokencommentresponse)

### Tokens
* Tokens `object`
  * Token `array`
    * items [Token](#token)

### Transaction
* Transaction `object`
  * CurrencyCode `string`: ISO-4217 currency code (3-letter alphabetic currency code).
  * MerchantCategoryCode `string`: Merchant category of the merchant. Conditional field. When available, it must be included in the response.
  * MerchantCategoryDescription `string`: Description of the merchant category.
  * MerchantName `string`: Name of the merchant. Conditional field. When available, it must be included in the response.
  * POSEntryMode `string`: Indicates the mode by which transaction data was collected at the merchant. Conditional field. When available, it must be included in the response.  Valid values:<br />    "07" - Contactless M/Chip transaction<br />    "09" - Digital Secure Remote Payment containing EMV data<br />    "81" - Digital Secure Remote Payment containing UCAF data or CoF<br />    "82" - CoF - PAN auto entry via server<br />    "90" - Dynamic Magnetic Strip Data<br />    "91" - Contactless magnetic stripe
  * TransactionAmount `string`: Amount of the transaction formatted with decimal places.
  * TransactionDateTime `string`: Date and time the comment was updated. String, YYYY-MM-DDThh:mm:ssTZD.
  * TransactionStatusCode `string`: Transaction status. Valid values:<br />    "AUTH" = Authorized<br />    "COMP" = Completed<br />    "DCLN" = Declined<br />    "PAUTH" = Pre-Authorized<br />    "PAUTC" = Pre-Authorization Completed<br />    "PAUTD" = Pre-Authorization Declined<br />    "REFND" = Refunded
  * TransactionTypeCode `string`: Type of transaction. Valid values:<br />    "PURCH" = Purchase<br />    "PURCB" = Purchase with Cashback<br />    "REFND" = Refund<br />    "AFD" = Purchase Pre-Auth AFD<br />    "CLRRF" = Clearing Refund<br />    "NAFD" = Purchase Pre-Auth Non-AFD<br />    "PYMT" = Push Payments.
  * TransactionTypeDescription `string`: Description of the transaction type.

### Transactions
* Transactions `object`
  * Transaction `array`
    * items [Transaction](#transaction)

### TransactionsRequest
* TransactionsRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### TransactionsRequestSchema
* TransactionsRequestSchema `object`
  * TransactionsRequest [TransactionsRequest](#transactionsrequest)

### TransactionsResponse
* TransactionsResponse `object`
  * Transactions [Transactions](#transactions)

### TransactionsResponseSchema
* TransactionsResponseSchema `object`
  * TransactionsResponse [TransactionsResponse](#transactionsresponse)

### UpdateTokenAssuranceRequest
* UpdateTokenAssuranceRequest `object`
  * AuditInfo **required** [AuditInfo](#auditinfo)
  * CommentText `string`: Comment related to the update.
  * TokenUniqueReference **required** `string`: The TokenUniqueReference of the token.

### UpdateTokenAssuranceRequestSchema
* UpdateTokenAssuranceRequestSchema `object`
  * UpdateTokenAssuranceRequest [UpdateTokenAssuranceRequest](#updatetokenassurancerequest)

### UpdateTokenAssuranceResponseSchema
* UpdateTokenAssuranceResponseSchema `object`
  * UpdateTokenAssuranceResponse [SimpleTokenResponse](#simpletokenresponse)


