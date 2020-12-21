# @datafire/adyen_fundservice

Client library for Adyen for Platforms: Fund API

## Installation and Usage
```bash
npm install --save @datafire/adyen_fundservice
```
```js
let adyen_fundservice = require('@datafire/adyen_fundservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include actions such as the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.

For more information, refer to our [documentation](https://docs.adyen.com/platforms).
## Authentication
To connect to the Fund API, you must use basic authentication credentials of your web service user. If you don't have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:

```
curl
-U "ws@MarketPlace.YourMarketPlace":"YourWsPassword" \
-H "Content-Type: application/json" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Fund API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Fund/v5/accountHolderBalance
```

## Actions

### accountHolderBalance.post
This endpoint is used to retrieve the balance(s) of the accounts of an account holder. An account's balances are on a per-currency basis (i.e., an account may have multiple balances: one per currency).


```js
adyen_fundservice.accountHolderBalance.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderBalanceRequest](#accountholderbalancerequest)

#### Output
* output [AccountHolderBalanceResponse](#accountholderbalanceresponse)

### accountHolderTransactionList.post
This endpoint is used to retrieve a list of Transactions for an account holder's accounts. The accounts and Transaction Statuses to be included on the list can be specified. Each call will return a maximum of fifty (50) Transactions per account; in order to retrieve the following set of Transactions another call should be made with the 'page' value incremented. Note that Transactions are ordered with most recent first.


```js
adyen_fundservice.accountHolderTransactionList.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderTransactionListRequest](#accountholdertransactionlistrequest)

#### Output
* output [AccountHolderTransactionListResponse](#accountholdertransactionlistresponse)

### payoutAccountHolder.post
This endpoint is used to pay out a specified amount from an account to the bank account of the account's account holder.


```js
adyen_fundservice.payoutAccountHolder.post({}, context)
```

#### Input
* input `object`
  * body [PayoutAccountHolderRequest](#payoutaccountholderrequest)

#### Output
* output [PayoutAccountHolderResponse](#payoutaccountholderresponse)

### refundFundsTransfer.post
This endpoint is used to refund funds transferred from one account to another. Both accounts must be in the same marketplace, but can have different account holders. 


```js
adyen_fundservice.refundFundsTransfer.post({}, context)
```

#### Input
* input `object`
  * body [RefundFundsTransferRequest](#refundfundstransferrequest)

#### Output
* output [RefundFundsTransferResponse](#refundfundstransferresponse)

### refundNotPaidOutTransfers.post
This endpoint is used to refund all the transactions of an account which have taken place since the most recent payout. This request is on a per-account basis (as opposed to a per-payment basis), so only the portion of the payment which was made to the specified account will be refunded. The commission(s), fee(s), and payment(s) to other account(s), will remain in the accounts to which they were sent as designated by the original payment's split details.


```js
adyen_fundservice.refundNotPaidOutTransfers.post({}, context)
```

#### Input
* input `object`
  * body [RefundNotPaidOutTransfersRequest](#refundnotpaidouttransfersrequest)

#### Output
* output [RefundNotPaidOutTransfersResponse](#refundnotpaidouttransfersresponse)

### setupBeneficiary.post
This endpoint is used to define a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. Note that a series of benefactor/beneficiaries may not exceed four (4) beneficiaries and may not have a cycle in it.


```js
adyen_fundservice.setupBeneficiary.post({}, context)
```

#### Input
* input `object`
  * body [SetupBeneficiaryRequest](#setupbeneficiaryrequest)

#### Output
* output [SetupBeneficiaryResponse](#setupbeneficiaryresponse)

### transferFunds.post
This endpoint is used to transfer funds from one account to another account. Both accounts must be in the same marketplace, but can have different account holders. The transfer must include a transfer code, which should be determined by the marketplace, in compliance with local regulations.


```js
adyen_fundservice.transferFunds.post({}, context)
```

#### Input
* input `object`
  * body [TransferFundsRequest](#transferfundsrequest)

#### Output
* output [TransferFundsResponse](#transferfundsresponse)



## Definitions

### AccountDetailBalance
* AccountDetailBalance `object`
  * accountCode `string`: The code of the account that holds the balance.
  * detailBalance [DetailBalance](#detailbalance)

### AccountHolderBalanceRequest
* AccountHolderBalanceRequest `object`
  * accountHolderCode **required** `string`: The code of the Account Holder of which to retrieve the balance.

### AccountHolderBalanceResponse
* AccountHolderBalanceResponse `object`
  * balancePerAccount `array`: A list of each account and their balances.
    * items [AccountDetailBalance](#accountdetailbalance)
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * totalBalance [DetailBalance](#detailbalance)

### AccountHolderTransactionListRequest
* AccountHolderTransactionListRequest `object`
  * accountHolderCode **required** `string`: The code of the account holder that owns the account(s) of which retrieve the transaction list.
  * transactionListsPerAccount `array`: A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.
    * items [TransactionListForAccount](#transactionlistforaccount)
  * transactionStatuses `array`: A list of statuses to include in the transaction list. If left blank, all transactions will be included.
    * items `string` (values: Chargeback, ChargebackCorrection, ChargebackCorrectionReceived, ChargebackReceived, ChargebackReversed, ChargebackReversedCorrection, ChargebackReversedCorrectionReceived, ChargebackReversedReceived, Converted, CreditClosed, CreditFailed, CreditReversed, CreditReversedReceived, Credited, DebitFailed, DebitReversedReceived, Debited, DebitedReversed, Fee, FundTransfer, FundTransferReversed, ManualCorrected, Payout, PayoutReversed, PendingCredit, PendingDebit, PendingFundTransfer, SecondChargeback, SecondChargebackReceived)

### AccountHolderTransactionListResponse
* AccountHolderTransactionListResponse `object`
  * accountTransactionLists `array`: A list of the transactions.
    * items [AccountTransactionList](#accounttransactionlist)
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### AccountTransactionList
* AccountTransactionList `object`
  * accountCode `string`: The code of the account.
  * hasNextPage `boolean`: Indicates whether there is a next page of transactions available.
  * transactions `array`: The list of transactions.
    * items [Transaction](#transaction)

### Amount
* Amount `object`
  * currency **required** `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * value **required** `integer`: The payable amount that can be charged for the transaction.

### BankAccountDetail
* BankAccountDetail `object`
  * accountNumber `string`: The bank account number (without separators).
  * accountType `string`: The type of bank account.
  * bankAccountName `string`: The name of the bank account.
  * bankAccountReference `string`: Merchant reference to the bank account.
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

### DetailBalance
* DetailBalance `object`
  * balance `array`: The list of balances held by the account.
    * items [Amount](#amount)
  * onHoldBalance `array`: The list of on hold balances held by the account.
    * items [Amount](#amount)
  * pendingBalance `array`: The list of pending balances held by the account.
    * items [Amount](#amount)

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

### PayoutAccountHolderRequest
* PayoutAccountHolderRequest `object`
  * accountCode **required** `string`: The code of the account from which the payout is to be made.
  * accountHolderCode **required** `string`: The code of the Account Holder who owns the account from which the payout is to be made.
  * amount **required** [Amount](#amount)
  * bankAccountUUID `string`: The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
  * description `string`: A description of the payout. Maximum 35 characters.
  * merchantReference `string`: A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
  * payoutMethodCode `string`: The unique ID of the payout method held by the Account Holder to which the payout is to be made.
  * payoutSpeed `string` (values: SAME_DAY, STANDARD): Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.

### PayoutAccountHolderResponse
* PayoutAccountHolderResponse `object`
  * bankAccountUUID `string`: The unique ID of the Bank Account to which the payout was made.
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.
  * payoutSpeed `string` (values: SAME_DAY, STANDARD): Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### RefundFundsTransferRequest
* RefundFundsTransferRequest `object`
  * amount **required** [Amount](#amount)
  * merchantReference `string`: A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
  * originalReference **required** `string`: A PSP reference of the original fund transfer.

### RefundFundsTransferResponse
* RefundFundsTransferResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.
  * message `string`
  * originalReference `string`: A PSP reference of the original fund transfer.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### RefundNotPaidOutTransfersRequest
* RefundNotPaidOutTransfersRequest `object`
  * accountCode **required** `string`: The code of the account from which to perform the refund(s).
  * accountHolderCode **required** `string`: The code of the Account Holder which owns the account from which to perform the refund(s).

### RefundNotPaidOutTransfersResponse
* RefundNotPaidOutTransfersResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### SetupBeneficiaryRequest
* SetupBeneficiaryRequest `object`
  * destinationAccountCode **required** `string`: The destination account code.
  * merchantReference `string`: A value that can be supplied at the discretion of the executing user.
  * sourceAccountCode **required** `string`: The benefactor account.

### SetupBeneficiaryResponse
* SetupBeneficiaryResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### Transaction
* Transaction `object`
  * amount [Amount](#amount)
  * bankAccountDetail [BankAccountDetail](#bankaccountdetail)
  * captureMerchantReference `string`: The merchant reference of a related capture.
  * capturePspReference `string`: The psp reference of a related capture.
  * creationDate `string`: The date on which the transaction was performed.
  * description `string`: A description of the transaction.
  * destinationAccountCode `string`: The code of the account to which funds were credited during an outgoing fund transfer.
  * disputePspReference `string`: The psp reference of the related dispute.
  * disputeReasonCode `string`: The reason code of a dispute.
  * merchantReference `string`: The merchant reference of a transaction.
  * paymentPspReference `string`: The psp reference of the related authorisation or transfer.
  * payoutPspReference `string`: The psp reference of the related payout.
  * pspReference `string`: The psp reference of a transaction.
  * sourceAccountCode `string`: The code of the account from which funds were debited during an incoming fund transfer.
  * transactionStatus `string` (values: Chargeback, ChargebackCorrection, ChargebackCorrectionReceived, ChargebackReceived, ChargebackReversed, ChargebackReversedCorrection, ChargebackReversedCorrectionReceived, ChargebackReversedReceived, Converted, CreditClosed, CreditFailed, CreditReversed, CreditReversedReceived, Credited, DebitFailed, DebitReversedReceived, Debited, DebitedReversed, Fee, FundTransfer, FundTransferReversed, ManualCorrected, Payout, PayoutReversed, PendingCredit, PendingDebit, PendingFundTransfer, SecondChargeback, SecondChargebackReceived): The status of the transaction.
  * transferCode `string`: The transfer code of the transaction.

### TransactionListForAccount
* TransactionListForAccount `object`
  * accountCode **required** `string`: The account for which to retrieve the transactions.
  * page **required** `integer`: The page of transactions to retrieve.

### TransferFundsRequest
* TransferFundsRequest `object`
  * amount **required** [Amount](#amount)
  * destinationAccountCode **required** `string`: The code of the account to which the funds are to be credited.
  * merchantReference `string`: A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
  * sourceAccountCode **required** `string`: The code of the account from which the funds are to be debited.
  * transferCode **required** `string`: The code related to the type of transfer being performed.

### TransferFundsResponse
* TransferFundsResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.


