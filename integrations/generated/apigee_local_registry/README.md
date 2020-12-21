# @datafire/apigee_local_registry

Client library for Registry

## Installation and Usage
```bash
npm install --save @datafire/apigee_local_registry
```
```js
let apigee_local_registry = require('@datafire/apigee_local_registry').create();

.then(data => {
  console.log(data);
});
```

## Description

The Registry service allows teams to manage descriptions of APIs.

## Actions

### Registry_ListProjects
ListProjects returns matching projects.


```js
apigee_local_registry.Registry_ListProjects({}, context)
```

#### Input
* input `object`
  * page_size `string`: The maximum number of projects to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListProjects` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProjects` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### Registry_CreateProject
CreateProject creates a specified project.


```js
apigee_local_registry.Registry_CreateProject({
  "body": null
}, context)
```

#### Input
* input `object`
  * project_id `string`: The ID to use for the project, which will become the final component of the project's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Project](#project)

#### Output
* output [Project](#project)

### Registry_DeleteProject
DeleteProject removes a specified project and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteProject({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.

#### Output
* output [Empty](#empty)

### Registry_GetProject
GetProject returns a specified project.


```js
apigee_local_registry.Registry_GetProject({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.

#### Output
* output [Project](#project)

### Registry_UpdateProject
UpdateProject can be used to modify a specified project.


```js
apigee_local_registry.Registry_UpdateProject({
  "project": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * update_mask `string`: The list of fields to be updated.
  * body **required** [Project](#project)

#### Output
* output [Project](#project)

### Registry_ListApis
ListApis returns matching APIs.


```js
apigee_local_registry.Registry_ListApis({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * page_size `string`: The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListApisResponse](#listapisresponse)

### Registry_CreateApi
CreateApi creates a specified API.


```js
apigee_local_registry.Registry_CreateApi({
  "project": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api_id `string`: The ID to use for the api, which will become the final component of the api's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Api](#api)

#### Output
* output [Api](#api)

### Registry_DeleteApi
DeleteApi removes a specified API and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteApi({
  "project": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.

#### Output
* output [Empty](#empty)

### Registry_GetApi
GetApi returns a specified API.


```js
apigee_local_registry.Registry_GetApi({
  "project": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.

#### Output
* output [Api](#api)

### Registry_UpdateApi
UpdateApi can be used to modify a specified API.


```js
apigee_local_registry.Registry_UpdateApi({
  "project": "",
  "api": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * update_mask `string`: The list of fields to be updated.
  * body **required** [Api](#api)

#### Output
* output [Api](#api)

### Registry_ListLabels_1
ListLabels returns matching labels.


```js
apigee_local_registry.Registry_ListLabels_1({
  "project": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * page_size `string`: The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLabels` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### Registry_CreateLabel_1
CreateLabel creates a specified label.


```js
apigee_local_registry.Registry_CreateLabel_1({
  "project": "",
  "api": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * label_id `string`: The ID to use for the label, which will become the final component of the label's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### Registry_DeleteLabel_1
DeleteLabel removes a specified label and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteLabel_1({
  "project": "",
  "api": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * label **required** `string`: The label id.

#### Output
* output [Empty](#empty)

### Registry_GetLabel_1
GetLabel returns a specified label.


```js
apigee_local_registry.Registry_GetLabel_1({
  "project": "",
  "api": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * label **required** `string`: The label id.

#### Output
* output [Label](#label)

### Registry_ListProperties_1
ListProperties returns matching properties.


```js
apigee_local_registry.Registry_ListProperties_1({
  "project": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * page_size `string`: The maximum number of properties to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [ListPropertiesResponse](#listpropertiesresponse)

### Registry_CreateProperty_1
CreateProperty creates a specified property.


```js
apigee_local_registry.Registry_CreateProperty_1({
  "project": "",
  "api": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * property_id `string`: The ID to use for the property, which will become the final component of the property's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_DeleteProperty_1
DeleteProperty removes a specified property and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteProperty_1({
  "project": "",
  "api": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * property **required** `string`: The property id.

#### Output
* output [Empty](#empty)

### Registry_GetProperty_1
GetProperty returns a specified property.


```js
apigee_local_registry.Registry_GetProperty_1({
  "project": "",
  "api": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * property **required** `string`: The property id.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [Property](#property)

### Registry_UpdateProperty_1
UpdateProperty can be used to modify a specified property.


```js
apigee_local_registry.Registry_UpdateProperty_1({
  "project": "",
  "api": "",
  "property": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * property **required** `string`: The property id.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_ListVersions
ListVersions returns matching versions.


```js
apigee_local_registry.Registry_ListVersions({
  "project": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * page_size `string`: The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVersions` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListVersionsResponse](#listversionsresponse)

### Registry_CreateVersion
CreateVersion creates a specified version.


```js
apigee_local_registry.Registry_CreateVersion({
  "project": "",
  "api": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version_id `string`: The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Version](#version)

#### Output
* output [Version](#version)

### Registry_DeleteVersion
DeleteVersion removes a specified version and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteVersion({
  "project": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.

#### Output
* output [Empty](#empty)

### Registry_GetVersion
GetVersion returns a specified version.


```js
apigee_local_registry.Registry_GetVersion({
  "project": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.

#### Output
* output [Version](#version)

### Registry_UpdateVersion
UpdateVersion can be used to modify a specified version.


```js
apigee_local_registry.Registry_UpdateVersion({
  "project": "",
  "api": "",
  "version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * update_mask `string`: The list of fields to be updated.
  * body **required** [Version](#version)

#### Output
* output [Version](#version)

### Registry_ListLabels_2
ListLabels returns matching labels.


```js
apigee_local_registry.Registry_ListLabels_2({
  "project": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * page_size `string`: The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLabels` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### Registry_CreateLabel_2
CreateLabel creates a specified label.


```js
apigee_local_registry.Registry_CreateLabel_2({
  "project": "",
  "api": "",
  "version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * label_id `string`: The ID to use for the label, which will become the final component of the label's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### Registry_DeleteLabel_2
DeleteLabel removes a specified label and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteLabel_2({
  "project": "",
  "api": "",
  "version": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * label **required** `string`: The label id.

#### Output
* output [Empty](#empty)

### Registry_GetLabel_2
GetLabel returns a specified label.


```js
apigee_local_registry.Registry_GetLabel_2({
  "project": "",
  "api": "",
  "version": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * label **required** `string`: The label id.

#### Output
* output [Label](#label)

### Registry_ListProperties_2
ListProperties returns matching properties.


```js
apigee_local_registry.Registry_ListProperties_2({
  "project": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * page_size `string`: The maximum number of properties to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [ListPropertiesResponse](#listpropertiesresponse)

### Registry_CreateProperty_2
CreateProperty creates a specified property.


```js
apigee_local_registry.Registry_CreateProperty_2({
  "project": "",
  "api": "",
  "version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * property_id `string`: The ID to use for the property, which will become the final component of the property's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_DeleteProperty_2
DeleteProperty removes a specified property and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteProperty_2({
  "project": "",
  "api": "",
  "version": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * property **required** `string`: The property id.

#### Output
* output [Empty](#empty)

### Registry_GetProperty_2
GetProperty returns a specified property.


```js
apigee_local_registry.Registry_GetProperty_2({
  "project": "",
  "api": "",
  "version": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * property **required** `string`: The property id.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [Property](#property)

### Registry_UpdateProperty_2
UpdateProperty can be used to modify a specified property.


```js
apigee_local_registry.Registry_UpdateProperty_2({
  "project": "",
  "api": "",
  "version": "",
  "property": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * property **required** `string`: The property id.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_ListSpecs
ListSpecs returns matching specs.


```js
apigee_local_registry.Registry_ListSpecs({
  "project": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * page_size `string`: The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSpecs` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [ListSpecsResponse](#listspecsresponse)

### Registry_CreateSpec
CreateSpec creates a specified spec.


```js
apigee_local_registry.Registry_CreateSpec({
  "project": "",
  "api": "",
  "version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec_id `string`: The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Spec](#spec)

#### Output
* output [Spec](#spec)

### Registry_DeleteSpec
DeleteSpec removes a specified spec and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteSpec({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.

#### Output
* output [Empty](#empty)

### Registry_GetSpec
GetSpec returns a specified spec.


```js
apigee_local_registry.Registry_GetSpec({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [Spec](#spec)

### Registry_UpdateSpec
UpdateSpec can be used to modify a specified spec.


```js
apigee_local_registry.Registry_UpdateSpec({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * update_mask `string`: The list of fields to be updated.
  * body **required** [Spec](#spec)

#### Output
* output [Spec](#spec)

### Registry_ListLabels_3
ListLabels returns matching labels.


```js
apigee_local_registry.Registry_ListLabels_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * page_size `string`: The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLabels` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### Registry_CreateLabel_3
CreateLabel creates a specified label.


```js
apigee_local_registry.Registry_CreateLabel_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * label_id `string`: The ID to use for the label, which will become the final component of the label's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### Registry_DeleteLabel_3
DeleteLabel removes a specified label and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteLabel_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * label **required** `string`: The label id.

#### Output
* output [Empty](#empty)

### Registry_GetLabel_3
GetLabel returns a specified label.


```js
apigee_local_registry.Registry_GetLabel_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * label **required** `string`: The label id.

#### Output
* output [Label](#label)

### Registry_ListProperties_3
ListProperties returns matching properties.


```js
apigee_local_registry.Registry_ListProperties_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * page_size `string`: The maximum number of properties to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [ListPropertiesResponse](#listpropertiesresponse)

### Registry_CreateProperty_3
CreateProperty creates a specified property.


```js
apigee_local_registry.Registry_CreateProperty_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * property_id `string`: The ID to use for the property, which will become the final component of the property's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_DeleteProperty_3
DeleteProperty removes a specified property and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteProperty_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * property **required** `string`: The property id.

#### Output
* output [Empty](#empty)

### Registry_GetProperty_3
GetProperty returns a specified property.


```js
apigee_local_registry.Registry_GetProperty_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * property **required** `string`: The property id.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [Property](#property)

### Registry_UpdateProperty_3
UpdateProperty can be used to modify a specified property.


```js
apigee_local_registry.Registry_UpdateProperty_3({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "property": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * property **required** `string`: The property id.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_DeleteSpecRevision
DeleteSpecRevision deletes a revision of a spec.


```js
apigee_local_registry.Registry_DeleteSpecRevision({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.

#### Output
* output [Empty](#empty)

### Registry_ListSpecRevisionTags
ListSpecRevisionTags lists all revision tags defined for a spec.


```js
apigee_local_registry.Registry_ListSpecRevisionTags({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * page_size `string`: The maximum number of revision tags to return per page.
  * page_token `string`: The page token, received from a previous ListSpecRevisionTags call. Provide this to retrieve the subsequent page.

#### Output
* output [ListSpecRevisionTagsResponse](#listspecrevisiontagsresponse)

### Registry_ListSpecRevisions
ListSpecRevisions lists all revisions of a spec.


```js
apigee_local_registry.Registry_ListSpecRevisions({
  "project": "",
  "api": "",
  "version": "",
  "spec": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * page_size `string`: The maximum number of revisions to return per page.
  * page_token `string`: The page token, received from a previous ListSpecRevisions call. Provide this to retrieve the subsequent page.

#### Output
* output [ListSpecRevisionsResponse](#listspecrevisionsresponse)

### Registry_RollbackSpec
RollbackSpec sets the current revision to a specified prior revision. Note that this creates a new revision ID.


```js
apigee_local_registry.Registry_RollbackSpec({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * body **required** [RollbackSpecRequest](#rollbackspecrequest)

#### Output
* output [Spec](#spec)

### Registry_TagSpecRevision
TagSpecRevision adds a tag to a specified revision of a spec.


```js
apigee_local_registry.Registry_TagSpecRevision({
  "project": "",
  "api": "",
  "version": "",
  "spec": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * api **required** `string`: The api id.
  * version **required** `string`: The version id.
  * spec **required** `string`: The spec id.
  * body **required** [TagSpecRevisionRequest](#tagspecrevisionrequest)

#### Output
* output [Spec](#spec)

### Registry_ListLabels
ListLabels returns matching labels.


```js
apigee_local_registry.Registry_ListLabels({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * page_size `string`: The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLabels` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### Registry_CreateLabel
CreateLabel creates a specified label.


```js
apigee_local_registry.Registry_CreateLabel({
  "project": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * label_id `string`: The ID to use for the label, which will become the final component of the label's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Label](#label)

#### Output
* output [Label](#label)

### Registry_DeleteLabel
DeleteLabel removes a specified label and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteLabel({
  "project": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * label **required** `string`: The label id.

#### Output
* output [Empty](#empty)

### Registry_GetLabel
GetLabel returns a specified label.


```js
apigee_local_registry.Registry_GetLabel({
  "project": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * label **required** `string`: The label id.

#### Output
* output [Label](#label)

### Registry_ListProperties
ListProperties returns matching properties.


```js
apigee_local_registry.Registry_ListProperties({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * page_size `string`: The maximum number of properties to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
  * page_token `string`: A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
  * filter `string`: An expression that can be used to filter the list.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [ListPropertiesResponse](#listpropertiesresponse)

### Registry_CreateProperty
CreateProperty creates a specified property.


```js
apigee_local_registry.Registry_CreateProperty({
  "project": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * property_id `string`: The ID to use for the property, which will become the final component of the property's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_DeleteProperty
DeleteProperty removes a specified property and all of the resources that it owns.


```js
apigee_local_registry.Registry_DeleteProperty({
  "project": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * property **required** `string`: The property id.

#### Output
* output [Empty](#empty)

### Registry_GetProperty
GetProperty returns a specified property.


```js
apigee_local_registry.Registry_GetProperty({
  "project": "",
  "property": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * property **required** `string`: The property id.
  * view `string`: The level of detail to return (defaults to BASIC).

#### Output
* output [Property](#property)

### Registry_UpdateProperty
UpdateProperty can be used to modify a specified property.


```js
apigee_local_registry.Registry_UpdateProperty({
  "project": "",
  "property": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id.
  * property **required** `string`: The property id.
  * body **required** [Property](#property)

#### Output
* output [Property](#property)

### Registry_GetStatus
GetStatus returns the status of the service.


```js
apigee_local_registry.Registry_GetStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Status](#status)



## Definitions

### Any
* Any `object`: `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++.     Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     } Example 2: Pack and unpack a message in Java.     Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }  Example 3: Pack and unpack a message in Python.     foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...  Example 4: Pack and unpack a message in Go      foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:     package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }     {       "@type": "type.googleapis.com/google.profile.Person",       "firstName": <string>,       "lastName": <string>     } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):     {       "@type": "type.googleapis.com/google.protobuf.Duration",       "value": "1.212s"     }
  * type_url `string`: A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
  * value `string`: Must be a valid serialized protocol buffer of the above specified type.

### Api
* Api `object`: An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services.
  * availability `string`: A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".
  * create_time [Timestamp](#timestamp)
  * description `string`: A detailed description.
  * display_name `string`: Human-meaningful name.
  * name `string`: Resource name.
  * owner `string`: The owner of the the API.
  * recommended_version `string`: The recommended version of the API. Format: apis/{api}/versions/{version}
  * update_time [Timestamp](#timestamp)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:     service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     } The JSON representation for `Empty` is empty JSON object `{}`.

### Label
* Label `object`: Labels on resources. Labels are similar to properties but are in a separate namespace and without values.
  * create_time [Timestamp](#timestamp)
  * label `string`: Label name.
  * name `string`: Resource name.
  * subject `string`: Subject resource name.
  * update_time [Timestamp](#timestamp)

### ListApisResponse
* ListApisResponse `object`: Response message for ListApis.
  * apis `array`: The APIs from the specified publisher.
    * items [Api](#api)
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### ListLabelsResponse
* ListLabelsResponse `object`: Response message for ListLabels.
  * labels `array`: The labels from the specified publisher.
    * items [Label](#label)
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### ListProjectsResponse
* ListProjectsResponse `object`: Response message for ListProjects.
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * projects `array`: The projects from the specified publisher.
    * items [Project](#project)

### ListPropertiesResponse
* ListPropertiesResponse `object`: Response message for ListProperties.
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * properties `array`: The properties from the specified publisher.
    * items [Property](#property)

### ListSpecRevisionTagsResponse
* ListSpecRevisionTagsResponse `object`: Response message for ListSpecRevisionTagsResponse.
  * tags `array`: The revisions of the spec.
    * items [SpecRevisionTag](#specrevisiontag)
  * next_page_token `string`: A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### ListSpecRevisionsResponse
* ListSpecRevisionsResponse `object`: Response message for ListSpecRevisionsResponse.
  * next_page_token `string`: A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * specs `array`: The revisions of the spec.
    * items [Spec](#spec)

### ListSpecsResponse
* ListSpecsResponse `object`: Response message for ListSpecs.
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * specs `array`: The specs from the specified publisher.
    * items [Spec](#spec)

### ListVersionsResponse
* ListVersionsResponse `object`: Response message for ListVersions.
  * next_page_token `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * versions `array`: The versions from the specified publisher.
    * items [Version](#version)

### Project
* Project `object`: A Project is a top-level description of a collection of APIs. Typically there would be one project for an entire organization.
  * create_time [Timestamp](#timestamp)
  * description `string`: A detailed description.
  * display_name `string`: Human-meaningful name.
  * name `string`: Resource name.
  * update_time [Timestamp](#timestamp)

### Property
* Property `object`: Properties of resources. Properties are unique (single-value) per resource.
  * bool_value `boolean`: Boolean value of property.
  * bytes_value `string`: Bytes value of property.
  * create_time [Timestamp](#timestamp)
  * double_value `number`: Double value of property.
  * int64_value `integer`: Integer value of property.
  * message_value [Any](#any)
  * name `string`: Resource name.
  * relation `string`: Relation name.
  * string_value `string`: String value of property.
  * subject `string`: Subject resource name.
  * update_time [Timestamp](#timestamp)

### RollbackSpecRequest
* RollbackSpecRequest `object`: Request message for RollbackSpec.
  * name `string`: The spec being rolled back.
  * revision_id `string`: The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8

### Spec
* Spec `object`: A Spec describes a version of an API in a structured way. Specs provide formal descriptions that consumers can use to use a version. When specs consist of multiple files, each is a separate spec resource with its own name and a common value for the format property.
  * contents `string`: The contents of the spec file. Returned only when the FULL view is requested.
  * create_time [Timestamp](#timestamp)
  * description `string`: A detailed description.
  * filename `string`: A possibly-hierarchical name used to refer to the file from other files.
  * hash `string`: A hash of the spec file's contents
  * name `string`: Resource name.
  * revision_create_time [Timestamp](#timestamp)
  * revision_id `string`: The revision ID of the spec. A new revision is committed whenever the spec is changed in any way. The format is an 8-character hexadecimal string.
  * size_bytes `integer`: The size of the spec file in bytes.
  * source_uri `string`: The original source URI of the spec file (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the file is retrieved.
  * style `string`: A style (format) descriptor for this spec. Possible values include "proto3", "OpenAPI-2.0", "OpenAPI-3.0". This is free-form but we expect that it will eventually be quite structured with an "API Description Format" part and possible "API Style" parts, e.g. "OpenAPI-3.0+Google" for OpenAPI v3 with (hypothetical) Google style constraints.
  * update_time [Timestamp](#timestamp)

### SpecRevisionTag
* SpecRevisionTag `object`: SpecRevisionTags represent tags used to mark spec revisions.
  * name `string`: The resource name of the tag.
  * value `string`: The resource name at which the tag points.

### Status
* Status `object`: Response message for GetStatus.
  * message `string`: A string describing the status.

### TagSpecRevisionRequest
* TagSpecRevisionRequest `object`: Request message for TagSpecRevision.
  * name `string`: The name of the spec to be tagged, including the revision ID.
  * tag `string`: The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.

### Timestamp
* Timestamp `object`: A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. # Examples Example 1: Compute Timestamp from POSIX `time()`.     Timestamp timestamp;     timestamp.set_seconds(time(NULL));     timestamp.set_nanos(0); Example 2: Compute Timestamp from POSIX `gettimeofday()`.     struct timeval tv;     gettimeofday(&tv, NULL);     Timestamp timestamp;     timestamp.set_seconds(tv.tv_sec);     timestamp.set_nanos(tv.tv_usec * 1000); Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.     FILETIME ft;     GetSystemTimeAsFileTime(&ft);     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.     Timestamp timestamp;     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100)); Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.     long millis = System.currentTimeMillis();     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)         .setNanos((int) ((millis % 1000) * 1000000)).build(); Example 5: Compute Timestamp from current time in Python.     timestamp = Timestamp()     timestamp.GetCurrentTime() # JSON Mapping In JSON format, the Timestamp type is encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone is required. A proto3 JSON serializer should always use UTC (as indicated by "Z") when printing the Timestamp type and a proto3 JSON parser should be able to accept both UTC and other timezones (as indicated by an offset). For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on January 15, 2017. In JavaScript, one can convert a Date object to this format using the standard [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) method. In Python, a standard `datetime.datetime` object can be converted to this format using [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the Joda Time's [`ISODateTimeFormat.dateTime()`]( http://www.joda.org/joda-time/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime%2D%2D ) to obtain a formatter capable of generating timestamps in this format.
  * nanos `integer`: Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
  * seconds `integer`: Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.

### Version
* Version `object`: A Version describes a particular version of an API. Versions are what consumers actually use.
  * create_time [Timestamp](#timestamp)
  * description `string`: A detailed description.
  * display_name `string`: Human-meaningful name.
  * name `string`: Resource name.
  * state `string`: A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".
  * update_time [Timestamp](#timestamp)


