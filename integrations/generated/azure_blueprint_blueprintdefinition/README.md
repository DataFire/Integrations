# @datafire/azure_blueprint_blueprintdefinition

Client library for BlueprintClient

## Installation and Usage
```bash
npm install --save @datafire/azure_blueprint_blueprintdefinition
```
```js
let azure_blueprint_blueprintdefinition = require('@datafire/azure_blueprint_blueprintdefinition').create({
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

Azure Blueprints Client provides access to blueprint definitions, assignments, and artifacts, and related blueprint operations.

## Actions

### Blueprints_List
List blueprint definitions.


```js
azure_blueprint_blueprintdefinition.Blueprints_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.

#### Output
* output [BlueprintList](#blueprintlist)

### Blueprints_Delete
Delete a blueprint definition.


```js
azure_blueprint_blueprintdefinition.Blueprints_Delete({
  "api-version": "",
  "scope": "",
  "blueprintName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.

#### Output
* output [Blueprint](#blueprint)

### Blueprints_Get
Get a blueprint definition.


```js
azure_blueprint_blueprintdefinition.Blueprints_Get({
  "api-version": "",
  "scope": "",
  "blueprintName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.

#### Output
* output [Blueprint](#blueprint)

### Blueprints_CreateOrUpdate
Create or update a blueprint definition.


```js
azure_blueprint_blueprintdefinition.Blueprints_CreateOrUpdate({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "blueprint": {
    "properties": {}
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * blueprint **required** [Blueprint](#blueprint)

#### Output
* output [Blueprint](#blueprint)

### Artifacts_List
List artifacts for a given blueprint definition.


```js
azure_blueprint_blueprintdefinition.Artifacts_List({
  "api-version": "",
  "scope": "",
  "blueprintName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.

#### Output
* output [ArtifactList](#artifactlist)

### Artifacts_Delete
Delete a blueprint artifact.


```js
azure_blueprint_blueprintdefinition.Artifacts_Delete({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "artifactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * artifactName **required** `string`: Name of the blueprint artifact.

#### Output
* output [Artifact](#artifact)

### Artifacts_Get
Get a blueprint artifact.


```js
azure_blueprint_blueprintdefinition.Artifacts_Get({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "artifactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * artifactName **required** `string`: Name of the blueprint artifact.

#### Output
* output [Artifact](#artifact)

### Artifacts_CreateOrUpdate
Create or update blueprint artifact.


```js
azure_blueprint_blueprintdefinition.Artifacts_CreateOrUpdate({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "artifactName": "",
  "artifact": {
    "kind": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * artifactName **required** `string`: Name of the blueprint artifact.
  * artifact **required** [Artifact](#artifact)

#### Output
* output [Artifact](#artifact)

### PublishedBlueprints_List
List published versions of given blueprint definition.


```js
azure_blueprint_blueprintdefinition.PublishedBlueprints_List({
  "api-version": "",
  "scope": "",
  "blueprintName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.

#### Output
* output [PublishedBlueprintList](#publishedblueprintlist)

### PublishedBlueprints_Delete
Delete a published version of a blueprint definition.


```js
azure_blueprint_blueprintdefinition.PublishedBlueprints_Delete({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * versionId **required** `string`: Version of the published blueprint definition.

#### Output
* output [PublishedBlueprint](#publishedblueprint)

### PublishedBlueprints_Get
Get a published version of a blueprint definition.


```js
azure_blueprint_blueprintdefinition.PublishedBlueprints_Get({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * versionId **required** `string`: Version of the published blueprint definition.

#### Output
* output [PublishedBlueprint](#publishedblueprint)

### PublishedBlueprints_Create
Publish a new version of the blueprint definition with the latest artifacts. Published blueprint definitions are immutable.


```js
azure_blueprint_blueprintdefinition.PublishedBlueprints_Create({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * versionId **required** `string`: Version of the published blueprint definition.
  * publishedBlueprint [PublishedBlueprint](#publishedblueprint)

#### Output
* output [PublishedBlueprint](#publishedblueprint)

### PublishedArtifacts_List
List artifacts for a version of a published blueprint definition.


```js
azure_blueprint_blueprintdefinition.PublishedArtifacts_List({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * versionId **required** `string`: Version of the published blueprint definition.

#### Output
* output [ArtifactList](#artifactlist)

### PublishedArtifacts_Get
Get an artifact for a published blueprint definition.


```js
azure_blueprint_blueprintdefinition.PublishedArtifacts_Get({
  "api-version": "",
  "scope": "",
  "blueprintName": "",
  "versionId": "",
  "artifactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * blueprintName **required** `string`: Name of the blueprint definition.
  * versionId **required** `string`: Version of the published blueprint definition.
  * artifactName **required** `string`: Name of the blueprint artifact.

#### Output
* output [Artifact](#artifact)



## Definitions

### Artifact
* Artifact `object`: Represents a blueprint artifact.
  * kind **required** `string` (values: template, roleAssignment, policyAssignment): Specifies the kind of blueprint artifact.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### ArtifactList
* ArtifactList `object`: List of blueprint artifacts.
  * nextLink `string`: Link to the next page of results.
  * value `array`: List of blueprint artifacts.
    * items [Artifact](#artifact)

### ArtifactPropertiesBase
* ArtifactPropertiesBase `object`: Common properties shared by different artifacts.
  * dependsOn `array`: Artifacts which need to be deployed before the specified artifact.
    * items `string`: ID of peer artifact.

### AzureResourceBase
* AzureResourceBase `object`: Common properties for all Azure resources.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### Blueprint
* Blueprint `object`: Represents a Blueprint definition.
  * properties **required** [BlueprintProperties](#blueprintproperties)
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### BlueprintList
* BlueprintList `object`: List of blueprint definitions.
  * nextLink `string`: Link to the next page of results.
  * value `array`: List of blueprint definitions.
    * items [Blueprint](#blueprint)

### BlueprintProperties
* BlueprintProperties `object`: Schema for blueprint definition properties.
  * layout `object`: Layout view of the blueprint definition for UI reference.
  * versions `object`: Published versions of this blueprint definition.
  * parameters [ParameterDefinitionCollection](#parameterdefinitioncollection)
  * resourceGroups [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection)
  * status [BlueprintStatus](#blueprintstatus)
  * targetScope `string` (values: subscription, managementGroup): The scope where this blueprint definition can be assigned.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### BlueprintResourcePropertiesBase
* BlueprintResourcePropertiesBase `object`: Shared properties between all blueprint resources.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### BlueprintResourceStatusBase
* BlueprintResourceStatusBase `object`: Shared status properties between all blueprint resources.
  * lastModified `string`: Last modified time of this blueprint definition.
  * timeCreated `string`: Creation time of this blueprint definition.

### BlueprintStatus
* BlueprintStatus `object`: The status of the blueprint. This field is readonly.
  * lastModified `string`: Last modified time of this blueprint definition.
  * timeCreated `string`: Creation time of this blueprint definition.

### ParameterDefinition
* ParameterDefinition `object`: Represent a parameter with constrains and metadata.
  * allowedValues `array`: Array of allowed values for this parameter.
  * metadata [ParameterDefinitionMetadata](#parameterdefinitionmetadata)
  * type **required** `string` (values: string, array, bool, int, object, secureObject, secureString): Allowed data types for Resource Manager template parameters.

### ParameterDefinitionCollection
* ParameterDefinitionCollection `object`: A dictionary hold parameter name and its metadata.

### ParameterDefinitionMetadata
* ParameterDefinitionMetadata `object`: User-friendly properties for this parameter.
  * description `string`: Description of this parameter/resourceGroup.
  * displayName `string`: DisplayName of this parameter/resourceGroup.
  * strongType `string`: StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.

### ParameterValue
* ParameterValue `object`: Value for the specified parameter. Can be either 'value' or 'reference' but not both.
  * reference [SecretValueReference](#secretvaluereference)

### ParameterValueCollection
* ParameterValueCollection `object`: A dictionary for parameters and their corresponding values.

### PolicyAssignmentArtifact
* PolicyAssignmentArtifact `object`: Blueprint artifact that applies a Policy assignment.
  * properties **required** [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties)
  * kind **required** `string` (values: template, roleAssignment, policyAssignment): Specifies the kind of blueprint artifact.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### PolicyAssignmentArtifactProperties
* PolicyAssignmentArtifactProperties `object`: Properties of a Policy assignment blueprint artifact.
  * parameters **required** [ParameterValueCollection](#parametervaluecollection)
  * policyDefinitionId **required** `string`: Azure resource ID of the policy definition.
  * resourceGroup `string`: Name of the resource group placeholder to which the policy will be assigned.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.
  * dependsOn `array`: Artifacts which need to be deployed before the specified artifact.
    * items `string`: ID of peer artifact.

### PublishedBlueprint
* PublishedBlueprint `object`: Represents a published blueprint.
  * properties **required** [PublishedBlueprintProperties](#publishedblueprintproperties)
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### PublishedBlueprintList
* BlueprintList `object`: List of published blueprint definitions.
  * nextLink `string`: Link to the next page of results.
  * value `array`: List of published blueprint definitions.
    * items [PublishedBlueprint](#publishedblueprint)

### PublishedBlueprintProperties
* PublishedBlueprintProperties `object`: Schema for published blueprint definition properties.
  * blueprintName `string`: Name of the published blueprint definition.
  * changeNotes `string`: Version-specific change notes.
  * parameters [ParameterDefinitionCollection](#parameterdefinitioncollection)
  * resourceGroups [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection)
  * status [BlueprintStatus](#blueprintstatus)
  * targetScope `string` (values: subscription, managementGroup): The scope where this blueprint definition can be assigned.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### ResourceGroupDefinition
* ResourceGroupDefinition `object`: Represents an Azure resource group in a blueprint definition.
  * dependsOn `array`: Artifacts which need to be deployed before this resource group.
    * items `string`: Name of peer artifact.
  * location `string`: Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
  * metadata [ParameterDefinitionMetadata](#parameterdefinitionmetadata)
  * name `string`: Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
  * tags [ResourceGroupTagCollection](#resourcegrouptagcollection)

### ResourceGroupDefinitionCollection
* ResourceGroupDefinitionCollection `object`: A dictionary which maps resource group placeholders to the resource groups which will be created.

### ResourceGroupTagCollection
* ResourceGroupTagCollection `object`: A dictionary of resource group tag values.

### ResourceGroupValue
* ResourceGroupValue `object`: Represents an Azure resource group.
  * location `string`: Location of the resource group.
  * name `string`: Name of the resource group.

### ResourceGroupValueCollection
* ResourceGroupValueCollection `object`: A dictionary which maps resource group placeholders to the resource groups which will be created.

### ResourceProviderOperation
* ResourceProviderOperation `object`: Supported operations of this resource provider.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description of this operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Resource provider: Microsoft Blueprint.
    * resource `string`: Resource on which the operation is performed.
  * name `string`: Operation name, in format of {provider}/{resource}/{operation}

### ResourceProviderOperationList
* ResourceProviderOperationList `object`: Results of the request to list operations.
  * value `array`: List of operations supported by this resource provider.
    * items [ResourceProviderOperation](#resourceprovideroperation)

### RoleAssignmentArtifact
* RoleAssignmentArtifact `object`: Blueprint artifact that applies a Role assignment.
  * properties **required** [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties)
  * kind **required** `string` (values: template, roleAssignment, policyAssignment): Specifies the kind of blueprint artifact.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### RoleAssignmentArtifactProperties
* RoleAssignmentArtifactProperties `object`: Properties of a Role assignment blueprint artifact.
  * resourceGroup `string`: RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
  * roleDefinitionId **required** `string`: Azure resource ID of the RoleDefinition.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.
  * dependsOn `array`: Artifacts which need to be deployed before the specified artifact.
    * items `string`: ID of peer artifact.

### SecretValueReference
* SecretValueReference `object`: Reference to a Key Vault secret.
  * keyVault **required** [keyVaultReference](#keyvaultreference)
  * secretName **required** `string`: Name of the secret.
  * secretVersion `string`: The version of the secret to use. If left blank, the latest version of the secret is used.

### SharedBlueprintProperties
* SharedBlueprintProperties `object`: Shared Schema for both blueprintProperties and publishedBlueprintProperties.
  * parameters [ParameterDefinitionCollection](#parameterdefinitioncollection)
  * resourceGroups [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection)
  * status [BlueprintStatus](#blueprintstatus)
  * targetScope `string` (values: subscription, managementGroup): The scope where this blueprint definition can be assigned.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### TemplateArtifact
* TemplateArtifact `object`: Blueprint artifact that deploys a Resource Manager template.
  * properties **required** [TemplateArtifactProperties](#templateartifactproperties)
  * kind **required** `string` (values: template, roleAssignment, policyAssignment): Specifies the kind of blueprint artifact.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### TemplateArtifactProperties
* TemplateArtifactProperties `object`: Properties of a Resource Manager template blueprint artifact.
  * parameters **required** [ParameterValueCollection](#parametervaluecollection)
  * resourceGroup `string`: If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
  * template **required** `object`: The Resource Manager template blueprint artifact body.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.
  * dependsOn `array`: Artifacts which need to be deployed before the specified artifact.
    * items `string`: ID of peer artifact.

### keyVaultReference
* keyVaultReference `object`: Specifies the link to a Key Vault.
  * id **required** `string`: Azure resource ID of the Key Vault.


