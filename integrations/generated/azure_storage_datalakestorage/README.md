# @datafire/azure_storage_datalakestorage

Client library for Azure Data Lake Storage

## Installation and Usage
```bash
npm install --save @datafire/azure_storage_datalakestorage
```
```js
let azure_storage_datalakestorage = require('@datafire/azure_storage_datalakestorage').create();

.then(data => {
  console.log(data);
});
```

## Description

Azure Data Lake Storage provides storage for Hadoop and other big data workloads.

## Actions

### Filesystem_List
List filesystems and their properties in given account.


```js
azure_storage_datalakestorage.Filesystem_List({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: account): The value must be "account" for all account operations.
  * prefix `string`: Filters results to filesystems within the specified prefix.
  * continuation `string`: The number of filesystems returned with each invocation is limited. If the number of filesystems to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the filesystems.
  * maxResults `integer`: An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
* output [FilesystemList](#filesystemlist)

### Filesystem_Delete
Marks the filesystem for deletion.  When a filesystem is deleted, a filesystem with the same identifier cannot be created for at least 30 seconds. While the filesystem is being deleted, attempts to create a filesystem with the same identifier will fail with status code 409 (Conflict), with the service returning additional error information indicating that the filesystem is being deleted. All other operations, including operations on any files or directories within the filesystem, will fail with status code 404 (Not Found) while the filesystem is being deleted. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Filesystem_Delete({
  "filesystem": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
  * resource **required** `string` (values: filesystem): The value must be "filesystem" for all filesystem operations.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_List
List filesystem paths and their properties.


```js
azure_storage_datalakestorage.Path_List({
  "recursive": true,
  "filesystem": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * directory `string`: Filters results to paths within the specified directory. An error occurs if the directory does not exist.
  * recursive **required** `boolean`: If "true", all paths are listed; otherwise, only paths at the root of the filesystem are listed.  If "directory" is specified, the list will only include paths that share the same root.
  * continuation `string`: The number of paths returned with each invocation is limited. If the number of paths to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the paths.
  * maxResults `integer`: An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
  * upn `boolean`: Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the user identity values returned in the owner and group fields of each list entry will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names.
  * filesystem **required** `string`: The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
  * resource **required** `string` (values: filesystem): The value must be "filesystem" for all filesystem operations.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
* output [PathList](#pathlist)

### Filesystem_GetProperties
All system and user-defined filesystem properties are specified in the response headers.


```js
azure_storage_datalakestorage.Filesystem_GetProperties({
  "filesystem": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * filesystem **required** `string`: The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
  * resource **required** `string` (values: filesystem): The value must be "filesystem" for all filesystem operations.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Filesystem_SetProperties
Set properties for the filesystem.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Filesystem_SetProperties({
  "filesystem": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * x-ms-properties `string`: Optional. User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.  If the filesystem exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
  * resource **required** `string` (values: filesystem): The value must be "filesystem" for all filesystem operations.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Filesystem_Create
Create a filesystem rooted at the specified location. If the filesystem already exists, the operation fails.  This operation does not support conditional HTTP requests.


```js
azure_storage_datalakestorage.Filesystem_Create({
  "filesystem": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * x-ms-properties `string`: User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.
  * filesystem **required** `string`: The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
  * resource **required** `string` (values: filesystem): The value must be "filesystem" for all filesystem operations.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_Delete
Delete the file or directory. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Path_Delete({
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * recursive `boolean`: Required and valid only when the resource is a directory.  If "true", all paths beneath the directory will be deleted. If "false" and the directory is non-empty, an error occurs.
  * continuation `string`: Optional.  When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory.
  * x-ms-lease-id `string`: The lease ID must be specified if there is an active lease.
  * If-Match `string`: Optional.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_Read
Read the contents of a file.  For read operations, range requests are supported. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Path_Read({
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * Range `string`: The HTTP Range request header specifies one or more byte ranges of the resource to be retrieved.
  * x-ms-lease-id `string`: Optional. If this header is specified, the operation will be performed only if both of the following conditions are met: i) the path's lease is currently active and ii) the lease ID specified in the request matches that of the path.
  * x-ms-range-get-content-md5 `boolean`: Optional. When this header is set to "true" and specified together with the Range header, the service returns the MD5 hash for the range, as long as the range is less than or equal to 4MB in size. If this header is specified without the Range header, the service returns status code 400 (Bad Request). If this header is set to true when the range exceeds 4 MB in size, the service returns status code 400 (Bad Request).
  * If-Match `string`: Optional.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
* output `file`

### Path_GetProperties
Get Properties returns all system and user defined properties for a path. Get Status returns all system defined properties for a path. Get Access Control List returns the access control list for a path. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Path_GetProperties({
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * action `string` (values: getAccessControl, getStatus, checkAccess): Optional. If the value is "getStatus" only the system defined properties for the path are returned. If the value is "getAccessControl" the access control list is returned in the response headers (Hierarchical Namespace must be enabled for the account), otherwise the properties are returned.
  * upn `boolean`: Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the user identity values returned in the x-ms-owner, x-ms-group, and x-ms-acl response headers will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names.
  * fsAction `string`: Required only for check access action. Valid only when Hierarchical Namespace is enabled for the account. File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}'
  * x-ms-lease-id `string`: Optional. If this header is specified, the operation will be performed only if both of the following conditions are met: i) the path's lease is currently active and ii) the lease ID specified in the request matches that of the path.
  * If-Match `string`: Optional.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_Update
Uploads data to be appended to a file, flushes (writes) previously uploaded data to a file, sets properties for a file or directory, or sets access control for a file or directory. Data can only be appended to a file. This operation supports conditional HTTP requests. For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Path_Update({
  "action": "",
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * action **required** `string` (values: append, flush, setProperties, setAccessControl): The action must be "append" to upload data to be appended to a file, "flush" to flush previously uploaded data to a file, "setProperties" to set the properties of a file or directory, or "setAccessControl" to set the owner, group, permissions, or access control list for a file or directory.  Note that Hierarchical Namespace must be enabled for the account in order to use access control.  Also note that the Access Control List (ACL) includes permissions for the owner, owning group, and others, so the x-ms-permissions and x-ms-acl request headers are mutually exclusive.
  * position `integer`: This parameter allows the caller to upload data in parallel and control the order in which it is appended to the file.  It is required when uploading data to be appended to the file and when flushing previously uploaded data to the file.  The value must be the position where the data is to be appended.  Uploaded data is not immediately flushed, or written, to the file.  To flush, the previously uploaded data must be contiguous, the position parameter must be specified and equal to the length of the file after all data has been written, and there must not be a request entity body included with the request.
  * retainUncommittedData `boolean`: Valid only for flush operations.  If "true", uncommitted data is retained after the flush operation completes; otherwise, the uncommitted data is deleted after the flush operation.  The default is false.  Data at offsets less than the specified position are written to the file when flush succeeds, but this optional parameter allows data after the flush position to be retained for a future flush operation.
  * close `boolean`: Azure Storage Events allow applications to receive notifications when files change. When Azure Storage Events are enabled, a file changed event is raised. This event has a property indicating whether this is the final change to distinguish the difference between an intermediate flush to a file stream and the final close of a file stream. The close query parameter is valid only when the action is "flush" and change notifications are enabled. If the value of close is "true" and the flush operation completes successfully, the service raises a file change notification with a property indicating that this is the final update (the file stream has been closed). If "false" a change notification is raised indicating the file has changed. The default is false. This query parameter is set to true by the Hadoop ABFS driver to indicate that the file stream has been closed."
  * Content-Length `integer`: Required for "Append Data" and "Flush Data".  Must be 0 for "Flush Data".  Must be the length of the request content in bytes for "Append Data".
  * Content-MD5 `string`: Optional. An MD5 hash of the request content. This header is valid on "Append" and "Flush" operations. This hash is used to verify the integrity of the request content during transport. When this header is specified, the storage service compares the hash of the content that has arrived with this header value. If the two hashes do not match, the operation will fail with error code 400 (Bad Request). Note that this MD5 hash is not stored with the file. This header is associated with the request content, and not with the stored content of the file itself.
  * x-ms-lease-id `string`: The lease ID must be specified if there is an active lease.
  * x-ms-cache-control `string`: Optional and only valid for flush and set properties operations.  The service stores this value and includes it in the "Cache-Control" response header for "Read File" operations.
  * x-ms-content-type `string`: Optional and only valid for flush and set properties operations.  The service stores this value and includes it in the "Content-Type" response header for "Read File" operations.
  * x-ms-content-disposition `string`: Optional and only valid for flush and set properties operations.  The service stores this value and includes it in the "Content-Disposition" response header for "Read File" operations.
  * x-ms-content-encoding `string`: Optional and only valid for flush and set properties operations.  The service stores this value and includes it in the "Content-Encoding" response header for "Read File" operations.
  * x-ms-content-language `string`: Optional and only valid for flush and set properties operations.  The service stores this value and includes it in the "Content-Language" response header for "Read File" operations.
  * x-ms-content-md5 `string`: Optional and only valid for "Flush & Set Properties" operations.  The service stores this value and includes it in the "Content-Md5" response header for "Read & Get Properties" operations. If this property is not specified on the request, then the property will be cleared for the file. Subsequent calls to "Read & Get Properties" will not return this property unless it is explicitly set on that file again.
  * x-ms-properties `string`: Optional.  User-defined properties to be stored with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. Valid only for the setProperties operation. If the file or directory exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties.
  * x-ms-owner `string`: Optional and valid only for the setAccessControl operation. Sets the owner of the file or directory.
  * x-ms-group `string`: Optional and valid only for the setAccessControl operation. Sets the owning group of the file or directory.
  * x-ms-permissions `string`: Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. Invalid in conjunction with x-ms-acl.
  * x-ms-acl `string`: Optional and valid only for the setAccessControl operation. Sets POSIX access control rights on files and directories. The value is a comma-separated list of access control entries that fully replaces the existing access control list (ACL).  Each access control entry (ACE) consists of a scope, a type, a user or group identifier, and permissions in the format "[scope:][type]:[id]:[permissions]". The scope must be "default" to indicate the ACE belongs to the default ACL for a directory; otherwise scope is implicit and the ACE belongs to the access ACL.  There are four ACE types: "user" grants rights to the owner or a named user, "group" grants rights to the owning group or a named group, "mask" restricts rights granted to named users and the members of groups, and "other" grants rights to all users not found in any of the other entries. The user or group identifier is omitted for entries of type "mask" and "other".  The user or group identifier is also omitted for the owner and owning group.  The permission field is a 3-character sequence where the first character is 'r' to grant read access, the second character is 'w' to grant write access, and the third character is 'x' to grant execute permission.  If access is not granted, the '-' character is used to denote that the permission is denied. For example, the following ACL grants read, write, and execute rights to the file owner and john.doe@contoso, the read right to the owning group, and nothing to everyone else: "user::rwx,user:john.doe@contoso:rwx,group::r--,other::---,mask=rwx". Invalid in conjunction with x-ms-permissions.
  * If-Match `string`: Optional for Flush Data and Set Properties, but invalid for Append Data.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional for Flush Data and Set Properties, but invalid for Append Data.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional for Flush Data and Set Properties, but invalid for Append Data. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional for Flush Data and Set Properties, but invalid for Append Data. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * requestBody `object`
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_Lease
Create and manage a lease to restrict write and delete access to the path. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).


```js
azure_storage_datalakestorage.Path_Lease({
  "x-ms-lease-action": "",
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * x-ms-lease-action **required** `string` (values: acquire, break, change, renew, release): There are five lease actions: "acquire", "break", "change", "renew", and "release". Use "acquire" and specify the "x-ms-proposed-lease-id" and "x-ms-lease-duration" to acquire a new lease. Use "break" to break an existing lease. When a lease is broken, the lease break period is allowed to elapse, during which time no lease operation except break and release can be performed on the file. When a lease is successfully broken, the response indicates the interval in seconds until a new lease can be acquired. Use "change" and specify the current lease ID in "x-ms-lease-id" and the new lease ID in "x-ms-proposed-lease-id" to change the lease ID of an active lease. Use "renew" and specify the "x-ms-lease-id" to renew an existing lease. Use "release" and specify the "x-ms-lease-id" to release a lease.
  * x-ms-lease-duration `integer`: The lease duration is required to acquire a lease, and specifies the duration of the lease in seconds.  The lease duration must be between 15 and 60 seconds or -1 for infinite lease.
  * x-ms-lease-break-period `integer`: The lease break period duration is optional to break a lease, and  specifies the break period of the lease in seconds.  The lease break  duration must be between 0 and 60 seconds.
  * x-ms-lease-id `string`: Required when "x-ms-lease-action" is "renew", "change" or "release". For the renew and release actions, this must match the current lease ID.
  * x-ms-proposed-lease-id `string`: Required when "x-ms-lease-action" is "acquire" or "change".  A lease will be acquired with this lease ID if the operation is successful.
  * If-Match `string`: Optional.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*

### Path_Create
Create or rename a file or directory.    By default, the destination is overwritten and if the destination already exists and has a lease the lease is broken.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).  To fail if the destination already exists, use a conditional request with If-None-Match: "*".


```js
azure_storage_datalakestorage.Path_Create({
  "filesystem": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * resource `string` (values: directory, file): Required only for Create File and Create Directory. The value must be "file" or "directory".
  * continuation `string`: Optional.  When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory.
  * mode `string` (values: legacy, posix): Optional. Valid only when namespace is enabled. This parameter determines the behavior of the rename operation. The value must be "legacy" or "posix", and the default value will be "posix". 
  * Cache-Control `string`: Optional.  The service stores this value and includes it in the "Cache-Control" response header for "Read File" operations for "Read File" operations.
  * Content-Encoding `string`: Optional.  Specifies which content encodings have been applied to the file. This value is returned to the client when the "Read File" operation is performed.
  * Content-Language `string`: Optional.  Specifies the natural language used by the intended audience for the file.
  * Content-Disposition `string`: Optional.  The service stores this value and includes it in the "Content-Disposition" response header for "Read File" operations.
  * x-ms-cache-control `string`: Optional.  The service stores this value and includes it in the "Cache-Control" response header for "Read File" operations.
  * x-ms-content-type `string`: Optional.  The service stores this value and includes it in the "Content-Type" response header for "Read File" operations.
  * x-ms-content-encoding `string`: Optional.  The service stores this value and includes it in the "Content-Encoding" response header for "Read File" operations.
  * x-ms-content-language `string`: Optional.  The service stores this value and includes it in the "Content-Language" response header for "Read File" operations.
  * x-ms-content-disposition `string`: Optional.  The service stores this value and includes it in the "Content-Disposition" response header for "Read File" operations.
  * x-ms-rename-source `string`: An optional file or directory to be renamed.  The value must have the following format: "/{filesystem}/{path}".  If "x-ms-properties" is specified, the properties will overwrite the existing properties; otherwise, the existing properties will be preserved. This value must be a URL percent-encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.
  * x-ms-lease-id `string`: Optional.  A lease ID for the path specified in the URI.  The path to be overwritten must have an active lease and the lease ID must match.
  * x-ms-source-lease-id `string`: Optional for rename operations.  A lease ID for the source path.  The source path must have an active lease and the lease ID must match.
  * x-ms-properties `string`: Optional.  User-defined properties to be stored with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.
  * x-ms-permissions `string`: Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported.
  * x-ms-umask `string`: Optional and only valid if Hierarchical Namespace is enabled for the account. When creating a file or directory and the parent folder does not have a default ACL, the umask restricts the permissions of the file or directory to be created.  The resulting permission is given by p & ^u, where p is the permission and u is the umask.  For example, if p is 0777 and u is 0057, then the resulting permission is 0720.  The default permission is 0777 for a directory and 0666 for a file.  The default umask is 0027.  The umask must be specified in 4-digit octal notation (e.g. 0766).
  * If-Match `string`: Optional.  An ETag value. Specify this header to perform the operation only if the resource's ETag matches the value specified. The ETag must be specified in quotes.
  * If-None-Match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the operation only if the resource's ETag does not match the value specified. The ETag must be specified in quotes.
  * If-Modified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time.
  * If-Unmodified-Since `string`: Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time.
  * x-ms-source-if-match `string`: Optional.  An ETag value. Specify this header to perform the rename operation only if the source's ETag matches the value specified. The ETag must be specified in quotes.
  * x-ms-source-if-none-match `string`: Optional.  An ETag value or the special wildcard ("*") value. Specify this header to perform the rename operation only if the source's ETag does not match the value specified. The ETag must be specified in quotes.
  * x-ms-source-if-modified-since `string`: Optional. A date and time value. Specify this header to perform the rename operation only if the source has been modified since the specified date and time.
  * x-ms-source-if-unmodified-since `string`: Optional. A date and time value. Specify this header to perform the rename operation only if the source has not been modified since the specified date and time.
  * filesystem **required** `string`: The filesystem identifier.
  * path **required** `string`: The file or directory path.
  * x-ms-client-request-id `string`: A UUID recorded in the analytics logs for troubleshooting and correlation.
  * timeout `integer`: An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
  * x-ms-date `string`: Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization.
  * x-ms-version `string`: Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization.

#### Output
*Output schema unknown*



## Definitions

### DataLakeStorageError
* DataLakeStorageError `object`
  * error `object`: The service error response object.
    * code `string`: The service error code.
    * message `string`: The service error message.

### Filesystem
* Filesystem `object`
  * eTag `string`
  * lastModified `string`
  * name `string`

### FilesystemList
* FilesystemList `object`
  * filesystems `array`
    * items [Filesystem](#filesystem)

### Path
* Path `object`
  * contentLength `integer`
  * eTag `string`
  * group `string`
  * isDirectory `boolean`
  * lastModified `string`
  * name `string`
  * owner `string`
  * permissions `string`

### PathList
* PathList `object`
  * paths `array`
    * items [Path](#path)


