# @datafire/cisco

Client library for Cisco PSIRT openVuln

## Installation and Usage
```bash
npm install --save datafire @datafire/cisco
```

```js
let datafire = require('datafire');
let cisco = require('@datafire/cisco').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

cisco.security.advisories.cvrf.advisory.advisory_id.get({}).then(data => {
  console.log(data);
})
```

## Description
The Cisco Product Security Incident Response Team (PSIRT) openVuln API is a RESTful API that allows customers to obtain Cisco Security Vulnerability information in different machine-consumable formats. APIs are important for customers because they allow their technical staff and programmers to build tools that help them do their job more effectively (in this case, to keep up with security vulnerability information).
For more information about the Cisco PSIRT openVuln API visit https://developer.cisco.com/site/PSIRT/discover/overview

For detail steps on how to use the API go to:https://developer.cisco.com/site/PSIRT/get-started/getting-started.gsp

This is a beta release of a swagger YAML for the Cisco PSIRT openVuln API

To access the API sign in with your Cisco CCO account at http://apiconsole.cisco.com and register an application
to recieve a client_id and a client_secret

You can then get your token using curl or any other method you prefer.

'curl -s -k -H "Content-Type: application/x-www-form-urlencoded" -X POST -d "client_id=<your_client_id>" -d "client_secret=<your_client_secret>" -d "grant_type=client_credentials" https://cloudsso.cisco.com/as/token.oauth2'

You will receive an access token as demonstrated in the following example:
 '{"access_token":"I7omWtBDAieSiUX3shOxNJfuy4J6","token_type":"Bearer","expires_in":3599}'

In Swagger, click on Change Authentication

enter the text "I7omWtBDAieSiUX3shOxNJfuy4J6" (which is the token you received)

then click on "Try this operation"


## Actions
### security.advisories.cvrf.advisory.advisory_id.get
Used to obtain an advisory in CVRF format for a given advisory ID `advisory_id` (i.e., cisco-sa-20150819-pcp)



```js
cisco.security.advisories.cvrf.advisory.advisory_id.get({
  "advisory_id": ""
}, context)
```

#### Parameters
* advisory_id (string) **required** - advisory ID

### security.advisories.cvrf.all.get
Used to obtain all advisories in Common Vulnerability Reporting Format (CVRF). For more information about CVRF go to https://communities.cisco.com/docs/DOC-63156 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/cvrf/all.xml



```js
cisco.security.advisories.cvrf.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### security.advisories.cvrf.cve.cve_id.get
Used to obtain an advisory in CVRF format for a given Common Vulnerability Enumerator (CVE). The `cve_id` format is CVE-YYYY-NNNN. For more information about CVE visit http://cve.mitre.org/



```js
cisco.security.advisories.cvrf.cve.cve_id.get({
  "cve_id": ""
}, context)
```

#### Parameters
* cve_id (string) **required** - CVE Identifier (i.e., CVE-YYYY-NNNN)

### security.advisories.cvrf.latest.number.get
Used to obtain all the latest security advisories in CVRF format given an absolute number. For instance, the latest 10 or latest 5.



```js
cisco.security.advisories.cvrf.latest.number.get({
  "number": 0
}, context)
```

#### Parameters
* number (integer) **required** - An absolute number to obtain the latest security advisories.

### security.advisories.cvrf.product.get
Used to obtain all the advisories that affects the given product name.



```js
cisco.security.advisories.cvrf.product.get({
  "product": ""
}, context)
```

#### Parameters
* product (string) **required** - An product name to obtain security advisories that matches given product name.

### security.advisories.cvrf.severity.severity.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format.



```js
cisco.security.advisories.cvrf.severity.severity.get({
  "severity": ""
}, context)
```

#### Parameters
* severity (string) **required** - Critical, High, Medium, Low

### security.advisories.cvrf.severity.severity.firstpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format and additionally filter based of firstpublished start date and enddate



```js
cisco.security.advisories.cvrf.severity.severity.firstpublished.get({
  "severity": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* severity (string) **required** - Used to obtain all advisories that have a security impact rating of critical
* startDate (string) **required**
* endDate (string) **required**

### security.advisories.cvrf.severity.severity.lastpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format.



```js
cisco.security.advisories.cvrf.severity.severity.lastpublished.get({
  "severity": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* severity (string) **required** - Used to obtain all advisories that have a security impact rating of critical
* startDate (string) **required**
* endDate (string) **required**

### security.advisories.cvrf.year.year.get
Used to obtain all security advisories that have were orginally published in a specific year `YYYY`.



```js
cisco.security.advisories.cvrf.year.year.get({
  "year": ""
}, context)
```

#### Parameters
* year (string) **required** - The four digit year.

### security.advisories.ios.get
Used to obtain all advisories that affects the given ios version



```js
cisco.security.advisories.ios.get({
  "version": ""
}, context)
```

#### Parameters
* version (string) **required** - IOS version to obtain security advisories

### security.advisories.iosxe.get
Used to obtain all advisories that affects the given ios version



```js
cisco.security.advisories.iosxe.get({
  "version": ""
}, context)
```

#### Parameters
* version (string) **required** - IOS version to obtain security advisories

### security.advisories.oval.advisory.advisory_id.get
Used to obtain OVAL definitions for a given advisory ID `advisory_id` (i.e., cisco-sa-20150819-pcp)



```js
cisco.security.advisories.oval.advisory.advisory_id.get({
  "advisory_id": ""
}, context)
```

#### Parameters
* advisory_id (string) **required** - advisory ID

### security.advisories.oval.all.get
Used to obtain all Open Vulnerability and Assessment Language (OVAL) definitions available for Cisco security vulnerabilities. For more information about OVAL go to https://communities.cisco.com/docs/DOC-63158 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/oval/all.xml



```js
cisco.security.advisories.oval.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### security.advisories.oval.cve.cve_id.get
Used to obtain OVAL definitions for a given CVE Identifier. The `cve_id` format is CVE-YYYY-NNNN.



```js
cisco.security.advisories.oval.cve.cve_id.get({
  "cve_id": ""
}, context)
```

#### Parameters
* cve_id (string) **required** - CVE Identifier (i.e., CVE-YYYY-NNNN)

### security.advisories.oval.latest.number.get
Used to obtain all the latest OVAL definitions given an absolute number. For instance, the latest 10 or latest 5.



```js
cisco.security.advisories.oval.latest.number.get({
  "number": 0
}, context)
```

#### Parameters
* number (integer) **required** - The latest OVAL definitions (absolute number).

### security.advisories.oval.product.get
Used to obtain all the oval advisories that affects the given product name.



```js
cisco.security.advisories.oval.product.get({
  "product": ""
}, context)
```

#### Parameters
* product (string) **required** - An product name to obtain security advisories that matches given product name.

### security.advisories.oval.severity.severity.get
Used to obtain all OVAL definitions for a given security impact rating (critical, high, medium, or low).



```js
cisco.security.advisories.oval.severity.severity.get({
  "severity": ""
}, context)
```

#### Parameters
* severity (string) **required** - Used to obtain all OVAL definitions for advisories that have a security impact rating of critical

### security.advisories.oval.severity.severity.firstpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format.



```js
cisco.security.advisories.oval.severity.severity.firstpublished.get({
  "severity": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* severity (string) **required** - Critical, High, Medium, Low
* startDate (string) **required**
* endDate (string) **required**

### security.advisories.oval.severity.severity.lastpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format.



```js
cisco.security.advisories.oval.severity.severity.lastpublished.get({
  "severity": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* severity (string) **required** - Critical, High, Medium, Low
* startDate (string) **required**
* endDate (string) **required**

