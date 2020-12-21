# @datafire/azure_hdinsight_applications

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_applications
```
```js
let azure_hdinsight_applications = require('@datafire/azure_hdinsight_applications').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Applications_ListByCluster
Lists all of the applications for the HDInsight cluster.


```js
azure_hdinsight_applications.Applications_ListByCluster({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### Applications_Delete
Deletes the specified application on the HDInsight cluster.


```js
azure_hdinsight_applications.Applications_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * applicationName **required** `string`: The constant value for the application name.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
*Output schema unknown*

### Applications_Get
Gets properties of the specified application.


```js
azure_hdinsight_applications.Applications_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * applicationName **required** `string`: The constant value for the application name.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [Application](#application)

### Applications_Create
Creates applications for the HDInsight cluster.


```js
azure_hdinsight_applications.Applications_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * applicationName **required** `string`: The constant value for the application name.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [Application](#application)

#### Output
* output [Application](#application)



## Definitions

### Application
* Application `object`: The HDInsight cluster application
  * etag `string`: The ETag for the application
  * properties [ApplicationProperties](#applicationproperties)
  * tags `object`: The tags for the application.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ApplicationGetEndpoint
* ApplicationGetEndpoint `object`: Gets the application SSH endpoint
  * destinationPort `integer`: The destination port to connect to.
  * location `string`: The location of the endpoint.
  * publicPort `integer`: The public port to connect to.

### ApplicationGetHttpsEndpoint
* ApplicationGetHttpsEndpoint `object`: Gets the application HTTP endpoints.
  * accessModes `array`: The list of access modes for the application.
    * items `string`
  * destinationPort `integer`: The destination port to connect to.
  * disableGatewayAuth `boolean`: The value indicates whether to disable GatewayAuth.
  * location `string`: The location of the endpoint.
  * publicPort `integer`: The public port to connect to.
  * subDomainSuffix `string`: The subdomain suffix of the application.

### ApplicationListResult
* ApplicationListResult `object`: Result of the request to list cluster Applications. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The URL to get the next set of operation list results if there are any.
  * value `array`: The list of HDInsight applications installed on HDInsight cluster.
    * items [Application](#application)

### ApplicationProperties
* ApplicationProperties `object`: The HDInsight cluster application GET response.
  * applicationState `string`: The application state.
  * applicationType `string`: The application type.
  * computeProfile `object`: Describes the compute profile.
    * roles `array`: The list of roles in the cluster.
      * items `object`: Describes a role on the cluster.
        * autoscale `object`: The autoscale request parameters
          * capacity `object`: The load-based autoscale request parameters
          * recurrence `object`: Schedule-based autoscale request parameters
        * dataDisksGroups `array`: The data disks groups for the role.
          * items `object`: The data disks groups for the role.
        * hardwareProfile `object`: The hardware profile.
          * vmSize `string`: The size of the VM
        * minInstanceCount `integer`: The minimum instance count of the cluster.
        * name `string`: The name of the role.
        * osProfile `object`: The Linux operation systems profile.
          * linuxOperatingSystemProfile `object`: The ssh username, password, and ssh public key.
        * scriptActions `array`: The list of script actions on the role.
          * items `object`: Describes a script action on role on the cluster.
        * targetInstanceCount `integer`: The instance count of the cluster.
        * virtualNetworkProfile `object`: The virtual network properties.
          * id `string`: The ID of the virtual network.
          * subnet `string`: The name of the subnet.
  * createdDate `string`: The application create date time.
  * errors `array`: The list of errors.
    * items `object`: The error message associated with the cluster creation.
      * code `string`: The error code.
      * message `string`: The error message.
  * httpsEndpoints `array`: The list of application HTTPS endpoints.
    * items [ApplicationGetHttpsEndpoint](#applicationgethttpsendpoint)
  * installScriptActions `array`: The list of install script actions.
    * items `object`: Describes a script action on a running cluster.
      * applicationName `string`: The application name of the script action, if any.
      * name **required** `string`: The name of the script action.
      * parameters `string`: The parameters for the script
      * roles **required** `array`: The list of roles where script will be executed.
        * items `string`
      * uri **required** `string`: The URI to the script.
  * marketplaceIdentifier `string`: The marketplace identifier.
  * provisioningState `string`: The provisioning state of the application.
  * sshEndpoints `array`: The list of application SSH endpoints.
    * items [ApplicationGetEndpoint](#applicationgetendpoint)
  * uninstallScriptActions `array`: The list of uninstall script actions.
    * items `object`: Describes a script action on a running cluster.
      * applicationName `string`: The application name of the script action, if any.
      * name **required** `string`: The name of the script action.
      * parameters `string`: The parameters for the script
      * roles **required** `array`: The list of roles where script will be executed.
        * items `string`
      * uri **required** `string`: The URI to the script.


