# @datafire/amazonaws_groundstation

Client library for AWS Ground Station

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_groundstation
```
```js
let amazonaws_groundstation = require('@datafire/amazonaws_groundstation').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.

## Actions

### ListConfigs



```js
amazonaws_groundstation.ListConfigs({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListConfigsResponse](#listconfigsresponse)

### CreateConfig



```js
amazonaws_groundstation.CreateConfig({
  "configData": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Tags assigned to a <code>Config</code>.
  * configData **required** `object`: <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
    * antennaDownlinkConfig
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaDownlinkDemodDecodeConfig
      * decodeConfig **required**
        * unvalidatedJSON **required**
      * demodulationConfig **required**
        * unvalidatedJSON **required**
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaUplinkConfig
      * spectrumConfig **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
      * targetEirp **required**
        * units **required**
        * value **required**
      * transmitDisabled
    * dataflowEndpointConfig
      * dataflowEndpointName **required**
      * dataflowEndpointRegion
    * trackingConfig
      * autotrack **required**
    * uplinkEchoConfig
      * antennaUplinkConfigArn **required**
      * enabled **required**
  * name **required** `string`: Name of a <code>Config</code>.

#### Output
* output [ConfigIdResponse](#configidresponse)

### DeleteConfig



```js
amazonaws_groundstation.DeleteConfig({
  "configId": "",
  "configType": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`
  * configType **required** `string`

#### Output
* output [ConfigIdResponse](#configidresponse)

### GetConfig



```js
amazonaws_groundstation.GetConfig({
  "configId": "",
  "configType": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`
  * configType **required** `string`

#### Output
* output [GetConfigResponse](#getconfigresponse)

### UpdateConfig



```js
amazonaws_groundstation.UpdateConfig({
  "configId": "",
  "configType": "",
  "configData": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`
  * configType **required** `string`
  * configData **required** `object`: <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
    * antennaDownlinkConfig
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaDownlinkDemodDecodeConfig
      * decodeConfig **required**
        * unvalidatedJSON **required**
      * demodulationConfig **required**
        * unvalidatedJSON **required**
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaUplinkConfig
      * spectrumConfig **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
      * targetEirp **required**
        * units **required**
        * value **required**
      * transmitDisabled
    * dataflowEndpointConfig
      * dataflowEndpointName **required**
      * dataflowEndpointRegion
    * trackingConfig
      * autotrack **required**
    * uplinkEchoConfig
      * antennaUplinkConfigArn **required**
      * enabled **required**
  * name **required** `string`: Name of a <code>Config</code>.

#### Output
* output [ConfigIdResponse](#configidresponse)

### ReserveContact



```js
amazonaws_groundstation.ReserveContact({
  "endTime": "",
  "groundStation": "",
  "missionProfileArn": "",
  "satelliteArn": "",
  "startTime": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Tags assigned to a contact.
  * endTime **required** `string`: End time of a contact.
  * groundStation **required** `string`: Name of a ground station.
  * missionProfileArn **required** `string`: ARN of a mission profile.
  * satelliteArn **required** `string`: ARN of a satellite
  * startTime **required** `string`: Start time of a contact.

#### Output
* output [ContactIdResponse](#contactidresponse)

### CancelContact



```js
amazonaws_groundstation.CancelContact({
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`

#### Output
* output [ContactIdResponse](#contactidresponse)

### DescribeContact



```js
amazonaws_groundstation.DescribeContact({
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`

#### Output
* output [DescribeContactResponse](#describecontactresponse)

### ListContacts



```js
amazonaws_groundstation.ListContacts({
  "endTime": "",
  "startTime": "",
  "statusList": []
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * endTime **required** `string`: End time of a contact.
  * groundStation `string`: Name of a ground station.
  * maxResults `integer`: Maximum number of contacts returned.
  * missionProfileArn `string`: ARN of a mission profile.
  * nextToken `string`: Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.
  * satelliteArn `string`: ARN of a satellite.
  * startTime **required** `string`: Start time of a contact.
  * statusList **required** `array`: Status of a contact reservation.
    * items [ContactStatus](#contactstatus)

#### Output
* output [ListContactsResponse](#listcontactsresponse)

### ListDataflowEndpointGroups



```js
amazonaws_groundstation.ListDataflowEndpointGroups({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListDataflowEndpointGroupsResponse](#listdataflowendpointgroupsresponse)

### CreateDataflowEndpointGroup



```js
amazonaws_groundstation.CreateDataflowEndpointGroup({
  "endpointDetails": []
}, context)
```

#### Input
* input `object`
  * tags `object`: Tags of a dataflow endpoint group.
  * endpointDetails **required** `array`: Endpoint details of each endpoint in the dataflow endpoint group.
    * items [EndpointDetails](#endpointdetails)

#### Output
* output [DataflowEndpointGroupIdResponse](#dataflowendpointgroupidresponse)

### DeleteDataflowEndpointGroup



```js
amazonaws_groundstation.DeleteDataflowEndpointGroup({
  "dataflowEndpointGroupId": ""
}, context)
```

#### Input
* input `object`
  * dataflowEndpointGroupId **required** `string`

#### Output
* output [DataflowEndpointGroupIdResponse](#dataflowendpointgroupidresponse)

### GetDataflowEndpointGroup



```js
amazonaws_groundstation.GetDataflowEndpointGroup({
  "dataflowEndpointGroupId": ""
}, context)
```

#### Input
* input `object`
  * dataflowEndpointGroupId **required** `string`

#### Output
* output [GetDataflowEndpointGroupResponse](#getdataflowendpointgroupresponse)

### ListGroundStations



```js
amazonaws_groundstation.ListGroundStations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * satelliteId `string`

#### Output
* output [ListGroundStationsResponse](#listgroundstationsresponse)

### GetMinuteUsage



```js
amazonaws_groundstation.GetMinuteUsage({
  "month": 0,
  "year": 0
}, context)
```

#### Input
* input `object`
  * month **required** `integer`: The month being requested, with a value of 1-12.
  * year **required** `integer`: The year being requested, in the format of YYYY.

#### Output
* output [GetMinuteUsageResponse](#getminuteusageresponse)

### ListMissionProfiles



```js
amazonaws_groundstation.ListMissionProfiles({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListMissionProfilesResponse](#listmissionprofilesresponse)

### CreateMissionProfile



```js
amazonaws_groundstation.CreateMissionProfile({
  "dataflowEdges": [],
  "minimumViableContactDurationSeconds": 0,
  "name": "",
  "trackingConfigArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Tags assigned to a mission profile.
  * contactPostPassDurationSeconds `integer`: Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
  * contactPrePassDurationSeconds `integer`: Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
  * dataflowEdges **required** `array`: A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
    * items [DataflowEdge](#dataflowedge)
  * minimumViableContactDurationSeconds **required** `integer`: Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
  * name **required** `string`: Name of a mission profile.
  * trackingConfigArn **required** `string`: ARN of a tracking <code>Config</code>.

#### Output
* output [MissionProfileIdResponse](#missionprofileidresponse)

### DeleteMissionProfile



```js
amazonaws_groundstation.DeleteMissionProfile({
  "missionProfileId": ""
}, context)
```

#### Input
* input `object`
  * missionProfileId **required** `string`

#### Output
* output [MissionProfileIdResponse](#missionprofileidresponse)

### GetMissionProfile



```js
amazonaws_groundstation.GetMissionProfile({
  "missionProfileId": ""
}, context)
```

#### Input
* input `object`
  * missionProfileId **required** `string`

#### Output
* output [GetMissionProfileResponse](#getmissionprofileresponse)

### UpdateMissionProfile



```js
amazonaws_groundstation.UpdateMissionProfile({
  "missionProfileId": ""
}, context)
```

#### Input
* input `object`
  * missionProfileId **required** `string`
  * contactPostPassDurationSeconds `integer`: Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
  * contactPrePassDurationSeconds `integer`: Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
  * dataflowEdges `array`: A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
    * items [DataflowEdge](#dataflowedge)
  * minimumViableContactDurationSeconds `integer`: Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
  * name `string`: Name of a mission profile.
  * trackingConfigArn `string`: ARN of a tracking <code>Config</code>.

#### Output
* output [MissionProfileIdResponse](#missionprofileidresponse)

### ListSatellites



```js
amazonaws_groundstation.ListSatellites({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListSatellitesResponse](#listsatellitesresponse)

### GetSatellite



```js
amazonaws_groundstation.GetSatellite({
  "satelliteId": ""
}, context)
```

#### Input
* input `object`
  * satelliteId **required** `string`

#### Output
* output [GetSatelliteResponse](#getsatelliteresponse)

### ListTagsForResource



```js
amazonaws_groundstation.ListTagsForResource({
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
amazonaws_groundstation.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: Tags assigned to a resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_groundstation.UntagResource({
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

### AngleUnits
* AngleUnits `string` (values: DEGREE_ANGLE, RADIAN)

### AntennaDemodDecodeDetails
* AntennaDemodDecodeDetails `object`: Details about an antenna demod decode <code>Config</code> used in a contact.
  * outputNode

### AntennaDownlinkConfig
* AntennaDownlinkConfig `object`: Information about how AWS Ground Station should configure an antenna for downlink during a contact.
  * spectrumConfig **required**
    * bandwidth **required**
      * units **required**
      * value **required**
    * centerFrequency **required**
      * units **required**
      * value **required**
    * polarization

### AntennaDownlinkDemodDecodeConfig
* AntennaDownlinkDemodDecodeConfig `object`: Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
  * decodeConfig **required**
    * unvalidatedJSON **required**
  * demodulationConfig **required**
    * unvalidatedJSON **required**
  * spectrumConfig **required**
    * bandwidth **required**
      * units **required**
      * value **required**
    * centerFrequency **required**
      * units **required**
      * value **required**
    * polarization

### AntennaUplinkConfig
* AntennaUplinkConfig `object`: Information about the uplink <code>Config</code> of an antenna.
  * spectrumConfig **required**
    * centerFrequency **required**
      * units **required**
      * value **required**
    * polarization
  * targetEirp **required**
    * units **required**
    * value **required**
  * transmitDisabled

### BandwidthUnits
* BandwidthUnits `string` (values: GHz, MHz, kHz)

### Boolean
* Boolean `boolean`

### CancelContactRequest
* CancelContactRequest `object`: <p/>

### ConfigArn
* ConfigArn `string`

### ConfigCapabilityType
* ConfigCapabilityType `string` (values: antenna-downlink, antenna-downlink-demod-decode, antenna-uplink, dataflow-endpoint, tracking, uplink-echo)

### ConfigDetails
* ConfigDetails `object`: Details for certain <code>Config</code> object types in a contact.
  * antennaDemodDecodeDetails
    * outputNode
  * endpointDetails [EndpointDetails](#endpointdetails)

### ConfigIdResponse
* ConfigIdResponse `object`: <p/>
  * configArn
  * configId
  * configType

### ConfigList
* ConfigList `array`
  * items [ConfigListItem](#configlistitem)

### ConfigListItem
* ConfigListItem `object`: An item in a list of <code>Config</code> objects.
  * configArn
  * configId
  * configType
  * name

### ConfigTypeData
* ConfigTypeData `object`: <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
  * antennaDownlinkConfig
    * spectrumConfig **required**
      * bandwidth **required**
        * units **required**
        * value **required**
      * centerFrequency **required**
        * units **required**
        * value **required**
      * polarization
  * antennaDownlinkDemodDecodeConfig
    * decodeConfig **required**
      * unvalidatedJSON **required**
    * demodulationConfig **required**
      * unvalidatedJSON **required**
    * spectrumConfig **required**
      * bandwidth **required**
        * units **required**
        * value **required**
      * centerFrequency **required**
        * units **required**
        * value **required**
      * polarization
  * antennaUplinkConfig
    * spectrumConfig **required**
      * centerFrequency **required**
        * units **required**
        * value **required**
      * polarization
    * targetEirp **required**
      * units **required**
      * value **required**
    * transmitDisabled
  * dataflowEndpointConfig
    * dataflowEndpointName **required**
    * dataflowEndpointRegion
  * trackingConfig
    * autotrack **required**
  * uplinkEchoConfig
    * antennaUplinkConfigArn **required**
    * enabled **required**

### ContactData
* ContactData `object`: Data describing a contact.
  * tags
  * contactId
  * contactStatus
  * endTime
  * errorMessage
  * groundStation
  * maximumElevation
    * unit **required**
    * value **required**
  * missionProfileArn
  * postPassEndTime
  * prePassStartTime
  * region
  * satelliteArn
  * startTime

### ContactIdResponse
* ContactIdResponse `object`: <p/>
  * contactId

### ContactList
* ContactList `array`
  * items [ContactData](#contactdata)

### ContactStatus
* ContactStatus `string` (values: AVAILABLE, AWS_CANCELLED, AWS_FAILED, CANCELLED, CANCELLING, COMPLETED, FAILED, FAILED_TO_SCHEDULE, PASS, POSTPASS, PREPASS, SCHEDULED, SCHEDULING)

### CreateConfigRequest
* CreateConfigRequest `object`: <p/>
  * tags
  * configData **required**
    * antennaDownlinkConfig
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaDownlinkDemodDecodeConfig
      * decodeConfig **required**
        * unvalidatedJSON **required**
      * demodulationConfig **required**
        * unvalidatedJSON **required**
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaUplinkConfig
      * spectrumConfig **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
      * targetEirp **required**
        * units **required**
        * value **required**
      * transmitDisabled
    * dataflowEndpointConfig
      * dataflowEndpointName **required**
      * dataflowEndpointRegion
    * trackingConfig
      * autotrack **required**
    * uplinkEchoConfig
      * antennaUplinkConfigArn **required**
      * enabled **required**
  * name **required**

### CreateDataflowEndpointGroupRequest
* CreateDataflowEndpointGroupRequest `object`: <p/>
  * tags
  * endpointDetails **required**
    * items [EndpointDetails](#endpointdetails)

### CreateMissionProfileRequest
* CreateMissionProfileRequest `object`: <p/>
  * tags
  * contactPostPassDurationSeconds
  * contactPrePassDurationSeconds
  * dataflowEdges **required**
    * items [DataflowEdge](#dataflowedge)
  * minimumViableContactDurationSeconds **required**
  * name **required**
  * trackingConfigArn **required**

### Criticality
* Criticality `string` (values: PREFERRED, REMOVED, REQUIRED)

### DataflowDetail
* DataflowDetail `object`: Information about a dataflow edge used in a contact.
  * destination [Destination](#destination)
  * errorMessage
  * source [Source](#source)

### DataflowEdge
* DataflowEdge `array`
  * items [ConfigArn](#configarn)

### DataflowEdgeList
* DataflowEdgeList `array`
  * items [DataflowEdge](#dataflowedge)

### DataflowEndpoint
* DataflowEndpoint `object`: Information about a dataflow endpoint.
  * address
    * name **required**
    * port **required**
  * mtu
  * name
  * status

### DataflowEndpointConfig
* DataflowEndpointConfig `object`: Information about the dataflow endpoint <code>Config</code>.
  * dataflowEndpointName **required**
  * dataflowEndpointRegion

### DataflowEndpointGroupArn
* DataflowEndpointGroupArn `string`

### DataflowEndpointGroupIdResponse
* DataflowEndpointGroupIdResponse `object`: <p/>
  * dataflowEndpointGroupId

### DataflowEndpointGroupList
* DataflowEndpointGroupList `array`
  * items [DataflowEndpointListItem](#dataflowendpointlistitem)

### DataflowEndpointListItem
* DataflowEndpointListItem `object`: Item in a list of <code>DataflowEndpoint</code> groups.
  * dataflowEndpointGroupArn
  * dataflowEndpointGroupId

### DataflowEndpointmtuInteger
* DataflowEndpointmtuInteger `integer`

### DataflowList
* DataflowList `array`
  * items [DataflowDetail](#dataflowdetail)

### DecodeConfig
* DecodeConfig `object`: Information about the decode <code>Config</code>.
  * unvalidatedJSON **required**

### DeleteConfigRequest
* DeleteConfigRequest `object`: <p/>

### DeleteDataflowEndpointGroupRequest
* DeleteDataflowEndpointGroupRequest `object`: <p/>

### DeleteMissionProfileRequest
* DeleteMissionProfileRequest `object`: <p/>

### DemodulationConfig
* DemodulationConfig `object`: Information about the demodulation <code>Config</code>.
  * unvalidatedJSON **required**

### DependencyException


### DescribeContactRequest
* DescribeContactRequest `object`: <p/>

### DescribeContactResponse
* DescribeContactResponse `object`: <p/>
  * tags
  * contactId
  * contactStatus
  * dataflowList
    * items [DataflowDetail](#dataflowdetail)
  * endTime
  * errorMessage
  * groundStation
  * maximumElevation
    * unit **required**
    * value **required**
  * missionProfileArn
  * postPassEndTime
  * prePassStartTime
  * region
  * satelliteArn
  * startTime

### Destination
* Destination `object`: Dataflow details for the destination side.
  * configDetails
    * antennaDemodDecodeDetails
      * outputNode
    * endpointDetails [EndpointDetails](#endpointdetails)
  * configId
  * configType
  * dataflowDestinationRegion

### Double
* Double `number`

### DurationInSeconds
* DurationInSeconds `integer`

### Eirp
* Eirp `object`: Object that represents EIRP.
  * units **required**
  * value **required**

### EirpUnits
* EirpUnits `string` (values: dBW)

### Elevation
* Elevation `object`: Elevation angle of the satellite in the sky during a contact.
  * unit **required**
  * value **required**

### EndpointDetails
* EndpointDetails `object`: Information about the endpoint details.
  * endpoint
    * address
      * name **required**
      * port **required**
    * mtu
    * name
    * status
  * securityDetails
    * roleArn **required**
    * securityGroupIds **required**
      * items [String](#string)
    * subnetIds **required**
      * items [String](#string)

### EndpointDetailsList
* EndpointDetailsList `array`
  * items [EndpointDetails](#endpointdetails)

### EndpointStatus
* EndpointStatus `string` (values: created, creating, deleted, deleting, failed)

### Frequency
* Frequency `object`: Object that describes the frequency.
  * units **required**
  * value **required**

### FrequencyBandwidth
* FrequencyBandwidth `object`: Object that describes the frequency bandwidth. 
  * units **required**
  * value **required**

### FrequencyUnits
* FrequencyUnits `string` (values: GHz, MHz, kHz)

### GetConfigRequest
* GetConfigRequest `object`: <p/>

### GetConfigResponse
* GetConfigResponse `object`: <p/>
  * tags
  * configArn **required**
  * configData **required**
    * antennaDownlinkConfig
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaDownlinkDemodDecodeConfig
      * decodeConfig **required**
        * unvalidatedJSON **required**
      * demodulationConfig **required**
        * unvalidatedJSON **required**
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaUplinkConfig
      * spectrumConfig **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
      * targetEirp **required**
        * units **required**
        * value **required**
      * transmitDisabled
    * dataflowEndpointConfig
      * dataflowEndpointName **required**
      * dataflowEndpointRegion
    * trackingConfig
      * autotrack **required**
    * uplinkEchoConfig
      * antennaUplinkConfigArn **required**
      * enabled **required**
  * configId **required**
  * configType
  * name **required**

### GetDataflowEndpointGroupRequest
* GetDataflowEndpointGroupRequest `object`: <p/>

### GetDataflowEndpointGroupResponse
* GetDataflowEndpointGroupResponse `object`: <p/>
  * tags
  * dataflowEndpointGroupArn
  * dataflowEndpointGroupId
  * endpointsDetails
    * items [EndpointDetails](#endpointdetails)

### GetMinuteUsageRequest
* GetMinuteUsageRequest `object`: <p/>
  * month **required**
  * year **required**

### GetMinuteUsageResponse
* GetMinuteUsageResponse `object`: <p/>
  * estimatedMinutesRemaining
  * isReservedMinutesCustomer
  * totalReservedMinuteAllocation
  * totalScheduledMinutes
  * upcomingMinutesScheduled

### GetMissionProfileRequest
* GetMissionProfileRequest `object`: <p/>

### GetMissionProfileResponse
* GetMissionProfileResponse `object`: <p/>
  * tags
  * contactPostPassDurationSeconds
  * contactPrePassDurationSeconds
  * dataflowEdges
    * items [DataflowEdge](#dataflowedge)
  * minimumViableContactDurationSeconds
  * missionProfileArn
  * missionProfileId
  * name
  * region
  * trackingConfigArn

### GetSatelliteRequest
* GetSatelliteRequest `object`: <p/>

### GetSatelliteResponse
* GetSatelliteResponse `object`: <p/>
  * groundStations
    * items [String](#string)
  * noradSatelliteID
  * satelliteArn
  * satelliteId

### GroundStationData
* GroundStationData `object`: Information about the ground station data.
  * groundStationId
  * groundStationName
  * region

### GroundStationIdList
* GroundStationIdList `array`
  * items [String](#string)

### GroundStationList
* GroundStationList `array`
  * items [GroundStationData](#groundstationdata)

### Integer
* Integer `integer`

### InvalidParameterException


### JsonString
* JsonString `string`

### ListConfigsRequest
* ListConfigsRequest `object`: <p/>

### ListConfigsResponse
* ListConfigsResponse `object`: <p/>
  * configList
    * items [ConfigListItem](#configlistitem)
  * nextToken

### ListContactsRequest
* ListContactsRequest `object`: <p/>
  * endTime **required**
  * groundStation
  * maxResults
  * missionProfileArn
  * nextToken
  * satelliteArn
  * startTime **required**
  * statusList **required**
    * items [ContactStatus](#contactstatus)

### ListContactsResponse
* ListContactsResponse `object`: <p/>
  * contactList
    * items [ContactData](#contactdata)
  * nextToken

### ListDataflowEndpointGroupsRequest
* ListDataflowEndpointGroupsRequest `object`: <p/>

### ListDataflowEndpointGroupsResponse
* ListDataflowEndpointGroupsResponse `object`: <p/>
  * dataflowEndpointGroupList
    * items [DataflowEndpointListItem](#dataflowendpointlistitem)
  * nextToken

### ListGroundStationsRequest
* ListGroundStationsRequest `object`: <p/>

### ListGroundStationsResponse
* ListGroundStationsResponse `object`: <p/>
  * groundStationList
    * items [GroundStationData](#groundstationdata)
  * nextToken

### ListMissionProfilesRequest
* ListMissionProfilesRequest `object`: <p/>

### ListMissionProfilesResponse
* ListMissionProfilesResponse `object`: <p/>
  * missionProfileList
    * items [MissionProfileListItem](#missionprofilelistitem)
  * nextToken

### ListSatellitesRequest
* ListSatellitesRequest `object`: <p/>

### ListSatellitesResponse
* ListSatellitesResponse `object`: <p/>
  * nextToken
  * satellites
    * items [SatelliteListItem](#satellitelistitem)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: <p/>

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: <p/>
  * tags

### MissionProfileArn
* MissionProfileArn `string`

### MissionProfileIdResponse
* MissionProfileIdResponse `object`: <p/>
  * missionProfileId

### MissionProfileList
* MissionProfileList `array`
  * items [MissionProfileListItem](#missionprofilelistitem)

### MissionProfileListItem
* MissionProfileListItem `object`: Item in a list of mission profiles.
  * missionProfileArn
  * missionProfileId
  * name
  * region

### Polarization
* Polarization `string` (values: LEFT_HAND, NONE, RIGHT_HAND)

### ReserveContactRequest
* ReserveContactRequest `object`: <p/>
  * tags
  * endTime **required**
  * groundStation **required**
  * missionProfileArn **required**
  * satelliteArn **required**
  * startTime **required**

### ResourceLimitExceededException


### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### SafeName
* SafeName `string`

### SatelliteList
* SatelliteList `array`
  * items [SatelliteListItem](#satellitelistitem)

### SatelliteListItem
* SatelliteListItem `object`: Item in a list of satellites.
  * groundStations
    * items [String](#string)
  * noradSatelliteID
  * satelliteArn
  * satelliteId

### SecurityDetails
* SecurityDetails `object`: Information about endpoints.
  * roleArn **required**
  * securityGroupIds **required**
    * items [String](#string)
  * subnetIds **required**
    * items [String](#string)

### SecurityGroupIdList
* SecurityGroupIdList `array`
  * items [String](#string)

### SocketAddress
* SocketAddress `object`: Information about the socket address.
  * name **required**
  * port **required**

### Source
* Source `object`: Dataflow details for the source side.
  * configDetails
    * antennaDemodDecodeDetails
      * outputNode
    * endpointDetails [EndpointDetails](#endpointdetails)
  * configId
  * configType
  * dataflowSourceRegion

### SpectrumConfig
* SpectrumConfig `object`: Object that describes a spectral <code>Config</code>.
  * bandwidth **required**
    * units **required**
    * value **required**
  * centerFrequency **required**
    * units **required**
    * value **required**
  * polarization

### StatusList
* StatusList `array`
  * items [ContactStatus](#contactstatus)

### String
* String `string`

### SubnetList
* SubnetList `array`
  * items [String](#string)

### TagKeys
* TagKeys `array`
  * items [String](#string)

### TagResourceRequest
* TagResourceRequest `object`: <p/>
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`: <p/>

### TagsMap
* TagsMap `object`

### Timestamp
* Timestamp `string`

### TrackingConfig
* TrackingConfig `object`: Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
  * autotrack **required**

### UntagResourceRequest
* UntagResourceRequest `object`: <p/>

### UntagResourceResponse
* UntagResourceResponse `object`: <p/>

### UpdateConfigRequest
* UpdateConfigRequest `object`: <p/>
  * configData **required**
    * antennaDownlinkConfig
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaDownlinkDemodDecodeConfig
      * decodeConfig **required**
        * unvalidatedJSON **required**
      * demodulationConfig **required**
        * unvalidatedJSON **required**
      * spectrumConfig **required**
        * bandwidth **required**
          * units **required**
          * value **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
    * antennaUplinkConfig
      * spectrumConfig **required**
        * centerFrequency **required**
          * units **required**
          * value **required**
        * polarization
      * targetEirp **required**
        * units **required**
        * value **required**
      * transmitDisabled
    * dataflowEndpointConfig
      * dataflowEndpointName **required**
      * dataflowEndpointRegion
    * trackingConfig
      * autotrack **required**
    * uplinkEchoConfig
      * antennaUplinkConfigArn **required**
      * enabled **required**
  * name **required**

### UpdateMissionProfileRequest
* UpdateMissionProfileRequest `object`: <p/>
  * contactPostPassDurationSeconds
  * contactPrePassDurationSeconds
  * dataflowEdges
    * items [DataflowEdge](#dataflowedge)
  * minimumViableContactDurationSeconds
  * name
  * trackingConfigArn

### UplinkEchoConfig
* UplinkEchoConfig `object`: <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
  * antennaUplinkConfigArn **required**
  * enabled **required**

### UplinkSpectrumConfig
* UplinkSpectrumConfig `object`: Information about the uplink spectral <code>Config</code>.
  * centerFrequency **required**
    * units **required**
    * value **required**
  * polarization

### Uuid
* Uuid `string`

### noradSatelliteID
* noradSatelliteID `integer`

### satelliteArn
* satelliteArn `string`


