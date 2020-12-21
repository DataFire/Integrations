# @datafire/amazonaws_detective

Client library for Amazon Detective

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_detective
```
```js
let amazonaws_detective = require('@datafire/amazonaws_detective').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Detective uses machine learning and purpose-built visualizations to help you analyze and investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty.</p> <p>The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by a master account.</p> <p>Every behavior graph is specific to a Region. You can only use the API to manage graphs that belong to the Region that is associated with the currently selected endpoint.</p> <p>A Detective master account can use the Detective API to do the following:</p> <ul> <li> <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p> </li> <li> <p>View the list of member accounts in a behavior graph.</p> </li> <li> <p>Add member accounts to a behavior graph.</p> </li> <li> <p>Remove member accounts from a behavior graph.</p> </li> </ul> <p>A member account can use the Detective API to do the following:</p> <ul> <li> <p>View the list of behavior graphs that they are invited to.</p> </li> <li> <p>Accept an invitation to contribute to a behavior graph.</p> </li> <li> <p>Decline an invitation to contribute to a behavior graph.</p> </li> <li> <p>Remove their account from a behavior graph.</p> </li> </ul> <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>

## Actions

### CreateGraph



```js
amazonaws_detective.CreateGraph({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateGraphResponse](#creategraphresponse)

### StartMonitoringMember



```js
amazonaws_detective.StartMonitoringMember({
  "GraphArn": "",
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** `string`: <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
  * GraphArn **required** `string`: The ARN of the behavior graph.

#### Output
*Output schema unknown*

### CreateMembers



```js
amazonaws_detective.CreateMembers({
  "GraphArn": "",
  "Accounts": []
}, context)
```

#### Input
* input `object`
  * Accounts **required** `array`: The list of AWS accounts to invite to become member accounts in the behavior graph. For each invited account, the account list contains the account identifier and the AWS account root user email address.
    * items [Account](#account)
  * GraphArn **required** `string`: The ARN of the behavior graph to invite the member accounts to contribute their data to.
  * Message `string`: Customized message text to include in the invitation email message to the invited member accounts.

#### Output
* output [CreateMembersResponse](#createmembersresponse)

### GetMembers



```js
amazonaws_detective.GetMembers({
  "GraphArn": "",
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: <p>The list of AWS account identifiers for the member account for which to return member details.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>
    * items [AccountId](#accountid)
  * GraphArn **required** `string`: The ARN of the behavior graph for which to request the member details.

#### Output
* output [GetMembersResponse](#getmembersresponse)

### ListMembers



```js
amazonaws_detective.ListMembers({
  "GraphArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * GraphArn **required** `string`: The ARN of the behavior graph for which to retrieve the list of member accounts.
  * MaxResults `integer`: The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
  * NextToken `string`: For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.

#### Output
* output [ListMembersResponse](#listmembersresponse)

### DeleteMembers



```js
amazonaws_detective.DeleteMembers({
  "GraphArn": "",
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of AWS account identifiers for the member accounts to delete from the behavior graph.
    * items [AccountId](#accountid)
  * GraphArn **required** `string`: The ARN of the behavior graph to delete members from.

#### Output
* output [DeleteMembersResponse](#deletemembersresponse)

### DeleteGraph



```js
amazonaws_detective.DeleteGraph({
  "GraphArn": ""
}, context)
```

#### Input
* input `object`
  * GraphArn **required** `string`: The ARN of the behavior graph to disable.

#### Output
*Output schema unknown*

### ListGraphs



```js
amazonaws_detective.ListGraphs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
  * NextToken `string`: For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.

#### Output
* output [ListGraphsResponse](#listgraphsresponse)

### AcceptInvitation



```js
amazonaws_detective.AcceptInvitation({
  "GraphArn": ""
}, context)
```

#### Input
* input `object`
  * GraphArn **required** `string`: <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>

#### Output
*Output schema unknown*

### RejectInvitation



```js
amazonaws_detective.RejectInvitation({
  "GraphArn": ""
}, context)
```

#### Input
* input `object`
  * GraphArn **required** `string`: <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>

#### Output
*Output schema unknown*

### ListInvitations



```js
amazonaws_detective.ListInvitations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
  * NextToken `string`: For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### DisassociateMembership



```js
amazonaws_detective.DisassociateMembership({
  "GraphArn": ""
}, context)
```

#### Input
* input `object`
  * GraphArn **required** `string`: <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>

#### Output
*Output schema unknown*



## Definitions

### AcceptInvitationRequest
* AcceptInvitationRequest `object`
  * GraphArn **required**

### Account
* Account `object`: An AWS account that is the master of or a member of a behavior graph.
  * AccountId **required**
  * EmailAddress **required**

### AccountId
* AccountId `string`

### AccountIdList
* AccountIdList `array`
  * items [AccountId](#accountid)

### AccountList
* AccountList `array`
  * items [Account](#account)

### ConflictException


### CreateGraphResponse
* CreateGraphResponse `object`
  * GraphArn

### CreateMembersRequest
* CreateMembersRequest `object`
  * Accounts **required**
    * items [Account](#account)
  * GraphArn **required**
  * Message

### CreateMembersResponse
* CreateMembersResponse `object`
  * Members
    * items [MemberDetail](#memberdetail)
  * UnprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### DeleteGraphRequest
* DeleteGraphRequest `object`
  * GraphArn **required**

### DeleteMembersRequest
* DeleteMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)
  * GraphArn **required**

### DeleteMembersResponse
* DeleteMembersResponse `object`
  * AccountIds
    * items [AccountId](#accountid)
  * UnprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### DisassociateMembershipRequest
* DisassociateMembershipRequest `object`
  * GraphArn **required**

### EmailAddress
* EmailAddress `string`

### EmailMessage
* EmailMessage `string`

### GetMembersRequest
* GetMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)
  * GraphArn **required**

### GetMembersResponse
* GetMembersResponse `object`
  * MemberDetails
    * items [MemberDetail](#memberdetail)
  * UnprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### Graph
* Graph `object`: A behavior graph in Detective.
  * Arn
  * CreatedTime

### GraphArn
* GraphArn `string`

### GraphList
* GraphList `array`
  * items [Graph](#graph)

### InternalServerException


### ListGraphsRequest
* ListGraphsRequest `object`
  * MaxResults
  * NextToken

### ListGraphsResponse
* ListGraphsResponse `object`
  * GraphList
    * items [Graph](#graph)
  * NextToken

### ListInvitationsRequest
* ListInvitationsRequest `object`
  * MaxResults
  * NextToken

### ListInvitationsResponse
* ListInvitationsResponse `object`
  * Invitations
    * items [MemberDetail](#memberdetail)
  * NextToken

### ListMembersRequest
* ListMembersRequest `object`
  * GraphArn **required**
  * MaxResults
  * NextToken

### ListMembersResponse
* ListMembersResponse `object`
  * MemberDetails
    * items [MemberDetail](#memberdetail)
  * NextToken

### MemberDetail
* MemberDetail `object`: Details about a member account that was invited to contribute to a behavior graph.
  * AccountId
  * DisabledReason
  * EmailAddress
  * GraphArn
  * InvitedTime
  * MasterId
  * PercentOfGraphUtilization
  * PercentOfGraphUtilizationUpdatedTime
  * Status
  * UpdatedTime

### MemberDetailList
* MemberDetailList `array`
  * items [MemberDetail](#memberdetail)

### MemberDisabledReason
* MemberDisabledReason `string` (values: VOLUME_TOO_HIGH, VOLUME_UNKNOWN)

### MemberResultsLimit
* MemberResultsLimit `integer`

### MemberStatus
* MemberStatus `string` (values: INVITED, VERIFICATION_IN_PROGRESS, VERIFICATION_FAILED, ENABLED, ACCEPTED_BUT_DISABLED)

### PaginationToken
* PaginationToken `string`

### Percentage
* Percentage `number`

### RejectInvitationRequest
* RejectInvitationRequest `object`
  * GraphArn **required**

### ResourceNotFoundException


### ServiceQuotaExceededException


### StartMonitoringMemberRequest
* StartMonitoringMemberRequest `object`
  * AccountId **required**
  * GraphArn **required**

### Timestamp
* Timestamp `string`

### UnprocessedAccount
* UnprocessedAccount `object`: A member account that was included in a request but for which the request could not be processed.
  * AccountId
  * Reason

### UnprocessedAccountList
* UnprocessedAccountList `array`
  * items [UnprocessedAccount](#unprocessedaccount)

### UnprocessedReason
* UnprocessedReason `string`

### ValidationException



