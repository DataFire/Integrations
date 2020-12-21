# @datafire/confluence

Client library for Confluence

## Installation and Usage
```bash
npm install --save @datafire/confluence
```
```js
let confluence = require('@datafire/confluence').create({
  username: "",
  password: "",
  host: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Confluence Cloud REST API

## Actions

### audit.get
Returns all records in the audit log, optionally for a certain date range. 
This contains information about events like space exports, group membership 
changes, app installations, etc. For more information, see 
Audit log 
in the Confluence administrator's guide.


```js
confluence.audit.get({}, context)
```

#### Input
* input `object`
  * endDate `string`: Filters the results to the records on or before the endDate. 
  * limit `integer`: The maximum number of records to return per page. 
  * searchString `string`: Filters the results to records that have string property values 
  * start `integer`: The starting index of the returned records.
  * startDate `string`: Filters the results to the records on or after the startDate. 

#### Output
*Output schema unknown*

### audit.post
Creates a record in the audit log.


```js
confluence.audit.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * affectedObject `object`
    * associatedObjects `array`: Objects that were associated with the event. For example, if the event 
      * items `object`
    * author `object`: The user that actioned the event. If author is not specified, then all 
    * category `string`: The category of the event, which is displayed in the 'Event type' column 
    * changedValues `array`: The values that were changed in the event.
      * items `object`
    * creationDate `integer`: The creation date-time of the audit record, as a timestamp. This is converted 
    * description `string`: A long description of the event, which is displayed in the 'Description' 
    * remoteAddress `string`: The IP address of the computer where the event was initiated from.
    * summary `string`: The summary of the event, which is displayed in the 'Change' column on 
    * sysAdmin `boolean`: Indicates whether the event was actioned by a system administrator.

#### Output
*Output schema unknown*

### audit.export.get
Exports audit records as a CSV file or ZIP file.


```js
confluence.audit.export.get({}, context)
```

#### Input
* input `object`
  * endDate `string`: Filters the exported results to the records on or before the endDate. 
  * format `string`: The format of the export file for the audit records.
  * searchString `string`: Filters the exported results to records that have string property values 
  * startDate `string`: Filters the exported results to the records on or after the startDate. 

#### Output
*Output schema unknown*

### audit.retention.get
Returns the retention period for records in the audit log. The retention 
period is how long an audit record is kept for, from creation date until 
it is deleted.


```js
confluence.audit.retention.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### audit.retention.put
Sets the retention period for records in the audit log. The retention period 
can be set to a maximum of 20 years.


```js
confluence.audit.retention.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * number `integer`: The number of units for the retention period.
    * units `string` (values: NANOS, MICROS, MILLIS, SECONDS, MINUTES, HOURS, HALF_DAYS, DAYS, WEEKS, MONTHS): The unit of time that the retention period is measured in.

#### Output
*Output schema unknown*

### audit.since.get
Returns records from the audit log, for a time period back from the current 
date. For example, you can use this method to get the last 3 months of records.


```js
confluence.audit.since.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of records to return per page. 
  * number `integer`: The number of units for the time period.
  * searchString `string`: Filters the results to records that have string property values 
  * start `integer`: The starting index of the returned records.
  * units `string`: The unit of time that the time period is measured in.

#### Output
*Output schema unknown*

### content.get
Returns all content in a Confluence instance.


```js
confluence.content.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the content to expand.
  * limit `integer`: The maximum number of content objects to return per page. 
  * orderby `string`: Orders the content by a particular field. Specify the field and sort direction for 
  * postingDay `string`: The posting date of the blog post to be returned. Required for
  * spaceKey `string`: The key of the space to be queried for its content.
  * start `integer`: The starting index of the returned content.
  * status `array`: Filter the results to a set of content based on their status. If set to any, 
  * title `string`: The title of the page to be returned. Required for page type.
  * trigger `string`: If set to viewed, the request will trigger a 'viewed' event for the content. 
  * type `string`: The type of content to return.

#### Output
*Output schema unknown*

### content.post
Creates a new piece of content or publishes an existing draft.


```js
confluence.content.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * ancestors `array`: The parent content of the new content. Only one parent content 
      * items `object`
    * body `object`: The body of the new content. Does not apply to attachments. 
    * id `string`: The ID of the draft content. Required when publishing a draft.
    * space `object`: The space that the content is being created in.
    * status `string` (values: current, trashed, historical, draft): The status of the new content.
    * title `string`
    * type `string` (values: page, blogpost, comment, attachment): The type of the new content. Custom content types defined by apps are also supported.
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content to expand. 
  * status `string`: Filter the returned content by status.

#### Output
*Output schema unknown*

### content.id.delete
Moves a piece of content to the space's trash or purges it from the trash, 
depending on the content's type and status:


```js
confluence.content.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to be deleted.
  * status `string`: Set this to trashed, if the content's status is trashed and you want to purge it.

#### Output
*Output schema unknown*

### content.id.get
Returns a single piece of content, like a page or a blog post.


```js
confluence.content.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * embeddedContentRender `string`: The version of embedded content (e.g. attachments) to render.
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the content to expand.
  * id **required** `string`: The ID of the content to be returned. If you don't know the content ID, 
  * status `array`: Filter the results to a set of content based on their status. 
  * trigger `string`: If set to viewed, the request will trigger a 'viewed' event for the content. 
  * version `integer`: The version number of the content to be returned.

#### Output
*Output schema unknown*

### content.id.put
Updates a piece of content. Use this method to update the title or body 
of a piece of content, change the status, change the parent page, and more.


```js
confluence.content.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * ancestors `array`: The new parent for the content. Only one parent content 'id' can be specified.
      * items `object`
    * body `object`: The updated body of the content. Does not apply to attachments.
    * status `string` (values: current, trashed, historical, draft): The updated status of the content. Note, if you change the status of a page from 
    * title `string`: The updated title of the content. If you are not changing this field, set this to the current title.
    * type `string` (values: page, blogpost, comment, attachment): The type of content. Set this to the current type of the content.
    * version `object`: The new version for the updated content. Set this to the current version number incremented by one, unless you are changing the status to 'draft' which must have a version number of 1.
  * conflictPolicy `string`: The action that should be taken when conflicts are discovered. 
  * id **required** `string`: The ID of the content to be updated.
  * status `string`: The updated status of the content. Use this parameter to change the 

#### Output
*Output schema unknown*

