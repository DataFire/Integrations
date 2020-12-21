# @datafire/tl_api_azurewebsites

Client library for API

## Installation and Usage
```bash
npm install --save @datafire/tl_api_azurewebsites
```
```js
let tl_api_azurewebsites = require('@datafire/tl_api_azurewebsites').create({
  apikey: "",
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

Web API for TL mobile and web app

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
tl_api_azurewebsites.oauthCallback({
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
tl_api_azurewebsites.oauthRefresh(null, context)
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

### Article_Delete
Delete article from the system
            


```js
tl_api_azurewebsites.Article_Delete({}, context)
```

#### Input
* input `object`
  * ArticleId `integer`: indentity number(primary key) for article object

#### Output
* output [DefaultResponseDTOOfInteger](#defaultresponsedtoofinteger)

### Article_Post
Add new article
            


```js
tl_api_azurewebsites.Article_Post({
  "body": {
    "name": "",
    "type": "",
    "price": 0,
    "measureUnit": "",
    "availableGyms": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ArticleDTO](#articledto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_Put
update existing article
            


```js
tl_api_azurewebsites.Article_Put({
  "body": {
    "name": "",
    "type": "",
    "price": 0,
    "measureUnit": "",
    "availableGyms": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ArticleDTO](#articledto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_UpdateArticleGymDetails
Add article details that associate with a Gym
            


```js
tl_api_azurewebsites.Article_UpdateArticleGymDetails({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** `array`
    * items [GymArticleDetailsDTO](#gymarticledetailsdto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_GetAddons



```js
tl_api_azurewebsites.Article_GetAddons({}, context)
```

#### Input
* input `object`
  * searchText `string`: Search text - will be search by the name
  * gymIds `string`: Comma separated gymIds deafult "-1" for all gyms
  * type `string`
  * limit `integer`
  * offset `integer`

#### Output
* output [DefaultResponseDTOOfListOfArticleSearchDTO](#defaultresponsedtooflistofarticlesearchdto)

### Article_GymArticleDetails
Get Gym specific properties for article
            


```js
tl_api_azurewebsites.Article_GymArticleDetails({
  "articleId": 0,
  "gymId": 0
}, context)
```

#### Input
* input `object`
  * articleId **required** `integer`: indentity number(primary key) for article object
  * gymId **required** `integer`: indentity number(primary key) for gym object

#### Output
* output [GymArticleDetailsDTO](#gymarticledetailsdto)

### Article_AddMeasureUnit
Add measure unit


```js
tl_api_azurewebsites.Article_AddMeasureUnit({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** `array`
    * items [MeasureUnitDTO](#measureunitdto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_GetMeasureUnits
Get mesure units


```js
tl_api_azurewebsites.Article_GetMeasureUnits({}, context)
```

#### Input
* input `object`
  * type `string`: type of the measure unit (all, item, service)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_GetRevenueAccounts
Get Revenue Accounts 


```js
tl_api_azurewebsites.Article_GetRevenueAccounts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Article_Search
Search articles
It will only return basic information of article
            


```js
tl_api_azurewebsites.Article_Search({}, context)
```

#### Input
* input `object`
  * searchText `string`: part of article name
  * gymId `integer`: -1 for all gyms 
  * type `string`: filter article type. default is 'all'
  * orderBy `string`: order by column.!-- invalid column will give internal server error
  * limit `integer`: number of recode in result and default is 100. use negative numbers to order by desc
  * offset `integer`: number of recodes to skip
  * activeStatus `integer`: Active Status 1 : Active, 2: Inactive, 3: All, Default : 1

#### Output
* output [DefaultResponseDTOOfListOfArticleSearchDTO](#defaultresponsedtooflistofarticlesearchdto)

### Article_UpdateStatus
Deactivate existing article 


```js
tl_api_azurewebsites.Article_UpdateStatus({}, context)
```

#### Input
* input `object`
  * ArticleId `integer`
  * status `integer`: 1 : activate , 2 deactivate
  * userName `string`: Updating user

#### Output
* output [DefaultResponseDTOOfInteger](#defaultresponsedtoofinteger)

### Article_get
Get article details
This will return all properties related to article entity
            


```js
tl_api_azurewebsites.Article_get({
  "articleID": 0
}, context)
```

#### Input
* input `object`
  * articleID **required** `integer`: indentity number (primary key) for article object

#### Output
* output [DefaultResponseDTOOfArticleDTO](#defaultresponsedtoofarticledto)

### Auth_Login
Authenticate and provide token for autherizations.
            


```js
tl_api_azurewebsites.Auth_Login({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [LoginDTO](#logindto)

#### Output
* output `string`

### Gym_get
Get gym details
This will return all properties related to gym entity
            


```js
tl_api_azurewebsites.Gym_get({
  "gymID": 0
}, context)
```

#### Input
* input `object`
  * gymID **required** `integer`: indentity number (primary key) for gym object

#### Output
* output [DefaultResponseDTOOfGymDTO](#defaultresponsedtoofgymdto)

### Membership_Get
Get all of the members details
This will return all properties related to member entity
            


```js
tl_api_azurewebsites.Membership_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MemberDTO](#memberdto)

### Membership_Post
Add new Member
            


```js
tl_api_azurewebsites.Membership_Post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [MemberDTO](#memberdto)

#### Output
* output `boolean`

### Package_Delete
Delete existing package
            


```js
tl_api_azurewebsites.Package_Delete({}, context)
```

#### Input
* input `object`
  * PackageId `integer`: primary key of package entity

#### Output
* output [DefaultResponseDTOOfBoolean](#defaultresponsedtoofboolean)

### Package_Get
Get package details by packageId
            


```js
tl_api_azurewebsites.Package_Get({}, context)
```

#### Input
* input `object`
  * packageId `integer`: primary key of package entity

#### Output
* output [DefaultResponseDTOOfPackageDTO](#defaultresponsedtoofpackagedto)

### Package_Post
Insert new package into the system
            


```js
tl_api_azurewebsites.Package_Post({
  "body": {
    "packageName": "",
    "registrationFee": 0,
    "packageType": "",
    "serviceFee": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PackageDTO](#packagedto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Package_Put
Update existing package by its ID
            


```js
tl_api_azurewebsites.Package_Put({
  "body": {
    "packageName": "",
    "registrationFee": 0,
    "packageType": "",
    "serviceFee": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PackageDTO](#packagedto)

#### Output
* output [DefaultResponseDTOOfStatusDTO](#defaultresponsedtoofstatusdto)

### Package_Search
Search packages
            


```js
tl_api_azurewebsites.Package_Search({}, context)
```

#### Input
* input `object`
  * searchText `string`: part of package name
  * gymId `integer`: primary key of TL gym entity
  * type `string`: filter package type.!-- default is 'all'
  * orderBy `string`: order by column.!-- invalid column will give internal server error
  * limit `integer`: number of recode in result and default is 100. use negative numbers to order by desc
  * offset `integer`: number of recodes to skip
  * activeStatus `integer`: active status active : 1, inactive : 2, all 3, deafult : 1
  * categoryId `integer`: Packge Category Id
  * startpPrice `number`: Start price of the price Range
  * endPrice `number`: End Price of the price Range
  * requestSource `integer`: 1 : MRM, 2 : Mobile 

#### Output
* output `array`
  * items [DefaultResponseDTOOfPackageSearchDTO](#defaultresponsedtoofpackagesearchdto)

### Package_UpdateStatus
Status update of existing package 


```js
tl_api_azurewebsites.Package_UpdateStatus({}, context)
```

#### Input
* input `object`
  * packageId `integer`: package Id
  * status `integer`: status : 1 activate, 2 : deactivate
  * userName `string`: Status updated User

#### Output
* output [DefaultResponseDTOOfBoolean](#defaultresponsedtoofboolean)

### Status_Get
Get the current status of message


```js
tl_api_azurewebsites.Status_Get({}, context)
```

#### Input
* input `object`
  * messageId `string`: respose of POST request

#### Output
* output [MessageStatus](#messagestatus)

### Test_get
Get the all Test objects.
            


```js
tl_api_azurewebsites.Test_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TestDTO](#testdto)

### User_Get
Get all Users detail
This will return all properties related to User entity
            


```js
tl_api_azurewebsites.User_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserDTO](#userdto)

### User_registerUser
Register a new User
            


```js
tl_api_azurewebsites.User_registerUser({}, context)
```

#### Input
* input `object`
  * UserId `integer`: Indentity number(primary key) for user object. Generated in DB table when inserting a record.
  * AccountNumber `string`: Account number of the user.It can be any stakeholder of the application.even can be a gym.
  * GymNumber `string`: If this user is a gym, then the gym number.
  * ExternalEntityNumber `string`: Entity number that make a relationship with BOX API DB.
  * Name `string`: Name of the user.
  * Number `string`: Unique number maintain by application to idenify user.
  * IntroduceBy `integer`: If Someone introduced this user to the system, then that user's UserId.
  * Guardian `integer`: Gaurdian of the this user if he/she is under 18 years old.
  * TypeId `integer`: Type of the user.

#### Output
*Output schema unknown*

### User_updateUser
Update an exsisting User
            


```js
tl_api_azurewebsites.User_updateUser({}, context)
```

#### Input
* input `object`
  * UserId `integer`: Indentity number(primary key) for user object. Generated in DB table when inserting a record.
  * AccountNumber `string`: Account number of the user.It can be any stakeholder of the application.even can be a gym.
  * GymNumber `string`: If this user is a gym, then the gym number.
  * ExternalEntityNumber `string`: Entity number that make a relationship with BOX API DB.
  * Name `string`: Name of the user.
  * Number `string`: Unique number maintain by application to idenify user.
  * IntroduceBy `integer`: If Someone introduced this user to the system, then that user's UserId.
  * Guardian `integer`: Gaurdian of the this user if he/she is under 18 years old.
  * TypeId `integer`: Type of the user.

#### Output
*Output schema unknown*



## Definitions

### ApiException
* ApiException
  * Message `string`
  * Source `string`
  * StackTrace `string`
  * errors `array`
    * items [ValidationError](#validationerror)
  * isCustomErrorObject `boolean`
  * isModelValidatonError `boolean`
  * referenceDocumentLink `string`
  * referenceErrorCode `string`
  * statusCode `integer`

### ApiResponse
* ApiResponse `object`
  * isError `boolean`
  * message `string`
  * statusCode `integer`
  * version `string`

### ArticleDTO
* ArticleDTO `object`: The ArticleDTO Class.
  * tags `string`
  * activeStatus `boolean`: Active Status 
  * applyForAllGyms `boolean`
  * articleId `integer`
  * availableGyms **required** `array`
    * items [GymDTO](#gymdto)
  * availableQty `number`: Default AvailableQty
  * barcode `string`
  * createdDate `string`
  * createdUser `string`
  * cronExpression `string`: Access Schedule CRON Expression 
  * description `string`
  * discount `number`
  * employeeDiscount `number`: Default EmployeeDiscount
  * employeePrice `number`: Default EmployeePrice
  * gymArticles `array`: Gym Customizations 
    * items [GymArticleDetailsDTO](#gymarticledetailsdto)
  * isAddOn `boolean`
  * isInventoryItem `boolean`: Default IsInventoryItem of the Article 
  * isObsolete `boolean`: Default IsObsolete of the Article 
  * measureUnit **required** `string`
  * modifiedDate `string`
  * modifiedUser `string`
  * name **required** `string`
  * number `integer`
  * price **required** `number`
  * reorderLevel `number`: Deafault ReorderLevel
  * revenueAccountId `integer`: Default Revenue account
  * sellingPrice `number`: Default SellingPrice
  * type **required** `string`
  * vat `number`
  * vatApplicable `boolean`: VAT Applicable 

### ArticleSearchDTO
* ArticleSearchDTO `object`: The ArticleSearchDTO Class.
  * tags `string`
  * activeStatus `boolean`: Active Status 
  * applyForAllGyms `boolean`
  * articleId `integer`
  * createdDate `string`
  * createdUser `string`
  * description `string`
  * measureUnit `string`: MeasureUnit 
  * modifiedDate `string`
  * modifiedUser `string`
  * name `string`
  * number `integer`
  * price `number`
  * sellingPrice `number`: Actual Selling price of the article 
  * totalCount `integer`: total number of recode for particular search 
  * type `string`: article type

### DefaultResponseDTOOfArticleDTO
* DefaultResponseDTOOfArticleDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`

### DefaultResponseDTOOfBoolean
* DefaultResponseDTOOfBoolean `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`
  * result `boolean`

### DefaultResponseDTOOfGymDTO
* DefaultResponseDTOOfGymDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`

### DefaultResponseDTOOfInteger
* DefaultResponseDTOOfInteger `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`
  * result `integer`

### DefaultResponseDTOOfListOfArticleSearchDTO
* DefaultResponseDTOOfListOfArticleSearchDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`
  * result `array`
    * items [ArticleSearchDTO](#articlesearchdto)

### DefaultResponseDTOOfListOfPackageSearchDTO
* DefaultResponseDTOOfListOfPackageSearchDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`
  * result `array`
    * items [PackageSearchDTO](#packagesearchdto)

### DefaultResponseDTOOfPackageDTO
* DefaultResponseDTOOfPackageDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`

### DefaultResponseDTOOfPackageSearchDTO
* DefaultResponseDTOOfPackageSearchDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`

### DefaultResponseDTOOfStatusDTO
* DefaultResponseDTOOfStatusDTO `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`

### DefaultResponseDTOOfString
* DefaultResponseDTOOfString `object`: The DefaultResponseDTO Class.
  * isError `boolean`
  * message `string`
  * result `string`

### Exception
* Exception `object`
  * Message `string`
  * Source `string`
  * StackTrace `string`

### GymArticleDetailsDTO
* GymArticleDetailsDTO `object`: The GymArticleDetailsDTO Class.
  * articleId `integer`
  * availableQty `number`
  * createdUser `string`: Created User 
  * employeeDiscount `number`
  * employeePrice `number`
  * gymId `integer`: Gym Id where article is related 
  * gymIdList `string`: GymId - Gym Id string with comma separated GymIds 
  * gymName `string`: Gym Name
  * id `integer`
  * isDefault `boolean`: Set as the default values for the article 
  * isInventoryItem `boolean`
  * isObsolete `boolean`
  * modifiedUser `string`: Modified user
  * reorderLevel `number`
  * revenueAccountId `integer`: Revenue account Id
  * sellingPrice `number`

### GymDTO
* GymDTO `object`: The GymDTO Class.
  * externalGymNumber `integer`
  * gymId `integer`
  * gymName `string`
  * location `string`

### LoginDTO
* LoginDTO `object`: The LoginDTO Class.
  * password `string`
  * remember `boolean`
  * username `string`

### MeasureUnitDTO
* MeasureUnitDTO `object`: Mesure unit to represent article mesure unit 
  * id `integer`: Id of the table
  * name `string`: Mesure Unit Type
  * type `string`: Type of the article used with (all, service, item)

### MemberDTO
* MemberDTO `object`: The MemeberDTO Class.
  * name `string`

### MessageStatus
* MessageStatus `object`
  * messageId `string`
  * referenceId `integer`
  * statusId `integer`
  * statusText `string`

### PackageDTO
* PackageDTO `object`: The PackageDTO Class.
  * tags `string`: Comma separated string values in case of need of maintain some labels kind of 
  * addOns `array`: Extra articles list added to the given package.
    * items [PackageItemDTO](#packageitemdto)
  * addonFee `number`: sum of addon fees.
  * applyForAllGyms `boolean`: Boolean value to indicate wheather package is available in all the gyms.
  * availableGyms `array`: Gyms list where this package is available.
    * items [GymDTO](#gymdto)
  * bindingPeriod `integer`: Range of period a member is bound to the contract if he/she choose this package.
  * createdDate `string`: Package created DateTime.
  * createdUser `string`: Package created user.
  * description `string`: Common descriptions about package.If there are more instructions 
  * endDate `string`: End date of the package.After that package is not valid for use.
  * expireInMonths `integer`: No of months the fixed package is valid for sale
  * features `string`: What are the facilities, features available for package.ex:- wifi,
  * freeMonths `integer`: No of months gym member can come without payments.
  * instructionsToGymUsers `string`: Instruction to the gym members relevant to the package.
  * instructionsToWebUsers `string`: Instruction to the MRM members relevant to the package.
  * isActive `boolean`: Boolean value to indicate this package is still active or not.
  * isAtg `boolean`: Boolean value to indicate ATG transaction from bank is applicable or not.
  * isAutoRenew `boolean`: Boolean value to indicate the contract will auto renew after expiration 
  * isFirstMonthFree `boolean`: Boolean value to indicate if the first month charges is free.
  * isRegistrationFee `boolean`: Boolean value to indicate this package has registration fee or not.
  * isRestAmount `boolean`: Boolean value to indicate rest amount is applicable or not.
  * isShownInMobile `boolean`: Boolean value to indicate package is visible in Mobile App or not.
  * isSponsorPackage `boolean`: Boolean value to indicate package can be sponsored or not by other party.
  * maximumGiveAwayRestAmount `number`: If a member join the gym middle of a month via this package, 
  * memberCanAddAddOns `boolean`: Boolean value to indicate member can add extra addons he wish if he choose this package.
  * memberCanLeaveWithinFreePeriod `boolean`: Boolean value to indicate if member can leave from contract within 
  * memberCanRemoveAddOns `boolean`: Boolean value to indicate member can remove already added addons if he choose this package.
  * modifiedDate `string`: Package last modified DateTime.
  * modifiedUser `string`: Package last modified user.
  * monthlyFee `number`: Monthly installment fee if package is not fixed visit.
  * nextPackageNumber `integer`: Next Package the contract continue after the binding period of this package.
  * numberOfInstallments `integer`: Maximum Number of installment a member can divide the package price/cost to pay.
  * numberOfVisits `integer`: If package is fixed visit type, then how many visits are available for this package.
  * packageId `integer`
  * packageName **required** `string`
  * packageNumber `string`
  * packageType **required** `string`: Package type can be either fixed visit or unlimited.
  * perVisitPrice `number`: Cost/Price of the single visit to gym.
  * registrationFee **required** `number`: Registartion fee for the package at a gym.
  * serviceFee **required** `number`: total Service charge of the package for entire period.
  * shownInWeb `boolean`: Boolean value to show this package in MRM system or not.
  * startDate `string`: Start date of the package.
  * totalPrice `number`: total price for the package including Addon fees, service fee and registration fee.

### PackageItemDTO
* PackageItemDTO `object`: The PackageItemDTO Class.
  * articleId **required** `integer`: Refer to ArticleId in Article table in DB.
  * articleName `string`: Name of the article(Addon) in a particular package.
  * articleNumber `integer`: Number assigned the article(Addon) in a particular package.
  * articlePrice `number`: Price of the article determined from that package.
  * endOrder `integer`: Number of the installment this article is available to.
  * isIncludeServiceInCharge `boolean`: Is Included in service charge 
  * measureUnit `string`
  * numberOfItems `number`: How many article(Addon) is available for that package from that type.
  * startOrder `integer`: Number of the installment this article is available from.

### PackageSearchDTO
* PackageSearchDTO `object`: The PackageSearchDTO Class.
  * tags `string`: Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.
  * activeStatus `boolean`: Active Status 
  * addonFee `number`: sum of addon fees.
  * applyForAllGyms `boolean`: Boolean value to indicate wheather package is available in all the gyms.
  * bindingPeriod `integer`: Range of period a member is bound to the contract if he/she choose this package.
  * createdDate `string`: Package created DateTime.
  * createdUser `string`: Package created user.
  * description `string`: Common descriptions about package.If there are more instructions can be stored as comma separated values.
  * features `string`: What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.
  * freeMonths `integer`: No of months gym member can come without payments.
  * memberCanRemoveAddOns `boolean`: Boolean value to indicate member can remove already added addons if he choose this package.
  * modifiedDate `string`: Package last modified DateTime.
  * modifiedUser `string`: Package last modified user.
  * monthlyFee `number`: Monthly installment fee if package is not fixed visit.
  * numberOfVisits `integer`: No of visits for fixed package 
  * packageId `integer`
  * packageName `string`
  * packageNumber `integer`
  * packageType `string`: Package type can be either fixed visit or unlimited.
  * registrationFee `number`: Registartion fee for the package at a gym.
  * serviceFee `number`: total Service charge of the package for entire period.
  * totalCount `integer`: total number of recode for particular search 
  * totalPrice `number`: total price for the package including Addon fees, service fee and registration fee.

### ProblemDetails
* ProblemDetails `object`
  * detail `string`
  * extensions `object`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`

### StatusDTO
* StatusDTO `object`: Imideate response for long running api call.
  * messageId `string`: Reference id for status endpoint
  * statusText `string`: Status of API Call
  * url `string`: Relative url for stauts check

### TestDTO
* TestDTO `object`: The TestDTO Class.
  * id `integer`: Id of the Test object

### UserDTO
* UserDTO `object`: The UserDTO Class.
  * accountNumber `string`: Account number of the user.It can be any stakeholder of the application.even can be a gym.
  * externalEntityNumber `string`: Entity number that make a relationship with BOX API DB.
  * guardian `integer`: Gaurdian of the this user if he/she is under 18 years old.
  * gymNumber `string`: If this user is a gym, then the gym number.
  * introduceBy `integer`: If Someone introduced this user to the system, then that user's UserId.
  * name `string`: Name of the user.
  * number `string`: Unique number maintain by application to idenify user.
  * typeId `integer`: Type of the user.
  * userId `integer`: Indentity number(primary key) for user object. Generated in DB table when inserting a record.

### ValidationError
* ValidationError `object`
  * field `string`
  * message `string`


