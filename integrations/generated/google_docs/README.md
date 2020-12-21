# @datafire/google_docs

Client library for Google Docs API

## Installation and Usage
```bash
npm install --save @datafire/google_docs
```
```js
let google_docs = require('@datafire/google_docs').create({
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

Reads and writes Google Docs documents.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_docs.oauthCallback({
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
google_docs.oauthRefresh(null, context)
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

### docs.documents.create
Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.


```js
google_docs.docs.documents.create({}, context)
```

#### Input
* input `object`
  * body [Document](#document)
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
* output [Document](#document)

### docs.documents.get
Gets the latest version of the specified document.


```js
google_docs.docs.documents.get({
  "documentId": ""
}, context)
```

#### Input
* input `object`
  * documentId **required** `string`: The ID of the document to retrieve.
  * suggestionsViewMode `string` (values: DEFAULT_FOR_CURRENT_ACCESS, SUGGESTIONS_INLINE, PREVIEW_SUGGESTIONS_ACCEPTED, PREVIEW_WITHOUT_SUGGESTIONS): The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.
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
* output [Document](#document)

### docs.documents.batchUpdate
Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.


```js
google_docs.docs.documents.batchUpdate({
  "documentId": ""
}, context)
```

#### Input
* input `object`
  * documentId **required** `string`: The ID of the document to update.
  * body [BatchUpdateDocumentRequest](#batchupdatedocumentrequest)
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
* output [BatchUpdateDocumentResponse](#batchupdatedocumentresponse)



## Definitions

### AutoText
* AutoText `object`: A ParagraphElement representing a spot in the text that is dynamically replaced with content that can change over time, like a page number.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. An AutoText may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this AutoText, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)
  * type `string` (values: TYPE_UNSPECIFIED, PAGE_NUMBER, PAGE_COUNT): The type of this auto text.

### Background
* Background `object`: Represents the background of a document.
  * color [OptionalColor](#optionalcolor)

### BackgroundSuggestionState
* BackgroundSuggestionState `object`: A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
  * backgroundColorSuggested `boolean`: Indicates whether the current background color has been modified in this suggestion.

### BatchUpdateDocumentRequest
* BatchUpdateDocumentRequest `object`: Request message for BatchUpdateDocument.
  * requests `array`: A list of updates to apply to the document.
    * items [Request](#request)
  * writeControl [WriteControl](#writecontrol)

### BatchUpdateDocumentResponse
* BatchUpdateDocumentResponse `object`: Response message from a BatchUpdateDocument request.
  * documentId `string`: The ID of the document to which the updates were applied to.
  * replies `array`: The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
    * items [Response](#response)
  * writeControl [WriteControl](#writecontrol)

### Body
* Body `object`: The document body. The body typically contains the full document contents except for headers, footers and footnotes.
  * content `array`: The contents of the body. The indexes for the body's content begin at zero.
    * items [StructuralElement](#structuralelement)

### Bullet
* Bullet `object`: Describes the bullet of a paragraph.
  * listId `string`: The ID of the list this paragraph belongs to.
  * nestingLevel `integer`: The nesting level of this paragraph in the list.
  * textStyle [TextStyle](#textstyle)

### BulletSuggestionState
* BulletSuggestionState `object`: A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * listIdSuggested `boolean`: Indicates if there was a suggested change to the list_id.
  * nestingLevelSuggested `boolean`: Indicates if there was a suggested change to the nesting_level.
  * textStyleSuggestionState [TextStyleSuggestionState](#textstylesuggestionstate)

### Color
* Color `object`: A solid color.
  * rgbColor [RgbColor](#rgbcolor)

### ColumnBreak
* ColumnBreak `object`: A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this ColumnBreak, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### CreateFooterRequest
* CreateFooterRequest `object`: Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specificed, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
  * sectionBreakLocation [Location](#location)
  * type `string` (values: HEADER_FOOTER_TYPE_UNSPECIFIED, DEFAULT): The type of footer to create.

### CreateFooterResponse
* CreateFooterResponse `object`: The result of creating a footer.
  * footerId `string`: The ID of the created footer.

### CreateFootnoteRequest
* CreateFootnoteRequest `object`: Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)

### CreateFootnoteResponse
* CreateFootnoteResponse `object`: The result of creating a footnote.
  * footnoteId `string`: The ID of the created footnote.

### CreateHeaderRequest
* CreateHeaderRequest `object`: Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specificed, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
  * sectionBreakLocation [Location](#location)
  * type `string` (values: HEADER_FOOTER_TYPE_UNSPECIFIED, DEFAULT): The type of header to create.

### CreateHeaderResponse
* CreateHeaderResponse `object`: The result of creating a header.
  * headerId `string`: The ID of the created header.

### CreateNamedRangeRequest
* CreateNamedRangeRequest `object`: Creates a NamedRange referencing the given range.
  * name `string`: The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units.
  * range [Range](#range)

### CreateNamedRangeResponse
* CreateNamedRangeResponse `object`: The result of creating a named range.
  * namedRangeId `string`: The ID of the created named range.

### CreateParagraphBulletsRequest
* CreateParagraphBulletsRequest `object`: Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
  * bulletPreset `string` (values: BULLET_GLYPH_PRESET_UNSPECIFIED, BULLET_DISC_CIRCLE_SQUARE, BULLET_DIAMONDX_ARROW3D_SQUARE, BULLET_CHECKBOX, BULLET_ARROW_DIAMOND_DISC, BULLET_STAR_CIRCLE_SQUARE, BULLET_ARROW3D_CIRCLE_SQUARE, BULLET_LEFTTRIANGLE_DIAMOND_DISC, BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE, BULLET_DIAMOND_CIRCLE_SQUARE, NUMBERED_DECIMAL_ALPHA_ROMAN, NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS, NUMBERED_DECIMAL_NESTED, NUMBERED_UPPERALPHA_ALPHA_ROMAN, NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL, NUMBERED_ZERODECIMAL_ALPHA_ROMAN): The kinds of bullet glyphs to be used.
  * range [Range](#range)

### CropProperties
* CropProperties `object`: The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's four edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
  * angle `number`: The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets.
  * offsetBottom `number`: The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content's height.
  * offsetLeft `number`: The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content's width.
  * offsetRight `number`: The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content's width.
  * offsetTop `number`: The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content's height.

### CropPropertiesSuggestionState
* CropPropertiesSuggestionState `object`: A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * angleSuggested `boolean`: Indicates if there was a suggested change to angle.
  * offsetBottomSuggested `boolean`: Indicates if there was a suggested change to offset_bottom.
  * offsetLeftSuggested `boolean`: Indicates if there was a suggested change to offset_left.
  * offsetRightSuggested `boolean`: Indicates if there was a suggested change to offset_right.
  * offsetTopSuggested `boolean`: Indicates if there was a suggested change to offset_top.

### DeleteContentRangeRequest
* DeleteContentRangeRequest `object`: Deletes content from the document.
  * range [Range](#range)

### DeleteFooterRequest
* DeleteFooterRequest `object`: Deletes a Footer from the document.
  * footerId `string`: The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.

### DeleteHeaderRequest
* DeleteHeaderRequest `object`: Deletes a Header from the document.
  * headerId `string`: The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section.

### DeleteNamedRangeRequest
* DeleteNamedRangeRequest `object`: Deletes a NamedRange.
  * name `string`: The name of the range(s) to delete. All named ranges with the given name will be deleted.
  * namedRangeId `string`: The ID of the named range to delete.

### DeleteParagraphBulletsRequest
* DeleteParagraphBulletsRequest `object`: Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
  * range [Range](#range)

### DeletePositionedObjectRequest
* DeletePositionedObjectRequest `object`: Deletes a PositionedObject from the document.
  * objectId `string`: The ID of the positioned object to delete.

### DeleteTableColumnRequest
* DeleteTableColumnRequest `object`: Deletes a column from a table.
  * tableCellLocation [TableCellLocation](#tablecelllocation)

### DeleteTableRowRequest
* DeleteTableRowRequest `object`: Deletes a row from a table.
  * tableCellLocation [TableCellLocation](#tablecelllocation)

### Dimension
* Dimension `object`: A magnitude in a single direction in the specified units.
  * magnitude `number`: The magnitude.
  * unit `string` (values: UNIT_UNSPECIFIED, PT): The units for magnitude.

### Document
* Document `object`: A Google Docs document.
  * body [Body](#body)
  * documentId `string`: Output only. The ID of the document.
  * documentStyle [DocumentStyle](#documentstyle)
  * footers `object`: Output only. The footers in the document, keyed by footer ID.
  * footnotes `object`: Output only. The footnotes in the document, keyed by footnote ID.
  * headers `object`: Output only. The headers in the document, keyed by header ID.
  * inlineObjects `object`: Output only. The inline objects in the document, keyed by object ID.
  * lists `object`: Output only. The lists in the document, keyed by list ID.
  * namedRanges `object`: Output only. The named ranges in the document, keyed by name.
  * namedStyles [NamedStyles](#namedstyles)
  * positionedObjects `object`: Output only. The positioned objects in the document, keyed by object ID.
  * revisionId `string`: Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated; however, a changed ID can also be due to internal factors such as ID format changes.
  * suggestedDocumentStyleChanges `object`: Output only. The suggested changes to the style of the document, keyed by suggestion ID.
  * suggestedNamedStylesChanges `object`: Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.
  * suggestionsViewMode `string` (values: DEFAULT_FOR_CURRENT_ACCESS, SUGGESTIONS_INLINE, PREVIEW_SUGGESTIONS_ACCEPTED, PREVIEW_WITHOUT_SUGGESTIONS): Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.
  * title `string`: The title of the document.

### DocumentStyle
* DocumentStyle `object`: The style of the document.
  * background [Background](#background)
  * defaultFooterId `string`: The ID of the default footer. If not set, there is no default footer. This property is read-only.
  * defaultHeaderId `string`: The ID of the default header. If not set, there is no default header. This property is read-only.
  * evenPageFooterId `string`: The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there is no even page footer. This property is read-only.
  * evenPageHeaderId `string`: The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there is no even page header. This property is read-only.
  * firstPageFooterId `string`: The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there is no first page footer. This property is read-only.
  * firstPageHeaderId `string`: The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there is no first page header. This property is read-only.
  * marginBottom [Dimension](#dimension)
  * marginFooter [Dimension](#dimension)
  * marginHeader [Dimension](#dimension)
  * marginLeft [Dimension](#dimension)
  * marginRight [Dimension](#dimension)
  * marginTop [Dimension](#dimension)
  * pageNumberStart `integer`: The page number from which to start counting the number of pages.
  * pageSize [Size](#size)
  * useCustomHeaderFooterMargins `boolean`: Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin are used. This property is read-only.
  * useEvenPageHeaderFooter `boolean`: Indicates whether to use the even page header / footer IDs for the even pages.
  * useFirstPageHeaderFooter `boolean`: Indicates whether to use the first page header / footer IDs for the first page.

### DocumentStyleSuggestionState
* DocumentStyleSuggestionState `object`: A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * backgroundSuggestionState [BackgroundSuggestionState](#backgroundsuggestionstate)
  * defaultFooterIdSuggested `boolean`: Indicates if there was a suggested change to default_footer_id.
  * defaultHeaderIdSuggested `boolean`: Indicates if there was a suggested change to default_header_id.
  * evenPageFooterIdSuggested `boolean`: Indicates if there was a suggested change to even_page_footer_id.
  * evenPageHeaderIdSuggested `boolean`: Indicates if there was a suggested change to even_page_header_id.
  * firstPageFooterIdSuggested `boolean`: Indicates if there was a suggested change to first_page_footer_id.
  * firstPageHeaderIdSuggested `boolean`: Indicates if there was a suggested change to first_page_header_id.
  * marginBottomSuggested `boolean`: Indicates if there was a suggested change to margin_bottom.
  * marginFooterSuggested `boolean`: Indicates if there was a suggested change to margin_footer.
  * marginHeaderSuggested `boolean`: Indicates if there was a suggested change to margin_header.
  * marginLeftSuggested `boolean`: Indicates if there was a suggested change to margin_left.
  * marginRightSuggested `boolean`: Indicates if there was a suggested change to margin_right.
  * marginTopSuggested `boolean`: Indicates if there was a suggested change to margin_top.
  * pageNumberStartSuggested `boolean`: Indicates if there was a suggested change to page_number_start.
  * pageSizeSuggestionState [SizeSuggestionState](#sizesuggestionstate)
  * useCustomHeaderFooterMarginsSuggested `boolean`: Indicates if there was a suggested change to use_custom_header_footer_margins.
  * useEvenPageHeaderFooterSuggested `boolean`: Indicates if there was a suggested change to use_even_page_header_footer.
  * useFirstPageHeaderFooterSuggested `boolean`: Indicates if there was a suggested change to use_first_page_header_footer.

### EmbeddedDrawingProperties
* EmbeddedDrawingProperties `object`: The properties of an embedded drawing.

### EmbeddedDrawingPropertiesSuggestionState
* EmbeddedDrawingPropertiesSuggestionState `object`: A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.

### EmbeddedObject
* EmbeddedObject `object`: An embedded object in the document.
  * description `string`: The description of the embedded object. The `title` and `description` are both combined to display alt text.
  * embeddedDrawingProperties [EmbeddedDrawingProperties](#embeddeddrawingproperties)
  * embeddedObjectBorder [EmbeddedObjectBorder](#embeddedobjectborder)
  * imageProperties [ImageProperties](#imageproperties)
  * linkedContentReference [LinkedContentReference](#linkedcontentreference)
  * marginBottom [Dimension](#dimension)
  * marginLeft [Dimension](#dimension)
  * marginRight [Dimension](#dimension)
  * marginTop [Dimension](#dimension)
  * size [Size](#size)
  * title `string`: The title of the embedded object. The `title` and `description` are both combined to display alt text.

### EmbeddedObjectBorder
* EmbeddedObjectBorder `object`: A border around an EmbeddedObject.
  * color [OptionalColor](#optionalcolor)
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH): The dash style of the border.
  * propertyState `string` (values: RENDERED, NOT_RENDERED): The property state of the border property.
  * width [Dimension](#dimension)

### EmbeddedObjectBorderSuggestionState
* EmbeddedObjectBorderSuggestionState `object`: A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * colorSuggested `boolean`: Indicates if there was a suggested change to color.
  * dashStyleSuggested `boolean`: Indicates if there was a suggested change to dash_style.
  * propertyStateSuggested `boolean`: Indicates if there was a suggested change to property_state.
  * widthSuggested `boolean`: Indicates if there was a suggested change to width.

### EmbeddedObjectSuggestionState
* EmbeddedObjectSuggestionState `object`: A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * descriptionSuggested `boolean`: Indicates if there was a suggested change to description.
  * embeddedDrawingPropertiesSuggestionState [EmbeddedDrawingPropertiesSuggestionState](#embeddeddrawingpropertiessuggestionstate)
  * embeddedObjectBorderSuggestionState [EmbeddedObjectBorderSuggestionState](#embeddedobjectbordersuggestionstate)
  * imagePropertiesSuggestionState [ImagePropertiesSuggestionState](#imagepropertiessuggestionstate)
  * linkedContentReferenceSuggestionState [LinkedContentReferenceSuggestionState](#linkedcontentreferencesuggestionstate)
  * marginBottomSuggested `boolean`: Indicates if there was a suggested change to margin_bottom.
  * marginLeftSuggested `boolean`: Indicates if there was a suggested change to margin_left.
  * marginRightSuggested `boolean`: Indicates if there was a suggested change to margin_right.
  * marginTopSuggested `boolean`: Indicates if there was a suggested change to margin_top.
  * sizeSuggestionState [SizeSuggestionState](#sizesuggestionstate)
  * titleSuggested `boolean`: Indicates if there was a suggested change to title.

### EndOfSegmentLocation
* EndOfSegmentLocation `object`: Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
  * segmentId `string`: The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.

### Equation
* Equation `object`: A ParagraphElement representing an equation.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A Equation may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`