### content.id.child.get
Returns a map of the direct children of a piece of content. A piece of content 
has different types of child content, depending on its type. These are 
the default parent-child content type relationships:


```js
confluence.content.id.child.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: attachment, comments, page): A multi-value parameter indicating which properties of the children to expand, where:
  * id **required** `string`: The ID of the content to be queried for its children.
  * parentVersion `integer`: The version of the parent content to retrieve children for.

#### Output
*Output schema unknown*

### content.id.child.type.get
Returns all children of a given type, for a piece of content. 
A piece of content has different types of child content, depending on its type:


```js
confluence.content.id.child.type.get({
  "id": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content to expand.
  * id **required** `string`: The ID of the content to be queried for its children.
  * limit `integer`: The maximum number of content to return per page. Note,
  * parentVersion `integer`: The version of the parent content to retrieve children for.
  * start `integer`: The starting index of the returned content.
  * type **required** `string`: The type of children to return.

#### Output
*Output schema unknown*

### content.id.child.attachment.get
Returns the attachments for a piece of content.


```js
confluence.content.id.child.attachment.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the 
  * filename `string`: Filter the results to attachments that match the filename.
  * id **required** `string`: The ID of the content to be queried for its attachments.
  * limit `integer`: The maximum number of attachments to return per page. 
  * mediaType `string`: Filter the results to attachments that match the media type.
  * start `integer`: The starting index of the returned attachments.

#### Output
*Output schema unknown*

### content.id.child.attachment.post
Adds an attachment to a piece of content. This method only adds a new 
attachment. If you want to update an existing attachment, use 
Create or update attachments.


```js
confluence.content.id.child.attachment.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to add the attachment to.
  * status `string`: The status of the content that the attachment is being added to.

#### Output
*Output schema unknown*

### content.id.child.attachment.put
Adds an attachment to a piece of content. If the attachment already exists 
for the content, then the attachment is updated (i.e. a new version of the 
attachment is created).


```js
confluence.content.id.child.attachment.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to add the attachment to.
  * status `string`: The status of the content that the attachment is being added to. 

#### Output
*Output schema unknown*

### content.id.child.attachment.attachmentId.put
Updates the attachment properties, i.e. the non-binary data of an attachment 
like the filename, media-type, comment, and parent container.


```js
confluence.content.id.child.attachment.attachmentId.put({
  "attachmentId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * attachmentId **required** `string`: The ID of the attachment to update.
  * body `object`
    * container `object`: The new content to attach the attachment to.
    * id `string`: The ID of the attachment to be updated.
    * metadata `object`
    * title `string`: The updated name of the attachment.
    * type `string` (values: attachment): Set this to attachment.
    * version `object`: The attachment version. Set this to the current version number of the 
  * id **required** `string`: The ID of the content that the attachment is attached to.

#### Output
*Output schema unknown*

### content.id.child.attachment.attachmentId.data.post
Updates the binary data of an attachment, given the attachment ID, and 
optionally the comment and the minor edit field.


```js
confluence.content.id.child.attachment.attachmentId.data.post({
  "attachmentId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * attachmentId **required** `string`: The ID of the attachment to update.
  * id **required** `string`: The ID of the content that the attachment is attached to.

#### Output
*Output schema unknown*

### content.id.child.comment.get
Returns the comments on a piece of content.


```js
confluence.content.id.child.comment.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * depth `string`: Currently, this parameter is not used. 
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space, extensions.inlineProperties, extensions.resolution): A multi-value parameter indicating which properties of the 
  * id **required** `string`: The ID of the content to be queried for its comments.
  * limit `integer`: The maximum number of comments to return per page. Note,
  * location `array`: The location of the comments in the page. Multiple locations can be specified. 
  * parentVersion `integer`: The version of the parent content to retrieve children for.
  * start `integer`: The starting index of the returned comments.

#### Output
*Output schema unknown*

### content.id.descendant.get
Returns a map of the descendants of a piece of content. This is similar 
to Get content children, except that this 
method returns child pages at all levels, rather than just the direct 
child pages.


```js
confluence.content.id.descendant.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: attachment, comments, page): A multi-value parameter indicating which properties of the children to 
  * id **required** `string`: The ID of the content to be queried for its descendants.

#### Output
*Output schema unknown*

### content.id.descendant.type.get
Returns all descendants of a given type, for a piece of content. This is 
similar to Get content children by type, 
except that this method returns child pages at all levels, rather than just 
the direct child pages.


```js
confluence.content.id.descendant.type.get({
  "id": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content to expand.
  * id **required** `string`: The ID of the content to be queried for its descendants.
  * limit `integer`: The maximum number of content to return per page. Note,
  * start `integer`: The starting index of the returned content.
  * type **required** `string`: The type of descendants to return.

#### Output
*Output schema unknown*

### content.id.history.get
Returns the most recent update for a piece of content.


```js
confluence.content.id.history.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: lastUpdated, previousVersion, contributors, nextVersion): A multi-value parameter indicating which properties of the content history to expand.
  * id **required** `string`: The ID of the content to be queried for its history.

#### Output
*Output schema unknown*

### content.id.history.version.macro.id.macroId.get
Returns the body of a macro in storage format, for the given macro ID. 
This includes information like the name of the macro, the body of the macro, 
and any macro parameters. This method is mainly used by Cloud apps.


```js
confluence.content.id.history.version.macro.id.macroId.get({
  "id": "",
  "macroId": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID for the content that contains the macro.
  * macroId **required** `string`: The ID of the macro. This is usually passed by the app that the
  * version **required** `integer`: The version of the content that contains the macro.

#### Output
*Output schema unknown*

### content.id.label.delete
Removes a label from a piece of content. This is similar to 
Remove label from content 
except that the label name is specified via a query parameter.


```js
confluence.content.id.label.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content that the label will be removed from.
  * name `string`: The name of the label to be removed.

#### Output
*Output schema unknown*

### content.id.label.get
Returns the labels on a piece of content.


```js
confluence.content.id.label.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to be queried for its labels.
  * limit `integer`: The maximum number of labels to return per page. Note,
  * prefix `string` (values: global, my, team): Filters the results to labels with the specified prefix. If this parameteris not specified, then labels with any prefix will be returned.
  * start `integer`: The starting index of the returned labels.

#### Output
*Output schema unknown*

### content.id.label.post
Adds labels to a piece of content. Does not modify the existing labels.


```js
confluence.content.id.label.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content that will have labels added to it.

#### Output
*Output schema unknown*

### content.id.label.label.delete
Removes a label from a piece of content. This is similar to 
Remove label from content using query parameter 
except that the label name is specified via a path parameter.


```js
confluence.content.id.label.label.delete({
  "id": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content that the label will be removed from.
  * label **required** `string`: The name of the label to be removed.

#### Output
*Output schema unknown*

### content.id.notification.child_created.get
Returns the watches for a page. A user that watches a page will receive 
receive notifications when the page is updated.


```js
confluence.content.id.notification.child_created.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to be queried for its watches.
  * limit `integer`: The maximum number of watches to return per page. 
  * start `integer`: The starting index of the returned watches.

#### Output
*Output schema unknown*

### content.id.notification.created.get
Returns all space watches for the space that the content is in. A user that 
watches a space will receive receive notifications when any content in the 
space is updated.


```js
confluence.content.id.notification.created.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content to be queried for its watches.
  * limit `integer`: The maximum number of watches to return per page. 
  * start `integer`: The starting index of the returned watches.

#### Output
*Output schema unknown*

### content.id.pagehierarchy.copy.post
Copy page hierarchy allows the copying of an entire hierarchy of pages and their associated properties, permissions and attachments.
 The id path parameter refers to the content id of the page to copy, and the new parent of this copied page is defined using the destinationPageId in the request body.
 The titleOptions object defines the rules of renaming page titles during the copy;
 for example, search and replace can be used in conjunction to rewrite the copied page titles.


```js
confluence.content.id.pagehierarchy.copy.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * copyAttachments `boolean`
    * copyLabels `boolean`
    * copyPermissions `boolean`
    * copyProperties `boolean`
    * destinationPageId `string`
    * originalPageId `string`
    * titleOptions `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### content.id.property.get
Returns the properties for a piece of content. For more information 
about content properties, see Content properties in the REST API.


```js
confluence.content.id.property.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: content, version): A multi-value parameter indicating which properties of the content to 
  * id **required** `string`: The ID of the content to be queried for its properties.
  * limit `integer`: The maximum number of properties to return per page. 
  * start `integer`: The starting index of the returned properties.

#### Output
*Output schema unknown*

### content.id.property.post
Creates a property for an existing piece of content. For more information 
about content properties, see Content properties in the REST API.


```js
confluence.content.id.property.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * key `string`: The key of the new property.
    * value `object`: The value of the property. This can be empty or a complex object. 
  * id **required** `string`: The ID of the content to add the property to.

#### Output
*Output schema unknown*

### content.id.property.key.delete
Deletes a content property. For more information about content properties, see 
Content properties in the REST API.


```js
confluence.content.id.property.key.delete({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content that the property belongs to.
  * key **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### content.id.property.key.get
Returns a content property for a piece of content. For more information, see 
Content properties in the REST API.


```js
confluence.content.id.property.key.get({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: content, version): A multi-value parameter indicating which properties of the content to 
  * id **required** `string`: The ID of the content to be queried for the property.
  * key **required** `string`: The key of the content property.

#### Output
*Output schema unknown*

### content.id.property.key.post
Creates a property for an existing piece of content. For more information 
about content properties, see Content properties in the REST API.


```js
confluence.content.id.property.key.post({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * value `object`: The value of the property. This can be empty or a complex object. 
  * id **required** `string`: The ID of the content to add the property to.
  * key **required** `string`: The key of the content property. Required.

#### Output
*Output schema unknown*

### content.id.property.key.put
Updates an existing content property. This method will also create a new 
property for a piece of content, if the property key does not exist and 
the property version is 1. For more information about content properties, see 
Content properties in the REST API.


```js
confluence.content.id.property.key.put({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * value `object`: The value of the property.
    * version `object`: The version number of the property.
  * id **required** `string`: The ID of the content that the property belongs to.
  * key **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### content.id.restriction.delete
Removes all restrictions (read and update) on a piece of content.


```js
confluence.content.id.restriction.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to remove restrictions from.

#### Output
*Output schema unknown*

### content.id.restriction.get
Returns the restrictions on a piece of content.


```js
confluence.content.id.restriction.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to be queried for its restrictions.
  * limit `integer`: The maximum number of users and the maximum number of groups, in the 
  * start `integer`: The starting index of the users and groups in the returned restrictions.

#### Output
*Output schema unknown*

### content.id.restriction.post
Adds restrictions to a piece of content. Note, this does not change any 
existing restrictions on the content.


```js
confluence.content.id.restriction.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to add restrictions to.

#### Output
*Output schema unknown*

### content.id.restriction.put
Updates restrictions for a piece of content. This removes the existing 
restrictions and replaces them with the restrictions in the request.


```js
confluence.content.id.restriction.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to update restrictions for.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.get
Returns restrictions on a piece of content by operation. This method is 
similar to Get restrictions except that 
the operations are properties of the return object, rather than items in 
a results array.


```js
confluence.content.id.restriction.byOperation.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to be queried for its restrictions.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.get
Returns the restictions on a piece of content for a given operation (read 
or update).


```js
confluence.content.id.restriction.byOperation.operationKey.get({
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: restrictions.user, restrictions.group, content): A multi-value parameter indicating which properties of the content 
  * id **required** `string`: The ID of the content to be queried for its restrictions.
  * limit `integer`: The maximum number of users and the maximum number of groups, in the 
  * operationKey **required** `string`: The operation type of the restrictions to be returned.
  * start `integer`: The starting index of the users and groups in the returned restrictions.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.group.groupName.delete
Removes a group from a content restriction. That is, remove read or update 
permission for the group for a piece of content.


```js
confluence.content.id.restriction.byOperation.operationKey.group.groupName.delete({
  "groupName": "",
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: The name of the group to remove from the content restriction.
  * id **required** `string`: The ID of the content that the restriction applies to.
  * operationKey **required** `string`: The operation that the restriction applies to.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.group.groupName.get
Returns whether the specified content restriction applies to a group. 
For example, if the 'admins' group has permission to read a page with an 
ID of 123, then the following request will return true:


```js
confluence.content.id.restriction.byOperation.operationKey.group.groupName.get({
  "groupName": "",
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: The name of the group to be queried for whether the content restriction 
  * id **required** `string`: The ID of the content that the restriction applies to.
  * operationKey **required** `string`: The operation that the restriction applies to.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.group.groupName.put
Adds a group to a content restriction. That is, grant read or update 
permission to the group for a piece of content.


```js
confluence.content.id.restriction.byOperation.operationKey.group.groupName.put({
  "groupName": "",
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: The name of the group to add to the content restriction.
  * id **required** `string`: The ID of the content that the restriction applies to.
  * operationKey **required** `string`: The operation that the restriction applies to.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.user.delete
Removes a group from a content restriction. That is, remove read or update 
permission for the group for a piece of content.


```js
confluence.content.id.restriction.byOperation.operationKey.user.delete({
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user to remove from the content restriction.
  * id **required** `string`: The ID of the content that the restriction applies to.
  * key `string`: The key of the user to remove from the content restriction.
  * operationKey **required** `string`: The operation that the restriction applies to.
  * userName `string`: The username of the user to remove from the content restriction.

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.user.get
Returns whether the specified content restriction applies to a user. 
For example, if the user 'admin' has permission to read a page with an 
ID of 123, then the following request will return true:


```js
confluence.content.id.restriction.byOperation.operationKey.user.get({
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user to be queried for whether the content 
  * id **required** `string`: The ID of the content that the restriction applies to.
  * key `string`: The key of the user to be queried for whether the content 
  * operationKey **required** `string`: The operation that is restricted.
  * userName `string`: The username of the user to be queried for whether the content 

#### Output
*Output schema unknown*

### content.id.restriction.byOperation.operationKey.user.put
Adds a user to a content restriction. That is, grant read or update 
permission to the user for a piece of content.


```js
confluence.content.id.restriction.byOperation.operationKey.user.put({
  "id": "",
  "operationKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user to add to the content restriction.
  * id **required** `string`: The ID of the content that the restriction applies to.
  * key `string`: The key of the user to add to the content restriction.
  * operationKey **required** `string`: The operation that the restriction applies to.
  * userName `string`: The username of the user to add to the content restriction.

#### Output
*Output schema unknown*

### content.id.version.get
Returns the versions for a piece of content in descending order.


```js
confluence.content.id.version.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: collaborators, content): A multi-value parameter indicating which properties of the content to expand.
  * id **required** `string`: The ID of the content to be queried for its versions.
  * limit `integer`: The maximum number of versions to return per page. 
  * start `integer`: The starting index of the returned versions.

#### Output
*Output schema unknown*

### content.id.version.post
Restores a historical version to be the latest version. That is, a new version 
is created with the content of the historical version.


```js
confluence.content.id.version.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * operationKey `string` (values: RESTORE): Set to 'RESTORE'.
    * params `object`
  * expand `array` (values: collaborators, content): A multi-value parameter indicating which properties of the returned
  * id **required** `string`: The ID of the content for which the history will be restored.

#### Output
*Output schema unknown*

### content.id.version.versionNumber.delete
Delete a historical version. This does not delete the changes made to the 
content in that version, rather the changes for the deleted version are 
rolled up into the next version. Note, you cannot delete the current version.


```js
confluence.content.id.version.versionNumber.delete({
  "id": "",
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the content that the version will be deleted from.
  * versionNumber **required** `integer`: The number of the version to be deleted. The version number starts 

#### Output
*Output schema unknown*

### content.id.version.versionNumber.get
Returns a version for a piece of content.


```js
confluence.content.id.version.versionNumber.get({
  "id": "",
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * expand `array` (values: collaborators, content): A multi-value parameter indicating which properties of the content to 
  * id **required** `string`: The ID of the content to be queried for its version.
  * versionNumber **required** `integer`: The number of the version to be retrieved.

#### Output
*Output schema unknown*

### content.blueprint.instance.draftId.post
Publishes a legacy draft of a page created from a blueprint. Legacy drafts 
will eventually be removed in favour of shared drafts. For now, this method 
works the same as Publish shared draft.


```js
confluence.content.blueprint.instance.draftId.post({
  "draftId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * ancestors `array`: The new ancestor (i.e. parent page) for the content. If you have 
      * items `object`
    * space `object`: The space for the content.
    * status `string` (values: current): The status of the content. Set this to current or omit it altogether.
    * title `string`: The title of the content. If you don't want to change the title, 
    * type `string` (values: page): The type of content. Set this to page.
    * version `object`: The version for the new content.
  * draftId **required** `string`: The ID of the draft page that was created from a blueprint. 
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content 
  * status `string`: The status of the content to be updated, i.e. the draft. This is set 

#### Output
*Output schema unknown*

### content.blueprint.instance.draftId.put
Publishes a shared draft of a page created from a blueprint.


```js
confluence.content.blueprint.instance.draftId.put({
  "draftId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * ancestors `array`: The new ancestor (i.e. parent page) for the content. If you have 
      * items `object`
    * space `object`: The space for the content.
    * status `string` (values: current): The status of the content. Set this to current or omit it altogether.
    * title `string`: The title of the content. If you don't want to change the title, 
    * type `string` (values: page): The type of content. Set this to page.
    * version `object`: The version for the new content.
  * draftId **required** `string`: The ID of the draft page that was created from a blueprint. 
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content 
  * status `string`: The status of the content to be updated, i.e. the draft. This is set 

#### Output
*Output schema unknown*

### content.search.get
Returns the list of content that matches a Confluence Query Language 
(CQL) query. For information on CQL, see: 
Advanced searching using CQL.


```js
confluence.content.search.get({}, context)
```

#### Input
* input `object`
  * cql `string`: The CQL string that is used to find the requested content.
  * cqlcontext `string` (values: spaceKey, contentId, contentStatuses): The space, content, and content status to execute the search against. 
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the content to expand.
  * limit `integer`: The maximum number of content objects to return per page. 
  * start `integer`: The starting index of the returned content.

#### Output
*Output schema unknown*

### contentbody.convert.to.post
Converts a content body from one format to another format.


```js
confluence.contentbody.convert.to.post({
  "to": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * representation `string` (values: view, export_view, styled_view, storage, editor2, anonymous_export_view): The content format type. Set the value of this property to 
    * value `string`: The body of the content in the relevant format.
  * contentIdContext `string`: The content ID used to find the space for resolving embedded content 
  * embeddedContentRender `string` (values: current, version-at-save): Mode used for rendering embedded content, like attachments.
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the new content to expand.
  * spaceKeyContext `string`: The space key used for resolving embedded content (page includes, 
  * to **required** `string`: The name of the target format for the content body.

#### Output
*Output schema unknown*

### group.get
Returns all user groups. The returned groups are ordered alphabetically in
ascending order by group name.


```js
confluence.group.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of groups to return per page. 
  * start `integer`: The starting index of the returned groups.

#### Output
*Output schema unknown*

### group.groupName.get
Returns a user group for a given group name.


```js
confluence.group.groupName.get({
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: The name of the group. This is the same as the group name shown in 

#### Output
*Output schema unknown*

### group.groupName.member.get
Returns the users that are members of a group.


```js
confluence.group.groupName.member.get({
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: The name of the group to be queried for its members.
  * limit `integer`: The maximum number of users to return per page. 
  * start `integer`: The starting index of the returned users.

#### Output
*Output schema unknown*

### longtask.get
Returns information about all active long-running tasks (e.g. space export), 
such as how long each task has been running and the percentage of each task 
that has completed.


```js
confluence.longtask.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of tasks to return per page. Note, this may be
  * start `integer`: The starting index of the returned tasks.

#### Output
*Output schema unknown*

### longtask.id.get
Returns information about an active long-running task (e.g. space export), 
such as how long it has been running and the percentage of the task that 
has completed.


```js
confluence.longtask.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the task.

#### Output
*Output schema unknown*

### relation.relationName.from.sourceType.sourceKey.to.targetType.get
Returns all target entities that have a particular relationship to the 
source entity. Note, relationships are one way.


```js
confluence.relation.relationName.from.sourceType.sourceKey.to.targetType.get({
  "relationName": "",
  "sourceKey": "",
  "sourceType": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: relationData, source, target): A multi-value parameter indicating which properties of the response 
  * limit `integer`: The maximum number of relationships to return per page. 
  * relationName **required** `string`: The name of the relationship. This method supports relationships created via 
  * sourceKey **required** `string` (values: sourceType): The identifier for the source entity:
  * sourceStatus `string`: The status of the source. This parameter is only used when the
  * sourceType **required** `string`: The source entity type of the relationship.
  * sourceVersion `integer`: The version of the source. This parameter is only used when the
  * start `integer`: The starting index of the returned relationships.
  * targetStatus `string`: The status of the target. This parameter is only used when the
  * targetType **required** `string`: The target entity type of the relationship.
  * targetVersion `integer`: The version of the target. This parameter is only used when the

#### Output
*Output schema unknown*

### relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.delete
Deletes a relationship between two entities (user, space, content).


```js
confluence.relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.delete({
  "relationName": "",
  "sourceKey": "",
  "sourceType": "",
  "targetKey": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * relationName **required** `string`: The name of the relationship.
  * sourceKey **required** `string` (values: sourceType): The identifier for the source entity:
  * sourceStatus `string`: The status of the source. This parameter is only used when the
  * sourceType **required** `string`: The source entity type of the relationship. This must be 'user', if 
  * sourceVersion `integer`: The version of the source. This parameter is only used when the
  * targetKey **required** `string` (values: sourceType): The identifier for the target entity:
  * targetStatus `string`: The status of the target. This parameter is only used when the
  * targetType **required** `string`: The target entity type of the relationship. This must be 'space' or 
  * targetVersion `integer`: The version of the target. This parameter is only used when the

#### Output
*Output schema unknown*

### relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.get
Find whether a particular type of relationship exists from a source 
entity to a target entity. Note, relationships are one way.


```js
confluence.relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.get({
  "relationName": "",
  "sourceKey": "",
  "sourceType": "",
  "targetKey": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: relationData, source, target): A multi-value parameter indicating which properties of the response 
  * relationName **required** `string`: The name of the relationship. This method supports the 'favourite' 
  * sourceKey **required** `string` (values: sourceType): The identifier for the source entity:
  * sourceStatus `string`: The status of the source. This parameter is only used when the
  * sourceType **required** `string`: The source entity type of the relationship. This must be 'user', if 
  * sourceVersion `integer`: The version of the source. This parameter is only used when the
  * targetKey **required** `string` (values: sourceType): The identifier for the target entity:
  * targetStatus `string`: The status of the target. This parameter is only used when the
  * targetType **required** `string`: The target entity type of the relationship. This must be 'space' or 
  * targetVersion `integer`: The version of the target. This parameter is only used when the

#### Output
*Output schema unknown*

### relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.put
Creates a relationship between two entities (user, space, content). The 
'favourite' relationship is supported by default, but you can use this method 
to create any type of relationship between two entities.


```js
confluence.relation.relationName.from.sourceType.sourceKey.to.targetType.targetKey.put({
  "relationName": "",
  "sourceKey": "",
  "sourceType": "",
  "targetKey": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * relationName **required** `string`: The name of the relationship. This method supports the 'favourite' 
  * sourceKey **required** `string` (values: sourceType): The identifier for the source entity:
  * sourceStatus `string`: The status of the source. This parameter is only used when the
  * sourceType **required** `string`: The source entity type of the relationship. This must be 'user', if 
  * sourceVersion `integer`: The version of the source. This parameter is only used when the
  * targetKey **required** `string` (values: sourceType): The identifier for the target entity:
  * targetStatus `string`: The status of the target. This parameter is only used when the
  * targetType **required** `string`: The target entity type of the relationship. This must be 'space' or 
  * targetVersion `integer`: The version of the target. This parameter is only used when the

#### Output
*Output schema unknown*

### relation.relationName.to.targetType.targetKey.from.sourceType.get
Returns all target entities that have a particular relationship to the 
source entity. Note, relationships are one way.


```js
confluence.relation.relationName.to.targetType.targetKey.from.sourceType.get({
  "relationName": "",
  "sourceType": "",
  "targetKey": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: relationData, source, target): A multi-value parameter indicating which properties of the response 
  * limit `integer`: The maximum number of relationships to return per page. 
  * relationName **required** `string`: The name of the relationship. This method supports relationships created via 
  * sourceStatus `string`: The status of the source. This parameter is only used when the
  * sourceType **required** `string`: The source entity type of the relationship.
  * sourceVersion `integer`: The version of the source. This parameter is only used when the
  * start `integer`: The starting index of the returned relationships.
  * targetKey **required** `string` (values: sourceType): The identifier for the target entity:
  * targetStatus `string`: The status of the target. This parameter is only used when the
  * targetType **required** `string`: The target entity type of the relationship.
  * targetVersion `integer`: The version of the target. This parameter is only used when the

#### Output
*Output schema unknown*

### search.get
Searches for content using the 
Confluence Query Language (CQL)


```js
confluence.search.get({}, context)
```

#### Input
* input `object`
  * cql `string`: The CQL query to be used for the search. See 
  * cqlcontext `string` (values: spaceKey, contentId, contentStatuses): The space, content, and content status to execute the search
  * includeArchivedSpaces `boolean`: Include content from archived spaces in the results.
  * limit `integer`: The maximum number of content objects to return per page. 
  * start `integer`: The starting index of the returned content.

#### Output
*Output schema unknown*

### settings.lookandfeel.get
Returns the look and feel settings for the site or a single space. This 
includes attributes such as the color scheme, padding, and border radius.


```js
confluence.settings.lookandfeel.get({}, context)
```

#### Input
* input `object`
  * spaceKey `string`: The key of the space for which the look and feel settings will be

#### Output
*Output schema unknown*

### settings.lookandfeel.custom.delete
Resets the custom look and feel settings for the site or a single space.
This changes the values of the custom settings to be the same as the 
default settings. It does not change which settings (default or custom) 
are selected. Note, the default space settings are inherited from the 
current global settings.


```js
confluence.settings.lookandfeel.custom.delete({}, context)
```

#### Input
* input `object`
  * spaceKey `string`: The key of the space for which the look and feel settings will be

#### Output
*Output schema unknown*

### settings.lookandfeel.custom.post
Updates the look and feel settings for the site or for a single space.
If custom settings exist, they are updated. If no custom settings exist, 
then a set of custom settings is created.


```js
confluence.settings.lookandfeel.custom.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * bordersAndDividers `object`
    * content `object`
    * header `object`
    * headings `object`
    * links `object`
    * menus `object`
  * spaceKey `string`: The key of the space for which the look and feel settings will be

#### Output
*Output schema unknown*

### settings.lookandfeel.selected.put
Sets the look and feel settings to either the default settings or the
custom settings, for the site or a single space. Note, the default 
space settings are inherited from the current global settings.


```js
confluence.settings.lookandfeel.selected.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * custom `object`
    * global `object`
    * selected `string` (values: global, custom): The look and feel scheme. If you set this to global, you must specify 
  * spaceKey `string`: The key of the space for which the look and feel settings will be

#### Output
*Output schema unknown*

### settings.systemInfo.get
Returns the system information for the Confluence Cloud tenant. This
information is used by Atlassian.


```js
confluence.settings.systemInfo.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### settings.theme.get
Returns all themes, not including the default theme.


```js
confluence.settings.theme.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of themes to return per page. 
  * start `integer`: The starting index of the returned themes.

#### Output
*Output schema unknown*

### settings.theme.themeKey.get
Returns a theme. This includes information about the theme name,
description, and icon.


```js
confluence.settings.theme.themeKey.get({
  "themeKey": ""
}, context)
```

#### Input
* input `object`
  * themeKey **required** `string`: The key of the theme to be returned.

#### Output
*Output schema unknown*

### settings.theme.selected.get
Returns the globally assigned theme.


```js
confluence.settings.theme.selected.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### space.get
Returns all spaces. The returned spaces are ordered alphabetically in
ascending order by space key.


```js
confluence.space.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: settings, metadata.labels, operations, lookAndFeel, permissions, icon, description.plain, description.view, theme, homepage): A multi-value parameter indicating which properties of the spaces to
  * favourite `boolean`: Filter the results to the favourite spaces of the user specified by
  * favouriteUserKey `string`: The userKey of the user, whose favourite spaces are used to filter
  * label `array`: Filter the results to spaces based on their label.
  * limit `integer`: The maximum number of spaces to return per page. Note, this may be
  * spaceKey `array`: The key of the space to be returned. To return multiple spaces,
  * start `integer`: The starting index of the returned spaces.
  * status `string`: Filter the results to spaces based on their status.
  * type `string`: Filter the results to spaces based on their type.

#### Output
*Output schema unknown*

### space.post
Creates a new space. Note, currently you cannot set space labels when
creating a space.


```js
confluence.space.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `object`: The description of the new/updated space. Note, only the 'plain' representation 
    * key `string`: The key for the new space. Format: See Space
    * name `string`: The name of the new space.
    * permissions `array`: The permissions for the new space. If no permissions are provided, the 
      * items `object`

#### Output
*Output schema unknown*

### space._private.post
Creates a new space that is only visible to the creator. This method is
the same as the Create space method with permissions
set to the current user only. Note, currently you cannot set space
labels when creating a space.


```js
confluence.space._private.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `object`: The description of the new/updated space. Note, only the 'plain' representation 
    * key `string`: The key for the new space. Format: See Space
    * name `string`: The name of the new space.

#### Output
*Output schema unknown*

### space.spaceKey.delete
Deletes a space. Note, the space will be deleted in a long running task.
Therefore, the space may not be deleted yet when this method has
returned. Clients should poll the status link that is returned in the
response until the task completes.


```js
confluence.space.spaceKey.delete({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * spaceKey **required** `string`: The key of the space to delete.

#### Output
*Output schema unknown*

### space.spaceKey.get
Returns a space. This includes information like the name, description,
and permissions, but not the content in the space.


```js
confluence.space.spaceKey.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: settings, metadata.labels, operations, lookAndFeel, permissions, icon, description.plain, description.view, theme, homepage): A multi-value parameter indicating which properties of the space to
  * spaceKey **required** `string`: The key of the space to be returned.

#### Output
*Output schema unknown*

### space.spaceKey.put
Updates the name, description, or homepage of a space.


```js
confluence.space.spaceKey.put({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `object`: The description of the new/updated space. Note, only the 'plain' representation 
    * homepage `object`: The page to set as the homepage of the space.
    * name `string`: The name of the space.
  * spaceKey **required** `string`: The key of the space to update.

#### Output
*Output schema unknown*

### space.spaceKey.content.get
Returns all content in a space. The returned content is grouped by type
(pages then blogposts), then ordered by content ID in ascending order.


```js
confluence.space.spaceKey.content.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * depth `string`: Filter the results to content at the root level of the space or all content.
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the content
  * limit `integer`: The maximum number of content objects to return per page. Note, this 
  * spaceKey **required** `string`: The key of the space to be queried for its content.
  * start `integer`: The starting index of the returned content.

#### Output
*Output schema unknown*

### space.spaceKey.content.type.get
Returns all content of a given type, in a space. The returned content is
ordered by content ID in ascending order.


```js
confluence.space.spaceKey.content.type.get({
  "spaceKey": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * depth `string`: Filter the results to content at the root level of the space or all
  * expand `array` (values: childTypes.all, childTypes.attachment, childTypes.comment, childTypes.page, container, metadata.currentuser, metadata.properties, metadata.labels, metadata.frontend, operations, children.page, children.attachment, children.comment, restrictions.read.restrictions.user, restrictions.read.restrictions.group, restrictions.update.restrictions.user, restrictions.update.restrictions.group, history, history.lastUpdated, history.previousVersion, history.contributors, history.nextVersion, ancestors, body, version, descendants.page, descendants.attachment, descendants.comment, space): A multi-value parameter indicating which properties of the content
  * limit `integer`: The maximum number of content objects to return per page. Note, this 
  * spaceKey **required** `string`: The key of the space to be queried for its content.
  * start `integer`: The starting index of the returned content.
  * type **required** `string`: The type of content to return.

#### Output
*Output schema unknown*

### space.spaceKey.property.get
Returns all properties for the given space. Space properties are a key-value storage associated with a space.


```js
confluence.space.spaceKey.property.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: version, space): A multi-value parameter indicating which properties of the space
  * limit `integer`: The maximum number of properties to return per page. Note, this may be
  * spaceKey **required** `string`: The key of the space to be queried for its properties.
  * start `integer`: The starting index of the returned objects.

#### Output
*Output schema unknown*

### space.spaceKey.property.post
Creates a new space property.


```js
confluence.space.spaceKey.property.post({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * key `string`: The key of the new property.
    * value `object`: The value of the property. This can be empty or a complex object. 
  * spaceKey **required** `string`: The key of the space that the property will be created in.

#### Output
*Output schema unknown*

### space.spaceKey.property.key.delete
Deletes a space property.


```js
confluence.space.spaceKey.property.key.delete({
  "key": "",
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the property to be deleted.
  * spaceKey **required** `string`: The key of the space that the property is in.

#### Output
*Output schema unknown*

### space.spaceKey.property.key.get
Returns a space property.


```js
confluence.space.spaceKey.property.key.get({
  "key": "",
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * expand `array` (values: version, space): A multi-value parameter indicating which properties of the space
  * key **required** `string`: The key of the space property.
  * spaceKey **required** `string`: The key of the space that the property is in.

#### Output
*Output schema unknown*

### space.spaceKey.property.key.post
Creates a new space property. This is the same as POST
/space/{spaceKey}/property but the key for the property is passed as a
path parameter, rather than in the request body.


```js
confluence.space.spaceKey.property.key.post({
  "key": "",
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * value `object`: The value of the property. This can be empty or a complex object. 
  * key **required** `string`: The key of the property to be created.
  * spaceKey **required** `string`: The key of the space that the property will be created in.

#### Output
*Output schema unknown*

### space.spaceKey.property.key.put
Updates a space property. Note, you cannot update the key of a space
property, only the value.


```js
confluence.space.spaceKey.property.key.put({
  "key": "",
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * value `object`: The value of the property.
    * version `object`: The version number of the property.
  * key **required** `string`: The key of the property to be updated.
  * spaceKey **required** `string`: The key of the space that the property is in.

#### Output
*Output schema unknown*

### space.spaceKey.settings.get
Returns the settings of a space. Currently only the
routeOverrideEnabled setting can be returned.


```js
confluence.space.spaceKey.settings.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * spaceKey **required** `string`: The key of the space to be queried for its settings.

#### Output
*Output schema unknown*

### space.spaceKey.settings.put
Updates the settings for a space. Currently only the
routeOverrideEnabled setting can be updated.


```js
confluence.space.spaceKey.settings.put({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * routeOverrideEnabled `boolean`: Defines whether an override for the space home should be used. This is
  * spaceKey **required** `string`: The key of the space whose settings will be updated.

#### Output
*Output schema unknown*

### space.spaceKey.theme.delete
Resets the space theme. This means that the space will inherit the 
global look and feel settings


```js
confluence.space.spaceKey.theme.delete({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * spaceKey **required** `string`: The key of the space to reset the theme for.

#### Output
*Output schema unknown*

### space.spaceKey.theme.get
Returns the theme selected for a space, if one is set. If no space 
theme is set, this means that the space is inheriting the global look 
and feel settings.


```js
confluence.space.spaceKey.theme.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * spaceKey **required** `string`: The key of the space to be queried for its theme.

#### Output
*Output schema unknown*

### space.spaceKey.theme.put
Sets the theme for a space. Note, if you want to reset the space theme to 
the default Confluence theme, use the 'Reset space theme' method instead 
of this method.


```js
confluence.space.spaceKey.theme.put({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * themeKey `string`: The key of the theme to be set as the space theme.
  * spaceKey **required** `string`: The key of the space to set the theme for.

#### Output
*Output schema unknown*

### template.post
Creates a new content template. Note, blueprint templates cannot be created via the REST API.


```js
confluence.template.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * body `object`: This object is used when creating or updating content.
    * description `string`: A description of the new template.
    * labels `array`: Labels for the new template.
      * items `object`
    * name `string`: The name of the new template.
    * space `object`: The key for the space of the new template. Only applies to space templates. 
    * templateType `string`: The type of the new template. Set to page.

#### Output
*Output schema unknown*

### template.put
Updates a content template. Note, blueprint templates cannot be updated
via the REST API.


```js
confluence.template.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * body `object`: This object is used when creating or updating content.
    * description `string`: A description of the template.
    * labels `array`: Labels for the template.
      * items `object`
    * name `string`: The name of the template. Set to the current name if this field is 
    * space `object`: The key for the space of the template. Required if the template is a 
    * templateId `string`: The ID of the template being updated.
    * templateType `string` (values: page): The type of the template. Set to page.

#### Output
*Output schema unknown*

### template.contentTemplateId.delete
Deletes a template. This results in different actions depending on the 
type of template:


```js
confluence.template.contentTemplateId.delete({
  "contentTemplateId": ""
}, context)
```

#### Input
* input `object`
  * contentTemplateId **required** `string`: The ID of the template to be deleted.

#### Output
*Output schema unknown*

### template.contentTemplateId.get
Returns a content template. This includes information about template, 
like the name, the space or blueprint that the template is in, the body 
of the template, and more.


```js
confluence.template.contentTemplateId.get({
  "contentTemplateId": ""
}, context)
```

#### Input
* input `object`
  * contentTemplateId **required** `string`: The ID of the content template to be returned.

#### Output
*Output schema unknown*

### template.blueprint.get
Returns all templates provided by blueprints. Use this method to retrieve 
all global blueprint templates or all blueprint templates in a space.


```js
confluence.template.blueprint.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: body): A multi-value parameter indicating which properties of the template
  * limit `integer`: The maximum number of templates to return per page. 
  * spaceKey `string`: The key of the space to be queried for templates. If the spaceKey 
  * start `integer`: The starting index of the returned templates.

#### Output
*Output schema unknown*

### template.page.get
Returns all content templates. Use this method to retrieve all global
content templates or all content templates in a space.


```js
confluence.template.page.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: body): A multi-value parameter indicating which properties of the template
  * limit `integer`: The maximum number of templates to return per page. 
  * spaceKey `string`: The key of the space to be queried for templates. If the spaceKey 
  * start `integer`: The starting index of the returned templates.

#### Output
*Output schema unknown*

### user.get
Returns a user. This includes information about the user, like the
display name, userKey, account ID, profile picture, and more.


```js
confluence.user.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user to be returned. Required, unless the 
  * expand `array` (values: operations, details.personal, details.business): A multi-value parameter indicating which properties of the user to
  * key `string`: The userKey of the user to be returned. Required, unless the 
  * username `string`: The username of the user to be returned. Required, unless the key 

#### Output
*Output schema unknown*

### user.anonymous.get
Returns information about how anonymous users are represented, like the
profile picture and display name.


```js
confluence.user.anonymous.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: operations): A multi-value parameter indicating which properties of the user to

#### Output
*Output schema unknown*

### user.current.get
Returns the currently logged-in user. This includes information about
the user, like the display name, userKey, account ID, profile picture,
and more.


```js
confluence.user.current.get({}, context)
```

#### Input
* input `object`
  * expand `array` (values: operations, details.personal, details.business): A multi-value parameter indicating which properties of the user to

#### Output
*Output schema unknown*

### user.memberof.get
Returns the groups that a user is a member of.


```js
confluence.user.memberof.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user to be queried. Required, unless the 
  * key `string`: The userKey of the user to be queried. Required, unless the 
  * limit `integer`: The maximum number of groups to return per page. 
  * start `integer`: The starting index of the returned groups.
  * username `string`: The username of the user to be queried. Required, unless the key 

#### Output
*Output schema unknown*

### user.watch.content.contentId.delete
Removes a user as a watcher from a piece of content. Choose the user by 
doing one of the following:


```js
confluence.user.watch.content.contentId.delete({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be removed as a watcher. Only one of 
  * contentId **required** `string`: The ID of the content to remove the watcher from.
  * key `string`: The key of the user that will be removed as a watcher. Only one of 
  * username `string`: The username of the user that will be removed as a watcher. Only one of 

#### Output
*Output schema unknown*

### user.watch.content.contentId.get
Returns whether a user is watching a piece of content. Choose the user by 
doing one of the following:


```js
confluence.user.watch.content.contentId.get({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user to be queried for whether they are watching 
  * contentId **required** `string`: The ID of the content to be queried for whether the specified user is 
  * key `string`: The key of the user to be queried for whether they are watching the 
  * username `string`: The username of the user to be queried for whether they are watching 

#### Output
*Output schema unknown*

### user.watch.content.contentId.post
Adds a user as a watcher to a piece of content. Choose the user by doing 
one of the following:


```js
confluence.user.watch.content.contentId.post({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be added as a watcher. Only one 
  * contentId **required** `string`: The ID of the content to add the watcher to.
  * key `string`: The key of the user that will be added as a watcher. Only one of 
  * username `string`: The username of the user that will be added as a watcher. Only one 

#### Output
*Output schema unknown*

### user.watch.label.labelName.delete
Removes a user as a watcher from a label. Choose the user by doing one of 
the following:


```js
confluence.user.watch.label.labelName.delete({
  "labelName": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be removed as a watcher. Only one of 
  * key `string`: The key of the user that will be removed as a watcher. Only one of 
  * labelName **required** `string`: The name of the label to remove the watcher from.
  * username `string`: The username of the user that will be removed as a watcher. Only one of 

#### Output
*Output schema unknown*

### user.watch.label.labelName.get
Returns whether a user is watching a label. Choose the user by doing one 
of the following:


```js
confluence.user.watch.label.labelName.get({
  "labelName": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user to be queried for whether they are watching 
  * key `string`: The key of the user to be queried for whether they are watching the 
  * labelName **required** `string`: The name of the label to be queried for whether the specified user is 
  * username `string`: The username of the user to be queried for whether they are watching 

#### Output
*Output schema unknown*

### user.watch.label.labelName.post
Adds a user as a watcher to a label. Choose the user by doing one of the 
following:


```js
confluence.user.watch.label.labelName.post({
  "labelName": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be added as a watcher. Only one 
  * key `string`: The key of the user that will be added as a watcher. Only one of 
  * labelName **required** `string`: The name of the label to add the watcher to.
  * username `string`: The username of the user that will be added as a watcher. Only one 

#### Output
*Output schema unknown*

### user.watch.space.spaceKey.delete
Removes a user as a watcher from a space. Choose the user by doing one of 
the following:


```js
confluence.user.watch.space.spaceKey.delete({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be removed as a watcher. Only one of 
  * key `string`: The key of the user that will be removed as a watcher. Only one of 
  * spaceKey **required** `string`: The key of the space to remove the watcher from.
  * username `string`: The username of the user that will be removed as a watcher. Only one of 

#### Output
*Output schema unknown*

### user.watch.space.spaceKey.get
Returns whether a user is watching a space. Choose the user by 
doing one of the following:


```js
confluence.user.watch.space.spaceKey.get({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user to be queried for whether they are watching 
  * key `string`: The key of the user to be queried for whether they are watching the 
  * spaceKey **required** `string`: The key of the space to be queried for whether the specified user is 
  * username `string`: The username of the user to be queried for whether they are watching 

#### Output
*Output schema unknown*

### user.watch.space.spaceKey.post
Adds a user as a watcher to a space. Choose the user by doing one of the 
following:


```js
confluence.user.watch.space.spaceKey.post({
  "spaceKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user that will be added as a watcher. Only one 
  * key `string`: The key of the user that will be added as a watcher. Only one of 
  * spaceKey **required** `string`: The key of the space to add the watcher to.
  * username `string`: The username of the user that will be added as a watcher. Only one 

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
