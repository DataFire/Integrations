# @datafire/azure_billing

Client library for BillingManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_billing
```
```js
let azure_billing = require('@datafire/azure_billing').create({
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

Billing client provides access to billing resources for Azure subscriptions.

## Actions

### BillingAccounts_List
Lists all billing accounts for a user which he has access to.


```js
azure_billing.BillingAccounts_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * $expand `string`: May be used to expand the address, invoiceSections and billingProfiles.

#### Output
* output [BillingAccountListResult](#billingaccountlistresult)

### BillingAccounts_Get
Get the billing account by id.


```js
azure_billing.BillingAccounts_Get({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $expand `string`: May be used to expand the address, invoiceSections and billingProfiles.

#### Output
* output [BillingAccount](#billingaccount)

### BillingAccounts_Update
The operation to update a billing account.


```js
azure_billing.BillingAccounts_Update({
  "api-version": "",
  "billingAccountName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * parameters **required** [BillingAccountUpdateRequest](#billingaccountupdaterequest)

#### Output
* output [BillingAccount](#billingaccount)

### Agreements_ListByBillingAccount
Lists all agreements for a billing account.


```js
azure_billing.Agreements_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $expand `string`: May be used to expand the participants.

#### Output
* output [AgreementListResult](#agreementlistresult)

### Agreements_Get
Get the agreement by name.


```js
azure_billing.Agreements_Get({
  "api-version": "",
  "billingAccountName": "",
  "agreementName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * agreementName **required** `string`: Agreement Id.
  * $expand `string`: May be used to expand the participants.

#### Output
* output [Agreement](#agreement)

### BillingPermissions_ListByBillingAccount
Lists all billing permissions for the caller under a billing account.


```js
azure_billing.BillingPermissions_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.

#### Output
* output [BillingPermissionsListResult](#billingpermissionslistresult)

### BillingProfiles_ListByBillingAccount
Lists all billing profiles for a user which that user has access to.


```js
azure_billing.BillingProfiles_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $expand `string`: May be used to expand the invoiceSections.

#### Output
* output [BillingProfileListResult](#billingprofilelistresult)

### BillingProfiles_Get
Get the billing profile by id.


```js
azure_billing.BillingProfiles_Get({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * $expand `string`: May be used to expand the invoiceSections.

#### Output
* output [BillingProfile](#billingprofile)

### BillingProfiles_Update
The operation to update a billing profile.


```js
azure_billing.BillingProfiles_Update({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * parameters **required** [BillingProfile](#billingprofile)

#### Output
* output [BillingProfile](#billingprofile)

### BillingProfiles_Create
The operation to create a BillingProfile.


```js
azure_billing.BillingProfiles_Create({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * parameters **required** [BillingProfileCreationRequest](#billingprofilecreationrequest)

#### Output
* output [BillingProfile](#billingprofile)

### AvailableBalances_GetByBillingProfile
The latest available credit balance for a given billingAccountName and billingProfileName.


```js
azure_billing.AvailableBalances_GetByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [AvailableBalance](#availablebalance)

### BillingPermissions_ListByBillingProfile
Lists all billing permissions the caller has for a billing account.


```js
azure_billing.BillingPermissions_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.

#### Output
* output [BillingPermissionsListResult](#billingpermissionslistresult)

### BillingRoleAssignments_ListByBillingProfile
Get the role assignments on the Billing Profile


```js
azure_billing.BillingRoleAssignments_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### BillingRoleAssignments_DeleteByBillingProfile
Delete the role assignment on this Billing Profile


```js
azure_billing.BillingRoleAssignments_DeleteByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleAssignments_GetByBillingProfile
Get the role assignment for the caller on the Billing Profile


```js
azure_billing.BillingRoleAssignments_GetByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleDefinitions_ListByBillingProfile
Lists the role definition for a Billing Profile


```js
azure_billing.BillingRoleDefinitions_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.

#### Output
* output [BillingRoleDefinitionListResult](#billingroledefinitionlistresult)

### BillingRoleDefinitions_GetByBillingProfile
Gets the role definition for a role


```js
azure_billing.BillingRoleDefinitions_GetByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "billingRoleDefinitionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * billingRoleDefinitionName **required** `string`: role definition id.

#### Output
* output [BillingRoleDefinition](#billingroledefinition)

### BillingSubscriptions_ListByBillingProfile
Lists billing subscriptions by billing profile name.


```js
azure_billing.BillingSubscriptions_ListByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscriptionsListResult](#billingsubscriptionslistresult)

### BillingRoleAssignments_AddByBillingProfile
The operation to add a role assignment to a billing profile.


```js
azure_billing.BillingRoleAssignments_AddByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * parameters **required** [BillingRoleAssignmentPayload](#billingroleassignmentpayload)

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### Customers_ListByBillingProfile
Lists customers by billing profile which the current user can work with on-behalf of a partner.


```js
azure_billing.Customers_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * $filter `string`: May be used to filter the list of customers.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [CustomerListResult](#customerlistresult)

### PartnerTransfers_Initiate
Initiates the request to transfer the legacy subscriptions or RIs.


```js
azure_billing.PartnerTransfers_Initiate({
  "billingAccountName": "",
  "billingProfileName": "",
  "customerName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * customerName **required** `string`: Customer name.
  * parameters **required** [InitiateTransferRequest](#initiatetransferrequest)

#### Output
* output [TransferDetails](#transferdetails)

### PartnerTransfers_List
Lists all transfer's details initiated from given invoice section.


```js
azure_billing.PartnerTransfers_List({
  "billingAccountName": "",
  "billingProfileName": "",
  "customerName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * customerName **required** `string`: Customer name.

#### Output
* output [TransferDetailsListResult](#transferdetailslistresult)

### PartnerTransfers_Cancel
Cancels the transfer for given transfer Id.


```js
azure_billing.PartnerTransfers_Cancel({
  "billingAccountName": "",
  "billingProfileName": "",
  "customerName": "",
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * customerName **required** `string`: Customer name.
  * transferName **required** `string`: Transfer Name.

#### Output
* output [TransferDetails](#transferdetails)

### PartnerTransfers_Get
Gets the transfer details for given transfer Id.


```js
azure_billing.PartnerTransfers_Get({
  "billingAccountName": "",
  "billingProfileName": "",
  "customerName": "",
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * customerName **required** `string`: Customer name.
  * transferName **required** `string`: Transfer Name.

#### Output
* output [TransferDetails](#transferdetails)

### Instructions_ListByBillingProfile
Lists the instructions by billing profile id.


```js
azure_billing.Instructions_ListByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [InstructionListResult](#instructionlistresult)

### Instructions_Get
Get the instruction by name.


```js
azure_billing.Instructions_Get({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "instructionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * instructionName **required** `string`: Instruction Name.

#### Output
* output [Instruction](#instruction)

### Instructions_Put
The operation to create or update a instruction.


```js
azure_billing.Instructions_Put({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "instructionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * instructionName **required** `string`: Instruction Name.
  * parameters **required** [Instruction](#instruction)

#### Output
* output [Instruction](#instruction)

### InvoiceSections_ListByBillingProfile
Lists all invoice sections for a user which he has access to.


```js
azure_billing.InvoiceSections_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.

#### Output
* output [InvoiceSectionListResult](#invoicesectionlistresult)

### InvoiceSections_Get
Get the InvoiceSection by id.


```js
azure_billing.InvoiceSections_Get({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
* output [InvoiceSection](#invoicesection)

### InvoiceSections_Update
The operation to update a InvoiceSection.


```js
azure_billing.InvoiceSections_Update({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * parameters **required** [InvoiceSection](#invoicesection)

#### Output
* output [InvoiceSection](#invoicesection)

### InvoiceSections_Create
The operation to create an invoice section.


```js
azure_billing.InvoiceSections_Create({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * parameters **required** [InvoiceSectionCreationRequest](#invoicesectioncreationrequest)

#### Output
* output [InvoiceSection](#invoicesection)

### BillingPermissions_ListByInvoiceSections
Lists all billing permissions for the caller under invoice section.


```js
azure_billing.BillingPermissions_ListByInvoiceSections({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
* output [BillingPermissionsListResult](#billingpermissionslistresult)

### BillingRoleAssignments_ListByInvoiceSection
Get the role assignments on the invoice Section


```js
azure_billing.BillingRoleAssignments_ListByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### BillingRoleAssignments_DeleteByInvoiceSection
Delete the role assignment on the invoice Section


```js
azure_billing.BillingRoleAssignments_DeleteByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleAssignments_GetByInvoiceSection
Get the role assignment for the caller on the invoice Section


```js
azure_billing.BillingRoleAssignments_GetByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleDefinitions_ListByInvoiceSection
Lists the role definition for an invoice Section


```js
azure_billing.BillingRoleDefinitions_ListByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
* output [BillingRoleDefinitionListResult](#billingroledefinitionlistresult)

### BillingRoleDefinitions_GetByInvoiceSection
Gets the role definition for a role


```js
azure_billing.BillingRoleDefinitions_GetByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingRoleDefinitionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingRoleDefinitionName **required** `string`: role definition id.

#### Output
* output [BillingRoleDefinition](#billingroledefinition)

### BillingSubscriptions_ListByInvoiceSection
Lists billing subscription by invoice section name.


```js
azure_billing.BillingSubscriptions_ListByInvoiceSection({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscriptionsListResult](#billingsubscriptionslistresult)

### BillingSubscriptions_Get
Get a single billing subscription by name.


```js
azure_billing.BillingSubscriptions_Get({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscription](#billingsubscription)

### BillingSubscriptions_Transfer
Transfers the subscription from one invoice section to another within a billing account.


```js
azure_billing.BillingSubscriptions_Transfer({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingSubscriptionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * parameters **required** [TransferBillingSubscriptionRequestProperties](#transferbillingsubscriptionrequestproperties)

#### Output
* output [TransferBillingSubscriptionResult](#transferbillingsubscriptionresult)

### BillingSubscriptions_ValidateTransfer
Validates the transfer of billing subscriptions across invoice sections.


```js
azure_billing.BillingSubscriptions_ValidateTransfer({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "billingSubscriptionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * parameters **required** [TransferBillingSubscriptionRequestProperties](#transferbillingsubscriptionrequestproperties)

#### Output
* output [ValidateSubscriptionTransferEligibilityResult](#validatesubscriptiontransfereligibilityresult)

### BillingRoleAssignments_AddByInvoiceSection
The operation to add a role assignment to a invoice Section.


```js
azure_billing.BillingRoleAssignments_AddByInvoiceSection({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * parameters **required** [BillingRoleAssignmentPayload](#billingroleassignmentpayload)

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### InvoiceSections_ElevateToBillingProfile
Elevates the caller's access to match their billing profile access.


```js
azure_billing.InvoiceSections_ElevateToBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
*Output schema unknown*

### Transfers_Initiate
Initiates the request to transfer the legacy subscriptions or RIs.


```js
azure_billing.Transfers_Initiate({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * parameters **required** [InitiateTransferRequest](#initiatetransferrequest)

#### Output
* output [TransferDetails](#transferdetails)

### Products_ListByInvoiceSection
Lists products by invoice section name.


```js
azure_billing.Products_ListByInvoiceSection({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * $filter `string`: May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [ProductsListResult](#productslistresult)

### Products_Get
Get a single product by name.


```js
azure_billing.Products_Get({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * productName **required** `string`: Invoice Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [Product](#product)

### Products_Transfer
The operation to transfer a Product to another invoice section.


```js
azure_billing.Products_Transfer({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "productName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * productName **required** `string`: Invoice Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * parameters **required** [TransferProductRequestProperties](#transferproductrequestproperties)

#### Output
* output [Product](#product)

### Products_UpdateAutoRenewByInvoiceSection
Cancel auto renew for product by product id and invoice section name


```js
azure_billing.Products_UpdateAutoRenewByInvoiceSection({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "productName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * productName **required** `string`: Invoice Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * body **required** [UpdateAutoRenewRequest](#updateautorenewrequest)

#### Output
* output [UpdateAutoRenewOperation](#updateautorenewoperation)

### Products_ValidateTransfer
Validates the transfer of products across invoice sections.


```js
azure_billing.Products_ValidateTransfer({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "productName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * productName **required** `string`: Invoice Id.
  * parameters **required** [TransferProductRequestProperties](#transferproductrequestproperties)

#### Output
* output [ValidateProductTransferEligibilityResult](#validateproducttransfereligibilityresult)

### Transactions_ListByInvoiceSection
Lists the transactions by invoice section name for given start date and end date.


```js
azure_billing.Transactions_ListByInvoiceSection({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "api-version": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * periodStartDate **required** `string`: Start date
  * periodEndDate **required** `string`: End date
  * $filter `string`: May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [TransactionListResult](#transactionlistresult)

### Transfers_List
Lists all transfer's details initiated from given invoice section.


```js
azure_billing.Transfers_List({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.

#### Output
* output [TransferDetailsListResult](#transferdetailslistresult)

### Transfers_Cancel
Cancels the transfer for given transfer Id.


```js
azure_billing.Transfers_Cancel({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * transferName **required** `string`: Transfer Name.

#### Output
* output [TransferDetails](#transferdetails)

### Transfers_Get
Gets the transfer details for given transfer Id.


```js
azure_billing.Transfers_Get({
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceSectionName": "",
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceSectionName **required** `string`: InvoiceSection Id.
  * transferName **required** `string`: Transfer Name.

#### Output
* output [TransferDetails](#transferdetails)

### Invoices_ListByBillingProfile
List of invoices for a billing profile.


```js
azure_billing.Invoices_ListByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * periodStartDate **required** `string`: Invoice period start date.
  * periodEndDate **required** `string`: Invoice period end date.

#### Output
* output [InvoiceListResult](#invoicelistresult)

### Invoices_Get
Get the invoice by name.


```js
azure_billing.Invoices_Get({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceName **required** `string`: Invoice Id.

#### Output
* output [Invoice](#invoice)

### PriceSheet_Download
Download price sheet for an invoice.


```js
azure_billing.PriceSheet_Download({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "invoiceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * invoiceName **required** `string`: Invoice Id.

#### Output
* output [DownloadUrl](#downloadurl)

### PaymentMethods_ListByBillingProfile
Lists the Payment Methods by billing profile Id.


```js
azure_billing.PaymentMethods_ListByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [PaymentMethodsListResult](#paymentmethodslistresult)

### Policies_GetByBillingProfile
The policy for a given billing account name and billing profile name.


```js
azure_billing.Policies_GetByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [Policy](#policy)

### Policies_Update
The operation to update a policy.


```js
azure_billing.Policies_Update({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * parameters **required** [Policy](#policy)

#### Output
* output [Policy](#policy)

### PriceSheet_DownloadByBillingProfile
Download price sheet for a billing profile.


```js
azure_billing.PriceSheet_DownloadByBillingProfile({
  "api-version": "",
  "billingAccountName": "",
  "billingProfileName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.

#### Output
* output [DownloadUrl](#downloadurl)

### Transactions_ListByBillingProfile
Lists the transactions by billing profile name for given start date and end date.


```js
azure_billing.Transactions_ListByBillingProfile({
  "billingAccountName": "",
  "billingProfileName": "",
  "api-version": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * periodStartDate **required** `string`: Start date
  * periodEndDate **required** `string`: End date
  * $filter `string`: May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [TransactionListResult](#transactionlistresult)

### Transactions_Get
Get the transaction.


```js
azure_billing.Transactions_Get({
  "billingAccountName": "",
  "billingProfileName": "",
  "transactionName": "",
  "periodStartDate": "",
  "periodEndDate": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingProfileName **required** `string`: Billing Profile Id.
  * transactionName **required** `string`: Transaction name.
  * periodStartDate **required** `string`: Start date
  * periodEndDate **required** `string`: End date
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [Transaction](#transaction)

### BillingRoleAssignments_ListByBillingAccount
Get the role assignments on the Billing Account


```js
azure_billing.BillingRoleAssignments_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### BillingRoleAssignments_DeleteByBillingAccount
Delete the role assignment on this billing account


```js
azure_billing.BillingRoleAssignments_DeleteByBillingAccount({
  "api-version": "",
  "billingAccountName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleAssignments_GetByBillingAccount
Get the role assignment for the caller


```js
azure_billing.BillingRoleAssignments_GetByBillingAccount({
  "api-version": "",
  "billingAccountName": "",
  "billingRoleAssignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingRoleAssignmentName **required** `string`: role assignment id.

#### Output
* output [BillingRoleAssignment](#billingroleassignment)

### BillingRoleDefinitions_ListByBillingAccount
Lists the role definition for a billing account


```js
azure_billing.BillingRoleDefinitions_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.

#### Output
* output [BillingRoleDefinitionListResult](#billingroledefinitionlistresult)

### BillingRoleDefinitions_GetByBillingAccount
Gets the role definition for a role


```js
azure_billing.BillingRoleDefinitions_GetByBillingAccount({
  "api-version": "",
  "billingAccountName": "",
  "billingRoleDefinitionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * billingRoleDefinitionName **required** `string`: role definition id.

#### Output
* output [BillingRoleDefinition](#billingroledefinition)

### BillingSubscriptions_ListByBillingAccount
Lists billing subscriptions by billing account name.


```js
azure_billing.BillingSubscriptions_ListByBillingAccount({
  "billingAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscriptionsListResult](#billingsubscriptionslistresult)

### Invoices_ListByBillingSubscription
Lists invoices by billing subscriptions name.


```js
azure_billing.Invoices_ListByBillingSubscription({
  "billingAccountName": "",
  "billingSubscriptionName": "",
  "periodStartDate": "",
  "periodEndDate": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * periodStartDate **required** `string`: Invoice period start date.
  * periodEndDate **required** `string`: Invoice period end date.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [InvoiceListResult](#invoicelistresult)

### Invoices_GetById
Gets the invoice by name.


```js
azure_billing.Invoices_GetById({
  "billingAccountName": "",
  "billingSubscriptionName": "",
  "invoiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * invoiceName **required** `string`: Invoice Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [Invoice](#invoice)

### BillingRoleAssignments_AddByBillingAccount
The operation to add a role assignment to a billing account.


```js
azure_billing.BillingRoleAssignments_AddByBillingAccount({
  "api-version": "",
  "billingAccountName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * parameters **required** [BillingRoleAssignmentPayload](#billingroleassignmentpayload)

#### Output
* output [BillingRoleAssignmentListResult](#billingroleassignmentlistresult)

### Customers_ListByBillingAccount
Lists customers which the current user can work with on-behalf of a partner.


```js
azure_billing.Customers_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $filter `string`: May be used to filter the list of customers.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [CustomerListResult](#customerlistresult)

### Customers_Get
Gets a customer by its id.


```js
azure_billing.Customers_Get({
  "api-version": "",
  "billingAccountName": "",
  "customerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * $expand `string`: May be used to expand enabledAzurePlans, resellers.

#### Output
* output [Customer](#customer)

### BillingPermissions_ListByCustomer
Lists all billing permissions the caller has for a customer.


```js
azure_billing.BillingPermissions_ListByCustomer({
  "api-version": "",
  "billingAccountName": "",
  "customerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.

#### Output
* output [BillingPermissionsListResult](#billingpermissionslistresult)

### BillingSubscriptions_ListByCustomer
Lists billing subscription by customer id.


```js
azure_billing.BillingSubscriptions_ListByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscriptionsListResult](#billingsubscriptionslistresult)

### BillingSubscriptions_GetByCustomer
Get a single billing subscription by id.


```js
azure_billing.BillingSubscriptions_GetByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "billingSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * billingSubscriptionName **required** `string`: Billing Subscription Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingSubscription](#billingsubscription)

### Policies_GetByCustomer
The policy for a given billing account name and customer name.


```js
azure_billing.Policies_GetByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [CustomerPolicy](#customerpolicy)

### Policies_UpdateCustomer
The operation to update a Customer policy.


```js
azure_billing.Policies_UpdateCustomer({
  "api-version": "",
  "billingAccountName": "",
  "customerName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * parameters **required** [CustomerPolicy](#customerpolicy)

#### Output
* output [CustomerPolicy](#customerpolicy)

### Products_ListByCustomer
Lists products by customer id.


```js
azure_billing.Products_ListByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * $filter `string`: May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [ProductsListResult](#productslistresult)

### Products_GetByCustomer
Get a customer's product by name.


```js
azure_billing.Products_GetByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * productName **required** `string`: Invoice Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [Product](#product)

### Transactions_ListByCustomer
Lists the transactions by customer id for given start date and end date.


```js
azure_billing.Transactions_ListByCustomer({
  "billingAccountName": "",
  "customerName": "",
  "api-version": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * customerName **required** `string`: Customer name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * periodStartDate **required** `string`: Start date
  * periodEndDate **required** `string`: End date
  * $filter `string`: May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [TransactionListResult](#transactionlistresult)

### Departments_ListByBillingAccountName
Lists all departments for a user which he has access to.


```js
azure_billing.Departments_ListByBillingAccountName({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $expand `string`: May be used to expand the enrollmentAccounts.
  * $filter `string`: The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [DepartmentListResult](#departmentlistresult)

### Departments_Get
Get the department by id.


```js
azure_billing.Departments_Get({
  "api-version": "",
  "billingAccountName": "",
  "departmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * departmentName **required** `string`: Department Id.
  * $expand `string`: May be used to expand the enrollmentAccounts.
  * $filter `string`: The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [Department](#department)

### EnrollmentAccounts_ListByBillingAccountName
Lists all Enrollment Accounts for a user which he has access to.


```js
azure_billing.EnrollmentAccounts_ListByBillingAccountName({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * $expand `string`: May be used to expand the department.
  * $filter `string`: The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [EnrollmentAccountListResult](#enrollmentaccountlistresult)

### EnrollmentAccounts_GetByEnrollmentAccountId
Get the enrollment account by id.


```js
azure_billing.EnrollmentAccounts_GetByEnrollmentAccountId({
  "api-version": "",
  "billingAccountName": "",
  "enrollmentAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * enrollmentAccountName **required** `string`: Enrollment Account Id.
  * $expand `string`: May be used to expand the Department.
  * $filter `string`: The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [EnrollmentAccount](#enrollmentaccount)

### Invoices_ListByBillingAccount
List of invoices for a billing account.


```js
azure_billing.Invoices_ListByBillingAccount({
  "api-version": "",
  "billingAccountName": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.
  * periodStartDate **required** `string`: Invoice period start date.
  * periodEndDate **required** `string`: Invoice period end date.

#### Output
* output [InvoiceListResult](#invoicelistresult)

### BillingAccounts_ListInvoiceSectionsByCreateSubscriptionPermission
Lists all invoice sections with create subscription permission for a user.


```js
azure_billing.BillingAccounts_ListInvoiceSectionsByCreateSubscriptionPermission({
  "api-version": "",
  "billingAccountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * billingAccountName **required** `string`: billing Account Id.

#### Output
* output [InvoiceSectionListWithCreateSubPermissionResult](#invoicesectionlistwithcreatesubpermissionresult)

### PaymentMethods_ListByBillingAccount
Lists the Payment Methods by billing account Id.


```js
azure_billing.PaymentMethods_ListByBillingAccount({
  "billingAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [PaymentMethodsListResult](#paymentmethodslistresult)

### Products_ListByBillingAccount
Lists products by billing account name.


```js
azure_billing.Products_ListByBillingAccount({
  "billingAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * $filter `string`: May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [ProductsListResult](#productslistresult)

### Transactions_ListByBillingAccount
Lists the transactions by billing account name for given start and end date.


```js
azure_billing.Transactions_ListByBillingAccount({
  "billingAccountName": "",
  "api-version": "",
  "periodStartDate": "",
  "periodEndDate": ""
}, context)
```

#### Input
* input `object`
  * billingAccountName **required** `string`: billing Account Id.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * periodStartDate **required** `string`: Start date
  * periodEndDate **required** `string`: End date
  * $filter `string`: May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [TransactionListResult](#transactionlistresult)

### Operations_List
Lists all of the available billing REST API operations.


```js
azure_billing.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [OperationListResult](#operationlistresult)

### RecipientTransfers_List
Lists the transfers received by caller.


```js
azure_billing.RecipientTransfers_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RecipientTransferDetailsListResult](#recipienttransferdetailslistresult)

### RecipientTransfers_Get
Gets the transfer with given transfer Id.


```js
azure_billing.RecipientTransfers_Get({
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * transferName **required** `string`: Transfer Name.

#### Output
* output [RecipientTransferDetails](#recipienttransferdetails)

### RecipientTransfers_Accept
Accepts the transfer with given transfer Id.


```js
azure_billing.RecipientTransfers_Accept({
  "transferName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * transferName **required** `string`: Transfer Name.
  * parameters **required** [AcceptTransferRequest](#accepttransferrequest)

#### Output
* output [RecipientTransferDetails](#recipienttransferdetails)

### RecipientTransfers_Decline
Declines the transfer with given transfer Id.


```js
azure_billing.RecipientTransfers_Decline({
  "transferName": ""
}, context)
```

#### Input
* input `object`
  * transferName **required** `string`: Transfer Name.

#### Output
* output [RecipientTransferDetails](#recipienttransferdetails)

### RecipientTransfers_Validate
Validates if the products can be transferred in the context of the given transfer name.


```js
azure_billing.RecipientTransfers_Validate({
  "transferName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * transferName **required** `string`: Transfer Name.
  * parameters **required** [AcceptTransferRequest](#accepttransferrequest)

#### Output
* output [ValidateTransferListResponse](#validatetransferlistresponse)

### Address_Validate
Validates the address.


```js
azure_billing.Address_Validate({
  "api-version": "",
  "address": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * address **required** [AddressDetails](#addressdetails)

#### Output
* output [ValidateAddressResponse](#validateaddressresponse)

### LineOfCredits_Get
Get the current line of credit.


```js
azure_billing.LineOfCredits_Get({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [LineOfCredit](#lineofcredit)

### LineOfCredits_Update
Increase the current line of credit.


```js
azure_billing.LineOfCredits_Update({
  "api-version": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * parameters **required** [LineOfCredit](#lineofcredit)

#### Output
* output [LineOfCredit](#lineofcredit)

### BillingProperty_Get
Get billing property by subscription Id.


```js
azure_billing.BillingProperty_Get({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-10-01-preview.

#### Output
* output [BillingProperty](#billingproperty)



## Definitions

### AcceptTransferProperties
* AcceptTransferProperties `object`: Request parameters to accept transfer.
  * productDetails `array`: Request parameters to accept transfer.
    * items [ProductDetails](#productdetails)

### AcceptTransferRequest
* AcceptTransferRequest `object`: Request parameters to accept transfer.
  * properties [AcceptTransferProperties](#accepttransferproperties)

### Action
* Action `string`: the action the caller allowed to do

### AddressDetails
* AddressDetails `object`: Address details.
  * addressLine1 `string`: Address Line1.
  * addressLine2 `string`: Address Line2.
  * addressLine3 `string`: Address Line3.
  * city `string`: Address City.
  * companyName `string`: Company Name.
  * country `string`: Country code uses ISO2, 2-digit format.
  * firstName `string`: First Name.
  * lastName `string`: Last Name.
  * postalCode `string`: Address Postal Code.
  * region `string`: Address Region.

### AddressValidationStatus
* AddressValidationStatus `string` (values: Valid, Invalid): Status of the address validation response.

### Agreement
* Agreement `object`: An agreement resource.
  * properties [AgreementProperties](#agreementproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AgreementListResult
* AgreementListResult `object`: Result of listing agreements.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of agreements.
    * items [Agreement](#agreement)

### AgreementProperties
* AgreementProperties `object`: The properties of the agreement.
  * agreementLink `string`: The link to the agreement.
  * effectiveDate `string`: Effective date.
  * expirationDate `string`: Expiration date.
  * participants `array`: Participants or signer of the agreement.
    * items [Participants](#participants)
  * status `string`: The agreement status

### Amount
* Amount `object`: The Amount.
  * currency `string`: The currency for the amount value.
  * value `number`: Amount value.

### AvailableBalance
* AvailableBalance `object`: Latest available balance on Monetary Credit PI.
  * properties [AvailableBalanceProperties](#availablebalanceproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AvailableBalanceProperties
* AvailableBalanceProperties `object`: The properties of available balance.
  * amount [Amount](#amount)

### AzurePlan
* AzurePlan `object`: Details about the azure plan.
  * skuDescription `string`: The sku description.
  * skuId `string`: The sku id.

### BillingAccount
* BillingAccount `object`: A billing account resource.
  * properties [BillingAccountProperties](#billingaccountproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingAccountListResult
* BillingAccountListResult `object`: Result of listing billing accounts.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of billing accounts.
    * items [BillingAccount](#billingaccount)

### BillingAccountProperties
* BillingAccountProperties `object`: The properties of the billing account.
  * address [AddressDetails](#addressdetails)
  * agreementType `string` (values: MicrosoftCustomerAgreement, EnterpriseAgreement, MicrosoftOnlineServicesProgram, MicrosoftPartnerAgreement): The type of agreement.
  * billingProfiles `array`: The billing profiles associated to the billing account. By default this is not populated, unless it's specified in $expand.
    * items [BillingProfile](#billingprofile)
  * customerType `string` (values: Enterprise, Individual, Partner): The type of customer.
  * departments `array`: The departments associated to the enrollment.
    * items [Department](#department)
  * displayName `string`: The billing account name.
  * enrollmentAccounts `array`: The accounts associated to the enrollment.
    * items [EnrollmentAccount](#enrollmentaccount)
  * enrollmentDetails [Enrollment](#enrollment)
  * organizationId `string`: Organization id.

### BillingAccountUpdateRequest
* BillingAccountUpdateRequest `object`: The request properties of the billing account that can be updated.
  * properties [BillingAccountProperties](#billingaccountproperties)

### BillingPermissionsListResult
* BillingPermissionsListResult `object`: Result of list billingPermissions a caller has on a billing account.
  * value `array`: The list of billingPermissions a caller has on a billing account.
    * items [BillingPermissionsProperties](#billingpermissionsproperties)

### BillingPermissionsProperties
* BillingPermissionsProperties `object`: The set of allowed action and not allowed actions a caller has on a billing account
  * actions `array`: The set of actions that the caller is allowed to do
    * items [Action](#action)
  * notActions `array`: The set of actions the caller is not allowed to do
    * items [NotAction](#notaction)

### BillingProfile
* BillingProfile `object`: A billing profile resource.
  * properties [BillingProfileProperties](#billingprofileproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingProfileCreationRequest
* BillingProfileCreationRequest `object`: The request parameters for creating a new billing profile.
  * address [AddressDetails](#addressdetails)
  * displayName `string`: The billing profile name.
  * enabledAzurePlans `array`: Enabled azure plans for this billing profile.
    * items [AzurePlan](#azureplan)
  * invoiceEmailOptIn `boolean`: If the billing profile is opted in to receive invoices via email.
  * poNumber `string`: Purchase order number.

### BillingProfileListResult
* BillingProfileListResult `object`: Result of listing billing profiles.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of billing profiles.
    * items [BillingProfile](#billingprofile)

### BillingProfileProperties
* BillingProfileProperties `object`: The properties of the billing profile.
  * address [AddressDetails](#addressdetails)
  * currency `string`: The currency associated with the billing profile.
  * displayName `string`: The billing profile name.
  * enabledAzurePlans `array`: Information about the enabled azure plans.
    * items [AzurePlan](#azureplan)
  * invoiceDay `integer`: Invoice day.
  * invoiceEmailOptIn `boolean`: If the billing profile is opted in to receive invoices via email.
  * invoiceSections `array`: The invoice sections associated to the billing profile.
    * items [InvoiceSection](#invoicesection)
  * poNumber `string`: Purchase order number.

### BillingProperty
* BillingProperty `object`: A billing property resource.
  * properties [BillingPropertyProperties](#billingpropertyproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingPropertyProperties
* BillingPropertyProperties `object`: The billing property.
  * billingAccountDisplayName `string`: Billing account display name.
  * billingAccountId `string`: Billing account Id.
  * billingProfileDisplayName `string`: Billing profile display name.
  * billingProfileId `string`: Billing profile Id.
  * billingTenantId `string`: Billing tenant Id.
  * costCenter `string`: Cost center name.
  * invoiceSectionDisplayName `string`: Invoice Section display name.
  * invoiceSectionId `string`: Invoice Section Id.
  * productId `string`: Product Id.
  * productName `string`: Product name.
  * skuDescription `string`: SKU description.
  * skuId `string`: SKU Id.

### BillingRoleAssignment
* BillingRoleAssignment `object`: a role assignment
  * properties [BillingRoleAssignmentProperties](#billingroleassignmentproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingRoleAssignmentListResult
* BillingRoleAssignmentListResult `object`: Result of get list of role assignments
  * value `array`: The list role assignments
    * items [BillingRoleAssignment](#billingroleassignment)

### BillingRoleAssignmentPayload
* BillingRoleAssignmentPayload `object`: The payload use to update role assignment on a scope
  * billingRoleDefinitionId `string`: The role definition id
  * principalId `string`: The user's principal id that the role gets assigned to

### BillingRoleAssignmentProperties
* BillingRoleAssignmentProperties `object`: The properties of the a role assignment.
  * createdByPrincipalId `string`: the creator's principal Id
  * createdByPrincipalTenantId `string`: the creator's tenant Id
  * createdOn `string`: the date the role assignment is created
  * name `string`: the name of the role assignment
  * principalId `string`: The user's principal id that the role gets assigned to
  * roleDefinitionName `string`: The role definition id
  * scope `string`: The scope the role get assigned to

### BillingRoleDefinition
* BillingRoleDefinition `object`: Result of get role definition for a role.
  * properties [BillingRoleDefinitionProperties](#billingroledefinitionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingRoleDefinitionListResult
* BillingRoleDefinitionListResult `object`: list the role definitions.
  * value `array`: The list of role definitions.
    * items [BillingRoleDefinition](#billingroledefinition)

### BillingRoleDefinitionProperties
* BillingRoleDefinitionProperties `object`: The properties of the a role definition.
  * description `string`: The role description
  * permissions `array`: The billingPermissions the role has
    * items [BillingPermissionsProperties](#billingpermissionsproperties)
  * roleName `string`: The name of the role

### BillingSubscription
* BillingSubscription `object`: A billing Subscription resource.
  * properties [BillingSubscriptionProperties](#billingsubscriptionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingSubscriptionProperties
* BillingSubscriptionProperties `object`: The usage context properties.
  * billingProfileDisplayName `string`: Billing Profile display name to which this product belongs.
  * billingProfileId `string`: Billing Profile id to which this product belongs.
  * customerDisplayName `string`: Display name of customer to which this product belongs.
  * customerId `string`: Customer id to which this product belongs.
  * displayName `string`: display name.
  * invoiceSectionDisplayName `string`: Invoice section display name to which this product belongs.
  * invoiceSectionId `string`: Invoice section id to which this product belongs.
  * lastMonthCharges [Amount](#amount)
  * monthToDateCharges [Amount](#amount)
  * reseller [Reseller](#reseller)
  * skuDescription `string`: The sku description.
  * skuId `string`: The sku id.
  * subscriptionBillingStatus `string` (values: Active, Inactive, Abandoned, Deleted, Warning): Subscription billing status.
  * subscriptionId `string`: Subscription Id.

### BillingSubscriptionsListResult
* BillingSubscriptionsListResult `object`: Result of listing billing subscriptions.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of billing subscriptions.
    * items [BillingSubscription](#billingsubscription)

### Customer
* Customer `object`: A partner's customer.
  * properties [CustomerProperties](#customerproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### CustomerListResult
* CustomerListResult `object`: Result of listing customers.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of customers.
    * items [Customer](#customer)

### CustomerPolicy
* CustomerPolicy `object`: The Customer's Policy.
  * properties [CustomerPolicyProperties](#customerpolicyproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### CustomerPolicyProperties
* CustomerPolicyProperties `object`: The properties of a Customer's policy.
  * viewCharges `string` (values: Allowed, NotAllowed): Customer can view retail prices.

### CustomerProperties
* CustomerProperties `object`: The properties of a customer.
  * displayName `string`: The name of the customer.
  * enabledAzurePlans `array`: Information about the product.
    * items [AzurePlan](#azureplan)
  * resellers `array`: The resellers which are allowed to provide service to this customer.
    * items [Reseller](#reseller)

### Department
* Department `object`: A department resource.
  * properties [DepartmentProperties](#departmentproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DepartmentListResult
* DepartmentListResult `object`: Result of listing departments.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of departments.
    * items [Department](#department)

### DepartmentProperties
* DepartmentProperties `object`: The properties of the department.
  * costCenter `string`: The cost center name.
  * departmentName `string`: The name for department.
  * enrollmentAccounts `array`: Associated enrollment accounts. By default this is not populated, unless it's specified in $expand.
    * items [EnrollmentAccount](#enrollmentaccount)
  * status `string`: The status for department.

### DetailedTransferStatus
* DetailedTransferStatus `object`: Detailed transfer status.
  * errorDetails [Error](#error)
  * productId `string`: Id of product being transferred.
  * productType [ProductType](#producttype)
  * transferStatus [ProductTransferStatus](#producttransferstatus)

### Document
* Document `object`: The properties of the invoice download.
  * kind `string` (values: Invoice, VoidNote, Receipt, CreditNote): Document type.
  * url `string`: Document URL.

### DownloadUrl
* DownloadUrl `object`: A secure URL that can be used to download a an entity until the URL expires.
  * expiryTime `string`: The time in UTC at which this download URL will expire.
  * url `string`: The URL to the PDF file.

### EligibleProductType
* EligibleProductType `string` (values: DevTestAzureSubscription, StandardAzureSubscription, AzureReservation): Type of the products that can be transferred.

### Enrollment
* Enrollment `object`: Current entity level details
  * billingCycle `string`: Enrollment billing cycle
  * channel `string`: The channel for Enrollment
  * countryCode `string`: The countryCode for Enrollment
  * currency `string`: The currency associated with enrollment
  * endDate `string`: Enrollment End Date
  * language `string`: The language for Enrollment
  * policies [EnrollmentPolicies](#enrollmentpolicies)
  * startDate `string`: Enrollment Start Date
  * status `string`: Enrollment status

### EnrollmentAccount
* EnrollmentAccount `object`: An account resource.
  * properties [EnrollmentAccountProperties](#enrollmentaccountproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### EnrollmentAccountContext
* EnrollmentAccountContext `object`: The rating context.
  * costCenter `string`: The cost center name.
  * endDate `string`: Account End Date
  * enrollmentAccountName `string`: The enrollment account id.
  * startDate `string`: Account Start Date

### EnrollmentAccountListResult
* EnrollmentAccountListResult `object`: Result of listing enrollment accounts.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of enrollment accounts.
    * items [EnrollmentAccount](#enrollmentaccount)

### EnrollmentAccountProperties
* EnrollmentAccountProperties `object`: The properties of the account.
  * accountName `string`: The account name.
  * accountOwner `string`: The account owner
  * costCenter `string`: The cost center name.
  * department [Department](#department)
  * endDate `string`: Account End Date
  * startDate `string`: Account Start Date
  * status `string`: The status for account.

### EnrollmentPolicies
* EnrollmentPolicies `object`: The attributes associated with legacy enrollment
  * accountOwnerViewCharges `boolean`: The accountOwnerViewCharges flag for Enrollment
  * departmentAdminViewCharges `boolean`: The departmentAdminViewCharges flag for Enrollment
  * marketplacesEnabled `boolean`: The marketplaces flag for Enrollment
  * reservedInstancesEnabled `boolean`: The reserved instances flag for Enrollment

### Error
* Error `object`: Error details for transfer execution.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error message.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### InitiateTransferProperties
* InitiateTransferProperties `object`: Request parameters to initiate transfer.
  * recipientEmailId `string`: Email Id of recipient for transfer.
  * resellerId `string`: Optional reseller Id for transfer.

### InitiateTransferRequest
* InitiateTransferRequest `object`: Request parameters to initiate transfer.
  * properties [InitiateTransferProperties](#initiatetransferproperties)

### Instruction
* Instruction `object`: A instruction resource.
  * properties [InstructionProperties](#instructionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InstructionListResult
* InstructionListResult `object`: Result of listing instructions.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of instructions.
    * items [Instruction](#instruction)

### InstructionProperties
* InstructionProperties `object`: A billing instruction used during invoice generation.
  * amount **required** `number`: The amount budgeted for this billing instruction.
  * endDate **required** `string`: The date this billing instruction is no longer in effect.
  * startDate **required** `string`: The date this billing instruction goes into effect.

### Invoice
* Invoice `object`: An invoice resource.
  * properties [InvoiceProperties](#invoiceproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InvoiceListResult
* InvoiceListResult `object`: Result of listing invoices.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of invoices.
    * items [Invoice](#invoice)

### InvoiceProperties
* InvoiceProperties `object`: The properties of the invoice.
  * amountDue [Amount](#amount)
  * billedAmount [Amount](#amount)
  * billingProfileDisplayName `string`: The billing profile display name this invoice belongs to.
  * billingProfileId `string`: The billing profile id this invoice belongs to.
  * documents `array`: List of documents available to download including invoice and tax documents.
    * items [Document](#document)
  * dueDate `string`: The due date for invoice.
  * invoiceDate `string`: The date when invoice was created.
  * invoicePeriodEndDate `string`: The end date of the billing period.
  * invoicePeriodStartDate `string`: The start date of the billing period.
  * invoiceType `string` (values: AzureService, AzureMarketplace, AzureSupport): Invoice type.
  * payments `array`: List of payments.
    * items [PaymentProperties](#paymentproperties)
  * purchaseOrderNumber `string`: The purchase identifier for the invoice.
  * status `string` (values: PastDue, Due, Paid, Void): Invoice status.

### InvoiceSection
* InvoiceSection `object`: An InvoiceSection resource.
  * properties [InvoiceSectionProperties](#invoicesectionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InvoiceSectionCreationRequest
* InvoiceSectionCreationRequest `object`: The properties of an InvoiceSection.
  * displayName `string`: The name of the InvoiceSection.

### InvoiceSectionListResult
* InvoiceSectionListResult `object`: Result of listing invoice sections.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of invoice sections.
    * items [InvoiceSection](#invoicesection)

### InvoiceSectionListWithCreateSubPermissionResult
* InvoiceSectionListWithCreateSubPermissionResult `object`: Result of listing invoice section properties with create subscription permission.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of invoice section properties with create subscription permission.
    * items [InvoiceSectionWithCreateSubPermission](#invoicesectionwithcreatesubpermission)

### InvoiceSectionProperties
* InvoiceSectionProperties `object`: The properties of an InvoiceSection.
  * displayName `string`: The name of the InvoiceSection.

### InvoiceSectionWithCreateSubPermission
* InvoiceSectionWithCreateSubPermission `object`: Invoice section properties with create subscription permission.
  * billingProfileDisplayName `string`: Billing profile display name.
  * billingProfileId `string`: Billing profile Id.
  * enabledAzurePlans `array`: Enabled azure plans for the associated billing profile.
    * items [AzurePlan](#azureplan)
  * invoiceSectionDisplayName `string`: Invoice Section display name.
  * invoiceSectionId `string`: Invoice Section Id.

### LineOfCredit
* LineOfCredit `object`: Line of credit resource.
  * properties [LineOfCreditProperties](#lineofcreditproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### LineOfCreditProperties
* LineOfCreditProperties `object`: The properties of the line of credit.
  * creditLimit [Amount](#amount)
  * reason `string`: The reason for the line of credit status when not approved.
  * remainingBalance [Amount](#amount)
  * status `string` (values: Approved, Rejected): The line of credit status.

### NotAction
* NotAction `string`: the action the caller doesn't allowed to do

### Operation
* Operation `object`: A Billing REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Billing.
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result listing billing operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of billing operations supported by the Microsoft.Billing resource provider.
    * items [Operation](#operation)

### Participants
* Participants `object`: Details about the participant or signer.
  * email `string`: The email address of the participant or signer.
  * status `string`: The signing status
  * statusDate `string`: The date when status got changed.

### PaymentMethod
* PaymentMethod `object`: A payment method resource.
  * properties [PaymentMethodProperties](#paymentmethodproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PaymentMethodProperties
* PaymentMethodProperties `object`: The properties of the payment method.
  * currency `string`: The currency associated with the payment method.
  * details `string`: Details about the payment method.
  * expiration `string`: Expiration month and year.
  * paymentMethodType `string` (values: Credits, ChequeWire): Payment method type.

### PaymentMethodsListResult
* PaymentMethodsListResult `object`: Result of listing payment methods.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of payment methods.
    * items [PaymentMethod](#paymentmethod)

### PaymentProperties
* PaymentProperties `object`: The properties of the payment.
  * amount [Amount](#amount)
  * date `string`: The date of the payment.
  * paymentMethodFamily `string` (values: Credits, CheckWire, CreditCard, None): The payment method family.
  * paymentMethodType `string`: The type of payment method.
  * paymentType `string`: The type of payment.

### Policy
* Policy `object`: The Policy.
  * properties [PolicyProperties](#policyproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PolicyProperties
* PolicyProperties `object`: The properties of policy.
  * marketplacePurchases `string` (values: AllAllowed, OnlyFreeAllowed, NotAllowed): The marketplace purchases are free, allowed or not allowed.
  * reservationPurchases `string` (values: Allowed, NotAllowed): The reservation purchases allowed or not.
  * viewCharges `string` (values: Allowed, NotAllowed): Who can view charges.

### Product
* Product `object`: A product resource.
  * properties [ProductProperties](#productproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ProductDetails
* ProductDetails `object`: Details of the product to be transferred.
  * productId `string`: Id of product to be transferred.
  * productType [ProductType](#producttype)

### ProductProperties
* ProductProperties `object`: The properties of the product.
  * availabilityId `string`: Availability Id.
  * billingFrequency `string` (values: OneTime, Monthly, UsageBased): Billing frequency.
  * billingProfileDisplayName `string`: Billing Profile display name to which this product belongs.
  * billingProfileId `string`: Billing Profile id to which this product belongs.
  * customerDisplayName `string`: Display name of customer to which this product belongs.
  * customerId `string`: Customer id to which this product belongs.
  * displayName `string`: The display name of the product.
  * endDate `string`: end date.
  * invoiceSectionDisplayName `string`: Invoice section display name to which this product belongs.
  * invoiceSectionId `string`: Invoice section id to which this product belongs.
  * lastCharge [Amount](#amount)
  * lastChargeDate `string`: The date of the last charge.
  * parentProductId `string`: Parent Product Id.
  * productType `string`: The type of product.
  * productTypeId `string`: The product type id.
  * purchaseDate `string`: The date of purchase.
  * quantity `number`: The purchased product quantity.
  * reseller [Reseller](#reseller)
  * skuDescription `string`: Sku description.
  * skuId `string`: Sku Id.
  * status `string` (values: Active, Inactive, PastDue, Expiring, Expired, Disabled, Cancelled, AutoRenew): Product status.

### ProductTransferStatus
* ProductTransferStatus `string` (values: NotStarted, InProgress, Completed, Failed): Possible transfer status.

### ProductTransferValidationErrorCode
* ProductTransferValidationErrorCode `string` (values: InvalidSource, ProductNotActive, InsufficientPermissionOnSource, InsufficientPermissionOnDestination, DestinationBillingProfilePastDue, ProductTypeNotSupported, CrossBillingAccountNotAllowed, NotAvailableForDestinationMarket, OneTimePurchaseProductTransferNotAllowed): Error code of the transfer validation response.

### ProductType
* ProductType `string` (values: AzureSubscription, AzureReservation): Type of the product to be transferred.

### ProductsListResult
* ProductsListResult `object`: Result of listing products. It contains a list of available products summaries in reverse chronological order by purchase date.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of products.
    * items [Product](#product)

### RecipientTransferDetails
* RecipientTransferDetails `object`: Details of the transfer.
  * properties [RecipientTransferProperties](#recipienttransferproperties)

### RecipientTransferDetailsListResult
* RecipientTransferDetailsListResult `object`: Result of listing details of the transfer received by caller.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of transfers received by caller.
    * items [RecipientTransferDetails](#recipienttransferdetails)

### RecipientTransferProperties
* RecipientTransferProperties `object`: Transfer Details.
  * allowedProductType `array`: Type of subscriptions that can be transferred.
    * items [EligibleProductType](#eligibleproducttype)
  * canceledBy `string`: Email Id who user canceled the transfer.
  * creationTime `string`: Transfer creation time.
  * detailedTransferStatus `array`: Detailed transfer status.
    * items [DetailedTransferStatus](#detailedtransferstatus)
  * expirationTime `string`: Transfer expiration time.
  * initiatorCustomerType `string`: Customer type of the initiator.
  * initiatorEmailId `string`: Email Id of initiator of transfer.
  * lastModifiedTime `string`: Transfer last modification time.
  * recipientEmailId `string`: Email Id of recipient of transfer.
  * resellerId `string`: Reseller Id for transfer.
  * resellerName `string`: Reseller name for transfer.
  * transferStatus [TransferStatus](#transferstatus)

### Reseller
* Reseller `object`: Details about a reseller.
  * description `string`: A description of the reseller.
  * resellerId `string`: The reseller id.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SubscriptionTransferValidationErrorCode
* SubscriptionTransferValidationErrorCode `string` (values: InvalidSource, SubscriptionNotActive, InsufficientPermissionOnSource, InsufficientPermissionOnDestination, DestinationBillingProfilePastDue, SubscriptionTypeNotSupported, CrossBillingAccountNotAllowed, NotAvailableForDestinationMarket): Error code of the transfer validation response.

### Transaction
* Transaction `object`: A reservation transaction resource.
  * properties [TransactionProperties](#transactionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TransactionListResult
* TransactionListResult `object`: Result of listing reservation transactions.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation transactions.
    * items [Transaction](#transaction)

### TransactionProperties
* TransactionProperties `object`: The properties of the reservation transaction.
  * billingProfileDisplayName `string`: Billing Profile display name to which this product belongs.
  * billingProfileId `string`: Billing Profile id to which this product belongs.
  * customerDisplayName `string`: Display name of customer to which this product belongs.
  * customerId `string`: Customer id to which this product belongs.
  * date `string`: The date of reservation transaction.
  * invoice `string`: Invoice number or 'pending' if not invoiced.
  * invoiceSectionDisplayName `string`: Invoice section display name to which this product belongs.
  * invoiceSectionId `string`: Invoice section id to which this product belongs.
  * kind `string` (values: all, reservation): The kind of transaction. Choices are all and reservation.
  * orderId `string`: The reservation order id.
  * orderName `string`: The reservation order name.
  * productDescription `string`: Product description.
  * productFamily `string`: The product family.
  * productType `string`: The type of product.
  * productTypeId `string`: The product type id.
  * quantity `integer`: Purchase quantity.
  * subscriptionId `string`: The subscription id.
  * subscriptionName `string`: The subscription name.
  * transactionAmount [Amount](#amount)
  * transactionType `string` (values: Purchase, Usage Charge): Transaction types.

### TransferBillingSubscriptionRequest
* TransferBillingSubscriptionRequest `object`: Request parameters to transfer billing subscription.
  * properties [TransferBillingSubscriptionRequestProperties](#transferbillingsubscriptionrequestproperties)

### TransferBillingSubscriptionRequestProperties
* TransferBillingSubscriptionRequestProperties `object`: Request parameters to transfer billing subscription.
  * destinationBillingProfileId `string`: The destination billing profile id.
  * destinationInvoiceSectionId `string`: The destination invoice section id.

### TransferBillingSubscriptionResult
* TransferBillingSubscriptionResult `object`: Request parameters to transfer billing subscription.
  * properties [TransferBillingSubscriptionResultProperties](#transferbillingsubscriptionresultproperties)

### TransferBillingSubscriptionResultProperties
* TransferBillingSubscriptionResultProperties `object`: Transfer billing subscription result properties.
  * billingSubscriptionName `string`: The destination billing subscription id.

### TransferDetails
* TransferDetails `object`: Details of the transfer.
  * properties [TransferProperties](#transferproperties)

### TransferDetailsListResult
* TransferDetailsListResult `object`: Result of listing details of the transfer initiated by caller.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of transfers initiated by caller.
    * items [TransferDetails](#transferdetails)

### TransferProductRequestProperties
* TransferProductRequestProperties `object`: The properties of the product to initiate a transfer.
  * destinationBillingProfileId `string`: The destination billing profile id.
  * destinationInvoiceSectionId `string`: The destination invoice section id.

### TransferProperties
* TransferProperties `object`: Transfer details
  * billingAccountId `string`: Target billing account Id.
  * billingProfileId `string`: Target billing profile Id.
  * canceledBy `string`: Email Id who user canceled the transfer.
  * creationTime `string`: Transfer creation time.
  * detailedTransferStatus `array`: Detailed transfer status.
    * items [DetailedTransferStatus](#detailedtransferstatus)
  * expirationTime `string`: Transfer expiration time.
  * initiatorCustomerType `string`: Customer type of the initiator.
  * initiatorEmailId `string`: Email Id of initiator of transfer.
  * invoiceSectionId `string`: Target invoice section Id.
  * lastModifiedTime `string`: Transfer last modification time.
  * recipientEmailId `string`: Email Id of recipient of transfer.
  * resellerId `string`: Reseller Id for transfer.
  * resellerName `string`: Reseller name for transfer.
  * transferStatus [TransferStatus](#transferstatus)

### TransferStatus
* TransferStatus `string` (values: Pending, InProgress, Completed, CompletedWithErrors, Failed, Canceled, Declined): Possible transfer status.

### UpdateAutoRenewOperation
* UpdateAutoRenewOperation `object`: Summary of cancel product operation
  * properties [UpdateAutoRenewOperationProperties](#updateautorenewoperationproperties)

### UpdateAutoRenewOperationProperties
* UpdateAutoRenewOperationProperties `object`: update auto renew operation properties
  * endDate `string`: The end date of this asset

### UpdateAutoRenewRequest
* UpdateAutoRenewRequest `object`: Request parameters to update auto renew for support product.
  * autoRenew `string` (values: true, false): Request parameters to update auto renew policy a product.

### ValidateAddressResponse
* ValidateAddressResponse `object`: Result of the address validation
  * status [AddressValidationStatus](#addressvalidationstatus)
  * suggestedAddresses `array`: list of suggested addresses.
    * items [AddressDetails](#addressdetails)
  * validationMessage `string`: Validation error message.

### ValidateProductTransferEligibilityError
* ValidateProductTransferEligibilityError `object`: Error details of the product transfer eligibility validation.
  * code [ProductTransferValidationErrorCode](#producttransfervalidationerrorcode)
  * details `string`: Detailed error message explaining the error.
  * message `string`: The error message.

### ValidateProductTransferEligibilityResult
* ValidateProductTransferEligibilityResult `object`: Result of the product transfer eligibility validation.
  * errorDetails [ValidateProductTransferEligibilityError](#validateproducttransfereligibilityerror)
  * isTransferEligible `boolean`: Specifies whether the transfer is eligible or not.

### ValidateSubscriptionTransferEligibilityError
* ValidateSubscriptionTransferEligibilityError `object`: Error details of the transfer eligibility validation
  * code [SubscriptionTransferValidationErrorCode](#subscriptiontransfervalidationerrorcode)
  * details `string`: Detailed error message explaining the error.
  * message `string`: The error message.

### ValidateSubscriptionTransferEligibilityResult
* ValidateSubscriptionTransferEligibilityResult `object`: Result of the transfer eligibility validation.
  * errorDetails [ValidateSubscriptionTransferEligibilityError](#validatesubscriptiontransfereligibilityerror)
  * isTransferEligible `boolean`: Specifies whether the transfer is eligible or not.

### ValidateTransferListResponse
* ValidateTransferListResponse `object`: Result of transfer validation.
  * value `array`: The list of transfer validation results.
    * items [ValidateTransferResponse](#validatetransferresponse)

### ValidateTransferResponse
* ValidateTransferResponse `object`: Transfer validation response.
  * properties [ValidateTransferResponseProperties](#validatetransferresponseproperties)

### ValidateTransferResponseProperties
* ValidateTransferResponseProperties `object`: Properties of transfer validation response.
  * productId `string`: The product id for which this result applies.
  * results `array`: Array of validation results.
    * items [ValidationResultProperties](#validationresultproperties)
  * status `string`: The status of validation

### ValidationResultProperties
* ValidationResultProperties `object`: The properties of the validation result.
  * code `string`: Result Code.
  * level `string`: Result Level.
  * message `string`: The validation message.


