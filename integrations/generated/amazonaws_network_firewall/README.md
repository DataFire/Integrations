# @datafire/amazonaws_network_firewall

Client library for AWS Network Firewall

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_network_firewall
```
```js
let amazonaws_network_firewall = require('@datafire/amazonaws_network_firewall').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>This is the API Reference for AWS Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors. </p> <ul> <li> <p>The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the AWS REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">AWS APIs</a>. </p> <p>To access Network Firewall using the REST API endpoint: <code>https://network-firewall.&lt;region&gt;.amazonaws.com </code> </p> </li> <li> <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> </li> <li> <p>For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer Guide</a>.</p> </li> </ul> <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or AWS Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source intrusion detection system (IDS) engine. For information about Suricata, see the <a href="https://suricata-ids.org/">Suricata website</a>.</p> <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples: </p> <ul> <li> <p>Allow domains or IP addresses for known AWS service endpoints, such as Amazon S3, and block all other forms of traffic.</p> </li> <li> <p>Use custom lists of known bad domains to limit the types of domain names that your applications can access.</p> </li> <li> <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p> </li> <li> <p>Rate limit traffic going from AWS to on-premises IP destinations.</p> </li> <li> <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.</p> </li> </ul> <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p> <p>To start using Network Firewall, do the following: </p> <ol> <li> <p>(Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC. </p> </li> <li> <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall. </p> </li> <li> <p>In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have. </p> </li> <li> <p>In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior. </p> </li> <li> <p>In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.</p> </li> <li> <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.</p> </li> </ol>

## Actions

### AssociateFirewallPolicy



