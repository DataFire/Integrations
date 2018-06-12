# @datafire/apacta

Client library for Apacta

## Installation and Usage
```bash
npm install --save @datafire/apacta
```
```js
let apacta = require('@datafire/apacta').create({
  "X-Auth-Token": "",
  api_key: ""
});

apacta.wall_posts.post({}).then(data => {
  console.log(data);
});
```

## Description

API for a tool to craftsmen used to register working hours, material usage and quality assurance.    
# Endpoint
The endpoint `https://app.apacta.com/api/v1` should be used to communicate with the API. API access is only allowed with SSL encrypted connection (https).
# Authentication
URL query authentication with an API key is used, so appending `?api_key={api_key}` to the URL where `{api_key}` is found within Apacta settings is used for authentication
# Pagination
If the endpoint returns a `pagination` object it means the endpoint supports pagination - currently it's only possible to change pages with `?page={page_number}` but implementing custom page sizes are on the road map.


# Search/filter
Is experimental but implemented in some cases - see the individual endpoints' docs for further explanation.
# Ordering
Is currently experimental, but on some endpoints it's implemented on URL querys so eg. to order Invoices by `invoice_number` appending `?sort=Invoices.invoice_number&direction=desc` would sort the list descending by the value of `invoice_number`.
# Associations
Is currently implemented on an experimental basis where you can append eg. `?include=Contacts,Projects`  to the `/api/v1/invoices/` endpoint to embed `Contact` and `Project` objects directly.
# Project Files
Currently project files can be retrieved from two endpoints. `/projects/{project_id}/files` handles files uploaded from wall posts or forms. `/projects/{project_id}/project_files` allows uploading and showing files, not belonging to specific form or wall post.
# Errors/Exceptions
## 422 (Validation)
Write something about how the `errors` object contains keys with the properties that failes validation like:
```
  {
      "success": false,
      "data": {
          "code": 422,
          "url": "/api/v1/contacts?api_key=5523be3b-30ef-425d-8203-04df7caaa93a",
          "message": "A validation error occurred",
          "errorCount": 1,
          "errors": {
              "contact_types": [ ## Property name that failed validation
                  "Contacts must have at least one contact type" ## Message with further explanation
              ]
          }
      }
  }
```
## Code examples
Running examples of how to retrieve the 5 most recent forms registered and embed the details of the User that made the form, and eventual products contained in the form
### Swift
```
  
```
### Java
#### OkHttp
```
  OkHttpClient client = new OkHttpClient();
  
  Request request = new Request.Builder()
    .url("https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5")
    .get()
    .addHeader("x-auth-token", "{INSERT_YOUR_TOKEN}")
    .addHeader("accept", "application/json")
    .build();
  
  Response response = client.newCall(request).execute();
```
#### Unirest
```
  HttpResponse<String> response = Unirest.get("https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5")
    .header("x-auth-token", "{INSERT_YOUR_TOKEN}")
    .header("accept", "application/json")
    .asString();
```
### Javascript
#### Native
```
  var data = null;
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5");
  xhr.setRequestHeader("x-auth-token", "{INSERT_YOUR_TOKEN}");
  xhr.setRequestHeader("accept", "application/json");
  
  xhr.send(data);
```
#### jQuery
```
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5",
    "method": "GET",
    "headers": {
      "x-auth-token": "{INSERT_YOUR_TOKEN}",
      "accept": "application/json",
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
```
#### NodeJS (Request)
```
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://app.apacta.com/api/v1/forms',
    qs: 
     { extended: 'true',
       sort: 'Forms.created',
       direction: 'DESC',
       include: 'Products,CreatedBy',
       limit: '5' },
    headers: 
     { accept: 'application/json',
       'x-auth-token': '{INSERT_YOUR_TOKEN}' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });

```
### Python 3
```
  import http.client
  
  conn = http.client.HTTPSConnection("app.apacta.com")
  
  payload = ""
  
  headers = {
      'x-auth-token': "{INSERT_YOUR_TOKEN}",
      'accept': "application/json",
      }
  
  conn.request("GET", "/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5", payload, headers)
  
  res = conn.getresponse()
  data = res.read()
  
  print(data.decode("utf-8"))
```
### C#
#### RestSharp
```
  var client = new RestClient("https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5");
  var request = new RestRequest(Method.GET);
  request.AddHeader("accept", "application/json");
  request.AddHeader("x-auth-token", "{INSERT_YOUR_TOKEN}");
  IRestResponse response = client.Execute(request);    
```
### Ruby
```
  require 'uri'
  require 'net/http'
  
  url = URI("https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5")
  
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  
  request = Net::HTTP::Get.new(url)
  request["x-auth-token"] = '{INSERT_YOUR_TOKEN}'
  request["accept"] = 'application/json'
  
  response = http.request(request)
  puts response.read_body
```
### PHP (HttpRequest)
```
  <?php

  $request = new HttpRequest();
  $request->setUrl('https://app.apacta.com/api/v1/forms');
  $request->setMethod(HTTP_METH_GET);
  
  $request->setQueryData(array(
    'extended' => 'true',
    'sort' => 'Forms.created',
    'direction' => 'DESC',
    'include' => 'Products,CreatedBy',
    'limit' => '5'
  ));
  
  $request->setHeaders(array(
    'accept' => 'application/json',
    'x-auth-token' => '{INSERT_YOUR_TOKEN}'
  ));
  
  try {
    $response = $request->send();
  
    echo $response->getBody();
  } catch (HttpException $ex) {
    echo $ex;
  }
```
### Shell (cURL)
```

  $ curl --request GET --url 'https://app.apacta.com/api/v1/forms?extended=true&sort=Forms.created&direction=DESC&include=Products%2CCreatedBy&limit=5' --header 'accept: application/json' --header 'x-auth-token: {INSERT_YOUR_TOKEN}'
  
```

## Actions

### cities.get
Get list of cities supported in Apacta


```js
apacta.cities.get({}, context)
```

#### Input
* input `object`
  * zip_code `string`: Used to search for a city with specific zip code

