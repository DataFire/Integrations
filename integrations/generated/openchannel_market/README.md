# @datafire/openchannel_market

Client library for OpenChannel Market API

## Installation and Usage
```bash
npm install --save @datafire/openchannel_market
```
```js
let openchannel_market = require('@datafire/openchannel_market').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### apps.get
- Results are paginated and the default is value is 1000 if no limit is provided
- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace



```js
openchannel_market.apps.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page
  * userId `string`: The unique id of the user requesting this resource
  * isOwner `boolean`: Whether this result should only contain apps that are owned by this user

#### Output
*Output schema unknown*

### apps.post
- This method is called on behalf of a developer.
- Price is required if the model is 'single' or 'recurring'
- Returns the newly created app



```js
openchannel_market.apps.post({
  "developerId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The unique id of the developer that is adding this app
  * name **required** `string`: The name of the app
  * type `string`: The type for this app
  * model `string`: A JSON object representing the pricing model type for this app
  * customData `string`: A custom JSON object that you can create and attach to this record
  * attributes `string`: A custom set of app attributes defined by the administrator and attached to this app
  * restrict `string`: JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
  * allow `string`: JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
  * access `string`: JSON array of data access requirements

#### Output
*Output schema unknown*

### apps.bySafeName.safeName.get
- A 'view' event is recorded when trackViews is set to true



```js
openchannel_market.apps.bySafeName.safeName.get({
  "safeName": ""
}, context)
```

#### Input
* input `object`
  * safeName **required** `string`: The safeName of the App to be located
  * userId `string`: The unique id of the user that is requesting this resource
  * trackViews `boolean`: Whether this call should be tracked as a 'view' for this app. Default is false.

#### Output
*Output schema unknown*

### apps.textSearch.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.apps.textSearch.get({
  "text": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'MyApp'} matches all the documents that have the name 'MyApp'
  * text **required** `string`: The text to search for.
  * fields **required** `string`: A JSON array containing all the fields to be searched through. Example: ['name', 'customData.description']
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page
  * userId `string`: The unique id of the user requesting this resource
  * isOwned `boolean`: Whether this result should only contain apps that are owned by this user

#### Output
*Output schema unknown*

### apps.versions.get
- Results are paginated when limit is set, otherwise all results are returned
- If no query is specified, returns all AppVersions within the marketplace
- Only returns AppVersions owned by this developer



```js
openchannel_market.apps.versions.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page
  * developerId `string`: The unique id of the developer requesting this resource

#### Output
*Output schema unknown*

### apps.appId.delete
- This method is called on behalf of a developer.



```js
openchannel_market.apps.appId.delete({
  "appId": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be removed
  * developerId **required** `string`: The unique id of the developer that is removing this app

#### Output
*Output schema unknown*

### apps.appId.get
- A 'view' event is recorded when trackViews is set to true



```js
openchannel_market.apps.appId.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be located
  * userId `string`: The unique id of the user that is requesting this resource
  * trackViews `boolean`: Whether this call should be tracked as a 'view' for this app. Default is false.

#### Output
*Output schema unknown*

### apps.appId.live.post
- This method is called on behalf of a developer.



