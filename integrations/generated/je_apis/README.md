# @datafire/je_apis

Client library for Just Eat Tenant API

## Installation and Usage
```bash
npm install --save @datafire/je_apis
```
```js
let je_apis = require('@datafire/je_apis').create();

je_apis.GetOnlineStatus({
  "Accept-Tenant": "",
  "Authorization": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetOnlineStatus
Uri template /application/onlinestatus


```js
je_apis.GetOnlineStatus({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.Core.Model.OrderOnlineState](#justeat.core.model.orderonlinestate)

### GetVersionAndStatus
Uri template /application/{applicationId}/versionstatus/{versionId}


```js
je_apis.GetVersionAndStatus({
  "Accept-Tenant": "",
  "Authorization": "",
  "applicationId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * applicationId **required** `string`
  * versionId **required** `string`

#### Output
* output [JustEat.Core.Model.VersionOnlineStatus](#justeat.core.model.versiononlinestatus)

### GetApplicationVersion
Uri template /application/{applicationId}/versionupdate/{versionId}


```js
je_apis.GetApplicationVersion({
  "Accept-Tenant": "",
  "Authorization": "",
  "applicationId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * applicationId **required** `string`
  * versionId **required** `string`

#### Output
* output [JustEat.Core.Model.ApplicationVersion](#justeat.core.model.applicationversion)

### CreateBasket
Uri template /baskets


```js
je_apis.CreateBasket({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * createBasketRequest [JustEat.PublicApi.Site.Handlers.DTOs.CreateBasketRequest](#justeat.publicapi.site.handlers.dtos.createbasketrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.BasketCreateResponse](#justeat.publicapi.site.handlers.dtos.basketcreateresponse)

### GetBasket
Uri template /baskets/{basketId}


```js
je_apis.GetBasket({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.BasketDetailsResponse](#justeat.publicapi.site.handlers.dtos.basketdetailsresponse)

### SetOrderContactDetails
Uri template /baskets/{basketId}/contactdetails/


```js
je_apis.SetOrderContactDetails({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * body [JustEat.PublicApi.Site.Handlers.Basket.OrderContactDetailsRequest](#justeat.publicapi.site.handlers.basket.ordercontactdetailsrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.Basket.SetOrderContactDetailsResult](#justeat.publicapi.site.handlers.basket.setordercontactdetailsresult)

### SetRequestedFulfilmentTime
Uri template /baskets/{basketId}/fulfilmenttime?time={time}&asap={asap}


```js
je_apis.SetRequestedFulfilmentTime({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * time `string`
  * body [System.Object](#system.object)
  * asap `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Basket.SetRequestedFulfilmentTimeResult](#justeat.publicapi.site.handlers.basket.setrequestedfulfilmenttimeresult)

### GetFulfilmentTimeslots
Uri template /baskets/{basketId}/fulfilmenttimeslots/


```js
je_apis.GetFulfilmentTimeslots({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Basket.GetFulfilmentTimeSlotsResult](#justeat.publicapi.site.handlers.basket.getfulfilmenttimeslotsresult)

### SetOrderNotes
Uri template /baskets/{basketId}/notes


```js
je_apis.SetOrderNotes({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * notes [JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesRequest](#justeat.publicapi.site.handlers.basket.setordernotesrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesResult](#justeat.publicapi.site.handlers.basket.setordernotesresult)

### AddProductToBasket
Uri template /baskets/{basketId}/orderitems


```js
je_apis.AddProductToBasket({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * addProductRequest [JustEat.PublicApi.Site.Handlers.DTOs.AddProductRequest](#justeat.publicapi.site.handlers.dtos.addproductrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.OrderItemInsertResponse](#justeat.publicapi.site.handlers.dtos.orderiteminsertresponse)

### RemoveProductFromBasket
Uri template /baskets/{basketId}/orderitems/{orderItemId}


```js
je_apis.RemoveProductFromBasket({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": "",
  "orderItemId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * orderItemId **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.OrderItemRemoveResponse](#justeat.publicapi.site.handlers.dtos.orderitemremoveresponse)

### UpdateProductsMealParts
Uri template /baskets/{basketId}/orderitems/{orderItemId}/mealparts


```js
je_apis.UpdateProductsMealParts({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": "",
  "orderItemId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * orderItemId **required** `string`
  * updateMealPartsRequest [JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPartsRequest](#justeat.publicapi.site.handlers.dtos.updatemealpartsrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.MealPartsResponse](#justeat.publicapi.site.handlers.dtos.mealpartsresponse)

### UpdateProductsOptionalAccessories
Uri template /baskets/{basketId}/orderitems/{orderItemId}/optionalaccessories


```js
je_apis.UpdateProductsOptionalAccessories({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": "",
  "orderItemId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * orderItemId **required** `string`
  * updateOptionalAccessoriesRequest [JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessoriesRequest](#justeat.publicapi.site.handlers.dtos.updateoptionalaccessoriesrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.OptionalAccessoriesResponse](#justeat.publicapi.site.handlers.dtos.optionalaccessoriesresponse)

### UpdateProductsRequiredAccessories
Uri template /baskets/{basketId}/orderitems/{orderItemId}/requiredaccessories


```js
je_apis.UpdateProductsRequiredAccessories({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": "",
  "orderItemId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * orderItemId **required** `string`
  * updateRequiredAccessoriesRequest [JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessoriesRequest](#justeat.publicapi.site.handlers.dtos.updaterequiredaccessoriesrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.RequiredAccessoriesResponse](#justeat.publicapi.site.handlers.dtos.requiredaccessoriesresponse)

### baskets.basketId.paymentoptions.get
Uri template /baskets/{basketId}/paymentoptions?applePay={applePay}&androidPay={androidPay}&platform={platform}&voucherCode={voucherCode}


```js
je_apis.baskets.basketId.paymentoptions.get({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * platform `string`
  * applePay `boolean`
  * androidPay `boolean`
  * voucherCode `string`
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Payments.BasketPaymentOptionsResult](#justeat.publicapi.site.handlers.payments.basketpaymentoptionsresult)

### UpdateBasketServiceOptions
Uri template /baskets/{basketId}/serviceoptions


```js
je_apis.UpdateBasketServiceOptions({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * basketServiceOptionsRequest [JE.Api.Basket.DTOs.BasketServiceOptionsRequest](#je.api.basket.dtos.basketserviceoptionsrequest)

#### Output
* output [JE.Api.Basket.DTOs.OrderBasketResponse](#je.api.basket.dtos.orderbasketresponse)

### UpdateBasket
Uri template /baskets/{basketId}/user


```js
je_apis.UpdateBasket({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * request [JustEat.PublicApi.Site.Handlers.ConsumerOperations.UpdateUserRequest](#justeat.publicapi.site.handlers.consumeroperations.updateuserrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.BasketUserUpdateResponse](#justeat.publicapi.site.handlers.dtos.basketuserupdateresponse)

### UpdateZipCode
Uri template /baskets/{basketId}/zipcode


```js
je_apis.UpdateZipCode({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * zipCodeRequest [JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeRequest](#justeat.publicapi.site.handlers.dtos.zipcoderequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeResponse](#justeat.publicapi.site.handlers.dtos.zipcoderesponse)

### GetConsumerDetails
Uri template /consumer


```js
je_apis.GetConsumerDetails({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * Auth-Token `string`

#### Output
* output [JE.Api.Consumer.DTOs.ConsumerDetailsResponse](#je.api.consumer.dtos.consumerdetailsresponse)

### UpdateConsumer
Uri template /consumer


```js
je_apis.UpdateConsumer({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * updateRequest [JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerUpdateRequest](#justeat.publicapi.site.handlers.consumeroperations.consumerupdaterequest)
  * Auth-Token `string`

#### Output
* output [JE.Api.Consumer.DTOs.ConsumerDetailsUpdateResponse](#je.api.consumer.dtos.consumerdetailsupdateresponse)

### CreateConsumer
Uri template /consumer


```js
je_apis.CreateConsumer({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * consumerDetails [JE.Api.Consumer.DTOs.ConsumerDetailsCreateRequest](#je.api.consumer.dtos.consumerdetailscreaterequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerLoginResponse](#justeat.publicapi.site.handlers.consumeroperations.consumerloginresponse)

### GetConsumerAddresses
Uri template /consumer/addresses


```js
je_apis.GetConsumerAddresses({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * Auth-Token `string`

#### Output
* output [JE.Api.Consumer.DTOs.ConsumerAddressesResponse](#je.api.consumer.dtos.consumeraddressesresponse)

### DeActivateDeviceToken
Uri template /consumer/devicetokens


```js
je_apis.DeActivateDeviceToken({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * deviceTokenRequest [JustEat.PublicApi.Site.Handlers.ConsumerOperations.DeviceTokenRequest](#justeat.publicapi.site.handlers.consumeroperations.devicetokenrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerDeviceTokenResponse](#justeat.publicapi.site.handlers.consumeroperations.consumerdevicetokenresponse)

### ActivateDeviceToken
Uri template /consumer/devicetokens


```js
je_apis.ActivateDeviceToken({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * deviceTokenRequest [JustEat.PublicApi.Site.Handlers.ConsumerOperations.DeviceTokenRequest](#justeat.publicapi.site.handlers.consumeroperations.devicetokenrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerDeviceTokenResponse](#justeat.publicapi.site.handlers.consumeroperations.consumerdevicetokenresponse)

### GetInFlightOrderStatuses
Uri template /consumer/inflight-order-status<br/><br/>Accept-Version:1 StatusNames: <br/>['AwaitingPayment' or 'Processing' or 'Completed' or 'Canceled' or 'Declined' or 'Accepted' or 'OnItsWay' or 'DueDateChanged']<br/><br/>Accept-Version:2 StatusNames: <br/>['DueDateDelayed']<br/><br/>Accept-Version:3 StatusNames: <br/>['OrderReady']<br/><br/>Accept-Version:4 StatusNames: <br/>['PreOrderPending']


```js
je_apis.GetInFlightOrderStatuses({
  "Accept-Tenant": "",
  "Authorization": "",
  "Accept-Version": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * Auth-Token `string`
  * Accept-Version **required** `string`

#### Output
* output [JE.Api.InFlightOrderStatus.DTOs.InFlightOrderResponse](#je.api.inflightorderstatus.dtos.inflightorderresponse)

### GetOrderHistory
Uri template /consumer/order-history?page={page}&pageSize={pageSize}


```js
je_apis.GetOrderHistory({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * page `integer`
  * pageSize `integer`
  * Auth-Token `string`

#### Output
* output [JE.Api.ConsumerOrder.DTOs.OrderHistoryDto](#je.api.consumerorder.dtos.orderhistorydto)

### UpdateConsumerPassword
Uri template /consumer/password


```js
je_apis.UpdateConsumerPassword({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * credentialsRequest [JE.Api.Consumer.DTOs.UpdatePasswordRequest](#je.api.consumer.dtos.updatepasswordrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.ConsumerOperations.ChangePasswordLoginResponse](#justeat.publicapi.site.handlers.consumeroperations.changepasswordloginresponse)

### GetConsumerPreferences
Uri template /consumer/preferences


```js
je_apis.GetConsumerPreferences({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * Auth-Token `string`

#### Output
* output [JE.Api.Consumer.DTOs.ConsumerPreferencesResponse](#je.api.consumer.dtos.consumerpreferencesresponse)

### SetConsumerPreferences
Uri template /consumer/preferences


```js
je_apis.SetConsumerPreferences({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * updateRequest [JE.Api.Consumer.DTOs.ConsumerPreferencesUpdateRequest](#je.api.consumer.dtos.consumerpreferencesupdaterequest)
  * Auth-Token `string`

#### Output
* output [JE.Api.Consumer.DTOs.ConsumerPreferencesUpdateResponse](#je.api.consumer.dtos.consumerpreferencesupdateresponse)

### consumer.serviceable_addresses.restaurant.restaurantId.get
Uri template /consumer/serviceable-addresses/restaurant/{restaurantId}


```js
je_apis.consumer.serviceable_addresses.restaurant.restaurantId.get({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * maxAmount `integer`
  * Auth-Token `string`

#### Output
* output [JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddressesResponse](#je.api.consumerorder.dtos.serviceableaddresses.serviceableaddressesresponse)

### consumer.serviceable_addresses.restaurant.restaurantId.maxAmount.get
Uri template /consumer/serviceable-addresses/restaurant/{restaurantId}/{maxAmount}


```js
je_apis.consumer.serviceable_addresses.restaurant.restaurantId.maxAmount.get({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0,
  "maxAmount": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * maxAmount **required** `integer`
  * Auth-Token `string`

#### Output
* output [JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddressesResponse](#je.api.consumerorder.dtos.serviceableaddresses.serviceableaddressesresponse)

### GetCustomisation
Uri template /consumerhelp/customisation?orderid={orderid}&requestcontext={requestcontext}


```js
je_apis.GetCustomisation({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId `string`
  * requestContext `string`

#### Output
* output [JustEat.ConsumerHelpApi.Contracts.Customisation.HelpCustomisation](#justeat.consumerhelpapi.contracts.customisation.helpcustomisation)

### GetFlowStep1
Uri template /consumerhelp/flows/{flow}/{orderId}/{action}


```js
je_apis.GetFlowStep1({
  "Accept-Tenant": "",
  "Authorization": "",
  "flow": "",
  "orderId": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * flow **required** `string`
  * orderId **required** `string`
  * action **required** `string`

#### Output
* output [JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse](#justeat.consumerhelpapi.contracts.flows.flowresponse)

### PostFlowStep1
Uri template /consumerhelp/flows/{flow}/{orderId}/{action}


```js
je_apis.PostFlowStep1({
  "Accept-Tenant": "",
  "Authorization": "",
  "flow": "",
  "orderId": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * flow **required** `string`
  * orderId **required** `string`
  * action **required** `string`

#### Output
* output [JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse](#justeat.consumerhelpapi.contracts.flows.flowresponse)

### GetFlowStep2
Uri template /consumerhelp/flows/{flow}/{orderId}/{action}/{subaction}


```js
je_apis.GetFlowStep2({
  "Accept-Tenant": "",
  "Authorization": "",
  "flow": "",
  "orderId": "",
  "action": "",
  "subaction": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * flow **required** `string`
  * orderId **required** `string`
  * action **required** `string`
  * subaction **required** `string`

#### Output
* output [JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse](#justeat.consumerhelpapi.contracts.flows.flowresponse)

### PostFlowStep2
Uri template /consumerhelp/flows/{flow}/{orderId}/{action}/{subaction}


```js
je_apis.PostFlowStep2({
  "Accept-Tenant": "",
  "Authorization": "",
  "flow": "",
  "orderId": "",
  "action": "",
  "subaction": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * flow **required** `string`
  * orderId **required** `string`
  * action **required** `string`
  * subaction **required** `string`

#### Output
* output [JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse](#justeat.consumerhelpapi.contracts.flows.flowresponse)

### GetCountries
Uri template /countries


```js
je_apis.GetCountries({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.CountryResponse](#justeat.publicapi.site.handlers.dtos.countryresponse)

### GetActiveExperiments
Uri template /experiments/active


```js
je_apis.GetActiveExperiments({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * context [JE.Api.Experiment.Contract.ExperimentContext](#je.api.experiment.contract.experimentcontext)

#### Output
* output [JE.Api.Experiment.Contract.ExperimentResults](#je.api.experiment.contract.experimentresults)

### health.check.get
Uri template /health/check


```js
je_apis.health.check.get({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.HealthResponse](#justeat.publicapi.site.handlers.dtos.healthresponse)

### health.validate.get
Uri template /health/validate


```js
je_apis.health.validate.get({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.HealthResponse](#justeat.publicapi.site.handlers.dtos.healthresponse)

### Put
Uri template /internal/for-testing/{basketId}/contactdetails/


```js
je_apis.Put({
  "Accept-Tenant": "",
  "Authorization": "",
  "basketId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * basketId **required** `string`
  * body [JustEat.PublicApi.Site.Handlers.Basket.OrderContactDetailsRequest](#justeat.publicapi.site.handlers.basket.ordercontactdetailsrequest)

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.ForTestsResponse](#justeat.publicapi.site.handlers.dtos.fortestsresponse)

### GetHealth
Uri template /internal/health/all


```js
je_apis.GetHealth({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.HealthCheckResponse](#justeat.publicapi.site.handlers.dtos.healthcheckresponse)

### CreateLoginToken
Uri template /logins


```js
je_apis.CreateLoginToken({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * credentialsRequest [JE.Api.Consumer.DTOs.CredentialsRequest](#je.api.consumer.dtos.credentialsrequest)

#### Output
* output [JE.Api.Consumer.DTOs.LoginResponse](#je.api.consumer.dtos.loginresponse)

### GetDeliveryAreas
Uri template /menus/{menuId}/deliveryareas


```js
je_apis.GetDeliveryAreas({
  "Accept-Tenant": "",
  "Authorization": "",
  "menuId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * menuId **required** `integer`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.DeliveryAreasResponse](#justeat.publicapi.site.handlers.dtos.deliveryareasresponse)

### GetCategoriesForMenu
Uri template /menus/{menuId}/productcategories


```js
je_apis.GetCategoriesForMenu({
  "Accept-Tenant": "",
  "Authorization": "",
  "menuId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * menuId **required** `integer`

#### Output
* output [JustEat.PublicApi.Site.ResponseData.ProductCategoryResult](#justeat.publicapi.site.responsedata.productcategoryresult)

### GetProducts
Uri template /menus/{menuId}/productcategories/{categoryId}/products


```js
je_apis.GetProducts({
  "Accept-Tenant": "",
  "Authorization": "",
  "menuId": 0,
  "categoryId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * menuId **required** `integer`
  * categoryId **required** `integer`

#### Output
* output [JustEat.PublicApi.Site.ResponseData.ProductResults](#justeat.publicapi.site.responsedata.productresults)

### GetProduct
Uri template /menus/{menuId}/products/{productId}


```js
je_apis.GetProduct({
  "Accept-Tenant": "",
  "Authorization": "",
  "menuId": 0,
  "productId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * menuId **required** `integer`
  * productId **required** `integer`

#### Output
* output [JustEat.PublicApi.Site.ResponseData.ProductResult](#justeat.publicapi.site.responsedata.productresult)

### CreateOrderFromBasket
SuccessState values are: Unknown = 0, Successful, InvalidBasket, BasketNotOrderable, PotentialDuplicate, BasketDoesNotExist, BasketTooBig, InvalidContactDetails, GuestAccountCannotBeCreated, InvalidAuthToken


```js
je_apis.CreateOrderFromBasket({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * createOrderRequest [JustEat.PublicApi.Site.Handlers.CreateOrderRequest](#justeat.publicapi.site.handlers.createorderrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.OrderCreatedResponse](#justeat.publicapi.site.handlers.ordercreatedresponse)

### GetOrderDetails
Uri template /orders/{orderId}


```js
je_apis.GetOrderDetails({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * Auth-Token `string`

#### Output
* output [JE.Api.ConsumerOrder.DTOs.ConsumerOrderDto](#je.api.consumerorder.dtos.consumerorderdto)

### GetOrderGivenAway
Uri template /orders/{orderId}/campaigncontent


```js
je_apis.GetOrderGivenAway({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.CampaignContentResponse](#justeat.publicapi.site.handlers.dtos.campaigncontentresponse)

### orders.orderId.pay.accountcredit.post
Uri template /orders/{orderId}/pay/accountcredit


```js
je_apis.orders.orderId.pay.accountcredit.post({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * request [JustEat.PublicApi.Site.Handlers.Payments.CashCheckoutPaymentRequest](#justeat.publicapi.site.handlers.payments.cashcheckoutpaymentrequest)
  * Auth-Token `string`

#### Output
* output [JE.Api.Payments.Contracts.CheckingOut.CheckoutAttemptResponse](#je.api.payments.contracts.checkingout.checkoutattemptresponse)

### MakePaymentUsingAndroidPay
Uri template /orders/{orderId}/pay/android/


```js
je_apis.MakePaymentUsingAndroidPay({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * androidPayPaymentRequest [JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentRequest](#justeat.publicapi.site.handlers.androidpay.androidpaypaymentrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentResponse](#justeat.publicapi.site.handlers.androidpay.androidpaypaymentresponse)

### MakePaymentUsingApplePay
Uri template /orders/{orderId}/pay/apple/


```js
je_apis.MakePaymentUsingApplePay({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * applePayPaymentRequest [JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentRequest](#justeat.publicapi.site.handlers.applepay.applepaypaymentrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentResponse](#justeat.publicapi.site.handlers.applepay.applepaypaymentresponse)

### orders.orderId.pay.cash.post
Uri template /orders/{orderId}/pay/cash


```js
je_apis.orders.orderId.pay.cash.post({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * request [JustEat.PublicApi.Site.Handlers.Payments.CashCheckoutPaymentRequest](#justeat.publicapi.site.handlers.payments.cashcheckoutpaymentrequest)
  * Auth-Token `string`

#### Output
* output [JE.Api.Payments.Contracts.CheckingOut.Cash.CashPaymentResponse](#je.api.payments.contracts.checkingout.cash.cashpaymentresponse)

### orders.orderId.pay.savedcard.post
Uri template /orders/{orderId}/pay/savedcard


```js
je_apis.orders.orderId.pay.savedcard.post({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * request [JustEat.PublicApi.Site.Handlers.Payments.SavedCardCheckoutPaymentRequest](#justeat.publicapi.site.handlers.payments.savedcardcheckoutpaymentrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Payments.SavedCardCheckoutPaymentResponse](#justeat.publicapi.site.handlers.payments.savedcardcheckoutpaymentresponse)

### GetOrderPaymentStatus
Uri template /orders/{orderId}/payment/status/


```js
je_apis.GetOrderPaymentStatus({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Payments.GetOrderPaymentStatusResult](#justeat.publicapi.site.handlers.payments.getorderpaymentstatusresult)

### orders.orderId.paymentoptions.get
Uri template /orders/{orderId}/paymentoptions?applePay={applePay}&androidPay={androidPay}&platform={platform}&voucherCode={voucherCode}


```js
je_apis.orders.orderId.paymentoptions.get({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * platform `string`
  * applePay `boolean`
  * androidPay `boolean`
  * voucherCode `string`
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.Payments.OrderPaymentOptionsResult](#justeat.publicapi.site.handlers.payments.orderpaymentoptionsresult)

### CreateBasketFromOrder
Uri template /orders/{orderId}/reorder


```js
je_apis.CreateBasketFromOrder({
  "Accept-Tenant": "",
  "Authorization": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * orderId **required** `string`
  * Auth-Token `string`

#### Output
* output [JE.Api.ConsumerOrder.DTOs.Reorder.ReorderBasketDto](#je.api.consumerorder.dtos.reorder.reorderbasketdto)

### PostReview
Uri template /ratings


```js
je_apis.PostReview({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * postRatingData [JustEat.PublicApi.Site.Handlers.DTOs.PostRatingsRequest](#justeat.publicapi.site.handlers.dtos.postratingsrequest)
  * Auth-Token `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.PostReviewResponse](#justeat.publicapi.site.handlers.dtos.postreviewresponse)

### CreateResetToken
Uri template /reset-password-tokens


```js
je_apis.CreateResetToken({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * forgottenPasswordRequest [JE.Api.Consumer.DTOs.ResetPasswordTokenRequest](#je.api.consumer.dtos.resetpasswordtokenrequest)

#### Output
* output [JE.Api.Consumer.DTOs.ResetPasswordTokenResponse](#je.api.consumer.dtos.resetpasswordtokenresponse)

### GetRestaurantsByFreeText
Uri template /restaurants?freetext={freeText}&cuisine={cuisine}&name={restaurantName}


```js
je_apis.GetRestaurantsByFreeText({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * freeText `string`
  * cuisine `string`
  * restaurantName `string`

#### Output
* output [JustEat.PublicApi.DTOs.Responses.ConsumerSearchResponseFreeText](#justeat.publicapi.dtos.responses.consumersearchresponsefreetext)

### GetAvailableBadges
Uri template restaurants/available_badges


```js
je_apis.GetAvailableBadges({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.BadgesResponse](#justeat.publicapi.site.handlers.dtos.badgesresponse)

### SearchVersion3
Uri template /restaurants/v3?q={postCode}&c={cuisine}&name={restaurantName}


```js
je_apis.SearchVersion3({
  "Accept-Tenant": "",
  "Authorization": "",
  "Accept-Version": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * postCode `string`
  * cuisine `string`
  * restaurantName `string`
  * Accept-Version **required** `string`
  * UseSearchOrchestrator `boolean`

#### Output
* output [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchResponse](#je.api.restaurantmenu.dtos.restaurants.version2.consumersearchresponse)

### GetRestaurantDetails
Uri template /restaurants/{restaurantId}/details


```js
je_apis.GetRestaurantDetails({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `string`

#### Output
* output [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.RestaurantDetailResult](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.restaurantdetailresult)

### GetMenus
Uri template /restaurants/{restaurantId}/menus?delivery={delivery}&current={current}&postcode={postcode}


```js
je_apis.GetMenus({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * current `boolean`
  * delivery `boolean`
  * postcode `string`

#### Output
* output [JustEat.PublicApi.Site.ResponseData.MenuResult](#justeat.publicapi.site.responsedata.menuresult)

### GetAvailableMenus
Uri template /restaurants/{restaurantId}/menus/available?time={utcTime}


```js
je_apis.GetAvailableMenus({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * utcTime `string`

#### Output
* output [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.AvailableMenusResult](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.availablemenusresult)

### GetProductCategories
Uri template /restaurants/{restaurantId}/productcategories?type={serviceType}&time={utcTime}&zipcode={zipcode}


```js
je_apis.GetProductCategories({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0,
  "Accept-Version": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * serviceType `string`
  * utcTime `string`
  * zipcode `string`
  * Accept-Version **required** `string`

#### Output
* output [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ProductCategoriesResult](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.productcategoriesresult)

### GetRestaurantReviews
Uri template /restaurants/{restaurantId}/reviews?p={pageNumber}&s={pageSize}


```js
je_apis.GetRestaurantReviews({
  "Accept-Tenant": "",
  "Authorization": "",
  "restaurantId": 0
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * restaurantId **required** `integer`
  * pageNumber `integer`
  * pageSize `integer`

#### Output
* output [JustEat.PublicApi.Site.Handlers.RestaurantReview.RestaurantReviewResponse](#justeat.publicapi.site.handlers.restaurantreview.restaurantreviewresponse)

### GetLatestTermsAndConditions
Uri template /terms


```js
je_apis.GetLatestTermsAndConditions({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`

#### Output
* output [JE.Api.Consumer.DTOs.TermsAndConditionsResponse](#je.api.consumer.dtos.termsandconditionsresponse)

### GetZipCodeAutoCompleteSuggestions
Uri template /zipcodeautocomplete?term={term}&resultsCount={resultsCount}


```js
je_apis.GetZipCodeAutoCompleteSuggestions({
  "Accept-Tenant": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Accept-Tenant **required** `string`: uk
  * Authorization **required** `string`
  * term `string`
  * resultsCount `string`

#### Output
* output [JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeAutoCompleteResponse](#justeat.publicapi.site.handlers.dtos.zipcodeautocompleteresponse)



## Definitions

### JE.Api.Basket.DTOs.BasketServiceOptionsRequest
* JE.Api.Basket.DTOs.BasketServiceOptionsRequest `object`
  * IsReorder `boolean`: Boolean
  * ServiceTime `string`: DateTime
  * ServiceType **required** `string` (values: Delivery, Collection, NoDeliveryServiceType): DeliveryServiceType

### JE.Api.Basket.DTOs.MealPart
* JE.Api.Basket.DTOs.MealPart `object`
  * GroupId `integer`: Int32
  * Id `integer`: Int32
  * OptionalAccessories `array`: IEnumerable[JE.Api.Basket.DTOs.OptionalAccessory]
    * items [JE.Api.Basket.DTOs.OptionalAccessory](#je.api.basket.dtos.optionalaccessory)
  * RequiredAccessories `array`: IEnumerable[JE.Api.Basket.DTOs.RequiredAccessory]
    * items [JE.Api.Basket.DTOs.RequiredAccessory](#je.api.basket.dtos.requiredaccessory)

### JE.Api.Basket.DTOs.MessageKeyValue
* JE.Api.Basket.DTOs.MessageKeyValue `object`
  * DisplayValue `string`: String
  * KeyName `string`: String

### JE.Api.Basket.DTOs.MultiBuyDiscount
* JE.Api.Basket.DTOs.MultiBuyDiscount `object`
  * Amount [System.Decimal](#system.decimal)
  * DiscountType `string`: String
  * OrderItemId `string`: String
  * ProductTypeId `integer`: Int32

### JE.Api.Basket.DTOs.OfferDetails
* JE.Api.Basket.DTOs.OfferDetails `object`
  * Discount [System.Decimal](#system.decimal)
  * DiscountType `string`: String
  * Id `integer`: Int32
  * QualifyingValue [System.Decimal](#system.decimal)

### JE.Api.Basket.DTOs.OptionalAccessory
* JE.Api.Basket.DTOs.OptionalAccessory `object`
  * Id `integer`: Int32
  * Quantity `integer`: Int32
  * UnitPrice [System.Decimal](#system.decimal)

### JE.Api.Basket.DTOs.OrderBasketResponse
* JE.Api.Basket.DTOs.OrderBasketResponse `object`
  * DeliveryCharge [System.Decimal](#system.decimal)
  * Discount [System.Decimal](#system.decimal)
  * Discounts `array`: IEnumerable[JE.Api.Basket.DTOs.OfferDetails]
    * items [JE.Api.Basket.DTOs.OfferDetails](#je.api.basket.dtos.offerdetails)
  * Id `string`: String
  * MenuId `integer`: Int32
  * MultiBuyDiscount [System.Decimal](#system.decimal)
  * MultiBuyDiscounts `array`: IEnumerable[JE.Api.Basket.DTOs.MultiBuyDiscount]
    * items [JE.Api.Basket.DTOs.MultiBuyDiscount](#je.api.basket.dtos.multibuydiscount)
  * OrderItems `array`: IEnumerable[JE.Api.Basket.DTOs.OrderItemView]
    * items [JE.Api.Basket.DTOs.OrderItemView](#je.api.basket.dtos.orderitemview)
  * Orderable `boolean`: Boolean
  * RestaurantId `integer`: Int32
  * ServiceType `string`: String
  * SubTotal [System.Decimal](#system.decimal)
  * Taxes `array`: IEnumerable[JE.Api.Basket.DTOs.Tax]
    * items [JE.Api.Basket.DTOs.Tax](#je.api.basket.dtos.tax)
  * ToSpend [System.Decimal](#system.decimal)
  * Total [System.Decimal](#system.decimal)
  * TotalTipsAmount [System.Decimal](#system.decimal)
  * Totals `array`: IEnumerable[JE.Api.Basket.DTOs.User]
    * items [JE.Api.Basket.DTOs.User](#je.api.basket.dtos.user)
  * UserPrompt `array`: IEnumerable[JE.Api.Basket.DTOs.UserPrompt]
    * items [JE.Api.Basket.DTOs.UserPrompt](#je.api.basket.dtos.userprompt)
  * ZipCode `string`: String

### JE.Api.Basket.DTOs.OrderItemView
* JE.Api.Basket.DTOs.OrderItemView `object`
  * CombinedPrice [System.Decimal](#system.decimal)
  * MealParts `array`: IEnumerable[JE.Api.Basket.DTOs.MealPart]
    * items [JE.Api.Basket.DTOs.MealPart](#je.api.basket.dtos.mealpart)
  * Name `string`: String
  * OptionalAccessories `array`: IEnumerable[JE.Api.Basket.DTOs.OptionalAccessory]
    * items [JE.Api.Basket.DTOs.OptionalAccessory](#je.api.basket.dtos.optionalaccessory)
  * OrderItemId `string`: String
  * ProductId `integer`: Int32
  * ProductTypeId `integer`: Int32
  * RequiredAccessories `array`: IEnumerable[JE.Api.Basket.DTOs.RequiredAccessory]
    * items [JE.Api.Basket.DTOs.RequiredAccessory](#je.api.basket.dtos.requiredaccessory)
  * Synonym `string`: String
  * UnitPrice [System.Decimal](#system.decimal)
  * UserDisplayName `string`: String

### JE.Api.Basket.DTOs.RequiredAccessory
* JE.Api.Basket.DTOs.RequiredAccessory `object`
  * GroupId `integer`: Int32
  * Id `integer`: Int32
  * UnitPrice [System.Decimal](#system.decimal)

### JE.Api.Basket.DTOs.SimpleProductResponse
* JE.Api.Basket.DTOs.SimpleProductResponse `object`
  * Id `integer`: Int32
  * Name `string`: String

### JE.Api.Basket.DTOs.Tax
* JE.Api.Basket.DTOs.Tax `object`
  * TaxName `string`: String
  * TaxRate [System.Decimal](#system.decimal)
  * TaxRateAmount [System.Decimal](#system.decimal)

### JE.Api.Basket.DTOs.User
* JE.Api.Basket.DTOs.User `object`
  * DisplayName `string`: String
  * Total [System.Decimal](#system.decimal)

### JE.Api.Basket.DTOs.UserPrompt
* JE.Api.Basket.DTOs.UserPrompt `object`
  * DefaultMessage `string`: String
  * MessageValues `array`: IEnumerable[JE.Api.Basket.DTOs.MessageKeyValue]
    * items [JE.Api.Basket.DTOs.MessageKeyValue](#je.api.basket.dtos.messagekeyvalue)
  * StatusCode `string`: String

### JE.Api.Consumer.DTOs.ConsumerAddressCreateRequest
* JE.Api.Consumer.DTOs.ConsumerAddressCreateRequest `object`
  * AddressName **required** `string`: String
  * City **required** `string`: String
  * Line1 **required** `string`: String
  * Line2 `string`: String
  * Line3 `string`: String
  * ZipCode **required** `string`: String

### JE.Api.Consumer.DTOs.ConsumerAddressResponse
* JE.Api.Consumer.DTOs.ConsumerAddressResponse `object`
  * AddressName `string`: String
  * City `string`: String
  * IsDefault `boolean`: Boolean
  * Line1 `string`: String
  * Line2 `string`: String
  * Line3 `string`: String
  * ZipCode `string`: String

### JE.Api.Consumer.DTOs.ConsumerAddressesResponse
* JE.Api.Consumer.DTOs.ConsumerAddressesResponse `object`
  * Addresses `array`: IEnumerable[JE.Api.Consumer.DTOs.ConsumerAddressResponse]
    * items [JE.Api.Consumer.DTOs.ConsumerAddressResponse](#je.api.consumer.dtos.consumeraddressresponse)

### JE.Api.Consumer.DTOs.ConsumerDetailsCreateRequest
* JE.Api.Consumer.DTOs.ConsumerDetailsCreateRequest `object`
  * AccountType `string`: String
  * AddressRequest [JE.Api.Consumer.DTOs.ConsumerAddressCreateRequest](#je.api.consumer.dtos.consumeraddresscreaterequest)
  * DateOfBirth `string`: DateTime
  * DeviceId **required** `string`: String
  * DeviceName **required** `string`: String
  * DeviceToken `string`: String
  * DeviceType **required** `string`: String
  * EmailAddress **required** `string`: String
  * FirstName **required** `string`: String
  * LastName **required** `string`: String
  * Password **required** `string`: String
  * PhoneNumber `string`: String
  * TermsAndConditionsId **required** `integer`: Int32
  * WantsNewsletter `boolean`: Boolean

### JE.Api.Consumer.DTOs.ConsumerDetailsResponse
* JE.Api.Consumer.DTOs.ConsumerDetailsResponse `object`
  * AccountType `string`: String
  * ConsumerId **required** `integer`: Int32
  * ConsumerStatus `string`: String
  * CreatedDate `string`: DateTime
  * DateOfBirth `string`: DateTime
  * EmailAddress **required** `string`: String
  * FirstName **required** `string`: String
  * Id **required** `string`: String
  * LastName **required** `string`: String
  * PhoneNumber `string`: String
  * TermsAndConditionsId **required** `integer`: Int32
  * WantsNewsletter `boolean`: Boolean

### JE.Api.Consumer.DTOs.ConsumerDetailsUpdateResponse


### JE.Api.Consumer.DTOs.ConsumerPreference
* JE.Api.Consumer.DTOs.ConsumerPreference `object`
  * Email **required** `boolean`: Boolean
  * Key **required** `string`: String
  * Push **required** `boolean`: Boolean
  * Sms **required** `boolean`: Boolean

### JE.Api.Consumer.DTOs.ConsumerPreferencesResponse
* JE.Api.Consumer.DTOs.ConsumerPreferencesResponse `object`
  * PreferenceVersionViewed **required** `integer`: Int32
  * Preferences **required** `array`: IEnumerable[JE.Api.Consumer.DTOs.DisplayConsumerPreference]
    * items [JE.Api.Consumer.DTOs.DisplayConsumerPreference](#je.api.consumer.dtos.displayconsumerpreference)

### JE.Api.Consumer.DTOs.ConsumerPreferencesUpdateRequest
* JE.Api.Consumer.DTOs.ConsumerPreferencesUpdateRequest `object`
  * DeviceToken `string`: String
  * DeviceType `string`: String
  * EmailAddress `string`: String
  * PhoneNumber `string`: String
  * PreferenceVersionViewed **required** `integer`: Int32
  * Preferences **required** `array`: IEnumerable[JE.Api.Consumer.DTOs.ConsumerPreference]
    * items [JE.Api.Consumer.DTOs.ConsumerPreference](#je.api.consumer.dtos.consumerpreference)

### JE.Api.Consumer.DTOs.ConsumerPreferencesUpdateResponse


### JE.Api.Consumer.DTOs.CredentialsRequest
* JE.Api.Consumer.DTOs.CredentialsRequest `object`
  * DeviceId **required** `string`: String
  * DeviceName **required** `string`: String
  * DeviceToken `string`: String
  * DeviceType **required** `string`: String
  * Password **required** `string`: String
  * Username **required** `string`: String

### JE.Api.Consumer.DTOs.DisplayConsumerPreference
* JE.Api.Consumer.DTOs.DisplayConsumerPreference `object`
  * DisplayName **required** `string`: String
  * Email **required** `boolean`: Boolean
  * Key **required** `string`: String
  * Push **required** `boolean`: Boolean
  * Sms **required** `boolean`: Boolean
  * Sort `integer`: Int32

### JE.Api.Consumer.DTOs.LoginResponse
* JE.Api.Consumer.DTOs.LoginResponse `object`
  * Token **required** `string`: String

### JE.Api.Consumer.DTOs.PasswordValidation
* JE.Api.Consumer.DTOs.PasswordValidation `object`
  * Enabled **required** `boolean`: Boolean
  * ErrorText **required** `string`: String
  * InfoText **required** `string`: String
  * Regex **required** `string`: String

### JE.Api.Consumer.DTOs.ResetPasswordTokenRequest
* JE.Api.Consumer.DTOs.ResetPasswordTokenRequest `object`
  * DeviceType `string`: String
  * EmailAddress **required** `string`: String

### JE.Api.Consumer.DTOs.ResetPasswordTokenResponse


### JE.Api.Consumer.DTOs.TermsAndConditionsResponse
* JE.Api.Consumer.DTOs.TermsAndConditionsResponse `object`
  * Id `integer`: Int32
  * Link `string`: String

### JE.Api.Consumer.DTOs.UpdatePasswordRequest
* JE.Api.Consumer.DTOs.UpdatePasswordRequest `object`
  * DeviceId **required** `string`: String
  * DeviceName **required** `string`: String
  * DeviceType **required** `string`: String
  * Password **required** `string`: String

### JE.Api.ConsumerOrder.DTOs.ConsumerOrderDto
* JE.Api.ConsumerOrder.DTOs.ConsumerOrderDto `object`
  * AskUserToReview `boolean`: Boolean
  * Basket [JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketInfo](#je.api.consumerorder.dtos.orderdetails.basketinfo)
  * Consumer [JE.Api.ConsumerOrder.DTOs.OrderDetails.ConsumerInfo](#je.api.consumerorder.dtos.orderdetails.consumerinfo)
  * Delivery [JE.Api.ConsumerOrder.DTOs.DeliveryDto](#je.api.consumerorder.dtos.deliverydto)
  * Id `string`: String
  * IsFixed `boolean`: Boolean
  * IsLocked `boolean`: Boolean
  * IsReorderable `boolean`: Boolean
  * LegacyId `integer`: Int64
  * Order [JE.Api.ConsumerOrder.DTOs.OrderDetails.OrderInfo](#je.api.consumerorder.dtos.orderdetails.orderinfo)
  * Payment [JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentInfo](#je.api.consumerorder.dtos.orderdetails.paymentinfo)
  * Rating [JE.Api.ConsumerOrder.DTOs.RatingMeta](#je.api.consumerorder.dtos.ratingmeta)
  * Restaurant [JE.Api.ConsumerOrder.DTOs.RestaurantDto](#je.api.consumerorder.dtos.restaurantdto)
  * Review [JE.Api.ConsumerOrder.DTOs.Review](#je.api.consumerorder.dtos.review)
  * Status `string`: String

### JE.Api.ConsumerOrder.DTOs.DeliveryDto
* JE.Api.ConsumerOrder.DTOs.DeliveryDto `object`
  * Address `string`: String
  * City `string`: String
  * Email `string`: String
  * Geoposition [JE.Api.ConsumerOrder.DTOs.Geoposition](#je.api.consumerorder.dtos.geoposition)
  * Name `string`: String
  * PhoneNumber `string`: String
  * Postcode `string`: String

### JE.Api.ConsumerOrder.DTOs.Geoposition
* JE.Api.ConsumerOrder.DTOs.Geoposition `object`
  * AccuracyDescription `string`: String
  * AccuracyInMetres `number`: Double
  * Latitude `number`: Double
  * Longitude `number`: Double
  * Source `string`: String

### JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketInfo
* JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketInfo `object`
  * BasketId `string`: String
  * DeliveryCharge [System.Decimal](#system.decimal)
  * Discount [System.Decimal](#system.decimal)
  * Discounts `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.OfferDetails]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.OfferDetails](#je.api.consumerorder.dtos.orderdetails.offerdetails)
  * Items `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketItem]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketItem](#je.api.consumerorder.dtos.orderdetails.basketitem)
  * MenuId `integer`: Int32
  * MultiBuyDiscount [System.Decimal](#system.decimal)
  * SubTotal [System.Decimal](#system.decimal)
  * ToSpend [System.Decimal](#system.decimal)
  * Total [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketItem
* JE.Api.ConsumerOrder.DTOs.OrderDetails.BasketItem `object`
  * CombinedPrice [System.Decimal](#system.decimal)
  * Description `string`: String
  * Discounts `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.Discount]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.Discount](#je.api.consumerorder.dtos.orderdetails.discount)
  * MealParts `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.MealPart]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.MealPart](#je.api.consumerorder.dtos.orderdetails.mealpart)
  * MenuCardNumber `string`: String
  * MultiBuyDiscounts `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.MultiDiscount]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.MultiDiscount](#je.api.consumerorder.dtos.orderdetails.multidiscount)
  * Name `string`: String
  * OptionalAccessories `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory](#je.api.consumerorder.dtos.orderdetails.optionalaccessory)
  * ProductId `integer`: Int32
  * ProductTypeId `integer`: Int32
  * ProductTypeName `string`: String
  * RequiredAccessories `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory](#je.api.consumerorder.dtos.orderdetails.requiredaccessory)
  * Synonym `string`: String
  * UnitPrice [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.ConsumerInfo
* JE.Api.ConsumerOrder.DTOs.OrderDetails.ConsumerInfo `object`
  * ConsumerId `string`: String

### JE.Api.ConsumerOrder.DTOs.OrderDetails.Discount
* JE.Api.ConsumerOrder.DTOs.OrderDetails.Discount `object`
  * Amount [System.Decimal](#system.decimal)
  * DiscountType `string`: String

### JE.Api.ConsumerOrder.DTOs.OrderDetails.MealPart
* JE.Api.ConsumerOrder.DTOs.OrderDetails.MealPart `object`
  * GroupId `integer`: Int32
  * MealPartId `integer`: Int32
  * Name `string`: String
  * OptionalAccessories `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory](#je.api.consumerorder.dtos.orderdetails.optionalaccessory)
  * RequiredAccessories `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory](#je.api.consumerorder.dtos.orderdetails.requiredaccessory)
  * Synonym `string`: String

### JE.Api.ConsumerOrder.DTOs.OrderDetails.MultiDiscount
* JE.Api.ConsumerOrder.DTOs.OrderDetails.MultiDiscount `object`
  * Amount [System.Decimal](#system.decimal)
  * DiscountType `string`: String
  * OrderItemId `string`: String
  * ProductTypeId `integer`: Int32

### JE.Api.ConsumerOrder.DTOs.OrderDetails.OfferDetails
* JE.Api.ConsumerOrder.DTOs.OrderDetails.OfferDetails `object`
  * Discount [System.Decimal](#system.decimal)
  * DiscountType `string`: String
  * Id `integer`: Int32
  * QualifyingValue [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory
* JE.Api.ConsumerOrder.DTOs.OrderDetails.OptionalAccessory `object`
  * Name `string`: String
  * OptionalAccessoryId `integer`: Int32
  * Quantity `integer`: Int32
  * UnitPrice [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.OrderInfo
* JE.Api.ConsumerOrder.DTOs.OrderDetails.OrderInfo `object`
  * DueDate `string`: DateTimeOffset
  * InitialDueDate `string`: DateTimeOffset
  * NoteToRestaurant `string`: String
  * PlacedDate `string`: DateTimeOffset
  * PromptAsap `boolean`: Boolean
  * ServiceType `string` (values: Collection, Delivery): ServiceType

### JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentInfo
* JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentInfo `object`
  * FeeText `string`: String
  * OrderId `string`: String
  * PaidDate `string`: DateTimeOffset
  * PaymentLines `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentLine]
    * items [JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentLine](#je.api.consumerorder.dtos.orderdetails.paymentline)
  * Total [System.Decimal](#system.decimal)
  * TotalComplementary [System.Decimal](#system.decimal)
  * TotalComplimentary [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentLine
* JE.Api.ConsumerOrder.DTOs.OrderDetails.PaymentLine `object`
  * AvsCheckInfo `string`: String
  * CardFee [System.Decimal](#system.decimal)
  * CardType `string`: String
  * LastCardDigits `string`: String
  * PaymentTransactionRef `string`: String
  * PspName `string`: String
  * Type `string` (values: Cash, Card, AccountCredit, Voucher): PaymentMethod
  * Value [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory
* JE.Api.ConsumerOrder.DTOs.OrderDetails.RequiredAccessory `object`
  * GroupId `integer`: Int32
  * Name `string`: String
  * RequiredAccessoryId `integer`: Int32
  * UnitPrice [System.Decimal](#system.decimal)

### JE.Api.ConsumerOrder.DTOs.OrderHistoryDto
* JE.Api.ConsumerOrder.DTOs.OrderHistoryDto `object`
  * History `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.ConsumerOrderDto]
    * items [JE.Api.ConsumerOrder.DTOs.ConsumerOrderDto](#je.api.consumerorder.dtos.consumerorderdto)

### JE.Api.ConsumerOrder.DTOs.RatingMeta
* JE.Api.ConsumerOrder.DTOs.RatingMeta `object`
  * MaximumScore `integer`: Int32
  * RatingCode `string`: String

### JE.Api.ConsumerOrder.DTOs.Reorder.ReorderBasketDto
* JE.Api.ConsumerOrder.DTOs.Reorder.ReorderBasketDto `object`
  * Basket [JE.Api.Basket.DTOs.OrderBasketResponse](#je.api.basket.dtos.orderbasketresponse)
  * UnavailableProductIds `array`: IEnumerable[System.Int32]
    * items `integer`
  * UnavailableProducts `array`: IEnumerable[JE.Api.Basket.DTOs.SimpleProductResponse]
    * items [JE.Api.Basket.DTOs.SimpleProductResponse](#je.api.basket.dtos.simpleproductresponse)

### JE.Api.ConsumerOrder.DTOs.Restaurant.Address
* JE.Api.ConsumerOrder.DTOs.Restaurant.Address `object`
  * City `string`: String
  * FirstLine `string`: String
  * Latitude [System.Decimal](#system.decimal)
  * Longitude [System.Decimal](#system.decimal)
  * Postcode `string`: String

### JE.Api.ConsumerOrder.DTOs.Restaurant.CuisineBase
* JE.Api.ConsumerOrder.DTOs.Restaurant.CuisineBase `object`
  * Id `integer`: Int64
  * Name `string`: String
  * Rank `integer`: Int32
  * SeoName `string`: String

### JE.Api.ConsumerOrder.DTOs.Restaurant.ServiceableAreaResult
* JE.Api.ConsumerOrder.DTOs.Restaurant.ServiceableAreaResult `object`
  * City `string`: String
  * Postcode `string`: String

### JE.Api.ConsumerOrder.DTOs.RestaurantDto
* JE.Api.ConsumerOrder.DTOs.RestaurantDto `object`
  * Address [JE.Api.ConsumerOrder.DTOs.Restaurant.Address](#je.api.consumerorder.dtos.restaurant.address)
  * Cuisines `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.Restaurant.CuisineBase]
    * items [JE.Api.ConsumerOrder.DTOs.Restaurant.CuisineBase](#je.api.consumerorder.dtos.restaurant.cuisinebase)
  * Description `string`: String
  * Id `integer`: Int32
  * IsHalal `boolean`: Boolean
  * IsNew `boolean`: Boolean
  * IsOffline `boolean`: Boolean
  * IsOpen `boolean`: Boolean
  * IsOpenNow `boolean`: Boolean
  * IsOpenNowForCollection `boolean`: Boolean
  * IsOpenNowForDelivery `boolean`: Boolean
  * IsTempOffline `boolean`: Boolean
  * LogoUrl `string`: String
  * MobileNumber `string`: String
  * Name `string`: String
  * OpeningTime `string`: DateTime
  * PhoneNumber `string`: String
  * SeoName `string`: String
  * ServiceableAreas `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.Restaurant.ServiceableAreaResult]
    * items [JE.Api.ConsumerOrder.DTOs.Restaurant.ServiceableAreaResult](#je.api.consumerorder.dtos.restaurant.serviceablearearesult)
  * TempOfflineType `string` (values: Unset, TempOffline, ClosedToday, ClosedDueTo, OnVacationOpens, OnVacationClosed, None, ClosedDueToEvent, ClosedDueToEmergency, FailedJctConnection, NoTrOverride, IgnoredOrders): TempOfflineType

### JE.Api.ConsumerOrder.DTOs.Review
* JE.Api.ConsumerOrder.DTOs.Review `object`
  * AverageStars `number`: Double
  * DeliveryTimeStars `integer`: Int32
  * FoodQualityStars `integer`: Int32
  * ReviewText `string`: String
  * TakeawayServiceStars `integer`: Int32

### JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddress
* JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddress `object`
  * City `string`: String
  * Email `string`: String
  * LastUsedDateTime `string`: DateTime
  * Line1 `string`: String
  * Line2 `string`: String
  * Line3 `string`: String
  * Name `string`: String
  * NoteToRestaurant `string`: String
  * PhoneNumber `string`: String
  * Postcode `string`: String
  * RestaurantId `integer`: Int32

### JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddressesResponse
* JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddressesResponse `object`
  * Addresses `array`: IEnumerable[JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddress]
    * items [JE.Api.ConsumerOrder.DTOs.ServiceableAddresses.ServiceableAddress](#je.api.consumerorder.dtos.serviceableaddresses.serviceableaddress)
  * RestaurantId `integer`: Int32
  * SmartNote `string`: String

### JE.Api.Experiment.Contract.ExperimentContext
* JE.Api.Experiment.Contract.ExperimentContext `object`
  * Client `string` (values: Web, Android, iOS, Mobile, All, Test): ClientTypes
  * ClientVersion `string`: String
  * ConversationId [System.Guid](#system.guid)
  * Culture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * Tenant `string`: String
  * UserAgent `string`: String
  * UserBucket [System.Guid](#system.guid)
  * UserId `string`: String

### JE.Api.Experiment.Contract.ExperimentResults
* JE.Api.Experiment.Contract.ExperimentResults `object`
  * Active `array`: IEnumerable[System.String]
    * items `string`
  * QueryId [System.Guid](#system.guid)

### JE.Api.InFlightOrderStatus.DTOs.DateTimeOffsetRange
* JE.Api.InFlightOrderStatus.DTOs.DateTimeOffsetRange `object`
  * Begin `string`: DateTimeOffset
  * End `string`: DateTimeOffset

### JE.Api.InFlightOrderStatus.DTOs.InFlightOrderResponse
* JE.Api.InFlightOrderStatus.DTOs.InFlightOrderResponse `object`
  * InFlightOrders `array`: IEnumerable[JE.Api.InFlightOrderStatus.DTOs.OrderStatusesDto]
    * items [JE.Api.InFlightOrderStatus.DTOs.OrderStatusesDto](#je.api.inflightorderstatus.dtos.orderstatusesdto)

### JE.Api.InFlightOrderStatus.DTOs.OrderStatus
* JE.Api.InFlightOrderStatus.DTOs.OrderStatus `object`
  * DueDate `string`: DateTimeOffset
  * MinutesDelayed `integer`: Int32
  * Name **required** `string`: String
  * OrderStatusChangedAt `string`: DateTime

### JE.Api.InFlightOrderStatus.DTOs.OrderStatusesDto
* JE.Api.InFlightOrderStatus.DTOs.OrderStatusesDto `object`
  * ConsumerId **required** `string`: String
  * CurrentStatus **required** `string`: String
  * DelayedBy `string`: TimeSpan
  * DueDate `string`: DateTimeOffset
  * EventChannel `string`: String
  * EventChannelCipherKey `string`: String
  * ExpectedDeliveryTime [JE.Api.InFlightOrderStatus.DTOs.DateTimeOffsetRange](#je.api.inflightorderstatus.dtos.datetimeoffsetrange)
  * InitialDueDate `string`: DateTimeOffset
  * InternalCurrentStatus **required** `string`: String
  * IsForCollection `boolean`: Boolean
  * LastUpdated `string`: DateTime
  * OrderId **required** `string`: String
  * PreOrderDispatchDate `string`: DateTimeOffset
  * RestaurantId `integer`: Int32
  * RestaurantName `string`: String
  * StatusHistory **required** `array`: IEnumerable[JE.Api.InFlightOrderStatus.DTOs.OrderStatus]
    * items [JE.Api.InFlightOrderStatus.DTOs.OrderStatus](#je.api.inflightorderstatus.dtos.orderstatus)

### JE.Api.Menu.Dto.AccessoryDetails
* JE.Api.Menu.Dto.AccessoryDetails `object`
  * GroupId `integer`: Int32
  * Id `integer`: Int32
  * Name `string`: String
  * Price [System.Decimal](#system.decimal)
  * Productid `integer`: Int32

### JE.Api.Menu.Dto.AvailableMenu
* JE.Api.Menu.Dto.AvailableMenu `object`
  * BaseDeliveryTimeInfo `string` (values: NoIssues, ExtendedDeliveryTime, LongWorkingTime): DeliveryTimeInfoType
  * ClosingTime `string`: DateTime
  * ClosingTimeUtc `string`: DateTime
  * DeliveryCostAboveThreshold [System.Decimal](#system.decimal)
  * DeliveryCostBelowThreshold [System.Decimal](#system.decimal)
  * DeliveryThresholdOrderAmount [System.Decimal](#system.decimal)
  * DeliveryTime `integer`: Int32
  * DeliveryTimeInfo `string` (values: NoIssues, ExtendedDeliveryTime, LongWorkingTime): DeliveryTimeInfoType
  * IsFulfillable `boolean`: Boolean
  * IsOpen `boolean`: Boolean
  * LastOrderTime `string`: DateTime
  * LastOrderTimeUtc `string`: DateTime
  * MenuCardId `integer`: Int32
  * MenuType `string` (values: NoMenuType, Lunch, Evening): MenuType
  * OpeningTime `string`: DateTime
  * OpeningTimeUtc `string`: DateTime
  * ServiceType `string` (values: NoMenuServiceType, Delivery, Collection): MenuServiceType
  * WorkingTime `integer`: Int32

### JE.Api.Menu.Dto.CategoryMenuItems
* JE.Api.Menu.Dto.CategoryMenuItems `object`
  * Description `string`: String
  * Id `integer`: Int32
  * MenuItems `array`: IEnumerable[JE.Api.Menu.Dto.MenuItem]
    * items [JE.Api.Menu.Dto.MenuItem](#je.api.menu.dto.menuitem)
  * Name `string`: String
  * Offer `string` (values: NoOffer, BOGOF, BOGOH): Offer

### JE.Api.Menu.Dto.DeliveryArea
* JE.Api.Menu.Dto.DeliveryArea `object`
  * CityName `string`: String
  * DefaultArea `boolean`: Boolean
  * DeliveryCostAboveThreshold [System.Decimal](#system.decimal)
  * DeliveryCostBelowThreshold [System.Decimal](#system.decimal)
  * DeliveryThresholdOrderAmount [System.Decimal](#system.decimal)
  * DeliveryTurningPoint [System.Decimal](#system.decimal)
  * Fee [System.Decimal](#system.decimal)
  * MinimumOrderAmount [System.Decimal](#system.decimal)
  * PostCode `string`: String

### JE.Api.Menu.Dto.MealPartDetails
* JE.Api.Menu.Dto.MealPartDetails `object`
  * Description `string`: String
  * GroupIds `array`: IEnumerable[System.Int32]
    * items `integer`
  * Name `string`: String
  * OptionalAccessories `array`: IEnumerable[JE.Api.Menu.Dto.AccessoryDetails]
    * items [JE.Api.Menu.Dto.AccessoryDetails](#je.api.menu.dto.accessorydetails)
  * ProductId `integer`: Int32
  * RequiredAccessories `array`: IEnumerable[JE.Api.Menu.Dto.AccessoryDetails]
    * items [JE.Api.Menu.Dto.AccessoryDetails](#je.api.menu.dto.accessorydetails)
  * Synonym `string`: String

### JE.Api.Menu.Dto.MenuCardComplete
* JE.Api.Menu.Dto.MenuCardComplete `object`
  * Categories `array`: IEnumerable[JE.Api.Menu.Dto.CategoryMenuItems]
    * items [JE.Api.Menu.Dto.CategoryMenuItems](#je.api.menu.dto.categorymenuitems)
  * MenuCardDetails [JE.Api.Menu.Dto.ProductCategoryMenuCardDetails](#je.api.menu.dto.productcategorymenucarddetails)

### JE.Api.Menu.Dto.MenuItem
* JE.Api.Menu.Dto.MenuItem `object`
  * MenuNumber `string`: String
  * Name `string`: String
  * Products `array`: IEnumerable[JE.Api.Menu.Dto.ProductDetails]
    * items [JE.Api.Menu.Dto.ProductDetails](#je.api.menu.dto.productdetails)

### JE.Api.Menu.Dto.ProductCategoryMenuCardDetails
* JE.Api.Menu.Dto.ProductCategoryMenuCardDetails `object`
  * DefaultDeliveryArea [JE.Api.Menu.Dto.DeliveryArea](#je.api.menu.dto.deliveryarea)
  * DeliveryAreas `array`: IEnumerable[JE.Api.Menu.Dto.DeliveryArea]
    * items [JE.Api.Menu.Dto.DeliveryArea](#je.api.menu.dto.deliveryarea)
  * Description `string`: String
  * DescriptionHtmlSanitized `string`: String
  * MenuCardId `integer`: Int32
  * Name `string`: String
  * RestaurantId `integer`: Int32
  * ServiceType `string` (values: NoMenuServiceType, Delivery, Collection): MenuServiceType
  * Type `string` (values: NoMenuType, Lunch, Evening): MenuType

### JE.Api.Menu.Dto.ProductDetails
* JE.Api.Menu.Dto.ProductDetails `object`
  * Description `string`: String
  * HasMealParts `boolean`: Boolean
  * IsOffline `boolean`: Boolean
  * IsTips `boolean`: Boolean
  * MealParts `array`: IEnumerable[JE.Api.Menu.Dto.MealPartDetails]
    * items [JE.Api.Menu.Dto.MealPartDetails](#je.api.menu.dto.mealpartdetails)
  * MenuNumber `string`: String
  * Name `string`: String
  * Offer `string` (values: NoOffer, BOGOF, BOGOH): Offer
  * OptionalAccessories `array`: IEnumerable[JE.Api.Menu.Dto.AccessoryDetails]
    * items [JE.Api.Menu.Dto.AccessoryDetails](#je.api.menu.dto.accessorydetails)
  * Price [System.Decimal](#system.decimal)
  * ProductId `integer`: Int32
  * ProductTypeId `integer`: Int32
  * RequireOtherProducts `boolean`: Boolean
  * RequiredAccessories `array`: IEnumerable[JE.Api.Menu.Dto.AccessoryDetails]
    * items [JE.Api.Menu.Dto.AccessoryDetails](#je.api.menu.dto.accessorydetails)
  * Synonym `string`: String
  * Tags `array`: IEnumerable[JE.Api.Menu.Dto.Tag]
    * items [JE.Api.Menu.Dto.Tag](#je.api.menu.dto.tag)

### JE.Api.Menu.Dto.Tag
* JE.Api.Menu.Dto.Tag `object`
  * Value `string`: String

### JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement
* JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement `object`
  * Amount [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * Problems `array`: IEnumerable[JE.Contracts.Problem]
    * items [JE.Contracts.Problem](#je.contracts.problem)
  * Status `string` (values: Unknown, Processed, Pending, Rejected): RequirementStatuses

### JE.Api.Payments.Contracts.CheckingOut.Cash.CashPaymentResponse
* JE.Api.Payments.Contracts.CheckingOut.Cash.CashPaymentResponse `object`
  * PaymentOption [JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption](#je.api.payments.contracts.offeringpaymentoptions.paymentoption)
  * ResponseStatus [ServiceStack.ServiceInterface.ServiceModel.ResponseStatus](#servicestack.serviceinterface.servicemodel.responsestatus)
  * Result [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.CheckoutResult,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.checkoutresult,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * TransactionLinesWritten `boolean`: Boolean
  * Voucher [JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail](#je.api.payments.contracts.offeringpaymentoptions.voucherdetail)

### JE.Api.Payments.Contracts.CheckingOut.CheckoutAttemptResponse
* JE.Api.Payments.Contracts.CheckingOut.CheckoutAttemptResponse `object`
  * LegacyOrderId `integer`: Int32
  * PaymentOption [JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption](#je.api.payments.contracts.offeringpaymentoptions.paymentoption)
  * Pending `array`: IEnumerable[JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement]
    * items [JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement](#je.api.payments.contracts.checkingout.acceptancerequirements.paymentacceptancerequirement)
  * Processed `array`: IEnumerable[JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement]
    * items [JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement](#je.api.payments.contracts.checkingout.acceptancerequirements.paymentacceptancerequirement)
  * Rejected `array`: IEnumerable[JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement]
    * items [JE.Api.Payments.Contracts.CheckingOut.AcceptanceRequirements.PaymentAcceptanceRequirement](#je.api.payments.contracts.checkingout.acceptancerequirements.paymentacceptancerequirement)
  * ResponseStatus [ServiceStack.ServiceInterface.ServiceModel.ResponseStatus](#servicestack.serviceinterface.servicemodel.responsestatus)
  * Result [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.CheckoutResult,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.checkoutresult,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * TransactionLinesWritten `boolean`: Boolean
  * Voucher [JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail](#je.api.payments.contracts.offeringpaymentoptions.voucherdetail)

### JE.Api.Payments.Contracts.Money
* JE.Api.Payments.Contracts.Money `object`
  * Amount [System.Decimal](#system.decimal)
  * Currency `string`: String
  * Zero [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)

### JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption
* JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption `object`
  * Available `boolean`: Boolean
  * BasketTotal [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * CanApplyVoucher `boolean`: Boolean
  * CanSave `boolean`: Boolean
  * CardExpiry `string`: DateTime
  * Id [JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOptionIdentifier](#je.api.payments.contracts.offeringpaymentoptions.paymentoptionidentifier)
  * MaskedCardNumber `string`: String
  * OrderValue [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * Outstanding [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * PartialAccountCreditUsed [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * PaymentMethod `string`: String
  * PaymentServiceProvider `string`: String
  * ProcessingFee [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * Selected `boolean`: Boolean
  * VoucherDiscountUsed [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)

### JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOptionIdentifier
* JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOptionIdentifier `object`
  * Id `string`: String
  * Type `string` (values: AccountCredit, Card, Cash, SavedCard, ApplePay, AndroidPay): PaymentOptionTypes

### JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail
* JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail `object`
  * DiscountYielded [JE.Api.Payments.Contracts.Money](#je.api.payments.contracts.money)
  * TypeOfDiscount `string` (values: Amount, Percentage): DiscountType
  * TypeOfDiscountName `string`: String
  * VoucherCode `string`: String

### JE.Api.Payments.Contracts.StatusCode_x0060_1_x005B__x005B_JE.Api.Payments.Contracts.CheckingOut.AuthorisationReasonTypes_x002C__x0020_JE.Api.Payments.Contracts_x002C__x0020_Version_x003D_6.16.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_
* JE.Api.Payments.Contracts.StatusCode_x0060_1_x005B__x005B_JE.Api.Payments.Contracts.CheckingOut.AuthorisationReasonTypes_x002C__x0020_JE.Api.Payments.Contracts_x002C__x0020_Version_x003D_6.16.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_ `object`
  * Code `integer`: Int32
  * Description `string`: String
  * Status `string` (values: Unknown, Success, Unavailable, Failed, Declined, InvalidRequest, AlreadyPaid, AuthorizedButDeclined, ConfigurationError): AuthorisationReasonTypes

### JE.Api.Payments.Contracts.StatusCode_x0060_1_x005B__x005B_JE.Api.Payments.Contracts.CheckingOut.CheckoutResult_x002C__x0020_JE.Api.Payments.Contracts_x002C__x0020_Version_x003D_6.16.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_
* JE.Api.Payments.Contracts.StatusCode_x0060_1_x005B__x005B_JE.Api.Payments.Contracts.CheckingOut.CheckoutResult_x002C__x0020_JE.Api.Payments.Contracts_x002C__x0020_Version_x003D_6.16.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_ `object`
  * Code `integer`: Int32
  * Description `string`: String
  * Status `string` (values: Processing, RegisteredAndAccepted, RegisteredButBalanceOutstanding, Rejected, CancellationRequested, AuthReversed, Failed): CheckoutResult

### JE.Api.Payments.Contracts.StatusCode`1[[JE.Api.Payments.Contracts.CheckingOut.AuthorisationReasonTypes, JE.Api.Payments.Contracts, Version=6.16.0.0, Culture=neutral, PublicKeyToken=null]]


### JE.Api.Payments.Contracts.StatusCode`1[[JE.Api.Payments.Contracts.CheckingOut.CheckoutResult, JE.Api.Payments.Contracts, Version=6.16.0.0, Culture=neutral, PublicKeyToken=null]]


### JE.Api.Response.ErrorBase
* JE.Api.Response.ErrorBase `object`
  * Code `integer`: Int32
  * CodeType `string`: String
  * Message `string`: String
  * Uri `string`: String

### JE.Api.Response.ErrorResponse
* JE.Api.Response.ErrorResponse `object`
  * Code `integer`: Int32
  * CodeType `string`: String
  * Errors `array`: IEnumerable[JE.Api.Response.ErrorBase]
    * items [JE.Api.Response.ErrorBase](#je.api.response.errorbase)
  * Message `string`: String
  * Uri `string`: String

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version1.SearchedTerms
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version1.SearchedTerms `object`
  * City `string`: String
  * Cuisine `string`: String
  * CuisineSeoName `string`: String
  * Phrase `string`: String
  * Postcode `string`: String

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerAddress
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerAddress `object`
  * City `string`: String
  * FirstLine `string`: String
  * Latitude [System.Decimal](#system.decimal)
  * Longitude [System.Decimal](#system.decimal)
  * Postcode `string`: String

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerCuisineDetails
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerCuisineDetails `object`
  * Name `string`: String
  * SeoName `string`: String
  * Total `integer`: Int32

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRatingDetails
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRatingDetails `object`
  * Count `integer`: Int32
  * StarRating `number`: Double

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant `object`
  * Address [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerAddress](#je.api.restaurantmenu.dtos.restaurants.version2.consumeraddress)
  * Badges `array`: IEnumerable[System.String]
    * items `string`
  * Cuisines `array`: IEnumerable[JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurantCuisineDetails]
    * items [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurantCuisineDetails](#je.api.restaurantmenu.dtos.restaurants.version2.consumerrestaurantcuisinedetails)
  * DefaultDisplayRank `integer`: Int32
  * DeliveryCost [System.Decimal](#system.decimal)
  * DeliveryOpeningTime `string`: DateTime
  * DeliveryStartTime `string`: DateTime
  * DeliveryTimeMinutes `integer`: Int32
  * DeliveryWorkingTimeMinutes `integer`: Int32
  * DriveDistance `number`: Double
  * DriveInfoCalculated `boolean`: Boolean
  * Id `integer`: Int32
  * IsCollection `boolean`: Boolean
  * IsDelivery `boolean`: Boolean
  * IsHalal `boolean`: Boolean
  * IsNew `boolean`: Boolean
  * IsOffline `boolean`: Boolean
  * IsPremier `boolean`: Boolean
  * IsSponsored `boolean`: Boolean
  * IsTemporaryBoost `boolean`: Boolean
  * IsTestRestaurant `boolean`: Boolean
  * LogoUrl `string`: String
  * MinimumDeliveryValue [System.Decimal](#system.decimal)
  * Name `string`: String
  * NewnessDate `string`: DateTime
  * OfferPercent [System.Decimal](#system.decimal)
  * OpeningTime `string`: DateTime
  * RatingDetails [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRatingDetails](#je.api.restaurantmenu.dtos.restaurants.version2.consumerratingdetails)
  * ScoreMetadata `array`: IEnumerable[System.Collections.Generic.KeyValuePair`2]
    * items [System.Collections.Generic.KeyValuePair%602%5B%5BSystem.String,%20mscorlib,%20Version=4.0.0.0,%20Culture=neutral,%20PublicKeyToken=b77a5c561934e089%5D,%5BSystem.String,%20mscorlib,%20Version=4.0.0.0,%20Culture=neutral,%20PublicKeyToken=b77a5c561934e089%5D%5D](#system.collections.generic.keyvaluepair%602%5b%5bsystem.string,%20mscorlib,%20version=4.0.0.0,%20culture=neutral,%20publickeytoken=b77a5c561934e089%5d,%5bsystem.string,%20mscorlib,%20version=4.0.0.0,%20culture=neutral,%20publickeytoken=b77a5c561934e089%5d%5d)
  * SendsOnItsWayNotifications `boolean`: Boolean
  * SeoName `string`: String
  * Tags `array`: IEnumerable[System.String]
    * items `string`

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurantCuisineDetails
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurantCuisineDetails `object`
  * Name `string`: String
  * SeoName `string`: String

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchMetaData
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchMetaData `object`
  * Area `string`: String
  * CuisineDetails `array`: IEnumerable[JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerCuisineDetails]
    * items [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerCuisineDetails](#je.api.restaurantmenu.dtos.restaurants.version2.consumercuisinedetails)
  * ResultCount `integer`: Int32
  * SearchedTerms [JE.Api.RestaurantMenu.DTOs.Restaurants.Version1.SearchedTerms](#je.api.restaurantmenu.dtos.restaurants.version1.searchedterms)
  * TagDetails `array`: IEnumerable[JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerTagDetails]
    * items [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerTagDetails](#je.api.restaurantmenu.dtos.restaurants.version2.consumertagdetails)

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchResponse
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchResponse `object`
  * ClosedRestaurants `array`: IEnumerable[JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant]
    * items [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant](#je.api.restaurantmenu.dtos.restaurants.version2.consumerrestaurant)
  * MetaData [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerSearchMetaData](#je.api.restaurantmenu.dtos.restaurants.version2.consumersearchmetadata)
  * OpenRestaurants `array`: IEnumerable[JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant]
    * items [JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerRestaurant](#je.api.restaurantmenu.dtos.restaurants.version2.consumerrestaurant)

### JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerTagDetails
* JE.Api.RestaurantMenu.DTOs.Restaurants.Version2.ConsumerTagDetails `object`
  * BackgroundColour `string`: String
  * Colour `string`: String
  * DisplayName `string`: String
  * Key `string`: String
  * Priority `integer`: Int32

### JE.Contracts.Problem
* JE.Contracts.Problem `object`
  * AttemptedValue [System.Object](#system.object)
  * CustomState [System.Object](#system.object)
  * ErrorCode `string`: String
  * ErrorMessage `string`: String
  * PropertyName `string`: String

### JustEat.ConsumerHelpApi.Contracts.Customisation.GaTracking
* JustEat.ConsumerHelpApi.Contracts.Customisation.GaTracking `object`
  * Action `string`: String
  * Category `string`: String
  * Label `string`: String

### JustEat.ConsumerHelpApi.Contracts.Customisation.HelpAction
* JustEat.ConsumerHelpApi.Contracts.Customisation.HelpAction `object`
  * Action `string`: String
  * ButtonType `string` (values: Primary, Secondary, TextOnly): HelpActionButtonType
  * Department `string`: String
  * GaTracking [JustEat.ConsumerHelpApi.Contracts.Customisation.GaTracking](#justeat.consumerhelpapi.contracts.customisation.gatracking)
  * Id `string`: String
  * Title `string`: String
  * Type `string` (values: LogIn, Call, Chatbot, LiveChat, ChapiGet, ChapiPost, Link, HelpArticleLink, EndFlow): HelpActionType

### JustEat.ConsumerHelpApi.Contracts.Customisation.HelpConfig
* JustEat.ConsumerHelpApi.Contracts.Customisation.HelpConfig `object`
  * ChatbotButtonText `string`: String
  * ChatbotEnabled `boolean`: Boolean
  * EmailButtonText `string`: String
  * EmailEnabled `boolean`: Boolean
  * LiveChatButtonText `string`: String
  * LiveChatEnabled `boolean`: Boolean
  * PersonalisedHelpEnabled `boolean`: Boolean
  * PhoneButtonText `string`: String
  * PhoneEnabled `boolean`: Boolean

### JustEat.ConsumerHelpApi.Contracts.Customisation.HelpCustomisation
* JustEat.ConsumerHelpApi.Contracts.Customisation.HelpCustomisation `object`
  * Config [JustEat.ConsumerHelpApi.Contracts.Customisation.HelpConfig](#justeat.consumerhelpapi.contracts.customisation.helpconfig)
  * HelpSessionId `string`: String
  * Personalisation [JustEat.ConsumerHelpApi.Contracts.Customisation.HelpPersonalisation](#justeat.consumerhelpapi.contracts.customisation.helppersonalisation)

### JustEat.ConsumerHelpApi.Contracts.Customisation.HelpOrder
* JustEat.ConsumerHelpApi.Contracts.Customisation.HelpOrder `object`
  * DueAt `string`: DateTimeOffset
  * MinutesAdded `integer`: Int32
  * OrderId `string`: String
  * OrderNumber `integer`: Int64
  * RestaurantLogo `string`: String
  * RestaurantName `string`: String
  * RestaurantTelephone `string`: String
  * Status `string`: String

### JustEat.ConsumerHelpApi.Contracts.Customisation.HelpPersonalisation
* JustEat.ConsumerHelpApi.Contracts.Customisation.HelpPersonalisation `object`
  * CallRestaurant `boolean`: Boolean
  * CallRestaurantText `string`: String
  * CancellationFee [System.Decimal](#system.decimal)
  * LatestOrder [JustEat.ConsumerHelpApi.Contracts.Customisation.HelpOrder](#justeat.consumerhelpapi.contracts.customisation.helporder)
  * LatestOrderLoadError `boolean`: Boolean
  * OrderActions `array`: IEnumerable[JustEat.ConsumerHelpApi.Contracts.Customisation.HelpAction]
    * items [JustEat.ConsumerHelpApi.Contracts.Customisation.HelpAction](#justeat.consumerhelpapi.contracts.customisation.helpaction)

### JustEat.ConsumerHelpApi.Contracts.Flows.ContainerWithType_x0060_1_x005B__x005B_JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep_x002C__x0020_JustEat.ConsumerHelpApi.Contracts_x002C__x0020_Version_x003D_1.0.92.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_
* JustEat.ConsumerHelpApi.Contracts.Flows.ContainerWithType_x0060_1_x005B__x005B_JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep_x002C__x0020_JustEat.ConsumerHelpApi.Contracts_x002C__x0020_Version_x003D_1.0.92.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_null_x005D__x005D_ `object`
  * Data [JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep](#justeat.consumerhelpapi.contracts.flows.flowstep)
  * Id `string`: String
  * Type `string`: String

### JustEat.ConsumerHelpApi.Contracts.Flows.ContainerWithType`1[[JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep, JustEat.ConsumerHelpApi.Contracts, Version=1.0.92.0, Culture=neutral, PublicKeyToken=null]]


### JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse
* JustEat.ConsumerHelpApi.Contracts.Flows.FlowResponse `object`
  * OrderUpdate [JustEat.ConsumerHelpApi.Contracts.Flows.OrderUpdate](#justeat.consumerhelpapi.contracts.flows.orderupdate)
  * StepResponse [JustEat.ConsumerHelpApi.Contracts.Flows.ContainerWithType%601%5B%5BJustEat.ConsumerHelpApi.Contracts.Flows.FlowStep,%20JustEat.ConsumerHelpApi.Contracts,%20Version=1.0.92.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#justeat.consumerhelpapi.contracts.flows.containerwithtype%601%5b%5bjusteat.consumerhelpapi.contracts.flows.flowstep,%20justeat.consumerhelpapi.contracts,%20version=1.0.92.0,%20culture=neutral,%20publickeytoken=null%5d%5d)

### JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep
* JustEat.ConsumerHelpApi.Contracts.Flows.FlowStep `object`
  * Title `string`: String

### JustEat.ConsumerHelpApi.Contracts.Flows.OrderUpdate
* JustEat.ConsumerHelpApi.Contracts.Flows.OrderUpdate `object`
  * Status `string`: String

### JustEat.Core.Model.ApplicationVersion
* JustEat.Core.Model.ApplicationVersion `object`
  * ForcedVersion `string`: String
  * RecommendedVersion `string`: String
  * UseResponsiveWeb `array`: IEnumerable[System.Object]
    * items [System.Object](#system.object)
  * UseWebsiteCheckout `boolean`: Boolean

### JustEat.Core.Model.CuisineType
* JustEat.Core.Model.CuisineType `object`
  * Id `integer`: Int32
  * Name `string`: String
  * SeoName `string`: String

### JustEat.Core.Model.CustomerReview
* JustEat.Core.Model.CustomerReview `object`
  * Comments `string`: String
  * CreatedDate `string`: DateTime
  * Delivery [System.Decimal](#system.decimal)
  * NameAndCity `string`: String
  * Overall [System.Decimal](#system.decimal)
  * Quality [System.Decimal](#system.decimal)
  * Service [System.Decimal](#system.decimal)

### JustEat.Core.Model.Deal
* JustEat.Core.Model.Deal `object`
  * Description `string`: String
  * DiscountPercent `string`: String
  * QualifyingPrice `string`: String

### JustEat.Core.Model.DeliveryExamples
* JustEat.Core.Model.DeliveryExamples `object`
  * Cost [System.Decimal](#system.decimal)
  * MinimumOrder [System.Decimal](#system.decimal)
  * PostCodes `string`: String

### JustEat.Core.Model.GetRestaurantResult
* JustEat.Core.Model.GetRestaurantResult `object`
  * Restaurants `array`: IEnumerable[JustEat.Core.Model.RestaurantSearchResult]
    * items [JustEat.Core.Model.RestaurantSearchResult](#justeat.core.model.restaurantsearchresult)
  * ShortResultText `string`: String

### JustEat.Core.Model.Image
* JustEat.Core.Model.Image `object`
  * StandardResolutionURL `string`: String

### JustEat.Core.Model.MealOption
* JustEat.Core.Model.MealOption `object`
  * DisplayRank `integer`: Int32
  * HasAccessory `boolean`: Boolean
  * ProductChoice `array`: IEnumerable[JustEat.Core.Model.Product]
    * items [JustEat.Core.Model.Product](#justeat.core.model.product)

### JustEat.Core.Model.Menu
* JustEat.Core.Model.Menu `object`
  * AvailableDuring `array`: IEnumerable[System.DayOfWeek]
    * items `string`
  * Categories `array`: IEnumerable[JustEat.Core.Model.ProductCategory]
    * items [JustEat.Core.Model.ProductCategory](#justeat.core.model.productcategory)
  * ClosingWorkTime `string`: TimeSpan
  * CustomerReviewsSummary `array`: IEnumerable[JustEat.Core.Model.CustomerReview]
    * items [JustEat.Core.Model.CustomerReview](#justeat.core.model.customerreview)
  * DeliveryCostAboveThreshold [System.Decimal](#system.decimal)
  * DeliveryCostBelowThreshold [System.Decimal](#system.decimal)
  * DeliveryCostExamples `array`: IEnumerable[JustEat.Core.Model.DeliveryExamples]
    * items [JustEat.Core.Model.DeliveryExamples](#justeat.core.model.deliveryexamples)
  * DeliveryThresholdOrderAmount [System.Decimal](#system.decimal)
  * DeliveryTurningpoint [System.Decimal](#system.decimal)
  * Description `string`: String
  * Id `integer`: Int32
  * PickupOrDeliveryTime `array`: IEnumerable[System.DayOfWeek]
    * items `string`
  * Products `array`: IEnumerable[JustEat.Core.Model.Product]
    * items [JustEat.Core.Model.Product](#justeat.core.model.product)
  * RestaurantId `integer`: Int32
  * Title `string`: String
  * Type [JustEat.Core.Model.MenuType](#justeat.core.model.menutype)

### JustEat.Core.Model.MenuType
* JustEat.Core.Model.MenuType `object`
  * CmsKey `string`: String
  * Description `string`: String
  * Id `integer`: Int32
  * Image `string`: String
  * IsDelivery `boolean`: Boolean
  * Name `string`: String

### JustEat.Core.Model.OrderOnlineState
* JustEat.Core.Model.OrderOnlineState `object`
  * Value `integer`: Int32

### JustEat.Core.Model.Product
* JustEat.Core.Model.Product `object`
  * Accessories `array`: IEnumerable[JustEat.Core.Model.ProductAccessory]
    * items [JustEat.Core.Model.ProductAccessory](#justeat.core.model.productaccessory)
  * AvailableBetween [JustEat.Core.Model.TimeRange](#justeat.core.model.timerange)
  * Category [JustEat.Core.Model.ProductCategory](#justeat.core.model.productcategory)
  * ComboOptions `array`: IEnumerable[JustEat.Core.Model.MealOption]
    * items [JustEat.Core.Model.MealOption](#justeat.core.model.mealoption)
  * ContainsNuts `boolean`: Boolean
  * Description `string`: String
  * FoodClassifications `string` (values: None, Nuts, Hot, Vegetarian): FoodClassification
  * HasAccessories `boolean`: Boolean
  * HasComboOptions `boolean`: Boolean
  * HasRequiredAccessories `boolean`: Boolean
  * Id `integer`: Int32
  * IsSpicy `boolean`: Boolean
  * IsTips `boolean`: Boolean
  * IsVegetarian `boolean`: Boolean
  * MenuCardId `integer`: Int32
  * Name `string`: String
  * Price [System.Decimal](#system.decimal)
  * RequireOtherProducts `boolean`: Boolean
  * RestaurantMenuNumber `integer`: Int32
  * RestaurantMenuNumberCode `string`: String
  * ShortName `string`: String
  * SoapName `string`: String
  * Status `integer`: Int32
  * Synonym `string`: String

### JustEat.Core.Model.ProductAccessory
* JustEat.Core.Model.ProductAccessory `object`
  * Cost [System.Decimal](#system.decimal)
  * Id `integer`: Int32
  * Name `string`: String
  * ProductId `integer`: Int32
  * Required `boolean`: Boolean
  * SelectionId `integer`: Int32

### JustEat.Core.Model.ProductCategory
* JustEat.Core.Model.ProductCategory `object`
  * BackgroundImageUrl `string`: String
  * Columns `integer`: Int32
  * Id `integer`: Int32
  * Name `string`: String
  * Notes `string`: String
  * Sort `integer`: Int32

### JustEat.Core.Model.RestaurantSearchResult
* JustEat.Core.Model.RestaurantSearchResult `object`
  * Address `string`: String
  * AverageRating `integer`: Int32
  * City `string`: String
  * CuisineTypes `array`: IEnumerable[JustEat.Core.Model.CuisineType]
    * items [JustEat.Core.Model.CuisineType](#justeat.core.model.cuisinetype)
  * Deals `array`: IEnumerable[JustEat.Core.Model.Deal]
    * items [JustEat.Core.Model.Deal](#justeat.core.model.deal)
  * DefaultDisplayRank `integer`: Int32
  * Id `integer`: Int32
  * IsCloseBy `boolean`: Boolean
  * IsHalal `boolean`: Boolean
  * IsNew `boolean`: Boolean
  * IsOpenNow `boolean`: Boolean
  * IsOpenNowForCollection `boolean`: Boolean
  * IsOpenNowForDelivery `boolean`: Boolean
  * IsSponsored `boolean`: Boolean
  * IsTemporarilyOffline `boolean`: Boolean
  * Logo `array`: IEnumerable[JustEat.Core.Model.Image]
    * items [JustEat.Core.Model.Image](#justeat.core.model.image)
  * Name `string`: String
  * NumberOfRatings `integer`: Int32
  * Postcode `string`: String
  * RatingForDisplay `number`: Double
  * RatingStars `number`: Double
  * ReasonWhyTemporarilyOffline `string`: String
  * ShowSmiley `boolean`: Boolean
  * SmileyDate `string`: DateTime
  * SmileyElite `string`: String
  * SmileyResult `integer`: Int32
  * SmileyUrl `string`: String
  * UniqueName `string`: String
  * Url `string`: String

### JustEat.Core.Model.TimeRange
* JustEat.Core.Model.TimeRange `object`
  * ClosingTime `string`: TimeSpan
  * OpeningTime `string`: TimeSpan
  * Status `string` (values: Normal, Is24Hour, IsClosed): OperatingStatus

### JustEat.Core.Model.VersionOnlineStatus
* JustEat.Core.Model.VersionOnlineStatus `object`
  * ForcedVersion `string`: String
  * OnlineStatus `integer`: Int32
  * PasswordValidation [JE.Api.Consumer.DTOs.PasswordValidation](#je.api.consumer.dtos.passwordvalidation)
  * RecommendedVersion `string`: String
  * UseResponsiveWeb `array`: IEnumerable[System.Object]
    * items [System.Object](#system.object)
  * UseWebsiteCheckout `boolean`: Boolean

### JustEat.Core.Model.ZipCodeAutocompleteSuggestion
* JustEat.Core.Model.ZipCodeAutocompleteSuggestion `object`
  * City `string`: String
  * ZipCode `string`: String

### JustEat.PublicApi.DTOs.Models.ConsumerAddress
* JustEat.PublicApi.DTOs.Models.ConsumerAddress `object`
  * City `string`: String
  * FirstLine `string`: String
  * Latitude [System.Decimal](#system.decimal)
  * Longitude [System.Decimal](#system.decimal)
  * Postcode `string`: String

### JustEat.PublicApi.DTOs.Models.ConsumerCuisineDetails
* JustEat.PublicApi.DTOs.Models.ConsumerCuisineDetails `object`
  * Name `string`: String
  * SeoName `string`: String
  * Total `integer`: Int32

### JustEat.PublicApi.DTOs.Models.ConsumerRatingDetails
* JustEat.PublicApi.DTOs.Models.ConsumerRatingDetails `object`
  * Count `integer`: Int32
  * StarRating `number`: Double

### JustEat.PublicApi.DTOs.Models.ConsumerRestaurant
* JustEat.PublicApi.DTOs.Models.ConsumerRestaurant `object`
  * Address [JustEat.PublicApi.DTOs.Models.ConsumerAddress](#justeat.publicapi.dtos.models.consumeraddress)
  * Badges `array`: IEnumerable[System.String]
    * items `string`
  * Cuisines `array`: IEnumerable[JustEat.PublicApi.DTOs.Models.ConsumerRestaurantCuisineDetails]
    * items [JustEat.PublicApi.DTOs.Models.ConsumerRestaurantCuisineDetails](#justeat.publicapi.dtos.models.consumerrestaurantcuisinedetails)
  * DefaultDisplayRank `integer`: Int32
  * DeliveryCost [System.Decimal](#system.decimal)
  * DeliveryStartTime `string`: DateTime
  * DriveDistance `number`: Double
  * DriveInfoCalculated `boolean`: Boolean
  * Id `integer`: Int32
  * IsCollection `boolean`: Boolean
  * IsDelivery `boolean`: Boolean
  * IsHalal `boolean`: Boolean
  * IsNew `boolean`: Boolean
  * IsOffline `boolean`: Boolean
  * IsSponsored `boolean`: Boolean
  * LogoUrl `string`: String
  * MinimumDeliveryValue [System.Decimal](#system.decimal)
  * Name `string`: String
  * NewnessDate `string`: DateTime
  * OfferPercent [System.Decimal](#system.decimal)
  * OpeningTime `string`: DateTime
  * RatingDetails [JustEat.PublicApi.DTOs.Models.ConsumerRatingDetails](#justeat.publicapi.dtos.models.consumerratingdetails)
  * SendsOnItsWayNotifications `boolean`: Boolean
  * SeoName `string`: String

### JustEat.PublicApi.DTOs.Models.ConsumerRestaurantCuisineDetails
* JustEat.PublicApi.DTOs.Models.ConsumerRestaurantCuisineDetails `object`
  * Name `string`: String
  * SeoName `string`: String

### JustEat.PublicApi.DTOs.Models.ConsumerSearchMetaData
* JustEat.PublicApi.DTOs.Models.ConsumerSearchMetaData `object`
  * Area `string`: String
  * CuisineDetails `array`: IEnumerable[JustEat.PublicApi.DTOs.Models.ConsumerCuisineDetails]
    * items [JustEat.PublicApi.DTOs.Models.ConsumerCuisineDetails](#justeat.publicapi.dtos.models.consumercuisinedetails)
  * ResultCount `integer`: Int32
  * SearchedTerms [JustEat.PublicApi.DTOs.Models.SearchedTerms](#justeat.publicapi.dtos.models.searchedterms)

### JustEat.PublicApi.DTOs.Models.SearchedTerms
* JustEat.PublicApi.DTOs.Models.SearchedTerms `object`
  * Phrase `string`: String
  * Postcode `string`: String

### JustEat.PublicApi.DTOs.Responses.ConsumerSearchResponseFreeText
* JustEat.PublicApi.DTOs.Responses.ConsumerSearchResponseFreeText `object`
  * ClosedRestaurants `array`: IEnumerable[JustEat.PublicApi.DTOs.Models.ConsumerRestaurant]
    * items [JustEat.PublicApi.DTOs.Models.ConsumerRestaurant](#justeat.publicapi.dtos.models.consumerrestaurant)
  * MetaData [JustEat.PublicApi.DTOs.Models.ConsumerSearchMetaData](#justeat.publicapi.dtos.models.consumersearchmetadata)
  * OpenRestaurants `array`: IEnumerable[JustEat.PublicApi.DTOs.Models.ConsumerRestaurant]
    * items [JustEat.PublicApi.DTOs.Models.ConsumerRestaurant](#justeat.publicapi.dtos.models.consumerrestaurant)

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors `object`
  * Content `string`: String
  * ExceptionName `string`: String
  * ResponseStatus `string` (values: None, Completed, Error, TimedOut, Aborted): ResponseStatus
  * StatusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): HttpStatusCode

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.AvailableMenusResult
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.AvailableMenusResult `object`
  * ErrorResponse [JE.Api.Response.ErrorResponse](#je.api.response.errorresponse)
  * Errors `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.apiclienterrors)
  * HasErrors `boolean`: Boolean
  * Menus `array`: IEnumerable[JE.Api.Menu.Dto.AvailableMenu]
    * items [JE.Api.Menu.Dto.AvailableMenu](#je.api.menu.dto.availablemenu)

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.HygieneRating
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.HygieneRating `object`
  * Rating `integer`: Int32
  * Scheme `string`: String

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime `object`
  * Closed `string`: String
  * Key `string`: String
  * Open `string`: String

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ProductCategoriesResult
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ProductCategoriesResult `object`
  * ErrorResponse [JE.Api.Response.ErrorResponse](#je.api.response.errorresponse)
  * Errors `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.apiclienterrors)
  * HasErrors `boolean`: Boolean
  * Menu [JE.Api.Menu.Dto.MenuCardComplete](#je.api.menu.dto.menucardcomplete)

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.RestaurantDetailResult
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.RestaurantDetailResult `object`
  * Description `string`: String
  * Errors `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.apiclienterrors)
  * HasErrors `boolean`: Boolean
  * Id `integer`: Int32
  * OpeningTimes `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.openingtime)

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ReviewResult
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ReviewResult `object`
  * CustomerCity `string`: String
  * CustomerComments `string`: String
  * CustomerName `string`: String
  * RateDate `string`: String
  * RatingAverage [System.Decimal](#system.decimal)
  * RatingAverageStars [System.Decimal](#system.decimal)
  * RestaurantComments `string`: String
  * RestaurantId `integer`: Int32
  * UserId `integer`: Int32

### JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ServiceableArea
* JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ServiceableArea `object`
  * City `string`: String
  * Postcode `string`: String

### JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentRequest
* JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentRequest `object`
  * AndroidPayToken `string`: String
  * PaymentServiceProvider `string`: String

### JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentResponse
* JustEat.PublicApi.Site.Handlers.AndroidPay.AndroidPayPaymentResponse `object`
  * PaymentOption [JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption](#je.api.payments.contracts.offeringpaymentoptions.paymentoption)
  * Reason [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.AuthorisationReasonTypes,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.authorisationreasontypes,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * ResponseStatus [ServiceStack.ServiceInterface.ServiceModel.ResponseStatus](#servicestack.serviceinterface.servicemodel.responsestatus)
  * Result [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.CheckoutResult,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.checkoutresult,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * TransactionLinesWritten `boolean`: Boolean
  * Voucher [JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail](#je.api.payments.contracts.offeringpaymentoptions.voucherdetail)

### JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentRequest
* JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentRequest `object`
  * ApplePayToken `string`: String
  * PaymentServiceProvider `string`: String

### JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentResponse
* JustEat.PublicApi.Site.Handlers.ApplePay.ApplePayPaymentResponse `object`
  * PaymentOption [JE.Api.Payments.Contracts.OfferingPaymentOptions.PaymentOption](#je.api.payments.contracts.offeringpaymentoptions.paymentoption)
  * Reason [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.AuthorisationReasonTypes,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.authorisationreasontypes,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * ResponseStatus [ServiceStack.ServiceInterface.ServiceModel.ResponseStatus](#servicestack.serviceinterface.servicemodel.responsestatus)
  * Result [JE.Api.Payments.Contracts.StatusCode%601%5B%5BJE.Api.Payments.Contracts.CheckingOut.CheckoutResult,%20JE.Api.Payments.Contracts,%20Version=6.16.0.0,%20Culture=neutral,%20PublicKeyToken=null%5D%5D](#je.api.payments.contracts.statuscode%601%5b%5bje.api.payments.contracts.checkingout.checkoutresult,%20je.api.payments.contracts,%20version=6.16.0.0,%20culture=neutral,%20publickeytoken=null%5d%5d)
  * TransactionLinesWritten `boolean`: Boolean
  * Voucher [JE.Api.Payments.Contracts.OfferingPaymentOptions.VoucherDetail](#je.api.payments.contracts.offeringpaymentoptions.voucherdetail)

### JustEat.PublicApi.Site.Handlers.Basket.GetFulfilmentTimeSlotsResult
* JustEat.PublicApi.Site.Handlers.Basket.GetFulfilmentTimeSlotsResult `object`
  * DeliveryTimeInfo `string` (values: NoIssues, ExtendedDeliveryTime, LongWorkingTime): DeliveryTimeInfoType
  * FirstIsAsap `boolean`: Boolean
  * Times `array`: IEnumerable[System.DateTime]
    * items `string`
  * WorkingTimeMins `integer`: Int32

### JustEat.PublicApi.Site.Handlers.Basket.OrderContactAddress
* JustEat.PublicApi.Site.Handlers.Basket.OrderContactAddress `object`
  * City `string`: String
  * Line1 `string`: String
  * Line2 `string`: String
  * Line3 `string`: String
  * PostCode `string`: String

### JustEat.PublicApi.Site.Handlers.Basket.OrderContactDetailsRequest
* JustEat.PublicApi.Site.Handlers.Basket.OrderContactDetailsRequest `object`
  * Address [JustEat.PublicApi.Site.Handlers.Basket.OrderContactAddress](#justeat.publicapi.site.handlers.basket.ordercontactaddress)
  * Email `string`: String
  * Name `string`: String
  * PhoneNumber `string`: String

### JustEat.PublicApi.Site.Handlers.Basket.SetOrderContactDetailsResult
* JustEat.PublicApi.Site.Handlers.Basket.SetOrderContactDetailsResult `object`
  * IsOrderable `boolean`: Boolean
  * UserPrompts `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.Basket.UserPrompt]
    * items [JustEat.PublicApi.Site.Handlers.Basket.UserPrompt](#justeat.publicapi.site.handlers.basket.userprompt)

### JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesRequest
* JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesRequest `object`
  * Notes `string`: String

### JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesResult
* JustEat.PublicApi.Site.Handlers.Basket.SetOrderNotesResult `object`
  * IsOrderable `boolean`: Boolean
  * UserPrompts [JE.Api.Basket.DTOs.UserPrompt](#je.api.basket.dtos.userprompt)

### JustEat.PublicApi.Site.Handlers.Basket.SetRequestedFulfilmentTimeResult
* JustEat.PublicApi.Site.Handlers.Basket.SetRequestedFulfilmentTimeResult `object`
  * IsOrderable `boolean`: Boolean
  * UserPrompts `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.Basket.UserPrompt]
    * items [JustEat.PublicApi.Site.Handlers.Basket.UserPrompt](#justeat.publicapi.site.handlers.basket.userprompt)

### JustEat.PublicApi.Site.Handlers.Basket.UserPrompt
* JustEat.PublicApi.Site.Handlers.Basket.UserPrompt `object`
  * DefaultMessage `string`: String
  * MessageValues `array`: IEnumerable[JE.Api.Basket.DTOs.MessageKeyValue]
    * items [JE.Api.Basket.DTOs.MessageKeyValue](#je.api.basket.dtos.messagekeyvalue)
  * StatusCode `string`: String

### JustEat.PublicApi.Site.Handlers.ConsumerOperations.ChangePasswordLoginResponse
* JustEat.PublicApi.Site.Handlers.ConsumerOperations.ChangePasswordLoginResponse `object`
  * Token **required** `string`: String

### JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerDeviceTokenResponse


### JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerLoginResponse
* JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerLoginResponse `object`
  * Token **required** `string`: String

### JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerUpdateRequest
* JustEat.PublicApi.Site.Handlers.ConsumerOperations.ConsumerUpdateRequest `object`
  * TermsAndConditionsId `integer`: Int32
  * WantsNewsletter `boolean`: Boolean

### JustEat.PublicApi.Site.Handlers.ConsumerOperations.DeviceTokenRequest
* JustEat.PublicApi.Site.Handlers.ConsumerOperations.DeviceTokenRequest `object`
  * DeviceToken `string`: String

### JustEat.PublicApi.Site.Handlers.ConsumerOperations.UpdateUserRequest
* JustEat.PublicApi.Site.Handlers.ConsumerOperations.UpdateUserRequest `object`
  * User **required** [JustEat.PublicApi.Site.Handlers.DTOs.User](#justeat.publicapi.site.handlers.dtos.user)

### JustEat.PublicApi.Site.Handlers.CreateOrderRequest
* JustEat.PublicApi.Site.Handlers.CreateOrderRequest `object`
  * ApplicationId `integer`: Int32
  * ApplicationVersion **required** `string`: String
  * BasketId **required** `string`: String
  * DeviceId **required** `string`: String
  * DeviceName **required** `string`: String
  * DeviceToken `string`: String
  * DeviceType **required** `string`: String
  * OrderNotes `string`: String
  * TermsAndConditionsId **required** `integer`: Int32

### JustEat.PublicApi.Site.Handlers.DTOs.AddProductRequest
* JustEat.PublicApi.Site.Handlers.DTOs.AddProductRequest `object`
  * MealParts `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart](#justeat.publicapi.site.handlers.dtos.updatemealpart)
  * OptionalAccessories `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory](#justeat.publicapi.site.handlers.dtos.updateoptionalaccessory)
  * ProductId `integer`: Int32
  * RequiredAccessories `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory](#justeat.publicapi.site.handlers.dtos.updaterequiredaccessory)
  * User [JustEat.PublicApi.Site.Handlers.DTOs.User](#justeat.publicapi.site.handlers.dtos.user)

### JustEat.PublicApi.Site.Handlers.DTOs.BadgesResponse


### JustEat.PublicApi.Site.Handlers.DTOs.BasketCreateResponse


### JustEat.PublicApi.Site.Handlers.DTOs.BasketDetailsResponse


### JustEat.PublicApi.Site.Handlers.DTOs.BasketUserUpdateResponse


### JustEat.PublicApi.Site.Handlers.DTOs.CampaignContentResponse


### JustEat.PublicApi.Site.Handlers.DTOs.CountryResponse


### JustEat.PublicApi.Site.Handlers.DTOs.CreateBasketRequest
* JustEat.PublicApi.Site.Handlers.DTOs.CreateBasketRequest `object`
  * MenuId **required** `integer`: Int32
  * Postcode `string`: String

### JustEat.PublicApi.Site.Handlers.DTOs.DeliveryAreasResponse


### JustEat.PublicApi.Site.Handlers.DTOs.ForTestsResponse


### JustEat.PublicApi.Site.Handlers.DTOs.HealthCheckResponse


### JustEat.PublicApi.Site.Handlers.DTOs.HealthResponse


### JustEat.PublicApi.Site.Handlers.DTOs.MealPartsResponse


### JustEat.PublicApi.Site.Handlers.DTOs.OptionalAccessoriesResponse


### JustEat.PublicApi.Site.Handlers.DTOs.OrderItemInsertResponse


### JustEat.PublicApi.Site.Handlers.DTOs.OrderItemRemoveResponse


### JustEat.PublicApi.Site.Handlers.DTOs.PostRatingsRequest
* JustEat.PublicApi.Site.Handlers.DTOs.PostRatingsRequest `object`
  * CustomerComments `string`: String
  * Delivery `integer`: Int32
  * OrderId `string`: String
  * Quality `integer`: Int32
  * Service `integer`: Int32

### JustEat.PublicApi.Site.Handlers.DTOs.PostReviewResponse
* JustEat.PublicApi.Site.Handlers.DTOs.PostReviewResponse `object`
  * CustomerComments `string`: String
  * Delivery `integer`: Int32
  * Quality `integer`: Int32
  * Service `integer`: Int32

### JustEat.PublicApi.Site.Handlers.DTOs.RequiredAccessoriesResponse


### JustEat.PublicApi.Site.Handlers.DTOs.RestaurantSearchSeoResult
* JustEat.PublicApi.Site.Handlers.DTOs.RestaurantSearchSeoResult `object`
  * Errors `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ApiClientErrors](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.apiclienterrors)
  * HasErrors `boolean`: Boolean
  * Restaurants `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.SearchSeoRestaurant]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.SearchSeoRestaurant](#justeat.publicapi.site.handlers.dtos.searchseorestaurant)

### JustEat.PublicApi.Site.Handlers.DTOs.SearchSeoRestaurant
* JustEat.PublicApi.Site.Handlers.DTOs.SearchSeoRestaurant `object`
  * Address `string`: String
  * City `string`: String
  * CuisineTypes `array`: IEnumerable[JustEat.Core.Model.CuisineType]
    * items [JustEat.Core.Model.CuisineType](#justeat.core.model.cuisinetype)
  * Deals `array`: IEnumerable[JustEat.Core.Model.Deal]
    * items [JustEat.Core.Model.Deal](#justeat.core.model.deal)
  * Description `string`: String
  * HygieneRating [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.HygieneRating](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.hygienerating)
  * Id `integer`: Int32
  * IsHalal `boolean`: Boolean
  * IsNew `boolean`: Boolean
  * IsOpenNow `boolean`: Boolean
  * IsOpenNowForCollection `boolean`: Boolean
  * IsOpenNowForDelivery `boolean`: Boolean
  * IsSponsored `boolean`: Boolean
  * IsTemporarilyOffline `boolean`: Boolean
  * Latitude [System.Decimal](#system.decimal)
  * Logo `array`: IEnumerable[JustEat.Core.Model.Image]
    * items [JustEat.Core.Model.Image](#justeat.core.model.image)
  * Longitude [System.Decimal](#system.decimal)
  * Name `string`: String
  * NewnessDate `string`: String
  * NumberOfRatings `integer`: Int32
  * OpeningTime `string`: DateTime
  * OpeningTimeIso `string`: DateTime
  * OpeningTimes `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.OpeningTime](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.openingtime)
  * Postcode `string`: String
  * RatingAverage [System.Decimal](#system.decimal)
  * RatingStars `number`: Double
  * ServiceableAreas `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ServiceableArea]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ServiceableArea](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.serviceablearea)
  * UniqueName `string`: String

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart `object`
  * GroupId **required** `integer`: Int32
  * Id **required** `integer`: Int32
  * OptionalAccessories `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory](#justeat.publicapi.site.handlers.dtos.updateoptionalaccessory)
  * RequiredAccessories `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory](#justeat.publicapi.site.handlers.dtos.updaterequiredaccessory)

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPartsRequest
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPartsRequest `object`
  * MealParts **required** `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateMealPart](#justeat.publicapi.site.handlers.dtos.updatemealpart)

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessoriesRequest
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessoriesRequest `object`
  * OptionalAccessories **required** `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory](#justeat.publicapi.site.handlers.dtos.updateoptionalaccessory)

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateOptionalAccessory `object`
  * Id **required** `integer`: Int32
  * Quantity **required** `integer`: Int32

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessoriesRequest
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessoriesRequest `object`
  * RequiredAccessories **required** `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory]
    * items [JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory](#justeat.publicapi.site.handlers.dtos.updaterequiredaccessory)

### JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory
* JustEat.PublicApi.Site.Handlers.DTOs.UpdateRequiredAccessory `object`
  * GroupId **required** `integer`: Int32
  * Id **required** `integer`: Int32

### JustEat.PublicApi.Site.Handlers.DTOs.User
* JustEat.PublicApi.Site.Handlers.DTOs.User `object`
  * DisplayName **required** `string`: String

### JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeAutoCompleteResponse
* JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeAutoCompleteResponse `object`
  * ZipCodeAutoCompleteSuggestions `array`: IEnumerable[JustEat.Core.Model.ZipCodeAutocompleteSuggestion]
    * items [JustEat.Core.Model.ZipCodeAutocompleteSuggestion](#justeat.core.model.zipcodeautocompletesuggestion)

### JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeRequest
* JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeRequest `object`
  * ZipCode **required** `string`: String

### JustEat.PublicApi.Site.Handlers.DTOs.ZipCodeResponse


### JustEat.PublicApi.Site.Handlers.OrderCreatedResponse
* JustEat.PublicApi.Site.Handlers.OrderCreatedResponse `object`
  * ConsumerAuthToken `string`: String
  * LegacyOrderId `integer`: Int64
  * OrderId `string`: String
  * SuccessState **required** `string`: String

### JustEat.PublicApi.Site.Handlers.Payments.BasketPaymentOptionsResult
* JustEat.PublicApi.Site.Handlers.Payments.BasketPaymentOptionsResult `object`
  * BasketTotal [System.Decimal](#system.decimal)
  * FeeText `string`: String
  * PaymentOptions `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.Payments.PaymentOption]
    * items [JustEat.PublicApi.Site.Handlers.Payments.PaymentOption](#justeat.publicapi.site.handlers.payments.paymentoption)
  * VoucherCode `string`: String

### JustEat.PublicApi.Site.Handlers.Payments.CashCheckoutPaymentRequest
* JustEat.PublicApi.Site.Handlers.Payments.CashCheckoutPaymentRequest `object`
  * Platform `string`: String

### JustEat.PublicApi.Site.Handlers.Payments.GetOrderPaymentStatusResult
* JustEat.PublicApi.Site.Handlers.Payments.GetOrderPaymentStatusResult `object`
  * Message `string`: String
  * OrderId `string`: String
  * ReasonCode `integer`: Int32
  * ReasonMessage `string`: String
  * Status `integer`: Int32

### JustEat.PublicApi.Site.Handlers.Payments.OrderPaymentOptionsResult
* JustEat.PublicApi.Site.Handlers.Payments.OrderPaymentOptionsResult `object`
  * BasketTotal [System.Decimal](#system.decimal)
  * FeeText `string`: String
  * PaymentOptions `array`: IEnumerable[JustEat.PublicApi.Site.Handlers.Payments.PaymentOption]
    * items [JustEat.PublicApi.Site.Handlers.Payments.PaymentOption](#justeat.publicapi.site.handlers.payments.paymentoption)
  * VoucherCode `string`: String

### JustEat.PublicApi.Site.Handlers.Payments.PaymentOption
* JustEat.PublicApi.Site.Handlers.Payments.PaymentOption `object`
  * CardExpiry `string`: DateTime
  * Fee [System.Decimal](#system.decimal)
  * Id `string`: String
  * MaskedCardNumber `string`: String
  * PaymentOptionType `string`: String
  * PaymentServiceProvider `string`: String
  * PaymentType `string`: String
  * Total [System.Decimal](#system.decimal)

### JustEat.PublicApi.Site.Handlers.Payments.SavedCardCheckoutPaymentRequest
* JustEat.PublicApi.Site.Handlers.Payments.SavedCardCheckoutPaymentRequest `object`
  * ApplyPartialAccountCredit `boolean`: Boolean
  * Cvv `string`: String
  * PaymentOptionId **required** `string`: String
  * Platform `string`: String
  * VoucherCode `string`: String

### JustEat.PublicApi.Site.Handlers.Payments.SavedCardCheckoutPaymentResponse


### JustEat.PublicApi.Site.Handlers.RestaurantReview.RestaurantReviewResponse
* JustEat.PublicApi.Site.Handlers.RestaurantReview.RestaurantReviewResponse `object`
  * PageNumber `integer`: Int32
  * PageSize `integer`: Int32
  * RestaurantId `integer`: Int32
  * Reviews `array`: IEnumerable[JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ReviewResult]
    * items [JustEat.PublicApi.DataAccess.InternalApiClients.ClientModels.ReviewResult](#justeat.publicapi.dataaccess.internalapiclients.clientmodels.reviewresult)

### JustEat.PublicApi.Site.ResponseData.MealOptionResult
* JustEat.PublicApi.Site.ResponseData.MealOptionResult `object`
  * DisplayRank `integer`: Int32
  * DisplayText `string`: String
  * HasAccessory `boolean`: Boolean
  * ProductChoice `array`: IEnumerable[JustEat.Core.Model.Product]
    * items [JustEat.Core.Model.Product](#justeat.core.model.product)

### JustEat.PublicApi.Site.ResponseData.MenuResult
* JustEat.PublicApi.Site.ResponseData.MenuResult `object`
  * Menus `array`: IEnumerable[JustEat.Core.Model.Menu]
    * items [JustEat.Core.Model.Menu](#justeat.core.model.menu)

### JustEat.PublicApi.Site.ResponseData.ProductCategoryResult
* JustEat.PublicApi.Site.ResponseData.ProductCategoryResult `object`
  * Categories `array`: IEnumerable[JustEat.Core.Model.ProductCategory]
    * items [JustEat.Core.Model.ProductCategory](#justeat.core.model.productcategory)

### JustEat.PublicApi.Site.ResponseData.ProductResult
* JustEat.PublicApi.Site.ResponseData.ProductResult `object`
  * Accessories `array`: IEnumerable[JustEat.Core.Model.ProductAccessory]
    * items [JustEat.Core.Model.ProductAccessory](#justeat.core.model.productaccessory)
  * ComboOptions `array`: IEnumerable[JustEat.PublicApi.Site.ResponseData.MealOptionResult]
    * items [JustEat.PublicApi.Site.ResponseData.MealOptionResult](#justeat.publicapi.site.responsedata.mealoptionresult)
  * ContainsNuts `boolean`: Boolean
  * Description `string`: String
  * HasAccessories `boolean`: Boolean
  * HasComboOptions `boolean`: Boolean
  * HasRequiredAccessories `boolean`: Boolean
  * Id `integer`: Int32
  * IsSpicy `boolean`: Boolean
  * IsTips `boolean`: Boolean
  * IsVegetarian `boolean`: Boolean
  * Name `string`: String
  * Price [System.Decimal](#system.decimal)
  * RequireOtherProducts `boolean`: Boolean
  * RestaurantMenuNumber `integer`: Int32
  * RestaurantMenuNumberCode `string`: String
  * Synonym `string`: String

### JustEat.PublicApi.Site.ResponseData.ProductResults
* JustEat.PublicApi.Site.ResponseData.ProductResults `object`
  * Products `array`: IEnumerable[JustEat.PublicApi.Site.ResponseData.ProductResult]
    * items [JustEat.PublicApi.Site.ResponseData.ProductResult](#justeat.publicapi.site.responsedata.productresult)

### ServiceStack.ServiceInterface.ServiceModel.ResponseError
* ServiceStack.ServiceInterface.ServiceModel.ResponseError `object`
  * ErrorCode `string`: String
  * FieldName `string`: String
  * Message `string`: String

### ServiceStack.ServiceInterface.ServiceModel.ResponseStatus
* ServiceStack.ServiceInterface.ServiceModel.ResponseStatus `object`
  * ErrorCode `string`: String
  * Errors `array`: IEnumerable[ServiceStack.ServiceInterface.ServiceModel.ResponseError]
    * items [ServiceStack.ServiceInterface.ServiceModel.ResponseError](#servicestack.serviceinterface.servicemodel.responseerror)
  * Message `string`: String
  * StackTrace `string`: String

### System.Collections.Generic.KeyValuePair_x0060_2_x005B__x005B_System.String_x002C__x0020_mscorlib_x002C__x0020_Version_x003D_4.0.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_b77a5c561934e089_x005D__x002C__x005B_System.String_x002C__x0020_mscorlib_x002C__x0020_Version_x003D_4.0.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_b77a5c561934e089_x005D__x005D_
* System.Collections.Generic.KeyValuePair_x0060_2_x005B__x005B_System.String_x002C__x0020_mscorlib_x002C__x0020_Version_x003D_4.0.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_b77a5c561934e089_x005D__x002C__x005B_System.String_x002C__x0020_mscorlib_x002C__x0020_Version_x003D_4.0.0.0_x002C__x0020_Culture_x003D_neutral_x002C__x0020_PublicKeyToken_x003D_b77a5c561934e089_x005D__x005D_ `object`
  * Key `string`: String
  * Value `string`: String

### System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]


### System.Decimal


### System.Globalization.Calendar
* System.Globalization.Calendar `object`
  * AlgorithmType `string` (values: Unknown, SolarCalendar, LunarCalendar, LunisolarCalendar): CalendarAlgorithmType
  * Eras `array`: IEnumerable[System.Int32]
    * items `integer`
  * IsReadOnly `boolean`: Boolean
  * MaxSupportedDateTime `string`: DateTime
  * MinSupportedDateTime `string`: DateTime
  * TwoDigitYearMax `integer`: Int32

### System.Globalization.CompareInfo
* System.Globalization.CompareInfo `object`
  * LCID `integer`: Int32
  * Name `string`: String
  * Version [System.Globalization.SortVersion](#system.globalization.sortversion)

### System.Globalization.CultureInfo
* System.Globalization.CultureInfo `object`
  * Calendar [System.Globalization.Calendar](#system.globalization.calendar)
  * CompareInfo [System.Globalization.CompareInfo](#system.globalization.compareinfo)
  * CultureTypes `string` (values: NeutralCultures, SpecificCultures, InstalledWin32Cultures, AllCultures, UserCustomCulture, ReplacementCultures, WindowsOnlyCultures, FrameworkCultures): CultureTypes
  * CurrentCulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * CurrentUICulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * DateTimeFormat [System.Globalization.DateTimeFormatInfo](#system.globalization.datetimeformatinfo)
  * DefaultThreadCurrentCulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * DefaultThreadCurrentUICulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * DisplayName `string`: String
  * EnglishName `string`: String
  * IetfLanguageTag `string`: String
  * InstalledUICulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * InvariantCulture [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * IsNeutralCulture `boolean`: Boolean
  * IsReadOnly `boolean`: Boolean
  * KeyboardLayoutId `integer`: Int32
  * LCID `integer`: Int32
  * Name `string`: String
  * NativeName `string`: String
  * NumberFormat [System.Globalization.NumberFormatInfo](#system.globalization.numberformatinfo)
  * OptionalCalendars `array`: IEnumerable[System.Globalization.Calendar]
    * items [System.Globalization.Calendar](#system.globalization.calendar)
  * Parent [System.Globalization.CultureInfo](#system.globalization.cultureinfo)
  * TextInfo [System.Globalization.TextInfo](#system.globalization.textinfo)
  * ThreeLetterISOLanguageName `string`: String
  * ThreeLetterWindowsLanguageName `string`: String
  * TwoLetterISOLanguageName `string`: String
  * UseUserOverride `boolean`: Boolean

### System.Globalization.DateTimeFormatInfo
* System.Globalization.DateTimeFormatInfo `object`
  * AMDesignator `string`: String
  * AbbreviatedDayNames `array`: IEnumerable[System.String]
    * items `string`
  * AbbreviatedMonthGenitiveNames `array`: IEnumerable[System.String]
    * items `string`
  * AbbreviatedMonthNames `array`: IEnumerable[System.String]
    * items `string`
  * Calendar [System.Globalization.Calendar](#system.globalization.calendar)
  * CalendarWeekRule `string` (values: FirstDay, FirstFullWeek, FirstFourDayWeek): CalendarWeekRule
  * CurrentInfo [System.Globalization.DateTimeFormatInfo](#system.globalization.datetimeformatinfo)
  * DateSeparator `string`: String
  * DayNames `array`: IEnumerable[System.String]
    * items `string`
  * FirstDayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): DayOfWeek
  * FullDateTimePattern `string`: String
  * InvariantInfo [System.Globalization.DateTimeFormatInfo](#system.globalization.datetimeformatinfo)
  * IsReadOnly `boolean`: Boolean
  * LongDatePattern `string`: String
  * LongTimePattern `string`: String
  * MonthDayPattern `string`: String
  * MonthGenitiveNames `array`: IEnumerable[System.String]
    * items `string`
  * MonthNames `array`: IEnumerable[System.String]
    * items `string`
  * NativeCalendarName `string`: String
  * PMDesignator `string`: String
  * RFC1123Pattern `string`: String
  * ShortDatePattern `string`: String
  * ShortTimePattern `string`: String
  * ShortestDayNames `array`: IEnumerable[System.String]
    * items `string`
  * SortableDateTimePattern `string`: String
  * TimeSeparator `string`: String
  * UniversalSortableDateTimePattern `string`: String
  * YearMonthPattern `string`: String

### System.Globalization.NumberFormatInfo
* System.Globalization.NumberFormatInfo `object`
  * CurrencyDecimalDigits `integer`: Int32
  * CurrencyDecimalSeparator `string`: String
  * CurrencyGroupSeparator `string`: String
  * CurrencyGroupSizes `array`: IEnumerable[System.Int32]
    * items `integer`
  * CurrencyNegativePattern `integer`: Int32
  * CurrencyPositivePattern `integer`: Int32
  * CurrencySymbol `string`: String
  * CurrentInfo [System.Globalization.NumberFormatInfo](#system.globalization.numberformatinfo)
  * DigitSubstitution `string` (values: Context, None, NativeNational): DigitShapes
  * InvariantInfo [System.Globalization.NumberFormatInfo](#system.globalization.numberformatinfo)
  * IsReadOnly `boolean`: Boolean
  * NaNSymbol `string`: String
  * NativeDigits `array`: IEnumerable[System.String]
    * items `string`
  * NegativeInfinitySymbol `string`: String
  * NegativeSign `string`: String
  * NumberDecimalDigits `integer`: Int32
  * NumberDecimalSeparator `string`: String
  * NumberGroupSeparator `string`: String
  * NumberGroupSizes `array`: IEnumerable[System.Int32]
    * items `integer`
  * NumberNegativePattern `integer`: Int32
  * PerMilleSymbol `string`: String
  * PercentDecimalDigits `integer`: Int32
  * PercentDecimalSeparator `string`: String
  * PercentGroupSeparator `string`: String
  * PercentGroupSizes `array`: IEnumerable[System.Int32]
    * items `integer`
  * PercentNegativePattern `integer`: Int32
  * PercentPositivePattern `integer`: Int32
  * PercentSymbol `string`: String
  * PositiveInfinitySymbol `string`: String
  * PositiveSign `string`: String

### System.Globalization.SortVersion
* System.Globalization.SortVersion `object`
  * FullVersion `integer`: Int32
  * SortId [System.Guid](#system.guid)

### System.Globalization.TextInfo
* System.Globalization.TextInfo `object`
  * ANSICodePage `integer`: Int32
  * CultureName `string`: String
  * EBCDICCodePage `integer`: Int32
  * IsReadOnly `boolean`: Boolean
  * IsRightToLeft `boolean`: Boolean
  * LCID `integer`: Int32
  * ListSeparator `string`: String
  * MacCodePage `integer`: Int32
  * OEMCodePage `integer`: Int32

### System.Guid


### System.Object



