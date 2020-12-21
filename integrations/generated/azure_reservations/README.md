# @datafire/azure_reservations

Client library for Azure Reservation

## Installation and Usage
```bash
npm install --save @datafire/azure_reservations
```
```js
let azure_reservations = require('@datafire/azure_reservations').create({
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

This API describe Azure Reservation

## Actions

### ReservationOrder_Calculate
Calculate price for placing a `ReservationOrder`.


```js
azure_reservations.ReservationOrder_Calculate({
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * body **required** [PurchaseRequest](#purchaserequest)

#### Output
* output [CalculatePriceResponse](#calculatepriceresponse)

### Operation_List
List all the operations.


```js
azure_reservations.Operation_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version for this document is 2019-04-01

#### Output
* output [OperationList](#operationlist)

### ReservationOrder_List
List of all the `ReservationOrder`s that the user has access to in the current tenant.


```js
azure_reservations.ReservationOrder_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version for this document is 2019-04-01

#### Output
* output [ReservationOrderList](#reservationorderlist)

### ReservationOrder_Get
Get the details of the `ReservationOrder`.


```js
azure_reservations.ReservationOrder_Get({
  "reservationOrderId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * $expand `string`: May be used to expand the planInformation.

#### Output
* output [ReservationOrderResponse](#reservationorderresponse)

### ReservationOrder_Purchase
Purchase `ReservationOrder` and create resource under the specified URI.


```js
azure_reservations.ReservationOrder_Purchase({
  "reservationOrderId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * body **required** [PurchaseRequest](#purchaserequest)

#### Output
* output [ReservationOrderResponse](#reservationorderresponse)

### Reservation_Merge
Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged must have same properties.


```js
azure_reservations.Reservation_Merge({
  "reservationOrderId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * body **required** [MergeRequest](#mergerequest)

#### Output
* output `array`
  * items [ReservationResponse](#reservationresponse)

### Reservation_List
List `Reservation`s within a single `ReservationOrder`.


```js
azure_reservations.Reservation_List({
  "reservationOrderId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01

#### Output
* output [ReservationList](#reservationlist)

### Reservation_Get
Get specific `Reservation` details.


```js
azure_reservations.Reservation_Get({
  "reservationId": "",
  "reservationOrderId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationId **required** `string`: Id of the Reservation Item
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * expand `string`: Supported value of this query is renewProperties

#### Output
* output [ReservationResponse](#reservationresponse)

### Reservation_Update
Updates the applied scopes of the `Reservation`.


```js
azure_reservations.Reservation_Update({
  "reservationOrderId": "",
  "reservationId": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * reservationId **required** `string`: Id of the Reservation Item
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * parameters **required** [Patch](#patch)

#### Output
* output [ReservationResponse](#reservationresponse)

### Reservation_AvailableScopes
Get Available Scopes for `Reservation`.



```js
azure_reservations.Reservation_AvailableScopes({
  "reservationOrderId": "",
  "reservationId": "",
  "api-version": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * reservationId **required** `string`: Id of the Reservation Item
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * body **required** `array`
    * items `string`

#### Output
* output [Properties](#properties)

### Reservation_ListRevisions
List of all the revisions for the `Reservation`.


```js
azure_reservations.Reservation_ListRevisions({
  "reservationId": "",
  "reservationOrderId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationId **required** `string`: Id of the Reservation Item
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01

#### Output
* output [ReservationList](#reservationlist)

### Reservation_Split
Split a `Reservation` into two `Reservation`s with specified quantity distribution.


```js
azure_reservations.Reservation_Split({
  "reservationOrderId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * body **required** [SplitRequest](#splitrequest)

#### Output
* output `array`
  * items [ReservationResponse](#reservationresponse)

### GetAppliedReservationList
Get applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.


```js
azure_reservations.GetAppliedReservationList({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * subscriptionId **required** `string`: Id of the subscription

#### Output
* output [AppliedReservations](#appliedreservations)

### GetCatalog
Get the regions and skus that are available for RI purchase for the specified Azure subscription.


```js
azure_reservations.GetCatalog({
  "api-version": "",
  "subscriptionId": "",
  "reservedResourceType": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version for this document is 2019-04-01
  * subscriptionId **required** `string`: Id of the subscription
  * reservedResourceType **required** `string`: The type of the resource for which the skus should be provided.
  * location `string`: Filters the skus based on the location specified in this parameter. This can be an azure region or global

#### Output
* output `array`
  * items [Catalog](#catalog)



## Definitions

### AppliedReservationList
* AppliedReservationList `object`
  * nextLink `string`: Url to get the next page of reservations
  * value `array`
    * items `string`: Reservation resource Id. "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}"

### AppliedReservations
* AppliedReservations `object`
  * id `string`: Identifier of the applied reservations
  * name `string`: Name of resource
  * properties [AppliedReservationsProperties](#appliedreservationsproperties)
  * type `string`: Type of resource. "Microsoft.Capacity/AppliedReservations"

### AppliedReservationsProperties
* AppliedReservationsProperties `object`
  * reservationOrderIds [AppliedReservationList](#appliedreservationlist)

### AppliedScopeType
* AppliedScopeType `string` (values: Single, Shared): Type of the Applied Scope.

### AppliedScopes
* AppliedScopes `array`: List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
  * items `string`

### BillingScopeId
* BillingScopeId `string`: Subscription that will be charged for purchasing Reservation

### CalculatePriceResponse
* CalculatePriceResponse `object`
  * properties [CalculatePriceResponseProperties](#calculatepriceresponseproperties)

### CalculatePriceResponseProperties
* CalculatePriceResponseProperties `object`
  * billingCurrencyTotal `object`: Currency and amount that customer will be charged in customer's local currency. Tax is not included.
    * amount `number`
    * currencyCode `string`
  * isBillingPartnerManaged `boolean`: True if billing is managed by Microsoft Partner. Used only for CSP accounts.
  * paymentSchedule `array`
    * items [PaymentDetail](#paymentdetail)
  * pricingCurrencyTotal `object`: Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included.
    * amount `number`
    * currencyCode `string`
  * reservationOrderId `string`: GUID that represents reservation order that can be placed after calculating price.
  * skuDescription `string`: Description of SKU that is being purchased.
  * skuTitle `string`: Title of SKU that is being purchased.

### Catalog
* Catalog `object`
  * billingPlans `object`: The billing plan options available for this SKU.
  * locations `array`
    * items `string`: The set of locations that the SKU is available. If not specified, the SKU is available in all locations.
  * name `string`: The name of SKU
  * resourceType `string`: The type of resource the SKU applies to.
  * restrictions `array`
    * items [SkuRestriction](#skurestriction)
  * skuProperties `array`
    * items [SkuProperty](#skuproperty)
  * terms `array`: Available reservation terms for this resource
    * items [ReservationTerm](#reservationterm)

### Error
* Error `object`
  * error [ExtendedErrorInfo](#extendederrorinfo)

### ErrorResponseCode
* ErrorResponseCode `string` (values: NotSpecified, InternalServerError, ServerTimeout, AuthorizationFailed, BadRequest, ClientCertificateThumbprintNotSet, InvalidRequestContent, OperationFailed, HttpMethodNotSupported, InvalidRequestUri, MissingTenantId, InvalidTenantId, InvalidReservationOrderId, InvalidReservationId, ReservationIdNotInReservationOrder, ReservationOrderNotFound, InvalidSubscriptionId, InvalidAccessToken, InvalidLocationId, UnauthenticatedRequestsThrottled, InvalidHealthCheckType, Forbidden, BillingScopeIdCannotBeChanged, AppliedScopesNotAssociatedWithCommerceAccount, PatchValuesSameAsExisting, RoleAssignmentCreationFailed, ReservationOrderCreationFailed, ReservationOrderNotEnabled, CapacityUpdateScopesFailed, UnsupportedReservationTerm, ReservationOrderIdAlreadyExists, RiskCheckFailed, CreateQuoteFailed, ActivateQuoteFailed, NonsupportedAccountId, PaymentInstrumentNotFound, MissingAppliedScopesForSingle, NoValidReservationsToReRate, ReRateOnlyAllowedForEA, OperationCannotBePerformedInCurrentState, InvalidSingleAppliedScopesCount, InvalidFulfillmentRequestParameters, NotSupportedCountry, InvalidRefundQuantity, PurchaseError, BillingCustomerInputError, BillingPaymentInstrumentSoftError, BillingPaymentInstrumentHardError, BillingTransientError, BillingError, FulfillmentConfigurationError, FulfillmentOutOfStockError, FulfillmentTransientError, FulfillmentError, CalculatePriceFailed)

### ExtendedErrorInfo
* ExtendedErrorInfo `object`
  * code [ErrorResponseCode](#errorresponsecode)
  * message `string`

### ExtendedStatusInfo
* ExtendedStatusInfo `object`
  * message `string`: The message giving detailed information about the status code.
  * statusCode [ReservationStatusCode](#reservationstatuscode)

### InstanceFlexibility
* InstanceFlexibility `string` (values: On, Off): Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type.

### MergeProperties
* MergeProperties `object`
  * sources `array`: Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
    * items `string`

### MergeRequest
* MergeRequest `object`
  * properties [MergeProperties](#mergeproperties)

### OperationDisplay
* OperationDisplay `object`
  * description `string`
  * operation `string`
  * provider `string`
  * resource `string`

### OperationList
* OperationList `object`
  * nextLink `string`: Url to get the next page of items.
  * value `array`
    * items [OperationResponse](#operationresponse)

### OperationResponse
* OperationResponse `object`
  * display [OperationDisplay](#operationdisplay)
  * name `string`
  * origin `string`

### Patch
* Patch `object`
  * properties [PatchProperties](#patchproperties)

### PatchProperties
* PatchProperties `object`
  * appliedScopeType [AppliedScopeType](#appliedscopetype)
  * appliedScopes [AppliedScopes](#appliedscopes)
  * instanceFlexibility [InstanceFlexibility](#instanceflexibility)
  * name `string`: Name of the Reservation
  * renew [Renew](#renew)
  * renewProperties `object`
    * purchaseProperties [PurchaseRequest](#purchaserequest)

### PaymentDetail
* PaymentDetail `object`: Information about payment related to a reservation order.
  * billingAccount `string`: Shows the Account that is charged for this payment.
  * billingCurrencyTotal [Price](#price)
  * dueDate `string`: Date when the payment needs to be done.
  * extendedStatusInfo [ExtendedStatusInfo](#extendedstatusinfo)
  * paymentDate `string`: Date when the transaction is completed. Is null when it is scheduled.
  * pricingCurrencyTotal [Price](#price)
  * status [PaymentStatus](#paymentstatus)

### PaymentStatus
* PaymentStatus `string` (values: Succeeded, Failed, Scheduled, Cancelled): Describes whether the payment is completed, failed, cancelled or scheduled in the future.

### Price
* Price `object`
  * amount `number`
  * currencyCode `string`: The ISO 4217 3-letter currency code for the currency used by this purchase record.

### Properties
* Properties `object`
  * properties [SubscriptionScopeProperties](#subscriptionscopeproperties)

### PurchaseRequest
* PurchaseRequest `object`
  * location `string`: The Azure Region where the reserved resource lives.
  * properties [PurchaseRequestProperties](#purchaserequestproperties)
  * sku [SkuName](#skuname)

### PurchaseRequestProperties
* PurchaseRequestProperties `object`
  * appliedScopeType [AppliedScopeType](#appliedscopetype)
  * appliedScopes [AppliedScopes](#appliedscopes)
  * billingPlan [ReservationBillingPlan](#reservationbillingplan)
  * billingScopeId [BillingScopeId](#billingscopeid)
  * displayName `string`: Friendly name of the Reservation
  * quantity [ReservationQuantity](#reservationquantity)
  * renew [Renew](#renew)
  * reservedResourceProperties `object`: Properties specific to each reserved resource type. Not required if not applicable.
    * instanceFlexibility [InstanceFlexibility](#instanceflexibility)
  * reservedResourceType [ReservedResourceType](#reservedresourcetype)
  * term [ReservationTerm](#reservationterm)

### Renew
* Renew `boolean`: Setting this to true will automatically purchase a new reservation on the expiration date time.

### RenewPropertiesResponse
* RenewPropertiesResponse `object`
  * billingCurrencyTotal `object`: Currency and amount that customer will be charged in customer's local currency for renewal purchase. Tax is not included.
    * amount `number`
    * currencyCode `string`
  * pricingCurrencyTotal `object`: Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included. This is locked price 30 days before expiry.
    * amount `number`
    * currencyCode `string`
  * purchaseProperties [PurchaseRequest](#purchaserequest)

### ReservationBillingPlan
* ReservationBillingPlan `string` (values: Upfront, Monthly): Represent the billing plans.

### ReservationList
* ReservationList `object`
  * nextLink `string`: Url to get the next page of reservations.
  * value `array`
    * items [ReservationResponse](#reservationresponse)

### ReservationMergeProperties
* ReservationMergeProperties `object`
  * mergeDestination `string`: Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
  * mergeSources `array`: Resource Ids of the Source Reservation's merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
    * items `string`

### ReservationOrderBillingPlanInformation
* ReservationOrderBillingPlanInformation `object`: Information describing the type of billing plan for this reservation.
  * nextPaymentDueDate `string`: For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
  * pricingCurrencyTotal [Price](#price)
  * startDate `string`: Date when the billing plan has started.
  * transactions `array`
    * items [PaymentDetail](#paymentdetail)

### ReservationOrderList
* ReservationOrderList `object`
  * nextLink `string`: Url to get the next page of reservationOrders.
  * value `array`
    * items [ReservationOrderResponse](#reservationorderresponse)

### ReservationOrderProperties
* ReservationOrderProperties `object`
  * billingPlan [ReservationBillingPlan](#reservationbillingplan)
  * createdDateTime `string`: This is the DateTime when the reservation was created.
  * displayName `string`: Friendly name for user to easily identified the reservation.
  * expiryDate `string`: This is the date when the Reservation will expire.
  * originalQuantity [ReservationQuantity](#reservationquantity)
  * planInformation [ReservationOrderBillingPlanInformation](#reservationorderbillingplaninformation)
  * provisioningState `string`: Current state of the reservation.
  * requestDateTime `string`: This is the DateTime when the reservation was initially requested for purchase.
  * reservations `array`
    * items [ReservationResponse](#reservationresponse)
  * term [ReservationTerm](#reservationterm)

### ReservationOrderResponse
* ReservationOrderResponse `object`
  * etag `integer`
  * id `string`: Identifier of the reservation
  * name `string`: Name of the reservation
  * properties [ReservationOrderProperties](#reservationorderproperties)
  * type `string`: Type of resource. "Microsoft.Capacity/reservations"

### ReservationProperties
* ReservationProperties `object`
  * appliedScopeType [AppliedScopeType](#appliedscopetype)
  * appliedScopes [AppliedScopes](#appliedscopes)
  * billingPlan [ReservationBillingPlan](#reservationbillingplan)
  * billingScopeId [BillingScopeId](#billingscopeid)
  * displayName `string`: Friendly name for user to easily identify the reservation
  * effectiveDateTime `string`: DateTime of the Reservation starting when this version is effective from.
  * expiryDate `string`: This is the date when the Reservation will expire.
  * extendedStatusInfo [ExtendedStatusInfo](#extendedstatusinfo)
  * instanceFlexibility [InstanceFlexibility](#instanceflexibility)
  * lastUpdatedDateTime `string`: DateTime of the last time the Reservation was updated.
  * mergeProperties [ReservationMergeProperties](#reservationmergeproperties)
  * provisioningState `string`: Current state of the reservation.
  * quantity [ReservationQuantity](#reservationquantity)
  * renew [Renew](#renew)
  * renewDestination `string`: Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
  * renewProperties [RenewPropertiesResponse](#renewpropertiesresponse)
  * renewSource `string`: Reservation Id of the reservation from which this reservation is renewed. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
  * reservedResourceType [ReservedResourceType](#reservedresourcetype)
  * skuDescription `string`: Description of the SKU in english.
  * splitProperties [ReservationSplitProperties](#reservationsplitproperties)
  * term [ReservationTerm](#reservationterm)

### ReservationQuantity
* ReservationQuantity `integer`: Quantity of the SKUs that are part of the Reservation. Must be greater than zero.

### ReservationResponse
* ReservationResponse `object`
  * etag `integer`
  * id `string`: Identifier of the reservation
  * location `string`: The Azure Region where the reserved resource lives.
  * name `string`: Name of the reservation
  * properties [ReservationProperties](#reservationproperties)
  * sku [SkuName](#skuname)
  * type `string`: Type of resource. "Microsoft.Capacity/reservationOrders/reservations"

### ReservationSplitProperties
* ReservationSplitProperties `object`
  * splitDestinations `array`: List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
    * items `string`
  * splitSource `string`: Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

### ReservationStatusCode
* ReservationStatusCode `string` (values: None, Pending, Active, PurchaseError, PaymentInstrumentError, Split, Merged, Expired, Succeeded)

### ReservationTerm
* ReservationTerm `string` (values: P1Y, P3Y): Represent the term of Reservation.

### ReservedResourceType
* ReservedResourceType `string` (values: VirtualMachines, SqlDatabases, SuseLinux, CosmosDb, RedHat, SqlDataWarehouse, VMwareCloudSimple, RedHatOsa): The type of the resource that is being reserved.

### ScopeProperties
* ScopeProperties `object`
  * scope `string`
  * valid `boolean`

### SkuName
* SkuName `object`
  * name `string`

### SkuProperty
* SkuProperty `object`
  * name `string`: An invariant to describe the feature.
  * value `string`: An invariant if the feature is measured by quantity.

### SkuRestriction
* SkuRestriction `object`
  * reasonCode `string`: The reason for restriction.
  * type `string`: The type of restrictions.
  * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
    * items `string`

### SplitProperties
* SplitProperties `object`
  * quantities `array`: List of the quantities in the new reservations to create.
    * items `integer`
  * reservationId `string`: Resource id of the reservation to be split. Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

### SplitRequest
* SplitRequest `object`
  * properties [SplitProperties](#splitproperties)

### SubscriptionScopeProperties
* SubscriptionScopeProperties `object`
  * scopes `array`
    * items [ScopeProperties](#scopeproperties)


