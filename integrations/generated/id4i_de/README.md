# @datafire/id4i_de

Client library for ID4i API

## Installation and Usage
```bash
npm install --save @datafire/id4i_de
```
```js
let id4i_de = require('@datafire/id4i_de').create({
  Authorization: ""
});

.then(data => {
  console.log(data);
});
```

## Description

ID4i HTTP API

## Actions

### requestPasswordReset
Requesting a reset for a new password. 


```js
id4i_de.requestPasswordReset({
  "body": {
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PasswordResetRequest](#passwordresetrequest)

#### Output
* output [SimpleMessageResponse](#simplemessageresponse)

### verifyPasswordReset
Setting a new password and verifying the request to set the password.


```js
id4i_de.verifyPasswordReset({
  "body": {
    "password": "",
    "token": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PasswordResetVerificationRequest](#passwordresetverificationrequest)

#### Output
* output [SimpleMessageResponse](#simplemessageresponse)

### registerUser
Registering a new user.


```js
id4i_de.registerUser({
  "body": {
    "email": "",
    "password": "",
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UserRegistrationRequest](#userregistrationrequest)

#### Output
* output [UserRegistrationResponse](#userregistrationresponse)

### completeRegistration
Completing a registration e.g. for invited users. Finish registration with a username and a password.


```js
id4i_de.completeRegistration({
  "body": {
    "password": "",
    "username": "",
    "verificationToken": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CompleteUserRegistrationRequest](#completeuserregistrationrequest)

#### Output
*Output schema unknown*

### verifyUserRegistration
Verifies a new user registration.


```js
id4i_de.verifyUserRegistration({
  "body": {
    "token": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RegistrationVerificationTokenPresentation](#registrationverificationtokenpresentation)

#### Output
*Output schema unknown*

### listAllApiKeysOfOrganization
Finding all API key assigned to the specified organization in a paginated manner.


```js
id4i_de.listAllApiKeysOfOrganization({}, context)
```

#### Input
* input `object`
  * organizationId `string`: The namespace of the organization to search in.
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfApiKeyPresentation](#paginatedresponseofapikeypresentation)

### createNewApiKey
Creation of a new API key.


```js
id4i_de.createNewApiKey({
  "body": {
    "label": "",
    "organizationId": "",
    "secret": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ApiKeyCreationRequest](#apikeycreationrequest)

#### Output
* output [ApiKeyPresentation](#apikeypresentation)

### listAllApiKeyPrivileges
Listing all possible API key privileges.


```js
id4i_de.listAllApiKeyPrivileges({}, context)
```

#### Input
* input `object`
  * id4nConcerning `boolean`: id4nConcerning
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfApiKeyPrivilegeInfo](#paginatedresponseofapikeyprivilegeinfo)

### deleteApiKey
Deletion of an API key.


```js
id4i_de.deleteApiKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The API key to delete.

#### Output
*Output schema unknown*

### getApiKey
Showing the details of an API key.


```js
id4i_de.getApiKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The API key to show.

#### Output
* output [ApiKeyPresentation](#apikeypresentation)

### updateApiKey
API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.


```js
id4i_de.updateApiKey({
  "key": "",
  "body": {
    "newLabel": ""
  }
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The API key to be updated.
  * body **required** [ApiKeyChangeRequest](#apikeychangerequest)

#### Output
*Output schema unknown*

### removeApiKeyPrivilege
Remove privilege


```js
id4i_de.removeApiKeyPrivilege({
  "key": "",
  "body": {
    "privilege": ""
  }
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * body **required** [RemoveApiKeyPrivilegeRequest](#removeapikeyprivilegerequest)

#### Output
*Output schema unknown*

### listApiKeyPrivileges
List privileges


```js
id4i_de.listApiKeyPrivileges({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfApiKeyPrivilege](#paginatedresponseofapikeyprivilege)

### addApiKeyPrivilege
Add privilege


```js
id4i_de.addApiKeyPrivilege({
  "key": "",
  "body": {
    "privilege": ""
  }
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * body **required** [AddApiKeyPrivilegeRequest](#addapikeyprivilegerequest)

#### Output
*Output schema unknown*

### removeApiKeyPrivilegeForId4ns
Remove id4ns of a privilege


```js
id4i_de.removeApiKeyPrivilegeForId4ns({
  "key": "",
  "privilege": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * privilege **required** `string`: privilege
  * body **required** [ListOfId4ns](#listofid4ns)

#### Output
*Output schema unknown*

### listId4ns
Listing ID4ns of a id4n concerning privilege


```js
id4i_de.listId4ns({
  "key": "",
  "privilege": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * privilege **required** `string`: privilege
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfId4nPresentation](#paginatedresponseofid4npresentation)

### addApiKeyPrivilegeForId4ns
Add ID4ns of a privilege


```js
id4i_de.addApiKeyPrivilegeForId4ns({
  "key": "",
  "privilege": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key
  * privilege **required** `string`: privilege
  * body **required** [ListOfId4ns](#listofid4ns)

#### Output
*Output schema unknown*

### getSumForOrganization
Get billing amount of services for a given organization


```js
id4i_de.getSumForOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The organization to compute the billing information for
  * fromDate `string`: Billing start date
  * toDate `string`: Billing end date

#### Output
* output [ServiceCosts](#servicecosts)

### getPositionsForOrganization
Get billing positions for a given organization


```js
id4i_de.getPositionsForOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The organization to compute the billing information for
  * fromDate `string`: Billing start date
  * toDate `string`: Billing end date

#### Output
* output `array`
  * items [BillingPosition](#billingposition)

### listOrganizationChangeLog
Listing change log entries of the specified organization id.


```js
id4i_de.listOrganizationChangeLog({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace identifying the organization whose change log entries are to be listed
  * messageMimeType `string`: The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' 
  * fromDate `string`: From date time as UTC Date-Time format
  * toDate `string`: To date time as UTC Date-Time format
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfChangeLogEntry](#paginatedresponseofchangelogentry)

### createCollection
Create collection


```js
id4i_de.createCollection({
  "body": {
    "length": 0,
    "organizationId": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCollectionRequest](#createcollectionrequest)

#### Output
* output [Id4n](#id4n)

### deleteCollection
Delete collection


```js
id4i_de.deleteCollection({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n

#### Output
*Output schema unknown*

### findCollection
Find collection


```js
id4i_de.findCollection({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n

#### Output
* output [GuidCollection](#guidcollection)

### updateCollection
Update collection changing only the given values


```js
id4i_de.updateCollection({
  "id4n": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * body **required** [GuidCollection](#guidcollection)

#### Output
* output `object`

### removeElementsFromCollection
Remove elements from collection


```js
id4i_de.removeElementsFromCollection({
  "id4n": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * body **required** [ListOfId4ns](#listofid4ns)

#### Output
*Output schema unknown*

### listElementsOfCollection
List contents of the collection


```js
id4i_de.listElementsOfCollection({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfGuid](#paginatedresponseofguid)

### addElementsToCollection
Add elements to collection


```js
id4i_de.addElementsToCollection({
  "id4n": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * body **required** [ListOfId4ns](#listofid4ns)

#### Output
*Output schema unknown*

### listCountries
List countries


```js
id4i_de.listCountries({}, context)
```

#### Input
* input `object`
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfCountry](#paginatedresponseofcountry)

### listAllDocuments
Listing all documents of an id4n


```js
id4i_de.listAllDocuments({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * owner `string`: Filter by owner organization
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfDocument](#paginatedresponseofdocument)

### listDocuments
Listing documents of an id4n seen by a specified organization


```js
id4i_de.listDocuments({
  "organizationId": "",
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * owner `string`: Filter by owner organization
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfDocument](#paginatedresponseofdocument)

### createDocument
The documents' mime type is suggested on octet-stream data. Otherwise the specified content mime type is used.


```js
id4i_de.createDocument({
  "organizationId": "",
  "id4n": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * content **required** `string`: content

#### Output
* output [Document](#document)

### putDocument
Creating or overwriting an existing document 


```js
id4i_de.putDocument({
  "organizationId": "",
  "id4n": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * content **required** `string`: content

#### Output
* output [Document](#document)

### deleteDocument
Delete a document


```js
id4i_de.deleteDocument({
  "organizationId": "",
  "id4n": "",
  "fileName": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName

#### Output
*Output schema unknown*

### readDocument
Read document contents


```js
id4i_de.readDocument({
  "organizationId": "",
  "id4n": "",
  "fileName": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName

#### Output
* output `string`

### getDocument
Retrieve a document (meta-data only, no content)


```js
id4i_de.getDocument({
  "organizationId": "",
  "id4n": "",
  "fileName": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName

#### Output
* output [Document](#document)

### updateDocumentMetadata
Update a document


```js
id4i_de.updateDocumentMetadata({
  "organizationId": "",
  "id4n": "",
  "fileName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName
  * body **required** [DocumentUpdate](#documentupdate)

#### Output
* output [Document](#document)

### createGuid
Creating one or more GUIDs with a specified length.


```js
id4i_de.createGuid({
  "body": {
    "count": 0,
    "length": 0,
    "organizationId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateGuidRequest](#createguidrequest)

#### Output
* output [ListOfId4ns](#listofid4ns)

### getGuidsWithoutCollection
Retrieve GUIDs not in any collection


```js
id4i_de.getGuidsWithoutCollection({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization to search GUIDs for
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfGuid](#paginatedresponseofguid)

### getGuid
Retrieve GUID information


```js
id4i_de.getGuid({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The GUID number

#### Output
* output [Guid](#guid)

### updateGuid
Allows ownership transfer.


```js
id4i_de.updateGuid({
  "id4n": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The GUID number
  * body **required** [Guid](#guid)

#### Output
* output `object`

### filteredList
Lists the history of a GUID


```js
id4i_de.filteredList({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * includePrivate `boolean`: Also return private history entries
  * organization `string`: Show only entries created by one of the given organizations. This parameter can be used multiple times.
  * type `array` (values: CREATED, DESTROYED, RECYCLED, SHIPMENT_PREPARED, STORED, RETRIEVED_FROM_STORAGE, PACKAGED, DISPATCHED, RECEIVED, DELIVERY_REFUSED, REPROCESSING_STARTED, REPROCESSING_STEP_STARTED, REPROCESSING_STEP_CANCELLED, REPROCESSING_STEP_FINISHED, REPROCESSING_CANCELLED, REPROCESSING_FINISHED, DISASSEMBLED, MAINTENANCE_STARTED, MAINTENANCE_STEP_STARTED, MAINTENANCE_STEP_CANCELLED, MAINTENANCE_STEP_FINISHED, MAINTENANCE_CANCELLED, MAINTENANCE_FINISHED, PRODUCTION_STARTED, PRODUCTION_CANCELLED, PRODUCTION_FINISHED, PRODUCTION_STEP_STARTED, PRODUCTION_STEP_CANCELLED, PRODUCTION_STEP_FINISHED, QUALITY_CHECK_PERFORMED): Show only entries matching one of the given history item types. This parameter can be used multiple times.
  * qualifier `array`: Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.
  * fromDate `string`: From date time as UTC Date-Time format
  * toDate `string`: To date time as UTC Date-Time format
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfHistoryItem](#paginatedresponseofhistoryitem)

### addItem
Add a new history item


```js
id4i_de.addItem({
  "id4n": "",
  "body": {
    "organizationId": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * body **required** [HistoryItem](#historyitem)

#### Output
*Output schema unknown*

### list
DEPRECATED - please use filteredList with organization parameter to achieve the same functionality


```js
id4i_de.list({
  "id4n": "",
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * organizationId **required** `string`: organizationId
  * includePrivate `boolean`: Also return private history entries
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfHistoryItem](#paginatedresponseofhistoryitem)

### retrieveItem
Get history item


```js
id4i_de.retrieveItem({
  "id4n": "",
  "organizationId": "",
  "sequenceId": 0
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * organizationId **required** `string`: organizationId
  * sequenceId **required** `integer`: sequenceId

#### Output
* output [HistoryItem](#historyitem)

### updateItem
Update history item


```js
id4i_de.updateItem({
  "id4n": "",
  "organizationId": "",
  "sequenceId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * organizationId **required** `string`: organizationId
  * sequenceId **required** `integer`: sequenceId
  * body **required** [HistoryItemUpdate](#historyitemupdate)

#### Output
* output [HistoryItem](#historyitem)

### updateItemVisibility
Set history item visibility


```js
id4i_de.updateItemVisibility({
  "id4n": "",
  "organizationId": "",
  "sequenceId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * organizationId **required** `string`: organizationId
  * sequenceId **required** `integer`: sequenceId
  * body **required** [Visibility](#visibility)

#### Output
* output [HistoryItem](#historyitem)

### getId4n
Retrieving basic information about an ID like the type and the creation time.


```js
id4i_de.getId4n({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The ID to resolve to

#### Output
* output [Id4nPresentation](#id4npresentation)

### getGuidAliases
Looks up the alias for each alias type (group and single) and returns a map of all aliases found.


```js
id4i_de.getGuidAliases({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The GUID or Collection to operate on

#### Output
* output `object`

### removeGuidAlias
Remove the alias of the given type


```js
id4i_de.removeGuidAlias({
  "id4n": "",
  "aliasType": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The GUID or Collection to operate on
  * aliasType **required** `string` (values: gtin, article, mapp, item, rfid, tracking, eclass, unspsc, product, material, reference): Alias type, see the corresponding API model

#### Output
*Output schema unknown*

### addGuidAlias
Adds or replaces aliases for single ID4ns (alias type item and mapp) or groups of ID4ns (alias types gtin, ean and article)


```js
id4i_de.addGuidAlias({
  "id4n": "",
  "aliasType": "",
  "body": {
    "alias": ""
  }
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The GUID or Collection to operate on
  * aliasType **required** `string` (values: gtin, article, mapp, item, rfid, tracking, eclass, unspsc, product, material, reference): Alias type, see the corresponding API model
  * body **required** [GuidAlias](#guidalias)

#### Output
*Output schema unknown*

### getCollections
Retrieving all owned or holding collections the specified id4n is assigned to.


```js
id4i_de.getCollections({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The ID which the collections should contain
  * organizationId `string`: The organization holding the collections.
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfGuidCollection](#paginatedresponseofguidcollection)

### deleteProperties
Partial deletion of id4n properties. If the property does not exist, it will be ignored.


```js
id4i_de.deleteProperties({
  "id4n": "",
  "organizationId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The id4n
  * organizationId **required** `string`: The organization namespace to work on while deleting the properties.
  * body **required** `array`
    * items `string`

#### Output
*Output schema unknown*

### getProperties
List all properties of an id4n.


```js
id4i_de.getProperties({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The id4n
  * organizationId `string`: The organization namespace.

#### Output
* output `object`

### patchProperties
Partial updating of id4n properties. If a property contains a null value the property will be deleted other values will be saved and overwritten if they already exist.


```js
id4i_de.patchProperties({
  "id4n": "",
  "organizationId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The id4n
  * organizationId **required** `string`: The organization namespace to work on while patching the properties.
  * body **required** `object`

#### Output
*Output schema unknown*

### importGS1Codes
Importing GS1/MAPP codes that contain unique components.


```js
id4i_de.importGS1Codes({
  "body": {
    "listOfGS1s": {},
    "organizationId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImportGS1CodesRequest](#importgs1codesrequest)

#### Output
*Output schema unknown*

### applicationInfo
Retrieving version information about ID4i.


```js
id4i_de.applicationInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AppInfoPresentation](#appinfopresentation)

### readFromMicrostorage
Read data from microstorage


```js
id4i_de.readFromMicrostorage({
  "organization": "",
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * organization **required** `string`: organization
  * id4n **required** `string`: id4n

#### Output
* output `string`

### writeToMicrostorage
Write data to microstorage


```js
id4i_de.writeToMicrostorage({
  "organization": "",
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * organization **required** `string`: organization
  * id4n **required** `string`: id4n
  * Content-Type `string`: Content-Type
  * Content-Length `integer`: Content-Length
  * body `string`

#### Output
* output `object`

### createOrganization
Creating a new organization.


```js
id4i_de.createOrganization({
  "body": {
    "name": "",
    "namespace": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Organization](#organization)

#### Output
* output [Organization](#organization)

### deleteOrganization
Delete organization


```js
id4i_de.deleteOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization to be deleted.

#### Output
*Output schema unknown*

### findOrganization
Returns a single organization.


```js
id4i_de.findOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization to be retrieved.

#### Output
* output [Organization](#organization)

### updateOrganization
Update organization


```js
id4i_de.updateOrganization({
  "organizationId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization to be updated.
  * body **required** [OrganizationUpdate](#organizationupdate)

#### Output
* output [Organization](#organization)

### deleteOrganizationBillingAddress
Remove billing address


```js
id4i_de.deleteOrganizationBillingAddress({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId

#### Output
*Output schema unknown*

### findOrganizationBillingAddress
Retrieve billing address


```js
id4i_de.findOrganizationBillingAddress({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId

#### Output
* output [OrganizationAddress](#organizationaddress)

### updateOrganizationBillingAddress
Store billing address


```js
id4i_de.updateOrganizationBillingAddress({
  "organizationId": "",
  "body": {
    "city": "",
    "countryCode": "",
    "firstname": "",
    "lastname": "",
    "postCode": "",
    "street": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * body **required** [OrganizationAddress](#organizationaddress)

#### Output
* output [OrganizationAddress](#organizationaddress)

### findOrganizationAddress
Retrieve address


```js
id4i_de.findOrganizationAddress({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId

#### Output
* output [OrganizationAddress](#organizationaddress)

### updateOrganizationAddress
Store address


```js
id4i_de.updateOrganizationAddress({
  "organizationId": "",
  "body": {
    "city": "",
    "countryCode": "",
    "firstname": "",
    "lastname": "",
    "postCode": "",
    "street": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * body **required** [OrganizationAddress](#organizationaddress)

#### Output
* output [OrganizationAddress](#organizationaddress)

### getAllCollectionsOfOrganization
Retrieving all collections of an organization in a paginated manner. You may filter the results by specifying id4n properties with filter operations (eq, in, ne) in the query parameters. e.g. `com.yourcompany.orderId.eq=1234`  


```js
id4i_de.getAllCollectionsOfOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements
  * organizationId **required** `string`: The namespace of the organization
  * type `string` (values: ROUTING_COLLECTION, LOGISTIC_COLLECTION, LABELLED_COLLECTION): Filter by this type
  * label `string`: Filter by this label
  * labelPrefix `string`: Filter by this label prefix
  * property `array`: List of i4dn property filter. e.g. "com.myorga.state:IN:waiting|processing" or "com.myorga.orderId:EQ:SAP001"

#### Output
* output [PaginatedResponseOfGuidCollection](#paginatedresponseofguidcollection)

### deleteOrganizationLogo
Delete organization logo


```js
id4i_de.deleteOrganizationLogo({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization where the logo should be deleted.

#### Output
*Output schema unknown*

### setOrganizationLogo
Updating an organization logo using a multipart file upload.


```js
id4i_de.setOrganizationLogo({
  "organizationId": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization where the logo should be updated.
  * file **required** `string`: An image containing the new logo.

#### Output
* output [PublicImagePresentation](#publicimagepresentation)

### getDefaultQueue



```js
id4i_de.getDefaultQueue({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId

#### Output
* output [QueuePresentation](#queuepresentation)

### patchDefaultQueue



```js
id4i_de.patchDefaultQueue({
  "organizationId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * body **required** [QueueUpdateRequest](#queueupdaterequest)

#### Output
*Output schema unknown*

### removePartnerOrganization
Removing a partner organization


```js
id4i_de.removePartnerOrganization({
  "organizationId": "",
  "body": {
    "organizationId": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization
  * body **required** [RemovePartnerRequest](#removepartnerrequest)

#### Output
*Output schema unknown*

### getPartnerOrganizations
Listing partners in a paginated manner.


```js
id4i_de.getPartnerOrganizations({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization to query partner organizations
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfPartnerOrganization](#paginatedresponseofpartnerorganization)

### addPartnerOrganization
Adding a partner organization. If the given organization is already a partner the result will be state 200 too.


```js
id4i_de.addPartnerOrganization({
  "organizationId": "",
  "body": {
    "organizationId": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization
  * body **required** [AddPartnerRequest](#addpartnerrequest)

#### Output
*Output schema unknown*

### getOrganizationPrivileges
Listing all privileges of the current user/APIKey of the specified organization.


```js
id4i_de.getOrganizationPrivileges({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization

#### Output
* output `array`
  * items `string`

### getAllOrganizationRoles
Listing users and their roles in a paginated manner.


```js
id4i_de.getAllOrganizationRoles({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements
  * organizationId **required** `string`: organizationId

#### Output
* output [PaginatedResponseOfUserRoles](#paginatedresponseofuserroles)

### getUsersOfOrganization
Finding users in the specified organization in a paginated manner.


```js
id4i_de.getUsersOfOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements
  * organizationId **required** `string`: organizationId

#### Output
* output [PaginatedResponseOfUserPresentation](#paginatedresponseofuserpresentation)

### inviteUsers
Invite Users


```js
id4i_de.inviteUsers({
  "organizationId": "",
  "body": {
    "invitations": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization where users should be invited
  * body **required** [OrganizationUserInvitationListRequest](#organizationuserinvitationlistrequest)

#### Output
*Output schema unknown*

### removeUserRoles
Remove role(s) from user


```js
id4i_de.removeUserRoles({
  "organizationId": "",
  "username": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization
  * username **required** `string`: username
  * body **required** [ChangeRoleRequest](#changerolerequest)

#### Output
*Output schema unknown*

### getUserRoles
Get user roles by username


```js
id4i_de.getUserRoles({
  "organizationId": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization
  * username **required** `string`: username
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfstring](#paginatedresponseofstring)

### addUserRoles
Add role(s) to user


```js
id4i_de.addUserRoles({
  "organizationId": "",
  "username": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The namespace of the organization
  * username **required** `string`: username
  * body **required** [ChangeRoleRequest](#changerolerequest)

#### Output
*Output schema unknown*

### listAllPublicDocuments
Listing all public documents of an id4n


```js
id4i_de.listAllPublicDocuments({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * organizationId `string`: organizationId
  * id4n **required** `string`: id4n
  * owner `string`: Filter by owner organization
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfDocument](#paginatedresponseofdocument)

### readPublicDocument
Read public document contents


```js
id4i_de.readPublicDocument({
  "organizationId": "",
  "id4n": "",
  "fileName": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName

#### Output
* output `string`

### getPublicDocument
Retrieve a public document (meta-data only, no content)


```js
id4i_de.getPublicDocument({
  "organizationId": "",
  "id4n": "",
  "fileName": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: organizationId
  * id4n **required** `string`: id4n
  * fileName **required** `string`: fileName

#### Output
* output [Document](#document)

### listPublicHistory
Only contains public history items


```js
id4i_de.listPublicHistory({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: GUID to retrieve the history for
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfHistoryItem](#paginatedresponseofhistoryitem)

### resolveImageUsingGET
Resolve image


```js
id4i_de.resolveImageUsingGET({
  "imageID": ""
}, context)
```

#### Input
* input `object`
  * imageID **required** `string`: The id of the image to be resolved.

#### Output
* output `string`

### readOrganizationInfo
Read public organization information


```js
id4i_de.readOrganizationInfo({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: Organization ID

#### Output
* output [Organization](#organization)

### getRoutes
Retrieve all public routes for a GUID


```js
id4i_de.getRoutes({
  "id4n": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * type **required** `string`: type
  * interpolate `boolean`: interpolate

#### Output
* output `array`
  * items [Route](#route)

### listAllRoles
Listing of roles.


```js
id4i_de.listAllRoles({}, context)
```

#### Input
* input `object`
  * privilege `string`: If specified the roles will be filtered containing that privilege.
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfRole](#paginatedresponseofrole)

### getRoutingFile
Retrieve routing file


```js
id4i_de.getRoutingFile({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * organizationId `string`: organizationId

#### Output
* output [RoutingFile](#routingfile)

### updateRoutingFile
Store routing file


```js
id4i_de.updateRoutingFile({
  "id4n": "",
  "body": {
    "routing": {
      "routes": []
    }
  }
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * body **required** [RoutingFileRequest](#routingfilerequest)

#### Output
*Output schema unknown*

### getRoute
Retrieve current route of a GUID (or ID4N)


```js
id4i_de.getRoute({
  "id4n": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * type **required** `string`: The type of route you want to have
  * privateRoutes `boolean`: privateRoutes
  * publicRoutes `boolean`: publicRoutes
  * interpolate `boolean`: interpolate

#### Output
* output [Route](#route)

### getAllRoutes
Retrieve all routes of a GUID (or ID4N)


```js
id4i_de.getAllRoutes({
  "id4n": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n
  * type **required** `string`: The type of route you want to have
  * organizationId `string`: organizationId
  * interpolate `boolean`: interpolate

#### Output
* output `array`
  * items [Route](#route)

### searchByAlias
Search for GUIDs by alias


```js
id4i_de.searchByAlias({
  "alias": "",
  "aliasType": ""
}, context)
```

#### Input
* input `object`
  * alias **required** `string`: The alias to search for
  * aliasType **required** `string` (values: gtin, article, mapp, item, rfid, tracking, eclass, unspsc, product, material, reference): Alias type type to search for
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfGuid](#paginatedresponseofguid)

### getGuidAliasTypes
Retrieve this list to find out all alias types to use with alias search and change operations


```js
id4i_de.getGuidAliasTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string` (values: gtin, article, mapp, item, rfid, tracking, eclass, unspsc, product, material, reference)

### receive
Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo


```js
id4i_de.receive({
  "id4n": "",
  "body": {
    "organizationId": ""
  }
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: This ID4N identifies the object to take hold of
  * body **required** [TransferReceiveInfo](#transferreceiveinfo)

#### Output
*Output schema unknown*

### getSendInfo
Show transfer preparation information


```js
id4i_de.getSendInfo({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The ID4N to retrieve information about

#### Output
* output [TransferSendInfo](#transfersendinfo)

### prepare
Prepare an object for transfer


```js
id4i_de.prepare({
  "id4n": "",
  "body": {
    "keepOwnership": true,
    "openForClaims": true,
    "recipientOrganizationIds": []
  }
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: The ID4N to prepare for transfer
  * body **required** [TransferSendInfo](#transfersendinfo)

#### Output
* output `object`

### getOrganizationsOfUser
Retrieve organizations of user


```js
id4i_de.getOrganizationsOfUser({}, context)
```

#### Input
* input `object`
  * role `string`: role
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfOrganization](#paginatedresponseoforganization)

### findUsers
Find users


```js
id4i_de.findUsers({}, context)
```

#### Input
* input `object`
  * usernamePrefix `string`
  * offset `integer`: Start with the n-th element
  * limit `integer`: The maximum count of returned elements

#### Output
* output [PaginatedResponseOfUserPresentation](#paginatedresponseofuserpresentation)

### findUserByUsername
Find by username


```js
id4i_de.findUserByUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username

#### Output
* output [UserPresentation](#userpresentation)

### go
Forwarding to the designated route defined in the routing,


```js
id4i_de.go({
  "guid": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: guid

#### Output
*Output schema unknown*

### login
ID4i API Login


```js
id4i_de.login({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [AccountCredentials](#accountcredentials)

#### Output
*Output schema unknown*

### resolveWhoIsEntry
Resolve owner of id4n


```js
id4i_de.resolveWhoIsEntry({
  "id4n": ""
}, context)
```

#### Input
* input `object`
  * id4n **required** `string`: id4n

#### Output
* output [WhoIsResponse](#whoisresponse)



## Definitions

### AccountCredentials
* AccountCredentials `object`
  * login `string`
  * password `string`

### AddApiKeyPrivilegeRequest
* AddApiKeyPrivilegeRequest `object`
  * privilege **required** `string`

### AddPartnerRequest
* AddPartnerRequest `object`
  * organizationId **required** `string`: The namespace of the partner organization to add

### ApiError
* ApiError `object`
  * code **required** `string` (values: ERR_REGISTRATION_VERIFICATION_NO_TOKEN, ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN, ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN, ERR_AUTHENTICATION_NO_TOKEN, ERR_AUTHENTICATION_INVALID_TOKEN, ERR_AUTHENTICATION_EXPIRED_TOKEN, ERR_AUTHENTICATION_FAILED, ERR_AUTHORIZATION_MISSING_PRIVILEGES, ERR_AUTHORIZATION_FORBIDDEN, ERR_AUTHORIZATION_REQUIRE_USER, ERR_INPUT_VALIDATION_FAILED, ERR_FIELD_INPUT_VALIDATION_FAILED, ERR_VALIDATION_CONSTRAINT_FAILED, ERR_INPUT_NOT_READABLE, ERR_INVALID_INPUT_PARAMETER, ERR_GUID_CREATION, ERR_INVALID_ID4N_OBJECT_TYPE, ERR_MISSING_BILLING_INFORMATION, ERR_COLLECTION_UPDATE_DENIED, ERR_ENTITY_NOT_FOUND, ERR_ENTITY_TOO_BIG, ERR_DUPLICATE, ERR_INTERNAL, ERR_UNKNOWN, ERR_INVALID_ORGANIZATION_USERROLE, ERR_ORGANIZATION_ROLE_INCONSISTENCY, ERR_ORGANIZATION_NOT_DELETABLE, ERR_USER_ALREADY_IN_ORGANIZATION, ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE, ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME, ERR_USER_DEACTIVATED, ERR_LANGUAGE_NOT_SUPPORTED, ERR_EMAIL_MISSING_TEMPLATE_PARAM, ERR_EMAIL_TEMPLATE_NOT_AVAILABLE, ERR_EMAIL_PREPARATION_FAILED, ERR_IMAGE_CONVERSION, ERR_UPLOAD_TOO_LARGE, ERR_INVALID_ALIAS_TYPE, ERR_INVALID_URI_TEMPLATE, ERR_INVALID_URI_TEMPLATE_VARIABLE, ERR_INVALID_NAMESPACE, ERR_INVALID_PROPERTY_KEY, ERR_INVALID_FILTER, ERR_NAMESPACE_ALREADY_EXISTS, ERR_INSECURE_PASSWORD, ERR_TRANSFER_DENIED, ERR_INVALID_PHYSICAL_STATE, ERR_INVALID_HISTORY_PROPERTY_NAMESPACE, ERR_INVALID_HISTORY_PROPERTY_VALUE, ERR_ORGA_CANNOT_BE_OWN_PARTNER, ERR_INVALID_GS1_CODE, ERR_INVALID_GS1_CHAR_IN_CODE, ERR_INVALID_GS1_CODE_NOT_UNIQUE, ERR_INVALID_GS1_GTIN, ERR_GS1_CODE_CURRENTLY_UNSUPPORTED)
  * errorId **required** `string`
  * errorList **required** `array`
    * items [ApiError](#apierror)
  * message **required** `string`

### ApiKeyChangeRequest
* ApiKeyChangeRequest `object`
  * active `boolean`
  * newLabel **required** `string`

### ApiKeyCreationRequest
* ApiKeyCreationRequest `object`
  * label **required** `string`
  * organizationId **required** `string`
  * secret **required** `string`

### ApiKeyPresentation
* ApiKeyPresentation `object`
  * active **required** `boolean`: Whether this API key is active
  * createdAt **required** `integer`: The UTC unix timestamp of when this api key has been created
  * createdBy **required** `string`
  * key **required** `string`: The api key identifier
  * label **required** `string`: The label / name of the api key
  * organizationId **required** `string`: The organization namespace this api key belongs to

### ApiKeyPrivilege
* ApiKeyPrivilege `object`
  * id4nAssociated **required** `boolean`
  * privilege **required** `string`

### ApiKeyPrivilegeInfo
* ApiKeyPrivilegeInfo `object`
  * allowsBillableOperations `boolean`
  * helpText `string`
  * id4nAssociated **required** `boolean`
  * name **required** `string`

### AppInfoPresentation
* AppInfoPresentation `object`
  * branch `string`
  * commitTime `string`
  * name `string`
  * productionMode `boolean`
  * revision `string`
  * version `string`

### BillingPosition
* BillingPosition `object`
  * amount **required** `integer`
  * count **required** `number`
  * description **required** `string`
  * service **required** `string`
  * singlePrice **required** `number`
  * sum **required** `number`
  * unit **required** `string`

### ChangeLogEntry
* ChangeLogEntry `object`: A changelog entry
  * id `string`: The unique id of the changelog entry
  * message `string`: The message as template or rendered as plain text
  * messageProperties `object`: The values of the properties in the message. May be nested as object with a value field 
  * timestamp `integer`: The UTC unix timestamp when this change occurred

### ChangeRoleRequest
* ChangeRoleRequest `object`
  * roles `array`
    * items `string`

### CompleteUserRegistrationRequest
* CompleteUserRegistrationRequest `object`
  * password **required** `string`
  * username **required** `string`
  * verificationToken **required** `string`

### Country
* Country `object`
  * code **required** `string`
  * name **required** `string`

### CreateCollectionRequest
* CreateCollectionRequest `object`
  * label `string`
  * length **required** `integer`
  * organizationId **required** `string`
  * type **required** `string` (values: ROUTING_COLLECTION, LOGISTIC_COLLECTION, LABELLED_COLLECTION)

### CreateGuidRequest
* CreateGuidRequest `object`: GUID creation information
  * count **required** `integer`: The total number of GUIDs to create
  * length **required** `integer`: The charactersequence length of the GUID
  * organizationId **required** `string`: The namespace of the organization where the generated GUIDs should be assigned.

### Document
* Document `object`
  * filename `string`: File Name
  * mimeType `string`: Mime Type
  * ownerOrganizationId `string`: The organization's namespace which owns the document
  * visibility [Visibility](#visibility)

### DocumentUpdate
* DocumentUpdate `object`
  * filename `string`: File Name
  * mimeType `string`: Mime Type
  * visibility [VisibilityUpdate](#visibilityupdate)

### Guid
* Guid `object`
  * createdTimestamp `integer`: The UTC unix timestamp of when this GUID has been created
  * holderOrganizationId `string`: Organization namespace of the GUID holder
  * id4n `string`: The ID
  * ownerOrganizationId `string`: Organization namespace of the GUID owner
  * physicalState `string` (values: UNATTACHED, ATTACHED, DETACHED): Physical attachment state of the GUID

### GuidAlias
* GuidAlias `object`
  * alias **required** `string`: An alias

### GuidCollection
* GuidCollection `object`
  * createdTimestamp `integer`: The UTC unix timestamp of when this collection has been created
  * holderOrganizationId `string`: Organization namespace of the holder of the collection
  * id4n `string`: The ID
  * label `string`
  * ownerOrganizationId `string`: Organization namespace of the collection owner
  * physicalState `string` (values: UNATTACHED, ATTACHED, DETACHED): Physical attachment state of the collection
  * type `string` (values: ROUTING_COLLECTION, LOGISTIC_COLLECTION, LABELLED_COLLECTION)

### HistoryItem
* HistoryItem `object`: GUID history item
  * additionalProperties `object`: History items custom additional properties
  * organizationId **required** `string`: Originator of the history item
  * ownerOrganizationId `string`: Owner of the history item
  * sequenceId `integer`: Forms the primary key of the history item together with the GUID and the organizationId
  * timestamp `integer`: History item timestamp
  * type **required** `string` (values: CREATED, DESTROYED, RECYCLED, SHIPMENT_PREPARED, STORED, RETRIEVED_FROM_STORAGE, PACKAGED, DISPATCHED, RECEIVED, DELIVERY_REFUSED, REPROCESSING_STARTED, REPROCESSING_STEP_STARTED, REPROCESSING_STEP_CANCELLED, REPROCESSING_STEP_FINISHED, REPROCESSING_CANCELLED, REPROCESSING_FINISHED, DISASSEMBLED, MAINTENANCE_STARTED, MAINTENANCE_STEP_STARTED, MAINTENANCE_STEP_CANCELLED, MAINTENANCE_STEP_FINISHED, MAINTENANCE_CANCELLED, MAINTENANCE_FINISHED, PRODUCTION_STARTED, PRODUCTION_CANCELLED, PRODUCTION_FINISHED, PRODUCTION_STEP_STARTED, PRODUCTION_STEP_CANCELLED, PRODUCTION_STEP_FINISHED, QUALITY_CHECK_PERFORMED): Type of the history item
  * visibility [Visibility](#visibility)

### HistoryItemUpdate
* HistoryItemUpdate `object`: GUID history item update (diff patch)
  * organizationId `string`: New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.
  * visibility [Visibility](#visibility)

### Id4n
* Id4n `object`
  * id4n `string`: The ID

### Id4nPresentation
* Id4nPresentation `object`
  * createdTimestamp `integer`: The UTC unix timestamp of when this ID has been created
  * holderOrganizationId `string`: Organization namespace of the holder of the ID
  * id4n `string`: The ID
  * label `string`
  * ownerOrganizationId `string`: Organization namespace of the ID owner
  * type `string` (values: GUID, ROUTING_COLLECTION, LOGISTIC_COLLECTION, LABELLED_COLLECTION): The type of ID

### ImportGS1CodesRequest
* ImportGS1CodesRequest `object`: GS1/MAPP codes import information
  * listOfGS1s **required** [ListOfGS1s](#listofgs1s)
  * organizationId **required** `string`: The organization where the GS1/Mapp code is imported.

### ListOfGS1s
* ListOfGS1s `object`: A list of GS1/MAPP codes
  * codes `array`: A list of GS1/MAPP codes.
    * items `string`

### ListOfId4ns
* ListOfId4ns `object`: A list of id4ns
  * id4ns `array`: A list of id4ns.
    * items `string`

### Organization
* Organization `object`: An organization
  * id `integer`: The id of the organization ( Deprecated: Use namespace instead. )
  * logoURL `string`: URL to a logo of the organization
  * name **required** `string`: The name of the organization
  * namespace **required** `string`: The namespace of the organization

### OrganizationAddress
* OrganizationAddress `object`
  * city **required** `string`
  * companyName `string`
  * countryCode **required** `string`: The ISO 3166 two-letter country code
  * countryName `string`: The country name
  * firstname **required** `string`
  * lastname **required** `string`
  * postCode **required** `string`
  * street **required** `string`
  * telephone `string`: The telephone number e.g.

### OrganizationUpdate
* OrganizationUpdate `object`: An organization
  * name `string`: The name of the organization

### OrganizationUserInvitation
* OrganizationUserInvitation `object`
  * email `string`
  * roles **required** `array`
    * items `string`
  * userName `string`

### OrganizationUserInvitationListRequest
* OrganizationUserInvitationListRequest `object`
  * invitations **required** `array`
    * items [OrganizationUserInvitation](#organizationuserinvitation)

### PaginatedResponseOfApiKeyPresentation
* PaginatedResponseOfApiKeyPresentation `object`
  * elements **required** `array`
    * items [ApiKeyPresentation](#apikeypresentation)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfApiKeyPrivilege
* PaginatedResponseOfApiKeyPrivilege `object`
  * elements **required** `array`
    * items [ApiKeyPrivilege](#apikeyprivilege)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfApiKeyPrivilegeInfo
* PaginatedResponseOfApiKeyPrivilegeInfo `object`
  * elements **required** `array`
    * items [ApiKeyPrivilegeInfo](#apikeyprivilegeinfo)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfChangeLogEntry
* PaginatedResponseOfChangeLogEntry `object`
  * elements **required** `array`
    * items [ChangeLogEntry](#changelogentry)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfCountry
* PaginatedResponseOfCountry `object`
  * elements **required** `array`
    * items [Country](#country)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfDocument
* PaginatedResponseOfDocument `object`
  * elements **required** `array`
    * items [Document](#document)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfGuid
* PaginatedResponseOfGuid `object`
  * elements **required** `array`
    * items [Guid](#guid)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfGuidCollection
* PaginatedResponseOfGuidCollection `object`
  * elements **required** `array`
    * items [GuidCollection](#guidcollection)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfHistoryItem
* PaginatedResponseOfHistoryItem `object`
  * elements **required** `array`
    * items [HistoryItem](#historyitem)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfId4nPresentation
* PaginatedResponseOfId4nPresentation `object`
  * elements **required** `array`
    * items [Id4nPresentation](#id4npresentation)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfOrganization
* PaginatedResponseOfOrganization `object`
  * elements **required** `array`
    * items [Organization](#organization)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfPartnerOrganization
* PaginatedResponseOfPartnerOrganization `object`
  * elements **required** `array`
    * items [PartnerOrganization](#partnerorganization)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfRole
* PaginatedResponseOfRole `object`
  * elements **required** `array`
    * items [Role](#role)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfUserPresentation
* PaginatedResponseOfUserPresentation `object`
  * elements **required** `array`
    * items [UserPresentation](#userpresentation)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfUserRoles
* PaginatedResponseOfUserRoles `object`
  * elements **required** `array`
    * items [UserRoles](#userroles)
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PaginatedResponseOfstring
* PaginatedResponseOfstring `object`
  * elements **required** `array`
    * items `string`
  * limit **required** `integer`: The number of returned elements
  * offset **required** `integer`: Starting with the n-th element
  * total `integer`: The total number of elements

### PartnerOrganization
* PartnerOrganization `object`: A partner organization
  * logoURL `string`: URL to a logo of the organization
  * name `string`: The name of the organization
  * namespace `string`: The namespace of the organization

### PasswordResetRequest
* PasswordResetRequest `object`
  * username **required** `string`

### PasswordResetVerificationRequest
* PasswordResetVerificationRequest `object`
  * password **required** `string`
  * token **required** `string`

### PublicImagePresentation
* PublicImagePresentation `object`
  * uri `string`: The uri/url of the image

### QueuePresentation
* QueuePresentation `object`
  * active **required** `boolean`
  * id **required** `string`
  * waitingMessages `integer`: The count of queued messages

### QueueUpdateRequest
* QueueUpdateRequest `object`
  * active `boolean`: If this value is set to false the queue will be deleted.
  * id `string`
  * purgeQueue `boolean`: Set this value to true if you want to purge the queue.

### RegistrationVerificationTokenPresentation
* RegistrationVerificationTokenPresentation `object`
  * token **required** `string`

### RemoveApiKeyPrivilegeRequest
* RemoveApiKeyPrivilegeRequest `object`
  * privilege **required** `string`

### RemovePartnerRequest
* RemovePartnerRequest `object`
  * organizationId **required** `string`: The namespace of the partner organization to remove

### Role
* Role `object`
  * name `string`
  * privileges `array`
    * items `string`

### Route
* Route `object`
  * params **required** `object`
  * priority `integer`
  * public **required** `boolean`
  * type **required** `string`
  * validUntil `integer`

### RoutingFile
* RoutingFile `object`
  * options [RoutingOptions](#routingoptions)
  * routes **required** `array`
    * items [Route](#route)

### RoutingFileRequest
* RoutingFileRequest `object`
  * organizationId `string`
  * routing **required** [RoutingFile](#routingfile)

### RoutingOptions
* RoutingOptions `object`
  * deleteOutdatedRoutes `boolean`

### ServiceCosts
* ServiceCosts `object`
  * listing **required** `object`

### SimpleMessageResponse
* SimpleMessageResponse `object`
  * message **required** `string`

### TransferReceiveInfo
* TransferReceiveInfo `object`
  * organizationId **required** `string`: Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.

### TransferSendInfo
* TransferSendInfo `object`
  * holderOrganizationId `string`: The current holder of the object
  * keepOwnership **required** `boolean`: Keep the public ownership while transferring the object
  * openForClaims **required** `boolean`: Allow anyone who knows (or can scan) the ID4N to claim ownership of this object
  * ownerOrganizationId `string`: The current publicly visible owner of the object
  * recipientOrganizationIds **required** `array`: Allow only these organizations to obtain this object
    * items `string`

### UserPresentation
* UserPresentation `object`
  * id `string`
  * name `string`

### UserRegistrationRequest
* UserRegistrationRequest `object`
  * email **required** `string`
  * password **required** `string`
  * username **required** `string`

### UserRegistrationResponse
* UserRegistrationResponse `object`
  * email `string`
  * id **required** `integer`
  * message `string`
  * username `string`

### UserRoles
* UserRoles `object`
  * roles `array`
    * items `string`
  * user [UserPresentation](#userpresentation)

### Visibility
* Visibility `object`
  * public `boolean`: Document is publicly readable (if ID4N is owned by the same organization)
  * sharedOrganizationIds `array`: Document is readable by these organizations (independend of ID4N ownership)
    * items `string`

### VisibilityUpdate
* VisibilityUpdate `object`
  * public `boolean`: Document is publicly readable (if ID4N is owned by the same organization)
  * sharedWithOrganizationIds `array`: Document is readable by these organizations (independend of ID4N ownership)
    * items `string`

### WhoIsResponse
* WhoIsResponse `object`
  * aliases `object`
  * organization [Organization](#organization)
  * organizationAddress [OrganizationAddress](#organizationaddress)


