# @datafire/avaza

Client library for Avaza

## Installation and Usage
```bash
npm install --save @datafire/avaza
```
```js
let avaza = require('@datafire/avaza').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

avaza.UserProfile_Get({}).then(data => {
  console.log(data);
});
```

## Description

For testing and experimenting with Avaza's API features. <p></p><h3>API Security</h3><p>Authentication options include OAuth2 Implicit and Authorization flows.<br/>To use the Api from your own app you will need us to issue you an App Client ID and Secret. You can get in touch to request one.</p> <p>OAuth2 Authorization endpoint: https://any.avaza.com/oauth2/authorize.  <br/>OAuth2 Token endpoint: https://any.avaza.com/oauth2/token<br/>Api Request Base URL: https://api.avaza.com/ </p><br/>Blogpost about authenticating with Avaza's API:  https://www.avaza.com/avaza-api-oauth2-authentication/ </p><p></p>Blogpost on using Avaza's webhooks: https://www.avaza.com/avaza-api-webhook-notifications/</p><p>We currently issue Access Tokens that last 1 hour, and Refresh tokens that last 60 days</p>

## Actions

### Account_Get
Account Details


```js
avaza.Account_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AccountDetails](#accountdetails)

### Company_Get
Gets list of Companies


```js
avaza.Company_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of results per page
  * pageNumber `integer`: 1 based page number to retrieve
  * Sort `string`

