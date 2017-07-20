# @datafire/youphoric
Youphoric SMS API allows you to create and launch SMS-based apps quickly to reach Smart subscribers in the Philippines. 

## Operation: register.php_.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client": {
      "type": "string"
    },
    "FirstName": {
      "type": "string",
      "description": "First Name"
    },
    "LastName": {
      "type": "string",
      "description": "Last Name"
    },
    "MiddleName": {
      "type": "string",
      "description": "Middle Name"
    },
    "Street": {
      "type": "string",
      "description": "Street"
    },
    "Barangay": {
      "type": "string",
      "description": "Barangay"
    },
    "CityTown": {
      "type": "string",
      "description": "City or Town"
    },
    "Province": {
      "type": "string",
      "description": "Province"
    },
    "ZipCode": {
      "type": "string",
      "description": "Zip or Postal Code"
    },
    "username": {
      "type": "string",
      "description": "Username"
    },
    "password": {
      "description": "Password"
    },
    "email": {
      "type": "string",
      "description": "Email"
    },
    "contactno": {
      "type": "string",
      "description": "Mobile or Telephone"
    }
  },
  "additionalProperties": false,
  "required": [
    "client",
    "FirstName",
    "LastName",
    "username",
    "password",
    "email",
    "contactno"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mt.php_.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string",
      "description": "Characters limit 11"
    },
    "to": {
      "type": "string",
      "description": "Mobile Number."
    },
    "text": {
      "type": "string",
      "description": "Text Message"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to",
    "text"
  ]
}
```
### Output Schema
```json
{}
```
