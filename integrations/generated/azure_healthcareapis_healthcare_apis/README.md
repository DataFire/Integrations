# @datafire/azure_healthcareapis_healthcare_apis

Client library for HealthcareApisClient

## Installation and Usage
```bash
npm install --save @datafire/azure_healthcareapis_healthcare_apis
```
```js
let azure_healthcareapis_healthcare_apis = require('@datafire/azure_healthcareapis_healthcare_apis').create({
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

Use this API to manage Microsoft HealthcareApis services in your Azure subscription.

## Actions

### Operations_List
Lists all of the available Healthcare service REST API operations.


```js
azure_healthcareapis_healthcare_apis.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Services_CheckNameAvailability
Check if a service instance name is available.


```js
azure_healthcareapis_healthcare_apis.Services_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "checkNameAvailabilityInputs": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * checkNameAvailabilityInputs **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)

#### Output
* output [ServicesNameAvailabilityInfo](#servicesnameavailabilityinfo)

### OperationResults_Get
Get the operation result for a long running operation.


```js
azure_healthcareapis_healthcare_apis.OperationResults_Get({
  "api-version": "",
  "subscriptionId": "",
  "locationName": "",
  "operationResultId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * locationName **required** `string`: The location of the operation.
  * operationResultId **required** `string`: The ID of the operation result to get.

#### Output
* output [OperationResultsDescription](#operationresultsdescription)

### Services_List
Get all the service instances in a subscription.


```js
azure_healthcareapis_healthcare_apis.Services_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [ServicesDescriptionListResult](#servicesdescriptionlistresult)

### Services_ListByResourceGroup
Get all the service instances in a resource group.


```js
azure_healthcareapis_healthcare_apis.Services_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the service instance.

#### Output
* output [ServicesDescriptionListResult](#servicesdescriptionlistresult)

### Services_Delete
Delete a service instance.


```js
azure_healthcareapis_healthcare_apis.Services_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the service instance.
  * resourceName **required** `string`: The name of the service instance.

#### Output
*Output schema unknown*

### Services_Get
Get the metadata of a service instance.


```js
azure_healthcareapis_healthcare_apis.Services_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the service instance.
  * resourceName **required** `string`: The name of the service instance.

#### Output
* output [ServicesDescription](#servicesdescription)

### Services_Update
Update the metadata of a service instance.


```js
azure_healthcareapis_healthcare_apis.Services_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "servicePatchDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the service instance.
  * resourceName **required** `string`: The name of the service instance.
  * servicePatchDescription **required** [ServicesPatchDescription](#servicespatchdescription)

#### Output
* output [ServicesDescription](#servicesdescription)

### Services_CreateOrUpdate
Create or update the metadata of a service instance.


```js
azure_healthcareapis_healthcare_apis.Services_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "serviceDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the service instance.
  * resourceName **required** `string`: The name of the service instance.
  * serviceDescription **required** [ServicesDescription](#servicesdescription)

#### Output
* output [ServicesDescription](#servicesdescription)



## Definitions

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Input values.
  * name **required** `string`: The name of the service instance to check.
  * type **required** `string`: The fully qualified resource type which includes provider namespace.

### ErrorDetails
* ErrorDetails `object`: Error details.
  * error [ErrorDetailsInternal](#errordetailsinternal)

### ErrorDetailsInternal
* ErrorDetailsInternal `object`: Error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### Operation
* Operation `object`: Service REST API operation.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}
  * origin `string`: Default value is 'user,system'.

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description `string`: Friendly description for the operation,
  * operation `string`: Name of the operation
  * provider `string`: Service provider: Microsoft.HealthcareApis
  * resource `string`: Resource Type: Services

### OperationListResult
* OperationListResult `object`: A list of service operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The link used to get the next page of service description objects.
  * value `array`: A list of service operations supported by the Microsoft.HealthcareApis resource provider.
    * items [Operation](#operation)

### OperationResultsDescription
* OperationResultsDescription `object`: The properties indicating the operation result of an operation on a service.
  * id `string`: The ID of the operation returned.
  * name `string`: The name of the operation result.
  * startTime `string`: The time that the operation was started.
  * status `string` (values: Canceled, Succeeded, Failed, Requested, Running): The status of the operation being performed.

### Resource
* Resource `object`: The common properties of a service.
  * etag `string`: An etag associated with the resource, used for optimistic concurrency when editing it.
  * id `string`: The resource identifier.
  * kind **required** `string` (values: fhir, fhir-Stu3, fhir-R4): The kind of the service.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### ServiceAccessPoliciesInfo
* ServiceAccessPoliciesInfo `array`: The access policies of the service instance.
  * items [ServiceAccessPolicyEntry](#serviceaccesspolicyentry)

### ServiceAccessPolicyEntry
* ServiceAccessPolicyEntry `object`: An access policy entry.
  * objectId **required** `string`: An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.

### ServiceAuthenticationConfigurationInfo
* ServiceAuthenticationConfigurationInfo `object`: Authentication configuration information
  * audience `string`: The audience url for the service
  * authority `string`: The authority url for the service
  * smartProxyEnabled `boolean`: If the SMART on FHIR proxy is enabled

### ServiceCorsConfigurationHeaderEntry
* ServiceCorsConfigurationHeaderEntry `string`: A header for CORS.

### ServiceCorsConfigurationInfo
* ServiceCorsConfigurationInfo `object`: The settings for the CORS configuration of the service instance.
  * allowCredentials `boolean`: If credentials are allowed via CORS.
  * headers `array`: The headers to be allowed via CORS.
    * items [ServiceCorsConfigurationHeaderEntry](#servicecorsconfigurationheaderentry)
  * maxAge `integer`: The max age to be allowed via CORS.
  * methods `array`: The methods to be allowed via CORS.
    * items [ServiceCorsConfigurationMethodEntry](#servicecorsconfigurationmethodentry)
  * origins `array`: The origins to be allowed via CORS.
    * items [ServiceCorsConfigurationOriginEntry](#servicecorsconfigurationoriginentry)

### ServiceCorsConfigurationMethodEntry
* ServiceCorsConfigurationMethodEntry `string`: A method for CORS.

### ServiceCorsConfigurationOriginEntry
* ServiceCorsConfigurationOriginEntry `string`: An origin for CORS.

### ServiceCosmosDbConfigurationInfo
* ServiceCosmosDbConfigurationInfo `object`: The settings for the Cosmos DB database backing the service.
  * offerThroughput `integer`: The provisioned throughput for the backing database.

### ServicesDescription
* ServicesDescription `object`: The description of the service.
  * properties [ServicesProperties](#servicesproperties)
  * etag `string`: An etag associated with the resource, used for optimistic concurrency when editing it.
  * id `string`: The resource identifier.
  * kind **required** `string` (values: fhir, fhir-Stu3, fhir-R4): The kind of the service.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### ServicesDescriptionListResult
* ServicesDescriptionListResult `object`: A list of service description objects with a next link.
  * nextLink `string`: The link used to get the next page of service description objects.
  * value `array`: A list of service description objects.
    * items [ServicesDescription](#servicesdescription)

### ServicesNameAvailabilityInfo
* ServicesNameAvailabilityInfo `object`: The properties indicating whether a given service name is available.
  * message `string`: The detailed reason message.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.
  * reason `string` (values: Invalid, AlreadyExists): The reason for unavailability.

### ServicesPatchDescription
* ServicesPatchDescription `object`: The description of the service.
  * tags `object`: Instance tags

### ServicesProperties
* ServicesProperties `object`: The properties of a service instance.
  * accessPolicies **required** [ServiceAccessPoliciesInfo](#serviceaccesspoliciesinfo)
  * authenticationConfiguration [ServiceAuthenticationConfigurationInfo](#serviceauthenticationconfigurationinfo)
  * corsConfiguration [ServiceCorsConfigurationInfo](#servicecorsconfigurationinfo)
  * cosmosDbConfiguration [ServiceCosmosDbConfigurationInfo](#servicecosmosdbconfigurationinfo)
  * provisioningState `string` (values: Deleting, Succeeded, Creating, Accepted, Verifying, Updating, Failed, Canceled, Deprovisioned): The provisioning state.


