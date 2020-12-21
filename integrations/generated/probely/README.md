# @datafire/probely

Client library for Probely Developers

## Installation and Usage
```bash
npm install --save @datafire/probely
```
```js
let probely = require('@datafire/probely').create({
  jwtAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Probely is a Web Vulnerability Scanning suite for Agile Teams. It provides
continuous scanning of your Web Applications and lets you efficiently
manage the lifecycle of the vulnerabilities found, in a sleek and
intuitive ~~web interface~~ API.

## Quick-Start

### Authentication

To use the API, you first need to create a token (API Key).
To create a token, select a target from the drop-down list, go to the
"Settings" page, and click on the "Integrations" tab.

Write a name for the API Key. For example, if you want to use the API Key
for travis,
you could name it "travis". In this example, we chose "**example.com_key**"

![Creating API key][1]

  [1]: assets/qs/create_api_key_1.png



The API key was created successfully:

![API key created][2]

  [2]: assets/qs/create_api_key_2.png


On every request, you need to pass this token in the authorization header,
like this:


```yaml
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJBRlNJQlp
3elFsMDEiLCJ1c2VybmFtZSI6IkNIZ2tkSUROdzV0NSJ9.90UwiPGS2hlvgOLktFU0LfKuatNKm
mEP79u17VnqT9M
```


**WARNING: Treat this token as a password. With this token, you have the
power to fully manage the target.**

In the following examples, the token will be named as *PROBELY_AUTH_TOKEN*.


### Scan target

First let's view our target list:

```bash
curl https://api.probely.com/targets/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


From the results, we need the **target id**:

```json
{
   "count":1,
   "page_total":1,
   "page":1,
   "length":10,
   "results":[
      {
         "id":"AxtkqTE0v3E-",
         "name":"test-site",
         "desc":"",
         "url":"https://test-site.example.com",
         "settings":
            "(...)"
         ,
         "stack":
            "(...)"
         ,
         "verified":true,
         "(...)": "(...)"
      }
   ]
}
```


Now we can send a request to start a scan on target id **AxtkqTE0v3E-**

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scan_now/ \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


And we get a response saying that the scan is scheduled: the status is **queued**, and we've got a **scan id**:

```json
{
   "changed":"2017-08-01T13:37:00.843339Z",
   "started":null,
   "completed":null,
   "mediums":0,
   "changed_by":
    "(...)"
   ,
   "highs":0,
   "status":"queued",
   "id":"S6dOMPn0SnoH",
   "created_by":
    "(...)"
   ,
   "target":
    "(...)"
   ,
   "created":"2017-08-01T13:37:00.843339Z",
   "lows":0
}
```


Using the scan id **S6dOMPn0SnoH**, we can pool the scan status:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


And we get a response saying that the scan status is now **started**:

```json
{
   "id":"S6dOMPn0SnoH",
   "changed":"2017-08-01T13:38:12.623650Z",
   "started":null,
   "completed":null,
   "mediums":0,
   "changed_by":
    "(...)"
   ,
   "highs":0,
   "status":"started",
   "created_by":
    "(...)"
   ,
   "target":
    "(...)"
   ,
   "created":"2017-08-01T13:37:00.843339Z",
   "lows":0
}
```


The possible statuses are:

| Status | Name | Description |
| ------ | ---- | ----------- |
| queued | Queued | The scan is queued to start |
| started | Started | The scan is currently running |
| under_review | Under Review | The scan is complete but has some findings under review |
| completed | Completed | The scan is complete |
| completed_with_errors | Completed with errors | The scan is complete even after getting some error(s) |
| failed | Failed | The scan failed |
| canceled | Canceled | The scan was canceled |
| canceling | Canceling | The scan is being canceled |


During the scan, the keys "lows", "mediums", and "highs" will be updated
with the findings, as they are being found.

After we get either the status **completed** or **completed_with_errors**,
we can view the findings.


### Get vulnerabilities

Using the previous scan id **S6dOMPn0SnoH**, we can get the scan results:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```

We get a response saying that the scan status is now **completed**, and
that **45** vulnerabilities were found. **14** low, **11** medium and
**20** high:

```json
{
   "id":"S6dOMPn0SnoH",
   "target":
    "(...)"
   ,
   "status":"completed",
   "started":"2017-08-01T13:37:12.623650Z",
   "completed":"2017-08-01T14:17:48.559514Z",
   "lows":14,
   "mediums":11,
   "highs":20,
   "created":"2017-08-01T13:37:00.843339Z",
   "created_by":
    "(...)"
   ,
   "changed":"2017-08-01T14:17:48.559514Z",
   "changed_by":
    "(...)"
}
```

You can now view the results of this scan, or the target findings.


Let's start with the scan results:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/?scan=S6dOMPn0SnoH&page=1 \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```

```json
{
   "count":45,
   "page_total":5,
   "page":1,
   "length":10,
   "results":[
      {
         "id":79,
         "target":
          "(...)"
         ,
         "scans":
          "(...)"
         ,
         "labels":
          "(...)"
         ,
         "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
         "requests":[
            {
               "request":"(...)",
               "response":"(...)"
            },
            {
               "request":"(...)",
               "response":"(...)"
            }
         ],
         "evidence":null,
         "extra":"",
         "definition":{
            "id":"xnV8PJVmSoLS",
            "name":"SQL Injection",
            "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
         },
         "url":"http://test-site.example.com/login.php",
         "path":"login.php",
         "method":"post",
         "parameter":"username",
         "value":"",
         "params":{
            "username":[
               "probely'"
            ],
            "password":[
               "probely"
            ]
         },
         "reporter":
          "(...)"
         ,
         "assignee":null,
         "state":"notfixed",
         "severity":30,
         "last_found":"2017-08-01T14:03:56.207794Z",
         "changed":"2017-08-01T14:03:56.207794Z",
         "changed_by":
          "(...)"
         ,
         "comment":""
      },
      "(...)"
   ]
}
```

You can also view all the target findings, which will show all the findings
that are not yet fixed. \\
The structure is similar to the previous result.

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


### Get vulnerability details

You can also get details for a particular finding in a target. \\
In this example we will get the details for the same finding as in the previous
section:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/79/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


This will result on the same information, but just for this particular finding:

```json
{
   "id":79,
   "target":
    "(...)"
   ,
   "scans":
    "(...)"
   ,
   "labels":
    "(...)"
   ,
   "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
   "requests":[
      {
         "request":"(...)",
         "response":"(...)"
      },
      {
         "request":"(...)",
         "response":"(...)"
      }
   ],
   "evidence":null,
   "extra":"",
   "definition":{
      "id":"xnV8PJVmSoLS",
      "name":"SQL Injection",
      "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
   },
   "url":"http://test-site.example.com/login.php",
   "path":"login.php",
   "method":"post",
   "parameter":"username",
   "value":"",
   "params":{
      "username":[
         "probely'"
      ],
      "password":[
         "probely"
      ]
   },
   "reporter":
    "(...)"
   ,
   "assignee":null,
   "state":"notfixed",
   "severity":30,
   "last_found":"2017-08-01T14:03:56.207794Z",
   "changed":"2017-08-01T14:03:56.207794Z",
   "changed_by":
    "(...)"
   ,
   "comment":""
}
```

## Concepts

The short version is that you run *scans* on *targets*, and *findings* are
created for any issue that is found.
However, there are a few more concepts that must be explained in order to
get a complete picture of how Probely works.
We will spend the next few sections detailing the most important concepts.


### Target

A *target* defines the scope of a scan, what will and won't be included
in the scan plan.
This is done by filling a *target*'s *site* and *assets*.

The entry point for the web application (and authentication) is setup
in the *target*'s *site*.

In modern web applications, you are probably loading resources from
multiple domains.
A single page app, for example, will usualy load the page from one domain
and make AJAX requests to another.
This is what *assets* are for: they specify what domains our scanner should
follow and create requests for.


