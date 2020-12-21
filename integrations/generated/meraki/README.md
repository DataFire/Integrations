# @datafire/meraki

Client library for Meraki Dashboard API

## Installation and Usage
```bash
npm install --save @datafire/meraki
```
```js
let meraki = require('@datafire/meraki').create({
  meraki_api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.

> Date: 02 December, 2020
>
> [What's New](https://meraki.io/whats-new/)

---

[API Documentation](https://meraki.io/api)

[Community Support](https://meraki.io/community)

[Meraki Homepage](https://www.meraki.com)


## Actions

### getDevice
Return a single device


```js
meraki.getDevice({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDevice
Update the attributes of a device


```js
meraki.updateDevice({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDevice `object`
    * address `string`: The address of a device
    * floorPlanId `string`: The floor plan to associate to this device. null disassociates the device from the floorplan.
    * lat `number`: The latitude of a device
    * lng `number`: The longitude of a device
    * moveMapMarker `boolean`: Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.
    * name `string`: The name of a device
    * notes `string`: The notes for the device. String. Limited to 255 characters.
    * switchProfileId `string`: The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.
    * tags `array`: The list of tags of a device
      * items `string`

#### Output
* output `object`

### getDeviceApplianceDhcpSubnets
Return the DHCP subnet information for an appliance


```js
meraki.getDeviceApplianceDhcpSubnets({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceAppliancePerformance
Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.


```js
meraki.getDeviceAppliancePerformance({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### blinkDeviceLeds
Blink the LEDs on a device


```js
meraki.blinkDeviceLeds({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * blinkDeviceLeds `object`
    * duration `integer`: The duration in seconds. Must be between 5 and 120. Default is 20 seconds
    * duty `integer`: The duty cycle as the percent active. Must be between 10 and 90. Default is 50.
    * period `integer`: The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds

#### Output
* output `object`

### getDeviceCameraAnalyticsLive
Returns live state from camera of analytics zones


```js
meraki.getDeviceCameraAnalyticsLive({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceCameraAnalyticsOverview
Returns an overview of aggregate analytics data for a timespan


```js
meraki.getDeviceCameraAnalyticsOverview({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.
  * objectType `string` (values: person, vehicle): [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].

#### Output
* output `object`

### getDeviceCameraAnalyticsRecent
Returns most recent record for analytics zones


```js
meraki.getDeviceCameraAnalyticsRecent({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * objectType `string` (values: person, vehicle): [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].

#### Output
* output `object`

### getDeviceCameraAnalyticsZones
Returns all configured analytic zones for this camera


```js
meraki.getDeviceCameraAnalyticsZones({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceCameraAnalyticsZoneHistory
Return historical records for analytic zones


```js
meraki.getDeviceCameraAnalyticsZoneHistory({
  "serial": "",
  "zoneId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * zoneId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
  * objectType `string` (values: person, vehicle): [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].

#### Output
* output `object`

### generateDeviceCameraSnapshot
Generate a snapshot of what the camera sees at the specified time and return a link to that image.


```js
meraki.generateDeviceCameraSnapshot({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * generateDeviceCameraSnapshot `object`
    * fullframe `boolean`: [optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.
    * timestamp `string`: [optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.

#### Output
* output `object`

### getDeviceCameraQualityAndRetention
Returns quality and retention settings for the given camera


```js
meraki.getDeviceCameraQualityAndRetention({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceCameraQualityAndRetention
Update quality and retention settings for the given camera


```js
meraki.updateDeviceCameraQualityAndRetention({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceCameraQualityAndRetention `object`
    * audioRecordingEnabled `boolean`: Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera
    * motionBasedRetentionEnabled `boolean`: Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera
    * motionDetectorVersion `integer` (values: 1, 2): The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
    * profileId `string`: The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.
    * quality `string` (values: Standard, High, Enhanced): Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.
    * resolution `string` (values: 1280x720, 1920x1080, 1080x1080, 2058x2058): Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model.
    * restrictedBandwidthModeEnabled `boolean`: Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera

#### Output
* output `object`

### getDeviceCameraSense
Returns sense settings for a given camera


```js
meraki.getDeviceCameraSense({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceCameraSense
Update sense settings for the given camera


```js
meraki.updateDeviceCameraSense({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceCameraSense `object`
    * detectionModelId `string`: The ID of the object detection model
    * mqttBrokerId `string`: The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera
    * senseEnabled `boolean`: Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera

#### Output
* output `object`

### getDeviceCameraSenseObjectDetectionModels
Returns the MV Sense object detection model list for the given camera


```js
meraki.getDeviceCameraSenseObjectDetectionModels({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceCameraVideoSettings
Returns video settings for the given camera


```js
meraki.getDeviceCameraVideoSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceCameraVideoSettings
Update video settings for the given camera


```js
meraki.updateDeviceCameraVideoSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceCameraVideoSettings `object`
    * externalRtspEnabled `boolean`: Boolean indicating if external rtsp stream is exposed

#### Output
* output `object`

### getDeviceCameraVideoLink
Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.


```js
meraki.getDeviceCameraVideoLink({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * timestamp `string`: [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time.

#### Output
* output `object`

### getDeviceCellularGatewayLan
Show the LAN Settings of a MG


```js
meraki.getDeviceCellularGatewayLan({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceCellularGatewayLan
Update the LAN Settings for a single MG.


```js
meraki.updateDeviceCellularGatewayLan({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceCellularGatewayLan `object`
    * fixedIpAssignments `array`: list of all fixed IP assignments for a single MG
      * items `object`
        * ip **required** `string`: The IP address you want to assign to a specific server or device
        * mac **required** `string`: The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address
        * name `string`: A descriptive name of the assignment
    * reservedIpRanges `array`: list of all reserved IP ranges for a single MG
      * items `object`
        * comment **required** `string`: Comment explaining the reserved IP range
        * end **required** `string`: Ending IP included in the reserved range of IPs
        * start **required** `string`: Starting IP included in the reserved range of IPs

#### Output
* output `object`

### getDeviceCellularGatewayPortForwardingRules
Returns the port forwarding rules for a single MG.


```js
meraki.getDeviceCellularGatewayPortForwardingRules({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceCellularGatewayPortForwardingRules
Updates the port forwarding rules for a single MG.


```js
meraki.updateDeviceCellularGatewayPortForwardingRules({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceCellularGatewayPortForwardingRules `object`
    * rules `array`: An array of port forwarding params
      * items `object`
        * access **required** `string`: `any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.
        * allowedIps `array`: An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.
          * items `string`
        * lanIp **required** `string`: The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
        * localPort **required** `string`: A port or port ranges that will receive the forwarded traffic from the WAN
        * name `string`: A descriptive name for the rule
        * protocol **required** `string`: TCP or UDP
        * publicPort **required** `string`: A port or port ranges that will be forwarded to the host on the LAN

#### Output
* output `object`

### getDeviceClients
List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.


```js
meraki.getDeviceClients({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.

#### Output
* output `object`

### getDeviceLldpCdp
List LLDP and CDP information for a device


```js
meraki.getDeviceLldpCdp({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceLossAndLatencyHistory
Get the uplink loss percentage and latency in milliseconds for a wired network device.


```js
meraki.getDeviceLossAndLatencyHistory({
  "serial": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.
  * uplink `string` (values: wan1, wan2, cellular): The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.
  * ip **required** `string`: The destination IP used to obtain the requested stats. This is required.

#### Output
* output `object`

### getDeviceManagementInterface
Return the management interface settings for a device


```js
meraki.getDeviceManagementInterface({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceManagementInterface
Update the management interface settings for a device


```js
meraki.updateDeviceManagementInterface({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceManagementInterface `object`
    * wan1 `object`: WAN 1 settings
      * staticDns `array`: Up to two DNS IPs.
        * items `string`
      * staticGatewayIp `string`: The IP of the gateway on the WAN.
      * staticIp `string`: The IP the device should use on the WAN.
      * staticSubnetMask `string`: The subnet mask for the WAN.
      * usingStaticIp `boolean`: Configue the interface to have static IP settings or use DHCP.
      * vlan `integer`: The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
      * wanEnabled `string` (values: enabled, disabled, not configured): Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
    * wan2 `object`: WAN 2 settings (only for MX devices)
      * staticDns `array`: Up to two DNS IPs.
        * items `string`
      * staticGatewayIp `string`: The IP of the gateway on the WAN.
      * staticIp `string`: The IP the device should use on the WAN.
      * staticSubnetMask `string`: The subnet mask for the WAN.
      * usingStaticIp `boolean`: Configue the interface to have static IP settings or use DHCP.
      * vlan `integer`: The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
      * wanEnabled `string` (values: enabled, disabled, not configured): Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.

#### Output
* output `object`

### rebootDevice
Reboot a device


```js
meraki.rebootDevice({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getDeviceSwitchPorts
List the switch ports for a switch


```js
meraki.getDeviceSwitchPorts({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### cycleDeviceSwitchPorts
Cycle a set of switch ports


```js
meraki.cycleDeviceSwitchPorts({
  "serial": "",
  "cycleDeviceSwitchPorts": {
    "ports": []
  }
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * cycleDeviceSwitchPorts **required** `object`
    * ports **required** `array`: List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]
      * items `string`

#### Output
* output `object`

### getDeviceSwitchPortsStatuses
Return the status for all the ports of a switch


```js
meraki.getDeviceSwitchPortsStatuses({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.

#### Output
* output `object`

### getDeviceSwitchPortsStatusesPackets
Return the packet counters for all the ports of a switch


```js
meraki.getDeviceSwitchPortsStatusesPackets({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.

#### Output
* output `object`

### getDeviceSwitchPort
Return a switch port


```js
meraki.getDeviceSwitchPort({
  "serial": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * portId **required** `string`

#### Output
* output `object`

### updateDeviceSwitchPort
Update a switch port


```js
meraki.updateDeviceSwitchPort({
  "serial": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * portId **required** `string`
  * updateDeviceSwitchPort `object`
    * accessPolicyNumber `integer`: The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'
    * accessPolicyType `string` (values: Open, Custom access policy, MAC allow list, Sticky MAC allow list): The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'
    * allowedVlans `string`: The VLANs allowed on the switch port. Only applicable to trunk ports.
    * enabled `boolean`: The status of the switch port
    * flexibleStackingEnabled `boolean`: For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
    * isolationEnabled `boolean`: The isolation status of the switch port
    * linkNegotiation `string`: The link speed for the switch port
    * macAllowList `array`: Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'
      * items `string`
    * name `string`: The name of the switch port
    * poeEnabled `boolean`: The PoE status of the switch port
    * portScheduleId `string`: The ID of the port schedule. A value of null will clear the port schedule.
    * rstpEnabled `boolean`: The rapid spanning tree protocol status
    * stickyMacAllowList `array`: The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
      * items `string`
    * stickyMacAllowListLimit `integer`: The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
    * stormControlEnabled `boolean`: The storm control status of the switch port
    * stpGuard `string` (values: disabled, root guard, bpdu guard, loop guard): The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')
    * tags `array`: The list of tags of the switch port
      * items `string`
    * type `string` (values: trunk, access): The type of the switch port ('trunk' or 'access')
    * udld `string` (values: Alert only, Enforce): The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
    * vlan `integer`: The VLAN of the switch port. A null value will clear the value set for trunk ports.
    * voiceVlan `integer`: The voice VLAN of the switch port. Only applicable to access ports.

#### Output
* output `object`

### getDeviceSwitchRoutingInterfaces
List layer 3 interfaces for a switch


```js
meraki.getDeviceSwitchRoutingInterfaces({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### createDeviceSwitchRoutingInterface
Create a layer 3 interface for a switch


```js
meraki.createDeviceSwitchRoutingInterface({
  "serial": "",
  "createDeviceSwitchRoutingInterface": {
    "name": "",
    "interfaceIp": "",
    "vlanId": 0
  }
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * createDeviceSwitchRoutingInterface **required** `object`
    * defaultGateway `string`: The next hop for any traffic that isn't going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface.
    * interfaceIp **required** `string`: The IP address this switch will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
    * multicastRouting `string` (values: disabled, enabled, IGMP snooping querier): Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'.
    * name **required** `string`: A friendly name or description for the interface or VLAN.
    * ospfSettings `object`: The OSPF routing settings of the interface.
      * area `string`: The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area. Defaults to 'disabled'.
      * cost `integer`: The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
      * isPassiveEnabled `boolean`: When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
    * subnet `string`: The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
    * vlanId **required** `integer`: The VLAN this routed interface is on. VLAN must be between 1 and 4094.

#### Output
* output `object`

### deleteDeviceSwitchRoutingInterface
Delete a layer 3 interface from the switch


```js
meraki.deleteDeviceSwitchRoutingInterface({
  "serial": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * interfaceId **required** `string`

#### Output
*Output schema unknown*

### getDeviceSwitchRoutingInterface
Return a layer 3 interface for a switch


```js
meraki.getDeviceSwitchRoutingInterface({
  "serial": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * interfaceId **required** `string`

#### Output
* output `object`

### updateDeviceSwitchRoutingInterface
Update a layer 3 interface for a switch


```js
meraki.updateDeviceSwitchRoutingInterface({
  "serial": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * interfaceId **required** `string`
  * updateDeviceSwitchRoutingInterface `object`
    * interfaceIp `string`: The IP address this switch will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
    * multicastRouting `string` (values: disabled, enabled, IGMP snooping querier): Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
    * name `string`: A friendly name or description for the interface or VLAN.
    * ospfSettings `object`: The OSPF routing settings of the interface.
      * area `string`: The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area.
      * cost `integer`: The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
      * isPassiveEnabled `boolean`: When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
    * subnet `string`: The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
    * vlanId `integer`: The VLAN this routed interface is on. VLAN must be between 1 and 4094.

#### Output
* output `object`

### getDeviceSwitchRoutingInterfaceDhcp
Return a layer 3 interface DHCP configuration for a switch


```js
meraki.getDeviceSwitchRoutingInterfaceDhcp({
  "serial": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * interfaceId **required** `string`

#### Output
* output `object`

### updateDeviceSwitchRoutingInterfaceDhcp
Update a layer 3 interface DHCP configuration for a switch


```js
meraki.updateDeviceSwitchRoutingInterfaceDhcp({
  "serial": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * interfaceId **required** `string`
  * updateDeviceSwitchRoutingInterfaceDhcp `object`
    * bootFileName `string`: The PXE boot server filename for the DHCP server running on the switch interface
    * bootNextServer `string`: The PXE boot server IP for the DHCP server running on the switch interface
    * bootOptionsEnabled `boolean`: Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch interface
    * dhcpLeaseTime `string` (values: 30 minutes, 1 hour, 4 hours, 12 hours, 1 day, 1 week): The DHCP lease time config for the dhcp server running on switch interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
    * dhcpMode `string` (values: dhcpDisabled, dhcpRelay, dhcpServer): The DHCP mode options for the switch interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
    * dhcpOptions `array`: Array of DHCP options consisting of code, type and value for the DHCP server running on the switch interface
      * items `object`
        * code **required** `string`: The code for DHCP option which should be from 2 to 254
        * type **required** `string` (values: text, ip, integer, hex): The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
        * value **required** `string`: The value of the DHCP option
    * dhcpRelayServerIps `array`: The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface
      * items `string`
    * dnsCustomNameservers `array`: The DHCP name server IPs when DHCP name server option is 'custom'
      * items `string`
    * dnsNameserversOption `string` (values: googlePublicDns, openDns, custom): The DHCP name server option for the dhcp server running on the switch interface ('googlePublicDns', 'openDns' or 'custom')
    * fixedIpAssignments `array`: Array of DHCP fixed IP assignments for the DHCP server running on the switch interface
      * items `object`
        * ip **required** `string`: The IP address of the client which has fixed IP address assigned to it
        * mac **required** `string`: The MAC address of the client which has fixed IP address
        * name **required** `string`: The name of the client which has fixed IP address
    * reservedIpRanges `array`: Array of DHCP reserved IP assignments for the DHCP server running on the switch interface
      * items `object`
        * comment `string`: The comment for the reserved IP range
        * end **required** `string`: The ending IP address of the reserved IP range
        * start **required** `string`: The starting IP address of the reserved IP range

#### Output
* output `object`

### getDeviceSwitchRoutingStaticRoutes
List layer 3 static routes for a switch


```js
meraki.getDeviceSwitchRoutingStaticRoutes({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### createDeviceSwitchRoutingStaticRoute
Create a layer 3 static route for a switch


```js
meraki.createDeviceSwitchRoutingStaticRoute({
  "serial": "",
  "createDeviceSwitchRoutingStaticRoute": {
    "subnet": "",
    "nextHopIp": ""
  }
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * createDeviceSwitchRoutingStaticRoute **required** `object`
    * advertiseViaOspfEnabled `boolean`: Option to advertise static route via OSPF
    * name `string`: Name or description for layer 3 static route
    * nextHopIp **required** `string`: IP address of the next hop device to which the device sends its traffic for the subnet
    * preferOverOspfRoutesEnabled `boolean`: Option to prefer static route over OSPF routes
    * subnet **required** `string`: The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)

#### Output
* output `object`

### deleteDeviceSwitchRoutingStaticRoute
Delete a layer 3 static route for a switch


```js
meraki.deleteDeviceSwitchRoutingStaticRoute({
  "serial": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * staticRouteId **required** `string`

#### Output
*Output schema unknown*

### getDeviceSwitchRoutingStaticRoute
Return a layer 3 static route for a switch


```js
meraki.getDeviceSwitchRoutingStaticRoute({
  "serial": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * staticRouteId **required** `string`

#### Output
* output `object`

### updateDeviceSwitchRoutingStaticRoute
Update a layer 3 static route for a switch


```js
meraki.updateDeviceSwitchRoutingStaticRoute({
  "serial": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * staticRouteId **required** `string`
  * updateDeviceSwitchRoutingStaticRoute `object`
    * advertiseViaOspfEnabled `boolean`: Option to advertise static route via OSPF
    * name `string`: Name or description for layer 3 static route
    * nextHopIp `string`: IP address of the next hop device to which the device sends its traffic for the subnet
    * preferOverOspfRoutesEnabled `boolean`: Option to prefer static route over OSPF routes
    * subnet `string`: The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)

#### Output
* output `object`

### getDeviceSwitchWarmSpare
Return warm spare configuration for a switch


```js
meraki.getDeviceSwitchWarmSpare({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceSwitchWarmSpare
Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.


```js
meraki.updateDeviceSwitchWarmSpare({
  "serial": "",
  "updateDeviceSwitchWarmSpare": {
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceSwitchWarmSpare **required** `object`
    * enabled **required** `boolean`: Enable or disable warm spare for a switch
    * spareSerial `string`: Serial number of the warm spare switch

#### Output
* output `object`

### getDeviceWirelessBluetoothSettings
Return the bluetooth settings for a wireless device


```js
meraki.getDeviceWirelessBluetoothSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceWirelessBluetoothSettings
Update the bluetooth settings for a wireless device


```js
meraki.updateDeviceWirelessBluetoothSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceWirelessBluetoothSettings `object`
    * major `integer`: Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
    * minor `integer`: Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
    * uuid `string`: Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.

#### Output
* output `object`

### getDeviceWirelessConnectionStats
Aggregated connectivity info for a given AP on this network


```js
meraki.getDeviceWirelessConnectionStats({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag

#### Output
* output `object`

### getDeviceWirelessLatencyStats
Aggregated latency info for a given AP on this network


```js
meraki.getDeviceWirelessLatencyStats({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * fields `string`: Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.

#### Output
* output `object`

### getDeviceWirelessRadioSettings
Return the radio settings of a device


```js
meraki.getDeviceWirelessRadioSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### updateDeviceWirelessRadioSettings
Update the radio settings of a device


```js
meraki.updateDeviceWirelessRadioSettings({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`
  * updateDeviceWirelessRadioSettings `object`
    * fiveGhzSettings `object`: Manual radio settings for 5 GHz.
      * channel `integer` (values: 36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165, 169, 173, 177): Sets a manual channel for 5 GHz. Can be '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161', '165', '169', '173' or '177' or null for using auto channel.
      * channelWidth `integer` (values: 0, 20, 40, 80, 160): Sets a manual channel for 5 GHz. Can be '0', '20', '40', '80' or '160' or null for using auto channel width.
      * targetPower `integer`: Set a manual target power for 5 GHz. Can be between '8' or '30' or null for using auto power range.
    * rfProfileId `integer`: The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power).
    * twoFourGhzSettings `object`: Manual radio settings for 2.4 GHz.
      * channel `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14): Sets a manual channel for 2.4 GHz. Can be '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' or '14' or null for using auto channel.
      * targetPower `integer`: Set a manual target power for 2.4 GHz. Can be between '5' or '30' or null for using auto power range.

#### Output
* output `object`

### getDeviceWirelessStatus
Return the SSID statuses of an access point


```js
meraki.getDeviceWirelessStatus({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `object`

### getNetworkClientsApplicationUsage
Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientsApplicationUsage({
  "networkID": "",
  "clients": ""
}, context)
```

#### Input
* input `object`
  * networkID **required** `string`
  * clients **required** `string`: A list of client keys, MACs or IPs separated by comma.
  * ssidNumber `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14): An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.

#### Output
* output `object`

### getNetworkClientsUsageHistories
Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientsUsageHistories({
  "networkID": "",
  "clients": ""
}, context)
```

#### Input
* input `object`
  * networkID **required** `string`
  * clients **required** `string`: A list of client keys, MACs or IPs separated by comma.
  * ssidNumber `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14): An SSID number to include. If not specified, events for all SSIDs will be returned.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.

#### Output
* output `object`

### deleteNetwork
Delete a network


```js
meraki.deleteNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
*Output schema unknown*

### getNetwork
Return a network


```js
meraki.getNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetwork
Update a network


```js
meraki.updateNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetwork `object`
    * enrollmentString `string`: A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.
    * name `string`: The name of the network
    * tags `array`: A list of tags to be applied to the network
      * items `string`
    * timeZone `string`: The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>

#### Output
* output `object`

### getNetworkAlertsSettings
Return the alert configuration for this network


```js
meraki.getNetworkAlertsSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkAlertsSettings
Update the alert configuration for this network


```js
meraki.updateNetworkAlertsSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkAlertsSettings `object`
    * alerts `array`: Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.
      * items `object`
        * alertDestinations `object`: A hash of destinations for this specific alert
          * allAdmins `boolean`: If true, then all network admins will receive emails for this alert
          * emails `array`: A list of emails that will receive information about the alert
          * httpServerIds `array`: A list of HTTP server IDs to send a Webhook to for this alert
          * snmp `boolean`: If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network
        * enabled `boolean`: A boolean depicting if the alert is turned on or off
        * filters `object`: A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.
        * type **required** `string`: The type of alert
    * defaultDestinations `object`: The network-wide destinations for all alerts on the network.
      * allAdmins `boolean`: If true, then all network admins will receive emails.
      * emails `array`: A list of emails that will recieve the alert(s).
        * items `string`
      * httpServerIds `array`: A list of HTTP server IDs to send a Webhook to
        * items `string`
      * snmp `boolean`: If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.

#### Output
* output `object`

### getNetworkApplianceClientSecurityEvents
List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkApplianceClientSecurityEvents({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * sortOrder `string` (values: ascending, descending): Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.

#### Output
* output `object`

### getNetworkApplianceConnectivityMonitoringDestinations
Return the connectivity testing destinations for an MX network


```js
meraki.getNetworkApplianceConnectivityMonitoringDestinations({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceConnectivityMonitoringDestinations
Update the connectivity testing destinations for an MX network


```js
meraki.updateNetworkApplianceConnectivityMonitoringDestinations({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceConnectivityMonitoringDestinations `object`
    * destinations `array`: The list of connectivity monitoring destinations
      * items `object`
        * default `boolean`: Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
        * description `string`: Description of the testing destination. Optional, defaults to null
        * ip **required** `string`: The IP address to test connectivity with

#### Output
* output `object`

### getNetworkApplianceContentFiltering
Return the content filtering settings for an MX network


```js
meraki.getNetworkApplianceContentFiltering({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceContentFiltering
Update the content filtering settings for an MX network


```js
meraki.updateNetworkApplianceContentFiltering({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceContentFiltering `object`
    * allowedUrlPatterns `array`: A list of URL patterns that are allowed
      * items `string`
    * blockedUrlCategories `array`: A list of URL categories to block
      * items `string`
    * blockedUrlPatterns `array`: A list of URL patterns that are blocked
      * items `string`
    * urlCategoryListSize `string` (values: topSites, fullList): URL category list size which is either 'topSites' or 'fullList'

#### Output
* output `object`

### getNetworkApplianceContentFilteringCategories
List all available content filtering categories for an MX network


```js
meraki.getNetworkApplianceContentFilteringCategories({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkApplianceFirewallCellularFirewallRules
Return the cellular firewall rules for an MX network


```js
meraki.getNetworkApplianceFirewallCellularFirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallCellularFirewallRules
Update the cellular firewall rules of an MX network


```js
meraki.updateNetworkApplianceFirewallCellularFirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallCellularFirewallRules `object`
    * rules `array`: An ordered array of the firewall rules (not including the default rule)
      * items `object`
        * comment `string`: Description of the rule (optional)
        * destCidr **required** `string`: Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
        * destPort `string`: Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule
        * protocol **required** `string` (values: tcp, udp, icmp, any): The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
        * srcCidr **required** `string`: Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
        * srcPort `string`: Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
        * syslogEnabled `boolean`: Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)

#### Output
* output `object`

### getNetworkApplianceFirewallFirewalledServices
List the appliance services and their accessibility rules


```js
meraki.getNetworkApplianceFirewallFirewalledServices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkApplianceFirewallFirewalledService
Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')


```js
meraki.getNetworkApplianceFirewallFirewalledService({
  "networkId": "",
  "service": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * service **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallFirewalledService
Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')


```js
meraki.updateNetworkApplianceFirewallFirewalledService({
  "networkId": "",
  "service": "",
  "updateNetworkApplianceFirewallFirewalledService": {
    "access": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * service **required** `string`
  * updateNetworkApplianceFirewallFirewalledService **required** `object`
    * access **required** `string` (values: blocked, restricted, unrestricted): A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only allowed IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required
    * allowedIps `array`: An array of allowed IPs that can access the service. This field is required if "access" is set to "restricted". Otherwise this field is ignored
      * items `string`

#### Output
* output `object`

### getNetworkApplianceFirewallInboundFirewallRules
Return the inbound firewall rules for an MX network


```js
meraki.getNetworkApplianceFirewallInboundFirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallInboundFirewallRules
Update the inbound firewall rules of an MX network


```js
meraki.updateNetworkApplianceFirewallInboundFirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallInboundFirewallRules `object`
    * rules `array`: An ordered array of the firewall rules (not including the default rule)
      * items `object`
        * comment `string`: Description of the rule (optional)
        * destCidr **required** `string`: Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
        * destPort `string`: Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule
        * protocol **required** `string` (values: tcp, udp, icmp, any): The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
        * srcCidr **required** `string`: Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
        * srcPort `string`: Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
        * syslogEnabled `boolean`: Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
    * syslogDefaultRule `boolean`: Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)

#### Output
* output `object`

### getNetworkApplianceFirewallL3FirewallRules
Return the L3 firewall rules for an MX network


```js
meraki.getNetworkApplianceFirewallL3FirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallL3FirewallRules
Update the L3 firewall rules of an MX network


```js
meraki.updateNetworkApplianceFirewallL3FirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallL3FirewallRules `object`
    * rules `array`: An ordered array of the firewall rules (not including the default rule)
      * items `object`
        * comment `string`: Description of the rule (optional)
        * destCidr **required** `string`: Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
        * destPort `string`: Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule
        * protocol **required** `string` (values: tcp, udp, icmp, any): The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
        * srcCidr **required** `string`: Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
        * srcPort `string`: Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
        * syslogEnabled `boolean`: Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
    * syslogDefaultRule `boolean`: Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)

#### Output
* output `object`

### getNetworkApplianceFirewallL7FirewallRules
List the MX L7 firewall rules for an MX network


```js
meraki.getNetworkApplianceFirewallL7FirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallL7FirewallRules
Update the MX L7 firewall rules for an MX network


```js
meraki.updateNetworkApplianceFirewallL7FirewallRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallL7FirewallRules `object`
    * rules `array`: An ordered array of the MX L7 firewall rules
      * items `object`
        * policy `string` (values: deny): 'Deny' traffic specified by this rule
        * type `string` (values: application, applicationCategory, host, port, ipRange): Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
        * value `string`: The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. See sample request. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format.

#### Output
* output `object`

### getNetworkApplianceFirewallL7FirewallRulesApplicationCategories
Return the L7 firewall application categories and their associated applications for an MX network


```js
meraki.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkApplianceFirewallOneToManyNatRules
Return the 1:Many NAT mapping rules for an MX network


```js
meraki.getNetworkApplianceFirewallOneToManyNatRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallOneToManyNatRules
Set the 1:Many NAT mapping rules for an MX network


```js
meraki.updateNetworkApplianceFirewallOneToManyNatRules({
  "networkId": "",
  "updateNetworkApplianceFirewallOneToManyNatRules": {
    "rules": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallOneToManyNatRules **required** `object`
    * rules **required** `array`: An array of 1:Many nat rules
      * items `object`
        * portRules **required** `array`: An array of associated forwarding rules
          * items `object`
        * publicIp **required** `string`: The IP address that will be used to access the internal resource from the WAN
        * uplink **required** `string` (values: internet1, internet2): The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')

#### Output
* output `object`

### getNetworkApplianceFirewallOneToOneNatRules
Return the 1:1 NAT mapping rules for an MX network


```js
meraki.getNetworkApplianceFirewallOneToOneNatRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallOneToOneNatRules
Set the 1:1 NAT mapping rules for an MX network


```js
meraki.updateNetworkApplianceFirewallOneToOneNatRules({
  "networkId": "",
  "updateNetworkApplianceFirewallOneToOneNatRules": {
    "rules": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallOneToOneNatRules **required** `object`
    * rules **required** `array`: An array of 1:1 nat rules
      * items `object`
        * allowedInbound `array`: The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource
          * items `object`
        * lanIp **required** `string`: The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
        * name `string`: A descriptive name for the rule
        * publicIp `string`: The IP address that will be used to access the internal resource from the WAN
        * uplink `string` (values: internet1, internet2): The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')

#### Output
* output `object`

### getNetworkApplianceFirewallPortForwardingRules
Return the port forwarding rules for an MX network


```js
meraki.getNetworkApplianceFirewallPortForwardingRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceFirewallPortForwardingRules
Update the port forwarding rules for an MX network


```js
meraki.updateNetworkApplianceFirewallPortForwardingRules({
  "networkId": "",
  "updateNetworkApplianceFirewallPortForwardingRules": {
    "rules": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceFirewallPortForwardingRules **required** `object`
    * rules **required** `array`: An array of port forwarding params
      * items `object`
        * allowedIps **required** `array`: An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any)
          * items `string`
        * lanIp **required** `string`: The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
        * localPort **required** `string`: A port or port ranges that will receive the forwarded traffic from the WAN
        * name `string`: A descriptive name for the rule
        * protocol **required** `string` (values: tcp, udp): TCP or UDP
        * publicPort **required** `string`: A port or port ranges that will be forwarded to the host on the LAN
        * uplink `string` (values: internet1, internet2, both): The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both')

#### Output
* output `object`

### getNetworkAppliancePorts
List per-port VLAN settings for all ports of a MX.


```js
meraki.getNetworkAppliancePorts({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkAppliancePort
Return per-port VLAN settings for a single MX port.


```js
meraki.getNetworkAppliancePort({
  "networkId": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * portId **required** `string`

#### Output
* output `object`

### updateNetworkAppliancePort
Update the per-port VLAN settings for a single MX port.


```js
meraki.updateNetworkAppliancePort({
  "networkId": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * portId **required** `string`
  * updateNetworkAppliancePort `object`
    * accessPolicy `string`: The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing.
    * allowedVlans `string`: Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.
    * dropUntaggedTraffic `boolean`: Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.
    * enabled `boolean`: The status of the port
    * type `string`: The type of the port: 'access' or 'trunk'.
    * vlan `integer`: Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.

#### Output
* output `object`

### getNetworkApplianceSecurityEvents
List the security events for a network


```js
meraki.getNetworkApplianceSecurityEvents({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * sortOrder `string` (values: ascending, descending): Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.

#### Output
* output `object`

### getNetworkApplianceSecurityIntrusion
Returns all supported intrusion settings for an MX network


```js
meraki.getNetworkApplianceSecurityIntrusion({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceSecurityIntrusion
Set the supported intrusion settings for an MX network


```js
meraki.updateNetworkApplianceSecurityIntrusion({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceSecurityIntrusion `object`
    * idsRulesets `string` (values: connectivity, balanced, security): Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved
    * mode `string` (values: prevention, detection, disabled): Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)
    * protectedNetworks `object`: Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
      * excludedCidr `array`: list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)
        * items `string`
      * includedCidr `array`: list of IP addresses or subnets being protected (required if 'useDefault' is false)
        * items `string`
      * useDefault `boolean`: true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved

#### Output
* output `object`

### getNetworkApplianceSecurityMalware
Returns all supported malware settings for an MX network


```js
meraki.getNetworkApplianceSecurityMalware({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceSecurityMalware
Set the supported malware settings for an MX network


```js
meraki.updateNetworkApplianceSecurityMalware({
  "networkId": "",
  "updateNetworkApplianceSecurityMalware": {
    "mode": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceSecurityMalware **required** `object`
    * allowedFiles `array`: The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing
      * items `object`
        * comment **required** `string`: Comment about the allowed entity
        * sha256 **required** `string`: The file sha256 hash to allow
    * allowedUrls `array`: The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing
      * items `object`
        * comment **required** `string`: Comment about the allowed entity
        * url **required** `string`: The url to allow
    * mode **required** `string` (values: enabled, disabled): Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'

#### Output
* output `object`

### getNetworkApplianceSettings
Return the appliance settings for a network


```js
meraki.getNetworkApplianceSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkApplianceSingleLan
Return single LAN configuration


```js
meraki.getNetworkApplianceSingleLan({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceSingleLan
Update single LAN configuration


```js
meraki.updateNetworkApplianceSingleLan({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceSingleLan `object`
    * applianceIp `string`: The appliance IP address of the single LAN
    * subnet `string`: The subnet of the single LAN configuration

#### Output
* output `object`

### getNetworkApplianceStaticRoutes
List the static routes for an MX or teleworker network


```js
meraki.getNetworkApplianceStaticRoutes({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkApplianceStaticRoute
Add a static route for an MX or teleworker network


```js
meraki.createNetworkApplianceStaticRoute({
  "networkId": "",
  "createNetworkApplianceStaticRoute": {
    "name": "",
    "subnet": "",
    "gatewayIp": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkApplianceStaticRoute **required** `object`
    * gatewayIp **required** `string`: The gateway IP (next hop) of the static route
    * name **required** `string`: The name of the new static route
    * subnet **required** `string`: The subnet of the static route

#### Output
* output `object`

### deleteNetworkApplianceStaticRoute
Delete a static route from an MX or teleworker network


```js
meraki.deleteNetworkApplianceStaticRoute({
  "networkId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * staticRouteId **required** `string`

#### Output
*Output schema unknown*

### getNetworkApplianceStaticRoute
Return a static route for an MX or teleworker network


```js
meraki.getNetworkApplianceStaticRoute({
  "networkId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * staticRouteId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceStaticRoute
Update a static route for an MX or teleworker network


```js
meraki.updateNetworkApplianceStaticRoute({
  "networkId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * staticRouteId **required** `string`
  * updateNetworkApplianceStaticRoute `object`
    * enabled `boolean`: The enabled state of the static route
    * fixedIpAssignments `object`: The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
    * gatewayIp `string`: The gateway IP (next hop) of the static route
    * name `string`: The name of the static route
    * reservedIpRanges `array`: The DHCP reserved IP ranges on the static route
      * items `object`
        * comment **required** `string`: A text comment for the reserved range
        * end **required** `string`: The last IP in the reserved range
        * start **required** `string`: The first IP in the reserved range
    * subnet `string`: The subnet of the static route

#### Output
* output `object`

### getNetworkApplianceTrafficShaping
Display the traffic shaping settings for an MX network


```js
meraki.getNetworkApplianceTrafficShaping({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceTrafficShaping
Update the traffic shaping settings for an MX network


```js
meraki.updateNetworkApplianceTrafficShaping({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceTrafficShaping `object`
    * globalBandwidthLimits `object`: Global per-client bandwidth limit
      * limitDown `integer`: The download bandwidth limit in Kbps. (0 represents no limit.)
      * limitUp `integer`: The upload bandwidth limit in Kbps. (0 represents no limit.)

#### Output
* output `object`

### getNetworkApplianceTrafficShapingCustomPerformanceClasses
List all custom performance classes for an MX network


```js
meraki.getNetworkApplianceTrafficShapingCustomPerformanceClasses({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkApplianceTrafficShapingCustomPerformanceClass
Add a custom performance class for an MX network


```js
meraki.createNetworkApplianceTrafficShapingCustomPerformanceClass({
  "networkId": "",
  "createNetworkApplianceTrafficShapingCustomPerformanceClass": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkApplianceTrafficShapingCustomPerformanceClass **required** `object`
    * maxJitter `integer`: Maximum jitter in milliseconds
    * maxLatency `integer`: Maximum latency in milliseconds
    * maxLossPercentage `integer`: Maximum percentage of packet loss
    * name **required** `string`: Name of the custom performance class

#### Output
* output `object`

### deleteNetworkApplianceTrafficShapingCustomPerformanceClass
Delete a custom performance class from an MX network


```js
meraki.deleteNetworkApplianceTrafficShapingCustomPerformanceClass({
  "networkId": "",
  "customPerformanceClassId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * customPerformanceClassId **required** `string`

#### Output
*Output schema unknown*

### getNetworkApplianceTrafficShapingCustomPerformanceClass
Return a custom performance class for an MX network


```js
meraki.getNetworkApplianceTrafficShapingCustomPerformanceClass({
  "networkId": "",
  "customPerformanceClassId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * customPerformanceClassId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceTrafficShapingCustomPerformanceClass
Update a custom performance class for an MX network


```js
meraki.updateNetworkApplianceTrafficShapingCustomPerformanceClass({
  "networkId": "",
  "customPerformanceClassId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * customPerformanceClassId **required** `string`
  * updateNetworkApplianceTrafficShapingCustomPerformanceClass `object`
    * maxJitter `integer`: Maximum jitter in milliseconds
    * maxLatency `integer`: Maximum latency in milliseconds
    * maxLossPercentage `integer`: Maximum percentage of packet loss
    * name `string`: Name of the custom performance class

#### Output
* output `object`

### getNetworkApplianceTrafficShapingRules
Display the traffic shaping settings rules for an MX network


```js
meraki.getNetworkApplianceTrafficShapingRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceTrafficShapingRules
Update the traffic shaping settings rules for an MX network


```js
meraki.updateNetworkApplianceTrafficShapingRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceTrafficShapingRules `object`
    * defaultRulesEnabled `boolean`: Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network's traffic shaping page. Note that default rules count against the rule limit of 8.
    * rules `array`:     An array of traffic shaping rules. Rules are applied in the order that
      * items `object`
        * definitions **required** `array`:     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
          * items `object`
        * dscpTagValue `integer`:     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
        * perClientBandwidthLimits `object`:     An object describing the bandwidth settings for your rule.
          * bandwidthLimits `object`: The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
          * settings `string`: How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
        * priority `string`:     A string, indicating the priority level for packets bound to your rule.

#### Output
* output `object`

### getNetworkApplianceTrafficShapingUplinkBandwidth
Returns the uplink bandwidth settings for your MX network.


```js
meraki.getNetworkApplianceTrafficShapingUplinkBandwidth({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceTrafficShapingUplinkBandwidth
Updates the uplink bandwidth settings for your MX network.


```js
meraki.updateNetworkApplianceTrafficShapingUplinkBandwidth({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceTrafficShapingUplinkBandwidth `object`
    * bandwidthLimits `object`: A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
      * cellular `object`: The bandwidth settings for the 'cellular' uplink
        * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
        * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit
      * wan1 `object`: The bandwidth settings for the 'wan1' uplink
        * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
        * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit
      * wan2 `object`: The bandwidth settings for the 'wan2' uplink
        * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
        * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit

#### Output
* output `object`

### getNetworkApplianceTrafficShapingUplinkSelection
Show uplink selection settings for an MX network


```js
meraki.getNetworkApplianceTrafficShapingUplinkSelection({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceTrafficShapingUplinkSelection
Update uplink selection settings for an MX network


```js
meraki.updateNetworkApplianceTrafficShapingUplinkSelection({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceTrafficShapingUplinkSelection `object`
    * activeActiveAutoVpnEnabled `boolean`: Toggle for enabling or disabling active-active AutoVPN
    * defaultUplink `string` (values: wan1, wan2): The default uplink. Must be one of: 'wan1' or 'wan2'
    * loadBalancingEnabled `boolean`: Toggle for enabling or disabling load balancing
    * vpnTrafficUplinkPreferences `array`: Array of uplink preference rules for VPN traffic
      * items `object`
        * failOverCriterion `string` (values: poorPerformance, uplinkDown): Fail over criterion for this uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
        * performanceClass `object`: Performance class setting for this uplink preference rule
          * builtinPerformanceClassName `string` (values: VoIP): Name of builtin performance class, must be present when performanceClass type is 'builtin', and value must be one of: 'VoIP'
          * customPerformanceClassId `string`: ID of created custom performance class, must be present when performanceClass type is 'custom'
          * type **required** `string` (values: builtin, custom): Type of this performance class. Must be one of: 'builtin' or 'custom'
        * preferredUplink **required** `string` (values: wan1, wan2, bestForVoIP, loadBalancing, defaultUplink): Preferred uplink for this uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
        * trafficFilters **required** `array`: Array of traffic filters for this uplink preference rule
          * items `object`
    * wanTrafficUplinkPreferences `array`: Array of uplink preference rules for WAN traffic
      * items `object`
        * preferredUplink **required** `string` (values: wan1, wan2): Preferred uplink for this uplink preference rule. Must be one of: 'wan1' or 'wan2'
        * trafficFilters **required** `array`: Array of traffic filters for this uplink preference rule
          * items `object`

#### Output
* output `object`

### getNetworkApplianceVlans
List the VLANs for an MX network


```js
meraki.getNetworkApplianceVlans({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkApplianceVlan
Add a VLAN


```js
meraki.createNetworkApplianceVlan({
  "networkId": "",
  "createNetworkApplianceVlan": {
    "id": "",
    "name": "",
    "subnet": "",
    "applianceIp": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkApplianceVlan **required** `object`
    * applianceIp **required** `string`: The local IP of the appliance on the VLAN
    * groupPolicyId `string`: The id of the desired group policy to apply to the VLAN
    * id **required** `string`: The VLAN ID of the new VLAN (must be between 1 and 4094)
    * name **required** `string`: The name of the new VLAN
    * subnet **required** `string`: The subnet of the VLAN

#### Output
* output `object`

### getNetworkApplianceVlansSettings
Returns the enabled status of VLANs for the network


```js
meraki.getNetworkApplianceVlansSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceVlansSettings
Enable/Disable VLANs for the given network


```js
meraki.updateNetworkApplianceVlansSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceVlansSettings `object`
    * vlansEnabled `boolean`: Boolean indicating whether to enable (true) or disable (false) VLANs for the network

#### Output
* output `object`

### deleteNetworkApplianceVlan
Delete a VLAN from a network


```js
meraki.deleteNetworkApplianceVlan({
  "networkId": "",
  "vlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * vlanId **required** `string`

#### Output
*Output schema unknown*

### getNetworkApplianceVlan
Return a VLAN


```js
meraki.getNetworkApplianceVlan({
  "networkId": "",
  "vlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * vlanId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceVlan
Update a VLAN


```js
meraki.updateNetworkApplianceVlan({
  "networkId": "",
  "vlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * vlanId **required** `string`
  * updateNetworkApplianceVlan `object`
    * applianceIp `string`: The local IP of the appliance on the VLAN
    * dhcpBootFilename `string`: DHCP boot option for boot filename
    * dhcpBootNextServer `string`: DHCP boot option to direct boot clients to the server to load the boot file from
    * dhcpBootOptionsEnabled `boolean`: Use DHCP boot options specified in other properties
    * dhcpHandling `string` (values: Run a DHCP server, Relay DHCP to another server, Do not respond to DHCP requests): The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
    * dhcpLeaseTime `string` (values: 30 minutes, 1 hour, 4 hours, 12 hours, 1 day, 1 week): The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
    * dhcpOptions `array`: The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.
      * items `object`
        * code **required** `string`: The code for the DHCP option. This should be an integer between 2 and 254.
        * type **required** `string` (values: text, ip, hex, integer): The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
        * value **required** `string`: The value for the DHCP option
    * dhcpRelayServerIps `array`: The IPs of the DHCP servers that DHCP requests should be relayed to
      * items `string`
    * dnsNameservers `string`: The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names
    * fixedIpAssignments `object`: The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
    * groupPolicyId `string`: The id of the desired group policy to apply to the VLAN
    * name `string`: The name of the VLAN
    * reservedIpRanges `array`: The DHCP reserved IP ranges on the VLAN
      * items `object`
        * comment **required** `string`: A text comment for the reserved range
        * end **required** `string`: The last IP in the reserved range
        * start **required** `string`: The first IP in the reserved range
    * subnet `string`: The subnet of the VLAN
    * vpnNatSubnet `string`: The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN

#### Output
* output `object`

### getNetworkApplianceVpnBgp
Return a Hub BGP Configuration


```js
meraki.getNetworkApplianceVpnBgp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceVpnBgp
Update a Hub BGP Configuration


```js
meraki.updateNetworkApplianceVpnBgp({
  "networkId": "",
  "updateNetworkApplianceVpnBgp": {
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceVpnBgp **required** `object`
    * asNumber `integer`: An Autonomous System Number (ASN) is required if you are to run BGP and peer with another BGP Speaker outside of the Auto VPN domain. This ASN will be applied to the entire Auto VPN domain. The entire 4-byte ASN range is supported. So, the ASN must be an integer between 1 and 4294967295. When absent, this field is not updated. If no value exists then it defaults to 64512.
    * enabled **required** `boolean`: Boolean value to enable or disable the BGP configuration. When BGP is enabled, the asNumber (ASN) will be autopopulated with the preconfigured ASN at other Hubs or a default value if there is no ASN configured.
    * ibgpHoldTimer `integer`: The IBGP holdtimer in seconds. The IBGP holdtimer must be an integer between 12 and 240. When absent, this field is not updated. If no value exists then it defaults to 240.
    * neighbors `array`: List of BGP neighbors. This list replaces the existing set of neighbors. When absent, this field is not updated.
      * items `object`
        * allowTransit `boolean`: When this feature is on, the Meraki device will advertise routes learned from other Autonomous Systems, thereby allowing traffic between Autonomous Systems to transit this AS. When absent, it defaults to false.
        * ebgpHoldTimer **required** `integer`: The EBGP hold timer in seconds for each neighbor. The EBGP hold timer must be an integer between 12 and 240.
        * ebgpMultihop **required** `integer`: Configure this if the neighbor is not adjacent. The EBGP multi-hop must be an integer between 1 and 255.
        * ip **required** `string`: IP address of the neighbor.
        * receiveLimit `integer`: The receive limit is the maximum number of routes that can be received from any BGP peer. The receive limit must be an integer between 0 and 4294967295. When absent, it defaults to 0.
        * remoteAsNumber **required** `integer`: Remote ASN of the neighbor. The remote ASN must be an integer between 1 and 4294967295.

#### Output
* output `object`

### getNetworkApplianceVpnSiteToSiteVpn
Return the site-to-site VPN settings of a network. Only valid for MX networks.


```js
meraki.getNetworkApplianceVpnSiteToSiteVpn({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceVpnSiteToSiteVpn
Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.


```js
meraki.updateNetworkApplianceVpnSiteToSiteVpn({
  "networkId": "",
  "updateNetworkApplianceVpnSiteToSiteVpn": {
    "mode": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceVpnSiteToSiteVpn **required** `object`
    * hubs `array`: The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.
      * items `object`
        * hubId **required** `string`: The network ID of the hub.
        * useDefaultRoute `boolean`: Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub.
    * mode **required** `string` (values: none, spoke, hub): The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
    * subnets `array`: The list of subnets and their VPN presence.
      * items `object`
        * localSubnet **required** `string`: The CIDR notation subnet used within the VPN
        * useVpn `boolean`: Indicates the presence of the subnet in the VPN

#### Output
* output `object`

### getNetworkApplianceWarmSpare
Return MX warm spare settings


```js
meraki.getNetworkApplianceWarmSpare({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkApplianceWarmSpare
Update MX warm spare settings


```js
meraki.updateNetworkApplianceWarmSpare({
  "networkId": "",
  "updateNetworkApplianceWarmSpare": {
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkApplianceWarmSpare **required** `object`
    * enabled **required** `boolean`: Enable warm spare
    * spareSerial `string`: Serial number of the warm spare appliance
    * uplinkMode `string`: Uplink mode, either virtual or public
    * virtualIp1 `string`: The WAN 1 shared IP
    * virtualIp2 `string`: The WAN 2 shared IP

#### Output
* output `object`

### swapNetworkApplianceWarmSpare
Swap MX primary and warm spare appliances


```js
meraki.swapNetworkApplianceWarmSpare({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### bindNetwork
Bind a network to a template.


```js
meraki.bindNetwork({
  "networkId": "",
  "bindNetwork": {
    "configTemplateId": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * bindNetwork **required** `object`
    * autoBind `boolean`: Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model.
    * configTemplateId **required** `string`: The ID of the template to which the network should be bound.

#### Output
* output `object`

### getNetworkBluetoothClients
List the Bluetooth clients seen by APs in this network


```js
meraki.getNetworkBluetoothClients({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * includeConnectivityHistory `boolean`: Include the connectivity history for this client

#### Output
* output `object`

### getNetworkBluetoothClient
Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.


```js
meraki.getNetworkBluetoothClient({
  "networkId": "",
  "bluetoothClientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * bluetoothClientId **required** `string`
  * includeConnectivityHistory `boolean`: Include the connectivity history for this client
  * connectivityHistoryTimespan `integer`: The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.

#### Output
* output `object`

### getNetworkCameraQualityRetentionProfiles
List the quality retention profiles for this network


```js
meraki.getNetworkCameraQualityRetentionProfiles({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkCameraQualityRetentionProfile
Creates new quality retention profile for this network.


```js
meraki.createNetworkCameraQualityRetentionProfile({
  "networkId": "",
  "createNetworkCameraQualityRetentionProfile": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkCameraQualityRetentionProfile **required** `object`
    * audioRecordingEnabled `boolean`: Whether or not to record audio. Can be either true or false. Defaults to false.
    * cloudArchiveEnabled `boolean`: Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.
    * maxRetentionDays `integer`: The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days
    * motionBasedRetentionEnabled `boolean`: Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false.
    * motionDetectorVersion `integer`: The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
    * name **required** `string`: The name of the new profile. Must be unique. This parameter is required.
    * restrictedBandwidthModeEnabled `boolean`: Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false.
    * scheduleId `string`: Schedule for which this camera will record video, or 'null' to always record.
    * videoSettings `object`: Video quality and resolution settings for all the camera models.
      * MV12/MV22/MV72 `object`: Quality and resolution for MV12/MV22/MV72 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080): Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
      * MV12WE `object`: Quality and resolution for MV12WE camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080): Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
      * MV21/MV71 `object`: Quality and resolution for MV21/MV71 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720): Resolution of the camera. Can be one of '1280x720'.
      * MV22X/MV72X `object`: Quality and resolution for MV22X/MV72X camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080, 2688x1512): Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
      * MV32 `object`: Quality and resolution for MV32 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1080x1080, 2058x2058): Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.

#### Output
* output `object`

### deleteNetworkCameraQualityRetentionProfile
Delete an existing quality retention profile for this network.


```js
meraki.deleteNetworkCameraQualityRetentionProfile({
  "networkId": "",
  "qualityRetentionProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qualityRetentionProfileId **required** `string`

#### Output
*Output schema unknown*

### getNetworkCameraQualityRetentionProfile
Retrieve a single quality retention profile


```js
meraki.getNetworkCameraQualityRetentionProfile({
  "networkId": "",
  "qualityRetentionProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qualityRetentionProfileId **required** `string`

#### Output
* output `object`

### updateNetworkCameraQualityRetentionProfile
Update an existing quality retention profile for this network.


```js
meraki.updateNetworkCameraQualityRetentionProfile({
  "networkId": "",
  "qualityRetentionProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qualityRetentionProfileId **required** `string`
  * updateNetworkCameraQualityRetentionProfile `object`
    * audioRecordingEnabled `boolean`: Whether or not to record audio. Can be either true or false. Defaults to false.
    * cloudArchiveEnabled `boolean`: Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.
    * maxRetentionDays `integer`: The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days
    * motionBasedRetentionEnabled `boolean`: Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false.
    * motionDetectorVersion `integer`: The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
    * name `string`: The name of the new profile. Must be unique.
    * restrictedBandwidthModeEnabled `boolean`: Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false.
    * scheduleId `string`: Schedule for which this camera will record video, or 'null' to always record.
    * videoSettings `object`: Video quality and resolution settings for all the camera models.
      * MV12/MV22/MV72 `object`: Quality and resolution for MV12/MV22/MV72 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080): Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
      * MV12WE `object`: Quality and resolution for MV12WE camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080): Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
      * MV21/MV71 `object`: Quality and resolution for MV21/MV71 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720): Resolution of the camera. Can be one of '1280x720'.
      * MV22X/MV72X `object`: Quality and resolution for MV22X/MV72X camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1280x720, 1920x1080, 2688x1512): Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
      * MV32 `object`: Quality and resolution for MV32 camera models.
        * quality **required** `string` (values: Standard, Enhanced, High): Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
        * resolution **required** `string` (values: 1080x1080, 2058x2058): Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.

#### Output
* output `object`

### getNetworkCameraSchedules
Returns a list of all camera recording schedules.


```js
meraki.getNetworkCameraSchedules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkCellularGatewayConnectivityMonitoringDestinations
Return the connectivity testing destinations for an MG network


```js
meraki.getNetworkCellularGatewayConnectivityMonitoringDestinations({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkCellularGatewayConnectivityMonitoringDestinations
Update the connectivity testing destinations for an MG network


```js
meraki.updateNetworkCellularGatewayConnectivityMonitoringDestinations({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkCellularGatewayConnectivityMonitoringDestinations `object`
    * destinations `array`: The list of connectivity monitoring destinations
      * items `object`
        * default `boolean`: Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
        * description `string`: Description of the testing destination. Optional, defaults to null
        * ip **required** `string`: The IP address to test connectivity with

#### Output
* output `object`

### getNetworkCellularGatewayDhcp
List common DHCP settings of MGs


```js
meraki.getNetworkCellularGatewayDhcp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkCellularGatewayDhcp
Update common DHCP settings of MGs


```js
meraki.updateNetworkCellularGatewayDhcp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkCellularGatewayDhcp `object`
    * dhcpLeaseTime `string`: DHCP Lease time for all MG of the network. It can be '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'.
    * dnsCustomNameservers `array`: list of fixed IP representing the the DNS Name servers when the mode is 'custom'
      * items `string`
    * dnsNameservers `string`: DNS name servers mode for all MG of the network. It can take 4 different values: 'upstream_dns', 'google_dns', 'opendns', 'custom'.

#### Output
* output `object`

### getNetworkCellularGatewaySubnetPool
Return the subnet pool and mask configured for MGs in the network.


```js
meraki.getNetworkCellularGatewaySubnetPool({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkCellularGatewaySubnetPool
Update the subnet pool and mask configuration for MGs in the network.


```js
meraki.updateNetworkCellularGatewaySubnetPool({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkCellularGatewaySubnetPool `object`
    * cidr `string`: CIDR of the pool of subnets. Each MG in this network will automatically pick a subnet from this pool.
    * mask `integer`: Mask used for the subnet of all MGs in  this network.

#### Output
* output `object`

### getNetworkCellularGatewayUplink
Returns the uplink settings for your MG network.


```js
meraki.getNetworkCellularGatewayUplink({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkCellularGatewayUplink
Updates the uplink settings for your MG network.


```js
meraki.updateNetworkCellularGatewayUplink({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkCellularGatewayUplink `object`
    * bandwidthLimits `object`: The bandwidth settings for the 'cellular' uplink
      * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
      * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit

#### Output
* output `object`

### getNetworkClients
List the clients that have used this network in the timespan


```js
meraki.getNetworkClients({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### provisionNetworkClients
Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.


```js
meraki.provisionNetworkClients({
  "networkId": "",
  "provisionNetworkClients": {
    "clients": [],
    "devicePolicy": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * provisionNetworkClients **required** `object`
    * clients **required** `array`: The array of clients to provision
      * items `object`
        * mac **required** `string`: The MAC address of the client. Required.
        * name `string`: The display name for the client. Optional. Limited to 255 bytes.
    * devicePolicy **required** `string` (values: Group policy, Allowed, Blocked, Per connection, Normal): The policy to apply to the specified client. Can be 'Group policy', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.
    * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
    * policiesBySecurityAppliance `object`: An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
      * devicePolicy `string` (values: Allowed, Blocked, Normal): The policy to apply to the specified client. Can be 'Allowed', 'Blocked' or 'Normal'. Required.
    * policiesBySsid `object`: An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
      * 0 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 1 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 2 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 3 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 4 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 5 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 6 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 7 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 8 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 9 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 10 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 11 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 12 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 13 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
      * 14 `object`: The number for the SSID
        * devicePolicy **required** `string` (values: Allowed, Blocked, Normal, Group policy): The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
        * groupPolicyId `string`: The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.

#### Output
* output `object`

### getNetworkClient
Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClient({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`

#### Output
* output `object`

### getNetworkClientPolicy
Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientPolicy({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`

#### Output
* output `object`

### updateNetworkClientPolicy
Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.updateNetworkClientPolicy({
  "networkId": "",
  "clientId": "",
  "updateNetworkClientPolicy": {
    "devicePolicy": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * updateNetworkClientPolicy **required** `object`
    * devicePolicy **required** `string`: The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
    * groupPolicyId `string`: [optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID.

#### Output
* output `object`

### getNetworkClientSplashAuthorizationStatus
Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientSplashAuthorizationStatus({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`

#### Output
* output `object`

### updateNetworkClientSplashAuthorizationStatus
Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.updateNetworkClientSplashAuthorizationStatus({
  "networkId": "",
  "clientId": "",
  "updateNetworkClientSplashAuthorizationStatus": {
    "ssids": {}
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * updateNetworkClientSplashAuthorizationStatus **required** `object`
    * ssids **required** `object`: The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
      * 0 `object`: Splash authorization for SSID 0
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 1 `object`: Splash authorization for SSID 1
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 2 `object`: Splash authorization for SSID 2
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 3 `object`: Splash authorization for SSID 3
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 4 `object`: Splash authorization for SSID 4
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 5 `object`: Splash authorization for SSID 5
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 6 `object`: Splash authorization for SSID 6
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 7 `object`: Splash authorization for SSID 7
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 8 `object`: Splash authorization for SSID 8
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 9 `object`: Splash authorization for SSID 9
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 10 `object`: Splash authorization for SSID 10
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 11 `object`: Splash authorization for SSID 11
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 12 `object`: Splash authorization for SSID 12
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 13 `object`: Splash authorization for SSID 13
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).
      * 14 `object`: Splash authorization for SSID 14
        * isAuthorized `boolean`: New authorization status for the SSID (true, false).

#### Output
* output `object`

### getNetworkClientTrafficHistory
Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientTrafficHistory({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkClientUsageHistory
Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```js
meraki.getNetworkClientUsageHistory({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`

#### Output
* output `object`

### getNetworkDevices
List the devices in a network


```js
meraki.getNetworkDevices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### claimNetworkDevices
Claim devices into a network


```js
meraki.claimNetworkDevices({
  "networkId": "",
  "claimNetworkDevices": {
    "serials": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * claimNetworkDevices **required** `object`
    * serials **required** `array`: A list of serials of devices to claim
      * items `string`

#### Output
*Output schema unknown*

### removeNetworkDevices
Remove a single device


```js
meraki.removeNetworkDevices({
  "networkId": "",
  "removeNetworkDevices": {
    "serial": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * removeNetworkDevices **required** `object`
    * serial **required** `string`: The serial of a device

#### Output
*Output schema unknown*

### getNetworkEnvironmentalEvents
List the environmental events for the network


```js
meraki.getNetworkEnvironmentalEvents({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * includedEventTypes `array`: A list of event types. The returned events will be filtered to only include events with these types.
  * excludedEventTypes `array`: A list of event types. The returned events will be filtered to exclude events with these types.
  * sensorSerial `string`: The serial of the sensor device which the list of events will be filtered with
  * gatewaySerial `string`: The serial of the environmental gateway device which the list of events will be filtered with
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkEnvironmentalEventsEventTypes
List the event type to human-readable description


```js
meraki.getNetworkEnvironmentalEventsEventTypes({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkEvents
List the events for the network


```js
meraki.getNetworkEvents({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * productType `string`: The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental
  * includedEventTypes `array`: A list of event types. The returned events will be filtered to only include events with these types.
  * excludedEventTypes `array`: A list of event types. The returned events will be filtered to exclude events with these types.
  * deviceMac `string`: The MAC address of the Meraki device which the list of events will be filtered with
  * deviceSerial `string`: The serial of the Meraki device which the list of events will be filtered with
  * deviceName `string`: The name of the Meraki device which the list of events will be filtered with
  * clientIp `string`: The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
  * clientMac `string`: The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
  * clientName `string`: The name, or partial name, of the client which the list of events will be filtered with
  * smDeviceMac `string`: The MAC address of the Systems Manager device which the list of events will be filtered with
  * smDeviceName `string`: The name of the Systems Manager device which the list of events will be filtered with
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkEventsEventTypes
List the event type to human-readable description


```js
meraki.getNetworkEventsEventTypes({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkFirmwareUpgrades
Get current maintenance window for a network


```js
meraki.getNetworkFirmwareUpgrades({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkFirmwareUpgrades
Update current maintenance window for a network


```js
meraki.updateNetworkFirmwareUpgrades({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkFirmwareUpgrades `object`
    * upgradeWindow `object`: Upgrade window for devices in network
      * dayOfWeek `string` (values: sun, mon, tue, wed, thu, fri, sat, sunday, monday, tuesday, wednesday, thursday, friday, saturday): Day of the week
      * hourOfDay `string` (values: 0:00, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380): Hour of the day

#### Output
* output `object`

### getNetworkFloorPlans
List the floor plans that belong to your network


```js
meraki.getNetworkFloorPlans({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkFloorPlan
Upload a floor plan


```js
meraki.createNetworkFloorPlan({
  "networkId": "",
  "createNetworkFloorPlan": {
    "name": "",
    "imageContents": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkFloorPlan **required** `object`
    * bottomLeftCorner `object`: The longitude and latitude of the bottom left corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * bottomRightCorner `object`: The longitude and latitude of the bottom right corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * center `object`: The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * imageContents **required** `string`: The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
    * name **required** `string`: The name of your floor plan.
    * topLeftCorner `object`: The longitude and latitude of the top left corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * topRightCorner `object`: The longitude and latitude of the top right corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude

#### Output
* output `object`

### deleteNetworkFloorPlan
Destroy a floor plan


```js
meraki.deleteNetworkFloorPlan({
  "networkId": "",
  "floorPlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * floorPlanId **required** `string`

#### Output
*Output schema unknown*

### getNetworkFloorPlan
Find a floor plan by ID


```js
meraki.getNetworkFloorPlan({
  "networkId": "",
  "floorPlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * floorPlanId **required** `string`

#### Output
* output `object`

### updateNetworkFloorPlan
Update a floor plan's geolocation and other meta data


```js
meraki.updateNetworkFloorPlan({
  "networkId": "",
  "floorPlanId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * floorPlanId **required** `string`
  * updateNetworkFloorPlan `object`
    * bottomLeftCorner `object`: The longitude and latitude of the bottom left corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * bottomRightCorner `object`: The longitude and latitude of the bottom right corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * center `object`: The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * imageContents `string`: The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.
    * name `string`: The name of your floor plan.
    * topLeftCorner `object`: The longitude and latitude of the top left corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude
    * topRightCorner `object`: The longitude and latitude of the top right corner of your floor plan.
      * lat `number`: Latitude
      * lng `number`: Longitude

#### Output
* output `object`

### getNetworkGroupPolicies
List the group policies in a network


```js
meraki.getNetworkGroupPolicies({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkGroupPolicy
Create a group policy


```js
meraki.createNetworkGroupPolicy({
  "networkId": "",
  "createNetworkGroupPolicy": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkGroupPolicy **required** `object`
    * bandwidth `object`:     The bandwidth settings for clients bound to your group policy.
      * bandwidthLimits `object`: The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
        * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
        * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit
      * settings `string` (values: network default, ignore, custom): How bandwidth limits are enforced. Can be 'network default', 'ignore' or 'custom'.
    * bonjourForwarding `object`: The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
      * rules `array`: A list of the Bonjour forwarding rules for your group policy. If 'settings' is set to 'custom', at least one rule must be specified.
        * items `object`
          * description `string`: A description for your Bonjour forwarding rule. Optional.
          * services **required** `array`: A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
          * vlanId **required** `string`: The ID of the service VLAN. Required.
      * settings `string` (values: network default, ignore, custom): How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
    * contentFiltering `object`: The content filtering settings for your group policy
      * allowedUrlPatterns `object`: Settings for allowed URL patterns
        * patterns `array`: A list of URL patterns that are allowed
          * items `string`
        * settings `string` (values: network default, append, override): How URL patterns are applied. Can be 'network default', 'append' or 'override'.
      * blockedUrlCategories `object`: Settings for blocked URL categories
        * categories `array`: A list of URL categories to block
          * items `string`
        * settings `string` (values: network default, append, override): How URL categories are applied. Can be 'network default', 'append' or 'override'.
      * blockedUrlPatterns `object`: Settings for blocked URL patterns
        * patterns `array`: A list of URL patterns that are blocked
          * items `string`
        * settings `string` (values: network default, append, override): How URL patterns are applied. Can be 'network default', 'append' or 'override'.
    * firewallAndTrafficShaping `object`:     The firewall and traffic shaping rules and settings for your policy.
      * l3FirewallRules `array`: An ordered array of the L3 firewall rules
        * items `object`
          * comment `string`: Description of the rule (optional)
          * destCidr **required** `string`: Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or 'any'.
          * destPort `string`: Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or 'any'
          * policy **required** `string`: 'allow' or 'deny' traffic specified by this rule
          * protocol **required** `string`: The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
      * l7FirewallRules `array`: An ordered array of L7 firewall rules
        * items `object`
          * policy `string` (values: deny): The policy applied to matching traffic. Must be 'deny'.
          * type `string` (values: application, applicationCategory, host, port, ipRange): Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
          * value `string`: The 'value' of what you want to block. If 'type' is 'host', 'port' or 'ipRange', 'value' must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If 'type' is 'application' or 'applicationCategory', then 'value' must be an object with an ID for the application.
      * settings `string` (values: network default, ignore, custom): How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
      * trafficShapingRules `array`:     An array of traffic shaping rules. Rules are applied in the order that
        * items `object`
          * definitions **required** `array`:     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
          * dscpTagValue `integer`:     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
          * pcpTagValue `integer`:     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
          * perClientBandwidthLimits `object`:     An object describing the bandwidth settings for your rule.
          * priority `string`:     A string, indicating the priority level for packets bound to your rule.
    * name **required** `string`: The name for your group policy. Required.
    * scheduling `object`:     The schedule for the group policy. Schedules are applied to days of the week.
      * enabled `boolean`: Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed.
      * friday `object`: The schedule object for Friday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * monday `object`: The schedule object for Monday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * saturday `object`: The schedule object for Saturday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * sunday `object`: The schedule object for Sunday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * thursday `object`: The schedule object for Thursday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * tuesday `object`: The schedule object for Tuesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * wednesday `object`: The schedule object for Wednesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
    * splashAuthSettings `string` (values: network default, bypass): Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
    * vlanTagging `object`: The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
      * settings `string` (values: network default, ignore, custom): How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
      * vlanId `string`: The ID of the vlan you want to tag. This only applies if 'settings' is set to 'custom'.

#### Output
* output `object`

### deleteNetworkGroupPolicy
Delete a group policy


```js
meraki.deleteNetworkGroupPolicy({
  "networkId": "",
  "groupPolicyId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * groupPolicyId **required** `string`

#### Output
*Output schema unknown*

### getNetworkGroupPolicy
Display a group policy


```js
meraki.getNetworkGroupPolicy({
  "networkId": "",
  "groupPolicyId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * groupPolicyId **required** `string`

#### Output
* output `object`

### updateNetworkGroupPolicy
Update a group policy


```js
meraki.updateNetworkGroupPolicy({
  "networkId": "",
  "groupPolicyId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * groupPolicyId **required** `string`
  * updateNetworkGroupPolicy `object`
    * bandwidth `object`:     The bandwidth settings for clients bound to your group policy.
      * bandwidthLimits `object`: The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
        * limitDown `integer`: The maximum download limit (integer, in Kbps). null indicates no limit
        * limitUp `integer`: The maximum upload limit (integer, in Kbps). null indicates no limit
      * settings `string` (values: network default, ignore, custom): How bandwidth limits are enforced. Can be 'network default', 'ignore' or 'custom'.
    * bonjourForwarding `object`: The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
      * rules `array`: A list of the Bonjour forwarding rules for your group policy. If 'settings' is set to 'custom', at least one rule must be specified.
        * items `object`
          * description `string`: A description for your Bonjour forwarding rule. Optional.
          * services **required** `array`: A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
          * vlanId **required** `string`: The ID of the service VLAN. Required.
      * settings `string` (values: network default, ignore, custom): How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
    * contentFiltering `object`: The content filtering settings for your group policy
      * allowedUrlPatterns `object`: Settings for allowed URL patterns
        * patterns `array`: A list of URL patterns that are allowed
          * items `string`
        * settings `string` (values: network default, append, override): How URL patterns are applied. Can be 'network default', 'append' or 'override'.
      * blockedUrlCategories `object`: Settings for blocked URL categories
        * categories `array`: A list of URL categories to block
          * items `string`
        * settings `string` (values: network default, append, override): How URL categories are applied. Can be 'network default', 'append' or 'override'.
      * blockedUrlPatterns `object`: Settings for blocked URL patterns
        * patterns `array`: A list of URL patterns that are blocked
          * items `string`
        * settings `string` (values: network default, append, override): How URL patterns are applied. Can be 'network default', 'append' or 'override'.
    * firewallAndTrafficShaping `object`:     The firewall and traffic shaping rules and settings for your policy.
      * l3FirewallRules `array`: An ordered array of the L3 firewall rules
        * items `object`
          * comment `string`: Description of the rule (optional)
          * destCidr **required** `string`: Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or 'any'.
          * destPort `string`: Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or 'any'
          * policy **required** `string`: 'allow' or 'deny' traffic specified by this rule
          * protocol **required** `string`: The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
      * l7FirewallRules `array`: An ordered array of L7 firewall rules
        * items `object`
          * policy `string` (values: deny): The policy applied to matching traffic. Must be 'deny'.
          * type `string` (values: application, applicationCategory, host, port, ipRange): Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
          * value `string`: The 'value' of what you want to block. If 'type' is 'host', 'port' or 'ipRange', 'value' must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If 'type' is 'application' or 'applicationCategory', then 'value' must be an object with an ID for the application.
      * settings `string` (values: network default, ignore, custom): How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
      * trafficShapingRules `array`:     An array of traffic shaping rules. Rules are applied in the order that
        * items `object`
          * definitions **required** `array`:     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
          * dscpTagValue `integer`:     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
          * pcpTagValue `integer`:     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
          * perClientBandwidthLimits `object`:     An object describing the bandwidth settings for your rule.
          * priority `string`:     A string, indicating the priority level for packets bound to your rule.
    * name `string`: The name for your group policy.
    * scheduling `object`:     The schedule for the group policy. Schedules are applied to days of the week.
      * enabled `boolean`: Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed.
      * friday `object`: The schedule object for Friday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * monday `object`: The schedule object for Monday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * saturday `object`: The schedule object for Saturday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * sunday `object`: The schedule object for Sunday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * thursday `object`: The schedule object for Thursday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * tuesday `object`: The schedule object for Tuesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * wednesday `object`: The schedule object for Wednesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
    * splashAuthSettings `string` (values: network default, bypass): Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
    * vlanTagging `object`: The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
      * settings `string` (values: network default, ignore, custom): How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
      * vlanId `string`: The ID of the vlan you want to tag. This only applies if 'settings' is set to 'custom'.

#### Output
* output `object`

### getNetworkMerakiAuthUsers
List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)


```js
meraki.getNetworkMerakiAuthUsers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkMerakiAuthUser
Create a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)


```js
meraki.createNetworkMerakiAuthUser({
  "networkId": "",
  "createNetworkMerakiAuthUser": {
    "email": "",
    "name": "",
    "password": "",
    "authorizations": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkMerakiAuthUser **required** `object`
    * accountType `string` (values: Guest, 802.1X, Client VPN): Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
    * authorizations **required** `array`: Authorization zones and expiration dates for the user.
      * items `object`
        * expiresAt `string`: Date for authorization to expire. Set to 'Never' for the authorization to not expire, which is the default.
        * ssidNumber `integer`: Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user's given accountType.
    * email **required** `string`: Email address of the user
    * emailPasswordToUser `boolean`: Whether or not Meraki should email the password to user. Default is false.
    * name **required** `string`: Name of the user
    * password **required** `string`: The password for this user account

#### Output
* output `object`

### deleteNetworkMerakiAuthUser
Delete a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be deleted)


```js
meraki.deleteNetworkMerakiAuthUser({
  "networkId": "",
  "merakiAuthUserId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * merakiAuthUserId **required** `string`

#### Output
*Output schema unknown*

### getNetworkMerakiAuthUser
Return the Meraki Auth splash guest, RADIUS, or client VPN user


```js
meraki.getNetworkMerakiAuthUser({
  "networkId": "",
  "merakiAuthUserId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * merakiAuthUserId **required** `string`

#### Output
* output `object`

### updateNetworkMerakiAuthUser
Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be deleted)


```js
meraki.updateNetworkMerakiAuthUser({
  "networkId": "",
  "merakiAuthUserId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * merakiAuthUserId **required** `string`
  * updateNetworkMerakiAuthUser `object`
    * authorizations `array`: Authorization zones and expiration dates for the user.
      * items `object`
        * expiresAt `string`: Date for authorization to expire. Default is for authorization to not expire.
        * ssidNumber **required** `integer`: SSID for which the user is being authorized
    * emailPasswordToUser `boolean`: Whether or not Meraki should email the password to user. Default is false.
    * name `string`: Name of the user
    * password `string`: The password for this user account

#### Output
* output `object`

### getNetworkMqttBrokers
List the MQTT brokers for this network


```js
meraki.getNetworkMqttBrokers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkMqttBroker
Add an MQTT broker


```js
meraki.createNetworkMqttBroker({
  "networkId": "",
  "createNetworkMqttBroker": {
    "name": "",
    "host": "",
    "port": 0
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkMqttBroker **required** `object`
    * host **required** `string`: Host name/IP address where MQTT broker runs
    * name **required** `string`: Name of the MQTT broker
    * port **required** `integer`: Host port though which MQTT broker can be reached

#### Output
* output `object`

### deleteNetworkMqttBroker
Delete an MQTT broker


```js
meraki.deleteNetworkMqttBroker({
  "networkId": "",
  "mqttBrokerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * mqttBrokerId **required** `string`

#### Output
*Output schema unknown*

### getNetworkMqttBroker
Return an MQTT broker


```js
meraki.getNetworkMqttBroker({
  "networkId": "",
  "mqttBrokerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * mqttBrokerId **required** `string`

#### Output
* output `object`

### updateNetworkMqttBroker
Update an MQTT broker


```js
meraki.updateNetworkMqttBroker({
  "networkId": "",
  "mqttBrokerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * mqttBrokerId **required** `string`
  * updateNetworkMqttBroker `object`
    * host `string`: Host name where mqtt broker runs
    * name `string`: Name of the mqtt config
    * port `integer`: Host port though which mqtt broker can be reached

#### Output
* output `object`

### getNetworkNetflow
Return the NetFlow traffic reporting settings for a network


```js
meraki.getNetworkNetflow({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkNetflow
Update the NetFlow traffic reporting settings for a network


```js
meraki.updateNetworkNetflow({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkNetflow `object`
    * collectorIp `string`: The IPv4 address of the NetFlow collector.
    * collectorPort `integer`: The port that the NetFlow collector will be listening on.
    * reportingEnabled `boolean`: Boolean indicating whether NetFlow traffic reporting is enabled (true) or disabled (false).

#### Output
* output `object`

### getNetworkNetworkHealthChannelUtilization
Get the channel utilization over each radio for all APs in a network.


```js
meraki.getNetworkNetworkHealthChannelUtilization({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 100. Default is 10.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkPiiPiiKeys
List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```


```js
meraki.getNetworkPiiPiiKeys({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * username `string`: The username of a Systems Manager user
  * email `string`: The email of a network user account or a Systems Manager device
  * mac `string`: The MAC of a network client device or a Systems Manager device
  * serial `string`: The serial of a Systems Manager device
  * imei `string`: The IMEI of a Systems Manager device
  * bluetoothMac `string`: The MAC of a Bluetooth client

#### Output
* output `object`

### getNetworkPiiRequests
List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```


```js
meraki.getNetworkPiiRequests({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkPiiRequest
Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```


```js
meraki.createNetworkPiiRequest({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkPiiRequest `object`
    * datasets `array`: The datasets related to the provided key that should be deleted. Only applies to "delete" requests. The value "all" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)
      * items `string`
    * email `string`: The email of a network user account. Only applies to "delete" requests.
    * mac `string`: The MAC of a network client device. Applies to both "restrict processing" and "delete" requests.
    * smDeviceId `string`: The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device.
    * smUserId `string`: The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user.
    * type `string` (values: delete, restrict processing): One of "delete" or "restrict processing"
    * username `string`: The username of a network log in. Only applies to "delete" requests.

#### Output
* output `object`

### deleteNetworkPiiRequest
Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```


```js
meraki.deleteNetworkPiiRequest({
  "networkId": "",
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * requestId **required** `string`

#### Output
*Output schema unknown*

### getNetworkPiiRequest
Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```


```js
meraki.getNetworkPiiRequest({
  "networkId": "",
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * requestId **required** `string`

#### Output
* output `object`

### getNetworkPiiSmDevicesForKey
Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```


```js
meraki.getNetworkPiiSmDevicesForKey({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * username `string`: The username of a Systems Manager user
  * email `string`: The email of a network user account or a Systems Manager device
  * mac `string`: The MAC of a network client device or a Systems Manager device
  * serial `string`: The serial of a Systems Manager device
  * imei `string`: The IMEI of a Systems Manager device
  * bluetoothMac `string`: The MAC of a Bluetooth client

#### Output
* output `object`

### getNetworkPiiSmOwnersForKey
Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```


```js
meraki.getNetworkPiiSmOwnersForKey({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * username `string`: The username of a Systems Manager user
  * email `string`: The email of a network user account or a Systems Manager device
  * mac `string`: The MAC of a network client device or a Systems Manager device
  * serial `string`: The serial of a Systems Manager device
  * imei `string`: The IMEI of a Systems Manager device
  * bluetoothMac `string`: The MAC of a Bluetooth client

#### Output
* output `object`

### getNetworkSettings
Return the settings for a network


```js
meraki.getNetworkSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSettings
Update the settings for a network


```js
meraki.updateNetworkSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSettings `object`
    * localStatusPageEnabled `boolean`: Enables / disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
    * remoteStatusPageEnabled `boolean`: Enables / disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if localStatusPageEnabled is set to true

#### Output
* output `object`

### createNetworkSmBypassActivationLockAttempt
Bypass activation lock attempt


```js
meraki.createNetworkSmBypassActivationLockAttempt({
  "networkId": "",
  "createNetworkSmBypassActivationLockAttempt": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSmBypassActivationLockAttempt **required** `object`
    * ids **required** `array`: The ids of the devices to attempt activation lock bypass.
      * items `string`

#### Output
* output `object`

### getNetworkSmBypassActivationLockAttempt
Bypass activation lock attempt status


```js
meraki.getNetworkSmBypassActivationLockAttempt({
  "networkId": "",
  "attemptId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * attemptId **required** `string`

#### Output
* output `object`

### getNetworkSmDevices
List the devices enrolled in an SM network with various specified fields and filters


```js
meraki.getNetworkSmDevices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * fields `array`: Additional fields that will be displayed for each device.
  * wifiMacs `array`: Filter devices by wifi mac(s).
  * serials `array`: Filter devices by serial(s).
  * ids `array`: Filter devices by id(s).
  * scope `array`: Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### checkinNetworkSmDevices
Force check-in a set of devices


```js
meraki.checkinNetworkSmDevices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * checkinNetworkSmDevices `object`
    * ids `array`: The ids of the devices to be checked-in.
      * items `string`
    * scope `array`: The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in.
      * items `string`
    * serials `array`: The serials of the devices to be checked-in.
      * items `string`
    * wifiMacs `array`: The wifiMacs of the devices to be checked-in.
      * items `string`

#### Output
* output `object`

### updateNetworkSmDevicesFields
Modify the fields of a device


```js
meraki.updateNetworkSmDevicesFields({
  "networkId": "",
  "updateNetworkSmDevicesFields": {
    "deviceFields": {}
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSmDevicesFields **required** `object`
    * deviceFields **required** `object`: The new fields of the device. Each field of this object is optional.
      * name `string`: New name for the device
      * notes `string`: New notes for the device
    * id `string`: The id of the device to be modified.
    * serial `string`: The serial of the device to be modified.
    * wifiMac `string`: The wifiMac of the device to be modified.

#### Output
* output `object`

### lockNetworkSmDevices
Lock a set of devices


```js
meraki.lockNetworkSmDevices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * lockNetworkSmDevices `object`
    * ids `array`: The ids of the devices to be locked.
      * items `string`
    * pin `integer`: The pin number for locking macOS devices (a six digit number). Required only for macOS devices.
    * scope `array`: The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped.
      * items `string`
    * serials `array`: The serials of the devices to be locked.
      * items `string`
    * wifiMacs `array`: The wifiMacs of the devices to be locked.
      * items `string`

#### Output
* output `object`

### modifyNetworkSmDevicesTags
Add, delete, or update the tags of a set of devices


```js
meraki.modifyNetworkSmDevicesTags({
  "networkId": "",
  "modifyNetworkSmDevicesTags": {
    "tags": [],
    "updateAction": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * modifyNetworkSmDevicesTags **required** `object`
    * ids `array`: The ids of the devices to be modified.
      * items `string`
    * scope `array`: The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified.
      * items `string`
    * serials `array`: The serials of the devices to be modified.
      * items `string`
    * tags **required** `array`: The tags to be added, deleted, or updated.
      * items `string`
    * updateAction **required** `string`: One of add, delete, or update. Only devices that have been modified will be returned.
    * wifiMacs `array`: The wifiMacs of the devices to be modified.
      * items `string`

#### Output
* output `object`

### moveNetworkSmDevices
Move a set of devices to a new network


```js
meraki.moveNetworkSmDevices({
  "networkId": "",
  "moveNetworkSmDevices": {
    "newNetwork": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * moveNetworkSmDevices **required** `object`
    * ids `array`: The ids of the devices to be moved.
      * items `string`
    * newNetwork **required** `string`: The new network to which the devices will be moved.
    * scope `array`: The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be moved.
      * items `string`
    * serials `array`: The serials of the devices to be moved.
      * items `string`
    * wifiMacs `array`: The wifiMacs of the devices to be moved.
      * items `string`

#### Output
* output `object`

### wipeNetworkSmDevices
Wipe a device


```js
meraki.wipeNetworkSmDevices({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * wipeNetworkSmDevices `object`
    * id `string`: The id of the device to be wiped.
    * pin `integer`: The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices.
    * serial `string`: The serial of the device to be wiped.
    * wifiMac `string`: The wifiMac of the device to be wiped.

#### Output
* output `object`

### getNetworkSmDeviceCellularUsageHistory
Return the client's daily cellular data usage history. Usage data is in kilobytes.


```js
meraki.getNetworkSmDeviceCellularUsageHistory({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceCerts
List the certs on a device


```js
meraki.getNetworkSmDeviceCerts({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceConnectivity
Returns historical connectivity data (whether a device is regularly checking in to Dashboard).


```js
meraki.getNetworkSmDeviceConnectivity({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkSmDeviceDesktopLogs
Return historical records of various Systems Manager network connection details for desktop devices.


```js
meraki.getNetworkSmDeviceDesktopLogs({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkSmDeviceDeviceCommandLogs
Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.


```js
meraki.getNetworkSmDeviceDeviceCommandLogs({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkSmDeviceDeviceProfiles
Get the profiles associated with a device


```js
meraki.getNetworkSmDeviceDeviceProfiles({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceNetworkAdapters
List the network adapters of a device


```js
meraki.getNetworkSmDeviceNetworkAdapters({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDevicePerformanceHistory
Return historical records of various Systems Manager client metrics for desktop devices.


```js
meraki.getNetworkSmDevicePerformanceHistory({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### refreshNetworkSmDeviceDetails
Refresh the details of a device


```js
meraki.refreshNetworkSmDeviceDetails({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSmDeviceRestrictions
List the restrictions on a device


```js
meraki.getNetworkSmDeviceRestrictions({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceSecurityCenters
List the security centers on a device


```js
meraki.getNetworkSmDeviceSecurityCenters({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceSoftwares
Get a list of softwares associated with a device


```js
meraki.getNetworkSmDeviceSoftwares({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### unenrollNetworkSmDevice
Unenroll a device


```js
meraki.unenrollNetworkSmDevice({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmDeviceWlanLists
List the saved SSID names on a device


```js
meraki.getNetworkSmDeviceWlanLists({
  "networkId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * deviceId **required** `string`

#### Output
* output `object`

### getNetworkSmProfiles
List all profiles in a network


```js
meraki.getNetworkSmProfiles({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkSmTargetGroups
List the target groups in this network


```js
meraki.getNetworkSmTargetGroups({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * withDetails `boolean`: Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response

#### Output
* output `object`

### createNetworkSmTargetGroup
Add a target group


```js
meraki.createNetworkSmTargetGroup({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSmTargetGroup `object`
    * name `string`: The name of this target group
    * scope `string`: The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.

#### Output
* output `object`

### deleteNetworkSmTargetGroup
Delete a target group from a network


```js
meraki.deleteNetworkSmTargetGroup({
  "networkId": "",
  "targetGroupId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * targetGroupId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSmTargetGroup
Return a target group


```js
meraki.getNetworkSmTargetGroup({
  "networkId": "",
  "targetGroupId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * targetGroupId **required** `string`
  * withDetails `boolean`: Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response

#### Output
* output `object`

### updateNetworkSmTargetGroup
Update a target group


```js
meraki.updateNetworkSmTargetGroup({
  "networkId": "",
  "targetGroupId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * targetGroupId **required** `string`
  * updateNetworkSmTargetGroup `object`
    * name `string`: The name of this target group
    * scope `string`: The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.

#### Output
* output `object`

### getNetworkSmUsers
List the owners in an SM network with various specified fields and filters


```js
meraki.getNetworkSmUsers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * ids `array`: Filter users by id(s).
  * usernames `array`: Filter users by username(s).
  * emails `array`: Filter users by email(s).
  * scope `array`: Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags.

#### Output
* output `object`

### getNetworkSmUserDeviceProfiles
Get the profiles associated with a user


```js
meraki.getNetworkSmUserDeviceProfiles({
  "networkId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * userId **required** `string`

#### Output
* output `object`

### getNetworkSmUserSoftwares
Get a list of softwares associated with a user


```js
meraki.getNetworkSmUserSoftwares({
  "networkId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * userId **required** `string`

#### Output
* output `object`

### getNetworkSnmp
Return the SNMP settings for a network


```js
meraki.getNetworkSnmp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSnmp
Update the SNMP settings for a network


```js
meraki.updateNetworkSnmp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSnmp `object`
    * access `string` (values: none, community, users): The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3).
    * communityString `string`: The SNMP community string. Only relevant if 'access' is set to 'community'.
    * users `array`: The list of SNMP users. Only relevant if 'access' is set to 'users'.
      * items `object`
        * passphrase **required** `string`: The passphrase for the SNMP user. Required.
        * username **required** `string`: The username for the SNMP user. Required.

#### Output
* output `object`

### getNetworkSplashLoginAttempts
List the splash login attempts for a network


```js
meraki.getNetworkSplashLoginAttempts({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * ssidNumber `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14): Only return the login attempts for the specified SSID
  * loginIdentifier `string`: The username, email, or phone number used during login
  * timespan `integer`: The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months

#### Output
* output `object`

### splitNetwork
Split a combined network into individual networks for each type of device


```js
meraki.splitNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkSwitchAccessControlLists
Return the access control lists for a MS network


```js
meraki.getNetworkSwitchAccessControlLists({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchAccessControlLists
Update the access control lists for a MS network


```js
meraki.updateNetworkSwitchAccessControlLists({
  "networkId": "",
  "updateNetworkSwitchAccessControlLists": {
    "rules": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchAccessControlLists **required** `object`
    * rules **required** `array`: An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules.
      * items `object`
        * comment `string`: Description of the rule (optional).
        * dstCidr **required** `string`: Destination IP address (in IP or CIDR notation) or 'any'.
        * dstPort `string`: Destination port. Must be in the range of 1-65535 or 'any'. Default is 'any'.
        * ipVersion `string` (values: any, ipv4, ipv6): IP address version (must be 'any', 'ipv4' or 'ipv6'). Applicable only if network supports IPv6. Default value is 'ipv4'.
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule.
        * protocol **required** `string` (values: tcp, udp, any): The type of protocol (must be 'tcp', 'udp', or 'any').
        * srcCidr **required** `string`: Source IP address (in IP or CIDR notation) or 'any'.
        * srcPort `string`: Source port. Must be in the range  of 1-65535 or 'any'. Default is 'any'.
        * vlan `string`: Incoming traffic VLAN. Must be in the range of 1-4095 or 'any'. Default is 'any'.

#### Output
* output `object`

### getNetworkSwitchAccessPolicies
List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method


```js
meraki.getNetworkSwitchAccessPolicies({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchAccessPolicy
Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.


```js
meraki.createNetworkSwitchAccessPolicy({
  "networkId": "",
  "createNetworkSwitchAccessPolicy": {
    "name": "",
    "radiusServers": [],
    "radiusTestingEnabled": true,
    "radiusCoaSupportEnabled": true,
    "radiusAccountingEnabled": true,
    "hostMode": "",
    "urlRedirectWalledGardenEnabled": true
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchAccessPolicy **required** `object`
    * accessPolicyType `string` (values: 802.1x, MAC authentication bypass, Hybrid authentication): Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
    * guestVlanId `integer`: ID for the guest VLAN allow unauthorized devices access to limited network resources
    * hostMode **required** `string` (values: Single-Host, Multi-Domain, Multi-Host, Multi-Auth): Choose the Host Mode for the access policy.
    * increaseAccessSpeed `boolean`: Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication.
    * name **required** `string`: Name of the access policy
    * radiusAccountingEnabled **required** `boolean`: Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
    * radiusAccountingServers `array`: List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
      * items `object`
        * host **required** `string`: Public IP address of the RADIUS accounting server
        * port **required** `integer`: UDP port that the RADIUS Accounting server listens on for access requests
        * secret **required** `string`: RADIUS client shared secret
    * radiusCoaSupportEnabled **required** `boolean`: Change of authentication for RADIUS re-authentication and disconnection
    * radiusServers **required** `array`: List of RADIUS servers to require connecting devices to authenticate against before granting network access
      * items `object`
        * host **required** `string`: Public IP address of the RADIUS server
        * port **required** `integer`: UDP port that the RADIUS server listens on for access requests
        * secret **required** `string`: RADIUS client shared secret
    * radiusTestingEnabled **required** `boolean`: If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
    * urlRedirectWalledGardenEnabled **required** `boolean`: Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
    * urlRedirectWalledGardenRanges `array`: IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
      * items `string`
    * voiceVlanClients `boolean`: CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'.

#### Output
* output `object`

### deleteNetworkSwitchAccessPolicy
Delete an access policy for a switch network


```js
meraki.deleteNetworkSwitchAccessPolicy({
  "networkId": "",
  "accessPolicyNumber": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * accessPolicyNumber **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchAccessPolicy
Return a specific access policy for a switch network


```js
meraki.getNetworkSwitchAccessPolicy({
  "networkId": "",
  "accessPolicyNumber": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * accessPolicyNumber **required** `string`

#### Output
* output `object`

### updateNetworkSwitchAccessPolicy
Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.


```js
meraki.updateNetworkSwitchAccessPolicy({
  "networkId": "",
  "accessPolicyNumber": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * accessPolicyNumber **required** `string`
  * updateNetworkSwitchAccessPolicy `object`
    * accessPolicyType `string` (values: 802.1x, MAC authentication bypass, Hybrid authentication): Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
    * guestVlanId `integer`: ID for the guest VLAN allow unauthorized devices access to limited network resources
    * hostMode `string` (values: Single-Host, Multi-Domain, Multi-Host, Multi-Auth): Choose the Host Mode for the access policy.
    * increaseAccessSpeed `boolean`: Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication.
    * name `string`: Name of the access policy
    * radiusAccountingEnabled `boolean`: Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
    * radiusAccountingServers `array`: List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
      * items `object`
        * host **required** `string`: Public IP address of the RADIUS accounting server
        * port **required** `integer`: UDP port that the RADIUS Accounting server listens on for access requests
        * secret **required** `string`: RADIUS client shared secret
    * radiusCoaSupportEnabled `boolean`: Change of authentication for RADIUS re-authentication and disconnection
    * radiusServers `array`: List of RADIUS servers to require connecting devices to authenticate against before granting network access
      * items `object`
        * host **required** `string`: Public IP address of the RADIUS server
        * port **required** `integer`: UDP port that the RADIUS server listens on for access requests
        * secret **required** `string`: RADIUS client shared secret
    * radiusTestingEnabled `boolean`: If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
    * urlRedirectWalledGardenEnabled `boolean`: Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
    * urlRedirectWalledGardenRanges `array`: IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
      * items `string`
    * voiceVlanClients `boolean`: CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'.

#### Output
* output `object`

### getNetworkSwitchDhcpServerPolicy
Return the DHCP server policy


```js
meraki.getNetworkSwitchDhcpServerPolicy({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchDhcpServerPolicy
Update the DHCP server policy


```js
meraki.updateNetworkSwitchDhcpServerPolicy({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchDhcpServerPolicy `object`
    * allowedServers `array`: List the MAC addresses of DHCP servers to permit on the network. Applicable only if defaultPolicy is set to block. An empty array will clear the entries.
      * items `string`
    * blockedServers `array`: List the MAC addresses of DHCP servers to block on the network. Applicable only if defaultPolicy is set to allow. An empty array will clear the entries.
      * items `string`
    * defaultPolicy `string` (values: allow, block): 'allow' or 'block' new DHCP servers. Default value is 'allow'.

#### Output
* output `object`

### getNetworkSwitchDscpToCosMappings
Return the DSCP to CoS mappings


```js
meraki.getNetworkSwitchDscpToCosMappings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchDscpToCosMappings
Update the DSCP to CoS mappings


```js
meraki.updateNetworkSwitchDscpToCosMappings({
  "networkId": "",
  "updateNetworkSwitchDscpToCosMappings": {
    "mappings": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchDscpToCosMappings **required** `object`
    * mappings **required** `array`: An array of DSCP to CoS mappings. An empty array will reset the mappings to default.
      * items `object`
        * cos **required** `integer`: The actual layer-2 CoS queue the DSCP value is mapped to. These are not bits set on outgoing frames. Value can be in the range of 0 to 5 inclusive.
        * dscp **required** `integer`: The Differentiated Services Code Point (DSCP) tag in the IP header that will be mapped to a particular Class-of-Service (CoS) queue. Value can be in the range of 0 to 63 inclusive.
        * title `string`: Label for the mapping (optional).

#### Output
* output `object`

### getNetworkSwitchLinkAggregations
List link aggregation groups


```js
meraki.getNetworkSwitchLinkAggregations({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchLinkAggregation
Create a link aggregation group


```js
meraki.createNetworkSwitchLinkAggregation({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchLinkAggregation `object`
    * switchPorts `array`: Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
      * items `object`
        * portId **required** `string`: Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: “1_8X10G_1”), otherwise it is just the port number (Ex: "8").
        * serial **required** `string`: Serial number of the switch.
    * switchProfilePorts `array`: Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
      * items `object`
        * portId **required** `string`: Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: “1_8X10G_1”), otherwise it is just the port number (Ex: "8").
        * profile **required** `string`: Profile identifier.

#### Output
* output `object`

### deleteNetworkSwitchLinkAggregation
Split a link aggregation group into separate ports


```js
meraki.deleteNetworkSwitchLinkAggregation({
  "networkId": "",
  "linkAggregationId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * linkAggregationId **required** `string`

#### Output
*Output schema unknown*

### updateNetworkSwitchLinkAggregation
Update a link aggregation group


```js
meraki.updateNetworkSwitchLinkAggregation({
  "networkId": "",
  "linkAggregationId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * linkAggregationId **required** `string`
  * updateNetworkSwitchLinkAggregation `object`
    * switchPorts `array`: Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.
      * items `object`
        * portId **required** `string`: Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: “1_8X10G_1”), otherwise it is just the port number (Ex: "8").
        * serial **required** `string`: Serial number of the switch.
    * switchProfilePorts `array`: Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.
      * items `object`
        * portId **required** `string`: Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: “1_8X10G_1”), otherwise it is just the port number (Ex: "8").
        * profile **required** `string`: Profile identifier.

#### Output
* output `object`

### getNetworkSwitchMtu
Return the MTU configuration


```js
meraki.getNetworkSwitchMtu({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchMtu
Update the MTU configuration


```js
meraki.updateNetworkSwitchMtu({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchMtu `object`
    * defaultMtuSize `integer`: MTU size for the entire network. Default value is 9578.
    * overrides `array`: Override MTU size for individual switches or switch profiles. An empty array will clear overrides.
      * items `object`
        * mtuSize **required** `integer`: MTU size for the switches or switch profiles.
        * switchProfiles `array`: List of switch profile IDs. Applicable only for template network.
          * items `string`
        * switches `array`: List of switch serials. Applicable only for switch network.
          * items `string`

#### Output
* output `object`

### getNetworkSwitchPortSchedules
List switch port schedules


```js
meraki.getNetworkSwitchPortSchedules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchPortSchedule
Add a switch port schedule


```js
meraki.createNetworkSwitchPortSchedule({
  "networkId": "",
  "createNetworkSwitchPortSchedule": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchPortSchedule **required** `object`
    * name **required** `string`: The name for your port schedule. Required
    * portSchedule `object`:     The schedule for switch port scheduling. Schedules are applied to days of the week.
      * friday `object`: The schedule object for Friday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * monday `object`: The schedule object for Monday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * saturday `object`: The schedule object for Saturday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * sunday `object`: The schedule object for Sunday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * thursday `object`: The schedule object for Thursday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * tuesday `object`: The schedule object for Tuesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * wednesday `object`: The schedule object for Wednesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.

#### Output
* output `object`

### deleteNetworkSwitchPortSchedule
Delete a switch port schedule


```js
meraki.deleteNetworkSwitchPortSchedule({
  "networkId": "",
  "portScheduleId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * portScheduleId **required** `string`

#### Output
*Output schema unknown*

### updateNetworkSwitchPortSchedule
Update a switch port schedule


```js
meraki.updateNetworkSwitchPortSchedule({
  "networkId": "",
  "portScheduleId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * portScheduleId **required** `string`
  * updateNetworkSwitchPortSchedule `object`
    * name `string`: The name for your port schedule.
    * portSchedule `object`:     The schedule for switch port scheduling. Schedules are applied to days of the week.
      * friday `object`: The schedule object for Friday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * monday `object`: The schedule object for Monday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * saturday `object`: The schedule object for Saturday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * sunday `object`: The schedule object for Sunday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * thursday `object`: The schedule object for Thursday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * tuesday `object`: The schedule object for Tuesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
      * wednesday `object`: The schedule object for Wednesday.
        * active `boolean`: Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
        * from `string`: The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
        * to `string`: The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.

#### Output
* output `object`

### getNetworkSwitchQosRules
List quality of service rules


```js
meraki.getNetworkSwitchQosRules({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchQosRule
Add a quality of service rule


```js
meraki.createNetworkSwitchQosRule({
  "networkId": "",
  "createNetworkSwitchQosRule": {
    "vlan": 0
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchQosRule **required** `object`
    * dscp `integer`: DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0
    * dstPort `integer`: The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * dstPortRange `string`: The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * protocol `string` (values: ANY, TCP, UDP): The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY"
    * srcPort `integer`: The source port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * srcPortRange `string`: The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * vlan **required** `integer`: The VLAN of the incoming packet. A null value will match any VLAN.

#### Output
* output `object`

### getNetworkSwitchQosRulesOrder
Return the quality of service rule IDs by order in which they will be processed by the switch


```js
meraki.getNetworkSwitchQosRulesOrder({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchQosRulesOrder
Update the order in which the rules should be processed by the switch


```js
meraki.updateNetworkSwitchQosRulesOrder({
  "networkId": "",
  "updateNetworkSwitchQosRulesOrder": {
    "ruleIds": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchQosRulesOrder **required** `object`
    * ruleIds **required** `array`: A list of quality of service rule IDs arranged in order in which they should be processed by the switch.
      * items `string`

#### Output
* output `object`

### deleteNetworkSwitchQosRule
Delete a quality of service rule


```js
meraki.deleteNetworkSwitchQosRule({
  "networkId": "",
  "qosRuleId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qosRuleId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchQosRule
Return a quality of service rule


```js
meraki.getNetworkSwitchQosRule({
  "networkId": "",
  "qosRuleId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qosRuleId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchQosRule
Update a quality of service rule


```js
meraki.updateNetworkSwitchQosRule({
  "networkId": "",
  "qosRuleId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * qosRuleId **required** `string`
  * updateNetworkSwitchQosRule `object`
    * dscp `integer`: DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0.
    * dstPort `integer`: The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * dstPortRange `string`: The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * protocol `string` (values: ANY, TCP, UDP): The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY".
    * srcPort `integer`: The source port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * srcPortRange `string`: The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * vlan `integer`: The VLAN of the incoming packet. A null value will match any VLAN.

#### Output
* output `object`

### getNetworkSwitchRoutingMulticast
Return multicast settings for a network


```js
meraki.getNetworkSwitchRoutingMulticast({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchRoutingMulticast
Update multicast settings for a network


```js
meraki.updateNetworkSwitchRoutingMulticast({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchRoutingMulticast `object`
    * defaultSettings `object`: Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
      * floodUnknownMulticastTrafficEnabled `boolean`: Flood unknown multicast traffic setting for entire network
      * igmpSnoopingEnabled `boolean`: IGMP snooping setting for entire network
    * overrides `array`: Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.
      * items `object`
        * floodUnknownMulticastTrafficEnabled **required** `boolean`: Flood unknown multicast traffic setting for switches, switch stacks or switch profiles
        * igmpSnoopingEnabled **required** `boolean`: IGMP snooping setting for switches, switch stacks or switch profiles
        * stacks `array`: List of switch stack ids for non-template network
          * items `string`
        * switchProfiles `array`: List of switch profiles ids for template network
          * items `string`
        * switches `array`: List of switch serials for non-template network
          * items `string`

#### Output
* output `object`

### getNetworkSwitchRoutingMulticastRendezvousPoints
List multicast rendezvous points


```js
meraki.getNetworkSwitchRoutingMulticastRendezvousPoints({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchRoutingMulticastRendezvousPoint
Create a multicast rendezvous point


```js
meraki.createNetworkSwitchRoutingMulticastRendezvousPoint({
  "networkId": "",
  "createNetworkSwitchRoutingMulticastRendezvousPoint": {
    "interfaceIp": "",
    "multicastGroup": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchRoutingMulticastRendezvousPoint **required** `object`
    * interfaceIp **required** `string`: The IP address of the interface where the RP needs to be created.
    * multicastGroup **required** `string`: 'Any', or the IP address of a multicast group

#### Output
* output `object`

### deleteNetworkSwitchRoutingMulticastRendezvousPoint
Delete a multicast rendezvous point


```js
meraki.deleteNetworkSwitchRoutingMulticastRendezvousPoint({
  "networkId": "",
  "rendezvousPointId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rendezvousPointId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchRoutingMulticastRendezvousPoint
Return a multicast rendezvous point


```js
meraki.getNetworkSwitchRoutingMulticastRendezvousPoint({
  "networkId": "",
  "rendezvousPointId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rendezvousPointId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchRoutingMulticastRendezvousPoint
Update a multicast rendezvous point


```js
meraki.updateNetworkSwitchRoutingMulticastRendezvousPoint({
  "networkId": "",
  "rendezvousPointId": "",
  "updateNetworkSwitchRoutingMulticastRendezvousPoint": {
    "interfaceIp": "",
    "multicastGroup": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rendezvousPointId **required** `string`
  * updateNetworkSwitchRoutingMulticastRendezvousPoint **required** `object`
    * interfaceIp **required** `string`: The IP address of the interface to use
    * multicastGroup **required** `string`: 'Any', or the IP address of a multicast group

#### Output
* output `object`

### getNetworkSwitchRoutingOspf
Return layer 3 OSPF routing configuration


```js
meraki.getNetworkSwitchRoutingOspf({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchRoutingOspf
Update layer 3 OSPF routing configuration


```js
meraki.updateNetworkSwitchRoutingOspf({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchRoutingOspf `object`
    * areas `array`: OSPF areas
      * items `object`
        * areaId **required** `integer`: OSPF area ID
        * areaName **required** `string`: Name of the OSPF area
        * areaType **required** `string` (values: normal, stub, nssa): Area types in OSPF. Must be one of: ["normal", "stub", "nssa"]
    * deadTimerInSeconds `integer`: Time interval to determine when the peer will be declare inactive/dead. Value must be between 1 and 65535
    * enabled `boolean`: Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default.
    * helloTimerInSeconds `integer`: Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds
    * md5AuthenticationEnabled `boolean`: Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default.
    * md5AuthenticationKey `object`: MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
      * id `integer`: MD5 authentication key index. Key index must be between 1 to 255
      * passphrase `string`: MD5 authentication passphrase

#### Output
* output `object`

### getNetworkSwitchSettings
Returns the switch network settings


```js
meraki.getNetworkSwitchSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchSettings
Update switch network settings


```js
meraki.updateNetworkSwitchSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchSettings `object`
    * powerExceptions `array`: Exceptions on a per switch basis to "useCombinedPower"
      * items `object`
        * powerType **required** `string` (values: combined, redundant, useNetworkSetting): Per switch exception (combined, redundant, useNetworkSetting)
        * serial **required** `string`: Serial number of the switch
    * useCombinedPower `boolean`: The use Combined Power as the default behavior of secondary power supplies on supported devices.
    * vlan `integer`: Management VLAN

#### Output
* output `object`

### getNetworkSwitchStacks
List the switch stacks in a network


```js
meraki.getNetworkSwitchStacks({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkSwitchStack
Create a stack


```js
meraki.createNetworkSwitchStack({
  "networkId": "",
  "createNetworkSwitchStack": {
    "name": "",
    "serials": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkSwitchStack **required** `object`
    * name **required** `string`: The name of the new stack
    * serials **required** `array`: An array of switch serials to be added into the new stack
      * items `string`

#### Output
* output `object`

### deleteNetworkSwitchStack
Delete a stack


```js
meraki.deleteNetworkSwitchStack({
  "networkId": "",
  "switchStackId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchStack
Show a switch stack


```js
meraki.getNetworkSwitchStack({
  "networkId": "",
  "switchStackId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`

#### Output
* output `object`

### addNetworkSwitchStack
Add a switch to a stack


```js
meraki.addNetworkSwitchStack({
  "networkId": "",
  "switchStackId": "",
  "addNetworkSwitchStack": {
    "serial": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * addNetworkSwitchStack **required** `object`
    * serial **required** `string`: The serial of the switch to be added

#### Output
* output `object`

### removeNetworkSwitchStack
Remove a switch from a stack


```js
meraki.removeNetworkSwitchStack({
  "networkId": "",
  "switchStackId": "",
  "removeNetworkSwitchStack": {
    "serial": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * removeNetworkSwitchStack **required** `object`
    * serial **required** `string`: The serial of the switch to be removed

#### Output
* output `object`

### getNetworkSwitchStackRoutingInterfaces
List layer 3 interfaces for a switch stack


```js
meraki.getNetworkSwitchStackRoutingInterfaces({
  "networkId": "",
  "switchStackId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`

#### Output
* output `object`

### createNetworkSwitchStackRoutingInterface
Create a layer 3 interface for a switch stack


```js
meraki.createNetworkSwitchStackRoutingInterface({
  "networkId": "",
  "switchStackId": "",
  "createNetworkSwitchStackRoutingInterface": {
    "name": "",
    "subnet": "",
    "interfaceIp": "",
    "vlanId": 0
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * createNetworkSwitchStackRoutingInterface **required** `object`
    * defaultGateway `string`: The next hop for any traffic that isn't going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface.
    * interfaceIp **required** `string`: The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
    * multicastRouting `string` (values: disabled, enabled, IGMP snooping querier): Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'.
    * name **required** `string`: A friendly name or description for the interface or VLAN.
    * ospfSettings `object`: The OSPF routing settings of the interface.
      * area `string`: The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area. Defaults to 'disabled'.
      * cost `integer`: The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
      * isPassiveEnabled `boolean`: When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
    * subnet **required** `string`: The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
    * vlanId **required** `integer`: The VLAN this routed interface is on. VLAN must be between 1 and 4094.

#### Output
* output `object`

### deleteNetworkSwitchStackRoutingInterface
Delete a layer 3 interface from a switch stack


```js
meraki.deleteNetworkSwitchStackRoutingInterface({
  "networkId": "",
  "switchStackId": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * interfaceId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchStackRoutingInterface
Return a layer 3 interface from a switch stack


```js
meraki.getNetworkSwitchStackRoutingInterface({
  "networkId": "",
  "switchStackId": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * interfaceId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchStackRoutingInterface
Update a layer 3 interface for a switch stack


```js
meraki.updateNetworkSwitchStackRoutingInterface({
  "networkId": "",
  "switchStackId": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * interfaceId **required** `string`
  * updateNetworkSwitchStackRoutingInterface `object`
    * interfaceIp `string`: The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
    * multicastRouting `string` (values: disabled, enabled, IGMP snooping querier): Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
    * name `string`: A friendly name or description for the interface or VLAN.
    * ospfSettings `object`: The OSPF routing settings of the interface.
      * area `string`: The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area.
      * cost `integer`: The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
      * isPassiveEnabled `boolean`: When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
    * subnet `string`: The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
    * vlanId `integer`: The VLAN this routed interface is on. VLAN must be between 1 and 4094.

#### Output
* output `object`

### getNetworkSwitchStackRoutingInterfaceDhcp
Return a layer 3 interface DHCP configuration for a switch stack


```js
meraki.getNetworkSwitchStackRoutingInterfaceDhcp({
  "networkId": "",
  "switchStackId": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * interfaceId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchStackRoutingInterfaceDhcp
Update a layer 3 interface DHCP configuration for a switch stack


```js
meraki.updateNetworkSwitchStackRoutingInterfaceDhcp({
  "networkId": "",
  "switchStackId": "",
  "interfaceId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * interfaceId **required** `string`
  * updateNetworkSwitchStackRoutingInterfaceDhcp `object`
    * bootFileName `string`: The PXE boot server file name for the DHCP server running on the switch stack interface
    * bootNextServer `string`: The PXE boot server IP for the DHCP server running on the switch stack interface
    * bootOptionsEnabled `boolean`: Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch stack interface
    * dhcpLeaseTime `string` (values: 30 minutes, 1 hour, 4 hours, 12 hours, 1 day, 1 week): The DHCP lease time config for the dhcp server running on switch stack interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
    * dhcpMode `string` (values: dhcpDisabled, dhcpRelay, dhcpServer): The DHCP mode options for the switch stack interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
    * dhcpOptions `array`: Array of DHCP options consisting of code, type and value for the DHCP server running on the switch stack interface
      * items `object`
        * code **required** `string`: The code for DHCP option which should be from 2 to 254
        * type **required** `string` (values: text, ip, integer, hex): The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
        * value **required** `string`: The value of the DHCP option
    * dhcpRelayServerIps `array`: The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface
      * items `string`
    * dnsCustomNameservers `array`: The DHCP name server IPs when DHCP name server option is 'custom'
      * items `string`
    * dnsNameserversOption `string` (values: googlePublicDns, openDns, custom): The DHCP name server option for the dhcp server running on the switch stack interface ('googlePublicDns', 'openDns' or 'custom')
    * fixedIpAssignments `array`: Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface
      * items `object`
        * ip **required** `string`: The IP address of the client which has fixed IP address assigned to it
        * mac **required** `string`: The MAC address of the client which has fixed IP address
        * name **required** `string`: The name of the client which has fixed IP address
    * reservedIpRanges `array`: Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface
      * items `object`
        * comment `string`: The comment for the reserved IP range
        * end **required** `string`: The ending IP address of the reserved IP range
        * start **required** `string`: The starting IP address of the reserved IP range

#### Output
* output `object`

### getNetworkSwitchStackRoutingStaticRoutes
List layer 3 static routes for a switch stack


```js
meraki.getNetworkSwitchStackRoutingStaticRoutes({
  "networkId": "",
  "switchStackId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`

#### Output
* output `object`

### createNetworkSwitchStackRoutingStaticRoute
Create a layer 3 static route for a switch stack


```js
meraki.createNetworkSwitchStackRoutingStaticRoute({
  "networkId": "",
  "switchStackId": "",
  "createNetworkSwitchStackRoutingStaticRoute": {
    "subnet": "",
    "nextHopIp": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * createNetworkSwitchStackRoutingStaticRoute **required** `object`
    * advertiseViaOspfEnabled `boolean`: Option to advertise static route via OSPF
    * name `string`: Name or description for layer 3 static route
    * nextHopIp **required** `string`: IP address of the next hop device to which the device sends its traffic for the subnet
    * preferOverOspfRoutesEnabled `boolean`: Option to prefer static route over OSPF routes
    * subnet **required** `string`: The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)

#### Output
* output `object`

### deleteNetworkSwitchStackRoutingStaticRoute
Delete a layer 3 static route for a switch stack


```js
meraki.deleteNetworkSwitchStackRoutingStaticRoute({
  "networkId": "",
  "switchStackId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * staticRouteId **required** `string`

#### Output
*Output schema unknown*

### getNetworkSwitchStackRoutingStaticRoute
Return a layer 3 static route for a switch stack


```js
meraki.getNetworkSwitchStackRoutingStaticRoute({
  "networkId": "",
  "switchStackId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * staticRouteId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchStackRoutingStaticRoute
Update a layer 3 static route for a switch stack


```js
meraki.updateNetworkSwitchStackRoutingStaticRoute({
  "networkId": "",
  "switchStackId": "",
  "staticRouteId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * switchStackId **required** `string`
  * staticRouteId **required** `string`
  * updateNetworkSwitchStackRoutingStaticRoute `object`
    * advertiseViaOspfEnabled `boolean`: Option to advertise static route via OSPF
    * name `string`: Name or description for layer 3 static route
    * nextHopIp `string`: IP address of the next hop device to which the device sends its traffic for the subnet
    * preferOverOspfRoutesEnabled `boolean`: Option to prefer static route over OSPF routes
    * subnet `string`: The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)

#### Output
* output `object`

### getNetworkSwitchStormControl
Return the storm control configuration for a switch network


```js
meraki.getNetworkSwitchStormControl({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchStormControl
Update the storm control configuration for a switch network


```js
meraki.updateNetworkSwitchStormControl({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchStormControl `object`
    * broadcastThreshold `integer`: Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.
    * multicastThreshold `integer`: Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.
    * unknownUnicastThreshold `integer`: Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.

#### Output
* output `object`

### getNetworkSwitchStp
Returns STP settings


```js
meraki.getNetworkSwitchStp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSwitchStp
Updates STP settings


```js
meraki.updateNetworkSwitchStp({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSwitchStp `object`
    * rstpEnabled `boolean`: The spanning tree protocol status in network
    * stpBridgePriority `array`: STP bridge priority for switches/stacks or switch profiles. An empty array will clear the STP bridge priority settings.
      * items `object`
        * stacks `array`: List of stack IDs
          * items `string`
        * stpPriority **required** `integer`: STP priority for switch, stacks, or switch profiles
        * switchProfiles `array`: List of switch profile IDs
          * items `string`
        * switches `array`: List of switch serial numbers
          * items `string`

#### Output
* output `object`

### getNetworkSyslogServers
List the syslog servers for a network


```js
meraki.getNetworkSyslogServers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkSyslogServers
Update the syslog servers for a network


```js
meraki.updateNetworkSyslogServers({
  "networkId": "",
  "updateNetworkSyslogServers": {
    "servers": []
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkSyslogServers **required** `object`
    * servers **required** `array`: A list of the syslog servers for this network
      * items `object`
        * host **required** `string`: The IP address of the syslog server
        * port **required** `integer`: The port of the syslog server
        * roles **required** `array`: A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'
          * items `string`

#### Output
* output `object`

### getNetworkTraffic
Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.


```js
meraki.getNetworkTraffic({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
  * deviceType `string` (values: combined, wireless, switch, appliance): Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.

#### Output
* output `object`

### getNetworkTrafficAnalysis
Return the traffic analysis settings for a network


```js
meraki.getNetworkTrafficAnalysis({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkTrafficAnalysis
Update the traffic analysis settings for a network


```js
meraki.updateNetworkTrafficAnalysis({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkTrafficAnalysis `object`
    * customPieChartItems `array`: The list of items that make up the custom pie chart for traffic reporting.
      * items `object`
        * name **required** `string`: The name of the custom pie chart item.
        * type **required** `string` (values: host, port, ipRange):     The signature type for the custom pie chart item. Can be one of 'host', 'port' or 'ipRange'.
        * value **required** `string`:     The value of the custom pie chart item. Valid syntax depends on the signature type of the chart item
    * mode `string` (values: disabled, basic, detailed):     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),

#### Output
* output `object`

### getNetworkTrafficShapingApplicationCategories
Returns the application categories for traffic shaping rules.


```js
meraki.getNetworkTrafficShapingApplicationCategories({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkTrafficShapingDscpTaggingOptions
Returns the available DSCP tagging options for your traffic shaping rules.


```js
meraki.getNetworkTrafficShapingDscpTaggingOptions({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### unbindNetwork
Unbind a network from a template.


```js
meraki.unbindNetwork({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkWebhooksHttpServers
List the HTTP servers for a network


```js
meraki.getNetworkWebhooksHttpServers({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### createNetworkWebhooksHttpServer
Add an HTTP server to a network


```js
meraki.createNetworkWebhooksHttpServer({
  "networkId": "",
  "createNetworkWebhooksHttpServer": {
    "name": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkWebhooksHttpServer **required** `object`
    * name **required** `string`: A name for easy reference to the HTTP server
    * sharedSecret `string`: A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki.
    * url **required** `string`: The URL of the HTTP server

#### Output
* output `object`

### deleteNetworkWebhooksHttpServer
Delete an HTTP server from a network


```js
meraki.deleteNetworkWebhooksHttpServer({
  "networkId": "",
  "httpServerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * httpServerId **required** `string`

#### Output
*Output schema unknown*

### getNetworkWebhooksHttpServer
Return an HTTP server for a network


```js
meraki.getNetworkWebhooksHttpServer({
  "networkId": "",
  "httpServerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * httpServerId **required** `string`

#### Output
* output `object`

### updateNetworkWebhooksHttpServer
Update an HTTP server


```js
meraki.updateNetworkWebhooksHttpServer({
  "networkId": "",
  "httpServerId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * httpServerId **required** `string`
  * updateNetworkWebhooksHttpServer `object`
    * name `string`: A name for easy reference to the HTTP server
    * sharedSecret `string`: A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki.
    * url `string`: The URL of the HTTP server

#### Output
* output `object`

### createNetworkWebhooksWebhookTest
Send a test webhook for a network


```js
meraki.createNetworkWebhooksWebhookTest({
  "networkId": "",
  "createNetworkWebhooksWebhookTest": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkWebhooksWebhookTest **required** `object`
    * sharedSecret `string`: The shared secret the test webhook will send. Optional. Defaults to an empty string.
    * url **required** `string`: The URL where the test webhook will be sent

#### Output
* output `object`

### getNetworkWebhooksWebhookTest
Return the status of a webhook test for a network


```js
meraki.getNetworkWebhooksWebhookTest({
  "networkId": "",
  "webhookTestId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * webhookTestId **required** `string`

#### Output
* output `object`

### getNetworkWirelessAirMarshal
List Air Marshal scan results from a network


```js
meraki.getNetworkWirelessAirMarshal({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.

#### Output
* output `object`

### getNetworkWirelessAlternateManagementInterface
Return alternate management interface and devices with IP assigned


```js
meraki.getNetworkWirelessAlternateManagementInterface({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkWirelessAlternateManagementInterface
Update alternate management interface and device static IP


```js
meraki.updateNetworkWirelessAlternateManagementInterface({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkWirelessAlternateManagementInterface `object`
    * accessPoints `array`: Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put 'accessPoints' in the body when updating template networks. Also, an empty 'accessPoints' array will remove all previous static IP assignments
      * items `object`
        * alternateManagementIp **required** `string`: Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
        * dns1 `string`: Primary DNS must be in IP format
        * dns2 `string`: Optional secondary DNS must be in IP format
        * gateway `string`: Gateway must be in IP format
        * serial **required** `string`: Serial number of access point to be configured with alternate management IP
        * subnetMask `string`: Subnet mask must be in IP format
    * enabled `boolean`: Boolean value to enable or disable alternate management interface
    * protocols `array`: Can be one or more of the following values: 'radius', 'snmp', 'syslog' or 'ldap'
      * items `string` (values: radius, snmp, syslog, ldap)
    * vlanId `integer`: Alternate management interface VLAN, must be between 1 and 4094

#### Output
* output `object`

### getNetworkWirelessBluetoothSettings
Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.


```js
meraki.getNetworkWirelessBluetoothSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkWirelessBluetoothSettings
Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.


```js
meraki.updateNetworkWirelessBluetoothSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkWirelessBluetoothSettings `object`
    * advertisingEnabled `boolean`: Whether APs will advertise beacons. (true, false)
    * major `integer`: The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
    * majorMinorAssignmentMode `string` (values: Unique, Non-unique): The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
    * minor `integer`: The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
    * scanningEnabled `boolean`: Whether APs will scan for Bluetooth enabled clients. (true, false)
    * uuid `string`: The UUID to be used in the beacon identifier.

#### Output
* output `object`

### getNetworkWirelessChannelUtilizationHistory
Return AP channel utilization over time for a device or network client


```js
meraki.getNetworkWirelessChannelUtilizationHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history.
  * deviceSerial `string`: Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified.
  * apTag `string`: Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').

#### Output
* output `object`

### getNetworkWirelessClientCountHistory
Return wireless client counts over time for a network, device, or network client


```js
meraki.getNetworkWirelessClientCountHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client to return per-device client counts over time inner joined by the queried client's connection history.
  * deviceSerial `string`: Filter results by device.
  * apTag `string`: Filter results by AP tag.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssid `integer`: Filter results by SSID number.

#### Output
* output `object`

### getNetworkWirelessClientsConnectionStats
Aggregated connectivity info for this network, grouped by clients


```js
meraki.getNetworkWirelessClientsConnectionStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag

#### Output
* output `object`

### getNetworkWirelessClientsLatencyStats
Aggregated latency info for this network, grouped by clients


```js
meraki.getNetworkWirelessClientsLatencyStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * fields `string`: Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.

#### Output
* output `object`

### getNetworkWirelessClientConnectionStats
Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.


```js
meraki.getNetworkWirelessClientConnectionStats({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag

#### Output
* output `object`

### getNetworkWirelessClientConnectivityEvents
List the wireless connectivity events for a client within a network in the timespan.


```js
meraki.getNetworkWirelessClientConnectivityEvents({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  * types `array`: A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'.
  * includedSeverities `array`: A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssidNumber `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14): An SSID number to include. If not specified, events for all SSIDs will be returned.
  * deviceSerial `string`: Filter results by an AP's serial number.

#### Output
* output `object`

### getNetworkWirelessClientLatencyHistory
Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.


```js
meraki.getNetworkWirelessClientLatencyHistory({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.

#### Output
* output `object`

### getNetworkWirelessClientLatencyStats
Aggregated latency info for a given client on this network. Clients are identified by their MAC.


```js
meraki.getNetworkWirelessClientLatencyStats({
  "networkId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * clientId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * fields `string`: Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.

#### Output
* output `object`

### getNetworkWirelessConnectionStats
Aggregated connectivity info for this network


```js
meraki.getNetworkWirelessConnectionStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag

#### Output
* output `object`

### getNetworkWirelessDataRateHistory
Return PHY data rates over time for a network, device, or network client


```js
meraki.getNetworkWirelessDataRateHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client.
  * deviceSerial `string`: Filter results by device.
  * apTag `string`: Filter results by AP tag.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssid `integer`: Filter results by SSID number.

#### Output
* output `object`

### getNetworkWirelessDevicesConnectionStats
Aggregated connectivity info for this network, grouped by node


```js
meraki.getNetworkWirelessDevicesConnectionStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag

#### Output
* output `object`

### getNetworkWirelessDevicesLatencyStats
Aggregated latency info for this network, grouped by node


```js
meraki.getNetworkWirelessDevicesLatencyStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * fields `string`: Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.

#### Output
* output `object`

### getNetworkWirelessFailedConnections
List of all failed client connection events on this network in a given time range


```js
meraki.getNetworkWirelessFailedConnections({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * serial `string`: Filter by AP
  * clientId `string`: Filter by client MAC

#### Output
* output `object`

### getNetworkWirelessLatencyHistory
Return average wireless latency over time for a network, device, or network client


```js
meraki.getNetworkWirelessLatencyHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client.
  * deviceSerial `string`: Filter results by device.
  * apTag `string`: Filter results by AP tag.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssid `integer`: Filter results by SSID number.
  * accessCategory `string` (values: backgroundTraffic, bestEffortTraffic, videoTraffic, voiceTraffic): Filter by access category.

#### Output
* output `object`

### getNetworkWirelessLatencyStats
Aggregated latency info for this network


```js
meraki.getNetworkWirelessLatencyStats({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  * ssid `integer`: Filter results by SSID
  * vlan `integer`: Filter results by VLAN
  * apTag `string`: Filter results by AP Tag
  * fields `string`: Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.

#### Output
* output `object`

### getNetworkWirelessMeshStatuses
List wireless mesh statuses for repeaters


```js
meraki.getNetworkWirelessMeshStatuses({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 500. Default is 50.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getNetworkWirelessRfProfiles
List the non-basic RF profiles for this network


```js
meraki.getNetworkWirelessRfProfiles({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * includeTemplateProfiles `boolean`: If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.

#### Output
* output `object`

### createNetworkWirelessRfProfile
Creates new RF profile for this network


```js
meraki.createNetworkWirelessRfProfile({
  "networkId": "",
  "createNetworkWirelessRfProfile": {
    "name": "",
    "bandSelectionType": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * createNetworkWirelessRfProfile **required** `object`
    * apBandSettings `object`: Settings that will be enabled if selectionType is set to 'ap'.
      * bandOperationMode `string` (values: dual, 2.4ghz, 5ghz): Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.
      * bandSteeringEnabled `boolean`: Steers client to most open band. Can be either true or false. Defaults to true.
    * bandSelectionType **required** `string` (values: ssid, ap): Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
    * clientBalancingEnabled `boolean`: Steers client to best available access point. Can be either true or false. Defaults to true.
    * fiveGhzSettings `object`: Settings related to 5Ghz band
      * channelWidth `string`: Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto.
      * maxPower `integer`: Sets max power (dBm) of 5Ghz band. Can be integer between 8 and 30. Defaults to 30.
      * minBitrate `integer`: Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12.
      * minPower `integer`: Sets min power (dBm) of 5Ghz band. Can be integer between 8 and 30. Defaults to 8.
      * rxsop `integer`: The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
      * validAutoChannels `array`: Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165].
        * items `integer`
    * minBitrateType `string` (values: band, ssid): Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.
    * name **required** `string`: The name of the new profile. Must be unique. This param is required on creation.
    * twoFourGhzSettings `object`: Settings related to 2.4Ghz band
      * axEnabled `boolean`: Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
      * maxPower `integer`: Sets max power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. Defaults to 30.
      * minBitrate `number`: Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11.
      * minPower `integer`: Sets min power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. Defaults to 5.
      * rxsop `integer`: The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
      * validAutoChannels `array`: Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. Defaults to [1, 6, 11].
        * items `integer`

#### Output
* output `object`

### deleteNetworkWirelessRfProfile
Delete a RF Profile


```js
meraki.deleteNetworkWirelessRfProfile({
  "networkId": "",
  "rfProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rfProfileId **required** `string`

#### Output
*Output schema unknown*

### getNetworkWirelessRfProfile
Return a RF profile


```js
meraki.getNetworkWirelessRfProfile({
  "networkId": "",
  "rfProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rfProfileId **required** `string`

#### Output
* output `object`

### updateNetworkWirelessRfProfile
Updates specified RF profile for this network


```js
meraki.updateNetworkWirelessRfProfile({
  "networkId": "",
  "rfProfileId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * rfProfileId **required** `string`
  * updateNetworkWirelessRfProfile `object`
    * apBandSettings `object`: Settings that will be enabled if selectionType is set to 'ap'.
      * bandOperationMode `string` (values: dual, 2.4ghz, 5ghz): Choice between 'dual', '2.4ghz' or '5ghz'.
      * bandSteeringEnabled `boolean`: Steers client to most open band. Can be either true or false.
    * bandSelectionType `string` (values: ssid, ap): Band selection can be set to either 'ssid' or 'ap'.
    * clientBalancingEnabled `boolean`: Steers client to best available access point. Can be either true or false.
    * fiveGhzSettings `object`: Settings related to 5Ghz band
      * channelWidth `string`: Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'.
      * maxPower `integer`: Sets max power (dBm) of 5Ghz band. Can be integer between 8 and 30.
      * minBitrate `integer`: Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'.
      * minPower `integer`: Sets min power (dBm) of 5Ghz band. Can be integer between 8 and 30.
      * rxsop `integer`: The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
      * validAutoChannels `array`: Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.
        * items `integer`
    * minBitrateType `string` (values: band, ssid): Minimum bitrate can be set to either 'band' or 'ssid'.
    * name `string`: The name of the new profile. Must be unique.
    * twoFourGhzSettings `object`: Settings related to 2.4Ghz band
      * axEnabled `boolean`: Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering.
      * maxPower `integer`: Sets max power (dBm) of 2.4Ghz band. Can be integer between 5 and 30.
      * minBitrate `number`: Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
      * minPower `integer`: Sets min power (dBm) of 2.4Ghz band. Can be integer between 5 and 30.
      * rxsop `integer`: The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
      * validAutoChannels `array`: Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'.
        * items `integer`

#### Output
* output `object`

### getNetworkWirelessSettings
Return the wireless settings for a network


```js
meraki.getNetworkWirelessSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSettings
Update the wireless settings for a network


```js
meraki.updateNetworkWirelessSettings({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * updateNetworkWirelessSettings `object`
    * ipv6BridgeEnabled `boolean`: Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)
    * ledLightsOn `boolean`: Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)
    * locationAnalyticsEnabled `boolean`: Toggle for enabling or disabling location analytics for your network
    * meshingEnabled `boolean`: Toggle for enabling or disabling meshing in a network
    * upgradeStrategy `string` (values: minimizeUpgradeTime, minimizeClientDowntime): The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'

#### Output
* output `object`

### getNetworkWirelessSignalQualityHistory
Return signal quality (SNR/RSSI) over time for a device or network client


```js
meraki.getNetworkWirelessSignalQualityHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client.
  * deviceSerial `string`: Filter results by device.
  * apTag `string`: Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssid `integer`: Filter results by SSID number.

#### Output
* output `object`

### getNetworkWirelessSsids
List the MR SSIDs in a network


```js
meraki.getNetworkWirelessSsids({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`

#### Output
* output `object`

### getNetworkWirelessSsid
Return a single MR SSID


```js
meraki.getNetworkWirelessSsid({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsid
Update the attributes of an MR SSID


```js
meraki.updateNetworkWirelessSsid({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * updateNetworkWirelessSsid `object`
    * apTagsAndVlanIds `array`: The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
      * items `object`
        * tags `array`: Array of AP tags
          * items `string`
        * vlanId `integer`: Numerical identifier that is assigned to the VLAN
    * authMode `string` (values: open, psk, open-with-radius, 8021x-meraki, 8021x-radius, ipsk-with-radius, ipsk-without-radius): The association control method for the SSID ('open', 'psk', 'open-with-radius', '8021x-meraki', '8021x-radius', 'ipsk-with-radius' or 'ipsk-without-radius')
    * availabilityTags `array`: Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.
      * items `string`
    * availableOnAllAps `boolean`: Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.
    * bandSelection `string`: The client-serving radio frequencies. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')
    * concentratorNetworkId `string`: The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'.
    * defaultVlanId `integer`: The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
    * dot11r `object`: The current setting for 802.11r
      * adaptive `boolean`: (Optional) Whether 802.11r is adaptive or not.
      * enabled `boolean`: Whether 802.11r is enabled or not.
    * dot11w `object`: The current setting for Protected Management Frames (802.11w).
      * enabled `boolean`: Whether 802.11w is enabled or not.
      * required `boolean`: (Optional) Whether 802.11w is required or not.
    * enabled `boolean`: Whether or not the SSID is enabled
    * encryptionMode `string` (values: wep, wpa): The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'
    * enterpriseAdminAccess `string` (values: access disabled, access enabled): Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')
    * ipAssignmentMode `string`: The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Layer 3 roaming with a concentrator' or 'VPN')
    * lanIsolationEnabled `boolean`: Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.
    * mandatoryDhcpEnabled `boolean`: If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won’t be able to associate.
    * minBitrate `number`: The minimum bitrate in Mbps. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')
    * name `string`: The name of the SSID
    * perClientBandwidthLimitDown `integer`: The download bandwidth limit in Kbps. (0 represents no limit.)
    * perClientBandwidthLimitUp `integer`: The upload bandwidth limit in Kbps. (0 represents no limit.)
    * perSsidBandwidthLimitDown `integer`: The total download bandwidth limit in Kbps. (0 represents no limit.)
    * perSsidBandwidthLimitUp `integer`: The total upload bandwidth limit in Kbps. (0 represents no limit.)
    * psk `string`: The passkey for the SSID. This param is only valid if the authMode is 'psk'
    * radiusAccountingEnabled `boolean`: Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
    * radiusAccountingServers `array`: The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'
      * items `object`
        * host **required** `string`: IP address to which the APs will send RADIUS accounting messages
        * port `integer`: Port on the RADIUS server that is listening for accounting messages
        * secret `string`: Shared key used to authenticate messages between the APs and RADIUS server
    * radiusAttributeForGroupPolicies `string` (values: Filter-Id, Reply-Message, Airespace-ACL-Name, Aruba-User-Role): Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message
    * radiusCoaEnabled `boolean`: If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.
    * radiusFailoverPolicy `string` (values: Deny access, Allow access): This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')
    * radiusGuestVlanEnabled `boolean`: Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode
    * radiusGuestVlanId `integer`: VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode
    * radiusLoadBalancingPolicy `string` (values: Strict priority order, Round robin): This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')
    * radiusOverride `boolean`: If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.
    * radiusProxyEnabled `boolean`: If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers.
    * radiusServers `array`: The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
      * items `object`
        * host **required** `string`: IP address of your RADIUS server
        * port `integer`: UDP port the RADIUS server listens on for Access-requests
        * secret `string`: RADIUS client shared secret
    * radiusTestingEnabled `boolean`: If true, Meraki devices will periodically send Access-Request messages to configured RADIUS servers using identity 'meraki_8021x_test' to ensure that the RADIUS servers are reachable.
    * splashPage `string` (values: None, Click-through splash page, Billing, Password-protected with Meraki RADIUS, Password-protected with custom RADIUS, Password-protected with Active Directory, Password-protected with LDAP, SMS authentication, Systems Manager Sentry, Facebook Wi-Fi, Google OAuth, Sponsored guest, Cisco ISE): The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest' or 'Cisco ISE'). This attribute is not supported for template children.
    * useVlanTagging `boolean`: Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
    * visible `boolean`: Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true
    * vlanId `integer`: The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'
    * walledGardenEnabled `boolean`: Allow access to a configurable list of IP ranges, which users may access prior to sign-on.
    * walledGardenRanges `array`: Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. '192.168.1.1/24', '192.168.37.10/32', 'www.yahoo.com', '*.google.com']). Meraki's splash page is automatically included in your walled garden.
      * items `string`
    * wpaEncryptionMode `string` (values: WPA1 only, WPA1 and WPA2, WPA2 only, WPA3 Transition Mode, WPA3 only): The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')

#### Output
* output `object`

### getNetworkWirelessSsidFirewallL3FirewallRules
Return the L3 firewall rules for an SSID on an MR network


```js
meraki.getNetworkWirelessSsidFirewallL3FirewallRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsidFirewallL3FirewallRules
Update the L3 firewall rules of an SSID on an MR network


```js
meraki.updateNetworkWirelessSsidFirewallL3FirewallRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * updateNetworkWirelessSsidFirewallL3FirewallRules `object`
    * allowLanAccess `boolean`: Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)
    * rules `array`: An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)
      * items `object`
        * comment `string`: Description of the rule (optional)
        * destCidr **required** `string`: Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
        * destPort `string`: Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule
        * protocol **required** `string` (values: tcp, udp, icmp, any): The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')

#### Output
* output `object`

### getNetworkWirelessSsidFirewallL7FirewallRules
Return the L7 firewall rules for an SSID on an MR network


```js
meraki.getNetworkWirelessSsidFirewallL7FirewallRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsidFirewallL7FirewallRules
Update the L7 firewall rules of an SSID on an MR network


```js
meraki.updateNetworkWirelessSsidFirewallL7FirewallRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * updateNetworkWirelessSsidFirewallL7FirewallRules `object`
    * rules `array`: An array of L7 firewall rules for this SSID. Rules will get applied in the same order user has specified in request. Empty array will clear the L7 firewall rule configuration.
      * items `object`
        * policy `string` (values: deny): 'Deny' traffic specified by this rule
        * type `string` (values: application, applicationCategory, host, port, ipRange): Type of the L7 firewall rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
        * value `string`: The value of what needs to get blocked. Format of the value varies depending on type of the firewall rule selected.

#### Output
* output `object`

### getNetworkWirelessSsidIdentityPsks
List all Identity PSKs in a wireless network


```js
meraki.getNetworkWirelessSsidIdentityPsks({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### createNetworkWirelessSsidIdentityPsk
Create an Identity PSK


```js
meraki.createNetworkWirelessSsidIdentityPsk({
  "networkId": "",
  "number": "",
  "createNetworkWirelessSsidIdentityPsk": {
    "name": "",
    "passphrase": "",
    "groupPolicyId": ""
  }
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * createNetworkWirelessSsidIdentityPsk **required** `object`
    * groupPolicyId **required** `string`: The group policy to be applied to clients
    * name **required** `string`: The name of the Identity PSK
    * passphrase **required** `string`: The passphrase for client authentication

#### Output
* output `object`

### deleteNetworkWirelessSsidIdentityPsk
Delete an Identity PSK


```js
meraki.deleteNetworkWirelessSsidIdentityPsk({
  "networkId": "",
  "number": "",
  "identityPskId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * identityPskId **required** `string`

#### Output
*Output schema unknown*

### getNetworkWirelessSsidIdentityPsk
Return an Identity PSK


```js
meraki.getNetworkWirelessSsidIdentityPsk({
  "networkId": "",
  "number": "",
  "identityPskId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * identityPskId **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsidIdentityPsk
Update an Identity PSK


```js
meraki.updateNetworkWirelessSsidIdentityPsk({
  "networkId": "",
  "number": "",
  "identityPskId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * identityPskId **required** `string`
  * updateNetworkWirelessSsidIdentityPsk `object`
    * groupPolicyId `string`: The group policy to be applied to clients
    * name `string`: The name of the Identity PSK
    * passphrase `string`: The passphrase for client authentication

#### Output
* output `object`

### getNetworkWirelessSsidSplashSettings
Display the splash page settings for the given SSID


```js
meraki.getNetworkWirelessSsidSplashSettings({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsidSplashSettings
Modify the splash page settings for the given SSID


```js
meraki.updateNetworkWirelessSsidSplashSettings({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * updateNetworkWirelessSsidSplashSettings `object`
    * redirectUrl `string`: The custom redirect URL where the users will go after the splash page.
    * splashImage `object`: The image used in the splash page.
      * extension `string`: The extension of the image file.
      * md5 `string`: The MD5 value of the image file. Setting this to null will remove the image from the splash page.
    * splashLogo `object`: The logo used in the splash page.
      * extension `string`: The extension of the logo file.
      * md5 `string`: The MD5 value of the logo file. Setting this to null will remove the logo from the splash page.
    * splashPrepaidFront `object`: The prepaid front image used in the splash page.
      * extension `string`: The extension of the prepaid front image file.
      * md5 `string`: The MD5 value of the prepaid front image file. Setting this to null will remove the prepaid front from the splash page.
    * splashTimeout `integer`: Splash timeout in minutes. This will determine how often users will see the splash page.
    * splashUrl `string`: [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'
    * useRedirectUrl `boolean`: The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true.
    * useSplashUrl `boolean`: [optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.
    * welcomeMessage `string`: The welcome message for the users on the splash page.

#### Output
* output `object`

### getNetworkWirelessSsidTrafficShapingRules
Display the traffic shaping settings for a SSID on an MR network


```js
meraki.getNetworkWirelessSsidTrafficShapingRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`

#### Output
* output `object`

### updateNetworkWirelessSsidTrafficShapingRules
Update the traffic shaping settings for an SSID on an MR network


```js
meraki.updateNetworkWirelessSsidTrafficShapingRules({
  "networkId": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * number **required** `string`
  * updateNetworkWirelessSsidTrafficShapingRules `object`
    * defaultRulesEnabled `boolean`: Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network's traffic shaping page. Note that default rules count against the rule limit of 8.
    * rules `array`:     An array of traffic shaping rules. Rules are applied in the order that
      * items `object`
        * definitions **required** `array`:     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
          * items `object`
        * dscpTagValue `integer`:     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
        * pcpTagValue `integer`:     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
        * perClientBandwidthLimits `object`:     An object describing the bandwidth settings for your rule.
          * bandwidthLimits `object`: The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
          * settings `string`: How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
    * trafficShapingEnabled `boolean`: Whether traffic shaping rules are applied to clients on your SSID.

#### Output
* output `object`

### getNetworkWirelessUsageHistory
Return AP usage over time for a device or network client


```js
meraki.getNetworkWirelessUsageHistory({
  "networkId": ""
}, context)
```

#### Input
* input `object`
  * networkId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  * resolution `integer`: The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  * autoResolution `boolean`: Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  * clientId `string`: Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history.
  * deviceSerial `string`: Filter results by device. Requires :band.
  * apTag `string`: Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified.
  * band `string` (values: 2.4, 5): Filter results by band (either '2.4' or '5').
  * ssid `integer`: Filter results by SSID number.

#### Output
* output `object`

### getOrganizations
List the organizations that the user has privileges on


```js
meraki.getOrganizations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### createOrganization
Create a new organization


```js
meraki.createOrganization({
  "createOrganization": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * createOrganization **required** `object`
    * name **required** `string`: The name of the organization

#### Output
* output `object`

### deleteOrganization
Delete an organization


```js
meraki.deleteOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
*Output schema unknown*

### getOrganization
Return an organization


```js
meraki.getOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganization
Update an organization


```js
meraki.updateOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganization `object`
    * name `string`: The name of the organization

#### Output
* output `object`

### getOrganizationActionBatches
Return the list of action batches in the organization


```js
meraki.getOrganizationActionBatches({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * status `string` (values: pending, completed, failed): Filter batches by status. Valid types are pending, completed, and failed.

#### Output
* output `object`

### createOrganizationActionBatch
Create an action batch


```js
meraki.createOrganizationActionBatch({
  "organizationId": "",
  "createOrganizationActionBatch": {
    "actions": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationActionBatch **required** `object`
    * actions **required** `array`: A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
      * items `object`
        * body `object`: The body of the action
        * operation **required** `string`: The operation to be used
        * resource **required** `string`: Unique identifier for the resource to be acted on
    * confirmed `boolean`: Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.
    * synchronous `boolean`: Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.

#### Output
* output `object`

### deleteOrganizationActionBatch
Delete an action batch


```js
meraki.deleteOrganizationActionBatch({
  "organizationId": "",
  "actionBatchId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * actionBatchId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationActionBatch
Return an action batch


```js
meraki.getOrganizationActionBatch({
  "organizationId": "",
  "actionBatchId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * actionBatchId **required** `string`

#### Output
* output `object`

### updateOrganizationActionBatch
Update an action batch


```js
meraki.updateOrganizationActionBatch({
  "organizationId": "",
  "actionBatchId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * actionBatchId **required** `string`
  * updateOrganizationActionBatch `object`
    * confirmed `boolean`: A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.
    * synchronous `boolean`: Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.

#### Output
* output `object`

### getOrganizationAdmins
List the dashboard administrators in this organization


```js
meraki.getOrganizationAdmins({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationAdmin
Create a new dashboard administrator


```js
meraki.createOrganizationAdmin({
  "organizationId": "",
  "createOrganizationAdmin": {
    "email": "",
    "name": "",
    "orgAccess": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationAdmin **required** `object`
    * authenticationMethod `string` (values: Email, Cisco SecureX Sign-On): The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication
    * email **required** `string`: The email of the dashboard administrator. This attribute can not be updated.
    * name **required** `string`: The name of the dashboard administrator
    * networks `array`: The list of networks that the dashboard administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the dashboard administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * id **required** `string`: The network ID
    * orgAccess **required** `string` (values: full, read-only, enterprise, none): The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
    * tags `array`: The list of tags that the dashboard administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the dashboard administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * tag **required** `string`: The name of the tag

#### Output
* output `object`

### deleteOrganizationAdmin
Revoke all access for a dashboard administrator within this organization


```js
meraki.deleteOrganizationAdmin({
  "organizationId": "",
  "adminId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * adminId **required** `string`

#### Output
*Output schema unknown*

### updateOrganizationAdmin
Update an administrator


```js
meraki.updateOrganizationAdmin({
  "organizationId": "",
  "adminId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * adminId **required** `string`
  * updateOrganizationAdmin `object`
    * name `string`: The name of the dashboard administrator
    * networks `array`: The list of networks that the dashboard administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the dashboard administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * id **required** `string`: The network ID
    * orgAccess `string` (values: full, read-only, enterprise, none): The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
    * tags `array`: The list of tags that the dashboard administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the dashboard administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * tag **required** `string`: The name of the tag

#### Output
* output `object`

### getOrganizationApiRequests
List the API requests made by an organization


```js
meraki.getOrganizationApiRequests({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * adminId `string`: Filter the results by the ID of the admin who made the API requests
  * path `string`: Filter the results by the path of the API requests
  * method `string`: Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
  * responseCode `integer`: Filter the results by the response code of the API requests
  * sourceIp `string`: Filter the results by the IP address of the originating API request

#### Output
* output `object`

### getOrganizationApiRequestsOverview
Return an aggregated overview of API requests data


```js
meraki.getOrganizationApiRequestsOverview({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.

#### Output
* output `object`

### getOrganizationApplianceSecurityEvents
List the security events for an organization


```js
meraki.getOrganizationApplianceSecurityEvents({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * sortOrder `string` (values: ascending, descending): Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.

#### Output
* output `object`

### getOrganizationApplianceSecurityIntrusion
Returns all supported intrusion settings for an organization


```js
meraki.getOrganizationApplianceSecurityIntrusion({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationApplianceSecurityIntrusion
Sets supported intrusion settings for an organization


```js
meraki.updateOrganizationApplianceSecurityIntrusion({
  "organizationId": "",
  "updateOrganizationApplianceSecurityIntrusion": {
    "allowedRules": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationApplianceSecurityIntrusion **required** `object`
    * allowedRules **required** `array`: Sets a list of specific SNORT® signatures to allow
      * items `object`
        * message `string`: Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET
        * ruleId **required** `string`: A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents

#### Output
* output `object`

### getOrganizationApplianceUplinkStatuses
List the uplink status of every Meraki MX and Z series appliances in the organization


```js
meraki.getOrganizationApplianceUplinkStatuses({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getOrganizationApplianceVpnStats
Show VPN history stat for networks in an organization


```js
meraki.getOrganizationApplianceVpnStats({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * networkIds `array`: A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.

#### Output
* output `object`

### getOrganizationApplianceVpnStatuses
Show VPN status for networks in an organization


```js
meraki.getOrganizationApplianceVpnStatuses({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * networkIds `array`: A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456

#### Output
* output `object`

### getOrganizationApplianceVpnThirdPartyVPNPeers
Return the third party VPN peers for an organization


```js
meraki.getOrganizationApplianceVpnThirdPartyVPNPeers({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationApplianceVpnThirdPartyVPNPeers
Update the third party VPN peers for an organization


```js
meraki.updateOrganizationApplianceVpnThirdPartyVPNPeers({
  "organizationId": "",
  "updateOrganizationApplianceVpnThirdPartyVPNPeers": {
    "peers": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationApplianceVpnThirdPartyVPNPeers **required** `object`
    * peers **required** `array`: The list of VPN peers
      * items `object`
        * ikeVersion `string` (values: 1, 2): [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
        * ipsecPolicies `object`: Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
          * childAuthAlgo `array`: This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
          * childCipherAlgo `array`: This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'
          * childLifetime `integer`: The lifetime of the Phase 2 SA in seconds.
          * childPfsGroup `array`: This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1'
          * ikeAuthAlgo `array`: This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
          * ikeCipherAlgo `array`: This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'
          * ikeDiffieHellmanGroup `array`: This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1'
          * ikeLifetime `integer`: The lifetime of the Phase 1 SA in seconds.
          * ikePrfAlgo `array`: [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm.
        * ipsecPoliciesPreset `string`: One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.
        * name **required** `string`: The name of the VPN peer
        * networkTags `array`: A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all'].
          * items `string`
        * privateSubnets **required** `array`: The list of the private subnets of the VPN peer
          * items `string`
        * publicIp **required** `string`: The public IP of the VPN peer
        * remoteId `string`: [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.
        * secret **required** `string`: The shared secret with the VPN peer

#### Output
* output `object`

### getOrganizationApplianceVpnVpnFirewallRules
Return the firewall rules for an organization's site-to-site VPN


```js
meraki.getOrganizationApplianceVpnVpnFirewallRules({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationApplianceVpnVpnFirewallRules
Update the firewall rules of an organization's site-to-site VPN


```js
meraki.updateOrganizationApplianceVpnVpnFirewallRules({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationApplianceVpnVpnFirewallRules `object`
    * rules `array`: An ordered array of the firewall rules (not including the default rule)
      * items `object`
        * comment `string`: Description of the rule (optional)
        * destCidr **required** `string`: Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)
        * destPort `string`: Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
        * policy **required** `string` (values: allow, deny): 'allow' or 'deny' traffic specified by this rule
        * protocol **required** `string` (values: tcp, udp, icmp, any): The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
        * srcCidr **required** `string`: Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)
        * srcPort `string`: Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
        * syslogEnabled `boolean`: Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
    * syslogDefaultRule `boolean`: Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)

#### Output
* output `object`

### getOrganizationBrandingPolicies
List the branding policies of an organization


```js
meraki.getOrganizationBrandingPolicies({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationBrandingPolicy
Add a new branding policy to an organization


```js
meraki.createOrganizationBrandingPolicy({
  "organizationId": "",
  "createOrganizationBrandingPolicy": {
    "name": "",
    "enabled": true,
    "adminSettings": {}
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationBrandingPolicy **required** `object`
    * adminSettings **required** `object`: Settings for describing which kinds of admins this policy applies to.
      * appliesTo `string` (values: All organization admins, All enterprise admins, All network admins, All admins of networks..., All admins of networks tagged..., Specific admins..., All admins, All SAML admins): Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
      * values `array`:     If 'appliesTo' is set to one of 'Specific admins...', 'All admins of networks...' or 'All admins of networks tagged...', then you must specify this 'values' property to provide the set of
        * items `string`
    * enabled **required** `boolean`: Boolean indicating whether this policy is enabled.
    * helpSettings `object`:     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
      * apiDocsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
      * casesSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
      * ciscoMerakiProductDocumentation `string`:     The 'Product Manuals' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * communitySubtab `string` (values: default or inherit, hide, show):     The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'.
      * dataProtectionRequestsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
      * firewallInfoSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
      * getHelpSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
      * getHelpSubtabKnowledgeBaseSearch `string`:     The KB search box which appears on the Help page. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * hardwareReplacementsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of
      * helpTab `string` (values: default or inherit, hide, show):     The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
      * newFeaturesSubtab `string` (values: default or inherit, hide, show):     The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
      * smForums `string` (values: default or inherit, hide, show):     The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
      * supportContactInfo `string`:     The 'Contact Meraki Support' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * universalSearchKnowledgeBaseSearch `string` (values: default or inherit, hide, show):     The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures
    * name **required** `string`: Name of the Dashboard branding policy.

#### Output
* output `object`

### getOrganizationBrandingPoliciesPriorities
Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).


```js
meraki.getOrganizationBrandingPoliciesPriorities({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationBrandingPoliciesPriorities
Update the priority ordering of an organization's branding policies.


```js
meraki.updateOrganizationBrandingPoliciesPriorities({
  "organizationId": "",
  "updateOrganizationBrandingPoliciesPriorities": {
    "brandingPolicyIds": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationBrandingPoliciesPriorities **required** `object`
    * brandingPolicyIds **required** `array`: A list of branding policy IDs arranged in ascending priority order (IDs later in the array have higher priority).
      * items `string`

#### Output
* output `object`

### deleteOrganizationBrandingPolicy
Delete a branding policy


```js
meraki.deleteOrganizationBrandingPolicy({
  "organizationId": "",
  "brandingPolicyId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * brandingPolicyId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationBrandingPolicy
Return a branding policy


```js
meraki.getOrganizationBrandingPolicy({
  "organizationId": "",
  "brandingPolicyId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * brandingPolicyId **required** `string`

#### Output
* output `object`

### updateOrganizationBrandingPolicy
Update a branding policy


```js
meraki.updateOrganizationBrandingPolicy({
  "organizationId": "",
  "brandingPolicyId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * brandingPolicyId **required** `string`
  * updateOrganizationBrandingPolicy `object`
    * adminSettings `object`: Settings for describing which kinds of admins this policy applies to.
      * appliesTo `string` (values: All organization admins, All enterprise admins, All network admins, All admins of networks..., All admins of networks tagged..., Specific admins..., All admins, All SAML admins): Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
      * values `array`:     If 'appliesTo' is set to one of 'Specific admins...', 'All admins of networks...' or 'All admins of networks tagged...', then you must specify this 'values' property to provide the set of
        * items `string`
    * enabled `boolean`: Boolean indicating whether this policy is enabled.
    * helpSettings `object`:     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
      * apiDocsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
      * casesSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
      * ciscoMerakiProductDocumentation `string`:     The 'Product Manuals' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * communitySubtab `string` (values: default or inherit, hide, show):     The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'.
      * dataProtectionRequestsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
      * firewallInfoSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
      * getHelpSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
      * getHelpSubtabKnowledgeBaseSearch `string`:     The KB search box which appears on the Help page. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * hardwareReplacementsSubtab `string` (values: default or inherit, hide, show):     The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of
      * helpTab `string` (values: default or inherit, hide, show):     The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
      * newFeaturesSubtab `string` (values: default or inherit, hide, show):     The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
      * smForums `string` (values: default or inherit, hide, show):     The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
      * supportContactInfo `string`:     The 'Contact Meraki Support' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
      * universalSearchKnowledgeBaseSearch `string` (values: default or inherit, hide, show):     The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures
    * name `string`: Name of the Dashboard branding policy.

#### Output
* output `object`

### claimIntoOrganization
Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.


```js
meraki.claimIntoOrganization({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * claimIntoOrganization `object`
    * licenses `array`: The licenses that should be claimed
      * items `object`
        * key **required** `string`: The key of the license
        * mode `string` (values: addDevices, renew): Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled.
    * orders `array`: The numbers of the orders that should be claimed
      * items `string`
    * serials `array`: The serials of the devices that should be claimed
      * items `string`

#### Output
* output `object`

### cloneOrganization
Create a new organization by cloning the addressed organization


```js
meraki.cloneOrganization({
  "organizationId": "",
  "cloneOrganization": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * cloneOrganization **required** `object`
    * name **required** `string`: The name of the new organization

#### Output
* output `object`

### getOrganizationConfigTemplates
List the configuration templates for this organization


```js
meraki.getOrganizationConfigTemplates({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationConfigTemplate
Create a new configuration template


```js
meraki.createOrganizationConfigTemplate({
  "organizationId": "",
  "createOrganizationConfigTemplate": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationConfigTemplate **required** `object`
    * copyFromNetworkId `string`: The ID of the network or config template to copy configuration from
    * name **required** `string`: The name of the configuration template
    * timeZone `string`: The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article</a>. Not applicable if copying from existing network or template

#### Output
* output `object`

### deleteOrganizationConfigTemplate
Remove a configuration template


```js
meraki.deleteOrganizationConfigTemplate({
  "organizationId": "",
  "configTemplateId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationConfigTemplate
Return a single configuration template


```js
meraki.getOrganizationConfigTemplate({
  "organizationId": "",
  "configTemplateId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`

#### Output
* output `object`

### updateOrganizationConfigTemplate
Update a configuration template


```js
meraki.updateOrganizationConfigTemplate({
  "organizationId": "",
  "configTemplateId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`
  * updateOrganizationConfigTemplate `object`
    * name `string`: The name of the configuration template
    * timeZone `string`: The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>

#### Output
* output `object`

### getOrganizationConfigTemplateSwitchProfiles
List the switch profiles for your switch template configuration


```js
meraki.getOrganizationConfigTemplateSwitchProfiles({
  "organizationId": "",
  "configTemplateId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`

#### Output
* output `object`

### getOrganizationConfigTemplateSwitchProfilePorts
Return all the ports of a switch profile


```js
meraki.getOrganizationConfigTemplateSwitchProfilePorts({
  "organizationId": "",
  "configTemplateId": "",
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`
  * profileId **required** `string`

#### Output
* output `object`

### getOrganizationConfigTemplateSwitchProfilePort
Return a switch profile port


```js
meraki.getOrganizationConfigTemplateSwitchProfilePort({
  "organizationId": "",
  "configTemplateId": "",
  "profileId": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`
  * profileId **required** `string`
  * portId **required** `string`

#### Output
* output `object`

### updateOrganizationConfigTemplateSwitchProfilePort
Update a switch profile port


```js
meraki.updateOrganizationConfigTemplateSwitchProfilePort({
  "organizationId": "",
  "configTemplateId": "",
  "profileId": "",
  "portId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId **required** `string`
  * profileId **required** `string`
  * portId **required** `string`
  * updateOrganizationConfigTemplateSwitchProfilePort `object`
    * accessPolicyNumber `integer`: The number of a custom access policy to configure on the switch profile port. Only applicable when 'accessPolicyType' is 'Custom access policy'
    * accessPolicyType `string` (values: Open, Custom access policy, MAC allow list, Sticky MAC allow list): The type of the access policy of the switch profile port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'
    * allowedVlans `string`: The VLANs allowed on the switch profile port. Only applicable to trunk ports
    * enabled `boolean`: The status of the switch profile port
    * flexibleStackingEnabled `boolean`: For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
    * isolationEnabled `boolean`: The isolation status of the switch profile port
    * linkNegotiation `string`: The link speed for the switch profile port
    * macAllowList `array`: Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'
      * items `string`
    * name `string`: The name of the switch profile port
    * poeEnabled `boolean`: The PoE status of the switch profile port
    * portScheduleId `string`: The ID of the port schedule. A value of null will clear the port schedule.
    * rstpEnabled `boolean`: The rapid spanning tree protocol status
    * stickyMacAllowList `array`: The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
      * items `string`
    * stickyMacAllowListLimit `integer`: The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
    * stormControlEnabled `boolean`: The storm control status of the switch profile port
    * stpGuard `string` (values: disabled, root guard, bpdu guard, loop guard): The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')
    * tags `array`: The list of tags of the switch profile port
      * items `string`
    * type `string` (values: trunk, access): The type of the switch profile port ('trunk' or 'access')
    * udld `string` (values: Alert only, Enforce): The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
    * vlan `integer`: The VLAN of the switch profile port. A null value will clear the value set for trunk ports.
    * voiceVlan `integer`: The voice VLAN of the switch profile port. Only applicable to access ports

#### Output
* output `object`

### getOrganizationConfigurationChanges
View the Change Log for your organization


```js
meraki.getOrganizationConfigurationChanges({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * networkId `string`: Filters on the given network
  * adminId `string`: Filters on the given Admin

#### Output
* output `object`

### getOrganizationDevices
List the devices in an organization


```js
meraki.getOrganizationDevices({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * configurationUpdatedAfter `string`: Filter results by whether or not the device's configuration has been updated after the given timestamp

#### Output
* output `object`

### getOrganizationDevicesStatuses
List the status of every Meraki device in the organization


```js
meraki.getOrganizationDevicesStatuses({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### getOrganizationDevicesUplinksLossAndLatency
Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago


```js
meraki.getOrganizationDevicesUplinksLossAndLatency({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.
  * uplink `string` (values: wan1, wan2, cellular): Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
  * ip `string`: Optional filter for a specific destination IP. Default will return all destination IPs.

#### Output
* output `object`

### getOrganizationInsightMonitoredMediaServers
List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.


```js
meraki.getOrganizationInsightMonitoredMediaServers({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationInsightMonitoredMediaServer
Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.


```js
meraki.createOrganizationInsightMonitoredMediaServer({
  "organizationId": "",
  "createOrganizationInsightMonitoredMediaServer": {
    "name": "",
    "address": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationInsightMonitoredMediaServer **required** `object`
    * address **required** `string`: The IP address (IPv4 only) or hostname of the media server to monitor
    * bestEffortMonitoringEnabled `boolean`: Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead.
    * name **required** `string`: The name of the VoIP provider

#### Output
* output `object`

### deleteOrganizationInsightMonitoredMediaServer
Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.


```js
meraki.deleteOrganizationInsightMonitoredMediaServer({
  "organizationId": "",
  "monitoredMediaServerId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * monitoredMediaServerId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationInsightMonitoredMediaServer
Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.


```js
meraki.getOrganizationInsightMonitoredMediaServer({
  "organizationId": "",
  "monitoredMediaServerId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * monitoredMediaServerId **required** `string`

#### Output
* output `object`

### updateOrganizationInsightMonitoredMediaServer
Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.


```js
meraki.updateOrganizationInsightMonitoredMediaServer({
  "organizationId": "",
  "monitoredMediaServerId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * monitoredMediaServerId **required** `string`
  * updateOrganizationInsightMonitoredMediaServer `object`
    * address `string`: The IP address (IPv4 only) or hostname of the media server to monitor
    * bestEffortMonitoringEnabled `boolean`: Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead.
    * name `string`: The name of the VoIP provider

#### Output
* output `object`

### getOrganizationInventoryDevices
Return the device inventory for an organization


```js
meraki.getOrganizationInventoryDevices({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * usedState `string` (values: used, unused): Filter results by used or unused inventory. Accepted values are "used" or "unused".
  * search `string`: Search for devices in inventory based on serial number, mac address, or model.

#### Output
* output `object`

### getOrganizationInventoryDevice
Return a single device from the inventory of an organization


```js
meraki.getOrganizationInventoryDevice({
  "organizationId": "",
  "serial": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * serial **required** `string`

#### Output
* output `object`

### getOrganizationLicenses
List the licenses for an organization


```js
meraki.getOrganizationLicenses({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * deviceSerial `string`: Filter the licenses to those assigned to a particular device
  * networkId `string`: Filter the licenses to those assigned in a particular network
  * state `string` (values: active, expired, expiring, unused, unusedActive, recentlyQueued): Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued'

#### Output
* output `object`

### assignOrganizationLicensesSeats
Assign SM seats to a network. This will increase the managed SM device limit of the network


```js
meraki.assignOrganizationLicensesSeats({
  "organizationId": "",
  "assignOrganizationLicensesSeats": {
    "licenseId": "",
    "networkId": "",
    "seatCount": 0
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * assignOrganizationLicensesSeats **required** `object`
    * licenseId **required** `string`: The ID of the SM license to assign seats from
    * networkId **required** `string`: The ID of the SM network to assign the seats to
    * seatCount **required** `integer`: The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license

#### Output
* output `object`

### moveOrganizationLicenses
Move licenses to another organization. This will also move any devices that the licenses are assigned to


```js
meraki.moveOrganizationLicenses({
  "organizationId": "",
  "moveOrganizationLicenses": {
    "destOrganizationId": "",
    "licenseIds": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * moveOrganizationLicenses **required** `object`
    * destOrganizationId **required** `string`: The ID of the organization to move the licenses to
    * licenseIds **required** `array`: A list of IDs of licenses to move to the new organization
      * items `string`

#### Output
* output `object`

### moveOrganizationLicensesSeats
Move SM seats to another organization


```js
meraki.moveOrganizationLicensesSeats({
  "organizationId": "",
  "moveOrganizationLicensesSeats": {
    "destOrganizationId": "",
    "licenseId": "",
    "seatCount": 0
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * moveOrganizationLicensesSeats **required** `object`
    * destOrganizationId **required** `string`: The ID of the organization to move the SM seats to
    * licenseId **required** `string`: The ID of the SM license to move the seats from
    * seatCount **required** `integer`: The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license

#### Output
* output `object`

### getOrganizationLicensesOverview
Return an overview of the license state for an organization


```js
meraki.getOrganizationLicensesOverview({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### renewOrganizationLicensesSeats
Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license


```js
meraki.renewOrganizationLicensesSeats({
  "organizationId": "",
  "renewOrganizationLicensesSeats": {
    "licenseIdToRenew": "",
    "unusedLicenseId": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * renewOrganizationLicensesSeats **required** `object`
    * licenseIdToRenew **required** `string`: The ID of the SM license to renew. This license must already be assigned to an SM network
    * unusedLicenseId **required** `string`: The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'

#### Output
* output `object`

### getOrganizationLicense
Display a license


```js
meraki.getOrganizationLicense({
  "organizationId": "",
  "licenseId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * licenseId **required** `string`

#### Output
* output `object`

### updateOrganizationLicense
Update a license


```js
meraki.updateOrganizationLicense({
  "organizationId": "",
  "licenseId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * licenseId **required** `string`
  * updateOrganizationLicense `object`
    * deviceSerial `string`: The serial number of the device to assign this license to. Set this to null to unassign the license. If a different license is already active on the device, this parameter will control queueing/dequeuing this license.

#### Output
* output `object`

### getOrganizationLoginSecurity
Returns the login security settings for an organization.


```js
meraki.getOrganizationLoginSecurity({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationLoginSecurity
Update the login security settings for an organization


```js
meraki.updateOrganizationLoginSecurity({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationLoginSecurity `object`
    * accountLockoutAttempts `integer`: Number of consecutive failed login attempts after which users' accounts will be locked.
    * enforceAccountLockout `boolean`: Boolean indicating whether users' Dashboard accounts will be locked out after a specified number of consecutive failed login attempts.
    * enforceDifferentPasswords `boolean`: Boolean indicating whether users, when setting a new password, are forced to choose a new password that is different from any past passwords.
    * enforceIdleTimeout `boolean`: Boolean indicating whether users will be logged out after being idle for the specified number of minutes.
    * enforceLoginIpRanges `boolean`: Boolean indicating whether organization will restrict access to Dashboard (including the API) from certain IP addresses.
    * enforcePasswordExpiration `boolean`: Boolean indicating whether users are forced to change their password every X number of days.
    * enforceStrongPasswords `boolean`: Boolean indicating whether users will be forced to choose strong passwords for their accounts. Strong passwords are at least 8 characters that contain 3 of the following: number, uppercase letter, lowercase letter, and symbol
    * enforceTwoFactorAuth `boolean`: Boolean indicating whether users in this organization will be required to use an extra verification code when logging in to Dashboard. This code will be sent to their mobile phone via SMS, or can be generated by the Google Authenticator application.
    * idleTimeoutMinutes `integer`: Number of minutes users can remain idle before being logged out of their accounts.
    * loginIpRanges `array`: List of acceptable IP ranges. Entries can be single IP addresses, IP address ranges, and CIDR subnets.
      * items `string`
    * numDifferentPasswords `integer`: Number of recent passwords that new password must be distinct from.
    * passwordExpirationDays `integer`: Number of days after which users will be forced to change their password.

#### Output
* output `object`

### getOrganizationNetworks
List the networks that the user has privileges on in an organization


```js
meraki.getOrganizationNetworks({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * configTemplateId `string`: An optional parameter that is the ID of a config template. Will return all networks bound to that template.
  * tags `array`: An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
  * tagsFilterType `string` (values: withAnyTags, withAllTags): An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.

#### Output
* output `object`

### createOrganizationNetwork
Create a network


```js
meraki.createOrganizationNetwork({
  "organizationId": "",
  "createOrganizationNetwork": {
    "name": "",
    "productTypes": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationNetwork **required** `object`
    * copyFromNetworkId `string`: The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.
    * name **required** `string`: The name of the new network
    * productTypes **required** `array`: The product type(s) of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental. If more than one type is included, the network will be a combined network.
      * items `string` (values: wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental)
    * tags `array`: A list of tags to be applied to the network
      * items `string`
    * timeZone `string`: The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>

#### Output
* output `object`

### combineOrganizationNetworks
Combine multiple networks into a single network


```js
meraki.combineOrganizationNetworks({
  "organizationId": "",
  "combineOrganizationNetworks": {
    "name": "",
    "networkIds": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * combineOrganizationNetworks **required** `object`
    * enrollmentString `string`: A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.
    * name **required** `string`: The name of the combined network
    * networkIds **required** `array`: A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network
      * items `string`

#### Output
* output `object`

### getOrganizationOpenapiSpec
Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON


```js
meraki.getOrganizationOpenapiSpec({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### getOrganizationSaml
Returns the SAML SSO enabled settings for an organization.


```js
meraki.getOrganizationSaml({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationSaml
Updates the SAML SSO enabled settings for an organization.


```js
meraki.updateOrganizationSaml({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationSaml `object`
    * enabled `boolean`: Boolean for updating SAML SSO enabled settings.

#### Output
* output `object`

### getOrganizationSamlIdps
List the SAML IdPs in your organization.


```js
meraki.getOrganizationSamlIdps({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationSamlIdp
Create a SAML IdP for your organization.


```js
meraki.createOrganizationSamlIdp({
  "organizationId": "",
  "createOrganizationSamlIdp": {
    "x509certSha1Fingerprint": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationSamlIdp **required** `object`
    * sloLogoutUrl `string`: Dashboard will redirect users to this URL when they sign out.
    * x509certSha1Fingerprint **required** `string`: Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation.

#### Output
* output `object`

### deleteOrganizationSamlIdp
Remove a SAML IdP in your organization.


```js
meraki.deleteOrganizationSamlIdp({
  "organizationId": "",
  "idpId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * idpId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationSamlIdp
Get a SAML IdP from your organization.


```js
meraki.getOrganizationSamlIdp({
  "organizationId": "",
  "idpId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * idpId **required** `string`

#### Output
* output `object`

### updateOrganizationSamlIdp
Update a SAML IdP in your organization


```js
meraki.updateOrganizationSamlIdp({
  "organizationId": "",
  "idpId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * idpId **required** `string`
  * updateOrganizationSamlIdp `object`
    * sloLogoutUrl `string`: Dashboard will redirect users to this URL when they sign out.
    * x509certSha1Fingerprint `string`: Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation.

#### Output
* output `object`

### getOrganizationSamlRoles
List the SAML roles for this organization


```js
meraki.getOrganizationSamlRoles({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### createOrganizationSamlRole
Create a SAML role


```js
meraki.createOrganizationSamlRole({
  "organizationId": "",
  "createOrganizationSamlRole": {
    "role": "",
    "orgAccess": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * createOrganizationSamlRole **required** `object`
    * networks `array`: The list of networks that the SAML administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * id **required** `string`: The network ID
    * orgAccess **required** `string` (values: none, read-only, full): The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only' or 'full'
    * role **required** `string`: The role of the SAML administrator
    * tags `array`: The list of tags that the SAML administrator has privleges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * tag **required** `string`: The name of the tag

#### Output
* output `object`

### deleteOrganizationSamlRole
Remove a SAML role


```js
meraki.deleteOrganizationSamlRole({
  "organizationId": "",
  "samlRoleId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * samlRoleId **required** `string`

#### Output
*Output schema unknown*

### getOrganizationSamlRole
Return a SAML role


```js
meraki.getOrganizationSamlRole({
  "organizationId": "",
  "samlRoleId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * samlRoleId **required** `string`

#### Output
* output `object`

### updateOrganizationSamlRole
Update a SAML role


```js
meraki.updateOrganizationSamlRole({
  "organizationId": "",
  "samlRoleId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * samlRoleId **required** `string`
  * updateOrganizationSamlRole `object`
    * networks `array`: The list of networks that the SAML administrator has privileges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * id **required** `string`: The network ID
    * orgAccess `string` (values: none, read-only, full): The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only' or 'full'
    * role `string`: The role of the SAML administrator
    * tags `array`: The list of tags that the SAML administrator has privleges on
      * items `object`
        * access **required** `string` (values: full, read-only, guest-ambassador, monitor-only): The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
        * tag **required** `string`: The name of the tag

#### Output
* output `object`

### getOrganizationSmApnsCert
Get the organization's APNS certificate


```js
meraki.getOrganizationSmApnsCert({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### getOrganizationSmVppAccounts
List the VPP accounts in the organization


```js
meraki.getOrganizationSmVppAccounts({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### getOrganizationSmVppAccount
Get a hash containing the unparsed token of the VPP account with the given ID


```js
meraki.getOrganizationSmVppAccount({
  "organizationId": "",
  "vppAccountId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * vppAccountId **required** `string`

#### Output
* output `object`

### getOrganizationSnmp
Return the SNMP settings for an organization


```js
meraki.getOrganizationSnmp({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### updateOrganizationSnmp
Update the SNMP settings for an organization


```js
meraki.updateOrganizationSnmp({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * updateOrganizationSnmp `object`
    * peerIps `array`: The list of IPv4 addresses that are allowed to access the SNMP server.
      * items `string`
    * v2cEnabled `boolean`: Boolean indicating whether SNMP version 2c is enabled for the organization.
    * v3AuthMode `string` (values: MD5, SHA): The SNMP version 3 authentication mode. Can be either 'MD5' or 'SHA'.
    * v3AuthPass `string`: The SNMP version 3 authentication password. Must be at least 8 characters if specified.
    * v3Enabled `boolean`: Boolean indicating whether SNMP version 3 is enabled for the organization.
    * v3PrivMode `string` (values: DES, AES128): The SNMP version 3 privacy mode. Can be either 'DES' or 'AES128'.
    * v3PrivPass `string`: The SNMP version 3 privacy password. Must be at least 8 characters if specified.

#### Output
* output `object`

### cloneOrganizationSwitchDevices
Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring


```js
meraki.cloneOrganizationSwitchDevices({
  "organizationId": "",
  "cloneOrganizationSwitchDevices": {
    "sourceSerial": "",
    "targetSerials": []
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * cloneOrganizationSwitchDevices **required** `object`
    * sourceSerial **required** `string`: Serial number of the source switch (must be on a network not bound to a template)
    * targetSerials **required** `array`: Array of serial numbers of one or more target switches (must be on a network not bound to a template)
      * items `string`

#### Output
* output `object`

### getOrganizationWebhooksAlertTypes
Return a list of alert types to be used with managing webhook alerts


```js
meraki.getOrganizationWebhooksAlertTypes({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`

#### Output
* output `object`

### getOrganizationWebhooksLogs
Return the log of webhook POSTs sent


```js
meraki.getOrganizationWebhooksLogs({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * t0 `string`: The beginning of the timespan for the data. The maximum lookback period is 90 days from today.
  * t1 `string`: The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  * timespan `number`: The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  * perPage `integer`: The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  * startingAfter `string`: A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * endingBefore `string`: A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  * url `string`: The URL the webhook was sent to

#### Output
* output `object`



## Definitions

*This integration has no definitions*
