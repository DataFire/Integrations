# @datafire/azure_apimanagement_apimemailtemplates

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimemailtemplates
```
```js
let azure_apimanagement_apimemailtemplates = require('@datafire/azure_apimanagement_apimemailtemplates').create({
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

Use these REST APIs for performing operations on Email Templates associated with your Azure API Management deployment.

## Actions

### EmailTemplate_ListByService
Lists a collection of properties defined within a service instance.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged email template list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Email Template details.
      * properties `object`: Email Template Contract properties.
        * body **required** `string`: Email Template Body. This should be a valid XDocument
        * description `string`: Description of the Email Template.
        * isDefault `boolean`: Whether the template is the default template provided by Api Management or has been edited.
        * parameters `array`: Email Template Parameter values.
          * items `object`: Email Template Parameter contract.
        * subject **required** `string`: Subject of the Template.
        * title `string`: Title of the Template.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### EmailTemplate_Delete
Reset the Email Template to default template provided by the API Management service instance.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "templateName": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * templateName **required** `string` (values: applicationApprovedNotificationMessage, accountClosedDeveloper, quotaLimitApproachingDeveloperNotificationMessage, newDeveloperNotificationMessage, emailChangeIdentityDefault, inviteUserNotificationMessage, newCommentNotificationMessage, confirmSignUpIdentityDefault, newIssueNotificationMessage, purchaseDeveloperNotificationMessage, passwordResetIdentityDefault, passwordResetByAdminNotificationMessage, rejectDeveloperNotificationMessage, requestDeveloperNotificationMessage): Email Template Name Identifier.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EmailTemplate_Get
Gets the details of the email template specified by its identifier.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "templateName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * templateName **required** `string` (values: applicationApprovedNotificationMessage, accountClosedDeveloper, quotaLimitApproachingDeveloperNotificationMessage, newDeveloperNotificationMessage, emailChangeIdentityDefault, inviteUserNotificationMessage, newCommentNotificationMessage, confirmSignUpIdentityDefault, newIssueNotificationMessage, purchaseDeveloperNotificationMessage, passwordResetIdentityDefault, passwordResetByAdminNotificationMessage, rejectDeveloperNotificationMessage, requestDeveloperNotificationMessage): Email Template Name Identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Email Template details.
  * properties `object`: Email Template Contract properties.
    * body **required** `string`: Email Template Body. This should be a valid XDocument
    * description `string`: Description of the Email Template.
    * isDefault `boolean`: Whether the template is the default template provided by Api Management or has been edited.
    * parameters `array`: Email Template Parameter values.
      * items `object`: Email Template Parameter contract.
        * description `string`: Template parameter description.
        * name `string`: Template parameter name.
        * title `string`: Template parameter title.
    * subject **required** `string`: Subject of the Template.
    * title `string`: Title of the Template.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### EmailTemplate_GetEntityTag
Gets the entity state (Etag) version of the email template specified by its identifier.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "templateName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * templateName **required** `string` (values: applicationApprovedNotificationMessage, accountClosedDeveloper, quotaLimitApproachingDeveloperNotificationMessage, newDeveloperNotificationMessage, emailChangeIdentityDefault, inviteUserNotificationMessage, newCommentNotificationMessage, confirmSignUpIdentityDefault, newIssueNotificationMessage, purchaseDeveloperNotificationMessage, passwordResetIdentityDefault, passwordResetByAdminNotificationMessage, rejectDeveloperNotificationMessage, requestDeveloperNotificationMessage): Email Template Name Identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EmailTemplate_Update
Updates the specific Email Template.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "templateName": "",
  "parameters": null,
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * templateName **required** `string` (values: applicationApprovedNotificationMessage, accountClosedDeveloper, quotaLimitApproachingDeveloperNotificationMessage, newDeveloperNotificationMessage, emailChangeIdentityDefault, inviteUserNotificationMessage, newCommentNotificationMessage, confirmSignUpIdentityDefault, newIssueNotificationMessage, purchaseDeveloperNotificationMessage, passwordResetIdentityDefault, passwordResetByAdminNotificationMessage, rejectDeveloperNotificationMessage, requestDeveloperNotificationMessage): Email Template Name Identifier.
  * parameters **required** `object`: Email Template update Parameters.
    * properties `object`: Email Template Update Contract properties.
      * body `string`: Email Template Body. This should be a valid XDocument
      * description `string`: Description of the Email Template.
      * parameters `array`: Email Template Parameter values.
        * items `object`: Email Template Parameter contract.
          * description `string`: Template parameter description.
          * name `string`: Template parameter name.
          * title `string`: Template parameter title.
      * subject `string`: Subject of the Template.
      * title `string`: Title of the Template.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EmailTemplate_CreateOrUpdate
Updates an Email Template.


```js
azure_apimanagement_apimemailtemplates.EmailTemplate_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "templateName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * templateName **required** `string` (values: applicationApprovedNotificationMessage, accountClosedDeveloper, quotaLimitApproachingDeveloperNotificationMessage, newDeveloperNotificationMessage, emailChangeIdentityDefault, inviteUserNotificationMessage, newCommentNotificationMessage, confirmSignUpIdentityDefault, newIssueNotificationMessage, purchaseDeveloperNotificationMessage, passwordResetIdentityDefault, passwordResetByAdminNotificationMessage, rejectDeveloperNotificationMessage, requestDeveloperNotificationMessage): Email Template Name Identifier.
  * parameters **required** `object`: Email Template update Parameters.
    * properties `object`: Email Template Update Contract properties.
      * body `string`: Email Template Body. This should be a valid XDocument
      * description `string`: Description of the Email Template.
      * parameters `array`: Email Template Parameter values.
        * items `object`: Email Template Parameter contract.
          * description `string`: Template parameter description.
          * name `string`: Template parameter name.
          * title `string`: Template parameter title.
      * subject `string`: Subject of the Template.
      * title `string`: Title of the Template.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Email Template details.
  * properties `object`: Email Template Contract properties.
    * body **required** `string`: Email Template Body. This should be a valid XDocument
    * description `string`: Description of the Email Template.
    * isDefault `boolean`: Whether the template is the default template provided by Api Management or has been edited.
    * parameters `array`: Email Template Parameter values.
      * items `object`: Email Template Parameter contract.
        * description `string`: Template parameter description.
        * name `string`: Template parameter name.
        * title `string`: Template parameter title.
    * subject **required** `string`: Subject of the Template.
    * title `string`: Title of the Template.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
