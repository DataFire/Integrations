# @datafire/azure_storage_file

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_storage_file
```
```js
let azure_storage_file = require('@datafire/azure_storage_file').create({
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

The Azure Storage Management API.

## Actions

### FileServices_List
List all file services in storage accounts


```js
azure_storage_file.FileServices_List({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FileServiceItems](#fileserviceitems)

### FileShares_List
Lists all shares.


```js
azure_storage_file.FileShares_List({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * $maxpagesize `string`: Optional. Specified maximum number of shares that can be included in the list.
  * $filter `string`: Optional. When specified, only share names starting with the filter will be listed.

#### Output
* output [FileShareItems](#fileshareitems)

### FileShares_Delete
Deletes specified share under its account.


```js
azure_storage_file.FileShares_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * shareName **required** `string`: The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### FileShares_Get
Gets properties of a specified share.


```js
azure_storage_file.FileShares_Get({
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * shareName **required** `string`: The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FileShare](#fileshare)

### FileShares_Update
Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist. 


```js
azure_storage_file.FileShares_Update({
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "fileShare": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * shareName **required** `string`: The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * fileShare **required** [FileShare](#fileshare)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FileShare](#fileshare)

### FileShares_Create
Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share. 


```js
azure_storage_file.FileShares_Create({
  "resourceGroupName": "",
  "accountName": "",
  "shareName": "",
  "fileShare": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * shareName **required** `string`: The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * fileShare **required** [FileShare](#fileshare)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FileShare](#fileshare)

### FileServices_GetServiceProperties
Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.


```js
azure_storage_file.FileServices_GetServiceProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "FileServicesName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * FileServicesName **required** `string` (values: default): The name of the file Service within the specified storage account. File Service Name must be "default"

#### Output
* output [FileServiceProperties](#fileserviceproperties)

### FileServices_SetServiceProperties
Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules. 


```js
azure_storage_file.FileServices_SetServiceProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "FileServicesName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * FileServicesName **required** `string` (values: default): The name of the file Service within the specified storage account. File Service Name must be "default"
  * parameters **required** [FileServiceProperties](#fileserviceproperties)

#### Output
* output [FileServiceProperties](#fileserviceproperties)



## Definitions

### CloudError
* CloudError `object`: An error response from the Storage service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Storage service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### FileServiceItems
* FileServiceItems `object`
  * value `array`: List of file services returned.
    * items [FileServiceProperties](#fileserviceproperties)

### FileServiceProperties
* FileServiceProperties `object`: The properties of File services in storage account.
  * properties `object`: The properties of File services in storage account.
    * cors `object`: Sets the CORS rules. You can include up to five CorsRule elements in the request. 
      * corsRules `array`: The List of CORS rules. You can include up to five CorsRule elements in the request. 
        * items `object`: Specifies a CORS rule for the Blob service.
          * allowedHeaders **required** `array`: Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
          * allowedMethods **required** `array`: Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
          * allowedOrigins **required** `array`: Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
          * exposedHeaders **required** `array`: Required if CorsRule element is present. A list of response headers to expose to CORS clients.
          * maxAgeInSeconds **required** `integer`: Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
    * shareDeleteRetentionPolicy `object`: The service properties for soft delete.
      * days `integer`: Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
      * enabled `boolean`: Indicates whether DeleteRetentionPolicy is enabled.
  * sku `object`: The SKU of the storage account.
    * name **required** `string` (values: Standard_LRS, Standard_GRS, Standard_RAGRS, Standard_ZRS, Premium_LRS, Premium_ZRS, Standard_GZRS, Standard_RAGZRS): The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
    * tier `string` (values: Standard, Premium): The SKU tier. This is based on the SKU name.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### FileShare
* FileShare `object`: Properties of the file share, including Id, resource name, resource type, Etag.
  * properties [FileShareProperties](#fileshareproperties)
  * etag `string`: Resource Etag.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### FileShareItem
* FileShareItem `object`: The file share properties be listed out.
  * properties [FileShareProperties](#fileshareproperties)
  * etag `string`: Resource Etag.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### FileShareItems
* FileShareItems `object`: Response schema. Contains list of shares returned, and if paging is requested or required, a URL to next page of shares.
  * nextLink `string`: Request URL that can be used to query next page of shares. Returned when total number of requested shares exceed maximum page size.
  * value `array`: List of file shares returned.
    * items [FileShareItem](#fileshareitem)

### FileShareProperties
* FileShareProperties `object`: The properties of the file share.
  * lastModifiedTime `string`: Returns the date and time the share was last modified.
  * metadata `object`: A name-value pair to associate with the share as metadata.
  * shareQuota `integer`: The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.