```js
openchannel_market.apps.appId.live.post({
  "appId": "",
  "developerId": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be changed
  * developerId **required** `string`: The unique id of the developer that is changing this AppVersion
  * version **required** `string`: The new version of the live App

#### Output
*Output schema unknown*

### apps.appId.publish.post
- This method is called on behalf of a developer. 
- Only effects the current working version of the app.



```js
openchannel_market.apps.appId.publish.post({
  "appId": "",
  "developerId": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the app to be published
  * developerId **required** `string`: The unique id of the developer that is modifying this app
  * version **required** `integer`: The version of the app to be published
  * autoApprove `boolean`: If true, this AppVersion is automatically approved and becomes immediately available to end users

#### Output
*Output schema unknown*

### apps.appId.versions.version.delete
- This method is called on behalf of a developer.



```js
openchannel_market.apps.appId.versions.version.delete({
  "appId": "",
  "version": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be removed
  * version **required** `string`: The version of the App to be removed
  * developerId **required** `string`: The unique id of the developer that is removing this app

#### Output
*Output schema unknown*

### apps.appId.versions.version.get
- Only returns AppVersions owned by this developer



```js
openchannel_market.apps.appId.versions.version.get({
  "appId": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be located
  * version **required** `integer`: The version number of the app
  * developerId `string`: The unique id of the developer that is requesting this resource

#### Output
*Output schema unknown*

### apps.appId.versions.version.patch
- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 



```js
openchannel_market.apps.appId.versions.version.patch({
  "appId": "",
  "version": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be updated
  * version **required** `string`: The version of the App to be updated
  * developerId **required** `string`: The unique id of the developer that is updating this app
  * name `string`: The name of the app
  * type `string`: The type for this app
  * model `string`: A JSON object representing the pricing model type for this app
  * customData `string`: A custom JSON object that you can create and attach to this record
  * attributes `string`: A custom set of app attributes defined by the administrator and attached to this app
  * restrict `string`: JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app
  * allow `string`: JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app
  * access `string`: JSON array of data access requirements
  * approvalRequired `string`: False if updates should skip the approval process and be available immediately. Default is True

#### Output
*Output schema unknown*

### apps.appId.versions.version.post
- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).



```js
openchannel_market.apps.appId.versions.version.post({
  "appId": "",
  "version": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be updated
  * version **required** `string`: The version of the App to be updated
  * developerId **required** `string`: The unique id of the developer that is updating this app
  * name `string`: The name of the app
  * type `string`: The type for this app
  * model `string`: A JSON object representing the pricing model type for this app
  * customData `string`: A custom JSON object that you can create and attach to this record
  * attributes `string`: A custom set of app attributes defined by the administrator and attached to this app
  * restrict `string`: JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app
  * allow `string`: JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app
  * access `string`: JSON array of data access requirements
  * approvalRequired `string`: False if updates should skip the approval process and be available immediately. Default is True

#### Output
*Output schema unknown*

### apps.appId.versions.version.status.post
Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change



```js
openchannel_market.apps.appId.versions.version.status.post({
  "appId": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App to be updated
  * version **required** `integer`: The version of the App to be updated
  * developerId `string`: The unique id of the developer that is modifying this app
  * status `string` (values: inReview, approved, suspended, rejected): The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'
  * modifiedBy `string` (values: developer, administrator): The role initiating this status change. Can be either 'developer' or 'administrator' (default)
  * reason `string`: The reason for this status change

#### Output
*Output schema unknown*

### custom_gateway.payment.ownershipId.post
- Results are returned for the market provided within the basic authentication credentials 
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint



```js
openchannel_market.custom_gateway.payment.ownershipId.post({
  "ownershipId": "",
  "amount": 0
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id of the ownership record involved in this transaction
  * amount **required** `integer`: The total amount paid in cents
  * date `integer`: The date (in milliseconds) of when this payment was made
  * feeAmount `integer`: The fee (in cents) paid to a payment processors or third parties to process this payment. Default is 0.
  * marketplaceAmount `integer`: The amount (in cents) paid to the marketplace owner as a commission for the purchase of this app. Defaults based on the commission amount configured for this marketplace.
  * developerAmount `integer`: The amount (in cents) paid to the owner of the app. Defaults based on the commission amount configured for this marketplace.
  * customData `string`: A custom JSON object to attach to this transaction

#### Output
*Output schema unknown*

### custom_gateway.refund.ownershipId.post
- Results are returned for the market provided within the basic authentication credentials
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint



```js
openchannel_market.custom_gateway.refund.ownershipId.post({
  "ownershipId": "",
  "amount": 0
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id of the ownership record involved in this transaction
  * amount **required** `integer`: The total amount refunded in cents
  * date `integer`: The date (in milliseconds) of when this refund was made
  * feeAmount `integer`: The fee (in cents) recovered from a payment processor or third party to process this payment. The default value is 0
  * marketplaceAmount `integer`: The amount (in cents) recovered from the marketplace owner as a commission refund for the purchase of this app
  * developerAmount `integer`: The amount (in cents) recovered from the owner of the app
  * customData `string`: A custom JSON object to attach to this transaction

#### Output
*Output schema unknown*

### developerAccounts.get
- Results are paginated and the default is value is 1000 if no limit is provided



```js
openchannel_market.developerAccounts.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'NASA'} matches all the developerAccounts that have the name 'NASA'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### developerAccounts.developerAccountId.delete
Removes the developer account


```js
openchannel_market.developerAccounts.developerAccountId.delete({
  "developerAccountId": ""
}, context)
```

#### Input
* input `object`
  * developerAccountId **required** `string`: The id of the developer account to be updated

#### Output
*Output schema unknown*

### developerAccounts.developerAccountId.get
Returns a single developer account


```js
openchannel_market.developerAccounts.developerAccountId.get({
  "developerAccountId": ""
}, context)
```

#### Input
* input `object`
  * developerAccountId **required** `string`: The id of the developer account to be located

#### Output
*Output schema unknown*

### developerAccounts.developerAccountId.patch
Updates the developer account fields


```js
openchannel_market.developerAccounts.developerAccountId.patch({
  "developerAccountId": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerAccountId **required** `string`: The id of the developer account to be updated
  * developerId **required** `string`: The id of the developer that this account belongs to
  * email `string`: The contact email address
  * name `string`: The name for the account
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### developerAccounts.developerAccountId.post
Updates the developer account or adds the developer account if it doesn't exist


```js
openchannel_market.developerAccounts.developerAccountId.post({
  "developerAccountId": "",
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerAccountId **required** `string`: The id of the developer account to be updated
  * developerId **required** `string`: The id of the developer that this account belongs to
  * email `string`: The contact email address
  * name `string`: The name for the account
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### developers.get
- Results are paginated and the default is value is 100 if no limit is provided



```js
openchannel_market.developers.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'John'} matches all the developers that have the name 'John'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### developers.developerId.delete
Removes a single developer


```js
openchannel_market.developers.developerId.delete({
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer to be removed

#### Output
*Output schema unknown*

### developers.developerId.get
Returns a single developer


```js
openchannel_market.developers.developerId.get({
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer to be located

#### Output
*Output schema unknown*

### developers.developerId.patch
Updates the developer fields


```js
openchannel_market.developers.developerId.patch({
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer to be located
  * type `string`: The type for this developer
  * email `string`: The developer's email
  * username `string`: The developer's username
  * name `string`: The developer's name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### developers.developerId.post
Updates the developer record or adds the developer if it doesn't exist


```js
openchannel_market.developers.developerId.post({
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer to be located
  * type `string`: The type for this developer
  * email `string`: The developer's email
  * username `string`: The developer's username
  * name `string`: The developer's name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### events.eventId.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.events.eventId.get({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The id of the event

#### Output
*Output schema unknown*

### files.get
Returns a paginated list of files


```js
openchannel_market.files.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'file.txt'} matches all the files that have the name 'file.txt'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### files.post
- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
- This method is called on behalf of a developer.



```js
openchannel_market.files.post({
  "file": ""
}, context)
```

#### Input
* input `object`
  * isPrivate `boolean`: If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.
  * hash `string`: A comma separated list of hashes to return in order to verify file integrity.
  * file **required** `string`: The file to be uploaded

#### Output
*Output schema unknown*

### files.byIdOrUrl.get
Get the details for a file.


```js
openchannel_market.files.byIdOrUrl.get({
  "fileIdOrUrl": ""
}, context)
```

#### Input
* input `object`
  * fileIdOrUrl **required** `string`: The fileId or fileUrl of the file to be returned

#### Output
*Output schema unknown*

### files.download.get
A signed URL for downloading a private file can be returned by providing the fileId.


```js
openchannel_market.files.download.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The URL of the file to be uploaded
  * validSeconds `integer`: The number of seconds that this signed URL should be valid for. The default is 60.

#### Output
*Output schema unknown*

### files.url.post
- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
- This method is called on behalf of a developer.



```js
openchannel_market.files.url.post({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the file to be uploaded
  * isPrivate `boolean`: If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.

#### Output
*Output schema unknown*

### markets.this.get
Returns the current marketplace


```js
openchannel_market.markets.this.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### ownership.get
 - Results are returned for the market provided within the basic authentication credentials 


```js
openchannel_market.ownership.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'userId':'12'} matches all the ownership records that have the userId '12'.
  * sort `string`: A sort document. Example: {'date':1} sorts the results by date in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### ownership.install.post
 - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 


```js
openchannel_market.ownership.install.post({
  "appId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App being owned
  * userId **required** `string`: The id of the User requesting to own the App
  * modelId `string`: The id of the model associated with this ownership request
  * model `string`: A custom model that will override the app's default model for this install
  * customData `string`: A custom JSON object to attach to this ownership record

#### Output
*Output schema unknown*

### ownership.uninstall.ownershipId.post
 - This method is called on behalf of a user - User data and statistics are recorded when this method is called 


```js
openchannel_market.ownership.uninstall.ownershipId.post({
  "ownershipId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id of the ownership to be unintalled
  * userId **required** `string`: The id of the User requesting to uninstall the App
  * cancelOwnership `boolean`: True if this app will require payment to be re-installed. Default is false
  * customData `string`: A custom JSON object to attach to this ownership record

#### Output
*Output schema unknown*

### ownership.ownershipId.get
 - Results are returned for the market provided within the basic authentication credentials 


```js
openchannel_market.ownership.ownershipId.get({
  "ownershipId": ""
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id belonging to the ownership record

#### Output
*Output schema unknown*

### ownership.ownershipId.patch
 - Results are returned for the market provided within the basic authentication credentials 


```js
openchannel_market.ownership.ownershipId.patch({
  "ownershipId": ""
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id of the ownership to be updated
  * customData `string`: Custom JSON object that will be attached to this ownership record
  * expires `integer`: The date (in millis) of when this app ownership expires

#### Output
*Output schema unknown*

### ownership.ownershipId.post
 - Results are returned for the market provided within the basic authentication credentials 


```js
openchannel_market.ownership.ownershipId.post({
  "ownershipId": ""
}, context)
```

#### Input
* input `object`
  * ownershipId **required** `string`: The id of the ownership to be updated
  * customData `string`: Custom JSON object that will be attached to this ownership record
  * expires `integer`: The date (in millis) of when this app ownership expires

#### Output
*Output schema unknown*

### permission.apps.appId.delete
Removes permission that allows the app to access this user's data


```js
openchannel_market.permission.apps.appId.delete({
  "appId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the app
  * userId **required** `string`: The id of the user

#### Output
*Output schema unknown*

### permission.apps.appId.get
Returns permission that allows the app to access this user's data


```js
openchannel_market.permission.apps.appId.get({
  "appId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the app
  * userId **required** `string`: The id of the user

#### Output
*Output schema unknown*

### permission.apps.appId.post
Adds permission to allow the app to access this user's data


```js
openchannel_market.permission.apps.appId.post({
  "appId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the app
  * userId **required** `string`: The id of the user
  * date `integer`: The time (in milliseconds) of when the user agreed to the access request
  * ip `string`: The ip address of the user agreeing to the access request

#### Output
*Output schema unknown*

### reviews.get
- Results are paginated and the default is value is 100 if no limit is provided



```js
openchannel_market.reviews.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'rating': 500} matches all the reviews that have a rating of 500. 
  * sort `string`: A sort document. Example: {'rating':1} sorts the results by rating in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### reviews.post
- Only authenticated users are able to post reviews
- Returns the newly created review



```js
openchannel_market.reviews.post({
  "appId": "",
  "userId": "",
  "headline": "",
  "rating": 0,
  "description": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the App that will own this review
  * userId **required** `string`: The id of the User that is posting this review
  * userAccountId `string`: The id of the User account that is posting this review
  * headline **required** `string`: The review's headline. Limited to 50 characters.
  * rating **required** `integer`: The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
  * description **required** `string`: The review's description. Limited to 2000 characters.
  * type `string`: The type for this review
  * mustOwnApp `boolean`: True if a review can be created only by a user that has owned the app. The default is True.
  * autoApprove `boolean`: True if the review should be automatically approved. The default is False.
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### reviews.reviewId.delete
- Only the review author is able to remove their review



```js
openchannel_market.reviews.reviewId.delete({
  "reviewId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`: The id of the Review to be updated
  * userId **required** `string`: The id of the User that is removing this review
  * userAccountId `string`: The id of the User account that is emoving this review

#### Output
*Output schema unknown*

### reviews.reviewId.get
Find a Review within a particular App and marketplace


```js
openchannel_market.reviews.reviewId.get({
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`: The id of the review to be located

#### Output
*Output schema unknown*

### reviews.reviewId.patch
- Only the review author is able to update their review
- Returns the newly updated review



```js
openchannel_market.reviews.reviewId.patch({
  "reviewId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`: The id of the Review to be updated
  * userId **required** `string`: The id of the User that is updating this review
  * userAccountId `string`: The id of the User account that is posting this review
  * headline `string`: The review's headline. Limited to 50 characters.
  * rating `integer`: The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
  * description `string`: The review's description. Limited to 2000 characters.
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### reviews.reviewId.post
- Only the review author is able to update their review
- Returns the newly updated review



```js
openchannel_market.reviews.reviewId.post({
  "reviewId": "",
  "userId": "",
  "userAccountId": "",
  "headline": "",
  "rating": 0,
  "description": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`: The id of the Review to be updated
  * userId **required** `string`: The id of the User that is updating this review
  * userAccountId **required** `string`: The id of the User account that is posting this review
  * headline **required** `string`: The review's headline. Limited to 50 characters.
  * rating **required** `integer`: The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
  * description **required** `string`: The review's description. Limited to 2000 characters.
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### stats.increment.field.post
increment a statistics field


```js
openchannel_market.stats.increment.field.post({
  "field": "",
  "appId": ""
}, context)
```

#### Input
* input `object`
  * field **required** `string`: The field to be incremented
  * appId **required** `string`: The id of the app associated with this statistic value
  * userId `string`: The id of the user that is performing the action
  * value `integer`: The increment amount. Default is 1 if no value is provided.
  * date `integer`: The date (in millis) for when this increment occurred. The default is the current date if no value is provided.

#### Output
*Output schema unknown*

### stats.series.period.fields.get
Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]


```js
openchannel_market.stats.series.period.fields.get({
  "period": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * period **required** `string` (values: day, month): The period for the series (day or month)
  * fields **required** `string`: The field to be graphed. This also be a comma separated list of fields and the result will be a single timeseries containing the sum of all fields.
  * start `integer`: The start date for this series (in millis)
  * end `integer`: The end date for this series (in millis)
  * query `string`: A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112

#### Output
* output `array`
  * items `array`
    * items `object`

### stats.total.get
Returns the total number of events for a particular field.


```js
openchannel_market.stats.total.get({
  "fields": ""
}, context)
```

#### Input
* input `object`
  * fields **required** `string`: A comma seperated list of all the fields to be returned in the total (available by default: dislikes, likes, reviews, totalSales, developerSales, marketplaceSales, downloads, ownerships, views)
  * query `string`: A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112
  * start `integer`: The start date for this total (in millis)
  * end `integer`: The end date for this total (in millis)

#### Output
* output [Total](#total)

### stripe_gateway.developer.developerId.accounts.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.stripe_gateway.developer.developerId.accounts.get({
  "developerId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer connecting their Stripe account

#### Output
*Output schema unknown*

### stripe_gateway.developer.developerId.accounts.post
- Results are returned for the market provided within the basic authentication credentials 
- The URL generated by this method is only valid for 48 hours.



```js
openchannel_market.stripe_gateway.developer.developerId.accounts.post({
  "developerId": "",
  "redirectUrl": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer connecting their Stripe account
  * redirectUrl **required** `string`: The URL to redirect this developer after they have connected their Stripe account

#### Output
*Output schema unknown*

### stripe_gateway.developer.developerId.accounts.stripeId.delete

- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.stripe_gateway.developer.developerId.accounts.stripeId.delete({
  "developerId": "",
  "stripeId": ""
}, context)
```

#### Input
* input `object`
  * developerId **required** `string`: The id of the developer disconnecting their Stripe account
  * stripeId **required** `string`: The id of the stripe account to disconnect

#### Output
*Output schema unknown*

### stripe_gateway.user.userId.cards.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.stripe_gateway.user.userId.cards.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user requesting their credit cards

#### Output
*Output schema unknown*

### stripe_gateway.user.userId.cards.post
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.stripe_gateway.user.userId.cards.post({
  "userId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user adding their credit card
  * token **required** `string`: The Stripe token returned by the Stripe.js Stripe.card.createToken call
  * isDefault `boolean`: Set to true if this should be set to be the default credit card

#### Output
*Output schema unknown*

### stripe_gateway.user.userId.cards.cardId.delete
Removes a credit card for a user


```js
openchannel_market.stripe_gateway.user.userId.cards.cardId.delete({
  "userId": "",
  "cardId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user removing their credit card
  * cardId **required** `string`: The id of the credit card to remove

#### Output
*Output schema unknown*

### stripe_gateway.user.userId.cards.cardId.post

- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.stripe_gateway.user.userId.cards.cardId.post({
  "userId": "",
  "cardId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user adding their credit card
  * cardId **required** `string`: The id of the card to be updated
  * isDefault `boolean`: Set to true if this should be set to be the default credit card
  * address_city `string`: The card holder's city
  * address_country `string`: The card holder's country
  * address_line1 `string`: The card holder's street address
  * address_line2 `string`: The card holder's street address
  * address_state `string`: The card holder's city state/province
  * address_zip `string`: The card holder's zip/postal code

#### Output
*Output schema unknown*

### transactions.get
- Results are paginated and the default is value is 100 if no limit is provided



```js
openchannel_market.transactions.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'userId':'1'} matches all the transactions that have the userId '1'.
  * sort `string`: A sort document. Example: {'date':1} sorts the results by total in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### transactions.transactionId.delete
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.transactions.transactionId.delete({
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * transactionId **required** `string`: The id of the transaction to be deleted

#### Output
*Output schema unknown*

### transactions.transactionId.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.transactions.transactionId.get({
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * transactionId **required** `string`: The id of the transaction to return

#### Output
*Output schema unknown*

### transactions.transactionId.post
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.transactions.transactionId.post({
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * transactionId **required** `string`: The id of the transaction to be updated
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### userAccounts.get
- Results are paginated and the default is value is 1000 if no limit is provided



```js
openchannel_market.userAccounts.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'NASA'} matches all the userAccounts that have the name 'NASA'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### userAccounts.userAccountId.delete
Removes the user account


```js
openchannel_market.userAccounts.userAccountId.delete({
  "userAccountId": ""
}, context)
```

#### Input
* input `object`
  * userAccountId **required** `string`: The id of the user account to be removed

#### Output
*Output schema unknown*

### userAccounts.userAccountId.get
Returns a single user account


```js
openchannel_market.userAccounts.userAccountId.get({
  "userAccountId": ""
}, context)
```

#### Input
* input `object`
  * userAccountId **required** `string`: The id of the user account to be located

#### Output
*Output schema unknown*

### userAccounts.userAccountId.patch
Updates the user account fields


```js
openchannel_market.userAccounts.userAccountId.patch({
  "userAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userAccountId **required** `string`: The id of the user account to be updated
  * userId **required** `string`: The Id of the user that this account belongs to
  * email `string`: The contact email address
  * name `string`: The user account name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### userAccounts.userAccountId.post
Updates the user account or adds the user account if it doesn't exist


```js
openchannel_market.userAccounts.userAccountId.post({
  "userAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userAccountId **required** `string`: The id of the user account to be updated
  * userId **required** `string`: The Id of the user that this account belongs to
  * email `string`: The contact email address
  * name `string`: The user account name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### users.get
- Results are paginated and the default is value is 100 if no limit is provided



```js
openchannel_market.users.get({}, context)
```

#### Input
* input `object`
  * query `string`: A query document. Example: {'name':'John'} matches all the users that have the name 'John'
  * sort `string`: A sort document. Example: {'name':1} sorts the results by name in ascending order
  * pageNumber `integer`: The result set page number to be returned
  * limit `integer`: The maximum number of results to return per page

#### Output
*Output schema unknown*

### users.userId.delete
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.users.userId.delete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user to be removed

#### Output
*Output schema unknown*

### users.userId.get
- Results are returned for the market provided within the basic authentication credentials



```js
openchannel_market.users.userId.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user to be located

#### Output
*Output schema unknown*

### users.userId.patch
Updates user fields


```js
openchannel_market.users.userId.patch({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user to be updated
  * type `string`: The type for this user
  * email `string`: The user's email
  * username `string`: The user's username
  * name `string`: The user's name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*

### users.userId.post
Updates a single user or adds the user if they don't exist


```js
openchannel_market.users.userId.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user to be updated
  * type `string`: The type for this user
  * email `string`: The user's email
  * username `string`: The user's username
  * name `string`: The user's name
  * customData `string`: A custom JSON object that you can create and attach to this record

#### Output
*Output schema unknown*



## Definitions

### Access
* Access `object`
  * access **required** `array`: The approved access restrictions for this app
    * items `string`
  * appId **required** `string`: The id of the app that owns this access key
  * date **required** `integer`: The time (in milliseconds) of when the user agreed to the access request
  * ip **required** `string`: The ip address of the user agreeing to the access request
  * isValid **required** `boolean`: True if this access is up to date with the current version of the app
  * userId **required** `string`: The id for this user

### Account
* Account `object`: The connected Stripe account for a developer
  * accountName **required** `string`: The name of the Stripe account
  * country **required** `string`: The country for this Stripe account
  * defaultCurrency **required** `string`: The default currency for this Stripe account
  * stripeId **required** `string`: The id of the Stripe account

### Accounts
* Accounts `object`: A developer's connected Stripe accounts
  * accounts **required** `array`: An array of connected Stripe accounts
    * items [Account](#account)
  * developerId **required** `string`: The id of the developer

### App
* App `object`: An app
  * access `array`: A custom defined list of access requirements
    * items `string`
  * allow **required** [Restrictions](#restrictions)
  * appId **required** `string`: The id of this app
  * attributes **required** `object`: A custom defined list of app attributes
  * created **required** `integer`: The date (in millis) that this app was created
  * customData **required** `object`: A custom JSON object that you can create and attach to this record
  * developerId **required** `string`: The id of the developer that owns this app
  * isLive **required** `boolean`: True if this is the live version of the app
  * lastUpdated **required** `integer`: The date (in millis) that this app was last modified
  * model **required** `array`: The models that describes the cost and pricing for this app
    * items [Model](#model)
  * name **required** `string`: The name of this app
  * ownership [Ownership](#ownership)
  * randomize **required** `integer`: A random number that changes hourly and is used for achieving a random sort order when displaying apps
  * rating **required** `integer`: The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
  * restrict **required** [Restrictions](#restrictions)
  * reviewCount `integer`: The number of approved reviews for this app.
  * safeName **required** `array`: URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
    * items `string`
  * statistics `object`: A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity
  * status **required** [Status](#status)
  * submittedDate `integer`: The date (in millis) that this app was submitted for approval
  * type `string`: The type for this app
  * version **required** `integer`: The version number for this app

### AppPages
* AppPages `object`: Pages of app results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of apps for the current page
    * items [App](#app)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### AppTotal
* AppTotal `object`: The totals for the app
  * $appId **required** [DataTotal](#datatotal)

### AppVersion
* AppVersion `object`: An AppVersion
  * access `array`: A custom defined list of access requirements
    * items `string`
  * allow **required** [Restrictions](#restrictions)
  * appId **required** `string`: The id of this app
  * attributes `object`: A custom defined list of app attributes
  * created **required** `integer`: The date (in millis) that this app was created
  * customData **required** `object`: A custom JSON object that you can create and attach to this record
  * developerId **required** `string`: The id of the developer that owns this app
  * isLatestVersion **required** `boolean`: True if this is the latest version of this app
  * isLive **required** `boolean`: True if this is the live version of the app
  * lastUpdated **required** `integer`: The date (in millis) that this app was last modified
  * model **required** `array`: The models that describes the cost and pricing for this app
    * items [Model](#model)
  * name **required** `string`: The name of this app
  * parent **required** [Parent](#parent)
  * rating `integer`: The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
  * restrict **required** [Restrictions](#restrictions)
  * reviewCount `integer`: The number of approved reviews for this app.
  * safeName **required** `array`: URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
    * items `string`
  * status **required** [Status](#status)
  * type `string`: The type for this app
  * version **required** `integer`: The version number for this app

### App_Entry
* App_Entry `object`
  * appId **required** `string`: The id of the app involved in this action
  * date **required** `integer`: The date (in millis) of when this action was performed

### Attributes
* Attributes `object`: An app attribute
  * name **required** `string`: The name of this attribute
  * type **required** `string` (values: text, select, multi): The type of this attribute
  * values `string`: A comma seperated list of values allowed for this attribute

### Card
* Card `object`
  * address_city `string`: The card holder's city
  * address_country `string`: The card holder's country
  * address_line1 `string`: The card holder's street address
  * address_line2 `string`: The card holder's street address
  * address_state `string`: The card holder's city state/province
  * address_zip `string`: The card holder's zip/postal code
  * brand **required** `string`: The brand of the credit card. Example: Visa
  * cardId **required** `string`: The id for this credit card
  * exp_month **required** `integer`: The two digit expiration month
  * exp_year **required** `integer`: The four digit expiration year
  * isDefault **required** `boolean`: True if this is the default credit card
  * last4 **required** `string`: The last 4 digits of the credit card number
  * name **required** `string`: The card holder's full name

### Cards
* Cards `object`: A User's credit card details
  * cards **required** `array`: An array of credit cards added by this user
    * items [Card](#card)
  * userId **required** `string`: The id of this user

### Category
* Category `object`: The category supported by this category group
  * description **required** `string`: The description of this category
  * name **required** `string`: The name of this category

### CategoryGroups
* CategoryGroups `object`: The category groups supported by this marketplace
  * categories **required** `array`: The categories supported by this category group
    * items [Category](#category)
  * name **required** `string`: The name of this category group

### DataTotal
* DataTotal `object`: The totals for the field
  * $field `integer`: The totals for the field

### Developer
* Developer `object`: A Developer
  * created **required** `integer`: The time (in millis) of when this developer was created
  * customData `object`: A custom JSON object that you can create and attach to this record
  * developerId **required** `string`: The id of this developer
  * email `string`: The developer's email
  * name `string`: The developer's name
  * type `string`: The type for this developer

### DeveloperAccount
* DeveloperAccount `object`: A Developer Account
  * customData `object`: A custom JSON object that you can create and attach to this record
  * developerAccountId **required** `string`: The id of this developer account
  * developerId **required** `string`: The id of the developer that this account belongs to
  * email `string`: The contact email address
  * name `string`: The name for the account

### DeveloperAccountPages
* DeveloperAccountPages `object`: Pages of developerAccount results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of developerAccounts for the current page
    * items [DeveloperAccount](#developeraccount)
  * pageNumber **required** `integer`: The current page number for this result set
  * pages **required** `integer`: The total number of pages available for this result set

### DeveloperPages
* DeveloperPages `object`: Pages of developer results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of developers for the current page
    * items [Developer](#developer)
  * pageNumber **required** `integer`: The current page number for this result set
  * pages **required** `integer`: The total number of pages available for this result set

### DeveloperToken
* DeveloperToken `object`
  * developerId **required** `string`: The id of the developer connecting their Stripe account
  * expires **required** `integer`: The time (in milliseconds) when this URL expires
  * targetUrl **required** `string`: The URL that this developer can use to connect their Stripe account

### Event
* Event `object`
  * app [App](#app)
  * createdDate **required** `integer`: The date (in millis) of when this event occurred
  * description `string`: A description of the event
  * developer [Developer](#developer)
  * eventId **required** `string`: The id of the event
  * eventType **required** `string` (values: app.submitted, app.approved, app.suspended, app.unsuspended, app.rejected, app.inReview, app.installed, app.uninstalled, review.created, review.updated, review.approved, review.spam, review.removed, user.created, user.updated, user.removed, user.invalidPaymentDetails, user.paymentDetailsRequired, developer.created, developer.updated, developer.removed, developer.paymentDetailsRequired, permission.added, permission.removed, payment.complete, payment.refunded, payment.required, ownership.expired): The current event type
  * marketplaceId **required** `string`: The id of the marketplace that owns this event
  * ownership [Ownership](#ownership)
  * review [Review](#review)
  * transaction [Transaction](#transaction)
  * user [User](#user)

### File
* File `object`: The file ids of the uploaded file
  * contentType `string`: The internet media type of the file
  * fileId **required** `string`: The id of the uploaded file
  * fileUrl `string`: The path where the file can be located.
  * hash [Hash](#hash)
  * mimeCheck `string` (values: PASSED, FAILED): The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED
  * name **required** `string`: The name of the uploaded file
  * size **required** `integer`: The number of bytes in the uploaded file
  * uploadDate **required** `integer`: The time in milliseconds when the file was uploaded
  * virusScan [VirusScan](#virusscan)

### FileDownload
* FileDownload `object`: The signed URL for downloading a private file
  * url **required** `string`: The signed URL for downloading a private file

### File_Pages
* File_Pages `object`: Pages of file results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of users for the current page
    * items [File](#file)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### FoundVirus
* FoundVirus `object`: The virus found within this file
  * fileName `string`: The name of the file
  * virusName `string`: The name of the virus

### Hash
* Hash `object`: The hashes requested for the file.
  * MD5 `string`: The MD5 hash for this uploaded file.
  * SHA-1 `string`: The SHA-1 hash for this uploaded file.
  * SHA-256 `string`: The SHA-256 hash for this uploaded file.

### Market
* Market `object`: A marketplace
  * attributes **required** `array`: The different app attributes supported by this marketplace
    * items [Attributes](#attributes)
  * categoryGroups `array`: The category groups supported by this marketplace
    * items [CategoryGroups](#categorygroups)
  * marketplaceId **required** `string`: The id of this marketplace
  * previewAppUrl **required** `string`: The URL template for previewing apps on this marketplace
  * viewAppUrl **required** `string`: The URL template for viewing apps on this marketplace

### Market_Pages
* Market_Pages `object`: Pages of marketplace results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of markets for the current page
    * items [Market](#market)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### Model
* Model `object`: The model that describes the cost and pricing for apps
  * billingPeriod `string` (values: daily, weekly, monthly, annually): The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
  * billingPeriodUnit `integer`: The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
  * commission **required** `integer`: The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent
  * currency **required** `string`: The ISO 4217 currency code for this price
  * customData `object`: A custom JSON object that you can create and attach to this record
  * feePayer **required** `string` (values: developer, marketplace): The payee that will be paying for any payment processing fees
  * license **required** `string` (values: single): The license model type. Single allows a purchase to a single user or organization
  * modelId `string`: The id that uniquely identifies this model
  * price **required** `integer`: The price of this app in cents
  * subtype `string` (values: usage, seat): The pricing model subtype
  * trial **required** `integer`: The maximum number of free trial days available
  * type **required** `string` (values: free, single, recurring): The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription

### Ownership
* Ownership `object`
  * appId **required** `string`: The id of the app that is owned
  * customData `object`: A custom JSON object that you can create and attach to this record
  * date **required** `integer`: The date (in millis) of when this app was owned
  * developerId **required** `string`: The id of the developer for this app
  * expires `integer`: The date (in millis) of when this app ownership expires
  * model **required** [Model](#model)
  * ownershipId **required** `string`: The id of this ownership
  * ownershipStatus **required** `string` (values: pending, active, uninstalled, cancelled): The current ownership status for this app
  * ownershipType **required** `string` (values: full, subscription, trial): The current ownership type for this app
  * uninstallDate `integer`: The date (in millis) of when this app was uninstalled
  * userId **required** `string`: The id of the user that owns this app

### OwnershipPages
* OwnershipPages `object`: Pages of ownership results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of ownership records for the current page
    * items [Ownership](#ownership)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### Parent
* Parent `object`: Details of the live version of this app
  * status [Status](#status)

### Profanity
* Profanity `object`: Profanity found in this review
  * end **required** `integer`: The ending location of the profanity
  * start **required** `integer`: The starting location of the profanity
  * word **required** `string`: The profane word

### Restrictions
* Restrictions `object`: Resticts users from accessing this app
  * own `object`: A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']}
  * view `object`: A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']}

### Revenue
* Revenue `object`: The revenue generated by this app
  * developer **required** `integer`: The total revenue generated for the developer by this app in cents
  * total **required** `integer`: The total revenue generated by this app in cents

### Review
* Review `object`: A Review
  * appId **required** `string`: The Id of the App that owns this review
  * customData **required** `string`: A custom JSON object that you can create and attach to this record
  * description **required** `string`: The review's description. Limited to 2000 characters.
  * headline **required** `string`: The review's headline. Limited to 50 characters.
  * rating **required** `integer`: The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)
  * reportDate **required** `integer`: The date (in millis) this Review was posted
  * reviewId **required** `string`: The id for this review.
  * status **required** [Status](#status)
  * type `string`: The type for this review
  * user [User](#user)
  * userAccount [UserAccount](#useraccount)
  * userAccountId `string`: The id of the user account that posted this review
  * userId **required** `string`: The id of the User that posted this review

### ReviewPages
* ReviewPages `object`: Pages of review results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of reviews for the current page
    * items [Review](#review)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### Review_Entry
* Review_Entry `object`
  * date **required** `integer`: The date (in millis) of when this action was performed
  * reviewId **required** `string`: The id of the review involved in this action

### SearchPages
* SearchPages `object`: Pages of search results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of results for the current page
    * items [App](#app)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### Stat
* Stat `object`: The statistic value
  * value **required** `integer`: The statistic value

### Status
* Status `object`: The current status of this review
  * profanity **required** `array`: A list of profanity found in this review
    * items [Profanity](#profanity)
  * reason **required** `string` (values: profanity, spam): Text describing the reason for the current status
  * value **required** `string` (values: pending, spam, flagged, approved): The current status value

### Total
* Total `object`: The total number of events for a particular field
  * apps **required** [AppTotal](#apptotal)
  * end `integer`: The end date for this total (in millis)
  * start `integer`: The start date for this total (in millis)
  * totals **required** [DataTotal](#datatotal)

### Transaction
* Transaction `object`: A transaction for an app initiated by a user
  * amount **required** `integer`: The total amount paid in cents
  * appId **required** `string`: The id of the app involved with this transaction
  * customData `object`: A custom JSON object that you can create and attach to this record
  * date **required** `integer`: The date (in millis) of when this transaction occurred
  * developerAmount `integer`: The total amount paid to the developer in cents
  * developerId **required** `string`: The id of the developer involved with this transaction
  * feeAmount `integer`: The total amount paid to payment processing fees in cents
  * marketplaceAmount `integer`: The total amount paid to the marketplace owner in cents
  * ownershipId **required** `string`: The id for the ownership associated with this transaction
  * transactionId **required** `string`: The id for this transaction
  * type **required** `string` (values: payment, refund): The type for this transaction
  * userId **required** `string`: The id of the user making the transaction

### TransactionPages
* TransactionPages `object`: Pages of transaction results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of paymnets for the current page
    * items [Transaction](#transaction)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### User
* User `object`: A User
  * created **required** `integer`: The date (in millis) of when this user was created
  * customData **required** `object`: A custom JSON object that you can create and attach to this record
  * email `string`: The user's email
  * name `string`: The user's name
  * type `string`: The type for this user
  * userId **required** `string`: The id of this user

### UserAccount
* UserAccount `object`: A User Account
  * customData `object`: A custom JSON object that you can create and attach to this record
  * email `string`: The contact email address
  * name `string`: The name for the account
  * userAccountId **required** `string`: The id of this user account
  * userId **required** `string`: The id of this user that this account belongs to

### UserAccountPages
* UserAccountPages `object`: Pages of userAccount results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of userAccounts for the current page
    * items [UserAccount](#useraccount)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### UserPages
* UserPages `object`: Pages of user results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of users for the current page
    * items [User](#user)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### VersionPages
* VersionPages `object`: Pages of AppVersion results
  * count **required** `integer`: The total number of results
  * list **required** `array`: An array of apps for the current page
    * items [AppVersion](#appversion)
  * pageNumber `integer`: The current page number for this result set
  * pages `integer`: The total number of pages available for this result set

### VirusScan
* VirusScan `object`: The virus scan results for this file
  * finished `integer`: The date (in milliseconds) when this file finished it's scan
  * foundViruses `array`: The list of viruses found in this file
    * items [FoundVirus](#foundvirus)
  * started `integer`: The date (in milliseconds) when this file started it's scan
  * status **required** `string`: The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY


