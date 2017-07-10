# @datafire/apacta
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

## Operation: cities.get
Get list of cities supported in Apacta

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "zip_code": {
      "type": "string",
      "description": "Used to search for a city with specific zip code"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/City"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: cities.city_id.get
Get details about one city

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "city_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "city_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/City"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.get
Get a list of clocking records

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "active": {
      "type": "boolean",
      "description": "Used to search for active clocking records"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/ClockingRecord"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.post
Create clocking record for authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "clocking_record": {
      "properties": {
        "checkin_latitude": {
          "type": "string"
        },
        "checkin_longitude": {
          "type": "string"
        },
        "checkout_latitude": {
          "type": "string"
        },
        "checkout_longitude": {
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "clocking_record"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.checkout.post
Checkout active clocking record for authenticated user

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.clocking_record_id.delete
Delete a clocking record

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "clocking_record_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "clocking_record_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.clocking_record_id.get
Details of 1 clocking_record

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "clocking_record_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "clocking_record_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ClockingRecord"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: clocking_records.clocking_record_id.put
Edit a clocking record

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "clocking_record_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "clocking_record_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contact_types.get
Get list of contact types supported in Apacta

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ContactType"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contact_types.contact_type_id.get
Get details about one contact type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_type_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ContactType"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contacts.get
Get a list of contacts

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Used to search for a contact with a specific name"
    },
    "cvr": {
      "type": "string",
      "description": "Search for values in CVR field"
    },
    "ean": {
      "type": "string",
      "description": "Search for values in EAN field"
    },
    "erp_id": {
      "type": "string",
      "description": "Search for values in ERP id field"
    },
    "contact_type": {
      "type": "string",
      "format": "uuid",
      "description": "Used to show only contacts with with one specific `ContactType`"
    },
    "city": {
      "type": "string",
      "description": "Used to show only contacts with with one specific `City`"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Contact"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contacts.post
Add a new contact

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contact": {
      "properties": {
        "address": {
          "description": "Street address",
          "maxLength": 255,
          "type": "string"
        },
        "city_id": {
          "format": "uuid",
          "type": "string"
        },
        "contact_types": {
          "properties": {
            "_ids": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "cvr": {
          "maxLength": 255,
          "type": "string"
        },
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "email": {
          "maxLength": 255,
          "type": "string"
        },
        "erp_id": {
          "description": "If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact",
          "maxLength": 255,
          "type": "string"
        },
        "name": {
          "maxLength": 255,
          "type": "string"
        },
        "phone": {
          "description": "Format like eg. `28680133` or `046158971404`",
          "maxLength": 32,
          "type": "string"
        },
        "website": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contacts.contact_id.delete
Delete a contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contacts.contact_id.get
Details of 1 contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Contact"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: contacts.contact_id.put
Edit a contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: currencies.get
Get list of currencies supported in Apacta

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Currency"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: currencies.currency_id.get
Get details about one currency

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "currency_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "currency_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Currency"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: employee_hours.get
Used to retrieve details about the logged in user's hours

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date_from": {
      "type": "string",
      "description": "Date formatted as Y-m-d (2016-06-28)"
    },
    "date_to": {
      "type": "string",
      "description": "Date formatted as Y-m-d (2016-06-28)"
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "description": "One element per form in the period",
      "items": {
        "properties": {
          "form_date": {
            "description": "Y-m-d formatted",
            "format": "date",
            "type": "string"
          },
          "form_id": {
            "format": "uuid",
            "type": "string"
          },
          "project_name": {
            "type": "string"
          },
          "total_hours": {
            "description": "The amount of hours in seconds",
            "format": "int32",
            "type": "integer"
          },
          "working_description": {
            "description": "Trimmed at 50 characters",
            "type": "string"
          },
          "working_description_full": {
            "description": "Full work description (if available)",
            "type": "string"
          }
        },
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_files.get
Show list of expense files

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_by_id": {
      "type": "string",
      "format": "uuid"
    },
    "expense_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/ExpenseFile"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_files.post
Add file to expense

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "file"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_files.expense_file_id.delete
Delete file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_file_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_files.expense_file_id.get
Show file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_file_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_files.expense_file_id.put
Edit file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_file_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_lines.get
Show list of expense lines

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_by_id": {
      "type": "string",
      "format": "uuid"
    },
    "currency_id": {
      "type": "string",
      "format": "uuid"
    },
    "expense_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/ExpenseLine"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_lines.post
Add line to expense

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expense_line": {
      "properties": {
        "buying_price": {
          "format": "float",
          "type": "number"
        },
        "currency_id": {
          "format": "uuid",
          "type": "string"
        },
        "expense_id": {
          "format": "uuid",
          "type": "string"
        },
        "quantity": {
          "format": "int32",
          "type": "integer"
        },
        "selling_price": {
          "format": "float",
          "type": "number"
        },
        "text": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_lines.expense_line_id.delete
Delete expense line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_line_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ExpenseLine"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_lines.expense_line_id.get
Show expense line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_line_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ExpenseLine"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expense_lines.expense_line_id.put
Edit expense line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_line_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ExpenseLine"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expenses.get
Show list of expenses

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_by_id": {
      "type": "string",
      "format": "uuid"
    },
    "company_id": {
      "type": "string",
      "format": "uuid"
    },
    "contact_id": {
      "type": "string",
      "format": "uuid"
    },
    "project_id": {
      "type": "string",
      "format": "uuid"
    },
    "gt_created": {
      "type": "string",
      "format": "date",
      "description": "Created after date"
    },
    "lt_created": {
      "type": "string",
      "format": "date",
      "description": "Created before date"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Expense"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expenses.post
Add line to expense

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expense_line": {
      "properties": {
        "contact_id": {
          "format": "uuid",
          "type": "string"
        },
        "currency_id": {
          "format": "uuid",
          "type": "string"
        },
        "delivery_date": {
          "format": "date",
          "type": "string"
        },
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        },
        "reference": {
          "maxLength": 8192,
          "type": "string"
        },
        "short_text": {
          "maxLength": 255,
          "type": "string"
        },
        "supplier_invoice_number": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expenses.expense_id.delete
Delete expense

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Expense"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expenses.expense_id.get
Show expense

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Expense"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: expenses.expense_id.put
Edit expense

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "expense_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "expense_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Expense"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_field_types.get
Get list of form field types

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the form_fields"
    },
    "identifier": {
      "type": "string",
      "description": "Used to filter on the `identifier` of the form_fields"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/FormFieldType"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_field_types.form_field_type_id.get
Get details about single `FormField`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_field_type_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_field_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/FormFieldType"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_fields.post
Add a new field to a `Form`

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "form_field": {
      "properties": {
        "comment": {
          "maxLength": 8192,
          "type": "string"
        },
        "content_value": {
          "maxLength": 255,
          "type": "string"
        },
        "file_id": {
          "format": "uuid",
          "type": "string"
        },
        "form_field_type_id": {
          "format": "uuid",
          "type": "string"
        },
        "form_id": {
          "format": "uuid",
          "type": "string"
        },
        "form_template_field_id": {
          "format": "uuid",
          "type": "string"
        },
        "placement": {
          "format": "int32",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_fields.form_field_id.get
Get details about single `FormField`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_field_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_field_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/FormField"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_templates.get
Get array of form_templates for your company

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the form_templates"
    },
    "identifier": {
      "type": "string",
      "description": "Used to filter on the `identifier` of the form_templates"
    },
    "pdf_template_identifier": {
      "type": "string",
      "description": "Used to filter on the `pdf_template_identifier` of the form_templates"
    },
    "description": {
      "type": "string",
      "description": "Used to filter on the `description` of the form_templates"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/FormTemplate"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: form_templates.form_template_id.get
View one form template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_template_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_template_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/FormTemplate"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: forms.get
Retrieve array of forms

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "extended": {
      "type": "string",
      "description": "Used to have extended details from the forms from the `Form`'s `FormFields`",
      "enum": [
        true,
        false
      ]
    },
    "date_from": {
      "type": "string",
      "format": "Y-m-d",
      "description": "Used in conjunction with `date_to` to only show forms within these dates - format like `2016-28-05`"
    },
    "date_to": {
      "type": "string",
      "format": "Y-m-d",
      "description": "Used in conjunction with `date_from` to only show forms within these dates - format like `2016-28-30`"
    },
    "project_id": {
      "type": "string",
      "format": "uuid",
      "description": "Used to filter on the `project_id` of the forms"
    },
    "created_by_id": {
      "type": "string",
      "description": "Used to filter on the `created_by_id` of the forms"
    },
    "form_template_id": {
      "type": "string",
      "description": "Used to filter on the `form_template_id` of the forms"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Form"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: forms.post
Used to add a form into the system

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "form": {
      "properties": {
        "form_template_id": {
          "format": "uuid",
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "project_id",
        "form_template_id"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: forms.form_id.delete
You can only delete the forms that you've submitted yourself

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: forms.form_id.get
View form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Form"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: forms.form_id.put
Edit a form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "form_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "form_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: invoice_lines.get
View list of invoice lines

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "invoice_id": {
      "type": "string",
      "format": "uuid"
    },
    "product_id": {
      "type": "string",
      "format": "uuid"
    },
    "user_id": {
      "type": "string",
      "format": "uuid"
    },
    "name": {
      "type": "string"
    },
    "discount_text": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/InvoiceLine"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoice_lines.post
Add invoice

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "invoice_line": {
      "properties": {
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "discount_percent": {
          "format": "int32",
          "type": "integer"
        },
        "discount_text": {
          "maxLength": 255,
          "type": "string"
        },
        "invoice_id": {
          "format": "uuid",
          "type": "string"
        },
        "name": {
          "maxLength": 2048,
          "type": "string"
        },
        "product_id": {
          "format": "uuid",
          "type": "string"
        },
        "quantity": {
          "format": "int32",
          "type": "integer"
        },
        "selling_price": {
          "format": "float",
          "type": "number"
        },
        "user_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoice_lines.invoice_line_id.delete
Delete invoice line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_line_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoice_lines.invoice_line_id.get
View invoice line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_line_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/InvoiceLine"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoice_lines.invoice_line_id.put
Edit invoice line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_line_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_line_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoices.get
View list of invoices

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contact_id": {
      "type": "string",
      "format": "uuid",
      "description": "Used to filter on the `contact_id` of the invoices"
    },
    "project_id": {
      "type": "string",
      "format": "uuid",
      "description": "Used to filter on the `project_id` of the invoices"
    },
    "invoice_number": {
      "type": "string",
      "description": "Used to filter on the `invoice_number` of the invoices"
    },
    "offer_number": {
      "type": "string"
    },
    "is_draft": {
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "is_offer": {
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "is_locked": {
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "date_from": {
      "type": "string",
      "format": "date"
    },
    "date_to": {
      "type": "string",
      "format": "date"
    },
    "issued_date": {
      "type": "string",
      "format": "date"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Invoice"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoices.post
Add invoice

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "invoice": {
      "properties": {
        "contact_id": {
          "format": "uuid",
          "type": "string"
        },
        "date_from": {
          "format": "date",
          "type": "string"
        },
        "date_to": {
          "format": "date",
          "type": "string"
        },
        "erp_id": {
          "maxLength": 255,
          "type": "string"
        },
        "erp_payment_term_id": {
          "maxLength": 255,
          "type": "string"
        },
        "invoice_number": {
          "format": "int32",
          "maxLength": 8,
          "type": "integer"
        },
        "is_draft": {
          "type": "boolean"
        },
        "is_locked": {
          "type": "boolean"
        },
        "is_offer": {
          "type": "boolean"
        },
        "issued_date": {
          "format": "date",
          "type": "string"
        },
        "message": {
          "maxLength": 8192,
          "type": "string"
        },
        "offer_number": {
          "format": "int32",
          "maxLength": 8,
          "type": "integer"
        },
        "payment_due_date": {
          "format": "date",
          "type": "string"
        },
        "payment_term_id": {
          "format": "uuid",
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        },
        "reference": {
          "maxLength": 255,
          "type": "string"
        },
        "vat_percent": {
          "format": "int32",
          "maxLength": 2,
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoices.invoice_id.delete
Delete invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoices.invoice_id.get
View invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Invoice"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: invoices.invoice_id.put
Edit invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoice_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoice_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.get
View list of all materials

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "barcode": {
      "type": "string",
      "description": "Used to filter on the `barcode` of the materials"
    },
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the materials"
    },
    "project_id": {
      "type": "string",
      "format": "uuid",
      "description": "Used to find materials used in specific project by `project_id`"
    },
    "currently_rented": {
      "type": "boolean",
      "description": "Used to find currently rented materials"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Material"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.delete
Delete material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.get
View material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Material"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.put
Edit material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.get
Show list of rentals for specific material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/MaterialRental"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.post
Add material rental

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_rental": {
      "properties": {
        "form_id": {
          "format": "uuid",
          "type": "string"
        },
        "from_date": {
          "format": "dateTime",
          "type": "string"
        },
        "is_invoiced": {
          "format": "dateTime",
          "type": "string"
        },
        "material_id": {
          "format": "uuid",
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        },
        "quantity": {
          "format": "float",
          "type": "number"
        },
        "to_date": {
          "format": "dateTime",
          "type": "string"
        }
      },
      "type": "object"
    },
    "material_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.checkout.post
Checkout material rental

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    },
    "material_rental": {
      "properties": {
        "form_id": {
          "format": "uuid",
          "type": "string"
        },
        "material_rental_id": {
          "format": "uuid",
          "type": "string"
        },
        "to_date": {
          "format": "dateTime",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.material_rental_id.delete
Delete rental for material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string",
      "format": "uuid"
    },
    "material_rental_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id",
    "material_rental_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.material_rental_id.get
Show rental foor materi

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string"
    },
    "material_rental_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id",
    "material_rental_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/MaterialRental"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.material_rental_id.post
Add material

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material": {
      "properties": {
        "barcode": {
          "type": "string"
        },
        "billing_cysle": {
          "enum": [
            "hourly",
            "daily",
            "weekly"
          ],
          "type": "string"
        },
        "cost_price": {
          "format": "float",
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "is_single_usage": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "selling_price": {
          "format": "float",
          "type": "number"
        }
      },
      "type": "object"
    },
    "material_id": {
      "type": "string"
    },
    "material_rental_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id",
    "material_rental_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: materials.material_id.rentals.material_rental_id.put
Edit material rental

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "material_id": {
      "type": "string",
      "format": "uuid"
    },
    "material_rental_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "material_id",
    "material_rental_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: ping.get
Check if API is up and API key works

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "ok",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: products.get
List products

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the products"
    },
    "product_number": {
      "type": "string",
      "format": "uuid",
      "description": "Used to filter on the `product_number` of the products"
    },
    "barcode": {
      "type": "string",
      "description": "Used to filter on the `barcode` of the products"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Product"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: products.post
Add new product

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "product": {
      "properties": {
        "barcode": {
          "maxLength": 255,
          "type": "string"
        },
        "buying_price": {
          "format": "double",
          "type": "number"
        },
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "erp_id": {
          "maxLength": 255,
          "type": "string"
        },
        "name": {
          "maxLength": 255,
          "type": "string"
        },
        "product_number": {
          "maxLength": 255,
          "type": "string"
        },
        "selling_price": {
          "format": "double",
          "type": "number"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: products.product_id.delete
Delete a product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "product_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: products.product_id.get
View single product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "product_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Product"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: products.product_id.put
Edit a product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "product_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: project_statuses.get
Get list of project statuses

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/ProjectStatus"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: project_statuses.project_status_id.get
Get details about one contact type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_status_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_status_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/ProjectStatus"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.get
View list of projects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "show_all": {
      "type": "boolean",
      "description": "Unless this is set to `true` only open projects will be shown"
    },
    "project_status": {
      "type": "array",
      "description": "ID's of `ProjectStatus(s)` only to look in"
    },
    "project_status_id": {
      "type": "string",
      "format": "uuid",
      "description": "Used to filter on the `project_status_id` of the projects"
    },
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the projects"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Project"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.post
Add a project

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "project": {
      "properties": {
        "contact_id": {
          "format": "uuid",
          "type": "string"
        },
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "erp_project_id": {
          "maxLength": 255,
          "type": "string"
        },
        "erp_task_id": {
          "maxLength": 255,
          "type": "string"
        },
        "name": {
          "maxLength": 255,
          "type": "string"
        },
        "project_status_id": {
          "format": "uuid",
          "type": "string"
        },
        "start_time": {
          "format": "datetime",
          "type": "string"
        },
        "street_name": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.delete
Delete a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.get
View specific project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Project"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.put
Edit a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.files.get
Used to show files uploaded to a project from wall post or form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.files.file_id.delete
Delete file uploaded to a project from wall post or form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "format": "uuid"
    },
    "file_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.files.file_id.get
Show file uploaded to a project from wall post or form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    },
    "file_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.files.file_id.put
Edit file uploaded to a project from wall post or form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "format": "uuid"
    },
    "file_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.project_files.get
Returns files belonging to the project, not uploaded from wall post or form

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.project_files.post
Add project file to projects

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    },
    "file": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "file"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.project_files.project_file_id.delete
Delete project file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_file_id": {
      "type": "string",
      "format": "uuid"
    },
    "project_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_file_id",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.project_files.project_file_id.get
Show project file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    },
    "project_file_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "project_file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.project_files.project_file_id.put
Edit project file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "format": "uuid"
    },
    "project_file_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "project_file_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.users.get
Show list of users added to project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/User"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.users.post
Add user to project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string"
    },
    "user_id": {
      "properties": {
        "user_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "user_id"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.users.user_id.delete
Delete user from project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: projects.project_id.users.user_id.get
View specific user assigned to project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "project_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/User"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: stock_locations.get
List stock_locations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Used to filter on the `name` of the stock_locations"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/StockLocation"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: stock_locations.post
Add new stock_locations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "location": {
      "properties": {
        "name": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: stock_locations.location_id.delete
Delete location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "location_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: stock_locations.location_id.get
View single location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "location_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/StockLocation"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: stock_locations.location_id.put
Edit location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "location_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entries.get
List time entries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user_id": {
      "type": "string"
    },
    "form_id": {
      "type": "string"
    },
    "project_id": {
      "type": "string"
    },
    "gt_from_time": {
      "type": "string"
    },
    "lt_from_time": {
      "type": "string"
    },
    "gt_to_time": {
      "type": "string"
    },
    "lt_to_time": {
      "type": "string"
    },
    "lt_sum": {
      "type": "string"
    },
    "gt_sum": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/TimeEntry"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entries.post
Add new time entry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "time_entry": {
      "properties": {
        "form_id": {
          "format": "uuid",
          "type": "string"
        },
        "from_time": {
          "format": "dateTime",
          "type": "string"
        },
        "is_all_day": {
          "type": "boolean"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        },
        "sum": {
          "description": "Amount of seconds - should only be included when using is_all_day, otherwise will be calculated from from_time and to_time",
          "format": "int32",
          "type": "integer"
        },
        "time_entry_type_id": {
          "format": "uuid",
          "type": "string"
        },
        "to_time": {
          "format": "dateTime",
          "type": "string"
        },
        "user_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "user_id",
        "time_entry_type_id"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entries.time_entry_id.delete
Delete time entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entries.time_entry_id.get
View time entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/TimeEntry"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entries.time_entry_id.put
Edit time entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_intervals.get
List possible time entry intervals

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/TimeEntryInterval"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_intervals.time_entry_interval_id.get
View time entry interval

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_interval_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_interval_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/TimeEntryInterval"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_types.get
List time entries types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/TimeEntryType"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_types.post
Add new time entry type

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "time_entry_type": {
      "properties": {
        "description": {
          "maxLength": 8192,
          "type": "string"
        },
        "name": {
          "maxLength": 255,
          "type": "string"
        },
        "time_entry_interval_id": {
          "format": "uuid",
          "type": "string"
        },
        "time_entry_value_type_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "time_entry_interval_id",
        "time_entry_value_type_id",
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_types.time_entry_type_id.delete
Delete time entry type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_type_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_types.time_entry_type_id.get
View time entry type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_type_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/TimeEntryType"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_types.time_entry_type_id.put
Edit time entry type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_type_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_unit_types.get
List possible time entry unit types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/TimeEntryUnitType"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_unit_types.time_entry_unit_type_id.get
View time entry unit type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_unit_type_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_unit_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/TimeEntryUnitType"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_value_types.get
List possible time entry value types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/TimeEntryValueType"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: time_entry_value_types.time_entry_value_type_id.get
View time entry value type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "time_entry_value_type_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "time_entry_value_type_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/TimeEntryValueType"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: users.get
Get list of users in company

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "first_name": {
      "type": "string",
      "description": "Used to filter on the `first_name` of the users"
    },
    "last_name": {
      "type": "string",
      "description": "Used to filter on the `last_name` of the users"
    },
    "email": {
      "type": "string",
      "description": "Used to filter on the `email` of the users"
    },
    "stock_location_id": {
      "type": "string",
      "description": "Used to filter on the `stock_location_id` of the users"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/User"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: users.post
Add user to company

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user": {
      "properties": {
        "city_id": {
          "format": "uuid",
          "type": "string"
        },
        "cost_price": {
          "description": "Cost of salaries",
          "format": "float",
          "type": "number"
        },
        "email": {
          "format": "email",
          "maxLength": 255,
          "type": "string"
        },
        "extra_price": {
          "description": "Additional cost on this employee (pension, vacation etc.)",
          "format": "float",
          "type": "number"
        },
        "first_name": {
          "maxLength": 255,
          "type": "string"
        },
        "is_active": {
          "type": "boolean"
        },
        "language_id": {
          "format": "uuid",
          "type": "string"
        },
        "last_name": {
          "maxLength": 255,
          "type": "string"
        },
        "mobile": {
          "maxLength": 32,
          "type": "string"
        },
        "mobile_countrycode": {
          "maxLength": 8,
          "type": "string"
        },
        "password": {
          "format": "password",
          "maxLength": 255,
          "type": "string"
        },
        "phone": {
          "maxLength": 32,
          "type": "string"
        },
        "phone_countrycode": {
          "maxLength": 8,
          "type": "string"
        },
        "receive_form_mails": {
          "description": "If `true` the employee will receive an email receipt of every form submitted",
          "type": "boolean"
        },
        "sale_price": {
          "description": "The price this employee costs per hour when working",
          "format": "float",
          "type": "number"
        },
        "street_name": {
          "maxLength": 255,
          "type": "string"
        }
      },
      "required": [
        "first_name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: users.user_id.delete
Delete user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: users.user_id.get
View user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/User"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: users.user_id.put
Edit user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_comments.post
Add wall comment

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "wall_comment": {
      "properties": {
        "message": {
          "type": "string"
        },
        "wall_post_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "wall_post_id",
        "message"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_comments.wall_comment_id.get
View wall comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "wall_comment_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "wall_comment_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/WallComment"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_posts.get
View list of wall posts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "format": "uuid"
    },
    "user_id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/WallPost"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_posts.post
Add a wall post

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "wall_post": {
      "properties": {
        "message": {
          "type": "string"
        },
        "project_id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "required": [
        "project_id",
        "message"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "properties": {
        "id": {
          "format": "uuid",
          "type": "string"
        }
      },
      "type": "object"
    },
    "success": {
      "default": true,
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_posts.wall_post_id.get
View wall post

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "wall_post_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "wall_post_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/WallPost"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: wall_posts.wall_post_id.wall_comments.get
See wall comments to a wall post

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "wall_post_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "wall_post_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/WallComment"
      },
      "type": "array"
    },
    "pagination": {
      "$ref": "#/definitions/PaginationDetails"
    },
    "success": {
      "type": "boolean"
    }
  },
  "type": "object"
}
```
