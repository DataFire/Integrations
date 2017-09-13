# @datafire/osisoft

Client library for PI Web API 2017 Swagger Spec

## Installation and Usage
```bash
npm install --save datafire @datafire/osisoft
```

```js
let datafire = require('datafire');
let osisoft = require('@datafire/osisoft').create();

osisoft.Point_GetMultiple({}).then(data => {
  console.log(data);
})
```

## Description
Swagger Spec file that describes PI Web API

## Actions
### Home_Get
Get top level links for this PI System Web API instance.


```js
osisoft.Home_Get(null, context)
```

#### Parameters
*This action has no parameters*

### Analysis_GetByPath
This method returns an Analysis based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.Analysis_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the Analysis.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_Delete
Delete an Analysis.


```js
osisoft.Analysis_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis to delete.

### Analysis_Get
Retrieve an Analysis.


```js
osisoft.Analysis_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_Update
Update an Analysis.


```js
osisoft.Analysis_Update({
  "webId": "",
  "analysis": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis to update.
* analysis (object) **required**

### Analysis_GetCategories
Get an Analysis' categories.


```js
osisoft.Analysis_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_GetSecurity
Get the security information of the specified security item associated with the Analysis for a specified user.


```js
osisoft.Analysis_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_GetSecurityEntries
Retrieve the security entries associated with the analysis based on the specified criteria. By default, all security entries for this analysis are returned.


```js
osisoft.Analysis_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_CreateSecurityEntry
Create a security entry owned by the analysis.


```js
osisoft.Analysis_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis, where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Analysis_DeleteSecurityEntry
Delete a security entry owned by the analysis.


```js
osisoft.Analysis_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis, where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Analysis_GetSecurityEntryByName
Retrieve the security entry associated with the analysis with the specified name.


```js
osisoft.Analysis_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Analysis_UpdateSecurityEntry
Update a security entry owned by the analysis.


```js
osisoft.Analysis_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the analysis, where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisCategory_GetByPath
Retrieve an analysis category by path.


```js
osisoft.AnalysisCategory_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target analysis category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisCategory_Delete
Delete an analysis category.


```js
osisoft.AnalysisCategory_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category to delete.

### AnalysisCategory_Get
Retrieve an analysis category.


