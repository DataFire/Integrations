# @datafire/ritc
Rules in the Cloud

## Operation: listActions
List actions

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ActionShortResponse"
  },
  "type": "array"
}
```
## Operation: addAction
Create a new action

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Action Object": {
      "$ref": "#/definitions/Action59"
    }
  },
  "additionalProperties": false,
  "required": [
    "Action Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActionShortResponse"
}
```
## Operation: removeAction
Delete an action

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "action_id": {
      "type": "string",
      "description": "Id of action"
    }
  },
  "additionalProperties": false,
  "required": [
    "action_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAction
Get an action

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "action_id": {
      "type": "string",
      "description": "Id of action_id"
    }
  },
  "additionalProperties": false,
  "required": [
    "action_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ActionFullResponse"
  },
  "type": "array"
}
```
## Operation: updateAction
Update information about a specific action

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "action_id": {
      "type": "string",
      "description": "Id of user"
    },
    "Action Object": {
      "$ref": "#/definitions/Action59"
    }
  },
  "additionalProperties": false,
  "required": [
    "action_id",
    "Action Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActionShortResponse"
}
```
## Operation: admin
Ping the server

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: logInRitc
Log a message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "message"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: pingRitc
Ping the server

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: listApps
Get apps information

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppResponse"
  },
  "type": "array"
}
```
## Operation: addApp
Create a new app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App Object": {
      "$ref": "#/definitions/App"
    }
  },
  "additionalProperties": false,
  "required": [
    "App Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppResponse"
}
```
## Operation: listAppChannels
Get app channels

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppChannelResponse"
  },
  "type": "array"
}
```
## Operation: listAppChannelUsers
Get users of a specified channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppChannelResponse"
  },
  "type": "array"
}
```
## Operation: getAppChannelUser
Get user of a specified channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "user_id": {
      "type": "string",
      "description": "Id of User"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppChannelResponse"
  },
  "type": "array"
}
```
## Operation: addAppChannelUser
Create user channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "user_id": {
      "type": "string",
      "description": "Id of User"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppChannelResponse"
}
```
## Operation: listChannelExternalCredentials
Get external credentials

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppExternalCredentialsResponse"
  },
  "type": "array"
}
```
## Operation: addChannelExternalCredentials
Create new external credentials

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App_External_Credentials Object": {
      "$ref": "#/definitions/AppExternalCredentials"
    }
  },
  "additionalProperties": false,
  "required": [
    "App_External_Credentials Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppExternalCredentialsResponse"
}
```
## Operation: removeChannelExternalCredentials
Delete credentials for a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChannelExternalCredentials
Get credentials for a channel in an app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppExternalCredentialsResponse"
  },
  "type": "array"
}
```
## Operation: updateChannelExternalCredentials
Update credentials for a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "App_External_Credentials Object": {
      "$ref": "#/definitions/AppExternalCredentials"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "App_External_Credentials Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppExternalCredentialsResponse"
}
```
## Operation: runRuleGroup
Run specified rule group in the app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id_list": {
      "type": "string",
      "description": "Ids of rules in the group, separated by commas, no spaces"
    },
    "initial_data": {
      "type": "object"
    },
    "break_when_rule_fires": {
      "type": "boolean",
      "description": "Do not continue with remaining rules after a rule fires"
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id_list"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleResults"
  },
  "type": "array"
}
```
## Operation: runApp
Run active app rules

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "initial_data": {
      "type": "object"
    },
    "break_when_rule_fires": {
      "type": "boolean",
      "description": "Do not continue with remaining rules after a rule fires"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleResults"
  },
  "type": "array"
}
```
## Operation: removeApp
Delete an app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_id": {
      "type": "string",
      "description": "Id of App"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getApp
