# @datafire/adyen_marketpaynotificationservice

Client library for Adyen for Platforms: Notifications

## Installation and Usage
```bash
npm install --save @datafire/adyen_marketpaynotificationservice
```
```js
let adyen_marketpaynotificationservice = require('@datafire/adyen_marketpaynotificationservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.

For more information, refer to our [documentation](https://docs.adyen.com/platforms/marketpay-notifications).

## Actions

### ACCOUNT_CLOSED.post
This notification is sent when an account has been closed.


```js
adyen_marketpaynotificationservice.ACCOUNT_CLOSED.post({}, context)
```

#### Input
* input `object`
  * body [AccountCloseNotification](#accountclosenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_CREATED.post
This notification is sent when an account has been created.


```js
adyen_marketpaynotificationservice.ACCOUNT_CREATED.post({}, context)
```

#### Input
* input `object`
  * body [AccountCreateNotification](#accountcreatenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_CREATED.post
This notification is sent when an account holder has been created.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_CREATED.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderCreateNotification](#accountholdercreatenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_PAYOUT.post
This notification is sent when a payout request to an account holder has been processed and the payout has been scheduled.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_PAYOUT.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderPayoutNotification](#accountholderpayoutnotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_STATUS_CHANGE.post
This notification is sent when the status of an account holder has been changed.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_STATUS_CHANGE.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderStatusChangeNotification](#accountholderstatuschangenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_STORE_STATUS_CHANGE.post
This notification is sent when the status of a store tied to an account holder has been changed.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_STORE_STATUS_CHANGE.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderStoreStatusChangeNotification](#accountholderstorestatuschangenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_UPCOMING_DEADLINE.post
This notification is sent when an Account Holder has a deadline, to fulfill the requirements of a specific event, coming up.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_UPCOMING_DEADLINE.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderUpcomingDeadlineNotification](#accountholderupcomingdeadlinenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_UPDATED.post
This notification is sent when an account holder has been updated.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_UPDATED.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderUpdateNotification](#accountholderupdatenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_HOLDER_VERIFICATION.post
This notification is sent when KYC Verification results are made available.


```js
adyen_marketpaynotificationservice.ACCOUNT_HOLDER_VERIFICATION.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderVerificationNotification](#accountholderverificationnotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### ACCOUNT_UPDATED.post
This notification is sent when an account has been updated.


```js
adyen_marketpaynotificationservice.ACCOUNT_UPDATED.post({}, context)
```

#### Input
* input `object`
  * body [AccountUpdateNotification](#accountupdatenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### BENEFICIARY_SETUP.post
This notification is sent when a benefactor/beneficiary relationship between accounts has been set up.


```js
adyen_marketpaynotificationservice.BENEFICIARY_SETUP.post({}, context)
```

#### Input
* input `object`
  * body [BeneficiarySetupNotification](#beneficiarysetupnotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### COMPENSATE_NEGATIVE_BALANCE.post
This notification is sent when funds have been transferred from the Marketplace's liable account to an overdrawn account in order to compensate for the overdraft.


```js
adyen_marketpaynotificationservice.COMPENSATE_NEGATIVE_BALANCE.post({}, context)
```

#### Input
* input `object`
  * body [CompensateNegativeBalanceNotification](#compensatenegativebalancenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### DIRECT_DEBIT_INITIATED.post
This notification is sent when an automated direct debit is initiated from the Adyen platform.


```js
adyen_marketpaynotificationservice.DIRECT_DEBIT_INITIATED.post({}, context)
```

#### Input
* input `object`
  * body [DirectDebitInitiatedNotification](#directdebitinitiatednotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### PAYMENT_FAILURE.post
This notification is sent when a payment to an account has failed. In these cases, the funds which were meant for the account are redirected to the Marketplace's liable account.


```js
adyen_marketpaynotificationservice.PAYMENT_FAILURE.post({}, context)
```

#### Input
* input `object`
  * body [PaymentFailureNotification](#paymentfailurenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### PAYOUT_CONFIRMED.post
This notification is sent when a payout is confirmed from the Adyen platform.


```js
adyen_marketpaynotificationservice.PAYOUT_CONFIRMED.post({}, context)
```

#### Input
* input `object`
  * body [AccountHolderPayoutNotification](#accountholderpayoutnotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### REFUND_FUNDS_TRANSFER.post
This notification is sent when the refund of funds from an account have been transferred to another account.


```js
adyen_marketpaynotificationservice.REFUND_FUNDS_TRANSFER.post({}, context)
```

#### Input
* input `object`
  * body [RefundFundsTransferNotification](#refundfundstransfernotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### REPORT_AVAILABLE.post
This notification is sent when a report has been made available.


```js
adyen_marketpaynotificationservice.REPORT_AVAILABLE.post({}, context)
```

#### Input
* input `object`
  * body [ReportAvailableNotification](#reportavailablenotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### SCHEDULED_REFUNDS.post
This notification is sent when a 'Refund Transfers Not Paid Out' call has been processed and the associated refunds have been scheduled.


```js
adyen_marketpaynotificationservice.SCHEDULED_REFUNDS.post({}, context)
```

#### Input
* input `object`
  * body [ScheduledRefundsNotification](#scheduledrefundsnotification)

#### Output
* output [NotificationResponse](#notificationresponse)

### TRANSFER_FUNDS.post
This notification is sent when the funds from an account have been transferred to another account.


```js
adyen_marketpaynotificationservice.TRANSFER_FUNDS.post({}, context)
```

#### Input
* input `object`
  * body [TransferFundsNotification](#transferfundsnotification)

#### Output
* output [NotificationResponse](#notificationresponse)



## Definitions

### AccountCloseNotification
* AccountCloseNotification `object`
  * content **required** [CloseAccountResponse](#closeaccountresponse)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountCreateNotification
* AccountCreateNotification `object`
  * content **required** [CreateAccountResponse](#createaccountresponse)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountEvent
* AccountEvent `object`
  * event **required** `string` (values: InactivateAccount, RefundNotPaidOutTransfers): The event.
  * executionDate **required** `string`: The date on which the event will take place.
  * reason **required** `string`: The reason why this event has been created.

### AccountHolderCreateNotification
* AccountHolderCreateNotification `object`
  * content **required** [CreateAccountHolderResponse](#createaccountholderresponse)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderDetails
* AccountHolderDetails `object`
  * address [ViasAddress](#viasaddress)
  * bankAccountDetails `array`: Each of the bank accounts associated with the account holder.
    * items [BankAccountDetail](#bankaccountdetail)
  * bankAggregatorDataReference `string`: The opaque reference value returned by the Adyen API during bank account login.
  * businessDetails [BusinessDetails](#businessdetails)
  * email **required** `string`: The email address of the account holder.
  * fullPhoneNumber **required** `string`: The phone number of the account holder provided as a single string. It will be handled as a landline phone.
  * individualDetails [IndividualDetails](#individualdetails)
  * merchantCategoryCode `string`: The Merchant Category Code of the account holder.
  * metadata `object`: A set of key and value pairs for general use by the account holder or merchant.
  * payoutMethods `array`: Each of the card tokens associated with the account holder.
    * items [PayoutMethod](#payoutmethod)
  * webAddress **required** `string`: The URL of the website of the account holder.

### AccountHolderPayoutNotification
* AccountHolderPayoutNotification `object`
  * content **required** [AccountHolderPayoutNotificationContent](#accountholderpayoutnotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderPayoutNotificationContent
* AccountHolderPayoutNotificationContent `object`
  * accountCode **required** `string`: The code of the account from which the payout was made.
  * accountHolderCode **required** `string`: The code of the Account Holder to which the payout was made.
  * amount [Amount](#amount)
  * amounts `array`: The payout amounts (per currency).
    * items [Amount](#amount)
  * bankAccountDetail [BankAccountDetail](#bankaccountdetail)
  * description `string`: A description of the payout.
  * estimatedArrivalDate [LocalDate](#localdate)
  * invalidFields `array`: Invalid fields list.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The merchant reference.
  * originalPspReference `string`: The PSP reference of the original payout.
  * payoutSpeed `string` (values: SAME_DAY, STANDARD): Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
  * status [OperationStatus](#operationstatus)

### AccountHolderStatus
* AccountHolderStatus `object`
  * events `array`: A list of events scheduled for the account holder.
    * items [AccountEvent](#accountevent)
  * payoutState [AccountPayoutState](#accountpayoutstate)
  * processingState [AccountProcessingState](#accountprocessingstate)
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The status of the account holder.
  * statusReason `string`: The reason why the status was assigned to the account holder.

### AccountHolderStatusChangeNotification
* AccountHolderStatusChangeNotification `object`
  * content [AccountHolderStatusChangeNotificationContent](#accountholderstatuschangenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderStatusChangeNotificationContent
* AccountHolderStatusChangeNotificationContent `object`
  * accountHolderCode **required** `string`: The code of the account holder.
  * invalidFields `array`: in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    * items [ErrorFieldType](#errorfieldtype)
  * newStatus **required** [AccountHolderStatus](#accountholderstatus)
  * oldStatus **required** [AccountHolderStatus](#accountholderstatus)
  * reason `string`: The reason for the status change.

### AccountHolderStoreStatusChangeNotification
* AccountHolderStoreStatusChangeNotification `object`
  * content [AccountHolderStoreStatusChangeNotificationContent](#accountholderstorestatuschangenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderStoreStatusChangeNotificationContent
* AccountHolderStoreStatusChangeNotificationContent `object`
  * accountHolderCode **required** `string`: The code of the account holder.
  * invalidFields `array`: In case the store status has not been updated, contains fields that did not pass the validation.
    * items [ErrorFieldType](#errorfieldtype)
  * newStatus **required** `string` (values: Active, Closed, Inactive, InactiveWithModifications, Pending): The new status of the account holder.
  * oldStatus **required** `string` (values: Active, Closed, Inactive, InactiveWithModifications, Pending): The former status of the account holder.
  * reason `string`: The reason for the status change.
  * store **required** `string`: Alphanumeric identifier of the store.
  * storeReference **required** `string`: Store store reference.

### AccountHolderUpcomingDeadlineNotification
* AccountHolderUpcomingDeadlineNotification `object`
  * content [AccountHolderUpcomingDeadlineNotificationContent](#accountholderupcomingdeadlinenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderUpcomingDeadlineNotificationContent
* AccountHolderUpcomingDeadlineNotificationContent `object`
  * accountHolderCode `string`: The code of the account holder whom the event refers to.
  * event `string` (values: AccessPii, CloseAccount, CloseStores, DeleteBankAccounts, DeletePayoutInstrumentTokens, DeletePayoutMethods, DeleteShareholders, InactivateAccount, RecalculateAccountStatusAndProcessingTier, RefundNotPaidOutTransfers, ResolveEvents, SaveAccountHolder, SaveKYCCheckStatus, SuspendAccount, UnSuspendAccount, UpdateAccountHolderState, Verification): The event name that will be trigger if no action is taken.
  * executionDate [LocalDate](#localdate)
  * reason `string`: The reason that leads to scheduling of the event.

### AccountHolderUpdateNotification
* AccountHolderUpdateNotification `object`
  * content **required** [UpdateAccountHolderResponse](#updateaccountholderresponse)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderVerificationNotification
* AccountHolderVerificationNotification `object`
  * content **required** [AccountHolderVerificationNotificationContent](#accountholderverificationnotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### AccountHolderVerificationNotificationContent
* AccountHolderVerificationNotificationContent `object`
  * accountHolderCode **required** `string`: The code of the account holder.
  * bankAccountUUID `string`: The unique ID of the bank account that has been verified.
  * kycCheckStatusData [KYCCheckStatusData](#kyccheckstatusdata)
  * shareholderCode `string`: The code of the shareholder that has been verified.

### AccountPayoutState
* AccountPayoutState `object`
  * allowPayout `boolean`: Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.
  * disableReason `string`: The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.
  * disabled `boolean`: Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.
  * notAllowedReason `string`: The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.
  * payoutLimit [Amount](#amount)
  * tierNumber `integer`: The payout tier that the account holder occupies.

### AccountProcessingState
* AccountProcessingState `object`
  * disableReason `string`: The reason why processing has been disabled.
  * disabled `boolean`: Indicates whether the processing of payments is allowed.
  * processedFrom [Amount](#amount)
  * processedTo [Amount](#amount)
  * tierNumber `integer`: The processing tier that the account holder occupies.

### AccountUpdateNotification
* AccountUpdateNotification `object`
  * content **required** [UpdateAccountResponse](#updateaccountresponse)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

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

### BeneficiarySetupNotification
* BeneficiarySetupNotification `object`
  * content **required** [BeneficiarySetupNotificationContent](#beneficiarysetupnotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### BeneficiarySetupNotificationContent
* BeneficiarySetupNotificationContent `object`
  * destinationAccountCode **required** `string`: The code of the beneficiary account.
  * destinationAccountHolderCode **required** `string`: The code of the beneficiary Account Holder.
  * invalidFields `array`: A listing of the invalid fields which have caused the Setup Beneficiary request to fail. If this is empty, the Setup Beneficiary request has succeeded.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The reference provided by the merchant.
  * sourceAccountCode **required** `string`: The code of the benefactor account.
  * sourceAccountHolderCode **required** `string`: The code of the benefactor Account Holder.
  * transferDate **required** `string`: The date on which the beneficiary was set up and funds transferred from benefactor to beneficiary.

### BusinessDetails
* BusinessDetails `object`
  * doingBusinessAs `string`: The registered name of the company (if it differs from the legal name of the company).
  * legalBusinessName `string`: The legal name of the company.
  * registrationNumber `string`: The registration number of the company.
  * shareholders `array`: Each of the shareholders associated with the company.
    * items [ShareholderContact](#shareholdercontact)
  * taxId `string`: The tax ID of the company.

### CloseAccountResponse
* CloseAccountResponse `object`
  * accountCode `string`: The account code of the account that is closed.
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference **required** `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The new status of the account.

### CompensateNegativeBalanceNotification
* CompensateNegativeBalanceNotification `object`
  * content [CompensateNegativeBalanceNotificationContent](#compensatenegativebalancenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### CompensateNegativeBalanceNotificationContent
* CompensateNegativeBalanceNotificationContent `object`
  * records **required** `array`: A list of the negative balances compensated.
    * items [CompensateNegativeBalanceNotificationRecord](#compensatenegativebalancenotificationrecord)

### CompensateNegativeBalanceNotificationRecord
* CompensateNegativeBalanceNotificationRecord `object`
  * accountCode **required** `string`: The code of the account whose negative balance has been compensated.
  * amount **required** [Amount](#amount)
  * transferDate **required** `string`: The date on which the compensation took place.

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
  * primaryCurrency `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
  * pspReference **required** `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * verification **required** [KYCVerificationResult](#kycverificationresult)

### CreateAccountResponse
* CreateAccountResponse `object`
  * accountCode **required** `string`: The code of the new account.
  * accountHolderCode **required** `string`: The code of the account holder.
  * description `string`: The description of the account.
  * invalidFields `array`: A list of fields that caused the `/createAccount` request to fail.
    * items [ErrorFieldType](#errorfieldtype)
  * metadata `object`
  * payoutSchedule [PayoutScheduleResponse](#payoutscheduleresponse)
  * payoutSpeed `string` (values: SAME_DAY, STANDARD): Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
  * pspReference **required** `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * status **required** `string` (values: Active, Closed, Inactive, Suspended): The status of the account.

### DirectDebitInitiatedNotification
* DirectDebitInitiatedNotification `object`
  * content [DirectDebitInitiatedNotificationContent](#directdebitinitiatednotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### DirectDebitInitiatedNotificationContent
* DirectDebitInitiatedNotificationContent `object`
  * accountCode **required** `string`: The code of the account.
  * amount **required** [Amount](#amount)
  * debitInitiationDate [LocalDate](#localdate)
  * merchantAccountCode **required** `string`: The code of the merchant account.
  * status [OperationStatus](#operationstatus)

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

### IndividualDetails
* IndividualDetails `object`
  * name [ViasName](#viasname)
  * personalData [ViasPersonalData](#viaspersonaldata)

### KYCBankAccountCheckResult
* KYCBankAccountCheckResult `object`
  * bankAccountUUID `string`: The unique ID of the bank account to which the check applies.
  * checks `array`: A list of the checks and their statuses.
    * items [KYCCheckStatusData](#kyccheckstatusdata)

### KYCCardCheckResult
* KYCCardCheckResult `object`
  * checks `array`: A list of the checks and their statuses.
    * items [KYCCheckStatusData](#kyccheckstatusdata)
  * payoutMethodCode `string`: The unique ID of the card to which the check applies.

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
  * kycCheckCode `integer`: The code of the check.
  * kycCheckDescription `string`: A description of the check.

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
  * cards `array`: The result(s) of the checks on the card(s).
    * items [KYCCardCheckResult](#kyccardcheckresult)
  * shareholders `array`: The result(s) of the checks on the shareholder(s).
    * items [KYCShareholderCheckResult](#kycshareholdercheckresult)

### LocalDate
* LocalDate `object`
  * month `integer`
  * year `integer`

### Message
* Message `object`
  * code `string`: The message code.
  * text `string`: The message text.

### NotificationErrorContainer
* NotificationErrorContainer `object`
  * errorCode `string`: The Adyen code that is mapped to the error message.
  * message `string`: A short explanation of the issue.

### NotificationResponse
* NotificationResponse `object`
  * notificationResponse `string`: Set this parameter to **[accepted]** to acknowledge that you received a notification from Adyen.

### OperationStatus
* OperationStatus `object`
  * message [Message](#message)
  * statusCode `string`: The status code.

### PaymentFailureNotification
* PaymentFailureNotification `object`
  * content **required** [PaymentFailureNotificationContent](#paymentfailurenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### PaymentFailureNotificationContent
* PaymentFailureNotificationContent `object`
  * errorFields **required** `array`: Missing or invalid fields that caused the payment error.
    * items [ErrorFieldType](#errorfieldtype)
  * errorMessage **required** [Message](#message)

### PayoutMethod
* PayoutMethod `object`
  * merchantAccount **required** `string`
  * payoutMethodCode `string`
  * payoutMethodType `string` (values: CardToken)
  * recurringDetailReference **required** `string`
  * shopperReference **required** `string`

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

### RefundFundsTransferNotification
* RefundFundsTransferNotification `object`
  * content **required** [RefundFundsTransferNotificationContent](#refundfundstransfernotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### RefundFundsTransferNotificationContent
* RefundFundsTransferNotificationContent `object`
  * amount **required** [Amount](#amount)
  * invalidFields `array`: Invalid fields list.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
  * originalReference **required** `string`: A PSP reference of the original fund transfer.
  * status [OperationStatus](#operationstatus)

### RefundResult
* RefundResult `object`
  * originalTransaction **required** [Transaction](#transaction)
  * pspReference **required** `string`: The reference of the refund.
  * response `string`: The response indicating if the refund has been received for processing.

### ReportAvailableNotification
* ReportAvailableNotification `object`
  * content **required** [ReportAvailableNotificationContent](#reportavailablenotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### ReportAvailableNotificationContent
* ReportAvailableNotificationContent `object`
  * accountCode `string`: The code of the Account to which the report applies.
  * accountType `string`: The type of Account to which the report applies.
  * eventDate `string`: The date of the event to which the report applies.
  * remoteAccessUrl `string`: The URL at which the report can be accessed.
  * success `boolean`: Indicates whether the event resulted in a success.

### ScheduledRefundsNotification
* ScheduledRefundsNotification `object`
  * content **required** [ScheduledRefundsNotificationContent](#scheduledrefundsnotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### ScheduledRefundsNotificationContent
* ScheduledRefundsNotificationContent `object`
  * accountCode **required** `string`: The code of the account.
  * accountHolderCode **required** `string`: The code of the Account Holder.
  * invalidFields `array`: Invalid fields list.
    * items [ErrorFieldType](#errorfieldtype)
  * lastPayout **required** [Transaction](#transaction)
  * refundResults **required** `array`: A list of the refunds that have been scheduled and their results.
    * items [RefundResult](#refundresult)

### ShareholderContact
* ShareholderContact `object`
  * address [ViasAddress](#viasaddress)
  * email `string`: The e-mail address of the contact.
  * fullPhoneNumber `string`: The phone number of the contact provided as a single string.  It will be handled as a landline phone.
  * name [ViasName](#viasname)
  * personalData [ViasPersonalData](#viaspersonaldata)
  * phoneNumber [ViasPhoneNumber](#viasphonenumber)
  * shareholderCode `string`: The unique identifier (UUID) of the Shareholder.
  * shareholderReference `string`: Merchant reference to the Shareholder.
  * webAddress `string`: The URL of the website of the contact.

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

### TransferFundsNotification
* TransferFundsNotification `object`
  * content **required** [TransferFundsNotificationContent](#transferfundsnotificationcontent)
  * error [NotificationErrorContainer](#notificationerrorcontainer)
  * eventDate **required** `string`: The date and time when an event has been completed.
  * eventType **required** `string`: The event type of the notification.
  * executingUserKey **required** `string`: The user or process that has triggered the notification.
  * live **required** `boolean`: Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
  * pspReference **required** `string`: The PSP reference of the request from which the notification originates.

### TransferFundsNotificationContent
* TransferFundsNotificationContent `object`
  * amount **required** [Amount](#amount)
  * destinationAccountCode **required** `string`: The code of the Account to which funds were credited.
  * invalidFields `array`: Invalid fields list.
    * items [ErrorFieldType](#errorfieldtype)
  * merchantReference `string`: The reference provided by the merchant.
  * sourceAccountCode **required** `string`: The code of the Account from which funds were debited.
  * status [OperationStatus](#operationstatus)
  * transferCode **required** `string`: The transfer code.

### UpdateAccountHolderResponse
* UpdateAccountHolderResponse `object`
  * accountHolderCode `string`: The code of the account holder.
  * accountHolderDetails [AccountHolderDetails](#accountholderdetails)
  * accountHolderStatus **required** [AccountHolderStatus](#accountholderstatus)
  * description `string`: The description of the account holder.
  * invalidFields `array`: in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    * items [ErrorFieldType](#errorfieldtype)
  * legalEntity **required** `string` (values: Business, Individual, NonProfit, Partnership, PublicCompany): The legal entity of the account holder.
  * primaryCurrency `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
  * pspReference **required** `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.
  * verification **required** [KYCVerificationResult](#kycverificationresult)

### UpdateAccountResponse
* UpdateAccountResponse `object`
  * accountCode **required** `string`: The code of the account.
  * description `string`: The description of the account.
  * invalidFields `array`: A list of fields that caused the `/updateAccount` request to fail.
    * items [ErrorFieldType](#errorfieldtype)
  * metadata `object`
  * payoutSchedule [PayoutScheduleResponse](#payoutscheduleresponse)
  * payoutSpeed `string` (values: SAME_DAY, STANDARD): Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
  * pspReference **required** `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

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
  * nationality `string`: The nationality of the person represented by a two-character country code.

### ViasPhoneNumber
* ViasPhoneNumber `object`
  * phoneCountryCode **required** `string`: The two-character country code of the phone number.
  * phoneNumber **required** `string`: The phone number.
  * phoneType `string` (values: Fax, Landline, Mobile, SIP): The type of the phone number.


