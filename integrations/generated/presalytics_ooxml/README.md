# @datafire/presalytics_ooxml

Client library for OOXML Automation

## Installation and Usage
```bash
npm install --save @datafire/presalytics_ooxml
```
```js
let presalytics_ooxml = require('@datafire/presalytics_ooxml').create();

.then(data => {
  console.log(data);
});
```

## Description

This API helps users convert Excel and Powerpoint documents into rich, live dashboards and stories.

## Actions

### chart_axes_get_id
Get by Id: Use this method to retrieve a Axes object by its primary key (id)


```js
presalytics_ooxml.chart_axes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.Axes](#chart.axes)

### chart_axisdatatypes_get
List Types: Use this method to retreive a list of possible options for the AxisDataTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.


```js
presalytics_ooxml.chart_axisdatatypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Chart.AxisDataTypes](#chart.axisdatatypes)

### chart_axisdatatypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.chart_axisdatatypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Chart.AxisDataTypes](#chart.axisdatatypes)

### chart_axisdatatypes_get_id
Get by Id: Use this method to retrieve a AxisDataTypes object by its primary key (id)


```js
presalytics_ooxml.chart_axisdatatypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.AxisDataTypes](#chart.axisdatatypes)

### chart_chartdata_get_id
Get by Id: Use this method to retrieve a ChartData object by its primary key (id)


```js
presalytics_ooxml.chart_chartdata_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.ChartData](#chart.chartdata)

### charts_charts_chartupdate_get_id
Gets a ChartDataDTO object, usually used for downstream analytics and chart updates


```js
presalytics_ooxml.charts_charts_chartupdate_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.ChartDataDTO](#chart.chartdatadto)

### charts_charts_chartupdate_put_id
Simplifies chart update by allowing users to supply data via ChartDataDTO


```js
presalytics_ooxml.charts_charts_chartupdate_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Chart Id
  * body [Chart.ChartDataDTO](#chart.chartdatadto)

#### Output
*Output schema unknown*

### charts_charts_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Chart and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.charts_charts_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### chart_columncollections_get_id
Get by Id: Use this method to retrieve a ColumnCollections object by its primary key (id)


```js
presalytics_ooxml.chart_columncollections_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.ColumnCollections](#chart.columncollections)

### chart_columns_get_id
Get by Id: Use this method to retrieve a Columns object by its primary key (id)


```js
presalytics_ooxml.chart_columns_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.Columns](#chart.columns)

### chart_datapoints_get_id
Get by Id: Use this method to retrieve a DataPoints object by its primary key (id)


```js
presalytics_ooxml.chart_datapoints_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.DataPoints](#chart.datapoints)

### charts_charts_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.charts_charts_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.Charts.Details](#chart.charts.details)

### charts_charts_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Chart object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Chart objects.


```js
presalytics_ooxml.charts_charts_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### charts_charts_openofficexml_put_id
Directly eidt the underlying xml of a Chart object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Chart objects.


```js
presalytics_ooxml.charts_charts_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### chart_plottype_get
List Types: Use this method to retreive a list of possible options for the PlotType type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.


```js
presalytics_ooxml.chart_plottype_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Chart.PlotType](#chart.plottype)

### chart_plottype_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.chart_plottype_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Chart.PlotType](#chart.plottype)

### chart_plottype_get_id
Get by Id: Use this method to retrieve a PlotType object by its primary key (id)


```js
presalytics_ooxml.chart_plottype_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.PlotType](#chart.plottype)

### chart_rowcol_get
List Types: Use this method to retreive a list of possible options for the RowCol type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.


```js
presalytics_ooxml.chart_rowcol_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Chart.RowCol](#chart.rowcol)

### chart_rowcol_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.chart_rowcol_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Chart.RowCol](#chart.rowcol)

### chart_rowcol_get_id
Get by Id: Use this method to retrieve a RowCol object by its primary key (id)


```js
presalytics_ooxml.chart_rowcol_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.RowCol](#chart.rowcol)

### chart_rowcollections_get_id
Get by Id: Use this method to retrieve a RowCollections object by its primary key (id)


```js
presalytics_ooxml.chart_rowcollections_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.RowCollections](#chart.rowcollections)

### chart_rownameformattypes_get
List Types: Use this method to retreive a list of possible options for the RowNameFormatTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.


```js
presalytics_ooxml.chart_rownameformattypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Chart.RowNameFormatTypes](#chart.rownameformattypes)

### chart_rownameformattypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.chart_rownameformattypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Chart.RowNameFormatTypes](#chart.rownameformattypes)

### chart_rownameformattypes_get_id
Get by Id: Use this method to retrieve a RowNameFormatTypes object by its primary key (id)


```js
presalytics_ooxml.chart_rownameformattypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.RowNameFormatTypes](#chart.rownameformattypes)

### chart_rows_get_id
Get by Id: Use this method to retrieve a Rows object by its primary key (id)


```js
presalytics_ooxml.chart_rows_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Chart.Rows](#chart.rows)

### charts_charts_svg_get_id_use_cache
This endpoint is helpful for rending this Chart as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.charts_charts_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### charts_charts_get_id
Get by Id: Use this method to retrieve a Charts object by its primary key (id)


```js
presalytics_ooxml.charts_charts_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Chart.Charts](#chart.charts)

### slides_connectionshapes_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_connectionshapes_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_connectionshapes_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_connectionshapes_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.Connector.Details](#slide.connector.details)

### slides_connectionshapes_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_connectionshapes_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_connectionshapes_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_connectionshapes_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_connectionshapes_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_connectionshapes_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_connectionshapes_get_id
Get by Id: Use this method to retrieve a ConnectionShapes object by its primary key (id)


```js
presalytics_ooxml.slides_connectionshapes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.Connector](#slide.connector)

### documents_post
Upload an OpenOfficeXml document (e.g., .xlsx, .pptx) for processing by the API.


```js
presalytics_ooxml.documents_post({
  "file": "",
  "storyId": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`: The file to upload.  Must be of type .pptx, ppt
  * storyId **required** `string`: The story_id of the document being uploaded.

#### Output
* output `array`
  * items [Document](#document)

### documents_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this DocumentsController and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.documents_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### documents_clone_post_id
Clone A Document that has already been uploaded to a new Story


```js
presalytics_ooxml.documents_clone_post_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the Source document Id
  * body [DocumentCloneDTO](#documentclonedto)

#### Output
* output [Document](#document)

### documents_documenttype_get
List Types: Use this method to retreive a list of possible options for the DocumentType type. Use the Id from oneof the returned elements on to make changes to elements in the Documents object space.


```js
presalytics_ooxml.documents_documenttype_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DocumentType](#documenttype)

### documents_documenttype_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.documents_documenttype_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [DocumentType](#documenttype)

### documents_documenttype_get_id
Get by Id: Use this method to retrieve a DocumentType object by its primary key (id)


```js
presalytics_ooxml.documents_documenttype_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DocumentType](#documenttype)

### documents_download_get_id_orginal
Download the into a bytestream for client-side processing.


```js
presalytics_ooxml.documents_download_get_id_orginal({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * orginal `boolean`

#### Output
* output `string`

### documents_delete_id
Permantly delete a document from the Ooxml Automation API. Note that is does not make changes to the related Presalytics APIs.
Please use the delete endpoint in the story API to ensure that stories are not left with orphaned references to the Ooxml Automation API.


```js
presalytics_ooxml.documents_delete_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### documents_get_id
Get by Id: Use this method to retrieve a Documents object by its primary key (id)


```js
presalytics_ooxml.documents_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Document](#document)

### slides_groups_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_groups_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_groups_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_groups_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.Groups.Details](#slide.groups.details)

### slides_groups_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_groups_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_groups_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_groups_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_groups_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_groups_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_groups_get_id
Get by Id: Use this method to retrieve a Groups object by its primary key (id)


```js
presalytics_ooxml.slides_groups_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.Groups](#slide.groups)

### shared_images_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Shared and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.shared_images_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### shared_images_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.shared_images_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.Pictures.Details](#shared.pictures.details)

### shared_images_getimage_put_id
Download Images extracted from Ooxml Documents


```js
presalytics_ooxml.shared_images_getimage_put_id({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`: The Image Id

#### Output
*Output schema unknown*

### shared_images_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Shared object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Shared objects.


```js
presalytics_ooxml.shared_images_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### shared_images_openofficexml_put_id
Directly eidt the underlying xml of a Shared object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Shared objects.


```js
presalytics_ooxml.shared_images_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### shared_images_svg_get_id_use_cache
This endpoint is helpful for rending this Shared as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.shared_images_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### shared_images_get_id
Get by Id: Use this method to retrieve a Images object by its primary key (id)


```js
presalytics_ooxml.shared_images_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Shared.Pictures](#shared.pictures)

### slides_shapetrees_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_shapetrees_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_shapetrees_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_shapetrees_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.ShapeTrees.Details](#slide.shapetrees.details)

### slides_shapetrees_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_shapetrees_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_shapetrees_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_shapetrees_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_shapetrees_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_shapetrees_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_shapetrees_get_id
Get by Id: Use this method to retrieve a ShapeTrees object by its primary key (id)


```js
presalytics_ooxml.slides_shapetrees_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.ShapeTrees](#slide.shapetrees)

### slides_shapes_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_shapes_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_shapes_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_shapes_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.Shapes.Details](#slide.shapes.details)

### slides_shapes_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_shapes_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_shapes_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_shapes_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_shapes_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_shapes_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_shapes_get_id
Get by Id: Use this method to retrieve a Shapes object by its primary key (id)


```js
presalytics_ooxml.slides_shapes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.Shapes](#slide.shapes)

### shared_colortransformationattributes_get_id
Get by Id: Use this method to retrieve a ColorTransformationAttributes object by its primary key (id)


```js
presalytics_ooxml.shared_colortransformationattributes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.ColorTransformationAttributes](#shared.colortransformationattributes)

### shared_colortransformations_get_id
Get by Id: Use this method to retrieve a ColorTransformations object by its primary key (id)


```js
presalytics_ooxml.shared_colortransformations_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.ColorTransformations](#shared.colortransformations)

### shared_colortypes_get
List Types: Use this method to retreive a list of possible options for the ColorTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_colortypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.ColorTypes](#shared.colortypes)

### shared_colortypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_colortypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.ColorTypes](#shared.colortypes)

### shared_colortypes_get_id
Get by Id: Use this method to retrieve a ColorTypes object by its primary key (id)


```js
presalytics_ooxml.shared_colortypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.ColorTypes](#shared.colortypes)

### shared_dashtypes_get
List Types: Use this method to retreive a list of possible options for the DashTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_dashtypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.DashTypes](#shared.dashtypes)

### shared_dashtypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_dashtypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.DashTypes](#shared.dashtypes)

### shared_dashtypes_get_id
Get by Id: Use this method to retrieve a DashTypes object by its primary key (id)


```js
presalytics_ooxml.shared_dashtypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.DashTypes](#shared.dashtypes)

### shared_effectattributes_get_id
Get by Id: Use this method to retrieve a EffectAttributes object by its primary key (id)


```js
presalytics_ooxml.shared_effectattributes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.EffectAttributes](#shared.effectattributes)

### shared_effecttypes_get
List Types: Use this method to retreive a list of possible options for the EffectTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_effecttypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.EffectTypes](#shared.effecttypes)

### shared_effecttypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_effecttypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.EffectTypes](#shared.effecttypes)

### shared_effecttypes_get_id
Get by Id: Use this method to retrieve a EffectTypes object by its primary key (id)


```js
presalytics_ooxml.shared_effecttypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.EffectTypes](#shared.effecttypes)

### shared_effects_get_id
Get by Id: Use this method to retrieve a Effects object by its primary key (id)


```js
presalytics_ooxml.shared_effects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.Effects](#shared.effects)

### shared_fillmap_get_id
Get by Id: Use this method to retrieve a FillMap object by its primary key (id)


```js
presalytics_ooxml.shared_fillmap_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.FillMap](#shared.fillmap)

### shared_filltypes_get
List Types: Use this method to retreive a list of possible options for the FillTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_filltypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.FillTypes](#shared.filltypes)

### shared_filltypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_filltypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.FillTypes](#shared.filltypes)

### shared_filltypes_get_id
Get by Id: Use this method to retrieve a FillTypes object by its primary key (id)


```js
presalytics_ooxml.shared_filltypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.FillTypes](#shared.filltypes)

### shared_gradientfills_get_id
Get by Id: Use this method to retrieve a GradientFills object by its primary key (id)


```js
presalytics_ooxml.shared_gradientfills_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.GradientFills](#shared.gradientfills)

### shared_gradientstops_get_id
Get by Id: Use this method to retrieve a GradientStops object by its primary key (id)


```js
presalytics_ooxml.shared_gradientstops_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.GradientStops](#shared.gradientstops)

### shared_imagefills_get_id
Get by Id: Use this method to retrieve a ImageFills object by its primary key (id)


```js
presalytics_ooxml.shared_imagefills_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.ImageFills](#shared.imagefills)

### shared_lineendsizes_get
List Types: Use this method to retreive a list of possible options for the LineEndSizes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_lineendsizes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.LineEndSizes](#shared.lineendsizes)

### shared_lineendsizes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_lineendsizes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.LineEndSizes](#shared.lineendsizes)

### shared_lineendsizes_get_id
Get by Id: Use this method to retrieve a LineEndSizes object by its primary key (id)


```js
presalytics_ooxml.shared_lineendsizes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.LineEndSizes](#shared.lineendsizes)

### shared_lineendtypes_get
List Types: Use this method to retreive a list of possible options for the LineEndTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.


```js
presalytics_ooxml.shared_lineendtypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Shared.LineEndTypes](#shared.lineendtypes)

### shared_lineendtypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.shared_lineendtypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Shared.LineEndTypes](#shared.lineendtypes)

### shared_lineendtypes_get_id
Get by Id: Use this method to retrieve a LineEndTypes object by its primary key (id)


```js
presalytics_ooxml.shared_lineendtypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.LineEndTypes](#shared.lineendtypes)

### shared_lines_get_id
Get by Id: Use this method to retrieve a Lines object by its primary key (id)


```js
presalytics_ooxml.shared_lines_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.Lines](#shared.lines)

### shared_paragraph_get_id
Get by Id: Use this method to retrieve a Paragraph object by its primary key (id)


```js
presalytics_ooxml.shared_paragraph_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.Paragraph](#shared.paragraph)

### shared_solidfills_get_id
Get by Id: Use this method to retrieve a SolidFills object by its primary key (id)


```js
presalytics_ooxml.shared_solidfills_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.SolidFills](#shared.solidfills)

### shared_text_get_id
Get by Id: Use this method to retrieve a Text object by its primary key (id)


```js
presalytics_ooxml.shared_text_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.Text](#shared.text)

### shared_textcontainer_get_id
Get by Id: Use this method to retrieve a TextContainer object by its primary key (id)


```js
presalytics_ooxml.shared_textcontainer_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Shared.TextContainer](#shared.textcontainer)

### slides_slides_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_slides_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_colormaps_get_id
Get by Id: Use this method to retrieve a ColorMaps object by its primary key (id)


```js
presalytics_ooxml.slides_colormaps_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.ColorMaps](#slide.colormaps)

### slides_slides_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_slides_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.Slides.Details](#slide.slides.details)

### slides_graphictypes_get
List Types: Use this method to retreive a list of possible options for the GraphicTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.


```js
presalytics_ooxml.slides_graphictypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Slide.GraphicTypes](#slide.graphictypes)

### slides_graphictypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.slides_graphictypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Slide.GraphicTypes](#slide.graphictypes)

### slides_graphictypes_get_id
Get by Id: Use this method to retrieve a GraphicTypes object by its primary key (id)


```js
presalytics_ooxml.slides_graphictypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.GraphicTypes](#slide.graphictypes)

### slides_graphics_get_id
Get by Id: Use this method to retrieve a Graphics object by its primary key (id)


```js
presalytics_ooxml.slides_graphics_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.Graphics](#slide.graphics)

### slides_groupelementtypes_get
List Types: Use this method to retreive a list of possible options for the GroupElementTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.


```js
presalytics_ooxml.slides_groupelementtypes_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Slide.GroupElementTypes](#slide.groupelementtypes)

### slides_groupelementtypes_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.slides_groupelementtypes_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Slide.GroupElementTypes](#slide.groupelementtypes)

### slides_groupelementtypes_get_id
Get by Id: Use this method to retrieve a GroupElementTypes object by its primary key (id)


```js
presalytics_ooxml.slides_groupelementtypes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.GroupElementTypes](#slide.groupelementtypes)

### slides_groupelements_get_id
Get by Id: Use this method to retrieve a GroupElements object by its primary key (id)


```js
presalytics_ooxml.slides_groupelements_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.GroupElements](#slide.groupelements)

### slides_slides_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_slides_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_slides_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_slides_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_slidemasters_get_id
Get by Id: Use this method to retrieve a SlideMasters object by its primary key (id)


```js
presalytics_ooxml.slides_slidemasters_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.SlideMasters](#slide.slidemasters)

### slides_slides_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_slides_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_slides_get_id
Get by Id: Use this method to retrieve a Slides object by its primary key (id)


```js
presalytics_ooxml.slides_slides_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.Slides](#slide.slides)

### slides_smartarts_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.slides_smartarts_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### slides_smartarts_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.slides_smartarts_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Slide.SmartArts.Details](#slide.smartarts.details)

### slides_smartarts_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.


```js
presalytics_ooxml.slides_smartarts_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### slides_smartarts_openofficexml_put_id
Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.


```js
presalytics_ooxml.slides_smartarts_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### slides_smartarts_svg_get_id_use_cache
This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.slides_smartarts_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### slides_smartarts_get_id
Get by Id: Use this method to retrieve a SmartArts object by its primary key (id)


```js
presalytics_ooxml.slides_smartarts_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Slide.SmartArts](#slide.smartarts)

### tables_borders_get_id
Get by Id: Use this method to retrieve a Borders object by its primary key (id)


```js
presalytics_ooxml.tables_borders_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.Borders](#table.borders)

### tables_cells_get_id
Get by Id: Use this method to retrieve a Cells object by its primary key (id)


```js
presalytics_ooxml.tables_cells_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.Cells](#table.cells)

### tables_tables_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Table and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.tables_tables_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### tables_columns_get_id
Get by Id: Use this method to retrieve a Columns object by its primary key (id)


```js
presalytics_ooxml.tables_columns_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.Columns](#table.columns)

### tables_tables_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.tables_tables_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.Tables.Details](#table.tables.details)

### tables_tables_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Table object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Table objects.


```js
presalytics_ooxml.tables_tables_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### tables_tables_openofficexml_put_id
Directly eidt the underlying xml of a Table object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Table objects.


```js
presalytics_ooxml.tables_tables_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### tables_rows_get_id
Get by Id: Use this method to retrieve a Rows object by its primary key (id)


```js
presalytics_ooxml.tables_rows_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.Rows](#table.rows)

### tables_tables_svg_get_id_use_cache
This endpoint is helpful for rending this Table as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.tables_tables_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### tables_tables_tableupdate_get_id
Gets a TabletDataDTO object, usually used for downstream updates to table content


```js
presalytics_ooxml.tables_tables_tableupdate_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Table.TableDataDTO](#table.tabledatadto)

### tables_tables_tableupdate_put_id
Simplifies table update by allowing users to supply strings to table cells  via TableDataDTO


```js
presalytics_ooxml.tables_tables_tableupdate_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [Table.TableDataDTO](#table.tabledatadto)

#### Output
*Output schema unknown*

### tables_tables_get_id
Get by Id: Use this method to retrieve a Tables object by its primary key (id)


```js
presalytics_ooxml.tables_tables_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Table.Tables](#table.tables)

### themes_backgroundfills_get_id
Get by Id: Use this method to retrieve a BackgroundFills object by its primary key (id)


```js
presalytics_ooxml.themes_backgroundfills_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.BackgroundFills](#theme.backgroundfills)

### theme_themes_childobjects_get_id
This endpoint is helpful for helping users and bots identify dependent objects to this Theme and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.


```js
presalytics_ooxml.theme_themes_childobjects_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [ChildObjects](#childobjects)

### themes_colors_get_id
Get by Id: Use this method to retrieve a Colors object by its primary key (id)


```js
presalytics_ooxml.themes_colors_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.Colors](#theme.colors)

### themes_customcolors_get_id
Get by Id: Use this method to retrieve a CustomColors object by its primary key (id)


```js
presalytics_ooxml.themes_customcolors_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.CustomColors](#theme.customcolors)

### theme_themes_details_get_id
Returns object metadata and information about relative dependent objects 


```js
presalytics_ooxml.theme_themes_details_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.Themes.Details](#theme.themes.details)

### themes_effectmap_get_id
Get by Id: Use this method to retrieve a EffectMap object by its primary key (id)


```js
presalytics_ooxml.themes_effectmap_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.EffectMap](#theme.effectmap)

### themes_fills_get_id
Get by Id: Use this method to retrieve a Fills object by its primary key (id)


```js
presalytics_ooxml.themes_fills_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.Fills](#theme.fills)

### themes_fonts_get_id
Get by Id: Use this method to retrieve a Fonts object by its primary key (id)


```js
presalytics_ooxml.themes_fonts_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.Fonts](#theme.fonts)

### themes_intensity_get
List Types: Use this method to retreive a list of possible options for the Intensity type. Use the Id from oneof the returned elements on to make changes to elements in the Themes object space.


```js
presalytics_ooxml.themes_intensity_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Theme.Intensity](#theme.intensity)

### themes_intensity_typeid_get_type_id
This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.


```js
presalytics_ooxml.themes_intensity_typeid_get_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * type_id **required** `integer`

#### Output
* output [Theme.Intensity](#theme.intensity)

### themes_intensity_get_id
Get by Id: Use this method to retrieve a Intensity object by its primary key (id)


```js
presalytics_ooxml.themes_intensity_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.Intensity](#theme.intensity)

### themes_linemap_get_id
Get by Id: Use this method to retrieve a LineMap object by its primary key (id)


```js
presalytics_ooxml.themes_linemap_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Theme.LineMap](#theme.linemap)

### theme_themes_openofficexml_get_id_updated
Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Theme object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Theme objects.


```js
presalytics_ooxml.theme_themes_openofficexml_get_id_updated({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * updated `boolean`: Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)

#### Output
* output [OoxmlDTO](#ooxmldto)

### theme_themes_openofficexml_put_id
Directly eidt the underlying xml of a Theme object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Theme objects.


```js
presalytics_ooxml.theme_themes_openofficexml_put_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body [OoxmlDTO](#ooxmldto)

#### Output
*Output schema unknown*

### theme_themes_svg_get_id_use_cache
This endpoint is helpful for rending this Theme as an svg or image object that can then be rendered in a story, dashboard or website.


```js
presalytics_ooxml.theme_themes_svg_get_id_use_cache({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * use_cache `boolean`: Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)

#### Output
* output `string`: The file byte stream.

### theme_themes_get_id
Get by Id: Use this method to retrieve a Themes object by its primary key (id)


```js
presalytics_ooxml.theme_themes_get_id({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An Id of the respository DTO elemennt

#### Output
* output [Theme.Themes](#theme.themes)



## Definitions

### Chart.Axes
* Chart.Axes `object`
  * axisDataTypeId `integer`
  * chartsId `string`
  * id `string`
  * ooxmlId `integer`

### Chart.Axes.Details
* Chart.Axes.Details `object`
  * axisDataTypeId `integer`
  * chart [Chart.Charts.Details](#chart.charts.details)
  * chartsId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * ooxmlId `integer`
  * titleTextContainer [Shared.TextContainer.Details](#shared.textcontainer.details)
  * userCreated `string`
  * userModified `string`

### Chart.AxisDataTypes
* Chart.AxisDataTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * ooxmlName `string`
  * typeId `integer`

### Chart.ChartData
* Chart.ChartData `object`
  * chartId `string`
  * id `string`

### Chart.ChartData.Details
* Chart.ChartData.Details `object`
  * chart [Chart.Charts.Details](#chart.charts.details)
  * chartId `string`
  * columnCollection [Chart.ColumnCollections.Details](#chart.columncollections.details)
  * dataPoints `array`
    * items [Chart.DataPoints.Details](#chart.datapoints.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * rowCollection [Chart.RowCollections.Details](#chart.rowcollections.details)
  * userCreated `string`
  * userModified `string`

### Chart.ChartDataDTO
* Chart.ChartDataDTO `object`
  * categoryNames `array`
    * items `string`
  * chartId `string`
  * dataPoints `array`
    * items `array`
      * items `number`
  * seriesNames `array`
    * items `string`

### Chart.Charts
* Chart.Charts `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * id `string`
  * name `string`
  * packageUri `string`
  * parentGraphicId `string`
  * svgBlobUrl `string`

### Chart.Charts.Details
* Chart.Charts.Details `object`
  * axes `array`
    * items [Chart.Axes.Details](#chart.axes.details)
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * chartData [Chart.ChartData.Details](#chart.chartdata.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * name `string`
  * packageUri `string`
  * parentGraphic [Slide.Graphics.Details](#slide.graphics.details)
  * parentGraphicId `string`
  * svgBlobUrl `string`
  * titleTextContainer [Shared.TextContainer.Details](#shared.textcontainer.details)
  * userCreated `string`
  * userModified `string`

### Chart.ColumnCollections
* Chart.ColumnCollections `object`
  * chartDataId `string`
  * id `string`

### Chart.ColumnCollections.Details
* Chart.ColumnCollections.Details `object`
  * chartData [Chart.ChartData.Details](#chart.chartdata.details)
  * chartDataId `string`
  * columns `array`
    * items [Chart.Columns.Details](#chart.columns.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * userCreated `string`
  * userModified `string`

### Chart.Columns
* Chart.Columns `object`
  * axisId `string`
  * columnCollectionId `string`
  * id `string`
  * index `integer`
  * name `string`

### Chart.Columns.Details
* Chart.Columns.Details `object`
  * axis [Chart.Axes.Details](#chart.axes.details)
  * axisId `string`
  * columnCollection [Chart.ColumnCollections.Details](#chart.columncollections.details)
  * columnCollectionId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * index `integer`
  * name `string`
  * userCreated `string`
  * userModified `string`

### Chart.DataPoints
* Chart.DataPoints `object`
  * chartDataId `string`
  * columnId `string`
  * id `string`
  * rowId `string`
  * value `number`

### Chart.DataPoints.Details
* Chart.DataPoints.Details `object`
  * chartData [Chart.ChartData.Details](#chart.chartdata.details)
  * chartDataId `string`
  * column [Chart.Columns.Details](#chart.columns.details)
  * columnId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * row [Chart.Rows.Details](#chart.rows.details)
  * rowId `string`
  * userCreated `string`
  * userModified `string`
  * value `number`

### Chart.PlotType
* Chart.PlotType `object`
  * id `string`
  * plotQualifedAssy `string`
  * plotTypeName `string`
  * rowColTypeId `integer`
  * typeId `integer`

### Chart.RowCol
* Chart.RowCol `object`
  * colName `string`
  * colQualifiedAssy `string`
  * id `string`
  * rowName `string`
  * rowQualifedAssy `string`
  * typeId `integer`

### Chart.RowCollections
* Chart.RowCollections `object`
  * axisId `string`
  * chartDataId `string`
  * id `string`
  * nameFormatType `integer`

### Chart.RowCollections.Details
* Chart.RowCollections.Details `object`
  * axis [Chart.Axes.Details](#chart.axes.details)
  * axisId `string`
  * chartData [Chart.ChartData.Details](#chart.chartdata.details)
  * chartDataId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * nameFormatType `integer`
  * rows `array`
    * items [Chart.Rows.Details](#chart.rows.details)
  * userCreated `string`
  * userModified `string`

### Chart.RowNameFormatTypes
* Chart.RowNameFormatTypes `object`
  * formatCode `string`
  * id `string`
  * powerToolsId `integer`
  * typeId `integer`

### Chart.Rows
* Chart.Rows `object`
  * id `string`
  * index `integer`
  * name `string`
  * rowNameCollectionId `string`

### Chart.Rows.Details
* Chart.Rows.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * index `integer`
  * name `string`
  * rowNameCollection [Chart.RowCollections.Details](#chart.rowcollections.details)
  * rowNameCollectionId `string`
  * userCreated `string`
  * userModified `string`

### ChildObjects
* ChildObjects `object`
  * entityId `string`
  * entityName `string`
  * objectType `string`
  * parentEntityId `string`
  * parentObjectType `string`

### Document
* Document `object`
  * baseElementBlobUrl `string`
  * blobLocation `string`
  * changedBaseElementBlobUrl `string`
  * documentTypeId `integer`
  * filename `string`
  * id `string`
  * name `string`
  * ownerGuid `string`
  * packageUri `string`
  * storyId `string`
  * tableStylesXmlBlobUrl `string`
  * title `string`

### Document.Details
* Document.Details `object`
  * baseElementBlobUrl `string`
  * blobLocation `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * documentTypeId `integer`
  * filename `string`
  * id `string`
  * name `string`
  * ownerGuid `string`
  * packageUri `string`
  * slides `array`
    * items [Slide.Slides.Details](#slide.slides.details)
  * storyId `string`
  * tableStylesXmlBlobUrl `string`
  * title `string`
  * userCreated `string`
  * userModified `string`

### DocumentCloneDTO
* DocumentCloneDTO `object`
  * id `string`
  * storyId `string`

### DocumentType
* DocumentType `object`
  * description `string`
  * fileExtension `string`
  * id `string`
  * mimeType `string`
  * name `string`
  * ooxmlPackageType `string`
  * typeId `integer`

### OoxmlDTO
* OoxmlDTO `object`
  * id `string`
  * openOfficeXml `string`
  * type `string`

### ProblemDetails
* ProblemDetails `object`
  * detail `string`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`

### Shared.ColorTransformationAttributes
* Shared.ColorTransformationAttributes `object`
  * colorTransformationsId `string`
  * id `string`
  * name `string`
  * value `string`

### Shared.ColorTransformationAttributes.Details
* Shared.ColorTransformationAttributes.Details `object`
  * colorTransformation [Shared.ColorTransformations.Details](#shared.colortransformations.details)
  * colorTransformationsId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * name `string`
  * userCreated `string`
  * userModified `string`
  * value `string`

### Shared.ColorTransformations
* Shared.ColorTransformations `object`
  * id `string`
  * name `string`
  * solidFillsId `string`

### Shared.ColorTransformations.Details
* Shared.ColorTransformations.Details `object`
  * colorTransformationAttributes `array`
    * items [Shared.ColorTransformationAttributes.Details](#shared.colortransformationattributes.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * name `string`
  * parentSolidFill [Shared.SolidFills.Details](#shared.solidfills.details)
  * solidFillsId `string`
  * userCreated `string`
  * userModified `string`

### Shared.ColorTypes
* Shared.ColorTypes `object`
  * colorSchemeIndexValueEnum `integer`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Shared.DashTypes
* Shared.DashTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * serializedAs `string`
  * typeId `integer`

### Shared.EffectAttributes
* Shared.EffectAttributes `object`
  * attributesJson `string`
  * effectId `string`
  * effectTypeId `integer`
  * id `string`

### Shared.EffectAttributes.Details
* Shared.EffectAttributes.Details `object`
  * attributesJson `string`
  * dateCreated `string`
  * dateModified `string`
  * effect [Shared.Effects.Details](#shared.effects.details)
  * effectId `string`
  * effectTypeId `integer`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * id `string`
  * userCreated `string`
  * userModified `string`

### Shared.EffectTypes
* Shared.EffectTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Shared.Effects
* Shared.Effects `object`
  * connectorId `string`
  * effectMapId `string`
  * id `string`
  * name `string`
  * shapeId `string`

### Shared.Effects.Details
* Shared.Effects.Details `object`
  * connectorId `string`
  * dateCreated `string`
  * dateModified `string`
  * effectAttributes `array`
    * items [Shared.EffectAttributes.Details](#shared.effectattributes.details)
  * effectMap [Theme.EffectMap.Details](#theme.effectmap.details)
  * effectMapId `string`
  * id `string`
  * name `string`
  * parentConnector [Slide.Connector.Details](#slide.connector.details)
  * parentShape [Slide.Shapes.Details](#slide.shapes.details)
  * shapeId `string`
  * userCreated `string`
  * userModified `string`

### Shared.FillMap
* Shared.FillMap `object`
  * connectorId `string`
  * effectAttributeId `string`
  * fillTypeId `integer`
  * id `string`
  * shapeId `string`
  * tableCellId `string`
  * themeBackgroundFillId `string`
  * themeFillId `string`

### Shared.FillMap.Details
* Shared.FillMap.Details `object`
  * connector [Slide.Connector.Details](#slide.connector.details)
  * connectorId `string`
  * dateCreated `string`
  * dateModified `string`
  * effectAttribute [Shared.EffectAttributes.Details](#shared.effectattributes.details)
  * effectAttributeId `string`
  * fillTypeId `integer`
  * gradientFill [Shared.GradientFills.Details](#shared.gradientfills.details)
  * id `string`
  * imageFill [Shared.ImageFills.Details](#shared.imagefills.details)
  * shape [Slide.Shapes.Details](#slide.shapes.details)
  * shapeId `string`
  * solidFill [Shared.SolidFills.Details](#shared.solidfills.details)
  * tableCell [Table.Cells.Details](#table.cells.details)
  * tableCellId `string`
  * themeBackgroundFill [Theme.BackgroundFills.Details](#theme.backgroundfills.details)
  * themeBackgroundFillId `string`
  * themeFill [Theme.Fills.Details](#theme.fills.details)
  * themeFillId `string`
  * userCreated `string`
  * userModified `string`

### Shared.FillTypes
* Shared.FillTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Shared.GradientFills
* Shared.GradientFills `object`
  * angle `integer`
  * fillMapId `string`
  * id `string`
  * isPath `boolean`
  * pathType `string`
  * rotateWithShape `boolean`

### Shared.GradientFills.Details
* Shared.GradientFills.Details `object`
  * angle `integer`
  * dateCreated `string`
  * dateModified `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * fillMapId `string`
  * gradientStops `array`
    * items [Shared.GradientStops.Details](#shared.gradientstops.details)
  * id `string`
  * isPath `boolean`
  * pathType `string`
  * rotateWithShape `boolean`
  * userCreated `string`
  * userModified `string`

### Shared.GradientStops
* Shared.GradientStops `object`
  * gradientFillsId `string`
  * id `string`
  * position `integer`

### Shared.GradientStops.Details
* Shared.GradientStops.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * gradientFill [Shared.GradientFills.Details](#shared.gradientfills.details)
  * gradientFillsId `string`
  * id `string`
  * position `integer`
  * solidFill [Shared.SolidFills.Details](#shared.solidfills.details)
  * userCreated `string`
  * userModified `string`

### Shared.ImageFills
* Shared.ImageFills `object`
  * compressionState `string`
  * dpi `integer`
  * effectsJson `string`
  * fillMapId `string`
  * id `string`
  * rotateWithShape `boolean`
  * sourceRectangle `string`
  * stretch `boolean`
  * tile `string`

### Shared.ImageFills.Details
* Shared.ImageFills.Details `object`
  * compressionState `string`
  * dateCreated `string`
  * dateModified `string`
  * dpi `integer`
  * effectsJson `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * fillMapId `string`
  * id `string`
  * picture [Shared.Pictures.Details](#shared.pictures.details)
  * rotateWithShape `boolean`
  * sourceRectangle `string`
  * stretch `boolean`
  * tile `string`
  * userCreated `string`
  * userModified `string`

### Shared.LineEndSizes
* Shared.LineEndSizes `object`
  * description `string`
  * id `string`
  * name `string`
  * serializedAs `string`
  * typeId `integer`

### Shared.LineEndTypes
* Shared.LineEndTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * serializedAs `string`
  * typeId `integer`

### Shared.Lines
* Shared.Lines `object`
  * bLtoTRBorderId `string`
  * bottomBorderId `string`
  * connectorId `string`
  * dashTypeId `integer`
  * headEndHeightId `integer`
  * headEndTypeId `integer`
  * headEndWidthId `integer`
  * id `string`
  * leftBorderId `string`
  * lineMapId `string`
  * rightBorderId `string`
  * shapeId `string`
  * tLtoBRBorderId `string`
  * tailEndHeightId `integer`
  * tailEndTypeId `integer`
  * tailEndWidthId `integer`
  * topBorderId `string`
  * weight `integer`

### Shared.Lines.Details
* Shared.Lines.Details `object`
  * bLtoTRBorder [Table.Borders.Details](#table.borders.details)
  * bLtoTRBorderId `string`
  * bottomBorder [Table.Borders.Details](#table.borders.details)
  * bottomBorderId `string`
  * connectorId `string`
  * dashTypeId `integer`
  * dateCreated `string`
  * dateModified `string`
  * headEndHeightId `integer`
  * headEndTypeId `integer`
  * headEndWidthId `integer`
  * id `string`
  * leftBorder [Table.Borders.Details](#table.borders.details)
  * leftBorderId `string`
  * lineColorSolidFill [Shared.SolidFills.Details](#shared.solidfills.details)
  * lineMap [Theme.LineMap.Details](#theme.linemap.details)
  * lineMapId `string`
  * parentConnector [Slide.Connector.Details](#slide.connector.details)
  * parentShape [Slide.Shapes.Details](#slide.shapes.details)
  * rightBorder [Table.Borders.Details](#table.borders.details)
  * rightBorderId `string`
  * shapeId `string`
  * tLtoBRBorder [Table.Borders.Details](#table.borders.details)
  * tLtoBRBorderId `string`
  * tailEndHeightId `integer`
  * tailEndTypeId `integer`
  * tailEndWidthId `integer`
  * topBorder [Table.Borders.Details](#table.borders.details)
  * topBorderId `string`
  * userCreated `string`
  * userModified `string`
  * weight `integer`

### Shared.Paragraph
* Shared.Paragraph `object`
  * id `string`
  * number `integer`
  * textContainerId `string`

### Shared.Paragraph.Details
* Shared.Paragraph.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * number `integer`
  * text `array`
    * items [Shared.Text.Details](#shared.text.details)
  * textContainer [Shared.TextContainer.Details](#shared.textcontainer.details)
  * textContainerId `string`
  * userCreated `string`
  * userModified `string`

### Shared.Pictures
* Shared.Pictures `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * fileExtension `string`
  * graphicsId `string`
  * id `string`
  * imageFileBlobUrl `string`
  * imageFillsId `string`
  * name `string`
  * packageUri `string`

### Shared.Pictures.Details
* Shared.Pictures.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * fileExtension `string`
  * graphicsId `string`
  * id `string`
  * imageFileBlobUrl `string`
  * imageFill [Shared.ImageFills.Details](#shared.imagefills.details)
  * imageFillsId `string`
  * name `string`
  * packageUri `string`
  * parentGraphic [Slide.Graphics.Details](#slide.graphics.details)
  * userCreated `string`
  * userModified `string`

### Shared.SolidFills
* Shared.SolidFills `object`
  * colorTypeId `integer`
  * fillMapId `string`
  * hexValue `string`
  * id `string`
  * isUserColor `boolean`
  * parentGradientStopId `string`
  * parentLineId `string`
  * parentTextId `string`

### Shared.SolidFills.Details
* Shared.SolidFills.Details `object`
  * colorTransformations [Shared.ColorTransformations.Details](#shared.colortransformations.details)
  * colorTypeId `integer`
  * dateCreated `string`
  * dateModified `string`
  * fillMapId `string`
  * hexValue `string`
  * id `string`
  * isUserColor `boolean`
  * parentFillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * parentGradientStop [Shared.GradientStops.Details](#shared.gradientstops.details)
  * parentGradientStopId `string`
  * parentLine [Shared.Lines.Details](#shared.lines.details)
  * parentLineId `string`
  * parentText [Shared.Text.Details](#shared.text.details)
  * parentTextId `string`
  * userCreated `string`
  * userModified `string`

### Shared.Text
* Shared.Text `object`
  * colorSolidFillsId `string`
  * font `string`
  * fontSize `integer`
  * id `string`
  * isBold `boolean`
  * isItalic `boolean`
  * isThemeFont `boolean`
  * isUnderline `boolean`
  * paragraphId `string`
  * rawText `string`
  * sequence `integer`

### Shared.Text.Details
* Shared.Text.Details `object`
  * colorSolidFill [Shared.SolidFills.Details](#shared.solidfills.details)
  * colorSolidFillsId `string`
  * dateCreated `string`
  * dateModified `string`
  * font `string`
  * fontSize `integer`
  * id `string`
  * isBold `boolean`
  * isItalic `boolean`
  * isThemeFont `boolean`
  * isUnderline `boolean`
  * paragraph [Shared.Paragraph.Details](#shared.paragraph.details)
  * paragraphId `string`
  * rawText `string`
  * sequence `integer`
  * userCreated `string`
  * userModified `string`

### Shared.TextContainer
* Shared.TextContainer `object`
  * axisId `string`
  * chartId `string`
  * id `string`
  * outerXml `string`
  * shapeId `string`
  * tableCellId `string`

### Shared.TextContainer.Details
* Shared.TextContainer.Details `object`
  * axis [Chart.Axes.Details](#chart.axes.details)
  * axisId `string`
  * chart [Chart.Charts.Details](#chart.charts.details)
  * chartId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * outerXml `string`
  * paragraphs `array`
    * items [Shared.Paragraph.Details](#shared.paragraph.details)
  * parentShape [Slide.Shapes.Details](#slide.shapes.details)
  * shapeId `string`
  * tableCell [Table.Cells.Details](#table.cells.details)
  * tableCellId `string`
  * userCreated `string`
  * userModified `string`

### Slide.ColorMaps
* Slide.ColorMaps `object`
  * accent1 `integer`
  * accent2 `integer`
  * accent3 `integer`
  * accent4 `integer`
  * accent5 `integer`
  * accent6 `integer`
  * background1 `integer`
  * background2 `integer`
  * followedHyperlink `integer`
  * hyperlink `integer`
  * id `string`
  * slideMasterId `string`
  * text1 `integer`
  * text2 `integer`

### Slide.ColorMaps.Details
* Slide.ColorMaps.Details `object`
  * accent1 `integer`
  * accent2 `integer`
  * accent3 `integer`
  * accent4 `integer`
  * accent5 `integer`
  * accent6 `integer`
  * background1 `integer`
  * background2 `integer`
  * dateCreated `string`
  * dateModified `string`
  * followedHyperlink `integer`
  * hyperlink `integer`
  * id `string`
  * slideMaster [Slide.SlideMasters.Details](#slide.slidemasters.details)
  * slideMasterId `string`
  * text1 `integer`
  * text2 `integer`
  * userCreated `string`
  * userModified `string`

### Slide.Connector
* Slide.Connector `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * endConnectionIdx `integer`
  * endConnectionShapeId `string`
  * flipHorizontal `boolean`
  * flipVertical `boolean`
  * freeFormPathXml `string`
  * groupElementsId `string`
  * hidden `boolean`
  * id `string`
  * isThemeEffect `boolean`
  * isThemeFill `boolean`
  * isThemeLine `boolean`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * presetTypeId `string`
  * rotation `integer`
  * startConnectionIdx `integer`
  * startConnectionShapeId `string`
  * svgBlobUrl `string`

### Slide.Connector.Details
* Slide.Connector.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * effect [Shared.Effects.Details](#shared.effects.details)
  * endConnectionIdx `integer`
  * endConnectionShape [Slide.Shapes.Details](#slide.shapes.details)
  * endConnectionShapeId `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * flipHorizontal `boolean`
  * flipVertical `boolean`
  * freeFormPathXml `string`
  * groupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * groupElementsId `string`
  * hidden `boolean`
  * id `string`
  * isThemeEffect `boolean`
  * isThemeFill `boolean`
  * isThemeLine `boolean`
  * line [Shared.Lines.Details](#shared.lines.details)
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * presetTypeId `string`
  * rotation `integer`
  * startConnectionIdx `integer`
  * startConnectionShape [Slide.Shapes.Details](#slide.shapes.details)
  * startConnectionShapeId `string`
  * svgBlobUrl `string`
  * userCreated `string`
  * userModified `string`

### Slide.GraphicTypes
* Slide.GraphicTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Slide.Graphics
* Slide.Graphics `object`
  * graphicTypeId `integer`
  * groupElementsId `string`
  * height `integer`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * width `integer`
  * xOffset `integer`
  * yOffset `integer`

### Slide.Graphics.Details
* Slide.Graphics.Details `object`: The graphics class provides a bridge between the Slides and 
  * chart [Chart.Charts.Details](#chart.charts.details)
  * dateCreated `string`
  * dateModified `string`
  * graphicTypeId `integer`
  * groupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * groupElementsId `string`: Foreign key to the GroupElements object
  * height `integer`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * picture [Shared.Pictures.Details](#shared.pictures.details)
  * smartArt [Slide.SmartArts.Details](#slide.smartarts.details)
  * table [Table.Tables.Details](#table.tables.details)
  * userCreated `string`
  * userModified `string`
  * width `integer`
  * xOffset `integer`
  * yOffset `integer`

### Slide.GroupElementTypes
* Slide.GroupElementTypes `object`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Slide.GroupElementTypes.Details
* Slide.GroupElementTypes.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`
  * userCreated `string`
  * userModified `string`

### Slide.GroupElements
* Slide.GroupElements `object`
  * groupElementTypeId `integer`
  * groupElementTypePk `string`
  * id `string`
  * parentGroupElementId `string`
  * shapeTreeId `string`
  * ultimateParentShapeTreeId `string`

### Slide.GroupElements.Details
* Slide.GroupElements.Details `object`
  * childGroupElements `array`
    * items [Slide.GroupElements.Details](#slide.groupelements.details)
  * connector [Slide.Connector.Details](#slide.connector.details)
  * dateCreated `string`
  * dateModified `string`
  * graphic [Slide.Graphics.Details](#slide.graphics.details)
  * group [Slide.Groups.Details](#slide.groups.details)
  * groupElementTypeId `integer`
  * groupElementTypePk `string`
  * id `string`
  * parentGroupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * parentGroupElementId `string`
  * shape [Slide.Shapes.Details](#slide.shapes.details)
  * shapeTree [Slide.ShapeTrees.Details](#slide.shapetrees.details)
  * shapeTreeId `string`
  * typeInfo [Slide.GroupElementTypes.Details](#slide.groupelementtypes.details)
  * ultimateParentShapeTreeId `string`
  * userCreated `string`
  * userModified `string`

### Slide.Groups
* Slide.Groups `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * groupElementId `string`
  * hidden `boolean`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * svgBlobUrl `string`
  * title `string`

### Slide.Groups.Details
* Slide.Groups.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * groupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * groupElementId `string`
  * hidden `boolean`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * svgBlobUrl `string`
  * title `string`
  * userCreated `string`
  * userModified `string`

### Slide.ShapeTrees
* Slide.ShapeTrees `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * groupElementId `string`
  * hidden `boolean`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * slideId `string`
  * svgBlobUrl `string`
  * title `string`

### Slide.ShapeTrees.Details
* Slide.ShapeTrees.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * groupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * groupElementId `string`
  * groupElements `array`
    * items [Slide.GroupElements.Details](#slide.groupelements.details)
  * hidden `boolean`
  * id `string`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * slide [Slide.Slides.Details](#slide.slides.details)
  * slideId `string`
  * svgBlobUrl `string`
  * title `string`
  * userCreated `string`
  * userModified `string`

### Slide.Shapes
* Slide.Shapes `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * flipHorizontal `boolean`
  * flipVertical `boolean`
  * freeFormPathXml `string`
  * groupElementsId `string`
  * height `integer`
  * hidden `boolean`
  * id `string`
  * isThemeEffect `boolean`
  * isThemeFill `boolean`
  * isThemeLine `boolean`
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * presetTypeId `string`
  * rotation `integer`
  * svgBlobUrl `string`
  * width `integer`
  * xOffset `integer`
  * yOffset `integer`

### Slide.Shapes.Details
* Slide.Shapes.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * effect [Shared.Effects.Details](#shared.effects.details)
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * flipHorizontal `boolean`
  * flipVertical `boolean`
  * freeFormPathXml `string`
  * groupElement [Slide.GroupElements.Details](#slide.groupelements.details)
  * groupElementsId `string`
  * height `integer`
  * hidden `boolean`
  * id `string`
  * isThemeEffect `boolean`
  * isThemeFill `boolean`
  * isThemeLine `boolean`
  * line [Shared.Lines.Details](#shared.lines.details)
  * name `string`
  * ooxmlId `integer`
  * packageUri `string`
  * presetTypeId `string`
  * rotation `integer`
  * svgBlobUrl `string`
  * textContainer [Shared.TextContainer.Details](#shared.textcontainer.details)
  * userCreated `string`
  * userModified `string`
  * width `integer`
  * xOffset `integer`
  * yOffset `integer`

### Slide.SlideMasters
* Slide.SlideMasters `object`
  * id `string`
  * slideId `string`

### Slide.SlideMasters.Details
* Slide.SlideMasters.Details `object`
  * colorMap [Slide.ColorMaps.Details](#slide.colormaps.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * parentSlide [Slide.Slides.Details](#slide.slides.details)
  * slideId `string`
  * userCreated `string`
  * userModified `string`

### Slide.Slides
* Slide.Slides `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * documentId `string`
  * id `string`
  * name `string`
  * number `integer`
  * ooxmlId `integer`
  * packageUri `string`
  * slideDocumentUrl `string`
  * svgBlobUrl `string`

### Slide.Slides.Details
* Slide.Slides.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * document [Document.Details](#document.details)
  * documentId `string`
  * id `string`
  * name `string`
  * number `integer`
  * ooxmlId `integer`
  * packageUri `string`
  * shapeTree [Slide.ShapeTrees.Details](#slide.shapetrees.details)
  * slideDocumentUrl `string`
  * slideMaster [Slide.SlideMasters.Details](#slide.slidemasters.details)
  * svgBlobUrl `string`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * userCreated `string`
  * userModified `string`

### Slide.SmartArts
* Slide.SmartArts `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * graphicsId `string`
  * id `string`
  * name `string`
  * packageUri `string`
  * svgBlobUrl `string`

### Slide.SmartArts.Details
* Slide.SmartArts.Details `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * dateCreated `string`
  * dateModified `string`
  * graphicsId `string`
  * id `string`
  * name `string`
  * packageUri `string`
  * parentGraphic [Slide.Graphics.Details](#slide.graphics.details)
  * svgBlobUrl `string`
  * userCreated `string`
  * userModified `string`

### Table.Borders
* Table.Borders `object`
  * cellId `string`
  * id `string`

### Table.Borders.Details
* Table.Borders.Details `object`
  * bLtoTR [Shared.Lines.Details](#shared.lines.details)
  * bottom [Shared.Lines.Details](#shared.lines.details)
  * cell [Table.Cells.Details](#table.cells.details)
  * cellId `string`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * left [Shared.Lines.Details](#shared.lines.details)
  * right [Shared.Lines.Details](#shared.lines.details)
  * tLtoBR [Shared.Lines.Details](#shared.lines.details)
  * top [Shared.Lines.Details](#shared.lines.details)
  * userCreated `string`
  * userModified `string`

### Table.Cells
* Table.Cells `object`
  * columnId `string`
  * columnSpan `integer`
  * id `string`
  * isMergedHorozontal `boolean`
  * isMergedVertical `boolean`
  * rowId `string`
  * rowSpan `integer`

### Table.Cells.Details
* Table.Cells.Details `object`
  * border [Table.Borders.Details](#table.borders.details)
  * column [Table.Columns.Details](#table.columns.details)
  * columnId `string`
  * columnSpan `integer`
  * dateCreated `string`
  * dateModified `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * id `string`
  * isMergedHorozontal `boolean`
  * isMergedVertical `boolean`
  * row [Table.Rows.Details](#table.rows.details)
  * rowId `string`
  * rowSpan `integer`
  * textContainer [Shared.TextContainer.Details](#shared.textcontainer.details)
  * userCreated `string`
  * userModified `string`

### Table.Columns
* Table.Columns `object`
  * id `string`
  * index `integer`
  * tableId `string`
  * width `integer`

### Table.Columns.Details
* Table.Columns.Details `object`
  * cells `array`
    * items [Table.Cells.Details](#table.cells.details)
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * index `integer`
  * table [Table.Tables.Details](#table.tables.details)
  * tableId `string`
  * userCreated `string`
  * userModified `string`
  * width `integer`

### Table.Rows
* Table.Rows `object`
  * height `integer`
  * id `string`
  * index `integer`
  * tableId `string`

### Table.Rows.Details
* Table.Rows.Details `object`
  * cells `array`
    * items [Table.Cells.Details](#table.cells.details)
  * dateCreated `string`
  * dateModified `string`
  * height `integer`
  * id `string`
  * index `integer`
  * table [Table.Tables.Details](#table.tables.details)
  * tableId `string`
  * userCreated `string`
  * userModified `string`

### Table.TableDataDTO
* Table.TableDataDTO `object`
  * tableData `array`
    * items `array`
      * items `string`
  * tableId `string`

### Table.Tables
* Table.Tables `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * hasStylePart `boolean`
  * id `string`
  * name `string`
  * packageUri `string`
  * parentGraphicId `string`
  * stylePartOuterXml `string`
  * svgBlobUrl `string`

### Table.Tables.Details
* Table.Tables.Details `object`
  * baseElementBlobUrl `string`
  * cells `array`
    * items [Table.Cells.Details](#table.cells.details)
  * changedBaseElementBlobUrl `string`
  * columns `array`
    * items [Table.Columns.Details](#table.columns.details)
  * dateCreated `string`
  * dateModified `string`
  * hasStylePart `boolean`
  * id `string`
  * name `string`
  * packageUri `string`
  * parentGraphic [Slide.Graphics.Details](#slide.graphics.details)
  * parentGraphicId `string`
  * rows `array`
    * items [Table.Rows.Details](#table.rows.details)
  * stylePartOuterXml `string`
  * svgBlobUrl `string`
  * userCreated `string`
  * userModified `string`

### Theme.BackgroundFills
* Theme.BackgroundFills `object`
  * id `string`
  * intensityId `integer`
  * themeId `string`

### Theme.BackgroundFills.Details
* Theme.BackgroundFills.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * id `string`
  * intensityId `integer`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.Colors
* Theme.Colors `object`
  * accent1 `string`
  * accent2 `string`
  * accent3 `string`
  * accent4 `string`
  * accent5 `string`
  * accent6 `string`
  * dark1 `string`
  * dark2 `string`
  * followedHyperlink `string`
  * hyperlink `string`
  * id `string`
  * light1 `string`
  * light2 `string`
  * name `string`
  * themeId `string`

### Theme.Colors.Details
* Theme.Colors.Details `object`
  * accent1 `string`
  * accent2 `string`
  * accent3 `string`
  * accent4 `string`
  * accent5 `string`
  * accent6 `string`
  * dark1 `string`
  * dark2 `string`
  * dateCreated `string`
  * dateModified `string`
  * followedHyperlink `string`
  * hyperlink `string`
  * id `string`
  * light1 `string`
  * light2 `string`
  * name `string`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.CustomColors
* Theme.CustomColors `object`
  * hexValue `string`
  * id `string`
  * name `string`
  * themeId `string`

### Theme.CustomColors.Details
* Theme.CustomColors.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * hexValue `string`
  * id `string`
  * name `string`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.EffectMap
* Theme.EffectMap `object`
  * id `string`
  * intensityId `integer`
  * themeId `string`

### Theme.EffectMap.Details
* Theme.EffectMap.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * effect [Shared.Effects.Details](#shared.effects.details)
  * id `string`
  * intensityId `integer`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.Fills
* Theme.Fills `object`
  * id `string`
  * intensityId `integer`
  * themeId `string`

### Theme.Fills.Details
* Theme.Fills.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * fillMap [Shared.FillMap.Details](#shared.fillmap.details)
  * id `string`
  * intensityId `integer`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.Fonts
* Theme.Fonts `object`
  * bodyFont `string`
  * headingFont `string`
  * id `string`
  * themeId `string`

### Theme.Fonts.Details
* Theme.Fonts.Details `object`
  * bodyFont `string`
  * dateCreated `string`
  * dateModified `string`
  * headingFont `string`
  * id `string`
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.Intensity
* Theme.Intensity `object`
  * description `string`
  * id `string`
  * name `string`
  * typeId `integer`

### Theme.LineMap
* Theme.LineMap `object`
  * id `string`
  * intensityId `integer`
  * themeId `string`

### Theme.LineMap.Details
* Theme.LineMap.Details `object`
  * dateCreated `string`
  * dateModified `string`
  * id `string`
  * intensityId `integer`
  * line [Shared.Lines.Details](#shared.lines.details)
  * theme [Theme.Themes.Details](#theme.themes.details)
  * themeId `string`
  * userCreated `string`
  * userModified `string`

### Theme.Themes
* Theme.Themes `object`
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * id `string`
  * name `string`
  * packageUri `string`
  * slideId `string`

### Theme.Themes.Details
* Theme.Themes.Details `object`
  * backgroundFills `array`
    * items [Theme.BackgroundFills.Details](#theme.backgroundfills.details)
  * baseElementBlobUrl `string`
  * changedBaseElementBlobUrl `string`
  * colors [Theme.Colors.Details](#theme.colors.details)
  * customColors `array`
    * items [Theme.CustomColors.Details](#theme.customcolors.details)
  * dateCreated `string`
  * dateModified `string`
  * effectMaps `array`
    * items [Theme.EffectMap.Details](#theme.effectmap.details)
  * fills `array`
    * items [Theme.Fills.Details](#theme.fills.details)
  * fonts [Theme.Fonts.Details](#theme.fonts.details)
  * id `string`
  * lineMaps `array`
    * items [Theme.LineMap.Details](#theme.linemap.details)
  * name `string`
  * packageUri `string`
  * slide [Slide.Slides.Details](#slide.slides.details)
  * slideId `string`
  * userCreated `string`
  * userModified `string`


