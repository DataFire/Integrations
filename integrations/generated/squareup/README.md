# @datafire/squareup

Client library for Square Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/squareup
```

```js
let datafire = require('datafire');
let squareup = require('@datafire/squareup').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

squareup.ListCustomers({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
squareup.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### RetrieveBusiness
Get a business's information.


```js
squareup.RetrieveBusiness(null, context)
```

#### Parameters
*This action has no parameters*

### ListEmployees
Provides summary information for all of a business's employees.


```js
squareup.ListEmployees({}, context)
```

#### Parameters
* order (string) - The order in which employees are listed in the response, based on their created_at field.      Default value: ASC 
* begin_updated_at (string) - If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
* end_updated_at (string) - If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
* begin_created_at (string) - If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
* end_created_at (string) - If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
* status (string) - If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
* external_id (string) - If provided, the endpoint returns only employee entities with the specified external_id.
* limit (integer) - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

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

#### Parameters
* body (object) **required** - Represents one of a business's employees.

### RetrieveEmployee
Provides the details for a single employee.


```js
squareup.RetrieveEmployee({
  "employee_id": ""
}, context)
```

#### Parameters
* employee_id (string) **required** - The employee's ID.

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

#### Parameters
* employee_id (string) **required** - The ID of the role to modify.
* body (object) **required** - Represents one of a business's employees.

### v1.me.locations.get
Provides details for a business's locations, including their IDs.


```js
squareup.v1.me.locations.get(null, context)
```

#### Parameters
*This action has no parameters*

### ListEmployeeRoles
Provides summary information for all of a business's employee roles.


```js
squareup.ListEmployeeRoles({}, context)
```

#### Parameters
* order (string) - The order in which employees are listed in the response, based on their created_at field.Default value: ASC 
* limit (integer) - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

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

#### Parameters
* EmployeeRole (object) **required**

### RetrieveEmployeeRole
Provides the details for a single employee role.


```js
squareup.RetrieveEmployeeRole({
  "role_id": ""
}, context)
```

#### Parameters
* role_id (string) **required** - The role's ID.

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

#### Parameters
* role_id (string) **required** - The ID of the role to modify.
* body (object) **required**

### ListTimecards
Provides summary information for all of a business's employee timecards.


```js
squareup.ListTimecards({}, context)
```

#### Parameters
* order (string) - The order in which timecards are listed in the response, based on their created_at field.
* employee_id (string) - If provided, the endpoint returns only timecards for the employee with the specified ID.
* begin_clockin_time (string) - If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
* end_clockin_time (string) - If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
* begin_clockout_time (string) - If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
* end_clockout_time (string) - If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
* begin_updated_at (string) - If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
* end_updated_at (string) - If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
* deleted (boolean) - If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned.
* limit (integer) - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### CreateTimecard
Creates a timecard for an employee. Each timecard corresponds to a single shift.


```js
squareup.CreateTimecard({
  "body": {
    "employee_id": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Represents a timecard for an employee.

### DeleteTimecard
Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.


```js
squareup.DeleteTimecard({
  "timecard_id": ""
}, context)
```

#### Parameters
* timecard_id (string) **required** - The ID of the timecard to delete.

### RetrieveTimecard
Provides the details for a single timecard.


```js
squareup.RetrieveTimecard({
  "timecard_id": ""
}, context)
```

#### Parameters
* timecard_id (string) **required** - The timecard's ID.

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

#### Parameters
* timecard_id (string) **required** - TThe ID of the timecard to modify.
* body (object) **required** - Represents a timecard for an employee.

### ListTimecardEvents
Provides summary information for all events associated with a particular timecard.


```js
squareup.ListTimecardEvents({
  "timecard_id": ""
}, context)
```

#### Parameters
* timecard_id (string) **required** - The ID of the timecard to list events for.

### ListBankAccounts
Provides non-confidential details for all of a location's associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.


```js
squareup.ListBankAccounts({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list bank accounts for.

### RetrieveBankAccount
Provides non-confidential details for a merchant's associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.


```js
squareup.RetrieveBankAccount({
  "location_id": "",
  "bank_account_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the bank account's associated location.
* bank_account_id (string) **required** - The bank account's Square-issued ID. You obtain this value from Settlement objects returned.

### ListCashDrawerShifts
Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.


```js
squareup.ListCashDrawerShifts({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list cash drawer shifts for.
* order (string) - The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC
* begin_time (string) - The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
* end_time (string) - The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.

### RetrieveCashDrawerShift
Provides the details for a single cash drawer shift, including all events that occurred during the shift.


```js
squareup.RetrieveCashDrawerShift({
  "location_id": "",
  "shift_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list cash drawer shifts for.
* shift_id (string) **required** - The shift's ID.

### ListCategories
Lists all of a location's item categories.


```js
squareup.ListCategories({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list categories for.

### CreateCategory
Creates an item category.


```js
squareup.CreateCategory({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create an item for.
* body (object) **required**

### DeleteCategory
Deletes an existing item category.


```js
squareup.DeleteCategory({
  "location_id": "",
  "category_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* category_id (string) **required** - The ID of the category to delete.

### UpdateCategory
Modifies the details of an existing item category.


```js
squareup.UpdateCategory({
  "location_id": "",
  "category_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the category's associated location.
* category_id (string) **required** - The ID of the category to edit.
* body (object) **required**

### ListDiscounts
Lists all of a location's discounts.


```js
squareup.ListDiscounts({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list categories for.

### CreateDiscount
Creates a discount.


```js
squareup.CreateDiscount({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create an item for.
* body (object) **required**

### DeleteDiscount
Deletes an existing discount.


```js
squareup.DeleteDiscount({
  "location_id": "",
  "discount_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* discount_id (string) **required** - The ID of the discount to delete.

### UpdateDiscount
Modifies the details of an existing discount.


```js
squareup.UpdateDiscount({
  "location_id": "",
  "discount_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the category's associated location.
* discount_id (string) **required** - The ID of the discount to edit.
* body (object) **required**

### ListFees
Lists all of a location's fees (taxes).


```js
squareup.ListFees({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list fees for.

### CreateFee
Creates a fee (tax).


```js
squareup.CreateFee({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create a fee for.
* body (object) **required**

### DeleteFee
Deletes an existing fee (tax).


```js
squareup.DeleteFee({
  "location_id": "",
  "fee_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the fee's associated location.
* fee_id (string) **required** - The ID of the fee to delete.

### UpdateFee
Modifies the details of an existing fee (tax).


```js
squareup.UpdateFee({
  "location_id": "",
  "fee_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the fee's associated location.
* fee_id (string) **required** - The ID of the fee to edit.
* body (object) **required**

### ListInventory
Provides inventory information for all of a merchant's inventory-enabled item variations.


```js
squareup.ListInventory({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* limit (integer) - The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### AdjustInventory
Adjusts an item variation's current available inventory.


```js
squareup.AdjustInventory({
  "location_id": "",
  "variation_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* variation_id (string) **required** - The ID of the variation to adjust inventory information for.
* body (object) **required**

### ListItems
Provides summary information for all of a location's items.


```js
squareup.ListItems({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list items for.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### CreateItem
Creates an item and at least one variation for it.


```js
squareup.CreateItem({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create an item for.
* body (object) **required**

### DeleteItem
Deletes an existing item and all item variations associated with it.


```js
squareup.DeleteItem({
  "location_id": "",
  "item_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The ID of the item to modify.

### RetrieveItem
Provides the details for a single item, including associated modifier lists and fees.


```js
squareup.RetrieveItem({
  "location_id": "",
  "item_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The item's ID.

### UpdateItem
Modifies the core details of an existing item.


```js
squareup.UpdateItem({
  "location_id": "",
  "item_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The ID of the item to modify.
* body (object) **required**

### RemoveFee
Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.


```js
squareup.RemoveFee({
  "location_id": "",
  "item_id": "",
  "fee_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the fee's associated location.
* item_id (string) **required** - The ID of the item to add the fee to.
* fee_id (string) **required** - The ID of the fee to apply.

### ApplyFee
Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.


```js
squareup.ApplyFee({
  "location_id": "",
  "item_id": "",
  "fee_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the fee's associated location.
* item_id (string) **required** - The ID of the item to add the fee to.
* fee_id (string) **required** - The ID of the fee to apply.

### RemoveModifierList
Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.


```js
squareup.RemoveModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "item_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to remove.
* item_id (string) **required** - The ID of the item to remove the modifier list from.

### ApplyModifierList
Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.


```js
squareup.ApplyModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "item_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to apply.
* item_id (string) **required** - The ID of the item to add the modifier list to.

### CreateVariation
Creates an item variation for an existing item.


```js
squareup.CreateVariation({
  "location_id": "",
  "item_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The item's ID.
* body (object) **required**

### DeleteVariation
Deletes an existing item variation from an item.


```js
squareup.DeleteVariation({
  "location_id": "",
  "item_id": "",
  "variation_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The ID of the item to delete.
* variation_id (string) **required** - The ID of the variation to delete.

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

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* item_id (string) **required** - The ID of the item to modify.
* variation_id (string) **required** - The ID of the variation to modify.
* body (object) **required**

### ListModifierLists
Lists all of a location's modifier lists.


```js
squareup.ListModifierLists({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list modifier lists for.

### CreateModifierList
Creates an item modifier list and at least one modifier option for it.


```js
squareup.CreateModifierList({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create a modifier list for.
* body (object) **required**

### DeleteModifierList
Deletes an existing item modifier list and all modifier options associated with it.


```js
squareup.DeleteModifierList({
  "location_id": "",
  "modifier_list_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to delete.

### RetrieveModifierList
Provides the details for a single modifier list.


```js
squareup.RetrieveModifierList({
  "location_id": "",
  "modifier_list_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The modifier list's ID.

### UpdateModifierList
Modifies the details of an existing item modifier list.


```js
squareup.UpdateModifierList({
  "location_id": "",
  "modifier_list_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to edit.
* body (object) **required**

### CreateModifierOption
Creates an item modifier option and adds it to a modifier list.


```js
squareup.CreateModifierOption({
  "location_id": "",
  "modifier_list_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to edit.
* body (object) **required**

### DeleteModifierOption
Deletes an existing item modifier option from a modifier list.


```js
squareup.DeleteModifierOption({
  "location_id": "",
  "modifier_list_id": "",
  "modifier_option_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to delete.
* modifier_option_id (string) **required** - The ID of the modifier list to edit.

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

#### Parameters
* location_id (string) **required** - The ID of the item's associated location.
* modifier_list_id (string) **required** - The ID of the modifier list to edit.
* modifier_option_id (string) **required** - The ID of the modifier list to edit.
* body (object) **required**

### ListOrders
Provides summary information for a merchant's online store orders.


```js
squareup.ListOrders({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list online store orders for.
* order (string) - TThe order in which payments are listed in the response.
* limit (integer) - The maximum number of payments to return in a single response. This value cannot exceed 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### RetrieveOrder
Provides comprehensive information for a single online store order, including the order's history.


```js
squareup.RetrieveOrder({
  "location_id": "",
  "order_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the order's associated location.
* order_id (string) **required** - The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

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

#### Parameters
* location_id (string) **required** - The ID of the order's associated location.
* order_id (string) **required** - The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
* body (object) **required**

### ListPages
Lists all of a location's Favorites pages in Square Register.


```js
squareup.ListPages({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list Favorites pages for.

### CreatePage
Creates a Favorites page in Square Register.


```js
squareup.CreatePage({
  "location_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to create an item for.
* body (object) **required**

### DeletePage
Deletes an existing Favorites page and all of its cells.


```js
squareup.DeletePage({
  "location_id": "",
  "page_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the Favorites page's associated location.
* page_id (string) **required** - The ID of the page to delete.

### UpdatePage
Modifies the details of a Favorites page in Square Register.


```js
squareup.UpdatePage({
  "location_id": "",
  "page_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the Favorites page's associated location
* page_id (string) **required** - The ID of the page to modify.
* body (object) **required**

### DeletePageCell
Deletes a cell from a Favorites page in Square Register.


```js
squareup.DeletePageCell({
  "location_id": "",
  "page_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the Favorites page's associated location.
* page_id (string) **required** - The ID of the page to delete.
* row (string) - The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
* column (string) - The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.

### UpdatePageCell
Modifies a cell of a Favorites page in Square Register.


```js
squareup.UpdatePageCell({
  "location_id": "",
  "page_id": "",
  "body": {}
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the Favorites page's associated location.
* page_id (string) **required** - The ID of the page the cell belongs to.
* body (object) **required**

### ListPayments
Provides summary information for all payments taken by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.


```js
squareup.ListPayments({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
* order (string) - The order in which payments are listed in the response.
* begin_time (string) - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* end_time (string) - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* limit (integer) - The maximum number of payments to return in a single response. This value cannot exceed 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### RetrievePayment
Provides comprehensive information for a single payment.


```js
squareup.RetrievePayment({
  "location_id": "",
  "payment_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the payment's associated location.
* payment_id (string) **required** - The payment's Square-issued ID. You obtain this value from Payment objects returned by the List Payments endpoint, or Settlement objects returned by the List Settlements endpoint.

### v1.location_id.refunds.get
Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.


```js
squareup.v1.location_id.refunds.get({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list refunds for.
* order (string) - TThe order in which payments are listed in the response.
* begin_time (string) - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* end_time (string) - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* limit (integer) - The maximum number of payments to return in a single response. This value cannot exceed 200.
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

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

#### Parameters
* location_id (string) **required** - The ID of the original payment's associated location.
* body (object) **required**

### ListSettlements
Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length. 


```js
squareup.ListSettlements({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
* order (string) - TThe order in which payments are listed in the response.
* begin_time (string) - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* end_time (string) - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* limit (integer) - The maximum number of payments to return in a single response. This value cannot exceed 200.
* status (string) - Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
* batch_token (string) - A pagination cursor to retrieve the next set of results for your

### RetrieveSettlement
Provides comprehensive information for a single settlement, including the entries that contribute to the settlement's total.


```js
squareup.RetrieveSettlement({
  "location_id": "",
  "settlement_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the settlements's associated location.
* settlement_id (string) **required** - The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.

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

#### Parameters
* body (object) **required**

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

#### Parameters
* body (object) **required**

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

#### Parameters
* body (object) **required**

### CatalogInfo
Returns information about the Square Catalog API, such as batch size
limits for `BatchUpsertCatalogObjects`.


```js
squareup.CatalogInfo(null, context)
```

#### Parameters
*This action has no parameters*

### ListCatalog
Returns a list of [CatalogObject](#type-catalogobject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)
and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter
is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.


```js
squareup.ListCatalog({}, context)
```

#### Parameters
* cursor (string) - The pagination cursor returned in the previous response. Leave unset for an initial request.
* types (string) - An optional case-insensitive, comma-separated list of object types to retrieve, for example

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

#### Parameters
* body (object) **required**

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

#### Parameters
* object_id (string) **required** - The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other

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

#### Parameters
* object_id (string) **required** - The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
* include_related_objects (boolean) - If `true`, the response will include additional objects that are related to the

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

#### Parameters
* body (object) **required**

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

#### Parameters
* body (object) **required**

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

#### Parameters
* body (object) **required**

### ListCustomers
Lists a business's customers.


```js
squareup.ListCustomers({}, context)
```

#### Parameters
* cursor (string) - A pagination cursor returned by a previous call to this endpoint.

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

#### Parameters
* body (object) **required** - Defines the body parameters that can be provided in a request to the

### DeleteCustomer
Deletes a customer from a business, along with any linked cards on file.


```js
squareup.DeleteCustomer({
  "customer_id": ""
}, context)
```

#### Parameters
* customer_id (string) **required** - The ID of the customer to delete.

### RetrieveCustomer
Returns details for a single customer.


```js
squareup.RetrieveCustomer({
  "customer_id": ""
}, context)
```

#### Parameters
* customer_id (string) **required** - The ID of the customer to retrieve.

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

#### Parameters
* customer_id (string) **required** - The ID of the customer to update.
* body (object) **required** - Defines the body parameters that can be provided in a request to the

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

#### Parameters
* customer_id (string) **required** - The ID of the customer to link the card on file to.
* body (object) **required** - Defines the fields that are included in the request body of a request

### DeleteCustomerCard
Removes a card on file from a customer.


```js
squareup.DeleteCustomerCard({
  "customer_id": "",
  "card_id": ""
}, context)
```

#### Parameters
* customer_id (string) **required** - The ID of the customer that the card on file belongs to.
* card_id (string) **required** - The ID of the card on file to delete.

### v2.locations.get
Provides the details for all of a business's locations.

Most other Connect API endpoints have a required `location_id` path parameter.
The `id` field of the [`Location`](#type-location) objects returned by this
endpoint correspond to that `location_id` parameter.


```js
squareup.v2.locations.get(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* location_id (string) **required** - The ID of the business location to associate the checkout with.
* body (object) **required** - Defines the parameters that can be included in the body of

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

#### Parameters
* location_id (string) **required** - The ID of the location to list refunds for.
* begin_time (string) - The beginning of the requested reporting period, in RFC 3339 format.
* end_time (string) - The end of the requested reporting period, in RFC 3339 format.
* sort_order (string) - The order in which results are listed in the response (`ASC` for
* cursor (string) - A pagination cursor returned by a previous call to this endpoint.

### ListTransactions
Lists transactions for a particular location.

Max results per [page](#paginatingresults): 50


```js
squareup.ListTransactions({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the location to list transactions for.
* begin_time (string) - The beginning of the requested reporting period, in RFC 3339 format.
* end_time (string) - The end of the requested reporting period, in RFC 3339 format.
* sort_order (string) - The order in which results are listed in the response (`ASC` for
* cursor (string) - A pagination cursor returned by a previous call to this endpoint.

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

#### Parameters
* location_id (string) **required** - The ID of the location to associate the created transaction with.
* body (object) **required** - Defines the parameters that can be included in the body of

### RetrieveTransaction
Retrieves details for a single transaction.


```js
squareup.RetrieveTransaction({
  "location_id": "",
  "transaction_id": ""
}, context)
```

#### Parameters
* location_id (string) **required** - The ID of the transaction's associated location.
* transaction_id (string) **required** - The ID of the transaction to retrieve.

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

#### Parameters
* location_id (string) **required**
* transaction_id (string) **required**

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

#### Parameters
* location_id (string) **required** - The ID of the original transaction's associated location.
* transaction_id (string) **required** - The ID of the original transaction that includes the tender to refund.
* body (object) **required** - Defines the body parameters that can be included in

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

#### Parameters
* location_id (string) **required**
* transaction_id (string) **required**

