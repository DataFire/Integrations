# @datafire/mercedes_benz_configurator

Client library for Car Configurator

## Installation and Usage
```bash
npm install --save @datafire/mercedes_benz_configurator
```
```js
let mercedes_benz_configurator = require('@datafire/mercedes_benz_configurator').create();

.then(data => {
  console.log(data);
});
```

## Description

The Car Configurator API offers access to the Mercedes-Benz car configuration functions. It provides required reference data such as the masterdata of all Mercedes-Benz vehicles as well as functions to retrieve initial and changed configurations. In addition to that is is possible to save a newly created configuration so that it can be easily restored or shared with others.

## Actions

### marketsGET
Get all available `Markets`. Optional query params **language** or **country** may be used to filter the result.


```js
mercedes_benz_configurator.marketsGET({}, context)
```

#### Input
* input `object`
  * language `string`: This is a ISO language string e.g. 'de' and is spoken in Austria 'AT', Germany 'DE' and Swiss 'CH'.
  * country `string`: This is a ISO country string e.g. Germany 'DE' or Swiss 'CH'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output `array`
  * items [Market](#market)

### marketGET
Gets the `Market` for the given **marketId**. There are no query parameters to filter the result.


```js
mercedes_benz_configurator.marketGET({
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [Market](#market)

### bodiesGET
Get all available `VehicleBodies` for the given **marketId**. Optional query params **classId** **bodyId** or **productGroups** may be used to filter the result and must conform to the pattern [0-9A-Z_-]+.


```js
mercedes_benz_configurator.bodiesGET({
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * classId `string`: This is a class id e.g. '176' for 'A-Class' in Germany.
  * bodyId `string`: This is a body id e.g. '1' for 'Limousine' in Germany.
  * productGroups `array`: Specifies to which product groups the vehicles belong which should be returned. The product groups are separated from each other by a comma and are case sensitive. Allowed values are:
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output `array`
  * items [VehicleBody](#vehiclebody)

### bodyGET
Get the `VehicleBody` for the given **marketId** and **bodyId**.


```js
mercedes_benz_configurator.bodyGET({
  "marketId": "",
  "bodyId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * bodyId **required** `string`: This is a body id e.g. '1' for 'Limousine' in Germany.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleBody](#vehiclebody)

### classesGET
Get all available `VehicleClasses` objects for the given **marketId**. Optional query params **classId**, **bodyId** or **productGroups** may be used to filter the result and must conform to the pattern [0-9A-Z_-]+.


```js
mercedes_benz_configurator.classesGET({
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * classId `string`: This is a class id e.g. '176' for 'A-Class' in Germany.
  * bodyId `string`: This is a body id e.g. '1' for 'Limousine' in Germany.
  * productGroups `array`: Specifies to which product groups the vehicles belong which should be returned. The product groups are separated from each other by a comma and are case sensitive. Allowed values are:
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output `array`
  * items [VehicleClass](#vehicleclass)

### classGET
Get the `VehicleClass` for the given **marketId** and **classId**.


```js
mercedes_benz_configurator.classGET({
  "marketId": "",
  "classId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * classId **required** `string`: This is a class id e.g. '176' for 'A-Klasse' in Germany.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleClass](#vehicleclass)

### modelsGET
Get the available `VehicleModels` for the given **marketId**. Optional query params **classId**, **bodyId**, **baumuster4prefix**, **baumuster**, **nationalSalesType** or **productGroups** maybe used to filter the result. The baumuster4prefix must conform to the pattern [0-9]{4}.


```js
mercedes_benz_configurator.modelsGET({
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * classId `string`: This is a class id e.g. '176' for 'A-Class' in Germany.
  * bodyId `string`: This is a body id e.g. '1' for 'Limousine' in Germany.
  * baumuster4prefix `string`: The first four digits of a baumuster are called baumuster4prefix e.g. '1760' for 'Berline' in France.
  * baumuster `string`: This is a baumuster e.g. '176042' for 'A 180 Limousine' in Germany.
  * nationalSalesType `string`: This is the national sales type (NST) of a distinct baumuster. There is no predefined pattern for the NST, each market defines its NST. e.g. 'E07' in France, 0001 in Germany and ZA1 in South Africa Using the NST markets can define market specific conditions. e.g. different initial configuration, etc.
  * productGroups `array`: Specifies to which product groups the vehicles belong which should be returned. The product groups are separated from each other by a comma and are case sensitive. Allowed values are:
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output `array`
  * items [VehicleModel](#vehiclemodel)

### modelGET
Get the `VehicleModel` object for the given **marketId** and **modelId**.


```js
mercedes_benz_configurator.modelGET({
  "marketId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleModel](#vehiclemodel)

### modelConfigurationsGET
Get the initial `VehicleConfiguration` for the given **marketId** and **modelId**.


```js
mercedes_benz_configurator.modelConfigurationsGET({
  "marketId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleConfiguration](#vehicleconfiguration)

### modelConfigurationGET
Get the `VehicleConfiguration` for the given **marketId**, **modelId** and **configurationId**.


```js
mercedes_benz_configurator.modelConfigurationGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleConfiguration](#vehicleconfiguration)

### modelConfigurationAlternativesGET
Get the `VehicleAlternatives` for the given **marketId**, **modelId** and **configurationId** and the given **componentList** of changes.


```js
mercedes_benz_configurator.modelConfigurationAlternativesGET({
  "marketId": "",
  "modelId": "",
  "configurationId": "",
  "componentList": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.
  * componentList **required** `string`: A string representing the changes, in other words a list of components that will be added and removed. The following syntax is used for the components to be added and the components to be removed. The added components e.g. '+I-950_L-890' and the removed components e.g. '-I-953_L-696' and the delimiter between the added and removed components is ','. In one components string '+I-950_L-890,-I-953_L-696'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output `array`
  * items [VehicleAlternative](#vehiclealternative)

### imageComponentsGET
Returns URLs pointing to images in JPG format in the highest available resolution (depending on the component) of the vehicle's:
  * engine (1024x576 px),
  * rim (710x710 px),
  * trim (800x600 px),
  * paints (800x600 px),
  * upholstery (800x600 px) and
  * equipments (740x416 px).


```js
mercedes_benz_configurator.imageComponentsGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [ComponentsImagesResponse](#componentsimagesresponse)

### imageComponentsEngineGET
Returns a URL pointing to an image of the vehicles engine.  These images are available in the resolution 1024x576 px.


```js
mercedes_benz_configurator.imageComponentsEngineGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [EngineImageResponse](#engineimageresponse)

### imageComponentsEquipmentsGET
Returns URLs pointing to images of this vehicle's equipments. The images are available in the highest possible resolution (usually 740x416 px).


```js
mercedes_benz_configurator.imageComponentsEquipmentsGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [AllEquipmentImagesResponse](#allequipmentimagesresponse)

### imageComponentsEquipmentsByCodeGET
Returns URLs pointing to images of this vehicle's equipments. The images are available in the highest possible resolution (usually 740x416 px).


```js
mercedes_benz_configurator.imageComponentsEquipmentsByCodeGET({
  "marketId": "",
  "modelId": "",
  "configurationId": "",
  "componentCode": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.
  * componentCode **required** `string`: The value of the requested component group, e.g. '245'.

#### Output
* output [EquipmentImageResponse](#equipmentimageresponse)

### imageComponentsPaintGET
Returns URLs pointing to images of this vehicles paint.  These images are available in resolution 800x600 px.  Note there might be two paints (e.g. Smart, 'paint' for body panel and 'paint2' for the tridion cell)


```js
mercedes_benz_configurator.imageComponentsPaintGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [PaintImageResponse](#paintimageresponse)

### imageComponentsRimGET
Returns a URL pointing to an image of the vehicles rim.  These images are available in the resolution 710x710 px.


```js
mercedes_benz_configurator.imageComponentsRimGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [RimImageResponse](#rimimageresponse)

### imageComponentsTrimGET
Returns a URL pointing to an image of this vehicles trim.  These images are available in resolution 800x600 px.


```js
mercedes_benz_configurator.imageComponentsTrimGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [TrimImageResponse](#trimimageresponse)

### imageComponentsUpholsteryGET
Returns URLs pointing to images of the vehicle's upholsteries. Tge images are available in the highest possible resolution (usually 800x600 px).


```js
mercedes_benz_configurator.imageComponentsUpholsteryGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.

#### Output
* output [UpholsteryImageResponse](#upholsteryimageresponse)

### imageVehicleGET
Returns URLs pointing to PNG images of a vehicle with a white background.


```js
mercedes_benz_configurator.imageVehicleGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.
  * perspectives `string`: One or more perspectives as a comma separated String list e.g. 'EXT000,EXT010,INT1'.  The following perspectives are available:
  * roofOpen `boolean`: Set 'true', if you are looking for images with the roof open. This option is only valid for cabrios. Default is 'false'.
  * night `boolean`: Set 'true', if you are looking for images with a darker background and the vehicle's headlights turned on. Default is 'false'.

#### Output
* output [VehicleImageResponse](#vehicleimageresponse)

### modelConfigurationSelectablesGET
Get the selectable `VehicleComponents` and the `ComponentCategories` of the `VehicleConfiguration` for the given **marketId**, **modelId** and **configurationId**. Optional query param **componentType** may be used to filter the result.


```js
mercedes_benz_configurator.modelConfigurationSelectablesGET({
  "marketId": "",
  "modelId": "",
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * modelId **required** `string`: Minimal string that identifies a model e.g. '176042_002'. If no nationalSalesType is available, the modelId only consists of the baumuster e.g. '176042'.
  * configurationId **required** `string`: Minimal string that identifies a configuration e.g. 'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'. A codeType is only once within the configurationId e.g 'S-152-160-161' stands for the components with the componentId 'S-152', 'S-160' and 'S-161'. A new codeType is divided from the codes with a underscore e.g 'S-152-160-161_I-953_L-696'.
  * componentTypes `array`: A list of component types separated by a comma case insensitive. If nothing is defined all component types are returned. Allowed values are:
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleComponentTree](#vehiclecomponenttree)

### onlineCodePOST
Stores the configuration of the given **configurationId** and **modelId**


```js
mercedes_benz_configurator.onlineCodePOST({
  "marketId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * body **required** [OnlineCodeRequestBody](#onlinecoderequestbody)

#### Output
* output [OnlineCodeResponseBody](#onlinecoderesponsebody)

### onlineCodeGET
Gets the configuration for the given marketId and onlineCode.


```js
mercedes_benz_configurator.onlineCodeGET({
  "onlineCode": "",
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * onlineCode **required** `string`: OnlineCode string that identifies a vehicle configuration e.g. 'M6882554'.
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [VehicleConfiguration](#vehicleconfiguration)

### productGroupsGET
Get all configured active product groups for the given **marketId**.


```js
mercedes_benz_configurator.productGroupsGET({
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * marketId **required** `string`: This is a ISO 3166 language country string e.g. 'de_DE' or 'en_GB'.
  * fieldsFilter `array`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned.

#### Output
* output [ProductGroupsPerMarket](#productgroupspermarket)



## Definitions

### AllEquipmentImagesResponse
* AllEquipmentImagesResponse `object`: The response object holds either an error object, in case that the request was malformed, or an equipments object containing a map with all equipment urls for the requested vehicle with the equipment codes as map keys.
  * equipments **required** [EquipmentImageMap](#equipmentimagemap)

### Amount
* Amount `object`: Holds a value and unit.
  * unit `string`
  * value **required** `number`

### CodeImage
* CodeImage `object`: The code image contains an equipment code with a corresponding image URL.
  * code **required** `string`: The equipment code for the corresponding image.
  * url **required** `string`: An URL pointing to an image of an equipment.

### ComponentsImages
* ComponentsImages `object`: A set of URLs pointing to images of the vehicle in low resolution.
  * engine [ImageUrl](#imageurl)
  * equipments [EquipmentImageMap](#equipmentimagemap)
  * paint [PaintsImages](#paintsimages)
  * rim [CodeImage](#codeimage)
  * trim [CodeImage](#codeimage)
  * upholstery [CodeImage](#codeimage)

### ComponentsImagesResponse
* ComponentsImagesResponse `object`: Components images object
  * components [ComponentsImages](#componentsimages)

### DriveConcept
* DriveConcept `string` (values: COMBUSTOR, HYBRID, ELECTRIC, FUELCELL, UNDEFINED): The kind of drive concept of a vehicle. Where UNDEFINED is used as the default and/or error case.

### Engine
* Engine `object`: All technical information about a specific engine.
  * alternativeFuelType [FuelType](#fueltype)
  * capacity [Amount](#amount)
  * cylinder `string`
  * driveConcept [DriveConcept](#driveconcept)
  * emissionStandard `string`
  * engineConcept [EngineConcept](#engineconcept)
  * fuelEconomy [FuelEconomy](#fueleconomy)
  * fuelType **required** [FuelType](#fueltype)
  * powerHp [Amount](#amount)
  * powerHybridExtensionHp [Amount](#amount)
  * powerHybridExtensionKw [Amount](#amount)
  * powerKw [Amount](#amount)

### EngineConcept
* EngineConcept `string` (values: MONO_REGULAR, MONO_DIESEL, MONO_GAS, MONO_ELECTRIC, MONO_FUELCELL, BI_NGT, BI_NGD, BI_MILD, BI_PLUGIN, MONO_UNDEFINED, BI_UNDEFINED, BI_HYBRID_UNDEFINED, BI_COMBUSTION_UNDEFINED, UNDEFINED): The kind of fuel used by an engine of a vehicle determines the engine type. Where UNDEFINED is used as the default and/or error case.

### EngineImageResponse
* EngineImageResponse `object`: An engine image object
  * engine [ImageUrl](#imageurl)

### EquipmentImageMap
* EquipmentImageMap `object`: The map holds either an error object, in case that the request was malformed, or an equipments object containing a map with all equipment image urls for the requested vehicle with the equipment codes as map keys.

### EquipmentImageResponse
* EquipmentImageResponse `object`: An equipment image object
  * equipment [ImageUrl](#imageurl)

### FuelEconomy
* FuelEconomy `object`: This is for the fuel consumption holding a value and unit.
  * consumptionOfElectricityMax [Amount](#amount)
  * consumptionOfElectricityMin [Amount](#amount)
  * emissionCO2Max [Amount](#amount)
  * emissionCO2Min [Amount](#amount)
  * fuelConsumptionCityMax [Amount](#amount)
  * fuelConsumptionCityMin [Amount](#amount)
  * fuelConsumptionCombinedMax [Amount](#amount)
  * fuelConsumptionCombinedMin [Amount](#amount)
  * fuelConsumptionElectricity [Amount](#amount)
  * fuelConsumptionOverlandMax [Amount](#amount)
  * fuelConsumptionOverlandMin [Amount](#amount)

### FuelType
* FuelType `string` (values: NORMAL, SUPER, SUPERPLUS, DIESEL, HGAS, GAS, ELECTRIC, FUELCELL, UNDEFINED): The kind of fuel used by an engine of a vehicle. Where UNDEFINED is used as the default and/or error case.

### HRef
* HRef `object`: The URL to the specific resource.
  * href **required** `string`

### ImageComponentLink
* ImageComponentLink `object`: Link to VIM image API.
  * imageapi_component **required** [HRef](#href)

### ImageError
* ImageError `object`: The error object containing detailed information about the error.
  * code `string`
  * message `string`
  * uuid `string`

### ImageUrl
* ImageUrl `object`: An object describing an image URL that could be a vehicle image for example. This includes the URL to the content.
  * url `string`

### ImageUrlWithError
* ImageUrlWithError `object`: An object describing an image URL that could be a vehicle image for example. This includes the URL to the content. In case of an error that is related to the requested image material (e.g. perspective), an error object is present containing further information.
  * error [ImageError](#imageerror)
  * url `string`

### Market
* Market `object`: Represent a market (aka country) with a specific country and a language.
  * _links **required** [SelfReferencesLinks](#selfreferenceslinks)
  * country **required** `string`
  * language **required** `string`
  * marketId **required** `string`

### Nedc
* Nedc `object`: Holds all relevant informations for the Nedc 'New European Drive Cycle'.
  * consumption [NedcConsumption](#nedcconsumption)
  * electricRange [NedcAmount](#nedcamount)
  * emission [NedcEmission](#nedcemission)
  * weight [NedcAmount](#nedcamount)

### NedcAmount
* NedcAmount `object`: The Nedc 'New European Drive Cycle' specific amount holds the nedc specific values.
  * individual **required** [Amount](#amount)
  * max **required** [Amount](#amount)
  * min **required** [Amount](#amount)

### NedcConsumption
* NedcConsumption `object`: The Nedc 'New European Drive Cycle' consumption.
  * city [NedcGear](#nedcgear)
  * combined [NedcGear](#nedcgear)
  * country [NedcGear](#nedcgear)
  * electric [NedcAmount](#nedcamount)
  * weighted [NedcGear](#nedcgear)

### NedcEmission
* NedcEmission `object`: The Nedc 'New European Drive Cycle' emission.
  * city [NedcGear](#nedcgear)
  * combined [NedcGear](#nedcgear)
  * country [NedcGear](#nedcgear)
  * weighted [NedcAmount](#nedcamount)

### NedcGear
* NedcGear `object`: The gear of a vehicle. A vehicle can have a primary and a secondary gear.
  * primaryGear [NedcAmount](#nedcamount)
  * secondaryGear [NedcAmount](#nedcamount)

### OnlineCodeRequestBody
* OnlineCodeRequestBody `object`: JSON object containing the modelId and the configurationId
  * configurationId **required** `string`: String that identifies a configuration. e.g. E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J67-M23-M70-N18-N25-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-411-442-470-472-475-485-516-533-538-560-570-573-580-584-58U-591-620-70B-807-888-B03-B16-B51-K11-L18-R43-U60
  * modelId **required** `string`: String that identifies a model. e.g. '176042_002'

### OnlineCodeResponseBody
* OnlineCodeResponseBody `object`: The onlinecode is a unique identifier for a stored vehicle configuration.
  * onlineCode **required** `string`: String that identifies the online code

### PaintImageResponse
* PaintImageResponse `object`: A paint image object
  * paint [PaintsImages](#paintsimages)

### PaintsImages
* PaintsImages `object`: The upper (paint2) and the lower (paint1) paint of the vehicle.
  * paint1 [CodeImage](#codeimage)
  * paint2 [CodeImage](#codeimage)

### PriceInformation
* PriceInformation `object`: The prices, installment price, taxes and ISO currency of a vehicle.
  * currency **required** `string`
  * instalmentPrice `number`
  * netPrice **required** `number`
  * price **required** `number`
  * taxes **required** `array`
    * items [Tax](#tax)

### ProductGroup
* ProductGroup `object` (values: PKW, VAN, SMART): Represent a product group.
  * name **required** `string`

### ProductGroupsPerMarket
* ProductGroupsPerMarket `object`: Represent the active product groups for a market.
  * _links **required** [SelfModelLinks](#selfmodellinks)
  * market **required** [Market](#market)
  * productGroups **required** `array`
    * items [ProductGroup](#productgroup)

### RimImageResponse
* RimImageResponse `object`: A rim image object
  * rim [CodeImage](#codeimage)

### SelfConfigurationLinks
* SelfConfigurationLinks `object`: Links to self and configuration resources.
  * configuration **required** [HRef](#href)
  * self **required** [HRef](#href)

### SelfLink
* SelfLink `object`: Links to self.
  * self **required** [HRef](#href)

### SelfModelLinks
* SelfModelLinks `object`: Links to self and models resources.
  * models **required** [HRef](#href)
  * self **required** [HRef](#href)

### SelfReferencesLinks
* SelfReferencesLinks `object`: Market specific links to the specific resources. i.e. classes, bodies, etc.
  * bodies **required** [HRef](#href)
  * classes **required** [HRef](#href)
  * models **required** [HRef](#href)
  * productgroups **required** [HRef](#href)
  * self **required** [HRef](#href)

### SelfSelectablesImageVehicleLinks
* SelfSelectablesImageVehicleLinks `object`: Links to self and image resources.
  * imageapi_vehicle **required** [HRef](#href)
  * selectables **required** [HRef](#href)
  * self **required** [HRef](#href)

### Tax
* Tax `object`: The country specific tax information.
  * amount **required** `number`
  * baseAmount **required** `number`
  * charge **required** `number`
  * id **required** `string`
  * rate **required** `number`

### TechnicalInformation
* TechnicalInformation `object`: Contains all technical information calculated using BDAs.
  * acceleration [Amount](#amount)
  * doors `number`
  * energyEfficiencyClass `string`
  * engine **required** [Engine](#engine)
  * nedc [Nedc](#nedc)
  * seats `number`
  * topSpeed [Amount](#amount)
  * transmission **required** [Transmission](#transmission)
  * wltp [Wltp](#wltp)

### Transmission
* Transmission `object`: The transmission of the vehicle configuration.
  * code **required** `string`
  * codeType **required** `string`
  * name **required** `string`

### TrimImageResponse
* TrimImageResponse `object`: A trim image object
  * trim [CodeImage](#codeimage)

### UpholsteryImageResponse
* UpholsteryImageResponse `object`: An upholstery image object
  * upholstery [CodeImage](#codeimage)

### VehicleAlternative
* VehicleAlternative `object`: A vehicle alternative.
  * _links **required** [SelfSelectablesImageVehicleLinks](#selfselectablesimagevehiclelinks)
  * addedComponents **required** `array`
    * items [VehicleComponent](#vehiclecomponent)
  * configurationId **required** `string`
  * marketId **required** `string`
  * modelId **required** `string`
  * priceInformation **required** `object`
    * items [PriceInformation](#priceinformation)
  * removedComponents **required** `array`
    * items [VehicleComponent](#vehiclecomponent)
  * updatedComponents **required** `array`
    * items [VehicleComponent](#vehiclecomponent)

### VehicleBody
* VehicleBody `object`: The body of a Vehicle, e.g. 'Limousine'.
  * _links **required** [SelfModelLinks](#selfmodellinks)
  * bodyId **required** `string`
  * bodyName **required** `string`

### VehicleClass
* VehicleClass `object`: The class of a Vehicle, e.g. 'A-Class'.
  * _links **required** [SelfModelLinks](#selfmodellinks)
  * classId **required** `string`
  * className **required** `string`

### VehicleComponent
* VehicleComponent `object`: A vehicle component.
  * _links **required** [ImageComponentLink](#imagecomponentlink)
  * code **required** `string`
  * codeType **required** `string`
  * componentSortId **required** `number`
  * componentType **required** [VehicleComponentType](#vehiclecomponenttype)
  * description **required** `string`: HTML elements can be present
  * fixed **required** `boolean`: Cannot changed by the customer
  * hidden **required** `boolean`: Hidden, should not be displayed to the customer, not relevant for the customer
  * id **required** `string`
  * name **required** `string`
  * priceInformation **required** [PriceInformation](#priceinformation)
  * pseudoCode **required** `boolean`: Not relevant for the customer
  * selected **required** `boolean`: Selected by the customer
  * standard **required** `boolean`: Standard equipment

### VehicleComponentCategory
* VehicleComponentCategory `object`: The component category of a VehicleComponent.
  * cardinality **required** [VehicleComponentCategoryCardinality](#vehiclecomponentcategorycardinality)
  * categoryId **required** `string`
  * categoryName **required** `string`
  * categorySortId **required** `number`
  * componentIds **required** `array`
    * items [VehicleComponentId](#vehiclecomponentid)
  * subcategories **required** `array`
    * items [VehicleComponentCategory](#vehiclecomponentcategory)

### VehicleComponentCategoryCardinality
* VehicleComponentCategoryCardinality `string` (values: NOT_DEFINED, ONE_OR_NONE, EXACTLY_ONE, ARBITRARY): The cardinality of the vehicle components belong to component category.

### VehicleComponentId
* VehicleComponentId `object`: The component id of a VehicleComponent.
  * componentId **required** `string`

### VehicleComponentTree
* VehicleComponentTree `object`: Contains the vehicle components and the structure with component categories.
  * _links **required** [SelfLink](#selflink)
  * componentCategories **required** `array`
    * items [VehicleComponentCategory](#vehiclecomponentcategory)
  * vehicleComponents **required** `object`
    * componentId [VehicleComponent](#vehiclecomponent)

### VehicleComponentType
* VehicleComponentType `string` (values: ANY, WHEELS, PAINTS, UPHOLSTERIES, TRIMS, PACKAGES, LINES, SPECIAL_EDITION, SPECIAL_EQUIPMENT): The component type of a vehicle component.

### VehicleConfiguration
* VehicleConfiguration `object`: A vehicle configuration.
  * _links **required** [SelfSelectablesImageVehicleLinks](#selfselectablesimagevehiclelinks)
  * changeYear **required** `string`
  * configurationId **required** `string`
  * configurationPrice **required** [PriceInformation](#priceinformation)
  * initialPrice **required** [PriceInformation](#priceinformation)
  * marketId **required** `string`
  * modelId **required** `string`
  * modelYear **required** `string`
  * technicalInformation **required** [TechnicalInformation](#technicalinformation)
  * vehicleComponents **required** `array`
    * items [VehicleComponent](#vehiclecomponent)
  * wltpConfiguration **required** `boolean`

### VehicleImageResponse
* VehicleImageResponse `object`: The response object holds either an error object, in case that the request was malformed, or a vehicle object containing all urls for the requested perspectives.
  * vehicle **required** `object`: A map holding a vehicle image for each requested perspective, e.g. EXT000.

### VehicleModel
* VehicleModel `object`: The model of a Vehicle, e.g. '176042_002'.
  * _links **required** [SelfConfigurationLinks](#selfconfigurationlinks)
  * baumuster **required** `string`
  * modelId **required** `string`
  * name **required** `string`
  * nationalSalesType **required** `string`
  * priceInformation **required** [PriceInformation](#priceinformation)
  * productGroup **required** [ProductGroup](#productgroup)
  * shortName **required** `string`
  * vehicleBody **required** [VehicleBody](#vehiclebody)
  * vehicleClass **required** [VehicleClass](#vehicleclass)

### Wltp
* Wltp `object`: Holds all relevant informations for the Wltp 'Worldwide harmonized Light vehicles Test Procedure' drive cycle.
  * consumption [WltpConsumption](#wltpconsumption)
  * emission [WltpEmission](#wltpemission)

### WltpAmount
* WltpAmount `object`: The Wltp 'Worldwide harmonized Light vehicles Test Procedure' drive cycle specific amount holds the wltp specific values.
  * individual **required** [Amount](#amount)
  * max **required** [Amount](#amount)
  * min **required** [Amount](#amount)

### WltpConsumption
* WltpConsumption `object`: The Wltp 'Worldwide harmonized Light vehicles Test Procedure' consumption.
  * chargeDeplete [WltpGear](#wltpgear)
  * chargeDepleteCop [WltpGear](#wltpgear)
  * extraHigh [WltpGear](#wltpgear)
  * high [WltpGear](#wltpgear)
  * low [WltpGear](#wltpgear)
  * medium [WltpGear](#wltpgear)
  * total [WltpGear](#wltpgear)
  * weighted [WltpGear](#wltpgear)

### WltpElectricRange
* WltpElectricRange `object`: The allElectric and equivalentAllElectric range that a vehicle (pure-electic or hybrid) can reach
  * all [WltpAmount](#wltpamount)
  * equivalentAll [WltpAmount](#wltpamount)

### WltpEmission
* WltpEmission `object`: The Wltp 'Worldwide harmonized Light vehicles Test Procedure' emission.
  * chargeDeplete [WltpGear](#wltpgear)
  * chargeDepleteCop [WltpGear](#wltpgear)
  * chargeDepleteWeighted [WltpGear](#wltpgear)
  * extraHigh [WltpGear](#wltpgear)
  * high [WltpGear](#wltpgear)
  * low [WltpGear](#wltpgear)
  * lowMid [WltpGear](#wltpgear)
  * medium [WltpGear](#wltpgear)
  * total [WltpGear](#wltpgear)
  * weighted [WltpGear](#wltpgear)

### WltpGear
* WltpGear `object`: The gear of a vehicle. A vehicle can have a primary and a secondary gear.
  * primaryGear [WltpAmount](#wltpamount)
  * secondaryGear [WltpAmount](#wltpamount)

### WltpRange
* WltpRange `object`: The Wltp 'Worldwide harmonized Light vehicles Test Procedure' range.
  * high [WltpElectricRange](#wltpelectricrange)
  * low [WltpElectricRange](#wltpelectricrange)
  * lowMid [WltpElectricRange](#wltpelectricrange)
  * medium [WltpElectricRange](#wltpelectricrange)
  * total [WltpElectricRange](#wltpelectricrange)


