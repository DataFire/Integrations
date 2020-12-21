# @datafire/azure_datashare_datashare

Client library for DataShareManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datashare_datashare
```
```js
let azure_datashare_datashare = require('@datafire/azure_datashare_datashare').create({
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

Creates a Microsoft.DataShare management client.

## Actions

### ConsumerInvitations_ListInvitations
Lists invitations


```js
azure_datashare_datashare.ConsumerInvitations_ListInvitations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: The continuation token

#### Output
* output [ConsumerInvitationList](#consumerinvitationlist)

### ConsumerInvitations_RejectInvitation
Reject an invitation


```js
azure_datashare_datashare.ConsumerInvitations_RejectInvitation({
  "location": "",
  "invitation": {
    "properties": {
      "invitationId": ""
    }
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Location of the invitation
  * invitation **required** [ConsumerInvitation](#consumerinvitation)
  * api-version **required** `string`: The api version to use.

#### Output
* output [ConsumerInvitation](#consumerinvitation)

### ConsumerInvitations_Get
Get an invitation


```js
azure_datashare_datashare.ConsumerInvitations_Get({
  "location": "",
  "invitationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Location of the invitation
  * invitationId **required** `string`: An invitation id
  * api-version **required** `string`: The api version to use.

#### Output
* output [ConsumerInvitation](#consumerinvitation)

### Operations_List
List of available operations


```js
azure_datashare_datashare.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationList](#operationlist)

### Accounts_ListBySubscription
List Accounts in Subscription


```js
azure_datashare_datashare.Accounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [AccountList](#accountlist)

### Accounts_ListByResourceGroup
List Accounts in ResourceGroup


```js
azure_datashare_datashare.Accounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [AccountList](#accountlist)

### Accounts_Delete
DeleteAccount


```js
azure_datashare_datashare.Accounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationResponse](#operationresponse)

### Accounts_Get
Get an account


```js
azure_datashare_datashare.Accounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * api-version **required** `string`: The api version to use.

#### Output
* output [Account](#account)

### Accounts_Update
Patch an account


```js
azure_datashare_datashare.Accounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "accountUpdateParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * accountUpdateParameters **required** [AccountUpdateParameters](#accountupdateparameters)
  * api-version **required** `string`: The api version to use.

#### Output
* output [Account](#account)

### Accounts_Create
Create an account


```js
azure_datashare_datashare.Accounts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "account": {
    "identity": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * account **required** [Account](#account)
  * api-version **required** `string`: The api version to use.

#### Output
* output [Account](#account)

### ShareSubscriptions_ListByAccount
List share subscriptions in an account


```js
azure_datashare_datashare.ShareSubscriptions_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation Token

#### Output
* output [ShareSubscriptionList](#sharesubscriptionlist)

### ShareSubscriptions_Delete
Delete a shareSubscription in an account


```js
azure_datashare_datashare.ShareSubscriptions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationResponse](#operationresponse)

### ShareSubscriptions_Get
Get a shareSubscription in an account


```js
azure_datashare_datashare.ShareSubscriptions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * api-version **required** `string`: The api version to use.

#### Output
* output [ShareSubscription](#sharesubscription)

### ShareSubscriptions_Create
Create a shareSubscription in an account


```js
azure_datashare_datashare.ShareSubscriptions_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "shareSubscription": {
    "properties": {
      "invitationId": "",
      "sourceShareLocation": ""
    }
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * shareSubscription **required** [ShareSubscription](#sharesubscription)
  * api-version **required** `string`: The api version to use.

#### Output
* output [ShareSubscription](#sharesubscription)

### ConsumerSourceDataSets_ListByShareSubscription
Get source dataSets of a shareSubscription


```js
azure_datashare_datashare.ConsumerSourceDataSets_ListByShareSubscription({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [ConsumerSourceDataSetList](#consumersourcedatasetlist)

### ShareSubscriptions_Synchronize
Initiate a copy


```js
azure_datashare_datashare.ShareSubscriptions_Synchronize({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "synchronize": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of share subscription
  * synchronize **required** [Synchronize](#synchronize)
  * api-version **required** `string`: The api version to use.

#### Output
* output [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)

### ShareSubscriptions_CancelSynchronization
Request to cancel a synchronization.


```js
azure_datashare_datashare.ShareSubscriptions_CancelSynchronization({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "shareSubscriptionSynchronization": {
    "synchronizationId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * shareSubscriptionSynchronization **required** [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)
  * api-version **required** `string`: The api version to use.

#### Output
* output [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)

### DataSetMappings_ListByShareSubscription
List DataSetMappings in a share subscription


```js
azure_datashare_datashare.DataSetMappings_ListByShareSubscription({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [DataSetMappingList](#datasetmappinglist)

### DataSetMappings_Delete
Delete a DataSetMapping in a shareSubscription


```js
azure_datashare_datashare.DataSetMappings_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "dataSetMappingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * dataSetMappingName **required** `string`: The name of the dataSetMapping.
  * api-version **required** `string`: The api version to use.

#### Output
*Output schema unknown*

### DataSetMappings_Get
Get a DataSetMapping in a shareSubscription


```js
azure_datashare_datashare.DataSetMappings_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "dataSetMappingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * dataSetMappingName **required** `string`: The name of the dataSetMapping.
  * api-version **required** `string`: The api version to use.

#### Output
* output [DataSetMapping](#datasetmapping)

### DataSetMappings_Create
Create a DataSetMapping 


```js
azure_datashare_datashare.DataSetMappings_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "dataSetMappingName": "",
  "dataSetMapping": {
    "kind": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription which will hold the data set sink.
  * dataSetMappingName **required** `string`: The name of the data set mapping to be created.
  * dataSetMapping **required** [DataSetMapping](#datasetmapping)
  * api-version **required** `string`: The api version to use.

#### Output
* output [DataSetMapping](#datasetmapping)

### ShareSubscriptions_ListSourceShareSynchronizationSettings
Get synchronization settings set on a share


```js
azure_datashare_datashare.ShareSubscriptions_ListSourceShareSynchronizationSettings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [SourceShareSynchronizationSettingList](#sourcesharesynchronizationsettinglist)

### ShareSubscriptions_ListSynchronizationDetails
List synchronization details


```js
azure_datashare_datashare.ShareSubscriptions_ListSynchronizationDetails({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "shareSubscriptionSynchronization": {
    "synchronizationId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription.
  * shareSubscriptionSynchronization **required** [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [SynchronizationDetailsList](#synchronizationdetailslist)

### ShareSubscriptions_ListSynchronizations
List synchronizations of a share subscription


```js
azure_datashare_datashare.ShareSubscriptions_ListSynchronizations({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [ShareSubscriptionSynchronizationList](#sharesubscriptionsynchronizationlist)

### Triggers_ListByShareSubscription
List Triggers in a share subscription


```js
azure_datashare_datashare.Triggers_ListByShareSubscription({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [TriggerList](#triggerlist)

### Triggers_Delete
Delete a Trigger in a shareSubscription


```js
azure_datashare_datashare.Triggers_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * triggerName **required** `string`: The name of the trigger.
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationResponse](#operationresponse)

### Triggers_Get
Get a Trigger in a shareSubscription


```js
azure_datashare_datashare.Triggers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the shareSubscription.
  * triggerName **required** `string`: The name of the trigger.
  * api-version **required** `string`: The api version to use.

#### Output
* output [Trigger](#trigger)

### Triggers_Create
Create a Trigger 


```js
azure_datashare_datashare.Triggers_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareSubscriptionName": "",
  "triggerName": "",
  "trigger": {
    "kind": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareSubscriptionName **required** `string`: The name of the share subscription which will hold the data set sink.
  * triggerName **required** `string`: The name of the trigger.
  * trigger **required** [Trigger](#trigger)
  * api-version **required** `string`: The api version to use.

#### Output
* output [Trigger](#trigger)

### Shares_ListByAccount
List shares in an account


```js
azure_datashare_datashare.Shares_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation Token

#### Output
* output [ShareList](#sharelist)

### Shares_Delete
Delete a share 


```js
azure_datashare_datashare.Shares_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationResponse](#operationresponse)

### Shares_Get
Get a share 


```js
azure_datashare_datashare.Shares_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share to retrieve.
  * api-version **required** `string`: The api version to use.

#### Output
* output [Share](#share)

### Shares_Create
Create a share 


```js
azure_datashare_datashare.Shares_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "share": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * share **required** [Share](#share)
  * api-version **required** `string`: The api version to use.

#### Output
* output [Share](#share)

### DataSets_ListByShare
List DataSets in a share


```js
azure_datashare_datashare.DataSets_ListByShare({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: continuation token

#### Output
* output [DataSetList](#datasetlist)

### DataSets_Delete
Delete a DataSet in a share


```js
azure_datashare_datashare.DataSets_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "dataSetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * dataSetName **required** `string`: The name of the dataSet.
  * api-version **required** `string`: The api version to use.

#### Output
*Output schema unknown*

### DataSets_Get
Get a DataSet in a share


```js
azure_datashare_datashare.DataSets_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "dataSetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * dataSetName **required** `string`: The name of the dataSet.
  * api-version **required** `string`: The api version to use.

#### Output
* output [DataSet](#dataset)

### DataSets_Create
Create a DataSet 


```js
azure_datashare_datashare.DataSets_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "dataSetName": "",
  "dataSet": {
    "kind": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share to add the data set to.
  * dataSetName **required** `string`: The name of the dataSet.
  * dataSet **required** [DataSet](#dataset)
  * api-version **required** `string`: The api version to use.

#### Output
* output [DataSet](#dataset)

### Invitations_ListByShare
List invitations in a share


```js
azure_datashare_datashare.Invitations_ListByShare({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: The continuation token

#### Output
* output [InvitationList](#invitationlist)

### Invitations_Delete
Delete an invitation in a share


```js
azure_datashare_datashare.Invitations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "invitationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * invitationName **required** `string`: The name of the invitation.
  * api-version **required** `string`: The api version to use.

#### Output
*Output schema unknown*

### Invitations_Get
Get an invitation in a share


```js
azure_datashare_datashare.Invitations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "invitationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * invitationName **required** `string`: The name of the invitation.
  * api-version **required** `string`: The api version to use.

#### Output
* output [Invitation](#invitation)

### Invitations_Create
Create an invitation 


```js
azure_datashare_datashare.Invitations_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "invitationName": "",
  "invitation": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share to send the invitation for.
  * invitationName **required** `string`: The name of the invitation.
  * invitation **required** [Invitation](#invitation)
  * api-version **required** `string`: The api version to use.

#### Output
* output [Invitation](#invitation)

### Shares_ListSynchronizationDetails
List synchronization details


```js
azure_datashare_datashare.Shares_ListSynchronizationDetails({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "shareSynchronization": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * shareSynchronization **required** [ShareSynchronization](#sharesynchronization)
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [SynchronizationDetailsList](#synchronizationdetailslist)

### Shares_ListSynchronizations
List synchronizations of a share


```js
azure_datashare_datashare.Shares_ListSynchronizations({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation token

#### Output
* output [ShareSynchronizationList](#sharesynchronizationlist)

### ProviderShareSubscriptions_ListByShare
List share subscriptions in a provider share


```js
azure_datashare_datashare.ProviderShareSubscriptions_ListByShare({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: Continuation Token

#### Output
* output [ProviderShareSubscriptionList](#providersharesubscriptionlist)

### ProviderShareSubscriptions_GetByShare
Get share subscription in a provider share


```js
azure_datashare_datashare.ProviderShareSubscriptions_GetByShare({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "providerShareSubscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * providerShareSubscriptionId **required** `string`: To locate shareSubscription
  * api-version **required** `string`: The api version to use.

#### Output
* output [ProviderShareSubscription](#providersharesubscription)

### ProviderShareSubscriptions_Reinstate
Reinstate share subscription in a provider share


```js
azure_datashare_datashare.ProviderShareSubscriptions_Reinstate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "providerShareSubscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * providerShareSubscriptionId **required** `string`: To locate shareSubscription
  * api-version **required** `string`: The api version to use.

#### Output
* output [ProviderShareSubscription](#providersharesubscription)

### ProviderShareSubscriptions_Revoke
Revoke share subscription in a provider share


```js
azure_datashare_datashare.ProviderShareSubscriptions_Revoke({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "providerShareSubscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * providerShareSubscriptionId **required** `string`: To locate shareSubscription
  * api-version **required** `string`: The api version to use.

#### Output
* output [ProviderShareSubscription](#providersharesubscription)

### SynchronizationSettings_ListByShare
List synchronizationSettings in a share


```js
azure_datashare_datashare.SynchronizationSettings_ListByShare({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * api-version **required** `string`: The api version to use.
  * $skipToken `string`: continuation token

#### Output
* output [SynchronizationSettingList](#synchronizationsettinglist)

### SynchronizationSettings_Delete
Delete a synchronizationSetting in a share


```js
azure_datashare_datashare.SynchronizationSettings_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "synchronizationSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * synchronizationSettingName **required** `string`: The name of the synchronizationSetting .
  * api-version **required** `string`: The api version to use.

#### Output
* output [OperationResponse](#operationresponse)

### SynchronizationSettings_Get
Get a synchronizationSetting in a share


```js
azure_datashare_datashare.SynchronizationSettings_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "synchronizationSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share.
  * synchronizationSettingName **required** `string`: The name of the synchronizationSetting.
  * api-version **required** `string`: The api version to use.

#### Output
* output [SynchronizationSetting](#synchronizationsetting)

### SynchronizationSettings_Create
Create or update a synchronizationSetting 


```js
azure_datashare_datashare.SynchronizationSettings_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "synchronizationSettingName": "",
  "synchronizationSetting": {
    "kind": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier
  * resourceGroupName **required** `string`: The resource group name.
  * accountName **required** `string`: The name of the share account.
  * shareName **required** `string`: The name of the share to add the synchronization setting to.
  * synchronizationSettingName **required** `string`: The name of the synchronizationSetting.
  * synchronizationSetting **required** [SynchronizationSetting](#synchronizationsetting)
  * api-version **required** `string`: The api version to use.

#### Output
* output [SynchronizationSetting](#synchronizationsetting)



## Definitions

### ADLSGen1FileDataSet
* ADLSGen1FileDataSet `object`: An ADLS Gen 1 file data set.
  * properties **required** [ADLSGen1FileProperties](#adlsgen1fileproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen1FileProperties
* ADLSGen1FileProperties `object`: Properties of the ADLS Gen1 file data set.
  * accountName **required** `string`: The ADLS account name.
  * dataSetId `string`: Unique id for identifying a data set resource
  * fileName **required** `string`: The file name in the ADLS account.
  * folderPath **required** `string`: The folder path within the ADLS account.
  * resourceGroup **required** `string`: Resource group of ADLS account.
  * subscriptionId **required** `string`: Subscription id of ADLS account.

### ADLSGen1FolderDataSet
* ADLSGen1FolderDataSet `object`: An ADLS Gen 1 folder data set.
  * properties **required** [ADLSGen1FolderProperties](#adlsgen1folderproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen1FolderProperties
* ADLSGen1FolderProperties `object`: Properties of the ADLS Gen1 folder data set.
  * accountName **required** `string`: The ADLS account name.
  * dataSetId `string`: Unique id for identifying a data set resource
  * folderPath **required** `string`: The folder path within the ADLS account.
  * resourceGroup **required** `string`: Resource group of ADLS account.
  * subscriptionId **required** `string`: Subscription id of ADLS account.

### ADLSGen2FileDataSet
* ADLSGen2FileDataSet `object`: An ADLS Gen 2 file data set.
  * properties **required** [ADLSGen2FileProperties](#adlsgen2fileproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FileDataSetMapping
* ADLSGen2FileDataSetMapping `object`: An ADLS Gen2 file data set mapping.
  * properties **required** [ADLSGen2FileDataSetMappingProperties](#adlsgen2filedatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FileDataSetMappingProperties
* ADLSGen2FileDataSetMappingProperties `object`: ADLS Gen 2 file data set mapping property bag.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * filePath **required** `string`: File path within the file system.
  * fileSystem **required** `string`: File system to which the file belongs.
  * outputType `string` (values: Csv, Parquet): Type of output file
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### ADLSGen2FileProperties
* ADLSGen2FileProperties `object`: Properties of the ADLS Gen2 file data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * filePath **required** `string`: File path within the file system.
  * fileSystem **required** `string`: File system to which the file belongs.
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### ADLSGen2FileSystemDataSet
* ADLSGen2FileSystemDataSet `object`: An ADLS Gen 2 file system data set.
  * properties **required** [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FileSystemDataSetMapping
* ADLSGen2FileSystemDataSetMapping `object`: An ADLS Gen2 file system data set mapping.
  * properties **required** [ADLSGen2FileSystemDataSetMappingProperties](#adlsgen2filesystemdatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FileSystemDataSetMappingProperties
* ADLSGen2FileSystemDataSetMappingProperties `object`: ADLS Gen 2 file system data set mapping property bag.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * fileSystem **required** `string`: The file system name.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### ADLSGen2FileSystemProperties
* ADLSGen2FileSystemProperties `object`: Properties of the ADLS Gen2 file system data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * fileSystem **required** `string`: The file system name.
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### ADLSGen2FolderDataSet
* ADLSGen2FolderDataSet `object`: An ADLS Gen 2 folder data set.
  * properties **required** [ADLSGen2FolderProperties](#adlsgen2folderproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FolderDataSetMapping
* ADLSGen2FolderDataSetMapping `object`: An ADLS Gen2 folder data set mapping.
  * properties **required** [ADLSGen2FolderDataSetMappingProperties](#adlsgen2folderdatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ADLSGen2FolderDataSetMappingProperties
* ADLSGen2FolderDataSetMappingProperties `object`: ADLS Gen 2 folder data set mapping property bag.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * fileSystem **required** `string`: File system to which the folder belongs.
  * folderPath **required** `string`: Folder path within the file system.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### ADLSGen2FolderProperties
* ADLSGen2FolderProperties `object`: Properties of the ADLS Gen2 folder data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * fileSystem **required** `string`: File system to which the folder belongs.
  * folderPath **required** `string`: Folder path within the file system.
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### Account
* Account `object`: An account data transfer object.
  * identity **required** [Identity](#identity)
  * properties [AccountProperties](#accountproperties)
  * id `string`: The resource id of the azure resource
  * location `string`: Location of the azure resource.
  * name `string`: Name of the azure resource
  * tags `object`: Tags on the azure resource.
  * type `string`: Type of the azure resource

### AccountList
* AccountList `object`: List response for get Accounts.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [Account](#account)

### AccountProperties
* AccountProperties `object`: Account property bag.
  * createdAt `string`: Time at which the account was created.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the Account
  * userEmail `string`: Email of the user who created the resource
  * userName `string`: Name of the user who created the resource

### AccountUpdateParameters
* AccountUpdateParameters `object`: Update parameters for accounts
  * tags `object`: Tags on the azure resource.

### BlobContainerDataSet
* BlobContainerDataSet `object`: An Azure storage blob container data set.
  * properties **required** [BlobContainerProperties](#blobcontainerproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobContainerDataSetMapping
* BlobContainerDataSetMapping `object`: A Blob container data set mapping.
  * properties **required** [BlobContainerMappingProperties](#blobcontainermappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobContainerMappingProperties
* BlobContainerMappingProperties `object`: Azure storage Blob container data set mapping property bag.
  * containerName **required** `string`: BLOB Container name.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### BlobContainerProperties
* BlobContainerProperties `object`: Properties of the BLOB container data set.
  * containerName **required** `string`: BLOB Container name.
  * dataSetId `string`: Unique id for identifying a data set resource
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### BlobDataSet
* BlobDataSet `object`: An Azure storage blob data set.
  * properties **required** [BlobProperties](#blobproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobDataSetMapping
* BlobDataSetMapping `object`: A Blob data set mapping.
  * properties **required** [BlobMappingProperties](#blobmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobFolderDataSet
* BlobFolderDataSet `object`: An Azure storage blob folder data set.
  * properties **required** [BlobFolderProperties](#blobfolderproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobFolderDataSetMapping
* BlobFolderDataSetMapping `object`: A Blob folder data set mapping.
  * properties **required** [BlobFolderMappingProperties](#blobfoldermappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### BlobFolderMappingProperties
* BlobFolderMappingProperties `object`: Azure storage Blob folder data set mapping property bag.
  * containerName **required** `string`: Container that has the file path.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * prefix **required** `string`: Prefix for blob folder
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### BlobFolderProperties
* BlobFolderProperties `object`: Properties of the blob folder data set.
  * containerName **required** `string`: Container that has the file path.
  * dataSetId `string`: Unique id for identifying a data set resource
  * prefix **required** `string`: Prefix for blob folder
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### BlobMappingProperties
* BlobMappingProperties `object`: Azure storage Blob data set mapping property bag.
  * containerName **required** `string`: Container that has the file path.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * filePath **required** `string`: File path within the source data set
  * outputType `string` (values: Csv, Parquet): File output type
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * resourceGroup **required** `string`: Resource group of storage account.
  * storageAccountName **required** `string`: Storage account name of the source data set.
  * subscriptionId **required** `string`: Subscription id of storage account.

### BlobProperties
* BlobProperties `object`: Properties of the blob data set.
  * containerName **required** `string`: Container that has the file path.
  * dataSetId `string`: Unique id for identifying a data set resource
  * filePath **required** `string`: File path within the source data set
  * resourceGroup **required** `string`: Resource group of storage account
  * storageAccountName **required** `string`: Storage account name of the source data set
  * subscriptionId **required** `string`: Subscription id of storage account

### ConsumerInvitation
* ConsumerInvitation `object`: A consumer Invitation data transfer object.
  * properties **required** [ConsumerInvitationProperties](#consumerinvitationproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ConsumerInvitationList
* ConsumerInvitationList `object`: List response for get InvitationList
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ConsumerInvitation](#consumerinvitation)

### ConsumerInvitationProperties
* ConsumerInvitationProperties `object`: Properties of consumer invitation
  * dataSetCount `integer`: Number of data sets in a share
  * description `string`: Description shared when the invitation was created
  * invitationId **required** `string`: Unique id of the invitation.
  * invitationStatus `string` (values: Pending, Accepted, Rejected, Withdrawn): The status of the invitation.
  * location `string`: invitation location
  * providerEmail `string`: Email of the provider who created the resource
  * providerName `string`: Name of the provider who created the resource
  * providerTenantName `string`: Tenant name of the provider who created the resource
  * respondedAt `string`: The time the recipient responded to the invitation.
  * sentAt `string`: Gets the time at which the invitation was sent.
  * shareName `string`: Gets the source share Name.
  * termsOfUse `string`: Terms of use shared when the invitation was created
  * userEmail `string`: Email of the user who created the resource
  * userName `string`: Name of the user who created the resource

### ConsumerSourceDataSet
* ConsumerSourceDataSet `object`: A consumer side dataSet data transfer object.
  * properties [ConsumerSourceDataSetProperties](#consumersourcedatasetproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ConsumerSourceDataSetList
* ConsumerSourceDataSetList `object`: A consumer side list of source dataSets
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ConsumerSourceDataSet](#consumersourcedataset)

### ConsumerSourceDataSetProperties
* ConsumerSourceDataSetProperties `object`: Properties of consumer source dataSet
  * dataSetId `string`: DataSet Id
  * dataSetLocation `string`: Location of the data set.
  * dataSetName `string`: DataSet name
  * dataSetPath `string`: DataSet path
  * dataSetType `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Type of data set

### DataSet
* DataSet `object`: A DataSet data transfer object.
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### DataSetList
* DataSetList `object`: List response for get DataSets
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [DataSet](#dataset)

### DataSetMapping
* DataSetMapping `object`: A data set mapping data transfer object.
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### DataSetMappingList
* DataSetMappingList `object`: List response for get DataSetMappings
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [DataSetMapping](#datasetmapping)

### DataShareError
* DataShareError `object`: The data share error model.
  * error **required** [DataShareErrorInfo](#datashareerrorinfo)

### DataShareErrorInfo
* DataShareErrorInfo `object`: The data share error body model.
  * code **required** `string`: Code of the error
  * details `array`: Nested details of the error model
    * items [DataShareErrorInfo](#datashareerrorinfo)
  * message **required** `string`: Message of the error
  * target `string`: Target of the error

### DefaultDto
* DefaultDto `object`: Base data transfer object implementation for default resources.
  * id `string`: The resource id of the azure resource
  * location `string`: Location of the azure resource.
  * name `string`: Name of the azure resource
  * tags `object`: Tags on the azure resource.
  * type `string`: Type of the azure resource

### DimensionProperties
* DimensionProperties `object`: properties for dimension
  * displayName `string`: localized display name of the dimension to customer
  * name `string`: dimension name

### Identity
* Identity `object`: Identity of resource
  * principalId `string`: service principal Id
  * tenantId `string`: Tenant Id
  * type `string` (values: SystemAssigned): Identity Type

### Invitation
* Invitation `object`: A Invitation data transfer object.
  * properties [InvitationProperties](#invitationproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### InvitationList
* InvitationList `object`: List response for get InvitationList
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [Invitation](#invitation)

### InvitationProperties
* InvitationProperties `object`: Invitation property bag.
  * invitationId `string`: unique invitation id
  * invitationStatus `string` (values: Pending, Accepted, Rejected, Withdrawn): The status of the invitation.
  * respondedAt `string`: The time the recipient responded to the invitation.
  * sentAt `string`: Gets the time at which the invitation was sent.
  * targetActiveDirectoryId `string`: The target Azure AD Id. Can't be combined with email.
  * targetEmail `string`: The email the invitation is directed to.
  * targetObjectId `string`: The target user or application Id that invitation is being sent to.
  * userEmail `string`: Email of the user who created the resource
  * userName `string`: Name of the user who created the resource

### KustoClusterDataSet
* KustoClusterDataSet `object`: A kusto cluster data set.
  * properties **required** [KustoClusterDataSetProperties](#kustoclusterdatasetproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### KustoClusterDataSetMapping
* KustoClusterDataSetMapping `object`: A Kusto cluster data set mapping
  * properties **required** [KustoClusterDataSetMappingProperties](#kustoclusterdatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### KustoClusterDataSetMappingProperties
* KustoClusterDataSetMappingProperties `object`: Properties of the Kusto cluster data set mapping
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * kustoClusterResourceId **required** `string`: Resource id of the sink kusto cluster.
  * location `string`: Location of the sink kusto cluster.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.

### KustoClusterDataSetProperties
* KustoClusterDataSetProperties `object`: Properties of the kusto cluster data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * kustoClusterResourceId **required** `string`: Resource id of the kusto cluster.
  * location `string`: Location of the kusto cluster.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the kusto cluster data set.

### KustoDatabaseDataSet
* KustoDatabaseDataSet `object`: A kusto database data set.
  * properties **required** [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### KustoDatabaseDataSetMapping
* KustoDatabaseDataSetMapping `object`: A Kusto database data set mapping
  * properties **required** [KustoDatabaseDataSetMappingProperties](#kustodatabasedatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### KustoDatabaseDataSetMappingProperties
* KustoDatabaseDataSetMappingProperties `object`: Properties of the Kusto database data set mapping
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * kustoClusterResourceId **required** `string`: Resource id of the sink kusto cluster.
  * location `string`: Location of the sink kusto cluster.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.

### KustoDatabaseDataSetProperties
* KustoDatabaseDataSetProperties `object`: Properties of the kusto database data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * kustoDatabaseResourceId **required** `string`: Resource id of the kusto database.
  * location `string`: Location of the kusto cluster.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the kusto database data set.

### OperationList
* OperationList `object`: List response for get operations.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [OperationModel](#operationmodel)

### OperationMetaLogSpecification
* OperationMetaLogSpecification `object`: log specifications for operation api
  * blobDuration `string`: blob duration of the log
  * displayName `string`: localized name of the log category
  * name `string`: name of the log category

### OperationMetaMetricSpecification
* OperationMetaMetricSpecification `object`: metric specifications for the operation
  * aggregationType `string`: aggregation type of metric
  * dimensions `array`: properties for dimension
    * items [DimensionProperties](#dimensionproperties)
  * displayDescription `string`: description of the metric
  * displayName `string`: localized name of the metric
  * enableRegionalMdmAccount `string`: enable regional mdm account
  * internalMetricName `string`: internal metric name
  * name `string`: name of the metric
  * resourceIdDimensionNameOverride `string`: dimension name use to replace resource id if specified
  * supportedAggregationTypes `array`: supported aggregation types
    * items `string`
  * supportedTimeGrainTypes `array`: supported time grain types
    * items `string`
  * unit `string`: units for the metric

### OperationMetaPropertyInfo
* OperationMetaPropertyInfo `object`: properties on meta info
  * serviceSpecification [OperationMetaServiceSpecification](#operationmetaservicespecification)

### OperationMetaServiceSpecification
* OperationMetaServiceSpecification `object`: The operation meta service specification
  * logSpecifications `array`: log specifications for the operation
    * items [OperationMetaLogSpecification](#operationmetalogspecification)
  * metricSpecifications `array`: metric specifications for the operation
    * items [OperationMetaMetricSpecification](#operationmetametricspecification)

### OperationModel
* OperationModel `object`: The response model for get operations
  * display [OperationModelProperties](#operationmodelproperties)
  * name `string`: Operation name for display purposes
  * origin `string`: origin of the operation
  * properties [OperationMetaPropertyInfo](#operationmetapropertyinfo)

### OperationModelProperties
* OperationModelProperties `object`: Properties on operations
  * description `string`: Description of the operation for display purposes
  * operation `string`: Name of the operation for display purposes
  * provider `string`: Name of the provider for display purposes
  * resource `string`: Name of the resource type for display purposes

### OperationResponse
* OperationResponse `object`: Response for long running operation
  * endTime `string`: start time
  * error [DataShareErrorInfo](#datashareerrorinfo)
  * startTime `string`: start time
  * status **required** `string` (values: Accepted, InProgress, TransientFailure, Succeeded, Failed, Canceled): Operation state of the long running operation.

### ProviderShareSubscription
* ProviderShareSubscription `object`: A provider side share subscription data transfer object.
  * properties [ProviderShareSubscriptionProperties](#providersharesubscriptionproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ProviderShareSubscriptionList
* ProviderShareSubscriptionList `object`: List response for get ShareSubscription.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ProviderShareSubscription](#providersharesubscription)

### ProviderShareSubscriptionProperties
* ProviderShareSubscriptionProperties `object`: Provider share subscription properties
  * consumerEmail `string`: Email of the consumer who created the share subscription
  * consumerName `string`: Name of the consumer who created the share subscription
  * consumerTenantName `string`: Tenant name of the consumer who created the share subscription
  * createdAt `string`: created at
  * providerEmail `string`: Email of the provider who created the share
  * providerName `string`: Name of the provider who created the share
  * shareSubscriptionObjectId `string`: share Subscription Object Id
  * shareSubscriptionStatus `string` (values: Active, Revoked, SourceDeleted, Revoking): Gets the status of share subscription
  * sharedAt `string`: Shared at

### ProxyDto
* ProxyDto `object`: Base data transfer object implementation for proxy resources.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ScheduledSourceShareSynchronizationSettingProperties
* ScheduledSourceShareSynchronizationSettingProperties `object`: A Scheduled source synchronization setting data transfer object.
  * recurrenceInterval `string` (values: Hour, Day): Recurrence Interval
  * synchronizationTime `string`: Synchronization time

### ScheduledSourceSynchronizationSetting
* ScheduledSourceSynchronizationSetting `object`: A type of synchronization setting based on schedule
  * properties [ScheduledSourceShareSynchronizationSettingProperties](#scheduledsourcesharesynchronizationsettingproperties)
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization

### ScheduledSynchronizationSetting
* ScheduledSynchronizationSetting `object`: A type of synchronization setting based on schedule
  * properties **required** [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties)
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ScheduledSynchronizationSettingProperties
* ScheduledSynchronizationSettingProperties `object`: A Scheduled synchronization setting data transfer object.
  * createdAt `string`: Time at which the synchronization setting was created.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Gets or sets the provisioning state
  * recurrenceInterval **required** `string` (values: Hour, Day): Recurrence Interval
  * synchronizationTime **required** `string`: Synchronization time
  * userName `string`: Name of the user who created the synchronization setting.

### ScheduledTrigger
* ScheduledTrigger `object`: A type of trigger based on schedule
  * properties **required** [ScheduledTriggerProperties](#scheduledtriggerproperties)
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ScheduledTriggerProperties
* ScheduledTriggerProperties `object`: A Scheduled trigger data transfer object.
  * createdAt `string`: Time at which the trigger was created.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Gets the provisioning state
  * recurrenceInterval **required** `string` (values: Hour, Day): Recurrence Interval
  * synchronizationMode `string` (values: Incremental, FullSync): Synchronization mode
  * synchronizationTime **required** `string`: Synchronization time
  * triggerStatus `string` (values: Active, Inactive, SourceSynchronizationSettingDeleted): Gets the trigger state
  * userName `string`: Name of the user who created the trigger.

### Share
* Share `object`: A share data transfer object.
  * properties [ShareProperties](#shareproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ShareList
* ShareList `object`: List response for get Shares.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [Share](#share)

### ShareProperties
* ShareProperties `object`: Share property bag.
  * createdAt `string`: Time at which the share was created.
  * description `string`: Share description.
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Gets or sets the provisioning state
  * shareKind `string` (values: CopyBased, InPlace): Share kind.
  * terms `string`: Share terms.
  * userEmail `string`: Email of the user who created the resource
  * userName `string`: Name of the user who created the resource

### ShareSubscription
* ShareSubscription `object`: A share subscription data transfer object.
  * properties **required** [ShareSubscriptionProperties](#sharesubscriptionproperties)
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### ShareSubscriptionList
* ShareSubscriptionList `object`: List response for get ShareSubscription.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ShareSubscription](#sharesubscription)

### ShareSubscriptionProperties
* ShareSubscriptionProperties `object`: Share subscription property bag.
  * createdAt `string`: Time at which the share subscription was created.
  * invitationId **required** `string`: The invitation id.
  * providerEmail `string`: Email of the provider who created the resource
  * providerName `string`: Name of the provider who created the resource
  * providerTenantName `string`: Tenant name of the provider who created the resource
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the share subscription
  * shareDescription `string`: Description of share
  * shareKind `string` (values: CopyBased, InPlace): Kind of share
  * shareName `string`: Name of the share
  * shareSubscriptionStatus `string` (values: Active, Revoked, SourceDeleted, Revoking): Gets the current status of share subscription.
  * shareTerms `string`: Terms of a share
  * sourceShareLocation **required** `string`: Source share location.
  * userEmail `string`: Email of the user who created the resource
  * userName `string`: Name of the user who created the resource

### ShareSubscriptionSynchronization
* ShareSubscriptionSynchronization `object`: A ShareSubscriptionSynchronization data transfer object.
  * durationMs `integer`: Synchronization duration
  * endTime `string`: End time of synchronization
  * message `string`: message of Synchronization
  * startTime `string`: start time of synchronization
  * status `string`: Raw Status
  * synchronizationId **required** `string`: Synchronization id
  * synchronizationMode `string` (values: Incremental, FullSync): Synchronization Mode

### ShareSubscriptionSynchronizationList
* ShareSubscriptionSynchronizationList `object`: A consumer side list of share subscription synchronizations
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)

### ShareSynchronization
* ShareSynchronization `object`: A ShareSynchronization data transfer object.
  * consumerEmail `string`: Email of the user who created the synchronization
  * consumerName `string`: Name of the user who created the synchronization
  * consumerTenantName `string`: Tenant name of the consumer who created the synchronization
  * durationMs `integer`: synchronization duration
  * endTime `string`: End time of synchronization
  * message `string`: message of synchronization
  * startTime `string`: start time of synchronization
  * status `string`: Raw Status
  * synchronizationId `string`: Synchronization id
  * synchronizationMode `string` (values: Incremental, FullSync): Synchronization mode

### ShareSynchronizationList
* ShareSynchronizationList `object`: List response for get ShareSynchronization.
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [ShareSynchronization](#sharesynchronization)

### SourceShareSynchronizationSetting
* SourceShareSynchronizationSetting `object`: A view of synchronization setting added by the provider
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization

### SourceShareSynchronizationSettingList
* SourceShareSynchronizationSettingList `object`: List response for get source share Synchronization settings
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [SourceShareSynchronizationSetting](#sourcesharesynchronizationsetting)

### SqlDBTableDataSet
* SqlDBTableDataSet `object`: A SQL DB table data set.
  * properties [SqlDBTableProperties](#sqldbtableproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### SqlDBTableDataSetMapping
* SqlDBTableDataSetMapping `object`: A SQL DB Table data set mapping.
  * properties **required** [SqlDBTableDataSetMappingProperties](#sqldbtabledatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### SqlDBTableDataSetMappingProperties
* SqlDBTableDataSetMappingProperties `object`: Properties of the SQL DB table data set mapping.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * databaseName **required** `string`: DatabaseName name of the sink data set
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * schemaName **required** `string`: Schema of the table. Default value is dbo.
  * sqlServerResourceId **required** `string`: Resource id of SQL server
  * tableName **required** `string`: SQL DB table name.

### SqlDBTableProperties
* SqlDBTableProperties `object`: Properties of the SQL DB table data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * databaseName **required** `string`: Database name of the source data set
  * schemaName **required** `string`: Schema of the table. Default value is dbo.
  * sqlServerResourceId **required** `string`: Resource id of SQL server
  * tableName **required** `string`: SQL DB table name.

### SqlDWTableDataSet
* SqlDWTableDataSet `object`: A SQL DW table data set.
  * properties [SqlDWTableProperties](#sqldwtableproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### SqlDWTableDataSetMapping
* SqlDWTableDataSetMapping `object`: A SQL DW Table data set mapping.
  * properties **required** [SqlDWTableDataSetMappingProperties](#sqldwtabledatasetmappingproperties)
  * kind **required** `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Kind of data set mapping.
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### SqlDWTableDataSetMappingProperties
* SqlDWTableDataSetMappingProperties `object`: Properties of the SQL DW table data set mapping.
  * dataSetId **required** `string`: The id of the source data set.
  * dataSetMappingStatus `string` (values: Ok, Broken): Gets the status of the data set mapping.
  * dataWarehouseName **required** `string`: DataWarehouse name of the source data set
  * provisioningState `string` (values: Succeeded, Creating, Deleting, Moving, Failed): Provisioning state of the data set mapping.
  * schemaName **required** `string`: Schema of the table. Default value is dbo.
  * sqlServerResourceId **required** `string`: Resource id of SQL server
  * tableName **required** `string`: SQL DW table name.

### SqlDWTableProperties
* SqlDWTableProperties `object`: Properties of the SQL DW table data set.
  * dataSetId `string`: Unique id for identifying a data set resource
  * dataWarehouseName **required** `string`: DataWarehouse name of the source data set
  * schemaName **required** `string`: Schema of the table. Default value is dbo.
  * sqlServerResourceId **required** `string`: Resource id of SQL server
  * tableName **required** `string`: SQL DW table name.

### SynchronizationDetails
* SynchronizationDetails `object`: Synchronization details at data set level
  * dataSetId `string`: Id of data set
  * dataSetType `string` (values: Blob, Container, BlobFolder, AdlsGen2FileSystem, AdlsGen2Folder, AdlsGen2File, AdlsGen1Folder, AdlsGen1File, KustoCluster, KustoDatabase, SqlDBTable, SqlDWTable): Type of the data set
  * durationMs `integer`: Duration of data set level copy
  * endTime `string`: End time of data set level copy
  * filesRead `integer`: The number of files read from the source data set
  * filesWritten `integer`: The number of files written into the sink data set
  * message `string`: Error message if any
  * name `string`: Name of the data set
  * rowsCopied `integer`: The number of files copied into the sink data set
  * rowsRead `integer`: The number of rows read from the source data set.
  * sizeRead `integer`: The size of the data read from the source data set in bytes
  * sizeWritten `integer`: The size of the data written into the sink data set in bytes
  * startTime `string`: Start time of data set level copy
  * status `string`: Raw Status
  * vCore `integer`: The vCore units consumed for the data set synchronization

### SynchronizationDetailsList
* SynchronizationDetailsList `object`: details of synchronization
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [SynchronizationDetails](#synchronizationdetails)

### SynchronizationSetting
* SynchronizationSetting `object`: A Synchronization Setting data transfer object.
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### SynchronizationSettingList
* SynchronizationSettingList `object`: List response for get Synchronization settings
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [SynchronizationSetting](#synchronizationsetting)

### Synchronize
* Synchronize `object`: Payload for the synchronizing the data.
  * synchronizationMode `string` (values: Incremental, FullSync): Mode of synchronization used in triggers and snapshot sync. Incremental by default

### Trigger
* Trigger `object`: A Trigger data transfer object.
  * kind **required** `string` (values: ScheduleBased): Kind of synchronization
  * id `string`: The resource id of the azure resource
  * name `string`: Name of the azure resource
  * type `string`: Type of the azure resource

### TriggerList
* TriggerList `object`: List response for get triggers
  * nextLink `string`: The Url of next result page.
  * value **required** `array`: Collection of items of type DataTransferObjects.
    * items [Trigger](#trigger)


