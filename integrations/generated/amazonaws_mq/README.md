# @datafire/amazonaws_mq

Client library for AmazonMQ

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mq
```
```js
let amazonaws_mq = require('@datafire/amazonaws_mq').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.

## Actions

### DescribeBrokerEngineTypes



```js
amazonaws_mq.DescribeBrokerEngineTypes({}, context)
```

#### Input
* input `object`
  * engineType `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [DescribeBrokerEngineTypesResponse](#describebrokerenginetypesresponse)

### DescribeBrokerInstanceOptions



```js
amazonaws_mq.DescribeBrokerInstanceOptions({}, context)
```

#### Input
* input `object`
  * engineType `string`
  * hostInstanceType `string`
  * maxResults `integer`
  * nextToken `string`
  * storageType `string`

#### Output
* output [DescribeBrokerInstanceOptionsResponse](#describebrokerinstanceoptionsresponse)

### ListBrokers



```js
amazonaws_mq.ListBrokers({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBrokersResponse](#listbrokersresponse)

### CreateBroker



```js
amazonaws_mq.CreateBroker({}, context)
```

#### Input
* input `object`
  * tags `object`: Create tags when creating the broker.
  * authenticationStrategy `string` (values: SIMPLE, LDAP): The authentication strategy used to secure the broker.
  * autoMinorVersionUpgrade `boolean`: Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
  * brokerName `string`: Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
  * configuration `object`: A list of information about the configuration. <important>Does not apply to RabbitMQ brokers.</important>
    * Id
    * Revision
  * creatorRequestId `string`: The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
  * deploymentMode `string` (values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ, CLUSTER_MULTI_AZ): The deployment mode of the broker.
  * encryptionOptions `object`: Encryption options for the broker.
    * KmsKeyId
    * UseAwsOwnedKey
  * engineType `string` (values: ACTIVEMQ, RABBITMQ): The type of broker engine. Note: Currently, Amazon MQ supports ActiveMQ and RabbitMQ.
  * engineVersion `string`: Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
  * hostInstanceType `string`: Required. The broker's instance type.
  * ldapServerMetadata `object`: The metadata of the LDAP server used to authenticate and authorize connections to the broker.
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountPassword
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * logs `object`: The list of information about logs to be enabled for the specified broker.
    * Audit
    * General
  * maintenanceWindowStartTime `object`: The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
    * DayOfWeek
    * TimeOfDay
    * TimeZone
  * publiclyAccessible `boolean`: Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
  * securityGroups `array`: The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
    * items [__string](#__string)
  * storageType `string` (values: EBS, EFS): The broker's storage type. <important>EFS is currently not Supported for RabbitMQ engine type.</important>
  * subnetIds `array`: The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment (ACTIVEMQ) requires two subnets. A CLUSTER_MULTI_AZ deployment (RABBITMQ) has no subnet requirements when deployed with public accessibility, deployment without public accessibility requires at least one subnet.
    * items [__string](#__string)
  * users `array`: Required. The list of broker users (persons or applications) who can access queues and topics. For RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ Web Console. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
    * items [User](#user)

#### Output
* output [CreateBrokerResponse](#createbrokerresponse)

### DeleteBroker



```js
amazonaws_mq.DeleteBroker({
  "broker-id": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`

#### Output
* output [DeleteBrokerResponse](#deletebrokerresponse)

### DescribeBroker



```js
amazonaws_mq.DescribeBroker({
  "broker-id": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`

#### Output
* output [DescribeBrokerResponse](#describebrokerresponse)

### UpdateBroker



```js
amazonaws_mq.UpdateBroker({
  "broker-id": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * authenticationStrategy `string` (values: SIMPLE, LDAP): The authentication strategy used to secure the broker.
  * autoMinorVersionUpgrade `boolean`: Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
  * configuration `object`: A list of information about the configuration. <important>Does not apply to RabbitMQ brokers.</important>
    * Id
    * Revision
  * engineVersion `string`: The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
  * hostInstanceType `string`: The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
  * ldapServerMetadata `object`: The metadata of the LDAP server used to authenticate and authorize connections to the broker.
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountPassword
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * logs `object`: The list of information about logs to be enabled for the specified broker.
    * Audit
    * General
  * securityGroups `array`: The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
    * items [__string](#__string)

#### Output
* output [UpdateBrokerResponse](#updatebrokerresponse)

### RebootBroker



```js
amazonaws_mq.RebootBroker({
  "broker-id": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`

#### Output
* output [RebootBrokerResponse](#rebootbrokerresponse)

### ListUsers



```js
amazonaws_mq.ListUsers({
  "broker-id": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListUsersResponse](#listusersresponse)

### DeleteUser



```js
amazonaws_mq.DeleteUser({
  "broker-id": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * username **required** `string`

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DescribeUser



```js
amazonaws_mq.DescribeUser({
  "broker-id": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * username **required** `string`

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### CreateUser



```js
amazonaws_mq.CreateUser({
  "broker-id": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * username **required** `string`
  * consoleAccess `boolean`: Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
  * groups `array`: The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
    * items [__string](#__string)
  * password `string`: Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.

#### Output
* output [CreateUserResponse](#createuserresponse)

### UpdateUser



```js
amazonaws_mq.UpdateUser({
  "broker-id": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * broker-id **required** `string`
  * username **required** `string`
  * consoleAccess `boolean`: Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
  * groups `array`: The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
    * items [__string](#__string)
  * password `string`: The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### ListConfigurations



```js
amazonaws_mq.ListConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### CreateConfiguration



```js
amazonaws_mq.CreateConfiguration({}, context)
```

#### Input
* input `object`
  * tags `object`: Create tags when creating the configuration.
  * authenticationStrategy `string` (values: SIMPLE, LDAP): The authentication strategy used to secure the broker.
  * engineType `string` (values: ACTIVEMQ, RABBITMQ): The type of broker engine. Note: Currently, Amazon MQ supports ActiveMQ and RabbitMQ.
  * engineVersion `string`: Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
  * name `string`: Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.

#### Output
* output [CreateConfigurationResponse](#createconfigurationresponse)

### DescribeConfiguration



```js
amazonaws_mq.DescribeConfiguration({
  "configuration-id": ""
}, context)
```

#### Input
* input `object`
  * configuration-id **required** `string`

#### Output
* output [DescribeConfigurationResponse](#describeconfigurationresponse)

### UpdateConfiguration



```js
amazonaws_mq.UpdateConfiguration({
  "configuration-id": ""
}, context)
```

#### Input
* input `object`
  * configuration-id **required** `string`
  * data `string`: Required. The base64-encoded XML configuration.
  * description `string`: The description of the configuration.

#### Output
* output [UpdateConfigurationResponse](#updateconfigurationresponse)

### ListConfigurationRevisions



```js
amazonaws_mq.ListConfigurationRevisions({
  "configuration-id": ""
}, context)
```

#### Input
* input `object`
  * configuration-id **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListConfigurationRevisionsResponse](#listconfigurationrevisionsresponse)

### DescribeConfigurationRevision



```js
amazonaws_mq.DescribeConfigurationRevision({
  "configuration-id": "",
  "configuration-revision": ""
}, context)
```

#### Input
* input `object`
  * configuration-id **required** `string`
  * configuration-revision **required** `string`

#### Output
* output [DescribeConfigurationRevisionResponse](#describeconfigurationrevisionresponse)

### ListTags



```js
amazonaws_mq.ListTags({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsResponse](#listtagsresponse)

### CreateTags



```js
amazonaws_mq.CreateTags({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags `object`: The key-value pair for the resource tag.

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_mq.DeleteTags({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AuthenticationStrategy
* AuthenticationStrategy `string` (values: SIMPLE, LDAP): The authentication strategy used to secure the broker.

### AvailabilityZone
* AvailabilityZone `object`: Name of the availability zone.
  * Name

### BadRequestException


### BrokerEngineType
* BrokerEngineType `object`: Types of broker engines.
  * EngineType
  * EngineVersions
    * items [EngineVersion](#engineversion)

### BrokerInstance
* BrokerInstance `object`: Returns information about all brokers.
  * ConsoleURL
  * Endpoints
    * items [__string](#__string)
  * IpAddress

### BrokerInstanceOption
* BrokerInstanceOption `object`: Option for host instance type.
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * EngineType
  * HostInstanceType
  * StorageType
  * SupportedDeploymentModes
    * items [DeploymentMode](#deploymentmode)
  * SupportedEngineVersions
    * items [__string](#__string)

### BrokerState
* BrokerState `string` (values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS): The status of the broker.

### BrokerStorageType
* BrokerStorageType `string` (values: EBS, EFS): The broker's storage type. <important>EFS is currently not Supported for RabbitMQ engine type.</important>

### BrokerSummary
* BrokerSummary `object`: The Amazon Resource Name (ARN) of the broker.
  * BrokerArn
  * BrokerId
  * BrokerName
  * BrokerState
  * Created
  * DeploymentMode
  * EngineType
  * HostInstanceType

### ChangeType
* ChangeType `string` (values: CREATE, UPDATE, DELETE): The type of change pending for the ActiveMQ user.

### Configuration
* Configuration `object`: Returns information about all configurations.
  * Arn
  * AuthenticationStrategy
  * Created
  * Description
  * EngineType
  * EngineVersion
  * Id
  * LatestRevision
    * Created
    * Description
    * Revision
  * Name
  * Tags

### ConfigurationId
* ConfigurationId `object`: A list of information about the configuration. <important>Does not apply to RabbitMQ brokers.</important>
  * Id
  * Revision

### ConfigurationRevision
* ConfigurationRevision `object`: Returns information about the specified configuration revision.
  * Created
  * Description
  * Revision

### Configurations
* Configurations `object`: Broker configuration information
  * Current
    * Id
    * Revision
  * History
    * items [ConfigurationId](#configurationid)
  * Pending
    * Id
    * Revision

### ConflictException


### CreateBrokerRequest
* CreateBrokerRequest `object`: Creates a broker using the specified properties.
  * AuthenticationStrategy
  * AutoMinorVersionUpgrade
  * BrokerName
  * Configuration
    * Id
    * Revision
  * CreatorRequestId
  * DeploymentMode
  * EncryptionOptions
    * KmsKeyId
    * UseAwsOwnedKey **required**
  * EngineType
  * EngineVersion
  * HostInstanceType
  * LdapServerMetadata
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountPassword
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * Logs
    * Audit
    * General
  * MaintenanceWindowStartTime
    * DayOfWeek
    * TimeOfDay
    * TimeZone
  * PubliclyAccessible
  * SecurityGroups
    * items [__string](#__string)
  * StorageType
  * SubnetIds
    * items [__string](#__string)
  * Tags
  * Users
    * items [User](#user)

### CreateBrokerResponse
* CreateBrokerResponse `object`
  * BrokerArn
  * BrokerId

### CreateConfigurationRequest
* CreateConfigurationRequest `object`: Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
  * AuthenticationStrategy
  * EngineType
  * EngineVersion
  * Name
  * Tags

### CreateConfigurationResponse
* CreateConfigurationResponse `object`
  * Arn
  * AuthenticationStrategy
  * Created
  * Id
  * LatestRevision
    * Created
    * Description
    * Revision
  * Name

### CreateTagsRequest
* CreateTagsRequest `object`: A map of the key-value pairs for the resource tag.
  * Tags

### CreateUserRequest
* CreateUserRequest `object`: Creates a new ActiveMQ user.
  * ConsoleAccess
  * Groups
    * items [__string](#__string)
  * Password

### CreateUserResponse
* CreateUserResponse `object`

### DayOfWeek
* DayOfWeek `string` (values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)

### DeleteBrokerRequest
* DeleteBrokerRequest `object`

### DeleteBrokerResponse
* DeleteBrokerResponse `object`
  * BrokerId

### DeleteTagsRequest
* DeleteTagsRequest `object`

### DeleteUserRequest
* DeleteUserRequest `object`

### DeleteUserResponse
* DeleteUserResponse `object`

### DeploymentMode
* DeploymentMode `string` (values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ, CLUSTER_MULTI_AZ): The deployment mode of the broker.

### DescribeBrokerEngineTypesRequest
* DescribeBrokerEngineTypesRequest `object`

### DescribeBrokerEngineTypesResponse
* DescribeBrokerEngineTypesResponse `object`
  * BrokerEngineTypes
    * items [BrokerEngineType](#brokerenginetype)
  * MaxResults
  * NextToken

### DescribeBrokerInstanceOptionsRequest
* DescribeBrokerInstanceOptionsRequest `object`

### DescribeBrokerInstanceOptionsResponse
* DescribeBrokerInstanceOptionsResponse `object`
  * BrokerInstanceOptions
    * items [BrokerInstanceOption](#brokerinstanceoption)
  * MaxResults
  * NextToken

### DescribeBrokerRequest
* DescribeBrokerRequest `object`

### DescribeBrokerResponse
* DescribeBrokerResponse `object`
  * AuthenticationStrategy
  * AutoMinorVersionUpgrade
  * BrokerArn
  * BrokerId
  * BrokerInstances
    * items [BrokerInstance](#brokerinstance)
  * BrokerName
  * BrokerState
  * Configurations
    * Current
      * Id
      * Revision
    * History
      * items [ConfigurationId](#configurationid)
    * Pending
      * Id
      * Revision
  * Created
  * DeploymentMode
  * EncryptionOptions
    * KmsKeyId
    * UseAwsOwnedKey **required**
  * EngineType
  * EngineVersion
  * HostInstanceType
  * LdapServerMetadata
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * Logs
    * Audit
    * AuditLogGroup
    * General
    * GeneralLogGroup
    * Pending
      * Audit
      * General
  * MaintenanceWindowStartTime
    * DayOfWeek
    * TimeOfDay
    * TimeZone
  * PendingAuthenticationStrategy
  * PendingEngineVersion
  * PendingHostInstanceType
  * PendingLdapServerMetadata
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * PendingSecurityGroups
    * items [__string](#__string)
  * PubliclyAccessible
  * SecurityGroups
    * items [__string](#__string)
  * StorageType
  * SubnetIds
    * items [__string](#__string)
  * Tags
  * Users
    * items [UserSummary](#usersummary)

### DescribeConfigurationRequest
* DescribeConfigurationRequest `object`

### DescribeConfigurationResponse
* DescribeConfigurationResponse `object`
  * Arn
  * AuthenticationStrategy
  * Created
  * Description
  * EngineType
  * EngineVersion
  * Id
  * LatestRevision
    * Created
    * Description
    * Revision
  * Name
  * Tags

### DescribeConfigurationRevisionRequest
* DescribeConfigurationRevisionRequest `object`

### DescribeConfigurationRevisionResponse
* DescribeConfigurationRevisionResponse `object`
  * ConfigurationId
  * Created
  * Data
  * Description

### DescribeUserRequest
* DescribeUserRequest `object`

### DescribeUserResponse
* DescribeUserResponse `object`
  * BrokerId
  * ConsoleAccess
  * Groups
    * items [__string](#__string)
  * Pending
    * ConsoleAccess
    * Groups
      * items [__string](#__string)
    * PendingChange
  * Username

### EncryptionOptions
* EncryptionOptions `object`: Encryption options for the broker.
  * KmsKeyId
  * UseAwsOwnedKey **required**

### EngineType
* EngineType `string` (values: ACTIVEMQ, RABBITMQ): The type of broker engine. Note: Currently, Amazon MQ supports ActiveMQ and RabbitMQ.

### EngineVersion
* EngineVersion `object`: Id of the engine version.
  * Name

### ForbiddenException


### InternalServerErrorException


### LdapServerMetadataInput
* LdapServerMetadataInput `object`: The metadata of the LDAP server used to authenticate and authorize connections to the broker.
  * Hosts
    * items [__string](#__string)
  * RoleBase
  * RoleName
  * RoleSearchMatching
  * RoleSearchSubtree
  * ServiceAccountPassword
  * ServiceAccountUsername
  * UserBase
  * UserRoleName
  * UserSearchMatching
  * UserSearchSubtree

### LdapServerMetadataOutput
* LdapServerMetadataOutput `object`: The metadata of the LDAP server used to authenticate and authorize connections to the broker.
  * Hosts
    * items [__string](#__string)
  * RoleBase
  * RoleName
  * RoleSearchMatching
  * RoleSearchSubtree
  * ServiceAccountUsername
  * UserBase
  * UserRoleName
  * UserSearchMatching
  * UserSearchSubtree

### ListBrokersRequest
* ListBrokersRequest `object`

### ListBrokersResponse
* ListBrokersResponse `object`
  * BrokerSummaries
    * items [BrokerSummary](#brokersummary)
  * NextToken

### ListConfigurationRevisionsRequest
* ListConfigurationRevisionsRequest `object`

### ListConfigurationRevisionsResponse
* ListConfigurationRevisionsResponse `object`
  * ConfigurationId
  * MaxResults
  * NextToken
  * Revisions
    * items [ConfigurationRevision](#configurationrevision)

### ListConfigurationsRequest
* ListConfigurationsRequest `object`

### ListConfigurationsResponse
* ListConfigurationsResponse `object`
  * Configurations
    * items [Configuration](#configuration)
  * MaxResults
  * NextToken

### ListTagsRequest
* ListTagsRequest `object`

### ListTagsResponse
* ListTagsResponse `object`
  * Tags

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * BrokerId
  * MaxResults
  * NextToken
  * Users
    * items [UserSummary](#usersummary)

### Logs
* Logs `object`: The list of information about logs to be enabled for the specified broker.
  * Audit
  * General

### LogsSummary
* LogsSummary `object`: The list of information about logs currently enabled and pending to be deployed for the specified broker.
  * Audit
  * AuditLogGroup
  * General
  * GeneralLogGroup
  * Pending
    * Audit
    * General

### MaxResults
* MaxResults `integer`

### NotFoundException


### PendingLogs
* PendingLogs `object`: The list of information about logs to be enabled for the specified broker.
  * Audit
  * General

### RebootBrokerRequest
* RebootBrokerRequest `object`

### RebootBrokerResponse
* RebootBrokerResponse `object`

### SanitizationWarning
* SanitizationWarning `object`: Returns information about the XML element or attribute that was sanitized in the configuration.
  * AttributeName
  * ElementName
  * Reason

### SanitizationWarningReason
* SanitizationWarningReason `string` (values: DISALLOWED_ELEMENT_REMOVED, DISALLOWED_ATTRIBUTE_REMOVED, INVALID_ATTRIBUTE_VALUE_REMOVED): The reason for which the XML elements or attributes were sanitized.

### UnauthorizedException


### UpdateBrokerRequest
* UpdateBrokerRequest `object`: Updates the broker using the specified properties.
  * AuthenticationStrategy
  * AutoMinorVersionUpgrade
  * Configuration
    * Id
    * Revision
  * EngineVersion
  * HostInstanceType
  * LdapServerMetadata
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountPassword
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * Logs
    * Audit
    * General
  * SecurityGroups
    * items [__string](#__string)

### UpdateBrokerResponse
* UpdateBrokerResponse `object`
  * AuthenticationStrategy
  * AutoMinorVersionUpgrade
  * BrokerId
  * Configuration
    * Id
    * Revision
  * EngineVersion
  * HostInstanceType
  * LdapServerMetadata
    * Hosts
      * items [__string](#__string)
    * RoleBase
    * RoleName
    * RoleSearchMatching
    * RoleSearchSubtree
    * ServiceAccountUsername
    * UserBase
    * UserRoleName
    * UserSearchMatching
    * UserSearchSubtree
  * Logs
    * Audit
    * General
  * SecurityGroups
    * items [__string](#__string)

### UpdateConfigurationRequest
* UpdateConfigurationRequest `object`: Updates the specified configuration.
  * Data
  * Description

### UpdateConfigurationResponse
* UpdateConfigurationResponse `object`
  * Arn
  * Created
  * Id
  * LatestRevision
    * Created
    * Description
    * Revision
  * Name
  * Warnings
    * items [SanitizationWarning](#sanitizationwarning)

### UpdateUserRequest
* UpdateUserRequest `object`: Updates the information for an ActiveMQ user.
  * ConsoleAccess
  * Groups
    * items [__string](#__string)
  * Password

### UpdateUserResponse
* UpdateUserResponse `object`

### User
* User `object`: A user associated with the broker.
  * ConsoleAccess
  * Groups
    * items [__string](#__string)
  * Password
  * Username

### UserPendingChanges
* UserPendingChanges `object`: Returns information about the status of the changes pending for the ActiveMQ user.
  * ConsoleAccess
  * Groups
    * items [__string](#__string)
  * PendingChange

### UserSummary
* UserSummary `object`: Returns a list of all broker users.
  * PendingChange
  * Username

### WeeklyStartTime
* WeeklyStartTime `object`: The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
  * DayOfWeek
  * TimeOfDay
  * TimeZone

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __integerMin5Max100
* __integerMin5Max100 `integer`

### __listOfAvailabilityZone
* __listOfAvailabilityZone `array`
  * items [AvailabilityZone](#availabilityzone)

### __listOfBrokerEngineType
* __listOfBrokerEngineType `array`
  * items [BrokerEngineType](#brokerenginetype)

### __listOfBrokerInstance
* __listOfBrokerInstance `array`
  * items [BrokerInstance](#brokerinstance)

### __listOfBrokerInstanceOption
* __listOfBrokerInstanceOption `array`
  * items [BrokerInstanceOption](#brokerinstanceoption)

### __listOfBrokerSummary
* __listOfBrokerSummary `array`
  * items [BrokerSummary](#brokersummary)

### __listOfConfiguration
* __listOfConfiguration `array`
  * items [Configuration](#configuration)

### __listOfConfigurationId
* __listOfConfigurationId `array`
  * items [ConfigurationId](#configurationid)

### __listOfConfigurationRevision
* __listOfConfigurationRevision `array`
  * items [ConfigurationRevision](#configurationrevision)

### __listOfDeploymentMode
* __listOfDeploymentMode `array`
  * items [DeploymentMode](#deploymentmode)

### __listOfEngineVersion
* __listOfEngineVersion `array`
  * items [EngineVersion](#engineversion)

### __listOfSanitizationWarning
* __listOfSanitizationWarning `array`
  * items [SanitizationWarning](#sanitizationwarning)

### __listOfUser
* __listOfUser `array`
  * items [User](#user)

### __listOfUserSummary
* __listOfUserSummary `array`
  * items [UserSummary](#usersummary)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`

### __timestampIso8601
* __timestampIso8601 `string`


