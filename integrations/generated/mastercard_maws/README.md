# @datafire/mastercard_maws

Client library for MasterCard ABU API

## Installation and Usage
```bash
npm install --save @datafire/mastercard_maws
```
```js
let mastercard_maws = require('@datafire/mastercard_maws').create();

.then(data => {
  console.log(data);
});
```

## Description

Mastercard ABU API

## Actions

### abuPost
<ul>
  <li><p><b>Pull model:</b></p>
    <br>
    <p>To receive information for a given PAN, the customer sends a request and will receive a response with the most up to date information.</p>
    <p>In this page, customers can execute samples of requests to explore the pattern of the API responses. However, once the customer decides to start using the SDK, it is necessary to be fully onboarded to ABU API Pull model.</p>
  </li>
  <br>
  <li><p><b>Push model:</b></p>
    <br>
    <p>Customers can choose to automatically receive ABU account update notifications on a designated endpoint. This means that a customer can subscribe to each PAN in order to receive updates, so that when these PANs have any changes, the customer will receive the updates via notifications on the designated endpoint.</p>
    <p>Different fields on the API are mandatory to use this model.</p><p>In order to complete a full end-to-end test scenario (including the notifications), it is necessary to be fully onboarded on ABU API Push model:</p>
    <p>- An endpoint provided by the customer must be registered with Mastercard so that notifications can be pro-actively sent out to the customer.</p>
    <p>- A certificate provided by Mastercard representative must be used by the customer to receive notifications on the designated endpoint.</p>
    <br>
    <p><b>* For customers who are already enrolled to ABU API Pull model and want to start using ABU API Push model, it is necessary to perform a technical enrollment that involves a certificate exchange and must be registered as an ABU API Push model user.</b></p>
    <br>
    <p>For more details on how to proceed with onboarding for ABU API push model contact abu_push_onboarding@mastercard.com.</p><p>Note: This email is for ABU API push onboarding only. For general ABU API inquiry questions contact api_support@mastercard.com and for general ABU questions contact abu_helpdesk@mastercard.com.</p>
  </li>
</ul>


```js
mastercard_maws.abuPost({
  "Abu Request": {
    "method": "",
    "id": "",
    "params": {
      "merchantId": "",
      "oldAccountNumber": "",
      "oldExpirationDate": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * Abu Request **required** [ABU](#abu)

#### Output
* output [AbuResponse](#aburesponse)



## Definitions

### ABU
* ABU `object`
  * id **required** `string`: An identifier established by the Client that MUST contain a String, Number, or NULL value if included.
  * jsonrpc `string`: A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
  * method **required** `string`: A String containing the name of the method to be invoked.
  * params **required** [AbuDTO](#abudto)

### AbuDTO
* AbuDTO `object`
  * discretionaryData `string`: Optional data that can be used by the requested for matching to the original inquiry.
  * ica `string`: <p class='suffix-required' style='margin-bottom:5px'>[This field is required when the multiple ICAs are registered under the same client key.]</p>Data that can be used to inform the ICA number: Interbank Card Association.
  * merchantId **required** `string`: Registered merchant ID that is mapped to the Customer ID.
  * oldAccountNumber **required** `string`: Account number on file provided by merchant.
  * oldExpirationDate **required** `string`: Account number expiration date on file provided by merchant that must be in MMYY format.
  * subMerchantId `string`: Optionally populated when the merchant ID is actually a previously populated payment facilitator or payment aggregator.
  * subscribe `string`: <p class="suffix-required" style="margin-bottom:5px">[Field used by Push Model only - REQUIRED]</p>Optional data that can be used to subscribe, un-subscribe or query subscription status for PAN updates. Valid values are "subscribe", "un-subscribe" and "query".

### AbuResponse
* AbuResponse `object`
  * id `string`: An identifier established by the Client that MUST contain a String, Number, or NULL value if included.
  * jsonrpc `string`: A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
  * result [AbuResultDTO](#aburesultdto)
  * status `boolean`: The Service Status, success (true) or failure (false).

### AbuResultDTO
* AbuResultDTO `object`
  * discretionaryData `string`: Discretionary data as in the request.
  * ica `string`: ICA number as in the request.
  * merchantId `string`: Merchant ID as in the request.
  * newAccountNumber `string`: New account number.
  * newExpirationDate `string`: New account number expiration date, in MMYY format.
  * oldAccountNumber `string`: Account number on file as in the request.
  * oldExpirationDate `string`: Expiration date on file as in the request.
  * reasonIdentifier `string`: Response Type based on requested account.
  * responseIndicator `string`: One character additional data, returned bases on  reasonIdentifier.(Note- ResponseIndicator displayed only when ReasonIdentifier is VALID or UNKNWN)
  * subMerchantId `string`: SubMerchantID as in the request.
  * subscriptionIdentifier `string`: <p class="suffix-required" style="margin-bottom:5px">[Field used by Push Model only]</p> Response Type based on the status of subscribe/un-subscribe or query subscription status for PAN.
  * subscriptionIndicator `string`: <p class="suffix-required" style="margin-bottom:5px">[Field used by Push Model only]</p> One character additional data, returned based on subscriptionIdentifier:<ul><li>"S" for success</li><li>"F" for failures</li><li>"T" for token results.</li></ul>


