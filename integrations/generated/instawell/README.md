# @datafire/instawell

Client library for Instawell

## Installation and Usage
```bash
npm install --save @datafire/instawell
```
```js
let instawell = require('@datafire/instawell').create();

instawell.campaigns.create.post({
  "email": "",
  "name": "",
  "description": "",
  "image": "",
  "Content-Type": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Instawell API gives you access to  helpers all over the world. Integrate Instawell with your app using our API to get help wherever you are. Follow the instructions below to get started.

Base URL
----
The Instawell API supports a sandbox mode by making API calls to our sandbox server. Using the Sandbox server, you can make sure your integrations are working before deploying them to production. 

Sandbox mode is accessed by using the following base URL

~~~~
https://api-sandbox.instawell.com/
~~~~

Production mode is acccessed by using the following base URL

~~~~
https://api.instawell.com/
~~~~


Get your Access Token
-----

The token to access the Campaign API is available when you create your first Campaign or when you request your first Plan. Have a look at the Create Campaign method to find out how to do this.

Most requests made to the Instawell API require the auth token to be sent as part of the header. Exceptions will be noted in the docs. The name of the header to be used is X-instawell-token

~~~~
X-instawell-token: TEST_TOKEN
~~~~

Once you have your token, you're ready to go.





## Actions

### campaigns.create.post
TODO: Add Description


```js
instawell.campaigns.create.post({
  "email": "",
  "name": "",
  "description": "",
  "image": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: Email is a required field if you do not have an auth token. An account will automatically be created for your use.
  * name **required** `string`: Optional. The name of the Campaign
  * description **required** `string`: Optional. Short introduction to your Campaign. This is what visitors to your Campaign page will see.
  * image **required** `string`: Optional. A URL pointing to an image to be used as the background of your Campaign.
  * Content-Type **required** `string`

#### Output
* output [CreateCampaignresponse](#createcampaignresponse)

### campaigns.get.get
TODO: Add Description


```js
instawell.campaigns.get.get({
  "campaign_id": "",
  "Content-Type": "",
  "X-instawell-token": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`
  * Content-Type **required** `string`
  * X-instawell-token **required** `string`

#### Output
* output [GetCampaignresponse](#getcampaignresponse)

### campaigns.get_stats.get
TODO: Add Description


```js
instawell.campaigns.get_stats.get({
  "campaign_id": "",
  "Content-Type": "",
  "X-instawell-token": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`
  * Content-Type **required** `string`
  * X-instawell-token **required** `string`

#### Output
* output [GetCampaignStatsresponse](#getcampaignstatsresponse)

### campaigns.get_widget.get
TODO: Add Description


```js
instawell.campaigns.get_widget.get({
  "campaign_id": "",
  "Content-Type": "",
  "X-instawell-token": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`
  * Content-Type **required** `string`
  * X-instawell-token **required** `string`

#### Output
* output [GetCampaignWidgetresponse](#getcampaignwidgetresponse)

### campaigns.update.post
TODO: Add Description


```js
instawell.campaigns.update.post({
  "name": "",
  "image": "",
  "description": "",
  "campaign_id": "",
  "Content-Type": "",
  "X-instawell-token": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The new name to be used for your C
  * image **required** `string`: A URL pointing to an image to be used as the background of your Campaign.
  * description **required** `string`: Welcome message seen by visitors
  * campaign_id **required** `string`: The ID of the Campaign you are updating
  * Content-Type **required** `string`
  * X-instawell-token **required** `string`

#### Output
* output [UpdateACampaignresponse](#updateacampaignresponse)

### plans.find.get
TODO: Add Description


```js
instawell.plans.find.get({
  "category": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`
  * Content-Type **required** `string`

#### Output
* output [FindPlansresponse](#findplansresponse)

### plans.request.post
TODO: Add Description


```js
instawell.plans.request.post({
  "plan_id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * plan_id **required** `string`: Required. The ID of the Plan that you want to chat about.
  * Content-Type **required** `string`

#### Output
* output [RequestPlanresponse](#requestplanresponse)

### users.notifications.get
TODO: Add Description


```js
instawell.users.notifications.get({
  "Content-Type": "",
  "X-instawell-token": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * X-instawell-token **required** `string`

#### Output
* output [GetNotificationsresponse](#getnotificationsresponse)



## Definitions

### AuthData
* AuthData `object`
  * mode **required** `string`

### Campaign
* Campaign `object`
  * auth_type **required** `string`
  * campaign_plans **required** `array`
    * items `string`
  * code **required** `string`
  * created **required** `string`
  * data **required** `array`
    * items `string`
  * description **required** `string`
  * enabled **required** `string`
  * id **required** `string`
  * image **required** `string`
  * join_mode_text **required** `string`
  * meta **required** [Meta](#meta)
  * name **required** `string`
  * published **required** `integer`
  * purpose_code **required** `string`
  * used_plans_count **required** `integer`
  * user_count **required** `integer`
  * user_id **required** `string`

### Campaign13
* Campaign13 `object`
  * auth_type **required** `string`
  * campaign_plans **required** `array`
    * items `string`
  * code **required** `string`
  * created **required** `string`
  * data **required** [Data](#data)
  * description **required** `string`
  * enabled **required** `string`
  * id **required** `string`
  * image **required** `string`
  * join_mode_text **required** `string`
  * meta **required** [Meta](#meta)
  * name **required** `string`
  * published **required** `integer`
  * purpose_code **required** `string`
  * used_plans_count **required** `integer`
  * user_count **required** `integer`
  * user_id **required** `string`

### Campaign8
* Campaign8 `object`
  * auth_data **required** [AuthData](#authdata)
  * auth_type **required** `string`
  * campaign_helpers **required** `array`
    * items `string`
  * campaign_plans **required** `array`
    * items `string`
  * code **required** `string`
  * created **required** `string`
  * data **required** [Data](#data)
  * description **required** `string`
  * enabled **required** `string`
  * id **required** `string`
  * image **required** `string`
  * join_mode_text **required** `string`
  * meta **required** [Meta](#meta)
  * name **required** `string`
  * published **required** `integer`
  * purpose_code **required** `string`
  * used_plans_count **required** `integer`
  * user_count **required** `integer`
  * user_id **required** `string`

### CreateCampaignresponse
* Create CampaignResponse `object`
  * admin_url **required** `string`
  * auth_token **required** `string`
  * campaign **required** [Campaign](#campaign)

### Data
* Data `object`
  * purpose_code **required** `string`

### FindPlansresponse
* Find PlansResponse `object`
  * plans **required** `array`
    * items [Plan](#plan)

### GetCampaignStatsresponse
* Get Campaign StatsResponse `object`
  * stats **required** [Stats](#stats)

### GetCampaignWidgetresponse
* Get Campaign WidgetResponse `object`
  * embed_html **required** `string`

### GetCampaignresponse
* Get CampaignResponse `object`
  * campaign **required** [Campaign13](#campaign13)

### GetNotificationsresponse
* Get NotificationsResponse `object`
  * notifications **required** `array`
    * items [Notification](#notification)

### Helper
* Helper `object`
  * avatar_url **required** `string`
  * id **required** `string`
  * username **required** `string`

### Meta
* Meta `object`
  * CAMPAIGN_HOSTED_SITE_URL **required** `string`
  * CAMPAIGN_RESTRICT_TO_SELECTED_HELPERS **required** `string`
  * CAMPAIGN_RESTRICT_TO_SELECTED_PLANS **required** `string`

### Notification
* Notification `object`
  * chat_url **required** `string`
  * created **required** `string`
  * is_read **required** `integer`
  * text **required** `string`

### Plan
* Plan `object`
  * description **required** `string`
  * helper **required** [Helper](#helper)
  * id **required** `string`
  * image **required** `string`
  * name **required** `string`
  * price **required** `string`
  * url **required** `string`

### RequestPlanresponse
* Request PlanResponse `object`
  * chat_url **required** `string`
  * message **required** `string`

### Stats
* Stats `object`
  * feed **required** `array`
    * items `string`
  * money_spent **required** `integer`
  * plans_sold **required** `integer`
  * users_joined **required** `integer`
  * view_count **required** `integer`

### UpdateACampaignresponse
* Update a CampaignResponse `object`
  * campaign **required** [Campaign8](#campaign8)


