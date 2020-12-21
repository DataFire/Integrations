# @datafire/adyen_accountservice

Client library for Adyen for Platforms: Account API

## Installation and Usage
```bash
npm install --save @datafire/adyen_accountservice
```
```js
let adyen_accountservice = require('@datafire/adyen_accountservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.

For more information, refer to our [documentation](https://docs.adyen.com/platforms).
## Authentication
To connect to the Account API, you must use basic authentication credentials of your web service user. If you don't have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:

```
curl
-U "ws@MarketPlace.YourMarketPlace":"YourWsPassword" \
-H "Content-Type: application/json" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Account/v4/createAccountHolder
```

## Actions

### closeAccount.post
This endpoint is used to close an existing account under an account holder. If an account is closed, it may not process transactions or have its funds paid out,and it may not be reopened. Any payments made to a closed account will be directed to the merchant's liable account.


```js
adyen_accountservice.closeAccount.post({}, context)
```

#### Input
* input `object`
  * body [CloseAccountRequest](#closeaccountrequest)

#### Output
* output [CloseAccountResponse](#closeaccountresponse)

### closeAccountHolder.post
This endpoint is used to close an existing account holder and its accounts. If an account holder is closed, it may not process transactions or pay out funds, and it may not be reopened. Any payments made to a closed account will be directed to the merchant's liable account.


```js
adyen_accountservice.closeAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [CloseAccountHolderRequest](#closeaccountholderrequest)

#### Output
* output [CloseAccountHolderResponse](#closeaccountholderresponse)

### createAccount.post
This endpoint is used to create an account under an existing account holder. An account holder may have multiple accounts.


```js
adyen_accountservice.createAccount.post({}, context)
```

#### Input
* input `object`
  * body [CreateAccountRequest](#createaccountrequest)

#### Output
* output [CreateAccountResponse](#createaccountresponse)

### createAccountHolder.post
This endpoint is used to create an account holder. Each account holder represents a single sub-merchant, and each sub-merchant must be represented by an account holder. Depending on the legal entity type, different details are required to be provided in the call to this endpoint.


```js
adyen_accountservice.createAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [CreateAccountHolderRequest](#createaccountholderrequest)

#### Output
* output [CreateAccountHolderResponse](#createaccountholderresponse)

### deleteBankAccounts.post
This endpoint is used to delete existing bank accounts from an account holder. For this, pass the `accountHolderCode` you got on the account holder creation, and one or more `bankAccountUUIDs` specifying bank accounts to delete.


```js
adyen_accountservice.deleteBankAccounts.post({}, context)
```

#### Input
* input `object`
  * body [DeleteBankAccountRequest](#deletebankaccountrequest)

#### Output
* output [GenericResponse](#genericresponse)

### deleteShareholders.post
This endpoint is used to delete existing shareholders from an account holder.


```js
adyen_accountservice.deleteShareholders.post({}, context)
```

#### Input
* input `object`
  * body [DeleteShareholderRequest](#deleteshareholderrequest)

#### Output
* output [GenericResponse](#genericresponse)

### getAccountHolder.post
This endpoint is used to retrieve the details of an account holder.


```js
adyen_accountservice.getAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [GetAccountHolderRequest](#getaccountholderrequest)

#### Output
* output [GetAccountHolderResponse](#getaccountholderresponse)

### getUploadedDocuments.post
This endpoint is used to retrieve documents previously uploaded for use in the KYC Verification of an account holder.

For further information regarding KYC Verification, please refer to [Verification checks](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks).


```js
adyen_accountservice.getUploadedDocuments.post({}, context)
```

#### Input
* input `object`
  * body [GetUploadedDocumentsRequest](#getuploadeddocumentsrequest)

#### Output
* output [GetUploadedDocumentsResponse](#getuploadeddocumentsresponse)

### suspendAccountHolder.post
This endpoint is used to suspend an existing account holder. If an account holder is suspended, it may not process transactions or pay out funds. Any payments made to a suspended account holder will be directed to the merchant's liable account.


```js
adyen_accountservice.suspendAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [SuspendAccountHolderRequest](#suspendaccountholderrequest)

#### Output
* output [SuspendAccountHolderResponse](#suspendaccountholderresponse)

### unSuspendAccountHolder.post
This endpoint is used to reinstate an existing account holder, which has been suspended through the `/suspendAccountHolder` endpoint. An account holder which has been suspended due to KYC verification issues cannot be reinstated through this endpoint.


```js
adyen_accountservice.unSuspendAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [UnSuspendAccountHolderRequest](#unsuspendaccountholderrequest)

#### Output
* output [UnSuspendAccountHolderResponse](#unsuspendaccountholderresponse)

### updateAccount.post
This endpoint is used to update the description or payout schedule of an existing account.


```js
adyen_accountservice.updateAccount.post({}, context)
```

#### Input
* input `object`
  * body [UpdateAccountRequest](#updateaccountrequest)

#### Output
* output [UpdateAccountResponse](#updateaccountresponse)

### updateAccountHolder.post
This endpoint is used to update the `accountHolderDetails` or `processingTier` of an account holder.

If updating the `accountHolderDetails`, only the details which have been provided will be updated. Other details will be left as-is with the exception of the following fields:
* `accountHolderDetails.address`
* `accountHolderDetails.fullPhoneNumber`
* `accountHolderDetails.bankAccountDetails.BankAccountDetail`
* `accountHolderDetails.businessDetails.shareholders.ShareholderContact`, which requires all fields necessary for validation (i.e. in order to update only the `accountHolderDetails.address.postalCode`, the fields `accountHolderDetails.address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` must be provided as well, so that the address can be properly validated).

Note that this endpoint can also be used to create new bank accounts. For this, provide details of a bank account without providing a `bankAccountUUID`.

Similarly, it can also be used to create new shareholders by providing details of a shareholder without providing a `shareholderCode`.
> The updating of the `metadata` field will overwite all of the existing account holder metadata. In order to update an existing metadata key-value pair, all otherkey-value pairs should be provided in order to not delete them.


```js
adyen_accountservice.updateAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [UpdateAccountHolderRequest](#updateaccountholderrequest)

#### Output
* output [UpdateAccountHolderResponse](#updateaccountholderresponse)

### updateAccountHolderState.post
This endpoint is used to disable or enable the processing or payout state of an account holder. It cannot be used to enable an account holder whose processing or payout state has not been disabled through this endpoint.

For more information about processing and payout states of an account holder, refer to [our documentation](https://docs.adyen.com/platforms).


```js
adyen_accountservice.updateAccountHolderState.post({}, context)
```

#### Input
* input `object`
  * body [UpdateAccountHolderStateRequest](#updateaccountholderstaterequest)

#### Output
* output [GetAccountHolderStatusResponse](#getaccountholderstatusresponse)

### uploadDocument.post
This endpoint is used to upload a document for use in the KYC verification of an account holder.

For further information regarding KYC Verification, please refer to [Verification checks](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks).


```js
adyen_accountservice.uploadDocument.post({}, context)
```

#### Input
* input `object`
  * body [UploadDocumentRequest](#uploaddocumentrequest)

#### Output
* output [UpdateAccountHolderResponse](#updateaccountholderresponse)



## Definitions

### Account
* Account `object`
  * accountCode `string`: The code of the account.
  * beneficiaryAccount `string`: The beneficiary of the account.
  * beneficiaryMerchantReference `string`: The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user.
  * description `string`: A description of the account.
  * payoutSchedule [PayoutScheduleResponse](#payoutscheduleresponse)
  * status `string`: The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`.

### AccountEvent
* AccountEvent `object`
  * event **required** `string` (values: InactivateAccount, RefundNotPaidOutTransfers): The event.
  * executionDate **required** `string`: The date on which the event will take place.
  * reason **required** `string`: The reason why this event has been created.

### AccountHolderDetails
* AccountHolderDetails `object`
  * address [ViasAddress](#viasaddress)
  * bankAccountDetails `array`: Each of the bank accounts associated with the account holder.
    * items [BankAccountDetail](#bankaccountdetail)
  * businessDetails [BusinessDetails](#businessdetails)
  * email **required** `string`: The email address of the account holder.
  * fullPhoneNumber **required** `string`: The phone number of the account holder provided as a single string. It will be handled as a landline phone.
  * individualDetails [IndividualDetails](#individualdetails)
  * merchantCategoryCode `string`: The Merchant Category Code of the account holder.
  * metadata `object`: A set of key and value pairs for general use by the account holder or merchant.
  * webAddress **required** `string`: The URL of the website of the account holder.

### AccountHolderStatus
* AccountHolderStatus `object`
  * events `array`: A list of events scheduled for the account holder.
    * items [AccountEvent](#accountevent)
  * payoutState [AccountPayoutState](#accountpayoutstate)
  * processingState [AccountProcessingState](#accountprocessingstate)
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The status of the account holder.
  * statusReason `string`: The reason why the status was assigned to the account holder.

### AccountPayoutState
* AccountPayoutState `object`
  * allowPayout `boolean`: Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.
  * disableReason `string`: The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.
  * disabled `boolean`: Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.
  * payoutLimit [Amount](#amount)
  * tierNumber `integer`: The payout tier that the account holder occupies.

### AccountProcessingState
* AccountProcessingState `object`
  * disableReason `string`: The reason why processing has been disabled.
  * disabled `boolean`: Indicates whether the processing of payments is allowed.
  * processedFrom [Amount](#amount)
  * processedTo [Amount](#amount)
  * tierNumber `integer`: The processing tier that the account holder occupies.

### Amount
* Amount `object`
  * currency **required** `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * value **required** `integer`: The payable amount that can be charged for the transaction.

### BankAccountDetail
* BankAccountDetail `object`
  * accountNumber `string`: The bank account number (without separators).
  * accountType `string`: The type of bank account.
  * bankAccountName `string`: The name of the bank account.
  * bankAccountUUID `string`: The unique identifier (UUID) of the Bank Account.
  * bankBicSwift `string`: The bank identifier code.
  * bankCity `string`: The city in which the bank branch is located.
  * bankCode `string`: The bank code of the banking institution with which the bank account is registered.
  * bankName `string`: The name of the banking institution with which the bank account is held.
  * branchCode `string`: The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
  * checkCode `string`: The check code of the bank account.
  * countryCode `string`: The two-letter country code in which the bank account is registered.
  * currencyCode `string`: The currency in which the bank account deals.
  * iban `string`: The international bank account number.
  * ownerCity `string`: The city of residence of the bank account owner.
  * ownerCountryCode `string`: The country code of the country of residence of the bank account owner.
  * ownerDateOfBirth `string`: The date of birth of the bank account owner.
  * ownerHouseNumberOrName `string`: The house name or number of the residence of the bank account owner.
  * ownerName `string`: The name of the bank account owner.
  * ownerNationality `string`: The country code of the country of nationality of the bank account owner.
  * ownerPostalCode `string`: The postal code of the residence of the bank account owner.
  * ownerState `string`: The state of residence of the bank account owner.
  * ownerStreet `string`: The street name of the residence of the bank account owner.
  * primaryAccount `boolean`: If set to true, the bank account is a primary account.
  * taxId `string`: The tax ID number.
  * urlForVerification `string`: The URL to be used for bank account verification.

### BusinessDetails
* BusinessDetails `object`
  * doingBusinessAs `string`: The registered name of the company (if it differs from the legal name of the company).
  * legalBusinessName `string`: The legal name of the company.
  * registrationNumber `string`: The registration number of the company.
  * shareholders `array`: Each of the shareholders associated with the company.
    * items [ShareholderContact](#shareholdercontact)
  * taxId `string`: The tax ID of the company.

### CloseAccountHolderRequest
* CloseAccountHolderRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder to be closed.

### CloseAccountHolderResponse
* CloseAccountHolderResponse `object`
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### CloseAccountRequest
* CloseAccountRequest `object`
  * accountCode **required** `string`: The code of account to be closed.

### CloseAccountResponse
* CloseAccountResponse `object`
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The new status of the account.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### CreateAccountHolderRequest
* CreateAccountHolderRequest `object`
  * accountHolderCode **required** `string`: The desired code of the prospective account holder.
  * accountHolderDetails **required** [AccountHolderDetails](#accountholderdetails)
  * createDefaultAccount `boolean`: If set to true, an account with the default options is created for this account holder.
  * description `string`: A description of the prospective account holder.
  * legalEntity **required** `string` (values: Business, Individual, NonProfit, Partnership, PublicCompany): The entity type.
  * primaryCurrency `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
  * processingTier `integer`: The starting [processing tier](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks#tiers) for the prospective account holder.

### CreateAccountHolderResponse
* CreateAccountHolderResponse `object`
  * accountCode `string`: The code of a new account created for the account holder.
  * accountHolderCode **required** `string`: The code of the new account holder.
  * accountHolderDetails **required** [AccountHolderDetails](#accountholderdetails)
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * description `string`: The description of the new account holder.
  * invalidFields `array`: A list of fields that caused the `/createAccountHolder` request to fail.
    * items [ErrorFieldType](#errorfieldtype)
  * legalEntity **required** `string` (values: Business, Individual, NonProfit, Partnership, PublicCompany): The type of legal entity of the new account holder.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
  * verification **required** [KYCVerificationResult](#kycverificationresult)

### CreateAccountRequest
* CreateAccountRequest `object`
  * accountHolderCode **required** `string`: The code of Account Holder under which to create the account.
  * description `string`: A description of the account.
  * payoutSchedule `string` (values: BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON, DAILY, DAILY_6PM, DAILY_AU, DAILY_EU, DAILY_US, DEFAULT, EVERY_6_HOURS_FROM_MIDNIGHT, HOLD, MONTHLY, WEEKLY, WEEKLY_ON_TUE_FRI_MIDNIGHT, YEARLY): The payout schedule of the prospective account.
  * payoutScheduleReason `string`: The reason for the payout schedule choice.

### CreateAccountResponse
* CreateAccountResponse `object`
  * accountCode **required** `string`: The code of the new account.
  * accountHolderCode **required** `string`: The code of the account holder.
  * description `string`: The description of the account.
  * payoutSchedule [PayoutScheduleResponse](#payoutscheduleresponse)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The status of the account.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### DeleteBankAccountRequest
* DeleteBankAccountRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder from which to delete the Bank Account(s).
  * bankAccountUUIDs **required** `array`: The code(s) of the Bank Accounts to be deleted.
    * items `string`

### DeleteShareholderRequest
* DeleteShareholderRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder from which to delete the Shareholders.
  * shareholderCodes **required** `array`: The code(s) of the Shareholders to be deleted.
    * items `string`

### DocumentDetail
* DocumentDetail `object`
  * accountHolderCode **required** `string`: The code of account holder, to which the document applies.
  * bankAccountUUID `string`: The unique ID of the Bank Account to which the document applies.
  * description `string`: Description of the document.
  * documentType **required** `string` (values: BANK_STATEMENT, BSN, COMPANY_REGISTRATION_SCREENING, DRIVING_LICENCE, DRIVING_LICENCE_BACK, DRIVING_LICENCE_FRONT, ID_CARD, ID_CARD_BACK, ID_CARD_FRONT, PASSPORT, SSN, SUPPORTING_DOCUMENTS): The type of a document. Permitted values:
  * filename **required** `string`: Filename of the document.
  * shareholderCode `string`: The code of the shareholder, to which the document applies.

### ErrorFieldType
* ErrorFieldType `object`
  * errorCode `integer`: The validation error code.
  * errorDescription `string`: A description of the validation error.
  * fieldType [FieldType](#fieldtype)

### FieldType
* FieldType `object`
  * field `string`: The full name of the property.
  * fieldName `string` (values: accountCode, accountHolderCode, accountHolderDetails, accountNumber, accountStateType, accountStatus, accountType, address, bankAccount, bankAccountCode, bankAccountName, bankAccountUUID, bankBicSwift, bankCity, bankCode, bankName, bankStatement, branchCode, businessContact, cardToken, checkCode, city, companyRegistration, country, countryCode, currency, currencyCode, dateOfBirth, description, destinationAccountCode, document, documentExpirationDate, documentIssuerCountry, documentIssuerState, documentName, documentNumber, documentType, doingBusinessAs, drivingLicence, drivingLicenceBack, drivingLicense, email, firstName, fullPhoneNumber, gender, hopWebserviceUser, houseNumberOrName, iban, idCard, idCardBack, idCardFront, idNumber, identityDocument, individualDetails, lastName, legalBusinessName, legalEntity, legalEntityType, merchantAccount, merchantCategoryCode, merchantReference, microDeposit, name, nationality, originalReference, ownerCity, ownerCountryCode, ownerHouseNumberOrName, ownerName, ownerPostalCode, ownerState, ownerStreet, passport, passportNumber, payoutMethodCode, personalData, phoneCountryCode, phoneNumber, postalCode, primaryCurrency, reason, registrationNumber, returnUrl, schedule, shareholder, shareholderCode, socialSecurityNumber, sourceAccountCode, stateOrProvince, status, stockExchange, stockNumber, stockTicker, store, storeDetail, storeName, storeReference, street, taxId, tier, tierNumber, transferCode, unknown, value, virtualAccount, visaNumber, webAddress): The type of the field.
  * shareholderCode `string`: The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.

### GenericResponse
* GenericResponse `object`
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### GetAccountHolderRequest
* GetAccountHolderRequest `object`
  * accountCode `string`: The code of the account of which to retrieve the details.
  * accountHolderCode `string`: The code of the account holder of which to retrieve the details.
  * showDetails `boolean`: True if the request should return the account holder details

### GetAccountHolderResponse
* GetAccountHolderResponse `object`
  * accountHolderCode **required** `string`: The code of the account holder.
  * accountHolderDetails **required** [AccountHolderDetails](#accountholderdetails)
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * accounts `array`: A list of the accounts under the account holder.
    * items [Account](#account)
  * description `string`: The description of the account holder.
  * legalEntity **required** `string` (values: Business, Individual, NonProfit, Partnership, PublicCompany): The legal entity of the account holder.
  * primaryCurrency `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
  * verification **required** [KYCVerificationResult](#kycverificationresult)

### GetAccountHolderStatusResponse
* GetAccountHolderStatusResponse `object`
  * accountHolderCode **required** `string`: The code of the Account Holder.
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### GetUploadedDocumentsRequest
* GetUploadedDocumentsRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder for which to retrieve the documents.
  * bankAccountUUID `string`: The code of the Bank Account for which to retrieve the documents.
  * shareholderCode `string`: The code of the Shareholder for which to retrieve the documents.

### GetUploadedDocumentsResponse
* GetUploadedDocumentsResponse `object`
  * documentDetails `array`: A list of the documents and their details.
    * items [DocumentDetail](#documentdetail)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### IndividualDetails
* IndividualDetails `object`
  * name [ViasName](#viasname)
  * personalData [ViasPersonalData](#viaspersonaldata)

### KYCBankAccountCheckResult
* KYCBankAccountCheckResult `object`
  * bankAccountUUID `string`: The unique ID of the bank account to which the check applies.
  * checks `array`: A list of the checks and their statuses.
    * items [KYCCheckStatusData](#kyccheckstatusdata)

### KYCCheckResult
* KYCCheckResult `object`
  * checks `array`: A list of the checks and their statuses.
    * items [KYCCheckStatusData](#kyccheckstatusdata)

### KYCCheckStatusData
* KYCCheckStatusData `object`
  * requiredFields `array`: A list of the fields required for execution of the check.
    * items `string`
  * status **required** `string` (values: AWAITING_DATA, DATA_PROVIDED, FAILED, INVALID_DATA, PASSED, PENDING, PENDING_REVIEW, RETRY_LIMIT_REACHED, UNCHECKED): The status of the check.
  * summary [KYCCheckSummary](#kycchecksummary)
  * type **required** `string` (values: BANK_ACCOUNT_VERIFICATION, CARD_VERIFICATION, COMPANY_VERIFICATION, IDENTITY_VERIFICATION, NONPROFIT_VERIFICATION, PASSPORT_VERIFICATION, PAYOUT_METHOD_VERIFICATION): The type of check.

### KYCCheckSummary
* KYCCheckSummary `object`
  * code **required** `integer`: The code of the check.
  * description `string`: A description of the check.

### KYCShareholderCheckResult
* KYCShareholderCheckResult `object`
  * checks `array`: A list of the checks and their statuses.
    * items [KYCCheckStatusData](#kyccheckstatusdata)
  * shareholderCode `string`: The code of the shareholder to which the check applies.

### KYCVerificationResult
* KYCVerificationResult `object`
  * accountHolder [KYCCheckResult](#kyccheckresult)
  * bankAccounts `array`: The result(s) of the checks on the bank account(s).
    * items [KYCBankAccountCheckResult](#kycbankaccountcheckresult)
  * shareholders `array`: The result(s) of the checks on the shareholder(s).
    * items [KYCShareholderCheckResult](#kycshareholdercheckresult)

### PayoutScheduleResponse
* PayoutScheduleResponse `object`
  * nextScheduledPayout **required** `string`: The date of the next scheduled payout.
  * schedule **required** `string` (values: BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON, DAILY, DAILY_6PM, DAILY_AU, DAILY_EU, DAILY_US, DEFAULT, EVERY_6_HOURS_FROM_MIDNIGHT, HOLD, MONTHLY, WEEKLY, WEEKLY_ON_TUE_FRI_MIDNIGHT, YEARLY): The payout schedule of the account.

### PersonalDocumentData
* PersonalDocumentData `object`
  * expirationDate `string`: The expiration date of the document.
  * issuerCountry `string`: The two-character country code of the issuer.
  * issuerState `string`: The state issued the document (if applicable)
  * number `string`: The number of the document. Delete the given type if the value empty.
  * type **required** `string` (values: DRIVINGLICENSE, ID, PASSPORT, SOCIALSECURITY, VISA): The type of the document. More then one item pert type does not allowed.

### ShareholderContact
* ShareholderContact `object`
  * address [ViasAddress](#viasaddress)
  * email `string`: The e-mail address of the contact.
  * fullPhoneNumber `string`: The phone number of the contact provided as a single string.  It will be handled as a landline phone.
  * name [ViasName](#viasname)
  * personalData [ViasPersonalData](#viaspersonaldata)
  * phoneNumber [ViasPhoneNumber](#viasphonenumber)
  * shareholderCode `string`: The unique identifier (UUID) of the Shareholder.
  * webAddress `string`: The URL of the website of the contact.

### SuspendAccountHolderRequest
* SuspendAccountHolderRequest `object`
  * accountHolderCode **required** `string`: The code of the account holder to be suspended.

### SuspendAccountHolderResponse
* SuspendAccountHolderResponse `object`
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### UnSuspendAccountHolderRequest
* UnSuspendAccountHolderRequest `object`
  * accountHolderCode **required** `string`: The code of the account holder to be reinstated.

### UnSuspendAccountHolderResponse
* UnSuspendAccountHolderResponse `object`
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### UpdateAccountHolderRequest
* UpdateAccountHolderRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder to be updated.
  * accountHolderDetails [AccountHolderDetails](#accountholderdetails)
  * description `string`: The description to which the Account Holder should be updated.
  * primaryCurrency `string`: The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.
  * processingTier `integer`: The processing tier to which the Account Holder should be updated.

### UpdateAccountHolderResponse
* UpdateAccountHolderResponse `object`
  * accountHolderCode `string`: The code of the account holder.
  * accountHolderDetails [AccountHolderDetails](#accountholderdetails)
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * description `string`: The description of the account holder.
  * invalidFields `array`: in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    * items [ErrorFieldType](#errorfieldtype)
  * legalEntity **required** `string` (values: Business, Individual, NonProfit, Partnership, PublicCompany): The legal entity of the account holder.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
  * updatedFields `array`: A list of the fields updated through the request.
    * items [FieldType](#fieldtype)
  * verification **required** [KYCVerificationResult](#kycverificationresult)

### UpdateAccountHolderStateRequest
* UpdateAccountHolderStateRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder on which to update the state.
  * disable **required** `boolean`: If true, disable the requested state.  If false, enable the requested state.
  * reason `string`: The reason that the state is being updated.
  * stateType **required** `string` (values: LimitedPayout, LimitedProcessing, LimitlessPayout, LimitlessProcessing, Payout, Processing): The state to be updated.

### UpdateAccountRequest
* UpdateAccountRequest `object`
  * accountCode **required** `string`: The code of the account to update.
  * description `string`: A description of the account.
  * payoutSchedule [UpdatePayoutScheduleRequest](#updatepayoutschedulerequest)

### UpdateAccountResponse
* UpdateAccountResponse `object`
  * accountCode **required** `string`: The code of the account.
  * description `string`: The description of the account.
  * payoutSchedule [PayoutScheduleResponse](#payoutscheduleresponse)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * submittedAsync `boolean`: Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:

### UpdatePayoutScheduleRequest
* UpdatePayoutScheduleRequest `object`
  * action `string` (values: CLOSE, NOTHING, UPDATE): Direction on how to handle any payouts that have already been scheduled.
  * reason `string`: The reason for the payout schedule update.
  * schedule **required** `string` (values: BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON, DAILY, DAILY_6PM, DAILY_AU, DAILY_EU, DAILY_US, DEFAULT, EVERY_6_HOURS_FROM_MIDNIGHT, HOLD, MONTHLY, WEEKLY, WEEKLY_ON_TUE_FRI_MIDNIGHT, YEARLY): The payout schedule to which the account is to be updated.

### UploadDocumentRequest
* UploadDocumentRequest `object`
  * accountHolderCode **required** `string`: The code of the account holder, for which the document is submitted.
  * bankAccountUUID `string`: The unique ID of the bank account, for which the document is submitted.
  * documentContent **required** `string`: The content of the document as represented by a Base64-encoded string.
  * documentDetail **required** [DocumentDetail](#documentdetail)
  * shareholderCode `string`: The code of the shareholder, for which the document is submitted.

### ViasAddress
* ViasAddress `object`
  * city `string`: The name of the city.
  * country **required** `string`: The two-character country code of the address. The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
  * houseNumberOrName `string`: The number or name of the house.
  * postalCode `string`: The postal code.
  * stateOrProvince `string`: The abbreviation of the state or province.
  * street `string`: The name of the street.

### ViasName
* ViasName `object`
  * firstName **required** `string`: The first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): The gender.
  * infix `string`: The name's infix, if applicable.
  * lastName **required** `string`: The last name.

### ViasPersonalData
* ViasPersonalData `object`
  * dateOfBirth `string`: The date of birth of the person.
  * documentData `array`: Key value pairs of document type and identify numbers
    * items [PersonalDocumentData](#personaldocumentdata)
  * idNumber `string`: An ID number of the person.
  * nationality `string`: The nationality of the person represented by a two-character country code.

### ViasPhoneNumber
* ViasPhoneNumber `object`
  * phoneCountryCode **required** `string`: The two-character country code of the phone number.
  * phoneNumber **required** `string`: The phone number.
  * phoneType `string` (values: Fax, Landline, Mobile, SIP): The type of the phone number.


