# @datafire/amazonaws_lakeformation

Client library for AWS Lake Formation

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_lakeformation
```
```js
let amazonaws_lakeformation = require('@datafire/amazonaws_lakeformation').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Lake Formation</fullname> <p>Defines the public endpoint for the AWS Lake Formation service.</p>

## Actions

### BatchGrantPermissions



```js
amazonaws_lakeformation.BatchGrantPermissions({
  "Entries": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Entries **required**
    * items [BatchPermissionsRequestEntry](#batchpermissionsrequestentry)

#### Output
* output [BatchGrantPermissionsResponse](#batchgrantpermissionsresponse)

### BatchRevokePermissions



```js
amazonaws_lakeformation.BatchRevokePermissions({
  "Entries": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Entries **required**
    * items [BatchPermissionsRequestEntry](#batchpermissionsrequestentry)

#### Output
* output [BatchRevokePermissionsResponse](#batchrevokepermissionsresponse)

### DeregisterResource



```js
amazonaws_lakeformation.DeregisterResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DeregisterResourceResponse](#deregisterresourceresponse)

### DescribeResource



```js
amazonaws_lakeformation.DescribeResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DescribeResourceResponse](#describeresourceresponse)

### GetDataLakeSettings



```js
amazonaws_lakeformation.GetDataLakeSettings({}, context)
```

#### Input
* input `object`
  * CatalogId

#### Output
* output [GetDataLakeSettingsResponse](#getdatalakesettingsresponse)

### GetEffectivePermissionsForPath



```js
amazonaws_lakeformation.GetEffectivePermissionsForPath({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [GetEffectivePermissionsForPathResponse](#geteffectivepermissionsforpathresponse)

### GrantPermissions



```js
amazonaws_lakeformation.GrantPermissions({
  "Principal": null,
  "Resource": null,
  "Permissions": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Permissions **required**
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal **required**
    * DataLakePrincipalIdentifier
  * Resource **required**
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

#### Output
* output [GrantPermissionsResponse](#grantpermissionsresponse)

### ListPermissions



```js
amazonaws_lakeformation.ListPermissions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * MaxResults
  * NextToken
  * Principal
    * DataLakePrincipalIdentifier
  * Resource
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**
  * ResourceType

#### Output
* output [ListPermissionsResponse](#listpermissionsresponse)

### ListResources



```js
amazonaws_lakeformation.ListResources({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FilterConditionList
    * items [FilterCondition](#filtercondition)
  * MaxResults
  * NextToken

#### Output
* output [ListResourcesResponse](#listresourcesresponse)

### PutDataLakeSettings



```js
amazonaws_lakeformation.PutDataLakeSettings({
  "DataLakeSettings": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DataLakeSettings **required**
    * CreateDatabaseDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * DataLakeAdmins
      * items [DataLakePrincipal](#datalakeprincipal)
    * TrustedResourceOwners
      * items [CatalogIdString](#catalogidstring)

#### Output
* output [PutDataLakeSettingsResponse](#putdatalakesettingsresponse)

### RegisterResource



```js
amazonaws_lakeformation.RegisterResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * RoleArn
  * UseServiceLinkedRole

#### Output
* output [RegisterResourceResponse](#registerresourceresponse)

### RevokePermissions



```js
amazonaws_lakeformation.RevokePermissions({
  "Principal": null,
  "Resource": null,
  "Permissions": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Permissions **required**
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal **required**
    * DataLakePrincipalIdentifier
  * Resource **required**
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

#### Output
* output [RevokePermissionsResponse](#revokepermissionsresponse)

### UpdateResource



```js
amazonaws_lakeformation.UpdateResource({
  "RoleArn": null,
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * RoleArn **required**

#### Output
* output [UpdateResourceResponse](#updateresourceresponse)



## Definitions

### AlreadyExistsException


### BatchGrantPermissionsRequest
* BatchGrantPermissionsRequest `object`
  * CatalogId
  * Entries **required**
    * items [BatchPermissionsRequestEntry](#batchpermissionsrequestentry)

### BatchGrantPermissionsResponse
* BatchGrantPermissionsResponse `object`
  * Failures
    * items [BatchPermissionsFailureEntry](#batchpermissionsfailureentry)

### BatchPermissionsFailureEntry
* BatchPermissionsFailureEntry `object`: A list of failures when performing a batch grant or batch revoke operation.
  * Error
    * ErrorCode
    * ErrorMessage
  * RequestEntry
    * Id **required**
    * Permissions
      * items [Permission](#permission)
    * PermissionsWithGrantOption
      * items [Permission](#permission)
    * Principal
      * DataLakePrincipalIdentifier
    * Resource
      * Catalog
      * DataLocation
        * CatalogId
        * ResourceArn **required**
      * Database
        * CatalogId
        * Name **required**
      * Table
        * CatalogId
        * DatabaseName **required**
        * Name
        * TableWildcard
      * TableWithColumns
        * CatalogId
        * ColumnNames
          * items [NameString](#namestring)
        * ColumnWildcard
          * ExcludedColumnNames
        * DatabaseName **required**
        * Name **required**

### BatchPermissionsFailureList
* BatchPermissionsFailureList `array`
  * items [BatchPermissionsFailureEntry](#batchpermissionsfailureentry)

### BatchPermissionsRequestEntry
* BatchPermissionsRequestEntry `object`: A permission to a resource granted by batch operation to the principal.
  * Id **required**
  * Permissions
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal
    * DataLakePrincipalIdentifier
  * Resource
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

### BatchPermissionsRequestEntryList
* BatchPermissionsRequestEntryList `array`
  * items [BatchPermissionsRequestEntry](#batchpermissionsrequestentry)

### BatchRevokePermissionsRequest
* BatchRevokePermissionsRequest `object`
  * CatalogId
  * Entries **required**
    * items [BatchPermissionsRequestEntry](#batchpermissionsrequestentry)

### BatchRevokePermissionsResponse
* BatchRevokePermissionsResponse `object`
  * Failures
    * items [BatchPermissionsFailureEntry](#batchpermissionsfailureentry)

### CatalogIdString
* CatalogIdString `string`

### CatalogResource
* CatalogResource `object`: A structure for the catalog object.

### ColumnNames
* ColumnNames `array`
  * items [NameString](#namestring)

### ColumnWildcard
* ColumnWildcard `object`: A wildcard object, consisting of an optional list of excluded column names or indexes.
  * ExcludedColumnNames
    * items [NameString](#namestring)

### ComparisonOperator
* ComparisonOperator `string` (values: EQ, NE, LE, LT, GE, GT, CONTAINS, NOT_CONTAINS, BEGINS_WITH, IN, BETWEEN)

### ConcurrentModificationException


### DataLakePrincipal
* DataLakePrincipal `object`: The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.
  * DataLakePrincipalIdentifier

### DataLakePrincipalList
* DataLakePrincipalList `array`
  * items [DataLakePrincipal](#datalakeprincipal)

### DataLakePrincipalString
* DataLakePrincipalString `string`

### DataLakeResourceType
* DataLakeResourceType `string` (values: CATALOG, DATABASE, TABLE, DATA_LOCATION)

### DataLakeSettings
* DataLakeSettings `object`: A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
  * CreateDatabaseDefaultPermissions
    * items [PrincipalPermissions](#principalpermissions)
  * CreateTableDefaultPermissions
    * items [PrincipalPermissions](#principalpermissions)
  * DataLakeAdmins
    * items [DataLakePrincipal](#datalakeprincipal)
  * TrustedResourceOwners
    * items [CatalogIdString](#catalogidstring)

### DataLocationResource
* DataLocationResource `object`: A structure for a data location object where permissions are granted or revoked. 
  * CatalogId
  * ResourceArn **required**

### DatabaseResource
* DatabaseResource `object`: A structure for the database object.
  * CatalogId
  * Name **required**

### DeregisterResourceRequest
* DeregisterResourceRequest `object`
  * ResourceArn **required**

### DeregisterResourceResponse
* DeregisterResourceResponse `object`

### DescribeResourceRequest
* DescribeResourceRequest `object`
  * ResourceArn **required**

### DescribeResourceResponse
* DescribeResourceResponse `object`
  * ResourceInfo
    * LastModified
    * ResourceArn
    * RoleArn

### DescriptionString
* DescriptionString `string`

### DetailsMap
* DetailsMap `object`: <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through AWS Resource Access Manager (AWS RAM), then there will exist a corresponding RAM share resource ARN.</p>
  * ResourceShare
    * items [RAMResourceShareArn](#ramresourcesharearn)

### EntityNotFoundException


### ErrorDetail
* ErrorDetail `object`: Contains details about an error.
  * ErrorCode
  * ErrorMessage

### FieldNameString
* FieldNameString `string` (values: RESOURCE_ARN, ROLE_ARN, LAST_MODIFIED)

### FilterCondition
* FilterCondition `object`: This structure describes the filtering of columns in a table based on a filter condition.
  * ComparisonOperator
  * Field
  * StringValueList
    * items [StringValue](#stringvalue)

### FilterConditionList
* FilterConditionList `array`
  * items [FilterCondition](#filtercondition)

### GetDataLakeSettingsRequest
* GetDataLakeSettingsRequest `object`
  * CatalogId

### GetDataLakeSettingsResponse
* GetDataLakeSettingsResponse `object`
  * DataLakeSettings
    * CreateDatabaseDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * DataLakeAdmins
      * items [DataLakePrincipal](#datalakeprincipal)
    * TrustedResourceOwners
      * items [CatalogIdString](#catalogidstring)

### GetEffectivePermissionsForPathRequest
* GetEffectivePermissionsForPathRequest `object`
  * CatalogId
  * MaxResults
  * NextToken
  * ResourceArn **required**

### GetEffectivePermissionsForPathResponse
* GetEffectivePermissionsForPathResponse `object`
  * NextToken
  * Permissions
    * items [PrincipalResourcePermissions](#principalresourcepermissions)

### GrantPermissionsRequest
* GrantPermissionsRequest `object`
  * CatalogId
  * Permissions **required**
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal **required**
    * DataLakePrincipalIdentifier
  * Resource **required**
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

### GrantPermissionsResponse
* GrantPermissionsResponse `object`

### IAMRoleArn
* IAMRoleArn `string`

### Identifier
* Identifier `string`

### InternalServiceException


### InvalidInputException


### LastModifiedTimestamp
* LastModifiedTimestamp `string`

### ListPermissionsRequest
* ListPermissionsRequest `object`
  * CatalogId
  * MaxResults
  * NextToken
  * Principal
    * DataLakePrincipalIdentifier
  * Resource
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**
  * ResourceType

### ListPermissionsResponse
* ListPermissionsResponse `object`
  * NextToken
  * PrincipalResourcePermissions
    * items [PrincipalResourcePermissions](#principalresourcepermissions)

### ListResourcesRequest
* ListResourcesRequest `object`
  * FilterConditionList
    * items [FilterCondition](#filtercondition)
  * MaxResults
  * NextToken

### ListResourcesResponse
* ListResourcesResponse `object`
  * NextToken
  * ResourceInfoList
    * items [ResourceInfo](#resourceinfo)

### NameString
* NameString `string`

### NullableBoolean
* NullableBoolean `boolean`

### OperationTimeoutException


### PageSize
* PageSize `integer`

### Permission
* Permission `string` (values: ALL, SELECT, ALTER, DROP, DELETE, INSERT, DESCRIBE, CREATE_DATABASE, CREATE_TABLE, DATA_LOCATION_ACCESS)

### PermissionList
* PermissionList `array`
  * items [Permission](#permission)

### PrincipalPermissions
* PrincipalPermissions `object`: Permissions granted to a principal.
  * Permissions
    * items [Permission](#permission)
  * Principal
    * DataLakePrincipalIdentifier

### PrincipalPermissionsList
* PrincipalPermissionsList `array`
  * items [PrincipalPermissions](#principalpermissions)

### PrincipalResourcePermissions
* PrincipalResourcePermissions `object`: The permissions granted or revoked on a resource.
  * AdditionalDetails
    * ResourceShare
      * items [RAMResourceShareArn](#ramresourcesharearn)
  * Permissions
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal
    * DataLakePrincipalIdentifier
  * Resource
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

### PrincipalResourcePermissionsList
* PrincipalResourcePermissionsList `array`
  * items [PrincipalResourcePermissions](#principalresourcepermissions)

### PutDataLakeSettingsRequest
* PutDataLakeSettingsRequest `object`
  * CatalogId
  * DataLakeSettings **required**
    * CreateDatabaseDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * DataLakeAdmins
      * items [DataLakePrincipal](#datalakeprincipal)
    * TrustedResourceOwners
      * items [CatalogIdString](#catalogidstring)

### PutDataLakeSettingsResponse
* PutDataLakeSettingsResponse `object`

### RAMResourceShareArn
* RAMResourceShareArn `string`

### RegisterResourceRequest
* RegisterResourceRequest `object`
  * ResourceArn **required**
  * RoleArn
  * UseServiceLinkedRole

### RegisterResourceResponse
* RegisterResourceResponse `object`

### Resource
* Resource `object`: A structure for the resource.
  * Catalog
  * DataLocation
    * CatalogId
    * ResourceArn **required**
  * Database
    * CatalogId
    * Name **required**
  * Table
    * CatalogId
    * DatabaseName **required**
    * Name
    * TableWildcard
  * TableWithColumns
    * CatalogId
    * ColumnNames
      * items [NameString](#namestring)
    * ColumnWildcard
      * ExcludedColumnNames
        * items [NameString](#namestring)
    * DatabaseName **required**
    * Name **required**

### ResourceArnString
* ResourceArnString `string`

### ResourceInfo
* ResourceInfo `object`: A structure containing information about an AWS Lake Formation resource.
  * LastModified
  * ResourceArn
  * RoleArn

### ResourceInfoList
* ResourceInfoList `array`
  * items [ResourceInfo](#resourceinfo)

### ResourceShareList
* ResourceShareList `array`
  * items [RAMResourceShareArn](#ramresourcesharearn)

### RevokePermissionsRequest
* RevokePermissionsRequest `object`
  * CatalogId
  * Permissions **required**
    * items [Permission](#permission)
  * PermissionsWithGrantOption
    * items [Permission](#permission)
  * Principal **required**
    * DataLakePrincipalIdentifier
  * Resource **required**
    * Catalog
    * DataLocation
      * CatalogId
      * ResourceArn **required**
    * Database
      * CatalogId
      * Name **required**
    * Table
      * CatalogId
      * DatabaseName **required**
      * Name
      * TableWildcard
    * TableWithColumns
      * CatalogId
      * ColumnNames
        * items [NameString](#namestring)
      * ColumnWildcard
        * ExcludedColumnNames
          * items [NameString](#namestring)
      * DatabaseName **required**
      * Name **required**

### RevokePermissionsResponse
* RevokePermissionsResponse `object`

### StringValue
* StringValue `string`

### StringValueList
* StringValueList `array`
  * items [StringValue](#stringvalue)

### TableResource
* TableResource `object`: A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
  * CatalogId
  * DatabaseName **required**
  * Name
  * TableWildcard

### TableWildcard
* TableWildcard `object`: A wildcard object representing every table under a database.

### TableWithColumnsResource
* TableWithColumnsResource `object`: <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
  * CatalogId
  * ColumnNames
    * items [NameString](#namestring)
  * ColumnWildcard
    * ExcludedColumnNames
      * items [NameString](#namestring)
  * DatabaseName **required**
  * Name **required**

### Token
* Token `string`

### TrustedResourceOwners
* TrustedResourceOwners `array`
  * items [CatalogIdString](#catalogidstring)

### UpdateResourceRequest
* UpdateResourceRequest `object`
  * ResourceArn **required**
  * RoleArn **required**

### UpdateResourceResponse
* UpdateResourceResponse `object`


