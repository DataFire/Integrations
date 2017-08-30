# @datafire/amazonaws_gamelift

Client library for Amazon GameLift

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_gamelift
```

```js
let datafire = require('datafire');
let amazonaws_gamelift = require('@datafire/amazonaws_gamelift').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_gamelift.CreateAlias({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon GameLift Service</fullname> <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server solution for their multiplayer games. Amazon GameLift provides tools for the following tasks: (1) acquire computing resources and deploy game servers, (2) scale game server capacity to meet player demand, (3) host game sessions and manage player access, and (4) track in-depth metrics on player usage and server performance.</p> <p>The Amazon GameLift service API includes two important function sets:</p> <ul> <li> <p> <b>Manage game sessions and player access</b> – Retrieve information on available game sessions; create new game sessions; send player requests to join a game session.</p> </li> <li> <p> <b>Configure and manage game server resources</b> – Manage builds, fleets, queues, and aliases; set autoscaling policies; retrieve logs and metrics.</p> </li> </ul> <p>This reference guide describes the low-level service API for Amazon GameLift. You can use the API functionality with these tools: </p> <ul> <li> <p>The Amazon Web Services software development kit (<a href="http://aws.amazon.com/tools/#sdk">AWS SDK</a>) is available in <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-supported.html#gamelift-supported-clients">multiple languages</a> including C++ and C#. Use the SDK to access the API programmatically from an application, such as a game client.</p> </li> <li> <p>The <a href="http://aws.amazon.com/cli/">AWS command-line interface</a> (CLI) tool is primarily useful for handling administrative actions, such as setting up and managing Amazon GameLift settings and resources. You can use the AWS CLI to manage all of your AWS services.</p> </li> <li> <p>The <a href="https://console.aws.amazon.com/gamelift/home">AWS Management Console</a> for Amazon GameLift provides a web interface to manage your Amazon GameLift settings and resources. The console includes a dashboard for tracking key resources, includings builds and fleets, and displays usage and performance metrics for your games as customizable graphs.</p> </li> <li> <p>Amazon GameLift Local is a tool for testing your game's integration with Amazon GameLift before deploying it on the service. This tools supports a subset of key API actions, which can be called from either the AWS CLI or programmatically. See <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing-local.html">Testing an Integration</a>.</p> </li> </ul> <p> <b>MORE RESOURCES</b> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a> – Learn more about Amazon GameLift features and how to use them. </p> </li> <li> <p> <a href="https://gamedev.amazon.com/forums/tutorials">Lumberyard and Amazon GameLift Tutorials</a> – Get started fast with walkthroughs and sample projects.</p> </li> <li> <p> <a href="http://aws.amazon.com/blogs/gamedev/">GameDev Blog</a> – Stay up to date with new features and techniques.</p> </li> <li> <p> <a href="https://gamedev.amazon.com/forums/spaces/123/gamelift-discussion.html">GameDev Forums</a> – Connect with the GameDev community.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/doc-history.html">Amazon GameLift Document History</a> – See changes to the Amazon GameLift service, SDKs, and documentation, as well as links to release notes. </p> </li> </ul> <p> <b>API SUMMARY</b> </p> <p>This list offers a functional overview of the Amazon GameLift service API.</p> <p> <b>Managing Games and Players</b> </p> <p>These actions allow you to start new game sessions, find existing game sessions, track status and other game session information, and enable access for players to join game sessions.</p> <ul> <li> <p> <b>Discover existing game sessions</b> </p> <ul> <li> <p> <a>SearchGameSessions</a> – Get all available game sessions or search for game sessions that match a set of criteria. </p> </li> </ul> </li> <li> <p> <b>Start a new game session</b> </p> <ul> <li> <p>Game session placement – Use a queue to process requests for new game sessions and place them on the best available fleet. Placement requests are asynchronous; game sessions are started whenever acceptable resources become available. </p> <ul> <li> <p> <a>StartGameSessionPlacement</a> – Request a new game session placement and add one or more players to it.</p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> – Get details on a placement request, including status.</p> </li> <li> <p> <a>StopGameSessionPlacement</a> – Cancel a placement request. </p> </li> </ul> </li> <li> <p> <a>CreateGameSession</a> – Request a new game session on a specific fleet. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> <li> <p> <b>Manage game session data</b> </p> <ul> <li> <p> <a>DescribeGameSessions</a> – Retrieve metadata for one or more game sessions, including length of time active and current player count. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> – Retrieve metadata and the game session protection setting for one or more game sessions.</p> </li> <li> <p> <a>UpdateGameSession</a> – Change game session settings, such as maximum player count and join policy.</p> </li> <li> <p> <a>GetGameSessionLogUrl</a> – Get the location of saved logs for a game session.</p> </li> </ul> </li> <li> <p> <b>Manage player sessions</b> </p> <ul> <li> <p> <a>CreatePlayerSession</a> – Send a request for a player to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>CreatePlayerSessions</a> – Send a request for multiple players to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribePlayerSessions</a> – Get details on player activity, including status, playing time, and player data. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> </ul> <p> <b>Setting Up and Managing Game Servers</b> </p> <p>When setting up Amazon GameLift resources for your game, you first <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">create a game build</a> and upload it to Amazon GameLift. You can then use these actions to configure and manage a fleet of resources to run your game servers, scale capacity to meet player demand, access performance and utilization metrics, and more.</p> <ul> <li> <p> <b>Manage game builds</b> </p> <ul> <li> <p> <a>CreateBuild</a> – Create a new build using files stored in an Amazon S3 bucket. (Update uploading permissions with <a>RequestUploadCredentials</a>.) To create a build and upload files from a local path, use the AWS CLI command <code>upload-build</code>.</p> </li> <li> <p> <a>ListBuilds</a> – Get a list of all builds uploaded to a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeBuild</a> – Retrieve information associated with a build.</p> </li> <li> <p> <a>UpdateBuild</a> – Change build metadata, including build name and version.</p> </li> <li> <p> <a>DeleteBuild</a> – Remove a build from Amazon GameLift.</p> </li> </ul> </li> <li> <p> <b>Manage fleets</b> </p> <ul> <li> <p> <a>CreateFleet</a> – Configure and activate a new fleet to run a build's game servers.</p> </li> <li> <p> <a>ListFleets</a> – Get a list of all fleet IDs in a Amazon GameLift region (all statuses).</p> </li> <li> <p> <a>DeleteFleet</a> – Terminate a fleet that is no longer running game servers or hosting players.</p> </li> <li> <p>View / update fleet configurations.</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> / <a>UpdateFleetAttributes</a> – View or change a fleet's metadata and settings for game session protection and resource creation limits.</p> </li> <li> <p> <a>DescribeFleetPortSettings</a> / <a>UpdateFleetPortSettings</a> – View or change the inbound permissions (IP address and port setting ranges) allowed for a fleet.</p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> / <a>UpdateRuntimeConfiguration</a> – View or change what server processes (and how many) to run on each instance in a fleet.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Control fleet capacity</b> </p> <ul> <li> <p> <a>DescribeEC2InstanceLimits</a> – Retrieve maximum number of instances allowed for the current AWS account and the current usage level.</p> </li> <li> <p> <a>DescribeFleetCapacity</a> / <a>UpdateFleetCapacity</a> – Retrieve the capacity settings and the current number of instances in a fleet; adjust fleet capacity settings to scale up or down.</p> </li> <li> <p>Autoscale – Manage autoscaling rules and apply them to a fleet.</p> <ul> <li> <p> <a>PutScalingPolicy</a> – Create a new autoscaling policy, or update an existing one.</p> </li> <li> <p> <a>DescribeScalingPolicies</a> – Retrieve an existing autoscaling policy.</p> </li> <li> <p> <a>DeleteScalingPolicy</a> – Delete an autoscaling policy and stop it from affecting a fleet's capacity.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Access fleet activity statistics</b> </p> <ul> <li> <p> <a>DescribeFleetUtilization</a> – Get current data on the number of server processes, game sessions, and players currently active on a fleet.</p> </li> <li> <p> <a>DescribeFleetEvents</a> – Get a fleet's logged events for a specified time span.</p> </li> <li> <p> <a>DescribeGameSessions</a> – Retrieve metadata associated with one or more game sessions, including length of time active and current player count.</p> </li> </ul> </li> <li> <p> <b>Remotely access an instance</b> </p> <ul> <li> <p> <a>DescribeInstances</a> – Get information on each instance in a fleet, including instance ID, IP address, and status.</p> </li> <li> <p> <a>GetInstanceAccess</a> – Request access credentials needed to remotely connect to a specified instance in a fleet.</p> </li> </ul> </li> <li> <p> <b>Manage fleet aliases</b> </p> <ul> <li> <p> <a>CreateAlias</a> – Define a new alias and optionally assign it to a fleet.</p> </li> <li> <p> <a>ListAliases</a> – Get all fleet aliases defined in a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeAlias</a> – Retrieve information on an existing alias.</p> </li> <li> <p> <a>UpdateAlias</a> – Change settings for a alias, such as redirecting it from one fleet to another.</p> </li> <li> <p> <a>DeleteAlias</a> – Remove an alias from the region.</p> </li> <li> <p> <a>ResolveAlias</a> – Get the fleet ID that a specified alias points to.</p> </li> </ul> </li> <li> <p> <b>Manage game session queues</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> – Create a queue for processing requests for new game sessions. </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> – Get data on all game session queues defined in a Amazon GameLift region.</p> </li> <li> <p> <a>UpdateGameSessionQueue</a> – Change the configuration of a game session queue.</p> </li> <li> <p> <a>DeleteGameSessionQueue</a> – Remove a game session queue from the region.</p> </li> </ul> </li> </ul>

## Actions
### CreateAlias



```js
amazonaws_gamelift.CreateAlias({
  "Name": "",
  "RoutingStrategy": {}
}, context)
```

#### Parameters
* Description (string)
* Name (string) **required**
* RoutingStrategy (object) **required** - Routing configuration for a fleet alias.

### CreateBuild



```js
amazonaws_gamelift.CreateBuild({}, context)
```

#### Parameters
* Name (string)
* OperatingSystem (string)
* StorageLocation (object) - Location in Amazon Simple Storage Service (Amazon S3) where build files can be stored for access by Amazon GameLift. This location is specified in a <a>CreateBuild</a> request. For more details, see the <a href="http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build">Create a Build with Files in Amazon S3</a>.
* Version (string)

### CreateFleet



```js
amazonaws_gamelift.CreateFleet({
  "Name": "",
  "BuildId": "",
  "EC2InstanceType": ""
}, context)
```

#### Parameters
* BuildId (string) **required**
* Description (string)
* EC2InboundPermissions (array)
* EC2InstanceType (string) **required**
* LogPaths (array)
* Name (string) **required**
* NewGameSessionProtectionPolicy (string)
* ResourceCreationLimitPolicy (object) - <p>Policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example, with a policy of 10 new game sessions and a time period of 60 minutes, on receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>
* RuntimeConfiguration (object) - <p>Collection of server process configurations that describe what processes should be run on each instance in a fleet. An instance can launch and maintain multiple server processes based on the runtime configuration; it regularly checks for an updated runtime configuration and starts new server processes to match the latest version.</p> <p>The key purpose of a runtime configuration with multiple server process configurations is to be able to run more than one kind of game server in a single fleet. You can include configurations for more than one server executable in order to run two or more different programs to run on the same instance. This option might be useful, for example, to run more than one version of your game server on the same fleet. Another option is to specify configurations for the same server executable but with different launch parameters.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes specified in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <code> <a>ServerProcess</a> </code> object in the runtime configuration.</p>
* ServerLaunchParameters (string)
* ServerLaunchPath (string)

### CreateGameSession



```js
amazonaws_gamelift.CreateGameSession({
  "MaximumPlayerSessionCount": 0
}, context)
```

#### Parameters
* AliasId (string)
* CreatorId (string)
* FleetId (string)
* GameProperties (array)
* GameSessionId (string)
* IdempotencyToken (string)
* MaximumPlayerSessionCount (integer) **required**
* Name (string)

### CreateGameSessionQueue



```js
amazonaws_gamelift.CreateGameSessionQueue({
  "Name": ""
}, context)
```

#### Parameters
* Destinations (array)
* Name (string) **required**
* PlayerLatencyPolicies (array)
* TimeoutInSeconds (integer)

### CreatePlayerSession



```js
amazonaws_gamelift.CreatePlayerSession({
  "GameSessionId": "",
  "PlayerId": ""
}, context)
```

#### Parameters
* GameSessionId (string) **required**
* PlayerData (string)
* PlayerId (string) **required**

### CreatePlayerSessions



```js
amazonaws_gamelift.CreatePlayerSessions({
  "GameSessionId": "",
  "PlayerIds": []
}, context)
```

#### Parameters
* GameSessionId (string) **required**
* PlayerDataMap (array)
* PlayerIds (array) **required**

### DeleteAlias



```js
amazonaws_gamelift.DeleteAlias({
  "AliasId": ""
}, context)
```

#### Parameters
* AliasId (string) **required**

### DeleteBuild



```js
amazonaws_gamelift.DeleteBuild({
  "BuildId": ""
}, context)
```

#### Parameters
* BuildId (string) **required**

### DeleteFleet



```js
amazonaws_gamelift.DeleteFleet({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**

### DeleteGameSessionQueue



```js
amazonaws_gamelift.DeleteGameSessionQueue({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteScalingPolicy



```js
amazonaws_gamelift.DeleteScalingPolicy({
  "Name": "",
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**
* Name (string) **required**

### DescribeAlias



```js
amazonaws_gamelift.DescribeAlias({
  "AliasId": ""
}, context)
```

#### Parameters
* AliasId (string) **required**

### DescribeBuild



```js
amazonaws_gamelift.DescribeBuild({
  "BuildId": ""
}, context)
```

#### Parameters
* BuildId (string) **required**

### DescribeEC2InstanceLimits



```js
amazonaws_gamelift.DescribeEC2InstanceLimits({}, context)
```

#### Parameters
* EC2InstanceType (string)

### DescribeFleetAttributes



```js
amazonaws_gamelift.DescribeFleetAttributes({}, context)
```

#### Parameters
* FleetIds (array)
* Limit (integer)
* NextToken (string)

### DescribeFleetCapacity



```js
amazonaws_gamelift.DescribeFleetCapacity({}, context)
```

#### Parameters
* FleetIds (array)
* Limit (integer)
* NextToken (string)

### DescribeFleetEvents



```js
amazonaws_gamelift.DescribeFleetEvents({
  "FleetId": ""
}, context)
```

#### Parameters
* EndTime (string)
* FleetId (string) **required**
* Limit (integer)
* NextToken (string)
* StartTime (string)

### DescribeFleetPortSettings



```js
amazonaws_gamelift.DescribeFleetPortSettings({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**

### DescribeFleetUtilization



```js
amazonaws_gamelift.DescribeFleetUtilization({}, context)
```

#### Parameters
* FleetIds (array)
* Limit (integer)
* NextToken (string)

### DescribeGameSessionDetails



```js
amazonaws_gamelift.DescribeGameSessionDetails({}, context)
```

#### Parameters
* AliasId (string)
* FleetId (string)
* GameSessionId (string)
* Limit (integer)
* NextToken (string)
* StatusFilter (string)

### DescribeGameSessionPlacement



```js
amazonaws_gamelift.DescribeGameSessionPlacement({
  "PlacementId": ""
}, context)
```

#### Parameters
* PlacementId (string) **required**

### DescribeGameSessionQueues



```js
amazonaws_gamelift.DescribeGameSessionQueues({}, context)
```

#### Parameters
* Limit (integer)
* Names (array)
* NextToken (string)

### DescribeGameSessions



```js
amazonaws_gamelift.DescribeGameSessions({}, context)
```

#### Parameters
* AliasId (string)
* FleetId (string)
* GameSessionId (string)
* Limit (integer)
* NextToken (string)
* StatusFilter (string)

### DescribeInstances



```js
amazonaws_gamelift.DescribeInstances({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**
* InstanceId (string)
* Limit (integer)
* NextToken (string)

### DescribePlayerSessions



```js
amazonaws_gamelift.DescribePlayerSessions({}, context)
```

#### Parameters
* GameSessionId (string)
* Limit (integer)
* NextToken (string)
* PlayerId (string)
* PlayerSessionId (string)
* PlayerSessionStatusFilter (string)

### DescribeRuntimeConfiguration



```js
amazonaws_gamelift.DescribeRuntimeConfiguration({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**

### DescribeScalingPolicies



```js
amazonaws_gamelift.DescribeScalingPolicies({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**
* Limit (integer)
* NextToken (string)
* StatusFilter (string)

### GetGameSessionLogUrl



```js
amazonaws_gamelift.GetGameSessionLogUrl({
  "GameSessionId": ""
}, context)
```

#### Parameters
* GameSessionId (string) **required**

### GetInstanceAccess



```js
amazonaws_gamelift.GetInstanceAccess({
  "FleetId": "",
  "InstanceId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**
* InstanceId (string) **required**

### ListAliases



```js
amazonaws_gamelift.ListAliases({}, context)
```

#### Parameters
* Limit (integer)
* Name (string)
* NextToken (string)
* RoutingStrategyType (string)

### ListBuilds



```js
amazonaws_gamelift.ListBuilds({}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* Status (string)

### ListFleets



```js
amazonaws_gamelift.ListFleets({}, context)
```

#### Parameters
* BuildId (string)
* Limit (integer)
* NextToken (string)

### PutScalingPolicy



```js
amazonaws_gamelift.PutScalingPolicy({
  "Name": "",
  "FleetId": "",
  "ScalingAdjustment": 0,
  "ScalingAdjustmentType": "",
  "Threshold": 0,
  "ComparisonOperator": "",
  "EvaluationPeriods": 0,
  "MetricName": ""
}, context)
```

#### Parameters
* ComparisonOperator (string) **required**
* EvaluationPeriods (integer) **required**
* FleetId (string) **required**
* MetricName (string) **required**
* Name (string) **required**
* ScalingAdjustment (integer) **required**
* ScalingAdjustmentType (string) **required**
* Threshold (number) **required**

### RequestUploadCredentials



```js
amazonaws_gamelift.RequestUploadCredentials({
  "BuildId": ""
}, context)
```

#### Parameters
* BuildId (string) **required**

### ResolveAlias



```js
amazonaws_gamelift.ResolveAlias({
  "AliasId": ""
}, context)
```

#### Parameters
* AliasId (string) **required**

### SearchGameSessions



```js
amazonaws_gamelift.SearchGameSessions({}, context)
```

#### Parameters
* AliasId (string)
* FilterExpression (string)
* FleetId (string)
* Limit (integer)
* NextToken (string)
* SortExpression (string)

### StartGameSessionPlacement



```js
amazonaws_gamelift.StartGameSessionPlacement({
  "PlacementId": "",
  "GameSessionQueueName": "",
  "MaximumPlayerSessionCount": 0
}, context)
```

#### Parameters
* DesiredPlayerSessions (array)
* GameProperties (array)
* GameSessionName (string)
* GameSessionQueueName (string) **required**
* MaximumPlayerSessionCount (integer) **required**
* PlacementId (string) **required**
* PlayerLatencies (array)

### StopGameSessionPlacement



```js
amazonaws_gamelift.StopGameSessionPlacement({
  "PlacementId": ""
}, context)
```

#### Parameters
* PlacementId (string) **required**

### UpdateAlias



```js
amazonaws_gamelift.UpdateAlias({
  "AliasId": ""
}, context)
```

#### Parameters
* AliasId (string) **required**
* Description (string)
* Name (string)
* RoutingStrategy (object) - Routing configuration for a fleet alias.

### UpdateBuild



```js
amazonaws_gamelift.UpdateBuild({
  "BuildId": ""
}, context)
```

#### Parameters
* BuildId (string) **required**
* Name (string)
* Version (string)

### UpdateFleetAttributes



```js
amazonaws_gamelift.UpdateFleetAttributes({
  "FleetId": ""
}, context)
```

#### Parameters
* Description (string)
* FleetId (string) **required**
* Name (string)
* NewGameSessionProtectionPolicy (string)
* ResourceCreationLimitPolicy (object) - <p>Policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example, with a policy of 10 new game sessions and a time period of 60 minutes, on receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>

### UpdateFleetCapacity



```js
amazonaws_gamelift.UpdateFleetCapacity({
  "FleetId": ""
}, context)
```

#### Parameters
* DesiredInstances (integer)
* FleetId (string) **required**
* MaxSize (integer)
* MinSize (integer)

### UpdateFleetPortSettings



```js
amazonaws_gamelift.UpdateFleetPortSettings({
  "FleetId": ""
}, context)
```

#### Parameters
* FleetId (string) **required**
* InboundPermissionAuthorizations (array)
* InboundPermissionRevocations (array)

### UpdateGameSession



```js
amazonaws_gamelift.UpdateGameSession({
  "GameSessionId": ""
}, context)
```

#### Parameters
* GameSessionId (string) **required**
* MaximumPlayerSessionCount (integer)
* Name (string)
* PlayerSessionCreationPolicy (string)
* ProtectionPolicy (string)

### UpdateGameSessionQueue



```js
amazonaws_gamelift.UpdateGameSessionQueue({
  "Name": ""
}, context)
```

#### Parameters
* Destinations (array)
* Name (string) **required**
* PlayerLatencyPolicies (array)
* TimeoutInSeconds (integer)

### UpdateRuntimeConfiguration



```js
amazonaws_gamelift.UpdateRuntimeConfiguration({
  "FleetId": "",
  "RuntimeConfiguration": {}
}, context)
```

#### Parameters
* FleetId (string) **required**
* RuntimeConfiguration (object) **required** - <p>Collection of server process configurations that describe what processes should be run on each instance in a fleet. An instance can launch and maintain multiple server processes based on the runtime configuration; it regularly checks for an updated runtime configuration and starts new server processes to match the latest version.</p> <p>The key purpose of a runtime configuration with multiple server process configurations is to be able to run more than one kind of game server in a single fleet. You can include configurations for more than one server executable in order to run two or more different programs to run on the same instance. This option might be useful, for example, to run more than one version of your game server on the same fleet. Another option is to specify configurations for the same server executable but with different launch parameters.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes specified in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <code> <a>ServerProcess</a> </code> object in the runtime configuration.</p>

