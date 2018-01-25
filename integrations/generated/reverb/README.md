# @datafire/reverb

Client library for reverb

## Installation and Usage
```bash
npm install --save @datafire/reverb
```
```js
let reverb = require('@datafire/reverb').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

reverb.webhooks.registrations.post({}).then(data => {
  console.log(data);
});
```

## Description

reverb

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
reverb.oauthCallback({
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
reverb.oauthRefresh(null, context)
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

### articles.get



```js
reverb.articles.get({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * offset `integer`
  * query `string`: What's being searched for
  * exclude_featured `integer`: Number of featured articles to exclude

#### Output
*Output schema unknown*

### categories.get
List of supported product categories


```js
reverb.categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### categories.flat.get



```js
reverb.categories.flat.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### categories.taxonomy.get
Full taxonomy tree of categories including middle categories


```js
reverb.categories.taxonomy.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### categories.product_type.category.get
Get subcategory details


```js
reverb.categories.product_type.category.get({
  "product_type": "",
  "category": ""
}, context)
```

#### Input
* input `object`
  * product_type **required** `string`
  * category **required** `string`

#### Output
*Output schema unknown*

### categories.uuid.get
Get category details


```js
reverb.categories.uuid.get({
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`

#### Output
*Output schema unknown*

### comparison_shopping_pages.get
Returns a set of comparison shopping pages based on the current params


```js
reverb.comparison_shopping_pages.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### comparison_shopping_pages.find.get
Show comparison shopping page


```js
reverb.comparison_shopping_pages.find.get({}, context)
```

#### Input
* input `object`
  * id `string`: ID of the comparison shopping page
  * slug `string`: Slug of the comparison shopping page

#### Output
*Output schema unknown*

### comparison_shopping_pages.id.get



```js
reverb.comparison_shopping_pages.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### comparison_shopping_pages.id.listings.get
Return new or used listings for a comparison shopping page


```js
reverb.comparison_shopping_pages.id.listings.get({
  "id": "",
  "condition": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * condition **required** `string`: Condition of the listing
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### comparison_shopping_pages.id.reviews.get
View reviews of a comparison shopping page


```js
reverb.comparison_shopping_pages.id.reviews.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### conversations.conversation_id.offer.post
Make an offer to the other participant in the conversation


```js
reverb.conversations.conversation_id.offer.post({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`
  * body `object`
    * country_code `string`
    * message `string`: Message to include with counter offer
    * offer_items `array`
      * items `object`
        * listing_id **required** `string`
        * price **required** `string`
        * shipping_price **required** `string`
    * price `object`
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
    * region_code `string`
    * shipping_price `object`: Shipping price (sellers only)
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in

#### Output
*Output schema unknown*

### conversations.id.offer.post
Make an offer to the other participant in the conversation


```js
reverb.conversations.id.offer.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * message `string`: Message to include with counter offer
    * price **required** `string`: Offer price
    * shipping_price `string`: Shipping price (sellers only)

#### Output
*Output schema unknown*

### countries.get
Retrieve a list of country codes with corresponding subregions


```js
reverb.countries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### curated_sets.slug.get



```js
reverb.curated_sets.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### currencies.display.get
List of supported display currencies for browsing listings


```js
reverb.currencies.display.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### currencies.listing.get
List of supported listing currencies for shops


```js
reverb.currencies.listing.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### feedback.feedback_id.get
Feedback details


```js
reverb.feedback.feedback_id.get({
  "feedback_id": ""
}, context)
```

#### Input
* input `object`
  * feedback_id **required** `string`

#### Output
*Output schema unknown*

### handpicked.slug.get
Get results from a handpicked collection


```js
reverb.handpicked.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`
  * query `string`: Search query.
  * auction_price_max `number`: Maximum current auction price
  * category `string`: Category slug from /api/categories
  * product_type `string`: Product type slug from /api/categories
  * conditions `array`: Condition: all,new,b-stock,used,non-functioning
  * decade `string`: Decade: e.g. 1970s, early 70s
  * finish `string`: Visual finish of the item, common for guitars
  * handmade `boolean`: Handmade items only
  * item_city `string`: City where item is located
  * item_country `string`: DEPRECATED - Country code where item is located
  * item_region `string`: Country code where item is located
  * item_state `string`: State or region code where item is located
  * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
  * model `string`: Model of item (e.g. Stratocaster)
  * must_not `string`: Search term negation. If you want to exclude a term, add it here
  * price_max `number`: Maximum price of search results (USD)
  * price_min `number`: Minimum price of search results (USD)
  * currency `string`: The currency to be used for the price filters
  * year_max `integer`: Maximum year of manufacture
  * year_min `integer`: Minumum year of manufacture
  * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
  * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
  * shop `string`: Slug of shop to search
  * shop_id `string`: ID of shop to search
  * listing_type `string`: Type of listing: auctions,offers
  * ships_to `string`: Limit search to items that ship to this country code
  * exclude_auctions `boolean`: If true, exclude auctions
  * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
  * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
  * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### listing_conditions.get
List of supported product conditions


```js
reverb.listing_conditions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### listings.get
Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.


```js
reverb.listings.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search query.
  * auction_price_max `number`: Maximum current auction price
  * category `string`: Category slug from /api/categories
  * product_type `string`: Product type slug from /api/categories
  * conditions `array`: Condition: all,new,b-stock,used,non-functioning
  * decade `string`: Decade: e.g. 1970s, early 70s
  * finish `string`: Visual finish of the item, common for guitars
  * handmade `boolean`: Handmade items only
  * item_city `string`: City where item is located
  * item_country `string`: DEPRECATED - Country code where item is located
  * item_region `string`: Country code where item is located
  * item_state `string`: State or region code where item is located
  * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
  * model `string`: Model of item (e.g. Stratocaster)
  * must_not `string`: Search term negation. If you want to exclude a term, add it here
  * price_max `number`: Maximum price of search results (USD)
  * price_min `number`: Minimum price of search results (USD)
  * currency `string`: The currency to be used for the price filters
  * year_max `integer`: Maximum year of manufacture
  * year_min `integer`: Minumum year of manufacture
  * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
  * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
  * shop `string`: Slug of shop to search
  * shop_id `string`: ID of shop to search
  * listing_type `string`: Type of listing: auctions,offers
  * ships_to `string`: Limit search to items that ship to this country code
  * exclude_auctions `boolean`: If true, exclude auctions
  * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
  * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
  * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### listings.post
Create a listing


```js
reverb.listings.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * categories `array`
      * items `object`
        * uuid `string`: UUID of the category for this listing.
    * condition `object`: Condition
      * uuid **required** `string` (values: fbf35668-96a0-4baa-bcde-ab18d6b1b329, 6a9dfcad-600b-46c8-9e08-ce6e5057921e, 98777886-76d0-44c8-865e-bb40e669e934, f7a3f48c-972a-44c6-b01a-0cd27488d3f6, ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d, df268ad1-c462-4ba6-b6db-e007e23922ea, ac5b9c1e-dc78-466d-b0b3-7cf712967a48, 6db7df88-293b-4017-a1c1-cdb5e599fa1a, 9225283f-60c2-4413-ad18-1f5eba7a856f, 7c3f45de-2ae0-4c81-8400-fdb6b1d74890): Condition UUID
    * description `string`: Product description. Please keep formatting to a minimum.
    * finish `string`: Finish, e.g. 'Sunburst'
    * has_inventory `boolean`: Set true if selling more than one
    * inventory `integer`: Number of items available for sale. Reverb will increment and decrement automatically.
    * location `object`
      * country_code `string`: Ex: US
      * locality `string`: Ex: Chicago
      * region `string`: Ex: IL
    * make `string`: ex: Fender, Gibson
    * model `string`: ex: Stratocaster, SG
    * offers_enabled `boolean`: Whether the listing accepts negotiated offers (default: true)
    * origin_country_code `string`: Country of origin/manufacture, ISO code (e.g: US)
    * photos `array`: An array of image URLs. Ex: ['http://my.site.com/image.jpg']
      * items `string`
    * price `object`
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
    * publish `boolean`: Publish your listing if draft
    * seller `object`
      * paypal_email `string`
    * seller_cost `string`: Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)
    * shipping `object`
      * local `boolean`: True if you offer local pickup
      * rates `array`: List of shipping rates. Set to null to clear rates.
        * items `object`
          * rate `object`
            * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
            * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
          * region_code `string`: Country code or subregion/superregion code. Full list of codes at /api/shipping/regions
    * shipping_profile_id `string`: id of a shop's shipping profile
    * shipping_profile_name `string`: DEPRECATED, please use shipping_profile_id. Name of a shipping profile
    * sku `string`: Unique identifier for product
    * sold_as_is `boolean`: This item is sold As-Is and cannot be returned
    * storage_location `string`: Internal note used by sellers to back reference their catalog system when entering a listing
    * tax_exempt `boolean`: Listing is exempt from taxes / VAT
    * title `string`: Title of your listing
    * upc `string`: Valid UPC code
    * upc_does_not_apply `string`: True if a brand new product has no UPC code, ie for a handmade or custom item
    * year `string`: Supports many formats. Ex: 1979, mid-70s, late 90s

#### Output
*Output schema unknown*

### listings.all.get
All listings including used, handmade, and brand new


```js
reverb.listings.all.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search query.
  * auction_price_max `number`: Maximum current auction price
  * category `string`: Category slug from /api/categories
  * product_type `string`: Product type slug from /api/categories
  * conditions `array`: Condition: all,new,b-stock,used,non-functioning
  * decade `string`: Decade: e.g. 1970s, early 70s
  * finish `string`: Visual finish of the item, common for guitars
  * handmade `boolean`: Handmade items only
  * item_city `string`: City where item is located
  * item_country `string`: DEPRECATED - Country code where item is located
  * item_region `string`: Country code where item is located
  * item_state `string`: State or region code where item is located
  * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
  * model `string`: Model of item (e.g. Stratocaster)
  * must_not `string`: Search term negation. If you want to exclude a term, add it here
  * price_max `number`: Maximum price of search results (USD)
  * price_min `number`: Minimum price of search results (USD)
  * currency `string`: The currency to be used for the price filters
  * year_max `integer`: Maximum year of manufacture
  * year_min `integer`: Minumum year of manufacture
  * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
  * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
  * shop `string`: Slug of shop to search
  * shop_id `string`: ID of shop to search
  * listing_type `string`: Type of listing: auctions,offers
  * ships_to `string`: Limit search to items that ship to this country code
  * exclude_auctions `boolean`: If true, exclude auctions
  * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
  * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
  * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### listings.facets.seller_location.get
Individual facets


```js
reverb.listings.facets.seller_location.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### listings.id.negotiation.get
Returns the latest negotiation for the requesting user given a listing id


```js
reverb.listings.id.negotiation.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### listings.id.offer.post
Make an offer to the seller of a listing


```js
reverb.listings.id.offer.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * message `string`: Message to include with counter offer
    * price **required** `string`: Offer price
    * shipping_price `string`: Shipping price (sellers only)

#### Output
*Output schema unknown*

### listings.listing_id.bump.get
View available bump tiers and stats for a listing


```js
reverb.listings.listing_id.bump.get({
  "listing_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`

#### Output
*Output schema unknown*

### listings.listing_id.bump.budget_type.post
Bump a listing


```js
reverb.listings.listing_id.bump.budget_type.post({
  "listing_id": "",
  "budget_type": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`
  * budget_type **required** `string`

#### Output
*Output schema unknown*

### listings.listing_id.conversations.post
Start a conversation with a seller


```js
reverb.listings.listing_id.conversations.post({
  "listing_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`
  * body `object`
    * body **required** `string`

#### Output
*Output schema unknown*

### listings.listing_id.images.get
View the images associated with a particular listing


```js
reverb.listings.listing_id.images.get({
  "listing_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`

#### Output
*Output schema unknown*

### listings.listing_id.images.image_id.delete
Delete an image from a listing


```js
reverb.listings.listing_id.images.image_id.delete({
  "listing_id": "",
  "image_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`
  * image_id **required** `string`

#### Output
*Output schema unknown*

### listings.listing_id.product_bundle.get
Find a product bundle attached to a listing


```js
reverb.listings.listing_id.product_bundle.get({
  "listing_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`
  * for_seller `boolean`: Pass to see non-live bundles as the seller

#### Output
*Output schema unknown*

### listings.listing_id.sales.get
See all sales that include a listing.


```js
reverb.listings.listing_id.sales.get({
  "listing_id": ""
}, context)
```

#### Input
* input `object`
  * listing_id **required** `string`

#### Output
*Output schema unknown*

### listings.slug.delete
Delete a draft listing. Cannot be used on non-drafts.


```js
reverb.listings.slug.delete({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### listings.slug.get
Listing details


```js
reverb.listings.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### listings.slug.put
Update a listing


```js
reverb.listings.slug.put({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`
  * body `object`
    * categories `array`
      * items `object`
        * uuid `string`: UUID of the category for this listing.
    * condition `object`: Condition
      * uuid **required** `string` (values: fbf35668-96a0-4baa-bcde-ab18d6b1b329, 6a9dfcad-600b-46c8-9e08-ce6e5057921e, 98777886-76d0-44c8-865e-bb40e669e934, f7a3f48c-972a-44c6-b01a-0cd27488d3f6, ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d, df268ad1-c462-4ba6-b6db-e007e23922ea, ac5b9c1e-dc78-466d-b0b3-7cf712967a48, 6db7df88-293b-4017-a1c1-cdb5e599fa1a, 9225283f-60c2-4413-ad18-1f5eba7a856f, 7c3f45de-2ae0-4c81-8400-fdb6b1d74890): Condition UUID
    * description `string`: Product description. Please keep formatting to a minimum.
    * finish `string`: Finish, e.g. 'Sunburst'
    * has_inventory `boolean`: Set true if selling more than one
    * inventory `integer`: Number of items available for sale. Reverb will increment and decrement automatically.
    * location `object`
      * country_code `string`: Ex: US
      * locality `string`: Ex: Chicago
      * region `string`: Ex: IL
    * make `string`: ex: Fender, Gibson
    * model `string`: ex: Stratocaster, SG
    * offers_enabled `boolean`: Whether the listing accepts negotiated offers (default: true)
    * origin_country_code `string`: Country of origin/manufacture, ISO code (e.g: US)
    * photos `array`: An array of image URLs. Ex: ['http://my.site.com/image.jpg']
      * items `string`
    * price `object`
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
    * publish `boolean`: Publish your listing if draft
    * seller `object`
      * paypal_email `string`
    * seller_cost `string`: Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)
    * shipping `object`
      * local `boolean`: True if you offer local pickup
      * rates `array`: List of shipping rates. Set to null to clear rates.
        * items `object`
          * rate `object`
            * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
            * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
          * region_code `string`: Country code or subregion/superregion code. Full list of codes at /api/shipping/regions
    * shipping_profile_id `string`: id of a shop's shipping profile
    * shipping_profile_name `string`: DEPRECATED, please use shipping_profile_id. Name of a shipping profile
    * sku `string`: Unique identifier for product
    * sold_as_is `boolean`: This item is sold As-Is and cannot be returned
    * storage_location `string`: Internal note used by sellers to back reference their catalog system when entering a listing
    * tax_exempt `boolean`: Listing is exempt from taxes / VAT
    * title `string`: Title of your listing
    * upc `string`: Valid UPC code
    * upc_does_not_apply `string`: True if a brand new product has no UPC code, ie for a handmade or custom item
    * year `string`: Supports many formats. Ex: 1979, mid-70s, late 90s

