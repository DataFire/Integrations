# @datafire/t213_vg

Client library for Magento Enterprise

## Installation and Usage
```bash
npm install --save datafire @datafire/t213_vg
```

```js
let datafire = require('datafire');
let t213_vg = require('@datafire/t213_vg').actions;
let context = new datafire.Context();

t213_vg.salesTransactionRepositoryV1GetListGet({}, context).then(data => {
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

#### Parameters
* addressId (integer) **required**

### customerCustomerMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.customerCustomerMetadataV1GetAllAttributesMetadataGet(null, context)
```


### customerCustomerMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.customerCustomerMetadataV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### customerCustomerMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.


```js
t213_vg.customerCustomerMetadataV1GetCustomAttributesMetadataGet({}, context)
```

#### Parameters
* dataInterfaceName (string)

### customerCustomerMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.customerCustomerMetadataV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Parameters
* formCode (string) **required**

### customerAddressMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.customerAddressMetadataV1GetAllAttributesMetadataGet(null, context)
```


### customerAddressMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.customerAddressMetadataV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### customerAddressMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.


```js
t213_vg.customerAddressMetadataV1GetCustomAttributesMetadataGet({}, context)
```

#### Parameters
* dataInterfaceName (string)

### customerAddressMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.customerAddressMetadataV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Parameters
* formCode (string) **required**

### bundleProductOptionManagementV1SavePost
Add new option for bundle product


```js
t213_vg.bundleProductOptionManagementV1SavePost({}, context)
```

#### Parameters
* $body (object)

### bundleProductOptionTypeListV1GetItemsGet
Get all types for options for bundle products


```js
t213_vg.bundleProductOptionTypeListV1GetItemsGet(null, context)
```


### bundleProductOptionManagementV1SavePut
Add new option for bundle product


```js
t213_vg.bundleProductOptionManagementV1SavePut({
  "optionId": ""
}, context)
```

#### Parameters
* optionId (string) **required**
* $body (object)

### bundleProductLinkManagementV1GetChildrenGet
Get all children for Bundle product


```js
t213_vg.bundleProductLinkManagementV1GetChildrenGet({
  "productSku": ""
}, context)
```

#### Parameters
* productSku (string) **required**
* optionId (integer)

### bundleProductLinkManagementV1SaveChildPut



```js
t213_vg.bundleProductLinkManagementV1SaveChildPut({
  "sku": "",
  "id": ""
}, context)
```

#### Parameters
* sku (string) **required**
* id (string) **required**
* $body (object)

### bundleProductLinkManagementV1AddChildByProductSkuPost
Add child product to specified Bundle option by product sku


```js
t213_vg.bundleProductLinkManagementV1AddChildByProductSkuPost({
  "sku": "",
  "optionId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**
* $body (object)

### bundleProductOptionRepositoryV1GetListGet
Get all options for bundle product


```js
t213_vg.bundleProductOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### bundleProductOptionRepositoryV1DeleteByIdDelete
Remove bundle option


```js
t213_vg.bundleProductOptionRepositoryV1DeleteByIdDelete({
  "sku": "",
  "optionId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**

### bundleProductOptionRepositoryV1GetGet
Get option for bundle product


```js
t213_vg.bundleProductOptionRepositoryV1GetGet({
  "sku": "",
  "optionId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**

### bundleProductLinkManagementV1RemoveChildDelete
Remove product from Bundle product option


```js
t213_vg.bundleProductLinkManagementV1RemoveChildDelete({
  "sku": "",
  "optionId": 0,
  "childSku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**
* childSku (string) **required**

### quoteCartManagementV1CreateEmptyCartPost
Creates an empty cart and quote for a guest.


```js
t213_vg.quoteCartManagementV1CreateEmptyCartPost(null, context)
```


### giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet



```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet({
  "cartId": "",
  "giftCardCode": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* giftCardCode (string) **required**

### giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost



```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### giftCardAccountGuestGiftCardAccountManagementV1DeleteByQuoteIdDelete
Remove GiftCard Account entity


```js
t213_vg.giftCardAccountGuestGiftCardAccountManagementV1DeleteByQuoteIdDelete({
  "cartId": "",
  "giftCardCode": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* giftCardCode (string) **required**

### checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
Lists active checkout agreements.


```js
t213_vg.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet(null, context)
```


### quoteCartManagementV1GetCartForCustomerGet
Returns information for the cart for a specified customer.


```js
t213_vg.quoteCartManagementV1GetCartForCustomerGet(null, context)
```


### V1.carts.mine.post
Creates an empty cart and quote for a specified customer.


```js
t213_vg.V1.carts.mine.post(null, context)
```


### quoteCartRepositoryV1SavePut
Save quote


```js
t213_vg.quoteCartRepositoryV1SavePut({}, context)
```

#### Parameters
* $body (object)

### customerBalanceBalanceManagementV1ApplyPost
Apply store credit


```js
t213_vg.customerBalanceBalanceManagementV1ApplyPost(null, context)
```


### V1.carts.mine.billing_address.get
Returns the billing address for a specified quote.


```js
t213_vg.V1.carts.mine.billing_address.get(null, context)
```


### V1.carts.mine.billing_address.post
Assigns a specified billing address to a specified cart.


```js
t213_vg.V1.carts.mine.billing_address.post({}, context)
```

#### Parameters
* $body (object)

### giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet({
  "giftCardCode": ""
}, context)
```

#### Parameters
* giftCardCode (string) **required**

### quoteCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals.


```js
t213_vg.quoteCartTotalManagementV1CollectTotalsPut({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.coupons.delete
Deletes a coupon from a specified cart.


```js
t213_vg.V1.carts.mine.coupons.delete(null, context)
```


### V1.carts.mine.coupons.get
Returns information for a coupon in a specified cart.


```js
t213_vg.V1.carts.mine.coupons.get(null, context)
```


### V1.carts.mine.coupons.couponCode.put
Adds a coupon by code to a specified cart.


```js
t213_vg.V1.carts.mine.coupons.couponCode.put({
  "couponCode": ""
}, context)
```

#### Parameters
* couponCode (string) **required** - The coupon code data.

### V1.carts.mine.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.V1.carts.mine.estimate_shipping_methods.post({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.estimate_shipping_methods_by_address_id.post
Estimate shipping


```js
t213_vg.V1.carts.mine.estimate_shipping_methods_by_address_id.post({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.gift_message.get
Return the gift message for a specified order.


```js
t213_vg.V1.carts.mine.gift_message.get(null, context)
```


### V1.carts.mine.gift_message.post
Set the gift message for an entire order.


```js
t213_vg.V1.carts.mine.gift_message.post({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.mine.gift_message.itemId.get({
  "itemId": 0
}, context)
```

#### Parameters
* itemId (integer) **required** - The item ID.

### V1.carts.mine.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.mine.gift_message.itemId.post({
  "itemId": 0
}, context)
```

#### Parameters
* itemId (integer) **required** - The item ID.
* $body (object)

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.giftCards.giftCardCode.delete
Remove GiftCard Account entity


```js
t213_vg.V1.carts.mine.giftCards.giftCardCode.delete({
  "giftCardCode": ""
}, context)
```

#### Parameters
* giftCardCode (string) **required**

### V1.carts.mine.items.get
Lists items that are assigned to a specified cart.


```js
t213_vg.V1.carts.mine.items.get(null, context)
```


### V1.carts.mine.items.post
Add/update the specified cart item.


```js
t213_vg.V1.carts.mine.items.post({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.items.itemId.delete
Removes the specified item from the specified cart.


```js
t213_vg.V1.carts.mine.items.itemId.delete({
  "itemId": 0
}, context)
```

#### Parameters
* itemId (integer) **required** - The item ID of the item to be removed.

### V1.carts.mine.items.itemId.put
Add/update the specified cart item.


```js
t213_vg.V1.carts.mine.items.itemId.put({
  "itemId": ""
}, context)
```

#### Parameters
* itemId (string) **required**
* $body (object)

### V1.carts.mine.order.put
Places an order for a specified cart.


```js
t213_vg.V1.carts.mine.order.put({}, context)
```

#### Parameters
* $body (object)

### checkoutPaymentInformationManagementV1GetPaymentInformationGet
Get payment information


```js
t213_vg.checkoutPaymentInformationManagementV1GetPaymentInformationGet(null, context)
```


### checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.


```js
t213_vg.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.V1.carts.mine.payment_methods.get(null, context)
```


### V1.carts.mine.selected_payment_method.get
Returns the payment method for a specified shopping cart.


```js
t213_vg.V1.carts.mine.selected_payment_method.get(null, context)
```


### V1.carts.mine.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.


```js
t213_vg.V1.carts.mine.selected_payment_method.put({}, context)
```

#### Parameters
* $body (object)

### checkoutPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.


```js
t213_vg.checkoutPaymentInformationManagementV1SavePaymentInformationPost({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.shipping_information.post



```js
t213_vg.V1.carts.mine.shipping_information.post({}, context)
```

#### Parameters
* $body (object)

### V1.carts.mine.shipping_methods.get
Lists applicable shipping methods for a specified quote.


```js
t213_vg.V1.carts.mine.shipping_methods.get(null, context)
```


### V1.carts.mine.totals.get
Returns quote totals data for a specified cart.


```js
t213_vg.V1.carts.mine.totals.get(null, context)
```


### V1.carts.mine.totals_information.post
Calculate quote totals based on address and shipping method.


```js
t213_vg.V1.carts.mine.totals_information.post({}, context)
```

#### Parameters
* $body (object)

### quoteCartRepositoryV1GetListGet
Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.quoteCartRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### quoteCartRepositoryV1GetGet
Enables an administrative user to return information for a specified cart.


```js
t213_vg.quoteCartRepositoryV1GetGet({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required**

### quoteCartManagementV1AssignCustomerPut
Assigns a specified customer to a specified shopping cart.


```js
t213_vg.quoteCartManagementV1AssignCustomerPut({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* $body (object)

### V1.carts.cartId.billing_address.get
Returns the billing address for a specified quote.


```js
t213_vg.V1.carts.cartId.billing_address.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.billing_address.post
Assigns a specified billing address to a specified cart.


```js
t213_vg.V1.carts.cartId.billing_address.post({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* $body (object)

### V1.carts.cartId.coupons.delete
Deletes a coupon from a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.delete({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.coupons.get
Returns information for a coupon in a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.coupons.couponCode.put
Adds a coupon by code to a specified cart.


```js
t213_vg.V1.carts.cartId.coupons.couponCode.put({
  "cartId": 0,
  "couponCode": ""
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* couponCode (string) **required** - The coupon code data.

### V1.carts.cartId.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.V1.carts.cartId.estimate_shipping_methods.post({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### V1.carts.cartId.estimate_shipping_methods_by_address_id.post
Estimate shipping


```js
t213_vg.V1.carts.cartId.estimate_shipping_methods_by_address_id.post({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The shopping cart ID.
* $body (object)

### V1.carts.cartId.gift_message.get
Return the gift message for a specified order.


```js
t213_vg.V1.carts.cartId.gift_message.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The shopping cart ID.

### V1.carts.cartId.gift_message.post
Set the gift message for an entire order.


```js
t213_vg.V1.carts.cartId.gift_message.post({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* $body (object)

### V1.carts.cartId.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.cartId.gift_message.itemId.get({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The shopping cart ID.
* itemId (integer) **required** - The item ID.

### V1.carts.cartId.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.V1.carts.cartId.gift_message.itemId.post({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* itemId (integer) **required** - The item ID.
* $body (object)

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut



```js
t213_vg.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required**
* $body (object)

### V1.carts.cartId.giftCards.giftCardCode.delete
Remove GiftCard Account entity


```js
t213_vg.V1.carts.cartId.giftCards.giftCardCode.delete({
  "cartId": 0,
  "giftCardCode": ""
}, context)
```

#### Parameters
* cartId (integer) **required**
* giftCardCode (string) **required**

### V1.carts.cartId.items.get
Lists items that are assigned to a specified cart.


```js
t213_vg.V1.carts.cartId.items.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.items.itemId.delete
Removes the specified item from the specified cart.


```js
t213_vg.V1.carts.cartId.items.itemId.delete({
  "cartId": 0,
  "itemId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* itemId (integer) **required** - The item ID of the item to be removed.

### V1.carts.cartId.items.itemId.put
Add/update the specified cart item.


```js
t213_vg.V1.carts.cartId.items.itemId.put({
  "cartId": "",
  "itemId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* itemId (string) **required**
* $body (object)

### V1.carts.cartId.order.put
Places an order for a specified cart.


```js
t213_vg.V1.carts.cartId.order.put({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* $body (object)

### V1.carts.cartId.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.V1.carts.cartId.payment_methods.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.selected_payment_method.get
Returns the payment method for a specified shopping cart.


```js
t213_vg.V1.carts.cartId.selected_payment_method.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.


```js
t213_vg.V1.carts.cartId.selected_payment_method.put({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.
* $body (object)

### V1.carts.cartId.shipping_information.post



```js
t213_vg.V1.carts.cartId.shipping_information.post({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required**
* $body (object)

### V1.carts.cartId.shipping_methods.get
Lists applicable shipping methods for a specified quote.


```js
t213_vg.V1.carts.cartId.shipping_methods.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The shopping cart ID.

### V1.carts.cartId.totals.get
Returns quote totals data for a specified cart.


```js
t213_vg.V1.carts.cartId.totals.get({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required** - The cart ID.

### V1.carts.cartId.totals_information.post
Calculate quote totals based on address and shipping method.


```js
t213_vg.V1.carts.cartId.totals_information.post({
  "cartId": 0
}, context)
```

#### Parameters
* cartId (integer) **required**
* $body (object)

### giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet
Return GiftCard Account cards


```js
t213_vg.giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet({
  "quoteId": 0
}, context)
```

#### Parameters
* quoteId (integer) **required**

### V1.carts.quoteId.items.post
Add/update the specified cart item.


```js
t213_vg.V1.carts.quoteId.items.post({
  "quoteId": ""
}, context)
```

#### Parameters
* quoteId (string) **required**
* $body (object)

### catalogCategoryManagementV1GetTreeGet
Retrieve list of categories


```js
t213_vg.catalogCategoryManagementV1GetTreeGet({}, context)
```

#### Parameters
* rootCategoryId (integer)
* depth (integer)

### catalogCategoryRepositoryV1SavePost
Create category service


```js
t213_vg.catalogCategoryRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### catalogCategoryAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type


```js
t213_vg.catalogCategoryAttributeRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogCategoryAttributeRepositoryV1GetGet
Retrieve specific attribute


```js
t213_vg.catalogCategoryAttributeRepositoryV1GetGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### catalogCategoryAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options


```js
t213_vg.catalogCategoryAttributeOptionManagementV1GetItemsGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### catalogCategoryRepositoryV1DeleteByIdentifierDelete
Delete category by identifier


```js
t213_vg.catalogCategoryRepositoryV1DeleteByIdentifierDelete({
  "categoryId": 0
}, context)
```

#### Parameters
* categoryId (integer) **required**

### catalogCategoryRepositoryV1GetGet
Get info about category by category id


```js
t213_vg.catalogCategoryRepositoryV1GetGet({
  "categoryId": 0
}, context)
```

#### Parameters
* categoryId (integer) **required**
* storeId (integer)

### catalogCategoryManagementV1MovePut
Move category


```js
t213_vg.catalogCategoryManagementV1MovePut({
  "categoryId": 0
}, context)
```

#### Parameters
* categoryId (integer) **required**
* $body (object)

### catalogCategoryLinkManagementV1GetAssignedProductsGet
Get products assigned to category


```js
t213_vg.catalogCategoryLinkManagementV1GetAssignedProductsGet({
  "categoryId": 0
}, context)
```

#### Parameters
* categoryId (integer) **required**

### catalogCategoryLinkRepositoryV1SavePost
Assign a product to the required category


```js
t213_vg.catalogCategoryLinkRepositoryV1SavePost({
  "categoryId": ""
}, context)
```

#### Parameters
* categoryId (string) **required**
* $body (object)

### catalogCategoryLinkRepositoryV1SavePut
Assign a product to the required category


```js
t213_vg.catalogCategoryLinkRepositoryV1SavePut({
  "categoryId": ""
}, context)
```

#### Parameters
* categoryId (string) **required**
* $body (object)

### catalogCategoryLinkRepositoryV1DeleteByIdsDelete
Remove the product assignment from the category by category id and sku


```js
t213_vg.catalogCategoryLinkRepositoryV1DeleteByIdsDelete({
  "categoryId": "",
  "sku": ""
}, context)
```

#### Parameters
* categoryId (string) **required**
* sku (string) **required**

### catalogCategoryRepositoryV1SavePut
Create category service


```js
t213_vg.catalogCategoryRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### cmsBlockRepositoryV1SavePost
Save block.


```js
t213_vg.cmsBlockRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### cmsBlockRepositoryV1GetListGet
Retrieve blocks matching the specified criteria.


```js
t213_vg.cmsBlockRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### cmsBlockRepositoryV1DeleteByIdDelete
Delete block by ID.


```js
t213_vg.cmsBlockRepositoryV1DeleteByIdDelete({
  "blockId": 0
}, context)
```

#### Parameters
* blockId (integer) **required**

### cmsBlockRepositoryV1GetByIdGet
Retrieve block.


```js
t213_vg.cmsBlockRepositoryV1GetByIdGet({
  "blockId": 0
}, context)
```

#### Parameters
* blockId (integer) **required**

### cmsBlockRepositoryV1SavePut
Save block.


```js
t213_vg.cmsBlockRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### cmsPageRepositoryV1SavePost
Save page.


```js
t213_vg.cmsPageRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### cmsPageRepositoryV1GetListGet
Retrieve pages matching the specified criteria.


```js
t213_vg.cmsPageRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### cmsPageRepositoryV1SavePut
Save page.


```js
t213_vg.cmsPageRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### cmsPageRepositoryV1DeleteByIdDelete
Delete page by ID.


```js
t213_vg.cmsPageRepositoryV1DeleteByIdDelete({
  "pageId": 0
}, context)
```

#### Parameters
* pageId (integer) **required**

### cmsPageRepositoryV1GetByIdGet
Retrieve page.


```js
t213_vg.cmsPageRepositoryV1GetByIdGet({
  "pageId": 0
}, context)
```

#### Parameters
* pageId (integer) **required**

### configurableProductConfigurableProductManagementV1GenerateVariationPut
Generate variation based on same product


```js
t213_vg.configurableProductConfigurableProductManagementV1GenerateVariationPut({}, context)
```

#### Parameters
* $body (object)

### configurableProductLinkManagementV1AddChildPost



```js
t213_vg.configurableProductLinkManagementV1AddChildPost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### configurableProductLinkManagementV1GetChildrenGet
Get all children for Configurable product


```js
t213_vg.configurableProductLinkManagementV1GetChildrenGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### configurableProductLinkManagementV1RemoveChildDelete
Remove configurable product option


```js
t213_vg.configurableProductLinkManagementV1RemoveChildDelete({
  "sku": "",
  "childSku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* childSku (string) **required**

### configurableProductOptionRepositoryV1SavePost
Save option


```js
t213_vg.configurableProductOptionRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### configurableProductOptionRepositoryV1GetListGet
Get all options for configurable product


```js
t213_vg.configurableProductOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### configurableProductOptionRepositoryV1DeleteByIdDelete
Remove option from configurable product


```js
t213_vg.configurableProductOptionRepositoryV1DeleteByIdDelete({
  "sku": "",
  "id": 0
}, context)
```

#### Parameters
* sku (string) **required**
* id (integer) **required**

### configurableProductOptionRepositoryV1GetGet
Get option for configurable product


```js
t213_vg.configurableProductOptionRepositoryV1GetGet({
  "sku": "",
  "id": 0
}, context)
```

#### Parameters
* sku (string) **required**
* id (integer) **required**

### configurableProductOptionRepositoryV1SavePut
Save option


```js
t213_vg.configurableProductOptionRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Parameters
* sku (string) **required**
* id (string) **required**
* $body (object)

### salesRuleCouponRepositoryV1SavePost
Save a coupon.


```js
t213_vg.salesRuleCouponRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesRuleCouponManagementV1DeleteByCodesPost
Delete coupon by coupon codes.


```js
t213_vg.salesRuleCouponManagementV1DeleteByCodesPost({}, context)
```

#### Parameters
* $body (object)

### salesRuleCouponManagementV1DeleteByIdsPost
Delete coupon by coupon ids.


```js
t213_vg.salesRuleCouponManagementV1DeleteByIdsPost({}, context)
```

#### Parameters
* $body (object)

### salesRuleCouponManagementV1GeneratePost
Generate coupon for a rule


```js
t213_vg.salesRuleCouponManagementV1GeneratePost({}, context)
```

#### Parameters
* $body (object)

### salesRuleCouponRepositoryV1GetListGet
Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesRuleCouponRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesRuleCouponRepositoryV1DeleteByIdDelete
Delete coupon by coupon id.


```js
t213_vg.salesRuleCouponRepositoryV1DeleteByIdDelete({
  "couponId": 0
}, context)
```

#### Parameters
* couponId (integer) **required**

### salesRuleCouponRepositoryV1GetByIdGet
Get coupon by coupon id.


```js
t213_vg.salesRuleCouponRepositoryV1GetByIdGet({
  "couponId": 0
}, context)
```

#### Parameters
* couponId (integer) **required**

### salesRuleCouponRepositoryV1SavePut
Save a coupon.


```js
t213_vg.salesRuleCouponRepositoryV1SavePut({
  "couponId": ""
}, context)
```

#### Parameters
* couponId (string) **required**
* $body (object)

### salesCreditmemoRepositoryV1SavePost
Performs persist operations for a specified credit memo.


```js
t213_vg.salesCreditmemoRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesCreditmemoManagementV1RefundPost
Prepare creditmemo to refund and save it.


```js
t213_vg.salesCreditmemoManagementV1RefundPost({}, context)
```

#### Parameters
* $body (object)

### salesCreditmemoRepositoryV1GetGet
Loads a specified credit memo.


```js
t213_vg.salesCreditmemoRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The credit memo ID.

### salesCreditmemoManagementV1CancelPut
Cancels a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1CancelPut({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The credit memo ID.

### salesCreditmemoManagementV1GetCommentsListGet
Lists comments for a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The credit memo ID.

### salesCreditmemoCommentRepositoryV1SavePost
Performs persist operations for a specified entity.


```js
t213_vg.salesCreditmemoCommentRepositoryV1SavePost({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### salesCreditmemoManagementV1NotifyPost
Emails a user a specified credit memo.


```js
t213_vg.salesCreditmemoManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The credit memo ID.

### salesCreditmemoRepositoryV1GetListGet
Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesCreditmemoRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### customerGroupRepositoryV1SavePost
Save customer group.


```js
t213_vg.customerGroupRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### V1.customerGroups.default.get
Get default customer group.


```js
t213_vg.V1.customerGroups.default.get({}, context)
```

#### Parameters
* storeId (integer)

### V1.customerGroups.default.storeId.get
Get default customer group.


```js
t213_vg.V1.customerGroups.default.storeId.get({
  "storeId": 0
}, context)
```

#### Parameters
* storeId (integer) **required**

### customerGroupRepositoryV1GetListGet
Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.customerGroupRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### customerGroupRepositoryV1DeleteByIdDelete
Delete customer group by ID.


```js
t213_vg.customerGroupRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### customerGroupRepositoryV1GetByIdGet
Get customer group by group ID.


```js
t213_vg.customerGroupRepositoryV1GetByIdGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### customerGroupRepositoryV1SavePut
Save customer group.


```js
t213_vg.customerGroupRepositoryV1SavePut({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### customerGroupManagementV1IsReadonlyGet
Check if customer group can be deleted.


```js
t213_vg.customerGroupManagementV1IsReadonlyGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### customerAccountManagementV1CreateAccountPost
Create customer account. Perform necessary business operations like sending email.


```js
t213_vg.customerAccountManagementV1CreateAccountPost({}, context)
```

#### Parameters
* $body (object)

### customerAddressRepositoryV1GetByIdGet
Retrieve customer address.


```js
t213_vg.customerAddressRepositoryV1GetByIdGet({
  "addressId": 0
}, context)
```

#### Parameters
* addressId (integer) **required**

### customerAccountManagementV1ResendConfirmationPost
Resend confirmation email.


```js
t213_vg.customerAccountManagementV1ResendConfirmationPost({}, context)
```

#### Parameters
* $body (object)

### customerAccountManagementV1IsEmailAvailablePost
Check if given email is associated with a customer account in given website.


```js
t213_vg.customerAccountManagementV1IsEmailAvailablePost({}, context)
```

#### Parameters
* $body (object)

### V1.customers.me.get
Get customer by customer ID.


```js
t213_vg.V1.customers.me.get(null, context)
```


### V1.customers.me.put
Create or update a customer.


```js
t213_vg.V1.customers.me.put({}, context)
```

#### Parameters
* $body (object)

### customerAccountManagementV1ActivateByIdPut
Activate a customer account using a key that was sent in a confirmation email.


```js
t213_vg.customerAccountManagementV1ActivateByIdPut({}, context)
```

#### Parameters
* $body (object)

### V1.customers.me.billingAddress.get
Retrieve default billing address for the given customerId.


```js
t213_vg.V1.customers.me.billingAddress.get(null, context)
```


### customerAccountManagementV1ChangePasswordByIdPut
Change customer password.


```js
t213_vg.customerAccountManagementV1ChangePasswordByIdPut({}, context)
```

#### Parameters
* $body (object)

### V1.customers.me.shippingAddress.get
Retrieve default shipping address for the given customerId.


```js
t213_vg.V1.customers.me.shippingAddress.get(null, context)
```


### customerAccountManagementV1InitiatePasswordResetPut
Send an email to the customer with a password reset link.


```js
t213_vg.customerAccountManagementV1InitiatePasswordResetPut({}, context)
```

#### Parameters
* $body (object)

### customerCustomerRepositoryV1GetListGet
Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.customerCustomerRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### customerAccountManagementV1ValidatePut
Validate customer data.


```js
t213_vg.customerAccountManagementV1ValidatePut({}, context)
```

#### Parameters
* $body (object)

### customerCustomerRepositoryV1DeleteByIdDelete
Delete customer by ID.


```js
t213_vg.customerCustomerRepositoryV1DeleteByIdDelete({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### V1.customers.customerId.get
Get customer by customer ID.


```js
t213_vg.V1.customers.customerId.get({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### V1.customers.customerId.billingAddress.get
Retrieve default billing address for the given customerId.


```js
t213_vg.V1.customers.customerId.billingAddress.get({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### V1.customers.customerId.carts.post
Creates an empty cart and quote for a specified customer.


```js
t213_vg.V1.customers.customerId.carts.post({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required** - The customer ID.

### customerAccountManagementV1GetConfirmationStatusGet
Gets the account confirmation status.


```js
t213_vg.customerAccountManagementV1GetConfirmationStatusGet({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### customerAccountManagementV1ValidateResetPasswordLinkTokenGet
Check if password reset token is valid.


```js
t213_vg.customerAccountManagementV1ValidateResetPasswordLinkTokenGet({
  "customerId": 0,
  "resetPasswordLinkToken": ""
}, context)
```

#### Parameters
* customerId (integer) **required**
* resetPasswordLinkToken (string) **required**

### customerAccountManagementV1IsReadonlyGet
Check if customer can be deleted.


```js
t213_vg.customerAccountManagementV1IsReadonlyGet({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### V1.customers.customerId.shippingAddress.get
Retrieve default shipping address for the given customerId.


```js
t213_vg.V1.customers.customerId.shippingAddress.get({
  "customerId": 0
}, context)
```

#### Parameters
* customerId (integer) **required**

### customerAccountManagementV1ActivatePut
Activate a customer account using a key that was sent in a confirmation email.


```js
t213_vg.customerAccountManagementV1ActivatePut({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required**
* $body (object)

### V1.customers.id.put
Create or update a customer.


```js
t213_vg.V1.customers.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### directoryCountryInformationAcquirerV1GetCountriesInfoGet
Get all countries and regions information for the store.


```js
t213_vg.directoryCountryInformationAcquirerV1GetCountriesInfoGet(null, context)
```


### directoryCountryInformationAcquirerV1GetCountryInfoGet
Get country and region information for the store.


```js
t213_vg.directoryCountryInformationAcquirerV1GetCountryInfoGet({
  "countryId": ""
}, context)
```

#### Parameters
* countryId (string) **required**

### directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
Get currency information for the store.


```js
t213_vg.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(null, context)
```


### eavAttributeSetManagementV1CreatePost
Create attribute set from data


```js
t213_vg.eavAttributeSetManagementV1CreatePost({}, context)
```

#### Parameters
* $body (object)

### eavAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.eavAttributeSetRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### eavAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID


```js
t213_vg.eavAttributeSetRepositoryV1DeleteByIdDelete({
  "attributeSetId": 0
}, context)
```

#### Parameters
* attributeSetId (integer) **required**

### eavAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID


```js
t213_vg.eavAttributeSetRepositoryV1GetGet({
  "attributeSetId": 0
}, context)
```

#### Parameters
* attributeSetId (integer) **required**

### eavAttributeSetRepositoryV1SavePut
Save attribute set data


```js
t213_vg.eavAttributeSetRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Parameters
* attributeSetId (string) **required**
* $body (object)

### giftWrappingWrappingRepositoryV1GetListGet
Return list of gift wrapping data objects based on search criteria


```js
t213_vg.giftWrappingWrappingRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### giftWrappingWrappingRepositoryV1SavePost
Create/Update new gift wrapping with data object values


```js
t213_vg.giftWrappingWrappingRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### giftWrappingWrappingRepositoryV1DeleteByIdDelete
Delete gift wrapping


```js
t213_vg.giftWrappingWrappingRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### giftWrappingWrappingRepositoryV1GetGet
Return data object for specified wrapping ID and store.


```js
t213_vg.giftWrappingWrappingRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**
* storeId (integer)

### giftWrappingWrappingRepositoryV1SavePut
Create/Update new gift wrapping with data object values


```js
t213_vg.giftWrappingWrappingRepositoryV1SavePut({
  "wrappingId": ""
}, context)
```

#### Parameters
* wrappingId (string) **required**
* $body (object)

### giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping


```js
t213_vg.giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost({}, context)
```

#### Parameters
* $body (object)

### quoteGuestCartManagementV1CreateEmptyCartPost
Enable an customer or guest user to create an empty cart and quote for an anonymous customer.


```js
t213_vg.quoteGuestCartManagementV1CreateEmptyCartPost(null, context)
```


### quoteGuestCartRepositoryV1GetGet
Enable a guest user to return information for a specified cart.


```js
t213_vg.quoteGuestCartRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**

### quoteGuestCartManagementV1AssignCustomerPut
Assign a specified customer to a specified shopping cart.


```js
t213_vg.quoteGuestCartManagementV1AssignCustomerPut({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### quoteGuestBillingAddressManagementV1GetGet
Return the billing address for a specified quote.


```js
t213_vg.quoteGuestBillingAddressManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestBillingAddressManagementV1AssignPost
Assign a specified billing address to a specified cart.


```js
t213_vg.quoteGuestBillingAddressManagementV1AssignPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### quoteGuestCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals for guest.


```js
t213_vg.quoteGuestCartTotalManagementV1CollectTotalsPut({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### quoteGuestCouponManagementV1RemoveDelete
Delete a coupon from a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1RemoveDelete({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestCouponManagementV1GetGet
Return information for a coupon in a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestCouponManagementV1SetPut
Add a coupon by code to a specified cart.


```js
t213_vg.quoteGuestCouponManagementV1SetPut({
  "cartId": "",
  "couponCode": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* couponCode (string) **required** - The coupon code data.

### quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost
Estimate shipping by address and return list of available shipping methods


```js
t213_vg.quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### giftMessageGuestCartRepositoryV1GetGet
Return the gift message for a specified order.


```js
t213_vg.giftMessageGuestCartRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The shopping cart ID.

### giftMessageGuestCartRepositoryV1SavePost
Set the gift message for an entire order.


```js
t213_vg.giftMessageGuestCartRepositoryV1SavePost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### giftMessageGuestItemRepositoryV1GetGet
Return the gift message for a specified item in a specified shopping cart.


```js
t213_vg.giftMessageGuestItemRepositoryV1GetGet({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Parameters
* cartId (string) **required** - The shopping cart ID.
* itemId (integer) **required** - The item ID.

### giftMessageGuestItemRepositoryV1SavePost
Set the gift message for a specified item in a specified shopping cart.


```js
t213_vg.giftMessageGuestItemRepositoryV1SavePost({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* itemId (integer) **required** - The item ID.
* $body (object)

### quoteGuestCartItemRepositoryV1GetListGet
List items that are assigned to a specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1GetListGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestCartItemRepositoryV1SavePost
Add the specified item to the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1SavePost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### quoteGuestCartItemRepositoryV1DeleteByIdDelete
Remove the specified item from the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1DeleteByIdDelete({
  "cartId": "",
  "itemId": 0
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* itemId (integer) **required** - The item ID of the item to be removed.

### quoteGuestCartItemRepositoryV1SavePut
Add the specified item to the specified cart.


```js
t213_vg.quoteGuestCartItemRepositoryV1SavePut({
  "cartId": "",
  "itemId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* itemId (string) **required**
* $body (object)

### quoteGuestCartManagementV1PlaceOrderPut
Place an order for a specified cart.


```js
t213_vg.quoteGuestCartManagementV1PlaceOrderPut({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
Get payment information


```js
t213_vg.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**

### checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.


```js
t213_vg.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### quoteGuestPaymentMethodManagementV1GetListGet
List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.quoteGuestPaymentMethodManagementV1GetListGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestPaymentMethodManagementV1GetGet
Return the payment method for a specified shopping cart.


```js
t213_vg.quoteGuestPaymentMethodManagementV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### quoteGuestPaymentMethodManagementV1SetPut
Add a specified payment method to a specified shopping cart.


```js
t213_vg.quoteGuestPaymentMethodManagementV1SetPut({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.
* $body (object)

### checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.


```js
t213_vg.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### checkoutGuestShippingInformationManagementV1SaveAddressInformationPost



```js
t213_vg.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### quoteGuestShippingMethodManagementV1GetListGet
List applicable shipping methods for a specified quote.


```js
t213_vg.quoteGuestShippingMethodManagementV1GetListGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The shopping cart ID.

### quoteGuestCartTotalRepositoryV1GetGet
Return quote totals data for a specified cart.


```js
t213_vg.quoteGuestCartTotalRepositoryV1GetGet({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The cart ID.

### checkoutGuestTotalsInformationManagementV1CalculatePost
Calculate quote totals based on address and shipping method.


```js
t213_vg.checkoutGuestTotalsInformationManagementV1CalculatePost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

### giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping


```js
t213_vg.giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required** - The shopping cart ID.
* $body (object)

### integrationAdminTokenServiceV1CreateAdminAccessTokenPost
Create access token for admin given the admin credentials.


```js
t213_vg.integrationAdminTokenServiceV1CreateAdminAccessTokenPost({}, context)
```

#### Parameters
* $body (object)

### integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
Create access token for admin given the customer credentials.


```js
t213_vg.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost({}, context)
```

#### Parameters
* $body (object)

### salesRefundInvoiceV1ExecutePost
Create refund for invoice


```js
t213_vg.salesRefundInvoiceV1ExecutePost({
  "invoiceId": 0
}, context)
```

#### Parameters
* invoiceId (integer) **required**
* $body (object)

### salesInvoiceRepositoryV1GetListGet
Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesInvoiceRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesInvoiceRepositoryV1SavePost
Performs persist operations for a specified invoice.


```js
t213_vg.salesInvoiceRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesInvoiceCommentRepositoryV1SavePost
Performs persist operations for a specified invoice comment.


```js
t213_vg.salesInvoiceCommentRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesInvoiceRepositoryV1GetGet
Loads a specified invoice.


```js
t213_vg.salesInvoiceRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The invoice ID.

### salesInvoiceManagementV1SetCapturePost
Sets invoice capture.


```js
t213_vg.salesInvoiceManagementV1SetCapturePost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### salesInvoiceManagementV1GetCommentsListGet
Lists comments for a specified invoice.


```js
t213_vg.salesInvoiceManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The invoice ID.

### salesInvoiceManagementV1NotifyPost
Emails a user a specified invoice.


```js
t213_vg.salesInvoiceManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The invoice ID.

### salesInvoiceManagementV1SetVoidPost
Voids a specified invoice.


```js
t213_vg.salesInvoiceManagementV1SetVoidPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The invoice ID.

### backendModuleServiceV1GetModulesGet
Returns an array of enabled modules


```js
t213_vg.backendModuleServiceV1GetModulesGet(null, context)
```


### salesInvoiceOrderV1ExecutePost



```js
t213_vg.salesInvoiceOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Parameters
* orderId (integer) **required**
* $body (object)

### salesRefundOrderV1ExecutePost
Create offline refund for order


```js
t213_vg.salesRefundOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Parameters
* orderId (integer) **required**
* $body (object)

### salesShipOrderV1ExecutePost
Creates new Shipment for given Order.


```js
t213_vg.salesShipOrderV1ExecutePost({
  "orderId": 0
}, context)
```

#### Parameters
* orderId (integer) **required**
* $body (object)

### salesOrderRepositoryV1GetListGet
Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesOrderRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesOrderRepositoryV1SavePost
Performs persist operations for a specified order.


```js
t213_vg.salesOrderRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesOrderRepositoryV1SavePut
Performs persist operations for a specified order.


```js
t213_vg.salesOrderRepositoryV1SavePut({}, context)
```

#### Parameters
* $body (object)

### salesOrderItemRepositoryV1GetListGet
Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesOrderItemRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesOrderItemRepositoryV1GetGet
Loads a specified order item.


```js
t213_vg.salesOrderItemRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order item ID.

### salesOrderRepositoryV1GetGet
Loads a specified order.


```js
t213_vg.salesOrderRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1CancelPost
Cancels a specified order.


```js
t213_vg.salesOrderManagementV1CancelPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1GetCommentsListGet
Lists comments for a specified order.


```js
t213_vg.salesOrderManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1AddCommentPost
Adds a comment to a specified order.


```js
t213_vg.salesOrderManagementV1AddCommentPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.
* $body (object)

### salesOrderManagementV1NotifyPost
Emails a user a specified order.


```js
t213_vg.salesOrderManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1HoldPost
Holds a specified order.


```js
t213_vg.salesOrderManagementV1HoldPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1GetStatusGet
Gets the status for a specified order.


```js
t213_vg.salesOrderManagementV1GetStatusGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderManagementV1UnHoldPost
Releases a specified order from hold status.


```js
t213_vg.salesOrderManagementV1UnHoldPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The order ID.

### salesOrderAddressRepositoryV1SavePut
Performs persist operations for a specified order address.


```js
t213_vg.salesOrderAddressRepositoryV1SavePut({
  "parent_id": ""
}, context)
```

#### Parameters
* parent_id (string) **required**
* $body (object)

### catalogProductRepositoryV1GetListGet
Get product list


```js
t213_vg.catalogProductRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogProductRepositoryV1SavePost
Create product


```js
t213_vg.catalogProductRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### catalogAttributeSetManagementV1CreatePost
Create attribute set from data


```js
t213_vg.catalogAttributeSetManagementV1CreatePost({}, context)
```

#### Parameters
* $body (object)

### catalogProductAttributeManagementV1AssignPost
Assign attribute to attribute set


```js
t213_vg.catalogProductAttributeManagementV1AssignPost({}, context)
```

#### Parameters
* $body (object)

### catalogProductAttributeGroupRepositoryV1SavePost
Save attribute group


```js
t213_vg.catalogProductAttributeGroupRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### catalogProductAttributeGroupRepositoryV1GetListGet
Retrieve list of attribute groups


```js
t213_vg.catalogProductAttributeGroupRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
Remove attribute group by id


```js
t213_vg.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required**

### catalogAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets


```js
t213_vg.catalogAttributeSetRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID


```js
t213_vg.catalogAttributeSetRepositoryV1DeleteByIdDelete({
  "attributeSetId": 0
}, context)
```

#### Parameters
* attributeSetId (integer) **required**

### catalogAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID


```js
t213_vg.catalogAttributeSetRepositoryV1GetGet({
  "attributeSetId": 0
}, context)
```

#### Parameters
* attributeSetId (integer) **required**

### catalogAttributeSetRepositoryV1SavePut
Save attribute set data


```js
t213_vg.catalogAttributeSetRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Parameters
* attributeSetId (string) **required**
* $body (object)

### catalogProductAttributeManagementV1GetAttributesGet
Retrieve related attributes based on given attribute set ID


```js
t213_vg.catalogProductAttributeManagementV1GetAttributesGet({
  "attributeSetId": ""
}, context)
```

#### Parameters
* attributeSetId (string) **required**

### catalogProductAttributeManagementV1UnassignDelete
Remove attribute from attribute set


```js
t213_vg.catalogProductAttributeManagementV1UnassignDelete({
  "attributeSetId": "",
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeSetId (string) **required**
* attributeCode (string) **required**

### catalogProductAttributeGroupRepositoryV1SavePut
Save attribute group


```js
t213_vg.catalogProductAttributeGroupRepositoryV1SavePut({
  "attributeSetId": ""
}, context)
```

#### Parameters
* attributeSetId (string) **required**
* $body (object)

### catalogProductAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type


```js
t213_vg.catalogProductAttributeRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogProductAttributeRepositoryV1SavePost
Save attribute data


```js
t213_vg.catalogProductAttributeRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### catalogProductAttributeTypesListV1GetItemsGet
Retrieve list of product attribute types


```js
t213_vg.catalogProductAttributeTypesListV1GetItemsGet(null, context)
```


### catalogProductAttributeRepositoryV1DeleteByIdDelete
Delete Attribute by id


```js
t213_vg.catalogProductAttributeRepositoryV1DeleteByIdDelete({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### catalogProductAttributeRepositoryV1GetGet
Retrieve specific attribute


```js
t213_vg.catalogProductAttributeRepositoryV1GetGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### catalogProductAttributeRepositoryV1SavePut
Save attribute data


```js
t213_vg.catalogProductAttributeRepositoryV1SavePut({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**
* $body (object)

### catalogProductAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options


```js
t213_vg.catalogProductAttributeOptionManagementV1GetItemsGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### catalogProductAttributeOptionManagementV1AddPost
Add option to attribute


```js
t213_vg.catalogProductAttributeOptionManagementV1AddPost({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**
* $body (object)

### catalogProductAttributeOptionManagementV1DeleteDelete
Delete option from attribute


```js
t213_vg.catalogProductAttributeOptionManagementV1DeleteDelete({
  "attributeCode": "",
  "optionId": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**
* optionId (string) **required**

### downloadableSampleRepositoryV1DeleteDelete
Delete downloadable sample


```js
t213_vg.downloadableSampleRepositoryV1DeleteDelete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### downloadableLinkRepositoryV1DeleteDelete
Delete downloadable link


```js
t213_vg.downloadableLinkRepositoryV1DeleteDelete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### catalogProductLinkTypeListV1GetItemsGet
Retrieve information about available product link types


```js
t213_vg.catalogProductLinkTypeListV1GetItemsGet(null, context)
```


### catalogProductLinkTypeListV1GetItemAttributesGet
Provide a list of the product link type attributes


```js
t213_vg.catalogProductLinkTypeListV1GetItemAttributesGet({
  "type": ""
}, context)
```

#### Parameters
* type (string) **required**

### catalogProductMediaAttributeManagementV1GetListGet
Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.


```js
t213_vg.catalogProductMediaAttributeManagementV1GetListGet({
  "attributeSetName": ""
}, context)
```

#### Parameters
* attributeSetName (string) **required**

### catalogProductCustomOptionRepositoryV1SavePost
Save Custom Option


```js
t213_vg.catalogProductCustomOptionRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### catalogProductCustomOptionTypeListV1GetItemsGet
Get custom option types


```js
t213_vg.catalogProductCustomOptionTypeListV1GetItemsGet(null, context)
```


### catalogProductCustomOptionRepositoryV1SavePut
Save Custom Option


```js
t213_vg.catalogProductCustomOptionRepositoryV1SavePut({
  "optionId": ""
}, context)
```

#### Parameters
* optionId (string) **required**
* $body (object)

### catalogProductTypeListV1GetProductTypesGet
Retrieve available product types


```js
t213_vg.catalogProductTypeListV1GetProductTypesGet(null, context)
```


### catalogInventoryStockRegistryV1UpdateStockItemBySkuPut



```js
t213_vg.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut({
  "productSku": "",
  "itemId": ""
}, context)
```

#### Parameters
* productSku (string) **required**
* itemId (string) **required**
* $body (object)

### catalogProductRepositoryV1DeleteByIdDelete



```js
t213_vg.catalogProductRepositoryV1DeleteByIdDelete({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### catalogProductRepositoryV1GetGet
Get info about product by product SKU


```js
t213_vg.catalogProductRepositoryV1GetGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* editMode (boolean)
* storeId (integer)
* forceReload (boolean)

### catalogProductRepositoryV1SavePut
Create product


```js
t213_vg.catalogProductRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### downloadableLinkRepositoryV1GetListGet
List of links with associated samples


```js
t213_vg.downloadableLinkRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### downloadableLinkRepositoryV1SavePost
Update downloadable link of the given product (link type and its resources cannot be changed)


```js
t213_vg.downloadableLinkRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### downloadableSampleRepositoryV1GetListGet
List of samples for downloadable product


```js
t213_vg.downloadableSampleRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### downloadableSampleRepositoryV1SavePost
Update downloadable sample of the given product


```js
t213_vg.downloadableSampleRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### downloadableSampleRepositoryV1SavePut
Update downloadable sample of the given product


```js
t213_vg.downloadableSampleRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Parameters
* sku (string) **required**
* id (string) **required**
* $body (object)

### downloadableLinkRepositoryV1SavePut
Update downloadable link of the given product (link type and its resources cannot be changed)


```js
t213_vg.downloadableLinkRepositoryV1SavePut({
  "sku": "",
  "id": ""
}, context)
```

#### Parameters
* sku (string) **required**
* id (string) **required**
* $body (object)

### catalogProductTierPriceManagementV1GetListGet
Get tier price of product


```js
t213_vg.catalogProductTierPriceManagementV1GetListGet({
  "sku": "",
  "customerGroupId": ""
}, context)
```

#### Parameters
* sku (string) **required**
* customerGroupId (string) **required** - 'all' can be used to specify 'ALL GROUPS'

### catalogProductTierPriceManagementV1RemoveDelete
Remove tier price from product


```js
t213_vg.catalogProductTierPriceManagementV1RemoveDelete({
  "sku": "",
  "customerGroupId": "",
  "qty": 0
}, context)
```

#### Parameters
* sku (string) **required**
* customerGroupId (string) **required** - 'all' can be used to specify 'ALL GROUPS'
* qty (number) **required**

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

#### Parameters
* sku (string) **required**
* customerGroupId (string) **required** - 'all' can be used to specify 'ALL GROUPS'
* price (number) **required**
* qty (number) **required**

### catalogProductLinkManagementV1SetProductLinksPost
Assign a product link to another product


```js
t213_vg.catalogProductLinkManagementV1SetProductLinksPost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### catalogProductLinkRepositoryV1SavePut
Save product link


```js
t213_vg.catalogProductLinkRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### catalogProductLinkManagementV1GetLinkedItemsByTypeGet
Provide the list of links for a specific product


```js
t213_vg.catalogProductLinkManagementV1GetLinkedItemsByTypeGet({
  "sku": "",
  "type": ""
}, context)
```

#### Parameters
* sku (string) **required**
* type (string) **required**

### catalogProductLinkRepositoryV1DeleteByIdDelete



```js
t213_vg.catalogProductLinkRepositoryV1DeleteByIdDelete({
  "sku": "",
  "type": "",
  "linkedProductSku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* type (string) **required**
* linkedProductSku (string) **required**

### catalogProductAttributeMediaGalleryManagementV1GetListGet
Retrieve the list of gallery entries associated with given product


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### catalogProductAttributeMediaGalleryManagementV1CreatePost
Create new gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1CreatePost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### catalogProductAttributeMediaGalleryManagementV1RemoveDelete
Remove gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1RemoveDelete({
  "sku": "",
  "entryId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* entryId (integer) **required**

### catalogProductAttributeMediaGalleryManagementV1GetGet
Return information about gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1GetGet({
  "sku": "",
  "entryId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* entryId (integer) **required**

### catalogProductAttributeMediaGalleryManagementV1UpdatePut
Update gallery entry


```js
t213_vg.catalogProductAttributeMediaGalleryManagementV1UpdatePut({
  "sku": "",
  "entryId": ""
}, context)
```

#### Parameters
* sku (string) **required**
* entryId (string) **required**
* $body (object)

### catalogProductCustomOptionRepositoryV1GetListGet
Get the list of custom options for a specific product


```js
t213_vg.catalogProductCustomOptionRepositoryV1GetListGet({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**

### catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete



```js
t213_vg.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete({
  "sku": "",
  "optionId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**

### catalogProductCustomOptionRepositoryV1GetGet
Get custom option for a specific product


```js
t213_vg.catalogProductCustomOptionRepositoryV1GetGet({
  "sku": "",
  "optionId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* optionId (integer) **required**

### catalogProductWebsiteLinkRepositoryV1SavePost
Assign a product to the website


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1SavePost({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### catalogProductWebsiteLinkRepositoryV1SavePut
Assign a product to the website


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1SavePut({
  "sku": ""
}, context)
```

#### Parameters
* sku (string) **required**
* $body (object)

### catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete
Remove the website assignment from the product by product sku


```js
t213_vg.catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete({
  "sku": "",
  "websiteId": 0
}, context)
```

#### Parameters
* sku (string) **required**
* websiteId (integer) **required**

### rmaRmaManagementV1SearchGet
Return list of rma data objects based on search criteria


```js
t213_vg.rmaRmaManagementV1SearchGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### rmaRmaManagementV1SaveRmaPost
Save RMA


```js
t213_vg.rmaRmaManagementV1SaveRmaPost({}, context)
```

#### Parameters
* $body (object)

### rmaRmaRepositoryV1DeleteDelete
Delete RMA


```js
t213_vg.rmaRmaRepositoryV1DeleteDelete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### rmaRmaRepositoryV1GetGet
Return data object for specified RMA id


```js
t213_vg.rmaRmaRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### rmaRmaManagementV1SaveRmaPut
Save RMA


```js
t213_vg.rmaRmaManagementV1SaveRmaPut({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### rmaCommentManagementV1CommentsListGet
Comments list


```js
t213_vg.rmaCommentManagementV1CommentsListGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### rmaCommentManagementV1AddCommentPost
Add comment


```js
t213_vg.rmaCommentManagementV1AddCommentPost({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### rmaTrackManagementV1GetShippingLabelPdfGet
Get shipping label int the PDF format


```js
t213_vg.rmaTrackManagementV1GetShippingLabelPdfGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### rmaTrackManagementV1GetTracksGet
Get track list


```js
t213_vg.rmaTrackManagementV1GetTracksGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### rmaTrackManagementV1AddTrackPost
Add track


```js
t213_vg.rmaTrackManagementV1AddTrackPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**
* $body (object)

### rmaTrackManagementV1RemoveTrackByIdDelete
Remove track by id


```js
t213_vg.rmaTrackManagementV1RemoveTrackByIdDelete({
  "id": 0,
  "trackId": 0
}, context)
```

#### Parameters
* id (integer) **required**
* trackId (integer) **required**

### rmaRmaAttributesManagementV1GetAllAttributesMetadataGet
Get all attribute metadata.


```js
t213_vg.rmaRmaAttributesManagementV1GetAllAttributesMetadataGet(null, context)
```


### rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet
Get custom attribute metadata for the given Data object's attribute set


```js
t213_vg.rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet({}, context)
```

#### Parameters
* dataObjectClassName (string) - Data object class name

### rmaRmaAttributesManagementV1GetAttributesGet
Retrieve all attributes filtered by form code


```js
t213_vg.rmaRmaAttributesManagementV1GetAttributesGet({
  "formCode": ""
}, context)
```

#### Parameters
* formCode (string) **required**

### rmaRmaAttributesManagementV1GetAttributeMetadataGet
Retrieve attribute metadata.


```js
t213_vg.rmaRmaAttributesManagementV1GetAttributeMetadataGet({
  "attributeCode": ""
}, context)
```

#### Parameters
* attributeCode (string) **required**

### rewardRewardManagementV1SetPost
Set reward points to quote


```js
t213_vg.rewardRewardManagementV1SetPost(null, context)
```


### salesRuleRuleRepositoryV1SavePost
Save sales rule.


```js
t213_vg.salesRuleRuleRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesRuleRuleRepositoryV1GetListGet
Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesRuleRuleRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesRuleRuleRepositoryV1DeleteByIdDelete
Delete rule by ID.


```js
t213_vg.salesRuleRuleRepositoryV1DeleteByIdDelete({
  "ruleId": 0
}, context)
```

#### Parameters
* ruleId (integer) **required**

### salesRuleRuleRepositoryV1GetByIdGet
Get rule by ID.


```js
t213_vg.salesRuleRuleRepositoryV1GetByIdGet({
  "ruleId": 0
}, context)
```

#### Parameters
* ruleId (integer) **required**

### salesRuleRuleRepositoryV1SavePut
Save sales rule.


```js
t213_vg.salesRuleRuleRepositoryV1SavePut({
  "ruleId": ""
}, context)
```

#### Parameters
* ruleId (string) **required**
* $body (object)

### searchV1SearchGet
Make Full Text Search and return found Documents


```js
t213_vg.searchV1SearchGet({}, context)
```

#### Parameters
* searchCriteria[requestName] (string)
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesShipmentRepositoryV1SavePost
Performs persist operations for a specified shipment.


```js
t213_vg.salesShipmentRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesShipmentTrackRepositoryV1SavePost
Performs persist operations for a specified shipment track.


```js
t213_vg.salesShipmentTrackRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### salesShipmentTrackRepositoryV1DeleteByIdDelete
Deletes a specified shipment track by ID.


```js
t213_vg.salesShipmentTrackRepositoryV1DeleteByIdDelete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The shipment track ID.

### salesShipmentRepositoryV1GetGet
Loads a specified shipment.


```js
t213_vg.salesShipmentRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The shipment ID.

### salesShipmentManagementV1GetCommentsListGet
Lists comments for a specified shipment.


```js
t213_vg.salesShipmentManagementV1GetCommentsListGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The shipment ID.

### salesShipmentCommentRepositoryV1SavePost
Performs persist operations for a specified shipment comment.


```js
t213_vg.salesShipmentCommentRepositoryV1SavePost({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* $body (object)

### salesShipmentManagementV1NotifyPost
Emails user a specified shipment.


```js
t213_vg.salesShipmentManagementV1NotifyPost({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The shipment ID.

### salesShipmentManagementV1GetLabelGet
Gets a specified shipment label.


```js
t213_vg.salesShipmentManagementV1GetLabelGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The shipment label ID.

### salesShipmentRepositoryV1GetListGet
Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesShipmentRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### catalogInventoryStockRegistryV1GetLowStockItemsGet
Retrieves a list of SKU's with low inventory qty


```js
t213_vg.catalogInventoryStockRegistryV1GetLowStockItemsGet({
  "scopeId": 0,
  "qty": 0
}, context)
```

#### Parameters
* scopeId (integer) **required**
* qty (number) **required**
* currentPage (integer)
* pageSize (integer)

### catalogInventoryStockRegistryV1GetStockItemBySkuGet



```js
t213_vg.catalogInventoryStockRegistryV1GetStockItemBySkuGet({
  "productSku": ""
}, context)
```

#### Parameters
* productSku (string) **required**
* scopeId (integer)

### catalogInventoryStockRegistryV1GetStockStatusBySkuGet



```js
t213_vg.catalogInventoryStockRegistryV1GetStockStatusBySkuGet({
  "productSku": ""
}, context)
```

#### Parameters
* productSku (string) **required**
* scopeId (integer)

### storeStoreConfigManagerV1GetStoreConfigsGet



```js
t213_vg.storeStoreConfigManagerV1GetStoreConfigsGet({}, context)
```

#### Parameters
* storeCodes (array)

### storeGroupRepositoryV1GetListGet
Retrieve list of all groups


```js
t213_vg.storeGroupRepositoryV1GetListGet(null, context)
```


### storeStoreRepositoryV1GetListGet
Retrieve list of all stores


```js
t213_vg.storeStoreRepositoryV1GetListGet(null, context)
```


### storeWebsiteRepositoryV1GetListGet
Retrieve list of all websites


```js
t213_vg.storeWebsiteRepositoryV1GetListGet(null, context)
```


### taxTaxClassRepositoryV1SavePost
Create a Tax Class


```js
t213_vg.taxTaxClassRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### taxTaxClassRepositoryV1GetListGet
Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxClassRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### taxTaxClassRepositoryV1SavePut
Create a Tax Class


```js
t213_vg.taxTaxClassRepositoryV1SavePut({
  "classId": ""
}, context)
```

#### Parameters
* classId (string) **required**
* $body (object)

### taxTaxClassRepositoryV1DeleteByIdDelete
Delete a tax class with the given tax class id.


```js
t213_vg.taxTaxClassRepositoryV1DeleteByIdDelete({
  "taxClassId": 0
}, context)
```

#### Parameters
* taxClassId (integer) **required**

### taxTaxClassRepositoryV1GetGet
Get a tax class with the given tax class id.


```js
t213_vg.taxTaxClassRepositoryV1GetGet({
  "taxClassId": 0
}, context)
```

#### Parameters
* taxClassId (integer) **required**

### taxTaxRateRepositoryV1SavePost
Create or update tax rate


```js
t213_vg.taxTaxRateRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### taxTaxRateRepositoryV1SavePut
Create or update tax rate


```js
t213_vg.taxTaxRateRepositoryV1SavePut({}, context)
```

#### Parameters
* $body (object)

### taxTaxRateRepositoryV1GetListGet
Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxRateRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### taxTaxRateRepositoryV1DeleteByIdDelete
Delete tax rate


```js
t213_vg.taxTaxRateRepositoryV1DeleteByIdDelete({
  "rateId": 0
}, context)
```

#### Parameters
* rateId (integer) **required**

### taxTaxRateRepositoryV1GetGet
Get tax rate


```js
t213_vg.taxTaxRateRepositoryV1GetGet({
  "rateId": 0
}, context)
```

#### Parameters
* rateId (integer) **required**

### taxTaxRuleRepositoryV1SavePost
Save TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1SavePost({}, context)
```

#### Parameters
* $body (object)

### taxTaxRuleRepositoryV1SavePut
Save TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1SavePut({}, context)
```

#### Parameters
* $body (object)

### taxTaxRuleRepositoryV1GetListGet
Search TaxRules This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.taxTaxRuleRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### taxTaxRuleRepositoryV1DeleteByIdDelete
Delete TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1DeleteByIdDelete({
  "ruleId": 0
}, context)
```

#### Parameters
* ruleId (integer) **required**

### taxTaxRuleRepositoryV1GetGet
Get TaxRule


```js
t213_vg.taxTaxRuleRepositoryV1GetGet({
  "ruleId": 0
}, context)
```

#### Parameters
* ruleId (integer) **required**

### salesTransactionRepositoryV1GetListGet
Lists transactions that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TransactionRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.


```js
t213_vg.salesTransactionRepositoryV1GetListGet({}, context)
```

#### Parameters
* searchCriteria[filterGroups][][filters][][field] (string) - Field
* searchCriteria[filterGroups][][filters][][value] (string) - Value
* searchCriteria[filterGroups][][filters][][conditionType] (string) - Condition type
* searchCriteria[sortOrders][][field] (string) - Sorting field.
* searchCriteria[sortOrders][][direction] (string) - Sorting direction.
* searchCriteria[pageSize] (integer) - Page size.
* searchCriteria[currentPage] (integer) - Current page.

### salesTransactionRepositoryV1GetGet
Loads a specified transaction.


```js
t213_vg.salesTransactionRepositoryV1GetGet({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The transaction ID.

### worldpayGuestPaymentInformationManagementProxyV1SavePaymentInformationAndPlaceOrderPost
Proxy handler for guest place order


```js
t213_vg.worldpayGuestPaymentInformationManagementProxyV1SavePaymentInformationAndPlaceOrderPost({
  "cartId": ""
}, context)
```

#### Parameters
* cartId (string) **required**
* $body (object)

