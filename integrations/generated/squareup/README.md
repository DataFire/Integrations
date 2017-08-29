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
Adds a card on file to an existing customer.


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

### ListLocations
Provides the details for all of a business's locations.

Most other Connect API endpoints have a required `location_id` path parameter.
The `id` field of the [`Location`](#type-location) objects returned by this
endpoint correspond to that `location_id` parameter.


```js
squareup.ListLocations(null, context)
```


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

### ListRefunds
Lists refunds for one of a business's locations.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](#paginatingresults): 50


```js
squareup.ListRefunds({
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

### CreateRefund
Initiates a refund for a previously charged tender.


```js
squareup.CreateRefund({
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

