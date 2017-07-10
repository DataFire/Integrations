# @datafire/stackexchange
Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


## Operation: access_tokens.accessTokens.get
Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accessTokens": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "accessTokens"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/access_tokens"
}
```
## Operation: access_tokens.accessTokens.invalidate.get
Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accessTokens": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "accessTokens"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/access_tokens"
}
```
## Operation: answers.get
Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: answers.ids.get
Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: answers.ids.comments.get
Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: apps.accessTokens.de_authenticate.get
Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accessTokens": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "accessTokens"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/access_tokens"
}
```
## Operation: badges.get
Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name",
        "type"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: badges.name.get
Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: badges.recipients.get
Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: badges.tags.get
Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: badges.ids.get
Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name",
        "type"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: badges.ids.recipients.get
Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: comments.get
Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: comments.ids.get
Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: comments.id.delete.post
Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "preview": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comments.id.edit.post
Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "body": {
      "type": "string"
    },
    "preview": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/created_comment"
}
```
## Operation: errors.get
Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/errors"
}
```
## Operation: errors.id.get
This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: events.get
Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user
  
 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "since": {
      "type": "integer",
      "description": "Unix date."
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: filters.create.get
Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "base": {
      "type": "string"
    },
    "exclude": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "include": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "unsafe": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/single_filter"
}
```
## Operation: filters.filters.get
Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filters": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    }
  },
  "additionalProperties": false,
  "required": [
    "filters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/filters"
}
```
## Operation: inbox.get
Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: inbox.unread.get
Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "since": {
      "type": "integer",
      "description": "Unix date."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: info.get
Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/info_object"
}
```
## Operation: me.get
Returns the user associated with the passed access_token.
 
This method returns a user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "reputation",
        "creation",
        "name",
        "modified"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: me.answers.get
Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: me.associated.get
Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/network_users"
}
```
## Operation: me.badges.get
Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name",
        "type"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: me.comments.get
Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: me.comments.toId.get
Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "toId": {
      "type": "integer"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "toId",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: me.favorites.get
Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "added"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.inbox.get
Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: me.inbox.unread.get
Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "since": {
      "type": "integer",
      "description": "Unix date."
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: me.mentioned.get
Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: me.merges.get
Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/account_merge"
}
```
## Operation: me.notifications.get
Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: me.notifications.unread.get
Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: me.privileges.get
Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/privileges"
}
```
## Operation: me.questions.get
Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.questions.featured.get
Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.questions.no_answers.get
Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.questions.unaccepted.get
Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.questions.unanswered.get
Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.reputation.get
Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_changes"
}
```
## Operation: me.reputation_history.get
Returns user's public reputation history.
 
