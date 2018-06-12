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

amazonaws_gamelift.AcceptMatch({
  "TicketId": "",
  "PlayerIds": [],
  "AcceptanceType": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon GameLift Service</fullname> <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing resources and deploy your game servers, (2) run game sessions and get players into games, (3) automatically scale your resources to meet player demand and manage costs, and (4) track in-depth metrics on game server performance and player usage.</p> <p>The Amazon GameLift service API includes two important function sets:</p> <ul> <li> <p> <b>Manage game sessions and player access</b> -- Retrieve information on available game sessions; create new game sessions; send player requests to join a game session.</p> </li> <li> <p> <b>Configure and manage game server resources</b> -- Manage builds, fleets, queues, and aliases; set auto-scaling policies; retrieve logs and metrics.</p> </li> </ul> <p>This reference guide describes the low-level service API for Amazon GameLift. You can use the API functionality with these tools: </p> <ul> <li> <p>The Amazon Web Services software development kit (<a href="http://aws.amazon.com/tools/#sdk">AWS SDK</a>) is available in <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-supported.html#gamelift-supported-clients">multiple languages</a> including C++ and C#. Use the SDK to access the API programmatically from an application, such as a game client.</p> </li> <li> <p>The <a href="http://aws.amazon.com/cli/">AWS command-line interface</a> (CLI) tool is primarily useful for handling administrative actions, such as setting up and managing Amazon GameLift settings and resources. You can use the AWS CLI to manage all of your AWS services.</p> </li> <li> <p>The <a href="https://console.aws.amazon.com/gamelift/home">AWS Management Console</a> for Amazon GameLift provides a web interface to manage your Amazon GameLift settings and resources. The console includes a dashboard for tracking key resources, including builds and fleets, and displays usage and performance metrics for your games as customizable graphs.</p> </li> <li> <p>Amazon GameLift Local is a tool for testing your game's integration with Amazon GameLift before deploying it on the service. This tools supports a subset of key API actions, which can be called from either the AWS CLI or programmatically. See <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing-local.html">Testing an Integration</a>.</p> </li> </ul> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/"> Developer Guide</a> -- Read about Amazon GameLift features and how to use them. </p> </li> <li> <p> <a href="https://gamedev.amazon.com/forums/tutorials">Tutorials</a> -- Get started fast with walkthroughs and sample projects.</p> </li> <li> <p> <a href="http://aws.amazon.com/blogs/gamedev/">GameDev Blog</a> -- Stay up to date with new features and techniques.</p> </li> <li> <p> <a href="https://gamedev.amazon.com/forums/spaces/123/gamelift-discussion.html">GameDev Forums</a> -- Connect with the GameDev community.</p> </li> <li> <p> <a href="http://aws.amazon.com/releasenotes/Amazon-GameLift/">Release notes</a> and <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/doc-history.html">document history</a> -- Stay current with updates to the Amazon GameLift service, SDKs, and documentation. </p> </li> </ul> <p> <b>API SUMMARY</b> </p> <p>This list offers a functional overview of the Amazon GameLift service API.</p> <p> <b>Managing Games and Players</b> </p> <p>Use these actions to start new game sessions, find existing game sessions, track game session status and other information, and enable player access to game sessions.</p> <ul> <li> <p> <b>Discover existing game sessions</b> </p> <ul> <li> <p> <a>SearchGameSessions</a> -- Retrieve all available game sessions or search for game sessions that match a set of criteria. </p> </li> </ul> </li> <li> <p> <b>Start new game sessions</b> </p> <ul> <li> <p>Start new games with Queues to find the best available hosting resources across multiple regions, minimize player latency, and balance game session activity for efficiency and cost effectiveness. </p> <ul> <li> <p> <a>StartGameSessionPlacement</a> -- Request a new game session placement and add one or more players to it.</p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> -- Get details on a placement request, including status.</p> </li> <li> <p> <a>StopGameSessionPlacement</a> -- Cancel a placement request. </p> </li> </ul> </li> <li> <p> <a>CreateGameSession</a> -- Start a new game session on a specific fleet. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> <li> <p> <b>Match players to game sessions with FlexMatch matchmaking</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> -- Request matchmaking for one players or a group who want to play together. </p> </li> <li> <p> <a>StartMatchBackfill</a> - Request additional player matches to fill empty slots in an existing game session. </p> </li> <li> <p> <a>DescribeMatchmaking</a> -- Get details on a matchmaking request, including status.</p> </li> <li> <p> <a>AcceptMatch</a> -- Register that a player accepts a proposed match, for matches that require player acceptance. </p> </li> <li> <p> <a>StopMatchmaking</a> -- Cancel a matchmaking request. </p> </li> </ul> </li> <li> <p> <b>Manage game session data</b> </p> <ul> <li> <p> <a>DescribeGameSessions</a> -- Retrieve metadata for one or more game sessions, including length of time active and current player count. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> -- Retrieve metadata and the game session protection setting for one or more game sessions.</p> </li> <li> <p> <a>UpdateGameSession</a> -- Change game session settings, such as maximum player count and join policy.</p> </li> <li> <p> <a>GetGameSessionLogUrl</a> -- Get the location of saved logs for a game session.</p> </li> </ul> </li> <li> <p> <b>Manage player sessions</b> </p> <ul> <li> <p> <a>CreatePlayerSession</a> -- Send a request for a player to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>CreatePlayerSessions</a> -- Send a request for multiple players to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribePlayerSessions</a> -- Get details on player activity, including status, playing time, and player data. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> </ul> <p> <b>Setting Up and Managing Game Servers</b> </p> <p>When setting up Amazon GameLift resources for your game, you first <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">create a game build</a> and upload it to Amazon GameLift. You can then use these actions to configure and manage a fleet of resources to run your game servers, scale capacity to meet player demand, access performance and utilization metrics, and more.</p> <ul> <li> <p> <b>Manage game builds</b> </p> <ul> <li> <p> <a>CreateBuild</a> -- Create a new build using files stored in an Amazon S3 bucket. To create a build and upload files from a local path, use the AWS CLI command <code>upload-build</code>.</p> </li> <li> <p> <a>ListBuilds</a> -- Get a list of all builds uploaded to a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeBuild</a> -- Retrieve information associated with a build.</p> </li> <li> <p> <a>UpdateBuild</a> -- Change build metadata, including build name and version.</p> </li> <li> <p> <a>DeleteBuild</a> -- Remove a build from Amazon GameLift.</p> </li> </ul> </li> <li> <p> <b>Manage fleets</b> </p> <ul> <li> <p> <a>CreateFleet</a> -- Configure and activate a new fleet to run a build's game servers.</p> </li> <li> <p> <a>ListFleets</a> -- Get a list of all fleet IDs in a Amazon GameLift region (all statuses).</p> </li> <li> <p> <a>DeleteFleet</a> -- Terminate a fleet that is no longer running game servers or hosting players.</p> </li> <li> <p>View / update fleet configurations.</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> / <a>UpdateFleetAttributes</a> -- View or change a fleet's metadata and settings for game session protection and resource creation limits.</p> </li> <li> <p> <a>DescribeFleetPortSettings</a> / <a>UpdateFleetPortSettings</a> -- View or change the inbound permissions (IP address and port setting ranges) allowed for a fleet.</p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> / <a>UpdateRuntimeConfiguration</a> -- View or change what server processes (and how many) to run on each instance in a fleet.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Control fleet capacity</b> </p> <ul> <li> <p> <a>DescribeEC2InstanceLimits</a> -- Retrieve maximum number of instances allowed for the current AWS account and the current usage level.</p> </li> <li> <p> <a>DescribeFleetCapacity</a> / <a>UpdateFleetCapacity</a> -- Retrieve the capacity settings and the current number of instances in a fleet; adjust fleet capacity settings to scale up or down.</p> </li> <li> <p>Autoscale -- Manage auto-scaling rules and apply them to a fleet.</p> <ul> <li> <p> <a>PutScalingPolicy</a> -- Create a new auto-scaling policy, or update an existing one.</p> </li> <li> <p> <a>DescribeScalingPolicies</a> -- Retrieve an existing auto-scaling policy.</p> </li> <li> <p> <a>DeleteScalingPolicy</a> -- Delete an auto-scaling policy and stop it from affecting a fleet's capacity.</p> </li> <li> <p> <a>StartFleetActions</a> -- Restart a fleet's auto-scaling policies.</p> </li> <li> <p> <a>StopFleetActions</a> -- Suspend a fleet's auto-scaling policies.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Manage VPC peering connections for fleets</b> </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> -- Authorize a peering connection to one of your VPCs.</p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> -- Retrieve valid peering connection authorizations. </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> -- Delete a peering connection authorization.</p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> -- Establish a peering connection between the VPC for a Amazon GameLift fleet and one of your VPCs.</p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> -- Retrieve information on active or pending VPC peering connections with a Amazon GameLift fleet.</p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> -- Delete a VPC peering connection with a Amazon GameLift fleet.</p> </li> </ul> </li> <li> <p> <b>Access fleet activity statistics</b> </p> <ul> <li> <p> <a>DescribeFleetUtilization</a> -- Get current data on the number of server processes, game sessions, and players currently active on a fleet.</p> </li> <li> <p> <a>DescribeFleetEvents</a> -- Get a fleet's logged events for a specified time span.</p> </li> <li> <p> <a>DescribeGameSessions</a> -- Retrieve metadata associated with one or more game sessions, including length of time active and current player count.</p> </li> </ul> </li> <li> <p> <b>Remotely access an instance</b> </p> <ul> <li> <p> <a>DescribeInstances</a> -- Get information on each instance in a fleet, including instance ID, IP address, and status.</p> </li> <li> <p> <a>GetInstanceAccess</a> -- Request access credentials needed to remotely connect to a specified instance in a fleet.</p> </li> </ul> </li> <li> <p> <b>Manage fleet aliases</b> </p> <ul> <li> <p> <a>CreateAlias</a> -- Define a new alias and optionally assign it to a fleet.</p> </li> <li> <p> <a>ListAliases</a> -- Get all fleet aliases defined in a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeAlias</a> -- Retrieve information on an existing alias.</p> </li> <li> <p> <a>UpdateAlias</a> -- Change settings for a alias, such as redirecting it from one fleet to another.</p> </li> <li> <p> <a>DeleteAlias</a> -- Remove an alias from the region.</p> </li> <li> <p> <a>ResolveAlias</a> -- Get the fleet ID that a specified alias points to.</p> </li> </ul> </li> <li> <p> <b>Manage game session queues</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> -- Create a queue for processing requests for new game sessions. </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> -- Retrieve game session queues defined in a Amazon GameLift region.</p> </li> <li> <p> <a>UpdateGameSessionQueue</a> -- Change the configuration of a game session queue.</p> </li> <li> <p> <a>DeleteGameSessionQueue</a> -- Remove a game session queue from the region.</p> </li> </ul> </li> <li> <p> <b>Manage FlexMatch resources</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> -- Create a matchmaking configuration with instructions for building a player group and placing in a new game session. </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> -- Retrieve matchmaking configurations defined a Amazon GameLift region.</p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> -- Change settings for matchmaking configuration. queue.</p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> -- Remove a matchmaking configuration from the region.</p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> -- Create a set of rules to use when searching for player matches. </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> -- Retrieve matchmaking rule sets defined in a Amazon GameLift region.</p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> -- Verify syntax for a set of matchmaking rules. </p> </li> </ul> </li> </ul>

## Actions

### AcceptMatch



```js
amazonaws_gamelift.AcceptMatch({
  "TicketId": "",
  "PlayerIds": [],
  "AcceptanceType": ""
}, context)
```

#### Input
* input `object`
  * AcceptanceType **required** [AcceptanceType](#acceptancetype)
  * PlayerIds **required** [StringList](#stringlist)
  * TicketId **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [AcceptMatchOutput](#acceptmatchoutput)

### CreateAlias



```js
amazonaws_gamelift.CreateAlias({
  "Name": "",
  "RoutingStrategy": {}
}, context)
```

#### Input
* input `object`
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Name **required** [NonBlankAndLengthConstraintString](#nonblankandlengthconstraintstring)
  * RoutingStrategy **required** [RoutingStrategy](#routingstrategy)

#### Output
* output [CreateAliasOutput](#createaliasoutput)

### CreateBuild



```js
amazonaws_gamelift.CreateBuild({}, context)
```

#### Input
* input `object`
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * StorageLocation [S3Location](#s3location)
  * Version [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreateBuildOutput](#createbuildoutput)

### CreateFleet



```js
amazonaws_gamelift.CreateFleet({
  "Name": "",
  "BuildId": "",
  "EC2InstanceType": ""
}, context)
```

#### Input
* input `object`
  * BuildId **required** [BuildId](#buildid)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * EC2InboundPermissions [IpPermissionsList](#ippermissionslist)
  * EC2InstanceType **required** [EC2InstanceType](#ec2instancetype)
  * FleetType [FleetType](#fleettype)
  * LogPaths [StringList](#stringlist)
  * MetricGroups [MetricGroupList](#metricgrouplist)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * NewGameSessionProtectionPolicy [ProtectionPolicy](#protectionpolicy)
  * PeerVpcAwsAccountId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ResourceCreationLimitPolicy [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy)
  * RuntimeConfiguration [RuntimeConfiguration](#runtimeconfiguration)
  * ServerLaunchParameters [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ServerLaunchPath [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreateFleetOutput](#createfleetoutput)

### CreateGameSession



```js
amazonaws_gamelift.CreateGameSession({
  "MaximumPlayerSessionCount": 0
}, context)
```

#### Input
* input `object`
  * AliasId [AliasId](#aliasid)
  * CreatorId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId [FleetId](#fleetid)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionId [IdStringModel](#idstringmodel)
  * IdempotencyToken [IdStringModel](#idstringmodel)
  * MaximumPlayerSessionCount **required** [WholeNumber](#wholenumber)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreateGameSessionOutput](#creategamesessionoutput)

### CreateGameSessionQueue



```js
amazonaws_gamelift.CreateGameSessionQueue({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Destinations [GameSessionQueueDestinationList](#gamesessionqueuedestinationlist)
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)
  * PlayerLatencyPolicies [PlayerLatencyPolicyList](#playerlatencypolicylist)
  * TimeoutInSeconds [WholeNumber](#wholenumber)

#### Output
* output [CreateGameSessionQueueOutput](#creategamesessionqueueoutput)

### CreateMatchmakingConfiguration



```js
amazonaws_gamelift.CreateMatchmakingConfiguration({
  "Name": "",
  "GameSessionQueueArns": [],
  "RequestTimeoutSeconds": 0,
  "AcceptanceRequired": true,
  "RuleSetName": ""
}, context)
```

#### Input
* input `object`
  * AcceptanceRequired **required** [BooleanModel](#booleanmodel)
  * AcceptanceTimeoutSeconds [MatchmakingAcceptanceTimeoutInteger](#matchmakingacceptancetimeoutinteger)
  * AdditionalPlayerCount [WholeNumber](#wholenumber)
  * CustomEventData [CustomEventData](#customeventdata)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionQueueArns **required** [QueueArnsList](#queuearnslist)
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * NotificationTarget [SnsArnStringModel](#snsarnstringmodel)
  * RequestTimeoutSeconds **required** [MatchmakingRequestTimeoutInteger](#matchmakingrequesttimeoutinteger)
  * RuleSetName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [CreateMatchmakingConfigurationOutput](#creatematchmakingconfigurationoutput)

### CreateMatchmakingRuleSet



```js
amazonaws_gamelift.CreateMatchmakingRuleSet({
  "Name": "",
  "RuleSetBody": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * RuleSetBody **required** [RuleSetBody](#rulesetbody)

#### Output
* output [CreateMatchmakingRuleSetOutput](#creatematchmakingrulesetoutput)

### CreatePlayerSession



```js
amazonaws_gamelift.CreatePlayerSession({
  "GameSessionId": "",
  "PlayerId": ""
}, context)
```

#### Input
* input `object`
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * PlayerData [PlayerData](#playerdata)
  * PlayerId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreatePlayerSessionOutput](#createplayersessionoutput)

### CreatePlayerSessions



```js
amazonaws_gamelift.CreatePlayerSessions({
  "GameSessionId": "",
  "PlayerIds": []
}, context)
```

#### Input
* input `object`
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * PlayerDataMap [PlayerDataMap](#playerdatamap)
  * PlayerIds **required** [PlayerIdList](#playeridlist)

#### Output
* output [CreatePlayerSessionsOutput](#createplayersessionsoutput)

### CreateVpcPeeringAuthorization



```js
amazonaws_gamelift.CreateVpcPeeringAuthorization({
  "GameLiftAwsAccountId": "",
  "PeerVpcId": ""
}, context)
```

#### Input
* input `object`
  * GameLiftAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreateVpcPeeringAuthorizationOutput](#createvpcpeeringauthorizationoutput)

### CreateVpcPeeringConnection



```js
amazonaws_gamelift.CreateVpcPeeringConnection({
  "FleetId": "",
  "PeerVpcAwsAccountId": "",
  "PeerVpcId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * PeerVpcAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [CreateVpcPeeringConnectionOutput](#createvpcpeeringconnectionoutput)

### DeleteAlias



```js
amazonaws_gamelift.DeleteAlias({
  "AliasId": ""
}, context)
```

#### Input
* input `object`
  * AliasId **required** [AliasId](#aliasid)

#### Output
*Output schema unknown*

### DeleteBuild



```js
amazonaws_gamelift.DeleteBuild({
  "BuildId": ""
}, context)
```

#### Input
* input `object`
  * BuildId **required** [BuildId](#buildid)

#### Output
*Output schema unknown*

### DeleteFleet



```js
amazonaws_gamelift.DeleteFleet({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)

#### Output
*Output schema unknown*

### DeleteGameSessionQueue



```js
amazonaws_gamelift.DeleteGameSessionQueue({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)

#### Output
* output [DeleteGameSessionQueueOutput](#deletegamesessionqueueoutput)

### DeleteMatchmakingConfiguration



```js
amazonaws_gamelift.DeleteMatchmakingConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [DeleteMatchmakingConfigurationOutput](#deletematchmakingconfigurationoutput)

### DeleteScalingPolicy



```js
amazonaws_gamelift.DeleteScalingPolicy({
  "Name": "",
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
*Output schema unknown*

### DeleteVpcPeeringAuthorization



```js
amazonaws_gamelift.DeleteVpcPeeringAuthorization({
  "GameLiftAwsAccountId": "",
  "PeerVpcId": ""
}, context)
```

#### Input
* input `object`
  * GameLiftAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DeleteVpcPeeringAuthorizationOutput](#deletevpcpeeringauthorizationoutput)

### DeleteVpcPeeringConnection



```js
amazonaws_gamelift.DeleteVpcPeeringConnection({
  "FleetId": "",
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * VpcPeeringConnectionId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DeleteVpcPeeringConnectionOutput](#deletevpcpeeringconnectionoutput)

### DescribeAlias



```js
amazonaws_gamelift.DescribeAlias({
  "AliasId": ""
}, context)
```

#### Input
* input `object`
  * AliasId **required** [AliasId](#aliasid)

#### Output
* output [DescribeAliasOutput](#describealiasoutput)

### DescribeBuild



```js
amazonaws_gamelift.DescribeBuild({
  "BuildId": ""
}, context)
```

#### Input
* input `object`
  * BuildId **required** [BuildId](#buildid)

#### Output
* output [DescribeBuildOutput](#describebuildoutput)

### DescribeEC2InstanceLimits



```js
amazonaws_gamelift.DescribeEC2InstanceLimits({}, context)
```

#### Input
* input `object`
  * EC2InstanceType [EC2InstanceType](#ec2instancetype)

#### Output
* output [DescribeEC2InstanceLimitsOutput](#describeec2instancelimitsoutput)

### DescribeFleetAttributes



```js
amazonaws_gamelift.DescribeFleetAttributes({}, context)
```

#### Input
* input `object`
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeFleetAttributesOutput](#describefleetattributesoutput)

### DescribeFleetCapacity



```js
amazonaws_gamelift.DescribeFleetCapacity({}, context)
```

#### Input
* input `object`
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeFleetCapacityOutput](#describefleetcapacityoutput)

### DescribeFleetEvents



```js
amazonaws_gamelift.DescribeFleetEvents({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * EndTime [Timestamp](#timestamp)
  * FleetId **required** [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StartTime [Timestamp](#timestamp)

#### Output
* output [DescribeFleetEventsOutput](#describefleeteventsoutput)

### DescribeFleetPortSettings



```js
amazonaws_gamelift.DescribeFleetPortSettings({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)

#### Output
* output [DescribeFleetPortSettingsOutput](#describefleetportsettingsoutput)

### DescribeFleetUtilization



```js
amazonaws_gamelift.DescribeFleetUtilization({}, context)
```

#### Input
* input `object`
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeFleetUtilizationOutput](#describefleetutilizationoutput)

### DescribeGameSessionDetails



```js
amazonaws_gamelift.DescribeGameSessionDetails({}, context)
```

#### Input
* input `object`
  * AliasId [AliasId](#aliasid)
  * FleetId [FleetId](#fleetid)
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeGameSessionDetailsOutput](#describegamesessiondetailsoutput)

### DescribeGameSessionPlacement



```js
amazonaws_gamelift.DescribeGameSessionPlacement({
  "PlacementId": ""
}, context)
```

#### Input
* input `object`
  * PlacementId **required** [IdStringModel](#idstringmodel)

#### Output
* output [DescribeGameSessionPlacementOutput](#describegamesessionplacementoutput)

### DescribeGameSessionQueues



```js
amazonaws_gamelift.DescribeGameSessionQueues({}, context)
```

#### Input
* input `object`
  * Limit [PositiveInteger](#positiveinteger)
  * Names [GameSessionQueueNameList](#gamesessionqueuenamelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeGameSessionQueuesOutput](#describegamesessionqueuesoutput)

### DescribeGameSessions



```js
amazonaws_gamelift.DescribeGameSessions({}, context)
```

#### Input
* input `object`
  * AliasId [AliasId](#aliasid)
  * FleetId [FleetId](#fleetid)
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeGameSessionsOutput](#describegamesessionsoutput)

### DescribeInstances



```js
amazonaws_gamelift.DescribeInstances({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * InstanceId [InstanceId](#instanceid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeInstancesOutput](#describeinstancesoutput)

### DescribeMatchmaking



```js
amazonaws_gamelift.DescribeMatchmaking({
  "TicketIds": []
}, context)
```

#### Input
* input `object`
  * TicketIds **required** [MatchmakingIdList](#matchmakingidlist)

#### Output
* output [DescribeMatchmakingOutput](#describematchmakingoutput)

### DescribeMatchmakingConfigurations



```js
amazonaws_gamelift.DescribeMatchmakingConfigurations({}, context)
```

#### Input
* input `object`
  * Limit [PositiveInteger](#positiveinteger)
  * Names [MatchmakingIdList](#matchmakingidlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [DescribeMatchmakingConfigurationsOutput](#describematchmakingconfigurationsoutput)

### DescribeMatchmakingRuleSets



```js
amazonaws_gamelift.DescribeMatchmakingRuleSets({}, context)
```

#### Input
* input `object`
  * Limit [RuleSetLimit](#rulesetlimit)
  * Names [MatchmakingRuleSetNameList](#matchmakingrulesetnamelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribeMatchmakingRuleSetsOutput](#describematchmakingrulesetsoutput)

### DescribePlayerSessions



```js
amazonaws_gamelift.DescribePlayerSessions({}, context)
```

#### Input
* input `object`
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionId [PlayerSessionId](#playersessionid)
  * PlayerSessionStatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [DescribePlayerSessionsOutput](#describeplayersessionsoutput)

### DescribeRuntimeConfiguration



```js
amazonaws_gamelift.DescribeRuntimeConfiguration({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)

#### Output
* output [DescribeRuntimeConfigurationOutput](#describeruntimeconfigurationoutput)

### DescribeScalingPolicies



```js
amazonaws_gamelift.DescribeScalingPolicies({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [ScalingStatusType](#scalingstatustype)

#### Output
* output [DescribeScalingPoliciesOutput](#describescalingpoliciesoutput)

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
  * FleetId [FleetId](#fleetid)

#### Output
* output [DescribeVpcPeeringConnectionsOutput](#describevpcpeeringconnectionsoutput)

### GetGameSessionLogUrl



```js
amazonaws_gamelift.GetGameSessionLogUrl({
  "GameSessionId": ""
}, context)
```

#### Input
* input `object`
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)

#### Output
* output [GetGameSessionLogUrlOutput](#getgamesessionlogurloutput)

### GetInstanceAccess



```js
amazonaws_gamelift.GetInstanceAccess({
  "FleetId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * InstanceId **required** [InstanceId](#instanceid)

#### Output
* output [GetInstanceAccessOutput](#getinstanceaccessoutput)

### ListAliases



```js
amazonaws_gamelift.ListAliases({}, context)
```

#### Input
* input `object`
  * Limit [PositiveInteger](#positiveinteger)
  * Name [NonEmptyString](#nonemptystring)
  * NextToken [NonEmptyString](#nonemptystring)
  * RoutingStrategyType [RoutingStrategyType](#routingstrategytype)

#### Output
* output [ListAliasesOutput](#listaliasesoutput)

### ListBuilds



```js
amazonaws_gamelift.ListBuilds({}, context)
```

#### Input
* input `object`
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonEmptyString](#nonemptystring)
  * Status [BuildStatus](#buildstatus)

#### Output
* output [ListBuildsOutput](#listbuildsoutput)

### ListFleets



```js
amazonaws_gamelift.ListFleets({}, context)
```

#### Input
* input `object`
  * BuildId [BuildId](#buildid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [ListFleetsOutput](#listfleetsoutput)

### PutScalingPolicy



```js
amazonaws_gamelift.PutScalingPolicy({
  "Name": "",
  "FleetId": "",
  "MetricName": ""
}, context)
```

#### Input
* input `object`
  * ComparisonOperator [ComparisonOperatorType](#comparisonoperatortype)
  * EvaluationPeriods [PositiveInteger](#positiveinteger)
  * FleetId **required** [FleetId](#fleetid)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PolicyType [PolicyType](#policytype)
  * ScalingAdjustment [Integer](#integer)
  * ScalingAdjustmentType [ScalingAdjustmentType](#scalingadjustmenttype)
  * TargetConfiguration [TargetConfiguration](#targetconfiguration)
  * Threshold [Double](#double)

#### Output
* output [PutScalingPolicyOutput](#putscalingpolicyoutput)

### RequestUploadCredentials



```js
amazonaws_gamelift.RequestUploadCredentials({
  "BuildId": ""
}, context)
```

#### Input
* input `object`
  * BuildId **required** [BuildId](#buildid)

#### Output
* output [RequestUploadCredentialsOutput](#requestuploadcredentialsoutput)

### ResolveAlias



```js
amazonaws_gamelift.ResolveAlias({
  "AliasId": ""
}, context)
```

#### Input
* input `object`
  * AliasId **required** [AliasId](#aliasid)

#### Output
* output [ResolveAliasOutput](#resolvealiasoutput)

### SearchGameSessions



```js
amazonaws_gamelift.SearchGameSessions({}, context)
```

#### Input
* input `object`
  * AliasId [AliasId](#aliasid)
  * FilterExpression [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * SortExpression [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [SearchGameSessionsOutput](#searchgamesessionsoutput)

### StartFleetActions



```js
amazonaws_gamelift.StartFleetActions({
  "FleetId": "",
  "Actions": []
}, context)
```

#### Input
* input `object`
  * Actions **required** [FleetActionList](#fleetactionlist)
  * FleetId **required** [FleetId](#fleetid)

#### Output
* output [StartFleetActionsOutput](#startfleetactionsoutput)

### StartGameSessionPlacement



```js
amazonaws_gamelift.StartGameSessionPlacement({
  "PlacementId": "",
  "GameSessionQueueName": "",
  "MaximumPlayerSessionCount": 0
}, context)
```

#### Input
* input `object`
  * DesiredPlayerSessions [DesiredPlayerSessionList](#desiredplayersessionlist)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionName [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameSessionQueueName **required** [GameSessionQueueName](#gamesessionqueuename)
  * MaximumPlayerSessionCount **required** [WholeNumber](#wholenumber)
  * PlacementId **required** [IdStringModel](#idstringmodel)
  * PlayerLatencies [PlayerLatencyList](#playerlatencylist)

#### Output
* output [StartGameSessionPlacementOutput](#startgamesessionplacementoutput)

### StartMatchBackfill



```js
amazonaws_gamelift.StartMatchBackfill({
  "ConfigurationName": "",
  "GameSessionArn": "",
  "Players": []
}, context)
```

#### Input
* input `object`
  * ConfigurationName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * GameSessionArn **required** [ArnStringModel](#arnstringmodel)
  * Players **required** [PlayerList](#playerlist)
  * TicketId [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [StartMatchBackfillOutput](#startmatchbackfilloutput)

### StartMatchmaking



```js
amazonaws_gamelift.StartMatchmaking({
  "ConfigurationName": "",
  "Players": []
}, context)
```

#### Input
* input `object`
  * ConfigurationName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * Players **required** [PlayerList](#playerlist)
  * TicketId [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [StartMatchmakingOutput](#startmatchmakingoutput)

### StopFleetActions



```js
amazonaws_gamelift.StopFleetActions({
  "FleetId": "",
  "Actions": []
}, context)
```

#### Input
* input `object`
  * Actions **required** [FleetActionList](#fleetactionlist)
  * FleetId **required** [FleetId](#fleetid)

#### Output
* output [StopFleetActionsOutput](#stopfleetactionsoutput)

### StopGameSessionPlacement



```js
amazonaws_gamelift.StopGameSessionPlacement({
  "PlacementId": ""
}, context)
```

#### Input
* input `object`
  * PlacementId **required** [IdStringModel](#idstringmodel)

#### Output
* output [StopGameSessionPlacementOutput](#stopgamesessionplacementoutput)

### StopMatchmaking



```js
amazonaws_gamelift.StopMatchmaking({
  "TicketId": ""
}, context)
```

#### Input
* input `object`
  * TicketId **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [StopMatchmakingOutput](#stopmatchmakingoutput)

### UpdateAlias



```js
amazonaws_gamelift.UpdateAlias({
  "AliasId": ""
}, context)
```

#### Input
* input `object`
  * AliasId **required** [AliasId](#aliasid)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Name [NonBlankAndLengthConstraintString](#nonblankandlengthconstraintstring)
  * RoutingStrategy [RoutingStrategy](#routingstrategy)

#### Output
* output [UpdateAliasOutput](#updatealiasoutput)

### UpdateBuild



```js
amazonaws_gamelift.UpdateBuild({
  "BuildId": ""
}, context)
```

#### Input
* input `object`
  * BuildId **required** [BuildId](#buildid)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Version [NonZeroAndMaxString](#nonzeroandmaxstring)

#### Output
* output [UpdateBuildOutput](#updatebuildoutput)

### UpdateFleetAttributes



```js
amazonaws_gamelift.UpdateFleetAttributes({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId **required** [FleetId](#fleetid)
  * MetricGroups [MetricGroupList](#metricgrouplist)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * NewGameSessionProtectionPolicy [ProtectionPolicy](#protectionpolicy)
  * ResourceCreationLimitPolicy [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy)

#### Output
* output [UpdateFleetAttributesOutput](#updatefleetattributesoutput)

### UpdateFleetCapacity



```js
amazonaws_gamelift.UpdateFleetCapacity({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * DesiredInstances [WholeNumber](#wholenumber)
  * FleetId **required** [FleetId](#fleetid)
  * MaxSize [WholeNumber](#wholenumber)
  * MinSize [WholeNumber](#wholenumber)

#### Output
* output [UpdateFleetCapacityOutput](#updatefleetcapacityoutput)

### UpdateFleetPortSettings



```js
amazonaws_gamelift.UpdateFleetPortSettings({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * InboundPermissionAuthorizations [IpPermissionsList](#ippermissionslist)
  * InboundPermissionRevocations [IpPermissionsList](#ippermissionslist)

#### Output
* output [UpdateFleetPortSettingsOutput](#updatefleetportsettingsoutput)

### UpdateGameSession



```js
amazonaws_gamelift.UpdateGameSession({
  "GameSessionId": ""
}, context)
```

#### Input
* input `object`
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * MaximumPlayerSessionCount [WholeNumber](#wholenumber)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionCreationPolicy [PlayerSessionCreationPolicy](#playersessioncreationpolicy)
  * ProtectionPolicy [ProtectionPolicy](#protectionpolicy)

#### Output
* output [UpdateGameSessionOutput](#updategamesessionoutput)

### UpdateGameSessionQueue



```js
amazonaws_gamelift.UpdateGameSessionQueue({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Destinations [GameSessionQueueDestinationList](#gamesessionqueuedestinationlist)
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)
  * PlayerLatencyPolicies [PlayerLatencyPolicyList](#playerlatencypolicylist)
  * TimeoutInSeconds [WholeNumber](#wholenumber)

#### Output
* output [UpdateGameSessionQueueOutput](#updategamesessionqueueoutput)

### UpdateMatchmakingConfiguration



```js
amazonaws_gamelift.UpdateMatchmakingConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AcceptanceRequired [BooleanModel](#booleanmodel)
  * AcceptanceTimeoutSeconds [MatchmakingAcceptanceTimeoutInteger](#matchmakingacceptancetimeoutinteger)
  * AdditionalPlayerCount [WholeNumber](#wholenumber)
  * CustomEventData [CustomEventData](#customeventdata)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionQueueArns [QueueArnsList](#queuearnslist)
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * NotificationTarget [SnsArnStringModel](#snsarnstringmodel)
  * RequestTimeoutSeconds [MatchmakingRequestTimeoutInteger](#matchmakingrequesttimeoutinteger)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

#### Output
* output [UpdateMatchmakingConfigurationOutput](#updatematchmakingconfigurationoutput)

### UpdateRuntimeConfiguration



```js
amazonaws_gamelift.UpdateRuntimeConfiguration({
  "FleetId": "",
  "RuntimeConfiguration": {}
}, context)
```

#### Input
* input `object`
  * FleetId **required** [FleetId](#fleetid)
  * RuntimeConfiguration **required** [RuntimeConfiguration](#runtimeconfiguration)

#### Output
* output [UpdateRuntimeConfigurationOutput](#updateruntimeconfigurationoutput)

### ValidateMatchmakingRuleSet



```js
amazonaws_gamelift.ValidateMatchmakingRuleSet({
  "RuleSetBody": ""
}, context)
```

#### Input
* input `object`
  * RuleSetBody **required** [RuleSetBody](#rulesetbody)

#### Output
* output [ValidateMatchmakingRuleSetOutput](#validatematchmakingrulesetoutput)



## Definitions

### AcceptMatchInput
* AcceptMatchInput `object`: Represents the input for a request action.
  * AcceptanceType **required** [AcceptanceType](#acceptancetype)
  * PlayerIds **required** [StringList](#stringlist)
  * TicketId **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

### AcceptMatchOutput
* AcceptMatchOutput `object`

### AcceptanceType
* AcceptanceType `string` (values: ACCEPT, REJECT)

### Alias
* Alias `object`: <p>Properties describing a fleet alias.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
  * AliasArn [ArnStringModel](#arnstringmodel)
  * AliasId [AliasId](#aliasid)
  * CreationTime [Timestamp](#timestamp)
  * Description [FreeText](#freetext)
  * LastUpdatedTime [Timestamp](#timestamp)
  * Name [NonBlankAndLengthConstraintString](#nonblankandlengthconstraintstring)
  * RoutingStrategy [RoutingStrategy](#routingstrategy)

### AliasId
* AliasId `string`

### AliasList
* AliasList `array`
  * items [Alias](#alias)

### ArnStringModel
* ArnStringModel `string`

### AttributeValue
* AttributeValue `object`: Values for use in <a>Player</a> attribute key:value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
  * N [DoubleObject](#doubleobject)
  * S [NonZeroAndMaxString](#nonzeroandmaxstring)
  * SDM [StringDoubleMap](#stringdoublemap)
  * SL [StringList](#stringlist)

### AwsCredentials
* AwsCredentials `object`: Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
  * AccessKeyId [NonEmptyString](#nonemptystring)
  * SecretAccessKey [NonEmptyString](#nonemptystring)
  * SessionToken [NonEmptyString](#nonemptystring)

### BooleanModel
* BooleanModel `boolean`

### Build
* Build `object`: <p>Properties describing a game build.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
  * BuildId [BuildId](#buildid)
  * CreationTime [Timestamp](#timestamp)
  * Name [FreeText](#freetext)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * SizeOnDisk [PositiveLong](#positivelong)
  * Status [BuildStatus](#buildstatus)
  * Version [FreeText](#freetext)

### BuildId
* BuildId `string`

### BuildList
* BuildList `array`
  * items [Build](#build)

### BuildStatus
* BuildStatus `string` (values: INITIALIZED, READY, FAILED)

### ComparisonOperatorType
* ComparisonOperatorType `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### ConflictException
* ConflictException `object`: The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
  * Message [NonEmptyString](#nonemptystring)

### CreateAliasInput
* CreateAliasInput `object`: Represents the input for a request action.
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Name **required** [NonBlankAndLengthConstraintString](#nonblankandlengthconstraintstring)
  * RoutingStrategy **required** [RoutingStrategy](#routingstrategy)

### CreateAliasOutput
* CreateAliasOutput `object`: Represents the returned data in response to a request action.
  * Alias [Alias](#alias)

### CreateBuildInput
* CreateBuildInput `object`: Represents the input for a request action.
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * StorageLocation [S3Location](#s3location)
  * Version [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreateBuildOutput
* CreateBuildOutput `object`: Represents the returned data in response to a request action.
  * Build [Build](#build)
  * StorageLocation [S3Location](#s3location)
  * UploadCredentials [AwsCredentials](#awscredentials)

### CreateFleetInput
* CreateFleetInput `object`: Represents the input for a request action.
  * BuildId **required** [BuildId](#buildid)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * EC2InboundPermissions [IpPermissionsList](#ippermissionslist)
  * EC2InstanceType **required** [EC2InstanceType](#ec2instancetype)
  * FleetType [FleetType](#fleettype)
  * LogPaths [StringList](#stringlist)
  * MetricGroups [MetricGroupList](#metricgrouplist)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * NewGameSessionProtectionPolicy [ProtectionPolicy](#protectionpolicy)
  * PeerVpcAwsAccountId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ResourceCreationLimitPolicy [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy)
  * RuntimeConfiguration [RuntimeConfiguration](#runtimeconfiguration)
  * ServerLaunchParameters [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ServerLaunchPath [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreateFleetOutput
* CreateFleetOutput `object`: Represents the returned data in response to a request action.
  * FleetAttributes [FleetAttributes](#fleetattributes)

### CreateGameSessionInput
* CreateGameSessionInput `object`: Represents the input for a request action.
  * AliasId [AliasId](#aliasid)
  * CreatorId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId [FleetId](#fleetid)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionId [IdStringModel](#idstringmodel)
  * IdempotencyToken [IdStringModel](#idstringmodel)
  * MaximumPlayerSessionCount **required** [WholeNumber](#wholenumber)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreateGameSessionOutput
* CreateGameSessionOutput `object`: Represents the returned data in response to a request action.
  * GameSession [GameSession](#gamesession)

### CreateGameSessionQueueInput
* CreateGameSessionQueueInput `object`: Represents the input for a request action.
  * Destinations [GameSessionQueueDestinationList](#gamesessionqueuedestinationlist)
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)
  * PlayerLatencyPolicies [PlayerLatencyPolicyList](#playerlatencypolicylist)
  * TimeoutInSeconds [WholeNumber](#wholenumber)

### CreateGameSessionQueueOutput
* CreateGameSessionQueueOutput `object`: Represents the returned data in response to a request action.
  * GameSessionQueue [GameSessionQueue](#gamesessionqueue)

### CreateMatchmakingConfigurationInput
* CreateMatchmakingConfigurationInput `object`: Represents the input for a request action.
  * AcceptanceRequired **required** [BooleanModel](#booleanmodel)
  * AcceptanceTimeoutSeconds [MatchmakingAcceptanceTimeoutInteger](#matchmakingacceptancetimeoutinteger)
  * AdditionalPlayerCount [WholeNumber](#wholenumber)
  * CustomEventData [CustomEventData](#customeventdata)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionQueueArns **required** [QueueArnsList](#queuearnslist)
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * NotificationTarget [SnsArnStringModel](#snsarnstringmodel)
  * RequestTimeoutSeconds **required** [MatchmakingRequestTimeoutInteger](#matchmakingrequesttimeoutinteger)
  * RuleSetName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

### CreateMatchmakingConfigurationOutput
* CreateMatchmakingConfigurationOutput `object`: Represents the returned data in response to a request action.
  * Configuration [MatchmakingConfiguration](#matchmakingconfiguration)

### CreateMatchmakingRuleSetInput
* CreateMatchmakingRuleSetInput `object`: Represents the input for a request action.
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * RuleSetBody **required** [RuleSetBody](#rulesetbody)

### CreateMatchmakingRuleSetOutput
* CreateMatchmakingRuleSetOutput `object`: Represents the returned data in response to a request action.
  * RuleSet **required** [MatchmakingRuleSet](#matchmakingruleset)

### CreatePlayerSessionInput
* CreatePlayerSessionInput `object`: Represents the input for a request action.
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * PlayerData [PlayerData](#playerdata)
  * PlayerId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreatePlayerSessionOutput
* CreatePlayerSessionOutput `object`: Represents the returned data in response to a request action.
  * PlayerSession [PlayerSession](#playersession)

### CreatePlayerSessionsInput
* CreatePlayerSessionsInput `object`: Represents the input for a request action.
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * PlayerDataMap [PlayerDataMap](#playerdatamap)
  * PlayerIds **required** [PlayerIdList](#playeridlist)

### CreatePlayerSessionsOutput
* CreatePlayerSessionsOutput `object`: Represents the returned data in response to a request action.
  * PlayerSessions [PlayerSessionList](#playersessionlist)

### CreateVpcPeeringAuthorizationInput
* CreateVpcPeeringAuthorizationInput `object`: Represents the input for a request action.
  * GameLiftAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreateVpcPeeringAuthorizationOutput
* CreateVpcPeeringAuthorizationOutput `object`: Represents the returned data in response to a request action.
  * VpcPeeringAuthorization [VpcPeeringAuthorization](#vpcpeeringauthorization)

### CreateVpcPeeringConnectionInput
* CreateVpcPeeringConnectionInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * PeerVpcAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### CreateVpcPeeringConnectionOutput
* CreateVpcPeeringConnectionOutput `object`

### CustomEventData
* CustomEventData `string`

### DeleteAliasInput
* DeleteAliasInput `object`: Represents the input for a request action.
  * AliasId **required** [AliasId](#aliasid)

### DeleteBuildInput
* DeleteBuildInput `object`: Represents the input for a request action.
  * BuildId **required** [BuildId](#buildid)

### DeleteFleetInput
* DeleteFleetInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)

### DeleteGameSessionQueueInput
* DeleteGameSessionQueueInput `object`: Represents the input for a request action.
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)

### DeleteGameSessionQueueOutput
* DeleteGameSessionQueueOutput `object`

### DeleteMatchmakingConfigurationInput
* DeleteMatchmakingConfigurationInput `object`: Represents the input for a request action.
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

### DeleteMatchmakingConfigurationOutput
* DeleteMatchmakingConfigurationOutput `object`

### DeleteScalingPolicyInput
* DeleteScalingPolicyInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### DeleteVpcPeeringAuthorizationInput
* DeleteVpcPeeringAuthorizationInput `object`: Represents the input for a request action.
  * GameLiftAwsAccountId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### DeleteVpcPeeringAuthorizationOutput
* DeleteVpcPeeringAuthorizationOutput `object`

### DeleteVpcPeeringConnectionInput
* DeleteVpcPeeringConnectionInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * VpcPeeringConnectionId **required** [NonZeroAndMaxString](#nonzeroandmaxstring)

### DeleteVpcPeeringConnectionOutput
* DeleteVpcPeeringConnectionOutput `object`

### DescribeAliasInput
* DescribeAliasInput `object`: Represents the input for a request action.
  * AliasId **required** [AliasId](#aliasid)

### DescribeAliasOutput
* DescribeAliasOutput `object`: Represents the returned data in response to a request action.
  * Alias [Alias](#alias)

### DescribeBuildInput
* DescribeBuildInput `object`: Represents the input for a request action.
  * BuildId **required** [BuildId](#buildid)

### DescribeBuildOutput
* DescribeBuildOutput `object`: Represents the returned data in response to a request action.
  * Build [Build](#build)

### DescribeEC2InstanceLimitsInput
* DescribeEC2InstanceLimitsInput `object`: Represents the input for a request action.
  * EC2InstanceType [EC2InstanceType](#ec2instancetype)

### DescribeEC2InstanceLimitsOutput
* DescribeEC2InstanceLimitsOutput `object`: Represents the returned data in response to a request action.
  * EC2InstanceLimits [EC2InstanceLimitList](#ec2instancelimitlist)

### DescribeFleetAttributesInput
* DescribeFleetAttributesInput `object`: Represents the input for a request action.
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetAttributesOutput
* DescribeFleetAttributesOutput `object`: Represents the returned data in response to a request action.
  * FleetAttributes [FleetAttributesList](#fleetattributeslist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetCapacityInput
* DescribeFleetCapacityInput `object`: Represents the input for a request action.
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetCapacityOutput
* DescribeFleetCapacityOutput `object`: Represents the returned data in response to a request action.
  * FleetCapacity [FleetCapacityList](#fleetcapacitylist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetEventsInput
* DescribeFleetEventsInput `object`: Represents the input for a request action.
  * EndTime [Timestamp](#timestamp)
  * FleetId **required** [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StartTime [Timestamp](#timestamp)

### DescribeFleetEventsOutput
* DescribeFleetEventsOutput `object`: Represents the returned data in response to a request action.
  * Events [EventList](#eventlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetPortSettingsInput
* DescribeFleetPortSettingsInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)

### DescribeFleetPortSettingsOutput
* DescribeFleetPortSettingsOutput `object`: Represents the returned data in response to a request action.
  * InboundPermissions [IpPermissionsList](#ippermissionslist)

### DescribeFleetUtilizationInput
* DescribeFleetUtilizationInput `object`: Represents the input for a request action.
  * FleetIds [FleetIdList](#fleetidlist)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeFleetUtilizationOutput
* DescribeFleetUtilizationOutput `object`: Represents the returned data in response to a request action.
  * FleetUtilization [FleetUtilizationList](#fleetutilizationlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionDetailsInput
* DescribeGameSessionDetailsInput `object`: Represents the input for a request action.
  * AliasId [AliasId](#aliasid)
  * FleetId [FleetId](#fleetid)
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionDetailsOutput
* DescribeGameSessionDetailsOutput `object`: Represents the returned data in response to a request action.
  * GameSessionDetails [GameSessionDetailList](#gamesessiondetaillist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionPlacementInput
* DescribeGameSessionPlacementInput `object`: Represents the input for a request action.
  * PlacementId **required** [IdStringModel](#idstringmodel)

### DescribeGameSessionPlacementOutput
* DescribeGameSessionPlacementOutput `object`: Represents the returned data in response to a request action.
  * GameSessionPlacement [GameSessionPlacement](#gamesessionplacement)

### DescribeGameSessionQueuesInput
* DescribeGameSessionQueuesInput `object`: Represents the input for a request action.
  * Limit [PositiveInteger](#positiveinteger)
  * Names [GameSessionQueueNameList](#gamesessionqueuenamelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionQueuesOutput
* DescribeGameSessionQueuesOutput `object`: Represents the returned data in response to a request action.
  * GameSessionQueues [GameSessionQueueList](#gamesessionqueuelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionsInput
* DescribeGameSessionsInput `object`: Represents the input for a request action.
  * AliasId [AliasId](#aliasid)
  * FleetId [FleetId](#fleetid)
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeGameSessionsOutput
* DescribeGameSessionsOutput `object`: Represents the returned data in response to a request action.
  * GameSessions [GameSessionList](#gamesessionlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeInstancesInput
* DescribeInstancesInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * InstanceId [InstanceId](#instanceid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeInstancesOutput
* DescribeInstancesOutput `object`: Represents the returned data in response to a request action.
  * Instances [InstanceList](#instancelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeMatchmakingConfigurationsInput
* DescribeMatchmakingConfigurationsInput `object`: Represents the input for a request action.
  * Limit [PositiveInteger](#positiveinteger)
  * Names [MatchmakingIdList](#matchmakingidlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

### DescribeMatchmakingConfigurationsOutput
* DescribeMatchmakingConfigurationsOutput `object`: Represents the returned data in response to a request action.
  * Configurations [MatchmakingConfigurationList](#matchmakingconfigurationlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeMatchmakingInput
* DescribeMatchmakingInput `object`: Represents the input for a request action.
  * TicketIds **required** [MatchmakingIdList](#matchmakingidlist)

### DescribeMatchmakingOutput
* DescribeMatchmakingOutput `object`: Represents the returned data in response to a request action.
  * TicketList [MatchmakingTicketList](#matchmakingticketlist)

### DescribeMatchmakingRuleSetsInput
* DescribeMatchmakingRuleSetsInput `object`: Represents the input for a request action.
  * Limit [RuleSetLimit](#rulesetlimit)
  * Names [MatchmakingRuleSetNameList](#matchmakingrulesetnamelist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribeMatchmakingRuleSetsOutput
* DescribeMatchmakingRuleSetsOutput `object`: Represents the returned data in response to a request action.
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * RuleSets **required** [MatchmakingRuleSetList](#matchmakingrulesetlist)

### DescribePlayerSessionsInput
* DescribePlayerSessionsInput `object`: Represents the input for a request action.
  * GameSessionId [ArnStringModel](#arnstringmodel)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionId [PlayerSessionId](#playersessionid)
  * PlayerSessionStatusFilter [NonZeroAndMaxString](#nonzeroandmaxstring)

### DescribePlayerSessionsOutput
* DescribePlayerSessionsOutput `object`: Represents the returned data in response to a request action.
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessions [PlayerSessionList](#playersessionlist)

### DescribeRuntimeConfigurationInput
* DescribeRuntimeConfigurationInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)

### DescribeRuntimeConfigurationOutput
* DescribeRuntimeConfigurationOutput `object`: Represents the returned data in response to a request action.
  * RuntimeConfiguration [RuntimeConfiguration](#runtimeconfiguration)

### DescribeScalingPoliciesInput
* DescribeScalingPoliciesInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * StatusFilter [ScalingStatusType](#scalingstatustype)

### DescribeScalingPoliciesOutput
* DescribeScalingPoliciesOutput `object`: Represents the returned data in response to a request action.
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ScalingPolicies [ScalingPolicyList](#scalingpolicylist)

### DescribeVpcPeeringAuthorizationsInput
* DescribeVpcPeeringAuthorizationsInput `object`

### DescribeVpcPeeringAuthorizationsOutput
* DescribeVpcPeeringAuthorizationsOutput `object`
  * VpcPeeringAuthorizations [VpcPeeringAuthorizationList](#vpcpeeringauthorizationlist)

### DescribeVpcPeeringConnectionsInput
* DescribeVpcPeeringConnectionsInput `object`: Represents the input for a request action.
  * FleetId [FleetId](#fleetid)

### DescribeVpcPeeringConnectionsOutput
* DescribeVpcPeeringConnectionsOutput `object`: Represents the returned data in response to a request action.
  * VpcPeeringConnections [VpcPeeringConnectionList](#vpcpeeringconnectionlist)

### DesiredPlayerSession
* DesiredPlayerSession `object`: Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
  * PlayerData [PlayerData](#playerdata)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)

### DesiredPlayerSessionList
* DesiredPlayerSessionList `array`
  * items [DesiredPlayerSession](#desiredplayersession)

### Double
* Double `number`

### DoubleObject
* DoubleObject `number`

### EC2InstanceCounts
* EC2InstanceCounts `object`: <p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * ACTIVE [WholeNumber](#wholenumber)
  * DESIRED [WholeNumber](#wholenumber)
  * IDLE [WholeNumber](#wholenumber)
  * MAXIMUM [WholeNumber](#wholenumber)
  * MINIMUM [WholeNumber](#wholenumber)
  * PENDING [WholeNumber](#wholenumber)
  * TERMINATING [WholeNumber](#wholenumber)

### EC2InstanceLimit
* EC2InstanceLimit `object`: Maximum number of instances allowed based on the Amazon Elastic Compute Cloud (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>.
  * CurrentInstances [WholeNumber](#wholenumber)
  * EC2InstanceType [EC2InstanceType](#ec2instancetype)
  * InstanceLimit [WholeNumber](#wholenumber)

### EC2InstanceLimitList
* EC2InstanceLimitList `array`
  * items [EC2InstanceLimit](#ec2instancelimit)

### EC2InstanceType
* EC2InstanceType `string` (values: t2.micro, t2.small, t2.medium, t2.large, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, m3.medium, m3.large, m3.xlarge, m3.2xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge)

### Event
* Event `object`: Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.
  * EventCode [EventCode](#eventcode)
  * EventId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * EventTime [Timestamp](#timestamp)
  * Message [NonEmptyString](#nonemptystring)
  * PreSignedLogUrl [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ResourceId [NonZeroAndMaxString](#nonzeroandmaxstring)

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

### FleetAttributes
* FleetAttributes `object`: <p>General properties describing a fleet.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * BuildId [BuildId](#buildid)
  * CreationTime [Timestamp](#timestamp)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetArn [ArnStringModel](#arnstringmodel)
  * FleetId [FleetId](#fleetid)
  * FleetType [FleetType](#fleettype)
  * InstanceType [EC2InstanceType](#ec2instancetype)
  * LogPaths [StringList](#stringlist)
  * MetricGroups [MetricGroupList](#metricgrouplist)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * NewGameSessionProtectionPolicy [ProtectionPolicy](#protectionpolicy)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * ResourceCreationLimitPolicy [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy)
  * ServerLaunchParameters [NonZeroAndMaxString](#nonzeroandmaxstring)
  * ServerLaunchPath [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Status [FleetStatus](#fleetstatus)
  * StoppedActions [FleetActionList](#fleetactionlist)
  * TerminationTime [Timestamp](#timestamp)

### FleetAttributesList
* FleetAttributesList `array`
  * items [FleetAttributes](#fleetattributes)

### FleetCapacity
* FleetCapacity `object`: <p>Information about the fleet's capacity. Fleet capacity is measured in EC2 instances. By default, new fleets have a capacity of one instance, but can be updated as needed. The maximum number of instances for a fleet is determined by the fleet's instance type.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * FleetId [FleetId](#fleetid)
  * InstanceCounts [EC2InstanceCounts](#ec2instancecounts)
  * InstanceType [EC2InstanceType](#ec2instancetype)

### FleetCapacityExceededException
* FleetCapacityExceededException `object`: The specified fleet has no available instances to fulfill a <code>CreateGameSession</code> request. Clients can retry such requests immediately or after a waiting period.
  * Message [NonEmptyString](#nonemptystring)

### FleetCapacityList
* FleetCapacityList `array`
  * items [FleetCapacity](#fleetcapacity)

### FleetId
* FleetId `string`

### FleetIdList
* FleetIdList `array`
  * items [FleetId](#fleetid)

### FleetStatus
* FleetStatus `string` (values: NEW, DOWNLOADING, VALIDATING, BUILDING, ACTIVATING, ACTIVE, DELETING, ERROR, TERMINATED)

### FleetType
* FleetType `string` (values: ON_DEMAND, SPOT)

### FleetUtilization
* FleetUtilization `object`: <p>Current status of fleet utilization, including the number of game and player sessions being hosted.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * ActiveGameSessionCount [WholeNumber](#wholenumber)
  * ActiveServerProcessCount [WholeNumber](#wholenumber)
  * CurrentPlayerSessionCount [WholeNumber](#wholenumber)
  * FleetId [FleetId](#fleetid)
  * MaximumPlayerSessionCount [WholeNumber](#wholenumber)

### FleetUtilizationList
* FleetUtilizationList `array`
  * items [FleetUtilization](#fleetutilization)

### Float
* Float `number`

### FreeText
* FreeText `string`

### GameProperty
* GameProperty `object`: Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session, such as to specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session; the server process uses the properties as appropriate. For more information, see the <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.
  * Key **required** [GamePropertyKey](#gamepropertykey)
  * Value **required** [GamePropertyValue](#gamepropertyvalue)

### GamePropertyKey
* GamePropertyKey `string`

### GamePropertyList
* GamePropertyList `array`
  * items [GameProperty](#gameproperty)

### GamePropertyValue
* GamePropertyValue `string`

### GameSession
* GameSession `object`: <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * CreationTime [Timestamp](#timestamp)
  * CreatorId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * CurrentPlayerSessionCount [WholeNumber](#wholenumber)
  * FleetId [FleetId](#fleetid)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * IpAddress [IpAddress](#ipaddress)
  * MatchmakerData [MatchmakerData](#matchmakerdata)
  * MaximumPlayerSessionCount [WholeNumber](#wholenumber)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionCreationPolicy [PlayerSessionCreationPolicy](#playersessioncreationpolicy)
  * Port [PortNumber](#portnumber)
  * Status [GameSessionStatus](#gamesessionstatus)
  * StatusReason [GameSessionStatusReason](#gamesessionstatusreason)
  * TerminationTime [Timestamp](#timestamp)

### GameSessionActivationTimeoutSeconds
* GameSessionActivationTimeoutSeconds `integer`

### GameSessionConnectionInfo
* GameSessionConnectionInfo `object`: Connection information for the new game session that is created with matchmaking. (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine places the match and creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.
  * GameSessionArn [ArnStringModel](#arnstringmodel)
  * IpAddress [StringModel](#stringmodel)
  * MatchedPlayerSessions [MatchedPlayerSessionList](#matchedplayersessionlist)
  * Port [PositiveInteger](#positiveinteger)

### GameSessionData
* GameSessionData `string`

### GameSessionDetail
* GameSessionDetail `object`: A game session's properties plus the protection policy currently in force.
  * GameSession [GameSession](#gamesession)
  * ProtectionPolicy [ProtectionPolicy](#protectionpolicy)

### GameSessionDetailList
* GameSessionDetailList `array`
  * items [GameSessionDetail](#gamesessiondetail)

### GameSessionFullException
* GameSessionFullException `object`: The game instance is currently full and cannot allow the requested player(s) to join. Clients can retry such requests immediately or after a waiting period.
  * Message [NonEmptyString](#nonemptystring)

### GameSessionList
* GameSessionList `array`
  * items [GameSession](#gamesession)

### GameSessionPlacement
* GameSessionPlacement `object`: <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
  * EndTime [Timestamp](#timestamp)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionArn [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameSessionName [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameSessionQueueName [GameSessionQueueName](#gamesessionqueuename)
  * GameSessionRegion [NonZeroAndMaxString](#nonzeroandmaxstring)
  * IpAddress [IpAddress](#ipaddress)
  * MatchmakerData [MatchmakerData](#matchmakerdata)
  * MaximumPlayerSessionCount [WholeNumber](#wholenumber)
  * PlacedPlayerSessions [PlacedPlayerSessionList](#placedplayersessionlist)
  * PlacementId [IdStringModel](#idstringmodel)
  * PlayerLatencies [PlayerLatencyList](#playerlatencylist)
  * Port [PortNumber](#portnumber)
  * StartTime [Timestamp](#timestamp)
  * Status [GameSessionPlacementState](#gamesessionplacementstate)

### GameSessionPlacementState
* GameSessionPlacementState `string` (values: PENDING, FULFILLED, CANCELLED, TIMED_OUT)

### GameSessionQueue
* GameSessionQueue `object`: <p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * Destinations [GameSessionQueueDestinationList](#gamesessionqueuedestinationlist)
  * GameSessionQueueArn [ArnStringModel](#arnstringmodel)
  * Name [GameSessionQueueName](#gamesessionqueuename)
  * PlayerLatencyPolicies [PlayerLatencyPolicyList](#playerlatencypolicylist)
  * TimeoutInSeconds [WholeNumber](#wholenumber)

### GameSessionQueueDestination
* GameSessionQueueDestination `object`: <p>Fleet designated in a game session queue. Requests for new game sessions in the queue are fulfilled by starting a new game session on any destination configured for a queue. </p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * DestinationArn [ArnStringModel](#arnstringmodel)

### GameSessionQueueDestinationList
* GameSessionQueueDestinationList `array`
  * items [GameSessionQueueDestination](#gamesessionqueuedestination)

### GameSessionQueueList
* GameSessionQueueList `array`
  * items [GameSessionQueue](#gamesessionqueue)

### GameSessionQueueName
* GameSessionQueueName `string`

### GameSessionQueueNameList
* GameSessionQueueNameList `array`
  * items [GameSessionQueueName](#gamesessionqueuename)

### GameSessionStatus
* GameSessionStatus `string` (values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR)

### GameSessionStatusReason
* GameSessionStatusReason `string` (values: INTERRUPTED)

### GetGameSessionLogUrlInput
* GetGameSessionLogUrlInput `object`: Represents the input for a request action.
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)

### GetGameSessionLogUrlOutput
* GetGameSessionLogUrlOutput `object`: Represents the returned data in response to a request action.
  * PreSignedUrl [NonZeroAndMaxString](#nonzeroandmaxstring)

### GetInstanceAccessInput
* GetInstanceAccessInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * InstanceId **required** [InstanceId](#instanceid)

### GetInstanceAccessOutput
* GetInstanceAccessOutput `object`: Represents the returned data in response to a request action.
  * InstanceAccess [InstanceAccess](#instanceaccess)

### IdStringModel
* IdStringModel `string`

### IdempotentParameterMismatchException
* IdempotentParameterMismatchException `object`: A game session with this custom ID string already exists in this fleet. Resolve this conflict before retrying this request.
  * Message [NonEmptyString](#nonemptystring)

### Instance
* Instance `object`: Properties that describe an instance of a virtual computing resource that hosts one or more game servers. A fleet may contain zero or more instances.
  * CreationTime [Timestamp](#timestamp)
  * FleetId [FleetId](#fleetid)
  * InstanceId [InstanceId](#instanceid)
  * IpAddress [IpAddress](#ipaddress)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * Status [InstanceStatus](#instancestatus)
  * Type [EC2InstanceType](#ec2instancetype)

### InstanceAccess
* InstanceAccess `object`: Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
  * Credentials [InstanceCredentials](#instancecredentials)
  * FleetId [FleetId](#fleetid)
  * InstanceId [InstanceId](#instanceid)
  * IpAddress [IpAddress](#ipaddress)
  * OperatingSystem [OperatingSystem](#operatingsystem)

### InstanceCredentials
* InstanceCredentials `object`: Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
  * Secret [NonEmptyString](#nonemptystring)
  * UserName [NonEmptyString](#nonemptystring)

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
* InternalServiceException `object`: The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
  * Message [NonEmptyString](#nonemptystring)

### InvalidFleetStatusException
* InvalidFleetStatusException `object`: The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.
  * Message [NonEmptyString](#nonemptystring)

### InvalidGameSessionStatusException
* InvalidGameSessionStatusException `object`: The requested operation would cause a conflict with the current state of a resource associated with the request and/or the game instance. Resolve the conflict before retrying.
  * Message [NonEmptyString](#nonemptystring)

### InvalidRequestException
* InvalidRequestException `object`: One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
  * Message [NonEmptyString](#nonemptystring)

### IpAddress
* IpAddress `string`

### IpPermission
* IpPermission `object`: A range of IP addresses and port settings that allow inbound traffic to connect to server processes on Amazon GameLift. Each game session hosted on a fleet is assigned a unique combination of IP address and port number, which must fall into the fleet's allowed ranges. This combination is included in the <a>GameSession</a> object. 
  * FromPort **required** [PortNumber](#portnumber)
  * IpRange **required** [NonBlankString](#nonblankstring)
  * Protocol **required** [IpProtocol](#ipprotocol)
  * ToPort **required** [PortNumber](#portnumber)

### IpPermissionsList
* IpPermissionsList `array`
  * items [IpPermission](#ippermission)

### IpProtocol
* IpProtocol `string` (values: TCP, UDP)

### LatencyMap
* LatencyMap `array`
  * items `object`
    * key [NonEmptyString](#nonemptystring)
    * value [PositiveInteger](#positiveinteger)

### LimitExceededException
* LimitExceededException `object`: The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
  * Message [NonEmptyString](#nonemptystring)

### ListAliasesInput
* ListAliasesInput `object`: Represents the input for a request action.
  * Limit [PositiveInteger](#positiveinteger)
  * Name [NonEmptyString](#nonemptystring)
  * NextToken [NonEmptyString](#nonemptystring)
  * RoutingStrategyType [RoutingStrategyType](#routingstrategytype)

### ListAliasesOutput
* ListAliasesOutput `object`: Represents the returned data in response to a request action.
  * Aliases [AliasList](#aliaslist)
  * NextToken [NonEmptyString](#nonemptystring)

### ListBuildsInput
* ListBuildsInput `object`: Represents the input for a request action.
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonEmptyString](#nonemptystring)
  * Status [BuildStatus](#buildstatus)

### ListBuildsOutput
* ListBuildsOutput `object`: Represents the returned data in response to a request action.
  * Builds [BuildList](#buildlist)
  * NextToken [NonEmptyString](#nonemptystring)

### ListFleetsInput
* ListFleetsInput `object`: Represents the input for a request action.
  * BuildId [BuildId](#buildid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### ListFleetsOutput
* ListFleetsOutput `object`: Represents the returned data in response to a request action.
  * FleetIds [FleetIdList](#fleetidlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### MatchedPlayerSession
* MatchedPlayerSession `object`: <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionId [PlayerSessionId](#playersessionid)

### MatchedPlayerSessionList
* MatchedPlayerSessionList `array`
  * items [MatchedPlayerSession](#matchedplayersession)

### MatchmakerData
* MatchmakerData `string`

### MatchmakingAcceptanceTimeoutInteger
* MatchmakingAcceptanceTimeoutInteger `integer`

### MatchmakingConfiguration
* MatchmakingConfiguration `object`: Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
  * AcceptanceRequired [BooleanModel](#booleanmodel)
  * AcceptanceTimeoutSeconds [MatchmakingAcceptanceTimeoutInteger](#matchmakingacceptancetimeoutinteger)
  * AdditionalPlayerCount [WholeNumber](#wholenumber)
  * CreationTime [Timestamp](#timestamp)
  * CustomEventData [CustomEventData](#customeventdata)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionQueueArns [QueueArnsList](#queuearnslist)
  * Name [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * NotificationTarget [SnsArnStringModel](#snsarnstringmodel)
  * RequestTimeoutSeconds [MatchmakingRequestTimeoutInteger](#matchmakingrequesttimeoutinteger)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

### MatchmakingConfigurationList
* MatchmakingConfigurationList `array`
  * items [MatchmakingConfiguration](#matchmakingconfiguration)

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
* MatchmakingRuleSet `object`: <p>Set of rule statements, used with FlexMatch, that determine how to build a certain kind of player match. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a FlexMatch Rule Set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul>
  * CreationTime [Timestamp](#timestamp)
  * RuleSetBody **required** [RuleSetBody](#rulesetbody)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

### MatchmakingRuleSetList
* MatchmakingRuleSetList `array`
  * items [MatchmakingRuleSet](#matchmakingruleset)

### MatchmakingRuleSetNameList
* MatchmakingRuleSetNameList `array`
  * items [MatchmakingIdStringModel](#matchmakingidstringmodel)

### MatchmakingTicket
* MatchmakingTicket `object`: Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
  * ConfigurationName [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * EndTime [Timestamp](#timestamp)
  * EstimatedWaitTime [WholeNumber](#wholenumber)
  * GameSessionConnectionInfo [GameSessionConnectionInfo](#gamesessionconnectioninfo)
  * Players [PlayerList](#playerlist)
  * StartTime [Timestamp](#timestamp)
  * Status [MatchmakingConfigurationStatus](#matchmakingconfigurationstatus)
  * StatusMessage [StringModel](#stringmodel)
  * StatusReason [StringModel](#stringmodel)
  * TicketId [MatchmakingIdStringModel](#matchmakingidstringmodel)

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

### NonZeroAndMaxString
* NonZeroAndMaxString `string`

### NotFoundException
* NotFoundException `object`: A service resource associated with the request could not be found. Clients should not retry such requests.
  * Message [NonEmptyString](#nonemptystring)

### OperatingSystem
* OperatingSystem `string` (values: WINDOWS_2012, AMAZON_LINUX)

### PlacedPlayerSession
* PlacedPlayerSession `object`: <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionId [PlayerSessionId](#playersessionid)

### PlacedPlayerSessionList
* PlacedPlayerSessionList `array`
  * items [PlacedPlayerSession](#placedplayersession)

### Player
* Player `object`: Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
  * LatencyInMs [LatencyMap](#latencymap)
  * PlayerAttributes [PlayerAttributeMap](#playerattributemap)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Team [NonZeroAndMaxString](#nonzeroandmaxstring)

### PlayerAttributeMap
* PlayerAttributeMap `array`
  * items `object`
    * key [NonZeroAndMaxString](#nonzeroandmaxstring)
    * value [AttributeValue](#attributevalue)

### PlayerData
* PlayerData `string`

### PlayerDataMap
* PlayerDataMap `array`
  * items `object`
    * key [NonZeroAndMaxString](#nonzeroandmaxstring)
    * value [PlayerData](#playerdata)

### PlayerIdList
* PlayerIdList `array`
  * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### PlayerLatency
* PlayerLatency `object`: Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified region. The relative difference between a player's latency values for multiple regions are used to determine which fleets are best suited to place a new game session for the player. 
  * LatencyInMilliseconds [Float](#float)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * RegionIdentifier [NonZeroAndMaxString](#nonzeroandmaxstring)

### PlayerLatencyList
* PlayerLatencyList `array`
  * items [PlayerLatency](#playerlatency)

### PlayerLatencyPolicy
* PlayerLatencyPolicy `object`: <p>Queue setting that determines the highest latency allowed for individual players when placing a game session. When a latency policy is in force, a game session cannot be placed at any destination in a region where a player is reporting latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.</p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
  * MaximumIndividualPlayerLatencyMilliseconds [WholeNumber](#wholenumber)
  * PolicyDurationSeconds [WholeNumber](#wholenumber)

### PlayerLatencyPolicyList
* PlayerLatencyPolicyList `array`
  * items [PlayerLatencyPolicy](#playerlatencypolicy)

### PlayerList
* PlayerList `array`
  * items [Player](#player)

### PlayerSession
* PlayerSession `object`: <p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
  * CreationTime [Timestamp](#timestamp)
  * FleetId [FleetId](#fleetid)
  * GameSessionId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * IpAddress [IpAddress](#ipaddress)
  * PlayerData [PlayerData](#playerdata)
  * PlayerId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionId [PlayerSessionId](#playersessionid)
  * Port [PortNumber](#portnumber)
  * Status [PlayerSessionStatus](#playersessionstatus)
  * TerminationTime [Timestamp](#timestamp)

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
* PutScalingPolicyInput `object`: Represents the input for a request action.
  * ComparisonOperator [ComparisonOperatorType](#comparisonoperatortype)
  * EvaluationPeriods [PositiveInteger](#positiveinteger)
  * FleetId **required** [FleetId](#fleetid)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PolicyType [PolicyType](#policytype)
  * ScalingAdjustment [Integer](#integer)
  * ScalingAdjustmentType [ScalingAdjustmentType](#scalingadjustmenttype)
  * TargetConfiguration [TargetConfiguration](#targetconfiguration)
  * Threshold [Double](#double)

### PutScalingPolicyOutput
* PutScalingPolicyOutput `object`: Represents the returned data in response to a request action.
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)

### QueueArnsList
* QueueArnsList `array`
  * items [ArnStringModel](#arnstringmodel)

### RequestUploadCredentialsInput
* RequestUploadCredentialsInput `object`: Represents the input for a request action.
  * BuildId **required** [BuildId](#buildid)

### RequestUploadCredentialsOutput
* RequestUploadCredentialsOutput `object`: Represents the returned data in response to a request action.
  * StorageLocation [S3Location](#s3location)
  * UploadCredentials [AwsCredentials](#awscredentials)

### ResolveAliasInput
* ResolveAliasInput `object`: Represents the input for a request action.
  * AliasId **required** [AliasId](#aliasid)

### ResolveAliasOutput
* ResolveAliasOutput `object`: Represents the returned data in response to a request action.
  * FleetId [FleetId](#fleetid)

### ResourceCreationLimitPolicy
* ResourceCreationLimitPolicy `object`: <p>Policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example, with a policy of 10 new game sessions and a time period of 60 minutes, on receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>
  * NewGameSessionsPerCreator [WholeNumber](#wholenumber)
  * PolicyPeriodInMinutes [WholeNumber](#wholenumber)

### RoutingStrategy
* RoutingStrategy `object`: <p>Routing configuration for a fleet alias.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * FleetId [FleetId](#fleetid)
  * Message [FreeText](#freetext)
  * Type [RoutingStrategyType](#routingstrategytype)

### RoutingStrategyType
* RoutingStrategyType `string` (values: SIMPLE, TERMINAL)

### RuleSetBody
* RuleSetBody `string`

### RuleSetLimit
* RuleSetLimit `integer`

### RuntimeConfiguration
* RuntimeConfiguration `object`: <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. All fleets must have a run-time configuration. Each instance in the fleet launches the server processes specified in the run-time configuration and launches new ones as existing processes end. Each instance regularly checks for an updated run-time configuration and follows the new instructions. </p> <p>The run-time configuration enables the instances in a fleet to run multiple processes simultaneously. Potential scenarios are as follows: (1) Run multiple processes of a single game server executable to maximize usage of your hosting resources. (2) Run one or more processes of different build executables, such as your game server executable and a related program, or two or more different versions of a game server. (3) Run multiple processes of a single game server but with different launch parameters, for example to run one process on each instance in debug mode.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. A run-time configuration must specify fewer than this limit. To calculate the total number of processes specified in a run-time configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <code> <a>ServerProcess</a> </code> object in the run-time configuration.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * GameSessionActivationTimeoutSeconds [GameSessionActivationTimeoutSeconds](#gamesessionactivationtimeoutseconds)
  * MaxConcurrentGameSessionActivations [MaxConcurrentGameSessionActivations](#maxconcurrentgamesessionactivations)
  * ServerProcesses [ServerProcessList](#serverprocesslist)

### S3Location
* S3Location `object`: Location in Amazon Simple Storage Service (Amazon S3) where build files can be stored for access by Amazon GameLift. This location is specified in a <a>CreateBuild</a> request. For more details, see the <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build">Create a Build with Files in Amazon S3</a>.
  * Bucket [NonEmptyString](#nonemptystring)
  * Key [NonEmptyString](#nonemptystring)
  * RoleArn [NonEmptyString](#nonemptystring)

### ScalingAdjustmentType
* ScalingAdjustmentType `string` (values: ChangeInCapacity, ExactCapacity, PercentChangeInCapacity)

### ScalingPolicy
* ScalingPolicy `object`: <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * ComparisonOperator [ComparisonOperatorType](#comparisonoperatortype)
  * EvaluationPeriods [PositiveInteger](#positiveinteger)
  * FleetId [FleetId](#fleetid)
  * MetricName [MetricName](#metricname)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PolicyType [PolicyType](#policytype)
  * ScalingAdjustment [Integer](#integer)
  * ScalingAdjustmentType [ScalingAdjustmentType](#scalingadjustmenttype)
  * Status [ScalingStatusType](#scalingstatustype)
  * TargetConfiguration [TargetConfiguration](#targetconfiguration)
  * Threshold [Double](#double)

### ScalingPolicyList
* ScalingPolicyList `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingStatusType
* ScalingStatusType `string` (values: ACTIVE, UPDATE_REQUESTED, UPDATING, DELETE_REQUESTED, DELETING, DELETED, ERROR)

### SearchGameSessionsInput
* SearchGameSessionsInput `object`: Represents the input for a request action.
  * AliasId [AliasId](#aliasid)
  * FilterExpression [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId [FleetId](#fleetid)
  * Limit [PositiveInteger](#positiveinteger)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)
  * SortExpression [NonZeroAndMaxString](#nonzeroandmaxstring)

### SearchGameSessionsOutput
* SearchGameSessionsOutput `object`: Represents the returned data in response to a request action.
  * GameSessions [GameSessionList](#gamesessionlist)
  * NextToken [NonZeroAndMaxString](#nonzeroandmaxstring)

### ServerProcess
* ServerProcess `object`: A set of instructions for launching server processes on each instance in a fleet. Each instruction set identifies the location of the server executable, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's <code> <a>RuntimeConfiguration</a> </code>.
  * ConcurrentExecutions **required** [PositiveInteger](#positiveinteger)
  * LaunchPath **required** [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Parameters [NonZeroAndMaxString](#nonzeroandmaxstring)

### ServerProcessList
* ServerProcessList `array`
  * items [ServerProcess](#serverprocess)

### SnsArnStringModel
* SnsArnStringModel `string`

### StartFleetActionsInput
* StartFleetActionsInput `object`
  * Actions **required** [FleetActionList](#fleetactionlist)
  * FleetId **required** [FleetId](#fleetid)

### StartFleetActionsOutput
* StartFleetActionsOutput `object`

### StartGameSessionPlacementInput
* StartGameSessionPlacementInput `object`: Represents the input for a request action.
  * DesiredPlayerSessions [DesiredPlayerSessionList](#desiredplayersessionlist)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionName [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameSessionQueueName **required** [GameSessionQueueName](#gamesessionqueuename)
  * MaximumPlayerSessionCount **required** [WholeNumber](#wholenumber)
  * PlacementId **required** [IdStringModel](#idstringmodel)
  * PlayerLatencies [PlayerLatencyList](#playerlatencylist)

### StartGameSessionPlacementOutput
* StartGameSessionPlacementOutput `object`: Represents the returned data in response to a request action.
  * GameSessionPlacement [GameSessionPlacement](#gamesessionplacement)

### StartMatchBackfillInput
* StartMatchBackfillInput `object`: Represents the input for a request action.
  * ConfigurationName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * GameSessionArn **required** [ArnStringModel](#arnstringmodel)
  * Players **required** [PlayerList](#playerlist)
  * TicketId [MatchmakingIdStringModel](#matchmakingidstringmodel)

### StartMatchBackfillOutput
* StartMatchBackfillOutput `object`: Represents the returned data in response to a request action.
  * MatchmakingTicket [MatchmakingTicket](#matchmakingticket)

### StartMatchmakingInput
* StartMatchmakingInput `object`: Represents the input for a request action.
  * ConfigurationName **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * Players **required** [PlayerList](#playerlist)
  * TicketId [MatchmakingIdStringModel](#matchmakingidstringmodel)

### StartMatchmakingOutput
* StartMatchmakingOutput `object`: Represents the returned data in response to a request action.
  * MatchmakingTicket [MatchmakingTicket](#matchmakingticket)

### StopFleetActionsInput
* StopFleetActionsInput `object`
  * Actions **required** [FleetActionList](#fleetactionlist)
  * FleetId **required** [FleetId](#fleetid)

### StopFleetActionsOutput
* StopFleetActionsOutput `object`

### StopGameSessionPlacementInput
* StopGameSessionPlacementInput `object`: Represents the input for a request action.
  * PlacementId **required** [IdStringModel](#idstringmodel)

### StopGameSessionPlacementOutput
* StopGameSessionPlacementOutput `object`: Represents the returned data in response to a request action.
  * GameSessionPlacement [GameSessionPlacement](#gamesessionplacement)

### StopMatchmakingInput
* StopMatchmakingInput `object`: Represents the input for a request action.
  * TicketId **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)

### StopMatchmakingOutput
* StopMatchmakingOutput `object`

### StringDoubleMap
* StringDoubleMap `array`
  * items `object`
    * key [NonZeroAndMaxString](#nonzeroandmaxstring)
    * value [DoubleObject](#doubleobject)

### StringList
* StringList `array`
  * items [NonZeroAndMaxString](#nonzeroandmaxstring)

### StringModel
* StringModel `string`

### TargetConfiguration
* TargetConfiguration `object`: <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
  * TargetValue **required** [Double](#double)

### TerminalRoutingStrategyException
* TerminalRoutingStrategyException `object`: The service is unable to resolve the routing for a particular alias because it has a terminal <a>RoutingStrategy</a> associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified. 
  * Message [NonEmptyString](#nonemptystring)

### Timestamp
* Timestamp `string`

### UnauthorizedException
* UnauthorizedException `object`: The client failed authentication. Clients should not retry such requests.
  * Message [NonEmptyString](#nonemptystring)

### UnsupportedRegionException
* UnsupportedRegionException `object`: The requested operation is not supported in the region specified.
  * Message [NonEmptyString](#nonemptystring)

### UpdateAliasInput
* UpdateAliasInput `object`: Represents the input for a request action.
  * AliasId **required** [AliasId](#aliasid)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Name [NonBlankAndLengthConstraintString](#nonblankandlengthconstraintstring)
  * RoutingStrategy [RoutingStrategy](#routingstrategy)

### UpdateAliasOutput
* UpdateAliasOutput `object`: Represents the returned data in response to a request action.
  * Alias [Alias](#alias)

### UpdateBuildInput
* UpdateBuildInput `object`: Represents the input for a request action.
  * BuildId **required** [BuildId](#buildid)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Version [NonZeroAndMaxString](#nonzeroandmaxstring)

### UpdateBuildOutput
* UpdateBuildOutput `object`: Represents the returned data in response to a request action.
  * Build [Build](#build)

### UpdateFleetAttributesInput
* UpdateFleetAttributesInput `object`: Represents the input for a request action.
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * FleetId **required** [FleetId](#fleetid)
  * MetricGroups [MetricGroupList](#metricgrouplist)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * NewGameSessionProtectionPolicy [ProtectionPolicy](#protectionpolicy)
  * ResourceCreationLimitPolicy [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy)

### UpdateFleetAttributesOutput
* UpdateFleetAttributesOutput `object`: Represents the returned data in response to a request action.
  * FleetId [FleetId](#fleetid)

### UpdateFleetCapacityInput
* UpdateFleetCapacityInput `object`: Represents the input for a request action.
  * DesiredInstances [WholeNumber](#wholenumber)
  * FleetId **required** [FleetId](#fleetid)
  * MaxSize [WholeNumber](#wholenumber)
  * MinSize [WholeNumber](#wholenumber)

### UpdateFleetCapacityOutput
* UpdateFleetCapacityOutput `object`: Represents the returned data in response to a request action.
  * FleetId [FleetId](#fleetid)

### UpdateFleetPortSettingsInput
* UpdateFleetPortSettingsInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * InboundPermissionAuthorizations [IpPermissionsList](#ippermissionslist)
  * InboundPermissionRevocations [IpPermissionsList](#ippermissionslist)

### UpdateFleetPortSettingsOutput
* UpdateFleetPortSettingsOutput `object`: Represents the returned data in response to a request action.
  * FleetId [FleetId](#fleetid)

### UpdateGameSessionInput
* UpdateGameSessionInput `object`: Represents the input for a request action.
  * GameSessionId **required** [ArnStringModel](#arnstringmodel)
  * MaximumPlayerSessionCount [WholeNumber](#wholenumber)
  * Name [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PlayerSessionCreationPolicy [PlayerSessionCreationPolicy](#playersessioncreationpolicy)
  * ProtectionPolicy [ProtectionPolicy](#protectionpolicy)

### UpdateGameSessionOutput
* UpdateGameSessionOutput `object`: Represents the returned data in response to a request action.
  * GameSession [GameSession](#gamesession)

### UpdateGameSessionQueueInput
* UpdateGameSessionQueueInput `object`: Represents the input for a request action.
  * Destinations [GameSessionQueueDestinationList](#gamesessionqueuedestinationlist)
  * Name **required** [GameSessionQueueName](#gamesessionqueuename)
  * PlayerLatencyPolicies [PlayerLatencyPolicyList](#playerlatencypolicylist)
  * TimeoutInSeconds [WholeNumber](#wholenumber)

### UpdateGameSessionQueueOutput
* UpdateGameSessionQueueOutput `object`: Represents the returned data in response to a request action.
  * GameSessionQueue [GameSessionQueue](#gamesessionqueue)

### UpdateMatchmakingConfigurationInput
* UpdateMatchmakingConfigurationInput `object`: Represents the input for a request action.
  * AcceptanceRequired [BooleanModel](#booleanmodel)
  * AcceptanceTimeoutSeconds [MatchmakingAcceptanceTimeoutInteger](#matchmakingacceptancetimeoutinteger)
  * AdditionalPlayerCount [WholeNumber](#wholenumber)
  * CustomEventData [CustomEventData](#customeventdata)
  * Description [NonZeroAndMaxString](#nonzeroandmaxstring)
  * GameProperties [GamePropertyList](#gamepropertylist)
  * GameSessionData [GameSessionData](#gamesessiondata)
  * GameSessionQueueArns [QueueArnsList](#queuearnslist)
  * Name **required** [MatchmakingIdStringModel](#matchmakingidstringmodel)
  * NotificationTarget [SnsArnStringModel](#snsarnstringmodel)
  * RequestTimeoutSeconds [MatchmakingRequestTimeoutInteger](#matchmakingrequesttimeoutinteger)
  * RuleSetName [MatchmakingIdStringModel](#matchmakingidstringmodel)

### UpdateMatchmakingConfigurationOutput
* UpdateMatchmakingConfigurationOutput `object`: Represents the returned data in response to a request action.
  * Configuration [MatchmakingConfiguration](#matchmakingconfiguration)

### UpdateRuntimeConfigurationInput
* UpdateRuntimeConfigurationInput `object`: Represents the input for a request action.
  * FleetId **required** [FleetId](#fleetid)
  * RuntimeConfiguration **required** [RuntimeConfiguration](#runtimeconfiguration)

### UpdateRuntimeConfigurationOutput
* UpdateRuntimeConfigurationOutput `object`: Represents the returned data in response to a request action.
  * RuntimeConfiguration [RuntimeConfiguration](#runtimeconfiguration)

### ValidateMatchmakingRuleSetInput
* ValidateMatchmakingRuleSetInput `object`: Represents the input for a request action.
  * RuleSetBody **required** [RuleSetBody](#rulesetbody)

### ValidateMatchmakingRuleSetOutput
* ValidateMatchmakingRuleSetOutput `object`: Represents the returned data in response to a request action.
  * Valid [BooleanModel](#booleanmodel)

### VpcPeeringAuthorization
* VpcPeeringAuthorization `object`: <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
  * CreationTime [Timestamp](#timestamp)
  * ExpirationTime [Timestamp](#timestamp)
  * GameLiftAwsAccountId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcAwsAccountId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId [NonZeroAndMaxString](#nonzeroandmaxstring)

### VpcPeeringAuthorizationList
* VpcPeeringAuthorizationList `array`
  * items [VpcPeeringAuthorization](#vpcpeeringauthorization)

### VpcPeeringConnection
* VpcPeeringConnection `object`: <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
  * FleetId [FleetId](#fleetid)
  * GameLiftVpcId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * IpV4CidrBlock [NonZeroAndMaxString](#nonzeroandmaxstring)
  * PeerVpcId [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Status [VpcPeeringConnectionStatus](#vpcpeeringconnectionstatus)
  * VpcPeeringConnectionId [NonZeroAndMaxString](#nonzeroandmaxstring)

### VpcPeeringConnectionList
* VpcPeeringConnectionList `array`
  * items [VpcPeeringConnection](#vpcpeeringconnection)

### VpcPeeringConnectionStatus
* VpcPeeringConnectionStatus `object`: Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>.
  * Code [NonZeroAndMaxString](#nonzeroandmaxstring)
  * Message [NonZeroAndMaxString](#nonzeroandmaxstring)

### WholeNumber
* WholeNumber `integer`


