# @datafire/azure_hdinsight_configurations

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_configurations
```
```js
let azure_hdinsight_configurations = require('@datafire/azure_hdinsight_configurations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_hdinsight_configurations.Configurations_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "configurationName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Configurations_Get
The configuration object for the specified cluster.


```js
azure_hdinsight_configurations.Configurations_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "configurationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * configurationName **required** `string`: The constant for configuration type of gateway.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`

### Configurations_UpdateHTTPSettings
Configures the HTTP settings on the specified cluster.


```js
azure_hdinsight_configurations.Configurations_UpdateHTTPSettings({
  "resourceGroupName": "",
  "clusterName": "",
  "configurationName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * configurationName **required** `string` (values: gateway): The constant for configuration type of gateway.
  * parameters **required** [HttpConnectivitySettings](#httpconnectivitysettings)
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### HttpConnectivitySettings
* HttpConnectivitySettings `object`: The payload for a Configure HTTP settings request.
  * restAuthCredential.isEnabled `string` (values: true, false): Whether or not the HTTP based authorization is enabled.
  * restAuthCredential.password `string`: The HTTP user password.
  * restAuthCredential.username `string`: The HTTP username.

### LinuxOperatingSystemProfile
* LinuxOperatingSystemProfile `object`: The ssh username, password, and ssh public key.
  * password `string`: The password.
  * sshProfile [SshProfile](#sshprofile)
  * username `string`: The username.

### OsProfile
* OsProfile `object`: The Linux operation systems profile.
  * linuxOperatingSystemProfile [LinuxOperatingSystemProfile](#linuxoperatingsystemprofile)

### SshProfile
* SshProfile `object`: The list of SSH public keys.
  * publicKeys `array`: The list of SSH public keys.
    * items [SshPublicKey](#sshpublickey)

### SshPublicKey
* SshPublicKey `object`: The SSH public key for the cluster nodes.
  * certificateData `string`: The certificate for SSH.


