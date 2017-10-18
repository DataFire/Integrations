# @datafire/3blades_ai

Client library for 3blades

## Installation and Usage
```bash
npm install --save datafire @datafire/3blades_ai
```

```js
let datafire = require('datafire');
let blades_ai = require('@datafire/3blades_ai').create({
  jwt: "",
});

blades_ai.users_create({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### auth.jwt_token_auth.post
Create JSON Web Token (JWT)


```js
blades_ai.auth.jwt_token_auth.post({}, context)
```

#### Parameters
* jwt_data (object)

### auth.jwt_token_refresh.post
Obtains a new JSON Web Token using existing user credentials.


```js
blades_ai.auth.jwt_token_refresh.post({}, context)
```

#### Parameters
* refreshjwt_data (object)

### auth.jwt_token_verify.post
Checks veraciy of token.


```js
blades_ai.auth.jwt_token_verify.post({}, context)
```

#### Parameters
* verifyjwt_data (object)

### oauth_login



```js
blades_ai.oauth_login({
  "provider": ""
}, context)
```

#### Parameters
* provider (string) **required** - OAuth2 provider

### auth_register
User registration requires confirming email address to activate user.


```js
blades_ai.auth_register({}, context)
```

#### Parameters
* user_data (object)

### me
A convenience endpoint that is equivalent to GET /v1/users/profiles/<my user id>/


```js
blades_ai.me(null, context)
```

#### Parameters
*This action has no parameters*

### servers_options_sizes_list
Retrieve available server sizes


```js
blades_ai.servers_options_sizes_list({}, context)
```

#### Parameters
* limit (string) - Set limit when retrieving items.
* offset (string) - Offset when retrieving items.
* ordering (string) - Set order when retrieving items.

### servers_options_server_size_create
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_create({}, context)
```

#### Parameters
* serversize_data (object)

### servers_options_server_size_delete
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_delete({
  "size": ""
}, context)
```

#### Parameters
* size (string) **required** - Server size unique identifier expressed as UUID or name.

### servers_options_resources_read
Get a server size by id


```js
blades_ai.servers_options_resources_read({
  "size": ""
}, context)
```

#### Parameters
* size (string) **required** - Server size unique identifier expressed as UUID or name.

### servers_options_server_size_update
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_update({
  "size": ""
}, context)
```

#### Parameters
* size (string) **required** - Server size unique identifier expressed as UUID or name.
* serversize_data (object)

### servers_options_server_size_replace
Only super users with on-premises version have acceess to this endpoint.


```js
blades_ai.servers_options_server_size_replace({
  "size": ""
}, context)
```

#### Parameters
* size (string) **required** - Server size unique identifier expressed as UUID or name.
* serversize_data (object)

### users_list
Get user list


```js
blades_ai.users_list({}, context)
```

#### Parameters
* limit (string) - Limit user list.
* offset (string) - Offset when getting users.
* username (string) - User username.
* email (string) - User email.
* ordering (string) - Ordering when getting users.

### users_create
Only admin users can create new users. New users have active status by default.


```js
blades_ai.users_create({}, context)
```

#### Parameters
* user_data (object)

### users_delete
Delete a user


