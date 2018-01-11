# @datafire/koomalooma

Client library for koomalooma Partner

## Installation and Usage
```bash
npm install --save @datafire/koomalooma
```
```js
let koomalooma = require('@datafire/koomalooma').create({
  api_key: ""
});

koomalooma.users.post({}).then(data => {
  console.log(data);
})
```

## Description

This is the koomalooma Partner API. koomalooma is the first Loyalty BPaaS (Business Process as a Service) for mobile and web companies. With koomalooma merchants issue points for actions their customers / users make on your mobile or web store, for example a purchase or a referral. koomalooma takes care of all the rest, from signing up users, keeping track of points and delivering rewards in over 80 countries. koomalooma offers an easy to integrate API and web backend to configure loyalty campaigns and track performance. You can find more at http://support.koomalooma.com

## Actions

### users.post
Create a User


```js
koomalooma.users.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### users.user_id.commitments.post
Assign points to a User


```js
koomalooma.users.user_id.commitments.post({
  "user_id": "",
  "commitmentRequest": {
    "campaign_id": "",
    "transaction_value": "",
    "promotion_goal_description": "",
    "promotion_goal_category": ""
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: user_id of the user to assign points to
  * commitmentRequest **required** [CommitmentRequest](#commitmentrequest)

#### Output
* output [Commitment](#commitment)



## Definitions

### Commitment
* Commitment `object`
  * confirmation_status **required** `string` (values: pending, confirmed)
  * created_at **required** `string`
  * free_loyalty_units **required** `integer`
  * goal **required** [Goal](#goal)
  * id **required** `string`
  * loyalty_accumulation_value **required** `string`
  * loyalty_units **required** `integer`
  * partner_id **required** `string`
  * promotion_goal_category **required** `string`
  * promotion_goal_description **required** `string`
  * redeemable_loyalty_units **required** `integer`
  * redeemed **required** `boolean`
  * redeemed_loyalty_units **required** `integer`
  * updated_at **required** `string`
  * user_id **required** `string`

### CommitmentRequest
* CommitmentRequest `object`
  * campaign_id **required** `string`
  * promotion_goal_category **required** `string`
  * promotion_goal_description **required** `string`
  * transaction_value **required** `string`

### Goal
* Goal `object`
  * type **required** `string`
  * value **required** `string`

### User
* User `object`
  * partner_id **required** `string`: Your partner_id. You can use the value of data-partner-id parameter
  * partner_user_id **required** `string`: A unique string that identify your customer. !!IMPORTANT!! You should use always the same partner_user_id for the same customer
  * user_session_id **required** `string`: A unique string that identify the current user session. !!IMPORTANT!! This value should be the same set in %%sessionId%% of koomalooma javascript