#### Output
*Output schema unknown*

### listings.slug.edit.get
Edit listing.


```js
reverb.listings.slug.edit.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### listings.slug.flag.post
Flag a listing for inappropriate content or fraud


```js
reverb.listings.slug.flag.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`
  * body `object`
    * reason **required** `string`: Valid reasons: 'Sexuality/nudity', 'Hateful or inappropriate speech', 'Item not as described or potential fraud', 'Trademark infringement', 'Other'

#### Output
*Output schema unknown*

### listings.slug.reviews.get
View reviews of a listing


```js
reverb.listings.slug.reviews.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### listings.slug.reviews.post
Create a review for a listing


```js
reverb.listings.slug.reviews.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### listings.slug.similar_listings.get
Listing details


```js
reverb.listings.slug.similar_listings.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.account.get
Get account details


```js
reverb.my.account.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.account.put
Update account details


```js
reverb.my.account.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * currency `string`: The currency preference for the account
    * first_name `string`: The first name of the account holder
    * last_name `string`: The last name of the account holder
    * shipping_region_code `string`: The shipping region preference for the account

#### Output
*Output schema unknown*

### my.addresses.get
See all addresses in your address book


```js
reverb.my.addresses.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.addresses.post
Create a new address in your address book


```js
reverb.my.addresses.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.addresses.address_id.delete
Delete an existing address in your address book


