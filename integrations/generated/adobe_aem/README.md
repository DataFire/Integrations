# @datafire/adobe_aem

Client library for Adobe Experience Manager (AEM) API

## Installation and Usage
```bash
npm install --save @datafire/adobe_aem
```
```js
let adobe_aem = require('@datafire/adobe_aem').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API

## Actions

### postCqActions



```js
adobe_aem.postCqActions({
  "authorizableId": "",
  "changelog": ""
}, context)
```

#### Input
* input `object`
  * authorizableId **required** `string`
  * changelog **required** `string`

#### Output
*Output schema unknown*

### postConfigAdobeGraniteSamlAuthenticationHandler



```js
adobe_aem.postConfigAdobeGraniteSamlAuthenticationHandler({}, context)
```

#### Input
* input `object`
  * keyStorePassword `string`
  * keyStorePassword@TypeHint `string`
  * service.ranking `integer`
  * service.ranking@TypeHint `string`
  * idpHttpRedirect `boolean`
  * idpHttpRedirect@TypeHint `string`
  * createUser `boolean`
  * createUser@TypeHint `string`
  * defaultRedirectUrl `string`
  * defaultRedirectUrl@TypeHint `string`
  * userIDAttribute `string`
  * userIDAttribute@TypeHint `string`
  * defaultGroups `array`
  * defaultGroups@TypeHint `string`
  * idpCertAlias `string`
  * idpCertAlias@TypeHint `string`
  * addGroupMemberships `boolean`
  * addGroupMemberships@TypeHint `string`
  * path `array`
  * path@TypeHint `string`
  * synchronizeAttributes `array`
  * synchronizeAttributes@TypeHint `string`
  * clockTolerance `integer`
  * clockTolerance@TypeHint `string`
  * groupMembershipAttribute `string`
  * groupMembershipAttribute@TypeHint `string`
  * idpUrl `string`
  * idpUrl@TypeHint `string`
  * logoutUrl `string`
  * logoutUrl@TypeHint `string`
  * serviceProviderEntityId `string`
  * serviceProviderEntityId@TypeHint `string`
  * assertionConsumerServiceURL `string`
  * assertionConsumerServiceURL@TypeHint `string`
  * handleLogout `boolean`
  * handleLogout@TypeHint `string`
  * spPrivateKeyAlias `string`
  * spPrivateKeyAlias@TypeHint `string`
  * useEncryption `boolean`
  * useEncryption@TypeHint `string`
  * nameIdFormat `string`
  * nameIdFormat@TypeHint `string`
  * digestMethod `string`
  * digestMethod@TypeHint `string`
  * signatureMethod `string`
  * signatureMethod@TypeHint `string`
  * userIntermediatePath `string`
  * userIntermediatePath@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigAemPasswordReset



```js
adobe_aem.postConfigAemPasswordReset({}, context)
```

#### Input
* input `object`
  * pwdreset.authorizables `array`
  * pwdreset.authorizables@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigAemHealthCheckServlet



```js
adobe_aem.postConfigAemHealthCheckServlet({}, context)
```

#### Input
* input `object`
  * bundles.ignored `array`
  * bundles.ignored@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheFelixJettyBasedHttpService



```js
adobe_aem.postConfigApacheFelixJettyBasedHttpService({}, context)
```

#### Input
* input `object`
  * org.apache.felix.https.nio `boolean`
  * org.apache.felix.https.nio@TypeHint `string`
  * org.apache.felix.https.keystore `string`
  * org.apache.felix.https.keystore@TypeHint `string`
  * org.apache.felix.https.keystore.password `string`
  * org.apache.felix.https.keystore.password@TypeHint `string`
  * org.apache.felix.https.keystore.key `string`
  * org.apache.felix.https.keystore.key@TypeHint `string`
  * org.apache.felix.https.keystore.key.password `string`
  * org.apache.felix.https.keystore.key.password@TypeHint `string`
  * org.apache.felix.https.truststore `string`
  * org.apache.felix.https.truststore@TypeHint `string`
  * org.apache.felix.https.truststore.password `string`
  * org.apache.felix.https.truststore.password@TypeHint `string`
  * org.apache.felix.https.clientcertificate `string`
  * org.apache.felix.https.clientcertificate@TypeHint `string`
  * org.apache.felix.https.enable `boolean`
  * org.apache.felix.https.enable@TypeHint `string`
  * org.osgi.service.http.port.secure `string`
  * org.osgi.service.http.port.secure@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheHttpComponentsProxyConfiguration



```js
adobe_aem.postConfigApacheHttpComponentsProxyConfiguration({}, context)
```

#### Input
* input `object`
  * proxy.host `string`
  * proxy.host@TypeHint `string`
  * proxy.port `integer`
  * proxy.port@TypeHint `string`
  * proxy.exceptions `array`
  * proxy.exceptions@TypeHint `string`
  * proxy.enabled `boolean`
  * proxy.enabled@TypeHint `string`
  * proxy.user `string`
  * proxy.user@TypeHint `string`
  * proxy.password `string`
  * proxy.password@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheSlingDavExServlet



```js
adobe_aem.postConfigApacheSlingDavExServlet({}, context)
```

#### Input
* input `object`
  * alias `string`
  * alias@TypeHint `string`
  * dav.create-absolute-uri `boolean`
  * dav.create-absolute-uri@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheSlingReferrerFilter



```js
adobe_aem.postConfigApacheSlingReferrerFilter({}, context)
```

#### Input
* input `object`
  * allow.empty `boolean`
  * allow.empty@TypeHint `string`
  * allow.hosts `string`
  * allow.hosts@TypeHint `string`
  * allow.hosts.regexp `string`
  * allow.hosts.regexp@TypeHint `string`
  * filter.methods `string`
  * filter.methods@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheSlingGetServlet



```js
adobe_aem.postConfigApacheSlingGetServlet({}, context)
```

#### Input
* input `object`
  * json.maximumresults `string`
  * json.maximumresults@TypeHint `string`
  * enable.html `boolean`
  * enable.html@TypeHint `string`
  * enable.txt `boolean`
  * enable.txt@TypeHint `string`
  * enable.xml `boolean`
  * enable.xml@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigProperty



```js
adobe_aem.postConfigProperty({
  "configNodeName": ""
}, context)
```

#### Input
* input `object`
  * configNodeName **required** `string`

#### Output
*Output schema unknown*

### getQuery



```js
adobe_aem.getQuery({
  "path": "",
  "p.limit": 0,
  "1_property": "",
  "1_property.value": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * p.limit **required** `number`
  * 1_property **required** `string`
  * 1_property.value **required** `string`

#### Output
* output `string`

### postQuery



```js
adobe_aem.postQuery({
  "path": "",
  "p.limit": 0,
  "1_property": "",
  "1_property.value": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * p.limit **required** `number`
  * 1_property **required** `string`
  * 1_property.value **required** `string`

#### Output
* output `string`

### postSetPassword



```js
adobe_aem.postSetPassword({
  "old": "",
  "plain": "",
  "verify": ""
}, context)
```

#### Input
* input `object`
  * old **required** `string`
  * plain **required** `string`
  * verify **required** `string`

#### Output
* output `string`

### getInstallStatus



```js
adobe_aem.getInstallStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [InstallStatus](#installstatus)

### postPackageService



```js
adobe_aem.postPackageService({
  "cmd": ""
}, context)
```

#### Input
* input `object`
  * cmd **required** `string`

#### Output
* output `string`

### postPackageServiceJson



```js
adobe_aem.postPackageServiceJson({
  "path": "",
  "cmd": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * cmd **required** `string`
  * groupName `string`
  * packageName `string`
  * packageVersion `string`
  * _charset_ `string`
  * force `boolean`
  * recursive `boolean`
  * package `string`

#### Output
* output `string`

### getPackageManagerServlet



```js
adobe_aem.getPackageManagerServlet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### postPackageUpdate



```js
adobe_aem.postPackageUpdate({
  "groupName": "",
  "packageName": "",
  "version": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`
  * packageName **required** `string`
  * version **required** `string`
  * path **required** `string`
  * filter `string`
  * _charset_ `string`

#### Output
* output `string`

### getCrxdeStatus



```js
adobe_aem.getCrxdeStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### getPackage



```js
adobe_aem.getPackage({
  "group": "",
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`
  * name **required** `string`
  * version **required** `string`

#### Output
* output `string`

### getPackageFilter



```js
adobe_aem.getPackageFilter({
  "group": "",
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`
  * name **required** `string`
  * version **required** `string`

#### Output
* output `string`

### getAgents



```js
adobe_aem.getAgents({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`

#### Output
* output `string`

### deleteAgent



```js
adobe_aem.deleteAgent({
  "runmode": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### getAgent



```js
adobe_aem.getAgent({
  "runmode": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### postAgent



```js
adobe_aem.postAgent({
  "runmode": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * name **required** `string`
  * jcr:content/cq:distribute `boolean`
  * jcr:content/cq:distribute@TypeHint `string`
  * jcr:content/cq:name `string`
  * jcr:content/cq:template `string`
  * jcr:content/enabled `boolean`
  * jcr:content/jcr:description `string`
  * jcr:content/jcr:lastModified `string`
  * jcr:content/jcr:lastModifiedBy `string`
  * jcr:content/jcr:mixinTypes `string`
  * jcr:content/jcr:title `string`
  * jcr:content/logLevel `string`
  * jcr:content/noStatusUpdate `boolean`
  * jcr:content/noVersioning `boolean`
  * jcr:content/protocolConnectTimeout `number`
  * jcr:content/protocolHTTPConnectionClosed `boolean`
  * jcr:content/protocolHTTPExpired `string`
  * jcr:content/protocolHTTPHeaders `array`
  * jcr:content/protocolHTTPHeaders@TypeHint `string`
  * jcr:content/protocolHTTPMethod `string`
  * jcr:content/protocolHTTPSRelaxed `boolean`
  * jcr:content/protocolInterface `string`
  * jcr:content/protocolSocketTimeout `number`
  * jcr:content/protocolVersion `string`
  * jcr:content/proxyNTLMDomain `string`
  * jcr:content/proxyNTLMHost `string`
  * jcr:content/proxyHost `string`
  * jcr:content/proxyPassword `string`
  * jcr:content/proxyPort `number`
  * jcr:content/proxyUser `string`
  * jcr:content/queueBatchMaxSize `number`
  * jcr:content/queueBatchMode `string`
  * jcr:content/queueBatchWaitTime `number`
  * jcr:content/retryDelay `string`
  * jcr:content/reverseReplication `boolean`
  * jcr:content/serializationType `string`
  * jcr:content/sling:resourceType `string`
  * jcr:content/ssl `string`
  * jcr:content/transportNTLMDomain `string`
  * jcr:content/transportNTLMHost `string`
  * jcr:content/transportPassword `string`
  * jcr:content/transportUri `string`
  * jcr:content/transportUser `string`
  * jcr:content/triggerDistribute `boolean`
  * jcr:content/triggerModified `boolean`
  * jcr:content/triggerOnOffTime `boolean`
  * jcr:content/triggerReceive `boolean`
  * jcr:content/triggerSpecific `boolean`
  * jcr:content/userId `string`
  * jcr:primaryType `string`
  * :operation `string`

#### Output
*Output schema unknown*

### postTreeActivation



```js
adobe_aem.postTreeActivation({
  "ignoredeactivated": true,
  "onlymodified": true,
  "path": ""
}, context)
```

#### Input
* input `object`
  * ignoredeactivated **required** `boolean`
  * onlymodified **required** `boolean`
  * path **required** `string`

#### Output
*Output schema unknown*

### postTruststorePKCS12



```js
adobe_aem.postTruststorePKCS12({}, context)
```

#### Input
* input `object`
  * truststore.p12 `string`

#### Output
* output `string`

### getTruststore



```js
adobe_aem.getTruststore(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### getLoginPage



```js
adobe_aem.getLoginPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### postAuthorizables



```js
adobe_aem.postAuthorizables({
  "authorizableId": "",
  "intermediatePath": ""
}, context)
```

#### Input
* input `object`
  * authorizableId **required** `string`
  * intermediatePath **required** `string`
  * createUser `string`
  * createGroup `string`
  * rep:password `string`
  * profile/givenName `string`

#### Output
* output `string`

### sslSetup



```js
adobe_aem.sslSetup({
  "keystorePassword": "",
  "keystorePasswordConfirm": "",
  "truststorePassword": "",
  "truststorePasswordConfirm": "",
  "httpsHostname": "",
  "httpsPort": ""
}, context)
```

#### Input
* input `object`
  * keystorePassword **required** `string`
  * keystorePasswordConfirm **required** `string`
  * truststorePassword **required** `string`
  * truststorePasswordConfirm **required** `string`
  * httpsHostname **required** `string`
  * httpsPort **required** `string`
  * certificateFile `string`
  * privatekeyFile `string`

#### Output
* output `string`

### postTruststore



```js
adobe_aem.postTruststore({}, context)
```

#### Input
* input `object`
  * :operation `string`
  * newPassword `string`
  * rePassword `string`
  * keyStoreType `string`
  * removeAlias `string`
  * certificate `string`

#### Output
* output `string`

### getTruststoreInfo



```js
adobe_aem.getTruststoreInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TruststoreInfo](#truststoreinfo)

### postBundle



```js
adobe_aem.postBundle({
  "name": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * action **required** `string`

#### Output
*Output schema unknown*

### getConfigMgr



```js
adobe_aem.getConfigMgr(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### postSamlConfiguration



```js
adobe_aem.postSamlConfiguration({}, context)
```

#### Input
* input `object`
  * post `boolean`
  * apply `boolean`
  * delete `boolean`
  * action `string`
  * $location `string`
  * path `array`
  * service.ranking `integer`
  * idpUrl `string`
  * idpCertAlias `string`
  * idpHttpRedirect `boolean`
  * serviceProviderEntityId `string`
  * assertionConsumerServiceURL `string`
  * spPrivateKeyAlias `string`
  * keyStorePassword `string`
  * defaultRedirectUrl `string`
  * userIDAttribute `string`
  * useEncryption `boolean`
  * createUser `boolean`
  * addGroupMemberships `boolean`
  * groupMembershipAttribute `string`
  * defaultGroups `array`
  * nameIdFormat `string`
  * synchronizeAttributes `array`
  * handleLogout `boolean`
  * logoutUrl `string`
  * clockTolerance `integer`
  * digestMethod `string`
  * signatureMethod `string`
  * userIntermediatePath `string`
  * propertylist `array`

#### Output
* output [SamlConfigurationInfo](#samlconfigurationinfo)

### postJmxRepository



```js
adobe_aem.postJmxRepository({
  "action": ""
}, context)
```

#### Input
* input `object`
  * action **required** `string`

#### Output
*Output schema unknown*

### getAemProductInfo



```js
adobe_aem.getAemProductInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### getAemHealthCheck



```js
adobe_aem.getAemHealthCheck({}, context)
```

#### Input
* input `object`
  * tags `string`
  * combineTagsOr `boolean`

#### Output
* output `string`

### postAuthorizableKeystore



```js
adobe_aem.postAuthorizableKeystore({
  "intermediatePath": "",
  "authorizableId": ""
}, context)
```

#### Input
* input `object`
  * intermediatePath **required** `string`
  * authorizableId **required** `string`
  * :operation `string`
  * currentPassword `string`
  * newPassword `string`
  * rePassword `string`
  * keyPassword `string`
  * keyStorePass `string`
  * alias `string`
  * newAlias `string`
  * removeAlias `string`
  * cert-chain `string`
  * keyStore `string`
  * pk `string`

#### Output
* output [KeystoreInfo](#keystoreinfo)

### getAuthorizableKeystore



```js
adobe_aem.getAuthorizableKeystore({
  "intermediatePath": "",
  "authorizableId": ""
}, context)
```

#### Input
* input `object`
  * intermediatePath **required** `string`
  * authorizableId **required** `string`

#### Output
* output [KeystoreInfo](#keystoreinfo)

### getKeystore



```js
adobe_aem.getKeystore({
  "intermediatePath": "",
  "authorizableId": ""
}, context)
```

#### Input
* input `object`
  * intermediatePath **required** `string`
  * authorizableId **required** `string`

#### Output
* output `string`

### postPath



```js
adobe_aem.postPath({
  "path": "",
  "jcr:primaryType": "",
  ":name": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * jcr:primaryType **required** `string`
  * :name **required** `string`

#### Output
*Output schema unknown*

### deleteNode



```js
adobe_aem.deleteNode({
  "path": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### getNode



```js
adobe_aem.getNode({
  "path": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### postNode



```js
adobe_aem.postNode({
  "path": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * name **required** `string`
  * :operation `string`
  * deleteAuthorizable `string`
  * file `string`

#### Output
*Output schema unknown*

### postNodeRw



```js
adobe_aem.postNodeRw({
  "path": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`
  * name **required** `string`
  * addMembers `string`

#### Output
*Output schema unknown*



## Definitions

### InstallStatus
* InstallStatus `object`
  * status `object`
    * finished `boolean`
    * itemCount `integer`

### KeystoreChainItems
* KeystoreChainItems `object`
  * issuer `string`: e.g. "CN=Admin"
  * notAfter `string`: e.g. "Sun Jun 30 23:59:50 AEST 2019"
  * notBefore `string`: e.g. "Sun Jul 01 12:00:00 AEST 2018"
  * serialNumber `integer`: 18165099476682912368
  * subject `string`: e.g. "CN=localhost"

### KeystoreInfo
* KeystoreInfo `object`
  * aliases `array`
    * items [KeystoreItems](#keystoreitems)
  * exists `boolean`: False if truststore don't exist

### KeystoreItems
* KeystoreItems `object`
  * algorithm `string`: e.g. "RSA"
  * alias `string`: Keystore alias name
  * chain `array`
    * items [KeystoreChainItems](#keystorechainitems)
  * entryType `string`: e.g. "privateKey"
  * format `string`: e.g. "PKCS#8"

### SamlConfigurationInfo
* SamlConfigurationInfo `object`
  * bundle_location `string`: needed for configuration binding
  * description `string`: Title
  * pid `string`: Persistent Identity (PID)
  * properties [SamlConfigurationProperties](#samlconfigurationproperties)
  * service_location `string`: needed for configuraiton binding
  * title `string`: Title

### SamlConfigurationProperties
* SamlConfigurationProperties `object`
  * addGroupMemberships [SamlConfigurationPropertyItemsBoolean](#samlconfigurationpropertyitemsboolean)
  * assertionConsumerServiceURL [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * clockTolerance [SamlConfigurationPropertyItemsLong](#samlconfigurationpropertyitemslong)
  * createUser [SamlConfigurationPropertyItemsBoolean](#samlconfigurationpropertyitemsboolean)
  * defaultGroups [SamlConfigurationPropertyItemsArray](#samlconfigurationpropertyitemsarray)
  * defaultRedirectUrl [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * digestMethod [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * groupMembershipAttribute [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * handleLogout [SamlConfigurationPropertyItemsBoolean](#samlconfigurationpropertyitemsboolean)
  * idpCertAlias [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * idpHttpRedirect [SamlConfigurationPropertyItemsBoolean](#samlconfigurationpropertyitemsboolean)
  * idpUrl [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * keyStorePassword [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * logoutUrl [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * nameIdFormat [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * path [SamlConfigurationPropertyItemsArray](#samlconfigurationpropertyitemsarray)
  * service.ranking [SamlConfigurationPropertyItemsLong](#samlconfigurationpropertyitemslong)
  * serviceProviderEntityId [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * signatureMethod [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * spPrivateKeyAlias [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * synchronizeAttributes [SamlConfigurationPropertyItemsArray](#samlconfigurationpropertyitemsarray)
  * useEncryption [SamlConfigurationPropertyItemsBoolean](#samlconfigurationpropertyitemsboolean)
  * userIDAttribute [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)
  * userIntermediatePath [SamlConfigurationPropertyItemsString](#samlconfigurationpropertyitemsstring)

### SamlConfigurationPropertyItemsArray
* SamlConfigurationPropertyItemsArray `object`
  * description `string`: Property description
  * is_set `boolean`: True if property is set
  * name `string`: property name
  * optional `boolean`: True if optional
  * type `integer`: Property type, 1=String, 3=long, 11=boolean, 12=Password
  * values `array`: Property value
    * items `string`

### SamlConfigurationPropertyItemsBoolean
* SamlConfigurationPropertyItemsBoolean `object`
  * description `string`: Property description
  * is_set `boolean`: True if property is set
  * name `string`: property name
  * optional `boolean`: True if optional
  * type `integer`: Property type, 1=String, 3=long, 11=boolean, 12=Password
  * value `boolean`: Property value

### SamlConfigurationPropertyItemsLong
* SamlConfigurationPropertyItemsLong `object`
  * description `string`: Property description
  * is_set `boolean`: True if property is set
  * name `string`: property name
  * optional `boolean`: True if optional
  * type `integer`: Property type, 1=String, 3=long, 11=boolean, 12=Password
  * value `integer`: Property value

### SamlConfigurationPropertyItemsString
* SamlConfigurationPropertyItemsString `object`
  * description `string`: Property description
  * is_set `boolean`: True if property is set
  * name `string`: property name
  * optional `boolean`: True if optional
  * type `integer`: Property type, 1=String, 3=long, 11=boolean, 12=Password
  * value `string`: Property value

### TruststoreInfo
* TruststoreInfo `object`
  * aliases `array`
    * items [TruststoreItems](#truststoreitems)
  * exists `boolean`: False if truststore don't exist

### TruststoreItems
* TruststoreItems `object`
  * alias `string`: Truststore alias name
  * entryType `string`
  * issuer `string`: e.g. "CN=Admin"
  * notAfter `string`: e.g. "Sun Jun 30 23:59:50 AEST 2019"
  * notBefore `string`: e.g. "Sun Jul 01 12:00:00 AEST 2018"
  * serialNumber `integer`: 18165099476682912368
  * subject `string`: e.g. "CN=localhost"


