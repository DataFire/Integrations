# @datafire/amazonaws_ram

Client library for AWS Resource Access Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ram
```
```js
let amazonaws_ram = require('@datafire/amazonaws_ram').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you create a resource share, associate the resource with the resource share, and specify the principals that can access the resources associated with the resource share. The following principals are supported: AWS accounts, organizational units (OU) from AWS Organizations, and organizations from AWS Organizations.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/ram/latest/userguide/">AWS Resource Access Manager User Guide</a>.</p>

## Actions

### AcceptResourceShareInvitation



```js
amazonaws_ram.AcceptResourceShareInvitation({
  "resourceShareInvitationArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * resourceShareInvitationArn **required** `string`: The Amazon Resource Name (ARN) of the invitation.

#### Output
* output [AcceptResourceShareInvitationResponse](#acceptresourceshareinvitationresponse)

### AssociateResourceShare



```js
amazonaws_ram.AssociateResourceShare({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * principals `array`: The principals.
    * items [String](#string)
  * resourceArns `array`: The Amazon Resource Names (ARN) of the resources.
    * items [String](#string)
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [AssociateResourceShareResponse](#associateresourceshareresponse)

### AssociateResourceSharePermission



```js
amazonaws_ram.AssociateResourceSharePermission({
  "resourceShareArn": "",
  "permissionArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * permissionArn **required** `string`: The ARN of the AWS RAM permission to associate with the resource share.
  * replace `boolean`: Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to the current permission.
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [AssociateResourceSharePermissionResponse](#associateresourcesharepermissionresponse)

### CreateResourceShare



```js
amazonaws_ram.CreateResourceShare({
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: One or more tags.
    * items [Tag](#tag)
  * allowExternalPrincipals `boolean`: Indicates whether principals outside your AWS organization can be associated with a resource share.
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * name **required** `string`: The name of the resource share.
  * permissionArns `array`: The ARNs of the permissions to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type.
    * items [String](#string)
  * principals `array`: The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations.
    * items [String](#string)
  * resourceArns `array`: The Amazon Resource Names (ARN) of the resources to associate with the resource share.
    * items [String](#string)

#### Output
* output [CreateResourceShareResponse](#createresourceshareresponse)

### DeleteResourceShare



```js
amazonaws_ram.DeleteResourceShare({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * resourceShareArn **required** `string`
  * clientToken `string`

#### Output
* output [DeleteResourceShareResponse](#deleteresourceshareresponse)

### DisassociateResourceShare



```js
amazonaws_ram.DisassociateResourceShare({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * principals `array`: The principals.
    * items [String](#string)
  * resourceArns `array`: The Amazon Resource Names (ARNs) of the resources.
    * items [String](#string)
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [DisassociateResourceShareResponse](#disassociateresourceshareresponse)

### DisassociateResourceSharePermission



```js
amazonaws_ram.DisassociateResourceSharePermission({
  "resourceShareArn": "",
  "permissionArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * permissionArn **required** `string`: The ARN of the permission to disassociate from the resource share.
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [DisassociateResourceSharePermissionResponse](#disassociateresourcesharepermissionresponse)

### EnableSharingWithAwsOrganization



```js
amazonaws_ram.EnableSharingWithAwsOrganization({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableSharingWithAwsOrganizationResponse](#enablesharingwithawsorganizationresponse)

### GetPermission



```js
amazonaws_ram.GetPermission({
  "permissionArn": ""
}, context)
```

#### Input
* input `object`
  * permissionArn **required** `string`: The ARN of the permission.
  * permissionVersion `integer`: The identifier for the version of the permission.

#### Output
* output [GetPermissionResponse](#getpermissionresponse)

### GetResourcePolicies



```js
amazonaws_ram.GetResourcePolicies({
  "resourceArns": []
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * principal `string`: The principal.
  * resourceArns **required** `array`: The Amazon Resource Names (ARN) of the resources.
    * items [String](#string)

#### Output
* output [GetResourcePoliciesResponse](#getresourcepoliciesresponse)

### GetResourceShareAssociations



```js
amazonaws_ram.GetResourceShareAssociations({
  "associationType": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * associationStatus `string` (values: ASSOCIATING, ASSOCIATED, FAILED, DISASSOCIATING, DISASSOCIATED): The association status.
  * associationType **required** `string` (values: PRINCIPAL, RESOURCE): The association type. Specify <code>PRINCIPAL</code> to list the principals that are associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources that are associated with the specified resource share.
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * principal `string`: The principal. You cannot specify this parameter if the association type is <code>RESOURCE</code>.
  * resourceArn `string`: The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.
  * resourceShareArns `array`: The Amazon Resource Names (ARN) of the resource shares.
    * items [String](#string)

#### Output
* output [GetResourceShareAssociationsResponse](#getresourceshareassociationsresponse)

### GetResourceShareInvitations



```js
amazonaws_ram.GetResourceShareInvitations({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * resourceShareArns `array`: The Amazon Resource Names (ARN) of the resource shares.
    * items [String](#string)
  * resourceShareInvitationArns `array`: The Amazon Resource Names (ARN) of the invitations.
    * items [String](#string)

#### Output
* output [GetResourceShareInvitationsResponse](#getresourceshareinvitationsresponse)

### GetResourceShares



```js
amazonaws_ram.GetResourceShares({
  "resourceOwner": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * name `string`: The name of the resource share.
  * nextToken `string`: The token for the next page of results.
  * resourceOwner **required** `string` (values: SELF, OTHER-ACCOUNTS): The type of owner.
  * resourceShareArns `array`: The Amazon Resource Names (ARN) of the resource shares.
    * items [String](#string)
  * resourceShareStatus `string` (values: PENDING, ACTIVE, FAILED, DELETING, DELETED): The status of the resource share.
  * tagFilters `array`: One or more tag filters.
    * items [TagFilter](#tagfilter)

#### Output
* output [GetResourceSharesResponse](#getresourcesharesresponse)

### ListPendingInvitationResources



```js
amazonaws_ram.ListPendingInvitationResources({
  "resourceShareInvitationArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * resourceShareInvitationArn **required** `string`: The Amazon Resource Name (ARN) of the invitation.

#### Output
* output [ListPendingInvitationResourcesResponse](#listpendinginvitationresourcesresponse)

### ListPermissions



```js
amazonaws_ram.ListPermissions({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * resourceType `string`: Specifies the resource type for which to list permissions. For example, to list only permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>.

#### Output
* output [ListPermissionsResponse](#listpermissionsresponse)

### ListPrincipals



```js
amazonaws_ram.ListPrincipals({
  "resourceOwner": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * principals `array`: The principals.
    * items [String](#string)
  * resourceArn `string`: The Amazon Resource Name (ARN) of the resource.
  * resourceOwner **required** `string` (values: SELF, OTHER-ACCOUNTS): The type of owner.
  * resourceShareArns `array`: The Amazon Resource Names (ARN) of the resource shares.
    * items [String](#string)
  * resourceType `string`: <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p>

#### Output
* output [ListPrincipalsResponse](#listprincipalsresponse)

### ListResources



```js
amazonaws_ram.ListResources({
  "resourceOwner": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * principal `string`: The principal.
  * resourceArns `array`: The Amazon Resource Names (ARN) of the resources.
    * items [String](#string)
  * resourceOwner **required** `string` (values: SELF, OTHER-ACCOUNTS): The type of owner.
  * resourceShareArns `array`: The Amazon Resource Names (ARN) of the resource shares.
    * items [String](#string)
  * resourceType `string`: <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p>

#### Output
* output [ListResourcesResponse](#listresourcesresponse)

### ListResourceSharePermissions



```js
amazonaws_ram.ListResourceSharePermissions({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [ListResourceSharePermissionsResponse](#listresourcesharepermissionsresponse)

### ListResourceTypes



```js
amazonaws_ram.ListResourceTypes({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * nextToken `string`: The token for the next page of results.

#### Output
* output [ListResourceTypesResponse](#listresourcetypesresponse)

### PromoteResourceShareCreatedFromPolicy



```js
amazonaws_ram.PromoteResourceShareCreatedFromPolicy({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * resourceShareArn **required** `string`

#### Output
* output [PromoteResourceShareCreatedFromPolicyResponse](#promoteresourcesharecreatedfrompolicyresponse)

### RejectResourceShareInvitation



```js
amazonaws_ram.RejectResourceShareInvitation({
  "resourceShareInvitationArn": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * resourceShareInvitationArn **required** `string`: The Amazon Resource Name (ARN) of the invitation.

#### Output
* output [RejectResourceShareInvitationResponse](#rejectresourceshareinvitationresponse)

### TagResource



```js
amazonaws_ram.TagResource({
  "resourceShareArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * tags **required** `array`: One or more tags.
    * items [Tag](#tag)
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_ram.UntagResource({
  "resourceShareArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.
  * tagKeys **required** `array`: The tag keys of the tags to remove.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateResourceShare



```js
amazonaws_ram.UpdateResourceShare({
  "resourceShareArn": ""
}, context)
```

#### Input
* input `object`
  * allowExternalPrincipals `boolean`: Indicates whether principals outside your AWS organization can be associated with a resource share.
  * clientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * name `string`: The name of the resource share.
  * resourceShareArn **required** `string`: The Amazon Resource Name (ARN) of the resource share.

#### Output
* output [UpdateResourceShareResponse](#updateresourceshareresponse)



## Definitions

### AcceptResourceShareInvitationRequest
* AcceptResourceShareInvitationRequest `object`
  * clientToken
  * resourceShareInvitationArn **required**

### AcceptResourceShareInvitationResponse
* AcceptResourceShareInvitationResponse `object`
  * clientToken
  * resourceShareInvitation
    * invitationTimestamp
    * receiverAccountId
    * resourceShareArn
    * resourceShareAssociations
      * items [ResourceShareAssociation](#resourceshareassociation)
    * resourceShareInvitationArn
    * resourceShareName
    * senderAccountId
    * status

### AssociateResourceSharePermissionRequest
* AssociateResourceSharePermissionRequest `object`
  * clientToken
  * permissionArn **required**
  * replace
  * resourceShareArn **required**

### AssociateResourceSharePermissionResponse
* AssociateResourceSharePermissionResponse `object`
  * clientToken
  * returnValue

### AssociateResourceShareRequest
* AssociateResourceShareRequest `object`
  * clientToken
  * principals
    * items [String](#string)
  * resourceArns
    * items [String](#string)
  * resourceShareArn **required**

### AssociateResourceShareResponse
* AssociateResourceShareResponse `object`
  * clientToken
  * resourceShareAssociations
    * items [ResourceShareAssociation](#resourceshareassociation)

### Boolean
* Boolean `boolean`

### CreateResourceShareRequest
* CreateResourceShareRequest `object`
  * tags
    * items [Tag](#tag)
  * allowExternalPrincipals
  * clientToken
  * name **required**
  * permissionArns
    * items [String](#string)
  * principals
    * items [String](#string)
  * resourceArns
    * items [String](#string)

### CreateResourceShareResponse
* CreateResourceShareResponse `object`
  * clientToken
  * resourceShare
    * tags
      * items [Tag](#tag)
    * allowExternalPrincipals
    * creationTime
    * featureSet
    * lastUpdatedTime
    * name
    * owningAccountId
    * resourceShareArn
    * status
    * statusMessage

### DateTime
* DateTime `string`

### DeleteResourceShareRequest
* DeleteResourceShareRequest `object`

### DeleteResourceShareResponse
* DeleteResourceShareResponse `object`
  * clientToken
  * returnValue

### DisassociateResourceSharePermissionRequest
* DisassociateResourceSharePermissionRequest `object`
  * clientToken
  * permissionArn **required**
  * resourceShareArn **required**

### DisassociateResourceSharePermissionResponse
* DisassociateResourceSharePermissionResponse `object`
  * clientToken
  * returnValue

### DisassociateResourceShareRequest
* DisassociateResourceShareRequest `object`
  * clientToken
  * principals
    * items [String](#string)
  * resourceArns
    * items [String](#string)
  * resourceShareArn **required**

### DisassociateResourceShareResponse
* DisassociateResourceShareResponse `object`
  * clientToken
  * resourceShareAssociations
    * items [ResourceShareAssociation](#resourceshareassociation)

### EnableSharingWithAwsOrganizationRequest
* EnableSharingWithAwsOrganizationRequest `object`

### EnableSharingWithAwsOrganizationResponse
* EnableSharingWithAwsOrganizationResponse `object`
  * returnValue

### GetPermissionRequest
* GetPermissionRequest `object`
  * permissionArn **required**
  * permissionVersion

### GetPermissionResponse
* GetPermissionResponse `object`
  * permission
    * arn
    * creationTime
    * defaultVersion
    * lastUpdatedTime
    * name
    * permission
    * resourceType
    * version

### GetResourcePoliciesRequest
* GetResourcePoliciesRequest `object`
  * maxResults
  * nextToken
  * principal
  * resourceArns **required**
    * items [String](#string)

### GetResourcePoliciesResponse
* GetResourcePoliciesResponse `object`
  * nextToken
  * policies
    * items [Policy](#policy)

### GetResourceShareAssociationsRequest
* GetResourceShareAssociationsRequest `object`
  * associationStatus
  * associationType **required**
  * maxResults
  * nextToken
  * principal
  * resourceArn
  * resourceShareArns
    * items [String](#string)

### GetResourceShareAssociationsResponse
* GetResourceShareAssociationsResponse `object`
  * nextToken
  * resourceShareAssociations
    * items [ResourceShareAssociation](#resourceshareassociation)

### GetResourceShareInvitationsRequest
* GetResourceShareInvitationsRequest `object`
  * maxResults
  * nextToken
  * resourceShareArns
    * items [String](#string)
  * resourceShareInvitationArns
    * items [String](#string)

### GetResourceShareInvitationsResponse
* GetResourceShareInvitationsResponse `object`
  * nextToken
  * resourceShareInvitations
    * items [ResourceShareInvitation](#resourceshareinvitation)

### GetResourceSharesRequest
* GetResourceSharesRequest `object`
  * maxResults
  * name
  * nextToken
  * resourceOwner **required**
  * resourceShareArns
    * items [String](#string)
  * resourceShareStatus
  * tagFilters
    * items [TagFilter](#tagfilter)

### GetResourceSharesResponse
* GetResourceSharesResponse `object`
  * nextToken
  * resourceShares
    * items [ResourceShare](#resourceshare)

### IdempotentParameterMismatchException


### Integer
* Integer `integer`

### InvalidClientTokenException


### InvalidMaxResultsException


### InvalidNextTokenException


### InvalidParameterException


### InvalidResourceTypeException


### InvalidStateTransitionException


### ListPendingInvitationResourcesRequest
* ListPendingInvitationResourcesRequest `object`
  * maxResults
  * nextToken
  * resourceShareInvitationArn **required**

### ListPendingInvitationResourcesResponse
* ListPendingInvitationResourcesResponse `object`
  * nextToken
  * resources
    * items [Resource](#resource)

### ListPermissionsRequest
* ListPermissionsRequest `object`
  * maxResults
  * nextToken
  * resourceType

### ListPermissionsResponse
* ListPermissionsResponse `object`
  * nextToken
  * permissions
    * items [ResourceSharePermissionSummary](#resourcesharepermissionsummary)

### ListPrincipalsRequest
* ListPrincipalsRequest `object`
  * maxResults
  * nextToken
  * principals
    * items [String](#string)
  * resourceArn
  * resourceOwner **required**
  * resourceShareArns
    * items [String](#string)
  * resourceType

### ListPrincipalsResponse
* ListPrincipalsResponse `object`
  * nextToken
  * principals
    * items [Principal](#principal)

### ListResourceSharePermissionsRequest
* ListResourceSharePermissionsRequest `object`
  * maxResults
  * nextToken
  * resourceShareArn **required**

### ListResourceSharePermissionsResponse
* ListResourceSharePermissionsResponse `object`
  * nextToken
  * permissions
    * items [ResourceSharePermissionSummary](#resourcesharepermissionsummary)

### ListResourceTypesRequest
* ListResourceTypesRequest `object`
  * maxResults
  * nextToken

### ListResourceTypesResponse
* ListResourceTypesResponse `object`
  * nextToken
  * resourceTypes
    * items [ServiceNameAndResourceType](#servicenameandresourcetype)

### ListResourcesRequest
* ListResourcesRequest `object`
  * maxResults
  * nextToken
  * principal
  * resourceArns
    * items [String](#string)
  * resourceOwner **required**
  * resourceShareArns
    * items [String](#string)
  * resourceType

### ListResourcesResponse
* ListResourcesResponse `object`
  * nextToken
  * resources
    * items [Resource](#resource)

### MalformedArnException


### MaxResults
* MaxResults `integer`

### MissingRequiredParameterException


### OperationNotPermittedException


### PermissionArnList
* PermissionArnList `array`
  * items [String](#string)

### Policy
* Policy `string`

### PolicyList
* PolicyList `array`
  * items [Policy](#policy)

### Principal
* Principal `object`: Describes a principal for use with AWS Resource Access Manager.
  * creationTime
  * external
  * id
  * lastUpdatedTime
  * resourceShareArn

### PrincipalArnOrIdList
* PrincipalArnOrIdList `array`
  * items [String](#string)

### PrincipalList
* PrincipalList `array`
  * items [Principal](#principal)

### PromoteResourceShareCreatedFromPolicyRequest
* PromoteResourceShareCreatedFromPolicyRequest `object`

### PromoteResourceShareCreatedFromPolicyResponse
* PromoteResourceShareCreatedFromPolicyResponse `object`
  * returnValue

### RejectResourceShareInvitationRequest
* RejectResourceShareInvitationRequest `object`
  * clientToken
  * resourceShareInvitationArn **required**

### RejectResourceShareInvitationResponse
* RejectResourceShareInvitationResponse `object`
  * clientToken
  * resourceShareInvitation
    * invitationTimestamp
    * receiverAccountId
    * resourceShareArn
    * resourceShareAssociations
      * items [ResourceShareAssociation](#resourceshareassociation)
    * resourceShareInvitationArn
    * resourceShareName
    * senderAccountId
    * status

### Resource
* Resource `object`: Describes a resource associated with a resource share.
  * arn
  * creationTime
  * lastUpdatedTime
  * resourceGroupArn
  * resourceShareArn
  * status
  * statusMessage
  * type

### ResourceArnList
* ResourceArnList `array`
  * items [String](#string)

### ResourceArnNotFoundException


### ResourceList
* ResourceList `array`
  * items [Resource](#resource)

### ResourceOwner
* ResourceOwner `string` (values: SELF, OTHER-ACCOUNTS)

### ResourceShare
* ResourceShare `object`: Describes a resource share.
  * tags
    * items [Tag](#tag)
  * allowExternalPrincipals
  * creationTime
  * featureSet
  * lastUpdatedTime
  * name
  * owningAccountId
  * resourceShareArn
  * status
  * statusMessage

### ResourceShareArnList
* ResourceShareArnList `array`
  * items [String](#string)

### ResourceShareAssociation
* ResourceShareAssociation `object`: Describes an association with a resource share.
  * associatedEntity
  * associationType
  * creationTime
  * external
  * lastUpdatedTime
  * resourceShareArn
  * resourceShareName
  * status
  * statusMessage

### ResourceShareAssociationList
* ResourceShareAssociationList `array`
  * items [ResourceShareAssociation](#resourceshareassociation)

### ResourceShareAssociationStatus
* ResourceShareAssociationStatus `string` (values: ASSOCIATING, ASSOCIATED, FAILED, DISASSOCIATING, DISASSOCIATED)

### ResourceShareAssociationType
* ResourceShareAssociationType `string` (values: PRINCIPAL, RESOURCE)

### ResourceShareFeatureSet
* ResourceShareFeatureSet `string` (values: CREATED_FROM_POLICY, PROMOTING_TO_STANDARD, STANDARD)

### ResourceShareInvitation
* ResourceShareInvitation `object`: Describes an invitation to join a resource share.
  * invitationTimestamp
  * receiverAccountId
  * resourceShareArn
  * resourceShareAssociations
    * items [ResourceShareAssociation](#resourceshareassociation)
  * resourceShareInvitationArn
  * resourceShareName
  * senderAccountId
  * status

### ResourceShareInvitationAlreadyAcceptedException


### ResourceShareInvitationAlreadyRejectedException


### ResourceShareInvitationArnList
* ResourceShareInvitationArnList `array`
  * items [String](#string)

### ResourceShareInvitationArnNotFoundException


### ResourceShareInvitationExpiredException


### ResourceShareInvitationList
* ResourceShareInvitationList `array`
  * items [ResourceShareInvitation](#resourceshareinvitation)

### ResourceShareInvitationStatus
* ResourceShareInvitationStatus `string` (values: PENDING, ACCEPTED, REJECTED, EXPIRED)

### ResourceShareLimitExceededException


### ResourceShareList
* ResourceShareList `array`
  * items [ResourceShare](#resourceshare)

### ResourceSharePermissionDetail
* ResourceSharePermissionDetail `object`: Information about an AWS RAM permission.
  * arn
  * creationTime
  * defaultVersion
  * lastUpdatedTime
  * name
  * permission
  * resourceType
  * version

### ResourceSharePermissionList
* ResourceSharePermissionList `array`
  * items [ResourceSharePermissionSummary](#resourcesharepermissionsummary)

### ResourceSharePermissionSummary
* ResourceSharePermissionSummary `object`: Information about a permission that is associated with a resource share.
  * arn
  * creationTime
  * defaultVersion
  * lastUpdatedTime
  * name
  * resourceType
  * status
  * version

### ResourceShareStatus
* ResourceShareStatus `string` (values: PENDING, ACTIVE, FAILED, DELETING, DELETED)

### ResourceStatus
* ResourceStatus `string` (values: AVAILABLE, ZONAL_RESOURCE_INACCESSIBLE, LIMIT_EXCEEDED, UNAVAILABLE, PENDING)

### ServerInternalException


### ServiceNameAndResourceType
* ServiceNameAndResourceType `object`: Information about the shareable resource types and the AWS services to which they belong.
  * resourceType
  * serviceName

### ServiceNameAndResourceTypeList
* ServiceNameAndResourceTypeList `array`
  * items [ServiceNameAndResourceType](#servicenameandresourcetype)

### ServiceUnavailableException


### String
* String `string`

### Tag
* Tag `object`: Information about a tag.
  * key
  * value

### TagFilter
* TagFilter `object`: Used to filter information based on tags.
  * tagKey
  * tagValues
    * items [TagValue](#tagvalue)

### TagFilters
* TagFilters `array`
  * items [TagFilter](#tagfilter)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagLimitExceededException


### TagList
* TagList `array`
  * items [Tag](#tag)

### TagPolicyViolationException


### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceShareArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagValueList
* TagValueList `array`
  * items [TagValue](#tagvalue)

### UnknownResourceException


### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceShareArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateResourceShareRequest
* UpdateResourceShareRequest `object`
  * allowExternalPrincipals
  * clientToken
  * name
  * resourceShareArn **required**

### UpdateResourceShareResponse
* UpdateResourceShareResponse `object`
  * clientToken
  * resourceShare
    * tags
      * items [Tag](#tag)
    * allowExternalPrincipals
    * creationTime
    * featureSet
    * lastUpdatedTime
    * name
    * owningAccountId
    * resourceShareArn
    * status
    * statusMessage


