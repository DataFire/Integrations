# @datafire/ritc

Client library for Ritc

## Installation and Usage
```bash
npm install --save datafire @datafire/ritc
```

```js
let datafire = require('datafire');
let ritc = require('@datafire/ritc').create({
  Authorization: "",
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

#### Parameters
*This action has no parameters*

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

#### Parameters
* Action Object (object) **required**

### removeAction
Delete an action


```js
ritc.removeAction({
  "action_id": ""
}, context)
```

#### Parameters
* action_id (string) **required** - Id of action

### getAction
Get an action


```js
ritc.getAction({
  "action_id": ""
}, context)
```

#### Parameters
* action_id (string) **required** - Id of action_id

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

#### Parameters
* action_id (string) **required** - Id of user
* Action Object (object) **required**

### admin
Ping the server


```js
ritc.admin(null, context)
```

#### Parameters
*This action has no parameters*

### logInRitc
Log a message


```js
ritc.logInRitc({
  "message": {}
}, context)
```

#### Parameters
* message (object) **required**

### pingRitc
Ping the server


```js
ritc.pingRitc(null, context)
```

#### Parameters
*This action has no parameters*

### listApps
Get apps information


```js
ritc.listApps(null, context)
```

#### Parameters
*This action has no parameters*

### addApp
Create a new app


```js
ritc.addApp({
  "App Object": {}
}, context)
```

#### Parameters
* App Object (object) **required**

### listAppChannels
Get app channels


```js
ritc.listAppChannels(null, context)
```

#### Parameters
*This action has no parameters*

### listAppChannelUsers
Get users of a specified channel


```js
ritc.listAppChannelUsers({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### getAppChannelUser
Get user of a specified channel


```js
ritc.getAppChannelUser({
  "channel_id": "",
  "user_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* user_id (string) **required** - Id of User

### addAppChannelUser
Create user channel


```js
ritc.addAppChannelUser({
  "channel_id": "",
  "user_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* user_id (string) **required** - Id of User

### listChannelExternalCredentials
Get external credentials


```js
ritc.listChannelExternalCredentials(null, context)
```

#### Parameters
*This action has no parameters*

### addChannelExternalCredentials
Create new external credentials


```js
ritc.addChannelExternalCredentials({
  "App_External_Credentials Object": {}
}, context)
```

#### Parameters
* App_External_Credentials Object (object) **required**

### removeChannelExternalCredentials
Delete credentials for a channel


```js
ritc.removeChannelExternalCredentials({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### getChannelExternalCredentials
Get credentials for a channel in an app


```js
ritc.getChannelExternalCredentials({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### updateChannelExternalCredentials
Update credentials for a channel


```js
ritc.updateChannelExternalCredentials({
  "channel_id": "",
  "App_External_Credentials Object": {}
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* App_External_Credentials Object (object) **required**

### runRuleGroup
Run specified rule group in the app


```js
ritc.runRuleGroup({
  "rule_id_list": ""
}, context)
```

#### Parameters
* rule_id_list (string) **required** - Ids of rules in the group, separated by commas, no spaces
* initial_data (object)
* break_when_rule_fires (boolean) - Do not continue with remaining rules after a rule fires

### runApp
Run active app rules


```js
ritc.runApp({}, context)
```

#### Parameters
* initial_data (object)
* break_when_rule_fires (boolean) - Do not continue with remaining rules after a rule fires

### removeApp
Delete an app


```js
ritc.removeApp({
  "app_id": ""
}, context)
```

#### Parameters
* app_id (string) **required** - Id of App

### getApp
Get app information


```js
ritc.getApp({
  "app_id": ""
}, context)
```

#### Parameters
* app_id (string) **required** - Id of App

### updateApp
Update an app


```js
ritc.updateApp({
  "app_id": "",
  "App Object": {}
}, context)
```

#### Parameters
* app_id (string) **required** - Id of app
* App Object (object) **required**

### listChannels
Retrieve Channels


```js
ritc.listChannels(null, context)
```

#### Parameters
*This action has no parameters*

### addChannel
Create a channel


```js
ritc.addChannel({
  "Channel Object": {}
}, context)
```

#### Parameters
* Channel Object (object) **required**

### listAnonymousChannels
Retrieve Channels anonymously


```js
ritc.listAnonymousChannels(null, context)
```

#### Parameters
*This action has no parameters*

### removeChannel
Delete a channel


```js
ritc.removeChannel({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### getChannel
Get channel information


```js
ritc.getChannel({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### updateChannel
Update a channel


```js
ritc.updateChannel({
  "channel_id": "",
  "Channel Object": {}
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* Channel Object (object) **required**

### listChannelFunctions
Retrieve Channel Functions


```js
ritc.listChannelFunctions({
  "channel_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel

### addChannelFunction
Create a channel function


```js
ritc.addChannelFunction({
  "channel_id": "",
  "Channel Function Object": {}
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* Channel Function Object (object) **required**

### getChannelFunction
Get channel function information


```js
ritc.getChannelFunction({
  "channel_id": "",
  "function_id": ""
}, context)
```

#### Parameters
* channel_id (string) **required** - Id of Channel
* function_id (string) **required** - Id of Channel Function

### addOrganization
Create an org


```js
ritc.addOrganization({
  "Org Object": {
    "name": ""
  }
}, context)
```

#### Parameters
* Org Object (object) **required**

### getMyOrganization
Get org information


```js
ritc.getMyOrganization(null, context)
```

#### Parameters
*This action has no parameters*

### listRules
List rules


```js
ritc.listRules(null, context)
```

#### Parameters
*This action has no parameters*

### addRule
Create a new rule


```js
ritc.addRule({
  "Rule Object": {}
}, context)
```

#### Parameters
* Rule Object (object) **required**

### removeRule
Delete a rule


```js
ritc.removeRule({
  "rule_id": ""
}, context)
```

#### Parameters
* rule_id (string) **required** - Id of rule

### getRule
Get a rule


```js
ritc.getRule({
  "rule_id": ""
}, context)
```

#### Parameters
* rule_id (string) **required** - Id of rule

### updateRule
Update information about a specific rule


```js
ritc.updateRule({
  "rule_id": "",
  "Rule Object": {}
}, context)
```

#### Parameters
* rule_id (string) **required** - Id of user
* Rule Object (object) **required**

### runRule
Run a rule


```js
ritc.runRule({
  "rule_id": ""
}, context)
```

#### Parameters
* rule_id (string) **required** - Id of rule
* initial_data (object)

### listTriggers
Triggers in an app


```js
ritc.listTriggers(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* Trigger Object (object) **required**

### removeTrigger
Delete a trigger


```js
ritc.removeTrigger({
  "trigger_id": ""
}, context)
```

#### Parameters
* trigger_id (string) **required** - Id of Trigger

### getTrigger
Get a trigger


```js
ritc.getTrigger({
  "trigger_id": ""
}, context)
```

#### Parameters
* trigger_id (string) **required** - Id of Trigger

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

#### Parameters
* trigger_id (string) **required** - Id of user
* Trigger Object (object) **required**

### listAppUsers
Users


```js
ritc.listAppUsers(null, context)
```

#### Parameters
*This action has no parameters*

### addAppUser
Create a new App User


```js
ritc.addAppUser({
  "App User Object": {}
}, context)
```

#### Parameters
* App User Object (object) **required**

### listAdminUsers
Admin users


```js
ritc.listAdminUsers(null, context)
```

#### Parameters
*This action has no parameters*

### addAdminUser
Create a new admin user


```js
ritc.addAdminUser({
  "Admin_User Object": {}
}, context)
```

#### Parameters
* Admin_User Object (object) **required**

### removeAdminUser
Remove an admin user


```js
ritc.removeAdminUser({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of Admin_User

### getAdminUser
Get an admin user


```js
ritc.getAdminUser({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of Admin_User

### updateAdminUser
Update information about an admin user


```js
ritc.updateAdminUser({
  "user_id": "",
  "Admin_User Object": {}
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user
* Admin_User Object (object) **required**

### authenticateAppUserForChannel
Authenticate a user for a channel


```js
ritc.authenticateAppUserForChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* channel_id (string) **required** - Id of Channel

### removeAppUser
Remove a user


```js
ritc.removeAppUser({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user

### getAppUser
Get an App User


```js
ritc.getAppUser({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of App User

### updateAppUser
Update information about an App User


```js
ritc.updateAppUser({
  "user_id": "",
  "App User Object": {}
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user
* App User Object (object) **required**

### listAppUserChannels
Channels available to a User


```js
ritc.listAppUserChannels({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user

### addAppUserToChannel
Assign a channel to a user


```js
ritc.addAppUserToChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user
* channel_id (string) **required**

### removeAppUserFromChannel
Remove a user channel assignment


```js
ritc.removeAppUserFromChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* channel_id (string) **required** - Id of Channel

### getAppUserChannel
Get a user channel


```js
ritc.getAppUserChannel({
  "user_id": "",
  "channel_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* channel_id (string) **required** - Id of Channel

### listAppUserRules
Rules for a User


```js
ritc.listAppUserRules({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of user

### removeAppUserFromRule
Remove a rule user


```js
ritc.removeAppUserFromRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* rule_id (string) **required** - Id of Rule

### getAppUserRule
Get a user


```js
ritc.getAppUserRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* rule_id (string) **required** - Id of Rule

### addAppUserToRule
Assign a user to a rule


```js
ritc.addAppUserToRule({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* rule_id (string) **required** - Id of Rule

### runRuleForAppUser
Run rule for a user


```js
ritc.runRuleForAppUser({
  "user_id": "",
  "rule_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - Id of User
* rule_id (string) **required** - Id of Rule

