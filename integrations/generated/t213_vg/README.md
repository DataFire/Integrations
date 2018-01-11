# @datafire/t213_vg

Client library for Magento Enterprise

## Installation and Usage
```bash
npm install --save @datafire/t213_vg
```
```js
let t213_vg = require('@datafire/t213_vg').create();

t213_vg.salesTransactionRepositoryV1GetListGet({}).then(data => {
  console.log(data);
})
```

## Description

Magento Commerce is the leading provider of open omnichannel innovation.

## Actions

### customerAddressRepositoryV1DeleteByIdDelete
Delete customer address by ID.


```js
t213_vg.customerAddressRepositoryV1DeleteByIdDelete({
  "addressId": 0
}, context)
```

#### Input
* input `object`
  * addressId **required** `integer`

#### Output
* output `boolean`: true on success

### customerCustomerMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.customerCustomerMetadataV1GetAllAttributesMetadataGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerCustomerMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.customerCustomerMetadataV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerCustomerMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.


```js
t213_vg.customerCustomerMetadataV1GetCustomAttributesMetadataGet({}, context)
```

#### Input
* input `object`
  * dataInterfaceName `string`

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerCustomerMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.customerCustomerMetadataV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Input
* input `object`
  * formCode **required** `string`

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerAddressMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.customerAddressMetadataV1GetAllAttributesMetadataGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerAddressMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.customerAddressMetadataV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerAddressMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.


```js
t213_vg.customerAddressMetadataV1GetCustomAttributesMetadataGet({}, context)
```

#### Input
* input `object`
  * dataInterfaceName `string`

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### customerAddressMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.customerAddressMetadataV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Input
* input `object`
  * formCode **required** `string`

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### bundleProductOptionManagementV1SavePost
Add new option for bundle product


