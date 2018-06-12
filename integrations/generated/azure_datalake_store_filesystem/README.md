# @datafire/azure_datalake_store_filesystem

Client library for DataLakeStoreFileSystemManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datalake_store_filesystem
```
```js
let azure_datalake_store_filesystem = require('@datafire/azure_datalake_store_filesystem').create();

azure_datalake_store_filesystem.FileSystem_ConcurrentAppend({
  "path": "",
  "streamContents": {},
  "op": "",
  "Transfer-Encoding": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Creates an Azure Data Lake Store filesystem client.

## Actions

### FileSystem_ConcurrentAppend
Appends to the specified file, optionally first creating the file if it does not yet exist. This method supports multiple concurrent appends to the file. NOTE: The target must not contain data added by Create or normal (serial) Append. ConcurrentAppend and Append cannot be used interchangeably; once a target file has been modified using either of these append options, the other append option cannot be used on the target file. ConcurrentAppend does not guarantee order and can result in duplicated data landing in the target file.


```js
azure_datalake_store_filesystem.FileSystem_ConcurrentAppend({
  "path": "",
  "streamContents": {},
  "op": "",
  "Transfer-Encoding": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The Data Lake Store path (starting with '/') of the file to which to append using concurrent append.
  * streamContents **required** `object`
  * appendMode `string` (values: autocreate): Indicates the concurrent append call should create the file if it doesn't exist or just open the existing file for append
  * op **required** `string` (values: CONCURRENTAPPEND): The constant value for the operation.
  * Transfer-Encoding **required** `string` (values: chunked): Indicates the data being sent to the server is being streamed in chunks.
  * syncFlag `string` (values: DATA, METADATA, CLOSE): Optionally indicates what to do after completion of the concurrent append. DATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata (including file length, last modified time) should NOT get updated. METADATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata should get updated. CLOSE indicates that the client is done sending data, the file handle should be closed/unlocked, and file metadata should get updated.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FileSystem_SetFileExpiry
Sets or removes the expiration time on the specified file. This operation can only be executed against files. Folders are not supported.


```js
azure_datalake_store_filesystem.FileSystem_SetFileExpiry({
  "path": "",
  "expiryOption": "",
  "op": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The Data Lake Store path (starting with '/') of the file on which to set or remove the expiration time.
  * expiryOption **required** `string` (values: NeverExpire, RelativeToNow, RelativeToCreationDate, Absolute): Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
  * expireTime `integer`: The time that the file will expire, corresponding to the ExpiryOption that was set.
  * op **required** `string` (values: SETEXPIRY): The constant value for the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FileSystem_CheckAccess
Checks if the specified access is available at the given path.


```js
azure_datalake_store_filesystem.FileSystem_CheckAccess({
  "path": "",
  "fsaction": "",
  "op": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The Data Lake Store path (starting with '/') of the file or directory for which to check access.
  * fsaction **required** `string`: File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}'
  * op **required** `string` (values: CHECKACCESS): The constant value for the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

### AclStatus
* AclStatus `object`: Data Lake Store file or directory Access Control List information.
  * entries `array`: the list of ACLSpec entries on a file or directory.
    * items `string`
  * group `string`: the group owner, an AAD Object ID.
  * owner `string`: the user owner, an AAD Object ID.
  * permission `string`: The octal representation of the unnamed user, mask and other permissions.
  * stickyBit `boolean`: the indicator of whether the sticky bit is on or off.

### AclStatusResult
* AclStatusResult `object`: Data Lake Store file or directory Access Control List information.
  * aclStatus [AclStatus](#aclstatus)

### AdlsAccessControlException
* AdlsAccessControlException: A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsBadOffsetException
* AdlsBadOffsetException: A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsError
* AdlsError `object`: Data Lake Store filesystem error containing a specific WebHDFS exception.
  * remoteException [AdlsRemoteException](#adlsremoteexception)

### AdlsFileAlreadyExistsException
* AdlsFileAlreadyExistsException: A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsFileNotFoundException
* AdlsFileNotFoundException: A WebHDFS exception thrown indicating the file or folder could not be found. Thrown when a 404 error response code is returned (not found).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsIOException
* AdlsIOException: A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsIllegalArgumentException
* AdlsIllegalArgumentException: A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsRemoteException
* AdlsRemoteException `object`: Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsRuntimeException
* AdlsRuntimeException: A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsSecurityException
* AdlsSecurityException: A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsThrottledException
* AdlsThrottledException: A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error.
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### AdlsUnsupportedOperationException
* AdlsUnsupportedOperationException: A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request).
  * exception **required** `string`: the class name of the exception thrown, such as 'IllegalArgumentException'.
  * javaClassName `string`: the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
  * message `string`: the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.

### ContentSummary
* ContentSummary `object`: Data Lake Store content summary information
  * directoryCount `integer`: the number of directories.
  * fileCount `integer`: the number of files.
  * length `integer`: the number of bytes used by the content.
  * spaceConsumed `integer`: the disk space consumed by the content.

### ContentSummaryResult
* ContentSummaryResult `object`: Data Lake Store filesystem content summary information response.
  * contentSummary [ContentSummary](#contentsummary)

### FileOperationResult
* FileOperationResult `object`: The result of the request or operation.
  * boolean `boolean`: the result of the operation or request.

### FileStatusProperties
* FileStatusProperties `object`: Data Lake Store file or directory information.
  * accessTime `integer`: the last access time as ticks since the epoch.
  * aclBit `boolean`: flag to indicate if extended acls are enabled 
  * blockSize `integer`: the block size for the file.
  * group `string`: the group owner.
  * length `integer`: the number of bytes in a file.
  * modificationTime `integer`: the modification time as ticks since the epoch.
  * msExpirationTime `integer`: Gets the expiration time, if any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there is no expiration.
  * owner `string`: the user who is the owner.
  * pathSuffix `string`: the path suffix.
  * permission `string`: the permission represented as an string.
  * type `string` (values: FILE, DIRECTORY): the type of the path object.

### FileStatusResult
* FileStatusResult `object`: Data Lake Store filesystem file status information response.
  * fileStatus [FileStatusProperties](#filestatusproperties)

### FileStatuses
* FileStatuses `object`: Data Lake Store file status list information.
  * fileStatus `array`: the object containing the list of properties of the files.
    * items [FileStatusProperties](#filestatusproperties)

### FileStatusesResult
* FileStatusesResult `object`: Data Lake Store filesystem file status list information response.
  * fileStatuses [FileStatuses](#filestatuses)


