# @datafire/cisco
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


## Operation: security.advisories.cvrf.advisory.advisory_id.get
Used to obtain an advisory in CVRF format for a given advisory ID `advisory_id` (i.e., cisco-sa-20150819-pcp)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "advisory_id": {
      "type": "string",
      "format": "cisco-sa-XXX",
      "description": "advisory ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "advisory_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.all.get
Used to obtain all advisories in Common Vulnerability Reporting Format (CVRF). For more information about CVRF go to https://communities.cisco.com/docs/DOC-63156 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/cvrf/all.xml


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.cve.cve_id.get
Used to obtain an advisory in CVRF format for a given Common Vulnerability Enumerator (CVE). The `cve_id` format is CVE-YYYY-NNNN. For more information about CVE visit http://cve.mitre.org/


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cve_id": {
      "type": "string",
      "format": "CVE-YYYY-NNNN",
      "description": "CVE Identifier (i.e., CVE-YYYY-NNNN)"
    }
  },
  "additionalProperties": false,
  "required": [
    "cve_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.latest.number.get
Used to obtain all the latest security advisories in CVRF format given an absolute number. For instance, the latest 10 or latest 5.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "number": {
      "type": "integer",
      "format": "number",
      "description": "An absolute number to obtain the latest security advisories."
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.product.get
Used to obtain all the advisories that affects the given product name.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product": {
      "type": "string",
      "format": "string",
      "description": "An product name to obtain security advisories that matches given product name."
    }
  },
  "additionalProperties": false,
  "required": [
    "product"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.severity.severity.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Critical, High, Medium, Low",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "severity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.severity.severity.firstpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format and additionally filter based of firstpublished start date and enddate


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Used to obtain all advisories that have a security impact rating of critical",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date"
    },
    "endDate": {
      "type": "string",
      "format": "date"
    }
  },
  "additionalProperties": false,
  "required": [
    "severity",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.severity.severity.lastpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Used to obtain all advisories that have a security impact rating of critical",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date"
    },
    "endDate": {
      "type": "string",
      "format": "date"
    }
  },
  "additionalProperties": false,
  "required": [
    "severity",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.cvrf.year.year.get
Used to obtain all security advisories that have were orginally published in a specific year `YYYY`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "year": {
      "type": "string",
      "format": "YYYY",
      "description": "The four digit year."
    }
  },
  "additionalProperties": false,
  "required": [
    "year"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.ios.get
Used to obtain all advisories that affects the given ios version


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "format": "string",
      "description": "IOS version to obtain security advisories"
    }
  },
  "additionalProperties": false,
  "required": [
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.iosxe.get
Used to obtain all advisories that affects the given ios version


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "format": "string",
      "description": "IOS version to obtain security advisories"
    }
  },
  "additionalProperties": false,
  "required": [
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.advisory.advisory_id.get
Used to obtain OVAL definitions for a given advisory ID `advisory_id` (i.e., cisco-sa-20150819-pcp)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "advisory_id": {
      "type": "string",
      "format": "cisco-sa-XXX",
      "description": "advisory ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "advisory_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.all.get
Used to obtain all Open Vulnerability and Assessment Language (OVAL) definitions available for Cisco security vulnerabilities. For more information about OVAL go to https://communities.cisco.com/docs/DOC-63158 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/oval/all.xml


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.cve.cve_id.get
Used to obtain OVAL definitions for a given CVE Identifier. The `cve_id` format is CVE-YYYY-NNNN.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cve_id": {
      "type": "string",
      "format": "CVE-YYYY-NNNN",
      "description": "CVE Identifier (i.e., CVE-YYYY-NNNN)"
    }
  },
  "additionalProperties": false,
  "required": [
    "cve_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.latest.number.get
Used to obtain all the latest OVAL definitions given an absolute number. For instance, the latest 10 or latest 5.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "number": {
      "type": "integer",
      "format": "number",
      "description": "The latest OVAL definitions (absolute number)."
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.product.get
Used to obtain all the oval advisories that affects the given product name.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product": {
      "type": "string",
      "format": "string",
      "description": "An product name to obtain security advisories that matches given product name."
    }
  },
  "additionalProperties": false,
  "required": [
    "product"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.severity.severity.get
Used to obtain all OVAL definitions for a given security impact rating (critical, high, medium, or low).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Used to obtain all OVAL definitions for advisories that have a security impact rating of critical",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "severity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.severity.severity.firstpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Critical, High, Medium, Low",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date"
    },
    "endDate": {
      "type": "string",
      "format": "date"
    }
  },
  "additionalProperties": false,
  "required": [
    "severity",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: security.advisories.oval.severity.severity.lastpublished.get
Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "format": "enum",
      "description": "Critical, High, Medium, Low",
      "enum": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date"
    },
    "endDate": {
      "type": "string",
      "format": "date"
    }
  },
  "additionalProperties": false,
  "required": [
    "severity",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{}
```
