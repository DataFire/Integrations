# @datafire/mastercard_match

Client library for MATCH API

## Installation and Usage
```bash
npm install --save @datafire/mastercard_match
```
```js
let mastercard_match = require('@datafire/mastercard_match').create();

.then(data => {
  console.log(data);
});
```

## Description

Helps acquirers identify potentially high-risk merchants before entering to a merchant agreement.

## Actions

### fraud.merchant.v3.add_merchant.post
Used by Acquirers to add a terminated a merchant in the MATCH system. Merchant information, and up to five principal owners per merchant, can be provided by an acquiring bank as part of the listing.



```js
mastercard_match.fraud.merchant.v3.add_merchant.post({
  "AddTerminatedMerchantRequestSchema": null
}, context)
```

#### Input
* input `object`
  * AddTerminatedMerchantRequestSchema **required** [AddTerminatedMerchantRequestSchema](#addterminatedmerchantrequestschema)

#### Output
* output [AddTerminatedMerchantResponseSchema](#addterminatedmerchantresponseschema)

### fraud.merchant.v3.common.contact_details.post
Returns the contact information for the acquirer id requested. When MATCH returns a possible merchant match, this resource assists users by retrieving the contact information associated with the Acquirer ID/ICA that added the merchant to MATCH.



```js
mastercard_match.fraud.merchant.v3.common.contact_details.post({
  "ContactRequest": null
}, context)
```

#### Input
* input `object`
  * ContactRequest **required** [ContactRequestSchema](#contactrequestschema)

#### Output
* output [ContactResponseSchema](#contactresponseschema)

### fraud.merchant.v3.retro.retro_inquiry_details.post
Returns detailed information about Merchants, URLs and up to five principal owners, that have been terminated by an acquiring bank after the inquiry was made.  This MATCH resource assists acquirer's ability to consider the merchants terminated after the inquiry was made. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry Summary service. This resource can be used to obtain detailed information, such as, if a Merchant or individual has been terminated by another acquirer after an inquiry was made, the reason for termination, and the history of fraudulent or risky business practices that led to that termination.



```js
mastercard_match.fraud.merchant.v3.retro.retro_inquiry_details.post({
  "AcquirerId": "",
  "RetroInquiryRequest": null
}, context)
```

#### Input
* input `object`
  * AcquirerId **required** `string`: The Member ICA number which is used to validate that the application has permission to hit the MATCH database. This number must be obtained from a participating MATCH acquiring bank or entity before a developer can access the MATCH resource.
  * RetroInquiryRequest **required** [RetroInquiryRequestSchema](#retroinquiryrequestschema)

#### Output
* output [RetroInquiryResponseSchema](#retroinquiryresponseschema)

### fraud.merchant.v3.retro.retro_list.post
Returns the summary of Retro matches for the given Acquirer Id. This resource will return the summary of Retroactive Inquiry matches for the given Acquirer ID/ICA. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry service.



```js
mastercard_match.fraud.merchant.v3.retro.retro_list.post({
  "RetroRequest": null
}, context)
```

#### Input
* input `object`
  * RetroRequest **required** [RetroRequestSchema](#retrorequestschema)

#### Output
* output [RetroResponseSchema](#retroresponseschema)

### fraud.merchant.v3.termination_inquiry.post
Returns information on merchants that have been terminated and merchants which have been inquired upon. MATCH can provide the acquiring bank with information, such as, if a Merchant or individual has been terminated by another acquirer already, the reason for termination, the history of fraudulent or risky business practices that led to that termination and the inquiry that was made already on the Merchant or individual by own or another acquiring bank (If opted)



```js
mastercard_match.fraud.merchant.v3.termination_inquiry.post({
  "PageOffset": 0,
  "PageLength": 0,
  "TerminationInquiryRequest": null
}, context)
```

#### Input
* input `object`
  * PageOffset **required** `number`: The zero-based offset to start at. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * PageLength **required** `number`: The maximum number of items to retrieve within the current "page" of results.
  * TerminationInquiryRequest **required** [TerminationInquiryRequestSchema](#terminationinquiryrequestschema)

#### Output
* output [TerminationInquirySchema](#terminationinquiryschema)

### fraud.merchant.v3.termination_inquiry.IRN.get
Returns information about Merchants, URLs and up to five principal owners, that have been terminated by an acquiring bank from a previous inquiry. The Inquiry History Results resource displays the inquiry with the option to view either; Possible Merchant Matches or Possible Inquiry Matches.



```js
mastercard_match.fraud.merchant.v3.termination_inquiry.IRN.get({
  "PageOffset": 0,
  "PageLength": 0,
  "AcquirerId": "",
  "IRN": ""
}, context)
```

#### Input
* input `object`
  * PageOffset **required** `number`: The zero-based offset to start at. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * PageLength **required** `number`: The maximum number of items to retrieve within the current "page" of results.
  * AcquirerId **required** `string`: The Member ICA number which is used to validate that the application has permission to hit the MATCH database. This number must be obtained from a participating MATCH acquiring bank or entity before a developer can access the MATCH resource.
  * IRN **required** `string`: Inquiry Reference Number (IRN) A unique identifier generated by the MATCH system that is returned in the original, previously submitted POST request (contained within the "TerminationInquiry.Ref" response node). This unique identifier should be present as a URL parameter within all GET requests.

#### Output
* output [TerminationInquirySchema](#terminationinquiryschema)



## Definitions

### AddMerchantMerchant
* AddMerchantMerchant `object`
  * Address [Address](#address)
  * AltPhoneNumber `string`: The Business or Merchant's alternate phone number.
  * CATFlag **required** `string`: Cardholder-activated terminal indicator.
  * Comments `string`: Brief comments on why Merchant is added
  * CountrySubdivisionTaxId **required** `string`: The Merchant's state tax ID; for the U.S region only. Return value will be hidden.
  * DateClosed **required** `string`: Date the agreement was terminated with the merchant
  * DateOpened **required** `string`: Date the merchant entered into agreement with the acquirer
  * DoingBusinessAsName `string`: The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop
  * MerchantCategory **required** `string`: A classification code used in authorization, clearing, and other transactions or reports to identify the type of merchant.
  * MerchantId **required** `string`: The identifier assigned to a merchant by an Acquirer. An Acquirer Id and Merchant Id combination must be unique.
  * Name **required** `string`: The name of the Business which has been terminated.
  * NationalTaxId `string`: The National tax ID or business registration number. Return value will be hidden.
  * PhoneNumber **required** `string`: The Business or Merchant's phone number.
  * Principal [Principal](#principal)
  * ReasonCode **required** `string`: A two digit numeric code indication why a particular merchant was terminated.  01   Account Data Compromise, 02   Common Points of Purchase, 03   Laundering, 04   Excessive Chargebacks, 05   Excessive Fraud, 06   Reserved for Future Use, 07   Fraud Conviction, 08   MasterCard Questionable Merchant Audit Program, 09   Bankruptcy/Liquidation/Insolvency, 10   Violation of MasterCard Standards, 11   Merchant collusion, 12   PCI Data Security Standard, Noncompliance, 13   Illegal Transactions, 14   Identity Theft
  * ServiceProvDBA `string`: The name of the service provider associated with the merchant listed in the MATCH.
  * ServiceProvLegal `string`: The name of the service provider associated with the merchant listed in the MATCH.
  * Url `array`
    * items `string`: Website address of the merchant. A request may include multiple URLs . The total cumulative size of the URLs cannot exceed 20000 bytes.

### AddMerchantRequest
* AddMerchantRequest `object`
  * AcquirerId **required** `string`: The ID of the acquirer.
  * Merchant [AddMerchantMerchant](#addmerchantmerchant)

### AddMerchantResponse
* AddMerchantResponse `object`
  * MerchantReferenceNumber `string`: A number assigned by the MATCH system to uniquely identify the newly added merchant. Return of this number indicates a successful add.
  * Name `string`: Name of the merchant that was added to the MATCH system as verification of what was added.

### AddTerminatedMerchantRequestSchema
* AddTerminatedMerchantRequestSchema `object`
  * AddMerchantRequest [AddMerchantRequest](#addmerchantrequest)

### AddTerminatedMerchantResponseSchema
* AddTerminatedMerchantResponseSchema `object`
  * AddMerchantResponse [AddMerchantResponse](#addmerchantresponse)

### Address
* Address `object`
  * City **required** `string`: The name of the city for a merchant location.
  * Country **required** `string`: The three digit country code of the principal owner. Valid values are Three digit alpha country codes as defined in ISO 3166-1.
  * CountrySubdivision **required** `string`: The abbreviated state or province code for a merchant location (only supported for US and Canada merchants).
  * Line1 **required** `string`: Line 1 of the street address for the merchant location. Usually includes street number and name.
  * Line2 `string`: Line 2 of the street address,usually an apartment number or suite number.
  * PostalCode **required** `string`: The postal code for a merchant location (only supported for US and Canada merchants).
  * Province `string`: The name of the province for the location.

### Contact
* Contact `object`
  * BankName `string`: The name of acquiring bank.
  * EmailAddress `string`: The Email address of primary contact of acquiring bank. The results may return information for more than one Contact.
  * FaxNumber `string`: The Fax Number of primary contact of acquiring bank. The results may return information for more than one Contact.
  * FirstName `string`: The first name of primary contact of acquiring bank. The results may return information for more than one Contact.
  * LastName `string`: The last name of primary contact of acquiring bank. The results may return information for more than one Contact.
  * PhoneNumber `string`: The Phone Number of primary contact of acquiring bank. The results may return information for more than one Contact.
  * Region `string`: The region of acquiring bank. The results may return information for more than one Contact.

### ContactRequest
* ContactRequest `object`
  * AcquirerId **required** `string`: The acquiring bank ICA number whose contact information is to be fetched.

### ContactRequestSchema
* ContactRequestSchema `object`
  * ContactRequest [ContactRequest](#contactrequest)

### ContactResponse
* ContactResponse `object`
  * Contact `array`
    * items [Contact](#contact)

### ContactResponseSchema
* ContactResponseSchema `object`
  * ContactResponse [ContactResponse](#contactresponse)

### DriversLicense
* DriversLicense `object`
  * Country `string`: The three digit country code of the principal owner. Valid values are Three digit alpha country codes as defined in ISO 3166-1. Required when Drivers License Number is provided. Should not be provided if Drivers License Number is not provided.
  * CountrySubdivision `string`: The abbreviated state or province code for a merchant location (only supported for US and Canada merchants).  Required when Drivers License Country is 'USA' . Should not be provided for non-US Drivers License Country.
  * Number `string`: The drivers license number of a principal owner.

### Error
* Error `object`
  * Description `string`: This is the text description of the error. This is optional and will only be displayed if more information is available than is stored in the data identifier and reason code.
  * ReasonCode `string`: This will identify the reason for the error.
  * Recoverable `boolean`: This is a true/false presentation to explain if the transaction was submitted again would it be successful or not.
  * Source `string`: This is the unique identifier that attempts to define the field in error when available.  If a specific field cant be identified System will be returned.

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)

### ErrorsResponse
* ErrorsResponse `object`
  * Errors [Errors](#errors)

### InquiredMerchant
* InquiredMerchant `object`
  * Merchant `object`
    * AddedByAcquirerID `string`: The Member ICA that has added the merchant to the MATCH system
    * AddedOnDate `string`: The date on which the merchant was added to the MATCH system. Format MM/DD/YYYY
    * Address [Address](#address)
    * AltPhoneNumber `string`: The Business or Merchant's alternate phone number.
    * CountrySubdivisionTaxId `string`: The Merchant's state tax ID; for the U.S region only. Return value will be hidden.
    * DoingBusinessAsName `string`: The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop
    * MerchantMatch [MerchantMatch](#merchantmatch)
    * Name `string`: The name of the Business which has been terminated.
    * NationalTaxId `string`: The National tax ID or business registration number. Return value will be hidden.
    * PhoneNumber `string`: The Business or Merchant's phone number.
    * Principal [Principal](#principal)
    * ServiceProvDBA `string`: The name of the service provider associated with the merchant listed in the MATCH.
    * ServiceProvLegal `string`: The name of the service provider associated with the merchant listed in the MATCH.
    * TerminationReasonCode `string`: A two digit numeric code indication why a particular merchant was terminated.  01   Account Data Compromise, 02   Common Points of Purchase, 03   Laundering, 04   Excessive Chargebacks, 05   Excessive Fraud, 06   Reserved for Future Use, 07   Fraud Conviction, 08   MasterCard Questionable Merchant Audit Program, 09   Bankruptcy/Liquidation/Insolvency, 10   Violation of MasterCard Standards, 11   Merchant collusion, 12   PCI Data Security Standard, Noncompliance, 13   Illegal Transactions, 14   Identity Theft
    * UrlGroup [UrlGroup](#urlgroup)

### Merchant
* Merchant `object`
  * AddedByAcquirerID `string`: The Member ICA that has added the merchant to the MATCH system
  * AddedOnDate `string`: Date the merchant was added to the MATCH database.
  * Address [Address](#address)
  * AltPhoneNumber `string`: The Business or Merchant's alternate phone number, including the area code. Within the USA, phone numbers have a length of 10, and for out outside the US, a max length of 25. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The number must be digits only, with no format characters such as parenthesis or dashes.
  * CountrySubdivisionTaxId `string`: The Merchant Country Subdivision tax ID, leave blank if not in the U.S region.
  * DoingBusinessAsName `string`: The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop.
  * Name **required** `string`: The name of the business assigned by the principal owner(s)
  * NationalTaxId `string`: The Merchant national tax ID, leave blank if not in the U.S region.
  * PhoneNumber `string`: The Business or Merchant's phone number, including the area code. Within the USA, phone numbers have a length of 10, and for outside the US, it can be any length with a maximum of 12 digits. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The phone number must be digits only, with no format characters such as parenthesis or dashes.
  * Principal `array`: The details for the principal owner of the business.  A maximum of 5 principals may be submitted.
    * items [Principal](#principal)
  * SearchCriteria [SearchCriteria](#searchcriteria)
  * ServiceProvDBA `string`: The name of the service provider associated with the merchant listed in the MATCH
  * ServiceProvLegal `string`: The name of the service provider associated with the merchant listed in the MATCH
  * TerminationReasonCode `string`: A two digit numeric code indication why a particular merchant was terminated.  01   Account Data Compromise, 02   Common Points of Purchase, 03   Laundering, 04   Excessive Chargebacks, 05   Excessive Fraud, 06   Reserved for Future Use, 07   Fraud Conviction, 08   MasterCard Questionable Merchant Audit Program, 09   Bankruptcy/Liquidation/Insolvency, 10   Violation of MasterCard Standards, 11   Merchant collusion, 12   PCI Data Security Standard, Noncompliance, 13   Illegal Transactions, 14   Identity Theft
  * Url `string`: Website address of the merchant. A request may include multiple URLs. The total cumulative size of the URLs cannot exceed 20,000 bytes.
  * UrlGroup `array`
    * items [UrlGroup](#urlgroup)

### MerchantMatch
* MerchantMatch `object`
  * Address [Address](#address)
  * AltPhoneNumber `string`: The Business or Merchant's alternate phone number.
  * CountrySubdivisionTaxId `string`: The Merchant's state tax ID; for the U.S region only. Return value will be hidden.
  * DoingBusinessAsName `string`: The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop
  * Name `string`: The name of the Business which has been terminated.
  * NationalTaxId `string`: The National tax ID or business registration number. Return value will be hidden.
  * PhoneNumber `string`: The Business or Merchant's phone number.
  * PrincipalMatch `array`
    * items [PrincipalMatch](#principalmatch)
  * ServiceProvDBA `string`: The name of the service provider associated with the merchant listed in the MATCH.
  * ServiceProvLegal `string`: The name of the service provider associated with the merchant listed in the MATCH.

### PossibleInquiryMatches
* PossibleInquiryMatches `object`
  * InquiredMerchant `array`
    * items [InquiredMerchant](#inquiredmerchant)
  * TotalLength `string`: The total length of the result set from possible merchant matches of inquiry.

### PossibleMerchantMatches
* PossibleMerchantMatches `object`
  * TerminatedMerchant `array`
    * items [TerminatedMerchant](#terminatedmerchant)
  * TotalLength `string`: The total length of the result set from possible merchant matches of inquiry.

### Principal
* Principal `object`
  * Address [Address](#address)
  * AltPhoneNumber `string`: The Business or Merchant's alternate phone number, including the area code. Within the USA, phone numbers have a length of 10, and for out outside the US, a max length of 25. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The number must be digits only, with no format characters such as parenthesis or dashes.
  * DriversLicense [DriversLicense](#driverslicense)
  * FirstName **required** `string`: The first name of the principal owner of the business.
  * LastName **required** `string`: The last name of the principal owner of the business.
  * MiddleInitial `string`: THe middle initial of the name of the principal owner of the business.
  * NationalId `string`: The Social Security number of a principal owner. If the principal owner is not from the U.S. Region, then use their national ID card number.
  * PhoneNumber `string`: The Business or Merchant's phone number, including the area code. Within the USA, phone numbers have a length of 10, and for outside the US, it can be any length with a maximum of 12 digits. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The phone number must be digits only, with no format characters such as parenthesis or dashes.
  * SearchCriteria [SearchCriteria](#searchcriteria)

### PrincipalMatch
* PrincipalMatch `object`
  * Address [Address](#address)
  * AltPhoneNumber `string`: The Business or Merchant's alternate phone number, including the area code. Within the USA, phone numbers have a length of 10, and for out outside the US, a max length of 25. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The number must be digits only, with no format characters such as parenthesis or dashes.
  * DriversLicense [DriversLicense](#driverslicense)
  * FirstName `string`: The first name of the principal owner of the business.
  * LastName `string`: The last name of the principal owner of the business.
  * MiddleInitial `string`: THe middle initial of the name of the principal owner of the business.
  * Name `string`: The name of the Business which has been terminated.
  * NationalId `string`: The Social Security number of a principal owner. If the principal owner is not from the U.S. Region, then use their national ID card number.
  * PhoneNumber `string`: The Business or Merchant's phone number, including the area code. Within the USA, phone numbers have a length of 10, and for outside the US, it can be any length with a maximum of 12 digits. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The phone number must be digits only, with no format characters such as parenthesis or dashes.
  * SearchCriteria [SearchCriteria](#searchcriteria)

### RetroInquiryRequest
* RetroInquiryRequest `object`
  * InquiryReferenceNumber `string`: This is the reference number that was obtained from Retroactive Inquiry Summary resource.

### RetroInquiryRequestSchema
* RetroInquiryRequestSchema `object`
  * RetroInquiryRequest [RetroInquiryRequest](#retroinquiryrequest)

### RetroInquiryResponse
* RetroInquiryResponse `object`
  * PossibleMerchantMatches [PossibleMerchantMatches](#possiblemerchantmatches)

### RetroInquiryResponseSchema
* RetroInquiryResponseSchema `object`
  * RetroInquiryResponse [RetroInquiryResponse](#retroinquiryresponse)

### RetroRequest
* RetroRequest `object`
  * AcquirerId `string`: The Acquirer Id for the retro summary to be fetched.

### RetroRequestSchema
* RetroRequestSchema `object`
  * RetroRequest [RetroRequest](#retrorequest)

### RetroResponse
* RetroResponse `object`
  * BusinessName `string`: Name of Merchant or Business corresponds to retro inquiry.
  * City `string`: The name of the city for the merchant location corresponds to retro inquiry.
  * Country `string`: The three digit country code corresponds to retro inquiry. Valid values are Three digit alpha country codes as defined in ISO 3166-1.
  * Date `string`: Date on which the retro inquiry was made. This will be in MM/DD/YYYY format.
  * RefNum `string`: The reference number of retroactive inquiry. Using this reference number, the details can be obtained.
  * State `string`: The abbreviated state for a merchant location corresponds to retro inquiry.

### RetroResponseSchema
* RetroResponseSchema `object`
  * RetroResponse [RetroResponse](#retroresponse)

### SearchCriteria
* SearchCriteria `object`
  * Country `array`
    * items `string`: The three digit country code of the principal owner. Valid values are Three digit alpha country codes as defined in ISO 3166-1. A maximum of 10 countries may be submitted.
  * MinPossibleMatchCount `string`: Determines how many minimum matches present for a merchant or inquiry to appear in the results.
  * Region `array`
    * items `string`: Region in which the inquiry results must be obtained.  (1)  - U.S. REGION; (A)  - CANADA; (B)  - CARIB,C AMERICA,MEX,S AMERICA; (C)  - ASIA/PACIFIC; (D)  - EUROPE; (E)  - SOUTH ASIA MIDDLE EAST AFRICA.  A maximum of 6 regions may be submitted.
  * SearchAll **required** `string`: Determines if the inquiry is worldwide or not.

### TerminatedMerchant
* TerminatedMerchant `object`
  * Merchant [Merchant](#merchant)
  * MerchantMatch [MerchantMatch](#merchantmatch)

### TerminationInquiry
* TerminationInquiry `object`
  * PageOffset `string`
  * PossibleInquiryMatches [PossibleInquiryMatches](#possibleinquirymatches)
  * PossibleMerchantMatches `array`
    * items [PossibleMerchantMatches](#possiblemerchantmatches)
  * TransactionReferenceNumber `string`: User-defined identifier for the inquiry submitted.

### TerminationInquiryRequest
* TerminationInquiryRequest `object`
  * AcquirerId **required** `string`: The Member ICA number which is used to validate that the application has permission to hit the MATCH database. This number must be obtained from a participating MATCH acquiring bank or entity before a developer can access the MATCH resource.
  * Merchant [Merchant](#merchant)
  * TransactionReferenceNumber `string`: User-defined identifier for the inquiry submitted.

### TerminationInquiryRequestSchema
* TerminationInquiryRequestSchema `object`
  * TerminationInquiryRequest [TerminationInquiryRequest](#terminationinquiryrequest)

### TerminationInquirySchema
* TerminationInquirySchema `object`
  * TerminationInquiry [TerminationInquiry](#terminationinquiry)

### Url
* Url `object`
  * Url `array`
    * items `string`: The Url

### UrlGroup
* UrlGroup `object`
  * CloseMatchUrls `array`: The closely matched URL of Merchant.The results may return 0 or more URLs.
    * items [Url](#url)
  * ExactMatchUrls `array`: The exactly matched URL of Merchant.The results may return 0 or more URLs.
    * items [Url](#url)
  * NoMatchUrls [Url](#url)


