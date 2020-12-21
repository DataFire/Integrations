# @datafire/squareup

Client library for Square Connect

## Installation and Usage
```bash
npm install --save @datafire/squareup
```
```js
let squareup = require('@datafire/squareup').create({
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

Client library for accessing the Square Connect APIs

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
squareup.oauthCallback({
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
squareup.oauthRefresh(null, context)
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

### RetrieveBusiness
Get a business's information.


```js
squareup.RetrieveBusiness(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [v1Merchant](#v1merchant)

### ListEmployees
Provides summary information for all of a business's employees.


```js
squareup.ListEmployees({}, context)
```

#### Input
* input `object`
  * order `string` (values: ASC, DESC): The order in which employees are listed in the response, based on their created_at field.      Default value: ASC 
  * begin_updated_at `string`: If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
  * end_updated_at `string`: If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
  * begin_created_at `string`: If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
  * end_created_at `string`: If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
  * status `string` (values: ACTIVE, INACTIVE): If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
  * external_id `string`: If provided, the endpoint returns only employee entities with the specified external_id.
  * limit `integer`: The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Employee](#v1employee)

### CreateEmployee
Creates an employee for a business.


```js
squareup.CreateEmployee({
  "body": {
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [v1Employee](#v1employee)

#### Output
* output [v1Employee](#v1employee)

### RetrieveEmployee
Provides the details for a single employee.


```js
squareup.RetrieveEmployee({
  "employee_id": ""
}, context)
```

#### Input
* input `object`
  * employee_id **required** `string`: The employee's ID.

#### Output
* output [v1Employee](#v1employee)

### UpdateEmployee
V1 UpdateEmployee


```js
squareup.UpdateEmployee({
  "employee_id": "",
  "body": {
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * employee_id **required** `string`: The ID of the role to modify.
  * body **required** [v1Employee](#v1employee)

#### Output
* output [v1Employee](#v1employee)

### v1.me.locations.get
Provides details for a business's locations, including their IDs.


```js
squareup.v1.me.locations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [v1Merchant](#v1merchant)

### ListEmployeeRoles
Provides summary information for all of a business's employee roles.


```js
squareup.ListEmployeeRoles({}, context)
```

#### Input
* input `object`
  * order `string` (values: ASC, DESC): The order in which employees are listed in the response, based on their created_at field.Default value: ASC 
  * limit `integer`: The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1EmployeeRole](#v1employeerole)

### CreateEmployeeRole
Creates an employee role you can then assign to employees.


```js
squareup.CreateEmployeeRole({
  "EmployeeRole": {
    "name": "",
    "permissions": []
  }
}, context)
```

#### Input
* input `object`
  * EmployeeRole **required** [v1EmployeeRole](#v1employeerole)

#### Output
* output [v1EmployeeRole](#v1employeerole)

### RetrieveEmployeeRole
Provides the details for a single employee role.


```js
squareup.RetrieveEmployeeRole({
  "role_id": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `string`: The role's ID.

#### Output
* output [v1EmployeeRole](#v1employeerole)

### UpdateEmployeeRole
Modifies the details of an employee role.


```js
squareup.UpdateEmployeeRole({
  "role_id": "",
  "body": {
    "name": "",
    "permissions": []
  }
}, context)
```

#### Input
* input `object`
  * role_id **required** `string`: The ID of the role to modify.
  * body **required** [v1EmployeeRole](#v1employeerole)

#### Output
* output [v1EmployeeRole](#v1employeerole)

### ListTimecards
Provides summary information for all of a business's employee timecards.


```js
squareup.ListTimecards({}, context)
```

#### Input
* input `object`
  * order `string` (values: ASC, DESC): The order in which timecards are listed in the response, based on their created_at field.
  * employee_id `string`: If provided, the endpoint returns only timecards for the employee with the specified ID.
  * begin_clockin_time `string`: If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
  * end_clockin_time `string`: If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
  * begin_clockout_time `string`: If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
  * end_clockout_time `string`: If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
  * begin_updated_at `string`: If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
  * end_updated_at `string`: If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
  * deleted `boolean`: If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned.
  * limit `integer`: The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Timecard](#v1timecard)

### CreateTimecard
Creates a timecard for an employee. Each timecard corresponds to a single shift.


```js
squareup.CreateTimecard({
  "body": {
    "employee_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [v1Timecard](#v1timecard)

#### Output
* output [v1Timecard](#v1timecard)

### DeleteTimecard
Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.


```js
squareup.DeleteTimecard({
  "timecard_id": ""
}, context)
```

#### Input
* input `object`
  * timecard_id **required** `string`: The ID of the timecard to delete.

#### Output
* output `object`

### RetrieveTimecard
Provides the details for a single timecard.


```js
squareup.RetrieveTimecard({
  "timecard_id": ""
}, context)
```

#### Input
* input `object`
  * timecard_id **required** `string`: The timecard's ID.

#### Output
* output [v1Timecard](#v1timecard)

### UpdateTimecard
Modifies a timecard's details. This creates an API_EDIT event for the timecard. You can view a timecard's event history with the List Timecard Events endpoint.


```js
squareup.UpdateTimecard({
  "timecard_id": "",
  "body": {
    "employee_id": ""
  }
}, context)
```

#### Input
* input `object`
  * timecard_id **required** `string`: TThe ID of the timecard to modify.
  * body **required** [v1Timecard](#v1timecard)

#### Output
* output [v1Timecard](#v1timecard)

### ListTimecardEvents
Provides summary information for all events associated with a particular timecard.


```js
squareup.ListTimecardEvents({
  "timecard_id": ""
}, context)
```

#### Input
* input `object`
  * timecard_id **required** `string`: The ID of the timecard to list events for.

#### Output
* output `array`
  * items [v1TimecardEvent](#v1timecardevent)

### ListBankAccounts
Provides non-confidential details for all of a location's associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.


```js
squareup.ListBankAccounts({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list bank accounts for.

#### Output
* output `array`
  * items [v1BankAccount](#v1bankaccount)

### RetrieveBankAccount
Provides non-confidential details for a merchant's associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.


```js
squareup.RetrieveBankAccount({
  "location_id": "",
  "bank_account_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the bank account's associated location.
  * bank_account_id **required** `string`: The bank account's Square-issued ID. You obtain this value from Settlement objects returned.

#### Output
* output [v1BankAccount](#v1bankaccount)

### ListCashDrawerShifts
Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.


```js
squareup.ListCashDrawerShifts({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list cash drawer shifts for.
  * order `string` (values: ASC, DESC): The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC
  * begin_time `string`: The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
  * end_time `string`: The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.

#### Output
* output `array`
  * items [v1CashDrawerShift](#v1cashdrawershift)

### RetrieveCashDrawerShift
Provides the details for a single cash drawer shift, including all events that occurred during the shift.


```js
squareup.RetrieveCashDrawerShift({
  "location_id": "",
  "shift_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list cash drawer shifts for.
  * shift_id **required** `string`: The shift's ID.

#### Output
* output [v1CashDrawerShift](#v1cashdrawershift)

### ListCategories
Lists all of a location's item categories.


```js
squareup.ListCategories({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list categories for.

#### Output
* output `array`
  * items [v1Category](#v1category)

### CreateCategory
Creates an item category.


```js
squareup.CreateCategory({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create an item for.
  * body **required** [v1Category](#v1category)

#### Output
* output [v1Category](#v1category)

### DeleteCategory
Deletes an existing item category.


```js
squareup.DeleteCategory({
  "location_id": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * category_id **required** `string`: The ID of the category to delete.

#### Output
* output [v1Category](#v1category)

### UpdateCategory
Modifies the details of an existing item category.


```js
squareup.UpdateCategory({
  "location_id": "",
  "category_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the category's associated location.
  * category_id **required** `string`: The ID of the category to edit.
  * body **required** [v1Category](#v1category)

#### Output
* output [v1Category](#v1category)

### ListDiscounts
Lists all of a location's discounts.


```js
squareup.ListDiscounts({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list categories for.

#### Output
* output `array`
  * items [v1Discount](#v1discount)

### CreateDiscount
Creates a discount.


```js
squareup.CreateDiscount({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create an item for.
  * body **required** [v1Discount](#v1discount)

#### Output
* output [v1Discount](#v1discount)

### DeleteDiscount
Deletes an existing discount.


```js
squareup.DeleteDiscount({
  "location_id": "",
  "discount_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * discount_id **required** `string`: The ID of the discount to delete.

#### Output
* output [v1Discount](#v1discount)

### UpdateDiscount
Modifies the details of an existing discount.


```js
squareup.UpdateDiscount({
  "location_id": "",
  "discount_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the category's associated location.
  * discount_id **required** `string`: The ID of the discount to edit.
  * body **required** [v1Discount](#v1discount)

#### Output
* output [v1Discount](#v1discount)

### ListFees
Lists all of a location's fees (taxes).


```js
squareup.ListFees({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list fees for.

#### Output
* output `array`
  * items [v1Fee](#v1fee)

### CreateFee
Creates a fee (tax).


```js
squareup.CreateFee({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create a fee for.
  * body **required** [v1Fee](#v1fee)

#### Output
* output [v1Fee](#v1fee)

### DeleteFee
Deletes an existing fee (tax).


```js
squareup.DeleteFee({
  "location_id": "",
  "fee_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the fee's associated location.
  * fee_id **required** `string`: The ID of the fee to delete.

#### Output
* output [v1Fee](#v1fee)

### UpdateFee
Modifies the details of an existing fee (tax).


```js
squareup.UpdateFee({
  "location_id": "",
  "fee_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the fee's associated location.
  * fee_id **required** `string`: The ID of the fee to edit.
  * body **required** [v1Fee](#v1fee)

#### Output
* output [v1Fee](#v1fee)

### ListInventory
Provides inventory information for all of a merchant's inventory-enabled item variations.


```js
squareup.ListInventory({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * limit `integer`: The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1InventoryEntry](#v1inventoryentry)

### AdjustInventory
Adjusts an item variation's current available inventory.


```js
squareup.AdjustInventory({
  "location_id": "",
  "variation_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * variation_id **required** `string`: The ID of the variation to adjust inventory information for.
  * body **required** [v1AdjustInventoryRequest](#v1adjustinventoryrequest)

#### Output
* output [v1InventoryEntry](#v1inventoryentry)

### ListItems
Provides summary information for all of a location's items.


```js
squareup.ListItems({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list items for.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Item](#v1item)

### CreateItem
Creates an item and at least one variation for it.


```js
squareup.CreateItem({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create an item for.
  * body **required** [v1Item](#v1item)

#### Output
* output [v1Item](#v1item)

### DeleteItem
Deletes an existing item and all item variations associated with it.


```js
squareup.DeleteItem({
  "location_id": "",
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The ID of the item to modify.

#### Output
* output [v1Item](#v1item)

### RetrieveItem
Provides the details for a single item, including associated modifier lists and fees.


```js
squareup.RetrieveItem({
  "location_id": "",
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The item's ID.

#### Output
* output [v1Item](#v1item)

### UpdateItem
Modifies the core details of an existing item.


```js
squareup.UpdateItem({
  "location_id": "",
  "item_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The ID of the item to modify.
  * body **required** [v1Item](#v1item)

#### Output
* output [v1Item](#v1item)

### RemoveFee
Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.


```js
squareup.RemoveFee({
  "location_id": "",
  "item_id": "",
  "fee_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the fee's associated location.
  * item_id **required** `string`: The ID of the item to add the fee to.
  * fee_id **required** `string`: The ID of the fee to apply.

#### Output
* output [v1Item](#v1item)

### ApplyFee
Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.


```js
squareup.ApplyFee({
  "location_id": "",
  "item_id": "",
  "fee_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the fee's associated location.
  * item_id **required** `string`: The ID of the item to add the fee to.
  * fee_id **required** `string`: The ID of the fee to apply.

#### Output
* output [v1Item](#v1item)

### RemoveModifierList
Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.


```js
squareup.RemoveModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to remove.
  * item_id **required** `string`: The ID of the item to remove the modifier list from.

#### Output
* output [v1Item](#v1item)

### ApplyModifierList
Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.


```js
squareup.ApplyModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to apply.
  * item_id **required** `string`: The ID of the item to add the modifier list to.

#### Output
* output [v1Item](#v1item)

### CreateVariation
Creates an item variation for an existing item.


```js
squareup.CreateVariation({
  "location_id": "",
  "item_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The item's ID.
  * body **required** [v1Variation](#v1variation)

#### Output
* output [v1Variation](#v1variation)

### DeleteVariation
Deletes an existing item variation from an item.


```js
squareup.DeleteVariation({
  "location_id": "",
  "item_id": "",
  "variation_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The ID of the item to delete.
  * variation_id **required** `string`: The ID of the variation to delete.

#### Output
* output [v1Variation](#v1variation)

### UpdateVariation
Modifies the details of an existing item variation.


```js
squareup.UpdateVariation({
  "location_id": "",
  "item_id": "",
  "variation_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * item_id **required** `string`: The ID of the item to modify.
  * variation_id **required** `string`: The ID of the variation to modify.
  * body **required** [v1Variation](#v1variation)

#### Output
* output [v1Variation](#v1variation)

### ListModifierLists
Lists all of a location's modifier lists.


```js
squareup.ListModifierLists({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list modifier lists for.

#### Output
* output `array`
  * items [v1ModifierList](#v1modifierlist)

### CreateModifierList
Creates an item modifier list and at least one modifier option for it.


```js
squareup.CreateModifierList({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create a modifier list for.
  * body **required** [v1ModifierList](#v1modifierlist)

#### Output
* output [v1ModifierList](#v1modifierlist)

### DeleteModifierList
Deletes an existing item modifier list and all modifier options associated with it.


```js
squareup.DeleteModifierList({
  "location_id": "",
  "modifier_list_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to delete.

#### Output
* output [v1ModifierList](#v1modifierlist)

### RetrieveModifierList
Provides the details for a single modifier list.


```js
squareup.RetrieveModifierList({
  "location_id": "",
  "modifier_list_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The modifier list's ID.

#### Output
* output [v1ModifierList](#v1modifierlist)

### UpdateModifierList
Modifies the details of an existing item modifier list.


```js
squareup.UpdateModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to edit.
  * body **required** [v1UpdateModifierListRequest](#v1updatemodifierlistrequest)

#### Output
* output [v1ModifierList](#v1modifierlist)

### CreateModifierOption
Creates an item modifier option and adds it to a modifier list.


```js
squareup.CreateModifierOption({
  "location_id": "",
  "modifier_list_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to edit.
  * body **required** [v1ModifierOption](#v1modifieroption)

#### Output
* output [v1ModifierOption](#v1modifieroption)

### DeleteModifierOption
Deletes an existing item modifier option from a modifier list.


```js
squareup.DeleteModifierOption({
  "location_id": "",
  "modifier_list_id": "",
  "modifier_option_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to delete.
  * modifier_option_id **required** `string`: The ID of the modifier list to edit.

#### Output
* output [v1ModifierOption](#v1modifieroption)

### UpdateModifierOption
Modifies the details of an existing item modifier option.


```js
squareup.UpdateModifierOption({
  "location_id": "",
  "modifier_list_id": "",
  "modifier_option_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the item's associated location.
  * modifier_list_id **required** `string`: The ID of the modifier list to edit.
  * modifier_option_id **required** `string`: The ID of the modifier list to edit.
  * body **required** [v1ModifierOption](#v1modifieroption)

#### Output
* output [v1ModifierOption](#v1modifieroption)

### ListOrders
Provides summary information for a merchant's online store orders.


```js
squareup.ListOrders({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list online store orders for.
  * order `string` (values: ASC, DESC): TThe order in which payments are listed in the response.
  * limit `integer`: The maximum number of payments to return in a single response. This value cannot exceed 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Order](#v1order)

### RetrieveOrder
Provides comprehensive information for a single online store order, including the order's history.


```js
squareup.RetrieveOrder({
  "location_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the order's associated location.
  * order_id **required** `string`: The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

#### Output
* output [v1Order](#v1order)

### UpdateOrder
Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:


```js
squareup.UpdateOrder({
  "location_id": "",
  "order_id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the order's associated location.
  * order_id **required** `string`: The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
  * body **required** [v1UpdateOrderRequest](#v1updateorderrequest)

#### Output
* output [v1Order](#v1order)

### ListPages
Lists all of a location's Favorites pages in Square Register.


```js
squareup.ListPages({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list Favorites pages for.

#### Output
* output `array`
  * items [v1Page](#v1page)

### CreatePage
Creates a Favorites page in Square Register.


```js
squareup.CreatePage({
  "location_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to create an item for.
  * body **required** [v1Page](#v1page)

#### Output
* output [v1Page](#v1page)

### DeletePage
Deletes an existing Favorites page and all of its cells.


```js
squareup.DeletePage({
  "location_id": "",
  "page_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the Favorites page's associated location.
  * page_id **required** `string`: The ID of the page to delete.

#### Output
* output [v1Page](#v1page)

### UpdatePage
Modifies the details of a Favorites page in Square Register.


```js
squareup.UpdatePage({
  "location_id": "",
  "page_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the Favorites page's associated location
  * page_id **required** `string`: The ID of the page to modify.
  * body **required** [v1Page](#v1page)

#### Output
* output [v1Page](#v1page)

### DeletePageCell
Deletes a cell from a Favorites page in Square Register.


```js
squareup.DeletePageCell({
  "location_id": "",
  "page_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the Favorites page's associated location.
  * page_id **required** `string`: The ID of the page to delete.
  * row `string`: The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
  * column `string`: The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.

#### Output
* output [v1Page](#v1page)

### UpdatePageCell
Modifies a cell of a Favorites page in Square Register.


```js
squareup.UpdatePageCell({
  "location_id": "",
  "page_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the Favorites page's associated location.
  * page_id **required** `string`: The ID of the page the cell belongs to.
  * body **required** [v1PageCell](#v1pagecell)

#### Output
* output [v1Page](#v1page)

### ListPayments
Provides summary information for all payments taken by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.


```js
squareup.ListPayments({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
  * order `string` (values: ASC, DESC): The order in which payments are listed in the response.
  * begin_time `string`: The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  * end_time `string`: The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  * limit `integer`: The maximum number of payments to return in a single response. This value cannot exceed 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Payment](#v1payment)

### RetrievePayment
Provides comprehensive information for a single payment.


```js
squareup.RetrievePayment({
  "location_id": "",
  "payment_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the payment's associated location.
  * payment_id **required** `string`: The payment's Square-issued ID. You obtain this value from Payment objects returned by the List Payments endpoint, or Settlement objects returned by the List Settlements endpoint.

#### Output
* output [v1Payment](#v1payment)

### v1.location_id.refunds.get
Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.


```js
squareup.v1.location_id.refunds.get({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list refunds for.
  * order `string` (values: ASC, DESC): TThe order in which payments are listed in the response.
  * begin_time `string`: The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  * end_time `string`: The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  * limit `integer`: The maximum number of payments to return in a single response. This value cannot exceed 200.
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Refund](#v1refund)

### v1.location_id.refunds.post
Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.


```js
squareup.v1.location_id.refunds.post({
  "location_id": "",
  "body": {
    "payment_id": "",
    "type": "",
    "reason": ""
  }
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the original payment's associated location.
  * body **required** [v1CreateRefundRequest](#v1createrefundrequest)

#### Output
* output [v1Refund](#v1refund)

### ListSettlements
Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length. 


```js
squareup.ListSettlements({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
  * order `string` (values: ASC, DESC): TThe order in which payments are listed in the response.
  * begin_time `string`: The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  * end_time `string`: The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  * limit `integer`: The maximum number of payments to return in a single response. This value cannot exceed 200.
  * status `string` (values: SENT, FAILED): Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
  * batch_token `string`: A pagination cursor to retrieve the next set of results for your

#### Output
* output `array`
  * items [v1Settlement](#v1settlement)

### RetrieveSettlement
Provides comprehensive information for a single settlement, including the entries that contribute to the settlement's total.


```js
squareup.RetrieveSettlement({
  "location_id": "",
  "settlement_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the settlements's associated location.
  * settlement_id **required** `string`: The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.

#### Output
* output [v1Settlement](#v1settlement)

### BatchDeleteCatalogObjects
Deletes a set of [CatalogItem](#type-catalogitem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](#type-catalogitemvariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.


```js
squareup.BatchDeleteCatalogObjects({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [BatchDeleteCatalogObjectsRequest](#batchdeletecatalogobjectsrequest)

#### Output
* output [BatchDeleteCatalogObjectsResponse](#batchdeletecatalogobjectsresponse)

### BatchRetrieveCatalogObjects
Returns a set of objects based on the provided ID.
Each [CatalogItem](#type-catalogitem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](#type-catalogitemvariation) objects, references to
its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
any [CatalogTax](#type-catalogtax) objects that apply to it.


```js
squareup.BatchRetrieveCatalogObjects({
  "body": {
    "object_ids": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [BatchRetrieveCatalogObjectsRequest](#batchretrievecatalogobjectsrequest)

#### Output
* output [BatchRetrieveCatalogObjectsResponse](#batchretrievecatalogobjectsresponse)

### BatchUpsertCatalogObjects
Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.


```js
squareup.BatchUpsertCatalogObjects({
  "body": {
    "idempotency_key": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [BatchUpsertCatalogObjectsRequest](#batchupsertcatalogobjectsrequest)

#### Output
* output [BatchUpsertCatalogObjectsResponse](#batchupsertcatalogobjectsresponse)

### CatalogInfo
Returns information about the Square Catalog API, such as batch size
limits for `BatchUpsertCatalogObjects`.


```js
squareup.CatalogInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CatalogInfoResponse](#cataloginforesponse)

### ListCatalog
Returns a list of [CatalogObject](#type-catalogobject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)
and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter
is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.


```js
squareup.ListCatalog({}, context)
```

#### Input
* input `object`
  * cursor `string`: The pagination cursor returned in the previous response. Leave unset for an initial request.
  * types `string`: An optional case-insensitive, comma-separated list of object types to retrieve, for example

#### Output
* output [ListCatalogResponse](#listcatalogresponse)

### UpsertCatalogObject
Creates or updates the target [CatalogObject](#type-catalogobject).


```js
squareup.UpsertCatalogObject({
  "body": {
    "idempotency_key": "",
    "object": {
      "type": "",
      "id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UpsertCatalogObjectRequest](#upsertcatalogobjectrequest)

#### Output
* output [UpsertCatalogObjectResponse](#upsertcatalogobjectresponse)

### DeleteCatalogObject
Deletes a single [CatalogObject](#type-catalogobject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](#type-catalogitem)
will also delete all of its
[CatalogItemVariation](#type-catalogitemvariation) children.


```js
squareup.DeleteCatalogObject({
  "object_id": ""
}, context)
```

#### Input
* input `object`
  * object_id **required** `string`: The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other

#### Output
* output [DeleteCatalogObjectResponse](#deletecatalogobjectresponse)

### RetrieveCatalogObject
Returns a single [CatalogItem](#type-catalogitem) as a
[CatalogObject](#type-catalogobject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](#type-catalogitem)
information including: [CatalogItemVariation](#type-catalogitemvariation)
children, references to its
[CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
any [CatalogTax](#type-catalogtax) objects that apply to it.


```js
squareup.RetrieveCatalogObject({
  "object_id": ""
}, context)
```

#### Input
* input `object`
  * object_id **required** `string`: The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
  * include_related_objects `boolean`: If `true`, the response will include additional objects that are related to the

#### Output
* output [RetrieveCatalogObjectResponse](#retrievecatalogobjectresponse)

### SearchCatalogObjects
Queries the targeted catalog using a variety of query types
([CatalogQuerySortedAttribute](#type-catalogquerysortedattribute),
([CatalogQueryExact](#type-catalogqueryexact),
([CatalogQueryRange](#type-catalogqueryrange),
([CatalogQueryText](#type-catalogquerytext),
([CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),
([CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist)).


```js
squareup.SearchCatalogObjects({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SearchCatalogObjectsRequest](#searchcatalogobjectsrequest)

#### Output
* output [SearchCatalogObjectsResponse](#searchcatalogobjectsresponse)

### UpdateItemModifierLists
Updates the [CatalogModifierList](#type-catalogmodifierlist) objects
that apply to the targeted [CatalogItem](#type-catalogitem) without having
to perform an upsert on the entire item.


```js
squareup.UpdateItemModifierLists({
  "body": {
    "item_ids": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateItemModifierListsRequest](#updateitemmodifierlistsrequest)

#### Output
* output [UpdateItemModifierListsResponse](#updateitemmodifierlistsresponse)

### UpdateItemTaxes
Updates the [CatalogTax](#type-catalogtax) objects that apply to the
targeted [CatalogItem](#type-catalogitem) without having to perform an
upsert on the entire item.


```js
squareup.UpdateItemTaxes({
  "body": {
    "item_ids": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateItemTaxesRequest](#updateitemtaxesrequest)

#### Output
* output [UpdateItemTaxesResponse](#updateitemtaxesresponse)

### ListCustomers
Lists a business's customers.


```js
squareup.ListCustomers({}, context)
```

#### Input
* input `object`
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.

#### Output
* output [ListCustomersResponse](#listcustomersresponse)

### CreateCustomer
Creates a new customer for a business, which can have associated cards on file.

You must provide __at least one__ of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

This endpoint does not accept an idempotency key. If you accidentally create
a duplicate customer, you can delete it with the
[DeleteCustomer](#endpoint-deletecustomer) endpoint.


```js
squareup.CreateCustomer({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCustomerRequest](#createcustomerrequest)

#### Output
* output [CreateCustomerResponse](#createcustomerresponse)

### DeleteCustomer
Deletes a customer from a business, along with any linked cards on file.


```js
squareup.DeleteCustomer({
  "customer_id": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: The ID of the customer to delete.

#### Output
* output [DeleteCustomerResponse](#deletecustomerresponse)

### RetrieveCustomer
Returns details for a single customer.


```js
squareup.RetrieveCustomer({
  "customer_id": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: The ID of the customer to retrieve.

#### Output
* output [RetrieveCustomerResponse](#retrievecustomerresponse)

### UpdateCustomer
Updates the details of an existing customer.
The ID of the customer may change if the customer has been merged into another customer.

You cannot edit a customer's cards on file with this endpoint. To make changes
to a card on file, you must delete the existing card on file with the
[DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with the
[CreateCustomerCard](#endpoint-createcustomercard) endpoint.


```js
squareup.UpdateCustomer({
  "customer_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: The ID of the customer to update.
  * body **required** [UpdateCustomerRequest](#updatecustomerrequest)

#### Output
* output [UpdateCustomerResponse](#updatecustomerresponse)

### CreateCustomerCard
Adds a card on file to an existing customer. In the United States
Square takes care of automatically updating any cards on file that might
have expired since you first attached them to a customer.


```js
squareup.CreateCustomerCard({
  "customer_id": "",
  "body": {
    "card_nonce": ""
  }
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: The ID of the customer to link the card on file to.
  * body **required** [CreateCustomerCardRequest](#createcustomercardrequest)

#### Output
* output [CreateCustomerCardResponse](#createcustomercardresponse)

### DeleteCustomerCard
Removes a card on file from a customer.


```js
squareup.DeleteCustomerCard({
  "customer_id": "",
  "card_id": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: The ID of the customer that the card on file belongs to.
  * card_id **required** `string`: The ID of the card on file to delete.

#### Output
* output [DeleteCustomerCardResponse](#deletecustomercardresponse)

### v2.locations.get
Provides the details for all of a business's locations.

Most other Connect API endpoints have a required `location_id` path parameter.
The `id` field of the [`Location`](#type-location) objects returned by this
endpoint correspond to that `location_id` parameter.


```js
squareup.v2.locations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### CreateCheckout
Creates a [Checkout](#type-checkout) response that links a
`checkoutId` and `checkout_page_url` that customers can be directed to in
order to provide their payment information using a payment processing
workflow hosted on connect.squareup.com.


```js
squareup.CreateCheckout({
  "location_id": "",
  "body": {
    "idempotency_key": "",
    "order": {
      "line_items": []
    }
  }
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the business location to associate the checkout with.
  * body **required** [CreateCheckoutRequest](#createcheckoutrequest)

#### Output
* output [CreateCheckoutResponse](#createcheckoutresponse)

### v2.locations.location_id.refunds.get
Lists refunds for one of a business's locations.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](#paginatingresults): 50


```js
squareup.v2.locations.location_id.refunds.get({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list refunds for.
  * begin_time `string`: The beginning of the requested reporting period, in RFC 3339 format.
  * end_time `string`: The end of the requested reporting period, in RFC 3339 format.
  * sort_order `string` (values: DESC, ASC): The order in which results are listed in the response (`ASC` for
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.

#### Output
* output [ListRefundsResponse](#listrefundsresponse)

### ListTransactions
Lists transactions for a particular location.

Max results per [page](#paginatingresults): 50


```js
squareup.ListTransactions({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to list transactions for.
  * begin_time `string`: The beginning of the requested reporting period, in RFC 3339 format.
  * end_time `string`: The end of the requested reporting period, in RFC 3339 format.
  * sort_order `string` (values: DESC, ASC): The order in which results are listed in the response (`ASC` for
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.

#### Output
* output [ListTransactionsResponse](#listtransactionsresponse)

### Charge
Charges a card represented by a card nonce or a customer's card on file.

Your request to this endpoint must include _either_:

- A value for the `card_nonce` parameter (to charge a card nonce generated
with the `SqPaymentForm`)
- Values for the `customer_card_id` and `customer_id` parameters (to charge
a customer's card on file)

In order for an e-commerce payment to potentially qualify for
[Square chargeback protection](https://squareup.com/help/article/5394), you
_must_ provide values for the following parameters in your request:

- `buyer_email_address`
- At least one of `billing_address` or `shipping_address`

When this response is returned, the amount of Square's processing fee might not yet be
calculated. To obtain the processing fee, wait about ten seconds and call
[RetrieveTransaction](#endpoint-retrievetransaction). See the `processing_fee_money`
field of each [Tender included](#type-tender) in the transaction.


```js
squareup.Charge({
  "location_id": "",
  "body": {
    "idempotency_key": "",
    "amount_money": {}
  }
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the location to associate the created transaction with.
  * body **required** [ChargeRequest](#chargerequest)

#### Output
* output [ChargeResponse](#chargeresponse)

### RetrieveTransaction
Retrieves details for a single transaction.


```js
squareup.RetrieveTransaction({
  "location_id": "",
  "transaction_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the transaction's associated location.
  * transaction_id **required** `string`: The ID of the transaction to retrieve.

#### Output
* output [RetrieveTransactionResponse](#retrievetransactionresponse)

### CaptureTransaction
Captures a transaction that was created with the [Charge](#endpoint-charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](/articles/delayed-capture-transactions/)
for more information.


```js
squareup.CaptureTransaction({
  "location_id": "",
  "transaction_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`
  * transaction_id **required** `string`

#### Output
* output [CaptureTransactionResponse](#capturetransactionresponse)

### v2.locations.location_id.transactions.transaction_id.refund.post
Initiates a refund for a previously charged tender.

You must issue a refund within 120 days of the associated payment. See
(this article)[https://squareup.com/help/us/en/article/5060] for more information
on refund behavior.


```js
squareup.v2.locations.location_id.transactions.transaction_id.refund.post({
  "location_id": "",
  "transaction_id": "",
  "body": {
    "idempotency_key": "",
    "tender_id": "",
    "amount_money": {}
  }
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`: The ID of the original transaction's associated location.
  * transaction_id **required** `string`: The ID of the original transaction that includes the tender to refund.
  * body **required** [CreateRefundRequest](#createrefundrequest)

#### Output
* output [CreateRefundResponse](#createrefundresponse)

### VoidTransaction
Cancels a transaction that was created with the [Charge](#endpoint-charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](/articles/delayed-capture-transactions/)
for more information.


```js
squareup.VoidTransaction({
  "location_id": "",
  "transaction_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`
  * transaction_id **required** `string`

#### Output
* output [VoidTransactionResponse](#voidtransactionresponse)



## Definitions

### Address
* Address `object`: Represents a physical address.
  * address_line_1 `string`: The first line of the address.
  * address_line_2 `string`: The second line of the address, if any.
  * address_line_3 `string`: The third line of the address, if any.
  * administrative_district_level_1 `string`: A civil entity within the address's country. In the US, this
  * administrative_district_level_2 `string`: A civil entity within the address's `administrative_district_level_1`.
  * administrative_district_level_3 `string`: A civil entity within the address's `administrative_district_level_2`,
  * country `string` (values: ZZ, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW): The address's country, in ISO 3166-1-alpha-2 format.
  * first_name `string`: Optional first name when it's representing recipient.
  * last_name `string`: Optional last name when it's representing recipient.
  * locality `string`: The city or town of the address.
  * organization `string`: Optional organization name when it's representing recipient.
  * postal_code `string`: The address's postal code.
  * sublocality `string`: A civil region within the address's `locality`, if any.
  * sublocality_2 `string`: A civil region within the address's `sublocality`, if any.
  * sublocality_3 `string`: A civil region within the address's `sublocality_2`, if any.

### BatchDeleteCatalogObjectsRequest
* BatchDeleteCatalogObjectsRequest `object`
  * object_ids `array`: The IDs of the [CatalogObject](#type-catalogobject)s to be deleted. When an object is deleted, other objects
    * items `string`

### BatchDeleteCatalogObjectsResponse
* BatchDeleteCatalogObjectsResponse `object`
  * deleted_at `string`: The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
  * deleted_object_ids `array`: The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request.
    * items `string`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)

### BatchRetrieveCatalogObjectsRequest
* BatchRetrieveCatalogObjectsRequest `object`
  * include_related_objects `boolean`: If `true`, the response will include additional objects that are related to the
  * object_ids **required** `array`: The IDs of the [CatalogObject](#type-catalogobject)s to be retrieved.
    * items `string`

### BatchRetrieveCatalogObjectsResponse
* BatchRetrieveCatalogObjectsResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * objects `array`: A list of [CatalogObject](#type-catalogobject)s returned.
    * items [CatalogObject](#catalogobject)
  * related_objects `array`: A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field.
    * items [CatalogObject](#catalogobject)

### BatchUpsertCatalogObjectsRequest
* BatchUpsertCatalogObjectsRequest `object`
  * batches `array`: A batch of [CatalogObject](#type-catalogobject)s to be inserted/updated atomically.
    * items [CatalogObjectBatch](#catalogobjectbatch)
  * idempotency_key **required** `string`: A value you specify that uniquely identifies this

### BatchUpsertCatalogObjectsResponse
* BatchUpsertCatalogObjectsResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * id_mappings `array`: The mapping between client and server IDs for this Upsert.
    * items [CatalogIdMapping](#catalogidmapping)
  * objects `array`: The created [CatalogObject](#type-catalogobject)s
    * items [CatalogObject](#catalogobject)
  * updated_at `string`: The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".

### CaptureTransactionRequest
* CaptureTransactionRequest `object`

### CaptureTransactionResponse
* CaptureTransactionResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### Card
* Card `object`: Represents the non-confidential details of a credit card.
  * billing_address [Address](#address)
  * card_brand `string` (values: OTHER_BRAND, VISA, MASTERCARD, AMERICAN_EXPRESS, DISCOVER, DISCOVER_DINERS, JCB, CHINA_UNIONPAY, SQUARE_GIFT_CARD): The card's brand (such as `VISA`). See [CardBrand](#type-cardbrand)
  * cardholder_name `string`: The cardholder name. This value is present only if this object
  * exp_month `integer`: The month of the card's expiration date. This value is always between
  * exp_year `integer`: The four-digit year of the card's expiration date.
  * fingerprint `string`: The unique string fingerprint for the card. 
  * id `string`: The card's unique ID, if any.
  * last_4 `string`: The last 4 digits of the card's number.

### CardBrand
* CardBrand `string` (values: OTHER_BRAND, VISA, MASTERCARD, AMERICAN_EXPRESS, DISCOVER, DISCOVER_DINERS, JCB, CHINA_UNIONPAY, SQUARE_GIFT_CARD): Indicates a credit card's brand, such as `VISA`.

### CatalogCategory
* CatalogCategory `object`: A category to which an [CatalogItem](#type-catalogitem) belongs in the Catalog object model.
  * name **required** `string`: The category's name. Searchable.

### CatalogDiscount
* CatalogDiscount `object`: A discount in the Catalog object model.
  * amount_money [Money](#money)
  * discount_type `string` (values: FIXED_PERCENTAGE, FIXED_AMOUNT, VARIABLE_PERCENTAGE, VARIABLE_AMOUNT): Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale.
  * label_color `string`: The color of the discount's display label in the Square Point of Sale app.
  * name **required** `string`: The discount's name. Searchable.
  * percentage `string`: The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
  * pin_required `boolean`: Indicates whether a mobile staff member needs to enter their PIN to apply the

### CatalogDiscountType
* CatalogDiscountType `string` (values: FIXED_PERCENTAGE, FIXED_AMOUNT, VARIABLE_PERCENTAGE, VARIABLE_AMOUNT): How to apply a [CatalogDiscount](#type-catalogdiscount) to a [CatalogItem](#type-catalogitem).

### CatalogIdMapping
* CatalogIdMapping `object`: A mapping between a client-supplied temporary ID and a permanent server ID.
  * client_object_id `string`: The client-supplied, temporary `#`-prefixed ID for a new [CatalogObject](#type-catalogobject).
  * object_id `string`: The permanent ID for the [CatalogObject](#type-catalogobject) created by the server.

### CatalogInfoRequest
* CatalogInfoRequest `object`

### CatalogInfoResponse
* CatalogInfoResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * limits [CatalogInfoResponseLimits](#cataloginforesponselimits)

### CatalogInfoResponseLimits
* CatalogInfoResponseLimits `object`
  * batch_delete_max_object_ids `integer`: The maximum number of object IDs that may be included in a single
  * batch_retrieve_max_object_ids `integer`: The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
  * batch_upsert_max_objects_per_batch `integer`: The maximum number of objects that may appear within a single batch in a
  * batch_upsert_max_total_objects `integer`: The maximum number of objects that may appear across all batches in a
  * search_max_page_limit `integer`: The maximum number of results that may be returned in a page of a
  * update_item_modifier_lists_max_item_ids `integer`: The maximum number of item IDs that may be included in a single
  * update_item_modifier_lists_max_modifier_lists_to_disable `integer`: The maximum number of modifier list IDs to be disabled that may be included in
  * update_item_modifier_lists_max_modifier_lists_to_enable `integer`: The maximum number of modifier list IDs to be enabled that may be included in
  * update_item_taxes_max_item_ids `integer`: The maximum number of item IDs that may be included in a single
  * update_item_taxes_max_taxes_to_disable `integer`: The maximum number of tax IDs to be disabled that may be included in a single
  * update_item_taxes_max_taxes_to_enable `integer`: The maximum number of tax IDs to be enabled that may be included in a single

### CatalogItem
* CatalogItem `object`: An item (i.e., product family) in the Catalog object model.
  * abbreviation `string`: The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.  Searchable.
  * available_electronically `boolean`: If `true`, the item can be added to electronically fulfilled orders from the merchant's online store.
  * available_for_pickup `boolean`: If `true`, the item can be added to pickup orders from the merchant's online store.
  * available_online `boolean`: If `true`, the item can be added to shipping orders from the merchant's online store.
  * category_id `string`: The ID of the item's category, if any.
  * description `string`: The item's description. Searchable.
  * image_url `string`: The URL of an image representing this item.
  * label_color `string`: The color of the item's display label in the Square Point of Sale app.
  * modifier_list_info `array`: A set of [CatalogItemModifierListInfo](#type-catalogitemmodifierlistinfo) objects
    * items [CatalogItemModifierListInfo](#catalogitemmodifierlistinfo)
  * name **required** `string`: The item's name. Searchable.
  * product_type `string` (values: REGULAR, GIFT_CARD, APPOINTMENTS_SERVICE, RETAIL_ITEM, RESTAURANT_ITEM): The product type of the item. May not be changed once an item has been created.
  * skip_modifier_screen `boolean`: If `false`, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)'s
  * tax_ids `array`: A set of IDs indicating the [CatalogTax](#type-catalogtax)es that are enabled for
    * items `string`
  * variations `array`: A list of [CatalogObject](#type-catalogobject)s containing the [CatalogItemVariation](#type-catalogitemvariation)s for this item.
    * items [CatalogObject](#catalogobject)

### CatalogItemModifierListInfo
* CatalogItemModifierListInfo `object`: Controls the properties of a [CatalogModifierList](#type-catalogmodifierlist) as it applies to this [CatalogItem](#type-catalogitem).
  * enabled `boolean`: If `true`, enable this [CatalogModifierList](#type-catalogmodifierlist).
  * max_selected_modifiers `integer`: If zero or larger, the largest number of [CatalogModifier](#type-catalogmodifier)s that can be selected from this [CatalogModifierList](#type-catalogmodifierlist).
  * min_selected_modifiers `integer`: If zero or larger, the smallest number of [CatalogModifier](#type-catalogmodifier)s that must be selected from this [CatalogModifierList](#type-catalogmodifierlist).
  * modifier_list_id **required** `string`: The ID of the [CatalogModifierList](#type-catalogmodifierlist) controlled by this [CatalogModifierListInfo](#type-catalogmodifierlistinfo).
  * modifier_overrides `array`: A set of [CatalogModifierOverride](#type-catalogmodifieroverride) objects that override whether a given [CatalogModifier](#type-catalogmodifier) is enabled by default.
    * items [CatalogModifierOverride](#catalogmodifieroverride)

### CatalogItemProductType
* CatalogItemProductType `string` (values: REGULAR, GIFT_CARD, APPOINTMENTS_SERVICE, RETAIL_ITEM, RESTAURANT_ITEM): The type of a [CatalogItem](#type-catalogitem). Connect V2 only allows the creation of `REGULAR` items.

### CatalogItemVariation
* CatalogItemVariation `object`: An item variation (i.e., product) in the Catalog object model.
  * inventory_alert_threshold `integer`: If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
  * inventory_alert_type `string` (values: NONE, LOW_QUANTITY): Indicates whether the item variation displays an alert when its inventory quantity is less than or equal
  * item_id `string`: The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable.
  * location_overrides `array`: Per-[location][#type-location] price and inventory overrides.
    * items [ItemVariationLocationOverrides](#itemvariationlocationoverrides)
  * name `string`: The item variation's name. Searchable.
  * price_money [Money](#money)
  * pricing_type `string` (values: FIXED_PRICING, VARIABLE_PRICING): Indicates whether the item variation's price is fixed or determined at the time
  * service_duration `integer`: If the [CatalogItem](#type-catalogitem) that owns this item variation is of type
  * sku `string`: The item variation's SKU, if any. Searchable.
  * track_inventory `boolean`: If `true`, inventory tracking is active for the variation.
  * upc `string`: The item variation's UPC, if any. Searchable.
  * user_data `string`: Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable.

### CatalogModifier
* CatalogModifier `object`: A modifier in the Catalog object model.
  * name **required** `string`: The modifier's name. Searchable.
  * price_money [Money](#money)

### CatalogModifierList
* CatalogModifierList `object`: A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist)
  * modifiers `array`: The options included in the [CatalogModifierList](#type-catalogmodifierlist).
    * items [CatalogObject](#catalogobject)
  * name **required** `string`: The [CatalogModifierList](#type-catalogmodifierlist)'s name. Searchable.
  * selection_type `string` (values: SINGLE, MULTIPLE): Indicates whether multiple options from the [CatalogModifierList](#type-catalogmodifierlist)

### CatalogModifierListSelectionType
* CatalogModifierListSelectionType `string` (values: SINGLE, MULTIPLE): Indicates whether a [CatalogModifierList](#type-catalogmodifierlist) supports multiple selections.

### CatalogModifierOverride
* CatalogModifierOverride `object`
  * modifier_id **required** `string`: The ID of the [CatalogModifier](#type-catalogmodifier) whose default behavior is being overridden.
  * on_by_default `boolean`: If `true`, this [CatalogModifier](#type-catalogmodifier) should be selected by default for this [CatalogItem](#type-catalogitem).

### CatalogObject
* CatalogObject `object`: The wrapper object for object types in the Catalog data model. The type
  * absent_at_location_ids `array`: A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
    * items `string`
  * catalog_v1_ids `array`: The Connect V1 IDs for this object at each [location][#type-location] where it is present, where they
    * items [CatalogV1Id](#catalogv1id)
  * category_data [CatalogCategory](#catalogcategory)
  * discount_data [CatalogDiscount](#catalogdiscount)
  * id **required** `string`: An identifier to reference this object in the catalog. When a new CatalogObject
  * is_deleted `boolean`: If `true`, the object has been deleted from the database. Must be `false` for new objects
  * item_data [CatalogItem](#catalogitem)
  * item_variation_data [CatalogItemVariation](#catalogitemvariation)
  * modifier_data [CatalogModifier](#catalogmodifier)
  * modifier_list_data [CatalogModifierList](#catalogmodifierlist)
  * present_at_all_locations `boolean`: If `true`, this object is present at all locations (including future locations), except where specified in
  * present_at_location_ids `array`: A list of locations where the object is present, even if `present_at_all_locations` is `false`.
    * items `string`
  * tax_data [CatalogTax](#catalogtax)
  * type **required** `string` (values: ITEM, CATEGORY, ITEM_VARIATION, TAX, DISCOUNT, MODIFIER_LIST, MODIFIER): The type of this object. Each object type has expected
  * updated_at `string`: Last modification [timestamp](#workingwithdates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
  * version `integer`: The version of the object. When updating an object, the version supplied by the

### CatalogObjectBatch
* CatalogObjectBatch `object`: A batch of [CatalogObject](#type-catalogobject)s.
  * objects `array`: A list of [CatalogObject](#type-catalogobject)s belonging to this batch.
    * items [CatalogObject](#catalogobject)

### CatalogObjectType
* CatalogObjectType `string` (values: ITEM, CATEGORY, ITEM_VARIATION, TAX, DISCOUNT, MODIFIER_LIST, MODIFIER): Possible kinds of [CatalogObject](#type-catalogobject)s returned from the Catalog, each

### CatalogPricingType
* CatalogPricingType `string` (values: FIXED_PRICING, VARIABLE_PRICING): Indicates whether the price of a [CatalogItemVariation](#type-catalogitemvariation) should be entered manually at the time of sale.

### CatalogQuery
* CatalogQuery `object`: A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest).
  * exact_query [CatalogQueryExact](#catalogqueryexact)
  * items_for_modifier_list_query [CatalogQueryItemsForModifierList](#catalogqueryitemsformodifierlist)
  * items_for_tax_query [CatalogQueryItemsForTax](#catalogqueryitemsfortax)
  * prefix_query [CatalogQueryPrefix](#catalogqueryprefix)
  * range_query [CatalogQueryRange](#catalogqueryrange)
  * sorted_attribute_query [CatalogQuerySortedAttribute](#catalogquerysortedattribute)
  * text_query [CatalogQueryText](#catalogquerytext)

### CatalogQueryExact
* CatalogQueryExact `object`
  * attribute_name **required** `string`: The name of the attribute to be searched.
  * attribute_value **required** `string`: The desired value of the search attribute.

### CatalogQueryItemsForModifierList
* CatalogQueryItemsForModifierList `object`
  * modifier_list_ids **required** `array`: A set of [CatalogModifierList](#type-catalogmodifierlist) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
    * items `string`

### CatalogQueryItemsForTax
* CatalogQueryItemsForTax `object`
  * tax_ids **required** `array`: A set of [CatalogTax](#type-catalogtax) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
    * items `string`

### CatalogQueryPrefix
* CatalogQueryPrefix `object`
  * attribute_name **required** `string`: The name of the attribute to be searched.
  * attribute_prefix **required** `string`: The desired prefix of the search attribute value.

### CatalogQueryRange
* CatalogQueryRange `object`
  * attribute_max_value `integer`: The desired maximum value for the search attribute (inclusive).
  * attribute_min_value `integer`: The desired minimum value for the search attribute (inclusive).
  * attribute_name **required** `string`: The name of the attribute to be searched.

### CatalogQuerySortedAttribute
* CatalogQuerySortedAttribute `object`
  * attribute_name **required** `string`: The attribute whose value should be used as the sort key.
  * initial_attribute_value `string`: The first attribute value to be returned by the query. Ascending sorts will return only
  * sort_order `string` (values: DESC, ASC): The desired [SortOrder](#type-sortorder), `"ASC"` (ascending) or `"DESC"` (descending).

### CatalogQueryText
* CatalogQueryText `object`
  * keywords **required** `array`: A list of one, two, or three search keywords. Keywords with fewer than three characters
    * items `string`

### CatalogTax
* CatalogTax `object`: A tax in the Catalog object model.
  * applies_to_custom_amounts `boolean`: If `true`, the fee applies to custom amounts entered into the Square Point of Sale
  * calculation_phase `string` (values: TAX_SUBTOTAL_PHASE, TAX_TOTAL_PHASE): Whether the tax is calculated based on a payment's subtotal or total. See [TaxCalculationPhase](#type-taxcalculationphase) for all possible values.
  * enabled `boolean`: If `true`, the tax will be shown as enabled in the Square Point of Sale app.
  * inclusion_type `string` (values: ADDITIVE, INCLUSIVE): Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for all possible values.
  * name **required** `string`: The tax's name. Searchable.
  * percentage `string`: The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.

### CatalogV1Id
* CatalogV1Id `object`: An Items Connect V1 object ID along with its associated [location][#type-location] ID.
  * catalog_v1_id `string`: The ID for an object in Connect V1, if different from its Connect V2 ID.
  * location_id `string`: The ID of the [location][#type-location] this Connect V1 ID is associated with.

### ChargeRequest
* ChargeRequest `object`: Defines the parameters that can be included in the body of
  * amount_money **required** [Money](#money)
  * billing_address [Address](#address)
  * buyer_email_address `string`: The buyer's email address, if available. This value is optional,
  * card_nonce `string`: A nonce generated from the `SqPaymentForm` that represents the card
  * customer_card_id `string`: The ID of the customer card on file to charge. Do
  * customer_id `string`: The ID of the customer to associate this transaction with. This field
  * delay_capture `boolean`: If `true`, the request will only perform an Auth on the provided
  * idempotency_key **required** `string`: A value you specify that uniquely identifies this
  * note `string`: An optional note to associate with the transaction.
  * reference_id `string`: An optional ID you can associate with the transaction for your own
  * shipping_address [Address](#address)

### ChargeResponse
* ChargeResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * transaction [Transaction](#transaction)

### Checkout
* Checkout `object`: Square Checkout lets merchants accept online payments for supported
  * ask_for_shipping_address `boolean`: If `true`, Square Checkout will collect shipping information on your
  * checkout_page_url `string`: The URL that the buyer's browser should be redirected to after the
  * created_at `string`: The time when the checkout was created, in RFC 3339 format.
  * id `string`: ID generated by Square Checkout when a new checkout is requested.
  * merchant_support_email `string`: The email address to display on the Square Checkout confirmation page
  * order [Order](#order)
  * pre_populate_buyer_email `string`: If provided, the buyer's email is pre-populated on the checkout page
  * pre_populate_shipping_address [Address](#address)
  * redirect_url `string`: The URL to redirect to after checkout is completed with `checkoutId`,

### Country
* Country `string` (values: ZZ, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW): Indicates the country associated with another entity, such as a business.

### CreateCheckoutRequest
* CreateCheckoutRequest `object`: Defines the parameters that can be included in the body of
  * ask_for_shipping_address `boolean`: If `true`, Square Checkout will collect shipping information on your
  * idempotency_key **required** `string`: A unique string that identifies this checkout among others
  * merchant_support_email `string`: The email address to display on the Square Checkout confirmation page
  * order **required** [CreateOrderRequest](#createorderrequest)
  * pre_populate_buyer_email `string`: If provided, the buyer's email is pre-populated on the checkout page
  * pre_populate_shipping_address [Address](#address)
  * redirect_url `string`: The URL to redirect to after checkout is completed with `checkoutId`,

### CreateCheckoutResponse
* CreateCheckoutResponse `object`: Defines the fields that are included in the response body of
  * checkout [Checkout](#checkout)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### CreateCustomerCardRequest
* CreateCustomerCardRequest `object`: Defines the fields that are included in the request body of a request
  * billing_address [Address](#address)
  * card_nonce **required** `string`: A card nonce representing the credit card to link to the customer.
  * cardholder_name `string`: The cardholder's name.

### CreateCustomerCardResponse
* CreateCustomerCardResponse `object`: Defines the fields that are included in the response body of
  * card [Card](#card)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### CreateCustomerRequest
* CreateCustomerRequest `object`: Defines the body parameters that can be provided in a request to the
  * address [Address](#address)
  * company_name `string`: The name of the customer's company.
  * email_address `string`: The customer's email address.
  * family_name `string`: The customer's family (i.e., last) name.
  * given_name `string`: The customer's given (i.e., first) name.
  * nickname `string`: A nickname for the customer.
  * note `string`: An optional note to associate with the customer.
  * phone_number `string`: The customer's phone number.
  * reference_id `string`: An optional second ID you can set to associate the customer with an

### CreateCustomerResponse
* CreateCustomerResponse `object`: Defines the fields that are included in the response body of
  * customer [Customer](#customer)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### CreateOrderRequest
* CreateOrderRequest `object`: Defines the parameters that can be included in the body of
  * discounts `array`: The discounts include the custom discounts .
    * items [CreateOrderRequestDiscount](#createorderrequestdiscount)
  * line_items **required** `array`: The line items to associate with this order.
    * items [CreateOrderRequestLineItem](#createorderrequestlineitem)
  * reference_id `string`: An optional ID you can associate with the order for your own
  * taxes `array`: The taxes include the custom taxes.
    * items [CreateOrderRequestTax](#createorderrequesttax)

### CreateOrderRequestDiscount
* CreateOrderRequestDiscount `object`: Represents a discount that to either a single line item or an entire order.
  * amount_money [Money](#money)
  * name `string`: The discount's name.
  * percentage `string`: The percentage of the discount, as a string representation of a decimal number.

### CreateOrderRequestLineItem
* CreateOrderRequestLineItem `object`: Represents a line item to include in an order. Each line item describes
  * base_price_money [Money](#money)
  * discounts `array`: The discounts include the custom discounts.
    * items [CreateOrderRequestDiscount](#createorderrequestdiscount)
  * name `string`: The name of the line item. This value cannot exceed 500 characters.
  * quantity **required** `string`: The quantity to purchase, as a string representation of a number.
  * taxes `array`: The taxes include the custom taxes.
    * items [CreateOrderRequestTax](#createorderrequesttax)

### CreateOrderRequestTax
* CreateOrderRequestTax `object`: Represents a tax that applies to either a single line item or an entire order.
  * name `string`: The tax's name.
  * percentage `string`: The percentage of the tax, as a string representation of a decimal number.
  * type `string` (values: UNKNOWN, ADDITIVE, INCLUSIVE): Indicates the calculation method used to apply the line item tax.

### CreateRefundRequest
* CreateRefundRequest `object`: Defines the body parameters that can be included in
  * amount_money **required** [Money](#money)
  * idempotency_key **required** `string`: A value you specify that uniquely identifies this
  * reason `string`: A description of the reason for the refund.
  * tender_id **required** `string`: The ID of the tender to refund.

### CreateRefundResponse
* CreateRefundResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * refund [Refund](#refund)

### Currency
* Currency `string` (values: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, USN, USS, UYI, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XOF, XPD, XPF, XPT, XTS, XXX, YER, ZAR, ZMK, ZMW, BTC): Indicates the associated currency for an amount of money. Values correspond

### Customer
* Customer `object`: Represents one of a business's customers, which can have one or more
  * address [Address](#address)
  * cards `array`: The non-confidential details of the customer's cards on file.
    * items [Card](#card)
  * company_name `string`: The name of the customer's company.
  * created_at **required** `string`: The time when the customer was created, in RFC 3339 format.
  * email_address `string`: The customer's email address.
  * family_name `string`: The customer's family (i.e., last) name.
  * given_name `string`: The customer's given (i.e., first) name.
  * groups `array`: The groups the customer belongs to.
    * items [CustomerGroupInfo](#customergroupinfo)
  * id **required** `string`: The customer's unique ID.
  * nickname `string`: The customer's nickname.
  * note `string`: A note to associate with the customer.
  * phone_number `string`: The customer's phone number.
  * preferences [CustomerPreferences](#customerpreferences)
  * reference_id `string`: A second ID you can set to associate the customer with an
  * updated_at **required** `string`: The time when the customer was last updated, in RFC 3339 format.

### CustomerGroupInfo
* CustomerGroupInfo `object`: Contains some brief information about a customer group with its identifier included.
  * id **required** `string`: The ID of the customer group.
  * name **required** `string`: The name of the customer group.

### CustomerPreferences
* CustomerPreferences `object`: Represents a particular customer's preferences.
  * email_unsubscribed `boolean`: The customer has unsubscribed from receiving marketing campaign emails.

### DeleteCatalogObjectRequest
* DeleteCatalogObjectRequest `object`

### DeleteCatalogObjectResponse
* DeleteCatalogObjectResponse `object`
  * deleted_at `string`: The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g.,
  * deleted_object_ids `array`: The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request.
    * items `string`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)

### DeleteCustomerCardRequest
* DeleteCustomerCardRequest `object`

### DeleteCustomerCardResponse
* DeleteCustomerCardResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### DeleteCustomerRequest
* DeleteCustomerRequest `object`

### DeleteCustomerResponse
* DeleteCustomerResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### Device
* Device `object`
  * id `string`: The device's Square-issued ID.
  * name `string`: The device's merchant-specified name.

### Error
* Error `object`: Represents an error encountered during a request to the Connect API.
  * category **required** `string` (values: API_ERROR, AUTHENTICATION_ERROR, INVALID_REQUEST_ERROR, RATE_LIMIT_ERROR, PAYMENT_METHOD_ERROR, REFUND_ERROR): The error's high-level category. See [ErrorCategory](#type-errorcategory)
  * code **required** `string` (values: INTERNAL_SERVER_ERROR, UNAUTHORIZED, ACCESS_TOKEN_EXPIRED, ACCESS_TOKEN_REVOKED, FORBIDDEN, INSUFFICIENT_SCOPES, APPLICATION_DISABLED, V1_APPLICATION, V1_ACCESS_TOKEN, CARD_PROCESSING_NOT_ENABLED, BAD_REQUEST, MISSING_REQUIRED_PARAMETER, INCORRECT_TYPE, INVALID_TIME, INVALID_TIME_RANGE, INVALID_VALUE, INVALID_CURSOR, UNKNOWN_QUERY_PARAMETER, CONFLICTING_PARAMETERS, EXPECTED_JSON_BODY, INVALID_SORT_ORDER, VALUE_REGEX_MISMATCH, VALUE_TOO_SHORT, VALUE_TOO_LONG, VALUE_TOO_LOW, VALUE_TOO_HIGH, VALUE_EMPTY, ARRAY_EMPTY, EXPECTED_BOOLEAN, EXPECTED_INTEGER, EXPECTED_FLOAT, EXPECTED_STRING, EXPECTED_OBJECT, EXPECTED_ARRAY, EXPECTED_BASE64_ENCODED_BYTE_ARRAY, INVALID_ARRAY_VALUE, INVALID_ENUM_VALUE, INVALID_CONTENT_TYPE, INVALID_FORM_VALUE, ONE_INSTRUMENT_EXPECTED, NO_FIELDS_SET, CARD_EXPIRED, INVALID_EXPIRATION, INVALID_EXPIRATION_YEAR, INVALID_EXPIRATION_DATE, UNSUPPORTED_CARD_BRAND, INVALID_CARD, DELAYED_TRANSACTION_EXPIRED, DELAYED_TRANSACTION_CANCELED, DELAYED_TRANSACTION_CAPTURED, DELAYED_TRANSACTION_FAILED, CARD_TOKEN_EXPIRED, CARD_TOKEN_USED, AMOUNT_TOO_HIGH, UNSUPPORTED_INSTRUMENT_TYPE, REFUND_AMOUNT_INVALID, REFUND_ALREADY_PENDING, PAYMENT_NOT_REFUNDABLE, INVALID_CARD_DATA, IDEMPOTENCY_KEY_REUSED, UNEXPECTED_VALUE, SANDBOX_NOT_SUPPORTED, INVALID_EMAIL_ADDRESS, CHECKOUT_EXPIRED, CARD_DECLINED, VERIFY_CVV_FAILURE, VERIFY_AVS_FAILURE, CARD_DECLINED_CALL_ISSUER, NOT_FOUND, REQUEST_TIMEOUT, CONFLICT, REQUEST_ENTITY_TOO_LARGE, UNSUPPORTED_MEDIA_TYPE, RATE_LIMITED, NOT_IMPLEMENTED, SERVICE_UNAVAILABLE): The error's specific code. See [ErrorCode](#type-errorcode) for possible
  * detail `string`: A human-readable description of the error for debugging purposes.
  * field `string`: The name of the field provided in the original request that the error

### ErrorCategory
* ErrorCategory `string` (values: API_ERROR, AUTHENTICATION_ERROR, INVALID_REQUEST_ERROR, RATE_LIMIT_ERROR, PAYMENT_METHOD_ERROR, REFUND_ERROR): Indicates which high-level category of error has occurred during a

### ErrorCode
* ErrorCode `string` (values: INTERNAL_SERVER_ERROR, UNAUTHORIZED, ACCESS_TOKEN_EXPIRED, ACCESS_TOKEN_REVOKED, FORBIDDEN, INSUFFICIENT_SCOPES, APPLICATION_DISABLED, V1_APPLICATION, V1_ACCESS_TOKEN, CARD_PROCESSING_NOT_ENABLED, BAD_REQUEST, MISSING_REQUIRED_PARAMETER, INCORRECT_TYPE, INVALID_TIME, INVALID_TIME_RANGE, INVALID_VALUE, INVALID_CURSOR, UNKNOWN_QUERY_PARAMETER, CONFLICTING_PARAMETERS, EXPECTED_JSON_BODY, INVALID_SORT_ORDER, VALUE_REGEX_MISMATCH, VALUE_TOO_SHORT, VALUE_TOO_LONG, VALUE_TOO_LOW, VALUE_TOO_HIGH, VALUE_EMPTY, ARRAY_EMPTY, EXPECTED_BOOLEAN, EXPECTED_INTEGER, EXPECTED_FLOAT, EXPECTED_STRING, EXPECTED_OBJECT, EXPECTED_ARRAY, EXPECTED_BASE64_ENCODED_BYTE_ARRAY, INVALID_ARRAY_VALUE, INVALID_ENUM_VALUE, INVALID_CONTENT_TYPE, INVALID_FORM_VALUE, ONE_INSTRUMENT_EXPECTED, NO_FIELDS_SET, CARD_EXPIRED, INVALID_EXPIRATION, INVALID_EXPIRATION_YEAR, INVALID_EXPIRATION_DATE, UNSUPPORTED_CARD_BRAND, INVALID_CARD, DELAYED_TRANSACTION_EXPIRED, DELAYED_TRANSACTION_CANCELED, DELAYED_TRANSACTION_CAPTURED, DELAYED_TRANSACTION_FAILED, CARD_TOKEN_EXPIRED, CARD_TOKEN_USED, AMOUNT_TOO_HIGH, UNSUPPORTED_INSTRUMENT_TYPE, REFUND_AMOUNT_INVALID, REFUND_ALREADY_PENDING, PAYMENT_NOT_REFUNDABLE, INVALID_CARD_DATA, IDEMPOTENCY_KEY_REUSED, UNEXPECTED_VALUE, SANDBOX_NOT_SUPPORTED, INVALID_EMAIL_ADDRESS, CHECKOUT_EXPIRED, CARD_DECLINED, VERIFY_CVV_FAILURE, VERIFY_AVS_FAILURE, CARD_DECLINED_CALL_ISSUER, NOT_FOUND, REQUEST_TIMEOUT, CONFLICT, REQUEST_ENTITY_TOO_LARGE, UNSUPPORTED_MEDIA_TYPE, RATE_LIMITED, NOT_IMPLEMENTED, SERVICE_UNAVAILABLE): Indicates specific errors that can occur during a request to the

### InventoryAlertType
* InventoryAlertType `string` (values: NONE, LOW_QUANTITY): Indicates whether Square should alert the merchant when the inventory quantity of a [CatalogItemVariation](#type-catalogitemvariation) is low.

### ItemVariationLocationOverrides
* ItemVariationLocationOverrides `object`: Price and inventory alerting overrides for a [CatalogItemVariation](#type-catalogitemvariation) at a specific [location][#type-location].
  * inventory_alert_threshold `integer`: If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
  * inventory_alert_type `string` (values: NONE, LOW_QUANTITY): Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory
  * location_id `string`: The ID of the [location][#type-location].
  * price_money [Money](#money)
  * pricing_type `string` (values: FIXED_PRICING, VARIABLE_PRICING): The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given [location][#type-location].
  * track_inventory `boolean`: If `true`, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this [location][#type-location].

### ListCatalogRequest
* ListCatalogRequest `object`
  * cursor `string`: The pagination cursor returned in the previous response. Leave unset for an initial request.
  * types `string`: An optional case-insensitive, comma-separated list of object types to retrieve, for example

### ListCatalogResponse
* ListCatalogResponse `object`
  * cursor `string`: The pagination cursor to be used in a subsequent request. If unset, this is the final response.
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * objects `array`: The [CatalogObject](#type-catalogobject)s returned.
    * items [CatalogObject](#catalogobject)

### ListCustomersRequest
* ListCustomersRequest `object`: Defines the query parameters that can be provided in a request to the
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.

### ListCustomersResponse
* ListCustomersResponse `object`: Defines the fields that are included in the response body of
  * cursor `string`: A pagination cursor to retrieve the next set of results for your
  * customers `array`: An array of `Customer` objects that match your query.
    * items [Customer](#customer)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### ListLocationsRequest
* ListLocationsRequest `object`

### ListLocationsResponse
* ListLocationsResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * locations `array`: The business's locations.
    * items [Location](#location)

### ListRefundsRequest
* ListRefundsRequest `object`: Defines the query parameters that can be included in
  * begin_time `string`: The beginning of the requested reporting period, in RFC 3339 format.
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.
  * end_time `string`: The end of the requested reporting period, in RFC 3339 format.
  * sort_order `string` (values: DESC, ASC): The order in which results are listed in the response (`ASC` for

### ListRefundsResponse
* ListRefundsResponse `object`: Defines the fields that are included in the response body of
  * cursor `string`: A pagination cursor for retrieving the next set of results,
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * refunds `array`: An array of refunds that match your query.
    * items [Refund](#refund)

### ListTransactionsRequest
* ListTransactionsRequest `object`: Defines the query parameters that can be included in
  * begin_time `string`: The beginning of the requested reporting period, in RFC 3339 format.
  * cursor `string`: A pagination cursor returned by a previous call to this endpoint.
  * end_time `string`: The end of the requested reporting period, in RFC 3339 format.
  * sort_order `string` (values: DESC, ASC): The order in which results are listed in the response (`ASC` for

### ListTransactionsResponse
* ListTransactionsResponse `object`: Defines the fields that are included in the response body of
  * cursor `string`: A pagination cursor for retrieving the next set of results,
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * transactions `array`: An array of transactions that match your query.
    * items [Transaction](#transaction)

### Location
* Location `object`: Represents one of a business's locations.
  * address [Address](#address)
  * capabilities `array`: Indicates which Square features are enabled for the location.
    * items `string` (values: CREDIT_CARD_PROCESSING)
  * id `string`: The location's unique ID.
  * name `string`: The location's name.
  * timezone `string`: The [IANA Timezone Database](https://www.iana.org/time-zones)

### LocationCapability
* LocationCapability `string` (values: CREDIT_CARD_PROCESSING): Indicates account capabilities that a business's location might or

### Money
* Money `object`: Represents an amount of money.
  * amount `integer`: The amount of money, in the smallest denomination of the
  * currency `string` (values: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, USN, USS, UYI, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XOF, XPD, XPF, XPT, XTS, XXX, YER, ZAR, ZMK, ZMW, BTC): The type of currency, in __ISO 4217 format__. For example, the currency

### Order
* Order `object`: Contains all information related to a single order to process with Square,
  * line_items `array`: The line items included in the order. Every order has at least one
    * items [OrderLineItem](#orderlineitem)
  * location_id `string`: The ID of the merchant location this order is associated with.
  * reference_id `string`: A client specified identifier to associate an entity in another system
  * total_discount_money [Money](#money)
  * total_money [Money](#money)
  * total_tax_money [Money](#money)

### OrderLineItem
* OrderLineItem `object`: Represents a line item in an order. Each line item describes a different
  * base_price_money [Money](#money)
  * discounts `array`: The discounts applied to this line item.
    * items [OrderLineItemDiscount](#orderlineitemdiscount)
  * name `string`: The name of the line item.
  * quantity `string`: The quantity of the product to purchase. Currently, this string must
  * taxes `array`: The taxes applied to this line item.
    * items [OrderLineItemTax](#orderlineitemtax)
  * total_discount_money [Money](#money)
  * total_money [Money](#money)
  * total_tax_money [Money](#money)

### OrderLineItemDiscount
* OrderLineItemDiscount `object`: Represents a discount that applies to one or more line items in an
  * amount_money [Money](#money)
  * applied_money [Money](#money)
  * name `string`: The discount's name.
  * percentage `string`: The percentage of the tax, as a string representation of a decimal number.
  * scope `string` (values: LINE_ITEM, ORDER): Indicates the level at which the discount applies.
  * type `string` (values: UNKNOWN, FIXED_PERCENTAGE, FIXED_AMOUNT, VARIABLE_PERCENTAGE, VARIABLE_AMOUNT): The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.

### OrderLineItemDiscountScope
* OrderLineItemDiscountScope `string` (values: LINE_ITEM, ORDER): Indicates whether this is a line item or order-level discount.

### OrderLineItemDiscountType
* OrderLineItemDiscountType `string` (values: UNKNOWN, FIXED_PERCENTAGE, FIXED_AMOUNT, VARIABLE_PERCENTAGE, VARIABLE_AMOUNT): Indicates how the discount is applied to the associated line item or order.

### OrderLineItemTax
* OrderLineItemTax `object`: Represents a tax that applies to one or more line items in an order.
  * applied_money [Money](#money)
  * name `string`: The tax's name.
  * percentage `string`: The percentage of the tax, as a string representation of a decimal number.
  * type `string` (values: UNKNOWN, ADDITIVE, INCLUSIVE): Indicates the calculation method used to apply the tax.

### OrderLineItemTaxType
* OrderLineItemTaxType `string` (values: UNKNOWN, ADDITIVE, INCLUSIVE): Indicates how the tax is applied to the associated line item or order.

### Refund
* Refund `object`: Represents a refund processed for a Square transaction.
  * amount_money **required** [Money](#money)
  * created_at `string`: The time when the refund was created, in RFC 3339 format.
  * id **required** `string`: The refund's unique ID.
  * location_id **required** `string`: The ID of the refund's associated location.
  * processing_fee_money [Money](#money)
  * reason **required** `string`: The reason for the refund being issued.
  * status **required** `string` (values: PENDING, APPROVED, REJECTED, FAILED): The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`,
  * tender_id **required** `string`: The ID of the refunded tender.
  * transaction_id **required** `string`: The ID of the transaction that the refunded tender is part of.

### RefundStatus
* RefundStatus `string` (values: PENDING, APPROVED, REJECTED, FAILED): Indicates a refund's current status.

### RetrieveCatalogObjectRequest
* RetrieveCatalogObjectRequest `object`
  * include_related_objects `boolean`: If `true`, the response will include additional objects that are related to the

### RetrieveCatalogObjectResponse
* RetrieveCatalogObjectResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * object [CatalogObject](#catalogobject)
  * related_objects `array`: A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `object` field.
    * items [CatalogObject](#catalogobject)

### RetrieveCustomerRequest
* RetrieveCustomerRequest `object`

### RetrieveCustomerResponse
* RetrieveCustomerResponse `object`: Defines the fields that are included in the response body of
  * customer [Customer](#customer)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### RetrieveTransactionRequest
* RetrieveTransactionRequest `object`

### RetrieveTransactionResponse
* RetrieveTransactionResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * transaction [Transaction](#transaction)

### SearchCatalogObjectsRequest
* SearchCatalogObjectsRequest `object`
  * begin_time `string`: Return only objects that have been modified after this [timestamp](#workingwithdates)
  * cursor `string`: The pagination cursor returned in the previous response. Leave unset for an initial request.
  * include_deleted_objects `boolean`: If `true`, deleted objects will be included in the results. Deleted objects will have their
  * include_related_objects `boolean`: If `true`, the response will include additional objects that are related to the
  * limit `integer`: A limit on the number of results to be returned in a single page. The limit is advisory -
  * object_types `array`: The desired set of object types to appear in the search results. The legal values are taken from the
    * items `string` (values: ITEM, CATEGORY, ITEM_VARIATION, TAX, DISCOUNT, MODIFIER_LIST, MODIFIER)
  * query [CatalogQuery](#catalogquery)

### SearchCatalogObjectsResponse
* SearchCatalogObjectsResponse `object`
  * cursor `string`: The pagination cursor to be used in a subsequent request. If unset, this is the final response.
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * objects `array`: The [CatalogObject](#type-catalogobject)s returned.
    * items [CatalogObject](#catalogobject)
  * related_objects `array`: A list of [CatalogObject](#type-catalogobject)s referenced by the objects in the `objects` field.
    * items [CatalogObject](#catalogobject)

### SortOrder
* SortOrder `string` (values: DESC, ASC): The order (e.g., chronological or alphabetical) in which results from a request are returned.

### TaxCalculationPhase
* TaxCalculationPhase `string` (values: TAX_SUBTOTAL_PHASE, TAX_TOTAL_PHASE): When to calculate the taxes due on a cart.

### TaxInclusionType
* TaxInclusionType `string` (values: ADDITIVE, INCLUSIVE): Whether to the tax amount should be additional to or included in to the [CatalogItem](#type-catalogitem) price.

### Tender
* Tender `object`: Represents a tender (i.e., a method of payment) used in a Square transaction.
  * amount_money [Money](#money)
  * card_details [TenderCardDetails](#tendercarddetails)
  * cash_details [TenderCashDetails](#tendercashdetails)
  * created_at `string`: The time when the tender was created, in RFC 3339 format.
  * customer_id `string`: If the tender is associated with a customer or represents a customer's card on file,
  * id `string`: The tender's unique ID.
  * location_id `string`: The ID of the transaction's associated location.
  * note `string`: An optional note associated with the tender at the time of payment.
  * processing_fee_money [Money](#money)
  * transaction_id `string`: The ID of the tender's associated transaction.
  * type **required** `string` (values: CARD, CASH, THIRD_PARTY_CARD, SQUARE_GIFT_CARD, NO_SALE, OTHER): The type of tender, such as `CARD` or `CASH`.

### TenderCardDetails
* TenderCardDetails `object`: Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
  * card [Card](#card)
  * entry_method `string` (values: SWIPED, KEYED, EMV, ON_FILE, CONTACTLESS): The method used to enter the card's details for the transaction.
  * status `string` (values: AUTHORIZED, CAPTURED, VOIDED, FAILED): The credit card payment's current state (such as `AUTHORIZED` or

### TenderCardDetailsEntryMethod
* TenderCardDetailsEntryMethod `string` (values: SWIPED, KEYED, EMV, ON_FILE, CONTACTLESS): Indicates the method used to enter the card's details.

### TenderCardDetailsStatus
* TenderCardDetailsStatus `string` (values: AUTHORIZED, CAPTURED, VOIDED, FAILED): Indicates the card transaction's current status.

### TenderCashDetails
* TenderCashDetails `object`: Represents the details of a tender with `type` `CASH`.
  * buyer_tendered_money [Money](#money)
  * change_back_money [Money](#money)

### TenderType
* TenderType `string` (values: CARD, CASH, THIRD_PARTY_CARD, SQUARE_GIFT_CARD, NO_SALE, OTHER): Indicates a tender's type.

### Transaction
* Transaction `object`: Represents a transaction processed with Square, either with the
  * client_id `string`: If the transaction was created in the Square Point of Sale app, this value
  * created_at `string`: The time when the transaction was created, in RFC 3339 format.
  * id `string`: The transaction's unique ID, issued by Square payments servers.
  * location_id `string`: The ID of the transaction's associated location.
  * order [Order](#order)
  * product `string` (values: REGISTER, EXTERNAL_API, BILLING, APPOINTMENTS, INVOICES, ONLINE_STORE, PAYROLL, OTHER): The Square product that processed the transaction.
  * reference_id `string`: If the transaction was created with the [Charge](#endpoint-charge)
  * refunds `array`: Refunds that have been applied to any tender in the transaction.
    * items [Refund](#refund)
  * shipping_address [Address](#address)
  * tenders `array`: The tenders used to pay in the transaction.
    * items [Tender](#tender)

### TransactionProduct
* TransactionProduct `string` (values: REGISTER, EXTERNAL_API, BILLING, APPOINTMENTS, INVOICES, ONLINE_STORE, PAYROLL, OTHER): Indicates the Square product used to process a transaction.

### UpdateCustomerRequest
* UpdateCustomerRequest `object`: Defines the body parameters that can be provided in a request to the
  * address [Address](#address)
  * company_name `string`: The name of the customer's company.
  * email_address `string`: The customer's email address.
  * family_name `string`: The customer's family (i.e., last) name.
  * given_name `string`: The customer's given (i.e., first) name.
  * nickname `string`: A nickname for the customer.
  * note `string`: An optional note to associate with the customer.
  * phone_number `string`: The customer's phone number.
  * reference_id `string`: An optional second ID you can set to associate the customer with an

### UpdateCustomerResponse
* UpdateCustomerResponse `object`: Defines the fields that are included in the response body of
  * customer [Customer](#customer)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### UpdateItemModifierListsRequest
* UpdateItemModifierListsRequest `object`
  * item_ids **required** `array`: The [CatalogItem](#type-catalogitem)s whose [CatalogModifierList](#type-catalogmodifierlist)s are being updated.
    * items `string`
  * modifier_lists_to_disable `array`: The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to disable for the [CatalogItem](#type-catalogitem).
    * items `string`
  * modifier_lists_to_enable `array`: The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to enable for the [CatalogItem](#type-catalogitem).
    * items `string`

### UpdateItemModifierListsResponse
* UpdateItemModifierListsResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * updated_at `string`: The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".

### UpdateItemTaxesRequest
* UpdateItemTaxesRequest `object`
  * item_ids **required** `array`: The [CatalogItem](#type-catalogitem)s whose enabled/disabled [CatalogTax](#type-catalogtax)es are being updated.
    * items `string`
  * taxes_to_disable `array`: The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to disable for the [CatalogItem](#type-catalogitem).
    * items `string`
  * taxes_to_enable `array`: The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to enable for the [CatalogItem](#type-catalogitem).
    * items `string`

### UpdateItemTaxesResponse
* UpdateItemTaxesResponse `object`
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * updated_at `string`: The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".

### UpsertCatalogObjectRequest
* UpsertCatalogObjectRequest `object`
  * idempotency_key **required** `string`: A value you specify that uniquely identifies this
  * object **required** [CatalogObject](#catalogobject)

### UpsertCatalogObjectResponse
* UpsertCatalogObjectResponse `object`
  * catalog_object [CatalogObject](#catalogobject)
  * errors `array`: The set of [Error](#type-error)s encountered.
    * items [Error](#error)
  * id_mappings `array`: The mapping between client and server IDs for this Upsert.
    * items [CatalogIdMapping](#catalogidmapping)

### VoidTransactionRequest
* VoidTransactionRequest `object`

### VoidTransactionResponse
* VoidTransactionResponse `object`: Defines the fields that are included in the response body of
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)

### v1AdjustInventoryRequest
* v1AdjustInventoryRequest `object`
  * adjustment_type `number` (values: SALE, RECEIVE_STOCK, MANUAL_ADJUST): The reason for the inventory adjustment.
  * memo `string`: A note about the inventory adjustment.
  * quantity_delta `number`: The number to adjust the variation's quantity by.

### v1BankAccount
* v1BankAccount `object`
  * account_number_suffix `string`: The last few digits of the bank account number.
  * bank_name `string`: The name of the bank that manages the account.
  * currency_code `string`: The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD.
  * id `string`: The bank account's Square-issued ID.
  * merchant_id `string`: The Square-issued ID of the merchant associated with the bank account.
  * name `string`: The name associated with the bank account.
  * routing_number `string`: The bank account's routing number.
  * type `string` (values: BUSINESS_CHECKING, CHECKING, INVESTMENT, LOAN, SAVINGS, OTHER): The bank account's type (for example, savings or checking).

### v1CashDrawerEvent
* v1CashDrawerEvent `object`
  * created_at `string`: The time when the event occurred, in ISO 8601 format.
  * description `string`: An optional description of the event, entered by the employee that created it.
  * employee_id `string`: The ID of the employee that created the event.
  * event_money [v1Money](#v1money)
  * event_type `string` (values: NO_SALE, CASH_TENDER_PAYMENT, OTHER_TENDER_PAYMENT, CASH_TENDER_CANCELED_PAYMENT, OTHER_TENDER_CANCELED_PAYMENT, CASH_TENDER_REFUND, OTHER_TENDER_REFUND, PAID_IN, PAID_OUT): The type of event that occurred.
  * id `string`: The event's unique ID.

### v1CashDrawerShift
* v1CashDrawerShift `object`
  * cash_paid_in_money [v1Money](#v1money)
  * cash_paid_out_money [v1Money](#v1money)
  * cash_payment_money [v1Money](#v1money)
  * cash_refunds_money [v1Money](#v1money)
  * closed_at `string`: The time when the shift was closed, in ISO 8601 format.
  * closed_cash_money [v1Money](#v1money)
  * closing_employee_id `string`: The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents.
  * description `string`: The time when the timecard was created, in ISO 8601 format.
  * device [Device](#device)
  * employee_ids `array`: The IDs of all employees that were logged into Square Register at some point during the cash drawer shift.
    * items `string`
  * ended_at `boolean`: The time when the shift ended, in ISO 8601 format.
  * ending_employee_id `string`: The ID of the employee that ended the cash drawer shift.
  * event_type `string` (values: OPEN, ENDED, CLOSED): The shift's current state.
  * events `array`: All of the events (payments, refunds, and so on) that involved the cash drawer during the shift.
    * items [v1CashDrawerEvent](#v1cashdrawerevent)
  * expected_cash_money [v1Money](#v1money)
  * id `string`: The shift's unique ID.
  * opened_at `string`: The time when the shift began, in ISO 8601 format.
  * opening_employee_id `string`: The ID of the employee that started the cash drawer shift.
  * starting_cash_money [v1Money](#v1money)

### v1Category
* v1Category `object`
  * id `string`: The category's unique ID.
  * name `string`: The category's name.

### v1CreateRefundRequest
* v1CreateRefundRequest `object`
  * payment_id **required** `string`: The ID of the payment to refund. If you're creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details.
  * reason **required** `string`: The reason for the refund.
  * refunded_money [v1Money](#v1money)
  * request_idempotence_key `string`: An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once.
  * type **required** `string` (values: FULL, PARTIAL): TThe type of refund (FULL or PARTIAL).

### v1Discount
* v1Discount `object`
  * amount_money [v1Money](#v1money)
  * color `string` (values: 9da2a6, 4ab200, 0b8000, 2952cc, a82ee5, e5457a, b21212, 593c00, e5BF00): The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6.
  * discount_type `string` (values: FIXED, VARIABLE_PERCENTAGE, VARIABLE_AMOUNT): Indicates whether the discount is a FIXED value or entered at the time of sale.
  * id `string`: The discount's unique ID.
  * name `string`: The discount's name.
  * pin_required `boolean`: Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment.
  * rate `string`: The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE.

### v1Employee
* v1Employee `object`: Represents one of a business's employees.
  * authorized_location_ids `array`: The IDs of the locations the employee is allowed to clock in at.
    * items `string`
  * created_at `string`: The time when the employee entity was created, in ISO 8601 format.
  * email `string`: The employee's email address.
  * external_id `string`: An ID the merchant can set to associate the employee with an entity in another system.
  * first_name **required** `string`: The employee's first name.
  * id `string`: The employee's unique ID.
  * last_name **required** `string`: The employee's last name.
  * role_ids `array`: The ids of the employee's associated roles. Currently, you can specify only one or zero roles per employee.
    * items `string`
  * status `string` (values: ACTIVE, INACTIVE): CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard. 
  * updated_at `string`: The time when the employee entity was most recently updated, in ISO 8601 format.

### v1EmployeeRole
* v1EmployeeRole `object`
  * created_at `string`: The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
  * id `string`: The role's unique ID, Can only be set by Square.
  * is_owner `boolean`: If true, employees with this role have all permissions, regardless of the values indicated in permissions.
  * name **required** `string`: The role's merchant-defined name.
  * permissions **required** `array`: The role's permissions.
    * items `string` (values: REGISTER_ACCESS_SALES_HISTORY, REGISTER_APPLY_RESTRICTED_DISCOUNTS, REGISTER_CHANGE_SETTINGS, REGISTER_EDIT_ITEM, REGISTER_ISSUE_REFUNDS, REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE, REGISTER_VIEW_SUMMARY_REPORTS)
  * updated_at `string`: The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated.

### v1Fee
* v1Fee `object`
  * adjustment_type `string` (values: TAX): The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees.
  * applies_to_custom_amounts `boolean`: If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item.
  * calculation_phase `string` (values: FEE_SUBTOTAL_PHASE, OTHER, FEE_TOTAL_PHASE): Forthcoming
  * enabled `boolean`: If true, the fee is applied to all appropriate items. If false, the fee is not applied at all.
  * id `string`: The fee's unique ID.
  * inclusion_type `string` (values: ADDITIVE, INCLUSIVE): Whether the fee is ADDITIVE or INCLUSIVE.
  * name `string`: The fee's name.
  * rate `string`: The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
  * type `string` (values: CA_GST, CA_HST, CA_PST, CA_QST, JP_CONSUMPTION_TAX, CA_PEI_PST, US_SALES_TAX, OTHER): In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants.

### v1InventoryEntry
* v1InventoryEntry `object`
  * quantity_on_hand `number`: The current available quantity of the item variation.
  * variation_id `string`: The variation that the entry corresponds to.

### v1Item
* v1Item `object`
  * abbreviation `string`: The text of the item's display label in Square Register. Only up to the first five characters of the string are used.
  * available_online `boolean`: If true, the item can be added to shipping orders from the merchant's online store.
  * category [v1Category](#v1category)
  * color `string` (values: 9da2a6, 4ab200, 0b8000, 2952cc, a82ee5, e5457a, b21212, 593c00, e5BF00): The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6.
  * description `string`: The item's description.
  * fees `array`: The fees that apply to the item, if any.
    * items [v1Fee](#v1fee)
  * id `string`: The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_).
  * master_image [v1ItemImage](#v1itemimage)
  * modifier_lists `array`: The modifier lists that apply to the item, if any.
    * items [v1Variation](#v1variation)
  * name `string`: The item's name.
  * taxable `boolean`: Deprecated. This field is not used.
  * type `string` (values: NORMAL, GIFT_CARD, OTHER): The item's type. This value is NORMAL for almost all items.
  * variations `array`: The item's variations. You must specify at least one variation.
    * items [v1Variation](#v1variation)
  * visibility `string` (values: PUBLIC, PRIVATE): Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE.

### v1ItemImage
* v1ItemImage `object`
  * id `string`: The image's unique ID.
  * url `string`: The image's publicly accessible URL.

### v1Merchant
* v1Merchant `object`: Defines the fields that are included in the response body of
  * account_capabilities `array`: Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array are not enabled for the account.
    * items `string`
  * account_type `string` (values: LOCATION, BUSINESS): Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION.
  * business_address [Address](#address)
  * business_name `string`: The name of the merchant's business.
  * business_phone [v1PhoneNumber](#v1phonenumber)
  * business_type `string` (values: ACCOUNTING, APPAREL_AND_ACCESSORY_SHOPS, ART_DEALERS_GALLERIES, ART_DESIGN_AND_PHOTOGRAPHY, BAR_CLUB_LOUNGE, BEAUTY_AND_BARBER_SHOPS, BOOK_STORES, BUSINESS_SERVICES, CATERING, CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS, CHARITIBLE_ORGS, CLEANING_SERVICES, COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES, CONSULTANT, CONTRACTORS, DELIVERY_SERVICES, DENTISTRY, EDUCATION, FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS, FOOD_TRUCK_CART, FURNITURE_HOME_AND_OFFICE_EQUIPMENT, FURNITURE_HOME_GOODS, HOTELS_AND_LODGING, INDIVIDUAL_USE, JEWELRY_AND_WATCHES, LANDSCAPING_AND_HORTICULTURAL_SERVICES, LANGUAGE_SCHOOLS, LEGAL_SERVICES, MEDICAL_PRACTITIONERS, MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS, MEMBERSHIP_ORGANIZATIONS, MUSIC_AND_ENTERTAINMENT, OTHER, OUTDOOR_MARKETS, PERSONAL_SERVICES, POLITICAL_ORGANIZATIONS, PROFESSIONAL_SERVICES, REAL_ESTATE, RECREATION_SERVICES, REPAIR_SHOPS_AND_RELATED_SERVICES, RESTAURANTS, RETAIL_SHOPS, SCHOOLS_AND_EDUCATIONAL_SERVICES, SPORTING_GOODS, TAXICABS_AND_LIMOUSINES, TICKET_SALES, TOURISM, TRAVEL_TOURISM, VETERINARY_SERVICES, WEB_DEV_DESIGN): The type of business operated by the merchant.
  * country_code `string`: The country associated with the merchant account, in ISO 3166-1-alpha-2 format.
  * currency_code `string`: The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD.
  * email `string`: The email address associated with the merchant account.
  * id `string`: The merchant account's unique identifier.
  * language_code `string`: The language associated with the merchant account, in BCP 47 format.
  * location_details `object`: Additional information for a single-location account specified by its associated business account, if it has one.
    * nickname `string`: The nickname assigned to the single-location account by the parent business. This value appears in the parent business's multi-location dashboard.
  * market_url `string`: The URL of the merchant's online store.
  * name `string`: The name associated with the merchant account.
  * shipping_address  [Address](#address)

### v1ModifierList
* v1ModifierList `object`
  * id `string`: The modifier list's unique ID.
  * modifier_options `array`: The options included in the modifier list.
    * items [v1ModifierOption](#v1modifieroption)
  * name `string`: The modifier list's name.
  * selection_type `string` (values: SINGLE, MULTIPLE): Indicates whether MULTIPLE options or a SINGLE option from the modifier list can be applied to a single item.

### v1ModifierOption
* v1ModifierOption `object`
  * id `string`: The modifier option's unique ID.
  * modifier_list_id `string`: The ID of the modifier list the option belongs to.
  * name `string`: The modifier option's name.
  * on_by_default `boolean`: If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE.
  * ordinal `integer`: Indicates the modifier option's list position when displayed in Square Register and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order.
  * price_money [v1Money](#v1money)

### v1Money
* v1Money `object`
  * amount `integer`: Amount in the lowest denominated value of this Currency. E.g. in USD
  * currency_code `string` (values: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, USN, USS, UYI, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XOF, XPD, XPF, XPT, XTS, XXX, YER, ZAR, ZMK, ZMW, BTC)

### v1Order
* v1Order `object`
  * btc_price_satoshi `number`: For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC).
  * btc_receive_address `string`: For Bitcoin transactions, the address that the buyer sent Bitcoin to.
  * buyer_email `string`: The email address of the order's buyer.
  * buyer_note `string`: A note provided by the buyer when the order was created, if any.
  * canceled_note `string`: A note provided by the merchant when the order's state was set to CANCELED, if any.
  * completed_note `string`: A note provided by the merchant when the order's state was set to COMPLETED, if any
  * created_at `string`: The time when the order was created, in ISO 8601 format.
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * expires_at `string`: The time when the order expires if no action is taken, in ISO 8601 format.
  * id `string`: The order's unique identifier.
  * order_history `array`: The history of actions associated with the order.
    * items [v1OrderHistoryEntry](#v1orderhistoryentry)
  * payment_id `string`: The unique identifier of the payment associated with the order.
  * promo_code `string`: The promo code provided by the buyer, if any.
  * recipient_name `string`: The name of the order's buyer.
  * recipient_phone_number `string`: The phone number to use for the order's delivery.
  * refunded_note `string`: A note provided by the merchant when the order's state was set to REFUNDED, if any.
  * shipping_address [Address](#address)
  * state `string` (values: PENDING, OPEN, COMPLETED, CANCELED, REFUNDED, REJECTED): Whether the tax is an ADDITIVE tax or an INCLUSIVE tax.
  * subtotal_money [v1Money](#v1money)
  * tender [v1Tender](#v1tender)
  * total_discount_money [v1Money](#v1money)
  * total_price_money [v1Money](#v1money)
  * total_shipping_money [v1Money](#v1money)
  * total_tax_money [v1Money](#v1money)
  * updated_at `string`: The time when the order was last modified, in ISO 8601 format.

### v1OrderHistoryEntry
* v1OrderHistoryEntry `object`
  * action `string` (values: ORDER_PLACED, DECLINED, PAYMENT_RECEIVED, CANCELED, COMPLETED, REFUNDED, EXPIRED): The type of action performed on the order.
  * created_at `string`: The time when the action was performed, in ISO 8601 format.

### v1Page
* v1Page `object`
  * cells `array`: The cells included on the page.
    * items [v1PageCell](#v1pagecell)
  * id `string`: The page's unique identifier.
  * name `string`: The page's name, if any.
  * page_index `integer`: The page's position in the merchant's list of pages. Always an integer between 0 and 4, inclusive.

### v1PageCell
* v1PageCell `object`
  * column `integer`: The column of the cell. Always an integer between 0 and 4, inclusive.
  * object_id `string`: The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER.
  * object_type `array`: The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER).
    * items `string` (values: ITEM, DISCOUNT, CATEGORY, PLACEHOLDER)
  * page_id `string`: The unique identifier of the page the cell is included on.
  * placeholder_type `array`: For a cell with an object_type of PLACEHOLDER, this value indicates the cell's special behavior.
    * items `string` (values: ALL_ITEMS, DISCOUNTS_CATEGORY, REWARDS_FINDER)
  * row `integer`: The row of the cell. Always an integer between 0 and 4, inclusive.

### v1Payment
* v1Payment `object`
  * additive_tax `array`: All of the additive taxes associated with the payment.
    * items [v1PaymentTax](#v1paymenttax)
  * additive_tax_money [v1Money](#v1money)
  * created_at `string`: The time when the payment was created, in ISO 8601 format.
  * creator_id `string`: The unique identifier of the Square account that took the payment.
  * device [Device](#device)
  * discount_money [v1Money](#v1money)
  * gross_sales_money [v1Money](#v1money)
  * id `string`: The payment's unique identifier.
  * inclusive_tax `array`: All of the inclusive taxes associated with the payment.
    * items [v1PaymentTax](#v1paymenttax)
  * inclusive_tax_money [v1Money](#v1money)
  * itemizations `array`: The items purchased in the payment.
    * items [v1PaymentItemization](#v1paymentitemization)
  * merchant_id `string`: The unique identifier of the merchant that took the payment.
  * net_sales_money [v1Money](#v1money)
  * net_total_money [v1Money](#v1money)
  * payment_url `string`: The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page.
  * processing_fee_money [v1Money](#v1money)
  * receipt_url `string`: The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment's tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment.
  * refunded_money [v1Money](#v1money)
  * refunds `array`: All of the refunds applied to the payment.
    * items [v1Refund](#v1refund)
  * swedish_rounding_money [v1Money](#v1money)
  * tax_money [v1Money](#v1money)
  * tender `array`: All of the additive taxes associated with the payment.
    * items [v1Tender](#v1tender)
  * tip_money [v1Money](#v1money)
  * total_collected_money [v1Money](#v1money)

### v1PaymentDiscount
* v1PaymentDiscount `object`
  * applied_money [v1Money](#v1money)
  * discount_id `string`: The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID.
  * name `string`: The discount's name.

### v1PaymentItemDetail
* v1PaymentItemDetail `object`
  * category_name `string`: The name of the item's merchant-defined category, if any.
  * item_id `string`: The unique ID of the item purchased, if any.
  * item_variation_id `string`: The unique ID of the item variation purchased, if any.
  * sku `string`:  The item's merchant-defined SKU, if any.

### v1PaymentItemization
* v1PaymentItemization `object`
  * discount_money [v1Money](#v1money)
  * discounts `array`: All discounts applied to this itemization.
    * items [v1PaymentDiscount](#v1paymentdiscount)
  * gross_sales_money [v1Money](#v1money)
  * item_detail [v1PaymentItemDetail](#v1paymentitemdetail)
  * item_variation_name `string`: The name of the item variation purchased, if any.
  * itemization_type `string` (values: ITEM, CUSTOM_AMOUNT, GIFT_CARD_ACTIVATION, GIFT_CARD_RELOAD, GIFT_CARD_UNKNOWN, OTHER): The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT
  * modifiers `array`: All modifier options applied to this itemization.
    * items [v1PaymentModifier](#v1paymentmodifier)
  * name `string`: The item's name.
  * net_sales_money [v1Money](#v1money)
  * notes `string`: Notes entered by the merchant about the item at the time of payment, if any.
  * quantity `number`: The quantity of the item purchased. This can be a decimal value.
  * single_quantity_money [v1Money](#v1money)
  * taxes `array`: All taxes applied to this itemization.
    * items [v1PaymentTax](#v1paymenttax)
  * total_money [v1Money](#v1money)

### v1PaymentModifier
* v1PaymentModifier `object`
  * applied_money [v1Money](#v1money)
  * modifier_option_id `string`: TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID.
  * name `string`: The modifier option's name.

### v1PaymentTax
* v1PaymentTax `object`
  * applied_money [v1Money](#v1money)
  * errors `array`: Any errors that occurred during the request.
    * items [Error](#error)
  * fee_id `string`: The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
  * inclusion_type `string` (values: ADDITIVE, INCLUSIVE): Whether the tax is an ADDITIVE tax or an INCLUSIVE tax.
  * name `string`: The merchant-defined name of the tax.
  * rate `string`: The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.

### v1PhoneNumber
* v1PhoneNumber `object`: Represents a phone number.
  * calling_code **required** `string`: The phone number's international calling code. For US phone numbers, this value is +1.
  * number **required** `string`: The phone number.

### v1Refund
* v1Refund `object`
  * created_at `string`: The time when the merchant initiated the refund for Square to process, in ISO 8601 format..
  * merchant_id `string`
  * payment_id `string`: The Square-issued ID of the payment the refund is applied to.
  * processed_at `string`: The time when Square processed the refund on behalf of the merchant, in ISO 8601 format.
  * reason `string`: The merchant-specified reason for the refund.
  * refunded_additive_tax_money [v1Money](#v1money)
  * refunded_discount_money [v1Money](#v1money)
  * refunded_inclusive_tax_money [v1Money](#v1money)
  * refunded_money [v1Money](#v1money)
  * refunded_processing_fee_money [v1Money](#v1money)
  * refunded_tip_money [v1Money](#v1money)
  * type `string` (values: FULL, PARTIAL): The type of refund 

### v1Settlement
* v1Settlement `object`
  * bank_account_id `string`: The Square-issued unique identifier for the bank account associated with the settlement.
  * entries `array`: The entries included in this settlement.
    * items [v1SettlementEntry](#v1settlemententry)
  * id `string`: The settlement's unique identifier.
  * initiated_at `string`: The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format.
  * status `string` (values: FAILED, SENT): The settlement's current status.
  * total_money [v1Money](#v1money)

### v1SettlementEntry
* v1SettlementEntry `object`
  * amount_money [v1Money](#v1money)
  * fee_money [v1Money](#v1money)
  * payment_id `string`: The settlement's unique identifier.
  * type `string` (values: ADJUSTMENT, BALANCE_CHARGE, CHARGE, FREE_PROCESSING, HOLD_ADJUSTMENT, PAID_SERVICE_FEE, PAID_SERVICE_FEE_REFUND, REDEMPTION_CODE, REFUND, RETURNED_PAYOUT, SQUARE_CAPITAL_ADVANCE, SQUARE_CAPITAL_PAYMENT, SQUARE_CAPITAL_REVERSED_PAYMENT, SUBSCRIPTION_FEE, SUBSCRIPTION_FEE_REFUND, INCENTED_PAYMENT, RETURNED_ACH_ENTRY, RETURNED_SQUARE_275, SQUARE_275): The settlement's current status.

### v1Tender
* v1Tender `object`
  * card_brand `string` (values: OTHER_BRAND, VISA, MASTER_CARD, AMERICAN_EXPRESS, DISCOVER, DISCOVER_DINERS, JCB, CHINA_UNIONPAY, SQUARE_GIFT_CARD): The brand of credit card provided.
  * change_back_money [v1Money](#v1money)
  * employee_id `string`: The ID of the employee that processed the tender.
  * entry_method `string` (values: MANUAL, SCANNED, SQUARE_CASH, SQUARE_WALLET, SWIPED, WEB_FORM, OTHER): The tender's unique ID.
  * id `string`: The tender's unique ID.
  * name `string`: A human-readable description of the tender.
  * pan_suffix `string`: The last four digits of the provided credit card's account number.
  * payment_note `string`: Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER.
  * receipt_url `string`: The URL of the receipt for the tender.
  * refunded_money [v1Money](#v1money)
  * tendered_money [v1Money](#v1money)
  * total_money [v1Money](#v1money)
  * type `string` (values: CREDIT_CARD, CASH, THIRD_PARTY_CARD, NO_SALE, SQUARE_WALLET, SQUARE_GIFT_CARD, UNKNOWN, OTHER): The type of tender.

### v1Timecard
* v1Timecard `object`: Represents a timecard for an employee.
  * clockin_location_id `string`: The ID of the location the employee clocked in from, if any.
  * clockin_time `string`: The clock-in time for the timecard, in ISO 8601 format.
  * clockout_location_id `string`: The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system.
  * clockout_time `string`: The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system.
  * created_at `string`: The time when the timecard was created, in ISO 8601 format.
  * deleted `boolean`: If true, the timecard was deleted by the merchant, and it is no longer valid.
  * employee_id **required** `string`: The ID of the employee the timecard is associated with.
  * id `string`: The timecard's unique ID.
  * updated_at `string`: The time when the timecard was most recently updated, in ISO 8601 format.

### v1TimecardEvent
* v1TimecardEvent `object`
  * clockin_time `string`: The time the employee clocked in, in ISO 8601 format.
  * clockout_time `string`: The time the employee clocked out, in ISO 8601 format.
  * created_at `string`: The time when the event was created, in ISO 8601 format.
  * event_type `string` (values: API_CREATE, API_EDIT, API_DELETE, REGISTER_CLOCKIN, REGISTER_CLOCKOUT, DASHBOARD_SUPERVISOR_CLOSE, DASHBOARD_EDIT, DASHBOARD_DELETE): The ID of the timecard to list events for.
  * id `string`: The event's unique ID.

### v1UpdateModifierListRequest
* v1UpdateModifierListRequest `object`
  * name `string`: The modifier list's name.
  * selection_type `string` (values: SINGLE, MULTIPLE): Indicates whether multiple options from the modifier list can be applied to a single item.

### v1UpdateOrderRequest
* v1UpdateOrderRequest `object`
  * action **required** `string` (values: COMPLETE, CANCEL, REFUND): The action to perform on the order (COMPLETE, CANCEL, or REFUND).
  * canceled_note `string`: A merchant-specified note about the canceling of the order. Only valid if action is CANCEL.
  * completed_note `string`: A merchant-specified note about the completion of the order. Only valid if action is COMPLETE.
  * refunded_note `string`: A merchant-specified note about the refunding of the order. Only valid if action is REFUND.
  * shipped_tracking_number `string`: The tracking number of the shipment associated with the order. Only valid if action is COMPLETE.

### v1Variation
* v1Variation `object`
  * id `string`: The item variation's unique ID.
  * inventory_alert_threshold `integer`: If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard.
  * inventory_alert_type `string` (values: LOW_QUANTITY, NONE, INVESTMENT, LOAN, SAVINGS, OTHER): Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its inventory_alert_threshold.
  * item_id `string`: The ID of the variation's associated item.
  * name `string`: The item variation's name.
  * ordinal `integer`: Indicates the variation's list position when displayed in Square Register and the merchant dashboard. If more than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical order
  * price_money [v1Money](#v1money)
  * pricing_type `string` (values: FIXED_PRICING, VARIABLE_PRICING): Indicates whether the item variation's price is fixed or determined at the time of sale.
  * sku `string`: The item variation's SKU, if any.
  * track_inventory `boolean`: If true, inventory tracking is active for the variation.
  * user_data `string`: Arbitrary metadata associated with the variation. Cannot exceed 255 characters.


