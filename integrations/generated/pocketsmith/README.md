# @datafire/pocketsmith

Client library for PocketSmith

## Installation and Usage
```bash
npm install --save @datafire/pocketsmith
```
```js
let pocketsmith = require('@datafire/pocketsmith').create({
  developerKey: "",
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

The public PocketSmith API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
pocketsmith.oauthCallback({
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
pocketsmith.oauthRefresh(null, context)
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

### accounts.id.delete
Deletes an account and all its data by ID, optionally merge scenarios into another account.


```js
pocketsmith.accounts.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.

#### Output
*Output schema unknown*

### accounts.id.get
Gets an account by its ID.


```js
pocketsmith.accounts.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.

#### Output
* output [Account](#account)

### accounts.id.put
Updates and returns an account by its ID.


```js
pocketsmith.accounts.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.
  * body `object`
    * currency_code `string`: A new currency code for the account.
    * title `string`: A new title for the account.

#### Output
* output [Account](#account)

### accounts.id.transactions.get
Lists transactions belonging to an account by its ID.


```js
pocketsmith.accounts.id.transactions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.
  * start_date `string`: Return only transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
  * end_date `string`: Return transactions that fall on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
  * only_uncategorised `integer`: If set, will return only uncategorised results.
  * type `string` (values: debit, credit): Only return transactions of this type.
  * search `string`: Return transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in yyyy-mm-dd format.
  * page `integer`: Choose a particular page of the results.

#### Output
* output `array`
  * items [Transaction](#transaction)

### attachments.id.delete
Deletes a particular attachment by its ID.


```js
pocketsmith.attachments.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the attachment.

#### Output
*Output schema unknown*

### attachments.id.get
Gets a particular attachment by its ID.


```js
pocketsmith.attachments.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the attachment.

#### Output
* output [Attachment](#attachment)

### attachments.id.put
Updates the title of the attachment.


```js
pocketsmith.attachments.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the attachment.
  * body `object`
    * title `string`: The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name.

#### Output
* output [Attachment](#attachment)

### categories.id.delete
Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.


```js
pocketsmith.categories.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the category.

#### Output
*Output schema unknown*

### categories.id.get
Gets a particular category by its ID.


```js
pocketsmith.categories.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the category.

#### Output
* output [Category](#category)

### categories.id.put
Updates the title, colour or parent of the category.


```js
pocketsmith.categories.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the category.
  * body `object`
    * colour `string`: A new CSS-style hex colour for the category.
    * parent_id `integer`: The unique identifier of a parent category for the category, making this category a child of that category.
    * title `string`: A new title for the category.

#### Output
* output [Category](#category)

### categories.id.category_rules.post
Creates a rule to allocate a category to transactions.


```js
pocketsmith.categories.id.category_rules.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the category.
  * body `object`
    * apply_to_all `boolean`: Apply the created category rule to all transactions.
    * apply_to_uncategorised `boolean`: Apply the created category rule to all uncategorised transactions.
    * payee_matches **required** `string`: The keyword/s to match the transaction payees.

#### Output
* output [CategoryRule](#categoryrule)

### institutions.id.delete
Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.


```js
pocketsmith.institutions.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the institution.

#### Output
*Output schema unknown*

### institutions.id.get
Gets an institution by its ID.


```js
pocketsmith.institutions.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the institution.

#### Output
* output [Institution](#institution)

### institutions.id.put
Updates the title and currency code for an institution.


```js
pocketsmith.institutions.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the institution.
  * body `object`
    * currency_code `string`: A new currency code for the institution.
    * title `string`: A new title for the institution.

#### Output
* output [Institution](#institution)

### institutions.id.accounts.get
Lists accounts belonging to an institution by its ID.


```js
pocketsmith.institutions.id.accounts.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the institution.

#### Output
* output `array`
  * items [Account](#account)

### me.get
Gets the user that corresponds to the access token used in the request.


```js
pocketsmith.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### transaction_accounts.id.get
Gets a transaction account by its ID.


```js
pocketsmith.transaction_accounts.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction account.

#### Output
* output [TransactionAccount](#transactionaccount)

### transaction_accounts.id.put
Change which institution the transaction account belongs to.


```js
pocketsmith.transaction_accounts.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction account.
  * body `object`
    * institution_id `integer`: The unique identifier of a new institution for the transaction account.

#### Output
* output [TransactionAccount](#transactionaccount)

### transaction_accounts.id.transactions.get
Lists transactions belonging to a transaction account by its ID.


```js
pocketsmith.transaction_accounts.id.transactions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction account.
  * start_date `string`: Return only transactions on or after this date. Required if `end_date` is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
  * end_date `string`: Return transactions that fall on or before this date. Required if `start_date` is provided. If not provided, defaults to today's date.
  * only_uncategorised `integer`: If set, will return only uncategorised results.
  * type `string` (values: debit, credit): Only return transactions of this type.
  * search `string`: Return transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in yyyy-mm-dd format.
  * page `integer`: Choose a particular page of the results.

#### Output
* output `array`
  * items [Transaction](#transaction)

### transaction_accounts.id.transactions.post
Creates a transaction in a transaction account by its ID.


```js
pocketsmith.transaction_accounts.id.transactions.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction account.
  * body `object`
    * amount **required** `number`: The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
    * category_id `integer`: The unique identifier of a category for the transaction.
    * cheque_number `string`: A cheque number for the transaction.
    * date **required** `string`: The date when the transaction occurred.
    * is_transfer `boolean`: Whether the transaction should be indicated as a transfer.
    * labels `string`: A set of comma-separated labels for the transaction.
    * memo `string`: A memo for the transaction.
    * note `string`: A note for the transaction.
    * payee **required** `string`: The payee/merchant of the transaction.

#### Output
* output [Transaction](#transaction)

### transactions.id.get
Gets a transaction by its ID.


```js
pocketsmith.transactions.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction.

#### Output
* output [Transaction](#transaction)

### transactions.id.put
Updates a transaction by its ID.


```js
pocketsmith.transactions.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * labels `string`: A new set of labels for the transaction.
  * id **required** `integer`: The unique identifier of the transaction.
  * body `object`
    * amount `number`: A new amount for the transaction.
    * category_id `integer`: The unique identifier of a new category for the transaction.
    * cheque_number `string`: A new cheque number for the transaction.
    * date `string`: A new date for the transaction.
    * is_transfer `boolean`: Whether the transaction is a transfer or not.
    * memo `string`: A new memo for the transaction.
    * note `string`: A new note for the transaction.
    * payee `string`: A new payee for the transaction.

#### Output
* output [Transaction](#transaction)

### transactions.id.attachments.get
Lists attachments belonging to a transaction by their ID.


```js
pocketsmith.transactions.id.attachments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction.

#### Output
* output `array`
  * items [Attachment](#attachment)

### transactions.id.attachments.post
Assigns an attachment to the transaction by their ID.


```js
pocketsmith.transactions.id.attachments.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the transaction.
  * body `object`
    * attachment_id `integer`: The unique identifier of the attachment.

#### Output
* output [Attachment](#attachment)

### transactions.transaction_id.attachments.attachment_id.delete
Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.


```js
pocketsmith.transactions.transaction_id.attachments.attachment_id.delete({
  "transaction_id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * transaction_id **required** `integer`: The unique identifier of the transaction.
  * attachment_id **required** `integer`: The unique identifier of the attachment.

#### Output
*Output schema unknown*

### users.id.get
Gets a user by ID. You must be authorised as the target user in order to make this request.


```js
pocketsmith.users.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.

#### Output
* output [User](#user)

### users.id.put
Updates the user by their ID. You must be authorised as the target user in order to make this request.


```js
pocketsmith.users.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * body `object`
    * always_show_base_currency `boolean`: Whether the user wishes to have all monetary values converted to their base currency.
    * base_currency_code `string`: A new base currency code for the user.
    * beta_user `boolean`: Whether the user is a beta user, and wishes to try out new features.
    * email `string`: A new email address for the user.
    * name `string`: A new name for the user.
    * time_zone `string`: A new time zone for the user.
    * week_start_day `integer`: The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.

#### Output
* output [User](#user)

### users.id.accounts.get
Lists all accounts belonging to the user by their ID.


```js
pocketsmith.users.id.accounts.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.

#### Output
* output `array`
  * items [Account](#account)

### users.id.accounts.post
Creates and returns an account belonging to the user by their ID.


```js
pocketsmith.users.id.accounts.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * body `object`
    * currency_code **required** `string`: A currency code for the account.
    * institution_id **required** `integer`: The ID of the institution to create this account in.
    * title **required** `string`: A title for the account.
    * type **required** `string` (values: bank, credits, loans, mortgage, stocks, vehicle, property, other_asset, other_liability): The type of the account.

#### Output
* output [Account](#account)

### users.id.accounts.put
Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.


```js
pocketsmith.users.id.accounts.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * body `object`
    * accounts **required** `array`: List the account objects in their new display order.
      * items [Account](#account)

#### Output
* output `array`
  * items [Account](#account)

### users.id.attachments.get
Lists attachments belonging to a user by their ID.


```js
pocketsmith.users.id.attachments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * unassigned `integer`: If set, returns unassigned attachments, that are available for assigning to a transaction.

#### Output
* output `array`
  * items [Attachment](#attachment)

### users.id.attachments.post
Creates an attachment belonging to the user by their ID.


```js
pocketsmith.users.id.attachments.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * body `object`
    * file_data `string`: The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx.
    * file_name `string`: The file name of the attachment.
    * title `string`: The title of the attachment. If the title is blank or not provided, the title will derived from the file name.

#### Output
* output [Attachment](#attachment)

### users.id.budget.get
Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.


```js
pocketsmith.users.id.budget.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.
  * roll_up `boolean`: Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.

#### Output
* output `array`
  * items [BudgetAnalysisPackage](#budgetanalysispackage)

### users.id.budget_summary.get
Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.


```js
pocketsmith.users.id.budget_summary.get({
  "id": 0,
  "period": "",
  "interval": 0,
  "start_date": "",
  "end_date": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * period **required** `string` (values: weeks, months, years, event): The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
  * interval **required** `integer`: The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
  * start_date **required** `string`: The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
  * end_date **required** `string`: The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.

#### Output
* output `array`
  * items [BudgetAnalysisPackage](#budgetanalysispackage)

### users.id.categories.get
Lists all categories belonging to a user by their ID.


```js
pocketsmith.users.id.categories.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.

#### Output
* output `array`
  * items [Category](#category)

### users.id.categories.post
Creates a category belonging to the user by their ID.


```js
pocketsmith.users.id.categories.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * body `object`
    * colour `string`: A CSS-style hex colour for the category.
    * parent_id `integer`: The unique identifier of a category to be the parent of this category.
    * title **required** `string`: A title for the category.

#### Output
* output [Category](#category)

### users.id.category_rules.get
Lists all category rules belonging to a user by their ID.


```js
pocketsmith.users.id.category_rules.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.

#### Output
* output `array`
  * items [CategoryRule](#categoryrule)

### users.id.institutions.get
Lists all the institutions belonging to the user.


```js
pocketsmith.users.id.institutions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user

#### Output
* output `array`
  * items [Institution](#institution)

### users.id.institutions.post
Creates an institution belonging to a user.


```js
pocketsmith.users.id.institutions.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user
  * body `object`
    * currency_code **required** `string`: A currency code for the institution.
    * title **required** `string`: A title for the institution.

#### Output
* output [Institution](#institution)

### users.id.transaction_accounts.get
List all transaction accounts belonging to a user.


```js
pocketsmith.users.id.transaction_accounts.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.

#### Output
* output `array`
  * items [TransactionAccount](#transactionaccount)

### users.id.transactions.get
Lists transactions belonging to a user by their ID.


```js
pocketsmith.users.id.transactions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the account.
  * start_date `string`: Return only transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
  * end_date `string`: Return transactions that fall on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
  * only_uncategorised `integer`: If set, will return only uncategorised results.
  * type `string` (values: debit, credit): Only return transactions of this type.
  * search `string`: Return transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in yyyy-mm-dd format.
  * page `integer`: Choose a particular page of the results.

#### Output
* output `array`
  * items [Transaction](#transaction)

### users.id.trend_analysis.get
Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.


```js
pocketsmith.users.id.trend_analysis.get({
  "id": 0,
  "period": "",
  "interval": 0,
  "start_date": "",
  "end_date": "",
  "categories": "",
  "scenarios": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The unique identifier of the user.
  * period **required** `string` (values: weeks, months, years, event): The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
  * interval **required** `integer`: The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
  * start_date **required** `string`: The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
  * end_date **required** `string`: The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
  * categories **required** `string`: A comma-separated list of category IDs to analyse.
  * scenarios **required** `string`: A comma-separated list of scenario IDs to analyse. You're likely going to want to include all a user's scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.

#### Output
* output `array`
  * items [BudgetAnalysisPackage](#budgetanalysispackage)



## Definitions

### Account
* Account `object`
  * created_at `string`: When the account was created.
  * currency_code `string`: The currency code for the account.
  * current_balance `number`: The current balance of the account.
  * current_balance_date `string`: The date of the current balance.
  * current_balance_exchange_rate `number`: The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned.
  * current_balance_in_base_currency `number`: The current balance of the account in the user's base currency.
  * id `integer`: The unique identifier of the account.
  * is_net_worth `boolean`: Whether the account is a net worth asset.
  * primary_scenario [Scenario](#scenario)
  * primary_transaction_account [TransactionAccount](#transactionaccount)
  * safe_balance `number`: The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
  * safe_balance_in_base_currency `number`: The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
  * scenarios `array`: All scenarios that compose the account, including the primary.
    * items [Scenario](#scenario)
  * title `string`: The title of the account.
  * transaction_accounts `array`: All transaction accounts that compose the account, including the primary.
    * items [TransactionAccount](#transactionaccount)
  * type `string` (values: bank, credits, cash, stocks, mortgage, loans, vehicle, property, insurance, other_liability): The type of the account.
  * updated_at `string`: When the account was last updated.

### Attachment
* Attachment `object`
  * content_type `string`: The content type of the attachment.
  * content_type_meta `object`
    * description `string`: The content type description of the attachment
    * extension `string`: The extension type of the attachment
    * title `string`: The content type title of the attachment
  * created_at `string`: When the attachment was created
  * file_name `string`: The file name of the attachment
  * id `integer`: The unique identifier of the attachment
  * original_url `string`: The url of the attachment
  * title `string`: The title of the attachment. If blank or not provided, the title will be derived from the file name.
  * type `string`: The type of attachment
  * updated_at `string`: When the attachment was last updated
  * variants `object`
    * large_url `string`: The url of the large version of the attachment
    * thumb_url `string`: The url of the thumb version of the attachment

### BudgetAnalysis
* BudgetAnalysis `object`
  * average_actual_amount `number`: The average actual (transactions) amount across all periods.
  * average_forecast_amount `number`: The average budgeted amount across all periods.
  * end_date `string`: The end date of the budget analysis.
  * periods `array`: The period analyses that this budget analysis comprises.
    * items [Period](#period)
  * start_date `string`: The start date of the budget analysis.
  * total_actual_amount `number`: The total actual (transactions) amount across all periods.
  * total_forecast_amount `number`: The total budgeted amount across all periods.
  * total_over_by `number`: The total amount the budget was exceeded across all periods.
  * total_under_by `number`: The total amount the budget was under by across all periods.

### BudgetAnalysisPackage
* BudgetAnalysisPackage `object`
  * category [Category](#category)
  * expense [BudgetAnalysis](#budgetanalysis)
  * income [BudgetAnalysis](#budgetanalysis)
  * is_transfer `boolean`: Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics.

### Category
* Category `object`
  * children `array`: The category's child categories.
    * items [Category](#category)
  * colour `string`: The colour for the category.
  * created_at `string`: When the category was created.
  * id `integer`: The unique identifier of the category.
  * is_transfer `boolean`: Whether this category has been marked as a transfer category.
  * parent_id `integer`: The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category)
  * title `string`: The title of the category.
  * updated_at `string`: When the category was last updated.

### CategoryRule
* CategoryRule `object`
  * category [Category](#category)
  * created_at `string`: When the category rule was created.
  * id `integer`: The unique identifier of the category rule.
  * payee_matches `string`: The keyword/s to match the transactions payees.
  * updated_at `string`: When the category rule was last updated.

### Error
* Error `object`
  * error `string`: A message describing the error that occurred.

### Institution
* Institution `object`
  * created_at `string`: When the institution was created.
  * currency_code `string`: The currency code of the institution.
  * id `integer`: The unique identifier of the institution.
  * title `string`: The title of the institution.
  * updated_at `string`: When the institution was last updated.

### Period
* Period `object`
  * actual_amount `number`: The sum of all actuals (transactions) in the period.
  * current `boolean`: Whether this period is current, such that the current date (in the user's time zone) falls within the date range.
  * end_date `string`: The end date of the period.
  * forecast_amount `number`: The sum of all forecast sources (budget events) in the period, for comparison against the actual amount.
  * over_budget `boolean`: Whether the budget has been exceeded in the period.
  * over_by `number`: How much the budget has been exceeded by in the period.
  * percentage_used `number`: The percentage of the budget that has been used in the period.
  * refund_amound `number`: This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions.
  * start_date `string`: The start date of the period.
  * under_budget `boolean`: Whether the budget has not been exceeded in the period.
  * under_by `number`: How much there is left in the budget for the period.

### Scenario
* Scenario `object`
  * achieve_date `string`: For goals, the date that they should be achieved by.
  * closing_balance `number`: The closing balance of the scenario.
  * closing_balance_date `string`: The date of the closing balance.
  * created_at `string`: When the scenario was created.
  * current_balance `number`: The current balance of the scenario.
  * current_balance_date `string`: The date of the current balance.
  * current_balance_exchange_rate `number`: The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned.
  * current_balance_in_base_currency `number`: The current balance of the scenario in the user's base currency.
  * description `string`: A short description of what the scenario is modelling.
  * id `integer`: The unique identifier of the scenario.
  * interest_rate `number`: The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.
  * interest_rate_repeat_id `integer`: A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.
  * maximum-value `number`
  * minimum-value `number`
  * safe_balance `number`: The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.
  * safe_balance_in_base_currency `number`: The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.
  * starting_balance `number`: The starting balance of the scenario.
  * starting_balance_date `string`: The date of the starting balance.
  * title `string`: The title of the scenario.
  * type `string` (values: no-interest, savings, debt): The type of the scenario.
  * updated_at `string`: When the scenario was last updated.

### Transaction
* Transaction `object`
  * amount `number`
  * category [Category](#category)
  * cheque_number `string`
  * closing_balance `number`: The closing balance of the account at the transaction.
  * date `string`: The date the transaction took place.
  * id `integer`: The unique identifier of the transaction.
  * is_transfer `boolean`: Whether the transaction was a transfer.
  * labels `array`
    * items `string`
  * memo `string`
  * note `string`
  * original_payee `string`: The payee the transaction was created with.
  * payee `string`: The payee/merchant of the transaction.
  * status `string` (values: pending, posted): The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent.
  * transaction_account [TransactionAccount](#transactionaccount)
  * type `string` (values: debit, credit): Whether the transaction is a debit or a credit
  * upload_source `string`: Where the transaction came from.

### TransactionAccount
* TransactionAccount `object`
  * created_at `string`
  * currency_code `string`: The currency that the account is in. This is determined by the account that the transaction account belongs to.
  * current_balance `number`
  * current_balance_date `string`
  * current_balance_exchange_rate `number`: The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned.
  * current_balance_in_base_currency `number`: The current balance of the transaction account in the user's base currency.
  * id `integer`
  * institution [Institution](#institution)
  * name `string`
  * number `string`
  * safe_balance `number`: The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
  * safe_balance_in_base_currency `number`: The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
  * starting_balance `number`
  * starting_balance_date `string`
  * type `string` (values: bank, credits, cash, stocks, mortgage, loans, vehicle, property, insurance, other_liability): The type of the transaction account.
  * updated_at `string`

### User
* User `object`
  * always_show_base_currency `boolean`: Whether the user wants to see all accounts in their base currency instead of the native account currency.
  * avatar_url `string`: The URL to the user's avatar.
  * base_currency_code `string`: The user's base currency.
  * beta_user `boolean`: Whether the user has opted in to beta features.
  * created_at `string`: When the user signed up.
  * email `string`: The user's email address.
  * id `integer`: The unique identifier of the user.
  * last_activity_at `string`: When the user last interacted with PocketSmith, via any application or the API.
  * last_logged_in_at `string`: When the user last logged into PocketSmith.
  * login `string`: The user's username.
  * name `string`: The full name of the user, although not all users will have a name set.
  * time_zone `string`: The user's time zone.
  * updated_at `string`: When the user was last updated.
  * using_multiple_currencies `boolean`: Whether the user has multiple currencies in use across their account.
  * week_start_day `integer`: The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.


