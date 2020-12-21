# @datafire/configcat

Client library for ConfigCat Public Management API

## Installation and Usage
```bash
npm install --save @datafire/configcat
```
```js
let configcat = require('@datafire/configcat').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

**Base API URL**: https://api.configcat.com

If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).

The purpose of this API is to access the ConfigCat platform programmatically. 
You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat. 

The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON 
and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).


# OpenAPI Specification

The complete specification is publicly available here: [swagger.json](v1/swagger.json). 
You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or
[Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.

# Authentication
This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication). 

<!-- ReDoc-Inject: <security-definitions> -->

# Throttling and rate limits
All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:

| Header | Description |
| :- | :- |
| X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. |
| X-Rate-Limit-Reset     | The time	when the current rate limit period resets.						  |

When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header.


## Actions

### v1.configs.configId.delete
This endpoint removes a Config identified by the `configId` parameter.


```js
configcat.v1.configs.configId.delete({
  "configId": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.

#### Output
*Output schema unknown*

### v1.configs.configId.get
This endpoint returns the metadata of a Config
identified by the `configId`.


```js
configcat.v1.configs.configId.get({
  "configId": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.

#### Output
* output [ConfigModel-haljson](#configmodel-haljson)

### v1.configs.configId.put
This endpoint updates a Config identified by the `configId` parameter.


```js
configcat.v1.configs.configId.put({
  "configId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.
  * body **required** [UpdateConfigRequest](#updateconfigrequest)

#### Output
* output [ConfigModel-haljson](#configmodel-haljson)

### v1.configs.configId.environments.environmentId.get
This endpoint returns the SDK Key for your Config in a specified Environment.


```js
configcat.v1.configs.configId.environments.environmentId.get({
  "configId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.
  * environmentId **required** `string`: The identifier of the Environment.

#### Output
* output [SdkKeysModel](#sdkkeysmodel)

### v1.configs.configId.settings.get
This endpoint returns the list of the Feature Flags and Settings defined in a 
specified Config, identified by the `configId` parameter.


```js
configcat.v1.configs.configId.settings.get({
  "configId": ""
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.

#### Output
* output `array`
  * items [SettingModel-haljson](#settingmodel-haljson)

### v1.configs.configId.settings.post
This endpoint creates a new Feature Flag or Setting in a specified Config
identified by the `configId` parameter.

**Important:** The `key` attribute must be unique within the given Config.


```js
configcat.v1.configs.configId.settings.post({
  "configId": "",
  "body": {
    "key": "",
    "name": "",
    "settingType": ""
  }
}, context)
```

#### Input
* input `object`
  * configId **required** `string`: The identifier of the Config.
  * body **required** [CreateSettingModel](#createsettingmodel)

#### Output
* output [SettingModel-haljson](#settingmodel-haljson)

### v1.environments.environmentId.delete
This endpoint removes an Environment identified by the `environmentId` parameter.


```js
configcat.v1.environments.environmentId.delete({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.

#### Output
*Output schema unknown*

### v1.environments.environmentId.get
This endpoint returns the metadata of an Environment 
identified by the `environmentId`.


```js
configcat.v1.environments.environmentId.get({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.

#### Output
* output [EnvironmentModel-haljson](#environmentmodel-haljson)

### v1.environments.environmentId.put
This endpoint updates an Environment identified by the `environmentId` parameter.


```js
configcat.v1.environments.environmentId.put({
  "environmentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * body **required** [UpdateEnvironmentModel](#updateenvironmentmodel)

#### Output
* output [EnvironmentModel-haljson](#environmentmodel-haljson)

### v1.environments.environmentId.settings.settingId.integrationLinks.integrationLinkType.key.delete
Delete Integration link


```js
configcat.v1.environments.environmentId.settings.settingId.integrationLinks.integrationLinkType.key.delete({
  "environmentId": "",
  "settingId": 0,
  "integrationLinkType": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * settingId **required** `integer`: The id of the Setting.
  * integrationLinkType **required** `string` (values: trello, jira): The integration's type.
  * key **required** `string`: The key of the integration link.

#### Output
* output [DeleteIntegrationLinkModel](#deleteintegrationlinkmodel)

### v1.environments.environmentId.settings.settingId.integrationLinks.integrationLinkType.key.post
Add or update Integration link


```js
configcat.v1.environments.environmentId.settings.settingId.integrationLinks.integrationLinkType.key.post({
  "environmentId": "",
  "settingId": 0,
  "integrationLinkType": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * settingId **required** `integer`: The id of the Setting.
  * integrationLinkType **required** `string` (values: trello, jira): The integration link's type.
  * key **required** `string`: The key of the integration link.
  * body [AddOrUpdateIntegrationLinkModel](#addorupdateintegrationlinkmodel)

#### Output
* output [IntegrationLinkModel](#integrationlinkmodel)

### v1.environments.environmentId.settings.settingId.value.get
This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).


```js
configcat.v1.environments.environmentId.settings.settingId.value.get({
  "environmentId": "",
  "settingId": 0
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * settingId **required** `integer`: The id of the Setting.

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.environments.environmentId.settings.settingId.value.patch
This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```


```js
configcat.v1.environments.environmentId.settings.settingId.value.patch({
  "environmentId": "",
  "settingId": 0,
  "body": []
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * settingId **required** `integer`: The id of the Setting.
  * reason `string`: The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
  * body **required** `array`
    * items [Operation](#operation)

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.environments.environmentId.settings.settingId.value.put
This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```


```js
configcat.v1.environments.environmentId.settings.settingId.value.put({
  "environmentId": "",
  "settingId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`: The identifier of the Environment.
  * settingId **required** `integer`: The id of the Setting.
  * reason `string`: The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
  * body **required** [UpdateSettingValueModel](#updatesettingvaluemodel)

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.integrationLink.integrationLinkType.key.details.get
Get Integration link


```js
configcat.v1.integrationLink.integrationLinkType.key.details.get({
  "integrationLinkType": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * integrationLinkType **required** `string` (values: trello, jira): The integration link's type.
  * key **required** `string`: The key of the integration link.

#### Output
* output [IntegrationLinkDetailsModel](#integrationlinkdetailsmodel)

### v1.me.get
Get authenticated user details


```js
configcat.v1.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MeModel](#memodel)

### v1.organizations.get
This endpoint returns the list of the Organizations that belongs to the user.


```js
configcat.v1.organizations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OrganizationModel-haljson](#organizationmodel-haljson)

### v1.organizations.organizationId.members.get
This endpoint returns the list of Members that belongs 
to the given Organization, identified by the `organizationId` parameter.


```js
configcat.v1.organizations.organizationId.members.get({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The identifier of the Organization.

#### Output
* output `array`
  * items [MemberModel](#membermodel)

### v1.organizations.organizationId.members.userId.delete
This endpoint removes a Member identified by the `userId` from the 
given Organization identified by the `organizationId` parameter.


```js
configcat.v1.organizations.organizationId.members.userId.delete({
  "organizationId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The identifier of the Organization.
  * userId **required** `string`: The identifier of the Member.

#### Output
*Output schema unknown*

### v1.organizations.organizationId.products.post
This endpoint creates a new Product in a specified Organization 
identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.


```js
configcat.v1.organizations.organizationId.products.post({
  "organizationId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`: The identifier of the Organization.
  * body **required** [CreateProductRequest](#createproductrequest)

#### Output
* output [ProductModel-haljson](#productmodel-haljson)

### v1.permissions.permissionGroupId.delete
This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.


```js
configcat.v1.permissions.permissionGroupId.delete({
  "permissionGroupId": 0
}, context)
```

#### Input
* input `object`
  * permissionGroupId **required** `integer`: The identifier of the Permission Group.

#### Output
*Output schema unknown*

### v1.permissions.permissionGroupId.get
This endpoint returns the metadata of a Permission Group 
identified by the `permissionGroupId`.


```js
configcat.v1.permissions.permissionGroupId.get({
  "permissionGroupId": 0
}, context)
```

#### Input
* input `object`
  * permissionGroupId **required** `integer`: The identifier of the Permission Group.

#### Output
* output [PermissionGroupModel](#permissiongroupmodel)

### v1.permissions.permissionGroupId.put
This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.


```js
configcat.v1.permissions.permissionGroupId.put({
  "permissionGroupId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * permissionGroupId **required** `integer`: The identifier of the Permission Group.
  * body **required** [UpdateMemberGroupRequest](#updatemembergrouprequest)

#### Output
* output [PermissionGroupModel](#permissiongroupmodel)

### v1.products.get
This endpoint returns the list of the Products that belongs to the user.


```js
configcat.v1.products.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProductModel-haljson](#productmodel-haljson)

### v1.products.productId.delete
This endpoint removes a Product identified by the `productId` parameter.


```js
configcat.v1.products.productId.delete({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
*Output schema unknown*

### v1.products.productId.get
This endpoint returns the metadata of a Product 
identified by the `productId`.


```js
configcat.v1.products.productId.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output [ProductModel-haljson](#productmodel-haljson)

### v1.products.productId.put
This endpoint updates a Product identified by the `productId` parameter.


```js
configcat.v1.products.productId.put({
  "productId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * body **required** [UpdateProductRequest](#updateproductrequest)

#### Output
* output [ProductModel-haljson](#productmodel-haljson)

### v1.products.productId.auditlogs.get
This endpoint returns the list of Audit logs for a given Product 
and the result can be optionally filtered by Config and/or Environment.


```js
configcat.v1.products.productId.auditlogs.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * configId `string`: The identifier of the Config.
  * environmentId `string`: The identifier of the Environment.
  * fromUtcDateTime `string`: Filter Audit logs by starting UTC date.
  * toUtcDateTime `string`: Filter Audit logs by ending UTC date.

#### Output
* output `array`
  * items [AuditLogItemModel](#auditlogitemmodel)

### v1.products.productId.configs.get
This endpoint returns the list of the Configs that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.configs.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output `array`
  * items [ConfigModel-haljson](#configmodel-haljson)

### v1.products.productId.configs.post
This endpoint creates a new Config in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.configs.post({
  "productId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * body **required** [CreateConfigRequest](#createconfigrequest)

#### Output
* output [ConfigModel-haljson](#configmodel-haljson)

### v1.products.productId.environments.get
This endpoint returns the list of the Environments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.environments.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output `array`
  * items [EnvironmentModel-haljson](#environmentmodel-haljson)

### v1.products.productId.environments.post
This endpoint creates a new Environment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.environments.post({
  "productId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * body **required** [CreateEnvironmentModel](#createenvironmentmodel)

#### Output
* output [EnvironmentModel-haljson](#environmentmodel-haljson)

### v1.products.productId.members.get
This endpoint returns the list of Members that belongs 
to the given Product, identified by the `productId` parameter.


```js
configcat.v1.products.productId.members.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output `array`
  * items [MemberModel](#membermodel)

### v1.products.productId.members.invite.post
This endpoint invites a Member into the given Product identified by the `productId` parameter.


```js
configcat.v1.products.productId.members.invite.post({
  "productId": "",
  "body": {
    "emails": [],
    "permissionGroupId": 0
  }
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * body **required** [InviteMembersRequest](#invitemembersrequest)

#### Output
*Output schema unknown*

### v1.products.productId.members.userId.delete
This endpoint removes a Member identified by the `userId` from the 
given Product identified by the `productId` parameter.


```js
configcat.v1.products.productId.members.userId.delete({
  "productId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * userId **required** `string`: The identifier of the Member.

#### Output
*Output schema unknown*

### v1.products.productId.permissions.get
This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.permissions.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output `array`
  * items [PermissionGroupModel](#permissiongroupmodel)

### v1.products.productId.permissions.post
This endpoint creates a new Permission Group in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.permissions.post({
  "productId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.
  * body **required** [CreateMemberGroupRequest](#createmembergrouprequest)

#### Output
* output [PermissionGroupModel](#permissiongroupmodel)

### v1.products.productId.tags.get
This endpoint returns the list of the Tags in a 
specified Product, identified by the `productId` parameter.


```js
configcat.v1.products.productId.tags.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Product.

#### Output
* output `array`
  * items [TagModel-haljson](#tagmodel-haljson)

### v1.products.productId.tags.post
This endpoint creates a new Tag in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.


```js
configcat.v1.products.productId.tags.post({
  "productId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The identifier of the Organization.
  * body **required** [CreateTagModel](#createtagmodel)

#### Output
* output [TagModel-haljson](#tagmodel-haljson)

### v1.settings.settingId.delete
This endpoint removes a Feature Flag or Setting from a specified Config, 
identified by the `configId` parameter.


```js
configcat.v1.settings.settingId.delete({
  "settingId": 0
}, context)
```

#### Input
* input `object`
  * settingId **required** `integer`: The identifier of the Setting.

#### Output
*Output schema unknown*

### v1.settings.settingId.get
This endpoint returns the metadata attributes of a Feature Flag or Setting 
identified by the `settingId` parameter.


```js
configcat.v1.settings.settingId.get({
  "settingId": 0
}, context)
```

#### Input
* input `object`
  * settingId **required** `integer`: The identifier of the Setting.

#### Output
* output [SettingModel-haljson](#settingmodel-haljson)

### v1.settings.settingId.patch
This endpoint updates the metadata of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.

Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change.

For example: We have the following resource.
```
{
	"settingId": 5345,
	"key": "myAwesomeFeature",
	"name": "Tihs is a naem with soem typos.",
	"hint": "This Flag controls my awesome feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		}
	]
}
```
If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
```
[
	{
		"op": "replace",
		"path": "/name",
		"value": "This is the name without typos."
	},
	{
		"op": "add",
		"path": "/tags/-",
		"value": 2
	}
]
```
Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
So we get a response like this:
```
{
	"settingId": 5345,
	"key": "myAwesomeFeature",
	"name": "This is the name without typos.",
	"hint": "This Flag controls my awesome feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		},
		{
			"tagId": 2,
			"name": "another tag",
			"color": "koala"
		}
	]
}
```


```js
configcat.v1.settings.settingId.patch({
  "settingId": 0,
  "body": []
}, context)
```

#### Input
* input `object`
  * settingId **required** `integer`: The identifier of the Setting.
  * body **required** `array`
    * items [Operation](#operation)

#### Output
* output [SettingModel-haljson](#settingmodel-haljson)

### v1.settings.settingKeyOrId.value.get
This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).


```js
configcat.v1.settings.settingKeyOrId.value.get({
  "settingKeyOrId": "",
  "X-CONFIGCAT-SDKKEY": ""
}, context)
```

#### Input
* input `object`
  * settingKeyOrId **required** `string`: The key or id of the Setting.
  * X-CONFIGCAT-SDKKEY **required** `string`: The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.settings.settingKeyOrId.value.patch
This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```


```js
configcat.v1.settings.settingKeyOrId.value.patch({
  "settingKeyOrId": "",
  "X-CONFIGCAT-SDKKEY": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * settingKeyOrId **required** `string`: The key or id of the Setting.
  * reason `string`: The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
  * X-CONFIGCAT-SDKKEY **required** `string`: The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
  * body **required** `array`
    * items [Operation](#operation)

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.settings.settingKeyOrId.value.put
This endpoint replaces the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change to its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```


```js
configcat.v1.settings.settingKeyOrId.value.put({
  "settingKeyOrId": "",
  "X-CONFIGCAT-SDKKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * settingKeyOrId **required** `string`: The key or id of the Setting.
  * reason `string`: The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
  * X-CONFIGCAT-SDKKEY **required** `string`: The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
  * body **required** [UpdateSettingValueModel](#updatesettingvaluemodel)

#### Output
* output [SettingValueModel-haljson](#settingvaluemodel-haljson)

### v1.tags.tagId.delete
This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.


```js
configcat.v1.tags.tagId.delete({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: The identifier of the Tag.

#### Output
*Output schema unknown*

### v1.tags.tagId.get
This endpoint returns the metadata of a Tag 
identified by the `tagId`.


```js
configcat.v1.tags.tagId.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: The identifier of the Tag.

#### Output
* output [TagModel-haljson](#tagmodel-haljson)

### v1.tags.tagId.put
This endpoint updates a Tag identified by the `tagId` parameter.


```js
configcat.v1.tags.tagId.put({
  "tagId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: The identifier of the Tag.
  * body **required** [UpdateTagModel](#updatetagmodel)

#### Output
* output [TagModel-haljson](#tagmodel-haljson)

### v1.tags.tagId.settings.get
This endpoint returns the list of the Settings that 
has the specified Tag, identified by the `tagId` parameter.


```js
configcat.v1.tags.tagId.settings.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: The identifier of the Tag.

#### Output
* output `array`
  * items [SettingModel-haljson](#settingmodel-haljson)



## Definitions

### AccessType
* AccessType `string` (values: readOnly, full, custom)

### AddOrUpdateIntegrationLinkModel
* AddOrUpdateIntegrationLinkModel `object`
  * description `string`
  * url `string`

### AuditLogItemModel
* AuditLogItemModel `object`
  * actionTarget `string`
  * auditLogDateTime `string`
  * auditLogId `integer`
  * auditLogType `string`
  * details `string`
  * userEmail `string`
  * userName `string`
  * where `string`
  * why `string`

### AuditLogType
* AuditLogType `string` (values: productCreated, productChanged, productOwnershipTransferred, productDeleted, teamMemberInvited, teamMemberInvitationRevoked, teamMemberJoined, teamMemberPermissionGroupChanged, teamMemberRemoved, teamMemberLeft, teamMemberInvitationChanged, teamMemberInvitationResent, teamMemberInvitationRejected, configCreated, configChanged, configDeleted, environmentCreated, environmentChanged, environmentDeleted, settingCreated, settingChanged, settingDeleted, settingValueChanged, webHookCreated, webHookChanged, webHookDeleted, subscriptionChanged, memberGroupCreated, memberGroupChanged, memberGroupDeleted, memberGroupDefault, apiKeyAdded, apiKeyRemoved, integrationAdded, integrationChanged, integrationRemoved, apiKeyConnected, integrationLinkAdded, integrationLinkRemoved, organizationAdded, organizationRemoved, organizationChanged, organizationSubscriptionTypeChanged, organizationAdminAdded, organizationAdminChanged, organizationAdminRemoved, organizationAdminLeft, tagAdded, tagChanged, tagRemoved, settingTagAdded, settingTagRemoved, publicApiAccessTokenAdded, publicApiAccessTokenRemoved)

### ConfigModel
* ConfigModel `object`
  * configId `string`
  * name `string`
  * product [ProductModel](#productmodel)

### ConfigModel-haljson
* ConfigModel-haljson `object`
  * _embedded `object`
    * product `object`
      * _embedded `object`
        * organization `object`
          * _links `object`
          * name `string`
          * organizationId `string`
      * _links `object`
        * tags `string`
        * configs `string`
        * environments `string`
        * members `string`
        * permission-groups `string`
        * self `string`
      * name `string`
      * productId `string`
  * _links `object`
    * self `string`
    * settings `string`
  * configId `string`
  * name `string`

### CreateConfigRequest
* CreateConfigRequest `object`
  * name **required** `string`

### CreateEnvironmentModel
* CreateEnvironmentModel `object`
  * name **required** `string`

### CreateMemberGroupRequest
* CreateMemberGroupRequest `object`
  * accessType [AccessType](#accesstype)
  * canManageMembers `boolean`
  * canManageResources `boolean`
  * environmentAccesses `array`
    * items [EnvironmentAccessModel](#environmentaccessmodel)
  * name **required** `string`
  * newEnvironmentAccessType [EnvironmentAccessType](#environmentaccesstype)
  * showDeveloperInfo `boolean`

### CreateProductRequest
* CreateProductRequest `object`
  * name **required** `string`

### CreateSettingModel
* CreateSettingModel `object`
  * tags `array`: The IDs of the tags which are attached to the setting.
    * items `integer`
  * hint `string`: A short description for the setting, shown on the Dashboard UI.
  * key **required** `string`: The key of the setting.
  * name **required** `string`: The name of the setting, shown on the Dashboard UI.
  * settingType **required** [SettingType](#settingtype)

### CreateTagModel
* CreateTagModel `object`
  * color `string`
  * name **required** `string`

### DeleteIntegrationLinkModel
* DeleteIntegrationLinkModel `object`
  * hasRemainingIntegrationLink `boolean`

### EnvironmentAccessModel
* EnvironmentAccessModel `object`
  * environmentAccessType [EnvironmentAccessType](#environmentaccesstype)
  * environmentId `string`
  * name `string`

### EnvironmentAccessType
* EnvironmentAccessType `string` (values: full, readOnly, none)

### EnvironmentModel
* EnvironmentModel `object`
  * environmentId `string`
  * name `string`
  * product [ProductModel](#productmodel)

### EnvironmentModel-haljson
* EnvironmentModel-haljson `object`
  * _embedded `object`
    * product `object`
      * _embedded `object`
        * organization `object`
          * _links `object`
          * name `string`
          * organizationId `string`
      * _links `object`
        * tags `string`
        * configs `string`
        * environments `string`
        * members `string`
        * permission-groups `string`
        * self `string`
      * name `string`
      * productId `string`
  * _links `object`
    * self `string`
  * environmentId `string`
  * name `string`

### IntegrationLinkDetail
* IntegrationLinkDetail `object`
  * config [ConfigModel](#configmodel)
  * environment [EnvironmentModel](#environmentmodel)
  * product [ProductModel](#productmodel)
  * readOnly `boolean`
  * setting [SettingDataModel](#settingdatamodel)
  * status `string`

### IntegrationLinkDetailsModel
* IntegrationLinkDetailsModel `object`
  * allIntegrationLinkCount `integer`
  * details `array`
    * items [IntegrationLinkDetail](#integrationlinkdetail)

### IntegrationLinkModel
* IntegrationLinkModel `object`
  * description `string`
  * integrationLinkType [IntegrationLinkType](#integrationlinktype)
  * key `string`
  * url `string`

### IntegrationLinkType
* IntegrationLinkType `string` (values: trello, jira)

### InviteMembersRequest
* InviteMembersRequest `object`
  * emails **required** `array`
    * items `string`
  * permissionGroupId **required** `integer`

### MeModel
* MeModel `object`
  * email `string`
  * fullName `string`

### MemberModel
* MemberModel `object`
  * email `string`
  * fullName `string`
  * permissionGroupId `integer`
  * productId `string`
  * userId `string`

### Operation
* Operation `object`
  * from `string`
  * op `string`
  * path `string`
  * value `object`

### OrganizationModel
* OrganizationModel `object`
  * name `string`
  * organizationId `string`

### OrganizationModel-haljson
* OrganizationModel-haljson `object`
  * _links `object`
    * members `string`
    * products `string`
  * name `string`
  * organizationId `string`

### PermissionGroupModel
* PermissionGroupModel `object`
  * accessType [AccessType](#accesstype)
  * canManageMembers `boolean`
  * canManageResources `boolean`
  * environmentAccesses `array`
    * items [EnvironmentAccessModel](#environmentaccessmodel)
  * name `string`
  * newEnvironmentAccessType [EnvironmentAccessType](#environmentaccesstype)
  * permissionGroupId `integer`
  * showDeveloperInfo `boolean`

### ProductModel
* ProductModel `object`
  * name `string`
  * organization [OrganizationModel](#organizationmodel)
  * productId `string`

### ProductModel-haljson
* ProductModel-haljson `object`
  * _embedded `object`
    * organization `object`
      * _links `object`
        * members `string`
        * products `string`
      * name `string`
      * organizationId `string`
  * _links `object`
    * tags `string`
    * configs `string`
    * environments `string`
    * members `string`
    * permission-groups `string`
    * self `string`
  * name `string`
  * productId `string`

### RolloutPercentageItemModel
* RolloutPercentageItemModel `object`
  * percentage **required** `integer`: The percentage value for the rule.
  * value **required** `object`: The value to serve when the user falls in the percentage rule. It must respect the setting type.

### RolloutRuleComparator
* RolloutRuleComparator `string` (values: isOneOf, isNotOneOf, contains, doesNotContain, semVerIsOneOf, semVerIsNotOneOf, semVerLess, semVerLessOrEquals, semVerGreater, semVerGreaterOrEquals, numberEquals, numberDoesNotEqual, numberLess, numberLessOrEquals, numberGreater, numberGreaterOrEquals, sensitiveIsOneOf, sensitiveIsNotOneOf)

### RolloutRuleModel
* RolloutRuleModel `object`
  * comparator [RolloutRuleComparator](#rolloutrulecomparator)
  * comparisonAttribute **required** `string`: The user attribute to compare.
  * comparisonValue **required** `string`: The value to compare against.
  * value **required** `object`: The value to serve when the comparison matches. It must respect the setting type.

### SdkKeysModel
* SdkKeysModel `object`
  * primary `string`
  * secondary `string`

### SettingDataModel
* SettingDataModel `object`
  * createdAt `string`
  * creatorEmail `string`
  * creatorFullName `string`
  * expirationWarningAt `string`
  * hint `string`
  * key `string`
  * name `string`
  * ownerEmail `string`
  * ownerFullName `string`
  * settingId `integer`
  * settingType [SettingType](#settingtype)

### SettingModel
* SettingModel `object`
  * tags `array`
    * items [TagModel](#tagmodel)
  * configId `string`
  * configName `string`
  * expirationWarningAt `string`
  * hint `string`
  * key `string`
  * name `string`
  * ownerUserEmail `string`
  * ownerUserFullName `string`
  * settingId `integer`
  * settingType [SettingType](#settingtype)

### SettingModel-haljson
* SettingModel-haljson `object`
  * _embedded `object`
    * tags `array`
      * items `object`
        * _embedded `object`
          * product `object`
        * _links `object`
          * self `string`
        * color `string`
        * name `string`
        * tagId `integer`
  * _links `object`
    * self `string`
  * configId `string`
  * configName `string`
  * expirationWarningAt `string`
  * hint `string`
  * key `string`
  * name `string`
  * ownerUserEmail `string`
  * ownerUserFullName `string`
  * settingId `integer`
  * settingType [SettingType](#settingtype)

### SettingTagModel
* SettingTagModel `object`
  * color `string`
  * name `string`
  * settingTagId `integer`
  * tagId `integer`

### SettingType
* SettingType `string` (values: boolean, string, int, double)

### SettingValueModel
* SettingValueModel `object`
  * config [ConfigModel](#configmodel)
  * environment [EnvironmentModel](#environmentmodel)
  * integrationLinks `array`
    * items [IntegrationLinkModel](#integrationlinkmodel)
  * lastUpdaterUserEmail `string`
  * lastUpdaterUserFullName `string`
  * readOnly `boolean`
  * rolloutPercentageItems `array`: The percentage rule collection.
    * items [RolloutPercentageItemModel](#rolloutpercentageitemmodel)
  * rolloutRules `array`: The targeting rule collection.
    * items [RolloutRuleModel](#rolloutrulemodel)
  * setting [SettingDataModel](#settingdatamodel)
  * settingTags `array`
    * items [SettingTagModel](#settingtagmodel)
  * updatedAt `string`
  * value `object`: The value to serve. It must respect the setting type.

### SettingValueModel-haljson
* SettingValueModel-haljson `object`
  * _embedded `object`
    * config `object`
      * _embedded `object`
        * product `object`
          * _embedded `object`
          * _links `object`
          * name `string`
          * productId `string`
      * _links `object`
        * self `string`
        * settings `string`
      * configId `string`
      * name `string`
    * environment `object`
      * _embedded `object`
        * product `object`
          * _embedded `object`
          * _links `object`
          * name `string`
          * productId `string`
      * _links `object`
        * self `string`
      * environmentId `string`
      * name `string`
    * integrationLinks `array`
      * items `object`
        * description `string`
        * integrationLinkType [IntegrationLinkType](#integrationlinktype)
        * key `string`
        * url `string`
    * setting `object`
      * createdAt `string`
      * creatorEmail `string`
      * creatorFullName `string`
      * expirationWarningAt `string`
      * hint `string`
      * key `string`
      * name `string`
      * ownerEmail `string`
      * ownerFullName `string`
      * settingId `integer`
      * settingType [SettingType](#settingtype)
    * settingTags `array`
      * items `object`
        * color `string`
        * name `string`
        * settingTagId `integer`
        * tagId `integer`
  * _links `object`
    * self `string`
  * lastUpdaterUserEmail `string`
  * lastUpdaterUserFullName `string`
  * readOnly `boolean`
  * rolloutPercentageItems `array`: The percentage rule collection.
    * items [RolloutPercentageItemModel](#rolloutpercentageitemmodel)
  * rolloutRules `array`: The targeting rule collection.
    * items [RolloutRuleModel](#rolloutrulemodel)
  * updatedAt `string`
  * value `object`: The value to serve. It must respect the setting type.

### TagModel
* TagModel `object`
  * color `string`
  * name `string`
  * product [ProductModel](#productmodel)
  * tagId `integer`

### TagModel-haljson
* TagModel-haljson `object`
  * _embedded `object`
    * product `object`
      * _embedded `object`
        * organization `object`
          * _links `object`
          * name `string`
          * organizationId `string`
      * _links `object`
        * tags `string`
        * configs `string`
        * environments `string`
        * members `string`
        * permission-groups `string`
        * self `string`
      * name `string`
      * productId `string`
  * _links `object`
    * self `string`
  * color `string`
  * name `string`
  * tagId `integer`

### UpdateConfigRequest
* UpdateConfigRequest `object`
  * name `string`

### UpdateEnvironmentModel
* UpdateEnvironmentModel `object`
  * name `string`

### UpdateMemberGroupRequest
* UpdateMemberGroupRequest `object`
  * accessType [AccessType](#accesstype)
  * canManageMembers `boolean`
  * canManageResources `boolean`
  * environmentAccesses `array`
    * items [EnvironmentAccessModel](#environmentaccessmodel)
  * name `string`
  * newEnvironmentAccessType [EnvironmentAccessType](#environmentaccesstype)
  * showDeveloperInfo `boolean`

### UpdateProductRequest
* UpdateProductRequest `object`
  * name `string`

### UpdateSettingValueModel
* UpdateSettingValueModel `object`
  * rolloutPercentageItems `array`: The percentage rule collection.
    * items [RolloutPercentageItemModel](#rolloutpercentageitemmodel)
  * rolloutRules `array`: The targeting rule collection.
    * items [RolloutRuleModel](#rolloutrulemodel)
  * value `object`: The value to serve. It must respect the setting type.

### UpdateTagModel
* UpdateTagModel `object`
  * color `string`
  * name **required** `string`


