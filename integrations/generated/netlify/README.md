# @datafire/netlify

Client library for Netlify's API definition

## Installation and Usage
```bash
npm install --save @datafire/netlify
```
```js
let netlify = require('@datafire/netlify').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

netlify.listSites({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### listAccountsForUser



```js
netlify.listAccountsForUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [accountMembership](#accountmembership)

### createAccount



```js
netlify.createAccount({
  "accountSetup": {
    "name": "",
    "type_id": ""
  }
}, context)
```

#### Input
* input `object`
  * accountSetup **required** [accountSetup](#accountsetup)

#### Output
* output [accountMembership](#accountmembership)

### listAccountTypesForUser



```js
netlify.listAccountTypesForUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [accountType](#accounttype)

### cancelAccount



```js
netlify.cancelAccount({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`

#### Output
*Output schema unknown*

### updateAccount



```js
netlify.updateAccount({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * accountUpdateSetup [accountUpdateSetup](#accountupdatesetup)
  * account_id **required** `string`

#### Output
* output [accountMembership](#accountmembership)

### listAccountAuditEvents



```js
netlify.listAccountAuditEvents({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * query `string`
  * log_type `string`
  * account_id **required** `string`

#### Output
* output `array`
  * items [auditLog](#auditlog)

### listPaymentMethodsForUser



```js
netlify.listPaymentMethodsForUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [paymentMethod](#paymentmethod)

### getSiteBuild



```js
netlify.getSiteBuild({
  "build_id": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `string`

#### Output
* output [build](#build)

### updateSiteBuildLog



```js
netlify.updateSiteBuildLog({
  "build_id": "",
  "msg": {}
}, context)
```

#### Input
* input `object`
  * build_id **required** `string`
  * msg **required** [buildLogMsg](#buildlogmsg)

#### Output
*Output schema unknown*

### notifyBuildStart



```js
netlify.notifyBuildStart({
  "build_id": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `string`

#### Output
*Output schema unknown*

### listDeployKeys



```js
netlify.listDeployKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [deployKey](#deploykey)

### createDeployKey



```js
netlify.createDeployKey(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [deployKey](#deploykey)

### deleteDeployKey



```js
netlify.deleteDeployKey({
  "key_id": ""
}, context)
```

#### Input
* input `object`
  * key_id **required** `string`

#### Output
*Output schema unknown*

### getDeployKey



```js
netlify.getDeployKey({
  "key_id": ""
}, context)
```

#### Input
* input `object`
  * key_id **required** `string`

#### Output
* output [deployKey](#deploykey)

### getDeploy



```js
netlify.getDeploy({
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`

#### Output
* output [deploy](#deploy)

### uploadDeployFile



```js
netlify.uploadDeployFile({
  "deploy_id": "",
  "path": "",
  "file_body": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`
  * path **required** `string`
  * file_body **required** `string`

#### Output
* output [file](#file)

### uploadDeployFunction



```js
netlify.uploadDeployFunction({
  "deploy_id": "",
  "name": "",
  "file_body": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`
  * name **required** `string`
  * runtime `string`
  * file_body **required** `string`

#### Output
* output [function](#function)

### lockDeploy



```js
netlify.lockDeploy({
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`

#### Output
* output [deploy](#deploy)

### unlockDeploy



```js
netlify.unlockDeploy({
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`

#### Output
* output [deploy](#deploy)

### listForms



```js
netlify.listForms({}, context)
```

#### Input
* input `object`
  * site_id `string`

#### Output
* output `array`
  * items [form](#form)

### listFormSubmissions



```js
netlify.listFormSubmissions({
  "form_id": ""
}, context)
```

#### Input
* input `object`
  * form_id **required** `string`

#### Output
* output `array`
  * items [submission](#submission)

### listHooksBySiteId



```js
netlify.listHooksBySiteId({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [hook](#hook)

### createHookBySiteId



```js
netlify.createHookBySiteId({
  "site_id": "",
  "hook": {}
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * hook **required** [hook](#hook)

#### Output
* output [hook](#hook)

### listHookTypes



```js
netlify.listHookTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [hookType](#hooktype)

### deleteHookBySiteId



```js
netlify.deleteHookBySiteId({
  "hook_id": ""
}, context)
```

#### Input
* input `object`
  * hook_id **required** `string`

#### Output
*Output schema unknown*

### getHook



```js
netlify.getHook({
  "hook_id": ""
}, context)
```

#### Input
* input `object`
  * hook_id **required** `string`

#### Output
* output [hook](#hook)

### updateHook



```js
netlify.updateHook({
  "hook": {},
  "hook_id": ""
}, context)
```

#### Input
* input `object`
  * hook **required** [hook](#hook)
  * hook_id **required** `string`

#### Output
* output [hook](#hook)

### enableHook



```js
netlify.enableHook({
  "hook_id": ""
}, context)
```

#### Input
* input `object`
  * hook_id **required** `string`

#### Output
* output [hook](#hook)

### createTicket



```js
netlify.createTicket({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`

#### Output
* output [ticket](#ticket)

### showTicket



```js
netlify.showTicket({
  "ticket_id": ""
}, context)
```

#### Input
* input `object`
  * ticket_id **required** `string`

#### Output
* output [ticket](#ticket)

### exchangeTicket



```js
netlify.exchangeTicket({
  "ticket_id": ""
}, context)
```

#### Input
* input `object`
  * ticket_id **required** `string`

#### Output
* output [accessToken](#accesstoken)

### listSites



```js
netlify.listSites({}, context)
```

#### Input
* input `object`
  * name `string`
  * filter `string` (values: all, owner, guest)

#### Output
* output `array`
  * items [site](#site)

### createSite



```js
netlify.createSite({
  "site": null
}, context)
```

#### Input
* input `object`
  * site **required** [siteSetup](#sitesetup)
  * configure_dns `boolean`

#### Output
* output [site](#site)

### deleteSite



```js
netlify.deleteSite({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
*Output schema unknown*

### getSite



```js
netlify.getSite({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [site](#site)

### updateSite



```js
netlify.updateSite({
  "site": null,
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site **required** [siteSetup](#sitesetup)
  * site_id **required** `string`

#### Output
* output [site](#site)

### listSiteAssets



```js
netlify.listSiteAssets({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [asset](#asset)

### createSiteAsset



```js
netlify.createSiteAsset({
  "name": "",
  "size": 0,
  "content_type": "",
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * size **required** `integer`
  * content_type **required** `string`
  * visibility `string`
  * site_id **required** `string`

#### Output
* output [assetSignature](#assetsignature)

### deleteSiteAsset



```js
netlify.deleteSiteAsset({
  "site_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * asset_id **required** `string`

#### Output
*Output schema unknown*

### getSiteAssetInfo



```js
netlify.getSiteAssetInfo({
  "site_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * asset_id **required** `string`

#### Output
* output [asset](#asset)

### updateSiteAsset



```js
netlify.updateSiteAsset({
  "state": "",
  "site_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * state **required** `string`
  * site_id **required** `string`
  * asset_id **required** `string`

#### Output
* output [asset](#asset)

### getSiteAssetPublicSignature



```js
netlify.getSiteAssetPublicSignature({
  "site_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * asset_id **required** `string`

#### Output
* output [assetPublicSignature](#assetpublicsignature)

### listSiteBuildHooks



```js
netlify.listSiteBuildHooks({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [buildHook](#buildhook)

### createSiteBuildHook



```js
netlify.createSiteBuildHook({
  "buildHook": {},
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * buildHook **required** [buildHook](#buildhook)
  * site_id **required** `string`

#### Output
* output [buildHook](#buildhook)

### deleteSiteBuildHook



```js
netlify.deleteSiteBuildHook({
  "site_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### getSiteBuildHook



```js
netlify.getSiteBuildHook({
  "site_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * id **required** `string`

#### Output
* output [buildHook](#buildhook)

### updateSiteBuildHook



```js
netlify.updateSiteBuildHook({
  "buildHook": {},
  "site_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * buildHook **required** [buildHook](#buildhook)
  * site_id **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### listSiteBuilds



```js
netlify.listSiteBuilds({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [build](#build)

### listSiteDeployedBranches



```js
netlify.listSiteDeployedBranches({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [deployedBranch](#deployedbranch)

### listSiteDeploys



```js
netlify.listSiteDeploys({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [deploy](#deploy)

### createSiteDeploy



```js
netlify.createSiteDeploy({
  "deploy": {},
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * title `string`
  * deploy **required** [deployFiles](#deployfiles)
  * site_id **required** `string`

#### Output
* output [deploy](#deploy)

### getSiteDeploy



```js
netlify.getSiteDeploy({
  "site_id": "",
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * deploy_id **required** `string`

#### Output
* output [deploy](#deploy)

### updateSiteDeploy



```js
netlify.updateSiteDeploy({
  "site_id": "",
  "deploy_id": "",
  "deploy": {}
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * deploy_id **required** `string`
  * deploy **required** [deployFiles](#deployfiles)

#### Output
* output [deploy](#deploy)

### restoreSiteDeploy



```js
netlify.restoreSiteDeploy({
  "site_id": "",
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * deploy_id **required** `string`

#### Output
* output [deploy](#deploy)

### getDNSForSite



```js
netlify.getDNSForSite({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [dnsZone](#dnszone)

### configureDNSForSite



```js
netlify.configureDNSForSite({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [dnsZone](#dnszone)

### listSiteFiles



```js
netlify.listSiteFiles({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [file](#file)

### getSiteFileByPathName



```js
netlify.getSiteFileByPathName({
  "site_id": "",
  "file_path": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * file_path **required** `string`

#### Output
* output [file](#file)

### listSiteForms



```js
netlify.listSiteForms({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [form](#form)

### getSiteMetadata



```js
netlify.getSiteMetadata({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [metadata](#metadata)

### updateSiteMetadata



```js
netlify.updateSiteMetadata({
  "metadata": {},
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * metadata **required** [metadata](#metadata)
  * site_id **required** `string`

#### Output
*Output schema unknown*

### listSiteSnippets



```js
netlify.listSiteSnippets({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [snippet](#snippet)

### createSiteSnippet



```js
netlify.createSiteSnippet({
  "snippet": {},
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * snippet **required** [snippet](#snippet)
  * site_id **required** `string`

#### Output
* output [snippet](#snippet)

### deleteSiteSnippet



```js
netlify.deleteSiteSnippet({
  "site_id": "",
  "snippet_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * snippet_id **required** `string`

#### Output
*Output schema unknown*

### getSiteSnippet



```js
netlify.getSiteSnippet({
  "site_id": "",
  "snippet_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * snippet_id **required** `string`

#### Output
* output [snippet](#snippet)

### updateSiteSnippet



```js
netlify.updateSiteSnippet({
  "snippet": {},
  "site_id": "",
  "snippet_id": ""
}, context)
```

#### Input
* input `object`
  * snippet **required** [snippet](#snippet)
  * site_id **required** `string`
  * snippet_id **required** `string`

#### Output
*Output schema unknown*

### showSiteTLSCertificate



```js
netlify.showSiteTLSCertificate({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [sniCertificate](#snicertificate)

### provisionSiteTLSCertificate



```js
netlify.provisionSiteTLSCertificate({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * certificate `string`
  * key `string`
  * ca_certificates `string`

#### Output
* output [sniCertificate](#snicertificate)

### listSiteSubmissions



```js
netlify.listSiteSubmissions({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [submission](#submission)

### deleteSubmission



```js
netlify.deleteSubmission({
  "submission_id": ""
}, context)
```

#### Input
* input `object`
  * submission_id **required** `string`

#### Output
*Output schema unknown*

### listFormSubmission



```js
netlify.listFormSubmission({
  "submission_id": ""
}, context)
```

#### Input
* input `object`
  * query `string`
  * submission_id **required** `string`

#### Output
* output `array`
  * items [submission](#submission)

### listMembersForAccount



```js
netlify.listMembersForAccount({
  "account_slug": ""
}, context)
```

#### Input
* input `object`
  * account_slug **required** `string`

#### Output
* output `array`
  * items [member](#member)

### addMemberToAccount



```js
netlify.addMemberToAccount({
  "email": "",
  "account_slug": ""
}, context)
```

#### Input
* input `object`
  * role `string` (values: Owner, Collaborator, Controller)
  * email **required** `string`
  * account_slug **required** `string`

#### Output
* output `array`
  * items [member](#member)

### listSitesForAccount



```js
netlify.listSitesForAccount({
  "account_slug": ""
}, context)
```

#### Input
* input `object`
  * name `string`
  * account_slug **required** `string`

#### Output
* output `array`
  * items [site](#site)



## Definitions

### accessToken
* accessToken `object`
  * access_token `string`
  * created_at `string`
  * id `string`
  * user_email `string`
  * user_id `string`

### accountMembership
* accountMembership `object`
  * billing_details `string`
  * billing_email `string`
  * billing_name `string`
  * billing_period `string`
  * capabilities `object`
    * collaborators [accountUsageCapability](#accountusagecapability)
    * sites [accountUsageCapability](#accountusagecapability)
  * created_at `string`
  * id `string`
  * name `string`
  * owner_ids `array`
    * items `string`
  * payment_method_id `string`
  * roles_allowed `array`
    * items `string`
  * slug `string`
  * type `string`
  * type_id `string`
  * type_name `string`
  * updated_at `string`

### accountSetup
* accountSetup `object`
  * extra_seats_block `integer`
  * name **required** `string`
  * payment_method_id `string`
  * period `string` (values: monthly, yearly)
  * type_id **required** `string`

### accountType
* accountType `object`
  * capabilities `object`
  * description `string`
  * id `string`
  * monthly_dollar_price `integer`
  * monthly_seats_addon_dollar_price `integer`
  * name `string`
  * yearly_dollar_price `integer`
  * yearly_seats_addon_dollar_price `integer`

### accountUpdateSetup
* accountUpdateSetup `object`
  * billing_details `string`
  * billing_email `string`
  * billing_name `string`
  * extra_seats_block `integer`
  * name `string`
  * payment_method_id `string`
  * slug `string`
  * type_id `string`

### accountUsageCapability
* accountUsageCapability `object`
  * included `integer`
  * used `integer`

### asset
* asset `object`
  * content_type `string`
  * created_at `string`
  * creator_id `string`
  * id `string`
  * key `string`
  * name `string`
  * site_id `string`
  * size `integer`
  * state `string`
  * updated_at `string`
  * url `string`
  * visibility `string`

### assetForm
* assetForm `object`
  * fields `object`
  * url `string`

### assetPublicSignature
* assetPublicSignature `object`
  * url `string`

### assetSignature
* assetSignature `object`
  * asset [asset](#asset)
  * form [assetForm](#assetform)

### auditLog
* auditLog `object`
  * account_id `string`
  * id `string`
  * payload `object`
    * action `string`
    * actor_email `string`
    * actor_id `string`
    * actor_name `string`
    * log_type `string`
    * timestamp `string`

### build
* build `object`
  * created_at `string`
  * deploy_id `string`
  * done `boolean`
  * error `string`
  * id `string`
  * sha `string`

### buildHook
* buildHook `object`
  * branch `string`
  * created_at `string`
  * id `string`
  * site_id `string`
  * title `string`
  * url `string`

### buildLogMsg
* buildLogMsg `object`
  * error `boolean`
  * message `string`

### deploy
* deploy `object`
  * admin_url `string`
  * branch `string`
  * build_id `string`
  * commit_ref `string`
  * commit_url `string`
  * context `string`
  * created_at `string`
  * deploy_ssl_url `string`
  * deploy_url `string`
  * draft `boolean`
  * error_message `string`
  * id `string`
  * locked `boolean`
  * name `string`
  * published_at `string`
  * required `array`
    * items `string`
  * required_functions `array`
    * items `string`
  * review_id `number`
  * review_url `string`
  * screenshot_url `string`
  * site_id `string`
  * skipped `boolean`
  * ssl_url `string`
  * state `string`
  * title `string`
  * updated_at `string`
  * url `string`
  * user_id `string`

### deployFiles
* deployFiles `object`
  * async `boolean`
  * draft `boolean`
  * files `object`
  * functions `object`

### deployKey
* deployKey `object`
  * created_at `string`
  * id `string`
  * public_key `string`

### deployedBranch
* deployedBranch `object`
  * deploy_id `string`
  * id `string`
  * name `string`
  * slug `string`
  * ssl_url `string`
  * url `string`

### dnsRecord
* dnsRecord `object`
  * hostname `string`
  * id `string`
  * priority `integer`
  * ttl `integer`
  * type `string`
  * value `string`

### dnsZone
* dnsZone `object`
  * id `string`
  * name `string`
  * records `array`
    * items [dnsRecord](#dnsrecord)

### error
* error `object`
  * code `integer`
  * message **required** `string`

### file
* file `object`
  * id `string`
  * mime_type `string`
  * path `string`
  * sha `string`
  * size `integer`

### form
* form `object`
  * created_at `string`
  * fields `array`
    * items `object`
  * id `string`
  * name `string`
  * paths `array`
    * items `string`
  * site_id `string`
  * submission_count `integer`

### function
* function `object`
  * id `string`
  * name `string`
  * sha `string`

### hook
* hook `object`
  * created_at `string`
  * data `object`
  * disabled `boolean`
  * event `string`
  * id `string`
  * site_id `string`
  * type `string`
  * updated_at `string`

### hookType
* hookType `object`
  * events `array`
    * items `string`
  * fields `array`
    * items `object`
  * name `string`

### member
* member `object`
  * avatar `string`
  * email `string`
  * full_name `string`
  * id `string`
  * role `string`

### metadata
* metadata `object`

### minifyOptions
* minifyOptions `object`
  * bundle `boolean`
  * minify `boolean`

### paymentMethod
* paymentMethod `object`
  * created_at `string`
  * data `object`
    * card_type `string`
    * email `string`
    * last4 `string`
  * id `string`
  * method_name `string`
  * state `string`
  * type `string`
  * updated_at `string`

### repoInfo
* repoInfo `object`
  * allowed_branches `array`
    * items `string`
  * cmd `string`
  * deploy_key_id `string`
  * dir `string`
  * env `object`
  * id `integer`
  * private_logs `boolean`
  * provider `string`
  * public_repo `boolean`
  * repo_branch `string`
  * repo_path `string`
  * repo_url `string`

### site
* site `object`
  * account_name `string`
  * account_slug `string`
  * admin_url `string`
  * build_settings [repoInfo](#repoinfo)
  * capabilities `object`
  * created_at `string`
  * custom_domain `string`
  * deploy_hook `string`
  * deploy_url `string`
  * domain_aliases `array`
    * items `string`
  * force_ssl `boolean`
  * git_provider `string`
  * id `string`
  * managed_dns `boolean`
  * name `string`
  * notification_email `string`
  * password `string`
  * plan `string`
  * processing_settings `object`
    * css [minifyOptions](#minifyoptions)
    * html `object`
      * pretty_urls `boolean`
    * images `object`
      * optimize `boolean`
    * js [minifyOptions](#minifyoptions)
    * skip `boolean`
  * published_deploy [deploy](#deploy)
  * screenshot_url `string`
  * session_id `string`
  * ssl `boolean`
  * ssl_url `string`
  * state `string`
  * updated_at `string`
  * url `string`
  * user_id `string`

### siteSetup
* siteSetup
  * account_name `string`
  * account_slug `string`
  * admin_url `string`
  * build_settings [repoInfo](#repoinfo)
  * capabilities `object`
  * created_at `string`
  * custom_domain `string`
  * deploy_hook `string`
  * deploy_url `string`
  * domain_aliases `array`
    * items `string`
  * force_ssl `boolean`
  * git_provider `string`
  * id `string`
  * managed_dns `boolean`
  * name `string`
  * notification_email `string`
  * password `string`
  * plan `string`
  * processing_settings `object`
    * css [minifyOptions](#minifyoptions)
    * html `object`
      * pretty_urls `boolean`
    * images `object`
      * optimize `boolean`
    * js [minifyOptions](#minifyoptions)
    * skip `boolean`
  * published_deploy [deploy](#deploy)
  * screenshot_url `string`
  * session_id `string`
  * ssl `boolean`
  * ssl_url `string`
  * state `string`
  * updated_at `string`
  * url `string`
  * user_id `string`
  * repo [repoInfo](#repoinfo)

### sniCertificate
* sniCertificate `object`
  * created_at `string`
  * domains `array`
    * items `string`
  * expires_at `string`
  * state `string`
  * updated_at `string`

### snippet
* snippet `object`
  * general `string`
  * general_position `string`
  * goal `string`
  * goal_position `string`
  * id `integer`
  * site_id `string`
  * title `string`

### submission
* submission `object`
  * body `string`
  * company `string`
  * created_at `string`
  * data `object`
  * email `string`
  * first_name `string`
  * id `string`
  * last_name `string`
  * name `string`
  * number `integer`
  * site_url `string`
  * summary `string`

### ticket
* ticket `object`
  * authorized `boolean`
  * client_id `string`
  * created_at `string`
  * id `string`


