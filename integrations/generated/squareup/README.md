# @datafire/squareup
Client library for accessing the Square Connect APIs

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: ListCustomers
Lists a business's customers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "cursor": {
      "type": "string",
      "description": "A pagination cursor returned by a previous call to this endpoint.\nProvide this to retrieve the next set of results for your original query.\n\nSee [Paginating results](#paginatingresults) for more information."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListCustomersResponse"
}
```
## Operation: CreateCustomer
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "body": {
      "$ref": "#/definitions/CreateCustomerRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateCustomerResponse"
}
```
## Operation: DeleteCustomer
Deletes a customer from a business, along with any linked cards on file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "customer_id": {
      "type": "string",
      "description": "The ID of the customer to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "customer_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteCustomerResponse"
}
```
## Operation: RetrieveCustomer
Returns details for a single customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "customer_id": {
      "type": "string",
      "description": "The ID of the customer to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "customer_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveCustomerResponse"
}
```
## Operation: UpdateCustomer
Updates the details of an existing customer.

You cannot edit a customer's cards on file with this endpoint. To make changes
to a card on file, you must delete the existing card on file with the
[DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with the
[CreateCustomerCard](#endpoint-createcustomercard) endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "customer_id": {
      "type": "string",
      "description": "The ID of the customer to update."
    },
    "body": {
      "$ref": "#/definitions/UpdateCustomerRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "customer_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateCustomerResponse"
}
```
## Operation: CreateCustomerCard
Adds a card on file to an existing customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "customer_id": {
      "type": "string",
      "description": "The ID of the customer to link the card on file to."
    },
    "body": {
      "$ref": "#/definitions/CreateCustomerCardRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "customer_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateCustomerCardResponse"
}
```
## Operation: DeleteCustomerCard
Removes a card on file from a customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "customer_id": {
      "type": "string",
      "description": "The ID of the customer that the card on file belongs to."
    },
    "card_id": {
      "type": "string",
      "description": "The ID of the card on file to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "customer_id",
    "card_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteCustomerCardResponse"
}
```
## Operation: ListLocations
Provides the details for all of a business's locations.

Most other Connect API endpoints have a required `location_id` path parameter.
The `id` field of the [`Location`](#type-location) objects returned by this
endpoint correspond to that `location_id` parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLocationsResponse"
}
```
## Operation: CreateCheckout
Creates a [Checkout](#type-checkout) response that links a
`checkoutId` and `checkout_page_url` that customers can be directed to in
order to provide their payment information using a payment processing
workflow hosted on connect.squareup.com.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the business location to associate the checkout with."
    },
    "body": {
      "$ref": "#/definitions/CreateCheckoutRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateCheckoutResponse"
}
```
## Operation: ListRefunds
Lists refunds for one of a business's locations.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](#paginatingresults): 50

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the location to list refunds for."
    },
    "begin_time": {
      "type": "string",
      "description": "The beginning of the requested reporting period, in RFC 3339 format.\n\nSee [Date ranges](#dateranges) for details on date inclusivity/exclusivity.\n\nDefault value: The current time minus one year."
    },
    "end_time": {
      "type": "string",
      "description": "The end of the requested reporting period, in RFC 3339 format.\n\nSee [Date ranges](#dateranges) for details on date inclusivity/exclusivity.\n\nDefault value: The current time."
    },
    "sort_order": {
      "type": "string",
      "description": "The order in which results are listed in the response (`ASC` for\noldest first, `DESC` for newest first).\n\nDefault value: `DESC`",
      "enum": [
        "DESC",
        "ASC"
      ]
    },
    "cursor": {
      "type": "string",
      "description": "A pagination cursor returned by a previous call to this endpoint.\nProvide this to retrieve the next set of results for your original query.\n\nSee [Paginating results](#paginatingresults) for more information."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListRefundsResponse"
}
```
## Operation: ListTransactions
Lists transactions for a particular location.

Max results per [page](#paginatingresults): 50

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the location to list transactions for."
    },
    "begin_time": {
      "type": "string",
      "description": "The beginning of the requested reporting period, in RFC 3339 format.\n\nSee [Date ranges](#dateranges) for details on date inclusivity/exclusivity.\n\nDefault value: The current time minus one year."
    },
    "end_time": {
      "type": "string",
      "description": "The end of the requested reporting period, in RFC 3339 format.\n\nSee [Date ranges](#dateranges) for details on date inclusivity/exclusivity.\n\nDefault value: The current time."
    },
    "sort_order": {
      "type": "string",
      "description": "The order in which results are listed in the response (`ASC` for\noldest first, `DESC` for newest first).\n\nDefault value: `DESC`",
      "enum": [
        "DESC",
        "ASC"
      ]
    },
    "cursor": {
      "type": "string",
      "description": "A pagination cursor returned by a previous call to this endpoint.\nProvide this to retrieve the next set of results for your original query.\n\nSee [Paginating results](#paginatingresults) for more information."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTransactionsResponse"
}
```
## Operation: Charge
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the location to associate the created transaction with."
    },
    "body": {
      "$ref": "#/definitions/ChargeRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChargeResponse"
}
```
## Operation: RetrieveTransaction
Retrieves details for a single transaction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the transaction's associated location."
    },
    "transaction_id": {
      "type": "string",
      "description": "The ID of the transaction to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "transaction_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveTransactionResponse"
}
```
## Operation: CaptureTransaction
Captures a transaction that was created with the [Charge](#endpoint-charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](/articles/delayed-capture-transactions/)
for more information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": ""
    },
    "transaction_id": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "transaction_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CaptureTransactionResponse"
}
```
## Operation: CreateRefund
Initiates a refund for a previously charged tender.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": "The ID of the original transaction's associated location."
    },
    "transaction_id": {
      "type": "string",
      "description": "The ID of the original transaction that includes the tender to refund."
    },
    "body": {
      "$ref": "#/definitions/CreateRefundRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "transaction_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateRefundResponse"
}
```
## Operation: VoidTransaction
Cancels a transaction that was created with the [Charge](#endpoint-charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](/articles/delayed-capture-transactions/)
for more information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "The value to provide in the Authorization header of\nyour request. This value should follow the format `Bearer YOUR_ACCESS_TOKEN_HERE`."
    },
    "location_id": {
      "type": "string",
      "description": ""
    },
    "transaction_id": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "location_id",
    "transaction_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VoidTransactionResponse"
}
```
