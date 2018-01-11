# @datafire/ritc

Client library for Ritc

## Installation and Usage
```bash
npm install --save @datafire/ritc
```
```js
let ritc = require('@datafire/ritc').create({
  Authorization: ""
});

ritc.runApp({}).then(data => {
  console.log(data);
})
```

## Description

Rules in the Cloud

## Actions

### listActions
List actions


```js
ritc.listActions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ActionShortResponse](#actionshortresponse)

### addAction
Create a new action


```js
ritc.addAction({
  "Action Object": {
    "name": "",
    "channelId": 0,
    "functionId": ""
  }
}, context)
```

#### Input
* input `object`
  * Action Object **required** [Action59](#action59)

#### Output
* output [ActionShortResponse](#actionshortresponse)

### removeAction
Delete an action


```js
ritc.removeAction({
  "action_id": ""
}, context)
```

#### Input
* input `object`
  * action_id **required** `string`: Id of action

#### Output
*Output schema unknown*

### getAction
Get an action


```js
ritc.getAction({
  "action_id": ""
}, context)
```

#### Input
* input `object`
  * action_id **required** `string`: Id of action_id

#### Output
* output `array`
  * items [ActionFullResponse](#actionfullresponse)

### updateAction
Update information about a specific action


```js
ritc.updateAction({
  "action_id": "",
  "Action Object": {
    "name": "",
    "channelId": 0,
    "functionId": ""
  }
}, context)
```

#### Input
* input `object`
  * action_id **required** `string`: Id of user
  * Action Object **required** [Action59](#action59)

#### Output
* output [ActionShortResponse](#actionshortresponse)

### admin
Ping the server


```js
ritc.admin(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### logInRitc
Log a message


```js
ritc.logInRitc({
  "message": {}
}, context)
```

#### Input
* input `object`
  * message **required** `object`

#### Output
* output `object`

### pingRitc
Ping the server


```js
ritc.pingRitc(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### listApps
Get apps information


```js
ritc.listApps(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AppResponse](#appresponse)

### addApp
Create a new app


```js
ritc.addApp({
  "App Object": {}
}, context)
```

#### Input
* input `object`
  * App Object **required** [App](#app)

#### Output
* output [AppResponse](#appresponse)

### listAppChannels
Get app channels


```js
ritc.listAppChannels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AppChannelResponse](#appchannelresponse)

### listAppChannelUsers
Get users of a specified channel


```js
ritc.listAppChannelUsers({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [AppChannelResponse](#appchannelresponse)

### getAppChannelUser
Get user of a specified channel


```js
ritc.getAppChannelUser({
  "channel_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * user_id **required** `string`: Id of User

#### Output
* output `array`
  * items [AppChannelResponse](#appchannelresponse)

### addAppChannelUser
Create user channel


```js
ritc.addAppChannelUser({
  "channel_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * user_id **required** `string`: Id of User

#### Output
* output [AppChannelResponse](#appchannelresponse)

### listChannelExternalCredentials
Get external credentials


```js
ritc.listChannelExternalCredentials(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AppExternalCredentialsResponse](#appexternalcredentialsresponse)

### addChannelExternalCredentials
Create new external credentials


```js
ritc.addChannelExternalCredentials({
  "App_External_Credentials Object": {}
}, context)
```

#### Input
* input `object`
  * App_External_Credentials Object **required** [AppExternalCredentials](#appexternalcredentials)

#### Output
* output [AppExternalCredentialsResponse](#appexternalcredentialsresponse)

### removeChannelExternalCredentials
Delete credentials for a channel


```js
ritc.removeChannelExternalCredentials({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
*Output schema unknown*

### getChannelExternalCredentials
Get credentials for a channel in an app


```js
ritc.getChannelExternalCredentials({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [AppExternalCredentialsResponse](#appexternalcredentialsresponse)

### updateChannelExternalCredentials
Update credentials for a channel


```js
ritc.updateChannelExternalCredentials({
  "channel_id": "",
  "App_External_Credentials Object": {}
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * App_External_Credentials Object **required** [AppExternalCredentials](#appexternalcredentials)

#### Output
* output [AppExternalCredentialsResponse](#appexternalcredentialsresponse)

### runRuleGroup
Run specified rule group in the app


```js
ritc.runRuleGroup({
  "rule_id_list": ""
}, context)
```

#### Input
* input `object`
  * rule_id_list **required** `string`: Ids of rules in the group, separated by commas, no spaces
  * initial_data `object`
  * break_when_rule_fires `boolean`: Do not continue with remaining rules after a rule fires

#### Output
* output `array`
  * items [RuleResults](#ruleresults)

### runApp
Run active app rules


```js
ritc.runApp({}, context)
```

#### Input
* input `object`
  * initial_data `object`
  * break_when_rule_fires `boolean`: Do not continue with remaining rules after a rule fires

#### Output
* output `array`
  * items [RuleResults](#ruleresults)

### removeApp
Delete an app


```js
ritc.removeApp({
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: Id of App

#### Output
*Output schema unknown*

### getApp
Get app information


```js
ritc.getApp({
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: Id of App

#### Output
* output `array`
  * items [AppResponse](#appresponse)

### updateApp
Update an app


```js
ritc.updateApp({
  "app_id": "",
  "App Object": {}
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: Id of app
  * App Object **required** [App](#app)

#### Output
* output [AppResponse](#appresponse)

### listChannels
Retrieve Channels


```js
ritc.listChannels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ChannelResponse](#channelresponse)

### addChannel
Create a channel


```js
ritc.addChannel({
  "Channel Object": {}
}, context)
```

#### Input
* input `object`
  * Channel Object **required** [Channel](#channel)

#### Output
* output [ChannelResponse](#channelresponse)

### listAnonymousChannels
Retrieve Channels anonymously


```js
ritc.listAnonymousChannels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ChannelResponse](#channelresponse)

### removeChannel
Delete a channel


```js
ritc.removeChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
*Output schema unknown*

### getChannel
Get channel information


```js
ritc.getChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [ChannelResponse](#channelresponse)

### updateChannel
Update a channel


```js
ritc.updateChannel({
  "channel_id": "",
  "Channel Object": {}
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * Channel Object **required** [Rule](#rule)

#### Output
* output [ChannelResponse](#channelresponse)

### listChannelFunctions
Retrieve Channel Functions


```js
ritc.listChannelFunctions({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [FunctionResponse](#functionresponse)

### addChannelFunction
Create a channel function


```js
ritc.addChannelFunction({
  "channel_id": "",
  "Channel Function Object": {}
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * Channel Function Object **required** [Function7](#function7)

#### Output
* output [FunctionResponse](#functionresponse)

### getChannelFunction
Get channel function information


```js
ritc.getChannelFunction({
  "channel_id": "",
  "function_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: Id of Channel
  * function_id **required** `string`: Id of Channel Function

#### Output
* output `array`
  * items [FunctionResponse](#functionresponse)

### addOrganization
Create an org


```js
ritc.addOrganization({
  "Org Object": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * Org Object **required** [Org](#org)

#### Output
* output `array`
  * items [OrgResponse](#orgresponse)

### getMyOrganization
Get org information


```js
ritc.getMyOrganization(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OrgResponse](#orgresponse)

### listRules
List rules


```js
ritc.listRules(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [RuleShortResponse](#ruleshortresponse)

### addRule
Create a new rule


```js
ritc.addRule({
  "Rule Object": {}
}, context)
```

#### Input
* input `object`
  * Rule Object **required** [Rule](#rule)

#### Output
* output [RuleFullResponse](#rulefullresponse)

### removeRule
Delete a rule


```js
ritc.removeRule({
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * rule_id **required** `string`: Id of rule

#### Output
*Output schema unknown*

### getRule
Get a rule


```js
ritc.getRule({
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * rule_id **required** `string`: Id of rule

#### Output
* output `array`
  * items [RuleFullResponse](#rulefullresponse)

### updateRule
Update information about a specific rule


```js
ritc.updateRule({
  "rule_id": "",
  "Rule Object": {}
}, context)
```

#### Input
* input `object`
  * rule_id **required** `string`: Id of user
  * Rule Object **required** [Rule](#rule)

#### Output
* output [RuleFullResponse](#rulefullresponse)

### runRule
Run a rule


```js
ritc.runRule({
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * rule_id **required** `string`: Id of rule
  * initial_data `object`

#### Output
* output `object`

### listTriggers
Triggers in an app


```js
ritc.listTriggers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TriggerShortResponse](#triggershortresponse)

### addTrigger
Create a new trigger in an app


```js
ritc.addTrigger({
  "Trigger Object": {
    "name": "",
    "channelId": 0,
    "functionId": ""
  }
}, context)
```

#### Input
* input `object`
  * Trigger Object **required** [Trigger54](#trigger54)

#### Output
* output [TriggerShortResponse](#triggershortresponse)

### removeTrigger
Delete a trigger


```js
ritc.removeTrigger({
  "trigger_id": ""
}, context)
```

#### Input
* input `object`
  * trigger_id **required** `string`: Id of Trigger

#### Output
*Output schema unknown*

### getTrigger
Get a trigger


```js
ritc.getTrigger({
  "trigger_id": ""
}, context)
```

#### Input
* input `object`
  * trigger_id **required** `string`: Id of Trigger

#### Output
* output `array`
  * items [TriggerFullResponse](#triggerfullresponse)

### updateTrigger
Update a trigger


```js
ritc.updateTrigger({
  "trigger_id": "",
  "Trigger Object": {
    "name": "",
    "channelId": 0,
    "functionId": ""
  }
}, context)
```

#### Input
* input `object`
  * trigger_id **required** `string`: Id of user
  * Trigger Object **required** [Trigger54](#trigger54)

#### Output
* output [TriggerShortResponse](#triggershortresponse)

### listAppUsers
Users


```js
ritc.listAppUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AppUserResponse](#appuserresponse)

### addAppUser
Create a new App User


```js
ritc.addAppUser({
  "App User Object": {}
}, context)
```

#### Input
* input `object`
  * App User Object **required** [AppUser](#appuser)

#### Output
* output [AppUserResponse](#appuserresponse)

### listAdminUsers
Admin users


```js
ritc.listAdminUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AdminUserResponse](#adminuserresponse)

### addAdminUser
Create a new admin user


```js
ritc.addAdminUser({
  "Admin_User Object": {}
}, context)
```

#### Input
* input `object`
  * Admin_User Object **required** [AdminUser](#adminuser)

#### Output
* output [AdminUserResponse](#adminuserresponse)

### removeAdminUser
Remove an admin user


```js
ritc.removeAdminUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of Admin_User

#### Output
*Output schema unknown*

### getAdminUser
Get an admin user


```js
ritc.getAdminUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of Admin_User

#### Output
* output `array`
  * items [AdminUserResponse](#adminuserresponse)

### updateAdminUser
Update information about an admin user


```js
ritc.updateAdminUser({
  "user_id": "",
  "Admin_User Object": {}
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user
  * Admin_User Object **required** [AdminUser](#adminuser)

#### Output
* output [AdminUserResponse](#adminuserresponse)

### authenticateAppUserForChannel
Authenticate a user for a channel


```js
ritc.authenticateAppUserForChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [AuthorizeUrlResponse](#authorizeurlresponse)

### removeAppUser
Remove a user


```js
ritc.removeAppUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user

#### Output
*Output schema unknown*

### getAppUser
Get an App User


```js
ritc.getAppUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of App User

#### Output
* output `array`
  * items [AppUserResponse](#appuserresponse)

### updateAppUser
Update information about an App User


```js
ritc.updateAppUser({
  "user_id": "",
  "App User Object": {}
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user
  * App User Object **required** [AppUser](#appuser)

#### Output
* output [AppUserResponse](#appuserresponse)

### listAppUserChannels
Channels available to a User


```js
ritc.listAppUserChannels({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user

#### Output
* output `array`
  * items [UserChannel](#userchannel)

### addAppUserToChannel
Assign a channel to a user


```js
ritc.addAppUserToChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user
  * channel_id **required** `string`

#### Output
* output [UserChannel](#userchannel)

### removeAppUserFromChannel
Remove a user channel assignment


```js
ritc.removeAppUserFromChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * channel_id **required** `string`: Id of Channel

#### Output
*Output schema unknown*

### getAppUserChannel
Get a user channel


```js
ritc.getAppUserChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * channel_id **required** `string`: Id of Channel

#### Output
* output `array`
  * items [UserChannel](#userchannel)

### listAppUserRules
Rules for a User


```js
ritc.listAppUserRules({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of user

#### Output
* output `array`
  * items [RuleShortResponse](#ruleshortresponse)

### removeAppUserFromRule
Remove a rule user


```js
ritc.removeAppUserFromRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * rule_id **required** `string`: Id of Rule

#### Output
*Output schema unknown*

### getAppUserRule
Get a user


```js
ritc.getAppUserRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * rule_id **required** `string`: Id of Rule

#### Output
* output `array`
  * items [RuleFullResponse](#rulefullresponse)

### addAppUserToRule
Assign a user to a rule


```js
ritc.addAppUserToRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * rule_id **required** `string`: Id of Rule

#### Output
* output [RuleShortResponse](#ruleshortresponse)

### runRuleForAppUser
Run rule for a user


```js
ritc.runRuleForAppUser({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: Id of User
  * rule_id **required** `string`: Id of Rule

#### Output
* output `object`



## Definitions

### Action
* Action `object`
  * channelId `string`
  * createdDate `string`: The date the rule was created
  * description `string`
  * functionId `string`
  * id `string`
  * modifiedDate `string`: The date the rule was modified
  * name `string`
  * status [Status](#status)

### Action59
* Action59 `object`
  * channelId **required** `integer`: Id of channel used by action
  * codes `object`: Object containing named Javascript code sets
  * desc `string`: Action description
  * functionId **required** `string`: Hash id of channel function used by action
  * name **required** `string`: Action name
  * parameters `object`: Object containing channel-defined action parameters

### ActionFullResponse
* Action_Full_Response `object`
  * channelId `integer`
  * codes `object`
  * createdDate `string`: The date the action was created
  * description `string`: Action description
  * functionId `string`
  * id `integer`
  * modifiedDate `string`: The date the action was modified
  * name `string`: Action name
  * parameters `object`
  * status [Status](#status)

### ActionShortResponse
* Action_Short_Response `object`
  * channelId `string`
  * createdDate `string`: The date the action was created
  * description `string`: Action description
  * functionId `string`
  * id `string`
  * modifiedDate `string`: The date the action was modified
  * name `string`: Action name
  * status [Status](#status)

### AdminUser
* Admin_User `object`
  * email `string`: Admin User email address
  * password `string`: Admin User password
  * type [Type41](#type41)

### AdminUserResponse
* Admin_User_Response `object`
  * createdDate `string`: The date the admin user was created
  * email `string`: Admin User email address
  * id `integer`
  * modifiedDate `string`: The date the admin user was modified
  * name `string`: Admin User name
  * status [Status](#status)

### ApiType
* ApiType `string` (values: Internal, REST, SDK)

### App
* App `object`
  * desc `string`: App description
  * name `string`: App name

### AppChannelResponse
* App_Channel_Response `object`
  * channelId `integer`: Channel Id
  * createdDate `string`: The date the user was created
  * id `integer`
  * status [Status](#status)
  * userId `integer`: Id of App User assigned to Channel

### AppExternalCredentials
* App_External_Credentials `object`
  * authType [AuthType](#authtype)
  * channel_id `string`
  * credentials `object`
  * name `string`: App external credentials api name

### AppExternalCredentialsResponse
* App_External_Credentials_Response `object`
  * authType [AuthType](#authtype)
  * channel_id `string`
  * credentials `object`
  * id `string`
  * name `string`: App external credentials api name

### AppResponse
* App_Response `object`
  * apiKey `string`: App ApiKey
  * createdDate `string`: The date the app was created
  * description `string`: App description
  * id `string`
  * modifiedDate `string`: The date the app was modified
  * name `string`: App name
  * status [Status](#status)

### AppUser
* App_User `object`
  * config `object`: Object containing user-defined app user configuration
  * name `string`: Display name of App User
  * password `string`: App User password

### AppUserResponse
* App_User_Response `object`
  * createdDate `string`: The date the user was created
  * description `string`: Description of App User
  * id `string`: Id of App User
  * modifiedDate `string`: The date the user was modified
  * name `string`: Display name of App User
  * status [Status](#status)

### AuthType
* AuthType `string` (values: apikey, basic, none, oauth2)

### AuthorizeUrlResponse
* Authorize_Url_Response `object`
  * url `string`

### Channel
* Channel `object`
  * description `string`: Channel description
  * functions `array`
    * items [Function](#function)
  * id `string`: Id of channel
  * name `string`: Channel name
  * type `object`: Type of channel. Choices are 'public' or 'private'. Private channels are only viewable within an account, while public channels are viewable to everyone in the system

### ChannelResponse
* Channel_Response `object`
  * description `string`: Channel description
  * functions `array`
    * items [Function5](#function5)
  * id `string`: Id of channel
  * name `string`: Channel name
  * type `object`: Type of channel. Choices are 'public' or 'private'. Private channels are only viewable within an account, while public channels are viewable to everyone

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Function
* Function `object`
  * id `string`
  * name `string`: Function name
  * parameters `array`
    * items [Parameter](#parameter)
  * type [Type](#type)

### Function5
* Function5 `object`
  * description `string`: Function description
  * id `string`
  * name `string`: Function name
  * type [Type](#type)

### Function7
* Function7 `object`
  * apiType [ApiType](#apitype)
  * desc `string`: Function description
  * endpoint `string`: Function endpoint
  * httpMethod [HttpMethod](#httpmethod)
  * name `string`: Function name
  * requestParameters `array`
    * items [RequestParameter](#requestparameter)
  * responseFormat [ResponseFormat](#responseformat)
  * type [Type](#type)

### FunctionResponse
* Function_Response `object`
  * apiType [ApiType](#apitype)
  * description `string`: Function description
  * endpoint `string`: Function endpoint
  * httpMethod [HttpMethod](#httpmethod)
  * id `string`
  * name `string`: Function name
  * requestParameters `array`
    * items [RequestParameter](#requestparameter)
  * responseFormat [ResponseFormat](#responseformat)
  * type [Type](#type)

### HttpMethod
* HttpMethod `string` (values: DELETE, GET, PATCH, POST)

### Org
* Org `object`
  * desc `string`: Org description
  * name **required** `string`: Org name
  * type `string`: Org type

### OrgResponse
* Org_Response `object`
  * createdDate `string`: The date the org was created
  * id `string`
  * modifiedDate `string`: The date the org was modified
  * name `string`: Org name
  * plan [Plan](#plan)
  * planCat `object`
  * status `string`: Org name
  * type `object`

### Parameter
* Parameter `object`
  * key **required** `string`
  * value **required** `string`

### Plan
* Plan `string` (values: free, basic)

### RequestParameter
* RequestParameter `object`
  * description `string`
  * fieldType `string`
  * label `string`
  * name `string`
  * schema [Schema](#schema)

### ResponseFormat
* ResponseFormat `string` (values: Html, Json, Text, Xml)

### Rule
* Rule `object`
  * actionIds `string`: Rule description
  * description `string`: Rule description
  * name `string`: Rule name
  * status [Status](#status)
  * triggerIds `string`: Rule description

### RuleFullResponse
* Rule_Full_Response `object`
  * actions `array`
    * items [Action](#action)
  * createdDate `string`: The date the rule was created
  * description `string`: Rule description
  * id `integer`: Rule Id
  * modifiedDate `string`: The date the rule was modified
  * name `string`: Rule name
  * status [Status](#status)
  * triggers `array`
    * items [Trigger](#trigger)

### RuleResults
* Rule_Results `object`
  * id `string`
  * name `string`: Name of rule results
  * type [Type](#type)

### RuleShortResponse
* Rule_Short_Response `object`
  * createdDate `string`: The date the rule was created
  * description `string`: Rule description
  * id `integer`: Rule Id
  * modifiedDate `string`: The date the rule was modified
  * name `string`: Rule name
  * status [Status](#status)

### Schema
* Schema `object`
  * datatype `object`
  * default `string`
  * expose `object`
  * required `object`
  * style [Style](#style)

### Status
* Status `string` (values: active, inactive)

### Style
* Style `string` (values: postbody, query, template)

### Trigger
* Trigger `object`
  * channelId `string`
  * createdDate `string`: The date the rule was created
  * description `string`
  * functionId `string`
  * id `string`
  * modifiedDate `string`: The date the rule was modified
  * name `string`
  * status [Status](#status)

### Trigger54
* Trigger54 `object`
  * channelId **required** `integer`: Id of channel used by trigger
  * codes `object`: Object containing named Javascript code sets
  * desc `string`: Trigger description
  * functionId **required** `string`: Hash id of channel function used by trigger
  * name **required** `string`: Trigger name
  * parameters `object`: Object containing channel-defined trigger parameters

### TriggerFullResponse
* Trigger_Full_Response `object`
  * channelId `integer`
  * codes `object`
  * createdDate `string`: The date the trigger was created
  * description `string`: Trigger description
  * functionId `string`
  * id `integer`
  * modifiedDate `string`: The date the trigger was modified
  * name `string`: Trigger name
  * parameters `object`
  * status [Status](#status)

### TriggerShortResponse
* Trigger_Short_Response `object`
  * channelId `integer`
  * createdDate `string`: The date the trigger was created
  * description `string`: Trigger description
  * functionId `string`
  * id `integer`
  * modifiedDate `string`: The date the trigger was modified
  * name `string`: Trigger name
  * status [Status](#status)

### Type
* Type `string` (values: action, trigger)

### Type41
* Type41 `string` (values: admin, guest)

### UserChannel
* User_Channel `object`
  * channelId `integer`
  * userId `integer`


