# @datafire/amazonaws_managedblockchain

Client library for Amazon Managed Blockchain

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_managedblockchain
```
```js
let amazonaws_managedblockchain = require('@datafire/amazonaws_managedblockchain').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p/> <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Currently, Managed Blockchain supports the Hyperledger Fabric open source framework. </p>

## Actions

### ListInvitations



```js
amazonaws_managedblockchain.ListInvitations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInvitationsOutput](#listinvitationsoutput)

### RejectInvitation



```js
amazonaws_managedblockchain.RejectInvitation({
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * invitationId **required** `string`

#### Output
* output [RejectInvitationOutput](#rejectinvitationoutput)

### ListNetworks



```js
amazonaws_managedblockchain.ListNetworks({}, context)
```

#### Input
* input `object`
  * name `string`
  * framework `string`
  * status `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListNetworksOutput](#listnetworksoutput)

### CreateNetwork



```js
amazonaws_managedblockchain.CreateNetwork({
  "ClientRequestToken": "",
  "Name": "",
  "Framework": "",
  "FrameworkVersion": "",
  "VotingPolicy": {},
  "MemberConfiguration": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required** `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
  * Description `string`: An optional description for the network.
  * Framework **required** `string` (values: HYPERLEDGER_FABRIC): The blockchain framework that the network uses.
  * FrameworkConfiguration `object`:  Configuration properties relevant to the network for the blockchain framework that the network uses. 
    * Fabric
      * Edition **required**
  * FrameworkVersion **required** `string`: The version of the blockchain framework that the network uses.
  * MemberConfiguration **required** `object`: Configuration properties of the member.
    * Description
    * FrameworkConfiguration
      * Fabric
        * AdminPassword **required**
        * AdminUsername **required**
    * LogPublishingConfiguration
      * Fabric
        * CaLogs
          * Cloudwatch
    * Name
  * Name **required** `string`: The name of the network.
  * VotingPolicy **required** `object`:  The voting rules for the network to decide if a proposal is accepted 
    * ApprovalThresholdPolicy
      * ProposalDurationInHours
      * ThresholdComparator
      * ThresholdPercentage

#### Output
* output [CreateNetworkOutput](#createnetworkoutput)

### GetNetwork



```js
amazonaws_managedblockchain.GetNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output [GetNetworkOutput](#getnetworkoutput)

### ListMembers



```js
amazonaws_managedblockchain.ListMembers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * name `string`
  * status `string`
  * isOwned `boolean`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListMembersOutput](#listmembersoutput)

### CreateMember



```js
amazonaws_managedblockchain.CreateMember({
  "networkId": "",
  "ClientRequestToken": "",
  "InvitationId": "",
  "MemberConfiguration": {}
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * ClientRequestToken **required** `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
  * InvitationId **required** `string`: The unique identifier of the invitation that is sent to the member to join the network.
  * MemberConfiguration **required** `object`: Configuration properties of the member.
    * Description
    * FrameworkConfiguration
      * Fabric
        * AdminPassword **required**
        * AdminUsername **required**
    * LogPublishingConfiguration
      * Fabric
        * CaLogs
          * Cloudwatch
    * Name

#### Output
* output [CreateMemberOutput](#creatememberoutput)

### DeleteMember



```js
amazonaws_managedblockchain.DeleteMember({
  "networkId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`

#### Output
* output [DeleteMemberOutput](#deletememberoutput)

### GetMember



```js
amazonaws_managedblockchain.GetMember({
  "networkId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`

#### Output
* output [GetMemberOutput](#getmemberoutput)

### UpdateMember



```js
amazonaws_managedblockchain.UpdateMember({
  "networkId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * LogPublishingConfiguration `object`: Configuration properties for logging events associated with a member of a Managed Blockchain network.
    * Fabric
      * CaLogs
        * Cloudwatch
          * Enabled

#### Output
* output [UpdateMemberOutput](#updatememberoutput)

### ListNodes



```js
amazonaws_managedblockchain.ListNodes({
  "networkId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * status `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListNodesOutput](#listnodesoutput)

### CreateNode



```js
amazonaws_managedblockchain.CreateNode({
  "networkId": "",
  "memberId": "",
  "ClientRequestToken": "",
  "NodeConfiguration": {}
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * ClientRequestToken **required** `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
  * NodeConfiguration **required** `object`: Configuration properties of a peer node.
    * AvailabilityZone
    * InstanceType
    * LogPublishingConfiguration
      * Fabric
        * ChaincodeLogs
          * Cloudwatch
        * PeerLogs
          * Cloudwatch
    * StateDB

#### Output
* output [CreateNodeOutput](#createnodeoutput)

### DeleteNode



```js
amazonaws_managedblockchain.DeleteNode({
  "networkId": "",
  "memberId": "",
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * nodeId **required** `string`

#### Output
* output [DeleteNodeOutput](#deletenodeoutput)

### GetNode



```js
amazonaws_managedblockchain.GetNode({
  "networkId": "",
  "memberId": "",
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * nodeId **required** `string`

#### Output
* output [GetNodeOutput](#getnodeoutput)

### UpdateNode



```js
amazonaws_managedblockchain.UpdateNode({
  "networkId": "",
  "memberId": "",
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * memberId **required** `string`
  * nodeId **required** `string`
  * LogPublishingConfiguration `object`: Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.
    * Fabric
      * ChaincodeLogs
        * Cloudwatch
          * Enabled
      * PeerLogs
        * Cloudwatch
          * Enabled

#### Output
* output [UpdateNodeOutput](#updatenodeoutput)

### ListProposals



```js
amazonaws_managedblockchain.ListProposals({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProposalsOutput](#listproposalsoutput)

### CreateProposal



```js
amazonaws_managedblockchain.CreateProposal({
  "networkId": "",
  "ClientRequestToken": "",
  "MemberId": "",
  "Actions": {}
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * Actions **required** `object`:  The actions to carry out if a proposal is <code>APPROVED</code>. 
    * Invitations
      * items [InviteAction](#inviteaction)
    * Removals
      * items [RemoveAction](#removeaction)
  * ClientRequestToken **required** `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
  * Description `string`: A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
  * MemberId **required** `string`: The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.

#### Output
* output [CreateProposalOutput](#createproposaloutput)

### GetProposal



```js
amazonaws_managedblockchain.GetProposal({
  "networkId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * proposalId **required** `string`

#### Output
* output [GetProposalOutput](#getproposaloutput)

### ListProposalVotes



```js
amazonaws_managedblockchain.ListProposalVotes({
  "networkId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * proposalId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProposalVotesOutput](#listproposalvotesoutput)

### VoteOnProposal



```js
amazonaws_managedblockchain.VoteOnProposal({
  "networkId": "",
  "proposalId": "",
  "VoterMemberId": "",
  "Vote": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * proposalId **required** `string`
  * Vote **required** `string` (values: YES, NO):  The value of the vote. 
  * VoterMemberId **required** `string`: The unique identifier of the member casting the vote. 

#### Output
* output [VoteOnProposalOutput](#voteonproposaloutput)



## Definitions

### AccessDeniedException


### ApprovalThresholdPolicy
* ApprovalThresholdPolicy `object`: A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
  * ProposalDurationInHours
  * ThresholdComparator
  * ThresholdPercentage

### AvailabilityZoneString
* AvailabilityZoneString `string`

### ClientRequestTokenString
* ClientRequestTokenString `string`

### CreateMemberInput
* CreateMemberInput `object`
  * ClientRequestToken **required**
  * InvitationId **required**
  * MemberConfiguration **required**
    * Description
    * FrameworkConfiguration **required**
      * Fabric
        * AdminPassword **required**
        * AdminUsername **required**
    * LogPublishingConfiguration
      * Fabric
        * CaLogs
          * Cloudwatch
    * Name **required**

### CreateMemberOutput
* CreateMemberOutput `object`
  * MemberId

### CreateNetworkInput
* CreateNetworkInput `object`
  * ClientRequestToken **required**
  * Description
  * Framework **required**
  * FrameworkConfiguration
    * Fabric
      * Edition **required**
  * FrameworkVersion **required**
  * MemberConfiguration **required**
    * Description
    * FrameworkConfiguration **required**
      * Fabric
        * AdminPassword **required**
        * AdminUsername **required**
    * LogPublishingConfiguration
      * Fabric
        * CaLogs
          * Cloudwatch
    * Name **required**
  * Name **required**
  * VotingPolicy **required**
    * ApprovalThresholdPolicy
      * ProposalDurationInHours
      * ThresholdComparator
      * ThresholdPercentage

### CreateNetworkOutput
* CreateNetworkOutput `object`
  * MemberId
  * NetworkId

### CreateNodeInput
* CreateNodeInput `object`
  * ClientRequestToken **required**
  * NodeConfiguration **required**
    * AvailabilityZone **required**
    * InstanceType **required**
    * LogPublishingConfiguration
      * Fabric
        * ChaincodeLogs
          * Cloudwatch
        * PeerLogs
          * Cloudwatch
    * StateDB

### CreateNodeOutput
* CreateNodeOutput `object`
  * NodeId

### CreateProposalInput
* CreateProposalInput `object`
  * Actions **required**
    * Invitations
      * items [InviteAction](#inviteaction)
    * Removals
      * items [RemoveAction](#removeaction)
  * ClientRequestToken **required**
  * Description
  * MemberId **required**

### CreateProposalOutput
* CreateProposalOutput `object`
  * ProposalId

### DeleteMemberInput
* DeleteMemberInput `object`

### DeleteMemberOutput
* DeleteMemberOutput `object`

### DeleteNodeInput
* DeleteNodeInput `object`

### DeleteNodeOutput
* DeleteNodeOutput `object`

### DescriptionString
* DescriptionString `string`

### Edition
* Edition `string` (values: STARTER, STANDARD)

### Enabled
* Enabled `boolean`

### Framework
* Framework `string` (values: HYPERLEDGER_FABRIC)

### FrameworkVersionString
* FrameworkVersionString `string`

### GetMemberInput
* GetMemberInput `object`

### GetMemberOutput
* GetMemberOutput `object`
  * Member
    * CreationDate
    * Description
    * FrameworkAttributes
      * Fabric
        * AdminUsername
        * CaEndpoint
    * Id
    * LogPublishingConfiguration
      * Fabric
        * CaLogs
          * Cloudwatch
    * Name
    * NetworkId
    * Status

### GetNetworkInput
* GetNetworkInput `object`

### GetNetworkOutput
* GetNetworkOutput `object`
  * Network
    * CreationDate
    * Description
    * Framework
    * FrameworkAttributes
      * Fabric
        * Edition
        * OrderingServiceEndpoint
    * FrameworkVersion
    * Id
    * Name
    * Status
    * VotingPolicy
      * ApprovalThresholdPolicy
        * ProposalDurationInHours
        * ThresholdComparator
        * ThresholdPercentage
    * VpcEndpointServiceName

### GetNodeInput
* GetNodeInput `object`

### GetNodeOutput
* GetNodeOutput `object`
  * Node
    * AvailabilityZone
    * CreationDate
    * FrameworkAttributes
      * Fabric
        * PeerEndpoint
        * PeerEventEndpoint
    * Id
    * InstanceType
    * LogPublishingConfiguration
      * Fabric
        * ChaincodeLogs
          * Cloudwatch
        * PeerLogs
          * Cloudwatch
    * MemberId
    * NetworkId
    * StateDB
    * Status

### GetProposalInput
* GetProposalInput `object`

### GetProposalOutput
* GetProposalOutput `object`
  * Proposal
    * Actions
      * Invitations
        * items [InviteAction](#inviteaction)
      * Removals
        * items [RemoveAction](#removeaction)
    * CreationDate
    * Description
    * ExpirationDate
    * NetworkId
    * NoVoteCount
    * OutstandingVoteCount
    * ProposalId
    * ProposedByMemberId
    * ProposedByMemberName
    * Status
    * YesVoteCount

### IllegalActionException


### InstanceTypeString
* InstanceTypeString `string`

### InternalServiceErrorException


### InvalidRequestException


### Invitation
* Invitation `object`: An invitation to an AWS account to create a member and join the network.
  * CreationDate
  * ExpirationDate
  * InvitationId
  * NetworkSummary [NetworkSummary](#networksummary)
  * Status

### InvitationList
* InvitationList `array`
  * items [Invitation](#invitation)

### InvitationStatus
* InvitationStatus `string` (values: PENDING, ACCEPTED, ACCEPTING, REJECTED, EXPIRED)

### InviteAction
* InviteAction `object`: An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.
  * Principal **required**

### InviteActionList
* InviteActionList `array`
  * items [InviteAction](#inviteaction)

### IsOwned
* IsOwned `boolean`

### ListInvitationsInput
* ListInvitationsInput `object`

### ListInvitationsOutput
* ListInvitationsOutput `object`
  * Invitations
    * items [Invitation](#invitation)
  * NextToken

### ListMembersInput
* ListMembersInput `object`

### ListMembersOutput
* ListMembersOutput `object`
  * Members
    * items [MemberSummary](#membersummary)
  * NextToken

### ListNetworksInput
* ListNetworksInput `object`

### ListNetworksOutput
* ListNetworksOutput `object`
  * Networks
    * items [NetworkSummary](#networksummary)
  * NextToken

### ListNodesInput
* ListNodesInput `object`

### ListNodesOutput
* ListNodesOutput `object`
  * NextToken
  * Nodes
    * items [NodeSummary](#nodesummary)

### ListProposalVotesInput
* ListProposalVotesInput `object`

### ListProposalVotesOutput
* ListProposalVotesOutput `object`
  * NextToken
  * ProposalVotes
    * items [VoteSummary](#votesummary)

### ListProposalsInput
* ListProposalsInput `object`

### ListProposalsOutput
* ListProposalsOutput `object`
  * NextToken
  * Proposals
    * items [ProposalSummary](#proposalsummary)

### LogConfiguration
* LogConfiguration `object`: A configuration for logging events.
  * Enabled

### LogConfigurations
* LogConfigurations `object`: A collection of log configurations.
  * Cloudwatch
    * Enabled

### Member
* Member `object`: Member configuration properties.
  * CreationDate
  * Description
  * FrameworkAttributes
    * Fabric
      * AdminUsername
      * CaEndpoint
  * Id
  * LogPublishingConfiguration
    * Fabric
      * CaLogs
        * Cloudwatch
          * Enabled
  * Name
  * NetworkId
  * Status

### MemberConfiguration
* MemberConfiguration `object`: Configuration properties of the member.
  * Description
  * FrameworkConfiguration **required**
    * Fabric
      * AdminPassword **required**
      * AdminUsername **required**
  * LogPublishingConfiguration
    * Fabric
      * CaLogs
        * Cloudwatch
          * Enabled
  * Name **required**

### MemberFabricAttributes
* MemberFabricAttributes `object`: Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.
  * AdminUsername
  * CaEndpoint

### MemberFabricConfiguration
* MemberFabricConfiguration `object`: Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.
  * AdminPassword **required**
  * AdminUsername **required**

### MemberFabricLogPublishingConfiguration
* MemberFabricLogPublishingConfiguration `object`: Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.
  * CaLogs
    * Cloudwatch
      * Enabled

### MemberFrameworkAttributes
* MemberFrameworkAttributes `object`: Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.
  * Fabric
    * AdminUsername
    * CaEndpoint

### MemberFrameworkConfiguration
* MemberFrameworkConfiguration `object`: Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
  * Fabric
    * AdminPassword **required**
    * AdminUsername **required**

### MemberListMaxResults
* MemberListMaxResults `integer`

### MemberLogPublishingConfiguration
* MemberLogPublishingConfiguration `object`: Configuration properties for logging events associated with a member of a Managed Blockchain network.
  * Fabric
    * CaLogs
      * Cloudwatch
        * Enabled

### MemberStatus
* MemberStatus `string` (values: CREATING, AVAILABLE, CREATE_FAILED, UPDATING, DELETING, DELETED)

### MemberSummary
* MemberSummary `object`: A summary of configuration properties for a member.
  * CreationDate
  * Description
  * Id
  * IsOwned
  * Name
  * Status

### MemberSummaryList
* MemberSummaryList `array`
  * items [MemberSummary](#membersummary)

### NameString
* NameString `string`

### Network
* Network `object`: Network configuration properties.
  * CreationDate
  * Description
  * Framework
  * FrameworkAttributes
    * Fabric
      * Edition
      * OrderingServiceEndpoint
  * FrameworkVersion
  * Id
  * Name
  * Status
  * VotingPolicy
    * ApprovalThresholdPolicy
      * ProposalDurationInHours
      * ThresholdComparator
      * ThresholdPercentage
  * VpcEndpointServiceName

### NetworkFabricAttributes
* NetworkFabricAttributes `object`: Attributes of Hyperledger Fabric for a network.
  * Edition
  * OrderingServiceEndpoint

### NetworkFabricConfiguration
* NetworkFabricConfiguration `object`: Hyperledger Fabric configuration properties for the network.
  * Edition **required**

### NetworkFrameworkAttributes
* NetworkFrameworkAttributes `object`: Attributes relevant to the network for the blockchain framework that the network uses.
  * Fabric
    * Edition
    * OrderingServiceEndpoint

### NetworkFrameworkConfiguration
* NetworkFrameworkConfiguration `object`:  Configuration properties relevant to the network for the blockchain framework that the network uses. 
  * Fabric
    * Edition **required**

### NetworkListMaxResults
* NetworkListMaxResults `integer`

### NetworkMemberNameString
* NetworkMemberNameString `string`

### NetworkStatus
* NetworkStatus `string` (values: CREATING, AVAILABLE, CREATE_FAILED, DELETING, DELETED)

### NetworkSummary
* NetworkSummary `object`: A summary of network configuration properties.
  * CreationDate
  * Description
  * Framework
  * FrameworkVersion
  * Id
  * Name
  * Status

### NetworkSummaryList
* NetworkSummaryList `array`
  * items [NetworkSummary](#networksummary)

### Node
* Node `object`: Configuration properties of a peer node.
  * AvailabilityZone
  * CreationDate
  * FrameworkAttributes
    * Fabric
      * PeerEndpoint
      * PeerEventEndpoint
  * Id
  * InstanceType
  * LogPublishingConfiguration
    * Fabric
      * ChaincodeLogs
        * Cloudwatch
          * Enabled
      * PeerLogs
        * Cloudwatch
          * Enabled
  * MemberId
  * NetworkId
  * StateDB
  * Status

### NodeConfiguration
* NodeConfiguration `object`: Configuration properties of a peer node.
  * AvailabilityZone **required**
  * InstanceType **required**
  * LogPublishingConfiguration
    * Fabric
      * ChaincodeLogs
        * Cloudwatch
          * Enabled
      * PeerLogs
        * Cloudwatch
          * Enabled
  * StateDB

### NodeFabricAttributes
* NodeFabricAttributes `object`: Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.
  * PeerEndpoint
  * PeerEventEndpoint

### NodeFabricLogPublishingConfiguration
* NodeFabricLogPublishingConfiguration `object`: Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.
  * ChaincodeLogs
    * Cloudwatch
      * Enabled
  * PeerLogs
    * Cloudwatch
      * Enabled

### NodeFrameworkAttributes
* NodeFrameworkAttributes `object`: Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses.
  * Fabric
    * PeerEndpoint
    * PeerEventEndpoint

### NodeListMaxResults
* NodeListMaxResults `integer`

### NodeLogPublishingConfiguration
* NodeLogPublishingConfiguration `object`: Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.
  * Fabric
    * ChaincodeLogs
      * Cloudwatch
        * Enabled
    * PeerLogs
      * Cloudwatch
        * Enabled

### NodeStatus
* NodeStatus `string` (values: CREATING, AVAILABLE, CREATE_FAILED, UPDATING, DELETING, DELETED, FAILED)

### NodeSummary
* NodeSummary `object`: A summary of configuration properties for a peer node.
  * AvailabilityZone
  * CreationDate
  * Id
  * InstanceType
  * Status

### NodeSummaryList
* NodeSummaryList `array`
  * items [NodeSummary](#nodesummary)

### PaginationToken
* PaginationToken `string`

### PasswordString
* PasswordString `string`

### PrincipalString
* PrincipalString `string`

### Proposal
* Proposal `object`: Properties of a proposal on a Managed Blockchain network.
  * Actions
    * Invitations
      * items [InviteAction](#inviteaction)
    * Removals
      * items [RemoveAction](#removeaction)
  * CreationDate
  * Description
  * ExpirationDate
  * NetworkId
  * NoVoteCount
  * OutstandingVoteCount
  * ProposalId
  * ProposedByMemberId
  * ProposedByMemberName
  * Status
  * YesVoteCount

### ProposalActions
* ProposalActions `object`:  The actions to carry out if a proposal is <code>APPROVED</code>. 
  * Invitations
    * items [InviteAction](#inviteaction)
  * Removals
    * items [RemoveAction](#removeaction)

### ProposalDurationInt
* ProposalDurationInt `integer`

### ProposalListMaxResults
* ProposalListMaxResults `integer`

### ProposalStatus
* ProposalStatus `string` (values: IN_PROGRESS, APPROVED, REJECTED, EXPIRED, ACTION_FAILED)

### ProposalSummary
* ProposalSummary `object`: Properties of a proposal.
  * CreationDate
  * Description
  * ExpirationDate
  * ProposalId
  * ProposedByMemberId
  * ProposedByMemberName
  * Status

### ProposalSummaryList
* ProposalSummaryList `array`
  * items [ProposalSummary](#proposalsummary)

### ProposalVoteList
* ProposalVoteList `array`
  * items [VoteSummary](#votesummary)

### RejectInvitationInput
* RejectInvitationInput `object`

### RejectInvitationOutput
* RejectInvitationOutput `object`

### RemoveAction
* RemoveAction `object`: An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.
  * MemberId **required**

### RemoveActionList
* RemoveActionList `array`
  * items [RemoveAction](#removeaction)

### ResourceAlreadyExistsException


### ResourceIdString
* ResourceIdString `string`

### ResourceLimitExceededException


### ResourceNotFoundException


### ResourceNotReadyException


### StateDBType
* StateDBType `string` (values: LevelDB, CouchDB)

### String
* String `string`

### ThresholdComparator
* ThresholdComparator `string` (values: GREATER_THAN, GREATER_THAN_OR_EQUAL_TO)

### ThresholdPercentageInt
* ThresholdPercentageInt `integer`

### ThrottlingException


### Timestamp
* Timestamp `string`

### UpdateMemberInput
* UpdateMemberInput `object`
  * LogPublishingConfiguration
    * Fabric
      * CaLogs
        * Cloudwatch
          * Enabled

### UpdateMemberOutput
* UpdateMemberOutput `object`

### UpdateNodeInput
* UpdateNodeInput `object`
  * LogPublishingConfiguration
    * Fabric
      * ChaincodeLogs
        * Cloudwatch
          * Enabled
      * PeerLogs
        * Cloudwatch
          * Enabled

### UpdateNodeOutput
* UpdateNodeOutput `object`

### UsernameString
* UsernameString `string`

### VoteCount
* VoteCount `integer`

### VoteOnProposalInput
* VoteOnProposalInput `object`
  * Vote **required**
  * VoterMemberId **required**

### VoteOnProposalOutput
* VoteOnProposalOutput `object`

### VoteSummary
* VoteSummary `object`:  Properties of an individual vote that a member cast for a proposal. 
  * MemberId
  * MemberName
  * Vote

### VoteValue
* VoteValue `string` (values: YES, NO)

### VotingPolicy
* VotingPolicy `object`:  The voting rules for the network to decide if a proposal is accepted 
  * ApprovalThresholdPolicy
    * ProposalDurationInHours
    * ThresholdComparator
    * ThresholdPercentage


