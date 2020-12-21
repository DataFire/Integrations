# @datafire/google_slides

Client library for Google Slides API

## Installation and Usage
```bash
npm install --save @datafire/google_slides
```
```js
let google_slides = require('@datafire/google_slides').create({
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

Reads and writes Google Slides presentations.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_slides.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_slides.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### slides.presentations.create
Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.


```js
google_slides.slides.presentations.create({}, context)
```

#### Input
* input `object`
  * body [Presentation](#presentation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Presentation](#presentation)

### slides.presentations.get
Gets the latest version of the specified presentation.


```js
google_slides.slides.presentations.get({
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Presentation](#presentation)

### slides.presentations.pages.get
Gets the latest version of the specified page in the presentation.


```js
google_slides.slides.presentations.pages.get({
  "presentationId": "",
  "pageObjectId": ""
}, context)
```

#### Input
* input `object`
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * pageObjectId **required** `string`: The object ID of the page to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Page](#page)

### slides.presentations.pages.getThumbnail
Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.


```js
google_slides.slides.presentations.pages.getThumbnail({
  "presentationId": "",
  "pageObjectId": ""
}, context)
```

#### Input
* input `object`
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * pageObjectId **required** `string`: The object ID of the page whose thumbnail to retrieve.
  * thumbnailProperties.mimeType `string` (values: PNG): The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
  * thumbnailProperties.thumbnailSize `string` (values: THUMBNAIL_SIZE_UNSPECIFIED, LARGE, MEDIUM, SMALL): The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Thumbnail](#thumbnail)

### slides.presentations.batchUpdate
Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.


```js
google_slides.slides.presentations.batchUpdate({
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * presentationId **required** `string`: The presentation to apply the updates to.
  * body [BatchUpdatePresentationRequest](#batchupdatepresentationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchUpdatePresentationResponse](#batchupdatepresentationresponse)



## Definitions

### AffineTransform
* AffineTransform `object`: AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
  * scaleX `number`: The X coordinate scaling element.
  * scaleY `number`: The Y coordinate scaling element.
  * shearX `number`: The X coordinate shearing element.
  * shearY `number`: The Y coordinate shearing element.
  * translateX `number`: The X coordinate translation element.
  * translateY `number`: The Y coordinate translation element.
  * unit `string` (values: UNIT_UNSPECIFIED, EMU, PT): The units for translate elements.

### AutoText
* AutoText `object`: A TextElement kind that represents auto text.
  * content `string`: The rendered content of this auto text, if available.
  * style [TextStyle](#textstyle)
  * type `string` (values: TYPE_UNSPECIFIED, SLIDE_NUMBER): The type of this auto text.

### BatchUpdatePresentationRequest
* BatchUpdatePresentationRequest `object`: Request message for PresentationsService.BatchUpdatePresentation.
  * requests `array`: A list of updates to apply to the presentation.
    * items [Request](#request)
  * writeControl [WriteControl](#writecontrol)

### BatchUpdatePresentationResponse
* BatchUpdatePresentationResponse `object`: Response message from a batch update.
  * presentationId `string`: The presentation the updates were applied to.
  * replies `array`: The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
    * items [Response](#response)
  * writeControl [WriteControl](#writecontrol)

### Bullet
* Bullet `object`: Describes the bullet of a paragraph.
  * bulletStyle [TextStyle](#textstyle)
  * glyph `string`: The rendered bullet glyph for this paragraph.
  * listId `string`: The ID of the list this paragraph belongs to.
  * nestingLevel `integer`: The nesting level of this paragraph in the list.

### ColorScheme
* ColorScheme `object`: The palette of predefined colors for a page.
  * colors `array`: The ThemeColorType and corresponding concrete color pairs.
    * items [ThemeColorPair](#themecolorpair)

### ColorStop
* ColorStop `object`: A color and position in a gradient band.
  * alpha `number`: The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
  * color [OpaqueColor](#opaquecolor)
  * position `number`: The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].

### CreateImageRequest
* CreateImageRequest `object`: Creates an image.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
  * url `string`: The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.

### CreateImageResponse
* CreateImageResponse `object`: The result of creating an image.
  * objectId `string`: The object ID of the created image.

### CreateLineRequest
* CreateLineRequest `object`: Creates a line.
  * category `string` (values: LINE_CATEGORY_UNSPECIFIED, STRAIGHT, BENT, CURVED): The category of the line to be created. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified `line_category` value is used. If you do not specify either, then STRAIGHT is used.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * lineCategory `string` (values: STRAIGHT, BENT, CURVED): The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence.
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.

### CreateLineResponse
* CreateLineResponse `object`: The result of creating a line.
  * objectId `string`: The object ID of the created line.

### CreateParagraphBulletsRequest
* CreateParagraphBulletsRequest `object`: Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
  * bulletPreset `string` (values: BULLET_DISC_CIRCLE_SQUARE, BULLET_DIAMONDX_ARROW3D_SQUARE, BULLET_CHECKBOX, BULLET_ARROW_DIAMOND_DISC, BULLET_STAR_CIRCLE_SQUARE, BULLET_ARROW3D_CIRCLE_SQUARE, BULLET_LEFTTRIANGLE_DIAMOND_DISC, BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE, BULLET_DIAMOND_CIRCLE_SQUARE, NUMBERED_DIGIT_ALPHA_ROMAN, NUMBERED_DIGIT_ALPHA_ROMAN_PARENS, NUMBERED_DIGIT_NESTED, NUMBERED_UPPERALPHA_ALPHA_ROMAN, NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT, NUMBERED_ZERODIGIT_ALPHA_ROMAN): The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * objectId `string`: The object ID of the shape or table containing the text to add bullets to.
  * textRange [Range](#range)

### CreateShapeRequest
* CreateShapeRequest `object`: Creates a new shape.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated.
  * shapeType `string` (values: TYPE_UNSPECIFIED, TEXT_BOX, RECTANGLE, ROUND_RECTANGLE, ELLIPSE, ARC, BENT_ARROW, BENT_UP_ARROW, BEVEL, BLOCK_ARC, BRACE_PAIR, BRACKET_PAIR, CAN, CHEVRON, CHORD, CLOUD, CORNER, CUBE, CURVED_DOWN_ARROW, CURVED_LEFT_ARROW, CURVED_RIGHT_ARROW, CURVED_UP_ARROW, DECAGON, DIAGONAL_STRIPE, DIAMOND, DODECAGON, DONUT, DOUBLE_WAVE, DOWN_ARROW, DOWN_ARROW_CALLOUT, FOLDED_CORNER, FRAME, HALF_FRAME, HEART, HEPTAGON, HEXAGON, HOME_PLATE, HORIZONTAL_SCROLL, IRREGULAR_SEAL_1, IRREGULAR_SEAL_2, LEFT_ARROW, LEFT_ARROW_CALLOUT, LEFT_BRACE, LEFT_BRACKET, LEFT_RIGHT_ARROW, LEFT_RIGHT_ARROW_CALLOUT, LEFT_RIGHT_UP_ARROW, LEFT_UP_ARROW, LIGHTNING_BOLT, MATH_DIVIDE, MATH_EQUAL, MATH_MINUS, MATH_MULTIPLY, MATH_NOT_EQUAL, MATH_PLUS, MOON, NO_SMOKING, NOTCHED_RIGHT_ARROW, OCTAGON, PARALLELOGRAM, PENTAGON, PIE, PLAQUE, PLUS, QUAD_ARROW, QUAD_ARROW_CALLOUT, RIBBON, RIBBON_2, RIGHT_ARROW, RIGHT_ARROW_CALLOUT, RIGHT_BRACE, RIGHT_BRACKET, ROUND_1_RECTANGLE, ROUND_2_DIAGONAL_RECTANGLE, ROUND_2_SAME_RECTANGLE, RIGHT_TRIANGLE, SMILEY_FACE, SNIP_1_RECTANGLE, SNIP_2_DIAGONAL_RECTANGLE, SNIP_2_SAME_RECTANGLE, SNIP_ROUND_RECTANGLE, STAR_10, STAR_12, STAR_16, STAR_24, STAR_32, STAR_4, STAR_5, STAR_6, STAR_7, STAR_8, STRIPED_RIGHT_ARROW, SUN, TRAPEZOID, TRIANGLE, UP_ARROW, UP_ARROW_CALLOUT, UP_DOWN_ARROW, UTURN_ARROW, VERTICAL_SCROLL, WAVE, WEDGE_ELLIPSE_CALLOUT, WEDGE_RECTANGLE_CALLOUT, WEDGE_ROUND_RECTANGLE_CALLOUT, FLOW_CHART_ALTERNATE_PROCESS, FLOW_CHART_COLLATE, FLOW_CHART_CONNECTOR, FLOW_CHART_DECISION, FLOW_CHART_DELAY, FLOW_CHART_DISPLAY, FLOW_CHART_DOCUMENT, FLOW_CHART_EXTRACT, FLOW_CHART_INPUT_OUTPUT, FLOW_CHART_INTERNAL_STORAGE, FLOW_CHART_MAGNETIC_DISK, FLOW_CHART_MAGNETIC_DRUM, FLOW_CHART_MAGNETIC_TAPE, FLOW_CHART_MANUAL_INPUT, FLOW_CHART_MANUAL_OPERATION, FLOW_CHART_MERGE, FLOW_CHART_MULTIDOCUMENT, FLOW_CHART_OFFLINE_STORAGE, FLOW_CHART_OFFPAGE_CONNECTOR, FLOW_CHART_ONLINE_STORAGE, FLOW_CHART_OR, FLOW_CHART_PREDEFINED_PROCESS, FLOW_CHART_PREPARATION, FLOW_CHART_PROCESS, FLOW_CHART_PUNCHED_CARD, FLOW_CHART_PUNCHED_TAPE, FLOW_CHART_SORT, FLOW_CHART_SUMMING_JUNCTION, FLOW_CHART_TERMINATOR, ARROW_EAST, ARROW_NORTH_EAST, ARROW_NORTH, SPEECH, STARBURST, TEARDROP, ELLIPSE_RIBBON, ELLIPSE_RIBBON_2, CLOUD_CALLOUT, CUSTOM): The shape type.

### CreateShapeResponse
* CreateShapeResponse `object`: The result of creating a shape.
  * objectId `string`: The object ID of the created shape.

### CreateSheetsChartRequest
* CreateSheetsChartRequest `object`: Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * linkingMode `string` (values: NOT_LINKED_IMAGE, LINKED): The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
  * objectId `string`: A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated.
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the chart.

### CreateSheetsChartResponse
* CreateSheetsChartResponse `object`: The result of creating an embedded Google Sheets chart.
  * objectId `string`: The object ID of the created chart.

### CreateSlideRequest
* CreateSlideRequest `object`: Creates a new slide.
  * insertionIndex `integer`: The optional zero-based index indicating where to insert the slides. If you don't specify an index, the new slide is created at the end.
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
  * placeholderIdMappings `array`: An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s) that will be created on the new slide from that specified layout. Can only be used when `slide_layout_reference` is specified.
    * items [LayoutPlaceholderIdMapping](#layoutplaceholderidmapping)
  * slideLayoutReference [LayoutReference](#layoutreference)

### CreateSlideResponse
* CreateSlideResponse `object`: The result of creating a slide.
  * objectId `string`: The object ID of the created slide.

### CreateTableRequest
* CreateTableRequest `object`: Creates a new table.
  * columns `integer`: Number of columns in the table.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
  * rows `integer`: Number of rows in the table.

### CreateTableResponse
* CreateTableResponse `object`: The result of creating a table.
  * objectId `string`: The object ID of the created table.

### CreateVideoRequest
* CreateVideoRequest `object`: Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * id `string`: The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q.
  * objectId `string`: A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
  * source `string` (values: SOURCE_UNSPECIFIED, YOUTUBE, DRIVE): The video source.

### CreateVideoResponse
* CreateVideoResponse `object`: The result of creating a video.
  * objectId `string`: The object ID of the created video.

### CropProperties
* CropProperties `object`: The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.
  * angle `number`: The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
  * bottomOffset `number`: The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.
  * leftOffset `number`: The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.
  * rightOffset `number`: The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.
  * topOffset `number`: The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.

### DeleteObjectRequest
* DeleteObjectRequest `object`: Deletes an object, either pages or page elements, from the presentation.
  * objectId `string`: The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting shapes are also deleted.

### DeleteParagraphBulletsRequest
* DeleteParagraphBulletsRequest `object`: Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * objectId `string`: The object ID of the shape or table containing the text to delete bullets from.
  * textRange [Range](#range)

### DeleteTableColumnRequest
* DeleteTableColumnRequest `object`: Deletes a column from a table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * tableObjectId `string`: The table to delete columns from.

### DeleteTableRowRequest
* DeleteTableRowRequest `object`: Deletes a row from a table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * tableObjectId `string`: The table to delete rows from.

### DeleteTextRequest
* DeleteTextRequest `object`: Deletes text from a shape or a table cell.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * objectId `string`: The object ID of the shape or table from which the text will be deleted.
  * textRange [Range](#range)

### Dimension
* Dimension `object`: A magnitude in a single direction in the specified units.
  * magnitude `number`: The magnitude.
  * unit `string` (values: UNIT_UNSPECIFIED, EMU, PT): The units for magnitude.

### DuplicateObjectRequest
* DuplicateObjectRequest `object`: Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
  * objectId `string`: The ID of the object to duplicate.
  * objectIds `object`: The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.

### DuplicateObjectResponse
* DuplicateObjectResponse `object`: The response of duplicating an object.
  * objectId `string`: The ID of the new duplicate object.

### Group
* Group `object`: A PageElement kind representing a joined collection of PageElements.
  * children `array`: The collection of elements in the group. The minimum size of a group is 2.
    * items [PageElement](#pageelement)

### GroupObjectsRequest
* GroupObjectsRequest `object`: Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
  * childrenObjectIds `array`: The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholder shapes cannot be grouped.
    * items `string`
  * groupObjectId `string`: A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.

### GroupObjectsResponse
* GroupObjectsResponse `object`: The result of grouping objects.
  * objectId `string`: The object ID of the created group.

### Image
* Image `object`: A PageElement kind representing an image.
  * contentUrl `string`: An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
  * imageProperties [ImageProperties](#imageproperties)
  * sourceUrl `string`: The source URL is the URL used to insert the image. The source URL can be empty.

### ImageProperties
* ImageProperties `object`: The properties of the Image.
  * brightness `number`: The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
  * contrast `number`: The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
  * cropProperties [CropProperties](#cropproperties)
  * link [Link](#link)
  * outline [Outline](#outline)
  * recolor [Recolor](#recolor)
  * shadow [Shadow](#shadow)
  * transparency `number`: The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.

### InsertTableColumnsRequest
* InsertTableColumnsRequest `object`: Inserts columns into a table. Other columns in the table will be resized to fit the new column.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertRight `boolean`: Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.
  * number `integer`: The number of columns to be inserted. Maximum 20 per request.
  * tableObjectId `string`: The table to insert columns into.

### InsertTableRowsRequest
* InsertTableRowsRequest `object`: Inserts rows into a table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertBelow `boolean`: Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.
  * number `integer`: The number of rows to be inserted. Maximum 20 per request.
  * tableObjectId `string`: The table to insert rows into.

### InsertTextRequest
* InsertTextRequest `object`: Inserts text into a shape or a table cell.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertionIndex `integer`: The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.
  * objectId `string`: The object ID of the shape or table where the text will be inserted.
  * text `string`: The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.

### LayoutPlaceholderIdMapping
* LayoutPlaceholderIdMapping `object`: The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
  * layoutPlaceholder [Placeholder](#placeholder)
  * layoutPlaceholderObjectId `string`: The object ID of the placeholder on a layout that will be applied to a slide.
  * objectId `string`: A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.

### LayoutProperties
* LayoutProperties `object`: The properties of Page are only relevant for pages with page_type LAYOUT.
  * displayName `string`: The human-readable name of the layout.
  * masterObjectId `string`: The object ID of the master that this layout is based on.
  * name `string`: The name of the layout.

### LayoutReference
* LayoutReference `object`: Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
  * layoutId `string`: Layout ID: the object ID of one of the layouts in the presentation.
  * predefinedLayout `string` (values: PREDEFINED_LAYOUT_UNSPECIFIED, BLANK, CAPTION_ONLY, TITLE, TITLE_AND_BODY, TITLE_AND_TWO_COLUMNS, TITLE_ONLY, SECTION_HEADER, SECTION_TITLE_AND_DESCRIPTION, ONE_COLUMN_TEXT, MAIN_POINT, BIG_NUMBER): Predefined layout.

### Line
* Line `object`: A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
  * lineCategory `string` (values: LINE_CATEGORY_UNSPECIFIED, STRAIGHT, BENT, CURVED): The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.
  * lineProperties [LineProperties](#lineproperties)
  * lineType `string` (values: TYPE_UNSPECIFIED, STRAIGHT_CONNECTOR_1, BENT_CONNECTOR_2, BENT_CONNECTOR_3, BENT_CONNECTOR_4, BENT_CONNECTOR_5, CURVED_CONNECTOR_2, CURVED_CONNECTOR_3, CURVED_CONNECTOR_4, CURVED_CONNECTOR_5, STRAIGHT_LINE): The type of the line.

### LineConnection
* LineConnection `object`: The properties for one end of a Line connection.
  * connectedObjectId `string`: The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.
  * connectionSiteIndex `integer`: The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor.

### LineFill
* LineFill `object`: The fill of the line.
  * solidFill [SolidFill](#solidfill)

### LineProperties
* LineProperties `object`: The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the line.
  * endArrow `string` (values: ARROW_STYLE_UNSPECIFIED, NONE, STEALTH_ARROW, FILL_ARROW, FILL_CIRCLE, FILL_SQUARE, FILL_DIAMOND, OPEN_ARROW, OPEN_CIRCLE, OPEN_SQUARE, OPEN_DIAMOND): The style of the arrow at the end of the line.
  * endConnection [LineConnection](#lineconnection)
  * lineFill [LineFill](#linefill)
  * link [Link](#link)
  * startArrow `string` (values: ARROW_STYLE_UNSPECIFIED, NONE, STEALTH_ARROW, FILL_ARROW, FILL_CIRCLE, FILL_SQUARE, FILL_DIAMOND, OPEN_ARROW, OPEN_CIRCLE, OPEN_SQUARE, OPEN_DIAMOND): The style of the arrow at the beginning of the line.
  * startConnection [LineConnection](#lineconnection)
  * weight [Dimension](#dimension)

### Link
* Link `object`: A hypertext link.
  * pageObjectId `string`: If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.
  * relativeLink `string` (values: RELATIVE_SLIDE_LINK_UNSPECIFIED, NEXT_SLIDE, PREVIOUS_SLIDE, FIRST_SLIDE, LAST_SLIDE): If set, indicates this is a link to a slide in this presentation, addressed by its position.
  * slideIndex `integer`: If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.
  * url `string`: If set, indicates this is a link to the external web page at this URL.

### List
* List `object`: A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
  * listId `string`: The ID of the list.
  * nestingLevel `object`: A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive.

### MasterProperties
* MasterProperties `object`: The properties of Page that are only relevant for pages with page_type MASTER.
  * displayName `string`: The human-readable name of the master.

### MergeTableCellsRequest
* MergeTableCellsRequest `object`: Merges cells in a Table.
  * objectId `string`: The object ID of the table.
  * tableRange [TableRange](#tablerange)

### NestingLevel
* NestingLevel `object`: Contains properties describing the look and feel of a list bullet at a given level of nesting.
  * bulletStyle [TextStyle](#textstyle)

### NotesProperties
* NotesProperties `object`: The properties of Page that are only relevant for pages with page_type NOTES.
  * speakerNotesObjectId `string`: The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.

### OpaqueColor
* OpaqueColor `object`: A themeable solid color value.
  * rgbColor [RgbColor](#rgbcolor)
  * themeColor `string` (values: THEME_COLOR_TYPE_UNSPECIFIED, DARK1, LIGHT1, DARK2, LIGHT2, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK, FOLLOWED_HYPERLINK, TEXT1, BACKGROUND1, TEXT2, BACKGROUND2): An opaque theme color.

### OptionalColor
* OptionalColor `object`: A color that can either be fully opaque or fully transparent.
  * opaqueColor [OpaqueColor](#opaquecolor)

### Outline
* Outline `object`: The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the outline.
  * outlineFill [OutlineFill](#outlinefill)
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
  * weight [Dimension](#dimension)

### OutlineFill
* OutlineFill `object`: The fill of the outline.
  * solidFill [SolidFill](#solidfill)

### Page
* Page `object`: A page in a presentation.
  * layoutProperties [LayoutProperties](#layoutproperties)
  * masterProperties [MasterProperties](#masterproperties)
  * notesProperties [NotesProperties](#notesproperties)
  * objectId `string`: The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
  * pageElements `array`: The page elements rendered on the page.
    * items [PageElement](#pageelement)
  * pageProperties [PageProperties](#pageproperties)
  * pageType `string` (values: SLIDE, MASTER, LAYOUT, NOTES, NOTES_MASTER): The type of the page.
  * revisionId `string`: The revision ID of the presentation containing this page. Can be used in update requests to assert that the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated; however, a changed ID can also be due to internal factors such as ID format changes.
  * slideProperties [SlideProperties](#slideproperties)

### PageBackgroundFill
* PageBackgroundFill `object`: The page background fill.
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
  * solidFill [SolidFill](#solidfill)
  * stretchedPictureFill [StretchedPictureFill](#stretchedpicturefill)

### PageElement
* PageElement `object`: A visual element rendered on a page.
  * description `string`: The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.
  * elementGroup [Group](#group)
  * image [Image](#image)
  * line [Line](#line)
  * objectId `string`: The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.
  * shape [Shape](#shape)
  * sheetsChart [SheetsChart](#sheetschart)
  * size [Size](#size)
  * table [Table](#table)
  * title `string`: The title of the page element. Combined with description to display alt text. The field is not supported for Group elements.
  * transform [AffineTransform](#affinetransform)
  * video [Video](#video)
  * wordArt [WordArt](#wordart)

### PageElementProperties
* PageElementProperties `object`: Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
  * pageObjectId `string`: The object ID of the page where the element is located.
  * size [Size](#size)
  * transform [AffineTransform](#affinetransform)

### PageProperties
* PageProperties `object`: The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
  * colorScheme [ColorScheme](#colorscheme)
  * pageBackgroundFill [PageBackgroundFill](#pagebackgroundfill)

### ParagraphMarker
* ParagraphMarker `object`: A TextElement kind that represents the beginning of a new paragraph.
  * bullet [Bullet](#bullet)
  * style [ParagraphStyle](#paragraphstyle)

### ParagraphStyle
* ParagraphStyle `object`: Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
  * alignment `string` (values: ALIGNMENT_UNSPECIFIED, START, CENTER, END, JUSTIFIED): The text alignment for this paragraph.
  * direction `string` (values: TEXT_DIRECTION_UNSPECIFIED, LEFT_TO_RIGHT, RIGHT_TO_LEFT): The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.
  * indentEnd [Dimension](#dimension)
  * indentFirstLine [Dimension](#dimension)
  * indentStart [Dimension](#dimension)
  * lineSpacing `number`: The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
  * spaceAbove [Dimension](#dimension)
  * spaceBelow [Dimension](#dimension)
  * spacingMode `string` (values: SPACING_MODE_UNSPECIFIED, NEVER_COLLAPSE, COLLAPSE_LISTS): The spacing mode for the paragraph.

### Placeholder
* Placeholder `object`: The placeholder information that uniquely identifies a placeholder shape.
  * index `integer`: The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.
  * parentObjectId `string`: The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.
  * type `string` (values: NONE, BODY, CHART, CLIP_ART, CENTERED_TITLE, DIAGRAM, DATE_AND_TIME, FOOTER, HEADER, MEDIA, OBJECT, PICTURE, SLIDE_NUMBER, SUBTITLE, TABLE, TITLE, SLIDE_IMAGE): The type of the placeholder.

### Presentation
* Presentation `object`: A Google Slides presentation.
  * layouts `array`: The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout.
    * items [Page](#page)
  * locale `string`: The locale of the presentation, as an IETF BCP 47 language tag.
  * masters `array`: The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout.
    * items [Page](#page)
  * notesMaster [Page](#page)
  * pageSize [Size](#size)
  * presentationId `string`: The ID of the presentation.
  * revisionId `string`: The revision ID of the presentation. Can be used in update requests to assert that the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated; however, a changed ID can also be due to internal factors such as ID format changes.
  * slides `array`: The slides in the presentation. A slide inherits properties from a slide layout.
    * items [Page](#page)
  * title `string`: The title of the presentation.

### Range
* Range `object`: Specifies a contiguous range of an indexed collection, such as characters in text.
  * endIndex `integer`: The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
  * startIndex `integer`: The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
  * type `string` (values: RANGE_TYPE_UNSPECIFIED, FIXED_RANGE, FROM_START_INDEX, ALL): The type of range.

### Recolor
* Recolor `object`: A recolor effect applied on an image.
  * name `string` (values: NONE, LIGHT1, LIGHT2, LIGHT3, LIGHT4, LIGHT5, LIGHT6, LIGHT7, LIGHT8, LIGHT9, LIGHT10, DARK1, DARK2, DARK3, DARK4, DARK5, DARK6, DARK7, DARK8, DARK9, DARK10, GRAYSCALE, NEGATIVE, SEPIA, CUSTOM): The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.
  * recolorStops `array`: The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.
    * items [ColorStop](#colorstop)

### RefreshSheetsChartRequest
* RefreshSheetsChartRequest `object`: Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
  * objectId `string`: The object ID of the chart to refresh.

### ReplaceAllShapesWithImageRequest
* ReplaceAllShapesWithImageRequest `object`: Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * imageReplaceMethod `string` (values: IMAGE_REPLACE_METHOD_UNSPECIFIED, CENTER_INSIDE, CENTER_CROP): The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used.
  * imageUrl `string`: The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
    * items `string`
  * replaceMethod `string` (values: CENTER_INSIDE, CENTER_CROP): The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence.

### ReplaceAllShapesWithImageResponse
* ReplaceAllShapesWithImageResponse `object`: The result of replacing shapes with an image.
  * occurrencesChanged `integer`: The number of shapes replaced with images.

### ReplaceAllShapesWithSheetsChartRequest
* ReplaceAllShapesWithSheetsChartRequest `object`: Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * linkingMode `string` (values: NOT_LINKED_IMAGE, LINKED): The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
    * items `string`
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the chart.

### ReplaceAllShapesWithSheetsChartResponse
* ReplaceAllShapesWithSheetsChartResponse `object`: The result of replacing shapes with a Google Sheets chart.
  * occurrencesChanged `integer`: The number of shapes replaced with charts.

### ReplaceAllTextRequest
* ReplaceAllTextRequest `object`: Replaces all instances of text matching a criteria with replace text.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.
    * items `string`
  * replaceText `string`: The text that will replace the matched text.

### ReplaceAllTextResponse
* ReplaceAllTextResponse `object`: The result of replacing text.
  * occurrencesChanged `integer`: The number of occurrences changed by replacing all text.

### ReplaceImageRequest
* ReplaceImageRequest `object`: Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
  * imageObjectId `string`: The ID of the existing image that will be replaced.
  * imageReplaceMethod `string` (values: IMAGE_REPLACE_METHOD_UNSPECIFIED, CENTER_INSIDE, CENTER_CROP): The replacement method.
  * url `string`: The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.

### Request
* Request `object`: A single kind of update to apply to a presentation.
  * createImage [CreateImageRequest](#createimagerequest)
  * createLine [CreateLineRequest](#createlinerequest)
  * createParagraphBullets [CreateParagraphBulletsRequest](#createparagraphbulletsrequest)
  * createShape [CreateShapeRequest](#createshaperequest)
  * createSheetsChart [CreateSheetsChartRequest](#createsheetschartrequest)
  * createSlide [CreateSlideRequest](#createsliderequest)
  * createTable [CreateTableRequest](#createtablerequest)
  * createVideo [CreateVideoRequest](#createvideorequest)
  * deleteObject [DeleteObjectRequest](#deleteobjectrequest)
  * deleteParagraphBullets [DeleteParagraphBulletsRequest](#deleteparagraphbulletsrequest)
  * deleteTableColumn [DeleteTableColumnRequest](#deletetablecolumnrequest)
  * deleteTableRow [DeleteTableRowRequest](#deletetablerowrequest)
  * deleteText [DeleteTextRequest](#deletetextrequest)
  * duplicateObject [DuplicateObjectRequest](#duplicateobjectrequest)
  * groupObjects [GroupObjectsRequest](#groupobjectsrequest)
  * insertTableColumns [InsertTableColumnsRequest](#inserttablecolumnsrequest)
  * insertTableRows [InsertTableRowsRequest](#inserttablerowsrequest)
  * insertText [InsertTextRequest](#inserttextrequest)
  * mergeTableCells [MergeTableCellsRequest](#mergetablecellsrequest)
  * refreshSheetsChart [RefreshSheetsChartRequest](#refreshsheetschartrequest)
  * replaceAllShapesWithImage [ReplaceAllShapesWithImageRequest](#replaceallshapeswithimagerequest)
  * replaceAllShapesWithSheetsChart [ReplaceAllShapesWithSheetsChartRequest](#replaceallshapeswithsheetschartrequest)
  * replaceAllText [ReplaceAllTextRequest](#replacealltextrequest)
  * replaceImage [ReplaceImageRequest](#replaceimagerequest)
  * rerouteLine [RerouteLineRequest](#reroutelinerequest)
  * ungroupObjects [UngroupObjectsRequest](#ungroupobjectsrequest)
  * unmergeTableCells [UnmergeTableCellsRequest](#unmergetablecellsrequest)
  * updateImageProperties [UpdateImagePropertiesRequest](#updateimagepropertiesrequest)
  * updateLineCategory [UpdateLineCategoryRequest](#updatelinecategoryrequest)
  * updateLineProperties [UpdateLinePropertiesRequest](#updatelinepropertiesrequest)
  * updatePageElementAltText [UpdatePageElementAltTextRequest](#updatepageelementalttextrequest)
  * updatePageElementTransform [UpdatePageElementTransformRequest](#updatepageelementtransformrequest)
  * updatePageElementsZOrder [UpdatePageElementsZOrderRequest](#updatepageelementszorderrequest)
  * updatePageProperties [UpdatePagePropertiesRequest](#updatepagepropertiesrequest)
  * updateParagraphStyle [UpdateParagraphStyleRequest](#updateparagraphstylerequest)
  * updateShapeProperties [UpdateShapePropertiesRequest](#updateshapepropertiesrequest)
  * updateSlidesPosition [UpdateSlidesPositionRequest](#updateslidespositionrequest)
  * updateTableBorderProperties [UpdateTableBorderPropertiesRequest](#updatetableborderpropertiesrequest)
  * updateTableCellProperties [UpdateTableCellPropertiesRequest](#updatetablecellpropertiesrequest)
  * updateTableColumnProperties [UpdateTableColumnPropertiesRequest](#updatetablecolumnpropertiesrequest)
  * updateTableRowProperties [UpdateTableRowPropertiesRequest](#updatetablerowpropertiesrequest)
  * updateTextStyle [UpdateTextStyleRequest](#updatetextstylerequest)
  * updateVideoProperties [UpdateVideoPropertiesRequest](#updatevideopropertiesrequest)

### RerouteLineRequest
* RerouteLineRequest `object`: Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
  * objectId `string`: The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements.

### Response
* Response `object`: A single response from an update.
  * createImage [CreateImageResponse](#createimageresponse)
  * createLine [CreateLineResponse](#createlineresponse)
  * createShape [CreateShapeResponse](#createshaperesponse)
  * createSheetsChart [CreateSheetsChartResponse](#createsheetschartresponse)
  * createSlide [CreateSlideResponse](#createslideresponse)
  * createTable [CreateTableResponse](#createtableresponse)
  * createVideo [CreateVideoResponse](#createvideoresponse)
  * duplicateObject [DuplicateObjectResponse](#duplicateobjectresponse)
  * groupObjects [GroupObjectsResponse](#groupobjectsresponse)
  * replaceAllShapesWithImage [ReplaceAllShapesWithImageResponse](#replaceallshapeswithimageresponse)
  * replaceAllShapesWithSheetsChart [ReplaceAllShapesWithSheetsChartResponse](#replaceallshapeswithsheetschartresponse)
  * replaceAllText [ReplaceAllTextResponse](#replacealltextresponse)

### RgbColor
* RgbColor `object`: An RGB color.
  * blue `number`: The blue component of the color, from 0.0 to 1.0.
  * green `number`: The green component of the color, from 0.0 to 1.0.
  * red `number`: The red component of the color, from 0.0 to 1.0.

### Shadow
* Shadow `object`: The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
  * alignment `string` (values: RECTANGLE_POSITION_UNSPECIFIED, TOP_LEFT, TOP_CENTER, TOP_RIGHT, LEFT_CENTER, CENTER, RIGHT_CENTER, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT): The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.
  * alpha `number`: The alpha of the shadow's color, from 0.0 to 1.0.
  * blurRadius [Dimension](#dimension)
  * color [OpaqueColor](#opaquecolor)
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.
  * rotateWithShape `boolean`: Whether the shadow should rotate with the shape. This property is read-only.
  * transform [AffineTransform](#affinetransform)
  * type `string` (values: SHADOW_TYPE_UNSPECIFIED, OUTER): The type of the shadow. This property is read-only.

### Shape
* Shape `object`: A PageElement kind representing a generic shape that does not have a more specific classification.
  * placeholder [Placeholder](#placeholder)
  * shapeProperties [ShapeProperties](#shapeproperties)
  * shapeType `string` (values: TYPE_UNSPECIFIED, TEXT_BOX, RECTANGLE, ROUND_RECTANGLE, ELLIPSE, ARC, BENT_ARROW, BENT_UP_ARROW, BEVEL, BLOCK_ARC, BRACE_PAIR, BRACKET_PAIR, CAN, CHEVRON, CHORD, CLOUD, CORNER, CUBE, CURVED_DOWN_ARROW, CURVED_LEFT_ARROW, CURVED_RIGHT_ARROW, CURVED_UP_ARROW, DECAGON, DIAGONAL_STRIPE, DIAMOND, DODECAGON, DONUT, DOUBLE_WAVE, DOWN_ARROW, DOWN_ARROW_CALLOUT, FOLDED_CORNER, FRAME, HALF_FRAME, HEART, HEPTAGON, HEXAGON, HOME_PLATE, HORIZONTAL_SCROLL, IRREGULAR_SEAL_1, IRREGULAR_SEAL_2, LEFT_ARROW, LEFT_ARROW_CALLOUT, LEFT_BRACE, LEFT_BRACKET, LEFT_RIGHT_ARROW, LEFT_RIGHT_ARROW_CALLOUT, LEFT_RIGHT_UP_ARROW, LEFT_UP_ARROW, LIGHTNING_BOLT, MATH_DIVIDE, MATH_EQUAL, MATH_MINUS, MATH_MULTIPLY, MATH_NOT_EQUAL, MATH_PLUS, MOON, NO_SMOKING, NOTCHED_RIGHT_ARROW, OCTAGON, PARALLELOGRAM, PENTAGON, PIE, PLAQUE, PLUS, QUAD_ARROW, QUAD_ARROW_CALLOUT, RIBBON, RIBBON_2, RIGHT_ARROW, RIGHT_ARROW_CALLOUT, RIGHT_BRACE, RIGHT_BRACKET, ROUND_1_RECTANGLE, ROUND_2_DIAGONAL_RECTANGLE, ROUND_2_SAME_RECTANGLE, RIGHT_TRIANGLE, SMILEY_FACE, SNIP_1_RECTANGLE, SNIP_2_DIAGONAL_RECTANGLE, SNIP_2_SAME_RECTANGLE, SNIP_ROUND_RECTANGLE, STAR_10, STAR_12, STAR_16, STAR_24, STAR_32, STAR_4, STAR_5, STAR_6, STAR_7, STAR_8, STRIPED_RIGHT_ARROW, SUN, TRAPEZOID, TRIANGLE, UP_ARROW, UP_ARROW_CALLOUT, UP_DOWN_ARROW, UTURN_ARROW, VERTICAL_SCROLL, WAVE, WEDGE_ELLIPSE_CALLOUT, WEDGE_RECTANGLE_CALLOUT, WEDGE_ROUND_RECTANGLE_CALLOUT, FLOW_CHART_ALTERNATE_PROCESS, FLOW_CHART_COLLATE, FLOW_CHART_CONNECTOR, FLOW_CHART_DECISION, FLOW_CHART_DELAY, FLOW_CHART_DISPLAY, FLOW_CHART_DOCUMENT, FLOW_CHART_EXTRACT, FLOW_CHART_INPUT_OUTPUT, FLOW_CHART_INTERNAL_STORAGE, FLOW_CHART_MAGNETIC_DISK, FLOW_CHART_MAGNETIC_DRUM, FLOW_CHART_MAGNETIC_TAPE, FLOW_CHART_MANUAL_INPUT, FLOW_CHART_MANUAL_OPERATION, FLOW_CHART_MERGE, FLOW_CHART_MULTIDOCUMENT, FLOW_CHART_OFFLINE_STORAGE, FLOW_CHART_OFFPAGE_CONNECTOR, FLOW_CHART_ONLINE_STORAGE, FLOW_CHART_OR, FLOW_CHART_PREDEFINED_PROCESS, FLOW_CHART_PREPARATION, FLOW_CHART_PROCESS, FLOW_CHART_PUNCHED_CARD, FLOW_CHART_PUNCHED_TAPE, FLOW_CHART_SORT, FLOW_CHART_SUMMING_JUNCTION, FLOW_CHART_TERMINATOR, ARROW_EAST, ARROW_NORTH_EAST, ARROW_NORTH, SPEECH, STARBURST, TEARDROP, ELLIPSE_RIBBON, ELLIPSE_RIBBON_2, CLOUD_CALLOUT, CUSTOM): The type of the shape.
  * text [TextContent](#textcontent)

### ShapeBackgroundFill
* ShapeBackgroundFill `object`: The shape background fill.
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
  * solidFill [SolidFill](#solidfill)

### ShapeProperties
* ShapeProperties `object`: The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
  * contentAlignment `string` (values: CONTENT_ALIGNMENT_UNSPECIFIED, CONTENT_ALIGNMENT_UNSUPPORTED, TOP, MIDDLE, BOTTOM): The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.
  * link [Link](#link)
  * outline [Outline](#outline)
  * shadow [Shadow](#shadow)
  * shapeBackgroundFill [ShapeBackgroundFill](#shapebackgroundfill)

### SheetsChart
* SheetsChart `object`: A PageElement kind representing a linked chart embedded from Google Sheets.
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
  * contentUrl `string`: The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
  * sheetsChartProperties [SheetsChartProperties](#sheetschartproperties)
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the source chart.

### SheetsChartProperties
* SheetsChartProperties `object`: The properties of the SheetsChart.
  * chartImageProperties [ImageProperties](#imageproperties)

### Size
* Size `object`: A width and height.
  * height [Dimension](#dimension)
  * width [Dimension](#dimension)

### SlideProperties
* SlideProperties `object`: The properties of Page that are only relevant for pages with page_type SLIDE.
  * layoutObjectId `string`: The object ID of the layout that this slide is based on. This property is read-only.
  * masterObjectId `string`: The object ID of the master that this slide is based on. This property is read-only.
  * notesPage [Page](#page)

### SolidFill
* SolidFill `object`: A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
  * alpha `number`: The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
  * color [OpaqueColor](#opaquecolor)

### StretchedPictureFill
* StretchedPictureFill `object`: The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
  * contentUrl `string`: Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
  * size [Size](#size)

### SubstringMatchCriteria
* SubstringMatchCriteria `object`: A criteria that matches a specific string of text in a shape or table.
  * matchCase `boolean`: Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
  * text `string`: The text to search for in the shape or table.

### Table
* Table `object`: A PageElement kind representing a table.
  * columns `integer`: Number of columns in the table.
  * horizontalBorderRows `array`: Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.
    * items [TableBorderRow](#tableborderrow)
  * rows `integer`: Number of rows in the table.
  * tableColumns `array`: Properties of each column.
    * items [TableColumnProperties](#tablecolumnproperties)
  * tableRows `array`: Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.
    * items [TableRow](#tablerow)
  * verticalBorderRows `array`: Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.
    * items [TableBorderRow](#tableborderrow)

### TableBorderCell
* TableBorderCell `object`: The properties of each border cell.
  * location [TableCellLocation](#tablecelllocation)
  * tableBorderProperties [TableBorderProperties](#tableborderproperties)

### TableBorderFill
* TableBorderFill `object`: The fill of the border.
  * solidFill [SolidFill](#solidfill)

### TableBorderProperties
* TableBorderProperties `object`: The border styling properties of the TableBorderCell.
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the border.
  * tableBorderFill [TableBorderFill](#tableborderfill)
  * weight [Dimension](#dimension)

### TableBorderRow
* TableBorderRow `object`: Contents of each border row in a table.
  * tableBorderCells `array`: Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.
    * items [TableBorderCell](#tablebordercell)

### TableCell
* TableCell `object`: Properties and contents of each table cell.
  * columnSpan `integer`: Column span of the cell.
  * location [TableCellLocation](#tablecelllocation)
  * rowSpan `integer`: Row span of the cell.
  * tableCellProperties [TableCellProperties](#tablecellproperties)
  * text [TextContent](#textcontent)

### TableCellBackgroundFill
* TableCellBackgroundFill `object`: The table cell background fill.
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
  * solidFill [SolidFill](#solidfill)

### TableCellLocation
* TableCellLocation `object`: A location of a single table cell within a table.
  * columnIndex `integer`: The 0-based column index.
  * rowIndex `integer`: The 0-based row index.

### TableCellProperties
* TableCellProperties `object`: The properties of the TableCell.
  * contentAlignment `string` (values: CONTENT_ALIGNMENT_UNSPECIFIED, CONTENT_ALIGNMENT_UNSUPPORTED, TOP, MIDDLE, BOTTOM): The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.
  * tableCellBackgroundFill [TableCellBackgroundFill](#tablecellbackgroundfill)

### TableColumnProperties
* TableColumnProperties `object`: Properties of each column in a table.
  * columnWidth [Dimension](#dimension)

### TableRange
* TableRange `object`: A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
  * columnSpan `integer`: The column span of the table range.
  * location [TableCellLocation](#tablecelllocation)
  * rowSpan `integer`: The row span of the table range.

### TableRow
* TableRow `object`: Properties and contents of each row in a table.
  * rowHeight [Dimension](#dimension)
  * tableCells `array`: Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.
    * items [TableCell](#tablecell)
  * tableRowProperties [TableRowProperties](#tablerowproperties)

### TableRowProperties
* TableRowProperties `object`: Properties of each row in a table.
  * minRowHeight [Dimension](#dimension)

### TextContent
* TextContent `object`: The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
  * lists `object`: The bulleted lists contained in this text, keyed by list ID.
  * textElements `array`: The text contents broken down into its component parts, including styling information. This property is read-only.
    * items [TextElement](#textelement)

### TextElement
* TextElement `object`: A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
  * autoText [AutoText](#autotext)
  * endIndex `integer`: The zero-based end index of this text element, exclusive, in Unicode code units.
  * paragraphMarker [ParagraphMarker](#paragraphmarker)
  * startIndex `integer`: The zero-based start index of this text element, in Unicode code units.
  * textRun [TextRun](#textrun)

### TextRun
* TextRun `object`: A TextElement kind that represents a run of text that all has the same styling.
  * content `string`: The text of this run.
  * style [TextStyle](#textstyle)

### TextStyle
* TextStyle `object`: Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
  * backgroundColor [OptionalColor](#optionalcolor)
  * baselineOffset `string` (values: BASELINE_OFFSET_UNSPECIFIED, NONE, SUPERSCRIPT, SUBSCRIPT): The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.
  * bold `boolean`: Whether or not the text is rendered as bold.
  * fontFamily `string`: The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.
  * fontSize [Dimension](#dimension)
  * foregroundColor [OptionalColor](#optionalcolor)
  * italic `boolean`: Whether or not the text is italicized.
  * link [Link](#link)
  * smallCaps `boolean`: Whether or not the text is in small capital letters.
  * strikethrough `boolean`: Whether or not the text is struck through.
  * underline `boolean`: Whether or not the text is underlined.
  * weightedFontFamily [WeightedFontFamily](#weightedfontfamily)

### ThemeColorPair
* ThemeColorPair `object`: A pair mapping a theme color type to the concrete color it represents.
  * color [RgbColor](#rgbcolor)
  * type `string` (values: THEME_COLOR_TYPE_UNSPECIFIED, DARK1, LIGHT1, DARK2, LIGHT2, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK, FOLLOWED_HYPERLINK, TEXT1, BACKGROUND1, TEXT2, BACKGROUND2): The type of the theme color.

### Thumbnail
* Thumbnail `object`: The thumbnail of a page.
  * contentUrl `string`: The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`.
  * height `integer`: The positive height in pixels of the thumbnail image.
  * width `integer`: The positive width in pixels of the thumbnail image.

### UngroupObjectsRequest
* UngroupObjectsRequest `object`: Ungroups objects, such as groups.
  * objectIds `array`: The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved.
    * items `string`

### UnmergeTableCellsRequest
* UnmergeTableCellsRequest `object`: Unmerges cells in a Table.
  * objectId `string`: The object ID of the table.
  * tableRange [TableRange](#tablerange)

### UpdateImagePropertiesRequest
* UpdateImagePropertiesRequest `object`: Update the properties of an Image.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * imageProperties [ImageProperties](#imageproperties)
  * objectId `string`: The object ID of the image the updates are applied to.

### UpdateLineCategoryRequest
* UpdateLineCategoryRequest `object`: Updates the category of a line.
  * lineCategory `string` (values: LINE_CATEGORY_UNSPECIFIED, STRAIGHT, BENT, CURVED): The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements.
  * objectId `string`: The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category.

### UpdateLinePropertiesRequest
* UpdateLinePropertiesRequest `object`: Updates the properties of a Line.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * lineProperties [LineProperties](#lineproperties)
  * objectId `string`: The object ID of the line the update is applied to.

### UpdatePageElementAltTextRequest
* UpdatePageElementAltTextRequest `object`: Updates the alt text title and/or description of a page element.
  * description `string`: The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.
  * objectId `string`: The object ID of the page element the updates are applied to.
  * title `string`: The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.

### UpdatePageElementTransformRequest
* UpdatePageElementTransformRequest `object`: Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
  * applyMode `string` (values: APPLY_MODE_UNSPECIFIED, RELATIVE, ABSOLUTE): The apply mode of the transform update.
  * objectId `string`: The object ID of the page element to update.
  * transform [AffineTransform](#affinetransform)

### UpdatePageElementsZOrderRequest
* UpdatePageElementsZOrderRequest `object`: Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
  * operation `string` (values: Z_ORDER_OPERATION_UNSPECIFIED, BRING_TO_FRONT, BRING_FORWARD, SEND_BACKWARD, SEND_TO_BACK): The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.
  * pageElementObjectIds `array`: The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped.
    * items `string`

### UpdatePagePropertiesRequest
* UpdatePagePropertiesRequest `object`: Updates the properties of a Page.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the page the update is applied to.
  * pageProperties [PageProperties](#pageproperties)

### UpdateParagraphStyleRequest
* UpdateParagraphStyleRequest `object`: Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the shape or table with the text to be styled.
  * style [ParagraphStyle](#paragraphstyle)
  * textRange [Range](#range)

### UpdateShapePropertiesRequest
* UpdateShapePropertiesRequest `object`: Update the properties of a Shape.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the shape the updates are applied to.
  * shapeProperties [ShapeProperties](#shapeproperties)

### UpdateSlidesPositionRequest
* UpdateSlidesPositionRequest `object`: Updates the position of slides in the presentation.
  * insertionIndex `integer`: The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.
  * slideObjectIds `array`: The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.
    * items `string`

### UpdateTableBorderPropertiesRequest
* UpdateTableBorderPropertiesRequest `object`: Updates the properties of the table borders in a Table.
  * borderPosition `string` (values: ALL, BOTTOM, INNER, INNER_HORIZONTAL, INNER_VERTICAL, LEFT, OUTER, RIGHT, TOP): The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the table.
  * tableBorderProperties [TableBorderProperties](#tableborderproperties)
  * tableRange [TableRange](#tablerange)

### UpdateTableCellPropertiesRequest
* UpdateTableCellPropertiesRequest `object`: Update the properties of a TableCell.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the table.
  * tableCellProperties [TableCellProperties](#tablecellproperties)
  * tableRange [TableRange](#tablerange)

### UpdateTableColumnPropertiesRequest
* UpdateTableColumnPropertiesRequest `object`: Updates the properties of a Table column.
  * columnIndices `array`: The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated.
    * items `integer`
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points).
  * objectId `string`: The object ID of the table.
  * tableColumnProperties [TableColumnProperties](#tablecolumnproperties)

### UpdateTableRowPropertiesRequest
* UpdateTableRowPropertiesRequest `object`: Updates the properties of a Table row.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the property is left unset, the minimum row height will default to 0.
  * objectId `string`: The object ID of the table.
  * rowIndices `array`: The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated.
    * items `integer`
  * tableRowProperties [TableRowProperties](#tablerowproperties)

### UpdateTextStyleRequest
* UpdateTextStyleRequest `object`: Update the styling of text in a Shape or Table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the shape or table with the text to be styled.
  * style [TextStyle](#textstyle)
  * textRange [Range](#range)

### UpdateVideoPropertiesRequest
* UpdateVideoPropertiesRequest `object`: Update the properties of a Video.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * objectId `string`: The object ID of the video the updates are applied to.
  * videoProperties [VideoProperties](#videoproperties)

### Video
* Video `object`: A PageElement kind representing a video.
  * id `string`: The video source's unique identifier for this video.
  * source `string` (values: SOURCE_UNSPECIFIED, YOUTUBE, DRIVE): The video source.
  * url `string`: An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.
  * videoProperties [VideoProperties](#videoproperties)

### VideoProperties
* VideoProperties `object`: The properties of the Video.
  * autoPlay `boolean`: Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.
  * end `integer`: The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.
  * mute `boolean`: Whether to mute the audio during video playback. Defaults to false.
  * outline [Outline](#outline)
  * start `integer`: The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.

### WeightedFontFamily
* WeightedFontFamily `object`: Represents a font family and weight used to style a TextRun.
  * fontFamily `string`: The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
  * weight `integer`: The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").

### WordArt
* WordArt `object`: A PageElement kind representing word art.
  * renderedText `string`: The text rendered as word art.

### WriteControl
* WriteControl `object`: Provides control over how write requests are executed.
  * requiredRevisionId `string`: The revision ID of the presentation required for the write request. If specified and the `required_revision_id` doesn't exactly match the presentation's current `revision_id`, the request will not be processed and will return a 400 bad request error.