This method returns a list of reputation_history.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_history"
}
```
## Operation: me.reputation_history.full.get
Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_history"
}
```
## Operation: me.suggested_edits.get
Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "approval",
        "rejection"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suggested-edits"
}
```
## Operation: me.tags.get
Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: me.tags.tags.top_answers.get
Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: me.tags.tags.top_questions.get
Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "hot",
        "week",
        "month",
        "relevance"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: me.timeline.get
Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user_timeline_objects"
}
```
## Operation: me.top_answer_tags.get
Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/top_tag_objects"
}
```
## Operation: me.top_question_tags.get
Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/top_tag_objects"
}
```
## Operation: me.write_permissions.get
Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/write_permissions"
}
```
## Operation: notifications.get
Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: notifications.unread.get
Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: posts.get
Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of posts.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/posts"
}
```
## Operation: posts.ids.get
Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of posts.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/posts"
}
```
## Operation: posts.ids.comments.get
Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: posts.ids.revisions.get
Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/revisions"
}
```
## Operation: posts.ids.suggested_edits.get
Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of suggested-edits.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "approval",
        "rejection"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suggested-edits"
}
```
## Operation: posts.id.comments.add.post
Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "body": {
      "type": "string"
    },
    "preview": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/created_comment"
}
```
## Operation: privileges.get
Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/privileges"
}
```
## Operation: questions.get
Gets all the questions on the site.
 
This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - hot - by the formula ordering the hot tab Does not accept min or max
 - week - by the formula ordering the week tab Does not accept min or max
 - month - by the formula ordering the month tab Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "hot",
        "week",
        "month",
        "relevance"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.featured.get
Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.no_answers.get
Returns questions which have received no answers.
 
Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
 
This method corresponds roughly with the this site tab.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.unanswered.get
Returns questions the site considers to be unanswered.
 
Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
Compare with /questions/no-answers.
 
This method corresponds roughly with the unanswered tab.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.ids.get
Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.ids.answers.get
Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: questions.ids.comments.get
Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: questions.ids.linked.get
Gets questions which link to those questions identified in {ids}.
 
This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
 
A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "rank"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.ids.related.get
Returns questions that the site considers related to those identified in {ids}.
 
The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "rank"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: questions.ids.timeline.get
Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/question_timeline_events"
}
```
## Operation: revisions.ids.get
Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Guid list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/revisions"
}
```
## Operation: search.get
Searches a site for any questions which fit the given criteria.
 
This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
 
At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
 
tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "relevance"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "intitle": {
      "type": "string"
    },
    "nottagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: search.advanced.get
Searches a site for any questions which fit the given criteria.
 
Search criteria are expressed using the following parameters:
  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
 - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
 - answers - the minimum number of answers returned questions must have.
 - body - text which must appear in returned questions' bodies.
 - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
 - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
 - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
 - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
 - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
 - title - text which must appear in returned questions' titles.
 - user - the id of the user who must own the questions returned.
 - url - a url which must be contained in a post, may include a wildcard.
 - views - the minimum number of views returned questions must have.
 - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.
  
At least one additional parameter must be set if nottagged is set, for performance reasons.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "relevance"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "accepted": {
      "type": "string",
      "enum": [
        true,
        false
      ]
    },
    "answers": {
      "type": "integer"
    },
    "body": {
      "type": "string"
    },
    "closed": {
      "type": "string",
      "enum": [
        true,
        false
      ]
    },
    "migrated": {
      "type": "string",
      "enum": [
        true,
        false
      ]
    },
    "notice": {
      "type": "string",
      "enum": [
        true,
        false
      ]
    },
    "nottagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "q": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "user": {
      "type": "integer"
    },
    "views": {
      "type": "integer"
    },
    "wiki": {
      "type": "string",
      "enum": [
        true,
        false
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: similar.get
Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
This method is roughly equivalent to a site's related questions suggestion on the ask page.
 
This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
 
Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
 
If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "relevance"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "nottagged": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "title": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: sites.get
Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sites"
}
```
## Operation: suggested_edits.get
Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "approval",
        "rejection"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suggested-edits"
}
```
## Operation: suggested_edits.ids.get
Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of suggested-edits.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "approval",
        "rejection"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suggested-edits"
}
```
## Operation: tags.get
Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: tags.moderator_only.get
Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: tags.required.get
Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: tags.synonyms.get
Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of tag_synonyms.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "applied",
        "activity"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag_synonyms"
}
```
## Operation: tags.tags.faq.get
Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: tags.tags.info.get
Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: tags.tags.related.get
Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: tags.tags.synonyms.get
Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of tag synonyms.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "applied",
        "activity"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag_synonyms"
}
```
## Operation: tags.tags.wikis.get
Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag_wikis"
}
```
## Operation: tags.tag.top_answerers.period.get
Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {
      "type": "string"
    },
    "period": {
      "type": "string",
      "enum": [
        "all_time",
        "month"
      ]
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tag",
    "period",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag_score_objects"
}
```
## Operation: tags.tag.top_askers.period.get
Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {
      "type": "string"
    },
    "period": {
      "type": "string",
      "enum": [
        "all_time",
        "month"
      ]
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "tag",
    "period",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag_score_objects"
}
```
## Operation: users.get
Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "inname": {
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "reputation",
        "creation",
        "name",
        "modified"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.moderators.get
Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "reputation",
        "creation",
        "name",
        "modified"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.moderators.elected.get
Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "reputation",
        "creation",
        "name",
        "modified"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.ids.get
Gets the users identified in ids in {ids}.
 
Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "reputation",
        "creation",
        "name",
        "modified"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.ids.answers.get
Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: users.ids.associated.get
Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/network_users"
}
```
## Operation: users.ids.badges.get
Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\nsort = awarded => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = rank => string\nsort = name => string\nsort = type => string\nsort = awarded => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "rank",
        "name",
        "type",
        "awarded"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/badges"
}
```
## Operation: users.ids.comments.get
Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: users.ids.comments.toid.get
Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "toid": {
      "type": "integer"
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "toid",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: users.ids.favorites.get
Get the questions that users in {ids} have favorited.
 
This method is effectively a view onto a user's favorites tab.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - added - when the user favorited the question
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes",
        "added"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.mentioned.get
Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of comments.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: users.ids.merges.get
Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/account_merge"
}
```
## Operation: users.ids.questions.get
Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.questions.featured.get
Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.questions.no_answers.get
Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.questions.unaccepted.get
Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.questions.unanswered.get
Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
 
To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.ids.reputation.get
Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_changes"
}
```
## Operation: users.ids.reputation_history.get
Returns users' public reputation history.
 
This method returns a list of reputation_history.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_history"
}
```
## Operation: users.ids.suggested_edits.get
Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of suggested-edits.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "min": {
      "type": "string",
      "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "creation",
        "approval",
        "rejection"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suggested-edits"
}
```
## Operation: users.ids.tags.get
Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of tags.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "min": {
      "type": "string",
      "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "popular",
        "activity",
        "name"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: users.ids.timeline.get
Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Number list (semicolon delimited)."
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user_timeline_objects"
}
```
## Operation: users.id.inbox.get
Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: users.id.inbox.unread.get
Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    },
    "since": {
      "type": "integer",
      "description": "Unix date."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/inbox_items"
}
```
## Operation: users.id.notifications.get
Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: users.id.notifications.unread.get
Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: users.id.privileges.get
Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/privileges"
}
```
## Operation: users.id.reputation_history.full.get
Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reputation_history"
}
```
## Operation: users.id.tags.tags.top_answers.get
Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of answers.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/answers"
}
```
## Operation: users.id.tags.tags.top_questions.get
Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
 
This method returns a list of questions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "tags": {
      "type": "string",
      "description": "String list (semicolon delimited)."
    },
    "order": {
      "type": "string",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "max": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "min": {
      "type": "string",
      "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
    },
    "sort": {
      "type": "string",
      "enum": [
        "activity",
        "creation",
        "votes"
      ]
    },
    "fromdate": {
      "type": "integer",
      "description": "Unix date."
    },
    "todate": {
      "type": "integer",
      "description": "Unix date."
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tags",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questions"
}
```
## Operation: users.id.top_answer_tags.get
Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/top_tag_objects"
}
```
## Operation: users.id.top_question_tags.get
Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/top_tag_objects"
}
```
## Operation: users.id.write_permissions.get
Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "pagesize": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string",
      "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
    },
    "callback": {
      "type": "string",
      "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
    },
    "site": {
      "type": "string",
      "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "site"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/write_permissions"
}
```
