# @datafire/envoice_in

Client library for API v1.0.0

## Installation and Usage
```bash
npm install --save @datafire/envoice_in
```
```js
let envoice_in = require('@datafire/envoice_in').create({
  "x-auth-key": "",
  "x-auth-secret": ""
});

envoice_in.ClientApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}).then(data => {
  console.log(data);
});
```

## Description


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/78ab8c4ce8421e7e0b43)
<span style='margin-left: 0.5em;'>or</span>
<a href='https://documenter.getpostman.com/view/3559821/7TMBCPS' class='openapi-button' _ngcontent-c6>View Postman docs</a>

# Tutorial for running the API in postman

First click on "Run in Postman" button
![postman - tutorial - 1](/Assets/images/api/postman-tutorial/postman-tutorial-1.png)

A new page will open.
Click on "Postman for windows" to run postman as a desktop app.
Make sure you have already [installed](https://www.getpostman.com/docs/postman/launching_postman/installation_and_updates) Postman.
![postman - tutorial - 2](/Assets/images/api/postman-tutorial/postman-tutorial-2.png)

In chrome an alert might show up to set a default app for opening postman links.
Click on "Open Postman".
![postman - tutorial - 3](/Assets/images/api/postman-tutorial/postman-tutorial-3.png)

The OpenAPI specification will be imported in Postman as a new collection named "Envoice api"
![postman - tutorial - 4](/Assets/images/api/postman-tutorial/postman-tutorial-4.png)

When testing be sure to check and modify the environment variables to suit your api key and secret.
The domain is set to envoice's endpoint so you don't really need to change that.
<sub>\*Eye button in top right corner </sub>
![postman - tutorial - 5](/Assets/images/api/postman-tutorial/postman-tutorial-5.png)
![postman - tutorial - 6](/Assets/images/api/postman-tutorial/postman-tutorial-6.png)

You don't need to change the values of the header parameters, because they will be replaced automatically when you send a request with real values from the environment configured in the previous step.
![postman - tutorial - 7](/Assets/images/api/postman-tutorial/postman-tutorial-7.png)

Modify the example data to suit your needs and send a request.
![postman - tutorial - 8](/Assets/images/api/postman-tutorial/postman-tutorial-8.png)
            

## Actions

### ClientApi_All
Return all clients for the account


```js
envoice_in.ClientApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [Client](#client)

### ClientApi_CanDelete
Check if the provided client can be deleted


```js
envoice_in.ClientApi_CanDelete({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `boolean`

### ClientApi_Delete
Delete an existing client


```js
envoice_in.ClientApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [ClientDeleteModel](#clientdeletemodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ClientApi_Details
Return client details. Activities and invoices included.


```js
envoice_in.ClientApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [Client](#client)

### ClientApi_New
Create a client


```js
envoice_in.ClientApi_New({
  "client": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * client **required** [Client](#client)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ClientApi_Update
Update an existing client


```js
envoice_in.ClientApi_Update({
  "client": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * client **required** [Client](#client)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### GeneralApi_Countries
Return all of the platform supported countries


```js
envoice_in.GeneralApi_Countries({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [Country](#country)

### GeneralApi_Currencies
Return all of the platform supported currencies


```js
envoice_in.GeneralApi_Currencies({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [Currency](#currency)

### GeneralApi_UiLanguages
Return all of the platform supported UI languages


```js
envoice_in.GeneralApi_UiLanguages({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [UiLanguage](#uilanguage)

### InvoiceApi_All
Return all invoices for the account


```js
envoice_in.InvoiceApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * queryOptions.page `integer`
  * queryOptions.pageSize `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ListResult[Invoice]](#listresult[invoice])

### InvoiceApi_ChangeStatus
Change invoice status


```js
envoice_in.InvoiceApi_ChangeStatus({
  "statusModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * statusModel **required** [ChangeStatusModel](#changestatusmodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### InvoiceApi_Delete
Delete an existing invoice


```js
envoice_in.InvoiceApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [InvoiceDeleteModel](#invoicedeletemodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_Details
Return invoice data


```js
envoice_in.InvoiceApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [Invoice](#invoice)

### InvoiceApi_New
Create an invoice


```js
envoice_in.InvoiceApi_New({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [Invoice](#invoice)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [Invoice](#invoice)

### InvoiceApi_SendToAccountant
Send the provided invoice to the accountant


```js
envoice_in.InvoiceApi_SendToAccountant({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [Invoice](#invoice)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_SendToClient
Send the provided invoice to the client


```js
envoice_in.InvoiceApi_SendToClient({
  "deliveryOptions": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deliveryOptions **required** [InvoiceDeliveryOptions](#invoicedeliveryoptions)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_Status
Retrieve the status of the invoice


```js
envoice_in.InvoiceApi_Status({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `string` (values: Draft, Paid, Unpaid, Overdue)

### InvoiceApi_Update
Update an existing invoice


```js
envoice_in.InvoiceApi_Update({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [Invoice](#invoice)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [Invoice](#invoice)

### InvoiceApi_Uri
Return the unique url to the client's invoice


```js
envoice_in.InvoiceApi_Uri({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [InvoiceAccessUri](#invoiceaccessuri)

### TaxApi_All
Return all taxes for the account


```js
envoice_in.TaxApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [Tax](#tax)

### TaxApi_Delete
Delete an existing tax


```js
envoice_in.TaxApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [TaxDeleteModel](#taxdeletemodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### TaxApi_New
Create a tax


```js
envoice_in.TaxApi_New({
  "tax": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * tax **required** [Tax](#tax)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### TaxApi_Update
Update an existing tax


```js
envoice_in.TaxApi_Update({
  "tax": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * tax **required** [Tax](#tax)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### WorkTypeApi_All
Return all work types for the account


```js
envoice_in.WorkTypeApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [WorkType](#worktype)

### WorkTypeApi_Delete
Delete an existing work type


```js
envoice_in.WorkTypeApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [WorkTypeDeleteModel](#worktypedeletemodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### WorkTypeApi_Details
Returns details for work types by Id


```js
envoice_in.WorkTypeApi_Details({
  "workTypeId": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workTypeId **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [WorkType](#worktype)

### WorkTypeApi_New
Create a work type


```js
envoice_in.WorkTypeApi_New({
  "workType": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workType **required** [WorkType](#worktype)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### WorkTypeApi_Update
Update an existing work type


```js
envoice_in.WorkTypeApi_Update({
  "workType": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workType **required** [WorkType](#worktype)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*



## Definitions

### Activity
* Activity `object`
  * Id `integer`
  * InvoiceId `integer`
  * InvoiceNumber `string`
  * Link `string`
  * Message `string`
  * RecommendedArticles `array`
    * items [Article](#article)
  * Type `string` (values: Created, Draft, Cloned, SentViaEmail, SentViaSms, SentReminderViaEmail, SentReminderViaSms, Opened, Viewed, Rejected, Updated, Paid, Unpaid, Overdue, NewManualPayment, NewPaymentWithPaypal, NewPaymentWithStripe, NewPaymentWithPayoneer, SentToAccountant, DownloadedAsPdf, MarkAsPaidByTheClient, OpenedAttachment, NewPaymentWithSquare, NewPaymentWithKlikAndPay)
  * UserId `integer`

### Article
* Article `object`
  * Activities `array`
    * items `string` (values: Created, Draft, Cloned, SentViaEmail, SentViaSms, SentReminderViaEmail, SentReminderViaSms, Opened, Viewed, Rejected, Updated, Paid, Unpaid, Overdue, NewManualPayment, NewPaymentWithPaypal, NewPaymentWithStripe, SentToAccountant, DownloadedAsPdf, TopPayingCustomers, LessPayingCustomers, TopDueCustomers, TopWorkTypes, OtherProfession, DesignAndCreativeProfession, SoftwareDevelopmentProfession, ContentWritingAndMarketingProfession, AskForFeedback, NoInvoicesInPreviousMonth, UpdatePortfolio, ShareWorkExperience, PlanTheNextWeek, InvoiceStatus, InvoiceActivities, YourCollections, LatestArticles, ShareAnArticle, InvoiceLogo, InvoiceBasicInfo, InvoiceFromInfo, InvoiceToInfo, InvoiceItemsTable, InvoiceTerms, InvoiceNotes, InvoiceStepsBeforeSendingToClient, OpenedAttachment, Freelancers, Consultants, Smes, Enterprise)
  * Content `string`
  * Course [Course](#course)
  * CourseId `integer`
  * Documents `array`
    * items [ArticleDocument](#articledocument)
  * Id `integer`
  * ImageUrl `string`
  * IsRecommended `boolean`
  * Level `string` (values: Beginner, Competent, Skilled, Specialist, Brand)
  * Link `string`
  * TimeToRead `integer`
  * Title `string`
  * TotalHasHelpedYouVotes `integer`
  * TotalHasHelpedYouVotesPercentage `integer`
  * TotalHasNotHelpedYouVotes `integer`

### ArticleDocument
* ArticleDocument `object`
  * ArticleId `integer`
  * Extension `string`
  * Id `integer`
  * ImageUrl `string`
  * Title `string`
  * Url `string`

### ChangeStatusModel
* ChangeStatusModel `object`
  * Id `integer`: Invoice Id
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): New status of the invoice

### Client
* Client `object`
  * Address `string`
  * CC `string`
  * ClientCountryId `integer`
  * ClientCurrencyId `integer`
  * Email `string`
  * Id `integer`
  * Name `string`
  * PhoneNumber `string`
  * UiLanguageId `integer`
  * UserId `integer`
  * Vat `string`

### ClientDeleteModel
* ClientDeleteModel `object`
  * Id `integer`: Id of client to be deleted

### Country
* Country `object`
  * Id `integer`
  * Name `string`
  * Value `string`

### Course
* Course `object`
  * Articles `array`
    * items [Article](#article)
  * CourseCategory [CourseCategory](#coursecategory)
  * CourseCategoryId `integer`
  * Description `string`
  * Id `integer`
  * ImageUrl `string`
  * Level `string` (values: Beginner, Competent, Skilled, Specialist, Brand)
  * Name `string`
  * TimeToRead `integer`

### CourseCategory
* CourseCategory `object`
  * Courses `array`
    * items [Course](#course)
  * IconClass `string`
  * Id `integer`
  * Name `string`

### Currency
* Currency `object`
  * Id `integer`
  * Name `string`
  * Symbol `string`
  * Value `string`

### ExternalConnection
* ExternalConnection `object`
  * AccessToken `string`
  * AccessTokenSecret `string`
  * Data `string`
  * ExpiresOn `string`
  * ExternalUserId `string`
  * ExternalUsername `string`
  * Id `integer`
  * Provider `string`
  * UserId `integer`

### IErrorInfo
* IErrorInfo `object`
  * Code `string`
  * FaultMessage `string`
  * Group `string`
  * UserVisibleMessage `string`

### Invoice
* Invoice `object`
  * AccessToken `string`
  * Activities `array`
    * items [Activity](#activity)
  * Attachments `array`
    * items [InvoiceAttachment](#invoiceattachment)
  * ClientId `integer`
  * ClonedFromId `integer`
  * CurrencyId `integer`
  * DiscountAmount `number`
  * Duedate `string`
  * EnablePartialPayments `boolean`
  * Id `integer`
  * IssuedOn `string`
  * Items `array`
    * items [InvoiceItem](#invoiceitem)
  * Notes `string`
  * Number `string`
  * PaymentGateways `array`
    * items [PaymentGatewayForInvoice](#paymentgatewayforinvoice)
  * Payments `array`
    * items [Payment](#payment)
  * PoNumber `string`
  * RecurringProfileId `integer`
  * Status `string` (values: Draft, Paid, Unpaid, Overdue)
  * SubTotalAmount `number`
  * TaxAmount `number`
  * Terms `string`
  * TotalAmount `number`
  * UserId `integer`

### InvoiceAccessUri
* InvoiceAccessUri `object`
  * Link `string`

### InvoiceAttachment
* InvoiceAttachment `object`
  * Id `integer`
  * InvoiceId `integer`
  * Link `string`
  * ObfuscatedFileName `string`
  * OriginalFileName `string`
  * Size `integer`
  * Type `string` (values: External, Uploaded)

### InvoiceDeleteModel
* InvoiceDeleteModel `object`
  * Id `integer`: Id of invoice to be deleted

### InvoiceDeliveryOptions
* InvoiceDeliveryOptions `object`
  * Id `integer`
  * InvoiceId `integer`
  * Message `string`

### InvoiceItem
* InvoiceItem `object`
  * Cost `number`
  * Description `string`
  * DiscountAmount `number`
  * DiscountPercentage `number`
  * Id `integer`
  * InvoiceId `integer`
  * Quantity `number`
  * SubTotalAmount `number`
  * TaxAmount `number`
  * TaxId `integer`
  * TaxPercentage `number`
  * TotalAmount `number`
  * WorkTypeId `integer`

### ListResult[Invoice]
* ListResult[Invoice] `object`
  * Count `integer`
  * ErrorMessages `array`
    * items [IErrorInfo](#ierrorinfo)
  * IsFaulted `boolean`
  * Result `array`
    * items [Invoice](#invoice)
  * TotalCount `integer`

### Payment
* Payment `object`
  * Amount `number`
  * Id `integer`
  * Invoice [Invoice](#invoice)
  * InvoiceId `integer`
  * IsAutomatic `boolean`
  * Note `string`
  * PaidOn `string`
  * ReferenceId `string`
  * Type `string` (values: Other, Paypal, Stripe, Payoneer, Bank, Cash, Cheque, Ach, Sepa, Square, KlikAndPay)

### PaymentGateway
* PaymentGateway `object`
  * CanDisconnect `boolean`
  * ClientImportUri `string`
  * ConnectionType `string` (values: OAuth, InputFields)
  * ExternalConnectionId `integer`
  * Fields `array`
    * items [PaymentGatewayInputField](#paymentgatewayinputfield)
  * IsConnected `boolean`
  * IsEnabled `boolean`
  * MaximumAmount `number`
  * MinimumAmount `number`
  * Name `string`
  * OAuthUri `string`
  * RefundUri `string`
  * SupportedCurrencies `array`
    * items [Currency](#currency)
  * SupportsClientsImport `boolean`
  * SupportsRefund `boolean`

### PaymentGatewayForInvoice
* PaymentGatewayForInvoice `object`
  * Id `integer`
  * Name `string`

### PaymentGatewayInputField
* PaymentGatewayInputField `object`
  * Name `string`
  * Value `string`

### QueryOptions
* QueryOptions `object`
  * Page `integer`
  * PageSize `integer`

### QueuedInvoice
* QueuedInvoice `object`
  * ClonedFromId `integer`
  * Id `integer`
  * Invoice [Invoice](#invoice)
  * InvoiceId `integer`
  * RecurringProfileId `integer`
  * ScheduledFor `string`
  * Status `string` (values: Pending, Cancelled, Failed, Processed)
  * UserId `integer`

### RecurringProfile
* RecurringProfile `object`
  * DayOfMonth `integer`
  * DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * DueDateInDays `integer`
  * EndOfRecurrance `string`
  * Id `integer`
  * InvoiceId `integer`
  * Month `integer`
  * RecurrancePattern `string` (values: Daily, Weekly, Monthly, Yearly)
  * RecurranceValue `integer`
  * StartOfRecurrance `string`
  * Status `string` (values: Pending, Active, Cancelled, Finished)
  * Title `string`

### SubscriptionPlan
* SubscriptionPlan `object`
  * CancellatedOn `string`
  * CurrencyCode `string`
  * ExternalIdentifier `string`
  * HasDuePayment `boolean`
  * HasDuePaymentSince `string`
  * Id `integer`
  * Identifier `string`
  * IsActive `boolean`
  * LastPaymentOn `string`
  * MaxClients `integer`
  * Name `string`
  * OrderIdentifier `string`
  * Price `number`
  * Recurrence `string` (values: Monthly, Yearly)
  * SaleId `integer`
  * Status `string` (values: ActiveTrial, ExpiredTrial, Active, Canceled)
  * TrialEndsOn `string`
  * TrialNumberOfDays `integer`
  * TrialStartsOn `string`
  * UserId `integer`
  * Version `integer`

### Tax
* Tax `object`
  * Id `integer`
  * Name `string`
  * Percentage `number`
  * UserId `integer`

### TaxDeleteModel
* TaxDeleteModel `object`
  * Id `integer`: Id of tax to be deleted

### UiLanguage
* UiLanguage `object`
  * Id `integer`
  * Name `string`
  * UiCulture `string`

### User
* User `object`
  * ActionNotificationsLastReadOn `string`
  * Email `string`
  * ExternalConnections `array`
    * items [ExternalConnection](#externalconnection)
  * HasBeenOnboarded `boolean`
  * Id `integer`
  * IsLocked `boolean`
  * IsVerified `boolean`
  * KnowledgeNotificationsLastReadOn `string`
  * LastSeenOn `string`
  * Name `string`
  * Password `string`
  * PasswordSalt `string`
  * ReferralPath `string`
  * ReferredUsers `integer`
  * ReferrerKey `string`
  * Settings [UserSettings](#usersettings)
  * SubscriptionPlan [SubscriptionPlan](#subscriptionplan)
  * Type `string` (values: Anonymous, Customer, SystemAdministrator, Collaborator)
  * Username `string`
  * VerifiedOn `string`
  * YearsOfExperience `string` (values: One, OneToThree, ThreeToFive, SixPlus)

### UserSettings
* UserSettings `object`
  * AccountantEmail `string`
  * Address `string`
  * ApiKey `string`
  * ApiSecret `string`
  * BackgroundImage `string`
  * Bank `string`
  * BankAccount `string`
  * Country [Country](#country)
  * CountryId `integer`
  * Currency [Currency](#currency)
  * CurrencyId `integer`
  * CurrencySymbol `string`
  * EnableRecurringInvoicing `boolean`
  * HasInvoiceLogo `boolean`
  * Iban `string`
  * Id `integer`
  * PhoneNumber `string`
  * Profession `string` (values: Other, DesignAndCreative, SoftwareDevelopment, ContentWritingAndMarketing, Freelancers, Consultants, Smes, Enterprise)
  * ReceiveSmsNotifications `boolean`
  * ReferralProgram `string` (values: Enabled, Disabled)
  * SubscribeToProductEmails `boolean`
  * Swift `string`
  * Terms `string`
  * UserId `integer`
  * VatNumber `string`
  * YearsOfExperience `integer`

### WorkType
* WorkType `object`
  * Id `integer`
  * Title `string`
  * UserId `integer`

### WorkTypeDeleteModel
* WorkTypeDeleteModel `object`
  * Id `integer`: Id of work type to be deleted


