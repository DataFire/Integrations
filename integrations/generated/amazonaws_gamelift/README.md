# @datafire/amazonaws_gamelift

Client library for Amazon GameLift

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_gamelift
```
```js
let amazonaws_gamelift = require('@datafire/amazonaws_gamelift').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon GameLift Service</fullname> <p>GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on AWS global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand. </p> <p> <b>About GameLift solutions</b> </p> <p>Get more information on these GameLift solutions in the <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p> <ul> <li> <p>Managed GameLift -- GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance hosting costs against meeting player demand., configure your game session management to minimize player latency, or add FlexMatch for matchmaking.</p> </li> <li> <p>Managed GameLift with Realtime Servers – With GameLift Realtime Servers, you can quickly configure and set up game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in.</p> </li> <li> <p>GameLift FleetIQ – Use GameLift FleetIQ as a standalone feature while managing your own EC2 instances and Auto Scaling groups for game hosting. GameLift FleetIQ provides optimizations that make low-cost Spot Instances viable for game hosting. </p> </li> </ul> <p> <b>About this API Reference</b> </p> <p>This reference guide describes the low-level service API for Amazon GameLift. You can find links to language-specific SDK guides and the AWS CLI reference with each operation and data type topic. Useful links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">GameLift API operations listed by tasks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> GameLift tools and resources</a> </p> </li> </ul>

## Actions

### AcceptMatch



```js
amazonaws_gamelift.AcceptMatch({
  "TicketId": null,
  "PlayerIds": null,
  "AcceptanceType": null
}, context)
```

#### Input
* input `object`
  * AcceptanceType **required**
  * PlayerIds **required**
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)
  * TicketId **required**

