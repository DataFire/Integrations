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

amazonaws_mq.ListBrokers({}).then(data => {
  console.log(data);
});
```

## Description

Amazon MQ is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.

## Actions

### ListBrokers



```js
amazonaws_mq.ListBrokers({}, context)
```

#### Input
* input `object`

#### Output
* output [ListBrokersResponse](#listbrokersresponse)

### CreateBroker



```js
amazonaws_mq.CreateBroker({}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade [__boolean](#__boolean)
  * BrokerName [__string](#__string)
  * Configuration [ConfigurationId](#configurationid)
  * CreatorRequestId [__string](#__string)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * HostInstanceType [__string](#__string)
  * MaintenanceWindowStartTime [WeeklyStartTime](#weeklystarttime)
  * PubliclyAccessible [__boolean](#__boolean)
  * SecurityGroups [ListOf__string](#listof__string)
  * SubnetIds [ListOf__string](#listof__string)
  * Users [ListOfUser](#listofuser)

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
  * Configuration [ConfigurationId](#configurationid)

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
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

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
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### ListConfigurations



```js
amazonaws_mq.ListConfigurations({}, context)
```

#### Input
* input `object`

#### Output
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### CreateConfiguration



```js
amazonaws_mq.CreateConfiguration({}, context)
```

#### Input
* input `object`
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * Name [__string](#__string)

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
  * Data [__string](#__string)
  * Description [__string](#__string)

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



## Definitions

### BadRequestException
* BadRequestException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### BrokerInstance
* BrokerInstance `object`: Returns information about all brokers.
  * ConsoleURL [__string](#__string)
  * Endpoints [ListOf__string](#listof__string)

### BrokerState
* BrokerState `string` (values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS): The status of the broker. Possible values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS

### BrokerSummary
* BrokerSummary `object`: The Amazon Resource Name (ARN) of the broker.
  * BrokerArn [__string](#__string)
  * BrokerId [__string](#__string)
  * BrokerName [__string](#__string)
  * BrokerState [BrokerState](#brokerstate)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * HostInstanceType [__string](#__string)

### ChangeType
* ChangeType `string` (values: CREATE, UPDATE, DELETE): The type of change pending for the ActiveMQ user. Possible values: CREATE, UPDATE, DELETE

### Configuration
* Configuration `object`: Returns information about all configurations.
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)

### ConfigurationId
* ConfigurationId `object`: A list of information about the configuration.
  * Id [__string](#__string)
  * Revision [__integer](#__integer)

### ConfigurationRevision
* ConfigurationRevision `object`: Returns information about the specified configuration revision.
  * Description [__string](#__string)
  * Revision [__integer](#__integer)

### Configurations
* Configurations `object`: Broker configuration information
  * Current [ConfigurationId](#configurationid)
  * History [ListOfConfigurationId](#listofconfigurationid)
  * Pending [ConfigurationId](#configurationid)

### ConflictException
* ConflictException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### CreateBrokerInput
* CreateBrokerInput `object`: Required. The time period during which Amazon MQ applies pending updates or patches to the broker.
  * AutoMinorVersionUpgrade [__boolean](#__boolean)
  * BrokerName [__string](#__string)
  * Configuration [ConfigurationId](#configurationid)
  * CreatorRequestId [__string](#__string)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * HostInstanceType [__string](#__string)
  * MaintenanceWindowStartTime [WeeklyStartTime](#weeklystarttime)
  * PubliclyAccessible [__boolean](#__boolean)
  * SecurityGroups [ListOf__string](#listof__string)
  * SubnetIds [ListOf__string](#listof__string)
  * Users [ListOfUser](#listofuser)

### CreateBrokerOutput
* CreateBrokerOutput `object`: Returns information about the created broker.
  * BrokerArn [__string](#__string)
  * BrokerId [__string](#__string)

### CreateBrokerRequest
* CreateBrokerRequest `object`: Creates a broker using the specified properties.
  * AutoMinorVersionUpgrade [__boolean](#__boolean)
  * BrokerName [__string](#__string)
  * Configuration [ConfigurationId](#configurationid)
  * CreatorRequestId [__string](#__string)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * HostInstanceType [__string](#__string)
  * MaintenanceWindowStartTime [WeeklyStartTime](#weeklystarttime)
  * PubliclyAccessible [__boolean](#__boolean)
  * SecurityGroups [ListOf__string](#listof__string)
  * SubnetIds [ListOf__string](#listof__string)
  * Users [ListOfUser](#listofuser)

### CreateBrokerResponse
* CreateBrokerResponse `object`
  * BrokerArn [__string](#__string)
  * BrokerId [__string](#__string)

### CreateConfigurationInput
* CreateConfigurationInput `object`: Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). Note: If the configuration name already exists, Amazon MQ doesn't create a configuration.
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * Name [__string](#__string)

### CreateConfigurationOutput
* CreateConfigurationOutput `object`: Returns information about the created configuration.
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)

### CreateConfigurationRequest
* CreateConfigurationRequest `object`: Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). Note: If the configuration name already exists, Amazon MQ doesn't create a configuration.
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * Name [__string](#__string)

### CreateConfigurationResponse
* CreateConfigurationResponse `object`
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)

### CreateUserInput
* CreateUserInput `object`: Creates a new ActiveMQ user.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

### CreateUserRequest
* CreateUserRequest `object`: Creates a new ActiveMQ user.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

### CreateUserResponse
* CreateUserResponse `object`

### DayOfWeek
* DayOfWeek `string` (values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)

### DeleteBrokerOutput
* DeleteBrokerOutput `object`: Returns information about the deleted broker.
  * BrokerId [__string](#__string)

### DeleteBrokerRequest
* DeleteBrokerRequest `object`

### DeleteBrokerResponse
* DeleteBrokerResponse `object`
  * BrokerId [__string](#__string)

### DeleteUserRequest
* DeleteUserRequest `object`

### DeleteUserResponse
* DeleteUserResponse `object`

### DeploymentMode
* DeploymentMode `string` (values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ): The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.

### DescribeBrokerOutput
* DescribeBrokerOutput `object`: The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
  * AutoMinorVersionUpgrade [__boolean](#__boolean)
  * BrokerArn [__string](#__string)
  * BrokerId [__string](#__string)
  * BrokerInstances [ListOfBrokerInstance](#listofbrokerinstance)
  * BrokerName [__string](#__string)
  * BrokerState [BrokerState](#brokerstate)
  * Configurations [Configurations](#configurations)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * HostInstanceType [__string](#__string)
  * MaintenanceWindowStartTime [WeeklyStartTime](#weeklystarttime)
  * PubliclyAccessible [__boolean](#__boolean)
  * SecurityGroups [ListOf__string](#listof__string)
  * SubnetIds [ListOf__string](#listof__string)
  * Users [ListOfUserSummary](#listofusersummary)

### DescribeBrokerRequest
* DescribeBrokerRequest `object`

### DescribeBrokerResponse
* DescribeBrokerResponse `object`
  * AutoMinorVersionUpgrade [__boolean](#__boolean)
  * BrokerArn [__string](#__string)
  * BrokerId [__string](#__string)
  * BrokerInstances [ListOfBrokerInstance](#listofbrokerinstance)
  * BrokerName [__string](#__string)
  * BrokerState [BrokerState](#brokerstate)
  * Configurations [Configurations](#configurations)
  * DeploymentMode [DeploymentMode](#deploymentmode)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * HostInstanceType [__string](#__string)
  * MaintenanceWindowStartTime [WeeklyStartTime](#weeklystarttime)
  * PubliclyAccessible [__boolean](#__boolean)
  * SecurityGroups [ListOf__string](#listof__string)
  * SubnetIds [ListOf__string](#listof__string)
  * Users [ListOfUserSummary](#listofusersummary)

### DescribeConfigurationRequest
* DescribeConfigurationRequest `object`

### DescribeConfigurationResponse
* DescribeConfigurationResponse `object`
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * EngineType [EngineType](#enginetype)
  * EngineVersion [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)

### DescribeConfigurationRevisionOutput
* DescribeConfigurationRevisionOutput `object`: Returns the specified configuration revision for the specified configuration.
  * ConfigurationId [__string](#__string)
  * Data [__string](#__string)
  * Description [__string](#__string)

### DescribeConfigurationRevisionRequest
* DescribeConfigurationRevisionRequest `object`

### DescribeConfigurationRevisionResponse
* DescribeConfigurationRevisionResponse `object`
  * ConfigurationId [__string](#__string)
  * Data [__string](#__string)
  * Description [__string](#__string)

### DescribeUserOutput
* DescribeUserOutput `object`: Returns information about an ActiveMQ user.
  * BrokerId [__string](#__string)
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Pending [UserPendingChanges](#userpendingchanges)
  * Username [__string](#__string)

### DescribeUserRequest
* DescribeUserRequest `object`

### DescribeUserResponse
* DescribeUserResponse `object`
  * BrokerId [__string](#__string)
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Pending [UserPendingChanges](#userpendingchanges)
  * Username [__string](#__string)

### EngineType
* EngineType `string` (values: ACTIVEMQ): The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ.

### Error
* Error `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### ForbiddenException
* ForbiddenException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### ListBrokersOutput
* ListBrokersOutput `object`: A list of information about all brokers.
  * BrokerSummaries [ListOfBrokerSummary](#listofbrokersummary)
  * NextToken [__string](#__string)

### ListBrokersRequest
* ListBrokersRequest `object`

### ListBrokersResponse
* ListBrokersResponse `object`
  * BrokerSummaries [ListOfBrokerSummary](#listofbrokersummary)
  * NextToken [__string](#__string)

### ListConfigurationRevisionsOutput
* ListConfigurationRevisionsOutput `object`: Returns a list of all revisions for the specified configuration.
  * ConfigurationId [__string](#__string)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)
  * Revisions [ListOfConfigurationRevision](#listofconfigurationrevision)

### ListConfigurationRevisionsRequest
* ListConfigurationRevisionsRequest `object`

### ListConfigurationRevisionsResponse
* ListConfigurationRevisionsResponse `object`
  * ConfigurationId [__string](#__string)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)
  * Revisions [ListOfConfigurationRevision](#listofconfigurationrevision)

### ListConfigurationsOutput
* ListConfigurationsOutput `object`: Returns a list of all configurations.
  * Configurations [ListOfConfiguration](#listofconfiguration)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)

### ListConfigurationsRequest
* ListConfigurationsRequest `object`

### ListConfigurationsResponse
* ListConfigurationsResponse `object`
  * Configurations [ListOfConfiguration](#listofconfiguration)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)

### ListOfBrokerInstance
* ListOfBrokerInstance `array`
  * items [BrokerInstance](#brokerinstance)

### ListOfBrokerSummary
* ListOfBrokerSummary `array`
  * items [BrokerSummary](#brokersummary)

### ListOfConfiguration
* ListOfConfiguration `array`
  * items [Configuration](#configuration)

### ListOfConfigurationId
* ListOfConfigurationId `array`
  * items [ConfigurationId](#configurationid)

### ListOfConfigurationRevision
* ListOfConfigurationRevision `array`
  * items [ConfigurationRevision](#configurationrevision)

### ListOfSanitizationWarning
* ListOfSanitizationWarning `array`
  * items [SanitizationWarning](#sanitizationwarning)

### ListOfUser
* ListOfUser `array`
  * items [User](#user)

### ListOfUserSummary
* ListOfUserSummary `array`
  * items [UserSummary](#usersummary)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### ListUsersOutput
* ListUsersOutput `object`: Returns a list of all ActiveMQ users.
  * BrokerId [__string](#__string)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)
  * Users [ListOfUserSummary](#listofusersummary)

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * BrokerId [__string](#__string)
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)
  * Users [ListOfUserSummary](#listofusersummary)

### MaxResults
* MaxResults `integer`

### NotFoundException
* NotFoundException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### RebootBrokerRequest
* RebootBrokerRequest `object`

### RebootBrokerResponse
* RebootBrokerResponse `object`

### SanitizationWarning
* SanitizationWarning `object`: Returns information about the XML element or attribute that was sanitized in the configuration.
  * AttributeName [__string](#__string)
  * ElementName [__string](#__string)
  * Reason [SanitizationWarningReason](#sanitizationwarningreason)

### SanitizationWarningReason
* SanitizationWarningReason `string` (values: DISALLOWED_ELEMENT_REMOVED, DISALLOWED_ATTRIBUTE_REMOVED, INVALID_ATTRIBUTE_VALUE_REMOVED): The reason for which the XML elements or attributes were sanitized. Possible values: DISALLOWED_ELEMENT_REMOVED, DISALLOWED_ATTRIBUTE_REMOVED, INVALID_ATTRIBUTE_VALUE_REMOVED DISALLOWED_ELEMENT_REMOVED shows that the provided element isn't allowed and has been removed. DISALLOWED_ATTRIBUTE_REMOVED shows that the provided attribute isn't allowed and has been removed. INVALID_ATTRIBUTE_VALUE_REMOVED shows that the provided value for the attribute isn't allowed and has been removed.

### UnauthorizedException
* UnauthorizedException `object`: Returns information about an error.
  * ErrorAttribute [__string](#__string)
  * Message [__string](#__string)

### UpdateBrokerInput
* UpdateBrokerInput `object`: Updates the broker using the specified properties.
  * Configuration [ConfigurationId](#configurationid)

### UpdateBrokerOutput
* UpdateBrokerOutput `object`: Returns information about the updated broker.
  * BrokerId [__string](#__string)
  * Configuration [ConfigurationId](#configurationid)

### UpdateBrokerRequest
* UpdateBrokerRequest `object`: Updates the broker using the specified properties.
  * Configuration [ConfigurationId](#configurationid)

### UpdateBrokerResponse
* UpdateBrokerResponse `object`
  * BrokerId [__string](#__string)
  * Configuration [ConfigurationId](#configurationid)

### UpdateConfigurationInput
* UpdateConfigurationInput `object`: Updates the specified configuration.
  * Data [__string](#__string)
  * Description [__string](#__string)

### UpdateConfigurationOutput
* UpdateConfigurationOutput `object`: Returns information about the updated configuration.
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)
  * Warnings [ListOfSanitizationWarning](#listofsanitizationwarning)

### UpdateConfigurationRequest
* UpdateConfigurationRequest `object`: Updates the specified configuration.
  * Data [__string](#__string)
  * Description [__string](#__string)

### UpdateConfigurationResponse
* UpdateConfigurationResponse `object`
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * LatestRevision [ConfigurationRevision](#configurationrevision)
  * Name [__string](#__string)
  * Warnings [ListOfSanitizationWarning](#listofsanitizationwarning)

### UpdateUserInput
* UpdateUserInput `object`: Updates the information for an ActiveMQ user.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

### UpdateUserRequest
* UpdateUserRequest `object`: Updates the information for an ActiveMQ user.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)

### UpdateUserResponse
* UpdateUserResponse `object`

### User
* User `object`: An ActiveMQ user associated with the broker.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * Password [__string](#__string)
  * Username [__string](#__string)

### UserPendingChanges
* UserPendingChanges `object`: Returns information about the status of the changes pending for the ActiveMQ user.
  * ConsoleAccess [__boolean](#__boolean)
  * Groups [ListOf__string](#listof__string)
  * PendingChange [ChangeType](#changetype)

### UserSummary
* UserSummary `object`: Returns a list of all ActiveMQ users.
  * PendingChange [ChangeType](#changetype)
  * Username [__string](#__string)

### WeeklyStartTime
* WeeklyStartTime `object`: The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
  * DayOfWeek [DayOfWeek](#dayofweek)
  * TimeOfDay [__string](#__string)
  * TimeZone [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __string
* __string `string`

### __timestamp
* __timestamp `string`


