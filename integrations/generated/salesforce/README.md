# @datafire/salesforce

Client library for Salesforce

## Installation and Usage
```bash
npm install --save datafire @datafire/salesforce
```

```js
let datafire = require('datafire');
let salesforce = require('@datafire/salesforce').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    salesforce: account,
  }
})

salesforce..get({}, context).then(data => {
  console.log(data);
})
```

## Description
Explore the beta Salesforce REST API to integrate CRM.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
salesforce.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
salesforce.oauthRefresh(null, context)
```


### .get
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.


```js
salesforce..get(null, context)
```


### version.get
Lists available resources for the specified API version, including resource name and URI.


```js
salesforce.version.get({
  "version": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.

### version.sobjects.get
Lists the available objects and their metadata for your organization's data. In addition, it provides the organization encoding, as well as maximum batch size permitted in queries. For more information, see Internationalization and Character Sets (http://www.salesforce.com/us/developer/docs/api/Content/implementation_considerations.htm#sforce_api_other_internationalization).


```js
salesforce.version.sobjects.get({
  "version": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.

### version.sobjects.sobject.get
Retrieves the metadata for an object.


```js
salesforce.version.sobjects.sobject.get({
  "version": "",
  "sobject": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.

### version.sobjects.sobject.post
Creates a new object.


```js
salesforce.version.sobjects.sobject.post({
  "version": "",
  "sobject": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.

### version.sobjects.sobject.describe.get
Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.


```js
salesforce.version.sobjects.sobject.describe.get({
  "version": "",
  "sobject": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.

### version.sobjects.sobject.id.get
Retrieves individual records for an object.


```js
salesforce.version.sobjects.sobject.id.get({
  "version": "",
  "sobject": "",
  "id": ""
}, context)
```

#### Parameters
* fields (string) - Optional list of fields used to return values for.
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.
* id (string) **required** - A Salesforce's object ID.

### version.sobjects.sobject.id.delete
Deletes a record.


```js
salesforce.version.sobjects.sobject.id.delete({
  "version": "",
  "sobject": "",
  "id": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.
* id (string) **required** - A Salesforce's object ID.

### version.sobjects.sobject.id.blobField.get
Retrieves the specified blob field from an individual record. Because blob fields contain binary data, you can't use JSON or XML to retrieve this data.


```js
salesforce.version.sobjects.sobject.id.blobField.get({
  "version": "",
  "sobject": "",
  "id": "",
  "blobField": ""
}, context)
```

#### Parameters
* fields (string) - Optional list of fields used to return values for.
* version (string) **required** - An API version.
* sobject (string) **required** - A Salesforce's object.
* id (string) **required** - A Salesforce's object ID.
* blobField (string) **required** - A Salesforce's object blob field.

### version.sobjects.User.id.password.get
Gets password expiration status for a given user. The session must have permission to access the given user password information, otherwise an error response is returned.


```js
salesforce.version.sobjects.User.id.password.get({
  "version": "",
  "id": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* id (string) **required** - A Salesforce's user ID.

### version.sobjects.User.id.password.post
Changes the password for a given user ID. The new password must conform to the password policies for the organization, otherwise you will get an error response. You can only change one password per request.


```js
salesforce.version.sobjects.User.id.password.post({
  "version": "",
  "id": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* id (string) **required** - A Salesforce's user ID.

### version.sobjects.User.id.password.delete
Resets an user password. Salesforce will reset the user password to an auto-generated password, which will be returned in the response.


```js
salesforce.version.sobjects.User.id.password.delete({
  "version": "",
  "id": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* id (string) **required** - A Salesforce's user ID.

### version.query.get
Executes the specified SOQL query. If the initial query returns only part of the results, the end of the response will contain a field called nextRecordsUrl. In such cases, use the resource {version}/query/{id} to request the next batch of records and repeat until all records have been retrieved.


```js
salesforce.version.query.get({
  "version": "",
  "q": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* q (string) **required** - A SOQL query.

### version.query.id.get
Retrieves the remaining SOQL query results using the identifier within the field "nextRecordsUrl" value (i.e. "nextRecordsUrl" : "/services/data/v24.0/query/01gD0000002HU6KIAW-2000") located at the end of the initial query results. Requests the next batch of records and you could repeat (using the corresponding identifier) until all records have been retrieved.


```js
salesforce.version.query.id.get({
  "version": "",
  "id": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* id (string) **required** - An identifier used to retrieve the remaining results.

### version.search.get
Executes the specified SOSL search. The search string must be URL-encoded.


```js
salesforce.version.search.get({
  "version": "",
  "q": ""
}, context)
```

#### Parameters
* version (string) **required** - An API version.
* q (string) **required** - A SOSL statement.