```js
amazonaws_network_firewall.AssociateFirewallPolicy({
  "FirewallPolicyArn": null
}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyArn **required**
  * UpdateToken

#### Output
* output [AssociateFirewallPolicyResponse](#associatefirewallpolicyresponse)

### AssociateSubnets



```js
amazonaws_network_firewall.AssociateSubnets({
  "SubnetMappings": null
}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * SubnetMappings **required**
    * items [SubnetMapping](#subnetmapping)
  * UpdateToken

#### Output
* output [AssociateSubnetsResponse](#associatesubnetsresponse)

### CreateFirewall



```js
amazonaws_network_firewall.CreateFirewall({
  "FirewallName": null,
  "FirewallPolicyArn": null,
  "VpcId": null,
  "SubnetMappings": null
}, context)
```

#### Input
* input `object`
  * DeleteProtection
  * Description
  * FirewallName **required**
  * FirewallPolicyArn **required**
  * FirewallPolicyChangeProtection
  * SubnetChangeProtection
  * SubnetMappings **required**
    * items [SubnetMapping](#subnetmapping)
  * Tags
    * items [Tag](#tag)
  * VpcId **required**

#### Output
* output [CreateFirewallResponse](#createfirewallresponse)

### CreateFirewallPolicy



```js
amazonaws_network_firewall.CreateFirewallPolicy({
  "FirewallPolicyName": null,
  "FirewallPolicy": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * FirewallPolicy **required**
    * StatefulRuleGroupReferences
      * items [StatefulRuleGroupReference](#statefulrulegroupreference)
    * StatelessCustomActions
      * items [CustomAction](#customaction)
    * StatelessDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessFragmentDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessRuleGroupReferences
      * items [StatelessRuleGroupReference](#statelessrulegroupreference)
  * FirewallPolicyName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateFirewallPolicyResponse](#createfirewallpolicyresponse)

### CreateRuleGroup



```js
amazonaws_network_firewall.CreateRuleGroup({
  "RuleGroupName": null,
  "Type": null,
  "Capacity": null
}, context)
```

#### Input
* input `object`
  * Capacity **required**
  * Description
  * DryRun
  * RuleGroup
    * RuleVariables
      * IPSets
      * PortSets
    * RulesSource **required**
      * RulesSourceList
        * GeneratedRulesType **required**
        * TargetTypes **required**
          * items [TargetType](#targettype)
        * Targets **required**
          * items [CollectionMember_String](#collectionmember_string)
      * RulesString
      * StatefulRules
        * items [StatefulRule](#statefulrule)
      * StatelessRulesAndCustomActions
        * CustomActions
          * items [CustomAction](#customaction)
        * StatelessRules **required**
          * items [StatelessRule](#statelessrule)
  * RuleGroupName **required**
  * Rules
  * Tags
    * items [Tag](#tag)
  * Type **required**

#### Output
* output [CreateRuleGroupResponse](#createrulegroupresponse)

### DeleteFirewall



```js
amazonaws_network_firewall.DeleteFirewall({}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName

#### Output
* output [DeleteFirewallResponse](#deletefirewallresponse)

### DeleteFirewallPolicy



```js
amazonaws_network_firewall.DeleteFirewallPolicy({}, context)
```

#### Input
* input `object`
  * FirewallPolicyArn
  * FirewallPolicyName

#### Output
* output [DeleteFirewallPolicyResponse](#deletefirewallpolicyresponse)

### DeleteResourcePolicy



```js
amazonaws_network_firewall.DeleteResourcePolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DeleteResourcePolicyResponse](#deleteresourcepolicyresponse)

### DeleteRuleGroup



```js
amazonaws_network_firewall.DeleteRuleGroup({}, context)
```

#### Input
* input `object`
  * RuleGroupArn
  * RuleGroupName
  * Type

#### Output
* output [DeleteRuleGroupResponse](#deleterulegroupresponse)

### DescribeFirewall



```js
amazonaws_network_firewall.DescribeFirewall({}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName

#### Output
* output [DescribeFirewallResponse](#describefirewallresponse)

### DescribeFirewallPolicy



```js
amazonaws_network_firewall.DescribeFirewallPolicy({}, context)
```

#### Input
* input `object`
  * FirewallPolicyArn
  * FirewallPolicyName

#### Output
* output [DescribeFirewallPolicyResponse](#describefirewallpolicyresponse)

### DescribeLoggingConfiguration



```js
amazonaws_network_firewall.DescribeLoggingConfiguration({}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName

#### Output
* output [DescribeLoggingConfigurationResponse](#describeloggingconfigurationresponse)

### DescribeResourcePolicy



```js
amazonaws_network_firewall.DescribeResourcePolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DescribeResourcePolicyResponse](#describeresourcepolicyresponse)

### DescribeRuleGroup



```js
amazonaws_network_firewall.DescribeRuleGroup({}, context)
```

#### Input
* input `object`
  * RuleGroupArn
  * RuleGroupName
  * Type

#### Output
* output [DescribeRuleGroupResponse](#describerulegroupresponse)

### DisassociateSubnets



```js
amazonaws_network_firewall.DisassociateSubnets({
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * SubnetIds **required**
    * items [AzSubnet](#azsubnet)
  * UpdateToken

#### Output
* output [DisassociateSubnetsResponse](#disassociatesubnetsresponse)

### ListFirewallPolicies



```js
amazonaws_network_firewall.ListFirewallPolicies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListFirewallPoliciesResponse](#listfirewallpoliciesresponse)

### ListFirewalls



```js
amazonaws_network_firewall.ListFirewalls({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * VpcIds
    * items [VpcId](#vpcid)

#### Output
* output [ListFirewallsResponse](#listfirewallsresponse)

### ListRuleGroups



```js
amazonaws_network_firewall.ListRuleGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListRuleGroupsResponse](#listrulegroupsresponse)

### ListTagsForResource



```js
amazonaws_network_firewall.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutResourcePolicy



```js
amazonaws_network_firewall.PutResourcePolicy({
  "ResourceArn": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * Policy **required**
  * ResourceArn **required**

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### TagResource



```js
amazonaws_network_firewall.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_network_firewall.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateFirewallDeleteProtection



```js
amazonaws_network_firewall.UpdateFirewallDeleteProtection({
  "DeleteProtection": null
}, context)
```

#### Input
* input `object`
  * DeleteProtection **required**
  * FirewallArn
  * FirewallName
  * UpdateToken

#### Output
* output [UpdateFirewallDeleteProtectionResponse](#updatefirewalldeleteprotectionresponse)

### UpdateFirewallDescription



```js
amazonaws_network_firewall.UpdateFirewallDescription({}, context)
```

#### Input
* input `object`
  * Description
  * FirewallArn
  * FirewallName
  * UpdateToken

#### Output
* output [UpdateFirewallDescriptionResponse](#updatefirewalldescriptionresponse)

### UpdateFirewallPolicy



```js
amazonaws_network_firewall.UpdateFirewallPolicy({
  "UpdateToken": null,
  "FirewallPolicy": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * FirewallPolicy **required**
    * StatefulRuleGroupReferences
      * items [StatefulRuleGroupReference](#statefulrulegroupreference)
    * StatelessCustomActions
      * items [CustomAction](#customaction)
    * StatelessDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessFragmentDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessRuleGroupReferences
      * items [StatelessRuleGroupReference](#statelessrulegroupreference)
  * FirewallPolicyArn
  * FirewallPolicyName
  * UpdateToken **required**

#### Output
* output [UpdateFirewallPolicyResponse](#updatefirewallpolicyresponse)

### UpdateFirewallPolicyChangeProtection



```js
amazonaws_network_firewall.UpdateFirewallPolicyChangeProtection({
  "FirewallPolicyChangeProtection": null
}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyChangeProtection **required**
  * UpdateToken

#### Output
* output [UpdateFirewallPolicyChangeProtectionResponse](#updatefirewallpolicychangeprotectionresponse)

### UpdateLoggingConfiguration



```js
amazonaws_network_firewall.UpdateLoggingConfiguration({}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [LogDestinationConfig](#logdestinationconfig)

#### Output
* output [UpdateLoggingConfigurationResponse](#updateloggingconfigurationresponse)

### UpdateRuleGroup



```js
amazonaws_network_firewall.UpdateRuleGroup({
  "UpdateToken": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * RuleGroup
    * RuleVariables
      * IPSets
      * PortSets
    * RulesSource **required**
      * RulesSourceList
        * GeneratedRulesType **required**
        * TargetTypes **required**
          * items [TargetType](#targettype)
        * Targets **required**
          * items [CollectionMember_String](#collectionmember_string)
      * RulesString
      * StatefulRules
        * items [StatefulRule](#statefulrule)
      * StatelessRulesAndCustomActions
        * CustomActions
          * items [CustomAction](#customaction)
        * StatelessRules **required**
          * items [StatelessRule](#statelessrule)
  * RuleGroupArn
  * RuleGroupName
  * Rules
  * Type
  * UpdateToken **required**

#### Output
* output [UpdateRuleGroupResponse](#updaterulegroupresponse)

### UpdateSubnetChangeProtection



```js
amazonaws_network_firewall.UpdateSubnetChangeProtection({
  "SubnetChangeProtection": null
}, context)
```

#### Input
* input `object`
  * FirewallArn
  * FirewallName
  * SubnetChangeProtection **required**
  * UpdateToken

#### Output
* output [UpdateSubnetChangeProtectionResponse](#updatesubnetchangeprotectionresponse)



## Definitions

### ActionDefinition
* ActionDefinition `object`: A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
  * PublishMetricAction
    * Dimensions **required**
      * items [Dimension](#dimension)

### ActionName
* ActionName `string`

### Address
* Address `object`: A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
  * AddressDefinition **required**

### AddressDefinition
* AddressDefinition `string`

### Addresses
* Addresses `array`
  * items [Address](#address)

### AssociateFirewallPolicyRequest
* AssociateFirewallPolicyRequest `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyArn **required**
  * UpdateToken

### AssociateFirewallPolicyResponse
* AssociateFirewallPolicyResponse `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyArn
  * UpdateToken

### AssociateSubnetsRequest
* AssociateSubnetsRequest `object`
  * FirewallArn
  * FirewallName
  * SubnetMappings **required**
    * items [SubnetMapping](#subnetmapping)
  * UpdateToken

### AssociateSubnetsResponse
* AssociateSubnetsResponse `object`
  * FirewallArn
  * FirewallName
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * UpdateToken

### Attachment
* Attachment `object`: The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
  * EndpointId
  * Status
  * SubnetId

### AttachmentStatus
* AttachmentStatus `string` (values: CREATING, DELETING, SCALING, READY)

### AvailabilityZone
* AvailabilityZone `string`

### AzSubnet
* AzSubnet `string`

### AzSubnets
* AzSubnets `array`
  * items [AzSubnet](#azsubnet)

### Boolean
* Boolean `boolean`

### CollectionMember_String
* CollectionMember_String `string`

### ConfigurationSyncState
* ConfigurationSyncState `string` (values: PENDING, IN_SYNC)

### CreateFirewallPolicyRequest
* CreateFirewallPolicyRequest `object`
  * Description
  * DryRun
  * FirewallPolicy **required**
    * StatefulRuleGroupReferences
      * items [StatefulRuleGroupReference](#statefulrulegroupreference)
    * StatelessCustomActions
      * items [CustomAction](#customaction)
    * StatelessDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessFragmentDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessRuleGroupReferences
      * items [StatelessRuleGroupReference](#statelessrulegroupreference)
  * FirewallPolicyName **required**
  * Tags
    * items [Tag](#tag)

### CreateFirewallPolicyResponse
* CreateFirewallPolicyResponse `object`
  * FirewallPolicyResponse **required**
    * Description
    * FirewallPolicyArn **required**
    * FirewallPolicyId **required**
    * FirewallPolicyName **required**
    * FirewallPolicyStatus
    * Tags
      * items [Tag](#tag)
  * UpdateToken **required**

### CreateFirewallRequest
* CreateFirewallRequest `object`
  * DeleteProtection
  * Description
  * FirewallName **required**
  * FirewallPolicyArn **required**
  * FirewallPolicyChangeProtection
  * SubnetChangeProtection
  * SubnetMappings **required**
    * items [SubnetMapping](#subnetmapping)
  * Tags
    * items [Tag](#tag)
  * VpcId **required**

### CreateFirewallResponse
* CreateFirewallResponse `object`
  * Firewall
    * DeleteProtection
    * Description
    * FirewallArn
    * FirewallId **required**
    * FirewallName
    * FirewallPolicyArn **required**
    * FirewallPolicyChangeProtection
    * SubnetChangeProtection
    * SubnetMappings **required**
      * items [SubnetMapping](#subnetmapping)
    * Tags
      * items [Tag](#tag)
    * VpcId **required**
  * FirewallStatus
    * ConfigurationSyncStateSummary **required**
    * Status **required**
    * SyncStates

### CreateRuleGroupRequest
* CreateRuleGroupRequest `object`
  * Capacity **required**
  * Description
  * DryRun
  * RuleGroup
    * RuleVariables
      * IPSets
      * PortSets
    * RulesSource **required**
      * RulesSourceList
        * GeneratedRulesType **required**
        * TargetTypes **required**
          * items [TargetType](#targettype)
        * Targets **required**
          * items [CollectionMember_String](#collectionmember_string)
      * RulesString
      * StatefulRules
        * items [StatefulRule](#statefulrule)
      * StatelessRulesAndCustomActions
        * CustomActions
          * items [CustomAction](#customaction)
        * StatelessRules **required**
          * items [StatelessRule](#statelessrule)
  * RuleGroupName **required**
  * Rules
  * Tags
    * items [Tag](#tag)
  * Type **required**

### CreateRuleGroupResponse
* CreateRuleGroupResponse `object`
  * RuleGroupResponse **required**
    * Capacity
    * Description
    * RuleGroupArn **required**
    * RuleGroupId **required**
    * RuleGroupName **required**
    * RuleGroupStatus
    * Tags
      * items [Tag](#tag)
    * Type
  * UpdateToken **required**

### CustomAction
* CustomAction `object`: <p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul>
  * ActionDefinition **required**
    * PublishMetricAction
      * Dimensions **required**
        * items [Dimension](#dimension)
  * ActionName **required**

### CustomActions
* CustomActions `array`
  * items [CustomAction](#customaction)

### DeleteFirewallPolicyRequest
* DeleteFirewallPolicyRequest `object`
  * FirewallPolicyArn
  * FirewallPolicyName

### DeleteFirewallPolicyResponse
* DeleteFirewallPolicyResponse `object`
  * FirewallPolicyResponse **required**
    * Description
    * FirewallPolicyArn **required**
    * FirewallPolicyId **required**
    * FirewallPolicyName **required**
    * FirewallPolicyStatus
    * Tags
      * items [Tag](#tag)

### DeleteFirewallRequest
* DeleteFirewallRequest `object`
  * FirewallArn
  * FirewallName

### DeleteFirewallResponse
* DeleteFirewallResponse `object`
  * Firewall [Firewall](#firewall)
  * FirewallStatus [FirewallStatus](#firewallstatus)

### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`
  * ResourceArn **required**

### DeleteResourcePolicyResponse
* DeleteResourcePolicyResponse `object`

### DeleteRuleGroupRequest
* DeleteRuleGroupRequest `object`
  * RuleGroupArn
  * RuleGroupName
  * Type

### DeleteRuleGroupResponse
* DeleteRuleGroupResponse `object`
  * RuleGroupResponse **required**
    * Capacity
    * Description
    * RuleGroupArn **required**
    * RuleGroupId **required**
    * RuleGroupName **required**
    * RuleGroupStatus
    * Tags
      * items [Tag](#tag)
    * Type

### DescribeFirewallPolicyRequest
* DescribeFirewallPolicyRequest `object`
  * FirewallPolicyArn
  * FirewallPolicyName

### DescribeFirewallPolicyResponse
* DescribeFirewallPolicyResponse `object`
  * FirewallPolicy
    * StatefulRuleGroupReferences
      * items [StatefulRuleGroupReference](#statefulrulegroupreference)
    * StatelessCustomActions
      * items [CustomAction](#customaction)
    * StatelessDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessFragmentDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessRuleGroupReferences
      * items [StatelessRuleGroupReference](#statelessrulegroupreference)
  * FirewallPolicyResponse **required**
    * Description
    * FirewallPolicyArn **required**
    * FirewallPolicyId **required**
    * FirewallPolicyName **required**
    * FirewallPolicyStatus
    * Tags
      * items [Tag](#tag)
  * UpdateToken **required**

### DescribeFirewallRequest
* DescribeFirewallRequest `object`
  * FirewallArn
  * FirewallName

### DescribeFirewallResponse
* DescribeFirewallResponse `object`
  * Firewall
    * DeleteProtection
    * Description
    * FirewallArn
    * FirewallId **required**
    * FirewallName
    * FirewallPolicyArn **required**
    * FirewallPolicyChangeProtection
    * SubnetChangeProtection
    * SubnetMappings **required**
      * items [SubnetMapping](#subnetmapping)
    * Tags
      * items [Tag](#tag)
    * VpcId **required**
  * FirewallStatus
    * ConfigurationSyncStateSummary **required**
    * Status **required**
    * SyncStates
  * UpdateToken

### DescribeLoggingConfigurationRequest
* DescribeLoggingConfigurationRequest `object`
  * FirewallArn
  * FirewallName

### DescribeLoggingConfigurationResponse
* DescribeLoggingConfigurationResponse `object`
  * FirewallArn
  * LoggingConfiguration [LoggingConfiguration](#loggingconfiguration)

### DescribeResourcePolicyRequest
* DescribeResourcePolicyRequest `object`
  * ResourceArn **required**

### DescribeResourcePolicyResponse
* DescribeResourcePolicyResponse `object`
  * Policy

### DescribeRuleGroupRequest
* DescribeRuleGroupRequest `object`
  * RuleGroupArn
  * RuleGroupName
  * Type

### DescribeRuleGroupResponse
* DescribeRuleGroupResponse `object`
  * RuleGroup
    * RuleVariables
      * IPSets
      * PortSets
    * RulesSource **required**
      * RulesSourceList
        * GeneratedRulesType **required**
        * TargetTypes **required**
          * items [TargetType](#targettype)
        * Targets **required**
          * items [CollectionMember_String](#collectionmember_string)
      * RulesString
      * StatefulRules
        * items [StatefulRule](#statefulrule)
      * StatelessRulesAndCustomActions
        * CustomActions
          * items [CustomAction](#customaction)
        * StatelessRules **required**
          * items [StatelessRule](#statelessrule)
  * RuleGroupResponse **required**
    * Capacity
    * Description
    * RuleGroupArn **required**
    * RuleGroupId **required**
    * RuleGroupName **required**
    * RuleGroupStatus
    * Tags
      * items [Tag](#tag)
    * Type
  * UpdateToken **required**

### Description
* Description `string`

### Destination
* Destination `string`

### Dimension
* Dimension `object`: <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric. </p> <p>AWS Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>
  * Value **required**

### DimensionValue
* DimensionValue `string`

### Dimensions
* Dimensions `array`
  * items [Dimension](#dimension)

### DisassociateSubnetsRequest
* DisassociateSubnetsRequest `object`
  * FirewallArn
  * FirewallName
  * SubnetIds **required**
    * items [AzSubnet](#azsubnet)
  * UpdateToken

### DisassociateSubnetsResponse
* DisassociateSubnetsResponse `object`
  * FirewallArn
  * FirewallName
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * UpdateToken

### EndpointId
* EndpointId `string`

### Firewall
* Firewall `object`: <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
  * DeleteProtection
  * Description
  * FirewallArn
  * FirewallId **required**
  * FirewallName
  * FirewallPolicyArn **required**
  * FirewallPolicyChangeProtection
  * SubnetChangeProtection
  * SubnetMappings **required**
    * items [SubnetMapping](#subnetmapping)
  * Tags
    * items [Tag](#tag)
  * VpcId **required**

### FirewallMetadata
* FirewallMetadata `object`: High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
  * FirewallArn
  * FirewallName

### FirewallPolicies
* FirewallPolicies `array`
  * items [FirewallPolicyMetadata](#firewallpolicymetadata)

### FirewallPolicy
* FirewallPolicy `object`: <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
  * StatefulRuleGroupReferences
    * items [StatefulRuleGroupReference](#statefulrulegroupreference)
  * StatelessCustomActions
    * items [CustomAction](#customaction)
  * StatelessDefaultActions **required**
    * items [CollectionMember_String](#collectionmember_string)
  * StatelessFragmentDefaultActions **required**
    * items [CollectionMember_String](#collectionmember_string)
  * StatelessRuleGroupReferences
    * items [StatelessRuleGroupReference](#statelessrulegroupreference)

### FirewallPolicyMetadata
* FirewallPolicyMetadata `object`: High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
  * Arn
  * Name

### FirewallPolicyResponse
* FirewallPolicyResponse `object`: The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
  * Description
  * FirewallPolicyArn **required**
  * FirewallPolicyId **required**
  * FirewallPolicyName **required**
  * FirewallPolicyStatus
  * Tags
    * items [Tag](#tag)

### FirewallStatus
* FirewallStatus `object`: Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
  * ConfigurationSyncStateSummary **required**
  * Status **required**
  * SyncStates

### FirewallStatusValue
* FirewallStatusValue `string` (values: PROVISIONING, DELETING, READY)

### Firewalls
* Firewalls `array`
  * items [FirewallMetadata](#firewallmetadata)

### Flags
* Flags `array`
  * items [TCPFlag](#tcpflag)

### GeneratedRulesType
* GeneratedRulesType `string` (values: ALLOWLIST, DENYLIST)

### HashMapKey
* HashMapKey `string`

### HashMapValue
* HashMapValue `string`

### Header
* Header `object`: The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
  * Destination **required**
  * DestinationPort **required**
  * Direction **required**
  * Protocol **required**
  * Source **required**
  * SourcePort **required**

### IPSet
* IPSet `object`: A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. 
  * Definition **required**
    * items [VariableDefinition](#variabledefinition)

### IPSets
* IPSets `object`

### InsufficientCapacityException


### InternalServerError


### InvalidOperationException


### InvalidRequestException


### InvalidResourcePolicyException


### InvalidTokenException


### Keyword
* Keyword `string`

### LimitExceededException


### ListFirewallPoliciesRequest
* ListFirewallPoliciesRequest `object`
  * MaxResults
  * NextToken

### ListFirewallPoliciesResponse
* ListFirewallPoliciesResponse `object`
  * FirewallPolicies
    * items [FirewallPolicyMetadata](#firewallpolicymetadata)
  * NextToken

### ListFirewallsRequest
* ListFirewallsRequest `object`
  * MaxResults
  * NextToken
  * VpcIds
    * items [VpcId](#vpcid)

### ListFirewallsResponse
* ListFirewallsResponse `object`
  * Firewalls
    * items [FirewallMetadata](#firewallmetadata)
  * NextToken

### ListRuleGroupsRequest
* ListRuleGroupsRequest `object`
  * MaxResults
  * NextToken

### ListRuleGroupsResponse
* ListRuleGroupsResponse `object`
  * NextToken
  * RuleGroups
    * items [RuleGroupMetadata](#rulegroupmetadata)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### LogDestinationConfig
* LogDestinationConfig `object`: <p>Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>
  * LogDestination **required**
  * LogDestinationType **required**
  * LogType **required**

### LogDestinationConfigs
* LogDestinationConfigs `array`
  * items [LogDestinationConfig](#logdestinationconfig)

### LogDestinationMap
* LogDestinationMap `object`

### LogDestinationPermissionException


### LogDestinationType
* LogDestinationType `string` (values: S3, CloudWatchLogs, KinesisDataFirehose)

### LogType
* LogType `string` (values: ALERT, FLOW)

### LoggingConfiguration
* LoggingConfiguration `object`: Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
  * LogDestinationConfigs **required**
    * items [LogDestinationConfig](#logdestinationconfig)

### MatchAttributes
* MatchAttributes `object`: Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
  * DestinationPorts
    * items [PortRange](#portrange)
  * Destinations
    * items [Address](#address)
  * Protocols
    * items [ProtocolNumber](#protocolnumber)
  * SourcePorts
    * items [PortRange](#portrange)
  * Sources
    * items [Address](#address)
  * TCPFlags
    * items [TCPFlagField](#tcpflagfield)

### PaginationMaxResults
* PaginationMaxResults `integer`

### PaginationToken
* PaginationToken `string`

### PerObjectStatus
* PerObjectStatus `object`: <p/>
  * SyncStatus

### PerObjectSyncStatus
* PerObjectSyncStatus `string` (values: PENDING, IN_SYNC)

### PolicyString
* PolicyString `string`

### Port
* Port `string`

### PortRange
* PortRange `object`: A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. 
  * FromPort **required**
  * ToPort **required**

### PortRangeBound
* PortRangeBound `integer`

### PortRanges
* PortRanges `array`
  * items [PortRange](#portrange)

### PortSet
* PortSet `object`: A set of port ranges for use in the rules in a rule group. 
  * Definition
    * items [VariableDefinition](#variabledefinition)

### PortSets
* PortSets `object`

### Priority
* Priority `integer`

### ProtocolNumber
* ProtocolNumber `integer`

### ProtocolNumbers
* ProtocolNumbers `array`
  * items [ProtocolNumber](#protocolnumber)

### PublishMetricAction
* PublishMetricAction `object`: Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
  * Dimensions **required**
    * items [Dimension](#dimension)

### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`
  * Policy **required**
  * ResourceArn **required**

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`

### ResourceArn
* ResourceArn `string`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourceOwnerCheckException


### ResourceStatus
* ResourceStatus `string` (values: ACTIVE, DELETING)

### RuleCapacity
* RuleCapacity `integer`

### RuleDefinition
* RuleDefinition `object`: The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
  * Actions **required**
    * items [CollectionMember_String](#collectionmember_string)
  * MatchAttributes **required**
    * DestinationPorts
      * items [PortRange](#portrange)
    * Destinations
      * items [Address](#address)
    * Protocols
      * items [ProtocolNumber](#protocolnumber)
    * SourcePorts
      * items [PortRange](#portrange)
    * Sources
      * items [Address](#address)
    * TCPFlags
      * items [TCPFlagField](#tcpflagfield)

### RuleGroup
* RuleGroup `object`: <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
  * RuleVariables
    * IPSets
    * PortSets
  * RulesSource **required**
    * RulesSourceList
      * GeneratedRulesType **required**
      * TargetTypes **required**
        * items [TargetType](#targettype)
      * Targets **required**
        * items [CollectionMember_String](#collectionmember_string)
    * RulesString
    * StatefulRules
      * items [StatefulRule](#statefulrule)
    * StatelessRulesAndCustomActions
      * CustomActions
        * items [CustomAction](#customaction)
      * StatelessRules **required**
        * items [StatelessRule](#statelessrule)

### RuleGroupMetadata
* RuleGroupMetadata `object`: High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.
  * Arn
  * Name

### RuleGroupResponse
* RuleGroupResponse `object`: The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
  * Capacity
  * Description
  * RuleGroupArn **required**
  * RuleGroupId **required**
  * RuleGroupName **required**
  * RuleGroupStatus
  * Tags
    * items [Tag](#tag)
  * Type

### RuleGroupType
* RuleGroupType `string` (values: STATELESS, STATEFUL)

### RuleGroups
* RuleGroups `array`
  * items [RuleGroupMetadata](#rulegroupmetadata)

### RuleOption
* RuleOption `object`: Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
  * Keyword **required**
  * Settings
    * items [Setting](#setting)

### RuleOptions
* RuleOptions `array`
  * items [RuleOption](#ruleoption)

### RuleTargets
* RuleTargets `array`
  * items [CollectionMember_String](#collectionmember_string)

### RuleVariableName
* RuleVariableName `string`

### RuleVariables
* RuleVariables `object`: Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
  * IPSets
  * PortSets

### RulesSource
* RulesSource `object`: The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. 
  * RulesSourceList
    * GeneratedRulesType **required**
    * TargetTypes **required**
      * items [TargetType](#targettype)
    * Targets **required**
      * items [CollectionMember_String](#collectionmember_string)
  * RulesString
  * StatefulRules
    * items [StatefulRule](#statefulrule)
  * StatelessRulesAndCustomActions
    * CustomActions
      * items [CustomAction](#customaction)
    * StatelessRules **required**
      * items [StatelessRule](#statelessrule)

### RulesSourceList
* RulesSourceList `object`: Stateful inspection criteria for a domain list rule group. 
  * GeneratedRulesType **required**
  * TargetTypes **required**
    * items [TargetType](#targettype)
  * Targets **required**
    * items [CollectionMember_String](#collectionmember_string)

### RulesString
* RulesString `string`

### Setting
* Setting `string`

### Settings
* Settings `array`
  * items [Setting](#setting)

### Source
* Source `string`

### StatefulAction
* StatefulAction `string` (values: PASS, DROP, ALERT)

### StatefulRule
* StatefulRule `object`: A single 5-tuple stateful rule, for use in a stateful rule group.
  * Action **required**
  * Header **required**
    * Destination **required**
    * DestinationPort **required**
    * Direction **required**
    * Protocol **required**
    * Source **required**
    * SourcePort **required**
  * RuleOptions **required**
    * items [RuleOption](#ruleoption)

### StatefulRuleDirection
* StatefulRuleDirection `string` (values: FORWARD, ANY)

### StatefulRuleGroupReference
* StatefulRuleGroupReference `object`: Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. 
  * ResourceArn **required**

### StatefulRuleGroupReferences
* StatefulRuleGroupReferences `array`
  * items [StatefulRuleGroupReference](#statefulrulegroupreference)

### StatefulRuleProtocol
* StatefulRuleProtocol `string` (values: IP, TCP, UDP, ICMP, HTTP, FTP, TLS, SMB, DNS, DCERPC, SSH, SMTP, IMAP, MSN, KRB5, IKEV2, TFTP, NTP, DHCP)

### StatefulRules
* StatefulRules `array`
  * items [StatefulRule](#statefulrule)

### StatelessActions
* StatelessActions `array`
  * items [CollectionMember_String](#collectionmember_string)

### StatelessRule
* StatelessRule `object`: A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
  * Priority **required**
  * RuleDefinition **required**
    * Actions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * MatchAttributes **required**
      * DestinationPorts
        * items [PortRange](#portrange)
      * Destinations
        * items [Address](#address)
      * Protocols
        * items [ProtocolNumber](#protocolnumber)
      * SourcePorts
        * items [PortRange](#portrange)
      * Sources
        * items [Address](#address)
      * TCPFlags
        * items [TCPFlagField](#tcpflagfield)

### StatelessRuleGroupReference
* StatelessRuleGroupReference `object`: Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
  * Priority **required**
  * ResourceArn **required**

### StatelessRuleGroupReferences
* StatelessRuleGroupReferences `array`
  * items [StatelessRuleGroupReference](#statelessrulegroupreference)

### StatelessRules
* StatelessRules `array`
  * items [StatelessRule](#statelessrule)

### StatelessRulesAndCustomActions
* StatelessRulesAndCustomActions `object`: Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
  * CustomActions
    * items [CustomAction](#customaction)
  * StatelessRules **required**
    * items [StatelessRule](#statelessrule)

### SubnetMapping
* SubnetMapping `object`: The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. AWS Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
  * SubnetId **required**

### SubnetMappings
* SubnetMappings `array`
  * items [SubnetMapping](#subnetmapping)

### SyncState
* SyncState `object`: <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, AWS Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>
  * Attachment
    * EndpointId
    * Status
    * SubnetId
  * Config

### SyncStateConfig
* SyncStateConfig `object`

### SyncStates
* SyncStates `object`

### TCPFlag
* TCPFlag `string` (values: FIN, SYN, RST, PSH, ACK, URG, ECE, CWR)

### TCPFlagField
* TCPFlagField `object`: TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
  * Flags **required**
    * items [TCPFlag](#tcpflag)
  * Masks
    * items [TCPFlag](#tcpflag)

### TCPFlags
* TCPFlags `array`
  * items [TCPFlagField](#tcpflagfield)

### Tag
* Tag `object`: A key:value pair associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource. 
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
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagsPaginationMaxResults
* TagsPaginationMaxResults `integer`

### TargetType
* TargetType `string` (values: TLS_SNI, HTTP_HOST)

### TargetTypes
* TargetTypes `array`
  * items [TargetType](#targettype)

### ThrottlingException


### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateFirewallDeleteProtectionRequest
* UpdateFirewallDeleteProtectionRequest `object`
  * DeleteProtection **required**
  * FirewallArn
  * FirewallName
  * UpdateToken

### UpdateFirewallDeleteProtectionResponse
* UpdateFirewallDeleteProtectionResponse `object`
  * DeleteProtection
  * FirewallArn
  * FirewallName
  * UpdateToken

### UpdateFirewallDescriptionRequest
* UpdateFirewallDescriptionRequest `object`
  * Description
  * FirewallArn
  * FirewallName
  * UpdateToken

### UpdateFirewallDescriptionResponse
* UpdateFirewallDescriptionResponse `object`
  * Description
  * FirewallArn
  * FirewallName
  * UpdateToken

### UpdateFirewallPolicyChangeProtectionRequest
* UpdateFirewallPolicyChangeProtectionRequest `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyChangeProtection **required**
  * UpdateToken

### UpdateFirewallPolicyChangeProtectionResponse
* UpdateFirewallPolicyChangeProtectionResponse `object`
  * FirewallArn
  * FirewallName
  * FirewallPolicyChangeProtection
  * UpdateToken

### UpdateFirewallPolicyRequest
* UpdateFirewallPolicyRequest `object`
  * Description
  * DryRun
  * FirewallPolicy **required**
    * StatefulRuleGroupReferences
      * items [StatefulRuleGroupReference](#statefulrulegroupreference)
    * StatelessCustomActions
      * items [CustomAction](#customaction)
    * StatelessDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessFragmentDefaultActions **required**
      * items [CollectionMember_String](#collectionmember_string)
    * StatelessRuleGroupReferences
      * items [StatelessRuleGroupReference](#statelessrulegroupreference)
  * FirewallPolicyArn
  * FirewallPolicyName
  * UpdateToken **required**

### UpdateFirewallPolicyResponse
* UpdateFirewallPolicyResponse `object`
  * FirewallPolicyResponse **required**
    * Description
    * FirewallPolicyArn **required**
    * FirewallPolicyId **required**
    * FirewallPolicyName **required**
    * FirewallPolicyStatus
    * Tags
      * items [Tag](#tag)
  * UpdateToken **required**

### UpdateLoggingConfigurationRequest
* UpdateLoggingConfigurationRequest `object`
  * FirewallArn
  * FirewallName
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [LogDestinationConfig](#logdestinationconfig)

### UpdateLoggingConfigurationResponse
* UpdateLoggingConfigurationResponse `object`
  * FirewallArn
  * FirewallName
  * LoggingConfiguration [LoggingConfiguration](#loggingconfiguration)

### UpdateRuleGroupRequest
* UpdateRuleGroupRequest `object`
  * Description
  * DryRun
  * RuleGroup
    * RuleVariables
      * IPSets
      * PortSets
    * RulesSource **required**
      * RulesSourceList
        * GeneratedRulesType **required**
        * TargetTypes **required**
          * items [TargetType](#targettype)
        * Targets **required**
          * items [CollectionMember_String](#collectionmember_string)
      * RulesString
      * StatefulRules
        * items [StatefulRule](#statefulrule)
      * StatelessRulesAndCustomActions
        * CustomActions
          * items [CustomAction](#customaction)
        * StatelessRules **required**
          * items [StatelessRule](#statelessrule)
  * RuleGroupArn
  * RuleGroupName
  * Rules
  * Type
  * UpdateToken **required**

### UpdateRuleGroupResponse
* UpdateRuleGroupResponse `object`
  * RuleGroupResponse **required**
    * Capacity
    * Description
    * RuleGroupArn **required**
    * RuleGroupId **required**
    * RuleGroupName **required**
    * RuleGroupStatus
    * Tags
      * items [Tag](#tag)
    * Type
  * UpdateToken **required**

### UpdateSubnetChangeProtectionRequest
* UpdateSubnetChangeProtectionRequest `object`
  * FirewallArn
  * FirewallName
  * SubnetChangeProtection **required**
  * UpdateToken

### UpdateSubnetChangeProtectionResponse
* UpdateSubnetChangeProtectionResponse `object`
  * FirewallArn
  * FirewallName
  * SubnetChangeProtection
  * UpdateToken

### UpdateToken
* UpdateToken `string`

### VariableDefinition
* VariableDefinition `string`

### VariableDefinitionList
* VariableDefinitionList `array`
  * items [VariableDefinition](#variabledefinition)

### VpcId
* VpcId `string`

### VpcIds
* VpcIds `array`
  * items [VpcId](#vpcid)


