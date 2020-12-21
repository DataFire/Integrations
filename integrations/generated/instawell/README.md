# @datafire/instawell

Client library for Instawell

## Installation and Usage
```bash
npm install --save @datafire/instawell
```
```js
let instawell = require('@datafire/instawell').create();

.then(data => {
  console.log(data);
});
```

## Description

Instawell's RESTful API gives you access to mental health professionals.

## Actions

### campaigns.create.post
Create a new Campaign for an existing user or for a new user. 

If you are a new user and you want to create a Campaign, simply supply the email as a parameter in the body and an account will be automatically created for you. 

*The response will also return a an `auth_token` that you can use in subsequent requests.*

If you are an existing user and you want to create a new Campaign under your existing account, then simply add the `X-instawell-token` header in the request to do this.


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
Use this method to retrieve information about the Campaign. We return basic information like name, description and image used as well as other meta information.


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
You can use this method to  retrieve some basic stats about your Campaign. We currently return the following information

- users_joined : How many uses' joined the Campaign
- money_spent : How much money was spent on the Campaign by users.
- plans_sold : The number of Plans that have been sold on the Campaign
- view_count : The number of people who viewed the Campaign
- feed : The most recent activity log of your Campaign


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
The widget code is some HTML that will allow you to embed an Instawell widget on your own website. The widget points to your Campaign and allows visitors to interact with your Campaign right from your own website. 

To include the widget on your website, simply copy the `embed_html` field from the response and paste it at the bottom of your website template. 



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
The Campaign owner can update information about the Campaign. We currently allow you to update the name, description and the image used. 



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
Use this method to find available Plans on Instawell. Use the `category` field to filter Plans by Category. 

Calling this method without the `category` field will return the possible Category values. 

Possible category values are : mentalhealth, relationships


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
Once you've found a Plan you like, you can make a request for it. When you make a request for it, we notify the Helper who created the Plan that there's someone waiting to chat with them. And you can start chatting with them as soon as they accept the request. 

The response to this method also contains a link you can use to automatically login to your account.

You can call this method as a visitor or as an existing user with a valid `auth_token`. If your `auth_token` is included, we'll create the account under your existing account. Otherwise we'll create an account automatically for you and return the auth token.


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
Use this method to retrieve your most recent notifications. 


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


