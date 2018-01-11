# @datafire/clever_cloud

Client library for Clever-Cloud

## Installation and Usage
```bash
npm install --save @datafire/clever_cloud
```
```js
let clever_cloud = require('@datafire/clever_cloud').create();

clever_cloud.getVendorApps({}).then(data => {
  console.log(data);
})
```

## Description

Public API for managing Clever-Cloud data and products

## Actions

### application.appId.environment.get



```js
clever_cloud.application.appId.environment.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * token `string`

#### Output
*Output schema unknown*

### application.appId.environment.put



```js
clever_cloud.application.appId.environment.put({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * token `string`

#### Output
*Output schema unknown*

### postAuthorize
Handled by our API.


```js
clever_cloud.postAuthorize(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### events.event_socket.get
Retrieve events as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message


```js
clever_cloud.events.event_socket.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getGithub



```js
clever_cloud.getGithub(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Transaction_Id](#transaction_id)

### getGithubApplications



```js
clever_cloud.getGithubApplications(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Application](#application)

### getGithubCallback



```js
clever_cloud.getGithubCallback({}, context)
```

#### Input
* input `object`
  * code `string`
  * state `string`
  * error `string`
  * error_description `string`
  * error_uri `string`
  * Cookie `string`

#### Output
*Output schema unknown*

### getGithubEmails



```js
clever_cloud.getGithubEmails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### getGithubKeys



```js
clever_cloud.getGithubKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Key](#key)

### deleteGithubLink



```js
clever_cloud.deleteGithubLink(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getGithubLink



```js
clever_cloud.getGithubLink({}, context)
```

#### Input
* input `object`
  * transactionId `string`: From GET /github
  * redirectUrl `string`

#### Output
*Output schema unknown*

### getGithubLogin



```js
clever_cloud.getGithubLogin({}, context)
```

#### Input
* input `object`
  * redirectUrl `string`
  * fromAuthorize `string`

#### Output
*Output schema unknown*

### postGithubRedeploy



```js
clever_cloud.postGithubRedeploy({}, context)
```

#### Input
* input `object`
  * User-Agent `string`
  * X-Github-Event `string`
  * X-Hub-Signature `string`

#### Output
*Output schema unknown*

### getGithubSignup



```js
clever_cloud.getGithubSignup({}, context)
```

#### Input
* input `object`
  * redirectUrl `string`
  * fromAuthorize `string`

#### Output
*Output schema unknown*

### postGithubSignup



```js
clever_cloud.postGithubSignup({}, context)
```

#### Input
* input `object`
  * transactionId `string`
  * name `string`
  * otherId `string`
  * otherEmail `string`
  * password `string`
  * autoLink `string`
  * terms `string`

#### Output
*Output schema unknown*

### getGithubUsername



```js
clever_cloud.getGithubUsername(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### logs.logs_chunked.appId.get
Retrieve logs as they come through a chunked, never-ending response


```js
clever_cloud.logs.logs_chunked.appId.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: Application Id
  * download `boolean`: Tell the user-agent to download the body as a file

#### Output
*Output schema unknown*

### logs.logs_socket.appId.get
Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message


```js
clever_cloud.logs.logs_socket.appId.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: Application Id
  * since `string`: Only fetch logs newer than this (ISO-8601 formatted) date
  * filter `string`: A pattern to filter with
  * deployment_id `string`: Only fetch logs emitted by this deployment

#### Output
*Output schema unknown*

### logs.appId.get
Fetch the logs for a given application


```js
clever_cloud.logs.appId.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: Application Id
  * limit `integer`: Number of lines to return
  * order `string` (values: asc, desc): Logs order
  * after `string`: Lowest bound for logs date, ISO 8601
  * before `string`: Highest bounds for logs date, ISO 8601
  * filter `string`: A pattern to filter with
  * deployment_id `string`: Only fetch logs emitted by this deployment

#### Output
*Output schema unknown*

### getNewsfeedsBlog



```js
clever_cloud.getNewsfeedsBlog(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getNewsfeedEngineering



```js
clever_cloud.getNewsfeedEngineering(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### notifications.emailhooks.ownerId.get
list created e-mail hooks


```js
clever_cloud.notifications.emailhooks.ownerId.get({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.emailhooks.ownerId.post
create a hook for e-mail notifications


```js
clever_cloud.notifications.emailhooks.ownerId.post({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.emailhooks.ownerId._id.delete
delete an e-mail hook


```js
clever_cloud.notifications.emailhooks.ownerId._id.delete({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.emailhooks.ownerId._id.put
edit an e-mail hook


```js
clever_cloud.notifications.emailhooks.ownerId._id.put({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.info.events.get
list available events


```js
clever_cloud.notifications.info.events.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### notifications.info.webhookformats.get
list available webhook formats


```js
clever_cloud.notifications.info.webhookformats.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### notifications.webhooks.ownerId.get
list created hooks


```js
clever_cloud.notifications.webhooks.ownerId.get({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.webhooks.ownerId.post
create a hook for notifications


```js
clever_cloud.notifications.webhooks.ownerId.post({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.webhooks.ownerId._id.delete
delete a hook


```js
clever_cloud.notifications.webhooks.ownerId._id.delete({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### notifications.webhooks.ownerId._id.put
edit a hook


```js
clever_cloud.notifications.webhooks.ownerId._id.put({
  "ownerId": ""
}, context)
```

#### Input
* input `object`
  * ownerId **required** `string`

#### Output
*Output schema unknown*

### postOauthAccessToken



```js
clever_cloud.postOauthAccessToken({}, context)
```

#### Input
* input `object`
  * oauth_consumer_key `string`
  * oauth_token `string`
  * oauth_signature_method `string`
  * oauth_signature `string`
  * oauth_timestamp `string`
  * oauth_nonce `string`
  * oauth_version `string`
  * oauth_verifier `string`
  * oauth_callback `string`
  * oauth_token_secret `string`
  * oauth_callback_confirmed `string`

#### Output
*Output schema unknown*

### oauth.access_token_query.post



```js
clever_cloud.oauth.access_token_query.post({}, context)
```

#### Input
* input `object`
  * oauth_consumer_key `string`
  * oauth_token `string`
  * oauth_signature_method `string`
  * oauth_signature `string`
  * oauth_timestamp `string`
  * oauth_nonce `string`
  * oauth_version `string`
  * oauth_verifier `string`
  * oauth_callback `string`
  * oauth_token_secret `string`
  * oauth_callback_confirmed `string`

#### Output
*Output schema unknown*

### getOauthAuthorize



```js
clever_cloud.getOauthAuthorize({}, context)
```

#### Input
* input `object`
  * oauth_token `string`
  * Cookie `string`

#### Output
*Output schema unknown*

### postOauthAuthorize



```js
clever_cloud.postOauthAuthorize({}, context)
```

#### Input
* input `object`
  * almighty `string`
  * access_organisations `string`
  * manage_organisations `string`
  * manage_organisations_services `string`
  * manage_organisations_applications `string`
  * manage_organisations_members `string`
  * access_organisations_bills `string`
  * access_organisations_credit_count `string`
  * access_organisations_consumption_statistics `string`
  * access_personal_information `string`
  * manage_personal_information `string`
  * manage_ssh_keys `string`
  * manage_services `string`
  * manage_applications `string`
  * access_bills `string`
  * access_credit_count `string`
  * access_consumption_statistics `string`
  * Cookie `string`

#### Output
*Output schema unknown*

### postOauthRequestToken



```js
clever_cloud.postOauthRequestToken({}, context)
```

#### Input
* input `object`
  * oauth_consumer_key `string`
  * oauth_token `string`
  * oauth_signature_method `string`
  * oauth_signature `string`
  * oauth_timestamp `string`
  * oauth_nonce `string`
  * oauth_version `string`
  * oauth_verifier `string`
  * oauth_callback `string`
  * oauth_token_secret `string`
  * oauth_callback_confirmed `string`

#### Output
*Output schema unknown*

### oauth.request_token_query.post



```js
clever_cloud.oauth.request_token_query.post({}, context)
```

#### Input
* input `object`
  * oauth_consumer_key `string`
  * oauth_token `string`
  * oauth_signature_method `string`
  * oauth_signature `string`
  * oauth_timestamp `string`
  * oauth_nonce `string`
  * oauth_version `string`
  * oauth_verifier `string`
  * oauth_callback `string`
  * oauth_token_secret `string`
  * oauth_callback_confirmed `string`

#### Output
*Output schema unknown*

### getOauthRights



```js
clever_cloud.getOauthRights(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Rights](#rights)

### getOrganisations



```js
clever_cloud.getOrganisations({}, context)
```

#### Input
* input `object`
  * user `string`

#### Output
* output `array`
  * items [Organisation](#organisation)

### postOrganisations



```js
clever_cloud.postOrganisations({}, context)
```

#### Input
* input `object`
  * body [WannabeOrganisation](#wannabeorganisation)

#### Output
*Output schema unknown*

### deleteOrganisationsId



```js
clever_cloud.deleteOrganisationsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsId



```js
clever_cloud.getOrganisationsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Organisation](#organisation)

### putOrganisationsId



```js
clever_cloud.putOrganisationsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [WannabeOrganisation](#wannabeorganisation)

#### Output
*Output schema unknown*

### getOrganisationsIdAddonproviders



```js
clever_cloud.getOrganisationsIdAddonproviders({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Provider](#provider)

### postOrganisationsIdAddonproviders



```js
clever_cloud.postOrganisationsIdAddonproviders({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [WannabeAddonProvider](#wannabeaddonprovider)

#### Output
*Output schema unknown*

### getOrganisationsIdAddonprovidersProviderId



```js
clever_cloud.getOrganisationsIdAddonprovidersProviderId({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`

#### Output
* output [Provider](#provider)

### putOrganisationsIdAddonprovidersProviderId



```js
clever_cloud.putOrganisationsIdAddonprovidersProviderId({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * body [WannabeAddonProvider](#wannabeaddonprovider)

#### Output
*Output schema unknown*

### getOrganisationsIdAddonprovidersProviderIdFeatures



```js
clever_cloud.getOrganisationsIdAddonprovidersProviderIdFeatures({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`

#### Output
* output `array`
  * items [Feature](#feature)

### postOrganisationsIdAddonprovidersProviderIdFeatures



```js
clever_cloud.postOrganisationsIdAddonprovidersProviderIdFeatures({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * body [WannabeFeature](#wannabefeature)

#### Output
*Output schema unknown*

### deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId



```js
clever_cloud.deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId({
  "id": "",
  "featureId": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * featureId **required** `string`
  * providerId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdAddonprovidersProviderIdPlans



```js
clever_cloud.getOrganisationsIdAddonprovidersProviderIdPlans({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`

#### Output
* output `array`
  * items [Plan](#plan)

### postOrganisationsIdAddonprovidersProviderIdPlans



```js
clever_cloud.postOrganisationsIdAddonprovidersProviderIdPlans({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * body [WannabePlan](#wannabeplan)

#### Output
*Output schema unknown*

### deleteOrganisationsIdAddonprovidersProviderIdPlansPlanId



```js
clever_cloud.deleteOrganisationsIdAddonprovidersProviderIdPlansPlanId({
  "id": "",
  "providerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * planId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdAddonprovidersProviderIdPlansPlanId



```js
clever_cloud.getOrganisationsIdAddonprovidersProviderIdPlansPlanId({
  "id": "",
  "providerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * planId **required** `string`

#### Output
* output [Plan](#plan)

### putOrganisationsIdAddonprovidersProviderIdPlansPlanId



```js
clever_cloud.putOrganisationsIdAddonprovidersProviderIdPlansPlanId({
  "id": "",
  "providerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`
  * planId **required** `string`
  * body [WannabePlan](#wannabeplan)

#### Output
*Output schema unknown*

### deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName



```js
clever_cloud.deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName({
  "id": "",
  "featureName": "",
  "providerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * featureName **required** `string`
  * providerId **required** `string`
  * planId **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName



```js
clever_cloud.putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName({
  "id": "",
  "featureName": "",
  "providerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * featureName **required** `string`
  * providerId **required** `string`
  * planId **required** `string`
  * body [WannabePlanFeature](#wannabeplanfeature)

#### Output
*Output schema unknown*

### organisations.id.addonproviders.providerId.sso.get



```js
clever_cloud.organisations.id.addonproviders.providerId.sso.get({
  "providerId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * providerId **required** `string`
  * id **required** `string`

#### Output
* output [AddonProviderSso](#addonprovidersso)

### getOrganisationsIdAddonprovidersProviderIdTags



```js
clever_cloud.getOrganisationsIdAddonprovidersProviderIdTags({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`

#### Output
* output `array`
  * items `string`

### postOrganisationsIdAddonprovidersProviderIdTesters



```js
clever_cloud.postOrganisationsIdAddonprovidersProviderIdTesters({
  "id": "",
  "providerId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * providerId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdAddons



```js
clever_cloud.getOrganisationsIdAddons({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Addon](#addon)

### postOrganisationsIdAddons



```js
clever_cloud.postOrganisationsIdAddons({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### organisations.id.addons.preorders.post



```js
clever_cloud.organisations.id.addons.preorders.post({
  "id": "",
  "body": {
    "name": "",
    "payment": {
      "token": "",
      "type": ""
    },
    "plan": "",
    "providerId": "",
    "region": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body **required** [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### deleteOrganisationsIdAddonsAddonId



```js
clever_cloud.deleteOrganisationsIdAddonsAddonId({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdAddonsAddonId



```js
clever_cloud.getOrganisationsIdAddonsAddonId({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
* output [Addon](#addon)

### putOrganisationsIdAddonsAddonId



```js
clever_cloud.putOrganisationsIdAddonsAddonId({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`
  * body [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### getOrganisationsIdAddonsAddonIdApplications



```js
clever_cloud.getOrganisationsIdAddonsAddonIdApplications({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### getOrganisationsIdAddonsAddonIdEnv



```js
clever_cloud.getOrganisationsIdAddonsAddonIdEnv({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
* output `array`
  * items [ListEnv](#listenv)

### putOrganisationsIdAddonsAddonIdPlan



```js
clever_cloud.putOrganisationsIdAddonsAddonIdPlan({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`
  * body [WannabePlan](#wannabeplan)

#### Output
*Output schema unknown*

### organisations.id.addons.addonId.sso.get



```js
clever_cloud.organisations.id.addons.addonId.sso.get({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
* output [Sso](#sso)

### getOrganisationsIdAddonsAddonIdTags



```js
clever_cloud.getOrganisationsIdAddonsAddonIdTags({
  "id": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * addonId **required** `string`

#### Output
* output `array`
  * items `string`

### deleteOrganisationsIdAddonsAddonIdTagsTag



```js
clever_cloud.deleteOrganisationsIdAddonsAddonIdTagsTag({
  "id": "",
  "tag": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * tag **required** `string`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdAddonsAddonIdTagsTag



```js
clever_cloud.putOrganisationsIdAddonsAddonIdTagsTag({
  "id": "",
  "tag": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * tag **required** `string`
  * addonId **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getOrganisationsIdApplications



```js
clever_cloud.getOrganisationsIdApplications({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### postOrganisationsIdApplications
Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179


```js
clever_cloud.postOrganisationsIdApplications({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [WannabeApplication](#wannabeapplication)

#### Output
*Output schema unknown*

### deleteOrganisationsIdApplicationsAppId



```js
clever_cloud.deleteOrganisationsIdApplicationsAppId({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppId



```js
clever_cloud.getOrganisationsIdApplicationsAppId({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output [Application](#application)

### putOrganisationsIdApplicationsAppId



```js
clever_cloud.putOrganisationsIdApplicationsAppId({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * body [WannabeApplication](#wannabeapplication)

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdAddons



```js
clever_cloud.getOrganisationsIdApplicationsAppIdAddons({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items [Addon](#addon)

### postOrganisationsIdApplicationsAppIdAddons



```js
clever_cloud.postOrganisationsIdApplicationsAppIdAddons({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdAddonsEnv



```js
clever_cloud.getOrganisationsIdApplicationsAppIdAddonsEnv({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items [Env](#env)

### deleteOrganisationsIdApplicationsAppIdAddonsAddonId



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdAddonsAddonId({
  "id": "",
  "appId": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### organisations.id.applications.appId.branch.put



```js
clever_cloud.organisations.id.applications.appId.branch.put({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.applications.appId.branches.get



```js
clever_cloud.organisations.id.applications.appId.branches.get({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdDependencies



```js
clever_cloud.getOrganisationsIdApplicationsAppIdDependencies({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### deleteOrganisationsIdApplicationsAppIdDependenciesDependencyId



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdDependenciesDependencyId({
  "dependencyId": "",
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * dependencyId **required** `string`
  * appId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdApplicationsAppIdDependenciesDependencyId



```js
clever_cloud.putOrganisationsIdApplicationsAppIdDependenciesDependencyId({
  "dependencyId": "",
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * dependencyId **required** `string`
  * appId **required** `string`
  * id **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdDependents



```js
clever_cloud.getOrganisationsIdApplicationsAppIdDependents({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### getOrganisationsIdApplicationsAppIdDeployments



```js
clever_cloud.getOrganisationsIdApplicationsAppIdDeployments({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * limit `string`
  * offset `string`
  * action `string`

#### Output
* output `array`
  * items [Deployment](#deployment)

### deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances({
  "id": "",
  "appId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * deploymentId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdEnv



```js
clever_cloud.getOrganisationsIdApplicationsAppIdEnv({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items [ListEnv](#listenv)

### putOrganisationsIdApplicationsAppIdEnv



```js
clever_cloud.putOrganisationsIdApplicationsAppIdEnv({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * body [WannabeEnv](#wannabeenv)

#### Output
*Output schema unknown*

### deleteOrganisationsIdApplicationsAppIdEnvEnvName



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdEnvEnvName({
  "id": "",
  "appId": "",
  "envName": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * envName **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdApplicationsAppIdEnvEnvName



```js
clever_cloud.putOrganisationsIdApplicationsAppIdEnvEnvName({
  "id": "",
  "appId": "",
  "envName": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * envName **required** `string`
  * body [WannabeEnv](#wannabeenv)

#### Output
*Output schema unknown*

### organisations.id.applications.appId.exposed_env.get



```js
clever_cloud.organisations.id.applications.appId.exposed_env.get({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.applications.appId.exposed_env.put



```js
clever_cloud.organisations.id.applications.appId.exposed_env.put({
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### deleteOrganisationsIdApplicationsAppIdInstances



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdInstances({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdInstances



```js
clever_cloud.getOrganisationsIdApplicationsAppIdInstances({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items [AppInstance](#appinstance)

### postOrganisationsIdApplicationsAppIdInstances



```js
clever_cloud.postOrganisationsIdApplicationsAppIdInstances({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * commit `string`

#### Output
*Output schema unknown*

### organisations.id.applications.appId.instances.instanceId.get



```js
clever_cloud.organisations.id.applications.appId.instances.instanceId.get({
  "instanceId": "",
  "appId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`
  * appId **required** `string`
  * id **required** `string`

#### Output
* output [AppInstance](#appinstance)

### getOrganisationsIdApplicationsAppIdTags



```js
clever_cloud.getOrganisationsIdApplicationsAppIdTags({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items `string`

### deleteOrganisationsIdApplicationsAppIdTagsTag



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdTagsTag({
  "id": "",
  "appId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * tag **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdApplicationsAppIdTagsTag



```js
clever_cloud.putOrganisationsIdApplicationsAppIdTagsTag({
  "id": "",
  "appId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * tag **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdVhosts



```js
clever_cloud.getOrganisationsIdApplicationsAppIdVhosts({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output `array`
  * items [Vhost](#vhost)

### deleteOrganisationsIdApplicationsAppIdVhostsFavourite



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdVhostsFavourite({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdApplicationsAppIdVhostsFavourite



```js
clever_cloud.getOrganisationsIdApplicationsAppIdVhostsFavourite({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`

#### Output
* output [Vhost](#vhost)

### putOrganisationsIdApplicationsAppIdVhostsFavourite



```js
clever_cloud.putOrganisationsIdApplicationsAppIdVhostsFavourite({
  "id": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * body [Vhost](#vhost)

#### Output
*Output schema unknown*

### deleteOrganisationsIdApplicationsAppIdVhostsDomain



```js
clever_cloud.deleteOrganisationsIdApplicationsAppIdVhostsDomain({
  "id": "",
  "appId": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * domain **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdApplicationsAppIdVhostsDomain



```js
clever_cloud.putOrganisationsIdApplicationsAppIdVhostsDomain({
  "id": "",
  "appId": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId **required** `string`
  * domain **required** `string`
  * body [Vhost](#vhost)

#### Output
*Output schema unknown*

### putOrganisationsIdAvatar
If you want to upload an image from your computer, send the image in the body of the request without anything else.


```js
clever_cloud.putOrganisationsIdAvatar({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdConsumers



```js
clever_cloud.getOrganisationsIdConsumers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Consumer](#consumer)

### postOrganisationsIdConsumers



```js
clever_cloud.postOrganisationsIdConsumers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [WannabeConsumer](#wannabeconsumer)

#### Output
*Output schema unknown*

### deleteOrganisationsIdConsumersKey



```js
clever_cloud.deleteOrganisationsIdConsumersKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * key **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdConsumersKey



```js
clever_cloud.getOrganisationsIdConsumersKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * key **required** `string`

#### Output
* output [Consumer](#consumer)

### putOrganisationsIdConsumersKey



```js
clever_cloud.putOrganisationsIdConsumersKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * key **required** `string`
  * body [WannabeConsumer](#wannabeconsumer)

#### Output
*Output schema unknown*

### getOrganisationsIdConsumersKeySecret



```js
clever_cloud.getOrganisationsIdConsumersKeySecret({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * key **required** `string`

#### Output
* output [Secret](#secret)

### getOrganisationsIdConsumptions



```js
clever_cloud.getOrganisationsIdConsumptions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * appId `string`
  * from `string`
  * to `string`

#### Output
* output [Conso](#conso)

### getOrganisationsIdCredits



```js
clever_cloud.getOrganisationsIdCredits({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Credits](#credits)

### getOrganisationsIdInstances



```js
clever_cloud.getOrganisationsIdInstances({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `object`

### getOrganisationsIdMembers



```js
clever_cloud.getOrganisationsIdMembers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Member](#member)

### postOrganisationsIdMembers



```js
clever_cloud.postOrganisationsIdMembers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * invitationKey `string`
  * body [WannabeMember](#wannabemember)

#### Output
*Output schema unknown*

### deleteOrganisationsIdMembersUserId



```js
clever_cloud.deleteOrganisationsIdMembersUserId({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdMembersUserId



```js
clever_cloud.putOrganisationsIdMembersUserId({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * userId **required** `string`
  * body [WannabeMember](#wannabemember)

#### Output
*Output schema unknown*

### getOrganisationsIdPaymentInfo



```js
clever_cloud.getOrganisationsIdPaymentInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdPaymentsBillings



```js
clever_cloud.getOrganisationsIdPaymentsBillings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### postOrganisationsIdPaymentsBillings



```js
clever_cloud.postOrganisationsIdPaymentsBillings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### deleteOrganisationsIdPaymentsBillingsBid



```js
clever_cloud.deleteOrganisationsIdPaymentsBillingsBid({
  "id": "",
  "bid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * bid **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdPaymentsBillingsBid



```js
clever_cloud.getOrganisationsIdPaymentsBillingsBid({
  "id": "",
  "bid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * bid **required** `string`

#### Output
*Output schema unknown*

### putOrganisationsIdPaymentsBillingsBid



```js
clever_cloud.putOrganisationsIdPaymentsBillingsBid({
  "id": "",
  "bid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * bid **required** `string`

#### Output
*Output schema unknown*

### getOrganisationsIdPaymentsBillingsBidPdf



```js
clever_cloud.getOrganisationsIdPaymentsBillingsBidPdf({
  "id": "",
  "bid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * bid **required** `string`
  * token `string`

#### Output
*Output schema unknown*

### getOrganisationsIdPaymentsFullPricePrice



```js
clever_cloud.getOrganisationsIdPaymentsFullPricePrice({
  "id": "",
  "price": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * price **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.methods.get



```js
clever_cloud.organisations.id.payments.methods.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.methods.post



```js
clever_cloud.organisations.id.payments.methods.post({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.methods.default.get



```js
clever_cloud.organisations.id.payments.methods.default.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.methods.default.put



```js
clever_cloud.organisations.id.payments.methods.default.put({
  "id": "",
  "body": {
    "token": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body **required** [PaymentData](#paymentdata)

#### Output
*Output schema unknown*

### organisations.id.payments.methods.mId.delete



```js
clever_cloud.organisations.id.payments.methods.mId.delete({
  "mId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * mId **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### deleteOrganisationsIdPaymentsRecurring



```js
clever_cloud.deleteOrganisationsIdPaymentsRecurring({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.recurring.get



```js
clever_cloud.organisations.id.payments.recurring.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### organisations.id.payments.tokens.bt.get



```js
clever_cloud.organisations.id.payments.tokens.bt.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getPasswordForgotten



```js
clever_cloud.getPasswordForgotten(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postPasswordForgotten



```js
clever_cloud.postPasswordForgotten({}, context)
```

#### Input
* input `object`
  * login `string`
  * drop_tokens `string`
  * TesterPass `string`

#### Output
*Output schema unknown*

### getPasswordForgottenKey



```js
clever_cloud.getPasswordForgottenKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
*Output schema unknown*

### postPasswordForgottenKey



```js
clever_cloud.postPasswordForgottenKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * pass `string`
  * pass2 `string`

#### Output
*Output schema unknown*

### getPaymentsCouponsName



```js
clever_cloud.getPaymentsCouponsName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### getPaymentsProviders



```js
clever_cloud.getPaymentsProviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Payment_Provider](#payment_provider)

### getPaymentsTokensBt



```js
clever_cloud.getPaymentsTokensBt(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPaymentsWebhooksBt



```js
clever_cloud.getPaymentsWebhooksBt({}, context)
```

#### Input
* input `object`
  * bt_challenge `string`

#### Output
*Output schema unknown*

### postPaymentsBidEndBt



```js
clever_cloud.postPaymentsBidEndBt({
  "bid": ""
}, context)
```

#### Input
* input `object`
  * bid **required** `string`

#### Output
*Output schema unknown*

### getProductsAddonProviders



```js
clever_cloud.getProductsAddonProviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Provider](#provider)

### getProductsAddonProvidersProviderId



```js
clever_cloud.getProductsAddonProvidersProviderId({
  "provider_id": ""
}, context)
```

#### Input
* input `object`
  * provider_id **required** `string`

#### Output
* output [Provider](#provider)

### getProductsCountries



```js
clever_cloud.getProductsCountries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Country](#country)

### getProductsCountrycodes



```js
clever_cloud.getProductsCountrycodes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Country](#country)

### getProductsInstances



```js
clever_cloud.getProductsInstances({}, context)
```

#### Input
* input `object`
  * for `string`

#### Output
* output `array`
  * items [Instance](#instance)

### getProductsInstancesTypeVersion



```js
clever_cloud.getProductsInstancesTypeVersion({
  "version": "",
  "type: [^-]+": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`
  * for `string`
  * app `string`
  * type: [^-]+ **required** `string`

#### Output
* output [Instance](#instance)

### products.mfa_kinds.get



```js
clever_cloud.products.mfa_kinds.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProductsPackages



```js
clever_cloud.getProductsPackages({}, context)
```

#### Input
* input `object`
  * coupon `string`
  * orgaId `string`
  * currency `string`

#### Output
*Output schema unknown*

### getProductsPrices



```js
clever_cloud.getProductsPrices(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProductsZones



```js
clever_cloud.getProductsZones(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Zone](#zone)

### deleteSelf



```js
clever_cloud.deleteSelf(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSelf
Get information about yourself


```js
clever_cloud.getSelf(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### putSelf



```js
clever_cloud.putSelf({}, context)
```

#### Input
* input `object`
  * body [WannabeUser](#wannabeuser)

#### Output
*Output schema unknown*

### getSelfAddons
Get all the addons


```js
clever_cloud.getSelfAddons(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Addon](#addon)

### postSelfAddons



```js
clever_cloud.postSelfAddons({}, context)
```

#### Input
* input `object`
  * body [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### self.addons.preorders.post



```js
clever_cloud.self.addons.preorders.post({
  "body": {
    "name": "",
    "payment": {
      "token": "",
      "type": ""
    },
    "plan": "",
    "providerId": "",
    "region": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### deleteSelfAddonsAddonId



```js
clever_cloud.deleteSelfAddonsAddonId({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### getSelfAddonsAddonId
Get a specific addon


```js
clever_cloud.getSelfAddonsAddonId({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
* output [Addon](#addon)

### putSelfAddonsAddonId



```js
clever_cloud.putSelfAddonsAddonId({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`
  * body [WannabeAddon](#wannabeaddon)

#### Output
*Output schema unknown*

### getSelfAddonsAddonIdApplications



```js
clever_cloud.getSelfAddonsAddonIdApplications({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### getSelfAddonsAddonIdEnv



```js
clever_cloud.getSelfAddonsAddonIdEnv({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
* output `array`
  * items [ListEnv](#listenv)

### putSelfAddonsAddonIdPlan



```js
clever_cloud.putSelfAddonsAddonIdPlan({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`
  * body [WannabePlan](#wannabeplan)

#### Output
*Output schema unknown*

### getSelfAddonsAddonIdSso



```js
clever_cloud.getSelfAddonsAddonIdSso({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
* output [Sso](#sso)

### getSelfAddonsAddonIdTags



```js
clever_cloud.getSelfAddonsAddonIdTags({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
* output `array`
  * items `string`

### deleteSelfAddonsAddonIdTagsTag



```js
clever_cloud.deleteSelfAddonsAddonIdTagsTag({
  "tag": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### putSelfAddonsAddonIdTagsTag



```js
clever_cloud.putSelfAddonsAddonIdTagsTag({
  "tag": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`
  * addonId **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getSelfApplications



```js
clever_cloud.getSelfApplications(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Application](#application)

### postSelfApplications
Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179


```js
clever_cloud.postSelfApplications({}, context)
```

#### Input
* input `object`
  * body [WannabeApplication](#wannabeapplication)

#### Output
*Output schema unknown*

### deleteSelfApplicationsAppId



```js
clever_cloud.deleteSelfApplicationsAppId({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppId



```js
clever_cloud.getSelfApplicationsAppId({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [Application](#application)

### putSelfApplicationsAppId



```js
clever_cloud.putSelfApplicationsAppId({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * body [WannabeApplication](#wannabeapplication)

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdAddons



```js
clever_cloud.getSelfApplicationsAppIdAddons({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Addon](#addon)

### postSelfApplicationsAppIdAddons



```js
clever_cloud.postSelfApplicationsAppIdAddons({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdAddonsEnv



```js
clever_cloud.getSelfApplicationsAppIdAddonsEnv({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Env](#env)

### deleteSelfApplicationsAppIdAddonsAddonId



```js
clever_cloud.deleteSelfApplicationsAppIdAddonsAddonId({
  "appId": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### self.applications.appId.branch.put



```js
clever_cloud.self.applications.appId.branch.put({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### self.applications.appId.branches.get



```js
clever_cloud.self.applications.appId.branches.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdDependencies



```js
clever_cloud.getSelfApplicationsAppIdDependencies({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### deleteSelfApplicationsAppIdDependenciesDependencyId



```js
clever_cloud.deleteSelfApplicationsAppIdDependenciesDependencyId({
  "dependencyId": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * dependencyId **required** `string`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdDependenciesDependencyId



```js
clever_cloud.getSelfApplicationsAppIdDependenciesDependencyId({
  "dependencyId": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * dependencyId **required** `string`
  * appId **required** `string`
  * body [WannabeApplication](#wannabeapplication)

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdDependents



```js
clever_cloud.getSelfApplicationsAppIdDependents({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### getSelfApplicationsAppIdDeployments



```js
clever_cloud.getSelfApplicationsAppIdDeployments({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * limit `string`
  * offset `string`
  * action `string`

#### Output
* output `array`
  * items [Deployment](#deployment)

### deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances



```js
clever_cloud.deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances({
  "appId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * deploymentId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdEnv



```js
clever_cloud.getSelfApplicationsAppIdEnv({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [ListEnv](#listenv)

### putSelfApplicationsAppIdEnv



```js
clever_cloud.putSelfApplicationsAppIdEnv({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * body [WannabeEnv](#wannabeenv)

#### Output
*Output schema unknown*

### deleteSelfApplicationsAppIdEnvEnvName



```js
clever_cloud.deleteSelfApplicationsAppIdEnvEnvName({
  "appId": "",
  "envName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * envName **required** `string`

#### Output
*Output schema unknown*

### putSelfApplicationsAppIdEnvEnvName



```js
clever_cloud.putSelfApplicationsAppIdEnvEnvName({
  "appId": "",
  "envName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * envName **required** `string`
  * body [WannabeEnv](#wannabeenv)

#### Output
*Output schema unknown*

### self.applications.appId.exposed_env.get



```js
clever_cloud.self.applications.appId.exposed_env.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### self.applications.appId.exposed_env.put



```js
clever_cloud.self.applications.appId.exposed_env.put({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### deleteSelfApplicationsAppIdInstances



```js
clever_cloud.deleteSelfApplicationsAppIdInstances({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdInstances



```js
clever_cloud.getSelfApplicationsAppIdInstances({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Instance](#instance)

### postSelfApplicationsAppIdInstances



```js
clever_cloud.postSelfApplicationsAppIdInstances({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * commit `string`

#### Output
*Output schema unknown*

### self.applications.appId.instances.instanceId.get



```js
clever_cloud.self.applications.appId.instances.instanceId.get({
  "instanceId": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * instanceId **required** `string`
  * appId **required** `string`

#### Output
* output [AppInstance](#appinstance)

### getSelfApplicationsAppIdTags



```js
clever_cloud.getSelfApplicationsAppIdTags({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items `string`

### deleteSelfApplicationsAppIdTagsTag



```js
clever_cloud.deleteSelfApplicationsAppIdTagsTag({
  "appId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * tag **required** `string`

#### Output
*Output schema unknown*

### putSelfApplicationsAppIdTagsTag



```js
clever_cloud.putSelfApplicationsAppIdTagsTag({
  "appId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * tag **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdVhosts



```js
clever_cloud.getSelfApplicationsAppIdVhosts({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output `array`
  * items [Vhost](#vhost)

### deleteSelfApplicationsAppIdVhostsFavourite



```js
clever_cloud.deleteSelfApplicationsAppIdVhostsFavourite({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
*Output schema unknown*

### getSelfApplicationsAppIdVhostsFavourite



```js
clever_cloud.getSelfApplicationsAppIdVhostsFavourite({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [Vhost](#vhost)

### putSelfApplicationsAppIdVhostsFavourite



```js
clever_cloud.putSelfApplicationsAppIdVhostsFavourite({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * body [Vhost](#vhost)

#### Output
*Output schema unknown*

### deleteSelfApplicationsAppIdVhostsDomain



```js
clever_cloud.deleteSelfApplicationsAppIdVhostsDomain({
  "appId": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domain **required** `string`

#### Output
*Output schema unknown*

### putSelfApplicationsAppIdVhostsDomain



```js
clever_cloud.putSelfApplicationsAppIdVhostsDomain({
  "appId": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domain **required** `string`
  * body [Vhost](#vhost)

#### Output
*Output schema unknown*

### putSelfAvatar



```js
clever_cloud.putSelfAvatar({}, context)
```

#### Input
* input `object`
  * body [Avatar](#avatar)

#### Output
*Output schema unknown*

### putSelfChangePassword



```js
clever_cloud.putSelfChangePassword(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Change_Password](#change_password)

### getSelfConfirmationEmail



```js
clever_cloud.getSelfConfirmationEmail(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSelfConsumers



```js
clever_cloud.getSelfConsumers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Consumer](#consumer)

### postSelfConsumers



```js
clever_cloud.postSelfConsumers({}, context)
```

#### Input
* input `object`
  * body [WannabeConsumer](#wannabeconsumer)

#### Output
*Output schema unknown*

### deleteSelfConsumersKey



```js
clever_cloud.deleteSelfConsumersKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
*Output schema unknown*

### getSelfConsumersKey



```js
clever_cloud.getSelfConsumersKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
* output [Consumer](#consumer)

### putSelfConsumersKey



```js
clever_cloud.putSelfConsumersKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * body [WannabeConsumer](#wannabeconsumer)

#### Output
*Output schema unknown*

### getSelfConsumersKeySecret



```js
clever_cloud.getSelfConsumersKeySecret({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
* output [Secret](#secret)

### getSelfConsumptions



```js
clever_cloud.getSelfConsumptions({}, context)
```

#### Input
* input `object`
  * appId `string`
  * from `string`
  * to `string`

#### Output
* output [Conso](#conso)

### getSelfCredits



```js
clever_cloud.getSelfCredits(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Credits](#credits)

### getSelfEmails



```js
clever_cloud.getSelfEmails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### deleteSelfEmailsEmail



```js
clever_cloud.deleteSelfEmailsEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`

#### Output
*Output schema unknown*

### putSelfEmailsEmail



```js
clever_cloud.putSelfEmailsEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### getSelfId



```js
clever_cloud.getSelfId(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### getSelfInstances



```js
clever_cloud.getSelfInstances(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Instance](#instance)

### getSelfKeys



```js
clever_cloud.getSelfKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Key](#key)

### deleteSelfKeysKey



```js
clever_cloud.deleteSelfKeysKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`

#### Output
*Output schema unknown*

### putSelfKeysKey



```js
clever_cloud.putSelfKeysKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * body [Body](#body)

#### Output
*Output schema unknown*

### self.mfa.kind.delete



```js
clever_cloud.self.mfa.kind.delete({
  "kind": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string`

#### Output
*Output schema unknown*

### self.mfa.kind.post



```js
clever_cloud.self.mfa.kind.post({
  "kind": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string`

#### Output
*Output schema unknown*

### self.mfa.kind.put



```js
clever_cloud.self.mfa.kind.put({
  "kind": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string`

#### Output
*Output schema unknown*

### self.mfa.kind.backupcodes.get



```js
clever_cloud.self.mfa.kind.backupcodes.get({
  "kind": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string`

#### Output
*Output schema unknown*

### self.mfa.kind.confirmation.post



```js
clever_cloud.self.mfa.kind.confirmation.post({
  "kind": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string`

#### Output
*Output schema unknown*

### getSelfPaymentInfo



```js
clever_cloud.getSelfPaymentInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSelfPaymentsBillings



```js
clever_cloud.getSelfPaymentsBillings(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postSelfPaymentsBillings



```js
clever_cloud.postSelfPaymentsBillings(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteSelfPaymentsBillingsBid



```js
clever_cloud.deleteSelfPaymentsBillingsBid({
  "bid": ""
}, context)
```

#### Input
* input `object`
  * bid **required** `string`

#### Output
*Output schema unknown*

### getSelfPaymentsBillingsBid



```js
clever_cloud.getSelfPaymentsBillingsBid({
  "bid": ""
}, context)
```

#### Input
* input `object`
  * bid **required** `string`

#### Output
*Output schema unknown*

### putSelfPaymentsBillingsBid



```js
clever_cloud.putSelfPaymentsBillingsBid({
  "bid": ""
}, context)
```

#### Input
* input `object`
  * bid **required** `string`

#### Output
*Output schema unknown*

### getSelfPaymentsBillingsBidPdf



```js
clever_cloud.getSelfPaymentsBillingsBidPdf({
  "bid": ""
}, context)
```

#### Input
* input `object`
  * bid **required** `string`
  * token `string`

#### Output
*Output schema unknown*

### getSelfPaymentsFullpricePrice



```js
clever_cloud.getSelfPaymentsFullpricePrice({
  "price": ""
}, context)
```

#### Input
* input `object`
  * price **required** `string`

#### Output
*Output schema unknown*

### getSelfPaymentsMethods



```js
clever_cloud.getSelfPaymentsMethods(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postSelfPaymentsMethods



```js
clever_cloud.postSelfPaymentsMethods(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### self.payments.methods.default.get



```js
clever_cloud.self.payments.methods.default.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### self.payments.methods.default.put



```js
clever_cloud.self.payments.methods.default.put(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteSelfPaymentsMethodsMId



```js
clever_cloud.deleteSelfPaymentsMethodsMId({
  "mId": ""
}, context)
```

#### Input
* input `object`
  * mId **required** `string`

#### Output
*Output schema unknown*

### deleteSelfPaymentsRecurring



```js
clever_cloud.deleteSelfPaymentsRecurring(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### self.payments.recurring.get



```js
clever_cloud.self.payments.recurring.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### self.payments.tokens.bt.get



```js
clever_cloud.self.payments.tokens.bt.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteSelfTokens



```js
clever_cloud.deleteSelfTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSelfTokens



```js
clever_cloud.getSelfTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Token](#token)

### deleteSelfTokensToken



```js
clever_cloud.deleteSelfTokensToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
*Output schema unknown*

### getSelfValidateEmail



```js
clever_cloud.getSelfValidateEmail({}, context)
```

#### Input
* input `object`
  * validationKey `string`

#### Output
*Output schema unknown*

### getSummary



```js
clever_cloud.getSummary(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Summary](#summary)

### postUsers



```js
clever_cloud.postUsers({}, context)
```

#### Input
* input `object`
  * invitationKey `string`
  * addonBetaInvitationKey `string`
  * email `string`
  * pass `string`
  * url_next `string`
  * terms `string`
  * body [WannabeUser](#wannabeuser)

#### Output
*Output schema unknown*

### getUsersId



```js
clever_cloud.getUsersId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [User](#user)

### getUsersIdApplications



```js
clever_cloud.getUsersIdApplications({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Application](#application)

### getUsersUserIdGitInfo



```js
clever_cloud.getUsersUserIdGitInfo({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`

#### Output
*Output schema unknown*

### getVendorApps



```js
clever_cloud.getVendorApps({}, context)
```

#### Input
* input `object`
  * offset `integer`

#### Output
* output `array`
  * items [Application](#application)

### getVendorAppsAddonId



```js
clever_cloud.getVendorAppsAddonId({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### putVendorAppsAddonId



```js
clever_cloud.putVendorAppsAddonId({
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`

#### Output
*Output schema unknown*

### postVendorBillingOwnerId



```js
clever_cloud.postVendorBillingOwnerId({
  "addonId": "",
  "body": {
    "cost": 0
  }
}, context)
```

#### Input
* input `object`
  * addonId **required** `string`
  * body **required** [WannabeAddonBilling](#wannabeaddonbilling)

#### Output
*Output schema unknown*



## Definitions

### Addon
* Addon `object`: An addon
  * configKeys **required** `array`: Environments variables link to the addon.
    * items `string`
  * creationDate **required** `string`: The creation timestamp of the addon
  * id **required** `string`: `addon_${uuid}`
  * name **required** `string`
  * plan **required** [Plan](#plan)
  * provider **required** [Provider](#provider)
  * realId **required** `string`: `${provider}_${uuid2}`
  * region **required** `string`

### AddonProviderSso
* AddonProviderSso `object`
  * macaroon **required** `string`
  * url **required** `string`

### AppInstance
* AppInstance `object`
  * appId `string`
  * appPort `integer`
  * commit `string`
  * deployNumber `integer`
  * flavor [Flavor](#flavor)
  * id `string`
  * ip `string`
  * state `string`

### Application
* Application `object`
  * archived **required** `boolean`
  * branch **required** `string`
  * buildFlavor **required** [Flavor](#flavor)
  * cancelOnPush **required** `boolean`
  * commitId **required** `string`
  * creationDate **required** `string`
  * deployUrl **required** `string`
  * deployment **required** [Deployment](#deployment)
  * description **required** `string`
  * favourite **required** `boolean`
  * homogeneous **required** `boolean`
  * id **required** `string`
  * instance **required** [Instance](#instance)
  * last_deploy **required** `integer`
  * name **required** `string`
  * ownerId **required** `string`
  * separateBuild **required** `boolean`
  * state **required** `string`
  * stickySessions **required** `boolean`
  * vhosts **required** `array`
    * items [Vhost](#vhost)
  * webhookSecret **required** `string`
  * webhookUrl **required** `string`
  * zone **required** `string`: `par` ou `mtl`

### Avatar
* Avatar `object`: If you want to upload an image from your computer, send the image in the body of the request without anything else.
  * source **required** `object`
    * source **required** `string`: github or gravatar
    * value **required** [URL](#url)

### Body
* Body `object`
  * body **required** `string`

### Change_Password
* Change_Password `object`
  * newPassword **required** `string`
  * oldPassword **required** `string`

### Conso
* Conso `object`
  * appId **required** `string`
  * conso **required** `object`
    * conso **required** `string`: One day consumption
    * date **required** `string`

### Consumer
* Consumer `object`
  * baseUrl **required** `string`
  * description **required** `string`
  * key `string`
  * name **required** `string`
  * picture `string`
  * rights **required** [ConsumerRights](#consumerrights)
  * url **required** `string`

### ConsumerRights
* ConsumerRights `object`
  * access_bills `boolean`
  * access_consumption_statistics `boolean`
  * access_credit_count `boolean`
  * access_organisations `boolean`
  * access_organisations_bills `boolean`
  * access_organisations_consumption_statistics `boolean`
  * access_organisations_credit_count `boolean`
  * access_personal_information `boolean`
  * almighty `boolean`
  * manage_applications `boolean`
  * manage_organisations `boolean`
  * manage_organisations_applications `boolean`
  * manage_organisations_members `boolean`
  * manage_organisations_services `boolean`
  * manage_personal_information `boolean`
  * manage_services `boolean`
  * manage_ssh_keys `boolean`

### Country
* Country `object`
  * code **required** `string`: Code ISO 3166
  * name **required** `string`

### Credits
* Credits `object`
  * count **required** `number`
  * dropPrice **required** `object`
    * currency **required** `string`
    * value **required** `number`
  * ownerId **required** `string`

### Deployment
* Deployment `object`
  * httpUrl `string`
  * repoState **required** `string`
  * shutdownable **required** `boolean`
  * type **required** `string`
  * url **required** `string`

### Env
* Env `object`
  * addon_id **required** `string`
  * addon_name **required** `string`
  * env **required** `array`
    * items [WannabeEnv](#wannabeenv)
  * provider_id **required** `string`

### Feature
* Feature `object`
  * name **required** `string`: The name of the properties
  * type **required** `string`: The type of the feature
  * value **required** `string`: The value of the feature

### Flavor
* Flavor `object`
  * available `boolean`
  * cpus **required** `integer`
  * disk `integer`
  * mem **required** `integer`
  * microservice `boolean`
  * name **required** `string`
  * nice `number`
  * price **required** `number`

### Instance
* Instance `object`
  * buildFlavor [Flavor](#flavor)
  * comingSoon `boolean`
  * defaultEnv **required** [Map](#map)
  * defaultFlavor [Flavor](#flavor)
  * deployments `array`
    * items `string`
  * description `string`
  * enabled `boolean`
  * flavors **required** `array`
    * items [Flavor](#flavor)
  * instanceAndVersion **required** `string`
  * maxAllowedInstances **required** `integer`
  * maxFlavor **required** [Flavor](#flavor)
  * maxInstances **required** `integer`
  * minFlavor **required** [Flavor](#flavor)
  * minInstances **required** `integer`
  * name `string`
  * tags `array`
    * items `string`
  * type **required** `string`
  * variant **required** [Variant](#variant)
  * version **required** `integer`

### Key
* Key `object`
  * fingerprint **required** `string`
  * key **required** `string`
  * name **required** `string`

### ListEnv
* ListEnv `object`
  * name `string`
  * value `string`

### Map
* Map `object`

### Member
* Member `object`
  * job **required** `string`
  * member **required** `object`
    * avatar `string`
    * email **required** `string`
    * id **required** `string`
    * name `string`
  * role **required** `string`

### Organisation
* Organisation `object`
  * VAT **required** `string`
  * address **required** `string`
  * avatar **required** `string`
  * city **required** `string`
  * company **required** `string`
  * country **required** `string`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * vatState **required** `string`
  * zipcode **required** `string`

### PaymentData
* PaymentData `object`
  * token **required** `string`
  * type **required** `string`

### Payment_Provider
* Payment_Provider `object`
  * comingSoon **required** `boolean`
  * imgUrl **required** `string`
  * name **required** `string`
  * title **required** `string`

### Plan
* Plan `object`
  * features **required** `array`: The list of the feature in the addon
    * items [Feature](#feature)
  * id **required** `string`: `plan_${uuid}`
  * name **required** `string`: Name of the pan
  * price **required** `integer`
  * slug **required** `string`

### Provider
* Provider `object`: A provider
  * analyticsId **required** `string`: The id of the analytics page link to this addon
  * canUpgrade **required** `boolean`: Can the addon be upgraded
  * features `array`
    * items [Feature](#feature)
  * googlePlusName **required** `string`: The name of the google + page link to this addon (could be empty)
  * id **required** `string`: The id of the provider
  * logoUrl **required** `string`: The url of the addon's logo
  * longDesc **required** `string`: A less concise description of the addon
  * name **required** `string`
  * openInNewTab **required** `boolean`: Does the addon panel need to be open in a new tab
  * plans `array`
    * items [Plan](#plan)
  * regions **required** `array`: The differents regions where the addon is available
    * items `string`
  * shortDesc **required** `string`: A short description of the addon
  * status **required** `string`: The status of this addon (RELEASE, BETA, ...)
  * supportEmail **required** `string`: The mail to contact in case of issue with this addon
  * twitterName **required** `string`: The name of the user to contact on twitter for this addon (could be empty)
  * website **required** `string`: The website of the provider. If the addon is developped by clever-cloud, the site is "http://www.clever-cloud.com/"

### Rights
* Rights `object`
  * description **required** `string`
  * name **required** `string`

### Secret
* Secret `object`
  * secret **required** `string`
  * value **required** `string`

### Sso
* Sso `object`
  * email **required** `string`
  * id **required** `string`
  * nav-data **required** `string`
  * timestamp **required** `string`
  * token **required** `string`
  * url **required** `string`

### Summary
* Summary `object`
  * organisations **required** `array`
    * items `object`
      * addons `array`
        * items `object`
          * id `string`
          * logoUrl `string`
          * name `string`
          * providerId `string`
      * applications `array`
        * items `object`
          * archived `boolean`
          * commit `string`
          * id `string`
          * instanceType `string`
          * instanceVariant `string`
          * name `string`
          * state `string`
          * variantSlug `string`
      * avatar `string`
      * consumers `array`
        * items `object`
          * key `string`
          * name `string`
          * picture `string`
      * id `string`
      * name `string`
      * providers `array`
        * items `string`
      * role `string`
  * user **required** `object`
    * addons **required** `array`
      * items `object`
        * id `string`
        * logoUrl `string`
        * name `string`
        * providerId `string`
    * admin **required** `boolean`
    * applications **required** `array`
      * items `object`
        * archived `boolean`
        * commit `string`
        * id `string`
        * instanceType `string`
        * instanceVariant `string`
        * name `string`
        * state `string`
        * variantSlug `string`
    * avatar **required** `string`
    * consumers `array`
      * items `object`
        * key `string`
        * name `string`
        * picture `string`
    * id **required** `string`
    * lang **required** `string`
    * name **required** `string`

### Token
* Token `object`
  * consumer **required** [Consumer](#consumer)
  * creationDate **required** `integer`
  * lastUtilisation **required** `string`
  * rights **required** [Rights](#rights)
  * token **required** `string`

### Transaction_Id
* Transaction_Id `object`: A simple transaction id
  * transactionId **required** `string`: The transaction Id

### URL
* URL `object`: Must be a valid HTTP URL
  * url **required** `string`

### User
* User `object`: A user representation
  * address **required** `string`: The address of the user
  * admin **required** `boolean`: Is the user an administrator ?
  * avatar **required** `string`: The location of the user's avatar
  * canPay **required** `boolean`: Does the user can pay ?
  * city **required** `string`: The city of the user
  * country **required** `string`: The country of the user
  * creationDate **required** `integer`: The creation timestamp of the user
  * email **required** `string`: The email of the user
  * emailValidated **required** `boolean`: Does the user email is validate
  * hasPassword `boolean`
  * id **required** `string`: The id of the user : `user_${uuid}`
  * lang **required** `string`: The lang of the user
  * name **required** `string`: The name of the user
  * oauthApps **required** `array`: The list of token oauth
    * items `string`
  * phone **required** `string`: The phone of the user
  * preferredMFA `string`
  * zipcode **required** `string`: The zipcode of the user

### Variant
* Variant `object`
  * deployType **required** `string`
  * id **required** `string`
  * logo **required** `string`
  * name **required** `string`
  * slug **required** `string`

### Vhost
* Vhost `object`
  * fqdn **required** `string`

### WannabeAddon
* WannabeAddon `object`
  * name **required** `string`
  * payment **required** [PaymentData](#paymentdata)
  * plan **required** `string`
  * providerId **required** `string`
  * region **required** `string`

### WannabeAddonBilling
* WannabeAddonBilling `object`
  * cost **required** `number`

### WannabeAddonProvider
* WannabeAddonProvider `object`
  * api **required** [WannabeAddonProviderAPI](#wannabeaddonproviderapi)
  * id **required** `string`
  * name **required** `string`

### WannabeAddonProviderAPI
* WannabeAddonProviderAPI `object`
  * config_vars **required** `array`
    * items `string`
  * password **required** `string`
  * production [WannabeAddonProviderAPIUrl](#wannabeaddonproviderapiurl)
  * regions `array`
    * items `string`
  * sso_salt **required** `string`
  * test [WannabeAddonProviderAPIUrl](#wannabeaddonproviderapiurl)

### WannabeAddonProviderAPIUrl
* WannabeAddonProviderAPIUrl `object`
  * base_url **required** `string`
  * sso_url **required** `string`

### WannabeApplication
* WannabeApplication `object`
  * archived `boolean`
  * cancelOnPush `boolean`
  * deploy **required** `string`
  * description `string`
  * enabled **required** `boolean`
  * favourite `boolean`
  * homogeneous `boolean`
  * instance **required** [Instance](#instance)
  * maxFlavor [Flavor](#flavor)
  * maxInstances **required** `integer`
  * minFlavor [Flavor](#flavor)
  * minInstances **required** `integer`
  * name **required** `string`
  * oauthApp [WannabeOauthApp](#wannabeoauthapp)
  * oauthAppId `string`
  * oauthService `string`
  * separateBuild `boolean`
  * shutdownable `boolean`
  * stickySessions `boolean`
  * tags `array`
    * items `string`
  * zone **required** `string`

### WannabeConsumer
* WannabeConsumer `object`
  * baseUrl **required** [URL](#url)
  * description `string`
  * name **required** `string`
  * picture `string`
  * rights **required** `object`
    * activated **required** `boolean`
    * right **required** `string`
  * url **required** [URL](#url)

### WannabeEnv
* WannabeEnv `object`
  * name **required** `string`
  * value **required** `string`

### WannabeFeature
* WannabeFeature `object`
  * name **required** `string`
  * type **required** `string`: BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE

### WannabeMember
* WannabeMember `object`
  * email **required** `string`
  * job `string`
  * role **required** `string`

### WannabeOauthApp
* WannabeOauthApp `object`
  * name `string`
  * owner `string`

### WannabeOrganisation
* WannabeOrganisation `object`
  * VAT `string`
  * address `string`: The address of the organisation.
  * city `string`: The city of the organisation.
  * company `string`: The company's name of the organisation.
  * country `string`: The country of the organisation.
  * description **required** `string`: The description of the organisation.
  * name **required** `string`: The name of the organisation.
  * zipcode `string`: The zipcode of the city's organisation.

### WannabePlan
* WannabePlan `object`
  * features **required** `array`
    * items [WannabePlanFeature](#wannabeplanfeature)
  * name **required** `string`
  * price **required** `integer`
  * slug **required** `string`

### WannabePlanFeature
* WannabePlanFeature `object`
  * name **required** `string`
  * type **required** `string`
  * value **required** `string`

### WannabeUser
* WannabeUser `object`
  * address `string`
  * city `string`
  * country `string`
  * email **required** `string`
  * lang `string`
  * name `string`
  * password **required** `string`
  * phone `string`
  * terms **required** `boolean`
  * zipcode `string`

### Zone
* Zone `object`
  * correspondingRegion **required** `string`
  * internal **required** `boolean`
  * name **required** `string`


