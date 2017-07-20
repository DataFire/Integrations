# @datafire/apacta

Client library for Apacta

## Installation and Usage
```bash
npm install --save datafire @datafire/apacta
```

```js
let datafire = require('datafire');
let apacta = require('@datafire/apacta').actions;

let account = {
  X-Auth-Token: "",
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    apacta: account,
  }
})


apacta.wall_posts.post({}, context).then(data => {
  console.log(data);
})
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


### cities.city_id.get
Get details about one city


```js
apacta.cities.city_id.get({
  "city_id": ""
}, context)
```

#### Parameters
* city_id (string) **required**

### clocking_records.get
Get a list of clocking records


```js
apacta.clocking_records.get({}, context)
```


### clocking_records.post
Create clocking record for authenticated user


```js
apacta.clocking_records.post({
  "clocking_record": {}
}, context)
```

#### Parameters
* clocking_record (object) **required**

### clocking_records.checkout.post
Checkout active clocking record for authenticated user


```js
apacta.clocking_records.checkout.post(null, context)
```


### clocking_records.clocking_record_id.delete
Delete a clocking record


```js
apacta.clocking_records.clocking_record_id.delete({
  "clocking_record_id": ""
}, context)
```

#### Parameters
* clocking_record_id (string) **required**

### clocking_records.clocking_record_id.get
Details of 1 clocking_record


```js
apacta.clocking_records.clocking_record_id.get({
  "clocking_record_id": ""
}, context)
```

#### Parameters
* clocking_record_id (string) **required**

### clocking_records.clocking_record_id.put
Edit a clocking record


```js
apacta.clocking_records.clocking_record_id.put({
  "clocking_record_id": ""
}, context)
```

#### Parameters
* clocking_record_id (string) **required**

### contact_types.get
Get list of contact types supported in Apacta


```js
apacta.contact_types.get(null, context)
```


### contact_types.contact_type_id.get
Get details about one contact type


```js
apacta.contact_types.contact_type_id.get({
  "contact_type_id": ""
}, context)
```

#### Parameters
* contact_type_id (string) **required**

### contacts.get
Get a list of contacts


```js
apacta.contacts.get({}, context)
```


### contacts.post
Add a new contact


```js
apacta.contacts.post({}, context)
```


### contacts.contact_id.delete
Delete a contact


```js
apacta.contacts.contact_id.delete({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### contacts.contact_id.get
Details of 1 contact


```js
apacta.contacts.contact_id.get({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### contacts.contact_id.put
Edit a contact


```js
apacta.contacts.contact_id.put({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### currencies.get
Get list of currencies supported in Apacta


```js
apacta.currencies.get(null, context)
```


### currencies.currency_id.get
Get details about one currency


```js
apacta.currencies.currency_id.get({
  "currency_id": ""
}, context)
```

#### Parameters
* currency_id (string) **required**

### employee_hours.get
Used to retrieve details about the logged in user's hours


```js
apacta.employee_hours.get({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* date_from (string) **required** - Date formatted as Y-m-d (2016-06-28)
* date_to (string) **required** - Date formatted as Y-m-d (2016-06-28)

### expense_files.get
Show list of expense files


```js
apacta.expense_files.get({}, context)
```


### expense_files.post
Add file to expense


```js
apacta.expense_files.post({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required**
* description (string)

### expense_files.expense_file_id.delete
Delete file


```js
apacta.expense_files.expense_file_id.delete({
  "expense_file_id": ""
}, context)
```

#### Parameters
* expense_file_id (string) **required**

### expense_files.expense_file_id.get
Show file


```js
apacta.expense_files.expense_file_id.get({
  "expense_file_id": ""
}, context)
```

#### Parameters
* expense_file_id (string) **required**

### expense_files.expense_file_id.put
Edit file


```js
apacta.expense_files.expense_file_id.put({
  "expense_file_id": ""
}, context)
```

#### Parameters
* expense_file_id (string) **required**

### expense_lines.get
Show list of expense lines


```js
apacta.expense_lines.get({}, context)
```


### expense_lines.post
Add line to expense


```js
apacta.expense_lines.post({}, context)
```


### expense_lines.expense_line_id.delete
Delete expense line


```js
apacta.expense_lines.expense_line_id.delete({
  "expense_line_id": ""
}, context)
```

#### Parameters
* expense_line_id (string) **required**

### expense_lines.expense_line_id.get
Show expense line


```js
apacta.expense_lines.expense_line_id.get({
  "expense_line_id": ""
}, context)
```

#### Parameters
* expense_line_id (string) **required**

### expense_lines.expense_line_id.put
Edit expense line


```js
apacta.expense_lines.expense_line_id.put({
  "expense_line_id": ""
}, context)
```

#### Parameters
* expense_line_id (string) **required**

### expenses.get
Show list of expenses


```js
apacta.expenses.get({}, context)
```


### expenses.post
Add line to expense


```js
apacta.expenses.post({}, context)
```


### expenses.expense_id.delete
Delete expense


```js
apacta.expenses.expense_id.delete({
  "expense_id": ""
}, context)
```

#### Parameters
* expense_id (string) **required**

### expenses.expense_id.get
Show expense


```js
apacta.expenses.expense_id.get({
  "expense_id": ""
}, context)
```

#### Parameters
* expense_id (string) **required**

### expenses.expense_id.put
Edit expense


```js
apacta.expenses.expense_id.put({
  "expense_id": ""
}, context)
```

#### Parameters
* expense_id (string) **required**

### form_field_types.get
Get list of form field types


```js
apacta.form_field_types.get({}, context)
```


### form_field_types.form_field_type_id.get
Get details about single `FormField`


```js
apacta.form_field_types.form_field_type_id.get({
  "form_field_type_id": ""
}, context)
```

#### Parameters
* form_field_type_id (string) **required**

### form_fields.post
Add a new field to a `Form`


```js
apacta.form_fields.post({}, context)
```


### form_fields.form_field_id.get
Get details about single `FormField`


```js
apacta.form_fields.form_field_id.get({
  "form_field_id": ""
}, context)
```

#### Parameters
* form_field_id (string) **required**

### form_templates.get
Get array of form_templates for your company


```js
apacta.form_templates.get({}, context)
```


### form_templates.form_template_id.get
View one form template


```js
apacta.form_templates.form_template_id.get({
  "form_template_id": ""
}, context)
```

#### Parameters
* form_template_id (string) **required**

### forms.get
Retrieve array of forms


```js
apacta.forms.get({}, context)
```


### forms.post
Used to add a form into the system


```js
apacta.forms.post({}, context)
```


### forms.form_id.delete
You can only delete the forms that you've submitted yourself


```js
apacta.forms.form_id.delete({
  "form_id": ""
}, context)
```

#### Parameters
* form_id (string) **required**

### forms.form_id.get
View form


```js
apacta.forms.form_id.get({
  "form_id": ""
}, context)
```

#### Parameters
* form_id (string) **required**

### forms.form_id.put
Edit a form


```js
apacta.forms.form_id.put({
  "form_id": ""
}, context)
```

#### Parameters
* form_id (string) **required**

### invoice_lines.get
View list of invoice lines


```js
apacta.invoice_lines.get({}, context)
```


### invoice_lines.post
Add invoice


```js
apacta.invoice_lines.post({}, context)
```


### invoice_lines.invoice_line_id.delete
Delete invoice line


```js
apacta.invoice_lines.invoice_line_id.delete({
  "invoice_line_id": ""
}, context)
```

#### Parameters
* invoice_line_id (string) **required**

### invoice_lines.invoice_line_id.get
View invoice line


```js
apacta.invoice_lines.invoice_line_id.get({
  "invoice_line_id": ""
}, context)
```

#### Parameters
* invoice_line_id (string) **required**

### invoice_lines.invoice_line_id.put
Edit invoice line


```js
apacta.invoice_lines.invoice_line_id.put({
  "invoice_line_id": ""
}, context)
```

#### Parameters
* invoice_line_id (string) **required**

### invoices.get
View list of invoices


```js
apacta.invoices.get({}, context)
```


### invoices.post
Add invoice


```js
apacta.invoices.post({}, context)
```


### invoices.invoice_id.delete
Delete invoice


```js
apacta.invoices.invoice_id.delete({
  "invoice_id": ""
}, context)
```

#### Parameters
* invoice_id (string) **required**

### invoices.invoice_id.get
View invoice


```js
apacta.invoices.invoice_id.get({
  "invoice_id": ""
}, context)
```

#### Parameters
* invoice_id (string) **required**

### invoices.invoice_id.put
Edit invoice


```js
apacta.invoices.invoice_id.put({
  "invoice_id": ""
}, context)
```

#### Parameters
* invoice_id (string) **required**

### materials.get
View list of all materials


```js
apacta.materials.get({}, context)
```


### materials.material_id.delete
Delete material


```js
apacta.materials.material_id.delete({
  "material_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**

### materials.material_id.get
View material


```js
apacta.materials.material_id.get({
  "material_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**

### materials.material_id.put
Edit material


```js
apacta.materials.material_id.put({
  "material_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**

### materials.material_id.rentals.get
Show list of rentals for specific material


```js
apacta.materials.material_id.rentals.get({
  "material_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**

### materials.material_id.rentals.post
Add material rental


```js
apacta.materials.material_id.rentals.post({
  "material_id": ""
}, context)
```

#### Parameters
* material_rental (object)
* material_id (string) **required**

### materials.material_id.rentals.checkout.post
Checkout material rental


```js
apacta.materials.material_id.rentals.checkout.post({
  "material_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**
* material_rental (object)

### materials.material_id.rentals.material_rental_id.delete
Delete rental for material


```js
apacta.materials.material_id.rentals.material_rental_id.delete({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**
* material_rental_id (string) **required**

### materials.material_id.rentals.material_rental_id.get
Show rental foor materi


```js
apacta.materials.material_id.rentals.material_rental_id.get({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**
* material_rental_id (string) **required**

### materials.material_id.rentals.material_rental_id.post
Add material


```js
apacta.materials.material_id.rentals.material_rental_id.post({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Parameters
* material (object)
* material_id (string) **required**
* material_rental_id (string) **required**

### materials.material_id.rentals.material_rental_id.put
Edit material rental


```js
apacta.materials.material_id.rentals.material_rental_id.put({
  "material_id": "",
  "material_rental_id": ""
}, context)
```

#### Parameters
* material_id (string) **required**
* material_rental_id (string) **required**

### ping.get
Check if API is up and API key works


```js
apacta.ping.get(null, context)
```


### products.get
List products


```js
apacta.products.get({}, context)
```


### products.post
Add new product


```js
apacta.products.post({}, context)
```


### products.product_id.delete
Delete a product


```js
apacta.products.product_id.delete({
  "product_id": ""
}, context)
```

#### Parameters
* product_id (string) **required**

### products.product_id.get
View single product


```js
apacta.products.product_id.get({
  "product_id": ""
}, context)
```

#### Parameters
* product_id (string) **required**

### products.product_id.put
Edit a product


```js
apacta.products.product_id.put({
  "product_id": ""
}, context)
```

#### Parameters
* product_id (string) **required**

### project_statuses.get
Get list of project statuses


```js
apacta.project_statuses.get(null, context)
```


### project_statuses.project_status_id.get
Get details about one contact type


```js
apacta.project_statuses.project_status_id.get({
  "project_status_id": ""
}, context)
```

#### Parameters
* project_status_id (string) **required**

### projects.get
View list of projects


```js
apacta.projects.get({}, context)
```


### projects.post
Add a project


```js
apacta.projects.post({}, context)
```


### projects.project_id.delete
Delete a project


```js
apacta.projects.project_id.delete({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.get
View specific project


```js
apacta.projects.project_id.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.put
Edit a project


```js
apacta.projects.project_id.put({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.files.get
Used to show files uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.files.file_id.delete
Delete file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.delete({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* file_id (string) **required**

### projects.project_id.files.file_id.get
Show file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.get({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* file_id (string) **required**

### projects.project_id.files.file_id.put
Edit file uploaded to a project from wall post or form


```js
apacta.projects.project_id.files.file_id.put({
  "project_id": "",
  "file_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* file_id (string) **required**

### projects.project_id.project_files.get
Returns files belonging to the project, not uploaded from wall post or form


```js
apacta.projects.project_id.project_files.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.project_files.post
Add project file to projects


```js
apacta.projects.project_id.project_files.post({
  "project_id": "",
  "file": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* file (string) **required**

### projects.project_id.project_files.project_file_id.delete
Delete project file


```js
apacta.projects.project_id.project_files.project_file_id.delete({
  "project_file_id": "",
  "project_id": ""
}, context)
```

#### Parameters
* project_file_id (string) **required**
* project_id (string) **required**

### projects.project_id.project_files.project_file_id.get
Show project file


```js
apacta.projects.project_id.project_files.project_file_id.get({
  "project_id": "",
  "project_file_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* project_file_id (string) **required**

### projects.project_id.project_files.project_file_id.put
Edit project file


```js
apacta.projects.project_id.project_files.project_file_id.put({
  "project_id": "",
  "project_file_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* project_file_id (string) **required**

### projects.project_id.users.get
Show list of users added to project


```js
apacta.projects.project_id.users.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**

### projects.project_id.users.post
Add user to project


```js
apacta.projects.project_id.users.post({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* user_id (object)

### projects.project_id.users.user_id.delete
Delete user from project


```js
apacta.projects.project_id.users.user_id.delete({
  "user_id": "",
  "project_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* project_id (string) **required**

### projects.project_id.users.user_id.get
View specific user assigned to project


```js
apacta.projects.project_id.users.user_id.get({
  "user_id": "",
  "project_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* project_id (string) **required**

### stock_locations.get
List stock_locations


```js
apacta.stock_locations.get({}, context)
```


### stock_locations.post
Add new stock_locations


```js
apacta.stock_locations.post({}, context)
```


### stock_locations.location_id.delete
Delete location


```js
apacta.stock_locations.location_id.delete({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required**

### stock_locations.location_id.get
View single location


```js
apacta.stock_locations.location_id.get({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required**

### stock_locations.location_id.put
Edit location


```js
apacta.stock_locations.location_id.put({
  "location_id": ""
}, context)
```

#### Parameters
* location_id (string) **required**

### time_entries.get
List time entries


```js
apacta.time_entries.get({}, context)
```


### time_entries.post
Add new time entry


```js
apacta.time_entries.post({}, context)
```


### time_entries.time_entry_id.delete
Delete time entry


```js
apacta.time_entries.time_entry_id.delete({
  "time_entry_id": ""
}, context)
```

#### Parameters
* time_entry_id (string) **required**

### time_entries.time_entry_id.get
View time entry


```js
apacta.time_entries.time_entry_id.get({
  "time_entry_id": ""
}, context)
```

#### Parameters
* time_entry_id (string) **required**

### time_entries.time_entry_id.put
Edit time entry


```js
apacta.time_entries.time_entry_id.put({
  "time_entry_id": ""
}, context)
```

#### Parameters
* time_entry_id (string) **required**

### time_entry_intervals.get
List possible time entry intervals


```js
apacta.time_entry_intervals.get(null, context)
```


### time_entry_intervals.time_entry_interval_id.get
View time entry interval


```js
apacta.time_entry_intervals.time_entry_interval_id.get({
  "time_entry_interval_id": ""
}, context)
```

#### Parameters
* time_entry_interval_id (string) **required**

### time_entry_types.get
List time entries types


```js
apacta.time_entry_types.get(null, context)
```


### time_entry_types.post
Add new time entry type


```js
apacta.time_entry_types.post({}, context)
```


### time_entry_types.time_entry_type_id.delete
Delete time entry type


```js
apacta.time_entry_types.time_entry_type_id.delete({
  "time_entry_type_id": ""
}, context)
```

#### Parameters
* time_entry_type_id (string) **required**

### time_entry_types.time_entry_type_id.get
View time entry type


```js
apacta.time_entry_types.time_entry_type_id.get({
  "time_entry_type_id": ""
}, context)
```

#### Parameters
* time_entry_type_id (string) **required**

### time_entry_types.time_entry_type_id.put
Edit time entry type


```js
apacta.time_entry_types.time_entry_type_id.put({
  "time_entry_type_id": ""
}, context)
```

#### Parameters
* time_entry_type_id (string) **required**

### time_entry_unit_types.get
List possible time entry unit types


```js
apacta.time_entry_unit_types.get(null, context)
```


### time_entry_unit_types.time_entry_unit_type_id.get
View time entry unit type


```js
apacta.time_entry_unit_types.time_entry_unit_type_id.get({
  "time_entry_unit_type_id": ""
}, context)
```

#### Parameters
* time_entry_unit_type_id (string) **required**

### time_entry_value_types.get
List possible time entry value types


```js
apacta.time_entry_value_types.get(null, context)
```


### time_entry_value_types.time_entry_value_type_id.get
View time entry value type


```js
apacta.time_entry_value_types.time_entry_value_type_id.get({
  "time_entry_value_type_id": ""
}, context)
```

#### Parameters
* time_entry_value_type_id (string) **required**

### users.get
Get list of users in company


```js
apacta.users.get({}, context)
```


### users.post
Add user to company


```js
apacta.users.post({}, context)
```


### users.user_id.delete
Delete user


```js
apacta.users.user_id.delete({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**

### users.user_id.get
View user


```js
apacta.users.user_id.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**

### users.user_id.put
Edit user


```js
apacta.users.user_id.put({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**

### wall_comments.post
Add wall comment


```js
apacta.wall_comments.post({}, context)
```


### wall_comments.wall_comment_id.get
View wall comment


```js
apacta.wall_comments.wall_comment_id.get({
  "wall_comment_id": ""
}, context)
```

#### Parameters
* wall_comment_id (string) **required**

### wall_posts.get
View list of wall posts


```js
apacta.wall_posts.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required**
* user_id (string)

### wall_posts.post
Add a wall post


```js
apacta.wall_posts.post({}, context)
```


### wall_posts.wall_post_id.get
View wall post


```js
apacta.wall_posts.wall_post_id.get({
  "wall_post_id": ""
}, context)
```

#### Parameters
* wall_post_id (string) **required**

### wall_posts.wall_post_id.wall_comments.get
See wall comments to a wall post


```js
apacta.wall_posts.wall_post_id.wall_comments.get({
  "wall_post_id": ""
}, context)
```

#### Parameters
* wall_post_id (string) **required**