### Site
A URL is probably not the only thing you will need to setup when scannning your application.
Does the application have an authenticated area? Does it use basic auth?
Does it expect a certain cookie or header?
These parameters are all configured in the *target*'s *site*.


We need to ensure that only allowed web applications are scanned.
Therefore, we must verify that you have control of any site you wish to include.
This can be done by:
  * Placing a file on a well-known location, on the site's server;
  * Creating specific DNS records.


### Asset

An *asset* is very similar to a *site*. The difference is that it is a domain instead
of a URL. Additionally, an *asset* has no login or basic auth support.
You can still have custom cookies and headers per *asset*.

As with the *site*, you will need to prove an *asset*'s ownership. We have added some
rules to make your life easier, if you already have verified
a *site* and the domains match, the validation is fast-tracked.

### Scans

This is what you're here for.
After configuring your *target*, you will want to run *scans* against it.
You can either start a one off scan, or schedule one for later - recurring
or not.

During the *scan*, we will spider and run several modules to check for
security issues, which we call *findings*.
You can check the *findings* even before a scan ends.
If everything goes well, the scan will complete and that is it.

With some *findings*, our automated processes may have difficulties
determining if it is a false positive or a legitimate issue.
In these instances, a scan will be marked as under review, and we will
further analyze the finding before making a decision.
We will only show findings that, for some degree of confidence, are true
positives.
A finding that we are not sure of will never be displayed.

As much as we try to prevent it, a *scan* (or a sub-module) can malfunction.
If this happens, a *scan* is marked as:
  * "failed": the problem was irrecoverable;
  * "completed with errors": some module failed but the scan itself completed.

During a scan, we try to determine what *frameworks* you are using
and add this information to the *site* and *asset* objects discussed
previously.


### Findings

The last core concept is the *finding*, this is a security issue that
we have found during our scans.
If the same issue is found in a new scan it will not open a new finding but
update the previous.

A *finding* will have a lot of information about the issue.
Namely, where it was found, URL, insertion point (e.g. cookie), parameter,
and method.
Evidence we gathered, and the full request and response that we used.
Sugestions of how to go about fixing it.
A full description of the vulnerability is also present in the
*definition* property.
We also assign a severity and calculate the CVSS score for each.

Besides all this, there are also actions that you can perform on a *finding*.
You can assign it to one user, leave comments for your team or add labels,
and reduce or increase the severity.

If you don't plan on fixing the *finding* and accept the risk, or you think
we reported a false positive, you can mark the finding to reflect that.


## Actions

### account.get
Retrieve account information


