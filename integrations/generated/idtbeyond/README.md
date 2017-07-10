# @datafire/idtbeyond
Our active docs provide the ability to test out your account and to see the responses to your queries. The services are RESTful, and are accessed using standard HTTP methods over a secure HTTPS channel. Requests and responses are currently sent in JSON format, and have a base URL of /v1.

## Operation: iatu.balance.get
Returns a JSON of the account balance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.charges.reports.all.get
Returns charges by date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "date_from": {
      "type": "string",
      "description": "The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    },
    "date_to": {
      "type": "string",
      "description": "The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.charges.reports.all.csv.get
Returns charges by date range in CSV.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "date_from": {
      "type": "string",
      "description": "The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    },
    "date_to": {
      "type": "string",
      "description": "The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.number_validator.get
Checks to verify if the phone number is valid for the country supplied.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "country_code": {
      "type": "string",
      "description": "2-digit code of the country in ISO 3166 format. 'BR'"
    },
    "mobile_number": {
      "type": "string",
      "description": "The mobile number you would like to validate. '5521983115555'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "country_code",
    "mobile_number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.products.promotions.get
Returns a JSON of the current promotions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.products.reports.all.get
Returns a JSON list of products, ranges, and their commissions percentages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.products.reports.all.csv.get
Returns a CSV of products, ranges, and their commissions percentages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.products.reports.local_value.get
Returns a CSV of products, ranges, and their commissions percentages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "country_code": {
      "type": "string",
      "description": "2-digit code of the country in ISO 3166 format. 'GT'"
    },
    "carrier_code": {
      "type": "string",
      "description": "Name of the mobile carrier. 'Claro'"
    },
    "amount": {
      "type": "integer",
      "description": "This is the amount, in cents, of the product you are purchasing. '500' = $5.00"
    },
    "currency_code": {
      "type": "string",
      "description": "The currency code (ISO 4217) on the product you are querying. 'USD'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "country_code",
    "carrier_code",
    "amount",
    "currency_code"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.post
Submits an IATU transaction request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "body": {
      "$ref": "#/definitions/Topups"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.reports.post
Search topups transactions, by date, with client_transaction_id or to_service_number. Use 'client_transaction_id' to search by transaction number, or 'to_service_number' to get transaction status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "body": {
      "$ref": "#/definitions/TopupsReports"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.reports.all.get
Returns topups by date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "date_from": {
      "type": "string",
      "description": "The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    },
    "date_to": {
      "type": "string",
      "description": "The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.reports.all.csv.get
Returns topups by date range in CSV.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "date_from": {
      "type": "string",
      "description": "The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    },
    "date_to": {
      "type": "string",
      "description": "The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.reports.totals.get
Returns topups totals by date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "date_from": {
      "type": "string",
      "description": "The beginning date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    },
    "date_to": {
      "type": "string",
      "description": "The ending date of the search IN YYYY-MM-DD format (America/New_York timezone). '2016-01-28'"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: iatu.topups.reverse.post
Occasionally, a carrier will not be able to successfully complete a topup request. In this case, we will attempt to automatically reverse the transaction for you, and return the money into your account. In the case when this is not possible, you may need to request a reverse on the transaction that has a status of 'transaction_status' 'notredeemed'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    },
    "body": {
      "$ref": "#/definitions/TopupsReversal"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.get
Returns a JSON of the API status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x-idt-beyond-app-id": {
      "type": "string",
      "description": "Application ID you would like to use"
    },
    "x-idt-beyond-app-key": {
      "type": "string",
      "description": "Application KEY you would like to use"
    }
  },
  "additionalProperties": false,
  "required": [
    "x-idt-beyond-app-id",
    "x-idt-beyond-app-key"
  ]
}
```
### Output Schema
```json
{}
```
