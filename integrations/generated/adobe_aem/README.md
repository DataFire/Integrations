# @datafire/adobe_aem

Client library for Adobe Experience Manager (AEM)

## Installation and Usage
```bash
npm install --save @datafire/adobe_aem
```
```js
let adobe_aem = require('@datafire/adobe_aem').create({
  username: "",
  password: ""
});

adobe_aem.getAemHealthCheck({}).then(data => {
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

### postConfigAemPasswordReset



```js
adobe_aem.postConfigAemPasswordReset({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * pwdreset.authorizables `array`
  * pwdreset.authorizables@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigAemHealthCheckServlet



```js
adobe_aem.postConfigAemHealthCheckServlet({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * bundles.ignored `array`
  * bundles.ignored@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheFelixJettyBasedHttpService



```js
adobe_aem.postConfigApacheFelixJettyBasedHttpService({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
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

### postConfigApacheSlingDavExServlet



```js
adobe_aem.postConfigApacheSlingDavExServlet({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * alias `string`
  * alias@TypeHint `string`
  * dav.create-absolute-uri `boolean`
  * dav.create-absolute-uri@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheSlingReferrerFilter



```js
adobe_aem.postConfigApacheSlingReferrerFilter({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
  * allow.empty `boolean`
  * allow.empty@TypeHint `string`
  * allow.hosts `string`
  * allow.hosts@TypeHint `string`
  * allow.hosts.regexp `string`
  * allow.hosts.regexp@TypeHint `string`

#### Output
*Output schema unknown*

### postConfigApacheSlingGetServlet



```js
adobe_aem.postConfigApacheSlingGetServlet({
  "runmode": ""
}, context)
```

#### Input
* input `object`
  * runmode **required** `string`
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
* output `file`

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