Get app information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_id": {
      "type": "string",
      "description": "Id of App"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppResponse"
  },
  "type": "array"
}
```
## Operation: updateApp
Update an app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_id": {
      "type": "string",
      "description": "Id of app"
    },
    "App Object": {
      "$ref": "#/definitions/App"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id",
    "App Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppResponse"
}
```
## Operation: listChannels
Retrieve Channels

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ChannelResponse"
  },
  "type": "array"
}
```
## Operation: addChannel
Create a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Channel Object": {
      "$ref": "#/definitions/Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "Channel Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChannelResponse"
}
```
## Operation: listAnonymousChannels
Retrieve Channels anonymously

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ChannelResponse"
  },
  "type": "array"
}
```
## Operation: removeChannel
Delete a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChannel
Get channel information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ChannelResponse"
  },
  "type": "array"
}
```
## Operation: updateChannel
Update a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "Channel Object": {
      "$ref": "#/definitions/Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "Channel Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChannelResponse"
}
```
## Operation: listChannelFunctions
Retrieve Channel Functions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/FunctionResponse"
  },
  "type": "array"
}
```
## Operation: addChannelFunction
Create a channel function

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "Channel Function Object": {
      "$ref": "#/definitions/Function7"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "Channel Function Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FunctionResponse"
}
```
## Operation: getChannelFunction
Get channel function information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    },
    "function_id": {
      "type": "string",
      "description": "Id of Channel Function"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "function_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/FunctionResponse"
  },
  "type": "array"
}
```
## Operation: addOrganization
Create an org

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Org Object": {
      "$ref": "#/definitions/Org"
    }
  },
  "additionalProperties": false,
  "required": [
    "Org Object"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OrgResponse"
  },
  "type": "array"
}
```
## Operation: getMyOrganization
Get org information

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OrgResponse"
  },
  "type": "array"
}
```
## Operation: listRules
List rules

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleShortResponse"
  },
  "type": "array"
}
```
## Operation: addRule
Create a new rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Rule Object": {
      "$ref": "#/definitions/Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "Rule Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleFullResponse"
}
```
## Operation: removeRule
Delete a rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "Id of rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRule
Get a rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "Id of rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleFullResponse"
  },
  "type": "array"
}
```
## Operation: updateRule
Update information about a specific rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "Id of user"
    },
    "Rule Object": {
      "$ref": "#/definitions/Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id",
    "Rule Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleFullResponse"
}
```
## Operation: runRule
Run a rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "Id of rule"
    },
    "initial_data": {
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: listTriggers
Triggers in an app

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TriggerShortResponse"
  },
  "type": "array"
}
```
## Operation: addTrigger
Create a new trigger in an app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Trigger Object": {
      "$ref": "#/definitions/Trigger54"
    }
  },
  "additionalProperties": false,
  "required": [
    "Trigger Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TriggerShortResponse"
}
```
## Operation: removeTrigger
Delete a trigger

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Id of Trigger"
    }
  },
  "additionalProperties": false,
  "required": [
    "trigger_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTrigger
Get a trigger

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Id of Trigger"
    }
  },
  "additionalProperties": false,
  "required": [
    "trigger_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TriggerFullResponse"
  },
  "type": "array"
}
```
## Operation: updateTrigger
Update a trigger

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Id of user"
    },
    "Trigger Object": {
      "$ref": "#/definitions/Trigger54"
    }
  },
  "additionalProperties": false,
  "required": [
    "trigger_id",
    "Trigger Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TriggerShortResponse"
}
```
## Operation: listAppUsers
Users

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppUserResponse"
  },
  "type": "array"
}
```
## Operation: addAppUser
Create a new App User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App User Object": {
      "$ref": "#/definitions/AppUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "App User Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppUserResponse"
}
```
## Operation: listAdminUsers
Admin users

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AdminUserResponse"
  },
  "type": "array"
}
```
## Operation: addAdminUser
Create a new admin user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Admin_User Object": {
      "$ref": "#/definitions/AdminUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "Admin_User Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdminUserResponse"
}
```
## Operation: removeAdminUser
Remove an admin user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of Admin_User"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAdminUser
Get an admin user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of Admin_User"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AdminUserResponse"
  },
  "type": "array"
}
```
## Operation: updateAdminUser
Update information about an admin user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    },
    "Admin_User Object": {
      "$ref": "#/definitions/AdminUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "Admin_User Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdminUserResponse"
}
```
## Operation: authenticateAppUserForChannel
Authenticate a user for a channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AuthorizeUrlResponse"
  },
  "type": "array"
}
```
## Operation: removeAppUser
Remove a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAppUser
Get an App User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of App User"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AppUserResponse"
  },
  "type": "array"
}
```
## Operation: updateAppUser
Update information about an App User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    },
    "App User Object": {
      "$ref": "#/definitions/AppUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "App User Object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppUserResponse"
}
```
## Operation: listAppUserChannels
Channels available to a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserChannel"
  },
  "type": "array"
}
```
## Operation: addAppUserToChannel
Assign a channel to a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    },
    "channel_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserChannel"
}
```
## Operation: removeAppUserFromChannel
Remove a user channel assignment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "channel_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAppUserChannel
Get a user channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "channel_id": {
      "type": "string",
      "description": "Id of Channel"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "channel_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserChannel"
  },
  "type": "array"
}
```
## Operation: listAppUserRules
Rules for a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of user"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleShortResponse"
  },
  "type": "array"
}
```
## Operation: removeAppUserFromRule
Remove a rule user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "rule_id": {
      "type": "string",
      "description": "Id of Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "rule_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAppUserRule
Get a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "rule_id": {
      "type": "string",
      "description": "Id of Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleFullResponse"
  },
  "type": "array"
}
```
## Operation: addAppUserToRule
Assign a user to a rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "rule_id": {
      "type": "string",
      "description": "Id of Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleShortResponse"
}
```
## Operation: runRuleForAppUser
Run rule for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "Id of User"
    },
    "rule_id": {
      "type": "string",
      "description": "Id of Rule"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
