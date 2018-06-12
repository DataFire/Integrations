# @datafire/azure_datamigration

Client library for Azure Data Migration Service Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_datamigration
```
```js
let azure_datamigration = require('@datafire/azure_datamigration').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_datamigration.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Data Migration Service helps people migrate their data from on-premise database servers to Azure, or from older database software to newer software. The service manages one or more workers that are joined to a customer's virtual network, which is assumed to provide connectivity to their databases. To avoid frequent updates to the resource provider, data migration tasks are implemented by the resource provider in a generic way as task resources, each of which has a task type (which identifies the type of work to run), input, and output. The client is responsible for providing appropriate task type and inputs, which will be passed through unexamined to the machines that implement the functionality, and for understanding the output, which is passed back unexamined to the client.

## Actions

### Operations_List
Lists all available actions exposed by the Data Migration Service resource provider.


```js
azure_datamigration.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of action (operation) objects
  * nextLink `string`: URL to load the next page of actions
  * value `array`: List of actions
    * items `object`: Description of an action supported by the Data Migration Service
      * display `object`: Localized display text
        * description `string`: The localized operation description
        * operation `string`: The localized operation name
        * provider `string`: The localized resource provider name
        * resource `string`: The localized resource type name
      * name `string`: The fully qualified action name, e.g. Microsoft.DataMigration/services/read

### Services_CheckNameAvailability
This method checks whether a proposed top-level resource name is valid and available.


```js
azure_datamigration.Services_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "location": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * api-version **required** `string`: Version of the API
  * location **required** `string`: The Azure region of the operation
  * parameters **required** `object`: A resource type and proposed name
    * name `string`: The proposed resource name
    * type `string`: The resource type chain (e.g. virtualMachines/extensions)

#### Output
* output `object`: Indicates whether a proposed resource name is available
  * message `string`: The localized reason why the name is not available, if nameAvailable is false
  * nameAvailable `boolean`: If true, the name is valid and available. If false, 'reason' describes why not.
  * reason `string` (values: AlreadyExists, Invalid): The reason why the name is not available, if nameAvailable is false

### Usages_List
This method returns region-specific quotas and resource usage information for the Data Migration Service.


```js
azure_datamigration.Usages_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * location **required** `string`: The Azure region of the operation
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of quota objects
  * nextLink `string`: URL to load the next page of quotas, or null or missing if this is the last page
  * value `array`: List of quotas
    * items `object`: Describes a quota for or usage details about a resource
      * currentValue `number`: The current value of the quota. If null or missing, the current value cannot be determined in the context of the request.
      * id `string`: The resource ID of the quota object
      * limit `number`: The maximum value of the quota. If null or missing, the quota has no maximum, in which case it merely tracks usage.
      * name `object`: The name of the quota
        * localizedValue `string`: The localized name of the quota
        * value `string`: The unlocalized name (or ID) of the quota
      * unit `string`: The unit for the quota, such as Count, Bytes, BytesPerSecond, etc.

### Services_List
The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a subscription.


```js
azure_datamigration.Services_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of service objects
  * nextLink `string`: URL to load the next page of services
  * value `array`: List of services
    * items `object`: A Data Migration Service resource
      * etag `string`: HTTP strong entity tag value. Ignored if submitted
      * kind `string`: The resource kind. Only 'vm' (the default) is supported.
      * properties `object`: Properties of the Data Migration service instance
        * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
        * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
        * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
      * sku `object`: An Azure SKU instance
        * capacity `integer`: The capacity of the SKU, if it supports scaling
        * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
        * name `string`: The unique name of the SKU, such as 'P3'
        * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
        * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
      * location **required** `string`: Resource location.
      * tags `object`: Resource tags.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.

### ResourceSkus_ListSkus
The skus action returns the list of SKUs that DMS supports.


