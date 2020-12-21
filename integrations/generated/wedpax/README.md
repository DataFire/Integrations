# @datafire/wedpax

Client library for Wedpax

## Installation and Usage
```bash
npm install --save @datafire/wedpax
```
```js
let wedpax = require('@datafire/wedpax').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.ServiceQuery.Get.get



```js
wedpax.api.ServiceQuery.Get.get({}, context)
```

#### Input
* input `object`
  * CurrentPage `integer`
  * PageSize `integer`
  * Sorting.PropertyName `string`
  * Sorting.OrderByDescending `boolean`

#### Output
* output [PagedResultDto[WeddingVendorDto]](#pagedresultdto[weddingvendordto])

### Search



```js
wedpax.Search({}, context)
```

#### Input
* input `object`
  * City `string`
  * CatgoryId `integer`
  * PageNumber `integer`

#### Output
* output `array`
  * items [ServiceListModel](#servicelistmodel)

### UserService



```js
wedpax.UserService({}, context)
```

#### Input
* input `object`
  * serviceId `integer`

#### Output
* output [UpdateWeddingVendorDto](#updateweddingvendordto)

### UserServices



```js
wedpax.UserServices({}, context)
```

#### Input
* input `object`
  * userId `integer`

#### Output
* output `array`
  * items [UserServicesDto](#userservicesdto)

### Authenticate



```js
wedpax.Authenticate({}, context)
```

#### Input
* input `object`
  * model [AuthenticateModel](#authenticatemodel)

#### Output
* output [AuthenticateResultModel](#authenticateresultmodel)

### ExternalAuthenticate



```js
wedpax.ExternalAuthenticate({}, context)
```

#### Input
* input `object`
  * model [ExternalAuthenticateModel](#externalauthenticatemodel)

#### Output
* output [ExternalAuthenticateResultModel](#externalauthenticateresultmodel)

### GetExternalAuthenticationProviders



```js
wedpax.GetExternalAuthenticationProviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ExternalLoginProviderInfoModel](#externalloginproviderinfomodel)

### Login



```js
wedpax.Login({}, context)
```

#### Input
* input `object`
  * model [LoginModel](#loginmodel)

#### Output
* output [AuthenticateResultModel](#authenticateresultmodel)

### RefreshToken



```js
wedpax.RefreshToken({}, context)
```

#### Input
* input `object`
  * userName `string`

#### Output
* output [AuthenticateResultModel](#authenticateresultmodel)

### IsTenantAvailable



```js
wedpax.IsTenantAvailable({}, context)
```

#### Input
* input `object`
  * input [IsTenantAvailableInput](#istenantavailableinput)

#### Output
* output [IsTenantAvailableOutput](#istenantavailableoutput)

### Register



```js
wedpax.Register({}, context)
```

#### Input
* input `object`
  * input [RegisterInput](#registerinput)

#### Output
* output [RegisterOutput](#registeroutput)

### api.services.app.AddressServices.Create.post



```js
wedpax.api.services.app.AddressServices.Create.post({}, context)
```

#### Input
* input `object`
  * input [GeoDetailsCreateDto](#geodetailscreatedto)

#### Output
* output [GeoDetailsDto](#geodetailsdto)

### api.services.app.AddressServices.Delete.delete



```js
wedpax.api.services.app.AddressServices.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.AddressServices.Get.get



```js
wedpax.api.services.app.AddressServices.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [GeoDetailsDto](#geodetailsdto)

### api.services.app.AddressServices.GetAll.get



```js
wedpax.api.services.app.AddressServices.GetAll.get({}, context)
```

#### Input
* input `object`
  * Sorting `string`
  * SkipCount `integer`
  * MaxResultCount `integer`

#### Output
* output [PagedResultDto[GeoDetailsDto]](#pagedresultdto[geodetailsdto])

### GetCities



```js
wedpax.GetCities({}, context)
```

#### Input
* input `object`
  * provinceId `integer`

#### Output
* output `array`
  * items [CityDto](#citydto)

### GetProvince



```js
wedpax.GetProvince(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProvinceDto](#provincedto)

### api.services.app.AddressServices.Update.put



```js
wedpax.api.services.app.AddressServices.Update.put({}, context)
```

#### Input
* input `object`
  * input [GeoDetailsUpdateDto](#geodetailsupdatedto)

#### Output
* output [GeoDetailsDto](#geodetailsdto)

### api.services.app.CategoryService.Create.post



```js
wedpax.api.services.app.CategoryService.Create.post({}, context)
```

#### Input
* input `object`
  * categoryDto [ServiceCategroyCreateDto](#servicecategroycreatedto)

#### Output
* output [ServiceCategoryDto](#servicecategorydto)

### api.services.app.CategoryService.Delete.delete



```js
wedpax.api.services.app.CategoryService.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.CategoryService.Get.get



```js
wedpax.api.services.app.CategoryService.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [ServiceCategoryDto](#servicecategorydto)

### api.services.app.CategoryService.GetAll.get



```js
wedpax.api.services.app.CategoryService.GetAll.get({}, context)
```

#### Input
* input `object`
  * TotalCount `integer`
  * Items `array`

#### Output
* output [PagedResultDto[ServiceCategoryDto]](#pagedresultdto[servicecategorydto])

### GetById



```js
wedpax.GetById({}, context)
```

#### Input
* input `object`
  * id `integer`

#### Output
* output [ServiceCategory](#servicecategory)

### GetByName



```js
wedpax.GetByName({}, context)
```

#### Input
* input `object`
  * title `string`

#### Output
* output [ServiceCategoryDto](#servicecategorydto)

### GetCategories



```js
wedpax.GetCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ServiceCategoryDto](#servicecategorydto)

### api.services.app.CategoryService.Update.put



```js
wedpax.api.services.app.CategoryService.Update.put({}, context)
```

#### Input
* input `object`
  * input [ServiceCategoryUpdateDto](#servicecategoryupdatedto)

#### Output
* output [ServiceCategoryDto](#servicecategorydto)

### ChangeUiTheme



```js
wedpax.ChangeUiTheme({}, context)
```

#### Input
* input `object`
  * input [ChangeUiThemeInput](#changeuithemeinput)

#### Output
*Output schema unknown*

### api.services.app.Role.Create.post



```js
wedpax.api.services.app.Role.Create.post({}, context)
```

#### Input
* input `object`
  * input [CreateRoleDto](#createroledto)

#### Output
* output [RoleDto](#roledto)

### api.services.app.Role.Delete.delete



```js
wedpax.api.services.app.Role.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.Role.Get.get



```js
wedpax.api.services.app.Role.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [RoleDto](#roledto)

### api.services.app.Role.GetAll.get



```js
wedpax.api.services.app.Role.GetAll.get({}, context)
```

#### Input
* input `object`
  * Keyword `string`
  * SkipCount `integer`
  * MaxResultCount `integer`

#### Output
* output [PagedResultDto[RoleDto]](#pagedresultdto[roledto])

### GetAllPermissions



```js
wedpax.GetAllPermissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListResultDto[PermissionDto]](#listresultdto[permissiondto])

### GetRoleForEdit



```js
wedpax.GetRoleForEdit({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [GetRoleForEditOutput](#getroleforeditoutput)

### GetRolesAsync



```js
wedpax.GetRolesAsync({}, context)
```

#### Input
* input `object`
  * Permission `string`

#### Output
* output [ListResultDto[RoleListDto]](#listresultdto[rolelistdto])

### api.services.app.Role.Update.put



```js
wedpax.api.services.app.Role.Update.put({}, context)
```

#### Input
* input `object`
  * input [RoleDto](#roledto)

#### Output
* output [RoleDto](#roledto)

### api.services.app.ServiceFacilityService.Create.post



```js
wedpax.api.services.app.ServiceFacilityService.Create.post({}, context)
```

#### Input
* input `object`
  * input [ServiceFacilityCreateDto](#servicefacilitycreatedto)

#### Output
* output [ServiceFacilityDto](#servicefacilitydto)

### api.services.app.ServiceFacilityService.Delete.delete



```js
wedpax.api.services.app.ServiceFacilityService.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.ServiceFacilityService.Get.get



```js
wedpax.api.services.app.ServiceFacilityService.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [ServiceFacilityDto](#servicefacilitydto)

### api.services.app.ServiceFacilityService.GetAll.get



```js
wedpax.api.services.app.ServiceFacilityService.GetAll.get({}, context)
```

#### Input
* input `object`
  * input `array`

#### Output
* output [PagedResultDto[ServiceFacilityDto]](#pagedresultdto[servicefacilitydto])

### GetFacilities



```js
wedpax.GetFacilities(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ServiceFacilityDto](#servicefacilitydto)

### GetServiceFacility



```js
wedpax.GetServiceFacility({}, context)
```

#### Input
* input `object`
  * facilities `array`

#### Output
* output `array`
  * items [ServiceFacilityDto](#servicefacilitydto)

### api.services.app.ServiceFacilityService.Update.put



```js
wedpax.api.services.app.ServiceFacilityService.Update.put({}, context)
```

#### Input
* input `object`
  * input [ServiceFacilityUpdateDto](#servicefacilityupdatedto)

#### Output
* output [ServiceFacilityDto](#servicefacilitydto)

### GetCurrentLoginInformations



```js
wedpax.GetCurrentLoginInformations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GetCurrentLoginInformationsOutput](#getcurrentlogininformationsoutput)

### api.services.app.Tenant.Create.post



```js
wedpax.api.services.app.Tenant.Create.post({}, context)
```

#### Input
* input `object`
  * input [CreateTenantDto](#createtenantdto)

#### Output
* output [TenantDto](#tenantdto)

### api.services.app.Tenant.Delete.delete



```js
wedpax.api.services.app.Tenant.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.Tenant.Get.get



```js
wedpax.api.services.app.Tenant.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [TenantDto](#tenantdto)

### api.services.app.Tenant.GetAll.get



```js
wedpax.api.services.app.Tenant.GetAll.get({}, context)
```

#### Input
* input `object`
  * Keyword `string`
  * IsActive `boolean`
  * SkipCount `integer`
  * MaxResultCount `integer`

#### Output
* output [PagedResultDto[TenantDto]](#pagedresultdto[tenantdto])

### api.services.app.Tenant.Update.put



```js
wedpax.api.services.app.Tenant.Update.put({}, context)
```

#### Input
* input `object`
  * input [TenantDto](#tenantdto)

#### Output
* output [TenantDto](#tenantdto)

### AddManagerToUserRoles



```js
wedpax.AddManagerToUserRoles({}, context)
```

#### Input
* input `object`
  * user [User](#user)

#### Output
*Output schema unknown*

### ChangeLanguage



```js
wedpax.ChangeLanguage({}, context)
```

#### Input
* input `object`
  * input [ChangeUserLanguageDto](#changeuserlanguagedto)

#### Output
*Output schema unknown*

### ChangePassword



```js
wedpax.ChangePassword({}, context)
```

#### Input
* input `object`
  * input [ChangePasswordDto](#changepassworddto)

#### Output
* output `boolean`

### ConfrimCode



```js
wedpax.ConfrimCode({}, context)
```

#### Input
* input `object`
  * input [ConfirmCodeDto](#confirmcodedto)

#### Output
*Output schema unknown*

### api.services.app.User.Create.post



```js
wedpax.api.services.app.User.Create.post({}, context)
```

#### Input
* input `object`
  * input [CreateUserDto](#createuserdto)

#### Output
* output [UserDto](#userdto)

### api.services.app.User.Delete.delete



```js
wedpax.api.services.app.User.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.User.Get.get



```js
wedpax.api.services.app.User.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [UserDto](#userdto)

### api.services.app.User.GetAll.get



```js
wedpax.api.services.app.User.GetAll.get({}, context)
```

#### Input
* input `object`
  * Keyword `string`
  * IsActive `boolean`
  * SkipCount `integer`
  * MaxResultCount `integer`

#### Output
* output [PagedResultDto[UserDto]](#pagedresultdto[userdto])

### GetRoles



```js
wedpax.GetRoles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListResultDto[RoleDto]](#listresultdto[roledto])

### GetToEntity



```js
wedpax.GetToEntity({}, context)
```

#### Input
* input `object`
  * userId `integer`

#### Output
* output [User](#user)

### ProhibitPermission



```js
wedpax.ProhibitPermission({}, context)
```

#### Input
* input `object`
  * input [ProhibitPermissionInput](#prohibitpermissioninput)

#### Output
*Output schema unknown*

### ResetPassword



```js
wedpax.ResetPassword({}, context)
```

#### Input
* input `object`
  * input [ResetPasswordDto](#resetpassworddto)

#### Output
* output `boolean`

### api.services.app.User.Update.put



```js
wedpax.api.services.app.User.Update.put({}, context)
```

#### Input
* input `object`
  * input [UserDto](#userdto)

#### Output
* output [UserDto](#userdto)

### api.services.app.WeddingVendorServices.Create.post



```js
wedpax.api.services.app.WeddingVendorServices.Create.post({}, context)
```

#### Input
* input `object`
  * model [CreateWeddingVendorDto](#createweddingvendordto)

#### Output
* output [WeddingVendorDto](#weddingvendordto)

### api.services.app.WeddingVendorServices.Delete.delete



```js
wedpax.api.services.app.WeddingVendorServices.Delete.delete({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
*Output schema unknown*

### api.services.app.WeddingVendorServices.Get.get



```js
wedpax.api.services.app.WeddingVendorServices.Get.get({}, context)
```

#### Input
* input `object`
  * Id `integer`

#### Output
* output [WeddingVendorDto](#weddingvendordto)

### api.services.app.WeddingVendorServices.GetAll.get



```js
wedpax.api.services.app.WeddingVendorServices.GetAll.get({}, context)
```

#### Input
* input `object`
  * Sorting `string`
  * SkipCount `integer`
  * MaxResultCount `integer`

#### Output
* output [PagedResultDto[WeddingVendorDto]](#pagedresultdto[weddingvendordto])

### api.services.app.WeddingVendorServices.Update.put



```js
wedpax.api.services.app.WeddingVendorServices.Update.put({}, context)
```

#### Input
* input `object`
  * model [UpdateWeddingVendorDto](#updateweddingvendordto)

#### Output
* output [WeddingVendorDto](#weddingvendordto)



## Definitions

### ApplicationInfoDto
* ApplicationInfoDto `object`
  * features `object`
  * releaseDate `string`
  * version `string`

### AuthenticateModel
* AuthenticateModel `object`
  * password **required** `string`
  * rememberClient `boolean`
  * userNameOrEmailAddress **required** `string`

### AuthenticateResultModel
* AuthenticateResultModel `object`
  * accessToken `string`
  * encryptedAccessToken `string`
  * expireInSeconds `integer`
  * roles `array`
    * items `string`
  * userId `integer`

### BaseServices
* BaseServices `object`
  * capacity `integer`
  * category **required** [ServiceCategory](#servicecategory)
  * categoryId **required** `integer`
  * creationTime `string`
  * description **required** `string`
  * geoDetails [GeoDetails](#geodetails)
  * id `integer`
  * images **required** `array`
    * items [ServiceImages](#serviceimages)
  * mainImage `string`
  * phone `string`
  * status `boolean`
  * title `string`
  * user **required** [User](#user)

### ChangePasswordDto
* ChangePasswordDto `object`
  * currentPassword **required** `string`
  * newPassword **required** `string`

### ChangeUiThemeInput
* ChangeUiThemeInput `object`
  * theme **required** `string`

### ChangeUserLanguageDto
* ChangeUserLanguageDto `object`
  * languageName **required** `string`

### CityDto
* CityDto `object`
  * id `integer`
  * title `string`

### ConfirmCodeDto
* ConfirmCodeDto `object`
  * code **required** `integer`
  * userName **required** `string`

### CreateRoleDto
* CreateRoleDto `object`
  * description `string`
  * displayName **required** `string`
  * grantedPermissions `array`
    * items `string`
  * name **required** `string`
  * normalizedName `string`

### CreateTenantDto
* CreateTenantDto `object`
  * adminEmailAddress **required** `string`
  * connectionString `string`
  * isActive `boolean`
  * name **required** `string`
  * tenancyName **required** `string`

### CreateUserDto
* CreateUserDto `object`
  * userName **required** `string`

### CreateWeddingVendorDto
* CreateWeddingVendorDto `object`
  * base64Images `array`
    * items [ImageData](#imagedata)
  * capacity `integer`
  * categoryId **required** `integer`
  * description **required** `string`
  * lat `number`
  * lng `number`
  * mainImage `string`
  * phone `string`
  * serviceFacilities `array`
    * items `integer`
  * title **required** `string`
  * userId `integer`

### ExternalAuthenticateModel
* ExternalAuthenticateModel `object`
  * authProvider **required** `string`
  * providerAccessCode **required** `string`
  * providerKey **required** `string`

### ExternalAuthenticateResultModel
* ExternalAuthenticateResultModel `object`
  * accessToken `string`
  * encryptedAccessToken `string`
  * expireInSeconds `integer`
  * waitingForActivation `boolean`

### ExternalLoginProviderInfoModel
* ExternalLoginProviderInfoModel `object`
  * clientId `string`
  * name `string`

### FlatPermissionDto
* FlatPermissionDto `object`
  * description `string`
  * displayName `string`
  * name `string`

### GeoDetails
* GeoDetails `object`
  * address `string`
  * baseServices [BaseServices](#baseservices)
  * city `string`
  * country `string`
  * creationTime `string`
  * district `string`
  * id `integer`
  * lat `number`
  * lng `number`
  * locality `string`
  * place `string`
  * province `string`
  * serviceId `integer`

### GeoDetailsCreateDto
* GeoDetailsCreateDto `object`
  * lat **required** `number`
  * lng **required** `number`
  * phone **required** `string`
  * serviceId **required** `integer`

### GeoDetailsDto
* GeoDetailsDto `object`
  * address `string`
  * area `string`
  * city `string`
  * country `string`
  * district `string`
  * id `integer`

### GeoDetailsUpdateDto
* GeoDetailsUpdateDto `object`
  * id `integer`
  * lat **required** `number`
  * lng **required** `number`
  * phone **required** `string`
  * serviceId **required** `integer`

### GetCurrentLoginInformationsOutput
* GetCurrentLoginInformationsOutput `object`
  * application [ApplicationInfoDto](#applicationinfodto)
  * tenant [TenantLoginInfoDto](#tenantlogininfodto)
  * user [UserLoginInfoDto](#userlogininfodto)

### GetRoleForEditOutput
* GetRoleForEditOutput `object`
  * grantedPermissionNames `array`
    * items `string`
  * permissions `array`
    * items [FlatPermissionDto](#flatpermissiondto)
  * role [RoleEditDto](#roleeditdto)

### ImageData
* ImageData `object`
  * content `string`
  * fileType `string`
  * id `string`
  * isMain `boolean`

### IsTenantAvailableInput
* IsTenantAvailableInput `object`
  * tenancyName **required** `string`

### IsTenantAvailableOutput
* IsTenantAvailableOutput `object`
  * state `integer` (values: 1, 2, 3)
  * tenantId `integer`

### ListResultDto[PermissionDto]
* ListResultDto[PermissionDto] `object`
  * items `array`
    * items [PermissionDto](#permissiondto)

### ListResultDto[RoleDto]
* ListResultDto[RoleDto] `object`
  * items `array`
    * items [RoleDto](#roledto)

### ListResultDto[RoleListDto]
* ListResultDto[RoleListDto] `object`
  * items `array`
    * items [RoleListDto](#rolelistdto)

### LoginModel
* LoginModel `object`
  * mobileNumber **required** `string`
  * password `string`

### PagedResultDto[GeoDetailsDto]
* PagedResultDto[GeoDetailsDto] `object`
  * items `array`
    * items [GeoDetailsDto](#geodetailsdto)
  * totalCount `integer`

### PagedResultDto[RoleDto]
* PagedResultDto[RoleDto] `object`
  * items `array`
    * items [RoleDto](#roledto)
  * totalCount `integer`

### PagedResultDto[ServiceCategoryDto]
* PagedResultDto[ServiceCategoryDto] `object`
  * items `array`
    * items [ServiceCategoryDto](#servicecategorydto)
  * totalCount `integer`

### PagedResultDto[ServiceFacilityDto]
* PagedResultDto[ServiceFacilityDto] `object`
  * items `array`
    * items [ServiceFacilityDto](#servicefacilitydto)
  * totalCount `integer`

### PagedResultDto[TenantDto]
* PagedResultDto[TenantDto] `object`
  * items `array`
    * items [TenantDto](#tenantdto)
  * totalCount `integer`

### PagedResultDto[UserDto]
* PagedResultDto[UserDto] `object`
  * items `array`
    * items [UserDto](#userdto)
  * totalCount `integer`

### PagedResultDto[WeddingVendorDto]
* PagedResultDto[WeddingVendorDto] `object`
  * items `array`
    * items [WeddingVendorDto](#weddingvendordto)
  * totalCount `integer`

### PermissionDto
* PermissionDto `object`
  * description `string`
  * displayName `string`
  * id `integer`
  * name `string`

### ProhibitPermissionInput
* ProhibitPermissionInput `object`
  * permissionName `string`
  * userId `integer`

### ProvinceDto
* ProvinceDto `object`
  * id `integer`
  * title `string`

### RegisterInput
* RegisterInput `object`
  * userName **required** `string`

### RegisterOutput
* RegisterOutput `object`
  * canLogin `boolean`

### ResetPasswordDto
* ResetPasswordDto `object`
  * adminPassword **required** `string`
  * newPassword **required** `string`
  * userId **required** `integer`

### RoleDto
* RoleDto `object`
  * description `string`
  * displayName **required** `string`
  * grantedPermissions `array`
    * items `string`
  * id `integer`
  * name **required** `string`
  * normalizedName `string`

### RoleEditDto
* RoleEditDto `object`
  * description `string`
  * displayName **required** `string`
  * id `integer`
  * isStatic `boolean`
  * name **required** `string`

### RoleListDto
* RoleListDto `object`
  * creationTime `string`
  * displayName `string`
  * id `integer`
  * isDefault `boolean`
  * isStatic `boolean`
  * name `string`

### ServiceCategory
* ServiceCategory `object`
  * baseServices `array`
    * items [BaseServices](#baseservices)
  * children `array`
    * items [ServiceCategory](#servicecategory)
  * creationTime `string`
  * icon `string`
  * id `integer`
  * parentId `integer`
  * title **required** `string`

### ServiceCategoryDto
* ServiceCategoryDto `object`
  * children `array`
    * items [ServiceCategoryDto](#servicecategorydto)
  * icon `string`
  * id `integer`
  * parentId `integer`
  * title **required** `string`

### ServiceCategoryUpdateDto
* ServiceCategoryUpdateDto `object`
  * children `array`
    * items [ServiceCategoryDto](#servicecategorydto)
  * icon `string`
  * id `integer`
  * parent [ServiceCategoryDto](#servicecategorydto)
  * parentId `integer`
  * title **required** `string`

### ServiceCategroyCreateDto
* ServiceCategroyCreateDto `object`
  * icon `string`
  * id `integer`
  * parent [ServiceCategoryDto](#servicecategorydto)
  * parentId `integer`
  * title **required** `string`

### ServiceFacilityCreateDto
* ServiceFacilityCreateDto `object`
  * icon `string`
  * title **required** `string`

### ServiceFacilityDto
* ServiceFacilityDto `object`
  * icon `string`
  * id `integer`
  * title `string`

### ServiceFacilityUpdateDto
* ServiceFacilityUpdateDto `object`
  * icon `string`
  * id `integer`
  * title `string`

### ServiceImages
* ServiceImages `object`
  * alt **required** `string`
  * baseServices [BaseServices](#baseservices)
  * creationTime `string`
  * id `integer`
  * isMain `boolean`
  * serviceId `integer`
  * state `boolean`
  * thumbUrl **required** `string`
  * title **required** `string`
  * url **required** `string`

### ServiceListModel
* ServiceListModel `object`
  * address `string`
  * capacity `integer`
  * facilityDtos `array`
    * items [ServiceFacilityDto](#servicefacilitydto)
  * id `integer`
  * images `array`
    * items `string`
  * priceType `integer` (values: 1, 2, 3, 4)
  * rate `integer`
  * title `string`

### Setting
* Setting `object`
  * creationTime `string`
  * creatorUserId `integer`
  * id `integer`
  * lastModificationTime `string`
  * lastModifierUserId `integer`
  * name **required** `string`
  * tenantId `integer`
  * userId `integer`
  * value `string`

### TenantDto
* TenantDto `object`
  * id `integer`
  * isActive `boolean`
  * name **required** `string`
  * tenancyName **required** `string`

### TenantLoginInfoDto
* TenantLoginInfoDto `object`
  * id `integer`
  * name `string`
  * tenancyName `string`

### UpdateWeddingVendorDto
* UpdateWeddingVendorDto `object`
  * base64Images `array`
    * items [ImageData](#imagedata)
  * capacity `integer`
  * categoryId **required** `integer`
  * description **required** `string`
  * facilityDtos `array`
    * items [ServiceFacilityDto](#servicefacilitydto)
  * id `integer`
  * lat `number`
  * lng `number`
  * mainImage `string`
  * phone `string`
  * title **required** `string`
  * userId `integer`

### User
* User `object`
  * accessFailedCount `integer`
  * authenticationSource `string`
  * claims `array`
    * items [UserClaim](#userclaim)
  * code `integer`
  * concurrencyStamp `string`
  * creationTime `string`
  * creatorUser [User](#user)
  * creatorUserId `integer`
  * deleterUser [User](#user)
  * deleterUserId `integer`
  * deletionTime `string`
  * emailAddress **required** `string`
  * emailConfirmationCode `string`
  * expireTime `string`
  * fullName `string`
  * id `integer`
  * isActive `boolean`
  * isDeleted `boolean`
  * isEmailConfirmed `boolean`
  * isLockoutEnabled `boolean`
  * isPhoneNumberConfirmed `boolean`
  * isTwoFactorEnabled `boolean`
  * lastModificationTime `string`
  * lastModifierUser [User](#user)
  * lastModifierUserId `integer`
  * lockoutEndDateUtc `string`
  * logins `array`
    * items [UserLogin](#userlogin)
  * name **required** `string`
  * normalizedEmailAddress **required** `string`
  * normalizedUserName **required** `string`
  * password **required** `string`
  * passwordResetCode `string`
  * permissions `array`
    * items [UserPermissionSetting](#userpermissionsetting)
  * phoneNumber `string`
  * roles `array`
    * items [UserRole](#userrole)
  * securityStamp `string`
  * settings `array`
    * items [Setting](#setting)
  * surname **required** `string`
  * tenantId `integer`
  * tokens `array`
    * items [UserToken](#usertoken)
  * userName **required** `string`

### UserClaim
* UserClaim `object`
  * claimType `string`
  * claimValue `string`
  * creationTime `string`
  * creatorUserId `integer`
  * id `integer`
  * tenantId `integer`
  * userId `integer`

### UserDto
* UserDto `object`
  * code `integer`
  * creationTime `string`
  * emailAddress **required** `string`
  * expireTime `string`
  * fullName `string`
  * id `integer`
  * isActive `boolean`
  * isExist `boolean`
  * lastLoginTime `string`
  * name **required** `string`
  * roleNames `array`
    * items `string`
  * surname **required** `string`
  * userName **required** `string`

### UserLogin
* UserLogin `object`
  * id `integer`
  * loginProvider **required** `string`
  * providerKey **required** `string`
  * tenantId `integer`
  * userId `integer`

### UserLoginInfoDto
* UserLoginInfoDto `object`
  * emailAddress `string`
  * id `integer`
  * name `string`
  * surname `string`
  * userName `string`

### UserPermissionSetting
* UserPermissionSetting `object`
  * creationTime `string`
  * creatorUserId `integer`
  * id `integer`
  * isGranted `boolean`
  * name **required** `string`
  * tenantId `integer`
  * userId `integer`

### UserRole
* UserRole `object`
  * creationTime `string`
  * creatorUserId `integer`
  * id `integer`
  * roleId `integer`
  * tenantId `integer`
  * userId `integer`

### UserServicesDto
* UserServicesDto `object`
  * mainImage `string`
  * serviceId `integer`
  * status `boolean`
  * title `string`

### UserToken
* UserToken `object`
  * expireDate `string`
  * id `integer`
  * loginProvider `string`
  * name `string`
  * tenantId `integer`
  * userId `integer`
  * value `string`

### WeddingVendorDto
* WeddingVendorDto `object`
  * categoryId `integer`
  * creationTime `string`
  * description `string`
  * id `integer`
  * mainImage `string`
  * title `string`
  * userDto [UserDto](#userdto)


