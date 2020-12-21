# @datafire/amazonaws_eks

Client library for Amazon Elastic Kubernetes Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_eks
```
```js
let amazonaws_eks = require('@datafire/amazonaws_eks').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>

## Actions

### DescribeAddonVersions



```js
amazonaws_eks.DescribeAddonVersions({}, context)
```

#### Input
* input `object`
  * kubernetesVersion `string`
  * maxResults `integer`
  * nextToken `string`
  * addonName `string`

#### Output
* output [DescribeAddonVersionsResponse](#describeaddonversionsresponse)

### ListClusters



```js
amazonaws_eks.ListClusters({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListClustersResponse](#listclustersresponse)

### CreateCluster



```js
amazonaws_eks.CreateCluster({
  "name": "",
  "roleArn": "",
  "resourcesVpcConfig": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * encryptionConfig `array`: The encryption configuration for the cluster.
    * items [EncryptionConfig](#encryptionconfig)
  * kubernetesNetworkConfig `object`: The Kubernetes network configuration for the cluster.
    * serviceIpv4Cidr
  * logging `object`: An object representing the logging configuration for resources in your cluster.
    * clusterLogging
      * items [LogSetup](#logsetup)
  * name **required** `string`: The unique name to give to your cluster.
  * resourcesVpcConfig **required** `object`: An object representing the VPC configuration to use for an Amazon EKS cluster.
    * endpointPrivateAccess
    * endpointPublicAccess
    * publicAccessCidrs
      * items [String](#string)
    * securityGroupIds
      * items [String](#string)
    * subnetIds
      * items [String](#string)
  * roleArn **required** `string`: The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
  * version `string`: The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### DeleteCluster



```js
amazonaws_eks.DeleteCluster({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DescribeCluster



```js
amazonaws_eks.DescribeCluster({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeClusterResponse](#describeclusterresponse)

### ListAddons



```js
amazonaws_eks.ListAddons({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListAddonsResponse](#listaddonsresponse)

### CreateAddon



```js
amazonaws_eks.CreateAddon({
  "name": "",
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * tags `object`: The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. 
  * addonName **required** `string`: The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
  * addonVersion `string`: The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.
  * clientRequestToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * resolveConflicts `string` (values: OVERWRITE, NONE): How to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on.
  * serviceAccountRoleArn `string`: <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>

#### Output
* output [CreateAddonResponse](#createaddonresponse)

### DeleteAddon



```js
amazonaws_eks.DeleteAddon({
  "name": "",
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * addonName **required** `string`

#### Output
* output [DeleteAddonResponse](#deleteaddonresponse)

### DescribeAddon



```js
amazonaws_eks.DescribeAddon({
  "name": "",
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * addonName **required** `string`

#### Output
* output [DescribeAddonResponse](#describeaddonresponse)

### UpdateAddon



```js
amazonaws_eks.UpdateAddon({
  "name": "",
  "addonName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * addonName **required** `string`
  * addonVersion `string`: The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * resolveConflicts `string` (values: OVERWRITE, NONE): How to resolve parameter value conflicts when applying the new version of the add-on to the cluster.
  * serviceAccountRoleArn `string`: <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>

#### Output
* output [UpdateAddonResponse](#updateaddonresponse)

### ListFargateProfiles



```js
amazonaws_eks.ListFargateProfiles({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListFargateProfilesResponse](#listfargateprofilesresponse)

### CreateFargateProfile



```js
amazonaws_eks.CreateFargateProfile({
  "name": "",
  "fargateProfileName": "",
  "podExecutionRoleArn": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * tags `object`: The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * fargateProfileName **required** `string`: The name of the Fargate profile.
  * podExecutionRoleArn **required** `string`: The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.
  * selectors `array`: The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.
    * items [FargateProfileSelector](#fargateprofileselector)
  * subnets `array`: The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
    * items [String](#string)

#### Output
* output [CreateFargateProfileResponse](#createfargateprofileresponse)

### DeleteFargateProfile



```js
amazonaws_eks.DeleteFargateProfile({
  "name": "",
  "fargateProfileName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * fargateProfileName **required** `string`

#### Output
* output [DeleteFargateProfileResponse](#deletefargateprofileresponse)

### DescribeFargateProfile



```js
amazonaws_eks.DescribeFargateProfile({
  "name": "",
  "fargateProfileName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * fargateProfileName **required** `string`

#### Output
* output [DescribeFargateProfileResponse](#describefargateprofileresponse)

### ListNodegroups



```js
amazonaws_eks.ListNodegroups({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListNodegroupsResponse](#listnodegroupsresponse)

### CreateNodegroup



```js
amazonaws_eks.CreateNodegroup({
  "name": "",
  "nodegroupName": "",
  "subnets": [],
  "nodeRole": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * tags `object`: The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
  * amiType `string` (values: AL2_x86_64, AL2_x86_64_GPU, AL2_ARM_64): The AMI type for your node group. GPU instance types should use the <code>AL2_x86_64_GPU</code> AMI type. Non-GPU instances should use the <code>AL2_x86_64</code> AMI type. Arm instances should use the <code>AL2_ARM_64</code> AMI type. All types use the Amazon EKS optimized Amazon Linux 2 AMI. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
  * capacityType `string` (values: ON_DEMAND, SPOT): The capacity type for your node group.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * diskSize `integer`: The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB. If you specify <code>launchTemplate</code>, then don't specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
  * instanceTypes `array`: Specify the instance types for a node group. If you specify a GPU instance type, be sure to specify <code>AL2_x86_64_GPU</code> with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don't specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
    * items [String](#string)
  * labels `object`: The Kubernetes labels to be applied to the nodes in the node group when they are created.
  * launchTemplate `object`: <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
    * id
    * name
    * version
  * nodeRole **required** `string`: The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">Amazon EKS Worker Node IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
  * nodegroupName **required** `string`: The unique name to give your node group.
  * releaseVersion `string`: The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux 2 AMI versions</a> in the <i>Amazon EKS User Guide</i>. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
  * remoteAccess `object`: An object representing the remote access configuration for the managed node group.
    * ec2SshKey
    * sourceSecurityGroups
      * items [String](#string)
  * scalingConfig `object`: An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. If you specify a value for any property, then you must specify values for all of the properties.
    * desiredSize
    * maxSize
    * minSize
  * subnets **required** `array`: The subnets to use for the Auto Scaling group that is created for your node group. These subnets must have the tag key <code>kubernetes.io/cluster/CLUSTER_NAME</code> with a value of <code>shared</code>, where <code>CLUSTER_NAME</code> is replaced with the name of your cluster. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
    * items [String](#string)
  * version `string`: The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.

#### Output
* output [CreateNodegroupResponse](#createnodegroupresponse)

### DeleteNodegroup



```js
amazonaws_eks.DeleteNodegroup({
  "name": "",
  "nodegroupName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * nodegroupName **required** `string`

#### Output
* output [DeleteNodegroupResponse](#deletenodegroupresponse)

### DescribeNodegroup



```js
amazonaws_eks.DescribeNodegroup({
  "name": "",
  "nodegroupName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * nodegroupName **required** `string`

#### Output
* output [DescribeNodegroupResponse](#describenodegroupresponse)

### UpdateNodegroupConfig



```js
amazonaws_eks.UpdateNodegroupConfig({
  "name": "",
  "nodegroupName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * nodegroupName **required** `string`
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * labels `object`: An object representing a Kubernetes label change for a managed node group.
    * addOrUpdateLabels
    * removeLabels
      * items [String](#string)
  * scalingConfig `object`: An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. If you specify a value for any property, then you must specify values for all of the properties.
    * desiredSize
    * maxSize
    * minSize

#### Output
* output [UpdateNodegroupConfigResponse](#updatenodegroupconfigresponse)

### UpdateNodegroupVersion



```js
amazonaws_eks.UpdateNodegroupVersion({
  "name": "",
  "nodegroupName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * nodegroupName **required** `string`
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * force `boolean`: Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.
  * launchTemplate `object`: <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
    * id
    * name
    * version
  * releaseVersion `string`: The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux 2 AMI versions </a> in the <i>Amazon EKS User Guide</i>. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.
  * version `string`: The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.

#### Output
* output [UpdateNodegroupVersionResponse](#updatenodegroupversionresponse)

### UpdateClusterConfig



```js
amazonaws_eks.UpdateClusterConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * logging `object`: An object representing the logging configuration for resources in your cluster.
    * clusterLogging
      * items [LogSetup](#logsetup)
  * resourcesVpcConfig `object`: An object representing the VPC configuration to use for an Amazon EKS cluster.
    * endpointPrivateAccess
    * endpointPublicAccess
    * publicAccessCidrs
      * items [String](#string)
    * securityGroupIds
      * items [String](#string)
    * subnetIds
      * items [String](#string)

#### Output
* output [UpdateClusterConfigResponse](#updateclusterconfigresponse)

### ListUpdates



```js
amazonaws_eks.ListUpdates({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * nodegroupName `string`
  * addonName `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListUpdatesResponse](#listupdatesresponse)

### UpdateClusterVersion



```js
amazonaws_eks.UpdateClusterVersion({
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * version **required** `string`: The desired Kubernetes version following a successful update.

#### Output
* output [UpdateClusterVersionResponse](#updateclusterversionresponse)

### DescribeUpdate



```js
amazonaws_eks.DescribeUpdate({
  "name": "",
  "updateId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * updateId **required** `string`
  * nodegroupName `string`
  * addonName `string`

#### Output
* output [DescribeUpdateResponse](#describeupdateresponse)

### ListTagsForResource



```js
amazonaws_eks.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_eks.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags to add to the resource. A tag is an array of key-value pairs.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_eks.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AMITypes
* AMITypes `string` (values: AL2_x86_64, AL2_x86_64_GPU, AL2_ARM_64)

### Addon
* Addon `object`: An Amazon EKS add-on.
  * tags
  * addonArn
  * addonName
  * addonVersion
  * clusterName
  * createdAt
  * health
    * issues
      * items [AddonIssue](#addonissue)
  * modifiedAt
  * serviceAccountRoleArn
  * status

### AddonHealth
* AddonHealth `object`: The health of the add-on.
  * issues
    * items [AddonIssue](#addonissue)

### AddonInfo
* AddonInfo `object`: Information about an add-on.
  * addonName
  * addonVersions
    * items [AddonVersionInfo](#addonversioninfo)
  * type

### AddonIssue
* AddonIssue `object`: An issue related to an add-on.
  * code
  * message
  * resourceIds
    * items [String](#string)

### AddonIssueCode
* AddonIssueCode `string` (values: AccessDenied, InternalFailure, ClusterUnreachable, InsufficientNumberOfReplicas, ConfigurationConflict)

### AddonIssueList
* AddonIssueList `array`
  * items [AddonIssue](#addonissue)

### AddonStatus
* AddonStatus `string` (values: CREATING, ACTIVE, CREATE_FAILED, UPDATING, DELETING, DELETE_FAILED, DEGRADED)

### AddonVersionInfo
* AddonVersionInfo `object`: Information about an add-on version.
  * addonVersion
  * architecture
    * items [String](#string)
  * compatibilities
    * items [Compatibility](#compatibility)

### AddonVersionInfoList
* AddonVersionInfoList `array`
  * items [AddonVersionInfo](#addonversioninfo)

### Addons
* Addons `array`
  * items [AddonInfo](#addoninfo)

### AutoScalingGroup
* AutoScalingGroup `object`: An Auto Scaling group that is associated with an Amazon EKS managed node group.
  * name

### AutoScalingGroupList
* AutoScalingGroupList `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### BadRequestException


### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### Capacity
* Capacity `integer`

### CapacityTypes
* CapacityTypes `string` (values: ON_DEMAND, SPOT)

### Certificate
* Certificate `object`: An object representing the <code>certificate-authority-data</code> for your cluster.
  * data

### ClientException


### Cluster
* Cluster `object`: An object representing an Amazon EKS cluster.
  * tags
  * arn
  * certificateAuthority
    * data
  * clientRequestToken
  * createdAt
  * encryptionConfig
    * items [EncryptionConfig](#encryptionconfig)
  * endpoint
  * identity
    * oidc
      * issuer
  * kubernetesNetworkConfig
    * serviceIpv4Cidr
  * logging
    * clusterLogging
      * items [LogSetup](#logsetup)
  * name
  * platformVersion
  * resourcesVpcConfig
    * clusterSecurityGroupId
    * endpointPrivateAccess
    * endpointPublicAccess
    * publicAccessCidrs
      * items [String](#string)
    * securityGroupIds
      * items [String](#string)
    * subnetIds
      * items [String](#string)
    * vpcId
  * roleArn
  * status
  * version

### ClusterName
* ClusterName `string`

### ClusterStatus
* ClusterStatus `string` (values: CREATING, ACTIVE, DELETING, FAILED, UPDATING)

### Compatibilities
* Compatibilities `array`
  * items [Compatibility](#compatibility)

### Compatibility
* Compatibility `object`: Compatibility information.
  * clusterVersion
  * defaultVersion
  * platformVersions
    * items [String](#string)

### CreateAddonRequest
* CreateAddonRequest `object`
  * tags
  * addonName **required**
  * addonVersion
  * clientRequestToken
  * resolveConflicts
  * serviceAccountRoleArn

### CreateAddonResponse
* CreateAddonResponse `object`
  * addon [Addon](#addon)

### CreateClusterRequest
* CreateClusterRequest `object`
  * tags
  * clientRequestToken
  * encryptionConfig
    * items [EncryptionConfig](#encryptionconfig)
  * kubernetesNetworkConfig
    * serviceIpv4Cidr
  * logging
    * clusterLogging
      * items [LogSetup](#logsetup)
  * name **required**
  * resourcesVpcConfig **required**
    * endpointPrivateAccess
    * endpointPublicAccess
    * publicAccessCidrs
      * items [String](#string)
    * securityGroupIds
      * items [String](#string)
    * subnetIds
      * items [String](#string)
  * roleArn **required**
  * version

### CreateClusterResponse
* CreateClusterResponse `object`
  * cluster
    * tags
    * arn
    * certificateAuthority
      * data
    * clientRequestToken
    * createdAt
    * encryptionConfig
      * items [EncryptionConfig](#encryptionconfig)
    * endpoint
    * identity
      * oidc
        * issuer
    * kubernetesNetworkConfig
      * serviceIpv4Cidr
    * logging
      * clusterLogging
        * items [LogSetup](#logsetup)
    * name
    * platformVersion
    * resourcesVpcConfig
      * clusterSecurityGroupId
      * endpointPrivateAccess
      * endpointPublicAccess
      * publicAccessCidrs
        * items [String](#string)
      * securityGroupIds
        * items [String](#string)
      * subnetIds
        * items [String](#string)
      * vpcId
    * roleArn
    * status
    * version

### CreateFargateProfileRequest
* CreateFargateProfileRequest `object`
  * tags
  * clientRequestToken
  * fargateProfileName **required**
  * podExecutionRoleArn **required**
  * selectors
    * items [FargateProfileSelector](#fargateprofileselector)
  * subnets
    * items [String](#string)

### CreateFargateProfileResponse
* CreateFargateProfileResponse `object`
  * fargateProfile
    * tags
    * clusterName
    * createdAt
    * fargateProfileArn
    * fargateProfileName
    * podExecutionRoleArn
    * selectors
      * items [FargateProfileSelector](#fargateprofileselector)
    * status
    * subnets
      * items [String](#string)

### CreateNodegroupRequest
* CreateNodegroupRequest `object`
  * tags
  * amiType
  * capacityType
  * clientRequestToken
  * diskSize
  * instanceTypes
    * items [String](#string)
  * labels
  * launchTemplate
    * id
    * name
    * version
  * nodeRole **required**
  * nodegroupName **required**
  * releaseVersion
  * remoteAccess
    * ec2SshKey
    * sourceSecurityGroups
      * items [String](#string)
  * scalingConfig
    * desiredSize
    * maxSize
    * minSize
  * subnets **required**
    * items [String](#string)
  * version

### CreateNodegroupResponse
* CreateNodegroupResponse `object`
  * nodegroup
    * tags
    * amiType
    * capacityType
    * clusterName
    * createdAt
    * diskSize
    * health
      * issues
        * items [Issue](#issue)
    * instanceTypes
      * items [String](#string)
    * labels
    * launchTemplate
      * id
      * name
      * version
    * modifiedAt
    * nodeRole
    * nodegroupArn
    * nodegroupName
    * releaseVersion
    * remoteAccess
      * ec2SshKey
      * sourceSecurityGroups
        * items [String](#string)
    * resources
      * autoScalingGroups
        * items [AutoScalingGroup](#autoscalinggroup)
      * remoteAccessSecurityGroup
    * scalingConfig
      * desiredSize
      * maxSize
      * minSize
    * status
    * subnets
      * items [String](#string)
    * version

### DeleteAddonRequest
* DeleteAddonRequest `object`

### DeleteAddonResponse
* DeleteAddonResponse `object`
  * addon [Addon](#addon)

### DeleteClusterRequest
* DeleteClusterRequest `object`

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * cluster
    * tags
    * arn
    * certificateAuthority
      * data
    * clientRequestToken
    * createdAt
    * encryptionConfig
      * items [EncryptionConfig](#encryptionconfig)
    * endpoint
    * identity
      * oidc
        * issuer
    * kubernetesNetworkConfig
      * serviceIpv4Cidr
    * logging
      * clusterLogging
        * items [LogSetup](#logsetup)
    * name
    * platformVersion
    * resourcesVpcConfig
      * clusterSecurityGroupId
      * endpointPrivateAccess
      * endpointPublicAccess
      * publicAccessCidrs
        * items [String](#string)
      * securityGroupIds
        * items [String](#string)
      * subnetIds
        * items [String](#string)
      * vpcId
    * roleArn
    * status
    * version

### DeleteFargateProfileRequest
* DeleteFargateProfileRequest `object`

### DeleteFargateProfileResponse
* DeleteFargateProfileResponse `object`
  * fargateProfile
    * tags
    * clusterName
    * createdAt
    * fargateProfileArn
    * fargateProfileName
    * podExecutionRoleArn
    * selectors
      * items [FargateProfileSelector](#fargateprofileselector)
    * status
    * subnets
      * items [String](#string)

### DeleteNodegroupRequest
* DeleteNodegroupRequest `object`

### DeleteNodegroupResponse
* DeleteNodegroupResponse `object`
  * nodegroup
    * tags
    * amiType
    * capacityType
    * clusterName
    * createdAt
    * diskSize
    * health
      * issues
        * items [Issue](#issue)
    * instanceTypes
      * items [String](#string)
    * labels
    * launchTemplate
      * id
      * name
      * version
    * modifiedAt
    * nodeRole
    * nodegroupArn
    * nodegroupName
    * releaseVersion
    * remoteAccess
      * ec2SshKey
      * sourceSecurityGroups
        * items [String](#string)
    * resources
      * autoScalingGroups
        * items [AutoScalingGroup](#autoscalinggroup)
      * remoteAccessSecurityGroup
    * scalingConfig
      * desiredSize
      * maxSize
      * minSize
    * status
    * subnets
      * items [String](#string)
    * version

### DescribeAddonRequest
* DescribeAddonRequest `object`

### DescribeAddonResponse
* DescribeAddonResponse `object`
  * addon [Addon](#addon)

### DescribeAddonVersionsRequest
* DescribeAddonVersionsRequest `object`

### DescribeAddonVersionsRequestMaxResults
* DescribeAddonVersionsRequestMaxResults `integer`

### DescribeAddonVersionsResponse
* DescribeAddonVersionsResponse `object`
  * addons
    * items [AddonInfo](#addoninfo)
  * nextToken

### DescribeClusterRequest
* DescribeClusterRequest `object`

### DescribeClusterResponse
* DescribeClusterResponse `object`
  * cluster
    * tags
    * arn
    * certificateAuthority
      * data
    * clientRequestToken
    * createdAt
    * encryptionConfig
      * items [EncryptionConfig](#encryptionconfig)
    * endpoint
    * identity
      * oidc
        * issuer
    * kubernetesNetworkConfig
      * serviceIpv4Cidr
    * logging
      * clusterLogging
        * items [LogSetup](#logsetup)
    * name
    * platformVersion
    * resourcesVpcConfig
      * clusterSecurityGroupId
      * endpointPrivateAccess
      * endpointPublicAccess
      * publicAccessCidrs
        * items [String](#string)
      * securityGroupIds
        * items [String](#string)
      * subnetIds
        * items [String](#string)
      * vpcId
    * roleArn
    * status
    * version

### DescribeFargateProfileRequest
* DescribeFargateProfileRequest `object`

### DescribeFargateProfileResponse
* DescribeFargateProfileResponse `object`
  * fargateProfile
    * tags
    * clusterName
    * createdAt
    * fargateProfileArn
    * fargateProfileName
    * podExecutionRoleArn
    * selectors
      * items [FargateProfileSelector](#fargateprofileselector)
    * status
    * subnets
      * items [String](#string)

### DescribeNodegroupRequest
* DescribeNodegroupRequest `object`

### DescribeNodegroupResponse
* DescribeNodegroupResponse `object`
  * nodegroup
    * tags
    * amiType
    * capacityType
    * clusterName
    * createdAt
    * diskSize
    * health
      * issues
        * items [Issue](#issue)
    * instanceTypes
      * items [String](#string)
    * labels
    * launchTemplate
      * id
      * name
      * version
    * modifiedAt
    * nodeRole
    * nodegroupArn
    * nodegroupName
    * releaseVersion
    * remoteAccess
      * ec2SshKey
      * sourceSecurityGroups
        * items [String](#string)
    * resources
      * autoScalingGroups
        * items [AutoScalingGroup](#autoscalinggroup)
      * remoteAccessSecurityGroup
    * scalingConfig
      * desiredSize
      * maxSize
      * minSize
    * status
    * subnets
      * items [String](#string)
    * version

### DescribeUpdateRequest
* DescribeUpdateRequest `object`

### DescribeUpdateResponse
* DescribeUpdateResponse `object`
  * update
    * createdAt
    * errors
      * items [ErrorDetail](#errordetail)
    * id
    * params
      * items [UpdateParam](#updateparam)
    * status
    * type

### EncryptionConfig
* EncryptionConfig `object`: The encryption configuration for the cluster.
  * provider
    * keyArn
  * resources
    * items [String](#string)

### EncryptionConfigList
* EncryptionConfigList `array`
  * items [EncryptionConfig](#encryptionconfig)

### ErrorCode
* ErrorCode `string` (values: SubnetNotFound, SecurityGroupNotFound, EniLimitReached, IpNotAvailable, AccessDenied, OperationNotPermitted, VpcIdNotFound, Unknown, NodeCreationFailure, PodEvictionFailure, InsufficientFreeAddresses, ClusterUnreachable, InsufficientNumberOfReplicas, ConfigurationConflict)

### ErrorDetail
* ErrorDetail `object`: An object representing an error when an asynchronous operation fails.
  * errorCode
  * errorMessage
  * resourceIds
    * items [String](#string)

### ErrorDetails
* ErrorDetails `array`
  * items [ErrorDetail](#errordetail)

### FargateProfile
* FargateProfile `object`: An object representing an AWS Fargate profile.
  * tags
  * clusterName
  * createdAt
  * fargateProfileArn
  * fargateProfileName
  * podExecutionRoleArn
  * selectors
    * items [FargateProfileSelector](#fargateprofileselector)
  * status
  * subnets
    * items [String](#string)

### FargateProfileLabel
* FargateProfileLabel `object`

### FargateProfileSelector
* FargateProfileSelector `object`: An object representing an AWS Fargate profile selector.
  * labels
  * namespace

### FargateProfileSelectors
* FargateProfileSelectors `array`
  * items [FargateProfileSelector](#fargateprofileselector)

### FargateProfileStatus
* FargateProfileStatus `string` (values: CREATING, ACTIVE, DELETING, CREATE_FAILED, DELETE_FAILED)

### FargateProfilesRequestMaxResults
* FargateProfilesRequestMaxResults `integer`

### Identity
* Identity `object`: An object representing an identity provider for authentication credentials.
  * oidc
    * issuer

### InvalidParameterException


### InvalidRequestException


### Issue
* Issue `object`: An object representing an issue with an Amazon EKS resource.
  * code
  * message
  * resourceIds
    * items [String](#string)

### IssueList
* IssueList `array`
  * items [Issue](#issue)

### KubernetesNetworkConfigRequest
* KubernetesNetworkConfigRequest `object`: The Kubernetes network configuration for the cluster.
  * serviceIpv4Cidr

### KubernetesNetworkConfigResponse
* KubernetesNetworkConfigResponse `object`: The Kubernetes network configuration for the cluster.
  * serviceIpv4Cidr

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
  * id
  * name
  * version

### ListAddonsRequest
* ListAddonsRequest `object`

### ListAddonsRequestMaxResults
* ListAddonsRequestMaxResults `integer`

### ListAddonsResponse
* ListAddonsResponse `object`
  * addons
    * items [String](#string)
  * nextToken

### ListClustersRequest
* ListClustersRequest `object`

### ListClustersRequestMaxResults
* ListClustersRequestMaxResults `integer`

### ListClustersResponse
* ListClustersResponse `object`
  * clusters
    * items [String](#string)
  * nextToken

### ListFargateProfilesRequest
* ListFargateProfilesRequest `object`

### ListFargateProfilesResponse
* ListFargateProfilesResponse `object`
  * fargateProfileNames
    * items [String](#string)
  * nextToken

### ListNodegroupsRequest
* ListNodegroupsRequest `object`

### ListNodegroupsRequestMaxResults
* ListNodegroupsRequestMaxResults `integer`

### ListNodegroupsResponse
* ListNodegroupsResponse `object`
  * nextToken
  * nodegroups
    * items [String](#string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListUpdatesRequest
* ListUpdatesRequest `object`

### ListUpdatesRequestMaxResults
* ListUpdatesRequestMaxResults `integer`

### ListUpdatesResponse
* ListUpdatesResponse `object`
  * nextToken
  * updateIds
    * items [String](#string)

### LogSetup
* LogSetup `object`: An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
  * enabled
  * types
    * items [LogType](#logtype)

### LogSetups
* LogSetups `array`
  * items [LogSetup](#logsetup)

### LogType
* LogType `string` (values: api, audit, authenticator, controllerManager, scheduler)

### LogTypes
* LogTypes `array`
  * items [LogType](#logtype)

### Logging
* Logging `object`: An object representing the logging configuration for resources in your cluster.
  * clusterLogging
    * items [LogSetup](#logsetup)

### Nodegroup
* Nodegroup `object`: An object representing an Amazon EKS managed node group.
  * tags
  * amiType
  * capacityType
  * clusterName
  * createdAt
  * diskSize
  * health
    * issues
      * items [Issue](#issue)
  * instanceTypes
    * items [String](#string)
  * labels
  * launchTemplate
    * id
    * name
    * version
  * modifiedAt
  * nodeRole
  * nodegroupArn
  * nodegroupName
  * releaseVersion
  * remoteAccess
    * ec2SshKey
    * sourceSecurityGroups
      * items [String](#string)
  * resources
    * autoScalingGroups
      * items [AutoScalingGroup](#autoscalinggroup)
    * remoteAccessSecurityGroup
  * scalingConfig
    * desiredSize
    * maxSize
    * minSize
  * status
  * subnets
    * items [String](#string)
  * version

### NodegroupHealth
* NodegroupHealth `object`: An object representing the health status of the node group.
  * issues
    * items [Issue](#issue)

### NodegroupIssueCode
* NodegroupIssueCode `string` (values: AutoScalingGroupNotFound, AutoScalingGroupInvalidConfiguration, Ec2SecurityGroupNotFound, Ec2SecurityGroupDeletionFailure, Ec2LaunchTemplateNotFound, Ec2LaunchTemplateVersionMismatch, Ec2SubnetNotFound, Ec2SubnetInvalidConfiguration, IamInstanceProfileNotFound, IamLimitExceeded, IamNodeRoleNotFound, NodeCreationFailure, AsgInstanceLaunchFailures, InstanceLimitExceeded, InsufficientFreeAddresses, AccessDenied, InternalFailure, ClusterUnreachable)

### NodegroupResources
* NodegroupResources `object`: An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
  * autoScalingGroups
    * items [AutoScalingGroup](#autoscalinggroup)
  * remoteAccessSecurityGroup

### NodegroupScalingConfig
* NodegroupScalingConfig `object`: An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. If you specify a value for any property, then you must specify values for all of the properties.
  * desiredSize
  * maxSize
  * minSize

### NodegroupStatus
* NodegroupStatus `string` (values: CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, DEGRADED)

### NotFoundException


### OIDC
* OIDC `object`: An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> identity provider information for the cluster.
  * issuer

### Provider
* Provider `object`: Identifies the AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the secrets.
  * keyArn

### RemoteAccessConfig
* RemoteAccessConfig `object`: An object representing the remote access configuration for the managed node group.
  * ec2SshKey
  * sourceSecurityGroups
    * items [String](#string)

### ResolveConflicts
* ResolveConflicts `string` (values: OVERWRITE, NONE)

### ResourceInUseException


### ResourceLimitExceededException


### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### ServerException


### ServiceUnavailableException


### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UnsupportedAvailabilityZoneException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### Update
* Update `object`: An object representing an asynchronous update.
  * createdAt
  * errors
    * items [ErrorDetail](#errordetail)
  * id
  * params
    * items [UpdateParam](#updateparam)
  * status
  * type

### UpdateAddonRequest
* UpdateAddonRequest `object`
  * addonVersion
  * clientRequestToken
  * resolveConflicts
  * serviceAccountRoleArn

### UpdateAddonResponse
* UpdateAddonResponse `object`
  * update [Update](#update)

### UpdateClusterConfigRequest
* UpdateClusterConfigRequest `object`
  * clientRequestToken
  * logging
    * clusterLogging
      * items [LogSetup](#logsetup)
  * resourcesVpcConfig [VpcConfigRequest](#vpcconfigrequest)

### UpdateClusterConfigResponse
* UpdateClusterConfigResponse `object`
  * update [Update](#update)

### UpdateClusterVersionRequest
* UpdateClusterVersionRequest `object`
  * clientRequestToken
  * version **required**

### UpdateClusterVersionResponse
* UpdateClusterVersionResponse `object`
  * update
    * createdAt
    * errors
      * items [ErrorDetail](#errordetail)
    * id
    * params
      * items [UpdateParam](#updateparam)
    * status
    * type

### UpdateLabelsPayload
* UpdateLabelsPayload `object`: An object representing a Kubernetes label change for a managed node group.
  * addOrUpdateLabels
  * removeLabels
    * items [String](#string)

### UpdateNodegroupConfigRequest
* UpdateNodegroupConfigRequest `object`
  * clientRequestToken
  * labels
    * addOrUpdateLabels
    * removeLabels
      * items [String](#string)
  * scalingConfig
    * desiredSize
    * maxSize
    * minSize

### UpdateNodegroupConfigResponse
* UpdateNodegroupConfigResponse `object`
  * update [Update](#update)

### UpdateNodegroupVersionRequest
* UpdateNodegroupVersionRequest `object`
  * clientRequestToken
  * force
  * launchTemplate
    * id
    * name
    * version
  * releaseVersion
  * version

### UpdateNodegroupVersionResponse
* UpdateNodegroupVersionResponse `object`
  * update [Update](#update)

### UpdateParam
* UpdateParam `object`: An object representing the details of an update request.
  * type
  * value

### UpdateParamType
* UpdateParamType `string` (values: Version, PlatformVersion, EndpointPrivateAccess, EndpointPublicAccess, ClusterLogging, DesiredSize, LabelsToAdd, LabelsToRemove, MaxSize, MinSize, ReleaseVersion, PublicAccessCidrs, AddonVersion, ServiceAccountRoleArn, ResolveConflicts)

### UpdateParams
* UpdateParams `array`
  * items [UpdateParam](#updateparam)

### UpdateStatus
* UpdateStatus `string` (values: InProgress, Failed, Cancelled, Successful)

### UpdateType
* UpdateType `string` (values: VersionUpdate, EndpointAccessUpdate, LoggingUpdate, ConfigUpdate, AddonUpdate)

### VpcConfigRequest
* VpcConfigRequest `object`: An object representing the VPC configuration to use for an Amazon EKS cluster.
  * endpointPrivateAccess
  * endpointPublicAccess
  * publicAccessCidrs
    * items [String](#string)
  * securityGroupIds
    * items [String](#string)
  * subnetIds
    * items [String](#string)

### VpcConfigResponse
* VpcConfigResponse `object`: An object representing an Amazon EKS cluster VPC configuration response.
  * clusterSecurityGroupId
  * endpointPrivateAccess
  * endpointPublicAccess
  * publicAccessCidrs
    * items [String](#string)
  * securityGroupIds
    * items [String](#string)
  * subnetIds
    * items [String](#string)
  * vpcId

### labelKey
* labelKey `string`

### labelValue
* labelValue `string`

### labelsKeyList
* labelsKeyList `array`
  * items [String](#string)

### labelsMap
* labelsMap `object`


