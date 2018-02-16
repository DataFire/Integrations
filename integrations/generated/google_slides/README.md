# @datafire/google_slides

Client library for Google Slides

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

google_slides.presentations.create({}).then(data => {
  console.log(data);
});
```

## Description

An API for creating and editing Google Slides presentations.

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

### presentations.create
Creates a new presentation using the title given in the request. Other
fields in the request are ignored.
Returns the created presentation.


```js
google_slides.presentations.create({}, context)
```

#### Input
* input `object`
  * body [Presentation](#presentation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Presentation](#presentation)

### presentations.get
Gets the latest version of the specified presentation.


```js
google_slides.presentations.get({
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Presentation](#presentation)

### presentations.pages.get
Gets the latest version of the specified page in the presentation.


```js
google_slides.presentations.pages.get({
  "pageObjectId": "",
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * pageObjectId **required** `string`: The object ID of the page to retrieve.
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Page](#page)

### presentations.pages.getThumbnail
Generates a thumbnail of the latest version of the specified page in the
presentation and returns a URL to the thumbnail image.

This request counts as an expensive read request for quota purposes.


```js
google_slides.presentations.pages.getThumbnail({
  "pageObjectId": "",
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * pageObjectId **required** `string`: The object ID of the page whose thumbnail to retrieve.
  * presentationId **required** `string`: The ID of the presentation to retrieve.
  * thumbnailProperties.mimeType `string` (values: PNG): The optional mime type of the thumbnail image.
  * thumbnailProperties.thumbnailSize `string` (values: THUMBNAIL_SIZE_UNSPECIFIED, LARGE): The optional thumbnail image size.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Thumbnail](#thumbnail)

### presentations.batchUpdate
Applies one or more updates to the presentation.

Each request is validated before
being applied. If any request is not valid, then the entire request will
fail and nothing will be applied.

Some requests have replies to
give you some information about how they are applied. Other requests do
not need to return information; these each return an empty reply.
The order of replies matches that of the requests.

For example, suppose you call batchUpdate with four updates, and only the
third one returns information. The response would have two empty replies:
the reply to the third request, and another empty reply, in that order.

Because other users may be editing the presentation, the presentation
might not exactly reflect your changes: your changes may
be altered with respect to collaborator changes. If there are no
collaborators, the presentation should reflect your changes. In any case,
the updates in your request are guaranteed to be applied together
atomically.


```js
google_slides.presentations.batchUpdate({
  "presentationId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchUpdatePresentationRequest](#batchupdatepresentationrequest)
  * presentationId **required** `string`: The presentation to apply the updates to.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchUpdatePresentationResponse](#batchupdatepresentationresponse)



## Definitions

### AffineTransform
* AffineTransform `object`: AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
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
  * replies `array`: The reply of the updates.  This maps 1:1 with the updates, although
    * items [Response](#response)

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
  * alpha `number`: The alpha value of this color in the gradient band. Defaults to 1.0,
  * color [OpaqueColor](#opaquecolor)
  * position `number`: The relative position of the color stop in the gradient band measured

### CreateImageRequest
* CreateImageRequest `object`: Creates an image.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID.
  * url `string`: The image URL.

### CreateImageResponse
* CreateImageResponse `object`: The result of creating an image.
  * objectId `string`: The object ID of the created image.

### CreateLineRequest
* CreateLineRequest `object`: Creates a line.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * lineCategory `string` (values: STRAIGHT, BENT, CURVED): The category of line to be created.
  * objectId `string`: A user-supplied object ID.

### CreateLineResponse
* CreateLineResponse `object`: The result of creating a line.
  * objectId `string`: The object ID of the created line.

### CreateParagraphBulletsRequest
* CreateParagraphBulletsRequest `object`: Creates bullets for all of the paragraphs that overlap with the given
  * bulletPreset `string` (values: BULLET_DISC_CIRCLE_SQUARE, BULLET_DIAMONDX_ARROW3D_SQUARE, BULLET_CHECKBOX, BULLET_ARROW_DIAMOND_DISC, BULLET_STAR_CIRCLE_SQUARE, BULLET_ARROW3D_CIRCLE_SQUARE, BULLET_LEFTTRIANGLE_DIAMOND_DISC, BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE, BULLET_DIAMOND_CIRCLE_SQUARE, NUMBERED_DIGIT_ALPHA_ROMAN, NUMBERED_DIGIT_ALPHA_ROMAN_PARENS, NUMBERED_DIGIT_NESTED, NUMBERED_UPPERALPHA_ALPHA_ROMAN, NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT, NUMBERED_ZERODIGIT_ALPHA_ROMAN): The kinds of bullet glyphs to be used. Defaults to the
  * cellLocation [TableCellLocation](#tablecelllocation)
  * objectId `string`: The object ID of the shape or table containing the text to add bullets to.
  * textRange [Range](#range)

### CreateShapeRequest
* CreateShapeRequest `object`: Creates a new shape.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID.
  * shapeType `string` (values: TYPE_UNSPECIFIED, TEXT_BOX, RECTANGLE, ROUND_RECTANGLE, ELLIPSE, ARC, BENT_ARROW, BENT_UP_ARROW, BEVEL, BLOCK_ARC, BRACE_PAIR, BRACKET_PAIR, CAN, CHEVRON, CHORD, CLOUD, CORNER, CUBE, CURVED_DOWN_ARROW, CURVED_LEFT_ARROW, CURVED_RIGHT_ARROW, CURVED_UP_ARROW, DECAGON, DIAGONAL_STRIPE, DIAMOND, DODECAGON, DONUT, DOUBLE_WAVE, DOWN_ARROW, DOWN_ARROW_CALLOUT, FOLDED_CORNER, FRAME, HALF_FRAME, HEART, HEPTAGON, HEXAGON, HOME_PLATE, HORIZONTAL_SCROLL, IRREGULAR_SEAL_1, IRREGULAR_SEAL_2, LEFT_ARROW, LEFT_ARROW_CALLOUT, LEFT_BRACE, LEFT_BRACKET, LEFT_RIGHT_ARROW, LEFT_RIGHT_ARROW_CALLOUT, LEFT_RIGHT_UP_ARROW, LEFT_UP_ARROW, LIGHTNING_BOLT, MATH_DIVIDE, MATH_EQUAL, MATH_MINUS, MATH_MULTIPLY, MATH_NOT_EQUAL, MATH_PLUS, MOON, NO_SMOKING, NOTCHED_RIGHT_ARROW, OCTAGON, PARALLELOGRAM, PENTAGON, PIE, PLAQUE, PLUS, QUAD_ARROW, QUAD_ARROW_CALLOUT, RIBBON, RIBBON_2, RIGHT_ARROW, RIGHT_ARROW_CALLOUT, RIGHT_BRACE, RIGHT_BRACKET, ROUND_1_RECTANGLE, ROUND_2_DIAGONAL_RECTANGLE, ROUND_2_SAME_RECTANGLE, RIGHT_TRIANGLE, SMILEY_FACE, SNIP_1_RECTANGLE, SNIP_2_DIAGONAL_RECTANGLE, SNIP_2_SAME_RECTANGLE, SNIP_ROUND_RECTANGLE, STAR_10, STAR_12, STAR_16, STAR_24, STAR_32, STAR_4, STAR_5, STAR_6, STAR_7, STAR_8, STRIPED_RIGHT_ARROW, SUN, TRAPEZOID, TRIANGLE, UP_ARROW, UP_ARROW_CALLOUT, UP_DOWN_ARROW, UTURN_ARROW, VERTICAL_SCROLL, WAVE, WEDGE_ELLIPSE_CALLOUT, WEDGE_RECTANGLE_CALLOUT, WEDGE_ROUND_RECTANGLE_CALLOUT, FLOW_CHART_ALTERNATE_PROCESS, FLOW_CHART_COLLATE, FLOW_CHART_CONNECTOR, FLOW_CHART_DECISION, FLOW_CHART_DELAY, FLOW_CHART_DISPLAY, FLOW_CHART_DOCUMENT, FLOW_CHART_EXTRACT, FLOW_CHART_INPUT_OUTPUT, FLOW_CHART_INTERNAL_STORAGE, FLOW_CHART_MAGNETIC_DISK, FLOW_CHART_MAGNETIC_DRUM, FLOW_CHART_MAGNETIC_TAPE, FLOW_CHART_MANUAL_INPUT, FLOW_CHART_MANUAL_OPERATION, FLOW_CHART_MERGE, FLOW_CHART_MULTIDOCUMENT, FLOW_CHART_OFFLINE_STORAGE, FLOW_CHART_OFFPAGE_CONNECTOR, FLOW_CHART_ONLINE_STORAGE, FLOW_CHART_OR, FLOW_CHART_PREDEFINED_PROCESS, FLOW_CHART_PREPARATION, FLOW_CHART_PROCESS, FLOW_CHART_PUNCHED_CARD, FLOW_CHART_PUNCHED_TAPE, FLOW_CHART_SORT, FLOW_CHART_SUMMING_JUNCTION, FLOW_CHART_TERMINATOR, ARROW_EAST, ARROW_NORTH_EAST, ARROW_NORTH, SPEECH, STARBURST, TEARDROP, ELLIPSE_RIBBON, ELLIPSE_RIBBON_2, CLOUD_CALLOUT, CUSTOM): The shape type.

### CreateShapeResponse
* CreateShapeResponse `object`: The result of creating a shape.
  * objectId `string`: The object ID of the created shape.

### CreateSheetsChartRequest
* CreateSheetsChartRequest `object`: Creates an embedded Google Sheets chart.
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * linkingMode `string` (values: NOT_LINKED_IMAGE, LINKED): The mode with which the chart is linked to the source spreadsheet. When
  * objectId `string`: A user-supplied object ID.
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the chart.

### CreateSheetsChartResponse
* CreateSheetsChartResponse `object`: The result of creating an embedded Google Sheets chart.
  * objectId `string`: The object ID of the created chart.

### CreateSlideRequest
* CreateSlideRequest `object`: Creates a new slide.
  * insertionIndex `integer`: The optional zero-based index indicating where to insert the slides.
  * objectId `string`: A user-supplied object ID.
  * placeholderIdMappings `array`: An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s)
    * items [LayoutPlaceholderIdMapping](#layoutplaceholderidmapping)
  * slideLayoutReference [LayoutReference](#layoutreference)

### CreateSlideResponse
* CreateSlideResponse `object`: The result of creating a slide.
  * objectId `string`: The object ID of the created slide.

### CreateTableRequest
* CreateTableRequest `object`: Creates a new table.
  * columns `integer`: Number of columns in the table.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * objectId `string`: A user-supplied object ID.
  * rows `integer`: Number of rows in the table.

### CreateTableResponse
* CreateTableResponse `object`: The result of creating a table.
  * objectId `string`: The object ID of the created table.

### CreateVideoRequest
* CreateVideoRequest `object`: Creates a video.
  * elementProperties [PageElementProperties](#pageelementproperties)
  * id `string`: The video source's unique identifier for this video.
  * objectId `string`: A user-supplied object ID.
  * source `string` (values: SOURCE_UNSPECIFIED, YOUTUBE): The video source.

### CreateVideoResponse
* CreateVideoResponse `object`: The result of creating a video.
  * objectId `string`: The object ID of the created video.

### CropProperties
* CropProperties `object`: The crop properties of an object enclosed in a container. For example, an
  * angle `number`: The rotation angle of the crop window around its center, in radians.
  * bottomOffset `number`: The offset specifies the bottom edge of the crop rectangle that is located
  * leftOffset `number`: The offset specifies the left edge of the crop rectangle that is located to
  * rightOffset `number`: The offset specifies the right edge of the crop rectangle that is located
  * topOffset `number`: The offset specifies the top edge of the crop rectangle that is located

### DeleteObjectRequest
* DeleteObjectRequest `object`: Deletes an object, either pages or
  * objectId `string`: The object ID of the page or page element to delete.

### DeleteParagraphBulletsRequest
* DeleteParagraphBulletsRequest `object`: Deletes bullets from all of the paragraphs that overlap with the given text
  * cellLocation [TableCellLocation](#tablecelllocation)
  * objectId `string`: The object ID of the shape or table containing the text to delete bullets
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
* DuplicateObjectRequest `object`: Duplicates a slide or page element.
  * objectId `string`: The ID of the object to duplicate.
  * objectIds `object`: The object being duplicated may contain other objects, for example when

### DuplicateObjectResponse
* DuplicateObjectResponse `object`: The response of duplicating an object.
  * objectId `string`: The ID of the new duplicate object.

### Group
* Group `object`: A PageElement kind representing a
  * children `array`: The collection of elements in the group. The minimum size of a group is 2.
    * items [PageElement](#pageelement)

### GroupObjectsRequest
* GroupObjectsRequest `object`: Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
  * childrenObjectIds `array`: The object IDs of the objects to group.
    * items `string`
  * groupObjectId `string`: A user-supplied object ID for the group to be created.

### GroupObjectsResponse
* GroupObjectsResponse `object`: The result of grouping objects.
  * objectId `string`: The object ID of the created group.

### Image
* Image `object`: A PageElement kind representing an
  * contentUrl `string`: An URL to an image with a default lifetime of 30 minutes.
  * imageProperties [ImageProperties](#imageproperties)

### ImageProperties
* ImageProperties `object`: The properties of the Image.
  * brightness `number`: The brightness effect of the image. The value should be in the interval
  * contrast `number`: The contrast effect of the image. The value should be in the interval
  * cropProperties [CropProperties](#cropproperties)
  * link [Link](#link)
  * outline [Outline](#outline)
  * recolor [Recolor](#recolor)
  * shadow [Shadow](#shadow)
  * transparency `number`: The transparency effect of the image. The value should be in the interval

### InsertTableColumnsRequest
* InsertTableColumnsRequest `object`: Inserts columns into a table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertRight `boolean`: Whether to insert new columns to the right of the reference cell location.
  * number `integer`: The number of columns to be inserted. Maximum 20 per request.
  * tableObjectId `string`: The table to insert columns into.

### InsertTableRowsRequest
* InsertTableRowsRequest `object`: Inserts rows into a table.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertBelow `boolean`: Whether to insert new rows below the reference cell location.
  * number `integer`: The number of rows to be inserted. Maximum 20 per request.
  * tableObjectId `string`: The table to insert rows into.

### InsertTextRequest
* InsertTextRequest `object`: Inserts text into a shape or a table cell.
  * cellLocation [TableCellLocation](#tablecelllocation)
  * insertionIndex `integer`: The index where the text will be inserted, in Unicode code units, based
  * objectId `string`: The object ID of the shape or table where the text will be inserted.
  * text `string`: The text to be inserted.

### LayoutPlaceholderIdMapping
* LayoutPlaceholderIdMapping `object`: The user-specified ID mapping for a placeholder that will be created on a
  * layoutPlaceholder [Placeholder](#placeholder)
  * layoutPlaceholderObjectId `string`: The object ID of the placeholder on a layout that will be applied
  * objectId `string`: A user-supplied object ID for the placeholder identified above that to be

### LayoutProperties
* LayoutProperties `object`: The properties of Page are only
  * displayName `string`: The human-readable name of the layout.
  * masterObjectId `string`: The object ID of the master that this layout is based on.
  * name `string`: The name of the layout.

### LayoutReference
* LayoutReference `object`: Slide layout reference. This may reference either:
  * layoutId `string`: Layout ID: the object ID of one of the layouts in the presentation.
  * predefinedLayout `string` (values: PREDEFINED_LAYOUT_UNSPECIFIED, BLANK, CAPTION_ONLY, TITLE, TITLE_AND_BODY, TITLE_AND_TWO_COLUMNS, TITLE_ONLY, SECTION_HEADER, SECTION_TITLE_AND_DESCRIPTION, ONE_COLUMN_TEXT, MAIN_POINT, BIG_NUMBER): Predefined layout.

### Line
* Line `object`: A PageElement kind representing a
  * lineProperties [LineProperties](#lineproperties)
  * lineType `string` (values: TYPE_UNSPECIFIED, STRAIGHT_CONNECTOR_1, BENT_CONNECTOR_2, BENT_CONNECTOR_3, BENT_CONNECTOR_4, BENT_CONNECTOR_5, CURVED_CONNECTOR_2, CURVED_CONNECTOR_3, CURVED_CONNECTOR_4, CURVED_CONNECTOR_5): The type of the line.

### LineFill
* LineFill `object`: The fill of the line.
  * solidFill [SolidFill](#solidfill)

### LineProperties
* LineProperties `object`: The properties of the Line.
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the line.
  * endArrow `string` (values: ARROW_STYLE_UNSPECIFIED, NONE, STEALTH_ARROW, FILL_ARROW, FILL_CIRCLE, FILL_SQUARE, FILL_DIAMOND, OPEN_ARROW, OPEN_CIRCLE, OPEN_SQUARE, OPEN_DIAMOND): The style of the arrow at the end of the line.
  * lineFill [LineFill](#linefill)
  * link [Link](#link)
  * startArrow `string` (values: ARROW_STYLE_UNSPECIFIED, NONE, STEALTH_ARROW, FILL_ARROW, FILL_CIRCLE, FILL_SQUARE, FILL_DIAMOND, OPEN_ARROW, OPEN_CIRCLE, OPEN_SQUARE, OPEN_DIAMOND): The style of the arrow at the beginning of the line.
  * weight [Dimension](#dimension)

### Link
* Link `object`: A hypertext link.
  * pageObjectId `string`: If set, indicates this is a link to the specific page in this
  * relativeLink `string` (values: RELATIVE_SLIDE_LINK_UNSPECIFIED, NEXT_SLIDE, PREVIOUS_SLIDE, FIRST_SLIDE, LAST_SLIDE): If set, indicates this is a link to a slide in this presentation,
  * slideIndex `integer`: If set, indicates this is a link to the slide at this zero-based index
  * url `string`: If set, indicates this is a link to the external web page at this URL.

### List
* List `object`: A List describes the look and feel of bullets belonging to paragraphs
  * listId `string`: The ID of the list.
  * nestingLevel `object`: A map of nesting levels to the properties of bullets at the associated

### MasterProperties
* MasterProperties `object`: The properties of Page that are only
  * displayName `string`: The human-readable name of the master.

### MergeTableCellsRequest
* MergeTableCellsRequest `object`: Merges cells in a Table.
  * objectId `string`: The object ID of the table.
  * tableRange [TableRange](#tablerange)

### NestingLevel
* NestingLevel `object`: Contains properties describing the look and feel of a list bullet at a given
  * bulletStyle [TextStyle](#textstyle)

### NotesProperties
* NotesProperties `object`: The properties of Page that are only
  * speakerNotesObjectId `string`: The object ID of the shape on this notes page that contains the speaker

### OpaqueColor
* OpaqueColor `object`: A themeable solid color value.
  * rgbColor [RgbColor](#rgbcolor)
  * themeColor `string` (values: THEME_COLOR_TYPE_UNSPECIFIED, DARK1, LIGHT1, DARK2, LIGHT2, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK, FOLLOWED_HYPERLINK, TEXT1, BACKGROUND1, TEXT2, BACKGROUND2): An opaque theme color.

### OptionalColor
* OptionalColor `object`: A color that can either be fully opaque or fully transparent.
  * opaqueColor [OpaqueColor](#opaquecolor)

### Outline
* Outline `object`: The outline of a PageElement.
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the outline.
  * outlineFill [OutlineFill](#outlinefill)
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The outline property state.
  * weight [Dimension](#dimension)

### OutlineFill
* OutlineFill `object`: The fill of the outline.
  * solidFill [SolidFill](#solidfill)

### Page
* Page `object`: A page in a presentation.
  * layoutProperties [LayoutProperties](#layoutproperties)
  * masterProperties [MasterProperties](#masterproperties)
  * notesProperties [NotesProperties](#notesproperties)
  * objectId `string`: The object ID for this page. Object IDs used by
  * pageElements `array`: The page elements rendered on the page.
    * items [PageElement](#pageelement)
  * pageProperties [PageProperties](#pageproperties)
  * pageType `string` (values: SLIDE, MASTER, LAYOUT, NOTES, NOTES_MASTER): The type of the page.
  * revisionId `string`: The revision ID of the presentation containing this page. Can be used in
  * slideProperties [SlideProperties](#slideproperties)

### PageBackgroundFill
* PageBackgroundFill `object`: The page background fill.
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state.
  * solidFill [SolidFill](#solidfill)
  * stretchedPictureFill [StretchedPictureFill](#stretchedpicturefill)

### PageElement
* PageElement `object`: A visual element rendered on a page.
  * description `string`: The description of the page element. Combined with title to display alt
  * elementGroup [Group](#group)
  * image [Image](#image)
  * line [Line](#line)
  * objectId `string`: The object ID for this page element. Object IDs used by
  * shape [Shape](#shape)
  * sheetsChart [SheetsChart](#sheetschart)
  * size [Size](#size)
  * table [Table](#table)
  * title `string`: The title of the page element. Combined with description to display alt
  * transform [AffineTransform](#affinetransform)
  * video [Video](#video)
  * wordArt [WordArt](#wordart)

### PageElementProperties
* PageElementProperties `object`: Common properties for a page element.
  * pageObjectId `string`: The object ID of the page where the element is located.
  * size [Size](#size)
  * transform [AffineTransform](#affinetransform)

### PageProperties
* PageProperties `object`: The properties of the Page.
  * colorScheme [ColorScheme](#colorscheme)
  * pageBackgroundFill [PageBackgroundFill](#pagebackgroundfill)

### ParagraphMarker
* ParagraphMarker `object`: A TextElement kind that represents the beginning of a new paragraph.
  * bullet [Bullet](#bullet)
  * style [ParagraphStyle](#paragraphstyle)

### ParagraphStyle
* ParagraphStyle `object`: Styles that apply to a whole paragraph.
  * alignment `string` (values: ALIGNMENT_UNSPECIFIED, START, CENTER, END, JUSTIFIED): The text alignment for this paragraph.
  * direction `string` (values: TEXT_DIRECTION_UNSPECIFIED, LEFT_TO_RIGHT, RIGHT_TO_LEFT): The text direction of this paragraph. If unset, the value defaults to
  * indentEnd [Dimension](#dimension)
  * indentFirstLine [Dimension](#dimension)
  * indentStart [Dimension](#dimension)
  * lineSpacing `number`: The amount of space between lines, as a percentage of normal, where normal
  * spaceAbove [Dimension](#dimension)
  * spaceBelow [Dimension](#dimension)
  * spacingMode `string` (values: SPACING_MODE_UNSPECIFIED, NEVER_COLLAPSE, COLLAPSE_LISTS): The spacing mode for the paragraph.

### Placeholder
* Placeholder `object`: The placeholder information that uniquely identifies a placeholder shape.
  * index `integer`: The index of the placeholder. If the same placeholder types are present in
  * parentObjectId `string`: The object ID of this shape's parent placeholder.
  * type `string` (values: NONE, BODY, CHART, CLIP_ART, CENTERED_TITLE, DIAGRAM, DATE_AND_TIME, FOOTER, HEADER, MEDIA, OBJECT, PICTURE, SLIDE_NUMBER, SUBTITLE, TABLE, TITLE, SLIDE_IMAGE): The type of the placeholder.

### Presentation
* Presentation `object`: A Google Slides presentation.
  * layouts `array`: The layouts in the presentation. A layout is a template that determines
    * items [Page](#page)
  * locale `string`: The locale of the presentation, as an IETF BCP 47 language tag.
  * masters `array`: The slide masters in the presentation. A slide master contains all common
    * items [Page](#page)
  * notesMaster [Page](#page)
  * pageSize [Size](#size)
  * presentationId `string`: The ID of the presentation.
  * revisionId `string`: The revision ID of the presentation. Can be used in update requests
  * slides `array`: The slides in the presentation.
    * items [Page](#page)
  * title `string`: The title of the presentation.

### Range
* Range `object`: Specifies a contiguous range of an indexed collection, such as characters in
  * endIndex `integer`: The optional zero-based index of the end of the collection.
  * startIndex `integer`: The optional zero-based index of the beginning of the collection.
  * type `string` (values: RANGE_TYPE_UNSPECIFIED, FIXED_RANGE, FROM_START_INDEX, ALL): The type of range.

### Recolor
* Recolor `object`: A recolor effect applied on an image.
  * name `string` (values: NONE, LIGHT1, LIGHT2, LIGHT3, LIGHT4, LIGHT5, LIGHT6, LIGHT7, LIGHT8, LIGHT9, LIGHT10, DARK1, DARK2, DARK3, DARK4, DARK5, DARK6, DARK7, DARK8, DARK9, DARK10, GRAYSCALE, NEGATIVE, SEPIA, CUSTOM): The name of the recolor effect.
  * recolorStops `array`: The recolor effect is represented by a gradient, which is a list of color
    * items [ColorStop](#colorstop)

### RefreshSheetsChartRequest
* RefreshSheetsChartRequest `object`: Refreshes an embedded Google Sheets chart by replacing it with the latest
  * objectId `string`: The object ID of the chart to refresh.

### ReplaceAllShapesWithImageRequest
* ReplaceAllShapesWithImageRequest `object`: Replaces all shapes that match the given criteria with the provided image.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * imageReplaceMethod `string` (values: IMAGE_REPLACE_METHOD_UNSPECIFIED, CENTER_INSIDE, CENTER_CROP): The image replace method.
  * imageUrl `string`: The image URL.
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages.
    * items `string`
  * replaceMethod `string` (values: CENTER_INSIDE, CENTER_CROP): The replace method.

### ReplaceAllShapesWithImageResponse
* ReplaceAllShapesWithImageResponse `object`: The result of replacing shapes with an image.
  * occurrencesChanged `integer`: The number of shapes replaced with images.

### ReplaceAllShapesWithSheetsChartRequest
* ReplaceAllShapesWithSheetsChartRequest `object`: Replaces all shapes that match the given criteria with the provided Google
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * linkingMode `string` (values: NOT_LINKED_IMAGE, LINKED): The mode with which the chart is linked to the source spreadsheet. When
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages.
    * items `string`
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the chart.

### ReplaceAllShapesWithSheetsChartResponse
* ReplaceAllShapesWithSheetsChartResponse `object`: The result of replacing shapes with a Google Sheets chart.
  * occurrencesChanged `integer`: The number of shapes replaced with charts.

### ReplaceAllTextRequest
* ReplaceAllTextRequest `object`: Replaces all instances of text matching a criteria with replace text.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * pageObjectIds `array`: If non-empty, limits the matches to page elements only on the given pages.
    * items `string`
  * replaceText `string`: The text that will replace the matched text.

### ReplaceAllTextResponse
* ReplaceAllTextResponse `object`: The result of replacing text.
  * occurrencesChanged `integer`: The number of occurrences changed by replacing all text.

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
  * ungroupObjects [UngroupObjectsRequest](#ungroupobjectsrequest)
  * unmergeTableCells [UnmergeTableCellsRequest](#unmergetablecellsrequest)
  * updateImageProperties [UpdateImagePropertiesRequest](#updateimagepropertiesrequest)
  * updateLineProperties [UpdateLinePropertiesRequest](#updatelinepropertiesrequest)
  * updatePageElementAltText [UpdatePageElementAltTextRequest](#updatepageelementalttextrequest)
  * updatePageElementTransform [UpdatePageElementTransformRequest](#updatepageelementtransformrequest)
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
* Shadow `object`: The shadow properties of a page element.
  * alignment `string` (values: RECTANGLE_POSITION_UNSPECIFIED, TOP_LEFT, TOP_CENTER, TOP_RIGHT, LEFT_CENTER, CENTER, RIGHT_CENTER, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT): The alignment point of the shadow, that sets the origin for translate,
  * alpha `number`: The alpha of the shadow's color, from 0.0 to 1.0.
  * blurRadius [Dimension](#dimension)
  * color [OpaqueColor](#opaquecolor)
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The shadow property state.
  * rotateWithShape `boolean`: Whether the shadow should rotate with the shape.
  * transform [AffineTransform](#affinetransform)
  * type `string` (values: SHADOW_TYPE_UNSPECIFIED, OUTER): The type of the shadow.

### Shape
* Shape `object`: A PageElement kind representing a
  * placeholder [Placeholder](#placeholder)
  * shapeProperties [ShapeProperties](#shapeproperties)
  * shapeType `string` (values: TYPE_UNSPECIFIED, TEXT_BOX, RECTANGLE, ROUND_RECTANGLE, ELLIPSE, ARC, BENT_ARROW, BENT_UP_ARROW, BEVEL, BLOCK_ARC, BRACE_PAIR, BRACKET_PAIR, CAN, CHEVRON, CHORD, CLOUD, CORNER, CUBE, CURVED_DOWN_ARROW, CURVED_LEFT_ARROW, CURVED_RIGHT_ARROW, CURVED_UP_ARROW, DECAGON, DIAGONAL_STRIPE, DIAMOND, DODECAGON, DONUT, DOUBLE_WAVE, DOWN_ARROW, DOWN_ARROW_CALLOUT, FOLDED_CORNER, FRAME, HALF_FRAME, HEART, HEPTAGON, HEXAGON, HOME_PLATE, HORIZONTAL_SCROLL, IRREGULAR_SEAL_1, IRREGULAR_SEAL_2, LEFT_ARROW, LEFT_ARROW_CALLOUT, LEFT_BRACE, LEFT_BRACKET, LEFT_RIGHT_ARROW, LEFT_RIGHT_ARROW_CALLOUT, LEFT_RIGHT_UP_ARROW, LEFT_UP_ARROW, LIGHTNING_BOLT, MATH_DIVIDE, MATH_EQUAL, MATH_MINUS, MATH_MULTIPLY, MATH_NOT_EQUAL, MATH_PLUS, MOON, NO_SMOKING, NOTCHED_RIGHT_ARROW, OCTAGON, PARALLELOGRAM, PENTAGON, PIE, PLAQUE, PLUS, QUAD_ARROW, QUAD_ARROW_CALLOUT, RIBBON, RIBBON_2, RIGHT_ARROW, RIGHT_ARROW_CALLOUT, RIGHT_BRACE, RIGHT_BRACKET, ROUND_1_RECTANGLE, ROUND_2_DIAGONAL_RECTANGLE, ROUND_2_SAME_RECTANGLE, RIGHT_TRIANGLE, SMILEY_FACE, SNIP_1_RECTANGLE, SNIP_2_DIAGONAL_RECTANGLE, SNIP_2_SAME_RECTANGLE, SNIP_ROUND_RECTANGLE, STAR_10, STAR_12, STAR_16, STAR_24, STAR_32, STAR_4, STAR_5, STAR_6, STAR_7, STAR_8, STRIPED_RIGHT_ARROW, SUN, TRAPEZOID, TRIANGLE, UP_ARROW, UP_ARROW_CALLOUT, UP_DOWN_ARROW, UTURN_ARROW, VERTICAL_SCROLL, WAVE, WEDGE_ELLIPSE_CALLOUT, WEDGE_RECTANGLE_CALLOUT, WEDGE_ROUND_RECTANGLE_CALLOUT, FLOW_CHART_ALTERNATE_PROCESS, FLOW_CHART_COLLATE, FLOW_CHART_CONNECTOR, FLOW_CHART_DECISION, FLOW_CHART_DELAY, FLOW_CHART_DISPLAY, FLOW_CHART_DOCUMENT, FLOW_CHART_EXTRACT, FLOW_CHART_INPUT_OUTPUT, FLOW_CHART_INTERNAL_STORAGE, FLOW_CHART_MAGNETIC_DISK, FLOW_CHART_MAGNETIC_DRUM, FLOW_CHART_MAGNETIC_TAPE, FLOW_CHART_MANUAL_INPUT, FLOW_CHART_MANUAL_OPERATION, FLOW_CHART_MERGE, FLOW_CHART_MULTIDOCUMENT, FLOW_CHART_OFFLINE_STORAGE, FLOW_CHART_OFFPAGE_CONNECTOR, FLOW_CHART_ONLINE_STORAGE, FLOW_CHART_OR, FLOW_CHART_PREDEFINED_PROCESS, FLOW_CHART_PREPARATION, FLOW_CHART_PROCESS, FLOW_CHART_PUNCHED_CARD, FLOW_CHART_PUNCHED_TAPE, FLOW_CHART_SORT, FLOW_CHART_SUMMING_JUNCTION, FLOW_CHART_TERMINATOR, ARROW_EAST, ARROW_NORTH_EAST, ARROW_NORTH, SPEECH, STARBURST, TEARDROP, ELLIPSE_RIBBON, ELLIPSE_RIBBON_2, CLOUD_CALLOUT, CUSTOM): The type of the shape.
  * text [TextContent](#textcontent)

### ShapeBackgroundFill
* ShapeBackgroundFill `object`: The shape background fill.
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state.
  * solidFill [SolidFill](#solidfill)

### ShapeProperties
* ShapeProperties `object`: The properties of a Shape.
  * contentAlignment `string` (values: CONTENT_ALIGNMENT_UNSPECIFIED, CONTENT_ALIGNMENT_UNSUPPORTED, TOP, MIDDLE, BOTTOM): The alignment of the content in the shape. If unspecified,
  * link [Link](#link)
  * outline [Outline](#outline)
  * shadow [Shadow](#shadow)
  * shapeBackgroundFill [ShapeBackgroundFill](#shapebackgroundfill)

### SheetsChart
* SheetsChart `object`: A PageElement kind representing
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet that is
  * contentUrl `string`: The URL of an image of the embedded chart, with a default lifetime of 30
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
* SlideProperties `object`: The properties of Page that are only
  * layoutObjectId `string`: The object ID of the layout that this slide is based on.
  * masterObjectId `string`: The object ID of the master that this slide is based on.
  * notesPage [Page](#page)

### SolidFill
* SolidFill `object`: A solid color fill. The page or page element is filled entirely with the
  * alpha `number`: The fraction of this `color` that should be applied to the pixel.
  * color [OpaqueColor](#opaquecolor)

### StretchedPictureFill
* StretchedPictureFill `object`: The stretched picture fill. The page or page element is filled entirely with
  * contentUrl `string`: Reading the content_url:
  * size [Size](#size)

### SubstringMatchCriteria
* SubstringMatchCriteria `object`: A criteria that matches a specific string of text in a shape or table.
  * matchCase `boolean`: Indicates whether the search should respect case:
  * text `string`: The text to search for in the shape or table.

### Table
* Table `object`: A PageElement kind representing a
  * columns `integer`: Number of columns in the table.
  * horizontalBorderRows `array`: Properties of horizontal cell borders.
    * items [TableBorderRow](#tableborderrow)
  * rows `integer`: Number of rows in the table.
  * tableColumns `array`: Properties of each column.
    * items [TableColumnProperties](#tablecolumnproperties)
  * tableRows `array`: Properties and contents of each row.
    * items [TableRow](#tablerow)
  * verticalBorderRows `array`: Properties of vertical cell borders.
    * items [TableBorderRow](#tableborderrow)

### TableBorderCell
* TableBorderCell `object`: The properties of each border cell.
  * location [TableCellLocation](#tablecelllocation)
  * tableBorderProperties [TableBorderProperties](#tableborderproperties)

### TableBorderFill
* TableBorderFill `object`: The fill of the border.
  * solidFill [SolidFill](#solidfill)

### TableBorderProperties
* TableBorderProperties `object`: The border styling properties of the
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT): The dash style of the border.
  * tableBorderFill [TableBorderFill](#tableborderfill)
  * weight [Dimension](#dimension)

### TableBorderRow
* TableBorderRow `object`: Contents of each border row in a table.
  * tableBorderCells `array`: Properties of each border cell. When a border's adjacent table cells are
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
  * propertyState `string` (values: RENDERED, NOT_RENDERED, INHERIT): The background fill property state.
  * solidFill [SolidFill](#solidfill)

### TableCellLocation
* TableCellLocation `object`: A location of a single table cell within a table.
  * columnIndex `integer`: The 0-based column index.
  * rowIndex `integer`: The 0-based row index.

### TableCellProperties
* TableCellProperties `object`: The properties of the TableCell.
  * contentAlignment `string` (values: CONTENT_ALIGNMENT_UNSPECIFIED, CONTENT_ALIGNMENT_UNSUPPORTED, TOP, MIDDLE, BOTTOM): The alignment of the content in the table cell. The default alignment
  * tableCellBackgroundFill [TableCellBackgroundFill](#tablecellbackgroundfill)

### TableColumnProperties
* TableColumnProperties `object`: Properties of each column in a table.
  * columnWidth [Dimension](#dimension)

### TableRange
* TableRange `object`: A table range represents a reference to a subset of a table.
  * columnSpan `integer`: The column span of the table range.
  * location [TableCellLocation](#tablecelllocation)
  * rowSpan `integer`: The row span of the table range.

### TableRow
* TableRow `object`: Properties and contents of each row in a table.
  * rowHeight [Dimension](#dimension)
  * tableCells `array`: Properties and contents of each cell.
    * items [TableCell](#tablecell)
  * tableRowProperties [TableRowProperties](#tablerowproperties)

### TableRowProperties
* TableRowProperties `object`: Properties of each row in a table.
  * minRowHeight [Dimension](#dimension)

### TextContent
* TextContent `object`: The general text content. The text must reside in a compatible shape (e.g.
  * lists `object`: The bulleted lists contained in this text, keyed by list ID.
  * textElements `array`: The text contents broken down into its component parts, including styling
    * items [TextElement](#textelement)

### TextElement
* TextElement `object`: A TextElement describes the content of a range of indices in the text content
  * autoText [AutoText](#autotext)
  * endIndex `integer`: The zero-based end index of this text element, exclusive, in Unicode code
  * paragraphMarker [ParagraphMarker](#paragraphmarker)
  * startIndex `integer`: The zero-based start index of this text element, in Unicode code units.
  * textRun [TextRun](#textrun)

### TextRun
* TextRun `object`: A TextElement kind that represents a run of text that all has the same
  * content `string`: The text of this run.
  * style [TextStyle](#textstyle)

### TextStyle
* TextStyle `object`: Represents the styling that can be applied to a TextRun.
  * backgroundColor [OptionalColor](#optionalcolor)
  * baselineOffset `string` (values: BASELINE_OFFSET_UNSPECIFIED, NONE, SUPERSCRIPT, SUBSCRIPT): The text's vertical offset from its normal position.
  * bold `boolean`: Whether or not the text is rendered as bold.
  * fontFamily `string`: The font family of the text.
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
  * contentUrl `string`: The content URL of the thumbnail image.
  * height `integer`: The positive height in pixels of the thumbnail image.
  * width `integer`: The positive width in pixels of the thumbnail image.

### UngroupObjectsRequest
* UngroupObjectsRequest `object`: Ungroups objects, such as groups.
  * objectIds `array`: The object IDs of the objects to ungroup.
    * items `string`

### UnmergeTableCellsRequest
* UnmergeTableCellsRequest `object`: Unmerges cells in a Table.
  * objectId `string`: The object ID of the table.
  * tableRange [TableRange](#tablerange)

### UpdateImagePropertiesRequest
* UpdateImagePropertiesRequest `object`: Update the properties of an Image.
  * fields `string`: The fields that should be updated.
  * imageProperties [ImageProperties](#imageproperties)
  * objectId `string`: The object ID of the image the updates are applied to.

### UpdateLinePropertiesRequest
* UpdateLinePropertiesRequest `object`: Updates the properties of a Line.
  * fields `string`: The fields that should be updated.
  * lineProperties [LineProperties](#lineproperties)
  * objectId `string`: The object ID of the line the update is applied to.

### UpdatePageElementAltTextRequest
* UpdatePageElementAltTextRequest `object`: Updates the alt text title and/or description of a
  * description `string`: The updated alt text description of the page element. If unset the existing
  * objectId `string`: The object ID of the page element the updates are applied to.
  * title `string`: The updated alt text title of the page element. If unset the

### UpdatePageElementTransformRequest
* UpdatePageElementTransformRequest `object`: Updates the transform of a page element.
  * applyMode `string` (values: APPLY_MODE_UNSPECIFIED, RELATIVE, ABSOLUTE): The apply mode of the transform update.
  * objectId `string`: The object ID of the page element to update.
  * transform [AffineTransform](#affinetransform)

### UpdatePagePropertiesRequest
* UpdatePagePropertiesRequest `object`: Updates the properties of a Page.
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the page the update is applied to.
  * pageProperties [PageProperties](#pageproperties)

### UpdateParagraphStyleRequest
* UpdateParagraphStyleRequest `object`: Updates the styling for all of the paragraphs within a Shape or Table that
  * cellLocation [TableCellLocation](#tablecelllocation)
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the shape or table with the text to be styled.
  * style [ParagraphStyle](#paragraphstyle)
  * textRange [Range](#range)

### UpdateShapePropertiesRequest
* UpdateShapePropertiesRequest `object`: Update the properties of a Shape.
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the shape the updates are applied to.
  * shapeProperties [ShapeProperties](#shapeproperties)

### UpdateSlidesPositionRequest
* UpdateSlidesPositionRequest `object`: Updates the position of slides in the presentation.
  * insertionIndex `integer`: The index where the slides should be inserted, based on the slide
  * slideObjectIds `array`: The IDs of the slides in the presentation that should be moved.
    * items `string`

### UpdateTableBorderPropertiesRequest
* UpdateTableBorderPropertiesRequest `object`: Updates the properties of the table borders in a Table.
  * borderPosition `string` (values: ALL, BOTTOM, INNER, INNER_HORIZONTAL, INNER_VERTICAL, LEFT, OUTER, RIGHT, TOP): The border position in the table range the updates should apply to. If a
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the table.
  * tableBorderProperties [TableBorderProperties](#tableborderproperties)
  * tableRange [TableRange](#tablerange)

### UpdateTableCellPropertiesRequest
* UpdateTableCellPropertiesRequest `object`: Update the properties of a TableCell.
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the table.
  * tableCellProperties [TableCellProperties](#tablecellproperties)
  * tableRange [TableRange](#tablerange)

### UpdateTableColumnPropertiesRequest
* UpdateTableColumnPropertiesRequest `object`: Updates the properties of a Table column.
  * columnIndices `array`: The list of zero-based indices specifying which columns to update. If no
    * items `integer`
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the table.
  * tableColumnProperties [TableColumnProperties](#tablecolumnproperties)

### UpdateTableRowPropertiesRequest
* UpdateTableRowPropertiesRequest `object`: Updates the properties of a Table row.
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the table.
  * rowIndices `array`: The list of zero-based indices specifying which rows to update. If no
    * items `integer`
  * tableRowProperties [TableRowProperties](#tablerowproperties)

### UpdateTextStyleRequest
* UpdateTextStyleRequest `object`: Update the styling of text in a Shape or
  * cellLocation [TableCellLocation](#tablecelllocation)
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the shape or table with the text to be styled.
  * style [TextStyle](#textstyle)
  * textRange [Range](#range)

### UpdateVideoPropertiesRequest
* UpdateVideoPropertiesRequest `object`: Update the properties of a Video.
  * fields `string`: The fields that should be updated.
  * objectId `string`: The object ID of the video the updates are applied to.
  * videoProperties [VideoProperties](#videoproperties)

### Video
* Video `object`: A PageElement kind representing a
  * id `string`: The video source's unique identifier for this video.
  * source `string` (values: SOURCE_UNSPECIFIED, YOUTUBE): The video source.
  * url `string`: An URL to a video. The URL is valid as long as the source video
  * videoProperties [VideoProperties](#videoproperties)

### VideoProperties
* VideoProperties `object`: The properties of the Video.
  * outline [Outline](#outline)

### WeightedFontFamily
* WeightedFontFamily `object`: Represents a font family and weight used to style a TextRun.
  * fontFamily `string`: The font family of the text.
  * weight `integer`: The rendered weight of the text. This field can have any value that is a

### WordArt
* WordArt `object`: A PageElement kind representing
  * renderedText `string`: The text rendered as word art.

### WriteControl
* WriteControl `object`: Provides control over how write requests are executed.
  * requiredRevisionId `string`: The revision ID of the presentation required for the write request. If


