# @datafire/3blades_ai

Client library for 3blades

## Installation and Usage
```bash
npm install --save @datafire/3blades_ai
```
```js
let blades_ai = require('@datafire/3blades_ai').create({
  jwt: ""
});

blades_ai.users_create({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### auth.jwt_token_auth.post
Create JSON Web Token (JWT)


```js
blades_ai.auth.jwt_token_auth.post({}, context)
```

#### Input
* input `object`
  * jwt_data [JWTData](#jwtdata)

#### Output
* output [JWT](#jwt)

### auth.jwt_token_refresh.post
Obtains a new JSON Web Token using existing user credentials.


```js
blades_ai.auth.jwt_token_refresh.post({}, context)
```

#### Input
* input `object`
  * refreshjwt_data [RefreshJSONWebTokenData](#refreshjsonwebtokendata)

#### Output
* output [RefreshJSONWebToken](#refreshjsonwebtoken)

### auth.jwt_token_verify.post
Checks veraciy of token.


```js
blades_ai.auth.jwt_token_verify.post({}, context)
```

#### Input
* input `object`
  * verifyjwt_data [VerifyJSONWebTokenData](#verifyjsonwebtokendata)

#### Output
* output [VerifyJSONWebToken](#verifyjsonwebtoken)

### oauth_login



```js
blades_ai.oauth_login({
  "provider": ""
}, context)
```

#### Input
* input `object`
  * provider **required** `string` (values: github, google, slack): OAuth2 provider

#### Output
*Output schema unknown*

### auth_register
User registration requires confirming email address to activate user.


```js
blades_ai.auth_register({}, context)
```

#### Input
* input `object`
  * user_data [UserData](#userdata)

#### Output
* output [User](#user)

### me
A convenience endpoint that is equivalent to GET /v1/users/profiles/<my user id>/


```js
blades_ai.me(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### servers_options_sizes_list
Retrieve available server sizes


```js
blades_ai.servers_options_sizes_list({}, context)
```

#### Input
* input `object`
  * limit `string`: Set limit when retrieving items.
  * offset `string`: Offset when retrieving items.
  * ordering `string`: Set order when retrieving items.

#### Output
* output `array`
  * items [ServerSize](#serversize)

### servers_options_server_size_create
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_create({}, context)
```

#### Input
* input `object`
  * serversize_data [ServerSizeData](#serversizedata)

#### Output
* output [ServerSize](#serversize)

### servers_options_server_size_delete
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_delete({
  "size": ""
}, context)
```

#### Input
* input `object`
  * size **required** `string`: Server size unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### servers_options_resources_read
Get a server size by id


```js
blades_ai.servers_options_resources_read({
  "size": ""
}, context)
```

#### Input
* input `object`
  * size **required** `string`: Server size unique identifier expressed as UUID or name.

#### Output
* output [ServerSize](#serversize)

### servers_options_server_size_update
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_update({
  "size": ""
}, context)
```

#### Input
* input `object`
  * size **required** `string`: Server size unique identifier expressed as UUID or name.
  * serversize_data [ServerSizeData](#serversizedata)

#### Output
* output [ServerSize](#serversize)

### servers_options_server_size_replace
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_replace({
  "size": ""
}, context)
```

#### Input
* input `object`
  * size **required** `string`: Server size unique identifier expressed as UUID or name.
  * serversize_data [ServerSizeData](#serversizedata)

#### Output
* output [ServerSize](#serversize)

### users_list
Get user list


```js
blades_ai.users_list({}, context)
```

#### Input
* input `object`
  * limit `string`: Limit user list.
  * offset `string`: Offset when getting users.
  * username `string`: User username.
  * email `string`: User email.
  * ordering `string`: Ordering when getting users.

#### Output
* output `array`
  * items [User](#user)

### users_create
Only admin users can create new users. New users have active status by default.


```js
blades_ai.users_create({}, context)
```

#### Input
* input `object`
  * user_data [UserData](#userdata)

#### Output
* output [User](#user)

### users_delete
Delete a user


```js
blades_ai.users_delete({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### users_read
Retrieve a user


```js
blades_ai.users_read({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Unique identifier expressed as UUID or username.

#### Output
* output [User](#user)

### users_update
Update a user


```js
blades_ai.users_update({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.
  * user_data [UserData](#userdata)

#### Output
* output [User](#user)

### v1.users.user.api_key.get
Retrieve account's API key


```js
blades_ai.v1.users.user.api_key.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### v1.users.user.api_key.reset.post
Reset a user's API key


```js
blades_ai.v1.users.user.api_key.reset.post({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### user_avatar_delete
Delete avatar


```js
blades_ai.user_avatar_delete({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### user_avatar_get
Retrieve user's avatar


```js
blades_ai.user_avatar_get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUIDor username.

#### Output
*Output schema unknown*

### user_avatar_update
Update a project file


```js
blades_ai.user_avatar_update({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
* output [User](#user)

### user_avatar_set
Add user avatar


```js
blades_ai.user_avatar_set({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
* output [User](#user)

### users_emails_list
Retrieve account email addresses


```js
blades_ai.users_emails_list({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier as expressed as UUID or username.
  * limit `string`: Limite when getting email list.
  * offset `string`: Offset when getting email list.
  * ordering `string`: Ordering when getting email list.

#### Output
* output `array`
  * items [Email](#email)

### users_emails_create
Create an email address


```js
blades_ai.users_emails_create({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.
  * email_data [EmailData](#emaildata)

#### Output
* output [Email](#email)

### users_emails_delete
Delete an email address


```js
blades_ai.users_emails_delete({
  "email_id": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: Email unique identifier expressed as UUID.
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### users_emails_read
Retrieve a user's email addresses


```js
blades_ai.users_emails_read({
  "email_id": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: Email unique identifier expressed as UUID.
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
* output [Email](#email)

### users_emails_update
Update an email address


```js
blades_ai.users_emails_update({
  "email_id": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: Email unique identifier expressed as UUID.
  * user **required** `string`: User unique identifier expressed as UUID or username.
  * email_data [EmailData](#emaildata)

#### Output
* output [Email](#email)

### users_emails_replace
Replace an email address


```js
blades_ai.users_emails_replace({
  "email_id": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: Email unique identifier expressed as UUID.
  * user **required** `string`: User unique identifier expressed as UUID or username.
  * email_data [EmailData](#emaildata)

#### Output
* output [Email](#email)

### v1.users.user.ssh_key.get
Retrieve an SSH key


```js
blades_ai.v1.users.user.ssh_key.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### v1.users.user.ssh_key.reset.post
Recreate an SSH key


```js
blades_ai.v1.users.user.ssh_key.reset.post({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: User unique identifier expressed as UUID or username.

#### Output
*Output schema unknown*

### billing_cards_list
Get credit cards


```js
blades_ai.billing_cards_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * limit `string`: Set limit when retrieving credit or debit cards.
  * offset `string`: Set offset when retriving cards.
  * ordering `string`: Order when retrieving cards.

#### Output
* output `array`
  * items [Card](#card)

### billing_cards_create
Create new credit card


```js
blades_ai.billing_cards_create({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * card_data [CardDataPost](#carddatapost)

#### Output
* output [Card](#card)

### billing_cards_delete
Delete a credit card


```js
blades_ai.billing_cards_delete({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Card unique identifier expressed as UUID.

#### Output
*Output schema unknown*

### billing_cards_read
Get credit card by id


```js
blades_ai.billing_cards_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: User unique identifier expressed as UUID.

#### Output
* output [Card](#card)

### billing_cards_update
Update a credit card


```js
blades_ai.billing_cards_update({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Card unique identifier.
  * card_data [CardDataPutandPatch](#carddataputandpatch)

#### Output
* output [Card](#card)

### billing_cards_replace
Replace a credit card


```js
blades_ai.billing_cards_replace({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`
  * card_data [CardDataPutandPatch](#carddataputandpatch)

#### Output
* output [Card](#card)

### billing_invoices_list
Get invoices


```js
blades_ai.billing_invoices_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.

#### Output
* output `array`
  * items [Invoice](#invoice)

### billing_invoices_read
Get an invoice


```js
blades_ai.billing_invoices_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Invoice unique identifier expressed as UUID.

#### Output
* output [Invoice](#invoice)

### billing_invoice_items_list
Get invoice items for a given invoice.


```js
blades_ai.billing_invoice_items_list({
  "namespace": "",
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * invoice_id **required** `string`: Invoice id, expressed as UUID.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.

#### Output
* output `array`
  * items [InvoiceItem](#invoiceitem)

### billing_invoice_items_read
Get a specific InvoiceItem.


```js
blades_ai.billing_invoice_items_read({
  "namespace": "",
  "invoice_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * invoice_id **required** `string`: Invoice id, expressed as UUID.
  * id **required** `string`: InvoiceItem id, expressed as UUID.

#### Output
* output [InvoiceItem](#invoiceitem)

### billing_plans_list
Get billing plans


```js
blades_ai.billing_plans_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.

#### Output
* output `array`
  * items [Plan](#plan)

### billing_plans_read
Get a billing plan


```js
blades_ai.billing_plans_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Plan unique identifier expressed as UUID.

#### Output
* output [Plan](#plan)

### billing_subscriptions_list
Get active subscriptons


```js
blades_ai.billing_subscriptions_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.

#### Output
* output `array`
  * items [Subscription](#subscription)

### billing_subscriptions_create
Create a new subscription


```js
blades_ai.billing_subscriptions_create({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * subscription_data [SubscriptionData](#subscriptiondata)

#### Output
* output [Subscription](#subscription)

### billing_subscriptions_delete
Delete a subscription


```js
blades_ai.billing_subscriptions_delete({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Subscription unique identifier expressed as UUID.

#### Output
*Output schema unknown*

### billing_subscriptions_read
Get a subscriptions


```js
blades_ai.billing_subscriptions_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Unique identifier expressed as UUID.

#### Output
* output [Subscription](#subscription)

### hosts_list
Get available hosts


```js
blades_ai.hosts_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * limit `string`: Limite when getting items.
  * offset `string`: Offset when getting items.
  * name `string`: Name, when getting items.
  * ordering `string`: Ordering when getting items.

#### Output
* output `array`
  * items [DockerHost](#dockerhost)

### hosts_create
Create a new host


```js
blades_ai.hosts_create({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * dockerhost_data [DockerHostData](#dockerhostdata)

#### Output
* output [DockerHost](#dockerhost)

### hosts_delete
Delete a host


```js
blades_ai.hosts_delete({
  "namespace": "",
  "host": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * host **required** `string`: DockerHost unique identifier expressed as UUID.

#### Output
*Output schema unknown*

### hosts_read
Get a host


```js
blades_ai.hosts_read({
  "namespace": "",
  "host": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * host **required** `string`: Unique identifier expressed as UUID or name.

#### Output
* output [DockerHost](#dockerhost)

### hosts_update
Update a host


```js
blades_ai.hosts_update({
  "namespace": "",
  "host": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * host **required** `string`
  * dockerhost_data [DockerHostData](#dockerhostdata)

#### Output
* output [DockerHost](#dockerhost)

### hosts_replace
Replace a host


```js
blades_ai.hosts_replace({
  "namespace": "",
  "host": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * host **required** `string`
  * dockerhost_data [DockerHostData](#dockerhostdata)

#### Output
* output [DockerHost](#dockerhost)

### notifications_list
Get notifications of all types and entities for the authenticated user.


```js
blades_ai.notifications_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.
  * read `boolean`: When true, get only read notifications. When false, get only unread notifications. Default behavior is to return both read and unread.

#### Output
* output `array`
  * items [Notification](#notification)

### notifications_update_list
Mark a list of notifications as either read or unread.


```js
blades_ai.notifications_update_list({
  "namespace": "",
  "notification_data": {
    "notifications": [],
    "read": true
  }
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * notification_data **required** [NotificationListUpdateData](#notificationlistupdatedata)

#### Output
* output [Notification](#notification)

### notifications_list_entity
Get notifications of all types and entities for the authenticated user.


```js
blades_ai.notifications_list_entity({
  "namespace": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * limit `string`: Limit when getting items.
  * offset `string`: Offset when getting items.
  * ordering `string`: Ordering when getting items.
  * entity **required** `string` (values: billing): Entity to filter notifications by.
  * read `boolean`: When true, get only read notifications. When false, get only unread notifications. Default behavior is to return both read and unread.

#### Output
* output `array`
  * items [Notification](#notification)

### notifications_update_entity_list
Mark a list of notifications as either read or unread.


```js
blades_ai.notifications_update_entity_list({
  "namespace": "",
  "entity": "",
  "notification_data": {
    "notifications": [],
    "read": true
  }
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * entity **required** `string` (values: billing): Entity to filter notifications by.
  * notification_data **required** [NotificationListUpdateData](#notificationlistupdatedata)

#### Output
* output [Notification](#notification)

### notification_settings_read
Retrieve global notification settings for the authenticated user


```js
blades_ai.notification_settings_read({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.

#### Output
* output `array`
  * items [NotificationSettings](#notificationsettings)

### notification_settings_update
Modify global notification settings.


```js
blades_ai.notification_settings_update({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * notification_settings_data [NotificationSettingsData](#notificationsettingsdata)

#### Output
* output [NotificationSettings](#notificationsettings)

### notification_settings_create
Create global notification settings


```js
blades_ai.notification_settings_create({
  "namespace": "",
  "notification_settings_data": {
    "enabled": true,
    "emails_enabled": true
  }
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * notification_settings_data **required** [NotificationSettingsData](#notificationsettingsdata)

#### Output
* output [NotificationSettings](#notificationsettings)

### notification_settings_entity_read
Retrieve global notification settings for the authenticated user


```js
blades_ai.notification_settings_entity_read({
  "namespace": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * entity **required** `string` (values: billing): Entity whose settings should be retrieved.

#### Output
* output `array`
  * items [NotificationSettings](#notificationsettings)

### notification_settings_entity_update
Modify global notification settings.


```js
blades_ai.notification_settings_entity_update({
  "namespace": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * entity **required** `string` (values: billing): Entity whose settings should be retrieved.
  * notification_settings_data [NotificationSettingsData](#notificationsettingsdata)

#### Output
* output [NotificationSettings](#notificationsettings)

### notification_settings_entity_create
Create global notification settings


```js
blades_ai.notification_settings_entity_create({
  "namespace": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * entity **required** `string` (values: billing): Entity whose settings should be retrieved.
  * notification_settings_data [NotificationSettingsData](#notificationsettingsdata)

#### Output
* output [NotificationSettings](#notificationsettings)

### notification_read
Retrieve a specific notification.


```js
blades_ai.notification_read({
  "namespace": "",
  "notification_id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * notification_id **required** `string`: Notification UUID.

#### Output
* output [Notification](#notification)

### notification_update
Mark a specific notification as either read or unread.


```js
blades_ai.notification_update({
  "namespace": "",
  "notification_id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team data.
  * notification_id **required** `string`: Notification UUID.
  * notification_data [NotificationUpdateData](#notificationupdatedata)

#### Output
* output [Notification](#notification)

### projects_list
Get available projects


```js
blades_ai.projects_list({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when getting data.
  * offset `string`: Offset when getting data.
  * private `string`: Private project or public project.
  * name `string`: Project name.
  * ordering `string`: Ordering when getting projects.

#### Output
* output `array`
  * items [Project](#project)

### projects_create
Create a new project


```js
blades_ai.projects_create({
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project_data [ProjectData](#projectdata)

#### Output
* output [Project](#project)

### project_copy_check
Check if you are able to copy a project to your account.


```js
blades_ai.project_copy_check({
  "namespace": "",
  "project_copy_data": {
    "project": ""
  }
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project_copy_data **required** `object`
    * project **required** `string`: UUID of the project the user wishes to copy.

#### Output
*Output schema unknown*

### project_copy
Copy a project to your own account.


```js
blades_ai.project_copy({
  "namespace": "",
  "project_copy_data": {
    "project": ""
  }
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project_copy_data **required** `object`
    * project **required** `string`: UUID of the project the user wishes to copy.

#### Output
* output [Project](#project)

### projects_delete
Delete a project


```js
blades_ai.projects_delete({
  "namespace": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### projects_read
Get a project


```js
blades_ai.projects_read({
  "namespace": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.

#### Output
* output [Project](#project)

### projects_update
Update a project


```js
blades_ai.projects_update({
  "namespace": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * project_data [ProjectData](#projectdata)

#### Output
* output [Project](#project)

### projects_replace
Replace a project


```js
blades_ai.projects_replace({
  "namespace": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team namespace.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * project_data [ProjectData](#projectdata)

#### Output
* output [Project](#project)

### projects_collaborators_list
Get project collaborators


```js
blades_ai.projects_collaborators_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when retrieving items.
  * offset `string`: Offset when retrieving items.
  * ordering `string`: Ordering when retrieving items.

#### Output
* output `array`
  * items [Collaborator](#collaborator)

### projects_collaborators_create
Create project collaborators


```js
blades_ai.projects_collaborators_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * collaborator_data [CollaboratorData](#collaboratordata)

#### Output
* output [Collaborator](#collaborator)

### projects_collaborators_delete
Delete a project collaborator


```js
blades_ai.projects_collaborators_delete({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier.
  * namespace **required** `string`: User or team name.
  * collaborator **required** `string`: Collaborator unique identifier.

#### Output
*Output schema unknown*

### projects_collaborators_read
Get a project collaborator


```js
blades_ai.projects_collaborators_read({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier.
  * namespace **required** `string`: User or team name.
  * collaborator **required** `string`: Collaborator unique identifier expressed as UUID or name.

#### Output
* output [Collaborator](#collaborator)

### projects_collaborators_update
Update project collaborator


```js
blades_ai.projects_collaborators_update({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`
  * namespace **required** `string`: User or team name.
  * collaborator **required** `string`
  * collaborator_data [CollaboratorData](#collaboratordata)

#### Output
* output [Collaborator](#collaborator)

### projects_project_files_list
Get project files


```js
blades_ai.projects_project_files_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Unique identifier for project file expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit when getting project file list.
  * offset `string`: Offset when getting project file list.
  * ordering `string`: Ordering of list values when getting project file list.
  * filename `string`: Exact file name, relative to the project root. If no such file is found, an empty list will be returned.
  * content `string`: Determines whether or not content is returned as base64. Defaults to false.

#### Output
* output `array`
  * items [ProjectFile](#projectfile)

### projects_project_files_create
Create project files


```js
blades_ai.projects_project_files_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier.
  * namespace **required** `string`: User or team name.
  * file `string`: File to send, to create new file. This parameter is only used with form data and may include multiple files.
  * base64_data `string`: Fila data, represented as base64.
  * name `string`: File name. May include path when creating file with base64 field.
  * path `string`: File path. Defaults to (/).

#### Output
* output [ProjectFile](#projectfile)

### projects_project_files_delete
Delete a project file


```js
blades_ai.projects_project_files_delete({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifer.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: File unique identifier.

#### Output
*Output schema unknown*

### projects_project_files_read
Get a project file


```js
blades_ai.projects_project_files_read({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifer.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: File unique identifier.
  * content `string`: Determines whether or not content is returned as base64. Defaults to false.

#### Output
* output [ProjectFile](#projectfile)

### projects_project_files_update
Update a project file


```js
blades_ai.projects_project_files_update({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifer.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: File unique identifier.
  * file `string`: File to send, to create new file. This parameter is only used with form data and may include multiple files.
  * base64_data `string`: Fila data, represented as base64.
  * name `string`: File name. May include path when creating file with base64 field.
  * path `string`: File path. Defaults to (/).

#### Output
* output [ProjectFile](#projectfile)

### projects_project_files_replace
Replace a project file


```js
blades_ai.projects_project_files_replace({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifer.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: File unique identifier.
  * file `string`: File to send, to create new file. This parameter is only used with form data and may include multiple files.
  * base64_data `string`: Fila data, represented as base64.
  * name `string`: File name. May include path when creating file with base64 field.
  * path `string`: File path. Defaults to (/).

#### Output
* output [ProjectFile](#projectfile)

### projects_servers_list
Retrieve servers


```js
blades_ai.projects_servers_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit results when getting server list.
  * offset `string`: Offset results when getting server list.
  * name `string`: Server name.
  * ordering `string`: Ordering option when getting server list.

#### Output
* output `array`
  * items [Server](#server)

### projects_servers_create
Create a new server


```js
blades_ai.projects_servers_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifer expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server_data [ServerData](#serverdata)

#### Output
* output [Server](#server)

### projects_servers_delete
Delete a server


```js
blades_ai.projects_servers_delete({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: User unique identifier.

#### Output
*Output schema unknown*

### projects_servers_read
Retrieve a server


```js
blades_ai.projects_servers_read({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.

#### Output
* output [Server](#server)

### projects_servers_update
Update a server


```js
blades_ai.projects_servers_update({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * server_data [ServerData](#serverdata)

#### Output
* output [Server](#server)

### projects_servers_replace
Replace a server


```js
blades_ai.projects_servers_replace({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * server_data [ServerData](#serverdata)

#### Output
* output [Server](#server)

### v1.namespace.projects.project.servers.server.api_key.get
Get server API key


```js
blades_ai.v1.namespace.projects.project.servers.server.api_key.get({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.

#### Output
* output [JWT](#jwt)

### projects_servers_auth
Server api key validation


```js
blades_ai.projects_servers_auth({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### v1.namespace.projects.project.servers.server.run_stats.post
Create a new server's run statistics


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.post({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * serverrunstats_data [ServerRunStatisticsData](#serverrunstatisticsdata)

#### Output
* output [ServerRunStatistics](#serverrunstatistics)

### v1.namespace.projects.project.servers.server.run_stats.id.delete
Delete a server's statistics


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.id.delete({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server run statistics unique identifier expressed as UUID.

#### Output
*Output schema unknown*

### v1.namespace.projects.project.servers.server.run_stats.id.get
Retrieve statistics for a server


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.id.get({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Run statistics unique identifier expressed as UUID.

#### Output
* output [ServerRunStatistics](#serverrunstatistics)

### v1.namespace.projects.project.servers.server.run_stats.id.patch
Update a server's statistics


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.id.patch({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server run statistics unique identifier expressed as UUID.
  * serverrunstats_data [ServerRunStatisticsData](#serverrunstatisticsdata)

#### Output
* output [ServerRunStatistics](#serverrunstatistics)

### v1.namespace.projects.project.servers.server.run_stats.id.put
Replace a server's statistics


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.id.put({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server run statistics expressed as UUID.
  * serverrunstats_data [ServerRunStatisticsData](#serverrunstatisticsdata)

#### Output
* output [ServerRunStatistics](#serverrunstatistics)

### v1.namespace.projects.project.servers.server.ssh_tunnels.get
Get SSH Tunnels associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.get({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * limit `string`: Limit retrieved items.
  * offset `string`: Offset retrieved items.
  * ordering `string`: Order retrieved items.

#### Output
* output `array`
  * items [SshTunnel](#sshtunnel)

### v1.namespace.projects.project.servers.server.ssh_tunnels.post
Create SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.post({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * sshtunnel_data [SshTunnelData](#sshtunneldata)

#### Output
* output [SshTunnel](#sshtunnel)

### v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.delete
Delete an SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.delete({
  "server": "",
  "project": "",
  "namespace": "",
  "tunnel": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * tunnel **required** `string`: SSH tunnel unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.get
Get an SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.get({
  "server": "",
  "project": "",
  "namespace": "",
  "tunnel": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * tunnel **required** `string`: SSH tunnel unique identifier expressed as UUID or name.

#### Output
* output [SshTunnel](#sshtunnel)

### v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.patch
Update an SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.patch({
  "server": "",
  "project": "",
  "namespace": "",
  "tunnel": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`
  * project **required** `string`
  * namespace **required** `string`: User or team name.
  * tunnel **required** `string`
  * sshtunnel_data [SshTunnelData](#sshtunneldata)

#### Output
* output [SshTunnel](#sshtunnel)

### v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.put
Replace SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.tunnel.put({
  "server": "",
  "project": "",
  "namespace": "",
  "tunnel": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * tunnel **required** `string`: SSH tunnel unique identifier expressed as UUID or name.
  * sshtunnel_data [SshTunnelData](#sshtunneldata)

#### Output
* output [SshTunnel](#sshtunnel)

### projects_servers_start
Start a server


```js
blades_ai.projects_servers_start({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### projects_servers_stats_delete
Delete a server's statistics


```js
blades_ai.projects_servers_stats_delete({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Stats unique identifier expressed as UUID.

#### Output
*Output schema unknown*

### projects_servers_stats_read
Retrieve a server's statistics


```js
blades_ai.projects_servers_stats_read({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server statistics unique identifier expressed as UUID.

#### Output
* output [ServerStatistics](#serverstatistics)

### projects_servers_stats_update
Update a server's statistics


```js
blades_ai.projects_servers_stats_update({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server statistics unique identifier expressed as UUID.
  * serverstats_data [ServerStatisticsData](#serverstatisticsdata)

#### Output
* output [ServerStatistics](#serverstatistics)

### projects_servers_stats_replace
Replace a server's statistics


```js
blades_ai.projects_servers_stats_replace({
  "server": "",
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * id **required** `string`: Server statistics unique identifier expressed as UUID.
  * serverstats_data [ServerStatisticsData](#serverstatisticsdata)

#### Output
* output [ServerStatistics](#serverstatistics)

### projects_servers_stop
Stop a server


```js
blades_ai.projects_servers_stop({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server **required** `string`: Server unique identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### service_trigger_list
Retrieve server triggers


```js
blades_ai.service_trigger_list({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * name `string`: Trigger name.
  * limit `string`: Limit when getting triggers.
  * offset `string`: Offset when getting triggers.
  * ordering `string`: Ordering when getting triggers.

#### Output
* output `array`
  * items [ServerAction](#serveraction)

### service_trigger_create
Create a new server trigger


```js
blades_ai.service_trigger_create({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * server_action [ServerActionData](#serveractiondata)

#### Output
* output [ServerAction](#serveraction)

### service_trigger_delete
Delete a server trigger


```js
blades_ai.service_trigger_delete({
  "server": "",
  "project": "",
  "namespace": "",
  "trigger": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * trigger **required** `string`: Trigger identifier expressed as UUID or name.

#### Output
*Output schema unknown*

### service_trigger_read
Get a server trigger


```js
blades_ai.service_trigger_read({
  "server": "",
  "project": "",
  "namespace": "",
  "trigger": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * trigger **required** `string`: Trigger unique identifier.

#### Output
* output [ServerAction](#serveraction)

### service_trigger_update
Update a server trigger


```js
blades_ai.service_trigger_update({
  "server": "",
  "project": "",
  "namespace": "",
  "trigger": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * trigger **required** `string`: Trigger identifier expressed as UUID or name.
  * server_action [ServerActionData](#serveractiondata)

#### Output
* output [ServerAction](#serveraction)

### service_trigger_replace
Replace a server trigger


```js
blades_ai.service_trigger_replace({
  "server": "",
  "project": "",
  "namespace": "",
  "trigger": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Server unique identifier expressed as UUID or name.
  * project **required** `string`: Project unique identifier expressed as UUID or name.
  * namespace **required** `string`: User or team name.
  * trigger **required** `string`: Trigger unique identifier.
  * server_action [ServerActionData](#serveractiondata)

#### Output
* output [ServerAction](#serveraction)

### search
Get a search results


```js
blades_ai.search({
  "namespace": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`: User or team name.
  * q **required** `string`: Search string.
  * type `string` (values: users, projects, servers): Limit results to specific types.
  * limit `string`: Limit data when getting items.
  * offset `string`: Offset data when getting items.

#### Output
* output `array`
  * items [Search](#search)



## Definitions

### Action
* Action `object`
  * action **required** `string`: Action name.
  * action_name `string`: Action name.
  * can_be_cancelled `boolean`: Can action be cancelled, or not.
  * can_be_retried `boolean`: May action be retried, or not.
  * end_date `string`: Action needs to end before a certain date and time.
  * id `string`: Action unique identifier, expressed as UUID.
  * ip `string`: IP address that action is related to.
  * is_user_action `boolean`: Is the action related to a user, or not.
  * method **required** `string`: Action method.
  * object `string`: Action object.
  * path `string`: Action path.
  * payload `object`: Object action payload.
  * resource_uri `string`: Resource URI.
  * start_date `string`: Action date and time start.
  * state **required** `string`: Action state.
  * user `string`: User that action is assigned to.
  * user_agent **required** `string`: User agent that action is related to.

### AuthToken
* AuthToken `object`
  * token `string`: Unique JWT authorization token.

### AuthTokenData
* AuthTokenData `object`
  * password **required** `string`: User's password.
  * username **required** `string`: User's username.

### AuthTokenError
* AuthTokenError `object`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * password `array`: Password field errors.
    * items `string`
  * token `array`: Token field errors.
    * items `string`
  * username `array`: Username field errors.
    * items `string`

### Card
* Card `object`
  * address_city `string`: Address city.
  * address_country `string`: Address country.
  * address_line1 `string`: Address line 1.
  * address_line1_check `string`: Address line 1 check, when processing card.
  * address_line2 `string`: Address line 2.
  * address_state `string`: Address state.
  * address_zip `string`: Address zip code.
  * address_zip_check `string`: Address check, when processing card.
  * brand `string`: Credit or debit card brand.
  * created `string`: Card date and time creation.
  * customer `string`: Card customer.
  * cvc_check `string`: Security code check.
  * exp_month `integer`: Card expiration month.
  * exp_year `integer`: Card expiration year.
  * fingerprint `string`: Card fingerprint.
  * funding `string`: Funding.
  * id `string`: Card unique identifier, expressed as UUID.
  * last4 `string`: Last four digits of credit or debit card.
  * name `string`: Card name.
  * stripe_id `string`: Unique stripe identifier.
  * token `string`: Card unique token.

### CardDataPost
* CardDataPost `object`
  * address_city `string`: Address city.
  * address_country `string`: Address country.
  * address_line1 `string`: Address line 1.
  * address_line2 `string`: Address line 2.
  * address_state `string`: Address state.
  * address_zip `string`: Address zip code.
  * exp_month `integer`: Card expiration month.
  * exp_year `integer`: Card expiration year.
  * name `string`: Card name.
  * token `string`: Card unique token.

### CardDataPutandPatch
* CardDataPutandPatch `object`
  * address_city `string`: Address city.
  * address_country `string`: Address country.
  * address_line1 `string`: Address line 1.
  * address_line2 `string`: Address line 2.
  * address_state `string`: Address state.
  * address_zip `string`: Address zip code.
  * exp_month `integer`: Card expiration month.
  * exp_year `integer`: Card expiration year.
  * name `string`: Card name.

### CardError
* CardError `object`
  * address_city `array`: address_city field errors
    * items `string`
  * address_country `array`: address_country field errors
    * items `string`
  * address_line1 `array`: address_line1 field errors
    * items `string`
  * address_line1_check `array`: address_line1_check field errors
    * items `string`
  * address_line2 `array`: address_line2 field errors
    * items `string`
  * address_state `array`: address_state field errors
    * items `string`
  * address_zip `array`: address_zip field errors
    * items `string`
  * address_zip_check `array`: address_zip_check field errors
    * items `string`
  * brand `array`: brand field errors
    * items `string`
  * created `array`: created field errors
    * items `string`
  * customer `array`: customer field errors
    * items `string`
  * cvc_check `array`: cvc_check field errors
    * items `string`
  * exp_month `array`: exp_month field errors
    * items `string`
  * exp_year `array`: exp_year field errors
    * items `string`
  * fingerprint `array`: fingerprint field errors
    * items `string`
  * funding `array`: funding field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * last4 `array`: last4 field errors
    * items `string`
  * name `array`: name field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * stripe_id `array`: stripe_id field errors
    * items `string`
  * token `array`: token field errors
    * items `string`

### CardUpdateError
* CardUpdateError `object`
  * address_city `array`: address_city field errors
    * items `string`
  * address_country `array`: address_country field errors
    * items `string`
  * address_line1 `array`: address_line1 field errors
    * items `string`
  * address_line1_check `array`: address_line1_check field errors
    * items `string`
  * address_line2 `array`: address_line2 field errors
    * items `string`
  * address_state `array`: address_state field errors
    * items `string`
  * address_zip `array`: address_zip field errors
    * items `string`
  * address_zip_check `array`: address_zip_check field errors
    * items `string`
  * brand `array`: brand field errors
    * items `string`
  * created `array`: created field errors
    * items `string`
  * customer `array`: customer field errors
    * items `string`
  * cvc_check `array`: cvc_check field errors
    * items `string`
  * exp_month `array`: exp_month field errors
    * items `string`
  * exp_year `array`: exp_year field errors
    * items `string`
  * fingerprint `array`: fingerprint field errors
    * items `string`
  * funding `array`: funding field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * last4 `array`: last4 field errors
    * items `string`
  * name `array`: name field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * stripe_id `array`: stripe_id field errors
    * items `string`
  * token `array`: token field errors
    * items `string`

### Collaborator
* Collaborator `object`
  * email `string`: Collaborator's valid email address.
  * first_name `string`: Collaborator's first name.
  * id `string`: Collaborator unique identifier in UUID format.
  * joined `string`: Date time of when collaborator joined.
  * last_name `string`: Collaborator's last name.
  * owner `boolean`: Boolean that states whether collaborator is project owner, or not.
  * permissions `array`: Collaborator permissions. Project creators are assigned owner
    * items `string` (values: write_project, read_project)
  * username `string`: Collaborator's user name. This must be a valid user name within the

### CollaboratorData
* CollaboratorData `object`
  * member **required** `string`: Project member username.
  * owner `boolean`: Project owner. Defaults to false.
  * permissions **required** `string` (values: read_project, write_project): Permissions assigned to collaborator.

### CollaboratorError
* CollaboratorError `object`
  * email `array`: Email field errors.
    * items `string`
  * first_name `array`: First name field errors.
    * items `string`
  * id `array`: Id field errors this
    * items `string`
  * joined `array`: Joined field errors.
    * items `string`
  * last_name `array`: Last name field errors.
    * items `string`
  * member **required** `array`: Member field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * owner `array`: Owner field errors.
    * items `string`
  * permissions **required** `array`: Permissions field errors.
    * items `string`
  * username `array`: Username field errors.
    * items `string`

### Customer
* Customer `object`
  * account_balance `integer`: Customer account balance.
  * created `string`: Date and time for customer creation.
  * currency `string`: Currency used by customer.
  * default_source `string`: Customer default source.
  * id `string`: Customer unique identifier expressed as UUID.
  * last_invoice_sync `string`: Date and time for last invoice sync.
  * livemode `boolean`: Customer live mode.
  * metadata `object`: Optional customer meta data object.
  * stripe_id `string`: Stripe identifier.
  * user **required** `string`: Customer primary user.

### CustomerData
* CustomerData `object`
  * account_balance `integer`: Account balance.
  * currency `string`: Customer preferred currency.
  * default_source `string`: Default source.
  * last_invoice_sync `string`: List date and time invoice was synced.
  * metadata `object`: Customer meta data.
  * user **required** `string`: User corresponding to customer.

### CustomerError
* CustomerError `object`
  * account_balance `array`: account_balance field errors
    * items `string`
  * created `array`: created field errors
    * items `string`
  * currency `array`: currency field errors
    * items `string`
  * default_source `array`: default_source field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * last_invoice_sync `array`: last_invoice_sync field errors
    * items `string`
  * livemode `array`: livemode field errors
    * items `string`
  * metadata `array`: metadata field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * stripe_id `array`: stripe_id field errors
    * items `string`
  * user `array`: user field errors
    * items `string`

### DockerHost
* DockerHost `object`
  * id `string`: Unique identifier for docker host as UUID.
  * ip **required** `string`: Docker host IPv4 address
  * name **required** `string`: Docker host name.
  * port `integer`: Docker host port.
  * status `string`: Docker host status.

### DockerHostData
* DockerHostData `object`
  * ip **required** `string`: DockerHost IPv4 address.
  * name **required** `string`: DockerHost name.
  * port `integer`: DockerHost port.

### DockerHostError
* DockerHostError `object`
  * id `array`: Id field errors.
    * items `string`
  * ip `array`: Ip field errors
    * items `string`
  * name `array`: Name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * port `array`: Port field errors.
    * items `string`
  * status `array`: Status field errors.
    * items `string`

### Email
* Email `object`
  * address **required** `string`: Email address.
  * public `boolean`: Boolean to determine if email is public or private.
  * unsubscribed `boolean`: Boolean to determine whether user is suscribed or unsubscribed to out going email campaigns.

### EmailData
* EmailData `object`
  * address **required** `string`: Email address.
  * public `boolean`: Public or private email address.
  * unsubscribed `boolean`: Unsubscribed or suscribed.

### EmailError
* EmailError `object`
  * address `array`: Address field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * public `array`: Public field errors.
    * items `string`
  * unsubscribed `array`: Unsubscribed field errors.
    * items `string`

### Invoice
* Invoice `object`
  * amount_due **required** `integer`: Amount due set in invoice.
  * application_fee `integer`: Application fee set in invoice.
  * attempt_count `integer`: Number of attempts to deliver invoice.
  * attempted `boolean`: Boolean to determine whether delivery attempt executed, or not.
  * closed `boolean`: Invoice closed, or pending.
  * created **required** `string`: Date and time when invoice was created.
  * currency **required** `string`: Currency used in invoice.
  * customer **required** `string`: Customer name.
  * description `string`: Invoice description.
  * id `string`: Invoice unique identifier expressed as UUID.
  * invoice_date **required** `string`: Invoice issue date.
  * livemode `boolean`: Boolean that determines whether invoice is live, or not.
  * metadata `object`: Optional metadata object of invoice.
  * next_payment_attempt `string`: Next payment attempt.
  * paid `boolean`: Determines whether invoice has been paid, or not.
  * period_end **required** `string`: Invoice end period.
  * period_start **required** `string`: Invoice start period.
  * reciept_number **required** `string`: Invoice receipt number.
  * starting_balance **required** `integer`: Invoice starting balance.
  * statement_descriptor `string`: Invoice statement descriptor.
  * stripe_id **required** `string`: Stripe account identifier.
  * subscription `string`: Suscription name.
  * subtotal **required** `integer`: Invoice sub total.
  * tax `integer`: Tax, if applicable.
  * total **required** `integer`: Invoice total.

### InvoiceItem
* InvoiceItem `object`
  * amount **required** `integer`: Amount the the invoice item will be billed for.
  * created **required** `string`: Date and time when invoice was created.
  * currency **required** `string`: Currency used in invoice.
  * description `string`: Item description.
  * id `string`: InvoiceItem unique identifier expressed as UUID.
  * invoice **required** `string`: Invoice unique identifier expressed as UUID.
  * invoice_date **required** `string`: Date the item was added to the invoice.
  * livemode `boolean`: Boolean that determines whether invoice is live, or not.
  * metadata `object`: Optional metadata object of invoice.
  * proration `boolean`: Whether or not the items cost will be prorated for the billing period.
  * quantity **required** `integer`: Number of units for this item.
  * stripe_id **required** `string`: Stripe account identifier.

### JWT
* JWT `object`
  * token `string`: Unique JSON Web Token (JWT).

### JWTData
* JWTData `object`
  * password **required** `string`: User password.
  * username **required** `string`: User name.

### JWTError
* JWTError `object`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * password `array`: password field errors
    * items `string`
  * token `array`: token field errors
    * items `string`
  * username `array`: username field errors
    * items `string`

### NotFound
* NotFound `object`
  * detail `string`: Requested item not found.

### Notification
* Notification `object`
  * actor `string`: Unique identifier of the object that triggered the notification.
  * id `string`: Notification unique identifier expressed as a UUID
  * read **required** `boolean`: Whether or not the notification has been marked as read by the user.
  * target `string`: Unique identifier of the object that was acted upon by the object referred to in actor.
  * timestamp `string`: Timestamp that the notification was created at.
  * type `string`: Type of the notification, e.g. invoice.created, subscription.created, etc.

### NotificationError
* NotificationError `object`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * read `array`: read field errors
    * items `string`

### NotificationListUpdateData
* NotificationListUpdateData `object`
  * notifications **required** `array`: An array of notification IDs to update.
    * items `string`
  * read **required** `boolean`: Mark the notification as either read or unread

### NotificationSettings
* NotificationSettings `object`
  * emails_enabled **required** `boolean`: Turn emails on or off.
  * enabled **required** `boolean`: Turn notifications on or off entirely.
  * entity `string` (values: global, billing): The entity type that the settings pertain to.
  * id `string`: Notification unique identifier expressed as a UUID

### NotificationSettingsData
* NotificationSettingsData `object`
  * emails_enabled **required** `boolean`: Turn emails on or off.
  * enabled **required** `boolean`: Turn notifications on or off entirely.

### NotificationSettingsError
* NotificationSettingsError `object`
  * emails_enabled `boolean`: emails_enabled field errors
  * enabled `boolean`: enabled field errors
  * non_field_errors `array`: Errors not connected to any field
    * items `string`

### NotificationUpdateData
* NotificationUpdateData `object`
  * read **required** `boolean`: Mark the notification as either read or unread

### Plan
* Plan `object`
  * amount **required** `integer`: Amount (cost/price) of plan.
  * created `string`: Date and time when plan was created.
  * currency `string`: Currency used to specify amount.
  * id `string`: Plan unique identifier as UUID.
  * interval **required** `string`: Interval for plan, such as montly or yearly.
  * interval_count **required** `integer`
  * livemode `boolean`: Boolean to determine whether plan is live, or not.
  * metadata `object`: Optional meta data object.
  * name **required** `string`: Plan name.
  * statement_descriptor `string`: Statement that describes plan to users.
  * stripe_id `string`: Stripe identifier to identify entity charging for plans.
  * trial_period_days `integer`: Number of days for plan trial, used for try and buy campaigns.

### PlanData
* PlanData `object`
  * amount **required** `integer`: Plan amount in currency.
  * currency `string`: Currency for plan.
  * interval **required** `array`: Plan interval.
    * items `string` (values: day, week, month, year)
  * interval_count **required** `integer`: Number of intervals.
  * livemode `boolean`: Is plan live, or not.
  * metadata `object`: Plan meta data.
  * name **required** `string`: Plan name.
  * statement_descriptor `string`: Plan description.
  * trial_period_days `integer`: Trial days for try and buy campaigns.

### PlanError
* PlanError `object`
  * amount `array`: amount field errors
    * items `string`
  * created `array`: created field errors
    * items `string`
  * currency `array`: currency field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * interval `array`: interval field errors
    * items `string`
  * interval_count `array`: interval_count field errors
    * items `string`
  * livemode `array`: livemode field errors
    * items `string`
  * metadata `array`: metadata field errors
    * items `string`
  * name `array`: name field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * statement_descriptor `array`: statement_descriptor field errors
    * items `string`
  * stripe_id `array`: stripe_id field errors
    * items `string`
  * trial_period_days `array`: trial period days field errors
    * items `string`

### Project
* Project `object`
  * collaborators `array`: Array of project collaborators.
    * items `string`
  * description `string`: Project description.
  * id `string`: Unique identifier for project as UUID.
  * last_updated `string`: Date and time when project was last updated.
  * name **required** `string`: Project name.
  * owner `string`: Username of project owner.
  * private `boolean`: Value that states whether project is private or public.

### ProjectData
* ProjectData `object`
  * description `string`: Project description.
  * name **required** `string`: Project name.
  * private `boolean`: Private project true, otherwise public.

### ProjectError
* ProjectError `object`
  * collaborators `array`: Collaborators field errors.
    * items `string`
  * description `array`: Description field errors.
    * items `string`
  * id `array`: Id field errors.
    * items `string`
  * last_updated `array`: Last_updated field errors.
    * items `string`
  * name `array`: Name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * owner `array`: Owner field errors.
    * items `string`
  * private `array`: Private field errors.
    * items `string`

### ProjectFile
* ProjectFile `object`
  * content `string`: Data sent as string, in base64 format.
  * id `string`: File unique identifier in UUID format.
  * name `string`: File name and extension.
  * path `string`: File path. Defaults to root (/).
  * project **required** `string`: Project name where file is located.

### ProjectFileError
* ProjectFileError `object`
  * content `array`: base64_data field errors
    * items `string`
  * file `array`: file field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * name `array`: name field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * path `array`: path field errors
    * items `string`
  * project `array`: project field errors
    * items `string`

### RefreshJSONWebToken
* RefreshJSONWebToken `object`
  * token **required** `string`: Refresh JWT token.

### RefreshJSONWebTokenData
* RefreshJSONWebTokenData `object`
  * token **required** `string`: Refreshed token.

### RefreshJSONWebTokenError
* RefreshJSONWebTokenError `object`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * token `array`: Token field errors.
    * items `string`

### Search
* Search `object`

### Server
* Server `object`
  * config `object`: Server configuration option. Values are jupyter, restful and cron.
  * connected `array`: Array that represents what other servers the server is connected to.
    * items `string`
  * created_at `string`: Date and time when server was created.
  * endpoint `string`: Server endpoint path.
  * host `string`: Value that represents user defined host, otherwise known as BYON (Bring Your Own Node).
  * id `string`: Server unique identifier in UUID format.
  * image_name `string`: Server image source, such as 3blades/tensorflow-notebook.
  * logs_url `string`: A WebSocket URL for streaming stdout and stderr logs from the server.
  * name **required** `string`: Server name.
  * server_size `string`: Server size unique identifier.
  * startup_script `string`: Optional startup script to use when launching server.
  * status `string` (values: Stopped, Running, Error): Server status, such as Running or Error.
  * status_url `string`: A WebSocket URL for listening to server status changes.

### ServerAction
* ServerAction `object`
  * id `string`: Server trigger unique identifier.
  * name `string`: Name for server action.
  * operation `string` (values: start, stop, terminate): Manage server state. Starting a server changes state from Pending to Running. Terminating a server changes state from Running to Terminated. If the action results in Error, status will change to Error.
  * webhook [Webhook](#webhook)

### ServerActionData
* ServerActionData `object`
  * name `string`: Name of server action.
  * operation `string` (values: start, stop, terminate): Manage server state. Starting a server changes state from Pending to Running. Terminating a server changes state from Running to Terminated. Stopping a server changes state from Running to Stopped. If the action results in Error, status will change to Error.
  * webhook [Webhook](#webhook)

### ServerActionError
* ServerActionError `object`
  * id `array`: Id field errors.
    * items `string`
  * name `array`: Name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * operation `array`: Operation field errors.
    * items `string`

### ServerConfig
* ServerConfig `object`
  * command `string`: Command to run
  * function `string`: Server function.
  * script `string`: Server script file.
  * type `string` (values: jupyter, restful, cron): Server type.

### ServerData
* ServerData `object`
  * config [ServerConfig](#serverconfig)
  * connected `array`: Array of other servers the server is connected to.
    * items `string`
  * host `string`: External host IPv4 address or hostname.
  * image_name `string`: Image name.
  * name **required** `string`: Server name.
  * server_size `string`: Server size unique identifier.
  * startup_script `string`: Startup script to run when launching server.

### ServerError
* ServerError `object`
  * config `array`: config field errors.
    * items `string`
  * connected `array`: connected field errors.
    * items `string`
  * created_at `array`: created_at field errors.
    * items `string`
  * endpoint `array`: endpoint field errors.
    * items `string`
  * host `array`: host field errors.
    * items `string`
  * id `array`: id field errors.
    * items `string`
  * image_name `array`: image_name field errors.
    * items `string`
  * logs_url `array`: logs_url field errors.
    * items `string`
  * name `array`: name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * server_size `array`: server_size field errors.
    * items `string`
  * startup_script `array`: startup_script field errors.
    * items `string`
  * status `array`: status field errors.
    * items `string`
  * status_url `array`: status_url field errors.
    * items `string`

### ServerRunStatistics
* ServerRunStatistics `object`
  * exit_code `integer`: Exit code, such as Exit 0 or Exit 1.
  * id `string`: Server run statistics object unique identifier in UUID format.
  * size `integer`: Size of server.
  * stacktrace `string`: Stacktrace, if there was one.
  * start `string`: Date and time that represents when server started.
  * stop `string`: Date and time that represents when server stopped.

### ServerRunStatisticsData
* ServerRunStatisticsData `object`
  * exit_code `integer`: Server exit code.
  * size `integer`: Server size.
  * stacktrace `string`: Server stacktrace.
  * start `string`: Server start.
  * stop `string`: Server stop.

### ServerRunStatisticsError
* ServerRunStatisticsError `object`
  * exit_code `array`: exit_code field errors.
    * items `string`
  * id `array`: id field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * size `array`: size field errors.
    * items `string`
  * stacktrace `array`: stacktrace field errors.
    * items `string`
  * start `array`: start field errors.
    * items `string`
  * stop `array`: stop field errors.
    * items `string`

### ServerSize
* ServerSize `object`
  * active `boolean`: States whether the Server size is active, or not.
  * cpu **required** `integer`: CPU availability, equivalent to --cpus=<value>. For example if a host has
  * id `string`: Server size unique identifier.
  * memory **required** `integer`: Memory restriction for container.
  * name **required** `string`: Server size name.

### ServerSizeData
* ServerSizeData `object`
  * active **required** `boolean`: Active or not active.
  * cpu **required** `integer`: CPU set for server size.
  * memory **required** `integer`: Memory set for server size.
  * name **required** `string`: Server size name.

### ServerSizeError
* ServerSizeError `object`
  * active `array`: Active field errors.
    * items `string`
  * cpu `array`: CPU field errors.
    * items `string`
  * id `array`: Id field errors.
    * items `string`
  * memory `array`: Memory field errors.
    * items `string`
  * name `array`: Name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`

### ServerStatistics
* ServerStatistics `object`
  * id `string`: Server statistics unique identifier in UUID format.
  * size `integer`: Size of statistics.
  * start `string`: Start statistics, such as start time and date.
  * stop `string`: Stop statistics, such as stop time and date.

### ServerStatisticsData
* ServerStatisticsData `object`
  * id `array`: id field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * size `array`: size field errors.
    * items `string`
  * start `array`: start field errors.
    * items `string`
  * stop `array`: stop field errors.
    * items `string`

### ServerStatisticsError
* ServerStatisticsError `object`
  * id `array`: Id field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * size `array`: Size field errors.
    * items `string`
  * start `array`: Start field errors.
    * items `string`
  * stop `array`: Stop field errors.
    * items `string`

### SshTunnel
* SshTunnel `object`
  * endpoint **required** `string`: SSH tunnel destination endpoint.
  * host **required** `string`: Host, usually IPv4, for SSH tunnel.
  * id `string`: SSH tunnel unique identifier in UUID format.
  * local_port **required** `integer`: Local source port for SSH tunnel.
  * name **required** `string`: SSH tunnel name.
  * remote_port **required** `integer`: Remote port to establish SSH tunnel.
  * username **required** `string`: SSH tunnel user name.

### SshTunnelData
* SshTunnelData `object`
  * endpoint **required** `string`: SSH tunnel endpoint.
  * host **required** `string`: SSH tunnel host.
  * local_port **required** `integer`: SSH tunnel local port.
  * name **required** `string`: SSH tunnel name.
  * remote_port **required** `integer`: SSH tunnel remote port.
  * username **required** `string`: User name to establish SSH tunnel.

### SshTunnelError
* SshTunnelError `object`
  * endpoint `array`: endpoint field errors.
    * items `string`
  * host `array`: host field errors.
    * items `string`
  * id `array`: id field errors.
    * items `string`
  * local_port `array`: local_port field errors.
    * items `string`
  * name `array`: name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * remote_port `array`: remote_port field errors.
    * items `string`
  * username `array`: username field errors.
    * items `string`

### Subscription
* Subscription `object`
  * application_fee_percent `number`: Application fee percent.
  * cancel_at_period_end `boolean`: Boolean value to determine whether plan cancels at the end of the period, or not.
  * canceled_at `string`: Date and time when plan was cancelled.
  * created `string`: Date and time suscription was created.
  * current_period_end `string`: Current suscription plan end date.
  * current_period_start `string`: Current suscription plan start date.
  * ended_at `string`: Date and time for when plan ended.
  * id `string`: Unique identifier for suscription as UUID.
  * livemode `boolean`: Suscription live, or not.
  * plan **required** `string`: Plan name.
  * quantity `integer`: Quantity purchased as integer.
  * start `string`: Date and time for when plan started.
  * status `string`: Suscription status.
  * stripe_id `string`: Stripe (payment processor) identifier.
  * trial_end `string`: Date and time for trial end.
  * trial_start `string`: Date and time for trial start.

### SubscriptionData
* SubscriptionData `object`
  * plan **required** `string`: Plan unique identifier.

### SubscriptionError
* SubscriptionError `object`
  * application_fee_percent `array`: application_fee_percent field errors
    * items `string`
  * cancel_at_period_end `array`: cancel_at_period_end field errors
    * items `string`
  * canceled_at `array`: canceled_at field errors
    * items `string`
  * created `array`: created field errors
    * items `string`
  * current_period_end `array`: current_period_end field errors
    * items `string`
  * current_period_start `array`: current_period_start field errors
    * items `string`
  * ended_at `array`: ended_at field errors
    * items `string`
  * id `array`: id field errors
    * items `string`
  * livemode `array`: livemode field errors
    * items `string`
  * non_field_errors `array`: Errors not connected to any field
    * items `string`
  * plan `array`: plan field errors
    * items `string`
  * quantity `array`: quantity field errors
    * items `string`
  * start `array`: start field errors
    * items `string`
  * status `array`: status field errors
    * items `string`
  * stripe_id `array`: stripe_id field errors
    * items `string`
  * trial_end `array`: trial_end field errors
    * items `string`
  * trial_start `array`: trial_start field errors
    * items `string`

### User
* User `object`
  * email `string`: User email address.
  * first_name `string`: User first name.
  * id `string`: User unique identifier, expressed as UUID.
  * last_name `string`: User last name.
  * profile **required** [UserProfile](#userprofile)
  * username **required** `string`: Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.

### UserData
* UserData `object`
  * email `string`: User email.
  * first_name `string`: User first name.
  * last_name `string`: User last name.
  * password **required** `string`: User password.
  * profile **required** [UserProfile](#userprofile)
  * username **required** `string`: Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.

### UserError
* UserError `object`
  * email `array`: Email field errors.
    * items `string`
  * first_name `array`: First name field errors.
    * items `string`
  * id `array`: id field errors.
    * items `string`
  * last_name `array`: Last name field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * password `array`: Password field errors.
    * items `string`
  * profile [UserProfileError](#userprofileerror)
  * username `array`: Username field errors.
    * items `string`

### UserProfile
* UserProfile `object`
  * avatar `string`: Avatar image
  * bio `string`: Description of user's biography.
  * company `string`: User's company.
  * location `string`: User location.
  * timezone `string`: User's time zone.
  * url `string`: Users's personal website.

### UserProfileError
* UserProfileError `object`
  * bio `array`: Bio field errors.
    * items `string`
  * company `array`: Company field errors.
    * items `string`
  * location `array`: Location field errors.
    * items `string`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * timezone `array`: Timezone field errors.
    * items `string`
  * url `array`: URL field errors.
    * items `string`

### VerifyJSONWebToken
* VerifyJSONWebToken `object`
  * token **required** `string`: Varify JWT token.

### VerifyJSONWebTokenData
* VerifyJSONWebTokenData `object`
  * token **required** `string`: JSON Web Token (JWT).

### VerifyJSONWebTokenError
* VerifyJSONWebTokenError `object`
  * non_field_errors `array`: Errors not connected to any field.
    * items `string`
  * token `array`: Token field errors.
    * items `string`

### Webhook
* Webhook `object`
  * payload `object`: JSON with payload and webhook configurations.
  * url **required** `string`: URL for webhook.