```js
probely.account.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### auth.obtain.post
The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.



```js
probely.auth.obtain.post({
  "body": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Login](#login)

#### Output
* output `object`
  * token [token](#token)
  * ttl [ttl](#ttl)

### auth.refresh.post
Replace token with a new one


```js
probely.auth.refresh.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * token [tokenBody](#tokenbody)

#### Output
* output `object`
  * token [token](#token)
  * ttl [ttl](#ttl)

### auth.revoke.post
Revoke a token


```js
probely.auth.revoke.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * token [tokenBody](#tokenbody)

#### Output
* output `object`
  * token [token](#token)
  * ttl [ttl](#ttl)

### auth.verify.post
Check for the validity of a user token.



```js
probely.auth.verify.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * token [tokenBody](#tokenbody)

#### Output
* output `object`
  * token [token](#token)
  * ttl [ttl](#ttl)

### billing.get
Retrieve billing information


```js
probely.billing.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Billing](#billing)

### billing.patch
Partial update billing information


```js
probely.billing.patch({
  "body": {
    "country": "",
    "vat_number": "",
    "first_name": "",
    "last_name": "",
    "city": "",
    "address": "",
    "zip": "",
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Billing](#billing)

#### Output
* output [Billing](#billing)

### billing.put
Update billing information


```js
probely.billing.put({
  "body": {
    "country": "",
    "vat_number": "",
    "first_name": "",
    "last_name": "",
    "city": "",
    "address": "",
    "zip": "",
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Billing](#billing)

#### Output
* output [Billing](#billing)

### billing.actions.post
Action that should be taken to enable the selected targets


```js
probely.billing.actions.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [targetIds](#targetids)

#### Output
* output [Action](#action)

### billing.estimate.post
Estimate costs of updating a subscription


```js
probely.billing.estimate.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Subscription](#subscription)

#### Output
* output [Invoice](#invoice)

### billing.subscribe.post
Update a subscription


```js
probely.billing.subscribe.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Subscription](#subscription)

#### Output
* output [Invoice](#invoice)

### check.post
Check validity of password reset token


```js
probely.check.post({
  "body": {
    "token": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * token **required** [emailToken](#emailtoken)

#### Output
* output `object`
  * message `string`: Message

### events.get
List account events


```js
probely.events.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Event objects
    * items [Event](#event)

### events.id.get
Retrieve account event


```js
probely.events.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [Event](#event)

### frameworks.get
List frameworks


```js
probely.frameworks.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Framework objects
    * items [Framework](#framework)

### frameworks.id.get
Retrieve framework


```js
probely.frameworks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [Framework](#framework)

### integrations.get
Integrations available and installed in the account


```js
probely.integrations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Integrations](#integrations)

### integrations.jira_cloud.projects.get
List Jira Projects


```js
probely.integrations.jira_cloud.projects.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [JiraProject](#jiraproject)

### integrations.jira_cloud.projects.project_id.issue_types.get
Retrieve project issue types


```js
probely.integrations.jira_cloud.projects.project_id.issue_types.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id

#### Output
* output `array`
  * items [JiraIssueType](#jiraissuetype)

### integrations.jira_cloud.projects.project_id.issue_types.issue_type_id.priorities.get
Retrieve issue priorities


```js
probely.integrations.jira_cloud.projects.project_id.issue_types.issue_type_id.priorities.get({
  "project_id": "",
  "issue_type_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id
  * issue_type_id **required** `string`: Jira issue type id

#### Output
* output `array`
  * items [JiraIssuePriority](#jiraissuepriority)

### integrations.jira_cloud.projects.project_id.issue_types.issue_type_id.status.get
Retrieve issue statuses


```js
probely.integrations.jira_cloud.projects.project_id.issue_types.issue_type_id.status.get({
  "project_id": "",
  "issue_type_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id
  * issue_type_id **required** `string`: Jira issue type id

#### Output
* output `array`
  * items [JiraIssueStatus](#jiraissuestatus)

### integrations.jira_server.projects.get
List Jira Projects


```js
probely.integrations.jira_server.projects.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [JiraProject](#jiraproject)

### integrations.jira_server.projects.project_id.issue_types.get
Retrieve project issue types


```js
probely.integrations.jira_server.projects.project_id.issue_types.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id

#### Output
* output `array`
  * items [JiraIssueType](#jiraissuetype)

### integrations.jira_server.projects.project_id.issue_types.issue_type_id.priorities.get
Retrieve issue priorities


```js
probely.integrations.jira_server.projects.project_id.issue_types.issue_type_id.priorities.get({
  "project_id": "",
  "issue_type_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id
  * issue_type_id **required** `string`: Jira issue type id

#### Output
* output `array`
  * items [JiraIssuePriority](#jiraissuepriority)

### integrations.jira_server.projects.project_id.issue_types.issue_type_id.status.get
Retrieve issue statuses


```js
probely.integrations.jira_server.projects.project_id.issue_types.issue_type_id.status.get({
  "project_id": "",
  "issue_type_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Jira Project Id
  * issue_type_id **required** `string`: Jira issue type id

#### Output
* output `array`
  * items [JiraIssueStatus](#jiraissuestatus)

### keys.get
List API keys allowed to operate on account


```js
probely.keys.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: API key objects
    * items [Key](#key)

### keys.post
Create account API key


```js
probely.keys.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [APIKey](#apikey)

#### Output
* output [APIKey](#apikey)

### keys.id.delete
Delete account API key


```js
probely.keys.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### keys.id.get
Retrieve account API key


```js
probely.keys.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [APIKey](#apikey)

### labels.get
List labels


```js
probely.labels.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: label objects.
    * items [Label](#label)

### labels.post
Create label


```js
probely.labels.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### labels.id.delete
Delete label


```js
probely.labels.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### labels.id.get
Retrieve framework


```js
probely.labels.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [Label](#label)

### labels.id.patch
Partial update


```js
probely.labels.id.patch({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### labels.id.put
Update label


```js
probely.labels.id.put({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### plans.get
Subscription plans


```js
probely.plans.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Plan](#plan)

### profile.get
User data


```js
probely.profile.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output [User](#user)

### profile.change_password.post
Our password policy requires a minimum password length of 10 chars with
at least one symbol or number.



```js
probely.profile.change_password.post({
  "body": {
    "current_password": null,
    "password": null,
    "confpassword": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * confpassword **required**
    * current_password **required**
    * password **required**

#### Output
* output `object`
  * message `string`: Message

### reset.post
Send reset password email


```js
probely.reset.post({
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * email **required** [username](#username)

#### Output
* output `object`
  * message `string`: Message

### setpassword.post
Reset password after asking for a reset (with the token sent by email).



```js
probely.setpassword.post({
  "body": {
    "token": "",
    "password": null,
    "confpassword": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * confpassword **required**
    * password **required**
    * token **required** [emailToken](#emailtoken)

#### Output
* output `object`
  * message `string`: Message

### target_actions.post
Available actions for the selected targets


```js
probely.target_actions.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [targetIds](#targetids)

#### Output
* output [Actions](#actions)

### targets.get
List targets


```js
probely.targets.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * pagination_count [paginationCount](#paginationcount)
  * results `array`: Target objects
    * items [Target](#target)

### targets.post
Create target


```js
probely.targets.post({}, context)
```

#### Input
* input `object`
  * body [Target](#target)

#### Output
* output [Target](#target)

### targets.activate.post
Activate targets


```js
probely.targets.activate.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [targetIds](#targetids)

#### Output
* output [targetIds](#targetids)

### targets.all.average_fix_time.get
Average fix time graph data (all targets)


```js
probely.targets.all.average_fix_time.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * results `object`
    * high `integer`: Average fix time in seconds for high severity findings
    * low `integer`: Average fix time in seconds for low severity findings
    * medium `integer`: Average fix time in seconds for medium severity findings

### targets.all.needs_attention_pie.get
Targets with open vulnerabilities pie chart data


```js
probely.targets.all.needs_attention_pie.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * 0 `object`: These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
    * 0 `string`: needing attention
    * 1 `integer`: Number of targets
    * 2 `string`: needs_atention
  * 1 `object`: These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
    * 0 `string`: no issues found
    * 1 `integer`: Number of targets
    * 2 `string`: no_issues_found

### targets.all.needs_attention_top.get
Targets with open vulnerabilities


```js
probely.targets.all.needs_attention_top.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * highs `integer`: Number of high severity findings
    * id `string`: Target id
    * lows `integer`: Number of low severity findings
    * mediums `integer`: Number of medium severity findings
    * name `string`: Name
    * url `string`: Target's site URL

### targets.all.risk_trend.get
Risk trend graph data (all targets)


```js
probely.targets.all.risk_trend.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * 0 `string`: Date time
    * 1 `integer`: Risk score

### targets.all.scans.get
List scans for all targets


```js
probely.targets.all.scans.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term
  * started `array`: Filter by scan start dates
  * status `string` (values: queued, started, under_review, completed, completed_with_errors, failed, canceled, canceling): Filter by scan statuses

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Scan objects
    * items [Scan](#scan)

### targets.all.scheduledscans.expanded.get
List scheduled scans for all targets expanding recurrence


```js
probely.targets.all.scheduledscans.expanded.get({}, context)
```

#### Input
* input `object`
  * length `integer`: Number of results to return per page

#### Output
* output `object`
  * results `array`: Scheduled scan objects
    * items [Scheduled](#scheduled)

### targets.all.severity_trend.get
Severity trend graph data (all targets)


```js
probely.targets.all.severity_trend.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * results `object`
    * high `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
    * low `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
    * medium `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
  * step `number`

### targets.all.top_vulns.get
Top 5 vulnerabilities (all targets).


```js
probely.targets.all.top_vulns.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * 0 `string`: Vulnerability name
    * 1 `string`: Vulnerability count

### targets.archive.post
Archive targets


```js
probely.targets.archive.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [targetIds](#targetids)

#### Output
* output [targetIds](#targetids)

### targets.archived.post
List archived targets


```js
probely.targets.archived.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [targetIds](#targetids)

#### Output
* output `object`
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * pagination_count [paginationCount](#paginationcount)
  * results `array`: Target objects
    * items [Target](#target)

### targets.id.delete
Delete target


```js
probely.targets.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### targets.id.get
Retrieve target


```js
probely.targets.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [Target](#target)

### targets.id.patch
Partial update target


```js
probely.targets.id.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body [Target](#target)

#### Output
* output [Target](#target)

### targets.id.put
Update target


```js
probely.targets.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body [Target](#target)

#### Output
* output [Target](#target)

### targets.target_id.assets.get
List target's assets


```js
probely.targets.target_id.assets.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Asset objects.
    * items [Asset](#asset)

### targets.target_id.assets.post
Create new asset


```js
probely.targets.target_id.assets.post({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Asset](#asset)

#### Output
* output [Asset](#asset)

### targets.target_id.assets.id.delete
Delete asset


```js
probely.targets.target_id.assets.id.delete({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### targets.target_id.assets.id.get
Retrieve asset


```js
probely.targets.target_id.assets.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Asset](#asset)

### targets.target_id.assets.id.patch
Partial update assets


```js
probely.targets.target_id.assets.id.patch({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [Asset](#asset)

#### Output
* output [Asset](#asset)

### targets.target_id.assets.id.put
Update asset


```js
probely.targets.target_id.assets.id.put({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [Asset](#asset)

#### Output
* output [Asset](#asset)

### targets.target_id.assets.id.verify.post
Verify asset ownership


```js
probely.targets.target_id.assets.id.verify.post({
  "target_id": "",
  "id": "",
  "body": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** `object`
    * type **required** [verificationType](#verificationtype)

#### Output
* output `object`
  * message `string`: Message

### targets.target_id.average_fix_time.get
Average vulnerability trend graph data


```js
probely.targets.target_id.average_fix_time.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `object`
  * results `object`
    * high `integer`: Average fix time in seconds for high severity findings
    * low `integer`: Average fix time in seconds for low severity findings
    * medium `integer`: Average fix time in seconds for medium severity findings

### targets.target_id.events.get
List target events


```js
probely.targets.target_id.events.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Event objects
    * items [Event](#event)

### targets.target_id.events.id.get
Retrieve target event


```js
probely.targets.target_id.events.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Event](#event)

### targets.target_id.findings.get
List target findings


```js
probely.targets.target_id.findings.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * scan `array`: Filter by scan ids
  * severity `string` (values: 10, 20, 30): Filter by finding severity
  * state `string` (values: notfixed, invalid, accepted, fixed): Filter by finding states
  * assignee `array`: Filter by assignee ids
  * label `array`: Filter by finding labels
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Finding objects.
    * items [Finding](#finding)

### targets.target_id.findings.bulk.report.post
Finding report


```js
probely.targets.target_id.findings.bulk.report.post({
  "target_id": "",
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [FindingBulkIds](#findingbulkids)

#### Output
*Output schema unknown*

### targets.target_id.findings.bulk.retest.post
Bulk retest findings


```js
probely.targets.target_id.findings.bulk.retest.post({
  "target_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [FindingBulkRetest](#findingbulkretest)

#### Output
*Output schema unknown*

### targets.target_id.findings.bulk.update.patch
Bulk update findings


```js
probely.targets.target_id.findings.bulk.update.patch({
  "target_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [FindingBulkUpdate](#findingbulkupdate)

#### Output
*Output schema unknown*

### targets.target_id.findings.report.get
Retrieve finding report PDF format


```js
probely.targets.target_id.findings.report.get({
  "target_id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * token **required** `string`: Token received from the finding report endpoint.

#### Output
* output `string`

### targets.target_id.findings.id.get
Retrieve finding


```js
probely.targets.target_id.findings.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Finding](#finding)

### targets.target_id.findings.id.patch
Partial update finding


```js
probely.targets.target_id.findings.id.patch({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [FindingUpdate](#findingupdate)

#### Output
* output [Finding](#finding)

### targets.target_id.findings.id.put
Update finding


```js
probely.targets.target_id.findings.id.put({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [FindingUpdate](#findingupdate)

#### Output
* output [Finding](#finding)

### targets.target_id.findings.id.integrations.jira_cloud.get
Retrieve Jira Cloud finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_cloud.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.integrations.jira_cloud.patch
Update Jira Cloud finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_cloud.patch({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [JiraFinding](#jirafinding)

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.integrations.jira_cloud.put
Update Jira Cloud finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_cloud.put({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [JiraFinding](#jirafinding)

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.integrations.jira_server.get
Retrieve Jira Server finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_server.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.integrations.jira_server.patch
Update Jira Server finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_server.patch({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [JiraFinding](#jirafinding)

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.integrations.jira_server.put
Update Jira Server finding configuration


```js
probely.targets.target_id.findings.id.integrations.jira_server.put({
  "target_id": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [JiraFinding](#jirafinding)

#### Output
* output [JiraFinding](#jirafinding)

### targets.target_id.findings.id.log.get
Finding activity log.


```js
probely.targets.target_id.findings.id.log.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `array`
  * items [Activity](#activity)

### targets.target_id.findings.id.retest.post
Retest finding


```js
probely.targets.target_id.findings.id.retest.post({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Scan](#scan)

### targets.target_id.integrations.get
Integrations available and installed for the target


```js
probely.targets.target_id.integrations.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output [Integrations](#integrations)

### targets.target_id.integrations.jira_cloud.get
Retrieve Jira Cloud Target configuration


```js
probely.targets.target_id.integrations.jira_cloud.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.jira_cloud.patch
Update Jira Cloud target configuration


```js
probely.targets.target_id.integrations.jira_cloud.patch({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [JiraScope](#jirascope)

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.jira_cloud.put
Update Jira Cloud target configuration


```js
probely.targets.target_id.integrations.jira_cloud.put({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [JiraScope](#jirascope)

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.jira_server.get
Retrieve Jira Server Target configuration


```js
probely.targets.target_id.integrations.jira_server.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.jira_server.patch
Update Jira Server target configuration


```js
probely.targets.target_id.integrations.jira_server.patch({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [JiraScope](#jirascope)

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.jira_server.put
Update Jira Server target configuration


```js
probely.targets.target_id.integrations.jira_server.put({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [JiraScope](#jirascope)

#### Output
* output [JiraScope](#jirascope)

### targets.target_id.integrations.slack.get
Retrieve slack integration data


```js
probely.targets.target_id.integrations.slack.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output [Slack](#slack)

### targets.target_id.integrations.slack.patch
Update slack integration data


```js
probely.targets.target_id.integrations.slack.patch({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Slack](#slack)

#### Output
* output [Slack](#slack)

### targets.target_id.integrations.slack.put
Update slack integration data


```js
probely.targets.target_id.integrations.slack.put({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Slack](#slack)

#### Output
* output [Slack](#slack)

### targets.target_id.keys.get
List target specific API keys


```js
probely.targets.target_id.keys.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: API key objects
    * items [Key](#key)

### targets.target_id.keys.post
Create target API key


```js
probely.targets.target_id.keys.post({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [APIKey](#apikey)

#### Output
* output [APIKey](#apikey)

### targets.target_id.keys.id.delete
Delete target API key


```js
probely.targets.target_id.keys.id.delete({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### targets.target_id.keys.id.get
Retrieve target API key


```js
probely.targets.target_id.keys.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [APIKey](#apikey)

### targets.target_id.risk_trend.get
Risk trend graph data


```js
probely.targets.target_id.risk_trend.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `array`
  * items `object`
    * 0 `string`: Date time
    * 1 `integer`: Risk score

### targets.target_id.scan_now.post
Start a scan on the target


```js
probely.targets.target_id.scan_now.post({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body `object`
    * scan_profile `string` (values: safe, normal, full, lightning): Override the target's `scan_profile`.

#### Output
* output [Scan](#scan)

### targets.target_id.scans.get
List scans


```js
probely.targets.target_id.scans.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term
  * started `array`: Filter by scan start dates
  * status `string` (values: queued, started, under_review, completed, completed_with_errors, failed, canceled, canceling): Filter by scan statuses

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Scan objects
    * items [Scan](#scan)

### targets.target_id.scans.dates.get
Dates where scans have ocurred


```js
probely.targets.target_id.scans.dates.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `array`: Dates for which there are scans
  * items `string`

### targets.target_id.scans.retrieve_page.get
Given a date return the page number


```js
probely.targets.target_id.scans.retrieve_page.get({
  "target_id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * length `integer`: Number of results to return per page
  * date **required** `string`: Date

#### Output
* output `object`
  * page `integer`: Page number

### targets.target_id.scans.id.get
Retrieve scan


```js
probely.targets.target_id.scans.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Scan](#scan)

### targets.target_id.scans.id.cancel.post
Cancel running scan


```js
probely.targets.target_id.scans.id.cancel.post({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Scan](#scan)

### targets.target_id.scans.id.endpoints.get
Scan endpoints file


```js
probely.targets.target_id.scans.id.endpoints.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `string`

### targets.target_id.scans.id.report.get
Scan report PDF, using the report type specified for the target


```js
probely.targets.target_id.scans.id.report.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `string`

### targets.target_id.scans.id.report.default.get
Scan report PDF, using the default report type


```js
probely.targets.target_id.scans.id.report.default.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `string`

### targets.target_id.scans.id.report.owasp.get
Scan report PDF, using the OWASP report type


```js
probely.targets.target_id.scans.id.report.owasp.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `string`

### targets.target_id.scans.id.report.pci.get
Scan report PDF, using the PCI report type


```js
probely.targets.target_id.scans.id.report.pci.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output `string`

### targets.target_id.scheduledscans.get
List scheduled scans


```js
probely.targets.target_id.scheduledscans.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Scheduled scan objects
    * items [Scheduled](#scheduled)

### targets.target_id.scheduledscans.post
Create new scheduled scan


```js
probely.targets.target_id.scheduledscans.post({
  "target_id": "",
  "body": {
    "date_time": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** `object`
    * date_time **required** [scanDateTime](#scandatetime)
    * recurrence [recurrence](#recurrence)

#### Output
* output [Scheduled](#scheduled)

### targets.target_id.scheduledscans.expanded.get
List scheduled scans expanding recurrence


```js
probely.targets.target_id.scheduledscans.expanded.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * length `integer`: Number of results to return per page

#### Output
* output `object`
  * results `array`: Scheduled scan objects
    * items [Scheduled](#scheduled)

### targets.target_id.scheduledscans.id.delete
Delete


```js
probely.targets.target_id.scheduledscans.id.delete({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### targets.target_id.scheduledscans.id.get
Retrieve a scheduled scan


```js
probely.targets.target_id.scheduledscans.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Scheduled](#scheduled)

### targets.target_id.scheduledscans.id.patch
Partial update


```js
probely.targets.target_id.scheduledscans.id.patch({
  "target_id": "",
  "id": "",
  "body": {
    "date_time": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** `object`
    * date_time **required** [scanDateTime](#scandatetime)
    * recurrence [recurrence](#recurrence)

#### Output
* output [Scheduled](#scheduled)

### targets.target_id.scheduledscans.id.put
Update a scheduled scan


```js
probely.targets.target_id.scheduledscans.id.put({
  "target_id": "",
  "id": "",
  "body": {
    "date_time": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** `object`
    * date_time **required** [scanDateTime](#scandatetime)
    * recurrence [recurrence](#recurrence)

#### Output
* output [Scheduled](#scheduled)

### targets.target_id.severity_trend.get
Severity trend graph data.


```js
probely.targets.target_id.severity_trend.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `object`
  * results `object`
    * high `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
    * low `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
    * medium `array`
      * items `object`
        * 0 `string`: Date time
        * 1 `integer`: Risk score
  * step `number`

### targets.target_id.site.get
Retrieve target's site


```js
probely.targets.target_id.site.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output [Site](#site)

### targets.target_id.site.patch
Note that the URL can only be set once.


```js
probely.targets.target_id.site.patch({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Site](#site)

#### Output
* output [Site](#site)

### targets.target_id.site.put
Note that the URL can only be set once.


```js
probely.targets.target_id.site.put({
  "target_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Site](#site)

#### Output
* output [Site](#site)

### targets.target_id.site.verify.post
Verify site ownership


```js
probely.targets.target_id.site.verify.post({
  "target_id": "",
  "body": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** `object`
    * type **required** [verificationType](#verificationtype)

#### Output
* output `object`
  * message `string`: Message

### targets.target_id.top_vulns.get
Top 5 vulnerabilities


```js
probely.targets.target_id.top_vulns.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `array`
  * items `object`
    * 0 `string`: Vulnerability name
    * 1 `string`: Vulnerability count

### targets.target_id.webhooks.get
List target webhooks


```js
probely.targets.target_id.webhooks.get({
  "target_id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Webhook objects
    * items [Webhook](#webhook)

### targets.target_id.webhooks.post
Create new target webhook


```js
probely.targets.target_id.webhooks.post({
  "target_id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### targets.target_id.webhooks.id.delete
Delete target webhook


```js
probely.targets.target_id.webhooks.id.delete({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### targets.target_id.webhooks.id.get
Retrieve target webhook


```js
probely.targets.target_id.webhooks.id.get({
  "target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id

#### Output
* output [Webhook](#webhook)

### targets.target_id.webhooks.id.patch
Partial update target webhook


```js
probely.targets.target_id.webhooks.id.patch({
  "target_id": "",
  "id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### targets.target_id.webhooks.id.put
Update target webhook


```js
probely.targets.target_id.webhooks.id.put({
  "target_id": "",
  "id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * target_id **required** `string`: Target id
  * id **required** `string`: Object Id
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### users.get
List users


```js
probely.users.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: User objects
    * items [User](#user)

### users.post
Create/Reactivate a user.


```js
probely.users.post({
  "body": {
    "name": "",
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * email **required** [userEmail](#useremail)
    * is_admin [userIsAdmin](#userisadmin)
    * name **required** [userName](#username)
    * title [userTitle](#usertitle)

#### Output
* output [User](#user)

### users.id.delete
Deactivate a user


```js
probely.users.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### users.id.get
Retrieve user


```js
probely.users.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [User](#user)

### users.id.patch
Partial update user


```js
probely.users.id.patch({
  "id": "",
  "body": {
    "name": "",
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** `object`
    * email **required** [userEmail](#useremail)
    * is_admin [userIsAdmin](#userisadmin)
    * name **required** [userName](#username)
    * title [userTitle](#usertitle)

#### Output
* output [User](#user)

### users.id.put
Update user


```js
probely.users.id.put({
  "id": "",
  "body": {
    "name": "",
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** `object`
    * email **required** [userEmail](#useremail)
    * is_admin [userIsAdmin](#userisadmin)
    * name **required** [userName](#username)
    * title [userTitle](#usertitle)

#### Output
* output [User](#user)

### vulnerability_definitions.get
List vulnerability definitions


```js
probely.vulnerability_definitions.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number within the paginated result set
  * length `integer`: Number of results to return per page
  * ordering `string`: Which field to use when ordering the results, prefix with `-` to invert ordering.
  * search `string`: Search term

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Vulnerability definition objects.
    * items [VulnerabilityDefinition](#vulnerabilitydefinition)

### vulnerability_definitions.id.get
Retrieve vulnerability definition


```js
probely.vulnerability_definitions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [VulnerabilityDefinition](#vulnerabilitydefinition)

### webhooks.get
List account webhooks


```js
probely.webhooks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * count [paginationCount](#paginationcount)
  * length [paginationLength](#paginationlength)
  * page [paginationPage](#paginationpage)
  * page_total [paginationPageTotal](#paginationpagetotal)
  * results `array`: Webhook objects
    * items [Webhook](#webhook)

### webhooks.post
Create new account webhook


```js
probely.webhooks.post({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### webhooks.id.delete
Delete account webhook


```js
probely.webhooks.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
*Output schema unknown*

### webhooks.id.get
Retrieve account webhook


```js
probely.webhooks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id

#### Output
* output [Webhook](#webhook)

### webhooks.id.patch
Partial update account webhook


```js
probely.webhooks.id.patch({
  "id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### webhooks.id.put
Update account webhook


```js
probely.webhooks.id.put({
  "id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Object Id
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)



## Definitions

### host
* host `string`: Fully qualified hostname

### APIKey
* APIKey `object`: API Key object
  * id [id](#id)
  * key [token](#token)
  * name [name](#name)

### Account
* Account `object`
  * auto_collection [accountAutoCollection](#accountautocollection)
  * balance [accountBalance](#accountbalance)
  * balance_currency_code [currencyCode](#currencycode)
  * free_target_quantity [freeTargetQuantity](#freetargetquantity)
  * has_used_trial [hasUsedTrial](#hasusedtrial)
  * heroku `boolean`: Heroku accounts (for future use)
  * next_billing_at [accountNextBillingAt](#accountnextbillingat)
  * plan [Plan](#plan)
  * plan_target_quantity [planTargetQuantity](#plantargetquantity)
  * pool_size [poolSize](#poolsize)
  * status [accountStatus](#accountstatus)
  * trialEnd [trialEnd](#trialend)

### Action
* Action `object`
  * action `string` (values: , trial, plan, subscribe): Action to enable targets:

### Actions
* Actions `array`
  * items `object`
    * action `string` (values: edit, delete, trial, plan, subscribe, unsubscribe, archive, activate): Actions are:
    * label `string`: Label or the action

### Activity
* Activity `object`
  * change `integer` (values: created, comment, found, changed): Type of change:
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * field `string`: Field that was changed
  * old_value `string`: Previous value
  * value `string`: New value

### Asset
* Asset `object`: Secondary domain of a target
  * host [host](#host)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * cookies [Cookies](#cookies)
  * desc [desc](#desc)
  * headers [Headers](#headers)
  * id [id](#id)
  * include [include](#include)
  * name [name](#name)
  * stack [Stack](#stack)
  * verification_date [verificationDate](#verificationdate)
  * verification_last_error [verificationLastError](#verificationlasterror)
  * verification_method [verificationMethod](#verificationmethod)
  * verification_token [verificationToken](#verificationtoken)
  * verified [verified](#verified)

### Assignee
* Assignee `object`: Assigned user
  * email [userEmail](#useremail)
  * id [userId](#userid)
  * name [userName](#username)

### BasicAuth
* BasicAuth `object`: Basic authentication credentials
  * password [password](#password)
  * username [basicAuthUsername](#basicauthusername)

### Billing
* Billing `object`
  * address **required** [address](#address)
  * city **required** [city](#city)
  * country **required** [country](#country)
  * email **required** [email](#email)
  * first_name **required** [firstName](#firstname)
  * last_name **required** [lastName](#lastname)
  * other `string`: Extra data
  * reg_number [registrationNumber](#registrationnumber)
  * vat_number **required** [vat](#vat)
  * zip **required** [zipCode](#zipcode)

### ChangedBy
* ChangedBy `object`: User that last modified the object
  * email [userEmail](#useremail)
  * id [userId](#userid)
  * name [userName](#username)

### Cookies
* Cookies `array`: Custom cookies name/value pairs
  * items `object`
    * name `string`: Cookie name.
    * value `string`: Cookie value.

### CreatedBy
* CreatedBy `object`: User that created the object
  * email [userEmail](#useremail)
  * id [userId](#userid)
  * name [userName](#username)

### Definition
* Definition `object`
  * desc `string`: Vulnerability definition description.
  * id `string`: Vulnerability definition id.
  * name `string`: Vulnerability definition name.

### Event
* Event `object`
  * content [EventContent](#eventcontent)
  * event_type [eventType](#eventtype)
  * id [id](#id)
  * object_type [eventObjectType](#eventobjecttype)
  * ocurred_at [eventOccurredAt](#eventoccurredat)
  * webhooks [WebhookList](#webhooklist)

### EventContent
* EventContent `object`: Event object.

### Finding
* Finding `object`
  * assignee [Assignee](#assignee)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * comment `string`: User comment left on the finding.
  * cvss_score [findingCVSSScore](#findingcvssscore)
  * cvss_vector [findingCVSSVector](#findingcvssvector)
  * definition [Definition](#definition)
  * evidence `string`: Evidence for the finding.
  * extra `string`: Extra data for the finding.
  * fix `string`: Fix sugestion for the vulnerability and framework
  * id [id](#id)
  * insertion_point [findingInsertionPoint](#findinginsertionpoint)
  * labels `array`: User labels for the finding.
    * items `string`
  * last_found `string`: Date time of the last time the vulnerability was found.
  * method [method](#method)
  * parameter `string`: Vulnerable paramenter.
  * params `string`: Request parameters
  * path `string`: Finding path.
  * reporter [Reporter](#reporter)
  * requests [Requests](#requests)
  * scans `array`: Scan ids where this finding was present.
    * items `string`
  * severity [findingSeverity](#findingseverity)
  * state [findingState](#findingstate)
  * target [TargetSimple](#targetsimple)
  * url `string`: Full finding URL
  * value `string`: Value for parameter.

### FindingBulkIds
* FindingBulkIds `object`
  * ids **required** `array`: Array of finding ids
    * items `string`

### FindingBulkRetest
* FindingBulkRetest
  * ids **required** `array`: Array of finding ids
    * items `string`
  * scan_profile [scanProfile](#scanprofile)

### FindingBulkUpdate
* FindingBulkUpdate
  * ids **required** `array`: Array of finding ids
    * items `string`
  * assignee [Assignee](#assignee)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * comment `string`: User comment left on the finding.
  * cvss_score [findingCVSSScore](#findingcvssscore)
  * cvss_vector [findingCVSSVector](#findingcvssvector)
  * definition [Definition](#definition)
  * evidence `string`: Evidence for the finding.
  * extra `string`: Extra data for the finding.
  * fix `string`: Fix sugestion for the vulnerability and framework
  * id [id](#id)
  * insertion_point [findingInsertionPoint](#findinginsertionpoint)
  * labels `array`: User labels for the finding.
    * items `string`
  * last_found `string`: Date time of the last time the vulnerability was found.
  * method [method](#method)
  * parameter `string`: Vulnerable paramenter.
  * params `string`: Request parameters
  * path `string`: Finding path.
  * reporter [Reporter](#reporter)
  * requests [Requests](#requests)
  * scans `array`: Scan ids where this finding was present.
    * items `string`
  * severity [findingSeverity](#findingseverity)
  * state [findingState](#findingstate)
  * target [TargetSimple](#targetsimple)
  * url `string`: Full finding URL
  * value `string`: Value for parameter.

### FindingUpdate
* FindingUpdate `object`
  * assignee [Assignee](#assignee)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * comment `string`: User comment left on the finding.
  * cvss_score [findingCVSSScore](#findingcvssscore)
  * cvss_vector [findingCVSSVector](#findingcvssvector)
  * definition [Definition](#definition)
  * evidence `string`: Evidence for the finding.
  * extra `string`: Extra data for the finding.
  * fix `string`: Fix sugestion for the vulnerability and framework
  * id [id](#id)
  * insertion_point [findingInsertionPoint](#findinginsertionpoint)
  * labels `array`: User labels for the finding.
    * items `string`
  * last_found `string`: Date time of the last time the vulnerability was found.
  * method [method](#method)
  * parameter `string`: Vulnerable paramenter.
  * params `string`: Request parameters
  * path `string`: Finding path.
  * reporter [Reporter](#reporter)
  * requests [Requests](#requests)
  * scans `array`: Scan ids where this finding was present.
    * items `string`
  * severity [findingSeverity](#findingseverity)
  * state [findingState](#findingstate)
  * target [TargetSimple](#targetsimple)
  * url `string`: Full finding URL
  * value `string`: Value for parameter.

### FormLogin
* FormLogin `array`: Form login field name, field input pairs
  * items `object`
    * name `string`: Field name/id
    * value `string`: Field input

### Framework
* Framework `object`
  * desc `string`: Framework description
  * id [id](#id)
  * name [id](#id)

### Headers
* Headers `array`: Custom headers name value pairs
  * items `object`
    * name `string`: Header name.
    * value `string`: Header value.

### IntegrationFields
* IntegrationFields `object`
  * heroku `boolean`
  * jira_cloud `boolean`
  * jira_server `boolean`
  * slack `boolean`

### Integrations
* Integrations `object`: Available and installed integrations
  * available [IntegrationFields](#integrationfields)
  * installed [IntegrationFields](#integrationfields)

### Invoice
* Invoice `object`
  * amount_due `integer`: Amount remaining to pay in cents
  * amount_paid `integer`: Amount already paid in cents
  * currency_code [currencyCode](#currencycode)
  * discounts `array`
    * items `object`
      * amount `integer`: Discounted amount in cents
      * description `string`: Discount description
  * line_items `array`
    * items `object`
      * amount `integer`: Total amount in cents
      * description `string`: Charge description
      * discount_amount `integer`: Discount amount in cents
      * quantity `integer`: Units charged
      * tax_amount `integer`: Tax amount in cents
      * unit_amount `integer`: Price per unit in cents
  * plan `string`: Plan name
  * plan_id [accountPlanId](#accountplanid)
  * sub_total `integer`: Price before taxes in cents
  * taxes `array`
    * items `object`
      * tax_amount `integer`: Amount of tax in cents
      * tax_name `string`: Name of applied tax
      * tax_rate `number`: Tax rate
  * total `integer`: Price after taxes in cents

### JiraFinding
* JiraFinding `object`
  * issue_id [jira_issue_id](#jira_issue_id)
  * selective_sync [jira_selective_sync](#jira_selective_sync)

### JiraIssuePriority
* JiraIssuePriority `object`: Jira issue priority.
  * id `string`: Jira issue priority id
  * name `string`: Jira issue priority name

### JiraIssueStatus
* JiraIssueStatus `object`: Jira issue status.
  * id `string`: Jira issue status id
  * name `string`: Jira issue status name

### JiraIssueType
* JiraIssueType `object`: Jira issue type.
  * id `string`: Jira issue type id
  * name `string`: Jira issue type name

### JiraProject
* JiraProject `object`: Jira project.
  * id `string`: Jira project id
  * name `string`: Jira project name

### JiraScope
* JiraScope `object`
  * allow_jira [jira_allow_jira](#jira_allow_jira)
  * auto_sync [jira_auto_sync](#jira_auto_sync)
  * issue_type_id [jira_issue_type_id](#jira_issue_type_id)
  * priority_mapping [jira_priority_mapping](#jira_priority_mapping)
  * project_id [jira_project_id](#jira_project_id)
  * status_mapping [jira_status_mapping](#jira_status_mapping)

### Key
* Key `object`
  * id [id](#id)
  * key [token](#token)
  * name [id](#id)

### Label
* Label `object`
  * id [id](#id)
  * name [name](#name)

### Login
* Login `object`
  * password **required** [password](#password)
  * username **required** [username](#username)

### Plan
* Plan `object`
  * allowed_scan_profiles [planAllowedScanProfiles](#planallowedscanprofiles)
  * charge_model [planChargeModel](#planchargemodel)
  * currency_code [currencyCode](#currencycode)
  * description [desc](#desc)
  * id [id](#id)
  * is_trial [planIsTrial](#planistrial)
  * name [name](#name)
  * period [billingPeriod](#billingperiod)
  * period_unit [billingPeriodUnit](#billingperiodunit)
  * price [price](#price)

### Reporter
* Reporter `object`: Reporting user
  * email [userEmail](#useremail)
  * id [userId](#userid)
  * name [userName](#username)

### Requests
* Requests `array`: Request response pairs that produced the finding
  * items `object`
    * request `string`
    * response `string`

### Scan
* Scan `object`
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * completed [scanCompleted](#scancompleted)
  * crawler `object`: Information on the status of the crawling step of the scanning process
    * error `array`: List of possible errors from the crawler
      * items `string`
    * state `string` (values: started, ended): The current state of the crawler
    * status `object`: The number of crawled URLs and total number of URLs in the queue
      * 0 `integer`: Number of crawled URLs
      * 1 `integer`: Total number of URLs in the queue
    * warning `array`: List of possible warnings from the crawler
      * items `string`
  * created [created](#created)
  * created_by [CreatedBy](#createdby)
  * fingerprinter `object`: Information on the status of the crawling step of the scanning process
    * count `integer`: The number of detected frameworks/software on the target
    * error `array`: List of possible errors from the fingerprinter
      * items `string`
    * state `string` (values: started, ended): The current state of the fingerprinter
    * warning `array`: List of possible warnings from the fingerprinter
      * items `string`
  * highs `integer`: Number of high severity findings in this scan
  * id [id](#id)
  * lows `integer`: Number of low severity findings in this scan
  * mediums `integer`: Number of medium severity findings in this scan
  * scan_profile [scanProfile](#scanprofile)
  * scanner `object`: Information on the status of the search for vulnerabilities of the scanning process
    * error `array`: List of possible errors from the scanner
      * items `string`
    * state `string` (values: started, ended): The current state of the scanner
    * status `object`: The number of scanner tasks completed and total number of tasks in the queue
      * 0 `integer`: Number of completed tasks
      * 1 `integer`: Total number of tasks in the queue
    * warning `array`: List of possible warnings from the scanner
      * items `string`
  * started [scanStarted](#scanstarted)
  * status [scanStatus](#scanstatus)
  * target [TargetSimple](#targetsimple)

### Scheduled
* Scheduled `object`
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * date_time [scanDateTime](#scandatetime)
  * id `string`: Scheduled object id
  * recurrence [recurrence](#recurrence)
  * target [TargetSimple](#targetsimple)

### Site
* Site `object`: Main resource associated with a target
  * host [siteHost](#sitehost)
  * basic_auth [BasicAuth](#basicauth)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * cookies [Cookies](#cookies)
  * desc [desc](#desc)
  * form_login [FormLogin](#formlogin)
  * form_login_check_pattern [formLoginCheckPattern](#formlogincheckpattern)
  * form_login_url [formLoginUrl](#formloginurl)
  * has_basic_auth [hasBasicAuth](#hasbasicauth)
  * has_form_login [hasFormLogin](#hasformlogin)
  * headers [Headers](#headers)
  * id [id](#id)
  * name [name](#name)
  * stack [Stack](#stack)
  * url [siteUrl](#siteurl)
  * verification_date [verificationDate](#verificationdate)
  * verification_last_error [verificationLastError](#verificationlasterror)
  * verification_method [verificationMethod](#verificationmethod)
  * verification_token [verificationToken](#verificationtoken)
  * verified [verified](#verified)
  * whitelist [Whitelist](#whitelist)

### Slack
* Slack `object`: Options for slack notifications
  * notify_finding_fixed `boolean`: Notify of fixed findings.
  * notify_high_findings `boolean`: Notify of new high severity findings.
  * notify_low_findings `boolean`: Notify of new low severity findings.
  * notify_medium_findings `boolean`: Notify of new medium severity findings.
  * notify_scan_completed `boolean`: Notify of completed scans.
  * notify_scan_started `boolean`: Notify of started scans.
  * webhook_url `string`: Slack notification webhook url.

### Stack
* Stack `array`: List of frameworks detected on this resource
  * items [frameworkNames](#frameworknames)

### Subscription
* Subscription `object`
  * coupon_ids [coupons](#coupons)
  * plan_id [accountPlanId](#accountplanid)
  * target_ids [targetIds](#targetids)

### Target
* Target `object`
  * allowed_scan_profiles `array`: Valid scan profiles for the target.
    * items `object`
      * id [scanProfile](#scanprofile)
      * name `string`: Name of the scan profile.
  * assets `array`: Secondary domains that should be scanned
    * items [Asset](#asset)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * connected_target [connectedTarget](#connectedtarget)
  * enabled [enabled](#enabled)
  * environment [environment](#environment)
  * id [id](#id)
  * labels `array`: User labels for the scope. (This feature is currently only available for certain accounts,
    * items `string`
  * name [name](#name)
  * report_type [reportType](#reporttype)
  * scan_profile [scanProfile](#scanprofile)
  * site [Site](#site)
  * type [targetType](#targettype)

### TargetSimple
* TargetSimple `object`
  * desc [desc](#desc)
  * id [id](#id)
  * name [name](#name)
  * stack [Stack](#stack)
  * url `string`: Target's site URL

### User
* User `object`
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * email [userEmail](#useremail)
  * id [id](#id)
  * is_active [userIsActive](#userisactive)
  * is_admin [userIsAdmin](#userisadmin)
  * is_billing_admin [userIsBillingAdmin](#userisbillingadmin)
  * name [userName](#username)
  * title [userTitle](#usertitle)

### VulnerabilityDefinition
* VulnerabilityDefinition `object`
  * changed [changed](#changed)
  * desc [desc](#desc)
  * id [id](#id)
  * name [name](#name)

### Webhook
* Webhook `object`
  * api_version [webhookApiVersion](#webhookapiversion)
  * changed [changed](#changed)
  * changed_by [ChangedBy](#changedby)
  * check_cert [webhookCheckCert](#webhookcheckcert)
  * created [changed](#changed)
  * created_by [ChangedBy](#changedby)
  * id [id](#id)
  * name [name](#name)
  * url **required** [webhookURL](#webhookurl)

### WebhookList
* WebhookList `array`
  * items [Webhook](#webhook)

### Whitelist
* Whitelist `array`
  * items `string`: Paths that the spider should visit that are not directly accessible

### accountAutoCollection
* accountAutoCollection `string` (values: on, off): Collection for the next billing period is autommatic/manual

### accountBalance
* accountBalance `integer`: Account balance in cents

### accountNextBillingAt
* accountNextBillingAt `string`: Date of next billing

### accountPlanId
* accountPlanId `string`: Current plan id

### accountStatus
* accountStatus `string` (values: active, trial_ended, canceled): * active - active subscription, either trial or paying

### address
* address `string`: Address

### basicAuthUsername
* basicAuthUsername `string`: Username

### billingPeriod
* billingPeriod `string`: Number of of period unit between charges

### billingPeriodUnit
* billingPeriodUnit `string` (values: month, year): Unit of billing period

### changed
* changed `string`: Date time of the last change

### city
* city `string`: City

### connectedTarget
* connectedTarget `string`: Id of the connected target in a multi-environment targets.

### country
* country `string`: ISO 3166 alpha-2 country code

### coupons
* coupons `array`: Coupon ids
  * items `string`

### created
* created `string`: Date time of creation

### currencyCode
* currencyCode `string`: 3 letter currency code

### desc
* desc `string`: Custom description for the resource

### email
* email `string`: Contact email

### emailToken
* emailToken `string`: Reset token received in the user email

### enabled
* enabled `boolean`: Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.

### environment
* environment `string` (values: testing, production): Multi-environment targets can identify environments using this property.

### eventObjectType
* eventObjectType `string` (values: user, target, scan, finding): Type of object in the event content.

### eventOccurredAt
* eventOccurredAt `string`: Date time of when the event occurred

### eventType
* eventType `string` (values: user_created, user_deleted, target_created, target_deleted, target_verified, target_verification_failed, scan_started, scan_canceled, scan_completed, scan_failed, finding_detected, finding_fixed): Event type:

### findingCVSSScore
* findingCVSSScore `number`: CVSS score

### findingCVSSVector
* findingCVSSVector `string`: CVSS vector

### findingInsertionPoint
* findingInsertionPoint `string` (values: cookie, header, parameter, arbitrary_url_param_name, url_path_folder, ): An insertion point is the place in the HTTP request where the

### findingSeverity
* findingSeverity `string` (values: 10, 20, 30): Severity, how serious the issue is considered:

### findingState
* findingState `string` (values: notfixed, invalid, accepted, fixed): Finding state:

### firstName
* firstName `string`: First name

### formLoginCheckPattern
* formLoginCheckPattern `string`: Pattern to check successful authentication (not used)

### formLoginUrl
* formLoginUrl `string`: URL for the form login

### frameworkNames
* frameworkNames `string`: Framework/Software name.

### freeTargetQuantity
* freeTargetQuantity `integer`: Number of free targets

### hasBasicAuth
* hasBasicAuth `boolean`: Use basic authentication in scan

### hasFormLogin
* hasFormLogin `boolean`: Does the resource use form login

### hasUsedTrial
* hasUsedTrial `boolean`: Has account used up it's trial

### id
* id `string`: Object id.

### include
* include `boolean`: Use this asset in scans.

### jira_allow_jira
* jira_allow_jira `boolean`: Is this target allowed Jira integration.

### jira_auto_sync
* jira_auto_sync `boolean`: Automatically synchronise all findings to Jira issues.

### jira_issue_id
* jira_issue_id `string`: Jira issue id connected to this finding

### jira_issue_type_id
* jira_issue_type_id `string`: Id of the issue type to be created in Jira.

### jira_priority_mapping
* jira_priority_mapping `object`
  * 10 `string`: Id of the Jira priority that low severity findings should be mapped to.
  * 20 `string`: Id of the Jira priority that medium severity findings should be mapped to.
  * 30 `string`: Id of the Jira status that high severity findings should be mapped to.

### jira_project_id
* jira_project_id `string`: Id of the Jira project where issues for this target will be created.

### jira_selective_sync
* jira_selective_sync `boolean`: Selective sync active for this finding.

### jira_status_mapping
* jira_status_mapping `object`
  * accepted `string`: Id of the Jira status that `accepted` findings should be mapped to.
  * fixed `string`: Id of the Jira status that `fixed` findings should be mapped to.
  * invalid `string`: Id of the Jira status that `invalid` findings should be mapped to.
  * notfixed `string`: Id of the Jira status that `notfixed` findings should be mapped to.

### lastName
* lastName `string`: Last name

### method
* method `string` (values: GET, OPTIONS, POST, PUT, PATCH, DELETE, HEAD): HTTP method

### name
* name `string`: Custom name for the resource

### paginationCount
* paginationCount `integer`: Number of objects in the response.

### paginationLength
* paginationLength `integer`: Number of objects per page.

### paginationPage
* paginationPage `integer`: Current page.

### paginationPageTotal
* paginationPageTotal `integer`: Number of pages.

### password
* password `string`

### planAllowedScanProfiles
* planAllowedScanProfiles `array`: List of scan profiles allowed by the plan
  * items `string`

### planChargeModel
* planChargeModel `string` (values: per_unit, flat_fee): * per_unit - each target is paid independently

### planIsTrial
* planIsTrial `boolean`: Is this a trial plan

### planTargetQuantity
* planTargetQuantity `integer`: Number of subscribed targets

### poolSize
* poolSize `integer`: Maximum number of subscribed target for pool plans

### price
* price `integer`: Price in cents

### recurrence
* recurrence `string` (values: d, w, m, q, ): Scan recurrence:

### registrationNumber
* registrationNumber `string`: Company registration number

### reportType
* reportType `string` (values: default, owasp, pci): * default - default report, no extra information added

### scanCompleted
* scanCompleted `string`: Date time of scan completion

### scanDateTime
* scanDateTime `string`: Date time of next scan

### scanProfile
* scanProfile `string` (values: safe, normal, full, lightning): * lightning - fast simple scan

### scanStarted
* scanStarted `string`: Date time of scan start

### scanStatus
* scanStatus `string` (values: queued, started, under_review, completed, completed_with_errors, failed, canceled, canceling): Current scan status:

### siteHost
* siteHost `string`: Site host

### siteUrl
* siteUrl `string`: Site URL, it should include the path if the site is not located at the root. This URL can only be set once.

### targetIds
* targetIds `array`
  * items [id](#id)

### targetType
* targetType `string` (values: free, single, multi): The type of a target determines what the limitations imposed on a

### token
* token `string`: Authentication token

### tokenBody
* tokenBody `string`: Authentication token

### trialEnd
* trialEnd `string`: Trial termination date

### ttl
* ttl `integer`: Token time to live in seconds

### userEmail
* userEmail `string`: User's email (changing this resets the user's password and revokes existing tokens)

### userId
* userId `string`: User's id

### userIsActive
* userIsActive `boolean`: Deleted users are marked as not active

### userIsAdmin
* userIsAdmin `boolean`: Account admin

### userIsBillingAdmin
* userIsBillingAdmin `boolean`: Billing contact for the account

### userName
* userName `string`: User's name

### userTitle
* userTitle `string` (values: ceo, cto, cso, seceng, dev, devop, manager, other)

### username
* username `string`

### vat
* vat `string`: Company VAT registration number

### verificationDate
* verificationDate `string`: Verification date time

### verificationLastError
* verificationLastError `string`: Reason for last verification failure.

### verificationMethod
* verificationMethod `string` (values: dns, file): Type of verification:

### verificationToken
* verificationToken `string`: Token used to verify

### verificationType
* verificationType `string` (values: dns, file): Type of verification:

### verified
* verified `boolean`: Has resource ownership been verified

### webhookApiVersion
* webhookApiVersion `string` (values: v1): API version for the webhook

### webhookCheckCert
* webhookCheckCert `boolean`: Verify webhook URL HTTPS certificate

### webhookURL
* webhookURL `string`: URL to post events to (must be https)

### zipCode
* zipCode `string`: Address ZIP code