#### Output
* output [CompanyList](#companylist)

### Company_GetByID
Gets Company by Company ID


```js
avaza.Company_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Company ID Number

#### Output
* output [Company](#company)

### Contact_Get
Gets list of Contacts


```js
avaza.Contact_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.
  * Sort `string`

#### Output
* output [ContactList](#contactlist)

### Contact_Post
Create a Contact


```js
avaza.Contact_Post({
  "model": {
    "ContactEmail": "",
    "Firstname": "",
    "Lastname": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [NewCompanyContact](#newcompanycontact)

#### Output
* output [CompanyContact](#companycontact)

### Contact_GetByID
Gets Contact by Contact ID


```js
avaza.Contact_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Contact ID number

#### Output
* output [CompanyContact](#companycontact)

### CreditNote_Get
Gets list of CreditNotes


```js
avaza.CreditNote_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.

#### Output
* output [CreditNoteList](#creditnotelist)

### CreditNote_GetByID
Gets Invoice by CreditNote ID


```js
avaza.CreditNote_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Credit Note ID Number

#### Output
* output [CreditNote](#creditnote)

### Currency_Get
Gets list of Currencies


```js
avaza.Currency_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CurrencyList](#currencylist)

### Expense_Get
Gets list of Expenses


```js
avaza.Expense_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * ExpenseDateFrom `string`
  * ExpenseDateTo `string`
  * UserEmail `string`
  * CategoryName `string`
  * CustomerID `integer`
  * ProjectID `integer`
  * isChargeable `boolean`
  * isInvoiced `boolean`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.
  * Sort `string`

#### Output
* output [ExpenseList](#expenselist)

### Expense_Post
Create an Expense


```js
avaza.Expense_Post({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [NewExpense](#newexpense)

#### Output
* output [ExpenseDetails](#expensedetails)

### Expense_GetByID
Gets an Expense Entry by Expense ID


```js
avaza.Expense_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Expense ID number

#### Output
* output [ExpenseDetails](#expensedetails)

### Inventory_Get
Gets list of Inventory


```js
avaza.Inventory_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.

#### Output
* output [InventoryList](#inventorylist)

### Inventory_GetByID
Gets InventoryItem by InventoryItem ID


```js
avaza.Inventory_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: InventoryItem ID number

#### Output
*Output schema unknown*

### Invoice_Get
TransactionStatusCode values are: "Draft", "Sent", "Late", "Paid", "Partial", "Void"


```js
avaza.Invoice_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.
  * Sort `string`

#### Output
* output [InvoiceList](#invoicelist)

### Invoice_Post
Create a new draft invoice


```js
avaza.Invoice_Post({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [NewInvoice](#newinvoice)

#### Output
* output [Invoice](#invoice)

### Invoice_GetByID
Gets Invoice by Invoice ID


```js
avaza.Invoice_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Invoice Transaction ID number

#### Output
*Output schema unknown*

### Payment_Get
Gets list of Payments


```js
avaza.Payment_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.

#### Output
* output [PaymentList](#paymentlist)

### Payment_Post
Create new Payment and optionally assign payment allocations to Invoices


```js
avaza.Payment_Post({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [NewPayment](#newpayment)

#### Output
* output [Payment](#payment)

### Payment_GetByID
Gets Payment by Payment Transaction ID


```js
avaza.Payment_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Invoice Transaction ID Number

#### Output
* output [Payment](#payment)

### Project_Get



```js
avaza.Project_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`
  * pageNumber `integer`
  * Sort `string`
  * TimesheetUserID `integer`

#### Output
* output [ProjectList](#projectlist)

### Project_Post
Create a Project


```js
avaza.Project_Post({
  "model": {
    "ProjectTitle": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [NewProjectModel](#newprojectmodel)

#### Output
* output [ProjectDetails](#projectdetails)

### Project_GetByID
Gets Project by Project ID


```js
avaza.Project_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID number

#### Output
* output [ProjectDetails](#projectdetails)

### ProjectTimesheetCategory_Get
Gets list of Project Timesheet Categories


```js
avaza.ProjectTimesheetCategory_Get({
  "ProjectID": 0
}, context)
```

#### Input
* input `object`
  * ProjectID **required** `integer`: Get categories filtered by ProjectID

#### Output
* output [ProjectTimesheetCategoryList](#projecttimesheetcategorylist)

### Section_Get
Gets list of Sections


```js
avaza.Section_Get({
  "ProjectID": 0
}, context)
```

#### Input
* input `object`
  * ProjectID **required** `integer`: Get sections for Project with ProjectID

#### Output
* output [SectionList](#sectionlist)

### Section_Post
Create a Section


```js
avaza.Section_Post({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [NewSection](#newsection)

#### Output
* output [SectionDetails](#sectiondetails)

### Task_Get
Gets list of Tasks


```js
avaza.Task_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.
  * Sort `string`
  * ProjectID `integer`

#### Output
* output [TaskList](#tasklist)

### Task_Post
Create a Task


```js
avaza.Task_Post({
  "model": {
    "ProjectIDFK": 0,
    "SectionIDFK": 0,
    "Title": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [NewTask](#newtask)

#### Output
* output [TaskDetails](#taskdetails)

### Task_GetByID
Gets Task by Task ID


```js
avaza.Task_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Task ID number

#### Output
* output [TaskDetails](#taskdetails)

### Tax_Get



```js
avaza.Tax_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TaxList](#taxlist)

### Timesheet_Get
Gets list of Timsheets


```js
avaza.Timesheet_Get({}, context)
```

#### Input
* input `object`
  * UpdatedAfter `string`
  * EntryDateFrom `string`
  * EntryDateTo `string`
  * UserEmail `string`
  * CategoryName `string`
  * ProjectID `integer`
  * isBillable `boolean`
  * isInvoiced `boolean`
  * pageSize `integer`: Number of items per page
  * pageNumber `integer`: Page to display. Starts from 1.
  * Sort `string`

#### Output
* output [TimesheetList](#timesheetlist)

### Timesheet_Post
Create a new Timesheet Entry


```js
avaza.Timesheet_Post({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [NewTimesheet](#newtimesheet)

#### Output
* output [TimesheetDetails](#timesheetdetails)

### Timesheet_Delete
Delete a Timesheet Entry


```js
avaza.Timesheet_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The TimesheetEntryID of the Timesheet Entry

#### Output
* output `object`

### Timesheet_GetByID
Gets a Timesheet Entry by Timesheet ID


```js
avaza.Timesheet_GetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Timesheet ID number

#### Output
* output [TimesheetDetails](#timesheetdetails)

### Timesheet_Put
You can Mark a Timesheet as Invoiced/Uninvoiced. Useful if invoicing in an external system to lock timesheets. Note if the timesheet has been invoiced by Avaza you cannot mark it uninvoiced


```js
avaza.Timesheet_Put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: TimesheetEntryID number
  * TaskIDFK `integer`
  * UserIDFK `integer`
  * ProjectIDFK `integer`
  * TimeSheetCategoryIDFK `integer`
  * Duration `number`
  * EntryDate `string`
  * Notes `string`
  * isInvoiced `boolean`: Mark Timesheet as Invoiced (true/false)
  * hasStartEndTime `boolean`

#### Output
* output [TimesheetDetails](#timesheetdetails)

### UserProfile_Get



```js
avaza.UserProfile_Get({}, context)
```

#### Input
* input `object`
  * Roles `string`: Optional list of comma sepaprated roele codes to filter users by (e.g. "TimesheetUser,Admin")

#### Output
* output [UserList](#userlist)

### Webhook_DeleteByUrl
Delete webhook subscription by URL


```js
avaza.Webhook_DeleteByUrl({
  "target_url": ""
}, context)
```

#### Input
* input `object`
  * target_url **required** `string`: Target URL that should be used to delete subscriptions

#### Output
* output `object`

### Webhook_Get
Get list of Webhook Subscriptions


```js
avaza.Webhook_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebhookList](#webhooklist)

### Webhook_Post
When you receive a webhook, you should respond with Http 200 OK Status Code, otherwise we will retry. Event values are: "company_created", "company_deleted", "company_updated", "contact_created", "contact_deleted", "contact_updated", "invoice_created", "invoice_sent", "project_created", "project_deleted", "project_updated", "task_created", "timesheet_created", "timesheet_deleted", "timesheet_updated"


```js
avaza.Webhook_Post({
  "model": {
    "target_url": "",
    "event": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [CreateSubscription](#createsubscription)

#### Output
* output [SubscribeResult](#subscriberesult)

### Webhook_Delete
Delete Webhook Subscription by ID


```js
avaza.Webhook_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Subscription id to be deleted

#### Output
* output `object`



## Definitions

### AccountDetails
* AccountDetails `object`
  * CompanyName `string`
  * LockApprovedTimesheets `boolean`
  * TimesheetDayOfWeek `integer`
  * TimesheetDisplayFormatCode `string`
  * WeeklyTimesheetReminder `boolean`
  * has24HourTimesheetFormat `boolean`
  * hasStartEndTimesheets `boolean`

### Company
* Company `object`
  * BillingAddress `string`
  * BillingAddressCity `string`
  * BillingAddressLine `string`
  * BillingAddressPostCode `string`
  * BillingAddressState `string`
  * BillingCountryCode `string`
  * Comments `string`
  * CompanyID `integer`
  * CompanyName `string`
  * Contacts `array`
    * items [CompanyContact](#companycontact)
  * CurrencyCode `string`
  * DateCreated `string`
  * DateUpdated `string`
  * DefaultTradingTermIDFK `integer`
  * Fax `string`
  * Phone `string`
  * TaxNumber `string`
  * website `string`

### CompanyContact
* CompanyContact `object`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * ContactID `integer`
  * DateCreated `string`
  * DateUpdated `string`
  * Email `string`
  * Firstname `string`
  * Lastname `string`
  * Mobile `string`
  * Phone `string`
  * PositionTitle `string`
  * TimeZone `string`

### CompanyList
* CompanyList `object`
  * Companies `array`
    * items [Company](#company)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### ContactList
* ContactList `object`
  * Contacts `array`
    * items [CompanyContact](#companycontact)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### CreateSubscription
* CreateSubscription `object`: New Subscription to be Created
  * event **required** `string`: The event code to be notified about. Possible values: company_created, contact_created, invoice_created, invoice_sent, project_created, task_created
  * target_url **required** `string`: The URL that should be notified of the event.

### CreditNote
* CreditNote `object`
  * Balance `number`
  * CreditNoteAllocations `array`
    * items [CreditNoteAllocation](#creditnoteallocation)
  * CreditNoteLineItems `array`
    * items [CreditNoteLineItem](#creditnotelineitem)
  * CreditNoteNumber `string`
  * CurrencyCode `string`
  * CustomerIDFK `integer`
  * DateCreated `string`
  * DateIssued `string`
  * DateUpdated `string`
  * Notes `string`
  * TotalAmount `number`
  * TransactionID `integer`
  * TransactionPrefix `string`
  * TransactionStatusCode `string`

### CreditNoteAllocation
* CreditNoteAllocation `object`
  * AllocationAmount `number`
  * AllocationDate `string`
  * CreditNoteTransactionIDFK `integer`
  * InvoiceTransactionIDFK `integer`
  * TransactionAllocationID `integer`

### CreditNoteLineItem
* CreditNoteLineItem `object`
  * Amount `number`
  * Description `string`
  * Discount `number`
  * Quantity `number`
  * TaxAmount `number`
  * TaxIDFK `integer`
  * TransactionLineItemID `integer`
  * UnitPrice `number`

### CreditNoteList
* CreditNoteList `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### Currency
* Currency `object`
  * CurrencyCode `string`
  * DecimalPlaces `integer`

### CurrencyList
* CurrencyList `object`
  * Currencies `array`
    * items [Currency](#currency)

### ExpenseDetails
* ExpenseDetails `object`
  * Amount `number`
  * AttachmentURL `string`
  * ChargeableStatusCode `string`
  * CurrencyCode `string`
  * CustomerIDFK `integer`
  * CustomerName `string`
  * DateCreated `string`
  * DateUpdated `string`
  * Email `string`
  * ExchangeRate `number`
  * ExpenseApprovalStatusCode `string`
  * ExpenseCategoryHasUnitPrice `boolean`
  * ExpenseCategoryIDFK `integer`
  * ExpenseCategoryName `string`
  * ExpenseCategoryUnitName `string`
  * ExpenseCategoryUnitPrice `number`
  * ExpenseDate `string`
  * ExpenseID `integer`
  * ExpenseReportIDFK `integer`
  * ExpenseReportName `string`
  * Firstname `string`
  * Lastname `string`
  * Merchant `string`
  * MerchantTaxNumber `string`
  * Notes `string`
  * ProjectIDFK `integer`
  * ProjectTitle `string`
  * Quantity `number`
  * TaxAmount `number`
  * TaxIDFK `integer`
  * TransactionTaxConfigCode `string`
  * UserIDFK `integer`
  * isChargeable `boolean`

### ExpenseList
* ExpenseList `object`
  * Expenses `array`
    * items [ExpenseDetails](#expensedetails)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### InventoryItem
* InventoryItem `object`
  * CostPrice `number`
  * DateCreated `string`
  * DateUpdated `string`
  * Description `string`
  * InventoryItemID `integer`
  * Name `string`
  * SKU `string`
  * SalePrice `number`
  * SaleTaxIDFK `integer`
  * isHidden `boolean`

### InventoryList
* InventoryList `object`
  * Inventory `array`
    * items [InventoryItem](#inventoryitem)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### Invoice
* Invoice `object`
  * AccountIDFK `integer`
  * Balance `number`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * CurrencyCode `string`
  * CustomerPONumber `string`
  * DateCreated `string`
  * DateIssued `string`
  * DateSent `string`
  * DateUpdated `string`
  * DueDate `string`
  * ExchangeRate `number`
  * InvoiceNumber `string`
  * Issuer [IssuerDetails](#issuerdetails)
  * LineItems `array`
    * items [InvoiceLineItem](#invoicelineitem)
  * Links [InvoiceLinks](#invoicelinks)
  * Notes `string`
  * Recipient [RecipientDetails](#recipientdetails)
  * Subject `string`
  * TaxAmount `number`
  * TotalAmount `number`
  * TransactionID `integer`
  * TransactionPrefix `string`
  * TransactionStatusCode `string`
  * TransactionTaxConfigCode `string`

### InvoiceLineItem
* InvoiceLineItem `object`
  * Amount `number`
  * Description `string`
  * Discount `number`
  * InventoryItemIDFK `integer`
  * InventoryItemName `string`
  * InventoryItemSKU `string`
  * ProjectIDFK `integer`
  * ProjectTitle `string`
  * Quantity `number`
  * TaxAmount `number`
  * TaxCode `string`
  * TaxIDFK `integer`
  * TaxName `string`
  * TransactionLineItemID `integer`
  * UnitPrice `number`

### InvoiceLinks
* InvoiceLinks `object`
  * ClientView `string`
  * Edit `string`
  * View `string`

### InvoiceList
* InvoiceList `object`
  * Invoices `array`
    * items [Invoice](#invoice)
  * PageNumber `integer`
  * PageSize `integer`
  * TotalCount `integer`

### IssuerDetails
* IssuerDetails `object`
  * BillingAddress `string`
  * BillingAddressCity `string`
  * BillingAddressLine `string`
  * BillingAddressPostCode `string`
  * BillingAddressState `string`
  * BillingCountryCode `string`
  * TaxNumber `string`

### NewCompanyContact
* NewCompanyContact `object`
  * CompanyBillingAddress `string`
  * CompanyBillingAddressCity `string`
  * CompanyBillingAddressCountryCode `string`
  * CompanyBillingAddressLine `string`
  * CompanyBillingAddressPostCode `string`
  * CompanyBillingAddressState `string`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * ContactEmail **required** `string`
  * CurrencyCode `string`
  * Firstname **required** `string`
  * Lastname **required** `string`
  * Mobile `string`
  * Phone `string`
  * PositionTitle `string`
  * UpdateExisting `boolean`

### NewExpense
* NewExpense `object`
  * Amount `number`: Expense Amount (Required). Must be &gt;= 0
  * CurrencyCode `string`: A 3-letter ISO CurrencyCode for the expense currency. (e.g. USD). If not provided, defaults to the Account base currency.
  * CustomerIDFK `integer`: The Avaza Customer ID to associate the Expense with. Either this field or CustomerName can be provided.
  * CustomerName `string`: The name of an existing customer in Avaza. Must be an exact (case insensitive) match.
  * ExchangeRate `number`: Optional (Only relevant if the expense currency is different to your account currency. If not provided we will look up the market exchange rate for you based on the expense date.) Exchange Rate = Expense Currency Amount / Base Currency Amount (e.g. if Expense currency is in AUD, and Base Currency is in USD, Exchange Rate = AUD $140 / USD $100 = 1.4)
  * ExpenseCategoryIDFK `integer`: The expense category to link the Expense to. If not provided, ExpenseCategoryName must be provided
  * ExpenseCategoryName `string`: Must match an existing expense category name otherwise a new category will be created. If left blank Expense Category ID must be provided.
  * ExpenseDate `string`: The date of the expense entry (Required)
  * GroupTripName `string`: Links the expense to a Grouping/Trip report. If no matching name found, creates a new Group/Trip Report name.
  * Merchant `string`: The name of the merchant.
  * MerchantTaxNumer `string`: A Tax number identifier for the merchant.
  * Notes `string`: Expense Notes
  * ProjectIDFK `integer`: The Avaza project ID to associate the Expense with.
  * ProjectName `string`: Can work for matching an expense to a project, but only if it's an exact match for a single project under the customer.
  * TaxIDFK `integer`: Avaza Tax ID the expense belongs to. If left blank then Tax Name must be provided.
  * TaxName `string`: Must exactly match an existing Tax Name that you have configured in Avaza Tax settings. If left blank then Tax ID must be provided.
  * TransactionTaxConfigCode `string`: Optional - Enter "INC" if the tax amount is included in the expense amount otherwise enter "EX" when the amount exlcudes the tax. Defaults to "Ex". The tax amount on the expense will be autocalculated.
  * UserEmail `string`: The email address of a Timesheet/Expense user in Avaza. If not provided, UserIDFK field must be provided.
  * UserIDFK `integer`: UserID for a Timesheet/Expense user in Avaza. If not provided, UserEmail field must be provided
  * isChargeable `boolean`: aka Billable. Defaults to false if not provided. If set to true, a CustomerIDFK or CustomerName must be provided.

### NewInvoice
* NewInvoice `object`: New invoice to be created
  * CompanyIDFK `integer`: If left blank then you must specify Company Name.
  * CompanyName `string`
  * CurrencyCode `string`: Expects ISO Standard 3 character currency code. If left blank the currency will default to account's currency in general setting. For existing companies this field will be ignored and the invoice will use the currency of the customer. For new customers if the currency is not specified then account currency will be used otherwise the specified currency will be used.
  * DateIssued `string`: If not specified it will use today's date. The date should be specified as local date.
  * DueDate `string`: It will be auto calculated based on the payment term and issue date. Due Date must be greater than or equal to Issue Date. If the Due Date is specified then Payment Terms will be set to -1 (Custom)
  * Email `string`
  * ExchangeRate `number`: Exchange rate is only valid for invoices in currency other than default account currency. If not specified it will get the market rate based on the Date Issued.
  * Firstname `string`: Specified value will be used to create a new customer contact only if a new customer is being created.
  * InvoiceNumber `string`: Pass any string. If left blank it will use the next number in the auto incrementing sequence. If an integer is passed then the largest integer will be use as the seed to auto generate the next invoice number in the sequence.
  * InvoiceTemplateIDFK `integer`: If left blank the account default invoice template will be used.
  * Lastname `string`: Specified value will be used to create a new customer contact only if a new customer is being created.
  * LineItems `array`
    * items [NewInvoiceLineItem](#newinvoicelineitem)
  * Notes `string`: Plain UTF8 text. (no HTML). Max 2000 characters
  * PaymentTerms `integer`:  "If left blank we will set it to customer default. If specified then it must match one of your existing pre configured payment term periods. Your account starts with:
  * Subject `string`: Plain UTF8 text. (no HTML). 255 characters max
  * TransactionPrefix `string`: A prefix for the Invoice number. e.g. 'INV'. If left blank it will be set to the account default. Max length 20 characters.
  * TransactionTaxConfigCode `string`: Possible values are (EX --- Tax Exclusive, INC --- Tax Inclusive). If left empty it will use the account default.

### NewInvoiceLineItem
* NewInvoiceLineItem `object`: Line item to be added to new invoice
  * Description `string`: Plain UTF8 text. (no HTML)
  * Discount `number`: Enter 10.5 to give a 10.5% discount
  * InventoryItemIDFK `integer`: If not specified then Inventory Item Name must be specified.
  * InventoryItemName `string`: If not specified then Inventory item ID must be specified. If specified and not matched to any existing inventory items then a new inventory item will be created. Max 200 characters.
  * Quantity **required** `number`: The quantity for the line item
  * TaxIDFK `integer`
  * TaxName `string`: Must be specified if the Tax ID is blank. If the Tax Name is specified it will be matched to an existing Tax Name or else a new Tax will be created.
  * TaxPercent `number`: The Tax Percent will only be used if a new tax is being created.
  * UnitPrice **required** `number`: The unit price for the lineitem.

### NewPayment
* NewPayment `object`
  * Amount `number`
  * CustomerIDFK `integer`: Only required if no invoice allocations specified.
  * DateIssued `string`: Date of Payment. If not specified, assumes today.
  * ExchangeRate `number`: Optional. Only used when the Customer's currecy is different from the Avaza account's base currency. Specifies the exchange rate that should apply between the customer currency and base currency. If not provided we will obtain an up to date exchange rate for the Payment Issue Date.
  * Notes `string`
  * PaymentAllocations `array`: List of amounts within this payment that are allocated to invoices. The sum of these be less than or equal to the payment amount.
    * items [NewPaymentAllocation](#newpaymentallocation)
  * PaymentNumber `string`: Optional. If not specified will be automatically generated
  * TransactionPrefix `string`: Optional to override the default prefix added to Payment Numbers
  * TransactionReference `string`: Optional for storing the reference # of the payment method.

### NewPaymentAllocation
* NewPaymentAllocation `object`
  * AllocationAmount `number`: The Amount being allocated to the invoice. Expects same currency as invoice currency
  * AllocationDate `string`: Optional. Defaults to the current time in the Avaza account's timezone. The date the allocation is applied to the invoice. Can be difference from the Payment Date when doing prepayments etc.
  * InvoiceTransactionIDFK `integer`: The Avaza Invoice TransactionID that is having a payment amount allocated to it.

### NewProjectModel
* NewProjectModel `object`
  * CompanyIDFK `integer`: An ID of a company in Avaza to create the Project under. You must provide either a CompanyID, or a CompanyName
  * CompanyName `string`: The name for a Company to create the project under. Will create company unless it matches an existing company name
  * CurrencyCode `string`: The ISO 3 letter currency code to use when creating a new Company. If not provided, the account's default currency will be used.
  * PopulateDefaultProjectMembers `boolean`
  * ProjectNotes `string`: Any descriptive notes about the project. (2000 characters max)
  * ProjectTitle **required** `string`: The title of the new project. (255 characters max)
  * TimesheetApprovalRequiredbyDefault `boolean`
  * isTaskRequiredOnTimesheet `boolean`

### NewSection
* NewSection `object`
  * EndDateUTC `string`
  * ProjectIDFK `integer`
  * StartDateUTC `string`
  * Title `string`

### NewTask
* NewTask `object`
  * AssignedToUserIDFK `integer`
  * DateDue `string`
  * DateDueUTC `string`
  * Description `string`
  * EstimatedEffort `number`: Decimal hours
  * ProjectIDFK **required** `integer`
  * SectionIDFK **required** `integer`
  * Title **required** `string`

### NewTimesheet
* NewTimesheet `object`
  * Duration `number`: The duration of the timesheet, in decimal hours.
  * EntryDate `string`: The date of the timesheet entry, with an optional start time component.
  * Notes `string`: Timesheet Notes
  * ProjectIDFK `integer`: The project to associate the timesheet with
  * TaskIDFK `integer`: Optional. Link the timesheet to a specific task
  * TimesheetCategoryIDFK `integer`: The Project timesheet category to link the timesheet to
  * UserIDFK `integer`: UserID for a Timesheet user in Avaza
  * hasStartEndTime `boolean`: If true, the start time will be take from the time component of the Entry Date field, and the end time will be calculated by adding the Duration to the StartDate
  * isInvoiced `boolean`: Optional. False by default. Allows you to mark the timesheet as invoiced in an external system.

### Payment
* Payment `object`
  * AccountIDFK `integer`
  * Balance `number`
  * CurrencyCode `string`
  * CustomerIDFK `integer`
  * DateCreated `string`
  * DateIssued `string`
  * DateUpdated `string`
  * ExchangeRate `number`
  * Notes `string`
  * PaymentAllocations `array`
    * items [PaymentAllocation](#paymentallocation)
  * PaymentNumber `string`
  * PaymentProviderCode `string`
  * TotalAmount `number`
  * TransactionID `integer`
  * TransactionPrefix `string`
  * TransactionReference `string`
  * TransactionStatusCode `string`

### PaymentAllocation
* PaymentAllocation `object`
  * AllocationAmount `number`
  * AllocationDate `string`
  * InvoiceTransactionIDFK `integer`
  * PaymentTransactionIDFK `integer`
  * TransactionAllocationID `integer`

### PaymentList
* PaymentList `object`
  * PageNumber `integer`
  * PageSize `integer`
  * Payments `array`
    * items [Payment](#payment)
  * TotalCount `integer`

### ProjectDetails
* ProjectDetails `object`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * DateCreated `string`
  * DateUpdated `string`
  * Members `array`
    * items [ProjectMemberDetails](#projectmemberdetails)
  * Notes `string`
  * ProjectID `integer`
  * Sections `array`
    * items [ProjectSectionDetails](#projectsectiondetails)
  * Title `string`

### ProjectList
* ProjectList `object`
  * PageNumber `integer`
  * PageSize `integer`
  * Projects `array`
    * items [ProjectListDetails](#projectlistdetails)
  * TotalCount `integer`

### ProjectListDetails
* ProjectListDetails `object`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * DateCreated `string`
  * DateUpdated `string`
  * Notes `string`
  * ProjectID `integer`
  * Title `string`

### ProjectMemberDetails
* ProjectMemberDetails `object`
  * Email `string`
  * Firstname `string`
  * Fullname `string`
  * Lastname `string`
  * UserIDFK `integer`

### ProjectSectionDetails
* ProjectSectionDetails `object`
  * DisplayOrder `integer`
  * EndDate `string`
  * SectionID `integer`
  * StartDate `string`
  * Title `string`

### ProjectTimesheetCategoryDetails
* ProjectTimesheetCategoryDetails `object`
  * AccountIDFK `integer`
  * BudgetHours `number`
  * CostAmount `number`
  * Name `string`
  * ProjectIDFK `integer`
  * RateAmount `number`
  * TimeSheetCategoryIDFK `integer`
  * isBillable `boolean`

### ProjectTimesheetCategoryList
* ProjectTimesheetCategoryList `object`
  * Categories `array`
    * items [ProjectTimesheetCategoryDetails](#projecttimesheetcategorydetails)

### RecipientDetails
* RecipientDetails `object`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * RecipientBillingAddressCity `string`
  * RecipientBillingAddressCountryCode `string`
  * RecipientBillingAddressLine `string`
  * RecipientBillingAddressPostCode `string`
  * RecipientBillingAddressState `string`
  * RecipientFormattedBillingAddress `string`

### RoleDetails
* RoleDetails `object`
  * RoleCode `string`
  * RoleName `string`

### SectionDetails
* SectionDetails `object`
  * DisplayOrder `integer`
  * EndDate `string`
  * EndDateUTC `string`
  * ProjectIDFK `integer`
  * SectionID `integer`
  * StartDate `string`
  * StartDateUTC `string`
  * Title `string`

### SectionList
* SectionList `object`
  * Sections `array`
    * items [SectionDetails](#sectiondetails)
  * TotalCount `integer`

### SubscribeResult
* SubscribeResult `object`
  * ID `integer`

### TaskDetails
* TaskDetails `object`
  * ActualTime `number`
  * AssignedToEmail `string`
  * AssignedToFirstname `string`
  * AssignedToLastname `string`
  * AssignedToUserIDFK `string`
  * DateCreated `string`
  * DateDue `string`
  * DateDueUTC `string`
  * DateUpdated `string`
  * Description `string`
  * DescriptionNoHTML `string`
  * EstimatedEffort `number`
  * PercentComplete `number`
  * ProjectIDFK `integer`
  * ProjectTitle `string`
  * SectionIDFK `integer`
  * SectionTitle `string`
  * TaskID `integer`
  * TaskStatusCode `string`
  * Title `string`

### TaskList
* TaskList `object`
  * PageNumber `integer`
  * PageSize `integer`
  * Tasks `array`
    * items [TaskDetails](#taskdetails)
  * TotalCount `integer`

### TaxComponent
* TaxComponent `object`
  * ComponentTaxCode `string`
  * Name `string`
  * Percentage `number`
  * TaxComponentID `integer`
  * TaxIDFK `integer`
  * isCompound `boolean`

### TaxItem
* TaxItem `object`
  * CalculatedPercent `number`
  * Name `string`
  * TaxCode `string`
  * TaxComponents `array`
    * items [TaxComponent](#taxcomponent)
  * TaxID `integer`

### TaxList
* TaxList `object`
  * Taxes `array`
    * items [TaxItem](#taxitem)

### TimesheetDetails
* TimesheetDetails `object`
  * CategoryName `string`
  * CustomerIDFK `integer`
  * CustomerName `string`
  * DateCreated `string`
  * DateUpdated `string`
  * Duration `number`
  * Email `string`
  * EndTimeLocal `string`
  * EndTimeUTC `string`
  * EntryDate `string`
  * Firstname `string`
  * Lastname `string`
  * Notes `string`
  * ProjectIDFK `integer`
  * ProjectTitle `string`
  * StartTimeLocal `string`
  * StartTimeUTC `string`
  * TaskIDFK `integer`
  * TaskTitle `string`
  * TimesheetCategoryIDFK `integer`
  * TimesheetEntryApprovalStatusCode `string`
  * TimesheetEntryID `integer`
  * TimesheetUserTimeZone `string`
  * UserIDFK `integer`
  * isBillable `boolean`
  * isInvoiced `boolean`

### TimesheetList
* TimesheetList `object`
  * PageNumber `integer`
  * PageSize `integer`
  * Timesheets `array`
    * items [TimesheetDetails](#timesheetdetails)
  * TotalCount `integer`

### UserDetails
* UserDetails `object`
  * AccountIDFK `integer`
  * CompanyIDFK `integer`
  * CompanyName `string`
  * Email `string`
  * Firstname `string`
  * Lastname `string`
  * Roles `array`
    * items [RoleDetails](#roledetails)
  * TimeZone `string`
  * UserID `integer`
  * isTeamMember `boolean`

### UserList
* UserList `object`
  * Users `array`
    * items [UserDetails](#userdetails)

### WebhookDetails
* WebhookDetails `object`
  * EventCode `string`
  * NotificationURL `string`
  * SubscriptionID `integer`

### WebhookList
* WebhookList `object`
  * Webhooks `array`
    * items [WebhookDetails](#webhookdetails)


