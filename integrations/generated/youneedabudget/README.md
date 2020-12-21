# @datafire/youneedabudget

Client library for YNAB API Endpoints

## Installation and Usage
```bash
npm install --save @datafire/youneedabudget
```
```js
let youneedabudget = require('@datafire/youneedabudget').create({
  bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com

## Actions

### getBudgets
Returns budgets list with summary information


```js
youneedabudget.getBudgets({}, context)
```

#### Input
* input `object`
  * include_accounts `boolean`: Whether to include the list of budget accounts

#### Output
* output [BudgetSummaryResponse](#budgetsummaryresponse)

### getBudgetById
Returns a single budget with all related entities.  This resource is effectively a full budget export.


```js
youneedabudget.getBudgetById({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [BudgetDetailResponse](#budgetdetailresponse)

### getAccounts
Returns all accounts


```js
youneedabudget.getAccounts({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [AccountsResponse](#accountsresponse)

### createAccount
Creates a new account


```js
youneedabudget.createAccount({
  "budget_id": "",
  "data": {
    "account": {
      "name": "",
      "type": "",
      "balance": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
  * data **required** [SaveAccountWrapper](#saveaccountwrapper)

#### Output
* output [AccountResponse](#accountresponse)

### getAccountById
Returns a single account


```js
youneedabudget.getAccountById({
  "budget_id": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * account_id **required** `string`: The id of the account

#### Output
* output [AccountResponse](#accountresponse)

### getTransactionsByAccount
Returns all transactions for a specified account


```js
youneedabudget.getTransactionsByAccount({
  "budget_id": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * account_id **required** `string`: The id of the account
  * since_date `string`: If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
  * type `string` (values: uncategorized, unapproved): If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [TransactionsResponse](#transactionsresponse)

### getCategories
Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).


```js
youneedabudget.getCategories({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [CategoriesResponse](#categoriesresponse)

### getCategoryById
Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).


```js
youneedabudget.getCategoryById({
  "budget_id": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * category_id **required** `string`: The id of the category

#### Output
* output [CategoryResponse](#categoryresponse)

### getTransactionsByCategory
Returns all transactions for a specified category


```js
youneedabudget.getTransactionsByCategory({
  "budget_id": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * category_id **required** `string`: The id of the category
  * since_date `string`: If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
  * type `string` (values: uncategorized, unapproved): If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [HybridTransactionsResponse](#hybridtransactionsresponse)

### getBudgetMonths
Returns all budget months


```js
youneedabudget.getBudgetMonths({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [MonthSummariesResponse](#monthsummariesresponse)

### getBudgetMonth
Returns a single budget month


```js
youneedabudget.getBudgetMonth({
  "budget_id": "",
  "month": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * month **required** `string`: The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))

#### Output
* output [MonthDetailResponse](#monthdetailresponse)

### getMonthCategoryById
Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).


```js
youneedabudget.getMonthCategoryById({
  "budget_id": "",
  "month": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * month **required** `string`: The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
  * category_id **required** `string`: The id of the category

#### Output
* output [CategoryResponse](#categoryresponse)

### updateMonthCategory
Update a category for a specific month.  Only `budgeted` amount can be updated.


```js
youneedabudget.updateMonthCategory({
  "budget_id": "",
  "month": "",
  "category_id": "",
  "data": {
    "category": {
      "budgeted": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * month **required** `string`: The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
  * category_id **required** `string`: The id of the category
  * data **required** [SaveMonthCategoryWrapper](#savemonthcategorywrapper)

#### Output
* output [SaveCategoryResponse](#savecategoryresponse)

### getPayeeLocations
Returns all payee locations


```js
youneedabudget.getPayeeLocations({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).

#### Output
* output [PayeeLocationsResponse](#payeelocationsresponse)

### getPayeeLocationById
Returns a single payee location


```js
youneedabudget.getPayeeLocationById({
  "budget_id": "",
  "payee_location_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * payee_location_id **required** `string`: id of payee location

#### Output
* output [PayeeLocationResponse](#payeelocationresponse)

### getPayees
Returns all payees


```js
youneedabudget.getPayees({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [PayeesResponse](#payeesresponse)

### getPayeeById
Returns a single payee


```js
youneedabudget.getPayeeById({
  "budget_id": "",
  "payee_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * payee_id **required** `string`: The id of the payee

#### Output
* output [PayeeResponse](#payeeresponse)

### getPayeeLocationsByPayee
Returns all payee locations for a specified payee


```js
youneedabudget.getPayeeLocationsByPayee({
  "budget_id": "",
  "payee_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * payee_id **required** `string`: id of payee

#### Output
* output [PayeeLocationsResponse](#payeelocationsresponse)

### getTransactionsByPayee
Returns all transactions for a specified payee


```js
youneedabudget.getTransactionsByPayee({
  "budget_id": "",
  "payee_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * payee_id **required** `string`: The id of the payee
  * since_date `string`: If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
  * type `string` (values: uncategorized, unapproved): If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [HybridTransactionsResponse](#hybridtransactionsresponse)

### getScheduledTransactions
Returns all scheduled transactions


```js
youneedabudget.getScheduledTransactions({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [ScheduledTransactionsResponse](#scheduledtransactionsresponse)

### getScheduledTransactionById
Returns a single scheduled transaction


```js
youneedabudget.getScheduledTransactionById({
  "budget_id": "",
  "scheduled_transaction_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * scheduled_transaction_id **required** `string`: The id of the scheduled transaction

#### Output
* output [ScheduledTransactionResponse](#scheduledtransactionresponse)

### getBudgetSettingsById
Returns settings for a budget


```js
youneedabudget.getBudgetSettingsById({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).

#### Output
* output [BudgetSettingsResponse](#budgetsettingsresponse)

### getTransactions
Returns budget transactions


```js
youneedabudget.getTransactions({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * since_date `string`: If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
  * type `string` (values: uncategorized, unapproved): If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
  * last_knowledge_of_server `integer`: The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### Output
* output [TransactionsResponse](#transactionsresponse)

### updateTransactions
Updates multiple transactions, by `id` or `import_id`.


```js
youneedabudget.updateTransactions({
  "budget_id": "",
  "data": {
    "transactions": []
  }
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * data **required** [UpdateTransactionsWrapper](#updatetransactionswrapper)

#### Output
* output [SaveTransactionsResponse](#savetransactionsresponse)

### createTransaction
Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.


```js
youneedabudget.createTransaction({
  "budget_id": "",
  "data": {}
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * data **required** [SaveTransactionsWrapper](#savetransactionswrapper)

#### Output
* output [SaveTransactionsResponse](#savetransactionsresponse)

### bulkCreateTransactions
Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.


```js
youneedabudget.bulkCreateTransactions({
  "budget_id": "",
  "transactions": {
    "transactions": []
  }
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * transactions **required** [BulkTransactions](#bulktransactions)

#### Output
* output [BulkResponse](#bulkresponse)

### importTransactions
Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.


```js
youneedabudget.importTransactions({
  "budget_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).

#### Output
* output [TransactionsImportResponse](#transactionsimportresponse)

### getTransactionById
Returns a single transaction


```js
youneedabudget.getTransactionById({
  "budget_id": "",
  "transaction_id": ""
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * transaction_id **required** `string`: The id of the transaction

#### Output
* output [TransactionResponse](#transactionresponse)

### updateTransaction
Updates a single transaction


```js
youneedabudget.updateTransaction({
  "budget_id": "",
  "transaction_id": "",
  "data": {
    "transaction": {
      "account_id": "",
      "date": "",
      "amount": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * budget_id **required** `string`: The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
  * transaction_id **required** `string`: The id of the transaction
  * data **required** [SaveTransactionWrapper](#savetransactionwrapper)

#### Output
* output [TransactionResponse](#transactionresponse)

### getUser
Returns authenticated user information


```js
youneedabudget.getUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserResponse](#userresponse)



## Definitions

### Account
* Account `object`
  * balance **required** `integer`: The current balance of the account in milliunits format
  * cleared_balance **required** `integer`: The current cleared balance of the account in milliunits format
  * closed **required** `boolean`: Whether this account is closed or not
  * deleted **required** `boolean`: Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.
  * id **required** `string`
  * name **required** `string`
  * note `string`
  * on_budget **required** `boolean`: Whether this account is on budget or not
  * transfer_payee_id **required** `string`: The payee id which should be used when transferring to this account
  * type **required** `string` (values: checking, savings, cash, creditCard, lineOfCredit, otherAsset, otherLiability, payPal, merchantAccount, investmentAccount, mortgage): The type of account. Note: payPal, merchantAccount, investmentAccount, and mortgage types have been deprecated and will be removed in the future.
  * uncleared_balance **required** `integer`: The current uncleared balance of the account in milliunits format

### AccountResponse
* AccountResponse `object`
  * data **required** `object`
    * account **required** [Account](#account)

### AccountsResponse
* AccountsResponse `object`
  * data **required** `object`
    * accounts **required** `array`
      * items [Account](#account)
    * server_knowledge **required** `integer`: The knowledge of the server

### BudgetDetail
* BudgetDetail
  * accounts `array`: The budget accounts (only included if `include_accounts=true` specified as query parameter)
    * items [Account](#account)
  * currency_format [CurrencyFormat](#currencyformat)
  * date_format [DateFormat](#dateformat)
  * first_month `string`: The earliest budget month
  * id **required** `string`
  * last_modified_on `string`: The last time any changes were made to the budget from either a web or mobile client
  * last_month `string`: The latest budget month
  * name **required** `string`
  * accounts `array`
    * items [Account](#account)
  * categories `array`
    * items [Category](#category)
  * category_groups `array`
    * items [CategoryGroup](#categorygroup)
  * months `array`
    * items [MonthDetail](#monthdetail)
  * payee_locations `array`
    * items [PayeeLocation](#payeelocation)
  * payees `array`
    * items [Payee](#payee)
  * scheduled_subtransactions `array`
    * items [ScheduledSubTransaction](#scheduledsubtransaction)
  * scheduled_transactions `array`
    * items [ScheduledTransactionSummary](#scheduledtransactionsummary)
  * subtransactions `array`
    * items [SubTransaction](#subtransaction)
  * transactions `array`
    * items [TransactionSummary](#transactionsummary)

### BudgetDetailResponse
* BudgetDetailResponse `object`
  * data **required** `object`
    * budget **required** [BudgetDetail](#budgetdetail)
    * server_knowledge **required** `integer`: The knowledge of the server

### BudgetSettings
* BudgetSettings `object`
  * currency_format **required** [CurrencyFormat](#currencyformat)
  * date_format **required** [DateFormat](#dateformat)

### BudgetSettingsResponse
* BudgetSettingsResponse `object`
  * data **required** `object`
    * settings **required** [BudgetSettings](#budgetsettings)

### BudgetSummary
* BudgetSummary `object`
  * accounts `array`: The budget accounts (only included if `include_accounts=true` specified as query parameter)
    * items [Account](#account)
  * currency_format [CurrencyFormat](#currencyformat)
  * date_format [DateFormat](#dateformat)
  * first_month `string`: The earliest budget month
  * id **required** `string`
  * last_modified_on `string`: The last time any changes were made to the budget from either a web or mobile client
  * last_month `string`: The latest budget month
  * name **required** `string`

### BudgetSummaryResponse
* BudgetSummaryResponse `object`
  * data **required** `object`
    * budgets **required** `array`
      * items [BudgetSummary](#budgetsummary)
    * default_budget [BudgetSummary](#budgetsummary)

### BulkResponse
* BulkResponse `object`
  * data **required** `object`
    * bulk **required** `object`
      * duplicate_import_ids **required** `array`: If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.
        * items `string`
      * transaction_ids **required** `array`: The list of Transaction ids that were created.
        * items `string`

### BulkTransactions
* BulkTransactions `object`
  * transactions **required** `array`
    * items [SaveTransaction](#savetransaction)

### CategoriesResponse
* CategoriesResponse `object`
  * data **required** `object`
    * category_groups **required** `array`
      * items [CategoryGroupWithCategories](#categorygroupwithcategories)
    * server_knowledge **required** `integer`: The knowledge of the server

### Category
* Category `object`
  * activity **required** `integer`: Activity amount in milliunits format
  * balance **required** `integer`: Balance in milliunits format
  * budgeted **required** `integer`: Budgeted amount in milliunits format
  * category_group_id **required** `string`
  * deleted **required** `boolean`: Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
  * goal_creation_month `string`: The month a goal was created
  * goal_percentage_complete `integer`: The percentage completion of the goal
  * goal_target `integer`: The goal target amount in milliunits
  * goal_target_month `string`: The target month for the goal to be completed.  Only some goal types specify this date.
  * goal_type `string` (values: TB, TBD, MF, NEED, ): The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')
  * hidden **required** `boolean`: Whether or not the category is hidden
  * id **required** `string`
  * name **required** `string`
  * note `string`
  * original_category_group_id `string`: If category is hidden this is the id of the category group it originally belonged to before it was hidden.

### CategoryGroup
* CategoryGroup `object`
  * deleted **required** `boolean`: Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
  * hidden **required** `boolean`: Whether or not the category group is hidden
  * id **required** `string`
  * name **required** `string`

### CategoryGroupWithCategories
* CategoryGroupWithCategories
  * deleted **required** `boolean`: Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
  * hidden **required** `boolean`: Whether or not the category group is hidden
  * id **required** `string`
  * name **required** `string`
  * categories **required** `array`: Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    * items [Category](#category)

### CategoryResponse
* CategoryResponse `object`
  * data **required** `object`
    * category **required** [Category](#category)

### CurrencyFormat
* CurrencyFormat `object`: The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
  * currency_symbol **required** `string`
  * decimal_digits **required** `integer`
  * decimal_separator **required** `string`
  * display_symbol **required** `boolean`
  * example_format **required** `string`
  * group_separator **required** `string`
  * iso_code **required** `string`
  * symbol_first **required** `boolean`

### DateFormat
* DateFormat `object`: The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
  * format **required** `string`

### ErrorDetail
* ErrorDetail `object`
  * detail **required** `string`
  * id **required** `string`
  * name **required** `string`

### ErrorResponse
* ErrorResponse `object`
  * error **required** [ErrorDetail](#errordetail)

### HybridTransaction
* HybridTransaction
  * account_id **required** `string`
  * amount **required** `integer`: The transaction amount in milliunits format
  * approved **required** `boolean`: Whether or not the transaction is approved
  * category_id `string`
  * cleared **required** `string` (values: cleared, uncleared, reconciled): The cleared status of the transaction
  * date **required** `string`: The transaction date in ISO format (e.g. 2016-12-01)
  * deleted **required** `boolean`: Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The transaction flag
  * id **required** `string`
  * import_id `string`: If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
  * matched_transaction_id `string`: If transaction is matched, the id of the matched transaction
  * memo `string`
  * payee_id `string`
  * transfer_account_id `string`: If a transfer transaction, the account to which it transfers
  * transfer_transaction_id `string`: If a transfer transaction, the id of transaction on the other side of the transfer
  * account_name **required** `string`
  * category_name `string`
  * parent_transaction_id `string`: For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null.
  * payee_name `string`
  * type **required** `string` (values: transaction, subtransaction): Whether the hybrid transaction represents a regular transaction or a subtransaction

### HybridTransactionsResponse
* HybridTransactionsResponse `object`
  * data **required** `object`
    * transactions **required** `array`
      * items [HybridTransaction](#hybridtransaction)

### MonthDetail
* MonthDetail
  * activity **required** `integer`: The total amount of transactions in the month, excluding those categorized to 'Inflow: To be Budgeted'
  * age_of_money `integer`: The Age of Money as of the month
  * budgeted **required** `integer`: The total amount budgeted in the month
  * deleted **required** `boolean`: Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
  * income **required** `integer`: The total amount of transactions categorized to 'Inflow: To be Budgeted' in the month
  * month **required** `string`
  * note `string`
  * to_be_budgeted **required** `integer`: The available amount for 'To be Budgeted'
  * categories **required** `array`: The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
    * items [Category](#category)

### MonthDetailResponse
* MonthDetailResponse `object`
  * data **required** `object`
    * month **required** [MonthDetail](#monthdetail)

### MonthSummariesResponse
* MonthSummariesResponse `object`
  * data **required** `object`
    * months **required** `array`
      * items [MonthSummary](#monthsummary)
    * server_knowledge **required** `integer`: The knowledge of the server

### MonthSummary
* MonthSummary `object`
  * activity **required** `integer`: The total amount of transactions in the month, excluding those categorized to 'Inflow: To be Budgeted'
  * age_of_money `integer`: The Age of Money as of the month
  * budgeted **required** `integer`: The total amount budgeted in the month
  * deleted **required** `boolean`: Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
  * income **required** `integer`: The total amount of transactions categorized to 'Inflow: To be Budgeted' in the month
  * month **required** `string`
  * note `string`
  * to_be_budgeted **required** `integer`: The available amount for 'To be Budgeted'

### Payee
* Payee `object`
  * deleted **required** `boolean`: Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
  * id **required** `string`
  * name **required** `string`
  * transfer_account_id `string`: If a transfer payee, the `account_id` to which this payee transfers to

### PayeeLocation
* PayeeLocation `object`
  * deleted **required** `boolean`: Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.
  * id **required** `string`
  * latitude **required** `string`
  * longitude **required** `string`
  * payee_id **required** `string`

### PayeeLocationResponse
* PayeeLocationResponse `object`
  * data **required** `object`
    * payee_location **required** [PayeeLocation](#payeelocation)

### PayeeLocationsResponse
* PayeeLocationsResponse `object`
  * data **required** `object`
    * payee_locations **required** `array`
      * items [PayeeLocation](#payeelocation)

### PayeeResponse
* PayeeResponse `object`
  * data **required** `object`
    * payee **required** [Payee](#payee)

### PayeesResponse
* PayeesResponse `object`
  * data **required** `object`
    * payees **required** `array`
      * items [Payee](#payee)
    * server_knowledge **required** `integer`: The knowledge of the server

### SaveAccount
* SaveAccount `object`
  * balance **required** `integer`: The current balance of the account in milliunits format
  * name **required** `string`: The name of the account
  * type **required** `string` (values: checking, savings, creditCard, cash, lineOfCredit, otherAsset, otherLiability): The account type

### SaveAccountWrapper
* SaveAccountWrapper `object`
  * account **required** [SaveAccount](#saveaccount)

### SaveCategoryResponse
* SaveCategoryResponse `object`
  * data **required** `object`
    * category **required** [Category](#category)
    * server_knowledge **required** `integer`: The knowledge of the server

### SaveMonthCategory
* SaveMonthCategory `object`
  * budgeted **required** `integer`: Budgeted amount in milliunits format

### SaveMonthCategoryWrapper
* SaveMonthCategoryWrapper `object`
  * category **required** [SaveMonthCategory](#savemonthcategory)

### SaveSubTransaction
* SaveSubTransaction `object`
  * amount **required** `integer`: The subtransaction amount in milliunits format.
  * category_id `string`: The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.
  * memo `string`
  * payee_id `string`: The payee for the subtransaction.
  * payee_name `string`: The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.

### SaveTransaction
* SaveTransaction `object`
  * account_id **required** `string`
  * amount **required** `integer`: The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.
  * approved `boolean`: Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.
  * category_id `string`: The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.
  * cleared `string` (values: cleared, uncleared, reconciled): The cleared status of the transaction
  * date **required** `string`: The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The transaction flag
  * import_id `string`: If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).
  * memo `string`
  * payee_id `string`: The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.
  * payee_name `string`: The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
  * subtransactions `array`: An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.
    * items [SaveSubTransaction](#savesubtransaction)

### SaveTransactionWrapper
* SaveTransactionWrapper `object`
  * transaction **required** [SaveTransaction](#savetransaction)

### SaveTransactionsResponse
* SaveTransactionsResponse `object`
  * data **required** `object`
    * duplicate_import_ids `array`: If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account
      * items `string`
    * server_knowledge **required** `integer`: The knowledge of the server
    * transaction [TransactionDetail](#transactiondetail)
    * transaction_ids **required** `array`: The transaction ids that were saved
      * items `string`
    * transactions `array`: If multiple transactions were specified, the transactions that were saved
      * items [TransactionDetail](#transactiondetail)

### SaveTransactionsWrapper
* SaveTransactionsWrapper `object`
  * transaction [SaveTransaction](#savetransaction)
  * transactions `array`
    * items [SaveTransaction](#savetransaction)

### ScheduledSubTransaction
* ScheduledSubTransaction `object`
  * amount **required** `integer`: The scheduled subtransaction amount in milliunits format
  * category_id `string`
  * deleted **required** `boolean`: Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.
  * id **required** `string`
  * memo `string`
  * payee_id `string`
  * scheduled_transaction_id **required** `string`
  * transfer_account_id `string`: If a transfer, the account_id which the scheduled subtransaction transfers to

### ScheduledTransactionDetail
* ScheduledTransactionDetail
  * account_id **required** `string`
  * amount **required** `integer`: The scheduled transaction amount in milliunits format
  * category_id `string`
  * date_first **required** `string`: The first date for which the Scheduled Transaction was scheduled.
  * date_next **required** `string`: The next date for which the Scheduled Transaction is scheduled.
  * deleted **required** `boolean`: Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The scheduled transaction flag
  * frequency **required** `string` (values: never, daily, weekly, everyOtherWeek, twiceAMonth, every4Weeks, monthly, everyOtherMonth, every3Months, every4Months, twiceAYear, yearly, everyOtherYear)
  * id **required** `string`
  * memo `string`
  * payee_id `string`
  * transfer_account_id `string`: If a transfer, the account_id which the scheduled transaction transfers to
  * account_name **required** `string`
  * category_name `string`
  * payee_name `string`
  * subtransactions **required** `array`: If a split scheduled transaction, the subtransactions.
    * items [ScheduledSubTransaction](#scheduledsubtransaction)

### ScheduledTransactionResponse
* ScheduledTransactionResponse `object`
  * data **required** `object`
    * scheduled_transaction **required** [ScheduledTransactionDetail](#scheduledtransactiondetail)

### ScheduledTransactionSummary
* ScheduledTransactionSummary `object`
  * account_id **required** `string`
  * amount **required** `integer`: The scheduled transaction amount in milliunits format
  * category_id `string`
  * date_first **required** `string`: The first date for which the Scheduled Transaction was scheduled.
  * date_next **required** `string`: The next date for which the Scheduled Transaction is scheduled.
  * deleted **required** `boolean`: Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The scheduled transaction flag
  * frequency **required** `string` (values: never, daily, weekly, everyOtherWeek, twiceAMonth, every4Weeks, monthly, everyOtherMonth, every3Months, every4Months, twiceAYear, yearly, everyOtherYear)
  * id **required** `string`
  * memo `string`
  * payee_id `string`
  * transfer_account_id `string`: If a transfer, the account_id which the scheduled transaction transfers to

### ScheduledTransactionsResponse
* ScheduledTransactionsResponse `object`
  * data **required** `object`
    * scheduled_transactions **required** `array`
      * items [ScheduledTransactionDetail](#scheduledtransactiondetail)
    * server_knowledge **required** `integer`: The knowledge of the server

### SubTransaction
* SubTransaction `object`
  * amount **required** `integer`: The subtransaction amount in milliunits format
  * category_id `string`
  * category_name `string`
  * deleted **required** `boolean`: Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.
  * id **required** `string`
  * memo `string`
  * payee_id `string`
  * payee_name `string`
  * transaction_id **required** `string`
  * transfer_account_id `string`: If a transfer, the account_id which the subtransaction transfers to
  * transfer_transaction_id `string`: If a transfer, the id of transaction on the other side of the transfer

### TransactionDetail
* TransactionDetail
  * account_id **required** `string`
  * amount **required** `integer`: The transaction amount in milliunits format
  * approved **required** `boolean`: Whether or not the transaction is approved
  * category_id `string`
  * cleared **required** `string` (values: cleared, uncleared, reconciled): The cleared status of the transaction
  * date **required** `string`: The transaction date in ISO format (e.g. 2016-12-01)
  * deleted **required** `boolean`: Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The transaction flag
  * id **required** `string`
  * import_id `string`: If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
  * matched_transaction_id `string`: If transaction is matched, the id of the matched transaction
  * memo `string`
  * payee_id `string`
  * transfer_account_id `string`: If a transfer transaction, the account to which it transfers
  * transfer_transaction_id `string`: If a transfer transaction, the id of transaction on the other side of the transfer
  * account_name **required** `string`
  * category_name `string`
  * payee_name `string`
  * subtransactions **required** `array`: If a split transaction, the subtransactions.
    * items [SubTransaction](#subtransaction)

### TransactionResponse
* TransactionResponse `object`
  * data **required** `object`
    * transaction **required** [TransactionDetail](#transactiondetail)

### TransactionSummary
* TransactionSummary `object`
  * account_id **required** `string`
  * amount **required** `integer`: The transaction amount in milliunits format
  * approved **required** `boolean`: Whether or not the transaction is approved
  * category_id `string`
  * cleared **required** `string` (values: cleared, uncleared, reconciled): The cleared status of the transaction
  * date **required** `string`: The transaction date in ISO format (e.g. 2016-12-01)
  * deleted **required** `boolean`: Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The transaction flag
  * id **required** `string`
  * import_id `string`: If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
  * matched_transaction_id `string`: If transaction is matched, the id of the matched transaction
  * memo `string`
  * payee_id `string`
  * transfer_account_id `string`: If a transfer transaction, the account to which it transfers
  * transfer_transaction_id `string`: If a transfer transaction, the id of transaction on the other side of the transfer

### TransactionsImportResponse
* TransactionsImportResponse `object`
  * data **required** `object`
    * transaction_ids **required** `array`: The list of transaction ids that were imported.
      * items `string`

### TransactionsResponse
* TransactionsResponse `object`
  * data **required** `object`
    * server_knowledge **required** `integer`: The knowledge of the server
    * transactions **required** `array`
      * items [TransactionDetail](#transactiondetail)

### UpdateTransaction
* UpdateTransaction
  * id **required** `string`
  * account_id **required** `string`
  * amount **required** `integer`: The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.
  * approved `boolean`: Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.
  * category_id `string`: The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.
  * cleared `string` (values: cleared, uncleared, reconciled): The cleared status of the transaction
  * date **required** `string`: The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.
  * flag_color `string` (values: red, orange, yellow, green, blue, purple, ): The transaction flag
  * import_id `string`: If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).
  * memo `string`
  * payee_id `string`: The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.
  * payee_name `string`: The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
  * subtransactions `array`: An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.
    * items [SaveSubTransaction](#savesubtransaction)

### UpdateTransactionsWrapper
* UpdateTransactionsWrapper `object`
  * transactions **required** `array`
    * items [UpdateTransaction](#updatetransaction)

### User
* User `object`
  * id **required** `string`

### UserResponse
* UserResponse `object`
  * data **required** `object`
    * user **required** [User](#user)