```js
azure_datamigration.ResourceSkus_ListSkus({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: The DMS List SKUs operation response.
  * nextLink `string`: The uri to fetch the next page of DMS SKUs. Call ListNext() with this to fetch the next page of DMS SKUs.
  * value **required** `array`: The list of SKUs available for the subscription.
    * items `object`: Describes an available DMS SKU.
      * apiVersions `array`: The api versions that support this SKU.
        * items `string`
      * capabilities `array`: A name value pair to describe the capability.
        * items `object`: Describes The SKU capabilites object.
          * name `string`: An invariant to describe the feature.
          * value `string`: An invariant if the feature is measured by quantity.
      * capacity `object`: Describes scaling information of a SKU.
        * default `integer`: The default capacity.
        * maximum `integer`: The maximum capacity.
        * minimum `integer`: The minimum capacity.
        * scaleType `string` (values: Automatic, Manual, None): The scale type applicable to the SKU.
      * costs `array`: Metadata for retrieving price info.
        * items `object`: Describes metadata for retrieving price info.
          * extendedUnit `string`: An invariant to show the extended unit.
          * meterID `string`: Used for querying price from commerce.
          * quantity `integer`: The multiplier is needed to extend the base metered cost.
      * family `string`: The Family of this particular SKU.
      * kind `string`: The Kind of resources that are supported in this SKU.
      * locations `array`: The set of locations that the SKU is available.
        * items `string`
      * name `string`: The name of SKU.
      * resourceType `string`: The type of resource the SKU applies to.
      * restrictions `array`: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
        * items `object`: Describes scaling information of a SKU.
          * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason code for restriction.
          * type `string` (values: location): The type of restrictions.
          * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
            * items `string`
      * size `string`: The Size of the SKU.
      * tier `string`: Specifies the tier of DMS in a scale set.

### Services_ListByResourceGroup
The Services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a resource group.


```js
azure_datamigration.Services_ListByResourceGroup({
  "subscriptionId": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of service objects
  * nextLink `string`: URL to load the next page of services
  * value `array`: List of services
    * items `object`: A Data Migration Service resource
      * etag `string`: HTTP strong entity tag value. Ignored if submitted
      * kind `string`: The resource kind. Only 'vm' (the default) is supported.
      * properties `object`: Properties of the Data Migration service instance
        * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
        * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
        * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
      * sku `object`: An Azure SKU instance
        * capacity `integer`: The capacity of the SKU, if it supports scaling
        * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
        * name `string`: The unique name of the SKU, such as 'P3'
        * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
        * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
      * location **required** `string`: Resource location.
      * tags `object`: Resource tags.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.

### Services_Delete
The services resource is the top-level resource that represents the Data Migration Service. The DELETE method deletes a service. Any running tasks will be canceled.


```js
azure_datamigration.Services_Delete({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deleteRunningTasks `boolean`: Delete the resource even if it contains running tasks
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
*Output schema unknown*

### Services_Get
The services resource is the top-level resource that represents the Data Migration Service. The GET method retrieves information about a service instance.


```js
azure_datamigration.Services_Get({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A Data Migration Service resource
  * etag `string`: HTTP strong entity tag value. Ignored if submitted
  * kind `string`: The resource kind. Only 'vm' (the default) is supported.
  * properties `object`: Properties of the Data Migration service instance
    * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
    * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
    * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
  * sku `object`: An Azure SKU instance
    * capacity `integer`: The capacity of the SKU, if it supports scaling
    * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
    * name `string`: The unique name of the SKU, such as 'P3'
    * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
    * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Services_Update
The services resource is the top-level resource that represents the Data Migration Service. The PATCH method updates an existing service. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request ("ServiceIsBusy").


```js
azure_datamigration.Services_Update({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A Data Migration Service resource
    * etag `string`: HTTP strong entity tag value. Ignored if submitted
    * kind `string`: The resource kind. Only 'vm' (the default) is supported.
    * properties `object`: Properties of the Data Migration service instance
      * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
      * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
      * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
    * sku `object`: An Azure SKU instance
      * capacity `integer`: The capacity of the SKU, if it supports scaling
      * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
      * name `string`: The unique name of the SKU, such as 'P3'
      * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
      * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
    * location **required** `string`: Resource location.
    * tags `object`: Resource tags.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A Data Migration Service resource
  * etag `string`: HTTP strong entity tag value. Ignored if submitted
  * kind `string`: The resource kind. Only 'vm' (the default) is supported.
  * properties `object`: Properties of the Data Migration service instance
    * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
    * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
    * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
  * sku `object`: An Azure SKU instance
    * capacity `integer`: The capacity of the SKU, if it supports scaling
    * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
    * name `string`: The unique name of the SKU, such as 'P3'
    * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
    * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Services_CreateOrUpdate
The services resource is the top-level resource that represents the Data Migration Service. The PUT method creates a new service or updates an existing one. When a service is updated, existing child resources (i.e. tasks) are unaffected. Services currently support a single kind, "vm", which refers to a VM-based service, although other kinds may be added in the future. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request ("ServiceIsBusy"). The provider will reply when successful with 200 OK or 201 Created. Long-running operations use the provisioningState property.


```js
azure_datamigration.Services_CreateOrUpdate({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A Data Migration Service resource
    * etag `string`: HTTP strong entity tag value. Ignored if submitted
    * kind `string`: The resource kind. Only 'vm' (the default) is supported.
    * properties `object`: Properties of the Data Migration service instance
      * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
      * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
      * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
    * sku `object`: An Azure SKU instance
      * capacity `integer`: The capacity of the SKU, if it supports scaling
      * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
      * name `string`: The unique name of the SKU, such as 'P3'
      * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
      * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
    * location **required** `string`: Resource location.
    * tags `object`: Resource tags.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A Data Migration Service resource
  * etag `string`: HTTP strong entity tag value. Ignored if submitted
  * kind `string`: The resource kind. Only 'vm' (the default) is supported.
  * properties `object`: Properties of the Data Migration service instance
    * provisioningState `string` (values: Accepted, Deleting, Deploying, Stopped, Stopping, Starting, FailedToStart, FailedToStop, Succeeded, Failed): The resource's provisioning state
    * publicKey `string`: The public key of the service, used to encrypt secrets sent to the service
    * virtualSubnetId **required** `string`: The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
  * sku `object`: An Azure SKU instance
    * capacity `integer`: The capacity of the SKU, if it supports scaling
    * family `string`: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
    * name `string`: The unique name of the SKU, such as 'P3'
    * size `string`: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
    * tier `string`: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Services_CheckChildrenNameAvailability
This method checks whether a proposed nested resource name is valid and available.


```js
azure_datamigration.Services_CheckChildrenNameAvailability({
  "subscriptionId": "",
  "groupName": "",
  "api-version": "",
  "serviceName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * api-version **required** `string`: Version of the API
  * serviceName **required** `string`: Name of the service
  * parameters **required** `object`: A resource type and proposed name
    * name `string`: The proposed resource name
    * type `string`: The resource type chain (e.g. virtualMachines/extensions)

#### Output
* output `object`: Indicates whether a proposed resource name is available
  * message `string`: The localized reason why the name is not available, if nameAvailable is false
  * nameAvailable `boolean`: If true, the name is valid and available. If false, 'reason' describes why not.
  * reason `string` (values: AlreadyExists, Invalid): The reason why the name is not available, if nameAvailable is false

### Services_CheckStatus
The services resource is the top-level resource that represents the Data Migration Service. This action performs a health check and returns the status of the service and virtual machine size.


```js
azure_datamigration.Services_CheckStatus({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: Service health status
  * agentVersion `string`: The DMS instance agent version
  * status `string`: The machine-readable status, such as 'Initializing', 'Offline', 'Online', 'Deploying', 'Deleting', 'Stopped', 'Stopping', 'Starting', 'FailedToStart', 'FailedToStop' or 'Failed'
  * supportedTaskTypes `array`: The list of supported task types
    * items `string`: Migration task type
  * vmSize `string`: The services virtual machine size, such as 'Standard_D2_v2'

### Projects_List
The project resource is a nested resource representing a stored migration project. This method returns a list of projects owned by a service resource.


```js
azure_datamigration.Projects_List({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of project resources
  * nextLink `string`: URL to load the next page of projects
  * value `array`: List of projects
    * items `object`: A project resource
      * properties `object`: Project-specific properties
        * creationTime `string`: UTC Date and time when project was created
        * databasesInfo `array`: List of DatabaseInfo
          * items `object`: Project Database Details
            * sourceDatabaseName **required** `string`: Name of the database
        * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
        * sourceConnectionInfo `object`: Defines the connection properties of a server
          * password `string`: Password credential.
          * type **required** `string`: Type of connection info
          * userName `string`: User name
        * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
        * targetConnectionInfo `object`: Defines the connection properties of a server
          * password `string`: Password credential.
          * type **required** `string`: Type of connection info
          * userName `string`: User name
        * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
      * location **required** `string`: Resource location.
      * tags `object`: Resource tags.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.

### Projects_Delete
The project resource is a nested resource representing a stored migration project. The DELETE method deletes a project.


```js
azure_datamigration.Projects_Delete({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deleteRunningTasks `boolean`: Delete the resource even if it contains running tasks
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * api-version **required** `string`: Version of the API

#### Output
*Output schema unknown*

### Projects_Get
The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.


```js
azure_datamigration.Projects_Get({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A project resource
  * properties `object`: Project-specific properties
    * creationTime `string`: UTC Date and time when project was created
    * databasesInfo `array`: List of DatabaseInfo
      * items `object`: Project Database Details
        * sourceDatabaseName **required** `string`: Name of the database
    * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
    * sourceConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
    * targetConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Projects_Update
The project resource is a nested resource representing a stored migration project. The PATCH method updates an existing project.


```js
azure_datamigration.Projects_Update({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A project resource
    * properties `object`: Project-specific properties
      * creationTime `string`: UTC Date and time when project was created
      * databasesInfo `array`: List of DatabaseInfo
        * items `object`: Project Database Details
          * sourceDatabaseName **required** `string`: Name of the database
      * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
      * sourceConnectionInfo `object`: Defines the connection properties of a server
        * password `string`: Password credential.
        * type **required** `string`: Type of connection info
        * userName `string`: User name
      * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
      * targetConnectionInfo `object`: Defines the connection properties of a server
        * password `string`: Password credential.
        * type **required** `string`: Type of connection info
        * userName `string`: User name
      * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
    * location **required** `string`: Resource location.
    * tags `object`: Resource tags.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A project resource
  * properties `object`: Project-specific properties
    * creationTime `string`: UTC Date and time when project was created
    * databasesInfo `array`: List of DatabaseInfo
      * items `object`: Project Database Details
        * sourceDatabaseName **required** `string`: Name of the database
    * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
    * sourceConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
    * targetConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Projects_CreateOrUpdate
The project resource is a nested resource representing a stored migration project. The PUT method creates a new project or updates an existing one.


```js
azure_datamigration.Projects_CreateOrUpdate({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A project resource
    * properties `object`: Project-specific properties
      * creationTime `string`: UTC Date and time when project was created
      * databasesInfo `array`: List of DatabaseInfo
        * items `object`: Project Database Details
          * sourceDatabaseName **required** `string`: Name of the database
      * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
      * sourceConnectionInfo `object`: Defines the connection properties of a server
        * password `string`: Password credential.
        * type **required** `string`: Type of connection info
        * userName `string`: User name
      * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
      * targetConnectionInfo `object`: Defines the connection properties of a server
        * password `string`: Password credential.
        * type **required** `string`: Type of connection info
        * userName `string`: User name
      * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
    * location **required** `string`: Resource location.
    * tags `object`: Resource tags.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A project resource
  * properties `object`: Project-specific properties
    * creationTime `string`: UTC Date and time when project was created
    * databasesInfo `array`: List of DatabaseInfo
      * items `object`: Project Database Details
        * sourceDatabaseName **required** `string`: Name of the database
    * provisioningState `string` (values: Deleting, Succeeded): The project's provisioning state
    * sourceConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * sourcePlatform **required** `string` (values: SQL, Unknown): Source platform of the project
    * targetConnectionInfo `object`: Defines the connection properties of a server
      * password `string`: Password credential.
      * type **required** `string`: Type of connection info
      * userName `string`: User name
    * targetPlatform **required** `string` (values: SQLDB, Unknown): Target platform of the project
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Tasks_List
The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.


```js
azure_datamigration.Tasks_List({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * api-version **required** `string`: Version of the API
  * taskType `string`: Filter tasks by task type

#### Output
* output `object`: OData page of tasks
  * nextLink `string`: URL to load the next page of tasks
  * value `array`: List of tasks
    * items `object`: A task resource
      * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
      * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
        * errors `array`: Array of errors. This is ignored if submitted.
          * items `object`: Error information in OData format.
            * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
            * details `array`: Inner errors that caused this error
              * items [ODataError](#odataerror)
            * message `string`: The human-readable description of the error
        * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
        * taskType **required** `string`: Task type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.

### Tasks_Delete
The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The DELETE method deletes a task, canceling it first if it's running.


```js
azure_datamigration.Tasks_Delete({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "taskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deleteRunningTasks `boolean`: Delete the resource even if it contains running tasks
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * taskName **required** `string`: Name of the Task
  * api-version **required** `string`: Version of the API

#### Output
*Output schema unknown*

### Tasks_Get
The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.


```js
azure_datamigration.Tasks_Get({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "taskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: Expand the response
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * taskName **required** `string`: Name of the Task
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A task resource
  * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
  * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
    * errors `array`: Array of errors. This is ignored if submitted.
      * items `object`: Error information in OData format.
        * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
        * details `array`: Inner errors that caused this error
          * items [ODataError](#odataerror)
        * message `string`: The human-readable description of the error
    * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
    * taskType **required** `string`: Task type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Tasks_Update
The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing task, but since tasks have no mutable custom properties, there is little reason to do so.


```js
azure_datamigration.Tasks_Update({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "taskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A task resource
    * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
    * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
      * errors `array`: Array of errors. This is ignored if submitted.
        * items `object`: Error information in OData format.
          * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
          * details `array`: Inner errors that caused this error
            * items [ODataError](#odataerror)
          * message `string`: The human-readable description of the error
      * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
      * taskType **required** `string`: Task type.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * taskName **required** `string`: Name of the Task
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A task resource
  * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
  * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
    * errors `array`: Array of errors. This is ignored if submitted.
      * items `object`: Error information in OData format.
        * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
        * details `array`: Inner errors that caused this error
          * items [ODataError](#odataerror)
        * message `string`: The human-readable description of the error
    * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
    * taskType **required** `string`: Task type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Tasks_CreateOrUpdate
The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PUT method creates a new task or updates an existing one, although since tasks have no mutable custom properties, there is little reason to update an exising one.


```js
azure_datamigration.Tasks_CreateOrUpdate({
  "parameters": {},
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "taskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** `object`: A task resource
    * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
    * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
      * errors `array`: Array of errors. This is ignored if submitted.
        * items `object`: Error information in OData format.
          * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
          * details `array`: Inner errors that caused this error
            * items [ODataError](#odataerror)
          * message `string`: The human-readable description of the error
      * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
      * taskType **required** `string`: Task type.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * taskName **required** `string`: Name of the Task
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A task resource
  * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
  * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
    * errors `array`: Array of errors. This is ignored if submitted.
      * items `object`: Error information in OData format.
        * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
        * details `array`: Inner errors that caused this error
          * items [ODataError](#odataerror)
        * message `string`: The human-readable description of the error
    * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
    * taskType **required** `string`: Task type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Tasks_Cancel
The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. This method cancels a task if it's currently queued or running.


```js
azure_datamigration.Tasks_Cancel({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "projectName": "",
  "taskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * projectName **required** `string`: Name of the project
  * taskName **required** `string`: Name of the Task
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: A task resource
  * etag `string`: HTTP strong entity tag value. This is ignored if submitted.
  * properties `object`: Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
    * errors `array`: Array of errors. This is ignored if submitted.
      * items `object`: Error information in OData format.
        * code `string`: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
        * details `array`: Inner errors that caused this error
          * items [ODataError](#odataerror)
        * message `string`: The human-readable description of the error
    * state `string` (values: Unknown, Queued, Running, Canceled, Succeeded, Failed, FailedInputValidation, Faulted): The state of the task. This is ignored if submitted.
    * taskType **required** `string`: Task type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Services_ListSkus
The services resource is the top-level resource that represents the Data Migration Service. The skus action returns the list of SKUs that a service resource can be updated to.


```js
azure_datamigration.Services_ListSkus({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
* output `object`: OData page of available SKUs
  * nextLink `string`: URL to load the next page of service SKUs
  * value `array`: List of service SKUs
    * items `object`: Describes the available service SKU.
      * capacity `object`: A description of the scaling capacities of the SKU
        * default `integer`: The default capacity
        * maximum `integer`: The maximum capacity
        * minimum `integer`: The minimum capacity, usually 0 or 1.
        * scaleType `string` (values: none, manual, automatic): The scalability approach
      * resourceType `string`: The resource type, including the provider namespace
      * sku `object`: SKU name, tier, etc.
        * family `string`: SKU family
        * name `string`: The name of the SKU
        * size `string`: SKU size
        * tier `string`: The tier of the SKU, such as "Free", "Basic", "Standard", or "Premium"

### Services_Start
The services resource is the top-level resource that represents the Data Migration Service. This action starts the service and the service can be used for data migration.


```js
azure_datamigration.Services_Start({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
*Output schema unknown*

### Services_Stop
The services resource is the top-level resource that represents the Data Migration Service. This action stops the service and the service cannot be used for data migration. The service owner won't be billed when the service is stopped.


```js
azure_datamigration.Services_Stop({
  "subscriptionId": "",
  "groupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Identifier of the subscription
  * groupName **required** `string`: Name of the resource group
  * serviceName **required** `string`: Name of the service
  * api-version **required** `string`: Version of the API

#### Output
*Output schema unknown*



## Definitions

### ODataError



