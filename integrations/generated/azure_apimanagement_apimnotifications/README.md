# @datafire/azure_apimanagement_apimnotifications

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimnotifications
```
```js
let azure_apimanagement_apimnotifications = require('@datafire/azure_apimanagement_apimnotifications').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimnotifications.Notification_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on who is going to receive notifications associated with your Azure API Management deployment.

## Actions

### Notification_ListByService
Lists a collection of properties defined within a service instance.


```js
azure_apimanagement_apimnotifications.Notification_ListByService({
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
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationCollection](#notificationcollection)

### Notification_Get
Gets the details of the Notification specified by its identifier.


```js
azure_apimanagement_apimnotifications.Notification_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationContract](#notificationcontract)

### Notification_CreateOrUpdate
Updates an Notification.


```js
azure_apimanagement_apimnotifications.Notification_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationContract](#notificationcontract)

### NotificationRecipientEmail_ListByNotification
Gets the list of the Notification Recipient Emails subscribed to a notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientEmail_ListByNotification({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecipientEmailCollection](#recipientemailcollection)

### NotificationRecipientEmail_Delete
Removes the email from the list of Notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientEmail_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "email": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * email **required** `string`: Email identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationRecipientEmail_CheckEntityExists
Determine if Notification Recipient Email subscribed to the notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientEmail_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "email": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * email **required** `string`: Email identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationRecipientEmail_CreateOrUpdate
Adds the Email address to the list of Recipients for the Notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientEmail_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "email": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * email **required** `string`: Email identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecipientEmailContract](#recipientemailcontract)

### NotificationRecipientUser_ListByNotification
Gets the list of the Notification Recipient User subscribed to the notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientUser_ListByNotification({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecipientUserCollection](#recipientusercollection)

### NotificationRecipientUser_Delete
Removes the API Management user from the list of Notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientUser_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationRecipientUser_CheckEntityExists
Determine if the Notification Recipient User is subscribed to the notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientUser_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationRecipientUser_CreateOrUpdate
Adds the API Management User to the list of Recipients for the Notification.


```js
azure_apimanagement_apimnotifications.NotificationRecipientUser_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "notificationName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * notificationName **required** `string` (values: RequestPublisherNotificationMessage, PurchasePublisherNotificationMessage, NewApplicationNotificationMessage, BCC, NewIssuePublisherNotificationMessage, AccountClosedPublisher, QuotaLimitApproachingPublisherNotificationMessage): Notification Name Identifier.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecipientUserContract](#recipientusercontract)



## Definitions

### NotificationCollection
* NotificationCollection `object`: Paged Notification list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [NotificationContract](#notificationcontract)

### NotificationContract
* NotificationContract `object`: Notification details.
  * properties [NotificationContractProperties](#notificationcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### NotificationContractProperties
* NotificationContractProperties `object`: Notification Contract properties.
  * description `string`: Description of the Notification.
  * recipients [RecipientsContractProperties](#recipientscontractproperties)
  * title **required** `string`: Title of the Notification.

### RecipientEmailCollection
* RecipientEmailCollection `object`: Paged Recipient User list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [RecipientEmailContract](#recipientemailcontract)

### RecipientEmailContract
* RecipientEmailContract `object`: Recipient Email details.
  * properties [RecipientEmailContractProperties](#recipientemailcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### RecipientEmailContractProperties
* RecipientEmailContractProperties `object`: Recipient Email Contract Properties.
  * email `string`: User Email subscribed to notification.

### RecipientUserCollection
* RecipientUserCollection `object`: Paged Recipient User list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [RecipientUserContract](#recipientusercontract)

### RecipientUserContract
* RecipientUserContract `object`: Recipient User details.
  * properties [RecipientUsersContractProperties](#recipientuserscontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### RecipientUsersContractProperties
* RecipientUsersContractProperties `object`: Recipient User Contract Properties.
  * userId `string`: API Management UserId subscribed to notification.

### RecipientsContractProperties
* RecipientsContractProperties `object`: Notification Parameter contract.
  * emails `array`: List of Emails subscribed for the notification.
    * items `string`
  * users `array`: List of Users subscribed for the notification.
    * items `string`


