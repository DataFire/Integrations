# @datafire/netlify

Client library for Netlify's API documentation

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

.then(data => {
  console.log(data);
});
```

## Description

Netlify is a hosting service for the programmable web. It understands your documents and provides an API to handle atomic deploys of websites, manage form submissions, inject JavaScript snippets, and much more. This is a REST-style API that uses JSON for serialization and OAuth 2 for authentication.

This document is an OpenAPI reference for the Netlify API that you can explore. For more detailed instructions for common uses, please visit the [online documentation](https://www.netlify.com/docs/api/). Visit our Community forum to join the conversation about [understanding and using Netlify’s API](https://community.netlify.com/t/common-issue-understanding-and-using-netlifys-api/160).

Additionally, we have two API clients for your convenience:
- [Go Client](https://github.com/netlify/open-api#go-client)
- [JS Client](https://github.com/netlify/js-client)

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

### getAccount



```js
netlify.getAccount({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`

#### Output
* output `array`
  * items [accountMembership](#accountmembership)

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

### cancelSiteDeploy



```js
netlify.cancelSiteDeploy({
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
  * size `integer`
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
  * size `integer`
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

### createPluginRun
This is an internal-only endpoint.


```js
netlify.createPluginRun({
  "deploy_id": ""
}, context)
```

#### Input
* input `object`
  * deploy_id **required** `string`
  * plugin_run [pluginRunData](#pluginrundata)

#### Output
* output [pluginRun](#pluginrun)

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

### getDnsZones



```js
netlify.getDnsZones({}, context)
```

#### Input
* input `object`
  * account_slug `string`

#### Output
* output [dnsZones](#dnszones)

### createDnsZone



```js
netlify.createDnsZone({
  "DnsZoneParams": {}
}, context)
```

#### Input
* input `object`
  * DnsZoneParams **required** [dnsZoneSetup](#dnszonesetup)

#### Output
* output [dnsZone](#dnszone)

### deleteDnsZone



```js
netlify.deleteDnsZone({
  "zone_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`

#### Output
*Output schema unknown*

### getDnsZone



```js
netlify.getDnsZone({
  "zone_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`

#### Output
* output [dnsZone](#dnszone)

### getDnsRecords



```js
netlify.getDnsRecords({
  "zone_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`

#### Output
* output [dnsRecords](#dnsrecords)

### createDnsRecord



```js
netlify.createDnsRecord({
  "dns_record": {},
  "zone_id": ""
}, context)
```

#### Input
* input `object`
  * dns_record **required** [dnsRecordCreate](#dnsrecordcreate)
  * zone_id **required** `string`

#### Output
* output [dnsRecord](#dnsrecord)

### deleteDnsRecord



```js
netlify.deleteDnsRecord({
  "zone_id": "",
  "dns_record_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`
  * dns_record_id **required** `string`

#### Output
*Output schema unknown*

### getIndividualDnsRecord



```js
netlify.getIndividualDnsRecord({
  "zone_id": "",
  "dns_record_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`
  * dns_record_id **required** `string`

#### Output
* output [dnsRecord](#dnsrecord)

### transferDnsZone



```js
netlify.transferDnsZone({
  "zone_id": "",
  "account_id": "",
  "transfer_account_id": "",
  "transfer_user_id": ""
}, context)
```

#### Input
* input `object`
  * zone_id **required** `string`
  * account_id **required** `string`: the account of the dns zone
  * transfer_account_id **required** `string`: the account you want to transfer the dns zone to
  * transfer_user_id **required** `string`: the user you want to transfer the dns zone to

#### Output
* output [dnsZone](#dnszone)

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

### deleteHook



```js
netlify.deleteHook({
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

### getServices



```js
netlify.getServices({}, context)
```

#### Input
* input `object`
  * search `string`

#### Output
* output `array`
  * items [service](#service)

### showService



```js
netlify.showService({
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * addonName **required** `string`

#### Output
* output [service](#service)

### showServiceManifest



```js
netlify.showServiceManifest({
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * addonName **required** `string`

#### Output
* output `object`

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

### createSiteBuild



```js
netlify.createSiteBuild({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [build](#build)

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

### deleteSiteForm



```js
netlify.deleteSiteForm({
  "site_id": "",
  "form_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * form_id **required** `string`

#### Output
*Output schema unknown*

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

### rollbackSiteDeploy



```js
netlify.rollbackSiteDeploy({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
*Output schema unknown*

### listServiceInstancesForSite



```js
netlify.listServiceInstancesForSite({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output `array`
  * items [serviceInstance](#serviceinstance)

### createServiceInstance



```js
netlify.createServiceInstance({
  "config": {},
  "site_id": "",
  "addon": ""
}, context)
```

#### Input
* input `object`
  * config **required** `object`
  * site_id **required** `string`
  * addon **required** `string`

#### Output
* output [serviceInstance](#serviceinstance)

### deleteServiceInstance



```js
netlify.deleteServiceInstance({
  "site_id": "",
  "addon": "",
  "instance_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * addon **required** `string`
  * instance_id **required** `string`

#### Output
*Output schema unknown*

### showServiceInstance



```js
netlify.showServiceInstance({
  "site_id": "",
  "addon": "",
  "instance_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * addon **required** `string`
  * instance_id **required** `string`

#### Output
* output [serviceInstance](#serviceinstance)

### updateServiceInstance



```js
netlify.updateServiceInstance({
  "config": {},
  "site_id": "",
  "addon": "",
  "instance_id": ""
}, context)
```

#### Input
* input `object`
  * config **required** `object`
  * site_id **required** `string`
  * addon **required** `string`
  * instance_id **required** `string`

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

### getSplitTests



```js
netlify.getSplitTests({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [splitTests](#splittests)

### createSplitTest



```js
netlify.createSplitTest({
  "branch_tests": {},
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * branch_tests **required** [splitTestSetup](#splittestsetup)
  * site_id **required** `string`

#### Output
* output [splitTest](#splittest)

### getSplitTest



```js
netlify.getSplitTest({
  "site_id": "",
  "split_test_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * split_test_id **required** `string`

#### Output
* output [splitTest](#splittest)

### updateSplitTest



```js
netlify.updateSplitTest({
  "branch_tests": {},
  "site_id": "",
  "split_test_id": ""
}, context)
```

#### Input
* input `object`
  * branch_tests **required** [splitTestSetup](#splittestsetup)
  * site_id **required** `string`
  * split_test_id **required** `string`

#### Output
* output [splitTest](#splittest)

### enableSplitTest



```js
netlify.enableSplitTest({
  "site_id": "",
  "split_test_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * split_test_id **required** `string`

#### Output
*Output schema unknown*

### disableSplitTest



```js
netlify.disableSplitTest({
  "site_id": "",
  "split_test_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`
  * split_test_id **required** `string`

#### Output
*Output schema unknown*

### unlinkSiteRepo
[Beta] Unlinks the repo from the site.

This action will also:
- Delete associated deploy keys
- Delete outgoing webhooks for the repo
- Delete the site's build hooks


```js
netlify.unlinkSiteRepo({
  "site_id": ""
}, context)
```

#### Input
* input `object`
  * site_id **required** `string`

#### Output
* output [site](#site)

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

### getCurrentUser



```js
netlify.getCurrentUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [user](#user)

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

### createSiteInTeam



```js
netlify.createSiteInTeam({
  "account_slug": ""
}, context)
```

#### Input
* input `object`
  * site [siteSetup](#sitesetup)
  * configure_dns `boolean`
  * account_slug **required** `string`

#### Output
* output [site](#site)



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
  * site_capabilities `object`
    * large_media_enabled `boolean`
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
  * branch `string`
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
  * dns_zone_id `string`
  * flag `integer`
  * hostname `string`
  * id `string`
  * managed `boolean`
  * priority `integer`
  * site_id `string`
  * tag `string`
  * ttl `integer`
  * type `string`
  * value `string`

### dnsRecordCreate
* dnsRecordCreate `object`
  * flag `integer`
  * hostname `string`
  * port `integer`
  * priority `integer`
  * tag `string`
  * ttl `integer`
  * type `string`
  * value `string`
  * weight `integer`

### dnsRecords
* dnsRecords `array`
  * items [dnsRecord](#dnsrecord)

### dnsZone
* dnsZone `object`
  * account_id `string`
  * account_name `string`
  * account_slug `string`
  * created_at `string`
  * dedicated `boolean`
  * dns_servers `array`
    * items `string`
  * domain `string`
  * errors `array`
    * items `string`
  * id `string`
  * ipv6_enabled `boolean`
  * name `string`
  * records `array`
    * items [dnsRecord](#dnsrecord)
  * site_id `string`
  * supported_record_types `array`
    * items `string`
  * updated_at `string`
  * user_id `string`

### dnsZoneSetup
* dnsZoneSetup `object`
  * account_slug `string`
  * name `string`
  * site_id `string`

### dnsZones
* dnsZones `array`
  * items [dnsZone](#dnszone)

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

### pluginRun
* pluginRun
  * package `string`
  * reporting_event `string`
  * state `string`
  * summary `string`
  * text `string`
  * title `string`
  * version `string`
  * deploy_id `string`

### pluginRunData
* pluginRunData `object`
  * package `string`
  * reporting_event `string`
  * state `string`
  * summary `string`
  * text `string`
  * title `string`
  * version `string`

### repoInfo
* repoInfo `object`
  * allowed_branches `array`
    * items `string`
  * cmd `string`
  * deploy_key_id `string`
  * dir `string`
  * env `object`
  * id `integer`
  * installation_id `integer`
  * private_logs `boolean`
  * provider `string`
  * public_repo `boolean`
  * repo_branch `string`
  * repo_path `string`
  * repo_url `string`
  * stop_builds `boolean`

### service
* service `object`
  * created_at `string`
  * description `string`
  * environments `array`
    * items `string`
  * events `array`
    * items `object`
  * icon `string`
  * id `string`
  * long_description `string`
  * manifest_url `string`
  * name `string`
  * service_path `string`
  * slug `string`
  * tags `array`
    * items `string`
  * updated_at `string`

### serviceInstance
* serviceInstance `object`
  * auth_url `string`
  * config `object`
  * created_at `string`
  * env `object`
  * external_attributes `object`
  * id `string`
  * service_name `string`
  * service_path `string`
  * service_slug `string`
  * snippets `array`
    * items `object`
  * updated_at `string`
  * url `string`

### site
* site `object`
  * account_name `string`
  * account_slug `string`
  * admin_url `string`
  * build_image `string`
  * build_settings [repoInfo](#repoinfo)
  * capabilities `object`
  * created_at `string`
  * custom_domain `string`
  * default_hooks_data `object`
    * access_token `string`
  * deploy_hook `string`
  * deploy_url `string`
  * domain_aliases `array`
    * items `string`
  * force_ssl `boolean`
  * git_provider `string`
  * id `string`
  * id_domain `string`
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
  * build_image `string`
  * build_settings [repoInfo](#repoinfo)
  * capabilities `object`
  * created_at `string`
  * custom_domain `string`
  * default_hooks_data `object`
    * access_token `string`
  * deploy_hook `string`
  * deploy_url `string`
  * domain_aliases `array`
    * items `string`
  * force_ssl `boolean`
  * git_provider `string`
  * id `string`
  * id_domain `string`
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

### splitTest
* splitTest `object`
  * active `boolean`
  * branches `array`
    * items `object`
  * created_at `string`
  * id `string`
  * name `string`
  * path `string`
  * site_id `string`
  * unpublished_at `string`
  * updated_at `string`

### splitTestSetup
* splitTestSetup `object`
  * branch_tests `object`

### splitTests
* splitTests `array`
  * items [splitTest](#splittest)

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

### user
* user `object`
  * affiliate_id `string`
  * avatar_url `string`
  * created_at `string`
  * email `string`
  * full_name `string`
  * id `string`
  * last_login `string`
  * login_providers `array`
    * items `string`
  * onboarding_progress `object`
    * slides `string`
  * site_count `integer`
  * uid `string`


