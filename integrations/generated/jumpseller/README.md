# @datafire/jumpseller

Client library for Jumpseller API

## Installation and Usage
```bash
npm install --save @datafire/jumpseller
```
```js
let jumpseller = require('@datafire/jumpseller').create();

jumpseller.apps.json.get({
  "login": "",
  "authtoken": ""
}).then(data => {
  console.log(data);
});
```

## Description

Explore all our endpoints with your own set of of access tokens. All changes affect your production Jumpseller store.

## Actions

### apps.json.get
Retrieve all Jumpseller Apps.


```js
jumpseller.apps.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output [App](#app)

### categories.json.get
Retrieve all Categories.


```js
jumpseller.categories.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output [Category](#category)

### categories.json.post
Category's permalink is automatically generated from the given category's name.


```js
jumpseller.categories.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [Category](#category)

#### Output
* output [CategoryEdit](#categoryedit)

### categories.id.json.delete
Delete an existing Category.


```js
jumpseller.categories.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Category

#### Output
* output `string`

### categories.id.json.get
Retrieve a single Category.


```js
jumpseller.categories.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Category

#### Output
* output [Category](#category)

### categories.id.json.put
Modify an existing Category.


```js
jumpseller.categories.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Category
  * body **required** [CategoryEdit](#categoryedit)

#### Output
* output [Category](#category)

### checkout_custom_fields.json.get
Retrieve all Checkout Custom Fields.


```js
jumpseller.checkout_custom_fields.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [CheckoutCustomField](#checkoutcustomfield)

### checkout_custom_fields.json.post
Create a new CheckoutCustomField.


```js
jumpseller.checkout_custom_fields.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [CheckoutCustomFieldEdit](#checkoutcustomfieldedit)

#### Output
* output `array`
  * items [CheckoutCustomField](#checkoutcustomfield)

### checkout_custom_fields.id.json.delete
Delete an existing CheckoutCustomField.


```js
jumpseller.checkout_custom_fields.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CheckoutCustomField

#### Output
* output `string`

### checkout_custom_fields.id.json.get
Retrieve a single CheckoutCustomField.


```js
jumpseller.checkout_custom_fields.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CheckoutCustomField

#### Output
* output [CheckoutCustomField](#checkoutcustomfield)

### checkout_custom_fields.id.json.put
Update a CheckoutCustomField.


```js
jumpseller.checkout_custom_fields.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CheckoutCustomField
  * body **required** [CheckoutCustomFieldEdit](#checkoutcustomfieldedit)

#### Output
* output `array`
  * items [CheckoutCustomField](#checkoutcustomfield)

### countries.json.get
Retrieve all Countries.


```js
jumpseller.countries.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [Country](#country)

### countries.country_code.json.get
Retrieve a single Country information.


```js
jumpseller.countries.country_code.json.get({
  "login": "",
  "authtoken": "",
  "country_code": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * country_code **required** `string`: ISO3166 Country Code

#### Output
* output [Country](#country)

### countries.country_code.regions.json.get
Retrieve all Regions from a single Country.


```js
jumpseller.countries.country_code.regions.json.get({
  "login": "",
  "authtoken": "",
  "country_code": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * country_code **required** `string`: ISO3166 Country Code

#### Output
* output `array`
  * items [Region](#region)

### countries.country_code.regions.region_code.json.get
Retrieve a single Region information object.


```js
jumpseller.countries.country_code.regions.region_code.json.get({
  "login": "",
  "authtoken": "",
  "country_code": "",
  "region_code": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * country_code **required** `string`: ISO3166 Country Code
  * region_code **required** `string`: Region Code

#### Output
* output [Region](#region)

### customer_categories.json.get
Retrieve all Customer Categories.


```js
jumpseller.customer_categories.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [CustomerCategory](#customercategory)

### customer_categories.json.post
Create a new CustomerCategory.


```js
jumpseller.customer_categories.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [CustomerCategoryEdit](#customercategoryedit)

#### Output
* output `array`
  * items [CustomerCategory](#customercategory)

### customer_categories.id.json.delete
Delete an existing CustomerCategory.


```js
jumpseller.customer_categories.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory

#### Output
* output `string`

### customer_categories.id.json.get
Retrieve a single CustomerCategory.


```js
jumpseller.customer_categories.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory

#### Output
* output [CustomerCategory](#customercategory)

### customer_categories.id.json.put
Update a CustomerCategory.


```js
jumpseller.customer_categories.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory
  * body **required** [CustomerCategoryEdit](#customercategoryedit)

#### Output
* output `array`
  * items [CustomerCategory](#customercategory)

### customer_categories.id.customers.json.delete
Delete Customers from an existing CustomerCategory.


```js
jumpseller.customer_categories.id.customers.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory

#### Output
* output `string`

### customer_categories.id.customers.json.get
Retrieves the customers in a CustomerCategory.


```js
jumpseller.customer_categories.id.customers.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory

#### Output
* output `array`
  * items [Customer](#customer)

### customer_categories.id.customers.json.post
Adds Customers to a CustomerCategory.


```js
jumpseller.customer_categories.id.customers.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomerCategory
  * body **required** [Customer](#customer)

#### Output
* output `array`
  * items [Customer](#customer)

### customers.json.get
Retrieve all Customers.


```js
jumpseller.customers.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [Customer](#customer)

### customers.json.post
Create a new Customer.


```js
jumpseller.customers.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [CustomerWithPasswordNoID](#customerwithpasswordnoid)

#### Output
* output `array`
  * items [Customer](#customer)

### customers.email.email.json.get
Retrieve a single Customer.


```js
jumpseller.customers.email.email.json.get({
  "login": "",
  "authtoken": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * email **required** `string`: Email of the Customer

#### Output
* output [Customer](#customer)

### customers.id.json.delete
Delete an existing Category.


```js
jumpseller.customers.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer

#### Output
* output `string`

### customers.id.json.get
Retrieve a single Customer.


```js
jumpseller.customers.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer

#### Output
* output [Customer](#customer)

### customers.id.json.put
Update a new Customer.


```js
jumpseller.customers.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer
  * body **required** [CustomerWithPassword](#customerwithpassword)

#### Output
* output `array`
  * items [Customer](#customer)

### fields.json.get
Retrieve all Store's Custom Fields.


```js
jumpseller.fields.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [Field](#field)

### fields.json.post
Create a new Custom Field.


```js
jumpseller.fields.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [Field](#field)

#### Output
* output `array`
  * items [Field](#field)

### hooks.json.get
Retrieve all Hooks.


```js
jumpseller.hooks.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [Hook](#hook)

### hooks.json.post
Create a new Hook.


```js
jumpseller.hooks.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [HookEdit](#hookedit)

#### Output
* output [Hook](#hook)

### hooks.id.json.delete
Delete an existing Hook.


```js
jumpseller.hooks.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Hook

#### Output
* output `string`

### hooks.id.json.get
Retrieve a single Hook.


```js
jumpseller.hooks.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Hook

#### Output
* output [Hook](#hook)

### hooks.id.json.put
Update a Hook.


```js
jumpseller.hooks.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Hook
  * body **required** [HookEdit](#hookedit)

#### Output
* output `array`
  * items [Hook](#hook)

### jsapps.json.post
Create a Store JSApp


```js
jumpseller.jsapps.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [JSApp](#jsapp)

#### Output
* output `array`
  * items [JSApp](#jsapp)

### jsapps.code.json.delete
Delete an existing JSApp.


```js
jumpseller.jsapps.code.json.delete({
  "login": "",
  "authtoken": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * code **required** `string`: Code of the App

#### Output
* output `string`

### jsapps.code.json.get
Retrieve a JSApp


```js
jumpseller.jsapps.code.json.get({
  "login": "",
  "authtoken": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * code **required** `string`: Code of the App

#### Output
* output [JSApp](#jsapp)

### orders.json.get
Retrieve all Orders.


```js
jumpseller.orders.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [Order](#order)

### orders.json.post
Use the JSON format:<br/>'{ "order": {"status": "Paid", "shipping_method_id": 123, "products": [{ "id": 123, "qty": 1}], "customer": {"id": 123}}}'<br/>or in CURL:<br/>curl -X POST -d '{ "order": {"status": "Paid", "shipping_method_id": 123, "products": [{ "id": 123, "qty": 1}], "customer": {"id": 123}}}' "https://api.jumpseller.com/v1/orders.json?login=storecode&authtoken=XXXXX" -H "Content-Type:application/json" 


```js
jumpseller.orders.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [OrderEdit](#orderedit)

#### Output
* output `array`
  * items [Order](#order)

### orders.status.status.json.get
Retrieve orders filter by status.


```js
jumpseller.orders.status.status.json.get({
  "login": "",
  "authtoken": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * status **required** `string` (values: Abandoned, Canceled, Pending Payment, Paid): Status of the Order used as filter

#### Output
* output `array`
  * items [Order](#order)

### orders.id.json.get
Retrieve a single Order.


```js
jumpseller.orders.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Order

#### Output
* output [Order](#order)

### orders.id.json.put
Only 'status', 'tracking_number', 'tracking_company', 'additional_information' and 'additional_fields' are available for update.<br/>Use the JSON format:<br/>'{ "order": {"status": "Paid", "tracking_company": "other", "tracking_number": "123456789", "additional_information": "My custom message.", "additional_fields": [{"label": "Gift Name", "value": "Duarte"}, {"label": "Gift Wrapping Color", "value": "Green"}]} }}'<br/>or in CURL:<br/>curl -X PUT -d '{ "order": {"status": "Paid", "additional_information": "My custom message."}}' "https://api.jumpseller.com/v1/orders/{id}.json?login=storecode&authtoken=XXXXX" -H "Content-Type:application/json" 


```js
jumpseller.orders.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Order
  * body **required** [OrderEdit](#orderedit)

#### Output
* output `array`
  * items [Order](#order)

### orders.id.history.json.get
Retrieve all Order History.


```js
jumpseller.orders.id.history.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Order

#### Output
* output `array`
  * items [OrderHistory](#orderhistory)

### orders.id.history.json.post
Create a new Order History Entry.


```js
jumpseller.orders.id.history.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the OrderHistory
  * body **required** [OrderHistoryEdit](#orderhistoryedit)

#### Output
* output `array`
  * items [OrderHistory](#orderhistory)

### payment_methods.json.get
Retrieve all Store's Payment Methods.


```js
jumpseller.payment_methods.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [PaymentMethod](#paymentmethod)

### payment_methods.id.json.get
Retrieve a single Payment Method.


```js
jumpseller.payment_methods.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Payment Method

#### Output
* output [PaymentMethod](#paymentmethod)

### products.json.get
Retrieve all Products.


```js
jumpseller.products.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [Product](#product)

### products.json.post
Create a new Product.


```js
jumpseller.products.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [ProductEdit](#productedit)

#### Output
* output `array`
  * items [Product](#product)

### products.after.id.json.get
Retrieves Products after the given id.


```js
jumpseller.products.after.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product

#### Output
* output `array`
  * items [Product](#product)

### products.category.category_id.json.get
Retrieve Products filtered by category.


```js
jumpseller.products.category.category_id.json.get({
  "login": "",
  "authtoken": "",
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * category_id **required** `integer`: Category ID of the Product used as filter

#### Output
* output `array`
  * items [Product](#product)

### products.category.category_id.count.json.get
Count Products filtered by category.


```js
jumpseller.products.category.category_id.count.json.get({
  "login": "",
  "authtoken": "",
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * category_id **required** `integer`: Category ID of the Product used as filter

#### Output
* output [Count](#count)

### products.count.json.get
Count all Products.


```js
jumpseller.products.count.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output [Count](#count)

### products.search.json.get
Retrieve a Product List from a query.


```js
jumpseller.products.search.json.get({
  "login": "",
  "authtoken": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * query **required** `string`: Query for the Product

#### Output
* output `array`
  * items [Product](#product)

### products.sku.sku.json.get
Retrieve a single Product by SKU.


```js
jumpseller.products.sku.sku.json.get({
  "login": "",
  "authtoken": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * sku **required** `string`: SKU of the Product

#### Output
* output `array`
  * items [Product](#product)

### products.status.status.json.get
Retrieve Products filtered by status.


```js
jumpseller.products.status.status.json.get({
  "login": "",
  "authtoken": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * status **required** `string` (values: available, not-available, disabled): Status of the Product used as filter

#### Output
* output `array`
  * items [Product](#product)

### products.status.status.count.json.get
Count Products filtered by status.


```js
jumpseller.products.status.status.count.json.get({
  "login": "",
  "authtoken": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * status **required** `string` (values: available, not-available, disabled): Status of the Product used as filter

#### Output
* output [Count](#count)

### products.id.json.delete
Delete an existing Product.


```js
jumpseller.products.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product

#### Output
* output `string`

### products.id.json.get
Retrieve a single Product.


```js
jumpseller.products.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output [Product](#product)

### products.id.json.put
Modify an existing Product.


```js
jumpseller.products.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * body **required** [ProductEdit](#productedit)

#### Output
* output `array`
  * items [Product](#product)

### products.id.fields.json.get
Retrieve all Product Custom Fields


```js
jumpseller.products.id.fields.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product

#### Output
* output `array`
  * items [Field](#field)

### products.id.fields.json.post
Create a new Product Custom Field.


```js
jumpseller.products.id.fields.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * body **required** [ProductCustomField](#productcustomfield)

#### Output
* output `array`
  * items [Product](#product)

### products.id.fields.count.json.get
Count all Product Custom Fields.


```js
jumpseller.products.id.fields.count.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output [Count](#count)

### products.id.images.json.get
Retrieve all Product Images.


```js
jumpseller.products.id.images.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output `array`
  * items [Image](#image)

### products.id.images.json.post
Create a new Product Image.


```js
jumpseller.products.id.images.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * body **required** [ImageEdit](#imageedit)

#### Output
* output `array`
  * items [Image](#image)

### products.id.images.count.json.get
Count all Product Images.


```js
jumpseller.products.id.images.count.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output [Count](#count)

### products.id.images.image_id.json.delete
Delete a Product Image.


```js
jumpseller.products.id.images.image_id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "image_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * image_id **required** `integer`: Id of the Product Image

#### Output
* output `string`

### products.id.images.image_id.json.get
Create a new Product Image.


```js
jumpseller.products.id.images.image_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "image_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * image_id **required** `integer`: Id of the Product Image

#### Output
* output `array`
  * items [Image](#image)

### products.id.options.json.get
Retrieve all Product Options.


```js
jumpseller.products.id.options.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output `array`
  * items [ProductOption](#productoption)

### products.id.options.json.post
Create a new Product Option.


```js
jumpseller.products.id.options.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * body **required** [ProductOptionEdit](#productoptionedit)

#### Output
* output `array`
  * items [ProductOption](#productoption)

### products.id.options.count.json.get
Count all Product Options.


```js
jumpseller.products.id.options.count.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output [Count](#count)

### products.id.options.option_id.json.delete
Delete a Product Option.


```js
jumpseller.products.id.options.option_id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option

#### Output
* output `string`

### products.id.options.option_id.json.get
Create a new Product Option.


```js
jumpseller.products.id.options.option_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option

#### Output
* output `array`
  * items [ProductOption](#productoption)

### products.id.options.option_id.json.put
Modify an existing Product Option.


```js
jumpseller.products.id.options.option_id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option
  * body **required** [ProductOptionEdit](#productoptionedit)

#### Output
* output `array`
  * items [ProductOption](#productoption)

### products.id.options.option_id.values.json.get
Retrieve all Product Option Values.


```js
jumpseller.products.id.options.option_id.values.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product
  * option_id **required** `integer`: ID of the Product Option

#### Output
* output `array`
  * items [ProductOptionValue](#productoptionvalue)

### products.id.options.option_id.values.json.post
Create a new Product Option Value.


```js
jumpseller.products.id.options.option_id.values.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option
  * body **required** [ProductOptionValueEdit](#productoptionvalueedit)

#### Output
* output `array`
  * items [ProductOptionValue](#productoptionvalue)

### products.id.options.option_id.values.count.json.get
Count all Product Option Values.


```js
jumpseller.products.id.options.option_id.values.count.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product
  * option_id **required** `integer`: ID of the Product Option

#### Output
* output [Count](#count)

### products.id.options.option_id.values.value_id.json.delete
Delete a Product Option Value.


```js
jumpseller.products.id.options.option_id.values.value_id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0,
  "value_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option
  * value_id **required** `integer`: ID of the Product Option Value

#### Output
* output `string`

### products.id.options.option_id.values.value_id.json.get
Create a new Product Option Value.


```js
jumpseller.products.id.options.option_id.values.value_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0,
  "value_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option
  * value_id **required** `integer`: ID of the Product Option Value

#### Output
* output `array`
  * items [ProductOptionValue](#productoptionvalue)

### products.id.options.option_id.values.value_id.json.put
Modify an existing Product Option Value.


```js
jumpseller.products.id.options.option_id.values.value_id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "option_id": 0,
  "value_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * option_id **required** `integer`: Id of the Product Option
  * value_id **required** `integer`: Id of the Product Option Value
  * body **required** [ProductOptionValueEdit](#productoptionvalueedit)

#### Output
* output [ProductOptionValue](#productoptionvalue)

### products.id.variants.json.get
Retrieve all Product Variants.


```js
jumpseller.products.id.variants.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output `array`
  * items [Variant](#variant)

### products.id.variants.json.post
Create a new Product Variant.


```js
jumpseller.products.id.variants.json.post({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * body **required** [VariantEdit](#variantedit)

#### Output
* output [Variant](#variant)

### products.id.variants.count.json.get
Count all Product Variants.


```js
jumpseller.products.id.variants.count.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: ID of the Product

#### Output
* output [Count](#count)

### products.id.variants.variant_id.json.get
Retrieve a single Product Variant.


```js
jumpseller.products.id.variants.variant_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "variant_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * variant_id **required** `integer`: Id of the Product Variant

#### Output
* output [Variant](#variant)

### products.id.variants.variant_id.json.put
Modify an existing Product Variant.


```js
jumpseller.products.id.variants.variant_id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "variant_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * variant_id **required** `integer`: Id of the Product Variant
  * body **required** [VariantEdit](#variantedit)

#### Output
* output [Variant](#variant)

### promotions.json.get
Retrieve all Promotions.


```js
jumpseller.promotions.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * limit `integer`: Promotions' list restriction (default: 50 | max: 200).
  * page `integer`: Promotions' list page (default: 1).

#### Output
* output `array`
  * items [Promotion](#promotion)

### promotions.json.post
Create a new Promotion.


```js
jumpseller.promotions.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [PromotionEdit](#promotionedit)

#### Output
* output `array`
  * items [Promotion](#promotion)

### promotions.id.json.delete
Delete an existing Promotion.


```js
jumpseller.promotions.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Promotion

#### Output
* output `string`

### promotions.id.json.get
Retrieve a single Promotion.


```js
jumpseller.promotions.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Promotion

#### Output
* output [Promotion](#promotion)

### promotions.id.json.put
Update a Promotion.


```js
jumpseller.promotions.id.json.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Promotion
  * body **required** [PromotionEdit](#promotionedit)

#### Output
* output `array`
  * items [Promotion](#promotion)

### store.info.json.get
Retrieve Store Information


```js
jumpseller.store.info.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output [Store](#store)

### store.languages.json.get
Retrieve Store Languages


```js
jumpseller.store.languages.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [Language](#language)

### taxes.json.get
Retrieve all Taxes.


```js
jumpseller.taxes.json.get({
  "login": "",
  "authtoken": ""
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.

#### Output
* output `array`
  * items [Tax](#tax)

### taxes.json.post
Create a new Tax.


```js
jumpseller.taxes.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [TaxEdit](#taxedit)

#### Output
* output `array`
  * items [Tax](#tax)

### taxes.id.json.get
Retrieve a single Tax information.


```js
jumpseller.taxes.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Tax

#### Output
* output [Tax](#tax)



## Definitions

### App
* App `object`
  * apps `array`
    * items [AppFields](#appfields)

### AppFields
* AppFields `object`
  * author `string`: Author of the app
  * code `string`: Code of the app
  * description `string`: Description of the app
  * js `boolean`: True if the app is a jsapp
  * name `string`: Name of the app
  * page `string`: Page of the app

### BillingAddress
* BillingAddress `object`
  * address `string`: Address of the Customer's Billing Address
  * city `string`: City of the Customer's Billing Address
  * country `string`: Country of the Customer's Billing Address
  * municipality `string`: Municipality of the Customer's Billing Address
  * name `string`: Name of the Customer's Billing Address
  * postal `string`: Postal code of the Customer's Billing Address
  * region `string`: Region of the Customer's Billing Address
  * surname `string`: Surname of the Customer's Billing Address
  * taxid `string`: Tax id of the Customer's Billing Address

### Category
* Category `object`
  * category [CategoryFields](#categoryfields)

### CategoryEdit
* CategoryEdit `object`
  * category [CategoryEditFields](#categoryeditfields)

### CategoryEditFields
* CategoryEditFields `object`
  * name `string`: Name of the Category
  * parent_id `integer`: Unique identifier of the Parent Category

### CategoryFields
* CategoryFields `object`
  * id `integer`: Unique identifier of the Category
  * name `string`: Name of the Category
  * parent_id `integer`: Unique identifier of the Parent Category
  * permalink `string`: Category unique URL path

### CheckoutCustomField
* CheckoutCustomField `object`
  * checkout_custom_field [CheckoutCustomFieldFields](#checkoutcustomfieldfields)

### CheckoutCustomFieldEdit
* CheckoutCustomFieldEdit `object`
  * checkout_custom_field [CheckoutCustomFieldEditFields](#checkoutcustomfieldeditfields)

### CheckoutCustomFieldEditFields
* CheckoutCustomFieldEditFields `object`
  * area `string` (values: contact, billing_shipping, other): Area of the CheckoutCustomField
  * custom_field_select_options `array`: The values for the CheckoutCustomField selection
    * items `string`
  * deletable `boolean`: True if the CheckoutCustomField can be removed from the store
  * label `string`: Label given to the CheckoutCustomField
  * position `integer`: Position of the CheckoutCustomField
  * required `boolean`: True if the CheckoutCustomField is mandatory
  * type `string` (values: text, select, input, checkbox): Type of the CheckoutCustomField

### CheckoutCustomFieldFields
* CheckoutCustomFieldFields `object`
  * area `string` (values: contact, billing_shipping, other): Area of the CheckoutCustomField
  * custom_field_select_options `array`: The values for the CheckoutCustomField selection
    * items `string`
  * deletable `boolean`: True if the CheckoutCustomField can be removed from the store
  * id `integer`: Unique identifier of the CheckoutCustomField
  * label `string`: Label given to the CheckoutCustomField
  * position `integer`: Position of the CheckoutCustomField
  * required `boolean`: True if the CheckoutCustomField is mandatory
  * type `string` (values: text, select, input, checkbox): Type of the CheckoutCustomField

### Count
* Count `object`
  * count `integer`

### Country
* Country `object`
  * code `string`
  * name `string`

### Customer
* Customer `object`
  * customer [CustomerFields](#customerfields)

### CustomerCategory
* CustomerCategory `object`
  * category [CustomerCategoryFields](#customercategoryfields)

### CustomerCategoryEdit
* CustomerCategoryEdit `object`
  * category [CustomerCategoryEditFields](#customercategoryeditfields)

### CustomerCategoryEditFields
* CustomerCategoryEditFields `object`
  * name `string`: Name of the CustomerCategory

### CustomerCategoryFields
* CustomerCategoryFields `object`
  * code `string`: Code of the CustomerCategory
  * id `integer`: Unique identifier of the CustomerCategory
  * name `string`: Name of the CustomerCategory

### CustomerFields
* CustomerFields `object`
  * billing_address [BillingAddress](#billingaddress)
  * email `string`: Email of the Customer
  * id `integer`: Unique identifier of the Customer
  * phone `string`: Phone of the Customer
  * shipping_address [ShippingAddress](#shippingaddress)
  * status `string` (values: approved, pending, disabled): Status of the Customer

### CustomerFieldsWithPassword
* CustomerFieldsWithPassword `object`
  * billing_address [BillingAddress](#billingaddress)
  * email `string`: Email of the Customer
  * id `integer`: Unique identifier of the Customer
  * password `string`: Password
  * password_confirmation `string`: Password Confirmation
  * phone `string`: Phone of the Customer
  * shipping_address [ShippingAddress](#shippingaddress)
  * status `string` (values: approved, pending, disabled): Status of the Customer

### CustomerFieldsWithPasswordNoID
* CustomerFieldsWithPasswordNoID `object`
  * billing_address [BillingAddress](#billingaddress)
  * email `string`: Email of the Customer
  * password `string`: Password
  * password_confirmation `string`: Password Confirmation
  * phone `string`: Phone of the Customer
  * shipping_address [ShippingAddress](#shippingaddress)
  * status `string` (values: approved, pending, disabled): Status of the Customer

### CustomerWithPassword
* CustomerWithPassword `object`
  * customer [CustomerFieldsWithPassword](#customerfieldswithpassword)

### CustomerWithPasswordNoID
* CustomerWithPasswordNoID `object`
  * customer [CustomerFieldsWithPasswordNoID](#customerfieldswithpasswordnoid)

### Field
* Field `object`
  * field [FieldFields](#fieldfields)

### FieldFields
* FieldFields `object`
  * id `integer`: Unique identifier of the Field
  * label `string`: Label given to the Field
  * type `string` (values: text, selection, input): Type of the Field
  * values `array`: All the possible Values of the Field (for type 'selection')
    * items `string`

### Hook
* Hook `object`
  * hook [HookFields](#hookfields)

### HookEdit
* HookEdit `object`
  * hook [HookEditFields](#hookeditfields)

### HookEditFields
* HookEditFields `object`
  * event **required** `string` (values: order_updated, order_pending_payment, order_paid, order_shipped, order_canceled, order_abandoned, product_created, product_updated, product_deleted, customer_created, customer_updated, customer_deleted): Event associated with Hook
  * url **required** `string`: Hook URL to be notified

### HookFields
* HookFields `object`
  * created_at `string`: Hook creation date
  * event `string`: Event associated with Hook
  * id `integer`: Unique identifier of the Hook
  * url `string`: Hook URL to be notified

### Id
* Id `object`
  * id `integer`

### Image
* Image `object`
  * image [ImageFields](#imagefields)

### ImageEdit
* ImageEdit `object`
  * image [ImageEditFields](#imageeditfields)

### ImageEditFields
* ImageEditFields `object`
  * url `string`: Complete URL of the image

### ImageFields
* ImageFields `object`
  * id `integer`: Unique identifier of the image
  * position `integer`: Position of the image
  * url `string`: Complete URL of the image

### JSApp
* JSApp `object`
  * element `string`: Element of Template to inject HTML
  * template `string`: Template of Store Theme to inject HTML
  * url `string`: Url of the HTML to inject

### Language
* Language `object`
  * code `string`
  * name `string`

### NotFound
* NotFound `object`
  * message `string`

### Order
* Order `object`
  * order [OrderFields](#orderfields)

### OrderEdit
* OrderEdit `object`
  * order [OrderEditFields](#ordereditfields)

### OrderEditFields
* OrderEditFields `object`
  * additional_information `string`: Additional information for the given Order
  * customer `object`
    * email `string`: Email of the customer for the given Order
  * products `array`
    * items [OrderProduct](#orderproduct)
  * shipping_method_id `integer`: Shipping method e.g. Royal Mail
  * status `string` (values: Abandoned, Canceled, Pending Payment, Paid): Status of the Order
  * tracking_company `string`: Shipping Company used for the given Order
  * tracking_number `string`: Shipping Tracking Number used for the given Order

### OrderFields
* OrderFields `object`
  * additional_information `string`: Additional information for the given Order
  * billing_address [BillingAddress](#billingaddress)
  * created_at `string`: Order date
  * currency `string`: Currency of the Order
  * customer [Customer](#customer)
  * discount `number`: Discount value for the given Order
  * id `integer`: Unique identifier of the Order
  * payment_information `string`: Payment information for the given Order
  * payment_method_name `string`: Payment Method name used e.g. PayPal
  * products `array`
    * items [OrderProduct](#orderproduct)
  * shipment_status `string` (values: delivered, requested, in_transit, failed): Shipment Status for Order Fulfillment.
  * shipping `number`: Shipping value for the given Order
  * shipping_address [ShippingAddress](#shippingaddress)
  * shipping_method_id `integer`: Shipping method e.g. Royal Mail
  * shipping_method_name `string`: Shipping method e.g. Royal Mail
  * shipping_tax `number`: Shipping Tax value for the given order
  * status `string` (values: Abandoned, Canceled, Pending Payment, Paid): Status of the Order
  * subtotal `number`: Subtotal value for the given Order. Excluding taxes, shipping and discounts
  * tax `number`: Tax value for the given order
  * total `number`: Total value for the given Order. Including taxes, shipping and discounts
  * tracking_company `string`: Company Used for Order Fulfillment.
  * tracking_number `string`: Tracking Number for Order Fulfillment.
  * tracking_url `string`: Tracking URL for Order Fulfillment.

### OrderHistory
* OrderHistory `object`
  * order_history [OrderHistoryFields](#orderhistoryfields)

### OrderHistoryEdit
* OrderHistoryEdit `object`
  * order_history [OrderHistoryEditFields](#orderhistoryeditfields)

### OrderHistoryEditFields
* OrderHistoryEditFields `object`
  * message `string`: Message of the Order History

### OrderHistoryFields
* OrderHistoryFields `object`
  * created_at `string`: Creation date of the order history
  * id `integer`: Unique identifier of the Order History
  * message `string`: Message of the Order History

### OrderProduct
* OrderProduct `object`
  * discount `number`: Discount of the Order Product
  * id `integer`: Unique identifier of the original Product
  * image `string`: Image URL of the Order Product
  * name `string`: Name of the Order Product
  * price `number`: Price of the Order Product
  * qty `integer`: Price of the Order Product
  * sku `string`: Stock Keeping Unit of the Order Product
  * variant_id `integer`: Unique identifier of the original Product Variant
  * weight `number`: Weight of the Order Product

### PaymentMethod
* PaymentMethod `object`
  * payment_method [PaymentMethodFields](#paymentmethodfields)

### PaymentMethodFields
* PaymentMethodFields `object`
  * id `integer`: Unique identifier of the Payment Method
  * name `string`: Name of the Payment Method
  * type `string` (values: dineromail, manual, paypal, pagseguro, interpagos, moneybookers, webpay, webpay_cl, easypay, easypaycc, easypayboleto, ideal_basic, hipay, khipu, mercado_pago, ifthenpay, eupago, stripe, payu, servipag): Type of the Payment Method

### Product
* Product `object`
  * product [ProductFields](#productfields)

### ProductCustomField
* ProductCustomField `object`
  * field_value [ProductCustomFieldFields](#productcustomfieldfields)

### ProductCustomFieldFields
* ProductCustomFieldFields `object`
  * id `integer`: Unique identifier of the ProductCustomField
  * value `array`: The value for the ProductCustomField
    * items `string`

### ProductEdit
* ProductEdit `object`
  * product [ProductEditFields](#producteditfields)

### ProductEditFields
* ProductEditFields `object`
  * categories `array`
    * items [CategoryFields](#categoryfields)
  * description `string`: Description of the product
  * diameter `number`: Diameter of the product
  * featured `boolean`: True if the product is featured
  * height `number`: Height of the product
  * length `number`: Length of the product
  * meta_description `string`: SEO meta description of the product
  * name `string`: Name of the product
  * package_format `string` (values: box, cylinder): Format the product package
  * page_title `string`: SEO title of the product
  * permalink `string`: Product unique URL path
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the product
  * status `string` (values: available, not-available, disabled): Status of the product
  * stock `integer`: Quantity in stock for the product
  * stock_unlimited `boolean`: True if the Product has unlimited stock
  * weight `number`: Weight of the product
  * width `number`: Width of the product

### ProductFields
* ProductFields `object`
  * categories `array`
    * items [CategoryFields](#categoryfields)
  * created_at `string`: Date of product creation
  * description `string`: Description of the product
  * diameter `number`: Diameter of the product
  * discount `number`: Discount of the product
  * featured `boolean`: True if the product is featured
  * height `number`: Height of the product
  * id `integer`: Unique identifier of the product
  * images `array`
    * items [ImageFields](#imagefields)
  * length `number`: Length of the product
  * name `string`: Name of the product
  * package_format `string` (values: box, cylinder): Format the product package
  * permalink `string`: Product unique URL path
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the product
  * status `string` (values: available, not-available, disabled): Status of the product
  * stock `integer`: Quantity in stock for the product
  * stock_unlimited `boolean`: True if the Product has unlimited stock
  * variants `array`
    * items [VariantFields](#variantfields)
  * weight `number`: Weight of the product
  * width `number`: Width of the product

### ProductOption
* ProductOption `object`
  * option [ProductOptionFields](#productoptionfields)

### ProductOptionEdit
* ProductOptionEdit `object`
  * option [ProductOptionEditFields](#productoptioneditfields)

### ProductOptionEditFields
* ProductOptionEditFields `object`
  * name `string`: Name of the product option
  * option_type `string` (values: option, input, text, file): Type of the product option
  * position `integer`: Position of the product option

### ProductOptionFields
* ProductOptionFields `object`
  * id `integer`: Unique identifier of the product option
  * name `string`: Name of the product option
  * option_type `string` (values: option, input, text, file): Type of the product option
  * position `integer`: Position of the product option
  * values `array`
    * items [ProductOptionValueFields](#productoptionvaluefields)

### ProductOptionValue
* ProductOptionValue `object`
  * value [ProductOptionValueFields](#productoptionvaluefields)

### ProductOptionValueEdit
* ProductOptionValueEdit `object`
  * value [ProductOptionValueEditFields](#productoptionvalueeditfields)

### ProductOptionValueEditFields
* ProductOptionValueEditFields `object`
  * name `string`: Name of the product option value
  * position `integer`: Position of the product option value

### ProductOptionValueFields
* ProductOptionValueFields `object`
  * id `integer`: Unique identifier of the product option value
  * name `string`: Name of the product option value
  * position `integer`: Position of the product option value
  * product_option [ProductOption](#productoption)

### Promotion
* Promotion `object`
  * promotion [PromotionFields](#promotionfields)

### PromotionEdit
* PromotionEdit `object`
  * promotion [PromotionEditFields](#promotioneditfields)

### PromotionEditFields
* PromotionEditFields `object`
  * begins_at `string`: Creation date of the promotion (requires 'lasts' param - 'date')
  * buys_at_least `string`: Controls the promotion's condition ('none', 'price', 'qty')
  * categories `array`: Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')
    * items [Id](#id)
  * code `string`: Code of the promotion
  * condition_price `number`: Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')
  * condition_qty `integer`: Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')
  * cumulative `boolean`: True if the promotion can be acumulated with others
  * customer_categories `array`: Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories')
    * items [Id](#id)
  * customers `string`: Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories')
  * discount_amount_fix `number`: Fixed discount amount of the promotion (requires 'type' param - 'fix')
  * discount_amount_percent `number`: Percentual discount amount of the promotion (requires 'type' param - 'percentage')
  * discount_target `string`: Where the promotion will be applied ('order', 'shipping', 'categories')
  * expires_at `string`: Expiration date of the promotion (requires 'lasts' param - 'date')
  * lasts `string`: Controls when the promotion will expire ('none', 'date', 'max_times_used')
  * max_times_used `integer`: Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
  * name `string`: Name of the product
  * products `array`: Products where the promotion will be applied (requires 'discount_target' param - 'categories')
    * items [Id](#id)
  * type `string`: Controls if the discount will be a fixed value ('fix', 'percentage')

### PromotionFields
* PromotionFields `object`
  * begins_at `string`: Creation date of the promotion
  * categories `array`
    * items [Id](#id)
  * code `string`: Code of the promotion
  * condition_price `number`: Minimum order amount to validate the promotion
  * condition_qty `integer`: Minimum quantity of ordered itens to validate the promotion
  * cumulative `boolean`: True if the promotion can be acumulated with others
  * customer_categories `array`
    * items [Id](#id)
  * discount_amount_fix `number`: Fixed discount amount of the promotion
  * discount_amount_percent `number`: Percentual discount amount of the promotion
  * discount_target `string`: Where the promotion will be applied ('order', 'shipping', 'categories')
  * expires_at `string`: Expiration date of the promotion
  * id `integer`: Unique identifier of the product
  * max_times_used `integer`: Maximum amount a promotion can be used
  * name `string`: Name of the product
  * products `array`
    * items [Id](#id)
  * status `string`: Status of the promotion ('active', 'expired')
  * times_used `integer`: Amount of times the promotion was used

### Region
* Region `object`
  * code `string`
  * name `string`

### ShippingAddress
* ShippingAddress `object`
  * address `string`: Address of the Customer's Shipping Address
  * city `string`: City of the Customer's Shipping Address
  * country `string`: Country of the Customer's Shipping Address
  * municipality `string`: Municipality of the Customer's Shipping Address
  * name `string`: Name of the Customer's Shipping Address
  * postal `string`: Postal code of the Customer's Shipping Address
  * region `string`: Region of the Customer's Shipping Address
  * surname `string`: Surname of the Customer's Shipping Address

### StatusInvalid
* StatusInvalid `object`
  * message `string`

### Store
* Store `object`
  * code `string`: Store Code
  * country `string`: Store Country
  * currency `string`: Store Currency
  * email `string`: Store Admin Email
  * hooks_token `string`: Store Hooks Auth token
  * logo `string`: Store Logo URL
  * name `string`: Store Name
  * timezone `string`: Store Timezone
  * url `string`: Store URL

### Tax
* Tax `object`
  * field [TaxFields](#taxfields)

### TaxEdit
* TaxEdit `object`
  * field [TaxEditFields](#taxeditfields)

### TaxEditFields
* TaxEditFields `object`
  * category_id `integer`: Unique identifier of the category of the Tax
  * country `string`: Country where the Tax applies
  * fixed `boolean`: True if the tax has a fixed valued amount
  * region `string`: Region where the Tax applies
  * shipping `boolean`: True if the tax should be applied to shipping costs
  * tax_amount `number`: Tax value for the given Tax

### TaxFields
* TaxFields `object`
  * category_id `integer`: Unique identifier of the category of the Tax
  * country `string`: Country name where the Tax applies
  * fixed `boolean`: True if the tax has a fixed valued amount
  * id `integer`: Unique identifier of the Tax
  * region `string`: Region name where the Tax applies
  * shipping `boolean`: True if the tax should be applied to shipping costs
  * tax_amount `number`: Tax value for the given Tax

### Variant
* Variant `object`
  * variant [VariantFields](#variantfields)

### VariantEdit
* VariantEdit `object`
  * variant [VariantEditFields](#varianteditfields)

### VariantEditFields
* VariantEditFields `object`
  * id `integer`: Unique identifier of the product
  * image_id `integer`: Unique identifier of the product image to associate with this variant
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the Product's Variant
  * stock `integer`: Quantity in stock for the Product's Variant
  * stock_unlimited `boolean`: True if the Product's Variant has unlimited stock

### VariantFields
* VariantFields `object`
  * id `integer`: Unique identifier of the product
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the Product's Variant
  * stock `integer`: Quantity in stock for the Product's Variant
  * stock_unlimited `boolean`: True if the Product's Variant has unlimited stock