#### Output
* output [AcceptMatchOutput](#acceptmatchoutput)

### ClaimGameServer



```js
amazonaws_gamelift.ClaimGameServer({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId

#### Output
* output [ClaimGameServerOutput](#claimgameserveroutput)

### CreateAlias



```js
amazonaws_gamelift.CreateAlias({
  "Name": null,
  "RoutingStrategy": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * RoutingStrategy **required**
    * FleetId
    * Message
    * Type
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateAliasOutput](#createaliasoutput)

### CreateBuild



```js
amazonaws_gamelift.CreateBuild({}, context)
```

#### Input
* input `object`
  * Name
  * OperatingSystem
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Tags
    * items [Tag](#tag)
  * Version

#### Output
* output [CreateBuildOutput](#createbuildoutput)

### CreateFleet



```js
amazonaws_gamelift.CreateFleet({
  "Name": null,
  "EC2InstanceType": null
}, context)
```

#### Input
* input `object`
  * BuildId
  * CertificateConfiguration
    * CertificateType **required**
  * Description
  * EC2InboundPermissions
    * items [IpPermission](#ippermission)
  * EC2InstanceType **required**
  * FleetType
  * InstanceRoleArn
  * LogPaths
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)
  * MetricGroups
    * items [MetricGroup](#metricgroup)
  * Name **required**
  * NewGameSessionProtectionPolicy
  * PeerVpcAwsAccountId
  * PeerVpcId
  * ResourceCreationLimitPolicy
    * NewGameSessionsPerCreator
    * PolicyPeriodInMinutes
  * RuntimeConfiguration
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)
  * ScriptId
  * ServerLaunchParameters
  * ServerLaunchPath
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateFleetOutput](#createfleetoutput)

### CreateGameServerGroup



```js
amazonaws_gamelift.CreateGameServerGroup({
  "GameServerGroupName": null,
  "RoleArn": null,
  "MinSize": null,
  "MaxSize": null,
  "LaunchTemplate": null,
  "InstanceDefinitions": null
}, context)
```

#### Input
* input `object`
  * AutoScalingPolicy
    * EstimatedInstanceWarmup
    * TargetTrackingConfiguration **required**
      * TargetValue **required**
  * BalancingStrategy
  * GameServerGroupName **required**
  * GameServerProtectionPolicy
  * InstanceDefinitions **required**
    * items [InstanceDefinition](#instancedefinition)
  * LaunchTemplate **required**
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * MaxSize **required**
  * MinSize **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)
  * VpcSubnets
    * items [VpcSubnet](#vpcsubnet)

#### Output
* output [CreateGameServerGroupOutput](#creategameservergroupoutput)

### CreateGameSession



```js
amazonaws_gamelift.CreateGameSession({
  "MaximumPlayerSessionCount": null
}, context)
```

#### Input
* input `object`
  * AliasId
  * CreatorId
  * FleetId
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionId
  * IdempotencyToken
  * MaximumPlayerSessionCount **required**
  * Name

#### Output
* output [CreateGameSessionOutput](#creategamesessionoutput)

### CreateGameSessionQueue



```js
amazonaws_gamelift.CreateGameSessionQueue({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Destinations
    * items [GameSessionQueueDestination](#gamesessionqueuedestination)
  * Name **required**
  * PlayerLatencyPolicies
    * items [PlayerLatencyPolicy](#playerlatencypolicy)
  * Tags
    * items [Tag](#tag)
  * TimeoutInSeconds

#### Output
* output [CreateGameSessionQueueOutput](#creategamesessionqueueoutput)

### CreateMatchmakingConfiguration



```js
amazonaws_gamelift.CreateMatchmakingConfiguration({
  "Name": null,
  "RequestTimeoutSeconds": null,
  "AcceptanceRequired": null,
  "RuleSetName": null
}, context)
```

#### Input
* input `object`
  * AcceptanceRequired **required**
  * AcceptanceTimeoutSeconds
  * AdditionalPlayerCount
  * BackfillMode
  * CustomEventData
  * Description
  * FlexMatchMode
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionQueueArns
    * items [ArnStringModel](#arnstringmodel)
  * Name **required**
  * NotificationTarget
  * RequestTimeoutSeconds **required**
  * RuleSetName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateMatchmakingConfigurationOutput](#creatematchmakingconfigurationoutput)

### CreateMatchmakingRuleSet



```js
amazonaws_gamelift.CreateMatchmakingRuleSet({
  "Name": null,
  "RuleSetBody": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * RuleSetBody **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateMatchmakingRuleSetOutput](#creatematchmakingrulesetoutput)

### CreatePlayerSession



```js
amazonaws_gamelift.CreatePlayerSession({
  "GameSessionId": null,
  "PlayerId": null
}, context)
```

#### Input
* input `object`
  * GameSessionId **required**
  * PlayerData
  * PlayerId **required**

#### Output
* output [CreatePlayerSessionOutput](#createplayersessionoutput)

### CreatePlayerSessions



```js
amazonaws_gamelift.CreatePlayerSessions({
  "GameSessionId": null,
  "PlayerIds": null
}, context)
```

#### Input
* input `object`
  * GameSessionId **required**
  * PlayerDataMap
  * PlayerIds **required**
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreatePlayerSessionsOutput](#createplayersessionsoutput)

### CreateScript



```js
amazonaws_gamelift.CreateScript({}, context)
```

#### Input
* input `object`
  * Name
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Tags
    * items [Tag](#tag)
  * Version
  * ZipFile

#### Output
* output [CreateScriptOutput](#createscriptoutput)

### CreateVpcPeeringAuthorization



```js
amazonaws_gamelift.CreateVpcPeeringAuthorization({
  "GameLiftAwsAccountId": null,
  "PeerVpcId": null
}, context)
```

#### Input
* input `object`
  * GameLiftAwsAccountId **required**
  * PeerVpcId **required**

#### Output
* output [CreateVpcPeeringAuthorizationOutput](#createvpcpeeringauthorizationoutput)

### CreateVpcPeeringConnection



```js
amazonaws_gamelift.CreateVpcPeeringConnection({
  "FleetId": null,
  "PeerVpcAwsAccountId": null,
  "PeerVpcId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * PeerVpcAwsAccountId **required**
  * PeerVpcId **required**

#### Output
* output [CreateVpcPeeringConnectionOutput](#createvpcpeeringconnectionoutput)

### DeleteAlias



```js
amazonaws_gamelift.DeleteAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**

#### Output
*Output schema unknown*

### DeleteBuild



```js
amazonaws_gamelift.DeleteBuild({
  "BuildId": null
}, context)
```

#### Input
* input `object`
  * BuildId **required**

#### Output
*Output schema unknown*

### DeleteFleet



```js
amazonaws_gamelift.DeleteFleet({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**

#### Output
*Output schema unknown*

### DeleteGameServerGroup



```js
amazonaws_gamelift.DeleteGameServerGroup({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * DeleteOption
  * GameServerGroupName **required**

#### Output
* output [DeleteGameServerGroupOutput](#deletegameservergroupoutput)

### DeleteGameSessionQueue



```js
amazonaws_gamelift.DeleteGameSessionQueue({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteGameSessionQueueOutput](#deletegamesessionqueueoutput)

### DeleteMatchmakingConfiguration



```js
amazonaws_gamelift.DeleteMatchmakingConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteMatchmakingConfigurationOutput](#deletematchmakingconfigurationoutput)

### DeleteMatchmakingRuleSet



```js
amazonaws_gamelift.DeleteMatchmakingRuleSet({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteMatchmakingRuleSetOutput](#deletematchmakingrulesetoutput)

### DeleteScalingPolicy



```js
amazonaws_gamelift.DeleteScalingPolicy({
  "Name": null,
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * Name **required**

#### Output
*Output schema unknown*

### DeleteScript



```js
amazonaws_gamelift.DeleteScript({
  "ScriptId": null
}, context)
```

#### Input
* input `object`
  * ScriptId **required**

#### Output
*Output schema unknown*

### DeleteVpcPeeringAuthorization



```js
amazonaws_gamelift.DeleteVpcPeeringAuthorization({
  "GameLiftAwsAccountId": null,
  "PeerVpcId": null
}, context)
```

#### Input
* input `object`
  * GameLiftAwsAccountId **required**
  * PeerVpcId **required**

#### Output
* output [DeleteVpcPeeringAuthorizationOutput](#deletevpcpeeringauthorizationoutput)

### DeleteVpcPeeringConnection



```js
amazonaws_gamelift.DeleteVpcPeeringConnection({
  "FleetId": null,
  "VpcPeeringConnectionId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * VpcPeeringConnectionId **required**

#### Output
* output [DeleteVpcPeeringConnectionOutput](#deletevpcpeeringconnectionoutput)

### DeregisterGameServer



```js
amazonaws_gamelift.DeregisterGameServer({
  "GameServerGroupName": null,
  "GameServerId": null
}, context)
```

#### Input
* input `object`
  * GameServerGroupName **required**
  * GameServerId **required**

#### Output
*Output schema unknown*

### DescribeAlias



```js
amazonaws_gamelift.DescribeAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**

#### Output
* output [DescribeAliasOutput](#describealiasoutput)

### DescribeBuild



```js
amazonaws_gamelift.DescribeBuild({
  "BuildId": null
}, context)
```

#### Input
* input `object`
  * BuildId **required**

#### Output
* output [DescribeBuildOutput](#describebuildoutput)

### DescribeEC2InstanceLimits



```js
amazonaws_gamelift.DescribeEC2InstanceLimits({}, context)
```

#### Input
* input `object`
  * EC2InstanceType

#### Output
* output [DescribeEC2InstanceLimitsOutput](#describeec2instancelimitsoutput)

### DescribeFleetAttributes



```js
amazonaws_gamelift.DescribeFleetAttributes({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

#### Output
* output [DescribeFleetAttributesOutput](#describefleetattributesoutput)

### DescribeFleetCapacity



```js
amazonaws_gamelift.DescribeFleetCapacity({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

#### Output
* output [DescribeFleetCapacityOutput](#describefleetcapacityoutput)

### DescribeFleetEvents



```js
amazonaws_gamelift.DescribeFleetEvents({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * EndTime
  * FleetId **required**
  * Limit
  * NextToken
  * StartTime

#### Output
* output [DescribeFleetEventsOutput](#describefleeteventsoutput)

### DescribeFleetPortSettings



```js
amazonaws_gamelift.DescribeFleetPortSettings({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**

#### Output
* output [DescribeFleetPortSettingsOutput](#describefleetportsettingsoutput)

### DescribeFleetUtilization



```js
amazonaws_gamelift.DescribeFleetUtilization({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

#### Output
* output [DescribeFleetUtilizationOutput](#describefleetutilizationoutput)

### DescribeGameServer



```js
amazonaws_gamelift.DescribeGameServer({
  "GameServerGroupName": null,
  "GameServerId": null
}, context)
```

#### Input
* input `object`
  * GameServerGroupName **required**
  * GameServerId **required**

#### Output
* output [DescribeGameServerOutput](#describegameserveroutput)

### DescribeGameServerGroup



```js
amazonaws_gamelift.DescribeGameServerGroup({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * GameServerGroupName **required**

#### Output
* output [DescribeGameServerGroupOutput](#describegameservergroupoutput)

### DescribeGameServerInstances



```js
amazonaws_gamelift.DescribeGameServerInstances({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * GameServerGroupName **required**
  * InstanceIds
    * items [GameServerInstanceId](#gameserverinstanceid)
  * Limit
  * NextToken

#### Output
* output [DescribeGameServerInstancesOutput](#describegameserverinstancesoutput)

### DescribeGameSessionDetails



```js
amazonaws_gamelift.DescribeGameSessionDetails({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * AliasId
  * FleetId
  * GameSessionId
  * Limit
  * NextToken
  * StatusFilter

#### Output
* output [DescribeGameSessionDetailsOutput](#describegamesessiondetailsoutput)

### DescribeGameSessionPlacement



```js
amazonaws_gamelift.DescribeGameSessionPlacement({
  "PlacementId": null
}, context)
```

#### Input
* input `object`
  * PlacementId **required**

#### Output
* output [DescribeGameSessionPlacementOutput](#describegamesessionplacementoutput)

### DescribeGameSessionQueues



```js
amazonaws_gamelift.DescribeGameSessionQueues({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * Names
    * items [GameSessionQueueNameOrArn](#gamesessionqueuenameorarn)
  * NextToken

#### Output
* output [DescribeGameSessionQueuesOutput](#describegamesessionqueuesoutput)

### DescribeGameSessions



```js
amazonaws_gamelift.DescribeGameSessions({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * AliasId
  * FleetId
  * GameSessionId
  * Limit
  * NextToken
  * StatusFilter

#### Output
* output [DescribeGameSessionsOutput](#describegamesessionsoutput)

### DescribeInstances



```js
amazonaws_gamelift.DescribeInstances({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * FleetId **required**
  * InstanceId
  * Limit
  * NextToken

#### Output
* output [DescribeInstancesOutput](#describeinstancesoutput)

### DescribeMatchmaking



```js
amazonaws_gamelift.DescribeMatchmaking({
  "TicketIds": null
}, context)
```

#### Input
* input `object`
  * TicketIds **required**
    * items [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [DescribeMatchmakingOutput](#describematchmakingoutput)

### DescribeMatchmakingConfigurations



```js
amazonaws_gamelift.DescribeMatchmakingConfigurations({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * Names
    * items [MatchmakingConfigurationName](#matchmakingconfigurationname)
  * NextToken
  * RuleSetName

#### Output
* output [DescribeMatchmakingConfigurationsOutput](#describematchmakingconfigurationsoutput)

### DescribeMatchmakingRuleSets



```js
amazonaws_gamelift.DescribeMatchmakingRuleSets({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * Names
    * items [MatchmakingRuleSetName](#matchmakingrulesetname)
  * NextToken

#### Output
* output [DescribeMatchmakingRuleSetsOutput](#describematchmakingrulesetsoutput)

### DescribePlayerSessions



```js
amazonaws_gamelift.DescribePlayerSessions({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * GameSessionId
  * Limit
  * NextToken
  * PlayerId
  * PlayerSessionId
  * PlayerSessionStatusFilter

#### Output
* output [DescribePlayerSessionsOutput](#describeplayersessionsoutput)

### DescribeRuntimeConfiguration



```js
amazonaws_gamelift.DescribeRuntimeConfiguration({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**

#### Output
* output [DescribeRuntimeConfigurationOutput](#describeruntimeconfigurationoutput)

### DescribeScalingPolicies



```js
amazonaws_gamelift.DescribeScalingPolicies({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * FleetId **required**
  * Limit
  * NextToken
  * StatusFilter

#### Output
* output [DescribeScalingPoliciesOutput](#describescalingpoliciesoutput)

### DescribeScript



```js
amazonaws_gamelift.DescribeScript({
  "ScriptId": null
}, context)
```

#### Input
* input `object`
  * ScriptId **required**

#### Output
* output [DescribeScriptOutput](#describescriptoutput)

### DescribeVpcPeeringAuthorizations



```js
amazonaws_gamelift.DescribeVpcPeeringAuthorizations({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeVpcPeeringAuthorizationsOutput](#describevpcpeeringauthorizationsoutput)

### DescribeVpcPeeringConnections



```js
amazonaws_gamelift.DescribeVpcPeeringConnections({}, context)
```

#### Input
* input `object`
  * FleetId

#### Output
* output [DescribeVpcPeeringConnectionsOutput](#describevpcpeeringconnectionsoutput)

### GetGameSessionLogUrl



```js
amazonaws_gamelift.GetGameSessionLogUrl({
  "GameSessionId": null
}, context)
```

#### Input
* input `object`
  * GameSessionId **required**

#### Output
* output [GetGameSessionLogUrlOutput](#getgamesessionlogurloutput)

### GetInstanceAccess



```js
amazonaws_gamelift.GetInstanceAccess({
  "FleetId": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * InstanceId **required**

#### Output
* output [GetInstanceAccessOutput](#getinstanceaccessoutput)

### ListAliases



```js
amazonaws_gamelift.ListAliases({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * Name
  * NextToken
  * RoutingStrategyType

#### Output
* output [ListAliasesOutput](#listaliasesoutput)

### ListBuilds



```js
amazonaws_gamelift.ListBuilds({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * NextToken
  * Status

#### Output
* output [ListBuildsOutput](#listbuildsoutput)

### ListFleets



```js
amazonaws_gamelift.ListFleets({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * BuildId
  * Limit
  * NextToken
  * ScriptId

#### Output
* output [ListFleetsOutput](#listfleetsoutput)

### ListGameServerGroups



```js
amazonaws_gamelift.ListGameServerGroups({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * NextToken

#### Output
* output [ListGameServerGroupsOutput](#listgameservergroupsoutput)

### ListGameServers



```js
amazonaws_gamelift.ListGameServers({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * GameServerGroupName **required**
  * Limit
  * NextToken
  * SortOrder

#### Output
* output [ListGameServersOutput](#listgameserversoutput)

### ListScripts



```js
amazonaws_gamelift.ListScripts({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * NextToken

#### Output
* output [ListScriptsOutput](#listscriptsoutput)

### ListTagsForResource



```js
amazonaws_gamelift.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutScalingPolicy



```js
amazonaws_gamelift.PutScalingPolicy({
  "Name": null,
  "FleetId": null,
  "MetricName": null
}, context)
```

#### Input
* input `object`
  * ComparisonOperator
  * EvaluationPeriods
  * FleetId **required**
  * MetricName **required**
  * Name **required**
  * PolicyType
  * ScalingAdjustment
  * ScalingAdjustmentType
  * TargetConfiguration
    * TargetValue **required**
  * Threshold

#### Output
* output [PutScalingPolicyOutput](#putscalingpolicyoutput)

### RegisterGameServer



```js
amazonaws_gamelift.RegisterGameServer({
  "GameServerGroupName": null,
  "GameServerId": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * ConnectionInfo
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId **required**
  * InstanceId **required**

#### Output
* output [RegisterGameServerOutput](#registergameserveroutput)

### RequestUploadCredentials



```js
amazonaws_gamelift.RequestUploadCredentials({
  "BuildId": null
}, context)
```

#### Input
* input `object`
  * BuildId **required**

#### Output
* output [RequestUploadCredentialsOutput](#requestuploadcredentialsoutput)

### ResolveAlias



```js
amazonaws_gamelift.ResolveAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**

#### Output
* output [ResolveAliasOutput](#resolvealiasoutput)

### ResumeGameServerGroup



```js
amazonaws_gamelift.ResumeGameServerGroup({
  "GameServerGroupName": null,
  "ResumeActions": null
}, context)
```

#### Input
* input `object`
  * GameServerGroupName **required**
  * ResumeActions **required**
    * items [GameServerGroupAction](#gameservergroupaction)

#### Output
* output [ResumeGameServerGroupOutput](#resumegameservergroupoutput)

### SearchGameSessions



```js
amazonaws_gamelift.SearchGameSessions({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * AliasId
  * FilterExpression
  * FleetId
  * Limit
  * NextToken
  * SortExpression

#### Output
* output [SearchGameSessionsOutput](#searchgamesessionsoutput)

### StartFleetActions



```js
amazonaws_gamelift.StartFleetActions({
  "FleetId": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * Actions **required**
    * items [FleetAction](#fleetaction)
  * FleetId **required**

#### Output
* output [StartFleetActionsOutput](#startfleetactionsoutput)

### StartGameSessionPlacement



```js
amazonaws_gamelift.StartGameSessionPlacement({
  "PlacementId": null,
  "GameSessionQueueName": null,
  "MaximumPlayerSessionCount": null
}, context)
```

#### Input
* input `object`
  * DesiredPlayerSessions
    * items [DesiredPlayerSession](#desiredplayersession)
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionName
  * GameSessionQueueName **required**
  * MaximumPlayerSessionCount **required**
  * PlacementId **required**
  * PlayerLatencies
    * items [PlayerLatency](#playerlatency)

#### Output
* output [StartGameSessionPlacementOutput](#startgamesessionplacementoutput)

### StartMatchBackfill



```js
amazonaws_gamelift.StartMatchBackfill({
  "ConfigurationName": null,
  "Players": null
}, context)
```

#### Input
* input `object`
  * ConfigurationName **required**
  * GameSessionArn
  * Players **required**
    * items [Player](#player)
  * TicketId

#### Output
* output [StartMatchBackfillOutput](#startmatchbackfilloutput)

### StartMatchmaking



```js
amazonaws_gamelift.StartMatchmaking({
  "ConfigurationName": null,
  "Players": null
}, context)
```

#### Input
* input `object`
  * ConfigurationName **required**
  * Players **required**
    * items [Player](#player)
  * TicketId

#### Output
* output [StartMatchmakingOutput](#startmatchmakingoutput)

### StopFleetActions



```js
amazonaws_gamelift.StopFleetActions({
  "FleetId": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * Actions **required**
    * items [FleetAction](#fleetaction)
  * FleetId **required**

#### Output
* output [StopFleetActionsOutput](#stopfleetactionsoutput)

### StopGameSessionPlacement



```js
amazonaws_gamelift.StopGameSessionPlacement({
  "PlacementId": null
}, context)
```

#### Input
* input `object`
  * PlacementId **required**

#### Output
* output [StopGameSessionPlacementOutput](#stopgamesessionplacementoutput)

### StopMatchmaking



```js
amazonaws_gamelift.StopMatchmaking({
  "TicketId": null
}, context)
```

#### Input
* input `object`
  * TicketId **required**

#### Output
* output [StopMatchmakingOutput](#stopmatchmakingoutput)

### SuspendGameServerGroup



```js
amazonaws_gamelift.SuspendGameServerGroup({
  "GameServerGroupName": null,
  "SuspendActions": null
}, context)
```

#### Input
* input `object`
  * GameServerGroupName **required**
  * SuspendActions **required**
    * items [GameServerGroupAction](#gameservergroupaction)

#### Output
* output [SuspendGameServerGroupOutput](#suspendgameservergroupoutput)

### TagResource



```js
amazonaws_gamelift.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_gamelift.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAlias



```js
amazonaws_gamelift.UpdateAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**
  * Description
  * Name
  * RoutingStrategy
    * FleetId
    * Message
    * Type

#### Output
* output [UpdateAliasOutput](#updatealiasoutput)

### UpdateBuild



```js
amazonaws_gamelift.UpdateBuild({
  "BuildId": null
}, context)
```

#### Input
* input `object`
  * BuildId **required**
  * Name
  * Version

#### Output
* output [UpdateBuildOutput](#updatebuildoutput)

### UpdateFleetAttributes



```js
amazonaws_gamelift.UpdateFleetAttributes({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * Description
  * FleetId **required**
  * MetricGroups
    * items [MetricGroup](#metricgroup)
  * Name
  * NewGameSessionProtectionPolicy
  * ResourceCreationLimitPolicy
    * NewGameSessionsPerCreator
    * PolicyPeriodInMinutes

#### Output
* output [UpdateFleetAttributesOutput](#updatefleetattributesoutput)

### UpdateFleetCapacity



```js
amazonaws_gamelift.UpdateFleetCapacity({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * DesiredInstances
  * FleetId **required**
  * MaxSize
  * MinSize

#### Output
* output [UpdateFleetCapacityOutput](#updatefleetcapacityoutput)

### UpdateFleetPortSettings



```js
amazonaws_gamelift.UpdateFleetPortSettings({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * InboundPermissionAuthorizations
    * items [IpPermission](#ippermission)
  * InboundPermissionRevocations
    * items [IpPermission](#ippermission)

#### Output
* output [UpdateFleetPortSettingsOutput](#updatefleetportsettingsoutput)

### UpdateGameServer



```js
amazonaws_gamelift.UpdateGameServer({
  "GameServerGroupName": null,
  "GameServerId": null
}, context)
```

#### Input
* input `object`
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId **required**
  * HealthCheck
  * UtilizationStatus

#### Output
* output [UpdateGameServerOutput](#updategameserveroutput)

### UpdateGameServerGroup



```js
amazonaws_gamelift.UpdateGameServerGroup({
  "GameServerGroupName": null
}, context)
```

#### Input
* input `object`
  * BalancingStrategy
  * GameServerGroupName **required**
  * GameServerProtectionPolicy
  * InstanceDefinitions
    * items [InstanceDefinition](#instancedefinition)
  * RoleArn

#### Output
* output [UpdateGameServerGroupOutput](#updategameservergroupoutput)

### UpdateGameSession



```js
amazonaws_gamelift.UpdateGameSession({
  "GameSessionId": null
}, context)
```

#### Input
* input `object`
  * GameSessionId **required**
  * MaximumPlayerSessionCount
  * Name
  * PlayerSessionCreationPolicy
  * ProtectionPolicy

#### Output
* output [UpdateGameSessionOutput](#updategamesessionoutput)

### UpdateGameSessionQueue



```js
amazonaws_gamelift.UpdateGameSessionQueue({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Destinations
    * items [GameSessionQueueDestination](#gamesessionqueuedestination)
  * Name **required**
  * PlayerLatencyPolicies
    * items [PlayerLatencyPolicy](#playerlatencypolicy)
  * TimeoutInSeconds

#### Output
* output [UpdateGameSessionQueueOutput](#updategamesessionqueueoutput)

### UpdateMatchmakingConfiguration



```js
amazonaws_gamelift.UpdateMatchmakingConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * AcceptanceRequired
  * AcceptanceTimeoutSeconds
  * AdditionalPlayerCount
  * BackfillMode
  * CustomEventData
  * Description
  * FlexMatchMode
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionQueueArns
    * items [ArnStringModel](#arnstringmodel)
  * Name **required**
  * NotificationTarget
  * RequestTimeoutSeconds
  * RuleSetName

#### Output
* output [UpdateMatchmakingConfigurationOutput](#updatematchmakingconfigurationoutput)

### UpdateRuntimeConfiguration



```js
amazonaws_gamelift.UpdateRuntimeConfiguration({
  "FleetId": null,
  "RuntimeConfiguration": null
}, context)
```

#### Input
* input `object`
  * FleetId **required**
  * RuntimeConfiguration **required**
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)

#### Output
* output [UpdateRuntimeConfigurationOutput](#updateruntimeconfigurationoutput)

### UpdateScript



```js
amazonaws_gamelift.UpdateScript({
  "ScriptId": null
}, context)
```

#### Input
* input `object`
  * Name
  * ScriptId **required**
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Version
  * ZipFile

#### Output
* output [UpdateScriptOutput](#updatescriptoutput)

### ValidateMatchmakingRuleSet



```js
amazonaws_gamelift.ValidateMatchmakingRuleSet({
  "RuleSetBody": null
}, context)
```

#### Input
* input `object`
  * RuleSetBody **required**

#### Output
* output [ValidateMatchmakingRuleSetOutput](#validatematchmakingrulesetoutput)



## Definitions

### AcceptMatchInput
* AcceptMatchInput `object`: Represents the input for a request operation.
  * AcceptanceType **required**
  * PlayerIds **required**
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)
  * TicketId **required**

### AcceptMatchOutput
* AcceptMatchOutput `object`

### AcceptanceType
* AcceptanceType `string` (values: ACCEPT, REJECT)

### Alias
* Alias `object`: <p>Properties that describe an alias resource.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
  * AliasArn
  * AliasId
  * CreationTime
  * Description
  * LastUpdatedTime
  * Name
  * RoutingStrategy
    * FleetId
    * Message
    * Type

### AliasArn
* AliasArn `string`

### AliasId
* AliasId `string`

### AliasIdOrArn
* AliasIdOrArn `string`

### AliasList
* AliasList `array`
  * items [Alias](#alias)

### AmazonResourceName
* AmazonResourceName `string`

### ArnStringModel
* ArnStringModel `string`

### AttributeValue
* AttributeValue `object`: Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
  * N
  * S
  * SDM
  * SL
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### AutoScalingGroupArn
* AutoScalingGroupArn `string`

### AwsCredentials
* AwsCredentials `object`: Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
  * AccessKeyId
  * SecretAccessKey
  * SessionToken

### BackfillMode
* BackfillMode `string` (values: AUTOMATIC, MANUAL)

### BalancingStrategy
* BalancingStrategy `string` (values: SPOT_ONLY, SPOT_PREFERRED, ON_DEMAND_ONLY)

### BooleanModel
* BooleanModel `boolean`

### Build
* Build `object`: <p>Properties describing a custom game build.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
  * BuildArn
  * BuildId
  * CreationTime
  * Name
  * OperatingSystem
  * SizeOnDisk
  * Status
  * Version

### BuildArn
* BuildArn `string`

### BuildId
* BuildId `string`

### BuildIdOrArn
* BuildIdOrArn `string`

### BuildList
* BuildList `array`
  * items [Build](#build)

### BuildStatus
* BuildStatus `string` (values: INITIALIZED, READY, FAILED)

### CertificateConfiguration
* CertificateConfiguration `object`: Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> call <code>GetInstanceCertificate</code>. All instances in a fleet share the same certificate.
  * CertificateType **required**

### CertificateType
* CertificateType `string` (values: DISABLED, GENERATED)

### ClaimGameServerInput
* ClaimGameServerInput `object`
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId

### ClaimGameServerOutput
* ClaimGameServerOutput `object`
  * GameServer
    * ClaimStatus
    * ConnectionInfo
    * GameServerData
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerId
    * InstanceId
    * LastClaimTime
    * LastHealthCheckTime
    * RegistrationTime
    * UtilizationStatus

### ComparisonOperatorType
* ComparisonOperatorType `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### ConflictException


### CreateAliasInput
* CreateAliasInput `object`: Represents the input for a request operation.
  * Description
  * Name **required**
  * RoutingStrategy **required**
    * FleetId
    * Message
    * Type
  * Tags
    * items [Tag](#tag)

### CreateAliasOutput
* CreateAliasOutput `object`: Represents the returned data in response to a request operation.
  * Alias
    * AliasArn
    * AliasId
    * CreationTime
    * Description
    * LastUpdatedTime
    * Name
    * RoutingStrategy
      * FleetId
      * Message
      * Type

### CreateBuildInput
* CreateBuildInput `object`: Represents the input for a request operation.
  * Name
  * OperatingSystem
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Tags
    * items [Tag](#tag)
  * Version

### CreateBuildOutput
* CreateBuildOutput `object`: Represents the returned data in response to a request operation.
  * Build
    * BuildArn
    * BuildId
    * CreationTime
    * Name
    * OperatingSystem
    * SizeOnDisk
    * Status
    * Version
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * UploadCredentials
    * AccessKeyId
    * SecretAccessKey
    * SessionToken

### CreateFleetInput
* CreateFleetInput `object`: Represents the input for a request operation.
  * BuildId
  * CertificateConfiguration
    * CertificateType **required**
  * Description
  * EC2InboundPermissions
    * items [IpPermission](#ippermission)
  * EC2InstanceType **required**
  * FleetType
  * InstanceRoleArn
  * LogPaths
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)
  * MetricGroups
    * items [MetricGroup](#metricgroup)
  * Name **required**
  * NewGameSessionProtectionPolicy
  * PeerVpcAwsAccountId
  * PeerVpcId
  * ResourceCreationLimitPolicy
    * NewGameSessionsPerCreator
    * PolicyPeriodInMinutes
  * RuntimeConfiguration
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)
  * ScriptId
  * ServerLaunchParameters
  * ServerLaunchPath
  * Tags
    * items [Tag](#tag)

### CreateFleetOutput
* CreateFleetOutput `object`: Represents the returned data in response to a request operation.
  * FleetAttributes
    * BuildArn
    * BuildId
    * CertificateConfiguration
      * CertificateType **required**
    * CreationTime
    * Description
    * FleetArn
    * FleetId
    * FleetType
    * InstanceRoleArn
    * InstanceType
    * LogPaths
      * items [NonZeroAndMaxString](#nonzeroandmaxstring)
    * MetricGroups
      * items [MetricGroup](#metricgroup)
    * Name
    * NewGameSessionProtectionPolicy
    * OperatingSystem
    * ResourceCreationLimitPolicy
      * NewGameSessionsPerCreator
      * PolicyPeriodInMinutes
    * ScriptArn
    * ScriptId
    * ServerLaunchParameters
    * ServerLaunchPath
    * Status
    * StoppedActions
      * items [FleetAction](#fleetaction)
    * TerminationTime

### CreateGameServerGroupInput
* CreateGameServerGroupInput `object`
  * AutoScalingPolicy
    * EstimatedInstanceWarmup
    * TargetTrackingConfiguration **required**
      * TargetValue **required**
  * BalancingStrategy
  * GameServerGroupName **required**
  * GameServerProtectionPolicy
  * InstanceDefinitions **required**
    * items [InstanceDefinition](#instancedefinition)
  * LaunchTemplate **required**
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * MaxSize **required**
  * MinSize **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)
  * VpcSubnets
    * items [VpcSubnet](#vpcsubnet)

### CreateGameServerGroupOutput
* CreateGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### CreateGameSessionInput
* CreateGameSessionInput `object`: Represents the input for a request operation.
  * AliasId
  * CreatorId
  * FleetId
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionId
  * IdempotencyToken
  * MaximumPlayerSessionCount **required**
  * Name

### CreateGameSessionOutput
* CreateGameSessionOutput `object`: Represents the returned data in response to a request operation.
  * GameSession
    * CreationTime
    * CreatorId
    * CurrentPlayerSessionCount
    * DnsName
    * FleetArn
    * FleetId
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionData
    * GameSessionId
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * Name
    * PlayerSessionCreationPolicy
    * Port
    * Status
    * StatusReason
    * TerminationTime

### CreateGameSessionQueueInput
* CreateGameSessionQueueInput `object`: Represents the input for a request operation.
  * Destinations
    * items [GameSessionQueueDestination](#gamesessionqueuedestination)
  * Name **required**
  * PlayerLatencyPolicies
    * items [PlayerLatencyPolicy](#playerlatencypolicy)
  * Tags
    * items [Tag](#tag)
  * TimeoutInSeconds

### CreateGameSessionQueueOutput
* CreateGameSessionQueueOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionQueue
    * Destinations
      * items [GameSessionQueueDestination](#gamesessionqueuedestination)
    * GameSessionQueueArn
    * Name
    * PlayerLatencyPolicies
      * items [PlayerLatencyPolicy](#playerlatencypolicy)
    * TimeoutInSeconds

### CreateMatchmakingConfigurationInput
* CreateMatchmakingConfigurationInput `object`: Represents the input for a request operation.
  * AcceptanceRequired **required**
  * AcceptanceTimeoutSeconds
  * AdditionalPlayerCount
  * BackfillMode
  * CustomEventData
  * Description
  * FlexMatchMode
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionQueueArns
    * items [ArnStringModel](#arnstringmodel)
  * Name **required**
  * NotificationTarget
  * RequestTimeoutSeconds **required**
  * RuleSetName **required**
  * Tags
    * items [Tag](#tag)

### CreateMatchmakingConfigurationOutput
* CreateMatchmakingConfigurationOutput `object`: Represents the returned data in response to a request operation.
  * Configuration
    * AcceptanceRequired
    * AcceptanceTimeoutSeconds
    * AdditionalPlayerCount
    * BackfillMode
    * ConfigurationArn
    * CreationTime
    * CustomEventData
    * Description
    * FlexMatchMode
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionData
    * GameSessionQueueArns
      * items [ArnStringModel](#arnstringmodel)
    * Name
    * NotificationTarget
    * RequestTimeoutSeconds
    * RuleSetArn
    * RuleSetName

### CreateMatchmakingRuleSetInput
* CreateMatchmakingRuleSetInput `object`: Represents the input for a request operation.
  * Name **required**
  * RuleSetBody **required**
  * Tags
    * items [Tag](#tag)

### CreateMatchmakingRuleSetOutput
* CreateMatchmakingRuleSetOutput `object`: Represents the returned data in response to a request operation.
  * RuleSet **required**
    * CreationTime
    * RuleSetArn
    * RuleSetBody **required**
    * RuleSetName

### CreatePlayerSessionInput
* CreatePlayerSessionInput `object`: Represents the input for a request operation.
  * GameSessionId **required**
  * PlayerData
  * PlayerId **required**

### CreatePlayerSessionOutput
* CreatePlayerSessionOutput `object`: Represents the returned data in response to a request operation.
  * PlayerSession
    * CreationTime
    * DnsName
    * FleetArn
    * FleetId
    * GameSessionId
    * IpAddress
    * PlayerData
    * PlayerId
    * PlayerSessionId
    * Port
    * Status
    * TerminationTime

### CreatePlayerSessionsInput
* CreatePlayerSessionsInput `object`: Represents the input for a request operation.
  * GameSessionId **required**
  * PlayerDataMap
  * PlayerIds **required**
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreatePlayerSessionsOutput
* CreatePlayerSessionsOutput `object`: Represents the returned data in response to a request operation.
  * PlayerSessions
    * items [PlayerSession](#playersession)

### CreateScriptInput
* CreateScriptInput `object`
  * Name
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Tags
    * items [Tag](#tag)
  * Version
  * ZipFile

### CreateScriptOutput
* CreateScriptOutput `object`
  * Script
    * CreationTime
    * Name
    * ScriptArn
    * ScriptId
    * SizeOnDisk
    * StorageLocation [S3Location](#s3location)
    * Version

### CreateVpcPeeringAuthorizationInput
* CreateVpcPeeringAuthorizationInput `object`: Represents the input for a request operation.
  * GameLiftAwsAccountId **required**
  * PeerVpcId **required**

### CreateVpcPeeringAuthorizationOutput
* CreateVpcPeeringAuthorizationOutput `object`: Represents the returned data in response to a request operation.
  * VpcPeeringAuthorization
    * CreationTime
    * ExpirationTime
    * GameLiftAwsAccountId
    * PeerVpcAwsAccountId
    * PeerVpcId

### CreateVpcPeeringConnectionInput
* CreateVpcPeeringConnectionInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * PeerVpcAwsAccountId **required**
  * PeerVpcId **required**

### CreateVpcPeeringConnectionOutput
* CreateVpcPeeringConnectionOutput `object`

### CustomEventData
* CustomEventData `string`

### DeleteAliasInput
* DeleteAliasInput `object`: Represents the input for a request operation.
  * AliasId **required**

### DeleteBuildInput
* DeleteBuildInput `object`: Represents the input for a request operation.
  * BuildId **required**

### DeleteFleetInput
* DeleteFleetInput `object`: Represents the input for a request operation.
  * FleetId **required**

### DeleteGameServerGroupInput
* DeleteGameServerGroupInput `object`
  * DeleteOption
  * GameServerGroupName **required**

### DeleteGameServerGroupOutput
* DeleteGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### DeleteGameSessionQueueInput
* DeleteGameSessionQueueInput `object`: Represents the input for a request operation. 
  * Name **required**

### DeleteGameSessionQueueOutput
* DeleteGameSessionQueueOutput `object`

### DeleteMatchmakingConfigurationInput
* DeleteMatchmakingConfigurationInput `object`: Represents the input for a request operation.
  * Name **required**

### DeleteMatchmakingConfigurationOutput
* DeleteMatchmakingConfigurationOutput `object`

### DeleteMatchmakingRuleSetInput
* DeleteMatchmakingRuleSetInput `object`: Represents the input for a request operation.
  * Name **required**

### DeleteMatchmakingRuleSetOutput
* DeleteMatchmakingRuleSetOutput `object`: Represents the returned data in response to a request operation.

### DeleteScalingPolicyInput
* DeleteScalingPolicyInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * Name **required**

### DeleteScriptInput
* DeleteScriptInput `object`
  * ScriptId **required**

### DeleteVpcPeeringAuthorizationInput
* DeleteVpcPeeringAuthorizationInput `object`: Represents the input for a request operation.
  * GameLiftAwsAccountId **required**
  * PeerVpcId **required**

### DeleteVpcPeeringAuthorizationOutput
* DeleteVpcPeeringAuthorizationOutput `object`

### DeleteVpcPeeringConnectionInput
* DeleteVpcPeeringConnectionInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * VpcPeeringConnectionId **required**

### DeleteVpcPeeringConnectionOutput
* DeleteVpcPeeringConnectionOutput `object`

### DeregisterGameServerInput
* DeregisterGameServerInput `object`
  * GameServerGroupName **required**
  * GameServerId **required**

### DescribeAliasInput
* DescribeAliasInput `object`: Represents the input for a request operation.
  * AliasId **required**

### DescribeAliasOutput
* DescribeAliasOutput `object`: Represents the returned data in response to a request operation.
  * Alias
    * AliasArn
    * AliasId
    * CreationTime
    * Description
    * LastUpdatedTime
    * Name
    * RoutingStrategy
      * FleetId
      * Message
      * Type

### DescribeBuildInput
* DescribeBuildInput `object`: Represents the input for a request operation.
  * BuildId **required**

### DescribeBuildOutput
* DescribeBuildOutput `object`: Represents the returned data in response to a request operation.
  * Build
    * BuildArn
    * BuildId
    * CreationTime
    * Name
    * OperatingSystem
    * SizeOnDisk
    * Status
    * Version

### DescribeEC2InstanceLimitsInput
* DescribeEC2InstanceLimitsInput `object`: Represents the input for a request operation.
  * EC2InstanceType

### DescribeEC2InstanceLimitsOutput
* DescribeEC2InstanceLimitsOutput `object`: Represents the returned data in response to a request operation.
  * EC2InstanceLimits
    * items [EC2InstanceLimit](#ec2instancelimit)

### DescribeFleetAttributesInput
* DescribeFleetAttributesInput `object`: Represents the input for a request operation.
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

### DescribeFleetAttributesOutput
* DescribeFleetAttributesOutput `object`: Represents the returned data in response to a request operation.
  * FleetAttributes
    * items [FleetAttributes](#fleetattributes)
  * NextToken

### DescribeFleetCapacityInput
* DescribeFleetCapacityInput `object`: Represents the input for a request operation.
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

### DescribeFleetCapacityOutput
* DescribeFleetCapacityOutput `object`: Represents the returned data in response to a request operation.
  * FleetCapacity
    * items [FleetCapacity](#fleetcapacity)
  * NextToken

### DescribeFleetEventsInput
* DescribeFleetEventsInput `object`: Represents the input for a request operation.
  * EndTime
  * FleetId **required**
  * Limit
  * NextToken
  * StartTime

### DescribeFleetEventsOutput
* DescribeFleetEventsOutput `object`: Represents the returned data in response to a request operation.
  * Events
    * items [Event](#event)
  * NextToken

### DescribeFleetPortSettingsInput
* DescribeFleetPortSettingsInput `object`: Represents the input for a request operation.
  * FleetId **required**

### DescribeFleetPortSettingsOutput
* DescribeFleetPortSettingsOutput `object`: Represents the returned data in response to a request operation.
  * InboundPermissions
    * items [IpPermission](#ippermission)

### DescribeFleetUtilizationInput
* DescribeFleetUtilizationInput `object`: Represents the input for a request operation.
  * FleetIds
    * items [FleetIdOrArn](#fleetidorarn)
  * Limit
  * NextToken

### DescribeFleetUtilizationOutput
* DescribeFleetUtilizationOutput `object`: Represents the returned data in response to a request operation.
  * FleetUtilization
    * items [FleetUtilization](#fleetutilization)
  * NextToken

### DescribeGameServerGroupInput
* DescribeGameServerGroupInput `object`
  * GameServerGroupName **required**

### DescribeGameServerGroupOutput
* DescribeGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### DescribeGameServerInput
* DescribeGameServerInput `object`
  * GameServerGroupName **required**
  * GameServerId **required**

### DescribeGameServerInstancesInput
* DescribeGameServerInstancesInput `object`
  * GameServerGroupName **required**
  * InstanceIds
    * items [GameServerInstanceId](#gameserverinstanceid)
  * Limit
  * NextToken

### DescribeGameServerInstancesOutput
* DescribeGameServerInstancesOutput `object`
  * GameServerInstances
    * items [GameServerInstance](#gameserverinstance)
  * NextToken

### DescribeGameServerOutput
* DescribeGameServerOutput `object`
  * GameServer
    * ClaimStatus
    * ConnectionInfo
    * GameServerData
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerId
    * InstanceId
    * LastClaimTime
    * LastHealthCheckTime
    * RegistrationTime
    * UtilizationStatus

### DescribeGameSessionDetailsInput
* DescribeGameSessionDetailsInput `object`: Represents the input for a request operation.
  * AliasId
  * FleetId
  * GameSessionId
  * Limit
  * NextToken
  * StatusFilter

### DescribeGameSessionDetailsOutput
* DescribeGameSessionDetailsOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionDetails
    * items [GameSessionDetail](#gamesessiondetail)
  * NextToken

### DescribeGameSessionPlacementInput
* DescribeGameSessionPlacementInput `object`: Represents the input for a request operation.
  * PlacementId **required**

### DescribeGameSessionPlacementOutput
* DescribeGameSessionPlacementOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionPlacement
    * DnsName
    * EndTime
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionArn
    * GameSessionData
    * GameSessionId
    * GameSessionName
    * GameSessionQueueName
    * GameSessionRegion
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * PlacedPlayerSessions
      * items [PlacedPlayerSession](#placedplayersession)
    * PlacementId
    * PlayerLatencies
      * items [PlayerLatency](#playerlatency)
    * Port
    * StartTime
    * Status

### DescribeGameSessionQueuesInput
* DescribeGameSessionQueuesInput `object`: Represents the input for a request operation.
  * Limit
  * Names
    * items [GameSessionQueueNameOrArn](#gamesessionqueuenameorarn)
  * NextToken

### DescribeGameSessionQueuesOutput
* DescribeGameSessionQueuesOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionQueues
    * items [GameSessionQueue](#gamesessionqueue)
  * NextToken

### DescribeGameSessionsInput
* DescribeGameSessionsInput `object`: Represents the input for a request operation.
  * AliasId
  * FleetId
  * GameSessionId
  * Limit
  * NextToken
  * StatusFilter

### DescribeGameSessionsOutput
* DescribeGameSessionsOutput `object`: Represents the returned data in response to a request operation.
  * GameSessions
    * items [GameSession](#gamesession)
  * NextToken

### DescribeInstancesInput
* DescribeInstancesInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * InstanceId
  * Limit
  * NextToken

### DescribeInstancesOutput
* DescribeInstancesOutput `object`: Represents the returned data in response to a request operation.
  * Instances
    * items [Instance](#instance)
  * NextToken

### DescribeMatchmakingConfigurationsInput
* DescribeMatchmakingConfigurationsInput `object`: Represents the input for a request operation.
  * Limit
  * Names
    * items [MatchmakingConfigurationName](#matchmakingconfigurationname)
  * NextToken
  * RuleSetName

### DescribeMatchmakingConfigurationsOutput
* DescribeMatchmakingConfigurationsOutput `object`: Represents the returned data in response to a request operation.
  * Configurations
    * items [MatchmakingConfiguration](#matchmakingconfiguration)
  * NextToken

### DescribeMatchmakingInput
* DescribeMatchmakingInput `object`: Represents the input for a request operation.
  * TicketIds **required**
    * items [MatchmakingIdStringModel](#matchmakingidstringmodel)

### DescribeMatchmakingOutput
* DescribeMatchmakingOutput `object`: Represents the returned data in response to a request operation.
  * TicketList
    * items [MatchmakingTicket](#matchmakingticket)

### DescribeMatchmakingRuleSetsInput
* DescribeMatchmakingRuleSetsInput `object`: Represents the input for a request operation.
  * Limit
  * Names
    * items [MatchmakingRuleSetName](#matchmakingrulesetname)
  * NextToken

### DescribeMatchmakingRuleSetsOutput
* DescribeMatchmakingRuleSetsOutput `object`: Represents the returned data in response to a request operation.
  * NextToken
  * RuleSets **required**
    * items [MatchmakingRuleSet](#matchmakingruleset)

### DescribePlayerSessionsInput
* DescribePlayerSessionsInput `object`: Represents the input for a request operation.
  * GameSessionId
  * Limit
  * NextToken
  * PlayerId
  * PlayerSessionId
  * PlayerSessionStatusFilter

### DescribePlayerSessionsOutput
* DescribePlayerSessionsOutput `object`: Represents the returned data in response to a request operation.
  * NextToken
  * PlayerSessions
    * items [PlayerSession](#playersession)

### DescribeRuntimeConfigurationInput
* DescribeRuntimeConfigurationInput `object`: Represents the input for a request operation.
  * FleetId **required**

### DescribeRuntimeConfigurationOutput
* DescribeRuntimeConfigurationOutput `object`: Represents the returned data in response to a request operation.
  * RuntimeConfiguration
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)

### DescribeScalingPoliciesInput
* DescribeScalingPoliciesInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * Limit
  * NextToken
  * StatusFilter

### DescribeScalingPoliciesOutput
* DescribeScalingPoliciesOutput `object`: Represents the returned data in response to a request operation.
  * NextToken
  * ScalingPolicies
    * items [ScalingPolicy](#scalingpolicy)

### DescribeScriptInput
* DescribeScriptInput `object`
  * ScriptId **required**

### DescribeScriptOutput
* DescribeScriptOutput `object`
  * Script
    * CreationTime
    * Name
    * ScriptArn
    * ScriptId
    * SizeOnDisk
    * StorageLocation [S3Location](#s3location)
    * Version

### DescribeVpcPeeringAuthorizationsInput
* DescribeVpcPeeringAuthorizationsInput `object`

### DescribeVpcPeeringAuthorizationsOutput
* DescribeVpcPeeringAuthorizationsOutput `object`
  * VpcPeeringAuthorizations
    * items [VpcPeeringAuthorization](#vpcpeeringauthorization)

### DescribeVpcPeeringConnectionsInput
* DescribeVpcPeeringConnectionsInput `object`: Represents the input for a request operation.
  * FleetId

### DescribeVpcPeeringConnectionsOutput
* DescribeVpcPeeringConnectionsOutput `object`: Represents the returned data in response to a request operation.
  * VpcPeeringConnections
    * items [VpcPeeringConnection](#vpcpeeringconnection)

### DesiredPlayerSession
* DesiredPlayerSession `object`: Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
  * PlayerData
  * PlayerId

### DesiredPlayerSessionList
* DesiredPlayerSessionList `array`
  * items [DesiredPlayerSession](#desiredplayersession)

### DnsName
* DnsName `string`

### Double
* Double `number`

### DoubleObject
* DoubleObject `number`

### EC2InstanceCounts
* EC2InstanceCounts `object`: <p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
  * ACTIVE
  * DESIRED
  * IDLE
  * MAXIMUM
  * MINIMUM
  * PENDING
  * TERMINATING

### EC2InstanceLimit
* EC2InstanceLimit `object`: The maximum number of instances allowed based on the Amazon Elastic Compute Cloud (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>.
  * CurrentInstances
  * EC2InstanceType
  * InstanceLimit

### EC2InstanceLimitList
* EC2InstanceLimitList `array`
  * items [EC2InstanceLimit](#ec2instancelimit)

### EC2InstanceType
* EC2InstanceType `string` (values: t2.micro, t2.small, t2.medium, t2.large, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.large, c5.xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, c5.12xlarge, c5.18xlarge, c5.24xlarge, c5a.large, c5a.xlarge, c5a.2xlarge, c5a.4xlarge, c5a.8xlarge, c5a.12xlarge, c5a.16xlarge, c5a.24xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, r5.large, r5.xlarge, r5.2xlarge, r5.4xlarge, r5.8xlarge, r5.12xlarge, r5.16xlarge, r5.24xlarge, r5a.large, r5a.xlarge, r5a.2xlarge, r5a.4xlarge, r5a.8xlarge, r5a.12xlarge, r5a.16xlarge, r5a.24xlarge, m3.medium, m3.large, m3.xlarge, m3.2xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m5.large, m5.xlarge, m5.2xlarge, m5.4xlarge, m5.8xlarge, m5.12xlarge, m5.16xlarge, m5.24xlarge, m5a.large, m5a.xlarge, m5a.2xlarge, m5a.4xlarge, m5a.8xlarge, m5a.12xlarge, m5a.16xlarge, m5a.24xlarge)

### Event
* Event `object`: Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.
  * EventCode
  * EventId
  * EventTime
  * Message
  * PreSignedLogUrl
  * ResourceId

### EventCode
* EventCode `string` (values: GENERIC_EVENT, FLEET_CREATED, FLEET_DELETED, FLEET_SCALING_EVENT, FLEET_STATE_DOWNLOADING, FLEET_STATE_VALIDATING, FLEET_STATE_BUILDING, FLEET_STATE_ACTIVATING, FLEET_STATE_ACTIVE, FLEET_STATE_ERROR, FLEET_INITIALIZATION_FAILED, FLEET_BINARY_DOWNLOAD_FAILED, FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND, FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE, FLEET_VALIDATION_TIMED_OUT, FLEET_ACTIVATION_FAILED, FLEET_ACTIVATION_FAILED_NO_INSTANCES, FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED, SERVER_PROCESS_INVALID_PATH, SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT, SERVER_PROCESS_PROCESS_READY_TIMEOUT, SERVER_PROCESS_CRASHED, SERVER_PROCESS_TERMINATED_UNHEALTHY, SERVER_PROCESS_FORCE_TERMINATED, SERVER_PROCESS_PROCESS_EXIT_TIMEOUT, GAME_SESSION_ACTIVATION_TIMEOUT, FLEET_CREATION_EXTRACTING_BUILD, FLEET_CREATION_RUNNING_INSTALLER, FLEET_CREATION_VALIDATING_RUNTIME_CONFIG, FLEET_VPC_PEERING_SUCCEEDED, FLEET_VPC_PEERING_FAILED, FLEET_VPC_PEERING_DELETED, INSTANCE_INTERRUPTED)

### EventList
* EventList `array`
  * items [Event](#event)

### FleetAction
* FleetAction `string` (values: AUTO_SCALING)

### FleetActionList
* FleetActionList `array`
  * items [FleetAction](#fleetaction)

### FleetArn
* FleetArn `string`

### FleetAttributes
* FleetAttributes `object`: <p>General properties describing a fleet.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
  * BuildArn
  * BuildId
  * CertificateConfiguration
    * CertificateType **required**
  * CreationTime
  * Description
  * FleetArn
  * FleetId
  * FleetType
  * InstanceRoleArn
  * InstanceType
  * LogPaths
    * items [NonZeroAndMaxString](#nonzeroandmaxstring)
  * MetricGroups
    * items [MetricGroup](#metricgroup)
  * Name
  * NewGameSessionProtectionPolicy
  * OperatingSystem
  * ResourceCreationLimitPolicy
    * NewGameSessionsPerCreator
    * PolicyPeriodInMinutes
  * ScriptArn
  * ScriptId
  * ServerLaunchParameters
  * ServerLaunchPath
  * Status
  * StoppedActions
    * items [FleetAction](#fleetaction)
  * TerminationTime

### FleetAttributesList
* FleetAttributesList `array`
  * items [FleetAttributes](#fleetattributes)

### FleetCapacity
* FleetCapacity `object`: <p>Information about the fleet's capacity. Fleet capacity is measured in EC2 instances. By default, new fleets have a capacity of one instance, but can be updated as needed. The maximum number of instances for a fleet is determined by the fleet's instance type.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
  * FleetId
  * InstanceCounts
    * ACTIVE
    * DESIRED
    * IDLE
    * MAXIMUM
    * MINIMUM
    * PENDING
    * TERMINATING
  * InstanceType

### FleetCapacityExceededException


### FleetCapacityList
* FleetCapacityList `array`
  * items [FleetCapacity](#fleetcapacity)

### FleetId
* FleetId `string`

### FleetIdList
* FleetIdList `array`
  * items [FleetId](#fleetid)

### FleetIdOrArn
* FleetIdOrArn `string`

### FleetIdOrArnList
* FleetIdOrArnList `array`
  * items [FleetIdOrArn](#fleetidorarn)

### FleetStatus
* FleetStatus `string` (values: NEW, DOWNLOADING, VALIDATING, BUILDING, ACTIVATING, ACTIVE, DELETING, ERROR, TERMINATED)

### FleetType
* FleetType `string` (values: ON_DEMAND, SPOT)

### FleetUtilization
* FleetUtilization `object`: <p>Current status of fleet utilization, including the number of game and player sessions being hosted.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
  * ActiveGameSessionCount
  * ActiveServerProcessCount
  * CurrentPlayerSessionCount
  * FleetId
  * MaximumPlayerSessionCount

### FleetUtilizationList
* FleetUtilizationList `array`
  * items [FleetUtilization](#fleetutilization)

### FlexMatchMode
* FlexMatchMode `string` (values: STANDALONE, WITH_QUEUE)

### Float
* Float `number`

### FreeText
* FreeText `string`

### GameProperty
* GameProperty `object`: Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.
  * Key **required**
  * Value **required**

### GamePropertyKey
* GamePropertyKey `string`

### GamePropertyList
* GamePropertyList `array`
  * items [GameProperty](#gameproperty)

### GamePropertyValue
* GamePropertyValue `string`

### GameServer
* GameServer `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
  * ClaimStatus
  * ConnectionInfo
  * GameServerData
  * GameServerGroupArn
  * GameServerGroupName
  * GameServerId
  * InstanceId
  * LastClaimTime
  * LastHealthCheckTime
  * RegistrationTime
  * UtilizationStatus

### GameServerClaimStatus
* GameServerClaimStatus `string` (values: CLAIMED)

### GameServerConnectionInfo
* GameServerConnectionInfo `string`

### GameServerData
* GameServerData `string`

### GameServerGroup
* GameServerGroup `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> <li> <p> <a>DescribeGameServerInstances</a> </p> </li> </ul>
  * AutoScalingGroupArn
  * BalancingStrategy
  * CreationTime
  * GameServerGroupArn
  * GameServerGroupName
  * GameServerProtectionPolicy
  * InstanceDefinitions
    * items [InstanceDefinition](#instancedefinition)
  * LastUpdatedTime
  * RoleArn
  * Status
  * StatusReason
  * SuspendedActions
    * items [GameServerGroupAction](#gameservergroupaction)

### GameServerGroupAction
* GameServerGroupAction `string` (values: REPLACE_INSTANCE_TYPES)

### GameServerGroupActions
* GameServerGroupActions `array`
  * items [GameServerGroupAction](#gameservergroupaction)

### GameServerGroupArn
* GameServerGroupArn `string`

### GameServerGroupAutoScalingPolicy
* GameServerGroupAutoScalingPolicy `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group with <a>CreateGameServerGroup</a>. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>
  * EstimatedInstanceWarmup
  * TargetTrackingConfiguration **required**
    * TargetValue **required**

### GameServerGroupDeleteOption
* GameServerGroupDeleteOption `string` (values: SAFE_DELETE, FORCE_DELETE, RETAIN)

### GameServerGroupInstanceType
* GameServerGroupInstanceType `string` (values: c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.large, c5.xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, c5.12xlarge, c5.18xlarge, c5.24xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, r5.large, r5.xlarge, r5.2xlarge, r5.4xlarge, r5.8xlarge, r5.12xlarge, r5.16xlarge, r5.24xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m5.large, m5.xlarge, m5.2xlarge, m5.4xlarge, m5.8xlarge, m5.12xlarge, m5.16xlarge, m5.24xlarge)

### GameServerGroupName
* GameServerGroupName `string`

### GameServerGroupNameOrArn
* GameServerGroupNameOrArn `string`

### GameServerGroupStatus
* GameServerGroupStatus `string` (values: NEW, ACTIVATING, ACTIVE, DELETE_SCHEDULED, DELETING, DELETED, ERROR)

### GameServerGroups
* GameServerGroups `array`
  * items [GameServerGroup](#gameservergroup)

### GameServerHealthCheck
* GameServerHealthCheck `string` (values: HEALTHY)

### GameServerId
* GameServerId `string`

### GameServerInstance
* GameServerInstance `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> <li> <p> <a>DescribeGameServerInstances</a> </p> </li> </ul>
  * GameServerGroupArn
  * GameServerGroupName
  * InstanceId
  * InstanceStatus

### GameServerInstanceId
* GameServerInstanceId `string`

### GameServerInstanceIds
* GameServerInstanceIds `array`
  * items [GameServerInstanceId](#gameserverinstanceid)

### GameServerInstanceStatus
* GameServerInstanceStatus `string` (values: ACTIVE, DRAINING, SPOT_TERMINATING)

### GameServerInstances
* GameServerInstances `array`
  * items [GameServerInstance](#gameserverinstance)

### GameServerProtectionPolicy
* GameServerProtectionPolicy `string` (values: NO_PROTECTION, FULL_PROTECTION)

### GameServerUtilizationStatus
* GameServerUtilizationStatus `string` (values: AVAILABLE, UTILIZED)

### GameServers
* GameServers `array`
  * items [GameServer](#gameserver)

### GameSession
* GameSession `object`: <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * CreationTime
  * CreatorId
  * CurrentPlayerSessionCount
  * DnsName
  * FleetArn
  * FleetId
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionId
  * IpAddress
  * MatchmakerData
  * MaximumPlayerSessionCount
  * Name
  * PlayerSessionCreationPolicy
  * Port
  * Status
  * StatusReason
  * TerminationTime

### GameSessionActivationTimeoutSeconds
* GameSessionActivationTimeoutSeconds `integer`

### GameSessionConnectionInfo
* GameSessionConnectionInfo `object`: Connection information for a new game session that is created in response to a <a>StartMatchmaking</a> request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.
  * DnsName
  * GameSessionArn
  * IpAddress
  * MatchedPlayerSessions
    * items [MatchedPlayerSession](#matchedplayersession)
  * Port

### GameSessionData
* GameSessionData `string`

### GameSessionDetail
* GameSessionDetail `object`: A game session's properties plus the protection policy currently in force.
  * GameSession
    * CreationTime
    * CreatorId
    * CurrentPlayerSessionCount
    * DnsName
    * FleetArn
    * FleetId
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionData
    * GameSessionId
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * Name
    * PlayerSessionCreationPolicy
    * Port
    * Status
    * StatusReason
    * TerminationTime
  * ProtectionPolicy

### GameSessionDetailList
* GameSessionDetailList `array`
  * items [GameSessionDetail](#gamesessiondetail)

### GameSessionFullException


### GameSessionList
* GameSessionList `array`
  * items [GameSession](#gamesession)

### GameSessionPlacement
* GameSessionPlacement `object`: <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
  * DnsName
  * EndTime
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionArn
  * GameSessionData
  * GameSessionId
  * GameSessionName
  * GameSessionQueueName
  * GameSessionRegion
  * IpAddress
  * MatchmakerData
  * MaximumPlayerSessionCount
  * PlacedPlayerSessions
    * items [PlacedPlayerSession](#placedplayersession)
  * PlacementId
  * PlayerLatencies
    * items [PlayerLatency](#playerlatency)
  * Port
  * StartTime
  * Status

### GameSessionPlacementState
* GameSessionPlacementState `string` (values: PENDING, FULFILLED, CANCELLED, TIMED_OUT, FAILED)

### GameSessionQueue
* GameSessionQueue `object`: <p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * Destinations
    * items [GameSessionQueueDestination](#gamesessionqueuedestination)
  * GameSessionQueueArn
  * Name
  * PlayerLatencyPolicies
    * items [PlayerLatencyPolicy](#playerlatencypolicy)
  * TimeoutInSeconds

### GameSessionQueueArn
* GameSessionQueueArn `string`

### GameSessionQueueDestination
* GameSessionQueueDestination `object`: <p>Fleet designated in a game session queue. Requests for new game sessions in the queue are fulfilled by starting a new game session on any destination that is configured for a queue. </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * DestinationArn

### GameSessionQueueDestinationList
* GameSessionQueueDestinationList `array`
  * items [GameSessionQueueDestination](#gamesessionqueuedestination)

### GameSessionQueueList
* GameSessionQueueList `array`
  * items [GameSessionQueue](#gamesessionqueue)

### GameSessionQueueName
* GameSessionQueueName `string`

### GameSessionQueueNameOrArn
* GameSessionQueueNameOrArn `string`

### GameSessionQueueNameOrArnList
* GameSessionQueueNameOrArnList `array`
  * items [GameSessionQueueNameOrArn](#gamesessionqueuenameorarn)

### GameSessionStatus
* GameSessionStatus `string` (values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR)

### GameSessionStatusReason
* GameSessionStatusReason `string` (values: INTERRUPTED)

### GetGameSessionLogUrlInput
* GetGameSessionLogUrlInput `object`: Represents the input for a request operation.
  * GameSessionId **required**

### GetGameSessionLogUrlOutput
* GetGameSessionLogUrlOutput `object`: Represents the returned data in response to a request operation.
  * PreSignedUrl

### GetInstanceAccessInput
* GetInstanceAccessInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * InstanceId **required**

### GetInstanceAccessOutput
* GetInstanceAccessOutput `object`: Represents the returned data in response to a request operation.
  * InstanceAccess
    * Credentials
      * Secret
      * UserName
    * FleetId
    * InstanceId
    * IpAddress
    * OperatingSystem

### IamRoleArn
* IamRoleArn `string`

### IdStringModel
* IdStringModel `string`

### IdempotentParameterMismatchException


### Instance
* Instance `object`: Properties that describe an instance of a virtual computing resource that hosts one or more game servers. A fleet may contain zero or more instances.
  * CreationTime
  * DnsName
  * FleetId
  * InstanceId
  * IpAddress
  * OperatingSystem
  * Status
  * Type

### InstanceAccess
* InstanceAccess `object`: Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
  * Credentials
    * Secret
    * UserName
  * FleetId
  * InstanceId
  * IpAddress
  * OperatingSystem

### InstanceCredentials
* InstanceCredentials `object`: Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
  * Secret
  * UserName

### InstanceDefinition
* InstanceDefinition `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a <a>GameServerGroup</a>. All game server groups must have at least two instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>
  * InstanceType **required**
  * WeightedCapacity

### InstanceDefinitions
* InstanceDefinitions `array`
  * items [InstanceDefinition](#instancedefinition)

### InstanceId
* InstanceId `string`

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstanceStatus
* InstanceStatus `string` (values: PENDING, ACTIVE, TERMINATING)

### Integer
* Integer `integer`

### InternalServiceException


### InvalidFleetStatusException


### InvalidGameSessionStatusException


### InvalidRequestException


### IpAddress
* IpAddress `string`

### IpPermission
* IpPermission `object`: A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift hosting resource. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP for use by the Realtime servers.
  * FromPort **required**
  * IpRange **required**
  * Protocol **required**
  * ToPort **required**

### IpPermissionsList
* IpPermissionsList `array`
  * items [IpPermission](#ippermission)

### IpProtocol
* IpProtocol `string` (values: TCP, UDP)

### LatencyMap
* LatencyMap `object`

### LaunchTemplateId
* LaunchTemplateId `string`

### LaunchTemplateName
* LaunchTemplateName `string`

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group with <a>CreateGameServerGroup</a>. </p>
  * LaunchTemplateId
  * LaunchTemplateName
  * Version

### LaunchTemplateVersion
* LaunchTemplateVersion `string`

### LimitExceededException


### ListAliasesInput
* ListAliasesInput `object`: Represents the input for a request operation.
  * Limit
  * Name
  * NextToken
  * RoutingStrategyType

### ListAliasesOutput
* ListAliasesOutput `object`: Represents the returned data in response to a request operation.
  * Aliases
    * items [Alias](#alias)
  * NextToken

### ListBuildsInput
* ListBuildsInput `object`: Represents the input for a request operation.
  * Limit
  * NextToken
  * Status

### ListBuildsOutput
* ListBuildsOutput `object`: Represents the returned data in response to a request operation.
  * Builds
    * items [Build](#build)
  * NextToken

### ListFleetsInput
* ListFleetsInput `object`: Represents the input for a request operation.
  * BuildId
  * Limit
  * NextToken
  * ScriptId

### ListFleetsOutput
* ListFleetsOutput `object`: Represents the returned data in response to a request operation.
  * FleetIds
    * items [FleetId](#fleetid)
  * NextToken

### ListGameServerGroupsInput
* ListGameServerGroupsInput `object`
  * Limit
  * NextToken

### ListGameServerGroupsOutput
* ListGameServerGroupsOutput `object`
  * GameServerGroups
    * items [GameServerGroup](#gameservergroup)
  * NextToken

### ListGameServersInput
* ListGameServersInput `object`
  * GameServerGroupName **required**
  * Limit
  * NextToken
  * SortOrder

### ListGameServersOutput
* ListGameServersOutput `object`
  * GameServers
    * items [GameServer](#gameserver)
  * NextToken

### ListScriptsInput
* ListScriptsInput `object`
  * Limit
  * NextToken

### ListScriptsOutput
* ListScriptsOutput `object`
  * NextToken
  * Scripts
    * items [Script](#script)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### MatchedPlayerSession
* MatchedPlayerSession `object`: <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>
  * PlayerId
  * PlayerSessionId

### MatchedPlayerSessionList
* MatchedPlayerSessionList `array`
  * items [MatchedPlayerSession](#matchedplayersession)

### MatchmakerData
* MatchmakerData `string`

### MatchmakingAcceptanceTimeoutInteger
* MatchmakingAcceptanceTimeoutInteger `integer`

### MatchmakingConfiguration
* MatchmakingConfiguration `object`: Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
  * AcceptanceRequired
  * AcceptanceTimeoutSeconds
  * AdditionalPlayerCount
  * BackfillMode
  * ConfigurationArn
  * CreationTime
  * CustomEventData
  * Description
  * FlexMatchMode
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionQueueArns
    * items [ArnStringModel](#arnstringmodel)
  * Name
  * NotificationTarget
  * RequestTimeoutSeconds
  * RuleSetArn
  * RuleSetName

### MatchmakingConfigurationArn
* MatchmakingConfigurationArn `string`: Data type used for Matchmaking Configuration ARN.

### MatchmakingConfigurationList
* MatchmakingConfigurationList `array`
  * items [MatchmakingConfiguration](#matchmakingconfiguration)

### MatchmakingConfigurationName
* MatchmakingConfigurationName `string`

### MatchmakingConfigurationNameList
* MatchmakingConfigurationNameList `array`
  * items [MatchmakingConfigurationName](#matchmakingconfigurationname)

### MatchmakingConfigurationStatus
* MatchmakingConfigurationStatus `string` (values: CANCELLED, COMPLETED, FAILED, PLACING, QUEUED, REQUIRES_ACCEPTANCE, SEARCHING, TIMED_OUT)

### MatchmakingIdList
* MatchmakingIdList `array`
  * items [MatchmakingIdStringModel](#matchmakingidstringmodel)

### MatchmakingIdStringModel
* MatchmakingIdStringModel `string`

### MatchmakingRequestTimeoutInteger
* MatchmakingRequestTimeoutInteger `integer`

### MatchmakingRuleSet
* MatchmakingRuleSet `object`: <p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch Rule Set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul>
  * CreationTime
  * RuleSetArn
  * RuleSetBody **required**
  * RuleSetName

### MatchmakingRuleSetArn
* MatchmakingRuleSetArn `string`: Data type used for Matchmaking RuleSet ARN.

### MatchmakingRuleSetList
* MatchmakingRuleSetList `array`
  * items [MatchmakingRuleSet](#matchmakingruleset)

### MatchmakingRuleSetName
* MatchmakingRuleSetName `string`

### MatchmakingRuleSetNameList
* MatchmakingRuleSetNameList `array`
  * items [MatchmakingRuleSetName](#matchmakingrulesetname)

### MatchmakingTicket
* MatchmakingTicket `object`: Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
  * ConfigurationArn
  * ConfigurationName
  * EndTime
  * EstimatedWaitTime
  * GameSessionConnectionInfo
    * DnsName
    * GameSessionArn
    * IpAddress
    * MatchedPlayerSessions
      * items [MatchedPlayerSession](#matchedplayersession)
    * Port
  * Players
    * items [Player](#player)
  * StartTime
  * Status
  * StatusMessage
  * StatusReason
  * TicketId

### MatchmakingTicketList
* MatchmakingTicketList `array`
  * items [MatchmakingTicket](#matchmakingticket)

### MaxConcurrentGameSessionActivations
* MaxConcurrentGameSessionActivations `integer`

### MetricGroup
* MetricGroup `string`

### MetricGroupList
* MetricGroupList `array`
  * items [MetricGroup](#metricgroup)

### MetricName
* MetricName `string` (values: ActivatingGameSessions, ActiveGameSessions, ActiveInstances, AvailableGameSessions, AvailablePlayerSessions, CurrentPlayerSessions, IdleInstances, PercentAvailableGameSessions, PercentIdleInstances, QueueDepth, WaitTime)

### NonBlankAndLengthConstraintString
* NonBlankAndLengthConstraintString `string`

### NonBlankString
* NonBlankString `string`

### NonEmptyString
* NonEmptyString `string`

### NonNegativeDouble
* NonNegativeDouble `number`

### NonZeroAndMaxString
* NonZeroAndMaxString `string`

### NotFoundException


### OperatingSystem
* OperatingSystem `string` (values: WINDOWS_2012, AMAZON_LINUX, AMAZON_LINUX_2)

### OutOfCapacityException


### PlacedPlayerSession
* PlacedPlayerSession `object`: <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * PlayerId
  * PlayerSessionId

### PlacedPlayerSessionList
* PlacedPlayerSessionList `array`
  * items [PlacedPlayerSession](#placedplayersession)

### Player
* Player `object`: Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
  * LatencyInMs
  * PlayerAttributes
  * PlayerId
  * Team

### PlayerAttributeMap
* PlayerAttributeMap `object`

### PlayerData
* PlayerData `string`

### PlayerDataMap
* PlayerDataMap `object`

### PlayerIdList
* PlayerIdList `array`
  * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### PlayerLatency
* PlayerLatency `object`: Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player. 
  * LatencyInMilliseconds
  * PlayerId
  * RegionIdentifier

### PlayerLatencyList
* PlayerLatencyList `array`
  * items [PlayerLatency](#playerlatency)

### PlayerLatencyPolicy
* PlayerLatencyPolicy `object`: <p>Queue setting that determines the highest latency allowed for individual players when placing a game session. When a latency policy is in force, a game session cannot be placed with any fleet in a Region where a player reports latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * MaximumIndividualPlayerLatencyMilliseconds
  * PolicyDurationSeconds

### PlayerLatencyPolicyList
* PlayerLatencyPolicyList `array`
  * items [PlayerLatencyPolicy](#playerlatencypolicy)

### PlayerList
* PlayerList `array`
  * items [Player](#player)

### PlayerSession
* PlayerSession `object`: <p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * CreationTime
  * DnsName
  * FleetArn
  * FleetId
  * GameSessionId
  * IpAddress
  * PlayerData
  * PlayerId
  * PlayerSessionId
  * Port
  * Status
  * TerminationTime

### PlayerSessionCreationPolicy
* PlayerSessionCreationPolicy `string` (values: ACCEPT_ALL, DENY_ALL)

### PlayerSessionId
* PlayerSessionId `string`

### PlayerSessionList
* PlayerSessionList `array`
  * items [PlayerSession](#playersession)

### PlayerSessionStatus
* PlayerSessionStatus `string` (values: RESERVED, ACTIVE, COMPLETED, TIMEDOUT)

### PolicyType
* PolicyType `string` (values: RuleBased, TargetBased)

### PortNumber
* PortNumber `integer`

### PositiveInteger
* PositiveInteger `integer`

### PositiveLong
* PositiveLong `integer`

### ProtectionPolicy
* ProtectionPolicy `string` (values: NoProtection, FullProtection)

### PutScalingPolicyInput
* PutScalingPolicyInput `object`: Represents the input for a request operation.
  * ComparisonOperator
  * EvaluationPeriods
  * FleetId **required**
  * MetricName **required**
  * Name **required**
  * PolicyType
  * ScalingAdjustment
  * ScalingAdjustmentType
  * TargetConfiguration
    * TargetValue **required**
  * Threshold

### PutScalingPolicyOutput
* PutScalingPolicyOutput `object`: Represents the returned data in response to a request operation.
  * Name

### QueueArnsList
* QueueArnsList `array`
  * items [ArnStringModel](#arnstringmodel)

### RegisterGameServerInput
* RegisterGameServerInput `object`
  * ConnectionInfo
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId **required**
  * InstanceId **required**

### RegisterGameServerOutput
* RegisterGameServerOutput `object`
  * GameServer
    * ClaimStatus
    * ConnectionInfo
    * GameServerData
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerId
    * InstanceId
    * LastClaimTime
    * LastHealthCheckTime
    * RegistrationTime
    * UtilizationStatus

### RequestUploadCredentialsInput
* RequestUploadCredentialsInput `object`: Represents the input for a request operation.
  * BuildId **required**

### RequestUploadCredentialsOutput
* RequestUploadCredentialsOutput `object`: Represents the returned data in response to a request operation.
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * UploadCredentials
    * AccessKeyId
    * SecretAccessKey
    * SessionToken

### ResolveAliasInput
* ResolveAliasInput `object`: Represents the input for a request operation.
  * AliasId **required**

### ResolveAliasOutput
* ResolveAliasOutput `object`: Represents the returned data in response to a request operation.
  * FleetArn
  * FleetId

### ResourceCreationLimitPolicy
* ResourceCreationLimitPolicy `object`: <p>A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example: Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>
  * NewGameSessionsPerCreator
  * PolicyPeriodInMinutes

### ResumeGameServerGroupInput
* ResumeGameServerGroupInput `object`
  * GameServerGroupName **required**
  * ResumeActions **required**
    * items [GameServerGroupAction](#gameservergroupaction)

### ResumeGameServerGroupOutput
* ResumeGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### RoutingStrategy
* RoutingStrategy `object`: <p>The routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
  * FleetId
  * Message
  * Type

### RoutingStrategyType
* RoutingStrategyType `string` (values: SIMPLE, TERMINAL)

### RuleSetBody
* RuleSetBody `string`

### RuleSetLimit
* RuleSetLimit `integer`

### RuntimeConfiguration
* RuntimeConfiguration `object`: <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
  * GameSessionActivationTimeoutSeconds
  * MaxConcurrentGameSessionActivations
  * ServerProcesses
    * items [ServerProcess](#serverprocess)

### S3Location
* S3Location `object`: The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. 
  * Bucket
  * Key
  * ObjectVersion
  * RoleArn

### ScalingAdjustmentType
* ScalingAdjustmentType `string` (values: ChangeInCapacity, ExactCapacity, PercentChangeInCapacity)

### ScalingPolicy
* ScalingPolicy `object`: <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * ComparisonOperator
  * EvaluationPeriods
  * FleetId
  * MetricName
  * Name
  * PolicyType
  * ScalingAdjustment
  * ScalingAdjustmentType
  * Status
  * TargetConfiguration
    * TargetValue **required**
  * Threshold

### ScalingPolicyList
* ScalingPolicyList `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingStatusType
* ScalingStatusType `string` (values: ACTIVE, UPDATE_REQUESTED, UPDATING, DELETE_REQUESTED, DELETING, DELETED, ERROR)

### Script
* Script `object`: <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
  * CreationTime
  * Name
  * ScriptArn
  * ScriptId
  * SizeOnDisk
  * StorageLocation [S3Location](#s3location)
  * Version

### ScriptArn
* ScriptArn `string`

### ScriptId
* ScriptId `string`

### ScriptIdOrArn
* ScriptIdOrArn `string`

### ScriptList
* ScriptList `array`
  * items [Script](#script)

### SearchGameSessionsInput
* SearchGameSessionsInput `object`: Represents the input for a request operation.
  * AliasId
  * FilterExpression
  * FleetId
  * Limit
  * NextToken
  * SortExpression

### SearchGameSessionsOutput
* SearchGameSessionsOutput `object`: Represents the returned data in response to a request operation.
  * GameSessions
    * items [GameSession](#gamesession)
  * NextToken

### ServerProcess
* ServerProcess `object`: A set of instructions for launching server processes on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instruction set identifies the location of the custom game build executable or Realtime launch script, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's <code> <a>RuntimeConfiguration</a> </code>.
  * ConcurrentExecutions **required**
  * LaunchPath **required**
  * Parameters

### ServerProcessList
* ServerProcessList `array`
  * items [ServerProcess](#serverprocess)

### SnsArnStringModel
* SnsArnStringModel `string`

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### StartFleetActionsInput
* StartFleetActionsInput `object`
  * Actions **required**
    * items [FleetAction](#fleetaction)
  * FleetId **required**

### StartFleetActionsOutput
* StartFleetActionsOutput `object`

### StartGameSessionPlacementInput
* StartGameSessionPlacementInput `object`: Represents the input for a request operation.
  * DesiredPlayerSessions
    * items [DesiredPlayerSession](#desiredplayersession)
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionName
  * GameSessionQueueName **required**
  * MaximumPlayerSessionCount **required**
  * PlacementId **required**
  * PlayerLatencies
    * items [PlayerLatency](#playerlatency)

### StartGameSessionPlacementOutput
* StartGameSessionPlacementOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionPlacement
    * DnsName
    * EndTime
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionArn
    * GameSessionData
    * GameSessionId
    * GameSessionName
    * GameSessionQueueName
    * GameSessionRegion
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * PlacedPlayerSessions
      * items [PlacedPlayerSession](#placedplayersession)
    * PlacementId
    * PlayerLatencies
      * items [PlayerLatency](#playerlatency)
    * Port
    * StartTime
    * Status

### StartMatchBackfillInput
* StartMatchBackfillInput `object`: Represents the input for a request operation.
  * ConfigurationName **required**
  * GameSessionArn
  * Players **required**
    * items [Player](#player)
  * TicketId

### StartMatchBackfillOutput
* StartMatchBackfillOutput `object`: Represents the returned data in response to a request operation.
  * MatchmakingTicket
    * ConfigurationArn
    * ConfigurationName
    * EndTime
    * EstimatedWaitTime
    * GameSessionConnectionInfo
      * DnsName
      * GameSessionArn
      * IpAddress
      * MatchedPlayerSessions
        * items [MatchedPlayerSession](#matchedplayersession)
      * Port
    * Players
      * items [Player](#player)
    * StartTime
    * Status
    * StatusMessage
    * StatusReason
    * TicketId

### StartMatchmakingInput
* StartMatchmakingInput `object`: Represents the input for a request operation.
  * ConfigurationName **required**
  * Players **required**
    * items [Player](#player)
  * TicketId

### StartMatchmakingOutput
* StartMatchmakingOutput `object`: Represents the returned data in response to a request operation.
  * MatchmakingTicket
    * ConfigurationArn
    * ConfigurationName
    * EndTime
    * EstimatedWaitTime
    * GameSessionConnectionInfo
      * DnsName
      * GameSessionArn
      * IpAddress
      * MatchedPlayerSessions
        * items [MatchedPlayerSession](#matchedplayersession)
      * Port
    * Players
      * items [Player](#player)
    * StartTime
    * Status
    * StatusMessage
    * StatusReason
    * TicketId

### StopFleetActionsInput
* StopFleetActionsInput `object`
  * Actions **required**
    * items [FleetAction](#fleetaction)
  * FleetId **required**

### StopFleetActionsOutput
* StopFleetActionsOutput `object`

### StopGameSessionPlacementInput
* StopGameSessionPlacementInput `object`: Represents the input for a request operation.
  * PlacementId **required**

### StopGameSessionPlacementOutput
* StopGameSessionPlacementOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionPlacement
    * DnsName
    * EndTime
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionArn
    * GameSessionData
    * GameSessionId
    * GameSessionName
    * GameSessionQueueName
    * GameSessionRegion
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * PlacedPlayerSessions
      * items [PlacedPlayerSession](#placedplayersession)
    * PlacementId
    * PlayerLatencies
      * items [PlayerLatency](#playerlatency)
    * Port
    * StartTime
    * Status

### StopMatchmakingInput
* StopMatchmakingInput `object`: Represents the input for a request operation.
  * TicketId **required**

### StopMatchmakingOutput
* StopMatchmakingOutput `object`

### StringDoubleMap
* StringDoubleMap `object`

### StringList
* StringList `array`
  * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### StringModel
* StringModel `string`

### SuspendGameServerGroupInput
* SuspendGameServerGroupInput `object`
  * GameServerGroupName **required**
  * SuspendActions **required**
    * items [GameServerGroupAction](#gameservergroupaction)

### SuspendGameServerGroupOutput
* SuspendGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### Tag
* Tag `object`: <p> A label that can be assigned to a GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> AWS Tagging Strategies</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> <li> <p> <a>ListTagsForResource</a> </p> </li> </ul>
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TaggingFailedException


### TargetConfiguration
* TargetConfiguration `object`: <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * TargetValue **required**

### TargetTrackingConfiguration
* TargetTrackingConfiguration `object`: <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a>GameServerGroupAutoScalingPolicy</a>. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>
  * TargetValue **required**

### TerminalRoutingStrategyException


### Timestamp
* Timestamp `string`

### UnauthorizedException


### UnsupportedRegionException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAliasInput
* UpdateAliasInput `object`: Represents the input for a request operation.
  * AliasId **required**
  * Description
  * Name
  * RoutingStrategy
    * FleetId
    * Message
    * Type

### UpdateAliasOutput
* UpdateAliasOutput `object`: Represents the returned data in response to a request operation.
  * Alias
    * AliasArn
    * AliasId
    * CreationTime
    * Description
    * LastUpdatedTime
    * Name
    * RoutingStrategy
      * FleetId
      * Message
      * Type

### UpdateBuildInput
* UpdateBuildInput `object`: Represents the input for a request operation.
  * BuildId **required**
  * Name
  * Version

### UpdateBuildOutput
* UpdateBuildOutput `object`: Represents the returned data in response to a request operation.
  * Build
    * BuildArn
    * BuildId
    * CreationTime
    * Name
    * OperatingSystem
    * SizeOnDisk
    * Status
    * Version

### UpdateFleetAttributesInput
* UpdateFleetAttributesInput `object`: Represents the input for a request operation.
  * Description
  * FleetId **required**
  * MetricGroups
    * items [MetricGroup](#metricgroup)
  * Name
  * NewGameSessionProtectionPolicy
  * ResourceCreationLimitPolicy
    * NewGameSessionsPerCreator
    * PolicyPeriodInMinutes

### UpdateFleetAttributesOutput
* UpdateFleetAttributesOutput `object`: Represents the returned data in response to a request operation.
  * FleetId

### UpdateFleetCapacityInput
* UpdateFleetCapacityInput `object`: Represents the input for a request operation.
  * DesiredInstances
  * FleetId **required**
  * MaxSize
  * MinSize

### UpdateFleetCapacityOutput
* UpdateFleetCapacityOutput `object`: Represents the returned data in response to a request operation.
  * FleetId

### UpdateFleetPortSettingsInput
* UpdateFleetPortSettingsInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * InboundPermissionAuthorizations
    * items [IpPermission](#ippermission)
  * InboundPermissionRevocations
    * items [IpPermission](#ippermission)

### UpdateFleetPortSettingsOutput
* UpdateFleetPortSettingsOutput `object`: Represents the returned data in response to a request operation.
  * FleetId

### UpdateGameServerGroupInput
* UpdateGameServerGroupInput `object`
  * BalancingStrategy
  * GameServerGroupName **required**
  * GameServerProtectionPolicy
  * InstanceDefinitions
    * items [InstanceDefinition](#instancedefinition)
  * RoleArn

### UpdateGameServerGroupOutput
* UpdateGameServerGroupOutput `object`
  * GameServerGroup
    * AutoScalingGroupArn
    * BalancingStrategy
    * CreationTime
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerProtectionPolicy
    * InstanceDefinitions
      * items [InstanceDefinition](#instancedefinition)
    * LastUpdatedTime
    * RoleArn
    * Status
    * StatusReason
    * SuspendedActions
      * items [GameServerGroupAction](#gameservergroupaction)

### UpdateGameServerInput
* UpdateGameServerInput `object`
  * GameServerData
  * GameServerGroupName **required**
  * GameServerId **required**
  * HealthCheck
  * UtilizationStatus

### UpdateGameServerOutput
* UpdateGameServerOutput `object`
  * GameServer
    * ClaimStatus
    * ConnectionInfo
    * GameServerData
    * GameServerGroupArn
    * GameServerGroupName
    * GameServerId
    * InstanceId
    * LastClaimTime
    * LastHealthCheckTime
    * RegistrationTime
    * UtilizationStatus

### UpdateGameSessionInput
* UpdateGameSessionInput `object`: Represents the input for a request operation.
  * GameSessionId **required**
  * MaximumPlayerSessionCount
  * Name
  * PlayerSessionCreationPolicy
  * ProtectionPolicy

### UpdateGameSessionOutput
* UpdateGameSessionOutput `object`: Represents the returned data in response to a request operation.
  * GameSession
    * CreationTime
    * CreatorId
    * CurrentPlayerSessionCount
    * DnsName
    * FleetArn
    * FleetId
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionData
    * GameSessionId
    * IpAddress
    * MatchmakerData
    * MaximumPlayerSessionCount
    * Name
    * PlayerSessionCreationPolicy
    * Port
    * Status
    * StatusReason
    * TerminationTime

### UpdateGameSessionQueueInput
* UpdateGameSessionQueueInput `object`: Represents the input for a request operation.
  * Destinations
    * items [GameSessionQueueDestination](#gamesessionqueuedestination)
  * Name **required**
  * PlayerLatencyPolicies
    * items [PlayerLatencyPolicy](#playerlatencypolicy)
  * TimeoutInSeconds

### UpdateGameSessionQueueOutput
* UpdateGameSessionQueueOutput `object`: Represents the returned data in response to a request operation.
  * GameSessionQueue
    * Destinations
      * items [GameSessionQueueDestination](#gamesessionqueuedestination)
    * GameSessionQueueArn
    * Name
    * PlayerLatencyPolicies
      * items [PlayerLatencyPolicy](#playerlatencypolicy)
    * TimeoutInSeconds

### UpdateMatchmakingConfigurationInput
* UpdateMatchmakingConfigurationInput `object`: Represents the input for a request operation.
  * AcceptanceRequired
  * AcceptanceTimeoutSeconds
  * AdditionalPlayerCount
  * BackfillMode
  * CustomEventData
  * Description
  * FlexMatchMode
  * GameProperties
    * items [GameProperty](#gameproperty)
  * GameSessionData
  * GameSessionQueueArns
    * items [ArnStringModel](#arnstringmodel)
  * Name **required**
  * NotificationTarget
  * RequestTimeoutSeconds
  * RuleSetName

### UpdateMatchmakingConfigurationOutput
* UpdateMatchmakingConfigurationOutput `object`: Represents the returned data in response to a request operation.
  * Configuration
    * AcceptanceRequired
    * AcceptanceTimeoutSeconds
    * AdditionalPlayerCount
    * BackfillMode
    * ConfigurationArn
    * CreationTime
    * CustomEventData
    * Description
    * FlexMatchMode
    * GameProperties
      * items [GameProperty](#gameproperty)
    * GameSessionData
    * GameSessionQueueArns
      * items [ArnStringModel](#arnstringmodel)
    * Name
    * NotificationTarget
    * RequestTimeoutSeconds
    * RuleSetArn
    * RuleSetName

### UpdateRuntimeConfigurationInput
* UpdateRuntimeConfigurationInput `object`: Represents the input for a request operation.
  * FleetId **required**
  * RuntimeConfiguration **required**
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)

### UpdateRuntimeConfigurationOutput
* UpdateRuntimeConfigurationOutput `object`: Represents the returned data in response to a request operation.
  * RuntimeConfiguration
    * GameSessionActivationTimeoutSeconds
    * MaxConcurrentGameSessionActivations
    * ServerProcesses
      * items [ServerProcess](#serverprocess)

### UpdateScriptInput
* UpdateScriptInput `object`
  * Name
  * ScriptId **required**
  * StorageLocation
    * Bucket
    * Key
    * ObjectVersion
    * RoleArn
  * Version
  * ZipFile

### UpdateScriptOutput
* UpdateScriptOutput `object`
  * Script
    * CreationTime
    * Name
    * ScriptArn
    * ScriptId
    * SizeOnDisk
    * StorageLocation [S3Location](#s3location)
    * Version

### ValidateMatchmakingRuleSetInput
* ValidateMatchmakingRuleSetInput `object`: Represents the input for a request operation.
  * RuleSetBody **required**

### ValidateMatchmakingRuleSetOutput
* ValidateMatchmakingRuleSetOutput `object`: Represents the returned data in response to a request operation.
  * Valid

### VpcPeeringAuthorization
* VpcPeeringAuthorization `object`: <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
  * CreationTime
  * ExpirationTime
  * GameLiftAwsAccountId
  * PeerVpcAwsAccountId
  * PeerVpcId

### VpcPeeringAuthorizationList
* VpcPeeringAuthorizationList `array`
  * items [VpcPeeringAuthorization](#vpcpeeringauthorization)

### VpcPeeringConnection
* VpcPeeringConnection `object`: <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
  * FleetArn
  * FleetId
  * GameLiftVpcId
  * IpV4CidrBlock
  * PeerVpcId
  * Status
    * Code
    * Message
  * VpcPeeringConnectionId

### VpcPeeringConnectionList
* VpcPeeringConnectionList `array`
  * items [VpcPeeringConnection](#vpcpeeringconnection)

### VpcPeeringConnectionStatus
* VpcPeeringConnectionStatus `object`: Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>.
  * Code
  * Message

### VpcSubnet
* VpcSubnet `string`

### VpcSubnets
* VpcSubnets `array`
  * items [VpcSubnet](#vpcsubnet)

### WeightedCapacity
* WeightedCapacity `string`

### WholeNumber
* WholeNumber `integer`

### ZipBlob
* ZipBlob `string`