### Footer
* Footer `object`: A document footer.
  * content `array`: The contents of the footer. The indexes for a footer's content begin at zero.
    * items [StructuralElement](#structuralelement)
  * footerId `string`: The ID of the footer.

### Footnote
* Footnote `object`: A document footnote.
  * content `array`: The contents of the footnote. The indexes for a footnote's content begin at zero.
    * items [StructuralElement](#structuralelement)
  * footnoteId `string`: The ID of the footnote.

### FootnoteReference
* FootnoteReference `object`: A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
  * footnoteId `string`: The ID of the footnote that contains the content of this footnote reference.
  * footnoteNumber `string`: The rendered number of this footnote.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this FootnoteReference, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### Header
* Header `object`: A document header.
  * content `array`: The contents of the header. The indexes for a header's content begin at zero.
    * items [StructuralElement](#structuralelement)
  * headerId `string`: The ID of the header.

### HorizontalRule
* HorizontalRule `object`: A ParagraphElement representing a horizontal line.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this HorizontalRule, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### ImageProperties
* ImageProperties `object`: The properties of an image.
  * angle `number`: The clockwise rotation angle of the image, in radians.
  * brightness `number`: The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
  * contentUri `string`: A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.
  * contrast `number`: The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
  * cropProperties [CropProperties](#cropproperties)
  * sourceUri `string`: The source URI is the URI used to insert the image. The source URI can be empty.
  * transparency `number`: The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent.

### ImagePropertiesSuggestionState
* ImagePropertiesSuggestionState `object`: A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * angleSuggested `boolean`: Indicates if there was a suggested change to angle.
  * brightnessSuggested `boolean`: Indicates if there was a suggested change to brightness.
  * contentUriSuggested `boolean`: Indicates if there was a suggested change to content_uri.
  * contrastSuggested `boolean`: Indicates if there was a suggested change to contrast.
  * cropPropertiesSuggestionState [CropPropertiesSuggestionState](#croppropertiessuggestionstate)
  * sourceUriSuggested `boolean`: Indicates if there was a suggested change to source_uri.
  * transparencySuggested `boolean`: Indicates if there was a suggested change to transparency.

### InlineObject
* InlineObject `object`: An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
  * inlineObjectProperties [InlineObjectProperties](#inlineobjectproperties)
  * objectId `string`: The ID of this inline object.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInlineObjectPropertiesChanges `object`: The suggested changes to the inline object properties, keyed by suggestion ID.
  * suggestedInsertionId `string`: The suggested insertion ID. If empty, then this is not a suggested insertion.

### InlineObjectElement
* InlineObjectElement `object`: A ParagraphElement that contains an InlineObject.
  * inlineObjectId `string`: The ID of the InlineObject this element contains.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this InlineObject, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### InlineObjectProperties
* InlineObjectProperties `object`: Properties of an InlineObject.
  * embeddedObject [EmbeddedObject](#embeddedobject)

### InlineObjectPropertiesSuggestionState
* InlineObjectPropertiesSuggestionState `object`: A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * embeddedObjectSuggestionState [EmbeddedObjectSuggestionState](#embeddedobjectsuggestionstate)

### InsertInlineImageRequest
* InsertInlineImageRequest `object`: Inserts an InlineObject containing an image at the given location.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)
  * objectSize [Size](#size)
  * uri `string`: The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI can be at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.

### InsertInlineImageResponse
* InsertInlineImageResponse `object`: The result of inserting an inline image.
  * objectId `string`: The ID of the created InlineObject.

### InsertInlineSheetsChartResponse
* InsertInlineSheetsChartResponse `object`: The result of inserting an embedded Google Sheets chart.
  * objectId `string`: The object ID of the inserted chart.

### InsertPageBreakRequest
* InsertPageBreakRequest `object`: Inserts a page break followed by a newline at the specified location.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)

### InsertSectionBreakRequest
* InsertSectionBreakRequest `object`: Inserts a section break at the given location. A newline character will be inserted before the section break.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, CONTINUOUS, NEXT_PAGE): The type of section to insert.

### InsertTableColumnRequest
* InsertTableColumnRequest `object`: Inserts an empty column into a table.
  * insertRight `boolean`: Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.
  * tableCellLocation [TableCellLocation](#tablecelllocation)

### InsertTableRequest
* InsertTableRequest `object`: Inserts a table at the specified location. A newline character will be inserted before the inserted table.
  * columns `integer`: The number of columns in the table.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)
  * rows `integer`: The number of rows in the table.

### InsertTableRowRequest
* InsertTableRowRequest `object`: Inserts an empty row into a table.
  * insertBelow `boolean`: Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.
  * tableCellLocation [TableCellLocation](#tablecelllocation)

### InsertTextRequest
* InsertTextRequest `object`: Inserts text at the specified location.
  * endOfSegmentLocation [EndOfSegmentLocation](#endofsegmentlocation)
  * location [Location](#location)
  * text `string`: The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.

### Link
* Link `object`: A reference to another portion of a document or an external URL resource.
  * bookmarkId `string`: The ID of a bookmark in this document.
  * headingId `string`: The ID of a heading in this document.
  * url `string`: An external URL.

### LinkedContentReference
* LinkedContentReference `object`: A reference to the external linked source content.
  * sheetsChartReference [SheetsChartReference](#sheetschartreference)

### LinkedContentReferenceSuggestionState
* LinkedContentReferenceSuggestionState `object`: A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * sheetsChartReferenceSuggestionState [SheetsChartReferenceSuggestionState](#sheetschartreferencesuggestionstate)

### List
* List `object`: A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that is part of a list has a reference to the list's ID in its bullet.
  * listProperties [ListProperties](#listproperties)
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this list.
    * items `string`
  * suggestedInsertionId `string`: The suggested insertion ID. If empty, then this is not a suggested insertion.
  * suggestedListPropertiesChanges `object`: The suggested changes to the list properties, keyed by suggestion ID.

### ListProperties
* ListProperties `object`: The properties of a list which describe the look and feel of bullets belonging to paragraphs associated with a list.
  * nestingLevels `array`: Describes the properties of the bullets at the associated level. A list has at most nine levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first.
    * items [NestingLevel](#nestinglevel)

### ListPropertiesSuggestionState
* ListPropertiesSuggestionState `object`: A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * nestingLevelsSuggestionStates `array`: A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first.
    * items [NestingLevelSuggestionState](#nestinglevelsuggestionstate)

### Location
* Location `object`: A particular location in the document.
  * index `integer`: The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
  * segmentId `string`: The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.

### MergeTableCellsRequest
* MergeTableCellsRequest `object`: Merges cells in a Table.
  * tableRange [TableRange](#tablerange)

### NamedRange
* NamedRange `object`: A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited at a later time. A document can contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a single Range, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.
  * name `string`: The name of the named range.
  * namedRangeId `string`: The ID of the named range.
  * ranges `array`: The ranges that belong to this named range.
    * items [Range](#range)

### NamedRanges
* NamedRanges `object`: A collection of all the NamedRanges in the document that share a given name.
  * name `string`: The name that all the named ranges share.
  * namedRanges `array`: The NamedRanges that share the same name.
    * items [NamedRange](#namedrange)

### NamedStyle
* NamedStyle `object`: A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.
  * namedStyleType `string` (values: NAMED_STYLE_TYPE_UNSPECIFIED, NORMAL_TEXT, TITLE, SUBTITLE, HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6): The type of this named style.
  * paragraphStyle [ParagraphStyle](#paragraphstyle)
  * textStyle [TextStyle](#textstyle)

### NamedStyleSuggestionState
* NamedStyleSuggestionState `object`: A suggestion state of a NamedStyle message.
  * namedStyleType `string` (values: NAMED_STYLE_TYPE_UNSPECIFIED, NORMAL_TEXT, TITLE, SUBTITLE, HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6): The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle.
  * paragraphStyleSuggestionState [ParagraphStyleSuggestionState](#paragraphstylesuggestionstate)
  * textStyleSuggestionState [TextStyleSuggestionState](#textstylesuggestionstate)

### NamedStyles
* NamedStyles `object`: The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
  * styles `array`: The named styles. There is an entry for each of the possible named style types.
    * items [NamedStyle](#namedstyle)

### NamedStylesSuggestionState
* NamedStylesSuggestionState `object`: The suggestion state of a NamedStyles message.
  * stylesSuggestionStates `array`: A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states match the order of the corresponding named style within the named styles suggestion.
    * items [NamedStyleSuggestionState](#namedstylesuggestionstate)

### NestingLevel
* NestingLevel `object`: Contains properties describing the look and feel of a list bullet at a given level of nesting.
  * bulletAlignment `string` (values: BULLET_ALIGNMENT_UNSPECIFIED, START, CENTER, END): The alignment of the bullet within the space allotted for rendering the bullet.
  * glyphFormat `string`: The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and these placeholder are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern `%[nesting_level]`. Note that the prefix and suffix are optional and can be arbitrary strings. For example, the glyph format `%0.` indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph format `%0.` at nesting level 0 will result in a list with rendered glyphs `A.` `B.` `C.` The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.` at nesting level 1. Assuming both nesting levels have DECIMAL glyph types, this would result in a list with rendered glyphs `1.` `2.` ` 2.1.` ` 2.2.` `3.` For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph's order within the list.
  * glyphSymbol `string`: A custom glyph symbol used by bullets when paragraphs at this level of nesting are unordered. The glyph symbol replaces placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode U+25cf code point and the glyph_format is `%0`, the rendered glyph would be the solid circle.
  * glyphType `string` (values: GLYPH_TYPE_UNSPECIFIED, NONE, DECIMAL, ZERO_DECIMAL, UPPER_ALPHA, ALPHA, UPPER_ROMAN, ROMAN): The type of glyph used by bullets when paragraphs at this level of nesting are ordered. The glyph type determines the type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered glyph would replace the placeholder `%0` in the glyph format with a number corresponding to list item's order within the list.
  * indentFirstLine [Dimension](#dimension)
  * indentStart [Dimension](#dimension)
  * startNumber `integer`: The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and roman numeraled lists, i.e. for values of both 0 and 1, lettered and roman numeraled lists will begin at `a` and `i` respectively. This value is ignored for nesting levels with unordered glyphs.
  * textStyle [TextStyle](#textstyle)

### NestingLevelSuggestionState
* NestingLevelSuggestionState `object`: A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * bulletAlignmentSuggested `boolean`: Indicates if there was a suggested change to bullet_alignment.
  * glyphFormatSuggested `boolean`: Indicates if there was a suggested change to glyph_format.
  * glyphSymbolSuggested `boolean`: Indicates if there was a suggested change to glyph_symbol.
  * glyphTypeSuggested `boolean`: Indicates if there was a suggested change to glyph_type.
  * indentFirstLineSuggested `boolean`: Indicates if there was a suggested change to indent_first_line.
  * indentStartSuggested `boolean`: Indicates if there was a suggested change to indent_start.
  * startNumberSuggested `boolean`: Indicates if there was a suggested change to start_number.
  * textStyleSuggestionState [TextStyleSuggestionState](#textstylesuggestionstate)

### ObjectReferences
* ObjectReferences `object`: A collection of object IDs.
  * objectIds `array`: The object IDs.
    * items `string`

### OptionalColor
* OptionalColor `object`: A color that can either be fully opaque or fully transparent.
  * color [Color](#color)

### PageBreak
* PageBreak `object`: A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this PageBreak, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### Paragraph
* Paragraph `object`: A StructuralElement representing a paragraph. A paragraph is a range of content that is terminated with a newline character.
  * bullet [Bullet](#bullet)
  * elements `array`: The content of the paragraph broken down into its component parts.
    * items [ParagraphElement](#paragraphelement)
  * paragraphStyle [ParagraphStyle](#paragraphstyle)
  * positionedObjectIds `array`: The IDs of the positioned objects tethered to this paragraph.
    * items `string`
  * suggestedBulletChanges `object`: The suggested changes to this paragraph's bullet.
  * suggestedParagraphStyleChanges `object`: The suggested paragraph style changes to this paragraph, keyed by suggestion ID.
  * suggestedPositionedObjectIds `object`: The IDs of the positioned objects that are suggested to be attached to this paragraph, keyed by suggestion ID.

### ParagraphBorder
* ParagraphBorder `object`: A border around a paragraph.
  * color [OptionalColor](#optionalcolor)
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH): The dash style of the border.
  * padding [Dimension](#dimension)
  * width [Dimension](#dimension)

### ParagraphElement
* ParagraphElement `object`: A ParagraphElement describes content within a Paragraph.
  * autoText [AutoText](#autotext)
  * columnBreak [ColumnBreak](#columnbreak)
  * endIndex `integer`: The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.
  * equation [Equation](#equation)
  * footnoteReference [FootnoteReference](#footnotereference)
  * horizontalRule [HorizontalRule](#horizontalrule)
  * inlineObjectElement [InlineObjectElement](#inlineobjectelement)
  * pageBreak [PageBreak](#pagebreak)
  * startIndex `integer`: The zero-based start index of this paragraph element, in UTF-16 code units.
  * textRun [TextRun](#textrun)

### ParagraphStyle
* ParagraphStyle `object`: Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that is contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
  * alignment `string` (values: ALIGNMENT_UNSPECIFIED, START, CENTER, END, JUSTIFIED): The text alignment for this paragraph.
  * avoidWidowAndOrphan `boolean`: Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.
  * borderBetween [ParagraphBorder](#paragraphborder)
  * borderBottom [ParagraphBorder](#paragraphborder)
  * borderLeft [ParagraphBorder](#paragraphborder)
  * borderRight [ParagraphBorder](#paragraphborder)
  * borderTop [ParagraphBorder](#paragraphborder)
  * direction `string` (values: CONTENT_DIRECTION_UNSPECIFIED, LEFT_TO_RIGHT, RIGHT_TO_LEFT): The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited.
  * headingId `string`: The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only.
  * indentEnd [Dimension](#dimension)
  * indentFirstLine [Dimension](#dimension)
  * indentStart [Dimension](#dimension)
  * keepLinesTogether `boolean`: Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent.
  * keepWithNext `boolean`: Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent.
  * lineSpacing `number`: The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
  * namedStyleType `string` (values: NAMED_STYLE_TYPE_UNSPECIFIED, NORMAL_TEXT, TITLE, SUBTITLE, HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6): The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.
  * shading [Shading](#shading)
  * spaceAbove [Dimension](#dimension)
  * spaceBelow [Dimension](#dimension)
  * spacingMode `string` (values: SPACING_MODE_UNSPECIFIED, NEVER_COLLAPSE, COLLAPSE_LISTS): The spacing mode for the paragraph.
  * tabStops `array`: A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only.
    * items [TabStop](#tabstop)

### ParagraphStyleSuggestionState
* ParagraphStyleSuggestionState `object`: A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * alignmentSuggested `boolean`: Indicates if there was a suggested change to alignment.
  * avoidWidowAndOrphanSuggested `boolean`: Indicates if there was a suggested change to avoid_widow_and_orphan.
  * borderBetweenSuggested `boolean`: Indicates if there was a suggested change to border_between.
  * borderBottomSuggested `boolean`: Indicates if there was a suggested change to border_bottom.
  * borderLeftSuggested `boolean`: Indicates if there was a suggested change to border_left.
  * borderRightSuggested `boolean`: Indicates if there was a suggested change to border_right.
  * borderTopSuggested `boolean`: Indicates if there was a suggested change to border_top.
  * directionSuggested `boolean`: Indicates if there was a suggested change to direction.
  * headingIdSuggested `boolean`: Indicates if there was a suggested change to heading_id.
  * indentEndSuggested `boolean`: Indicates if there was a suggested change to indent_end.
  * indentFirstLineSuggested `boolean`: Indicates if there was a suggested change to indent_first_line.
  * indentStartSuggested `boolean`: Indicates if there was a suggested change to indent_start.
  * keepLinesTogetherSuggested `boolean`: Indicates if there was a suggested change to keep_lines_together.
  * keepWithNextSuggested `boolean`: Indicates if there was a suggested change to keep_with_next.
  * lineSpacingSuggested `boolean`: Indicates if there was a suggested change to line_spacing.
  * namedStyleTypeSuggested `boolean`: Indicates if there was a suggested change to named_style_type.
  * shadingSuggestionState [ShadingSuggestionState](#shadingsuggestionstate)
  * spaceAboveSuggested `boolean`: Indicates if there was a suggested change to space_above.
  * spaceBelowSuggested `boolean`: Indicates if there was a suggested change to space_below.
  * spacingModeSuggested `boolean`: Indicates if there was a suggested change to spacing_mode.

### PositionedObject
* PositionedObject `object`: An object that is tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
  * objectId `string`: The ID of this positioned object.
  * positionedObjectProperties [PositionedObjectProperties](#positionedobjectproperties)
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionId `string`: The suggested insertion ID. If empty, then this is not a suggested insertion.
  * suggestedPositionedObjectPropertiesChanges `object`: The suggested changes to the positioned object properties, keyed by suggestion ID.

### PositionedObjectPositioning
* PositionedObjectPositioning `object`: The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it is tethered to.
  * layout `string` (values: POSITIONED_OBJECT_LAYOUT_UNSPECIFIED, WRAP_TEXT, BREAK_LEFT, BREAK_RIGHT, BREAK_LEFT_RIGHT, IN_FRONT_OF_TEXT): The layout of this positioned object.
  * leftOffset [Dimension](#dimension)
  * topOffset [Dimension](#dimension)

### PositionedObjectPositioningSuggestionState
* PositionedObjectPositioningSuggestionState `object`: A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * layoutSuggested `boolean`: Indicates if there was a suggested change to layout.
  * leftOffsetSuggested `boolean`: Indicates if there was a suggested change to left_offset.
  * topOffsetSuggested `boolean`: Indicates if there was a suggested change to top_offset.

### PositionedObjectProperties
* PositionedObjectProperties `object`: Properties of a PositionedObject.
  * embeddedObject [EmbeddedObject](#embeddedobject)
  * positioning [PositionedObjectPositioning](#positionedobjectpositioning)

### PositionedObjectPropertiesSuggestionState
* PositionedObjectPropertiesSuggestionState `object`: A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * embeddedObjectSuggestionState [EmbeddedObjectSuggestionState](#embeddedobjectsuggestionstate)
  * positioningSuggestionState [PositionedObjectPositioningSuggestionState](#positionedobjectpositioningsuggestionstate)

### Range
* Range `object`: Specifies a contiguous range of text.
  * endIndex `integer`: The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
  * segmentId `string`: The ID of the header, footer or footnote that this range is contained in. An empty segment ID signifies the document's body.
  * startIndex `integer`: The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.

### ReplaceAllTextRequest
* ReplaceAllTextRequest `object`: Replaces all instances of text matching a criteria with replace text.
  * containsText [SubstringMatchCriteria](#substringmatchcriteria)
  * replaceText `string`: The text that will replace the matched text.

### ReplaceAllTextResponse
* ReplaceAllTextResponse `object`: The result of replacing text.
  * occurrencesChanged `integer`: The number of occurrences changed by replacing all text.

### ReplaceImageRequest
* ReplaceImageRequest `object`: Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
  * imageObjectId `string`: The ID of the existing image that will be replaced.
  * imageReplaceMethod `string` (values: IMAGE_REPLACE_METHOD_UNSPECIFIED, CENTER_CROP): The replacement method.
  * uri `string`: The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI can be at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.source_uri field.

### ReplaceNamedRangeContentRequest
* ReplaceNamedRangeContentRequest `object`: Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
  * namedRangeId `string`: The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned.
  * namedRangeName `string`: The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op.
  * text `string`: Replaces the content of the specified named range(s) with the given text.

### Request
* Request `object`: A single update to apply to a document.
  * createFooter [CreateFooterRequest](#createfooterrequest)
  * createFootnote [CreateFootnoteRequest](#createfootnoterequest)
  * createHeader [CreateHeaderRequest](#createheaderrequest)
  * createNamedRange [CreateNamedRangeRequest](#createnamedrangerequest)
  * createParagraphBullets [CreateParagraphBulletsRequest](#createparagraphbulletsrequest)
  * deleteContentRange [DeleteContentRangeRequest](#deletecontentrangerequest)
  * deleteFooter [DeleteFooterRequest](#deletefooterrequest)
  * deleteHeader [DeleteHeaderRequest](#deleteheaderrequest)
  * deleteNamedRange [DeleteNamedRangeRequest](#deletenamedrangerequest)
  * deleteParagraphBullets [DeleteParagraphBulletsRequest](#deleteparagraphbulletsrequest)
  * deletePositionedObject [DeletePositionedObjectRequest](#deletepositionedobjectrequest)
  * deleteTableColumn [DeleteTableColumnRequest](#deletetablecolumnrequest)
  * deleteTableRow [DeleteTableRowRequest](#deletetablerowrequest)
  * insertInlineImage [InsertInlineImageRequest](#insertinlineimagerequest)
  * insertPageBreak [InsertPageBreakRequest](#insertpagebreakrequest)
  * insertSectionBreak [InsertSectionBreakRequest](#insertsectionbreakrequest)
  * insertTable [InsertTableRequest](#inserttablerequest)
  * insertTableColumn [InsertTableColumnRequest](#inserttablecolumnrequest)
  * insertTableRow [InsertTableRowRequest](#inserttablerowrequest)
  * insertText [InsertTextRequest](#inserttextrequest)
  * mergeTableCells [MergeTableCellsRequest](#mergetablecellsrequest)
  * replaceAllText [ReplaceAllTextRequest](#replacealltextrequest)
  * replaceImage [ReplaceImageRequest](#replaceimagerequest)
  * replaceNamedRangeContent [ReplaceNamedRangeContentRequest](#replacenamedrangecontentrequest)
  * unmergeTableCells [UnmergeTableCellsRequest](#unmergetablecellsrequest)
  * updateDocumentStyle [UpdateDocumentStyleRequest](#updatedocumentstylerequest)
  * updateParagraphStyle [UpdateParagraphStyleRequest](#updateparagraphstylerequest)
  * updateSectionStyle [UpdateSectionStyleRequest](#updatesectionstylerequest)
  * updateTableCellStyle [UpdateTableCellStyleRequest](#updatetablecellstylerequest)
  * updateTableColumnProperties [UpdateTableColumnPropertiesRequest](#updatetablecolumnpropertiesrequest)
  * updateTableRowStyle [UpdateTableRowStyleRequest](#updatetablerowstylerequest)
  * updateTextStyle [UpdateTextStyleRequest](#updatetextstylerequest)

### Response
* Response `object`: A single response from an update.
  * createFooter [CreateFooterResponse](#createfooterresponse)
  * createFootnote [CreateFootnoteResponse](#createfootnoteresponse)
  * createHeader [CreateHeaderResponse](#createheaderresponse)
  * createNamedRange [CreateNamedRangeResponse](#createnamedrangeresponse)
  * insertInlineImage [InsertInlineImageResponse](#insertinlineimageresponse)
  * insertInlineSheetsChart [InsertInlineSheetsChartResponse](#insertinlinesheetschartresponse)
  * replaceAllText [ReplaceAllTextResponse](#replacealltextresponse)

### RgbColor
* RgbColor `object`: An RGB color.
  * blue `number`: The blue component of the color, from 0.0 to 1.0.
  * green `number`: The green component of the color, from 0.0 to 1.0.
  * red `number`: The red component of the color, from 0.0 to 1.0.

### SectionBreak
* SectionBreak `object`: A StructuralElement representing a section break. A section is a range of content which has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
  * sectionStyle [SectionStyle](#sectionstyle)
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`

### SectionColumnProperties
* SectionColumnProperties `object`: Properties that apply to a section's column.
  * paddingEnd [Dimension](#dimension)
  * width [Dimension](#dimension)

### SectionStyle
* SectionStyle `object`: The styling that applies to a section.
  * columnProperties `array`: The section's columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than three columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error.
    * items [SectionColumnProperties](#sectioncolumnproperties)
  * columnSeparatorStyle `string` (values: COLUMN_SEPARATOR_STYLE_UNSPECIFIED, NONE, BETWEEN_EACH_COLUMN): The style of column separators. This style can be set even when there is one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
  * contentDirection `string` (values: CONTENT_DIRECTION_UNSPECIFIED, LEFT_TO_RIGHT, RIGHT_TO_LEFT): The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
  * defaultFooterId `string`: The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. This property is read-only.
  * defaultHeaderId `string`: The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. This property is read-only.
  * evenPageFooterId `string`: The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. This property is read-only.
  * evenPageHeaderId `string`: The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. This property is read-only.
  * firstPageFooterId `string`: The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it is false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. This property is read-only.
  * firstPageHeaderId `string`: The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it is false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. This property is read-only.
  * marginBottom [Dimension](#dimension)
  * marginFooter [Dimension](#dimension)
  * marginHeader [Dimension](#dimension)
  * marginLeft [Dimension](#dimension)
  * marginRight [Dimension](#dimension)
  * marginTop [Dimension](#dimension)
  * pageNumberStart `integer`: The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, CONTINUOUS, NEXT_PAGE): Output only. The type of section.
  * useFirstPageHeaderFooter `boolean`: Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.

### Shading
* Shading `object`: The shading of a paragraph.
  * backgroundColor [OptionalColor](#optionalcolor)

### ShadingSuggestionState
* ShadingSuggestionState `object`: A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there is a new suggested value.
  * backgroundColorSuggested `boolean`: Indicates if there was a suggested change to the Shading.

### SheetsChartReference
* SheetsChartReference `object`: A reference to a linked chart embedded from Google Sheets.
  * chartId `integer`: The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
  * spreadsheetId `string`: The ID of the Google Sheets spreadsheet that contains the source chart.

### SheetsChartReferenceSuggestionState
* SheetsChartReferenceSuggestionState `object`: A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * chartIdSuggested `boolean`: Indicates if there was a suggested change to chart_id.
  * spreadsheetIdSuggested `boolean`: Indicates if there was a suggested change to spreadsheet_id.

### Size
* Size `object`: A width and height.
  * height [Dimension](#dimension)
  * width [Dimension](#dimension)

### SizeSuggestionState
* SizeSuggestionState `object`: A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
  * heightSuggested `boolean`: Indicates if there was a suggested change to height.
  * widthSuggested `boolean`: Indicates if there was a suggested change to width.

### StructuralElement
* StructuralElement `object`: A StructuralElement describes content that provides structure to the document.
  * endIndex `integer`: The zero-based end index of this structural element, exclusive, in UTF-16 code units.
  * paragraph [Paragraph](#paragraph)
  * sectionBreak [SectionBreak](#sectionbreak)
  * startIndex `integer`: The zero-based start index of this structural element, in UTF-16 code units.
  * table [Table](#table)
  * tableOfContents [TableOfContents](#tableofcontents)

### SubstringMatchCriteria
* SubstringMatchCriteria `object`: A criteria that matches a specific string of text in the document.
  * matchCase `boolean`: Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
  * text `string`: The text to search for in the document.

### SuggestedBullet
* SuggestedBullet `object`: A suggested change to a Bullet.
  * bullet [Bullet](#bullet)
  * bulletSuggestionState [BulletSuggestionState](#bulletsuggestionstate)

### SuggestedDocumentStyle
* SuggestedDocumentStyle `object`: A suggested change to the DocumentStyle.
  * documentStyle [DocumentStyle](#documentstyle)
  * documentStyleSuggestionState [DocumentStyleSuggestionState](#documentstylesuggestionstate)

### SuggestedInlineObjectProperties
* SuggestedInlineObjectProperties `object`: A suggested change to InlineObjectProperties.
  * inlineObjectProperties [InlineObjectProperties](#inlineobjectproperties)
  * inlineObjectPropertiesSuggestionState [InlineObjectPropertiesSuggestionState](#inlineobjectpropertiessuggestionstate)

### SuggestedListProperties
* SuggestedListProperties `object`: A suggested change to ListProperties.
  * listProperties [ListProperties](#listproperties)
  * listPropertiesSuggestionState [ListPropertiesSuggestionState](#listpropertiessuggestionstate)

### SuggestedNamedStyles
* SuggestedNamedStyles `object`: A suggested change to the NamedStyles.
  * namedStyles [NamedStyles](#namedstyles)
  * namedStylesSuggestionState [NamedStylesSuggestionState](#namedstylessuggestionstate)

### SuggestedParagraphStyle
* SuggestedParagraphStyle `object`: A suggested change to a ParagraphStyle.
  * paragraphStyle [ParagraphStyle](#paragraphstyle)
  * paragraphStyleSuggestionState [ParagraphStyleSuggestionState](#paragraphstylesuggestionstate)

### SuggestedPositionedObjectProperties
* SuggestedPositionedObjectProperties `object`: A suggested change to PositionedObjectProperties.
  * positionedObjectProperties [PositionedObjectProperties](#positionedobjectproperties)
  * positionedObjectPropertiesSuggestionState [PositionedObjectPropertiesSuggestionState](#positionedobjectpropertiessuggestionstate)

### SuggestedTableCellStyle
* SuggestedTableCellStyle `object`: A suggested change to a TableCellStyle.
  * tableCellStyle [TableCellStyle](#tablecellstyle)
  * tableCellStyleSuggestionState [TableCellStyleSuggestionState](#tablecellstylesuggestionstate)

### SuggestedTableRowStyle
* SuggestedTableRowStyle `object`: A suggested change to a TableRowStyle.
  * tableRowStyle [TableRowStyle](#tablerowstyle)
  * tableRowStyleSuggestionState [TableRowStyleSuggestionState](#tablerowstylesuggestionstate)

### SuggestedTextStyle
* SuggestedTextStyle `object`: A suggested change to a TextStyle.
  * textStyle [TextStyle](#textstyle)
  * textStyleSuggestionState [TextStyleSuggestionState](#textstylesuggestionstate)

### TabStop
* TabStop `object`: A tab stop within a paragraph.
  * alignment `string` (values: TAB_STOP_ALIGNMENT_UNSPECIFIED, START, CENTER, END): The alignment of this tab stop. If unset, the value defaults to START.
  * offset [Dimension](#dimension)

### Table
* Table `object`: A StructuralElement representing a table.
  * columns `integer`: Number of columns in the table. It is possible for a table to be non-rectangular, so some rows may have a different number of cells.
  * rows `integer`: Number of rows in the table.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A Table may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * tableRows `array`: The contents and style of each row.
    * items [TableRow](#tablerow)
  * tableStyle [TableStyle](#tablestyle)

### TableCell
* TableCell `object`: The contents and style of a cell in a Table.
  * content `array`: The content of the cell.
    * items [StructuralElement](#structuralelement)
  * endIndex `integer`: The zero-based end index of this cell, exclusive, in UTF-16 code units.
  * startIndex `integer`: The zero-based start index of this cell, in UTF-16 code units.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A TableCell may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTableCellStyleChanges `object`: The suggested changes to the table cell style, keyed by suggestion ID.
  * tableCellStyle [TableCellStyle](#tablecellstyle)

### TableCellBorder
* TableCellBorder `object`: A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
  * color [OptionalColor](#optionalcolor)
  * dashStyle `string` (values: DASH_STYLE_UNSPECIFIED, SOLID, DOT, DASH): The dash style of the border.
  * width [Dimension](#dimension)

### TableCellLocation
* TableCellLocation `object`: Location of a single cell within a table.
  * columnIndex `integer`: The zero-based column index. For example, the second column in the table has a column index of 1.
  * rowIndex `integer`: The zero-based row index. For example, the second row in the table has a row index of 1.
  * tableStartLocation [Location](#location)

### TableCellStyle
* TableCellStyle `object`: The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
  * backgroundColor [OptionalColor](#optionalcolor)
  * borderBottom [TableCellBorder](#tablecellborder)
  * borderLeft [TableCellBorder](#tablecellborder)
  * borderRight [TableCellBorder](#tablecellborder)
  * borderTop [TableCellBorder](#tablecellborder)
  * columnSpan `integer`: The column span of the cell. This property is read-only.
  * contentAlignment `string` (values: CONTENT_ALIGNMENT_UNSPECIFIED, CONTENT_ALIGNMENT_UNSUPPORTED, TOP, MIDDLE, BOTTOM): The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.
  * paddingBottom [Dimension](#dimension)
  * paddingLeft [Dimension](#dimension)
  * paddingRight [Dimension](#dimension)
  * paddingTop [Dimension](#dimension)
  * rowSpan `integer`: The row span of the cell. This property is read-only.

### TableCellStyleSuggestionState
* TableCellStyleSuggestionState `object`: A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * backgroundColorSuggested `boolean`: Indicates if there was a suggested change to background_color.
  * borderBottomSuggested `boolean`: Indicates if there was a suggested change to border_bottom.
  * borderLeftSuggested `boolean`: Indicates if there was a suggested change to border_left.
  * borderRightSuggested `boolean`: Indicates if there was a suggested change to border_right.
  * borderTopSuggested `boolean`: Indicates if there was a suggested change to border_top.
  * columnSpanSuggested `boolean`: Indicates if there was a suggested change to column_span.
  * contentAlignmentSuggested `boolean`: Indicates if there was a suggested change to content_alignment.
  * paddingBottomSuggested `boolean`: Indicates if there was a suggested change to padding_bottom.
  * paddingLeftSuggested `boolean`: Indicates if there was a suggested change to padding_left.
  * paddingRightSuggested `boolean`: Indicates if there was a suggested change to padding_right.
  * paddingTopSuggested `boolean`: Indicates if there was a suggested change to padding_top.
  * rowSpanSuggested `boolean`: Indicates if there was a suggested change to row_span.

### TableColumnProperties
* TableColumnProperties `object`: The properties of a column in a table.
  * width [Dimension](#dimension)
  * widthType `string` (values: WIDTH_TYPE_UNSPECIFIED, EVENLY_DISTRIBUTED, FIXED_WIDTH): The width type of the column.

### TableOfContents
* TableOfContents `object`: A StructuralElement representing a table of contents.
  * content `array`: The content of the table of contents.
    * items [StructuralElement](#structuralelement)
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`

### TableRange
* TableRange `object`: A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
  * columnSpan `integer`: The column span of the table range.
  * rowSpan `integer`: The row span of the table range.
  * tableCellLocation [TableCellLocation](#tablecelllocation)

### TableRow
* TableRow `object`: The contents and style of a row in a Table.
  * endIndex `integer`: The zero-based end index of this row, exclusive, in UTF-16 code units.
  * startIndex `integer`: The zero-based start index of this row, in UTF-16 code units.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A TableRow may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTableRowStyleChanges `object`: The suggested style changes to this row, keyed by suggestion ID.
  * tableCells `array`: The contents and style of each cell in this row. It is possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.
    * items [TableCell](#tablecell)
  * tableRowStyle [TableRowStyle](#tablerowstyle)

### TableRowStyle
* TableRowStyle `object`: Styles that apply to a table row.
  * minRowHeight [Dimension](#dimension)

### TableRowStyleSuggestionState
* TableRowStyleSuggestionState `object`: A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * minRowHeightSuggested `boolean`: Indicates if there was a suggested change to min_row_height.

### TableStyle
* TableStyle `object`: Styles that apply to a table.
  * tableColumnProperties `array`: The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's table_row_style.
    * items [TableColumnProperties](#tablecolumnproperties)

### TextRun
* TextRun `object`: A ParagraphElement that represents a run of text that all has the same styling.
  * content `string`: The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907.
  * suggestedDeletionIds `array`: The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
    * items `string`
  * suggestedInsertionIds `array`: The suggested insertion IDs. A TextRun may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
    * items `string`
  * suggestedTextStyleChanges `object`: The suggested text style changes to this run, keyed by suggestion ID.
  * textStyle [TextStyle](#textstyle)

### TextStyle
* TextStyle `object`: Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that is contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
  * backgroundColor [OptionalColor](#optionalcolor)
  * baselineOffset `string` (values: BASELINE_OFFSET_UNSPECIFIED, NONE, SUPERSCRIPT, SUBSCRIPT): The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.
  * bold `boolean`: Whether or not the text is rendered as bold.
  * fontSize [Dimension](#dimension)
  * foregroundColor [OptionalColor](#optionalcolor)
  * italic `boolean`: Whether or not the text is italicized.
  * link [Link](#link)
  * smallCaps `boolean`: Whether or not the text is in small capital letters.
  * strikethrough `boolean`: Whether or not the text is struck through.
  * underline `boolean`: Whether or not the text is underlined.
  * weightedFontFamily [WeightedFontFamily](#weightedfontfamily)

### TextStyleSuggestionState
* TextStyleSuggestionState `object`: A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there is a new suggested value.
  * backgroundColorSuggested `boolean`: Indicates if there was a suggested change to background_color.
  * baselineOffsetSuggested `boolean`: Indicates if there was a suggested change to baseline_offset.
  * boldSuggested `boolean`: Indicates if there was a suggested change to bold.
  * fontSizeSuggested `boolean`: Indicates if there was a suggested change to font_size.
  * foregroundColorSuggested `boolean`: Indicates if there was a suggested change to foreground_color.
  * italicSuggested `boolean`: Indicates if there was a suggested change to italic.
  * linkSuggested `boolean`: Indicates if there was a suggested change to link.
  * smallCapsSuggested `boolean`: Indicates if there was a suggested change to small_caps.
  * strikethroughSuggested `boolean`: Indicates if there was a suggested change to strikethrough.
  * underlineSuggested `boolean`: Indicates if there was a suggested change to underline.
  * weightedFontFamilySuggested `boolean`: Indicates if there was a suggested change to weighted_font_family.

### UnmergeTableCellsRequest
* UnmergeTableCellsRequest `object`: Unmerges cells in a Table.
  * tableRange [TableRange](#tablerange)

### UpdateDocumentStyleRequest
* UpdateDocumentStyleRequest `object`: Updates the DocumentStyle.
  * documentStyle [DocumentStyle](#documentstyle)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the background, set `fields` to `"background"`.

### UpdateParagraphStyleRequest
* UpdateParagraphStyleRequest `object`: Update the styling of all paragraphs that overlap with the given range.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `paragraph_style` is implied and should not be specified. For example, to update the paragraph style's alignment property, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * paragraphStyle [ParagraphStyle](#paragraphstyle)
  * range [Range](#range)

### UpdateSectionStyleRequest
* UpdateSectionStyleRequest `object`: Updates the SectionStyle.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left margin, set `fields` to `"margin_left"`.
  * range [Range](#range)
  * sectionStyle [SectionStyle](#sectionstyle)

### UpdateTableCellStyleRequest
* UpdateTableCellStyleRequest `object`: Updates the style of a range of table cells.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableCellStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background color, set `fields` to `"backgroundColor"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * tableCellStyle [TableCellStyle](#tablecellstyle)
  * tableRange [TableRange](#tablerange)
  * tableStartLocation [Location](#location)

### UpdateTableColumnPropertiesRequest
* UpdateTableColumnPropertiesRequest `object`: Updates the TableColumnProperties of columns in a table.
  * columnIndices `array`: The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated.
    * items `integer`
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"width"`.
  * tableColumnProperties [TableColumnProperties](#tablecolumnproperties)
  * tableStartLocation [Location](#location)

### UpdateTableRowStyleRequest
* UpdateTableRowStyleRequest `object`: Updates the TableRowStyle of rows in a table.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`.
  * rowIndices `array`: The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
    * items `integer`
  * tableRowStyle [TableRowStyle](#tablerowstyle)
  * tableStartLocation [Location](#location)

### UpdateTextStyleRequest
* UpdateTextStyleRequest `object`: Update the styling of text.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
  * range [Range](#range)
  * textStyle [TextStyle](#textstyle)

### WeightedFontFamily
* WeightedFontFamily `object`: Represents a font family and weight of text.
  * fontFamily `string`: The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
  * weight `integer`: The weight of the font. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is `400` ("normal"). The font weight makes up just one component of the rendered font weight. The rendered weight is determined by a combination of the `weight` and the text style's resolved `bold` value, after accounting for inheritance: * If the text is bold and the weight is less than `400`, the rendered weight is 400. * If the text is bold and the weight is greater than or equal to `400` but is less than `700`, the rendered weight is `700`. * If the weight is greater than or equal to `700`, the rendered weight is equal to the weight. * If the text is not bold, the rendered weight is equal to the weight.

### WriteControl
* WriteControl `object`: Provides control over how write requests are executed.
  * requiredRevisionId `string`: The revision ID of the document that the write request will be applied to. If this is not the latest revision of the document, the request will not be processed and will return a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.
  * targetRevisionId `string`: The target revision ID of the document that the write request will be applied to. If collaborator changes have occurred after the document was read using the API, the changes produced by this write request will be transformed against the collaborator changes. This results in a new revision of the document which incorporates both the changes in the request and the collaborator changes, and the Docs server will resolve conflicting changes. When using `target_revision_id`, the API client can be thought of as another collaborator of the document. The target revision ID may only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request will not be processed and will return a 400 bad request error and the request should be retried after reading the latest version of the document. In most cases a `revision_id` will remain valid for use as a target revision for several minutes after it is read, but for frequently-edited documents this window may be shorter.


