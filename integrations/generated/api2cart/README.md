# @datafire/api2cart

Client library for Swagger API2Cart

## Installation and Usage
```bash
npm install --save @datafire/api2cart
```
```js
let api2cart = require('@datafire/api2cart').create({
  api_key: "",
  store_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API2Cart

## Actions

### AccountCartAdd
Add store to the account


```js
api2cart.AccountCartAdd({
  "body": {
    "cart_id": "",
    "store_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AccountCartAdd](#accountcartadd)

#### Output
* output `object`
  * result `object`
    * store_key `string`
  * return_code `integer`
  * return_message `string`

### AccountCartList
Get list of carts.


```js
api2cart.AccountCartList({}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * request_from_date `string`: Retrieve entities from their creation date
  * request_to_date `string`: Retrieve entities to their creation date
  * store_url `string`: A web address of a store
  * store_key `string`: Find store by store key

#### Output
* output `object`
  * result `object`
    * carts `array`
      * items `object`
        * cart_id `string`
        * id `string`
        * store_key `string`
        * total_calls `string`
        * url `string`
    * carts_count `integer`
  * return_code `integer`
  * return_message `string`

### AccountConfigUpdate
Update configs in the API2Cart database.


```js
api2cart.AccountConfigUpdate({}, context)
```

#### Input
* input `object`
  * new_store_key `string`: Update store key
  * bridge_url `string`: This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
  * store_root `string`: Absolute path to the store root directory (used with "bridge_url" parameter)
  * db_tables_prefix `string`: This parameter is deprecated for this method. Please, use this parameter in method account.config.update
  * 3dcartapi_api_key `string`: 3DCart API Key
  * amazon_access_token `string`: MWS Auth Token. Access token authorizing the app to access resources on behalf of a user
  * amazon_seller_id `string`: Amazon Seller ID
  * amazon_marketplaces_ids `string`: Amazon Marketplace IDs comma separated string
  * amazon_secret_key `string`: Amazon Secret Key
  * amazon_access_key_id `string`: Amazon Secret Key Id
  * aspdotnetstorefront_api_user `string`: It's a AspDotNetStorefront account for which API is available
  * aspdotnetstorefront_api_pass `string`: AspDotNetStorefront API Password
  * bigcommerceapi_admin_account `string`: It's a BigCommerce account for which API is enabled
  * bigcommerceapi_api_path `string`: BigCommerce API URL
  * bigcommerceapi_api_key `string`: Bigcommerce API Key
  * bigcommerceapi_client_id `string`: Client ID of the requesting app
  * bigcommerceapi_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * bigcommerceapi_context `string`: API Path section unique to the store
  * demandware_client_id `string`: Demandware client id
  * demandware_api_password `string`: Demandware api password
  * demandware_user_name `string`: Demandware user name
  * demandware_user_password `string`: Demandware user password
  * demandware_env_type `string`: Demandware environment
  * ebay_client_id `string`: Application ID (AppID).
  * ebay_client_secret `string`: Shared Secret from eBay application
  * ebay_runame `string`: The RuName value that eBay assigns to your application.
  * ebay_access_token `string`: Used to authenticate API requests.
  * ebay_refresh_token `string`: Used to renew the access token.
  * ebay_environment `string`: eBay environment
  * ebay_site_id `integer`: eBay global ID
  * ecwid_acess_token `string`: Access token authorizing the app to access resources on behalf of a user
  * ecwid_store_id `string`: Store Id
  * etsy_keystring `string`: Etsy keystring
  * etsy_shared_secret `string`: Etsy shared secret
  * etsy_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * etsy_token_secret `string`: Secret token authorizing the app to access resources on behalf of a user
  * neto_api_key `string`: Neto API Key
  * neto_api_username `string`: Neto User Name
  * shopify_api_key `string`: Shopify API Key
  * shopify_api_password `string`: Shopify API Password
  * shopify_shared_secret `string`: Shared secret
  * shopify_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * shopware_api_key `string`: Shopware api key
  * volusion_login `string`: It's a Volusion account for which API is enabled
  * volusion_password `string`: Volusion API Password
  * walmart_client_id `string`: Walmart client ID
  * walmart_client_secret `string`: Walmart client secret
  * squarespace_api_key `string`: Squarespace API Key
  * hybris_client_id `string`: Omni Commerce Connector Client ID
  * hybris_client_secret `string`: Omni Commerce Connector Client Secret
  * hybris_username `string`: User Name
  * hybris_password `string`: User password
  * lightspeed_api_key `string`: LightSpeed api key
  * lightspeed_api_secret `string`: LightSpeed api secret

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### AccountFailedWebhooks
List webhooks that was not delivered to the callback.


```js
api2cart.AccountFailedWebhooks({}, context)
```

#### Input
* input `object`
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * start `integer`: This parameter sets the number from which you want to get entities
  * ids `string`: List of сomma-separated webhook ids

#### Output
* output `object`
  * result `object`
    * all_failed_webhook `string`
    * webhook `array`
      * items `object`
        * entity_id `string`
        * time [A2CDateTime](#a2cdatetime)
        * webhook_id `integer`
  * return_code `integer`
  * return_message `string`

### AccountSupportedPlatforms
Get list of supported platforms


```js
api2cart.AccountSupportedPlatforms(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * supported_platforms `array`
      * items `object`
        * cart_id `string`
        * cart_name `string`
        * cart_versions `string`
        * params `object`
          * additional `array`
          * required `array`
  * return_code `integer`
  * return_message `string`

### AttributeAdd
Add new attribute


```js
api2cart.AttributeAdd({
  "type": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: text, select, textarea, date, price, multiselect, boolean): Defines attribute's type
  * code `string`: Entity code
  * name **required** `string`: Defines attributes's name
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * visible `boolean`: Set visibility status
  * required `boolean`: Defines if the option is required
  * position `integer`: Attribute`s position
  * attribute_group_id `string`: Filter by attribute_group_id
  * is_global `string`: Attribute saving scope
  * is_searchable `boolean`: Use attribute in Quick Search
  * is_filterable `string`: Use In Layered Navigation
  * is_comparable `boolean`: Comparable on Front-end
  * is_html_allowed_on_front `boolean`: Allow HTML Tags on Frontend
  * is_filterable_in_search `boolean`: Use In Search Results Layered Navigation
  * is_configurable `boolean`: Use To Create Configurable Product
  * is_visible_in_advanced_search `boolean`: Use in Advanced Search
  * is_used_for_promo_rules `boolean`: Use for Promo Rule Conditions
  * used_in_product_listing `boolean`: Used in Product Listing
  * used_for_sort_by `boolean`: Used for Sorting in Product Listing
  * apply_to `string`: Types of products which can have this attribute

#### Output
* output `object`
  * result `object`
    * id `string`
  * return_code `integer`
  * return_message `string`

### AttributeAssignGroup
Assign attribute to the group


```js
api2cart.AttributeAssignGroup({
  "id": "",
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * group_id **required** `string`: Attribute group_id
  * attribute_set_id `string`: Attribute set id

#### Output
* output `object`
  * result `object`
    * assigned `string`
  * return_code `integer`
  * return_message `string`

### AttributeAssignSet
Assign attribute to the attribute set


```js
api2cart.AttributeAssignSet({
  "id": "",
  "attribute_set_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * group_id `string`: Attribute group_id
  * attribute_set_id **required** `string`: Attribute set id

#### Output
* output `object`
  * result `object`
    * assigned `string`
  * return_code `integer`
  * return_message `string`

### AttributeAttributesetList
Get attribute_set list


```js
api2cart.AttributeAttributesetList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result `array`
    * items [StoreAttribute_Group](#storeattribute_group)
  * return_code `integer`
  * return_message `string`

### AttributeCount
Get attributes count


```js
api2cart.AttributeCount({}, context)
```

#### Input
* input `object`
  * type `string`: Defines attribute's type
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * visible `boolean`: Filter items by visibility status
  * required `boolean`: Defines if the option is required
  * system `boolean`: True if attribute is system

#### Output
* output `object`
  * result `object`
    * attributes_count `integer`
  * return_code `integer`
  * return_message `string`

### AttributeDelete
Delete attribute from store


```js
api2cart.AttributeDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id
  * id **required** `string`: Entity id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### AttributeGroupList
Get attribute group list


```js
api2cart.AttributeGroupList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * lang_id `string`: Language id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * attribute_set_id `string`: Attribute set id

#### Output
* output `object`
  * result `array`
    * items [StoreAttribute_Group](#storeattribute_group)
  * return_code `integer`
  * return_message `string`

### AttributeInfo
Get attribute info


```js
api2cart.AttributeInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result [StoreAttribute](#storeattribute)
  * return_code `integer`
  * return_message `string`

### AttributeList
Get attributes list


```js
api2cart.AttributeList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * type `string`: Defines attribute's type
  * attribute_ids `string`: Filter attributes by ids
  * store_id `string`: Store Id
  * lang_id `string`: Retrieves attributes on specified language id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * visible `boolean`: Filter items by visibility status
  * required `boolean`: Defines if the option is required
  * system `boolean`: True if attribute is system

#### Output
* output `object`
  * result `object`
    * order `array`
      * items [StoreAttribute](#storeattribute)
  * return_code `integer`
  * return_message `string`

### AttributeTypeList
Get list of supported attributes types


```js
api2cart.AttributeTypeList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * attribute_type `array`
      * items `string`
  * return_code `integer`
  * return_message `string`

### AttributeUnassignGroup
Unassign attribute from group


```js
api2cart.AttributeUnassignGroup({
  "id": "",
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * group_id **required** `string`: Customer group_id

#### Output
* output `object`
  * result `object`
    * unassigned `string`
  * return_code `integer`
  * return_message `string`

### AttributeUnassignSet
Unassign attribute from attribute set


```js
api2cart.AttributeUnassignSet({
  "id": "",
  "attribute_set_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * attribute_set_id **required** `string`: Attribute set id

#### Output
* output `object`
  * result `object`
    * unassigned `string`
  * return_code `integer`
  * return_message `string`

### BasketInfo
Retrieve basket information.


```js
api2cart.BasketInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * store_id `string`: Store Id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result [Basket](#basket)
  * return_code `integer`
  * return_message `string`

### BasketItemAdd
Add item to basket


```js
api2cart.BasketItemAdd({
  "customer_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `string`: Retrieves orders specified by customer id
  * product_id **required** `string`: Defines id of the product which should be added to the basket
  * variant_id `string`: Defines product's variants specified by variant id
  * quantity `number`: Defines new items quantity
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * added `boolean`
  * return_code `integer`
  * return_message `string`

### BasketLiveShippingServiceCreate
Create live shipping rate service. (Beta)


```js
api2cart.BasketLiveShippingServiceCreate({
  "name": "",
  "callback": ""
}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id
  * name **required** `string`: Shipping Service Name
  * callback **required** `string`: Callback url that returns shipping rates. It should be able to accept POST requests with json data.

#### Output
* output `object`
  * result `object`
    * id `integer`
  * return_code `integer`
  * return_message `string`

### BasketLiveShippingServiceDelete
Delete live shipping rate service. (Beta)


```js
api2cart.BasketLiveShippingServiceDelete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Entity id

#### Output
* output `object`
  * result `object`
    * status `boolean`
  * return_code `integer`
  * return_message `string`

### BasketLiveShippingServiceList
Retrieve a list of live shipping rate services. (Beta)


```js
api2cart.BasketLiveShippingServiceList({}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250

#### Output
* output `object`
  * result `object`
    * live_shipping_services `array`
      * items [Basket_LiveShippingService](#basket_liveshippingservice)
  * return_code `integer`
  * return_message `string`

### BridgeDelete
Delete bridge from the store.


```js
api2cart.BridgeDelete(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * deleted `boolean`
  * return_code `integer`
  * return_message `string`

### BridgeDownload
Download bridge for store


```js
api2cart.BridgeDownload({}, context)
```

#### Input
* input `object`
  * whitelabel `boolean`: Identifies if there is a necessity to download whitelabel bridge.

#### Output
* output `file`

### BridgeUpdate
Update bridge in the store.


```js
api2cart.BridgeUpdate(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * updated `boolean`
  * return_code `integer`
  * return_message `string`

### CartBridge
Get bridge key and store key


```js
api2cart.CartBridge(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * bridge `string`
    * store_key `string`
  * return_code `integer`
  * return_message `string`

### CartCatalogPriceRulesCount
Get count of cart catalog price rules discounts.


```js
api2cart.CartCatalogPriceRulesCount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * catalog_price_rules_count `string`
  * return_code `integer`
  * return_message `string`

### CartCatalogPriceRulesList
Get cart catalog price rules discounts.


```js
api2cart.CartCatalogPriceRulesList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * ids `string`: Retrieves  catalog_price_rules by ids
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Cart_Catalog_PriceRules_List](#model_response_cart_catalog_pricerules_list)

### CartClearCache
Clear cache on store.


```js
api2cart.CartClearCache({
  "cache_type": ""
}, context)
```

#### Input
* input `object`
  * cache_type **required** `string`: Defines which cache should be cleared.

#### Output
* output `object`
  * result `object`
    * cache_cleared `string`
  * return_code `integer`
  * return_message `string`

### CartConfig
Get list of cart configs


```js
api2cart.CartConfig({}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result `object`
    * db_prefix `string`
    * store_name `string`
    * store_url `string`
  * return_code `integer`
  * return_message `string`

### CartConfigUpdate
Use this API method to update custom data in client database.


```js
api2cart.CartConfigUpdate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CartConfigUpdate](#cartconfigupdate)

#### Output
* output `object`
  * result `object`
  * return_code `integer`
  * return_message `string`

### CartCouponAdd
Create new coupon


```js
api2cart.CartCouponAdd({
  "body": {
    "code": "",
    "action_type": "",
    "action_apply_to": "",
    "action_scope": "",
    "action_amount": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CartCouponAdd](#cartcouponadd)

#### Output
* output `object`
  * result `object`
    * coupon_id `string`
  * return_code `integer`
  * return_message `string`

### CartCouponConditionAdd
Create new coupon condition


```js
api2cart.CartCouponConditionAdd({
  "coupon_id": "",
  "entity": "",
  "key": "",
  "operator": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id
  * coupon_id **required** `string`: Coupon Id
  * target `string`: Defines condition operator
  * entity **required** `string` (values: order, order_shipping_address, product, customer): Defines condition entity type
  * key **required** `string` (values: total, subtotal, shipping_total, total_quantity, total_weight, country, product_id, variant_id, category_id, customer_id, item_price, item_total_price, item_quantity): Defines condition entity attribute key
  * operator **required** `string` (values: ==, <, <=, >, >=, ONE_OF): Defines condition operator
  * value **required** `string`: Defines condition value, can be comma separated according to the operator.

#### Output
* output `object`
  * result `object`
    * status `boolean`
  * return_code `integer`
  * return_message `string`

### CartCouponCount
Get cart coupons count.


```js
api2cart.CartCouponCount({}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id
  * date_start_from `string`: Filter entity by date_start (greater or equal)
  * date_start_to `string`: Filter entity by date_start (less or equal)
  * date_end_from `string`: Filter entity by date_end (greater or equal)
  * date_end_to `string`: Filter entity by date_end (less or equal)
  * avail `boolean`: Defines category's visibility status

#### Output
* output `object`
  * result `object`
    * coupons_count `string`
  * return_code `integer`
  * return_message `string`

### CartCouponDelete
Delete coupon


```js
api2cart.CartCouponDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### CartCouponList
Get cart coupon discounts.


```js
api2cart.CartCouponList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * coupons_ids `string`: Filter coupons by ids
  * store_id `string`: Filter coupons by store id
  * date_start_from `string`: Filter entity by date_start (greater or equal)
  * date_start_to `string`: Filter entity by date_start (less or equal)
  * date_end_from `string`: Filter entity by date_end (greater or equal)
  * date_end_to `string`: Filter entity by date_end (less or equal)
  * avail `boolean`: Filter coupons by avail status
  * lang_id `string`: Language id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Cart_Coupon_List](#model_response_cart_coupon_list)

### CartCreate
Add store to the account


```js
api2cart.CartCreate({
  "cart_id": "",
  "store_url": "",
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * cart_id **required** `string` (values: 3DCartApi, AceShop, Amazon, AspDotNetStorefront, BigcommerceApi, Creloaded, Cscart, Cubecart, Demandware, EBay, Ecwid, Etsy, Gambio, Interspire, JooCart, Magento1212, MijoShop, Neto, Opencart14, LightSpeed, Oscmax2, Oscommerce22ms2, Oxid, Pinnacle, Prestashop, SSPremium, Shopify, Squarespace, Shopware, Tomatocart, Ubercart, Virtuemart, Volusion, WPecommerce, Walmart, WebAsyst, Woocommerce, Xcart, Xtcommerce, XtcommerceVeyton, Zencart137): Store’s identifier which you can get from cart_list method
  * store_url **required** `string`: A web address of a store that you would like to connect to API2Cart
  * bridge_url `string`: This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
  * store_root `string`: Absolute path to the store root directory (used with "bridge_url" parameter)
  * store_key `string`: Set this parameter if bridge is already uploaded to store
  * shared_secret `string`: Shared secret
  * validate_version `boolean`: Specify if api2cart should validate cart version
  * verify `boolean`: Enables or disables cart's verification
  * db_tables_prefix `string`: This parameter is deprecated for this method. Please, use this parameter in method account.config.update
  * ftp_host `string`: FTP connection host
  * ftp_user `string`: FTP User
  * ftp_password `string`: FTP Password
  * ftp_port `integer`: FTP Port
  * ftp_store_dir `string`: FTP Store dir
  * apiKey_3dcart `string`: 3DCart API Key
  * AdminAccount `string`: It's a BigCommerce account for which API is enabled
  * ApiPath `string`: BigCommerce API URL
  * ApiKey `string`: Bigcommerce API Key
  * client_id `string`: Client ID of the requesting app
  * accessToken `string`: Access token authorizing the app to access resources on behalf of a user
  * context `string`: API Path section unique to the store
  * access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * apiKey_shopify `string`: Shopify API Key
  * apiPassword `string`: Shopify API Password
  * accessToken_shopify `string`: Access token authorizing the app to access resources on behalf of a user
  * apiKey `string`: Neto API Key
  * apiUsername `string`: Neto User Name
  * EncryptedPassword `string`: Volusion API Password
  * Login `string`: It's a Volusion account for which API is enabled
  * apiUser_adnsf `string`: It's a AspDotNetStorefront account for which API is available
  * apiPass `string`: AspDotNetStorefront API Password
  * accessKey_scelite `string`: Shopping Cart Elite Access Key
  * apiKey_scelite `string`: Shopping Cart Elite API Key
  * apiSecretKey_scelite `string`: Shopping Cart Elite API Secret Key
  * privateKey `string`: 3DCart Application Private Key
  * appToken `string`: 3DCart Token from Application
  * etsy_keystring `string`: Etsy keystring
  * etsy_shared_secret `string`: Etsy shared secret
  * tokenSecret `string`: Secret token authorizing the app to access resources on behalf of a user
  * ebay_client_id `string`: Application ID (AppID).
  * ebay_client_secret `string`: Shared Secret from eBay application
  * ebay_runame `string`: The RuName value that eBay assigns to your application.
  * ebay_access_token `string`: Used to authenticate API requests.
  * ebay_refresh_token `string`: Used to renew the access token.
  * ebay_environment `string`: eBay environment
  * ebay_site_id `integer`: eBay global ID
  * dw_client_id `string`: Demandware client id
  * dw_api_pass `string`: Demandware api password
  * demandware_user_name `string`: Demandware user name
  * demandware_user_password `string`: Demandware user password
  * store_id **required** `string`: Store Id
  * seller_id `string`: Seller Id
  * amazon_secret_key `string`: Amazon Secret Key
  * amazon_access_key_id `string`: Amazon Secret Key Id
  * marketplaces_ids `string`: Comma separated marketplaces ids
  * environment `string`
  * hybris_client_id `string`: Omni Commerce Connector Client ID
  * hybris_client_secret `string`: Omni Commerce Connector Client Secret
  * hybris_username `string`: User Name
  * hybris_password `string`: User password
  * walmart_client_id `string`: Walmart client ID
  * walmart_client_secret `string`: Walmart client secret
  * lightspeed_api_key `string`: LightSpeed api key
  * lightspeed_api_secret `string`: LightSpeed api secret
  * shopware_api_key `string`: Shopware api key

#### Output
* output `object`
  * result `object`
    * store_key `string`
  * return_code `integer`
  * return_message `string`

### CartDelete
Remove store from API2Cart


```js
api2cart.CartDelete(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * store `string`
  * return_code `integer`
  * return_message `string`

### CartDisconnect
Disconnect with the store and clear store session data.


```js
api2cart.CartDisconnect({}, context)
```

#### Input
* input `object`
  * delete_bridge `boolean`: Identifies if there is a necessity to delete bridge

#### Output
* output `object`
  * result `object`
    * connection `string`
  * return_code `integer`
  * return_message `string`

### CartGiftcardAdd
Create new gift card


```js
api2cart.CartGiftcardAdd({
  "amount": 0
}, context)
```

#### Input
* input `object`
  * amount **required** `number`: Defines the gift card amount value.
  * code `string`: Gift card code
  * owner_email `string`: Gift card owner email

#### Output
* output `object`
  * result `object`
    * code `string`
    * id `string`
  * return_code `integer`
  * return_message `string`

### CartGiftcardCount
Get gift cards count.


```js
api2cart.CartGiftcardCount({}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * gift_cards_count `string`
  * return_code `integer`
  * return_message `string`

### CartGiftcardList
Get gift cards list.


```js
api2cart.CartGiftcardList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * store_id `string`: Store Id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Cart_GiftCard_List](#model_response_cart_giftcard_list)

### CartInfo
Get cart information


```js
api2cart.CartInfo({}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Store Id

#### Output
* output `object`
  * result [Cart](#cart)
  * return_code `integer`
  * return_message `string`

### CartList
Get list of supported carts


```js
api2cart.CartList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * supported_carts `array`
      * items `object`
        * cart_id `string`
        * cart_name `string`
        * cart_versions `string`
        * params `array`
          * items `string`
  * return_code `integer`
  * return_message `string`

### CartMetaDataList
Get entity meta data


```js
api2cart.CartMetaDataList({
  "entity_id": ""
}, context)
```

#### Input
* input `object`
  * entity_id **required** `string`: Entity Id
  * entity `string`: Entity
  * store_id `string`: Store Id
  * key `string`: Key
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Cart_MetaData_List](#model_response_cart_metadata_list)

### CartMetaDataSet
Set meta data for a specific entity


```js
api2cart.CartMetaDataSet({
  "entity_id": "",
  "key": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * entity_id **required** `string`: Entity Id
  * entity `string`: Entity
  * store_id `string`: Store Id
  * key **required** `string`: Key
  * value **required** `string`: Value

#### Output
* output `object`
  * result `object`
    * id `string`
  * return_code `integer`
  * return_message `string`

### CartMetaDataUnset
Unset meta data for a specific entity


```js
api2cart.CartMetaDataUnset({
  "entity_id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * entity_id **required** `string`: Entity Id
  * entity `string`: Entity
  * store_id `string`: Store Id
  * key **required** `string`: Key

#### Output
* output `object`
  * result `object`
    * status `boolean`
  * return_code `integer`
  * return_message `string`

### CartMethods
Get list of cart methods


```js
api2cart.CartMethods(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * method `array`
      * items `string`
  * return_code `integer`
  * return_message `string`

### CartPluginList
Get list of installed plugins


```js
api2cart.CartPluginList({}, context)
```

#### Input
* input `object`
  * store_key `string`: Set this parameter if bridge is already uploaded to store
  * store_id `string`: Store Id
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250

#### Output
* output `object`
  * result `object`
    * all_plugins `integer`
    * plugins `array`
      * items [PluginList](#pluginlist)
  * return_code `integer`
  * return_message `string`

### CartScriptAdd
Add new script to the storefront


```js
api2cart.CartScriptAdd({}, context)
```

#### Input
* input `object`
  * name `string`: The user-friendly script name
  * description `string`: The user-friendly description
  * html `string`: An html string containing exactly one `script` tag.
  * src `string`: The URL of the remote script
  * load_method `string`: The load method to use for the script
  * scope `string`: The page or pages on the online store where the script should be included
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * script_id `string`
  * return_code `integer`
  * return_message `string`

### CartScriptDelete
Remove script from the storefront


```js
api2cart.CartScriptDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Entity id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * deleted `boolean`
  * return_code `integer`
  * return_message `string`

### CartScriptList
Get scripts installed to the storefront


```js
api2cart.CartScriptList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * script_ids `string`: Retrieves only scripts with specific ids
  * store_id `string`: Store Id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Cart_Script_List](#model_response_cart_script_list)

### CartShippingZonesList
Get list of shipping zones


```js
api2cart.CartShippingZonesList({}, context)
```

#### Input
* input `object`
  * store_id `string`: Store Id

#### Output
* output `object`
  * result [Cart_ShippingZone](#cart_shippingzone)
  * return_code `integer`
  * return_message `string`

### CartValidate
Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.


```js
api2cart.CartValidate({}, context)
```

#### Input
* input `object`
  * validate_version `boolean`: Specify if api2cart should validate cart version

#### Output
* output `object`
  * result `object`
    * status `string`
  * return_code `integer`
  * return_message `string`

### CategoryAdd
Add new category in store


```js
api2cart.CategoryAdd({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Defines category's name that has to be added
  * parent_id `string`: Adds categories specified by parent id
  * stores_ids `string`: Create category in the stores that is specified by comma-separated stores' id
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * avail `boolean`: Defines category's visibility status
  * sort_order `integer`: Sort number in the list
  * created_time `string`: Entity's date creation
  * modified_time `string`: Entity's date modification
  * description `string`: Defines category's description
  * meta_title `string`: Defines unique meta title for each entity
  * meta_description `string`: Defines unique meta description of a entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * seo_url `string`: Defines unique category's URL for SEO

#### Output
* output `object`
  * result `object`
    * category_id `string`
  * return_code `integer`
  * return_message `string`

### CategoryAssign
Assign category to product


```js
api2cart.CategoryAssign({
  "product_id": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines category assign to the product, specified by product id
  * category_id **required** `string`: Defines category assign, specified by category id

#### Output
* output `object`
  * result `object`
  * return_code `integer`
  * return_message `string`

### CategoryCount
Count categories in store.


```js
api2cart.CategoryCount({}, context)
```

#### Input
* input `object`
  * parent_id `string`: Counts categories specified by parent id
  * store_id `string`: Counts category specified by store id
  * lang_id `string`: Counts category specified by language id

#### Output
* output `object`
  * result `object`
    * categories_count `integer`
  * return_code `integer`
  * return_message `string`

### CategoryDelete
Delete category in store


```js
api2cart.CategoryDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Defines category removal, specified by category id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### CategoryFind
Search category in store. "Laptop" is specified here by default.


```js
api2cart.CategoryFind({
  "find_value": ""
}, context)
```

#### Input
* input `object`
  * find_value **required** `string`: Entity search that is specified by some value
  * find_where `string`: Entity search that is specified by the comma-separated unique fields
  * find_params `string`: Entity search that is specified by comma-separated parameters

#### Output
* output `object`
  * result `object`
    * category `array`
      * items `object`
        * description `string`
        * id `string`
        * name `string`
  * return_code `integer`
  * return_message `string`

### CategoryImageAdd
Add image to category


```js
api2cart.CategoryImageAdd({
  "category_id": "",
  "image_name": "",
  "url": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: Defines category id where the image should be added
  * image_name **required** `string`: Defines image's name
  * url **required** `string`: Defines URL of the image that has to be added
  * label `string`: Defines alternative text that has to be attached to the picture
  * mime `string`: Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
  * type **required** `string` (values: base, thumbnail): Defines image's types that are specified by comma-separated list
  * position `integer`: Defines image’s position in the list
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * image_path `string`
  * return_code `integer`
  * return_message `string`

### CategoryImageDelete
Delete image


```js
api2cart.CategoryImageDelete({
  "category_id": "",
  "image_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: Defines category id where the image should be deleted
  * image_id **required** `string`: Define image id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### CategoryInfo
Get category info about category ID*** or specify other category ID.


```js
api2cart.CategoryInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Retrieves category's info specified by category id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Retrieves category info  specified by store id
  * lang_id `string`: Retrieves category info  specified by language id

#### Output
* output `object`
  * result [Category](#category)
  * return_code `integer`
  * return_message `string`

### CategoryList
Get list of categories from store. Returns 4 categories by default.


```js
api2cart.CategoryList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * parent_id `string`: Retrieves categories specified by parent id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Retrieves categories specified by store id
  * lang_id `string`: Retrieves categorys specified by language id

#### Output
* output [Model_Response_Category_List](#model_response_category_list)

### CategoryUnassign
Unassign category to product


```js
api2cart.CategoryUnassign({
  "category_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: Defines category unassign, specified by category id
  * product_id **required** `string`: Defines category unassign to the product, specified by product id

#### Output
* output `object`
  * result `object`
  * return_code `integer`
  * return_message `string`

### CategoryUpdate
Update category in store


```js
api2cart.CategoryUpdate({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Defines category update specified by category id
  * name `string`: Defines new category’s name
  * parent_id `string`: Defines new parent category id
  * stores_ids `string`: Update category in the stores that is specified by comma-separated stores' id
  * avail `boolean`: Defines category's visibility status
  * sort_order `integer`: Sort number in the list
  * modified_time `string`: Entity's date modification
  * description `string`: Defines new category's description
  * meta_title `string`: Defines unique meta title for each entity
  * meta_description `string`: Defines unique meta description of a entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * seo_url `string`: Defines unique category's URL for SEO
  * lang_id `string`: Language id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### CustomerAdd
Add customer into store.


```js
api2cart.CustomerAdd({
  "body": {
    "email": "",
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CustomerAdd](#customeradd)

#### Output
* output `object`
  * result `object`
    * customer_id `string`
  * return_code `integer`
  * return_message `string`

### CustomerAttributeList
Get attributes for specific customer


```js
api2cart.CustomerAttributeList({
  "customer_id": ""
}, context)
```

#### Input
* input `object`
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * customer_id **required** `string`: Retrieves orders specified by customer id
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Customer_Attribute_List](#model_response_customer_attribute_list)

### CustomerCount
Get number of customers from store.


```js
api2cart.CustomerCount({}, context)
```

#### Input
* input `object`
  * group_id `string`: Customer group_id
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * store_id `string`: Counts customer specified by store id
  * customer_list_id `string`: The numeric ID of the customer list in Demandware.

#### Output
* output `object`
  * result `object`
    * customers_count `integer`
  * return_code `integer`
  * return_message `string`

### CustomerFind
Find customers in store.


```js
api2cart.CustomerFind({
  "find_value": ""
}, context)
```

#### Input
* input `object`
  * find_value **required** `string`: Entity search that is specified by some value
  * find_where `string`: Entity search that is specified by the comma-separated unique fields
  * find_params `string`: Entity search that is specified by comma-separated parameters
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * email `string`
    * first_name `string`
    * id `string`
    * last_name `string`
  * return_code `integer`
  * return_message `string`

### CustomerGroupAdd
Create customer group.


```js
api2cart.CustomerGroupAdd({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Customer group name
  * store_id `string`: Store Id
  * stores_ids `string`: Assign customer group to the stores that is specified by comma-separated stores' id

#### Output
* output `object`
  * result `object`
    * items [Customer_Group](#customer_group)
  * return_code `integer`
  * return_message `string`

### CustomerGroupList
Get list of customers groups.


```js
api2cart.CustomerGroupList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * group_ids `string`: Groups that will be assigned to a customer
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Customer_Group_List](#model_response_customer_group_list)

### CustomerInfo
Get customers' details from store.


```js
api2cart.CustomerInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Retrieves customer's info specified by customer id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Retrieves customer info specified by store id

#### Output
* output `object`
  * result [Customer](#customer)
  * return_code `integer`
  * return_message `string`

### CustomerList
Get list of customers from store.


```js
api2cart.CustomerList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * group_id `string`: Customer group_id
  * store_id `string`: Retrieves customers specified by store id
  * customer_list_id `string`: The numeric ID of the customer list in Demandware.

#### Output
* output [Model_Response_Customer_List](#model_response_customer_list)

### OrderAbandonedList
Get list of orders that were left by customers before completing the order.


```js
api2cart.OrderAbandonedList({}, context)
```

#### Input
* input `object`
  * customer_id `string`: Retrieves orders specified by customer id
  * customer_email `string`: Retrieves orders specified by customer email
  * created_to `string`: Retrieve entities to their creation date
  * created_from `string`: Retrieve entities from their creation date
  * modified_to `string`: Retrieve entities to their modification date
  * modified_from `string`: Retrieve entities from their modification date
  * skip_empty_email `boolean`: Filter empty emails
  * store_id `string`: Store Id
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * start `integer`: This parameter sets the number from which you want to get entities
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Order_Abandoned_List](#model_response_order_abandoned_list)

### OrderAdd
Add a new order to the cart.


```js
api2cart.OrderAdd({
  "body": {
    "order_status": "",
    "customer_email": "",
    "bill_first_name": "",
    "bill_last_name": "",
    "bill_address_1": "",
    "bill_city": "",
    "bill_postcode": "",
    "bill_state": "",
    "bill_country": "",
    "order_item": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [OrderAdd](#orderadd)

#### Output
* output `object`
  * result `object`
    * order_id `string`
  * return_code `integer`
  * return_message `string`

### OrderCount
Count orders in store


```js
api2cart.OrderCount({}, context)
```

#### Input
* input `object`
  * customer_id `string`: Counts orders quantity specified by customer id
  * customer_email `string`: Counts orders quantity specified by customer email
  * order_status `string`: Counts orders quantity specified by order status
  * created_to `string`: Retrieve entities to their creation date
  * created_from `string`: Retrieve entities from their creation date
  * modified_to `string`: Retrieve entities to their modification date
  * modified_from `string`: Retrieve entities from their modification date
  * store_id `string`: Counts orders quantity specified by store id
  * ids `string`: Counts orders specified by ids
  * order_ids `string`: Counts orders specified by order ids
  * ebay_order_status `string`: Counts orders quantity specified by order status
  * financial_status `string`: Counts orders quantity specified by financial status
  * fulfillment_status `string`: Create order with fulfillment status
  * shipping_method `string`: Retrieve entities according to shipping method

#### Output
* output `object`
  * result `object`
    * orders_count `integer`
  * return_code `integer`
  * return_message `string`

### OrderFinancialStatusList
Retrieve list of financial statuses


```js
api2cart.OrderFinancialStatusList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * order_financial_statuses `array`
      * items `object`
        * id `string`
        * name `string`
  * return_code `integer`
  * return_message `string`

### OrderFind
Find orders


```js
api2cart.OrderFind({}, context)
```

#### Input
* input `object`
  * customer_id `string`: Retrieves orders specified by customer id
  * customer_email `string`: Retrieves orders specified by customer email
  * order_status `string`: Retrieves orders specified by order status
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * created_to `string`: Retrieve entities to their creation date
  * created_from `string`: Retrieve entities from their creation date
  * modified_to `string`: Retrieve entities to their modification date
  * modified_from `string`: Retrieve entities from their modification date
  * financial_status `string`: Retrieves orders specified by financial status

#### Output
* output `object`
  * result `object`
    * order `array`
      * items [Order](#order)
  * return_code `integer`
  * return_message `string`

### OrderInfo
Info about a specific order by ID


```js
api2cart.OrderInfo({}, context)
```

#### Input
* input `object`
  * order_id `string`: Retrieves order’s info specified by order id
  * id `string`: Retrieves order info specified by id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Defines store id where the order should be found
  * enable_cache `boolean`: If the value is 'true' and order exist in our cache, we will return order.info response from cache

#### Output
* output `object`
  * result [Order](#order)
  * return_code `integer`
  * return_message `string`

### OrderList
Get list of orders from store. Returns 4 orders by default.


```js
api2cart.OrderList({}, context)
```

#### Input
* input `object`
  * customer_id `string`: Retrieves orders specified by customer id
  * customer_email `string`: Retrieves orders specified by customer email
  * phone `string`: Filter orders by customer's phone number
  * order_status `string`: Retrieves orders specified by order status
  * order_status_ids `array`: Retrieves orders specified by order statuses
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * page_cursor `string`: Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter)
  * sort_by `string`: Set field to sort by
  * sort_direction `string`: Set sorting direction
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * created_to `string`: Retrieve entities to their creation date
  * created_from `string`: Retrieve entities from their creation date
  * modified_to `string`: Retrieve entities to their modification date
  * modified_from `string`: Retrieve entities from their modification date
  * store_id `string`: Store Id
  * ids `string`: Retrieves orders specified by ids
  * order_ids `string`: Retrieves orders specified by order ids
  * ebay_order_status `string`: Retrieves orders specified by order status
  * basket_id `string`: Retrieves order’s info specified by basket id.
  * financial_status `string`: Retrieves orders specified by financial status
  * fulfillment_status `string`: Create order with fulfillment status
  * shipping_method `string`: Retrieve entities according to shipping method
  * skip_order_ids `string`: Skipped orders by ids
  * since_id `integer`: Retrieve entities starting from the specified id.
  * is_deleted `boolean`: Filter deleted orders
  * shipping_country_iso3 `string`: Retrieve entities according to shipping country
  * enable_cache `boolean`: If the value is 'true', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)

#### Output
* output [Model_Response_Order_List](#model_response_order_list)

### OrderRefundAdd
Add a refund to the order.


```js
api2cart.OrderRefundAdd({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [OrderRefundAdd](#orderrefundadd)

#### Output
* output `object`
  * result `object`
    * refund_id `string`
  * return_code `integer`
  * return_message `string`

### OrderShipmentAdd
Add a shipment to the order.


```js
api2cart.OrderShipmentAdd({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [OrderShipmentAdd](#ordershipmentadd)

#### Output
* output `object`
  * result `object`
    * shipment_id `string`
  * return_code `integer`
  * return_message `string`

### OrderShipmentList
Get list of shipments by orders.


```js
api2cart.OrderShipmentList({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`: Retrieves shipments specified by order id
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * store_id `string`: Store Id

#### Output
* output [Model_Response_Order_Shipment_List](#model_response_order_shipment_list)

### OrderShipmentTrackingAdd
Add order shipment's tracking info.


```js
api2cart.OrderShipmentTrackingAdd({
  "body": {
    "shipment_id": "",
    "tracking_number": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [OrderShipmentTrackingAdd](#ordershipmenttrackingadd)

#### Output
* output `object`
  * result `object`
    * tracking_id `string`
  * return_code `integer`
  * return_message `string`

### OrderShipmentUpdate
Update order's shipment information.


```js
api2cart.OrderShipmentUpdate({
  "body": {
    "shipment_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [OrderShipmentUpdate](#ordershipmentupdate)

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### OrderStatusList
Retrieve list of statuses


```js
api2cart.OrderStatusList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * cart_order_statuses `array`
      * items `object`
        * id `string`
        * name `string`
  * return_code `integer`
  * return_message `string`

### OrderUpdate
Update existing order.


```js
api2cart.OrderUpdate({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`: Defines the orders specified by order id
  * store_id `string`: Defines store id where the order should be found
  * order_status `string`: Defines new order's status
  * comment `string`: Specifies order comment
  * admin_comment `string`: Specifies admin's order comment
  * admin_private_comment `string`: Specifies private admin's order comment
  * date_modified `string`: Specifies order's  modification date
  * date_finished `string`: Specifies order's  finished date
  * financial_status `string`: Update order financial status to specified
  * order_payment_method `string`: Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'
  * send_notifications `boolean`: Send notifications to customer after order was created

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductAdd
Add new product to store.


```js
api2cart.ProductAdd({
  "body": {
    "name": "",
    "model": "",
    "description": "",
    "price": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ProductAdd](#productadd)

#### Output
* output `object`
  * result `object`
    * product_id `string`
  * return_code `integer`
  * return_message `string`

### ProductAttributeList
Get list of attributes and values.


```js
api2cart.ProductAttributeList({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * product_id **required** `string`: Retrieves attributes specified by product id
  * variant_id `string`: Defines product's variants specified by variant id
  * attribute_id `string`: Retrieves info for specified attribute_id
  * attribute_group_id `string`: Filter by attribute_group_id
  * set_name `string`: Retrieves attributes specified by set_name in Magento
  * lang_id `string`: Retrieves attributes specified by language id
  * store_id `string`: Retrieves attributes specified by store id
  * sort_by `string`: Set field to sort by
  * sort_direction `string`: Set sorting direction
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output [Model_Response_Product_Attribute_List](#model_response_product_attribute_list)

### ProductAttributeValueSet
Set attribute value to product.


```js
api2cart.ProductAttributeValueSet({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines product id where the attribute should be added
  * attribute_id `string`: Filter by attribute_id
  * attribute_group_id `string`: Filter by attribute_group_id
  * attribute_name `string`: Define attribute name
  * value `string`: Define attribute value
  * value_id `integer`: Define attribute value id
  * lang_id `string`: Language id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * attribute_id `string`
    * product_id `string`
    * value_id `string`
  * return_code `integer`
  * return_message `string`

### ProductAttributeValueUnset
Removes attribute value for a product.


```js
api2cart.ProductAttributeValueUnset({
  "product_id": "",
  "attribute_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Product id
  * attribute_id **required** `string`: Attribute Id
  * store_id `string`: Store Id
  * include_default `boolean`: Boolean, whether or not to unset default value of the attribute, if applicable
  * reindex `boolean`: Is reindex required
  * clear_cache `boolean`: Is cache clear required

#### Output
* output `object`
  * result `object`
    * success `string`
  * return_code `integer`
  * return_message `string`

### ProductBrandList
Get list of brands from your store.


```js
api2cart.ProductBrandList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * brand_ids `string`: Retrieves brands specified by brand ids
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date

#### Output
* output `object`
  * result `object`
    * product `array`
      * items [Brand](#brand)
  * return_code `integer`
  * return_message `string`

### ProductChildItemFind
Search product child item (bundled item or configurable product variant) in store catalog.


```js
api2cart.ProductChildItemFind({
  "find_value": ""
}, context)
```

#### Input
* input `object`
  * find_value **required** `string`: Entity search that is specified by some value
  * find_where `string`: Entity search that is specified by the comma-separated unique fields
  * find_params `string`: Entity search that is specified by comma-separated parameters
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * children
      * items [Child](#child)
  * return_code `integer`
  * return_message `string`

### ProductChildItemInfo
Get child for specific product.


```js
api2cart.ProductChildItemInfo({
  "product_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * product_id **required** `string`: Filter by parent product id
  * id **required** `string`: Entity id
  * store_id `string`: Store Id
  * lang_id `string`: Language id

#### Output
* output `object`
  * result [Child](#child)
  * return_code `integer`
  * return_message `string`

### ProductChildItemList
Get child items list of specific product(s).


```js
api2cart.ProductChildItemList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve products child items via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * product_id `string`: Filter by parent product id
  * product_ids `string`: Filter by parent product ids
  * store_id `string`: Store Id
  * lang_id `string`: Language id
  * currency_id `string`: Currency Id
  * avail_sale `boolean`: Specifies the set of available/not available products for sale
  * report_request_id `string`: Report request id
  * disable_report_cache `boolean`: Disable report cache for current request

#### Output
* output [Model_Response_Product_ChildItem_List](#model_response_product_childitem_list)

### ProductCount
Count products in store.


```js
api2cart.ProductCount({}, context)
```

#### Input
* input `object`
  * category_id `string`: Counts products specified by category id
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * avail_view `boolean`: Specifies the set of visible/invisible products
  * avail_sale `boolean`: Specifies the set of available/not available products for sale
  * store_id `string`: Counts products specified by store id
  * lang_id `string`: Counts products specified by language id
  * product_ids `string`: Counts products specified by product ids
  * report_request_id `string`: Report request id
  * disable_report_cache `boolean`: Disable report cache for current request
  * brand_name `string`: Retrieves brands specified by brand name
  * product_attributes `array`: Defines product attributes

#### Output
* output `object`
  * result `object`
    * products_count `integer`
  * return_code `integer`
  * return_message `string`

### ProductCurrencyAdd
Add currency and/or set default in store


```js
api2cart.ProductCurrencyAdd({
  "iso3": "",
  "rate": 0
}, context)
```

#### Input
* input `object`
  * iso3 **required** `string`: Specifies standardized currency code
  * rate **required** `number`: Defines the numerical identifier against to the major currency
  * name `string`: Defines currency's name
  * avail `boolean`: Specifies whether the currency is available
  * symbol_left `string`: Defines the symbol that is located before the currency
  * symbol_right `string`: Defines the symbol that is located after the currency
  * default `boolean`: Specifies currency's default meaning

#### Output
* output `object`
  * result `object`
    * currency_id `string`
  * return_code `integer`
  * return_message `string`

### ProductCurrencyList
Get list of currencies


```js
api2cart.ProductCurrencyList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * default `boolean`: Specifies the set of default/not default currencies
  * avail `boolean`: Specifies the set of available/not available currencies

#### Output
* output `object`
  * result `object`
    * currency `array`
      * items [Currency](#currency)
  * return_code `integer`
  * return_message `string`

### ProductDelete
Product delete


```js
api2cart.ProductDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Product id that will be removed

#### Output
* output `object`
  * result `object`
    * delete_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductFields
Retrieve all available fields for product item in store.


```js
api2cart.ProductFields(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
  * return_code `integer`
  * return_message `string`

### ProductFind
Search product in store catalog. "Apple" is specified here by default.


```js
api2cart.ProductFind({
  "find_value": ""
}, context)
```

#### Input
* input `object`
  * find_value **required** `string`: Entity search that is specified by some value
  * find_where `string`: Entity search that is specified by the comma-separated unique fields
  * find_params `string`: Entity search that is specified by comma-separated parameters
  * find_what `string`: Parameter's value specifies the entity that has to be found
  * lang_id `string`: Search products specified by language id

#### Output
* output `object`
  * result `object`
    * product `array`
      * items `object`
        * description `string`
        * id `string`
        * name `string`
        * price `number`
  * return_code `integer`
  * return_message `string`

### ProductImageAdd
Add image to product


```js
api2cart.ProductImageAdd({
  "product_id": "",
  "image_name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines product id where the image should be added
  * image_name **required** `string`: Defines image's name
  * type **required** `string` (values: small, base, additional, thumbnail): Defines image's types that are specified by comma-separated list
  * url `string`: Defines URL of the image that has to be added
  * label `string`: Defines alternative text that has to be attached to the picture
  * mime `string`: Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
  * position `integer`: Defines image’s position in the list
  * content `string`: Content(body) encoded in base64 of image file
  * product_variant_id `integer`: Defines product's variants specified by variant id
  * variant_ids `string`: Defines product's variants ids
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * id `string`
    * image_path `string`
  * return_code `integer`
  * return_message `string`

### ProductImageDelete
Delete image


```js
api2cart.ProductImageDelete({
  "product_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines product id where the image should be deleted
  * id **required** `string`: Entity id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### ProductImageUpdate
Update details of image


```js
api2cart.ProductImageUpdate({
  "product_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines product id where the image should be updated
  * image_name `string`: Defines image's name
  * type `string`: Defines image's types that are specified by comma-separated list
  * label `string`: Defines alternative text that has to be attached to the picture
  * position `integer`: Defines image’s position in the list
  * id **required** `string`: Defines image update specified by image id
  * store_id `string`: Store Id
  * hidden `boolean`: Define is hide image

#### Output
* output `object`
  * result `object`
    * updated `string`
  * return_code `integer`
  * return_message `string`

### ProductInfo
Get product info about product ID *** or specify other product ID.


```js
api2cart.ProductInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Retrieves product's info specified by product id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * store_id `string`: Retrieves product info specified by store id
  * lang_id `string`: Retrieves product info specified by language id
  * currency_id `string`: Currency Id
  * product_variant_params `string`: Set this parameter in order to choose which product variants fields you want to retrieve
  * report_request_id `string`: Report request id
  * disable_report_cache `boolean`: Disable report cache for current request

#### Output
* output `object`
  * result [Product](#product)
  * return_code `integer`
  * return_message `string`

### ProductList
Get list of products from your store. Returns 10 products by default.


```js
api2cart.ProductList({}, context)
```

#### Input
* input `object`
  * page_cursor `string`: Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter)
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * category_id `string`: Retrieves products specified by category id
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * avail_view `boolean`: Specifies the set of visible/invisible products
  * avail_sale `boolean`: Specifies the set of available/not available products for sale
  * store_id `string`: Retrieves products specified by store id
  * lang_id `string`: Retrieves products specified by language id
  * currency_id `string`: Currency Id
  * product_ids `string`: Retrieves products specified by product ids
  * product_variant_params `string`: Set this parameter in order to choose which product variants fields you want to retrieve
  * since_id `integer`: Retrieve entities starting from the specified id.
  * report_request_id `string`: Report request id
  * disable_report_cache `boolean`: Disable report cache for current request
  * sort_by `string`: Set field to sort by
  * sort_direction `string`: Set sorting direction
  * sku `string`: Filter by product's sku
  * disable_cache `boolean`: Disable cache for current request
  * brand_name `string`: Retrieves brands specified by brand name
  * product_attributes `array`: Defines product attributes

#### Output
* output [Model_Response_Product_List](#model_response_product_list)

### ProductManufacturerAdd
Add manufacturer to store and assign to product


```js
api2cart.ProductManufacturerAdd({
  "product_id": "",
  "manufacturer": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines products specified by product id
  * manufacturer **required** `string`: Defines product’s manufacturer's name

#### Output
* output `object`
  * result `object`
    * manufacturer_id `string`
  * return_code `integer`
  * return_message `string`

### ProductOptionAdd
Add product option from store.


```js
api2cart.ProductOptionAdd({
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Defines option's name
  * type **required** `string` (values: option_type_select, option_type_text, option_type_radio, option_type_checkbox, option_type_textarea, option_type_readonly, option_type_multiselect, option_type_multicheckbox, option_type_file, option_type_date, option_type_datetime, option_type_time): Defines option's type that has to be added
  * product_id `string`: Defines product id where the option should be added
  * option_values `string`: Defines option values that has to be added in Magento
  * description `string`: Defines option's description
  * avail `boolean`: Defines whether the option is available
  * sort_order `integer`: Sort number in the list
  * required `boolean`: Defines if the option is required

#### Output
* output `object`
  * result `object`
    * option_id `string`
    * product_option_id `string`
  * return_code `integer`
  * return_message `string`

### ProductOptionAssign
Assign option from product.


```js
api2cart.ProductOptionAssign({
  "product_id": "",
  "option_id": 0
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines product id where the option should be assigned
  * option_id **required** `integer`: Defines option id which has to be assigned

#### Output
* output `object`
  * result `object`
    * product_option_id `string`
  * return_code `integer`
  * return_message `string`

### ProductOptionList
Get list of options.


```js
api2cart.ProductOptionList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * product_id `string`: Retrieves products' options specified by product id
  * lang_id `string`: Language id
  * store_id `string`: Store Id

#### Output
* output `object`
  * result `object`
    * option `array`
      * items [Product_Option](#product_option)
  * return_code `integer`
  * return_message `string`

### ProductOptionValueAdd
Add product option item from option.


```js
api2cart.ProductOptionValueAdd({
  "option_id": 0,
  "option_value": ""
}, context)
```

#### Input
* input `object`
  * option_id **required** `integer`: Defines option id where the value has to be added
  * option_value **required** `string`: Defines option value that has to be added
  * sort_order `integer`: Sort number in the list

#### Output
* output `object`
  * result `object`
    * option_value_id `string`
  * return_code `integer`
  * return_message `string`

### ProductOptionValueAssign
Assign product option item from product.


```js
api2cart.ProductOptionValueAssign({
  "product_option_id": 0,
  "option_value_id": 0
}, context)
```

#### Input
* input `object`
  * product_option_id **required** `integer`: Defines product's option id where the value has to be assigned
  * option_value_id **required** `integer`: Defines value id that has to be assigned

#### Output
* output `object`
  * result `object`
    * product_option_value_id `string`
  * return_code `integer`
  * return_message `string`

### ProductOptionValueUpdate
Update product option item from option.


```js
api2cart.ProductOptionValueUpdate({
  "option_value_id": 0
}, context)
```

#### Input
* input `object`
  * option_value_id **required** `integer`: Defines value id that has to be assigned
  * price `number`: Defines new product option price
  * quantity `number`: Defines new products' options quantity

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductPriceAdd
Add some prices to the product.


```js
api2cart.ProductPriceAdd({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProductPriceAdd](#productpriceadd)

#### Output
* output `object`
  * result `object`
    * status `string`
  * return_code `integer`
  * return_message `string`

### ProductPriceDelete
Delete some prices of the product


```js
api2cart.ProductPriceDelete({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines the product where the price has to be deleted
  * group_prices `string`: Defines product's group prices

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### ProductPriceUpdate
Update some prices of the product.


```js
api2cart.ProductPriceUpdate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProductPriceUpdate](#productpriceupdate)

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductReviewList
Get reviews of a specific product.


```js
api2cart.ProductReviewList({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * product_id **required** `string`: Product id
  * ids `string`: Retrieves reviews specified by ids
  * store_id `string`: Store Id
  * status `string`: Defines status
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result `object`
    * reviews `array`
      * items [Product_Review](#product_review)
    * total_count `integer`
  * return_code `integer`
  * return_message `string`

### ProductStoreAssign
Assign product to store


```js
api2cart.ProductStoreAssign({
  "product_id": "",
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`: Defines id of the product which should be assigned to a store
  * store_id **required** `string`: Defines id of the store product should be assigned to

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductTaxAdd
Add tax class and tax rate to store and assign to product.


```js
api2cart.ProductTaxAdd({
  "body": {
    "name": "",
    "tax_rates": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ProductTaxAdd](#producttaxadd)

#### Output
* output `object`
  * result `object`
    * tax_class_id `string`
  * return_code `integer`
  * return_message `string`

### ProductUpdate
Update price and quantity for a specific product


```js
api2cart.ProductUpdate({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Defines product id that has to be updated
  * model `string`: Defines product model that has to be updated
  * old_price `number`: Defines product's old price
  * price `number`: Defines new product's price
  * special_price `number`: Defines new product's special price
  * sprice_create `string`: Defines the date of special price creation
  * sprice_expire `string`: Defines the term of special price offer duration
  * cost_price `number`: Defines new product's cost price
  * retail_price `number`: Defines new product's retail price
  * quantity `number`: Defines new product's quantity
  * weight `number`: Weight
  * increase_quantity `number`: Defines the incremental changes in product quantity
  * reduce_quantity `number`: Defines the decrement changes in product quantity
  * warehouse_id `string`: This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
  * reserve_quantity `number`: This parameter allows to reserve/unreserve product quantity.
  * manage_stock `boolean`: Defines inventory tracking for product
  * backorder_status `string`: Set backorder status
  * name `string`: Defines product's name that has to be updated
  * sku `string`: Defines new product's sku
  * visible `string`: Set visibility status
  * manufacturer `string`: Defines product's manufacturer
  * manufacturer_id `string`: Defines product's manufacturer by manufacturer_id
  * description `string`: Defines new product's description
  * short_description `string`: Defines short description
  * meta_title `string`: Defines unique meta title for each entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * meta_description `string`: Defines unique meta description of a entity
  * store_id `string`: Defines store id where the product should be found
  * lang_id `string`: Language id
  * in_stock `boolean`: Set stock status
  * status `string`: Defines product's status
  * seo_url `string`: Defines unique URL for SEO
  * report_request_id `string`: Report request id
  * disable_report_cache `boolean`: Disable report cache for current request
  * reindex `boolean`: Is reindex required
  * tags `string`: Product tags
  * clear_cache `boolean`: Is cache clear required
  * gtin `string`: Global Trade Item Number. An GTIN is an identifier for trade items.
  * taxable `boolean`: Specifies whether a tax is charged

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductVariantAdd
Add variant to product.


```js
api2cart.ProductVariantAdd({
  "body": {
    "model": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ProductVariantAdd](#productvariantadd)

#### Output
* output `object`
  * result `object`
    * product_variant_id `string`
  * return_code `integer`
  * return_message `string`

### ProductVariantCount
Get count variants.


```js
api2cart.ProductVariantCount({}, context)
```

#### Input
* input `object`
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * category_id `string`: Counts products’ variants specified by category id
  * product_id `string`: Retrieves products' variants specified by product id
  * store_id `string`: Retrieves variants specified by store id

#### Output
* output `object`
  * result `object`
    * variants_count `string`
  * return_code `integer`
  * return_message `string`

### ProductVariantDelete
Delete variant.


```js
api2cart.ProductVariantDelete({
  "id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Defines variant removal, specified by variant id
  * product_id **required** `string`: Defines product's id where the variant has to be deleted

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### ProductVariantInfo
Get variant info.


```js
api2cart.ProductVariantInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * id **required** `string`: Retrieves variant's info specified by variant id
  * store_id `string`: Retrieves variant info specified by store id

#### Output
* output `object`
  * result [Product](#product)
  * return_code `integer`
  * return_message `string`

### ProductVariantList
Get list variants.


```js
api2cart.ProductVariantList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  * created_from `string`: Retrieve entities from their creation date
  * created_to `string`: Retrieve entities to their creation date
  * modified_from `string`: Retrieve entities from their modification date
  * modified_to `string`: Retrieve entities to their modification date
  * category_id `string`: Retrieves products’ variants specified by category id
  * product_id `string`: Retrieves products' variants specified by product id
  * store_id `string`: Retrieves variants specified by store id

#### Output
* output `object`
  * result `object`
    * variant `array`
      * items [Product](#product)
  * return_code `integer`
  * return_message `string`

### ProductVariantPriceAdd
Add some prices to the product variant.


```js
api2cart.ProductVariantPriceAdd({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProductVariantPriceAdd](#productvariantpriceadd)

#### Output
* output `object`
  * result `object`
    * status `string`
  * return_code `integer`
  * return_message `string`

### ProductVariantPriceDelete
Delete some prices of the product variant.


```js
api2cart.ProductVariantPriceDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Defines the variant where the price has to be deleted
  * group_prices `string`: Defines variants's group prices

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### ProductVariantPriceUpdate
Update some prices of the product variant.


```js
api2cart.ProductVariantPriceUpdate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProductVariantPriceUpdate](#productvariantpriceupdate)

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### ProductVariantUpdate
Update variant.


```js
api2cart.ProductVariantUpdate({
  "id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * store_id `string`: Defines store id where the variant should be found
  * id **required** `string`: Defines variant update specified by variant id
  * product_id **required** `string`: Defines product's id where the variant has to be updated
  * warehouse_id `string`: This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
  * reserve_quantity `number`: This parameter allows to reserve/unreserve product variants quantity.
  * quantity `number`: Defines new products' variants quantity
  * increase_quantity `number`: Defines the incremental changes in product quantity
  * reduce_quantity `number`: Defines the decrement changes in product quantity
  * price `number`: Defines new product's variant price
  * special_price `number`: Defines new product's variant special price
  * old_price `number`: Defines product's old price
  * cost_price `number`: Defines new product's cost price
  * sprice_create `string`: Defines the date of special price creation
  * sprice_expire `string`: Defines the term of special price offer duration
  * manage_stock `boolean`: Defines inventory tracking for product variant
  * in_stock `boolean`: Set stock status
  * name `string`: Defines variant's name that has to be updated
  * description `string`: Specifies variant's description
  * sku `string`: Defines new product's variant sku
  * meta_title `string`: Defines unique meta title for each entity
  * meta_description `string`: Defines unique meta description of a entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * short_description `string`: Defines short description
  * visible `string`: Set visibility status
  * status `string`: Defines product variant's status
  * backorder_status `string`: Set backorder status
  * weight `number`: Weight
  * barcode `string`: A barcode is a unique code composed of numbers used as a product identifier.
  * reindex `boolean`: Is reindex required
  * taxable `boolean`: Specifies whether a tax is charged
  * options `array`: Defines variant's options list

#### Output
* output `object`
  * result `object`
    * updated_items `integer`
  * return_code `integer`
  * return_message `string`

### SubscriberList
Get subscribers list


```js
api2cart.SubscriberList({}, context)
```

#### Input
* input `object`
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * subscribed `boolean`: Filter by subscription status
  * store_id `string`: Store Id
  * email `string`: Filter subscribers by email
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result `object`
    * subscribers `array`
      * items [Subscriber](#subscriber)
    * total_count `integer`
  * return_code `integer`
  * return_message `string`

### TaxClassInfo
Get info about tax


```js
api2cart.TaxClassInfo({
  "tax_class_id": ""
}, context)
```

#### Input
* input `object`
  * tax_class_id **required** `string`: Retrieves taxes specified by class id
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * exclude `string`: Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

#### Output
* output `object`
  * result [TaxClass](#taxclass)
  * return_code `integer`
  * return_message `string`

### WebhookCount
Count registered webhooks on the store.


```js
api2cart.WebhookCount({}, context)
```

#### Input
* input `object`
  * entity `string`: The entity you want to filter webhooks by (e.g. order or product)
  * action `string`: The action you want to filter webhooks by (e.g. order or product)
  * active `boolean`: The webhook status you want to filter webhooks by

#### Output
* output `object`
  * result `object`
    * webhook_count `integer`
  * return_code `integer`
  * return_message `string`

### WebhookCreate
Create webhook on the store and subscribe to it.


```js
api2cart.WebhookCreate({
  "entity": "",
  "action": "",
  "callback": ""
}, context)
```

#### Input
* input `object`
  * entity **required** `string`: Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
  * action **required** `string`: Specify what action (event) will trigger the webhook (e.g add, delete, or update)
  * callback **required** `string`: Callback where the webhook should send the POST request when the event occurs
  * label `string`: The name you give to the webhook
  * fields `string`: Fields the webhook should send
  * active `boolean`: Webhook status
  * store_id `string`: Defines store id where the webhook should be assigned

#### Output
* output `object`
  * result `object`
    * id `string`
  * return_code `integer`
  * return_message `string`

### WebhookDelete
Delete registered webhook on the store.


```js
api2cart.WebhookDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Webhook id

#### Output
* output `object`
  * result `object`
    * deleted `string`
  * return_code `integer`
  * return_message `string`

### WebhookEvents
List all Webhooks that are available on this store.


```js
api2cart.WebhookEvents(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `object`
    * events `array`
      * items `object`
        * action `string`
        * entity `string`
        * webhook_name `string`
  * return_code `integer`
  * return_message `string`

### WebhookList
List registered webhook on the store.


```js
api2cart.WebhookList({}, context)
```

#### Input
* input `object`
  * params `string`: Set this parameter in order to choose which entity fields you want to retrieve
  * start `integer`: This parameter sets the number from which you want to get entities
  * count `integer`: This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  * entity `string`: The entity you want to filter webhooks by (e.g. order or product)
  * action `string`: The action you want to filter webhooks by (e.g. add, update, or delete)
  * active `boolean`: The webhook status you want to filter webhooks by
  * ids `string`: List of сomma-separated webhook ids

#### Output
* output `object`
  * result `object`
    * webhook `array`
      * items [Webhook](#webhook)
  * return_code `integer`
  * return_message `string`

### WebhookUpdate
Update Webhooks parameters.


```js
api2cart.WebhookUpdate({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Webhook id
  * callback `string`: Callback where the webhook should send the POST request when the event occurs
  * label `string`: The name you give to the webhook
  * fields `string`: Fields the webhook should send
  * active `boolean`: Webhook status

#### Output
* output `object`
  * result `object`
    * updated `string`
  * return_code `integer`
  * return_message `string`



## Definitions

### A2CDateTime
* A2CDateTime `object`
  * additional_fields `object`
  * custom_fields `object`
  * format `string`
  * value `string`

### AccountCartAdd
* AccountCartAdd `object`
  * 3dcartapi_api_key `string`: 3DCart API Key
  * amazon_access_key_id `string`: Amazon Secret Key Id
  * amazon_access_token `string`: MWS Auth Token. Access token authorizing the app to access resources on behalf of a user
  * amazon_marketplaces_ids `string`: Amazon Marketplace IDs comma separated string
  * amazon_secret_key `string`: Amazon Secret Key
  * amazon_seller_id `string`: Amazon Seller ID
  * aspdotnetstorefront_api_pass `string`: AspDotNetStorefront API Password
  * aspdotnetstorefront_api_user `string`: It's a AspDotNetStorefront account for which API is available
  * bigcommerceapi_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * bigcommerceapi_admin_account `string`: It's a BigCommerce account for which API is enabled
  * bigcommerceapi_api_key `string`: Bigcommerce API Key
  * bigcommerceapi_api_path `string`: BigCommerce API URL
  * bigcommerceapi_client_id `string`: Client ID of the requesting app
  * bigcommerceapi_context `string`: API Path section unique to the store
  * bridge_url `string`: This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
  * cart_id **required** `string` (values: 3DCartApi, AceShop, Amazon, AspDotNetStorefront, BigcommerceApi, Creloaded, Cscart, Cubecart, Demandware, EBay, Ecwid, Etsy, Gambio, Interspire, JooCart, Magento1212, MijoShop, Neto, Opencart14, LightSpeed, Oscmax2, Oscommerce22ms2, Oxid, Pinnacle, Prestashop, SSPremium, Shopify, Squarespace, Shopware, Tomatocart, Ubercart, Virtuemart, Volusion, WPecommerce, Walmart, WebAsyst, Woocommerce, Xcart, Xtcommerce, XtcommerceVeyton, Zencart137): Store’s identifier which you can get from cart_list method
  * db_tables_prefix `string`: This parameter is deprecated for this method. Please, use this parameter in method account.config.update
  * demandware_api_password `string`: Demandware api password
  * demandware_client_id `string`: Demandware client id
  * demandware_env_type `string`: Demandware environment
  * demandware_user_name `string`: Demandware user name
  * demandware_user_password `string`: Demandware user password
  * ebay_access_token `string`: Used to authenticate API requests.
  * ebay_client_id `string`: Application ID (AppID).
  * ebay_client_secret `string`: Shared Secret from eBay application
  * ebay_environment `string`: eBay environment
  * ebay_refresh_token `string`: Used to renew the access token.
  * ebay_runame `string`: The RuName value that eBay assigns to your application.
  * ebay_site_id `integer`: eBay global ID
  * ecwid_acess_token `string`: Access token authorizing the app to access resources on behalf of a user
  * ecwid_store_id `string`: Store Id
  * etsy_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * etsy_keystring `string`: Etsy keystring
  * etsy_shared_secret `string`: Etsy shared secret
  * etsy_token_secret `string`: Secret token authorizing the app to access resources on behalf of a user
  * ftp_host `string`: FTP connection host
  * ftp_password `string`: FTP Password
  * ftp_port `integer`: FTP Port
  * ftp_store_dir `string`: FTP Store dir
  * ftp_user `string`: FTP User
  * hybris_client_id `string`: Omni Commerce Connector Client ID
  * hybris_client_secret `string`: Omni Commerce Connector Client Secret
  * hybris_password `string`: User password
  * hybris_username `string`: User Name
  * lightspeed_api_key `string`: LightSpeed api key
  * lightspeed_api_secret `string`: LightSpeed api secret
  * neto_api_key `string`: Neto API Key
  * neto_api_username `string`: Neto User Name
  * shopify_access_token `string`: Access token authorizing the app to access resources on behalf of a user
  * shopify_api_key `string`: Shopify API Key
  * shopify_api_password `string`: Shopify API Password
  * shopify_shared_secret `string`: Shared secret
  * shopware_api_key `string`: Shopware api key
  * squarespace_api_key `string`: Squarespace API Key
  * store_key `string`: Set this parameter if bridge is already uploaded to store
  * store_root `string`: Absolute path to the store root directory (used with "bridge_url" parameter)
  * store_url **required** `string`: A web address of a store that you would like to connect to API2Cart
  * validate_version `boolean`: Specify if api2cart should validate cart version
  * verify `boolean`: Enables or disables cart's verification
  * volusion_login `string`: It's a Volusion account for which API is enabled
  * volusion_password `string`: Volusion API Password
  * walmart_client_id `string`: Walmart client ID
  * walmart_client_secret `string`: Walmart client secret

### BaseCustomer
* BaseCustomer `object`
  * additional_fields `object`
  * custom_fields `object`
  * email `string`
  * first_name `string`
  * id `string`
  * last_name `string`
  * phone `string`

### Basket
* Basket `object`
  * additional_fields `object`
  * basket_products `array`
    * items [Basket_Item](#basket_item)
  * basket_url `string`
  * created_at [A2CDateTime](#a2cdatetime)
  * currency [Currency](#currency)
  * custom_fields `object`
  * customer [BaseCustomer](#basecustomer)
  * id `string`
  * modified_at [A2CDateTime](#a2cdatetime)

### Basket_Item
* Basket_Item `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`
  * options `array`
    * items [Basket_Item_Option](#basket_item_option)
  * parent_id `string`
  * price `number`
  * product_id `string`
  * quantity `number`
  * sku `string`
  * tax `number`
  * variant_id `string`
  * weight `number`
  * weight_unit `string`

### Basket_Item_Option
* Basket_Item_Option `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`
  * used_in_combination `boolean`
  * value `string`
  * value_id `string`

### Basket_LiveShippingService
* Basket_LiveShippingService `object`
  * additional_fields `object`
  * callback `string`
  * callback_err_cnt `integer`
  * custom_fields `object`
  * enabled_on_store `boolean`
  * id `string`
  * name `string`

### Brand
* Brand `object`
  * active `boolean`
  * additional_fields `object`
  * created_time `string`
  * custom_fields `object`
  * full_description `string`
  * id `string`
  * meta_description `string`
  * meta_keywords `string`
  * meta_title `string`
  * modified_time `string`
  * name `string`
  * short_description `string`
  * stores_ids `array`
    * items `string`
  * url `string`

### Carrier
* Carrier `object`
  * active `boolean`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`
  * shipping_methods `array`
    * items [Order_ShippingMethod](#order_shippingmethod)

### Cart
* Cart `object`
  * additional_fields `object`
  * custom_fields `object`
  * db_prefix `string`
  * name `string`
  * shipping_zones `array`
    * items [Cart_ShippingZone](#cart_shippingzone)
  * stores_info `array`
    * items [Cart_StoreInfo](#cart_storeinfo)
  * url `string`
  * version `string`
  * warehouses `array`
    * items [Cart_Warehouse](#cart_warehouse)

### CartConfigUpdate
* CartConfigUpdate `object`
  * custom_fields `object`: This parameter sets the list of params to the shopping cart.
  * db_tables_prefix `string`: This parameter is deprecated for this method. Please, use this parameter in method account.config.update
  * store_id `string`: Store Id

### CartCouponAdd
* CartCouponAdd `object`
  * action_amount **required** `number`: Defines the discount amount value.
  * action_apply_to **required** `string` (values: order_total, item_price, shipping): Defines where discount should be applied
  * action_condition_entity `string`: Defines entity for action condition.
  * action_condition_key `string`: Defines entity attribute code for action condition.
  * action_condition_operator `string`: Defines condition operator.
  * action_condition_value `string`: Defines condition attribute value/s. Can be comma separated string.
  * action_scope **required** `string` (values: order, matching_items): Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once.
  * action_type **required** `string` (values: percent, fixed): Coupon discount type
  * code **required** `string`: Coupon code
  * codes `array`: Entity codes
    * items `string`
  * date_end `string`: Defines when discount code will be expired.
  * date_start `string`: Defines when discount code will be available.
  * name `string`: Coupon name
  * store_id `string`: Store Id
  * usage_limit `integer`: Usage limit for coupon.
  * usage_limit_per_customer `integer`: Usage limit per customer.

### Cart_Channel
* Cart_Channel `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * is_enabled `boolean`
  * name `string`
  * platform `string`

### Cart_MetaData
* Cart_MetaData `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * key `string`
  * value `string`

### Cart_ShippingZone
* Cart_ShippingZone `object`
  * additional_fields `object`
  * code `string`
  * country `string`
  * country_iso2_codes `array`
    * items `string`
  * custom_fields `object`
  * id `string`
  * name `string`

### Cart_StoreInfo
* Cart_StoreInfo `object`
  * active `boolean`
  * additional_fields `object`
  * carrier_info `array`
    * items [Carrier](#carrier)
  * channels `array`
    * items [Cart_Channel](#cart_channel)
  * country `string`
  * currency [Currency](#currency)
  * custom_fields `object`
  * default_warehouse_id `string`
  * dimension_unit `string`
  * language `string`
  * multi_store_url `string`
  * name `string`
  * prices_include_tax `boolean`
  * root_category_id `string`
  * store_currencies `array`
    * items [Currency](#currency)
  * store_id `string`
  * store_languages `array`
    * items [Language](#language)
  * store_owner_info [Info](#info)
  * timezone `string`
  * weight_unit `string`

### Cart_Warehouse
* Cart_Warehouse `object`
  * additional_fields `object`
  * address [Customer_Address](#customer_address)
  * avail `boolean`
  * carriers_ids `array`
    * items `string`
  * custom_fields `object`
  * description `string`
  * id `string`
  * name `string`
  * stores_ids `array`
    * items `string`

### CatalogPriceRule
* CatalogPriceRule `object`
  * actions `array`
    * items [CatalogPriceRule_Action](#catalogpricerule_action)
  * additional_fields `object`
  * avail `boolean`
  * conditions `array`
    * items [Coupon_Condition](#coupon_condition)
  * created_time [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * date_end [A2CDateTime](#a2cdatetime)
  * date_start [A2CDateTime](#a2cdatetime)
  * description `string`
  * gid `string`
  * id `string`
  * name `string`
  * short_description `string`
  * type `string`
  * usage_count `number`
  * uses_per_order_limit `integer`

### CatalogPriceRule_Action
* CatalogPriceRule_Action `object`
  * additional_fields `object`
  * apply_to `string`
  * conditions `array`
    * items [Coupon_Condition](#coupon_condition)
  * currency_code `string`
  * custom_fields `object`
  * quantity `number`
  * scope `string`
  * type `string`
  * value `number`

### Category
* Category `object`
  * additional_fields `object`
  * avail `boolean`
  * created_at [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * description `string`
  * id `string`
  * images `array`
    * items [Image](#image)
  * keywords `string`
  * meta_description `string`
  * meta_title `string`
  * modified_at [A2CDateTime](#a2cdatetime)
  * name `string`
  * parent_id `string`
  * path `string`
  * seo_url `string`
  * short_description `string`
  * sort_order `integer`
  * stores_ids `array`
    * items `string`

### Child
* Child `object`
  * additional_fields `object`
  * advanced_price `array`
    * items [Product_AdvancedPrice](#product_advancedprice)
  * allow_backorders `boolean`
  * avail_for_sale `boolean`
  * combination `array`
    * items `object`
      * option_id `string`
      * option_value_id `string`
  * cost_price `number`
  * created_time [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * default_price `number`
  * default_qty_in_pack `number`
  * dimensions_unit `string`
  * ean `string`
  * full_description `string`
  * gtin `string`
  * height `number`
  * id `string`
  * images `array`
    * items [Image](#image)
  * in_stock `boolean`
  * inventory `array`
    * items [Product_Inventory](#product_inventory)
  * inventory_level `number`
  * is_qty_in_pack_fixed `boolean`
  * length `number`
  * list_price `number`
  * manage_stock `boolean`
  * min_quantity `number`
  * modified_time [A2CDateTime](#a2cdatetime)
  * mpn `string`
  * name `string`
  * parent_id `string`
  * short_description `string`
  * sku `string`
  * sort_order `integer`
  * tax_class_id `string`
  * upc `string`
  * weight `number`
  * weight_unit `string`
  * wholesale_price `number`
  * width `number`

### Country
* Country `object`
  * additional_fields `object`
  * code2 `string`
  * code3 `string`
  * custom_fields `object`
  * name `string`

### Coupon
* Coupon `object`
  * actions `array`
    * items [Coupon_Action](#coupon_action)
  * additional_fields `object`
  * avail `boolean`
  * code `string`
  * codes `array`
    * items [Coupon_Code](#coupon_code)
  * conditions `array`
    * items [Coupon_Condition](#coupon_condition)
  * custom_fields `object`
  * date_end [A2CDateTime](#a2cdatetime)
  * date_start [A2CDateTime](#a2cdatetime)
  * description `string`
  * id `string`
  * logic_operator `string`
  * name `string`
  * priority `integer`
  * usage_history `array`
    * items [Coupon_History](#coupon_history)
  * usage_limit `integer`
  * usage_limit_per_customer `integer`
  * used_times `integer`

### Coupon_Action
* Coupon_Action `object`
  * additional_fields `object`
  * amount `number`
  * apply_to `string`
  * conditions `array`
    * items [Coupon_Condition](#coupon_condition)
  * currency_code `string`
  * custom_fields `object`
  * discount_quantity_step `integer`
  * discounted_quantity `number`
  * include_tax `boolean`
  * logic_operator `string`
  * scope `string`
  * type `string`

### Coupon_Code
* Coupon_Code `object`
  * additional_fields `object`
  * code `string`
  * custom_fields `object`
  * id `string`
  * used_times `integer`

### Coupon_Condition
* Coupon_Condition `object`
  * additional_fields `object`
  * custom_fields `object`
  * entity `string`
  * id `string`
  * key `string`
  * logic_operator `string`
  * match_items `string`
  * operator `string`
  * sub-conditions `array`
    * items [Coupon_Condition](#coupon_condition)
  * value `string`

### Coupon_History
* Coupon_History `object`
  * additional_fields `object`
  * amount `number`
  * custom_fields `object`
  * order_id `string`

### Currency
* Currency `object`
  * additional_fields `object`
  * avail `boolean`
  * custom_fields `object`
  * default `boolean`
  * id `string`
  * iso3 `string`
  * name `string`
  * rate `number`
  * symbol_left `string`
  * symbol_right `string`

### Customer
* Customer `object`
  * additional_fields `object`
  * address_book `array`
    * items [Customer_Address](#customer_address)
  * birth_day [A2CDateTime](#a2cdatetime)
  * company `string`
  * created_time [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * email `string`
  * fax `string`
  * first_name `string`
  * gender `string`
  * group `array`
    * items [Customer_Group](#customer_group)
  * id `string`
  * ip_address `string`
  * last_login [A2CDateTime](#a2cdatetime)
  * last_name `string`
  * last_order_id `string`
  * login `string`
  * modified_time [A2CDateTime](#a2cdatetime)
  * news_letter_subscription `boolean`
  * orders_count `integer`
  * phone `string`
  * status `string`
  * stores_ids `array`
    * items `string`
  * website `string`

### CustomerAdd
* CustomerAdd `object`
  * address `array`
    * items `object`
      * address_book_address1 `string`: Specifies customer's first address in the address book
      * address_book_address2 `string`: Specifies customer's second address in the address book
      * address_book_city `string`: Specifies customer's city in the address book
      * address_book_company `string`: Specifies customer's company name in the address book
      * address_book_country `string`: ISO code or name of country
      * address_book_default `boolean`: Defines whether the address is used by default
      * address_book_fax `string`: Specifies customer's fax in the address book
      * address_book_first_name `string`: Specifies customer's first name in the address book
      * address_book_gender `string`: Specifies customer's gender
      * address_book_last_name `string`: Specifies customer's last name in the address book
      * address_book_phone `string`: Specifies customer's phone number in the address book
      * address_book_postcode `string`: Specifies customer's postcode
      * address_book_region `string`: Specifies customer's region
      * address_book_state `string`: ISO code or name of state.
      * address_book_type `string`: Specifies customer's address type
      * address_book_website `string`: Specifies customer's website in the address book
  * birth_day `string`: Defines customer's birthday
  * company `string`: Defines customer's company
  * created_time `string`: Entity's date creation
  * email **required** `string`: Defines customer's email
  * fax `string`: Defines customer's fax
  * first_name **required** `string`: Defines customer's first name
  * gender `string`: Defines customer's gender
  * group `string`: Defines the group where the customer
  * last_login `string`: Defines customer's last login time
  * last_name **required** `string`: Defines customer's last name
  * login `string`: Specifies customer's login name
  * modified_time `string`: Entity's date modification
  * news_letter_subscription `boolean`: Defines whether the newsletter subscription is available for the user
  * password `string`: Defines customer's unique password
  * phone `string`: Defines customer's phone number
  * status `string`: Defines customer's status
  * website `string`: Link to customer website

### Customer_Address
* Customer_Address `object`
  * additional_fields `object`
  * address1 `string`
  * address2 `string`
  * city `string`
  * company `string`
  * country [Country](#country)
  * custom_fields `object`
  * default `boolean`
  * fax `string`
  * first_name `string`
  * gender `string`
  * id `string`
  * last_name `string`
  * phone `string`
  * postcode `string`
  * region `string`
  * state [State](#state)
  * type `string`
  * website `string`

### Customer_Attribute
* Customer_Attribute `object`
  * additional_fields `object`
  * attribute_id `string`
  * code `string`
  * custom_fields `object`
  * name `string`
  * type `string`
  * values `array`
    * items [Customer_Attribute_Value](#customer_attribute_value)

### Customer_Attribute_Value
* Customer_Attribute_Value `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * value `string`

### Customer_Group
* Customer_Group `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`

### GiftCard
* GiftCard `object`
  * additional_fields `object`
  * amount `number`
  * avail_to `string`
  * code `string`
  * created_at `string`
  * currency_code `string`
  * custom_fields `object`
  * free_product_ids `string`
  * id `string`
  * initial_amount `number`
  * message `string`
  * name `string`
  * owner_email `string`
  * owner_name `string`
  * recipient_email `string`
  * recipient_name `string`
  * status `string`
  * type `string`
  * usage_history `array`
    * items [Coupon_History](#coupon_history)

### Image
* Image `object`
  * additional_fields `object`
  * alt `string`
  * avail `boolean`
  * create_at [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * file_name `string`
  * http_path `string`
  * id `string`
  * mime-type `string`
  * modified_at [A2CDateTime](#a2cdatetime)
  * size `integer`
  * sort_order `integer`
  * type `string`

### Info
* Info `object`
  * additional_fields `object`
  * city `string`
  * country `string`
  * custom_fields `object`
  * email `string`
  * owner `string`
  * phone `string`
  * state `string`
  * state_code `string`
  * street_address `string`
  * street_address_line_2 `string`
  * zip_code `string`

### Language
* Language `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * iso_code `string`
  * name `string`

### Model_Response_Cart_Catalog_PriceRules_List
* Model_Response_Cart_Catalog_PriceRules_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Cart_CatalogPriceRules_List_Result](#response_cart_catalogpricerules_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Cart_Coupon_List
* Model_Response_Cart_Coupon_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Cart_Coupon_List_Result](#response_cart_coupon_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Cart_GiftCard_List
* Model_Response_Cart_GiftCard_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Cart_Giftcard_List_Result](#response_cart_giftcard_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Cart_MetaData_List
* Model_Response_Cart_MetaData_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Cart_MetaData_List_Result](#response_cart_metadata_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Cart_Script_List
* Model_Response_Cart_Script_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Cart_Script_List_Result](#response_cart_script_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Category_List
* Model_Response_Category_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Category_List_Result](#response_category_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Customer_Attribute_List
* Model_Response_Customer_Attribute_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Customer_Attribute_List_Result](#response_customer_attribute_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Customer_Group_List
* Model_Response_Customer_Group_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Customer_Group_List_Result](#response_customer_group_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Customer_List
* Model_Response_Customer_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Customer_List_Result](#response_customer_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Order_Abandoned_List
* Model_Response_Order_Abandoned_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Order_Abandoned_List_Result](#response_order_abandoned_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Order_List
* Model_Response_Order_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Order_List_Result](#response_order_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Order_Shipment_List
* Model_Response_Order_Shipment_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Order_Shipment_List_Result](#response_order_shipment_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Product_Attribute_List
* Model_Response_Product_Attribute_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Product_Attribute_List_Result](#response_product_attribute_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Product_ChildItem_List
* Model_Response_Product_ChildItem_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Product_ChildItem_List_Result](#response_product_childitem_list_result)
  * return_code `integer`
  * return_message `string`

### Model_Response_Product_List
* Model_Response_Product_List `object`
  * additional_fields `object`
  * custom_fields `object`
  * pagination [Pagination](#pagination)
  * result [Response_Product_List_Result](#response_product_list_result)
  * return_code `integer`
  * return_message `string`

### Order
* Order `object`
  * additional_fields `object`
  * basket_id `string`
  * billing_address [Customer_Address](#customer_address)
  * bundles `array`
    * items [Order_Item](#order_item)
  * channel_id `string`
  * comment `string`
  * create_at [A2CDateTime](#a2cdatetime)
  * currency [Currency](#currency)
  * custom_fields `object`
  * customer [BaseCustomer](#basecustomer)
  * discounts `array`
    * items [Order_Totals_NewDiscount](#order_totals_newdiscount)
  * finished_time [A2CDateTime](#a2cdatetime)
  * gift_message `string`
  * id `string`
  * modified_at [A2CDateTime](#a2cdatetime)
  * order_id `string`
  * order_products `array`
    * items [Order_Item](#order_item)
  * payment_method [Order_PaymentMethod](#order_paymentmethod)
  * refunds `array`
    * items [Order_Refund](#order_refund)
  * shipping_address [Customer_Address](#customer_address)
  * shipping_method [Order_ShippingMethod](#order_shippingmethod)
  * shipping_methods `array`
    * items [Order_ShippingMethod](#order_shippingmethod)
  * status [Order_Status](#order_status)
  * store_id `string`
  * total [Order_Total](#order_total)
  * totals [Order_Totals](#order_totals)
  * warehouses_ids `array`
    * items `string`

### OrderAbandoned
* OrderAbandoned `object`
  * additional_fields `object`
  * basket_id `string`
  * basket_url `string`
  * created_at [A2CDateTime](#a2cdatetime)
  * currency [Currency](#currency)
  * custom_fields `object`
  * customer `object`
    * email `string`
    * first_name `string`
    * id `string`
    * last_name `string`
  * id `string`
  * modified_at [A2CDateTime](#a2cdatetime)
  * order_products `array`
    * items [Order_Item](#order_item)
  * totals [Order_Totals](#order_totals)

### OrderAdd
* OrderAdd `object`
  * admin_comment `string`: Specifies admin's order comment
  * admin_private_comment `string`: Specifies private admin's order comment
  * bill_address_1 **required** `string`: Specifies first billing address
  * bill_address_2 `string`: Specifies second billing address
  * bill_city **required** `string`: Specifies billing city
  * bill_company `string`: Specifies billing company
  * bill_country **required** `string`: Specifies billing country code
  * bill_fax `string`: Specifies billing fax
  * bill_first_name **required** `string`: Specifies billing first name
  * bill_last_name **required** `string`: Specifies billing last name
  * bill_phone `string`: Specifies billing phone
  * bill_postcode **required** `string`: Specifies billing postcode
  * bill_state **required** `string`: Specifies billing state code
  * channel_id `string`: Channel ID
  * comment `string`: Specifies order comment
  * coupon_discount `number`: Specifies order's coupon discount
  * create_invoice `boolean`: Defines whether the invoice is created automatically along with the order
  * currency `string`: Currency code of order
  * customer_birthday `string`: Specifies customer’s birthday
  * customer_email **required** `string`: Defines the customer specified by email for whom order has to be created
  * customer_fax `string`: Specifies customer’s fax
  * customer_first_name `string`: Specifies customer's first name
  * customer_last_name `string`: Specifies customer’s last name
  * customer_phone `string`: Specifies customer’s phone
  * date `string`: Specifies an order creation date in format Y-m-d H:i:s
  * date_finished `string`: Specifies order's  finished date
  * date_modified `string`: Specifies order's  modification date
  * discount `number`: Specifies order's discount
  * external_source `string`: Identifying the system used to generate the order
  * financial_status `string`: Create order with financial status
  * fulfillment_status `string`: Create order with fulfillment status
  * gift_certificate_discount `number`: Discounts for order with gift certificates
  * inventory_behaviour `string`: The behaviour to use when updating inventory.<hr><div style="font-style:normal">Values description:<div style="margin-left: 2%; padding-top: 2%"><div style="font-size:85%"><b>bypass</b> = Do not claim inventory </br></br><b>decrement_ignoring_policy</b> = Ignore the product's </br> inventory policy and claim amounts</br></br><b>decrement_obeying_policy</b> =  Obey the product's </br> inventory policy.</br></br></div></div></div>
  * note_attributes `array`: Defines note attributes
    * items `object`
      * name `string`
      * value `string`
  * order_id `string`: Defines the order id if it is supported by the cart
  * order_item **required** `array`
    * items `object`
      * order_item_allow_refund_items_separately `boolean`: Indicates whether subitems of the grouped/bundle product can be refunded separately
      * order_item_allow_ship_items_separately `boolean`: Indicates whether subitems of the grouped/bundle product can be shipped separately
      * order_item_id **required** `string`: Defines orders specified by order item id
      * order_item_model `string`: Defines orders specified by order item model
      * order_item_name **required** `string`: Defines orders specified by order item name
      * order_item_option `array`
        * items `object`
          * order_item_option_name `string`: Ordered Product Option Name. Where x is order item ID, y is order item option ID
          * order_item_option_price `number`: Ordered product option price Where x is order item ID, y - order item option ID
          * order_item_option_value `string`: Ordered product option value Where x is order item ID, y - order item option ID
      * order_item_parent `integer`: Index of the parent grouped/bundle product
      * order_item_parent_option_name `string`: Option name of the parent grouped/bundle product
      * order_item_price **required** `number`: Defines orders specified by order item price
      * order_item_price_includes_tax `boolean`: Defines if item price includes tax
      * order_item_property `array`
        * items `object`
          * order_item_property_name `string`: Ordered product property name. Where x is order item ID, y is order item property ID
          * order_item_property_value `string`: Ordered product property value. Where x is order item ID, y - order item property ID
      * order_item_quantity **required** `integer`: Defines orders specified by order item quantity
      * order_item_tax `number`: Percentage of tax for product order
      * order_item_variant_id `string`: Ordered product variant. Where x is order item ID
  * order_payment_method `string`: Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'
  * order_shipping_method `string`: Defines order shipping method
  * order_status **required** `string`: Defines order status.
  * send_admin_notifications `boolean`: Notify admin when new order was created.
  * send_notifications `boolean`: Send notifications to customer after order was created
  * shipp_address_1 `string`: Specifies first shipping address
  * shipp_address_2 `string`: Specifies second address line of a shipping street address
  * shipp_city `string`: Specifies shipping city
  * shipp_company `string`: Specifies shipping company
  * shipp_country `string`: Specifies shipping country code
  * shipp_fax `string`: Specifies shipping fax
  * shipp_first_name `string`: Specifies shipping first name
  * shipp_last_name `string`: Specifies shipping last name
  * shipp_phone `string`: Specifies shipping phone
  * shipp_postcode `string`: Specifies shipping postcode
  * shipp_state `string`: Specifies shipping state code
  * shipping_price `number`: Specifies order's shipping price
  * shipping_tax `number`: Specifies order's shipping price tax
  * store_id `string`: Defines store id where the order should be assigned
  * subtotal_price `number`: Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts
  * tags `string`: Order tags
  * tax_price `number`: The value of tax cost for order
  * total_paid `number`: Defines total paid amount for the order
  * total_price `number`: Defines order's total price
  * total_weight `integer`: Defines the sum of all line item weights in grams for the order
  * transaction_id `string`: Payment transaction id

### OrderRefundAdd
* OrderRefundAdd `object`
  * date `string`: Specifies an order creation date in format Y-m-d H:i:s
  * fee_price `number`: Specifies refund's fee price
  * is_online `boolean`: Indicates whether refund type is online
  * item_restock `boolean`: Boolean, whether or not to add the line items back to the store inventory.
  * items `array`: Defines items in the order that will be refunded
    * items `object`
      * order_product_id `string`
      * price `number`
      * quantity `integer`
  * message `string`: Refund reason, or some else message which assigned to refund.
  * order_id `string`: Defines the order for which the refund will be created.
  * send_notifications `boolean`: Send notifications to customer after refund was created
  * shipping_price `number`: Defines refund shipping amount.
  * total_price `number`: Defines order refund amount.

### OrderShipmentAdd
* OrderShipmentAdd `object`
  * adjust_stock `boolean`: This parameter is used for adjust stock.
  * enable_cache `boolean`: If the value is 'true' and order exist in our cache, we will use order.info from cache to prepare shipment items.
  * items `array`: Defines items in the order that will be shipped
    * items `object`
      * order_product_id `string`
      * quantity `number`
  * order_id `string`: Defines the order for which the shipment will be created
  * send_notifications `boolean`: Send notifications to customer after shipment was created
  * shipment_provider `string`: Defines company name that provide tracking of shipment
  * store_id `string`: Store Id
  * tracking_link `string`: Defines custom tracking link
  * tracking_numbers `array`: Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "http://docs.api2cart.com/cart-info">cart.info</a > method
    * items `object`
      * carrier_id `string`
      * tracking_number `string`
  * warehouse_id `string`: This parameter is used for selecting a warehouse where you need to set/modify a product quantity.

### OrderShipmentTrackingAdd
* OrderShipmentTrackingAdd `object`
  * carrier_id `string`: Defines tracking carrier id
  * order_id `string`: Defines the order id
  * shipment_id **required** `string`: Shipment id indicates the number of delivery
  * store_id `string`: Store Id
  * tracking_link `string`: Defines custom tracking link
  * tracking_number **required** `string`: Defines tracking number
  * tracking_provider `string`: Defines name of the company which provides shipment tracking

### OrderShipmentUpdate
* OrderShipmentUpdate `object`
  * order_id `string`: Defines the order that will be updated
  * replace `boolean`: Allows rewrite tracking numbers
  * shipment_id **required** `string`: Shipment id indicates the number of delivery
  * tracking_numbers `array`: Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "http://docs.api2cart.com/cart-info">cart.info</a > method
    * items `object`
      * carrier_id `string`
      * tracking_number `string`

### Order_Item
* Order_Item `object`
  * additional_fields `object`
  * barcode `string`
  * custom_fields `object`
  * discount_amount `number`
  * model `string`
  * name `string`
  * options `array`
    * items [Order_Item_Option](#order_item_option)
  * order_product_id `string`
  * parent_order_product_id `string`
  * price `number`
  * price_inc_tax `number`
  * product_id `string`
  * quantity `number`
  * tax_percent `number`
  * tax_value `number`
  * tax_value_after_discount `number`
  * total_price `number`
  * variant_id `string`
  * weight `number`
  * weight_unit `string`

### Order_Item_Option
* Order_Item_Option `object`
  * additional_fields `object`
  * custom_fields `object`
  * name `string`
  * option_id `string`
  * price `number`
  * product_option_value_id `string`
  * type `string`
  * value `string`
  * weight `number`

### Order_PaymentMethod
* Order_PaymentMethod `object`
  * additional_fields `object`
  * custom_fields `object`
  * name `string`

### Order_Refund
* Order_Refund `object`
  * additional_fields `object`
  * comment `string`
  * custom_fields `object`
  * fee `number`
  * id `string`
  * items `array`
    * items [Order_Status_Refund_Item](#order_status_refund_item)
  * modified_time [A2CDateTime](#a2cdatetime)
  * shipping `number`
  * tax `number`
  * total `number`

### Order_ShippingMethod
* Order_ShippingMethod `object`
  * additional_fields `object`
  * custom_fields `object`
  * name `string`

### Order_Status
* Order_Status `object`
  * additional_fields `object`
  * custom_fields `object`
  * history `array`
    * items [Order_Status_HistoryItem](#order_status_historyitem)
  * id `string`
  * name `string`
  * refund_info [Order_Status_Refund](#order_status_refund)

### Order_Status_HistoryItem
* Order_Status_HistoryItem `object`
  * additional_fields `object`
  * comment `string`
  * custom_fields `object`
  * id `string`
  * modified_time [A2CDateTime](#a2cdatetime)
  * name `string`
  * notify `boolean`

### Order_Status_Refund
* Order_Status_Refund `object`
  * additional_fields `object`
  * comment `string`
  * custom_fields `object`
  * fee `number`
  * refunded_items `array`
    * items [Order_Status_Refund_Item](#order_status_refund_item)
  * shipping `number`
  * tax `number`
  * time [A2CDateTime](#a2cdatetime)
  * total_refunded `number`

### Order_Status_Refund_Item
* Order_Status_Refund_Item `object`
  * additional_fields `object`
  * custom_fields `object`
  * order_product_id `string`
  * product_id `string`
  * qty `number`
  * refund `number`
  * variant_id `string`

### Order_Total
* Order_Total `object`
  * additional_fields `object`
  * custom_fields `object`
  * shipping_ex_tax `number`
  * subtotal_ex_tax `number`
  * total `number`
  * total_discount `number`
  * total_paid `number`
  * total_tax `number`
  * wrapping_ex_tax `number`

### Order_Totals
* Order_Totals `object`
  * additional_fields `object`
  * custom_fields `object`
  * discount `number`
  * shipping `number`
  * subtotal `number`
  * tax `number`
  * total `number`

### Order_Totals_NewDiscount
* Order_Totals_NewDiscount `object`
  * additional_fields `object`
  * code `string`
  * custom_fields `object`
  * type `string`
  * value `number`

### Pagination
* Pagination `object`
  * additional_fields `object`
  * custom_fields `object`
  * next `string`
  * previous `string`

### Plugin
* Plugin `object`
  * active `boolean`
  * additional_fields `object`
  * custom_fields `object`
  * name `string`

### PluginList
* PluginList `object`
  * additional_fields `object`
  * all_plugins `integer`
  * custom_fields `object`
  * plugins `array`
    * items [Plugin](#plugin)

### Product
* Product `object`
  * additional_fields `object`
  * advanced_price `array`
    * items [Product_AdvancedPrice](#product_advancedprice)
  * avail_sale `boolean`
  * avail_view `boolean`
  * backorders `string`
  * categories_ids `array`
    * items `string`
  * cost_price `number`
  * create_at [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * description `string`
  * dimensions_unit `string`
  * group_price `array`
    * items [Product_GroupPrice](#product_groupprice)
  * height `number`
  * id `string`
  * images `array`
    * items [Image](#image)
  * inventory `array`
    * items [Product_Inventory](#product_inventory)
  * is_downloadable `boolean`
  * is_virtual `boolean`
  * length `number`
  * manage_stock `string`
  * meta_description `string`
  * meta_keywords `string`
  * meta_title `string`
  * modified_at [A2CDateTime](#a2cdatetime)
  * name `string`
  * price `number`
  * product_options `array`
    * items [Product_Option](#product_option)
  * quantity `number`
  * related_products_ids `array`
    * items `string`
  * seo_url `string`
  * short_description `string`
  * sort_order `integer`
  * special_price [SpecialPrice](#specialprice)
  * stores_ids `array`
    * items `string`
  * tax_class_id `string`
  * tier_price `array`
    * items [Product_TierPrice](#product_tierprice)
  * type `string`
  * u_brand `string`
  * u_brand_id `string`
  * u_model `string`
  * u_mpn `string`
  * u_sku `string`
  * u_upc `string`
  * url `string`
  * weight `number`
  * weight_unit `string`
  * width `number`

### ProductAdd
* ProductAdd `object`
  * attribute_name `string`: Defines product’s attribute name separated with a comma in Magento
  * attribute_set_name `string`: Defines product’s attribute set name in Magento
  * avail_from `string`: Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time.
  * available_for_sale `boolean`: Specifies the set of visible/invisible products for sale
  * available_for_view `boolean`: Specifies the set of visible/invisible products for users
  * backorder_status `string`: Set backorder status
  * barcode `string`: A barcode is a unique code composed of numbers used as a product identifier.
  * best_offer `array`: The price at which Best Offers are automatically accepted.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div>
    * items `string`
  * categories_ids `string`: Defines product add that is specified by comma-separated categories id
  * clear_cache `boolean`: Is cache clear required
  * condition `string`: The human-readable label for the condition (e.g., "New").
  * cost_price `number`: Defines new product's cost price
  * created_at `string`: Defines the date of entity creation
  * description **required** `string`: Defines product's description that has to be added
  * downloadable `boolean`: Defines whether the product is downloadable
  * ean `string`: European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
  * group_prices `array`: Defines product's group prices
    * items `object`
      * group_id `string`
      * price `number`
  * gtin `string`: Global Trade Item Number. An GTIN is an identifier for trade items.
  * image_name `string`: Defines image's name
  * image_url `string`: Image Url
  * isbn `string`: International Standard Book Number. An ISBN is a unique identifier for books.
  * lang_id `string`: Language id
  * listing_duration `string`: Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values.
  * listing_type `string`: Indicates the selling format of the eBay listing.
  * manufacturer `string`: Defines product's manufacturer
  * meta_description `string`: Defines unique meta description of a entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * meta_title `string`: Defines unique meta title for each entity
  * model **required** `string`: Defines product's model that has to be added
  * name **required** `string`: Defines product's name that has to be added
  * old_price `number`: Defines product's old price
  * ordered_count `integer`: Defines how many times the product was ordered
  * package_details `array`: If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">package_details[<b>measure_unit</b>] = string</br> Allowed measure_unit values: [English or Metric] </br> Default: Metric</br>package_details[<b>weigh_unit</b>] = string</br> Allowed weigh_unit values: [kg, g, lbs, oz]</br>package_details[<b>package_depth</b>] = decimal</br>package_details[<b>package_length</b>] = decimal</br>package_details[<b>package_width</b>] = decimal</br>package_details[<b>weight_major</b>] = decimal</br>package_details[<b>weight_minor</b>] = decimal</br>package_details[<b>shipping_package</b>] = string</br> See cart.info method, param `eBay_shipping_package_details`</code></div></div>
    * items `string`
  * payment_methods `array`: Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div>
    * items `string`
  * paypal_email `string`: Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing.
  * price **required** `number`: Defines product's price that has to be added
  * quantity `number`: Defines product's quantity that has to be added
  * return_accepted `boolean`: Indicates whether the seller allows the buyer to return the item.
  * sales_tax `array`: Percent of an item's price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">sales_tax[<b>tax_percent</b>] = decimal (##.###)</br>sales_tax[<b>tax_state</b>] = string</br>sales_tax[<b>shipping_inc_in_tax</b>] = bool</br></code></div></div>
    * items `string`
  * seller_profiles `object`: If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">seller_profiles[<b>shipping_profile_id</b>] = integer</br>seller_profiles[<b>payment_profile_id</b>] = integer</br>seller_profiles[<b>return_profile_id</b>] = integer</br></code></div></div>
    * payment_profile_id `string`
    * return_profile_id `string`
    * shipping_profile_id `string`
  * shipping_details `array`: The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">shipping_details[0][<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_type</b>] = string </br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div>
    * items `object`
      * shipping_cost `number`
      * shipping_service `string`
      * shipping_type `string`
  * shipping_template_id `integer`: The numeric ID of the shipping template associated with the products in Etsy.
  * short_description `string`: Defines short description
  * sku `string`: Defines product's sku that has to be added
  * special_price `number`: Defines product's model that has to be added
  * specifics `array`: An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.
    * items `string`
  * sprice_create `string`: Defines the date of special price creation
  * sprice_expire `string`: Defines the term of special price offer duration
  * sprice_modified `string`: Defines the date of special price modification
  * stores_ids `string`: Assign product to the stores that is specified by comma-separated stores' id
  * tags `string`: Product tags
  * tax_class_id `integer`: Defines tax classes where entity has to be added
  * taxable `boolean`: Specifies whether a tax is charged
  * tier_prices `array`: Defines product's tier prices
    * items `object`
      * price `number`
      * quantity `number`
  * type `string`: Defines product's type
  * upc `string`: Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
  * url `string`: Defines unique product's URL
  * viewed_count `integer`: Specifies the number of product's reviews
  * warehouse_id `string`: This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
  * weight `number`: Weight
  * weight_unit `string`: Weight Unit
  * wholesale_price `number`: Defines product's sale price

### ProductPriceAdd
* ProductPriceAdd `object`
  * group_prices `array`: Defines product's group prices
    * items `object`
      * group_id `string`
      * price `number`
  * product_id `string`: Defines the product to which the price has to be added

### ProductPriceUpdate
* ProductPriceUpdate `object`
  * group_prices `array`: Defines product's group prices
    * items `object`
      * group_id `string`
      * id `integer`
      * price `number`
  * product_id `string`: Defines the product where the price has to be updated

### ProductTaxAdd
* ProductTaxAdd `object`
  * name **required** `string`: Defines tax class name where tax has to be added
  * product_id `string`: Defines products specified by product id
  * tax_rates **required** `array`: Defines tax rates of specified tax classes
    * items `object`
      * name `string`
      * type `string`
      * value `number`

### ProductVariantAdd
* ProductVariantAdd `object`
  * attributes `array`: Defines variant's attributes list
    * items `object`
      * attribute_name `string`
      * attribute_price `number`
      * attribute_value `string`
  * available_for_sale `boolean`: Specifies the set of visible/invisible product's variants for sale
  * available_for_view `boolean`: Specifies the set of visible/invisible product's variants for users
  * barcode `string`: A barcode is a unique code composed of numbers used as a product identifier.
  * clear_cache `boolean`: Is cache clear required
  * cost_price `number`: Defines new product's cost price
  * created_at `string`: Defines the date of entity creation
  * description `string`: Specifies variant's description
  * lang_id `string`: Language id
  * manufacturer `string`: Specifies the product variant's manufacturer
  * meta_description `string`: Defines unique meta description of a entity
  * meta_keywords `string`: Defines unique meta keywords for each entity
  * meta_title `string`: Defines unique meta title for each entity
  * model **required** `string`: Specifies variant's model that has to be added
  * name `string`: Defines variant's name that has to be added
  * price `number`: Defines new product's variant price
  * product_id `string`: Defines product's id where the variant has to be added
  * quantity `number`: Defines product variant's quantity that has to be added
  * short_description `string`: Defines short description
  * special_price `number`: Specifies variant's model that has to be added
  * sprice_create `string`: Defines the date of special price creation
  * sprice_expire `string`: Defines the term of special price offer duration
  * sprice_modified `string`: Defines the date of special price modification
  * store_id `string`: Add variants specified by store id
  * tax_class_id `integer`: Defines tax classes where entity has to be added
  * taxable `boolean`: Specifies whether a tax is charged
  * url `string`: Defines unique product variant's URL
  * warehouse_id `string`: This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
  * weight `number`: Weight
  * weight_unit `string`: Weight Unit

### ProductVariantPriceAdd
* ProductVariantPriceAdd `object`
  * group_prices `array`: Defines variants's group prices
    * items `object`
      * group_id `string`
      * price `number`
  * id `string`: Defines the variant to which the price has to be added

### ProductVariantPriceUpdate
* ProductVariantPriceUpdate `object`
  * group_prices `array`: Defines variants's group prices
    * items `object`
      * group_id `string`
      * id `integer`
      * price `number`
  * id `string`: Defines the variant where the price has to be updated

### Product_AdvancedPrice
* Product_AdvancedPrice `object`
  * additional_fields `object`
  * avail `boolean`
  * custom_fields `object`
  * expire_time [A2CDateTime](#a2cdatetime)
  * group_id `string`
  * id `string`
  * quantity_from `number`
  * start_time [A2CDateTime](#a2cdatetime)
  * value `number`

### Product_Attribute
* Product_Attribute `object`
  * additional_fields `object`
  * attribute_group_id `string`
  * attribute_id `string`
  * code `string`
  * custom_fields `object`
  * lang_id `integer`
  * name `string`
  * position `integer`
  * product_id `integer`
  * required `boolean`
  * store_id `integer`
  * type `string`
  * value `string`
  * variant_id `string`
  * visible `boolean`

### Product_GroupPrice
* Product_GroupPrice `object`
  * additional_fields `object`
  * custom_fields `object`
  * expire_time `string`
  * group_id `string`
  * id `string`
  * price `number`
  * quantity `number`
  * start_time `string`
  * store_id `string`

### Product_Inventory
* Product_Inventory `object`
  * additional_fields `object`
  * custom_fields `object`
  * in_stock `boolean`
  * priority `integer`
  * quantity `number`
  * warehouse_id `string`

### Product_Option
* Product_Option `object`
  * additional_fields `object`
  * available `boolean`
  * custom_fields `object`
  * description `string`
  * id `string`
  * name `string`
  * option_items `array`
    * items [Product_Option_Item](#product_option_item)
  * product_option_id `string`
  * required `boolean`
  * sort_order `integer`
  * type `string`
  * used_in_combination `boolean`

### Product_Option_Item
* Product_Option_Item `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`
  * price `string`
  * product_option_item_id `string`
  * quantity `integer`
  * sku `string`
  * sort_order `integer`
  * type_price `string`
  * weight `string`

### Product_Review
* Product_Review `object`
  * additional_fields `object`
  * created_time [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * customer_id `string`
  * email `string`
  * id `string`
  * message `string`
  * nick_name `string`
  * product_id `string`
  * rating `number`
  * ratings `array`
    * items [Product_Review_Rating](#product_review_rating)
  * status `string`
  * summary `string`

### Product_Review_Rating
* Product_Review_Rating `object`
  * additional_fields `object`
  * custom_fields `object`
  * id `string`
  * name `string`
  * value `integer`

### Product_TierPrice
* Product_TierPrice `object`
  * additional_fields `object`
  * custom_fields `object`
  * price `number`
  * qty `number`

### Response_Cart_CatalogPriceRules_List_Result
* Response_Cart_CatalogPriceRules_List_Result `object`
  * additional_fields `object`
  * catalog_price_rules `array`
    * items [CatalogPriceRule](#catalogpricerule)
  * catalog_price_rules_count `integer`
  * custom_fields `object`

### Response_Cart_Coupon_List_Result
* Response_Cart_Coupon_List_Result `object`
  * additional_fields `object`
  * coupon `array`
    * items [Coupon](#coupon)
  * coupon_count `integer`
  * custom_fields `object`

### Response_Cart_Giftcard_List_Result
* Response_Cart_Giftcard_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * gift_card `array`
    * items [GiftCard](#giftcard)

### Response_Cart_MetaData_List_Result
* Response_Cart_MetaData_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * items `array`
    * items [Cart_MetaData](#cart_metadata)
  * total_count `integer`

### Response_Cart_Script_List_Result
* Response_Cart_Script_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * scripts `array`
    * items [Script](#script)
  * total_count `integer`

### Response_Category_List_Result
* Response_Category_List_Result `object`
  * additional_fields `object`
  * categories_count `integer`
  * category `array`
    * items [Category](#category)
  * custom_fields `object`

### Response_Customer_Attribute_List_Result
* Response_Customer_Attribute_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * items `array`
    * items [Customer_Attribute](#customer_attribute)
  * total_count `integer`

### Response_Customer_Group_List_Result
* Response_Customer_Group_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * group `array`
    * items [Customer_Group](#customer_group)
  * group_count `integer`

### Response_Customer_List_Result
* Response_Customer_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * customer `array`
    * items [Customer](#customer)
  * customers_count `integer`

### Response_Order_Abandoned_List_Result
* Response_Order_Abandoned_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * order `array`
    * items [OrderAbandoned](#orderabandoned)

### Response_Order_List_Result
* Response_Order_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * order `array`
    * items [Order](#order)
  * orders_count `integer`

### Response_Order_Shipment_List_Result
* Response_Order_Shipment_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * shipment `array`
    * items [Shipment](#shipment)
  * shipment_count `integer`

### Response_Product_Attribute_List_Result
* Response_Product_Attribute_List_Result `object`
  * additional_fields `object`
  * attribute `array`
    * items [Product_Attribute](#product_attribute)
  * custom_fields `object`

### Response_Product_ChildItem_List_Result
* Response_Product_ChildItem_List_Result `object`
  * additional_fields `object`
  * children `array`
    * items [Child](#child)
  * custom_fields `object`
  * total_count `integer`

### Response_Product_List_Result
* Response_Product_List_Result `object`
  * additional_fields `object`
  * custom_fields `object`
  * product `array`
    * items [Product](#product)
  * products_count `integer`

### Script
* Script `object`
  * additional_fields `object`
  * created_time [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * description `string`
  * event `string`
  * html `string`
  * id `string`
  * load_method `string`
  * modified_time [A2CDateTime](#a2cdatetime)
  * name `string`
  * scope `string`
  * src `string`

### Shipment
* Shipment `object`
  * additional_fields `object`
  * created_at [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * id `string`
  * items `array`
    * items `object`
      * model `string`
      * name `string`
      * price `number`
      * product_id `string`
      * quantity `number`
  * order_id `string`
  * shipment_provider `string`
  * tracking_numbers `array`
    * items [Shipment_TrackingNumber](#shipment_trackingnumber)
  * warehouse_id `string`

### Shipment_TrackingNumber
* Shipment_TrackingNumber `object`
  * additional_fields `object`
  * carrier_id `string`
  * custom_fields `object`
  * tracking_number `string`

### SpecialPrice
* SpecialPrice `object`
  * additional_fields `object`
  * avail `boolean`
  * created_at [A2CDateTime](#a2cdatetime)
  * custom_fields `object`
  * expired_at [A2CDateTime](#a2cdatetime)
  * modified_at [A2CDateTime](#a2cdatetime)
  * value `number`

### State
* State `object`
  * additional_fields `object`
  * code `string`
  * custom_fields `object`
  * name `string`

### StoreAttribute
* StoreAttribute `object`
  * additional_fields `object`
  * code `string`
  * custom_fields `object`
  * default_values `array`
    * items `string`
  * id `string`
  * lang_id `string`
  * name `string`
  * position `integer`
  * required `boolean`
  * store_id `string`
  * system `boolean`
  * type `string`
  * values `array`
    * items `string`
  * visible `boolean`

### StoreAttribute_Group
* StoreAttribute_Group `object`
  * additional_fields `object`
  * assigned_attribute_ids `array`
    * items `string`
  * attribute_set_id `string`
  * custom_fields `object`
  * id `string`
  * name `string`
  * position `integer`

### Subscriber
* Subscriber `object`
  * additional_fields `object`
  * created_time `string`
  * custom_fields `object`
  * customer_id `string`
  * email `string`
  * first_name `string`
  * id `string`
  * last_name `string`
  * modified_time `string`
  * subscribed `boolean`

### TaxClass
* TaxClass `object`
  * additional_fields `object`
  * avail `boolean`
  * custom_fields `object`
  * id `string`
  * name `string`
  * tax `number`
  * tax_rates `array`
    * items [TaxClass_Rate](#taxclass_rate)
  * tax_type `integer`

### TaxClass_Rate
* TaxClass_Rate `object`
  * additional_fields `object`
  * address `array`
    * items `string`
  * cities `array`
    * items `string`
  * countries `array`
    * items `string`
  * custom_fields `object`
  * id `string`
  * name `string`
  * tax `number`
  * tax_based_on `string`
  * tax_type `integer`
  * zip_codes `array`
    * items `string`

### Webhook
* Webhook `object`
  * action `string`
  * active `boolean`
  * additional_fields `object`
  * callback `string`
  * created_at `string`
  * custom_fields `object`
  * entity `string`
  * fields `string`
  * id `integer`
  * label `string`
  * store_id `string`
  * updated_at `string`


