# @datafire/google_replicapool

Client library for Replica Pool

## Installation and Usage
```bash
npm install --save @datafire/google_replicapool
```
```js
let google_replicapool = require('@datafire/google_replicapool').create({
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

The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_replicapool.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_replicapool.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### replicapool.pools.list
List all replica pools.


```js
google_replicapool.replicapool.pools.list({
  "projectName": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this request.
  * zone **required** `string`: The zone for this replica pool.
  * maxResults `integer`: Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
  * pageToken `string`: Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PoolsListResponse](#poolslistresponse)

### replicapool.pools.insert
Inserts a new replica pool.


```js
google_replicapool.replicapool.pools.insert({
  "projectName": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this replica pool.
  * zone **required** `string`: The zone for this replica pool.
  * body [Pool](#pool)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Pool](#pool)

### replicapool.pools.get
Gets information about a single replica pool.


```js
google_replicapool.replicapool.pools.get({
  "projectName": "",
  "zone": "",
  "poolName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this replica pool.
  * zone **required** `string`: The zone for this replica pool.
  * poolName **required** `string`: The name of the replica pool for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Pool](#pool)

### replicapool.pools.delete
Deletes a replica pool.


```js
google_replicapool.replicapool.pools.delete({
  "projectName": "",
  "zone": "",
  "poolName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this replica pool.
  * zone **required** `string`: The zone for this replica pool.
  * poolName **required** `string`: The name of the replica pool for this request.
  * body [PoolsDeleteRequest](#poolsdeleterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### replicapool.replicas.list
Lists all replicas in a pool.


```js
google_replicapool.replicapool.replicas.list({
  "projectName": "",
  "zone": "",
  "poolName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this request.
  * zone **required** `string`: The zone where the replica pool lives.
  * poolName **required** `string`: The replica pool name for this request.
  * maxResults `integer`: Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
  * pageToken `string`: Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ReplicasListResponse](#replicaslistresponse)

### replicapool.replicas.get
Gets information about a specific replica.


```js
google_replicapool.replicapool.replicas.get({
  "projectName": "",
  "zone": "",
  "poolName": "",
  "replicaName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this request.
  * zone **required** `string`: The zone where the replica lives.
  * poolName **required** `string`: The replica pool name for this request.
  * replicaName **required** `string`: The name of the replica for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Replica](#replica)

### replicapool.replicas.delete
Deletes a replica from the pool.


```js
google_replicapool.replicapool.replicas.delete({
  "projectName": "",
  "zone": "",
  "poolName": "",
  "replicaName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this request.
  * zone **required** `string`: The zone where the replica lives.
  * poolName **required** `string`: The replica pool name for this request.
  * replicaName **required** `string`: The name of the replica for this request.
  * body [ReplicasDeleteRequest](#replicasdeleterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Replica](#replica)

### replicapool.replicas.restart
Restarts a replica in a pool.


```js
google_replicapool.replicapool.replicas.restart({
  "projectName": "",
  "zone": "",
  "poolName": "",
  "replicaName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this request.
  * zone **required** `string`: The zone where the replica lives.
  * poolName **required** `string`: The replica pool name for this request.
  * replicaName **required** `string`: The name of the replica for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Replica](#replica)

### replicapool.pools.resize
Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.


```js
google_replicapool.replicapool.pools.resize({
  "projectName": "",
  "zone": "",
  "poolName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this replica pool.
  * zone **required** `string`: The zone for this replica pool.
  * poolName **required** `string`: The name of the replica pool for this request.
  * numReplicas `integer`: The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Pool](#pool)

### replicapool.pools.updatetemplate
Update the template used by the pool.


```js
google_replicapool.replicapool.pools.updatetemplate({
  "projectName": "",
  "zone": "",
  "poolName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: The project ID for this replica pool.
  * zone **required** `string`: The zone for this replica pool.
  * poolName **required** `string`: The name of the replica pool for this request.
  * body [Template](#template)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*



## Definitions

### AccessConfig
* AccessConfig `object`: A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
  * name `string`: Name of this access configuration.
  * natIp `string`: An external IP address associated with this instance.
  * type `string`: Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.

### Action
* Action `object`: An action that gets executed during initialization of the replicas.
  * commands `array`: A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.
    * items `string`
  * envVariables `array`: A list of environment variables to use for the commands in this action.
    * items [EnvVariable](#envvariable)
  * timeoutMilliSeconds `integer`: If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).

### DiskAttachment
* DiskAttachment `object`: Specifies how to attach a disk to a Replica.
  * deviceName `string`: The device name of this disk.
  * index `integer`: A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.

### EnvVariable
* EnvVariable `object`: An environment variable to set for an action.
  * hidden `boolean`: Deprecated, do not use.
  * name `string`: The name of the environment variable.
  * value `string`: The value of the variable.

### ExistingDisk
* ExistingDisk `object`: A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
  * attachment [DiskAttachment](#diskattachment)
  * source `string`: The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.

### HealthCheck
* HealthCheck `object`
  * host `string`: The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.
  * checkIntervalSec `integer`: How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.
  * description `string`: The description for this health check.
  * healthyThreshold `integer`: The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.
  * name `string`: The name of this health check.
  * path `string`: The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.
  * port `integer`: The TCP port for the health check requests.
  * timeoutSec `integer`: How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.
  * unhealthyThreshold `integer`: The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.

### Label
* Label `object`: A label to apply to this replica pool.
  * key `string`: The key for this label.
  * value `string`: The value of this label.

### Metadata
* Metadata `object`: A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
  * fingerPrint `string`: The fingerprint of the metadata. Required for updating the metadata entries for this instance.
  * items `array`: A list of metadata items.
    * items [MetadataItem](#metadataitem)

### MetadataItem
* MetadataItem `object`: A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
  * key `string`: A metadata key.
  * value `string`: A metadata value.

### NetworkInterface
* NetworkInterface `object`: A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
  * accessConfigs `array`: An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.
    * items [AccessConfig](#accessconfig)
  * network `string`: Name the Network resource to which this interface applies.
  * networkIp `string`: An optional IPV4 internal network address to assign to the instance for this network interface.

### NewDisk
* NewDisk `object`: A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
  * attachment [DiskAttachment](#diskattachment)
  * autoDelete `boolean`: If true, then this disk will be deleted when the instance is deleted. The default value is true.
  * boot `boolean`: If true, indicates that this is the root persistent disk.
  * initializeParams [NewDiskInitializeParams](#newdiskinitializeparams)

### NewDiskInitializeParams
* NewDiskInitializeParams `object`: Initialization parameters for creating a new disk.
  * diskSizeGb `string`: The size of the created disk in gigabytes.
  * diskType `string`: Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'
  * sourceImage `string`: The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:

### Pool
* Pool `object`
  * autoRestart `boolean`: Whether replicas in this pool should be restarted if they experience a failure. The default value is true.
  * baseInstanceName `string`: The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
  * currentNumReplicas `integer`: [Output Only] The current number of replicas in the pool.
  * description `string`: An optional description of the replica pool.
  * healthChecks `array`: Deprecated. Please use template[].healthChecks instead.
    * items [HealthCheck](#healthcheck)
  * initialNumReplicas `integer`: The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.
  * labels `array`: A list of labels to attach to this replica pool and all created virtual machines in this replica pool.
    * items [Label](#label)
  * name `string`: The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.
  * numReplicas `integer`: Deprecated! Use initial_num_replicas instead.
  * resourceViews `array`: The list of resource views that should be updated with all the replicas that are managed by this pool.
    * items `string`
  * selfLink `string`: [Output Only] A self-link to the replica pool.
  * targetPool `string`: Deprecated, please use target_pools instead.
  * targetPools `array`: A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.
    * items `string`
  * template [Template](#template)
  * type `string`: Deprecated! Do not set.

### PoolsDeleteRequest
* PoolsDeleteRequest `object`
  * abandonInstances `array`: If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.
    * items `string`

### PoolsListResponse
* PoolsListResponse `object`
  * nextPageToken `string`
  * resources `array`
    * items [Pool](#pool)

### Replica
* Replica `object`: An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
  * name `string`: [Output Only] The name of the Replica object.
  * selfLink `string`: [Output Only] The self-link of the Replica.
  * status [ReplicaStatus](#replicastatus)

### ReplicaStatus
* ReplicaStatus `object`: The current status of a Replica.
  * details `string`: [Output Only] Human-readable details about the current state of the replica
  * state `string`: [Output Only] The state of the Replica.
  * templateVersion `string`: [Output Only] The template used to build the replica.
  * vmLink `string`: [Output Only] Link to the virtual machine that this Replica represents.
  * vmStartTime `string`: [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.

### ReplicasDeleteRequest
* ReplicasDeleteRequest `object`
  * abandonInstance `boolean`: Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.

### ReplicasListResponse
* ReplicasListResponse `object`
  * nextPageToken `string`
  * resources `array`
    * items [Replica](#replica)

### ServiceAccount
* ServiceAccount `object`: A Compute Engine service account, identical to the Compute Engine resource.
  * email `string`: The service account email address, for example: 123845678986@project.gserviceaccount.com
  * scopes `array`: The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control
    * items `string`

### Tag
* Tag `object`: A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
  * fingerPrint `string`: The fingerprint of the tag. Required for updating the list of tags.
  * items `array`: Items contained in this tag.
    * items `string`

### Template
* Template `object`: The template used for creating replicas in the pool.
  * action [Action](#action)
  * healthChecks `array`: A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.
    * items [HealthCheck](#healthcheck)
  * version `string`: A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.
  * vmParams [VmParams](#vmparams)

### VmParams
* VmParams `object`: Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
  * tags [Tag](#tag)
  * baseInstanceName `string`: Deprecated. Please use baseInstanceName instead.
  * canIpForward `boolean`: Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.
  * description `string`: An optional textual description of the instance.
  * disksToAttach `array`: A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
    * items [ExistingDisk](#existingdisk)
  * disksToCreate `array`: A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
    * items [NewDisk](#newdisk)
  * machineType `string`: The machine type for this instance. The resource name (e.g. n1-standard-1).
  * metadata [Metadata](#metadata)
  * networkInterfaces `array`: A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.
    * items [NetworkInterface](#networkinterface)
  * onHostMaintenance `string`
  * serviceAccounts `array`: A list of Service Accounts to enable for this instance.
    * items [ServiceAccount](#serviceaccount)


