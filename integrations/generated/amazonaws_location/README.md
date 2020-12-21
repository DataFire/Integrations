# @datafire/amazonaws_location

Client library for Amazon Location Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_location
```
```js
let amazonaws_location = require('@datafire/amazonaws_location').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Suite of geospatial services including Maps, Places, Tracking, and Geofencing

## Actions

### CreateGeofenceCollection



```js
amazonaws_location.CreateGeofenceCollection({
  "CollectionName": "",
  "PricingPlan": ""
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`: <p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0-9), hyphens (-), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>
  * Description `string`: An optional description for the geofence collection.
  * PricingPlan **required** `string` (values: RequestBasedUsage, MobileAssetTracking, MobileAssetManagement): <p>Specifies the pricing plan for your geofence collection. There's three pricing plan options:</p> <ul> <li> <p> <code>RequestBasedUsage</code> — Selects the "Request-Based Usage" pricing plan.</p> </li> <li> <p> <code>MobileAssetTracking</code> — Selects the "Mobile Asset Tracking" pricing plan.</p> </li> <li> <p> <code>MobileAssetManagement</code> — Selects the "Mobile Asset Management" pricing plan.</p> </li> </ul> <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing page</a>.</p>

#### Output
* output [CreateGeofenceCollectionResponse](#creategeofencecollectionresponse)

### DeleteGeofenceCollection



```js
amazonaws_location.DeleteGeofenceCollection({
  "CollectionName": ""
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`

#### Output
* output [DeleteGeofenceCollectionResponse](#deletegeofencecollectionresponse)

### DescribeGeofenceCollection



```js
amazonaws_location.DescribeGeofenceCollection({
  "CollectionName": ""
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`

#### Output
* output [DescribeGeofenceCollectionResponse](#describegeofencecollectionresponse)

### BatchDeleteGeofence



```js
amazonaws_location.BatchDeleteGeofence({
  "CollectionName": "",
  "GeofenceIds": []
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * GeofenceIds **required** `array`: The batch of geofences to be deleted.
    * items [Id](#id)

#### Output
* output [BatchDeleteGeofenceResponse](#batchdeletegeofenceresponse)

### GetGeofence



```js
amazonaws_location.GetGeofence({
  "CollectionName": "",
  "GeofenceId": ""
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * GeofenceId **required** `string`

#### Output
* output [GetGeofenceResponse](#getgeofenceresponse)

### PutGeofence



```js
amazonaws_location.PutGeofence({
  "CollectionName": "",
  "GeofenceId": "",
  "Geometry": {}
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * GeofenceId **required** `string`
  * Geometry **required** `object`: <p>Contains the geofence geometry details.</p> <note> <p>Limitation — Amazon Location does not currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
    * Polygon
      * items [LinearRing](#linearring)

#### Output
* output [PutGeofenceResponse](#putgeofenceresponse)

### ListGeofences



```js
amazonaws_location.ListGeofences({
  "CollectionName": ""
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * NextToken `string`
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListGeofencesResponse](#listgeofencesresponse)

### BatchEvaluateGeofences



```js
amazonaws_location.BatchEvaluateGeofences({
  "CollectionName": "",
  "DevicePositionUpdates": []
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * DevicePositionUpdates **required** `array`: Contains device details for each device to be evaluated against the given geofence collection.
    * items [DevicePositionUpdate](#devicepositionupdate)

#### Output
* output [BatchEvaluateGeofencesResponse](#batchevaluategeofencesresponse)

### BatchPutGeofence



```js
amazonaws_location.BatchPutGeofence({
  "CollectionName": "",
  "Entries": []
}, context)
```

#### Input
* input `object`
  * CollectionName **required** `string`
  * Entries **required** `array`: The batch of geofences to be stored in a geofence collection.
    * items [BatchPutGeofenceRequestEntry](#batchputgeofencerequestentry)

#### Output
* output [BatchPutGeofenceResponse](#batchputgeofenceresponse)

### ListGeofenceCollections



```js
amazonaws_location.ListGeofenceCollections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListGeofenceCollectionsResponse](#listgeofencecollectionsresponse)

### ListMaps



```js
amazonaws_location.ListMaps({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListMapsResponse](#listmapsresponse)

### CreateMap



```js
amazonaws_location.CreateMap({
  "Configuration": {},
  "MapName": "",
  "PricingPlan": ""
}, context)
```

#### Input
* input `object`
  * Configuration **required** `object`: Specifies the map tile style selected from an available provider.
    * Style
  * Description `string`: An optional description for the map resource.
  * MapName **required** `string`: <p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>
  * PricingPlan **required** `string` (values: RequestBasedUsage, MobileAssetTracking, MobileAssetManagement): <p>Specifies the pricing plan for your map resource. There's three pricing plan options:</p> <ul> <li> <p> <code>RequestBasedUsage</code> — Selects the "Request-Based Usage" pricing plan.</p> </li> <li> <p> <code>MobileAssetTracking</code> — Selects the "Mobile Asset Tracking" pricing plan.</p> </li> <li> <p> <code>MobileAssetManagement</code> — Selects the "Mobile Asset Management" pricing plan.</p> </li> </ul> <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing page</a>.</p>

#### Output
* output [CreateMapResponse](#createmapresponse)

### DeleteMap



```js
amazonaws_location.DeleteMap({
  "MapName": ""
}, context)
```

#### Input
* input `object`
  * MapName **required** `string`

#### Output
* output [DeleteMapResponse](#deletemapresponse)

### DescribeMap



```js
amazonaws_location.DescribeMap({
  "MapName": ""
}, context)
```

#### Input
* input `object`
  * MapName **required** `string`

#### Output
* output [DescribeMapResponse](#describemapresponse)

### GetMapGlyphs



```js
amazonaws_location.GetMapGlyphs({
  "FontStack": "",
  "FontUnicodeRange": "",
  "MapName": ""
}, context)
```

#### Input
* input `object`
  * FontStack **required** `string`
  * FontUnicodeRange **required** `string`
  * MapName **required** `string`

#### Output
* output [GetMapGlyphsResponse](#getmapglyphsresponse)

### GetMapSprites



```js
amazonaws_location.GetMapSprites({
  "FileName": "",
  "MapName": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`
  * MapName **required** `string`

#### Output
* output [GetMapSpritesResponse](#getmapspritesresponse)

### GetMapStyleDescriptor



```js
amazonaws_location.GetMapStyleDescriptor({
  "MapName": ""
}, context)
```

#### Input
* input `object`
  * MapName **required** `string`

#### Output
* output [GetMapStyleDescriptorResponse](#getmapstyledescriptorresponse)

### GetMapTile



```js
amazonaws_location.GetMapTile({
  "MapName": "",
  "X": "",
  "Y": "",
  "Z": ""
}, context)
```

#### Input
* input `object`
  * MapName **required** `string`
  * X **required** `string`
  * Y **required** `string`
  * Z **required** `string`

#### Output
* output [GetMapTileResponse](#getmaptileresponse)

### CreatePlaceIndex



```js
amazonaws_location.CreatePlaceIndex({
  "DataSource": "",
  "IndexName": "",
  "PricingPlan": ""
}, context)
```

#### Input
* input `object`
  * DataSource **required** `string`: Specifies the data provider of geospatial data.
  * DataSourceConfiguration `object`: <p>Specifies the data storage option chosen for requesting Places.</p> <note> <p>By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using. </p> <p>Also, when using HERE as your data provider, you may not (a) use HERE Places for Asset Management, or (b) select the <code>Storage</code> option for the <code>IntendedUse</code> parameter when requesting Places in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </note>
    * IntendedUse
  * Description `string`: The optional description for the Place index resource.
  * IndexName **required** `string`: <p>The name of the Place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-) and underscores (_) ).</p> </li> <li> <p>Must be a unique Place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>
  * PricingPlan **required** `string` (values: RequestBasedUsage, MobileAssetTracking, MobileAssetManagement): <p>Specifies the pricing plan for your Place index resource. There's three pricing plan options:</p> <ul> <li> <p> <code>RequestBasedUsage</code> — Selects the "Request-Based Usage" pricing plan.</p> </li> <li> <p> <code>MobileAssetTracking</code> — Selects the "Mobile Asset Tracking" pricing plan.</p> </li> <li> <p> <code>MobileAssetManagement</code> — Selects the "Mobile Asset Management" pricing plan.</p> </li> </ul> <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing page</a>.</p>

#### Output
* output [CreatePlaceIndexResponse](#createplaceindexresponse)

### DeletePlaceIndex



```js
amazonaws_location.DeletePlaceIndex({
  "IndexName": ""
}, context)
```

#### Input
* input `object`
  * IndexName **required** `string`

#### Output
* output [DeletePlaceIndexResponse](#deleteplaceindexresponse)

### DescribePlaceIndex



```js
amazonaws_location.DescribePlaceIndex({
  "IndexName": ""
}, context)
```

#### Input
* input `object`
  * IndexName **required** `string`

#### Output
* output [DescribePlaceIndexResponse](#describeplaceindexresponse)

### SearchPlaceIndexForPosition



```js
amazonaws_location.SearchPlaceIndexForPosition({
  "IndexName": "",
  "Position": []
}, context)
```

#### Input
* input `object`
  * IndexName **required** `string`
  * MaxResults `integer`: <p>An optional paramer. The maximum number of results returned per request. </p> <p>Default value: <code>50</code> </p>
  * Position **required** `array`: <p>Specifies a coordinate for the query defined by a longitude, and latitude.</p> <ul> <li> <p>The first position is the X coordinate, or longitude.</p> </li> <li> <p>The second position is the Y coordinate, or latitude. </p> </li> </ul> <p>For example, <code>position=xLongitude&amp;position=yLatitude</code> .</p>
    * items [Double](#double)

#### Output
* output [SearchPlaceIndexForPositionResponse](#searchplaceindexforpositionresponse)

### SearchPlaceIndexForText



```js
amazonaws_location.SearchPlaceIndexForText({
  "IndexName": "",
  "Text": ""
}, context)
```

#### Input
* input `object`
  * IndexName **required** `string`
  * BiasPosition `array`: <p>Searches for results closest to the given position. An optional parameter defined by longitude, and latitude.</p> <ul> <li> <p>The first <code>bias</code> position is the X coordinate, or longitude.</p> </li> <li> <p>The second <code>bias</code> position is the Y coordinate, or latitude. </p> </li> </ul> <p>For example, <code>bias=xLongitude&amp;bias=yLatitude</code>.</p>
    * items [Double](#double)
  * FilterBBox `array`: <p>Filters the results by returning only Places within the provided bounding box. An optional parameter.</p> <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner:</p> <ul> <li> <p>The first <code>bbox</code> position is the X coordinate or longitude of the lower southwest corner.</p> </li> <li> <p>The second <code>bbox</code> position is the Y coordinate or latitude of the lower southwest corner.</p> </li> </ul> <p>For example, <code>bbox=xLongitudeSW&amp;bbox=yLatitudeSW</code>.</p> <p>The next <code>bbox</code> parameters describe the upper northeast corner:</p> <ul> <li> <p>The third <code>bbox</code> position is the X coordinate, or longitude of the upper northeast corner.</p> </li> <li> <p>The fourth <code>bbox</code> position is the Y coordinate, or longitude of the upper northeast corner.</p> </li> </ul> <p>For example, <code>bbox=xLongitudeNE&amp;bbox=yLatitudeNE</code> </p>
    * items [Double](#double)
  * FilterCountries `array`: <p>Limits the search to the given a list of countries/regions. An optional parameter.</p> <ul> <li> <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country code. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>
    * items [CountryCode](#countrycode)
  * MaxResults `integer`: <p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>
  * Text **required** `string`: The address, name, city, or region to be used in the search. In free-form text format. For example, <code>123 Any Street</code>.

#### Output
* output [SearchPlaceIndexForTextResponse](#searchplaceindexfortextresponse)

### ListPlaceIndexes



```js
amazonaws_location.ListPlaceIndexes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: <p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListPlaceIndexesResponse](#listplaceindexesresponse)

### ListTrackers



```js
amazonaws_location.ListTrackers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListTrackersResponse](#listtrackersresponse)

### CreateTracker



```js
amazonaws_location.CreateTracker({
  "PricingPlan": "",
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * Description `string`: An optional description for the tracker resource.
  * PricingPlan **required** `string` (values: RequestBasedUsage, MobileAssetTracking, MobileAssetManagement): <p>Specifies the pricing plan for your tracker resource. There's three pricing plan options:</p> <ul> <li> <p> <code>RequestBasedUsage</code> — Selects the "Request-Based Usage" pricing plan.</p> </li> <li> <p> <code>MobileAssetTracking</code> — Selects the "Mobile Asset Tracking" pricing plan.</p> </li> <li> <p> <code>MobileAssetManagement</code> — Selects the "Mobile Asset Management" pricing plan.</p> </li> </ul> <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing page</a>.</p>
  * TrackerName **required** `string`: <p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-) and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>

#### Output
* output [CreateTrackerResponse](#createtrackerresponse)

### DeleteTracker



```js
amazonaws_location.DeleteTracker({
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`

#### Output
* output [DeleteTrackerResponse](#deletetrackerresponse)

### DescribeTracker



```js
amazonaws_location.DescribeTracker({
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`

#### Output
* output [DescribeTrackerResponse](#describetrackerresponse)

### AssociateTrackerConsumer



```js
amazonaws_location.AssociateTrackerConsumer({
  "TrackerName": "",
  "ConsumerArn": ""
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`
  * ConsumerArn **required** `string`: <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS. </p> <ul> <li> <p>Format example: <code>arn:partition:service:region:account-id:resource-type:resource-id</code> </p> </li> </ul>

#### Output
* output [AssociateTrackerConsumerResponse](#associatetrackerconsumerresponse)

### DisassociateTrackerConsumer



```js
amazonaws_location.DisassociateTrackerConsumer({
  "ConsumerArn": "",
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * ConsumerArn **required** `string`
  * TrackerName **required** `string`

#### Output
* output [DisassociateTrackerConsumerResponse](#disassociatetrackerconsumerresponse)

### GetDevicePositionHistory



```js
amazonaws_location.GetDevicePositionHistory({
  "DeviceId": "",
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * DeviceId **required** `string`
  * TrackerName **required** `string`
  * NextToken `string`
  * EndTimeExclusive `string`: <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>The given time for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
  * StartTimeInclusive `string`: <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>The given time for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul>

#### Output
* output [GetDevicePositionHistoryResponse](#getdevicepositionhistoryresponse)

### GetDevicePosition



```js
amazonaws_location.GetDevicePosition({
  "DeviceId": "",
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * DeviceId **required** `string`
  * TrackerName **required** `string`

#### Output
* output [GetDevicePositionResponse](#getdevicepositionresponse)

### BatchGetDevicePosition



```js
amazonaws_location.BatchGetDevicePosition({
  "TrackerName": "",
  "DeviceIds": []
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`
  * DeviceIds **required** `array`: <p>Devices whose position you want to retrieve.</p> <ul> <li> <p>For example, for two devices: <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code> </p> </li> </ul>
    * items [Id](#id)

#### Output
* output [BatchGetDevicePositionResponse](#batchgetdevicepositionresponse)

### ListTrackerConsumers



```js
amazonaws_location.ListTrackerConsumers({
  "TrackerName": ""
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
  * NextToken `string`: <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>

#### Output
* output [ListTrackerConsumersResponse](#listtrackerconsumersresponse)

### BatchUpdateDevicePosition



```js
amazonaws_location.BatchUpdateDevicePosition({
  "TrackerName": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * TrackerName **required** `string`
  * Updates **required** `array`: Contains the position update details for each device.
    * items [DevicePositionUpdate](#devicepositionupdate)

#### Output
* output [BatchUpdateDevicePositionResponse](#batchupdatedevicepositionresponse)



## Definitions

### AccessDeniedException


### Arn
* Arn `string`

### ArnList
* ArnList `array`
  * items [Arn](#arn)

### AssociateTrackerConsumerRequest
* AssociateTrackerConsumerRequest `object`
  * ConsumerArn **required**

### AssociateTrackerConsumerResponse
* AssociateTrackerConsumerResponse `object`

### BatchDeleteGeofenceError
* BatchDeleteGeofenceError `object`: Contains error details for each geofence that failed to delete from the geofence collection.
  * Error **required**
    * Code
    * Message
  * GeofenceId **required**

### BatchDeleteGeofenceErrorList
* BatchDeleteGeofenceErrorList `array`
  * items [BatchDeleteGeofenceError](#batchdeletegeofenceerror)

### BatchDeleteGeofenceRequest
* BatchDeleteGeofenceRequest `object`
  * GeofenceIds **required**
    * items [Id](#id)

### BatchDeleteGeofenceRequestGeofenceIdsList
* BatchDeleteGeofenceRequestGeofenceIdsList `array`
  * items [Id](#id)

### BatchDeleteGeofenceResponse
* BatchDeleteGeofenceResponse `object`
  * Errors **required**
    * items [BatchDeleteGeofenceError](#batchdeletegeofenceerror)

### BatchEvaluateGeofencesError
* BatchEvaluateGeofencesError `object`: Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
  * DeviceId **required**
  * Error **required**
    * Code
    * Message
  * SampleTime **required**

### BatchEvaluateGeofencesErrorList
* BatchEvaluateGeofencesErrorList `array`
  * items [BatchEvaluateGeofencesError](#batchevaluategeofenceserror)

### BatchEvaluateGeofencesRequest
* BatchEvaluateGeofencesRequest `object`
  * DevicePositionUpdates **required**
    * items [DevicePositionUpdate](#devicepositionupdate)

### BatchEvaluateGeofencesRequestDevicePositionUpdatesList
* BatchEvaluateGeofencesRequestDevicePositionUpdatesList `array`
  * items [DevicePositionUpdate](#devicepositionupdate)

### BatchEvaluateGeofencesResponse
* BatchEvaluateGeofencesResponse `object`
  * Errors **required**
    * items [BatchEvaluateGeofencesError](#batchevaluategeofenceserror)

### BatchGetDevicePositionError
* BatchGetDevicePositionError `object`: Contains error details for each device that didn't return a position.
  * DeviceId **required**
  * Error **required**
    * Code
    * Message

### BatchGetDevicePositionErrorList
* BatchGetDevicePositionErrorList `array`
  * items [BatchGetDevicePositionError](#batchgetdevicepositionerror)

### BatchGetDevicePositionRequest
* BatchGetDevicePositionRequest `object`
  * DeviceIds **required**
    * items [Id](#id)

### BatchGetDevicePositionRequestDeviceIdsList
* BatchGetDevicePositionRequestDeviceIdsList `array`
  * items [Id](#id)

### BatchGetDevicePositionRequestTrackerNameString
* BatchGetDevicePositionRequestTrackerNameString `string`

### BatchGetDevicePositionResponse
* BatchGetDevicePositionResponse `object`
  * DevicePositions **required**
    * items [DevicePosition](#deviceposition)
  * Errors **required**
    * items [BatchGetDevicePositionError](#batchgetdevicepositionerror)

### BatchItemError
* BatchItemError `object`: Contains the batch request error details associated with the request.
  * Code
  * Message

### BatchItemErrorCode
* BatchItemErrorCode `string` (values: AccessDeniedError, ConflictError, InternalServerError, ResourceNotFoundError, ThrottlingError, ValidationError)

### BatchPutGeofenceError
* BatchPutGeofenceError `object`: Contains error details for each geofence that failed to be stored in a given geofence collection.
  * Error **required**
    * Code
    * Message
  * GeofenceId **required**

### BatchPutGeofenceErrorList
* BatchPutGeofenceErrorList `array`
  * items [BatchPutGeofenceError](#batchputgeofenceerror)

### BatchPutGeofenceRequest
* BatchPutGeofenceRequest `object`
  * Entries **required**
    * items [BatchPutGeofenceRequestEntry](#batchputgeofencerequestentry)

### BatchPutGeofenceRequestEntriesList
* BatchPutGeofenceRequestEntriesList `array`
  * items [BatchPutGeofenceRequestEntry](#batchputgeofencerequestentry)

### BatchPutGeofenceRequestEntry
* BatchPutGeofenceRequestEntry `object`: Contains geofence details. 
  * GeofenceId **required**
  * Geometry **required**
    * Polygon
      * items [LinearRing](#linearring)

### BatchPutGeofenceResponse
* BatchPutGeofenceResponse `object`
  * Errors **required**
    * items [BatchPutGeofenceError](#batchputgeofenceerror)
  * Successes **required**
    * items [BatchPutGeofenceSuccess](#batchputgeofencesuccess)

### BatchPutGeofenceSuccess
* BatchPutGeofenceSuccess `object`: Contains a summary of each geofence that was successfully stored in a given geofence collection.
  * CreateTime **required**
  * GeofenceId **required**
  * UpdateTime **required**

### BatchPutGeofenceSuccessList
* BatchPutGeofenceSuccessList `array`
  * items [BatchPutGeofenceSuccess](#batchputgeofencesuccess)

### BatchUpdateDevicePositionError
* BatchUpdateDevicePositionError `object`: Contains error details for each device that failed to update its position.
  * DeviceId **required**
  * Error **required**
    * Code
    * Message
  * SampleTime **required**

### BatchUpdateDevicePositionErrorList
* BatchUpdateDevicePositionErrorList `array`
  * items [BatchUpdateDevicePositionError](#batchupdatedevicepositionerror)

### BatchUpdateDevicePositionRequest
* BatchUpdateDevicePositionRequest `object`
  * Updates **required**
    * items [DevicePositionUpdate](#devicepositionupdate)

### BatchUpdateDevicePositionRequestUpdatesList
* BatchUpdateDevicePositionRequestUpdatesList `array`
  * items [DevicePositionUpdate](#devicepositionupdate)

### BatchUpdateDevicePositionResponse
* BatchUpdateDevicePositionResponse `object`
  * Errors **required**
    * items [BatchUpdateDevicePositionError](#batchupdatedevicepositionerror)

### Blob
* Blob `string`

### BoundingBox
* BoundingBox `array`
  * items [Double](#double)

### ConflictException


### CountryCode
* CountryCode `string`

### CountryCodeList
* CountryCodeList `array`
  * items [CountryCode](#countrycode)

### CreateGeofenceCollectionRequest
* CreateGeofenceCollectionRequest `object`
  * CollectionName **required**
  * Description
  * PricingPlan **required**

### CreateGeofenceCollectionResponse
* CreateGeofenceCollectionResponse `object`
  * CollectionArn **required**
  * CollectionName **required**
  * CreateTime **required**

### CreateMapRequest
* CreateMapRequest `object`
  * Configuration **required**
    * Style **required**
  * Description
  * MapName **required**
  * PricingPlan **required**

### CreateMapResponse
* CreateMapResponse `object`
  * CreateTime **required**
  * MapArn **required**
  * MapName **required**

### CreatePlaceIndexRequest
* CreatePlaceIndexRequest `object`
  * DataSource **required**
  * DataSourceConfiguration
    * IntendedUse
  * Description
  * IndexName **required**
  * PricingPlan **required**

### CreatePlaceIndexResponse
* CreatePlaceIndexResponse `object`
  * CreateTime **required**
  * IndexArn **required**
  * IndexName **required**

### CreateTrackerRequest
* CreateTrackerRequest `object`
  * Description
  * PricingPlan **required**
  * TrackerName **required**

### CreateTrackerResponse
* CreateTrackerResponse `object`
  * CreateTime **required**
  * TrackerArn **required**
  * TrackerName **required**

### DataSourceConfiguration
* DataSourceConfiguration `object`: <p>Specifies the data storage option chosen for requesting Places.</p> <note> <p>By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using. </p> <p>Also, when using HERE as your data provider, you may not (a) use HERE Places for Asset Management, or (b) select the <code>Storage</code> option for the <code>IntendedUse</code> parameter when requesting Places in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </note>
  * IntendedUse

### DeleteGeofenceCollectionRequest
* DeleteGeofenceCollectionRequest `object`

### DeleteGeofenceCollectionResponse
* DeleteGeofenceCollectionResponse `object`

### DeleteMapRequest
* DeleteMapRequest `object`

### DeleteMapResponse
* DeleteMapResponse `object`

### DeletePlaceIndexRequest
* DeletePlaceIndexRequest `object`

### DeletePlaceIndexResponse
* DeletePlaceIndexResponse `object`

### DeleteTrackerRequest
* DeleteTrackerRequest `object`

### DeleteTrackerResponse
* DeleteTrackerResponse `object`

### DescribeGeofenceCollectionRequest
* DescribeGeofenceCollectionRequest `object`

### DescribeGeofenceCollectionResponse
* DescribeGeofenceCollectionResponse `object`
  * CollectionArn **required**
  * CollectionName **required**
  * CreateTime **required**
  * Description **required**
  * UpdateTime **required**

### DescribeMapRequest
* DescribeMapRequest `object`

### DescribeMapResponse
* DescribeMapResponse `object`
  * Configuration **required**
    * Style **required**
  * CreateTime **required**
  * DataSource **required**
  * Description **required**
  * MapArn **required**
  * MapName **required**
  * UpdateTime **required**

### DescribePlaceIndexRequest
* DescribePlaceIndexRequest `object`

### DescribePlaceIndexResponse
* DescribePlaceIndexResponse `object`
  * CreateTime **required**
  * DataSource **required**
  * DataSourceConfiguration **required**
    * IntendedUse
  * Description **required**
  * IndexArn **required**
  * IndexName **required**
  * UpdateTime **required**

### DescribeTrackerRequest
* DescribeTrackerRequest `object`

### DescribeTrackerResponse
* DescribeTrackerResponse `object`
  * CreateTime **required**
  * Description **required**
  * TrackerArn **required**
  * TrackerName **required**
  * UpdateTime **required**

### DevicePosition
* DevicePosition `object`: Contains the device position details.
  * DeviceId
  * Position **required**
    * items [Double](#double)
  * ReceivedTime **required**
  * SampleTime **required**

### DevicePositionList
* DevicePositionList `array`
  * items [DevicePosition](#deviceposition)

### DevicePositionUpdate
* DevicePositionUpdate `object`: Contains the position update details for a device.
  * DeviceId **required**
  * Position **required**
    * items [Double](#double)
  * SampleTime **required**

### DisassociateTrackerConsumerRequest
* DisassociateTrackerConsumerRequest `object`

### DisassociateTrackerConsumerResponse
* DisassociateTrackerConsumerResponse `object`

### Double
* Double `number`

### GeofenceGeometry
* GeofenceGeometry `object`: <p>Contains the geofence geometry details.</p> <note> <p>Limitation — Amazon Location does not currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
  * Polygon
    * items [LinearRing](#linearring)

### GetDevicePositionHistoryRequest
* GetDevicePositionHistoryRequest `object`
  * EndTimeExclusive
  * NextToken
  * StartTimeInclusive

### GetDevicePositionHistoryResponse
* GetDevicePositionHistoryResponse `object`
  * DevicePositions **required**
    * items [DevicePosition](#deviceposition)
  * NextToken

### GetDevicePositionRequest
* GetDevicePositionRequest `object`

### GetDevicePositionResponse
* GetDevicePositionResponse `object`
  * DeviceId
  * Position **required**
    * items [Double](#double)
  * ReceivedTime **required**
  * SampleTime **required**

### GetGeofenceRequest
* GetGeofenceRequest `object`

### GetGeofenceResponse
* GetGeofenceResponse `object`
  * CreateTime **required**
  * GeofenceId **required**
  * Geometry **required**
    * Polygon
      * items [LinearRing](#linearring)
  * Status **required**
  * UpdateTime **required**

### GetMapGlyphsRequest
* GetMapGlyphsRequest `object`

### GetMapGlyphsRequestFontUnicodeRangeString
* GetMapGlyphsRequestFontUnicodeRangeString `string`

### GetMapGlyphsResponse
* GetMapGlyphsResponse `object`
  * Blob

### GetMapSpritesRequest
* GetMapSpritesRequest `object`

### GetMapSpritesRequestFileNameString
* GetMapSpritesRequestFileNameString `string`

### GetMapSpritesResponse
* GetMapSpritesResponse `object`
  * Blob

### GetMapStyleDescriptorRequest
* GetMapStyleDescriptorRequest `object`

### GetMapStyleDescriptorResponse
* GetMapStyleDescriptorResponse `object`
  * Blob

### GetMapTileRequest
* GetMapTileRequest `object`

### GetMapTileRequestXString
* GetMapTileRequestXString `string`

### GetMapTileRequestYString
* GetMapTileRequestYString `string`

### GetMapTileRequestZString
* GetMapTileRequestZString `string`

### GetMapTileResponse
* GetMapTileResponse `object`
  * Blob

### Id
* Id `string`

### IntendedUse
* IntendedUse `string` (values: SingleUse, Storage)

### InternalServerException


### LinearRing
* LinearRing `array`
  * items [Position](#position)

### LinearRings
* LinearRings `array`
  * items [LinearRing](#linearring)

### ListGeofenceCollectionsRequest
* ListGeofenceCollectionsRequest `object`
  * MaxResults
  * NextToken

### ListGeofenceCollectionsRequestMaxResultsInteger
* ListGeofenceCollectionsRequestMaxResultsInteger `integer`

### ListGeofenceCollectionsResponse
* ListGeofenceCollectionsResponse `object`
  * Entries **required**
    * items [ListGeofenceCollectionsResponseEntry](#listgeofencecollectionsresponseentry)
  * NextToken

### ListGeofenceCollectionsResponseEntry
* ListGeofenceCollectionsResponseEntry `object`: Contains the geofence collection details.
  * CollectionName **required**
  * CreateTime **required**
  * Description **required**
  * UpdateTime **required**

### ListGeofenceCollectionsResponseEntryList
* ListGeofenceCollectionsResponseEntryList `array`
  * items [ListGeofenceCollectionsResponseEntry](#listgeofencecollectionsresponseentry)

### ListGeofenceResponseEntry
* ListGeofenceResponseEntry `object`: Contains a list of geofences stored in a given geofence collection.
  * CreateTime **required**
  * GeofenceId **required**
  * Geometry **required**
    * Polygon
      * items [LinearRing](#linearring)
  * Status **required**
  * UpdateTime **required**

### ListGeofenceResponseEntryList
* ListGeofenceResponseEntryList `array`
  * items [ListGeofenceResponseEntry](#listgeofenceresponseentry)

### ListGeofencesRequest
* ListGeofencesRequest `object`
  * NextToken

### ListGeofencesResponse
* ListGeofencesResponse `object`
  * Entries **required**
    * items [ListGeofenceResponseEntry](#listgeofenceresponseentry)
  * NextToken

### ListMapsRequest
* ListMapsRequest `object`
  * MaxResults
  * NextToken

### ListMapsRequestMaxResultsInteger
* ListMapsRequestMaxResultsInteger `integer`

### ListMapsResponse
* ListMapsResponse `object`
  * Entries **required**
    * items [ListMapsResponseEntry](#listmapsresponseentry)
  * NextToken

### ListMapsResponseEntry
* ListMapsResponseEntry `object`: Contains details of an existing map resource in your AWS account.
  * CreateTime **required**
  * DataSource **required**
  * Description **required**
  * MapName **required**
  * UpdateTime **required**

### ListMapsResponseEntryList
* ListMapsResponseEntryList `array`
  * items [ListMapsResponseEntry](#listmapsresponseentry)

### ListPlaceIndexesRequest
* ListPlaceIndexesRequest `object`
  * MaxResults
  * NextToken

### ListPlaceIndexesRequestMaxResultsInteger
* ListPlaceIndexesRequestMaxResultsInteger `integer`

### ListPlaceIndexesResponse
* ListPlaceIndexesResponse `object`
  * Entries **required**
    * items [ListPlaceIndexesResponseEntry](#listplaceindexesresponseentry)
  * NextToken

### ListPlaceIndexesResponseEntry
* ListPlaceIndexesResponseEntry `object`: A Place index resource listed in your AWS account.
  * CreateTime **required**
  * DataSource **required**
  * Description **required**
  * IndexName **required**
  * UpdateTime **required**

### ListPlaceIndexesResponseEntryList
* ListPlaceIndexesResponseEntryList `array`
  * items [ListPlaceIndexesResponseEntry](#listplaceindexesresponseentry)

### ListTrackerConsumersRequest
* ListTrackerConsumersRequest `object`
  * MaxResults
  * NextToken

### ListTrackerConsumersRequestMaxResultsInteger
* ListTrackerConsumersRequestMaxResultsInteger `integer`

### ListTrackerConsumersResponse
* ListTrackerConsumersResponse `object`
  * ConsumerArns **required**
    * items [Arn](#arn)
  * NextToken

### ListTrackersRequest
* ListTrackersRequest `object`
  * MaxResults
  * NextToken

### ListTrackersRequestMaxResultsInteger
* ListTrackersRequestMaxResultsInteger `integer`

### ListTrackersResponse
* ListTrackersResponse `object`
  * Entries **required**
    * items [ListTrackersResponseEntry](#listtrackersresponseentry)
  * NextToken

### ListTrackersResponseEntry
* ListTrackersResponseEntry `object`: Contains the tracker resource details.
  * CreateTime **required**
  * Description **required**
  * TrackerName **required**
  * UpdateTime **required**

### ListTrackersResponseEntryList
* ListTrackersResponseEntryList `array`
  * items [ListTrackersResponseEntry](#listtrackersresponseentry)

### MapConfiguration
* MapConfiguration `object`: Specifies the map tile style selected from an available provider.
  * Style **required**

### MapStyle
* MapStyle `string`

### Place
* Place `object`: Contains details about addresses or points of interest that match the search criteria.
  * AddressNumber
  * Country
  * Geometry **required** [PlaceGeometry](#placegeometry)
  * Label
  * Municipality
  * Neighborhood
  * PostalCode
  * Region
  * Street
  * SubRegion

### PlaceGeometry
* PlaceGeometry `object`: Places uses a point geometry to specify a location or a Place.
  * Point
    * items [Double](#double)

### PlaceIndexSearchResultLimit
* PlaceIndexSearchResultLimit `integer`

### Position
* Position `array`
  * items [Double](#double)

### PricingPlan
* PricingPlan `string` (values: RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)

### PutGeofenceRequest
* PutGeofenceRequest `object`
  * Geometry **required**
    * Polygon
      * items [LinearRing](#linearring)

### PutGeofenceResponse
* PutGeofenceResponse `object`
  * CreateTime **required**
  * GeofenceId **required**
  * UpdateTime **required**

### ResourceDescription
* ResourceDescription `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### SearchForPositionResult
* SearchForPositionResult `object`: Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the Place index Resource.
  * Place **required**
    * AddressNumber
    * Country
    * Geometry **required** [PlaceGeometry](#placegeometry)
    * Label
    * Municipality
    * Neighborhood
    * PostalCode
    * Region
    * Street
    * SubRegion

### SearchForPositionResultList
* SearchForPositionResultList `array`
  * items [SearchForPositionResult](#searchforpositionresult)

### SearchForTextResult
* SearchForTextResult `object`: Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
  * Place **required**
    * AddressNumber
    * Country
    * Geometry **required** [PlaceGeometry](#placegeometry)
    * Label
    * Municipality
    * Neighborhood
    * PostalCode
    * Region
    * Street
    * SubRegion

### SearchForTextResultList
* SearchForTextResultList `array`
  * items [SearchForTextResult](#searchfortextresult)

### SearchPlaceIndexForPositionRequest
* SearchPlaceIndexForPositionRequest `object`
  * MaxResults
  * Position **required**
    * items [Double](#double)

### SearchPlaceIndexForPositionResponse
* SearchPlaceIndexForPositionResponse `object`
  * Results **required**
    * items [SearchForPositionResult](#searchforpositionresult)
  * Summary **required**
    * DataSource **required**
    * MaxResults
    * Position **required**
      * items [Double](#double)

### SearchPlaceIndexForPositionSummary
* SearchPlaceIndexForPositionSummary `object`: A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
  * DataSource **required**
  * MaxResults
  * Position **required**
    * items [Double](#double)

### SearchPlaceIndexForTextRequest
* SearchPlaceIndexForTextRequest `object`
  * BiasPosition
    * items [Double](#double)
  * FilterBBox
    * items [Double](#double)
  * FilterCountries
    * items [CountryCode](#countrycode)
  * MaxResults
  * Text **required**

### SearchPlaceIndexForTextResponse
* SearchPlaceIndexForTextResponse `object`
  * Results **required**
    * items [SearchForTextResult](#searchfortextresult)
  * Summary **required**
    * BiasPosition
      * items [Double](#double)
    * DataSource **required**
    * FilterBBox
      * items [Double](#double)
    * FilterCountries
      * items [CountryCode](#countrycode)
    * MaxResults
    * ResultBBox
      * items [Double](#double)
    * Text **required**

### SearchPlaceIndexForTextSummary
* SearchPlaceIndexForTextSummary `object`: A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
  * BiasPosition
    * items [Double](#double)
  * DataSource **required**
  * FilterBBox
    * items [Double](#double)
  * FilterCountries
    * items [CountryCode](#countrycode)
  * MaxResults
  * ResultBBox
    * items [Double](#double)
  * Text **required**

### String
* String `string`

### SyntheticSearchPlaceIndexForTextRequestString
* SyntheticSearchPlaceIndexForTextRequestString `string`

### SyntheticSearchPlaceIndexForTextSummaryString
* SyntheticSearchPlaceIndexForTextSummaryString `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### Token
* Token `string`

### ValidationException