```js
blades_ai.users_delete({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User identifier expressed as UUID or username.

### users_read
Retrieve a user


```js
blades_ai.users_read({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Unique identifier expressed as UUID or username.

### users_update
Update a user


```js
blades_ai.users_update({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.
* user_data (object)

### v1.users.user.api_key.get
Retrieve account's API key


```js
blades_ai.v1.users.user.api_key.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### v1.users.user.api_key.reset.post
Reset a user's API key


```js
blades_ai.v1.users.user.api_key.reset.post({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### user_avatar_delete
Delete avatar


```js
blades_ai.user_avatar_delete({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### user_avatar_get
Retrieve user's avatar


```js
blades_ai.user_avatar_get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUIDor username.

### user_avatar_update
Update a project file


```js
blades_ai.user_avatar_update({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### user_avatar_set
Add user avatar


```js
blades_ai.user_avatar_set({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### users_emails_list
Retrieve account email addresses


```js
blades_ai.users_emails_list({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier as expressed as UUID or username.
* limit (string) - Limite when getting email list.
* offset (string) - Offset when getting email list.
* ordering (string) - Ordering when getting email list.

### users_emails_create
Create an email address


```js
blades_ai.users_emails_create({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.
* email_data (object)

### users_emails_delete
Delete an email address


```js
blades_ai.users_emails_delete({
  "email_id": "",
  "user": ""
}, context)
```

#### Parameters
* email_id (string) **required** - Email unique identifier expressed as UUID.
* user (string) **required** - User unique identifier expressed as UUID or username.

### users_emails_read
Retrieve a user's email addresses


```js
blades_ai.users_emails_read({
  "email_id": "",
  "user": ""
}, context)
```

#### Parameters
* email_id (string) **required** - Email unique identifier expressed as UUID.
* user (string) **required** - User unique identifier expressed as UUID or username.

### users_emails_update
Update an email address


```js
blades_ai.users_emails_update({
  "email_id": "",
  "user": ""
}, context)
```

#### Parameters
* email_id (string) **required** - Email unique identifier expressed as UUID.
* user (string) **required** - User unique identifier expressed as UUID or username.
* email_data (object)

### users_emails_replace
Replace an email address


```js
blades_ai.users_emails_replace({
  "email_id": "",
  "user": ""
}, context)
```

#### Parameters
* email_id (string) **required** - Email unique identifier expressed as UUID.
* user (string) **required** - User unique identifier expressed as UUID or username.
* email_data (object)

### v1.users.user.ssh_key.get
Retrieve an SSH key


```js
blades_ai.v1.users.user.ssh_key.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### v1.users.user.ssh_key.reset.post
Recreate an SSH key


```js
blades_ai.v1.users.user.ssh_key.reset.post({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - User unique identifier expressed as UUID or username.

### billing_cards_list
Get credit cards


```js
blades_ai.billing_cards_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* limit (string) - Set limit when retrieving credit or debit cards.
* offset (string) - Set offset when retriving cards.
* ordering (string) - Order when retrieving cards.

### billing_cards_create
Create new credit card


```js
blades_ai.billing_cards_create({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* card_data (object)

### billing_cards_delete
Delete a credit card


```js
blades_ai.billing_cards_delete({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Card unique identifier expressed as UUID.

### billing_cards_read
Get credit card by id


```js
blades_ai.billing_cards_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - User unique identifier expressed as UUID.

### billing_cards_update
Update a credit card


```js
blades_ai.billing_cards_update({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Card unique identifier.
* card_data (object)

### billing_cards_replace
Replace a credit card


```js
blades_ai.billing_cards_replace({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required**
* card_data (object)

### billing_invoices_list
Get invoices


```js
blades_ai.billing_invoices_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* limit (string) - Limit when getting items.
* offset (string) - Offset when getting items.
* ordering (string) - Ordering when getting items.

### billing_invoices_read
Get an invoice


```js
blades_ai.billing_invoices_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Invoice unique identifier expressed as UUID.

### billing_invoice_items_list
Get invoice items for a given invoice.


```js
blades_ai.billing_invoice_items_list({
  "namespace": "",
  "invoice_id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* invoice_id (string) **required** - Invoice id, expressed as UUID.
* limit (string) - Limit when getting items.
* offset (string) - Offset when getting items.
* ordering (string) - Ordering when getting items.

### billing_invoice_items_read
Get a specific InvoiceItem.


```js
blades_ai.billing_invoice_items_read({
  "namespace": "",
  "invoice_id": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* invoice_id (string) **required** - Invoice id, expressed as UUID.
* id (string) **required** - InvoiceItem id, expressed as UUID.

### billing_plans_list
Get billing plans


```js
blades_ai.billing_plans_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* limit (string) - Limit when getting items.
* offset (string) - Offset when getting items.
* ordering (string) - Ordering when getting items.

### billing_plans_read
Get a billing plan


```js
blades_ai.billing_plans_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Plan unique identifier expressed as UUID.

### billing_subscriptions_list
Get active subscriptons


```js
blades_ai.billing_subscriptions_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* limit (string) - Limit when getting items.
* offset (string) - Offset when getting items.
* ordering (string) - Ordering when getting items.

### billing_subscriptions_create
Create a new subscription


```js
blades_ai.billing_subscriptions_create({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* subscription_data (object)

### billing_subscriptions_delete
Delete a subscription


```js
blades_ai.billing_subscriptions_delete({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Subscription unique identifier expressed as UUID.

### billing_subscriptions_read
Get a subscriptions


```js
blades_ai.billing_subscriptions_read({
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* id (string) **required** - Unique identifier expressed as UUID.

### hosts_list
Get available hosts


```js
blades_ai.hosts_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team data.
* limit (string) - Limite when getting items.
* offset (string) - Offset when getting items.
* name (string) - Name, when getting items.
* ordering (string) - Ordering when getting items.

### hosts_create
Create a new host


```js
blades_ai.hosts_create({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* dockerhost_data (object)

### hosts_delete
Delete a host


```js
blades_ai.hosts_delete({
  "namespace": "",
  "host": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* host (string) **required** - DockerHost unique identifier expressed as UUID.

### hosts_read
Get a host


```js
blades_ai.hosts_read({
  "namespace": "",
  "host": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* host (string) **required** - Unique identifier expressed as UUID or name.

### hosts_update
Update a host


```js
blades_ai.hosts_update({
  "namespace": "",
  "host": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* host (string) **required**
* dockerhost_data (object)

### hosts_replace
Replace a host


```js
blades_ai.hosts_replace({
  "namespace": "",
  "host": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* host (string) **required**
* dockerhost_data (object)

### projects_list
Get available projects


```js
blades_ai.projects_list({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* limit (string) - Limit when getting data.
* offset (string) - Offset when getting data.
* private (string) - Private project or public project.
* name (string) - Project name.
* ordering (string) - Ordering when getting projects.

### projects_create
Create a new project


```js
blades_ai.projects_create({
  "namespace": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* project_data (object)

### projects_delete
Delete a project


```js
blades_ai.projects_delete({
  "namespace": "",
  "project": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* project (string) **required** - Project unique identifier expressed as UUID or name.

### projects_read
Get a project


```js
blades_ai.projects_read({
  "namespace": "",
  "project": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* project (string) **required** - Project unique identifier expressed as UUID or name.

### projects_update
Update a project


```js
blades_ai.projects_update({
  "namespace": "",
  "project": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* project_data (object)

### projects_replace
Replace a project


```js
blades_ai.projects_replace({
  "namespace": "",
  "project": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team namespace.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* project_data (object)

### projects_collaborators_list
Get project collaborators


```js
blades_ai.projects_collaborators_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* limit (string) - Limit when retrieving items.
* offset (string) - Offset when retrieving items.
* ordering (string) - Ordering when retrieving items.

### projects_collaborators_create
Create project collaborators


```js
blades_ai.projects_collaborators_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* collaborator_data (object)

### projects_collaborators_delete
Delete a project collaborator


```js
blades_ai.projects_collaborators_delete({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier.
* namespace (string) **required** - User or team name.
* collaborator (string) **required** - Collaborator unique identifier.

### projects_collaborators_read
Get a project collaborator


```js
blades_ai.projects_collaborators_read({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier.
* namespace (string) **required** - User or team name.
* collaborator (string) **required** - Collaborator unique identifier expressed as UUID or name.

### projects_collaborators_update
Update project collaborator


```js
blades_ai.projects_collaborators_update({
  "project": "",
  "namespace": "",
  "collaborator": ""
}, context)
```

#### Parameters
* project (string) **required**
* namespace (string) **required** - User or team name.
* collaborator (string) **required**
* collaborator_data (object)

### projects_project_files_list
Get project files


```js
blades_ai.projects_project_files_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Unique identifier for project file expressed as UUID or name.
* namespace (string) **required** - User or team name.
* limit (string) - Limit when getting project file list.
* offset (string) - Offset when getting project file list.
* ordering (string) - Ordering of list values when getting project file list.
* filename (string) - Exact file name, relative to the project root. If no such file is found, an empty list will be returned.
* content (string) - Determines whether or not content is returned as base64. Defaults to false.

### projects_project_files_create
Create project files


```js
blades_ai.projects_project_files_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier.
* namespace (string) **required** - User or team name.
* file (string) - File to send, to create new file. This parameter is only used with form data and may include multiple files.
* base64_data (string) - Fila data, represented as base64.
* name (string) - File name. May include path when creating file with base64 field.
* path (string) - File path. Defaults to (/).

### projects_project_files_delete
Delete a project file


```js
blades_ai.projects_project_files_delete({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifer.
* namespace (string) **required** - User or team name.
* id (string) **required** - File unique identifier.

### projects_project_files_read
Get a project file


```js
blades_ai.projects_project_files_read({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifer.
* namespace (string) **required** - User or team name.
* id (string) **required** - File unique identifier.
* content (string) - Determines whether or not content is returned as base64. Defaults to false.

### projects_project_files_update
Update a project file


```js
blades_ai.projects_project_files_update({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifer.
* namespace (string) **required** - User or team name.
* id (string) **required** - File unique identifier.
* file (string) - File to send, to create new file. This parameter is only used with form data and may include multiple files.
* base64_data (string) - Fila data, represented as base64.
* name (string) - File name. May include path when creating file with base64 field.
* path (string) - File path. Defaults to (/).

### projects_project_files_replace
Replace a project file


```js
blades_ai.projects_project_files_replace({
  "project": "",
  "namespace": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifer.
* namespace (string) **required** - User or team name.
* id (string) **required** - File unique identifier.
* file (string) - File to send, to create new file. This parameter is only used with form data and may include multiple files.
* base64_data (string) - Fila data, represented as base64.
* name (string) - File name. May include path when creating file with base64 field.
* path (string) - File path. Defaults to (/).

### projects_servers_list
Retrieve servers


```js
blades_ai.projects_servers_list({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* limit (string) - Limit results when getting server list.
* offset (string) - Offset results when getting server list.
* name (string) - Server name.
* ordering (string) - Ordering option when getting server list.

### projects_servers_create
Create a new server


```js
blades_ai.projects_servers_create({
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifer expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server_data (object)

### projects_servers_delete
Delete a server


```js
blades_ai.projects_servers_delete({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier.
* namespace (string) **required** - User or team name.
* server (string) **required** - User unique identifier.

### projects_servers_read
Retrieve a server


```js
blades_ai.projects_servers_read({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.

### projects_servers_update
Update a server


```js
blades_ai.projects_servers_update({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.
* server_data (object)

### projects_servers_replace
Replace a server


```js
blades_ai.projects_servers_replace({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.
* server_data (object)

### v1.namespace.projects.project.servers.server.api_key.get
Get server API key


```js
blades_ai.v1.namespace.projects.project.servers.server.api_key.get({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.

### projects_servers_auth
Server api key validation


```js
blades_ai.projects_servers_auth({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.

### v1.namespace.projects.project.servers.server.run_stats.post
Create a new server's run statistics


```js
blades_ai.v1.namespace.projects.project.servers.server.run_stats.post({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* serverrunstats_data (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server run statistics unique identifier expressed as UUID.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Run statistics unique identifier expressed as UUID.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server run statistics unique identifier expressed as UUID.
* serverrunstats_data (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server run statistics expressed as UUID.
* serverrunstats_data (object)

### v1.namespace.projects.project.servers.server.ssh_tunnels.get
Get SSH Tunnels associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.get({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* limit (string) - Limit retrieved items.
* offset (string) - Offset retrieved items.
* ordering (string) - Order retrieved items.

### v1.namespace.projects.project.servers.server.ssh_tunnels.post
Create SSH Tunnel associated to a server


```js
blades_ai.v1.namespace.projects.project.servers.server.ssh_tunnels.post({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* sshtunnel_data (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* tunnel (string) **required** - SSH tunnel unique identifier expressed as UUID or name.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* tunnel (string) **required** - SSH tunnel unique identifier expressed as UUID or name.

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

#### Parameters
* server (string) **required**
* project (string) **required**
* namespace (string) **required** - User or team name.
* tunnel (string) **required**
* sshtunnel_data (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* tunnel (string) **required** - SSH tunnel unique identifier expressed as UUID or name.
* sshtunnel_data (object)

### projects_servers_start
Start a server


```js
blades_ai.projects_servers_start({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Stats unique identifier expressed as UUID.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server statistics unique identifier expressed as UUID.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server statistics unique identifier expressed as UUID.
* serverstats_data (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* id (string) **required** - Server statistics unique identifier expressed as UUID.
* serverstats_data (object)

### projects_servers_stop
Stop a server


```js
blades_ai.projects_servers_stop({
  "project": "",
  "namespace": "",
  "server": ""
}, context)
```

#### Parameters
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server (string) **required** - Server unique identifier expressed as UUID or name.

### service_trigger_list
Retrieve server triggers


```js
blades_ai.service_trigger_list({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* name (string) - Trigger name.
* limit (string) - Limit when getting triggers.
* offset (string) - Offset when getting triggers.
* ordering (string) - Ordering when getting triggers.

### service_trigger_create
Create a new server trigger


```js
blades_ai.service_trigger_create({
  "server": "",
  "project": "",
  "namespace": ""
}, context)
```

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* server_action (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* trigger (string) **required** - Trigger identifier expressed as UUID or name.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* trigger (string) **required** - Trigger unique identifier.

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* trigger (string) **required** - Trigger identifier expressed as UUID or name.
* server_action (object)

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

#### Parameters
* server (string) **required** - Server unique identifier expressed as UUID or name.
* project (string) **required** - Project unique identifier expressed as UUID or name.
* namespace (string) **required** - User or team name.
* trigger (string) **required** - Trigger unique identifier.
* server_action (object)

### search
Get a search results


```js
blades_ai.search({
  "namespace": "",
  "q": ""
}, context)
```

#### Parameters
* namespace (string) **required** - User or team name.
* q (string) **required** - Search string.
* type (string) - Limit results to specific types.
* limit (string) - Limit data when getting items.
* offset (string) - Offset data when getting items.

