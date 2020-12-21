# @datafire/mercedes_benz_image

Client library for Vehicle Image

## Installation and Usage
```bash
npm install --save @datafire/mercedes_benz_image
```
```js
let mercedes_benz_image = require('@datafire/mercedes_benz_image').create();

.then(data => {
  console.log(data);
});
```

## Description

The vehicle images API offers access to original Mercedes-Benz vehicle images.  It provides access to exterior and interior images with parameters e.g. to modify the perspective and to display vehicles at day/nighttime.  In addition you can request component images of a vehicle's engine, paint, rim, trim, upholstery and equipments.

## Actions

### imageComponentsGET
Returns URLs pointing to images in JPG format in the highest available resolution (depending on the component) of the vehicle's:
  * engine (1024x576 px), 
  * rim (710x710 px), 
  * trim (800x600 px), 
  * paints (800x600 px), 
  * upholstery (800x600 px) and 
  * equipments (740x416 px).


```js
mercedes_benz_image.imageComponentsGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [ComponentsResponse](#componentsresponse)

### imageComponentsEngineGET
Returns a URL pointing to an image of the vehicles engine.  These images are available in the resolution 1024x576 px.


```js
mercedes_benz_image.imageComponentsEngineGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [EngineResponse](#engineresponse)

### imageComponentsEquipmentsGET
Returns URLs pointing to images of this vehicle's equipments. The images are available in the highest possible resolution (usually 740x416 px).


```js
mercedes_benz_image.imageComponentsEquipmentsGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [EquipmentResponse](#equipmentresponse)

### imageComponentsPaintGET
Returns URLs pointing to images of this vehicles paint.  These images are available in resolution 800x600 px.  Note there might be two paints (e.g. Smart, 'paint' for body panel and 'paint2' for the tridion cell)


```js
mercedes_benz_image.imageComponentsPaintGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [PaintResponse](#paintresponse)

### imageComponentsRimGET
Returns a URL pointing to an image of the vehicles rim.  These images are available in the resolution 710x710 px.


```js
mercedes_benz_image.imageComponentsRimGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [RimResponse](#rimresponse)

### imageComponentsTrimGET
Returns a URL pointing to an image of this vehicles trim.  These images are available in resolution 800x600 px.


```js
mercedes_benz_image.imageComponentsTrimGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [TrimResponse](#trimresponse)

### imageComponentsUpholsteryGET
Returns URLs pointing to images of the vehicle's upholsteries. Tge images are available in the highest possible resolution (usually 800x600 px).


```js
mercedes_benz_image.imageComponentsUpholsteryGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 

#### Output
* output [UpholsteryResponse](#upholsteryresponse)

### imageVehicleGET
Returns URLs pointing to PNG images of a vehicle with a transparent background.


```js
mercedes_benz_image.imageVehicleGET({
  "finorvin": ""
}, context)
```

#### Input
* input `object`
  * finorvin **required** `string`: The FIN or VIN of one specific vehicle. For testing purposes the following sample FINs are available (please note that these FINs are NOT available in the tryout): 
  * perspectives `string`: One or more perspectives as a comma separated String list e.g. 'EXT000,EXT010,INT1'.  The following perspectives are available:
  * roofOpen `boolean`: Set 'true', if you are looking for images with the roof open. This option is only valid for cabrios. Default is 'false'.
  * night `boolean`: Set 'true', if you are looking for images with a darker background and the vehicle's headlights turned on. Default is 'false'.

#### Output
* output [VehicleResponse](#vehicleresponse)



## Definitions

### CodeImage
* CodeImage `object`: The code image contains an equipment code with a corresponding image URL.
  * code **required** `string`: The equipment code for the corresponding image.
  * url **required** `string`: An URL pointing to an image of an equipment.

### Components
* Components `object`: A set of URLs pointing to images of the vehicle in low resolution.
  * engine [ImageUrl](#imageurl)
  * equipments [EquipmentMap](#equipmentmap)
  * paint [Paints](#paints)
  * rim [CodeImage](#codeimage)
  * trim [CodeImage](#codeimage)
  * upholstery [CodeImage](#codeimage)

### ComponentsResponse
* ComponentsResponse `object`: A paint object
  * components [Components](#components)

### EngineResponse
* EngineResponse `object`: A paint object
  * engine [ImageUrl](#imageurl)

### EquipmentMap
* EquipmentMap `object`: The map holds equipments objects with the equipment codes as map keys and a corresponding list of image URLs for each code.

### EquipmentResponse
* EquipmentResponse `object`: The response object holds either an error object, in case that the request was malformed, or an equipments object containing a map with all equipment urls for the requested vehicle with the equipment codes as map keys.
  * equipments **required** [EquipmentMap](#equipmentmap)

### Error
* Error `object`: The error object containing detailed information about the error.
  * code `string`
  * message `string`

### ImageUrl
* ImageUrl `object`: An object describing an image URL that could be a vehicle image for example. This includes the URL to the content.      
  * url `string`

### ImageUrlArray
* ImageUrlArray `object`: An object describing a list of image URLs that could be an vehicle equipment images for example.
  * urls `array`
    * items `string`

### ImageUrlWithError
* ImageUrlWithError `object`: An object describing an image URL that could be a vehicle image for example. This includes the URL to the content. In case of an error that is related to the requested image material (e.g. perspective), an error object is present containing further information.
  * error [Error](#error)
  * url `string`

### PaintResponse
* PaintResponse `object`: A paint object
  * paint [Paints](#paints)

### Paints
* Paints `object`: The upper (paint2) and the lower (paint1) paint of the vehicle.
  * lowerPaint [CodeImage](#codeimage)
  * upperPaint [CodeImage](#codeimage)

### RimResponse
* RimResponse `object`: A rim object
  * rim [CodeImage](#codeimage)

### TrimResponse
* TrimResponse `object`: A trim object
  * trim [CodeImage](#codeimage)

### UpholsteryResponse
* UpholsteryResponse `object`: A paint object
  * upholstery [CodeImage](#codeimage)

### VehicleResponse
* VehicleResponse `object`: The response object holds either an error object, in case that the request was malformed, or a vehicle object containing all urls for the requested perspectives.
  * vehicle **required** `object`: A map holding a vehicle image for each requested perspective, e.g. EXT000.