```js
reverb.my.addresses.address_id.delete({
  "address_id": ""
}, context)
```

#### Input
* input `object`
  * address_id **required** `string`

#### Output
*Output schema unknown*

### my.addresses.address_id.put
Update an existing address in your address book


```js
reverb.my.addresses.address_id.put({
  "address_id": ""
}, context)
```

#### Input
* input `object`
  * address_id **required** `string`

#### Output
*Output schema unknown*

### my.conversations.get
Get a list of your conversations


```js
reverb.my.conversations.get({}, context)
```

#### Input
* input `object`
  * search `string`: Query string to search conversations by
  * unread_only `boolean`: Show unread conversations only
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.conversations.post
Start a conversation


```js
reverb.my.conversations.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * body **required** `string`: The body of the message
    * cloudinary_photos `array`: An array of cloudinary data hashes (Reverb internal use only).
      * items `string`
    * listing_id `integer`: The id of the listing being discussed
    * recipient_id `integer`: The id of the user you are trying to contact

#### Output
*Output schema unknown*

### my.conversations.conversation_id.messages.post
Send a message


```js
reverb.my.conversations.conversation_id.messages.post({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`
  * body `object`
    * body **required** `string`

#### Output
*Output schema unknown*

### my.conversations.id.get
Display conversation details with messages in natural time order (oldest to newest)


```js
reverb.my.conversations.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.conversations.id.put
Mark a conversation read/unread


```js
reverb.my.conversations.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * read `boolean`: Should the conversation be marked as read

#### Output
*Output schema unknown*

### my.counts.get
Get your actionable status counts


```js
reverb.my.counts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.curated_set.product.product_id.delete



```js
reverb.my.curated_set.product.product_id.delete({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`

#### Output
*Output schema unknown*

### my.curated_set.product.product_id.post



```js
reverb.my.curated_set.product.product_id.post({
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * product_id **required** `string`

#### Output
*Output schema unknown*

### my.feed.get
Get listings from your feed


```js
reverb.my.feed.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.feed.customize.get
get your feed customization options


```js
reverb.my.feed.customize.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.feed.grid.get
get your feed


```js
reverb.my.feed.grid.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.feedback.received.get
List of received feedback


```js
reverb.my.feedback.received.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.feedback.sent.get
List of sent feedback


```js
reverb.my.feedback.sent.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.follows.get
See what the user is following


```js
reverb.my.follows.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.follows.articles.get
Returns a user's ArticleCategoryFollows


```js
reverb.my.follows.articles.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.follows.articles.post
Set a user's ArticleCategoryFollows


```js
reverb.my.follows.articles.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * category_uuids **required** `string`

#### Output
*Output schema unknown*

### my.follows.brands.slug.delete
Unfollow a brand


```js
reverb.my.follows.brands.slug.delete({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.brands.slug.get
Follow status for a brand


```js
reverb.my.follows.brands.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.brands.slug.post
Follow a brand


```js
reverb.my.follows.brands.slug.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.category.subcategory.delete
Unfollow a subcategory


```js
reverb.my.follows.categories.category.subcategory.delete({
  "category": "",
  "subcategory": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`
  * subcategory **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.category.subcategory.get
Follow status for a subcategory


```js
reverb.my.follows.categories.category.subcategory.get({
  "category": "",
  "subcategory": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`
  * subcategory **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.category.subcategory.post
Follow a subcategory


```js
reverb.my.follows.categories.category.subcategory.post({
  "category": "",
  "subcategory": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`
  * subcategory **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.identifier.delete
Unfollow a category


```js
reverb.my.follows.categories.identifier.delete({
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.identifier.get
Follow status for a category


```js
reverb.my.follows.categories.identifier.get({
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** `string`

#### Output
*Output schema unknown*

### my.follows.categories.identifier.post
Follow a category


```js
reverb.my.follows.categories.identifier.post({
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** `string`

#### Output
*Output schema unknown*

### my.follows.collections.slug.delete
Unfollow a collection


```js
reverb.my.follows.collections.slug.delete({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.collections.slug.get
Follow status for a collection


```js
reverb.my.follows.collections.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.collections.slug.post
Follow a collection


```js
reverb.my.follows.collections.slug.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.handpicked.slug.delete
Unfollow a handpicked collection


```js
reverb.my.follows.handpicked.slug.delete({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.handpicked.slug.get
Follow status for a handpicked collection


```js
reverb.my.follows.handpicked.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.handpicked.slug.post
Follow a handpicked collection


```js
reverb.my.follows.handpicked.slug.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.search.get
Follow status for a search


```js
reverb.my.follows.search.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.follows.search.post
Follow a search


```js
reverb.my.follows.search.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
    * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
    * auction_price_max `number`: Maximum current auction price
    * category `string`: Category slug from /api/categories
    * conditions `array` (values: all, new, b-stock, used, non-functioning): Condition: all,new,b-stock,used,non-functioning
      * items `string`
    * currency `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency to be used for the price filters
    * decade `string`: Decade: e.g. 1970s, early 70s
    * exclude_auctions `boolean`: If true, exclude auctions
    * finish `string`: Visual finish of the item, common for guitars
    * handmade `boolean`: Handmade items only
    * item_city `string`: City where item is located
    * item_country `string`: DEPRECATED - Country code where item is located
    * item_region `string`: Country code where item is located
    * item_state `string`: State or region code where item is located
    * listing_type `string` (values: auctions, offers): Type of listing: auctions,offers
    * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
      * items `string`
    * model `string`: Model of item (e.g. Stratocaster)
    * must_not `string`: Search term negation. If you want to exclude a term, add it here
    * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.
      * items `integer`
    * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
    * price_max `number`: Maximum price of search results (USD)
    * price_min `number`: Minimum price of search results (USD)
    * product_type `string`: Product type slug from /api/categories
    * query `string`: Search query.
    * ships_to `string`: Limit search to items that ship to this country code
    * shop `string`: Slug of shop to search
    * shop_id `string`: ID of shop to search
    * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
    * year_max `integer`: Maximum year of manufacture
    * year_min `integer`: Minumum year of manufacture

#### Output
*Output schema unknown*

### my.follows.shops.slug.delete
Unfollow a shop


```js
reverb.my.follows.shops.slug.delete({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.shops.slug.get
Follow status for a shop


```js
reverb.my.follows.shops.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.shops.slug.post
Follow a shop


```js
reverb.my.follows.shops.slug.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### my.follows.follow_id.delete
Delete a follow


```js
reverb.my.follows.follow_id.delete({
  "follow_id": ""
}, context)
```

#### Input
* input `object`
  * follow_id **required** `string`

#### Output
*Output schema unknown*

### my.follows.follow_id.alert.delete



```js
reverb.my.follows.follow_id.alert.delete({
  "follow_id": ""
}, context)
```

#### Input
* input `object`
  * follow_id **required** `string`

#### Output
*Output schema unknown*

### my.follows.follow_id.alert.post



```js
reverb.my.follows.follow_id.alert.post({
  "follow_id": ""
}, context)
```

#### Input
* input `object`
  * follow_id **required** `string`

#### Output
*Output schema unknown*

### my.listings.get
Retrieve a list of live listings for the seller. To search all listings specify state=all


```js
reverb.my.listings.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search query.
  * auction_price_max `number`: Maximum current auction price
  * category `string`: Category slug from /api/categories
  * product_type `string`: Product type slug from /api/categories
  * conditions `array`: Condition: all,new,b-stock,used,non-functioning
  * decade `string`: Decade: e.g. 1970s, early 70s
  * finish `string`: Visual finish of the item, common for guitars
  * handmade `boolean`: Handmade items only
  * item_city `string`: City where item is located
  * item_country `string`: DEPRECATED - Country code where item is located
  * item_region `string`: Country code where item is located
  * item_state `string`: State or region code where item is located
  * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
  * model `string`: Model of item (e.g. Stratocaster)
  * must_not `string`: Search term negation. If you want to exclude a term, add it here
  * price_max `number`: Maximum price of search results (USD)
  * price_min `number`: Minimum price of search results (USD)
  * currency `string`: The currency to be used for the price filters
  * year_max `integer`: Maximum year of manufacture
  * year_min `integer`: Minumum year of manufacture
  * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
  * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
  * shop `string`: Slug of shop to search
  * shop_id `string`: ID of shop to search
  * listing_type `string`: Type of listing: auctions,offers
  * ships_to `string`: Limit search to items that ship to this country code
  * exclude_auctions `boolean`: If true, exclude auctions
  * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
  * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
  * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.
  * state `string`: Available: ["all", "draft", "ended", "live", "ordered", "sold_out", "suspended", "seller_unavailable"]. Defaults to 'live'
  * sku `string`: Find a listing by sku

#### Output
*Output schema unknown*

### my.listings.drafts.get
Retrieve a list your draft listings


```js
reverb.my.listings.drafts.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search query.
  * auction_price_max `number`: Maximum current auction price
  * category `string`: Category slug from /api/categories
  * product_type `string`: Product type slug from /api/categories
  * conditions `array`: Condition: all,new,b-stock,used,non-functioning
  * decade `string`: Decade: e.g. 1970s, early 70s
  * finish `string`: Visual finish of the item, common for guitars
  * handmade `boolean`: Handmade items only
  * item_city `string`: City where item is located
  * item_country `string`: DEPRECATED - Country code where item is located
  * item_region `string`: Country code where item is located
  * item_state `string`: State or region code where item is located
  * make `array`: Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
  * model `string`: Model of item (e.g. Stratocaster)
  * must_not `string`: Search term negation. If you want to exclude a term, add it here
  * price_max `number`: Maximum price of search results (USD)
  * price_min `number`: Minimum price of search results (USD)
  * currency `string`: The currency to be used for the price filters
  * year_max `integer`: Maximum year of manufacture
  * year_min `integer`: Minumum year of manufacture
  * accepts_gift_cards `boolean`: If true, include only items that accept gift cards
  * preferred_seller `boolean`: If true, include only items by Reverb Preferred Sellers
  * shop `string`: Slug of shop to search
  * shop_id `string`: ID of shop to search
  * listing_type `string`: Type of listing: auctions,offers
  * ships_to `string`: Limit search to items that ship to this country code
  * exclude_auctions `boolean`: If true, exclude auctions
  * accepts_payment_plans `boolean`: If true, only show items that can be purchased with a payment plan
  * watchers_count_min `integer`: Minimum number of watchers (used to find popular items)
  * not_ids `array`: Listing ID negation. If you want to exclude a listing, add it here.

#### Output
*Output schema unknown*

### my.listings.negotiations.get
Get a list of active negotiations as a seller


```js
reverb.my.listings.negotiations.get({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.listings.slug.state.end.put
End a listing


```js
reverb.my.listings.slug.state.end.put({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`
  * body `object`
    * reason **required** `string` (values: not_sold, reverb_sale): The reason this listing is being ended. Valid reasons: ["not_sold", "reverb_sale"].

#### Output
*Output schema unknown*

### my.lists.get
Get a list of your lists (wishlist, watch list, etc)


```js
reverb.my.lists.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.negotiations.buying.get
Get a list of active negotiations as a buyer


```js
reverb.my.negotiations.buying.get({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.negotiations.id.get
Get offer details


```js
reverb.my.negotiations.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.negotiations.id.accept.post
Accept an offer


```js
reverb.my.negotiations.id.accept.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * message `string`: Message to include with accepted offer

#### Output
*Output schema unknown*

### my.negotiations.id.counter.post
Counter an offer


```js
reverb.my.negotiations.id.counter.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * country_code `string`
    * message `string`: Message to include with counter offer
    * offer_items `array`
      * items `object`
        * listing_id **required** `string`
        * price **required** `string`
        * shipping_price **required** `string`
    * price `object`
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in
    * region_code `string`
    * shipping_price `object`: Shipping price (sellers only)
      * amount **required** `string`: The amount of money being expressed, as a POSIX-compliant decimal number
      * currency **required** `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN): The currency the money will be expressed in

#### Output
*Output schema unknown*

### my.negotiations.id.decline.post
Decline an offer


```js
reverb.my.negotiations.id.decline.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.orders.awaiting_feedback.get
List of orders that need feedback


```js
reverb.my.orders.awaiting_feedback.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.orders.buying.all.get
Returns all orders, newest first.


```js
reverb.my.orders.buying.all.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.orders.buying.unpaid.get
Returns unpaid orders, newest first.


```js
reverb.my.orders.buying.unpaid.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.orders.buying.id.get
Returns order details for a buyer


```js
reverb.my.orders.buying.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.orders.buying.id.mark_received.post
Marks an order as received by the buyer


```js
reverb.my.orders.buying.id.mark_received.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.orders.selling.all.get
Get all seller orders, newest first.


```js
reverb.my.orders.selling.all.get({}, context)
```

#### Input
* input `object`
  * created_start_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * created_end_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_start_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_end_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.orders.selling.awaiting_shipment.get
Get seller orders awaiting shipment, newest first.


```js
reverb.my.orders.selling.awaiting_shipment.get({}, context)
```

#### Input
* input `object`
  * created_start_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * created_end_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_start_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_end_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.orders.selling.buyer_history.buyer_id.get
See previous orders from buyer


```js
reverb.my.orders.selling.buyer_history.buyer_id.get({
  "buyer_id": ""
}, context)
```

#### Input
* input `object`
  * buyer_id **required** `string`

#### Output
*Output schema unknown*

### my.orders.selling.unpaid.get
Get unpaid seller orders, newest first.


```js
reverb.my.orders.selling.unpaid.get({}, context)
```

#### Input
* input `object`
  * created_start_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * created_end_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_start_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_end_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * page `integer`
  * per_page `integer`
  * offset `integer`

#### Output
*Output schema unknown*

### my.orders.selling.id.get
Returns order details for a seller


```js
reverb.my.orders.selling.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.orders.selling.id.mark_picked_up.post
Marks an order as picked up


```js
reverb.my.orders.selling.id.mark_picked_up.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * date `string`: Date the item was picked up.

#### Output
*Output schema unknown*

### my.orders.selling.id.ship.post
Marks an order as shipped


```js
reverb.my.orders.selling.id.ship.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * provider **required** `string`: Shipping provider: One of UPS, USPS, FedEx, DHL, DHLExpress, DHLGlobalMail, DHL Germany, Canada Post, Royal Mail, PostNL, Australia Post, EMS, La Poste, China Post, GLS, Parcelforce, Purolator, Interlogistica, Correos España, Ukraine Post, Other
    * send_notification **required** `boolean`: Should we send an email notification to the buyer
    * tracking_number **required** `string`: Tracking number provided by the shipping provider

#### Output
*Output schema unknown*

### my.orders.selling.order_id.refund_requests.post
Initiate a refund for a sold order


```js
reverb.my.orders.selling.order_id.refund_requests.post({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
*Output schema unknown*

### my.payments.selling.get
Get payments


```js
reverb.my.payments.selling.get({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * offset `integer`
  * created_start_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * created_end_date `string`: Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_start_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * updated_end_date `string`: Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
  * order_id `string`: Look up payments by order id

#### Output
*Output schema unknown*

### my.payments.selling.id.get
Get payment


```js
reverb.my.payments.selling.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.refund_requests.selling.get
Get a list of refund requests as a seller


```js
reverb.my.refund_requests.selling.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.refund_requests.selling.id.put
Update a refund request for a sold order


```js
reverb.my.refund_requests.selling.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.viewed_listings.get
Get a list of your recently viewed listings.


```js
reverb.my.viewed_listings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.wishlist.get
Get a list of wishlisted items


```js
reverb.my.wishlist.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### my.wishlist.id.delete
Remove a listing from your wishlist


```js
reverb.my.wishlist.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### my.wishlist.id.put
Add a listing to your wishlist


```js
reverb.my.wishlist.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### orders.order_id.feedback.buyer.get
Feedback details for an order's buyer


```js
reverb.orders.order_id.feedback.buyer.get({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
*Output schema unknown*

### orders.order_id.feedback.buyer.post
Add feedback about an order's buyer


```js
reverb.orders.order_id.feedback.buyer.post({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
*Output schema unknown*

### orders.order_id.feedback.seller.get
Feedback details for an order's seller


```js
reverb.orders.order_id.feedback.seller.get({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
*Output schema unknown*

### orders.order_id.feedback.seller.post
Add feedback about an order's seller


```js
reverb.orders.order_id.feedback.seller.post({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
*Output schema unknown*

### payment_methods.get
Get list of payment methods


```js
reverb.payment_methods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### priceguide.get
Search the Price Guide


```js
reverb.priceguide.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search query.

#### Output
*Output schema unknown*

### priceguide.id.get
Retrieve a Price Guide


```js
reverb.priceguide.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### priceguide.id.transactions.get
Get a list of paginated transactions for a price guide.


```js
reverb.priceguide.id.transactions.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * condition `string`

#### Output
*Output schema unknown*

### priceguide.id.transactions.summary.get
Get a summary of transactions for a given price guide


```js
reverb.priceguide.id.transactions.summary.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * number_of_months `integer`
  * condition `string`

#### Output
*Output schema unknown*

### products.reviews.id.get
View a review


```js
reverb.products.reviews.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### products.reviews.id.put
Update a review


```js
reverb.products.reviews.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body `object`
    * body `string`: Content of the review
    * rating `integer`: Rating from 1 to 5
    * title `string`: Title for the review

#### Output
*Output schema unknown*

### products.slug.reviews.get
View reviews of a product


```js
reverb.products.slug.reviews.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### products.slug.reviews.post
Create a review for a product


```js
reverb.products.slug.reviews.post({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### sales.reverb.get
View upcoming and live Reverb official sales.


```js
reverb.sales.reverb.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### sales.seller.get
View your created sales.


```js
reverb.sales.seller.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### sales.sale_id.listings.delete
Remove a listing from a sale


```js
reverb.sales.sale_id.listings.delete({
  "sale_id": ""
}, context)
```

#### Input
* input `object`
  * sale_id **required** `string`

#### Output
*Output schema unknown*

### sales.sale_id.listings.post
Add listings to a sale


```js
reverb.sales.sale_id.listings.post({
  "sale_id": ""
}, context)
```

#### Input
* input `object`
  * sale_id **required** `string`

#### Output
*Output schema unknown*

### sales.slug.get



```js
reverb.sales.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### shipping.providers.get
List of supported shipping providers


```js
reverb.shipping.providers.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipping.regions.get



```js
reverb.shipping.regions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.get
Get your own shop details


```js
reverb.shop.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.put
Update your shop profile


```js
reverb.shop.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * address `object`
      * country_code `string`
      * extended_address `string`
      * locality `string`
      * name `string`
      * phone `string`
      * postal_code `string`
      * region `string`
      * street_address `string`
    * currency `string` (values: USD, CAD, EUR, GBP, AUD, JPY, NZD, MXN)
    * description `string`
    * legal_country_code `string` (values: AD, AE, AF, AG, AI, AL, AM, AO, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)
    * legal_country_code_confirmed `boolean` (values: true)
    * name `string`
    * payment_policy `string`
    * return_policy `string`
    * shipping_policy `string`
    * website `string`

#### Output
*Output schema unknown*

### shop.listing_conditions.get
List of supported product conditions


```js
reverb.shop.listing_conditions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.payment_methods.get
Get accepted payment methods


```js
reverb.shop.payment_methods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.vacation.delete
Disable vacation mode. All listings will be re-enabled.


```js
reverb.shop.vacation.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.vacation.get
Returns shop vacation status


```js
reverb.shop.vacation.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shop.vacation.post
Enable vacation mode. All listings will be unavailable until vacation mode is turned off.


```js
reverb.shop.vacation.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shops.shop_id.shipping_profiles.get
List of shipping profiles for your shop


```js
reverb.shops.shop_id.shipping_profiles.get({
  "shop_id": ""
}, context)
```

#### Input
* input `object`
  * shop_id **required** `string`

#### Output
*Output schema unknown*

### shops.slug.get
Get details on a shop.


```js
reverb.shops.slug.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`
  * include_listing_count `boolean`: Include the live listing count in the response.

#### Output
*Output schema unknown*

### shops.slug.feedback.get
Get seller's feedback


```js
reverb.shops.slug.feedback.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### shops.slug.feedback.buyer.get
Get seller's feedback as a buyer


```js
reverb.shops.slug.feedback.buyer.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### shops.slug.feedback.seller.get
Get seller's feedback as a seller


```js
reverb.shops.slug.feedback.seller.get({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`

#### Output
*Output schema unknown*

### wants.get
A list of wanted items by the user


```js
reverb.wants.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### wants.id.delete
Unmark an item wanted.


```js
reverb.wants.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### wants.id.put
Mark an item wanted. Returns 200 on success or 422 on failure.


```js
reverb.wants.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### webhooks.registrations.get
Get webhook registrations


```js
reverb.webhooks.registrations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### webhooks.registrations.post
Register a webhook


```js
reverb.webhooks.registrations.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * topic **required** `string` (values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled): Valid values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled
    * url **required** `string`

#### Output
*Output schema unknown*

### webhooks.registrations.id.delete
Remove a webhook


```js
reverb.webhooks.registrations.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### webhooks.registrations.id.get
Get details of a webhook registration


```js
reverb.webhooks.registrations.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
