# @datafire/jumpseller

Client library for Jumpseller API

## Installation and Usage
```bash
npm install --save @datafire/jumpseller
```
```js
let jumpseller = require('@datafire/jumpseller').create();

.then(data => {
  console.log(data);
});
```

## Description

# Endpoint Structure

All URLs are in the format: 

```text
https://api.jumpseller.com/v1/path.json?login=XXXXXX&authtoken=storetoken  
```

The path is prefixed by the API version and the URL takes as parameters the login (your store specific API login) and your authentication token.
<br/><br/>
***

# Version

The current version of the API is **v1**.  
If we change the API in backward-incompatible ways, we'll increase the version number and maintain stable support for the old urls.
<br/><br/>
***

# Authentication

The API uses a token-based authentication with a combination of a login key and an auth token. **Both parameters can be found on the left sidebar of the Account section, accessed from the main menu of your Admin Panel**. The auth token of the user can be reset on the same page.

![Store Login](/images/support/api/apilogin.png)

The auth token is a **32 characters** string.

If you are developing a Jumpseller App, the authentication should be done using [OAuth-2](/support/oauth-2). Please read the article [Build an App](/support/apps) for more information.
<br/><br/>
***

# Curl Examples

To request all the products at your store, you would append the products index path to the base url to create an URL with the format:  

```text
https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX
```

In curl, you can invoque that URL with:  

```text
curl -X GET "https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX"
```

To create a product, you will include the JSON data and specify the MIME Type:  

```text
curl -X POST -d '{ "product" : {"name": "My new Product!", "price": 100} }' "https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX" -H "Content-Type:application/json"
```

and to update the product identified with 123:  

```text
curl -X PUT -d '{ "product" : {"name": "My updated Product!", "price": 99} }' "https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX" -H "Content-Type:application/json"
```

or delete it:  

```text
curl -X DELETE "https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX" -H "Content-Type:application/json"
```
<br/><br/>
***

# PHP Examples

Create a new Product (POST method)

```php
$url = 'https://api.jumpseller.com/v1/products.json?login=XXXXX&authtoken=XXXXX;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST"); //post method
curl_setopt($ch, CURLOPT_POSTFIELDS, '{ "product" : {"name": "My updated Product!", "price": 99} }');

$result = curl_exec($ch);
print_r($result);
curl_close($ch);
```
<br/><br/>
***

# Plain JSON only. No XML.

* We only support JSON for data serialization.
* Our node format has no root element.  
* We use snake_case to describe attribute keys (like "created_at").  
* All empty value are replaced with **null** strings.
* All API URLs end in .json to indicate that they accept and return JSON.
* POST and PUT methods require you to explicitly state the MIME type of your request's body content as **"application/json"**.
<br/><br/>
***

# Rate Limit
You can perform a maximum of:

+ 240 (two hundred forty) requests per minute and
+ 8 (eight) requests per second 

If you exceed this limit, you'll get a 403 Forbidden (Rate Limit Exceeded) response for subsequent requests.  

The rate limits apply by IP address and by store. This means that multiple requests on different stores are not counted towards the same rate limit.

This limits are necessary to ensure resources are correctly used. Your application should be aware of this limits and retry any unsuccessful request, check the following Ruby stub:

```ruby
tries = 0; max_tries = 3;
begin
  HTTParty.send(method, uri) # perform an API call.
  sleep 0.5
  tries += 1
rescue
  unless tries >= max_tries
    sleep 1.0 # wait the necessary time before retrying the call again.
    retry
  end
end
```

Finally, you can review the Response Headers of each request:

```text
Jumpseller-PerMinuteRateLimit-Limit: 60  
Jumpseller-PerMinuteRateLimit-Remaining: 59 # requests available on the per-second interval  
Jumpseller-PerSecondRateLimit-Limit: 2  
Jumpseller-PerSecondRateLimit-Remaining: 1 # requests available on the per-second interval
``` 

to better model your application requests intervals.

In the event of getting your IP banned, the Response Header `Jumpseller-BannedByRateLimit-Reset` informs you the time when will your ban be reseted.
<br/><br/>
***

# Pagination

By default we will return 50 objects (products, orders, etc) per page. There is a maximum of 100, using a query string `&limit=100`.
If the result set gets paginated it is your responsibility to check the next page for more objects -- you do this by using query strings `&page=2`, `&page=3` and so on.