```js
t213_vg.bundleProductOptionManagementV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * option **required** [bundle-data-option-interface](#bundle-data-option-interface)

#### Output
* output `integer`

### bundleProductOptionTypeListV1GetItemsGet
Get all types for options for bundle products


```js
t213_vg.bundleProductOptionTypeListV1GetItemsGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [bundle-data-option-type-interface](#bundle-data-option-type-interface)

### bundleProductOptionManagementV1SavePut
Add new option for bundle product


```js
t213_vg.bundleProductOptionManagementV1SavePut({
  "optionId": ""
}, context)
```

#### Input
* input `object`
  * optionId **required** `string`
  * $body `object`
    * option **required** [bundle-data-option-interface](#bundle-data-option-interface)

#### Output
* output `integer`

### bundleProductLinkManagementV1GetChildrenGet
Get all children for Bundle product


```js
t213_vg.bundleProductLinkManagementV1GetChildrenGet({
  "productSku": ""
}, context)
```

#### Input
* input `object`
  * productSku **required** `string`
  * optionId `integer`

#### Output
* output `array`
  * items [bundle-data-link-interface](#bundle-data-link-interface)

### bundleProductLinkManagementV1SaveChildPut



```js
t213_vg.bundleProductLinkManagementV1SaveChildPut({
  "sku": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `string`
  * $body `object`
    * linkedProduct **required** [bundle-data-link-interface](#bundle-data-link-interface)

#### Output
* output `boolean`

### bundleProductLinkManagementV1AddChildByProductSkuPost
Add child product to specified Bundle option by product sku


```js
t213_vg.bundleProductLinkManagementV1AddChildByProductSkuPost({
  "sku": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`
  * $body `object`
    * linkedProduct **required** [bundle-data-link-interface](#bundle-data-link-interface)

#### Output
* output `integer`

### bundleProductOptionRepositoryV1GetListGet
Get all options for bundle product


```js
t213_vg.bundleProductOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [bundle-data-option-interface](#bundle-data-option-interface)

### bundleProductOptionRepositoryV1DeleteByIdDelete
Remove bundle option


```js
t213_vg.bundleProductOptionRepositoryV1DeleteByIdDelete({
  "sku": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`

#### Output
* output `boolean`

### bundleProductOptionRepositoryV1GetGet
Get option for bundle product


```js
t213_vg.bundleProductOptionRepositoryV1GetGet({
  "sku": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`

#### Output
* output [bundle-data-option-interface](#bundle-data-option-interface)

### bundleProductLinkManagementV1RemoveChildDelete
Remove product from Bundle product option


```js
t213_vg.bundleProductLinkManagementV1RemoveChildDelete({
  "sku": "",
  "optionId": 0,
  "childSku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`
  * childSku **required** `string`

#### Output
* output `boolean`

### quoteCartManagementV1CreateEmptyCartPost
Creates an empty cart and quote for a guest.


```js
t213_vg.quoteCartManagementV1CreateEmptyCartPost(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `integer`: Cart ID.

### giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet



```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet({
  "cartId": "",
  "giftCardCode": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * giftCardCode **required** `string`

#### Output
* output `number`

### giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost



```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * giftCardAccountData **required** [gift-card-account-data-gift-card-account-interface](#gift-card-account-data-gift-card-account-interface)

#### Output
* output `boolean`

### giftCardAccountGuestGiftCardAccountManagementV1DeleteByQuoteIdDelete
Remove GiftCard Account entity


```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1DeleteByQuoteIdDelete({
  "cartId": "",
  "giftCardCode": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * giftCardCode **required** `string`

#### Output
* output `boolean`

### checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
Lists active checkout agreements.


```js
t213_vg.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [checkout-agreements-data-agreement-interface](#checkout-agreements-data-agreement-interface)

### quoteCartManagementV1GetCartForCustomerGet
Returns information for the cart for a specified customer.


```js
t213_vg.quoteCartManagementV1GetCartForCustomerGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [quote-data-cart-interface](#quote-data-cart-interface)

### V1.carts.mine.post
Creates an empty cart and quote for a specified customer.


```js
t213_vg.V1.carts.mine.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `integer`: Cart ID.

### quoteCartRepositoryV1SavePut
Save quote


```js
t213_vg.quoteCartRepositoryV1SavePut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * quote **required** [quote-data-cart-interface](#quote-data-cart-interface)

#### Output
* output [error-response](#error-response)

### customerBalanceBalanceManagementV1ApplyPost
Apply store credit


```js
t213_vg.customerBalanceBalanceManagementV1ApplyPost(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `boolean`

### V1.carts.mine.billing_address.get
Returns the billing address for a specified quote.


```js
t213_vg.V1.carts.mine.billing_address.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [quote-data-address-interface](#quote-data-address-interface)

### V1.carts.mine.billing_address.post
Assigns a specified billing address to a specified cart.


```js
t213_vg.V1.carts.mine.billing_address.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)
    * useForShipping `boolean`

#### Output
* output `integer`: Address ID.

### giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet({
  "giftCardCode": ""
}, context)
```

#### Input
* input `object`
  * giftCardCode **required** `string`

#### Output
* output `number`

### quoteCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals.


```js
t213_vg.quoteCartTotalManagementV1CollectTotalsPut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * additionalData [quote-data-totals-additional-data-interface](#quote-data-totals-additional-data-interface)
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)
    * shippingCarrierCode `string`: The carrier code.
    * shippingMethodCode `string`: The shipping method code.

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### V1.carts.mine.coupons.delete
Deletes a coupon from a specified cart.


```js
t213_vg.V1.carts.mine.coupons.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `boolean`

### V1.carts.mine.coupons.get
Returns information for a coupon in a specified cart.


```js
t213_vg.V1.carts.mine.coupons.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`: The coupon code data.

### V1.carts.mine.coupons.couponCode.put
Adds a coupon by code to a specified cart.


```js
t213_vg.V1.carts.mine.coupons.couponCode.put({
  "couponCode": ""
}, context)
```

#### Input
* input `object`
  * couponCode **required** `string`: The coupon code data.

#### Output
* output `boolean`

### V1.carts.mine.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.V1.carts.mine.estimate_shipping_methods.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)

#### Output
* output `array`: An array of shipping methods
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.mine.estimate_shipping_methods_by_address_id.post
Estimate shipping


```js
t213_vg.V1.carts.mine.estimate_shipping_methods_by_address_id.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * addressId **required** `integer`: The estimate address id

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.mine.gift_message.get
Return the gift message for a specified order.


```js
t213_vg.V1.carts.mine.gift_message.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### V1.carts.mine.gift_message.post
Set the gift message for an entire order.


```js
t213_vg.V1.carts.mine.gift_message.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### V1.carts.mine.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.mine.gift_message.itemId.get({
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * itemId **required** `integer`: The item ID.

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### V1.carts.mine.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.mine.gift_message.itemId.post({
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * itemId **required** `integer`: The item ID.
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * giftCardAccountData **required** [gift-card-account-data-gift-card-account-interface](#gift-card-account-data-gift-card-account-interface)

#### Output
* output `boolean`

### V1.carts.mine.giftCards.giftCardCode.delete
Remove GiftCard Account entity


```js
t213_vg.V1.carts.mine.giftCards.giftCardCode.delete({
  "giftCardCode": ""
}, context)
```

#### Input
* input `object`
  * giftCardCode **required** `string`

#### Output
* output `boolean`

### V1.carts.mine.items.get
Lists items that are assigned to a specified cart.


```js
t213_vg.V1.carts.mine.items.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: Array of items.
  * items [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### V1.carts.mine.items.post
Add/update the specified cart item.


```js
t213_vg.V1.carts.mine.items.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### V1.carts.mine.items.itemId.delete
Removes the specified item from the specified cart.


```js
t213_vg.V1.carts.mine.items.itemId.delete({
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * itemId **required** `integer`: The item ID of the item to be removed.

#### Output
* output `boolean`

### V1.carts.mine.items.itemId.put
Add/update the specified cart item.


```js
t213_vg.V1.carts.mine.items.itemId.put({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### V1.carts.mine.order.put
Places an order for a specified cart.


```js
t213_vg.V1.carts.mine.order.put({}, context)
```

#### Input
* input `object`
  * $body `object`
    * paymentMethod [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### checkoutPaymentInformationManagementV1GetPaymentInformationGet
Get payment information


```js
t213_vg.checkoutPaymentInformationManagementV1GetPaymentInformationGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [checkout-data-payment-details-interface](#checkout-data-payment-details-interface)

### checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.


```js
t213_vg.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * billingAddress [quote-data-address-interface](#quote-data-address-interface)
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### V1.carts.mine.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.V1.carts.mine.payment_methods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: Array of payment methods.
  * items [quote-data-payment-method-interface](#quote-data-payment-method-interface)

### V1.carts.mine.selected_payment_method.get
Returns the payment method for a specified shopping cart.


```js
t213_vg.V1.carts.mine.selected_payment_method.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [quote-data-payment-interface](#quote-data-payment-interface)

### V1.carts.mine.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.


```js
t213_vg.V1.carts.mine.selected_payment_method.put({}, context)
```

#### Input
* input `object`
  * $body `object`
    * method **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `string`: redirect url or error message.

### checkoutPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.


```js
t213_vg.checkoutPaymentInformationManagementV1SavePaymentInformationPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * billingAddress [quote-data-address-interface](#quote-data-address-interface)
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### V1.carts.mine.shipping_information.post



```js
t213_vg.V1.carts.mine.shipping_information.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * addressInformation **required** [checkout-data-shipping-information-interface](#checkout-data-shipping-information-interface)

#### Output
* output [checkout-data-payment-details-interface](#checkout-data-payment-details-interface)

### V1.carts.mine.shipping_methods.get
Lists applicable shipping methods for a specified quote.


```js
t213_vg.V1.carts.mine.shipping_methods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.mine.totals.get
Returns quote totals data for a specified cart.


```js
t213_vg.V1.carts.mine.totals.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### V1.carts.mine.totals_information.post
Calculate quote totals based on address and shipping method.


```js
t213_vg.V1.carts.mine.totals_information.post({}, context)
```

#### Input
* input `object`
  * $body `object`
    * addressInformation **required** [checkout-data-totals-information-interface](#checkout-data-totals-information-interface)

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### quoteCartRepositoryV1GetListGet
Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.quoteCartRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [quote-data-cart-search-results-interface](#quote-data-cart-search-results-interface)

### quoteCartRepositoryV1GetGet
Enables an administrative user to return information for a specified cart.


```js
t213_vg.quoteCartRepositoryV1GetGet({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`

#### Output
* output [quote-data-cart-interface](#quote-data-cart-interface)

### quoteCartManagementV1AssignCustomerPut
Assigns a specified customer to a specified shopping cart.


```js
t213_vg.quoteCartManagementV1AssignCustomerPut({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * $body `object`
    * customerId **required** `integer`: The customer ID.
    * storeId **required** `integer`

#### Output
* output `boolean`

### V1.carts.cartId.billing_address.get
Returns the billing address for a specified quote.


```js
t213_vg.V1.carts.cartId.billing_address.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output [quote-data-address-interface](#quote-data-address-interface)

### V1.carts.cartId.billing_address.post
Assigns a specified billing address to a specified cart.


```js
t213_vg.V1.carts.cartId.billing_address.post({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)
    * useForShipping `boolean`

#### Output
* output `integer`: Address ID.

### V1.carts.cartId.coupons.delete
Deletes a coupon from a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.delete({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output `boolean`

### V1.carts.cartId.coupons.get
Returns information for a coupon in a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output `string`: The coupon code data.

### V1.carts.cartId.coupons.couponCode.put
Adds a coupon by code to a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.couponCode.put({
  "cartId": 0,
  "couponCode": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * couponCode **required** `string`: The coupon code data.

#### Output
* output `boolean`

### V1.carts.cartId.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.V1.carts.cartId.estimate_shipping_methods.post({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)

#### Output
* output `array`: An array of shipping methods
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.cartId.estimate_shipping_methods_by_address_id.post
Estimate shipping


```js
t213_vg.V1.carts.cartId.estimate_shipping_methods_by_address_id.post({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The shopping cart ID.
  * $body `object`
    * addressId **required** `integer`: The estimate address id

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.cartId.gift_message.get
Return the gift message for a specified order.


```js
t213_vg.V1.carts.cartId.gift_message.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The shopping cart ID.

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### V1.carts.cartId.gift_message.post
Set the gift message for an entire order.


```js
t213_vg.V1.carts.cartId.gift_message.post({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### V1.carts.cartId.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.cartId.gift_message.itemId.get({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The shopping cart ID.
  * itemId **required** `integer`: The item ID.

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### V1.carts.cartId.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.cartId.gift_message.itemId.post({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * itemId **required** `integer`: The item ID.
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`
  * $body `object`
    * giftCardAccountData **required** [gift-card-account-data-gift-card-account-interface](#gift-card-account-data-gift-card-account-interface)

#### Output
* output `boolean`

### V1.carts.cartId.giftCards.giftCardCode.delete
Remove GiftCard Account entity


```js
t213_vg.V1.carts.cartId.giftCards.giftCardCode.delete({
  "cartId": 0,
  "giftCardCode": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`
  * giftCardCode **required** `string`

#### Output
* output `boolean`

### V1.carts.cartId.items.get
Lists items that are assigned to a specified cart.


```js
t213_vg.V1.carts.cartId.items.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output `array`: Array of items.
  * items [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### V1.carts.cartId.items.itemId.delete
Removes the specified item from the specified cart.


```js
t213_vg.V1.carts.cartId.items.itemId.delete({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * itemId **required** `integer`: The item ID of the item to be removed.

#### Output
* output `boolean`

### V1.carts.cartId.items.itemId.put
Add/update the specified cart item.


```js
t213_vg.V1.carts.cartId.items.itemId.put({
  "cartId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * itemId **required** `string`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### V1.carts.cartId.order.put
Places an order for a specified cart.


```js
t213_vg.V1.carts.cartId.order.put({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * $body `object`
    * paymentMethod [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### V1.carts.cartId.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.V1.carts.cartId.payment_methods.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output `array`: Array of payment methods.
  * items [quote-data-payment-method-interface](#quote-data-payment-method-interface)

### V1.carts.cartId.selected_payment_method.get
Returns the payment method for a specified shopping cart.


```js
t213_vg.V1.carts.cartId.selected_payment_method.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output [quote-data-payment-interface](#quote-data-payment-interface)

### V1.carts.cartId.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.


```js
t213_vg.V1.carts.cartId.selected_payment_method.put({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.
  * $body `object`
    * method **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `string`: redirect url or error message.

### V1.carts.cartId.shipping_information.post



```js
t213_vg.V1.carts.cartId.shipping_information.post({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`
  * $body `object`
    * addressInformation **required** [checkout-data-shipping-information-interface](#checkout-data-shipping-information-interface)

#### Output
* output [checkout-data-payment-details-interface](#checkout-data-payment-details-interface)

### V1.carts.cartId.shipping_methods.get
Lists applicable shipping methods for a specified quote.


```js
t213_vg.V1.carts.cartId.shipping_methods.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The shopping cart ID.

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### V1.carts.cartId.totals.get
Returns quote totals data for a specified cart.


```js
t213_vg.V1.carts.cartId.totals.get({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`: The cart ID.

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### V1.carts.cartId.totals_information.post
Calculate quote totals based on address and shipping method.


```js
t213_vg.V1.carts.cartId.totals_information.post({
  "cartId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `integer`
  * $body `object`
    * addressInformation **required** [checkout-data-totals-information-interface](#checkout-data-totals-information-interface)

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet
Return GiftCard Account cards


```js
t213_vg.giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet({
  "quoteId": 0
}, context)
```

#### Input
* input `object`
  * quoteId **required** `integer`

#### Output
* output [gift-card-account-data-gift-card-account-interface](#gift-card-account-data-gift-card-account-interface)

### V1.carts.quoteId.items.post
Add/update the specified cart item.


```js
t213_vg.V1.carts.quoteId.items.post({
  "quoteId": ""
}, context)
```

#### Input
* input `object`
  * quoteId **required** `string`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### catalogCategoryManagementV1GetTreeGet
Retrieve list of categories


```js
t213_vg.catalogCategoryManagementV1GetTreeGet({}, context)
```

#### Input
* input `object`
  * rootCategoryId `integer`
  * depth `integer`

#### Output
* output [catalog-data-category-tree-interface](#catalog-data-category-tree-interface)

### catalogCategoryRepositoryV1SavePost
Create category service


```js
t213_vg.catalogCategoryRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * category **required** [catalog-data-category-interface](#catalog-data-category-interface)

#### Output
* output [catalog-data-category-interface](#catalog-data-category-interface)

### catalogCategoryAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type


```js
t213_vg.catalogCategoryAttributeRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [catalog-data-category-attribute-search-results-interface](#catalog-data-category-attribute-search-results-interface)

### catalogCategoryAttributeRepositoryV1GetGet
Retrieve specific attribute


```js
t213_vg.catalogCategoryAttributeRepositoryV1GetGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output [catalog-data-category-attribute-interface](#catalog-data-category-attribute-interface)

### catalogCategoryAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options


```js
t213_vg.catalogCategoryAttributeOptionManagementV1GetItemsGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output `array`
  * items [eav-data-attribute-option-interface](#eav-data-attribute-option-interface)

### catalogCategoryRepositoryV1DeleteByIdentifierDelete
Delete category by identifier


```js
t213_vg.catalogCategoryRepositoryV1DeleteByIdentifierDelete({
  "categoryId": 0
}, context)
```

#### Input
* input `object`
  * categoryId **required** `integer`

#### Output
* output `boolean`: Will returned True if deleted

### catalogCategoryRepositoryV1GetGet
Get info about category by category id


```js
t213_vg.catalogCategoryRepositoryV1GetGet({
  "categoryId": 0
}, context)
```

#### Input
* input `object`
  * categoryId **required** `integer`
  * storeId `integer`

#### Output
* output [catalog-data-category-interface](#catalog-data-category-interface)

### catalogCategoryManagementV1MovePut
Move category


```js
t213_vg.catalogCategoryManagementV1MovePut({
  "categoryId": 0
}, context)
```

#### Input
* input `object`
  * categoryId **required** `integer`
  * $body `object`
    * afterId `integer`
    * parentId **required** `integer`

#### Output
* output `boolean`

### catalogCategoryLinkManagementV1GetAssignedProductsGet
Get products assigned to category


```js
t213_vg.catalogCategoryLinkManagementV1GetAssignedProductsGet({
  "categoryId": 0
}, context)
```

#### Input
* input `object`
  * categoryId **required** `integer`

#### Output
* output `array`
  * items [catalog-data-category-product-link-interface](#catalog-data-category-product-link-interface)

### catalogCategoryLinkRepositoryV1SavePost
Assign a product to the required category


```js
t213_vg.catalogCategoryLinkRepositoryV1SavePost({
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`
  * $body `object`
    * productLink **required** [catalog-data-category-product-link-interface](#catalog-data-category-product-link-interface)

#### Output
* output `boolean`: will returned True if assigned

### catalogCategoryLinkRepositoryV1SavePut
Assign a product to the required category


```js
t213_vg.catalogCategoryLinkRepositoryV1SavePut({
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`
  * $body `object`
    * productLink **required** [catalog-data-category-product-link-interface](#catalog-data-category-product-link-interface)

#### Output
* output `boolean`: will returned True if assigned

### catalogCategoryLinkRepositoryV1DeleteByIdsDelete
Remove the product assignment from the category by category id and sku


```js
t213_vg.catalogCategoryLinkRepositoryV1DeleteByIdsDelete({
  "categoryId": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`
  * sku **required** `string`

#### Output
* output `boolean`: will returned True if products successfully deleted

### catalogCategoryRepositoryV1SavePut
Create category service


```js
t213_vg.catalogCategoryRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * category **required** [catalog-data-category-interface](#catalog-data-category-interface)

#### Output
* output [catalog-data-category-interface](#catalog-data-category-interface)

### cmsBlockRepositoryV1SavePost
Save block.


```js
t213_vg.cmsBlockRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * block **required** [cms-data-block-interface](#cms-data-block-interface)

#### Output
* output [cms-data-block-interface](#cms-data-block-interface)

### cmsBlockRepositoryV1GetListGet
Retrieve blocks matching the specified criteria.


```js
t213_vg.cmsBlockRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [cms-data-block-search-results-interface](#cms-data-block-search-results-interface)

### cmsBlockRepositoryV1DeleteByIdDelete
Delete block by ID.


```js
t213_vg.cmsBlockRepositoryV1DeleteByIdDelete({
  "blockId": 0
}, context)
```

#### Input
* input `object`
  * blockId **required** `integer`

#### Output
* output `boolean`: true on success

### cmsBlockRepositoryV1GetByIdGet
Retrieve block.


```js
t213_vg.cmsBlockRepositoryV1GetByIdGet({
  "blockId": 0
}, context)
```

#### Input
* input `object`
  * blockId **required** `integer`

#### Output
* output [cms-data-block-interface](#cms-data-block-interface)

### cmsBlockRepositoryV1SavePut
Save block.


```js
t213_vg.cmsBlockRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * block **required** [cms-data-block-interface](#cms-data-block-interface)

#### Output
* output [cms-data-block-interface](#cms-data-block-interface)

### cmsPageRepositoryV1SavePost
Save page.


```js
t213_vg.cmsPageRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * page **required** [cms-data-page-interface](#cms-data-page-interface)

#### Output
* output [cms-data-page-interface](#cms-data-page-interface)

### cmsPageRepositoryV1GetListGet
Retrieve pages matching the specified criteria.


```js
t213_vg.cmsPageRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [cms-data-page-search-results-interface](#cms-data-page-search-results-interface)

### cmsPageRepositoryV1SavePut
Save page.


```js
t213_vg.cmsPageRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * page **required** [cms-data-page-interface](#cms-data-page-interface)

#### Output
* output [cms-data-page-interface](#cms-data-page-interface)

### cmsPageRepositoryV1DeleteByIdDelete
Delete page by ID.


```js
t213_vg.cmsPageRepositoryV1DeleteByIdDelete({
  "pageId": 0
}, context)
```

#### Input
* input `object`
  * pageId **required** `integer`

#### Output
* output `boolean`: true on success

### cmsPageRepositoryV1GetByIdGet
Retrieve page.


```js
t213_vg.cmsPageRepositoryV1GetByIdGet({
  "pageId": 0
}, context)
```

#### Input
* input `object`
  * pageId **required** `integer`

#### Output
* output [cms-data-page-interface](#cms-data-page-interface)

### configurableProductConfigurableProductManagementV1GenerateVariationPut
Generate variation based on same product


```js
t213_vg.configurableProductConfigurableProductManagementV1GenerateVariationPut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * options **required** `array`
      * items [configurable-product-data-option-interface](#configurable-product-data-option-interface)
    * product **required** [catalog-data-product-interface](#catalog-data-product-interface)

#### Output
* output `array`
  * items [catalog-data-product-interface](#catalog-data-product-interface)

### configurableProductLinkManagementV1AddChildPost



```js
t213_vg.configurableProductLinkManagementV1AddChildPost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * childSku **required** `string`

#### Output
* output `boolean`

### configurableProductLinkManagementV1GetChildrenGet
Get all children for Configurable product


```js
t213_vg.configurableProductLinkManagementV1GetChildrenGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-interface](#catalog-data-product-interface)

### configurableProductLinkManagementV1RemoveChildDelete
Remove configurable product option


```js
t213_vg.configurableProductLinkManagementV1RemoveChildDelete({
  "sku": "",
  "childSku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * childSku **required** `string`

#### Output
* output `boolean`

### configurableProductOptionRepositoryV1SavePost
Save option


```js
t213_vg.configurableProductOptionRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * option **required** [configurable-product-data-option-interface](#configurable-product-data-option-interface)

#### Output
* output `integer`

### configurableProductOptionRepositoryV1GetListGet
Get all options for configurable product


```js
t213_vg.configurableProductOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [configurable-product-data-option-interface](#configurable-product-data-option-interface)

### configurableProductOptionRepositoryV1DeleteByIdDelete
Remove option from configurable product


```js
t213_vg.configurableProductOptionRepositoryV1DeleteByIdDelete({
  "sku": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `integer`

#### Output
* output `boolean`

### configurableProductOptionRepositoryV1GetGet
Get option for configurable product


```js
t213_vg.configurableProductOptionRepositoryV1GetGet({
  "sku": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `integer`

#### Output
* output [configurable-product-data-option-interface](#configurable-product-data-option-interface)

### configurableProductOptionRepositoryV1SavePut
Save option


```js
t213_vg.configurableProductOptionRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `string`
  * $body `object`
    * option **required** [configurable-product-data-option-interface](#configurable-product-data-option-interface)

#### Output
* output `integer`

### salesRuleCouponRepositoryV1SavePost
Save a coupon.


```js
t213_vg.salesRuleCouponRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * coupon **required** [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)

#### Output
* output [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)

### salesRuleCouponManagementV1DeleteByCodesPost
Delete coupon by coupon codes.


```js
t213_vg.salesRuleCouponManagementV1DeleteByCodesPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * codes **required** `array`
      * items `string`
    * ignoreInvalidCoupons `boolean`

#### Output
* output [sales-rule-data-coupon-mass-delete-result-interface](#sales-rule-data-coupon-mass-delete-result-interface)

### salesRuleCouponManagementV1DeleteByIdsPost
Delete coupon by coupon ids.


```js
t213_vg.salesRuleCouponManagementV1DeleteByIdsPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * ids **required** `array`
      * items `integer`
    * ignoreInvalidCoupons `boolean`

#### Output
* output [sales-rule-data-coupon-mass-delete-result-interface](#sales-rule-data-coupon-mass-delete-result-interface)

### salesRuleCouponManagementV1GeneratePost
Generate coupon for a rule


```js
t213_vg.salesRuleCouponManagementV1GeneratePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * couponSpec **required** [sales-rule-data-coupon-generation-spec-interface](#sales-rule-data-coupon-generation-spec-interface)

#### Output
* output `array`
  * items `string`

### salesRuleCouponRepositoryV1GetListGet
Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesRuleCouponRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-rule-data-coupon-search-result-interface](#sales-rule-data-coupon-search-result-interface)

### salesRuleCouponRepositoryV1DeleteByIdDelete
Delete coupon by coupon id.


```js
t213_vg.salesRuleCouponRepositoryV1DeleteByIdDelete({
  "couponId": 0
}, context)
```

#### Input
* input `object`
  * couponId **required** `integer`

#### Output
* output `boolean`: true on success

### salesRuleCouponRepositoryV1GetByIdGet
Get coupon by coupon id.


```js
t213_vg.salesRuleCouponRepositoryV1GetByIdGet({
  "couponId": 0
}, context)
```

#### Input
* input `object`
  * couponId **required** `integer`

#### Output
* output [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)

### salesRuleCouponRepositoryV1SavePut
Save a coupon.


```js
t213_vg.salesRuleCouponRepositoryV1SavePut({
  "couponId": ""
}, context)
```

#### Input
* input `object`
  * couponId **required** `string`
  * $body `object`
    * coupon **required** [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)

#### Output
* output [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)

### salesCreditmemoRepositoryV1SavePost
Performs persist operations for a specified credit memo.


```js
t213_vg.salesCreditmemoRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)

#### Output
* output [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)

### salesCreditmemoManagementV1RefundPost
Prepare creditmemo to refund and save it.


```js
t213_vg.salesCreditmemoManagementV1RefundPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * creditmemo **required** [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)
    * offlineRequested `boolean`

#### Output
* output [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)

### salesCreditmemoRepositoryV1GetGet
Loads a specified credit memo.


```js
t213_vg.salesCreditmemoRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The credit memo ID.

#### Output
* output [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)

### salesCreditmemoManagementV1CancelPut
Cancels a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1CancelPut({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The credit memo ID.

#### Output
* output `boolean`

### salesCreditmemoManagementV1GetCommentsListGet
Lists comments for a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The credit memo ID.

#### Output
* output [sales-data-creditmemo-comment-search-result-interface](#sales-data-creditmemo-comment-search-result-interface)

### salesCreditmemoCommentRepositoryV1SavePost
Performs persist operations for a specified entity.


```js
t213_vg.salesCreditmemoCommentRepositoryV1SavePost({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * entity **required** [sales-data-creditmemo-comment-interface](#sales-data-creditmemo-comment-interface)

#### Output
* output [sales-data-creditmemo-comment-interface](#sales-data-creditmemo-comment-interface)

### salesCreditmemoManagementV1NotifyPost
Emails a user a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The credit memo ID.

#### Output
* output `boolean`

### salesCreditmemoRepositoryV1GetListGet
Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesCreditmemoRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-creditmemo-search-result-interface](#sales-data-creditmemo-search-result-interface)

### customerGroupRepositoryV1SavePost
Save customer group.


```js
t213_vg.customerGroupRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * group **required** [customer-data-group-interface](#customer-data-group-interface)

#### Output
* output [customer-data-group-interface](#customer-data-group-interface)

### V1.customerGroups.default.get
Get default customer group.


```js
t213_vg.V1.customerGroups.default.get({}, context)
```

#### Input
* input `object`
  * storeId `integer`

#### Output
* output [customer-data-group-interface](#customer-data-group-interface)

### V1.customerGroups.default.storeId.get
Get default customer group.


```js
t213_vg.V1.customerGroups.default.storeId.get({
  "storeId": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `integer`

#### Output
* output [customer-data-group-interface](#customer-data-group-interface)

### customerGroupRepositoryV1GetListGet
Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.customerGroupRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [customer-data-group-search-results-interface](#customer-data-group-search-results-interface)

### customerGroupRepositoryV1DeleteByIdDelete
Delete customer group by ID.


```js
t213_vg.customerGroupRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `boolean`: true on success

### customerGroupRepositoryV1GetByIdGet
Get customer group by group ID.


```js
t213_vg.customerGroupRepositoryV1GetByIdGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [customer-data-group-interface](#customer-data-group-interface)

### customerGroupRepositoryV1SavePut
Save customer group.


```js
t213_vg.customerGroupRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * group **required** [customer-data-group-interface](#customer-data-group-interface)

#### Output
* output [customer-data-group-interface](#customer-data-group-interface)

### customerGroupManagementV1IsReadonlyGet
Check if customer group can be deleted.


```js
t213_vg.customerGroupManagementV1IsReadonlyGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `boolean`

### customerAccountManagementV1CreateAccountPost
Create customer account. Perform necessary business operations like sending email.


```js
t213_vg.customerAccountManagementV1CreateAccountPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * customer **required** [customer-data-customer-interface](#customer-data-customer-interface)
    * password `string`
    * redirectUrl `string`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### customerAddressRepositoryV1GetByIdGet
Retrieve customer address.


```js
t213_vg.customerAddressRepositoryV1GetByIdGet({
  "addressId": 0
}, context)
```

#### Input
* input `object`
  * addressId **required** `integer`

#### Output
* output [customer-data-address-interface](#customer-data-address-interface)

### customerAccountManagementV1ResendConfirmationPost
Resend confirmation email.


```js
t213_vg.customerAccountManagementV1ResendConfirmationPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * email **required** `string`
    * redirectUrl `string`
    * websiteId **required** `integer`

#### Output
* output `boolean`: true on success

### customerAccountManagementV1IsEmailAvailablePost
Check if given email is associated with a customer account in given website.


```js
t213_vg.customerAccountManagementV1IsEmailAvailablePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * customerEmail **required** `string`
    * websiteId `integer`: If not set, will use the current websiteId

#### Output
* output `boolean`

### V1.customers.me.get
Get customer by customer ID.


```js
t213_vg.V1.customers.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### V1.customers.me.put
Create or update a customer.


```js
t213_vg.V1.customers.me.put({}, context)
```

#### Input
* input `object`
  * $body `object`
    * customer **required** [customer-data-customer-interface](#customer-data-customer-interface)
    * passwordHash `string`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### customerAccountManagementV1ActivateByIdPut
Activate a customer account using a key that was sent in a confirmation email.


```js
t213_vg.customerAccountManagementV1ActivateByIdPut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * confirmationKey **required** `string`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### V1.customers.me.billingAddress.get
Retrieve default billing address for the given customerId.


```js
t213_vg.V1.customers.me.billingAddress.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [customer-data-address-interface](#customer-data-address-interface)

### customerAccountManagementV1ChangePasswordByIdPut
Change customer password.


```js
t213_vg.customerAccountManagementV1ChangePasswordByIdPut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * currentPassword **required** `string`
    * newPassword **required** `string`

#### Output
* output `boolean`: true on success

### V1.customers.me.shippingAddress.get
Retrieve default shipping address for the given customerId.


```js
t213_vg.V1.customers.me.shippingAddress.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [customer-data-address-interface](#customer-data-address-interface)

### customerAccountManagementV1InitiatePasswordResetPut
Send an email to the customer with a password reset link.


```js
t213_vg.customerAccountManagementV1InitiatePasswordResetPut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * email **required** `string`
    * template **required** `string`
    * websiteId `integer`

#### Output
* output `boolean`: true on success

### customerCustomerRepositoryV1GetListGet
Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.customerCustomerRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [customer-data-customer-search-results-interface](#customer-data-customer-search-results-interface)

### customerAccountManagementV1ValidatePut
Validate customer data.


```js
t213_vg.customerAccountManagementV1ValidatePut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * customer **required** [customer-data-customer-interface](#customer-data-customer-interface)

#### Output
* output [customer-data-validation-results-interface](#customer-data-validation-results-interface)

### customerCustomerRepositoryV1DeleteByIdDelete
Delete customer by ID.


```js
t213_vg.customerCustomerRepositoryV1DeleteByIdDelete({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output `boolean`: true on success

### V1.customers.customerId.get
Get customer by customer ID.


```js
t213_vg.V1.customers.customerId.get({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### V1.customers.customerId.billingAddress.get
Retrieve default billing address for the given customerId.


```js
t213_vg.V1.customers.customerId.billingAddress.get({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output [customer-data-address-interface](#customer-data-address-interface)

### V1.customers.customerId.carts.post
Creates an empty cart and quote for a specified customer.


```js
t213_vg.V1.customers.customerId.carts.post({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`: The customer ID.

#### Output
* output `integer`: Cart ID.

### customerAccountManagementV1GetConfirmationStatusGet
Gets the account confirmation status.


```js
t213_vg.customerAccountManagementV1GetConfirmationStatusGet({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output `string`

### customerAccountManagementV1ValidateResetPasswordLinkTokenGet
Check if password reset token is valid.


```js
t213_vg.customerAccountManagementV1ValidateResetPasswordLinkTokenGet({
  "customerId": 0,
  "resetPasswordLinkToken": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`
  * resetPasswordLinkToken **required** `string`

#### Output
* output `boolean`: True if the token is valid

### customerAccountManagementV1IsReadonlyGet
Check if customer can be deleted.


```js
t213_vg.customerAccountManagementV1IsReadonlyGet({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output `boolean`

### V1.customers.customerId.shippingAddress.get
Retrieve default shipping address for the given customerId.


```js
t213_vg.V1.customers.customerId.shippingAddress.get({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `integer`

#### Output
* output [customer-data-address-interface](#customer-data-address-interface)

### customerAccountManagementV1ActivatePut
Activate a customer account using a key that was sent in a confirmation email.


```js
t213_vg.customerAccountManagementV1ActivatePut({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`
  * $body `object`
    * confirmationKey **required** `string`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### V1.customers.id.put
Create or update a customer.


```js
t213_vg.V1.customers.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * customer **required** [customer-data-customer-interface](#customer-data-customer-interface)
    * passwordHash `string`

#### Output
* output [customer-data-customer-interface](#customer-data-customer-interface)

### directoryCountryInformationAcquirerV1GetCountriesInfoGet
Get all countries and regions information for the store.


```js
t213_vg.directoryCountryInformationAcquirerV1GetCountriesInfoGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [directory-data-country-information-interface](#directory-data-country-information-interface)

### directoryCountryInformationAcquirerV1GetCountryInfoGet
Get country and region information for the store.


```js
t213_vg.directoryCountryInformationAcquirerV1GetCountryInfoGet({
  "countryId": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`

#### Output
* output [directory-data-country-information-interface](#directory-data-country-information-interface)

### directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
Get currency information for the store.


```js
t213_vg.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [directory-data-currency-information-interface](#directory-data-currency-information-interface)

### eavAttributeSetManagementV1CreatePost
Create attribute set from data


```js
t213_vg.eavAttributeSetManagementV1CreatePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * attributeSet **required** [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)
    * entityTypeCode **required** `string`
    * skeletonId **required** `integer`

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### eavAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.eavAttributeSetRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [eav-data-attribute-set-search-results-interface](#eav-data-attribute-set-search-results-interface)

### eavAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID


```js
t213_vg.eavAttributeSetRepositoryV1DeleteByIdDelete({
  "attributeSetId": 0
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `integer`

#### Output
* output `boolean`

### eavAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID


```js
t213_vg.eavAttributeSetRepositoryV1GetGet({
  "attributeSetId": 0
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `integer`

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### eavAttributeSetRepositoryV1SavePut
Save attribute set data


```js
t213_vg.eavAttributeSetRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `string`
  * $body `object`
    * attributeSet **required** [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### giftWrappingWrappingRepositoryV1GetListGet
Return list of gift wrapping data objects based on search criteria


```js
t213_vg.giftWrappingWrappingRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [gift-wrapping-data-wrapping-search-results-interface](#gift-wrapping-data-wrapping-search-results-interface)

### giftWrappingWrappingRepositoryV1SavePost
Create/Update new gift wrapping with data object values


```js
t213_vg.giftWrappingWrappingRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * data **required** [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)
    * storeId `integer`

#### Output
* output [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)

### giftWrappingWrappingRepositoryV1DeleteByIdDelete
Delete gift wrapping


```js
t213_vg.giftWrappingWrappingRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `boolean`

### giftWrappingWrappingRepositoryV1GetGet
Return data object for specified wrapping ID and store.


```js
t213_vg.giftWrappingWrappingRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * storeId `integer`

#### Output
* output [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)

### giftWrappingWrappingRepositoryV1SavePut
Create/Update new gift wrapping with data object values


```js
t213_vg.giftWrappingWrappingRepositoryV1SavePut({
  "wrappingId": ""
}, context)
```

#### Input
* input `object`
  * wrappingId **required** `string`
  * $body `object`
    * data **required** [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)
    * storeId `integer`

#### Output
* output [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)

### giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping


```js
t213_vg.giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * registryId **required** `integer`: The estimate registry id

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### quoteGuestCartManagementV1CreateEmptyCartPost
Enable an customer or guest user to create an empty cart and quote for an anonymous customer.


```js
t213_vg.quoteGuestCartManagementV1CreateEmptyCartPost(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`: Cart ID.

### quoteGuestCartRepositoryV1GetGet
Enable a guest user to return information for a specified cart.


```js
t213_vg.quoteGuestCartRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`

#### Output
* output [quote-data-cart-interface](#quote-data-cart-interface)

### quoteGuestCartManagementV1AssignCustomerPut
Assign a specified customer to a specified shopping cart.


```js
t213_vg.quoteGuestCartManagementV1AssignCustomerPut({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * customerId **required** `integer`: The customer ID.
    * storeId **required** `integer`

#### Output
* output `boolean`

### quoteGuestBillingAddressManagementV1GetGet
Return the billing address for a specified quote.


```js
t213_vg.quoteGuestBillingAddressManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output [quote-data-address-interface](#quote-data-address-interface)

### quoteGuestBillingAddressManagementV1AssignPost
Assign a specified billing address to a specified cart.


```js
t213_vg.quoteGuestBillingAddressManagementV1AssignPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)

#### Output
* output `integer`: Address ID.

### quoteGuestCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals for guest.


```js
t213_vg.quoteGuestCartTotalManagementV1CollectTotalsPut({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * additionalData [quote-data-totals-additional-data-interface](#quote-data-totals-additional-data-interface)
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)
    * shippingCarrierCode `string`: The carrier code.
    * shippingMethodCode `string`: The shipping method code.

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### quoteGuestCouponManagementV1RemoveDelete
Delete a coupon from a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1RemoveDelete({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output `boolean`

### quoteGuestCouponManagementV1GetGet
Return information for a coupon in a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output `string`: The coupon code data.

### quoteGuestCouponManagementV1SetPut
Add a coupon by code to a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1SetPut({
  "cartId": "",
  "couponCode": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * couponCode **required** `string`: The coupon code data.

#### Output
* output `boolean`

### quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * address **required** [quote-data-address-interface](#quote-data-address-interface)

#### Output
* output `array`: An array of shipping methods
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### giftMessageGuestCartRepositoryV1GetGet
Return the gift message for a specified order.


```js
t213_vg.giftMessageGuestCartRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The shopping cart ID.

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### giftMessageGuestCartRepositoryV1SavePost
Set the gift message for an entire order.


```js
t213_vg.giftMessageGuestCartRepositoryV1SavePost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### giftMessageGuestItemRepositoryV1GetGet
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.giftMessageGuestItemRepositoryV1GetGet({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The shopping cart ID.
  * itemId **required** `integer`: The item ID.

#### Output
* output [gift-message-data-message-interface](#gift-message-data-message-interface)

### giftMessageGuestItemRepositoryV1SavePost
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.giftMessageGuestItemRepositoryV1SavePost({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * itemId **required** `integer`: The item ID.
  * $body `object`
    * giftMessage **required** [gift-message-data-message-interface](#gift-message-data-message-interface)

#### Output
* output `boolean`

### quoteGuestCartItemRepositoryV1GetListGet
List items that are assigned to a specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1GetListGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output `array`: Array of items.
  * items [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### quoteGuestCartItemRepositoryV1SavePost
Add the specified item to the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1SavePost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### quoteGuestCartItemRepositoryV1DeleteByIdDelete
Remove the specified item from the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1DeleteByIdDelete({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * itemId **required** `integer`: The item ID of the item to be removed.

#### Output
* output `boolean`

### quoteGuestCartItemRepositoryV1SavePut
Add the specified item to the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1SavePut({
  "cartId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * itemId **required** `string`
  * $body `object`
    * cartItem **required** [quote-data-cart-item-interface](#quote-data-cart-item-interface)

#### Output
* output [quote-data-cart-item-interface](#quote-data-cart-item-interface)

### quoteGuestCartManagementV1PlaceOrderPut
Place an order for a specified cart.


```js
t213_vg.quoteGuestCartManagementV1PlaceOrderPut({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * paymentMethod [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
Get payment information


```js
t213_vg.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`

#### Output
* output [checkout-data-payment-details-interface](#checkout-data-payment-details-interface)

### checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.


```js
t213_vg.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * billingAddress [quote-data-address-interface](#quote-data-address-interface)
    * email **required** `string`
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### quoteGuestPaymentMethodManagementV1GetListGet
List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.quoteGuestPaymentMethodManagementV1GetListGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output `array`: Array of payment methods.
  * items [quote-data-payment-method-interface](#quote-data-payment-method-interface)

### quoteGuestPaymentMethodManagementV1GetGet
Return the payment method for a specified shopping cart.


```js
t213_vg.quoteGuestPaymentMethodManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output [quote-data-payment-interface](#quote-data-payment-interface)

### quoteGuestPaymentMethodManagementV1SetPut
Add a specified payment method to a specified shopping cart.


```js
t213_vg.quoteGuestPaymentMethodManagementV1SetPut({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.
  * $body `object`
    * method **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Payment method ID.

### checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.


```js
t213_vg.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * billingAddress [quote-data-address-interface](#quote-data-address-interface)
    * email **required** `string`
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.

### checkoutGuestShippingInformationManagementV1SaveAddressInformationPost



```js
t213_vg.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * addressInformation **required** [checkout-data-shipping-information-interface](#checkout-data-shipping-information-interface)

#### Output
* output [checkout-data-payment-details-interface](#checkout-data-payment-details-interface)

### quoteGuestShippingMethodManagementV1GetListGet
List applicable shipping methods for a specified quote.


```js
t213_vg.quoteGuestShippingMethodManagementV1GetListGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The shopping cart ID.

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### quoteGuestCartTotalRepositoryV1GetGet
Return quote totals data for a specified cart.


```js
t213_vg.quoteGuestCartTotalRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The cart ID.

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### checkoutGuestTotalsInformationManagementV1CalculatePost
Calculate quote totals based on address and shipping method.


```js
t213_vg.checkoutGuestTotalsInformationManagementV1CalculatePost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * addressInformation **required** [checkout-data-totals-information-interface](#checkout-data-totals-information-interface)

#### Output
* output [quote-data-totals-interface](#quote-data-totals-interface)

### giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping


```js
t213_vg.giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`: The shopping cart ID.
  * $body `object`
    * registryId **required** `integer`: The estimate registry id

#### Output
* output `array`: An array of shipping methods.
  * items [quote-data-shipping-method-interface](#quote-data-shipping-method-interface)

### integrationAdminTokenServiceV1CreateAdminAccessTokenPost
Create access token for admin given the admin credentials.


```js
t213_vg.integrationAdminTokenServiceV1CreateAdminAccessTokenPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * password **required** `string`
    * username **required** `string`

#### Output
* output `string`: Token created

### integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
Create access token for admin given the customer credentials.


```js
t213_vg.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * password **required** `string`
    * username **required** `string`

#### Output
* output `string`: Token created

### salesRefundInvoiceV1ExecutePost
Create refund for invoice


```js
t213_vg.salesRefundInvoiceV1ExecutePost({
  "invoiceId": 0
}, context)
```

#### Input
* input `object`
  * invoiceId **required** `integer`
  * $body `object`
    * appendComment `boolean`
    * arguments [sales-data-creditmemo-creation-arguments-interface](#sales-data-creditmemo-creation-arguments-interface)
    * comment [sales-data-creditmemo-comment-creation-interface](#sales-data-creditmemo-comment-creation-interface)
    * isOnline `boolean`
    * items `array`
      * items [sales-data-creditmemo-item-creation-interface](#sales-data-creditmemo-item-creation-interface)
    * notify `boolean`

#### Output
* output `integer`

### salesInvoiceRepositoryV1GetListGet
Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesInvoiceRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-invoice-search-result-interface](#sales-data-invoice-search-result-interface)

### salesInvoiceRepositoryV1SavePost
Performs persist operations for a specified invoice.


```js
t213_vg.salesInvoiceRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-invoice-interface](#sales-data-invoice-interface)

#### Output
* output [sales-data-invoice-interface](#sales-data-invoice-interface)

### salesInvoiceCommentRepositoryV1SavePost
Performs persist operations for a specified invoice comment.


```js
t213_vg.salesInvoiceCommentRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-invoice-comment-interface](#sales-data-invoice-comment-interface)

#### Output
* output [sales-data-invoice-comment-interface](#sales-data-invoice-comment-interface)

### salesInvoiceRepositoryV1GetGet
Loads a specified invoice.


```js
t213_vg.salesInvoiceRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The invoice ID.

#### Output
* output [sales-data-invoice-interface](#sales-data-invoice-interface)

### salesInvoiceManagementV1SetCapturePost
Sets invoice capture.


```js
t213_vg.salesInvoiceManagementV1SetCapturePost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `string`

### salesInvoiceManagementV1GetCommentsListGet
Lists comments for a specified invoice.


```js
t213_vg.salesInvoiceManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The invoice ID.

#### Output
* output [sales-data-invoice-comment-search-result-interface](#sales-data-invoice-comment-search-result-interface)

### salesInvoiceManagementV1NotifyPost
Emails a user a specified invoice.


```js
t213_vg.salesInvoiceManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The invoice ID.

#### Output
* output `boolean`

### salesInvoiceManagementV1SetVoidPost
Voids a specified invoice.


```js
t213_vg.salesInvoiceManagementV1SetVoidPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The invoice ID.

#### Output
* output `boolean`

### backendModuleServiceV1GetModulesGet
Returns an array of enabled modules


```js
t213_vg.backendModuleServiceV1GetModulesGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### salesInvoiceOrderV1ExecutePost



```js
t213_vg.salesInvoiceOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Input
* input `object`
  * orderId **required** `integer`
  * $body `object`
    * appendComment `boolean`
    * arguments [sales-data-invoice-creation-arguments-interface](#sales-data-invoice-creation-arguments-interface)
    * capture `boolean`
    * comment [sales-data-invoice-comment-creation-interface](#sales-data-invoice-comment-creation-interface)
    * items `array`
      * items [sales-data-invoice-item-creation-interface](#sales-data-invoice-item-creation-interface)
    * notify `boolean`

#### Output
* output `integer`

### salesRefundOrderV1ExecutePost
Create offline refund for order


```js
t213_vg.salesRefundOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Input
* input `object`
  * orderId **required** `integer`
  * $body `object`
    * appendComment `boolean`
    * arguments [sales-data-creditmemo-creation-arguments-interface](#sales-data-creditmemo-creation-arguments-interface)
    * comment [sales-data-creditmemo-comment-creation-interface](#sales-data-creditmemo-comment-creation-interface)
    * items `array`
      * items [sales-data-creditmemo-item-creation-interface](#sales-data-creditmemo-item-creation-interface)
    * notify `boolean`

#### Output
* output `integer`

### salesShipOrderV1ExecutePost
Creates new Shipment for given Order.


```js
t213_vg.salesShipOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Input
* input `object`
  * orderId **required** `integer`
  * $body `object`
    * appendComment `boolean`
    * arguments [sales-data-shipment-creation-arguments-interface](#sales-data-shipment-creation-arguments-interface)
    * comment [sales-data-shipment-comment-creation-interface](#sales-data-shipment-comment-creation-interface)
    * items `array`
      * items [sales-data-shipment-item-creation-interface](#sales-data-shipment-item-creation-interface)
    * notify `boolean`
    * packages `array`
      * items [sales-data-shipment-package-creation-interface](#sales-data-shipment-package-creation-interface)
    * tracks `array`
      * items [sales-data-shipment-track-creation-interface](#sales-data-shipment-track-creation-interface)

#### Output
* output `integer`: Id of created Shipment.

### salesOrderRepositoryV1GetListGet
Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesOrderRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-order-search-result-interface](#sales-data-order-search-result-interface)

### salesOrderRepositoryV1SavePost
Performs persist operations for a specified order.


```js
t213_vg.salesOrderRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-order-interface](#sales-data-order-interface)

#### Output
* output [sales-data-order-interface](#sales-data-order-interface)

### salesOrderRepositoryV1SavePut
Performs persist operations for a specified order.


```js
t213_vg.salesOrderRepositoryV1SavePut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-order-interface](#sales-data-order-interface)

#### Output
* output [sales-data-order-interface](#sales-data-order-interface)

### salesOrderItemRepositoryV1GetListGet
Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesOrderItemRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-order-item-search-result-interface](#sales-data-order-item-search-result-interface)

### salesOrderItemRepositoryV1GetGet
Loads a specified order item.


```js
t213_vg.salesOrderItemRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order item ID.

#### Output
* output [sales-data-order-item-interface](#sales-data-order-item-interface)

### salesOrderRepositoryV1GetGet
Loads a specified order.


```js
t213_vg.salesOrderRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output [sales-data-order-interface](#sales-data-order-interface)

### salesOrderManagementV1CancelPost
Cancels a specified order.


```js
t213_vg.salesOrderManagementV1CancelPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output `boolean`

### salesOrderManagementV1GetCommentsListGet
Lists comments for a specified order.


```js
t213_vg.salesOrderManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output [sales-data-order-status-history-search-result-interface](#sales-data-order-status-history-search-result-interface)

### salesOrderManagementV1AddCommentPost
Adds a comment to a specified order.


```js
t213_vg.salesOrderManagementV1AddCommentPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.
  * $body `object`
    * statusHistory **required** [sales-data-order-status-history-interface](#sales-data-order-status-history-interface)

#### Output
* output `boolean`

### salesOrderManagementV1NotifyPost
Emails a user a specified order.


```js
t213_vg.salesOrderManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output `boolean`

### salesOrderManagementV1HoldPost
Holds a specified order.


```js
t213_vg.salesOrderManagementV1HoldPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output `boolean`

### salesOrderManagementV1GetStatusGet
Gets the status for a specified order.


```js
t213_vg.salesOrderManagementV1GetStatusGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output `string`: Order status.

### salesOrderManagementV1UnHoldPost
Releases a specified order from hold status.


```js
t213_vg.salesOrderManagementV1UnHoldPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The order ID.

#### Output
* output `boolean`

### salesOrderAddressRepositoryV1SavePut
Performs persist operations for a specified order address.


```js
t213_vg.salesOrderAddressRepositoryV1SavePut({
  "parent_id": ""
}, context)
```

#### Input
* input `object`
  * parent_id **required** `string`
  * $body `object`
    * entity **required** [sales-data-order-address-interface](#sales-data-order-address-interface)

#### Output
* output [sales-data-order-address-interface](#sales-data-order-address-interface)

### catalogProductRepositoryV1GetListGet
Get product list


```js
t213_vg.catalogProductRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [catalog-data-product-search-results-interface](#catalog-data-product-search-results-interface)

### catalogProductRepositoryV1SavePost
Create product


```js
t213_vg.catalogProductRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * product **required** [catalog-data-product-interface](#catalog-data-product-interface)
    * saveOptions `boolean`

#### Output
* output [catalog-data-product-interface](#catalog-data-product-interface)

### catalogAttributeSetManagementV1CreatePost
Create attribute set from data


```js
t213_vg.catalogAttributeSetManagementV1CreatePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * attributeSet **required** [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)
    * skeletonId **required** `integer`

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### catalogProductAttributeManagementV1AssignPost
Assign attribute to attribute set


```js
t213_vg.catalogProductAttributeManagementV1AssignPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * attributeCode **required** `string`
    * attributeGroupId **required** `integer`
    * attributeSetId **required** `integer`
    * sortOrder **required** `integer`

#### Output
* output `integer`

### catalogProductAttributeGroupRepositoryV1SavePost
Save attribute group


```js
t213_vg.catalogProductAttributeGroupRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * group **required** [eav-data-attribute-group-interface](#eav-data-attribute-group-interface)

#### Output
* output [eav-data-attribute-group-interface](#eav-data-attribute-group-interface)

### catalogProductAttributeGroupRepositoryV1GetListGet
Retrieve list of attribute groups


```js
t213_vg.catalogProductAttributeGroupRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [eav-data-attribute-group-search-results-interface](#eav-data-attribute-group-search-results-interface)

### catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
Remove attribute group by id


```js
t213_vg.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`

#### Output
* output `boolean`

### catalogAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets


```js
t213_vg.catalogAttributeSetRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [eav-data-attribute-set-search-results-interface](#eav-data-attribute-set-search-results-interface)

### catalogAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID


```js
t213_vg.catalogAttributeSetRepositoryV1DeleteByIdDelete({
  "attributeSetId": 0
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `integer`

#### Output
* output `boolean`

### catalogAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID


```js
t213_vg.catalogAttributeSetRepositoryV1GetGet({
  "attributeSetId": 0
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `integer`

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### catalogAttributeSetRepositoryV1SavePut
Save attribute set data


```js
t213_vg.catalogAttributeSetRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `string`
  * $body `object`
    * attributeSet **required** [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

#### Output
* output [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)

### catalogProductAttributeManagementV1GetAttributesGet
Retrieve related attributes based on given attribute set ID


```js
t213_vg.catalogProductAttributeManagementV1GetAttributesGet({
  "attributeSetId": ""
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

### catalogProductAttributeManagementV1UnassignDelete
Remove attribute from attribute set


```js
t213_vg.catalogProductAttributeManagementV1UnassignDelete({
  "attributeSetId": "",
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `string`
  * attributeCode **required** `string`

#### Output
* output `boolean`

### catalogProductAttributeGroupRepositoryV1SavePut
Save attribute group


```js
t213_vg.catalogProductAttributeGroupRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Input
* input `object`
  * attributeSetId **required** `string`
  * $body `object`
    * group **required** [eav-data-attribute-group-interface](#eav-data-attribute-group-interface)

#### Output
* output [eav-data-attribute-group-interface](#eav-data-attribute-group-interface)

### catalogProductAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type


```js
t213_vg.catalogProductAttributeRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [catalog-data-product-attribute-search-results-interface](#catalog-data-product-attribute-search-results-interface)

### catalogProductAttributeRepositoryV1SavePost
Save attribute data


```js
t213_vg.catalogProductAttributeRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * attribute **required** [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

#### Output
* output [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

### catalogProductAttributeTypesListV1GetItemsGet
Retrieve list of product attribute types


```js
t213_vg.catalogProductAttributeTypesListV1GetItemsGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [catalog-data-product-attribute-type-interface](#catalog-data-product-attribute-type-interface)

### catalogProductAttributeRepositoryV1DeleteByIdDelete
Delete Attribute by id


```js
t213_vg.catalogProductAttributeRepositoryV1DeleteByIdDelete({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output `boolean`

### catalogProductAttributeRepositoryV1GetGet
Retrieve specific attribute


```js
t213_vg.catalogProductAttributeRepositoryV1GetGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

### catalogProductAttributeRepositoryV1SavePut
Save attribute data


```js
t213_vg.catalogProductAttributeRepositoryV1SavePut({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`
  * $body `object`
    * attribute **required** [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

#### Output
* output [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

### catalogProductAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options


```js
t213_vg.catalogProductAttributeOptionManagementV1GetItemsGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output `array`
  * items [eav-data-attribute-option-interface](#eav-data-attribute-option-interface)

### catalogProductAttributeOptionManagementV1AddPost
Add option to attribute


```js
t213_vg.catalogProductAttributeOptionManagementV1AddPost({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`
  * $body `object`
    * option **required** [eav-data-attribute-option-interface](#eav-data-attribute-option-interface)

#### Output
* output `boolean`

### catalogProductAttributeOptionManagementV1DeleteDelete
Delete option from attribute


```js
t213_vg.catalogProductAttributeOptionManagementV1DeleteDelete({
  "attributeCode": "",
  "optionId": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`
  * optionId **required** `string`

#### Output
* output `boolean`

### downloadableSampleRepositoryV1DeleteDelete
Delete downloadable sample


```js
t213_vg.downloadableSampleRepositoryV1DeleteDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `boolean`

### downloadableLinkRepositoryV1DeleteDelete
Delete downloadable link


```js
t213_vg.downloadableLinkRepositoryV1DeleteDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `boolean`

### catalogProductLinkTypeListV1GetItemsGet
Retrieve information about available product link types


```js
t213_vg.catalogProductLinkTypeListV1GetItemsGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [catalog-data-product-link-type-interface](#catalog-data-product-link-type-interface)

### catalogProductLinkTypeListV1GetItemAttributesGet
Provide a list of the product link type attributes


```js
t213_vg.catalogProductLinkTypeListV1GetItemAttributesGet({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-link-attribute-interface](#catalog-data-product-link-attribute-interface)

### catalogProductMediaAttributeManagementV1GetListGet
Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.


```js
t213_vg.catalogProductMediaAttributeManagementV1GetListGet({
  "attributeSetName": ""
}, context)
```

#### Input
* input `object`
  * attributeSetName **required** `string`

#### Output
* output `array`: list of media attributes
  * items [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)

### catalogProductCustomOptionRepositoryV1SavePost
Save Custom Option


```js
t213_vg.catalogProductCustomOptionRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * option **required** [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

#### Output
* output [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

### catalogProductCustomOptionTypeListV1GetItemsGet
Get custom option types


```js
t213_vg.catalogProductCustomOptionTypeListV1GetItemsGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [catalog-data-product-custom-option-type-interface](#catalog-data-product-custom-option-type-interface)

### catalogProductCustomOptionRepositoryV1SavePut
Save Custom Option


```js
t213_vg.catalogProductCustomOptionRepositoryV1SavePut({
  "optionId": ""
}, context)
```

#### Input
* input `object`
  * optionId **required** `string`
  * $body `object`
    * option **required** [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

#### Output
* output [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

### catalogProductTypeListV1GetProductTypesGet
Retrieve available product types


```js
t213_vg.catalogProductTypeListV1GetProductTypesGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [catalog-data-product-type-interface](#catalog-data-product-type-interface)

### catalogInventoryStockRegistryV1UpdateStockItemBySkuPut



```js
t213_vg.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut({
  "productSku": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * productSku **required** `string`
  * itemId **required** `string`
  * $body `object`
    * stockItem **required** [catalog-inventory-data-stock-item-interface](#catalog-inventory-data-stock-item-interface)

#### Output
* output `integer`

### catalogProductRepositoryV1DeleteByIdDelete



```js
t213_vg.catalogProductRepositoryV1DeleteByIdDelete({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `boolean`: Will returned True if deleted

### catalogProductRepositoryV1GetGet
Get info about product by product SKU


```js
t213_vg.catalogProductRepositoryV1GetGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * editMode `boolean`
  * storeId `integer`
  * forceReload `boolean`

#### Output
* output [catalog-data-product-interface](#catalog-data-product-interface)

### catalogProductRepositoryV1SavePut
Create product


```js
t213_vg.catalogProductRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * product **required** [catalog-data-product-interface](#catalog-data-product-interface)
    * saveOptions `boolean`

#### Output
* output [catalog-data-product-interface](#catalog-data-product-interface)

### downloadableLinkRepositoryV1GetListGet
List of links with associated samples


```js
t213_vg.downloadableLinkRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [downloadable-data-link-interface](#downloadable-data-link-interface)

### downloadableLinkRepositoryV1SavePost
Update downloadable link of the given product (link type and its resources cannot be changed)


```js
t213_vg.downloadableLinkRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * isGlobalScopeContent `boolean`
    * link **required** [downloadable-data-link-interface](#downloadable-data-link-interface)

#### Output
* output `integer`

### downloadableSampleRepositoryV1GetListGet
List of samples for downloadable product


```js
t213_vg.downloadableSampleRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [downloadable-data-sample-interface](#downloadable-data-sample-interface)

### downloadableSampleRepositoryV1SavePost
Update downloadable sample of the given product


```js
t213_vg.downloadableSampleRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * isGlobalScopeContent `boolean`
    * sample **required** [downloadable-data-sample-interface](#downloadable-data-sample-interface)

#### Output
* output `integer`

### downloadableSampleRepositoryV1SavePut
Update downloadable sample of the given product


```js
t213_vg.downloadableSampleRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `string`
  * $body `object`
    * isGlobalScopeContent `boolean`
    * sample **required** [downloadable-data-sample-interface](#downloadable-data-sample-interface)

#### Output
* output `integer`

### downloadableLinkRepositoryV1SavePut
Update downloadable link of the given product (link type and its resources cannot be changed)


```js
t213_vg.downloadableLinkRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * id **required** `string`
  * $body `object`
    * isGlobalScopeContent `boolean`
    * link **required** [downloadable-data-link-interface](#downloadable-data-link-interface)

#### Output
* output `integer`

### catalogProductTierPriceManagementV1GetListGet
Get tier price of product


```js
t213_vg.catalogProductTierPriceManagementV1GetListGet({
  "sku": "",
  "customerGroupId": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * customerGroupId **required** `string`: 'all' can be used to specify 'ALL GROUPS'

#### Output
* output `array`
  * items [catalog-data-product-tier-price-interface](#catalog-data-product-tier-price-interface)

### catalogProductTierPriceManagementV1RemoveDelete
Remove tier price from product


```js
t213_vg.catalogProductTierPriceManagementV1RemoveDelete({
  "sku": "",
  "customerGroupId": "",
  "qty": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * customerGroupId **required** `string`: 'all' can be used to specify 'ALL GROUPS'
  * qty **required** `number`

#### Output
* output `boolean`

### catalogProductTierPriceManagementV1AddPost
Create tier price for product


```js
t213_vg.catalogProductTierPriceManagementV1AddPost({
  "sku": "",
  "customerGroupId": "",
  "price": 0,
  "qty": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * customerGroupId **required** `string`: 'all' can be used to specify 'ALL GROUPS'
  * price **required** `number`
  * qty **required** `number`

#### Output
* output `boolean`

### catalogProductLinkManagementV1SetProductLinksPost
Assign a product link to another product


```js
t213_vg.catalogProductLinkManagementV1SetProductLinksPost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * items **required** `array`
      * items [catalog-data-product-link-interface](#catalog-data-product-link-interface)

#### Output
* output `boolean`

### catalogProductLinkRepositoryV1SavePut
Save product link


```js
t213_vg.catalogProductLinkRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * entity **required** [catalog-data-product-link-interface](#catalog-data-product-link-interface)

#### Output
* output `boolean`

### catalogProductLinkManagementV1GetLinkedItemsByTypeGet
Provide the list of links for a specific product


```js
t213_vg.catalogProductLinkManagementV1GetLinkedItemsByTypeGet({
  "sku": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * type **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-link-interface](#catalog-data-product-link-interface)

### catalogProductLinkRepositoryV1DeleteByIdDelete



```js
t213_vg.catalogProductLinkRepositoryV1DeleteByIdDelete({
  "sku": "",
  "type": "",
  "linkedProductSku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * type **required** `string`
  * linkedProductSku **required** `string`

#### Output
* output `boolean`

### catalogProductAttributeMediaGalleryManagementV1GetListGet
Retrieve the list of gallery entries associated with given product


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-attribute-media-gallery-entry-interface](#catalog-data-product-attribute-media-gallery-entry-interface)

### catalogProductAttributeMediaGalleryManagementV1CreatePost
Create new gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1CreatePost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * entry **required** [catalog-data-product-attribute-media-gallery-entry-interface](#catalog-data-product-attribute-media-gallery-entry-interface)

#### Output
* output `integer`: gallery entry ID

### catalogProductAttributeMediaGalleryManagementV1RemoveDelete
Remove gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1RemoveDelete({
  "sku": "",
  "entryId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * entryId **required** `integer`

#### Output
* output `boolean`

### catalogProductAttributeMediaGalleryManagementV1GetGet
Return information about gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1GetGet({
  "sku": "",
  "entryId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * entryId **required** `integer`

#### Output
* output [catalog-data-product-attribute-media-gallery-entry-interface](#catalog-data-product-attribute-media-gallery-entry-interface)

### catalogProductAttributeMediaGalleryManagementV1UpdatePut
Update gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1UpdatePut({
  "sku": "",
  "entryId": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * entryId **required** `string`
  * $body `object`
    * entry **required** [catalog-data-product-attribute-media-gallery-entry-interface](#catalog-data-product-attribute-media-gallery-entry-interface)

#### Output
* output `boolean`

### catalogProductCustomOptionRepositoryV1GetListGet
Get the list of custom options for a specific product


```js
t213_vg.catalogProductCustomOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`

#### Output
* output `array`
  * items [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

### catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete



```js
t213_vg.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete({
  "sku": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`

#### Output
* output `boolean`

### catalogProductCustomOptionRepositoryV1GetGet
Get custom option for a specific product


```js
t213_vg.catalogProductCustomOptionRepositoryV1GetGet({
  "sku": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * optionId **required** `integer`

#### Output
* output [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)

### catalogProductWebsiteLinkRepositoryV1SavePost
Assign a product to the website


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * productWebsiteLink **required** [catalog-data-product-website-link-interface](#catalog-data-product-website-link-interface)

#### Output
* output `boolean`: will returned True if website successfully assigned to product

### catalogProductWebsiteLinkRepositoryV1SavePut
Assign a product to the website


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * $body `object`
    * productWebsiteLink **required** [catalog-data-product-website-link-interface](#catalog-data-product-website-link-interface)

#### Output
* output `boolean`: will returned True if website successfully assigned to product

### catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete
Remove the website assignment from the product by product sku


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete({
  "sku": "",
  "websiteId": 0
}, context)
```

#### Input
* input `object`
  * sku **required** `string`
  * websiteId **required** `integer`

#### Output
* output `boolean`: will returned True if website successfully unassigned from product

### rmaRmaManagementV1SearchGet
Return list of rma data objects based on search criteria


```js
t213_vg.rmaRmaManagementV1SearchGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [rma-data-rma-search-result-interface](#rma-data-rma-search-result-interface)

### rmaRmaManagementV1SaveRmaPost
Save RMA


```js
t213_vg.rmaRmaManagementV1SaveRmaPost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * rmaDataObject **required** [rma-data-rma-interface](#rma-data-rma-interface)

#### Output
* output [rma-data-rma-interface](#rma-data-rma-interface)

### rmaRmaRepositoryV1DeleteDelete
Delete RMA


```js
t213_vg.rmaRmaRepositoryV1DeleteDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * rmaDataObject **required** [rma-data-rma-interface](#rma-data-rma-interface)

#### Output
* output `boolean`

### rmaRmaRepositoryV1GetGet
Return data object for specified RMA id


```js
t213_vg.rmaRmaRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [rma-data-rma-interface](#rma-data-rma-interface)

### rmaRmaManagementV1SaveRmaPut
Save RMA


```js
t213_vg.rmaRmaManagementV1SaveRmaPut({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * rmaDataObject **required** [rma-data-rma-interface](#rma-data-rma-interface)

#### Output
* output [rma-data-rma-interface](#rma-data-rma-interface)

### rmaCommentManagementV1CommentsListGet
Comments list


```js
t213_vg.rmaCommentManagementV1CommentsListGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [rma-data-comment-search-result-interface](#rma-data-comment-search-result-interface)

### rmaCommentManagementV1AddCommentPost
Add comment


```js
t213_vg.rmaCommentManagementV1AddCommentPost({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * data **required** [rma-data-comment-interface](#rma-data-comment-interface)

#### Output
* output `boolean`

### rmaTrackManagementV1GetShippingLabelPdfGet
Get shipping label int the PDF format


```js
t213_vg.rmaTrackManagementV1GetShippingLabelPdfGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output `string`

### rmaTrackManagementV1GetTracksGet
Get track list


```js
t213_vg.rmaTrackManagementV1GetTracksGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [rma-data-track-search-result-interface](#rma-data-track-search-result-interface)

### rmaTrackManagementV1AddTrackPost
Add track


```js
t213_vg.rmaTrackManagementV1AddTrackPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * $body `object`
    * track **required** [rma-data-track-interface](#rma-data-track-interface)

#### Output
* output `boolean`

### rmaTrackManagementV1RemoveTrackByIdDelete
Remove track by id


```js
t213_vg.rmaTrackManagementV1RemoveTrackByIdDelete({
  "id": 0,
  "trackId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * trackId **required** `integer`

#### Output
* output `boolean`

### rmaRmaAttributesManagementV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.rmaRmaAttributesManagementV1GetAllAttributesMetadataGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet
Get custom attribute metadata for the given Data object's attribute set


```js
t213_vg.rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet({}, context)
```

#### Input
* input `object`
  * dataObjectClassName `string`: Data object class name

#### Output
* output `array`
  * items [framework-metadata-object-interface](#framework-metadata-object-interface)

### rmaRmaAttributesManagementV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.rmaRmaAttributesManagementV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Input
* input `object`
  * formCode **required** `string`

#### Output
* output `array`
  * items [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### rmaRmaAttributesManagementV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.rmaRmaAttributesManagementV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Input
* input `object`
  * attributeCode **required** `string`

#### Output
* output [customer-data-attribute-metadata-interface](#customer-data-attribute-metadata-interface)

### rewardRewardManagementV1SetPost
Set reward points to quote


```js
t213_vg.rewardRewardManagementV1SetPost(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `boolean`

### salesRuleRuleRepositoryV1SavePost
Save sales rule.


```js
t213_vg.salesRuleRuleRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * rule **required** [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)

#### Output
* output [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)

### salesRuleRuleRepositoryV1GetListGet
Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesRuleRuleRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-rule-data-rule-search-result-interface](#sales-rule-data-rule-search-result-interface)

### salesRuleRuleRepositoryV1DeleteByIdDelete
Delete rule by ID.


```js
t213_vg.salesRuleRuleRepositoryV1DeleteByIdDelete({
  "ruleId": 0
}, context)
```

#### Input
* input `object`
  * ruleId **required** `integer`

#### Output
* output `boolean`: true on success

### salesRuleRuleRepositoryV1GetByIdGet
Get rule by ID.


```js
t213_vg.salesRuleRuleRepositoryV1GetByIdGet({
  "ruleId": 0
}, context)
```

#### Input
* input `object`
  * ruleId **required** `integer`

#### Output
* output [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)

### salesRuleRuleRepositoryV1SavePut
Save sales rule.


```js
t213_vg.salesRuleRuleRepositoryV1SavePut({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`
  * $body `object`
    * rule **required** [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)

#### Output
* output [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)

### searchV1SearchGet
Make Full Text Search and return found Documents


```js
t213_vg.searchV1SearchGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[requestName] `string`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [framework-search-search-result-interface](#framework-search-search-result-interface)

### salesShipmentRepositoryV1SavePost
Performs persist operations for a specified shipment.


```js
t213_vg.salesShipmentRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-shipment-interface](#sales-data-shipment-interface)

#### Output
* output [sales-data-shipment-interface](#sales-data-shipment-interface)

### salesShipmentTrackRepositoryV1SavePost
Performs persist operations for a specified shipment track.


```js
t213_vg.salesShipmentTrackRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * entity **required** [sales-data-shipment-track-interface](#sales-data-shipment-track-interface)

#### Output
* output [sales-data-shipment-track-interface](#sales-data-shipment-track-interface)

### salesShipmentTrackRepositoryV1DeleteByIdDelete
Deletes a specified shipment track by ID.


```js
t213_vg.salesShipmentTrackRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The shipment track ID.

#### Output
* output `boolean`

### salesShipmentRepositoryV1GetGet
Loads a specified shipment.


```js
t213_vg.salesShipmentRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The shipment ID.

#### Output
* output [sales-data-shipment-interface](#sales-data-shipment-interface)

### salesShipmentManagementV1GetCommentsListGet
Lists comments for a specified shipment.


```js
t213_vg.salesShipmentManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The shipment ID.

#### Output
* output [sales-data-shipment-comment-search-result-interface](#sales-data-shipment-comment-search-result-interface)

### salesShipmentCommentRepositoryV1SavePost
Performs persist operations for a specified shipment comment.


```js
t213_vg.salesShipmentCommentRepositoryV1SavePost({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $body `object`
    * entity **required** [sales-data-shipment-comment-interface](#sales-data-shipment-comment-interface)

#### Output
* output [sales-data-shipment-comment-interface](#sales-data-shipment-comment-interface)

### salesShipmentManagementV1NotifyPost
Emails user a specified shipment.


```js
t213_vg.salesShipmentManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The shipment ID.

#### Output
* output `boolean`

### salesShipmentManagementV1GetLabelGet
Gets a specified shipment label.


```js
t213_vg.salesShipmentManagementV1GetLabelGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The shipment label ID.

#### Output
* output `string`: Shipment label.

### salesShipmentRepositoryV1GetListGet
Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesShipmentRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-shipment-search-result-interface](#sales-data-shipment-search-result-interface)

### catalogInventoryStockRegistryV1GetLowStockItemsGet
Retrieves a list of SKU's with low inventory qty


```js
t213_vg.catalogInventoryStockRegistryV1GetLowStockItemsGet({
  "scopeId": 0,
  "qty": 0
}, context)
```

#### Input
* input `object`
  * scopeId **required** `integer`
  * qty **required** `number`
  * currentPage `integer`
  * pageSize `integer`

#### Output
* output [catalog-inventory-data-stock-status-collection-interface](#catalog-inventory-data-stock-status-collection-interface)

### catalogInventoryStockRegistryV1GetStockItemBySkuGet



```js
t213_vg.catalogInventoryStockRegistryV1GetStockItemBySkuGet({
  "productSku": ""
}, context)
```

#### Input
* input `object`
  * productSku **required** `string`
  * scopeId `integer`

#### Output
* output [catalog-inventory-data-stock-item-interface](#catalog-inventory-data-stock-item-interface)

### catalogInventoryStockRegistryV1GetStockStatusBySkuGet



```js
t213_vg.catalogInventoryStockRegistryV1GetStockStatusBySkuGet({
  "productSku": ""
}, context)
```

#### Input
* input `object`
  * productSku **required** `string`
  * scopeId `integer`

#### Output
* output [catalog-inventory-data-stock-status-interface](#catalog-inventory-data-stock-status-interface)

### storeStoreConfigManagerV1GetStoreConfigsGet



```js
t213_vg.storeStoreConfigManagerV1GetStoreConfigsGet({}, context)
```

#### Input
* input `object`
  * storeCodes `array`

#### Output
* output `array`
  * items [store-data-store-config-interface](#store-data-store-config-interface)

### storeGroupRepositoryV1GetListGet
Retrieve list of all groups


```js
t213_vg.storeGroupRepositoryV1GetListGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [store-data-group-interface](#store-data-group-interface)

### storeStoreRepositoryV1GetListGet
Retrieve list of all stores


```js
t213_vg.storeStoreRepositoryV1GetListGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [store-data-store-interface](#store-data-store-interface)

### storeWebsiteRepositoryV1GetListGet
Retrieve list of all websites


```js
t213_vg.storeWebsiteRepositoryV1GetListGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [store-data-website-interface](#store-data-website-interface)

### taxTaxClassRepositoryV1SavePost
Create a Tax Class


```js
t213_vg.taxTaxClassRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * taxClass **required** [tax-data-tax-class-interface](#tax-data-tax-class-interface)

#### Output
* output `string`: id for the newly created Tax class

### taxTaxClassRepositoryV1GetListGet
Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxClassRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [tax-data-tax-class-search-results-interface](#tax-data-tax-class-search-results-interface)

### taxTaxClassRepositoryV1SavePut
Create a Tax Class


```js
t213_vg.taxTaxClassRepositoryV1SavePut({
  "classId": ""
}, context)
```

#### Input
* input `object`
  * classId **required** `string`
  * $body `object`
    * taxClass **required** [tax-data-tax-class-interface](#tax-data-tax-class-interface)

#### Output
* output `string`: id for the newly created Tax class

### taxTaxClassRepositoryV1DeleteByIdDelete
Delete a tax class with the given tax class id.


```js
t213_vg.taxTaxClassRepositoryV1DeleteByIdDelete({
  "taxClassId": 0
}, context)
```

#### Input
* input `object`
  * taxClassId **required** `integer`

#### Output
* output `boolean`: True if the tax class was deleted, false otherwise

### taxTaxClassRepositoryV1GetGet
Get a tax class with the given tax class id.


```js
t213_vg.taxTaxClassRepositoryV1GetGet({
  "taxClassId": 0
}, context)
```

#### Input
* input `object`
  * taxClassId **required** `integer`

#### Output
* output [tax-data-tax-class-interface](#tax-data-tax-class-interface)

### taxTaxRateRepositoryV1SavePost
Create or update tax rate


```js
t213_vg.taxTaxRateRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * taxRate **required** [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)

#### Output
* output [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)

### taxTaxRateRepositoryV1SavePut
Create or update tax rate


```js
t213_vg.taxTaxRateRepositoryV1SavePut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * taxRate **required** [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)

#### Output
* output [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)

### taxTaxRateRepositoryV1GetListGet
Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxRateRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [tax-data-tax-rate-search-results-interface](#tax-data-tax-rate-search-results-interface)

### taxTaxRateRepositoryV1DeleteByIdDelete
Delete tax rate


```js
t213_vg.taxTaxRateRepositoryV1DeleteByIdDelete({
  "rateId": 0
}, context)
```

#### Input
* input `object`
  * rateId **required** `integer`

#### Output
* output `boolean`

### taxTaxRateRepositoryV1GetGet
Get tax rate


```js
t213_vg.taxTaxRateRepositoryV1GetGet({
  "rateId": 0
}, context)
```

#### Input
* input `object`
  * rateId **required** `integer`

#### Output
* output [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)

### taxTaxRuleRepositoryV1SavePost
Save TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1SavePost({}, context)
```

#### Input
* input `object`
  * $body `object`
    * rule **required** [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)

#### Output
* output [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)

### taxTaxRuleRepositoryV1SavePut
Save TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1SavePut({}, context)
```

#### Input
* input `object`
  * $body `object`
    * rule **required** [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)

#### Output
* output [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)

### taxTaxRuleRepositoryV1GetListGet
Search TaxRules This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxRuleRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [tax-data-tax-rule-search-results-interface](#tax-data-tax-rule-search-results-interface)

### taxTaxRuleRepositoryV1DeleteByIdDelete
Delete TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1DeleteByIdDelete({
  "ruleId": 0
}, context)
```

#### Input
* input `object`
  * ruleId **required** `integer`

#### Output
* output `boolean`

### taxTaxRuleRepositoryV1GetGet
Get TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1GetGet({
  "ruleId": 0
}, context)
```

#### Input
* input `object`
  * ruleId **required** `integer`

#### Output
* output [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)

### salesTransactionRepositoryV1GetListGet
Lists transactions that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TransactionRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesTransactionRepositoryV1GetListGet({}, context)
```

#### Input
* input `object`
  * searchCriteria[filterGroups][][filters][][field] `string`: Field
  * searchCriteria[filterGroups][][filters][][value] `string`: Value
  * searchCriteria[filterGroups][][filters][][conditionType] `string`: Condition type
  * searchCriteria[sortOrders][][field] `string`: Sorting field.
  * searchCriteria[sortOrders][][direction] `string`: Sorting direction.
  * searchCriteria[pageSize] `integer`: Page size.
  * searchCriteria[currentPage] `integer`: Current page.

#### Output
* output [sales-data-transaction-search-result-interface](#sales-data-transaction-search-result-interface)

### salesTransactionRepositoryV1GetGet
Loads a specified transaction.


```js
t213_vg.salesTransactionRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The transaction ID.

#### Output
* output [sales-data-transaction-interface](#sales-data-transaction-interface)

### worldpayGuestPaymentInformationManagementProxyV1SavePaymentInformationAndPlaceOrderPost
Proxy handler for guest place order


```js
t213_vg.worldpayGuestPaymentInformationManagementProxyV1SavePaymentInformationAndPlaceOrderPost({
  "cartId": ""
}, context)
```

#### Input
* input `object`
  * cartId **required** `string`
  * $body `object`
    * billingAddress [quote-data-address-interface](#quote-data-address-interface)
    * email **required** `string`
    * paymentMethod **required** [quote-data-payment-interface](#quote-data-payment-interface)

#### Output
* output `integer`: Order ID.



## Definitions

### bundle-data-bundle-option-extension-interface
* bundle-data-bundle-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface

### bundle-data-bundle-option-interface
* bundle-data-bundle-option-interface `object`: Interface BundleOptionInterface
  * extension_attributes [bundle-data-bundle-option-extension-interface](#bundle-data-bundle-option-extension-interface)
  * option_id **required** `integer`: Bundle option id.
  * option_qty **required** `integer`: Bundle option quantity.
  * option_selections **required** `array`: Bundle option selection ids.
    * items `integer`

### bundle-data-link-extension-interface
* bundle-data-link-extension-interface `object`: ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface

### bundle-data-link-interface
* bundle-data-link-interface `object`: Interface LinkInterface
  * can_change_quantity `integer`: Whether quantity could be changed
  * extension_attributes [bundle-data-link-extension-interface](#bundle-data-link-extension-interface)
  * id `string`: The identifier
  * is_default **required** `boolean`: Is default
  * option_id `integer`: Option id
  * position `integer`: Position
  * price **required** `number`: Price
  * price_type **required** `integer`: Price type
  * qty `number`: Qty
  * sku `string`: Linked product sku

### bundle-data-option-extension-interface
* bundle-data-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface

### bundle-data-option-interface
* bundle-data-option-interface `object`: Interface OptionInterface
  * extension_attributes [bundle-data-option-extension-interface](#bundle-data-option-extension-interface)
  * option_id `integer`: Option id
  * position `integer`: Option position
  * product_links `array`: Product links
    * items [bundle-data-link-interface](#bundle-data-link-interface)
  * required `boolean`: Is required option
  * sku `string`: Product sku
  * title `string`: Option title
  * type `string`: Input type

### bundle-data-option-type-extension-interface
* bundle-data-option-type-extension-interface `object`: ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionTypeInterface

### bundle-data-option-type-interface
* bundle-data-option-type-interface `object`: Interface OptionTypeInterface
  * code **required** `string`: Type code
  * extension_attributes [bundle-data-option-type-extension-interface](#bundle-data-option-type-extension-interface)
  * label **required** `string`: Type label

### catalog-data-category-attribute-interface
* catalog-data-category-attribute-interface `object`
  * apply_to `array`: Apply to value for the element
    * items `string`
  * attribute_code **required** `string`: Code of the attribute.
  * attribute_id `integer`: Id of the attribute.
  * backend_model `string`: Backend model
  * backend_type `string`: Backend type.
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * default_frontend_label `string`: Frontend label for default store
  * default_value `string`: Default value for the element.
  * entity_type_id `string`: Entity type id
  * extension_attributes [catalog-data-eav-attribute-extension-interface](#catalog-data-eav-attribute-extension-interface)
  * frontend_class `string`: Frontend class of attribute
  * frontend_input **required** `string`: HTML for input element.
  * frontend_labels **required** `array`: Frontend label for each store
    * items [eav-data-attribute-frontend-label-interface](#eav-data-attribute-frontend-label-interface)
  * is_comparable `string`: The attribute can be compared on the frontend
  * is_filterable `boolean`: It used in layered navigation
  * is_filterable_in_grid `boolean`: It is filterable in catalog product grid
  * is_filterable_in_search `boolean`: It is used in search results layered navigation
  * is_html_allowed_on_front `boolean`: The HTML tags are allowed on the frontend
  * is_required **required** `boolean`: Attribute is required.
  * is_searchable `string`: The attribute can be used in Quick Search
  * is_unique `string`: This is a unique attribute
  * is_used_for_promo_rules `string`: The attribute can be used for promo rules
  * is_used_in_grid `boolean`: It is used in catalog product grid
  * is_user_defined `boolean`: Current attribute has been defined by a user.
  * is_visible `boolean`: Attribute is visible on frontend.
  * is_visible_in_advanced_search `string`: The attribute can be used in Advanced Search
  * is_visible_in_grid `boolean`: It is visible in catalog product grid
  * is_visible_on_front `string`: The attribute is visible on the frontend
  * is_wysiwyg_enabled `boolean`: WYSIWYG flag
  * note `string`: The note attribute for the element.
  * options `array`: Options of the attribute (key => value pairs for select)
    * items [eav-data-attribute-option-interface](#eav-data-attribute-option-interface)
  * position `integer`: Position
  * scope `string`: Attribute scope
  * source_model `string`: Source model
  * used_for_sort_by `boolean`: It is used for sorting in product listing
  * used_in_product_listing `string`: The attribute can be used in product listing
  * validation_rules `array`: Validation rules.
    * items [eav-data-attribute-validation-rule-interface](#eav-data-attribute-validation-rule-interface)

### catalog-data-category-attribute-search-results-interface
* catalog-data-category-attribute-search-results-interface `object`
  * items **required** `array`: Attributes list.
    * items [catalog-data-category-attribute-interface](#catalog-data-category-attribute-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### catalog-data-category-extension-interface
* catalog-data-category-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryInterface

### catalog-data-category-interface
* catalog-data-category-interface `object`
  * available_sort_by `array`
    * items `string`
  * children `string`
  * created_at `string`
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * extension_attributes [catalog-data-category-extension-interface](#catalog-data-category-extension-interface)
  * id `integer`
  * include_in_menu `boolean`
  * is_active `boolean`: Whether category is active
  * level `integer`: Category level
  * name **required** `string`: Category name
  * parent_id `integer`: Parent category ID
  * path `string`
  * position `integer`: Category position
  * updated_at `string`

### catalog-data-category-product-link-extension-interface
* catalog-data-category-product-link-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryProductLinkInterface

### catalog-data-category-product-link-interface
* catalog-data-category-product-link-interface `object`
  * category_id **required** `string`: Category id
  * extension_attributes [catalog-data-category-product-link-extension-interface](#catalog-data-category-product-link-extension-interface)
  * position `integer`
  * sku `string`

### catalog-data-category-tree-interface
* catalog-data-category-tree-interface `object`
  * children_data **required** `array`
    * items [catalog-data-category-tree-interface](#catalog-data-category-tree-interface)
  * id `integer`
  * is_active **required** `boolean`: Whether category is active
  * level **required** `integer`: Category level
  * name **required** `string`: Category name
  * parent_id **required** `integer`: Parent category ID
  * position **required** `integer`: Category position
  * product_count **required** `integer`: Product count

### catalog-data-custom-option-extension-interface
* catalog-data-custom-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface
  * file_info [framework-data-image-content-interface](#framework-data-image-content-interface)

### catalog-data-custom-option-interface
* catalog-data-custom-option-interface `object`: Interface CustomOptionInterface
  * extension_attributes [catalog-data-custom-option-extension-interface](#catalog-data-custom-option-extension-interface)
  * option_id **required** `string`: Option id
  * option_value **required** `string`: Option value

### catalog-data-eav-attribute-extension-interface
* catalog-data-eav-attribute-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\EavAttributeInterface

### catalog-data-product-attribute-interface
* catalog-data-product-attribute-interface `object`
  * apply_to `array`: Apply to value for the element
    * items `string`
  * attribute_code **required** `string`: Code of the attribute.
  * attribute_id `integer`: Id of the attribute.
  * backend_model `string`: Backend model
  * backend_type `string`: Backend type.
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * default_frontend_label `string`: Frontend label for default store
  * default_value `string`: Default value for the element.
  * entity_type_id `string`: Entity type id
  * extension_attributes [catalog-data-eav-attribute-extension-interface](#catalog-data-eav-attribute-extension-interface)
  * frontend_class `string`: Frontend class of attribute
  * frontend_input **required** `string`: HTML for input element.
  * frontend_labels **required** `array`: Frontend label for each store
    * items [eav-data-attribute-frontend-label-interface](#eav-data-attribute-frontend-label-interface)
  * is_comparable `string`: The attribute can be compared on the frontend
  * is_filterable `boolean`: It used in layered navigation
  * is_filterable_in_grid `boolean`: It is filterable in catalog product grid
  * is_filterable_in_search `boolean`: It is used in search results layered navigation
  * is_html_allowed_on_front `boolean`: The HTML tags are allowed on the frontend
  * is_required **required** `boolean`: Attribute is required.
  * is_searchable `string`: The attribute can be used in Quick Search
  * is_unique `string`: This is a unique attribute
  * is_used_for_promo_rules `string`: The attribute can be used for promo rules
  * is_used_in_grid `boolean`: It is used in catalog product grid
  * is_user_defined `boolean`: Current attribute has been defined by a user.
  * is_visible `boolean`: Attribute is visible on frontend.
  * is_visible_in_advanced_search `string`: The attribute can be used in Advanced Search
  * is_visible_in_grid `boolean`: It is visible in catalog product grid
  * is_visible_on_front `string`: The attribute is visible on the frontend
  * is_wysiwyg_enabled `boolean`: WYSIWYG flag
  * note `string`: The note attribute for the element.
  * options `array`: Options of the attribute (key => value pairs for select)
    * items [eav-data-attribute-option-interface](#eav-data-attribute-option-interface)
  * position `integer`: Position
  * scope `string`: Attribute scope
  * source_model `string`: Source model
  * used_for_sort_by `boolean`: It is used for sorting in product listing
  * used_in_product_listing `string`: The attribute can be used in product listing
  * validation_rules `array`: Validation rules.
    * items [eav-data-attribute-validation-rule-interface](#eav-data-attribute-validation-rule-interface)

### catalog-data-product-attribute-media-gallery-entry-extension-interface
* catalog-data-product-attribute-media-gallery-entry-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface
  * video_content [framework-data-video-content-interface](#framework-data-video-content-interface)

### catalog-data-product-attribute-media-gallery-entry-interface
* catalog-data-product-attribute-media-gallery-entry-interface `object`
  * content [framework-data-image-content-interface](#framework-data-image-content-interface)
  * disabled **required** `boolean`: If gallery entry is hidden from product page
  * extension_attributes [catalog-data-product-attribute-media-gallery-entry-extension-interface](#catalog-data-product-attribute-media-gallery-entry-extension-interface)
  * file `string`: File path
  * id `integer`: Gallery entry ID
  * label **required** `string`: Gallery entry alternative text
  * media_type **required** `string`: Media type
  * position **required** `integer`: Gallery entry position (sort order)
  * types **required** `array`: Gallery entry image types (thumbnail, image, small_image etc)
    * items `string`

### catalog-data-product-attribute-search-results-interface
* catalog-data-product-attribute-search-results-interface `object`
  * items **required** `array`: Attributes list.
    * items [catalog-data-product-attribute-interface](#catalog-data-product-attribute-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### catalog-data-product-attribute-type-extension-interface
* catalog-data-product-attribute-type-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface

### catalog-data-product-attribute-type-interface
* catalog-data-product-attribute-type-interface `object`
  * extension_attributes [catalog-data-product-attribute-type-extension-interface](#catalog-data-product-attribute-type-extension-interface)
  * label **required** `string`: Type label
  * value **required** `string`: Value

### catalog-data-product-custom-option-extension-interface
* catalog-data-product-custom-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface

### catalog-data-product-custom-option-interface
* catalog-data-product-custom-option-interface `object`
  * extension_attributes [catalog-data-product-custom-option-extension-interface](#catalog-data-product-custom-option-extension-interface)
  * file_extension `string`
  * image_size_x `integer`
  * image_size_y `integer`
  * is_require **required** `boolean`: Is require
  * max_characters `integer`
  * option_id `integer`: Option id
  * price `number`: Price
  * price_type `string`: Price type
  * product_sku **required** `string`: Product SKU
  * sku `string`: Sku
  * sort_order **required** `integer`: Sort order
  * title **required** `string`: Option title
  * type **required** `string`: Option type
  * values `array`
    * items [catalog-data-product-custom-option-values-interface](#catalog-data-product-custom-option-values-interface)

### catalog-data-product-custom-option-type-extension-interface
* catalog-data-product-custom-option-type-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionTypeInterface

### catalog-data-product-custom-option-type-interface
* catalog-data-product-custom-option-type-interface `object`
  * code **required** `string`: Option type code
  * extension_attributes [catalog-data-product-custom-option-type-extension-interface](#catalog-data-product-custom-option-type-extension-interface)
  * group **required** `string`: Option type group
  * label **required** `string`: Option type label

### catalog-data-product-custom-option-values-interface
* catalog-data-product-custom-option-values-interface `object`
  * option_type_id `integer`: Option type id
  * price **required** `number`: Price
  * price_type **required** `string`: Price type
  * sku `string`: Sku
  * sort_order **required** `integer`: Sort order
  * title **required** `string`: Option title

### catalog-data-product-extension-interface
* catalog-data-product-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface
  * bundle_product_options `array`
    * items [bundle-data-option-interface](#bundle-data-option-interface)
  * configurable_product_links `array`
    * items `integer`
  * configurable_product_options `array`
    * items [configurable-product-data-option-interface](#configurable-product-data-option-interface)
  * downloadable_product_links `array`
    * items [downloadable-data-link-interface](#downloadable-data-link-interface)
  * downloadable_product_samples `array`
    * items [downloadable-data-sample-interface](#downloadable-data-sample-interface)
  * giftcard_amounts `array`
    * items [gift-card-data-giftcard-amount-interface](#gift-card-data-giftcard-amount-interface)
  * stock_item [catalog-inventory-data-stock-item-interface](#catalog-inventory-data-stock-item-interface)

### catalog-data-product-interface
* catalog-data-product-interface `object`
  * attribute_set_id `integer`: Attribute set id
  * created_at `string`: Created date
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * extension_attributes [catalog-data-product-extension-interface](#catalog-data-product-extension-interface)
  * id `integer`: Id
  * media_gallery_entries `array`: Media gallery entries
    * items [catalog-data-product-attribute-media-gallery-entry-interface](#catalog-data-product-attribute-media-gallery-entry-interface)
  * name `string`: Name
  * options `array`: List of product options
    * items [catalog-data-product-custom-option-interface](#catalog-data-product-custom-option-interface)
  * price `number`: Price
  * product_links `array`: Product links info
    * items [catalog-data-product-link-interface](#catalog-data-product-link-interface)
  * sku **required** `string`: Sku
  * status `integer`: Status
  * tier_prices `array`: List of product tier prices
    * items [catalog-data-product-tier-price-interface](#catalog-data-product-tier-price-interface)
  * type_id `string`: Type id
  * updated_at `string`: Updated date
  * visibility `integer`: Visibility
  * weight `number`: Weight

### catalog-data-product-link-attribute-extension-interface
* catalog-data-product-link-attribute-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkAttributeInterface

### catalog-data-product-link-attribute-interface
* catalog-data-product-link-attribute-interface `object`
  * code **required** `string`: Attribute code
  * extension_attributes [catalog-data-product-link-attribute-extension-interface](#catalog-data-product-link-attribute-extension-interface)
  * type **required** `string`: Attribute type

### catalog-data-product-link-extension-interface
* catalog-data-product-link-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface
  * qty `number`

### catalog-data-product-link-interface
* catalog-data-product-link-interface `object`
  * extension_attributes [catalog-data-product-link-extension-interface](#catalog-data-product-link-extension-interface)
  * link_type **required** `string`: Link type
  * linked_product_sku **required** `string`: Linked product sku
  * linked_product_type **required** `string`: Linked product type (simple, virtual, etc)
  * position **required** `integer`: Linked item position
  * sku **required** `string`: SKU

### catalog-data-product-link-type-extension-interface
* catalog-data-product-link-type-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkTypeInterface

### catalog-data-product-link-type-interface
* catalog-data-product-link-type-interface `object`
  * code **required** `integer`: Link type code
  * extension_attributes [catalog-data-product-link-type-extension-interface](#catalog-data-product-link-type-extension-interface)
  * name **required** `string`: Link type name

### catalog-data-product-option-extension-interface
* catalog-data-product-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface
  * bundle_options `array`
    * items [bundle-data-bundle-option-interface](#bundle-data-bundle-option-interface)
  * configurable_item_options `array`
    * items [configurable-product-data-configurable-item-option-value-interface](#configurable-product-data-configurable-item-option-value-interface)
  * custom_options `array`
    * items [catalog-data-custom-option-interface](#catalog-data-custom-option-interface)
  * downloadable_option [downloadable-data-downloadable-option-interface](#downloadable-data-downloadable-option-interface)
  * giftcard_item_option [gift-card-data-gift-card-option-interface](#gift-card-data-gift-card-option-interface)

### catalog-data-product-option-interface
* catalog-data-product-option-interface `object`: Product option interface
  * extension_attributes [catalog-data-product-option-extension-interface](#catalog-data-product-option-extension-interface)

### catalog-data-product-search-results-interface
* catalog-data-product-search-results-interface `object`
  * items **required** `array`: Attributes list.
    * items [catalog-data-product-interface](#catalog-data-product-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### catalog-data-product-tier-price-extension-interface
* catalog-data-product-tier-price-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface

### catalog-data-product-tier-price-interface
* catalog-data-product-tier-price-interface `object`
  * customer_group_id **required** `integer`: Customer group id
  * extension_attributes [catalog-data-product-tier-price-extension-interface](#catalog-data-product-tier-price-extension-interface)
  * qty **required** `number`: Tier qty
  * value **required** `number`: Price value

### catalog-data-product-type-extension-interface
* catalog-data-product-type-extension-interface `object`: ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTypeInterface

### catalog-data-product-type-interface
* catalog-data-product-type-interface `object`: Product type details
  * extension_attributes [catalog-data-product-type-extension-interface](#catalog-data-product-type-extension-interface)
  * label **required** `string`: Product type label
  * name **required** `string`: Product type code

### catalog-data-product-website-link-interface
* catalog-data-product-website-link-interface `object`
  * sku **required** `string`
  * website_id **required** `integer`: Website ids

### catalog-inventory-data-stock-item-extension-interface
* catalog-inventory-data-stock-item-extension-interface `object`: ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface

### catalog-inventory-data-stock-item-interface
* catalog-inventory-data-stock-item-interface `object`: Interface StockItem
  * backorders **required** `integer`: Backorders status
  * enable_qty_increments **required** `boolean`: Whether Quantity Increments is enabled
  * extension_attributes [catalog-inventory-data-stock-item-extension-interface](#catalog-inventory-data-stock-item-extension-interface)
  * is_decimal_divided **required** `boolean`
  * is_in_stock **required** `boolean`: Stock Availability
  * is_qty_decimal **required** `boolean`
  * item_id `integer`
  * low_stock_date **required** `string`
  * manage_stock **required** `boolean`: Can Manage Stock
  * max_sale_qty **required** `number`: Maximum Qty Allowed in Shopping Cart data wrapper
  * min_qty **required** `number`: Minimal quantity available for item status in stock
  * min_sale_qty **required** `number`: Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation
  * notify_stock_qty **required** `number`: Notify for Quantity Below data wrapper
  * product_id `integer`
  * qty **required** `number`
  * qty_increments **required** `number`: Quantity Increments data wrapper
  * show_default_notification_message **required** `boolean`
  * stock_id `integer`: Stock identifier
  * stock_status_changed_auto **required** `integer`
  * use_config_backorders **required** `boolean`
  * use_config_enable_qty_inc **required** `boolean`
  * use_config_manage_stock **required** `boolean`
  * use_config_max_sale_qty **required** `boolean`
  * use_config_min_qty **required** `boolean`
  * use_config_min_sale_qty **required** `integer`
  * use_config_notify_stock_qty **required** `boolean`
  * use_config_qty_increments **required** `boolean`

### catalog-inventory-data-stock-status-collection-interface
* catalog-inventory-data-stock-status-collection-interface `object`: Stock Status collection interface
  * items **required** `array`: Items
    * items [catalog-inventory-data-stock-status-interface](#catalog-inventory-data-stock-status-interface)
  * search_criteria **required** [catalog-inventory-stock-status-criteria-interface](#catalog-inventory-stock-status-criteria-interface)
  * total_count **required** `integer`: Total count.

### catalog-inventory-data-stock-status-extension-interface
* catalog-inventory-data-stock-status-extension-interface `object`: ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockStatusInterface

### catalog-inventory-data-stock-status-interface
* catalog-inventory-data-stock-status-interface `object`: Interface StockStatusInterface
  * extension_attributes [catalog-inventory-data-stock-status-extension-interface](#catalog-inventory-data-stock-status-extension-interface)
  * product_id **required** `integer`
  * qty **required** `integer`
  * stock_id **required** `integer`
  * stock_item **required** [catalog-inventory-data-stock-item-interface](#catalog-inventory-data-stock-item-interface)
  * stock_status **required** `integer`

### catalog-inventory-stock-status-criteria-interface
* catalog-inventory-stock-status-criteria-interface `object`: Interface StockStatusCriteriaInterface
  * criteria_list **required** `array`: Criteria objects added to current Composite Criteria
    * items [framework-criteria-interface](#framework-criteria-interface)
  * filters **required** `array`: List of filters
    * items `string`
  * limit **required** `array`: Limit
    * items `string`
  * mapper_interface_name **required** `string`: Associated Mapper Interface name
  * orders **required** `array`: Ordering criteria
    * items `string`

### checkout-agreements-data-agreement-extension-interface
* checkout-agreements-data-agreement-extension-interface `object`: ExtensionInterface class for @see \Magento\CheckoutAgreements\Api\Data\AgreementInterface

### checkout-agreements-data-agreement-interface
* checkout-agreements-data-agreement-interface `object`: Interface AgreementInterface
  * agreement_id **required** `integer`: Agreement ID.
  * checkbox_text **required** `string`: Agreement checkbox text.
  * content **required** `string`: Agreement content.
  * content_height `string`: Agreement content height. Otherwise, null.
  * extension_attributes [checkout-agreements-data-agreement-extension-interface](#checkout-agreements-data-agreement-extension-interface)
  * is_active **required** `boolean`: Agreement status.
  * is_html **required** `boolean`: * true - HTML. * false - plain text.
  * mode **required** `integer`: The agreement applied mode.
  * name **required** `string`: Agreement name.

### checkout-data-payment-details-extension-interface
* checkout-data-payment-details-extension-interface `object`: ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface

### checkout-data-payment-details-interface
* checkout-data-payment-details-interface `object`: Interface PaymentDetailsInterface
  * extension_attributes [checkout-data-payment-details-extension-interface](#checkout-data-payment-details-extension-interface)
  * payment_methods **required** `array`
    * items [quote-data-payment-method-interface](#quote-data-payment-method-interface)
  * totals **required** [quote-data-totals-interface](#quote-data-totals-interface)

### checkout-data-shipping-information-extension-interface
* checkout-data-shipping-information-extension-interface `object`: ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface

### checkout-data-shipping-information-interface
* checkout-data-shipping-information-interface `object`: Interface ShippingInformationInterface
  * billing_address [quote-data-address-interface](#quote-data-address-interface)
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * extension_attributes [checkout-data-shipping-information-extension-interface](#checkout-data-shipping-information-extension-interface)
  * shipping_address **required** [quote-data-address-interface](#quote-data-address-interface)
  * shipping_carrier_code **required** `string`: Carrier code
  * shipping_method_code **required** `string`: Shipping method code

### checkout-data-totals-information-extension-interface
* checkout-data-totals-information-extension-interface `object`: ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface

### checkout-data-totals-information-interface
* checkout-data-totals-information-interface `object`: Interface TotalsInformationInterface
  * address **required** [quote-data-address-interface](#quote-data-address-interface)
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * extension_attributes [checkout-data-totals-information-extension-interface](#checkout-data-totals-information-extension-interface)
  * shipping_carrier_code `string`: Carrier code
  * shipping_method_code `string`: Shipping method code

### cms-data-block-interface
* cms-data-block-interface `object`: CMS block interface.
  * active `boolean`: Active
  * content `string`: Content
  * creation_time `string`: Creation time
  * id `integer`: ID
  * identifier **required** `string`: Identifier
  * title `string`: Title
  * update_time `string`: Update time

### cms-data-block-search-results-interface
* cms-data-block-search-results-interface `object`: Interface for cms block search results.
  * items **required** `array`: Blocks list.
    * items [cms-data-block-interface](#cms-data-block-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### cms-data-page-interface
* cms-data-page-interface `object`: CMS page interface.
  * active `boolean`: Active
  * content `string`: Content
  * content_heading `string`: Content heading
  * creation_time `string`: Creation time
  * custom_layout_update_xml `string`: Custom layout update xml
  * custom_root_template `string`: Custom root template
  * custom_theme `string`: Custom theme
  * custom_theme_from `string`: Custom theme from
  * custom_theme_to `string`: Custom theme to
  * id `integer`: ID
  * identifier **required** `string`: Identifier
  * layout_update_xml `string`: Layout update xml
  * meta_description `string`: Meta description
  * meta_keywords `string`: Meta keywords
  * meta_title `string`: Meta title
  * page_layout `string`: Page layout
  * sort_order `string`: Sort order
  * title `string`: Title
  * update_time `string`: Update time

### cms-data-page-search-results-interface
* cms-data-page-search-results-interface `object`: Interface for cms page search results.
  * items **required** `array`: Pages list.
    * items [cms-data-page-interface](#cms-data-page-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### configurable-product-data-configurable-item-option-value-extension-interface
* configurable-product-data-configurable-item-option-value-extension-interface `object`: ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface

### configurable-product-data-configurable-item-option-value-interface
* configurable-product-data-configurable-item-option-value-interface `object`: Interface ConfigurableItemOptionValueInterface
  * extension_attributes [configurable-product-data-configurable-item-option-value-extension-interface](#configurable-product-data-configurable-item-option-value-extension-interface)
  * option_id **required** `string`: Option SKU
  * option_value `integer`: Item id

### configurable-product-data-option-extension-interface
* configurable-product-data-option-extension-interface `object`: ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface

### configurable-product-data-option-interface
* configurable-product-data-option-interface `object`: Interface OptionInterface
  * attribute_id `string`
  * extension_attributes [configurable-product-data-option-extension-interface](#configurable-product-data-option-extension-interface)
  * id `integer`
  * is_use_default `boolean`
  * label `string`
  * position `integer`
  * product_id `integer`
  * values `array`
    * items [configurable-product-data-option-value-interface](#configurable-product-data-option-value-interface)

### configurable-product-data-option-value-extension-interface
* configurable-product-data-option-value-extension-interface `object`: ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface

### configurable-product-data-option-value-interface
* configurable-product-data-option-value-interface `object`: Interface OptionValueInterface
  * extension_attributes [configurable-product-data-option-value-extension-interface](#configurable-product-data-option-value-extension-interface)
  * value_index **required** `integer`

### customer-data-address-extension-interface
* customer-data-address-extension-interface `object`: ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface

### customer-data-address-interface
* customer-data-address-interface `object`: Customer address interface.
  * city `string`: City name
  * company `string`: Company
  * country_id `string`: Country code in ISO_3166-2 format
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * customer_id `integer`: Customer ID
  * default_billing `boolean`: If this address is default billing address
  * default_shipping `boolean`: If this address is default shipping address.
  * extension_attributes [customer-data-address-extension-interface](#customer-data-address-extension-interface)
  * fax `string`: Fax number
  * firstname `string`: First name
  * id `integer`: ID
  * lastname `string`: Last name
  * middlename `string`: Middle name
  * postcode `string`: Postcode
  * prefix `string`: Prefix
  * region [customer-data-region-interface](#customer-data-region-interface)
  * region_id `integer`: Region ID
  * street `array`: Street
    * items `string`
  * suffix `string`: Suffix
  * telephone `string`: Telephone number
  * vat_id `string`: Vat id

### customer-data-attribute-metadata-interface
* customer-data-attribute-metadata-interface `object`: Customer attribute metadata interface.
  * attribute_code **required** `string`: Code of the attribute.
  * backend_type **required** `string`: Backend type.
  * data_model **required** `string`: Data model for attribute.
  * frontend_class **required** `string`: Class which is used to display the attribute on frontend.
  * frontend_input **required** `string`: HTML for input element.
  * frontend_label **required** `string`: Label which supposed to be displayed on frontend.
  * input_filter **required** `string`: Template used for input (e.g. "date")
  * is_filterable_in_grid `boolean`: It is filterable in customer grid
  * is_searchable_in_grid `boolean`: It is searchable in customer grid
  * is_used_in_grid `boolean`: It is used in customer grid
  * is_visible_in_grid `boolean`: It is visible in customer grid
  * multiline_count **required** `integer`: Of lines of the attribute value.
  * note **required** `string`: The note attribute for the element.
  * options **required** `array`: Options of the attribute (key => value pairs for select)
    * items [customer-data-option-interface](#customer-data-option-interface)
  * required **required** `boolean`: Attribute is required.
  * sort_order **required** `integer`: Attributes sort order.
  * store_label **required** `string`: Label of the store.
  * system **required** `boolean`: This is a system attribute.
  * user_defined **required** `boolean`: Current attribute has been defined by a user.
  * validation_rules **required** `array`: Validation rules.
    * items [customer-data-validation-rule-interface](#customer-data-validation-rule-interface)
  * visible **required** `boolean`: Attribute is visible on frontend.

### customer-data-customer-extension-interface
* customer-data-customer-extension-interface `object`: ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface
  * is_subscribed `boolean`

### customer-data-customer-interface
* customer-data-customer-interface `object`: Customer interface.
  * addresses `array`: Customer addresses.
    * items [customer-data-address-interface](#customer-data-address-interface)
  * confirmation `string`: Confirmation
  * created_at `string`: Created at time
  * created_in `string`: Created in area
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * default_billing `string`: Default billing address id
  * default_shipping `string`: Default shipping address id
  * disable_auto_group_change `integer`: Disable auto group change flag.
  * dob `string`: Date of birth
  * email **required** `string`: Email address
  * extension_attributes [customer-data-customer-extension-interface](#customer-data-customer-extension-interface)
  * firstname **required** `string`: First name
  * gender `integer`: Gender
  * group_id `integer`: Group id
  * id `integer`: Customer id
  * lastname **required** `string`: Last name
  * middlename `string`: Middle name
  * prefix `string`: Prefix
  * store_id `integer`: Store id
  * suffix `string`: Suffix
  * taxvat `string`: Tax Vat
  * updated_at `string`: Updated at time
  * website_id `integer`: Website id

### customer-data-customer-search-results-interface
* customer-data-customer-search-results-interface `object`: Interface for customer search results.
  * items **required** `array`: Customers list.
    * items [customer-data-customer-interface](#customer-data-customer-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### customer-data-group-extension-interface
* customer-data-group-extension-interface `object`: ExtensionInterface class for @see \Magento\Customer\Api\Data\GroupInterface

### customer-data-group-interface
* customer-data-group-interface `object`: Customer group interface.
  * code **required** `string`: Code
  * extension_attributes [customer-data-group-extension-interface](#customer-data-group-extension-interface)
  * id `integer`: Id
  * tax_class_id **required** `integer`: Tax class id
  * tax_class_name `string`: Tax class name

### customer-data-group-search-results-interface
* customer-data-group-search-results-interface `object`: Interface for customer groups search results.
  * items **required** `array`: Customer groups list.
    * items [customer-data-group-interface](#customer-data-group-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### customer-data-option-interface
* customer-data-option-interface `object`: Option interface.
  * label **required** `string`: Option label
  * options `array`: Nested options
    * items [customer-data-option-interface](#customer-data-option-interface)
  * value `string`: Option value

### customer-data-region-extension-interface
* customer-data-region-extension-interface `object`: ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface

### customer-data-region-interface
* customer-data-region-interface `object`: Customer address region interface.
  * extension_attributes [customer-data-region-extension-interface](#customer-data-region-extension-interface)
  * region **required** `string`: Region
  * region_code **required** `string`: Region code
  * region_id **required** `integer`: Region id

### customer-data-validation-results-interface
* customer-data-validation-results-interface `object`: Validation results interface.
  * messages **required** `array`: Error messages as array in case of validation failure, else return empty array.
    * items `string`
  * valid **required** `boolean`: If the provided data is valid.

### customer-data-validation-rule-interface
* customer-data-validation-rule-interface `object`: Validation rule interface.
  * name **required** `string`: Validation rule name
  * value **required** `string`: Validation rule value

### directory-data-country-information-extension-interface
* directory-data-country-information-extension-interface `object`: ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface

### directory-data-country-information-interface
* directory-data-country-information-interface `object`: Country Information interface.
  * available_regions `array`: The available regions for the store.
    * items [directory-data-region-information-interface](#directory-data-region-information-interface)
  * extension_attributes [directory-data-country-information-extension-interface](#directory-data-country-information-extension-interface)
  * full_name_english **required** `string`: The country full name (in English) for the store.
  * full_name_locale **required** `string`: The country full name (in store locale) for the store.
  * id **required** `string`: The country id for the store.
  * three_letter_abbreviation **required** `string`: The country 3 letter abbreviation for the store.
  * two_letter_abbreviation **required** `string`: The country 2 letter abbreviation for the store.

### directory-data-currency-information-extension-interface
* directory-data-currency-information-extension-interface `object`: ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface

### directory-data-currency-information-interface
* directory-data-currency-information-interface `object`: Currency Information interface.
  * available_currency_codes **required** `array`: The list of allowed currency codes for the store.
    * items `string`
  * base_currency_code **required** `string`: The base currency code for the store.
  * base_currency_symbol **required** `string`: The currency symbol of the base currency for the store.
  * default_display_currency_code **required** `string`: The default display currency code for the store.
  * default_display_currency_symbol **required** `string`: The currency symbol of the default display currency for the store.
  * exchange_rates **required** `array`: The list of exchange rate information for the store.
    * items [directory-data-exchange-rate-interface](#directory-data-exchange-rate-interface)
  * extension_attributes [directory-data-currency-information-extension-interface](#directory-data-currency-information-extension-interface)

### directory-data-exchange-rate-extension-interface
* directory-data-exchange-rate-extension-interface `object`: ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface

### directory-data-exchange-rate-interface
* directory-data-exchange-rate-interface `object`: Exchange Rate interface.
  * currency_to **required** `string`: The currency code associated with the exchange rate.
  * extension_attributes [directory-data-exchange-rate-extension-interface](#directory-data-exchange-rate-extension-interface)
  * rate **required** `number`: The exchange rate for the associated currency and the store's base currency.

### directory-data-region-information-extension-interface
* directory-data-region-information-extension-interface `object`: ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface

### directory-data-region-information-interface
* directory-data-region-information-interface `object`: Region Information interface.
  * code **required** `string`: Region code
  * extension_attributes [directory-data-region-information-extension-interface](#directory-data-region-information-extension-interface)
  * id **required** `string`: Region id
  * name **required** `string`: Region name

### downloadable-data-downloadable-option-interface
* downloadable-data-downloadable-option-interface `object`: Downloadable Option
  * downloadable_links **required** `array`: The list of downloadable links
    * items `integer`

### downloadable-data-file-content-extension-interface
* downloadable-data-file-content-extension-interface `object`: ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface

### downloadable-data-file-content-interface
* downloadable-data-file-content-interface `object`
  * extension_attributes [downloadable-data-file-content-extension-interface](#downloadable-data-file-content-extension-interface)
  * file_data **required** `string`: Data (base64 encoded content)
  * name **required** `string`: File name

### downloadable-data-link-extension-interface
* downloadable-data-link-extension-interface `object`: ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface

### downloadable-data-link-interface
* downloadable-data-link-interface `object`
  * extension_attributes [downloadable-data-link-extension-interface](#downloadable-data-link-extension-interface)
  * id `integer`: Sample(or link) id
  * is_shareable **required** `integer`: Shareable status
  * link_file `string`: relative file path
  * link_file_content [downloadable-data-file-content-interface](#downloadable-data-file-content-interface)
  * link_type **required** `string`
  * link_url `string`: Link url or null when type is 'file'
  * number_of_downloads `integer`: Of downloads per user
  * price **required** `number`: Price
  * sample_file `string`: relative file path
  * sample_file_content [downloadable-data-file-content-interface](#downloadable-data-file-content-interface)
  * sample_type **required** `string`
  * sample_url `string`: file URL
  * sort_order **required** `integer`
  * title `string`

### downloadable-data-sample-extension-interface
* downloadable-data-sample-extension-interface `object`: ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface

### downloadable-data-sample-interface
* downloadable-data-sample-interface `object`
  * extension_attributes [downloadable-data-sample-extension-interface](#downloadable-data-sample-extension-interface)
  * id `integer`: Sample(or link) id
  * sample_file `string`: relative file path
  * sample_file_content [downloadable-data-file-content-interface](#downloadable-data-file-content-interface)
  * sample_type **required** `string`
  * sample_url `string`: file URL
  * sort_order **required** `integer`: Order index for sample
  * title **required** `string`: Title

### eav-data-attribute-frontend-label-interface
* eav-data-attribute-frontend-label-interface `object`: Interface AttributeFrontendLabelInterface
  * label `string`: Option label
  * store_id `integer`: Store id

### eav-data-attribute-group-extension-interface
* eav-data-attribute-group-extension-interface `object`: ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeGroupInterface
  * attribute_group_code `string`
  * sort_order `string`

### eav-data-attribute-group-interface
* eav-data-attribute-group-interface `object`: Interface AttributeGroupInterface
  * attribute_group_id `string`: Id
  * attribute_group_name `string`: Name
  * attribute_set_id `integer`: Attribute set id
  * extension_attributes [eav-data-attribute-group-extension-interface](#eav-data-attribute-group-extension-interface)

### eav-data-attribute-group-search-results-interface
* eav-data-attribute-group-search-results-interface `object`: Interface AttributeGroupSearchResultsInterface
  * items **required** `array`: Attribute sets list.
    * items [eav-data-attribute-group-interface](#eav-data-attribute-group-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### eav-data-attribute-option-interface
* eav-data-attribute-option-interface `object`: Created from:
  * is_default `boolean`: Default
  * label **required** `string`: Option label
  * sort_order `integer`: Option order
  * store_labels `array`: Option label for store scopes
    * items [eav-data-attribute-option-label-interface](#eav-data-attribute-option-label-interface)
  * value **required** `string`: Option value

### eav-data-attribute-option-label-interface
* eav-data-attribute-option-label-interface `object`: Interface AttributeOptionLabelInterface
  * label `string`: Option label
  * store_id `integer`: Store id

### eav-data-attribute-set-extension-interface
* eav-data-attribute-set-extension-interface `object`: ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeSetInterface

### eav-data-attribute-set-interface
* eav-data-attribute-set-interface `object`: Interface AttributeSetInterface
  * attribute_set_id `integer`: Attribute set ID
  * attribute_set_name **required** `string`: Attribute set name
  * entity_type_id `integer`: Attribute set entity type id
  * extension_attributes [eav-data-attribute-set-extension-interface](#eav-data-attribute-set-extension-interface)
  * sort_order **required** `integer`: Attribute set sort order index

### eav-data-attribute-set-search-results-interface
* eav-data-attribute-set-search-results-interface `object`: Interface AttributeSetSearchResultsInterface
  * items **required** `array`: Attribute sets list.
    * items [eav-data-attribute-set-interface](#eav-data-attribute-set-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### eav-data-attribute-validation-rule-interface
* eav-data-attribute-validation-rule-interface `object`: Interface AttributeValidationRuleInterface
  * key **required** `string`: Object key
  * value **required** `string`: Object value

### error-errors
* error-errors `array`: Errors list
  * items [error-errors-item](#error-errors-item)

### error-errors-item
* error-errors-item `object`: Error details
  * message `string`: Error message
  * parameters [error-parameters](#error-parameters)

### error-parameters
* error-parameters `array`: Error parameters list
  * items [error-parameters-item](#error-parameters-item)

### error-parameters-item
* error-parameters-item `object`: Error parameters item
  * fieldName `string`: Missing or invalid field name
  * fieldValue `string`: Incorrect field value
  * resources `string`: ACL resource

### error-response
* error-response `object`
  * code `integer`: Error code
  * errors [error-errors](#error-errors)
  * message **required** `string`: Error message
  * parameters [error-parameters](#error-parameters)
  * trace `string`: Stack trace

### framework-attribute-interface
* framework-attribute-interface `object`: Interface for custom attribute value.
  * attribute_code **required** `string`: Attribute code
  * value **required** `string`: Attribute value

### framework-criteria-interface
* framework-criteria-interface `object`: Interface CriteriaInterface
  * criteria_list **required** `array`: Criteria objects added to current Composite Criteria
    * items [framework-criteria-interface](#framework-criteria-interface)
  * filters **required** `array`: List of filters
    * items `string`
  * limit **required** `array`: Limit
    * items `string`
  * mapper_interface_name **required** `string`: Associated Mapper Interface name
  * orders **required** `array`: Ordering criteria
    * items `string`

### framework-data-image-content-interface
* framework-data-image-content-interface `object`: Image Content data interface
  * base64_encoded_data **required** `string`: Media data (base64 encoded content)
  * name **required** `string`: Image name
  * type **required** `string`: MIME type

### framework-data-video-content-interface
* framework-data-video-content-interface `object`: Video Content data interface
  * media_type **required** `string`: MIME type
  * video_description **required** `string`: Video Description
  * video_metadata **required** `string`: Metadata
  * video_provider **required** `string`: Provider
  * video_title **required** `string`: Title
  * video_url **required** `string`: Video URL

### framework-filter
* framework-filter `object`: Filter which can be used by any methods from service layer.
  * condition_type `string`: Condition type
  * field **required** `string`: Field
  * value **required** `string`: Value

### framework-metadata-object-interface
* framework-metadata-object-interface `object`: Provides metadata about an attribute.
  * attribute_code **required** `string`: Code of the attribute.

### framework-search-aggregation-interface
* framework-search-aggregation-interface `object`: Faceted data
  * bucket_names **required** `array`: Document field names
    * items `string`
  * buckets **required** `array`: All Document fields
    * items [framework-search-bucket-interface](#framework-search-bucket-interface)

### framework-search-aggregation-value-interface
* framework-search-aggregation-value-interface `object`
  * metrics **required** `array`: Metrics
    * items `string`
  * value **required** `string`: Aggregation

### framework-search-bucket-interface
* framework-search-bucket-interface `object`: Facet Bucket
  * name **required** `string`: Field name
  * values **required** `array`: Field values
    * items [framework-search-aggregation-value-interface](#framework-search-aggregation-value-interface)

### framework-search-criteria-interface
* framework-search-criteria-interface `object`: Search criteria interface.
  * current_page `integer`: Current page.
  * filter_groups **required** `array`: A list of filter groups.
    * items [framework-search-filter-group](#framework-search-filter-group)
  * page_size `integer`: Page size.
  * sort_orders `array`: Sort order.
    * items [framework-sort-order](#framework-sort-order)

### framework-search-document-interface
* framework-search-document-interface `object`
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * id **required** `integer`

### framework-search-filter-group
* framework-search-filter-group `object`: Groups two or more filters together using a logical OR
  * filters `array`: A list of filters in this group
    * items [framework-filter](#framework-filter)

### framework-search-search-criteria-interface
* framework-search-search-criteria-interface `object`
  * current_page `integer`: Current page.
  * filter_groups **required** `array`: A list of filter groups.
    * items [framework-search-filter-group](#framework-search-filter-group)
  * page_size `integer`: Page size.
  * request_name **required** `string`
  * sort_orders `array`: Sort order.
    * items [framework-sort-order](#framework-sort-order)

### framework-search-search-result-interface
* framework-search-search-result-interface `object`
  * aggregations **required** [framework-search-aggregation-interface](#framework-search-aggregation-interface)
  * items **required** `array`
    * items [framework-search-document-interface](#framework-search-document-interface)
  * search_criteria **required** [framework-search-search-criteria-interface](#framework-search-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### framework-sort-order
* framework-sort-order `object`: Data object for sort order.
  * direction **required** `string`: Sorting direction.
  * field **required** `string`: Sorting field.

### gift-card-account-data-gift-card-account-extension-interface
* gift-card-account-data-gift-card-account-extension-interface `object`: ExtensionInterface class for @see \Magento\GiftCardAccount\Api\Data\GiftCardAccountInterface

### gift-card-account-data-gift-card-account-interface
* gift-card-account-data-gift-card-account-interface `object`: Gift Card Account data
  * base_gift_cards_amount **required** `number`: Cards amount in base currency
  * base_gift_cards_amount_used **required** `number`: Cards amount used in base currency
  * extension_attributes [gift-card-account-data-gift-card-account-extension-interface](#gift-card-account-data-gift-card-account-extension-interface)
  * gift_cards **required** `array`: Cards codes
    * items `string`
  * gift_cards_amount **required** `number`: Cards amount in quote currency
  * gift_cards_amount_used **required** `number`: Cards amount used in quote currency

### gift-card-data-gift-card-option-extension-interface
* gift-card-data-gift-card-option-extension-interface `object`: ExtensionInterface class for @see \Magento\GiftCard\Api\Data\GiftCardOptionInterface

### gift-card-data-gift-card-option-interface
* gift-card-data-gift-card-option-interface `object`: Interface GiftCardOptionInterface
  * custom_giftcard_amount `number`: Gift card open amount value.
  * extension_attributes [gift-card-data-gift-card-option-extension-interface](#gift-card-data-gift-card-option-extension-interface)
  * giftcard_amount **required** `string`: Gift card amount.
  * giftcard_message `string`: Giftcard message.
  * giftcard_recipient_email **required** `string`: Gift card recipient email.
  * giftcard_recipient_name **required** `string`: Gift card recipient name.
  * giftcard_sender_email **required** `string`: Gift card sender email.
  * giftcard_sender_name **required** `string`: Gift card sender name.

### gift-card-data-giftcard-amount-extension-interface
* gift-card-data-giftcard-amount-extension-interface `object`: ExtensionInterface class for @see \Magento\GiftCard\Api\Data\GiftcardAmountInterface

### gift-card-data-giftcard-amount-interface
* gift-card-data-giftcard-amount-interface `object`: Interface GiftcardAmountInterface: this interface is used to serialize and deserialize EAV attribute giftcard_amounts
  * attribute_id **required** `integer`
  * extension_attributes [gift-card-data-giftcard-amount-extension-interface](#gift-card-data-giftcard-amount-extension-interface)
  * value **required** `number`
  * website_id **required** `integer`
  * website_value **required** `number`

### gift-message-data-message-extension-interface
* gift-message-data-message-extension-interface `object`: ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface
  * entity_id `string`
  * entity_type `string`
  * wrapping_add_printed_card `boolean`
  * wrapping_allow_gift_receipt `boolean`
  * wrapping_id `integer`

### gift-message-data-message-interface
* gift-message-data-message-interface `object`: Interface MessageInterface
  * customer_id `integer`: Customer ID. Otherwise, null.
  * extension_attributes [gift-message-data-message-extension-interface](#gift-message-data-message-extension-interface)
  * gift_message_id `integer`: Gift message ID. Otherwise, null.
  * message **required** `string`: Message text.
  * recipient **required** `string`: Recipient name.
  * sender **required** `string`: Sender name.

### gift-wrapping-data-wrapping-extension-interface
* gift-wrapping-data-wrapping-extension-interface `object`: ExtensionInterface class for @see \Magento\GiftWrapping\Api\Data\WrappingInterface

### gift-wrapping-data-wrapping-interface
* gift-wrapping-data-wrapping-interface `object`: Interface WrappingInterface
  * base_currency_code `string`
  * base_price **required** `number`
  * design **required** `string`
  * extension_attributes [gift-wrapping-data-wrapping-extension-interface](#gift-wrapping-data-wrapping-extension-interface)
  * image_base64_content `string`
  * image_name `string`
  * image_url `string`: Wrapping image URL.
  * status **required** `integer`
  * website_ids `array`
    * items `integer`
  * wrapping_id `integer`

### gift-wrapping-data-wrapping-search-results-interface
* gift-wrapping-data-wrapping-search-results-interface `object`: Interface WrappingSearchResultsInterface
  * items **required** `array`: Items
    * items [gift-wrapping-data-wrapping-interface](#gift-wrapping-data-wrapping-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### quote-data-address-extension-interface
* quote-data-address-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface
  * gift_registry_id `integer`

### quote-data-address-interface
* quote-data-address-interface `object`: Interface AddressInterface
  * city **required** `string`: City name
  * company `string`: Company
  * country_id **required** `string`: Country id
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * customer_address_id `integer`: Customer address id
  * customer_id `integer`: Customer id
  * email **required** `string`: Billing/shipping email
  * extension_attributes [quote-data-address-extension-interface](#quote-data-address-extension-interface)
  * fax `string`: Fax number
  * firstname **required** `string`: First name
  * id `integer`: Id
  * lastname **required** `string`: Last name
  * middlename `string`: Middle name
  * postcode **required** `string`: Postcode
  * prefix `string`: Prefix
  * region **required** `string`: Region name
  * region_code **required** `string`: Region code
  * region_id **required** `integer`: Region id
  * same_as_billing `integer`: Same as billing flag
  * save_in_address_book `integer`: Save in address book flag
  * street **required** `array`: Street
    * items `string`
  * suffix `string`: Suffix
  * telephone **required** `string`: Telephone number
  * vat_id `string`: Vat id

### quote-data-cart-extension-interface
* quote-data-cart-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface
  * shipping_assignments `array`
    * items [quote-data-shipping-assignment-interface](#quote-data-shipping-assignment-interface)

### quote-data-cart-interface
* quote-data-cart-interface `object`: Interface CartInterface
  * billing_address [quote-data-address-interface](#quote-data-address-interface)
  * converted_at `string`: Cart conversion date and time. Otherwise, null.
  * created_at `string`: Cart creation date and time. Otherwise, null.
  * currency [quote-data-currency-interface](#quote-data-currency-interface)
  * customer **required** [customer-data-customer-interface](#customer-data-customer-interface)
  * customer_is_guest `boolean`: For guest customers, false for logged in customers
  * customer_note `string`: Notice text
  * customer_note_notify `boolean`: Customer notification flag
  * customer_tax_class_id `integer`: Customer tax class ID.
  * extension_attributes [quote-data-cart-extension-interface](#quote-data-cart-extension-interface)
  * id **required** `integer`: Cart/quote ID.
  * is_active `boolean`: Active status flag value. Otherwise, null.
  * is_virtual `boolean`: Virtual flag value. Otherwise, null.
  * items `array`: Array of items. Otherwise, null.
    * items [quote-data-cart-item-interface](#quote-data-cart-item-interface)
  * items_count `integer`: Number of different items or products in the cart. Otherwise, null.
  * items_qty `number`: Total quantity of all cart items. Otherwise, null.
  * orig_order_id `integer`: Original order ID. Otherwise, null.
  * reserved_order_id `integer`: Reserved order ID. Otherwise, null.
  * store_id **required** `integer`: Store identifier
  * updated_at `string`: Cart last update date and time. Otherwise, null.

### quote-data-cart-item-extension-interface
* quote-data-cart-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface

### quote-data-cart-item-interface
* quote-data-cart-item-interface `object`: Interface CartItemInterface
  * extension_attributes [quote-data-cart-item-extension-interface](#quote-data-cart-item-extension-interface)
  * item_id `integer`: Item ID. Otherwise, null.
  * name `string`: Product name. Otherwise, null.
  * price `number`: Product price. Otherwise, null.
  * product_option [quote-data-product-option-interface](#quote-data-product-option-interface)
  * product_type `string`: Product type. Otherwise, null.
  * qty **required** `number`: Product quantity.
  * quote_id **required** `string`: Quote id.
  * sku `string`: Product SKU. Otherwise, null.

### quote-data-cart-search-results-interface
* quote-data-cart-search-results-interface `object`: Interface CartSearchResultsInterface
  * items **required** `array`: Carts list.
    * items [quote-data-cart-interface](#quote-data-cart-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### quote-data-currency-extension-interface
* quote-data-currency-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface

### quote-data-currency-interface
* quote-data-currency-interface `object`: Interface CurrencyInterface
  * base_currency_code `string`: Base currency code
  * base_to_global_rate `number`: Base currency to global currency rate
  * base_to_quote_rate `number`: Base currency to quote currency rate
  * extension_attributes [quote-data-currency-extension-interface](#quote-data-currency-extension-interface)
  * global_currency_code `string`: Global currency code
  * quote_currency_code `string`: Quote currency code
  * store_currency_code `string`: Store currency code
  * store_to_base_rate `number`: Store currency to base currency rate
  * store_to_quote_rate `number`: Store currency to quote currency rate

### quote-data-payment-extension-interface
* quote-data-payment-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface
  * agreement_ids `array`
    * items `string`

### quote-data-payment-interface
* quote-data-payment-interface `object`: Interface PaymentInterface
  * additional_data `array`: Payment additional details
    * items `string`
  * extension_attributes [quote-data-payment-extension-interface](#quote-data-payment-extension-interface)
  * method **required** `string`: Payment method code
  * po_number `string`: Purchase order number

### quote-data-payment-method-interface
* quote-data-payment-method-interface `object`: Interface PaymentMethodInterface
  * code **required** `string`: Payment method code
  * title **required** `string`: Payment method title

### quote-data-product-option-extension-interface
* quote-data-product-option-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface
  * bundle_options `array`
    * items [bundle-data-bundle-option-interface](#bundle-data-bundle-option-interface)
  * configurable_item_options `array`
    * items [configurable-product-data-configurable-item-option-value-interface](#configurable-product-data-configurable-item-option-value-interface)
  * custom_options `array`
    * items [catalog-data-custom-option-interface](#catalog-data-custom-option-interface)
  * downloadable_option [downloadable-data-downloadable-option-interface](#downloadable-data-downloadable-option-interface)
  * giftcard_item_option [gift-card-data-gift-card-option-interface](#gift-card-data-gift-card-option-interface)

### quote-data-product-option-interface
* quote-data-product-option-interface `object`: Product option interface
  * extension_attributes [quote-data-product-option-extension-interface](#quote-data-product-option-extension-interface)

### quote-data-shipping-assignment-extension-interface
* quote-data-shipping-assignment-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface

### quote-data-shipping-assignment-interface
* quote-data-shipping-assignment-interface `object`: Interface ShippingAssignmentInterface
  * extension_attributes [quote-data-shipping-assignment-extension-interface](#quote-data-shipping-assignment-extension-interface)
  * items **required** `array`
    * items [quote-data-cart-item-interface](#quote-data-cart-item-interface)
  * shipping **required** [quote-data-shipping-interface](#quote-data-shipping-interface)

### quote-data-shipping-extension-interface
* quote-data-shipping-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface

### quote-data-shipping-interface
* quote-data-shipping-interface `object`: Interface ShippingInterface
  * address **required** [quote-data-address-interface](#quote-data-address-interface)
  * extension_attributes [quote-data-shipping-extension-interface](#quote-data-shipping-extension-interface)
  * method **required** `string`: Shipping method

### quote-data-shipping-method-extension-interface
* quote-data-shipping-method-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface

### quote-data-shipping-method-interface
* quote-data-shipping-method-interface `object`: Interface ShippingMethodInterface
  * amount **required** `number`: Shipping amount in store currency.
  * available **required** `boolean`: The value of the availability flag for the current shipping method.
  * base_amount **required** `number`: Shipping amount in base currency.
  * carrier_code **required** `string`: Shipping carrier code.
  * carrier_title `string`: Shipping carrier title. Otherwise, null.
  * error_message **required** `string`: Shipping Error message.
  * extension_attributes [quote-data-shipping-method-extension-interface](#quote-data-shipping-method-extension-interface)
  * method_code **required** `string`: Shipping method code.
  * method_title `string`: Shipping method title. Otherwise, null.
  * price_excl_tax **required** `number`: Shipping price excl tax.
  * price_incl_tax **required** `number`: Shipping price incl tax.

### quote-data-total-segment-extension-interface
* quote-data-total-segment-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface
  * gift_cards `string`
  * gw_add_card `string`
  * gw_allow_gift_receipt `string`
  * gw_base_price `string`
  * gw_base_price_incl_tax `string`
  * gw_base_tax_amount `string`
  * gw_card_base_price `string`
  * gw_card_base_price_incl_tax `string`
  * gw_card_base_tax_amount `string`
  * gw_card_price `string`
  * gw_card_price_incl_tax `string`
  * gw_card_tax_amount `string`
  * gw_item_ids `array`
    * items `string`
  * gw_items_base_price `string`
  * gw_items_base_price_incl_tax `string`
  * gw_items_base_tax_amount `string`
  * gw_items_price `string`
  * gw_items_price_incl_tax `string`
  * gw_items_tax_amount `string`
  * gw_order_id `string`
  * gw_price `string`
  * gw_price_incl_tax `string`
  * gw_tax_amount `string`
  * tax_grandtotal_details `array`
    * items [tax-data-grand-total-details-interface](#tax-data-grand-total-details-interface)

### quote-data-total-segment-interface
* quote-data-total-segment-interface `object`: Interface TotalsInterface
  * area `string`: Display area code.
  * code **required** `string`: Code
  * extension_attributes [quote-data-total-segment-extension-interface](#quote-data-total-segment-extension-interface)
  * title `string`: Total title
  * value **required** `number`: Total value

### quote-data-totals-additional-data-extension-interface
* quote-data-totals-additional-data-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface
  * gift_messages `array`
    * items [gift-message-data-message-interface](#gift-message-data-message-interface)

### quote-data-totals-additional-data-interface
* quote-data-totals-additional-data-interface `object`: Additional data for totals collection.
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * extension_attributes [quote-data-totals-additional-data-extension-interface](#quote-data-totals-additional-data-extension-interface)

### quote-data-totals-extension-interface
* quote-data-totals-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface
  * base_customer_balance_amount `number`
  * base_reward_currency_amount `number`
  * customer_balance_amount `number`
  * reward_currency_amount `number`
  * reward_points_balance `number`

### quote-data-totals-interface
* quote-data-totals-interface `object`: Interface TotalsInterface
  * base_currency_code `string`: Base currency code
  * base_discount_amount `number`: Discount amount in base currency
  * base_grand_total `number`: Grand total in base currency
  * base_shipping_amount `number`: Shipping amount in base currency
  * base_shipping_discount_amount `number`: Shipping discount amount in base currency
  * base_shipping_incl_tax `number`: Shipping including tax in base currency
  * base_shipping_tax_amount `number`: Shipping tax amount in base currency
  * base_subtotal `number`: Subtotal in base currency
  * base_subtotal_incl_tax `number`: Subtotal including tax in base currency
  * base_subtotal_with_discount `number`: Subtotal in base currency with applied discount
  * base_tax_amount `number`: Tax amount in base currency
  * coupon_code `string`: Applied coupon code
  * discount_amount `number`: Discount amount in quote currency
  * extension_attributes [quote-data-totals-extension-interface](#quote-data-totals-extension-interface)
  * grand_total `number`: Grand total in quote currency
  * items `array`: Totals by items
    * items [quote-data-totals-item-interface](#quote-data-totals-item-interface)
  * items_qty `integer`: Items qty
  * quote_currency_code `string`: Quote currency code
  * shipping_amount `number`: Shipping amount in quote currency
  * shipping_discount_amount `number`: Shipping discount amount in quote currency
  * shipping_incl_tax `number`: Shipping including tax in quote currency
  * shipping_tax_amount `number`: Shipping tax amount in quote currency
  * subtotal `number`: Subtotal in quote currency
  * subtotal_incl_tax `number`: Subtotal including tax in quote currency
  * subtotal_with_discount `number`: Subtotal in quote currency with applied discount
  * tax_amount `number`: Tax amount in quote currency
  * total_segments **required** `array`: Dynamically calculated totals
    * items [quote-data-total-segment-interface](#quote-data-total-segment-interface)
  * weee_tax_applied_amount **required** `number`: Item weee tax applied amount in quote currency.

### quote-data-totals-item-extension-interface
* quote-data-totals-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface

### quote-data-totals-item-interface
* quote-data-totals-item-interface `object`: Interface TotalsItemInterface
  * base_discount_amount `number`: Discount amount in base currency. Otherwise, null.
  * base_price **required** `number`: Item price in base currency.
  * base_price_incl_tax `number`: Price including tax in base currency. Otherwise, null.
  * base_row_total **required** `number`: Row total in base currency.
  * base_row_total_incl_tax `number`: Row total including tax in base currency. Otherwise, null.
  * base_tax_amount `number`: Tax amount in base currency. Otherwise, null.
  * discount_amount `number`: Discount amount in quote currency. Otherwise, null.
  * discount_percent `number`: Discount percent. Otherwise, null.
  * extension_attributes [quote-data-totals-item-extension-interface](#quote-data-totals-item-extension-interface)
  * item_id **required** `integer`: Item id
  * name `string`: Product name. Otherwise, null.
  * options **required** `string`: Item price in quote currency.
  * price **required** `number`: Item price in quote currency.
  * price_incl_tax `number`: Price including tax in quote currency. Otherwise, null.
  * qty **required** `number`: Item quantity.
  * row_total **required** `number`: Row total in quote currency.
  * row_total_incl_tax `number`: Row total including tax in quote currency. Otherwise, null.
  * row_total_with_discount `number`: Row total with discount in quote currency. Otherwise, null.
  * tax_amount `number`: Tax amount in quote currency. Otherwise, null.
  * tax_percent `number`: Tax percent. Otherwise, null.
  * weee_tax_applied **required** `string`: Item weee tax applied in quote currency.
  * weee_tax_applied_amount **required** `number`: Item weee tax applied amount in quote currency.

### rma-data-comment-extension-interface
* rma-data-comment-extension-interface `object`: ExtensionInterface class for @see \Magento\Rma\Api\Data\CommentInterface

### rma-data-comment-interface
* rma-data-comment-interface `object`: Interface CommentInterface
  * admin **required** `boolean`: Is_admin
  * comment **required** `string`: Comment
  * created_at **required** `string`: Created_at
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * customer_notified **required** `boolean`: Is_customer_notified
  * entity_id **required** `integer`: Entity_id
  * extension_attributes [rma-data-comment-extension-interface](#rma-data-comment-extension-interface)
  * rma_entity_id **required** `integer`: Rma Id
  * status **required** `string`: Status
  * visible_on_front **required** `boolean`: Is_visible_on_front

### rma-data-comment-search-result-interface
* rma-data-comment-search-result-interface `object`: Interface CommentSearchResultInterface
  * items **required** `array`: Rma Status History list
    * items [rma-data-comment-interface](#rma-data-comment-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### rma-data-item-extension-interface
* rma-data-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Rma\Api\Data\ItemInterface

### rma-data-item-interface
* rma-data-item-interface `object`: Interface CategoryInterface
  * condition **required** `string`: Condition
  * entity_id **required** `integer`: Id
  * extension_attributes [rma-data-item-extension-interface](#rma-data-item-extension-interface)
  * order_item_id **required** `integer`: Order_item_id
  * qty_approved **required** `integer`: Qty_approved
  * qty_authorized **required** `integer`: Qty_authorized
  * qty_requested **required** `integer`: Qty_requested
  * qty_returned **required** `integer`: Qty_returned
  * reason **required** `string`: Reason
  * resolution **required** `string`: Resolution
  * rma_entity_id **required** `integer`: RMA id
  * status **required** `string`: Status

### rma-data-rma-extension-interface
* rma-data-rma-extension-interface `object`: ExtensionInterface class for @see \Magento\Rma\Api\Data\RmaInterface

### rma-data-rma-interface
* rma-data-rma-interface `object`: Interface RmaInterface
  * comments **required** `array`: Comments list
    * items [rma-data-comment-interface](#rma-data-comment-interface)
  * custom_attributes `array`: Custom attributes values.
    * items [framework-attribute-interface](#framework-attribute-interface)
  * customer_custom_email **required** `string`: Customer_custom_email
  * customer_id **required** `integer`: Customer_id
  * date_requested **required** `string`: Date_requested
  * entity_id **required** `integer`: Entity_id
  * extension_attributes [rma-data-rma-extension-interface](#rma-data-rma-extension-interface)
  * increment_id **required** `string`: Entity_id
  * items **required** `array`: Items
    * items [rma-data-item-interface](#rma-data-item-interface)
  * order_id **required** `integer`: Order_id
  * order_increment_id **required** `string`: Order_increment_id
  * status **required** `string`: Status
  * store_id **required** `integer`: Store_id
  * tracks **required** `array`: Tracks list
    * items [rma-data-track-interface](#rma-data-track-interface)

### rma-data-rma-search-result-interface
* rma-data-rma-search-result-interface `object`: Interface RmaSearchResultInterface
  * items **required** `array`: Rma list
    * items [rma-data-rma-interface](#rma-data-rma-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### rma-data-track-extension-interface
* rma-data-track-extension-interface `object`: ExtensionInterface class for @see \Magento\Rma\Api\Data\TrackInterface

### rma-data-track-interface
* rma-data-track-interface `object`: Interface TrackInterface
  * carrier_code **required** `string`: Carrier code
  * carrier_title **required** `string`: Carrier title
  * entity_id **required** `integer`: Entity id
  * extension_attributes [rma-data-track-extension-interface](#rma-data-track-extension-interface)
  * rma_entity_id **required** `integer`: Rma entity id
  * track_number **required** `string`: Track number

### rma-data-track-search-result-interface
* rma-data-track-search-result-interface `object`: Interface TrackSearchResultInterface
  * items **required** `array`: Rma list
    * items [rma-data-track-interface](#rma-data-track-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-creditmemo-comment-creation-extension-interface
* sales-data-creditmemo-comment-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentCreationInterface

### sales-data-creditmemo-comment-creation-interface
* sales-data-creditmemo-comment-creation-interface `object`: Interface CreditmemoCommentCreationInterface
  * comment **required** `string`: Comment.
  * extension_attributes [sales-data-creditmemo-comment-creation-extension-interface](#sales-data-creditmemo-comment-creation-extension-interface)
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.

### sales-data-creditmemo-comment-extension-interface
* sales-data-creditmemo-comment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentInterface

### sales-data-creditmemo-comment-interface
* sales-data-creditmemo-comment-interface `object`: Credit memo comment interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
  * comment **required** `string`: Comment.
  * created_at `string`: Created-at timestamp.
  * entity_id `integer`: Credit memo ID.
  * extension_attributes [sales-data-creditmemo-comment-extension-interface](#sales-data-creditmemo-comment-extension-interface)
  * is_customer_notified **required** `integer`: Is-customer-notified flag value.
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.
  * parent_id **required** `integer`: Parent ID.

### sales-data-creditmemo-comment-search-result-interface
* sales-data-creditmemo-comment-search-result-interface `object`: Credit memo comment search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
  * items **required** `array`: Array of collection items.
    * items [sales-data-creditmemo-comment-interface](#sales-data-creditmemo-comment-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-creditmemo-creation-arguments-extension-interface
* sales-data-creditmemo-creation-arguments-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface
  * return_to_stock_items `array`
    * items `integer`

### sales-data-creditmemo-creation-arguments-interface
* sales-data-creditmemo-creation-arguments-interface `object`: Interface CreditmemoCreationArgumentsInterface
  * adjustment_negative `number`: Credit memo negative adjustment.
  * adjustment_positive `number`: Credit memo positive adjustment.
  * extension_attributes [sales-data-creditmemo-creation-arguments-extension-interface](#sales-data-creditmemo-creation-arguments-extension-interface)
  * shipping_amount `number`: Credit memo shipping amount.

### sales-data-creditmemo-extension-interface
* sales-data-creditmemo-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoInterface

### sales-data-creditmemo-interface
* sales-data-creditmemo-interface `object`: Credit memo interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
  * adjustment `number`: Credit memo adjustment.
  * adjustment_negative `number`: Credit memo negative adjustment.
  * adjustment_positive `number`: Credit memo positive adjustment.
  * base_adjustment `number`: Credit memo base adjustment.
  * base_adjustment_negative `number`: Credit memo negative base adjustment.
  * base_adjustment_positive `number`: Credit memo positive base adjustment.
  * base_currency_code `string`: Credit memo base currency code.
  * base_discount_amount `number`: Credit memo base discount amount.
  * base_discount_tax_compensation_amount `number`: Credit memo base discount tax compensation amount.
  * base_grand_total `number`: Credit memo base grand total.
  * base_shipping_amount `number`: Credit memo base shipping amount.
  * base_shipping_discount_tax_compensation_amnt `number`: Credit memo base shipping discount tax compensation amount.
  * base_shipping_incl_tax `number`: Credit memo base shipping including tax.
  * base_shipping_tax_amount `number`: Credit memo base shipping tax amount.
  * base_subtotal `number`: Credit memo base subtotal.
  * base_subtotal_incl_tax `number`: Credit memo base subtotal including tax.
  * base_tax_amount `number`: Credit memo base tax amount.
  * base_to_global_rate `number`: Credit memo base-to-global rate.
  * base_to_order_rate `number`: Credit memo base-to-order rate.
  * billing_address_id `integer`: Credit memo billing address ID.
  * comments `array`: Array of any credit memo comments. Otherwise, null.
    * items [sales-data-creditmemo-comment-interface](#sales-data-creditmemo-comment-interface)
  * created_at `string`: Credit memo created-at timestamp.
  * creditmemo_status `integer`: Credit memo status.
  * discount_amount `number`: Credit memo discount amount.
  * discount_description `string`: Credit memo discount description.
  * discount_tax_compensation_amount `number`: Credit memo discount tax compensation amount.
  * email_sent `integer`: Credit memo email sent flag value.
  * entity_id `integer`: Credit memo ID.
  * extension_attributes [sales-data-creditmemo-extension-interface](#sales-data-creditmemo-extension-interface)
  * global_currency_code `string`: Credit memo global currency code.
  * grand_total `number`: Credit memo grand total.
  * increment_id `string`: Credit memo increment ID.
  * invoice_id `integer`: Credit memo invoice ID.
  * items **required** `array`: Array of credit memo items.
    * items [sales-data-creditmemo-item-interface](#sales-data-creditmemo-item-interface)
  * order_currency_code `string`: Credit memo order currency code.
  * order_id **required** `integer`: Credit memo order ID.
  * shipping_address_id `integer`: Credit memo shipping address ID.
  * shipping_amount `number`: Credit memo shipping amount.
  * shipping_discount_tax_compensation_amount `number`: Credit memo shipping discount tax compensation amount.
  * shipping_incl_tax `number`: Credit memo shipping including tax.
  * shipping_tax_amount `number`: Credit memo shipping tax amount.
  * state `integer`: Credit memo state.
  * store_currency_code `string`: Credit memo store currency code.
  * store_id `integer`: Credit memo store ID.
  * store_to_base_rate `number`: Credit memo store-to-base rate.
  * store_to_order_rate `number`: Credit memo store-to-order rate.
  * subtotal `number`: Credit memo subtotal.
  * subtotal_incl_tax `number`: Credit memo subtotal including tax.
  * tax_amount `number`: Credit memo tax amount.
  * transaction_id `string`: Credit memo transaction ID.
  * updated_at `string`: Credit memo updated-at timestamp.

### sales-data-creditmemo-item-creation-extension-interface
* sales-data-creditmemo-item-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemCreationInterface

### sales-data-creditmemo-item-creation-interface
* sales-data-creditmemo-item-creation-interface `object`: Interface CreditmemoItemCreationInterface
  * extension_attributes [sales-data-creditmemo-item-creation-extension-interface](#sales-data-creditmemo-item-creation-extension-interface)
  * order_item_id **required** `integer`: Order item ID.
  * qty **required** `number`: Quantity.

### sales-data-creditmemo-item-extension-interface
* sales-data-creditmemo-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemInterface

### sales-data-creditmemo-item-interface
* sales-data-creditmemo-item-interface `object`: Credit memo item interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo item is an invoiced item for which a merchant creates a credit memo.
  * additional_data `string`: Additional data.
  * base_cost **required** `number`: The base cost for a credit memo item.
  * base_discount_amount `number`: The base discount amount for a credit memo item.
  * base_discount_tax_compensation_amount `number`: The base discount tax compensation amount for a credit memo item.
  * base_price **required** `number`: The base price for a credit memo item.
  * base_price_incl_tax `number`: Base price including tax.
  * base_row_total `number`: Base row total.
  * base_row_total_incl_tax `number`: Base row total including tax.
  * base_tax_amount `number`: Base tax amount.
  * base_weee_tax_applied_amount `number`: Base WEEE tax applied amount.
  * base_weee_tax_applied_row_amnt `number`: Base WEEE tax applied row amount.
  * base_weee_tax_disposition `number`: Base WEEE tax disposition.
  * base_weee_tax_row_disposition `number`: Base WEEE tax row disposition.
  * description `string`: Description.
  * discount_amount `number`: Discount amount.
  * discount_tax_compensation_amount `number`: Discount tax compensation amount.
  * entity_id **required** `integer`: Credit memo item ID.
  * extension_attributes [sales-data-creditmemo-item-extension-interface](#sales-data-creditmemo-item-extension-interface)
  * name `string`: Name.
  * order_item_id **required** `integer`: Order item ID.
  * parent_id `integer`: Parent ID.
  * price `number`: Price.
  * price_incl_tax `number`: Price including tax.
  * product_id `integer`: Product ID.
  * qty **required** `number`: Quantity.
  * row_total `number`: Row total.
  * row_total_incl_tax `number`: Row total including tax.
  * sku `string`: SKU.
  * tax_amount `number`: Tax amount.
  * weee_tax_applied `string`: WEEE tax applied.
  * weee_tax_applied_amount `number`: WEEE tax applied amount.
  * weee_tax_applied_row_amount `number`: WEEE tax applied row amount.
  * weee_tax_disposition `number`: WEEE tax disposition.
  * weee_tax_row_disposition `number`: WEEE tax row disposition.

### sales-data-creditmemo-search-result-interface
* sales-data-creditmemo-search-result-interface `object`: Credit memo search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
  * items **required** `array`: Array of collection items.
    * items [sales-data-creditmemo-interface](#sales-data-creditmemo-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-invoice-comment-creation-extension-interface
* sales-data-invoice-comment-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentCreationInterface

### sales-data-invoice-comment-creation-interface
* sales-data-invoice-comment-creation-interface `object`: Interface InvoiceCommentCreationInterface
  * comment **required** `string`: Comment.
  * extension_attributes [sales-data-invoice-comment-creation-extension-interface](#sales-data-invoice-comment-creation-extension-interface)
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.

### sales-data-invoice-comment-extension-interface
* sales-data-invoice-comment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentInterface

### sales-data-invoice-comment-interface
* sales-data-invoice-comment-interface `object`: Invoice comment interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
  * comment **required** `string`: Comment.
  * created_at `string`: Created-at timestamp.
  * entity_id `integer`: Invoice ID.
  * extension_attributes [sales-data-invoice-comment-extension-interface](#sales-data-invoice-comment-extension-interface)
  * is_customer_notified **required** `integer`: Is-customer-notified flag value.
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.
  * parent_id **required** `integer`: Parent ID.

### sales-data-invoice-comment-search-result-interface
* sales-data-invoice-comment-search-result-interface `object`: Invoice comment search result interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
  * items **required** `array`: Array of collection items.
    * items [sales-data-invoice-comment-interface](#sales-data-invoice-comment-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-invoice-creation-arguments-extension-interface
* sales-data-invoice-creation-arguments-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface

### sales-data-invoice-creation-arguments-interface
* sales-data-invoice-creation-arguments-interface `object`: Interface for creation arguments for Invoice.
  * extension_attributes [sales-data-invoice-creation-arguments-extension-interface](#sales-data-invoice-creation-arguments-extension-interface)

### sales-data-invoice-extension-interface
* sales-data-invoice-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceInterface
  * base_customer_balance_amount `number`
  * base_gift_cards_amount `number`
  * customer_balance_amount `number`
  * gift_cards_amount `number`

### sales-data-invoice-interface
* sales-data-invoice-interface `object`: Invoice interface. An invoice is a record of the receipt of payment for an order.
  * base_currency_code `string`: Base currency code.
  * base_discount_amount `number`: Base discount amount.
  * base_discount_tax_compensation_amount `number`: Base discount tax compensation amount.
  * base_grand_total `number`: Base grand total.
  * base_shipping_amount `number`: Base shipping amount.
  * base_shipping_discount_tax_compensation_amnt `number`: Base shipping discount tax compensation amount.
  * base_shipping_incl_tax `number`: Base shipping including tax.
  * base_shipping_tax_amount `number`: Base shipping tax amount.
  * base_subtotal `number`: Base subtotal.
  * base_subtotal_incl_tax `number`: Base subtotal including tax.
  * base_tax_amount `number`: Base tax amount.
  * base_to_global_rate `number`: Base-to-global rate.
  * base_to_order_rate `number`: Base-to-order rate.
  * base_total_refunded `number`: Base total refunded.
  * billing_address_id `integer`: Billing address ID.
  * can_void_flag `integer`: Can void flag value.
  * comments `array`: Array of any invoice comments. Otherwise, null.
    * items [sales-data-invoice-comment-interface](#sales-data-invoice-comment-interface)
  * created_at `string`: Created-at timestamp.
  * discount_amount `number`: Discount amount.
  * discount_description `string`: Discount description.
  * discount_tax_compensation_amount `number`: Discount tax compensation amount.
  * email_sent `integer`: Email-sent flag value.
  * entity_id `integer`: Invoice ID.
  * extension_attributes [sales-data-invoice-extension-interface](#sales-data-invoice-extension-interface)
  * global_currency_code `string`: Global currency code.
  * grand_total `number`: Grand total.
  * increment_id `string`: Increment ID.
  * is_used_for_refund `integer`: Is-used-for-refund flag value.
  * items **required** `array`: Array of invoice items.
    * items [sales-data-invoice-item-interface](#sales-data-invoice-item-interface)
  * order_currency_code `string`: Order currency code.
  * order_id **required** `integer`: Order ID.
  * shipping_address_id `integer`: Shipping address ID.
  * shipping_amount `number`: Shipping amount.
  * shipping_discount_tax_compensation_amount `number`: Shipping discount tax compensation amount.
  * shipping_incl_tax `number`: Shipping including tax.
  * shipping_tax_amount `number`: Shipping tax amount.
  * state `integer`: State.
  * store_currency_code `string`: Store currency code.
  * store_id `integer`: Store ID.
  * store_to_base_rate `number`: Store-to-base rate.
  * store_to_order_rate `number`: Store-to-order rate.
  * subtotal `number`: Subtotal.
  * subtotal_incl_tax `number`: Subtotal including tax.
  * tax_amount `number`: Tax amount.
  * total_qty **required** `number`: Total quantity.
  * transaction_id `string`: Transaction ID.
  * updated_at `string`: Updated-at timestamp.

### sales-data-invoice-item-creation-extension-interface
* sales-data-invoice-item-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemCreationInterface

### sales-data-invoice-item-creation-interface
* sales-data-invoice-item-creation-interface `object`: Input argument for invoice creation Interface InvoiceItemCreationInterface
  * extension_attributes [sales-data-invoice-item-creation-extension-interface](#sales-data-invoice-item-creation-extension-interface)
  * order_item_id **required** `integer`: Order item ID.
  * qty **required** `number`: Quantity.

### sales-data-invoice-item-extension-interface
* sales-data-invoice-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemInterface

### sales-data-invoice-item-interface
* sales-data-invoice-item-interface `object`: Invoice item interface. An invoice is a record of the receipt of payment for an order. An invoice item is a purchased item in an invoice.
  * additional_data `string`: Additional data.
  * base_cost `number`: Base cost.
  * base_discount_amount `number`: Base discount amount.
  * base_discount_tax_compensation_amount `number`: Base discount tax compensation amount.
  * base_price `number`: Base price.
  * base_price_incl_tax `number`: Base price including tax.
  * base_row_total `number`: Base row total.
  * base_row_total_incl_tax `number`: Base row total including tax.
  * base_tax_amount `number`: Base tax amount.
  * description `string`: Description.
  * discount_amount `number`: Discount amount.
  * discount_tax_compensation_amount `number`: Discount tax compensation amount.
  * entity_id `integer`: Invoice item ID.
  * extension_attributes [sales-data-invoice-item-extension-interface](#sales-data-invoice-item-extension-interface)
  * name `string`: Name.
  * order_item_id **required** `integer`: Order item ID.
  * parent_id `integer`: Parent ID.
  * price `number`: Price.
  * price_incl_tax `number`: Price including tax.
  * product_id `integer`: Product ID.
  * qty **required** `number`: Quantity.
  * row_total `number`: Row total.
  * row_total_incl_tax `number`: Row total including tax.
  * sku **required** `string`: SKU.
  * tax_amount `number`: Tax amount.

### sales-data-invoice-search-result-interface
* sales-data-invoice-search-result-interface `object`: Invoice search result interface. An invoice is a record of the receipt of payment for an order.
  * items **required** `array`: Array of collection items.
    * items [sales-data-invoice-interface](#sales-data-invoice-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-order-address-extension-interface
* sales-data-order-address-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface

### sales-data-order-address-interface
* sales-data-order-address-interface `object`: Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * address_type **required** `string`: Address type.
  * city **required** `string`: City.
  * company `string`: Company.
  * country_id **required** `string`: Country ID.
  * customer_address_id `integer`: Country address ID.
  * customer_id `integer`: Customer ID.
  * email `string`: Email address.
  * entity_id `integer`: Order address ID.
  * extension_attributes [sales-data-order-address-extension-interface](#sales-data-order-address-extension-interface)
  * fax `string`: Fax number.
  * firstname **required** `string`: First name.
  * lastname **required** `string`: Last name.
  * middlename `string`: Middle name.
  * parent_id `integer`: Parent ID.
  * postcode **required** `string`: Postal code.
  * prefix `string`: Prefix.
  * region `string`: Region.
  * region_code `string`: Region code.
  * region_id `integer`: Region ID.
  * street `array`: Array of any street values. Otherwise, null.
    * items `string`
  * suffix `string`: Suffix.
  * telephone **required** `string`: Telephone number.
  * vat_id `string`: VAT ID.
  * vat_is_valid `integer`: VAT-is-valid flag value.
  * vat_request_date `string`: VAT request date.
  * vat_request_id `string`: VAT request ID.
  * vat_request_success `integer`: VAT-request-success flag value.

### sales-data-order-extension-interface
* sales-data-order-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface
  * applied_taxes `array`
    * items [tax-data-order-tax-details-applied-tax-interface](#tax-data-order-tax-details-applied-tax-interface)
  * base_customer_balance_amount `number`
  * converting_from_quote `boolean`
  * customer_balance_amount `number`
  * gift_message [gift-message-data-message-interface](#gift-message-data-message-interface)
  * gw_add_card `string`
  * gw_allow_gift_receipt `string`
  * gw_base_price `string`
  * gw_base_price_incl_tax `string`
  * gw_base_tax_amount `string`
  * gw_card_base_price `string`
  * gw_card_base_price_incl_tax `string`
  * gw_card_base_tax_amount `string`
  * gw_card_price `string`
  * gw_card_price_incl_tax `string`
  * gw_card_tax_amount `string`
  * gw_id `string`
  * gw_items_base_price `string`
  * gw_items_base_price_incl_tax `string`
  * gw_items_base_tax_amount `string`
  * gw_items_price `string`
  * gw_items_price_incl_tax `string`
  * gw_items_tax_amount `string`
  * gw_price `string`
  * gw_price_incl_tax `string`
  * gw_tax_amount `string`
  * item_applied_taxes `array`
    * items [tax-data-order-tax-details-item-interface](#tax-data-order-tax-details-item-interface)
  * shipping_assignments `array`
    * items [sales-data-shipping-assignment-interface](#sales-data-shipping-assignment-interface)

### sales-data-order-interface
* sales-data-order-interface `object`: Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * adjustment_negative `number`: Negative adjustment value.
  * adjustment_positive `number`: Positive adjustment value.
  * applied_rule_ids `string`: Applied rule IDs.
  * base_adjustment_negative `number`: Base negative adjustment value.
  * base_adjustment_positive `number`: Base positive adjustment value.
  * base_currency_code `string`: Base currency code.
  * base_discount_amount `number`: Base discount amount.
  * base_discount_canceled `number`: Base discount canceled.
  * base_discount_invoiced `number`: Base discount invoiced.
  * base_discount_refunded `number`: Base discount refunded.
  * base_discount_tax_compensation_amount `number`: Base discount tax compensation amount.
  * base_discount_tax_compensation_invoiced `number`: Base discount tax compensation invoiced.
  * base_discount_tax_compensation_refunded `number`: Base discount tax compensation refunded.
  * base_grand_total **required** `number`: Base grand total.
  * base_shipping_amount `number`: Base shipping amount.
  * base_shipping_canceled `number`: Base shipping canceled.
  * base_shipping_discount_amount `number`: Base shipping discount amount.
  * base_shipping_discount_tax_compensation_amnt `number`: Base shipping discount tax compensation amount.
  * base_shipping_incl_tax `number`: Base shipping including tax.
  * base_shipping_invoiced `number`: Base shipping invoiced.
  * base_shipping_refunded `number`: Base shipping refunded.
  * base_shipping_tax_amount `number`: Base shipping tax amount.
  * base_shipping_tax_refunded `number`: Base shipping tax refunded.
  * base_subtotal `number`: Base subtotal.
  * base_subtotal_canceled `number`: Base subtotal canceled.
  * base_subtotal_incl_tax `number`: Base subtotal including tax.
  * base_subtotal_invoiced `number`: Base subtotal invoiced.
  * base_subtotal_refunded `number`: Base subtotal refunded.
  * base_tax_amount `number`: Base tax amount.
  * base_tax_canceled `number`: Base tax canceled.
  * base_tax_invoiced `number`: Base tax invoiced.
  * base_tax_refunded `number`: Base tax refunded.
  * base_to_global_rate `number`: Base-to-global rate.
  * base_to_order_rate `number`: Base-to-order rate.
  * base_total_canceled `number`: Base total canceled.
  * base_total_due `number`: Base total due.
  * base_total_invoiced `number`: Base total invoiced.
  * base_total_invoiced_cost `number`: Base total invoiced cost.
  * base_total_offline_refunded `number`: Base total offline refunded.
  * base_total_online_refunded `number`: Base total online refunded.
  * base_total_paid `number`: Base total paid.
  * base_total_qty_ordered `number`: Base total quantity ordered.
  * base_total_refunded `number`: Base total refunded.
  * billing_address [sales-data-order-address-interface](#sales-data-order-address-interface)
  * billing_address_id `integer`: Billing address ID.
  * can_ship_partially `integer`: Can-ship-partially flag value.
  * can_ship_partially_item `integer`: Can-ship-partially-item flag value.
  * coupon_code `string`: Coupon code.
  * created_at `string`: Created-at timestamp.
  * customer_dob `string`: Customer date-of-birth (DOB).
  * customer_email **required** `string`: Customer email address.
  * customer_firstname `string`: Customer first name.
  * customer_gender `integer`: Customer gender.
  * customer_group_id `integer`: Customer group ID.
  * customer_id `integer`: Customer ID.
  * customer_is_guest `integer`: Customer-is-guest flag value.
  * customer_lastname `string`: Customer last name.
  * customer_middlename `string`: Customer middle name.
  * customer_note `string`: Customer note.
  * customer_note_notify `integer`: Customer-note-notify flag value.
  * customer_prefix `string`: Customer prefix.
  * customer_suffix `string`: Customer suffix.
  * customer_taxvat `string`: Customer value-added tax (VAT).
  * discount_amount `number`: Discount amount.
  * discount_canceled `number`: Discount canceled.
  * discount_description `string`: Discount description.
  * discount_invoiced `number`: Discount invoiced.
  * discount_refunded `number`: Discount refunded amount.
  * discount_tax_compensation_amount `number`: Discount tax compensation amount.
  * discount_tax_compensation_invoiced `number`: Discount tax compensation invoiced amount.
  * discount_tax_compensation_refunded `number`: Discount tax compensation refunded amount.
  * edit_increment `integer`: Edit increment value.
  * email_sent `integer`: Email-sent flag value.
  * entity_id `integer`: Order ID.
  * ext_customer_id `string`: External customer ID.
  * ext_order_id `string`: External order ID.
  * extension_attributes [sales-data-order-extension-interface](#sales-data-order-extension-interface)
  * forced_shipment_with_invoice `integer`: Forced-shipment-with-invoice flag value.
  * global_currency_code `string`: Global currency code.
  * grand_total **required** `number`: Grand total.
  * hold_before_state `string`: Hold before state.
  * hold_before_status `string`: Hold before status.
  * increment_id `string`: Increment ID.
  * is_virtual `integer`: Is-virtual flag value.
  * items **required** `array`: Array of items.
    * items [sales-data-order-item-interface](#sales-data-order-item-interface)
  * order_currency_code `string`: Order currency code.
  * original_increment_id `string`: Original increment ID.
  * payment [sales-data-order-payment-interface](#sales-data-order-payment-interface)
  * payment_auth_expiration `integer`: Payment authorization expiration date.
  * payment_authorization_amount `number`: Payment authorization amount.
  * protect_code `string`: Protect code.
  * quote_address_id `integer`: Quote address ID.
  * quote_id `integer`: Quote ID.
  * relation_child_id `string`: Relation child ID.
  * relation_child_real_id `string`: Relation child real ID.
  * relation_parent_id `string`: Relation parent ID.
  * relation_parent_real_id `string`: Relation parent real ID.
  * remote_ip `string`: Remote IP address.
  * shipping_amount `number`: Shipping amount.
  * shipping_canceled `number`: Shipping canceled amount.
  * shipping_description `string`: Shipping description.
  * shipping_discount_amount `number`: Shipping discount amount.
  * shipping_discount_tax_compensation_amount `number`: Shipping discount tax compensation amount.
  * shipping_incl_tax `number`: Shipping including tax amount.
  * shipping_invoiced `number`: Shipping invoiced amount.
  * shipping_refunded `number`: Shipping refunded amount.
  * shipping_tax_amount `number`: Shipping tax amount.
  * shipping_tax_refunded `number`: Shipping tax refunded amount.
  * state `string`: State.
  * status `string`: Status.
  * status_histories `array`: Array of status histories.
    * items [sales-data-order-status-history-interface](#sales-data-order-status-history-interface)
  * store_currency_code `string`: Store currency code.
  * store_id `integer`: Store ID.
  * store_name `string`: Store name.
  * store_to_base_rate `number`: Store-to-base rate.
  * store_to_order_rate `number`: Store-to-order rate.
  * subtotal `number`: Subtotal.
  * subtotal_canceled `number`: Subtotal canceled amount.
  * subtotal_incl_tax `number`: Subtotal including tax amount.
  * subtotal_invoiced `number`: Subtotal invoiced amount.
  * subtotal_refunded `number`: Subtotal refunded amount.
  * tax_amount `number`: Tax amount.
  * tax_canceled `number`: Tax canceled amount.
  * tax_invoiced `number`: Tax invoiced amount.
  * tax_refunded `number`: Tax refunded amount.
  * total_canceled `number`: Total canceled.
  * total_due `number`: Total due.
  * total_invoiced `number`: Total invoiced amount.
  * total_item_count `integer`: Total item count.
  * total_offline_refunded `number`: Total offline refunded amount.
  * total_online_refunded `number`: Total online refunded amount.
  * total_paid `number`: Total paid.
  * total_qty_ordered `number`: Total quantity ordered.
  * total_refunded `number`: Total amount refunded.
  * updated_at `string`: Updated-at timestamp.
  * weight `number`: Weight.
  * x_forwarded_for `string`: X-Forwarded-For field value.

### sales-data-order-item-extension-interface
* sales-data-order-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface
  * gift_message [gift-message-data-message-interface](#gift-message-data-message-interface)

### sales-data-order-item-interface
* sales-data-order-item-interface `object`: Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * additional_data `string`: Additional data.
  * amount_refunded `number`: Amount refunded.
  * applied_rule_ids `string`: Applied rule IDs.
  * base_amount_refunded `number`: Base amount refunded.
  * base_cost `number`: Base cost.
  * base_discount_amount `number`: Base discount amount.
  * base_discount_invoiced `number`: Base discount invoiced.
  * base_discount_refunded `number`: Base discount refunded.
  * base_discount_tax_compensation_amount `number`: Base discount tax compensation amount.
  * base_discount_tax_compensation_invoiced `number`: Base discount tax compensation invoiced.
  * base_discount_tax_compensation_refunded `number`: Base discount tax compensation refunded.
  * base_original_price `number`: Base original price.
  * base_price `number`: Base price.
  * base_price_incl_tax `number`: Base price including tax.
  * base_row_invoiced `number`: Base row invoiced.
  * base_row_total `number`: Base row total.
  * base_row_total_incl_tax `number`: Base row total including tax.
  * base_tax_amount `number`: Base tax amount.
  * base_tax_before_discount `number`: Base tax before discount.
  * base_tax_invoiced `number`: Base tax invoiced.
  * base_tax_refunded `number`: Base tax refunded.
  * base_weee_tax_applied_amount `number`: Base WEEE tax applied amount.
  * base_weee_tax_applied_row_amnt `number`: Base WEEE tax applied row amount.
  * base_weee_tax_disposition `number`: Base WEEE tax disposition.
  * base_weee_tax_row_disposition `number`: Base WEEE tax row disposition.
  * created_at `string`: Created-at timestamp.
  * description `string`: Description.
  * discount_amount `number`: Discount amount.
  * discount_invoiced `number`: Discount invoiced.
  * discount_percent `number`: Discount percent.
  * discount_refunded `number`: Discount refunded.
  * discount_tax_compensation_amount `number`: Discount tax compensation amount.
  * discount_tax_compensation_canceled `number`: Discount tax compensation canceled.
  * discount_tax_compensation_invoiced `number`: Discount tax compensation invoiced.
  * discount_tax_compensation_refunded `number`: Discount tax compensation refunded.
  * event_id `integer`: Event ID.
  * ext_order_item_id `string`: External order item ID.
  * extension_attributes [sales-data-order-item-extension-interface](#sales-data-order-item-extension-interface)
  * free_shipping `integer`: Free-shipping flag value.
  * gw_base_price `number`: GW base price.
  * gw_base_price_invoiced `number`: GW base price invoiced.
  * gw_base_price_refunded `number`: GW base price refunded.
  * gw_base_tax_amount `number`: GW base tax amount.
  * gw_base_tax_amount_invoiced `number`: GW base tax amount invoiced.
  * gw_base_tax_amount_refunded `number`: GW base tax amount refunded.
  * gw_id `integer`: GW ID.
  * gw_price `number`: GW price.
  * gw_price_invoiced `number`: GW price invoiced.
  * gw_price_refunded `number`: GW price refunded.
  * gw_tax_amount `number`: GW tax amount.
  * gw_tax_amount_invoiced `number`: GW tax amount invoiced.
  * gw_tax_amount_refunded `number`: GW tax amount refunded.
  * is_qty_decimal `integer`: Is-quantity-decimal flag value.
  * is_virtual `integer`: Is-virtual flag value.
  * item_id `integer`: Item ID.
  * locked_do_invoice `integer`: Locked DO invoice flag value.
  * locked_do_ship `integer`: Locked DO ship flag value.
  * name `string`: Name.
  * no_discount `integer`: No-discount flag value.
  * order_id `integer`: Order ID.
  * original_price `number`: Original price.
  * parent_item [sales-data-order-item-interface](#sales-data-order-item-interface)
  * parent_item_id `integer`: Parent item ID.
  * price `number`: Price.
  * price_incl_tax `number`: Price including tax.
  * product_id `integer`: Product ID.
  * product_option [catalog-data-product-option-interface](#catalog-data-product-option-interface)
  * product_type `string`: Product type.
  * qty_backordered `number`: Quantity backordered.
  * qty_canceled `number`: Quantity canceled.
  * qty_invoiced `number`: Quantity invoiced.
  * qty_ordered `number`: Quantity ordered.
  * qty_refunded `number`: Quantity refunded.
  * qty_returned `number`: Quantity returned.
  * qty_shipped `number`: Quantity shipped.
  * quote_item_id `integer`: Quote item ID.
  * row_invoiced `number`: Row invoiced.
  * row_total `number`: Row total.
  * row_total_incl_tax `number`: Row total including tax.
  * row_weight `number`: Row weight.
  * sku **required** `string`: SKU.
  * store_id `integer`: Store ID.
  * tax_amount `number`: Tax amount.
  * tax_before_discount `number`: Tax before discount.
  * tax_canceled `number`: Tax canceled.
  * tax_invoiced `number`: Tax invoiced.
  * tax_percent `number`: Tax percent.
  * tax_refunded `number`: Tax refunded.
  * updated_at `string`: Updated-at timestamp.
  * weee_tax_applied `string`: WEEE tax applied.
  * weee_tax_applied_amount `number`: WEEE tax applied amount.
  * weee_tax_applied_row_amount `number`: WEEE tax applied row amount.
  * weee_tax_disposition `number`: WEEE tax disposition.
  * weee_tax_row_disposition `number`: WEEE tax row disposition.
  * weight `number`: Weight.

### sales-data-order-item-search-result-interface
* sales-data-order-item-search-result-interface `object`: Order item search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * items **required** `array`: Array of collection items.
    * items [sales-data-order-item-interface](#sales-data-order-item-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-order-payment-extension-interface
* sales-data-order-payment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface
  * vault_payment_token [vault-data-payment-token-interface](#vault-data-payment-token-interface)

### sales-data-order-payment-interface
* sales-data-order-payment-interface `object`: Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * account_status **required** `string`: Account status.
  * additional_data `string`: Additional data.
  * additional_information **required** `array`: Array of additional information.
    * items `string`
  * address_status `string`: Address status.
  * amount_authorized `number`: Amount authorized.
  * amount_canceled `number`: Amount canceled.
  * amount_ordered `number`: Amount ordered.
  * amount_paid `number`: Amount paid.
  * amount_refunded `number`: Amount refunded.
  * anet_trans_method `string`: Anet transaction method.
  * base_amount_authorized `number`: Base amount authorized.
  * base_amount_canceled `number`: Base amount canceled.
  * base_amount_ordered `number`: Base amount ordered.
  * base_amount_paid `number`: Base amount paid.
  * base_amount_paid_online `number`: Base amount paid online.
  * base_amount_refunded `number`: Base amount refunded.
  * base_amount_refunded_online `number`: Base amount refunded online.
  * base_shipping_amount `number`: Base shipping amount.
  * base_shipping_captured `number`: Base shipping captured amount.
  * base_shipping_refunded `number`: Base shipping refunded amount.
  * cc_approval `string`: Credit card approval.
  * cc_avs_status `string`: Credit card avs status.
  * cc_cid_status `string`: Credit card CID status.
  * cc_debug_request_body `string`: Credit card debug request body.
  * cc_debug_response_body `string`: Credit card debug response body.
  * cc_debug_response_serialized `string`: Credit card debug response serialized.
  * cc_exp_month `string`: Credit card expiration month.
  * cc_exp_year `string`: Credit card expiration year.
  * cc_last4 **required** `string`: Last four digits of the credit card.
  * cc_number_enc `string`: Encrypted credit card number.
  * cc_owner `string`: Credit card number.
  * cc_secure_verify `string`: Credit card secure verify.
  * cc_ss_issue `string`: Credit card SS issue.
  * cc_ss_start_month `string`: Credit card SS start month.
  * cc_ss_start_year `string`: Credit card SS start year.
  * cc_status `string`: Credit card status.
  * cc_status_description `string`: Credit card status description.
  * cc_trans_id `string`: Credit card transaction ID.
  * cc_type `string`: Credit card type.
  * echeck_account_name `string`: eCheck account name.
  * echeck_account_type `string`: eCheck account type.
  * echeck_bank_name `string`: eCheck bank name.
  * echeck_routing_number `string`: eCheck routing number.
  * echeck_type `string`: eCheck type.
  * entity_id `integer`: Entity ID.
  * extension_attributes [sales-data-order-payment-extension-interface](#sales-data-order-payment-extension-interface)
  * last_trans_id `string`: Last transaction ID.
  * method **required** `string`: Method.
  * parent_id `integer`: Parent ID.
  * po_number `string`: PO number.
  * protection_eligibility `string`: Protection eligibility.
  * quote_payment_id `integer`: Quote payment ID.
  * shipping_amount `number`: Shipping amount.
  * shipping_captured `number`: Shipping captured.
  * shipping_refunded `number`: Shipping refunded.

### sales-data-order-search-result-interface
* sales-data-order-search-result-interface `object`: Order search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * items **required** `array`: Array of collection items.
    * items [sales-data-order-interface](#sales-data-order-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-order-status-history-extension-interface
* sales-data-order-status-history-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface

### sales-data-order-status-history-interface
* sales-data-order-status-history-interface `object`: Order status history interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * comment **required** `string`: Comment.
  * created_at `string`: Created-at timestamp.
  * entity_id `integer`: Order status history ID.
  * entity_name `string`: Entity name.
  * extension_attributes [sales-data-order-status-history-extension-interface](#sales-data-order-status-history-extension-interface)
  * is_customer_notified **required** `integer`: Is-customer-notified flag value.
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.
  * parent_id **required** `integer`: Parent ID.
  * status `string`: Status.

### sales-data-order-status-history-search-result-interface
* sales-data-order-status-history-search-result-interface `object`: Order status history search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
  * items **required** `array`: Array of collection items.
    * items [sales-data-order-status-history-interface](#sales-data-order-status-history-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-shipment-comment-creation-extension-interface
* sales-data-shipment-comment-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentCreationInterface

### sales-data-shipment-comment-creation-interface
* sales-data-shipment-comment-creation-interface `object`: Interface ShipmentCommentCreationInterface
  * comment **required** `string`: Comment.
  * extension_attributes [sales-data-shipment-comment-creation-extension-interface](#sales-data-shipment-comment-creation-extension-interface)
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.

### sales-data-shipment-comment-extension-interface
* sales-data-shipment-comment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentInterface

### sales-data-shipment-comment-interface
* sales-data-shipment-comment-interface `object`: Shipment comment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
  * comment **required** `string`: Comment.
  * created_at `string`: Created-at timestamp.
  * entity_id `integer`: Invoice ID.
  * extension_attributes [sales-data-shipment-comment-extension-interface](#sales-data-shipment-comment-extension-interface)
  * is_customer_notified **required** `integer`: Is-customer-notified flag value.
  * is_visible_on_front **required** `integer`: Is-visible-on-storefront flag value.
  * parent_id **required** `integer`: Parent ID.

### sales-data-shipment-comment-search-result-interface
* sales-data-shipment-comment-search-result-interface `object`: Shipment comment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
  * items **required** `array`: Array of collection items.
    * items [sales-data-shipment-comment-interface](#sales-data-shipment-comment-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-shipment-creation-arguments-extension-interface
* sales-data-shipment-creation-arguments-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCreationArgumentsInterface

### sales-data-shipment-creation-arguments-interface
* sales-data-shipment-creation-arguments-interface `object`: Interface for creation arguments for Shipment.
  * extension_attributes [sales-data-shipment-creation-arguments-extension-interface](#sales-data-shipment-creation-arguments-extension-interface)

### sales-data-shipment-extension-interface
* sales-data-shipment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentInterface

### sales-data-shipment-interface
* sales-data-shipment-interface `object`: Shipment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
  * billing_address_id `integer`: Billing address ID.
  * comments **required** `array`: Array of comments.
    * items [sales-data-shipment-comment-interface](#sales-data-shipment-comment-interface)
  * created_at `string`: Created-at timestamp.
  * customer_id `integer`: Customer ID.
  * email_sent `integer`: Email-sent flag value.
  * entity_id `integer`: Shipment ID.
  * extension_attributes [sales-data-shipment-extension-interface](#sales-data-shipment-extension-interface)
  * increment_id `string`: Increment ID.
  * items **required** `array`: Array of items.
    * items [sales-data-shipment-item-interface](#sales-data-shipment-item-interface)
  * order_id **required** `integer`: Order ID.
  * packages `array`: Array of packages, if any. Otherwise, null.
    * items [sales-data-shipment-package-interface](#sales-data-shipment-package-interface)
  * shipment_status `integer`: Shipment status.
  * shipping_address_id `integer`: Shipping address ID.
  * shipping_label `string`: Shipping label.
  * store_id `integer`: Store ID.
  * total_qty `number`: Total quantity.
  * total_weight `number`: Total weight.
  * tracks **required** `array`: Array of tracks.
    * items [sales-data-shipment-track-interface](#sales-data-shipment-track-interface)
  * updated_at `string`: Updated-at timestamp.

### sales-data-shipment-item-creation-extension-interface
* sales-data-shipment-item-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemCreationInterface

### sales-data-shipment-item-creation-interface
* sales-data-shipment-item-creation-interface `object`: Input argument for shipment item creation Interface ShipmentItemCreationInterface
  * extension_attributes [sales-data-shipment-item-creation-extension-interface](#sales-data-shipment-item-creation-extension-interface)
  * order_item_id **required** `integer`: Order item ID.
  * qty **required** `number`: Quantity.

### sales-data-shipment-item-extension-interface
* sales-data-shipment-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemInterface

### sales-data-shipment-item-interface
* sales-data-shipment-item-interface `object`: Shipment item interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A product is an item in a shipment.
  * additional_data `string`: Additional data.
  * description `string`: Description.
  * entity_id `integer`: Shipment item ID.
  * extension_attributes [sales-data-shipment-item-extension-interface](#sales-data-shipment-item-extension-interface)
  * name `string`: Name.
  * order_item_id **required** `integer`: Order item ID.
  * parent_id `integer`: Parent ID.
  * price `number`: Price.
  * product_id `integer`: Product ID.
  * qty **required** `number`: Quantity.
  * row_total `number`: Row total.
  * sku `string`: SKU.
  * weight `number`: Weight.

### sales-data-shipment-package-creation-extension-interface
* sales-data-shipment-package-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageCreationInterface

### sales-data-shipment-package-creation-interface
* sales-data-shipment-package-creation-interface `object`: Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
  * extension_attributes [sales-data-shipment-package-creation-extension-interface](#sales-data-shipment-package-creation-extension-interface)

### sales-data-shipment-package-extension-interface
* sales-data-shipment-package-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageInterface

### sales-data-shipment-package-interface
* sales-data-shipment-package-interface `object`: Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
  * extension_attributes [sales-data-shipment-package-extension-interface](#sales-data-shipment-package-extension-interface)

### sales-data-shipment-search-result-interface
* sales-data-shipment-search-result-interface `object`: Shipment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
  * items **required** `array`: Array of collection items.
    * items [sales-data-shipment-interface](#sales-data-shipment-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-data-shipment-track-creation-extension-interface
* sales-data-shipment-track-creation-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackCreationInterface

### sales-data-shipment-track-creation-interface
* sales-data-shipment-track-creation-interface `object`: Shipment Track Creation interface.
  * carrier_code **required** `string`: Carrier code.
  * extension_attributes [sales-data-shipment-track-creation-extension-interface](#sales-data-shipment-track-creation-extension-interface)
  * title **required** `string`: Title.
  * track_number **required** `string`: Track number.

### sales-data-shipment-track-extension-interface
* sales-data-shipment-track-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackInterface

### sales-data-shipment-track-interface
* sales-data-shipment-track-interface `object`: Shipment track interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. Merchants and customers can track shipments.
  * carrier_code **required** `string`: Carrier code.
  * created_at `string`: Created-at timestamp.
  * description **required** `string`: Description.
  * entity_id `integer`: Shipment package ID.
  * extension_attributes [sales-data-shipment-track-extension-interface](#sales-data-shipment-track-extension-interface)
  * order_id **required** `integer`: The order_id for the shipment package.
  * parent_id **required** `integer`: Parent ID.
  * qty **required** `number`: Quantity.
  * title **required** `string`: Title.
  * track_number **required** `string`: Track number.
  * updated_at `string`: Updated-at timestamp.
  * weight **required** `number`: Weight.

### sales-data-shipping-assignment-extension-interface
* sales-data-shipping-assignment-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface

### sales-data-shipping-assignment-interface
* sales-data-shipping-assignment-interface `object`: Interface ShippingAssignmentInterface
  * extension_attributes [sales-data-shipping-assignment-extension-interface](#sales-data-shipping-assignment-extension-interface)
  * items **required** `array`: Order items of shipping assignment
    * items [sales-data-order-item-interface](#sales-data-order-item-interface)
  * shipping **required** [sales-data-shipping-interface](#sales-data-shipping-interface)
  * stock_id `integer`: Stock id

### sales-data-shipping-extension-interface
* sales-data-shipping-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface

### sales-data-shipping-interface
* sales-data-shipping-interface `object`: Interface ShippingInterface
  * address [sales-data-order-address-interface](#sales-data-order-address-interface)
  * extension_attributes [sales-data-shipping-extension-interface](#sales-data-shipping-extension-interface)
  * method `string`: Shipping method
  * total [sales-data-total-interface](#sales-data-total-interface)

### sales-data-total-extension-interface
* sales-data-total-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface

### sales-data-total-interface
* sales-data-total-interface `object`: Interface TotalInterface
  * base_shipping_amount `number`: Base shipping amount.
  * base_shipping_canceled `number`: Base shipping canceled.
  * base_shipping_discount_amount `number`: Base shipping discount amount.
  * base_shipping_discount_tax_compensation_amnt `number`: Base shipping discount tax compensation amount.
  * base_shipping_incl_tax `number`: Base shipping including tax.
  * base_shipping_invoiced `number`: Base shipping invoiced.
  * base_shipping_refunded `number`: Base shipping refunded.
  * base_shipping_tax_amount `number`: Base shipping tax amount.
  * base_shipping_tax_refunded `number`: Base shipping tax refunded.
  * extension_attributes [sales-data-total-extension-interface](#sales-data-total-extension-interface)
  * shipping_amount `number`: Shipping amount.
  * shipping_canceled `number`: Shipping canceled amount.
  * shipping_discount_amount `number`: Shipping discount amount.
  * shipping_discount_tax_compensation_amount `number`: Shipping discount tax compensation amount.
  * shipping_incl_tax `number`: Shipping including tax amount.
  * shipping_invoiced `number`: Shipping invoiced amount.
  * shipping_refunded `number`: Shipping refunded amount.
  * shipping_tax_amount `number`: Shipping tax amount.
  * shipping_tax_refunded `number`: Shipping tax refunded amount.

### sales-data-transaction-extension-interface
* sales-data-transaction-extension-interface `object`: ExtensionInterface class for @see \Magento\Sales\Api\Data\TransactionInterface

### sales-data-transaction-interface
* sales-data-transaction-interface `object`: Transaction interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
  * additional_information `array`: Array of additional information. Otherwise, null.
    * items `string`
  * child_transactions **required** `array`: Array of child transactions.
    * items [sales-data-transaction-interface](#sales-data-transaction-interface)
  * created_at **required** `string`: Created-at timestamp.
  * extension_attributes [sales-data-transaction-extension-interface](#sales-data-transaction-extension-interface)
  * is_closed **required** `integer`: Is-closed flag value.
  * order_id **required** `integer`: Order ID.
  * parent_id `integer`: The parent ID for the transaction. Otherwise, null.
  * parent_txn_id **required** `string`: Parent transaction business ID.
  * payment_id **required** `integer`: Payment ID.
  * transaction_id **required** `integer`: Transaction ID.
  * txn_id **required** `string`: Transaction business ID.
  * txn_type **required** `string`: Transaction type.

### sales-data-transaction-search-result-interface
* sales-data-transaction-search-result-interface `object`: Transaction search result interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
  * items **required** `array`: Array of collection items.
    * items [sales-data-transaction-interface](#sales-data-transaction-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-rule-data-condition-extension-interface
* sales-rule-data-condition-extension-interface `object`: ExtensionInterface class for @see \Magento\SalesRule\Api\Data\ConditionInterface

### sales-rule-data-condition-interface
* sales-rule-data-condition-interface `object`: Interface ConditionInterface
  * aggregator_type `string`: The aggregator type
  * attribute_name `string`: The attribute name of the condition
  * condition_type **required** `string`: Condition type
  * conditions `array`: List of conditions
    * items [sales-rule-data-condition-interface](#sales-rule-data-condition-interface)
  * extension_attributes [sales-rule-data-condition-extension-interface](#sales-rule-data-condition-extension-interface)
  * operator **required** `string`: The operator of the condition
  * value **required** `string`: The value of the condition

### sales-rule-data-coupon-extension-interface
* sales-rule-data-coupon-extension-interface `object`: ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponInterface

### sales-rule-data-coupon-generation-spec-extension-interface
* sales-rule-data-coupon-generation-spec-extension-interface `object`: ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponGenerationSpecInterface

### sales-rule-data-coupon-generation-spec-interface
* sales-rule-data-coupon-generation-spec-interface `object`: CouponGenerationSpecInterface
  * delimiter `string`: The delimiter
  * delimiter_at_every `integer`: The spacing where the delimiter should exist
  * extension_attributes [sales-rule-data-coupon-generation-spec-extension-interface](#sales-rule-data-coupon-generation-spec-extension-interface)
  * format **required** `string`: Format of generated coupon code
  * length **required** `integer`: Length of coupon code
  * prefix `string`: The prefix
  * quantity **required** `integer`: Of coupons to generate
  * rule_id **required** `integer`: The id of the rule associated with the coupon
  * suffix `string`: The suffix

### sales-rule-data-coupon-interface
* sales-rule-data-coupon-interface `object`: Interface CouponInterface
  * code `string`: Coupon code
  * coupon_id `integer`: Coupon id
  * created_at `string`: When the coupon is created
  * expiration_date `string`: Expiration date
  * extension_attributes [sales-rule-data-coupon-extension-interface](#sales-rule-data-coupon-extension-interface)
  * is_primary **required** `boolean`: The coupon is primary coupon for the rule that it's associated with
  * rule_id **required** `integer`: The id of the rule associated with the coupon
  * times_used **required** `integer`: The number of times the coupon has been used
  * type `integer`: Of coupon
  * usage_limit `integer`: Usage limit
  * usage_per_customer `integer`: Usage limit per customer

### sales-rule-data-coupon-mass-delete-result-interface
* sales-rule-data-coupon-mass-delete-result-interface `object`: Coupon mass delete results interface.
  * failed_items **required** `array`: List of failed items.
    * items `string`
  * missing_items **required** `array`: List of missing items.
    * items `string`

### sales-rule-data-coupon-search-result-interface
* sales-rule-data-coupon-search-result-interface `object`
  * items **required** `array`: Rules.
    * items [sales-rule-data-coupon-interface](#sales-rule-data-coupon-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### sales-rule-data-rule-extension-interface
* sales-rule-data-rule-extension-interface `object`: ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleInterface
  * reward_points_delta `integer`

### sales-rule-data-rule-interface
* sales-rule-data-rule-interface `object`: Interface RuleInterface
  * action_condition [sales-rule-data-condition-interface](#sales-rule-data-condition-interface)
  * apply_to_shipping **required** `boolean`: The rule applies to shipping
  * condition [sales-rule-data-condition-interface](#sales-rule-data-condition-interface)
  * coupon_type **required** `string`: Coupon type
  * customer_group_ids **required** `array`: Ids of customer groups that the rule applies to
    * items `integer`
  * description `string`: Description
  * discount_amount **required** `number`: Discount amount
  * discount_qty `number`: Maximum qty discount is applied
  * discount_step **required** `integer`: Discount step
  * extension_attributes [sales-rule-data-rule-extension-interface](#sales-rule-data-rule-extension-interface)
  * from_date `string`: The start date when the coupon is active
  * is_active **required** `boolean`: The coupon is active
  * is_advanced **required** `boolean`: Is this field needed
  * is_rss **required** `boolean`: Whether the rule is in RSS
  * name `string`: Rule name
  * product_ids `array`: Product ids
    * items `integer`
  * rule_id `integer`: Rule id
  * simple_action `string`: Simple action of the rule
  * simple_free_shipping `string`: To grant free shipping
  * sort_order **required** `integer`: Sort order
  * stop_rules_processing **required** `boolean`: To stop rule processing
  * store_labels `array`: Display label
    * items [sales-rule-data-rule-label-interface](#sales-rule-data-rule-label-interface)
  * times_used **required** `integer`: How many times the rule has been used
  * to_date `string`: The end date when the coupon is active
  * use_auto_generation **required** `boolean`: To auto generate coupon
  * uses_per_coupon **required** `integer`: Limit of uses per coupon
  * uses_per_customer **required** `integer`: Number of uses per customer
  * website_ids **required** `array`: A list of websites the rule applies to
    * items `integer`

### sales-rule-data-rule-label-extension-interface
* sales-rule-data-rule-label-extension-interface `object`: ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleLabelInterface

### sales-rule-data-rule-label-interface
* sales-rule-data-rule-label-interface `object`: Interface RuleLabelInterface
  * extension_attributes [sales-rule-data-rule-label-extension-interface](#sales-rule-data-rule-label-extension-interface)
  * store_id **required** `integer`: StoreId
  * store_label **required** `string`: The label for the store

### sales-rule-data-rule-search-result-interface
* sales-rule-data-rule-search-result-interface `object`
  * items **required** `array`: Rules.
    * items [sales-rule-data-rule-interface](#sales-rule-data-rule-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### store-data-group-extension-interface
* store-data-group-extension-interface `object`: ExtensionInterface class for @see \Magento\Store\Api\Data\GroupInterface

### store-data-group-interface
* store-data-group-interface `object`: Group interface
  * default_store_id **required** `integer`
  * extension_attributes [store-data-group-extension-interface](#store-data-group-extension-interface)
  * id **required** `integer`
  * name **required** `string`
  * root_category_id **required** `integer`
  * website_id **required** `integer`

### store-data-store-config-extension-interface
* store-data-store-config-extension-interface `object`: ExtensionInterface class for @see \Magento\Store\Api\Data\StoreConfigInterface

### store-data-store-config-interface
* store-data-store-config-interface `object`: StoreConfig interface
  * base_currency_code **required** `string`: Base currency code
  * base_link_url **required** `string`: Base link URL for the store
  * base_media_url **required** `string`: Base media URL for the store
  * base_static_url **required** `string`: Base static URL for the store
  * base_url **required** `string`: Base URL for the store
  * code **required** `string`: Store code
  * default_display_currency_code **required** `string`: Default display currency code
  * extension_attributes [store-data-store-config-extension-interface](#store-data-store-config-extension-interface)
  * id **required** `integer`: Store id
  * locale **required** `string`: Store locale
  * secure_base_link_url **required** `string`: Secure base link URL for the store
  * secure_base_media_url **required** `string`: Secure base media URL for the store
  * secure_base_static_url **required** `string`: Secure base static URL for the store
  * secure_base_url **required** `string`: Secure base URL for the store
  * timezone **required** `string`: Timezone of the store
  * website_id **required** `integer`: Website id of the store
  * weight_unit **required** `string`: The unit of weight

### store-data-store-extension-interface
* store-data-store-extension-interface `object`: ExtensionInterface class for @see \Magento\Store\Api\Data\StoreInterface

### store-data-store-interface
* store-data-store-interface `object`: Store interface
  * code **required** `string`
  * extension_attributes [store-data-store-extension-interface](#store-data-store-extension-interface)
  * id **required** `integer`
  * name **required** `string`: Store name
  * store_group_id **required** `integer`
  * website_id **required** `integer`

### store-data-website-extension-interface
* store-data-website-extension-interface `object`: ExtensionInterface class for @see \Magento\Store\Api\Data\WebsiteInterface

### store-data-website-interface
* store-data-website-interface `object`: Website interface
  * code **required** `string`
  * default_group_id **required** `integer`
  * extension_attributes [store-data-website-extension-interface](#store-data-website-extension-interface)
  * id **required** `integer`
  * name **required** `string`: Website name

### tax-data-applied-tax-rate-extension-interface
* tax-data-applied-tax-rate-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface

### tax-data-applied-tax-rate-interface
* tax-data-applied-tax-rate-interface `object`: Applied tax rate interface.
  * code `string`: Code
  * extension_attributes [tax-data-applied-tax-rate-extension-interface](#tax-data-applied-tax-rate-extension-interface)
  * percent `number`: Tax Percent
  * title `string`: Title

### tax-data-grand-total-details-interface
* tax-data-grand-total-details-interface `object`: Interface GrandTotalDetailsInterface
  * amount **required** `number`: Tax amount value
  * group_id **required** `integer`: Group identifier
  * rates **required** `array`: Tax rates info
    * items [tax-data-grand-total-rates-interface](#tax-data-grand-total-rates-interface)

### tax-data-grand-total-rates-interface
* tax-data-grand-total-rates-interface `object`: Interface GrandTotalRatesInterface
  * percent **required** `string`: Tax percentage value
  * title **required** `string`: Rate title

### tax-data-order-tax-details-applied-tax-extension-interface
* tax-data-order-tax-details-applied-tax-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface
  * rates `array`
    * items [tax-data-applied-tax-rate-interface](#tax-data-applied-tax-rate-interface)

### tax-data-order-tax-details-applied-tax-interface
* tax-data-order-tax-details-applied-tax-interface `object`: Interface OrderTaxDetailsAppliedTaxInterface
  * amount **required** `number`: Tax amount
  * base_amount **required** `number`: Tax amount in base currency
  * code `string`: Code
  * extension_attributes [tax-data-order-tax-details-applied-tax-extension-interface](#tax-data-order-tax-details-applied-tax-extension-interface)
  * percent `number`: Tax Percent
  * title `string`: Title

### tax-data-order-tax-details-item-extension-interface
* tax-data-order-tax-details-item-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface

### tax-data-order-tax-details-item-interface
* tax-data-order-tax-details-item-interface `object`: Interface OrderTaxDetailsItemInterface
  * applied_taxes `array`: Applied taxes
    * items [tax-data-order-tax-details-applied-tax-interface](#tax-data-order-tax-details-applied-tax-interface)
  * associated_item_id `integer`: Associated item id if this item is associated with another item, null otherwise
  * extension_attributes [tax-data-order-tax-details-item-extension-interface](#tax-data-order-tax-details-item-extension-interface)
  * item_id `integer`: Item id if this item is a product
  * type `string`: Type (shipping, product, weee, gift wrapping, etc)

### tax-data-tax-class-extension-interface
* tax-data-tax-class-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxClassInterface

### tax-data-tax-class-interface
* tax-data-tax-class-interface `object`: Tax class interface.
  * class_id `integer`: Tax class ID.
  * class_name **required** `string`: Tax class name.
  * class_type **required** `string`: Tax class type.
  * extension_attributes [tax-data-tax-class-extension-interface](#tax-data-tax-class-extension-interface)

### tax-data-tax-class-search-results-interface
* tax-data-tax-class-search-results-interface `object`: Interface for tax class search results.
  * items **required** `array`: Items
    * items [tax-data-tax-class-interface](#tax-data-tax-class-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### tax-data-tax-rate-extension-interface
* tax-data-tax-rate-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateInterface

### tax-data-tax-rate-interface
* tax-data-tax-rate-interface `object`: Tax rate interface.
  * code **required** `string`: Tax rate code
  * extension_attributes [tax-data-tax-rate-extension-interface](#tax-data-tax-rate-extension-interface)
  * id `integer`: Id
  * rate **required** `number`: Tax rate in percentage
  * region_name `string`: Region name
  * tax_country_id **required** `string`: Country id
  * tax_postcode `string`: Postcode
  * tax_region_id `integer`: Region id
  * titles `array`: Tax rate titles
    * items [tax-data-tax-rate-title-interface](#tax-data-tax-rate-title-interface)
  * zip_from `integer`: Zip range from
  * zip_is_range `integer`: Zip is range
  * zip_to `integer`: Zip range to

### tax-data-tax-rate-search-results-interface
* tax-data-tax-rate-search-results-interface `object`: Interface for tax rate search results.
  * items **required** `array`: Items
    * items [tax-data-tax-rate-interface](#tax-data-tax-rate-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### tax-data-tax-rate-title-extension-interface
* tax-data-tax-rate-title-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateTitleInterface

### tax-data-tax-rate-title-interface
* tax-data-tax-rate-title-interface `object`: Tax rate title interface.
  * extension_attributes [tax-data-tax-rate-title-extension-interface](#tax-data-tax-rate-title-extension-interface)
  * store_id **required** `string`: Store id
  * value **required** `string`: Title value

### tax-data-tax-rule-extension-interface
* tax-data-tax-rule-extension-interface `object`: ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRuleInterface

### tax-data-tax-rule-interface
* tax-data-tax-rule-interface `object`: Tax rule interface.
  * calculate_subtotal `boolean`: Calculate subtotal.
  * code **required** `string`: Tax rule code
  * customer_tax_class_ids **required** `array`: Customer tax class id
    * items `integer`
  * extension_attributes [tax-data-tax-rule-extension-interface](#tax-data-tax-rule-extension-interface)
  * id `integer`: Id
  * position **required** `integer`: Sort order.
  * priority **required** `integer`: Priority
  * product_tax_class_ids **required** `array`: Product tax class id
    * items `integer`
  * tax_rate_ids **required** `array`: Tax rate ids
    * items `integer`

### tax-data-tax-rule-search-results-interface
* tax-data-tax-rule-search-results-interface `object`: Interface for tax rule search results.
  * items **required** `array`: Items
    * items [tax-data-tax-rule-interface](#tax-data-tax-rule-interface)
  * search_criteria **required** [framework-search-criteria-interface](#framework-search-criteria-interface)
  * total_count **required** `integer`: Total count.

### vault-data-payment-token-interface
* vault-data-payment-token-interface `object`: Gateway vault payment token interface.
  * created_at `string`: Token creation timestamp
  * customer_id `integer`: Customer ID.
  * entity_id `integer`: Entity ID.
  * expires_at `string`: Token expiration timestamp
  * gateway_token **required** `string`: Gateway token ID
  * is_active **required** `boolean`: Is active.
  * is_visible **required** `boolean`: Is visible.
  * payment_method_code **required** `string`: Payment method code
  * public_hash **required** `string`: Public hash
  * token_details **required** `string`: Token details
  * type **required** `string`: Type