#### Output
* output `object`
  * data `array`
    * items [City](#city)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### cities.city_id.get
Get details about one city


```js
apacta.cities.city_id.get({
  "city_id": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`

#### Output
* output `object`
  * data [City](#city)
  * success `boolean`

### clocking_records.get
Get a list of clocking records


```js
apacta.clocking_records.get({}, context)
```

#### Input
* input `object`
  * active `boolean`: Used to search for active clocking records

#### Output
* output `object`
  * data `array`
    * items [ClockingRecord](#clockingrecord)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### clocking_records.post
Create clocking record for authenticated user


```js
apacta.clocking_records.post({
  "clocking_record": {}
}, context)
```

#### Input
* input `object`
  * clocking_record **required** `object`
    * checkin_latitude `string`
    * checkin_longitude `string`
    * checkout_latitude `string`
    * checkout_longitude `string`
    * project_id `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### clocking_records.checkout.post
Checkout active clocking record for authenticated user


```js
apacta.clocking_records.checkout.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * success `boolean`

### clocking_records.clocking_record_id.delete
Delete a clocking record


```js
apacta.clocking_records.clocking_record_id.delete({
  "clocking_record_id": ""
}, context)
```

#### Input
* input `object`
  * clocking_record_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### clocking_records.clocking_record_id.get
Details of 1 clocking_record


```js
apacta.clocking_records.clocking_record_id.get({
  "clocking_record_id": ""
}, context)
```

#### Input
* input `object`
  * clocking_record_id **required** `string`

#### Output
* output `object`
  * data [ClockingRecord](#clockingrecord)
  * success `boolean`

### clocking_records.clocking_record_id.put
Edit a clocking record


```js
apacta.clocking_records.clocking_record_id.put({
  "clocking_record_id": ""
}, context)
```

#### Input
* input `object`
  * clocking_record_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### companies.get
Get a list of companies


```js
apacta.companies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [Company](#company)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### companies.company_id.get
Details of 1 company


```js
apacta.companies.company_id.get({
  "company_id": ""
}, context)
```

#### Input
* input `object`
  * company_id **required** `string`

#### Output
* output `object`
  * data [Company](#company)
  * success `boolean`

### companies.company_id.integration_feature_settings.get
Get a list of integration feature settings


```js
apacta.companies.company_id.integration_feature_settings.get({
  "company_id": ""
}, context)
```

#### Input
* input `object`
  * company_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items [IntegrationFeatureSetting](#integrationfeaturesetting)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### companies.company_id.integration_feature_settings.integration_feature_setting_id.get
Show details of 1 integration feature setting


```js
apacta.companies.company_id.integration_feature_settings.integration_feature_setting_id.get({
  "company_id": "",
  "integration_feature_setting_id": ""
}, context)
```

#### Input
* input `object`
  * company_id **required** `string`
  * integration_feature_setting_id **required** `string`

#### Output
* output `object`
  * data [IntegrationFeatureSetting](#integrationfeaturesetting)
  * success `boolean`

### contact_types.get
Get list of contact types supported in Apacta


```js
apacta.contact_types.get({}, context)
```

#### Input
* input `object`
  * identifier `string`: Search for specific identifier value

#### Output
* output `object`
  * data `array`
    * items [ContactType](#contacttype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### contact_types.contact_type_id.get
Get details about one contact type


```js
apacta.contact_types.contact_type_id.get({
  "contact_type_id": ""
}, context)
```

#### Input
* input `object`
  * contact_type_id **required** `string`

#### Output
* output `object`
  * data [ContactType](#contacttype)
  * success `boolean`

### contacts.get
Get a list of contacts


```js
apacta.contacts.get({}, context)
```

#### Input
* input `object`
  * name `string`: Used to search for a contact with a specific name
  * cvr `string`: Search for values in CVR field
  * ean `string`: Search for values in EAN field
  * erp_id `string`: Search for values in ERP id field
  * contact_type `string`: Used to show only contacts with with one specific `ContactType`
  * city `string`: Used to show only contacts with with one specific `City`

#### Output
* output `object`
  * data `array`
    * items [Contact](#contact)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### contacts.post
Add a new contact


```js
apacta.contacts.post({}, context)
```

#### Input
* input `object`
  * contact `object`
    * address `string`: Street address
    * city_id `string`
    * contact_types `object`
      * _ids `array`
        * items `string`
    * cvr `string`
    * description `string`
    * email `string`
    * erp_id `string`: If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
    * name `string`
    * phone `string`: Format like eg. `28680133` or `046158971404`
    * website `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### contacts.contact_id.delete
Delete a contact


```js
apacta.contacts.contact_id.delete({
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * contact_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### contacts.contact_id.get
Details of 1 contact


```js
apacta.contacts.contact_id.get({
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * contact_id **required** `string`

#### Output
* output `object`
  * data [Contact](#contact)
  * success `boolean`

### contacts.contact_id.put
Edit a contact


```js
apacta.contacts.contact_id.put({
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * contact_id **required** `string`
  * contact `object`
    * address `string`: Street address
    * city_id `string`
    * contact_types `object`
      * _ids `array`
        * items `string`
    * cvr `string`
    * description `string`
    * email `string`
    * erp_id `string`: If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
    * name `string`
    * phone `string`: Format like eg. `28680133` or `046158971404`
    * website `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### currencies.get
Get list of currencies supported in Apacta


```js
apacta.currencies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [Currency](#currency)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### currencies.currency_id.get
Get details about one currency


```js
apacta.currencies.currency_id.get({
  "currency_id": ""
}, context)
```

#### Input
* input `object`
  * currency_id **required** `string`

#### Output
* output `object`
  * data [Currency](#currency)
  * success `boolean`

### employee_hours.get
Used to retrieve details about the logged in user's hours


```js
apacta.employee_hours.get({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * date_from **required** `string`: Date formatted as Y-m-d (2016-06-28)
  * date_to **required** `string`: Date formatted as Y-m-d (2016-06-28)

#### Output
* output `object`
  * data `array`: One element per form in the period
    * items `object`
      * form_date `string`: Y-m-d formatted
      * form_id `string`
      * project_name `string`
      * total_hours `integer`: The amount of hours in seconds
      * working_description `string`: Trimmed at 50 characters
      * working_description_full `string`: Full work description (if available)
  * success `boolean`

### expense_files.get
Show list of expense files


```js
apacta.expense_files.get({}, context)
```

#### Input
* input `object`
  * created_by_id `string`
  * expense_id `string`

#### Output
* output `object`
  * data `array`
    * items [ExpenseFile](#expensefile)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### expense_files.post
Add file to expense


```js
apacta.expense_files.post({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`
  * description `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### expense_files.expense_file_id.delete
Delete file


```js
apacta.expense_files.expense_file_id.delete({
  "expense_file_id": ""
}, context)
```

#### Input
* input `object`
  * expense_file_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### expense_files.expense_file_id.get
Show file


```js
apacta.expense_files.expense_file_id.get({
  "expense_file_id": ""
}, context)
```

#### Input
* input `object`
  * expense_file_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### expense_files.expense_file_id.put
Edit file


```js
apacta.expense_files.expense_file_id.put({
  "expense_file_id": ""
}, context)
```

#### Input
* input `object`
  * expense_file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### expense_lines.get
Show list of expense lines


```js
apacta.expense_lines.get({}, context)
```

#### Input
* input `object`
  * created_by_id `string`
  * currency_id `string`
  * expense_id `string`

#### Output
* output `object`
  * data `array`
    * items [ExpenseLine](#expenseline)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### expense_lines.post
Add line to expense


```js
apacta.expense_lines.post({}, context)
```

#### Input
* input `object`
  * expense_line `object`
    * buying_price `number`
    * currency_id `string`
    * expense_id `string`
    * quantity `integer`
    * selling_price `number`
    * text `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### expense_lines.expense_line_id.delete
Delete expense line


```js
apacta.expense_lines.expense_line_id.delete({
  "expense_line_id": ""
}, context)
```

#### Input
* input `object`
  * expense_line_id **required** `string`

#### Output
* output `object`
  * data [ExpenseLine](#expenseline)
  * success `boolean`

### expense_lines.expense_line_id.get
Show expense line


```js
apacta.expense_lines.expense_line_id.get({
  "expense_line_id": ""
}, context)
```

#### Input
* input `object`
  * expense_line_id **required** `string`

#### Output
* output `object`
  * data [ExpenseLine](#expenseline)
  * success `boolean`

### expense_lines.expense_line_id.put
Edit expense line


```js
apacta.expense_lines.expense_line_id.put({
  "expense_line_id": ""
}, context)
```

#### Input
* input `object`
  * expense_line_id **required** `string`

#### Output
* output `object`
  * data [ExpenseLine](#expenseline)
  * success `boolean`

### expenses.get
Show list of expenses


```js
apacta.expenses.get({}, context)
```

#### Input
* input `object`
  * created_by_id `string`
  * company_id `string`
  * contact_id `string`
  * project_id `string`
  * gt_created `string`: Created after date
  * lt_created `string`: Created before date

#### Output
* output `object`
  * data `array`
    * items [Expense](#expense)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### expenses.post
Add line to expense


```js
apacta.expenses.post({}, context)
```

#### Input
* input `object`
  * expense_line `object`
    * contact_id `string`
    * currency_id `string`
    * delivery_date `string`
    * description `string`
    * project_id `string`
    * reference `string`
    * short_text `string`
    * supplier_invoice_number `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### expenses.expense_id.delete
Delete expense


```js
apacta.expenses.expense_id.delete({
  "expense_id": ""
}, context)
```

#### Input
* input `object`
  * expense_id **required** `string`

#### Output
* output `object`
  * data [Expense](#expense)
  * success `boolean`

### expenses.expense_id.get
Show expense


```js
apacta.expenses.expense_id.get({
  "expense_id": ""
}, context)
```

#### Input
* input `object`
  * expense_id **required** `string`

#### Output
* output `object`
  * data [Expense](#expense)
  * success `boolean`

### expenses.expense_id.put
Edit expense


```js
apacta.expenses.expense_id.put({
  "expense_id": ""
}, context)
```

#### Input
* input `object`
  * expense_id **required** `string`

#### Output
* output `object`
  * data [Expense](#expense)
  * success `boolean`

### expenses.expense_id.original_files.get
Show list of all OIOUBL files for the expense


```js
apacta.expenses.expense_id.original_files.get({
  "expense_id": ""
}, context)
```

#### Input
* input `object`
  * expense_id **required** `string`

#### Output
* output `object`
  * success `boolean`

### expenses.expense_id.original_files.file_id.get
Show OIOUBL file


```js
apacta.expenses.expense_id.original_files.file_id.get({
  "expense_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * expense_id **required** `string`
  * file_id **required** `string`

#### Output
* output `object`
  * success `boolean`

### form_field_types.get
Get list of form field types


```js
apacta.form_field_types.get({}, context)
```

#### Input
* input `object`
  * name `string`: Used to filter on the `name` of the form_fields
  * identifier `string`: Used to filter on the `identifier` of the form_fields

#### Output
* output `object`
  * data `array`
    * items [FormFieldType](#formfieldtype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### form_field_types.form_field_type_id.get
Get details about single `FormField`


```js
apacta.form_field_types.form_field_type_id.get({
  "form_field_type_id": ""
}, context)
```

#### Input
* input `object`
  * form_field_type_id **required** `string`

#### Output
* output `object`
  * data [FormFieldType](#formfieldtype)
  * success `boolean`

### form_fields.post
Add a new field to a `Form`


```js
apacta.form_fields.post({}, context)
```

#### Input
* input `object`
  * form_field `object`
    * comment `string`
    * content_value `string`
    * file_id `string`
    * form_field_type_id `string`
    * form_id `string`
    * form_template_field_id `string`
    * placement `integer`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### form_fields.form_field_id.get
Get details about single `FormField`


```js
apacta.form_fields.form_field_id.get({
  "form_field_id": ""
}, context)
```

#### Input
* input `object`
  * form_field_id **required** `string`

#### Output
* output `object`
  * data [FormField](#formfield)
  * success `boolean`

### form_templates.get
Get array of form_templates for your company


```js
apacta.form_templates.get({}, context)
```

#### Input
* input `object`
  * name `string`: Used to filter on the `name` of the form_templates
  * identifier `string`: Used to filter on the `identifier` of the form_templates
  * pdf_template_identifier `string`: Used to filter on the `pdf_template_identifier` of the form_templates
  * description `string`: Used to filter on the `description` of the form_templates

#### Output
* output `object`
  * data `array`
    * items [FormTemplate](#formtemplate)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### form_templates.form_template_id.get
View one form template


```js
apacta.form_templates.form_template_id.get({
  "form_template_id": ""
}, context)
```

#### Input
* input `object`
  * form_template_id **required** `string`

#### Output
* output `object`
  * data [FormTemplate](#formtemplate)
  * success `boolean`

### forms.get
Retrieve array of forms


```js
apacta.forms.get({}, context)
```

#### Input
* input `object`
  * extended `string` (values: true, false): Used to have extended details from the forms from the `Form`'s `FormFields`
  * date_from `string`: Used in conjunction with `date_to` to only show forms within these dates - format like `2016-28-05`
  * date_to `string`: Used in conjunction with `date_from` to only show forms within these dates - format like `2016-28-30`
  * project_id `string`: Used to filter on the `project_id` of the forms
  * created_by_id `string`: Used to filter on the `created_by_id` of the forms
  * form_template_id `string`: Used to filter on the `form_template_id` of the forms

#### Output
* output `object`
  * data `array`
    * items [Form](#form)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### forms.post
Used to add a form into the system


```js
apacta.forms.post({}, context)
```

#### Input
* input `object`
  * form `object`
    * form_template_id **required** `string`
    * project_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### forms.form_id.delete
You can only delete the forms that you've submitted yourself


```js
apacta.forms.form_id.delete({
  "form_id": ""
}, context)
```

#### Input
* input `object`
  * form_id **required** `string`

#### Output
*Output schema unknown*

### forms.form_id.get
View form


```js
apacta.forms.form_id.get({
  "form_id": ""
}, context)
```

#### Input
* input `object`
  * form_id **required** `string`

#### Output
* output `object`
  * data [Form](#form)
  * success `boolean`

### forms.form_id.put
Edit a form


```js
apacta.forms.form_id.put({
  "form_id": ""
}, context)
```

#### Input
* input `object`
  * form_id **required** `string`

#### Output
*Output schema unknown*

### invoice_lines.get
View list of invoice lines


```js
apacta.invoice_lines.get({}, context)
```

#### Input
* input `object`
  * invoice_id `string`
  * product_id `string`
  * user_id `string`
  * name `string`
  * discount_text `string`

#### Output
* output `object`
  * data `array`
    * items [InvoiceLine](#invoiceline)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### invoice_lines.post
Add invoice


```js
apacta.invoice_lines.post({}, context)
```

#### Input
* input `object`
  * invoice_line `object`
    * description `string`
    * discount_percent `integer`
    * discount_text `string`
    * invoice_id `string`
    * name `string`
    * product_id `string`
    * quantity `integer`
    * selling_price `number`
    * user_id `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### invoice_lines.invoice_line_id.delete
Delete invoice line


```js
apacta.invoice_lines.invoice_line_id.delete({
  "invoice_line_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_line_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### invoice_lines.invoice_line_id.get
View invoice line


```js
apacta.invoice_lines.invoice_line_id.get({
  "invoice_line_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_line_id **required** `string`

#### Output
* output `object`
  * data [InvoiceLine](#invoiceline)
  * success `boolean`

### invoice_lines.invoice_line_id.put
Edit invoice line


```js
apacta.invoice_lines.invoice_line_id.put({
  "invoice_line_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_line_id **required** `string`
  * invoice_line `object`
    * description `string`
    * discount_percent `integer`
    * discount_text `string`
    * invoice_id `string`
    * name `string`
    * product_id `string`
    * quantity `integer`
    * selling_price `number`
    * user_id `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### invoices.get
View list of invoices


```js
apacta.invoices.get({}, context)
```

#### Input
* input `object`
  * contact_id `string`: Used to filter on the `contact_id` of the invoices
  * project_id `string`: Used to filter on the `project_id` of the invoices
  * invoice_number `string`: Used to filter on the `invoice_number` of the invoices
  * offer_number `string`
  * is_draft `integer` (values: 0, 1)
  * is_offer `integer` (values: 0, 1)
  * is_locked `integer` (values: 0, 1)
  * date_from `string`
  * date_to `string`
  * issued_date `string`

#### Output
* output `object`
  * data `array`
    * items [Invoice](#invoice)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### invoices.post
Add invoice


```js
apacta.invoices.post({}, context)
```

#### Input
* input `object`
  * invoice `object`
    * contact_id `string`
    * created_or_modified_gte `string`
    * date_from `string`
    * date_to `string`
    * erp_id `string`
    * erp_payment_term_id `string`
    * invoice_number `integer`
    * is_draft `boolean`
    * is_locked `boolean`
    * is_offer `boolean`
    * issued_date `string`
    * message `string`
    * offer_number `integer`
    * payment_due_date `string`
    * payment_term_id `string`
    * project_id `string`
    * reference `string`
    * vat_percent `integer`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### invoices.invoice_id.delete
Delete invoice


```js
apacta.invoices.invoice_id.delete({
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### invoices.invoice_id.get
View invoice


```js
apacta.invoices.invoice_id.get({
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_id **required** `string`

#### Output
* output `object`
  * data [Invoice](#invoice)
  * success `boolean`

### invoices.invoice_id.put
Edit invoice


```js
apacta.invoices.invoice_id.put({
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * invoice_id **required** `string`
  * invoice `object`
    * contact_id `string`
    * date_from `string`
    * date_to `string`
    * erp_id `string`
    * erp_payment_term_id `string`
    * invoice_number `integer`
    * is_draft `boolean`
    * is_locked `boolean`
    * is_offer `boolean`
    * issued_date `string`
    * message `string`
    * offer_number `integer`
    * payment_due_date `string`
    * payment_term_id `string`
    * project_id `string`
    * reference `string`
    * vat_percent `integer`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### mass_messages_users.get
View list of mass messages for specific user


```js
apacta.mass_messages_users.get({}, context)
```

#### Input
* input `object`
  * is_read `boolean`: Used to filter on the `is_read` of the mass messages

#### Output
* output `object`
  * data `array`
    * items [MassMessagesUser](#massmessagesuser)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### mass_messages_users.mass_messages_user_id.get
View mass message


```js
apacta.mass_messages_users.mass_messages_user_id.get({
  "mass_messages_user_id": ""
}, context)
```

#### Input
* input `object`
  * mass_messages_user_id **required** `string`

#### Output
* output `object`
  * data [MassMessagesUser](#massmessagesuser)
  * success `boolean`

### mass_messages_users.mass_messages_user_id.put
Edit mass message


```js
apacta.mass_messages_users.mass_messages_user_id.put({
  "mass_messages_user_id": ""
}, context)
```

#### Input
* input `object`
  * mass_messages_user_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### materials.get
View list of all materials


```js
apacta.materials.get({}, context)
```

#### Input
* input `object`
  * barcode `string`: Used to filter on the `barcode` of the materials
  * name `string`: Used to filter on the `name` of the materials
  * project_id `string`: Used to find materials used in specific project by `project_id`
  * currently_rented `boolean`: Used to find currently rented materials

#### Output
* output `object`
  * data `array`
    * items [Material](#material)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### materials.material_id.delete
Delete material


```js
apacta.materials.material_id.delete({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### materials.material_id.get
View material


```js
apacta.materials.material_id.get({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`

#### Output
* output `object`
  * data [Material](#material)
  * success `boolean`

### materials.material_id.put
Edit material


```js
apacta.materials.material_id.put({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### materials.material_id.rentals.get
Show list of rentals for specific material


```js
apacta.materials.material_id.rentals.get({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items [MaterialRental](#materialrental)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### materials.material_id.rentals.post
Add material rental


```js
apacta.materials.material_id.rentals.post({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_rental `object`
    * form_id `string`
    * from_date `string`
    * is_invoiced `string`
    * material_id `string`
    * project_id `string`
    * quantity `number`
    * to_date `string`
  * material_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### materials.material_id.rentals.checkout.post
Checkout material rental


```js
apacta.materials.material_id.rentals.checkout.post({
  "material_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`
  * material_rental `object`
    * form_id `string`
    * material_rental_id `string`
    * to_date `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### materials.material_id.rentals.material_rental_id.delete
Delete rental for material


```js
apacta.materials.material_id.rentals.material_rental_id.delete({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`
  * material_rental_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### materials.material_id.rentals.material_rental_id.get
Show rental foor materi


```js
apacta.materials.material_id.rentals.material_rental_id.get({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`
  * material_rental_id **required** `string`

#### Output
* output `object`
  * data [MaterialRental](#materialrental)
  * success `boolean`

### materials.material_id.rentals.material_rental_id.post
Add material


```js
apacta.materials.material_id.rentals.material_rental_id.post({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Input
* input `object`
  * material `object`
    * barcode `string`
    * billing_cysle `string` (values: hourly, daily, weekly)
    * cost_price `number`
    * description `string`
    * is_single_usage `boolean`
    * name `string`
    * selling_price `number`
  * material_id **required** `string`
  * material_rental_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### materials.material_id.rentals.material_rental_id.put
Edit material rental


```js
apacta.materials.material_id.rentals.material_rental_id.put({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Input
* input `object`
  * material_id **required** `string`
  * material_rental_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### payment_term_types.get
Get a list of payment term types


```js
apacta.payment_term_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [PaymentTermType](#paymenttermtype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### payment_term_types.payment_term_type_id.get
Details of 1 payment term type


```js
apacta.payment_term_types.payment_term_type_id.get({
  "payment_term_type_id": ""
}, context)
```

#### Input
* input `object`
  * payment_term_type_id **required** `string`

#### Output
* output `object`
  * data [PaymentTermType](#paymenttermtype)
  * success `boolean`

### payment_terms.get
Get a list of payment terms


```js
apacta.payment_terms.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [PaymentTerm](#paymentterm)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### payment_terms.payment_term_id.get
Details of 1 payment term


```js
apacta.payment_terms.payment_term_id.get({
  "payment_term_id": ""
}, context)
```

#### Input
* input `object`
  * payment_term_id **required** `string`

#### Output
* output `object`
  * data [PaymentTerm](#paymentterm)
  * success `boolean`

### ping.get
Check if API is up and API key works


```js
apacta.ping.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * status `string`

### products.get
List products


```js
apacta.products.get({}, context)
```

#### Input
* input `object`
  * name `string`: Used to filter on the `name` of the products
  * product_number `string`: Used to filter on the `product_number` of the products
  * barcode `string`: Used to filter on the `barcode` of the products

#### Output
* output `object`
  * data `array`
    * items [Product](#product)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### products.post
Add new product


```js
apacta.products.post({}, context)
```

#### Input
* input `object`
  * product `object`
    * barcode `string`
    * buying_price `number`
    * description `string`
    * erp_id `string`
    * name **required** `string`
    * product_number `string`
    * selling_price `number`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### products.product_id.delete
Delete a product


```js
apacta.products.product_id.delete({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### products.product_id.get
View single product


```js
apacta.products.product_id.get({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`

#### Output
* output `object`
  * data [Product](#product)
  * success `boolean`

### products.product_id.put
Edit a product


```js
apacta.products.product_id.put({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### project_statuses.get
Get list of project statuses


```js
apacta.project_statuses.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [ProjectStatus](#projectstatus)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### project_statuses.project_status_id.get
Get details about one contact type


```js
apacta.project_statuses.project_status_id.get({
  "project_status_id": ""
}, context)
```

#### Input
* input `object`
  * project_status_id **required** `string`

#### Output
* output `object`
  * data [ProjectStatus](#projectstatus)
  * success `boolean`

### projects.get
View list of projects


```js
apacta.projects.get({}, context)
```

#### Input
* input `object`
  * show_all `boolean`: Unless this is set to `true` only open projects will be shown
  * contact_id `string`: Used to filter on the `contact_id` of the projects
  * project_status_id `string`: Used to filter on the `project_status_id` of the projects
  * project_status_ids `array`: Used to filter on the `project_status_id` of the projects (match any of the provided values)
  * name `string`: Used to search on the `name` of the projects
  * erp_id `string`: Used to search on the `erp_id` of the projects
  * start_time_gte `string`: Show projects with start time after than this value
  * start_time_lte `string`: Show projects with start time before this value
  * start_time_eq `string`: Show only projects with start time on specific date

#### Output
* output `object`
  * data `array`
    * items [Project](#project)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### projects.post
Add a project


```js
apacta.projects.post({}, context)
```

#### Input
* input `object`
  * project `object`
    * contact_id `string`
    * description `string`
    * erp_project_id `string`
    * erp_task_id `string`
    * name **required** `string`
    * project_status_id `string`
    * start_time `string`
    * street_name `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### projects.project_id.delete
Delete a project


```js
apacta.projects.project_id.delete({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * success `boolean`

### projects.project_id.get
View specific project


```js
apacta.projects.project_id.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`

#### Output
* output `object`
  * data [Project](#project)
  * success `boolean`

### projects.project_id.put
Edit a project


```js
apacta.projects.project_id.put({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * project `object`
    * contact_id `string`
    * description `string`
    * erp_project_id `string`
    * erp_task_id `string`
    * name **required** `string`
    * project_status_id `string`
    * start_time `string`
    * street_name `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### projects.project_id.files.get
Used to show files uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### projects.project_id.files.file_id.delete
Delete file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.delete({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.files.file_id.get
Show file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.get({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.files.file_id.put
Edit file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.put({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.project_files.get
Returns files belonging to the project, not uploaded from wall post or form


```js
apacta.projects.project_id.project_files.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `string`
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### projects.project_id.project_files.post
Add project file to projects


```js
apacta.projects.project_id.project_files.post({
  "project_id": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * file **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### projects.project_id.project_files.project_file_id.delete
Delete project file


```js
apacta.projects.project_id.project_files.project_file_id.delete({
  "project_file_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_file_id **required** `string`
  * project_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.project_files.project_file_id.get
Show project file


```js
apacta.projects.project_id.project_files.project_file_id.get({
  "project_id": "",
  "project_file_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * project_file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.project_files.project_file_id.put
Edit project file


```js
apacta.projects.project_id.project_files.project_file_id.put({
  "project_id": "",
  "project_file_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * project_file_id **required** `string`

#### Output
* output `object`
  * data `object`
  * success `boolean`

### projects.project_id.users.get
Show list of users added to project


```js
apacta.projects.project_id.users.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items [User](#user)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### projects.project_id.users.post
Add user to project


```js
apacta.projects.project_id.users.post({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * user_id `object`
    * user_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### projects.project_id.users.user_id.delete
Delete user from project


```js
apacta.projects.project_id.users.user_id.delete({
  "user_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`
  * project_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### projects.project_id.users.user_id.get
View specific user assigned to project


```js
apacta.projects.project_id.users.user_id.get({
  "user_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`
  * project_id **required** `string`

#### Output
* output `object`
  * data [User](#user)
  * success `boolean`

### stock_locations.get
List stock_locations


```js
apacta.stock_locations.get({}, context)
```

#### Input
* input `object`
  * name `string`: Used to filter on the `name` of the stock_locations

#### Output
* output `object`
  * data `array`
    * items [StockLocation](#stocklocation)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### stock_locations.post
Add new stock_locations


```js
apacta.stock_locations.post({}, context)
```

#### Input
* input `object`
  * location `object`
    * name **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### stock_locations.location_id.delete
Delete location


```js
apacta.stock_locations.location_id.delete({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### stock_locations.location_id.get
View single location


```js
apacta.stock_locations.location_id.get({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`

#### Output
* output `object`
  * data [StockLocation](#stocklocation)
  * success `boolean`

### stock_locations.location_id.put
Edit location


```js
apacta.stock_locations.location_id.put({
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * location_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### time_entries.get
List time entries


```js
apacta.time_entries.get({}, context)
```

#### Input
* input `object`
  * user_id `string`
  * form_id `string`
  * project_id `string`
  * gt_from_time `string`
  * lt_from_time `string`
  * gt_to_time `string`
  * lt_to_time `string`
  * lt_sum `string`
  * gt_sum `string`

#### Output
* output `object`
  * data `array`
    * items [TimeEntry](#timeentry)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### time_entries.post
Add new time entry


```js
apacta.time_entries.post({}, context)
```

#### Input
* input `object`
  * time_entry `object`
    * form_id `string`
    * from_time `string`
    * is_all_day `boolean`
    * project_id `string`
    * sum `integer`: Amount of seconds - should only be included when using is_all_day, otherwise will be calculated from from_time and to_time
    * time_entry_type_id **required** `string`
    * to_time `string`
    * user_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### time_entries.time_entry_id.delete
Delete time entry


```js
apacta.time_entries.time_entry_id.delete({
  "time_entry_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### time_entries.time_entry_id.get
View time entry


```js
apacta.time_entries.time_entry_id.get({
  "time_entry_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_id **required** `string`

#### Output
* output `object`
  * data [TimeEntry](#timeentry)
  * success `boolean`

### time_entries.time_entry_id.put
Edit time entry


```js
apacta.time_entries.time_entry_id.put({
  "time_entry_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### time_entry_intervals.get
List possible time entry intervals


```js
apacta.time_entry_intervals.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [TimeEntryInterval](#timeentryinterval)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### time_entry_intervals.time_entry_interval_id.get
View time entry interval


```js
apacta.time_entry_intervals.time_entry_interval_id.get({
  "time_entry_interval_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_interval_id **required** `string`

#### Output
* output `object`
  * data [TimeEntryInterval](#timeentryinterval)
  * success `boolean`

### time_entry_types.get
List time entries types


```js
apacta.time_entry_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [TimeEntryType](#timeentrytype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### time_entry_types.post
Add new time entry type


```js
apacta.time_entry_types.post({}, context)
```

#### Input
* input `object`
  * time_entry_type `object`
    * description `string`
    * name **required** `string`
    * time_entry_interval_id **required** `string`
    * time_entry_value_type_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### time_entry_types.time_entry_type_id.delete
Delete time entry type


```js
apacta.time_entry_types.time_entry_type_id.delete({
  "time_entry_type_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_type_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### time_entry_types.time_entry_type_id.get
View time entry type


```js
apacta.time_entry_types.time_entry_type_id.get({
  "time_entry_type_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_type_id **required** `string`

#### Output
* output `object`
  * data [TimeEntryType](#timeentrytype)
  * success `boolean`

### time_entry_types.time_entry_type_id.put
Edit time entry type


```js
apacta.time_entry_types.time_entry_type_id.put({
  "time_entry_type_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_type_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### time_entry_unit_types.get
List possible time entry unit types


```js
apacta.time_entry_unit_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [TimeEntryUnitType](#timeentryunittype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### time_entry_unit_types.time_entry_unit_type_id.get
View time entry unit type


```js
apacta.time_entry_unit_types.time_entry_unit_type_id.get({
  "time_entry_unit_type_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_unit_type_id **required** `string`

#### Output
* output `object`
  * data [TimeEntryUnitType](#timeentryunittype)
  * success `boolean`

### time_entry_value_types.get
List possible time entry value types


```js
apacta.time_entry_value_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [TimeEntryValueType](#timeentryvaluetype)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### time_entry_value_types.time_entry_value_type_id.get
View time entry value type


```js
apacta.time_entry_value_types.time_entry_value_type_id.get({
  "time_entry_value_type_id": ""
}, context)
```

#### Input
* input `object`
  * time_entry_value_type_id **required** `string`

#### Output
* output `object`
  * data [TimeEntryValueType](#timeentryvaluetype)
  * success `boolean`

### users.get
Get list of users in company


```js
apacta.users.get({}, context)
```

#### Input
* input `object`
  * first_name `string`: Used to filter on the `first_name` of the users
  * last_name `string`: Used to filter on the `last_name` of the users
  * email `string`: Used to filter on the `email` of the users
  * stock_location_id `string`: Used to filter on the `stock_location_id` of the users

#### Output
* output `object`
  * data `array`
    * items [User](#user)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### users.post
Add user to company


```js
apacta.users.post({}, context)
```

#### Input
* input `object`
  * user `object`
    * city_id `string`
    * cost_price `number`: Cost of salaries
    * email `string`
    * extra_price `number`: Additional cost on this employee (pension, vacation etc.)
    * first_name **required** `string`
    * is_active `boolean`
    * language_id `string`
    * last_name `string`
    * mobile `string`
    * mobile_countrycode `string`
    * password `string`
    * phone `string`
    * phone_countrycode `string`
    * receive_form_mails `boolean`: If `true` the employee will receive an email receipt of every form submitted
    * sale_price `number`: The price this employee costs per hour when working
    * street_name `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### users.user_id.delete
Delete user


```js
apacta.users.user_id.delete({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### users.user_id.get
View user


```js
apacta.users.user_id.get({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`

#### Output
* output `object`
  * data [User](#user)
  * success `boolean`

### users.user_id.put
Edit user


```js
apacta.users.user_id.put({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
  * success `boolean`

### wall_comments.post
Add wall comment


```js
apacta.wall_comments.post({}, context)
```

#### Input
* input `object`
  * wall_comment `object`
    * message **required** `string`
    * wall_post_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### wall_comments.wall_comment_id.get
View wall comment


```js
apacta.wall_comments.wall_comment_id.get({
  "wall_comment_id": ""
}, context)
```

#### Input
* input `object`
  * wall_comment_id **required** `string`

#### Output
* output `object`
  * data [WallComment](#wallcomment)
  * success `boolean`

### wall_posts.get
View list of wall posts


```js
apacta.wall_posts.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`
  * user_id `string`

#### Output
* output `object`
  * data `array`
    * items [WallPost](#wallpost)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`

### wall_posts.post
Add a wall post


```js
apacta.wall_posts.post({}, context)
```

#### Input
* input `object`
  * wall_post `object`
    * message **required** `string`
    * project_id **required** `string`

#### Output
* output `object`
  * data `object`
    * id `string`
  * success `boolean`

### wall_posts.wall_post_id.get
View wall post


```js
apacta.wall_posts.wall_post_id.get({
  "wall_post_id": ""
}, context)
```

#### Input
* input `object`
  * wall_post_id **required** `string`

#### Output
* output `object`
  * data [WallPost](#wallpost)
  * success `boolean`

### wall_posts.wall_post_id.wall_comments.get
See wall comments to a wall post


```js
apacta.wall_posts.wall_post_id.wall_comments.get({
  "wall_post_id": ""
}, context)
```

#### Input
* input `object`
  * wall_post_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items [WallComment](#wallcomment)
  * pagination [PaginationDetails](#paginationdetails)
  * success `boolean`



## Definitions

### City
* City `object`
  * created [created](#created)
  * deleted [deleted](#deleted)
  * id `string`
  * modified [modified](#modified)
  * name `string`
  * zip_code `integer`

### ClockingRecord
* ClockingRecord `object`
  * checked_in `string`
  * checked_out `string`
  * checkin_latitude `string`
  * checkin_longitude `string`
  * checkout_latitude `string`
  * checkout_longitude `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * id `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * project_id `string`
  * user_id `string`

### Company
* Company `object`
  * city_id `string`
  * contact_person_id `string`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * cvr `string`
  * deleted [deleted](#deleted)
  * expired `string`
  * file_id `string`
  * id `string`
  * invoice_email `string`
  * language_id `string`
  * modified [modified](#modified)
  * name `string`
  * next_invoice_number `integer`
  * phone `string`: Format like eg. `28680133` or `046158971404`
  * phone_countrycode `string`: Format like eg. `45` or `49`
  * receive_form_mails `string`
  * street_name `string`
  * vat_percent `integer`
  * website `string`

### Contact
* Contact `object`
  * address `string`: Street address
  * city_id `string`
  * company_id `string`: Only filled out if this represents another company within Apacta (used for partners)
  * created [created](#created)
  * created_by_id `string`: Read-only
  * cvr `string`
  * deleted [deleted](#deleted)
  * description `string`
  * email `string`
  * erp_id `string`: If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
  * id `string`
  * modified [modified](#modified)
  * name `string`
  * phone `string`: Format like eg. `28680133` or `046158971404`
  * website `string`

### ContactType
* ContactType `object`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string` (values: client, partner, supplier): One of 3 values
  * modified [modified](#modified)
  * name `string`

### Currency
* Currency `object`
  * created [created](#created)
  * currency_sign `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * modified [modified](#modified)
  * name `string`

### ErrorNotFound
* ErrorNotFound `object`
  * data `object`
    * code `integer`: The HTTP status code
    * message `string`: Error message
    * url `string`: The url from which this originated
  * success `boolean`

### ErrorValidation
* ErrorValidation `object`
  * data `object`
    * code `integer`: The HTTP status code
    * errorCount `integer`: The amount of validation errors
    * errors `object`: Object that contains details information about which properties failed validation and what rules they failed.
    * message `string`: Error message
    * url `string`: The url from which this originated
  * success `boolean`

### Expense
* Expense `object`
  * company_id `string`: Read-only
  * contact_id `string`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * currency_id `string`
  * deleted [deleted](#deleted)
  * delivery_date `string`
  * description `string`
  * id `string`: Read-only
  * modified [modified](#modified)
  * project_id `string`
  * reference `string`
  * short_text `string`
  * supplier_invoice_number `string`

### ExpenseFile
* ExpenseFile `object`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * deleted [deleted](#deleted)
  * description `string`
  * expense_id `string`
  * file `string`: File's name
  * file_extension `string`
  * file_original_name `string`
  * file_size `string`: File size in bytes
  * file_type `string`: File's MIME type
  * file_url `string`: Read-only
  * id `string`: Read-only
  * modified [modified](#modified)

### ExpenseLine
* ExpenseLine `object`
  * buying_price `number`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * currency_id `string`
  * deleted [deleted](#deleted)
  * expense_id `string`
  * id `string`: Read-only
  * modified [modified](#modified)
  * quantity `integer`
  * selling_price `number`
  * text `string`

### Form
* Form `object`
  * approved_by_id `string`
  * company_id `string`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * deleted [deleted](#deleted)
  * form_date `string`
  * form_template_id `string`
  * id `string`: Read-only
  * is_draft `boolean`
  * is_invoiced `boolean`
  * is_shared `boolean`
  * mass_form_id `string`
  * modified [modified](#modified)
  * project_id `string`

### FormField
* FormField `object`
  * comment `string`
  * content_value `string`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * deleted [deleted](#deleted)
  * file_id `string`
  * form_field_type_id `string`
  * form_id `string`
  * form_template_field_id `string`
  * id `string`: Read-only
  * modified [modified](#modified)
  * placement `integer`

### FormFieldType
* FormFieldType `object`
  * created [created](#created)
  * created_by_id `string`: Read-only
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`: Read-only
  * identifier `string`
  * modified [modified](#modified)
  * name `string`

### FormTemplate
* FormTemplate `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * form_category_id `string`
  * form_overview_category_id `string`
  * id `string`
  * identifier `string`
  * is_active `boolean`
  * modified [modified](#modified)
  * name `string`
  * pdf_template_identifier `string`

### IntegrationFeatureSetting
* IntegrationFeatureSetting `object`
  * created [created](#created)
  * created_by_id `string`
  * default_value `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * integration_feature_id `string`
  * is_custom_setting `boolean`
  * modified [modified](#modified)
  * name `string`

### Invoice
* Invoice `object`
  * company_id `string`
  * contact_id `string`
  * created [created](#created)
  * created_by_id `string`
  * currency_id `string`
  * date_from `string`
  * date_to `string`
  * deleted [deleted](#deleted)
  * erp_id `string`
  * erp_payment_term_id `string`
  * eu_customer `boolean`
  * gross_payment `number`
  * id `string`
  * integration_id `string`
  * invoice_number `integer`
  * is_draft `boolean`
  * is_locked `boolean`
  * is_offer `boolean`
  * issued_date `string`
  * message `string`
  * modified [modified](#modified)
  * net_payment `number`
  * offer_number `integer`
  * payment_due_date `string`
  * payment_term_id `string`
  * project_id `string`
  * reference `string`
  * vat_percent `integer`

### InvoiceLine
* InvoiceLine `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * discount_percent `integer`
  * discount_text `string`
  * id `string`
  * invoice_id `string`
  * modified [modified](#modified)
  * name `string`
  * product_id `string`
  * quantity `integer`
  * selling_price `number`
  * user_id `string`

### MassMessage
* MassMessage `object`
  * company_id `string`
  * content `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * id `string`
  * modified [modified](#modified)

### MassMessagesUser
* MassMessagesUser `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * id `string`
  * is_read `boolean`
  * is_sent_email `boolean`
  * mass_message [MassMessage](#massmessage)
  * mass_message_id `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * user_id `string`

### Material
* Material `object`
  * barcode `string`
  * billing_cycle `string`
  * company_id `string`
  * cost_price `number`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * is_single_usage `boolean`
  * modified [modified](#modified)
  * modified_by_id `string`
  * name `string`
  * selling_price `number`

### MaterialRental
* MaterialRental `object`
  * amount `number`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * from_date `string`
  * id `string`
  * is_invoiced `string`
  * material_id `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * project_id `string`
  * quantity `number`
  * to_date `string`

### PaginationDetails
* PaginationDetails `object`
  * count `integer`
  * current_page `string`
  * has_next_page `boolean`
  * has_prev_page `boolean`
  * limit `integer`
  * page_count `string`

### PaymentTerm
* PaymentTerm `object`
  * created [created](#created)
  * created_by_id `string`
  * days_of_credit `integer`
  * deleted [deleted](#deleted)
  * id `string`
  * modified [modified](#modified)
  * payment_term_type_id `string`

### PaymentTermType
* PaymentTermType `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * modified [modified](#modified)
  * name `string`

### Product
* Product `object`
  * barcode `string`
  * buying_price `number`
  * company_id `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * erp_id `string`
  * id `string`
  * modified [modified](#modified)
  * name `string`
  * product_number `string`
  * selling_price `number`

### Project
* Project `object`
  * contact_id `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * erp_project_id `string`
  * erp_task_id `string`
  * id **required** `string`
  * modified [modified](#modified)
  * name **required** `string`
  * project_status_id `string`
  * start_time `string`
  * street_name `string`

### ProjectStatus
* ProjectStatus `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string` (values: ready_for_billing, open, closed): One of 3 values
  * modified [modified](#modified)
  * name `string`

### StockLocation
* StockLocation `object`
  * company_id `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * id `string`
  * modified [modified](#modified)
  * name `string`

### TimeEntry
* TimeEntry `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * form_id `string`
  * from_time `string`
  * id `string`
  * is_all_day `boolean`
  * modified [modified](#modified)
  * modified_by_id `string`
  * project_id `string`
  * sum `integer`: Amount of seconds
  * time_entry_type_id `string`
  * to_time `string`
  * user_id `string`

### TimeEntryInterval
* TimeEntryInterval `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * name `string`

### TimeEntryType
* TimeEntryType `object`
  * company_id `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * name `string`
  * time_entry_interval_id `string`
  * time_entry_value_type_id `string`

### TimeEntryUnitType
* TimeEntryUnitType `object`
  * abbreviation `string`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * name `string`

### TimeEntryValueType
* TimeEntryValueType `object`
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * description `string`
  * id `string`
  * identifier `string`
  * modified [modified](#modified)
  * modified_by_id `string`
  * name `string`
  * time_entry_unit_type_id `string`

### User
* User `object`
  * api_key `string`
  * city_id `string`
  * company_id `string`
  * cost_price `number`: Cost of salaries
  * created [created](#created)
  * created_by_id `string`
  * deleted [deleted](#deleted)
  * email `string`
  * extra_price `number`: Additional cost on this employee (pension, vacation etc.)
  * first_name `string`
  * full_name `string`: READ-ONLY
  * id `string`
  * is_active `boolean`
  * language_id `string`
  * last_name `string`
  * mobile `string`
  * mobile_countrycode `string`
  * modified [modified](#modified)
  * password `string`
  * phone `string`
  * phone_countrycode `string`
  * receive_form_mails `boolean`: If `true` the employee will receive an email receipt of every form submitted
  * sale_price `number`: The price this employee costs per hour when working
  * street_name `string`
  * website `string`

### WallComment
* WallComment `object`
  * created [created](#created)
  * deleted [deleted](#deleted)
  * id `string`
  * message `string`
  * modified [modified](#modified)
  * user_id `string`
  * wall_post_id `string`

### WallPost
* WallPost `object`
  * created [created](#created)
  * deleted [deleted](#deleted)
  * id `string`
  * message `string`
  * modified [modified](#modified)
  * project_id `string`
  * user_id `string`

### created
* created `string`: READ-ONLY

### deleted
* deleted `string`: READ-ONLY - only present if it's an deleted object

### modified
* modified `string`: READ-ONLY