```text
https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX&page=3&limit=100
```
<br/><br/>
***

# More
* [Jumpseller API wrapper](https://gitlab.com/jumpseller-api/ruby) provides a public Ruby abstraction over our API;
* [Apps Page](/apps) showcases external integrations with Jumpseller done by technical experts;
* [Imgbb API](https://api.imgbb.com/) provides an easy way to upload and temporaly host for images and files.
<br/><br/>
***
<br/><br/>


## Actions

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
  * body **required** [CategoryEdit](#categoryedit)

#### Output
* output [Category](#category)

### categories.count.json.get
Count all Categories.


```js
jumpseller.categories.count.json.get({
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
Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.


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
* output [CheckoutCustomField](#checkoutcustomfield)

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
* output [CheckoutCustomField](#checkoutcustomfield)

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

### custom_fields.json.get
Retrieve all Store's Custom Fields.


```js
jumpseller.custom_fields.json.get({
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
  * items [CustomField](#customfield)

### custom_fields.json.post
Create a new Custom Field.


```js
jumpseller.custom_fields.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [CustomFieldEdit](#customfieldedit)

#### Output
* output [CustomField](#customfield)

### custom_fields.id.json.delete
Delete an existing CustomField.


```js
jumpseller.custom_fields.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomField

#### Output
* output `string`

### custom_fields.id.json.get
Retrieve a single CustomField.


```js
jumpseller.custom_fields.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the CustomField

#### Output
* output [CustomField](#customfield)

### custom_fields.id.json.put
Update a CustomField.


```js
jumpseller.custom_fields.id.json.put({
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
  * id **required** `integer`: Id of the CustomField
  * body **required** [CustomFieldEdit](#customfieldedit)

#### Output
* output [CustomField](#customfield)

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
* output [CustomerCategory](#customercategory)

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
* output [CustomerCategory](#customercategory)

### customer_categories.id.customers.json.delete
Delete Customers from an existing CustomerCategory.


```js
jumpseller.customer_categories.id.customers.json.delete({
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
  * body **required** [CustomersToCustomerCategory](#customerstocustomercategory)

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
  * body **required** [CustomersToCustomerCategory](#customerstocustomercategory)

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
* output [Customer](#customer)

### customers.count.json.get
Count all Customers.


```js
jumpseller.customers.count.json.get({
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

### customers.email.email.json.get
Retrieve a single Customer by email.


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
Delete an existing Customer.


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
Retrieve a single Customer by id.


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
  * body **required** [CustomerWithPasswordNoID](#customerwithpasswordnoid)

#### Output
* output [Customer](#customer)

### customers.id.fields.get
Retrieves the Customer Additional Field of a Customer.


```js
jumpseller.customers.id.fields.get({
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
* output `array`
  * items [CustomerAdditionalField](#customeradditionalfield)

### customers.id.fields.post
Adds Customer Additional Fields to a Customer.


```js
jumpseller.customers.id.fields.post({
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
  * body **required** [CustomerAdditionalFieldEdit](#customeradditionalfieldedit)

#### Output
* output [CustomerAdditionalField](#customeradditionalfield)

### customers.id.fields.field_id.delete
Delete a Customer Additional Field.


```js
jumpseller.customers.id.fields.field_id.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "field_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer
  * field_id **required** `integer`: Id of the Customer Additional Field

#### Output
* output `string`

### customers.id.fields.field_id.get
Retrieve a single Customer Additional Field.


```js
jumpseller.customers.id.fields.field_id.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "field_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer
  * field_id **required** `integer`: Id of the Customer Additional Field

#### Output
* output [CustomerAdditionalField](#customeradditionalfield)

### customers.id.fields.field_id.put
Update a Customer Additional Field.


```js
jumpseller.customers.id.fields.field_id.put({
  "login": "",
  "authtoken": "",
  "id": 0,
  "field_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Customer
  * field_id **required** `integer`: Id of the Customer Additional Field
  * body **required** [CustomerAdditionalFieldEdit](#customeradditionalfieldedit)

#### Output
* output [CustomerAdditionalField](#customeradditionalfield)

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
* output [Hook](#hook)

### jsapps.json.get
Retrieve all the Store's JSApps


```js
jumpseller.jsapps.json.get({
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
  * body **required** [JSAppEdit](#jsappedit)

#### Output
* output [JSApp](#jsapp)

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
  * limit `integer`: List restriction
  * page `integer`: List page

#### Output
* output `array`
  * items [Order](#order)

### orders.json.post
Create a new Order.


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
  * body **required** [OrderCreate](#ordercreate)

#### Output
* output [Order](#order)

### orders.after.id.json.get
For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.


```js
jumpseller.orders.after.id.json.get({
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

### orders.count.json.get
Count all Orders.


```js
jumpseller.orders.count.json.get({
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

### orders.status.status.json.get
Retrieve orders filtered by status.


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
Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `additional_information` and `additional_fields` are available for update.


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
* output [Order](#order)

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
* output [OrderHistory](#orderhistory)

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
  * locale `string`: Locale code of the translation

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
  * locale `string`: Locale code of the translation
  * body **required** [ProductEdit](#productedit)

#### Output
* output [Product](#product)

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
  * locale `string`: Locale code of the translation

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
  * locale `string`: Locale code of the translation
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
  * locale `string`: Locale code of the translation
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
Endpoint example: 

```text
https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description 
```


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
  * locale `string`: Locale code of the translation
  * query **required** `string`: Text to query for the Product
  * fields `string` (values: sku, barcode, brand, name, description, variants, option_name, custom_fields, custom_fields_selects): Comma separated values of the fields to query for the Product

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
  * locale `string`: Locale code of the translation
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
  * locale `string`: Locale code of the translation
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
  * locale `string`: Locale code of the translation
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
  * locale `string`: Locale code of the translation
  * body **required** [ProductEdit](#productedit)

#### Output
* output [Product](#product)

### products.id.attachments.json.get
Retrieve all Product Attachments.


```js
jumpseller.products.id.attachments.json.get({
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
  * items [Attachment](#attachment)

### products.id.attachments.json.post
Create a new Product Attachment.


```js
jumpseller.products.id.attachments.json.post({
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
  * body **required** [AttachmentEdit](#attachmentedit)

#### Output
* output [Attachment](#attachment)

### products.id.attachments.count.json.get
Count all Product Attachments.


```js
jumpseller.products.id.attachments.count.json.get({
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

### products.id.attachments.attachment_id.json.delete
Delete a Product Attachment.


```js
jumpseller.products.id.attachments.attachment_id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * attachment_id **required** `integer`: Id of the Product Attachment

#### Output
* output `string`

### products.id.attachments.attachment_id.json.get
Retrieve a single Product Attachment.


```js
jumpseller.products.id.attachments.attachment_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * attachment_id **required** `integer`: Id of the Product Attachment

#### Output
* output [Attachment](#attachment)

### products.id.digital_products.json.get
Retrieve all Product DigitalProducts.


```js
jumpseller.products.id.digital_products.json.get({
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
  * items [DigitalProduct](#digitalproduct)

### products.id.digital_products.json.post
Create a new Product DigitalProduct.


```js
jumpseller.products.id.digital_products.json.post({
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
  * body **required** [DigitalProductEdit](#digitalproductedit)

#### Output
* output [DigitalProduct](#digitalproduct)

### products.id.digital_products.count.json.get
Count all Product DigitalProducts.


```js
jumpseller.products.id.digital_products.count.json.get({
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

### products.id.digital_products.digital_product_id.json.delete
Delete a Product DigitalProduct.


```js
jumpseller.products.id.digital_products.digital_product_id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0,
  "digital_product_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * digital_product_id **required** `integer`: Id of the Product DigitalProduct

#### Output
* output `string`

### products.id.digital_products.digital_product_id.json.get
Retrieve a single Product DigitalProduct.


```js
jumpseller.products.id.digital_products.digital_product_id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0,
  "digital_product_id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Product
  * digital_product_id **required** `integer`: Id of the Product DigitalProduct

#### Output
* output [DigitalProduct](#digitalproduct)

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
  * items [ProductCustomField](#productcustomfield)

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
* output [Product](#product)

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
* output [Image](#image)

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
Retrieve a single Product Image.


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
* output [Image](#image)

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
* output [ProductOption](#productoption)

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
Retrieve a single Product Option.


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
* output [ProductOption](#productoption)

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
* output [ProductOption](#productoption)

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
* output [ProductOptionValue](#productoptionvalue)

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
Retrieve a single Product Option Value.


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
* output [ProductOptionValue](#productoptionvalue)

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
* output [Promotion](#promotion)

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
* output [Promotion](#promotion)

### shipping_methods.json.get
Retrieve all Store's Shipping Methods.


```js
jumpseller.shipping_methods.json.get({
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
  * items [ShippingMethod](#shippingmethod)

### shipping_methods.json.post
Creates a Shipping Method.


```js
jumpseller.shipping_methods.json.post({
  "login": "",
  "authtoken": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * body **required** [ShippingMethodCreate](#shippingmethodcreate)

#### Output
* output [ShippingMethod](#shippingmethod)

### shipping_methods.id.json.delete
Delete an existing Shipping Method.


```js
jumpseller.shipping_methods.id.json.delete({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Shipping Method

#### Output
* output `string`

### shipping_methods.id.json.get
Retrieve a single Shipping Method.


```js
jumpseller.shipping_methods.id.json.get({
  "login": "",
  "authtoken": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * login **required** `string`: API OAuth login.
  * authtoken **required** `string`: API OAuth token.
  * id **required** `integer`: Id of the Shipping Method

#### Output
* output [ShippingMethod](#shippingmethod)

### shipping_methods.id.json.put
Update a Shipping Method.


```js
jumpseller.shipping_methods.id.json.put({
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
  * id **required** `integer`: Id of the Shipping Method
  * body **required** [ShippingMethodCreate](#shippingmethodcreate)

#### Output
* output [ShippingMethod](#shippingmethod)

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
* output [Tax](#tax)

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

### Attachment
* Attachment `object`
  * attachment [AttachmentFields](#attachmentfields)

### AttachmentEdit
* AttachmentEdit `object`
  * attachment [AttachmentEditFields](#attachmenteditfields)

### AttachmentEditFields
* AttachmentEditFields `object`
  * filename `string`: Filename of the attachment (with file extensison)
  * url `string`: Public accessible URL with the desired file contents. (LIMIT: 100MB)

### AttachmentFields
* AttachmentFields `object`
  * id `integer`: Unique identifier of the attachment
  * url `string`: Private URL of the attachment

### BadParams
* BadParams `object`
  * message `string`

### BillingAddress
* BillingAddress `object`
  * address `string`: Address of the Customer's Billing Address
  * city `string`: City of the Customer's Billing Address
  * country `string`: Country code of the Customer's Billing Address (ISO 3166-1 alpha-2)
  * municipality `string`: Municipality of the Customer's Billing Address
  * name `string`: Name of the Customer's Billing Address
  * postal `string`: Postal code of the Customer's Billing Address
  * region `string`: Region code of the Customer's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/)
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
  * type `string` (values: text, select, input, checkbox, date): Type of the CheckoutCustomField

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

### CustomField
* CustomField `object`
  * custom_field [CustomFieldFields](#customfieldfields)

### CustomFieldEdit
* CustomFieldEdit `object`
  * custom_field [CustomFieldEditFields](#customfieldeditfields)

### CustomFieldEditFields
* CustomFieldEditFields `object`
  * label `string`: Label given to the Custom Field
  * type `string` (values: text, selection, input): Type of the Custom Field
  * values `array`: All the possible Values of the Custom Field (for type 'selection')
    * items `string`

### CustomFieldFields
* CustomFieldFields `object`
  * id `integer`: Unique identifier of the Custom Field
  * label `string`: Label given to the Custom Field
  * type `string` (values: text, selection, input): Type of the Custom Field
  * values `array`: All the possible Values of the Custom Field (for type 'selection')
    * items `string`

### Customer
* Customer `object`
  * customer [CustomerFields](#customerfields)

### CustomerAdditionalField
* CustomerAdditionalField `object`
  * customer_additional_field [CustomerAdditionalFieldFields](#customeradditionalfieldfields)

### CustomerAdditionalFieldEdit
* CustomerAdditionalFieldEdit `object`
  * customer_additional_field [CustomerAdditionalFieldEditFields](#customeradditionalfieldeditfields)

### CustomerAdditionalFieldEditFields
* CustomerAdditionalFieldEditFields `object`
  * checkout_custom_field_id `integer`: Unique identifier of the Checkout Custom Field
  * value `string`: Value of the Customer Additional Field

### CustomerAdditionalFieldFields
* CustomerAdditionalFieldFields `object`
  * area `string`: Area of the Customer Additional Field
  * checkout_custom_field_id `integer`: Unique identifier of the Checkout Custom Field
  * customer_id `integer`: Unique identifier of the Customer
  * id `integer`: Unique identifier of the Customer Additional Field
  * label `string`: Label of the Customer Additional Field
  * value `string`: Value of the Customer Additional Field

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
  * customer_additional_fields `array`
    * items [CustomerAdditionalField](#customeradditionalfield)
  * customer_categories `array`
    * items [CustomerCategory](#customercategory)
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
  * phone `string`: Phone of the Customer
  * shipping_address [ShippingAddress](#shippingaddress)
  * status `string` (values: approved, pending, disabled): Status of the Customer

### CustomerFieldsWithPasswordNoID
* CustomerFieldsWithPasswordNoID `object`
  * billing_address [BillingAddress](#billingaddress)
  * customer_category `array`
    * items `integer`
  * email `string`: Email of the Customer
  * password `string`: Password
  * phone `string`: Phone of the Customer
  * shipping_address [ShippingAddress](#shippingaddress)
  * status `string` (values: approved, pending, disabled): Status of the Customer

### CustomerToCustomerCategory
* CustomerToCustomerCategory `object`
  * email `string`: Email of the Customer
  * id `integer`: Unique identifier of the Customer

### CustomerWithPassword
* CustomerWithPassword `object`
  * customer [CustomerFieldsWithPassword](#customerfieldswithpassword)

### CustomerWithPasswordNoID
* CustomerWithPasswordNoID `object`
  * customer [CustomerFieldsWithPasswordNoID](#customerfieldswithpasswordnoid)

### CustomersToCustomerCategory
* CustomersToCustomerCategory `object`
  * customers `array`
    * items [CustomerToCustomerCategory](#customertocustomercategory)

### DigitalProduct
* DigitalProduct `object`
  * digital_product [DigitalProductFields](#digitalproductfields)

### DigitalProductEdit
* DigitalProductEdit `object`
  * digital_product [DigitalProductEditFields](#digitalproducteditfields)

### DigitalProductEditFields
* DigitalProductEditFields `object`
  * filename `string`: Filename of the digital product (with file extensison)
  * url `string`: Public accessible URL with the desired file contents. (LIMIT: 100MB)

### DigitalProductFields
* DigitalProductFields `object`
  * expiration_seconds `integer`: Time left in seconds before the current private URL expires
  * id `integer`: Unique identifier of the digital product
  * url `string`: Private URL of the digital product

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
  * name `string`: Hook name
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

### JSAppEdit
* JSAppEdit `object`
  * app [JSApp](#jsapp)

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

### OrderAdditionalFields
* OrderAdditionalFields `object`: Additional field of an order
  * label `string`: Label of the additional field
  * value `string`: Value of the additional field

### OrderCreate
* OrderCreate `object`
  * order [OrderCreateFields](#ordercreatefields)

### OrderCreateFields
* OrderCreateFields `object`
  * additional_information `string`: Additional information for the given Order
  * customer [CustomerFields](#customerfields)
  * products `array`
    * items [OrderProduct](#orderproduct)
  * shipment_status `string` (values: requested, in_transit, delivered, failed): Status of the Order Shipping
  * shipping_method_id `integer`: Shipping method e.g. Royal Mail
  * status `string` (values: Abandoned, Canceled, Pending Payment, Paid): Status of the Order
  * tracking_company `string`: Shipping Company used for the given Order
  * tracking_number `string`: Shipping Tracking Number used for the given Order

### OrderEdit
* OrderEdit `object`
  * order [OrderEditFields](#ordereditfields)

### OrderEditFields
* OrderEditFields `object`
  * additional_fields `array`: Array of additional fields for the given Order
    * items [OrderAdditionalFields](#orderadditionalfields)
  * additional_information `string`: Additional information for the given Order
  * shipment_status `string` (values: requested, in_transit, delivered, failed): Status of the Order Shipping
  * status `string` (values: Abandoned, Canceled, Pending Payment, Paid): Status of the Order
  * tracking_company `string`: Shipping Company used for the given Order
  * tracking_number `string`: Shipping Tracking Number used for the given Order

### OrderFields
* OrderFields `object`
  * additional_fields `array`: Array of additional fields for the given Order
    * items [OrderAdditionalFields](#orderadditionalfields)
  * additional_information `string`: Additional information for the given Order
  * billing_address [BillingAddress](#billingaddress)
  * checkout_url `string`: Store Checkout Order URL for the given Order
  * coupons `string`: Promotion Coupons used on the given Order
  * created_at `string`: Order date
  * currency `string`: Currency of the Order
  * customer [Customer](#customer)
  * discount `number`: Discount value for the given Order
  * duplicate_url `string`: Duplicate Order URL for the given Order
  * id `integer`: Unique identifier of the Order
  * payment_information `string`: Payment information for the given Order
  * payment_method_name `string`: Payment Method name used e.g. PayPal
  * products `array`
    * items [OrderProduct](#orderproduct)
  * recovery_url `string`: Recovery Order URL for the given Order
  * shipment_status `string` (values: delivered, requested, in_transit, failed): Shipment Status for Order Fulfillment.
  * shipping `number`: Shipping value for the given Order
  * shipping_address [ShippingAddress](#shippingaddress)
  * shipping_discount `number`: Shipping Discount value for the given order
  * shipping_method_id `integer`: Shipping method e.g. Royal Mail
  * shipping_method_name `string`: Shipping method e.g. Royal Mail
  * shipping_tax `number`: Shipping Tax value for the given order
  * shipping_taxes `array`
    * items [OrderShippingTax](#ordershippingtax)
  * source [TrafficSource](#trafficsource)
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
  * taxes `array`
    * items [OrderProductTax](#orderproducttax)
  * variant_id `integer`: Unique identifier of the original Product Variant
  * weight `number`: Weight of the Order Product

### OrderProductTax
* OrderProductTax `object`
  * fixed `boolean`: False if rate is a percentage and true if rate is monetary
  * id `integer`: Unique identifier of the Order Product Tax
  * name `string`: Name of the category that the tax is associated with or the tax name
  * rate `number`: Tax rate
  * tax_on_product_price `boolean`: False if tax is not included on product price

### OrderShippingTax
* OrderShippingTax `object`
  * country `string`: Code of the associated country
  * fixed `boolean`: False if rate is a percentage and true if rate is monetary
  * id `integer`: Unique identifier of the Order Shipping Tax
  * name `string`: Tax name
  * rate `number`: Tax rate
  * region `string`: Code of the associated region
  * tax_on_shipping_price `boolean`: False if shipping tax is not included on shipping price

### PaymentMethod
* PaymentMethod `object`
  * payment_method [PaymentMethodFields](#paymentmethodfields)

### PaymentMethodFields
* PaymentMethodFields `object`
  * id `integer`: Unique identifier of the Payment Method
  * name `string`: Name of the Payment Method
  * type `string` (values: manual, paypal, pagseguro, moneybookers, webpay_cl, easypay, easypaycc, easypayboleto, ideal_basic, hipay, khipu, mercado_pago, ifthenpay, eupago, stripe, payu, servipag): Type of the Payment Method

### Product
* Product `object`
  * product [ProductFields](#productfields)

### ProductCustomField
* ProductCustomField `object`
  * field [ProductCustomFieldFields](#productcustomfieldfields)

### ProductCustomFieldFields
* ProductCustomFieldFields `object`
  * id `integer`: Unique identifier of the ProductCustomField
  * value `string`: The value for the ProductCustomField

### ProductEdit
* ProductEdit `object`
  * product [ProductEditFields](#producteditfields)

### ProductEditFields
* ProductEditFields `object`
  * barcode `string`: Barcode of the product
  * categories `array`
    * items [CategoryFields](#categoryfields)
  * description `string`: Description of the product
  * diameter `number`: Diameter of the product
  * featured `boolean`: True if the product is featured
  * google_product_category `string`: Category of a Product based on the Google product taxonomy
  * height `number`: Height of the product
  * length `number`: Length of the product
  * meta_description `string`: SEO meta description of the product
  * name **required** `string`: Name of the product
  * package_format `string` (values: box, cylinder): Format the product package
  * page_title `string`: SEO title of the product
  * permalink `string`: Product unique URL path
  * price **required** `number`: Price of the product
  * shipping_required `boolean`: False if the product is digital
  * sku `string`: Stock Keeping Unit of the product
  * status `string` (values: available, not-available, disabled): Status of the product
  * stock `integer`: Quantity in stock for the product
  * stock_unlimited `boolean`: True if the Product has unlimited stock
  * weight `number`: Weight of the product
  * width `number`: Width of the product

### ProductFields
* ProductFields `object`
  * barcode `string`: Barcode of the product
  * categories `array`
    * items [CategoryFields](#categoryfields)
  * created_at `string`: Date of product creation
  * description `string`: Description of the product
  * diameter `number`: Diameter of the product
  * discount `number`: Discount of the product
  * featured `boolean`: True if the product is featured
  * google_product_category `string`: Category of a Product based on the Google product taxonomy
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
  * variants `array`
    * items [Variant](#variant)

### ProductOptionVariantEdit
* ProductOptionVariantEdit `object`
  * name `string`: Name of the product option
  * value `string`: Value of the product option

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
  * customers `string`: Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests')
  * discount_amount_fix `number`: Fixed discount amount of the promotion (requires 'type' param - 'fix')
  * discount_amount_percent `number`: Percentual discount amount of the promotion (requires 'type' param - 'percentage')
  * discount_target `string`: Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)
  * enabled `boolean`: If the promotion is to be temporarily disabled
  * expires_at `string`: Expiration date of the promotion (requires 'lasts' param - 'date')
  * lasts `string`: Controls when the promotion will expire ('none', 'date', 'max_times_used')
  * max_times_used `integer`: Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
  * name `string`: Name of the product
  * products `array`: Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y')
    * items [Id](#id)
  * products_x `array`: Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
    * items [Id](#id)
  * quantity_x `integer`: Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
  * type `string`: Controls if the discount will be a fixed area ('fix', 'percentage')

### PromotionFields
* PromotionFields `object`
  * begins_at `string`: Creation date of the promotion (requires 'lasts' param - 'date')
  * categories `array`: Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')
    * items [Id](#id)
  * code `string`: Code of the promotion
  * condition_price `number`: Minimum order amount to validate the promotion
  * condition_qty `integer`: Minimum quantity of ordered itens to validate the promotion
  * cumulative `boolean`: True if the promotion can be acumulated with others
  * customer_categories `array`: Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories')
    * items [Id](#id)
  * discount_amount_fix `number`: Fixed discount amount of the promotion
  * discount_amount_percent `number`: Percentual discount amount of the promotion
  * discount_target `string`: Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)
  * enabled `boolean`: If the promotion is currently enabled
  * expires_at `string`: Expiration date of the promotion (requires 'lasts' param - 'date')
  * id `integer`: Unique identifier of the product
  * lasts `string`: Controls when the promotion will expire ('none', 'date', 'max_times_used')
  * max_times_used `integer`: Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
  * name `string`: Name of the product
  * products `array`: Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y')
    * items [Id](#id)
  * products_x `array`: Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
    * items [Id](#id)
  * quantity_x `integer`: Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
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
  * country `string`: Country code of the Customer's Shipping Address (ISO 3166-1 alpha-2)
  * municipality `string`: Municipality of the Customer's Shipping Address
  * name `string`: Name of the Customer's Shipping Address
  * postal `string`: Postal code of the Customer's Shipping Address
  * region `string`: Region code of the Customer's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/)
  * surname `string`: Surname of the Customer's Shipping Address

### ShippingMethod
* ShippingMethod `object`
  * shipping_method [ShippingMethodFields](#shippingmethodfields)

### ShippingMethodCreate
* ShippingMethodCreate `object`
  * callback_url `string`: URL that receives the shipping data and returns rates
  * city `string`: City/Municipality name of origin
  * fetch_services_url `string`: URL that returns available shipping services
  * name `string`: Name of the Shipping Method
  * postal `string`: Postal/Zipcode of origin
  * state `string`: State/Region code of origin

### ShippingMethodFields
* ShippingMethodFields `object`
  * callback_url `string`: URL that receives the shipping data and returns rates
  * city `string`: City/Municipality name of origin
  * fetch_services_url `string`: URL that returns available shipping services
  * id `integer`: Unique identifier of the Shipping Method
  * name `string`: Name of the Shipping Method
  * postal `string`: Postal/Zipcode of origin
  * services `array`
    * items [ShippingService](#shippingservice)
  * state `string`: State/Region code of origin
  * type `string` (values: free, tables, correiosbr, correos_chile, chilexpress, flat, ups, external): Type of the Shipping Method

### ShippingService
* ShippingService `object`
  * id `integer`: Unique identifier of the Shipping Service
  * name `string`: Name of the Shipping Service
  * service_code `string`: Code of the Shipping Service

### StatusInvalid
* StatusInvalid `object`
  * message `string`

### Store
* Store `object`
  * address [StoreAddress](#storeaddress)
  * code `string`: Store Code
  * country `string`: Store Country
  * currency `string`: Store Currency
  * email `string`: Store Admin Email
  * hooks_token `string`: Store Hooks Auth token
  * logo `string`: Store Logo URL
  * name `string`: Store Name
  * timezone `string`: Store Timezone
  * url `string`: Store URL
  * weight_unit `string`: Store Weight Unit

### StoreAddress
* StoreAddress `object`
  * address `string`: Address of the Store's Address
  * city `string`: City of the Store's Address
  * country `string`: Country of the Store's Address (ISO 3166-1 alpha-2)
  * country_code `string`: Country code of the Store's Address
  * postal `string`: Postal code of the Store's Address
  * region `string`: Region of the Store's Address
  * region_code `string`: Region code of the Store's Address

### Tax
* Tax `object`
  * tax [TaxFields](#taxfields)

### TaxEdit
* TaxEdit `object`
  * tax [TaxEditFields](#taxeditfields)

### TaxEditFields
* TaxEditFields `object`
  * category_id `integer`: Unique identifier of the category of the Tax
  * country `string`: Country where the Tax applies
  * fixed `boolean`: True if the tax has a fixed valued amount
  * name `string`: Name that identifies tax
  * region `string`: Region where the Tax applies
  * shipping `boolean`: True if the tax should be applied to shipping costs
  * tax `number`: Tax value for the given Tax

### TaxFields
* TaxFields `object`
  * category_id `integer`: Unique identifier of the category of the Tax
  * country `string`: Country name where the Tax applies
  * fixed `boolean`: True if the tax has a fixed valued amount
  * id `integer`: Unique identifier of the Tax
  * name `string`: Name that identifies tax
  * region `string`: Region name where the Tax applies
  * shipping `boolean`: True if the tax should be applied to shipping costs
  * tax_amount `number`: Tax value for the given Tax

### TrafficSource
* TrafficSource `object`
  * campaign `string`: The campaign that referred the customer to the checkout
  * medium `string`: The medium that referred the customer to the checkout
  * referral_code `string`: The code that referred the customer to the checkout
  * referral_url `string`: The website that referred the customer to the checkout
  * source_name `string`: Where the checkout originated
  * user_agent `string`: User agent of the referred request to checkout

### Variant
* Variant `object`
  * variant [VariantFields](#variantfields)

### VariantEdit
* VariantEdit `object`
  * variant [VariantEditFields](#varianteditfields)

### VariantEditFields
* VariantEditFields `object`
  * image_id `integer`: Unique identifier of the product image to associate with this variant
  * options `array`
    * items [ProductOptionVariantEdit](#productoptionvariantedit)
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the Product's Variant
  * stock `integer`: Quantity in stock for the Product's Variant
  * stock_unlimited `boolean`: True if the Product's Variant has unlimited stock

### VariantFields
* VariantFields `object`
  * id `integer`: Unique identifier of the product
  * image [ImageFields](#imagefields)
  * options `array`
    * items [ProductOptionVariantEdit](#productoptionvariantedit)
  * price `number`: Price of the product
  * sku `string`: Stock Keeping Unit of the Product's Variant
  * stock `integer`: Quantity in stock for the Product's Variant
  * stock_unlimited `boolean`: True if the Product's Variant has unlimited stock


