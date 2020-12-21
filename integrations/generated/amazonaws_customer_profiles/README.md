# @datafire/amazonaws_customer_profiles

Client library for Amazon Connect Customer Profiles

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_customer_profiles
```
```js
let amazonaws_customer_profiles = require('@datafire/amazonaws_customer_profiles').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Connect Customer Profiles</fullname> <p>Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information about the Amazon Connect Customer Profiles API, including supported operations, data types, parameters, and schemas.</p> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center.</p> <p>If you're new to Amazon Connect, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html">Amazon Connect Administrator Guide</a>.</p>

## Actions

### ListDomains



```js
amazonaws_customer_profiles.ListDomains({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListDomainsResponse](#listdomainsresponse)

### DeleteDomain



```js
amazonaws_customer_profiles.DeleteDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DeleteDomainResponse](#deletedomainresponse)

### GetDomain



```js
amazonaws_customer_profiles.GetDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [GetDomainResponse](#getdomainresponse)

### CreateDomain



```js
amazonaws_customer_profiles.CreateDomain({
  "DomainName": "",
  "DefaultExpirationDays": 0
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * DeadLetterQueueUrl `string`: The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
  * DefaultEncryptionKey `string`: The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
  * DefaultExpirationDays **required** `integer`: The default number of days until the data within the domain expires.
  * Tags `object`: The tags used to organize, track, or control access for this resource.

#### Output
* output [CreateDomainResponse](#createdomainresponse)

### UpdateDomain



```js
amazonaws_customer_profiles.UpdateDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * DeadLetterQueueUrl `string`: The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
  * DefaultEncryptionKey `string`: The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.
  * DefaultExpirationDays `integer`: The default number of days until the data within the domain expires.
  * Tags `object`: The tags used to organize, track, or control access for this resource.

#### Output
* output [UpdateDomainResponse](#updatedomainresponse)

### ListIntegrations



```js
amazonaws_customer_profiles.ListIntegrations({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListIntegrationsResponse](#listintegrationsresponse)

### GetIntegration



```js
amazonaws_customer_profiles.GetIntegration({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Uri `string`: The URI of the S3 bucket or any other type of data source.

#### Output
* output [GetIntegrationResponse](#getintegrationresponse)

### PutIntegration



```js
amazonaws_customer_profiles.PutIntegration({
  "DomainName": "",
  "Uri": "",
  "ObjectTypeName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`: The name of the profile object type.
  * Tags `object`: The tags used to organize, track, or control access for this resource.
  * Uri **required** `string`: The URI of the S3 bucket or any other type of data source.

#### Output
* output [PutIntegrationResponse](#putintegrationresponse)

### DeleteIntegration



```js
amazonaws_customer_profiles.DeleteIntegration({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Uri `string`: The URI of the S3 bucket or any other type of data source.

#### Output
* output [DeleteIntegrationResponse](#deleteintegrationresponse)

### ListProfileObjectTypes



```js
amazonaws_customer_profiles.ListProfileObjectTypes({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListProfileObjectTypesResponse](#listprofileobjecttypesresponse)

### DeleteProfileObjectType



```js
amazonaws_customer_profiles.DeleteProfileObjectType({
  "DomainName": "",
  "ObjectTypeName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`

#### Output
* output [DeleteProfileObjectTypeResponse](#deleteprofileobjecttyperesponse)

### GetProfileObjectType



```js
amazonaws_customer_profiles.GetProfileObjectType({
  "DomainName": "",
  "ObjectTypeName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`

#### Output
* output [GetProfileObjectTypeResponse](#getprofileobjecttyperesponse)

### PutProfileObjectType



```js
amazonaws_customer_profiles.PutProfileObjectType({
  "DomainName": "",
  "ObjectTypeName": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`
  * AllowProfileCreation `boolean`: Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.
  * Description **required** `string`: Description of the profile object type.
  * EncryptionKey `string`: The customer-provided key to encrypt the profile object that will be created in this profile object type.
  * ExpirationDays `integer`: The number of days until the data in the object expires.
  * Fields `object`: A map of the name and ObjectType field.
  * Keys `object`: A list of unique keys that can be used to map data to the profile.
  * Tags `object`: The tags used to organize, track, or control access for this resource.
  * TemplateId `string`: A unique identifier for the object template.

#### Output
* output [PutProfileObjectTypeResponse](#putprofileobjecttyperesponse)

### CreateProfile



```js
amazonaws_customer_profiles.CreateProfile({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AccountNumber `string`: A unique account number that you have given to the customer.
  * AdditionalInformation `string`: Any additional information relevant to the customer's profile.
  * Address `object`: A generic address associated with the customer that is not mailing, shipping, or billing.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * Attributes `object`: A key value pair of attributes of a customer profile.
  * BillingAddress `object`: A generic address associated with the customer that is not mailing, shipping, or billing.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * BirthDate `string`: The customer’s birth date.
  * BusinessEmailAddress `string`: The customer’s business email address.
  * BusinessName `string`: The name of the customer’s business.
  * BusinessPhoneNumber `string`: The customer’s business phone number.
  * EmailAddress `string`: The customer's email address, which has not been specified as a personal or business address.
  * FirstName `string`: The customer’s first name.
  * Gender `string` (values: MALE, FEMALE, UNSPECIFIED): The gender with which the customer identifies.
  * HomePhoneNumber `string`: The customer’s home phone number.
  * LastName `string`: The customer’s last name.
  * MailingAddress `object`: A generic address associated with the customer that is not mailing, shipping, or billing.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * MiddleName `string`: The customer’s middle name.
  * MobilePhoneNumber `string`: The customer’s mobile phone number.
  * PartyType `string` (values: INDIVIDUAL, BUSINESS, OTHER): The type of profile used to describe the customer.
  * PersonalEmailAddress `string`: The customer’s personal email address.
  * PhoneNumber `string`: The customer's phone number, which has not been specified as a mobile, home, or business number.
  * ShippingAddress `object`: A generic address associated with the customer that is not mailing, shipping, or billing.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State

#### Output
* output [CreateProfileResponse](#createprofileresponse)

### UpdateProfile



```js
amazonaws_customer_profiles.UpdateProfile({
  "DomainName": "",
  "ProfileId": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AccountNumber `string`: A unique account number that you have given to the customer.
  * AdditionalInformation `string`: Any additional information relevant to the customer's profile.
  * Address `object`: Updates associated with the address properties of a customer profile.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * Attributes `object`: A key value pair of attributes of a customer profile.
  * BillingAddress `object`: Updates associated with the address properties of a customer profile.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * BirthDate `string`: The customer’s birth date.
  * BusinessEmailAddress `string`: The customer’s business email address.
  * BusinessName `string`: The name of the customer’s business.
  * BusinessPhoneNumber `string`: The customer’s business phone number.
  * EmailAddress `string`: The customer's email address, which has not been specified as a personal or business address.
  * FirstName `string`: The customer’s first name.
  * Gender `string` (values: MALE, FEMALE, UNSPECIFIED): The gender with which the customer identifies.
  * HomePhoneNumber `string`: The customer’s home phone number.
  * LastName `string`: The customer’s last name.
  * MailingAddress `object`: Updates associated with the address properties of a customer profile.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * MiddleName `string`: The customer’s middle name.
  * MobilePhoneNumber `string`: The customer’s mobile phone number.
  * PartyType `string` (values: INDIVIDUAL, BUSINESS, OTHER): The type of profile used to describe the customer.
  * PersonalEmailAddress `string`: The customer’s personal email address.
  * PhoneNumber `string`: The customer's phone number, which has not been specified as a mobile, home, or business number.
  * ProfileId **required** `string`: The unique identifier of a customer profile.
  * ShippingAddress `object`: Updates associated with the address properties of a customer profile.
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State

#### Output
* output [UpdateProfileResponse](#updateprofileresponse)

### DeleteProfile



```js
amazonaws_customer_profiles.DeleteProfile({
  "DomainName": "",
  "ProfileId": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ProfileId **required** `string`: The unique identifier of a customer profile.

#### Output
* output [DeleteProfileResponse](#deleteprofileresponse)

### AddProfileKey



```js
amazonaws_customer_profiles.AddProfileKey({
  "DomainName": "",
  "ProfileId": "",
  "KeyName": "",
  "Values": []
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * KeyName **required** `string`: A searchable identifier of a customer profile.
  * ProfileId **required** `string`: The unique identifier of a customer profile.
  * Values **required** `array`: A list of key values.
    * items [string1To255](#string1to255)

#### Output
* output [AddProfileKeyResponse](#addprofilekeyresponse)

### DeleteProfileKey



```js
amazonaws_customer_profiles.DeleteProfileKey({
  "DomainName": "",
  "ProfileId": "",
  "KeyName": "",
  "Values": []
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * KeyName **required** `string`: A searchable identifier of a customer profile.
  * ProfileId **required** `string`: The unique identifier of a customer profile.
  * Values **required** `array`: A list of key values.
    * items [string1To255](#string1to255)

#### Output
* output [DeleteProfileKeyResponse](#deleteprofilekeyresponse)

### ListProfileObjects



```js
amazonaws_customer_profiles.ListProfileObjects({
  "DomainName": "",
  "ObjectTypeName": "",
  "ProfileId": ""
}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`: The name of the profile object type.
  * ProfileId **required** `string`: The unique identifier of a customer profile.

#### Output
* output [ListProfileObjectsResponse](#listprofileobjectsresponse)

### PutProfileObject



```js
amazonaws_customer_profiles.PutProfileObject({
  "DomainName": "",
  "ObjectTypeName": "",
  "Object": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Object **required** `string`: A string that is serialized from a JSON object.
  * ObjectTypeName **required** `string`: The name of the profile object type.

#### Output
* output [PutProfileObjectResponse](#putprofileobjectresponse)

### DeleteProfileObject



```js
amazonaws_customer_profiles.DeleteProfileObject({
  "DomainName": "",
  "ProfileId": "",
  "ProfileObjectUniqueKey": "",
  "ObjectTypeName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ObjectTypeName **required** `string`: The name of the profile object type.
  * ProfileId **required** `string`: The unique identifier of a customer profile.
  * ProfileObjectUniqueKey **required** `string`: The unique identifier of the profile object generated by the service.

#### Output
* output [DeleteProfileObjectResponse](#deleteprofileobjectresponse)

### SearchProfiles



```js
amazonaws_customer_profiles.SearchProfiles({
  "DomainName": "",
  "KeyName": "",
  "Values": []
}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * DomainName **required** `string`
  * KeyName **required** `string`: A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _zendeskUserId, _zendeskExternalId, _serviceNowSystemId.
  * Values **required** `array`: A list of key values.
    * items [string1To255](#string1to255)

#### Output
* output [SearchProfilesResponse](#searchprofilesresponse)

### ListAccountIntegrations



```js
amazonaws_customer_profiles.ListAccountIntegrations({
  "Uri": ""
}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * Uri **required** `string`: The URI of the S3 bucket or any other type of data source.

#### Output
* output [ListAccountIntegrationsResponse](#listaccountintegrationsresponse)

### ListTagsForResource



```js
amazonaws_customer_profiles.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_customer_profiles.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags used to organize, track, or control access for this resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_customer_profiles.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### ListProfileObjectTypeTemplates



```js
amazonaws_customer_profiles.ListProfileObjectTypeTemplates({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListProfileObjectTypeTemplatesResponse](#listprofileobjecttypetemplatesresponse)

### GetProfileObjectTypeTemplate



```js
amazonaws_customer_profiles.GetProfileObjectTypeTemplate({
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * TemplateId **required** `string`

#### Output
* output [GetProfileObjectTypeTemplateResponse](#getprofileobjecttypetemplateresponse)



## Definitions

### AccessDeniedException


### AddProfileKeyRequest
* AddProfileKeyRequest `object`
  * KeyName **required**
  * ProfileId **required**
  * Values **required**
    * items [string1To255](#string1to255)

### AddProfileKeyResponse
* AddProfileKeyResponse `object`
  * KeyName
  * Values
    * items [string1To255](#string1to255)

### Address
* Address `object`: A generic address associated with the customer that is not mailing, shipping, or billing.
  * Address1
  * Address2
  * Address3
  * Address4
  * City
  * Country
  * County
  * PostalCode
  * Province
  * State

### Attributes
* Attributes `object`

### BadRequestException


### CreateDomainRequest
* CreateDomainRequest `object`
  * DeadLetterQueueUrl
  * DefaultEncryptionKey
  * DefaultExpirationDays **required**
  * Tags

### CreateDomainResponse
* CreateDomainResponse `object`
  * CreatedAt **required**
  * DeadLetterQueueUrl
  * DefaultEncryptionKey
  * DefaultExpirationDays **required**
  * DomainName **required**
  * LastUpdatedAt **required**
  * Tags

### CreateProfileRequest
* CreateProfileRequest `object`
  * AccountNumber
  * AdditionalInformation
  * Address
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * Attributes
  * BillingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * BirthDate
  * BusinessEmailAddress
  * BusinessName
  * BusinessPhoneNumber
  * EmailAddress
  * FirstName
  * Gender
  * HomePhoneNumber
  * LastName
  * MailingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * MiddleName
  * MobilePhoneNumber
  * PartyType
  * PersonalEmailAddress
  * PhoneNumber
  * ShippingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State

### CreateProfileResponse
* CreateProfileResponse `object`
  * ProfileId **required**

### DeleteDomainRequest
* DeleteDomainRequest `object`

### DeleteDomainResponse
* DeleteDomainResponse `object`
  * Message **required**

### DeleteIntegrationRequest
* DeleteIntegrationRequest `object`
  * Uri

### DeleteIntegrationResponse
* DeleteIntegrationResponse `object`
  * Message **required**

### DeleteProfileKeyRequest
* DeleteProfileKeyRequest `object`
  * KeyName **required**
  * ProfileId **required**
  * Values **required**
    * items [string1To255](#string1to255)

### DeleteProfileKeyResponse
* DeleteProfileKeyResponse `object`
  * Message

### DeleteProfileObjectRequest
* DeleteProfileObjectRequest `object`
  * ObjectTypeName **required**
  * ProfileId **required**
  * ProfileObjectUniqueKey **required**

### DeleteProfileObjectResponse
* DeleteProfileObjectResponse `object`
  * Message

### DeleteProfileObjectTypeRequest
* DeleteProfileObjectTypeRequest `object`

### DeleteProfileObjectTypeResponse
* DeleteProfileObjectTypeResponse `object`
  * Message **required**

### DeleteProfileRequest
* DeleteProfileRequest `object`
  * ProfileId **required**

### DeleteProfileResponse
* DeleteProfileResponse `object`
  * Message

### DomainList
* DomainList `array`
  * items [ListDomainItem](#listdomainitem)

### DomainStats
* DomainStats `object`: Usage-specific statistics about the domain.
  * MeteringProfileCount
  * ObjectCount
  * ProfileCount
  * TotalSize

### FieldContentType
* FieldContentType `string` (values: STRING, NUMBER, PHONE_NUMBER, EMAIL_ADDRESS, NAME)

### FieldMap
* FieldMap `object`

### FieldNameList
* FieldNameList `array`
  * items [name](#name)

### Gender
* Gender `string` (values: MALE, FEMALE, UNSPECIFIED)

### GetDomainRequest
* GetDomainRequest `object`

### GetDomainResponse
* GetDomainResponse `object`
  * CreatedAt **required**
  * DeadLetterQueueUrl
  * DefaultEncryptionKey
  * DefaultExpirationDays
  * DomainName **required**
  * LastUpdatedAt **required**
  * Stats
    * MeteringProfileCount
    * ObjectCount
    * ProfileCount
    * TotalSize
  * Tags

### GetIntegrationRequest
* GetIntegrationRequest `object`
  * Uri

### GetIntegrationResponse
* GetIntegrationResponse `object`
  * CreatedAt **required**
  * DomainName **required**
  * LastUpdatedAt **required**
  * ObjectTypeName **required**
  * Tags
  * Uri **required**

### GetProfileObjectTypeRequest
* GetProfileObjectTypeRequest `object`

### GetProfileObjectTypeResponse
* GetProfileObjectTypeResponse `object`
  * AllowProfileCreation
  * CreatedAt
  * Description **required**
  * EncryptionKey
  * ExpirationDays
  * Fields
  * Keys
  * LastUpdatedAt
  * ObjectTypeName **required**
  * Tags
  * TemplateId

### GetProfileObjectTypeTemplateRequest
* GetProfileObjectTypeTemplateRequest `object`

### GetProfileObjectTypeTemplateResponse
* GetProfileObjectTypeTemplateResponse `object`
  * AllowProfileCreation
  * Fields
  * Keys
  * SourceName
  * SourceObject
  * TemplateId

### IntegrationList
* IntegrationList `array`
  * items [ListIntegrationItem](#listintegrationitem)

### InternalServerException


### KeyMap
* KeyMap `object`

### ListAccountIntegrationsRequest
* ListAccountIntegrationsRequest `object`
  * Uri **required**

### ListAccountIntegrationsResponse
* ListAccountIntegrationsResponse `object`
  * Items
    * items [ListIntegrationItem](#listintegrationitem)
  * NextToken

### ListDomainItem
* ListDomainItem `object`: An object in a list that represents a domain.
  * CreatedAt **required**
  * DomainName **required**
  * LastUpdatedAt **required**
  * Tags

### ListDomainsRequest
* ListDomainsRequest `object`

### ListDomainsResponse
* ListDomainsResponse `object`
  * Items
    * items [ListDomainItem](#listdomainitem)
  * NextToken

### ListIntegrationItem
* ListIntegrationItem `object`: An integration in list of integrations.
  * CreatedAt **required**
  * DomainName **required**
  * LastUpdatedAt **required**
  * ObjectTypeName **required**
  * Tags
  * Uri **required**

### ListIntegrationsRequest
* ListIntegrationsRequest `object`

### ListIntegrationsResponse
* ListIntegrationsResponse `object`
  * Items
    * items [ListIntegrationItem](#listintegrationitem)
  * NextToken

### ListProfileObjectTypeItem
* ListProfileObjectTypeItem `object`: A ProfileObjectType instance.
  * CreatedAt
  * Description **required**
  * LastUpdatedAt
  * ObjectTypeName **required**
  * Tags

### ListProfileObjectTypeTemplateItem
* ListProfileObjectTypeTemplateItem `object`: A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
  * SourceName
  * SourceObject
  * TemplateId

### ListProfileObjectTypeTemplatesRequest
* ListProfileObjectTypeTemplatesRequest `object`

### ListProfileObjectTypeTemplatesResponse
* ListProfileObjectTypeTemplatesResponse `object`
  * Items
    * items [ListProfileObjectTypeTemplateItem](#listprofileobjecttypetemplateitem)
  * NextToken

### ListProfileObjectTypesRequest
* ListProfileObjectTypesRequest `object`

### ListProfileObjectTypesResponse
* ListProfileObjectTypesResponse `object`
  * Items
    * items [ListProfileObjectTypeItem](#listprofileobjecttypeitem)
  * NextToken

### ListProfileObjectsItem
* ListProfileObjectsItem `object`: A ProfileObject in a list of ProfileObjects.
  * Object
  * ObjectTypeName
  * ProfileObjectUniqueKey

### ListProfileObjectsRequest
* ListProfileObjectsRequest `object`
  * ObjectTypeName **required**
  * ProfileId **required**

### ListProfileObjectsResponse
* ListProfileObjectsResponse `object`
  * Items
    * items [ListProfileObjectsItem](#listprofileobjectsitem)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ObjectTypeField
* ObjectTypeField `object`: Represents a field in a ProfileObjectType.
  * ContentType
  * Source
  * Target

### ObjectTypeKey
* ObjectTypeKey `object`: An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
  * FieldNames
    * items [name](#name)
  * StandardIdentifiers
    * items [StandardIdentifier](#standardidentifier)

### ObjectTypeKeyList
* ObjectTypeKeyList `array`
  * items [ObjectTypeKey](#objecttypekey)

### PartyType
* PartyType `string` (values: INDIVIDUAL, BUSINESS, OTHER)

### Profile
* Profile `object`: The standard profile of a customer.
  * AccountNumber
  * AdditionalInformation
  * Address
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * Attributes
  * BillingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * BirthDate
  * BusinessEmailAddress
  * BusinessName
  * BusinessPhoneNumber
  * EmailAddress
  * FirstName
  * Gender
  * HomePhoneNumber
  * LastName
  * MailingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * MiddleName
  * MobilePhoneNumber
  * PartyType
  * PersonalEmailAddress
  * PhoneNumber
  * ProfileId
  * ShippingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State

### ProfileList
* ProfileList `array`
  * items [Profile](#profile)

### ProfileObjectList
* ProfileObjectList `array`
  * items [ListProfileObjectsItem](#listprofileobjectsitem)

### ProfileObjectTypeList
* ProfileObjectTypeList `array`
  * items [ListProfileObjectTypeItem](#listprofileobjecttypeitem)

### ProfileObjectTypeTemplateList
* ProfileObjectTypeTemplateList `array`
  * items [ListProfileObjectTypeTemplateItem](#listprofileobjecttypetemplateitem)

### PutIntegrationRequest
* PutIntegrationRequest `object`
  * ObjectTypeName **required**
  * Tags
  * Uri **required**

### PutIntegrationResponse
* PutIntegrationResponse `object`
  * CreatedAt **required**
  * DomainName **required**
  * LastUpdatedAt **required**
  * ObjectTypeName **required**
  * Tags
  * Uri **required**

### PutProfileObjectRequest
* PutProfileObjectRequest `object`
  * Object **required**
  * ObjectTypeName **required**

### PutProfileObjectResponse
* PutProfileObjectResponse `object`
  * ProfileObjectUniqueKey

### PutProfileObjectTypeRequest
* PutProfileObjectTypeRequest `object`
  * AllowProfileCreation
  * Description **required**
  * EncryptionKey
  * ExpirationDays
  * Fields
  * Keys
  * Tags
  * TemplateId

### PutProfileObjectTypeResponse
* PutProfileObjectTypeResponse `object`
  * AllowProfileCreation
  * CreatedAt
  * Description **required**
  * EncryptionKey
  * ExpirationDays
  * Fields
  * Keys
  * LastUpdatedAt
  * ObjectTypeName **required**
  * Tags
  * TemplateId

### ResourceNotFoundException


### SearchProfilesRequest
* SearchProfilesRequest `object`
  * KeyName **required**
  * Values **required**
    * items [string1To255](#string1to255)

### SearchProfilesResponse
* SearchProfilesResponse `object`
  * Items
    * items [Profile](#profile)
  * NextToken

### StandardIdentifier
* StandardIdentifier `string` (values: PROFILE, UNIQUE, SECONDARY, LOOKUP_ONLY, NEW_ONLY)

### StandardIdentifierList
* StandardIdentifierList `array`
  * items [StandardIdentifier](#standardidentifier)

### TagArn
* TagArn `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAddress
* UpdateAddress `object`: Updates associated with the address properties of a customer profile.
  * Address1
  * Address2
  * Address3
  * Address4
  * City
  * Country
  * County
  * PostalCode
  * Province
  * State

### UpdateAttributes
* UpdateAttributes `object`

### UpdateDomainRequest
* UpdateDomainRequest `object`
  * DeadLetterQueueUrl
  * DefaultEncryptionKey
  * DefaultExpirationDays
  * Tags

### UpdateDomainResponse
* UpdateDomainResponse `object`
  * CreatedAt **required**
  * DeadLetterQueueUrl
  * DefaultEncryptionKey
  * DefaultExpirationDays
  * DomainName **required**
  * LastUpdatedAt **required**
  * Tags

### UpdateProfileRequest
* UpdateProfileRequest `object`
  * AccountNumber
  * AdditionalInformation
  * Address
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * Attributes
  * BillingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * BirthDate
  * BusinessEmailAddress
  * BusinessName
  * BusinessPhoneNumber
  * EmailAddress
  * FirstName
  * Gender
  * HomePhoneNumber
  * LastName
  * MailingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State
  * MiddleName
  * MobilePhoneNumber
  * PartyType
  * PersonalEmailAddress
  * PhoneNumber
  * ProfileId **required**
  * ShippingAddress
    * Address1
    * Address2
    * Address3
    * Address4
    * City
    * Country
    * County
    * PostalCode
    * Province
    * State

### UpdateProfileResponse
* UpdateProfileResponse `object`
  * ProfileId **required**

### boolean
* boolean `boolean`

### encryptionKey
* encryptionKey `string`

### expirationDaysInteger
* expirationDaysInteger `integer`

### long
* long `integer`

### maxSize100
* maxSize100 `integer`

### message
* message `string`

### name
* name `string`

### requestValueList
* requestValueList `array`
  * items [string1To255](#string1to255)

### sqsQueueUrl
* sqsQueueUrl `string`

### string0To1000
* string0To1000 `string`

### string0To255
* string0To255 `string`

### string1To1000
* string1To1000 `string`

### string1To255
* string1To255 `string`

### stringifiedJson
* stringifiedJson `string`

### text
* text `string`

### timestamp
* timestamp `string`

### token
* token `string`

### typeName
* typeName `string`

### uuid
* uuid `string`