```js
osisoft.AnalysisCategory_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisCategory_Update
Update an analysis category by replacing items in its definition.


```js
osisoft.AnalysisCategory_Update({
  "webId": "",
  "category": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category to update.
* category (object) **required**

### AnalysisCategory_GetSecurity
Get the security information of the specified security item associated with the analysis category for a specified user.


```js
osisoft.AnalysisCategory_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisCategory_GetSecurityEntries
Retrieve the security entries associated with the analysis category based on the specified criteria. By default, all security entries for this analysis category are returned.


```js
osisoft.AnalysisCategory_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisCategory_CreateSecurityEntry
Create a security entry owned by the analysis category.


```js
osisoft.AnalysisCategory_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis category, where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisCategory_DeleteSecurityEntry
Delete a security entry owned by the analysis category.


```js
osisoft.AnalysisCategory_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis category, where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisCategory_GetSecurityEntryByName
Retrieve the security entry associated with the analysis category with the specified name.


```js
osisoft.AnalysisCategory_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisCategory_UpdateSecurityEntry
Update a security entry owned by the analysis category.


```js
osisoft.AnalysisCategory_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the analysis category, where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisRulePlugIn_GetByPath
This method returns an Analysis Rule Plug-in based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AnalysisRulePlugIn_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the Analysis Rule Plug-in.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisRulePlugIn_Get
Retrieve an Analysis Rule Plug-in.


```js
osisoft.AnalysisRulePlugIn_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis Rule Plug-in.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisRule_GetByPath
This method returns an Analysis Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AnalysisRule_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the Analysis Rule.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisRule_Delete
Delete an Analysis Rule.


```js
osisoft.AnalysisRule_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis Rule.

### AnalysisRule_Get
Retrieve an Analysis Rule.


```js
osisoft.AnalysisRule_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis Rule.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisRule_Update
Update an Analysis Rule by replacing items in its definition.


```js
osisoft.AnalysisRule_Update({
  "webId": "",
  "analysisRule": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Analysis Rule.
* analysisRule (object) **required**

### AnalysisRule_GetAnalysisRules
Get the child Analysis Rules of the Analysis Rule.


```js
osisoft.AnalysisRule_GetAnalysisRules({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent Analysis Rule.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding Analysis Rules. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include Analysis Rules nested further than the immediate children of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### AnalysisRule_CreateAnalysisRule
Create a new Analysis Rule as a child of an existing Analysis Rule.


```js
osisoft.AnalysisRule_CreateAnalysisRule({
  "webId": "",
  "analysisRule": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent Analysis Rule, on which to create the child Analysis Rule.
* analysisRule (object) **required**

### AnalysisTemplate_GetByPath
This method returns an analysis template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AnalysisTemplate_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the analysis template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_CreateFromAnalysis
Create an Analysis template based upon a specified Analysis.


```js
osisoft.AnalysisTemplate_CreateFromAnalysis({
  "analysisWebId": ""
}, context)
```

#### Parameters
* analysisWebId (string) **required** - The ID of the Analysis, on which the template is created.
* name (string) - The name for the created template, which must be unique within the database's AnalysisTemplate collection. If the name ends with an asterisk (*), then a unique name will be generated based on the supplied name. The default is the specified Analysis' name suffixed with an asterisk (*).

### AnalysisTemplate_Delete
Deleting an analysis template will delete any anlysis which was created from it, unless the analysis is tied to a notification.


```js
osisoft.AnalysisTemplate_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template to update.

### AnalysisTemplate_Get
Retrieve an analysis template.


```js
osisoft.AnalysisTemplate_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_Update
Update an analysis template by replacing items in its definition.


```js
osisoft.AnalysisTemplate_Update({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template to update.
* template (object) **required**

### AnalysisTemplate_GetCategories
Get an analysis template's categories.


```js
osisoft.AnalysisTemplate_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_GetSecurity
Get the security information of the specified security item associated with the analysis template for a specified user.


```js
osisoft.AnalysisTemplate_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_GetSecurityEntries
Retrieve the security entries associated with the analysis template based on the specified criteria. By default, all security entries for this analysis template are returned.


```js
osisoft.AnalysisTemplate_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_CreateSecurityEntry
Create a security entry owned by the analysis template.


```js
osisoft.AnalysisTemplate_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the analysis template, where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisTemplate_DeleteSecurityEntry
Delete a security entry owned by the analysis template.


```js
osisoft.AnalysisTemplate_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis template, where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AnalysisTemplate_GetSecurityEntryByName
Retrieve the security entry associated with the analysis template with the specified name.


```js
osisoft.AnalysisTemplate_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the analysis template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AnalysisTemplate_UpdateSecurityEntry
Update a security entry owned by the analysis template.


```js
osisoft.AnalysisTemplate_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the analysis template, where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AssetDatabase_GetByPath
This method returns an asset database based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AssetDatabase_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_Delete
Delete an asset database.


```js
osisoft.AssetDatabase_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.

### AssetDatabase_Get
Retrieve an Asset Database.


```js
osisoft.AssetDatabase_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_Update
Update an asset database by replacing items in its definition.


```js
osisoft.AssetDatabase_Update({
  "webId": "",
  "database": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* database (object) **required**

### AssetDatabase_FindAnalyses
Users can search for the analyses based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the analyses that match the default search.


```js
osisoft.AssetDatabase_FindAnalyses({
  "webId": "",
  "field": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database to search for the analyses.
* field (array) **required** - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* query (string) - The query string used for finding analyses. The default is null.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### AssetDatabase_GetAnalysisCategories
Retrieve analysis categories for a given Asset Database.


```js
osisoft.AssetDatabase_GetAnalysisCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateAnalysisCategory
Create an analysis category at the Asset Database root.


```js
osisoft.AssetDatabase_CreateAnalysisCategory({
  "webId": "",
  "analysisCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the analysis category.
* analysisCategory (object) **required**

### AssetDatabase_GetAnalysisTemplates
Users can search for the analysis templates based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the templates that match the default search.


```js
osisoft.AssetDatabase_GetAnalysisTemplates({
  "webId": "",
  "field": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database to search.
* field (array) **required** - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* query (string) - The query string used for finding objects. The default is no query string.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.

### AssetDatabase_CreateAnalysisTemplate
Analyses that are based on an analysis template will inherit characteristics defined in the template.


```js
osisoft.AssetDatabase_CreateAnalysisTemplate({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the analysis template.
* template (object) **required**

### AssetDatabase_GetAttributeCategories
Retrieve attribute categories for a given Asset Database.


```js
osisoft.AssetDatabase_GetAttributeCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateAttributeCategory
Create an attribute category at the Asset Database root.


```js
osisoft.AssetDatabase_CreateAttributeCategory({
  "webId": "",
  "attributeCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the attribute category.
* attributeCategory (object) **required**

### AssetDatabase_FindElementAttributes
Retrieves a list of element attributes matching the specified filters from the specified asset database.


```js
osisoft.AssetDatabase_FindElementAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database to use as the root of the search.
* attributeCategory (string) - Specify that returned attributes must have this category. The default is no filter.
* attributeDescriptionFilter (string) - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* attributeNameFilter (string) - The attribute name filter string used for finding objects. The default is no filter.
* attributeType (string) - Specify that returned attributes' value type must be this value type. The default is no filter.
* elementCategory (string) - Specify that the owner of the returned attributes must have this category. The default is no filter.
* elementDescriptionFilter (string) - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* elementNameFilter (string) - The element name filter string used for finding objects. The default is no filter.
* elementTemplate (string) - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.
* elementType (string) - Specify that the element of the returned attributes must have this AFElementType. The default is no filter.
* maxCount (integer) - The maximum number of objects to be returned (the page size). The default is 1000.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### AssetDatabase_GetElementCategories
Retrieve element categories for a given Asset Database.


```js
osisoft.AssetDatabase_GetElementCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateElementCategory
Create an element category at the Asset Database root.


```js
osisoft.AssetDatabase_CreateElementCategory({
  "webId": "",
  "elementCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the element category.
* elementCategory (object) **required**

### AssetDatabase_GetElements
Users can search for the elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.


```js
osisoft.AssetDatabase_GetElements({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database to use as the root of the search.
* categoryName (string) - Specify that returned elements must have this category. The default is no category filter.
* descriptionFilter (string) - Specify that returned elements must have this description. The default is no description filter.
* elementType (string) - Specify that returned elements must have this type. The default type is 'Any'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding objects. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.

### AssetDatabase_CreateElement
Create a child element.


```js
osisoft.AssetDatabase_CreateElement({
  "webId": "",
  "element": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database on which to create the element.
* element (object) **required**

### AssetDatabase_GetElementTemplates
Users can search for the element and event frame template based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the templates that match the default search.


```js
osisoft.AssetDatabase_GetElementTemplates({
  "webId": "",
  "field": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database to search.
* field (array) **required** - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* query (string) - The query string used for finding objects. The default is no query string.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.

### AssetDatabase_CreateElementTemplate
Elements and event frames that are based on an element template will inherit characteristics defined in the template.


```js
osisoft.AssetDatabase_CreateElementTemplate({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the element template.
* template (object) **required**

### AssetDatabase_GetEnumerationSets
Retrieve enumeration sets for given asset database.


```js
osisoft.AssetDatabase_GetEnumerationSets({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateEnumerationSet
Create an enumeration set at the Asset Database.


```js
osisoft.AssetDatabase_CreateEnumerationSet({
  "webId": "",
  "enumerationSet": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the enumeration set.
* enumerationSet (object) **required**

### AssetDatabase_FindEventFrameAttributes
Retrieves a list of event frame attributes matching the specified filters from the specified asset database.


```js
osisoft.AssetDatabase_FindEventFrameAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database to use as the root of the search.
* attributeCategory (string) - Specify that returned attributes must have this category. The default is no filter.
* attributeDescriptionFilter (string) - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* attributeNameFilter (string) - The attribute name filter string used for finding objects. The default is no filter.
* attributeType (string) - Specify that returned attributes' value type must be this value type. The default is no filter.
* endTime (string) - A string representing the latest ending time for the event frames to be matched. The endTime must be greater than or equal to the startTime. The default is '*'.
* eventFrameCategory (string) - Specify that the owner of the returned attributes must have this category. The default is no filter.
* eventFrameDescriptionFilter (string) - The event frame description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* eventFrameNameFilter (string) - The event frame name filter string used for finding objects. The default is no filter.
* eventFrameTemplate (string) - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.
* maxCount (integer) - The maximum number of objects to be returned (the page size). The default is 1000.
* referencedElementNameFilter (string) - The name query string which must match the name of a referenced element. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frames.     The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.

### AssetDatabase_GetEventFrames
Retrieve event frames based on the specified conditions. By default, returns all children of the specified root resource with a start time in the past 8 hours.


```js
osisoft.AssetDatabase_GetEventFrames({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database to use as the root of the search.
* canBeAcknowledged (boolean) - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.
* categoryName (string) - Specify that returned event frames must have this category. The default is no category filter.
* endTime (string) - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* isAcknowledged (boolean) - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding event frames. The default is no filter.
* referencedElementNameFilter (string) - The name query string which must match the name of a referenced element. The default is no filter.
* referencedElementTemplateName (string) - Specify that returned event frames must have an element in the event frame's referenced elements collection that derives from the template. Specify this parameter by name.
* searchFullHierarchy (boolean) - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* severity (array) - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.
* templateName (string) - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.

### AssetDatabase_CreateEventFrame
Create an event frame.


```js
osisoft.AssetDatabase_CreateEventFrame({
  "webId": "",
  "eventFrame": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database on which to create the event frame.
* eventFrame (object) **required**

### AssetDatabase_Export
Export the asset database.


```js
osisoft.AssetDatabase_Export({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* endTime (string) - The latest ending time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*'.
* exportMode (array) - Indicates the type of export to perform. The default is 'StrongReferences'. Multiple export modes may be specified by using multiple instances of exportMode.
* startTime (string) - The earliest starting time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*-30d'.

### AssetDatabase_Import
Import an asset database.


```js
osisoft.AssetDatabase_Import({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database.
* importMode (array) - Indicates the type of import to perform. The default is 'AllowCreate | AllowUpdate | AutoCheckIn'. Multiple import modes may be specified by using multiple instances of importMode.

### AssetDatabase_RemoveReferencedElement
Remove a reference to an existing element from the specified database.


```js
osisoft.AssetDatabase_RemoveReferencedElement({
  "webId": "",
  "referencedElementWebId": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database which the referenced element will be removed from.
* referencedElementWebId (array) **required** - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.

### AssetDatabase_GetReferencedElements
Users can search for the referenced elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.


```js
osisoft.AssetDatabase_GetReferencedElements({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the resource to use as the root of the search.
* categoryName (string) - Specify that returned elements must have this category. The default is no category filter.
* descriptionFilter (string) - Specify that returned elements must have this description. The default is no description filter.
* elementType (string) - Specify that returned elements must have this type. The default type is 'Any'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding objects. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.

### AssetDatabase_AddReferencedElement
Add a reference to an existing element to the specified database.


```js
osisoft.AssetDatabase_AddReferencedElement({
  "webId": "",
  "referencedElementWebId": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database which the referenced element will be added to.
* referencedElementWebId (array) **required** - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.
* referenceType (string) - The name of the reference type between the parent and the referenced element. This must be a "strong" reference type. The default is "parent-child".

### AssetDatabase_GetSecurity
Get the security information of the specified security item associated with the asset database for a specified user.


```js
osisoft.AssetDatabase_GetSecurity({
  "webId": "",
  "securityItem": [],
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database for the security to be checked.
* securityItem (array) **required** - The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_GetSecurityEntries
Retrieve the security entries of the specified security item associated with the asset database based on the specified criteria. By default, all security entries for this asset database are returned.


```js
osisoft.AssetDatabase_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* securityItem (string) - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateSecurityEntry
Create a security entry owned by the asset database.


```js
osisoft.AssetDatabase_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset database where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created.

### AssetDatabase_DeleteSecurityEntry
Delete a security entry owned by the asset database.


```js
osisoft.AssetDatabase_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the asset database where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted.

### AssetDatabase_GetSecurityEntryByName
Retrieve the security entry of the specified security item associated with the asset database with the specified name.


```js
osisoft.AssetDatabase_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the asset database.
* securityItem (string) - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_UpdateSecurityEntry
Update a security entry owned by the asset database.


```js
osisoft.AssetDatabase_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the asset database where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated.

### AssetDatabase_GetTableCategories
Retrieve table categories for a given Asset Database.


```js
osisoft.AssetDatabase_GetTableCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateTableCategory
Create a table category on the Asset Database.


```js
osisoft.AssetDatabase_CreateTableCategory({
  "webId": "",
  "tableCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the table category.
* tableCategory (object) **required**

### AssetDatabase_GetTables
Retrieve tables for given Asset Database.


```js
osisoft.AssetDatabase_GetTables({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetDatabase_CreateTable
Create a table on the Asset Database.


```js
osisoft.AssetDatabase_CreateTable({
  "webId": "",
  "table": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the database in which to create the table.
* table (object) **required**

### AssetServer_List
Retrieve a list of all Asset Servers known to this service.


```js
osisoft.AssetServer_List({}, context)
```

#### Parameters
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetByName
This method returns an asset server based on the name associated with it. Users should primarily search with the WebID when available.


```js
osisoft.AssetServer_GetByName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetByPath
This method returns an asset server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AssetServer_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_Get
Retrieve an Asset Server.


```js
osisoft.AssetServer_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetAnalysisRulePlugIns
Retrieve a list of all Analysis Rule Plug-in's.


```js
osisoft.AssetServer_GetAnalysisRulePlugIns({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server, where the Analysis Rule Plug-in's are installed.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetDatabases
Retrieve a list of all Asset Databases on the specified Asset Server.


```js
osisoft.AssetServer_GetDatabases({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_CreateAssetDatabase
Create an asset database.


```js
osisoft.AssetServer_CreateAssetDatabase({
  "webId": "",
  "database": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server on which to create the database.
* database (object) **required**

### AssetServer_GetSecurity
Get the security information of the specified security item associated with the asset server for a specified user.


```js
osisoft.AssetServer_GetSecurity({
  "webId": "",
  "securityItem": [],
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server for the security to be checked.
* securityItem (array) **required** - The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetSecurityEntries
Retrieve the security entries of the specified security item associated with the asset server based on the specified criteria. By default, all security entries for this asset server are returned.


```js
osisoft.AssetServer_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* securityItem (string) - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_CreateSecurityEntry
Create a security entry owned by the asset server.


```js
osisoft.AssetServer_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created.

### AssetServer_DeleteSecurityEntry
Delete a security entry owned by the asset server.


```js
osisoft.AssetServer_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the asset server where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted.

### AssetServer_GetSecurityEntryByName
Retrieve the security entry of the specified security item associated with the asset server with the specified name.


```js
osisoft.AssetServer_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the asset server.
* securityItem (string) - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_UpdateSecurityEntry
Update a security entry owned by the asset server.


```js
osisoft.AssetServer_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the asset server where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.
* securityItem (string) - The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated.

### AssetServer_GetSecurityIdentities
Retrieve security identities based on the specified criteria. By default, all security identities in the specified Asset Server are returned.


```js
osisoft.AssetServer_GetSecurityIdentities({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server to search.
* field (string) - Specifies which of the object's properties are searched. The default is 'Name'.
* maxCount (integer) - The maximum number of objects to be returned. The default is 1000.
* query (string) - The query string used for finding objects. The default is no query string.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.

### AssetServer_CreateSecurityIdentity
Create a security identity.


```js
osisoft.AssetServer_CreateSecurityIdentity({
  "webId": "",
  "securityIdentity": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server on which to create the security identity.
* securityIdentity (object) **required**

### AssetServer_GetSecurityIdentitiesForUser
Retrieve security identities for a specific user.


```js
osisoft.AssetServer_GetSecurityIdentitiesForUser({
  "webId": "",
  "userIdentity": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* userIdentity (string) **required** - The user identity to search for.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetSecurityMappings
Retrieve security mappings based on the specified criteria. By default, all security mappings in the specified Asset Server are returned.


```js
osisoft.AssetServer_GetSecurityMappings({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server to search.
* field (string) - Specifies which of the object's properties are searched. The default is 'Name'.
* maxCount (integer) - The maximum number of objects to be returned. The default is 1000.
* query (string) - The query string used for finding objects. The default is no query string.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.

### AssetServer_CreateSecurityMapping
Create a security mapping.


```js
osisoft.AssetServer_CreateSecurityMapping({
  "webId": "",
  "securityMapping": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server on which to create the security mapping.
* securityMapping (object) **required**

### AssetServer_GetTimeRulePlugIns
Retrieve a list of all Time Rule Plug-in's.


```js
osisoft.AssetServer_GetTimeRulePlugIns({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the asset server, where the Time Rule Plug-in's are installed.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_GetUnitClasses
Retrieve a list of all unit classes on the specified Asset Server.


```js
osisoft.AssetServer_GetUnitClasses({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AssetServer_CreateUnitClass
Create a unit class in the specified Asset Server.


```js
osisoft.AssetServer_CreateUnitClass({
  "webId": "",
  "unitClass": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* unitClass (object) **required**

### AttributeCategory_GetByPath
Retrieve an attribute category by path.


```js
osisoft.AttributeCategory_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target attribute category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeCategory_Delete
Delete an attribute category.


```js
osisoft.AttributeCategory_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute category to delete.

### AttributeCategory_Get
Retrieve an attribute category.


```js
osisoft.AttributeCategory_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The id of the attribute category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeCategory_Update
Update an attribute category by replacing items in its definition.


```js
osisoft.AttributeCategory_Update({
  "webId": "",
  "category": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute category to update.
* category (object) **required**

### AttributeCategory_GetSecurity
Get the security information of the specified security item associated with the attribute category for a specified user.


```js
osisoft.AttributeCategory_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute category for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeCategory_GetSecurityEntries
Retrieve the security entries associated with the attribute category based on the specified criteria. By default, all security entries for this attribute category are returned.


```js
osisoft.AttributeCategory_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute category.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeCategory_CreateSecurityEntry
Create a security entry owned by the attribute category.


```js
osisoft.AttributeCategory_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute category where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AttributeCategory_DeleteSecurityEntry
Delete a security entry owned by the attribute category.


```js
osisoft.AttributeCategory_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the attribute category where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### AttributeCategory_GetSecurityEntryByName
Retrieve the security entry associated with the attribute category with the specified name.


```js
osisoft.AttributeCategory_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the attribute category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeCategory_UpdateSecurityEntry
Update a security entry owned by the attribute category.


```js
osisoft.AttributeCategory_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the attribute category where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Attribute_GetByPath
This method returns an attribute based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.Attribute_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the attribute.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Attribute_GetMultiple
Retrieve multiple attributes by web id or path.


```js
osisoft.Attribute_GetMultiple({}, context)
```

#### Parameters
* asParallel (boolean) - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.
* includeMode (string) - The include mode for the return list. The default is 'All'.
* path (array) - The path of an attribute. Multiple attributes may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* webId (array) - The ID of an attribute. Multiple attributes may be specified with multiple instances of the parameter.

### Attribute_Delete
Delete an attribute.


```js
osisoft.Attribute_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.

### Attribute_Get
Retrieve an attribute.


```js
osisoft.Attribute_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Attribute_Update
If an attribute is based on a template, the user must make sure to update the attribute appropriately so that it does not conflict with the template's design. Once a template is applied to an attribute, it can not be changed.


```js
osisoft.Attribute_Update({
  "webId": "",
  "attribute": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.
* attribute (object) **required**

### Attribute_GetAttributes
Get the child attributes of the specified attribute.


```js
osisoft.Attribute_GetAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent attribute.
* categoryName (string) - Specify that returned attributes must have this category. The default is no category filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned attributes must be members of this template. The default is no template filter.
* valueType (string) - Specify that returned attributes' value type must be the given value type. The default is no value type filter.

### Attribute_CreateAttribute
Create a new attribute as a child of the specified attribute.


```js
osisoft.Attribute_CreateAttribute({
  "webId": "",
  "attribute": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent attribute on which to create the attribute.
* attribute (object) **required**

### Attribute_GetCategories
Get an attribute's categories.


```js
osisoft.Attribute_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Attribute_CreateConfig
Create or update an attribute's DataReference configuration (Create/Update PI point for PI Point DataReference).


```js
osisoft.Attribute_CreateConfig({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.

### Attribute_GetValue
Get the attribute's value. This call is intended for use with attributes that have no data reference only. For attributes with a data reference, consult the documentation for Streams.


```js
osisoft.Attribute_GetValue({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Attribute_SetValue
Users must be aware of the value type that the attribute takes before changing the value. If a value entered by the user does not match the value type expressed in the attribute, it will not work or it will return an error. Users should also be careful of what the value type means, for instance, if a value type accepts strings and the user enters a number, the attribute will interpret it as a string of characters and not as the integer value that the user may have wanted.


```js
osisoft.Attribute_SetValue({
  "webId": "",
  "value": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute.
* value (object) **required**

### AttributeTemplate_GetByPath
This method returns an attribute template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.AttributeTemplate_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the attribute template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeTemplate_Delete
Deleting an attribute template will delete the attributes that were created based on the template


```js
osisoft.AttributeTemplate_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute template.

### AttributeTemplate_Get
Retrieve an attribute template.


```js
osisoft.AttributeTemplate_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeTemplate_Update
Updating an attribute template will propagate changes to the attributes that were created based on the template


```js
osisoft.AttributeTemplate_Update({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute template.
* template (object) **required**

### AttributeTemplate_GetAttributeTemplates
Retrieve an attribute template's child attribute templates.


```js
osisoft.AttributeTemplate_GetAttributeTemplates({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeTemplate_CreateAttributeTemplate
Create an attribute template as a child of another attribute template.


```js
osisoft.AttributeTemplate_CreateAttributeTemplate({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent attribute template on which to create the attribute template.
* template (object) **required**

### AttributeTemplate_GetCategories
Get an attribute template's categories.


```js
osisoft.AttributeTemplate_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the attribute template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeTrait_GetByCategory
Retrieve all attribute traits of the specified category/categories.


```js
osisoft.AttributeTrait_GetByCategory({
  "category": []
}, context)
```

#### Parameters
* category (array) **required** - The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is "all", then all attribute traits of all categories will be returned.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### AttributeTrait_Get
Retrieve an attribute trait.


```js
osisoft.AttributeTrait_Get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name or abbreviation of the attribute trait.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Batch_Execute
Execute a batch of requests against the service. As shown in the Sample Request, the input is a dictionary with IDs as keys and request objects as values. Each request object specifies the HTTP method and the resource and, optionally, the content and a list of parent IDs. The list of parent IDs specifies which other requests must complete before the given request will be executed. The example first creates an element, then gets the element by the response's Location header, then creates an attribute for the element. Note that the resource can be an absolute URL or a JsonPath that references the response to the parent request. The batch's response is a dictionary uses keys corresponding those provided in the request, with response objects containing a status code, response headers, and the response body. A request can alternatively specify a request template in place of a resource. In this case, a single JsonPath may select multiple tokens, and a separate subrequest will be made from the template for each token. The responses of these subrequests will returned as the content of a single outer response.


```js
osisoft.Batch_Execute({
  "batch": {}
}, context)
```

#### Parameters
* batch (object) **required**

### Calculation_GetAtIntervals
Returns results of evaluating the expression over the time range from the start time to the end time at a defined interval.


```js
osisoft.Calculation_GetAtIntervals({}, context)
```

#### Parameters
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* expression (string) - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
* sampleInterval (string) - A time span specifies how often the filter expression is evaluated when computing the summary for an interval.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* webId (string) - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.

### Calculation_GetAtRecorded
Returns the result of evaluating the expression at each point in time over the time range from the start time to the end time where a recorded value exists for a member of the expression.


```js
osisoft.Calculation_GetAtRecorded({}, context)
```

#### Parameters
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* expression (string) - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* webId (string) - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.

### Calculation_GetSummary
Returns the result of evaluating the expression over the time range from the start time to the end time. The time range is first divided into a number of summary intervals. Then the calculation is performed for the specified summaries over each interval.


```js
osisoft.Calculation_GetSummary({}, context)
```

#### Parameters
* calculationBasis (string) - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* expression (string) - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
* sampleInterval (string) - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.
* sampleType (string) - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* summaryDuration (string) - The duration of each summary interval.
* summaryType (array) - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.
* timeType (string) - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.
* webId (string) - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.

### Calculation_GetAtTimes
Returns the result of evaluating the expression at the specified timestamps.


```js
osisoft.Calculation_GetAtTimes({}, context)
```

#### Parameters
* expression (string) - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* time (array) - A list of timestamps at which to calculate the expression.
* webId (string) - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.

### Channel_Instances
Retrieves a list of currently running channel instances.


```js
osisoft.Channel_Instances(null, context)
```

#### Parameters
*This action has no parameters*

### DataServer_List
This method returns a list of all available known Data Servers that the user can connect to. Even though a server may be returned in the list, the user may not have permission to access it.


```js
osisoft.DataServer_List({}, context)
```

#### Parameters
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### DataServer_GetByName
This method returns a data server based on the name. Users should primarily search with the WebID when available.


```js
osisoft.DataServer_GetByName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### DataServer_GetByPath
This method returns a data server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.DataServer_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the server. Note that the path supplied to this method must be of the form '\\servername'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### DataServer_Get
Retrieve a Data Server.


```js
osisoft.DataServer_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### DataServer_GetEnumerationSets
Retrieve enumeration sets for given Data Server.


```js
osisoft.DataServer_GetEnumerationSets({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### DataServer_CreateEnumerationSet
Create an enumeration set on the Data Server.


```js
osisoft.DataServer_CreateEnumerationSet({
  "webId": "",
  "enumerationSet": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server on which to create the enumeration set.
* enumerationSet (object) **required**

### DataServer_GetPoints
Users can search for the data servers based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the data servers that match the default search.


```js
osisoft.DataServer_GetPoints({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - A query string for filtering by point name. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is '0'.

### DataServer_CreatePoint
Create a point in the specified Data Server.


```js
osisoft.DataServer_CreatePoint({
  "webId": "",
  "pointDTO": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* pointDTO (object) **required**

### ElementCategory_GetByPath
Retrieve an element category by path.


```js
osisoft.ElementCategory_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target element category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementCategory_Delete
Delete an element category.


```js
osisoft.ElementCategory_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element category to delete.

### ElementCategory_Get
Retrieve an element category.


```js
osisoft.ElementCategory_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The id of the element category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementCategory_Update
Update an element category by replacing items in its definition.


```js
osisoft.ElementCategory_Update({
  "webId": "",
  "elementCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element category to update.
* elementCategory (object) **required**

### ElementCategory_GetSecurity
Get the security information of the specified security item associated with the element category for a specified user.


```js
osisoft.ElementCategory_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element category for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementCategory_GetSecurityEntries
Retrieve the security entries associated with the element category based on the specified criteria. By default, all security entries for this element category are returned.


```js
osisoft.ElementCategory_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element category.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementCategory_CreateSecurityEntry
Create a security entry owned by the element category.


```js
osisoft.ElementCategory_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element category where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### ElementCategory_DeleteSecurityEntry
Delete a security entry owned by the element category.


```js
osisoft.ElementCategory_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element category where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### ElementCategory_GetSecurityEntryByName
Retrieve the security entry associated with the element category with the specified name.


```js
osisoft.ElementCategory_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementCategory_UpdateSecurityEntry
Update a security entry owned by the element category.


```js
osisoft.ElementCategory_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the element category where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Element_GetByPath
This method returns an element based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.Element_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the element.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_GetMultiple
Retrieve multiple elements by web id or path.


```js
osisoft.Element_GetMultiple({}, context)
```

#### Parameters
* asParallel (boolean) - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.
* includeMode (string) - The include mode for the return list. The default is 'All'.
* path (array) - The path of an element. Multiple elements may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* webId (array) - The ID of an element. Multiple elements may be specified with multiple instances of the parameter.

### Element_CreateSearchByAttribute
Create a link for a "Search Elements By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.


```js
osisoft.Element_CreateSearchByAttribute(null, context)
```

#### Parameters
*This action has no parameters*

### Element_ExecuteSearchByAttribute
Execute a "Search Elements By Attribute Value" operation.


```js
osisoft.Element_ExecuteSearchByAttribute({
  "searchId": ""
}, context)
```

#### Parameters
* searchId (string) **required** - The encoded search Id of the "Search Elements By Attribute Value" operation.
* categoryName (string) - Specify that the owner of the returned attributes must have this category. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* descriptionFilter (string) - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* maxCount (integer) - The maximum number of objects to be returned. The default is 1000.
* nameFilter (string) - The name query string used for finding objects. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### Element_Delete
Delete an element.


```js
osisoft.Element_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.

### Element_Get
Retrieve an element.


```js
osisoft.Element_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_Update
Update an element by replacing items in its definition.


```js
osisoft.Element_Update({
  "webId": "",
  "element": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* element (object) **required**

### Element_GetAnalyses
Users can search for the analyses based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the analyses that match the default search.


```js
osisoft.Element_GetAnalyses({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element, which is the Target of the analyses.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### Element_CreateAnalysis
Create an Analysis.


```js
osisoft.Element_CreateAnalysis({
  "webId": "",
  "analysis": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element on which to create the Analysis.
* analysis (object) **required**

### Element_GetAttributes
Get the attributes of the specified element.


```js
osisoft.Element_GetAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* categoryName (string) - Specify that returned attributes must have this category. The default is no category filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned attributes must be members of this template. The default is no template filter.
* valueType (string) - Specify that returned attributes' value type must be the given value type. The default is no value type filter.

### Element_CreateAttribute
Create a new attribute of the specified element.


```js
osisoft.Element_CreateAttribute({
  "webId": "",
  "attribute": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element on which to create the attribute.
* attribute (object) **required**

### Element_GetCategories
Get an element's categories.


```js
osisoft.Element_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_CreateConfig
Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.


```js
osisoft.Element_CreateConfig({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* includeChildElements (boolean) - If true, includes the child elements of the specified element.

### Element_FindElementAttributes
Retrieves a list of element attributes matching the specified filters from the specified element.


```js
osisoft.Element_FindElementAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element to use as the root of the search.
* attributeCategory (string) - Specify that returned attributes must have this category. The default is no filter.
* attributeDescriptionFilter (string) - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* attributeNameFilter (string) - The attribute name filter string used for finding objects. The default is no filter.
* attributeType (string) - Specify that returned attributes' value type must be this value type. The default is no filter.
* elementCategory (string) - Specify that the owner of the returned attributes must have this category. The default is no filter.
* elementDescriptionFilter (string) - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* elementNameFilter (string) - The element name filter string used for finding objects. The default is no filter.
* elementTemplate (string) - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.
* elementType (string) - Specify that the element of the returned attributes must have this AFElementType. The default is no filter.
* maxCount (integer) - The maximum number of objects to be returned (the page size). The default is 1000.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.

### Element_GetElements
Users can search for the elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.


```js
osisoft.Element_GetElements({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element to use as the root of the search.
* categoryName (string) - Specify that returned elements must have this category. The default is no category filter.
* descriptionFilter (string) - Specify that returned elements must have this description. The default is no description filter.
* elementType (string) - Specify that returned elements must have this type. The default type is 'Any'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding objects. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.

### Element_CreateElement
Create a child element.


```js
osisoft.Element_CreateElement({
  "webId": "",
  "element": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent element on which to create the element.
* element (object) **required**

### Element_GetEventFrames
Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element with a start time in the past 8 hours.


```js
osisoft.Element_GetEventFrames({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element whose related event frames are sought.
* canBeAcknowledged (boolean) - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.
* categoryName (string) - Specify that returned event frames must have this category. The default is no category filter.
* endTime (string) - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* isAcknowledged (boolean) - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding event frames. The default is no filter.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* severity (array) - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.
* templateName (string) - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.

### Element_RemoveReferencedElement
Remove a reference to an existing element from the child elements collection.


```js
osisoft.Element_RemoveReferencedElement({
  "webId": "",
  "referencedElementWebId": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element which the referenced element will be removed from.
* referencedElementWebId (array) **required** - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.

### Element_GetReferencedElements
Users can search for the referenced elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.


```js
osisoft.Element_GetReferencedElements({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the resource to use as the root of the search.
* categoryName (string) - Specify that returned elements must have this category. The default is no category filter.
* descriptionFilter (string) - Specify that returned elements must have this description. The default is no description filter.
* elementType (string) - Specify that returned elements must have this type. The default type is 'Any'.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding objects. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.

### Element_AddReferencedElement
Add a reference to an existing element to the child elements collection.


```js
osisoft.Element_AddReferencedElement({
  "webId": "",
  "referencedElementWebId": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element which the referenced element will be added to.
* referencedElementWebId (array) **required** - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.
* referenceType (string) - The name of the reference type between the parent and the referenced element. The default is "parent-child".

### Element_GetSecurity
Get the security information of the specified security item associated with the element for a specified user.


```js
osisoft.Element_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_GetSecurityEntries
Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.


```js
osisoft.Element_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_CreateSecurityEntry
Create a security entry owned by the element.


```js
osisoft.Element_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Element_DeleteSecurityEntry
Delete a security entry owned by the element.


```js
osisoft.Element_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Element_GetSecurityEntryByName
Retrieve the security entry associated with the element with the specified name.


```js
osisoft.Element_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Element_UpdateSecurityEntry
Update a security entry owned by the element.


```js
osisoft.Element_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the element where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### ElementTemplate_GetByPath
This method returns an element template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.ElementTemplate_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_Delete
Deleting an element template will delete all associated templated data from elements which were created from it.


```js
osisoft.ElementTemplate_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template to update.

### ElementTemplate_Get
Retrieve an element template.


```js
osisoft.ElementTemplate_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_Update
Updating the InstanceType property of an element template will not affect any elements that have already been created from this template; it will only affect any future elements created from this template. All other changes will be propagated to elements based on this template.


```js
osisoft.ElementTemplate_Update({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template to update.
* template (object) **required**

### ElementTemplate_GetAnalysisTemplates
Get analysis templates for an element template.


```js
osisoft.ElementTemplate_GetAnalysisTemplates({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_GetAttributeTemplates
Get child attribute templates for an element template.


```js
osisoft.ElementTemplate_GetAttributeTemplates({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showInherited (boolean) - Specifies if the result should include attribute templates inherited from base element templates. The default is 'false'.

### ElementTemplate_CreateAttributeTemplate
Create an attribute template.


```js
osisoft.ElementTemplate_CreateAttributeTemplate({
  "webId": "",
  "template": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template on which to create the attribute template.
* template (object) **required**

### ElementTemplate_GetCategories
Get an element template's categories.


```js
osisoft.ElementTemplate_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showInherited (boolean) - Specifies if the result should include categories inherited from base element templates. The default is 'false'.

### ElementTemplate_GetSecurity
Get the security information of the specified security item associated with the element template for a specified user.


```js
osisoft.ElementTemplate_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_GetSecurityEntries
Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.


```js
osisoft.ElementTemplate_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_CreateSecurityEntry
Create a security entry owned by the element template.


```js
osisoft.ElementTemplate_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the element template where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### ElementTemplate_DeleteSecurityEntry
Delete a security entry owned by the element template.


```js
osisoft.ElementTemplate_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element template where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### ElementTemplate_GetSecurityEntryByName
Retrieve the security entry associated with the element template with the specified name.


```js
osisoft.ElementTemplate_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the element template.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### ElementTemplate_UpdateSecurityEntry
Update a security entry owned by the element template.


```js
osisoft.ElementTemplate_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the element template where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EnumerationSet_GetByPath
This method returns an enumeration set based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.EnumerationSet_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target enumeration set.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_Delete
Delete an enumeration set.


```js
osisoft.EnumerationSet_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set to delete.

### EnumerationSet_Get
Retrieve an enumeration set.


```js
osisoft.EnumerationSet_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_Update
Update an enumeration set by replacing items in its definition.


```js
osisoft.EnumerationSet_Update({
  "webId": "",
  "enumerationSet": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set to update.
* enumerationSet (object) **required**

### EnumerationSet_GetValues
Retrieve an enumeration set's values.


```js
osisoft.EnumerationSet_GetValues({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_CreateValue
Create an enumeration value for a enumeration set.


```js
osisoft.EnumerationSet_CreateValue({
  "webId": "",
  "enumerationValue": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set on which to create the enumeration value.
* enumerationValue (object) **required**

### EnumerationSet_GetSecurity
Get the security information of the specified security item associated with the enumeration set for a specified user.


```js
osisoft.EnumerationSet_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_GetSecurityEntries
Retrieve the security entries associated with the enumeration set based on the specified criteria. By default, all security entries for this enumeration set are returned.


```js
osisoft.EnumerationSet_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_CreateSecurityEntry
Create a security entry owned by the enumeration set.


```js
osisoft.EnumerationSet_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration set where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EnumerationSet_DeleteSecurityEntry
Delete a security entry owned by the enumeration set.


```js
osisoft.EnumerationSet_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the enumeration set where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EnumerationSet_GetSecurityEntryByName
Retrieve the security entry associated with the enumeration set with the specified name.


```js
osisoft.EnumerationSet_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the enumeration set.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationSet_UpdateSecurityEntry
Update a security entry owned by the enumeration set.


```js
osisoft.EnumerationSet_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the enumeration set where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EnumerationValue_GetByPath
This method returns a enumeration value based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.EnumerationValue_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target enumeration value.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationValue_DeleteEnumerationValue
Deleting a value will remove it from the enumeration set along with any value references within the PI Web API system.


```js
osisoft.EnumerationValue_DeleteEnumerationValue({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration value.

### EnumerationValue_Get
Retrieve an enumeration value mapping


```js
osisoft.EnumerationValue_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration value.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EnumerationValue_UpdateEnumerationValue
Update an enumeration value by replacing items in its definition.


```js
osisoft.EnumerationValue_UpdateEnumerationValue({
  "webId": "",
  "enumerationValue": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the enumeration value to update.
* enumerationValue (object) **required**

### EventFrame_GetByPath
This method returns an event frame based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.EventFrame_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_GetMultiple
Retrieve multiple event frames by web ids or paths.


```js
osisoft.EventFrame_GetMultiple({}, context)
```

#### Parameters
* asParallel (boolean) - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.
* includeMode (string) - The include mode for the return list. The default is 'All'.
* path (array) - The path of an event frame. Multiple event frames may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* webId (array) - The ID of an event frame. Multiple event frames may be specified with multiple instances of the parameter.

### EventFrame_CreateSearchByAttribute
Create a link for a "Search EventFrames By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root EventFrame. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the EventFrames. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.


```js
osisoft.EventFrame_CreateSearchByAttribute(null, context)
```

#### Parameters
*This action has no parameters*

### EventFrame_ExecuteSearchByAttribute
Execute a "Search EventFrames By Attribute Value" operation.


```js
osisoft.EventFrame_ExecuteSearchByAttribute({
  "searchId": ""
}, context)
```

#### Parameters
* searchId (string) **required** - The encoded search Id of the "Search EventFrames By Attribute Value" operation.
* canBeAcknowledged (boolean) - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.
* endTime (string) - The ending time for the search. endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*'.
* isAcknowledged (boolean) - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding event frames. The default is no filter.
* referencedElementNameFilter (string) - The name query string which must match the name of a referenced element. The default is no filter.
* searchFullHierarchy (boolean) - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* severity (array) - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.

### EventFrame_Delete
Delete an event frame.


```js
osisoft.EventFrame_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame to delete.

### EventFrame_Get
Retrieve an event frame.


```js
osisoft.EventFrame_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_Update
Update an event frame by replacing items in its definition.


```js
osisoft.EventFrame_Update({
  "webId": "",
  "eventFrame": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame to update.
* eventFrame (object) **required**

### EventFrame_Acknowledge
Calls the EventFrame's Acknowledge method.


```js
osisoft.EventFrame_Acknowledge({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.

### EventFrame_GetAnnotations
Get an event frame's annotations.


```js
osisoft.EventFrame_GetAnnotations({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the owner event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_CreateAnnotation
Create an annotation on an event frame.


```js
osisoft.EventFrame_CreateAnnotation({
  "webId": "",
  "annotation": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the owner event frame on which to create the annotation.
* annotation (object) **required**

### EventFrame_DeleteAnnotation
Delete an annotation on an event frame.


```js
osisoft.EventFrame_DeleteAnnotation({
  "id": "",
  "webId": ""
}, context)
```

#### Parameters
* id (string) **required** - The Annotation identifier of the annotation to be deleted.
* webId (string) **required** - The ID of the owner event frame of the annotation to delete.

### EventFrame_GetAnnotationById
Get a specific annotation on an event frame.


```js
osisoft.EventFrame_GetAnnotationById({
  "id": "",
  "webId": ""
}, context)
```

#### Parameters
* id (string) **required** - The Annotation identifier of the specific annotation.
* webId (string) **required** - The ID of the owner event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_UpdateAnnotation
Update an annotation on an event frame by replacing items in its definition.


```js
osisoft.EventFrame_UpdateAnnotation({
  "id": "",
  "webId": "",
  "annotation": {}
}, context)
```

#### Parameters
* id (string) **required** - The Annotation identifier of the annotation to be updated.
* webId (string) **required** - The ID of the owner event frame of the annotation to update.
* annotation (object) **required**

### EventFrame_GetAttributes
Get the attributes of the specified event frame.


```js
osisoft.EventFrame_GetAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.
* categoryName (string) - Specify that returned attributes must have this category. The default is no category filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* templateName (string) - Specify that returned attributes must be members of this template. The default is no template filter.
* valueType (string) - Specify that returned attributes' value type must be the given value type. The default is no value type filter.

### EventFrame_CreateAttribute
Create a new attribute of the specified event frame.


```js
osisoft.EventFrame_CreateAttribute({
  "webId": "",
  "attribute": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame on which to create the attribute.
* attribute (object) **required**

### EventFrame_CaptureValues
Calls the EventFrame's CaptureValues method.


```js
osisoft.EventFrame_CaptureValues({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.

### EventFrame_GetCategories
Get an event frame's categories.


```js
osisoft.EventFrame_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_CreateConfig
Executes the create configuration function of the data references found within the attributes of the event frame, and optionally, its children.


```js
osisoft.EventFrame_CreateConfig({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.
* includeChildElements (boolean) - If true, includes the child event frames of the specified event frame.

### EventFrame_FindEventFrameAttributes
Retrieves a list of event frame attributes matching the specified filters from the specified event frame.


```js
osisoft.EventFrame_FindEventFrameAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame to use as the root of the search.
* attributeCategory (string) - Specify that returned attributes must have this category. The default is no filter.
* attributeDescriptionFilter (string) - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* attributeNameFilter (string) - The attribute name filter string used for finding objects. The default is no filter.
* attributeType (string) - Specify that returned attributes' value type must be this value type. The default is no filter.
* endTime (string) - A string representing the latest ending time for the event frames to be matched. The endTime must be greater than or equal to the startTime. The default is '*'.
* eventFrameCategory (string) - Specify that the owner of the returned attributes must have this category. The default is no filter.
* eventFrameDescriptionFilter (string) - The event frame description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.
* eventFrameNameFilter (string) - The event frame name filter string used for finding objects. The default is no filter.
* eventFrameTemplate (string) - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.
* maxCount (integer) - The maximum number of objects to be returned (the page size). The default is 1000.
* referencedElementNameFilter (string) - The name query string which must match the name of a referenced element. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frames.     The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.

### EventFrame_GetEventFrames
Retrieve event frames based on the specified conditions. By default, returns all children of the specified root event frame with a start time in the past 8 hours.


```js
osisoft.EventFrame_GetEventFrames({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame to use as the root of the search.
* canBeAcknowledged (boolean) - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.
* categoryName (string) - Specify that returned event frames must have this category. The default is no category filter.
* endTime (string) - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* isAcknowledged (boolean) - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.
* maxCount (integer) - The maximum number of objects to be returned per call (page size). The default is 1000.
* nameFilter (string) - The name query string used for finding event frames. The default is no filter.
* referencedElementNameFilter (string) - The name query string which must match the name of a referenced element. The default is no filter.
* referencedElementTemplateName (string) - Specify that returned event frames must have an element in the event frame's referenced elements collection that derives from the template. Specify this parameter by name.
* searchFullHierarchy (boolean) - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.
* searchMode (string) - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* severity (array) - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.
* sortField (string) - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.
* startIndex (integer) - The starting index (zero based) of the items to be returned. The default is 0.
* startTime (string) - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.
* templateName (string) - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.

### EventFrame_CreateEventFrame
Create an event frame as a child of the specified event frame.


```js
osisoft.EventFrame_CreateEventFrame({
  "webId": "",
  "eventFrame": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent event frame on which to create the event frame.
* eventFrame (object) **required**

### EventFrame_GetReferencedElements
Retrieve the event frame's referenced elements.


```js
osisoft.EventFrame_GetReferencedElements({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame whose referenced elements should be retrieved.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_GetSecurity
Get the security information of the specified security item associated with the event frame for a specified user.


```js
osisoft.EventFrame_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_GetSecurityEntries
Retrieve the security entries associated with the event frame based on the specified criteria. By default, all security entries for this event frame are returned.


```js
osisoft.EventFrame_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_CreateSecurityEntry
Create a security entry owned by the event frame.


```js
osisoft.EventFrame_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the event frame where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EventFrame_DeleteSecurityEntry
Delete a security entry owned by the event frame.


```js
osisoft.EventFrame_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the event frame where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### EventFrame_GetSecurityEntryByName
Retrieve the security entry associated with the event frame with the specified name.


```js
osisoft.EventFrame_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the event frame.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### EventFrame_UpdateSecurityEntry
Update a security entry owned by the event frame.


```js
osisoft.EventFrame_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the event frame where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Point_GetByPath
This method returns a PI Point based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.Point_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the point.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Point_GetMultiple
Retrieve multiple points by web id or path.


```js
osisoft.Point_GetMultiple({}, context)
```

#### Parameters
* asParallel (boolean) - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested points. The default is 'false'.
* includeMode (string) - The include mode for the return list. The default is 'All'.
* path (array) - The path of a point. Multiple points may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* webId (array) - The ID of a point. Multiple points may be specified with multiple instances of the parameter.

### Point_Delete
Delete a point.


```js
osisoft.Point_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the point.

### Point_Get
Get a point.


```js
osisoft.Point_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the point.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Point_Update
Update a point.


```js
osisoft.Point_Update({
  "webId": "",
  "pointDTO": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the point.
* pointDTO (object) **required**

### Point_GetAttributes
Get point attributes.


```js
osisoft.Point_GetAttributes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the point.
* name (array) - The name of a point attribute to be returned. Multiple attributes may be specified with multiple instances of the parameter.
* nameFilter (string) - The filter to the names of the list of point attributes to be returned. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Point_GetAttributeByName
Get a point attribute by name.


```js
osisoft.Point_GetAttributeByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the attribute.
* webId (string) **required** - The ID of the point.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_GetByPath
This method returns a security identity based on the path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.SecurityIdentity_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the security identity.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_Delete
Delete a security identity.


```js
osisoft.SecurityIdentity_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity.

### SecurityIdentity_Get
Retrieve a security identity.


```js
osisoft.SecurityIdentity_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_Update
Update a security identity by replacing items in its definition.


```js
osisoft.SecurityIdentity_Update({
  "webId": "",
  "securityIdentity": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity.
* securityIdentity (object) **required**

### SecurityIdentity_GetSecurity
Get the security information of the specified security item associated with the security identity for a specified user.


```js
osisoft.SecurityIdentity_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_GetSecurityEntries
Retrieve the security entries associated with the security identity based on the specified criteria. By default, all security entries for this security identity are returned.


```js
osisoft.SecurityIdentity_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_GetSecurityEntryByName
Retrieve the security entry associated with the security identity with the specified name.


```js
osisoft.SecurityIdentity_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the security identity.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityIdentity_GetSecurityMappings
Get security mappings for the specified security identity.


```js
osisoft.SecurityIdentity_GetSecurityMappings({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security identity.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityMapping_GetByPath
This method returns a security mapping based on the path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.SecurityMapping_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the security mapping.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityMapping_Delete
Delete a security mapping.


```js
osisoft.SecurityMapping_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security mapping.

### SecurityMapping_Get
Retrieve a security mapping.


```js
osisoft.SecurityMapping_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security mapping.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityMapping_Update
Update a security mapping by replacing items in its definition.


```js
osisoft.SecurityMapping_Update({
  "webId": "",
  "securityMapping": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security mapping.
* securityMapping (object) **required**

### SecurityMapping_GetSecurity
Get the security information of the specified security item associated with the security mapping for a specified user.


```js
osisoft.SecurityMapping_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security mapping for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityMapping_GetSecurityEntries
Retrieve the security entries associated with the security mapping based on the specified criteria. By default, all security entries for this security mapping are returned.


```js
osisoft.SecurityMapping_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the security mapping.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### SecurityMapping_GetSecurityEntryByName
Retrieve the security entry associated with the security mapping with the specified name.


```js
osisoft.SecurityMapping_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the security mapping.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Stream_GetChannel
Opens a channel that will send messages about any value changes for the specified stream.


```js
osisoft.Stream_GetChannel({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* includeInitialValues (boolean) - Specified if the channel should send a message with the current value of the stream after the connection is opened. The default is 'false'.

### Stream_GetEnd
Returns the end-of-stream value of the stream.


```js
osisoft.Stream_GetEnd({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Stream_GetInterpolated
Retrieves interpolated values over the specified time range at the specified sampling interval.


```js
osisoft.Stream_GetInterpolated({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* interval (string) - The sampling interval, in AFTimeSpan format.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetInterpolatedAtTimes
Retrieves interpolated values over the specified time range at the specified sampling interval.


```js
osisoft.Stream_GetInterpolatedAtTimes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* time (array) - The timestamp at which to retrieve an interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetPlot
For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).


```js
osisoft.Stream_GetPlot({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* intervals (integer) - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetRecorded
Returned times are affected by the specified boundary type. If no values are found for the time range and conditions specified then the HTTP response will be success, with a body containing an empty array of Items. When specifying true for the includeFilteredValues parameter, consecutive filtered events are not returned. The first value that would be filtered out is returned with its time and the enumeration value "Filtered". The next value in the collection will be the next compressed value in the specified direction that passes the filter criteria - if any. When both boundaryType and a filterExpression are specified, the events returned for the boundary condition specified are passed through the filter. If the includeFilteredValues parameter is true, the boundary values will be reported at the proper timestamps with the enumeration value "Filtered" when the filter conditions are not met at the boundary time. If the includeFilteredValues parameter is false for this case, no event is returned for the boundary time.


```js
osisoft.Stream_GetRecorded({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* boundaryType (string) - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* maxCount (integer) - The maximum number of values to be returned. The default is 1000.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_UpdateValues
Updates multiple values for the specified stream.


```js
osisoft.Stream_UpdateValues({
  "webId": "",
  "values": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* values (array) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'.

### Stream_GetRecordedAtTime
Returns a single recorded value based on the passed time and retrieval mode from the stream.


```js
osisoft.Stream_GetRecordedAtTime({
  "webId": "",
  "time": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* time (string) **required** - The timestamp at which the value is desired.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* retrievalMode (string) - An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetRecordedAtTimes
Retrieves recorded values at the specified times.


```js
osisoft.Stream_GetRecordedAtTimes({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* retrievalMode (string) - An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* time (array) - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetSummary
Count is the only summary type supported on non-numeric streams. Requesting a summary for any other type will generate an error. Time-weighted totals are computed by integrating the rate tag values over the requested time range. If some of the data are bad in the time range, the calculated total is divided by the fraction of the time period for which there are good values. This approach is equivalent to assuming that during the period of bad data, the tag takes on the average values for the entire calculation time range. The PercentGood summary may be used to determine if the calculation results are suitable for the application's purposes. For time-weighted totals, if the time unit rate of the stream cannot be determined, then the value will be totaled assuming a unit of "per day" and no unit of measure will be assigned to the value. If the measured time component of the tag is not based on a day, the user of the data must convert the totalized value to the correct units.


```js
osisoft.Stream_GetSummary({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* calculationBasis (string) - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute.
* sampleInterval (string) - When the sampleType is Interval, sampleInterval specifies how often the filter expression is evaluated when computing the summary for an interval.
* sampleType (string) - Defines the evaluation of an expression over a time range. The default is 'ExpressionRecordedValues'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* summaryDuration (string) - The duration of each summary interval. If specified in hours, minutes, seconds, or milliseconds, the summary durations will be evenly spaced UTC time intervals. Longer interval types are interpreted using wall clock rules and are time zone dependent.
* summaryType (array) - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.
* timeType (string) - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_GetValue
Returns the value of the stream at the specified time. By default, this is usually the current value.


```js
osisoft.Stream_GetValue({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* desiredUnits (string) - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* time (string) - An optional time. The default time context is determined from the owning object - for example, the time range of the event frame or transfer which holds this attribute. Otherwise, the implementation of the Data Reference determines the meaning of no context. For Points or simply configured PI Point Data References, this means the snapshot value of the PI Point on the Data Server.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### Stream_UpdateValue
Updates a value for the specified stream.


```js
osisoft.Stream_UpdateValue({
  "webId": "",
  "value": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the stream.
* value (object) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'. This parameter is ignored if the attribute is a configuration item.

### StreamSet_GetChannelAdHoc
Opens a channel that will send messages about any value changes for the specified streams.


```js
osisoft.StreamSet_GetChannelAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* includeInitialValues (boolean) - Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.

### StreamSet_GetEndAdHoc
Returns End Of Stream values for attributes of the specified streams


```js
osisoft.StreamSet_GetEndAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### StreamSet_GetInterpolatedAdHoc
Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.


```js
osisoft.StreamSet_GetInterpolatedAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
* endTime (string) - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* interval (string) - The sampling interval, in AFTimeSpan format.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetInterpolatedAtTimesAdHoc
Returns interpolated values of the specified streams at the specified times.


```js
osisoft.StreamSet_GetInterpolatedAtTimesAdHoc({
  "time": [],
  "webId": []
}, context)
```

#### Parameters
* time (array) **required** - The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
* webId (array) **required** - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetPlotAdHoc
For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).


```js
osisoft.StreamSet_GetPlotAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* endTime (string) - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* intervals (integer) - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetRecordedAdHoc
Returns recorded values of the specified streams.


```js
osisoft.StreamSet_GetRecordedAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* boundaryType (string) - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.
* endTime (string) - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* maxCount (integer) - The maximum number of values to be returned. The default is 1000.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_UpdateValuesAdHoc
Updates multiple values for the specified streams.


```js
osisoft.StreamSet_UpdateValuesAdHoc({
  "values": []
}, context)
```

#### Parameters
* values (array) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'.

### StreamSet_GetRecordedAtTimeAdHoc
Returns recorded values based on the passed time and retrieval mode.


```js
osisoft.StreamSet_GetRecordedAtTimeAdHoc({
  "time": "",
  "webId": []
}, context)
```

#### Parameters
* time (string) **required** - The timestamp at which the values are desired.
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* retrievalMode (string) - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetRecordedAtTimesAdHoc
Returns recorded values of the specified streams at the specified times.


```js
osisoft.StreamSet_GetRecordedAtTimesAdHoc({
  "time": [],
  "webId": []
}, context)
```

#### Parameters
* time (array) **required** - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
* webId (array) **required** - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
* retrievalMode (string) - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetSummariesAdHoc
Returns summary values of the specified streams.


```js
osisoft.StreamSet_GetSummariesAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* calculationBasis (string) - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.
* endTime (string) - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.
* sampleInterval (string) - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.
* sampleType (string) - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* startTime (string) - An optional start time. The default is '*-1d'.
* summaryDuration (string) - The duration of each summary interval.
* summaryType (array) - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.
* timeType (string) - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetValuesAdHoc
Returns values of the specified streams.


```js
osisoft.StreamSet_GetValuesAdHoc({
  "webId": []
}, context)
```

#### Parameters
* webId (array) **required** - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* time (string) - An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_UpdateValueAdHoc
Updates a single value for the specified streams.


```js
osisoft.StreamSet_UpdateValueAdHoc({
  "values": []
}, context)
```

#### Parameters
* values (array) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'.

### StreamSet_GetChannel
Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.


```js
osisoft.StreamSet_GetChannel({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* includeInitialValues (boolean) - Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.

### StreamSet_GetEnd
Returns End of stream values of the attributes for an Element, Event Frame or Attribute


```js
osisoft.StreamSet_GetEnd({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.

### StreamSet_GetInterpolated
Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.


```js
osisoft.StreamSet_GetInterpolated({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* interval (string) - The sampling interval, in AFTimeSpan format.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetInterpolatedAtTimes
Returns interpolated values of attributes for an element, event frame or attribute at the specified times.


```js
osisoft.StreamSet_GetInterpolatedAtTimes({
  "webId": "",
  "time": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* time (array) **required** - The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetPlot
For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).


```js
osisoft.StreamSet_GetPlot({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* intervals (integer) - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetRecorded
Returns recorded values of the attributes for an element, event frame, or attribute.


```js
osisoft.StreamSet_GetRecorded({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* boundaryType (string) - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.
* includeFilteredValues (boolean) - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.
* maxCount (integer) - The maximum number of values to be returned. The default is 1000.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_UpdateValues
Updates multiple values for the specified streams.


```js
osisoft.StreamSet_UpdateValues({
  "webId": "",
  "values": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.
* values (array) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'.

### StreamSet_GetRecordedAtTime
Returns recorded values of the attributes for an element, event frame, or attribute.


```js
osisoft.StreamSet_GetRecordedAtTime({
  "webId": "",
  "time": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* time (string) **required** - The timestamp at which the values are desired.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* retrievalMode (string) - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetRecordedAtTimes
Returns recorded values of attributes for an element, event frame or attribute at the specified times.


```js
osisoft.StreamSet_GetRecordedAtTimes({
  "webId": "",
  "time": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* time (array) **required** - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* retrievalMode (string) - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* sortOrder (string) - The order that the returned collection is sorted. The default is 'Ascending'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetSummaries
Returns summary values of the attributes for an element, event frame or attribute.


```js
osisoft.StreamSet_GetSummaries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
* calculationBasis (string) - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* endTime (string) - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.
* filterExpression (string) - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* sampleInterval (string) - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.
* sampleType (string) - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* startTime (string) - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.
* summaryDuration (string) - The duration of each summary interval.
* summaryType (array) - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* timeType (string) - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_GetValues
Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.


```js
osisoft.StreamSet_GetValues({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
* categoryName (string) - Specify that included attributes must have this category. The default is no category filter.
* nameFilter (string) - The name query string used for filtering attributes. The default is no filter.
* searchFullHierarchy (boolean) - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.
* showExcluded (boolean) - Specified if the search should include attributes with the Excluded property set. The default is 'false'.
* showHidden (boolean) - Specified if the search should include attributes with the Hidden property set. The default is 'false'.
* templateName (string) - Specify that included attributes must be members of this template. The default is no template filter.
* time (string) - An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.
* timeZone (string) - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.

### StreamSet_UpdateValue
Updates a single value for the specified streams.


```js
osisoft.StreamSet_UpdateValue({
  "webId": "",
  "values": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.
* values (array) **required**
* bufferOption (string) - The desired AFBufferOption. The default is 'BufferIfPossible'.
* updateOption (string) - The desired AFUpdateOption. The default is 'Replace'.

### System_Landing
Get system links for this PI System Web API instance.


```js
osisoft.System_Landing(null, context)
```

#### Parameters
*This action has no parameters*

### System_CacheInstances
Get AF cache instances currently in use by the system. These are caches from which user requests are serviced. The number of instances depends on the number of users connected to the service, the service's authentication method, and the cache instance configuration.


```js
osisoft.System_CacheInstances(null, context)
```

#### Parameters
*This action has no parameters*

### Configuration_List
Get the current system configuration.


```js
osisoft.Configuration_List(null, context)
```

#### Parameters
*This action has no parameters*

### Configuration_Delete
Delete a configuration item.


```js
osisoft.Configuration_Delete({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - The key of the configuration item to remove.

### Configuration_Get
Get the value of a configuration item.


```js
osisoft.Configuration_Get({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - The key of the configuration item.

### System_Status
Get the system uptime, the system state and the number of cache instances for this PI System Web API instance.


```js
osisoft.System_Status(null, context)
```

#### Parameters
*This action has no parameters*

### System_UserInfo
Get information about the Windows identity used to fulfill the request. This depends on the service's authentication method and the credentials passed by the client. The impersonation level of the Windows identity is included.


```js
osisoft.System_UserInfo(null, context)
```

#### Parameters
*This action has no parameters*

### System_Versions
Get the current versions of the PI Web API instance and all external plugins.


```js
osisoft.System_Versions(null, context)
```

#### Parameters
*This action has no parameters*

### TableCategory_GetByPath
This method returns a Table Category based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.TableCategory_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the target table category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TableCategory_Delete
Delete a table category.


```js
osisoft.TableCategory_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table category to delete.

### TableCategory_Get
Retrieve a table category.


```js
osisoft.TableCategory_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The id of the table category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TableCategory_Update
Update a table category by replacing items in its definition.


```js
osisoft.TableCategory_Update({
  "webId": "",
  "tableCategory": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table category to update.
* tableCategory (object) **required**

### TableCategory_GetSecurity
Get the security information of the specified security item associated with the table category for a specified user.


```js
osisoft.TableCategory_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table category for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TableCategory_GetSecurityEntries
Retrieve the security entries associated with the table category based on the specified criteria. By default, all security entries for this table category are returned.


```js
osisoft.TableCategory_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table category.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TableCategory_CreateSecurityEntry
Create a security entry owned by the table category.


```js
osisoft.TableCategory_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table category where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### TableCategory_DeleteSecurityEntry
Delete a security entry owned by the table category.


```js
osisoft.TableCategory_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the table category where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### TableCategory_GetSecurityEntryByName
Retrieve the security entry associated with the table category with the specified name.


```js
osisoft.TableCategory_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the table category.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TableCategory_UpdateSecurityEntry
Update a security entry owned by the table category.


```js
osisoft.TableCategory_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the table category where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Table_GetByPath
Retrieve a table by path.


```js
osisoft.Table_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the table.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_Delete
Delete a table.


```js
osisoft.Table_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table to delete.

### Table_Get
Retrieve a table.


```js
osisoft.Table_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_Update
Update a table by replacing items in its definition.


```js
osisoft.Table_Update({
  "webId": "",
  "table": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table to update.
* table (object) **required**

### Table_GetCategories
Get a table's categories.


```js
osisoft.Table_GetCategories({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_GetData
Get the table's data.


```js
osisoft.Table_GetData({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_UpdateData
Update the table's data.


```js
osisoft.Table_UpdateData({
  "webId": "",
  "data": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table on which to update the data.
* data (object) **required**

### Table_GetSecurity
Get the security information of the specified security item associated with the table for a specified user.


```js
osisoft.Table_GetSecurity({
  "webId": "",
  "userIdentity": []
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table for the security to be checked.
* userIdentity (array) **required** - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
* forceRefresh (boolean) - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_GetSecurityEntries
Retrieve the security entries associated with the table based on the specified criteria. By default, all security entries for this table are returned.


```js
osisoft.Table_GetSecurityEntries({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table.
* nameFilter (string) - The name query string used for filtering security entries. The default is no filter.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_CreateSecurityEntry
Create a security entry owned by the table.


```js
osisoft.Table_CreateSecurityEntry({
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the table where the security entry will be created.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Table_DeleteSecurityEntry
Delete a security entry owned by the table.


```js
osisoft.Table_DeleteSecurityEntry({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the table where the security entry will be deleted.
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### Table_GetSecurityEntryByName
Retrieve the security entry associated with the table with the specified name.


```js
osisoft.Table_GetSecurityEntryByName({
  "name": "",
  "webId": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.
* webId (string) **required** - The ID of the table.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Table_UpdateSecurityEntry
Update a security entry owned by the table.


```js
osisoft.Table_UpdateSecurityEntry({
  "name": "",
  "webId": "",
  "securityEntry": {}
}, context)
```

#### Parameters
* name (string) **required** - The name of the security entry.
* webId (string) **required** - The ID of the table where the security entry will be updated.
* securityEntry (object) **required**
* applyToChildren (boolean) - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.

### TimeRulePlugIn_GetByPath
This method returns a Time Rule Plug-in based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.TimeRulePlugIn_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the Time Rule Plug-in.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TimeRulePlugIn_Get
Retrieve a Time Rule Plug-in.


```js
osisoft.TimeRulePlugIn_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Time Rule Plug-in.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TimeRule_GetByPath
This method returns a Time Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.


```js
osisoft.TimeRule_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the Time Rule.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TimeRule_Delete
Delete a Time Rule.


```js
osisoft.TimeRule_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Time Rule.

### TimeRule_Get
Retrieve a Time Rule.


```js
osisoft.TimeRule_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Time Rule.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### TimeRule_Update
Update a Time Rule by replacing items in its definition.


```js
osisoft.TimeRule_Update({
  "webId": "",
  "timeRule": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the Time Rule.
* timeRule (object) **required**

### UnitClass_GetByPath
Retrieve a unit class by path.


```js
osisoft.UnitClass_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the unit class.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### UnitClass_Delete
Delete a unit class.


```js
osisoft.UnitClass_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit class.

### UnitClass_Get
Retrieve a unit class.


```js
osisoft.UnitClass_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit class.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### UnitClass_Update
Update a unit class.


```js
osisoft.UnitClass_Update({
  "webId": "",
  "unitClassDTO": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit class.
* unitClassDTO (object) **required**

### UnitClass_GetCanonicalUnit
Get the canonical unit of a unit class.


```js
osisoft.UnitClass_GetCanonicalUnit({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of unit class.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### UnitClass_GetUnits
Get a list of all units belonging to the unit class.


```js
osisoft.UnitClass_GetUnits({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of unit class.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### UnitClass_CreateUnit
Create a unit in the specified Unit Class.


```js
osisoft.UnitClass_CreateUnit({
  "webId": "",
  "unitDTO": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the server.
* unitDTO (object) **required**

### Unit_GetByPath
Retrieve a unit by path.


```js
osisoft.Unit_GetByPath({
  "path": ""
}, context)
```

#### Parameters
* path (string) **required** - The path to the unit.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Unit_Delete
Delete a unit.


```js
osisoft.Unit_Delete({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit.

### Unit_Get
Retrieve a unit.


```js
osisoft.Unit_Get({
  "webId": ""
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit.
* selectedFields (string) - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.

### Unit_Update
Update a unit.


```js
osisoft.Unit_Update({
  "webId": "",
  "unitDTO": {}
}, context)
```

#### Parameters
* webId (string) **required** - The ID of the unit.
* unitDTO (object) **required**

