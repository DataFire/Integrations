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

azure_reservations.Operation_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

This API describe Azure Reservation

## Actions

### Operation_List
List all the operations.


```js
azure_reservations.Operation_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.
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
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.
  * parameters **required** [Patch](#patch)

#### Output
* output [ReservationResponse](#reservationresponse)

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
  * api-version **required** `string`: Supported version.

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
  * api-version **required** `string`: Supported version.
  * body **required** [SplitRequest](#splitrequest)

#### Output
* output `array`
  * items [ReservationResponse](#reservationresponse)

### GetAppliedReservationList
Get applicable `Reservation`s that are applied to this subscription.


```js
azure_reservations.GetAppliedReservationList({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version.
  * subscriptionId **required** `string`: Id of the subscription

#### Output
* output [AppliedReservations](#appliedreservations)

### GetCatalog
Get the regions and skus that are available for RI purchase for the specified Azure subscription.


```js
azure_reservations.GetCatalog({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version.
  * subscriptionId **required** `string`: Id of the subscription

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

### Catalog
* Catalog `object`
  * capabilities `array`
    * items [SkuCapability](#skucapability)
  * locations `array`
    * items `string`: The set of locations that the SKU is available.
  * name `string`: The name of SKU
  * resourceType `string`: The type of resource the SKU applies to.
  * restrictions `array`
    * items [SkuRestriction](#skurestriction)
  * size `string`: The size of this SKU
  * terms `array`: Available reservation terms for this resource
    * items [ReservationTerm](#reservationterm)
  * tier `string`: The tier of this SKU

### Error
* Error `object`
  * error [ExtendedErrorInfo](#extendederrorinfo)

### ErrorResponseCode
* ErrorResponseCode `string` (values: NotSpecified, InternalServerError, ServerTimeout, AuthorizationFailed, BadRequest, ClientCertificateThumbprintNotSet, InvalidRequestContent, OperationFailed, HttpMethodNotSupported, InvalidRequestUri, MissingTenantId, InvalidTenantId, InvalidReservationOrderId, InvalidReservationId, ReservationIdNotInReservationOrder, ReservationOrderNotFound, InvalidSubscriptionId, InvalidAccessToken, InvalidLocationId, UnauthenticatedRequestsThrottled, InvalidHealthCheckType, Forbidden, BillingScopeIdCannotBeChanged, AppliedScopesNotAssociatedWithCommerceAccount, AppliedScopesSameAsExisting, RoleAssignmentCreationFailed, ReservationOrderCreationFailed, ReservationOrderNotEnabled, CapacityUpdateScopesFailed, UnsupportedReservationTerm, ReservationOrderIdAlreadyExists, RiskCheckFailed, CreateQuoteFailed, ActivateQuoteFailed, NonsupportedAccountId, PaymentInstrumentNotFound, MissingAppliedScopesForSingle, NoValidReservationsToReRate, ReRateOnlyAllowedForEA, OperationCannotBePerformedInCurrentState, InvalidSingleAppliedScopesCount, InvalidFulfillmentRequestParameters, NotSupportedCountry, InvalidRefundQuantity, PurchaseError, BillingCustomerInputError, BillingPaymentInstrumentSoftError, BillingPaymentInstrumentHardError, BillingTransientError, BillingError, FulfillmentConfigurationError, FulfillmentOutOfStockError, FulfillmentTransientError, FulfillmentError, CalculatePriceFailed)

### ExtendedErrorInfo
* ExtendedErrorInfo `object`
  * code [ErrorResponseCode](#errorresponsecode)
  * message `string`

### ExtendedStatusInfo
* ExtendedStatusInfo `object`
  * message `string`: The message giving detailed information about the status code.
  * statusCode [ReservationStatusCode](#reservationstatuscode)

### Location
* Location `string` (values: westus, eastus, eastus2, northcentralus, westus2, southcentralus, centralus, westeurope, northeurope, eastasia, southeastasia, japaneast, japanwest, brazilsouth, australiaeast, australiasoutheast, southindia, westindia, centralindia, canadacentral, canadaeast, uksouth, westcentralus, ukwest): Location in which the Resources needs to be reserved. It cannot be changed after the resource has been created.

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

### ProvisioningState
* ProvisioningState `string` (values: Creating, PendingResourceHold, ConfirmedResourceHold, PendingBilling, ConfirmedBilling, Created, Succeeded, Cancelled, Expired, BillingFailed, Failed, Split, Merged): Represent the current state of the Reservation.

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

### ReservationOrderList
* ReservationOrderList `object`
  * nextLink `string`: Url to get the next page of reservationOrders.
  * value `array`
    * items [ReservationOrderResponse](#reservationorderresponse)

### ReservationOrderProperties
* ReservationOrderProperties `object`
  * createdDateTime `string`: This is the DateTime when the reservation was created.
  * displayName `string`: Friendly name for user to easily identified the reservation.
  * expiryDate `string`: This is the date when the Reservation will expire.
  * originalQuantity `integer`: Total Quantity of the SKUs purchased in the Reservation.
  * provisioningState [ProvisioningState](#provisioningstate)
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
  * displayName `string`: Friendly name for user to easily identify the reservation
  * effectiveDateTime `string`: DateTime of the Reservation starting when this version is effective from.
  * expiryDate `string`: This is the date when the Reservation will expire.
  * extendedStatusInfo [ExtendedStatusInfo](#extendedstatusinfo)
  * lastUpdatedDateTime `string`: DateTime of the last time the Reservation was updated.
  * mergeProperties [ReservationMergeProperties](#reservationmergeproperties)
  * provisioningState [ProvisioningState](#provisioningstate)
  * quantity `integer`: Quantity of the SKUs that are part of the Reservation.
  * splitProperties [ReservationSplitProperties](#reservationsplitproperties)

### ReservationResponse
* ReservationResponse `object`
  * etag `integer`
  * id `string`: Identifier of the reservation
  * kind `string` (values: Microsoft.Compute): Resource Provider type to be reserved.
  * location [Location](#location)
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

### SkuCapability
* SkuCapability `object`
  * name `string`: An invariant to describe the feature.
  * value `string`: An invariant if the feature is measured by quantity.

### SkuName
* SkuName `object`
  * name `string`

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


